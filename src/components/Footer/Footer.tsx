import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./Footer.css";

export default function Footer(){
  return(
  <div>
    <Box sx={{ flexGrow: 1 }} >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 18 }}
      >
        <Grid item xs={2} sm={4} md={2} >
          <div>
            <a href="a">About</a>
          </div>
        </Grid>

        <Grid item xs={2} sm={4} md={2} >
          <div>
            <a href="a">Team</a>
          </div>
        </Grid>

        <Grid item xs={2} sm={4} md={2} >
          <div>
            <a href="a">Contact</a>
          </div>
        </Grid>
        <Grid item xs={2} sm={4} md={8} >
          <div>
          </div>
        </Grid>
        <Grid item xs={2} sm={4} md={4} >
          <div>2021 © Personal Nutricionist</div>
        </Grid>
      </Grid>
    </Box>
  </div>

  );
}
