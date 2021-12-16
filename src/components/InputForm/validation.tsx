import { ChangeEvent } from "react";

const hasCapitalLetters = (event: ChangeEvent<HTMLInputElement>) => {
  const upperCaseLetters = /[A-Z]/g;
  return event.target.value.match(upperCaseLetters);
};
const isaPhone = (event: ChangeEvent<HTMLInputElement>) => {
  const phoneNumber = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
  return event.target.value.match(phoneNumber);

};
const hasNumbers = (event: ChangeEvent<HTMLInputElement>) => {
  const numbers = /[0-9]/g;
  return event.target.value.match(numbers);
};

const hasPasswordLength = (event: ChangeEvent<HTMLInputElement>) => {
  return event.target.value.length >= 8;
};

const hasUserLength = (event: ChangeEvent<HTMLInputElement>) => {
  return event.target.value.length >= 3;
};

const isValidEmail = (event: ChangeEvent<HTMLInputElement>) => {
  const email = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return event.target.value.match(email);
};

export const isValidated = (event: ChangeEvent<HTMLInputElement>, type: string) => {
  if(type === "password") {
    if(!hasPasswordLength(event))
      return [false, "La contraseña debe tener al menos 8 caracteres"];
    
    if(!hasNumbers(event))
      return [false, "La contraseña debe tener al menos un número"];
    
    if(!hasCapitalLetters(event)) 
      return [false, "La contraseña debe tener al menos una mayúscula"];

  }

  if(type === "username") {
    if(!hasUserLength(event))
      return [false, "El nombre de usuario debe tener al menos 3 caracteres"];
  }

  if(type === "email") {
    if(!isValidEmail(event))
      return [false, "El email no es válido"];
  }

  if(type === "tel") {
    if(!isaPhone(event))
      return [false, "El número de teléfono es incorrecto"];
  }
      
  return [true, ""];
};
