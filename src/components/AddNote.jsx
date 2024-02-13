import React from "react";
import "./AddNote.css";

export default function AddNote({ id, title, content, onEdit, onDelete }) {
  console.log(id);
  console.log(title);
  console.log(content);
  return (
    

    <div className="card">
      <div className="container">

      <h3>{title}</h3>
      <p>{content}</p>
      <button onClick={() => onEdit(id)}>Edit</button>
      <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  
    
  );
}
