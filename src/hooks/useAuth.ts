import { useState } from "react";
import { SignInFirebase, SignUpFirebase } from "../services/userFirebase";
import { SaveUserData } from "../services/userSaveToDb";

export const useSignUp = () => {
  const [error, setError] = useState<string | null>(null);

  const signUp = async (email: string, password: string) => {
    const signUpService = new SignUpFirebase();
    const userDataSave = new SaveUserData();

    try {
      const userCred = await signUpService.signUp(email, password);
      const user = userCred.user;
      const data = { email, password, role: "user" };
      await userDataSave.saveData(user.uid, data);
      localStorage.setItem("user", JSON.stringify(user)); // Save user in localStorage
      setError(null);
      window.location.href = "/main"; // Redirect to MainComponent
    } catch (err: any) {
      setError(err.message);
    }
  };

  return { signUp, error };
};

export const useSignIn = () => {
  const [error, setError] = useState<string | null>(null);

  const signIn = async (email: string, password: string) => {
    const signInService = new SignInFirebase();

    try {
      const userCred = await signInService.signIn(email, password);
      const user = userCred.user;
      localStorage.setItem("user", JSON.stringify(user)); // Save user in localStorage
      setError(null);
      window.location.href = "/main"; // Redirect to MainComponent
    } catch (err: any) {
      setError(err.message);
    }
  };

  return { signIn, error };
};
