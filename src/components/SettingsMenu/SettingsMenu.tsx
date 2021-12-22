import { CSSProperties, FC } from "react";
import { Link } from "react-router-dom";

import { Avatar, Typography, Button } from "@mui/material";
import { SettingsAccessibility, AdminPanelSettings, HealthAndSafety, Verified } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

import { useAppSelector } from "../../app/hooks";

const ContainerStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  width: "70%",
  alignItems: "center",
  backgroundColor: "white",
  padding: "10px 10px 10px 10px",
  borderRadius: "5px",
};

const StyledButton = styled(Button)(() => ({
  marginBottom: "10px",
  width: "250px"
}));

export const SettingsMenu: FC = () => {
  const userInfo = useAppSelector((state) => state.user.userInfo);

  return (
    <div style={ContainerStyle}>
      <div style={ContainerStyle}>
        <Avatar variant="circular" sx={{ width: 120, height: 120, marginBottom: 3 }} src={userInfo.photo}>{userInfo.name.charAt(0).toUpperCase()}</Avatar>
        <Typography variant="subtitle1"><b>{userInfo.name}</b></Typography>
        <Typography variant="subtitle1" align="center">{userInfo.description !== "" ? userInfo.description : "-"}</Typography>
        <hr style={{ width: "50%" }}/>
      </div>

      <div style={ContainerStyle}>
        <Link to="/settings/personal" style={{ textDecoration: "none" }}>
          <StyledButton variant="contained" startIcon={<SettingsAccessibility />}>
            Información personal
          </StyledButton>
        </Link>
        <Link to="/settings/account" style={{ textDecoration: "none" }}>
          <StyledButton variant="contained" startIcon={<AdminPanelSettings />}>
            Información de cuenta
          </StyledButton>
        </Link>
        {
          userInfo.role === "Nutricionista" ?
            <Link to="/settings/verification" style={{ textDecoration: "none" }}>
              <StyledButton variant="contained" startIcon={<Verified />}>
                Verificación
              </StyledButton>
            </Link>
          :
            <Link to="/settings/health" style={{ textDecoration: "none" }}>
              <StyledButton variant="contained" startIcon={<HealthAndSafety />}>
                Información de salud
              </StyledButton>
            </Link>
        }
      </div>
    </div>
  );
};
