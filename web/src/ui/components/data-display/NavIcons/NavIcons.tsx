import { Container } from "@mui/material";
import PageTitle from "ui/components/data-display/Title/Title";
import { NavIconsContainer } from "./NavIcons.style";

const NavIcons: React.FC = () => {
  return (
    <>
      <PageTitle title={"Navegue por Categorias"} />
      <Container>
        <NavIconsContainer></NavIconsContainer>
      </Container>
    </>
  );
};

export default NavIcons;
