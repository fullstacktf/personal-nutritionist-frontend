import { useState, ChangeEvent, FC } from "react";

import { Button, FormControl, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import axios from "axios";

import { InputForm } from "../InputForm/InputForm";

export const LogIn: FC = () => {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleDataChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target.name] : event.target.value,
    });
  };

  const submitData = (event: any ) => {
    event.preventDefault();

    axios.post("http://localhost:5000/auth/login", data)
    .then(res => {
      console.log(res.data);
    });
  };

  return (
    <FormControl>
      <Typography variant="h4">Bienvenido a Nutriguide</Typography>
      <Typography variant="subtitle1">¿Eres nuevo?<a href="a">Crear una cuenta</a></Typography>
      <InputForm onChange={handleDataChange} name="email" placeholder="Escribe tu email" type="email" validation={true} />
      <InputForm onChange={handleDataChange} name="password" placeholder="Escribe tu contraseña" type="password" validation={true} />
      <Button onClick={submitData} variant="contained" >Iniciar Sesión</Button>
    </FormControl>
  );
};
