### Properties
| Property          | Type                         | Optional | Description                                          |
|-                  |-                             |-         |-                                                     |
| text              | string                       | yes      | Text displayed in the divider                        |
| dashed            | boolean                      | yes      | Weather line is dashed                               |
| orientation       | string: left, right, center  | yes      | Position of the title inside the divider             |
| orientationMargin | number                       | yes      | The margin between the title and its closest border  |
| plain             | boolean                      | yes      | Weather text is shown as plain text                  |
| type              | string: horizontal, vertical | yes      | The direction of the divider                         |
| [events]          | function                     | yes      | Please read the [events page](Events)                |

[Examples can be seen here](https://ant.design/components/divider)

### Children
Not supported on a divider. Use `text` property to give the divider a text.

### Example
```lua
local divider = myUI:createElement("Divider", {
    text = "This is a Divider"
})
```
This is how it looks in-game:<p/>
![Showcase](https://i.imgur.com/kvJnLNT.png)

#### Text
The text displayed inside the divider.<p/>
![Showcase](https://i.imgur.com/kvJnLNT.png)

#### Dashed
If true the line is dashed.<p/>
![Showcase](https://i.imgur.com/Kf6KYrK.png)

#### Orientation
The position of the title inside the divider.<p/>
![Showcase](https://i.imgur.com/EZrfZPB.png)

#### Orientation Margin
The margin between the title and its closet border.<p/>
![Showcase](https://i.imgur.com/b7o157P.png)

#### Plain
If true the text is shown as a plain text.<p/>
![Showcase](https://i.imgur.com/knbN97h.png)

#### Type
The direction of the divider. There can not be a text on a vertical divider.<p/>
![Showcase](https://i.imgur.com/7FW0Ndh.png)