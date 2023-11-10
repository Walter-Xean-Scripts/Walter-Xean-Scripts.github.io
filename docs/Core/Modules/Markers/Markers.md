Aaaaand we've arrived at the Markers module, this is a module for simplifying the creation of markers, and also allows us to not rely on framework implementations. It allows you to register a marker, with a callback, and then it'll trigger that callback when a player enters or leaves the marker.

The neatest thing about this module is that it automatically handles deletion of markers on resource stop, so you don't have to worry about that.

### List of functionality
- [RegisterMarker](RegisterMarker)
- [DeleteMarker](DeleteMarker)
- [UpdateMarker](UpdateMarker)