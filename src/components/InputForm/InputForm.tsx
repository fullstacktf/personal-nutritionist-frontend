import {FC} from "react";
import { Input } from "@mui/material";
import {useState} from "react";

interface Props {
  type: string;
  placeholder: string;
  name:string;
}

const isPasswordValid = (event: any, type:string) => {
  return event.target.value.length < 8 && type === "password";
};

const isUserValid = (event:any, type:string) => {
  return event.target.value.length < 5 && type === "username";
};

const InputForm: FC<Props> = ({type, placeholder, name}) => {
  const [message, setMessage] = useState("");
  const [value, setValue] = useState("");

  const handleMessageChange = (event: any) => {
    setValue(event.target.value);
    console.log(value);

    if( isPasswordValid(event, type) )
      setMessage("La contraseña debe tener al menos 8 caracteres");
    else 
      setMessage("");

    if(isUserValid(event, type) )
      setMessage("El nombre de usuario es demasiado corto");
  };

  return (
    <div>
      <h1>{type}</h1>
      <Input onChange={handleMessageChange} name={name} placeholder={placeholder} type={type} value={value} />
      <p>{message}</p>
    </div>
  );
};

export default InputForm;
