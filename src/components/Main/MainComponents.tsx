import { collection, DocumentData, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../api/firebase";
import UserProfileComponent from "./UserProfile/UserProfileComponent";
import NoteComponent from "./Note/NoteComponent";
import BottomButton from "./BottomButtons.tsx/BottomButton";

function MainComponents() {
  const [logOut, setLogOut] = useState<boolean>(false);

  return (
    <div className="bg-orange-200 min-h-screen ">
      <div>
        <div>
          <div
            onClick={() => setLogOut(!logOut)}
            className=" border-2 rounded-full w-14 h-14 flex absolute m-7 justify-center items-center bg-emerald-500 hover:scale-125 transition-transform end-10 text-white font cursor-pointer  mt-4  border-emerald-700">
            <div className="flex justify-center items-center w-full h-full absolute ">
              <UserProfileComponent />
            </div>

            {logOut && (
              <div className=" w-[3.1rem]  flex items-center  translate-y-11  h-16 border-b-2 border-l-2 border-r-2 border-emerald-700  rounded-b-3xl  bg-emerald-500 ustify-center text-center   ">
                <div className=" mt-2 mb-2 text-white">
                  <button
                    onClick={() => console.log("Logout")}
                    className="hover:bg-slate-600 transition-all w-[2.9rem]  rounded-md text-[0.72rem] p-1">
                    Logout
                  </button>
                  f
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <NoteComponent />
      <BottomButton />
    </div>
  );
}

export default MainComponents;
