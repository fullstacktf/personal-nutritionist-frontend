import { useState, ChangeEvent, FC } from "react";
import { Button, FormControl, FormControlLabel, FormGroup, Checkbox, Select, InputLabel, SelectChangeEvent, MenuItem } from "@mui/material";
import { InputForm } from "../InputForm/InputForm";

export const HealthForm: FC = () => {
  const [dieta, setDiet] = useState("");
  const [data, setData] = useState({
    intolerances: [],
    height: 0,
    diet: "",
    weigth: 0
  });

  const handleDataChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target.name] : event.target.value,
    });
  };

  const handleDietChange = (event: SelectChangeEvent<string>) => {
    setDiet(event.target.value);
    console.log(`state dieta: ${dieta}`);
    setData({ 
      ...data,
      diet : dieta,
    });
  };
  
  const submitData = (event: any ) => {
    event.preventDefault();
    console.log(data);
  };

  return (
    <form onSubmit={submitData}>
      <FormControl>
        <InputForm onChange={handleDataChange} name="weight" placeholder="Escribe tu peso" type="username" validation={true} />
        <InputForm onChange={handleDataChange} name="height" placeholder="Escribe tu altura" type="number" validation={true} />
        <FormGroup>
          ¿Cuales son tus intolerancias?
          <FormControlLabel control={<Checkbox defaultChecked />} label="Huevos" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Leche" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Nueces" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Marisco" />
        </FormGroup>
        {/* <InputForm onChange={handleDataChange} name="Diet" placeholder="escribe tu email" type="number" validation={true} /> */}
        <FormControl>
        <InputLabel id="demo-simple-select-label">Dieta</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={dieta}
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
