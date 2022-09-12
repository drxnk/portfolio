export default function initAnimaEffect() {
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

  const targetData = document.querySelectorAll("[data-anima]");
  const contatoHand = document.querySelector("[data-animat='right-hand']");
  const animationClass = "animate";
  const animationClassHand = "animate-hand";

  function animationScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;

    targetData.forEach(function (el) {
      if (windowTop > el.offsetTop) {
        el.classList.add(animationClass);
      } else {
        el.classList.remove(animationClass);
      }
    });

    if (windowTop > contatoHand.offsetTop) {
      contatoHand.classList.add(animationClassHand);
    } else {
      contatoHand.classList.remove(animationClassHand);
    }
  }

  animationScroll();

  window.addEventListener("scroll", debounce(function () {
    animationScroll();
  }, 50));
}
