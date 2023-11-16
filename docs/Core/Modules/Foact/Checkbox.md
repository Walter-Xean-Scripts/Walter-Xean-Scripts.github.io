### Properties
| Property       | Type            | Optional | Description                                    |
|-               |-                |-         |-                                               |
| text           | string          | Yes      | Text displayed next to the checkbox            |
| autoFocus      | boolean         | Yes      | When true, checkbox will be foxused when shown |
| checked        | boolean         | Yes      | Weather the checkbox is checked                |
| defaultChecked | boolean         | Yes      | Weather the checkbox is checked from the start |
| disabled       | boolean         | Yes      | Weather the checkbox is disabled               |
| indeterminate  | boolean         | Yes      | "The indeterminate checked state of checkbox"  |
| onChange       | function(event) | Yes      | Fires when the user changes the checkbox       |
| isGroup        | boolean         | Yes      | [See IsGroup](#isgroup)                        |
| options        | table           | Yes      | [See IsGroup](#isgroup)                        |
| defaultValue   | string|number[] | Yes      | [See IsGroup](#isgroup)                        |

### Children
Checkbox does not support children.

### Example
```lua
local checkbox = myUI:createElement("Checkbox", {
    text = "Awesome",
    defaultChecked = true,
    onChange = function(id, name, event)
        local target = event.target
        local checked = target.checked
        print("Checkbox Changed: Checked: " .. tostring(checked))
    end,
})
```
How it looks:<p/>
![How it Looks](https://i.imgur.com/fbRNp2K.png)<p/>
When the checkbox is clicked the `onChange` will print `Checkbox Changed: Checked: true/false`

#### Text
The text displayed besides the checkbox.<p/>
From the example the text is "Awesome"

#### AutoFocus
When `true` the checkbox is focused when shown to the user.

#### Checked
Weather the checkbox is checked.<p/>
Note when set, you will have to overwrite the `onChange` functionality otherwise the checkbox
will stay checked or unchecked.<p>
```lua
onChange = function(id, name, event)
    local target = event.target
    local checked = target.checked
    checkbox.checked = checked
end
```
onChange runs with what the value _should_ actually be.

#### DefaultChecked
Weather the checkbox is checked by default.

#### Disabled
Weather the checkbox is disabled.<p/>
![Disabled Checkbox](https://i.imgur.com/0BOER2D.png)

#### Indeterminate
"The indeterminate checked state of checkbox"<p>
???

#### OnChange
Event is fired when the user checks/unchecks the checkbox.<p/>
Note when [IsGroup](#isgroup) is `true` the functionality changes!<p/>
Heres what it looks like normally:<p/>
![Print Example](https://i.imgur.com/MHg3Uxi.png)

#### IsGroup
When `true` `options` is required!<p/>

#### Example
```lua
local plainOptions = {"Apple", "Pear", "Orange"}
local options = {
    { label = 'Apple', value = '_apple' },
    { label = 'Pear', value = '_pear' },
    { label = 'Orange', value = '_orange' },
}
local optionsWithDisabled = {
    { label= 'Apple', value= '_apple' },
    { label= 'Pear', value= '_pear', disabled = true },
    { label= 'Orange', value= '_orange', disabled = false },
}

local checkbox1 = myUI:createElement("Checkbox", {
    isGroup = true,
    options = plainOptions,
    onChange = function(id, name, checkedValues)
        print("Checked Values: ", json.encode(checkedValues))
    end,
})
local checkbox2 = myUI:createElement("Checkbox", {
    isGroup = true,
    options = options,
    onChange = function(id, name, checkedValues)
        print("Checked Values: ", json.encode(checkedValues))
    end,
})
local checkbox3 = myUI:createElement("Checkbox", {
    isGroup = true,
    options = optionsWithDisabled,
    defaultValue = {"Apple", "Orange"},
    onChange = function(id, name, checkedValues)
        print("Checked Values: ", json.encode(checkedValues))
    end,
})
```
![Showcase](https://i.imgur.com/HzwvtYP.png)

##### Options Properties
| Property       | Type    | Optional | Description                                    |
|-               |-        |-         |-                                               |
| label          | string  | Yes      | Label of the entry/option                      |
| value          | string  | Yes      | Value of the entry, what comes with `onChange` |
| disabled       | boolean | Yes      | Weather the entry is disabled                  |