import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { flipPage } from "../state/openedPage";
import { NavWrap } from "./Wraps";

const Nav = () => {
  const page = useSelector((state) => state.openedPage.value);
  const dispatch = useDispatch();

  return (
    <NavWrap>
      {page == 1 ? (
        <div>
          <NavButton
            className="raleway"
            onClick={() => {
              dispatch(flipPage(2));
            }}
          >
            Детальный просмотр
          </NavButton>
        </div>
      ) : (
        <div>
          <NavButton
            className="raleway"
            onClick={() => {
              dispatch(flipPage(1));
            }}
          >
            Все товары
          </NavButton>
        </div>
      )}
    </NavWrap>
  );
};

export default Nav;

const NavButton = styled.button`
  background-color: #2ecc71;
  border: none;
  color: #ffffff;
  padding: 15px;
  font-size: 1em;
`;
