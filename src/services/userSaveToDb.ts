import { UserData } from "../interfaces/loginInterfaces";
import { collection, setDoc, doc, getDocs, addDoc } from "firebase/firestore";
import { db } from "../api/firebase";

export class SaveUserData {
  async saveData(userId: string, data: UserData) {
    try {
      await setDoc(doc(db, "users", data.email), data);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}

export class SaveNote {
  async saveNote(data: string) {}
}
