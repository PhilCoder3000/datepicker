import React, { useState } from "react";
import { useCustomContext } from "../../store";
import {
  Buttons,
  EnableTime,
  TimeButton,
  TimeContainer,
  TimeInput,
  TimeSetting,
} from "../../styles";

export default function Time() {
  const { state, dispatch } = useCustomContext();
  const [isShow, setIsShow] = useState(true);

  if (!isShow) {
    return (
      <EnableTime onClick={() => setIsShow(true)}>Установить время</EnableTime>
    );
  }

  const incrementHours = () => {
    if (typeof state.hours === "number") {
      if (state.hours === 23) {
        dispatch({ type: "SET_HOURS", hours: 1 });
      } else {
        dispatch({ type: "SET_HOURS", hours: state.hours + 1 });
      }
    } else {
      dispatch({ type: "SET_HOURS", hours: 1 });
    }
  };

  const decrementHours = () => {
    if (typeof state.hours === "number") {
      if (state.hours === 1) {
        dispatch({ type: "SET_HOURS", hours: 23 });
      } else {
        dispatch({ type: "SET_HOURS", hours: state.hours - 1 });
      }
    } else {
      dispatch({ type: "SET_HOURS", hours: 23 });
    }
  };

  const checkHours = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match(/\d/)) {
      const value = +e.target.value;
      if (value >= 0 && value <= 23) {
        dispatch({ type: "SET_HOURS", hours: value });
      }
    }
    if (e.target.value === "") {
      dispatch({ type: "SET_HOURS", hours: "" });
    }
  };

  const checkMinutes = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match(/\d/)) {
      const value = +e.target.value;
      if (value >= 0 && value <= 59) {
        dispatch({ type: "SET_MINUTES", minutes: value });
      }
    }
    if (e.target.value === "") {
      dispatch({ type: "SET_MINUTES", minutes: "" });
    }
  };

  const incrementMinutes = () => {
    if (typeof state.minutes === "number") {
      if (state.minutes === 59) {
        dispatch({ type: "SET_MINUTES", minutes: 1 });
      } else {
        dispatch({ type: "SET_MINUTES", minutes: state.minutes + 1 });
      }
    } else {
      dispatch({ type: "SET_MINUTES", minutes: 1 });
    }
  };

  const decrementMinutes = () => {
    if (typeof state.minutes === "number") {
      if (state.minutes === 1) {
        dispatch({ type: "SET_MINUTES", minutes: 59 });
      } else {
        dispatch({ type: "SET_MINUTES", minutes: state.minutes - 1 });
      }
    } else {
      dispatch({ type: "SET_MINUTES", minutes: 1 });
    }
  };

  const setTime = () => {
    dispatch({ type: "SET_IS_SHOW_CALENDAR", isShow: false });
    dispatch({ type: "SET_IS_SELECTED_DATE", value: true });
  };
  const close = () => {
    dispatch({ type: "SET_IS_SHOW_CALENDAR", isShow: false });
  };
  return (
    <TimeContainer>
      <TimeSetting>
        <p>Время</p>
        <TimeButton>
          <span onClick={incrementHours}></span>
          <span onClick={decrementHours}></span>
        </TimeButton>
        <TimeInput type="text" value={state.hours} onChange={checkHours} />
        <span>:</span>
        <TimeInput type="text" value={state.minutes} onChange={checkMinutes} />
        <TimeButton>
          <span onClick={incrementMinutes}></span>
          <span onClick={decrementMinutes}></span>
        </TimeButton>
        <button onClick={() => setIsShow(false)}>x</button>
      </TimeSetting>
      <Buttons>
        <button onClick={setTime}>Выбрать</button>
        <button onClick={close}>Закрыть</button>
      </Buttons>
    </TimeContainer>
  );
}
