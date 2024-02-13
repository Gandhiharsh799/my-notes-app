import React, { useState } from "react";
import AddNote from "./AddNote";
import { useDispatch, useSelector } from "react-redux";
import { noteActions } from "../store/note";

export default function NotesList() {
  const notes = useSelector((state) => state.note.notes);
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    title: "",
    content: "",
  });

  const handleAddNote = () => {
    setShowForm(true);
    setFormData({ id: null, title: "", content: "" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.id) {
      dispatch(
        noteActions.editNote({
          id: formData.id,
          title: formData.title,
          content: formData.content,
        })
      );
    } else {
      dispatch(
        noteActions.addNote({
          title: formData.title,
          content: formData.content,
        })
      );
    }
    setShowForm(false);
  };
  return (
    <div>
      <h2>Notes</h2>
      <button onClick={handleAddNote}>Create a new Note</button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={formData.title}
            onChange={(event) =>
              setFormData({ ...formData, title: event.target.value })
            }
          />
          <textarea
            placeholder="Content"
            value={formData.content}
            onChange={(event) =>
              setFormData({ ...formData, content: event.target.value })
            }
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit">
            {formData.id ? "Edit Note" : "Add Note"}
          </button>
        </form>
      )}
      {notes.map((note) => (
        <AddNote
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
        />
      ))}
    </div>
  );
}
