import { CSSProperties, FC, useEffect, useState } from "react";
import axios from "axios";

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
  const titles = [
    { id: "name", label: "NOMBRE", minWidth: 170, align: "left" },
    { id: "typeDiet", label: "DIETA", minWidth: 100, align: "center" },
    { id: "intolerances", label: "INTOLERANCIAS", minWidth: 100, align: "center" },
    { id: "contact", label: "CONTACTO", minWidth: 100, align: "center" },
    { id: "calendar", label: "", minWidth: 20, align: "center" },
  ];

  const [clients, setClients] = useState();

  useEffect(() => {
    axios.get("https://api.nutriguide.es/users/role/Cliente")
      .then((res) => { setClients(res.data); });
  }, []);
  
  if (!clients) return <div>No hay clientes</div>;

  return (
    <div style={BoxStyle}>
      <div style={BorderStyle}>
        <StickyHeadTable name="Lista de Clientes" titles={titles} data={clients} />
      </div>
    </div>
  );
};
