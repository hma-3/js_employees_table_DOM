function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,n){if(t){if("string"==typeof t)return e(t,void 0);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var n=document.querySelector("table"),r=t(n.tHead.rows[0].cells),a=n.tBodies[0],o=document.querySelector("body"),l=["Tokyo","Singapore","London","New York","Edinburgh","San Francisco"];r.forEach(function(e,n){var r=!1;e.addEventListener("click",function(){(function(e,n,r){var a=t(e.rows).sort(function(e,t){var r=e.cells[n].textContent.trim(),a=t.cells[n].textContent.trim();return s(r)?s(r)-s(a):r.localeCompare(a)});for(r&&a.reverse();e.firstChild;)e.removeChild(e.firstChild);a.forEach(function(t){return e.appendChild(t)})})(a,n,r),r=!r})});var i=-1;n.addEventListener("click",function(e){var t=e.target.closest("tr");t&&"TBODY"===t.parentNode.tagName&&(t.classList.toggle("active"),-1!==i&&i!==t.rowIndex-1&&n.querySelector("tbody tr:nth-child(".concat(i+1)).classList.remove("active"),i=t.rowIndex-1)});var u=document.createElement("form"),c=document.createElement("button");u.className="new-employee-form",o.appendChild(u),["name","position","office","age","salary"].forEach(function(e){var t=document.createElement("label");if(t.textContent=e[0].toLocaleUpperCase()+e.slice(1)+": ","office"===e){var n=document.createElement("select");n.setAttribute("name",e),n.dataset.qa=e,n.required=!0;var r=!0,a=!1,o=void 0;try{for(var i,c=l[Symbol.iterator]();!(r=(i=c.next()).done);r=!0){var d=i.value,s=document.createElement("option");s.value=d,s.textContent=d,n.appendChild(s)}}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}t.appendChild(n)}else{var m=document.createElement("input");m.setAttribute("name",e),m.dataset.qa=e,m.required=!0,"age"===e||"salary"===e?m.setAttribute("type","number"):m.setAttribute("type","text"),t.appendChild(m)}u.appendChild(t)}),c.setAttribute("type","submit"),c.textContent="Save to table",c.addEventListener("click",function(e){var n,r,o,i,c,d;e.preventDefault(),function(e){var n=t(e.querySelectorAll("input")),r=!0,a=!1,o=void 0;try{for(var l,i=n[Symbol.iterator]();!(r=(l=i.next()).done);r=!0){var u=l.value;if(""===u.value)return m(10,10,"Error","".concat(u.getAttribute("name")," is empty"),"error"),!1;if("name"===u.getAttribute("name")&&u.value.length<4)return m(10,10,"Error","Name should have at least 4 letters","error"),!1;if("age"===u.getAttribute("name")&&(u.value<18||u.value>=90))return m(10,10,"Error","Age should be between 18 and 90","error"),!1}}catch(e){a=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return!0}(u)&&(r=(n=document.createElement("tr")).insertCell(-1),o=n.insertCell(-1),i=n.insertCell(-1),c=n.insertCell(-1),d=n.insertCell(-1),r.textContent=u.querySelector("input[name=name]").value,o.textContent=u.querySelector("input[name=position]").value,i.textContent=u.querySelector("select").value,c.textContent=u.querySelector("input[name=age]").value,d.textContent="$"+Number(u.querySelector("input[name=salary]").value).toLocaleString("en-US"),n.appendChild(r),n.appendChild(o),n.appendChild(i),n.appendChild(c),n.appendChild(d),a.appendChild(n),t(u.querySelectorAll("input")).forEach(function(e){return e.value=""}),u.querySelector("select").value=l[0])}),u.appendChild(c);var d=!1;function s(e){return Number(e.replace(/[^0-9]+/g,""))}function m(e,t,n,r,a){var o=document.createElement("div"),l=document.createElement("h2"),i=document.createElement("p");o.className="notification ".concat(a),o.dataset.qa="notification",l.className="title",o.append(l,i),l.textContent=n,i.textContent=r,o.style.top="".concat(e,"px"),o.style.right="".concat(t,"px"),document.body.append(o),setTimeout(function(){o.style.display="none"},2e3)}n.addEventListener("dblclick",function(e){var t=e.target.closest("td");if(t&&!d){d=!0,t.dataset.initialValue||(t.dataset.initialValue=t.textContent.trim());var n=t.dataset.initialValue,r=document.createElement("input");r.className="cell-input",t.textContent="",t.appendChild(r),r.onblur=function(){t.textContent=r.value.trim()||n,d=!1},r.addEventListener("keypress",function(e){"Enter"===e.key&&(t.textContent=r.value.trim()||n,d=!1)})}});
//# sourceMappingURL=index.4a0ccee3.js.map
