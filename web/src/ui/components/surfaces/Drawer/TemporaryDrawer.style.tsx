import { Button, styled } from "@mui/material";

export const ButtonStyled = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.breakpoints.up("md")} {
    display: none;
  }
`;
