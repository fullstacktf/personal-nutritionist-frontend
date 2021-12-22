import { useState, ChangeEvent, FC, CSSProperties } from "react";
import axios from "axios";

import { Button, FormControl, Box } from "@mui/material";
import { LocalPhone, Person, AlternateEmail, Save, Cancel } from "@mui/icons-material";
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

export const AccountForm: FC = () => {
  const userInfo = useAppSelector((state) => state.user.userInfo);
  const userToken = useAppSelector((state) => state.user.token);
  const dispatch = useAppDispatch();
  const [data, setData] = useState({
    username: userInfo.username,
    email: userInfo.email,
    password: userInfo.password
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
    newUser.username = data.username;
    newUser.email = data.email;
    newUser.password = data.password;

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
          <Person sx={{ borderRadius: "5px", color: "action.active", background: "#F3F6F9", mr: 1, my: 1.5 }} />
          <InputForm onChange={handleDataChange} value={data.username} title="Usuario" name="username" placeholder="Escribe tu nombre de usuario" type="username" validation={true} />
        </BoxStyled>
        <BoxStyled>
          <AlternateEmail sx={{ borderRadius: "5px", color: "action.active", background: "#F3F6F9", mr: 1, my: 1.5 }} />
          <InputForm onChange={handleDataChange} value={data.email} title="Email" name="email" placeholder="Escribe tu email" type="email" validation={true} />
        </BoxStyled>
        <BoxStyled>
          <LocalPhone sx={{ borderRadius: "5px", color: "action.active", background: "#F3F6F9", mr: 1, my: 1.5 }} />
          <InputForm onChange={handleDataChange} title="Contraseña" name="password" placeholder="Escribe tu contraseña" type="password" validation={true} />
        </BoxStyled>

        <div style={ButtonStyle}>
          <Button variant="contained" startIcon={<Save />} type="submit">Guardar Cambios</Button>
          <Button color="info" startIcon={<Cancel />} onClick={submitData} variant="contained">Cancelar</Button>
        </div>
      </FormControl>
    </form>
  );
};
