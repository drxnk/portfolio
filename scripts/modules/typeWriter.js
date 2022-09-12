export default function initTypeWriter() {
  const textoP = document.querySelector(".textos-sobre p");

  function typeWriter(el, timer) {
    const textoArray = el.innerHTML.split('')

    el.innerHTML = ''

    textoArray.forEach((letra, i) => {
      setTimeout(() => {
        el.innerHTML += letra
      }, timer * i)
    })
  }

  typeWriter(textoP, 35)
}
