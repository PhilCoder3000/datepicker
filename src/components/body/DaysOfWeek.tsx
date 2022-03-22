import React from "react";
import { DaysOfWeeContainer } from "../../styles";

export const DaysOfWeek = React.memo(() => {
  return (
    <DaysOfWeeContainer>
      {names.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </DaysOfWeeContainer>
  );
});

const names = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
