import { useDispatch, useSelector } from "react-redux";
import { flipPage } from "../state/openedPage";
import { NavWrap } from "./Wraps";
import Button from "@mui/material/Button";

const Nav = () => {
  const page = useSelector((state) => state.openedPage.value);
  const dispatch = useDispatch();

  return (
    <NavWrap>
      {page == 1 ? (
        <Button
          variant="contained"
          onClick={() => {
            dispatch(flipPage(2));
          }}
        >
          Детальный просмотр
        </Button>
      ) : (
        <Button
          variant="contained"
          onClick={() => {
            dispatch(flipPage(1));
          }}
        >
          Все товары
        </Button>
      )}
    </NavWrap>
  );
};

export default Nav;
