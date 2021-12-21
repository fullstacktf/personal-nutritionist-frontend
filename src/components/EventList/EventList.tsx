import { CSSProperties, FC } from "react";
import axios from "axios";

import { Avatar, IconButton } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";

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

export const EventList: FC = () => {
  const userInfo = useAppSelector((state) => state.user.userInfo);
  const userToken = useAppSelector((state) => state.user.token);
  const events = [];

  const titles = [
    { id: "title", label: "TÍTULO", minWidth: 170, align: "left" },
    { id: "status", label: "ESTADO", minWidth: 100, align: "center" },
    { id: "startingDate", label: "FECHA DE INICIO", minWidth: 100, align: "center" },
    { id: "endingDate", label: "FECHA DE FIN", minWidth: 100, align: "center" },
    { id: "actions", label: "", minWidth: 30, align: "center" },
  ];

  const handleDeleleEvent = (id: any) => {
    const config = {
      headers: { Authorization: `Bearer ${userToken}` }
    };

    axios.delete(`https://api.nutriguide.es/calendar/event/${id}`, config)
      .then(res => { console.log(res.data); });
  };

  if (userInfo.events == null) return <div>No hay eventos</div>;
  
  for (let item of userInfo.events) {
    events.push([
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar style={{ marginRight: "10px" }} variant="rounded">{item.title.charAt(0).toUpperCase()}</Avatar>
        {item.title}
      </div>,
      <div style={{ background: "#1de9b6", borderRadius: "5px", padding: "5px 0 5px 0" }}>
        {item.status}
      </div>,
      item.startingDate,
      item.endingDate,
      <div>
        <IconButton aria-label="profile" color="secondary" onClick={() => handleDeleleEvent(item._id)}>
          <DeleteOutline />
        </IconButton>
      </div>
    ]);
  }

  return (
    <div style={BoxStyle}>
      <div style={BorderStyle}>
        <StickyHeadTable name="Lista de Eventos" titles={titles} data={events} />
      </div>
    </div>
  );
};
