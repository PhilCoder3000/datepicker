import React, { createContext } from "react";
import { useReducerWithMiddleware } from "../hooks/useReducerMiddleware";
import { Action, IContext, IDatePickerProviderProps, IState } from "../types";

const reducer = (state: IState, action: Action) => {
  switch (action.type) {
    case "SET_YEAR":
      return {
        ...state,
        year: action.year,
      };
    case "SET_MONTH":
      return {
        ...state,
        month: action.month,
      };
    case "PREV_MONTH":
      return {
        ...state,
        month: state.month === 0 ? 11 : state.month - 1,
        year: state.month === 0 ? state.year - 1 : state.year,
      };
    case "NEXT_MONTH":
      return {
        ...state,
        month: state.month === 11 ? 0 : state.month + 1,
        year: state.month === 11 ? state.year + 1 : state.year,
      };
    case "SET_DAY_WITH_VALUE":
      return {
        ...state,
        day: action.day,
        month: action.month,
        year: action.year,
        valueOfDate: action.valueOfDate,
        isShowCalendar: false,
      };
    case "SET_HOURS":
      return { ...state, hours: action.hours };
    case "SET_MINUTES":
      return { ...state, minutes: action.minutes };
    case "SET_IS_SHOW_CALENDAR":
      return { ...state, isShowCalendar: action.isShow };
    default:
      return state;
  }
};

export const DatePickerContext = createContext<IContext>({} as IContext);

export function DatePickerProvider({
  children,
  ...props
}: IDatePickerProviderProps) {
  const context = useReducerWithMiddleware(reducer, props);

  return (
    <DatePickerContext.Provider
      value={context}
    >
      {children}
    </DatePickerContext.Provider>
  );
}
