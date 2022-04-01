import React from 'react';
import './App.css';
import Layout from "../src/modules/common/layout";
import {ThemeProvider } from "@mui/material"
import { theme} from "./theme/theme";
import { Shopping } from "./modules/shopping"
function App() {
  return (
    <ThemeProvider theme={theme}>
   <Layout>
     <Shopping/>
   </Layout>
   </ThemeProvider>
  );
}

export default App;
