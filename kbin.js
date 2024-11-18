(function (global) {
    class Kbin {
      goTo(selector, options) {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
          const { x = 0, y = 0, duration = 1 } = options;
          element.style.transition = `transform ${duration}s ease-in-out`;
          const transform = `translate(${x}px, ${y}px)`;
          requestAnimationFrame(() => {
            element.style.transform = transform;
          });
        });
      }

      goFrom(selector, options = {}) {
        const { x = 50, y = 0, duration = 1.5, delay = 0, opacity = 1, opacityChange = true } = options;
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
          if (opacityChange) {
            element.style.opacity = 0;
          }
          element.style.transform = `translate(${x}px, ${y}px)`;
          element.style.transition = `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`;
          requestAnimationFrame(() => {
            if (opacityChange) {
              element.style.opacity = opacity;
            }
            element.style.transform = 'translate(0, 0)';
          });
        });
      }
    }

    global.kbin = new Kbin();
})(window);
