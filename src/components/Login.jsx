import React from "react";

const Login = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex flex-col justify-center my-10 border-8 rounded-3xl w-fit">
          <h2 className="align-center text-center font-bold text-5xl text-emerald-600 px-8 py-8">Sign In</h2>
          <div className="p-2 px-10 flex flex-col justify-center">
            <div className="py-4 flex justify-center">
              <input className=" py-2 px-4 bg-zinc-100 rounded-lg bg-opacity-100 focus:outline-none" type="text" required placeholder="Username or email" />
            </div>
            <div className="flex justify-center">
              <input className="py-2 px-4 bg-zinc-100 rounded-lg bg-opacity-100 focus:outline-none" type="password" required placeholder="Password" />
            </div>
            <div className="py-4 flex gap-10 flex justify-center">
              <a href="#">Forgot Password</a> <a href="#">Signup</a>
            </div>
            <div className="py-2 flex justify-center">
              <input className="py-2 px-4 text-white font-bold bg-emerald-600 rounded-lg bg-opacity-100 focus:outline-none" type="submit" value="Login" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
