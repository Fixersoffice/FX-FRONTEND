import { createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const theme = createTheme({
  typography: {
    // Tell MUI what's the font-size on the html element is. It is set here to 10px for easy conversion of pixel values to rem.
    htmlFontSize: 10,
    fontFamily: "Roboto",
  },
  status: {
    danger: orange[500],
  },
});
