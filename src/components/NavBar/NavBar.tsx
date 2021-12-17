import { CSSProperties, FC } from "react";
import { Link } from "react-router-dom";

import { Button, Typography } from "@mui/material";
import { ExitToApp } from "@mui/icons-material";

import CustomizedBreadcrumbs from "../Breadcrumb/Breadcrumb";

const divTopStyle: CSSProperties = {
  backgroundColor: "#937A61",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around"
};

const imgLogoStyle: CSSProperties = {
  width: "40px",
  height: "40px"
};

const TypographyTitleStyle: CSSProperties = {
  fontSize: "1.5em"
};

export const NavBar: FC = () => {
  return (
    <div>
      <div style={divTopStyle}>
        <img style={imgLogoStyle} src="/assets/avocado.png" alt="avocado" />
        <Typography style={TypographyTitleStyle} variant="h1">Nutriguide</Typography>
        <Button variant="text" endIcon={<ExitToApp />} component={Link} to="/signup" sx={{ padding: "1em", color: "white"}}>
          Regístrate
        </Button>
      </div>
      <CustomizedBreadcrumbs />
    </div>
  );
};
