import { Container } from "@mui/material";
import { HeroContainer, HeroSubtitle, HeroTitle } from "./Hero.style";

const Hero = () => {
  return (
    <Container>
      <HeroContainer>
        <HeroTitle>Hello Rosana!</HeroTitle>
        <HeroSubtitle>
          Hora de continuar tornando sonhos realidade!
        </HeroSubtitle>
      </HeroContainer>
    </Container>
  );
};

export default Hero;
