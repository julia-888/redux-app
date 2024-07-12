import React, { useState } from "react";
import { styled } from "styled-components";

const Nav = () => {
  return (
    <NavWrap>
      <div>
        <NavButton> 1 </NavButton>
      </div>
      <div>
        <NavButton> 2 </NavButton>
      </div>
    </NavWrap>
  );
};

export default Nav;

const NavWrap = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
`;

const NavButton = styled.button`
  background-color: tomato;
  margin: 20px;
  width: 45px;
  height: 30px;
  border-radius: 10px;
`;
