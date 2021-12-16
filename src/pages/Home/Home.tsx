import { Button, Grid, Box } from "@mui/material";
import { MarketingCard } from "../../components/MarketingCard/MarketingCard";
export default function Home() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor:"#fffffe" }}>
      <h1>La web del cuidado personal</h1>
      <h2>Cómoda, accesible y la mejor manera de cuidarte a ti mismo.</h2>
      <Button variant="contained">Inicia sesión</Button>
      <Box sx={{ flexGrow: 1, backgroundColor:"#f8f5f2" }}>
        <Grid container item spacing={3} alignItems="center" justifyContent="center">
          <MarketingCard cardImage="/assets/nutritionist.jpg"  name="Los mejores profesionales" info="La web en la que encontrarás a los verdaderos expertos" altInfo="Nutricionista atendiendo a cliente"/>
          <MarketingCard cardImage="/assets/accesible.jpg" name="Accesible" info="El lugar para todos" altInfo="Persona escuchando una web"/>
          <MarketingCard cardImage="assets/comfortable.jpg" name="Cómodo y sencillo" info="Desde el ordenador de tu casa o desde tu mismo móvil podrás darle un vuelco a tu vida" altInfo="Persona mirando el móvil mientras come"/>
        </Grid>
      </Box>
    </Box>
  );
}
