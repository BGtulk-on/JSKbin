(function (global) {
    class Kbin {

        goTo(selector, options = {}) {
            const {
                x = 0,
                y = 0,
                duration = 1,
                delay = 0,
                onDisplay = false,
                zoom = 1,
                color = null,
                backColor = null,
                fromColor = null,
                backFromColor = null,
            } = options;
            const elements = document.querySelectorAll(selector);

            elements.forEach((element, index) => {
                const elementDelay = delay * index;
                let hasAnimated = false;

                const applyTransition = () => {
                    if (hasAnimated && onDisplay === "every") return; // Skip repeated animations for "every"
                    hasAnimated = true; // Mark animation as done

                    if (fromColor) element.style.color = fromColor;
                    if (backFromColor) element.style.backgroundColor = backFromColor;

                    element.style.transition = `transform ${duration}s ease-in-out ${elementDelay}s, color ${duration}s ease-in-out ${elementDelay}s, background-color ${duration}s ease-in-out ${elementDelay}s`;
                    const transform = `translate(${x}px, ${y}px) scale(${zoom})`;

                    requestAnimationFrame(() => {
                        element.style.transform = transform;
                        if (color) element.style.color = color;
                        if (backColor) element.style.backgroundColor = backColor;
                    });
                };

                if (onDisplay) {
                    const observer = new IntersectionObserver((entries, observer) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                applyTransition();
                                if (onDisplay !== "every") {
                                    observer.disconnect();
                                } else {
                                    setTimeout(() => {
                                        hasAnimated = false;
                                    }, duration * 1000);
                                }
                            } else {
                                if (onDisplay === "every") {
                                    element.style.opacity = 0;
                                }
                            }
                        });
                    }, { threshold: 0.1 }
                    );

                    observer.observe(element);
                } else {
                    applyTransition();
                }
            });
        }

        goFrom(selector, options = {}) {
                const {
                    x = 50,
                    y = 0,
                    duration = 1.5,
                    delay = 0,
                    opacity = 1,
                    opacityChange = true,
                    onDisplay = false,
                    zoom = 1,
                    zoomFrom = 1,
                    color = null,
                    backColor = null,
                    fromColor = null,
                    backFromColor = null,
                } = options;
                const elements = document.querySelectorAll(selector);

                elements.forEach((element, index) => {
                    const elementDelay = delay * index;
                    let hasAnimated = false;

                    const applyTransition = () => {
                        if (hasAnimated && onDisplay === "every") return; // Skip repeated animations for "every"
                        hasAnimated = true; // Mark animation as done

                        element.style.transition = 'none';
                        if (opacityChange) {
                            element.style.opacity = 0;
                        }
                        element.style.transform = `translate(${x}px, ${y}px) scale(${zoomFrom})`;
                        if (fromColor) element.style.color = fromColor;
                        if (backFromColor) element.style.backgroundColor = backFromColor;

                        requestAnimationFrame(() => {
                            element.offsetHeight;
                            element.style.transition = `opacity ${duration}s ease-out ${elementDelay}s, transform ${duration}s ease-out ${elementDelay}s, color ${duration}s ease-out ${elementDelay}s, background-color ${duration}s ease-out ${elementDelay}s`;

                            if (opacityChange) {
                                element.style.opacity = opacity;
                            }
                            element.style.transform = `translate(0, 0) scale(${zoom})`;
                            if (color) element.style.color = color;
                            if (backColor) element.style.backgroundColor = backColor;
                        });
                    };

                    if (onDisplay) {
                        const observer = new IntersectionObserver((entries, observer) => {
                            entries.forEach((entry) => {
                                if (entry.isIntersecting) {
                                    applyTransition();
                                    if (onDisplay !== "every") {
                                        observer.disconnect();
                                    } else {
                                        setTimeout(() => {
                                            hasAnimated = false;
                                        }, duration * 10);
                                    }
                                } else {
                                    if (onDisplay === "every") {
                                        element.style.opacity = 0;
                                    }
                                }
                            });
                        }, { threshold: 0.1 }
                        );

                        observer.observe(element);
                    } else {
                        applyTransition();
                    }
                });
            }

            hover(selector, options = {}) {
                const { zoom = 1, duration = 1, delay = 0, zoomFrom = 1, opacity = 1, opacityChange = true, color = null, backColor = null, fromColor = null, backFromColor = null } = options;
                const elements = document.querySelectorAll(selector);

                elements.forEach((element) => {
                    const applyHoverEffect = () => {
                        element.style.transition = `transform ${duration}s ease-in-out ${delay}s, opacity ${duration}s ease-in-out ${delay}s, color ${duration}s ease-in-out ${delay}s, background-color ${duration}s ease-in-out ${delay}s`;

                        if (opacityChange) {
                            element.style.opacity = opacity;
                        }

                        if (fromColor) element.style.color = fromColor;
                        if (backFromColor) element.style.backgroundColor = backFromColor;

                        requestAnimationFrame(() => {
                            element.style.transform = `scale(${zoom})`;
                            if (color) element.style.color = color;
                            if (backColor) element.style.backgroundColor = backColor;
                        });
                    };

                    const removeHoverEffect = () => {
                        element.style.transition = `transform ${duration}s ease-in-out, opacity ${duration}s ease-in-out, color ${duration}s ease-in-out, background-color ${duration}s ease-in-out`;
                        element.style.transform = `scale(${zoomFrom})`;

                        if (opacityChange) {
                            element.style.opacity = 1;
                        }
                        element.style.color = '';
                        element.style.backgroundColor = '';
                    };

                    element.addEventListener('mouseover', () => {
                        applyHoverEffect();
                    });

                    element.addEventListener('mouseout', () => {
                        removeHoverEffect();
                    });
                });
            }
            zoomFrom(selector, options = {}) {
                const { x = 0, y = 0, duration = 1.5, delay = 0, opacity = 1, opacityChange = true, onDisplay = false, zoomFrom = 0 } = options;
                const elements = document.querySelectorAll(selector);

                elements.forEach((element, index) => {
                    const elementDelay = delay * index;
                    const applyTransition = () => {
                        element.style.transition = 'none';
                        element.style.transform = `translate(${x}px, ${y}px) scale(${zoomFrom})`;
                        if (opacityChange) {
                            element.style.opacity = 0;
                        }

                        requestAnimationFrame(() => {
                            element.offsetHeight;
                            element.style.transition = `opacity ${duration}s ease-out ${elementDelay}s, transform ${duration}s ease-out ${elementDelay}s`;

                            if (opacityChange) {
                                element.style.opacity = opacity;
                            }
                            element.style.transform = `translate(0, 0) scale(1)`;
                        });
                    };

                    if (onDisplay) {
                        const observer = new IntersectionObserver((entries, observer) => {
                            entries.forEach((entry) => {
                                if (entry.isIntersecting) {
                                    applyTransition();
                                    if (onDisplay !== "every") {
                                        observer.disconnect();
                                    }
                                } else {
                                    element.style.transition = `opacity ${duration}s ease-in-out`;
                                    element.style.opacity = 0;
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
