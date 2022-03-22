import React, { useEffect } from "react";
import { useShowControl } from "../hooks/useShowControl";
import { useCustomContext } from "../hooks/useReducerMiddleware";
import { CalendarContainer, HeaderContainer } from "../styles";
import { Body } from "./body/Body";
import { DaysOfWeek } from "./body/DaysOfWeek";
import { Time } from "./body/Time";
import { Dropdown } from "./header/Dropdown";
import { MonthBtn } from "./header/MonthBtn";

export function Calendar() {
  const { state, dispatch } = useCustomContext();

  const { ref, isShow, setShow } = useShowControl();

  useEffect(() => {
    if (isShow !== state.isShowCalendar) {
      setShow(state.isShowCalendar);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setShow, state.isShowCalendar]);

  useEffect(() => {
    if (isShow !== state.isShowCalendar) {
      dispatch({ type: "SET_IS_SHOW_CALENDAR", isShow });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, isShow]);

  return (
    <CalendarContainer isShow={isShow} ref={ref}>
      <HeaderContainer>
        <MonthBtn dir="prev" />
        <Dropdown variant="month" />
        <Dropdown variant="year" />
        <MonthBtn dir="next" />
      </HeaderContainer>
      <DaysOfWeek />
      <Body />
      {state.isShowTime && <Time />}
    </CalendarContainer>
  );
}
