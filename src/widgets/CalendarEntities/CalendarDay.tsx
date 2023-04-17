import { getNoteTemplate } from "../../shared/helpers";
import { getDateString } from "../../shared/helpers/calendarHelpers";
import { CalendarDayProps } from "../../shared/models/props/CalendarProps";
import { INote } from "../../shared/models/types";
import { useAppDispatch, useAppSelector } from "../../shared/store/hooks";
import {
  newModalState,
  openModal,
} from "../../shared/store/reducers/modalNoteReducer";
import { newReduxNotes } from "../../shared/store/reducers/notesReducer";
import { Day, DayContainer } from "../../shared/styles/CalendarStyles";

export default function CalendarDay({ month, day }: CalendarDayProps) {
  const notes = useAppSelector((state) => state.notes.notes);

  const dispatch = useAppDispatch();

  const currentYear = useAppSelector((state) => state.notes.selectedYear);

  function dayClickHandler(month: number, day: number) {
    const noteIsThere =
      notes.findIndex((note) => note.month === month && note.day === day) !==
      -1;

    let foundObject: INote =
      notes[
        notes.findIndex(
          (note) =>
            note.day === day &&
            note.month === month &&
            note.year === currentYear
        )
      ];

    if (!noteIsThere) {
      foundObject = getNoteTemplate(currentYear, month, day);
      let newNotes = [...notes];
      newNotes.push(foundObject);

      dispatch(newReduxNotes(newNotes));
    }
    dispatch(
      newModalState({
        id: foundObject.id,
        name: foundObject.name,
        checkbox: foundObject.checkbox,
        text: foundObject.text,
        dateString: getDateString(currentYear, month, day),
      })
    );

    dispatch(openModal());
  }

  const dayActive: boolean =
    notes.findIndex(
      (note) =>
        note.month === month && note.day === day && note.year === currentYear
    ) !== -1;

  return (
    <DayContainer year={currentYear} month={month} day={day}>
      <Day
        onClick={() => dayClickHandler(month, day)}
        active={dayActive}
        year={currentYear}
        month={month}
        day={day}
      >
        {day}
      </Day>
    </DayContainer>
  );
}
