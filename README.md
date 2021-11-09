## Календарь ##

### Для работы требуется ###

* setDate - функция, вернет дату выбранную пользователем
* calendarWidth - ширина календаря с единицами измерения


#### Не обязательные параметры ####
* showTime - по-умолчанию true -> показывать ли блок с возможностью указать время, 
* readOnly - по-умолчанию true -> только ли для чтения input, или можно ввести дату\время с клавиатуры

__DatePicker__ 
```javascript
setDate: (props: string) => void;
calendarWidth: string;
showTime?: boolean;
readOnly?: boolean;
```