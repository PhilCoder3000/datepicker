import React, { useState } from "react";
import { monthArray, yearArray } from "../store/const";
import {
  DateFieldStyle,
  InvalidMessage,
} from "../styles";
import {IDateField} from '../models/index'
import { useCustomContext } from "../store/Context";

export default function DateField({ readOnly }: IDateField) {
  const {state, dispatch} = useCustomContext();
  const [showInvalidMessage, setShowInvalidMessage] = useState<boolean>(false);
  const setShow = () => {
    if (state.showCalendar) {
      dispatch({
        type: "HIDE_CALENDAR",
      });
    } else {
      dispatch({ type: "SHOW_CALENDAR" });
    }
  };

  const checkValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch({ type: "SET_FULL_DATE", fullDate: value });
    if (value.match(/^\d{1,2}$/) && +value > 0) {
      dispatch({ type: "SET_DAY", day: +value });
    }
    if (
      value.match(/^\d{1,2}\.\d{1,2}$/) &&
      +value.split(".")[1] > 0 &&
      +value.split(".")[1] < 13
    ) {
      const newMonth = value.split(".")[1];
      dispatch({ type: "SET_MONTH", month: monthArray[+newMonth - 1] });
    }
    if (value.match(/^\d{1,2}\.\d{1,2}\.\d{4}$/)) {
      const newYear = value.split(".")[2];
      const newYearObj = yearArray.filter(
        (item) => item.title === newYear
      )[0] || { title: newYear };
      dispatch({ type: "SET_YEAR", year: newYearObj });
    }
  };

  const invalidHandle = () => {
    if (state.matchFullDate) {
      setShowInvalidMessage(false);
    } else {
      setShowInvalidMessage(true);
    }
  };

  return (
    <>
      <InvalidMessage show={showInvalidMessage}>
        <p>Укажите дату в формате</p>
        <span>DD.MM.YYYY</span>
      </InvalidMessage>
      <DateFieldStyle
        type="text"
        value={state.fullDate}
        onChange={checkValue}
        readOnly={readOnly}
        onClick={setShow}
        onBlur={invalidHandle}
        border={showInvalidMessage}
      />
    </>
  );
}
