// // // Este código maneja la interactividad del portafolio.

// // // 1. VARIABLES
// // // =============================================================
// // // Variables para el scroll suave en la navegación principal y el footer.
// // const enlacesNavegacion = document.querySelectorAll('header nav a, .footer-nav-vertical a');

// // // Variables para los botones principales del hero.
// // const botonContacto = document.getElementById('boton-contacto');
// // const botonProyectos = document.getElementById('boton-proyectos');

// // // Variables para el formulario de contacto y sus campos.
// // const formulario = document.getElementById('formulario');
// // const nombre = document.getElementById('nombre');
// // const email = document.getElementById('email');
// // const descripcion = document.getElementById('descripcion');


// // // 2. FUNCIONES
// // // =============================================================
// // /**
// //  * Realiza un scroll suave a la sección objetivo.
// //  * @param {string} idElemento - El ID de la sección a la que se desea desplazar.
// //  */
// // function scrollSuave(idElemento) {
// //   // Obtenemos el elemento del DOM al que queremos desplazarnos.
// //   const seccionObjetivo = document.getElementById(idElemento);
  
// //   // Verificamos que el elemento exista.
// //   if (seccionObjetivo) {
// //     // Usamos el método scrollIntoView para un desplazamiento suave.
// //     seccionObjetivo.scrollIntoView({
// //       behavior: 'smooth'
// //     });
// //   }
// // }

// // /**
// //  * Valida los campos del formulario.
// //  * @returns {boolean} - Retorna true si la validación es exitosa, de lo contrario, false.
// //  */
// // function validarFormulario() {
// //   // Trim para eliminar espacios en blanco al inicio y final.
// //   const nombreValor = nombre.value.trim();
// //   const emailValor = email.value.trim();
  
// //   // Verificamos si los campos están vacíos.
// //   if (nombreValor === '' || emailValor === '') {
// //     // Si alguno está vacío, mostramos un mensaje de error en la consola.
// //     console.error('Error: El nombre y el correo electrónico son obligatorios.');
// //     return false; // La validación falló.
// //   }
  
// //   // Si los campos no están vacíos, la validación es exitosa.
// //   console.log('Validación del formulario exitosa. Enviando datos...');
// //   return true; // La validación fue exitosa.
// // }


// // // 3. EVENTOS
// // // =============================================================
// // // Evento para los enlaces de navegación con scroll suave.
// // enlacesNavegacion.forEach(enlace => {
// //   enlace.addEventListener('click', (evento) => {
// //     // Prevenimos el comportamiento por defecto del enlace (salto rápido).
// //     evento.preventDefault();
    
// //     // Obtenemos el ID de la sección a partir del atributo href.
// //     const idSeccion = evento.target.getAttribute('href').substring(1);
    
// //     // Llamamos a la función de scroll suave.
// //     scrollSuave(idSeccion);
// //   });
// // });

// // // Evento para el botón de "Get In Touch".
// // botonContacto.addEventListener('click', (evento) => {
// //   // Prevenimos el comportamiento por defecto del enlace.
// //   evento.preventDefault();
  
// //   // Mostramos un mensaje en la consola.
// //   console.log('Se ha hecho clic en el botón "Get In Touch".');
  
// //   // Realizamos el scroll suave a la sección de contacto.
// //   scrollSuave('contacto');
// // });

// // // Evento para el botón de "Browse Projects".
// // botonProyectos.addEventListener('click', (evento) => {
// //   // Prevenimos el comportamiento por defecto del enlace.
// //   evento.preventDefault();
  
// //   // Mostramos un mensaje en la consola.
// //   console.log('Se ha hecho clic en el botón "Browse Projects".');
  
// //   // Realizamos el scroll suave a la sección de proyectos.
// //   scrollSuave('proyectos');
// // });

// // // Evento para el formulario de contacto.
// // formulario.addEventListener('submit', (evento) => {
// //   // Prevenimos el envío del formulario para manejarlo con JavaScript.
// //   evento.preventDefault();
  
// //   // Llamamos a la función de validación.
// //   if (validarFormulario()) {
// //     // Si la validación es exitosa, podríamos enviar los datos a un servidor.
// //     // Por ahora, solo mostramos un mensaje de éxito.
// //     console.log('Formulario enviado correctamente.');
// //     // Aquí podrías agregar código para resetear el formulario si lo deseas.
// //     // formulario.reset();
// //   }
// // });




// ////////////////////////////////////
// // Este código maneja la interactividad del portafolio.

// // 1. VARIABLES
// // =============================================================
// // Variables para el scroll suave en la navegación principal y el footer.
// const enlacesNavegacion = document.querySelectorAll('header nav a, .footer-nav-vertical a');

// // Variables para los botones principales del hero.
// const botonContacto = document.getElementById('boton-contacto');
// const botonProyectos = document.getElementById('boton-proyectos');

// // Variables para el formulario de contacto y sus campos.
// const formulario = document.getElementById('formulario');
// const nombre = document.getElementById('nombre');
// const email = document.getElementById('email');
// const descripcion = document.getElementById('descripcion');

// // Nueva variable para el mensaje del formulario.
// const mensajeFormulario = document.getElementById('mensaje-formulario');


// // 2. FUNCIONES
// // =============================================================
// /**
//  * Realiza un scroll suave a la sección objetivo.
//  * @param {string} idElemento - El ID de la sección a la que se desea desplazar.
//  */
// function scrollSuave(idElemento) {
//   // Obtenemos el elemento del DOM al que queremos desplazarnos.
//   const seccionObjetivo = document.getElementById(idElemento);
  
//   // Verificamos que el elemento exista.
//   if (seccionObjetivo) {
//     // Usamos el método scrollIntoView para un desplazamiento suave.
//     seccionObjetivo.scrollIntoView({
//       behavior: 'smooth'
//     });
//   }
// }

// /**
//  * Valida los campos del formulario.
//  * @returns {boolean} - Retorna true si la validación es exitosa, de lo contrario, false.
//  */
// function validarFormulario() {
//   // Limpiamos cualquier mensaje de error anterior.
//   mensajeFormulario.textContent = '';
  
//   // Trim para eliminar espacios en blanco al inicio y final.
//   const nombreValor = nombre.value.trim();
//   const emailValor = email.value.trim();
  
//   // Verificamos las condiciones de validación.
//   if (nombreValor === '' && emailValor === '') {
//     mensajeFormulario.textContent = 'El nombre y el correo electrónico son obligatorios.';
//     // Agregamos un console.log para el profesor, como lo pediste.
//     console.error('Error: El nombre y el correo electrónico son obligatorios.');
//     return false; // La validación falló.
//   } else if (nombreValor === '') {
//     mensajeFormulario.textContent = 'El nombre es obligatorio.';
//     console.error('Error: El nombre es obligatorio.');
//     return false; // La validación falló.
//   } else if (emailValor === '') {
//     mensajeFormulario.textContent = 'El correo electrónico es obligatorio.';
//     console.error('Error: El correo electrónico es obligatorio.');
//     return false; // La validación falló.
//   }
  
//   // Si los campos no están vacíos, la validación es exitosa.
//   mensajeFormulario.textContent = 'Formulario enviado correctamente.';
//   console.log('Validación del formulario exitosa. Enviando datos...');
//   return true; // La validación fue exitosa.
// }


// // 3. EVENTOS
// // =============================================================
// // Evento para los enlaces de navegación con scroll suave.
// enlacesNavegacion.forEach(enlace => {
//   enlace.addEventListener('click', (evento) => {
//     // Prevenimos el comportamiento por defecto del enlace (salto rápido).
//     evento.preventDefault();
    
//     // Obtenemos el ID de la sección a partir del atributo href.
//     const idSeccion = evento.target.getAttribute('href').substring(1);
    
//     // Llamamos a la función de scroll suave.
//     scrollSuave(idSeccion);
//   });
// });

// // Evento para el botón de "Get In Touch".
// botonContacto.addEventListener('click', (evento) => {
//   // Prevenimos el comportamiento por defecto del enlace.
//   evento.preventDefault();
  
//   // Mostramos un mensaje en la consola.
//   console.log('Se ha hecho clic en el botón "Get In Touch".');
  
//   // Realizamos el scroll suave a la sección de contacto.
//   scrollSuave('contacto');
// });

// // Evento para el botón de "Browse Projects".
// botonProyectos.addEventListener('click', (evento) => {
//   // Prevenimos el comportamiento por defecto del enlace.
//   evento.preventDefault();
  
//   // Mostramos un mensaje en la consola.
//   console.log('Se ha hecho clic en el botón "Browse Projects".');
  
//   // Realizamos el scroll suave a la sección de proyectos.
//   scrollSuave('proyectos');
// });

// // Evento para el formulario de contacto.
// formulario.addEventListener('submit', (evento) => {
//   // Prevenimos el envío del formulario para manejarlo con JavaScript.
//   evento.preventDefault();
  
//   // Llamamos a la función de validación.
//   validarFormulario();
// });


/////////////////////////////////

// Este código maneja la interactividad del portafolio.

// 1. VARIABLES
// =============================================================
// Variables para el scroll suave en la navegación principal y el footer.
const enlacesNavegacion = document.querySelectorAll('header nav a, .footer-nav-vertical a');

// Variables para los botones principales del hero.
const botonContacto = document.getElementById('boton-contacto');
const botonProyectos = document.getElementById('boton-proyectos');

// Variables para el formulario de contacto y sus campos.
const formulario = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const descripcion = document.getElementById('descripcion');

// Nueva variable para el mensaje del formulario.
const mensajeFormulario = document.getElementById('mensaje-formulario');


// 2. FUNCIONES
// =============================================================
/**
 * Realiza un scroll suave a la sección objetivo de forma manual.
 */
function scrollSuave(idElemento) {
  // Obtenemos el elemento del DOM al que queremos desplazarnos.
  const seccionObjetivo = document.getElementById(idElemento);
  
  // Verificamos que el elemento exista.
  if (seccionObjetivo) {
    const posicionObjetivo = seccionObjetivo.getBoundingClientRect().top;
    const posicionInicial = window.pageYOffset;
    let tiempoInicio = null;
    const duracion = 800; // Duración de la animación en milisegundos.

    // Función para la animación del scroll
    function animacionScroll(tiempoActual) {
      if (tiempoInicio === null) {
        tiempoInicio = tiempoActual;
      }
      const tiempoPasado = tiempoActual - tiempoInicio;
      const progreso = Math.min(tiempoPasado / duracion, 1);
      
      // Calculamos la nueva posición de scroll usando una función de "ease-in-out" para suavizar.
      const easing = 0.5 * (1 - Math.cos(Math.PI * progreso));
      
      window.scrollTo(0, posicionInicial + (posicionObjetivo * easing));

      if (tiempoPasado < duracion) {
        // Seguimos pidiendo fotogramas hasta que la animación termine.
        window.requestAnimationFrame(animacionScroll);
      }
    }
    
    // Iniciamos la animación.
    window.requestAnimationFrame(animacionScroll);
  }
}


function validarFormulario() {
  // Limpiamos cualquier mensaje de error anterior.
  mensajeFormulario.textContent = '';
  
  // Trim para eliminar espacios en blanco al inicio y final.
  const nombreValor = nombre.value.trim();
  const emailValor = email.value.trim();
  
  // Verificamos las condiciones de validación.
  if (nombreValor === '' && emailValor === '') {
    mensajeFormulario.textContent = 'El nombre y el correo electrónico son obligatorios.';
    // Agregamos un console.log para el profesor, como lo pediste.
    console.error('Error: El nombre y el correo electrónico son obligatorios.');
    return false; // La validación falló.
  } else if (nombreValor === '') {
    mensajeFormulario.textContent = 'El nombre es obligatorio.';
    console.error('Error: El nombre es obligatorio.');
    return false; // La validación falló.
  } else if (emailValor === '') {
    mensajeFormulario.textContent = 'El correo electrónico es obligatorio.';
    console.error('Error: El correo electrónico es obligatorio.');
    return false; // La validación falló.
  }
  
  // Si los campos no están vacíos, la validación es exitosa.
  mensajeFormulario.textContent = 'Formulario enviado correctamente.';
  console.log('Validación del formulario exitosa. Enviando datos...');
  return true; // La validación fue exitosa.
}


// 3. EVENTOS
// =============================================================
// Evento para los enlaces de navegación con scroll suave.
enlacesNavegacion.forEach(enlace => {
  enlace.addEventListener('click', (evento) => {
    // Prevenimos el comportamiento por defecto del enlace (salto rápido).
    evento.preventDefault();
    
    // Obtenemos el ID de la sección a partir del atributo href.
    const idSeccion = evento.target.getAttribute('href').substring(1);
    
    // Llamamos a la función de scroll suave.
    scrollSuave(idSeccion);
  });
});

// Evento para el botón de "Get In Touch".
botonContacto.addEventListener('click', (evento) => {
  // Prevenimos el comportamiento por defecto del enlace.
  evento.preventDefault();
  
  // Mostramos un mensaje en la consola.
  console.log('Se ha hecho clic en el botón "Get In Touch".');
  
  // Realizamos el scroll suave a la sección de contacto.
  scrollSuave('contacto');
});

// Evento para el botón de "Browse Projects".
botonProyectos.addEventListener('click', (evento) => {
  // Prevenimos el comportamiento por defecto del enlace.
  evento.preventDefault();
  
  // Mostramos un mensaje en la consola.
  console.log('Se ha hecho clic en el botón "Browse Projects".');
  
  // Realizamos el scroll suave a la sección de proyectos.
  scrollSuave('proyectos');
});

// Evento para el formulario de contacto.
formulario.addEventListener('submit', (evento) => {
  // Prevenimos el envío del formulario para manejarlo con JavaScript.
  evento.preventDefault();
  
  // Llamamos a la función de validación.
  validarFormulario();
});
