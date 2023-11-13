### Properties
| Property | Type                                                                    | Optional | Description                           |
|-         |-                                                                        |-         |-                                      |
| vertical | boolean                                                                 | yes      | The direction of the flex             |
| wrap     | boolean                                                                 | yes      | Auto wrap line                        |
| justify  | flex-start, center, flex-end, space-between, space-around, space-evenly | yes      | The alignment of the elements, x axis |
| align    | flex-start, center, flex-end                                            | yes      | The alignment of the elements, y axis |
| gap      | small, middle, large, string, number                                    | yes      | The gap between grips                 |
| [events] | function                                                                | yes      | Please read the [events page](Events) |

[Examples can be seen here](https://ant.design/components/flex)

### Children
Can have children.

### Exmaple
```lua
local b1 = AM:createElement("Button", {
    text = "Hello, World!",
    icon = "AimOutlined",
})

local b2 = AM:createElement("Button", {
    type = "link",
    text = "Hello, World!",
})

local f1 = AM:createElement("Flex", {
    width = "100%",
    height = "100%",
}, {
    b1,
    b2
})
```
This is how it looks in-game:<p/>
![Showcase](https://i.imgur.com/4AVsc5n.png)

#### Vertical
When true the direction of the flex changes to vertical display instead of horizontal.<p/>
![Showcase](https://i.imgur.com/RiOCua7.png)

#### Wrap
When true, the content will automaticly be wrapped.<p/>
![Showcase](https://i.imgur.com/T53UlsO.png)

#### Justify
Sets the alignment of elements in the x-axis.<p/>
![flex-start](https://i.imgur.com/OXYSaEz.png)
![center](https://i.imgur.com/Jmji3wV.png)
![flex-end](https://i.imgur.com/XmIHbaW.png)
![space-between](https://i.imgur.com/GeE2ZJA.png)
![space-around](https://i.imgur.com/ORmRTWl.png)
![space-evenly](https://i.imgur.com/jgJTgq5.png)

#### Align
Sets the alignment of elements in the y-axis.<p/>
![flex-start](https://i.imgur.com/luBsoQW.png)
![center](https://i.imgur.com/3zHGFWu.png)
![flex-end](https://i.imgur.com/YFpDGsJ.png)

#### Gap
Sets the gap between elements.<p/>
`small`, `middle`, `large` are preset that can be used.<p/>
But can be any css, and when its a number its defaulting to pixels.<p/>
![small](https://i.imgur.com/SLIQ9xO.png)
![middle](https://i.imgur.com/7cLYEVQ.png)
![large](https://i.imgur.com/NP2CoIV.png)
![100px](https://i.imgur.com/D6UUkRV.png)