import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import lessonData from "./../resources/lessons.json";

export interface CharField {
  value: string;
  userReturn?: string;
  color: "ok" | "error" | "transparent";
}

export interface ExerciseData {
  exerciseFields: CharField[];
  currentIndex: number;
  lessonComplete: boolean;
  lessonId?: string;
  lesson?: Lesson;
  startTime?: Date;
  endTime?: Date;
}

export const calculateMistakes = (state: ExerciseData) => {
  return state.exerciseFields.filter(val => val.color === "error").length;
};

export const calculateTime = (state: ExerciseData) => {
  return (state.endTime.getTime() - state.startTime.getTime()) / 1000;
};

export const exerciseSlice = createSlice({
  name: "exercise",
  initialState: {
    exerciseFields: [],
    currentIndex: 0,
    lessonComplete: false
  } as ExerciseData,
  reducers: {
    setExercise: (state, action: PayloadAction<string>) => {
      const lesson = lessonData.find((val: Lesson) => {
        return val.id === parseInt(action.payload.trim(), 10);
      });
      const exerciseFields: CharField[] = [];
      lesson.lesson.split("").forEach(item => {
        exerciseFields.push({ value: item, color: "transparent" });
      });
      return { ...state, lesson, exerciseFields, currentIndex: 0 };
    },
    startLesson: state => {
      return { ...state, lessonComplete: false, startTime: new Date() };
    },
    endLesson: state => {
      return { ...state, lessonComplete: true, endTime: new Date() };
    },
    reset: state => {
      return {
        ...state,
        lessonComplete: false,
        startTime: new Date(),
        endTime: undefined,
        currentIndex: 0,
        exerciseFields: state.exerciseFields.map(val => {
          return {
            color: "transparent",
            userReturn: undefined,
            value: val.value
          };
        })
      };
    },
    processPressedKey: (state, action: PayloadAction<string>) => {
      const val = action.payload;
      let color: "ok" | "error";
      const exerciseFields = [...state.exerciseFields];
      const field = exerciseFields[state.currentIndex];
      if (field.value === val) {
        color = "ok";
      } else {
        color = "error";
      }
      const newField = {
        userReturn: val,
        color,
        value: field.value
      };

      exerciseFields[state.currentIndex] = newField;

      return { ...state, currentIndex: state.currentIndex + 1, exerciseFields };
    }
  }
});

export const {
  endLesson,
  processPressedKey,
  reset,
  setExercise,
  startLesson
} = exerciseSlice.actions;
