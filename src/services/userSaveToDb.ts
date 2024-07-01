import { UserData } from "../interfaces/loginInterfaces";
import {
  collection,
  setDoc,
  doc,
  getDocs,
  addDoc,
  getDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "../api/firebase";
import { NoteInterface } from "../interfaces/noteInterfaces";
import { set } from "firebase/database";

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
      const userNotesCollectionRef = collection(
        db,
        "notes",
        userId,
        "createdNotes"
      );
      const newNoteDocRef = doc(userNotesCollectionRef);
      await setDoc(newNoteDocRef, newNote);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
export class SaveNoteRenameInFuture {
  async saveNote(userId: string) {
    try {
      const userNotesCollectionRef = collection(
        db,
        "notes",
        userId,
        "createdNotes"
      );
      const noteIdRef = doc(db, "notes", userId);
      const newNoteDocRef = doc(userNotesCollectionRef);
      await setDoc(newNoteDocRef, noteIdRef);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
