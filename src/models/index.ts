export interface IDatePicker {
  calendarWidth: string;
  showTime: boolean;
  readOnly?: boolean;
}

export interface IDateField {
  readOnly: boolean;
}

export interface ICalendarWindow {
  showTime: boolean;
} 

export interface IBodyItem {
  children: number;
  column: number;
  grey: number;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  current: boolean;
}