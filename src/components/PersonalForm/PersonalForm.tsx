import { useState, ChangeEvent, FC, CSSProperties  } from "react";
import { Button, FormControl, Box } from "@mui/material";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PersonIcon from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import { styled } from "@mui/material/styles";

import { InputForm } from "../InputForm/InputForm";

const FormContainer: CSSProperties = {
  display: "flex",
  flexGrow: 1,
  // width: "100vh",
  // height: "70vh",
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

export const PersonalForm: FC = () => {
  const [data, setData] = useState({
    name: "",
    phone: 0,
    Descripcion: ""
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
            <PersonIcon sx={{ borderRadius: "5px", color: "action.active", background: "#F3F6F9", mr: 1, my: 1.5 }} />
            <InputForm onChange={handleDataChange} title="Nombre" name="name" placeholder="Escribe tu nombre y apellidos" type="text" validation={true} />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <LocalPhoneIcon sx={{ borderRadius: "5px", color: "action.active", background: "#F3F6F9", mr: 1, my: 1.5 }} />
            <InputForm onChange={handleDataChange} title="Teléfono" name="phone" placeholder="Escribe tu telefono" type="tel" validation={true} />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <DescriptionIcon sx={{ borderRadius: "5px", color: "action.active",background: "#F3F6F9", mr: 1, my: 1.5 }} />
            <InputForm onChange={handleDataChange} title="Descripción" name="Descripcion" placeholder="Añade una descripción" type="text" />
          </Box>
          <div style={ButtonsContainer}>
            <ButtonStyled variant="contained" type="submit">
              <SaveIcon sx={{ color: "white", mr: 1, my: 1.5 }} />
              Guardar Cambios
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
