import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  ISignInFirebase,
  ISignUpFirebase,
} from "../interfaces/loginInterfaces";
import { app } from "../api/firebase";

export class SignUpFirebase implements ISignUpFirebase {
  async signUp(email: string, password: string) {
    try {
      if (password.length < 6) {
        throw new Error("Password should be at least 6 characters");
      }
      const auth = getAuth(app);
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      throw new Error(error.message || "Error signing up");
    }
  }
}
export class SignInFirebase implements ISignInFirebase {
  async signIn(email: string, password: string) {
    try {
      const auth = getAuth(app);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      throw new Error(error.message || "Error signing in");
    }
  }
}
