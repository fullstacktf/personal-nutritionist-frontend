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

  const menuIcon = open ? <Close></Close> : <Menu></Menu>;
  
  const items = [
    { icon: <Home color="info" />, name: "Home", separator: <ListSubheader>Personal</ListSubheader> },
    { icon: <Event color="info" />, name: "Calendar" },
    { icon: <Settings color="info" />, name: "Settings" },
    { icon: <SupervisedUserCircle color="info" />, name: "Nutritionists", separator: <ListSubheader>Services</ListSubheader> },
    { icon: <MenuBook color="info" />, name: "Recipes" },
  ];

  if (userInfo.role === "Nutricionista") {
    items[3].icon = <People color="info" />;
    items[3].name = "Clients";
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
