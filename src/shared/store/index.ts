import modalNoteReducer from "./reducers/modalNoteReducer";
import testReducer from "./reducers/testReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    test: testReducer,
    modalNote: modalNoteReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
