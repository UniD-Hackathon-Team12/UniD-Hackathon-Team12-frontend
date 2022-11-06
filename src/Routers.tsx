import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Create from "./pages/Create";
import Login from "./pages/Login";
import Main from "./pages/Main";
import MyPage from "./pages/MyPage";
import NovelDetail from "./pages/NovelDetail";
import NovelKind from "./pages/NovelKind";
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
        <Route path="/novel-detail/:id" element={<NovelDetail />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create" element={<Create />} />
        <Route path="/novel-kind/word" element={<NovelKind type="word" />} />
        <Route
          path="/novel-kind/sentence"
          element={<NovelKind type="sentence" />}
        />
        <Route
          path="/novel-kind/paragraph"
          element={<NovelKind type="paragraph" />}
        />
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
