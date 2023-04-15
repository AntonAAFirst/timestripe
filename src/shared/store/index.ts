import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./reducers/testReducer";

const store = configureStore({
  reducer: { test: testReducer },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
