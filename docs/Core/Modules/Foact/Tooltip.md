### Properties
| Property           | Type                          | Description                                      |
|-                   |-                              |-                                                 |
| title              | string                        | Text displayed in tooltip                        |
| arrow              | boolean                       | Weather to display arrow, pointing to child      |
| color              | string                        | Background color of tooltip popup                |
| defaultOpen        | boolean                       | Weather the tooltip is opened by default         |
| mouseEnterDelay    | number                        | Delay before tooltip is shown on mouse enter     |
| mouseLeaveDelay    | number                        | Delay before tooltip is hidden on mouse leave    |
| overlayStyle       | table                         | CSS Properties of tooltip card                   |
| overlayInnerStyle  | table                         | CSS Properties of tooltip inner content          |
| placement          | string                        | Placement of the tooltip popover                 |
| trigger            | hover focus click contextMenu | How the tooltip is triggered to display and hide |
| open               | boolean                       | Weather tooltip is displayed                     |
| onOpenChange       | function(open)                | Fired when tooltip is opened/closed              |

[Ant Design Tooltip Page](https://ant.design/components/tooltip)

### Children
Tooltip requires children. Because the tooltip is displayed when a child element is hovered.

### Example
```lua
myUI:createElement("Tooltip", {
    title = "Tooltip",
    onOpenChange = function (id, uiName, open)
        print("Open: ", open)
    end,
}, {
    AM:createElement("Text", {text = "Child Text"}),
})
```
How it looks:<p/>
![image](https://i.imgur.com/vLRuI6Z.png)

#### title
Title/Text of the tooltip.

#### arrow
When `true` an arrow is displayed pointing to child elements.
![image](https://i.imgur.com/scPYH9e.png)<p/>
Can also be a table `arrow = {pointAtCenter = true}`:<p/>
![image](https://i.imgur.com/Pxj8v0w.png)

#### color
Color of the tooltip background. `color = "pink"`:<p/>
![image](https://i.imgur.com/1F30q43.png)

#### defaultOpen
Weather the tooltip is open by default.

#### mouseEnterDelay
A delay (in seconds) before the tooltip is displayed when mouse enters the child element.

#### mouseLeaveDelay
A delay (in seconds) before the tooltip is hidden when mouse leaves the child element.

#### overlayStyle
CSS Properties for the parent element of the visible tooltip container.

#### overlayInnerStyle
CSS Properties for the visible tooltip element/container.

#### placement
Placement of the popover, can be any one of the following: `top`, `left`, `right`, `bottom`, `topLeft`, `topRight`, `bottomLeft`, `bottomRight`, `leftTop`, `leftBottom`, `rightTop`, `rightBottom`.<p/>
Example of `placement = "topRight"`:<p/>
![image](https://i.imgur.com/yftxtBe.png)

#### trigger
Can be any one of the following: `hover` `focus` `click` `contextMenu`.<p/>
How the tooltip is triggered to display, so when `trigger = "click"` the tooltip will display when a child element is clicked.<p/>
Is "hover" by default.

#### open
Controls weather the tooltip is displayed. When set you'll have to handle how the tooltip is displayed yourself.