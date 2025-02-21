import React from 'react';

const ForgotPassword = () => {
  return (
    <div className="min-h-screen mx-3 flex items-center justify-center">
      <div className="border border-gray-400 rounded-2xl flex flex-col text-center mx-auto items-center w-full max-w-md p-6 space-y-4 py-12">
        <h1 className="text-3xl font-semibold">Reset Your Password</h1>
        <p className="text-gray-600 text-sm">We will send you an email to reset your password.</p>
        <input className="border border-gray-400 rounded-2xl p-2 w-full" type="email" placeholder="Email" />
        <div className="w-full flex flex-col space-y-3">
          <button className="bg-red-600 text-white w-full p-2 rounded-2xl hover:bg-red-700 transition font-bold">Submit</button>
          <button className="bg-white border border-gray-700 text-gray-700 w-full p-2 rounded-2xl hover:bg-gray-600 hover:text-white transition font-bold">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
