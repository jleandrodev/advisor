import { styled } from "@mui/material";

export const HeroContainer = styled("div")`
  background: rgb(150, 97, 255);
  background: linear-gradient(
    162deg,
    rgba(150, 97, 255, 1) 27%,
    rgba(233, 222, 255, 1) 87%
  );
  min-height: 200px;
  padding: ${({ theme }) => theme.spacing(5)};
`;

export const HeroTitle = styled("h1")`
  color: #fff;
`;
export const HeroSubtitle = styled("p")`
  color: #fff;
`;
