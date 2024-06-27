import { collection, DocumentData, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { app, db } from "../../api/firebase";
import UserProfileComponent from "./UserProfile/UserProfileComponent";
import NoteComponent from "./Note/NoteComponent";
import BottomButton from "./BottomButtons.tsx/BottomButton";
import { getAuth, signOut } from "firebase/auth";
import { NoteInterface } from "../../interfaces/noteInterfaces";
import { getCurrentUserId } from "../../api/getCurrentUser";
import { SaveNote } from "../../services/userSaveToDb";

function MainComponents() {
  const [logOut, setLogOut] = useState<boolean>(false);
  const [allNotes, setAllNotes] = useState<NoteInterface[]>([]);
  const saveNoteButton = new SaveNote();

  const handleSignOut = async () => {
    try {
      const auth = getAuth(app);
      await signOut(auth);
      console.log("Successfully signed out");
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  const handleCreate = async (text: string) => {
    const userId = await getCurrentUserId();
    console.log(text);
    const newNote: NoteInterface = {
      id: Date.now().toString(),
      text: text,
    };
    try {
      await saveNoteButton.saveNote(userId, newNote);
      // setAllNotes([...allNotes, newNote]);
    } catch (err) {
      console.log(err);
    }
  };
  const handleCreateNote = async () => {
    const userId = await getCurrentUserId();

    const newNote: NoteInterface = {
      id: Date.now().toString(),
      text: "",
    };
    try {
      await saveNoteButton.saveNote(userId, newNote);
      setAllNotes([...allNotes, newNote]);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchNote = async () => {
    try {
      const userId = await getCurrentUserId();
      const noteCollection = collection(db, "notes", userId);
      const notesSnapshot = await getDocs(noteCollection);
      const notesList = notesSnapshot.docs.map(
        (doc) => doc.data() as NoteInterface
      );
      setAllNotes(notesList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNote(); // Выполняем загрузку заметок при монтировании компонента
  }, []);

  return (
    <div className="bg-orange-200 min-h-screen  ">
      <div>
        <div>
          <div
            onClick={() => setLogOut(!logOut)}
            className=" border-2 rounded-full w-14 h-14 flex absolute m-7 justify-center items-center bg-emerald-500 hover:scale-125 transition-transform end-10 text-white font cursor-pointer  mt-4  border-emerald-700">
            <div className="flex justify-center items-center w-full h-full absolute ">
              <UserProfileComponent />
            </div>

            <div className=" mt-2 mb-2 text-white">
              <button
                onClick={handleSignOut}
                className="hover:bg-slate-600 transition-all w-[2.9rem]  rounded-md text-[0.72rem] p-1">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {allNotes.map((note) => (
        <NoteComponent key={note.id} note={note} onSave={handleCreate} />
      ))}
      <BottomButton handleCreate={handleCreateNote} />
    </div>
  );
}
