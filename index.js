window.addEventListener("scroll", function () {
  let scroll = document.querySelector(".scrollTop");
  scroll.classList.toggle("active", window.scrollY > 300);
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
  });
}

window.onload = function () {
  window.scrollTo({
    top: 0,
  });
};
