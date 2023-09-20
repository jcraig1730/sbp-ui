"use client";

import { verifyToken } from "@/api";
import { loginUser } from "@/redux/slices/auth";
import { RootState } from "@/redux/store";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AccountManager = () => {
  const [loading, setLoading] = useState(true);
  const authData = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        if (!authData.isAuthenticated) {
          const result = await verifyToken();
          if (result.email) {
            dispatch(loginUser(result));
          }
        }
      } catch (err) {
        setLoading(false);
      }
      setLoading(false);
    })();
  }, [authData.isAuthenticated, dispatch]);

  if (loading) return <span className="loading loading-ring loading-lg" />;
  if (!authData.isAuthenticated)
    return (
      <div>
        <Link href="/register" className="btn btn-ghost text-secondary">
          Sign up
        </Link>
        <Link href="/login" className="btn btn-secondary text-primary">
          Login
        </Link>
      </div>
    );

  return (
    <Link passHref href="/account">
      <div className={"flex items-center btn btn-ghost"}>
        <div>{authData.user?.profile?.firstName}</div>
        <label tabIndex={0} className="avatar">
          <div className="w-8 rounded-full">
            <img
              alt={"avatar"}
              src="https://alumni.engineering.utoronto.ca/files/2022/05/Avatar-Placeholder-400x400-1.jpg"
            />
          </div>
        </label>
      </div>
    </Link>
  );
};

export default AccountManager;
