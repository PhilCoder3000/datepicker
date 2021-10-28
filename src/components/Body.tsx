import React from "react";
import BodyItem from "./body/BodyItem";
import { monthArray } from "../store/const";
import { BodyStyle } from "../styles";
import { IState, useCustomContext } from "../store/Context";

export default function Body() {
  const { state, dispatch } = useCustomContext();
  const dayArray = getDayArray(state);
  const setDay = (text: number, index: number) => {
    dispatch({
      type: "SET_DAY",
      day: text,
    });
    if (index !== 0) {
      dispatch({
        type: "SET_MONTH",
        month: monthArray[index - 1],
      });
    }
    dispatch({
      type: "HIDE_CALENDAR",
    });
  };
  return (
    <BodyStyle>
      {dayArray
      .map((item, index) => 
      (<BodyItem
        key={index}
        onClick={() => setDay(item.num, item.grey === 0
          ? 0
          : item.grey < 0
            ? state.month.id - 1
            : state.month.id + 1)}
        column={item.column}
        current={item.num === state.day}
        grey={item.grey}
      >
        {item.num}
      </BodyItem>))}
    </BodyStyle>
  );
}

type TDays = {
  num: number;
  column: number;
  grey: number;
}

const getDayArray = (state: IState) => {
  const count = getCountDaysInMonth(state.month.id, +state.year.title);
  let result: TDays[] = [];
  let startDaysOfWeek: number = -100;
  for (let i = 1; i <= count; i++) {
    const parse = Date.parse(`${state.year.title}-${state.month.id}-${i}`);
    let dayOfWeek = new Date(parse).getDay();
    dayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    if (startDaysOfWeek === -100) {
      startDaysOfWeek = dayOfWeek;
      result = result.concat(getPrevMonthDays(state, startDaysOfWeek));
    }
    result.push({ num: i, column: dayOfWeek, grey: 0 });
  }
  result = result.concat(
    getNextMonthDays(7 - ((count + startDaysOfWeek - 1) % 7))
  );
  return result;
};

const getPrevMonthDays = (state: IState, startDaysOfWeek: number) => {
  const countDaysPrevMonth = getCountDaysInMonth(
    state.month.id - 1,
    +state.year.title
  );
  const result: TDays[] = [];
  const fullMonth: number[] = [];
  if (startDaysOfWeek === 1) {
    return result;
  }
  for (let i = 1; i <= countDaysPrevMonth; i++) {
    fullMonth.push(i);
  }
  return result.concat(
    fullMonth
      .reverse()
      .slice(0, startDaysOfWeek - 1)
      .reverse()
      .map((item, index) => {
        return { num: item, column: index + 1, grey: -1 };
      })
  );
};

const getNextMonthDays = (count: number) => {
  const result: TDays[] = [];
  for (let i = 1, column = 8 - count; i <= count; i++, column++) {
    result.push({ num: i, column: column, grey: +1 });
  }
  return result;
};

const getCountDaysInMonth = (month: number, year: number) => {
  return new Date(year, month, 0).getDate();
};
