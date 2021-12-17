import { CSSProperties, FC } from "react";
import { Link } from "react-router-dom";

import { styled } from "@mui/material/styles";
import { Button, Grid, Box, Typography } from "@mui/material";

import { MarketingCard } from "../../components/MarketingCard/MarketingCard";
import { Footer } from "../../components/Footer/Footer";

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

export const WebPage: FC = () => {
  return (
    <Box>
      <GridPhoto container>
        <Grid item xs={12} md={12} lg={12}>
          <div style={divTopStyle}>
            <TypographyTitle variant="h1">La web del cuidado personal</TypographyTitle>
            <TypographyTitle gutterBottom variant="h2">Cómoda, accesible y la mejor manera de cuidarte a ti mismo.</TypographyTitle>
          </div>
          <Button sx={{ color:"white" }} component={Link} to={"/login"} variant="contained" size="large">Inicia sesión</Button>
        </Grid>
      </GridPhoto>
    
      <GridMarketingContainer container p={5} spacing={3}>
        <MarketingCard 
          cardImage="/assets/profesionals.jpg"  
          name="Los mejores profesionales" 
          info="La web en la que encontrarás a los verdaderos expertos"
          altInfo="Nutricionista atendiendo a cliente"
        />
        <MarketingCard 
          cardImage="/assets/accesible.jpg"
          name="Accesible"
          info="El lugar para todos"
          altInfo="Persona escuchando una web"
        />
        <MarketingCard 
          cardImage="assets/comfortable.jpg"
          name="Cómodo y sencillo"
          info="Desde el ordenador de tu casa o desde tu mismo móvil podrás darle un vuelco a tu vida"
          altInfo="Persona mirando el móvil mientras come"
        />
      </GridMarketingContainer>

      <GridNutritionistContainer container p={5} spacing={3}>
        <Grid item xs={12} md={12} lg={4}>
          <img 
            src="/assets/nutritionist.jpg"
            alt="Nutricionista con un cartel sobre vegetales con carbohidratos bajos" 
            style={imgNutritionist}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={4}>
          <Typography gutterBottom variant="h4">¿Eres nutricionista?</Typography>
          <Button sx={{ color:"white" }} component={Link} to="/login" variant="contained" size="large">Comienza ahora</Button>
        </Grid>
      </GridNutritionistContainer>
      <Footer />
    </Box>
  );
};
