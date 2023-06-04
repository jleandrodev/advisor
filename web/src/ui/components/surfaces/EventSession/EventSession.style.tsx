import { styled } from "@mui/material";

export const EventsContainer = styled("div")`
  width: 100%;
  height: 250px;
  background-color: ${({ theme }) => theme.palette.grey[50]};
  border-radius: 8px;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;
