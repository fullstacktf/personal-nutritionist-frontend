import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { FC } from "react";
import {styled} from "@mui/material/styles";

interface Props {
  cardImage: string;
  name: string;
  info: string;
  altInfo: string;
}
const Container = styled(Card)(() => ({
  height: 200,
  display: "flex",
}));

const ContainerInfo = styled(CardContent)(() => ({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  justifyContent: "center",
}));

const Text = styled(Typography)(({theme}) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: 20,
    fontWeight: "bold"
  }
}));

export const MarketingCard: FC<Props> = ({ name, cardImage, info, altInfo }) => {
  return (
    <Grid item xs={11} md={11} lg={7}>
      <Container>
        <CardMedia
          component="img"
          sx={{ width:{xs: 150, md: 300, lg: 400} }}
          image={cardImage}
          alt={altInfo}
        />
        <ContainerInfo>
          <Text align="left" variant="h3">
            {name}
          </Text>
          <Typography align="left" variant="subtitle1">
            {info}
          </Typography>
        </ContainerInfo>
      </Container>
    </Grid>
  );
};
