import { CSSProperties, FC, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useAppSelector } from "../../../app/hooks";

import { Box, Button } from "@mui/material";
import { Cancel } from "@mui/icons-material";

import { SideMenu } from "../../../components/Menu/Menu";
import { CreateEventForm } from "../../../components/Forms/CreateEventForm/CreateEventForm";

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
  let url = useLocation();
  const [basicUsers, setBasicUsers] = useState<any>();
  const [participant, setParticipant] = useState<any>();
  const userInfo = useAppSelector((state) => state.user.userInfo);

  useEffect(() => {
    const handleUser = async(id: any) => {
      await axios.get(`https://api.nutriguide.es/users/${id}`)
        .then((res) => { 
          const basicUsersAux = [
            { _id: userInfo._id, name: userInfo.name, email: userInfo.email, phone: userInfo.phone, photo:userInfo.photo, isVerified: userInfo.isVerified },
            { _id: res.data._id, name: res.data.name, email: res.data.email, phone: res.data.phone, photo:res.data.photo, isVerified: res.data.isVerified },
          ];
          setBasicUsers(basicUsersAux);
          setParticipant(res.data);
        });
    };

    handleUser(url.pathname.split("/").pop());
  }, [url, userInfo]);

  if (basicUsers == null) return <div>No hay participantes</div>;

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
                to="/list"
                sx={{ marginRight:"1em" }}
              >
                Cancelar
              </Button>
              <h2>Crea un nuevo evento</h2>
            </div>
          </div>
          <div style={SeparatorStyle}></div>
          <div style={FormBodyStyle}>
            <CreateEventForm basicUsers={basicUsers} owner={userInfo} participant={participant} />
          </div>
        </div>
      </div>
    </Box>
  );
};
