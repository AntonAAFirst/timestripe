import { INote } from "../types";

export interface CalendarNotesListProps {
  filteredNotes: INote[];
}

export interface CalendarFilterOptionsProps {
  filteringNotes: INote[];
  setFilteringNotes: Function;
}

export interface CalendarNoteCardItemProps {
  note: INote;
}

export interface CalendarMonthProps {
  month: number[];
  monthIndex: number;
}

export interface CalendarDayProps {
  month: number;
  day: number;
}
