import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./pages/Main";
import NovelDetail from "./pages/NovelDetail";
import MyPage from "./pages/MyPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Create from "./pages/Create";
import { createTheme, ThemeProvider } from "@mui/material";
import Routers from "./Routers";

const theme = createTheme({
  typography:{
    fontFamily:"neverland_l",
  },
  palette: {
    primary: {
      main: "#E0BFE6",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routers />
      </div>
    </ThemeProvider>
  );
}

export default App;
