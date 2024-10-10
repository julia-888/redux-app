import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { getProductsFromAPI } from "../state/product";
import { columns } from "./columns";

const Table = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.productsFromAPI);

  const getApiData = async () => {
    const response = await axios("https://dummyjson.com/products");

    // Обновим состояние - изменяем список продуктов
    dispatch(getProductsFromAPI(response.data.products));
  };

  useEffect(() => {
    getApiData();
  }, []);

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
      autoHeight
      showCellVerticalBorder
      getRowHeight={() => "auto"}
      sx={{
        margin: "30px 0",
        "& .MuiDataGrid-cell": {
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
          padding: "15px",
          lineHeight: "3px",
        },
      }}
    />
  );
};

export default Table;
