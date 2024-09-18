import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector, useDispatch } from "react-redux";

const columns = [
  { field: "id", headerName: "№", width: 90 },
  {
    field: "title",
    headerName: "Название",
    width: 150,
    editable: true,
  },
  {
    field: "category",
    headerName: "Категория",
    width: 150,
    editable: true,
  },
  {
    field: "description",
    headerName: "Описание",
    width: 370,
    editable: true,
  },
  {
    field: "price",
    headerName: "Цена",
    type: "number",
    // width: 110,
    editable: true,
  },
  {
    field: "rating",
    headerName: "Рейтинг",
    type: "number",
    // width: 110,
    editable: true,
  },
];

export default function DataGridDemo() {
  const products = useSelector((state) => state.product.productsFromAPI);

  return (
    <DataGrid
      rows={products}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5, 10, 15, 20, 25, 30]}
      disableRowSelectionOnClick
    />
  );
}
