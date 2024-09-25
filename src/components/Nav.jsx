import { useDispatch, useSelector } from "react-redux";
import { flipPage } from "../state/openedPage";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Nav = () => {
  const page = useSelector((state) => state.openedPage.page);
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        padding: "20px",
      }}
    >
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
    </Box>
  );
};

export default Nav;
