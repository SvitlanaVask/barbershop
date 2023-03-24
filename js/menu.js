(() => {
  const refs = {
    openMenuBtn: document.querySelector(".burger-open"),
    closeMenuBtn: document.querySelector(".burger-close"),
    menu: document.querySelector(".burger-backdrop"),
    body: document.querySelector("body"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");

  }
})();