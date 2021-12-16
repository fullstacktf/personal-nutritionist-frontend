import axios from "axios";
import { FC, useEffect, useState } from "react";

import { StickyHeadTable } from "../Table/Table";

export const NutritionistList: FC = () => {
  const titles = [
    { id: "name", label: "NOMBRE", minWidth: 170 },
    { id: "specialties", label: "ESPECIALIDADES", minWidth: 100 },
    { id: "contact", label: "CONTACTO", minWidth: 100 },
    { id: "calendar", label: "", minWidth: 100 },
  ];

  const [nutritionists, setNutritionists] = useState();

  useEffect(() => {
    axios.get("https://api.nutriguide.es/users/role/Nutricionista")
      .then((res) => { setNutritionists(res.data); });
  }, []);
  
  if (!nutritionists) return <div>No nutritionists</div>;

  return (
    <div>
      <StickyHeadTable titles={titles} data={nutritionists} />
    </div>
  );
};
