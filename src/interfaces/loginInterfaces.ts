import { NoteInterface } from "./noteInterfaces";

export interface FormValues {
  email: string;
  password: string;
}

export interface ISignUpFirebase {
  signUp(email: string, password: string): void;
}

export interface ISignInFirebase {
  signIn(email: string, password: string): void;
}

export interface UserData {
  email: string;
  password: string;
  role: string;
  notes?: NoteInterface[];
}
