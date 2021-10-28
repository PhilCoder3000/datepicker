import React from "react";
import { DaysOfWeekStyle } from "../../styles";

export default function DaysOfWeek() {
  return (
    <DaysOfWeekStyle>
      {names.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </DaysOfWeekStyle>
  );
}

const names = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
