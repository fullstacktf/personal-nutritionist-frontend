import { CSSProperties, FC } from "react";

import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

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

const h1TitleStyle: CSSProperties = {
  fontSize: "1.5em"
};

const ButtonLogIn = styled(Button)(() => ({
  padding: "1em"
}));

export const NavBar: FC = () => {
  return (
    <div>
      <div style={divTopStyle}>
        <img style={imgLogoStyle} src="/assets/avocado.png" alt="avocado" />
        <h1 style={h1TitleStyle}>Nutriguide</h1>
        <ButtonLogIn      
          variant="text" 
          endIcon={<AccountCircle />}
          sx={{
            padding: "1em",
            color: "white"
          }}
        >
          Log In
        </ButtonLogIn>
      </div>
      <CustomizedBreadcrumbs />
    </div>
  );
};
