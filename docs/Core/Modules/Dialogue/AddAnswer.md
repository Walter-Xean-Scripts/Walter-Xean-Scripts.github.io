### Function
```lua
local Dialogue = WXSCore.Dialogue
Dialogue:AddAnswer(answer, cb)
```

### Parameters
| Name | Type | Description |
|-|-|-|
| answer | string | The answer to add |
| cb | function | The function called when the answer is done typewriting |

### Example
```lua
local Dialogue = WXSCore.Dialogue
Dialogue:AddAnswer("I'll beat you for talking like that", function()
    -- close the dialogue and initiate a fight!
end)
```