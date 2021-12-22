import { CSSProperties, FC, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { Avatar, IconButton } from "@mui/material";
import { InsertInvitation, AssignmentInd, LocalDining } from "@mui/icons-material";

import { useAppSelector } from "../../app/hooks";
import { StickyHeadTable } from "../Table/Table";

const BoxStyle: CSSProperties = {
  flexGrow: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const BorderStyle: CSSProperties = {
  borderRadius: "1%",
  width: "70%",
  height: "70%",
  maxWidth: "1290px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};

export const ClientList: FC = () => {
  const userToken = useAppSelector((state) => state.user.token);
  const [clients, setClients] = useState<any>();
  const rows = [];

  const titles = [
    { id: "name", label: "NOMBRE", minWidth: 170, align: "left" },
    { id: "typeDiet", label: "DIETA", minWidth: 100, align: "center" },
    { id: "intolerances", label: "INTOLERANCIAS", minWidth: 100, align: "center" },
    { id: "email", label: "EMAIL", minWidth: 100, align: "center" },
    { id: "phone", label: "TELÉFONO", minWidth: 100, align: "center" },
    { id: "actions", label: "", minWidth: 30, align: "center" },
  ];

  useEffect(() => {
    const getData = async() => {
      const config = {
        headers: { Authorization: `Bearer ${userToken}` }
      };

      axios.get("https://api.nutriguide.es/users/role/Cliente", config)
        .then((res) => { setClients(res.data); });
    };

    getData();
  }, [userToken]);
  
  if (!clients) {
    return (
      <div style={BoxStyle}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "black" }}>
          No hay clientes
        </div>
      </div>
    );
  }

  for (let item of clients) {
    const intolerances = item.intolerances != null ? item.intolerances.join(", ") : item.intolerances;
    const phone = item.phone === 0 ? "-" : item.phone;

    rows.push([
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar style={{ marginRight: "10px" }} variant="rounded" src={item.photo}>{item.name.charAt(0).toUpperCase()}</Avatar>
        {item.name}
      </div>,
      item.typeDiet,
      intolerances,
      <div style={{ background: "#ffa726", borderRadius: "5px", padding: "5px 0 5px 0" }}>
        {item.email}
      </div>,
      <div style={{ background: "#1de9b6", borderRadius: "5px", padding: "5px 0 5px 0" }}>
        {phone}
      </div>,
      <div>
        <IconButton 
          aria-label="calendar" 
          color="secondary"
          component={Link} 
          to={`/calendar/event/create/${item._id}`}
        >
          <InsertInvitation />
        </IconButton>
        <IconButton aria-label="profile" color="secondary">
          <AssignmentInd />
        </IconButton>
        <IconButton 
          aria-label="recipe"
          color="secondary"
          component={Link}
          to={`/weekmeal/recipe/create/${item._id}`} 
        >
          <LocalDining />
        </IconButton>
      </div>
    ]);
  }

  return (
    <div style={BoxStyle}>
      <div style={BorderStyle}>
        <StickyHeadTable name="Lista de Clientes" titles={titles} data={rows} />
      </div>
    </div>
  );
};
