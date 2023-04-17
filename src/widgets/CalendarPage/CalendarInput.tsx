import { useState, useRef } from "react";
import { YearInput } from "../../shared/styles/CalendarStyles";
import { useAppDispatch, useAppSelector } from "../../shared/store/hooks";
import { newSelectedYear } from "../../shared/store/reducers/notesReducer";

export default function CalendarInput() {
  const reduxYear = useAppSelector((state) => state.notes.selectedYear);

  const [yearInputValue, setYearInputValue] = useState<string>(
    reduxYear.toString()
  );
  const thisYear: number = new Date().getFullYear();
  const yearInputRef: any = useRef();

  const dispatch = useAppDispatch();

  function onKeyDownHandler(key: string) {
    if (Number.isInteger(parseInt(key)) && yearInputValue.length <= 3) {
      setYearInputValue((prev) => prev + key);
    } else if (key === "Backspace") {
      setYearInputValue((prev) => prev.slice(0, prev.length - 1));
    } else if (key === "Enter") {
      if (
        yearInputValue.length === 4 &&
        parseInt(yearInputValue) > 1900 &&
        parseInt(yearInputValue) < 2100
      ) {
        dispatch(newSelectedYear(parseInt(yearInputValue)));
      } else {
        setYearInputValue(thisYear.toString());
        dispatch(newSelectedYear(thisYear));
      }

      yearInputRef.current.blur();
    }
  }

  return (
    <YearInput
      ref={yearInputRef}
      type="text"
      value={yearInputValue}
      onKeyDown={(e) => onKeyDownHandler(e.key)}
    />
  );
}
