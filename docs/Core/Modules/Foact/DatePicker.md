### Properties
| Property         | Type                                           | Description                                      |
|-                 |-                                               |-                                                 |
| defaultValue     | string, string[]                               | Default value displayed when opened              |
| showNow          | boolean                                        | Weather to show now, when showTime i set         |
| showTime         | table, boolean                                 | Provider an additional time selection            |
| showToday        | boolean                                        | Weather to show `today` button                   |
| rangePicker      | boolean                                        | When `true` user can pick range of date          |
| allowClear       | boolean                                        | Weather to show clear button                     |
| autoFocus        | boolean                                        | Weather for element to be focused when opened    |
| bordered         | boolean                                        | Weather the element has a border                 |
| changeOnBlur     | boolean                                        | [See changeOnBlur](#changeOnBlur)                |
| disabled         | boolean                                        | Weather the element is disabled                  |
| mode             | `time` `date` `month` `year` `decade`          | Mode of picker panel                             |
| open             | boolean                                        | Overwrite how to display the datepicker          |
| picker           | `date` `week` `month` `quarter` `year`         | Type of pick                                     |
| placeholder      | string                                         | The placeholder of date input                    |
| placement        | `bottomLeft` `bottomRight` `topLeft` `topRight`| Placement of the popover                         |
| nextIcon         | string                                         | Icon of next button                              |
| prevIcon         | string                                         | Icon of previous button                          |
| size             | `large` `middle` `small`                       | Size of datepicker                               |
| status           | `error` `warning`                              | Validation status                                |
| suffixIcon       | string                                         | Suffix icon, displayed after input               |
| superNextIcon    | string                                         | Icon of _super_ next icon                        |
| superPrevIcon    | string                                         | IUcon of _super_ previous icon                   |
| popupStyle       | table, CSSProperties                           | CSS Properties of the popup                      |
| format           | string                                         | Foramt of the date                               |
| onChange         | function(date, dateString)                     | Fired when selected date is changed              |
| onOk             | function(date)                                 | Fired when next/ok button is pressed             |
| onPanelChange    | function(value, mode)                          | Fired when user want to select month, year, etc  |
| value            | undefined                                      | Value                                            |
| disabledTime     | undefined                                      | Unimplemented                                    |
| allowEmpty       | boolean                                        | Allows the user to leave input empty             |
| separator        | undefined                                      | Unimplemented                                    |
| onCalendarChange | function(dates, dateStrings, info)             | Fired when either starttime or endtime is picked |
All properties are optional.
[List of icons](https://ant.design/components/icon).
[Ant Design Documentation](https://ant.design/components/date-picker?theme=dark).

### Children
DatePicker does not support children.

### Example

"Trigger change when blur. e.g. datetime picker no need click confirm button".

#### defaultValue
The default value of the DatePicker.
```lua
-- Default Format: DD-MM-YYYY
defaultValue = "DD-MM-YYY", -- Input has to match format.
```
![defaultValue](https://i.imgur.com/i567Tts.png)<p/>
When its a RangePicker:
```lua
defaultValue = {"DD-MM-YYYY", "DD-MM-YYYY"} -- {left side, right side}
rangePicker = true,
```
![defaultValue](https://i.imgur.com/gpTTdHk.png)

#### showNow
When `showTime = true`, a "Now" button will appear when this is also true.<p/>
![image](https://i.imgur.com/XiApnFB.png)

#### showTime
Weather the user also has to pick time:<p/>
![image](https://i.imgur.com/cmaSf7J.png)<p/>
NOTE: Remember to set `foramt` to include time!: `foramt = "DD-MM-YYYY HH:mm:ss"`

#### showToday
Weather to display the "today" button:<p/>
![image](https://i.imgur.com/gWPzOh2.png)

#### rangePicker
When `true` the user can pick a start and a end date:<p/>
![image](https://i.imgur.com/Uo06xCP.png)

#### allowClear
Weather to display the clear button to clear users input.<p/>
![image](https://i.imgur.com/WjaMXHf.png)

#### autoFocus
When true the DatePicker element will be focused when shown to the user.

#### bordered
Weather the DatePicker has a border, here hows it looks without a border:<p/>
![image](https://i.imgur.com/fJaHqc7.png)

#### changeOnBlur
"Trigger change when blur. e.g. datetime picker no need click confirm button"

#### disabled
Weather the DatePicker is disabled:<p/>
![image](https://i.imgur.com/6tzUh9l.png)

#### mode
Changes what the user has to pick, "date" is default.<p/>
![time](https://i.imgur.com/9alBu9w.png)
![month](https://i.imgur.com/lCQpghs.png)
![year](https://i.imgur.com/vc7wijj.png)
![decade](https://i.imgur.com/xjwyeCP.png)

#### open
Weather the popof the the DatePicker is displayed.<p/>
When set you'll have to handle how it opens and closes yourself.

#### picker
What the "final output" user has to choose.<p/>
Date: User has to pick full date DD-MM-YYYY<p/>
Week: ![week](https://i.imgur.com/caFuQ1B.png)<p/>
Month: ![month](https://i.imgur.com/YBh9Css.png)<p/>
Quarter: ![quarter](https://i.imgur.com/SBeJfjh.png)<p/>
Year: ![year](https://i.imgur.com/8DukQCV.png)

#### placeholder
Placeholder text if no input is selected.<p/>
![placeholder](https://i.imgur.com/cSxTPKm.png)

#### placement
Can be any of the following: `bottomLeft` `bottomRight` `topLeft` `topRight`.<p/>
Changes the placement of the popover.

#### nextIcon
Changes the icon of the next button.
```lua
nextIcon = "StepForwardOutlined",
```
![nextIcon](https://i.imgur.com/NZpS227.png)

#### prevIcon
Changes the icon of the previous button.<p/>
You can see an image from `nextIcon`.

#### size
Changes the size of the input.<p/>
Does not change anything in the popover.

#### status
Changes the outline color of the DatePickers input.<p/>
Error: ![error](https://i.imgur.com/WRCzP5j.png)<p/>
Warning: ![warning](https://i.imgur.com/3VPHNm0.png)

#### suffixIcon
Changes the icon displayed to the right side of the input.<p/>
`suffixIcon = StepForwardOutlined`<p/>
![suffixIcon](https://i.imgur.com/jDFbgo3.png)

#### superNextIcon / superPrevIcon
Changes the icon of the "super" next/previous icon.<p/>
![supernext](https://i.imgur.com/RJSvFSF.png)

#### popupStyle
CSS Styling for the container of the popup.<p/>
It's displayed behind the actual popover, but you can try and play around with it if you want.

#### format
`format = "DD-MM-YYYY"` Is the default format.<p/>
Meaning the input is DAY-MONTH-YEAR.<p/>
`format = "MM-DD-YYYY"` Means MONTH-DAY-YEAR.<p/>
`format = "DD-MM-YYYY HH:mm:ss"` is DAY-MOTH-YEAR HOUR:minute:second.<p/>
Your [defaultValue](#defaultvalue) has to match this!.<p/>
Also the output from the events is always "DD-MM-YYYY" as of now...

#### onChange
Fired when user changes input of the DatePicker.
```lua
onChange = function(_, _, date, dateString)
    print("onChange: ", json.encode(date, {indent = true}), json.encode(dateString))
end
```
Example of output: ![example](https://i.imgur.com/wGjYrKv.png)<p/>
When `rangePicker = true`:
```lua
onChange = function(_, _, date, dateString)
    print("onChange: ", json.encode(date, {indent = true}), json.encode(dateString))
    local first = date[0] -- Earliest date
    local second = date[1] -- Latest date
    local first2 = dateString[0]
    local second2 = dateString[1]
end
```

#### onOk
Fired when user clicks the "ok" button.
```lua
onOk = function(_, _, date)
    print("onOk: Clicked Ok: ", json.encode(date))
    local date = date.dateString
    local time = date.timeString
end
```
For rangePicker:
```lua
onOk = function(_, _, date)
    print("onOk: Clicked Ok: ", json.encode(date, {indent = true}))
    local first = date[0] -- Earliest date
    local second = date[1] -- Latest date
    local first2 = dateString[0]
    local second2 = dateString[1]
end
```

#### onPanelChange
Fired when user goes in to change the year, month or decade.
```lua
onPanelChange = function(_, _, value, mode)
    print("onPanelChange: ", json.encode(value), mode)
    print("Panel Change To: ", mode)
end
```
`mode` is a array when `rangePicker = true`

#### allowEmpty
Weather user is allowed to not pick a date.

#### onCalendarChange
Requires `rangePicker = true`.<p/>
Fired when user changes either side of the picker, so either early date or late date...

#### disabledTime
Yet to be implemented correctly.