import { FC } from "react";

import { useAppSelector } from "../../app/hooks";

import { Grid, Avatar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const GridContainer = styled(Grid) (() => ({
  display: "flex",
  flexGrow: 1,
  alignItems: "center",
  justifyContent: "center",
  color: "black"
}));

const GridProfileContainer = styled(Grid) (() => ({
  backgroundColor: "white",
  width: "300px",
  height: "60%",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "5px",
}));

export const Profile: FC = () => {
  const userInfo = useAppSelector((state) => state.user.userInfo);
  return (
    <GridContainer container>
      <GridProfileContainer container item >
        <GridContainer item lg={12} sx={{ height: "40%", flexDirection:"column" }}>
          <Avatar variant="square"  sx={{ width: 120, height: 120, marginBottom: 3 }}>{userInfo.name.charAt(0).toUpperCase()}</Avatar>
          <Typography>{userInfo.name}</Typography>
        </GridContainer>
        {
          userInfo.role === "Nutricionista" ?
            <GridContainer item xs={12} lg={12} sx={{ backgroundColor:"darkblue", height: "10%" }}>Especialidades</GridContainer>
          : ""
        }

        <GridContainer item xs={12} lg={12} sx={{ backgroundColor:"darkred", height: "20%" }}><Typography>{userInfo.description}</Typography></GridContainer>
        <GridContainer item xs={12} lg={12} sx={{ backgroundColor:"gray", height: "30%" }}>Contacto</GridContainer>
      </GridProfileContainer>
    </GridContainer>
  );
};
