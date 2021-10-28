import React from "react";
import DatePickerProvider from "./store/Context";
import { DatePickerStyle } from "./styles";
import CalendarWindow from "./components/CalendarWindow";
import DateField from "./components/DateField";
import { IDatePicker } from "./models";

export default function DatePicker({ calendarWidth, showTime=true, readOnly=true }: IDatePicker) {
  return (
    <DatePickerProvider>
      <DatePickerStyle calendarWidth={calendarWidth}>
        <DateField readOnly={readOnly} />
        <CalendarWindow showTime={showTime} />
      </DatePickerStyle>
    </DatePickerProvider>
  );
}
