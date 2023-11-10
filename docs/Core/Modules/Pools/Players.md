All the pool functions for players.

### PlayersArray type
A type that is returned from multiple of the functions on the page.
| Name | Type | Description |
| --- | --- | --- |
| ped | integer | The ped handle. |
| id | integer | The player id. |

## GetPlayerPeds

### Function
```lua
local Pools = WXSCore.Pools
Pools.Players:GetPlayerPeds()
```

### Returns
| Name | Type | Description |
| --- | --- | --- |
| peds | PlayersArray | A table of all the player peds. |

### Example
```lua
local Pools = WXSCore.Pools
local players = Pools.Players:GetPlayerPeds()
```

## GetInArea

### Function
```lua
local Pools = WXSCore.Pools
Pools.Players:GetInArea(coords, radius)
```

### Parameters
| Name | Type | Description |
| --- | --- | --- |
| coords | vector3 | The coordinates of the area. |
| radius | float | The radius of the area. |

### Returns
| Name | Type | Description |
| --- | --- | --- |
| peds | PlayersArray | A table of all the player peds in the area. |

### Example
```lua
local Pools = WXSCore.Pools
local players = Pools.Players:GetInArea(vector3(0.0, 0.0, 0.0), 100.0)
```

## GetClosestPlayer

### Function
```lua
local Pools = WXSCore.Pools
Pools.Players:GetClosestPlayer(coords)
```

### Parameters
| Name | Type | Description |
| --- | --- | --- |
| coords | vector3 | The coordinates of the area. |

### Returns
| Name | Type | Description |
| --- | --- | --- |
| player | integer | The player handle of the closest player. |
| distance | float | The distance to the closest player. |

### Example
```lua
local Pools = WXSCore.Pools
local player, distance = Pools.Players:GetClosestPlayer(vector3(0.0, 0.0, 0.0))
```