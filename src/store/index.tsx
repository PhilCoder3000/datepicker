import React, { createContext, useReducer, useContext, useEffect } from "react";

interface IState {
  year: number;
  visibleYear: number;
  month: number;
  visibleMonth: number;
  day: number;
  hours: number | string;
  minutes: number | string;
  isShowCalendar: boolean;
  isReturnedDate: boolean;
  isSelectedDate: boolean;
}

const initialState = {
  year: new Date().getFullYear(),
  visibleYear: new Date().getFullYear(),
  month: new Date().getMonth(),
  visibleMonth: new Date().getMonth(),
  day: new Date().getDate(),
  hours: new Date().getHours(),
  minutes: new Date().getMinutes(),
  isShowCalendar: false,
  isReturnedDate: true,
  isSelectedDate: false,
};

type Action =
  | { type: "SET_YEAR"; year: number }
  | { type: "SET_MONTH"; month: number }
  | { type: "PREV_MONTH" }
  | { type: "NEXT_MONTH" }
  | { type: "SET_DAY"; day: number }
  | { type: "SET_HOURS"; hours: number | string }
  | { type: "SET_MINUTES"; minutes: number | string }
  | { type: "SET_IS_SHOW_CALENDAR"; isShow: boolean }
  | { type: "SET_IS_RETURNED_DATE"; value: boolean }
  | { type: "SET_IS_SELECTED_DATE"; value: boolean };

const reducer = (state: IState, action: Action) => {
  switch (action.type) {
    case "SET_YEAR":
      return { ...state, year: action.year };
    case "SET_MONTH":
      return { ...state, month: action.month };
    case "PREV_MONTH":
      if (state.month === 0) {
        return { ...state, month: 11, year: state.year - 1 };
      }
      return { ...state, month: state.month - 1 };
    case "NEXT_MONTH":
      if (state.month === 11) {
        return { ...state, month: 0, year: state.year + 1 };
      }
      return { ...state, month: state.month + 1 };
    case "SET_DAY":
      return {
        ...state,
        day: action.day,
        visibleMonth: state.month,
        visibleYear: state.year,
        isReturnedDate: false,
        isShowCalendar: false,
        isSelectedDate: true,
      };
    case "SET_HOURS":
      return { ...state, hours: action.hours };
    case "SET_MINUTES":
      return { ...state, minutes: action.minutes };
    case "SET_IS_SHOW_CALENDAR":
      return { ...state, isShowCalendar: action.isShow };
    case "SET_IS_RETURNED_DATE":
      return { ...state, isReturnedDate: action.value };
    case "SET_IS_SELECTED_DATE":
      return { ...state, isSelectedDate: action.value, isReturnedDate: false };
    default:
      return state;
  }
};

interface IContext {
  state: IState;
  dispatch: (props: Action) => void;
}

const DatePickerContext = createContext<IContext>({} as IContext);

export default function DatePickerProvider({
  children,
  onChangeDate,
}: {
  children: JSX.Element;
  onChangeDate: (props: number) => void;
}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (!state.isReturnedDate) {
      const day = state.day < 10 ? `0${state.day}` : `${state.day}`;
      const month =
        state.month + 1 < 10 ? `0${state.month + 1}` : `${state.month + 1}`;
      const hours = state.hours < 10 ? `0${state.hours}` : `${state.hours}`;
      const minutes =
        state.minutes < 10 ? `0${state.minutes}` : `${state.minutes}`;
      const date = new Date(
        `${state.year}-${month}-${day}T${hours}:${minutes}`,
      );
      onChangeDate(date.getTime());
      dispatch({ type: "SET_IS_RETURNED_DATE", value: true });
    }
  }, [
    onChangeDate,
    state.day,
    state.isReturnedDate,
    state.month,
    state.year,
    state.hours,
    state.minutes,
  ]);

  return (
    <DatePickerContext.Provider value={{ state, dispatch }}>
      {children}
    </DatePickerContext.Provider>
  );
}

export const useCustomContext = () => useContext(DatePickerContext);
