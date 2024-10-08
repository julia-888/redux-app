import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { getProductsFromAPI } from "../state/product";

const Table = () => {
  const dispatch = useDispatch();

  const perPage = useSelector((state) => state.table.perPage);
  const page = useSelector((state) => state.table.page);
  const products = useSelector((state) => state.product.productsFromAPI);

  const getApiData = async () => {
    const response = await axios("https://dummyjson.com/products");

    // Обновим состояние - изменяем список продуктов
    dispatch(getProductsFromAPI(response.data.products));
  };

  // content - содержимое таблицы в данный момент с учётом данных о товарах (products) и паджинации (page, perPage)
  const [content, setContent] = useState([]);

  useEffect(() => {
    getApiData();
  }, []);

  useEffect(() => {
    setContent(products.slice(0, perPage));
  }, [perPage, products]);

  return (
    <>
      <TableWrap>
        <thead>
          <tr>
            <th>№</th>
            <th className="raleway">Название</th>
            <th>Категория</th>
            <th>Описание</th>
            <th>Цена</th>
            <th>Рейтинг</th>
          </tr>
        </thead>
        <tbody>
          {content.map((elem) => (
            <tr key={elem.id}>
              <td>{elem.id}</td>
              <td>{elem.title}</td>
              <td>{elem.category}</td>
              <td>{elem.description}</td>
              <td>{elem.price}</td>
              <td>{elem.rating}</td>
            </tr>
          ))}
        </tbody>
      </TableWrap>
    </>
  );
};

export default Table;

const TableWrap = styled.table`
  border: solid 2px;
  border-collapse: collapse;

  tr {
    height: 100px;
  }

  th {
    border: solid 2px;
  }

  td {
    border: solid 2px;

    p {
      padding: 0;
      margin: 0;
    }

    img {
      max-width: 80px;
    }
  }
`;
