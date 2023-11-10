The primary functions for creating easy blips.

### Function
```lua
local Blips = WXSCore.Blips
Blips:AddBlipForPickup(pickup, name, sprite, color, scale, alpha, shortRange)
```

### Parameters
| Name | Type | Description |
| --- | --- | --- |
| pickup | integer | The pickup handle. |	
| name | string | The name of the blip. |
| sprite | integer | The sprite of the blip. |
| color | integer | The color of the blip. |
| scale | float | The scale of the blip. |
| alpha | integer | The alpha of the blip. |
| shortRange | boolean | Whether or not the blip should be short range. |

### Returns
| Name | Type | Description |
| --- | --- | --- |
| blip | integer | An ID generated for the blip. |