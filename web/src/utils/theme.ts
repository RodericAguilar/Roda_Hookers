import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#0096ff",
    },
    text: {
      primary: "#e6e6e6",
    },
    background: {
      default: "#272727",
      paper: "#001E3C", // Cambia este color para cambiar el color de fondo de los componentes
    },
    error: {
      main: "#ff2301",
    },
    warning: {
      main: "#ddff01",
    },
    success: {
      main: "#5eff01",
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    fontSize: 12,
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "#0096ff",
            },
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#0096ff",
          },
        },
      },
    },
  },
});

export default theme;
