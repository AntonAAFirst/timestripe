import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NotesProps } from "../../models/reduxStates";
import { INote } from "../../models/types";

const initialState: NotesProps = {
  notes: [],
  isLoading: true,
};

export const notesReducer = createSlice({
  name: "notes",
  initialState,
  reducers: {
    newReduxNotes: function (state, action: PayloadAction<INote[]>) {
      state.isLoading = false;
      state.notes = action.payload;
    },
  },
});

export const { newReduxNotes } = notesReducer.actions;

export default notesReducer.reducer;
