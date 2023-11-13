### Properties
| Property             | Optional | Type                           | Description                                 |
|-                     | -        |-                               |-                                            |
| items                | No       | [See Menu Props](#menu-props)  | The menu props                              |
| placement            | Yes      | [See Placement](#placement)    | Sets the placement of the popup menu        |
| autoFocus            | Yes      | boolean                        | Focus dropdown when overlay is opened       |
| disabled             | Yes      | boolean                        | Weather the dropdown menu is disabled       |
| trigger              | Yes      | `contextMenu` `click` `hover`  | How the dropdown is opened                  |
| type                 | Yes      | `button`                       | Sets the type of dropdown                   |
| selectable           | Yes      | boolean                        | Sets weather the children are selectable    |
| multiple             | Yes      | boolean                        | When true multiple children can be selected |
| defaultSelectedKeys  | Yes      | string[]                       | Default selected keys                       |
| triggerSubMenuAction | Yes      | `click` `hover`                | How sub-menues are opened                   |
| onOpenChange         | Yes      | function(id, name, open, info) | [Function Event](#onopenchange)             |
| menuEvents           | Yes      | function[]                     | Object containing `child`function events    |

### Menu Props
| Property  | Type      | Optional | Description                                          |
|-          |-          | -        |-                                                     |
| key       | string    | No       | Unique ID of the item                                |
| type      | `divider` | Yes      | When `true` the item is a divider                    |
| children  | item[]    | Yes      | Sub-menus or sub-menu items                          |
| danger    | boolean   | Yes      | Display item in danager style                        |
| disabled  | boolean   | Yes      | Weather the item is disabled                         |
| icon      | string    | Yes      | [Displayed Icon](https://ant.design/components/icon) |
| label     | string    | Yes      | Label/Title of the item                              |
| title     | string    | Yes      | "Set display title for collapsed item"               |

### Menu Events
| Property     | Type                         | Description                            |
|-             |-                             |-                                       |
| onClick      | function(id, name, event)    | [Function Event](#onclick)             |
| onSelect     | function(id, name, event)    | [Function Event](#onselect)            |
| onDeselect   | function(id, name, event)    | [Function Event](#ondeselect)          |
| onOpenChange | function(id, name, openKeys) | [Function Event](#onsubmenuopenchange) |
All events are optional.

### Example
```lua
local items = {
    {
        label = "First",
        key = 'first',
    },
    {
        label = "Second",
        key = 'second',
    },
    {
        type = 'divider',
    },
    {
        label = "Sub Menu",
        key = "sub-menu",
        children = {
            {
                label = "First (In Sub Menu)",
                key = "3-1"
            }
        }
    }
}

local dropdown = myUI:createElement("Dropdown", {
    width = "100px",
    height = "40px",
    text = "Open Dropdown",
    items = items,
    onClick = function(id, name, key)
        print("onClick: ", id, name, key)
    end,
    onSelect = function(id, name, key, selectedKeys)
        print("onSelect: ", id, name, key, selectedKeys)
    end,
    onDeselect = function(id, name, key, selectedKeys)
        print("onDeselect: ", id, name, key, selectedKeys)
    end,
    onOpenChange = function(id, name, open, info)
        print("onOpenChange: ", id, name, open, info)
    end,
    onSubMenuOpenChange = function(id, name, openKeys)
        print("onSubMenuOpenChange: ", id, name, openKeys)
    end,
})
```
This is how it looks:<p/>
![Showcase](https://i.imgur.com/rtCBndl.png)

#### Placement
Can be any of the following:<p/>
`topLeft` `topCenter` `topRight` `bottomLeft` `bottomCenter` `bottomRight` `top` `bottom`.<p/>
Changes the placement of the dropdown.

#### Autofocus
When `true` the dropdown will be focused when it opens.

#### Disabled
When `true` the user will not be able to open the dropdown.<p/>
![Disabled](https://i.imgur.com/18QANDy.png)

#### Trigger
When `hover` the dropdown will open once hovered by the mouse.<p/>
When `click` the dropdown can only be opened when clicked.<p/>

#### Type
When `button` the dropdown will look different.. Pretty much it, least for now.<p/>
![Type](https://i.imgur.com/x6M8c8J.png)

#### Selectable / Multiple
When `true` the user can now select multiple items at once.<p/>
Assuming [multiple](#multiple) is also `true`. Otherwise will work like normal.<p/>
![Showcase](https://i.imgur.com/MDTV9jY.png)<p/>
In this example I have selected `Second` and `First (In Sub Menu)`.

#### Default Selected Keys
The default selected values.<p/>
Example:
```lua
defaultSelectedKeys = {"second", "3-1"}
```
With this example `Second` and `First (In Sub Menu)` will be selected from the start.

#### Trigger Sub Menu Action
```lua
triggerSubMenuAction = "click"
-- or
triggerSubMenuAction = "hover"
```
Sets how sub menues are opened, when `click` the sub menues have to be clicked to be opened.<p/>
And when `hover` the sub menues will open once hovered.

#### OnOpenChange
Event is triggered when the dropdown is opened or closed.
```lua
onOpenChange = function(id, name, open, info)
    print("On Open Change: Open: " .. open .. " trigger:" .. info.source)
    -- Once opened/closed will output: "On Open Change: Open: true|false trigger: trigger|menu"
end
```
`info.source` is the `reason` the dropdown opened or closed.<p/>
`info.source == trigger` means it was opened/closed by the user with a click or hover.<p/>
`info.source == menu` means the dropdown opened/closed by the menus built-in functionality.

### Menu Events

#### OnClick
```lua
onClick = function(id, name, event)
    local key = event.key
    local keyPath = event.keyPath
    print("onClick: Key: " .. key .. " was pressed.")
    print("Key Path: " .. json.encode(keyPath)) -- encode because its an array.
end
```
If I press `First` from the [Example](#example): `onClick: Key: first was pressed.` will be printed.

#### OnSelect / OnDeselect
When `selectable` is true, this event along with `onClick` will be fired.<p/>
You just get some more information with this event.
```lua
onSelect = function(id, name, event)
    local key = event.key
    local selectedKeys = event.selectedKeys -- array of strings
    local keyPath = event.keyPath -- array of strings
    print("onSelect: Key: " .. key .. " was selected")
    print("Currently Selected Keys: " .. json.encode(selectedKeys))
    print("Key Path: " .. json.encode(keyPath))
end,
onDeselect = function(id, name, event)
    local key = event.key
    local selectedKeys = event.selectedKeys -- array of strings
    local keyPath = event.keyPath -- array of strings
    print("onDeselect: Key: " .. key .. " was deselected.")
    print("Currently Selected Keys: " .. json.encode(selectedKeys))
    print("Key Path: " .. json.encode(keyPath))
end
```
From [Example](#example):<p/>
When `Second` is not already selected and pressed will output: `onSelect: Key: second was selected`.<p/>
When `Second` is already selected and pressed will output: `onDeselect: Key: second was deselected`.

#### OnOpenChange
Event is triggered once a sub-menu is opened/closed.<p/>
`openKeys` is a list of opened sub-menus.
```lua
onOpenChange = function(id, name, openKeys)
    print("(From Sub Menu) onOpenChange: Open Keys: " .. json.encode(openKeys))
end
```