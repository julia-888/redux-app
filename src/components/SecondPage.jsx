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
              // любые изменения в текстовом поле
              onChange={(e) => {
                // если сообщение о невалидности горит - убрать его
                outOfRange && setOutOfRange(false);
                if (
                  Number(e.target.value) < 1 ||
                  Number(e.target.value) > 30 ||
                  isNaN(Number(e.target.value))
                ) {
                  setOutOfRange(true);
                } else {
                  setNewProductId(Number(e.target.value));
                }
              }}
            />
            <ShowButton
              onClick={() => {
                !outOfRange && dispatch(showProduct(newProductId));
              }}
            >
              Показать!
            </ShowButton>
            <Warning $visible={outOfRange}>Введите число от 1 до 30</Warning>
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
  width: 30px;
  font-size: 1em;
  border: none;
  border-bottom: 2px solid #07a1e9;
  outline: none;
`;

const Warning = styled.div`
  color: red;
  visibility: ${(props) => !props.$visible && "hidden"};
`;
