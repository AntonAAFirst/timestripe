import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NotesProps } from "../../models/reduxStates";
import { INote } from "../../models/types";

const initialState: NotesProps = {
  notes: [],
  filteredNotes: [],
  isLoading: true,
  selectedYear: 2023,
};

export const notesReducer = createSlice({
  name: "notes",
  initialState,
  reducers: {
    newReduxNotes: function (state, action: PayloadAction<INote[]>) {
      state.isLoading = false;
      state.notes = action.payload;
    },
    newSelectedYear: function (state, action: PayloadAction<number>) {
      state.selectedYear = action.payload;
    },
    newFilteredReduxNotes: function (state, action: PayloadAction<INote[]>) {
      state.filteredNotes = action.payload;
    },
  },
});

export const { newReduxNotes, newSelectedYear, newFilteredReduxNotes } =
  notesReducer.actions;

export default notesReducer.reducer;
