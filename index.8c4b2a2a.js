function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function t(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}}var n=document.querySelector("thead"),r=document.querySelector("tbody"),a=document.createElement("form"),o=document.createElement("button"),i=null,l=null;function c(e,t){var n=e.querySelectorAll("td");if(!n.length)return"";var r=n[t].textContent.trim().replace(/[$,]/g,"");return isNaN(r)?r:parseInt(r)}function u(e,t){var n=document.createElement("div"),r=document.createElement("h1"),a=document.createElement("p");n.setAttribute("data-qa","notification"),n.className="notification ".concat(e),r.textContent=e[0].toUpperCase()+e.slice(1),a.textContent=t[0].toUpperCase()+t.slice(1),n.appendChild(r),n.appendChild(a),document.body.appendChild(n),setTimeout(function(){n.style.visibility="hidden"},2e3)}a.classList.add("new-employee-form"),[{label:"Name",name:"name",type:"text"},{label:"Position",name:"position",type:"text"},{label:"office",name:"office",type:"select",options:["Tokyo","Singapore","London","New York","Edinburgh","San Francisco"]},{label:"Age",name:"age",type:"number",min:1},{label:"Salary",name:"salary",type:"number",min:0}].forEach(function(e){var t,n=document.createElement("label");n.textContent="".concat(e.label,": "),"select"===e.type?(t=document.createElement("select"),e.options.forEach(function(e){var n=document.createElement("option");n.value=e,n.textContent=e,t.appendChild(n)})):(t=document.createElement("input"),void 0!==e.min&&t.setAttribute("min",e.min)),t.setAttribute("name",e.name),t.setAttribute("type",e.type),t.setAttribute("data-qa",e.name),n.appendChild(t),a.appendChild(n)}),o.textContent="Save to table",a.appendChild(o),document.body.appendChild(a),a.addEventListener("submit",function(e){e.preventDefault();var n,a=Array.from(e.target.elements).reduce(function(e,t){return("INPUT"===t.tagName||"SELECT"===t.tagName)&&(e[t.name]=isNaN(t.value)?t.value:parseInt(t.value)),e},{});(a.name&&a.position&&a.age&&a.salary?a.name.length<4?(u("error","Name must be no shorter than 4"),1):(a.age<18||a.age>90)&&(u("error","Age must be between ".concat(18," and ").concat(90)),1):(u("error","Each field must be filled in"),1))||(u("success","Form submitted successfully"),n=document.createElement("tr"),Object.entries(a).forEach(function(e){var r=function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var o=[],i=!0,l=!1;try{for(a=a.call(e);!(i=(n=a.next()).done)&&(o.push(n.value),2!==o.length);i=!0);}catch(e){l=!0,r=e}finally{try{i||null==a.return||a.return()}finally{if(l)throw r}}return o}}(e,2)||t(e,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),a=r[0],o=r[1],i=document.createElement("td");i.textContent="salary"===a?"$".concat(o.toLocaleString()):o,n.appendChild(i)}),r.appendChild(n))}),n.addEventListener("click",function(n){var r=n.target.closest("th");if(r){var a,o=r.cellIndex,l=function(t){if(Array.isArray(t))return e(t)}(a=document.querySelectorAll("tbody tr"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(a)||t(a)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),u=document.querySelector("tbody");i!==o?(l.sort(function(e,t){var n=c(e,o),r=c(t,o);return"number"==typeof n&&"number"==typeof r?n-r:"string"==typeof n&&"string"==typeof r?n.localeCompare(r):void 0}),i=o):l.reverse(),l.forEach(function(e){u.appendChild(e)})}}),r.addEventListener("click",function(e){var t=e.target.closest("tr");t&&l!==t&&(l&&l.classList.remove("active"),(l=t).classList.add("active"))}),r.addEventListener("dblclick",function(e){var t=e.target.closest("td"),n=t.textContent,r=document.createElement("input");r.classList.add("cell-input"),t.textContent="",r.value=n,t.appendChild(r),r.focus(),r.addEventListener("blur",function(e){t.textContent=r.value}),r.addEventListener("keypress",function(e){"Enter"===e.key&&r.blur()})});
//# sourceMappingURL=index.8c4b2a2a.js.map
