const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Iniciamos el dibujo de la línea
            entry.target.classList.add('animate-line');

            const dots = entry.target.querySelectorAll('.timeline-dot');
            dots.forEach((dot, index) => {
                // El primer punto (index 0) aparece casi al instante (100ms)
                // Los siguientes esperan a que la línea baje (ej. 1s después)
                const delay = index === 0 ? 100 : (index * 1000); 
                
                setTimeout(() => {
                    dot.classList.add('show');
                }, delay);
            });
        }
    });
}, { threshold: 0.5 });

const timeline = document.querySelector('.timeline');
timelineObserver.observe(timeline);