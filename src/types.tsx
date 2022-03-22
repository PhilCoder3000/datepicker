export interface InitProps {
  onSelectDate?: (props: string) => void;
  onSelectDateISO?: (date: string) => void;
  value?: string;
  format?: string;
  isShowTime?: boolean;
}

export interface IDatePickerProps extends InitProps {
  fieldWidth?: string;
}

export interface IDatePickerProviderProps extends InitProps {
  children: JSX.Element;
}

export type MiddlewareFunc = (
  state: IState,
  action: Action,
  initialState: InitProps,
) => void;

export type MiddlewareFuncMutation = (
  state: IState,
  action: Action,
  initialState: InitProps,
) => Action;

export interface IContext {
  state: IState;
  dispatch: (act: Action) => void;
  dispatchBeforeMiddleware: (act: Action, middleware: MiddlewareFunc) => void;
  dispatchAfterMiddleware: (act: Action, middleware: MiddlewareFunc) => void;
  dispatchMutationMiddleware: (
    act: Action,
    middleware: MiddlewareFuncMutation,
  ) => void;
}

export interface IState {
  year: number;
  month: number;
  day: number;
  hours: number | string;
  minutes: number | string;
  format: string;
  valueOfDate: string;
  isShowTime: boolean;
  isShowCalendar: boolean;
}

export type Action =
  | { type: "SET_YEAR"; year: number }
  | { type: "SET_MONTH"; month: number }
  | { type: "PREV_MONTH" }
  | { type: "NEXT_MONTH" }
  | { type: "SET_DAY"; day: number; month?: "next" | "prev" }
  | {
      type: "SET_DAY_WITH_VALUE";
      day: number;
      valueOfDate: string;
      month: number;
      year: number;
    }
  | { type: "SET_HOURS"; hours: number | string }
  | { type: "SET_MINUTES"; minutes: number | string }
  | { type: "SET_IS_SHOW_CALENDAR"; isShow: boolean };
