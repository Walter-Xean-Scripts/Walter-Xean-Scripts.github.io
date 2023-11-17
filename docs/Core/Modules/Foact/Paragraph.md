### Properties
| Property       | Type              | Optional |
|----------------|-------------------|----------|
| text           | string            | yes      |
| code           | boolean           | yes      |
| copyable       | boolean/copyable  | yes      |
| mark           | boolean           | yes      |
| strong         | boolean           | yes      |
| italic         | boolean           | yes      |
| type           | string            | yes      |
| underline      | boolean           | yes      |
| [events]       | function          | yes      |
^ Please read the [events page](Events)

[Typography.Paragraph](Typography.Paragraph)

#### Copyable
| Property       | Type              | Optional | Description               |
|----------------|-------------------|----------|---------------------------|
| format         | string            | yes      | The Mime Type of the text |
| text           | string            | yes      | The text to copy          |

### Children
Not supported on paragraph, use text property for setting text.

### Example
```lua
local Paragraph = Menu:createElement("Paragraph", {
    text = "This is a paragraph with some text in it! It can be used to display text in a more fancy way.",
})
```

This is how it looks in-game:<p/>
![Showcase](https://i.imgur.com/3PjtQcY.png)