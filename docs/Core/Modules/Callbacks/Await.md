This just waits for the callback to execute the code after it.
Look at it like using `Wait()`, that also blocks the thread until it's done.
This can be used on both the client and server.

### Function
```lua
local Callbacks = WXSCore.Callbacks
Callbacks.Await(event, ...)
```

### Parameters
| Name | Type | Description |
| --- | --- | --- |
| event | string | The name of the callback. |
| ... | any | Any additional arguments to be passed to the callback. |

### Example
```lua
local Callbacks = WXSCore.Callbacks

local response = Callbacks.Await("TestCallback", "Some data")
print("Test callback returned with data: " .. response)
```