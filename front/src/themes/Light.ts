import { inter } from '@/fonts/_fonts';
import { createTheme } from '@mui/material';

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: '#26A69A',
      light: '#009688',
      dark: '#00796B',
    },
    secondary: {
      main: '#238DA6',
      light: '#1565C0',
      dark: '#0D47A1',
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily
  }
});
