import React, { useState } from "react";
import { useCustomContext } from "../hooks/useReducerMiddleware";
import { InputFieldContainer } from "../styles";

export function InputField() {
  const { state, dispatch } = useCustomContext();
  const [value, setValue] = useState('')

  const showCalendar = () => {
    dispatch({
      type: "SET_IS_SHOW_CALENDAR",
      isShow: !state.isShowCalendar,
    });
  };

  const changeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <InputFieldContainer onClick={showCalendar}>
      <input type="text" value={value || state.valueOfDate} onChange={changeHandle} />
    </InputFieldContainer>
  );
}
