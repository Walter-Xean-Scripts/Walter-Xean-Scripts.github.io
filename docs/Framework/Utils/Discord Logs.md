This is just for the server side.  
The neat thing about this module is that I made a queue system, which should prevent rate limits. I haven't really had the time to test the queue, but the principle is pretty simple.

## Exports
Here's the different exports you can use to send discord logs.

### SendDiscordLog
Getting the player is really simple - just call our export and you'll have it.
```lua
exports.wxs_framework:SendDiscordLog(webhook, title, message)
```

### SendDiscordLogFields
```lua
exports.wxs_framework:SendDiscordLogFields(webhook, title, fields)
```

## Import
If you want to, you can import the main script from imports and use it instead. The functionallity is as follows.

### Add it to your shared scripts if you haven't already
```lua
shared_scripts {
    "@wxs_core/main.lua",
    "@wxs_framework/imports/main.lua"
}
```

### SendDiscordLog
```lua
Framework.Utils:SendDiscordLog(webhook, title, message)
```

### SendDiscordLogFields
```lua
Framework.Utils:SendDiscordLogFields(webhook, title, fields)
```