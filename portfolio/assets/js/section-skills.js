
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // Si la tarjeta es visible en la pantalla
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.2 // Se activa cuando el 20% de la tarjeta es visible
    });

    // Seleccionamos todas las tarjetas y las ponemos a observar
    const hiddenElements = document.querySelectorAll('.skill-card');
    hiddenElements.forEach((el) => observer.observe(el))