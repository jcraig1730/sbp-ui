"use client";

import { registerUser } from "@/api";
import UserRegisterForm from "@/components/forms/UserRegisterForm";
import { addToast } from "@/redux/slices/toast";
import { validateEmail, validatePassword, validatePhoneNumber } from "@/utils";
import { useRouter } from "next/navigation";
import { MouseEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";

const Register = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  });

  const router = useRouter();
  const dispatch = useDispatch();

  const register = async (e: MouseEvent) => {
    e.preventDefault();
    if (!validateEmail(data.email)) {
      dispatch(
        addToast({
          message: "Please enter a valid email",
          type: "error",
          id: v4(),
        })
      );
      return;
    }
    if (data.password !== data.passwordConfirm) {
      dispatch(
        addToast({ message: "Passwords must match", type: "error", id: v4() })
      );
      return;
    }
    if (!validatePassword(data.password)) {
      dispatch(
        addToast({ message: "Invalid password", type: "error", id: v4() })
      );
      return;
    }
    if (!data.firstName) {
      dispatch(
        addToast({
          message: "Please enter a first name",
          type: "error",
          id: v4(),
        })
      );
      return;
    }
    if (!data.lastName) {
      dispatch(
        addToast({
          message: "Please enter a last name",
          type: "error",
          id: v4(),
        })
      );
      return;
    }
    if (!validatePhoneNumber) {
      dispatch(
        addToast({
          message: "Please enter a valid phone number",
          type: "error",
          id: v4(),
        })
      );
      return;
    }
    const { firstName, lastName, street, city, state, zip, phone } = data;
    const body = {
      email: data.email,
      password: data.password,
      profile: {
        firstName,
        lastName,
        street,
        city,
        state,
        zip,
        phone,
      },
    };

    const result = await registerUser(body);

    if (result.status === 201) {
      router.push("/register/confirm");
    }
  };
  return (
    <>
      <div className=" px-8 lg:px-28 pt-14 text-accent">
        <h1 className={"text-6xl text-accent pb-6 justify-self-start"}>
          Register
        </h1>
      </div>
      <div className="flex flex-wrap min-h-screen pb-12">
        <div className="w-full md:w-1/2">
          <UserRegisterForm
            data={data}
            setData={(key, value) => setData((d) => ({ ...d, [key]: value }))}
            submit={register}
          />
        </div>
        <div className="w-full md:w-1/2 bg-bottom bg-cover bg-no-repeat  h-screen  bg-[url(https://res.cloudinary.com/dfnp8pdyk/image/upload/v1696212163/Sadie15-82448cec_d76nbm.jpg)]"></div>
      </div>
    </>
  );
};

export default Register;
