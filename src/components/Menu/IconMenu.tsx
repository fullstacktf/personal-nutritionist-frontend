import { FC } from "react";

import { ListItem, ListItemText, ListItemIcon } from "@mui/material";

interface Props {
  icon: JSX.Element;
  name?: string;
  separator?: JSX.Element;
}

export const IconMenu: FC<Props> = ({ icon, name="", separator="" }) => {
  return (
    <div>
      {separator}
      <ListItem button>
          <ListItemIcon>
            {icon}
          </ListItemIcon>
          <ListItemText primary={name} />
      </ListItem>
    </div>
  );
};
