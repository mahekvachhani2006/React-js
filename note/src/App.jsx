import React, { useState } from "react";
import NoteForm from "./components/Form";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const handleDelete = (indexToDelete) => {
    const updatedNotes = notes.filter((_, index) => index !== indexToDelete);
    setNotes(updatedNotes);
  };

  return (
    <div className="app">
      <div className="header">Notes</div>

      <h2>Create Note</h2>
      <NoteForm onAddNote={addNote} />

      <h2>Notes</h2>
      <div className="notes-container">
        {notes.map((note, index) => (
          <div
            key={index}
            className="note"
            style={{ backgroundColor: note.color }}
          >
            <h3>{note.title}</h3>
            <p>
              <strong>{note.subtitle}</strong>
            </p>
            <p>{note.description}</p>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
