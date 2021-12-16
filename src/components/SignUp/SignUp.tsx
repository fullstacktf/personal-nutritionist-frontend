import { useState, ChangeEvent, FC, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { Button, Radio, RadioGroup,FormControlLabel, FormControl, FormLabel, Typography } from "@mui/material";

import { InputForm } from "../InputForm/InputForm";

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
      <Typography variant="h4">Bienvenido a Nutriguide</Typography>
      <Typography variant="subtitle1">¿Ya tienes una cuenta? <Link to="/login">LogIn</Link> </Typography>
      <InputForm onChange={handleDataChange} name="Email" placeholder="Usuario@correo.com" type="email" validation={true} />
      <InputForm onChange={handleDataChange} name="Usuario" placeholder="Usuario" type="username" validation={true} />
      <InputForm onChange={handleDataChange} name="Contraseña" placeholder="Contraseña" type="password" validation={true} />
      <FormLabel component="legend">Eres nutricionista?</FormLabel>
      <RadioGroup onChange={handleDataChange} row aria-label="gender" name="isNutritionist" sx={{ display:"flex", justifyContent:"center", marginBottom: 4 }}>
        <FormControlLabel value="no" control={<Radio />} label="No" />
        <FormControlLabel value="si" control={<Radio />} label="Sí" />
      </RadioGroup>
      <Button onClick={submitData} variant="contained">Crea tu nueva cuenta</Button>
    </FormControl>
  );
};
