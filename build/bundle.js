var app=function(){"use strict";function e(){}const t=e=>e;function n(e){return e()}function r(){return Object.create(null)}function i(e){e.forEach(n)}function s(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a;function c(t,n,r){t.$$.on_destroy.push(function(t,...n){if(null==t)return e;const r=t.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function l(e,t,n,r){if(e){const i=u(e,t,n,r);return e[0](i)}}function u(e,t,n,r){return e[1]&&r?function(e,t){for(const n in t)e[n]=t[n];return e}(n.ctx.slice(),e[1](r(t))):n.ctx}function h(e,t,n,r){if(e[2]&&r){const i=e[2](r(n));if(void 0===t.dirty)return i;if("object"==typeof i){const e=[],n=Math.max(t.dirty.length,i.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|i[r];return e}return t.dirty|i}return t.dirty}function d(e,t,n,r,i,s){if(i){const o=u(t,n,r,s);e.p(o,i)}}function f(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}function p(e){return null==e?"":e}const m="undefined"!=typeof window;let g=m?()=>window.performance.now():()=>Date.now(),y=m?e=>requestAnimationFrame(e):e;const v=new Set;function w(e){v.forEach((t=>{t.c(e)||(v.delete(t),t.f())})),0!==v.size&&y(w)}function b(e,t){e.appendChild(t)}function I(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function T(e){const t=S("style");return function(e,t){b(e.head||e,t)}(I(e),t),t}function E(e,t,n){e.insertBefore(t,n||null)}function _(e){e.parentNode.removeChild(e)}function k(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function S(e){return document.createElement(e)}function A(e){return document.createTextNode(e)}function C(){return A(" ")}function N(){return A("")}function R(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function D(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function $(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}const O=new Set;let P,x=0;function L(e,t){const n=(e.style.animation||"").split(", "),r=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),i=n.length-r.length;i&&(e.style.animation=r.join(", "),x-=i,x||y((()=>{x||(O.forEach((e=>{const t=e.__svelte_stylesheet;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.__svelte_rules={}})),O.clear())})))}function M(e){P=e}function U(e){(function(){if(!P)throw new Error("Function called outside component initialization");return P})().$$.on_mount.push(e)}const F=[],V=[],j=[],q=[],B=Promise.resolve();let z=!1;function H(){z||(z=!0,B.then(Q))}function K(e){j.push(e)}function G(e){q.push(e)}let W=!1;const J=new Set;function Q(){if(!W){W=!0;do{for(let e=0;e<F.length;e+=1){const t=F[e];M(t),X(t.$$)}for(M(null),F.length=0;V.length;)V.pop()();for(let e=0;e<j.length;e+=1){const t=j[e];J.has(t)||(J.add(t),t())}j.length=0}while(F.length);for(;q.length;)q.pop()();z=!1,W=!1,J.clear()}}function X(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(K)}}let Y;function Z(e,t,n){e.dispatchEvent(function(e,t,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,!1,t),r}(`${t?"intro":"outro"}${n}`))}const ee=new Set;let te;function ne(){te={r:0,c:[],p:te}}function re(){te.r||i(te.c),te=te.p}function ie(e,t){e&&e.i&&(ee.delete(e),e.i(t))}function se(e,t,n,r){if(e&&e.o){if(ee.has(e))return;ee.add(e),te.c.push((()=>{ee.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}const oe={duration:0};function ae(n,r,i){let o,a,c=r(n,i),l=!1,u=0;function h(){o&&L(n,o)}function d(){const{delay:r=0,duration:i=300,easing:s=t,tick:d=e,css:f}=c||oe;f&&(o=function(e,t,n,r,i,s,o,a=0){const c=16.666/r;let l="{\n";for(let e=0;e<=1;e+=c){const r=t+(n-t)*s(e);l+=100*e+`%{${o(r,1-r)}}\n`}const u=l+`100% {${o(n,1-n)}}\n}`,h=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(u)}_${a}`,d=I(e);O.add(d);const f=d.__svelte_stylesheet||(d.__svelte_stylesheet=T(e).sheet),p=d.__svelte_rules||(d.__svelte_rules={});p[h]||(p[h]=!0,f.insertRule(`@keyframes ${h} ${u}`,f.cssRules.length));const m=e.style.animation||"";return e.style.animation=`${m?`${m}, `:""}${h} ${r}ms linear ${i}ms 1 both`,x+=1,h}(n,0,1,i,r,s,f,u++)),d(0,1);const p=g()+r,m=p+i;a&&a.abort(),l=!0,K((()=>Z(n,!0,"start"))),a=function(e){let t;return 0===v.size&&y(w),{promise:new Promise((n=>{v.add(t={c:e,f:n})})),abort(){v.delete(t)}}}((e=>{if(l){if(e>=m)return d(1,0),Z(n,!0,"end"),h(),l=!1;if(e>=p){const t=s((e-p)/i);d(t,1-t)}}return l}))}let f=!1;return{start(){f||(f=!0,L(n),s(c)?(c=c(),(Y||(Y=Promise.resolve(),Y.then((()=>{Y=null}))),Y).then(d)):d())},invalidate(){f=!1},end(){l&&(h(),l=!1)}}}function ce(e,t,n){const r=e.$$.props[t];void 0!==r&&(e.$$.bound[r]=n,n(e.$$.ctx[r]))}function le(e){e&&e.c()}function ue(e,t,r,o){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=e.$$;a&&a.m(t,r),o||K((()=>{const t=c.map(n).filter(s);l?l.push(...t):i(t),e.$$.on_mount=[]})),u.forEach(K)}function he(e,t){const n=e.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function de(t,n,s,o,a,c,l,u=[-1]){const h=P;M(t);const d=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(h?h.$$.context:[])),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||h.$$.root};l&&l(d.root);let f=!1;if(d.ctx=s?s(t,n.props||{},((e,n,...r)=>{const i=r.length?r[0]:n;return d.ctx&&a(d.ctx[e],d.ctx[e]=i)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](i),f&&function(e,t){-1===e.$$.dirty[0]&&(F.push(e),H(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(t,e)),n})):[],d.update(),f=!0,i(d.before_update),d.fragment=!!o&&o(d.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);d.fragment&&d.fragment.l(e),e.forEach(_)}else d.fragment&&d.fragment.c();n.intro&&ie(t.$$.fragment),ue(t,n.target,n.anchor,n.customElement),Q()}M(h)}class fe{$destroy(){he(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const pe=[];function me(t,n=e){let r;const i=new Set;function s(e){if(o(t,e)&&(t=e,r)){const e=!pe.length;for(const e of i)e[1](),pe.push(e,t);if(e){for(let e=0;e<pe.length;e+=2)pe[e][0](pe[e+1]);pe.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(o,a=e){const c=[o,a];return i.add(c),1===i.size&&(r=n(s)||e),o(t),()=>{i.delete(c),0===i.size&&(r(),r=null)}}}}const{set:ge,subscribe:ye}=me({}),ve={subscribe:ye,set:ge,remove:()=>{ge({})}},we=(e,t="")=>{const n=new URL(e);function r(){return s(t).reduce(((e,t,n)=>(":"===t[0]&&e.push({value:t.slice(1),index:n}),e)),[])}function i(){return s(n.pathname)}function s(e){return"/"===e||0===e.trim().length?[e]:("/"===e.slice(-1)&&(e=e.slice(0,-1)),"/"===e[0]&&(e=e.slice(1)),e.split("/"))}return Object.freeze({hash:n.hash,host:n.host,hostname:n.hostname,namedParams:function(){const e=i();return r().reduce(((t,n)=>(t[n.value]=e[n.index],t)),{})}(),namedParamsKeys:r().reduce(((e,t)=>(e.push(t.value),e)),[]),namedParamsValues:function(){const e=i();return r().reduce(((t,n)=>(t.push(e[n.index]),t)),[])}(),pathNames:i(),port:n.port,pathname:n.pathname,protocol:n.protocol,search:n.search,queryParams:function(){const e={};return n.searchParams.forEach(((t,n)=>{e[n]=t})),e}(),queryParamsKeys:function(){const e=[];return n.searchParams.forEach(((t,n)=>{e.push(n)})),e}(),queryParamsValues:function(){const e=[];return n.searchParams.forEach((t=>{e.push(t)})),e}()})},be=e=>{let t=!1;return 0===Object.keys(e).length||(e.childRoute&&0===Object.keys(e.childRoute).length?t=!0:e.childRoute&&(t=be(e.childRoute)),t)},Ie=(e,t)=>(t=ke(t)).includes(":")?t.includes(e):t.startsWith(e),Te=(e,t,n)=>{let r=!1;if(n)return{exists:t.lang&&t.lang[n]&&t.lang[n].includes(e),language:n};if(r=Ie(e,t.name),!r&&t.lang&&"object"==typeof t.lang)for(const[i,s]of Object.entries(t.lang))Ie(e,s)&&(r=!0,n=i);return{exists:r,language:n}},Ee=e=>"/"===e||0===e.trim().length?[e]:(e=ke(e,"both")).split("/"),_e=(e="")=>{let t;return"/"===e||0===e.trim().length?e:(t=(e=ke(e,"lead")).split(":")[0],t=ke(t,"trail"),t.toLowerCase())},ke=(e,t="lead")=>("trail"!==t&&"both"!==t||(e=e.replace(/\/$/,"")),"lead"!==t&&"both"!==t||(e=e.replace(/^\//,"")),e),Se=(e,t=null)=>t&&e.lang&&e.lang[t]?e.lang[t]:e.name,Ae=e=>{const t=e||!1;let n="";const r=(e,n)=>{if("undefined"!=typeof window){const r=(e=>{let t=[];if(e.queryParams)for(let[n,r]of Object.entries(e.queryParams))t.push(`${n}=${r}`);const n=e.hash?e.hash:"";return t.length>0?`${e.path}?${t.join("&")}${n}`:e.path+n})(e);n&&window.history.pushState({page:r},"",r),t&&i(r)}},i=e=>{"undefined"!=typeof ga&&(ga("set","page",e),ga("send","pageview"))};return Object.freeze({active:()=>n,isActive:(e,t=!1)=>{"/"!==e[0]&&(e="/"+e);let r=we(`http://fake.com${e}`).pathname,i=we(`http://fake.com${n}`).pathname;return r=ke(r,"trail"),i=ke(i,"trail"),t?i.includes(r):i===r},setActive:(e,t)=>{n=e.path,r(e,t)}})},Ce=(e,t)=>{const n=(e=>{const t=e;return Object.freeze({valid:()=>t&&t.guard&&"function"==typeof t.guard,redirect:()=>!t.guard(),redirectPath:()=>{let e="/";return t.redirect&&t.redirect.length>0&&(e=t.redirect),e}})})(e.onlyIf);return Object.freeze({path:()=>{let r=t;return e.redirectTo&&e.redirectTo.length>0&&(r=e.redirectTo),n.valid()&&n.redirect()&&(r=n.redirectPath()),r}})};function Ne({basePath:e,basePathName:t,pathNames:n,convert:r,currentLanguage:i}){let s,o,a=i;function c(){return Se(o,a)}function l(){return _e(c())}function u(){return _e(s.result)}return Object.freeze({basePathSameAsLocalised:function(){return u()===l()},updatedPath:function(e){return o=e,s=((e,t,n,r,i=!1)=>{if("/"===e||0===e.trim().length)return{result:e,language:null};let s=e,o=n.name,a=r;if(i&&(a=""),o=ke(o),s=ke(s),n.childRoute)return{result:e,language:a};{let e=Te(s,n,a);e.exists&&i&&(s=Se(n,r));let c=o.split(":")[0];return c=ke(c,"trail"),c=c.split("/"),c.shift(),c.forEach((()=>{const o=t[0];if(e=Te(`${s}/${o}`,n,a),!o||!e.exists)return{result:s,language:e.language};s=i?Se(n,r):`${s}/${o}`,t.shift()})),{result:s,language:e.language}}})(t,n,o,a,r),a=r?i:s.language,s},basePathNameWithoutNamedParams:u,localisedPathName:c,localisedRouteWithoutNamedParams:l,namedPath:function(){let t=c();return t&&!t.startsWith("/")&&(t="/"+t),e?`${e}${t}`:t},pathNames:n,routeLanguage:function(){return a},routePath:function(){let t=`${e}/${u()}`;"//"===t&&(t="/"),a&&(n=((e,t)=>{const n=t.split("/");return n.length>1&&n.forEach((function(t,n){t.length>0&&n>0&&e.shift()})),e})(n,l()));const r=((e="")=>0===e.trim().length?[]:Ee(e).reduce(((e,t)=>(":"===t[0]&&e.push(t.slice(1)),e)),[]))(c());return r&&r.length>0&&r.forEach((function(){n.length>0&&(t+=`/${n.shift()}`)})),t}})}function Re({routes:e,currentUrl:t,routerOptions:n,convert:r}){const i=n.defaultLanguage,s=n.prefix?n.prefix.toLowerCase():"",o=function(e,t){if(t&&t.trim().length>0){const n=e.endsWith(t)?t:t+"/",r=e.replace(n,"");return we(r)}return we(e)}(t,s);let a="",c={},l=!1;function u(e,t,n,r,s){let h={};const d=Ne({basePath:t,basePathName:n.shift().toLowerCase(),pathNames:n,convert:s,currentLanguage:r});return l=!1,e.forEach((function(e){if(d.updatedPath(e),function(e,t){const n=e.basePathSameAsLocalised();n&&(l=!0);return n||!l&&(e=>ke(e).startsWith(":"))(t)}(d,e.name)){let t=d.routePath();if(a=Ce(e,a).path(),h.name!==t&&(h=function({route:e,routePath:t,routeLanguage:n,urlParser:r,namedPath:s}){const o=function({routeInfo:e,path:t,routeNamedParams:n,urlParser:r,namedPath:i,language:s}){const o=()=>{const e=we(`https://fake.com${r.pathname}`,i).namedParams;return{...n,...e}};return Object.freeze({get:()=>({name:t,component:e.component,hash:r.hash,layout:e.layout,queryParams:r.queryParams,namedParams:o(),path:t,language:s}),namedParams:o})}({routeInfo:e,urlParser:r,path:t,routeNamedParams:c,namedPath:s,language:n||i});return c=o.namedParams(),o.get()}({route:e,routePath:t,routeLanguage:d.routeLanguage(),urlParser:o,namedPath:d.namedPath()})),e.nestedRoutes&&e.nestedRoutes.length>0&&d.pathNames.length>0)h.childRoute=u(e.nestedRoutes,t,d.pathNames,d.routeLanguage(),s),h.path=h.childRoute.path,h.language=h.childRoute.language;else if(function(e,t){return e.nestedRoutes&&e.nestedRoutes.length>0&&0===t.length}(e,d.pathNames)){const n=u(e.nestedRoutes,t,["index"],d.routeLanguage(),s);n&&Object.keys(n).length>0&&(h.childRoute=n,h.language=h.childRoute.language)}}})),a&&(h.redirectTo=a),h}const h=t=>{const n=e.find((e=>"404"==e.name)),r=t||i||"";return n?{...n,language:r,path:"404"}:{name:"404",component:"",path:"404",redirectTo:"/404.html"}};return Object.freeze({findActiveRoute:function(){let t=u(e,"",o.pathNames,n.lang,r);return t&&Object.keys(t).length&&!be(t)?(t.path=t.path.split("?")[0],s&&(t.path=`/${s}${t.path}`)):"undefined"!=typeof window&&(t=h(n.lang)),t}})}const De="/404.html";let $e,Oe=[],Pe={};const xe=(e,t,n={})=>{Pe={...n},void 0!==t&&""!==t||(t=document.location.href),$e=Ae(Pe.gaPageviews),t=ke(t,"trail"),Oe=e;const r=()=>{let n=!1;return Pe.langConvertTo&&(Pe.lang=Pe.langConvertTo,n=!0),Re({routes:e,currentUrl:t,routerOptions:Pe,convert:n}).findActiveRoute()};return Object.freeze({setActiveRoute:(e=!0)=>{const t=r();return t.redirectTo?((e,t)=>("undefined"!=typeof window&&(e===De?$e.setActive({path:De},t):Le(e)),e))(t.redirectTo,e):($e.setActive(t,e),ve.set(t),t)},findActiveRoute:r})},Le=(e,t=null,n=!0)=>(e=ke(e,"lead"),t&&(Pe.langConvertTo=t),xe(Oe,"http://fake.com/"+e,Pe).setActiveRoute(n));function Me(e){let t,n;return t=new qe({props:{currentRoute:e[0].childRoute,params:e[1]}}),{c(){le(t.$$.fragment)},m(e,r){ue(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.currentRoute=e[0].childRoute),2&n&&(r.params=e[1]),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function Ue(e){let t,n,r;var i=e[0].component;function s(e){return{props:{currentRoute:{...e[0],component:""},params:e[1]}}}return i&&(t=new i(s(e))),{c(){t&&le(t.$$.fragment),n=N()},m(e,i){t&&ue(t,e,i),E(e,n,i),r=!0},p(e,r){const o={};if(1&r&&(o.currentRoute={...e[0],component:""}),2&r&&(o.params=e[1]),i!==(i=e[0].component)){if(t){ne();const e=t;se(e.$$.fragment,1,0,(()=>{he(e,1)})),re()}i?(t=new i(s(e)),le(t.$$.fragment),ie(t.$$.fragment,1),ue(t,n.parentNode,n)):t=null}else i&&t.$set(o)},i(e){r||(t&&ie(t.$$.fragment,e),r=!0)},o(e){t&&se(t.$$.fragment,e),r=!1},d(e){e&&_(n),t&&he(t,e)}}}function Fe(e){let t,n,r;var i=e[0].layout;function s(e){return{props:{currentRoute:{...e[0],layout:""},params:e[1]}}}return i&&(t=new i(s(e))),{c(){t&&le(t.$$.fragment),n=N()},m(e,i){t&&ue(t,e,i),E(e,n,i),r=!0},p(e,r){const o={};if(1&r&&(o.currentRoute={...e[0],layout:""}),2&r&&(o.params=e[1]),i!==(i=e[0].layout)){if(t){ne();const e=t;se(e.$$.fragment,1,0,(()=>{he(e,1)})),re()}i?(t=new i(s(e)),le(t.$$.fragment),ie(t.$$.fragment,1),ue(t,n.parentNode,n)):t=null}else i&&t.$set(o)},i(e){r||(t&&ie(t.$$.fragment,e),r=!0)},o(e){t&&se(t.$$.fragment,e),r=!1},d(e){e&&_(n),t&&he(t,e)}}}function Ve(e){let t,n,r,i;const s=[Fe,Ue,Me],o=[];function a(e,t){return e[0].layout?0:e[0].component?1:e[0].childRoute?2:-1}return~(t=a(e))&&(n=o[t]=s[t](e)),{c(){n&&n.c(),r=N()},m(e,n){~t&&o[t].m(e,n),E(e,r,n),i=!0},p(e,[i]){let c=t;t=a(e),t===c?~t&&o[t].p(e,i):(n&&(ne(),se(o[c],1,1,(()=>{o[c]=null})),re()),~t?(n=o[t],n?n.p(e,i):(n=o[t]=s[t](e),n.c()),ie(n,1),n.m(r.parentNode,r)):n=null)},i(e){i||(ie(n),i=!0)},o(e){se(n),i=!1},d(e){~t&&o[t].d(e),e&&_(r)}}}function je(e,t,n){let{currentRoute:r={}}=t,{params:i={}}=t;return e.$$set=e=>{"currentRoute"in e&&n(0,r=e.currentRoute),"params"in e&&n(1,i=e.params)},[r,i]}"undefined"!=typeof window&&(window.addEventListener("click",(e=>{if("a"!==e.target.localName.toLowerCase())return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;const t=Pe.prefix?`/${Pe.prefix.toLowerCase()}`:"",n=e.target.pathname&&e.target.host===window.location.host,r=!(t.length>1)||e.target.pathname.startsWith(t);if(n&&r){e.preventDefault();const t=e.target.pathname+e.target.search+e.target.search+e.target.hash;"_blank"===e.target.target?window.open(t,"newTab"):Le(t)}})),window.onpopstate=function(e){let t=window.location.pathname+window.location.search+window.location.hash;Le(t,null,!1)});class qe extends fe{constructor(e){super(),de(this,e,je,Ve,o,{currentRoute:0,params:1})}}function Be(e){let t,n;return t=new qe({props:{currentRoute:e[0]}}),{c(){le(t.$$.fragment)},m(e,r){ue(t,e,r),n=!0},p(e,[n]){const r={};1&n&&(r.currentRoute=e[0]),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function ze(e,t,n){let r;c(e,ve,(e=>n(0,r=e)));let{routes:i=[]}=t,{options:s={}}=t;return U((()=>{xe(i,document.location.href,s).setActiveRoute()})),e.$$set=e=>{"routes"in e&&n(1,i=e.routes),"options"in e&&n(2,s=e.options)},[r,i,s]}class He extends fe{constructor(e){super(),de(this,e,ze,Be,o,{routes:1,options:2})}}const Ke=me(0),Ge=me(5);function We(t){let n,r,i,o;return{c(){n=S("button"),r=A(t[0])},m(e,a){E(e,n,a),b(n,r),i||(o=R(n,"click",(function(){s(t[1])&&t[1].apply(this,arguments)})),i=!0)},p(e,[n]){t=e,1&n&&$(r,t[0])},i:e,o:e,d(e){e&&_(n),i=!1,o()}}}function Je(e,t,n){let{text:r}=t,{onClickFn:i=(()=>{})}=t;return e.$$set=e=>{"text"in e&&n(0,r=e.text),"onClickFn"in e&&n(1,i=e.onClickFn)},[r,i]}class Qe extends fe{constructor(e){super(),de(this,e,Je,We,o,{text:0,onClickFn:1})}}function Xe(e){let t,n,r,i,s,o,a,c,l,u=e[0]?`you typed ${e[1]} words per minute`:"you lost :(";return c=new Qe({props:{onClickFn:e[2],text:e[0]?"play again":"try again"}}),{c(){t=S("div"),n=S("div"),r=A(u),i=C(),s=S("br"),o=S("br"),a=C(),le(c.$$.fragment),D(n,"class","game-over-div svelte-1w1t3nx"),D(t,"class","game-over-environment svelte-1w1t3nx")},m(e,u){E(e,t,u),b(t,n),b(n,r),b(t,i),b(t,s),b(t,o),b(t,a),ue(c,t,null),l=!0},p(e,[t]){(!l||3&t)&&u!==(u=e[0]?`you typed ${e[1]} words per minute`:"you lost :(")&&$(r,u);const n={};4&t&&(n.onClickFn=e[2]),1&t&&(n.text=e[0]?"play again":"try again"),c.$set(n)},i(e){l||(ie(c.$$.fragment,e),l=!0)},o(e){se(c.$$.fragment,e),l=!1},d(e){e&&_(t),he(c)}}}function Ye(e,t,n){let{winGame:r}=t,{wpm:i}=t,{tryAgain:s}=t;return e.$$set=e=>{"winGame"in e&&n(0,r=e.winGame),"wpm"in e&&n(1,i=e.wpm),"tryAgain"in e&&n(2,s=e.tryAgain)},[r,i,s]}class Ze extends fe{constructor(e){super(),de(this,e,Ye,Xe,o,{winGame:0,wpm:1,tryAgain:2})}}function et(t){let n,r,o,a,c,l,u,h,d,f,m,g,y,v;return{c(){n=S("div"),r=S("div"),o=A("easy"),c=C(),l=S("div"),u=A("medium"),d=C(),f=S("div"),m=A("hard"),D(r,"class",a=p("mode-div "+("easy"===t[0]?"active-mode":"inactive-mode"))+" svelte-dzq9n6"),D(r,"id","easy"),D(l,"class",h=p("mode-div "+("medium"===t[0]?"active-mode":"inactive-mode"))+" svelte-dzq9n6"),D(l,"id","medium"),D(f,"class",g=p("mode-div "+("hard"===t[0]?"active-mode":"inactive-mode"))+" svelte-dzq9n6"),D(f,"id","hard"),D(n,"class","mode-container svelte-dzq9n6")},m(e,i){E(e,n,i),b(n,r),b(r,o),b(n,c),b(n,l),b(l,u),b(n,d),b(n,f),b(f,m),y||(v=[R(r,"click",(function(){s(t[1])&&t[1].apply(this,arguments)})),R(l,"click",(function(){s(t[1])&&t[1].apply(this,arguments)})),R(f,"click",(function(){s(t[1])&&t[1].apply(this,arguments)}))],y=!0)},p(e,[n]){t=e,1&n&&a!==(a=p("mode-div "+("easy"===t[0]?"active-mode":"inactive-mode"))+" svelte-dzq9n6")&&D(r,"class",a),1&n&&h!==(h=p("mode-div "+("medium"===t[0]?"active-mode":"inactive-mode"))+" svelte-dzq9n6")&&D(l,"class",h),1&n&&g!==(g=p("mode-div "+("hard"===t[0]?"active-mode":"inactive-mode"))+" svelte-dzq9n6")&&D(f,"class",g)},i:e,o:e,d(e){e&&_(n),y=!1,i(v)}}}function tt(e,t,n){let{mode:r}=t,{changeMode:i}=t;return e.$$set=e=>{"mode"in e&&n(0,r=e.mode),"changeMode"in e&&n(1,i=e.changeMode)},[r,i]}class nt extends fe{constructor(e){super(),de(this,e,tt,et,o,{mode:0,changeMode:1})}}var rt=["ability","able","aboard","about","above","accept","accident","according","account","accurate","acres","across","act","action","active","activity","actual","actually","add","addition","additional","adjective","adult","adventure","advice","affect","afraid","after","afternoon","again","against","age","ago","agree","ahead","aid","air","airplane","alike","alive","all","allow","almost","alone","along","aloud","alphabet","already","also","although","am","among","amount","ancient","angle","angry","animal","announced","another","answer","ants","any","anybody","anyone","anything","anyway","anywhere","apart","apartment","appearance","apple","applied","appropriate","are","area","arm","army","around","arrange","arrangement","arrive","arrow","art","article","as","aside","ask","asleep","at","ate","atmosphere","atom","atomic","attached","attack","attempt","attention","audience","author","automobile","available","average","avoid","aware","away","baby","back","bad","badly","bag","balance","ball","balloon","band","bank","bar","bare","bark","barn","base","baseball","basic","basis","basket","bat","battle","be","bean","bear","beat","beautiful","beauty","became","because","become","becoming","bee","been","before","began","beginning","begun","behavior","behind","being","believed","bell","belong","below","belt","bend","beneath","bent","beside","best","bet","better","between","beyond","bicycle","bigger","biggest","bill","birds","birth","birthday","bit","bite","black","blank","blanket","blew","blind","block","blood","blow","blue","board","boat","body","bone","book","border","born","both","bottle","bottom","bound","bow","bowl","box","boy","brain","branch","brass","brave","bread","break","breakfast","breath","breathe","breathing","breeze","brick","bridge","brief","bright","bring","broad","broke","broken","brother","brought","brown","brush","buffalo","build","building","built","buried","burn","burst","bus","bush","business","busy","but","butter","buy","by","cabin","cage","cake","call","calm","came","camera","camp","can","canal","cannot","cap","capital","captain","captured","car","carbon","card","care","careful","carefully","carried","carry","case","cast","castle","cat","catch","cattle","caught","cause","cave","cell","cent","center","central","century","certain","certainly","chain","chair","chamber","chance","change","changing","chapter","character","characteristic","charge","chart","check","cheese","chemical","chest","chicken","chief","child","children","choice","choose","chose","chosen","church","circle","circus","citizen","city","class","classroom","claws","clay","clean","clear","clearly","climate","climb","clock","close","closely","closer","cloth","clothes","clothing","cloud","club","coach","coal","coast","coat","coffee","cold","collect","college","colony","color","column","combination","combine","come","comfortable","coming","command","common","community","company","compare","compass","complete","completely","complex","composed","composition","compound","concerned","condition","congress","connected","consider","consist","consonant","constantly","construction","contain","continent","continued","contrast","control","conversation","cook","cookies","cool","copper","copy","corn","corner","correct","correctly","cost","cotton","could","count","country","couple","courage","course","court","cover","cow","cowboy","crack","cream","create","creature","crew","crop","cross","crowd","cry","cup","curious","current","curve","customs","cut","cutting","daily","damage","dance","danger","dangerous","dark","darkness","date","daughter","dawn","day","dead","deal","dear","death","decide","declared","deep","deeply","deer","definition","degree","depend","depth","describe","desert","design","desk","detail","determine","develop","development","diagram","diameter","did","die","differ","difference","different","difficult","difficulty","dig","dinner","direct","direction","directly","dirt","dirty","disappear","discover","discovery","discuss","discussion","disease","dish","distance","distant","divide","division","do","doctor","does","dog","doing","doll","dollar","done","donkey","door","dot","double","doubt","down","dozen","draw","drawn","dream","dress","drew","dried","drink","drive","driven","driver","driving","drop","dropped","drove","dry","duck","due","dug","dull","during","dust","duty","each","eager","ear","earlier","early","earn","earth","easier","easily","east","easy","eat","eaten","edge","education","effect","effort","egg","eight","either","electric","electricity","element","elephant","eleven","else","empty","end","enemy","energy","engine","engineer","enjoy","enough","enter","entire","entirely","environment","equal","equally","equator","equipment","escape","especially","essential","establish","even","evening","event","eventually","ever","every","everybody","everyone","everything","everywhere","evidence","exact","exactly","examine","example","excellent","except","exchange","excited","excitement","exciting","exclaimed","exercise","exist","expect","experience","experiment","explain","explanation","explore","express","expression","extra","eye","face","facing","fact","factor","factory","failed","fair","fairly","fall","fallen","familiar","family","famous","far","farm","farmer","farther","fast","fastened","faster","fat","father","favorite","fear","feathers","feature","fed","feed","feel","feet","fell","fellow","felt","fence","few","fewer","field","fierce","fifteen","fifth","fifty","fight","fighting","figure","fill","film","final","finally","find","fine","finest","finger","finish","fire","fireplace","firm","first","fish","five","fix","flag","flame","flat","flew","flies","flight","floating","floor","flow","flower","fly","fog","folks","follow","food","foot","football","for","force","foreign","forest","forget","forgot","forgotten","form","former","fort","forth","forty","forward","fought","found","four","fourth","fox","frame","free","freedom","frequently","fresh","friend","friendly","frighten","frog","from","front","frozen","fruit","fuel","full","fully","fun","function","funny","fur","furniture","further","future","gain","game","garage","garden","gas","gasoline","gate","gather","gave","general","generally","gentle","gently","get","getting","giant","gift","girl","give","given","giving","glad","glass","globe","go","goes","gold","golden","gone","good","goose","got","government","grabbed","grade","gradually","grain","grandfather","grandmother","graph","grass","gravity","gray","great","greater","greatest","greatly","green","grew","ground","group","grow","grown","growth","guard","guess","guide","gulf","gun","habit","had","hair","half","halfway","hall","hand","handle","handsome","hang","happen","happened","happily","happy","harbor","hard","harder","hardly","has","hat","have","having","hay","he","headed","heading","health","heard","hearing","heart","heat","heavy","height","held","hello","help","helpful","her","herd","here","herself","hidden","hide","high","higher","highest","highway","hill","him","himself","his","history","hit","hold","hole","hollow","home","honor","hope","horn","horse","hospital","hot","hour","house","how","however","huge","human","hundred","hung","hungry","hunt","hunter","hurried","hurry","hurt","husband","ice","idea","identity","if","ill","image","imagine","immediately","importance","important","impossible","improve","in","inch","include","including","income","increase","indeed","independent","indicate","individual","industrial","industry","influence","information","inside","instance","instant","instead","instrument","interest","interior","into","introduced","invented","involved","iron","is","island","it","its","itself","jack","jar","jet","job","join","joined","journey","joy","judge","jump","jungle","just","keep","kept","key","kids","kill","kind","kitchen","knew","knife","know","knowledge","known","label","labor","lack","lady","laid","lake","lamp","land","language","large","larger","largest","last","late","later","laugh","law","lay","layers","lead","leader","leaf","learn","least","leather","leave","leaving","led","left","leg","length","lesson","let","letter","level","library","lie","life","lift","light","like","likely","limited","line","lion","lips","liquid","list","listen","little","live","living","load","local","locate","location","log","lonely","long","longer","look","loose","lose","loss","lost","lot","loud","love","lovely","low","lower","luck","lucky","lunch","lungs","lying","machine","machinery","mad","made","magic","magnet","mail","main","mainly","major","make","making","man","managed","manner","manufacturing","many","map","mark","market","married","mass","massage","master","material","mathematics","matter","may","maybe","me","meal","mean","means","meant","measure","meat","medicine","meet","melted","member","memory","men","mental","merely","met","metal","method","mice","middle","might","mighty","mile","military","milk","mill","mind","mine","minerals","minute","mirror","missing","mission","mistake","mix","mixture","model","modern","molecular","moment","money","monkey","month","mood","moon","more","morning","most","mostly","mother","motion","motor","mountain","mouse","mouth","move","movement","movie","moving","mud","muscle","music","musical","must","my","myself","mysterious","nails","name","nation","national","native","natural","naturally","nature","near","nearby","nearer","nearest","nearly","necessary","neck","needed","needle","needs","negative","neighbor","neighborhood","nervous","nest","never","new","news","newspaper","next","nice","night","nine","no","nobody","nodded","noise","none","noon","nor","north","nose","not","note","noted","nothing","notice","noun","now","number","numeral","nuts","object","observe","obtain","occasionally","occur","ocean","of","off","offer","office","officer","official","oil","old","older","oldest","on","once","one","only","onto","open","operation","opinion","opportunity","opposite","or","orange","orbit","order","ordinary","organization","organized","origin","original","other","ought","our","ourselves","out","outer","outline","outside","over","own","owner","oxygen","pack","package","page","paid","pain","paint","pair","palace","pale","pan","paper","paragraph","parallel","parent","park","part","particles","particular","particularly","partly","parts","party","pass","passage","past","path","pattern","pay","peace","pen","pencil","people","per","percent","perfect","perfectly","perhaps","period","person","personal","pet","phrase","physical","piano","pick","picture","pictured","pie","piece","pig","pile","pilot","pine","pink","pipe","pitch","place","plain","plan","plane","planet","planned","planning","plant","plastic","plate","plates","play","pleasant","please","pleasure","plenty","plural","plus","pocket","poem","poet","poetry","point","pole","police","policeman","political","pond","pony","pool","poor","popular","population","porch","port","position","positive","possible","possibly","post","pot","potatoes","pound","pour","powder","power","powerful","practical","practice","prepare","present","president","press","pressure","pretty","prevent","previous","price","pride","primitive","principal","principle","printed","private","prize","probably","problem","process","produce","product","production","program","progress","promised","proper","properly","property","protection","proud","prove","provide","public","pull","pupil","pure","purple","purpose","push","put","putting","quarter","queen","question","quick","quickly","quiet","quietly","quite","rabbit","race","radio","railroad","rain","raise","ran","ranch","range","rapidly","rate","rather","raw","rays","reach","read","reader","ready","real","realize","rear","reason","recall","receive","recent","recently","recognize","record","red","refer","refused","region","regular","related","relationship","religious","remain","remarkable","remember","remove","repeat","replace","replied","report","represent","require","research","respect","rest","result","return","review","rhyme","rhythm","rice","rich","ride","riding","right","ring","rise","rising","river","road","roar","rock","rocket","rocky","rod","roll","roof","room","root","rope","rose","rough","round","route","row","rubbed","rubber","rule","ruler","run","running","rush","sad","saddle","safe","safety","said","sail","sale","salmon","salt","same","sand","sang","sat","satellites","satisfied","save","saved","saw","say","scale","scared","scene","school","science","scientific","scientist","score","screen","sea","search","season","seat","second","secret","section","see","seed","seeing","seems","seen","seldom","select","selection","sell","send","sense","sent","sentence","separate","series","serious","serve","service","sets","setting","settle","settlers","seven","several","shade","shadow","shake","shaking","shall","shallow","shape","share","sharp","she","sheep","sheet","shelf","shells","shelter","shine","shinning","ship","shirt","shoe","shoot","shop","shore","short","shorter","shot","should","shoulder","shout","show","shown","shut","sick","sides","sight","sign","signal","silence","silent","silk","silly","silver","similar","simple","simplest","simply","since","sing","single","sink","sister","sit","sitting","situation","six","size","skill","skin","sky","slabs","slave","sleep","slept","slide","slight","slightly","slip","slipped","slope","slow","slowly","small","smaller","smallest","smell","smile","smoke","smooth","snake","snow","so","soap","social","society","soft","softly","soil","solar","sold","soldier","solid","solution","solve","some","somebody","somehow","someone","something","sometime","somewhere","son","song","soon","sort","sound","source","south","southern","space","speak","special","species","specific","speech","speed","spell","spend","spent","spider","spin","spirit","spite","split","spoken","sport","spread","spring","square","stage","stairs","stand","standard","star","stared","start","state","statement","station","stay","steady","steam","steel","steep","stems","step","stepped","stick","stiff","still","stock","stomach","stone","stood","stop","stopped","store","storm","story","stove","straight","strange","stranger","straw","stream","street","strength","stretch","strike","string","strip","strong","stronger","struck","structure","struggle","stuck","student","studied","studying","subject","substance","success","successful","such","sudden","suddenly","sugar","suggest","suit","sum","summer","sun","sunlight","supper","supply","support","suppose","sure","surface","surprise","surrounded","swam","sweet","swept","swim","swimming","swing","swung","syllable","symbol","system","table","tail","take","taken","tales","talk","tall","tank","tape","task","taste","taught","tax","tea","teach","teacher","team","tears","teeth","telephone","television","tell","temperature","ten","tent","term","terrible","test","than","thank","that","thee","them","themselves","then","theory","there","therefore","these","they","thick","thin","thing","think","third","thirty","this","those","thou","though","thought","thousand","thread","three","threw","throat","through","throughout","throw","thrown","thumb","thus","thy","tide","tie","tight","tightly","till","time","tin","tiny","tip","tired","title","to","tobacco","today","together","told","tomorrow","tone","tongue","tonight","too","took","tool","top","topic","torn","total","touch","toward","tower","town","toy","trace","track","trade","traffic","trail","train","transportation","trap","travel","treated","tree","triangle","tribe","trick","tried","trip","troops","tropical","trouble","truck","trunk","truth","try","tube","tune","turn","twelve","twenty","twice","two","type","typical","uncle","under","underline","understanding","unhappy","union","unit","universe","unknown","unless","until","unusual","up","upon","upper","upward","us","use","useful","using","usual","usually","valley","valuable","value","vapor","variety","various","vast","vegetable","verb","vertical","very","vessels","victory","view","village","visit","visitor","voice","volume","vote","vowel","voyage","wagon","wait","walk","wall","want","war","warm","warn","was","wash","waste","watch","water","wave","way","we","weak","wealth","wear","weather","week","weigh","weight","welcome","well","went","were","west","western","wet","whale","what","whatever","wheat","wheel","when","whenever","where","wherever","whether","which","while","whispered","whistle","white","who","whole","whom","whose","why","wide","widely","wife","wild","will","willing","win","wind","window","wing","winter","wire","wise","wish","with","within","without","wolf","women","won","wonder","wonderful","wood","wooden","wool","word","wore","work","worker","world","worried","worry","worse","worth","would","wrapped","write","writer","writing","written","wrong","wrote","yard","year","yellow","yes","yesterday","yet","you","young","younger","your","yourself","youth","zero","zebra","zipper","zoo","zulu"];function it(e){function t(){return e&&e.maxLength>1?function(){let t,r=!1;for(;!r;)t=n(),t.length<=e.maxLength&&(r=!0);return t}():n()}function n(){return rt[r(rt.length)]}function r(e){return Math.floor(Math.random()*e)}if(void 0===e)return t();"number"==typeof e&&(e={exactly:e}),e.exactly&&(e.min=e.exactly,e.max=e.exactly),"number"!=typeof e.wordsPerString&&(e.wordsPerString=1),"function"!=typeof e.formatter&&(e.formatter=e=>e),"string"!=typeof e.separator&&(e.separator=" ");for(var i=e.min+r(e.max+1-e.min),s=[],o="",a=0,c=0;c<i*e.wordsPerString;c++)a===e.wordsPerString-1?o+=e.formatter(t(),a):o+=e.formatter(t(),a)+e.separator,a++,(c+1)%e.wordsPerString==0&&(s.push(o),o="",a=0);return e.join&&(s=s.join(e.join)),s}var st=it;it.wordList=rt;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const ot={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=i>>2,u=(3&i)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t}(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw Error();const c=i<<2|s>>4;if(r.push(c),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class at{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ct(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function lt(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function ut(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function ht(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function dt(){const e=ct();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}class ft extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pt.prototype.create)}}class pt{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(mt,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new ft(r,o,n)}}const mt=/\{\$([^}]+)}/g;function gt(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(yt(n)&&yt(s)){if(!gt(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function yt(e){return null!==e&&"object"==typeof e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function vt(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function wt(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function bt(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}class It{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Tt),void 0===r.error&&(r.error=Tt),void 0===r.complete&&(r.complete=Tt);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Tt(){}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Et(e,t=1e3,n=2){const r=t*Math.pow(n,e),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+i)}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function _t(e){return e&&e._delegate?e._delegate:e}class kt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const St="[DEFAULT]";
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class At{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new at;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e))try{this.getOrInitializeService({instanceIdentifier:St})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===St?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:St:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Ct{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new At(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var Nt;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(Nt||(Nt={}));const Rt={debug:Nt.DEBUG,verbose:Nt.VERBOSE,info:Nt.INFO,warn:Nt.WARN,error:Nt.ERROR,silent:Nt.SILENT},Dt=Nt.INFO,$t={[Nt.DEBUG]:"log",[Nt.VERBOSE]:"log",[Nt.INFO]:"info",[Nt.WARN]:"warn",[Nt.ERROR]:"error"},Ot=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=$t[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class Pt{constructor(e){this.name=e,this._logLevel=Dt,this._logHandler=Ot,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Nt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Rt[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Nt.DEBUG,...e),this._logHandler(this,Nt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Nt.VERBOSE,...e),this._logHandler(this,Nt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Nt.INFO,...e),this._logHandler(this,Nt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Nt.WARN,...e),this._logHandler(this,Nt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Nt.ERROR,...e),this._logHandler(this,Nt.ERROR,...e)}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class xt{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Lt="@firebase/app",Mt="0.7.11",Ut=new Pt("@firebase/app"),Ft="[DEFAULT]",Vt={[Lt]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},jt=new Map,qt=new Map;function Bt(e,t){try{e.container.addComponent(t)}catch(n){Ut.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function zt(e){const t=e.name;if(qt.has(t))return Ut.debug(`There were multiple attempts to register component ${t}.`),!1;qt.set(t,e);for(const t of jt.values())Bt(t,e);return!0}function Ht(e,t){return e.container.getProvider(t)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Kt=new pt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Gt{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new kt("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kt.create("app-deleted",{appName:this._name})}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Wt="9.6.1";function Jt(e="[DEFAULT]"){const t=jt.get(e);if(!t)throw Kt.create("no-app",{appName:e});return t}function Qt(e,t,n){var r;let i=null!==(r=Vt[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ut.warn(e.join(" "))}zt(new kt(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var Xt;Xt="",zt(new kt("platform-logger",(e=>new xt(e)),"PRIVATE")),Qt(Lt,Mt,Xt),Qt(Lt,Mt,"esm2017"),Qt("fire-js","");
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
Qt("firebase","9.6.1","app");"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var Yt=function(e){var t={exports:{}};return e(t,t.exports),t.exports}((function(e,t){!function(e){function t(e){return Array.prototype.slice.call(e)}function n(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function r(e,t,r){var i,s=new Promise((function(s,o){n(i=e[t].apply(e,r)).then(s,o)}));return s.request=i,s}function i(e,t,n){var i=r(e,t,n);return i.then((function(e){if(e)return new u(e,i.request)}))}function s(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function o(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return r(this[t],i,arguments)})}))}function a(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return this[t][r].apply(this[t],arguments)})}))}function c(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return i(this[t],r,arguments)})}))}function l(e){this._index=e}function u(e,t){this._cursor=e,this._request=t}function h(e){this._store=e}function d(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function f(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new d(n)}function p(e){this._db=e}function m(e,t,n){var i=r(indexedDB,"open",[e,t]),s=i.request;return s&&(s.onupgradeneeded=function(e){n&&n(new f(s.result,e.oldVersion,s.transaction))}),i.then((function(e){return new p(e)}))}function g(e){return r(indexedDB,"deleteDatabase",[e])}s(l,"_index",["name","keyPath","multiEntry","unique"]),o(l,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),c(l,"_index",IDBIndex,["openCursor","openKeyCursor"]),s(u,"_cursor",["direction","key","primaryKey","value"]),o(u,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(u.prototype[e]=function(){var t=this,r=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,r),n(t._request).then((function(e){if(e)return new u(e,t._request)}))}))})})),h.prototype.createIndex=function(){return new l(this._store.createIndex.apply(this._store,arguments))},h.prototype.index=function(){return new l(this._store.index.apply(this._store,arguments))},s(h,"_store",["name","keyPath","indexNames","autoIncrement"]),o(h,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),c(h,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),a(h,"_store",IDBObjectStore,["deleteIndex"]),d.prototype.objectStore=function(){return new h(this._tx.objectStore.apply(this._tx,arguments))},s(d,"_tx",["objectStoreNames","mode"]),a(d,"_tx",IDBTransaction,["abort"]),f.prototype.createObjectStore=function(){return new h(this._db.createObjectStore.apply(this._db,arguments))},s(f,"_db",["name","version","objectStoreNames"]),a(f,"_db",IDBDatabase,["deleteObjectStore","close"]),p.prototype.transaction=function(){return new d(this._db.transaction.apply(this._db,arguments))},s(p,"_db",["name","version","objectStoreNames"]),a(p,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[h,l].forEach((function(n){e in n.prototype&&(n.prototype[e.replace("open","iterate")]=function(){var n=t(arguments),r=n[n.length-1],i=this._store||this._index,s=i[e].apply(i,n.slice(0,-1));s.onsuccess=function(){r(s.result)}})}))})),[l,h].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,r=[];return new Promise((function(i){n.iterateCursor(e,(function(e){e?(r.push(e.value),void 0===t||r.length!=t?e.continue():i(r)):i(r)}))}))})})),e.openDb=m,e.deleteDb=g,Object.defineProperty(e,"__esModule",{value:!0})}(t)}));const Zt="@firebase/installations",en="0.5.4",tn=1e4,nn="w:0.5.4",rn="FIS_v2",sn=36e5,on=new pt("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function an(e){return e instanceof ft&&e.code.includes("request-failed")}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function cn({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function ln(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function un(e,t){const n=(await t.json()).error;return on.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function hn({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function dn(e,{refreshToken:t}){const n=hn(e);return n.append("Authorization",function(e){return`FIS_v2 ${e}`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)),n}async function fn(e){const t=await e();return t.status>=500&&t.status<600?e():t}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function pn(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const mn=/^[cdef][\w-]{21}$/;function gn(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e);return mn.test(t)?t:""}catch(e){return""}}function yn(e){return`${e.appName}!${e.appId}`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const vn=new Map;function wn(e,t){const n=yn(e);bn(n,t),function(e,t){const n=function(){!In&&"BroadcastChannel"in self&&(In=new BroadcastChannel("[Firebase] FID Change"),In.onmessage=e=>{bn(e.data.key,e.data.fid)});return In}();n&&n.postMessage({key:e,fid:t});0===vn.size&&In&&(In.close(),In=null)}(n,t)}function bn(e,t){const n=vn.get(e);if(n)for(const e of n)e(t)}let In=null;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Tn="firebase-installations-store";let En=null;function _n(){return En||(En=Yt.openDb("firebase-installations-database",1,(e=>{if(0===e.oldVersion)e.createObjectStore(Tn)}))),En}async function kn(e,t){const n=yn(e),r=(await _n()).transaction(Tn,"readwrite"),i=r.objectStore(Tn),s=await i.get(n);return await i.put(t,n),await r.complete,s&&s.fid===t.fid||wn(e,t.fid),t}async function Sn(e){const t=yn(e),n=(await _n()).transaction(Tn,"readwrite");await n.objectStore(Tn).delete(t),await n.complete}async function An(e,t){const n=yn(e),r=(await _n()).transaction(Tn,"readwrite"),i=r.objectStore(Tn),s=await i.get(n),o=t(s);return void 0===o?await i.delete(n):await i.put(o,n),await r.complete,!o||s&&s.fid===o.fid||wn(e,o.fid),o}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function Cn(e){let t;const n=await An(e,(n=>{const r=function(e){return Dn(e||{fid:gn(),registrationStatus:0})}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(on.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function(e,{fid:t}){const n=cn(e),r=hn(e),i={fid:t,authVersion:rn,appId:e.appId,sdkVersion:nn},s={method:"POST",headers:r,body:JSON.stringify(i)},o=await fn((()=>fetch(n,s)));if(o.ok){const e=await o.json();return{fid:e.fid||t,registrationStatus:2,refreshToken:e.refreshToken,authToken:ln(e.authToken)}}throw await un("Create Installation",o)}(e,t);return kn(e,n)}catch(n){throw an(n)&&409===n.customData.serverCode?await Sn(e):await kn(e,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Nn(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function Nn(e){let t=await Rn(e);for(;1===t.registrationStatus;)await pn(100),t=await Rn(e);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await Cn(e);return n||t}return t}function Rn(e){return An(e,(e=>{if(!e)throw on.create("installation-not-found");return Dn(e)}))}function Dn(e){return 1===(t=e).registrationStatus&&t.registrationTime+tn<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}async function $n({appConfig:e,platformLoggerProvider:t},n){const r=function(e,{fid:t}){return`${cn(e)}/${t}/authTokens:generate`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e,n),i=dn(e,n),s=t.getImmediate({optional:!0});s&&i.append("x-firebase-client",s.getPlatformInfoString());const o={installation:{sdkVersion:nn}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await fn((()=>fetch(r,a)));if(c.ok){return ln(await c.json())}throw await un("Generate Auth Token",c)}async function On(e,t=!1){let n;const r=await An(e.appConfig,(r=>{if(!xn(r))throw on.create("not-registered");const i=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+sn}(e)}(i))return r;if(1===i.requestStatus)return n=async function(e,t){let n=await Pn(e.appConfig);for(;1===n.authToken.requestStatus;)await pn(100),n=await Pn(e.appConfig);const r=n.authToken;return 0===r.requestStatus?On(e,t):r}(e,t),r;{if(!navigator.onLine)throw on.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=async function(e,t){try{const n=await $n(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await kn(e.appConfig,r),n}catch(n){if(!an(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await kn(e.appConfig,n)}else await Sn(e.appConfig);throw n}}(e,t),t}}));return n?await n:r.authToken}function Pn(e){return An(e,(e=>{if(!xn(e))throw on.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+tn<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}))}function xn(e){return void 0!==e&&2===e.registrationStatus}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function Ln(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await Cn(e);t&&await t}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(n.appConfig);return(await On(n,t)).token}function Mn(e){return on.create("missing-app-config-values",{valueName:e})}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Un="installations",Fn=e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw Mn("App Configuration");if(!e.name)throw Mn("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Mn(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,platformLoggerProvider:Ht(t,"platform-logger"),_delete:()=>Promise.resolve()}},Vn=e=>{const t=Ht(e.getProvider("app").getImmediate(),Un).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:r}=await Cn(t.appConfig);return r?r.catch(console.error):On(t).catch(console.error),n.fid}(t),getToken:e=>Ln(t,e)}};zt(new kt(Un,Fn,"PUBLIC")),zt(new kt("installations-internal",Vn,"PRIVATE")),Qt(Zt,en),Qt(Zt,en,"esm2017");
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const jn="analytics",qn="https://www.googletagmanager.com/gtag/js",Bn=new Pt("@firebase/analytics");
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function zn(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function Hn(e,t,n,r){return async function(i,s,o){try{"event"===i?await async function(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let e=i.send_to;Array.isArray(e)||(e=[e]);const r=await zn(n);for(const n of e){const e=r.find((e=>e.measurementId===n)),i=e&&t[e.appId];if(!i){s=[];break}s.push(i)}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(e){Bn.error(e)}}(e,t,n,s,o):"config"===i?await async function(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const e=(await zn(n)).find((e=>e.measurementId===i));e&&await t[e.appId]}}catch(e){Bn.error(e)}e("config",i,s)}(e,t,n,r,s,o):e("set",s)}catch(e){Bn.error(e)}}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Kn=new pt("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const Gn=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function Wn(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Jn(e,t=Gn,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw Kn.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Kn.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Xn;return setTimeout((async()=>{a.abort()}),void 0!==n?n:6e4),Qn({appId:r,apiKey:i,measurementId:s},o,a,t)}async function Qn(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Gn){const{appId:s,measurementId:o}=e;try{await function(e,t){return new Promise(((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener((()=>{clearTimeout(s),r(Kn.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(r,t)}catch(e){if(o)return Bn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${e.message}]`),{appId:s,measurementId:o};throw e}try{const t=await async function(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:Wn(r)},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(s,i);if(200!==o.status&&304!==o.status){let e="";try{const n=await o.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw Kn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:e})}return o.json()}(e);return i.deleteThrottleMetadata(s),t}catch(t){if(!function(e){if(!(e instanceof ft&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(t)){if(i.deleteThrottleMetadata(s),o)return Bn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${t.message}]`),{appId:s,measurementId:o};throw t}const a=503===Number(t.customData.httpStatus)?Et(n,i.intervalMillis,30):Et(n,i.intervalMillis),c={throttleEndTimeMillis:Date.now()+a,backoffCount:n+1};return i.setThrottleMetadata(s,c),Bn.debug(`Calling attemptFetch again in ${a} millis`),Qn(e,c,r,i)}}class Xn{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function Yn(){if("object"!=typeof indexedDB)return Bn.warn(Kn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}catch(e){return Bn.warn(Kn.create("indexeddb-unavailable",{errorInfo:e}).message),!1}return!0}async function Zn(e,t,n,r,i,s,o){var a;const c=Jn(e);c.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&Bn.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>Bn.error(e))),t.push(c);const l=Yn().then((e=>e?r.getId():void 0)),[u,h]=await Promise.all([c,l]);(function(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(qn))return t;return null})()||function(e,t){const n=document.createElement("script");n.src=`${qn}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}(s,u.measurementId),i("js",new Date);const d=null!==(a=null==o?void 0:o.config)&&void 0!==a?a:{};return d.origin="firebase",d.update=!0,null!=h&&(d.firebase_id=h),i("config",u.measurementId,d),u.measurementId}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class er{constructor(e){this.app=e}_delete(){return delete tr[this.app.options.appId],Promise.resolve()}}let tr={},nr=[];const rr={};let ir,sr,or="dataLayer",ar=!1;function cr(){const e=[];if(ut()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=Kn.create("invalid-analytics-context",{errorInfo:t});Bn.warn(n.message)}}function lr(e,t,n){cr();const r=e.options.appId;if(!r)throw Kn.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw Kn.create("no-api-key");Bn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=tr[r])throw Kn.create("already-exists",{id:r});if(!ar){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(or);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,r,i){let s=function(...e){window[r].push(arguments)};return window[i]&&"function"==typeof window[i]&&(s=window[i]),window[i]=Hn(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}(tr,nr,rr,or,"gtag");sr=e,ir=t,ar=!0}tr[r]=Zn(e,nr,rr,t,ir,or,n);return new er(e)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ur(e=Jt()){const t=Ht(e=_t(e),jn);return t.isInitialized()?t.getImmediate():function(e,t={}){const n=Ht(e,jn);if(n.isInitialized()){const e=n.getImmediate();if(gt(t,n.getOptions()))return e;throw Kn.create("already-initialized")}return n.initialize({options:t})}(e)}function hr(e,t,n,r){e=_t(e),async function(e,t,n,r,i){if(i&&i.global)e("event",n,r);else{const i=await t;e("event",n,Object.assign(Object.assign({},r),{send_to:i}))}}(sr,tr[e.app.options.appId],t,n,r).catch((e=>Bn.error(e)))}const dr="@firebase/analytics",fr="0.7.4";zt(new kt(jn,((e,{options:t})=>lr(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),zt(new kt("analytics-internal",(function(e){try{const t=e.getProvider(jn).getImmediate();return{logEvent:(e,n,r)=>hr(t,e,n,r)}}catch(e){throw Kn.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),Qt(dr,fr),Qt(dr,fr,"esm2017");var pr,mr="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},gr=gr||{},yr=mr||self;function vr(){}function wr(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function br(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var Ir="closure_uid_"+(1e9*Math.random()>>>0),Tr=0;function Er(e,t,n){return e.call.apply(e.bind,arguments)}function _r(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function kr(e,t,n){return(kr=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Er:_r).apply(null,arguments)}function Sr(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function Ar(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function Cr(){this.s=this.s,this.o=this.o}var Nr={};Cr.prototype.s=!1,Cr.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var e=function(e){return Object.prototype.hasOwnProperty.call(e,Ir)&&e[Ir]||(e[Ir]=++Tr)}(this);delete Nr[e]}},Cr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Rr=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},Dr=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,i="string"==typeof e?e.split(""):e;for(let s=0;s<r;s++)s in i&&t.call(n,i[s],s,e)};function $r(e){return Array.prototype.concat.apply([],arguments)}function Or(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Pr(e){return/^[\s\xa0]*$/.test(e)}var xr,Lr=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Mr(e,t){return-1!=e.indexOf(t)}function Ur(e,t){return e<t?-1:e>t?1:0}e:{var Fr=yr.navigator;if(Fr){var Vr=Fr.userAgent;if(Vr){xr=Vr;break e}}xr=""}function jr(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function qr(e){const t={};for(const n in e)t[n]=e[n];return t}var Br="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function zr(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<Br.length;t++)n=Br[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Hr(e){return Hr[" "](e),e}Hr[" "]=vr;var Kr,Gr,Wr=Mr(xr,"Opera"),Jr=Mr(xr,"Trident")||Mr(xr,"MSIE"),Qr=Mr(xr,"Edge"),Xr=Qr||Jr,Yr=Mr(xr,"Gecko")&&!(Mr(xr.toLowerCase(),"webkit")&&!Mr(xr,"Edge"))&&!(Mr(xr,"Trident")||Mr(xr,"MSIE"))&&!Mr(xr,"Edge"),Zr=Mr(xr.toLowerCase(),"webkit")&&!Mr(xr,"Edge");function ei(){var e=yr.document;return e?e.documentMode:void 0}e:{var ti="",ni=(Gr=xr,Yr?/rv:([^\);]+)(\)|;)/.exec(Gr):Qr?/Edge\/([\d\.]+)/.exec(Gr):Jr?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Gr):Zr?/WebKit\/(\S+)/.exec(Gr):Wr?/(?:Version)[ \/]?(\S+)/.exec(Gr):void 0);if(ni&&(ti=ni?ni[1]:""),Jr){var ri=ei();if(null!=ri&&ri>parseFloat(ti)){Kr=String(ri);break e}}Kr=ti}var ii,si={};function oi(){return function(e){var t=si;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=Lr(String(Kr)).split("."),n=Lr("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=Ur(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||Ur(0==i[2].length,0==s[2].length)||Ur(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(yr.document&&Jr){var ai=ei();ii=ai||(parseInt(Kr,10)||void 0)}else ii=void 0;var ci=ii,li=function(){if(!yr.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{yr.addEventListener("test",vr,t),yr.removeEventListener("test",vr,t)}catch(e){}return e}();function ui(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function hi(e,t){if(ui.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Yr){e:{try{Hr(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:di[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&hi.Z.h.call(this)}}ui.prototype.h=function(){this.defaultPrevented=!0},Ar(hi,ui);var di={2:"touch",3:"pen",4:"mouse"};hi.prototype.h=function(){hi.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var fi="closure_listenable_"+(1e6*Math.random()|0),pi=0;function mi(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++pi,this.ca=this.fa=!1}function gi(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function yi(e){this.src=e,this.g={},this.h=0}function vi(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=Rr(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(gi(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function wi(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==r)return i}return-1}yi.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=wi(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):((t=new mi(t,this.src,s,!!r,i)).fa=n,e.push(t)),t};var bi="closure_lm_"+(1e6*Math.random()|0),Ii={};function Ti(e,t,n,r,i){if(r&&r.once)return _i(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Ti(e,t[s],n,r,i);return null}return n=Di(n),e&&e[fi]?e.N(t,n,br(r)?!!r.capture:!!r,i):Ei(e,t,n,!1,r,i)}function Ei(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=br(i)?!!i.capture:!!i,a=Ni(e);if(a||(e[bi]=a=new yi(e)),(n=a.add(t,n,r,o,s)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}var t=Ci;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)li||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Ai(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function _i(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)_i(e,t[s],n,r,i);return null}return n=Di(n),e&&e[fi]?e.O(t,n,br(r)?!!r.capture:!!r,i):Ei(e,t,n,!0,r,i)}function ki(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)ki(e,t[s],n,r,i);else r=br(r)?!!r.capture:!!r,n=Di(n),e&&e[fi]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=wi(s=e.g[t],n,r,i))&&(gi(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Ni(e))&&(t=e.g[t.toString()],e=-1,t&&(e=wi(t,n,r,i)),(n=-1<e?t[e]:null)&&Si(n))}function Si(e){if("number"!=typeof e&&e&&!e.ca){var t=e.src;if(t&&t[fi])vi(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Ai(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ni(t))?(vi(n,e),0==n.h&&(n.src=null,t[bi]=null)):gi(e)}}}function Ai(e){return e in Ii?Ii[e]:Ii[e]="on"+e}function Ci(e,t){if(e.ca)e=!0;else{t=new hi(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&Si(e),e=n.call(r,t)}return e}function Ni(e){return(e=e[bi])instanceof yi?e:null}var Ri="__closure_events_fn_"+(1e9*Math.random()>>>0);function Di(e){return"function"==typeof e?e:(e[Ri]||(e[Ri]=function(t){return e.handleEvent(t)}),e[Ri])}function $i(){Cr.call(this),this.i=new yi(this),this.P=this,this.I=null}function Oi(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new ui(t,e);else if(t instanceof ui)t.target=t.target||e;else{var i=t;zr(t=new ui(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Pi(o,r,!0,t)&&i}if(i=Pi(o=t.g=e,r,!0,t)&&i,i=Pi(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=Pi(o=t.g=n[s],r,!1,t)&&i}function Pi(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&vi(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}Ar($i,Cr),$i.prototype[fi]=!0,$i.prototype.removeEventListener=function(e,t,n,r){ki(this,e,t,n,r)},$i.prototype.M=function(){if($i.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)gi(n[r]);delete t.g[e],t.h--}}this.I=null},$i.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},$i.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var xi=yr.JSON.stringify;function Li(){var e=Bi;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Mi,Ui=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Fi),(e=>e.reset()));class Fi{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Vi(e){yr.setTimeout((()=>{throw e}),0)}function ji(e,t){Mi||function(){var e=yr.Promise.resolve(void 0);Mi=function(){e.then(zi)}}(),qi||(Mi(),qi=!0),Bi.add(e,t)}var qi=!1,Bi=new class{constructor(){this.h=this.g=null}add(e,t){const n=Ui.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function zi(){for(var e;e=Li();){try{e.h.call(e.g)}catch(e){Vi(e)}var t=Ui;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}qi=!1}function Hi(e,t){$i.call(this),this.h=e||1,this.g=t||yr,this.j=kr(this.kb,this),this.l=Date.now()}function Ki(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function Gi(e,t,n){if("function"==typeof e)n&&(e=kr(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=kr(e.handleEvent,e)}return 2147483647<Number(t)?-1:yr.setTimeout(e,t||0)}function Wi(e){e.g=Gi((()=>{e.g=null,e.i&&(e.i=!1,Wi(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}Ar(Hi,$i),(pr=Hi.prototype).da=!1,pr.S=null,pr.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Oi(this,"tick"),this.da&&(Ki(this),this.start()))}},pr.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},pr.M=function(){Hi.Z.M.call(this),Ki(this),delete this.g};class Ji extends Cr{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Wi(this)}M(){super.M(),this.g&&(yr.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qi(e){Cr.call(this),this.h=e,this.g={}}Ar(Qi,Cr);var Xi=[];function Yi(e,t,n,r){Array.isArray(n)||(n&&(Xi[0]=n.toString()),n=Xi);for(var i=0;i<n.length;i++){var s=Ti(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Zi(e){jr(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Si(e)}),e),e.g={}}function es(){this.g=!0}function ts(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return xi(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}Qi.prototype.M=function(){Qi.Z.M.call(this),Zi(this)},Qi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},es.prototype.Aa=function(){this.g=!1},es.prototype.info=function(){};var ns={},rs=null;function is(){return rs=rs||new $i}function ss(e){ui.call(this,ns.Ma,e)}function os(e){const t=is();Oi(t,new ss(t,e))}function as(e,t){ui.call(this,ns.STAT_EVENT,e),this.stat=t}function cs(e){const t=is();Oi(t,new as(t,e))}function ls(e,t){ui.call(this,ns.Na,e),this.size=t}function us(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return yr.setTimeout((function(){e()}),t)}ns.Ma="serverreachability",Ar(ss,ui),ns.STAT_EVENT="statevent",Ar(as,ui),ns.Na="timingevent",Ar(ls,ui);var hs={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ds={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function fs(){}function ps(e){return e.h||(e.h=e.i())}function ms(){}fs.prototype.h=null;var gs,ys={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function vs(){ui.call(this,"d")}function ws(){ui.call(this,"c")}function bs(){}function Is(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new Qi(this),this.P=Es,e=Xr?125:void 0,this.W=new Hi(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ts}function Ts(){this.i=null,this.g="",this.h=!1}Ar(vs,ui),Ar(ws,ui),Ar(bs,fs),bs.prototype.g=function(){return new XMLHttpRequest},bs.prototype.i=function(){return{}},gs=new bs;var Es=45e3,_s={},ks={};function Ss(e,t,n){e.K=1,e.v=Js(Bs(t)),e.s=n,e.U=!0,As(e,null)}function As(e,t){e.F=Date.now(),Ds(e),e.A=Bs(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),co(n.h,"t",r),e.C=0,n=e.l.H,e.h=new Ts,e.g=la(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Ji(kr(e.Ia,e,e.g),e.O)),Yi(e.V,e.g,"readystatechange",e.gb),t=e.H?qr(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),os(1),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.X,e.s)}function Cs(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function Ns(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=Rs(e,n),r==ks){4==t&&(e.o=4,cs(14),i=!1),ts(e.j,e.m,null,"[Incomplete Response]");break}if(r==_s){e.o=4,cs(15),ts(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}ts(e.j,e.m,r,null),Ls(e,r)}Cs(e)&&r!=ks&&r!=_s&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,cs(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,(t=e.l).g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),ta(t),t.L=!0,cs(11))):(ts(e.j,e.m,n,"[Invalid Chunked Response]"),xs(e),Ps(e))}function Rs(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?ks:(n=Number(t.substring(n,r)),isNaN(n)?_s:(r+=1)+n>t.length?ks:(t=t.substr(r,n),e.C=r+n,t))}function Ds(e){e.Y=Date.now()+e.P,$s(e,e.P)}function $s(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=us(kr(e.eb,e),t)}function Os(e){e.B&&(yr.clearTimeout(e.B),e.B=null)}function Ps(e){0==e.l.G||e.I||ia(e.l,e)}function xs(e){Os(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Ki(e.W),Zi(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Ls(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||mo(n.i,e)))if(n.I=e.N,!e.J&&mo(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;ra(n),Ko(n)}ea(n),cs(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=us(kr(n.ab,n),6e3));if(1>=po(n.i)&&n.ka){try{n.ka()}catch(e){}n.ka=void 0}}else oa(n,11)}else if((e.J||n.g==e)&&ra(n),!Pr(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(n.U=l[0],l=l[1],2==n.G)if("c"==l[0]){n.J=l[1],n.la=l[2];const t=l[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const i=l[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const u=l[5];null!=u&&"number"==typeof u&&0<u&&(r=1.5*u,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;!s.g&&(Mr(e,"spdy")||Mr(e,"quic")||Mr(e,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(go(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,Ws(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=e;if((r=n).oa=ca(r,r.H?r.la:null,r.W),o.J){yo(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Os(a),Ds(a)),r.g=o}else Zo(r);0<n.l.length&&Jo(n)}else"stop"!=l[0]&&"close"!=l[0]||oa(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?oa(n,7):Ho(n):"noop"!=l[0]&&n.j&&n.j.wa(l),n.A=0)}os(4)}catch(e){}}function Ms(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(wr(e)||"string"==typeof e)Dr(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(wr(e)||"string"==typeof e){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;r=function(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"==typeof e)return e.split("");if(wr(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length;for(var s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}}function Us(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof Us)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function Fs(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];Vs(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)Vs(i,r=e.g[t])||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}function Vs(e,t){return Object.prototype.hasOwnProperty.call(e,t)}(pr=Is.prototype).setTimeout=function(e){this.P=e},pr.gb=function(e){e=e.target;const t=this.L;t&&3==Vo(e)?t.l():this.Ia(e)},pr.Ia=function(e){try{if(e==this.g)e:{const u=Vo(this.g);var t=this.g.Da();const h=this.g.ba();if(!(3>u)&&(3!=u||Xr||this.g&&(this.h.h||this.g.ga()||jo(this.g)))){this.I||4!=u||7==t||os(8==t||0>=h?3:2),Os(this);var n=this.g.ba();this.N=n;t:if(Cs(this)){var r=jo(this.g);e="";var i=r.length,s=4==Vo(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){xs(this),Ps(this);var o="";break t}this.h.i=new yr.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Pr(a)){var l=a;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,cs(12),xs(this),Ps(this);break e}ts(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ls(this,n)}this.U?(Ns(this,u,o),Xr&&this.i&&3==u&&(Yi(this.V,this.W,"tick",this.fb),this.W.start())):(ts(this.j,this.m,o,null),Ls(this,o)),4==u&&xs(this),this.i&&!this.I&&(4==u?ia(this.l,this):(this.i=!1,Ds(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,cs(12)):(this.o=0,cs(13)),xs(this),Ps(this)}}}catch(e){}},pr.fb=function(){if(this.g){var e=Vo(this.g),t=this.g.ga();this.C<t.length&&(Os(this),Ns(this,e,t),this.i&&4!=e&&Ds(this))}},pr.cancel=function(){this.I=!0,xs(this)},pr.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(os(3),cs(17)),xs(this),this.o=2,Ps(this)):$s(this,this.Y-e)},(pr=Us.prototype).R=function(){Fs(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},pr.T=function(){return Fs(this),this.g.concat()},pr.get=function(e,t){return Vs(this.h,e)?this.h[e]:t},pr.set=function(e,t){Vs(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},pr.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);e.call(t,s,i,this)}};var js=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function qs(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof qs){this.g=void 0!==t?t:e.g,zs(this,e.j),this.s=e.s,Hs(this,e.i),Ks(this,e.m),this.l=e.l,t=e.h;var n=new io;n.i=t.i,t.g&&(n.g=new Us(t.g),n.h=t.h),Gs(this,n),this.o=e.o}else e&&(n=String(e).match(js))?(this.g=!!t,zs(this,n[1]||"",!0),this.s=Qs(n[2]||""),Hs(this,n[3]||"",!0),Ks(this,n[4]),this.l=Qs(n[5]||"",!0),Gs(this,n[6]||"",!0),this.o=Qs(n[7]||"")):(this.g=!!t,this.h=new io(null,this.g))}function Bs(e){return new qs(e)}function zs(e,t,n){e.j=n?Qs(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Hs(e,t,n){e.i=n?Qs(t,!0):t}function Ks(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Gs(e,t,n){t instanceof io?(e.h=t,function(e,t){t&&!e.j&&(so(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(oo(this,t),co(this,n,e))}),e)),e.j=t}(e.h,e.g)):(n||(t=Xs(t,no)),e.h=new io(t,e.g))}function Ws(e,t,n){e.h.set(t,n)}function Js(e){return Ws(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Qs(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Xs(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Ys),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Ys(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}qs.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Xs(t,Zs,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Xs(t,Zs,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(Xs(n,"/"==n.charAt(0)?to:eo,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Xs(n,ro)),e.join("")};var Zs=/[#\/\?@]/g,eo=/[#\?:]/g,to=/[#\?]/g,no=/[#\?@]/g,ro=/#/g;function io(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function so(e){e.g||(e.g=new Us,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function oo(e,t){so(e),t=lo(e,t),Vs(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,Vs((e=e.g).h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Fs(e)))}function ao(e,t){return so(e),t=lo(e,t),Vs(e.g.h,t)}function co(e,t,n){oo(e,t),0<n.length&&(e.i=null,e.g.set(lo(e,t),Or(n)),e.h+=n.length)}function lo(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(pr=io.prototype).add=function(e,t){so(this),this.i=null,e=lo(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},pr.forEach=function(e,t){so(this),this.g.forEach((function(n,r){Dr(n,(function(n){e.call(t,n,r,this)}),this)}),this)},pr.T=function(){so(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],s=0;s<i.length;s++)n.push(t[r]);return n},pr.R=function(e){so(this);var t=[];if("string"==typeof e)ao(this,e)&&(t=$r(t,this.g.get(lo(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=$r(t,e[n])}return t},pr.set=function(e,t){return so(this),this.i=null,ao(this,e=lo(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},pr.get=function(e,t){return e&&0<(e=this.R(e)).length?String(e[0]):t},pr.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),e.push(o)}}return this.i=e.join("&")};function uo(e){this.l=e||ho,yr.PerformanceNavigationTiming?e=0<(e=yr.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(yr.g&&yr.g.Ea&&yr.g.Ea()&&yr.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ho=10;function fo(e){return!!e.h||!!e.g&&e.g.size>=e.j}function po(e){return e.h?1:e.g?e.g.size:0}function mo(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function go(e,t){e.g?e.g.add(t):e.h=t}function yo(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function vo(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Or(e.i)}function wo(){}function bo(){this.g=new wo}function Io(e,t,n){const r=n||"";try{Ms(e,(function(e,n){let i=e;br(e)&&(i=xi(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function To(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function Eo(e){this.l=e.$b||null,this.j=e.ib||!1}function _o(e,t){$i.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=ko,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}uo.prototype.cancel=function(){if(this.i=vo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},wo.prototype.stringify=function(e){return yr.JSON.stringify(e,void 0)},wo.prototype.parse=function(e){return yr.JSON.parse(e,void 0)},Ar(Eo,fs),Eo.prototype.g=function(){return new _o(this.l,this.j)},Eo.prototype.i=function(e){return function(){return e}}({}),Ar(_o,$i);var ko=0;function So(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function Ao(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Co(e)}function Co(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(pr=_o.prototype).open=function(e,t){if(this.readyState!=ko)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Co(this)},pr.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||yr).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},pr.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Ao(this)),this.readyState=ko},pr.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Co(this)),this.g&&(this.readyState=3,Co(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==yr.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;So(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},pr.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ao(this):Co(this),3==this.readyState&&So(this)}},pr.Ua=function(e){this.g&&(this.response=this.responseText=e,Ao(this))},pr.Ta=function(e){this.g&&(this.response=e,Ao(this))},pr.ha=function(){this.g&&Ao(this)},pr.setRequestHeader=function(e,t){this.v.append(e,t)},pr.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},pr.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(_o.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var No=yr.JSON.parse;function Ro(e){$i.call(this),this.headers=new Us,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Do,this.K=this.L=!1}Ar(Ro,$i);var Do="",$o=/^https?$/i,Oo=["POST","PUT"];function Po(e){return"content-type"==e.toLowerCase()}function xo(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Lo(e),Uo(e)}function Lo(e){e.D||(e.D=!0,Oi(e,"complete"),Oi(e,"error"))}function Mo(e){if(e.h&&void 0!==gr&&(!e.C[1]||4!=Vo(e)||2!=e.ba()))if(e.v&&4==Vo(e))Gi(e.Fa,0,e);else if(Oi(e,"readystatechange"),4==Vo(e)){e.h=!1;try{const a=e.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var i=String(e.H).match(js)[1]||null;if(!i&&yr.self&&yr.self.location){var s=yr.self.location.protocol;i=s.substr(0,s.length-1)}r=!$o.test(i?i.toLowerCase():"")}n=r}if(n)Oi(e,"complete"),Oi(e,"success");else{e.m=6;try{var o=2<Vo(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.ba()+"]",Lo(e)}}finally{Uo(e)}}}function Uo(e,t){if(e.g){Fo(e);const n=e.g,r=e.C[0]?vr:null;e.g=null,e.C=null,t||Oi(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function Fo(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(yr.clearTimeout(e.A),e.A=null)}function Vo(e){return e.g?e.g.readyState:0}function jo(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Do:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function qo(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=function(e){let t="";return jr(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Ws(e,t,n))}function Bo(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function zo(e){this.za=0,this.l=[],this.h=new es,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Bo("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Bo("baseRetryDelayMs",5e3,e),this.$a=Bo("retryDelaySeedMs",1e4,e),this.Ya=Bo("forwardChannelMaxRetries",2,e),this.ra=Bo("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new uo(e&&e.concurrentRequestLimit),this.Ca=new bo,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function Ho(e){if(Go(e),3==e.G){var t=e.V++,n=Bs(e.F);Ws(n,"SID",e.J),Ws(n,"RID",t),Ws(n,"TYPE","terminate"),Xo(e,n),(t=new Is(e,e.h,t,void 0)).K=2,t.v=Js(Bs(n)),n=!1,yr.navigator&&yr.navigator.sendBeacon&&(n=yr.navigator.sendBeacon(t.v.toString(),"")),!n&&yr.Image&&((new Image).src=t.v,n=!0),n||(t.g=la(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Ds(t)}aa(e)}function Ko(e){e.g&&(ta(e),e.g.cancel(),e.g=null)}function Go(e){Ko(e),e.u&&(yr.clearTimeout(e.u),e.u=null),ra(e),e.i.cancel(),e.m&&("number"==typeof e.m&&yr.clearTimeout(e.m),e.m=null)}function Wo(e,t){e.l.push(new class{constructor(e,t){this.h=e,this.g=t}}(e.Za++,t)),3==e.G&&Jo(e)}function Jo(e){fo(e.i)||e.m||(e.m=!0,ji(e.Ha,e),e.C=0)}function Qo(e,t){var n;n=t?t.m:e.V++;const r=Bs(e.F);Ws(r,"SID",e.J),Ws(r,"RID",n),Ws(r,"AID",e.U),Xo(e,r),e.o&&e.s&&qo(r,e.o,e.s),n=new Is(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Yo(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),go(e.i,n),Ss(n,r,t)}function Xo(e,t){e.j&&Ms({},(function(e,n){Ws(t,n,e)}))}function Yo(e,t,n){n=Math.min(e.l.length,n);var r=e.j?kr(e.j.Oa,e.j,e):null;e:{var i=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=t,0>n)t=Math.max(0,i[o].h-100),s=!1;else try{Io(a,e,"req"+n+"_")}catch(e){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function Zo(e){e.g||e.u||(e.Y=1,ji(e.Ga,e),e.A=0)}function ea(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=us(kr(e.Ga,e),sa(e,e.A)),e.A++,!0)}function ta(e){null!=e.B&&(yr.clearTimeout(e.B),e.B=null)}function na(e){e.g=new Is(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Bs(e.oa);Ws(t,"RID","rpc"),Ws(t,"SID",e.J),Ws(t,"CI",e.N?"0":"1"),Ws(t,"AID",e.U),Xo(e,t),Ws(t,"TYPE","xmlhttp"),e.o&&e.s&&qo(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=Js(Bs(t)),n.s=null,n.U=!0,As(n,e)}function ra(e){null!=e.v&&(yr.clearTimeout(e.v),e.v=null)}function ia(e,t){var n=null;if(e.g==t){ra(e),ta(e),e.g=null;var r=2}else{if(!mo(e.i,t))return;n=t.D,yo(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;Oi(r=is(),new ls(r,n,t,i)),Jo(e)}else Zo(e);else if(3==(i=t.o)||0==i&&0<e.I||!(1==r&&function(e,t){return!(po(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.l=t.D.concat(e.l),0):1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya)||(e.m=us(kr(e.Ha,e,t),sa(e,e.C)),e.C++,0)))}(e,t)||2==r&&ea(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:oa(e,5);break;case 4:oa(e,10);break;case 3:oa(e,6);break;default:oa(e,2)}}function sa(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function oa(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=kr(e.jb,e);n||(n=new qs("//www.google.com/images/cleardot.gif"),yr.location&&"http"==yr.location.protocol||zs(n,"https"),Js(n)),function(e,t){const n=new es;if(yr.Image){const r=new Image;r.onload=Sr(To,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Sr(To,n,r,"TestLoadImage: error",!1,t),r.onabort=Sr(To,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Sr(To,n,r,"TestLoadImage: timeout",!1,t),yr.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else cs(2);e.G=0,e.j&&e.j.va(t),aa(e),Go(e)}function aa(e){e.G=0,e.I=-1,e.j&&(0==vo(e.i).length&&0==e.l.length||(e.i.i.length=0,Or(e.l),e.l.length=0),e.j.ua())}function ca(e,t,n){let r=function(e){return e instanceof qs?Bs(e):new qs(e,void 0)}(n);if(""!=r.i)t&&Hs(r,t+"."+r.i),Ks(r,r.m);else{const e=yr.location;r=function(e,t,n,r){var i=new qs(null,void 0);return e&&zs(i,e),t&&Hs(i,t),n&&Ks(i,n),r&&(i.l=r),i}(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&jr(e.aa,(function(e,t){Ws(r,t,e)})),t=e.D,n=e.sa,t&&n&&Ws(r,t,n),Ws(r,"VER",e.ma),Xo(e,r),r}function la(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ba&&!e.qa?new Ro(new Eo({ib:!0})):new Ro(e.qa)).L=e.H,t}function ua(){}function ha(){if(Jr&&!(10<=Number(ci)))throw Error("Environmental error: no available transport.")}function da(e,t){$i.call(this),this.g=new zo(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!Pr(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Pr(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new ma(this)}function fa(e){vs.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function pa(){ws.call(this),this.status=1}function ma(e){this.g=e}(pr=Ro.prototype).ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():gs.g(),this.C=this.u?ps(this.u):ps(gs),this.g.onreadystatechange=kr(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void xo(this,e)}e=n||"";const i=new Us(this.headers);r&&Ms(r,(function(e,t){i.set(t,e)})),r=function(e){e:{var t=Po;const n=e.length,r="string"==typeof e?e.split(""):e;for(let i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:"string"==typeof e?e.charAt(t):e[t]}(i.T()),n=yr.FormData&&e instanceof yr.FormData,!(0<=Rr(Oo,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Fo(this),0<this.B&&((this.K=function(e){return Jr&&oi()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=kr(this.pa,this)):this.A=Gi(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){xo(this,e)}},pr.pa=function(){void 0!==gr&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Oi(this,"timeout"),this.abort(8))},pr.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Oi(this,"complete"),Oi(this,"abort"),Uo(this))},pr.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Uo(this,!0)),Ro.Z.M.call(this)},pr.Fa=function(){this.s||(this.F||this.v||this.l?Mo(this):this.cb())},pr.cb=function(){Mo(this)},pr.ba=function(){try{return 2<Vo(this)?this.g.status:-1}catch(e){return-1}},pr.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},pr.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),No(t)}},pr.Da=function(){return this.m},pr.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(pr=zo.prototype).ma=8,pr.G=1,pr.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(e){}},pr.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new Is(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?(s=qr(s),zr(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Yo(this,i,t),Ws(n=Bs(this.F),"RID",e),Ws(n,"CVER",22),this.D&&Ws(n,"X-HTTP-Session-Id",this.D),Xo(this,n),this.o&&s&&qo(n,this.o,s),go(this.i,i),this.Ra&&Ws(n,"TYPE","init"),this.ja?(Ws(n,"$req",t),Ws(n,"SID","null"),i.$=!0,Ss(i,n,null)):Ss(i,n,t),this.G=2}}else 3==this.G&&(e?Qo(this,e):0==this.l.length||fo(this.i)||Qo(this))},pr.Ga=function(){if(this.u=null,na(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=us(kr(this.bb,this),e)}},pr.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,cs(10),Ko(this),na(this))},pr.ab=function(){null!=this.v&&(this.v=null,Ko(this),ea(this),cs(19))},pr.jb=function(e){e?(this.h.info("Successfully pinged google.com"),cs(2)):(this.h.info("Failed to ping google.com"),cs(1))},(pr=ua.prototype).xa=function(){},pr.wa=function(){},pr.va=function(){},pr.ua=function(){},pr.Oa=function(){},ha.prototype.g=function(e,t){return new da(e,t)},Ar(da,$i),da.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),ji(kr(e.hb,e,t))),cs(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=ca(e,null,e.W),Jo(e)},da.prototype.close=function(){Ho(this.g)},da.prototype.u=function(e){if("string"==typeof e){var t={};t.__data__=e,Wo(this.g,t)}else this.v?((t={}).__data__=xi(e),Wo(this.g,t)):Wo(this.g,e)},da.prototype.M=function(){this.g.j=null,delete this.j,Ho(this.g),delete this.g,da.Z.M.call(this)},Ar(fa,vs),Ar(pa,ws),Ar(ma,ua),ma.prototype.xa=function(){Oi(this.g,"a")},ma.prototype.wa=function(e){Oi(this.g,new fa(e))},ma.prototype.va=function(e){Oi(this.g,new pa(e))},ma.prototype.ua=function(){Oi(this.g,"b")},ha.prototype.createWebChannel=ha.prototype.g,da.prototype.send=da.prototype.u,da.prototype.open=da.prototype.m,da.prototype.close=da.prototype.close,hs.NO_ERROR=0,hs.TIMEOUT=8,hs.HTTP_ERROR=6,ds.COMPLETE="complete",ms.EventType=ys,ys.OPEN="a",ys.CLOSE="b",ys.ERROR="c",ys.MESSAGE="d",$i.prototype.listen=$i.prototype.N,Ro.prototype.listenOnce=Ro.prototype.O,Ro.prototype.getLastError=Ro.prototype.La,Ro.prototype.getLastErrorCode=Ro.prototype.Da,Ro.prototype.getStatus=Ro.prototype.ba,Ro.prototype.getResponseJson=Ro.prototype.Qa,Ro.prototype.getResponseText=Ro.prototype.ga,Ro.prototype.send=Ro.prototype.ea;var ya=hs,va=ds,wa=ns,ba=10,Ia=11,Ta=Eo,Ea=ms,_a=Ro;const ka="@firebase/firestore";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Sa{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Sa.UNAUTHENTICATED=new Sa(null),Sa.GOOGLE_CREDENTIALS=new Sa("google-credentials-uid"),Sa.FIRST_PARTY=new Sa("first-party-uid"),Sa.MOCK_USER=new Sa("mock-user");
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
let Aa="9.6.1";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Ca=new Pt("@firebase/firestore");function Na(){return Ca.logLevel}function Ra(e,...t){if(Ca.logLevel<=Nt.DEBUG){const n=t.map(Oa);Ca.debug(`Firestore (${Aa}): ${e}`,...n)}}function Da(e,...t){if(Ca.logLevel<=Nt.ERROR){const n=t.map(Oa);Ca.error(`Firestore (${Aa}): ${e}`,...n)}}function $a(e,...t){if(Ca.logLevel<=Nt.WARN){const n=t.map(Oa);Ca.warn(`Firestore (${Aa}): ${e}`,...n)}}function Oa(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Pa(e="Unexpected state"){const t=`FIRESTORE (${Aa}) INTERNAL ASSERTION FAILED: `+e;throw Da(t),new Error(t)}function xa(e,t){e||Pa()}function La(e,t){return e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Ma={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ua extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Fa{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Va{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ja{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Sa.UNAUTHENTICATED)))}shutdown(){}}class qa{constructor(e){this.t=e,this.currentUser=Sa.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new Fa;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Fa,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Ra("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Ra("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Fa)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Ra("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(xa("string"==typeof t.accessToken),new Va(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return xa(null===e||"string"==typeof e),new Sa(e)}}class Ba{constructor(e,t,n){this.type="FirstParty",this.user=Sa.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class za{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new Ba(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(Sa.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ha{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ka{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null}start(e,t){this.o=n=>{e.enqueueRetryable((()=>(e=>(null!=e.error&&Ra("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`),t(e.token)))(n)))};const n=e=>{Ra("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit((e=>n(e))),setTimeout((()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?n(e):Ra("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(xa("string"==typeof e.token),new Ha(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ga{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.p(e),this.T=e=>t.writeSequenceNumber(e))}p(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Wa(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */Ga.I=-1;class Ja{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=Wa(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function Qa(e,t){return e<t?-1:e>t?1:0}function Xa(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ya{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Ua(Ma.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Ua(Ma.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Ua(Ma.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Ua(Ma.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ya.fromMillis(Date.now())}static fromDate(e){return Ya.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Ya(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Qa(this.nanoseconds,e.nanoseconds):Qa(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Za{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Za(e)}static min(){return new Za(new Ya(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ec(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function tc(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function nc(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class rc{constructor(e,t,n){void 0===t?t=0:t>e.length&&Pa(),void 0===n?n=e.length-t:n>e.length-t&&Pa(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===rc.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof rc?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ic extends rc{construct(e,t,n){return new ic(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Ua(Ma.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new ic(t)}static emptyPath(){return new ic([])}}const sc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class oc extends rc{construct(e,t,n){return new oc(e,t,n)}static isValidIdentifier(e){return sc.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),oc.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new oc(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Ua(Ma.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Ua(Ma.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Ua(Ma.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new Ua(Ma.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new oc(t)}static emptyPath(){return new oc([])}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ac{constructor(e){this.fields=e,e.sort(oc.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Xa(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class cc{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new cc(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new cc(t)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Qa(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}cc.EMPTY_BYTE_STRING=new cc("");const lc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function uc(e){if(xa(!!e),"string"==typeof e){let t=0;const n=lc.exec(e);if(xa(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:hc(e.seconds),nanos:hc(e.nanos)}}function hc(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function dc(e){return"string"==typeof e?cc.fromBase64String(e):cc.fromUint8Array(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function fc(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function pc(e){const t=e.mapValue.fields.__previous_value__;return fc(t)?pc(t):t}function mc(e){const t=uc(e.mapValue.fields.__local_write_time__.timestampValue);return new Ya(t.seconds,t.nanos)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function gc(e){return null==e}function yc(e){return 0===e&&1/e==-1/0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class vc{constructor(e){this.path=e}static fromPath(e){return new vc(ic.fromString(e))}static fromName(e){return new vc(ic.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===ic.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ic.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new vc(new ic(e.slice()))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function wc(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?fc(e)?4:10:Pa()}function bc(e,t){const n=wc(e);if(n!==wc(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return mc(e).isEqual(mc(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=uc(e.timestampValue),r=uc(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return dc(e.bytesValue).isEqual(dc(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return hc(e.geoPointValue.latitude)===hc(t.geoPointValue.latitude)&&hc(e.geoPointValue.longitude)===hc(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return hc(e.integerValue)===hc(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=hc(e.doubleValue),r=hc(t.doubleValue);return n===r?yc(n)===yc(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Xa(e.arrayValue.values||[],t.arrayValue.values||[],bc);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(ec(n)!==ec(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!bc(n[e],r[e])))return!1;return!0}(e,t);default:return Pa()}}function Ic(e,t){return void 0!==(e.values||[]).find((e=>bc(e,t)))}function Tc(e,t){const n=wc(e),r=wc(t);if(n!==r)return Qa(n,r);switch(n){case 0:return 0;case 1:return Qa(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=hc(e.integerValue||e.doubleValue),r=hc(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Ec(e.timestampValue,t.timestampValue);case 4:return Ec(mc(e),mc(t));case 5:return Qa(e.stringValue,t.stringValue);case 6:return function(e,t){const n=dc(e),r=dc(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=Qa(n[e],r[e]);if(0!==t)return t}return Qa(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Qa(hc(e.latitude),hc(t.latitude));return 0!==n?n:Qa(hc(e.longitude),hc(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=Tc(n[e],r[e]);if(t)return t}return Qa(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){const t=Qa(r[e],s[e]);if(0!==t)return t;const o=Tc(n[r[e]],i[s[e]]);if(0!==o)return o}return Qa(r.length,s.length)}(e.mapValue,t.mapValue);default:throw Pa()}}function Ec(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Qa(e,t);const n=uc(e),r=uc(t),i=Qa(n.seconds,r.seconds);return 0!==i?i:Qa(n.nanos,r.nanos)}function _c(e){return kc(e)}function kc(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=uc(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?dc(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,vc.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=kc(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${kc(e.fields[i])}`;return n+"}"}(e.mapValue):Pa();var t,n}function Sc(e){return!!e&&"integerValue"in e}function Ac(e){return!!e&&"arrayValue"in e}function Cc(e){return!!e&&"nullValue"in e}function Nc(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Rc(e){return!!e&&"mapValue"in e}function Dc(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return tc(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Dc(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Dc(e.arrayValue.values[n]);return t}return Object.assign({},e)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class $c{constructor(e){this.value=e}static empty(){return new $c({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Rc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Dc(t)}setAll(e){let t=oc.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Dc(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Rc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return bc(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Rc(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){tc(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new $c(Dc(this.value))}}function Oc(e){const t=[];return tc(e.fields,((e,n)=>{const r=new oc([e]);if(Rc(n)){const e=Oc(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new ac(t)
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class Pc{constructor(e,t,n,r,i){this.key=e,this.documentType=t,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(e){return new Pc(e,0,Za.min(),$c.empty(),0)}static newFoundDocument(e,t,n){return new Pc(e,1,t,n,0)}static newNoDocument(e,t){return new Pc(e,2,t,$c.empty(),0)}static newUnknownDocument(e,t){return new Pc(e,3,t,$c.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$c.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$c.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Pc&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new Pc(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class xc{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.R=null}}function Lc(e,t=null,n=[],r=[],i=null,s=null,o=null){return new xc(e,t,n,r,i,s,o)}function Mc(e){const t=La(e);if(null===t.R){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>function(e){return e.field.canonicalString()+e.op.toString()+_c(e.value)}(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),gc(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=Qc(t.startAt)),t.endAt&&(e+="|ub:",e+=Qc(t.endAt)),t.R=e}return t.R}function Uc(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Yc(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!bc(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!el(e.startAt,t.startAt)&&el(e.endAt,t.endAt)}function Fc(e){return vc.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class Vc extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.P(e,t,n):new jc(e,t,n):"array-contains"===t?new Hc(e,n):"in"===t?new Kc(e,n):"not-in"===t?new Gc(e,n):"array-contains-any"===t?new Wc(e,n):new Vc(e,t,n)}static P(e,t,n){return"in"===t?new qc(e,n):new Bc(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.v(Tc(t,this.value)):null!==t&&wc(this.value)===wc(t)&&this.v(Tc(t,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Pa()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class jc extends Vc{constructor(e,t,n){super(e,t,n),this.key=vc.fromName(n.referenceValue)}matches(e){const t=vc.comparator(e.key,this.key);return this.v(t)}}class qc extends Vc{constructor(e,t){super(e,"in",t),this.keys=zc("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Bc extends Vc{constructor(e,t){super(e,"not-in",t),this.keys=zc("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function zc(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>vc.fromName(e.referenceValue)))}class Hc extends Vc{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ac(t)&&Ic(t.arrayValue,this.value)}}class Kc extends Vc{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Ic(this.value.arrayValue,t)}}class Gc extends Vc{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ic(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Ic(this.value.arrayValue,t)}}class Wc extends Vc{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ac(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Ic(this.value.arrayValue,e)))}}class Jc{constructor(e,t){this.position=e,this.before=t}}function Qc(e){return`${e.before?"b":"a"}:${e.position.map((e=>_c(e))).join(",")}`}class Xc{constructor(e,t="asc"){this.field=e,this.dir=t}}function Yc(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Zc(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?vc.comparator(vc.fromName(o.referenceValue),n.key):Tc(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return e.before?r<=0:r<0}function el(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.before!==t.before||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!bc(e.position[n],t.position[n]))return!1;return!0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class tl{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.S=null,this.D=null,this.startAt,this.endAt}}function nl(e){return new tl(e)}function rl(e){return!gc(e.limit)&&"F"===e.limitType}function il(e){return!gc(e.limit)&&"L"===e.limitType}function sl(e){const t=La(e);if(null===t.S){t.S=[];const e=function(e){for(const t of e.filters)if(t.V())return t.field;return null}(t),n=function(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}(t);if(null!==e&&null===n)e.isKeyField()||t.S.push(new Xc(e)),t.S.push(new Xc(oc.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.S.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.S.push(new Xc(oc.keyField(),e))}}}return t.S}function ol(e){const t=La(e);if(!t.D)if("F"===t.limitType)t.D=Lc(t.path,t.collectionGroup,sl(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of sl(t)){const t="desc"===n.dir?"asc":"desc";e.push(new Xc(n.field,t))}const n=t.endAt?new Jc(t.endAt.position,!t.endAt.before):null,r=t.startAt?new Jc(t.startAt.position,!t.startAt.before):null;t.D=Lc(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.D}function al(e,t){return Uc(ol(e),ol(t))&&e.limitType===t.limitType}function cl(e){return`${Mc(ol(e))}|lt:${e.limitType}`}function ll(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${_c(t.value)}`;var t})).join(", ")}]`),gc(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: "+Qc(e.startAt)),e.endAt&&(t+=", endAt: "+Qc(e.endAt)),`Target(${t})`}(ol(e))}; limitType=${e.limitType})`}function ul(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):vc.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!Zc(e.startAt,sl(e),t))&&(!e.endAt||!Zc(e.endAt,sl(e),t))}(e,t)}function hl(e){return(t,n)=>{let r=!1;for(const i of sl(e)){const e=dl(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function dl(e,t,n){const r=e.field.isKeyField()?vc.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Tc(r,i):Pa()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Pa()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function fl(e,t){if(e.C){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yc(t)?"-0":t}}function pl(e){return{integerValue:""+e}}function ml(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!yc(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(t)?pl(t):fl(e,t)}
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class gl{constructor(){this._=void 0}}function yl(e,t,n){return e instanceof bl?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Il?Tl(e,t):e instanceof El?_l(e,t):function(e,t){const n=wl(e,t),r=Sl(n)+Sl(e.N);return Sc(n)&&Sc(e.N)?pl(r):fl(e.k,r)}(e,t)}function vl(e,t,n){return e instanceof Il?Tl(e,t):e instanceof El?_l(e,t):n}function wl(e,t){return e instanceof kl?Sc(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class bl extends gl{}class Il extends gl{constructor(e){super(),this.elements=e}}function Tl(e,t){const n=Al(t);for(const t of e.elements)n.some((e=>bc(e,t)))||n.push(t);return{arrayValue:{values:n}}}class El extends gl{constructor(e){super(),this.elements=e}}function _l(e,t){let n=Al(t);for(const t of e.elements)n=n.filter((e=>!bc(e,t)));return{arrayValue:{values:n}}}class kl extends gl{constructor(e,t){super(),this.k=e,this.N=t}}function Sl(e){return hc(e.integerValue||e.doubleValue)}function Al(e){return Ac(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class Cl{constructor(e,t){this.version=e,this.transformResults=t}}class Nl{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Nl}static exists(e){return new Nl(void 0,e)}static updateTime(e){return new Nl(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Rl(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Dl{}function $l(e,t,n){e instanceof Ml?function(e,t,n){const r=e.value.clone(),i=Vl(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Ul?function(e,t,n){if(!Rl(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Vl(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Fl(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Ol(e,t,n){e instanceof Ml?function(e,t,n){if(!Rl(e.precondition,t))return;const r=e.value.clone(),i=jl(e.fieldTransforms,n,t);r.setAll(i),t.convertToFoundDocument(Ll(t),r).setHasLocalMutations()}(e,t,n):e instanceof Ul?function(e,t,n){if(!Rl(e.precondition,t))return;const r=jl(e.fieldTransforms,n,t),i=t.data;i.setAll(Fl(e)),i.setAll(r),t.convertToFoundDocument(Ll(t),i).setHasLocalMutations()}(e,t,n):function(e,t){Rl(e.precondition,t)&&t.convertToNoDocument(Za.min())}(e,t)}function Pl(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=wl(r.transform,e||null);null!=i&&(null==n&&(n=$c.empty()),n.set(r.field,i))}return n||null}function xl(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Xa(e,t,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Il&&t instanceof Il||e instanceof El&&t instanceof El?Xa(e.elements,t.elements,bc):e instanceof kl&&t instanceof kl?bc(e.N,t.N):e instanceof bl&&t instanceof bl}(e.transform,t.transform)}(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function Ll(e){return e.isFoundDocument()?e.version:Za.min()}class Ml extends Dl{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Ul extends Dl{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Fl(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Vl(e,t,n){const r=new Map;xa(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,vl(o,a,n[i]))}return r}function jl(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,yl(e,s,t))}return r}class ql extends Dl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Bl extends Dl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class zl{constructor(e){this.count=e}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var Hl,Kl;function Gl(e){if(void 0===e)return Da("GRPC error has no .code"),Ma.UNKNOWN;switch(e){case Hl.OK:return Ma.OK;case Hl.CANCELLED:return Ma.CANCELLED;case Hl.UNKNOWN:return Ma.UNKNOWN;case Hl.DEADLINE_EXCEEDED:return Ma.DEADLINE_EXCEEDED;case Hl.RESOURCE_EXHAUSTED:return Ma.RESOURCE_EXHAUSTED;case Hl.INTERNAL:return Ma.INTERNAL;case Hl.UNAVAILABLE:return Ma.UNAVAILABLE;case Hl.UNAUTHENTICATED:return Ma.UNAUTHENTICATED;case Hl.INVALID_ARGUMENT:return Ma.INVALID_ARGUMENT;case Hl.NOT_FOUND:return Ma.NOT_FOUND;case Hl.ALREADY_EXISTS:return Ma.ALREADY_EXISTS;case Hl.PERMISSION_DENIED:return Ma.PERMISSION_DENIED;case Hl.FAILED_PRECONDITION:return Ma.FAILED_PRECONDITION;case Hl.ABORTED:return Ma.ABORTED;case Hl.OUT_OF_RANGE:return Ma.OUT_OF_RANGE;case Hl.UNIMPLEMENTED:return Ma.UNIMPLEMENTED;case Hl.DATA_LOSS:return Ma.DATA_LOSS;default:return Pa()}}(Kl=Hl||(Hl={}))[Kl.OK=0]="OK",Kl[Kl.CANCELLED=1]="CANCELLED",Kl[Kl.UNKNOWN=2]="UNKNOWN",Kl[Kl.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Kl[Kl.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Kl[Kl.NOT_FOUND=5]="NOT_FOUND",Kl[Kl.ALREADY_EXISTS=6]="ALREADY_EXISTS",Kl[Kl.PERMISSION_DENIED=7]="PERMISSION_DENIED",Kl[Kl.UNAUTHENTICATED=16]="UNAUTHENTICATED",Kl[Kl.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Kl[Kl.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Kl[Kl.ABORTED=10]="ABORTED",Kl[Kl.OUT_OF_RANGE=11]="OUT_OF_RANGE",Kl[Kl.UNIMPLEMENTED=12]="UNIMPLEMENTED",Kl[Kl.INTERNAL=13]="INTERNAL",Kl[Kl.UNAVAILABLE=14]="UNAVAILABLE",Kl[Kl.DATA_LOSS=15]="DATA_LOSS";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Wl{constructor(e,t){this.comparator=e,this.root=t||Ql.EMPTY}insert(e,t){return new Wl(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ql.BLACK,null,null))}remove(e){return new Wl(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ql.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Jl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Jl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Jl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Jl(this.root,e,this.comparator,!0)}}class Jl{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ql{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Ql.RED,this.left=null!=r?r:Ql.EMPTY,this.right=null!=i?i:Ql.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Ql(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ql.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Ql.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ql.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ql.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Pa();if(this.right.isRed())throw Pa();const e=this.left.check();if(e!==this.right.check())throw Pa();return e+(this.isRed()?0:1)}}Ql.EMPTY=null,Ql.RED=!0,Ql.BLACK=!1,Ql.EMPTY=new class{constructor(){this.size=0}get key(){throw Pa()}get value(){throw Pa()}get color(){throw Pa()}get left(){throw Pa()}get right(){throw Pa()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Ql(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Xl{constructor(e){this.comparator=e,this.data=new Wl(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Yl(this.data.getIterator())}getIteratorFrom(e){return new Yl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Xl))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Xl(this.comparator);return t.data=e,t}}class Yl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Zl=new Wl(vc.comparator);function eu(){return Zl}const tu=new Wl(vc.comparator);function nu(){return tu}const ru=new Wl(vc.comparator);const iu=new Xl(vc.comparator);function su(...e){let t=iu;for(const n of e)t=t.add(n);return t}const ou=new Xl(Qa);function au(){return ou}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class cu{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,lu.createSynthesizedTargetChangeForCurrentChange(e,t)),new cu(Za.min(),n,au(),eu(),su())}}class lu{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new lu(cc.EMPTY_BYTE_STRING,t,su(),su(),su())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class uu{constructor(e,t,n,r){this.$=e,this.removedTargetIds=t,this.key=n,this.F=r}}class hu{constructor(e,t){this.targetId=e,this.O=t}}class du{constructor(e,t,n=cc.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class fu{constructor(){this.M=0,this.L=gu(),this.B=cc.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return 0!==this.M}get j(){return this.q}W(e){e.approximateByteSize()>0&&(this.q=!0,this.B=e)}G(){let e=su(),t=su(),n=su();return this.L.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Pa()}})),new lu(this.B,this.U,e,t,n)}H(){this.q=!1,this.L=gu()}J(e,t){this.q=!0,this.L=this.L.insert(e,t)}Y(e){this.q=!0,this.L=this.L.remove(e)}X(){this.M+=1}Z(){this.M-=1}tt(){this.q=!0,this.U=!0}}class pu{constructor(e){this.et=e,this.nt=new Map,this.st=eu(),this.it=mu(),this.rt=new Xl(Qa)}ot(e){for(const t of e.$)e.F&&e.F.isFoundDocument()?this.at(t,e.F):this.ct(t,e.key,e.F);for(const t of e.removedTargetIds)this.ct(t,e.key,e.F)}ut(e){this.forEachTarget(e,(t=>{const n=this.ht(t);switch(e.state){case 0:this.lt(t)&&n.W(e.resumeToken);break;case 1:n.Z(),n.K||n.H(),n.W(e.resumeToken);break;case 2:n.Z(),n.K||this.removeTarget(t);break;case 3:this.lt(t)&&(n.tt(),n.W(e.resumeToken));break;case 4:this.lt(t)&&(this.ft(t),n.W(e.resumeToken));break;default:Pa()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.nt.forEach(((e,n)=>{this.lt(n)&&t(n)}))}dt(e){const t=e.targetId,n=e.O.count,r=this.wt(t);if(r){const e=r.target;if(Fc(e))if(0===n){const n=new vc(e.path);this.ct(t,n,Pc.newNoDocument(n,Za.min()))}else xa(1===n);else this._t(t)!==n&&(this.ft(t),this.rt=this.rt.add(t))}}gt(e){const t=new Map;this.nt.forEach(((n,r)=>{const i=this.wt(r);if(i){if(n.current&&Fc(i.target)){const t=new vc(i.target.path);null!==this.st.get(t)||this.yt(r,t)||this.ct(r,t,Pc.newNoDocument(t,e))}n.j&&(t.set(r,n.G()),n.H())}}));let n=su();this.it.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.wt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))}));const r=new cu(e,t,this.rt,this.st,n);return this.st=eu(),this.it=mu(),this.rt=new Xl(Qa),r}at(e,t){if(!this.lt(e))return;const n=this.yt(e,t.key)?2:0;this.ht(e).J(t.key,n),this.st=this.st.insert(t.key,t),this.it=this.it.insert(t.key,this.Tt(t.key).add(e))}ct(e,t,n){if(!this.lt(e))return;const r=this.ht(e);this.yt(e,t)?r.J(t,1):r.Y(t),this.it=this.it.insert(t,this.Tt(t).delete(e)),n&&(this.st=this.st.insert(t,n))}removeTarget(e){this.nt.delete(e)}_t(e){const t=this.ht(e).G();return this.et.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}X(e){this.ht(e).X()}ht(e){let t=this.nt.get(e);return t||(t=new fu,this.nt.set(e,t)),t}Tt(e){let t=this.it.get(e);return t||(t=new Xl(Qa),this.it=this.it.insert(e,t)),t}lt(e){const t=null!==this.wt(e);return t||Ra("WatchChangeAggregator","Detected inactive target",e),t}wt(e){const t=this.nt.get(e);return t&&t.K?null:this.et.Et(e)}ft(e){this.nt.set(e,new fu),this.et.getRemoteKeysForTarget(e).forEach((t=>{this.ct(e,t,null)}))}yt(e,t){return this.et.getRemoteKeysForTarget(e).has(t)}}function mu(){return new Wl(vc.comparator)}function gu(){return new Wl(vc.comparator)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const yu={asc:"ASCENDING",desc:"DESCENDING"},vu={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class wu{constructor(e,t){this.databaseId=e,this.C=t}}function bu(e,t){return e.C?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Iu(e,t){return e.C?t.toBase64():t.toUint8Array()}function Tu(e,t){return bu(e,t.toTimestamp())}function Eu(e){return xa(!!e),Za.fromTimestamp(function(e){const t=uc(e);return new Ya(t.seconds,t.nanos)}(e))}function _u(e,t){return function(e){return new ic(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function ku(e){const t=ic.fromString(e);return xa(Hu(t)),t}function Su(e,t){return _u(e.databaseId,t.path)}function Au(e,t){const n=ku(t);if(n.get(1)!==e.databaseId.projectId)throw new Ua(Ma.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Ua(Ma.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new vc(Ru(n))}function Cu(e,t){return _u(e.databaseId,t)}function Nu(e){return new ic(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Ru(e){return xa(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Du(e,t,n){return{name:Su(e,t),fields:n.value.mapValue.fields}}function $u(e,t){return{documents:[Cu(e,t.path)]}}function Ou(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Cu(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Cu(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(Nc(e.value))return{unaryFilter:{field:Vu(e.field),op:"IS_NAN"}};if(Cc(e.value))return{unaryFilter:{field:Vu(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Nc(e.value))return{unaryFilter:{field:Vu(e.field),op:"IS_NOT_NAN"}};if(Cc(e.value))return{unaryFilter:{field:Vu(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vu(e.field),op:Fu(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Vu(e.field),direction:Uu(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.C||gc(t)?t:{value:t}}(e,t.limit);return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=Lu(t.startAt)),t.endAt&&(n.structuredQuery.endAt=Lu(t.endAt)),n}function Pu(e){let t=function(e){const t=ku(e);return 4===t.length?ic.emptyPath():Ru(t)}(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){xa(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=xu(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new Xc(ju(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,gc(t)?null:t}(n.limit));let c=null;n.startAt&&(c=Mu(n.startAt));let l=null;return n.endAt&&(l=Mu(n.endAt)),function(e,t,n,r,i,s,o,a){return new tl(e,t,n,r,i,s,o,a)}(t,i,o,s,a,"F",c,l)}function xu(e){return e?void 0!==e.unaryFilter?[Bu(e)]:void 0!==e.fieldFilter?[qu(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>xu(e))).reduce(((e,t)=>e.concat(t))):Pa():[]}function Lu(e){return{before:e.before,values:e.position}}function Mu(e){const t=!!e.before,n=e.values||[];return new Jc(n,t)}function Uu(e){return yu[e]}function Fu(e){return vu[e]}function Vu(e){return{fieldPath:e.canonicalString()}}function ju(e){return oc.fromServerFormat(e.fieldPath)}function qu(e){return Vc.create(ju(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Pa()}}(e.fieldFilter.op),e.fieldFilter.value)}function Bu(e){switch(e.unaryFilter.op){case"IS_NAN":const t=ju(e.unaryFilter.field);return Vc.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=ju(e.unaryFilter.field);return Vc.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ju(e.unaryFilter.field);return Vc.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ju(e.unaryFilter.field);return Vc.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Pa()}}function zu(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Hu(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Ku{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Pa(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Ku(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Ku?t:Ku.resolve(t)}catch(e){return Ku.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Ku.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Ku.reject(t)}static resolve(e){return new Ku(((t,n)=>{t(e)}))}static reject(e){return new Ku(((t,n)=>{n(e)}))}static waitFor(e){return new Ku(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=Ku.resolve(!1);for(const n of e)t=t.next((e=>e?Ku.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}}function Gu(e){return"IndexedDbTransactionError"===e.name}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Wu{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(e.key)&&$l(r,e,n[t])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&Ol(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&Ol(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach((t=>{const n=e.get(t.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(Za.min())}))}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),su())}isEqual(e){return this.batchId===e.batchId&&Xa(this.mutations,e.mutations,((e,t)=>xl(e,t)))&&Xa(this.baseMutations,e.baseMutations,((e,t)=>xl(e,t)))}}class Ju{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){xa(e.mutations.length===n.length);let r=ru;const i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new Ju(e,t,n,r)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Qu{constructor(e,t,n,r,i=Za.min(),s=Za.min(),o=cc.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new Qu(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Qu(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Qu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Xu{constructor(e){this.Gt=e}}function Yu(e){const t=Pu({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?function(e,t,n){return new tl(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}(t,t.limit,"L"):t}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Zu{constructor(){this.zt=new eh}addToCollectionParentIndex(e,t){return this.zt.add(t),Ku.resolve()}getCollectionParents(e,t){return Ku.resolve(this.zt.getEntries(t))}}class eh{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Xl(ic.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Xl(ic.comparator)).toArray()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class th{constructor(e){this.se=e}next(){return this.se+=2,this.se}static ie(){return new th(0)}static re(){return new th(-1)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function nh(e){if(e.code!==Ma.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;Ra("LocalStore","Unexpectedly lost primary lease")}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class rh{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t])}else this.inner[n]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),!0;return!1}forEach(e){tc(this.inner,((t,n)=>{for(const[t,r]of n)e(t,r)}))}isEmpty(){return nc(this.inner)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class ih{constructor(e,t,n){this.Je=e,this.An=t,this.Jt=n}Rn(e,t){return this.An.getAllMutationBatchesAffectingDocumentKey(e,t).next((n=>this.Pn(e,t,n)))}Pn(e,t,n){return this.Je.getEntry(e,t).next((e=>{for(const t of n)t.applyToLocalView(e);return e}))}bn(e,t){e.forEach(((e,n)=>{for(const e of t)e.applyToLocalView(n)}))}vn(e,t){return this.Je.getEntries(e,t).next((t=>this.Vn(e,t).next((()=>t))))}Vn(e,t){return this.An.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>this.bn(t,e)))}getDocumentsMatchingQuery(e,t,n){return function(e){return vc.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.Sn(e,t.path):function(e){return null!==e.collectionGroup}(t)?this.Dn(e,t,n):this.Cn(e,t,n)}Sn(e,t){return this.Rn(e,new vc(t)).next((e=>{let t=nu();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}Dn(e,t,n){const r=t.collectionGroup;let i=nu();return this.Jt.getCollectionParents(e,r).next((s=>Ku.forEach(s,(s=>{const o=function(e,t){return new tl(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.Cn(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}Cn(e,t,n){let r,i;return this.Je.getDocumentsMatchingQuery(e,t,n).next((n=>(r=n,this.An.getAllMutationBatchesAffectingQuery(e,t)))).next((t=>(i=t,this.Nn(e,i,r).next((e=>{r=e;for(const e of i)for(const t of e.mutations){const n=t.key;let i=r.get(n);null==i&&(i=Pc.newInvalidDocument(n),r=r.insert(n,i)),Ol(t,i,e.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))))).next((()=>(r.forEach(((e,n)=>{ul(t,n)||(r=r.remove(e))})),r)))}Nn(e,t,n){let r=su();for(const e of t)for(const t of e.mutations)t instanceof Ul&&null===n.get(t.key)&&(r=r.add(t.key));let i=n;return this.Je.getEntries(e,r).next((e=>(e.forEach(((e,t)=>{t.isFoundDocument()&&(i=i.insert(e,t))})),i)))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class sh{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.kn=n,this.xn=r}static $n(e,t){let n=su(),r=su();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new sh(e,t.fromCache,n,r)}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class oh{Fn(e){this.On=e}getDocumentsMatchingQuery(e,t,n,r){return function(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}(t)||n.isEqual(Za.min())?this.Mn(e,t):this.On.vn(e,r).next((i=>{const s=this.Ln(t,i);return(rl(t)||il(t))&&this.Bn(t.limitType,s,r,n)?this.Mn(e,t):(Na()<=Nt.DEBUG&&Ra("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),ll(t)),this.On.getDocumentsMatchingQuery(e,t,n).next((e=>(s.forEach((t=>{e=e.insert(t.key,t)})),e))))}))}Ln(e,t){let n=new Xl(hl(e));return t.forEach(((t,r)=>{ul(e,r)&&(n=n.add(r))})),n}Bn(e,t,n,r){if(n.size!==t.size)return!0;const i="F"===e?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mn(e,t){return Na()<=Nt.DEBUG&&Ra("QueryEngine","Using full collection scan to execute query:",ll(t)),this.On.getDocumentsMatchingQuery(e,t,Za.min())}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ah{constructor(e,t,n,r){this.persistence=e,this.Un=t,this.k=r,this.qn=new Wl(Qa),this.Kn=new rh((e=>Mc(e)),Uc),this.jn=Za.min(),this.An=e.getMutationQueue(n),this.Qn=e.getRemoteDocumentCache(),this.He=e.getTargetCache(),this.Wn=new ih(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=e.getBundleCache(),this.Un.Fn(this.Wn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.qn)))}}async function ch(e,t){const n=La(e);let r=n.An,i=n.Wn;const s=await n.persistence.runTransaction("Handle user change","readonly",(e=>{let s;return n.An.getAllMutationBatches(e).next((o=>(s=o,r=n.persistence.getMutationQueue(t),i=new ih(n.Qn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(e)))).next((t=>{const n=[],r=[];let o=su();for(const e of s){n.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return i.vn(e,o).next((e=>({Gn:e,removedBatchIds:n,addedBatchIds:r})))}))}));return n.An=r,n.Wn=i,n.Un.Fn(n.Wn),s}function lh(e){const t=La(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.He.getLastRemoteSnapshotVersion(e)))}function uh(e,t){const n=La(e),r=t.snapshotVersion;let i=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Qn.newChangeBuffer({trackRemovals:!0});i=n.qn;const o=[];t.targetChanges.forEach(((t,s)=>{const a=i.get(s);if(!a)return;o.push(n.He.removeMatchingKeys(e,t.removedDocuments,s).next((()=>n.He.addMatchingKeys(e,t.addedDocuments,s))));const c=t.resumeToken;if(c.approximateByteSize()>0){const l=a.withResumeToken(c,r).withSequenceNumber(e.currentSequenceNumber);i=i.insert(s,l),function(e,t,n){return xa(t.resumeToken.approximateByteSize()>0),0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,l,t)&&o.push(n.He.updateTargetData(e,l))}}));let a=eu();if(t.documentUpdates.forEach(((r,i)=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(function(e,t,n,r,i){let s=su();return n.forEach((e=>s=s.add(e))),t.getEntries(e,s).next((e=>{let s=eu();return n.forEach(((n,o)=>{const a=e.get(n),c=(null==i?void 0:i.get(n))||r;o.isNoDocument()&&o.version.isEqual(Za.min())?(t.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(o,c),s=s.insert(n,o)):Ra("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)})),s}))}(e,s,t.documentUpdates,r,void 0).next((e=>{a=e}))),!r.isEqual(Za.min())){const t=n.He.getLastRemoteSnapshotVersion(e).next((t=>n.He.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return Ku.waitFor(o).next((()=>s.apply(e))).next((()=>n.Wn.Vn(e,a))).next((()=>a))})).then((e=>(n.qn=i,e)))}function hh(e,t){const n=La(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.An.getNextMutationBatchAfterBatchId(e,t))))}async function dh(e,t,n){const r=La(e),i=r.qn.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!Gu(e))throw e;Ra("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.qn=r.qn.remove(t),r.Kn.delete(i.target)}function fh(e,t,n){const r=La(e);let i=Za.min(),s=su();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=La(e),i=r.Kn.get(n);return void 0!==i?Ku.resolve(r.qn.get(i)):r.He.getTargetData(t,n)}(r,e,ol(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.He.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Un.getDocumentsMatchingQuery(e,t,n?i:Za.min(),n?s:su()))).next((e=>({documents:e,zn:s})))))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ph{constructor(e){this.k=e,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(e,t){return Ku.resolve(this.Xn.get(t))}saveBundleMetadata(e,t){var n;return this.Xn.set(t.id,{id:(n=t).id,version:n.version,createTime:Eu(n.createTime)}),Ku.resolve()}getNamedQuery(e,t){return Ku.resolve(this.Zn.get(t))}saveNamedQuery(e,t){return this.Zn.set(t.name,function(e){return{name:e.name,query:Yu(e.bundledQuery),readTime:Eu(e.readTime)}}(t)),Ku.resolve()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class mh{constructor(){this.ts=new Xl(gh.es),this.ns=new Xl(gh.ss)}isEmpty(){return this.ts.isEmpty()}addReference(e,t){const n=new gh(e,t);this.ts=this.ts.add(n),this.ns=this.ns.add(n)}rs(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.os(new gh(e,t))}cs(e,t){e.forEach((e=>this.removeReference(e,t)))}us(e){const t=new vc(new ic([])),n=new gh(t,e),r=new gh(t,e+1),i=[];return this.ns.forEachInRange([n,r],(e=>{this.os(e),i.push(e.key)})),i}hs(){this.ts.forEach((e=>this.os(e)))}os(e){this.ts=this.ts.delete(e),this.ns=this.ns.delete(e)}ls(e){const t=new vc(new ic([])),n=new gh(t,e),r=new gh(t,e+1);let i=su();return this.ns.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new gh(e,0),n=this.ts.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class gh{constructor(e,t){this.key=e,this.fs=t}static es(e,t){return vc.comparator(e.key,t.key)||Qa(e.fs,t.fs)}static ss(e,t){return Qa(e.fs,t.fs)||vc.comparator(e.key,t.key)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class yh{constructor(e,t){this.Jt=e,this.referenceDelegate=t,this.An=[],this.ds=1,this.ws=new Xl(gh.es)}checkEmpty(e){return Ku.resolve(0===this.An.length)}addMutationBatch(e,t,n,r){const i=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const s=new Wu(i,t,n,r);this.An.push(s);for(const t of r)this.ws=this.ws.add(new gh(t.key,i)),this.Jt.addToCollectionParentIndex(e,t.key.path.popLast());return Ku.resolve(s)}lookupMutationBatch(e,t){return Ku.resolve(this._s(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.gs(n),i=r<0?0:r;return Ku.resolve(this.An.length>i?this.An[i]:null)}getHighestUnacknowledgedBatchId(){return Ku.resolve(0===this.An.length?-1:this.ds-1)}getAllMutationBatches(e){return Ku.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new gh(t,0),r=new gh(t,Number.POSITIVE_INFINITY),i=[];return this.ws.forEachInRange([n,r],(e=>{const t=this._s(e.fs);i.push(t)})),Ku.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Xl(Qa);return t.forEach((e=>{const t=new gh(e,0),r=new gh(e,Number.POSITIVE_INFINITY);this.ws.forEachInRange([t,r],(e=>{n=n.add(e.fs)}))})),Ku.resolve(this.ys(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;vc.isDocumentKey(i)||(i=i.child(""));const s=new gh(new vc(i),0);let o=new Xl(Qa);return this.ws.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.fs)),!0)}),s),Ku.resolve(this.ys(o))}ys(e){const t=[];return e.forEach((e=>{const n=this._s(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){xa(0===this.ps(t.batchId,"removed")),this.An.shift();let n=this.ws;return Ku.forEach(t.mutations,(r=>{const i=new gh(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.ws=n}))}ee(e){}containsKey(e,t){const n=new gh(t,0),r=this.ws.firstAfterOrEqual(n);return Ku.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.An.length,Ku.resolve()}ps(e,t){return this.gs(e)}gs(e){return 0===this.An.length?0:e-this.An[0].batchId}_s(e){const t=this.gs(e);return t<0||t>=this.An.length?null:this.An[t]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class vh{constructor(e,t){this.Jt=e,this.Ts=t,this.docs=new Wl(vc.comparator),this.size=0}addEntry(e,t,n){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ts(t);return this.docs=this.docs.insert(r,{document:t.clone(),size:o,readTime:n}),this.size+=o-s,this.Jt.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Ku.resolve(n?n.document.clone():Pc.newInvalidDocument(t))}getEntries(e,t){let n=eu();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.clone():Pc.newInvalidDocument(e))})),Ku.resolve(n)}getDocumentsMatchingQuery(e,t,n){let r=eu();const i=new vc(t.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i,readTime:o}}=s.getNext();if(!t.path.isPrefixOf(e.path))break;o.compareTo(n)<=0||ul(t,i)&&(r=r.insert(i.key,i.clone()))}return Ku.resolve(r)}Es(e,t){return Ku.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new wh(this)}getSize(e){return Ku.resolve(this.size)}}class wh extends class{constructor(){this.changes=new rh((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}getReadTime(e){const t=this.changes.get(e);return t?t.readTime:Za.min()}addEntry(e,t){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:t})}removeEntry(e,t=null){this.assertNotApplied(),this.changes.set(e,{document:Pc.newInvalidDocument(e),readTime:t})}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Ku.resolve(n.document):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}{constructor(e){super(),this.De=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.document.isValidDocument()?t.push(this.De.addEntry(e,r.document,this.getReadTime(n))):this.De.removeEntry(n)})),Ku.waitFor(t)}getFromCache(e,t){return this.De.getEntry(e,t)}getAllFromCache(e,t){return this.De.getEntries(e,t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class bh{constructor(e){this.persistence=e,this.Is=new rh((e=>Mc(e)),Uc),this.lastRemoteSnapshotVersion=Za.min(),this.highestTargetId=0,this.As=0,this.Rs=new mh,this.targetCount=0,this.Ps=th.ie()}forEachTarget(e,t){return this.Is.forEach(((e,n)=>t(n))),Ku.resolve()}getLastRemoteSnapshotVersion(e){return Ku.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Ku.resolve(this.As)}allocateTargetId(e){return this.highestTargetId=this.Ps.next(),Ku.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.As&&(this.As=t),Ku.resolve()}ce(e){this.Is.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ps=new th(t),this.highestTargetId=t),e.sequenceNumber>this.As&&(this.As=e.sequenceNumber)}addTargetData(e,t){return this.ce(t),this.targetCount+=1,Ku.resolve()}updateTargetData(e,t){return this.ce(t),Ku.resolve()}removeTargetData(e,t){return this.Is.delete(t.target),this.Rs.us(t.targetId),this.targetCount-=1,Ku.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Is.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Is.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),Ku.waitFor(i).next((()=>r))}getTargetCount(e){return Ku.resolve(this.targetCount)}getTargetData(e,t){const n=this.Is.get(t)||null;return Ku.resolve(n)}addMatchingKeys(e,t,n){return this.Rs.rs(t,n),Ku.resolve()}removeMatchingKeys(e,t,n){this.Rs.cs(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Ku.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Rs.us(t),Ku.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Rs.ls(t);return Ku.resolve(n)}containsKey(e,t){return Ku.resolve(this.Rs.containsKey(t))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ih{constructor(e,t){this.bs={},this.Be=new Ga(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=e(this),this.He=new bh(this),this.Jt=new Zu,this.Je=function(e,t){return new vh(e,t)}(this.Jt,(e=>this.referenceDelegate.vs(e))),this.k=new Xu(t),this.Ye=new ph(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(e){let t=this.bs[e.toKey()];return t||(t=new yh(this.Jt,this.referenceDelegate),this.bs[e.toKey()]=t),t}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(e,t,n){Ra("MemoryPersistence","Starting transaction:",e);const r=new Th(this.Be.next());return this.referenceDelegate.Vs(),n(r).next((e=>this.referenceDelegate.Ss(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ds(e,t){return Ku.or(Object.values(this.bs).map((n=>()=>n.containsKey(e,t))))}}class Th extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}{constructor(e){super(),this.currentSequenceNumber=e}}class Eh{constructor(e){this.persistence=e,this.Cs=new mh,this.Ns=null}static ks(e){return new Eh(e)}get xs(){if(this.Ns)return this.Ns;throw Pa()}addReference(e,t,n){return this.Cs.addReference(n,t),this.xs.delete(n.toString()),Ku.resolve()}removeReference(e,t,n){return this.Cs.removeReference(n,t),this.xs.add(n.toString()),Ku.resolve()}markPotentiallyOrphaned(e,t){return this.xs.add(t.toString()),Ku.resolve()}removeTarget(e,t){this.Cs.us(t.targetId).forEach((e=>this.xs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.xs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Vs(){this.Ns=new Set}Ss(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ku.forEach(this.xs,(n=>{const r=vc.fromPath(n);return this.$s(e,r).next((e=>{e||t.removeEntry(r)}))})).next((()=>(this.Ns=null,t.apply(e))))}updateLimboDocument(e,t){return this.$s(e,t).next((e=>{e?this.xs.delete(t.toString()):this.xs.add(t.toString())}))}vs(e){return 0}$s(e,t){return Ku.or([()=>Ku.resolve(this.Cs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ds(e,t)])}}class _h{constructor(){this.activeTargetIds=au()}Ms(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ls(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class kh{constructor(){this.pi=new _h,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.pi.Ms(e),this.Ti[e]||"not-current"}updateQueryState(e,t,n){this.Ti[e]=t}removeLocalQueryTarget(e){this.pi.Ls(e)}isLocalQueryTarget(e){return this.pi.activeTargetIds.has(e)}clearQueryState(e){delete this.Ti[e]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(e){return this.pi.activeTargetIds.has(e)}start(){return this.pi=new _h,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Sh{Ei(e){}shutdown(){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ah{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.Pi(),this.bi=[],this.vi()}Ei(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){Ra("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Pi(){Ra("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Ch={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Nh{constructor(e){this.Vi=e.Vi,this.Si=e.Si}Di(e){this.Ci=e}Ni(e){this.ki=e}onMessage(e){this.xi=e}close(){this.Si()}send(e){this.Vi(e)}$i(){this.Ci()}Fi(e){this.ki(e)}Oi(e){this.xi(e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Rh extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.Mi=t+"://"+e.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(e,t,n,r,i){const s=this.Ui(e,t);Ra("RestConnection","Sending: ",s,n);const o={};return this.qi(o,r,i),this.Ki(e,s,o,n).then((e=>(Ra("RestConnection","Received: ",e),e)),(t=>{throw $a("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}ji(e,t,n,r,i){return this.Bi(e,t,n,r,i)}qi(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Aa,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}Ui(e,t){const n=Ch[e];return`${this.Mi}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Ki(e,t,n,r){return new Promise(((i,s)=>{const o=new _a;o.listenOnce(va.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case ya.NO_ERROR:const t=o.getResponseJson();Ra("Connection","XHR received:",JSON.stringify(t)),i(t);break;case ya.TIMEOUT:Ra("Connection",'RPC "'+e+'" timed out'),s(new Ua(Ma.DEADLINE_EXCEEDED,"Request time out"));break;case ya.HTTP_ERROR:const n=o.getStatus();if(Ra("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Ma).indexOf(t)>=0?t:Ma.UNKNOWN}(e.status);s(new Ua(t,e.message))}else s(new Ua(Ma.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new Ua(Ma.UNAVAILABLE,"Connection failed."));break;default:Pa()}}finally{Ra("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}Qi(e,t,n){const r=[this.Mi,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=new ha,s=is(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Ta({})),this.qi(o.initMessageHeaders,t,n),lt()||ht()||ct().indexOf("Electron/")>=0||dt()||ct().indexOf("MSAppHost/")>=0||ut()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");Ra("Connection","Creating WebChannel: "+a,o);const c=i.createWebChannel(a,o);let l=!1,u=!1;const h=new Nh({Vi:e=>{u?Ra("Connection","Not sending because WebChannel is closed:",e):(l||(Ra("Connection","Opening WebChannel transport."),c.open(),l=!0),Ra("Connection","WebChannel sending:",e),c.send(e))},Si:()=>c.close()}),d=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return d(c,Ea.EventType.OPEN,(()=>{u||Ra("Connection","WebChannel transport opened.")})),d(c,Ea.EventType.CLOSE,(()=>{u||(u=!0,Ra("Connection","WebChannel transport closed"),h.Fi())})),d(c,Ea.EventType.ERROR,(e=>{u||(u=!0,$a("Connection","WebChannel transport errored:",e),h.Fi(new Ua(Ma.UNAVAILABLE,"The operation could not be completed")))})),d(c,Ea.EventType.MESSAGE,(e=>{var t;if(!u){const n=e.data[0];xa(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){Ra("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=Hl[e];if(void 0!==t)return Gl(t)}(e),n=i.message;void 0===t&&(t=Ma.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),u=!0,h.Fi(new Ua(t,n)),c.close()}else Ra("Connection","WebChannel received:",n),h.Oi(n)}})),d(s,wa.STAT_EVENT,(e=>{e.stat===ba?Ra("Connection","Detected buffering proxy"):e.stat===Ia&&Ra("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.$i()}),0),h}}function Dh(){return"undefined"!=typeof document?document:null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function $h(e){return new wu(e,!0)}class Oh{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Oe=e,this.timerId=t,this.Wi=n,this.Gi=r,this.zi=i,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(e){this.cancel();const t=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),r=Math.max(0,t-n);r>0&&Ra("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Hi} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Ji=this.Oe.enqueueAfterDelay(this.timerId,r,(()=>(this.Yi=Date.now(),e()))),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ph{constructor(e,t,n,r,i,s,o,a){this.Oe=e,this.nr=n,this.sr=r,this.ir=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.rr=0,this.ar=null,this.cr=null,this.stream=null,this.ur=new Oh(e,t)}hr(){return 1===this.state||5===this.state||this.lr()}lr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&null===this.ar&&(this.ar=this.Oe.enqueueAfterDelay(this.nr,6e4,(()=>this.mr())))}gr(e){this.yr(),this.stream.send(e)}async mr(){if(this.lr())return this.close(0)}yr(){this.ar&&(this.ar.cancel(),this.ar=null)}pr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,t){this.yr(),this.pr(),this.ur.cancel(),this.rr++,4!==e?this.ur.reset():t&&t.code===Ma.RESOURCE_EXHAUSTED?(Da(t.toString()),Da("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):t&&t.code===Ma.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Tr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ni(t)}Tr(){}auth(){this.state=1;const e=this.Er(this.rr),t=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.rr===t&&this.Ir(e,n)}),(t=>{e((()=>{const e=new Ua(Ma.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Ar(e)}))}))}Ir(e,t){const n=this.Er(this.rr);this.stream=this.Rr(e,t),this.stream.Di((()=>{n((()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.sr,1e4,(()=>(this.lr()&&(this.state=3),Promise.resolve()))),this.listener.Di())))})),this.stream.Ni((e=>{n((()=>this.Ar(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}dr(){this.state=5,this.ur.Zi((async()=>{this.state=0,this.start()}))}Ar(e){return Ra("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Er(e){return t=>{this.Oe.enqueueAndForget((()=>this.rr===e?t():(Ra("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class xh extends Ph{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.k=i}Rr(e,t){return this.ir.Qi("Listen",e,t)}onMessage(e){this.ur.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Pa()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.C?(xa(void 0===t||"string"==typeof t),cc.fromBase64String(t||"")):(xa(void 0===t||t instanceof Uint8Array),cc.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?Ma.UNKNOWN:Gl(e.code);return new Ua(t,e.message||"")}(o);n=new du(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Au(e,r.document.name),s=Eu(r.document.updateTime),o=new $c({mapValue:{fields:r.document.fields}}),a=Pc.newFoundDocument(i,s,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new uu(c,l,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Au(e,r.document),s=r.readTime?Eu(r.readTime):Za.min(),o=Pc.newNoDocument(i,s),a=r.removedTargetIds||[];n=new uu([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Au(e,r.document),s=r.removedTargetIds||[];n=new uu([],s,i,null)}else{if(!("filter"in t))return Pa();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new zl(r),s=e.targetId;n=new hu(s,i)}}return n}(this.k,e),n=function(e){if(!("targetChange"in e))return Za.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Za.min():t.readTime?Eu(t.readTime):Za.min()}(e);return this.listener.Pr(t,n)}br(e){const t={};t.database=Nu(this.k),t.addTarget=function(e,t){let n;const r=t.target;return n=Fc(r)?{documents:$u(e,r)}:{query:Ou(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=Iu(e,t.resumeToken):t.snapshotVersion.compareTo(Za.min())>0&&(n.readTime=bu(e,t.snapshotVersion.toTimestamp())),n}(this.k,e);const n=function(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Pa()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.k,e);n&&(t.labels=n),this.gr(t)}vr(e){const t={};t.database=Nu(this.k),t.removeTarget=e,this.gr(t)}}class Lh extends Ph{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.k=i,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(e,t){return this.ir.Qi("Write",e,t)}onMessage(e){if(xa(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Vr){this.ur.reset();const t=function(e,t){return e&&e.length>0?(xa(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Eu(e.updateTime):Eu(t);return n.isEqual(Za.min())&&(n=Eu(t)),new Cl(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=Eu(e.commitTime);return this.listener.Cr(n,t)}return xa(!e.writeResults||0===e.writeResults.length),this.Vr=!0,this.listener.Nr()}kr(){const e={};e.database=Nu(this.k),this.gr(e)}Dr(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>function(e,t){let n;if(t instanceof Ml)n={update:Du(e,t.key,t.value)};else if(t instanceof ql)n={delete:Su(e,t.key)};else if(t instanceof Ul)n={update:Du(e,t.key,t.data),updateMask:zu(t.fieldMask)};else{if(!(t instanceof Bl))return Pa();n={verify:Su(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof bl)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Il)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof El)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof kl)return{fieldPath:t.field.canonicalString(),increment:n.N};throw Pa()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Tu(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Pa()}(e,t.precondition)),n}(this.k,e)))};this.gr(t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Mh extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.ir=n,this.k=r,this.$r=!1}Fr(){if(this.$r)throw new Ua(Ma.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(e,t,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.ir.Bi(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Ma.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Ua(Ma.UNKNOWN,e.toString())}))}ji(e,t,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.ir.ji(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Ma.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Ua(Ma.UNKNOWN,e.toString())}))}terminate(){this.$r=!0}}class Uh{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Or=0,this.Mr=null,this.Lr=!0}Br(){0===this.Or&&(this.Ur("Unknown"),this.Mr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Mr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve()))))}Kr(e){"Online"===this.state?this.Ur("Unknown"):(this.Or++,this.Or>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Ur("Offline")))}set(e){this.jr(),this.Or=0,"Online"===e&&(this.Lr=!1),this.Ur(e)}Ur(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}qr(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(Da(t),this.Lr=!1):Ra("OnlineStateTracker",t)}jr(){null!==this.Mr&&(this.Mr.cancel(),this.Mr=null)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Fh{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=i,this.Hr.Ei((e=>{n.enqueueAndForget((async()=>{Wh(this)&&(Ra("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=La(e);t.Gr.add(4),await jh(t),t.Jr.set("Unknown"),t.Gr.delete(4),await Vh(t)}(this))}))})),this.Jr=new Uh(n,r)}}async function Vh(e){if(Wh(e))for(const t of e.zr)await t(!0)}async function jh(e){for(const t of e.zr)await t(!1)}function qh(e,t){const n=La(e);n.Wr.has(t.targetId)||(n.Wr.set(t.targetId,t),Gh(n)?Kh(n):ud(n).lr()&&zh(n,t))}function Bh(e,t){const n=La(e),r=ud(n);n.Wr.delete(t),r.lr()&&Hh(n,t),0===n.Wr.size&&(r.lr()?r._r():Wh(n)&&n.Jr.set("Unknown"))}function zh(e,t){e.Yr.X(t.targetId),ud(e).br(t)}function Hh(e,t){e.Yr.X(t),ud(e).vr(t)}function Kh(e){e.Yr=new pu({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.Wr.get(t)||null}),ud(e).start(),e.Jr.Br()}function Gh(e){return Wh(e)&&!ud(e).hr()&&e.Wr.size>0}function Wh(e){return 0===La(e).Gr.size}function Jh(e){e.Yr=void 0}async function Qh(e){e.Wr.forEach(((t,n)=>{zh(e,t)}))}async function Xh(e,t){Jh(e),Gh(e)?(e.Jr.Kr(t),Kh(e)):e.Jr.set("Unknown")}async function Yh(e,t,n){if(e.Jr.set("Online"),t instanceof du&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Wr.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Wr.delete(r),e.Yr.removeTarget(r))}(e,t)}catch(n){Ra("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Zh(e,n)}else if(t instanceof uu?e.Yr.ot(t):t instanceof hu?e.Yr.dt(t):e.Yr.ut(t),!n.isEqual(Za.min()))try{const t=await lh(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Yr.gt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Wr.get(r);i&&e.Wr.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.Wr.get(t);if(!n)return;e.Wr.set(t,n.withResumeToken(cc.EMPTY_BYTE_STRING,n.snapshotVersion)),Hh(e,t);const r=new Qu(n.target,t,1,n.sequenceNumber);zh(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Ra("RemoteStore","Failed to raise snapshot:",t),await Zh(e,t)}}async function Zh(e,t,n){if(!Gu(t))throw t;e.Gr.add(1),await jh(e),e.Jr.set("Offline"),n||(n=()=>lh(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Ra("RemoteStore","Retrying IndexedDB access"),await n(),e.Gr.delete(1),await Vh(e)}))}function ed(e,t){return t().catch((n=>Zh(e,n,t)))}async function td(e){const t=La(e),n=hd(t);let r=t.Qr.length>0?t.Qr[t.Qr.length-1].batchId:-1;for(;nd(t);)try{const e=await hh(t.localStore,r);if(null===e){0===t.Qr.length&&n._r();break}r=e.batchId,rd(t,e)}catch(e){await Zh(t,e)}id(t)&&sd(t)}function nd(e){return Wh(e)&&e.Qr.length<10}function rd(e,t){e.Qr.push(t);const n=hd(e);n.lr()&&n.Sr&&n.Dr(t.mutations)}function id(e){return Wh(e)&&!hd(e).hr()&&e.Qr.length>0}function sd(e){hd(e).start()}async function od(e){hd(e).kr()}async function ad(e){const t=hd(e);for(const n of e.Qr)t.Dr(n.mutations)}async function cd(e,t,n){const r=e.Qr.shift(),i=Ju.from(r,t,n);await ed(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await td(e)}async function ld(e,t){t&&hd(e).Sr&&await async function(e,t){if(function(e){switch(e){default:return Pa();case Ma.CANCELLED:case Ma.UNKNOWN:case Ma.DEADLINE_EXCEEDED:case Ma.RESOURCE_EXHAUSTED:case Ma.INTERNAL:case Ma.UNAVAILABLE:case Ma.UNAUTHENTICATED:return!1;case Ma.INVALID_ARGUMENT:case Ma.NOT_FOUND:case Ma.ALREADY_EXISTS:case Ma.PERMISSION_DENIED:case Ma.FAILED_PRECONDITION:case Ma.ABORTED:case Ma.OUT_OF_RANGE:case Ma.UNIMPLEMENTED:case Ma.DATA_LOSS:return!0}}(n=t.code)&&n!==Ma.ABORTED){const n=e.Qr.shift();hd(e).wr(),await ed(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await td(e)}var n}(e,t),id(e)&&sd(e)}function ud(e){return e.Xr||(e.Xr=function(e,t,n){const r=La(e);return r.Fr(),new xh(t,r.ir,r.authCredentials,r.appCheckCredentials,r.k,n)
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}(e.datastore,e.asyncQueue,{Di:Qh.bind(null,e),Ni:Xh.bind(null,e),Pr:Yh.bind(null,e)}),e.zr.push((async t=>{t?(e.Xr.wr(),Gh(e)?Kh(e):e.Jr.set("Unknown")):(await e.Xr.stop(),Jh(e))}))),e.Xr}function hd(e){return e.Zr||(e.Zr=function(e,t,n){const r=La(e);return r.Fr(),new Lh(t,r.ir,r.authCredentials,r.appCheckCredentials,r.k,n)}(e.datastore,e.asyncQueue,{Di:od.bind(null,e),Ni:ld.bind(null,e),Nr:ad.bind(null,e),Cr:cd.bind(null,e)}),e.zr.push((async t=>{t?(e.Zr.wr(),await td(e)):(await e.Zr.stop(),e.Qr.length>0&&(Ra("RemoteStore",`Stopping write stream with ${e.Qr.length} pending writes`),e.Qr=[]))}))),e.Zr
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class dd{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Fa,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new dd(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Ua(Ma.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fd(e,t){if(Da("AsyncQueue",`${t}: ${e}`),Gu(e))return new Ua(Ma.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class pd{constructor(e){this.comparator=e?(t,n)=>e(t,n)||vc.comparator(t.key,n.key):(e,t)=>vc.comparator(e.key,t.key),this.keyedMap=nu(),this.sortedSet=new Wl(this.comparator)}static emptySet(e){return new pd(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof pd))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new pd;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class md{constructor(){this.eo=new Wl(vc.comparator)}track(e){const t=e.doc.key,n=this.eo.get(t);n?0!==e.type&&3===n.type?this.eo=this.eo.insert(t,e):3===e.type&&1!==n.type?this.eo=this.eo.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.eo=this.eo.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.eo=this.eo.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.eo=this.eo.remove(t):1===e.type&&2===n.type?this.eo=this.eo.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.eo=this.eo.insert(t,{type:2,doc:e.doc}):Pa():this.eo=this.eo.insert(t,e)}no(){const e=[];return this.eo.inorderTraversal(((t,n)=>{e.push(n)})),e}}class gd{constructor(e,t,n,r,i,s,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const i=[];return t.forEach((e=>{i.push({type:0,doc:e})})),new gd(e,t,pd.emptySet(t),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&al(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class yd{constructor(){this.so=void 0,this.listeners=[]}}class vd{constructor(){this.queries=new rh((e=>cl(e)),al),this.onlineState="Unknown",this.io=new Set}}function wd(e,t){const n=La(e);let r=!1;for(const e of t){const t=e.query,i=n.queries.get(t);if(i){for(const t of i.listeners)t.oo(e)&&(r=!0);i.so=e}}r&&Id(n)}function bd(e,t,n){const r=La(e),i=r.queries.get(t);if(i)for(const e of i.listeners)e.onError(n);r.queries.delete(t)}function Id(e){e.io.forEach((e=>{e.next()}))}class Td{constructor(e,t,n){this.query=e,this.ao=t,this.co=!1,this.uo=null,this.onlineState="Unknown",this.options=n||{}}oo(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new gd(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.co?this.ho(e)&&(this.ao.next(e),t=!0):this.lo(e,this.onlineState)&&(this.fo(e),t=!0),this.uo=e,t}onError(e){this.ao.error(e)}ro(e){this.onlineState=e;let t=!1;return this.uo&&!this.co&&this.lo(this.uo,e)&&(this.fo(this.uo),t=!0),t}lo(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return!(this.options.wo&&n||e.docs.isEmpty()&&"Offline"!==t)}ho(e){if(e.docChanges.length>0)return!0;const t=this.uo&&this.uo.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}fo(e){e=gd.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.co=!0,this.ao.next(e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ed{constructor(e){this.key=e}}class _d{constructor(e){this.key=e}}class kd{constructor(e,t){this.query=e,this.To=t,this.Eo=null,this.current=!1,this.Io=su(),this.mutatedKeys=su(),this.Ao=hl(e),this.Ro=new pd(this.Ao)}get Po(){return this.To}bo(e,t){const n=t?t.vo:new md,r=t?t.Ro:this.Ro;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=rl(this.query)&&r.size===this.query.limit?r.last():null,c=il(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const l=r.get(e),u=ul(this.query,t)?t:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.Vo(l,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Ao(u,a)>0||c&&this.Ao(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(u?(s=s.add(u),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),rl(this.query)||il(this.query))for(;s.size>this.query.limit;){const e=rl(this.query)?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Ro:s,vo:n,Bn:o,mutatedKeys:i}}Vo(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Ro;this.Ro=e.Ro,this.mutatedKeys=e.mutatedKeys;const i=e.vo.no();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Pa()}};return n(e)-n(t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e.type,t.type)||this.Ao(e.doc,t.doc))),this.So(n);const s=t?this.Do():[],o=0===this.Io.size&&this.current?1:0,a=o!==this.Eo;return this.Eo=o,0!==i.length||a?{snapshot:new gd(this.query,e.Ro,r,i,e.mutatedKeys,0===o,a,!1),Co:s}:{Co:s}}ro(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new md,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(e){return!this.To.has(e)&&!!this.Ro.has(e)&&!this.Ro.get(e).hasLocalMutations}So(e){e&&(e.addedDocuments.forEach((e=>this.To=this.To.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.To=this.To.delete(e))),this.current=e.current)}Do(){if(!this.current)return[];const e=this.Io;this.Io=su(),this.Ro.forEach((e=>{this.No(e.key)&&(this.Io=this.Io.add(e.key))}));const t=[];return e.forEach((e=>{this.Io.has(e)||t.push(new _d(e))})),this.Io.forEach((n=>{e.has(n)||t.push(new Ed(n))})),t}ko(e){this.To=e.zn,this.Io=su();const t=this.bo(e.documents);return this.applyChanges(t,!0)}xo(){return gd.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,0===this.Eo)}}class Sd{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Ad{constructor(e){this.key=e,this.$o=!1}}class Cd{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Fo={},this.Oo=new rh((e=>cl(e)),al),this.Mo=new Map,this.Lo=new Set,this.Bo=new Wl(vc.comparator),this.Uo=new Map,this.qo=new mh,this.Ko={},this.jo=new Map,this.Qo=th.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return!0===this.Wo}}async function Nd(e,t){const n=function(e){const t=La(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=$d.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Kd.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Pd.bind(null,t),t.Fo.Pr=wd.bind(null,t.eventManager),t.Fo.zo=bd.bind(null,t.eventManager),t}(e);let r,i;const s=n.Oo.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.xo();else{const e=await function(e,t){const n=La(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.He.getTargetData(e,t).next((i=>i?(r=i,Ku.resolve(r)):n.He.allocateTargetId(e).next((i=>(r=new Qu(t,i,0,e.currentSequenceNumber),n.He.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.qn.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qn=n.qn.insert(e.targetId,e),n.Kn.set(t,e.targetId)),e}))}(n.localStore,ol(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await async function(e,t,n,r){e.Go=(t,n,r)=>async function(e,t,n,r){let i=t.view.bo(n);i.Bn&&(i=await fh(e.localStore,t.query,!1).then((({documents:e})=>t.view.bo(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return jd(e,t.targetId,o.Co),o.snapshot}(e,t,n,r);const i=await fh(e.localStore,t,!0),s=new kd(t,i.zn),o=s.bo(i.documents),a=lu.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=s.applyChanges(o,e.isPrimaryClient,a);jd(e,n,c.Co);const l=new Sd(t,n,s);return e.Oo.set(t,l),e.Mo.has(n)?e.Mo.get(n).push(t):e.Mo.set(n,[t]),c.snapshot}(n,t,r,"current"===s),n.isPrimaryClient&&qh(n.remoteStore,e)}return i}async function Rd(e,t){const n=La(e),r=n.Oo.get(t),i=n.Mo.get(r.targetId);if(i.length>1)return n.Mo.set(r.targetId,i.filter((e=>!al(e,t)))),void n.Oo.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await dh(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Bh(n.remoteStore,r.targetId),Fd(n,r.targetId)})).catch(nh)):(Fd(n,r.targetId),await dh(n.localStore,r.targetId,!0))}async function Dd(e,t,n){const r=function(e){const t=La(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=xd.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Ld.bind(null,t),t}(e);try{const e=await function(e,t){const n=La(e),r=Ya.now(),i=t.reduce(((e,t)=>e.add(t.key)),su());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>n.Wn.vn(e,i).next((i=>{s=i;const o=[];for(const e of t){const t=Pl(e,s.get(e.key));null!=t&&o.push(new Ul(e.key,t,Oc(t.value.mapValue),Nl.exists(!0)))}return n.An.addMutationBatch(e,r,o,t)})))).then((e=>(e.applyToLocalDocumentSet(s),{batchId:e.batchId,changes:s})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Ko[e.currentUser.toKey()];r||(r=new Wl(Qa)),r=r.insert(t,n),e.Ko[e.currentUser.toKey()]=r}(r,e.batchId,n),await zd(r,e.changes),await td(r.remoteStore)}catch(e){const t=fd(e,"Failed to persist write");n.reject(t)}}async function $d(e,t){const n=La(e);try{const e=await uh(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Uo.get(t);r&&(xa(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.$o=!0:e.modifiedDocuments.size>0?xa(r.$o):e.removedDocuments.size>0&&(xa(r.$o),r.$o=!1))})),await zd(n,e,t)}catch(e){await nh(e)}}function Od(e,t,n){const r=La(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Oo.forEach(((n,r)=>{const i=r.view.ro(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=La(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.ro(t)&&(r=!0)})),r&&Id(n)}(r.eventManager,t),e.length&&r.Fo.Pr(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Pd(e,t,n){const r=La(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Uo.get(t),s=i&&i.key;if(s){let e=new Wl(vc.comparator);e=e.insert(s,Pc.newNoDocument(s,Za.min()));const n=su().add(s),i=new cu(Za.min(),new Map,new Xl(Qa),e,n);await $d(r,i),r.Bo=r.Bo.remove(s),r.Uo.delete(t),Bd(r)}else await dh(r.localStore,t,!1).then((()=>Fd(r,t,n))).catch(nh)}async function xd(e,t){const n=La(e),r=t.batch.batchId;try{const e=await function(e,t){const n=La(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Qn.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Ku.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);xa(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&r.addEntry(t,n.commitVersion))}))})),o.next((()=>e.An.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.An.performConsistencyCheck(e))).next((()=>n.Wn.vn(e,r)))}))}(n.localStore,t);Ud(n,r,null),Md(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await zd(n,e)}catch(e){await nh(e)}}async function Ld(e,t,n){const r=La(e);try{const e=await function(e,t){const n=La(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.An.lookupMutationBatch(e,t).next((t=>(xa(null!==t),r=t.keys(),n.An.removeMutationBatch(e,t)))).next((()=>n.An.performConsistencyCheck(e))).next((()=>n.Wn.vn(e,r)))}))}(r.localStore,t);Ud(r,t,n),Md(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await zd(r,e)}catch(n){await nh(n)}}function Md(e,t){(e.jo.get(t)||[]).forEach((e=>{e.resolve()})),e.jo.delete(t)}function Ud(e,t,n){const r=La(e);let i=r.Ko[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Ko[r.currentUser.toKey()]=i}}function Fd(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Mo.get(t))e.Oo.delete(r),n&&e.Fo.zo(r,n);e.Mo.delete(t),e.isPrimaryClient&&e.qo.us(t).forEach((t=>{e.qo.containsKey(t)||Vd(e,t)}))}function Vd(e,t){e.Lo.delete(t.path.canonicalString());const n=e.Bo.get(t);null!==n&&(Bh(e.remoteStore,n),e.Bo=e.Bo.remove(t),e.Uo.delete(n),Bd(e))}function jd(e,t,n){for(const r of n)r instanceof Ed?(e.qo.addReference(r.key,t),qd(e,r)):r instanceof _d?(Ra("SyncEngine","Document no longer in limbo: "+r.key),e.qo.removeReference(r.key,t),e.qo.containsKey(r.key)||Vd(e,r.key)):Pa()}function qd(e,t){const n=t.key,r=n.path.canonicalString();e.Bo.get(n)||e.Lo.has(r)||(Ra("SyncEngine","New document in limbo: "+n),e.Lo.add(r),Bd(e))}function Bd(e){for(;e.Lo.size>0&&e.Bo.size<e.maxConcurrentLimboResolutions;){const t=e.Lo.values().next().value;e.Lo.delete(t);const n=new vc(ic.fromString(t)),r=e.Qo.next();e.Uo.set(r,new Ad(n)),e.Bo=e.Bo.insert(n,r),qh(e.remoteStore,new Qu(ol(nl(n.path)),r,2,Ga.I))}}async function zd(e,t,n){const r=La(e),i=[],s=[],o=[];r.Oo.isEmpty()||(r.Oo.forEach(((e,a)=>{o.push(r.Go(a,t,n).then((e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),i.push(e);const t=sh.$n(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.Fo.Pr(i),await async function(e,t){const n=La(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Ku.forEach(t,(t=>Ku.forEach(t.kn,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Ku.forEach(t.xn,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!Gu(e))throw e;Ra("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.qn.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.qn=n.qn.insert(t,i)}}}(r.localStore,s))}async function Hd(e,t){const n=La(e);if(!n.currentUser.isEqual(t)){Ra("SyncEngine","User change. New user:",t.toKey());const e=await ch(n.localStore,t);n.currentUser=t,function(e,t){e.jo.forEach((e=>{e.forEach((e=>{e.reject(new Ua(Ma.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),e.jo.clear()}(n),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await zd(n,e.Gn)}}function Kd(e,t){const n=La(e),r=n.Uo.get(t);if(r&&r.$o)return su().add(r.key);{let e=su();const r=n.Mo.get(t);if(!r)return e;for(const t of r){const r=n.Oo.get(t);e=e.unionWith(r.view.Po)}return e}}class Gd{constructor(){this.synchronizeTabs=!1}async initialize(e){this.k=$h(e.databaseInfo.databaseId),this.sharedClientState=this.Jo(e),this.persistence=this.Yo(e),await this.persistence.start(),this.gcScheduler=this.Xo(e),this.localStore=this.Zo(e)}Xo(e){return null}Zo(e){return function(e,t,n,r){return new ah(e,t,n,r)}(this.persistence,new oh,e.initialUser,this.k)}Yo(e){return new Ih(Eh.ks,this.k)}Jo(e){return new kh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Wd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Od(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Hd.bind(null,this.syncEngine),await async function(e,t){const n=La(e);t?(n.Gr.delete(2),await Vh(n)):t||(n.Gr.add(2),await jh(n),n.Jr.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new vd}createDatastore(e){const t=$h(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Rh(r));var r;return function(e,t,n,r){return new Mh(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>Od(this.syncEngine,e,0),s=Ah.bt()?new Ah:new Sh,new Fh(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new Cd(e,t,n,r,i,s);return o&&(a.Wo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=La(e);Ra("RemoteStore","RemoteStore shutting down."),t.Gr.add(5),await jh(t),t.Hr.shutdown(),t.Jr.set("Unknown")}(this.remoteStore)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Jd{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ea(this.observer.next,e)}error(e){this.observer.error?this.ea(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}na(){this.muted=!0}ea(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Qd{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Sa.UNAUTHENTICATED,this.clientId=Ja.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Ra("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(()=>Promise.resolve()))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ua(Ma.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fa;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=fd(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Xd(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){return e.offlineComponents||(Ra("FirestoreClient","Using default OfflineComponentProvider"),await async function(e,t){e.asyncQueue.verifyOperationInProgress(),Ra("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await ch(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}(e,new Gd)),e.offlineComponents}(e);Ra("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>async function(e,t){const n=La(e);n.asyncQueue.verifyOperationInProgress(),Ra("RemoteStore","RemoteStore received new credentials");const r=Wh(n);n.Gr.add(3),await jh(n),r&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Gr.delete(3),await Vh(n)}(t.remoteStore,e))),e.onlineComponents=t}async function Yd(e){return e.onlineComponents||(Ra("FirestoreClient","Using default OnlineComponentProvider"),await Xd(e,new Wd)),e.onlineComponents}async function Zd(e){const t=await Yd(e),n=t.eventManager;return n.onListen=Nd.bind(null,t.syncEngine),n.onUnlisten=Rd.bind(null,t.syncEngine),n}function ef(e,t,n={}){const r=new Fa;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new Jd({next:s=>{t.enqueueAndForget((()=>async function(e,t){const n=La(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new Ua(Ma.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new Ua(Ma.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new Td(nl(n.path),s,{includeMetadataChanges:!0,wo:!0});return async function(e,t){const n=La(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new yd),i)try{s.so=await n.onListen(r)}catch(e){const n=fd(e,`Initialization of query '${ll(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.ro(n.onlineState),s.so&&t.oo(s.so)&&Id(n)}(e,o)}(await Zd(e),e.asyncQueue,t,n,r))),r.promise}class tf{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class nf{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof nf&&e.projectId===this.projectId&&e.database===this.database}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const rf=new Map;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function sf(e,t,n){if(!n)throw new Ua(Ma.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function of(e){if(!vc.isDocumentKey(e))throw new Ua(Ma.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function af(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Pa()}function cf(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Ua(Ma.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=af(e);throw new Ua(Ma.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class lf{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new Ua(Ma.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Ua(Ma.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new Ua(Ma.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class uf{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lf({}),this._settingsFrozen=!1,e instanceof nf?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Ua(Ma.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new nf(e.options.projectId)}(e))}get app(){if(!this._app)throw new Ua(Ma.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Ua(Ma.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lf(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new ja;switch(e.type){case"gapi":const t=e.client;return xa(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new za(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new Ua(Ma.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=rf.get(e);t&&(Ra("ComponentProvider","Removing Datastore"),rf.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class hf{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ff(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new hf(this.firestore,e,this._key)}}class df{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new df(this.firestore,e,this._query)}}class ff extends df{constructor(e,t,n){super(e,t,nl(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new hf(this.firestore,null,new vc(e))}withConverter(e){return new ff(this.firestore,e,this._path)}}function pf(e,t,...n){if(e=_t(e),1===arguments.length&&(t=Ja.A()),sf("doc","path",t),e instanceof uf){const r=ic.fromString(t,...n);return of(r),new hf(e,null,new vc(r))}{if(!(e instanceof hf||e instanceof ff))throw new Ua(Ma.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ic.fromString(t,...n));return of(r),new hf(e.firestore,e instanceof ff?e.converter:null,new vc(r))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class mf{constructor(){this.ma=Promise.resolve(),this.ga=[],this.ya=!1,this.pa=[],this.Ta=null,this.Ea=!1,this.Ia=!1,this.Aa=[],this.ur=new Oh(this,"async_queue_retry"),this.Ra=()=>{const e=Dh();e&&Ra("AsyncQueue","Visibility state changed to "+e.visibilityState),this.ur.er()};const e=Dh();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Ra)}get isShuttingDown(){return this.ya}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pa(),this.ba(e)}enterRestrictedMode(e){if(!this.ya){this.ya=!0,this.Ia=e||!1;const t=Dh();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Ra)}}enqueue(e){if(this.Pa(),this.ya)return new Promise((()=>{}));const t=new Fa;return this.ba((()=>this.ya&&this.Ia?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.ga.push(e),this.va())))}async va(){if(0!==this.ga.length){try{await this.ga[0](),this.ga.shift(),this.ur.reset()}catch(e){if(!Gu(e))throw e;Ra("AsyncQueue","Operation failed with retryable error: "+e)}this.ga.length>0&&this.ur.Zi((()=>this.va()))}}ba(e){const t=this.ma.then((()=>(this.Ea=!0,e().catch((e=>{this.Ta=e,this.Ea=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e);throw Da("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Ea=!1,e))))));return this.ma=t,t}enqueueAfterDelay(e,t,n){this.Pa(),this.Aa.indexOf(e)>-1&&(t=0);const r=dd.createAndSchedule(this,e,t,n,(e=>this.Va(e)));return this.pa.push(r),r}Pa(){this.Ta&&Pa()}verifyOperationInProgress(){}async Sa(){let e;do{e=this.ma,await e}while(e!==this.ma)}Da(e){for(const t of this.pa)if(t.timerId===e)return!0;return!1}Ca(e){return this.Sa().then((()=>{this.pa.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.pa)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Sa()}))}Na(e){this.Aa.push(e)}Va(e){const t=this.pa.indexOf(e);this.pa.splice(t,1)}}class gf extends uf{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new mf,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||vf(this),this._firestoreClient.terminate()}}function yf(e){return e._firestoreClient||vf(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function vf(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new tf(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Qd(e._authCredentials,e._appCheckCredentials,e._queue,r)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class wf{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Ua(Ma.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new oc(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class bf{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bf(cc.fromBase64String(e))}catch(e){throw new Ua(Ma.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new bf(cc.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class If{constructor(e){this._methodName=e}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Tf{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Ua(Ma.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Ua(Ma.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Qa(this._lat,e._lat)||Qa(this._long,e._long)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Ef=/^__.*__$/;class _f{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Ul(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ml(e,this.data,t,this.fieldTransforms)}}class kf{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Ul(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Sf(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Pa()}}class Af{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.k=n,this.ignoreUndefinedProperties=r,void 0===i&&this.ka(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get xa(){return this.settings.xa}$a(e){return new Af(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Fa(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.$a({path:n,Oa:!1});return r.Ma(e),r}La(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.$a({path:n,Oa:!1});return r.ka(),r}Ba(e){return this.$a({path:void 0,Oa:!0})}Ua(e){return Ff(e,this.settings.methodName,this.settings.qa||!1,this.path,this.settings.Ka)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}ka(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ma(this.path.get(e))}Ma(e){if(0===e.length)throw this.Ua("Document fields must not be empty");if(Sf(this.xa)&&Ef.test(e))throw this.Ua('Document fields cannot begin and end with "__"')}}class Cf{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.k=n||$h(e)}ja(e,t,n,r=!1){return new Af({xa:e,methodName:t,Ka:n,path:oc.emptyPath(),Oa:!1,qa:r},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function Nf(e){const t=e._freezeSettings(),n=$h(e._databaseId);return new Cf(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Rf(e,t,n,r,i,s={}){const o=e.ja(s.merge||s.mergeFields?2:0,t,n,i);xf("Data must be an object, but it was:",o,r);const a=Of(r,o);let c,l;if(s.merge)c=new ac(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=Lf(t,r,n);if(!o.contains(i))throw new Ua(Ma.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Vf(e,i)||e.push(i)}c=new ac(e),l=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,l=o.fieldTransforms;return new _f(new $c(a),c,l)}class Df extends If{_toFieldTransform(e){if(2!==e.xa)throw 1===e.xa?e.Ua(`${this._methodName}() can only appear at the top level of your update data`):e.Ua(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Df}}function $f(e,t){if(Pf(e=_t(e)))return xf("Unsupported field value:",t,e),Of(e,t);if(e instanceof If)return function(e,t){if(!Sf(t.xa))throw t.Ua(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Ua(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Oa&&4!==t.xa)throw t.Ua("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=$f(i,t.Ba(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=_t(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return ml(t.k,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Ya.fromDate(e);return{timestampValue:bu(t.k,n)}}if(e instanceof Ya){const n=new Ya(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:bu(t.k,n)}}if(e instanceof Tf)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof bf)return{bytesValue:Iu(t.k,e._byteString)};if(e instanceof hf){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Ua(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:_u(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Ua(`Unsupported field value: ${af(e)}`)}(e,t)}function Of(e,t){const n={};return nc(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):tc(e,((e,r)=>{const i=$f(r,t.Fa(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Pf(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Ya||e instanceof Tf||e instanceof bf||e instanceof hf||e instanceof If)}function xf(e,t,n){if(!Pf(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=af(n);throw"an object"===r?t.Ua(e+" a custom object"):t.Ua(e+" "+r)}}function Lf(e,t,n){if((t=_t(t))instanceof wf)return t._internalPath;if("string"==typeof t)return Uf(e,t);throw Ff("Field path arguments must be of type string or FieldPath.",e,!1,void 0,n)}const Mf=new RegExp("[~\\*/\\[\\]]");function Uf(e,t,n){if(t.search(Mf)>=0)throw Ff(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new wf(...t.split("."))._internalPath}catch(r){throw Ff(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Ff(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Ua(Ma.INVALID_ARGUMENT,a+e+c)}function Vf(e,t){return e.some((e=>e.isEqual(t)))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class jf{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new hf(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new qf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Bf("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class qf extends jf{data(){return super.data()}}function Bf(e,t){return"string"==typeof t?Uf(e,t):t instanceof wf?t._internalPath:t._delegate._internalPath}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class zf{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Hf extends jf{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Kf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Bf("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Kf extends Hf{data(e={}){return super.data(e)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Gf(e){e=cf(e,hf);const t=cf(e.firestore,gf);return ef(yf(t),e._key).then((n=>function(e,t,n){const r=n.docs.get(t._key),i=new Wf(e);return new Hf(e,i,t._key,r,new zf(n.hasPendingWrites,n.fromCache),t.converter)}(t,e,n)))}class Wf extends class{convertValue(e,t="none"){switch(wc(e)){case 0:return null;case 1:return e.booleanValue;case 2:return hc(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(dc(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Pa()}}convertObject(e,t){const n={};return tc(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Tf(hc(e.latitude),hc(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=pc(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(mc(e));default:return null}}convertTimestamp(e){const t=uc(e);return new Ya(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ic.fromString(e);xa(Hu(n));const r=new nf(n.get(1),n.get(3)),i=new vc(n.popFirst(5));return r.isEqual(t)||Da(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */{constructor(e){super(),this.firestore=e}convertBytes(e){return new bf(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new hf(this.firestore,null,t)}}function Jf(e,t,n,...r){e=cf(e,hf);const i=cf(e.firestore,gf),s=Nf(i);let o;return o="string"==typeof(t=_t(t))||t instanceof wf?function(e,t,n,r,i,s){const o=e.ja(1,t,n),a=[Lf(t,r,n)],c=[i];if(s.length%2!=0)throw new Ua(Ma.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)a.push(Lf(t,s[e])),c.push(s[e+1]);const l=[],u=$c.empty();for(let e=a.length-1;e>=0;--e)if(!Vf(l,a[e])){const t=a[e];let n=c[e];n=_t(n);const r=o.La(t);if(n instanceof Df)l.push(t);else{const e=$f(n,r);null!=e&&(l.push(t),u.set(t,e))}}const h=new ac(l);return new kf(u,h,o.fieldTransforms)}(s,"updateDoc",e._key,t,n,r):function(e,t,n,r){const i=e.ja(1,t,n);xf("Data must be an object, but it was:",i,r);const s=[],o=$c.empty();tc(r,((e,r)=>{const a=Uf(t,e,n);r=_t(r);const c=i.La(a);if(r instanceof Df)s.push(a);else{const e=$f(r,c);null!=e&&(s.push(a),o.set(a,e))}}));const a=new ac(s);return new kf(o,a,i.fieldTransforms)}(s,"updateDoc",e._key,t),Qf(i,[o.toMutation(e._key,Nl.exists(!0))])}function Qf(e,t){return function(e,t){const n=new Fa;return e.asyncQueue.enqueueAndForget((async()=>Dd(await function(e){return Yd(e).then((e=>e.syncEngine))}(e),t,n))),n.promise}(yf(e),t)}
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
function Xf(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function Yf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}!function(e,t=!0){Aa="9.6.1",zt(new kt("firestore",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=new gf(r,new qa(e.getProvider("auth-internal")),new Ka(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),i._setSettings(n),i}),"PUBLIC")),Qt(ka,"3.4.1",e),Qt(ka,"3.4.1","esm2017")}();const Zf=Yf,ep=new pt("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),tp=new Pt("@firebase/auth");function np(e,...t){tp.logLevel<=Nt.ERROR&&tp.error(`Auth (9.6.1): ${e}`,...t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function rp(e,...t){throw sp(e,...t)}function ip(e,...t){return sp(e,...t)}function sp(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return ep.create(e,...t)}function op(e,t,...n){if(!e)throw sp(t,...n)}function ap(e){const t="INTERNAL ASSERTION FAILED: "+e;throw np(t),new Error(t)}function cp(e,t){e||ap(t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const lp=new Map;function up(e){cp(e instanceof Function,"Expected a class definition");let t=lp.get(e);return t?(cp(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,lp.set(e,t),t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function hp(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function dp(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function fp(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==dp()&&"https:"!==dp()&&!ut()&&!("connection"in navigator)||navigator.onLine}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class pp{constructor(e,t){this.shortDelay=e,this.longDelay=t,cp(t>e,"Short delay should be less than long delay!"),this.isMobile=lt()||ht()}get(){return fp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function mp(e,t){cp(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class gp{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void ap("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void ap("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void ap("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const yp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},vp=new pp(3e4,6e4);
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function wp(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function bp(e,t,n,r,i={}){return Ip(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=vt(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),gp.fetch()(Ep(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Ip(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},yp),t);try{const t=new _p(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw kp(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw kp(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw kp(e,"email-already-in-use",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw function(e,t,n){const r=Object.assign(Object.assign({},Zf()),{[t]:n});return new pt("auth","Firebase",r).create(t,{appName:e.name})}(e,a,o);rp(e,a)}}catch(t){if(t instanceof ft)throw t;rp(e,"network-request-failed")}}async function Tp(e,t,n,r,i={}){const s=await bp(e,t,n,r,i);return"mfaPendingCredential"in s&&rp(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Ep(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?mp(e.config,i):`${e.config.apiScheme}://${i}`}class _p{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(ip(this.auth,"timeout"))),vp.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function kp(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ip(e,t,r);return i.customData._tokenResponse=n,i}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Sp(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}function Ap(e){return 1e3*Number(e)}function Cp(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return np("JWT malformed, contained fewer than 3 sections"),null;try{const e=function(e){try{return ot.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null}(n);return e?JSON.parse(e):(np("Failed to decode base64 JWT payload"),null)}catch(e){return np("Caught error parsing JWT payload as JSON",e),null}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function Np(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof ft&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Rp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Dp{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Sp(this.lastLoginAt),this.creationTime=Sp(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function $p(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Np(e,async function(e,t){return bp(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));op(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=Xf(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const u=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Dp(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Op{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){op(e.idToken,"internal-error"),op(void 0!==e.idToken,"internal-error"),op(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Cp(e);return op(t,"internal-error"),op(void 0!==t.exp,"internal-error"),op(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return op(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function(e,t){const n=await Ip(e,{},(async()=>{const n=vt({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=Ep(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",gp.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new Op;return n&&(op("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(op("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(op("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Op,this.toJSON())}_performRefresh(){return ap("not implemented")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Pp(e,t){op("string"==typeof e||void 0===e,"internal-error",{appName:t})}class xp{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Xf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Rp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new Dp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Np(this,this.stsTokenManager.getToken(this.auth,e));return op(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=_t(e),r=await n.getIdToken(t),i=Cp(r);op(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Sp(Ap(i.auth_time)),issuedAtTime:Sp(Ap(i.iat)),expirationTime:Sp(Ap(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=_t(e);await $p(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(op(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new xp(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){op(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await $p(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Np(this,async function(e,t){return bp(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:I,stsTokenManager:T}=t;op(v&&T,e,"internal-error");const E=Op.fromJSON(this.name,T);op("string"==typeof v,e,"internal-error"),Pp(u,e.name),Pp(h,e.name),op("boolean"==typeof w,e,"internal-error"),op("boolean"==typeof b,e,"internal-error"),Pp(d,e.name),Pp(f,e.name),Pp(p,e.name),Pp(m,e.name),Pp(g,e.name),Pp(y,e.name);const _=new xp({uid:v,auth:e,email:h,emailVerified:w,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:g,lastLoginAt:y});return I&&Array.isArray(I)&&(_.providerData=I.map((e=>Object.assign({},e)))),m&&(_._redirectEventId=m),_}static async _fromIdTokenResponse(e,t,n=!1){const r=new Op;r.updateFromServerResponse(t);const i=new xp({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await $p(i),i}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Lp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Lp.type="NONE";const Mp=Lp;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Up(e,t,n){return`firebase:${e}:${t}:${n}`}class Fp{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Up(this.userKey,r.apiKey,i),this.fullPersistenceKey=Up("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xp._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Fp(up(Mp),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||up(Mp);const s=Up(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const r=xp._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new Fp(i,e,n)):new Fp(i,e,n)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Vp(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(zp(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(jp(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Kp(t))return"Blackberry";if(Gp(t))return"Webos";if(qp(t))return"Safari";if((t.includes("chrome/")||Bp(t))&&!t.includes("edge/"))return"Chrome";if(Hp(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function jp(e=ct()){return/firefox\//i.test(e)}function qp(e=ct()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Bp(e=ct()){return/crios\//i.test(e)}function zp(e=ct()){return/iemobile/i.test(e)}function Hp(e=ct()){return/android/i.test(e)}function Kp(e=ct()){return/blackberry/i.test(e)}function Gp(e=ct()){return/webos/i.test(e)}function Wp(e=ct()){return/iphone|ipad|ipod/i.test(e)}function Jp(e=ct()){return Wp(e)||Hp(e)||Gp(e)||Kp(e)||/windows phone/i.test(e)||zp(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Qp(e,t=[]){let n;switch(e){case"Browser":n=Vp(ct());break;case"Worker":n=`${Vp(ct())}-${e}`;break;default:n=e}return`${n}/JsCore/9.6.1/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Xp{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zp(this),this.idTokenSubscription=new Zp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ep,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=up(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Fp.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);r&&r!==i||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(op(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await $p(e)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?_t(e):null;return t&&op(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&op(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(up(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new pt("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&up(e)||this._popupRedirectResolver;op(t,this,"argument-error"),this.redirectPersistenceManager=await Fp.create(this,[up(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return op(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return op(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function Yp(e){return _t(e)}class Zp{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new It(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return op(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class em{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ap("not implemented")}_getIdTokenResponse(e){return ap("not implemented")}_linkToIdToken(e,t){return ap("not implemented")}_getReauthenticationResolver(e){return ap("not implemented")}}async function tm(e,t){return async function(e,t){return bp(e,"POST","/v1/accounts:sendOobCode",wp(e,t))}(e,t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class nm extends em{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new nm(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new nm(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
return async function(e,t){return Tp(e,"POST","/v1/accounts:signInWithPassword",wp(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Tp(e,"POST","/v1/accounts:signInWithEmailLink",wp(e,t))}(e,{email:this._email,oobCode:this._password});default:rp(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return async function(e,t){return bp(e,"POST","/v1/accounts:update",t)}(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Tp(e,"POST","/v1/accounts:signInWithEmailLink",wp(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:rp(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function rm(e,t){return Tp(e,"POST","/v1/accounts:signInWithIdp",wp(e,t))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class im extends em{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new im(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):rp("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Xf(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new im(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return rm(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,rm(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,rm(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=vt(t)}return e}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class sm{constructor(e){var t,n,r,i,s,o;const a=wt(bt(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);op(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=wt(bt(e)).link,n=t?wt(bt(t)).deep_link_id:null,r=wt(bt(e)).deep_link_id;return(r?wt(bt(r)).link:null)||r||n||t||e}(e);try{return new sm(t)}catch(e){return null}}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class om{constructor(){this.providerId=om.PROVIDER_ID}static credential(e,t){return nm._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=sm.parseLink(t);return op(n,"argument-error"),nm._fromEmailAndCode(e,n.code,n.tenantId)}}om.PROVIDER_ID="password",om.EMAIL_PASSWORD_SIGN_IN_METHOD="password",om.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class am{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class cm extends am{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class lm extends cm{constructor(){super("facebook.com")}static credential(e){return im._fromParams({providerId:lm.PROVIDER_ID,signInMethod:lm.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lm.credentialFromTaggedObject(e)}static credentialFromError(e){return lm.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return lm.credential(e.oauthAccessToken)}catch(e){return null}}}lm.FACEBOOK_SIGN_IN_METHOD="facebook.com",lm.PROVIDER_ID="facebook.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class um extends cm{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return im._fromParams({providerId:um.PROVIDER_ID,signInMethod:um.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return um.credentialFromTaggedObject(e)}static credentialFromError(e){return um.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return um.credential(t,n)}catch(e){return null}}}um.GOOGLE_SIGN_IN_METHOD="google.com",um.PROVIDER_ID="google.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class hm extends cm{constructor(){super("github.com")}static credential(e){return im._fromParams({providerId:hm.PROVIDER_ID,signInMethod:hm.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hm.credentialFromTaggedObject(e)}static credentialFromError(e){return hm.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return hm.credential(e.oauthAccessToken)}catch(e){return null}}}hm.GITHUB_SIGN_IN_METHOD="github.com",hm.PROVIDER_ID="github.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class dm extends cm{constructor(){super("twitter.com")}static credential(e,t){return im._fromParams({providerId:dm.PROVIDER_ID,signInMethod:dm.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return dm.credentialFromTaggedObject(e)}static credentialFromError(e){return dm.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return dm.credential(t,n)}catch(e){return null}}}dm.TWITTER_SIGN_IN_METHOD="twitter.com",dm.PROVIDER_ID="twitter.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class fm{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await xp._fromIdTokenResponse(e,n,r),s=pm(n);return new fm({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=pm(n);return new fm({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function pm(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class mm extends ft{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,mm.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new mm(e,t,n,r)}}function gm(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw mm._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function ym(e,t,n=!1){const r="signIn",i=await gm(e,r,t),s=await fm._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function vm(e,t,n){const r=Yp(e),i=await
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function(e,t){return Tp(e,"POST","/v1/accounts:signUp",wp(e,t))}(r,{returnSecureToken:!0,email:t,password:n}),s=await fm._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function wm(e,t,n){return async function(e,t){return ym(Yp(e),t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(_t(e),om.credential(t,n))}async function bm(e,t){const n=_t(e),r={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&function(e,t,n){var r;op((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),op(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(op(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(op(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}(n.auth,r,t);const{email:i}=await tm(n.auth,r);i!==e.email&&await e.reload()}function Im(e){return _t(e).signOut()}const Tm="__sak";
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Em{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Tm,"1"),this.storage.removeItem(Tm),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class _m extends Em{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=ct();return qp(e)||Wp(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Jp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);dt()&&10===document.documentMode&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}_m.type="LOCAL";const km=_m;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Sm extends Em{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Sm.type="SESSION";const Am=Sm;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Cm{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Cm(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Nm(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */Cm.receivers=[];class Rm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Nm("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Dm(){return window}
/**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function $m(){return void 0!==Dm().WorkerGlobalScope&&"function"==typeof Dm().importScripts}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Om="firebaseLocalStorageDb",Pm="firebaseLocalStorage",xm="fbase_key";class Lm{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Mm(e,t){return e.transaction([Pm],t?"readwrite":"readonly").objectStore(Pm)}function Um(){const e=indexedDB.open(Om,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Pm,{keyPath:xm})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Pm)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Om);return new Lm(e).toPromise()}(),t(await Um()))}))}))}async function Fm(e,t,n){const r=Mm(e,!0).put({[xm]:t,value:n});return new Lm(r).toPromise()}function Vm(e,t){const n=Mm(e,!0).delete(t);return new Lm(n).toPromise()}class jm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Um()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $m()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cm._getInstance($m()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Rm(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&function(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Um();return await Fm(e,Tm,"1"),await Vm(e,Tm),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Fm(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Mm(e,!1).get(t),r=await new Lm(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Vm(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Mm(e,!1).getAll();return new Lm(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}jm.type="LOCAL";const qm=jm;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Bm(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=ip("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",function(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}().appendChild(r)}))}new pp(3e4,6e4);
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class zm extends em{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return rm(e,this._buildIdpRequest())}_linkToIdToken(e,t){return rm(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return rm(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Hm(e){return ym(e.auth,new zm(e),e.bypassAuthState)}function Km(e){const{auth:t,user:n}=e;return op(n,t,"internal-error"),
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Np(e,gm(r,i,t,e),n);op(s.idToken,r,"internal-error");const o=Cp(s.idToken);op(o,r,"internal-error");const{sub:a}=o;return op(e.uid===a,r,"user-mismatch"),fm._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&rp(r,"user-mismatch"),e}}(n,new zm(e),e.bypassAuthState)}async function Gm(e){const{auth:t,user:n}=e;return op(n,t,"internal-error"),async function(e,t,n=!1){const r=await Np(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return fm._forOperation(e,"link",r)}(n,new zm(e),e.bypassAuthState)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Wm{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Hm;case"linkViaPopup":case"linkViaRedirect":return Gm;case"reauthViaPopup":case"reauthViaRedirect":return Km;default:rp(this.auth,"internal-error")}}resolve(e){cp(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cp(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Jm=new pp(2e3,1e4);class Qm extends Wm{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Qm.currentPopupAction&&Qm.currentPopupAction.cancel(),Qm.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return op(e,this.auth,"internal-error"),e}async onExecution(){cp(1===this.filter.length,"Popup operations only handle one event");const e=Nm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(ip(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(ip(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qm.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(ip(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Jm.get())};e()}}Qm.currentPopupAction=null;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Xm="pendingRedirect",Ym=new Map;class Zm extends Wm{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Ym.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return Up(Xm,e.config.apiKey,e.name)}(t),r=function(e){return up(e._redirectPersistence)}(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Ym.set(this.auth._key(),e)}return this.bypassAuthState||Ym.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function eg(e,t,n=!1){const r=Yp(e),i=
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function(e,t){return t?up(t):(op(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(r,t),s=new Zm(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class tg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rg(e);default:return!1}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!rg(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(ip(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ng(e))}saveEventToCache(e){this.cachedEventUids.add(ng(e)),this.lastProcessedEventTime=Date.now()}}function ng(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function rg({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const ig=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sg=/^https?/;async function og(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return bp(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(ag(e))return}catch(e){}rp(e,"unauthorized-domain")}function ag(e){const t=hp(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!sg.test(n))return!1;if(ig.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const cg=new pp(3e4,6e4);function lg(){const e=Dm().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function ug(e){return new Promise(((t,n)=>{var r,i,s;function o(){lg(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{lg(),n(ip(e,"network-request-failed"))},timeout:cg.get()})}if(null===(i=null===(r=Dm().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Dm().gapi)||void 0===s?void 0:s.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Dm()[t]=()=>{gapi.load?o():n(ip(e,"network-request-failed"))},Bm(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw hg=null,e}))}let hg=null;
/**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const dg=new pp(5e3,15e3),fg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mg(e){const t=e.config;op(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?mp(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:Wt},i=pg.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${vt(r).slice(1)}`}async function gg(e){const t=await function(e){return hg=hg||ug(e),hg}(e),n=Dm().gapi;return op(n,e,"internal-error"),t.open({where:document.body,url:mg(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fg,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=ip(e,"network-request-failed"),s=Dm().setTimeout((()=>{r(i)}),dg.get());function o(){Dm().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const yg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class vg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function wg(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},yg),{width:r.toString(),height:i.toString(),top:s,left:o}),l=ct().toLowerCase();n&&(a=Bp(l)?"_blank":n),jp(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=ct()){var t;return Wp(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t||"",a),new vg(null);const h=window.open(t||"",a,u);op(h,e,"popup-blocked");try{h.focus()}catch(e){}return new vg(h)}const bg="__/auth/handler",Ig="emulator/auth/handler";function Tg(e,t,n,r,i,s){op(e.config.authDomain,e,"auth-domain-config-required"),op(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Wt,eventId:i};if(t instanceof am){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof cm){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${bg}`;return mp(e,Ig)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)}?${vt(a).slice(1)}`}const Eg="webStorageSupport";const _g=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Am,this._completeRedirectFn=eg}async _openPopup(e,t,n,r){var i;cp(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return wg(e,Tg(e,t,n,hp(),r),Nm())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=Tg(e,t,n,hp(),r),Dm().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(cp(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await gg(e),n=new tg(e);return t.register("authEvent",(t=>{op(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Eg,{type:Eg},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),rp(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=og(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Jp()||qp()||Wp()}};var kg,Sg="@firebase/auth",Ag="0.19.4";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Cg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){op(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Ng(e=Jt()){const t=Ht(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=Ht(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(gt(n.getOptions(),null!=t?t:{}))return e;rp(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:_g,persistence:[qm,km,Am]})}function Rg(e){e?setTimeout((()=>{window.location.href="/"}),e):window.location.href="/"}kg="Browser",zt(new kt("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:i}=n.options;return(e=>{op(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),op(!(null==i?void 0:i.includes(":")),"argument-error",{appName:e.name});const n={apiKey:r,authDomain:i,clientPlatform:kg,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qp(kg)},s=new Xp(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(up);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),zt(new kt("auth-internal",(e=>(e=>new Cg(e))(Yp(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),Qt(Sg,Ag,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(kg)),Qt(Sg,Ag,"esm2017");const Dg={email:"",numGames:0,avgWPM:0,matchHistory:[],matchHistoryTime:[],uid:""};function $g(e){return e.split("/")[1].slice(0,-2)}let Og,Pg,xg;const Lg=window.sessionStorage,Mg="user",Ug="leaderboard",Fg="userinfo",Vg={easyGamesFailed:0,easyGamesWon:0,easyLPM:0,easyWPM:0,hardGamesFailed:0,hardGamesWon:0,hardLPM:0,hardWPM:0,mediumGamesFailed:0,mediumGamesWon:0,mediumLPM:0,mediumWPM:0};function jg(){Og=function(e,t={}){"object"!=typeof t&&(t={name:t});const n=Object.assign({name:Ft,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw Kt.create("bad-app-name",{appName:String(r)});const i=jt.get(r);if(i){if(gt(e,i.options)&&gt(n,i.config))return i;throw Kt.create("duplicate-app",{appName:r})}const s=new Ct(r);for(const e of qt.values())s.addComponent(e);const o=new Gt(e,n,s);return jt.set(r,o),o}({apiKey:"AIzaSyAcfFLGAnLbwIUCfyCYgayBl2oPvbu5RFQ",authDomain:"perfect-type.firebaseapp.com",projectId:"perfect-type",storageBucket:"perfect-type.appspot.com",messagingSenderId:"358376646912",appId:"1:358376646912:web:d750e4f6970556a8072be5",measurementId:"G-MDGFNKMNEC"}),ur(Og),Pg=Ng(),xg=function(e=Jt()){return Ht(e,"firestore").getImmediate()}()}function qg(){const e=Lg.getItem(Mg);return null==e?null:e.length>0?JSON.parse(e):null}function Bg(){return null!=qg()}async function zg(e,t,n){const r=pf(xg,e,t);return await function(e,t,n){e=cf(e,hf);const r=cf(e.firestore,gf),i=function(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}(e.converter,t,n);return Qf(r,[Rf(Nf(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,Nl.none())])}(r,n),n}async function Hg(e){const t=pf(xg,Ug,e);return(await Gf(t)).data()}async function Kg(e,t){const n=pf(xg,Fg,e);await Jf(n,t)}function Gg(e,{delay:n=0,duration:r=400,easing:i=t}={}){const s=+getComputedStyle(e).opacity;return{delay:n,duration:r,easing:i,css:e=>"opacity: "+e*s}}function Wg(e,t,n){const r=e.slice();return r[22]=t[n],r[24]=n,r}function Jg(e,t,n){const r=e.slice();return r[25]=t[n],r[24]=n,r}function Qg(e,t,n){const r=e.slice();return r[27]=t[n],r[29]=n,r}function Xg(e){let t,n;return t=new Ze({props:{winGame:e[3],wpm:e[4],tryAgain:e[7]}}),{c(){le(t.$$.fragment)},m(e,r){ue(t,e,r),n=!0},p(e,n){const r={};8&n&&(r.winGame=e[3]),16&n&&(r.wpm=e[4]),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function Yg(t){let n,r,i,o,a,c,l,u,h,d,f;n=new nt({props:{mode:t[5],changeMode:t[8]}});let p=t[0],m=[];for(let e=0;e<p.length;e+=1)m[e]=ey(Jg(t,p,e));let g=[...Array(10).keys()],y=[];for(let e=0;e<g.length;e+=1)y[e]=ty(Wg(t,g,e));return{c(){le(n.$$.fragment),r=C(),i=S("span"),o=C(),a=S("div");for(let e=0;e<m.length;e+=1)m[e].c();c=C();for(let e=0;e<y.length;e+=1)y[e].c();l=C(),u=S("div"),D(i,"id","tracker"),D(i,"class","svelte-76rrt3"),D(a,"class","game-environment noselect svelte-76rrt3"),D(a,"id","game-env"),D(u,"id","occlusion"),D(u,"class","svelte-76rrt3")},m(p,g){ue(n,p,g),E(p,r,g),E(p,i,g),E(p,o,g),E(p,a,g);for(let e=0;e<m.length;e+=1)m[e].m(a,null);b(a,c);for(let e=0;e<y.length;e+=1)y[e].m(a,null);var v;E(p,l,g),E(p,u,g),h=!0,d||(v=t[6].call(null,a),f=v&&s(v.destroy)?v.destroy:e,d=!0)},p(e,t){const r={};if(32&t&&(r.mode=e[5]),n.$set(r),3&t){let n;for(p=e[0],n=0;n<p.length;n+=1){const r=Jg(e,p,n);m[n]?m[n].p(r,t):(m[n]=ey(r),m[n].c(),m[n].m(a,c))}for(;n<m.length;n+=1)m[n].d(1);m.length=p.length}},i(e){h||(ie(n.$$.fragment,e),h=!0)},o(e){se(n.$$.fragment,e),h=!1},d(e){he(n,e),e&&_(r),e&&_(i),e&&_(o),e&&_(a),k(m,e),k(y,e),e&&_(l),e&&_(u),d=!1,f()}}}function Zg(e){let t,n,r,i=e[27]+"";return{c(){t=S("div"),n=A(i),D(t,"class","game-letter svelte-76rrt3"),D(t,"id",r=e[24]-1<0?`${e[29]}`:`${e[1][e[24]-1]+e[29]}`)},m(e,r){E(e,t,r),b(t,n)},p(e,s){1&s&&i!==(i=e[27]+"")&&$(n,i),2&s&&r!==(r=e[24]-1<0?`${e[29]}`:`${e[1][e[24]-1]+e[29]}`)&&D(t,"id",r)},d(e){e&&_(t)}}}function ey(e){let t,n,r=0!=e[24]&&function(e){let t,n,r;return{c(){t=S("div"),n=A(" "),D(t,"class","game-letter svelte-76rrt3"),D(t,"id",r=""+(e[1][e[24]-1]-1))},m(e,r){E(e,t,r),b(t,n)},p(e,n){2&n&&r!==(r=""+(e[1][e[24]-1]-1))&&D(t,"id",r)},d(e){e&&_(t)}}}(e),i=e[25],s=[];for(let t=0;t<i.length;t+=1)s[t]=Zg(Qg(e,i,t));return{c(){t=S("div"),r&&r.c(),n=C();for(let e=0;e<s.length;e+=1)s[e].c();D(t,"class","game-word svelte-76rrt3")},m(e,i){E(e,t,i),r&&r.m(t,null),b(t,n);for(let e=0;e<s.length;e+=1)s[e].m(t,null)},p(e,n){if(0!=e[24]&&r.p(e,n),3&n){let r;for(i=e[25],r=0;r<i.length;r+=1){const o=Qg(e,i,r);s[r]?s[r].p(o,n):(s[r]=Zg(o),s[r].c(),s[r].m(t,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=i.length}},d(e){e&&_(t),r&&r.d(),k(s,e)}}}function ty(e){let t;return{c(){t=S("div"),t.innerHTML='<div class="game-letter invisible-letter svelte-76rrt3">if you see this sentence, you&#39;re awesome</div> \n        '},m(e,n){E(e,t,n)},d(e){e&&_(t)}}}function ny(e){let t,n,r,i,s;const o=[Yg,Xg],a=[];function c(e,t){return e[2]?1:0}return n=c(e),r=a[n]=o[n](e),{c(){t=S("main"),r.c()},m(e,r){E(e,t,r),a[n].m(t,null),s=!0},p(e,[i]){let s=n;n=c(e),n===s?a[n].p(e,i):(ne(),se(a[s],1,1,(()=>{a[s]=null})),re(),r=a[n],r?r.p(e,i):(r=a[n]=o[n](e),r.c()),ie(r,1),r.m(t,null))},i(e){s||(ie(r),i||K((()=>{i=ae(t,Gg,{}),i.start()})),s=!0)},o(e){se(r),s=!1},d(e){e&&_(t),a[n].d()}}}function ry(e,t,n){let r=Bg(),{currentRoute:i}=t,{params:s}=t;Array.prototype.random=function(){return this[Math.floor(Math.random()*this.length)]};let o,a=u(),c=a.split(" "),l=[];for(let e=0;e<c.length;e++)l.push(e-1<0?c[e].length+1:c[e].length+l[e-1]+1);function u(){let e=5;return Ge.subscribe((t=>{e=t})),st(e).join(" ")}Ke.subscribe((e=>{o=e}));let h=!1,d=!1,f=0,p=0,m=0;function g(){f=0,p=0,Ke.update((()=>0)),n(2,h=!1),n(3,d=!1),a=u(),n(0,c=a.split(" ")),n(1,l=[]);for(let e=0;e<c.length;e++)l.push(e-1<0?c[e].length+1:c[e].length+l[e-1]+1);n(5,y),b()}let y="easy";const v={easy:5,medium:20,hard:50};let w=null;async function b(){await(H(),B),w=document.getElementById("tracker");let e=document.getElementById(0).getBoundingClientRect();w.style.top=e.bottom-50+"px",w.style.left=e.left+.5+"px",w.style.width=e.width+.75+"px"}return window.onresize=b,U((()=>{b()})),e.$$set=e=>{"currentRoute"in e&&n(9,i=e.currentRoute),"params"in e&&n(10,s=e.params)},[c,l,h,d,m,y,function(){const e=e=>{if(e.preventDefault(),!h){if(0==f&&(f=new Date),a.charAt(o)!==e.key){if(n(2,h=!0),r){let e=y+"GamesFailed";(async function(e,t){const n=pf(xg,Fg,e);return(await Gf(n)).data()[t]})(qg().uid,e).then((t=>{let n={};n[e]=t+1,Kg(qg().uid,n)}))}}else!function(e){let t=document.getElementById(o);t.classList.add("typed-letter");let n=t.offsetLeft<p;n&&t.parentElement.scrollIntoView(!0);let r=document.getElementById(o+1);if(null!=r){let e=r.offsetLeft<t.offsetLeft;w.style.backgroundColor=e?"rgb(0, 0, 0, 0)":"var(--game-font-color)";let i=r.getBoundingClientRect();w.style.left=i.left+"px","&nbsp;"!=r.innerHTML?w.style.width="19.5px":n&&(w.style.width=i.width+8+"px")}p=t.offsetLeft}(),Ke.update((e=>e+1));if(o==a.length){let e=(new Date-f)/6e4,t=Math.round(a.length/e*1e3)/1e3;if(n(4,m=Math.round(c.length/e*1e3)/1e3),n(2,h=!0),n(3,d=!0),r){let e=y+"GamesWon",n=y+"LPM",r=y+"WPM";(async function(e,t,n,r){const i=pf(xg,Fg,e),s=(await Gf(i)).data(),o={};return o[t]=s[t],o[n]=s[n],o[r]=s[r],o})(qg().uid,e,n,r).then((i=>{let s={};s[e]=i[e]+1,s[n]=Math.round((i[n]*i[e]+t)/s[e]*1e3)/1e3,s[r]=Math.round((i[r]*i[e]+m)/s[e]*1e3)/1e3,Kg(qg().uid,s)}));let i=y+"_wpm";!async function(e,t,n){Hg(t).then((r=>{const i=[];let s=!1;for(let t=0;t<r.data.length;t++){if(!s){let o=JSON.parse(r.data[t]);if(n>o.score){let t=new Date,r=t.getDate(),o=t.getMonth()+1,a=t.getFullYear();i.push(JSON.stringify({user:e.email.substr(0,e.email.indexOf("@")),score:n,date:`${o}/${r}/${a}`})),s=!0}}s&&t==r.data.length-1||i.push(r.data[t])}s&&Jf(pf(xg,Ug,t),{data:i})}))}(qg(),i,m)}}}};return document.addEventListener("keypress",e),{destroy(){document.removeEventListener("keypress",e)}}},g,function(e){let t=document.getElementById(y);t.className=t.className.replace(" active-mode",""),document.getElementById(e.target.innerHTML).className+=" active-mode",n(5,y=e.target.innerHTML),Ge.update((()=>v[y]));for(let e=0;e<o;e++){document.getElementById(e).classList.remove("typed-letter")}g()},i,s]}function iy(t){let n,r,i,s,o,a,c;return{c(){n=S("div"),r=S("label"),i=A(t[1]),s=C(),o=S("input"),D(r,"for",t[2]),D(o,"id",t[2]),D(o,"type",t[4]),D(o,"name",t[2]),D(o,"autocomplete",t[3]),o.value=t[0],D(n,"class","input-container")},m(e,l){E(e,n,l),b(n,r),b(r,i),b(n,s),b(n,o),a||(c=R(o,"input",t[5]),a=!0)},p(e,[t]){2&t&&$(i,e[1]),4&t&&D(r,"for",e[2]),4&t&&D(o,"id",e[2]),16&t&&D(o,"type",e[4]),4&t&&D(o,"name",e[2]),8&t&&D(o,"autocomplete",e[3]),1&t&&o.value!==e[0]&&(o.value=e[0])},i:e,o:e,d(e){e&&_(n),a=!1,c()}}}function sy(e,t,n){let{value:r=""}=t,{text:i}=t,{id:s}=t,{autocomplete:o}=t,{type:a="text"}=t;return e.$$set=e=>{"value"in e&&n(0,r=e.value),"text"in e&&n(1,i=e.text),"id"in e&&n(2,s=e.id),"autocomplete"in e&&n(3,o=e.autocomplete),"type"in e&&n(4,a=e.type)},[r,i,s,o,a,e=>{n(0,r=e.target.value),function(e){let t=e.target.parentNode.querySelector("label");e.target.value.length>0?(t.style.top="-10px",t.style.fontSize="1em"):(t.style.top="10px",t.style.fontSize="1.5em")}(e)}]}class oy extends fe{constructor(e){super(),de(this,e,sy,iy,o,{value:0,text:1,id:2,autocomplete:3,type:4})}}function ay(e){let t,n,r,i,s,o,a,c,l,u,h,d,f,p,m,g,y,v,w,I,T,k;function A(t){e[9](t)}let $={text:"email",id:"email",type:"email",autocomplete:"email"};function O(t){e[10](t)}void 0!==e[1]&&($.value=e[1]),a=new oy({props:$}),V.push((()=>ce(a,"value",A)));let P={text:"password",id:"password",type:"password",autocomplete:"current-password"};function x(e,t){return e[4]?uy:ly}void 0!==e[2]&&(P.value=e[2]),u=new oy({props:P}),V.push((()=>ce(u,"value",O))),y=new Qe({props:{text:"login"}});let L=x(e),M=L(e);return{c(){t=S("form"),n=S("br"),r=C(),i=S("br"),s=C(),o=S("div"),le(a.$$.fragment),l=C(),le(u.$$.fragment),d=C(),f=S("br"),p=C(),m=S("br"),g=C(),le(y.$$.fragment),v=C(),M.c(),w=N(),D(o,"id","form-container")},m(c,h){E(c,t,h),b(t,n),b(t,r),b(t,i),b(t,s),b(t,o),ue(a,o,null),b(o,l),ue(u,o,null),b(t,d),b(t,f),b(t,p),b(t,m),b(t,g),ue(y,t,null),E(c,v,h),M.m(c,h),E(c,w,h),I=!0,T||(k=R(t,"submit",e[5]),T=!0)},p(e,t){const n={};!c&&2&t&&(c=!0,n.value=e[1],G((()=>c=!1))),a.$set(n);const r={};!h&&4&t&&(h=!0,r.value=e[2],G((()=>h=!1))),u.$set(r),L===(L=x(e))&&M?M.p(e,t):(M.d(1),M=L(e),M&&(M.c(),M.m(w.parentNode,w)))},i(e){I||(ie(a.$$.fragment,e),ie(u.$$.fragment,e),ie(y.$$.fragment,e),I=!0)},o(e){se(a.$$.fragment,e),se(u.$$.fragment,e),se(y.$$.fragment,e),I=!1},d(e){e&&_(t),he(a),he(u),he(y),e&&_(v),M.d(e),e&&_(w),T=!1,k()}}}function cy(t){let n;return{c(){n=S("p"),n.textContent="logged in! redirecting to main..."},m(e,t){E(e,n,t)},p:e,i:e,o:e,d(e){e&&_(n)}}}function ly(e){let t;return{c(){t=S("p"),D(t,"id","error-indicator"),D(t,"class","svelte-1v1ayny")},m(n,r){E(n,t,r),t.innerHTML=e[3]},p(e,n){8&n&&(t.innerHTML=e[3])},d(e){e&&_(t)}}}function uy(t){let n,r,i,s,o,a;return{c(){n=S("p"),r=A("Please verify your email! Click "),i=S("a"),i.textContent="here",s=A(" to send another link."),D(i,"href",""),D(n,"id","error-indicator"),D(n,"class","svelte-1v1ayny")},m(e,c){E(e,n,c),b(n,r),b(n,i),b(n,s),o||(a=R(i,"click",t[6]),o=!0)},p:e,d(e){e&&_(n),o=!1,a()}}}function hy(e){let t,n,r,i,s,o;const a=[cy,ay],c=[];function l(e,t){return e[0]?0:1}return i=l(e),s=c[i]=a[i](e),{c(){t=S("main"),n=S("h1"),n.textContent="login",r=C(),s.c()},m(e,s){E(e,t,s),b(t,n),b(t,r),c[i].m(t,null),o=!0},p(e,[n]){let r=i;i=l(e),i===r?c[i].p(e,n):(ne(),se(c[r],1,1,(()=>{c[r]=null})),re(),s=c[i],s?s.p(e,n):(s=c[i]=a[i](e),s.c()),ie(s,1),s.m(t,null))},i(e){o||(ie(s),o=!0)},o(e){se(s),o=!1},d(e){e&&_(t),c[i].d()}}}function dy(e,t,n){let r,i,s,{currentRoute:o}=t,{params:a}=t,c=!1,l="",u=!1;return e.$$set=e=>{"currentRoute"in e&&n(7,o=e.currentRoute),"params"in e&&n(8,a=e.params)},[c,r,i,l,u,function(e){e&&e.preventDefault(),async function(e,t){try{const n=await wm(Pg,e,t);return n.user.emailVerified?(Lg.setItem(Mg,JSON.stringify(n.user)),{success:!0}):{data:n.user,success:!1}}catch(e){return{message:$g(e.message),success:!1}}}(r,i).then((e=>{n(4,u=!1),e.success?(n(3,l=""),n(0,c=!0),Rg(1e3)):(s=e.data,e.data?(n(3,l=""),n(4,u=!0)):n(3,l=e.message))}))},function(){bm(s),n(4,u=!1)},o,a,function(e){r=e,n(1,r)},function(e){i=e,n(2,i)}]}function fy(e){let t,n,r,i,s,o,a,c,l,u,h,d,f,p,m,g,y,v,w,I,T,k,A,N,$;function O(t){e[8](t)}let P={text:"email",id:"email",type:"email",autocomplete:"email"};function x(t){e[9](t)}void 0!==e[1]&&(P.value=e[1]),n=new oy({props:P}),V.push((()=>ce(n,"value",O)));let L={text:"password",id:"password",type:"password",autocomplete:"new-password"};function M(t){e[10](t)}void 0!==e[2]&&(L.value=e[2]),u=new oy({props:L}),V.push((()=>ce(u,"value",x)));let U={text:"confirm password",id:"con-password",type:"password",autocomplete:"new-password"};return void 0!==e[3]&&(U.value=e[3]),f=new oy({props:U}),V.push((()=>ce(f,"value",M))),I=new Qe({props:{text:"signup"}}),{c(){t=S("form"),le(n.$$.fragment),i=C(),s=S("br"),o=C(),a=S("br"),c=C(),l=S("div"),le(u.$$.fragment),d=C(),le(f.$$.fragment),m=C(),g=S("br"),y=C(),v=S("br"),w=C(),le(I.$$.fragment),T=C(),k=S("p"),D(l,"id","form-container"),D(k,"id","error-indicator"),D(k,"class","svelte-1v1ayny")},m(r,h){E(r,t,h),ue(n,t,null),b(t,i),b(t,s),b(t,o),b(t,a),b(t,c),b(t,l),ue(u,l,null),b(l,d),ue(f,l,null),b(t,m),b(t,g),b(t,y),b(t,v),b(t,w),ue(I,t,null),E(r,T,h),E(r,k,h),k.innerHTML=e[4],A=!0,N||($=R(t,"submit",e[5]),N=!0)},p(e,t){const i={};!r&&2&t&&(r=!0,i.value=e[1],G((()=>r=!1))),n.$set(i);const s={};!h&&4&t&&(h=!0,s.value=e[2],G((()=>h=!1))),u.$set(s);const o={};!p&&8&t&&(p=!0,o.value=e[3],G((()=>p=!1))),f.$set(o),(!A||16&t)&&(k.innerHTML=e[4])},i(e){A||(ie(n.$$.fragment,e),ie(u.$$.fragment,e),ie(f.$$.fragment,e),ie(I.$$.fragment,e),A=!0)},o(e){se(n.$$.fragment,e),se(u.$$.fragment,e),se(f.$$.fragment,e),se(I.$$.fragment,e),A=!1},d(e){e&&_(t),he(n),he(u),he(f),he(I),e&&_(T),e&&_(k),N=!1,$()}}}function py(t){let n,r,i;return{c(){n=S("h1"),n.textContent="signed up! now just verify your email.",r=C(),i=S("h3"),i.innerHTML='once you&#39;ve done that, login <a href="/login">here</a>.'},m(e,t){E(e,n,t),E(e,r,t),E(e,i,t)},p:e,i:e,o:e,d(e){e&&_(n),e&&_(r),e&&_(i)}}}function my(e){let t,n,r,i,s,o;const a=[py,fy],c=[];function l(e,t){return e[0]?0:1}return i=l(e),s=c[i]=a[i](e),{c(){t=S("main"),n=S("h1"),n.textContent="sign up",r=C(),s.c()},m(e,s){E(e,t,s),b(t,n),b(t,r),c[i].m(t,null),o=!0},p(e,[n]){let r=i;i=l(e),i===r?c[i].p(e,n):(ne(),se(c[r],1,1,(()=>{c[r]=null})),re(),s=c[i],s?s.p(e,n):(s=c[i]=a[i](e),s.c()),ie(s,1),s.m(t,null))},i(e){o||(ie(s),o=!0)},o(e){se(s),o=!1},d(e){e&&_(t),c[i].d()}}}function gy(e,t,n){let r,i,s,{currentRoute:o}=t,{params:a}=t,c=!1,l="";return e.$$set=e=>{"currentRoute"in e&&n(6,o=e.currentRoute),"params"in e&&n(7,a=e.params)},[c,r,i,s,l,function(e){e&&e.preventDefault(),function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(r)?s===i?i.length<8?n(4,l="Passwords too short!"):async function(e,t){try{const n=await vm(Pg,e,t);await bm(n.user),await Im(Pg);let r=Object.assign({},Dg);return r.uid=n.user.uid,r.email=n.user.email,await zg("users",r.uid,r),await zg(Fg,r.uid,Vg),{success:!0}}catch(e){return{message:$g(e.message),success:!1}}}(r,i).then((e=>{e.success?(n(0,c=!0),n(4,l="")):n(4,l=e.message)})):n(4,l="Passwords do not match!"):n(4,l="Invalid email!")},o,a,function(e){r=e,n(1,r)},function(e){i=e,n(2,i)},function(e){s=e,n(3,s)}]}function yy(e){let t,n,r,i,s;const o=e[1].default,a=l(o,e,e[0],null),c=a||function(e){let t;return{c(){t=A("default card")},m(e,n){E(e,t,n)},d(e){e&&_(t)}}}();return{c(){t=S("main"),n=S("div"),r=S("div"),i=S("p"),c&&c.c(),D(r,"class","container svelte-1yx7glz"),D(n,"class","card svelte-1yx7glz")},m(e,o){E(e,t,o),b(t,n),b(n,r),b(r,i),c&&c.m(i,null),s=!0},p(e,[t]){a&&a.p&&(!s||1&t)&&d(a,o,e,e[0],s?h(o,e[0],t,null):f(e[0]),null)},i(e){s||(ie(c,e),s=!0)},o(e){se(c,e),s=!1},d(e){e&&_(t),c&&c.d(e)}}}function vy(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}class wy extends fe{constructor(e){super(),de(this,e,vy,yy,o,{})}}function by(e){let t,n,r,i;const s=e[1].default,o=l(s,e,e[0],null),a=o||function(e){let t;return{c(){t=A("place analytics cards here")},m(e,n){E(e,t,n)},d(e){e&&_(t)}}}();return{c(){t=S("main"),n=S("div"),a&&a.c(),D(n,"class","analytics-card-collection svelte-dnt7jz")},m(e,r){E(e,t,r),b(t,n),a&&a.m(n,null),i=!0},p(e,[t]){o&&o.p&&(!i||1&t)&&d(o,s,e,e[0],i?h(s,e[0],t,null):f(e[0]),null)},i(e){i||(ie(a,e),r||K((()=>{r=ae(n,Gg,{}),r.start()})),i=!0)},o(e){se(a,e),i=!1},d(e){e&&_(t),a&&a.d(e)}}}function Iy(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}class Ty extends fe{constructor(e){super(),de(this,e,Iy,by,o,{})}}function Ey(t){let n,r,i,s,o,a,c,l,u,h,d,f,p,m,g,y=`overall: ${Math.round(100*t[1])/100}${t[5]}`,v=`${Math.round(100*t[2])/100}${t[5]}`,w=`${Math.round(100*t[3])/100}${t[5]}`,I=`${Math.round(100*t[4])/100}${t[5]}`;return{c(){n=S("p"),r=A(y),i=C(),s=S("table"),o=S("tr"),o.innerHTML='<td class="heading svelte-zlvnl5">easy</td> \n        <td class="heading svelte-zlvnl5">medium</td> \n        <td class="heading svelte-zlvnl5">hard</td>',a=C(),c=S("tr"),l=S("td"),u=A(v),h=C(),d=S("td"),f=A(w),p=C(),m=S("td"),g=A(I),D(l,"class","svelte-zlvnl5"),D(d,"class","svelte-zlvnl5"),D(m,"class","svelte-zlvnl5"),D(s,"class","center-table svelte-zlvnl5")},m(e,t){E(e,n,t),b(n,r),E(e,i,t),E(e,s,t),b(s,o),b(s,a),b(s,c),b(c,l),b(l,u),b(c,h),b(c,d),b(d,f),b(c,p),b(c,m),b(m,g)},p(e,t){34&t&&y!==(y=`overall: ${Math.round(100*e[1])/100}${e[5]}`)&&$(r,y),36&t&&v!==(v=`${Math.round(100*e[2])/100}${e[5]}`)&&$(u,v),40&t&&w!==(w=`${Math.round(100*e[3])/100}${e[5]}`)&&$(f,w),48&t&&I!==(I=`${Math.round(100*e[4])/100}${e[5]}`)&&$(g,I)},i:e,o:e,d(e){e&&_(n),e&&_(i),e&&_(s)}}}function _y(e){let t;const n=e[7].default,r=l(n,e,e[6],null);return{c(){r&&r.c()},m(e,n){r&&r.m(e,n),t=!0},p(e,i){r&&r.p&&(!t||64&i)&&d(r,n,e,e[6],t?h(n,e[6],i,null):f(e[6]),null)},i(e){t||(ie(r,e),t=!0)},o(e){se(r,e),t=!1},d(e){r&&r.d(e)}}}function ky(e){let t,n,r,i,s,o,a;const c=[_y,Ey],l=[];function u(e,t){return null==e[1]?0:1}return s=u(e),o=l[s]=c[s](e),{c(){t=S("main"),n=S("h2"),r=A(e[0]),i=C(),o.c()},m(e,o){E(e,t,o),b(t,n),b(n,r),b(t,i),l[s].m(t,null),a=!0},p(e,[n]){(!a||1&n)&&$(r,e[0]);let i=s;s=u(e),s===i?l[s].p(e,n):(ne(),se(l[i],1,1,(()=>{l[i]=null})),re(),o=l[s],o?o.p(e,n):(o=l[s]=c[s](e),o.c()),ie(o,1),o.m(t,null))},i(e){a||(ie(o),a=!0)},o(e){se(o),a=!1},d(e){e&&_(t),l[s].d()}}}function Sy(e,t,n){let{$$slots:r={},$$scope:i}=t,{title:s}=t,{overall:o}=t,{easy:a}=t,{medium:c}=t,{hard:l}=t,{units:u}=t;return e.$$set=e=>{"title"in e&&n(0,s=e.title),"overall"in e&&n(1,o=e.overall),"easy"in e&&n(2,a=e.easy),"medium"in e&&n(3,c=e.medium),"hard"in e&&n(4,l=e.hard),"units"in e&&n(5,u=e.units),"$$scope"in e&&n(6,i=e.$$scope)},[s,o,a,c,l,u,i,r]}class Ay extends fe{constructor(e){super(),de(this,e,Sy,ky,o,{title:0,overall:1,easy:2,medium:3,hard:4,units:5})}}function Cy(e){let t,n,r,i;return t=new Ty({props:{$$slots:{default:[$y]},$$scope:{ctx:e}}}),r=new Ty({props:{$$slots:{default:[Ly]},$$scope:{ctx:e}}}),{c(){le(t.$$.fragment),n=C(),le(r.$$.fragment)},m(e,s){ue(t,e,s),E(e,n,s),ue(r,e,s),i=!0},p(e,n){const i={};131087&n&&(i.$$scope={dirty:n,ctx:e}),t.$set(i);const s={};196592&n&&(s.$$scope={dirty:n,ctx:e}),r.$set(s)},i(e){i||(ie(t.$$.fragment,e),ie(r.$$.fragment,e),i=!0)},o(e){se(t.$$.fragment,e),se(r.$$.fragment,e),i=!1},d(e){he(t,e),e&&_(n),he(r,e)}}}function Ny(t){let n,r;return{c(){var e,t;n=S("img"),e=n.src,t=r=Uy,a||(a=document.createElement("a")),a.href=t,e!==a.href&&D(n,"src",r),D(n,"alt","Avatar"),D(n,"class","svelte-g5gjth")},m(e,t){E(e,n,t)},p:e,d(e){e&&_(n)}}}function Ry(e){let t,n;return t=new Ay({props:{title:e[16],$$slots:{default:[Ny]},$$scope:{ctx:e}}}),{c(){le(t.$$.fragment)},m(e,r){ue(t,e,r),n=!0},p(e,n){const r={};131072&n&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function Dy(e){let t,n;return t=new Ay({props:{title:"total games",overall:e[0],easy:e[1],medium:e[2],hard:e[3],units:""}}),{c(){le(t.$$.fragment)},m(e,r){ue(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.overall=e[0]),2&n&&(r.easy=e[1]),4&n&&(r.medium=e[2]),8&n&&(r.hard=e[3]),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function $y(e){let t,n,r,i;return t=new wy({props:{$$slots:{default:[Ry]},$$scope:{ctx:e}}}),r=new wy({props:{$$slots:{default:[Dy]},$$scope:{ctx:e}}}),{c(){le(t.$$.fragment),n=C(),le(r.$$.fragment)},m(e,s){ue(t,e,s),E(e,n,s),ue(r,e,s),i=!0},p(e,n){const i={};131072&n&&(i.$$scope={dirty:n,ctx:e}),t.$set(i);const s={};131087&n&&(s.$$scope={dirty:n,ctx:e}),r.$set(s)},i(e){i||(ie(t.$$.fragment,e),ie(r.$$.fragment,e),i=!0)},o(e){se(t.$$.fragment,e),se(r.$$.fragment,e),i=!1},d(e){he(t,e),e&&_(n),he(r,e)}}}function Oy(e){let t,n;return t=new Ay({props:{title:"avg words per minute ",overall:e[4],easy:e[5],medium:e[6],hard:e[7],units:""}}),{c(){le(t.$$.fragment)},m(e,r){ue(t,e,r),n=!0},p(e,n){const r={};16&n&&(r.overall=e[4]),32&n&&(r.easy=e[5]),64&n&&(r.medium=e[6]),128&n&&(r.hard=e[7]),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function Py(e){let t,n;return t=new Ay({props:{title:"avg letters per minute",overall:e[8],easy:e[9],medium:e[10],hard:e[11],units:""}}),{c(){le(t.$$.fragment)},m(e,r){ue(t,e,r),n=!0},p(e,n){const r={};256&n&&(r.overall=e[8]),512&n&&(r.easy=e[9]),1024&n&&(r.medium=e[10]),2048&n&&(r.hard=e[11]),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function xy(e){let t,n;return t=new Ay({props:{title:"pass rate",overall:100*e[12],easy:100*e[13],medium:100*e[14],hard:100*e[15],units:"%"}}),{c(){le(t.$$.fragment)},m(e,r){ue(t,e,r),n=!0},p(e,n){const r={};4096&n&&(r.overall=100*e[12]),8192&n&&(r.easy=100*e[13]),16384&n&&(r.medium=100*e[14]),32768&n&&(r.hard=100*e[15]),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function Ly(e){let t,n,r,i,s,o;return t=new wy({props:{$$slots:{default:[Oy]},$$scope:{ctx:e}}}),r=new wy({props:{$$slots:{default:[Py]},$$scope:{ctx:e}}}),s=new wy({props:{$$slots:{default:[xy]},$$scope:{ctx:e}}}),{c(){le(t.$$.fragment),n=C(),le(r.$$.fragment),i=C(),le(s.$$.fragment)},m(e,a){ue(t,e,a),E(e,n,a),ue(r,e,a),E(e,i,a),ue(s,e,a),o=!0},p(e,n){const i={};131312&n&&(i.$$scope={dirty:n,ctx:e}),t.$set(i);const o={};134912&n&&(o.$$scope={dirty:n,ctx:e}),r.$set(o);const a={};192512&n&&(a.$$scope={dirty:n,ctx:e}),s.$set(a)},i(e){o||(ie(t.$$.fragment,e),ie(r.$$.fragment,e),ie(s.$$.fragment,e),o=!0)},o(e){se(t.$$.fragment,e),se(r.$$.fragment,e),se(s.$$.fragment,e),o=!1},d(e){he(t,e),e&&_(n),he(r,e),e&&_(i),he(s,e)}}}function My(e){let t,n,r,i,s=null!=e[0]&&Cy(e);return{c(){t=S("main"),n=S("h1"),n.textContent="profile",r=C(),s&&s.c()},m(e,o){E(e,t,o),b(t,n),b(t,r),s&&s.m(t,null),i=!0},p(e,[n]){null!=e[0]?s?(s.p(e,n),1&n&&ie(s,1)):(s=Cy(e),s.c(),ie(s,1),s.m(t,null)):s&&(ne(),se(s,1,1,(()=>{s=null})),re())},i(e){i||(ie(s),i=!0)},o(e){se(s),i=!1},d(e){e&&_(t),s&&s.d()}}}let Uy="../../fart.png";function Fy(e,t,n){let r,i,s,o,a,c,l,u,h,d,f,p,m,g,y,v,w=qg().email.substr(0,qg().email.indexOf("@"));return U((()=>{(async function(e){const t=pf(xg,Fg,e);return(await Gf(t)).data()})(qg().uid).then((e=>{n(1,i=e.easyGamesFailed+e.easyGamesWon),n(2,s=e.mediumGamesFailed+e.mediumGamesWon),n(3,o=e.hardGamesFailed+e.hardGamesWon),n(0,r=i+s+o),n(5,c=e.easyWPM),n(9,d=e.easyLPM),n(6,l=e.mediumWPM),n(10,f=e.mediumLPM),n(7,u=e.hardWPM),n(11,p=e.hardLPM),n(4,a=0!=r?(c*i+l*s+u*o)/r:0),n(8,h=0!=r?(d*i+f*s+p*o)/r:0),n(13,g=0!=i?Math.round(e.easyGamesWon/i*100)/100:0),n(14,y=0!=s?Math.round(e.mediumGamesWon/s*100)/100:0),n(15,v=0!=o?Math.round(e.hardGamesWon/o*100)/100:0),n(12,m=0!=r?Math.round((e.easyGamesWon+e.mediumGamesWon+e.hardGamesWon)/r*100)/100:0)}))})),[r,i,s,o,a,c,l,u,h,d,f,p,m,g,y,v,w]}function Vy(e){let t,n,r,i,s,o,a,c,u;const p=e[2].default,m=l(p,e,e[1],null),g=m||function(e){let t;return{c(){t=A("default card")},m(e,n){E(e,t,n)},d(e){e&&_(t)}}}();return{c(){t=S("main"),n=S("div"),r=S("h1"),i=A(e[0]),s=C(),o=S("div"),a=S("p"),g&&g.c(),D(o,"class","container svelte-dhtldt"),D(n,"class","card svelte-dhtldt")},m(e,c){E(e,t,c),b(t,n),b(n,r),b(r,i),b(n,s),b(n,o),b(o,a),g&&g.m(a,null),u=!0},p(e,[t]){(!u||1&t)&&$(i,e[0]),m&&m.p&&(!u||2&t)&&d(m,p,e,e[1],u?h(p,e[1],t,null):f(e[1]),null)},i(e){u||(ie(g,e),c||K((()=>{c=ae(n,Gg,{}),c.start()})),u=!0)},o(e){se(g,e),u=!1},d(e){e&&_(t),g&&g.d(e)}}}function jy(e,t,n){let{$$slots:r={},$$scope:i}=t,{title:s}=t;return e.$$set=e=>{"title"in e&&n(0,s=e.title),"$$scope"in e&&n(1,i=e.$$scope)},[s,i,r]}class qy extends fe{constructor(e){super(),de(this,e,jy,Vy,o,{title:0})}}function By(e){let t,n,r;const i=e[1].default,s=l(i,e,e[0],null),o=s||function(e){let t;return{c(){t=A("place analytics cards here")},m(e,n){E(e,t,n)},d(e){e&&_(t)}}}();return{c(){t=S("main"),n=S("div"),o&&o.c(),D(n,"class","analytics-card-collection svelte-dnt7jz")},m(e,i){E(e,t,i),b(t,n),o&&o.m(n,null),r=!0},p(e,[t]){s&&s.p&&(!r||1&t)&&d(s,i,e,e[0],r?h(i,e[0],t,null):f(e[0]),null)},i(e){r||(ie(o,e),r=!0)},o(e){se(o,e),r=!1},d(e){e&&_(t),o&&o.d(e)}}}function zy(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}class Hy extends fe{constructor(e){super(),de(this,e,zy,By,o,{})}}function Ky(t){let n,r,i,s,o,a,c,l,u,h,d,f,p,m=`${t[2]}:`;return{c(){n=S("div"),r=S("p"),i=S("strong"),s=A(m),o=C(),a=S("div"),c=A(t[3]),l=C(),u=S("div"),h=A(t[0]),d=C(),f=S("div"),p=A(t[1]),D(a,"class","leaderboard-section svelte-p3zygb"),D(u,"class","leaderboard-section svelte-p3zygb"),D(f,"class","leaderboard-section svelte-p3zygb"),D(n,"class","leaderboard-env svelte-p3zygb")},m(e,t){E(e,n,t),b(n,r),b(r,i),b(i,s),b(n,o),b(n,a),b(a,c),b(n,l),b(n,u),b(u,h),b(n,d),b(n,f),b(f,p)},p(e,[t]){4&t&&m!==(m=`${e[2]}:`)&&$(s,m),8&t&&$(c,e[3]),1&t&&$(h,e[0]),2&t&&$(p,e[1])},i:e,o:e,d(e){e&&_(n)}}}function Gy(e,t,n){let{user:r}=t,{score:i}=t,{place:s}=t,{date:o}=t;return e.$$set=e=>{"user"in e&&n(0,r=e.user),"score"in e&&n(1,i=e.score),"place"in e&&n(2,s=e.place),"date"in e&&n(3,o=e.date)},[r,i,s,o]}class Wy extends fe{constructor(e){super(),de(this,e,Gy,Ky,o,{user:0,score:1,place:2,date:3})}}function Jy(e,t,n){const r=e.slice();return r[5]=t[n],r[7]=n,r}function Qy(e,t,n){const r=e.slice();return r[5]=t[n],r[7]=n,r}function Xy(e,t,n){const r=e.slice();return r[5]=t[n],r[7]=n,r}function Yy(e){let t,n;return t=new qy({props:{title:"easy (wpm)",$$slots:{default:[ev]},$$scope:{ctx:e}}}),{c(){le(t.$$.fragment)},m(e,r){ue(t,e,r),n=!0},p(e,n){const r={};1025&n&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function Zy(e){let t,n;return t=new Wy({props:{user:e[5].user,score:e[5].score,date:e[5].date,place:e[7]+1}}),{c(){le(t.$$.fragment)},m(e,r){ue(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.user=e[5].user),1&n&&(r.score=e[5].score),1&n&&(r.date=e[5].date),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function ev(e){let t,n,r=e[0],i=[];for(let t=0;t<r.length;t+=1)i[t]=Zy(Xy(e,r,t));const s=e=>se(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=N()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);E(e,t,r),n=!0},p(e,n){if(1&n){let o;for(r=e[0],o=0;o<r.length;o+=1){const s=Xy(e,r,o);i[o]?(i[o].p(s,n),ie(i[o],1)):(i[o]=Zy(s),i[o].c(),ie(i[o],1),i[o].m(t.parentNode,t))}for(ne(),o=r.length;o<i.length;o+=1)s(o);re()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)ie(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)se(i[e]);n=!1},d(e){k(i,e),e&&_(t)}}}function tv(e){let t,n;return t=new qy({props:{title:"medium (wpm)",$$slots:{default:[rv]},$$scope:{ctx:e}}}),{c(){le(t.$$.fragment)},m(e,r){ue(t,e,r),n=!0},p(e,n){const r={};1026&n&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function nv(e){let t,n;return t=new Wy({props:{user:e[5].user,score:e[5].score,date:e[5].date,place:e[7]+1}}),{c(){le(t.$$.fragment)},m(e,r){ue(t,e,r),n=!0},p(e,n){const r={};2&n&&(r.user=e[5].user),2&n&&(r.score=e[5].score),2&n&&(r.date=e[5].date),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function rv(e){let t,n,r=e[1],i=[];for(let t=0;t<r.length;t+=1)i[t]=nv(Qy(e,r,t));const s=e=>se(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=N()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);E(e,t,r),n=!0},p(e,n){if(2&n){let o;for(r=e[1],o=0;o<r.length;o+=1){const s=Qy(e,r,o);i[o]?(i[o].p(s,n),ie(i[o],1)):(i[o]=nv(s),i[o].c(),ie(i[o],1),i[o].m(t.parentNode,t))}for(ne(),o=r.length;o<i.length;o+=1)s(o);re()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)ie(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)se(i[e]);n=!1},d(e){k(i,e),e&&_(t)}}}function iv(e){let t,n;return t=new qy({props:{title:"hard (wpm)",$$slots:{default:[ov]},$$scope:{ctx:e}}}),{c(){le(t.$$.fragment)},m(e,r){ue(t,e,r),n=!0},p(e,n){const r={};1028&n&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function sv(e){let t,n;return t=new Wy({props:{user:e[5].user,score:e[5].score,date:e[5].date,place:e[7]+1}}),{c(){le(t.$$.fragment)},m(e,r){ue(t,e,r),n=!0},p(e,n){const r={};4&n&&(r.user=e[5].user),4&n&&(r.score=e[5].score),4&n&&(r.date=e[5].date),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function ov(e){let t,n,r=e[2],i=[];for(let t=0;t<r.length;t+=1)i[t]=sv(Jy(e,r,t));const s=e=>se(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=N()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);E(e,t,r),n=!0},p(e,n){if(4&n){let o;for(r=e[2],o=0;o<r.length;o+=1){const s=Jy(e,r,o);i[o]?(i[o].p(s,n),ie(i[o],1)):(i[o]=sv(s),i[o].c(),ie(i[o],1),i[o].m(t.parentNode,t))}for(ne(),o=r.length;o<i.length;o+=1)s(o);re()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)ie(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)se(i[e]);n=!1},d(e){k(i,e),e&&_(t)}}}function av(e){let t,n,r,i,s=0!=e[0].length&&Yy(e),o=0!=e[1].length&&tv(e),a=0!=e[2].length&&iv(e);return{c(){s&&s.c(),t=C(),o&&o.c(),n=C(),a&&a.c(),r=N()},m(e,c){s&&s.m(e,c),E(e,t,c),o&&o.m(e,c),E(e,n,c),a&&a.m(e,c),E(e,r,c),i=!0},p(e,i){0!=e[0].length?s?(s.p(e,i),1&i&&ie(s,1)):(s=Yy(e),s.c(),ie(s,1),s.m(t.parentNode,t)):s&&(ne(),se(s,1,1,(()=>{s=null})),re()),0!=e[1].length?o?(o.p(e,i),2&i&&ie(o,1)):(o=tv(e),o.c(),ie(o,1),o.m(n.parentNode,n)):o&&(ne(),se(o,1,1,(()=>{o=null})),re()),0!=e[2].length?a?(a.p(e,i),4&i&&ie(a,1)):(a=iv(e),a.c(),ie(a,1),a.m(r.parentNode,r)):a&&(ne(),se(a,1,1,(()=>{a=null})),re())},i(e){i||(ie(s),ie(o),ie(a),i=!0)},o(e){se(s),se(o),se(a),i=!1},d(e){s&&s.d(e),e&&_(t),o&&o.d(e),e&&_(n),a&&a.d(e),e&&_(r)}}}function cv(e){let t,n,r,i,s;return i=new Hy({props:{$$slots:{default:[av]},$$scope:{ctx:e}}}),{c(){t=S("main"),n=S("h1"),n.textContent="leaderboard",r=C(),le(i.$$.fragment)},m(e,o){E(e,t,o),b(t,n),b(t,r),ue(i,t,null),s=!0},p(e,[t]){const n={};1031&t&&(n.$$scope={dirty:t,ctx:e}),i.$set(n)},i(e){s||(ie(i.$$.fragment,e),s=!0)},o(e){se(i.$$.fragment,e),s=!1},d(e){e&&_(t),he(i)}}}function lv(e,t,n){let{currentRoute:r}=t,{params:i}=t,s=[],o=[],a=[];return U((()=>{console.log("HI"),Hg("easy_wpm").then((e=>{e.data.forEach((e=>s.push(JSON.parse(e)))),n(0,s)})),Hg("medium_wpm").then((e=>{e.data.forEach((e=>o.push(JSON.parse(e)))),n(1,o)})),Hg("hard_wpm").then((e=>{e.data.forEach((e=>a.push(JSON.parse(e)))),n(2,a)}))})),e.$$set=e=>{"currentRoute"in e&&n(3,r=e.currentRoute),"params"in e&&n(4,i=e.params)},[s,o,a,r,i]}function uv(t){let n,r,i,s,o;return s=new Qe({props:{text:"return home",onClickFn:"redirectHome"}}),{c(){n=S("main"),r=S("h2"),r.textContent="oops, looks like that page doesn't exist",i=C(),le(s.$$.fragment)},m(e,t){E(e,n,t),b(n,r),b(n,i),ue(s,n,null),o=!0},p:e,i(e){o||(ie(s.$$.fragment,e),o=!0)},o(e){se(s.$$.fragment,e),o=!1},d(e){e&&_(n),he(s)}}}function hv(t){let n;return{c(){n=S("main"),n.innerHTML="<h1>Logging you out</h1>"},m(e,t){E(e,n,t)},p:e,i:e,o:e,d(e){e&&_(n)}}}function dv(e){return async function(){try{await Im(Pg)}catch(e){console.log(e)}Lg.setItem(Mg,""),Rg()}(),[]}function fv(){return!Bg()}const pv=[{name:"/",component:class extends fe{constructor(e){super(),de(this,e,ry,ny,o,{currentRoute:9,params:10})}}},{name:"login",component:class extends fe{constructor(e){super(),de(this,e,dy,hy,o,{currentRoute:7,params:8})}},onlyIf:{guard:fv,redirect:"/"}},{name:"signup",component:class extends fe{constructor(e){super(),de(this,e,gy,my,o,{currentRoute:6,params:7})}},onlyIf:{guard:fv,redirect:"/"}},{name:"profile",component:class extends fe{constructor(e){super(),de(this,e,Fy,My,o,{})}},onlyIf:{guard:Bg,redirect:"/"}},{name:"leaderboard",component:class extends fe{constructor(e){super(),de(this,e,lv,cv,o,{currentRoute:3,params:4})}}},{name:"logout",component:class extends fe{constructor(e){super(),de(this,e,dv,hv,o,{})}},onlyIf:{guard:Bg,redirect:"/"}},{name:"404",component:class extends fe{constructor(e){super(),de(this,e,null,uv,o,{})}}}];function mv(e){let t,n,r;return{c(){t=S("a"),t.textContent="signup",n=C(),r=S("a"),r.textContent="login",D(t,"href","/signup"),D(t,"class","svelte-1ywqo0t"),D(r,"href","/login"),D(r,"class","svelte-1ywqo0t")},m(e,i){E(e,t,i),E(e,n,i),E(e,r,i)},d(e){e&&_(t),e&&_(n),e&&_(r)}}}function gv(e){let t,n,r;return{c(){t=S("a"),t.textContent="logout",n=C(),r=S("a"),r.textContent="profile",D(t,"href","/logout"),D(t,"class","svelte-1ywqo0t"),D(r,"href","/profile"),D(r,"class","svelte-1ywqo0t")},m(e,i){E(e,t,i),E(e,n,i),E(e,r,i)},d(e){e&&_(t),e&&_(n),e&&_(r)}}}function yv(t){let n,r,i,s,o,a;let c=function(e,t){return e[0]?gv:mv}(t),l=c(t);return{c(){n=S("main"),r=S("div"),l.c(),i=C(),s=S("a"),s.textContent="leaderboard",o=C(),a=S("a"),a.textContent="play",D(s,"href","/leaderboard"),D(s,"class","svelte-1ywqo0t"),D(a,"href","/"),D(a,"class","svelte-1ywqo0t"),D(r,"class","header svelte-1ywqo0t")},m(e,t){E(e,n,t),b(n,r),l.m(r,null),b(r,i),b(r,s),b(r,o),b(r,a)},p:e,i:e,o:e,d(e){e&&_(n),l.d()}}}function vv(e){return[Bg()]}class wv extends fe{constructor(e){super(),de(this,e,vv,yv,o,{})}}function bv(t){let n,r,i,s,o,a;return i=new wv({}),o=new He({props:{routes:pv}}),{c(){n=S("meta"),r=C(),le(i.$$.fragment),s=C(),le(o.$$.fragment),document.title="Perfect Type",D(n,"charset","utf-8")},m(e,t){b(document.head,n),E(e,r,t),ue(i,e,t),E(e,s,t),ue(o,e,t),a=!0},p:e,i(e){a||(ie(i.$$.fragment,e),ie(o.$$.fragment,e),a=!0)},o(e){se(i.$$.fragment,e),se(o.$$.fragment,e),a=!1},d(e){_(n),e&&_(r),he(i,e),e&&_(s),he(o,e)}}}function Iv(e){return jg(),[]}return new class extends fe{constructor(e){super(),de(this,e,Iv,bv,o,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
