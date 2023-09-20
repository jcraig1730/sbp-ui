"use client";

import { createContact } from "@/api";
import { addToast } from "@/redux/slices/toast";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [toastStatus, setToastStatus] = useState<{
    show: boolean;
    type: "success" | "error" | null;
  }>({ show: false, type: null });

  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const showToast = (type: "success" | "error") => {
    setToastStatus({ show: true, type });
    setTimeout(() => {
      setToastStatus({ show: false, type: null });
    }, 5000);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Here you would send the form data to your backend
    // For example:
    // await fetch('YOUR_BACKEND_ENDPOINT', {
    //  method: 'POST',
    //  body: JSON.stringify(formData),
    //  headers: {
    //    'Content-Type': 'application/json'
    //  }
    // });
    const result = await createContact({
      email: formData.email,
      text: formData.message,
      name: formData.name,
      subject: formData.subject,
    });
    if (result === 201) {
      dispatch(
        addToast({
          id: v4(),
          message: "Message Sent!",
          type: "success",
        })
      );
    } else {
      dispatch(
        addToast({
          id: v4(),
          message: "Message not sent, please try again",
          type: "error",
        })
      );
    }
  };

  return (
    <div className=" px-8 lg:px-28 py-14 text-accent">
      <h1 className={"text-6xl text-accent pb-6 justify-self-start"}>
        Contact
      </h1>
      <div className="flex flex-col items-center bg-primary p-4 py-12 max-w-2xl m-auto rounded-xl">
        <h1 className="text-2xl font-bold mb-5">Contact Us</h1>
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Subject
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3 text-right">
              <button
                type="submit"
                className="bg-accent hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Send
              </button>
            </div>
          </div>
        </form>
        {toastStatus.show && (
          <div className="toast toast-top toast-center">
            <div
              className={`alert ${
                toastStatus.type === "success" ? "alert-success" : "alert-error"
              }`}
            >
              <span>
                {toastStatus.type === "success"
                  ? "Message sent!"
                  : "There was a problem sending your message"}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactPage;
