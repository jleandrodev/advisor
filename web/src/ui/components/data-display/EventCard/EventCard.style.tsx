import { Typography, styled } from "@mui/material";

export const EventCardContainer = styled("div")`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.02);
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    margin: ${({ theme }) => theme.spacing(2)} 0;
  }
`;

export const EventName = styled("div")`
  background-color: rgba(255, 255, 255, 0.7);
  width: 80%;
  max-width: 360px;
  text-align: center;
  margin: ${({ theme }) => theme.spacing(4)} 8px;
  padding: ${({ theme }) => theme.spacing(4)} 8px;
  border-radius: 5px;
`;

export const CardsTitle = styled(Typography)`
  font-size: 2.4rem;
  font-weight: 500;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: 2rem;
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 1.8rem;
  }
`;
