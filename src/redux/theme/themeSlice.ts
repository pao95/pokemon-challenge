import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    bgColor: "",
  },
  reducers: {
    setColorBg: (state, { payload }) => {
      state.bgColor = payload.color;
    },
  },
});

export const { setColorBg } = themeSlice.actions;
