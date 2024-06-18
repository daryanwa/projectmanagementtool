import React, { useEffect, useState } from "react";
import { SignInFirebase, SignUpFirebase } from "../../services/userFirebase";

function LoginComponentNew() {
  const [select, setSelect] = useState<string>("login");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault();
    const signUpService = new SignUpFirebase(email, password);
    try {
      await signUpService.signUp(email, password);
      console.log("signup");
      setEmail("");
      setPassword("");
      setError(null);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const hadleSignIn = async (event: React.FormEvent) => {
    event.preventDefault();
    const signInService = new SignInFirebase();
    try {
      await signInService.signIn(email, password);
      console.log("URA LOGIN");
      setEmail("");
      setPassword("");
      setError(null);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-background min-h-screen flex justify-center">
      <div className="flex w-full max-w-md  md:min-h-48  max-h-96 p-8  relative  bg-gradient-to-t from-blue-200 from-10% to-primary to-100%   rounded-lg  flex-grow-1 shadow-md mt-4 border-1 border-gray-100  ">
        <div className=" w-full ">
          <div className="flex justify-between ">
            <button
              onClick={() => setSelect("login")}
              className={`ml-28 max-md:ml-[1rem] font-semibold  text-xl ${
                select === "login"
                  ? "underline underline-offset-8 decoration-amber-400 text-slate-100"
                  : "text-black"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setSelect("signup")}
              className={`mr-28 max-md:mr-[1rem] font-semibold text-xl ${
                select === "signup"
                  ? "underline underline-offset-8 decoration-amber-400 text-slate-100"
                  : "text-black"
              }`}
            >
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
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="example@mail.com"
                  className="  p-[calc(0.5em-1px)_calc(0.75em-1px)] text-lg h-[45px] bg-surface  outline-none rounded shadow-sm "
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="relative flex flex-col text-lg font-normal">
                <label>Password</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="p-[calc(0.5em-1px)_calc(0.75em-1px)] text-lg h-[45px] bg-surface outline-none rounded shadow-sm"
                />
              </div>
            </div>
            <button className=" min-h-auto min-w-40 mt-4 mb-6 items-start flex w-32 hover:text-primary font-semibold ">
              {select === "login" ? <p>Forgot Password?</p> : <p></p>}
            </button>

            {select === "login" ? (
              <button
                onClick={hadleSignIn}
                type="submit"
                className="bg-secondary h-10 rounded hover:bg-slate-400 hover:shadow-sm font-bold shadow-md hover:bg-gradient-to-t  hover:from-white hover:to-slate-100"
              >
                Login{" "}
              </button>
            ) : (
              <button
                onClick={handleSignUp}
                type="submit"
                className="bg-secondary h-10 rounded hover:bg-slate-400 hover:shadow-sm font-bold shadow-md hover:bg-gradient-to-t  hover:from-white hover:to-slate-100"
              >
                SignUp{" "}
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginComponentNew;
