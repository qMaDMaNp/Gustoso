var ham = document.querySelector(".heading-hamburger");
var nav = document.querySelector(".navigation");
var soc = document.querySelector(".social-list");
// .navigation-open
// .social-list

ham.addEventListener("click", function() {
  nav.classList.toggle("navigation-open");
  if (window.innerWidth < 576) {
    soc.classList.toggle("social-list-open");
  } else {
    soc.classList.remove("social-list-open");
  }
});
//добавити лісенер до soc бо кол soc просто пропадає бо йому не добавляється класс