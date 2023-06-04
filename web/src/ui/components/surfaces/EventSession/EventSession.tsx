import { Container } from "@mui/material";
import PageTitle from "ui/components/data-display/Title/Title";
import { EventsContainer } from "./EventSession.style";

const EventSession: React.FC = () => {
  return (
    <>
      <PageTitle title={"Próximos Eventos"} />
      <Container>
        <EventsContainer></EventsContainer>
      </Container>
    </>
  );
};

export default EventSession;
