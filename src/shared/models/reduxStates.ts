import { INote } from "./types";

export interface ModalNoteProps {
  id: number;
  name: string;
  text: string[];
  checkbox: boolean;
  dateString: string;
  active: boolean;
}

export interface NotesProps {
  notes: INote[];
  isLoading: boolean;
}
