import CalendarNoteCardItem from "./CalendarNoteCardItem";
import { CalendarNotesListProps } from "../../shared/models/props/CalendarProps";
import { CalendarNotesListContainer } from "../../shared/styles/CalendarStyles";

export default function CalendarNotesList({
  filteredNotes,
}: CalendarNotesListProps) {
  return (
    <CalendarNotesListContainer>
      {filteredNotes.map((note) => (
        <CalendarNoteCardItem key={note.day} note={note} />
      ))}
    </CalendarNotesListContainer>
  );
}
