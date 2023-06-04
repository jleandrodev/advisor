import { Container } from "@mui/material";
import { HeroContainer, HeroSubtitle, HeroTitle } from "./Hero.style";

const Hero = () => {
  return (
    <HeroContainer>
      <Container>
        <HeroTitle>Hello Rosana!</HeroTitle>
        <HeroSubtitle>
          Hora de continuar tornando sonhos realidade!
        </HeroSubtitle>
      </Container>
    </HeroContainer>
  );
};

export default Hero;
