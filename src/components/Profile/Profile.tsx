import { CSSProperties, FC } from "react";

import { Grid, Avatar, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Phone, Mail } from "@mui/icons-material";

interface Props {
  userInfo: any;
}

const ContainerStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "white",
  padding: "10px 10px 10px 10px",
  borderRadius: "5px",
};

export const Profile: FC<Props> = ({ userInfo }) => {
  return (
    <div style={ContainerStyle}>
      <div style={ContainerStyle}>
        <Avatar variant="circular" sx={{ width: 120, height: 120, marginBottom: 3 }} src={userInfo.photo}>{userInfo.name.charAt(0).toUpperCase()}</Avatar>
        <Typography variant="subtitle1"><b>{userInfo.name}</b></Typography>
        <Typography variant="subtitle1">{userInfo.role}</Typography>
        <hr style={{ width: "50%" }}/>
      </div>

      <div style={ContainerStyle}>
        <Typography variant="subtitle1"><b>Descripción</b></Typography>
        <Typography align="center">{ userInfo.description !== "" ? userInfo.description : "-" }</Typography>
        <hr style={{ width: "50%"}}/>
      </div>

      <div style={ContainerStyle}>
        {
          userInfo.role === "Nutricionista" ?
            <div style={ContainerStyle}>
              <Typography variant="subtitle1"><b>Especialidades</b></Typography>
              <Typography variant="subtitle1"> {userInfo.specialties.join(", ") || "-"} </Typography>
              <hr style={{ width: "50%" }}/>
            </div>
          : 
            <div style={ContainerStyle}>
              <Typography variant="subtitle1"><b>Datos médicos</b></Typography>
              <Typography variant="subtitle1"><b>Altura</b>: { userInfo.height !== "" ? userInfo.height : "-" } </Typography>
              <Typography variant="subtitle1"><b>Peso</b>: { userInfo.weight !== "" ? userInfo.weight : "-" } </Typography>
              <hr style={{ width: "50%" }}/>
            </div>
        }
      </div>

      <div style={ContainerStyle}>
        <Typography variant="subtitle1"><b>Contáctame</b></Typography>
        <Button variant="contained" startIcon={<Phone />} sx={{ marginBottom: 2 }}>
          { userInfo.phone === 0 ? "-" : userInfo.phone }
        </Button>
        <Button variant="contained" startIcon={<Mail />}>
          {userInfo.email}
        </Button>
      </div>
    </div>
  );
};
