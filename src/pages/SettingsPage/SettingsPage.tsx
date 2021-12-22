import { CSSProperties, FC } from "react";

import { Box, Typography } from "@mui/material";

import { SideMenu } from "../../components/Menu/Menu";
import { SettingsMenu } from "../../components/SettingsMenu/SettingsMenu";

interface Props {
  title: string;
  description: string;
  setting: JSX.Element;
}

const BoxStyle: CSSProperties = {
  display: "flex",
  flexGrow: 1,
  color: "black",
  backgroundColor: "#dbdbdb",
  height: "87.5vh"
};

const ContainerStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-evenly",
  width: "86%",
  alignItems: "center",
};

const MenuContainerStyle: CSSProperties = {
  display: "flex",
  justifyContent: "flex-end",
  width: "30%"
};

const GeneralFormContainerStyle: CSSProperties = {
  width: "80%",
  height: "80%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const BorderStyle: CSSProperties = {
  width: "80%",
  display: "flex",
  color: "black",
  background: "white",
  borderRadius: "10px",
  flexDirection: "column",
  justifyContent: "center"
};

const TitleContainerStyle: CSSProperties = {
  padding: "20px 0 15px 20px"
};

const SeparatorStyle: CSSProperties = {
  borderBottom: "3px solid #CCC4C5",
  width:"100%",
  height:"1%"
};

const FormContainerStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "300px"
};

export const SettingsPage: FC<Props> = ({ title, description, setting }) => {
  return (
    <Box style={BoxStyle}>
      <SideMenu />
      <div style={ContainerStyle}>
        <div style={MenuContainerStyle}>
          <SettingsMenu />
        </div>
        <div style={GeneralFormContainerStyle}>
          <div style={BorderStyle}>
            <div style={TitleContainerStyle}>
              <Typography variant="h4">{title}</Typography>
              <Typography>{description}</Typography>
            </div>
            <div style={SeparatorStyle}></div>
            <div style={FormContainerStyle}>
              {setting}
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};
