import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { flipPage } from "../state/pageSlice";

const Nav = () => {
  const dispatch = useDispatch();

  return (
    <NavWrap>
      <div>
        <NavButton
          onClick={() => {
            console.log(1);
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
