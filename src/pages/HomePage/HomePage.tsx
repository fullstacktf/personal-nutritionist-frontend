import { CSSProperties, FC } from "react";

import { Box } from "@mui/material";

import { useAppSelector } from "../../app/hooks";
import { SideMenu } from "../../components/Menu/Menu";
import { Profile } from "../../components/Profile/Profile";

const BoxStyle: CSSProperties = {
  display: "flex",
  flexGrow: 1,
  color: "white",
  backgroundColor: "#dbdbdb",
  height: "100vh"
};

export const HomePage: FC = () => {
  const userInfo = useAppSelector((state) => state.user.userInfo);
  
  return (
    <Box style={BoxStyle}>
      <SideMenu />
      <Profile userInfo={userInfo}/>
    </Box>
  );
};
