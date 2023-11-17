### Properties
| Property | Type                                 | Optional | Description                                          |
|----------|--------------------------------------|----------|------------------------------------------------------|
| text     | string                               | yes      | Text displayed on the button                         |
| type     | primary, default, dashed, text, link | yes      | The type of button                                   |
| icon     | string                               | yes      | The Icon of the button                               |
| size     | default, large, small                | yes      | Size of the button                                   |
| disabled | boolean                              | yes      | Weather the button is disabled                       |
| loading  | boolean                              | yes      | Loading indicator for the button                     |
| ghost    | boolean                              | yes      | Makes the buttons background transparent             |
| block    | boolean                              | yes      | Makes the buttons width fit its parents width        |
| danger   | boolean                              | yes      | Makes the button "warning" red                       |
| shape    | `default`, `circle`, `round`         | yes      | Shape of the button                                  |
| [events] | function                             | yes      | Please read the [events page](Events)                | 

[List of Icons](https://ant.design/components/icon).<p/>
[You can see more properties here](https://ant.design/components/button#api).

### Children
Not supported on button - use the `text` property for setting the text of the button.

### Example
```lua
local btn = myUi:createElement("Button", {
    text = "Hello, World!",
    icon = "CaretRightOutlined",
    loading = true,
    onClick = function(uiName, elementId, event)
        print("Hello, World! Button was Clicked")
    end
})
```
This is how the example looks in-game:<p/>
![Showcase](https://i.imgur.com/snLSITG.png)<p/>
Its `icon` property is overwritten because `ghost` is active. 

#### Type
There are `primary` button, `default` button, `dashed` button, `text` button and `link` button in antd.<p/>
![Showcase](https://i.imgur.com/iPe31xt.png)<p/>
[List of Icons](https://ant.design/components/icon).

#### Icon
Buttons can contain an icon.<p/>
![Showcase](https://i.imgur.com/BN9icIX.png)

#### Size
Buttons can have different sizes. `default`, `large` or `small`.<p/>
![Showcase](https://i.imgur.com/hxpaaxB.gif)

#### Disabled
Buttons can be disabled, so the user is unable to press the button.<p/>
![Showcase](https://i.imgur.com/fElyYMz.png)

#### Loading
A loading indicator can be added to a button. Also makes the user unable to press the button.<p/>
![Showcase](https://i.imgur.com/pyhpOXt.gif)

#### Ghost
Ghost property will make button's background transparent.<p/>
![Showcase](https://i.imgur.com/JHcxmQN.png)

#### Blocks
Will make the button fit to its parent width.<p/>
![Showcase](https://i.imgur.com/RanDn7v.png)

#### Danger
Makes the button "warning" red.<p/>
![Showcase](https://i.imgur.com/oFAcolG.png)