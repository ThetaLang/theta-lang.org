import { createTheme } from '@mui/material/styles';

const draculaTheme = createTheme({
  palette: {
    primary: {
      main: '#FD2E69', // Brand color for other primary elements
    },
    secondary: {
      main: '#bd93f9', // Secondary color for other elements
    },
    background: {
      default: '#282a36', // Dracula background
      paper: '#44475a',   // Paper background
    },
    text: {
      primary: '#f8f8f2', // Foreground text
      secondary: '#6272a4', // Secondary text (comments)
    },
  },
  typography: {
    fontFamily: '"Source Code Pro", monospace', // Default font is Source Code Pro
    h6: {
      color: '#f8f8f2',
    },
    body1: {
      color: '#f8f8f2',
    },
    button: {
      textTransform: 'none', // Keep buttons in normal case (not uppercase)
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#bd93f9', // Use Dracula purple for AppBar
        },
      },
    },
  },
});

export default draculaTheme;
