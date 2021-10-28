import React from "react";
import { IBodyItem } from "../../models";
import { BodyItemStyle } from "../../styles";

export default function BodyItem({ children, column, grey, ...props }: IBodyItem) {
  let color;
  if(column > 5){
    color = '#d25050';
    if(grey !== 0){
      color += '7f' 
    } 
  } else {
    color = '#000000'
    if(grey !== 0){
      color += '7f' 
    } 
  }
  return <BodyItemStyle {...props} color={color} column={column} >{children}</BodyItemStyle>;
}
