import { useAppDispatch, useAppSelector } from "../shared/store/hooks";
import { getUsers, updateNotes } from "../shared/http";
import { useEffect, useState } from "react";
import { newReduxNotes } from "../shared/store/reducers/notesReducer";
import { getIntUserId } from "../shared/helpers";
import { Loader } from "../shared/styles/LoaderStyles";
import { INote, IUser } from "../shared/models/types";
import { CalendarPageContainer } from "../shared/styles/LayoutStyle";
import CalendarNotesList from "../widgets/CalendarPage/CalendarNotesList";
import CalendarInput from "../widgets/CalendarPage/CalendarInput";
import Calendar from "../widgets/CalendarEntities/Calendar";
import CalendarFilterOptions from "../widgets/CalendarPage/CalendarFilterOptions";

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

  useEffect(() => {
    if (!isLoading) {
      setFilteredNotes(notes.filter((note, i) => i !== 0));
    }
  }, [isLoading]);

  const [filteredNotes, setFilteredNotes] = useState<INote[]>([]);

  return (
    <CalendarPageContainer>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CalendarInput />
          <Calendar />
          <CalendarFilterOptions
            filteringNotes={filteredNotes}
            setFilteringNotes={setFilteredNotes}
          />
          <CalendarNotesList filteredNotes={filteredNotes} />
        </>
      )}
    </CalendarPageContainer>
  );
}
