(()=>{"use strict";var e={3392:(e,t,r)=>{var o=r(9104),n=r(2865),a=r(8734),i=r(1758);const s=Object.assign({name:"App"},{__name:"App",setup(e){return(e,t)=>{const r=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.Wv)(r)}}}),l=s,c=l;var u=r(1573),p=r(587);const d=(0,u.M_)((()=>{const e=(0,p.Ey)();return e}));var f=r(455);const h=[{path:"/",component:()=>Promise.all([r.e(121),r.e(541)]).then(r.bind(r,9541)),children:[{path:"",component:()=>Promise.all([r.e(121),r.e(287)]).then(r.bind(r,5287))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(121),r.e(487)]).then(r.bind(r,7487))}],v=h,b=(0,u.wE)((()=>{const e=f.Bt,t=(0,f.aE)({scrollBehavior:()=>({left:0,top:0}),routes:v,history:e("")});return t}));async function m(e,t){const r=e(c);r.use(n.A,t);const o="function"===typeof d?await d({}):d;r.use(o);const i=(0,a.IG)("function"===typeof b?await b({store:o}):b);return o.use((({store:e})=>{e.router=i})),{app:r,store:o,router:i}}const g={config:{}},y="";async function w({app:e,router:t,store:r},o){let n=!1;const a=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},i=e=>{if(n=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=a(e);null!==t&&(window.location.href=t,window.location.reload())},s=window.location.href.replace(window.location.origin,"");for(let c=0;!1===n&&c<o.length;c++)try{await o[c]({app:e,router:t,store:r,ssrContext:null,redirect:i,urlPath:s,publicPath:y})}catch(l){return l&&l.url?void i(l.url):void console.error("[Quasar] boot error:",l)}!0!==n&&(e.use(t),e.mount("#q-app"))}m(o.Ef,g).then((e=>{const[t,o]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(r.bind(r,5152)),Promise.resolve().then(r.bind(r,660))]).then((t=>{const r=o(t).filter((e=>"function"===typeof e));w(e,r)}))}))},660:(e,t,r)=>{r.r(t),r.d(t,{api:()=>a,default:()=>i});var o=r(1573),n=r(2303);const a=n.A.create({baseURL:"https://api.example.com"}),i=(0,o.zj)((({app:e})=>{e.config.globalProperties.$axios=n.A,e.config.globalProperties.$api=a}))},5152:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var o=r(1573),n=r(3537);const a={failed:"Action failed",success:"Action was successful"},i={"en-US":a},s=(0,o.zj)((({app:e})=>{const t=(0,n.hU)({locale:"en-US",globalInjection:!0,messages:i});e.use(t)}))}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,a)=>{if(!o){var i=1/0;for(u=0;u<e.length;u++){for(var[o,n,a]=e[u],s=!0,l=0;l<o.length;l++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](o[l])))?o.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,n,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{287:"49a28791",487:"96e98150",541:"ced261ed"}[e]+".js"})(),(()=>{r.miniCssF=e=>{}})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="msg:";r.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var p=c[u];if(p.getAttribute("src")==o||p.getAttribute("data-webpack")==t+a){s=p;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+a),s.src=o),e[o]=[n];var d=(t,r)=>{s.onerror=s.onload=null,clearTimeout(f);var n=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(r))),t)return t(r)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{var e={524:0};r.f.j=(t,o)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((r,o)=>n=e[t]=[r,o]));o.push(n[2]=a);var i=r.p+r.u(t),s=new Error,l=o=>{if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,n[1](s)}};r.l(i,l,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[i,s,l]=o,c=0;if(i.some((t=>0!==e[t]))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(l)var u=l(r)}for(t&&t(o);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},o=globalThis["webpackChunkmsg"]=globalThis["webpackChunkmsg"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[121],(()=>r(3392)));o=r.O(o)})();