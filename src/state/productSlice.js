import { createSlice } from "@reduxjs/toolkit";

// номер записи из таблицы

const initialState = {
  value: 1,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    showProduct: (state, action) => {
      state.value = action.payload - 1;
    },
  },
});

export default productSlice.reducer;

export const { showProduct } = productSlice.actions;
