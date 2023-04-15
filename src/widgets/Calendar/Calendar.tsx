import {
  getYearArray,
  shortMonthNames,
} from "../../shared/helpers/calendarHelpers";
import {
  Day,
  DayContainer,
  Days,
  Month,
  MonthName,
} from "../../shared/styles/CalendarStyles";

export default function Calendar() {
  const year = getYearArray(2023);
  return (
    <div>
      {year.map((month, monthIndex) => (
        <Month>
          <MonthName>{shortMonthNames[monthIndex]}</MonthName>

          <Days>
            {month.map((day) => (
              <DayContainer year={2023} month={monthIndex} day={day}>
                <Day year={2023} month={monthIndex} day={day}>
                  {day}
                </Day>
              </DayContainer>
            ))}
          </Days>
        </Month>
      ))}
    </div>
  );
}
