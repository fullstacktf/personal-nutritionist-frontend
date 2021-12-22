import { CSSProperties, FC } from "react";
import { Link } from "react-router-dom";

import { Box, Button } from "@mui/material";
import { Cancel } from "@mui/icons-material";

import { SideMenu } from "../../../components/Menu/Menu";
import { CreateRecipeForm } from "../../../components/Forms/CreateRecipeForm/CreateRecipeForm";

const BoxStyle: CSSProperties = {
  display: "flex",
  flexGrow: 1,
  color: "white",
  background: "#dbdbdb",
  height: "87.5vh"
};

const BorderStyle: CSSProperties = {
  width: "100%",
  height: "80%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center"
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

export const CreateRecipePage: FC = () => {
  return (
    <Box style={BoxStyle}>
      <SideMenu />
      <div style={BorderStyle}>
        <div style={FormContainerStyle}>
          <div style={HeaderStyle}>
            <div style={TitleContainerStyle}>
              <Button 
                variant="contained" 
                color="error" 
                startIcon={<Cancel />}
                component={Link}
                to={"/recipes"}
                sx={{ marginRight:"1em" }}
              >
                Cancelar
              </Button>
              <h2>Crea una nueva receta</h2>
            </div>
          </div>
          <div style={SeparatorStyle}></div>
          <div style={FormBodyStyle}>
            <CreateRecipeForm />
          </div>
        </div>
      </div>
    </Box>
  );
};
