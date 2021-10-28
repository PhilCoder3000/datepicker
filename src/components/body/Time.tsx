import React, { useState } from "react";
import { useCustomContext } from "../../store/Context";
import {
  Buttons,
  EnableTime,
  TimeButton,
  TimeContainer,
  TimeInput,
  TimeSetting,
} from "../../styles";

export default function Time() {
  const {state, dispatch} = useCustomContext();
  const [hours, setHours] = useState(state.hours < 10 ? '0' + state.hours : state.hours);
  const [minutes, setMinutes] = useState(state.minutes < 10 ? '0' + state.minutes: state.minutes);
  const enableTime = () => {
    dispatch({ type: "ENABLE_TIME" });
  };
  if (!state.enableTime) {
    return <EnableTime onClick={enableTime}>Установить время</EnableTime>;
  }

  const disableTime = () => {
    dispatch({ type: "DISABLE_TIME" });
  };
  const setTime = () => {
    dispatch({ type: "SET_TIME", hours: +hours, minutes: +minutes });
    dispatch({ type: "HIDE_CALENDAR" });
  };
  const close = () => {
    dispatch({ type: "HIDE_CALENDAR" });
  };
  const checkHours = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setHours(+target.value > 23 ? 23: +target.value < 0 ? 0 : target.value)
  };
  const checkMinutes = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setMinutes(+target.value > 59 ? 59 : +target.value < 0 ? 0 : target.value)
  };
  const incrementHours = () => {
    setHours(+hours === 23? '00': +hours < 9 ? '0' + (+hours + 1): +hours + 1)
  }
  const decrementHours = () => {
    setHours(+hours === 0 ? '23' : +hours < 11 ? '0' + (+hours - 1): +hours - 1)
  }
  const incrementMinutes = () => {
    setMinutes(+minutes === 59? '00': +minutes < 9 ? '0' + (+minutes + 1): +minutes + 1)
  }
  const decrementMinutes = () => {
    setMinutes(+minutes === 0? '59': +minutes < 11 ? '0' + (+minutes - 1): +minutes - 1)
  }
  return (
    <TimeContainer>
      <TimeSetting>
        <p>Время</p>
        <TimeButton>
          <span onClick={incrementHours}></span>
          <span onClick={decrementHours}></span>
        </TimeButton>
        <TimeInput type="text" value={hours} onChange={checkHours} />
        <span>:</span>
        <TimeInput type="text" value={minutes} onChange={checkMinutes} />
        <TimeButton>
          <span onClick={incrementMinutes}></span>
          <span onClick={decrementMinutes}></span>
        </TimeButton>
        <button onClick={disableTime}>x</button>
      </TimeSetting>
      <Buttons>
        <button onClick={setTime}>Выбрать</button>
        <button onClick={close}>Закрыть</button>
      </Buttons>
    </TimeContainer>
  );
}
