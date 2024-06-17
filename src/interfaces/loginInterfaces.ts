export interface FormValues {
  email: string;
  password: string;
}

export interface ILogin {
  validateUser(email: string, password: string): boolean;
}

export interface IRegister {
  getRegisterEmail(): void;
  getRegisterPass(): void;
  allUsers(): { email: string; password: string }[];
  register(email: string, password: string): boolean;
  userIsRegistered(): void;
}
