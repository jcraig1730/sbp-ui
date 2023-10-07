"use client";

import { updatePassword } from "@/api";
import StandardPageWrapper from "@/components/pageWrappers/StandardPageWrapper";
import { addToast } from "@/redux/slices/toast";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";

const UpdatePassword = () => {
  const query = useSearchParams();
  const confirmationCode = query.get("token");
  const email = query.get("email");
  const router = useRouter();

  const [newPassword, setNewPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirm) {
      dispatch(
        addToast({
          message: "Passwords must match",
          type: "error",
          id: v4(),
        })
      );
      return;
    }
    const result = await updatePassword(confirmationCode!, email!, newPassword);

    if (result.status === 200) {
      dispatch(
        addToast({
          message: "Password updated",
          type: "success",
          id: v4(),
        })
      );
      router.push("/login");
    } else {
      dispatch(
        addToast({
          message: "Password reset failed",
          type: "error",
          id: v4(),
        })
      );
    }
  };

  return (
    <StandardPageWrapper title="Update Password">
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
            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  htmlFor="New_Password"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  New Password
                </label>
                <input
                  type="password"
                  name="New_Password"
                  id="New_Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  text-accent"
                  placeholder="••••••••"
                />
              </div>
              <div>
                <label
                  htmlFor="New_Password_Confirm"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Confirm New Password
                </label>
                <input
                  type="password"
                  name="New_Password_Confirm"
                  id="New_Password_Confirm"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  className="border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  text-accent"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Reset
              </button>
            </form>
          </div>
        </div>
      </div>
    </StandardPageWrapper>
  );
};

export default UpdatePassword;
