import React, { useState } from "react";
import { useCustomContext } from "../../store";
import { monthArray } from "../../store/const";
import { MonthContainer } from "../../styles";

export default function Month() {
  const { state, dispatch } = useCustomContext();
  const [isShow, setIsShow] = useState(false);

  const selectMonth = (index: number) => {
    dispatch({ type: "SET_MONTH", month: index });
  };

  return (
    <MonthContainer
      isShow={isShow}
      onClick={() => setIsShow(!isShow)}
      onMouseLeave={() => setIsShow(false)}
    >
      <p>{monthArray[state.month]}</p>
      <div>
        <p>{monthArray[state.month]}</p>
        {monthArray.map((item, index) => (
          <p
            key={index}
            onClick={() => selectMonth(index)}
            style={{
              color:
                item === monthArray[state.month]
                  ? "#ff0606"
                  : "rgba(0, 0, 0, 0.8)",
            }}
          >
            {item}
          </p>
        ))}
      </div>
    </MonthContainer>
  );
}
