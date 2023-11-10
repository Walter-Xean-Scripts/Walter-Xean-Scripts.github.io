The primary function for creating markers.

### Function
```lua
local Markers = WXSCore.Markers
Markers:UpdateMarker(id, newValues)
```

### changeableMarkerData
| Name | Type | Description |
| --- | --- | --- |
| type | integer | The type of the marker. |
| pos | vector3 | The position of the marker. |
| dir | vector3 | The direction of the marker. |
| rot | vector3 | The rotation of the marker. |
| scale | vector3 | The scale of the marker. |
| color | table | a table containing the r, g, b and a colors |
| bobUpAndDown | boolean | Whether or not the marker should bob up and down. |
| faceCamera | boolean | Whether or not the marker should face the camera. |
| range | number | The range of when the marker should draw |
| markerCallback | function | The function to call when the marker is interacted with. |

### Parameters
| Name | Type | Description |
| --- | --- | --- |
| id | integer | The marker ID returned from the functions. |
| newValues | changeableMarkerData | The new values to update the marker with. |


### Example
```lua
local Markers = WXSCore.Marker

Markers:UpdateMarker(
    markerId,
    {
        type = 1,
        pos = vector3(0.0, 0.0, 0.0),
        dir = vector3(0.0, 0.0, 0.0),
        rot = vector3(0.0, 0.0, 0.0),
        scale = vector3(0.0, 0.0, 0.0),
        color = { r = 255, g = 255, b = 255, a = 255 },
        bobUpAndDown = true,
        faceCamera = true,
        range = 25.0,
        markerCallback = function(markerId, didEnter)
            print(markerId, didEnter)
        end
    }
)
```