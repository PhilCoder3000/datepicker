import React, { useState, useCallback, useMemo } from "react";
import { StyledComponent } from "styled-components";
import { useCustomContext } from "../../hooks/useReducerMiddleware";
import { monthArray, yearArray } from "../../store/const";
import { MonthContainer, YearContainer } from "../../styles";

type DropdownProps = {
  variant: "month" | "year";
};

export function Dropdown({ variant }: DropdownProps) {
  const { state, dispatch } = useCustomContext();
  const [isShow, setIsShow] = useState(false);

  const select = useCallback(
    (item: number) => {
      if (variant === "month") {
        dispatch({ type: "SET_MONTH", month: item });
      } else {
        dispatch({ type: "SET_YEAR", year: yearArray[item] });
      }
    },
    [dispatch, variant],
  );

  const containerProps = useMemo(
    () => ({
      isShow,
      onClick: () => setIsShow(!isShow),
      onMouseLeave: () => setIsShow(false),
    }),
    [isShow],
  );

  if (variant === "month") {
    return (
      <Body
        Container={MonthContainer}
        array={monthArray}
        currentValue={monthArray[state.month]}
        containerProps={containerProps}
        select={select}
      />
    );
  } else {
    return (
      <Body
        Container={YearContainer}
        array={yearArray}
        currentValue={state.year}
        containerProps={containerProps}
        select={select}
      />
    );
  }
}

type BodyProps = {
  Container: StyledComponent<"div", any, { isShow: boolean }, never>;
  array: any[];
  currentValue: number | string;
  containerProps: any;
  select: (num: number) => void;
};

const Body = ({
  Container,
  array,
  currentValue,
  containerProps,
  select,
}: BodyProps) => {

  return (
    <Container {...containerProps}>
      <p>{currentValue}</p>
      <div>
        <p>{currentValue}</p>
        {array.map((item, index) => (
          <p
            key={index}
            onClick={() => select(index)}
            style={{
              color: item === currentValue ? "#ff0606" : "rgba(0, 0, 0, 0.8)",
            }}
          >
            {item}
          </p>
        ))}
      </div>
    </Container>
  );
};
