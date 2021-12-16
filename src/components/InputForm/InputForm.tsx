import { FC, useState, ChangeEvent } from "react";
import { Input, FormControl,InputLabel } from "@mui/material";
import { isValidated } from "./validation";
interface Props {
  type: string;
  placeholder: string;
  name: string;
  onChange: any;
  validation?: boolean;
}

export const InputForm: FC<Props> = ({ type, placeholder, name, onChange, validation=false }) => {  
  const [message, setMessage] = useState<string>("");

  const isValid = (event: ChangeEvent<HTMLInputElement>) => {
    const validateInfo = isValidated(event, type);
    setMessage(`${validateInfo[1]}`);
    return validateInfo[0];
  };

  const handleMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if(validation) {
      isValid(event);
    }
    onChange(event);
  };

  return (
    <FormControl variant="filled" >
      <InputLabel>{name}</InputLabel>
      <Input onChange={handleMessageChange} name={name} placeholder={placeholder} type={type} />
      <p>{message}</p>
    </FormControl>
  );
};
