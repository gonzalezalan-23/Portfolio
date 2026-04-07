const filterBtns = document.querySelectorAll('.filter-btn');
const allProjects = document.querySelectorAll('.project-card');
const loadMoreBtn = document.getElementById('load-more-btn');
const ITEMS_PER_PAGE = 3; // Definimos el límite aquí

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        if (filter === 'all') {
            // --- Lógica especial para "TODOS" ---
            allProjects.forEach((card, index) => {
                if (index < ITEMS_PER_PAGE) {
                    card.classList.remove('hidden');
                    card.classList.add('visible');
                } else {
                    card.classList.add('hidden');
                    card.classList.remove('visible');
                }
            });
            // Mostramos el botón de "Cargar más" solo si hay más de 3 proyectos en total
            loadMoreBtn.classList.toggle('hide-btn', allProjects.length <= ITEMS_PER_PAGE);
        } else {
            // --- Lógica para categorías específicas ---
            allProjects.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === category) {
                    card.classList.remove('hidden');
                    card.classList.add('visible');
                } else {
                    card.classList.add('hidden');
                    card.classList.remove('visible');
                }
            });
            // Ocultamos el botón al filtrar por categoría específica
            loadMoreBtn.classList.add('hide-btn');
        }
    });
});

// La lógica del botón Load More se mantiene casi igual
loadMoreBtn.addEventListener('click', () => {
    // Solo buscamos proyectos ocultos QUE SEAN de la categoría actual (en este caso 'all')
    const hiddenProjects = document.querySelectorAll('.project-card.hidden');
    
    for (let i = 0; i < ITEMS_PER_PAGE; i++) {
        if (hiddenProjects[i]) {
            hiddenProjects[i].classList.remove('hidden');
            hiddenProjects[i].classList.add('visible');
        }
    }

    if (document.querySelectorAll('.project-card.hidden').length === 0) {
        loadMoreBtn.classList.add('hide-btn');
    }
});
