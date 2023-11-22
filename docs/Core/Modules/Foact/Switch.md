### Properties
| Property          | Type               | Description                                      |
|-------------------|--------------------|--------------------------------------------------|
| checked           | boolean            | Whether the switch is checked                    |
| defaultChecked    | boolean            | Whether the switch is checked by default         |
| disabled          | boolean            | Whether the switch is disabled                   |
| loading           | boolean            | Whether the switch is loading                    |
| size              | "default", "small" | Size of the switch                               |
| autoFocus         | boolean            | Whether the switch has focus                     |
| checkedChildren   | string, table      | Content displayed in the switch when checked     |
| unCheckedChildren | string, table      | Content displayed in the switch when unchecked   |
[Ant Design Switch](https://ant.design/components/switch?theme=dark)<p/>
[List of Icons](https://ant.design/components/icon)

### Children
Switch does not support children.

### Example
```lua
local switch = myUI:createElement("Switch", {
    checkedChildren = "On",
    unCheckedChildren = {icon = "QuestionCircleOutlined"},
    onChange = function(_, _, checked, event)
        print("onChange: ", checked, json.encode(event))
    end,
    onClick = function(_, _, checked, event)
        print("onClick: ", checked, json.encode(event))
    end,
})
```
![image](https://i.imgur.com/ooHwOKc.png)

#### checked
Weather the switch is checked, when you set this you'll have to handle the checking/unchecking of the switch yourself.<p/>
Luckily thats very simple:
```lua
local switch; switch = myUI:createElement("Switch", {
    checked = true,
    onChange = function(_, _, checked, event)
        switch.checked = checked
        -- Your code here
    end,
})
```

#### defaultChecked
Weather the switched is checked by default.

#### disabled
Weather the switch is disabled, when disabled the user can not interact with it.<p/>
![image](https://i.imgur.com/yJ9oUx4.png)

#### loading
Weather the switch is loading, when true the switch will have a loading icon.<p/>
User will be unable to interact with the switch when true.<p/>
![image](https://i.imgur.com/ylfSTvm.png)

#### size
What size the switch will have, can either be "default" or "small".<p/>
![image](https://i.imgur.com/uFHtziV.png)

#### autoFocus
Weather the switch will have focus when displayed to the user.

#### checkedChildren
What is displayed within the switch when it's checked.<p/>
Can be either a string: `checkedChildren = "ON"`:<p/>
![image](https://i.imgur.com/a3EsWH9.png)<p/>
Or a table with icon as a value of a string: `checkedChildren = {icon = "QuestionCircleOutlined"}`:<p/>
![image](https://i.imgur.com/cIg0OuN.png)

#### unCheckedChildren
Same as the [checkedChildren](#checkedchildren), but it's what's displayed when the switch is unchecked.