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

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
