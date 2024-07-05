import React from "react";
import styled from "styled-components";

const FirstPage = () => {
  return (
    <Wrap>
      <h1>Таблица с данными</h1>
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
  background-color: #aef5d2;
  text-align: center;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
`;
