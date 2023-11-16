### Properties (All)
| Property       | Type                            | Description                                            |
|-               |-                                |-                                                       |
| type           | `Input` `Search` `TextArea`     | The type of the input                                  |
| defaultValue   | string                          | The initial input content                              |
| addonAfter     | string                          | Label displayed after the input field                  |
| addonBefore    | string                          | Label displayed before the input field                 |
| allowClear     | boolean                         | Adds a button to clear input field                     |
| bordered       | boolean                         | Weather the input has a border                         |
| disabled       | boolean                         | Weather the input is disabled                          |
| maxLength      | number                          | Max allowed input length                               |
| prefix         | table                           | [See Prefix](#prefix)                                  |
| suffix         | table                           | [See Suffix](#suffix)                                  |
| showCount      | boolean                         | When true, input count will be displayed               |
| status         | `error`, `warning`              | Outline color of the input, used for error and warning |
| size           | `large` `middle` `small` number | Size of the input                                      |
| onChange       | function(event)                 | Fired when user changes input textfield                |
| onPressEnter   | function(event)                 | Fired when user presses enter while focused on input   |

### Properties (Text Area)
| Property       | Type                            | Description                                            |
|-               |-                                |-                                                       |
|-               |-                                | ALL FROM [All](#properties-all) also work here!        |
| autoSize       | number | table                  | [See AutoSize](#autosize)                              |

### Properties (Search)
| Property    | Type                           | Description                                     |
|-            |-                               |-                                                |
|-            |-                               | ALL FROM [All](#properties-all) also work here! |
| enterButton | table                          | [See EnterButton](#enterbutton)                 |
| loading     | boolean                        | Weather the input is loading                    |
| onSearch    | function(value, event, source) | Fired when the `button` is clicked              |

### Children
Input does not support children.

### Example

```lua
local input = AM:createElement("Input", {
    placeholder = "Input Here...",
    width = "175px",
    type = "search",
    -- Fired when user changes input textfield
    onChange = function(id, name, event)
        local value = event.target.value
        print("Value Changed To: " .. value)
        --print("On Change Event: ", json.encode(event, {indent = true}))
    end,
    -- Fired when user presses enter on the keybaord.
    onPressEnter = function(id, name, event)
        local value = event.target.value
        print("Presssed Enter. Value: " .. value)
    end,
    -- Fired when type="search" and the right-side button is pressd.
    onSearch = function(id, name, value, event, source)
        print("Search Button Pressed. Value: " .. value)
        --print("onSearch: ", value, json.encode(event, {indent = true}), json.encode(source))
    end,
})
```
Looks like: <p/>
![Showcase](https://i.imgur.com/yxUPCjR.png)


#### type
The type of input. Can be `Input`, `Search` or `TextArea`.<p/>
![type](https://i.imgur.com/Murgoqc.png)

#### defaultValue
The default value in the input text area.<p/>
```lua
defaultValue = "Start Value"
```
![defaultValue](https://i.imgur.com/QnpYp5z.png)

#### addonAfter
Text displayed after the input textfield.<p/>
```lua
addonAfter = ".com"
```
![addonAfter](https://i.imgur.com/9OJeJY9.png)<p/>
In this example I have changed the `type` of the input field to default which is `Input`<p/>

#### addonBefore
Text displayed before the input textfield.<p/>
```lua
addonBefore = "http://"
```
Same as addonAfter, I've changed the type to `Input`.<p/>

#### allowClear
When `true` a clear button is displayed to clear the textfield.<p/>
![allowClear](https://i.imgur.com/1dQgDKN.png)

#### bordered
When `false` the outline and background is removed.<p/>
![bordered](https://i.imgur.com/GprREWQ.png)

#### disabled
When `true` the input is disabled, not allowing the user to use it.<p/>
![disabled](https://i.imgur.com/n9KmYni.png)

#### maxLength
Sets the max allowed length of the text user can write.<p/>
```lua
maxLength = 10
```
Will only allow the user to write 10 characters<p/>
![maxLength](https://i.imgur.com/AeA7EB6.png)

#### prefix
Text or Icon displayed before input field.<p/>
As usual icons can be [found here](https://ant.design/components/icon).

##### Example
```lua
-- Icon display
prefix = {
    type = "icon",
    value = "FileSearchOutlined",
}
```
How icon prefix looks:<p/>
![Prefix Icon](https://i.imgur.com/YGIwiJW.png)
```lua
-- Text display
prefix = {
    type = "text",
    value = "PREFIX",
}
```
How text prefix looks:<p/>
![Text Prefix](https://i.imgur.com/DQaYEKb.png)

#### suffix
Suffix works just like prefix, but a suffix is after the input.<p/>
As usual icons can be [found here](https://ant.design/components/icon).

#### Example
```lua
-- Icon display
suffix = {
    type = "icon",
    value = "FileSearchOutlined",
}
```
How icon suffix looks:<p/>
![Prefix Suffix](https://i.imgur.com/4j5nSJt.png)
```lua
-- Text display
suffix = {
    type = "text",
    value = "SUFFIX",
}
```
How text suffix looks:<p/>
![Text Suffix](https://i.imgur.com/K2ZbePd.png)

#### showCount
When `true` a number will be displayed depending on the type of input.<p/>
The count will increment with each character in the input<p/>
![showCount](https://i.imgur.com/mGCGJU1.png)

#### status
Can be either `error` or `warning`. Changes the outline color.<p/>
![status error](https://i.imgur.com/ho093xj.png)<p/>
![status warning](https://i.imgur.com/ttV5fC4.png)

#### size
Can be `small`, `middle`, `large` or any number.<p/>
When its a number, its treated as pixels.<p/>
![size](https://i.imgur.com/36PQk0Z.png)

#### onChange
Event is fired when user changes the input.

#### onPressEnter
Event is fired when the user presses enter while the input is focused.
```lua
onPressEnter = function(id, name, event)
    local value = event.target.value
    print("Presssed Enter. Value: " .. value)
    --local ctrlKey = event.ctrlKey
    --local shiftKey = event.shiftKey
    --local altKey = event.altKey
    --local key = event.key
end
```
You can also get more usefull information like weather the user is holding CTRL while pressing enter.

#### autoSize (TextArea only)
When `true` and `type == "TextArea"` the text area will size depending on the length of the users input.<p/>
Can also be a table like:
```lua
autoSize = {
    minRows = 2,
    maxRows = 6,
}
```
This will size the text are after the input.

#### enterButton (Search only)
Works like [prefix](#prefix) and [suffix](#suffix), this just changes the "search" button of the search input.<p/>
```lua
enterButton = {
    type = "text",
    value = "TEXT",
}
```
![1](https://i.imgur.com/gYuqr2o.png)
```lua
enterButton = {
    type = "icon",
    value = "SearchOutlined",
}
```
![2](https://i.imgur.com/1jBoG4S.png)

#### loading (Search only)
When `true` the "search" button displays a loading icon, and prevets the user from clicking it.<p/>
Like so:<p/>
![loading](https://i.imgur.com/IaoMNkZ.png)

#### onSearch (Search only)
Event is fired when the user presses the button when `type == "Search"`.
```lua
onSearch = function(id, name, value, event, source)
    print("Search Button Pressed. Value: " .. value)
    --local ctrlKey = event.ctrlKey
    --local shiftKey = event.shiftKey
    --local altKey = event.altKey
    --print("onSearch: ", value, json.encode(event, {indent = true}), json.encode(source))
end,
```
You can get usefull information like weather the user is holding CTRL, like shown above.