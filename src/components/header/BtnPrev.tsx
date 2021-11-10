import React from 'react';
import { useCustomContext } from '../../store';
import { BtnPrevContainer } from '../../styles';

export default function BtnPrev() {
  const {dispatch} = useCustomContext()

  const click = () => {
    dispatch({type: "PREV_MONTH"})
  }

  return (
    <BtnPrevContainer onClick={click} />
  )
}