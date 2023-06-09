import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import CelebrationIcon from "@mui/icons-material/Celebration";
import PaidIcon from "@mui/icons-material/Paid";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Typography } from "@mui/material";
import { ButtonStyled } from "./TemporaryDrawer.style";
import MenuIcon from "@mui/icons-material/Menu";

type Anchor = "top" | "left" | "bottom" | "right";

export const ItemList = [
  {
    id: 1,
    name: "Eventos",
    link: "/",
    icon: <CelebrationIcon fontSize={"large"} />,
  },
  {
    id: 2,
    name: "Tarefas",
    link: "/",
    icon: <TaskAltIcon fontSize={"large"} />,
  },
  {
    id: 3,
    name: "Equipe",
    link: "/",
    icon: <Diversity1Icon fontSize={"large"} />,
  },
  {
    id: 4,
    name: "Agenda",
    link: "/",
    icon: <CalendarMonthIcon fontSize={"large"} />,
  },
  { id: 5, name: "Finanças", link: "/", icon: <PaidIcon fontSize={"large"} /> },
];

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {ItemList.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              sx={{ color: (theme) => theme.palette.primary.main }}
            >
              <ListItemIcon
                sx={{ color: (theme) => theme.palette.primary.main }}
              >
                {item.icon}
              </ListItemIcon>
              <Typography style={{ fontWeight: "bold" }}>
                {item.name}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <ButtonStyled onClick={toggleDrawer("left", true)}>
        <MenuIcon sx={{ fontSize: 38 }} />
      </ButtonStyled>
      <Drawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </div>
  );
}
