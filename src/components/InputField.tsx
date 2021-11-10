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
  initialValue: string;
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

  return (
    <InputFieldContainer onClick={showCalendar}>
      <input
        type="text"
        readOnly={isReadOnly}
        value={state.isSelectedDate ? value : initialValue}
      />
    </InputFieldContainer>
  );
}
