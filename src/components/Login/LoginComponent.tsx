import React, { useEffect, useState } from "react";
import { SignInFirebase, SignUpFirebase } from "../../services/userFirebase";
import AuthForm from "./AuthForm";
import LoadingComponent from "../Loading/LoadingComponent";
import { useSignUp, useSignIn } from "../../hooks/useAuth";
import { SaveUserData } from "../../services/userSaveToDb";

function LoginComponentNew() {
  const [select, setSelect] = useState<string>("login");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const { signUp, error: signUpError } = useSignUp();
  const { signIn, error: signInError } = useSignIn();

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      setLoading(true);
      await signUp(email, password);
      if (email != "" && password != "") setSelect("login");
      setError(signUpError);
    } catch (err: any) {
      throw new Error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (event: React.FormEvent) => {
    event.preventDefault();
    await signIn(email, password);
    setError(signInError);
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
          {isLoading ? (
            <LoadingComponent />
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginComponentNew;
