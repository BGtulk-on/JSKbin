
# Kbin ✨

Kbin is a lightweight and flexible JavaScript library that makes animating elements on your webpage a breeze. With simple methods, you can create smooth transitions, including sliding and fading effects, all with minimal code. 🌟

## 🚀 Features

- **Smooth Transitions**: Animate elements with ease using `goTo` and `goFrom`.
- **Customizable Parameters**: Control the position (`x`, `y`), animation duration, opacity, delay, and more.
- **Delay Support**: Add a delay before the animation starts for better control.
- **Flexible Fade-In Effects**: With `goFrom`, you can make elements fade in and slide into view from any position.
- **On-Display Animations**: Start animations only when the element enters the viewport with `onDisplay`.
- **Cross-Browser Compatibility**: Works well on all modern browsers.

## 💡 Methods

### `goTo(selector, options)`
Move selected elements to a specific position with smooth transitions.

#### Parameters:
- `selector`: The CSS selector of the element(s) to animate.
- `options`:
  - `x`: Horizontal translation (in pixels, default is `0`).
  - `y`: Vertical translation (in pixels, default is `0`).
  - `duration`: Duration of the transition (in seconds, default is `1`).
  - `delay`: Delay before the transition starts (in seconds, default is `0`).
  - `onDisplay`: If `true`, the animation starts when the element enters the viewport (default is `false`).

#### Example:
```javascript
kbin.goTo(".box", { x: 100, y: 50, duration: 2, delay: 1, onDisplay: true });
```

### `goFrom(selector, options)`
Animate elements by moving them from an off-screen position while optionally fading them in.

#### Parameters:
- `selector`: The CSS selector of the element(s) to animate.
- `options`:
  - `x`: Starting horizontal position (in pixels, default is `50`).
  - `y`: Starting vertical position (in pixels, default is `0`).
  - `duration`: Duration of the transition (in seconds, default is `1.5`).
  - `delay`: Delay before the transition starts (in seconds, default is `0`).
  - `opacity`: Final opacity after transition (default is `1`).
  - `opacityChange`: If `true`, the element fades in (default is `true`).
  - `onDisplay`: If `true`, the animation starts when the element enters the viewport (default is `false`).

#### Example:
```javascript
kbin.goFrom(".circle", { x: 100, y: 50, duration: 2, opacity: 1, opacityChange: true, onDisplay: true });
```

## 🎨 Customization

Kbin provides a variety of options for customizing animations:

- **Positioning**: Move elements in any direction with `x` and `y`.
- **Timing**: Adjust animation speed with `duration` and delay with `delay`.
- **Viewport Activation**: Use `onDisplay` to trigger animations only when elements are visible.
- **Opacity**: Control fading effects with `opacity` and `opacityChange`.

## 🔥 Example Usage

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animated Page</title>
    <script src="https://cdn.jsdelivr.net/npm/kbin@1.8.4/kbin.min.js"></script>
    <style>
        .circle {
            width: 50px;
            height: 50px;
            background: red;
            border-radius: 50%;
        }
    </style>
</head>
<body>
    <div class="circle"></div>

    <script>
        kbin.goFrom(".circle", { x: 100, y: 50, duration: 2, opacity: 1, opacityChange: true, onDisplay: true });
    </script>
</body>
</html>
```

## 📦 Installation

### Last version: 1.8.4
You can add Kbin to your project via a CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/kbin@1.8.4/kbin.min.js"></script>
```

Or you can download the `kbin.min.js` file and include it locally.

## 👨‍💻 Creator

- [BGtulk](https://github.com/BGtulk-on) 🚀. If you find this project useful, show some love by starring the repo! ❤️

---

Thank you for using Kbin! 😉
