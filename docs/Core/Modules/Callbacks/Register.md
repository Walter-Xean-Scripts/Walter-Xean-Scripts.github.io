The function used for registering a callback, this can be used on both the client and server.

### Function
```lua
local Callbacks = WXSCore.Callbacks
Callbacks.Register(name, callback)
```

### Parameters
| Name | Type | Description |
| --- | --- | --- |
| name | string | The name of the callback. |
| callback | function | The function to be called when the callback is triggered. |

### Example
```lua
local Callbacks = WXSCore.Callbacks

Callbacks.Register("TestCallback", function(someData)
    print("Test callback triggered with data: " .. someData)
    return "Some return data"
end)
```