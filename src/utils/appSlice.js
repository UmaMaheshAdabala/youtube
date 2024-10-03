import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    isSearchUsed: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    searched: (state) => {
      state.isSearchUsed = !state.isSearchUsed;
    },
  },
});
export const { toggleMenu, closeMenu, searched } = appSlice.actions;
export default appSlice.reducer;
