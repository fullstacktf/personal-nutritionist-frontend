import { CSSProperties, FC } from "react";

import { styled } from "@mui/material/styles";
import { Grid }  from "@mui/material";

const GridFooterContainer = styled(Grid)(() => ({
  backgroundColor: "#937A61",
  textAlign: "center",
  justifyContent: "center",
}));

const imgLogo: CSSProperties = {
  height: 40,
  width: 40
};

export const Footer: FC = () => {
  return (
    <GridFooterContainer container>
      <Grid item xs={12} md={4}>
        <Grid container spacing={0}>
          <Grid container item xs={12} md={12} flexDirection="column">
            <h3>Conoce Nutriguide</h3>
            <a href="a">Acerca de</a>
            <a href="a">Preguntas Frecuentes</a>
          </Grid>
          <Grid item xs={12} md={12}>
            <a href="a">
              <img style={imgLogo} src='/assets/Facebook.png' alt="facebook icon"/>
            </a>
            <a href="a">
              <img style={imgLogo} src='/assets/Twitter.png' alt="twitter icon"/>
            </a>
            <a href="https://www.instagram.com/nutriguide_es/">
              <img style={imgLogo} src="/assets/Instagram.png" alt="instragram icon"/>
            </a>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container xs={12} md={4} flexDirection="column">
        <h3>¿Quiénes somos?</h3>
        <a href="a">Equipo</a>
        <a href="a">Documentación</a>
        <a href="a">Contáctanos</a>
      </Grid>
      <Grid item container xs={12} md={4} alignItems="center">
        <p>2021 © Personal Nutricionist</p> 
      </Grid>
    </GridFooterContainer>
  );
};
