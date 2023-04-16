import modalNoteReducer from "./reducers/modalNoteReducer";
import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./reducers/notesReducer";

const store = configureStore({
  reducer: {
    notes: notesReducer,
    modalNote: modalNoteReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
