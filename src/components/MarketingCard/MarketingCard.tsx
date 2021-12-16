import { FC } from "react";

import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

interface Props {
  cardImage: string;
  name: string;
  info: string;
  altInfo: string;
}

const CardContainer = styled(Card)(() => ({
  height: 200,
  display: "flex",
}));

const ContainerInfo = styled(CardContent)(() => ({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  justifyContent: "center",
}));

const TypographyH3Text = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: 16,
    fontWeight: "bold"
  }
}));

const TypographySubtitle1Text = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: 12,
  }
}));

export const MarketingCard: FC<Props> = ({ name, cardImage, info, altInfo }) => {
  return (
    <Grid item xs={11} md={11} lg={7}>
      <CardContainer>
        <CardMedia
          component="img"
          sx={{ width: {xs: 150, md: 300, lg: 400} }}
          image={cardImage}
          alt={altInfo}
        />
        <ContainerInfo>
          <TypographyH3Text align="left" variant="h3">{name}</TypographyH3Text>
          <TypographySubtitle1Text align="left" variant="subtitle1">{info}</TypographySubtitle1Text>
        </ContainerInfo>
      </CardContainer>
    </Grid>
  );
};
