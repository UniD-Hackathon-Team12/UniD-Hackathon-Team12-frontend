
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

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Main/> */}
      <Create/>
    </div>
  );
}

export default App;
