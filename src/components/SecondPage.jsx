import React, { useState, useEffect } from "react";
import { Typography, Box, TextField, Button } from "@mui/material";
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

  const [numberError, setNumberError] = useState(false);

  useEffect(() => {
    const elem = productsFromAPI.filter((item) => item.id === productShownId);
    setProductShownData(elem[0]);

    console.log(productShownId);
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
        <Typography
          variant="subtitle1"
          sx={{
            width: "1000px",
            height: "350px",
            overflow: "scroll",
            "&::-webkit-scrollbar": { width: "0" },
          }}
        >
          <p>
            <b>Номер:</b> {productShownData.id}
          </p>
          <p>
            <b>Название:</b> {productShownData.title}
          </p>
          <p>
            <b>Категория:</b> {productShownData.category}
          </p>
          <p>
            <b>Описание:</b> {productShownData.description}
          </p>
          <p>
            <b>Цена:</b> {productShownData.price}
          </p>
          <p>
            <b>Рейтинг:</b> {productShownData.rating}
          </p>
        </Typography>
      )}
      <Box sx={{}}>
        <TextField
          label="Товар номер"
          onChange={(e) => {
            if (
              Number(e.target.value) > productsFromAPI.length ||
              Number(e.target.value) < 1 ||
              isNaN(Number(e.target.value))
            ) {
              setNumberError(true);
            } else {
              setNewProductId(Number(e.target.value));
              if (
                Number(e.target.value) <= productsFromAPI.length ||
                Number(e.target.value) > 0
              ) {
                setNumberError(false);
              }
            }
          }}
          sx={{ margin: "15px" }}
          helperText={
            numberError ? `Введите число от 0 до ${productsFromAPI.length}` : ""
          }
          error={numberError}
        />
        <Button
          onClick={() => {
            !numberError && dispatch(showProduct(newProductId));
          }}
          // variant="outlined"
          color="secondary"
          sx={{ margin: "25px 5px" }}
        >
          Показать
        </Button>
      </Box>
      <Nav />
    </Box>
  );
};

export default SecondPage;
