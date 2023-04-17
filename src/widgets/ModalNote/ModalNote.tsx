import { useRef } from "react";
import { useState, useEffect } from "react";
import trashIcon from "../../shared/images/trashIcon.png";
import deleteIcon from "../../shared/images/deleteIcon.png";
import {
  ModalNoteContent,
  ModalNoteContainer,
  ModalNoteHeader,
  ModalNoteDate,
  ModalNoteCheckbox,
  ModalNoteTitleInput,
  ModalNoteTextInput,
  ModalNoteFooterContainer,
  ModalNoteFooter,
  ModalNoteFooterOKButton,
  ModalNoteDeleteIcon,
  ModalNoteDeleteIconContainer,
  ModalNoteFooterTrashIcon,
} from "../../shared/styles/ModalNoteStyles";
import { useAppDispatch, useAppSelector } from "../../shared/store/hooks";
import { closeModal } from "../../shared/store/reducers/modalNoteReducer";
import { newReduxNotes } from "../../shared/store/reducers/notesReducer";
import { INote } from "../../shared/models/types";
import { updateNotes } from "../../shared/http";

export default function ModalNote() {
  const textareaRef: any = useRef();
  const modalNote: any = useRef();

  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [checkbox, setCheckBox] = useState<boolean>(false);

  const reduxNotes = useAppSelector((state) => state.notes.notes);

  const reduxModalActive = useAppSelector((state) => state.modalNote.active);
  const reduxName = useAppSelector((state) => state.modalNote.name);
  const reduxText = useAppSelector((state) => state.modalNote.text);
  const reduxCheckbox = useAppSelector((state) => state.modalNote.checkbox);
  const reduxId = useAppSelector((state) => state.modalNote.id);
  const reduxDateString = useAppSelector((state) => state.modalNote.dateString);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (textareaRef.current !== null) {
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
      modalNote.current.style.height = scrollHeight + 300 + "px";
    }
  }, [text]);

  useEffect(() => {
    setTitle(reduxName);
    setText(reduxText.join("\n"));
    setCheckBox(reduxCheckbox);
  }, [reduxModalActive]);

  function saveToRedux() {
    let newNotes = [...reduxNotes];
    const noteIndex: number = reduxNotes.findIndex(
      (note) => note.id === reduxId
    );

    let newNoteObject: INote = { ...newNotes[noteIndex] };

    newNotes = newNotes.filter((note) => note.id !== reduxId);

    newNoteObject.name = title;
    newNoteObject.text = text.split("\n");
    newNoteObject.checkbox = checkbox;

    newNotes.push(newNoteObject);
    dispatch(newReduxNotes(newNotes));
  }

  function buttonOkHandler() {
    saveToRedux();
    dispatch(closeModal());
  }

  function titleInputHanlder(text: string) {
    if (title.length < 60) {
      setTitle(text);
    }
  }

  function titleInputKeyDownHandler(key: string) {
    if (key === "Backspace" && title.length === 60) {
      setTitle((prev) => prev.slice(0, prev.length - 1));
    }
  }

  function deleteNote() {
    const newNotes: INote[] = reduxNotes.filter((note) => note.id !== reduxId);
    updateNotes(newNotes);
    dispatch(newReduxNotes(newNotes));
    dispatch(closeModal());
  }

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      saveToRedux();
      dispatch(closeModal());
    }
  });

  return (
    <ModalNoteContainer active={reduxModalActive}>
      <ModalNoteContent ref={modalNote}>
        <ModalNoteHeader>Note details</ModalNoteHeader>
        <ModalNoteDeleteIconContainer data-tooltip="Save and close - ESC">
          <ModalNoteDeleteIcon src={deleteIcon} />
        </ModalNoteDeleteIconContainer>
        <ModalNoteDate>{reduxDateString}</ModalNoteDate>
        <ModalNoteCheckbox
          type="checkbox"
          checked={checkbox}
          onChange={() => setCheckBox((prev) => !prev)}
        />
        <ModalNoteTitleInput
          value={title}
          onChange={(e) => titleInputHanlder(e.target.value)}
          onKeyDown={(e) => titleInputKeyDownHandler(e.code)}
          type="text"
          placeholder="Title"
        />
        <ModalNoteTextInput
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Notes and thoughts"
          ref={textareaRef}
        />
        <ModalNoteFooterContainer>
          <ModalNoteFooter>
            <ModalNoteFooterOKButton onClick={buttonOkHandler} />
            <ModalNoteFooterTrashIcon
              onClick={deleteNote}
              src={trashIcon}
              alt=""
            />
          </ModalNoteFooter>
        </ModalNoteFooterContainer>
      </ModalNoteContent>
    </ModalNoteContainer>
  );
}
