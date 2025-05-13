import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  isModalOpen: false,
  openMenu: false, // ✅ new state for hamburger menu
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    close: (state) => {
      state.open = false;
    },
    setModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },
    openModal: (state) => {
      state.isModalOpen = true;
    },
    setOpenMenu: (state, action) => {
      state.openMenu = action.payload;
    },
    toggleOpenMenu: (state) => {
        if (window.innerWidth < 768) {
          state.openMenu = !state.openMenu;
        } else {
          state.openMenu = true;
        }
      }
  },
});

export const {
  setOpen,
  close,
  setModalOpen,
  openModal,
  setOpenMenu,
  toggleOpenMenu,
} = globalSlice.actions;

export default globalSlice.reducer;
