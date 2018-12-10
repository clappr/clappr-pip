# Clappr Picture-In-Picture

Clappr plugin for adding OS-based picture-in-picture support on both desktop and mobile. Currently supports Safari on iOS and macOS, and Chrome on Android, Linux, Windows and macOS.

# Usage

Load Clappr and the PiP plugin(s) script on your webpage:

```html
  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/clappr@latest/dist/clappr.min.js"></script>
  <script type="text/javascript" src="clappr-pip.js" async></script>
```

When instantiating a new player, add `ClapprPip.PipPlugin` (and `ClapprPip.PipButton` if you want a button on the player `MediaControl`):

```javascript
var player = new Clappr.Player({
  source: 'http://clappr.io/highline.mp4',
  plugins: [ClapprPip.PipButton, ClapprPip.PipPlugin],
});
```

Using the `ClapprPip.PipButton` you'll have a button in the MediaControl, in the right controls panel. If you don't want to have a button, or if you have your own custom UI, you can just use the `ClapprPip.PipPlugin`, and use directly the external interface added:

```javascript
isPictureInPictureSupported // whether or not Picture-in-Picture mode is supported on the current Browser/OS
isPictureInPictureActive // whether or not Picture-in-Picture mode is active
enterPictureInPicture // enter Picture-in-Picture mode if supported
exitPictureInPicture // exit Picture-in-Picture mode
togglePictureInPicture // toggle Picture-in-Picture mode
```

# Development

By default, the project uses Yarn.

### Installing dependencies:

`yarn install`

### Running dev server (will start listening by default on port 8080)

`yarn start`

### Building:

`yarn build`

### Release minified version:

`yarn release`
