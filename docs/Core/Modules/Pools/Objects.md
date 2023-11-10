All the pool object related functions.

## GetAll

### Function
```lua
local Pools = WXSCore.Pools
Pools.Objects:GetAll()
```

### Returns
| Name | Type | Description |
| --- | --- | --- |
| objects | number[] | A table of all the object handles. |

### Example
```lua
local Pools = WXSCore.Pools
local objects = Pools.Objects:GetAll()
```

## GetInArea

### Function
```lua
local Pools = WXSCore.Pools
Pools.Objects:GetInArea(coords, radius)
```

### Parameters
| Name | Type | Description |
| --- | --- | --- |
| coords | vector3 | The coordinates of the area. |
| radius | float | The radius of the area. |

### Returns
| Name | Type | Description |
| --- | --- | --- |
| objects | number[] | A table of all the object handles in the area. |

### Example
```lua
local Pools = WXSCore.Pools
local objects = Pools.Objects:GetInArea(vector3(0.0, 0.0, 0.0), 100.0)
```

## GetClosest

### Function
```lua
local Pools = WXSCore.Pools
Pools.Objects:GetClosest(coords)
```

### Parameters
| Name | Type | Description |
| --- | --- | --- |
| coords | vector3 | The coordinates of the area. |

### Returns
| Name | Type | Description |
| --- | --- | --- |
| object | number | The object handle of the closest object. |
| distance | float | The distance between the object and the coordinates. |

### Example
```lua
local Pools = WXSCore.Pools
local object, distance = Pools.Objects:GetClosest(vector3(0.0, 0.0, 0.0))
```