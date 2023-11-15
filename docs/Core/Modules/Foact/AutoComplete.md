### Properties
| Property                | Type                    | Optional | Description                                           |
|-                        |-                        |-         |-                                                      |
| options                 | table                   | No       | Options to select from in the autocomplete            |
| defaultValue            | string                  | Yes      | Initial selected option                               |
| placeholder             | string                  | Yes      | Placeholder of the input                              |
| allowClear              | boolean                 | Yes      | Weather to show clear button                          |
| autoFocus               | boolean                 | Yes      | Will give the autocomplete focus when focused         |
| backfill                | boolean                 | Yes      | Makes the autocomplete controllable with the keyboard |
| bordered                | boolean                 | Yes      | Weather the autocomplete has a border                 |
| defaultOpen             | boolean                 | Yes      | Initial open state of dropdown                        |
| disabled                | boolean                 | Yes      | Weather the autocomplete is disabled                  |
| notFoundContent         | string                  | Yes      | Content to display when to match is found             |
| status                  | `error`, `warning`      | Yes      | Validation status                                     |
| onBlur                  | function()              | Yes      | Called when leaving the component                     |
| onChange                | function(string)        | Yes      | Called when input changes                             |
| onDropdownVisibleChange | function(boolean)       | Yes      | Called when dropdown opens/closes                     |
| onFocus                 | function()              | Yes      | Called when entering the component                    |
| onSearch                | function(string)        | Yes      | Called when searching items                           |
| onSelect                | function(value, option) | Yes      | Called when a option is clicked                       |
| onClear                 | function()              | Yes      | Called when clear button is clicked                   |

### Children
AutoComplete does not support children.

### Example

```lua
local options = {
    {
        value = "Option 1"
    },
    {
        value = "Option 2"
    },
    {
        label = "Label",
        value = "Some text"
    },
    {
        value = "Xean"
    },
    {
        value = "Walter"
    },
}

local autoComplete = AM:createElement("AutoComplete", {
    placeholder = "Input Here!",
    width = "175px",
    options = options,
    allowClear = true,
    onBlur = function(id, name)
        print("onBlur: ", id, name)
    end,
    onChange = function(id, name, value)
        print("onChange: ", id, name, value)
    end,
    onDropdownVisibleChange = function(id, name, open)
        print("onDropdownVisibleChange: ", id, name, json.encode(open))
    end,
    onFocus = function(id, name)
        print("onFocus: ", id, name)
    end,
    onSearch = function(id, name, value)
        print("onSearch: ", id, name, value)
    end,
    onSelect = function(id, name, value, option)
        print("onSelect: ", id, name, value, json.encode(option))
    end,
    onClear = function(id, name)
        print("onClear: ", id, name)
    end,
})
```
This is how it looks in-game:<p/>
![In Game](https://i.imgur.com/cYRNa8X.gif)<p/>



#### Options
Options are the values it will autocomplete to.
##### Properties
| Property | Type   | Optional | Description                                     |
|-         |-       |-         |-                                                |
| value    | string | No       | Value of the option                             |
| label    | string | Yes      | Label of the option, will be shown over `value` |

#### Default Value
Is the value already written in the input when the UI is initialized.

#### Placeholder
Is the text shown within the input, when there is nothing written by a user.
```lua
placeholder = "Input Here!"
```
![Placeholder](https://i.imgur.com/tvX2TmH.png)

#### Allow Clear
When `true` a "x" is shown, when it's pressed will clear the users input.<p/>
![Allow Clear](https://i.imgur.com/GgDthUu.png)

#### Auto Focus
When `true` the AutoComplete will be focused when shown.

#### Backfill
Allows the user to use the keyboard to select options.

#### Bordered
Weather the AutoComplete should have a border.<p/>
![Bordered](https://i.imgur.com/TjLJgP6.png)

#### DefaultOpen
When `true` the popup of the AutoComplete will be shown by default.

#### Disabled
When `true` the AutoComplete will be disabled.<p/>
![Disabled](https://i.imgur.com/YH6EwGG.png)

#### NotFoundContent
Is the text shown when the user inputs something that is not in `options`.<p/>
![NotFoundContent](https://i.imgur.com/1ArprGV.png)

#### Status
When set the outline of the input will change depending on its value.<p/>
![Status](https://i.imgur.com/wR0l8MU.png)

#### OnBlur
Event is fired when the user clicks away from the input.
```lua
onBlur = function(id, name)
    print("User Clicked Away From Autocomplete.")
end
```

#### OnChange
Event is fires when the user changes the input.
```lua
onChange = function(id, name, value)
    print("Changed Input To: " .. value)
end
```
So if the user wrote `a` it will print `Changed Input To: a`

#### OnDropdownVisibleChange
Event fires when the popup/suggestion list is shown/hidden.
```lua
onDropdownVisibleChange = function(id, name, open)
    local str = "Opened"
    if not open then
        str = "Closed"
    end
    print("User " .. str .. " the input popup.")
end
```

#### OnFocus
Event fires when the user presses the input to write.
```lua
onFocus = function(id, name)
    print("User Focused the Input.")
end
```

#### OnSearch
"Called when searching items"<p/>
Seems to be the same as [OnChange](#onchange)

#### OnSelect
Event fires when the user presses a suggestion from the list.
```lua
onSelect = function(id, name, value, option)
    print("User Selected: " .. value)
    print("Options: " .. json.encode(option))
end
```

#### OnClear
Event is fired when the user presses the clear button.<p/>
Which is only shown when [Allow Clear](#allow-clear) is `true`.
```lua
onClear = function(id, name)
    print("User Cleared the Input")
end
```