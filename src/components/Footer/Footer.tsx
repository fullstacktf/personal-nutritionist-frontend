import { CSSProperties, FC } from "react";

import { styled } from "@mui/material/styles";
import { Grid, Link, Typography }  from "@mui/material";

const GridFooterContainer = styled(Grid)(() => ({
  backgroundColor: "#0f1114",
  textAlign: "center",
  justifyContent: "space-between",
  alignItems: "center",
  color: "white",
  height: "4.4vh"
}));

const GridLeftItems = styled(Grid)(() => ({
  justifyContent: "space-evenly",
  alignItems: "center"
}));

const LogoStyle: CSSProperties = {
  height: 40,
  width: 40
};

export const Footer: FC = () => {
  return (
    <GridFooterContainer container>
      <GridLeftItems container item xs={2} md={2} lg={2}>
        <Link href="https://docs.nutriguide.es" underline="hover" color="white"><b>Docs</b></Link>
        <Link href="https://docs.nutriguide.es/en/introduction/#-team" underline="hover" color="white"><b>Team</b></Link>
        <Link href="https://www.instagram.com/nutriguide_es/">
          <img style={LogoStyle} src="/assets/Instagram.png" alt="instragram icon"/>
        </Link>
      </GridLeftItems>
      <Grid container item xs={2} md={2} lg={2} sx={{ justifyContent:"center" }}>
        <Typography variant="subtitle1">2021 © Nutriguide</Typography> 
      </Grid>
    </GridFooterContainer>
  );
};
