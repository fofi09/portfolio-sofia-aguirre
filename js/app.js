
//////////////////////
// Este código maneja la interactividad del portafolio.

// 1. VARIABLES
// =============================================================
// Variables para el scroll suave en la navegación principal y el footer.
const enlacesNavegacion = document.querySelectorAll('header nav a, .footer-nav-vertical a');

// Variables para los botones principales del hero (pueden no existir en algunas páginas).
const botonContacto = document.getElementById('boton-contacto') || null;
const botonProyectos = document.getElementById('boton-proyectos') || null;

// Variables para el formulario de contacto y sus campos.
const formulario = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const descripcion = document.getElementById('descripcion');

// Nueva variable para el mensaje del formulario.
const mensajeFormulario = document.getElementById('mensaje-formulario');


// 2. FUNCIONES
// =============================================================
function scrollSuave(idElemento) {
  const seccionObjetivo = document.getElementById(idElemento);
  if (seccionObjetivo) {
    const posicionObjetivo = seccionObjetivo.getBoundingClientRect().top;
    const posicionInicial = window.pageYOffset;
    let tiempoInicio = null;
    const duracion = 800;

    function animacionScroll(tiempoActual) {
      if (tiempoInicio === null) {
        tiempoInicio = tiempoActual;
      }
      const tiempoPasado = tiempoActual - tiempoInicio;
      const progreso = Math.min(tiempoPasado / duracion, 1);
      const easing = 0.5 * (1 - Math.cos(Math.PI * progreso));
      window.scrollTo(0, posicionInicial + (posicionObjetivo * easing));
      if (tiempoPasado < duracion) {
        window.requestAnimationFrame(animacionScroll);
      }
    }
    window.requestAnimationFrame(animacionScroll);
  }
}

function validarFormulario() {
  mensajeFormulario.textContent = '';
  const nombreValor = nombre.value.trim();
  const emailValor = email.value.trim();

  if (nombreValor === '' && emailValor === '') {
    mensajeFormulario.textContent = 'El nombre y el correo electrónico son obligatorios.';
    console.error('Error: El nombre y el correo electrónico son obligatorios.');
    return false;
  } else if (nombreValor === '') {
    mensajeFormulario.textContent = 'El nombre es obligatorio.';
    console.error('Error: El nombre es obligatorio.');
    return false;
  } else if (emailValor === '') {
    mensajeFormulario.textContent = 'El correo electrónico es obligatorio.';
    console.error('Error: El correo electrónico es obligatorio.');
    return false;
  }

  mensajeFormulario.textContent = 'Formulario enviado correctamente.';
  console.log('Validación del formulario exitosa. Enviando datos...');
  

  // Limpiar campos después de enviar
  nombre.value = '';
  email.value = '';
  descripcion.value = '';

  // aqui borro el mensaje "enviando datos" luego e 4 segundos asi no queda todo el tiempo 
  setTimeout(() => {
    mensajeFormulario.textContent = '';
  }, 4000);

  return true;

}


// 3. EVENTOS
// =============================================================
// Evento para los enlaces de navegación con scroll suave.
enlacesNavegacion.forEach(enlace => {
  enlace.addEventListener('click', (evento) => {
    evento.preventDefault();
    const idSeccion = evento.target.getAttribute('href').substring(1);
    scrollSuave(idSeccion);
  });
});

// Evento para el botón de "Get In Touch" (solo si existe).
if (botonContacto) {
  botonContacto.addEventListener('click', (evento) => {
    evento.preventDefault();
    // console.log('".');
    scrollSuave('contacto');
  });
}

// Evento para el botón de "Browse Projects" (solo si existe).
if (botonProyectos) {
  botonProyectos.addEventListener('click', (evento) => {
    evento.preventDefault();
    // console.log('');
    scrollSuave('proyectos');
  });
}

// Evento para el formulario de contacto.
if (formulario) {
  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    validarFormulario();
  });
}




// CAMBIAR IMAGEN DEL HERO AL CLIC
// Cambiar imagen al hacer clic
const imagenHero = document.getElementById('imagen-hero');

function cambiarImagen() {
    imagenHero.src = "imagenes/avatar2.png"; // ruta de la nueva imagen
}

if (imagenHero) {
    imagenHero.addEventListener('click', cambiarImagen);
}


// // CAMBIAR IMAGEN SOBRE MÍ AL CLIC
// document.addEventListener("DOMContentLoaded", () => {
//     const imagenSobreMi = document.getElementById('sobre-mi');

//     function cambiarSobreMi() {
//         imagenSobreMi.src = "imagenes/yo5 (1).png";
//     }

//     if (imagenSobreMi) {
//         imagenSobreMi.addEventListener('click', cambiarSobreMi);
//     }
// });





