### Properties
| Property     | Type                                 | Description                                          |
|--------------|--------------------------------------|------------------------------------------------------|
| text         | string                               | Text displayed on the button                         |
| type         | primary, default, dashed, text, link | The type of button                                   |
| icon         | string                               | The Icon of the button                               |
| size         | default, large, small                | Size of the button                                   |
| disabled     | boolean                              | Weather the button is disabled                       |
| loading      | boolean                              | Loading indicator for the button                     |
| ghost        | boolean                              | Makes the buttons background transparent             |
| block        | boolean                              | Makes the buttons width fit its parents width        |
| danger       | boolean                              | Makes the button "warning" red                       |
| shape        | `default`, `circle`, `round`         | Shape of the button                                  |
| customButton | boolean                              | When true, will be a button without any styling      |
| [events]     | function                             | Please read the [events page](Events)                |
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

#### customButton
When set to `true` the button will be a default HTML button without any styling.