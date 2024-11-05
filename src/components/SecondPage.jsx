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
    <div className="flex flex-col justify-center items-center py-0 px-[530px]">
      <h2>Информация о товаре</h2>
      {!_.isEmpty(productShownData) && (
        <div className="align-self-start">
          <p>Номер: {productShownData.id}</p>
          <p>Название: {productShownData.title}</p>
          <p>Категория: {productShownData.category}</p>
          <p>Описание: {productShownData.description}</p>
          <p>Цена: {productShownData.price}</p>
          <p>Рейтинг: {productShownData.rating}</p>
          <p style={{ fontWeight: 600 }}>
            Товар номер:
            <input
              className="mx-[10px] p-[1px] w-[30px] border-0 border-b-[2px] border-[#42bbf3] outline-none"
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
            <button
              className="bg-[#42bbf3] m-[20px] py-[8px] px-[15px] text-white font-[500] rounded-[10px] border-0"
              onClick={() => {
                !outOfRange && dispatch(showProduct(newProductId));
              }}
            >
              Показать!
            </button>
            <Warning $visible={outOfRange}>Введите число от 1 до 30</Warning>
          </p>
        </div>
      )}
      <Nav />
    </div>
  );
};

export default SecondPage;

const Warning = styled.div`
  color: red;
  visibility: ${(props) => !props.$visible && "hidden"};
`;
