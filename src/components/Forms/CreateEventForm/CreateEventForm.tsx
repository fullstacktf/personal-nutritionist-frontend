import { useState, ChangeEvent, FC, CSSProperties } from "react";

import axios from "axios";

import { Button, FormControl, Alert, Grid } from "@mui/material";
import { InputForm } from "../../InputForm/InputForm";

interface Props {
  owner: string;
  participant: string;
}

const FormBodyStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "60%",
};

export const CreateEventForm: FC<Props> = ({owner, participant}) => {
  const [message, setMessage] = useState<string>("");
  const [isWrongRequest, setIsWrongRequest] = useState<boolean>();
  const [data, setData] = useState({
    title: "",
    description: "",
    owner: owner,
    status: "started",
    participants: [owner, participant],
    startingDate: "",
    endingDate: ""
  });

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
  
  const submitData = (event: any ) => {
    event.preventDefault();
    console.log(data);
    axios.post("https://api.nutriguide.es/calendar/event", data)
    .then(res => {
      handleIsWrongRequestChange(res.status);
      // navigate("/calendar", { replace: true });   
    }).catch( (error) => {
      console.log("Error", error.response);
      handleIsWrongRequestChange(error.response.status);
    });
  };

  return (
    <Grid sx={{width: "100%", height: "100%", display: "flex", alignItems: "center"}}>
      <Grid sx={{width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", color: "black"}}>
        <form onSubmit={submitData} style={FormBodyStyle}>
          { isWrongRequest ? <Alert severity="error">{message}</Alert> : null }
          <FormControl>
            <InputForm onChange={handleDataChange} name="title" placeholder="Título del evento" title="Título" type="text" validation={true}/>
            <InputForm onChange={handleDataChange} name="description" placeholder="Descripción del evento" title="Descripción" type="text" validation={true} />
            <InputForm onChange={handleDataChange} name="startingDate" placeholder="Fecha y hora de inicio" title="Fecha de Inicio" type="datetime-local" validation={true} />
            <InputForm onChange={handleDataChange} name="endingDate" placeholder="Fecha y hora de fin" title="Fecha de Fin" type="datetime-local" validation={true} />
            <Button onClick={submitData} variant="contained" type="submit" sx={{marginTop: "1em"}}>Guardar Cambios</Button>
          </FormControl>
        </form>
      </Grid>
    </Grid>

  );
};


