import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import _ from "lodash";
import Nav from "./Nav";
import { useDispatch, useSelector } from "react-redux";
import { showProduct } from "../state/product";

const SecondPage = () => {
  const productShownId = useSelector((state) => state.product.productShownId);
  const productsFromAPI = useSelector((state) => state.product.productsFromAPI);
  const dispatch = useDispatch();

  const [productShownData, setProductShownData] = useState({});

  const [newProductId, setNewProductId] = useState(1);

  useEffect(() => {
    const elem = productsFromAPI.filter((item) => item.id === productShownId);
    setProductShownData(elem[0]);
  }, [productShownId, productsFromAPI]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 200px",
      }}
    >
      <Typography sx={{ fontWeight: "450", margin: "40px 0" }} variant="h4">
        Информация о товаре
      </Typography>

      {!_.isEmpty(productShownData) && (
        <Typography variant="subtitle1" sx={{ maxWidth: "1000px" }}>
          <p>Номер: {productShownData.id}</p>
          <p>Название: {productShownData.title}</p>
          <p>Категория: {productShownData.category}</p>
          <p>Описание: {productShownData.description}</p>
          <p>Цена: {productShownData.price}</p>
          <p>Рейтинг: {productShownData.rating}</p>
        </Typography>
      )}
      <p>
        Товар номер:
        <input
          onChange={(e) => {
            setNewProductId(Number(e.target.value));
          }}
        />
        <button
          onClick={() => {
            dispatch(showProduct(newProductId));
          }}
        >
          Показать!
        </button>
      </p>
      <Nav />
    </Box>
  );
};

export default SecondPage;
