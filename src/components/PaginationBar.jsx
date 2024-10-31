import { useDispatch, useSelector } from "react-redux";
import { tablePerPage } from "../state/table";
import { NavWrap } from "./Wraps";
import styled from "styled-components";

const PaginationBar = () => {
  const dispatch = useDispatch();
  const perPage = useSelector((state) => state.table.perPage);

  return (
    <NavWrap>
      <div style={{ fontWeight: 600, marginRight: "15px" }}>
        Кол-во на стр.:
      </div>
      <Select
        value={perPage}
        onChange={(e) => {
          dispatch(
            tablePerPage({ type: "table/perPage", action: e.target.value })
          );
          window.scrollTo(0, 0);
        }}
      >
        <option>5</option>
        <option>10</option>
        <option>15</option>
        <option>20</option>
        <option>25</option>
        <option>30</option>
      </Select>
    </NavWrap>
  );
};

export default PaginationBar;

const Select = styled.select`
  padding: 5px 15px 5px 5px;
`;
