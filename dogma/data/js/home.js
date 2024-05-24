document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector("#startMenu");
  const options = {
    Jugar: "data/pages/dogmaPage1.html",
    Opciones: "data/pages/dogmaOptions.html",
    Contacto: "data/pages/dogmaContact.html",
    Créditos: "data/pages/dogmaCredits.html",
  };
  menu.addEventListener("input", () => {
    return (
      window.open(options[menu.value], "_self") || window.open("#", "_self")
    );
  });
});
