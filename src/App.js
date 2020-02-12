import React from 'react';
import './App.css';

import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline, createMuiTheme, responsiveFontSizes } from "@material-ui/core";

import Home from './components/Home/Home.component';
// import About from './components/About/About.component';
import Contact from './components/Contact/Contact.component';

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
      <div className="main-container">
        <Home />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
