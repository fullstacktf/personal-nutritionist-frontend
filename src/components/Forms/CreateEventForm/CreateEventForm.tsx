import { useState, ChangeEvent, FC, CSSProperties } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import { Button, FormControl, Alert, Grid } from "@mui/material";
import { InputForm } from "../InputForm/InputForm";

import { updateUser } from "../../../features/user/userSlice";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";

interface Props {
  basicUsers: any;
  owner: any;
  participant: any;
}

const FormBodyStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "60%",
};

export const CreateEventForm: FC<Props> = ({ basicUsers, owner, participant }) => {
  const userToken = useAppSelector((state) => state.user.token);
  const navigate = useNavigate();
  const [message, setMessage] = useState<string>("");
  const [isWrongRequest, setIsWrongRequest] = useState<boolean>();
  const [data, setData] = useState({
    title: "",
    description: "",
    owner: owner._id,
    status: "started",
    participants: basicUsers,
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
    } else {
      setIsWrongRequest(true);
      setMessage("Datos incorrectos");
    }
  };

  const handleCreateEvent = async(config: object) => {
    let newEvent;
    await axios.post("https://api.nutriguide.es/calendar/event", data, config)
    .then((res) => {
      handleIsWrongRequestChange(res.status);
      newEvent = res.data;
    }).catch((err) => {
      handleIsWrongRequestChange(err.response.status);
    });
    return newEvent;
  };

  const handleNewEventUser = async(config: object, user: any) => {
    axios.put(`https://api.nutriguide.es/users/${user._id}`, user, config);
  };
  
  const dispatch = useAppDispatch();

  const submitData = async(event: any) => {
    event.preventDefault();
    const config = {
      headers: { Authorization: `Bearer ${userToken}` }
    };
    const newEvent = await handleCreateEvent(config);

    const newOwner = { ...owner };
    newOwner.events = !newOwner.events ? [newEvent] : newOwner.events.concat(newEvent);
    await handleNewEventUser(config, newOwner);

    const newParticipant = { ...participant };
    newParticipant.events = !newParticipant.events ? [newEvent] : newParticipant.events.concat(newEvent);
    await handleNewEventUser(config, newParticipant);

    dispatch(updateUser(newOwner));
    newOwner.role === "Nutricionista" ? navigate("/clients", { replace: true }) : navigate("/nutritionists", { replace: true });
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
