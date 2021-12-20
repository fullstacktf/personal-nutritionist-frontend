import { FC } from "react";
import { Link, useLocation} from "react-router-dom";

import { emphasize, styled } from "@mui/material/styles";
import { Breadcrumbs, Chip } from "@mui/material";
import { Home } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

import { useAppSelector } from "../../app/hooks";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? grey[100]
      : grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}) as typeof Chip;

export const CustomizedBreadcrumbs: FC = () => {
  const location = useLocation();
  const userLogged = useAppSelector((state) => state.user);

  const handleClick = (event: React.MouseEvent<Element, MouseEvent>) => {
    event.preventDefault();
    console.log(location);
  };

  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        {userLogged.token === "" ?  <StyledBreadcrumb component={Link} label="Nutriguide" icon={<Home fontSize="small" />} to="/" /> :null}
        {location.pathname === "/login" ? <StyledBreadcrumb component={Link} to="/login" label="Iniciar Sesión" /> : null}
        {location.pathname === "/signup" ? <StyledBreadcrumb component={Link} to="/signup" label="Registrarse" /> : null}
        {userLogged.token !== "" ? <StyledBreadcrumb icon={<Home fontSize="small" />} component={Link} to="/" label={userLogged.name}/> : null}
        {location.pathname === "/personal" ? <StyledBreadcrumb component={Link} to="/personal" label="Información personal" /> : null}
        {location.pathname === "/health" ? <StyledBreadcrumb component={Link} to="/health" label="Información de salud" /> : null}
        {location.pathname === "/verification" ? <StyledBreadcrumb component={Link} to="/verification" label="Verificación" /> : null}
      </Breadcrumbs>
    </div>
  );
};
