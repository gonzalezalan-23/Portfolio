const duration = 2000; // Todos tardarán exactamente 2 segundos (2000ms)

const startCounters = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.number');
            
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const startTime = performance.now(); // Marca el momento exacto en que empieza

                const updateCount = (currentTime) => {
                    const elapsedTime = currentTime - startTime; // Cuánto tiempo ha pasado
                    const progress = Math.min(elapsedTime / duration, 1); // Progreso de 0 a 1

                    // Calculamos el valor actual basado en el progreso
                    const currentValue = Math.floor(progress * target);
                    counter.innerText = currentValue + '+';

                    if (progress < 1) {
                        requestAnimationFrame(updateCount); // Pide el siguiente frame de animación
                    } else {
                        counter.innerText = target + '+'; // Asegura el número final exacto
                    }
                };

                requestAnimationFrame(updateCount);
            });
            observer.unobserve(entry.target);
        }
    });
};

const counterObserver = new IntersectionObserver(startCounters, { threshold: 0.5 });
counterObserver.observe(document.querySelector('.stats-grid'));