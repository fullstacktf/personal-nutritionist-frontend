import { CSSProperties, FC, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import axios from "axios";

import { Box, Button } from "@mui/material";
import { Cancel } from "@mui/icons-material";

import { SideMenu } from "../../../components/Menu/Menu";
import { CreateRecipeParticipantForm } from "../../../components/Forms/CreateRecipeForm/CreateRecipeParticipantForm";

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

export const CreateRecipeParticipantPage: FC = () => {
  const userInfo = useAppSelector((state) => state.user.userInfo);
  const userToken = useAppSelector((state) => state.user.token);
  const [participant, setParticipant] = useState<any>();
  let url = useLocation();

  useEffect(() => {
    const handleUser = async(id: any) => {
      const config = {
        headers: { Authorization: `Bearer ${userToken}` }
      };

      await axios.get(`https://api.nutriguide.es/users/${id}`, config)
        .then((res) => { setParticipant(res.data); });
    };

    handleUser(url.pathname.split("/").pop());
  }, [url, userInfo, userToken]);
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
              <h2>Asigna una receta al cliente</h2>
            </div>
          </div>
          <div style={SeparatorStyle}></div>
          <div style={FormBodyStyle}>
            <CreateRecipeParticipantForm participant={participant}/>
          </div>
        </div>
      </div>
    </Box>
  );
};
