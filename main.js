(()=>{"use strict";const n="https://rickandmortyapi.com/api/character/",a=async a=>{const e=a?`${n}${a}`:n;try{const n=await fetch(e);return await n.json()}catch(n){console.log("Fech Error: ",n)}},e=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",t=()=>'\n        <div class="Error404">\n            <h2>Error 404</h2>\n        </div>\n    ',i={"/":async()=>`\n        <div class="Characters">\n      ${(await a()).results.map((n=>`\n        <article class="Character-item">\n          <a href="#/${n.id}/">\n            <img src="${n.image}" alt="${n.name}">\n            <h2>${n.name}</h2>\n          </a>\n        </article>\n      `)).join("")}\n    </div>\n    `,"/:id":async()=>{const n=e(),t=await a(n);return`\n        <div class="Characters-inner">\n            <article class="Characters-card">\n                <img src="${t.image}" alt="${t.name}">\n                <h2>${t.name}</h2>\n            </article>\n            <article class="Characters-card">\n            <h3>Episodes: ${t.episode.length}</h3>\n                <h3>Status: ${t.status}</h3>\n                <h3>Species: ${t.species}</h3>\n                <h3>Gender: ${t.gender}</h3>\n                <h3>Origin: ${t.origin.name}</h3>\n                <h3>Last Location: ${t.location.name}</h3>\n\n            </article>\n        </div>\n    `},"/contact":"Contact"},c=async()=>{const n=document.getElementById("header"),a=document.getElementById("content");n.innerHTML=await'\n        <div class="Header-main">\n            <div class="Header-logo">\n                <h1>\n                    <a href="/">\n                        The Rick and Morty API\n                    </a>\n                </h1>\n            </div>\n            <div class="Header-nav">\n                <a href="#/about">\n                    About\n                </a>\n            </div>\n        </div>\n    ';let c=e(),r=await(n=>n.length<=3?"/"===n?n:"/:id":`/${n}`)(c),s=i[r]?i[r]:t;a.innerHTML=await s()};window.addEventListener("load",c),window.addEventListener("hashchange",c)})();