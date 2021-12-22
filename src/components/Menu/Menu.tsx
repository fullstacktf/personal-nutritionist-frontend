import * as React from "react";
import { FC } from "react";

import { Grid, Button, ListSubheader, Typography } from "@mui/material";
import { Close, Menu, Home, People, Event, Settings, MenuBook, SupervisedUserCircle } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

import { useAppSelector } from "../../app/hooks";
import { IconMenu } from "./IconMenu";

export const SideMenu: FC = () => {
  const [open, setOpen] = React.useState(true);
  const userInfo = useAppSelector((state) => state.user.userInfo);

  const menuIcon = open ? <Close /> : <Menu />;
  
  const items = [
    { icon: <Home color="info" />, name: "Home", separator: <ListSubheader>Personal</ListSubheader>, url: "/" },
    { icon: <Event color="info" />, name: "Calendar", url: "/calendar" },
    { icon: <Settings color="info" />, name: "Settings", url: "/settings/personal" },
    { icon: <SupervisedUserCircle color="info" />, name: "Nutritionists", separator: <ListSubheader>Services</ListSubheader>, url: "/nutritionists" },
    { icon: <MenuBook color="info" />, name: "Recipes", url: "/recipes" },
  ];

  if (userInfo.role === "Nutricionista") {
    items[3].icon = <People color="info" />;
    items[3].name = "Clientes";
    items[3].url = "/clients";
  }

  const GridMenu = styled(Grid)(() => ({
    background: "#21252B",
    display: "flex",
    flexDirection: "column",
    color: "white",
  }));

  if(!open) {
    return (
      <GridMenu width={60} item>
        <Button onClick={() => setOpen(!open)} style={{ marginLeft: "-5px", marginTop: "5px" }}>{menuIcon}</Button>
        {items.map((item) => (
          <IconMenu icon={item.icon} url={item.url} />
        ))}
      </GridMenu>
    );
  }
  else {
    return (
      <GridMenu width={270}>
        <Button sx={{ display: "flex", justifyContent: "flex-end" }} onClick={() => setOpen(!open)}>{menuIcon}</Button>
        <Typography align="center" sx={{ marginBottom: "10px" }}><b>Nutriguide</b></Typography>
        {items.map((item) => ( 
          <IconMenu icon={item.icon} name={item.name} separator={item.separator} url={item.url} />
        ))}
      </GridMenu>
    );
  }
};
