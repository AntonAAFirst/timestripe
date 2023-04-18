import { INote } from "../types";

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
