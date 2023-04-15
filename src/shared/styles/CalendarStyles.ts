import styled from "styled-components";
import { DayStyledProps } from "../models/props/CalendarSlyledProps";

const date = new Date();
const nowYear = date.getFullYear();
const nowMonth = date.getMonth();
const nowDay = date.getDate();

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
  // border: 2px solid red;
`;

export const DayContainer = styled.div<DayStyledProps>`
  color: ${(props) =>
    props.year === nowYear && props.month === nowMonth && props.day === nowDay
      ? "red"
      : "white"};
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

// z-index: 24;
export const Day = styled.div<DayStyledProps>`
  position: relative;
  border-radius: 50%;
  height: 100%;
  text-align: center;
  &:hover {
    color: ${(props) =>
      props.year === nowYear && props.month === nowMonth && props.day === nowDay
        ? "red"
        : "black"};
    background-color: white;
    cursor: pointer;
  }
`;
