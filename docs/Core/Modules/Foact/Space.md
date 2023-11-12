### Properties
| Property          | Type                                 | Description                        |
|-                  |-                                     |-                                   |
| direction         | `horizontal`, `vertical`             | Direction of the spacing           |
| size              | `small`, `middle`, `large`, number   | Amount of spacing between elements |
| align             | `center`, `start`, `end`, `baseline` | Alignment of elements              |
| wrap              | boolean                              | Auto wrap line                     |
All properties are optional.

### Children
Can have children.

### Example
```lua
local space = myUI:createElement("Space", {
    width = "100%",
    height = "100%",
}, {
    myUI:createElement("Button", {text = "1"}),
    myUI:createElement("Button", {text = "2"}),
    myUI:createElement("Button", {text = "3"})
})
```
This is how it looks in-game:<p/>
![In-Game](https://i.imgur.com/MWSX07p.png)

#### Direction
Sets the direction of the spacing.<p/>
This is how it looks with `vertical` direction:<p/>
![Direction](https://i.imgur.com/RUgWOdD.png)

#### Size
Sets the size of the spacing between elements.<p/>
![Size](https://i.imgur.com/CqhdsP9.png)

#### Align
Sets the alignment of child elements. y-axis.<p/>
![Start](https://i.imgur.com/3gks0EZ.png)
![Center](https://i.imgur.com/qeS08jy.png)
![End](https://i.imgur.com/DtylrY8.png)
![Baseline](https://i.imgur.com/d6emVz2.png)

#### Wrap
Auto wraps the child elements within the parent element.<p/>
![Wrap](https://i.imgur.com/y2pbPva.png)