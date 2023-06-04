import { styled } from "@mui/material";

export const NavIconsContainer = styled("div")`
  width: 100%;
  height: 150px;
  background-color: ${({ theme }) => theme.palette.grey[50]};
  border-radius: 8px;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;
