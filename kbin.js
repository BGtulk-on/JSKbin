(function (global) {
    class Kbin {
        goTo(selector, options = {}) {
            const { x = 0, y = 0, duration = 1, delay = 0, onDisplay = false } = options;
            const elements = document.querySelectorAll(selector);

            elements.forEach((element) => {
                const applyTransition = () => {
                    element.style.transition = `transform ${duration}s ease-in-out ${delay}s`;
                    const transform = `translate(${x}px, ${y}px)`;

                    requestAnimationFrame(() => {
                        element.style.transform = transform;
                    });
                };

                if (onDisplay) {
                    const observer = new IntersectionObserver((entries, observer) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                applyTransition();
                                observer.disconnect();
                            }
                        });
                    });

                    observer.observe(element);
                } else {
                    applyTransition();
                }
            });
        }

        goFrom(selector, options = {}) {
            const { x = 50, y = 0, duration = 1.5, delay = 0, opacity = 1, opacityChange = true, onDisplay = false } = options;
            const elements = document.querySelectorAll(selector);

            elements.forEach((element) => {
                const applyTransition = () => {
                    element.style.transition = 'none';
                    if (opacityChange) {
                        element.style.opacity = 0;
                    }
                    element.style.transform = `translate(${x}px, ${y}px)`;

                    requestAnimationFrame(() => {
                        element.offsetHeight;
                        element.style.transition = `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`;

                        if (opacityChange) {
                            element.style.opacity = opacity;
                        }
                        element.style.transform = 'translate(0, 0)';
                    });
                };

                if (onDisplay) {
                    const observer = new IntersectionObserver((entries, observer) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                applyTransition();
                                observer.disconnect();
                            }
                        });
                    });

                    observer.observe(element);
                } else {
                    applyTransition();
                }
            });
        }
    }

    global.kbin = new Kbin();
})(window);
