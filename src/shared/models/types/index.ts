export const cookieUserId = "thisUserId";

export type IUser = {
  name: string;
  password: string;
  notes: any[];
  id: number;
};

export type INote = {
  id: number;
  name: string;
  checkbox: boolean;
  text: string[];
  year: number;
  month: number;
  day: number;
};

export type INoteModal = {
  id: number;
  name: string;
  text: string[];
  checkbox: boolean;
  dateString: string;
};

export enum SortingTypes {
  Descending,
  Ascending,
}
