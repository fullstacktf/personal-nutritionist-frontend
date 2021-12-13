import {FC} from "react";
import { Input } from "@mui/material";
import {useState} from "react";

interface Props {
  type: string;
  placeholder: string;
  name: string;
  onChange: any;
}

const InputForm: FC<Props> = ({type, placeholder, name, onChange}) => {
  
  const [message, setMessage] = useState("");

  const isPasswordValid = (event: any, type:string ) => {
    return event.target.value.length < 8 && type === "password";
  };
  
  const isUserValid = (event: any, type:string) => {
    return event.target.value.length < 5 && type === "username";
  };

  const handleMessageChange = (event: any) => {
    if(isPasswordValid(event, type) ){
      setMessage("La contraseña debe tener al menos 8 caracteres");
    } 
    else if(isUserValid(event, type) )
      setMessage("El nombre de usuario es demasiado corto");
    else {
      setMessage("");
      
    }
    onChange(event);
  };

  return (
    <div>
      <h2>{type}</h2>
      <Input onChange={handleMessageChange} name={name} placeholder={placeholder} type={type} />
      <p>{message}</p>
    </div>
  );
};

export default InputForm;
