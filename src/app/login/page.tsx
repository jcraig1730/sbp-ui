"use client";

import { confirmEmail, loginUser } from "@/api";
import StandardPageWrapper from "@/components/pageWrappers/StandardPageWrapper";
import { addToast } from "@/redux/slices/toast";
import { validateEmail } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const params = useSearchParams();
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <StandardPageWrapper title="Login">
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
            <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2x text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
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
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary block w-full p-2.5  text-accent"
                />
              </div>
              <div className="flex items-center justify-between">
                <Link
                  href="forgot-password"
                  className="text-sm font-medium text-white hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                onClick={async (e) => {
                  e.preventDefault();
                  if (!email) {
                    dispatch(
                      addToast({
                        message: "Email cannot be empty",
                        type: "error",
                        id: v4(),
                      })
                    );
                    return;
                  }
                  if (!validateEmail(email)) {
                    dispatch(
                      addToast({
                        message: "Invalid email address",
                        type: "error",
                        id: v4(),
                      })
                    );
                    return;
                  }
                  if (!password) {
                    dispatch(
                      addToast({
                        message: "Password cannot be empty",
                        type: "error",
                        id: v4(),
                      })
                    );
                    return;
                  }
                  try {
                    const result =
                      params.get("token") !== null
                        ? await confirmEmail(
                            email,
                            password,
                            params.get("token")!
                          )
                        : await loginUser(email, password);
                    if (result.status === 201) {
                      router.push("/account");
                    }
                  } catch (e) {
                    dispatch(
                      addToast({
                        message: "Invalid username & password",
                        type: "error",
                        id: v4(),
                      })
                    );
                  }
                }}
                className="w-full bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  href="/register"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </StandardPageWrapper>
  );
};

export default Login;
