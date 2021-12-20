<<<<<<< HEAD:src/components/Forms/HealthForm/HealthForm.tsx
import { useState, ChangeEvent, FC } from "react";
import { Button, FormControl, FormGroup, Select, InputLabel, SelectChangeEvent, MenuItem } from "@mui/material";
import { InputForm } from "../../InputForm/InputForm";
import { Tags } from "../../Autocomplete/Autocomplete";
=======
import { useState, ChangeEvent, FC, CSSProperties  } from "react";
import { Button, FormControl, Box, Select, MenuItem, InputLabel, SelectChangeEvent } from "@mui/material";

import NoFoodIcon from "@mui/icons-material/NoFood";
import HeightIcon from "@mui/icons-material/Height";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import MonitorWeightIcon from "@mui/icons-material/MonitorWeight";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { styled } from "@mui/material/styles";

import { Tags } from "../Autocomplete/Autocomplete";
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

>>>>>>> ae014caa00d64195815a7f34098c4811e330664d:src/components/HealthForm/HealthForm.tsx

export const HealthForm: FC = () => {
  const [data, setData] = useState({
    intolerances: ["","","",""],
    height: 0,
    diet: "Vegetariana",
    weight: 0
  });

  const intolerances = [ "Huevos", "Leche", "Nueces", "Marisco" ];

  const handleDataChange = (event: ChangeEvent<HTMLInputElement>) => {

    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleIntoleranceChange = (event: ChangeEvent<HTMLInputElement>, value: any) => {
    const newIntolerances = value;
    setData({
      ...data,
      intolerances: newIntolerances,
    });
  };
  const handleDietChange = (event: SelectChangeEvent<string>) => {
    const newDiet = event.target.value;
    setData({ 
      ...data,
      diet: newDiet,
    });
  };

  const submitData = (event: any ) => {
    event.preventDefault();
  };

  return (
    <form style={FormContainer} onSubmit={submitData}>
      <FormControl>
        <div style={InputsContainer}>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <MonitorWeightIcon sx={{ borderRadius: "5px", color: "action.active", background: "#F3F6F9", mr: 1, my: 1.5 }} />
            <InputForm onChange={handleDataChange} title="Peso" name="weight" placeholder="Escribe tu peso" type="number" validation={true} />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <HeightIcon sx={{ borderRadius: "5px", color: "action.active", background: "#F3F6F9", mr: 1, my: 1.5 }} />
            <InputForm onChange={handleDataChange} title="Altura" name="height" placeholder="Escribe tu altura" type="number" validation={true} />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end", marginTop: "25px" }}>
            <NoFoodIcon sx={{ borderRadius: "5px", color: "action.active", background: "#F3F6F9", mr: 1, my: 1.5 }} />
            <Tags onChange={handleIntoleranceChange} name="intolerances" label="Intolerancias" placeholder="Selecciona tus intolerancias" data={intolerances}></Tags>
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end", marginTop: "25px" }}>
          <RestaurantIcon sx={{ borderRadius: "5px", color: "action.active", background: "#F3F6F9", mr: 1, my: 1.5 }} />
            <FormControl>
              <InputLabel id="demo-simple-select-label">Dieta</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={data.diet}
                label="Selecciona tu tipo de dieta"
                onChange={handleDietChange}
                >

                <MenuItem value={"Vegetariana"}>Vegetariana</MenuItem>
                <MenuItem value={"Omnivora"}>Omnívora</MenuItem>
                <MenuItem value={"Vegana"}>Vegana</MenuItem>
                <MenuItem value={"Flexitariana"}>Flexitariana</MenuItem>
              </Select>
            </FormControl>
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
