import React, { useState } from "react";
import { useCustomContext } from "../../store";
import { yearArray } from "../../store/const";
import { YearContainer } from "../../styles";

export default function Year() {
  const { state, dispatch } = useCustomContext();
  const [isShow, setIsShow] = useState(false);

  const selectYear = (item: number) => {
    dispatch({ type: "SET_YEAR", year: item });
  };

  return (
    <YearContainer
      isShow={isShow}
      onClick={() => setIsShow(!isShow)}
      onMouseLeave={() => setIsShow(false)}
    >
      <p>{state.year}</p>
      <div>
        <p>{state.year}</p>
        {yearArray.map((item, index) => (
          <p
            key={index}
            onClick={() => selectYear(item)}
            style={{
              color: item === state.year ? "#ff0606" : "rgba(0, 0, 0, 0.8)",
            }}
          >
            {item}
          </p>
        ))}
      </div>
    </YearContainer>
  );
}
