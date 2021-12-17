import { CSSProperties, FC } from "react";
import { Link } from "react-router-dom";

import { Button, Typography, Avatar } from "@mui/material";
import { ExitToApp, AccountCircle } from "@mui/icons-material";

import CustomizedBreadcrumbs from "../Breadcrumb/Breadcrumb";

const divTopStyle: CSSProperties = {
  backgroundColor: "#937A61",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around"
};

const divTopSideStyle: CSSProperties = {
  color: "white",
  display: "flex",
  width: "20%",
  alignItems: "center",
  justifyContent: "space-around",
};

const imgLogoStyle: CSSProperties = {
  width: "40px",
  height: "40px",
};

const TypographyTitleStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  width: "60%",
  fontSize: "1.5em",
  justifyContent: "space-around"
};

export const NavBar: FC = () => {
  return (
    <div>
      <div style={divTopStyle}>
        <div  style={divTopSideStyle}>
          <img style={imgLogoStyle} src="/assets/avocado.png" alt="avocado" />
        </div>
        <Typography style={TypographyTitleStyle} variant="h1">Nutriguide</Typography>
        <div style={divTopSideStyle}>
          <Button variant="text" endIcon={<AccountCircle />} component={Link} to="/signup" sx={{ padding: "1em", color: "white"}}>
            Regístrate
          </Button>

          <Avatar variant="square">A</Avatar>
          <Button variant="contained" color="error" endIcon={<ExitToApp />} component={Link} to="/logout" sx={{ padding: "1em", margin: "0.5em"}}>
            Cierra Sesión
          </Button>
        </div>
      </div>
      <CustomizedBreadcrumbs />
    </div>
  );
};
