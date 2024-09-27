import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';  // axios 요청 사용
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyMap from "./pages/MyMap";
import MyFolder from "./pages/MyFolder";
import MySchedule from "./pages/MySchedule";
import ScheduleEdit from "./pages/ScheduleEdit";
import ScheduleCreate from "./pages/ScheduleCreate";
import SignUp from "./pages/SignUp";
import Support from "./pages/Support";
import HotSpot from "./pages/Hotspot";
import About from "./pages/About";
import ReadyTravel from "./pages/ReadyTravel";
import SupNotice from "./pages/SupNotice";
import SupQuestion from "./pages/SupQuestion";
import Lodging from "./pages/Lodging";
import HiddenSpot from "./pages/HiddenSpot";
import Restaurant from "./pages/Restaurant";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 관리
  const [userId, setUserId] = useState(null); // 유저 ID 상태 관리

  // 로그인 상태 확인 함수
  const checkAuthStatus = async () => {
    const storedUserId = localStorage.getItem('userId');  // 로컬 스토리지에서 userId 가져오기

    if (storedUserId) {
      try {
        // 백엔드에서 userId의 유효성을 확인
        const response = await axios.get(`http://localhost:8080/auth-status/${storedUserId}`, { withCredentials: true });

        if (response.data.loggedIn) {
          setIsLoggedIn(true);
          setUserId(storedUserId);  // 로컬 스토리지의 userId 사용
        } else {
          setIsLoggedIn(false);
          setUserId(null);
          localStorage.removeItem('userId');  // 유효하지 않으면 로컬 스토리지에서 제거
        }
      } catch (error) {
        console.error('유저 인증 상태 확인 중 오류:', error);
        setIsLoggedIn(false);
        setUserId(null);
        localStorage.removeItem('userId');  // 오류 시에도 로컬 스토리지에서 제거
      }
    } else {
      setIsLoggedIn(false);
      setUserId(null);  // 로컬 스토리지에 userId가 없으면 로그인 상태 아님
    }
  };

  // 컴포넌트가 처음 렌더링될 때 로그인 상태 확인
  useEffect(() => {
    checkAuthStatus();
  }, []);

  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/support" element={<Support />} />
        <Route path="/hot-spot" element={<HotSpot userId={userId} />} />  {/* 유저 ID 전달 */}
        <Route path="/about" element={<About />} />
        <Route path="/ready-travel" element={<ReadyTravel />} />
        <Route path="/lodging" element={<Lodging />} />
        <Route path="/mymap" element={<MyMap />} />
        <Route path="/myfolder" element={<MyFolder />} />
        <Route path="/myschedule" element={<MySchedule />} />
        <Route path="/schedule-edit" element={<ScheduleEdit />} />
        <Route path="/schedule-create" element={<ScheduleCreate />} />
        <Route path="/supnotice" element={<SupNotice />} />
        <Route path="/supquestion" element={<SupQuestion />} />
        <Route path="/hidden-spot" element={<HiddenSpot />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
