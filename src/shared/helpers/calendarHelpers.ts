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

export function getDayType(year: number, month: number, day: number) {}
