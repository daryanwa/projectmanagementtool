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
