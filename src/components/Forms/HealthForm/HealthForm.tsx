import { useState, ChangeEvent, FC, CSSProperties  } from "react";
import axios from "axios";

import { Button, FormControl, Box, Select, MenuItem, InputLabel, SelectChangeEvent } from "@mui/material";
import { NoFood, Height, MonitorWeight, Restaurant, Save, Cancel } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

import { updateUser } from "../../../features/user/userSlice";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { Tags } from "../../../components/Autocomplete/Autocomplete";
import { InputForm } from "../InputForm/InputForm";

const FormContainerStyle: CSSProperties = {
  display: "flex",
  alignItems: "center"
};

const BoxStyled = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-end",
  width: "98%"
}));

const ButtonStyle: CSSProperties = {
  width: "70%",
  display: "flex",
  justifyContent: "space-evenly",
  padding: "30px 30px 30px 30px",
};

export const HealthForm: FC = () => {
  const userInfo = useAppSelector((state) => state.user.userInfo);
  const userToken = useAppSelector((state) => state.user.token);
  const dispatch = useAppDispatch();
  const [data, setData] = useState({
    intolerances: ["", "", "", ""],
    height: userInfo.height,
    diet: userInfo.diet,
    weight: userInfo.weight
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

    const newUser = { ...userInfo };
    newUser.intolerances = data.intolerances;
    newUser.height = parseInt(data.height);
    newUser.weight = parseInt(data.weight);
    newUser.diet = data.diet;

    console.log(newUser);

    const config = {
      headers: { Authorization: `Bearer ${userToken}` }
    };

    axios.put(`https://api.nutriguide.es/users/${userInfo._id}`, newUser, config)
    .then((res) => { dispatch(updateUser(res.data)); });
  };

  return (
    <form onSubmit={submitData} style={{ width: "96%" }}>
      <FormControl style={FormContainerStyle}>
        <BoxStyled>
          <MonitorWeight sx={{ borderRadius: "5px", color: "action.active", background: "#F3F6F9", mr: 1, my: 1.5 }} />
          <InputForm onChange={handleDataChange} value={data.weight.toString()} title="Peso" name="weight" placeholder="Escribe tu peso" type="number" validation={true} />
        </BoxStyled>
        <BoxStyled>
          <Height sx={{ borderRadius: "5px", color: "action.active", background: "#F3F6F9", mr: 1, my: 1.5 }} />
          <InputForm onChange={handleDataChange} value={data.height.toString()} title="Altura" name="height" placeholder="Escribe tu altura" type="number" validation={true} />
        </BoxStyled>
        <BoxStyled>
          <NoFood sx={{ borderRadius: "5px", color: "action.active", background: "#F3F6F9", mr: 1, my: 1.5 }} />
          <Tags onChange={handleIntoleranceChange} name="intolerances" label="Intolerancias" placeholder="Selecciona tus intolerancias" data={intolerances} />
        </BoxStyled>
        <BoxStyled sx={{ marginTop: "20px" }}>
          <Restaurant sx={{ borderRadius: "5px", color: "action.active", background: "#F3F6F9", mr: 1, my: 1.5 }} />
          <FormControl>
            <InputLabel id="demo-simple-select-label">Dieta</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={data.diet}
              label="Selecciona tu tipo de dieta"
              onChange={handleDietChange}
              style={{ width: "500px" }}
            >
              <MenuItem value={"Vegetariana"}>Vegetariana</MenuItem>
              <MenuItem value={"Omnivora"}>Omnívora</MenuItem>
              <MenuItem value={"Vegana"}>Vegana</MenuItem>
              <MenuItem value={"Flexitariana"}>Flexitariana</MenuItem>
            </Select>
          </FormControl>
        </BoxStyled>

        <div style={ButtonStyle}>
          <Button variant="contained" startIcon={<Save />} type="submit">Guardar Cambios</Button>
          <Button color="info" startIcon={<Cancel />} onClick={submitData} variant="contained">Cancelar</Button>
        </div>
      </FormControl>
    </form>
  );
};
