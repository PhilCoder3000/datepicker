import React from "react";
import DaysOfWeek from "./body/DaysOfWeek";
import Time from "./body/Time";
import {
  CalendarWindowStyle,
  HeaderStyle,
} from "../styles";
import Body from "./Body";
import HeaderBtnNext from "./header/HeaderBtnNext";
import HeaderBtnPrev from "./header/HeaderBtnPrev";
import Month from "./header/Month";
import Year from "./header/Year";
import { ICalendarWindow } from "../models";
import { useCustomContext } from "../store/Context";

export default function CalendarWindow({ showTime }: ICalendarWindow) {
  const {state} = useCustomContext();
  return (
    <CalendarWindowStyle show={state.showCalendar}>
      <HeaderStyle>
        <HeaderBtnPrev></HeaderBtnPrev>
        <Month></Month>
        <Year></Year>
        <HeaderBtnNext></HeaderBtnNext>
      </HeaderStyle>
      <DaysOfWeek />
      <Body />
      {showTime && <Time />}
    </CalendarWindowStyle>
  );
}
