import { CSSProperties, FC, useEffect, useState } from "react";
import {  useLocation } from "react-router-dom";

import axios from "axios";

import { Box } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import { SideMenu } from "../../components/Menu/Menu";
import { HireCard } from "../../components/HireCard/HireCard";

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

const HireContainerStyle: CSSProperties = {
  width: "30%"
};

export const HirePage: FC = () => {
  let url = useLocation();
  const userToken = useAppSelector((state) => state.user.token);
  const [user, setUser] = useState<any>();


  useEffect(() => {
    const handleUser = async(id: any) => {
      const config = {
        headers: { Authorization: `Bearer ${userToken}` }
      };

      await axios.get(`https://api.nutriguide.es/users/${id}`, config)
        .then((res) => { 
          setUser(res.data);
        });
    };

    handleUser(url.pathname.split("/").pop());
  }, [url, userToken]);

  if (!user) { return <div>Cargando...</div>; }
  
  return (
    <Box style={BoxStyle}>
      <SideMenu />
      <div style={ContainerStyle}>
        <div style={HireContainerStyle}>
          <HireCard userInfo={user} />
        </div>
      </div>
    </Box>
  );
};
