import { useState, ChangeEvent, FC, CSSProperties } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import { Button, FormControl, Alert, Grid, Box, Select, MenuItem, InputLabel, OutlinedInput, SelectChangeEvent } from "@mui/material";
import { Save, Restaurant, Cancel, MonitorWeight } from "@mui/icons-material";
import { InputForm } from "../InputForm/InputForm";
import { Tags } from "../../../components/Autocomplete/Autocomplete";


import { updateUser } from "../../../features/user/userSlice";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";

const FormBodyStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "60%",
};

export const CreateRecipeForm: FC = () => {
  const userToken = useAppSelector((state) => state.user.token);
  const userInfo = useAppSelector((state) => state.user.userInfo);
  const navigate = useNavigate();
  const [message, setMessage] = useState<string>("");
  const [isWrongRequest, setIsWrongRequest] = useState<boolean>();
  const [data, setData] = useState({
    owner: userInfo._id,
    name: "",
    date: "",
    typeMeal: "",
    typeDiet: "Vegetariana",
    alergens: ["", "", "", ""],
    ingredients: [],
    preparation: "",
    cookingTime: ""
  });

  const alergens = [ "Leche", "Gluten", "Pescado", "Huevos" ];

  const handleDataChange = (event: any) => {
    setData({
      ...data,
      [event.target.name]: event.target.name === "ingredients" ? event.target.value.split(", ") : event.target.value,
    });
  };

  const handleTypeDietChange = (event: SelectChangeEvent<string>) => {
    const newTypeDiet = event.target.value;
    setData({
      ...data,
      typeDiet: newTypeDiet,
    });
  };

  const handleAlergens = (event: ChangeEvent<HTMLInputElement>, value: any) => {
    const newAlergens = value;
    setData({
      ...data,
      alergens: newAlergens,
    });
  };

  const handleIsWrongRequestChange = (status: number) => {
    if(status === 200 || status === 201 ) {
      setIsWrongRequest(false);
    } else {
      setIsWrongRequest(true);
      setMessage("Datos incorrectos");
    }
  };

  const handleCreateRecipe = async(config: object) => {
    let newRecipe;
    await axios.post("https://api.nutriguide.es/weekmeal/recipe", data, config)
    .then((res) => {
      handleIsWrongRequestChange(res.status);
      newRecipe = res.data;
    }).catch((err) => {
      handleIsWrongRequestChange(err.response.status);
    });
    return newRecipe;
  };

  const handleNewRecipeUser = async(config: object, user: any) => {
    axios.put(`https://api.nutriguide.es/users/${user._id}`, user, config);
  };
  
  const dispatch = useAppDispatch();

  const submitData = async(event: any) => {
    event.preventDefault();
    const config = {
      headers: { Authorization: `Bearer ${userToken}` }
    };

    const newRecipe = await handleCreateRecipe(config);

    const newOwner = { ...userInfo };
    newOwner.recipes = !newOwner.recipes ? [newRecipe] : newOwner.recipes.concat(newRecipe);
    await handleNewRecipeUser(config, newOwner);

    dispatch(updateUser(newOwner));
    navigate("/recipes", { replace: true });
  };

  return (
    <Grid sx={{width: "100%", height: "100%", display: "flex", alignItems: "center"}}>
      <Grid sx={{width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", color: "black"}}>
        <form onSubmit={submitData} style={FormBodyStyle}>
          { isWrongRequest ? <Alert severity="error">{message}</Alert> : null }
          <FormControl>
            <InputForm onChange={handleDataChange} name="name" placeholder="" title="Título" type="text" validation={true} isRequired={true}/>
            <FormControl sx={{ marginTop: 4, marginBottom: 4 }}>
              <InputLabel shrink>Tipo de Receta</InputLabel>
              <Select
                value={data.typeDiet}
                label="Selecciona tu tipo de dieta"
                onChange={handleTypeDietChange}
                >
                <MenuItem value={"Vegetariana"}>Vegetariana</MenuItem>
                <MenuItem value={"Omnivora"}>Omnívora</MenuItem>
                <MenuItem value={"Vegana"}>Vegana</MenuItem>
                <MenuItem value={"Flexitariana"}>Flexitariana</MenuItem>
              </Select>
            </FormControl>

            <Tags onChange={handleAlergens} name="alergens" label="Alérgenos" placeholder="Selecciona los alérgenos de la receta" data={alergens}></Tags>
            <InputForm onChange={handleDataChange} name="ingredients" placeholder="Ingredientes necesarios" title="Ingredientes" type="text" validation={true} isRequired={true} />
            <InputForm onChange={handleDataChange} name="preparation" placeholder="Preparación" title="Preparación" type="text" validation={true} isRequired={true} />
            <InputForm onChange={handleDataChange} name="cookingTime" placeholder="Tiempo de preparación" title="Tiempo de Preparación" type="text" validation={true} isRequired={true} />
            <Button onClick={submitData} variant="contained" type="submit" sx={{marginTop: "1em"}}>Guardar Cambios</Button>
          </FormControl>
        </form>
      </Grid>
    </Grid>
  );
};
