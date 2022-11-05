import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./pages/Main";
import NovelDetail from "./pages/NovelDetail";
import Routers from "./Routers";

function App() {
  return (
    <div className="App">
      <Routers />
    </div>
  );
}

export default App;
