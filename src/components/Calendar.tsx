import React, { useRef,useEffect } from "react";
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
  const { state, dispatch } = useCustomContext();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function listener(this: HTMLElement, e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node) && state.isShowCalendar) {
        dispatch({ type: "SET_IS_SHOW_CALENDAR", isShow: false });
      }
    }
    document.body.addEventListener("click", listener);
    return () => {
      document.body.removeEventListener("click", listener);
    };
  }, [dispatch,state.isShowCalendar]);

  return (
    <CalendarContainer isShow={state.isShowCalendar} ref={ref}>
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
