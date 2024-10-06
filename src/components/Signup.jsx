import React from "react";

const Signup = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex flex-col justify-center my-10 border-8 rounded-3xl w-fit">
          <h2 className="align-center text-center font-bold text-5xl text-emerald-600 px-8 py-8">
            Sign Up
          </h2>
          <div className="p-2 px-10 flex flex-col justify-center">
            <div className="my-2">
              <p>Enter Your Name</p>
              <div className="py-4 flex justify-center">
                <input
                  className="mx-4 py-2 px-4 bg-zinc-100 rounded-lg bg-opacity-100 focus:outline-none"
                  type="text"
                  required
                  placeholder="First Name"
                />
                <input
                  className="mx-4 py-2 px-4 bg-zinc-100 rounded-lg bg-opacity-100 focus:outline-none"
                  type="text"
                  required
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="my-2">
              <p>Enter Your Email</p>
              <div className="flex justify-center">
                <input
                  className="py-2 w-4/5 px-4 bg-zinc-100 rounded-lg bg-opacity-100 focus:outline-none"
                  type="text"
                  required
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="my-2">
              <p>Create Passward</p>
              <div className="flex">
                <div className="py-2 mx-4 flex justify-center">
                  <input
                    className="py-2 px-4 bg-zinc-100 rounded-lg bg-opacity-100 focus:outline-none"
                    type="password"
                    required
                    placeholder="Enter Password"
                  />
                </div>
                <div className="py-2  mx-4 flex justify-center">
                  <input
                    className="py-2 px-4 bg-zinc-100 rounded-lg bg-opacity-100 focus:outline-none"
                    type="password"
                    required
                    placeholder="Re-enter Password"
                  />
                </div>
              </div>
            </div>
            <div className="my-2">
              <p>Enter OTP send to Email</p>
              <div className="py-4 flex justify-center">
                <input
                  className=" py-2 px-4 bg-zinc-100 rounded-lg bg-opacity-100 focus:outline-none"
                  type="text"
                  required
                  placeholder="OTP"
                />
              </div>
            </div>
            <div className="py-4 flex gap-2 flex justify-center">
              <p>Alerady have account</p>
              <a href="#">Sign in</a>
            </div>
            <div className="py-2 flex justify-center">
              <input
                className="py-2 px-4 text-white font-bold bg-emerald-600 rounded-lg bg-opacity-100 focus:outline-none"
                type="submit"
                value="Sign Up"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
