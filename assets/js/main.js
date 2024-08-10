/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*=========MENU SHOW=============*/
/*=========VALIDANDO SI LA CONSTANTE EXISTE=============*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
  });
}

/*=========ESCODNER MENU=============*/
/*=========VALIDANDO SI LA CONSTANTE EXISTE=============*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll(".nav-link");
const linkAction = () => {
  document.getElementById("nav-menu");
  // cuando se haga click en cada nav_link se removera la clase show_menu
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== AGREGAR DESENFOQUE AL ENCABEZADO ===============*/
const blurHeader = () => {
  const header = document.getElementById("header");

  // Cuando el desplazamiento es mayor 50 Altura de la ventana gráfica
  //, agregue la clase scroll-header a la etiqueta header
  // Operacion ternaria
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);
/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // Cuando el scroll es mayor a 350px, mostrar el boton scroll-up

  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== Enlace activo de la sección de desplazamiento ===============*/

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav__list a");

const scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 58; // Ajusta según el espacio fijo en la parte superior
    const sectionId = section.getAttribute("id");

    // Encuentra el enlace correspondiente en el menú de navegación
    const navLink = document.querySelector(
      `.nav__list a[href="#${sectionId}"]`
    );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      // Activa el enlace correspondiente
      navLink.classList.add("active-link");
    } else {
      // Desactiva el enlace si no está en vista
      navLink.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/

// Configuración global de ScrollReveal
const sr = ScrollReveal({
  distance: "60px", // Ajuste de distancia para animaciones más suaves
  duration: 2500,   // Duración de la animación
  delay: 400,       // Retraso general de las animaciones
  reset: false,      // Las animaciones se ejecutan cada vez que el elemento entra en vista
});

// Animaciones de scroll para diferentes secciones

// Animación para los datos de las secciones home, explore y explore user
sr.reveal(`.home__data, .explore__data, .explore__user`, {
  interval: 100,  // Intervalo entre las animaciones de los elementos dentro de la misma clase
});

// Animación para las tarjetas de la sección home
sr.reveal(`.home__card`, {
  delay: 600,     // Retraso específico para las tarjetas
  distance: "80px", // Distancia ajustada para que sea más corta en pantallas pequeñas
  interval: 100,  // Intervalo entre tarjetas
});

// Animación para la sección about y join (datos e imágenes)
sr.reveal(`.about__data, .join__image`, {
  origin: "center", // Animación desde la derecha
  mobile: false,   // Deshabilitar en móviles si es necesario para mejorar la UX
});

sr.reveal(`.about__image, .join__data`, {
  origin: "left",  // Animación desde la izquierda
  mobile: false,   // Deshabilitar en móviles si es necesario para mejorar la UX
});

// Animación para las tarjetas de la sección popular
sr.reveal(`.popular__card`, {
  interval: 200,  // Intervalo entre las animaciones de las tarjetas
  mobile: true,   // Asegurar que las animaciones funcionan también en móviles
});
sr.reveal(`.explore__content`, {
  interval: 200,  // Intervalo entre las animaciones de las tarjetas
  mobile: true,   // Asegurar que las animaciones funcionan también en móviles
});