import { CSSProperties, FC } from "react";

import { Box, Grid } from "@mui/material";
const BoxStyle: CSSProperties = {
  display: "flex",
  // alignItems: "center",
  // justifyContent: "center",
  flexGrow: 1,
  backgroundColor: "pink",
  // backgroundColor: "#ffffff",
  // width: "50%",
  // height: "50%"
  // height: "100vh"
};

export const Profile: FC = () => {
  return (
    <Box sx={{backgroundColor: "orange"}}>
      <Box style={BoxStyle}>
        Soy Elena 
      </Box>
    </Box>
  );
};
