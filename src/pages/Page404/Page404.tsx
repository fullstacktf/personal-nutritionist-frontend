import { CSSProperties, FC } from "react";

import { Box, Typography } from "@mui/material";

const BoxStyle: CSSProperties = {
  background: "#7DCF7F",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexGrow: 1,
  height: "87.5vh",
  color: "white"
};

export const Page404: FC = () => {
  return (
    <Box style={BoxStyle}>
      <Typography variant="h1"> Página no encontrada </Typography>
    </Box>
  );
};
