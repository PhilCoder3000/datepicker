import { useContext, useCallback, useReducer } from "react";
import { DatePickerContext } from "../store/Context";
import { Action, InitProps, IState, MiddlewareFunc, MiddlewareFuncMutation } from "../types";
import { dateToString } from "../utils/dateToString";

export const useCustomContext = () => useContext(DatePickerContext);

export const useReducerWithMiddleware = (
  reducer: (state: IState, action: Action) => IState,
  initialState: InitProps,
) => {
  const init = useCallback(
    ({
      value,
      format = "DD.MM.YYYY hh:mm",
      isShowTime = false,
    }: InitProps) => {
      const date = new Date(value || Date.now());

      const dateObj = {
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate(),
        hours: date.getHours(),
        minutes: date.getMinutes(),
      };

      return {
        ...dateObj,
        format,
        valueOfDate: dateToString(format, dateObj),
        isShowCalendar: false,
        isShowTime,
      };
    },
    [],
  );

  const [state, dispatch] = useReducer(reducer, initialState, init);

  const dispatchBeforeMiddleware = (
    action: Action,
    middlewareFns: MiddlewareFunc,
  ) => {
    middlewareFns(state, action, initialState);
    dispatch(action);
  };

  const dispatchAfterMiddleware = (
    action: Action,
    middlewareFns: MiddlewareFunc,
  ) => {
    dispatch(action);
    middlewareFns(state, action, initialState);
  };

  const dispatchMutationMiddleware = (
    action: Action,
    middlewareFns: MiddlewareFuncMutation,
  ) => {
    dispatch(middlewareFns(state, action, initialState));
  };

  return {
    state,
    dispatch,
    dispatchBeforeMiddleware,
    dispatchAfterMiddleware,
    dispatchMutationMiddleware,
  };
};
