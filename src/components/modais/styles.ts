import Dialog from "@mui/material/Dialog";
import styled from "styled-components";

interface ICustomDialog {
  $fullContainer?: boolean;
}

export const CustomDialog = styled(Dialog)<ICustomDialog>`
  > div:nth-of-type(3) {
    > div {
      border-radius: 8px;
      ${(p) => p.$fullContainer && "max-width: initial"};
    }
  }
`;
