import { configureStore } from "@reduxjs/toolkit";
import openedPageReducer from "./openedPage";
import productReducer from "./product";
import tableReducer from "./table";

export const store = configureStore({
  reducer: {
    openedPage: openedPageReducer,
    product: productReducer,
    table: tableReducer,
  },
});
