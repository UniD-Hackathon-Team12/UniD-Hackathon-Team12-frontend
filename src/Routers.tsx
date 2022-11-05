import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Main from "./pages/Main";
import MyPage from "./pages/MyPage";
import NovelDetail from "./pages/NovelDetail";
import Signup from "./pages/Signup";
const Routers = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main type="main" />} />
        <Route path="/search/:word" element={<Main type="search" />} />
        <Route path="/keyword" element={<Main type="keyword" />} />
        <Route
          path="/keyword/search/:word"
          element={<Main type="keywordSearch" />}
        />
        <Route path="/novel-detail" element={<NovelDetail />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
