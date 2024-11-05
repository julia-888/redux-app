import { createSlice } from "@reduxjs/toolkit";

// номер записи из таблицы

const initialState = {
  productShownId: 1,
  productsFromAPI: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    showProduct: (state, action) => {
      const productShownId = action.payload;
      return { ...state, productShownId };
    },
    getProductsFromAPI: (state, action) => {
      const productsFromAPI = action.payload;
      return { ...state, productsFromAPI };
    },
  },
});

export default productSlice.reducer;

export const { showProduct, getProductsFromAPI } = productSlice.actions;
