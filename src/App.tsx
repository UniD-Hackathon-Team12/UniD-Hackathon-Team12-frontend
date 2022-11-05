import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./pages/Main";
import NovelDetail from "./pages/NovelDetail";

function App() {
  return (
    <div className="App">
      <NavBar />
      <NovelDetail />
    </div>
  );
}

export default App;
