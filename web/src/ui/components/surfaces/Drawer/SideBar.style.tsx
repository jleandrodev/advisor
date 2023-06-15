import { Container, Typography, styled } from "@mui/material";

export const DrawerContainer = styled(Container)`
  margin: 0;
  width: 220px;
  background-color: ${({ theme }) => theme.palette.background.paper};
  transition: 0.3s;

  ul {
    margin-top: ${({ theme }) => theme.spacing(4)};
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(3)};
  }

  li {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: hidden;
    align-items: center;
    transition: 0.3s;
    gap: ${({ theme }) => theme.spacing(2)};
    color: ${({ theme }) => theme.palette.primary.main};
    cursor: pointer;
  }

  &.isOpen {
    width: 250px;
    padding: ${({ theme }) => theme.spacing(2)};
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    width: 0;
    padding: 0;
    position: absolute;
    height: 100vh;
    z-index: 10;
  }
`;

export const ItemListTitle = styled(Typography)`
  font-weight: bold;
  color: ${({ theme }) => theme.palette.primary.main};
`;
