import { CSSProperties, FC, useEffect, useState } from "react";
import axios from "axios";

import { Avatar } from "@mui/material";

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
  const titles = [
    { id: "name", label: "NOMBRE", minWidth: 170, align: "left" },
    { id: "specialties", label: "ESPECIALIDADES", minWidth: 100, align: "center" },
    { id: "email", label: "EMAIL", minWidth: 100, align: "center" },
    { id: "phone", label: "TELÉFONO", minWidth: 100, align: "center" },
    { id: "actions", label: "", minWidth: 30, align: "center" },
  ];

  const [nutritionists, setNutritionists] = useState<any>();

  useEffect(() => {
    const getData = async() => {
      await axios.get("https://api.nutriguide.es/users/role/Nutricionista")
        .then((res) => {
          const rows = [];
          for (let item of res.data) {
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
              item._id
            ]);
          }
          setNutritionists(rows);
        });
    };

    getData();
  }, []);
  
  if (nutritionists == null) return <div>No hay nutricionistas</div>;

  return (
    <div style={BoxStyle}>
      <div style={BorderStyle}>
        <StickyHeadTable name="Lista de Nutricionistas" titles={titles} data={nutritionists} />
      </div>
    </div>
  );
};
