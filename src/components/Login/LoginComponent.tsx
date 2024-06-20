import React, { useEffect, useState } from "react";
import { SignInFirebase, SignUpFirebase } from "../../services/userFirebase";
import AuthForm from "./AuthForm";

function LoginComponentNew() {
  const [select, setSelect] = useState<string>("login");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault();
    const signUpService = new SignUpFirebase();
    try {
      await signUpService.signUp(email, password);
      setEmail("");
      setPassword("");
      setError(null);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleSignIn = async (event: React.FormEvent) => {
    event.preventDefault();
    const signInService = new SignInFirebase();
    try {
      await signInService.signIn(email, password);
      setEmail("");
      setPassword("");
      setError(null);
    } catch (err: any) {
      setError(err.message);
    }
  };

  useEffect(() => {
    setEmail("");
    setPassword("");
    setError(null);
  }, [select]);

  return (
    <div className="bg-background min-h-screen flex justify-center">
      <div className="flex w-full max-w-md  md:min-h-48  h-max p-8  relative  bg-gradient-to-t from-blue-200 from-10% to-primary to-100%   rounded-lg  flex-grow-1 shadow-md mt-4 border-1 border-gray-100  ">
        <div className=" w-full ">
          <div className="flex justify-between ">
            <button
              onClick={() => setSelect("login")}
              className={`ml-28 max-md:ml-[1rem] font-semibold  text-xl ${
                select === "login"
                  ? "underline underline-offset-8 decoration-amber-400 text-slate-100"
                  : "text-black"
              }`}>
              Login
            </button>
            <button
              onClick={() => setSelect("signup")}
              className={`mr-28 max-md:mr-[1rem] font-semibold text-xl ${
                select === "signup"
                  ? "underline underline-offset-8 decoration-amber-400 text-slate-100"
                  : "text-black"
              }`}>
              Sign Up
            </button>
          </div>

          <AuthForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleSignIn={handleSignIn}
            handleSignUp={handleSignUp}
            error={error}
            select={select}
          />
        </div>
      </div>
    </div>
  );
}

export default LoginComponentNew;
