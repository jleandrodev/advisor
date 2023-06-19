import { Typography } from "@mui/material";
import { CardsTitle, EventCardContainer, EventName } from "./EventCard.style";
import { StaticImageData } from "next/image";

interface EventsInfoProps {
  id: number;
  name: string;
  tag: string;
  when: string;
  image: string | StaticImageData;
}

const EventCard: React.FC<EventsInfoProps> = (props) => {
  const containerStyle = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    opacity: "0.6",
  };
  return (
    <EventCardContainer sx={containerStyle}>
      <EventName>
        <CardsTitle>{props.name}</CardsTitle>
        <Typography>{props.when}</Typography>
      </EventName>
    </EventCardContainer>
  );
};

export default EventCard;
