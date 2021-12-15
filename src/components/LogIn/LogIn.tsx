import { useState, ChangeEvent } from "react";
import { Button, FormControl } from "@mui/material";
import { InputForm } from "../InputForm/InputForm";
import { FC } from "react";
import axios from "axios";

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
      <h2>Bienvenido a Nutriguide</h2>
      <p>¿Eres nuevo?<a href="a">Crear una cuenta</a></p>
      <InputForm onChange={handleDataChange} name="email" placeholder="Escribe tu email" type="email" validation={true} />
      <InputForm onChange={handleDataChange} name="password" placeholder="Escribe tu contraseña" type="password" validation={true} />
      <Button onClick={submitData} variant="contained" >Iniciar Sesión</Button>
    </FormControl>
  );
};
