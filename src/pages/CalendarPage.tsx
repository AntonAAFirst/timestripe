import { useAppDispatch, useAppSelector } from "../shared/store/hooks";
import { setText } from "../shared/store/reducers/testReducer";
import { useEffect } from "react";
import Calendar from "../widgets/Calendar/Calendar";
import ModalNote from "../widgets/ModalNote/ModalNote";

export default function CalendarPage() {
  return (
    <div style={{ backgroundColor: "#202021", minHeight: "100vh" }}>
      calendar page!!!
      <Calendar />
    </div>
  );
}
