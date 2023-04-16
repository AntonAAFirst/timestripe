import { getUsers, updateNotes } from "../shared/http";
import { useEffect, useState } from "react";
import { IUser } from "../shared/models/types";
import Calendar from "../widgets/Calendar/Calendar";
import { getIntUserId } from "../shared/helpers";
import { useAppDispatch, useAppSelector } from "../shared/store/hooks";
import { newReduxNotes } from "../shared/store/reducers/notesReducer";
import { Loader } from "../shared/styles/LoaderStyles";
import CalendarInput from "../widgets/Calendar/CalendarInput";

export default function CalendarPage() {
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

  const isLoading = useAppSelector((state) => state.notes.isLoading);
  const modalActive = useAppSelector((state) => state.modalNote.active);

  useEffect(() => {
    setTimeout(() => {
      getNotes();
    }, 2000);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      updateNotes(notes);
    }
  }, [modalActive]);

  const [thisYear, setThisYear] = useState<number>(new Date().getFullYear());

  return (
    <div style={{ backgroundColor: "#202021", minHeight: "100vh" }}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CalendarInput year={thisYear} setYear={setThisYear} />
          <Calendar year={thisYear} />
        </>
      )}
    </div>
  );
}
