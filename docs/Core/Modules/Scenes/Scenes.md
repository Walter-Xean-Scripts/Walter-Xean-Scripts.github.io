The library for easily playing synchronized scenes.

## How does it work?
We've taken the list from [here](https://www.gta5-mods.com/tools/updated-animation-list-for-scene-director) and made a script that can format it and play it in FiveM. This does require you to run a powershell script that gives you the output you need to play your scene, but we've included that in our repo too. Let me explain.

## 1. Finding a scene you want to play
First navigate to the `scene_creator` folder in our repo, then you'll see a file called `SceneDirectorSynchedAnim.xml`.
Open it and browse the synchronized scenes that are available. You can also use the search function in your text editor to find a specific scene.
Once you've found one, copy the name of the scene (It'll look somewhat like this: `Store hold up cash`)!
Now you're ready to run the script.

## 2. Getting the scene output
This part is really simple thanks to our powershell script, made with ❤️ by [Sh4dow](https://github.com/Sh4dow8080).
Just open a terminal in the `scene_creator` folder and run the following command (With the name of the scene you copied earlier):
```
./program.ps1 "Store hold up cash"
```

That'll give you an output copied to your clipboard, that looks something like this:
```lua
{
    ['title'] = 'Store hold up cash',
    ['actorsAligned'] = true,
    ['deltaZ'] = 0,
    ['actorAnims'] = {
        {
            ['id'] = 13107,
            ['dir'] = 'mp_am_hold_up',
            ['name'] = 'holdup_victim_20s',
            ['animIndex'] = 24133
        },
    },
    ['objectAnims'] = {
        {
            ['id'] = 13108,
            ['dir'] = 'mp_am_hold_up',
            ['name'] = 'holdup_victim_20s_bag',
            ['animIndex'] = 21566
        },
        {
            ['id'] = 13109,
            ['dir'] = 'mp_am_hold_up',
            ['name'] = 'holdup_victim_20s_till',
            ['animIndex'] = 24133
        },
    },
    ['objects'] = {
        `p_poly_bag_01_s`,
        `p_till_01_s`,
    },
}
```

## 3. Constructing the scene
Constructing the scene now is really simple, all you'll have to do, is call upon the scenes library like so:
(Where scene data is what you just got from the powershell script!)
```lua
local Scenes = WXSCore.Scenes

local sceneHandler = Scenes:Create(sceneData, sceneLocation, sceneRotation, actors, looped, useDelaZ, addCamera, manualSpawn)
```

## Functions on the SceneHandler
