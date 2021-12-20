import { FC } from "react";
import { Link } from "react-router-dom";

import { ListItem, ListItemText, ListItemIcon } from "@mui/material";

interface Props {
  icon: JSX.Element;
  name?: string;
  separator?: JSX.Element;
  url: string;
}

export const IconMenu: FC<Props> = ({ icon, name="", separator="", url }) => {
  return (
    <div>
      {separator}
      <ListItem button component={Link} to={url}>
          <ListItemIcon>
            {icon}
          </ListItemIcon>
          <ListItemText primary={name} />
      </ListItem>
    </div>
  );
};
