"use-client";

import Link from "next/link";
import { HTMLInputTypeAttribute, MouseEvent, useState } from "react";

interface UserRegisterFormProps {
  data: {
    email: string;
    password: string;
    passwordConfirm: string;
    firstName: string;
    lastName: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
  };
  setData: (key: string, value: string) => void;
  submit: (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => Promise<void>;
}

const UserRegisterForm = (props: UserRegisterFormProps) => {
  const { data, setData } = props;
  const [step, setStep] = useState(0);
  return (
    <div className="bg-accent flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0 h-screen ">
      <div className="bg-accent rounded-lg shadow md:mt-0 flex xl:p-0 w-full">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-full">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-secondary md:text-2xl ">
            Create an account
          </h1>
          <p className="text-sm font-light text-secondary">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-primary-600 hover:underline"
            >
              Login here
            </Link>
          </p>
          <form className="space-y-4 md:space-y-6 w-full" action="#">
            {step === 0 && (
              <>
                {[
                  {
                    id: "email",
                    label: "Your email",
                    name: "email",
                    placeHolder: "example@example.com",
                    type: "email",
                    dataKey: "email",
                  },
                  {
                    id: "password",
                    label: "Password",
                    name: "password",
                    placeHolder: "example@example.com",
                    type: "password",
                    dataKey: "password",
                  },
                  {
                    id: "confirm-password",
                    label: "Confirm password",
                    name: "confirm-password",
                    placeHolder: "••••••••",
                    setData: setData,
                    type: "password",
                    dataKey: "passwordConfirm",
                  },
                ].map((i) => (
                  <CoreInput
                    key={i.id}
                    id={i.id}
                    label={i.label}
                    name={i.name}
                    placeholder={i.placeHolder}
                    setData={setData}
                    type={i.type}
                    value={data[i.dataKey as keyof typeof data]}
                    dataKey={i.dataKey}
                  />
                ))}
                <div className="text-xs text-white">
                  Password must containt eight characters, at least one
                  uppercase letter, one lowercase letter, one number and one
                  special character
                </div>
              </>
            )}
            {step === 0 && (
              <button
                onClick={() => setStep((s) => s + 1)}
                className="btn btn-primary w-full"
              >
                Next
              </button>
            )}
            {step === 1 &&
              [
                {
                  id: "firstName",
                  label: "First name",
                  name: "firstname",
                  placeHolder: "First name",
                  setData: { setData },
                  type: "text",
                  dataKey: "firstName",
                },
                {
                  id: "lastName",
                  label: "Last name",
                  name: "lastName",
                  placeHolder: "Last name",
                  setData: { setData },
                  type: "text",
                  dataKey: "lastName",
                },
                {
                  id: "phone",
                  label: "Phone",
                  name: "phone",
                  placeHolder: "Phone",
                  setData: { setData },
                  type: "number",
                  dataKey: "phone",
                },
                // {
                //   id: "street",
                //   label: "Street",
                //   name: "street",
                //   placeHolder: "123 Main St",
                //   setData: { setData },
                //   type: "text",
                //   dataKey: "street",
                // },
                // {
                //   id: "city",
                //   label: "City",
                //   name: "city",
                //   placeHolder: "City",
                //   setData: { setData },
                //   type: "text",
                //   dataKey: "city",
                // },
                // {
                //   id: "state",
                //   label: "State",
                //   name: "state",
                //   placeHolder: "State",
                //   setData: { setData },
                //   type: "text",
                //   dataKey: "state",
                // },
                // {
                //   id: "zip",
                //   label: "Zip",
                //   name: "zip",
                //   placeHolder: "Zip",
                //   setData: { setData },
                //   type: "text",
                //   dataKey: "zip",
                // },
              ].map((i) => (
                <CoreInput
                  key={i.id}
                  id={i.id}
                  label={i.label}
                  name={i.name}
                  placeholder={i.placeHolder}
                  setData={setData}
                  type={i.type}
                  value={data[i.dataKey as keyof typeof data]}
                  dataKey={i.dataKey}
                />
              ))}
            {step === 1 && (
              <div className="flex justify-evenly">
                <button
                  onClick={() => setStep((s) => s - 1)}
                  className="w-2/5 btn btn-outline btn-secondary"
                >
                  Back
                </button>
                <button
                  onClick={props.submit}
                  className="w-2/5 btn btn-primary"
                >
                  Submit
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

interface InputProps {
  value: string;
  setData: (key: string, value: string) => void;
  label: string;
  type: HTMLInputTypeAttribute;
  name: string;
  id: string;
  placeholder: string;
  dataKey: string;
}

const CoreInput = (props: InputProps) => {
  const { value, setData, label, type, name, id, placeholder, dataKey } = props;
  return (
    <div className="max-w-md">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-white"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={(e) => setData(dataKey, e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
        placeholder={placeholder}
      />
    </div>
  );
};

export default UserRegisterForm;
