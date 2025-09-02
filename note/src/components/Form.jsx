import React, { useState } from "react";

function NoteForm({ onAddNote }) {
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");
  const [color, setColor] = useState("#f4cccc");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNote = {
      title,
      description,
      color,
    };

    onAddNote(newNote);

    // Clear inputs after submit
    setTitle("");
    setDescription("");
    setColor("#f4cccc");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Note Title</label>
      <input
        type="text"
        placeholder="Enter Title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label>Note Description</label>
      <textarea
        placeholder="Enter Description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <label>Note Color</label>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default NoteForm;
