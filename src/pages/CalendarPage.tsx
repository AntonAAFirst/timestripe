import { useAppDispatch, useAppSelector } from "../shared/store/hooks";
import { getUsers, updateNotes } from "../shared/http";
import { useEffect, useState } from "react";
import { newReduxNotes } from "../shared/store/reducers/notesReducer";
import { getIntUserId } from "../shared/helpers";
import { Loader } from "../shared/styles/LoaderStyles";
import { IUser } from "../shared/models/types";
import CalendarNotesList from "../widgets/Calendar/CalendarNotesList";
import CalendarInput from "../widgets/Calendar/CalendarInput";
import Calendar from "../widgets/Calendar/Calendar";
import CalendarFilterOptions from "../widgets/Calendar/CalendarFilterOptions";
import { CalendarPageContainer } from "../shared/styles/LayoutStyle";

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
    <CalendarPageContainer>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CalendarInput year={thisYear} setYear={setThisYear} />
          <Calendar year={thisYear} />
          <CalendarFilterOptions />
          {/* <CalendarNotesList filteredNotes={notes} /> */}
        </>
      )}
    </CalendarPageContainer>
  );
}
