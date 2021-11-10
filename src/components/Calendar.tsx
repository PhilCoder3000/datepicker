import React from "react";
import { useCustomContext } from "../store";
import { CalendarContainer, HeaderContainer } from "../styles";
import Body from "./body/Body";
import DaysOfWeek from "./body/DaysOfWeek";
import Time from "./body/Time";
import BtnNext from "./header/BtnNext";
import BtnPrev from "./header/BtnPrev";
import Month from "./header/Month";
import Year from "./header/Year";

export default function Calendar({ isShowTime }: { isShowTime: boolean }) {
  const { state } = useCustomContext();

  return (
    <CalendarContainer isShow={state.isShowCalendar}>
      <HeaderContainer>
        <BtnPrev />
        <Month />
        <Year />
        <BtnNext />
      </HeaderContainer>
      <DaysOfWeek />
      <Body />
      {isShowTime && <Time />}
    </CalendarContainer>
  );
}
