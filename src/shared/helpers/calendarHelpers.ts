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
