import { createSlice } from "@reduxjs/toolkit";

// номер страницы

const initialState = {
  value: 1,
};

const openedPageSlice = createSlice({
  name: "openedPage",
  initialState,
  reducers: {
    flipPage: (state, action) => {
      const value = action.payload;
      return { ...state, value };
    },
  },
});

export default openedPageSlice.reducer;

export const { flipPage } = openedPageSlice.actions;
