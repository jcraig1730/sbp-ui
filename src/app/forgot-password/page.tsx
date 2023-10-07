"use client";

import { initiateForgotPassword } from "@/api";
import StandardPageWrapper from "@/components/pageWrappers/StandardPageWrapper";
import { addToast } from "@/redux/slices/toast";
import { validateEmail } from "@/utils";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (!validateEmail(email)) {
      dispatch(
        addToast({
          message: "Please enter a valid email",
          type: "error",
          id: v4(),
        })
      );
      setLoading(false);
      return;
    }
    try {
      const result = await initiateForgotPassword(email);
      if (result.status === 201) {
        dispatch(
          addToast({
            message: "Reset link sent to email!",
            type: "success",
            id: v4(),
          })
        );
        setEmail("");
      }
    } catch (e) {
      dispatch(
        addToast({
          message: "Email not found",
          type: "error",
          id: v4(),
        })
      );
    }
    setLoading(false);
  };

  return (
    <StandardPageWrapper title="Forgot Password">
      <div className="flex flex-col items-center  px-6  mx-auto md:h-screen lg:py-0  min-h-screen pb-12 lg:pb-36">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <div className="relative mr-2 w-32 h-32">
            <Image
              fill
              className="object-contain"
              src="/shelby_boldon_logo.svg"
              alt="logo"
            />
          </div>
        </a>
        <div className="w-full  rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 bg-accent">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h2 className="text-xl font-bold leading-tight tracking-tight  md:text-2x text-white">
              Enter your email to reset password
            </h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  text-accent"
                  placeholder="name@domain.com"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                {loading ? (
                  <span className="loading-ring loading" />
                ) : (
                  <span>Reset Password</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </StandardPageWrapper>
  );
};

export default ForgotPassword;
