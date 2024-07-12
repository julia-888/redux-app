import React from "react";
import styled from "styled-components";
import Table from "./Table";
import Nav from "./Nav";

const FirstPage = () => {
  return (
    <Wrap>
      <h1>Товары</h1>
      <Table />
      <Nav />
    </Wrap>
  );
};

export default FirstPage;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
