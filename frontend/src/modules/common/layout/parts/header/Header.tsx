import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";

const AppBarToolBar = styled(Toolbar)`
  height: 64px;
  background-color: #4d81b7;
`;

const LogoTitle = styled(Typography)`
  font-family: Dosis;
  font-size: 18px;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0.25px;
  text-align: left;
`;

export const Header = (): JSX.Element => {
  return (
    <AppBar position="static" elevation={0}>
      <AppBarToolBar sx={{ flexWrap: "wrap" }}>
        <LogoTitle
          variant="subtitle1"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          SHOPPING LIST
        </LogoTitle>
      </AppBarToolBar>
    </AppBar>
  );
};

export default Header;
