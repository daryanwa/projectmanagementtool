import React, { useState } from "react";
import NoteComponent from "../Note/NoteComponent";

function BottomButton() {
  const [allNotes, setAllNotes] = useState<any[]>([]);
  const handleCreate = () => {
    setAllNotes([...allNotes, <NoteComponent key={allNotes.length} />]);
  };
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl mb-2  p-4 w-96 max-w-md flex  justify-center backdrop-opacity-60 hover:-translate-y-2  hover:scale-125 transition-transform  ">
      <button
        className="bg-gray-100 w-20 h-8 rounded-lg"
        onClick={handleCreate}
      >
        {" "}
        Create
      </button>
      {allNotes}
    </div>
  );
}

export default BottomButton;
