import React, { useState } from "react";

function LoginComponentNew() {
  const [login, setLogin] = useState<string>("login");

  return (
    <div className="bg-background min-h-screen flex justify-center">
      <div className="flex w-full max-w-md  md:min-h-48  max-h-96 p-8  relative  bg-gradient-to-t from-blue-200 from-10% to-primary to-100%   rounded-lg  flex-grow-1 shadow-md mt-4 border-1 border-gray-100  ">
        <div className=" w-full ">
          <div className="flex justify-between ">
            <button
              onClick={() => setLogin("login")}
              className={`ml-28 max-md:ml-[calc(8rem-7rem)] font-semibold  text-xl text-slate-100 ${
                login === "login"
                  ? "underline underline-offset-8 decoration-amber-400 text-slate-100"
                  : "text-black"
              }`}>
              Login
            </button>
            <button
              onClick={() => setLogin("signup")}
              className={`mr-28 max-md:mr-[calc(8rem-7rem)] font-semibold text-xl ${
                login === "signup"
                  ? "underline underline-offset-8 decoration-amber-400 text-slate-100"
                  : ""
              }`}>
              Sign Up
            </button>
          </div>

          <form className="flex flex-col ">
            <div className="mt-4">
              <div className=" relative flex flex-col text-lg font-normal">
                <label className="block">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@mail.com"
                  className="  p-[calc(0.5em-1px)_calc(0.75em-1px)] text-lg h-[45px] bg-surface  outline-none rounded shadow-sm "
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="relative flex flex-col text-lg font-normal">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="p-[calc(0.5em-1px)_calc(0.75em-1px)] text-lg h-[45px] bg-surface outline-none rounded shadow-sm"
                />
              </div>
            </div>
            <button className=" min-h-auto mt-4 mb-8 items-start flex w-32 hover:text-primary font-semibold ">
              {login === "login" ? <p>Forgot Password?</p> : <p></p>}
            </button>
            <button
              type="submit"
              className="bg-secondary h-10 rounded hover:bg-slate-400 hover:shadow-sm font-bold shadow-md hover:bg-gradient-to-t  hover:from-white hover:to-slate-100">
              {login === "login" ? <p>Login</p> : <p>Sign Up</p>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginComponentNew;
