### Properties
| Property     | Type    | Description                                             |
|--------------|---------|---------------------------------------------------------|
| icon         | string  | Icon to display                                         |
| rotate       | number  | Amount in degrees to rotate the icon                    |
| spin         | boolean | Whether the icon should be spinning                     |
| fontSize     | string  | Size of icon                                            |
| twoToneColor | string  | Only supported by two-tone icons. Specify primary color |
[List of Icons](https://ant.design/components/icon)<p/>
[Ant Design Icon Page](https://ant.design/components/icon)

### Children
Icon does not support children.

### Example
```lua
myUI:createElement("Icon", {
    icon = "InfoCircleOutlined",
    color = "white",
    fontSize = "30px"
}),
```
How it looks (Ignore the text underneath):<p/>
![image](https://i.imgur.com/SMlqeYu.png)

#### icon
What icon to use, you can see a [list of icons here](https://ant.design/components/icon)

#### rotate
`rotate = 180` will turn the icon upside down.

#### spin
`spin = true` will make the icon spin around.