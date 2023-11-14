### Properties
| Property | Type                                 | Optional | Description                                          |
|----------|--------------------------------------|----------|------------------------------------------------------|
| src      | string                               | yes      | the image to display                                 |
| [events] | function                             | yes      | Please read the [events page](Events)                | 

### Children
Not supported on image.

### How to use local images with it
Read [Images](Images) for more information.

### Example
```lua
local image = fObj:createElement("Image", {
    width = "100%",
    height = "100%",
    src = "fortnite.jpg",
    onClick = function()
        print("Clicked image!")
    end
})
```