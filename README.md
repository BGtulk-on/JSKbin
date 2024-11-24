
# JSKbin ✨

JSKbin is a lightweight and flexible JavaScript library that makes animating elements on your webpage a breeze. With simple functions, you can create smooth transitions with minimal code. 🌟

## 🚀 Features

- **Smooth Transitions**: Animate elements with ease using `goTo`, `goFrom`, and `hover`.
- **Customizable Parameters**: Control position, zoom, duration, delay, opacity, colors, and more.
- **On-Display Animations**: Trigger animations when elements enter the viewport.
- **Hover Effects**: Easily add interactive animations like zoom effects on hover.
- **Zoom & Scale**: Smooth zoom-in and zoom-out animations with `zoomFrom`.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.
- **Cross-Browser Compatibility**: Fully supported by modern browsers.

## 💡 Core Methods

### `goTo(selector, options)`
Moves selected elements to a target position with customizable transitions.

#### Example:
```javascript
kbin.goTo(".box", {
  x: 50,
  y: 100,
  duration: 1.5,
  color: "red",
  backColor: "yellow",
  onDisplay: true
});
```

### `goFrom(selector, options)`
Animates elements from a specified starting position and scale.

#### Example:
```javascript
kbin.goFrom(".circle", {
  x: -100,
  duration: 2,
  zoomFrom: 0.8,
  opacity: 1,
  onDisplay: "every"
});
```

### `hover(selector, options)`
Applies hover effects with zoom and color transitions.

#### Example:
```javascript
kbin.hover(".hover-item", {
  zoom: 1.3,
  duration: 0.5,
  color: "blue",
  backColor: "lightgray"
});
```


## 🎨 Customization Options

| Option           | Description                                    | Default   |
|------------------|------------------------------------------------|-----------|
| `x`              | Horizontal translation in pixels.              | `0`       |
| `y`              | Vertical translation in pixels.                | `0`       |
| `duration`       | Duration of the animation in seconds.          | `1`       |
| `delay`          | Delay before the animation starts (seconds).   | `0`       |
| `zoom`           | Final zoom level.                              | `1`       |
| `zoomFrom`       | Starting zoom level.                           | `1`       |
| `opacity`        | Final opacity.                                 | `1`       |
| `opacityChange`  | Enables fading effect.                         | `true`    |
| `onDisplay`      | Trigger animation on viewport entry.           | `false`   |
| `color`          | Final text color.                              | `null`    |
| `backColor`      | Final background color.                        | `null`    |
| `fromColor`      | Initial text color (before transition).        | `null`    |
| `backFromColor`  | Initial background color.                      | `null`    |

## 📦 Installation

Add JSKbin to your project via a CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/kbin@latest/kbin.min.js"></script>
```

Or download `kbin.js` and include it locally.

## 🔥 Example Usage

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JSKbin Demo</title>
    <script src="https://cdn.jsdelivr.net/npm/kbin@latest/kbin.min.js"></script>
</head>
<body>
    <div class="animated-box">Hello, World!</div>
    <script>
        kbin.goFrom(".animated-box", { x: 100, duration: 1.5, color: "red", backColor: "yellow" });
    </script>
</body>
</html>
```

## 👨‍💻 Author

Created by [BGtulk](https://github.com/BGtulk-on). Contributions are welcome! If you like this project, give it a ⭐.

---

Enjoy smooth and simple animations with JSKbin! ✨
