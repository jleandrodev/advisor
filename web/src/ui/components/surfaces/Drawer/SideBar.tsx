import { DrawerContainer } from "./SideBar.style";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import CelebrationIcon from "@mui/icons-material/Celebration";
import PaidIcon from "@mui/icons-material/Paid";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

const SideBar: React.FC = () => {
  return (
    <>
      <DrawerContainer>
        <ul>
          <li>
            <CelebrationIcon fontSize={"large"} />
          </li>
          <li>
            <TaskAltIcon fontSize={"large"} />
          </li>
          <li>
            <Diversity1Icon fontSize={"large"} />
          </li>
          <li>
            <CalendarMonthIcon fontSize={"large"} />
          </li>
          <li>
            <PaidIcon fontSize={"large"} />
          </li>
        </ul>
      </DrawerContainer>
    </>
  );
};

export default SideBar;
