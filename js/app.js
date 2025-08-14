// tiene el porden de: vaiables, funciones, eventos
//1. variables
const enlacesNavegacion = document.querySelectorAll('header nav a, .footer-nav-vertical a, .grupo-botones a');

const botonContacto = document.getElementById('boton-contacto') || null;
const botonProyectos = document.getElementById('boton-proyectos') || null;

const formulario = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const descripcion = document.getElementById('descripcion');

const mensajeFormulario = document.getElementById('mensaje-formulario');

const imagenHero = document.getElementById('imagen-hero');

// 2. FUNCIONES


//para q el sroll sea suave tantoen los mens como en los botones
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

//valida que nombre y  correo hayan sido enviados
function validarFormulario() {
  mensajeFormulario.textContent = '';
  const nombreValor = nombre.value.trim();
  const emailValor = email.value.trim();

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

function cambiarImagen() {
    imagenHero.src = "imagenes/avatar2.png"; 
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
    // console.log('".');
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

// Cambiar imagen al hacer clic
//solo una vez al hacer click en la imagen  camni

if (imagenHero) {
    imagenHero.addEventListener('click', cambiarImagen);
}







