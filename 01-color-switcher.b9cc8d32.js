const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");let d=null;t.disabled=!0,e.addEventListener("click",(()=>{t.disabled=!1,e.disabled=!0,d=setInterval((()=>{document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),t.addEventListener("click",(()=>{e.disabled=!1,t.disabled=!0,clearInterval(d)}));
//# sourceMappingURL=01-color-switcher.b9cc8d32.js.map