import { createSlice } from "@reduxjs/toolkit";
let nextId = 0;

const initialState = {
    notes: []
}

const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        addNote: (state, action)=>{
            const notes = {
              id: nextId++,
              title: action.payload,
              content: action.payload,
            };
            state.notes.push(notes)
        },
        editNote: (state, action)=>{
            const {id, title, content} = action.payload;
            const existingNote = state.notes.find((note)=>note.id === id)
            if(existingNote){
                existingNote.title = title;
                existingNote.content = content
            }
        },
        deleteNote: (state, action)=>{
            state.notes = state.notes.filter((note)=>note.id !== action.payload)
        },
    }
})

export const noteActions = noteSlice.actions;
export default noteSlice.reducer;