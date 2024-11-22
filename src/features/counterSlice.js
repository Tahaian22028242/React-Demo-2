import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { 
    value: 0, // Set the initial state to 0
  },
  reducers: {
    increment: state => { state.value += 1; }, // Define the increment reducer
    decrement: state => { state.value -= 1; }, // Define the decrement reducer
    incrementByAmount: (state, action) => { state.value += action.payload; }, // Define the incrementByAmount reducer
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
