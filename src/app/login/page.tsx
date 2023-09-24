"use client";

import StandardPageWrapper from "@/components/pageWrappers/StandardPageWrapper";
import axios from "axios";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const params = useSearchParams();
  const router = useRouter();

  return (
    <StandardPageWrapper title="Login">
      <div className="flex flex-col items-center  px-6  mx-auto md:h-screen lg:py-0  min-h-screen pb-12 lg:pb-36">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-32 h-32 mr-2"
            src="/shelby_boldon_logo.svg"
            alt="logo"
          />
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
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-300">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                onClick={async (e) => {
                  e.preventDefault();
                  const result =
                    params.get("token") !== null
                      ? await axios.post(
                          "http://localhost:3000/auth/confirm-email?token=" +
                            params.get("token"),
                          {
                            username: email,
                            password,
                            confirmationCode: params.get("token"),
                          },
                          {
                            withCredentials: true,
                            headers: { Authorization: document.cookie },
                          }
                        )
                      : await axios.post(
                          "http://localhost:3000/auth/login",
                          {
                            username: email,
                            password,
                          },
                          {
                            withCredentials: true,
                            headers: { Authorization: document.cookie },
                          }
                        );
                  if (result.status === 201) {
                    router.push("/account");
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
