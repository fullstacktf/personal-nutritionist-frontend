import { useState, ChangeEvent } from "react";
import { Button, FormControl } from "@mui/material";
import { InputForm } from "../InputForm/InputForm";
import { FC } from "react";

export const LogIn: FC = () => {
  const [data, setData] = useState({
    name: "",
    password: ""
  });

  const handleDataChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target.name] : event.target.value,
    });
  };

  const submitData = () => {
    console.log(data);
  };

  return (
    <FormControl>
      <h2>Bienvenido a Nutriguide</h2>
      <p>¿Eres nuevo?<a href="a">Crear una cuenta</a></p>
      <InputForm onChange={handleDataChange} name="name" placeholder="Usuario" type="username" validation={true} />
      <InputForm onChange={handleDataChange} name="password" placeholder="Contraseña" type="password" validation={true} />
      <Button onClick={submitData} variant="contained" >Iniciar Sesión</Button>
    </FormControl>
  );
};
