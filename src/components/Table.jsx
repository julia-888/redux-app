import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { styled } from "styled-components";
import axios from "axios";
import { getProductsFromAPI } from "../state/product";

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
      sx={{ margin: "20px 0" }}
    />
  );
};

export default Table;

const TableWrap = styled.table`
  border: solid;
  border-collapse: collapse;

  tr {
    height: 100px;
  }

  th {
    border: solid;
  }

  td {
    border: solid;
    text-align: center;

    p {
      padding: 0;
      margin: 0;
    }

    img {
      max-width: 80px;
    }
  }
`;
