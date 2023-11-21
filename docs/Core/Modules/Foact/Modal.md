### Properties
| Property          | Type            | Description                                      |
|-                  |-                |-                                                 |
| title             | string          | Title of the modal                               |
| open              | boolean         | Controls whether the modal is displayed          |
| cancelButtonProps | table           | [See cancelButtonProps](#cancelbuttonprops)      |
| cancelText        | string          | Text of the cancel button                        |
| centered          | boolean         | Whether the modal should be centered             |
| closeIcon         | boolean/string  | Icon shown in top-right to close modal           |
| confirmLoading    | boolean         | Loading visual effect for OK button or not       |
| keyboard          | boolean         | Whether the user can use the keyboard            |
| mask              | boolean         | Whether to show mask                             |
| okButtonProps     | table           | [See okButtonProps](#okbuttonprops)              |
| okText            | string          | Text of the OK button                            |
| okType            | string          | Button type of the OK button                     |
| autoFocusButton   | nil, ok, cancel | What item to be focused when modal is shown      |
| onOk              | function(event) | Fired when "ok" is pressed                       |
| onCancel          | function(event) | Fired when "cancel" is pressed                   |
| afterClose        | function()      | Fired whenever modal is closed                   |
| afterOpenChange   | function(open)  | Fired whenever modal is opened                   |    

### Children
Modal does support children.

### Example
```lua
local modal; modal = AM:createElement("Modal", {
    title = "Modal Title",
    open = true,
    onOk = function(_, _, event)
        -- Run when ok button is pressed
        print("onOk: ", json.encode(event, {indent = true}))
        print("Pressed Ok")
        modal.open = false
    end,
    onCancel = function(_, _, event)
        -- Run when cancel or X button is pressed
        print("onCancel: ", json.encode(event, {indent = true}))
        print("Pressed Cancel")
        modal.open = false
    end,
    afterClose = function(_, _)
        -- Run when modal is closed from any source
        print("afterClose")
    end,
    afterOpenChange = function(_, _, open)
        -- Run when modal is opened or closed
        print("afterOpenChange: ", open)
    end,
}, {
    AM:createElement("Text", {text = "Child Text"}),
})
```
![image](https://i.imgur.com/nZqZ6uK.png)

#### title
Title of modal.

#### open
Weather the modal is shown, set this to show/hide it.<p/>
```lua
myUI:createElement("Button", {
    text = "Open Modal",
    onClick = function(_, _, event)
        local newState = not modal.open
        if newState then
            button.text = "Close Modal"
        else
            button.text = "Open Modal"
        end
        modal.open = newState
    end,
})
```

#### cancelButtonProps
Properties for the cancel button.<p/>
Properties can be found [Here (Button)](Button.md)<p/>
Or here [ant design button props](https://ant.design/components/button#api)

#### cancelText
Text on the cancel button.

#### centered
Weather the modal popup is centered to the users screen.

#### closeIcon
Icon of the close button in the top-right of the modal.

#### confirmLoading
"Whether to apply loading visual effect for OK button or not"

#### keyboard
Weather user can use keyboard in the modal.<p/>
So if user presses "ESCAPE" the cancel function will be fired.

#### mask
Weather to draw a mask behind the modal popup.<p/>
A mask is like a "overlay" making the background darker (by default).

#### okButtonProps
Properties for the ok button.<p/>
Properties can be found [Here (Button)](Button.md)<p/>
Or here [ant design button props](https://ant.design/components/button#api)

#### okText
Text displayed on the ok button.

#### okType
Button type of the ok button.<p/>
Can also be set with [okButtonProps](#okbuttonprops)<p/>
Types can be found [Here (Button)](Button.md)

#### autoFocusButton (not working, deprecated?)
What button (if any) should be focused when modal is shown.<p/>
`autoFocusButton = "nil"` will not focus either button. This is the default.<p/>
`autoFocusButton = "ok"` will focus the ok button.<p/>
`autoFocusButton = "cancel"` will focus the cancel button.