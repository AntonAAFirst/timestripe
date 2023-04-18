import CalendarNoteCardItem from "./CalendarNoteCardItem";
import { CalendarNotesListContainer } from "../../shared/styles/CalendarStyles";
import { useAppSelector } from "../../shared/store/hooks";

export default function CalendarNotesList() {
  const filteredReduxNotes = useAppSelector(
    (state) => state.notes.filteredNotes
  );

  return (
    <CalendarNotesListContainer>
      {filteredReduxNotes.map((note) => (
        <CalendarNoteCardItem key={note.id} note={note} />
      ))}
    </CalendarNotesListContainer>
  );
}
