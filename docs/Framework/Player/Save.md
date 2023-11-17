This is mostly used internally for saving the character, but you can call it to force a save. Most of the time you'd not pass in a parameter, or false.
### Function
```lua
WXPlayer:Save(onRs)
```

### Parameters
| Parameter | Type | Description |
|-          |-     |-            |
| onRs | boolean | If this was called on resource stop, meaning it won't wait for it to finish. |

### Returns
| Type | Description |
| :--- | :--- |
| boolean | Returns true if the player was successfully saved. |
