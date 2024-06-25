import React from "react";

function NoteComponent() {
  return (
    <div className="flex">
      <textarea className="border-4 min-w-[10] min-h-[12rem] bg-slate-300 m-8 border-gray-400 resize"></textarea>
    </div>
  );
}

export default NoteComponent;
