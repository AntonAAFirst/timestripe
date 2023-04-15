import { useAppDispatch, useAppSelector } from "../shared/store/hooks";
import { setText } from "../shared/store/reducers/testReducer";
import { useEffect } from "react";
import Calendar from "../widgets/Calendar/Calendar";

export default function CalendarPage() {
  const text = useAppSelector((state) => state.test.text);

  const dispatch = useAppDispatch();

  function handlerInput(someText: string) {
    let newArray = [...text];
    newArray[0] = someText;
    dispatch(setText(newArray));
  }

  return (
    <div style={{ backgroundColor: "#202021", height: "100vh" }}>
      calendar page!!!
      <Calendar />
      <div style={{ color: "white" }}>{text}</div>
      <input
        type="text"
        value={text[0]}
        onChange={(e) => handlerInput(e.target.value)}
      />
    </div>
  );
}
