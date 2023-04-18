import styled from "styled-components";
import { ModalNoteContainerStyledProps } from "../models/styles/ModalNoteStyledProps";

export const ModalNoteContainer = styled.div<ModalNoteContainerStyledProps>`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  left: 0;
  display: grid;
  z-index: 300;
  height: 100%;
  overflow: auto;
  transform: ${(props) => (props.active ? "scale(1)" : "scale(0)")};
  transition: 0.5s;
`;

export const ModalNoteContent = styled.div`
  background-color: #202021;
  width: 800px;
  height: max-content;
  margin: 30px auto;
  border-radius: 12px;
  position: relative;
`;

export const ModalNoteHeader = styled.div`
  color: rgba(215, 216, 219, 0.7);
  font-family: "Inter";
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalNoteDate = styled.div`
  color: #dc611b;
  font-family: "Inter";
  font-size: 16px;
  position: absolute;
  left: 50px;
  top: 60px;
`;

export const ModalNoteCheckbox = styled.input`
  position: absolute;
  left: 20px;
  top: 120px;
`;

export const ModalNoteTitleInput = styled.input`
  position: absolute;
  left: 50px;
  top: 110px;
  font-size: 36px;
  background-color: transparent;
  border: 0;
  color: white;
  font-weight: 500;
  width: 700px;
  &:focus {
    outline: 0;
  }
`;

export const ModalNoteTextInput = styled.textarea`
  resize: none;
  position: absolute;
  left: 50px;
  top: 160px;
  width: 700px;
  height: max-content;
  overflow: auto;
  background-color: transparent;
  font-family: "Inter";
  color: white;
  font-size: 16px;
  border: 0;
  &:focus {
    outline: 0;
  }
`;

export const ModalNoteFooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid lightgray;
`;

export const ModalNoteFooter = styled.div`
  position: relative;
  height: 100%;
`;

export const ModalNoteFooterOKButton = styled.div`
  background-color: white;
  width: 60px;
  text-align: center;
  padding: 4px;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  font-family: "Inter";
  position: absolute;
  right: -20px;
  cursor: pointer;
  &:before {
    content: "ОК";
  }
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
`;

export const ModalNoteFooterTrashIcon = styled.img`
  width: max-content;
  height: 40px;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 30px;
  position: absolute;
  cursor: pointer;
`;

export const ModalNoteDeleteIconContainer = styled.div`
  width: 30px;
  right: 12px;
  position: absolute;
  top: 12px;
  cursor: pointer;
  
  &:hover:after {
     content: attr(data-tooltip);
    background-color: white;
    color: black;
    width: 150px;
    top: 25px;
    left: 80%;
    border-radius: 6px;
    font-family: "Inter";
    padding: 10px;
    position: absolute;
    cursor: pointer;
    font-size: 14px;
`;

export const ModalNoteDeleteIcon = styled.img`
  width: 100%;
  height: 100%;
`;
