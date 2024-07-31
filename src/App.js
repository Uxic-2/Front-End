import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { MyPage, MyMap, MyFolder, MySchedule } from "./pages/MyPage";
import SignUp from "./pages/SignUp";
import Support from "./pages/Support";
import HotSpot from "./pages/Hotspot";
import About from "./pages/About";

import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/support" element={<Support />} />
        <Route path="/hotspot" element={<HotSpot />} />
        <Route path="/about" element={<About />} />

        <Route path="/mypage" element={<MyMap />} />
        <Route path="/mypage/mymap" element={<MyMap />} />
        <Route path="/mypage/myfolder" element={<MyFolder />} />
        <Route path="/mypage/myschedule" element={<MySchedule />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
