document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-button");
  const nav = document.querySelector("nav ul");
  const btnFechar = document.querySelector(".btn-fechar");
  const inputBuscar = document.querySelector(".input-buscar input");
  const advertiseButton = document.querySelector(".advertise-button");
  const sobreLink = document.getElementById("sobre-link");
  const sobreSection = document.getElementById("sobre");
  const lupaBuscar = document.querySelector(".lupa-buscar");
  const searchForm = document.querySelector("#search-form");

  menuButton.addEventListener("click", function () {
    nav.classList.toggle("open");
  });

  btnFechar.addEventListener("click", () => {
    inputBuscar.value = "";
  });

  advertiseButton.addEventListener("click", function () {
    window.location.href = "../vendas/vendas.html";
  });

  sobreLink.addEventListener("click", function () {
    sobreSection.scrollIntoView({ behavior: "smooth" });
  });

  const performSearch = () => {
    const query = inputBuscar.value.trim();
    if (query) {
      window.location.href = `../pesquisa/pesquisa.html?query=${encodeURIComponent(
        query
      )}`;
    }
  };

  lupaBuscar.addEventListener("click", performSearch);

  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    performSearch();
  });

  const cookies = document.cookie.split(";").reduce((acc, cookie) => {
    const [name, value] = cookie.split("=").map((c) => c.trim());
    acc[name] = value;
    return acc;
  }, {});

  document.querySelector("#sair").addEventListener("click", () => {
    document.cookie = "token=; Max-Age=-99999999;";
    document.cookie = "userLogado=; Max-Age=-99999999;";
    window.location.href = "../login/login.html";
  });
});
