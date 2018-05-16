const ham = document.querySelector(".heading-hamburger");
const nav = document.querySelector(".navigation");
const soc = document.querySelector(".social-list");
const windowSizeXs = window.matchMedia("(min-width: 992px)");
// .navigation-open
// .social-list

ham.addEventListener("click", function() {
  ham.classList.toggle("is-active");
  nav.classList.toggle("navigation-open");
  soc.classList.toggle("social-list-open");
});

function removeFunction(windowSizeXs) {
  if (windowSizeXs.matches && nav.classList.contains("navigation-open")) {
    ham.classList.remove("is-active");
    nav.classList.remove("navigation-open");
    soc.classList.remove("social-list-open");
  };
};

removeFunction(windowSizeXs)
windowSizeXs.addListener(removeFunction)