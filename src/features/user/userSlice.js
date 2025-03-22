import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { username: 'Lee Hung' },
  theme: 'dracula',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log('Login');
    },
    logoutUser: (state) => {
      console.log('Logout');
    },
    toggleTheme: (state) => {
      console.log('Toggle');
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
