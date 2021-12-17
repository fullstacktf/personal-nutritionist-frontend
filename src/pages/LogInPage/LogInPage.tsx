
import { FC } from "react";

import { Grid, styled } from "@mui/material";

import { LogIn } from "../../components/LogIn/LogIn";
import { Footer } from "../../components/Footer/Footer";
export const LogInPage: FC = () => {

  const GridImage = styled(Grid)(({ theme }) => ({
    display: "flex",
    height: "100%",
    backgroundImage: "url(/assets/login.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    [theme.breakpoints.down("md")]: {
      height: "40%",
    }
  }));
  const GridForm = styled(Grid)(() => ({
    display: "flex",
    height: "100vh",
    backgroundColor: "#efefef",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  }));

  return(
    <Grid item container sx={{ height:"100vh", alignItems: "center", textAlign: "center" }}>
      <GridImage item xs={12} sm={6} md={6}></GridImage>
      <GridForm item xs={12} sm={6} md={6}>
        <LogIn />
      </GridForm>
      <Footer />
    </Grid>
  );

};
