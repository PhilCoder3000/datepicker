type DateObj = {
  year: number;
  month: number;
  day: number;
  hours: number | string;
  minutes: number | string;
  [key: string]: any;
};

export const dateToString = (format: string, date: DateObj): string => {
  return format
    .replace("YYYY", `${date.year}`)
    .replace("YY", `${date.year}`.slice(-2))
    .replace("MM", `0${date.month + 1}`.slice(-2))
    .replace("DD", `0${date.day}`.slice(-2))
    .replace("hh", `0${date.hours}`.slice(-2))
    .replace("mm", `0${date.minutes}`.slice(-2));
};

export const dateToIso = ({year, month, day, hours, minutes}: DateObj) => {
  return new Date(year, month, day, +hours, +minutes).toISOString()
}