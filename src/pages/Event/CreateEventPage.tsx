import { CSSProperties, FC } from "react";

import { Box } from "@mui/material";

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
  height: "70%",
  width: "50%",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
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
            <div style={TitleContainerStyle}><h2>Crea un nuevo evento</h2></div>
          </div>
          <div style={SeparatorStyle}></div>
          <div style={FormBodyStyle}>
            <CreateEventForm/>
          </div>
        </div>
      </div>
    </Box>
  );
};