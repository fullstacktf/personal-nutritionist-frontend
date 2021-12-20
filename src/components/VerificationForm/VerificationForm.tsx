import { useState, ChangeEvent, FC, CSSProperties  } from "react";
import { Button, FormControl, Box } from "@mui/material";

import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import SchoolIcon from "@mui/icons-material/School";
import { styled } from "@mui/material/styles";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

import { InputForm } from "../InputForm/InputForm";

const FormContainer: CSSProperties = {
  display: "flex",
  flexGrow: 1,
  justifyContent: "center",
  alignItems: "center",
};

const InputsContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "100vh",
  height: "40vh",
};

const ButtonsContainer: CSSProperties = {
  display: "flex",
  margin: "30px 10px 12px 12px",

};

const ButtonStyled = styled(Button)(() => ({
  display: "flex",
  marginRight: "15px",
  background: "#187DE4",
  color: "white",
}));

export const VerificationForm: FC = () => {
  const [data, setData] = useState({
    name: "",
    phone: 0,
    description: ""
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
    <form style={FormContainer} onSubmit={submitData}>
      <FormControl>
        <div style={InputsContainer}>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <PermIdentityIcon sx={{ borderRadius: "5px", color: "action.active", background: "#F3F6F9", mr: 1, my: 1.5 }} />
            <InputForm onChange={handleDataChange} title="DNI" name="DNI" placeholder="Intoduce tu DNI" type="text"/>
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <SchoolIcon sx={{ borderRadius: "5px", color: "action.active", background: "#F3F6F9", mr: 1, my: 1.5 }} />
            <InputForm onChange={handleDataChange} title="Estudios" name="specialties" placeholder="Escribe tus estudios" type="text" />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <PictureAsPdfIcon sx={{ borderRadius: "5px", color: "action.active", background: "#F3F6F9", mr: 1, my: 1.5 }} />
            <InputForm onChange={handleDataChange} placeholder="Agregar un archivo pdf" name="specialties" type="file" />
          </Box>

          <div style={ButtonsContainer}>
            <ButtonStyled variant="contained" type="submit">
              <SaveIcon sx={{ color: "white", mr: 1, my: 1.5 }} />
              Enviar
            </ButtonStyled >
            <Button sx={{ background: "#D7DAE7" }} onClick={submitData} variant="contained">
            <CancelIcon sx={{ color: "action.active", mr: 1, my: 1.5 }} />
              Cancelar
            </Button>
          </div>
        </div>
      </FormControl>
    </form>
  );
};
