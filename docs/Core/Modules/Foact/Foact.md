You might be thinking, what the flip is Foact?
Currently it's a UI library for writing UIs in LUA, without the need for HTML or JavaScript.
The name started of as being FiveM and React mashed together, but at this point it's got little incommon with React, other than it's a UI library.

Foact is currently based on [Ant Design](https://ant.design/) but plans to support other libraries in the future. We're also going to add an option to not have any default style *soon*.

## What can it do?
I'm glad you asked! It's basic idea is it'll allow you to create web UIs, without leaving LUA.
This you can do in a way that feels a little similar to Roblox's Roact. You can create components, and nest them inside each other.
You can also create components that are just a single element, like a button, or a text input.

Now what's cool with Foact, is that you can change it's variables on the fly, and it'll update the UI accordingly.
Let me give you an example:
```lua
local myUI = Foact.new("mycoolui")

local box = myUI:createElement("Box", {
    width = "400px",
    height = "200px",
    backgroundColor = "rgba(0, 0, 0, 0.95)",
    borderRadius = "10px",
})

myUI:initialize(box)

myUI:SetActive(true, true)
```
This will create a box, with a width of 400px, a height of 200px, a black background, and a border radius of 10px.

Now let's say we want to change the background color to red, we can do that like this:
```lua
box.backgroundColor = "rgba(255, 0, 0, 0.95)"
```
And now the background color will be red. It's that simple.
This doesn't just work with CSS variables, any property can be adjusted. And it doesn't end there either.
You can also add or remove children as you wish, just by calling `.add` or `.remove` on the box.

We'll cover it more in detail on this page.

## List of supported elements
Below's a list of currently supported elements in Foact. These are made from [Ant Design's components](https://ant.design/components/overview/), and are therefore pre-styled if you don't override it.
- [Box](Box)
- [Button](Button)
- [Divider](Divider)
- [Dropdown](Dropdown)
- [Flex](Flex)
- [Paragraph](Paragraph)
- [Sidebar](Sidebar)
- [Slider](Slider)
- [Space](Space)
- [Text](Text)
- [Title](Title)

Are we missing something from Ant Design you want added? Let us know on Discord!

## How to handle events
I decided to make a seperate page for this, so I can keep it updated as we add more functionality, check it out here [Events](Events). Most events from React and Ant Design *should* work, but there's some gotchas, so make sure to read the page.

## Creating a new UI
To create a new UI, you'll need to call `Foact.new`, and pass it the name of the UI you want to create.
We use this name to identify the UI, so it's important that it's unique to your ui. 
```lua
local Foact = WXSCore.Foact

local myUI = Foact.new("mycoolui")
```

## Rendering my UI
To render your UI, you'll need to call `Foact:initialize`, and pass it the root element of your UI.
```lua
local box = myUI:createElement("Box", {
    width = "400px",
    height = "200px",
    backgroundColor = "rgba(0, 0, 0, 0.95)",
    borderRadius = "10px",
})

myUI:initialize(box)
```

## Displaying your UI
To display your UI, you'll need to call `Foact:SetActive`, and pass it a boolean value.
The first variable will be used to determine if the UI should be displayed or not, and the second variable is wether to capture input or not.
```lua
myUI:SetActive(true, true)
```

## Creating elements
To create an element, you'll need to call `Foact:createElement`, and pass it the name of the element you want to create, a table of properties, and optionally a table of children.
```lua
local button = myUI:createElement("Button", {
    text = "Hello, World!",
    onClick = function()
        print("Hello, World!")
    end
})

local box = myUI:createElement("Box", {
    width = "400px",
    height = "200px",
    backgroundColor = "rgba(0, 0, 0, 0.95)",
    borderRadius = "10px",
}, {
    button
})
```

## Chaning properties after creation
I explained this earlier. But we'll just go over it again, in case you skipped the text above 😉
You can change any property on any element, and it'll update the UI automatically.
```lua
box.backgroundColor = "rgba(255, 0, 0, 0.95)"
```

## Adding/Removing children
You can add or remove children from any element, and it'll update the UI automatically.
```lua
-- adding
box:add(button)

-- removing
box:remove(button)
```

## An example
```lua
local Foact = WXSCore.Foact

-- we have instanciate a new Foact object with the name of our UI.
---@class Foact
local fObj = Foact.new("charactercreator")

-- we can now create elements on our Foact object.
local btn = fObj:createElement("Button", {
    text = "Hello, World!",
    onClick = function()
        print("Hello, World!")
    end
})

local slider = fObj:createElement("Slider", {
    min = 0,
    max = 100,
    defaultValue = 50,
    width = "200px"
})

-- we can also create a box, and add the button to it.
local box = fObj:createElement("Box", {
    width = "400px",
    height = "200px",
    position = "absolute",
    top = "50%",
    left = "50%",
    transform = "translate(-50%, -50%)",
    backgroundColor = "rgba(0, 0, 0, 0.95)",
    borderRadius = "10px",
    display = "flex",
    flexDirection = "column",
    alignItems = "center",
    justifyContent = "center",
    transition = "all 0.25s ease"
}, {
    btn,
    slider
})

-- we can now load our UI, and set it to active.
fObj:initialize(box)

-- this command will display our UI
RegisterCommand("testUI", function()
    fObj:SetActive(true, true)
end, false)

-- this command will periodically change the background color and size of the box.
RegisterCommand("danceShow", function ()
    CreateThread(function()
        while true do
            Wait(500)

            box.width = math.random(200, 400) .. "px"
            box.height = math.random(200, 400) .. "px"
            box.backgroundColor = "rgba(" .. math.random(0, 255) .. ", " .. math.random(0, 255) .. ", " .. math.random(0, 255) .. ", 0.95)"
        end
    end)
end, false)
```

## End note
That about sums it up *for now*, Foact is still early in development, and we'll be adding more features as we go along.
Remember to check out the different elements in the side bar, they'll explain what extra properties you can pass onto the elements.