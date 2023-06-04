import { styled } from "@mui/material/styles";
import { AppBar, Avatar, Button, Container } from "@mui/material";

export const HeaderAppBar = styled(AppBar)`
  background-color: ${({ theme }) => theme.palette.background.paper};
`;

export const HeaderLogo = styled("img")`
  height: 38px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    height: 56px;
  }
`;

export const RightSide = styled("div")`
  display: flex;
  flex: 1;
  justify-content: right;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const AvatarStyled = styled(Avatar)``;

export const ButtonStyled = styled(Button)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
`;
