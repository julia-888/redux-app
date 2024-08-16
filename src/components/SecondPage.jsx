import React, { useState } from "react";
import styled from "styled-components";
import Nav from "./Nav";
import { useDispatch, useSelector } from "react-redux";
import { showProduct } from "../state/productSlice";

const SecondPage = () => {
  const product = useSelector((state) => state.product.value);
  const dispatch = useDispatch();

  // ВРЕМЕННЫЙ КОСТЫЛЬ, ЧТОБ НАСТРОИТЬ ИЗМЕНЕНИЕ PRODUCT
  const [number, setNumber] = useState(2);

  return (
    <Wrap>
      <h2>Информация о товаре</h2>
      <p>{product}</p>
      <p>
        `Товар номер: `
        <input />
        <button
          onClick={() => {
            dispatch(showProduct(number));
            setNumber(number + 1);
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

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
