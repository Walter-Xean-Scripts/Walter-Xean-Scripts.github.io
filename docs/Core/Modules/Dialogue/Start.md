### Function
```lua
local Dialogue = WXSCore.Dialogue
Dialogue:Start(ped, name, relationship)
```

### Parameters
| Name | Type | Description |
| :--- | :--- | :--- |
| ped | Ped | The ped which the camera will zoom in on |
| name | string | The name of the ped |
| relationship | string | What will be displayed under the name |

### Example
This one you'll neeeever see coming! 👀
```lua
local Dialogue = WXSCore.Dialogue
Dialogue:Start(PlayerPedId(), "mr johnathan", "stranger")
```