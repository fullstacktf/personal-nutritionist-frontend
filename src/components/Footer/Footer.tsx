import {Grid}  from "@mui/material";

export default function Footer(){
  return(
    <Grid container sx={{ flexGrow: 1, background: "#CDCDCD" }}>
      <Grid item xs={12} md={2} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img src='/assets/avocado.png' style={{ height: "100px", width: "100px" }} alt="Icono de un aguacate"/>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} sx={{display: "flex", flexDirection: "column"}}>
            <h3>Conoce Nutriguide</h3>
            <a href="a">Acerca de</a>
            <a href="a">Preguntas Frecuentes</a>
          </Grid>
          <Grid item xs={12} md={12}>
            <a href="a"><img style={{ height: "40px", width: "40px" }} src='/assets/Facebook.png' alt="facebook icon"/></a>
            <a href="a"><img style={{ height: "40px", width: "40px" }} src='/assets/Twitter.png' alt="twitter icon"/></a>
            <a href="https://www.instagram.com/nutriguide_es/"><img style={{ height: "40px", width: "40px" }} src="/assets/Instagram.png" alt="instragram icon"/></a>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4} sx={{ display: "flex", flexDirection: "column" }}>
        <h3>¿Quiénes somos?</h3>
        <a href="a">Equipo</a>
        <a href="a">Documentación</a>
        <a href="a">Contáctanos</a>
      </Grid>
      <Grid item xs={12} md={2} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p><b>2021 © Personal Nutricionist</b></p> 
      </Grid>
    </Grid>
  );
}
