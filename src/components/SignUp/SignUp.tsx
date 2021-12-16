import { useState, ChangeEvent, FC, useEffect } from "react";
import { Button, Radio, RadioGroup,FormControlLabel, FormControl, FormLabel } from "@mui/material";
import { InputForm } from "../InputForm/InputForm";
import axios from "axios";
export const SignUp: FC = () => {
  const [data, setData] = useState({
    usuario: "",
    contraseña: "",
    email: "",
    isNutritionist: ""
  });

  const handleDataChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target.name] : event.target.value,
    });
  };
  useEffect(() => {
    console.log("me ejecuto");
  });
  
  const submitData = (event: any) => {
    event.preventDefault();
    axios.post("http://localhost:5000/auth/signup", data)
    .then(res => {
      console.log(res.data);
    });
  };

  return (
    <FormControl>
      <h2>Bienvenido a Nutriguide</h2>
      <p>¿Ya tienes una cuenta?<a href="a">LogIn</a></p>
      <InputForm onChange={handleDataChange} name="email" placeholder="Usuario@correo.com" type="email" validation={true} />
      <InputForm onChange={handleDataChange} name="usuario" placeholder="Usuario" type="username" validation={true} />
      <InputForm onChange={handleDataChange} name="contraseña" placeholder="Contraseña" type="password" validation={true} />
      <InputForm onChange={handleDataChange} name="repite" placeholder="Contraseña" type="password" validation={true} />
      <RadioGroup onChange={handleDataChange} row aria-label="gender" name="isNutritionist">
        <FormLabel component="legend">Eres nutricionista?</FormLabel>
        <FormControlLabel value="no" control={<Radio />} label="no" />
        <FormControlLabel value="si" control={<Radio />} label="si" />
      </RadioGroup>
      <Button onClick={submitData} variant="contained" >Registrarse</Button>
      <Button variant="contained" >back</Button>
    </FormControl>
  );
};