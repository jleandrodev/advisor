import { Container, Toolbar } from "@mui/material";
import { HeaderAppBar, HeaderLogo } from "./Header.style";

const Header: React.FC = () => {
  return (
    <HeaderAppBar position={"sticky"}>
      <Toolbar component={Container}>
        <HeaderLogo src="/img/logo.png" alt={"Logo da Web Advisor"} />
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;
