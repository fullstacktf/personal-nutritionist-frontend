import { CSSProperties, FC } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { Avatar, IconButton, Button } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { updateUser } from "../../features/user/userSlice";
import { StickyHeadTable } from "../Table/Table";

const BoxStyle: CSSProperties = {
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
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
  const userInfo = useAppSelector((state) => state.user.userInfo);
  const userToken = useAppSelector((state) => state.user.token);
  const recipes = [];

  const titles = [
    { id: "name", label: "NOMBRE", minWidth: 170, align: "left" },
    { id: "typeDiet", label: "TIPO DE DIETA", minWidth: 100, align: "center" },
    { id: "alergens", label: "ALÉRGENOS", minWidth: 100, align: "center" },
    { id: "actions", label: "", minWidth: 30, align: "center" },
  ];

  const dispatch = useAppDispatch();

  const handleDeleteRecipe = async(id: any) => {
    const config = {
      headers: { Authorization: `Bearer ${userToken}` }
    };

    await axios.delete(`https://api.nutriguide.es/weekmeal/recipe/${id}`, config)
      .then(res => { console.log(res.data); });
       
    const index = userInfo.recipes.findIndex((recipe: any) => recipe._id === id);
    const newRecipes = [ ...userInfo.recipes ];
    newRecipes.splice(index, 1);
    const newUser = { ...userInfo };
    newUser.recipes = newRecipes;
    dispatch(updateUser(newUser));
  };

  if (!userInfo.recipes) {
    return (
      <div style={BoxStyle}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "black" }}>          
          <Button 
            variant="contained" 
            color="primary" 
            component={Link}
            to={"/recipes/create"}
            sx={{ marginRight:"1em" }}
          >
            Crea tu primera receta
          </Button>
        </div>
      </div>
    );
  }
  
  for (let item of userInfo.recipes) {
    const alergens = item.specialties != null ? item.alergens.join(", ") : item.alergens;
    recipes.push([
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar style={{ marginRight: "10px" }} variant="rounded">{item.name.charAt(0).toUpperCase()}</Avatar>
        {item.name}
      </div>,
      <div style={{ background: "#1de9b6", borderRadius: "5px", padding: "5px 0 5px 0" }}>
        {item.typeDiet}
      </div>,
      alergens,
      <div>
        <IconButton aria-label="profile" color="secondary" onClick={() => handleDeleteRecipe(item._id)}>
          <DeleteOutline />
        </IconButton>
      </div>
    ]);
  }

  return (
    <div style={BoxStyle}>
      <Button 
        variant="contained" 
        color="primary" 
        component={Link}
        to={"/recipes/create"}
        sx={{ marginRight:"1em" }}
      >
        Crea una nueva receta
      </Button>

      <div style={BorderStyle}>
        <StickyHeadTable name="Lista de Recetas" titles={titles} data={recipes} />
      </div>
    </div>
  );
};
