import { FC, useState, ChangeEvent, CSSProperties } from "react";
import { Input, FormControl,InputLabel } from "@mui/material";
import { isValidated } from "./validation";
import { styled } from "@mui/material/styles";
import { useAppSelector } from "../../app/hooks";

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

const FormControlStyled = styled(FormControl)(() => ({
  width: "100%",
}));

export const InputForm: FC<Props> = ({ name, type, placeholder, title="", onChange, validation=false, isRequired=false }) => {  
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
    <FormControlStyled variant="filled" error={message !== ""} margin="normal">
      <InputLabel shrink>{title}{ isRequired ? "*" : null }</InputLabel>
      <Input onChange={handleMessageChange} name={name} placeholder={placeholder} type={type} required={isRequired}/>
      { isActive ? <p style={pStyle}>{message}</p> : null }
    </FormControlStyled>
  );
};
