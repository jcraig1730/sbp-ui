"use client";

import { useCallback, useEffect, useState } from "react";
import { Elements, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import BookPage from "./BookPage";
import { Provider, useDispatch } from "react-redux";
import store from "@/redux/store";
import { useRouter, useSearchParams } from "next/navigation";
import {
  createAppointment,
  getPaymentIntent,
  updatePaymentIntent,
  verifyToken,
} from "@/api";
import { addToast } from "@/redux/slices/toast";
import { v4 } from "uuid";
import { CreateEventDto } from "@/api/dtoTypes";
import { createPaymentSocket } from "@/websockets/payment.socket";
import AppointmentConfirmation from "./AppointmentConfirmation";

const stripePromise = loadStripe(process.env.STRIPE_KEY!);

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
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const [step, setStep] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState<string>(() => {
    return searchParams.get("package") || "package 1";
  });
  const [error, setError] = useState("");
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

  const [paymentFormComplete, setPaymentFormComplete] = useState(false);

  const [paymentSucceeded, setPaymentSucceeded] = useState(false);

  const onPaymentSuccess = async () => {
    dispatch(
      addToast({
        message: "Payment successful!",
        type: "success",
        id: v4(),
      })
    );

    const appointment = await createAppointment({
      start: selectedDate!.toString(),
      summary: selectedPackage as CreateEventDto["summary"],
      type: "standard",
    });
    setPaymentSucceeded(true);
  };

  const onPaymentFailure = () => {
    setStep(() => 2);
    dispatch(
      addToast({
        message: "Payment failed. Please try again.",
        type: "error",
        id: v4(),
      })
    );
  };

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
    if (step === 2 && paymentFormComplete) {
      setStep((s) => s + 1);
    }
    if (step === 3) {
      setProcessing(true);
      const userData = await verifyToken();
      if (!userData.email) router.push("/login");
      elements!.submit();
      const result = await (
        await stripePromise
      )?.confirmPayment({
        clientSecret: props.intent!.clientSecret,
        elements: elements || undefined,
        redirect: "if_required",
      });

      if (result?.error) {
        setStep(2);
        setProcessing(false);
        setError("Payment was not succesful, please try again.");
        dispatch(
          addToast({
            message: "Payment failed. Please try again.",
            type: "error",
            id: v4(),
          })
        );
      } else {
        createPaymentSocket(
          props.intent.id,
          onPaymentSuccess,
          onPaymentFailure
        );
      }
    }
  };
  const backClick = () => {
    if (step > 0) {
      setStep((s) => s - 1);
    }
  };

  if (paymentSucceeded && selectedDate && selectedPackage)
    return <AppointmentConfirmation start={selectedDate.toString()} />;

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
      paymentFormComplete={paymentFormComplete}
      setPaymentFormComplete={setPaymentFormComplete}
      error={error}
    />
  );
};

const StripeWrapper = () => {
  const dispatch = useDispatch();
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
            message: "Please login to book an appointment",
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

export default StripeWrapper;
