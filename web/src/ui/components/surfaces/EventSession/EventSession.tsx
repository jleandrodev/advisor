import PageTitle from "ui/components/data-display/Title/Title";
import { CardsContainer, EventsContainer } from "./EventSession.style";
import EventCard from "ui/components/data-display/EventCard/EventCard";

const eventsInfo = [
  {
    id: 1,
    name: "Maria & João",
    tag: "Casamento",
    when: "04/05/2025",
    image:
      "https://img.freepik.com/free-photo/groom-putting-ring-bride-s-finger_1157-338.jpg?size=626&ext=jpg&uid=R107088703&ga=GA1.2.687481186.1685496811&semt=sph",
  },
  {
    id: 2,
    name: "Sofia & Pedro",
    tag: "Casamento",
    when: "04/05/2025",
    image:
      "https://img.freepik.com/free-photo/bride-groom-having-their-wedding-beach_23-2149043966.jpg?size=626&ext=jpg&uid=R107088703&ga=GA1.2.687481186.1685496811&semt=sph",
  },
  {
    id: 3,
    name: "Ana & Miguel",
    tag: "Casamento",
    when: "04/05/2025",
    image:
      "https://img.freepik.com/free-photo/bride-holding-her-wedding-bouquet_1303-25289.jpg?size=626&ext=jpg&uid=R107088703&ga=GA1.2.687481186.1685496811&semt=sph",
  },
  {
    id: 4,
    name: "Camila & Lucas",
    tag: "Casamento",
    when: "04/05/2025",
    image:
      "https://img.freepik.com/free-photo/happy-groom-with-hands-bride-s-waist_1153-1782.jpg?size=626&ext=jpg&uid=R107088703&ga=GA1.2.687481186.1685496811&semt=sph",
  },
];

const EventSession: React.FC = () => {
  return (
    <EventsContainer>
      <PageTitle title={"Próximos Eventos"} />
      <CardsContainer>
        {eventsInfo.map((event) => {
          return (
            <EventCard
              key={event.id}
              id={event.id}
              name={event.name}
              tag={event.tag}
              when={event.when}
              image={event.image}
            />
          );
        })}
      </CardsContainer>
    </EventsContainer>
  );
};

export default EventSession;
