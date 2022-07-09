import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "./theme/themeSlice";
import { modalSlice } from "./modal/modalSlice";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    modal: modalSlice.reducer,
  },
});
