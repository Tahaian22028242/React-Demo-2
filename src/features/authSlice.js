import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('token') || null, // Load token from local storage
};

const authSlice = createSlice({ // Create a slice
  name: 'auth',
  initialState, // Pass the initial state to the slice
  reducers: { // Define the reducers
    setToken: (state, action) => { // Define the setToken reducer
      state.token = action.payload; // Update the token state
      localStorage.setItem('token', action.payload); // Update the local storage
    },
    clearToken: (state) => { // Define the clearToken reducer
      state.token = null; // Clear the token state
      localStorage.removeItem('token'); // Clear the local storage
    },
  },
});

export const { setToken, clearToken } = authSlice.actions; // Export the actions
export default authSlice.reducer;
