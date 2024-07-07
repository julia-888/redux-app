import React from "react";
import styled from "styled-components";
import Table from "./Table";

const FirstPage = () => {
  return (
    <Wrap>
      <h1>Таблица с данными</h1>
      <Table />
      <Nav>
        <div>
          <button> 1 </button>
        </div>
        <div>
          <button> 2 </button>
        </div>
      </Nav>
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

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
`;
