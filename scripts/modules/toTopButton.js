export default function initToTopButton() {
  const formacao = document.getElementById("formacao");
  const toTop = document.querySelector(".to-top");

  var userHasScrolled = false;
  window.onscroll = function (e) {
    userHasScrolled = true;
  };

  setInterval(() => {
    // console.log(window.pageYOffset - formacao.getBoundingClientRect().height - 100)
    if (userHasScrolled) {
      if (
        window.pageYOffset - formacao.getBoundingClientRect().height - 100 >
        200
      ) {
        toTop.classList.remove("inativo");
        userHasScrolled = false;
      } else {
        toTop.classList.add("inativo");
        userHasScrolled = false;
      }
    }
  }, 100);
}
