### Properties
| Property       | Type                            | Description                                               |
|-               |-                                |-                                                          |
| title          | string                          | Title shown                                               |
| content        | string[]                        | Content shown under `title`                               |
| trigger        | `hover`, `focus`, `click`       | How the popover is opened by the user                     |
| placement      | string                          | Where the popover is located  [See Placement](#placement) |
| open           | boolean                         | Weather the popover is opened  [Note](#open)              |
| defaultOpen    | boolean                         | Weather the popover is opened by default                  |
| arrow          | boolean, table                  | [See Arrow](#arrow)                                       |
| color          | string                          | Color of the popover                                      |
All properties are optional!<p/>
[You can see more options here](https://ant.design/components/tooltip#api).

### Children
Popover _has_ to have children, it is the children (when hovered) that displays the popover.

### Example
```lua
local a = AM:createElement("Popover", {
    title = "Title",
    content = {
        "Line 1",
        "Line 2",
    },
    onOpenChange = function(id, name, open)
        print("Popover: ", open)
    end,
}, {
    AM:createElement("Button", {
        text = "Hover Me"
    }),
})
```
How it looks:<p/>
![Showcase](https://i.imgur.com/p1vgZax.png)

#### title
The title displayed for the popover, is bigger in size and has __bold__ font.

#### content
Text displayed in the popover, entries have to be strings _(for now)_ and each entry is a new line.

#### trigger
Can be `hover`, `focus` or `click`<p/>
When `hover` the popover is displayed when a [child](#children) is hovered.<p/>
When `focus` the popover is displayed when a [child](#children) is focused.<p/>
When `click` the popover is displayed when a [child](#children) is clicked.<p/>

#### placement
Can be any of the following: `top`, `left`, `right`, `bottom`, `topLeft`, `topRight`, `bottomLeft`, `bottomRight`, `leftTop`, `leftBottom`, `rightTop` or `rightBottom`.<p/>
Changes the position of the popover.

#### open
Use if you want to overwrite how the popover is opened/closed.<p/>
When set the popover will not open or close by itself.

#### defaultOpen
Weather the popover should be opened by default/when initialized.<p/>
So when `true` it will start opened.

#### arrow
Default is `false/undefined`.<p/>
![1](https://i.imgur.com/4A8Gvdi.png)<p/>
![2](https://i.imgur.com/mOirsbP.png)<p/>
![3](https://i.imgur.com/j3uv2hV.png)

#### color
Color of the popover.<p/>
```lua
color = "red"
```
![color](https://i.imgur.com/zW6mIzm.png)