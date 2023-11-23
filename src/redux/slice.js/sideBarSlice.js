import { createSlice } from '@reduxjs/toolkit';

const sideBarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    isVisible: true,
  },

  reducers: {
    toggleSidebar: (state) => {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { toggleSidebar } = sideBarSlice.actions;
export default sideBarSlice.reducer;
