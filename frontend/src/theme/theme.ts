import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1871E8",
    },
    secondary: {
      main: green[500],
    },
  },
});