import React, { useEffect, useState } from "react";
import NoteComponent from "../Note/NoteComponent";
import { collection, doc, getDoc, query, where } from "firebase/firestore";
import { db } from "../../../api/firebase";
import { SaveNote } from "../../../services/userSaveToDb";
import { NoteInterface } from "../../../interfaces/noteInterfaces";
import { UserDataFirebase } from "../../../services/userFirebase";
import { getCurrentUserId } from "../../../api/getCurrentUser";
import { UserData } from "../../../interfaces/loginInterfaces";

interface BottomButtonProps {
  handleCreate: () => void;
}

const BottomButton: React.FC<BottomButtonProps> = ({ handleCreate }) => {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl mb-2  p-4 w-96 max-w-md flex  justify-center backdrop-opacity-60 hover:-translate-y-2  hover:scale-125 transition-transform  ">
      <button
        className="bg-gray-100 w-20 h-8 rounded-lg hover:bg-slate-200 transition-all "
        onClick={handleCreate}
      >
        Create
      </button>
    </div>
  );
};

export default BottomButton;
