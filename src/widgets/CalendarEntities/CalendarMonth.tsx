import { shortMonthNames } from "../../shared/helpers/calendarHelpers";
import { CalendarMonthProps } from "../../shared/models/props/CalendarProps";
import { Days, Month, MonthName } from "../../shared/styles/CalendarStyles";
import CalendarDay from "./CalendarDay";

export default function CalendarMonth({
  month,
  monthIndex,
}: CalendarMonthProps) {
  return (
    <Month key={monthIndex}>
      <MonthName>{shortMonthNames[monthIndex]}</MonthName>

      <Days>
        {month.map((day) => (
          <CalendarDay key={day} month={monthIndex} day={day} />
        ))}
      </Days>
    </Month>
  );
}
