Creating a scene from scene data given by our powershell script.

### Function
```lua
local Scene = WXS.Scene
Scene:Create(sceneData, sceneLocation, sceneRotation, actors, looped, useDelaZ, addCamera, manualSpawn)
```

### Parameters
| Name | Type | Description |
| --- | --- | --- |
| sceneData | table | The scene data given by our powershell script. |
| sceneLocation | vector3 | The location of the scene. |
| sceneRotation | vector3 | The rotation of the scene. |
| actors | table | A table of actors to use in the scene. |
| looped | boolean | Whether or not the scene should loop. |
| useDelaZ | boolean | Whether or not the scene should use the deltaZ value. |
| addCamera | boolean | Whether or not the scene should add a scene camera. |
| manualSpawn | boolean | Whether or not the scene should auto spawn scene objects. |

### Returns
SceneHandler object.

### Example
```lua
local Scene = WXS.Scene

local sceneData = {
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

local sceneLocation = vector3(0.0, 0.0, 0.0)
local sceneRotation = vector3(0.0, 0.0, 0.0)

Scene:Create(sceneData, sceneLocation, sceneRotation, {}, false, false, false, false)
```