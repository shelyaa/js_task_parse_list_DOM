var t=[];document.querySelectorAll("li").forEach(function(e){t.push(e)});var e=t.map(function(t){return{element:t,text:t.textContent,salary:Number(t.getAttribute("data-salary").replace(/[$,]/g,""))}}).sort(function(t,e){return e.salary-t.salary}),n=document.querySelector("ul");n.innerHTML="",e.forEach(function(t){n.appendChild(t.element)}),t.map(function(t){return{text:t.textContent,salary:t.textContent,age:t.getAttribute("data-age"),position:t.getAttribute("data-position")}});
//# sourceMappingURL=index.78799d1f.js.map