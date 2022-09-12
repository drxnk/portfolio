export default function initToTopButton() {
  const debounce = function (func, wait, immediate) {
    let timeout;
    return function (...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

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

  window.addEventListener("scroll", debounce(function () {
    toTopButtonAppear();
  }, 50));
}
