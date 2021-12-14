import { useState, ChangeEvent, FC } from "react";
import { Button, FormControl, Avatar, colors } from "@mui/material";
import { InputForm } from "../InputForm/InputForm";

export const PersonalForm: FC = () => {
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
        <Avatar sx={{ bgcolor: colors.deepOrange[500] }}>AV</Avatar>
        <Button variant="contained">Cambiar foto</Button>
        <InputForm onChange={handleDataChange} name="username" placeholder="Nombre de usuario" type="username" validation={true} />
        <InputForm onChange={handleDataChange} name="phone" placeholder="+641585416" type="tel" validation={true} />
        <InputForm onChange={handleDataChange} name="Descripcion" placeholder="Añade una descripción" type="text" />
        <Button variant="contained" type="submit">Guardar Cambios</Button>
        <Button onClick={submitData} variant="contained">Cancelar</Button>
      </FormControl>
    </form>
  );
};
