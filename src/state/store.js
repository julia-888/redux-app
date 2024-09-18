import { configureStore } from "@reduxjs/toolkit";
import openedPageReducer from "./openedPage";
import productReducer from "./product";

export const store = configureStore({
  reducer: {
    openedPage: openedPageReducer,
    product: productReducer,
  },
});
