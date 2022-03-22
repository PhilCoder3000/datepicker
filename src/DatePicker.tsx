import React from "react";
import styled from "styled-components";
import { InputField } from "./components/InputField";
import { IDatePickerProps } from "./types";
import { DatePickerProvider } from "./store/Context";
import { DatePickerContainer } from "./styles";
import { Calendar } from "./components/Calendar";

export function DatePicker({
  fieldWidth = "200px",
  ...props
}: IDatePickerProps) {

  return (
    <DatePickerProvider {...props}>
      <DatePickerContainer fieldWidth={fieldWidth}>
        <InputField />
        <Calendar/>
      </DatePickerContainer>
    </DatePickerProvider>
  );
}

export const Container = styled.div`
  position: relative;
`;

