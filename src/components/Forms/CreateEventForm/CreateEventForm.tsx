import { useState, ChangeEvent, FC, CSSProperties } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import { Button, FormControl, Alert, Grid } from "@mui/material";
import { InputForm } from "../InputForm/InputForm";

interface Props {
  participants: any;
}

const FormBodyStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "60%",
};

export const CreateEventForm: FC<Props> = ({participants}) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState<string>("");
  const [isWrongRequest, setIsWrongRequest] = useState<boolean>();
  const [data, setData] = useState({
    title: "",
    description: "",
    owner: participants[0]._id,
    status: "started",
    participants: participants,
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
    if(status === 200 || status === 201 ) {
      setIsWrongRequest(false);
      setMessage("¡Formulario enviado con éxito!");
    } else {
      console.log(status);
      setIsWrongRequest(true);
      setMessage("Datos incorrectos");
    }
  };
  
  const submitData = (event: any ) => {
    event.preventDefault();
    axios.post("https://api.nutriguide.es/calendar/event", data)
    .then(res => {
      handleIsWrongRequestChange(res.status);
      navigate("/list", { replace: true });
    }).catch( (error) => {
      handleIsWrongRequestChange(error.response.status);
    });
  };

  return (
    <Grid sx={{width: "100%", height: "100%", display: "flex", alignItems: "center"}}>
      <Grid sx={{width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", color: "black"}}>
        <form onSubmit={submitData} style={FormBodyStyle}>
          { isWrongRequest ? <Alert severity="error">{message}</Alert> : null }
          <FormControl>
            <InputForm onChange={handleDataChange} name="title" placeholder="Título del evento" title="Título" type="text" validation={true} isRequired={true}/>
            <InputForm onChange={handleDataChange} name="description" placeholder="Descripción del evento" title="Descripción" type="text" validation={true} isRequired={true} />
            <InputForm onChange={handleDataChange} name="startingDate" placeholder="Fecha y hora de inicio" title="Fecha de Inicio" type="datetime-local" validation={true} isRequired={true} />
            <InputForm onChange={handleDataChange} name="endingDate" placeholder="Fecha y hora de fin" title="Fecha de Fin" type="datetime-local" validation={true} isRequired={true} />
            <Button onClick={submitData} variant="contained" type="submit" sx={{marginTop: "1em"}}>Guardar Cambios</Button>
          </FormControl>
        </form>
      </Grid>
    </Grid>
  );
};


