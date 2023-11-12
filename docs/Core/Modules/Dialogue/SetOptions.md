### Function
```lua
local Dialogue = WXSCore.Dialogue
Dialogue:SetOptions(...)
```

### Parameters
| Name | Type | Description |
|-|-|-|
| ... | DialogueOption | The options to set |

#### DialogueOption
| Key | Type | Description |
|-|-|-|
| text | string | The text displayed on the option |
| onClick | function | The function called when the option is clicked |

### Example
```lua
local Dialogue = WXSCore.Dialogue
Dialogue:SetOptions(
    {
        text = "Want a beating?",
        onClick = function()
            Dialogue:AddAnswer("Let's fight kid")
        end
    },
    {
        text = "I'm looking for a job",
        onClick = function()
            Dialogue:AddAnswer("I'm not hiring")
        end
    },
    {
        text = "Nevermind",
        onClick = function()
            Dialogue:AddAnswer("Ok bye")
        end
    }
)
```