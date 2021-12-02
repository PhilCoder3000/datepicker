import React from "react";
import Calendar from "./components/Calendar";
import InputField from "./components/InputField";
import { IDatePicker } from "./models";
import DatePickerProvider from "./store";
import { DatePickerContainer } from "./styles";

export default function DatePicker({
  onChangeDate,
  mainWidth,
  format = 'DD.MM.YYYY hh:mm',
  initialValue = new Date().getTime(),
  isShowTime = true,
  isReadOnly = true,
}: IDatePicker) {

  return (
    <DatePickerProvider onChangeDate={onChangeDate} initialValue={initialValue}>
      <DatePickerContainer mainWidth={mainWidth}>
        <InputField isReadOnly={isReadOnly} format={format} initialValue={initialValue} isShowTime={isShowTime}/>
        <Calendar isShowTime={isShowTime} />
      </DatePickerContainer>
    </DatePickerProvider>
  );
}
