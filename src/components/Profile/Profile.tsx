import { FC } from "react";

import { Grid, Avatar, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Phone, Mail } from "@mui/icons-material";

interface Props {
  userInfo: any;
}

const GridContainer = styled(Grid) (() => ({
  display: "flex",
  flexGrow: 1,
  alignItems: "center",
  justifyContent: "center",
  color: "black",
  flexDirection: "column"
}));

const GridProfileContainer = styled(Grid) (() => ({
  backgroundColor: "white",
  width: "300px",
  height: "70%",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "5px",
}));

export const Profile: FC<Props> = ({ userInfo }) => {
  return (
    <GridContainer container>
      <GridProfileContainer container item >
        <GridContainer item lg={12} sx={{ height: "40%" }}>
          <Avatar variant="circular"  sx={{ width: 120, height: 120, marginBottom: 3 }} src={userInfo.photo}>{userInfo.name.charAt(0).toUpperCase()}</Avatar>
          <Typography variant="subtitle1"><b>{userInfo.name}</b></Typography>
          <Typography variant="subtitle1">{userInfo.role}</Typography>
          <hr style={{ width: "50%" }}/>
        </GridContainer>
        <GridContainer item xs={12} lg={12} sx={{ height: "20%", margin: "-1.5em 1em 0 1em" }}>
          <Typography variant="subtitle1"><b>Descripción</b></Typography>
          <Typography align="center">{ userInfo.description !== "" ? userInfo.description : "-" }</Typography>
          <hr style={{ width: "50%"}}/>
        </GridContainer>
        {
          userInfo.role === "Nutricionista" ?
            <GridContainer item xs={12} lg={12} sx={{ height: "10%" }}>
              <Typography variant="subtitle1"><b>Especialidades</b></Typography>
              <Typography variant="subtitle1"> {userInfo.specialties} </Typography>
              <hr style={{ width: "50%" }}/>
            </GridContainer>
          : 
            <GridContainer item xs={12} lg={12} sx={{ height: "10%", marginTop: "1.5em" }}>
              <Typography variant="subtitle1"><b>Datos médicos</b></Typography>
              <Typography variant="subtitle1"><b>Altura</b>: { userInfo.height !== "" ? userInfo.height : "-" } </Typography>
              <Typography variant="subtitle1"><b>Peso</b>: { userInfo.weight !== "" ? userInfo.weight : "-" } </Typography>
              <hr style={{ width: "50%" }}/>
            </GridContainer>
        }
        <GridContainer item xs={10} lg={10} sx={{ height: "20%", flexDirection: "column" }}>
          <Typography variant="subtitle1"><b>Contáctame</b></Typography>
          <Button variant="contained" startIcon={<Phone />} sx={{ marginBottom: 2 }}>
            { userInfo.phone === 0 ? "-" : userInfo.phone }
          </Button>
          <Button variant="contained" startIcon={<Mail />}>
            {userInfo.email}
          </Button>
        </GridContainer>
      </GridProfileContainer>
    </GridContainer>
  );
};
