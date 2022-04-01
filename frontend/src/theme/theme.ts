import { createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";

export const theme = createTheme({
  typography: {
    fontFamily: "Nunito",
    body1: {
      fontFamily: "Nunito",
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: "24px",
      letterSpacing: "-1.3038520263464193e-9px",

      color: "#87898C",
    },
    body2: {
      fontFamily: "Nunito",
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "20px",
      letterSpacing: "-1.3038520263464193e-9px",
    },

    h5: {
      fontFamily: "Nunito",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "24px",
      textAlign: "center",
      letterSpacing: "-1.30385e-09px",
      color: " #000000",
    },

    subtitle1: {
      fontFamily: "Nunito",
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "20px",
      letterSpacing: "-1.3038520263464193e-9px",

      color: "#7D7A7A",
    },
  },
  palette: {
    primary: {
      main: "#1871E8",
    },
    secondary: {
      main: green[500],
    },
  },
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#C6C6C6",
          "&$checked": {
            color: "red",
          },
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { color: "primary", variant: "contained" },
          style: {
            boxShadow: "none",
            textTransform: "none",
          },
        },
      ],
    },
  },
});
