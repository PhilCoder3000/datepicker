import React from 'react';
import { useCustomContext } from '../../store';
import { BtnNextContainer } from '../../styles';

export default function BtnNext() {
  const {dispatch} = useCustomContext()
  const click = () => {
    dispatch({type: "NEXT_MONTH"})
  }
  return (
    <BtnNextContainer onClick={click}/>
  )
}