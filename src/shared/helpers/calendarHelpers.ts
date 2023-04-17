import { INote, SortingTypes } from "../models/types";

export function getMonthArray(day: number): number[] {
  let monthArray: number[] = [];

  for (let i = 0; i < day; i++) {
    monthArray.push(i + 1);
  }

  return monthArray;
}

export function getYearArray(year: number) {
  const yearArray = [
    getMonthArray(31),
    getMonthArray(year % 4 === 0 ? 29 : 28),
    getMonthArray(31),
    getMonthArray(30),
    getMonthArray(31),
    getMonthArray(30),
    getMonthArray(31),
    getMonthArray(30),
    getMonthArray(30),
    getMonthArray(31),
    getMonthArray(30),
    getMonthArray(31),
  ];

  return yearArray;
}

export const shortMonthNames: string[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const monthNames: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "Jule",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function getDateString(
  year: number,
  month?: number,
  day?: number
): string {
  return day !== undefined && month !== undefined
    ? `${monthNames[month]} ${day}, ${year}`
    : month !== undefined
    ? `${monthNames[month]} ${year}`
    : `${year}`;
}

export function GeneralDaysSorting(
  List: INote[],
  sortingType: SortingTypes
): INote[] {
  if (List.length <= 1) {
    return List;
  }

  const pivot = List[List.length - 1];
  const leftList = [];
  const rightList = [];

  for (let i = 0; i < List.length - 1; i++) {
    if (List[i].year > pivot.year) {
      leftList.push(List[i]);
    } else if (List[i].year === pivot.year) {
      if (List[i].month > pivot.month) {
        leftList.push(List[i]);
      } else if (List[i].month === pivot.month) {
        if (List[i].day > pivot.day) {
          leftList.push(List[i]);
        } else {
          rightList.push(List[i]);
        }
      } else {
        rightList.push(List[i]);
      }
    } else {
      rightList.push(List[i]);
    }
  }

  if (sortingType === SortingTypes.Ascending) {
    return [
      ...GeneralDaysSorting(leftList, sortingType),
      pivot,
      ...GeneralDaysSorting(rightList, sortingType),
    ];
  } else {
    return [
      ...GeneralDaysSorting(rightList, sortingType),
      pivot,
      ...GeneralDaysSorting(leftList, sortingType),
    ];
  }
}
