import { getYearArray } from "../../shared/helpers/calendarHelpers";
import { useAppSelector } from "../../shared/store/hooks";
import { CalendarContainer } from "../../shared/styles/CalendarStyles";
import CalendarMonth from "./CalendarMonth";

export default function Calendar() {
  const year = useAppSelector((state) => state.notes.selectedYear);
  const yearArray = getYearArray(year);

  return (
    <CalendarContainer>
      {yearArray.map((month, monthIndex) => (
        <CalendarMonth key={monthIndex} month={month} monthIndex={monthIndex} />
      ))}
    </CalendarContainer>
  );
}
