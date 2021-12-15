import { CSSProperties, FC } from "react";

import { Box, Typography } from "@mui/material";
// import { SideMenu } from "./components/Menu/Menu";

const BoxStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexGrow: 1,
  height: "100vh",
  color: "white"
};

export const HomePage: FC = () => {
  return (
    <Box style={BoxStyle}>
      {/* <SideMenu></SideMenu> */}
      {/* <Typography variant="h1"> Página no encontrada </Typography> */}
    </Box>
  );
};
