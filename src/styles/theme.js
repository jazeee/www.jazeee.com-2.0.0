import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2F2001",
    },
    secondary: {
      main: "#0094FF",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#000",
    },
  },
});
