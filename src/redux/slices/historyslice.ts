import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type HistoryProps = {
  history: boolean;
};

const initialHistoryState: HistoryProps = {
  history: false,
};

const HistorySlice = createSlice({
  name: "HistorySlice",
  initialState: initialHistoryState,
  reducers: {
    setHistoryState: (state, action: PayloadAction<boolean>) => {
      state.history = action.payload;
    },
  },
});

export const { setHistoryState } = HistorySlice.actions;
export const HistoryState = HistorySlice.reducer;
