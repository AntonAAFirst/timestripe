import { useRef } from "react";
import { useState, useEffect } from "react";
import trashIcon from "../../shared/images/trash.png";
import deleteIcon from "../../shared/images/deleteIcon.png";
import "../../shared/styles/modal.css";
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
} from "../../shared/styles/modalNoteStyles";

export default function ModalNote() {
  const textareaRef: any = useRef();
  const modalNote: any = useRef();

  const [text, setText] = useState<string>("");

  useEffect(() => {
    if (textareaRef.current !== null) {
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
      modalNote.current.style.height = scrollHeight + 300 + "px";
    }
  }, [text]);

  return (
    <ModalNoteContainer>
      <ModalNoteContent ref={modalNote}>
        <ModalNoteHeader>Note details</ModalNoteHeader>
        <ModalNoteDeleteIconContainer data-tooltip="Save and close - ESC">
          <ModalNoteDeleteIcon src={deleteIcon} />
        </ModalNoteDeleteIconContainer>
        <ModalNoteDate>April 15, 2023</ModalNoteDate>
        <ModalNoteCheckbox type="checkbox" />
        <ModalNoteTitleInput type="text" placeholder="Title" />
        <ModalNoteTextInput
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Notes and thoughts"
          ref={textareaRef}
        />
        <ModalNoteFooterContainer>
          <ModalNoteFooter>
            <ModalNoteFooterOKButton />
            <img
              src={trashIcon}
              alt=""
              style={{
                width: "30px",
                position: "absolute",
                top: "10px",
                left: "12px",
              }}
            />
          </ModalNoteFooter>
        </ModalNoteFooterContainer>
      </ModalNoteContent>
    </ModalNoteContainer>
  );
}
