import { CalendarInputStyledProps } from "../../shared/models/styles/CalendarSlyledProps";
import { useState, useRef } from "react";
import { YearInput } from "../../shared/styles/CalendarStyles";

export default function CalendarInput({
  year,
  setYear,
}: CalendarInputStyledProps) {
  const [yearInputValue, setYearInputValue] = useState<string>(year.toString());
  const thisYear: number = new Date().getFullYear();
  const yearInputRef: any = useRef();

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
        setYear(parseInt(yearInputValue));
      } else {
        setYearInputValue(thisYear.toString());
        setYear(thisYear);
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
