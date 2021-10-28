import React from 'react';
import { monthArray, yearArray } from '../../store/const';
import { useCustomContext } from '../../store/Context';
import { HeaderButtonNext } from '../../styles';

export default function HeaderBtnNext () {
  const {state, dispatch} = useCustomContext()
  const nextMonth = () => {
    if (state.month.id === 12) {
      dispatch({
        type: "SET_MONTH",
        month: monthArray[0]
      });
      dispatch({
        type: "NEXT_YEAR",
        year: yearArray[state.year.id + 1] 
      });
    } else {
      dispatch({
        type: "SET_MONTH",
        month: monthArray[state.month.id],
      });
    }
  };
  return (
    <HeaderButtonNext onClick={nextMonth}/>
  )
}