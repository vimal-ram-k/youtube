import { configureStore } from "@reduxjs/toolkit";
import { ThemeReducer } from "../slices/themeslice";
import { HistoryState } from "../slices/historyslice";

export const store = configureStore({
  reducer: {
    ThemeContext: ThemeReducer,
    HistoryState: HistoryState,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
