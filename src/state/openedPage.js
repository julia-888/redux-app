import { createSlice } from "@reduxjs/toolkit";

// номер страницы

const initialState = {
  page: 1,
};

const openedPageSlice = createSlice({
  name: "openedPage",
  initialState,
  reducers: {
    flipPage: (state, action) => {
      const page = action.payload;
      return { ...state, page };
    },
  },
});

export default openedPageSlice.reducer;

export const { flipPage } = openedPageSlice.actions;
