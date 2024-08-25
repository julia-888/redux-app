import { useDispatch, useSelector } from "react-redux";
import { tablePerPage } from "../state/tableSlice";
import { NavWrap } from "./Wraps";

const PaginationBar = () => {
  const dispatch = useDispatch();
  const perPage = useSelector((state) => state.table.perPage);

  return (
    <NavWrap>
      <span>Кол-во на стр.:</span>
      <select
        onChange={(e) => {
          dispatch(
            tablePerPage({ type: "table/perPage", action: e.target.value })
          );
        }}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
        <option value={25}>25</option>
        <option value={30}>30</option>
      </select>
    </NavWrap>
  );
};

export default PaginationBar;
