The primary function for creating markers.

### Function
```lua
local Markers = WXSCore.Markers
Markers:RegisterMarker(type, pos, dir, rot, scale, color, bobUpAndDown, faceCamera, range, markerCallback, addBlip, blipData)
```

### Parameters
| Name | Type | Description |
| --- | --- | --- |
| type | number | The type of the marker. |
| pos | vector3 | The position of the marker. |
| dir | vector3 | The direction of the marker. |
| rot | vector3 | The rotation of the marker. |
| scale | vector3 | The scale of the marker. |
| color | table | a table containing the r, g, b and a colors |
| bobUpAndDown | boolean | Whether or not the marker should bob up and down. |
| faceCamera | boolean | Whether or not the marker should face the camera. |
| range | number | The range of when the marker should draw |
| markerCallback | function | The function to call when the marker is interacted with. |
| addBlip | boolean | Whether or not a blip should be added. |
| blipData | table | A table containing the blip data. |

### Returns
| Name | Type | Description |
| --- | --- | --- |
| markerId | number | The ID of the marker. |

### Example
```lua
local Markers = WXSCore.Markers

local markerId = Markers:RegisterMarker(
    1,                                      -- type
    vector3(0.0, 0.0, 0.0),                 -- pos
    vector3(0.0, 0.0, 0.0),                 -- dir
    vector3(0.0, 0.0, 0.0),                 -- rot
    vector3(0.0, 0.0, 0.0),                 -- scale
    { r = 255, g = 255, b = 255, a = 255 }, -- color
    true,                                   -- bobUpAndDown
    true,                                   -- faceCamera
    25.0,                                   -- range
    function(markerId, didEnter)            -- markerCallback
        print(markerId, didEnter)
    end,
    true,                                   -- addBlip
    {                                       -- blipData
        name = "Test",
        sprite = 1,
        color = 1,
        scale = 1.0,
        alpha = 255,
        shortRange = true
    }
)```