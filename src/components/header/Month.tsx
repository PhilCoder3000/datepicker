import React from "react";
import { monthArray } from "../../store/const";
import { useCustomContext } from "../../store/Context";
import {
  MonthContainer,
  MonthInput,
  MonthItem,
  MonthOptions,
} from "../../styles";

export default function Month() {
  const {state, dispatch} = useCustomContext();
  const chooseMonth = (index: number) => {
    dispatch({
      type: "SET_MONTH",
      month: monthArray[index],
    });
    dispatch({
      type: "UPDATE_FULL_DATE",
    });
  };
  const setShowMonth = () => {
    if(!state.showMonth){
      dispatch({
        type: "SHOW_MONTH",
      });
    }
  }
  return (
    <MonthContainer onClick={setShowMonth} >
      <MonthInput type="text" disabled={true} value={state.month.title} />
      <MonthOptions show={state.showMonth}>
        {monthArray.map(({title }, index) => (
          <MonthItem key={index} onClick={() => chooseMonth(index)}>
            {title}
          </MonthItem>
        ))}
      </MonthOptions>
    </MonthContainer>
  );
}
