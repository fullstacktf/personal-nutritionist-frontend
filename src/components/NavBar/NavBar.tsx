import { CSSProperties, FC } from "react";
import { Link } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { logout } from "../../features/user/userSlice";

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
  justifyContent: "center",
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
  const userLogged = useAppSelector((state) => state.user.token);
  const dispatch = useAppDispatch();
  
  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <div style={{ height: "7.6vh" }}>
      <div style={divTopStyle}>
        <div style={divTopSideStyle}>
          <img style={imgLogoStyle} src="/assets/avocado.png" alt="avocado" />
        </div>
        <Typography style={TypographyTitleStyle} variant="h1">Nutriguide</Typography>
        
        { userLogged !== "" ? 
            <div style={divTopSideStyle}>
              <Avatar variant="square">A</Avatar>
              <Button onClick={handleLogOut} variant="contained" color="error" endIcon={<ExitToApp />} component={Link} to="/" sx={{ padding: "1em", margin: "0.5em"}}>
                Cierra Sesión
              </Button>
            </div>
          :  
            <div style={divTopSideStyle}>
              <Button variant="text" endIcon={<AccountCircle />} component={Link} to="/signup" sx={{ padding: "1em", color: "white"}}>
                Regístrate
              </Button>
            </div>
        }
      </div>
      <CustomizedBreadcrumbs />
    </div>
  );
};
