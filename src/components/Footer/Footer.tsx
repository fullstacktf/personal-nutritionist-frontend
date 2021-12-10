import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import "./Footer.css"

import facebook from "./Facebook.png"
import twitter from "./Twitter.png"
import instagram from "./Instagram.png"
import avocado from "./avocado.png"

export default function Footer(){
  return(
    
      <Box className="footer" sx={{ flexGrow: 1 }} >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 16, md: 18 }}
        >
          <Box
            component={Grid}
            xs={2}
            sm={2}
            md={2}
            display={{ xs: "none", xm:"flex", lg: "flex" }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <div className="avocado-box">
              <img className="avocado" src={avocado} alt="avocado" />
            </div>
          </Box>
          
          <Grid item xs={2} sm={4} md={4} >
            <div className="column">
              <h3>Conoce Nutriguide</h3>
              <a href="a">Acerca de</a>
              <a href="a">Preguntas Frecuentes</a>
            </div>
            <a href="a"><img className="icon" src={facebook} alt="facebook icon" /></a>
            <a href="a"><img className="icon" src={twitter} alt="twitter icon" /></a>
            <a href="a"><img className="icon" src={instagram} alt="instragram icon" /></a>
          </Grid>

          <Grid item xs={2} sm={2} md={2} >
            <div className="column">
            <h3>¿Quiénes somos?</h3>
              <a href="a">Equipo</a>
              <a href="a">Documentación</a>
              <a href="a">Contáctanos</a>
            </div>
          </Grid>

          <Grid item xs={0} sm={6} md={6} >
          </Grid>

          <Grid className="column copyright" item xs={2} sm={4} md={4} >
              <p>2021 © Personal Nutricionist</p> 
          </Grid>

        </Grid>
      </Box>
  );
}
