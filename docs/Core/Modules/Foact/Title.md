### Properties
| Property       | Type              | Optional |
|----------------|-------------------|----------|
| text           | string            | yes      |
| code           | boolean           | yes      |
| copyable       | boolean/copyable  | yes      |
| level          | number            | yes      |
| mark           | boolean           | yes      |
| italic         | boolean           | yes      |
| type           | string            | yes      |
| underline      | boolean           | yes      |

#### Copyable
| Property       | Type              | Optional | Description               |
|----------------|-------------------|----------|---------------------------|
| format         | string            | yes      | The Mime Type of the text |
| text           | string            | yes      | The text to copy          |

### Children
Not supported on title, use text property for setting text.

### Example
```lua
local Title = Menu:createElement("Title", {
    text = "I'm a cool title!",
    level = 3
})
```

This is how it looks in-game:<p/>
![Showcase](https://i.imgur.com/cLFubgs.png)