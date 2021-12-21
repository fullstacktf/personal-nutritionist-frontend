import { CSSProperties, FC } from "react";

import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import { useAppSelector } from "../../app/hooks";
import { SideMenu } from "../../components/Menu/Menu";
import { Profile } from "../../components/Profile/Profile";
import { EventList } from "../../components/EventList/EventList";

const BoxStyle: CSSProperties = {
  display: "flex",
  flexGrow: 1,
  color: "white",
  backgroundColor: "#dbdbdb",
  height: "87.5vh"
};

const ContainerStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  width: "70%",
  alignItems: "center",
  backgroundColor: "blue",
};

const GridContainer = styled(Grid) (() => ({
  display: "flex",
  flexGrow: 1,
  alignItems: "center",
  justifyContent: "center",
  color: "black",
  flexDirection: "column",
  // height: "100%",
  width: "70%"
}));

const GridEventsContainer = styled(Grid) (() => ({
  width: "70%",
  height: "50%",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "5px",
}));

export const HomePage: FC = () => {
  const userInfo = useAppSelector((state) => state.user.userInfo);
  
  return (
    <Box style={BoxStyle}>
      <SideMenu />
      {/* <div style={ContainerStyle}>
        <Profile userInfo={userInfo} />
        <EventList />
      </div> */}
      <GridContainer container>
        <Profile userInfo={userInfo} />
        <GridEventsContainer container item>
          <EventList />
        </GridEventsContainer>
      </GridContainer>
    </Box>
  );
};
