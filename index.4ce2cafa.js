document.querySelector(".ms-nav").addEventListener("click",(e=>{const t=document.createElement("img"),o=document.createElement("p");o.classList.add("rotate-text"),o.textContent="Hello ! i`m ur master of navigation",t.src="/rick-and-morty-30973.b77fda54.png",t.setAttribute("style","position:absolute; top:50%; left:50%;  transform: scaleX(-1); margin-top:30px; width:150px"),o.setAttribute("style","position:absolute; top:50%; left:50%; color:white"),document.body.style.backgroundColor="black",document.querySelector("header").style.opacity="0.5",document.querySelector("main").style.opacity="0.5",document.querySelector("footer").style.opacity="0.5",document.querySelector("header").style.pointerEvents="none",document.querySelector("main").style.pointerEvents="none",document.querySelector("footer").style.pointerEvents="none",document.body.insertAdjacentElement("beforeend",o),document.body.insertAdjacentElement("beforeend",t),setTimeout((()=>{t.classList.add("rotate"),o.textContent="Here u can see our site navigation",document.querySelector("header").style.opacity="1",o.classList.add("rotate"),document.querySelector(".nav-bar").style.animation="colorNav 1s infinite alternate"}),3e3),setTimeout((()=>{const e=document.createElement("button");e.textContent="Got it!",e.setAttribute("style","position:absolute; top:5%; left:50%; "),document.body.insertAdjacentElement("afterbegin",e),e.addEventListener("click",(e=>{document.querySelector("main").insertAdjacentElement("afterend",'<iframe src="https://vlipsy.com/embed/uFjK73rk" width="640" height="360" frameborder="0"></iframe>')}))}),5e3)}));
//# sourceMappingURL=index.4ce2cafa.js.map
