import { CSSProperties, FC } from "react";

import { Box } from "@mui/material";

import { useAppSelector } from "../../app/hooks";
import { SideMenu } from "../../components/Menu/Menu";
import { NutritionistList } from "../../components/NutritionistList/NutritionistList";
import { ClientList } from "../../components/ClientList/ClientList";

const BoxStyle: CSSProperties = {
  display: "flex",
  flexGrow: 1,
  color: "white",
  backgroundColor: "#dbdbdb",
  height: "86.6vh"
};

export const UserListPage: FC = () => {
  const userInfo = useAppSelector((state) => state.user.userInfo);

  return (
    <Box style={BoxStyle}>
      <SideMenu />
      {userInfo.role === "Nutricionista" ? <ClientList /> : <NutritionistList />}
    </Box>
  );
};
