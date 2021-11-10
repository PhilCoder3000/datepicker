export interface IDatePicker {
  onChangeDate: (props: number) => void
  mainWidth: string
  initialValue: string
  format?: string
  isShowTime?: boolean
  isReadOnly?: boolean
}