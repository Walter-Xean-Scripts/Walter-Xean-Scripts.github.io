### Properties
| Property       | Type              | Optional |
|----------------|-------------------|----------|
| text           | string            | yes      |
| code           | boolean           | yes      |
| copyable       | boolean/copyable  | yes      |
| disabled       | boolean           | yes      |
| keyboard       | boolean           | yes      |
| mark           | boolean           | yes      |
| strong         | boolean           | yes      |
| italic         | boolean           | yes      |
| type           | string            | yes      |
| underline      | boolean           | yes      |

#### Copyable
| Property       | Type              | Optional | Description               |
|----------------|-------------------|----------|---------------------------|
| format         | string            | yes      | The Mime Type of the text |
| text           | string            | yes      | The text to copy          |

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