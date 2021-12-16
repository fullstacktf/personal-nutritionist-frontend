import * as React from "react";
import { FC } from "react";

import { Grid, Button, ListSubheader, Typography } from "@mui/material";
import { Close, Menu, Home, People, Event, Settings, MenuBook, SupervisedUserCircle } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

import { IconMenu } from "./IconMenu";

export const SideMenu: FC = () => {
  const [open, setOpen] = React.useState(true);

  const menuIcon = open ? <Close></Close> : <Menu></Menu>;
  const items = [
    { icon: <Home color="info" />, name: "Home", separator: <ListSubheader>Personal</ListSubheader> },
    { icon: <Event color="info" />, name: "Calendar" },
    { icon: <Settings color="info" />, name: "Settings" },
    { icon: <People color="info" />, name: "Users", separator: <ListSubheader>Services</ListSubheader>  },
    { icon: <SupervisedUserCircle color="info" />, name: "Nutritionists" },
    { icon: <MenuBook color="info" />, name: "Recipes" },
  ];

  const GridMenu = styled(Grid)(() => ({
    background: "#21252B",
    display: "flex",
    height: "100vh",
    flexDirection: "column",
    color: "white",
  }));

  if(!open) {
    return (
      <GridMenu width={60} item>
        <Button onClick={() => setOpen(!open)}>{menuIcon}</Button>
        {items.map((item) => (
          <IconMenu icon={item.icon}></IconMenu>
        ))}
      </GridMenu>
    );
  }
  else {
    return (
      <GridMenu width={270}>
        <Button sx={{ display: "flex", justifyContent: "flex-end" }} onClick={() => setOpen(!open)}>{menuIcon}</Button>
        <Typography align="center"><b>Nutriguide</b></Typography>
        {items.map((item) => (
          <IconMenu icon={item.icon} name={item.name} separator={item.separator}></IconMenu>
        ))}
      </GridMenu>
    );
  }
};
