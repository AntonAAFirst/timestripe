import { cookieUserId } from "./shared/models/types";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CalendarPage from "./pages/CalendarPage";
import Cookies from "js-cookie";
import Auth from "./pages/Auth";
import Layout from "./pages/Layout";

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLogin: string | undefined = Cookies.get(cookieUserId);
    if (isLogin === undefined) {
      navigate("/");
    }
  }, []);

  return (
    <Routes>
      <Route path="" element={<Auth />} />
      <Route path="/" element={<Layout />}>
        <Route path="calendar" element={<CalendarPage />} />
      </Route>
    </Routes>
  );
}
