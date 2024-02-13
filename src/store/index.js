import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth.js'
import noteReducer from './note.js'

const store = configureStore({
    reducer: {auth: authReducer, note: noteReducer}
})

export default store;