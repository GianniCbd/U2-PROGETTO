window.addEventListener("scroll", function () {
  let nav = document.querySelector("nav");
  let button = document.querySelector("button");

  if (window.scrollY > 300) {
    nav.classList.add("nav-scrolled");
    button.classList.add("button-scrolled");
  } else {
    nav.classList.remove("nav-scrolled");
    button.classList.remove("button-scrolled");
  }
});
