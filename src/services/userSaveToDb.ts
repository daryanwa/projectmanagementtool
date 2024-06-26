import { UserData } from "../interfaces/loginInterfaces";
import {
  collection,
  setDoc,
  doc,
  getDocs,
  addDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "../api/firebase";
import { NoteInterface } from "../interfaces/noteInterfaces";

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
  async saveNote(userId: string, newNote: NoteInterface) {
    try {
      const userRef = doc(db, "users", userId);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        const userData = userSnap.data() as UserData;
        const updatedNotes = userData.createdNotes
          ? [...userData.createdNotes, newNote]
          : [newNote];

        await setDoc(userRef, { ...userData, createdNotes: updatedNotes });
      }
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
