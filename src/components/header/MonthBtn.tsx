import React from "react";
import { useCustomContext } from "../../hooks/useReducerMiddleware";
import { BtnNextContainer, BtnPrevContainer } from "../../styles";

type MonthBtnProps = { dir: "next" | "prev" };

export const MonthBtn = React.memo(({ dir }: MonthBtnProps) => {
  const { dispatch } = useCustomContext();

  const next = () => dispatch({ type: "NEXT_MONTH" });
  const prev = () => dispatch({ type: "PREV_MONTH" });

  return dir === "next" ? (
    <BtnNextContainer onClick={next} />
  ) : (
    <BtnPrevContainer onClick={prev} />
  );
});
