import { CSSProperties, FC } from "react";

import { Box } from "@mui/material";

import { useAppSelector } from "../../app/hooks";
import { SideMenu } from "../../components/Menu/Menu";
import { RecipeListClient } from "../../components/RecipeListClient/RecipeListClient";
import { RecipeListNutritionist } from "../../components/RecipeListNutritionist/RecipeListNutritionist";

const BoxStyle: CSSProperties = {
  display: "flex",
  flexGrow: 1,
  color: "white",
  backgroundColor: "#dbdbdb",
  height: "87.5vh"
};

export const RecipeListPage: FC = () => {
  const userInfo = useAppSelector((state) => state.user.userInfo);

  return (
    <Box style={BoxStyle}>
      <SideMenu />
      {userInfo.role === "Nutricionista" ? <RecipeListNutritionist /> : <RecipeListClient />}
    </Box>
  );
};
