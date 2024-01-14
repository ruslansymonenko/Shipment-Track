import { createSlice } from '@reduxjs/toolkit';

interface I_SidebarSlice {
  isActive: boolean;
}

const initialState: I_SidebarSlice = {
  isActive: false,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    showSidebar: (state: I_SidebarSlice) => {
      state.isActive = true;
    },
    hideSidebar: (state: I_SidebarSlice) => {
      state.isActive = false;
    },
  },
});

export const { showSidebar, hideSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
