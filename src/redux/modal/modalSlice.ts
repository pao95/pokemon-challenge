import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    modalName: "",
  },
  reducers: {
    closeModal: (state) => {
      state.isOpen = false;
      state.modalName = "";
    },
    showModal: (state, { payload }) => {
      state.isOpen = true;
      state.modalName = payload.modalName;
    },
  },
});

export const { closeModal, showModal } = modalSlice.actions;
