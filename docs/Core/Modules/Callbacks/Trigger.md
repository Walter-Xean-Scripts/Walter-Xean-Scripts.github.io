The standard function for triggering a callback, this can be used on both the client and server.
It'll trigger a function once it gets a return from the other end.

### Function
```lua
local Callbacks = WXSCore.Callbacks
Callbacks(event, cb, ...)
```

### Parameters
| Name | Type | Description |
| --- | --- | --- |
| event | string | The name of the callback. |
| cb | function | The function to be called when the callback is triggered. |
| ... | any | Any additional arguments to be passed to the callback. |

### Example
```lua
local Callbacks = WXSCore.Callbacks

Callbacks("TestCallback", function(someReturnData)
    print("Test callback returned with data: " .. someReturnData)
end, "Some data")
```