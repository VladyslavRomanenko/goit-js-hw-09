function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequire7bc7;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequire7bc7=r);var i=r("7Y9D8");const l=document.querySelector(".form");function s(e,n){const o=Math.random()>.3;return new Promise(((t,r)=>{setTimeout((()=>{o?t({position:e,delay:n}):r({position:e,delay:n})}),n+Math.random()*n*.2)}))}l.addEventListener("submit",(n=>{n.preventDefault();const o=parseInt(l.elements.delay.value),t=parseInt(l.elements.step.value),r=parseInt(l.elements.amount.value);for(let n=0;n<r;n++)s(n,o+n*t).then((({position:n,delay:o})=>{e(i).Notify.success(`✅ Fulfilled promise ${n} in ${o}ms`)})).catch((n=>{console.error(n),e(i).Notify.failure(`❌ Rejected promise ${n.position} in ${n.delay}ms`)}))}));const a=Math.random()>.3;console.log(a);
//# sourceMappingURL=03-promises.c4e41748.js.map