import { useAppDispatch, useAppSelector } from "../shared/store/hooks";
import { getUsers, updateNotes } from "../shared/http";
import { useEffect } from "react";
import { newReduxNotes } from "../shared/store/reducers/notesReducer";
import { getIntUserId } from "../shared/helpers";
import { CalendarPageContainer } from "../shared/styles/LayoutStyle";
import { IUser, cookieUserId } from "../shared/models/types";
import {
  CalendarLogoutIcon,
  ClickMeLabel,
} from "../shared/styles/CalendarStyles";
import { Loader } from "../shared/styles/LoaderStyles";
import { Link } from "react-router-dom";
import CalendarNotesList from "../widgets/CalendarPage/CalendarNotesList";
import CalendarInput from "../widgets/CalendarPage/CalendarInput";
import Calendar from "../widgets/CalendarEntities/Calendar";
import CalendarFilterOptions from "../widgets/CalendarPage/CalendarFilterOptions";
import logoutIcon from "../shared/images/logoutIcon.png";
import Cookies from "js-cookie";

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
    }, 1500);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        updateNotes(notes);
      }, 1000);
    }
  }, [modalActive]);

  function logout() {
    Cookies.remove(cookieUserId);
  }

  return (
    <CalendarPageContainer>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Link to="../">
            <CalendarLogoutIcon onClick={logout} src={logoutIcon} />
          </Link>
          <ClickMeLabel />
          <CalendarInput />
          <Calendar />
          <CalendarFilterOptions />
          <CalendarNotesList />
        </>
      )}
    </CalendarPageContainer>
  );
}
