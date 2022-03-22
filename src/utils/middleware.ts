import { Action, IState } from "..";
import { InitProps } from "../types";
import { dateToIso, dateToString } from "./dateToString";

export const middlewareMutation = (
  state: IState,
  action: Action,
  initialState: InitProps,
): Action => {
  switch (action.type) {
    case "SET_DAY":
      const { month, year } = isChangeMonth(state, action.month);

      const valueOfDate = dateToString(state.format, {
        ...state,
        month,
        year,
        day: action.day,
      });
      if (typeof initialState.onSelectDate === "function") {
        initialState.onSelectDate(dateToIso({ ...state, day: action.day }));
      }
      return {
        type: "SET_DAY_WITH_VALUE",
        day: action.day,
        valueOfDate,
        month,
        year,
      };

    default:
      return {} as Action;
  }
};

const isChangeMonth = (state: IState, dirMonth?: "next" | "prev") => {
  let month = state.month;
  let year = state.year;
  if (dirMonth === "next") {
    month = month === 11 ? 0 : month + 1;
    year = month === 11 ? year + 1 : year;
  }
  if (dirMonth === "prev") {
    month = month === 0 ? 11 : month - 1;
    year = month === 0 ? year - 1 : year;
  }
  return { month, year };
};
