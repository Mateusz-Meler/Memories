!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var o,i=["yellow","blue","violet","blueviolet","green","lightsalmon","orange","lightgreen","brown","lightblue","yellow","blue","violet","blueviolet","green","lightsalmon","orange","lightgreen","brown","lightblue"],a=document.querySelectorAll("div");a=function(e){if(Array.isArray(e))return r(e)}(o=a)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(o)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();var l=(new Date).getTime(),u="",c=[],f=a.length/2,s=0,d=function e(){(u=this)!=c[0]&&(u.classList.remove("hidden"),0!==c.length?(a.forEach((function(t){return t.removeEventListener("click",e)})),c[1]=u,setTimeout((function(){if(c[0].className===c[1].className){if(c.forEach((function(e){return e.classList.add("off")})),s++,a=a.filter((function(e){return!e.classList.contains("off")})),s==f){var t=(new Date).getTime();alert("Udało się ! Twój czas to: ".concat((t-l)/1e3," sekund 😎")),location.reload()}}else c.forEach((function(e){return e.classList.add("hidden")}));u="",c.length=0,a.forEach((function(t){return t.addEventListener("click",e)}))}),500)):c[0]=u)};a.forEach((function(e){var t=Math.floor(Math.random()*i.length);e.classList.add(i[t]),i.splice(t,1)})),setTimeout((function(){a.forEach((function(e){e.classList.add("hidden"),e.addEventListener("click",d)}))}),2e3)},function(e,t,n){}]);