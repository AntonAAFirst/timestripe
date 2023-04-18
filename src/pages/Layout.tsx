import { Outlet } from "react-router-dom";
import ModalNote from "../widgets/ModalNote/ModalNote";
import { useEffect } from "react";
import axios from "axios";

export default function Layout() {
  useEffect(() => {
    axios
      .get(
        "https://myfirstfirebase-9dcac-default-rtdb.firebaseio.com/test.json"
      )
      .then(({ data }) => {
        console.log(data.length);
      });
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <ModalNote />
      <Outlet />
    </div>
  );
}
