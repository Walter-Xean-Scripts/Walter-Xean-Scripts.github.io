Images is another thing we quickly need to discuss, this works quite straigt forwardly, but it's worth quickly mentioning.

### Supported image props
- `src` in the [Image](Image) element.
- `backgroundImage` everywhere you can normally use it in CSS.

### How to do it
When using images with Foact, you currently have two options:
- A URL with the image
- A local image
- A URL to another resource's image(s)

#### URL
With a URL you just put the one of the supported image properties, and you're good to go. For example:
```lua
local image = fObj:createElement("Image", {
    src = "https://i.imgur.com/0jXQ0QH.png"
})
```

#### Local image
First you're going to need to create an `images` folder (called exactly this!) in the root of your resource.
Then you need to include everything in that folder in your FXManifest, like so:
```lua
files {
  ..., -- your other files goes here
  'images/**/*'
}
```

Then let say I put an image in there, called "fortnite.jpg", I can then use it like this:
```lua
local image = fObj:createElement("Image", {
    width = "500px",
    height = "500px",
    src = "fortnite.jpg"
})
```
Which would turn out something like this:
![Showcase](https://i.imgur.com/QekSePz.png)

#### URL to another resource's image(s)
This works just as simple as using normal URLs, and URLs to other resource images in normal FiveM.
You just put this prefixed on your image path:
```lua
local image = fObj:createElement("Image", {
    src = "https://cfx-nui-RESOURCENAMEHERE/the/path/to/the/image.png"
})
```