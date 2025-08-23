"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);
  

  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  }, [notes]);

  const addNote = () => {

    const newNote = {
      text: note,
      date: new Date().toLocaleString(),
    };

    setNotes([newNote, ...notes]);
    setNote("");
  };


  return (
    <div className="min-h-screen flex flex-col items-center p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Notes App</h1>

      <div className="flex gap-2 mb-6">
        <input
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write a note..."
          className="px-4 py-2 rounded border border-gray-300 w-64"
        />
        <button
          onClick={addNote}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Note
        </button>
      </div>

      {/* Notes List */}
      <div className="w-full max-w-md space-y-3">
        {notes.length === 0 && (
          <p className="text-gray-500 text-center">No notes yet</p>
        )}

        {notes.map((n, i) => (
          <div key={i}
            className="bg-purple p-4 rounded shadow flex justify-between items-center"
          >
            <div>
              <p className="font-medium">{n.text}</p>
              <span className="text-xs text-gray-400">{n.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
