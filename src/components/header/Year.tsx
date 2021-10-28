import React from "react";
import { yearArray } from "../../store/const";
import { useCustomContext } from "../../store/Context";
import {
  YearContainer,
  YearInput,
  YearItem,
  YearOptions,
} from "../../styles";

export default function Year() {
  const {state, dispatch} = useCustomContext();
  const chooseYear = (index: number) => {
    dispatch({
      type: "SET_YEAR",
      year: yearArray[index],
    });
    dispatch({
      type: "UPDATE_FULL_DATE",
    });
  };
  const setShowYear = () => {
    if(!state.showYear) {
      dispatch({
        type: "SHOW_YEAR",
      });
    }
  }
  return (
    <YearContainer onClick={setShowYear}>
      <YearInput type="text" disabled={true} value={state.year.title} />
      <YearOptions show={state.showYear}>
        {yearArray.map(({ title }, index) => (
          <YearItem key={index} onClick={() => chooseYear(index)}>
            {title}
          </YearItem>
        ))}
      </YearOptions>
    </YearContainer>
  );
}
