import { collection, DocumentData, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../api/firebase";
import UserProfileComponent from "./UserProfile/UserProfileComponent";
import NoteComponent from "./Note/NoteComponent";
import BottomButton from "./BottomButtons.tsx/BottomButton";

function MainComponents() {
  return (
    <div className="bg-orange-200 min-h-screen ">
      <div className=" border-2 rounded-full w-10 h-10 flex absolute m-7 justify-center items-center bg-emerald-500 hover:scale-125 transition-transform end-10 text-white cursor-pointer  mt-4  border-emerald-700">
        <UserProfileComponent />
      </div>
      <NoteComponent />
      <BottomButton />
    </div>
  );
}

export default MainComponents;
