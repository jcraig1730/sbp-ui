import React, { ComponentType, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { addToast } from "@/redux/slices/toast";
import { v4 } from "uuid";
import { useRouter } from "next/navigation";

function withAuth<T extends React.JSX.IntrinsicAttributes>(
  Component: ComponentType<T>
) {
  return function WrappedComponent(props: T) {
    const router = useRouter();
    const dispatch = useDispatch();
    const authState = useSelector((state: RootState) => state.auth);

    useEffect(() => {
      if (!authState.isLoading && authState.isAuthenticated) {
        dispatch(
          addToast({ id: v4(), message: "Please login", type: "error" })
        );
        router.replace("/login"); // Adjust with your login route
      }
    }, [authState, router, dispatch]);

    return <Component {...props} />;
  };
}

export default withAuth;
