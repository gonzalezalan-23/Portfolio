<section class="portfolio-section" id="projects">
    <div class="section-title">
        <h1 class="bg-text">WORKS</h1>
        <h2 class="main-text">MY <span>PROJECTS</span></h2>
    </div>

    <!-- Menú de Filtros -->
    <div class="filter-menu">
        <button class="filter-btn active" data-filter="all">Todos</button>
        <button class="filter-btn" data-filter="web">Web</button>
        <button class="filter-btn" data-filter="app">App UI</button>
        <button class="filter-btn" data-filter="branding">Branding</button>
        <button class="filter-btn" data-filter="robotica">Robótica</button>
    </div>

    <div class="project-grid" id="project-grid">
        <!-- Proyecto 1 (Visible) -->
        <div class="project-card visible" data-category="web">
            <img src="img/proyecto-escuela.png" alt="Web">
            <div class="project-overlay">
                <div class="project-info"><h3>Web de Escuela</h3><p>Diseño Web</p></div>
            </div>
        </div>

        <!-- Proyecto 2 (Visible) -->
        <div class="project-card visible" data-category="app">
            <img src="img/proyecto-bazar.png" alt="App">
            <div class="project-overlay">
                <div class="project-info"><h3>App de control de stock</h3><p>App</p></div>
            </div>
        </div>

        <!-- Proyecto 3 (Visible) -->
        <div class="project-card visible" data-category="robotica">
            <img src="img/clubciencias.jpg" alt="App">
            <div class="project-overlay">
                <div class="project-info"><h3>Sistema robótico móvil</h3><p>Informática</p></div>
            </div>
        </div>

        <!-- Proyecto 4 (OCULTO INICIALMENTE) -->
        <div class="project-card hidden" data-category="branding">
            <img src="img/nimrod.png" alt="Branding">
            <div class="project-overlay">
                <div class="project-info"><h3>Comunity manager</h3><p>Branding</p></div>
            </div>
        </div>
    </div>

    <div class="load-more-container">
        <button id="load-more-btn" class="btn-load">LOAD MORE</button>
    </div>
</section>