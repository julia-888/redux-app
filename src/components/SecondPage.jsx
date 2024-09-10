import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import _ from "lodash";
import Nav from "./Nav";
import { Wrap } from "./Wraps";
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
    <Wrap>
      <h2>Информация о товаре</h2>
      {!_.isEmpty(productShownData) && (
        <Info>
          <p>Номер: {productShownData.id}</p>
          <p>Название: {productShownData.title}</p>
          <p>Категория: {productShownData.category}</p>
          <p>Описание: {productShownData.description}</p>
          <p>Цена: {productShownData.price}</p>
          <p>Рейтинг: {productShownData.rating}</p>
        </Info>
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
    </Wrap>
  );
};

export default SecondPage;

const Info = styled.div`
  max-width: 800px;
`;
