export default function initToTopButton() {

  const targetFormacao = document.getElementById("formacao");
  const toTopBtn = document.querySelector(".to-top");

  function toTopButtonAppear() {
    const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;

    if (windowTop > targetFormacao.offsetTop) {
      toTopBtn.classList.remove("inativo");
    } else {
      toTopBtn.classList.add("inativo");
    }
  }

  toTopButtonAppear();

  window.addEventListener("scroll", function () {
    toTopButtonAppear();
  });
}
