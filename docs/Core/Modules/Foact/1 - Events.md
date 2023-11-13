By now you might've wondered, what about events does Foact support, how do you do stuff like onClick, onChange etc. This page is here to hopefully answer that.

Foact *should* support all the events you can find on the [React documentation](https://reactjs.org/docs/events.html#supported-events) and what you can find on the [Ant Design documentation](https://ant.design/components/overview/) however there are some differences which we will go over.

### Added parameters
Before the data you'd normally expect from the event, we're passing `elementId` of the element, and `uiName` of the UI. This is to make it easier for you to identify what element was clicked, and what UI it belongs to, if you want to do a more generelized event handler.

### How to do it
This is the simple part - just add onClick or any other event to your foact element and it should work. For example:
```lua
local button = fObj:createElement("Button", {
    text = "My button",
    ..., -- all your css properties here
    onClick = function(elementId, uiName, event)
        print("You clicked my super cool button!!")
    end
})
```

There's also loads of events that supplies you with some data, this is where Foact slightly differs. Normally you'd have the entire event object passed to you, but in Foact we cherry pick what we've believed to be nessesary. This means that some stuff *might* be missing, so if you find something that you need, just let us know and we'll add it.

### Gotchas
There's a few things you should be aware of when using events in Foact. Mostly just make sure you're receiving the data you're expecting, and if not, let us know. 

There's some stuff that'd need our attention to be translated correctly to lua, and therefore if you encounter any of these, please let us know!