var e,t,o,n,l={};e=l,t="default",o=function(){return d},n=function(e){return d=e},Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0});var r=function(e,t,o,n){return new(o||(o=Promise))((function(l,r){function c(e){try{i(n.next(e))}catch(e){r(e)}}function s(e){try{i(n.throw(e))}catch(e){r(e)}}function i(e){var t;e.done?l(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(c,s)}i((n=n.apply(e,t||[])).next())}))};function c(e){let t=0,o=0,n=e;do{t+=n.offsetTop||0,o+=n.offsetLeft||0,n=n.offsetParent}while(n);return{top:t,left:o}}class s{getHorizontalScroll(){return this.element.scrollLeft}getVerticalScroll(){return this.element.scrollTop}getMaxHorizontalScroll(){return this.element.scrollWidth-this.element.clientWidth}getMaxVerticalScroll(){return this.element.scrollHeight-this.element.clientHeight}getHorizontalElementScrollOffset(e,t){return c(e).left-c(t).left}getVerticalElementScrollOffset(e,t){return c(e).top-c(t).top}scrollTo(e,t){this.element.scrollLeft=e,this.element.scrollTop=t}constructor(e){this.element=e}}class i{getHorizontalScroll(){return window.scrollX||document.documentElement.scrollLeft}getVerticalScroll(){return window.scrollY||document.documentElement.scrollTop}getMaxHorizontalScroll(){return Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.body.clientWidth,document.documentElement.clientWidth)-window.innerWidth}getMaxVerticalScroll(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-window.innerHeight}getHorizontalElementScrollOffset(e){return(window.scrollX||document.documentElement.scrollLeft)+e.getBoundingClientRect().left}getVerticalElementScrollOffset(e){return(window.scrollY||document.documentElement.scrollTop)+e.getBoundingClientRect().top}scrollTo(e,t){window.scrollTo(e,t)}constructor(){this.element=window}}const a={elements:[],cancelMethods:[],add:(e,t)=>{a.elements.push(e),a.cancelMethods.push(t)},remove:(e,t)=>{const o=a.elements.indexOf(e);o>-1&&(t&&a.cancelMethods[o](),a.elements.splice(o,1),a.cancelMethods.splice(o,1))}},m="undefined"!=typeof window,u={cancelOnUserAction:!0,easing:e=>--e*e*e+1,elementToScroll:m?window:null,horizontalOffset:0,maxDuration:3e3,minDuration:250,speed:500,verticalOffset:0};var d=function(e,t={}){return r(this,void 0,void 0,(function*(){if(!m)return new Promise((e=>{e(!1)}));if(!window.Promise)throw"Browser doesn't support Promises, and animated-scroll-to depends on it, please provide a polyfill.";let o,n,l,r=Object.assign(Object.assign({},u),t);const c=r.elementToScroll===window,d=!!r.elementToScroll.nodeName;if(!c&&!d)throw"Element to scroll needs to be either window or DOM element.";const f=c?document.documentElement:r.elementToScroll;"smooth"===getComputedStyle(f).getPropertyValue("scroll-behavior")&&console.warn(`${f.tagName} has "scroll-behavior: smooth" which can mess up with animated-scroll-to's animations`);const y=c?new i:new s(r.elementToScroll);if(e instanceof Element){if(l=e,d&&(!r.elementToScroll.contains(l)||r.elementToScroll.isSameNode(l)))throw"options.elementToScroll has to be a parent of scrollToElement";o=y.getHorizontalElementScrollOffset(l,r.elementToScroll),n=y.getVerticalElementScrollOffset(l,r.elementToScroll)}else if("number"==typeof e)o=y.getHorizontalScroll(),n=e;else{if(!Array.isArray(e)||2!==e.length)throw"Wrong function signature. Check documentation.\nAvailable method signatures are:\n  animateScrollTo(y:number, options)\n  animateScrollTo([x:number | null, y:number | null], options)\n  animateScrollTo(scrollToElement:Element, options)";o=null===e[0]?y.getHorizontalScroll():e[0],n=null===e[1]?y.getVerticalScroll():e[1]}o+=r.horizontalOffset,n+=r.verticalOffset;const h=y.getMaxHorizontalScroll(),p=y.getHorizontalScroll();o>h&&(o=h);const S=o-p,g=y.getMaxVerticalScroll(),w=y.getVerticalScroll();n>g&&(n=g);const v=n-w,b=Math.abs(Math.round(S/1e3*r.speed)),E=Math.abs(Math.round(v/1e3*r.speed));let T=b>E?b:E;return T<r.minDuration?T=r.minDuration:T>r.maxDuration&&(T=r.maxDuration),new Promise(((e,t)=>{let l;0===S&&0===v&&e(!0),a.remove(y.element,!0);const c=()=>{u(),cancelAnimationFrame(l),e(!1)};a.add(y.element,c);const s=r.cancelOnUserAction?c:e=>e.preventDefault(),i=r.cancelOnUserAction?{passive:!0}:{passive:!1},m=["wheel","touchstart","keydown","mousedown"],u=()=>{m.forEach((e=>{y.element.removeEventListener(e,s,i)}))};m.forEach((e=>{y.element.addEventListener(e,s,i)}));const d=Date.now(),f=()=>{var t=Date.now()-d,c=t/T;const s=Math.round(p+S*r.easing(c)),i=Math.round(w+v*r.easing(c));t<T&&(s!==o||i!==n)?(y.scrollTo(s,i),l=requestAnimationFrame(f)):(y.scrollTo(o,n),cancelAnimationFrame(l),u(),a.remove(y.element,!1),e(!0))};l=requestAnimationFrame(f)}))}))};document.querySelector(".ms-nav").addEventListener("click",(e=>{const t=document.querySelector(".rotate-image"),o=document.createElement("p");o.classList.add("rotate-text"),o.textContent="Hello ! i`m ur master of navigation",t.style.opacity="1",document.querySelector(".facts").style.opacity="0",o.setAttribute("style","position:absolute; top:50%; left:50%; color:white"),document.body.style.backgroundColor="black",document.querySelector("header").style.opacity="0.5",document.querySelector("main").style.opacity="0.5",document.querySelector("footer").style.opacity="0.5",document.querySelector("header").style.pointerEvents="none",document.querySelector("main").style.pointerEvents="none",document.querySelector("footer").style.pointerEvents="none",document.querySelector(".for-next").style.opacity="0",document.body.insertAdjacentElement("beforeend",o),setTimeout((()=>{t.classList.add("rotate"),o.textContent="Here u can see our site navigation",document.querySelector("header").style.opacity="1",o.classList.add("rotate"),document.querySelector(".nav-bar").style.animation="colorNav 1s infinite alternate"}),1e3),setTimeout((()=>{const e=document.createElement("button");e.textContent="Ok",e.setAttribute("style","position:absolute; top:5%; left:50%; "),document.body.insertAdjacentElement("afterbegin",e),e.addEventListener("click",(n=>{const r=document.querySelector(".random-btn");(0,l.default)(r,3e3),t.classList.add("second-rotate"),t.classList.remove("rotate"),document.querySelector(".facts").style.opacity="1",o.setAttribute("style","top: 70%; left: 20%; position: absolute; color:white"),o.classList.remove("rotate"),o.classList.add("second-rotate-text"),document.querySelector(".for-next").style.opacity="1",o.textContent="U can get some facts and watch trailer of new season";const c=document.createElement("button");c.setAttribute("style","position:absolute; top:100%; left:30%; "),e.remove(),document.body.insertAdjacentElement("afterbegin",c),c.textContent="Got it!",document.querySelector("main").style.opacity="1",c.addEventListener("click",(e=>{document.querySelector("footer").style.opacity="1",document.querySelector("header").style.pointerEvents="all",document.querySelector("main").style.pointerEvents="all",document.querySelector("footer").style.pointerEvents="all",t.classList.remove("second-rotate"),t.classList.add("rotate"),c.remove(),t.style.opacity="0",o.remove(),document.querySelector(".nav-bar").style.animation="none"}))}))}),2e3)}));
//# sourceMappingURL=index.e499e877.js.map