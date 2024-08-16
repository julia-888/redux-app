import { createSlice } from "@reduxjs/toolkit";

// номер страницы

const initialState = {
  value: 2,
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    flipPage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default pageSlice.reducer;

export const { flipPage } = pageSlice.actions;
