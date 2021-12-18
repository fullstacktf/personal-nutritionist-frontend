import { CSSProperties, FC } from "react";

import { Box } from "@mui/material";

import { SideMenu } from "../../components/Menu/Menu";

const BoxStyle: CSSProperties = {
  display: "flex",
  flexGrow: 1,
  color: "white",
  backgroundColor: "#dbdbdb",
  height: "100vh"
};

export const HomePage: FC = () => {
  return (
    <Box style={BoxStyle}>
      <SideMenu />
    </Box>
  );
};
