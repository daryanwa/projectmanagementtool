import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  ISignInFirebase,
  ISignUpFirebase,
  UserData,
} from "../interfaces/loginInterfaces";
import { app, db } from "../api/firebase";
import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";

export class SignUpFirebase implements ISignUpFirebase {
  async signUp(email: string, password: string) {
    try {
      if (password.length < 6) {
        throw new Error("Password should be at least 6 characters");
      }
      const auth = getAuth(app);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential;
    } catch (error: any) {
      throw new Error(error.message || "Error signing up");
    }
  }
}
export class SignInFirebase implements ISignInFirebase {
  async signIn(email: string, password: string) {
    try {
      const auth = getAuth(app);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential;
    } catch (error: any) {
      throw new Error(error.message || "Error signing in");
    }
  }
}

// export class SignOut {
//   async signOutUser() {
//     signOut(app)
//   }
// }

export class UserDataFirebase {
  async userId(db: any) {
    try {
      const usersCollection = collection(db, "users");
      const userSnapshot = await getDocs(usersCollection);
      const userList = userSnapshot.docs.map((doc) => doc.data());
      return userList;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
