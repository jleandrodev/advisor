import { Container, Toolbar } from "@mui/material";
import {
  AvatarStyled,
  HeaderAppBar,
  HeaderLogo,
  RightSide,
} from "./Header.style";
import TemporaryDrawer from "../Drawer/TemporaryDrawer";

interface UserProps {
  name: string;
  description?: string;
  role?: string;
  mail?: string;
  picture?: string;
}

const Header: React.FC<UserProps> = ({ name, picture }) => {
  return (
    <HeaderAppBar position={"sticky"}>
      <Toolbar component={Container}>
        <HeaderLogo src="/img/logo.png" alt={"Logo da Web Advisor"} />
        <RightSide>
          <AvatarStyled sx={{ bgcolor: "#9661ff" }} alt={name} src={picture}>
            {name[0]}
          </AvatarStyled>
          <TemporaryDrawer />
        </RightSide>
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;
