import { CSSProperties, FC } from "react";

import { Avatar, Typography, Button } from "@mui/material";
import { PointOfSale } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

interface Props {
  userInfo: any;
}

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

export const HireCard: FC<Props> = ({ userInfo }) => {
  return (
    <div style={ContainerStyle}>
      <div style={ContainerStyle}>
        <Avatar variant="circular" sx={{ width: 120, height: 120, marginBottom: 3 }} src={userInfo.photo}>{userInfo.name.charAt(0).toUpperCase()}</Avatar>
        <Typography variant="subtitle1"><b>{userInfo.name}</b></Typography>
        <Typography variant="subtitle1" align="center">{userInfo.description !== "" ? userInfo.description : "-"}</Typography>
        <hr style={{ width: "50%" }}/>
      </div>

      <div style={ContainerStyle}>
        <Typography variant="subtitle1">{userInfo.specialties ? userInfo.specialties.join(", ") : "-"}</Typography>
        <Typography variant="subtitle1"><b>{userInfo.phone}</b></Typography>
        <Typography variant="subtitle1" align="center">{userInfo.price + "€"}</Typography>
        <hr style={{ width: "50%" }}/>
      </div>

      <div style={ContainerStyle}>
        <StyledButton variant="contained" startIcon={<PointOfSale />} onClick={() => { alert("Pagado :)"); }}>
          Enviar Bizum
        </StyledButton>
      </div>
    </div>
  );
};
