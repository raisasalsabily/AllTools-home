const mainMenu = document.querySelector(".main__menu");
const closeMenu = document.querySelector(".close__menu");
const openMenu = document.querySelector(".open__menu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}

function close() {
  mainMenu.style.top = "-100%";
}
