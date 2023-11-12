### Properties
| Property         | Type                                       | Optional | Description                                     |
|-                 |-                                           |-         |-                                                |
| min              | number                                     | yes      | Sliders minimum value                           |
| max              | number                                     | yes      | Sliders maximum value                           |
| defaultValue     | number, array                              | yes      | Sliders default value                           |
| disabled         | boolean                                    | yes      | Weather slider is disabled for use              |
| tooltipOpen      | boolean, nil                               | yes      | How the tooltip should be handled               |
| tooltipPlacement | [See TooltipPlacement](#tooltipplacement)  | yes      | How the tooltip should be handled               |
| step             | number                                     | yes      | How big `steps` the slider takes                |
| vertical         | boolean                                    | yes      | Weather slider should be vertical               |
| autoFocuss       | boolean                                    | yes      | When `true` slider will be focused when mounted |
| keyboard         | boolean                                    | yes      | When `true` slider can be moved with keyboard   |
| dots             | boolean                                    | yes      | "Whether the thumb can drag over tick only"     |
| range            | boolean                                    | yes      | When `true` the slider has 2 thumbs             |
| reverse          | boolean                                    | yes      | When `true` the slider is reversed              |
[Ant Design](https://ant.design/components/slider)

### Children
Not supported on slider.

### Example
```lua
local slider = myUI:createElement("Slider", {
    width = "200px",
    min = 0,
    max = 500,
    defaultValue = 100,
    step = 5.0,
    onAfterChange = function(elementId, uiName, value)
        print("onAfterChange: ", elementId, uiName, value)
    end,
    onChange = function(elementId, uiName, value)
        print("onChange: ", elementId, uiName, value)
    end,
})
```
This is how it looks in-game:<p/>
![In Game](https://i.imgur.com/dPgtJkA.png)

#### Min
The minumum value the slider can be set to.<p/>
![Min](https://i.imgur.com/G7LEELm.png)

#### Max
The maximum value the slider can be set to.<p/>
![Max](https://i.imgur.com/QYUAz58.png)

#### Default Value
The value the slider will start with.<p/>
In the showcased example the starting value is `100`.<p/>
When `range` is `true` the `defaultValue` should be an array, like:<p/>
```lua
defaultValue = {25, 75}
```

#### Disabled
When true the slider will be disabled.<p/>
Which means the user will not be able to move the slider.<p/>
![Disabled](https://i.imgur.com/Oa43bqg.png)

#### TooltipOpen
When `undefined`/`nil` the tooltip will show when the user is interacting with the slider.<p/>
When `true` the tooltip will always show.<p/>
When `false` the tooltip will never show.<p/>
![TooltipOpen](https://i.imgur.com/fqItDBx.gif)

#### TooltipPlacement
Sets the direction of the tooltip.<p/>
It's a string and can be any of the following:<p/>
`top`, `left`, `right`, `bottom`, `topLeft`, `topRight`, `bottomLeft`, `bottomRight`, `leftTop`, `leftBottom`, `rightTop`, `rightBottom`<p/>
![TooltipPlacement](https://i.imgur.com/kBdvftW.png)

#### Step
Sets the amount the slider "steps" with each time.<p/>
This is how it looks with a `step` equal to `0.5`<p/>
![Step](https://i.imgur.com/dHHNR62.png)

#### Vertical
When `true` the slider will be displayed vertically instead of horizontally<p/>
![Vertical](https://i.imgur.com/6vQReyU.png)

#### Auto Focus
When `true` the slider will be focused when the UI is shown.<p/>

#### Keyboard
When `true` the slider can be controlled with the keyboard aswell as the mouse.<p/>

#### Dots
I'm not actually sure what this does.<p/>
The Ant Design description is "Whether the thumb can drag over tick only".<p/>

#### Range
When `true` the slider will have 2 end and both can be moved.<p/>
Note `value` in `onAfterChange` and `onChange` is now an array.
```lua
local slider = myUI:createElement("Slider", {
    width = "200px",
    min = 0,
    max = 100,
    defaultValue = {25, 75},
    onAfterChange = function(id, name, value)
        local min = value[1]
        local max = value[2]
        print("Min: " .. min .. " - Max: " .. max)
    end,
})
```
![Range](https://i.imgur.com/AGvEB2g.gif)

#### Reverse
Flips/Reverses the slider.<p/>
![Reverse](https://i.imgur.com/4iMzrhe.png)