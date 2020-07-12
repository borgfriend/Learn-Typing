import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CharField {
  value: string;
  userReturn?: string;
  color: "ok" | "error" | "transparent";
}

export interface ExerciseData {
  lessonComplete: boolean;
  mistakes: number;
  startTime?: Date;
  endTime?: Date;
}

export const calculateTime = (state: ExerciseData) => {
  return (state.endTime.getTime() - state.startTime.getTime()) / 1000;
};

export const exerciseSlice = createSlice({
  name: "exercise",
  initialState: {
    exerciseFields: [],
    mistakes: 0,
    lessonComplete: false,
  } as ExerciseData,
  reducers: {
    startLesson: (state) => {
      return { ...state, lessonComplete: false, startTime: new Date() };
    },
    endLesson: (state, action: PayloadAction<{ mistakeCount: number }>) => {
      return { ...state, lessonComplete: true, endTime: new Date(), mistakes: action.payload.mistakeCount };
    },
    reset: (state) => {
      return {
        ...state,
        lessonComplete: false,
        startTime: new Date(),
        endTime: undefined        
      };
    },
  },
});

export const {
  endLesson,
  reset,
  startLesson,
} = exerciseSlice.actions;
