import { CSSProperties, FC, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { Avatar, IconButton } from "@mui/material";
import { InsertInvitation, AssignmentInd, PointOfSale } from "@mui/icons-material";

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

export const NutritionistList: FC = () => {
  const userToken = useAppSelector((state) => state.user.token);
  const [nutritionists, setNutritionists] = useState<any>();
  const rows = [];

  const titles = [
    { id: "name", label: "NOMBRE", minWidth: 170, align: "left" },
    { id: "specialties", label: "ESPECIALIDADES", minWidth: 100, align: "center" },
    { id: "email", label: "EMAIL", minWidth: 100, align: "center" },
    { id: "phone", label: "TELÉFONO", minWidth: 100, align: "center" },
    { id: "actions", label: "", minWidth: 30, align: "center" },
  ];

  useEffect(() => {
    const getData = async() => {
      const config = {
        headers: { Authorization: `Bearer ${userToken}` }
      };

      await axios.get("https://api.nutriguide.es/users/role/Nutricionista", config)
        .then(res => { setNutritionists(res.data); });
    };

    getData();
  }, [userToken]);
  
  if (!nutritionists) {
    return (
      <div style={BoxStyle}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "black" }}>
          No hay nutricionistas
        </div>
      </div>
    );
  }
  
  for (let item of nutritionists) {
    const specialties = item.specialties != null ? item.specialties.join(", ") : item.specialties;
    const phone = item.phone === 0 ? "-" : item.phone;

    rows.push([
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar style={{ marginRight: "10px" }} variant="rounded" src={item.photo}>{item.name.charAt(0).toUpperCase()}</Avatar>
        {item.name}
      </div>,
      specialties,
      <div style={{ background: "#ffa726", borderRadius: "5px", padding: "5px 0 5px 0" }}>
        {item.email}
      </div>,
      <div style={{ background: "#1de9b6", borderRadius: "5px", padding: "5px 0 5px 0" }}>
        {phone}
      </div>,
      <div>
        <IconButton 
          aria-label="hire" 
          color="secondary"
          component={Link} 
          to={`/hire/${item._id}`}
          >
          <PointOfSale />
        </IconButton>
        <IconButton 
          aria-label="calendar" 
          color="secondary"
          component={Link} 
          to={`/calendar/event/create/${item._id}`}
          >
          <InsertInvitation />
        </IconButton>
        <IconButton 
          aria-label="profile" 
          color="secondary"
          component={Link} 
          to={`/profile/${item._id}`}
        >
          <AssignmentInd />
        </IconButton>
      </div>
    ]);
  }

  return (
    <div style={BoxStyle}>
      <div style={BorderStyle}>
        <StickyHeadTable name="Lista de Nutricionistas" titles={titles} data={rows} />
      </div>
    </div>
  );
};
