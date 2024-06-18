// import { ILogin, IRegister } from "../interfaces/loginInterfaces";

// export class LoginUser implements ILogin {
//   private userEmail: string;
//   private userPassword: string;
//   private registerService: RegisterUser;

//   constructor(
//     userEmail: string,
//     userPassword: string,
//     registerService: RegisterUser
//   ) {
//     this.userEmail = userEmail;
//     this.userPassword = userPassword;
//     this.registerService = registerService;
//   }
//   getUserEmail() {
//     return this.userEmail;
//   }
//   getUserPassword() {
//     return this.userPassword;
//   }
//   validateUser(email: string, password: string): boolean {
//     if (!email.trim() || !password.trim()) {
//       return false;
//     }

//     const registeredUsers = this.registerService.allUsers();

//     const userExist = registeredUsers.some(
//       (user) =>
//         user.email === this.userEmail && user.password === this.userPassword
//     );

//     return userExist;
//   }
// }

// export class RegisterUser implements IRegister {
//   private registerEmail: string;
//   private registerPass: string;
//   private registeredUsers: { email: string; password: string }[] = [];
//   constructor(registerEmail: string, registerPass: string) {
//     this.registerEmail = registerEmail;
//     this.registerPass = registerPass;
//   }
//   getRegisterEmail() {
//     return this.getRegisterEmail;
//   }
//   getRegisterPass() {
//     return this.getRegisterPass;
//   }
//   allUsers(): { email: string; password: string }[] {
//     return this.registeredUsers;
//   }
//   register(email: string, password: string): boolean {
//     if (!email.trim() || !password.trim()) {
//       return false;
//     } else if (this.registerEmail === email && this.registerPass === password) {
//       this.registeredUsers.push({ email, password });
//       return true;
//     }
//     return false;
//   }
//   userIsRegistered() {
//     const userExist = this.registeredUsers.some(
//       (user) => user.email && user.password
//     );
//     if (userExist) return true;
//   }
// }
export const a = 0;
