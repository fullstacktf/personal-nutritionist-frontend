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

export const NutritionistList: FC = () => {
  const titles = [
    { id: "name", label: "NOMBRE", minWidth: 170, align: "left" },
    { id: "specialties", label: "ESPECIALIDADES", minWidth: 100, align: "center" },
    { id: "email", label: "EMAIL", minWidth: 100, align: "center" },
    { id: "phone", label: "TELÉFONO", minWidth: 100, align: "center" },
    { id: "actions", label: "", minWidth: 30, align: "center" },
  ];

  const [nutritionists, setNutritionists] = useState();

  useEffect(() => {
    axios.get("https://api.nutriguide.es/users/role/Nutricionista")
      .then((res) => { setNutritionists(res.data); });
  }, []);
  
  if (!nutritionists) return <div>No hay nutricionistas</div>;

  return (
    <div style={BoxStyle}>
      <div style={BorderStyle}>
        <StickyHeadTable name="Lista de Nutricionistas" titles={titles} data={nutritionists} />
      </div>
    </div>
  );
};
