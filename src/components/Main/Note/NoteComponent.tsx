import React, { useState } from "react";
import { NoteInterface } from "../../../interfaces/noteInterfaces";

interface NoteProps {
  note: NoteInterface;
  onSave: (text: string) => void;
}

const NoteComponent: React.FC<NoteProps> = ({ note, onSave }) => {
  const [text, setText] = useState<string>(note.text);
  const handleSave = () => {
    onSave(text);
  };
  return (
    <div className="flex">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        onBlur={handleSave}
        className="border-4 min-w-[10] min-h-[12rem] bg-slate-300 m-8 border-gray-400 resize"
      ></textarea>
    </div>
  );
};

export default NoteComponent;
