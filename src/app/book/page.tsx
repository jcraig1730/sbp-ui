"use client";

import { useCallback, useEffect, useState } from "react";
import { Elements, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import BookPage from "./BookPage";
import { Provider, useDispatch } from "react-redux";
import store from "@/redux/store";
import { useRouter, useSearchParams } from "next/navigation";
import { getPaymentIntent, updatePaymentIntent, verifyToken } from "@/api";
import { addToast } from "@/redux/slices/toast";
import { v4 } from "uuid";

const stripePromise = loadStripe(process.env.STRIPE_KEY!);

const baseReturnUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001/"
    : "https://www.shelbyboldenphotography.com/";

const BookWrapper = (props: {
  selected: string;
  intent: {
    description: string;
    amount: number;
    id: string;
    clientSecret: string;
  };
  updateIntent: (id: string, description: string) => void;
}) => {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState<string>(() => {
    return searchParams.get("package") || "package 1";
  });
  const selectPackage = (packageName: string) => {
    setSelectedPackage(packageName.toLowerCase());
  };

  const [selectedDate, setSelectedDate] = useState<Date>();
  const selectDate = (date: Date) => {
    setSelectedDate(date);
  };

  const [processing, setProcessing] = useState(false);

  const router = useRouter();

  const elements = useElements();

  const [paymentComplete, setPaymentComplete] = useState(false);

  const nextClick = async () => {
    if (step === 0 && selectedPackage) {
      if (props.intent && props.intent.description !== selectedPackage) {
        props.updateIntent(props.intent.id, selectedPackage);
      }
      setStep((s) => s + 1);
    }
    if (step === 1 && selectedDate) {
      setStep((s) => s + 1);
    }
    if (step === 2 && paymentComplete) {
      setStep((s) => s + 1);
    }
    if (step === 3) {
      setProcessing(true);
      const userData = await verifyToken();
      if (!userData.email) router.push("/login");
      elements!.submit();
      (await stripePromise)?.confirmPayment({
        clientSecret: props.intent!.clientSecret,
        elements: elements || undefined,
        confirmParams: {
          return_url: `${baseReturnUrl}purchase-complete?start=${selectedDate}&package=${selectedPackage}&type=${
            ["package 1", "package 2", "package 3"].includes(selectedPackage)
              ? "standard"
              : "infant"
          }`,
        },
      });
    }
  };
  const backClick = () => {
    if (step > 0) {
      setStep((s) => s - 1);
    }
  };

  return (
    <BookPage
      step={step}
      backClick={backClick}
      nextClick={nextClick}
      selectDate={selectDate}
      selectPackage={selectPackage}
      selectedDate={selectedDate}
      selectedPackage={selectedPackage}
      processing={processing}
      paymentFormComplete={paymentComplete}
      setPaymentFormComplete={setPaymentComplete}
    />
  );
};

const ElementWrapper = () => {
  const [intent, setIntent] = useState<{
    clientSecret: string;
    id: string;
    description: string;
    amount: number;
  }>();
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

  const getIntent = useCallback(getPaymentIntent, [searchParams]);

  const updateIntent = async (id: string, description: string) => {
    const result = await updatePaymentIntent(description, id);
    setIntent({
      clientSecret: result.data.client_secret,
      amount: result.data.amount,
      id: result.data.id,
      description: result.data.description,
    });
  };
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        const result = await getIntent(
          searchParams.get("package")?.toLowerCase()!
        );
        setIntent({
          clientSecret: result.data.clientSecret,
          id: result.data.id,
          description: result.data.description,
          amount: result.data.amount,
        });
        setLoading(false);
      } catch (error) {
        dispatch(
          addToast({
            id: v4(),
            message:
              "You must have an account and be logged in to create an appointment",
            type: "info",
          })
        );
        router.push("/register");
      }
    })();
  }, [dispatch, getIntent, router]);
  if (loading)
    return (
      <div className="h-[90vh] w-full flex items-center justify-center">
        <span className="loading loading-ring loading-lg" />
      </div>
    );

  return (
    <Provider store={store}>
      <Elements
        stripe={stripePromise}
        options={{ clientSecret: intent!.clientSecret }}
      >
        <BookWrapper
          intent={intent!}
          updateIntent={updateIntent}
          selected={searchParams.get("package") || "package 1"}
        />
      </Elements>
    </Provider>
  );
};

export default ElementWrapper;
