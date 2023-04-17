import { INote } from "../types";

export interface CalendarProps {
  year: number;
}

export interface CalendarNotesListProps {
  filteredNotes: INote[];
}
