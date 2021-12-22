import { useState, FC, CSSProperties } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import { Button, FormControl, Grid, Select, MenuItem, InputLabel, SelectChangeEvent } from "@mui/material";

import { useAppSelector } from "../../../app/hooks";

interface Props {
  participant: any;
}

const FormBodyStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "60%",
};

export const CreateRecipeParticipantForm: FC<Props> = ({ participant }) => {
  const userToken = useAppSelector((state) => state.user.token);
  const userInfo = useAppSelector((state) => state.user.userInfo);
  const navigate = useNavigate();
  const [data, setData] = useState({
    date: "",
    typeMeal: "",
    selectedRecipe: userInfo.recipes,
  });

  const handleTypeMeal = (event: SelectChangeEvent<string>) => {
    const newTypeMeal = event.target.value;
    setData({
      ...data,
      typeMeal: newTypeMeal,
    });
  };

  const handleDate = (event: SelectChangeEvent<string>) => {
    const newDate = event.target.value;
    setData({
      ...data,
      date: newDate,
    });
  };

  const handleRecipe = (event: SelectChangeEvent<any>) => {
    const newRecipe = event.target.value;
    setData({
      ...data,
      selectedRecipe: newRecipe,
    });
  };
 
  const submitData = async(event: any) => {
    event.preventDefault();
    const config = {
      headers: { Authorization: `Bearer ${userToken}` }
    };

    const newRecipe = { ...data.selectedRecipe };
    newRecipe.date = data.date;
    newRecipe.typeMeal = data.typeMeal;

    const newParticipant = { ...participant };
    newParticipant.recipes = !newParticipant.recipes ? [newRecipe] : newParticipant.recipes.concat(newRecipe);

    axios.put(`https://api.nutriguide.es/users/${newParticipant._id}`, newParticipant, config);

    navigate("/recipes", { replace: true });
  };

  return (
    <Grid sx={{width: "100%", height: "100%", display: "flex", alignItems: "center"}}>
      <Grid sx={{width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", color: "black"}}>
        <form onSubmit={submitData} style={FormBodyStyle}>
          <FormControl>
            <FormControl sx={{marginBottom:4}}>
                <InputLabel>Día de la semana</InputLabel>
                <Select
                  value={data.date}
                  onChange={handleDate}
                  >
                  <MenuItem value={"Lunes"}>Lunes</MenuItem>
                  <MenuItem value={"Martes"}>Martes</MenuItem>
                  <MenuItem value={"Miércoles"}>Miércoles</MenuItem>
                  <MenuItem value={"Jueves"}>Jueves</MenuItem>
                  <MenuItem value={"Viernes"}>Viernes</MenuItem>
                  <MenuItem value={"Sábado"}>Sábado</MenuItem>
                  <MenuItem value={"Domingo"}>Domingo</MenuItem>
                </Select>
              </FormControl>

            <FormControl sx={{marginBottom:4}}>
              <InputLabel>Tipo de receta</InputLabel>
              <Select
                value={data.typeMeal}
                onChange={handleTypeMeal}
                >
                <MenuItem value={"Desayuno"}>Desayuno</MenuItem>
                <MenuItem value={"Almuerzo"}>Almuerzo</MenuItem>
                <MenuItem value={"Cena"}>Cena</MenuItem>
                <MenuItem value={"Snack"}>Snack</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{marginBottom:4}}>
              <InputLabel>Escoge la receta</InputLabel>
              <Select
                value={data.selectedRecipe}
                onChange={handleRecipe}
              >
                { 
                  userInfo.recipes.map((recipe: any) => {
                    return <MenuItem value={recipe}>{recipe.name}</MenuItem>;                
                  })
                }
              </Select>
            </FormControl>
            <Button onClick={submitData} variant="contained" type="submit" sx={{marginTop: "1em"}}>Guardar Cambios</Button>
          </FormControl>
        </form>
      </Grid>
    </Grid>
  );
};
