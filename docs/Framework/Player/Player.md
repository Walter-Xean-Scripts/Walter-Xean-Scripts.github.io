This is just for the server side, I'll make a way to get your own data on the client *soon*.

### Getting the player by source
Getting the player is really simple - just call our export and you'll have it.
```lua
local WXPlayer = exports.wxs_framework:GetPlayer(source)
```

### Getting the player by user id
```lua
local WXPlayer = exports.wxs_framework:GetPlayerByUserId(userId)
```

### Getting the player by character id
```lua
local WXPlayer = exports.wxs_framework:GetPlayerByCharacterId(characterId)
```