import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { flipPage } from "../state/pageSlice";
import { NavWrap } from "./Wraps";

const Nav = () => {
  const dispatch = useDispatch();

  return (
    <NavWrap>
      <div>
        <NavButton
          onClick={() => {
            dispatch(flipPage(1));
          }}
        >
          1
        </NavButton>
      </div>
      <div>
        <NavButton
          onClick={() => {
            dispatch(flipPage(2));
          }}
        >
          2
        </NavButton>
      </div>
    </NavWrap>
  );
};

export default Nav;

const NavButton = styled.button`
  background-color: tomato;
  margin: 0 10px;
  width: 45px;
  height: 30px;
  border-radius: 10px;
`;
