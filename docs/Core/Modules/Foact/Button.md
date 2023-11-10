### Properties
| Property | Type     | Optional |
|----------|----------|----------|
| text     | string   | yes      |
| onClick  | function | yes      |

### Children
Not supported on button - use the `text` property for setting the text of the button.

### Example
```lua
local btn = myUi:createElement("Button", {
    text = "Hello, World!",
    onClick = function(uiName, elementId)
        print("Hello, World!")
    end
})
```