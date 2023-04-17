import { DayStyledProps } from "../models/styles/CalendarSlyledProps";
import styled from "styled-components";

const date = new Date();
const nowYear = date.getFullYear();
const nowMonth = date.getMonth();
const nowDay = date.getDate();

export const CalendarContainer = styled.div`
  width: max-content;
  height: max-content;
  padding-top: 50px;
  padding-bottom: 70px;
  margin: 0 auto;
  // border: 2px solid blue;
`;

export const Days = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Month = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
`;

export const MonthName = styled.div`
  color: white;
  font-family: "Inter";
  font-size: 14px;
  font-weight: 700;
`;

export const DayContainer = styled.div<DayStyledProps>`
  font-family: "Inter";
  font-size: 13px;
  font-weight: 700;
  width: 25px;
  height: 20px;
  border-radius: 50%;
  position: relative;
  &:after {
    font-family: "Inter";
    position: absolute;
    top: 40%;
    right: 0;
    width: 80px;
    content: "";
    height: 2px;
    background: ${(props) =>
      props.year < nowYear
        ? "white"
        : props.year > nowYear
        ? "transparent"
        : props.month < nowMonth
        ? "white"
        : props.month === nowMonth && props.day < nowDay
        ? "white"
        : "transparent"};
  }
`;

export const Day = styled.div<DayStyledProps>`
  position: relative;
  border-radius: 50%;
  height: 100%;
  z-index: 200;
  text-align: center;
  &:hover {
    color: ${(props) =>
      props.year === nowYear && props.month === nowMonth && props.day === nowDay
        ? "red"
        : "black"};
    background-color: white;
    cursor: pointer;
  }
  background-color: ${(props) =>
    props.active === true ? "white" : "transparent"};
  color: ${(props) =>
    props.year === nowYear && props.month === nowMonth && props.day === nowDay
      ? "red"
      : props.active
      ? "black"
      : "white"};
`;

export const YearInput = styled.input`
  font-size: 28px;
  font-family: Inter;
  border: 0;
  border-bottom: 2px solid lightgray;
  width: 70px;
  margin: auto auto;
  background-color: transparent;
  color: white;
  &:focus {
    outline: 0;
  }
`;

export const CalendarNoteCard = styled.div`
  border-bottom: 2px solid lightgray;
  font-family: "Inter";
  color: white;
  padding: 16px;
  display: grid;
  cursor: pointer;
  grid-template-columns: 50px 1fr;
  width: 100%;

  &:hover {
    background-color: rgba(0, 0, 0, 0.25);
  }
`;

export const CalendarNotesListContainer = styled.div`
  width: max-content;
  margin: 100px auto;
`;

export const CalendarLogoutIcon = styled.img`
  position: absolute;
  width: 30px;
  right: 15px;
  top: 15px;
  cursor: pointer;
`;
