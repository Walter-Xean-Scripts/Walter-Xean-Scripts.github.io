Using our core is really simple, just include our shared scripts in your shared scripts on your resource, and start referencing it in your code.

Just put this in your `fxmanifest.lua`:
```lua
shared_scripts {
    ... -- your existing shared scripts goes here!
    "@wxs_core/main.lua"
}
```
or if you don't have a shared_scripts section, just add this:
```lua
shared_script "@wxs_core/main.lua"
```
