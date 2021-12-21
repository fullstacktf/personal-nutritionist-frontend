import { CSSProperties, FC } from "react";

import { Avatar } from "@mui/material";

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

export const RecipeListClient: FC = () => {
  const userInfo = useAppSelector((state) => state.user.userInfo);
  const rows = [];

  const titles = [
    { id: "name", label: "NOMBRE", minWidth: 170, align: "left" },
    { id: "date", label: "FECHA", minWidth: 100, align: "center" },
    { id: "typeMeal", label: "COMIDA", minWidth: 100, align: "center" },
    { id: "alergens", label: "ALÉRGENOS", minWidth: 100, align: "center" },
    { id: "actions", label: "", minWidth: 30, align: "center" },
  ];

  if (!userInfo.recipes) {
    return (
      <div style={BoxStyle}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "black" }}>
          No hay recetas
        </div>
      </div>
    );
  }
  
  for (let item of userInfo.recipes) {
    const alergens = item.specialties != null ? item.alergens.join(", ") : item.alergens;
    rows.push([
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar style={{ marginRight: "10px" }} variant="rounded">{item.name.charAt(0).toUpperCase()}</Avatar>
        {item.name}
      </div>,
      <div style={{ background: "#1de9b6", borderRadius: "5px", padding: "5px 0 5px 0" }}>
        {item.date}
      </div>,
      <div style={{ background: "#ffa726", borderRadius: "5px", padding: "5px 0 5px 0" }}>
        {item.typeMeal}
      </div>,
      alergens,
      <div></div>
    ]);
  }

  return (
    <div style={BoxStyle}>
      <div style={BorderStyle}>
        <StickyHeadTable name="Lista de Recetas" titles={titles} data={rows} />
      </div>
    </div>
  );
};
