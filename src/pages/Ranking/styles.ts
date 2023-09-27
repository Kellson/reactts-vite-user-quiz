import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  > div:first-of-type {
    width: 100%;
    > h1 {
      font-size: 1.8rem;
      padding-bottom: 10px;
      box-sizing: border-box;
    }
    > div {
      height: 2px;
      width: 100%;
      background-image: linear-gradient(
        to right,
        var(--primary),
        var(--primary-light),
        var(--primary)
      );
    }
  }
`;

export const StyledTableCell = styled(TableCell)`
  background-color: var(--secondary);
  color: #fff !important;
`;

export const StyledTableRow = styled(TableRow)``;

export const TableContent = styled.div`
  margin-top: 40px;
  p,
  th,
  td,
  div {
    font-size: 1.4rem !important;
  }
`;
