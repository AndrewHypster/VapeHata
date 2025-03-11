import { configureStore, createSlice } from "@reduxjs/toolkit";

// Створюємо slice для Sidebar
const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: { isOpen: false },
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeSidebar: (state) => {
      state.isOpen = false;
    },
    openSidebar: (state) => {
      state.isOpen = true;
    },
  },
});

// Window Alert
const alert = createSlice({
  name: 'alert',
  initialState: {
    type: 'hidden',
    text: 'Вікно скрите'
  },
  reducers: {
    setAlert: (state, action) => {
      state.type = action.payload.type
      state.text = action.payload.text?? state.text
    }
  }
})

// Експортуємо екшени
export const { toggleSidebar, closeSidebar, openSidebar } = sidebarSlice.actions;
export const { setAlert } = alert.actions;

// Створюємо store
export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice.reducer,
    alert: alert.reducer
  },
});
