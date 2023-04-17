import {
  getDateString,
  monthNames,
} from "../../shared/helpers/calendarHelpers";
import { CalendarNotesListProps } from "../../shared/models/props/CalendarProps";
import { INote } from "../../shared/models/types";
import { useAppDispatch } from "../../shared/store/hooks";
import {
  newModalState,
  openModal,
} from "../../shared/store/reducers/modalNoteReducer";
import { CalendarNoteCard } from "../../shared/styles/CalendarStyles";

export default function CalendarNotesList({
  filteredNotes,
}: CalendarNotesListProps) {
  const dispatch = useAppDispatch();

  function clickHandler(noteObject: INote) {
    dispatch(
      newModalState({
        id: noteObject.id,
        name: noteObject.name,
        checkbox: noteObject.checkbox,
        text: noteObject.text,
        dateString: getDateString(2023, noteObject.month, noteObject.day),
      })
    );

    dispatch(openModal());
  }

  return (
    <div>
      {filteredNotes.map((note) => (
        <CalendarNoteCard onClick={() => clickHandler(note)}>
          <div style={{ color: "#dc611b" }}>{note.year}</div>
          {monthNames[note.month]}, {note.day} - {note.name}
        </CalendarNoteCard>
      ))}
    </div>
  );
}
