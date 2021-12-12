import { Button, Grid, Box, Typography } from "@mui/material";
import { MarketingCard } from "../../components/MarketingCard/MarketingCard";
import {styled} from "@mui/material/styles";

const FrontPagePhoto = styled(Grid)(() => ({
  height: 900,
  backgroundImage: "url(/assets/mainphoto.jpg)",
  backgroundPosition: "center",
  backgroundSize: "cover",
  textAlign: "center"
}));

const FrontPageTitle = styled(Typography)(({theme}) => ({
  color: "white",
  textShadow: "1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000",
  [theme.breakpoints.down("md")]: {
    fontSize: 40,
  }
}));

const Separator = styled(Box)(() => ({
  flexGrow: 1,
  height: 300,
  backgroundColor: "#e5e5f7",
  opacity: 0.8,
  background: "linear-gradient(135deg, #92612955 25%, transparent 25%) -32px 0/ 64px 64px, linear-gradient(225deg, #926129 25%, transparent 25%) -32px 0/ 64px 64px, linear-gradient(315deg, #92612955 25%, transparent 25%) 0px 0/ 64px 64px, linear-gradient(45deg, #926129 25%, #000000 25%) 0px 0/ 64px 64px",
}));

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <FrontPagePhoto container alignItems="center" justifyContent="center">
        <Grid item xs={12} md={12} lg={12}>
          <FrontPageTitle variant="h1">La web del cuidado personal</FrontPageTitle>
          <FrontPageTitle gutterBottom variant="h2">Cómoda, accesible y la mejor manera de cuidarte a ti mismo.</FrontPageTitle>
          <Button variant="contained" sx={{color: "white"}} size="large">Inicia sesión</Button>
        </Grid>
      </FrontPagePhoto>
      <Separator sx={{ flexGrow: 1, backgroundColor:"#937A61", height: 30}}/>

      <Grid container item p={5} spacing={3} alignItems="center" justifyContent="center" sx={{ flexGrow: 1, backgroundColor:"#f8f5f2" }}>
        <MarketingCard cardImage="/assets/profesionals.jpg"  name="Los mejores profesionales" info="La web en la que encontrarás a los verdaderos expertos" altInfo="Nutricionista atendiendo a cliente"/>
        <MarketingCard cardImage="/assets/accesible.jpg" name="Accesible" info="El lugar para todos" altInfo="Persona escuchando una web"/>
        <MarketingCard cardImage="assets/comfortable.jpg" name="Cómodo y sencillo" info="Desde el ordenador de tu casa o desde tu mismo móvil podrás darle un vuelco a tu vida" altInfo="Persona mirando el móvil mientras come"/>
      </Grid>

      <Grid container alignItems="center" p={5} spacing={3} sx={{backgroundColor: "#ede7d3", textAlign:"center"}}>
        <Grid item xs={12} md={12} lg={6}>
          <img src="/assets/nutritionist.jpg" alt="Nutricionista con un cartel sobre vegetales con carbohidratos bajos" height="450px"/>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <Typography gutterBottom variant="h4">¿Eres nutricionista?</Typography>
          <Button variant="contained" sx={{color: "white"}} size="large">Comienza ahora</Button>
        </Grid>
      </Grid>
      <Separator sx={{ flexGrow: 1, backgroundColor:"#937A61", height: 30}}/>
    </Box>
    
  );
}
