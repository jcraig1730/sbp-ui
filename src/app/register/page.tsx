"use client";

import ProfileForm from "@/components/forms/ProfileForm";
import UserRegisterForm from "@/components/forms/UserRegisterForm";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useState } from "react";

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

  const registerUser = async (e: any) => {
    e.preventDefault();
    if (data.password !== data.passwordConfirm) {
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

    const result = await axios.post(
      "http://localhost:3000/auth/register",
      body
    );

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
            submit={registerUser}
          />
        </div>
        <div className="w-full md:w-1/2 bg-bottom bg-cover bg-no-repeat  h-screen  bg-[url(https://images-pw.pixieset.com/elementfield/299268951/Sadie15-82448cec.jpg)]"></div>
      </div>
    </>
  );
};

export default Register;
