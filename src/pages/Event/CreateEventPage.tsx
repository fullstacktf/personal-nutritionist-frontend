import { CSSProperties, FC } from "react";
import { Link } from "react-router-dom";

import { Box, Button } from "@mui/material";
import { Cancel } from "@mui/icons-material";


import { SideMenu } from "../../components/Menu/Menu";
import { CreateEventForm } from "../../components/Forms/CreateEventForm/CreateEventForm";

const BoxStyle: CSSProperties = {
  display: "flex",
  flexGrow: 1,
  color: "white",
  background: "#dbdbdb",
  height: "100vh",
};

const BorderStyle: CSSProperties = {
  width: "100%",
  height: "80%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
};

const FormContainerStyle: CSSProperties = {
  display: "flex",
  color: "black",
  background: "#FFFFFF",
  borderRadius: "10px",
  height: "80%",
  width: "50%",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "5px",
};

const HeaderStyle: CSSProperties = {
  display: "flex",
  width: "100%",
  height: "10%",
  flexDirection: "column",
  justifyContent: "center",
};

const TitleContainerStyle: CSSProperties = {
  display: "flex",
  width: "100%",
  height: "100%",
  alignItems: "center",
  marginLeft: "20px",
};

const SeparatorStyle: CSSProperties = {
  borderBottom: "3px solid #CCC4C5",
  width:"100%",
  height:"1%"
};

const FormBodyStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "90%",
  justifyContent:"flex-start",
  alignItems: "center",
};

export const CreateEventPage: FC = () => {

  return (
    <Box style={BoxStyle}>
      <SideMenu></SideMenu>
      <div style={BorderStyle}>
        <div style={FormContainerStyle}>
          <div style={HeaderStyle}>
            <div style={TitleContainerStyle}>
              <Button 
                variant="contained" 
                color="error" 
                startIcon={<Cancel />}
                component={Link}
                to="/calendar"
                sx={{ marginRight:"1em" }}
              >
                Cancelar
              </Button>
              <h2>Crea un nuevo evento</h2>
            </div>
          </div>
          <div style={SeparatorStyle}></div>
          <div style={FormBodyStyle}>
            <CreateEventForm owner="61bd278898bc9546b484b879" participant="61be0b7bb49873b63d4852a7"/>
          </div>
        </div>
      </div>
    </Box>
  );
};
