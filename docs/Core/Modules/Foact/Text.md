### Properties
| Property       | Type                                        | Description                                  |
|----------------|-                                            |-                                             |
| text           | string                                      | Text displayed                               |
| code           | boolean                                     | Used for when displaying code                |
| copyable       | boolean/copyable                            | Enables a copy button to copy displayed text |
| disabled       | boolean                                     | Weather the text is disabled                 |
| keyboard       | boolean                                     | Allows user to use keyboard to control       |
| mark           | boolean                                     | Weather the text is <mark>highlighted</mark> |
| strong         | boolean                                     | Weather the text is __strong__               |
| italic         | boolean                                     | Weather the text is _italic_                 |
| type           | `secondary`, `success`, `warning`, `danger` | Changes how text is displayed                |
| underline      | boolean                                     | Weather the text is <u>underlined</u>        |
| onClick        | function(event)                             | Fired when text is clicked                   |
| copyable       | boolean|table                               | [See Copyable](#copyable)                    |
| editable       | boolean|table                               | [See Editable](#editable)                    |
| [events]       | function                                    | Please read the [events page](Events)        |

All properties are optional.<p/>
[See Icons](https://ant.design/components/icon)<p/>
[Typography.Text](https://ant.design/components/typography#typographytitle)

### Children
Not supported on paragraph, use text property for setting text.

### Example
```lua
local Text = Menu:createElement("Text", {
    text = "Just a normal ol' text element",
    italic = true
})
```

This is how it looks in-game:<p/>
![Showcase](https://i.imgur.com/TN9DmZF.png)


#### copyable
| Field   | Type            | Description                                                   |
|-        |-                |-                                                              |
| text    | string          | The text to copy, leave undefined to copy whats in the `text` |
| icon    | string          | Icon displayed that copies the text                           |
| tooltip | string          | Tooltip displayed when hovering `icon`                        |
| foramt  | string          | "The Mime Type of the text"                                   |
| onCopy  | function(event) | "The Mime Type of the text"                                   |
```lua
copyable = {
    tooltip = "Click to Copy!",
    onCopy = function(id, name, event)
        print("User Copied Text!")
    end,
}
```
![Copyable](https://i.imgur.com/4dT1vzr.png)<p/>
When the icon is pressed the text from the textfield is copied to the user clipboard.

#### editable
| Field     | Type            | Description             |
|-          |-                |-                        |
| icon      | string          | Icon displayed to open the editor for the text |
| tooltip   | string          | Tooltip displayed when hovering icon           |
| maxLength | number          | Allowed length of text                         |
| autoSize  | boolean|table   | Weather to autosize the text field             |
| text      | string          | Text that is edited, leave blank               |
| enterIcon | string          | Icon displayed for the user to confirm editing |
| onChange  | function(value) | Fired when user changes text input             |
| onStart   | function()      | Fired when user starts editing                 |
| onEnd     | function()      | Fired when user stops editing                  |
| onCancel  | function()      | Fired when user cancels editing                |

```lua
editable = {
    tooltip = "Edit",
    onChange = function(id, name, value)
        text.text = value -- Change text to edited value
        print("Edit: OnChange: ", value)
    end,
    onCancel = function(id, name)
        print("Edit: Cancelled Editing")
        -- Also fired when `onChange`
    end,
    onStart = function(id, name)
        print("Edit: Started Editing")
    end,
    onEnd = function(id, name)
        print("Edit: Ended Editing")
    end,
}
```
![Edit Icon](https://i.imgur.com/MbFTy8W.png)<p/>
![When Editing](https://i.imgur.com/np1yvk0.png)