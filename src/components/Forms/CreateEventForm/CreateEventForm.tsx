import { useState, ChangeEvent, FC, CSSProperties } from "react";

import axios from "axios";

import { Button, FormControl, FormGroup, Select, InputLabel, SelectChangeEvent, MenuItem, Alert, styled, Grid, Typography } from "@mui/material";
import { InputForm } from "../../InputForm/InputForm";
import { Tags } from "../../Autocomplete/Autocomplete";

const FormBodyStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "60%",
};

export const CreateEventForm: FC = () => {
  const [message, setMessage] = useState<string>("");
  const [isWrongRequest, setIsWrongRequest] = useState<boolean>();
  const [data, setData] = useState({
    title: "",
    description: "",
    owner: "",
    status: "",
    participants: [],
    startingDate: "",
    endingDate: ""
  });
    // owner** Eliminar status? pending?

  const handleDataChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleIsWrongRequestChange = (status: number) => {
    if(status !== 200 ) {
      setIsWrongRequest(true);
      setMessage("Datos incorrectos");
    } else {
      setIsWrongRequest(false);
      setMessage("¡Formulario enviado con éxito!");
    }
  };

  // const handleIntoleranceChange = (event: ChangeEvent<HTMLInputElement>, value: any) => {
  //   const newIntolerances = value;
  //   setData({
  //     ...data,
  //     intolerances: newIntolerances,
  //   });
  // };
  
  const submitData = (event: any ) => {
    event.preventDefault();
    console.log(data);
    axios.post("https://api.nutriguide.es/calendar/event", data)
    .then(res => {
      handleIsWrongRequestChange(res.status);
      // navigate("/", { replace: true });   
    }).catch( (error) => {
      console.log("Error", error.response);
      handleIsWrongRequestChange(error.response.status);
    });
  };

  return (
    <Grid sx={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Grid sx={{width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", color: "black"}}>
        <form onSubmit={submitData} style={FormBodyStyle}>
          { isWrongRequest ? <Alert severity="error">{message}</Alert> : null }
          <FormControl>
            <InputForm onChange={handleDataChange} name="title" placeholder="Título del evento" title="Título" type="text" validation={true}/>
            <InputForm onChange={handleDataChange} name="description" placeholder="Descripción del evento" title="Descripción" type="text" validation={true} />
            <InputForm onChange={handleDataChange} name="startingDate" placeholder="Fecha y hora de inicio" title="Fecha de Inicio" type="datetime-local" validation={true} />
            <InputForm onChange={handleDataChange} name="endingDate" placeholder="Fecha y hora de fin" title="Fecha de Fin" type="datetime-local" validation={true} />

            {/* <FormControl>
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
            </FormControl> */}
            <Button onClick={submitData} variant="contained" type="submit">Guardar Cambios</Button>
            <Button variant="contained">Cancelar</Button>
          </FormControl>
        </form>
      </Grid>
    </Grid>

  );
};


