import { CSSProperties, FC, useState } from "react";

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

export const RecipeListNutritionist: FC = () => {
  const titles = [
    { id: "name", label: "NOMBRE", minWidth: 170, align: "left" },
    { id: "typeDiet", label: "TIPO DE DIETA", minWidth: 100, align: "center" },
    { id: "alergens", label: "ALÉRGENOS", minWidth: 100, align: "center" },
    { id: "actions", label: "", minWidth: 30, align: "center" },
  ];

  const userInfo = useAppSelector((state) => state.user.userInfo);
  const [recipes, setRecipes] = useState<any>();

  if (userInfo.recipes == null) return <div>No hay recetas</div>;
  
  const rows = [];
  for (let item of userInfo.recipes) {
    const alergens = item.specialties != null ? item.alergens.join(", ") : item.alergens;
    rows.push([
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar style={{ marginRight: "10px" }} variant="rounded" src={item.photo}>{item.name.charAt(0).toUpperCase()}</Avatar>
        {item.name}
      </div>,
      <div style={{ background: "#1de9b6", borderRadius: "5px", padding: "5px 0 5px 0" }}>
        {item.typeDiet}
      </div>,
      alergens,
      item._id
    ]);
  }
  setRecipes(rows);

  return (
    <div style={BoxStyle}>
      <div style={BorderStyle}>
        <StickyHeadTable name="Lista de Recetas" titles={titles} data={recipes} />
      </div>
    </div>
  );
};
