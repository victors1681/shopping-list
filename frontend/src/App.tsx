import React from 'react';
import './App.css';
import Layout from "../src/common/layout";
import {ThemeProvider } from "@mui/material"
import { theme} from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
   <Layout>
     hello
   </Layout>
   </ThemeProvider>
  );
}

export default App;
