import { styled } from "@mui/material";

export const EventsContainer = styled("div")`
  border-radius: 8px;
`;
export const CardsContainer = styled("div")`
  background-color: ${({ theme }) => theme.palette.grey[50]};
  border-radius: 8px;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  padding: ${({ theme }) => theme.spacing(2)};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing(2)};

  ${({ theme }) => theme.breakpoints.down("sm")} {
    display: block;
  }
`;
