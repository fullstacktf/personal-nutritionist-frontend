import { useState, ChangeEvent, FC } from "react";
import { Button, FormControl, FormGroup, Select, InputLabel, SelectChangeEvent, MenuItem } from "@mui/material";
import { InputForm } from "../InputForm/InputForm";
import { Tags } from "../Autocomplete/Autocomplete";

export const HealthForm: FC = () => {
  const [data, setData] = useState({
    intolerances: ["","","",""],
    height: 0,
    diet: "",
    weight: 0
  });
  const intolerances = [ "Huevos", "Leche", "Nueces", "Marisco" ];

  const handleDataChange = (event: ChangeEvent<HTMLInputElement>) => {

    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleIntoleranceChange = (event: ChangeEvent<HTMLInputElement>, value: any) => {
    const newIntolerances = value;
    setData({
      ...data,
      intolerances: newIntolerances,
    });
  };
  const handleDietChange = (event: SelectChangeEvent<string>) => {
    const newDiet = event.target.value;
    setData({ 
      ...data,
      diet: newDiet,
    });
  };
  const submitData = (event: any ) => {
    event.preventDefault();
    console.log(data);
  };

  return (
    <form onSubmit={submitData}>
      <h2>Información de salud</h2>
      <p>Actualiza tu información</p>
      <FormControl>
        <InputForm onChange={handleDataChange} name="weight" placeholder="Escribe tu peso" type="username" validation={true} />
        <InputForm onChange={handleDataChange} name="height" placeholder="Escribe tu altura" type="number" validation={true} />
        <FormGroup>
          <Tags onChange={handleIntoleranceChange} name="intolerances" label="Intolerancias" placeholder="Selecciona tus intolerancias" data={intolerances}></Tags>
        </FormGroup>

        <FormControl>
        <InputLabel id="demo-simple-select-label">Dieta</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={data.diet}
            label="Diet"
            onChange={handleDietChange}
          >
            <MenuItem value={"Carnivora"}>Carnivora</MenuItem>
            <MenuItem value={"Vegetariana"}>Vegetariana</MenuItem>
            <MenuItem value={"Omnivora"}>Omnivora</MenuItem>
          </Select>
        </FormControl>
        <Button onClick={submitData} variant="contained" type="submit">Guardar Cambios</Button>
        <Button variant="contained">Cancelar</Button>
      </FormControl>
    </form>
  );
};
