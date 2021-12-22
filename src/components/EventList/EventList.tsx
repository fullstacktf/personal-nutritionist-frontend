import { CSSProperties, FC } from "react";
import axios from "axios";

import { Avatar, IconButton } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { updateUser } from "../../features/user/userSlice";
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
  maxHeight: "700px",
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

  const dispatch = useAppDispatch();

  const handleUpdateUser = async(config: object, user: any) => {
    axios.put(`https://api.nutriguide.es/users/${user._id}`, user, config);
  };

  const handleDeleteEvent = (id: any, event: any) => {
    const config = {
      headers: { Authorization: `Bearer ${userToken}` }
    };

    const newEvent = { ...event};
    newEvent.status = "rejected";

    axios.put(`https://api.nutriguide.es/calendar/event/${id}`, newEvent, config)
      .then(res => { console.log(res.data); });

      const index = userInfo.events.findIndex((event: any) => event._id === id);
      const newEvents = [ ...userInfo.events ];
      newEvents.splice(index, 1);
      const newUser = { ...userInfo };
      newUser.events = newEvents;

      handleUpdateUser(config, newUser);
      dispatch(updateUser(newUser));
  };

  if (!userInfo.events) {
    return (
      <div style={BoxStyle}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "black" }}>
          No hay eventos
        </div>
      </div>
    );
  }
  
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
        <IconButton aria-label="profile" color="secondary" onClick={() => handleDeleteEvent(item._id, item)}>
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
