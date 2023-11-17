A very simple Mutex implementation.
If you're unfamiliar with Mutexes, they're basically a way to lock a resource so that only one thread can access it at a time.
This prevents race conditions and other nasty things.

### Constructor
```lua
local MyMutex = Mutex.new()
```

### Lock
```lua
MyMutex:Lock()
```

### Unlock
```lua
MyMutex:Unlock()
```

### Example
```lua
local MyMutex = Mutex.new()

local characterMoney = 0
local function SetCharacterMoney(newMoney)
    MyMutex:Lock()
    characterMoney = newMoney
    MyMutex:Unlock()
end
```
Here we have a function that sets the character's money, which can only be ran by one thread at a time.