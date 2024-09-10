import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  perPage: 5,
  page: 1,
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    tablePage: (state, action) => {
      const page = action.payload.action;
      return { ...state, page };
    },
    tablePerPage: (state, action) => {
      const perPage = action.payload.action;
      return { ...state, perPage };
    },
  },
});

export default tableSlice.reducer;

export const { tablePage, tablePerPage } = tableSlice.actions;
