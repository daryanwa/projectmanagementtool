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
  private email: string;
  private password: string;
  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
  async signUp(email: string, password: string) {
    try {
      const auth = getAuth(app);
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(`${error}`);
    }
  }
}
export class SignInFirebase implements ISignInFirebase {
  async signIn(email: string, password: string) {
    try {
      const auth = getAuth(app);
      signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(`${error}`);
    }
  }
}
