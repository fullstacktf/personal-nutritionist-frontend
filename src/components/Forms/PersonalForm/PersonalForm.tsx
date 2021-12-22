import { useState, ChangeEvent, FC, CSSProperties  } from "react";
import axios from "axios";

import { Button, FormControl, Box } from "@mui/material";
import { LocalPhone, Person, Description, Save, Cancel } from "@mui/icons-material";
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

export const PersonalForm: FC = () => {
  const userInfo = useAppSelector((state) => state.user.userInfo);
  const userToken = useAppSelector((state) => state.user.token);
  const dispatch = useAppDispatch();
  const [data, setData] = useState({
    name: userInfo.name,
    phone: userInfo.phone,
    description: userInfo.description
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
    newUser.name = data.name;
    newUser.phone = parseInt(data.phone);
    newUser.description = data.description;

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
          <InputForm onChange={handleDataChange} value={data.name} title="Nombre" name="name" placeholder="Escribe tu nombre y apellidos" type="text" validation={true} />
        </BoxStyled>
        <BoxStyled>
          <LocalPhone sx={{ borderRadius: "5px", color: "action.active", background: "#F3F6F9", mr: 1, my: 1.5 }} />
          <InputForm onChange={handleDataChange} value={data.phone.toString()} title="Teléfono" name="phone" placeholder="Escribe tu teléfono" type="number" validation={true} />
        </BoxStyled>
        <BoxStyled>
          <Description sx={{ borderRadius: "5px", color: "action.active", background: "#F3F6F9", mr: 1, my: 1.5 }} />
          <InputForm onChange={handleDataChange} value={data.description} title="Descripción" name="description" placeholder="Describe algo sobre tí" type="text" validation={true} />
        </BoxStyled>

        <div style={ButtonStyle}>
          <Button variant="contained" startIcon={<Save />} type="submit">Guardar Cambios</Button>
          <Button color="info" startIcon={<Cancel />} onClick={submitData} variant="contained">Cancelar</Button>
        </div>
      </FormControl>
    </form>
  );
};
