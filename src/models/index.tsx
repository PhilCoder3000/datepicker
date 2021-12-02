export interface IDatePicker {
  onChangeDate: (props: number) => void
  mainWidth: string
  initialValue: number
  format?: string
  isShowTime?: boolean
  isReadOnly?: boolean
}