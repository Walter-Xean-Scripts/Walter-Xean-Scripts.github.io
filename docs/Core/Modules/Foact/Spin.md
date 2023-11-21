### Properties
| Property   | Type                 | Description                           |
|-           |-                     |-                                      |
| tip        | string               | Text shown under spinner              |
| size       | small, middle, large | Size of the spinner                   |
| spinning   | boolean              | Controls weather it spins             |
| indicator  | string               | Icon of spinner                       |
| delay      | number               | "Specifies a delay for loading state" |
| fullscreen | boolean              | Show spinner fullscreen               |

[Ant Design Spin](https://ant.design/components/spin)<p/>
[Icons](https://ant.design/components/icon)

### Children
Spinner does support children.<p/>
When `spinning = true` the children are "darkened out", otherwise they're fully shown.
![image](https://i.imgur.com/M3p4rW3.png)

### Example
```lua
myUI:createElement("Spin", {
    size = "large",
    spinning = true,
})
```
![image](https://i.imgur.com/YPYTKZU.png)<p/>
Just moves in-game.

#### tip
Text displayed under spinner.<p/>
There seems to be an issue when tip is set, and no children is given the tip text of offset weirdly.

#### size
Size of the spinner.<p/>
Doesn't really do much, and you can't size it to whatever you want.

#### spinning
Weather the spinner is spinning, when false all children will be displayed without a overlay.<p/>
![gif](https://i.imgur.com/urtwxIj.gif)<p/>

#### indicator
The icon of the spinning item.<p/>
`indicator = "LoadingOutlined"`:<p/>
![icon](https://i.imgur.com/p6fM6Oo.gif)<p/>
The icon doesn't move by itself, you have to find a icon fom any design icons that spin if you want it to spin ofc.

#### delay
"Specifies a delay in milliseconds for loading state (prevent flush)"

#### fullscreen
When true the spinner is shown fullscreen.<p/>
It's set corresponding to parent's offset.