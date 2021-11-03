import React, { createContext, useReducer, useContext, useEffect } from "react";
import { monthArray, TMonth, TYear, yearArray } from "./const";

const date = new Date();

const getYear = () =>
  yearArray.filter((item) => +item.title === date.getFullYear())[0];

interface IGetValue {
  day: number;
  month: TMonth;
  year: TYear;
  enableTime: boolean;
  hours: number;
  minutes: number;
}

const getValue = ({ day, month, year, enableTime, hours, minutes }: IGetValue): string => {
  const strDay = day < 10 ? '0' + day : day
  const strMonth = month.id > 9 ? month.id : `0${month.id}`;
  const sthHour = hours < 10 ? '0' + hours : hours
  const strMinutes = minutes < 10 ? '0' + minutes : minutes
  return `${strDay}.${strMonth}.${year.title}${enableTime ? " " + sthHour + ":" + strMinutes : ""
    }`;
};

const getNewMatch = (fullDate: string): boolean => {
  const yearRegex = /^\d{1,2}\.\d{1,2}\.\d{4}$/;
  const fullRegex = /^\d{1,2}\.\d{1,2}\.\d{4}\s\d{1,2}:\d{1,2}$/;
  if(fullDate.match(yearRegex) || fullDate.match(fullRegex)){
    return true
  }
  return false;
};

export interface IState {
  showCalendar: boolean;
  showMonth: boolean;
  showYear: boolean;
  year: TYear;
  month: TMonth;
  day: number;
  enableTime: boolean;
  hours: number;
  minutes: number;
  fullDate: string;
  matchFullDate: boolean;
}

const initYear = getYear()
const initMonth = monthArray[date.getMonth()];
const initDay = date.getDate();
const initHour = date.getHours();
const initMinutes = date.getMinutes();

export const initialState = {
  showCalendar: false,
  showMonth: false,
  showYear: false,
  year: initYear,
  month: initMonth,
  day: initDay,
  enableTime: false,
  hours: initHour,
  minutes: initMinutes,
  fullDate: "",
  matchFullDate: true,
};

type Action = {type: "SHOW_CALENDAR"}
| {type: "SHOW_MONTH"}
| {type: "SHOW_YEAR"}
| {type: "HIDE_CALENDAR"}
| {type: "SET_YEAR", year: TYear}
| {type: "NEXT_YEAR", year?: TYear}
| {type: "PREV_YEAR", year?: TYear}
| {type: "SET_MONTH", month: TMonth}
| {type: "SET_DAY", day: number}
| {type: "ENABLE_TIME"}
| {type: "DISABLE_TIME"}
| {type: "SET_TIME", hours: number, minutes: number}
| {type: "SET_FULL_DATE", fullDate: string}
| {type: "UPDATE_FULL_DATE"}


export const reducer = (state: IState, action: Action) => {
  switch (action.type) {
    case "SHOW_CALENDAR":
      return { ...state, showCalendar: true };
    case "SHOW_MONTH":
      return { ...state, showMonth: true };
    case "SHOW_YEAR":
      return { ...state, showYear: true };
    case "HIDE_CALENDAR":
      const newValue = getValue(state)
      const newMatch = getNewMatch(newValue)
      return { ...state, fullDate: newValue, showCalendar: false, matchFullDate: newMatch, };
    case "SET_YEAR":
      return { ...state, showYear: false, year: action.year };
    case "NEXT_YEAR":
      return action.year ? { ...state, year: action.year } : state;
    case "PREV_YEAR":
      return action.year ? { ...state, year: action.year } : state;
    case "SET_MONTH":
      return { ...state, showMonth: false, month: action.month };
    case "SET_DAY":
      return { ...state, day: action.day };
    case "ENABLE_TIME":
      return { ...state, enableTime: true };
    case "DISABLE_TIME":
      return { ...state, enableTime: false };
    case "SET_TIME":
      return {
        ...state,
        hours: action.hours,
        minutes: action.minutes,
      };
    case "SET_FULL_DATE":
      return {
        ...state,
        fullDate: action.fullDate,
        matchFullDate: getNewMatch(action.fullDate),
      };
    case "UPDATE_FULL_DATE":
      return {
        ...state,
        fullDate: getValue(state),
      };
    default:
      return state;
  }
};

interface IContext {
  state: IState;
  dispatch: (props: Action) => void;
}

interface IContext {
  state: IState;
  dispatch: (props: Action) => void;
}

export const DatePickerContext = createContext<IContext>({} as IContext);

export default function DatePickerProvider({ children, setDate }: { children: JSX.Element, setDate: (props: string) => void; }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if(state.fullDate !== ''){
      setDate(state.fullDate)
    }
  }, [state.fullDate, setDate])
  
  return (
    <DatePickerContext.Provider value={{ state, dispatch }}>
      {children}
    </DatePickerContext.Provider>
  );
}

export const useCustomContext = () => useContext(DatePickerContext);