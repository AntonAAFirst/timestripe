import { getRandomBigInt } from "../../shared/helpers";
import {
  getDateString,
  getYearArray,
  shortMonthNames,
} from "../../shared/helpers/calendarHelpers";
import { CalendarProps } from "../../shared/models/props/CalendarProps";
import { DayNote, INote } from "../../shared/models/types";
import { useAppDispatch, useAppSelector } from "../../shared/store/hooks";
import {
  newModalState,
  openModal,
} from "../../shared/store/reducers/modalNoteReducer";
import { newReduxNotes } from "../../shared/store/reducers/notesReducer";
import {
  CalendarContainer,
  Day,
  DayContainer,
  Days,
  Month,
  MonthName,
} from "../../shared/styles/CalendarStyles";

export default function Calendar({ year }: CalendarProps) {
  const notes = useAppSelector((state) => state.notes.notes);
  const yearArray = getYearArray(year);

  const dispatch = useAppDispatch();

  function dayClickHandler(month: number, day: number) {
    if (
      notes.findIndex((note) => note.month === month && note.day === day) === -1
    ) {
      const newNote: INote = {
        id: getRandomBigInt(),
        name: "Note must have a name",
        checkbox: false,
        text: [],
        year: 2023,
        month: month,
        day: day,
        noteType: DayNote,
      };

      let newNotes = [...notes];
      newNotes.push(newNote);
      dispatch(
        newModalState({
          id: newNote.id,
          name: "Note must have a name",
          checkbox: false,
          text: [],
          dateString: getDateString(newNote.year, newNote.month, newNote.day),
        })
      );
      dispatch(newReduxNotes(newNotes));
      dispatch(openModal());
    } else {
      const foundObject: INote =
        notes[
          notes.findIndex((note) => note.day === day && note.month === month)
        ];

      dispatch(
        newModalState({
          id: foundObject.id,
          name: foundObject.name,
          checkbox: foundObject.checkbox,
          text: foundObject.text,
          dateString: getDateString(year, month, day),
        })
      );

      dispatch(openModal());
    }
  }

  return (
    <CalendarContainer>
      {yearArray.map((month, monthIndex) => (
        <Month>
          <MonthName>{shortMonthNames[monthIndex]}</MonthName>

          <Days>
            {month.map((day) => (
              <DayContainer year={year} month={monthIndex} day={day}>
                <Day
                  onClick={() => dayClickHandler(monthIndex, day)}
                  active={
                    notes.findIndex(
                      (note) =>
                        note.month === monthIndex &&
                        note.day === day &&
                        note.year === year
                    ) !== -1
                  }
                  year={year}
                  month={monthIndex}
                  day={day}
                >
                  {day}
                </Day>
              </DayContainer>
            ))}
          </Days>
        </Month>
      ))}
    </CalendarContainer>
  );
}
