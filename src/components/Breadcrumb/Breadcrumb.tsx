import { FC } from "react";
import { Link, useLocation} from "react-router-dom";

import { emphasize, styled } from "@mui/material/styles";
import { Breadcrumbs, Chip } from "@mui/material";
import { Home } from "@mui/icons-material";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
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

interface Props {
  
}
export const CustomizedBreadcrumbs: FC<Props> = () => {
  const location = useLocation();
  function handleClick(event: React.MouseEvent<Element, MouseEvent>) {
    event.preventDefault();
    console.log(location);
  }
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          component={Link}
          label="Nutriguide"
          icon={<Home color="success" fontSize="small" />}
          to="/"
        />
        { location.pathname === "/login" ? <StyledBreadcrumb component={Link} to="login" label="Iniciar Sesión" /> : null }
        { location.pathname === "/signup" ? <StyledBreadcrumb component={Link} to="/signup" label="Registrarse" /> : null }
        { location.pathname === "/home" ? <StyledBreadcrumb component={Link} to="/home" label="home" /> : null }
      </Breadcrumbs>
    </div>
  );
};
