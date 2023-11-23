### Properties
| Property          | Type            | Description                                   |
|-                  |-                |-                                              |
| title             | string          | Title of the popconfirm                       |
| cancelText        | string          | Text displayed in the cancel option           |
| okText            | string          | Text displayed in the ok option               |
| description       | string          | Text displayed in popconfirm                  |
| disabled          | boolean         | Weather the popconfirm should display         |
| icon              | string          | Icon of the popover                           |
| cancelButtonProps | table           | [See cancelButtonProps](#cancelbuttonprops)   |
| okButtonProps     | table           | [See okButtonProps](#okbuttonProps)           |
| okType            | string          | Button type of ok option                      |
| showCancel        | string          | Weather the cancel button should be displayed |
| onCancel          | function(event) | Fired when cancel is pressed                  |
| onConfirm         | function(event) | Fired when confirm/ok is pressed              |
| onPopupClick      | function(event) | Fired when user clicks anywhere in popconfirm |
| open              | boolean         | Controls weather the popconfirm is displayed  |
All properties are optinoal.<p/>
[List of Icons can be found here](https://ant.design/components/icon)<p/>
[See more properties here](https://ant.design/components/popconfirm)

### Children
Popconfirm can have children, by default when a child of popconfirm is clicked/focused it will open.<p/>
You can overwrite the open functionality if desired.

### Example

```lua
AM:createElement("Popconfirm", {
    title = "Title",
    description = "Are you sure you want to do this task?",
    okText = "Yes",
    cancelText = "No",
    open = false,
    onConfirm = function(_, _, event)
        print("Clicked Confirm!")
        --print("Event: ", json.encode(event))
    end,
    onCancel = function(_, _, event)
        print("Clicked Cancel!")
        --print("Event: ", json.encode(event))
    end,
    -- Fired when user clicks anywhere in the popup.
    onPopupClick = function(_, _, event)
        print("Clicked Popup!")
        print("Event: ", json.encode(event))
    end,
}, {
    AM:createElement("Button", {text = "Do Task"}),
})
```
This is how it looks:<p/>
![In Game](https://i.imgur.com/aTniwGT.png)

#### disabled
When `disabled = true` the popover will not be displayed when children is clicked/focused.

#### icon
Change the icon in the pop-left corner of the popover.<p/>
```lua
icon = "QuestionCircleOutlined"
```
Looks like: <p/>
![icon](https://i.imgur.com/aClMjp9.png)

#### cancelButtonProps & okButtonProps
Properties of the 2 buttons.<p/>
[Can be found here](Button.md) or [on Ant Design](https://ant.design/components/button#api)<p/>
So if you wanted to give icons to ok/confirm and cancel button, it would look like:<p/>
```lua
cancelButtonProps = {icon = "ExclamationOutlined"},
okButtonProps = {icon = "CheckSquareOutlined"},
```
![buttonProps](https://i.imgur.com/1ysJ1rU.png)

#### cancelButtonProps
Properties of the cancel button.<p/>
[Can be found here (Button)](Button.md)<p/>
[Or on Ant Design](https://ant.design/components/button#api)<p/>
So if you wanted to chance the type of cancel to "primary":<p/>
```lua
cancelButtonProps = {type = "primary"}
```
![cancelButtonProps](https://i.imgur.com/MFbhHTL.png)

#### okButtonProps
Properties of the ok/confirm button.<p/>
[Can be found here (Button)](Button.md)<p/>
[Or on Ant Design](https://ant.design/components/button#api)<p/>
So if you wanted to chance the type of ok/confirm to "link":<p/>
```lua
okButtonProps = {type = "link"}
```
![okButtonProps](https://i.imgur.com/mGEYya0.png)

#### okType
The type of button the ok/confirm button is.<p/>
```lua
okType = "link",
```
![okType](https://i.imgur.com/XxLr8lx.png)

#### showCancel
Weather the cancel button should be displayed.<p/>
So if `showCancel = false`, cancel button will be hidden.<p/>
![showCancel](https://i.imgur.com/3u7hu0G.png)

#### onCancel
Event is fired when user clicks the cancel button.
```lua
onCancel = function(_, _, event)
    print("Clicked Cancel!")
print("Event: ", json.encode(event))
end
```

#### onConfirm
Event is fired when user clicks the confirm/ok button.
```lua
onConfirm = function(_, _, event)
    print("Clicked Confirm!")
print("Event: ", json.encode(event))
end
```

#### onPopupClick
Event is fired when user clicks __anywhere__ in the popup/popconfirm.
```lua
onPopupClick = function(_, _, event)
    print("Clicked in Popup!")
    print("Event: ", json.encode(event))
end
```

#### open
Controls weather the popconfirm is open or closed, so you can overwrite how the popconfirm will be displayed.

##### Example
```lua
local popconfirm; popconfirm = AM:createElement("Popconfirm", {
    title = "Title",
    description = "Are you sure you want to do this task?",
    okText = "Yes",
    cancelText = "No",
    open = false,
}, {
    AM:createElement("Button", {text = "Do Task"}),
})

local controller; controller = AM:createElement("Button", {
    text = "Open Popconfirm!",
    onClick = function (id, name, event)
        local newState = not popconfirm.open
        popconfirm.open = newState
        if newState then
            controller.text = "Close Popconfirm!"
        else
            controller.text = "Open Popconfirm!"
        end
    end,
})
```
In this example the button within popconfirm does not open it, but the controller button does instead.<p/>
![Example](https://i.imgur.com/sIAN6WO.gif)