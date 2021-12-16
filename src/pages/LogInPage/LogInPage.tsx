
import { FC } from "react";

import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";

import { LogIn } from "../../components/LogIn/LogIn";
import { Footer } from "../../components/Footer/Footer";
export const LogInPage: FC = () => {

  const GridImage = styled(Grid)(() => ({
    display: "flex",
    height: "100%",
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
