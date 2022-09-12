export default function initAnimaEffect() {
  const targetData = document.querySelectorAll("[data-anima]");
  const animationClass = "animate";

  function animationScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
    targetData.forEach(function (el) {
      if (windowTop > el.offsetTop) {
        el.classList.add(animationClass);
      } else {
        el.classList.remove(animationClass);
      }
    });
  }

  animationScroll();

  window.addEventListener("scroll", function () {
    animationScroll();
  });
}
