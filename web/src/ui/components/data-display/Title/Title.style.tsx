import { styled } from "@mui/material/styles";

export const TitleStyled = styled("h1")`
  text-align: left;
  margin: ${({ theme }) => theme.spacing(4)} 0 8px 32px;
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: ${({ theme }) => theme.typography.h5.fontSize};
  font-weight: 600;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
    text-align: center;
    margin: ${({ theme }) => theme.spacing(4)};
  }
`;
