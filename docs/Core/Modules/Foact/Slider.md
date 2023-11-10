### Properties
| Property       | Type     | Optional |
|----------------|----------|----------|
| min            | number   | yes      |
| max            | number   | yes      |
| defaultvalue   | number   | yes      |
| onAfterChange  | function | yes      |

### Children
Not supported on slider.

### Example
```lua
local slider = myUi:createElement("Slider", {
    min = 0,
    max = 100,
    defaultValue = 50,
    onAfterChange = function(uiName, elementId, value)
        print("Slider value changed to: " .. value)
    end,
    width = "200px"
})
```