import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./pages/Main";
import NovelDetail from "./pages/NovelDetail";
import MyPage from "./pages/MyPage";
import Create from "./pages/Create";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Create name="asdf" />
      {/* <NovelDetail /> */}
    </div>
  );
}

export default App;
