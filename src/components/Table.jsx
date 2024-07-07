import React from "react";
import styled from "styled-components";

const Table = () => {
  return (
    <TableWrap>
      <tr>
        <th>Первая</th>
        <th>Первая</th>
        <th>Первая</th>
        <th>Первая</th>
      </tr>
      <tr>
        <td>4</td>
        <td>4</td>
        <td>4</td>
        <td>4</td>
      </tr>
    </TableWrap>
  )
}

export default Table;

const TableWrap = styled.table`
  
`