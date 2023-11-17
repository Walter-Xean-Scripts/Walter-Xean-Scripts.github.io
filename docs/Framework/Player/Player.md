This is just for the server side, I'll make a way to get your own data on the client *soon*.

## Exports
Here's the different exports you can use to get the player.

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

## Import
If you want to, you can import the main script from imports and use it instead. The functionallity is as follows.

### Add it to your shared scripts
```lua
shared_scripts {
    "@wxs_core/main.lua",
    "@wxs_framework/imports/main.lua"
}
```

### Getting the player by source
```lua
local WXPlayer = Framework.Player:Get(source)
```

### Getting the player by user id
```lua
local WXPlayer = Framework.Player:GetByUserId(userId)
```

### Getting the player by character id
```lua
local WXPlayer = Framework.Player:GetByCharacterId(characterId)
```