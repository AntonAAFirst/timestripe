import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CalendarPage from "./pages/CalendarPage";
import Cookies from "js-cookie";
import Auth from "./pages/Auth";
import { cookieUserId } from "./shared/models/types";
import ModalNote from "./widgets/ModalNote/ModalNote";
import Layout from "./pages/Layout";

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLogin = Cookies.get(cookieUserId);
    if (isLogin === undefined) {
      navigate("/auth");
    }
  }, []);

  return (
    <Routes>
      <Route path="auth" element={<Auth />} />
      <Route path="/kek" element={<Layout />}>
        <Route path="calendar" element={<CalendarPage />} />
      </Route>
    </Routes>
  );
}
