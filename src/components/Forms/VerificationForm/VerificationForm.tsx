import { useState, ChangeEvent, FC, CSSProperties  } from "react";
import axios from "axios";

import { Button, FormControl, Box } from "@mui/material";
import { PermIdentity, School, Save, Cancel } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

import { updateUser } from "../../../features/user/userSlice";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
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

export const VerificationForm: FC = () => {
  const userInfo = useAppSelector((state) => state.user.userInfo);
  const userToken = useAppSelector((state) => state.user.token);
  const dispatch = useAppDispatch();
  const [data, setData] = useState({
    dni: userInfo.dni,
    specialties: userInfo.specialties
  });

  const handleDataChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  
  const submitData = (event: any ) => {
    event.preventDefault();

    const newUser = { ...userInfo };
    newUser.dni = data.dni;
    newUser.specialties = data.specialties.split(", ");
  
    const config = {
      headers: { Authorization: `Bearer ${userToken}` }
    };
  
    axios.put(`https://api.nutriguide.es/users/${userInfo._id}`, newUser, config)
    .then((res) => {
      dispatch(updateUser(res.data));
    });
  };

  return (
    <form onSubmit={submitData} style={{ width: "96%" }}>
      <FormControl style={FormContainerStyle}>
        <BoxStyled>
          <PermIdentity sx={{ borderRadius: "5px", color: "action.active", background: "#F3F6F9", mr: 1, my: 1.5 }} />
          <InputForm onChange={handleDataChange} value={data.dni} title="DNI" name="dni" placeholder="Intoduce tu DNI" type="text" />
        </BoxStyled>
        <BoxStyled>
          <School sx={{ borderRadius: "5px", color: "action.active", background: "#F3F6F9", mr: 1, my: 1.5 }} />
          <InputForm onChange={handleDataChange} value={data.specialties.join(", ") || null} title="Estudios" name="specialties" placeholder="Escribe tus estudios" type="text" />
        </BoxStyled>
        <div style={ButtonStyle}>
          <Button variant="contained" startIcon={<Save />} type="submit">Guardar Cambios</Button>
          <Button color="info" startIcon={<Cancel />} onClick={submitData} variant="contained">Cancelar</Button>
        </div>
      </FormControl>
    </form>
  );
};
