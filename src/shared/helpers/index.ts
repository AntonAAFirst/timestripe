import { Day } from "./../styles/CalendarStyles";
import Cookies from "js-cookie";
import { DayNote, INote, cookieUserId } from "../models/types";

export function getRandomBigInt() {
  return Math.floor(Math.random() * 1000000);
}

export function getIntUserId(): number {
  return parseInt(Cookies.get(cookieUserId) as string);
}

export function getNoteTemplate(
  year: number,
  month: number,
  day: number
): INote {
  return {
    id: getRandomBigInt(),
    name: "Note must have a name",
    checkbox: false,
    text: [],
    year: year,
    month: month,
    day: day,
    noteType: DayNote,
  };
}
