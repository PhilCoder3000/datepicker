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
  const day = `0${state.day}`.slice(-2);
  const month = `0${state.visibleMonth + 1}`.slice(-2);
  const hours = `0${state.hours}`.slice(-2);
  const minutes = `0${state.minutes}`.slice(-2);

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
  const initialDate = format
    .replace("YYYY", `${date.getFullYear()}`)
    .replace("YY", `${date.getFullYear()}`.slice(-2))
    .replace("MM", `0${date.getMonth() + 1}`.slice(-2))
    .replace("DD", `0${date.getDate()}`.slice(-2))
    .replace("hh", `0${date.getHours()}`.slice(-2))
    .replace("mm", `0${date.getMinutes()}`.slice(-2));

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
