const projects = [
  {
    id: 1,
    title: "Monkey Store",
    category: "Aplicacion de Escritorio",
    image: "proyectoSo1.jpg",
    description: "Sistema de control de stock, venta y facturación. Con registro de productos, gestión de inventario, carga de datos de cada venta e impresión de factura y cierre de caja. Se utilizó C# Windows Forms y Sqlite. (trabajo grupal).",
    link: "" // Al estar vacío, el botón "Ver" NO va a aparecer en esta card.
  },
  {
    id: 2,
    title: "Web Currículums",
    category: "Página Web",
    image: "proyectoSo3.jpg", // Le agregué la doble barra // que faltaba
    description: "Crea tu currículum totalmente gratis. Completas un formulario con tus datos, podés icluir o no tu foto. Se generarán dos curriculums, elegís el que más te guste, igualmente la página te recomendará el mejor para vos. Podrás camabiar de color y descargar totalmente gratis.",
    link: "https://fofi09.github.io/generadorCurriculums" // curriculum
  },
  {
    id: 3,
    title: "Editor de Diagramas ER",
    category: "ER Studio",
    image: "proyectoSo2.jpg",
    description: "¿Necesitás diagramas de Entidad-Relación para tus proyectos o trabajos prácticos? Con esta herramienta podrás crearlas, o elegir entre las plantillas que hay, podés editarlas como necesites. También se generará el código listo para crear tu base de datos, todo esto de forma gratuita.",
    link: "https://fofi09.github.io/CreaDiagramaER/" //diagrama er
  }
];

let activeIndex = 0;
let touchStart = null;
let touchEnd = null;
let isTrackpadScrolling = false;
let isEntering = false; 
let hasStartedEntry = false; 

const cardsContainer = document.getElementById('cards-container');
const dotsContainer = document.getElementById('dots-container');
const folderContainer = document.getElementById('folder-container');

projects.forEach((project, index) => {
  const card = document.createElement('div');
  
  card.className = "card-item absolute top-[10%] left-0 right-0 mx-auto w-[90%] h-[95%] bg-white rounded-xl shadow-lg flex flex-col overflow-hidden border border-gray-100 will-change-transform";
  const randomRot = Math.random() * 30 - 15; 
  card.style.cssText = `transform: translateY(-800px) rotate(${randomRot}deg) scale(0.5); opacity: 0; transition: none; will-change: transform, opacity;`;

  card.innerHTML = `
    <div class="h-[45%] shrink-0 w-full bg-gray-200 relative overflow-hidden">
      <img 
        src="${project.image}" 
        alt="${project.title}" 
        loading="lazy"
        decoding="async"
        class="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
      />
      <div class="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-[10px] font-bold text-gray-700 tracking-wider uppercase">
        ${project.category}
      </div>
    </div>

    <div class="card-content p-4 flex flex-col flex-grow transition-opacity duration-300 delay-100 opacity-0 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div class="flex items-center justify-between gap-2 mb-2 shrink-0">
        <h3 class="text-xl font-bold text-gray-800 leading-tight">${project.title}</h3>
        
        <!-- AQUÍ ESTÁ LA MAGIA: Solo muestra el enlace si project.link tiene algo escrito -->
        ${project.link ? `
        <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-sm font-bold text-black hover:opacity-70 transition-opacity shrink-0 cursor-pointer">
          Ver <i data-lucide="external-link" class="w-4 h-4"></i>
        </a>
        ` : ''}
      </div>

      <p class="text-gray-500 text-sm flex-grow mb-3">
        ${project.description}
      </p>
      <button class="mt-auto shrink-0 w-full opacity-0 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 pointer-events-none">
        Ver Proyecto <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
      </button>
    </div>
  `;
  cardsContainer.appendChild(card);

  const dot = document.createElement('div');
  dot.className = "dot-item rounded-full transition-all duration-300 cursor-pointer bg-gray-300 w-6 h-2";
  dot.onclick = () => { if(hasStartedEntry) setActiveIndex(index); };
  dotsContainer.appendChild(dot);
});

const cardElements = cardsContainer.querySelectorAll('.card-item');
const dotElements = dotsContainer.querySelectorAll('.dot-item');

function render() {
  if (!hasStartedEntry) return;

  requestAnimationFrame(() => {
    projects.forEach((_, index) => {
      const isActive = index === activeIndex;
      let offset = index - activeIndex;
      
      if (offset === projects.length - 1) offset = -1;
      if (offset === -(projects.length - 1)) offset = 1;

      let transformStyle = '';
      if (isActive) {
        transformStyle = 'transform: translateY(-55%) scale(1); z-index: 25; opacity: 1;';
      } else if (offset === 1) {
        transformStyle = 'transform: translateX(12%) translateY(-15%) scale(0.9) rotate(2deg); z-index: 15; opacity: 0.9;';
      } else if (offset === -1) {
        transformStyle = 'transform: translateX(-12%) translateY(-15%) scale(0.9) rotate(-2deg); z-index: 15; opacity: 0.9;';
      } else {
        transformStyle = 'transform: translateY(0%) scale(0.8); z-index: 5; opacity: 0;';
      }

      let transitionStyle = '';
      if (isEntering) {
        transitionStyle = `transition: transform 1.5s cubic-bezier(0.34, 1.1, 0.64, 1) ${index * 0.3}s, opacity 1.5s cubic-bezier(0.34, 1.1, 0.64, 1) ${index * 0.3}s;`;
      } else {
        transitionStyle = `transition: transform 0.5s ease-out, opacity 0.5s ease-out;`;
      }

      cardElements[index].style.cssText = transformStyle + transitionStyle + ' will-change: transform, opacity;';

      const contentDiv = cardElements[index].querySelector('.card-content');
      if (isActive) {
        contentDiv.classList.remove('opacity-0');
        contentDiv.classList.add('opacity-100');
      } else {
        contentDiv.classList.remove('opacity-100');
        contentDiv.classList.add('opacity-0');
      }

      dotElements[index].className = `dot-item rounded-full transition-all duration-300 cursor-pointer ${
        isActive ? 'bg-[#FF91B4] w-12 h-2' : 'bg-gray-300 w-6 h-2'
      }`;
    });
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !hasStartedEntry) {
      hasStartedEntry = true;
      isEntering = true;
      
      setTimeout(() => {
        render();
        setTimeout(() => {
          isEntering = false;
        }, 2500);
      }, 200);
    }
  });
}, { threshold: 0.5 }); 

observer.observe(document.getElementById('folder-container'));

window.setActiveIndex = function(index) {
  if(!hasStartedEntry) return;
  activeIndex = index;
  render();
};

function nextProject() {
  if(!hasStartedEntry || isEntering) return;
  activeIndex = activeIndex === projects.length - 1 ? 0 : activeIndex + 1;
  render();
}

function prevProject() {
  if(!hasStartedEntry || isEntering) return;
  activeIndex = activeIndex === 0 ? projects.length - 1 : activeIndex - 1;
  render();
}

folderContainer.addEventListener('click', (e) => {
  if (!hasStartedEntry || isEntering || e.target.closest('button') || e.target.closest('a')) return;
  const rect = folderContainer.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const width = rect.width;
  if (clickX < width * 0.30) {
    prevProject();
  } else if (clickX > width * 0.70) {
    nextProject();
  }
});

folderContainer.addEventListener('touchstart', (e) => {
  if(!hasStartedEntry) return;
  touchStart = e.targetTouches[0].clientX;
  touchEnd = null;
}, { passive: true });

folderContainer.addEventListener('touchmove', (e) => {
  if(!hasStartedEntry) return;
  touchEnd = e.targetTouches[0].clientX;
}, { passive: true });

folderContainer.addEventListener('touchend', () => {
  if (!touchStart || !touchEnd || !hasStartedEntry || isEntering) return;
  const distance = touchStart - touchEnd;
  const threshold = 35; 
  
  if (distance > threshold) {
    nextProject(); 
  } else if (distance < -threshold) {
    prevProject(); 
  }
});

folderContainer.addEventListener('wheel', (e) => {
  if (isTrackpadScrolling || !hasStartedEntry || isEntering) return;

  if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 15) {
    isTrackpadScrolling = true;
    if (e.deltaX > 0) {
      nextProject();
    } else {
      prevProject();
    }
    setTimeout(() => { isTrackpadScrolling = false; }, 500); 
  }
}, { passive: true });

lucide.createIcons();