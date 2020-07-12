import { configureStore } from "@reduxjs/toolkit";
import { exerciseSlice } from "./ExerciseStore";

export const store = configureStore({
  reducer: exerciseSlice.reducer
});
