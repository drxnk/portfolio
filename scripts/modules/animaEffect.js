// ObfuscatorJS
/*
function _0x2c2d(_0xf9e8ac,_0x35ac5a){const _0x31269a=_0x5c73();return _0x2c2d=function(_0x36d20d,_0x5457cb){_0x36d20d=_0x36d20d-(-0x2*-0x3e9+0x132c+0x106*-0x19);let _0x4fb387=_0x31269a[_0x36d20d];return _0x4fb387;},_0x2c2d(_0xf9e8ac,_0x35ac5a);}(function(_0xb80a68,_0x54f492){const _0x197d91=_0x2c2d,_0x304ee8=_0xb80a68();while(!![]){try{const _0x41047e=-parseInt(_0x197d91(0x18a))/(-0xae+-0x2594+0x7a7*0x5)+parseInt(_0x197d91(0x175))/(0x107f+0x1a40+-0x2abd)+parseInt(_0x197d91(0x17f))/(0x1*-0x127+-0x673*-0x1+0x1*-0x549)+-parseInt(_0x197d91(0x16a))/(-0x5*-0x24d+-0x1df9*-0x1+0x1d*-0x16e)+-parseInt(_0x197d91(0x16f))/(0x1*-0x10fa+0x7bc+-0x1*-0x943)+-parseInt(_0x197d91(0x177))/(-0x78*-0x50+-0xeed*0x1+-0x168d)*(-parseInt(_0x197d91(0x186))/(-0x1*0xabc+-0x4b*0xe+0xedd))+parseInt(_0x197d91(0x189))/(0x55d+-0xb46+0x5f1);if(_0x41047e===_0x54f492)break;else _0x304ee8['push'](_0x304ee8['shift']());}catch(_0x197e1b){_0x304ee8['push'](_0x304ee8['shift']());}}}(_0x5c73,-0x2ee9+0x5481b+0x5*0x1b9e7));function _0x5c73(){const _0x410c44=['animate','2729310pZyfUn','innerHeigh','pElQz','forEach','wsZxa','albSG','301278fnUAxp','ELdCf','6InyyYx','chZLL','AWTCJ','tor','RaplQ','animate-ha','at=\x27right-','dxjIf','1251330atZozh','DGTVq','bKLKn','addEventLi','querySelec','torAll','kuATN','8453543qjLDCN','pageYOffse','offsetTop','14960328CSaBIO','879955zTQTXu','[data-anim','add','ZMjPy','scroll','5279428qvyzVE','classList','stener','hand\x27]'];_0x5c73=function(){return _0x410c44;};return _0x5c73();}export default function initAnimaEffect(){const _0x71eb51=_0x2c2d,_0x583507={'dxjIf':function(_0x26cd07,_0x6907ad){return _0x26cd07>_0x6907ad;},'ELdCf':function(_0x4babd2,_0x35b016){return _0x4babd2+_0x35b016;},'DGTVq':function(_0xb7890d,_0x3b8707){return _0xb7890d/_0x3b8707;},'chZLL':function(_0x40ee26,_0x10d31f){return _0x40ee26*_0x10d31f;},'albSG':function(_0x550b19,_0x579a3c){return _0x550b19>_0x579a3c;},'RaplQ':function(_0x2cb2c1){return _0x2cb2c1();},'AWTCJ':_0x71eb51(0x18b)+'a]','pElQz':_0x71eb51(0x18b)+_0x71eb51(0x17d)+_0x71eb51(0x16d),'wsZxa':_0x71eb51(0x16e),'kuATN':_0x71eb51(0x17c)+'nd','bKLKn':function(_0xa75c5f){return _0xa75c5f();},'ZMjPy':_0x71eb51(0x169)},_0x18e64d=document[_0x71eb51(0x183)+_0x71eb51(0x184)](_0x583507[_0x71eb51(0x179)]),_0x2fc238=document[_0x71eb51(0x183)+_0x71eb51(0x17a)](_0x583507[_0x71eb51(0x171)]),_0x1f106e=_0x583507[_0x71eb51(0x173)],_0x132145=_0x583507[_0x71eb51(0x185)];function _0x438756(){const _0x4f5bfa=_0x71eb51,_0x3e6230=_0x583507[_0x4f5bfa(0x176)](window[_0x4f5bfa(0x187)+'t'],_0x583507[_0x4f5bfa(0x180)](_0x583507[_0x4f5bfa(0x178)](window[_0x4f5bfa(0x170)+'t'],-0x1ce+-0x5c9*0x2+0xd63),0x22c3+-0x13*0x99+-0x3e6*0x6));_0x18e64d[_0x4f5bfa(0x172)](function(_0x28a8bb){const _0x22779f=_0x4f5bfa;_0x583507[_0x22779f(0x17e)](_0x3e6230,_0x28a8bb[_0x22779f(0x188)])&&_0x28a8bb[_0x22779f(0x16b)][_0x22779f(0x18c)](_0x1f106e);}),_0x583507[_0x4f5bfa(0x174)](_0x3e6230,_0x2fc238[_0x4f5bfa(0x188)])&&_0x2fc238[_0x4f5bfa(0x16b)][_0x4f5bfa(0x18c)](_0x132145);}_0x583507[_0x71eb51(0x181)](_0x438756),window[_0x71eb51(0x182)+_0x71eb51(0x16c)](_0x583507[_0x71eb51(0x168)],function(){const _0x536ac1=_0x71eb51;_0x583507[_0x536ac1(0x17b)](_0x438756);});}
*/

// Normal**
/*
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
*/

// Minify

export default function initAnimaEffect(){const t=document.querySelectorAll("[data-anima]"),n=document.querySelector("[data-animat='right-hand']");function a(){const a=window.pageYOffset+3*window.innerHeight/4;t.forEach((function(t){a>t.offsetTop&&t.classList.add("animate")})),a>n.offsetTop&&n.classList.add("animate-hand")}a(),window.addEventListener("scroll",(function(){a()}))}