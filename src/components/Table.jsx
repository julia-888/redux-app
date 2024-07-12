import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

const Table = () => {
  const getApiData = async () => {
    const response = await axios("https://fakestoreapi.com/products");

    // Обновим состояние
    setProducts(response.data);
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <TableWrap>
        <thead>
          <tr>
            <th>id</th>
            <th>Название</th>
            <th>Категория</th>
            <th>Описание</th>
            <th>Фото</th>
            <th>Цена</th>
            <th>Рейтинг</th>
          </tr>
        </thead>
        <tbody>
          {products.map((elem) => (
            <tr>
              <td>{elem.id}</td>
              <td>{elem.title}</td>
              <td>{elem.category}</td>
              <td>{elem.description}</td>
              <td>
                <img src={elem.image} />
              </td>
              <td>{elem.price}</td>
              <td>
                <p>{`Оценка: ${elem.rating.rate}`}</p>
                <p>{`Количество: ${elem.rating.count}`}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </TableWrap>
    </>
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
