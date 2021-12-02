import React from "react";
import { useCustomContext } from "../../store";
import { BodyContainer, DayInCurrentMonth, DayInOtherMonth } from "../../styles";

export default function Body() {
  const { state, dispatch } = useCustomContext();

  const daysOfPastMonth = getDaysArray(state.year, state.month - 1).slice(
    -whatDayOfWeek(state.year, state.month, 1) + 1,
  );

  const daysOfNextMonth = getDaysArray(state.year, state.month + 1).slice(
    0,
    7 -
      whatDayOfWeek(
        state.year,
        state.month,
        getDaysArray(state.year, state.month).reverse()[0],
      ),
  );

  const chooseDayInPastMonth = (day: number) => {
    dispatch({ type: "SET_DAY", day });
    dispatch({ type: "PREV_MONTH" });
  };
  const chooseDayInCurrentMonth = (day: number) => {
    dispatch({ type: "SET_DAY", day });
  };
  const chooseDayInNextMonth = (day: number) => {
    dispatch({ type: "SET_DAY", day });
    dispatch({ type: "NEXT_MONTH" });
  };

  const isThisToday = (day: number, month: number, year: number) => {
    if(state.day === day && state.month === month && state.year === year){
      return '#eee'
    }
    return '#fff';
  };

  return (
    <BodyContainer>
      {whatDayOfWeek(state.year, state.month, 1) !== 1 &&
        daysOfPastMonth.map((day) => (
          <DayInOtherMonth
            key={day}
            onClick={() => chooseDayInPastMonth(day)}
            bg={isThisToday(day, state.month - 1, state.year)}
          >
            {day}
          </DayInOtherMonth>
        ))}
      {getDaysArray(state.year, state.month).map((day) => (
        <DayInCurrentMonth bg={isThisToday(day, state.month, state.year)}
          key={day}
          onClick={() => chooseDayInCurrentMonth(day)}
        >
          {day}
        </DayInCurrentMonth>
      ))}
      {whatDayOfWeek(
        state.year,
        state.month,
        getDaysArray(state.year, state.month).reverse()[0],
      ) !== 7 &&
        daysOfNextMonth.map((day) => (
          <DayInOtherMonth
            key={day}
            onClick={() => chooseDayInNextMonth(day)}
            bg={isThisToday(day, state.month + 1, state.year)}
          >
            {day}
          </DayInOtherMonth>
        ))}
    </BodyContainer>
  );
}

const getDaysArray = (year: number, month: number): number[] => {
  return Array.from({ length: howDaysInMonth(year, month) }, (_, i) => i + 1);
};

const howDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const whatDayOfWeek = (year: number, month: number, day: number) => {
  return new Date(year, month, day).getDay() || 7;
};
