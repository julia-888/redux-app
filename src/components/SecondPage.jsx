import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
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

  const [outOfRange, setOutOfRange] = useState(false);

  useEffect(() => {
    const elem = productsFromAPI.filter((item) => item.id === productShownId);
    setProductShownData(elem[0]);
  }, [productShownId, productsFromAPI]);

  return (
    <WrapSecondPage>
      <h2>Информация о товаре</h2>
      {!_.isEmpty(productShownData) && (
        <Info>
          <p>Номер: {productShownData.id}</p>
          <p>Название: {productShownData.title}</p>
          <p>Категория: {productShownData.category}</p>
          <p>Описание: {productShownData.description}</p>
          <p>Цена: {productShownData.price}</p>
          <p>Рейтинг: {productShownData.rating}</p>
          <p style={{ fontWeight: 600 }}>
            Товар номер:
            <Input
              onChange={(e) => {
                outOfRange && setOutOfRange(false);
                setNewProductId(Number(e.target.value));
              }}
            />
            <ShowButton
              onClick={() => {
                if (newProductId > 0 && newProductId < 31) {
                  dispatch(showProduct(newProductId));
                } else {
                  setOutOfRange(true);
                }
              }}
            >
              Показать!
            </ShowButton>
            {outOfRange && <Warning>Введите другое число</Warning>}
          </p>
        </Info>
      )}
      <Nav />
    </WrapSecondPage>
  );
};

export default SecondPage;

const WrapSecondPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 530px;
`;

const Info = styled.div`
  align-self: start;
`;

const ShowButton = styled.button`
  /* background-color: #f34256; */
  background-color: #42bbf3;
  margin: 20px;
  padding: 8px 15px;
  color: #ffffff;
  font-weight: 550;
  border-radius: 10px;
  border: none;
  font-size: 0.95em;
`;

const Input = styled.input`
  margin: 0 0 0 10px;
  padding: 1px;
  width: 70px;
  /* height: 40px; */
  font-size: 1em;
  border: none;
  border-bottom: 2px solid #07a1e9;
  outline: none;
`;

const Warning = styled.span`
  color: red;
`;
