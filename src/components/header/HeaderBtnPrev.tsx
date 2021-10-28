import React from "react";
import { monthArray, yearArray } from "../../store/const";
import { useCustomContext } from "../../store/Context";
import { HeaderButtonPrev } from "../../styles";

export default function HeaderBtnPrev() {
  const {state, dispatch} = useCustomContext();
  const prevMonth = () => {
    
    if (state.month.id === 1) {
      dispatch({
        type: "SET_MONTH",
        month: monthArray[11],
      });
      dispatch({
        type: "PREV_YEAR",
        year: yearArray[state.year.id - 1],
      });
    } else {
      dispatch({
        type: "SET_MONTH",
        month: monthArray[state.month.id - 2],
      });
    }
  };
  return <HeaderButtonPrev onClick={prevMonth}/>;
}
