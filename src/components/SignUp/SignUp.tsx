import { useState, ChangeEvent, FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { Button, Radio, RadioGroup,FormControlLabel, FormControl, FormLabel, Typography, Alert } from "@mui/material";
import ALink from "@mui/material/Link";

import { InputForm } from "../InputForm/InputForm";

export const SignUp: FC = () => {
  const [message, setMessage] = useState<string>("");
  const [isWrongRequest, setIsWrongRequest] = useState<boolean>(false);
  const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    name: "",
    password: "",
    email: "",
    role: "Cliente"
  });

  const handleisWrongRequest = (error: number) => {
    if (error !== 200) {
      setMessage("El usuario ya existe");
      setIsWrongRequest(true);
    }
    else {
      setMessage("El usuario se ha creado correctamente");
      setIsWrongRequest(false);
    }
  };
  
  const handleDataChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  
  const submitData = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios.post("https://api.nutriguide.es/auth/signup", data)
    .then(res => {
      localStorage.setItem("token", res.data);
      navigate("/home", { replace: true });
    }).catch(function(error) {
        handleisWrongRequest(error.response.status);
    });
  };

  return (
    <form onSubmit={submitData}>
      <FormControl sx={{ marginTop: {xs: "-250px", md: "0px", lg: "0px", xl: "0px"} }}>
        { isWrongRequest ? <Alert severity="error">{message}</Alert> : "" } 
        <Typography variant="h4">Bienvenido a Nutriguide</Typography>
        <Typography variant="subtitle1">
          ¿Ya tienes una cuenta? <ALink underline="hover" component={Link} to="/login" color="black"><b>Inicia sesión</b></ALink>
        </Typography>
        <InputForm onChange={handleDataChange} name="email" title="E-mail" placeholder="Alex@correo.com" type="email" validation={true} isRequired={true} />
        <InputForm onChange={handleDataChange} name="password" title="Contraseña" placeholder="Contraseña" type="password" validation={true} isRequired={true} />
        <InputForm onChange={handleDataChange} name="username" title="Nombre de usuario" placeholder="Alex93" type="username" validation={true} isRequired={true} />
        <InputForm onChange={handleDataChange} name="name" title="Nombre y apellidos" placeholder="Alex Sanz" type="text" validation={false} isRequired={true} />
        <FormLabel component="legend">Eres nutricionista?*</FormLabel>
        <RadioGroup defaultValue={"Cliente"} onChange={handleDataChange} row aria-label="gender" name="role" sx={{ display:"flex", justifyContent:"center", marginBottom: 4 }}>
          <FormControlLabel value="Cliente" control={<Radio required={true} />} label="No" />
          <FormControlLabel value="Nutricionista" control={<Radio required={true} />} label="Sí" />
        </RadioGroup>
        <Button type="submit" variant="contained">Crea tu nueva cuenta</Button>
      </FormControl>
    </form>
  );
};
