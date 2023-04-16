import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INoteModal } from "../../models/types";
import { ModalNoteProps } from "../../models/reduxStates";

const initialState: ModalNoteProps = {
  id: 0,
  name: "",
  text: [],
  checkbox: false,
  dateString: "",
  active: false,
};

export const modalNoteReducer = createSlice({
  name: "modalNote",
  initialState,
  reducers: {
    openModal: function (state) {
      state.active = true;
    },
    closeModal: function (state) {
      state.active = false;
    },

    newModalState: function (state, action: PayloadAction<INoteModal>) {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.text = action.payload.text;
      state.dateString = action.payload.dateString;
      state.checkbox = action.payload.checkbox;
    },
  },
});

export const { openModal, closeModal, newModalState } =
  modalNoteReducer.actions;

export default modalNoteReducer.reducer;
