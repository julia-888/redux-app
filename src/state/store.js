import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./pageSlice";
import productReducer from "./productSlice";
import tableReducer from "./tableSlice";

export const store = configureStore({
  reducer: {
    page: pageReducer,
    product: productReducer,
    table: tableReducer,
  },
});
