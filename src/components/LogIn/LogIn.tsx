import {useState} from "react";
import Button from "@mui/material/Button";
import InputForm from "../InputForm/InputForm";
import {FC} from "react";
import "./LogIn.css";

const LogIn: FC = () => {
  const [data, setData] = useState({
    name: "",
    password: ""
  });

  const handleSubmitChange = (event: any) => {
     console.log(data);
     setData({
     ...data,
      [event.target.name] : event.target.value,
      
    });
  };

  return (
    <form className="Login">
      <h2>Bienvenido a Nutriguide</h2>
      <p>¿Eres nuevo?<a href="a">Crear una cuenta</a></p>
      <InputForm name="name" placeholder="Usuario" type="username" />
      <InputForm name="password" placeholder="Contraseña" type="password" />
      <Button onClick={handleSubmitChange} variant="contained" >Iniciar Sesión</Button>
      {/* onClick={handleSubmitChange} */}
    </form>
  );
};

export default LogIn;
