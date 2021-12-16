import React from "react";
import { useCustomContext } from "../store";
import { InputFieldContainer } from "../styles";

export default function InputField({
  isReadOnly,
  format,
  initialValue,
  isShowTime,
}: {
  isReadOnly: boolean;
  format: string;
  initialValue: number;
  isShowTime: boolean;
}) {
  const { state, dispatch } = useCustomContext();
  const day = state.day < 10 ? `0${state.day}` : `${state.day}`;
  const month =
    state.visibleMonth + 1 < 10
      ? `0${state.visibleMonth + 1}`
      : `${state.visibleMonth + 1}`;
  const hours = state.hours < 10 ? `0${state.hours}` : `${state.hours}`;
  const minutes = state.minutes < 10 ? `0${state.minutes}` : `${state.minutes}`;

  let value = format
    .replace("DD", day)
    .replace("MM", month)
    .replace("YYYY", `${state.visibleYear}`);

  if (isShowTime) {
    value = value.replace("hh", hours).replace("mm", minutes);
  } else {
    value = value.replace("hh:mm", "");
  }

  const showCalendar = () => {
    dispatch({
      type: "SET_IS_SHOW_CALENDAR",
      isShow: !state.isShowCalendar,
    });
  };
  const date = new Date(initialValue);
  const initDay =
    date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
  const initMonth =
    date.getMonth() + 1 < 10
      ? `0${date.getMonth() + 1}`
      : `${date.getMonth() + 1}`;
  const initHour = 
    date.getHours() < 10
      ? `0${date.getHours()}`
      : `${date.getHours()}`;
  const initMinutes = 
    date.getMinutes() < 10
      ? `0${date.getMinutes()}`
      : `${date.getMinutes()}`;
  const initialDate = format
    .replace("DD", `${initDay}`)
    .replace("MM", `${initMonth}`)
    .replace("YYYY", `${date.getFullYear()}`)
    .replace("hh", `${initHour}`)
    .replace("mm", `${initMinutes}`);

  return (
    <InputFieldContainer onClick={showCalendar}>
      <input
        type="text"
        readOnly={isReadOnly}
        value={state.isSelectedDate ? value : initialDate}
      />
    </InputFieldContainer>
  );
}
