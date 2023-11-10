The primary functions for creating easy blips.

### Function
```lua
local Blips = WXSCore.Blips
Blips:AddBlipForArea(coords, width, height, rotation, color, alpha)
```

### Parameters
| Name | Type | Description |
| --- | --- | --- |
| coords | vector3 | The coordinates of the blip. |
| width | float | The width of the blip. |
| height | float | The height of the blip. |
| rotation | float | The rotation of the blip. |
| color | integer | The color of the blip. |
| alpha | integer | The alpha of the blip. |

### Returns
| Name | Type | Description |
| --- | --- | --- |
| blip | integer | An ID generated for the blip. |