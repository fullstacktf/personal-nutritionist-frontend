import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

import { emphasize, styled } from "@mui/material/styles";
import { Breadcrumbs, Chip } from "@mui/material";
import { Home, Settings } from "@mui/icons-material";
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
        {userLogged.token === "" ? <StyledBreadcrumb icon={<Home fontSize="small" />} label="Nutriguide" component={Link} to="/" /> :null}
        {location.pathname === "/login" ? <StyledBreadcrumb label="Iniciar Sesión" component={Link} to="/login" /> : null}
        {location.pathname === "/signup" ? <StyledBreadcrumb label="Registrarse" component={Link} to="/signup" /> : null}
        {userLogged.token !== "" ? <StyledBreadcrumb icon={<Home fontSize="small" />} label={userLogged.userInfo.name} component={Link} to="/" /> : null}
        {location.pathname === "/calendar" ? <StyledBreadcrumb label="Calendario" component={Link} to="/calendar" /> : null}
        {location.pathname === "/calendar/event/create/:participant" ? <StyledBreadcrumb label="Crear evento" component={Link} to="/calendar" /> : null}
        {location.pathname === "/settings/personal" ? <StyledBreadcrumb icon={<Settings fontSize="small" />} label="Información personal" component={Link} to="/settings/personal" /> : null}
        {location.pathname === "/settings/account" ? <StyledBreadcrumb icon={<Settings fontSize="small" />} label="Información de cuenta" component={Link} to="/settings/account" /> : null}
        {location.pathname === "/settings/health" ? <StyledBreadcrumb icon={<Settings fontSize="small" />} label="Información de salud" component={Link} to="/settings/health" /> : null}
        {location.pathname === "/settings/verification" ? <StyledBreadcrumb icon={<Settings fontSize="small" />} label="Verificación" component={Link} to="/settings/verification" /> : null}
        {location.pathname === "/nutritionists" ? <StyledBreadcrumb label="Nutricionistas" component={Link} to="/nutritionists" /> : null}
        {location.pathname === "/clients" ? <StyledBreadcrumb label="Clientes" component={Link} to="/clients" /> : null}
        {location.pathname === "/recipes" ? <StyledBreadcrumb label="Recetas" component={Link} to="/recipes" /> : null}
      </Breadcrumbs>
    </div>
  );
};
