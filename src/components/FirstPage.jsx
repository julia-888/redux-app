import React from "react";
import styled from "styled-components";
import Table from "./Table";
import Nav from "./Nav";
import PaginationBar from "./PaginationBar";

const FirstPage = () => {
  return (
    <WrapFirstPage>
      <h1 className="raleway">Товары</h1>
      <Table />
      <PaginationBar />
      <Nav />
    </WrapFirstPage>
  );
};

export default FirstPage;

const WrapFirstPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 200px;
`;
