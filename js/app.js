// tiene el orden de: vaiables, funciones, eventos
//1. variables
const enlacesNavegacion = document.querySelectorAll('header nav a, .footer-nav-vertical a, .grupo-botones a');

let botonContacto = document.getElementById('boton-contacto') || null;
let botonProyectos = document.getElementById('boton-proyectos') || null;

let formulario = document.getElementById('formulario');
let nombre = document.getElementById('nombre');
let email = document.getElementById('email');
let descripcion = document.getElementById('descripcion');

let mensajeFormulario = document.getElementById('mensaje-formulario');


document.getElementById("miImagen").src = "imagenes/avatar1.png";

// es para saber en cual imagen esta
let imagenActual = 1; 

// 2. FUNCIONES

//para q el sroll sea suave tanto en los menus como en los botones
function scrollSuave(idElemento) {
  const seccionObjetivo = document.getElementById(idElemento);
  if (seccionObjetivo) {

    const posicionObjetivo = seccionObjetivo.offsetTop;
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

      window.scrollTo(0, posicionInicial + (posicionObjetivo - posicionInicial) * easing);

      if (tiempoPasado < duracion) {
        window.requestAnimationFrame(animacionScroll);
      }
    }
    window.requestAnimationFrame(animacionScroll);
  }
}

//valida nombre y correo
function validarFormulario() {
  mensajeFormulario.textContent = '';
  let nombreValor = nombre.value.trim();
  let emailValor = email.value.trim();

  if (nombreValor === '' && emailValor === '') {
    mensajeFormulario.textContent = 'El nombre y el correo electrónico son obligatorios.';
    return false;
  } else if (nombreValor === '') {
    mensajeFormulario.textContent = 'El nombre es obligatorio.';
    return false;
  } else if (emailValor === '') {
    mensajeFormulario.textContent = 'El correo electrónico es obligatorio.';

    return false;
  }

  mensajeFormulario.textContent = 'Formulario enviado correctamente.';
  console.log('Validación del formulario exitosa. Enviando datos...');
  

  // limpio los inputs de nombr, email y descripcion
  nombre.value = '';
  email.value = '';
  descripcion.value = '';

  // aqui borro el mensaje "enviando datos" luego de 4 segundos asi no queda todo el tiempo 
  setTimeout(() => {
    mensajeFormulario.textContent = '';
  }, 4000);

  return true;

}

//con cada click la imagen cambia
function cambiarImagen() {
    let imagen = document.getElementById("miImagen");

    if (imagenActual === 1) {
        imagen.src = "imagenes/avatar2.png"; // Cambia a la segunda imagen
        imagenActual = 2; 
    } else {
        imagen.src = "imagenes/avatar1.png"; // Vuelve a la primera imagen
        imagenActual = 1; 
    }
}

// 3. EVENTOS

// Evento para los enlaces de navegación con scroll suave.
enlacesNavegacion.forEach(enlace => {
  enlace.addEventListener('click', (evento) => {
    evento.preventDefault();
    const idSeccion = evento.target.getAttribute('href').substring(1);
    scrollSuave(idSeccion);
  });
});

if (botonContacto) {
  botonContacto.addEventListener('click', (evento) => {
    evento.preventDefault();
    
    scrollSuave('contacto');
  });
}


if (botonProyectos) {
  botonProyectos.addEventListener('click', (evento) => {
    evento.preventDefault();
  
    scrollSuave('proyectos');
  });
}


if (formulario) {
  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    validarFormulario();
  });
}










