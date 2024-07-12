import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";



const Table = () => {
  const getApiData = async () => {
    const response = await axios(
      "https://jsonplaceholder.typicode.com/todos/"
    )
  
    // Обновим состояние
    setUsers(response);
  };

  
  const [users, setUsers] = useState([])

  useEffect(() => {
    getApiData()
  }, [])

  console.log(users)
  return (
    <>
    <TableWrap>
      <thead>
        <tr>
          <th>{users[0].title}</th>
          <th>Первая</th>
          <th>Первая</th>
          <th>Первая</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>4</td>
          <td>4</td>
          <td>4</td>
          <td>4</td>
        </tr>
      </tbody>
    </TableWrap>
    </>
  )
}

export default Table;

const TableWrap = styled.table`
  border: solid;
  border-collapse: collapse;

  th {
    border: solid;
  }

  td {
    border: solid;
  }
`