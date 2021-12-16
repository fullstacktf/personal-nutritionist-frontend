import { FC } from "react";

import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";

import { SignUp } from "../../components/SignUp/SignUp";
import { Footer } from "../../components/Footer/Footer";

const GridSideImg = styled(Grid)(() => ({
  display: "flex",
  height: "100vh",
  backgroundImage: "url(/assets/login.jpg)",
  backgroundPosition: "center",
  backgroundSize: "cover",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
}));

const GridForm = styled(Grid)(() => ({
  display: "flex",
  height: "100vh",
  backgroundColor: "#efefef",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
}));

export const SignUpPage: FC = () => {
  return (
      <Grid item container sx={{height:"100vh", alignItems: "center", textAlign: "center"}}>
        <GridSideImg item xs={12} md={6} lg={6}></GridSideImg>
        <GridForm item  xs={12} md={6} lg={6}>
          <SignUp></SignUp>
        </GridForm>      
        <Footer />
      </Grid>
  );
};
