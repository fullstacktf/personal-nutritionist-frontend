import { CSSProperties, FC } from "react";
import { Link } from "react-router-dom";

import { Button, Typography, Avatar } from "@mui/material";
import { ExitToApp, AccountCircle } from "@mui/icons-material";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { logout } from "../../features/user/userSlice";

import { CustomizedBreadcrumbs } from "../Breadcrumb/Breadcrumb";

const divTopStyle: CSSProperties = {
  backgroundColor: "#937A61",
  color: "white",
  display: "flex",
  width: "100%",
  // height: "5.2vh"
};

const divTopSideStyle: CSSProperties = {
  color: "white",
  display: "flex",
  width: "30%",
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
  width: "40%",
  fontSize: "1.5em",
  justifyContent: "space-around"
};

export const NavBar: FC = () => {
  const userLogged = useAppSelector((state) => state.user);
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
        
        { userLogged.token !== "" ? 
            <div style={divTopSideStyle}>
              <Avatar variant="rounded" >{userLogged.userInfo.name.charAt(0).toUpperCase()}</Avatar>
              <Button 
                onClick={handleLogOut}
                variant="contained" 
                color="error" 
                endIcon={<ExitToApp />}
                component={Link}
                to="/"
                sx={{ 
                  margin: "0.5em",
                  fontSize: {xs: 10, md: 16, lg: 16},
                  marginLeft: "1em"}
                } 
              >
                Cerrar sesión
              </Button>
            </div>
          :  
            <div style={divTopSideStyle}>
              <Button 
                variant="text"
                endIcon={<AccountCircle />}
                component={Link} 
                to="/signup"
                sx={{ 
                  padding: "1em",
                  color: "white"
                }}
              >
                Regístrate
              </Button>
            </div>
        }
      </div>
      <CustomizedBreadcrumbs />
    </div>
  );
};
