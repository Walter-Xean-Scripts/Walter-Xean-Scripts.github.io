All the pool ped related functions.

## GetAll

### Function
```lua
local Pools = WXSCore.Pools
Pools.Peds:GetAll()
```

### Returns
| Name | Type | Description |
| --- | --- | --- |
| peds | number[] | A table of all the ped handles. |

### Example
```lua
local Pools = WXSCore.Pools
local peds = Pools.Peds:GetAll()
```

## GetInArea

### Function
```lua
local Pools = WXSCore.Pools
Pools.Peds:GetInArea(coords, radius)
```

### Parameters
| Name | Type | Description |
| --- | --- | --- |
| coords | vector3 | The coordinates of the area. |
| radius | float | The radius of the area. |

### Returns
| Name | Type | Description |
| --- | --- | --- |
| peds | number[] | A table of all the ped handles in the area. |

### Example
```lua
local Pools = WXSCore.Pools
local peds = Pools.Peds:GetInArea(vector3(0.0, 0.0, 0.0), 100.0)
```

## GetClosest

### Function
```lua
local Pools = WXSCore.Pools
Pools.Peds:GetClosest(coords)
```

### Parameters
| Name | Type | Description |
| --- | --- | --- |
| coords | vector3 | The coordinates of the area. |

### Returns
| Name | Type | Description |
| --- | --- | --- |
| ped | number | The handle of the closest ped. |
| distance | float | The distance to the closest ped. |

### Example
```lua
local Pools = WXSCore.Pools
local ped, distance = Pools.Peds:GetClosest(vector3(0.0, 0.0, 0.0))
```