import { Button, Grid, Box } from "@mui/material";
import { MarketingCard } from "../../components/MarketingCard/MarketingCard";
<<<<<<< HEAD

const GridPhoto = styled(Grid)(() => ({
  height: 900,
  backgroundImage: "url(/assets/mainphoto.jpg)",
  backgroundPosition: "center",
  backgroundSize: "cover",
  textAlign: "center",
  alignItems: "center",
  color: "white",
}));

const TypographyTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: 40,
  }
}));

const ButtonLogIn = styled(Button) (() => ({
  color: "white",
}));

const divTopStyle: CSSProperties = {
  backgroundColor: "rgb(146, 102, 52, 0.7)",
};

const GridMarketingContainer = styled(Grid)(() => ({
  backgroundColor: "#f8f5f2",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center"
}));

const GridNutritionistContainer = styled(Grid)(() => ({
  backgroundColor: "#ede7d3",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center"
}));

const imgNutritionist: CSSProperties = {
  height: 400,
};

export const Home: FC = () => {
=======
export default function Home() {
>>>>>>> 72709cca36c823420dbde0844bf16c6e7ae0aea5
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
