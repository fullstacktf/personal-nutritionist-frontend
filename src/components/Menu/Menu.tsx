import * as React from 'react';
import { FC } from "react";
import { Grid, Button, Divider, ListItem, ListItemText } from "@mui/material"
import ListItemIcon from '@mui/material/ListItemIcon';
import ListSubheader from '@mui/material/ListSubheader';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import EventIcon from '@mui/icons-material/Event';
import SettingsIcon from '@mui/icons-material/Settings';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';

export const Menu: FC = () => {
  const [open, setOpen] = React.useState(true);
  let menuIcon;
  open? menuIcon = "Cerrar" : menuIcon = "Abrir";
  if(open) {
    return (
      <Grid container sx={{background: "orange", height: "100vh", width: 70, flexDirection: "column"}}>
        <Button onClick={() => setOpen(!open)}> {menuIcon} </Button>
      </Grid>
    );
  }
  else{
    return (
      <Grid container sx={{background: "orange", height: "100vh", width: 270, flexDirection: "column"}}>
        <Button onClick={() => setOpen(!open)}> {menuIcon} </Button>
        <Divider />
        <ListSubheader>Personal</ListSubheader>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon/>
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <EventIcon/>
            </ListItemIcon>
            <ListItemText primary="Calendar" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon/>
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem>
      </Grid>
    );
  }
};
