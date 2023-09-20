import React from "react";

const CheckEmailPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Almost there...</h1>
        <p className="text-gray-700 mb-6">
          We've sent a login link to your email. Please check your inbox and
          follow the link to log in.
        </p>
        {/* <img
          src="https://via.placeholder.com/150"
          alt="Email Illustration"
          className="mx-auto mb-4"
        />
        <button className="bg-blue-500 text-white py-2 px-4 rounded-full transition duration-300 hover:bg-blue-700">
          Resend Email
        </button> */}
      </div>
    </div>
  );
};

export default CheckEmailPage;
