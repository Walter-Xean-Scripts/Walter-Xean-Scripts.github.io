All the pool vehicle related functions.

## GetAll

### Function
```lua
local Pools = WXSCore.Pools
Pools.Vehicles:GetAll()
```

### Returns
| Name | Type | Description |
| --- | --- | --- |
| vehicles | number[] | A table of all the vehicles handles. |

### Example
```lua
local Pools = WXSCore.Pools
local vehicles = Pools.Vehicles:GetAll()
```

## GetInArea

### Function
```lua
local Pools = WXSCore.Pools
Pools.Vehicles:GetInArea(coords, radius)
```

### Parameters
| Name | Type | Description |
| --- | --- | --- |
| coords | vector3 | The coordinates of the area. |
| radius | float | The radius of the area. |

### Returns
| Name | Type | Description |
| --- | --- | --- |
| vehicles | number[] | A table of all the vehicles handles in the area. |

### Example
```lua
local Pools = WXSCore.Pools
local vehicles = Pools.Vehicles:GetInArea(vector3(0.0, 0.0, 0.0), 100.0)
```

## GetClosest

### Function
```lua
local Pools = WXSCore.Pools
Pools.Vehicles:GetClosest(coords)
```

### Parameters
| Name | Type | Description |
| --- | --- | --- |
| coords | vector3 | The coordinates of the area. |

### Returns
| Name | Type | Description |
| --- | --- | --- |
| vehicle | number | The vehicle handle of the closest vehicle. |
| distance | float | The distance between the closest vehicle and the coords. |

### Example
```lua
local Pools = WXSCore.Pools
local vehicle, distance = Pools.Vehicles:GetClosest(vector3(0.0, 0.0, 0.0))
```