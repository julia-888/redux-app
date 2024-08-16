import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  perPage: 10,
  page: 1,
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    pagination: (state, action) => {
      switch (action.type) {
        case "table/page":
          state.page = action.payload;
        case "table/perPage":
          state.perPage = action.payload;
      }
    },
  },
});

export default tableSlice.reducer;

export const { pagination } = tableSlice.actions;
