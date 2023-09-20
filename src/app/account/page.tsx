"use client";

import { verifyToken } from "@/api";
import { loginUser } from "@/redux/slices/auth";
import { RootState } from "@/redux/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AlbumSection from "./albumSection";
import AppointmentSection from "./appointmentSection";
import { addToast } from "@/redux/slices/toast";
import { v4 } from "uuid";

const AccountPage = () => {
  const authState = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const user = await verifyToken();
        if (!user?.email) {
          router.push("/login");
        } else {
          dispatch(loginUser(user));
        }
      } catch (e) {
        router.push("/login");
        dispatch(
          addToast({
            id: v4(),
            message: "Login to view your account",
            type: "error",
          })
        );
      }
      setLoading(false);
    })();
  }, []);

  if (loading)
    return (
      <div className="h-[100vh] w-full flex justify-center items-center">
        <span className="loading loading-ring loading-lg" />
      </div>
    );
  const { user } = authState;
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between bg-accent px-8 lg:px-28 py-14">
        <h1 className={"text-6xl text-secondary justify-self-start"}>
          {user?.profile?.firstName}
        </h1>
        <Link href="/book?package=package 2" passHref>
          <button className="btn btn-primary  italic font-extralight mb-3 w-full md:w-48">
            Book Session Now
          </button>
        </Link>
      </div>
      <div className={"text-accent"}>
        <AlbumSection albums={user?.albums || []} />
        <AppointmentSection appointments={user?.appointments || []} />
      </div>
    </>
  );
};

export default AccountPage;
