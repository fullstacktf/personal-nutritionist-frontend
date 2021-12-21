import { CSSProperties, FC } from "react";

import { Box } from "@mui/material";

import { useAppSelector } from "../../app/hooks";
import { SideMenu } from "../../components/Menu/Menu";
import { Profile } from "../../components/Profile/Profile";
import { EventList } from "../../components/EventList/EventList";

const BoxStyle: CSSProperties = {
  display: "flex",
  flexGrow: 1,
  color: "black",
  backgroundColor: "#dbdbdb",
  height: "87.5vh"
};

const ContainerStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-evenly",
  width: "86%",
  alignItems: "center",
};

const ProfileContainerStyle: CSSProperties = {
  display: "flex",
  justifyContent: "flex-end",
  width: "40%"
};

export const HomePage: FC = () => {
  const userInfo = useAppSelector((state) => state.user.userInfo);
  
  return (
    <Box style={BoxStyle}>
      <SideMenu />
      <div style={ContainerStyle}>
        <div style={ProfileContainerStyle}>
          <Profile userInfo={userInfo} />
        </div>
        <div style={{ width: "90%" }}>
          <EventList />
        </div>
      </div>
    </Box>
  );
};
