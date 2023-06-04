import { NextPage } from "next";
import NavIcons from "ui/components/data-display/NavIcons/NavIcons";
import EventSession from "ui/components/surfaces/EventSession/EventSession";
import Hero from "ui/components/surfaces/Hero/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <NavIcons />
      <EventSession />
    </>
  );
};

export default Home;
