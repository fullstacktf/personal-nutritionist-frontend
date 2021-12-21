import { CSSProperties, FC } from "react";

import { Box } from "@mui/material";

import { SideMenu } from "../../components/Menu/Menu";
import { EventList } from "../../components/EventList/EventList";

const BoxStyle: CSSProperties = {
  display: "flex",
  flexGrow: 1,
  color: "white",
  backgroundColor: "#dbdbdb",
  height: "87.5vh"
};

export const EventListPage: FC = () => {
  return (
    <Box style={BoxStyle}>
      <SideMenu />
      <EventList />
    </Box>
  );
};
