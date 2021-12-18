import { useState, ChangeEvent, FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";

import { Button, FormControl, Typography, Alert } from "@mui/material";

import axios from "axios";

import { login } from "../../features/user/userSlice";
import { InputForm } from "../InputForm/InputForm";

export const LogIn: FC = () => {
  const [message, setMessage] = useState<string>("");
  const [isWrongRequest, setIsWrongRequest] = useState<boolean>();
  const navigate = useNavigate();
  
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleIsWrongRequestChange = (status: number) => {
    if(status !== 200 ) {
      setIsWrongRequest(true);
      setMessage("El usuario no existe");
    } else {
      setIsWrongRequest(false);
      setMessage("¡Has iniciado sesión con éxito!");
    }
  };

  const handleDataChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const dispatch = useAppDispatch();

  const submitData = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios.post("https://api.nutriguide.es/auth/login", data)
    .then(res => {
      handleIsWrongRequestChange(res.status);
      // localStorage.setItem("token", res.data);
      console.log(res.data.token);
      dispatch(login(res.data));
      navigate("/home", { replace: true });   

    }).catch( (error) => {
      handleIsWrongRequestChange(error.response.status);
    });
  };

  return (
    <form onSubmit={submitData}>
      { isWrongRequest ? <Alert severity="error">{message}</Alert> : null }
      <FormControl>
        <Typography variant="h4">Bienvenido a Nutriguide</Typography>
        <Typography variant="subtitle1">¿Eres nuevo?<a href="a">Crear una cuenta</a></Typography>
        <InputForm onChange={handleDataChange} title="E-mail" name="email" placeholder="Escribe tu email" type="email" validation={true} />
        <InputForm onChange={handleDataChange} title="Contraseña" name="password" placeholder="Escribe tu contraseña" type="password" validation={false} />
        <Button sx={{marginTop: 4}} type="submit" variant="contained" >Iniciar Sesión</Button>
      </FormControl>
    </form>
  );
};
