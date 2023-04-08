const btnMenu = document.querySelector("#btn-menu");
const nav = document.querySelector("header");
btnMenu.addEventListener("click", () => {
  btnMenu.classList.toggle("active");
  nav.classList.toggle("active-menu");
});
