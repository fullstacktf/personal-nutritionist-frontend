import { useState, ChangeEvent, FC } from "react";
import { Button, FormControl } from "@mui/material";
import { InputForm } from "../InputForm/InputForm";

export const AccountForm: FC = () => {
  const [data, setData] = useState({
    username: "adan",
    email: "axeltaj@gmail.com",
    phone: 35711533,
    Descripcion: "Especialista en nutrición deportiva, ¿necesitas consejo?,¡llamame! <3"
  });

  const handleDataChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target.name] : event.target.value,
    });
  };
  
  const submitData = (event: any ) => {
    event.preventDefault();
    console.log(data);
    fetch("https://api.nutriguide.es/users", { method: "PUT",
  	headers:{
      "Content-Type":"application/json"
      },
      body: JSON.stringify(data)
    });
  };

  return (
    <form onSubmit={submitData}>
      <FormControl>
        <InputForm onChange={handleDataChange} name="username" placeholder="Escribe tu nombre de usuario" type="username" validation={true} />
        <InputForm onChange={handleDataChange} name="email" placeholder="escribe tu email" type="email" validation={true} />
        <Button variant="contained" type="submit">Guardar Cambios</Button>
        <Button onClick={submitData} variant="contained">Cancelar</Button>
      </FormControl>
    </form>
  );
};
