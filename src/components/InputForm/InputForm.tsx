import { FC, useState, ChangeEvent, CSSProperties } from "react";
import { Input, FormControl,InputLabel } from "@mui/material";
import { isValidated } from "./validation";

interface Props {
  name: string;
  type: string;
  placeholder: string;
  title?: string;
  onChange: any;
  validation?: boolean;
  isRequired?: boolean;
}

const pStyle: CSSProperties = {
  color: "red"
};

export const InputForm: FC<Props> = ({ name, type, placeholder, title="lexa", onChange, validation=false, isRequired=false }) => {  
  const [isActive, setActive] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const isEmpty = (event: ChangeEvent<HTMLInputElement>) => {
    const newData = event.target.value;
    if(newData === "")
      setActive(false);
    else
      setActive(true);
  };

  const isValid = (event: ChangeEvent<HTMLInputElement>) => {
    const validateInfo = isValidated(event, type);
    setMessage(`${validateInfo[1]}`);
    return validateInfo[0];
  };

  const handleMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
    isEmpty(event);
    if(validation) {
      isValid(event);
    }
    onChange(event);
  }; 

  return (
    <FormControl variant="filled" error={message !== ""} margin="normal">
      <InputLabel>{title}{ isRequired ? "*" : null }</InputLabel>
      <Input onChange={handleMessageChange} name={name} placeholder={placeholder} type={type} required={isRequired}/>
      { isActive ? <p style={pStyle}>{message}</p> : null }
    </FormControl>
  );
};
