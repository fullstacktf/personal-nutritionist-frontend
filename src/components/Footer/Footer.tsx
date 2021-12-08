import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./Footer.css"
import facebook from "./facebook-original.svg"
import twitter from "./twitter-original.svg"
import avocado from "./avocado.png"

export default function Footer(){
  return(
    <div className="footer">
      <Box sx={{ flexGrow: 1 }} >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 20, md: 20 }}
        >
          <Grid item xs={2} sm={2} md={2} >
          <img className="avocado" src={avocado} alt="avocado" />
          </Grid>
          <Grid item xs={2} sm={2} md={2} >
            <div className="column">
              <a href="a">About</a>
              <a href="a">FAQs</a>
            </div>
            <a href="a"><img className="icon" src={facebook} alt="github icon" /></a>
            <a href="a"><img className="icon" src={twitter} alt="github icon" /></a>
          </Grid>

          <Grid item xs={2} sm={4} md={2} >
            <div className="column">
              <a href="a">Team</a>
              <a href="a">Docs</a>
              <a href="a">Contact</a>
            </div>
          </Grid>
 
          <Grid item xs={2} sm={4} md={4} >
            <div className="column">
              <a href="a">Terms and Conditions</a>
              <a href="a">Privacy Policy</a>
              <a href="a">Cookie Policy</a>
            </div>
          </Grid>
          <Grid item xs={0} sm={1} md={4} >
            <div>
            </div>
          </Grid>
          <Grid item xs={2} sm={6} md={6} >
            <div className="column">2021 © Personal Nutricionist</div>
          </Grid>
        </Grid>
      </Box>
    </div>

  );
}
