## Календарь ##

#### Для работы требуется ####

* onChangeDate - функция, вернет дату выбранную пользователем в timestamp
* mainWidth - ширина поля с датой (передать ширину с единицами измерения) 
* initialValue - текст поля до выбора даты

#### Не обязательные параметры ####
* format - по-умолчанию 'DD.MM.YYYY hh:mm' -> дата(\время) в фомате ISO 8601
* isShowTime - по-умолчанию true -> показывать ли блок с возможностью указать время, 
* isReadOnly - по-умолчанию true -> только ли для чтения input, или можно ввести дату\время с клавиатуры

__DatePicker__ 
```javascript
  onChangeDate: (props: number) => void
  mainWidth: string
  initialValue: string
  format?: string
  isShowTime?: boolean
  isReadOnly?: boolean
```