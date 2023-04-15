export const cookieUserId = "thisUserId";

export type IUser = {
  name: string;
  password: string;
  notes: any[];
  id: number;
};

export enum NoteType {
  DayNote,
  MonthNote,
  YearNote,
}

export type INote = {
  id: number;
  name: string;
  checkbox: boolean;
  text: string[];
};
