import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  perPage: 5,
  page: 1,
  products: [],
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
    tableProducts: (state, action) => {
      const products = action.payload;
      return { ...state, products };
    },
  },
});

export default tableSlice.reducer;

export const { tablePage, tablePerPage, tableProducts } = tableSlice.actions;
