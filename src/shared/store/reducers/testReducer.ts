import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LocalProps {
  text: string[];
}

const initialState: LocalProps = {
  text: ["hello", "second text is here!!!"],
};

export const overviewSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setText: function (state, action: PayloadAction<string[]>) {
      state.text = action.payload;
    },
  },
});

export const { setText } = overviewSlice.actions;

export default overviewSlice.reducer;
