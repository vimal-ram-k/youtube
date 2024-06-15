import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ThemeProps = {
  theme: "bg-black" | "";
};

const initialTheme: ThemeProps = {
  theme: "",
};
const ThemeContext = createSlice({
  name: "ThemeContext",
  initialState: initialTheme,
    reducers: {
        setTheme: (state, action : PayloadAction < "bg-black" | "">) => {
      console.log(action);
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = ThemeContext.actions;
export const ThemeReducer = ThemeContext.reducer;
