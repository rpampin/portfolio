import React from 'react';
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline, createMuiTheme, responsiveFontSizes } from "@material-ui/core";

import '../styles/App.css';
import Landing from './Landing.component';

const theme = responsiveFontSizes(createMuiTheme({
  typography: {
    fontFamily: 'Roboto, Open Sans, Opensans, Helvetica, -apple-system, system-ui, BlinkMacSystemFont, sans-serif',
  },
  palette: {
    type: "dark"
  }
}));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Landing />
    </ThemeProvider>
  );
}

export default App;
