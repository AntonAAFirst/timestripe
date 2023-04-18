import { Outlet } from "react-router-dom";
import ModalNote from "../widgets/ModalNote/ModalNote";

export default function Layout() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <ModalNote />
      <Outlet />
    </div>
  );
}
