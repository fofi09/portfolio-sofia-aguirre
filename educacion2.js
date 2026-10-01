document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica del Modal ---
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('expandedImg');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const images = document.querySelectorAll('.edu-img-box img');

    images.forEach(img => {
        img.addEventListener('click', function() {
            modal.classList.add('show'); 
            modalImg.src = this.src; 
        });
    });

    closeModalBtn.addEventListener('click', function() {
        modal.classList.remove('show'); 
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });

    // Cierra el certificado automáticamente al hacer scroll
    window.addEventListener('scroll', function() {
        if (modal.classList.contains('show')) {
            modal.classList.remove('show');
        }
    }, { passive: true });


    // --- Lógica del Carrusel y la Línea  ---
    const carouselContainer = document.querySelector('.edu-carousel');
    const sidebarElement = document.querySelector('.edu-sidebar');
    const blueLineElement = document.querySelector('.edu-blue-line');
    const educacionSection = document.getElementById('educacion-section');
    
    let isSidebarCollapsed = false;
    let isUserInteracting = false;
    let autoScrollInterval;
    let autoCollapseTimeout; 
    let animationStarted = false;

    function startAutoScroll() {
        autoScrollInterval = setInterval(() => {
            if (!isUserInteracting) {
                carouselContainer.scrollLeft += 1; 
                if (carouselContainer.scrollLeft >= carouselContainer.scrollWidth - carouselContainer.clientWidth) {
                    clearInterval(autoScrollInterval);
                }
            }
        }, 20); 
    }

    const stopAutoScroll = () => {
        isUserInteracting = true; 
        clearInterval(autoScrollInterval); 
        clearTimeout(autoCollapseTimeout); 
    };

    carouselContainer.addEventListener('touchstart', stopAutoScroll, { passive: true });
    carouselContainer.addEventListener('mousedown', stopAutoScroll, { passive: true });
    carouselContainer.addEventListener('wheel', stopAutoScroll, { passive: true });

    carouselContainer.addEventListener('scroll', () => {
        if (window.innerWidth < 768) {
            if (isUserInteracting) {
                if (carouselContainer.scrollLeft > 30 && !isSidebarCollapsed) {
                    sidebarElement.classList.add('collapsed');
                    isSidebarCollapsed = true;
                } 
                else if (carouselContainer.scrollLeft <= 5 && isSidebarCollapsed) {
                    sidebarElement.classList.remove('collapsed');
                    isSidebarCollapsed = false;
                }
            }
        }
    });

    blueLineElement.addEventListener('click', () => {
        if (window.innerWidth < 768 && isSidebarCollapsed) {
            sidebarElement.classList.remove('collapsed');
            isSidebarCollapsed = false;
            carouselContainer.scrollTo({ left: 0, behavior: 'smooth' });
        }
    });

    // --- SENSOR: Arrancar cuando la sección es visible ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animationStarted) {
                animationStarted = true;
                
                startAutoScroll();

                autoCollapseTimeout = setTimeout(() => {
                    if (window.innerWidth < 768 && !isUserInteracting && !isSidebarCollapsed) {
                        sidebarElement.classList.add('collapsed');
                        isSidebarCollapsed = true;
                    }
                }, 3000); 
            }
        });
    }, { threshold: 0.3 }); 

    if (educacionSection) {
        observer.observe(educacionSection);
    }
});