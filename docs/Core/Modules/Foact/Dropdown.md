### Properties
| Property       | Type                      | Description                                                   |
|-               |-                          |-                                                              |
| text           | string                    | Text displayed in the dropdown                                |
| items          | table                     | Menu item content, [See Items](#items)                        |
| type           | button, default           | Type of dropdown                                              |
| buttonType     | string                    | Button-type of dropdown [See Button](Button.md)               |
| buttonStyle    | table                     | CSS Properties of dropdown button                             |
| buttonProps    | table                     | Properties of button. [See Button](Button.md)                 |
| placement      | string                    | Placement of popup from dropdown. [See Placement](#placement) |
| arrow          | boolean, table            | [See Arrow](#arrow)                                           |
| trigger        | click, hover, contextMenu | How the dropdown is triggered                                 |
| open           | boolean                   | Controls whether dropdown is opened                           |
| autoFocus      | boolean                   | Whether dropdown will have focus                              |
| disabled       | boolean                   | Whether dropdown is disabled                                  |
| menu           | table                     | [See Menu](#menu)                                             |

#### Properties (type = button)
| Property       | Type                  | Description                 |
|-               |-                      |-                            |
| loading        | boolean               | Whether dropdown is loading |
| danger         | boolean               | Displays buttons as red     |
| icon           | string                | Icon to open the dropdown   |
| size           | small, middle, large  | Size of buttons             |
| menuButtonType | string                | Type of button              |
These properties are for when `type == "button"`

[List of Icons](https://ant.design/components/icon?theme=dark#list-of-icons)<p/>
[Ant Design Dropdown](https://ant.design/components/dropdown?theme=dark)<p/>
[Ant Design Menu Properties](https://ant.design/components/menu?theme=dark)

### Children
Dropdown does not support children.

### Example
```lua
local items = {
    {
        label = "Xean Xeansen",
        key = "1",
    },
    {
        label = "Walter Waltersen",
        key = "2",
    },
    {
        type = "divider"
    },
    {
        label = "More -> Xean",
        key = "more:xean",
        children = {
            {
                label = "Kick",
                key = "xean:kick",
            },
            {
                label = "Mute",
                key = "xean:mute",
            }
        }
    }
}

myUI:createElement("Dropdown", {
    text = "Dropdown Text",
    items = items,
    onClick = function(_, _, event)
        print("Teleport To")
    end,
    menu = {
        selectable = true,
        onClick = function(_, _, event)
            local key = event.key;
            local keyPath = event.keyPath;
            print("menu -> onClick: Key: ", key)
            --print("menu -> onClick: ", json.encode(event))
        end,
        onSelect = function(_, _, event)
            local keyPath = event.keyPath;
            local selectedKeys = event.selectedKeys
            print("menu -> onSelect: ", json.encode({keyPath, selectedKeys}, {indent = true}))
            --print("menu -> onSelect: ", json.encode(event))
        end,
        onDeselect = function(_, _, event)
            local keyPath = event.keyPath;
            local selectedKeys = event.selectedKeys
            print("menu -> onDeselect: ", json.encode({keyPath, selectedKeys}, {indent = true}))
            --print("menu -> onDeselect: ", json.encode(event))
        end,
        onOpenChange = function(_, _, openKeys)
            print("menu -> onOpenChange: ", json.encode(openKeys))
        end,
    },
}),
```
This is how it looks:<p/>
![image](https://i.imgur.com/JNOFXwB.png)

#### text
The text displayed within the dropdown.

#### items
Table containing the content of the dropdown.<p/>
##### MenuItemType
| Property | Description                          | Type           | Default |
|-         |-                                     |-               |-        |
| danger   | Display the danger style             | boolean        | false   |
| disabled | Whether menu item is disabled        | boolean        | false   |
| icon     | The icon of the menu item            | string         | -       |
| key      | Unique ID of the menu item           | string         | -       |
| label    | Menu label                           | string         | -       |
| title    | Set display title for collapsed item | string         | -       |
| children | Sub-menus                            | MenuItemType[] | -       |

#### type
The type of dropdown. Just changes how the "element itself" looks.<p/>
In the below example the text "Teleport To" is a button, that will not open the dropdown:<p/>
![image](https://i.imgur.com/g6TdvSp.png)

#### buttonType
The type of button when `type = "default"`.<p/>
Can be any of the following: `primary, default, dashed, text, link`.<p/>
`buttonType = "link"`:<p/>
![image](https://i.imgur.com/8mdUXhS.png)<p/>
`buttonType = "text"`:<p/>
![image](https://i.imgur.com/9sUXGZ8.png)

#### buttonStyle
Styling of the button when `type = "default"`. You can see [more here (Button)](Button.md)

#### buttonProps
Props of the button when `type = "default"`. You can see [more here (Button)](Button.md)<p/>
Things like `onClick` etc.

#### placement
Placement of the popup for the dropdown, can be any of the following:<p/>
`bottomLeft bottom bottomRight topLeft top topRigh`<p/>
`placement = "top"`:<p/>
![image](https://i.imgur.com/PcTnY6t.png)<p/>

#### arrow
Can be either a `boolean` or a table, like so `arrow = {pointAtCenter = boolean}`.<p/>
When `true` a arrow will point towards the element that opened the dropdown.<p/>
When `{pointAtCenter = true}` the arrow will point in the center of the element that opened the dropdown.

#### trigger
How the dropdown is triggered.<p/>
`click` means the user has to click to open the dropdown.<p/>
`hover` means the user just have to hover to open the dropdown.<p/>
`contextMenu` means the user has to right-click to open the dropdown.<p/>

#### open
Controls weather the dropdown is opened/closed.<p/>
When you set this you'll have to handle the opening/closing of the dropdown yourself.

#### autoFocus
Weather the dropdown should have focus when displayed to the user.

#### disabled
Weather the dropdown is disaplyed.<p/>
![image](https://i.imgur.com/ZaTWZz8.png)

#### menu
Table containing properties for menu.

##### Menu Properties
| Property              | Description                                                 | Type                                                     |
|-                      |-                                                            |-                                                         |
| selectable            | Allows selecting menu items                                 | boolean                                                  |
| multiple              | Allows selection of multiple items                          | boolean                                                  |
| mode                  | Direction/Type of menu                                      | vertical horizontal inline                               |
| defaultOpenKeys       | List of default opened keys. (For entries with children)    | string[]                                                 |
| defaultSelectedKeys   | Table of default selected keys. (When selectable=true)      | string[]                                                 |
| expandIcon            | Icon for menus containing sub-menus                         | string                                                   |
| forceSubMenuRender    | "Render submenu into DOM before it becomes visible"         | boolean                                                  |
| inlineCollapsed       | "Specifies the collapsed status when menu is inline mode"   | boolean                                                  |
| inlineIndent          | "Indent (in pixels) of inline menu items on each level"     | number                                                   |
| style                 | CSS Properties fors styling menu                            | table/CSSProperties                                      |
| subMenuCloseDelay     | "Delay time to hide submenu when mouse leaves (in seconds)" | number                                                   |
| subMenuOpenDelay      | "Delay time to show submenu when mouse enters (in seconds)" | number                                                   |
| theme                 | Color theme of the menu                                     | light dark                                               |
| triggerSubMenuAction  | "Which action can trigger submenu open/close"               | hover click                                              |
| onClick               | Called when a menu item is clicked                          | function(event)                                          |
| onSelect              | Called when a menu item is selected                         | function(event)                                          |
| onDeselect            | Called when a menu item is deselected (multiple mode only)  | function(event)                                          |
| onOpenChange          | Called when sub-menus are opened or closed                  | function(openKeys)                                       |

##### onClick
Event is fired when user clicks a sub-menu/item.
```lua
onClick = function(_, _, event)
    local key = event.key;
    local keyPath = event.keyPath;
    print("menu -> onClick: Key: ", key)
end
```

##### onSelect
Event is fired when `selectable = true` and the user selects an item or sub-item.
```lua
onSelect = function(_, _, event)
    local keyPath = event.keyPath;
    local selectedKeys = event.selectedKeys
    print("menu -> onSelect: ", json.encode({keyPath, selectedKeys}, {indent = true}))
end
```

##### onDeselect
Event is fired when `selectable = true` and the user deselects an item or sub-item.

##### onOpenChange
Event is fired when any sub-menu is opened or closed.
```lua
onOpenChange = function(_, _, openKeys)
    print("menu -> onOpenChange: ", json.encode(openKeys))
end
```