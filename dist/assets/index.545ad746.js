import{r as e,o as t,c as r,a as o,b as n,d as s,e as a}from"./vendor.e447ba31.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(r){const o=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((r,s)=>{const a=new URL(e,o);if(self[t].moduleMap[a])return r(self[t].moduleMap[a]);const i=new Blob([`import * as m from '${a}';`,`${t}.moduleMap['${a}']=m;`],{type:"text/javascript"}),d=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){s(new Error(`Failed to import: ${e}`)),n(d)},onload(){r(self[t].moduleMap[a]),n(d)}});document.head.appendChild(d)})),self[t].moduleMap={}}}("/assets/");const i={},d={id:"app"};let c;i.render=function(n,s){const a=e("router-view");return t(),r("div",d,[o(a)])};const l={},m=[{path:"/",name:"Index",component:()=>function(e,t){if(!t)return e();if(void 0===c){const e=document.createElement("link").relList;c=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in l)return;l[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":c,t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e()))}((()=>__import__("./index.45634654.js")),["/assets/index.45634654.js","/assets/index.10a0944e.css","/assets/vendor.e447ba31.js"])}],u=n({history:s(),routes:m});a(i).use(u).mount("#app");