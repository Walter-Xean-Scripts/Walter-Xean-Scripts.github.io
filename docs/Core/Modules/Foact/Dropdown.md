### Properties
| Property             | Type                                  | Description                                 |
|-                     |-                                      |-                                            |
| items                | [See Menu Props](#menu-props)         | The menu props                              |
| placement            | [See Placement](#placement)           | Sets the placement of the popup menu        |
| autoFocus            | boolean                               | Focus dropdown when overlay is opened       |
| disabled             | boolean                               | Weather the dropdown menu is disabled       |
| trigger              | `contextMenu` `click` `hover`         | How the dropdown is opened                  |
| type                 | `button`                              | Sets the type of dropdown                   |
| selectable           | boolean                               | Sets weather the children are selectable    |
| multiple             | boolean                               | When true multiple children can be selected |
| defaultSelectedKeys  | string[]                              | Default selected keys                       |
| triggerSubMenuAction | `click` `hover`                       | How sub-menues are opened                   |
| onClick              | function(id, name, key)               | [Function Event](#onclick)                  |
| onSelect             | function(id, name, key, selectedKeys) | [Function Event](#onselect)                 |
| onDeselect           | function(id, name, key, selectedKeys) | [Function Event](#ondeselect)               |
| onOpenChange         | function(id, name, open, info)        | [Function Event](#onopenchange)             |
| onSubMenuOpenChange  | function(id, name, openKeys)          | [Function Event](#onsubmenuopenchange)      |

All properties are optional.

### Menu Props
| Property  | Type                        | Description                           |
|-          |-                            |-                                      |
| -         | -                           | -                                     |

`key` is the only property that is required.

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

#### OnClick
```lua
onClick = function(id, name, key)
    print("onClick: ", id, name, key)
end
```
If I press `First` from the [Example](#example): `onClick: number string first` will be printed.

#### OnSelect
Is used for when `selectable` is `true` as well as `multiple`.
```lua
onSelect = function(id, name, key, selectedKeys)
    print("onSelect: ", id, name, key, selectedKeys)
end,
```
When `Second` is pressed from [Example](#example): `onSelect: number string {second}` will be printed.<p/>

#### OnDeselect
Is used for when `selectable` is `true` as well as `multiple`.
```lua
onDeselect = function(id, name, key, selectedKeys)
    print("onDeselect: ", id, name, key, selectedKeys)
end,
```
When `Second` is already selected and I press it: `onDeselect: number string {}`.<p/>
An empty array is printed because there are no selected items.

#### OnOpenChange
Event is triggered when the dropdown is opened.
```lua
onOpenChange = function(id, name, open, info)
    print("onOpenChange: ", id, name, open, info)
end,
```

#### OnSubMenuOpenChange
Event is triggered when a sub-menu with children is opened.
```lua
onSubMenuOpenChange = function(id, name, openKeys)
    print("onSubMenuOpenChange: ", id, name, openKeys)
end,
```