import { useState } from "react";
import { DrawerContainer } from "./Drawer.style";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import CelebrationIcon from "@mui/icons-material/Celebration";
import PaidIcon from "@mui/icons-material/Paid";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

interface DrawerProps {
  isOpen: boolean;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen }) => {
  return (
    <>
      <DrawerContainer className={isOpen ? "isOpen" : ""}>
        <ul>
          <li>
            <CelebrationIcon fontSize={"large"} />
            {isOpen ? "Eventos" : ""}
          </li>
          <li>
            <TaskAltIcon fontSize={"large"} />
            {isOpen ? "Tarefas" : ""}
          </li>
          <li>
            <Diversity1Icon fontSize={"large"} />
            {isOpen ? "Equipe" : ""}
          </li>
          <li>
            <CalendarMonthIcon fontSize={"large"} />
            {isOpen ? "Agenda" : ""}
          </li>
          <li>
            <PaidIcon fontSize={"large"} />
            {isOpen ? "Finanças" : ""}
          </li>
        </ul>
      </DrawerContainer>
    </>
  );
};

export default Drawer;
