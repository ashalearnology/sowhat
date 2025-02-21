import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen mx-3 flex items-center justify-center">
      <div className="border border-gray-400 rounded-2xl flex flex-col text-center mx-auto items-center w-full max-w-md p-6 space-y-4 py-12">
        <h1 className="text-3xl font-semibold mb-7">LOGIN</h1>
        <input className="border border-gray-400 rounded-2xl p-2 w-full" type="text" placeholder="Email" />
        <input className="border border-gray-400 rounded-2xl p-2 w-full" type="password" placeholder="Password" />
        <button className="bg-red-600 text-white w-full p-2 rounded-2xl hover:bg-red-700 transition font-bold">SIGN IN</button>
        <div className="flex items-center justify-center w-full text-sm gap-2 flex-wrap">
          <a href="#" className="text-red-600 underline font-bold">Create account</a>
          <span>/</span>
          <a href="#" className="text-red-600 underline font-bold">Forgot your Password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
