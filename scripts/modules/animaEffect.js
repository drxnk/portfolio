export default function initAnimaEffect() {
  const targetData = document.querySelectorAll("[data-anima]");
  const contatoHand = document.querySelector("[data-animat='right-hand']");
  const animationClass = "animate";
  const animationClassHand = "animate-hand";

  function animationScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;

    targetData.forEach(function (el) {
      if (windowTop > el.offsetTop) {
        el.classList.add(animationClass);
      }
    });

    if (windowTop > contatoHand.offsetTop) {
      contatoHand.classList.add(animationClassHand);
    }
  }

  animationScroll();

  window.addEventListener("scroll", function () {
    animationScroll();
  });
}
