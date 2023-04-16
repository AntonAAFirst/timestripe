import { addNoteToFirebase, getUsers, updateNotes } from "../shared/http";
import { useEffect, useState } from "react";
import { DayNote, INote, IUser, cookieUserId } from "../shared/models/types";
import Calendar from "../widgets/Calendar/Calendar";
import Cookies from "js-cookie";
import { getIntUserId } from "../shared/helpers";
import { useAppDispatch, useAppSelector } from "../shared/store/hooks";
import { newReduxNotes } from "../shared/store/reducers/notesReducer";

export default function CalendarPage() {
  const userId: number = parseInt(Cookies.get(cookieUserId) as string);
  const note: INote = {
    id: userId,
    name: "name",
    text: ["text is simple example"],
    checkbox: false,
    year: 2014,
    month: 5,
    day: 21,
    noteType: DayNote,
  };

  const dispatch = useAppDispatch();

  async function getNotes() {
    const users: IUser[] = await getUsers();

    for (let user in users) {
      if (users[user].id === getIntUserId()) {
        dispatch(newReduxNotes(users[user].notes));
      }
    }
  }

  const notes = useAppSelector((state) => state.notes.notes);

  const modalActive = useAppSelector((state) => state.modalNote.active);

  useEffect(() => {
    getNotes();
  }, []);

  useEffect(() => {
    if (modalActive === !false) {
      updateNotes(notes);
    }
  }, [modalActive]);

  return (
    <div style={{ backgroundColor: "#202021", minHeight: "100vh" }}>
      <div onClick={() => console.log("i am - ", notes)}>calendar page!!!</div>
      <Calendar />
    </div>
  );
}
