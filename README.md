
# Kbin ✨

Kbin is a lightweight and flexible JavaScript library that makes animating elements on your webpage a breeze. With simple functions, you can create smooth transitions with minimal code. 🌟

## 🚀 Features

- **Smooth Transitions**: Animate elements with ease using `goTo` and `goFrom`.
- **Customizable Parameters**: Control the position (`x`, `y`), animation duration, opacity, delay, and more.
- **Responsive Animations**: Use the `target` parameter to define animations for mobile, desktop, or both.
- **Delay Support**: Add a delay before the animation starts for better control.
- **Flexible Fade-In Effects**: With `goFrom`, you can make elements fade in and slide into view from any position.
- **On-Display Animations**: Start animations only when the element enters the viewport with `onDisplay`.
- **Hover Effects**: Easily add zoom effects on hover with custom duration and delay using `hover`.
- **Zoom & Scale**: Include zoom effects and control zoom-in or zoom-out animations with `zoom` and `zoomFrom`.
- **Cross-Browser Compatibility**: Works well on all modern browsers.

## 💡 Functions

### `goTo(selector, options)`
Move selected elements to a specific position with smooth transitions.

#### Parameters:
- `selector`: The CSS selector of the element(s) to animate.
- `options`:
  - `x`: Horizontal translation (in pixels, default is `0`).
  - `y`: Vertical translation (in pixels, default is `0`).
  - `duration`: Duration of the transition (in seconds, default is `1`).
  - `delay`: Delay before the transition starts (in seconds, default is `0`).
  - `onDisplay`: If `true`, the animation starts when the element enters the viewport. If `"every"`, the animation will trigger each time the element comes into view (default is `false`).
  - `zoom`: Optional zoom factor for scaling the element during the transition (default is `1`).
  - `color`: Custom text color during the transition (default is `null`).
  - `backColor`: Custom background color during the transition (default is `null`).
  - `fromColor`: Initial text color when the animation starts (default is `null`).
  - `backFromColor`: Initial background color when the animation starts (default is `null`).
  - `target`: Specify the target platform (`"mobile"`, `"desktop"`, or `"both"`, default is `"both"`).

#### Example:

```javascript
kbin.goTo(".box", { x: 100, y: 50, duration: 2, delay: 1, onDisplay: true, color: "red", backColor: "blue", target: "desktop" });
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
  - `onDisplay`: If `true`, the animation starts when the element enters the viewport. If `"every"`, the animation will trigger each time the element comes into view (default is `false`).
  - `zoom`: Optional zoom factor for scaling the element during the transition (default is `1`).
  - `zoomFrom`: Initial zoom factor when the animation starts (default is `1`).
  - `color`: Custom text color during the transition (default is `null`).
  - `backColor`: Custom background color during the transition (default is `null`).
  - `fromColor`: Initial text color when the animation starts (default is `null`).
  - `backFromColor`: Initial background color when the animation starts (default is `null`).
  - `target`: Specify the target platform (`"mobile"`, `"desktop"`, or `"both"`, default is `"both"`).

#### Example:
```javascript
kbin.goFrom(".circle", { x: 100, y: 50, duration: 2, opacity: 1, opacityChange: true, onDisplay: true, color: "red", backColor: "blue", target: "mobile" });
```

### `hover(selector, options)`
Apply hover effects to elements such as zooming in and fading.

#### Parameters:
- `selector`: The CSS selector of the element(s) to animate.
- `options`:
  - `zoom`: Zoom level on hover (default is `1`).
  - `duration`: Duration of the hover transition (in seconds, default is `1`).
  - `delay`: Delay before the hover effect starts (in seconds, default is `0`).
  - `zoomFrom`: Initial zoom factor when hover starts (default is `1`).
  - `opacity`: Final opacity during hover (default is `1`).
  - `opacityChange`: If `true`, the element will fade to `opacity` when hovered (default is `true`).
  - `color`: Custom text color during hover (default is `null`).
  - `backColor`: Custom background color during hover (default is `null`).
  - `fromColor`: Initial text color when hover starts (default is `null`).
  - `backFromColor`: Initial background color when hover starts (default is `null`).
  - `target`: Specify the target platform (`"mobile"`, `"desktop"`, or `"both"`, default is `"both"`).

#### Example:
```javascript
kbin.hover(".box", { zoom: 1.2, duration: 0.5, zoomFrom: 0.8, color: "red", backColor: "blue", target: "both" });
```


## 📦 Installation

### Last version: 1.10.13
You can add Kbin to your project via a CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/kbin@latest/kbin.min.js"></script>
```

Or you can download the `kbin.js` file and include it locally.

## 👨‍💻 Creator

- [YourName](https://github.com/YourGitHubUsername) 🚀. If you find this project useful, show your support by giving it a star! ⭐️
