import React from 'react'

export default function AddNote({id, title, content, onEdit, onDelete}) {
  return (
    <div><h3>{title}</h3>
    <p>{content}</p>
    <button onClick={()=>onEdit(id)}>Edit</button>
    <button onClick = {()=>onDelete(id)}>Delete</button>
    </div>
  )
}
