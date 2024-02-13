import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notes: []
}

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNote: (state, action)=>{
        const { title,content} = action.payload
        const id = Date.now()
        state.notes.push({id, title, content})
    },
    editNote: (state, action) => {
      const { id, title, content } = action.payload;
      const existingNote = state.notes.find((note) => note.id === id);
      if (existingNote) {
        existingNote.title = title;
        existingNote.content = content;
      }
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
  },
});

export const noteActions = noteSlice.actions;
export default noteSlice.reducer;