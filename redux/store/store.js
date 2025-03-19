import { configureStore } from "@reduxjs/toolkit";
import songReducer from "../features/songs/songSlice";

export const makeStore = () => {
  return configureStore({ reducer: { songs: songReducer } });
};
