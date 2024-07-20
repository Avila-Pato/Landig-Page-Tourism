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

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 3000,
  delay: 400,
  // reset: true,
});

sr.reveal(`.home__data, .explore__data, .explore__user, .footer__container`);
sr.reveal(`.home__card`, { delay: 600, distance: "100px", interval: 100 });
sr.reveal(`.about__data, .join__image`, { origin: "right" });
sr.reveal(`.about__image, .join__data`, { origin: "left" });
sr.reveal(`.popular__card`, { interval: 200 });
