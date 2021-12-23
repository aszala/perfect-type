var app=function(){"use strict";function e(){}const t=e=>e;function n(e){return e()}function r(){return Object.create(null)}function i(e){e.forEach(n)}function s(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a;function c(t,n,r){t.$$.on_destroy.push(function(t,...n){if(null==t)return e;const r=t.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function l(e,t,n,r){if(e){const i=u(e,t,n,r);return e[0](i)}}function u(e,t,n,r){return e[1]&&r?function(e,t){for(const n in t)e[n]=t[n];return e}(n.ctx.slice(),e[1](r(t))):n.ctx}function h(e,t,n,r){if(e[2]&&r){const i=e[2](r(n));if(void 0===t.dirty)return i;if("object"==typeof i){const e=[],n=Math.max(t.dirty.length,i.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|i[r];return e}return t.dirty|i}return t.dirty}function d(e,t,n,r,i,s){if(i){const o=u(t,n,r,s);e.p(o,i)}}function f(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}function p(e){return null==e?"":e}const m="undefined"!=typeof window;let g=m?()=>window.performance.now():()=>Date.now(),y=m?e=>requestAnimationFrame(e):e;const v=new Set;function w(e){v.forEach((t=>{t.c(e)||(v.delete(t),t.f())})),0!==v.size&&y(w)}function b(e,t){e.appendChild(t)}function T(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function I(e){const t=S("style");return function(e,t){b(e.head||e,t)}(T(e),t),t}function E(e,t,n){e.insertBefore(t,n||null)}function k(e){e.parentNode.removeChild(e)}function _(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function S(e){return document.createElement(e)}function A(e){return document.createTextNode(e)}function C(){return A(" ")}function R(){return A("")}function N(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function D(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function O(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}const $=new Set;let x,P=0;function L(e,t){const n=(e.style.animation||"").split(", "),r=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),i=n.length-r.length;i&&(e.style.animation=r.join(", "),P-=i,P||y((()=>{P||($.forEach((e=>{const t=e.__svelte_stylesheet;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.__svelte_rules={}})),$.clear())})))}function M(e){x=e}function U(e){(function(){if(!x)throw new Error("Function called outside component initialization");return x})().$$.on_mount.push(e)}const F=[],V=[],j=[],q=[],B=Promise.resolve();let z=!1;function H(){z||(z=!0,B.then(Q))}function K(e){j.push(e)}function G(e){q.push(e)}let W=!1;const J=new Set;function Q(){if(!W){W=!0;do{for(let e=0;e<F.length;e+=1){const t=F[e];M(t),X(t.$$)}for(M(null),F.length=0;V.length;)V.pop()();for(let e=0;e<j.length;e+=1){const t=j[e];J.has(t)||(J.add(t),t())}j.length=0}while(F.length);for(;q.length;)q.pop()();z=!1,W=!1,J.clear()}}function X(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(K)}}let Y;function Z(e,t,n){e.dispatchEvent(function(e,t,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,!1,t),r}(`${t?"intro":"outro"}${n}`))}const ee=new Set;let te;function ne(){te={r:0,c:[],p:te}}function re(){te.r||i(te.c),te=te.p}function ie(e,t){e&&e.i&&(ee.delete(e),e.i(t))}function se(e,t,n,r){if(e&&e.o){if(ee.has(e))return;ee.add(e),te.c.push((()=>{ee.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}const oe={duration:0};function ae(n,r,i){let o,a,c=r(n,i),l=!1,u=0;function h(){o&&L(n,o)}function d(){const{delay:r=0,duration:i=300,easing:s=t,tick:d=e,css:f}=c||oe;f&&(o=function(e,t,n,r,i,s,o,a=0){const c=16.666/r;let l="{\n";for(let e=0;e<=1;e+=c){const r=t+(n-t)*s(e);l+=100*e+`%{${o(r,1-r)}}\n`}const u=l+`100% {${o(n,1-n)}}\n}`,h=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(u)}_${a}`,d=T(e);$.add(d);const f=d.__svelte_stylesheet||(d.__svelte_stylesheet=I(e).sheet),p=d.__svelte_rules||(d.__svelte_rules={});p[h]||(p[h]=!0,f.insertRule(`@keyframes ${h} ${u}`,f.cssRules.length));const m=e.style.animation||"";return e.style.animation=`${m?`${m}, `:""}${h} ${r}ms linear ${i}ms 1 both`,P+=1,h}(n,0,1,i,r,s,f,u++)),d(0,1);const p=g()+r,m=p+i;a&&a.abort(),l=!0,K((()=>Z(n,!0,"start"))),a=function(e){let t;return 0===v.size&&y(w),{promise:new Promise((n=>{v.add(t={c:e,f:n})})),abort(){v.delete(t)}}}((e=>{if(l){if(e>=m)return d(1,0),Z(n,!0,"end"),h(),l=!1;if(e>=p){const t=s((e-p)/i);d(t,1-t)}}return l}))}let f=!1;return{start(){f||(f=!0,L(n),s(c)?(c=c(),(Y||(Y=Promise.resolve(),Y.then((()=>{Y=null}))),Y).then(d)):d())},invalidate(){f=!1},end(){l&&(h(),l=!1)}}}function ce(e,t,n){const r=e.$$.props[t];void 0!==r&&(e.$$.bound[r]=n,n(e.$$.ctx[r]))}function le(e){e&&e.c()}function ue(e,t,r,o){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=e.$$;a&&a.m(t,r),o||K((()=>{const t=c.map(n).filter(s);l?l.push(...t):i(t),e.$$.on_mount=[]})),u.forEach(K)}function he(e,t){const n=e.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function de(t,n,s,o,a,c,l,u=[-1]){const h=x;M(t);const d=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(h?h.$$.context:[])),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||h.$$.root};l&&l(d.root);let f=!1;if(d.ctx=s?s(t,n.props||{},((e,n,...r)=>{const i=r.length?r[0]:n;return d.ctx&&a(d.ctx[e],d.ctx[e]=i)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](i),f&&function(e,t){-1===e.$$.dirty[0]&&(F.push(e),H(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(t,e)),n})):[],d.update(),f=!0,i(d.before_update),d.fragment=!!o&&o(d.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);d.fragment&&d.fragment.l(e),e.forEach(k)}else d.fragment&&d.fragment.c();n.intro&&ie(t.$$.fragment),ue(t,n.target,n.anchor,n.customElement),Q()}M(h)}class fe{$destroy(){he(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const pe=[];function me(t,n=e){let r;const i=new Set;function s(e){if(o(t,e)&&(t=e,r)){const e=!pe.length;for(const e of i)e[1](),pe.push(e,t);if(e){for(let e=0;e<pe.length;e+=2)pe[e][0](pe[e+1]);pe.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(o,a=e){const c=[o,a];return i.add(c),1===i.size&&(r=n(s)||e),o(t),()=>{i.delete(c),0===i.size&&(r(),r=null)}}}}const{set:ge,subscribe:ye}=me({}),ve={subscribe:ye,set:ge,remove:()=>{ge({})}},we=(e,t="")=>{const n=new URL(e);function r(){return s(t).reduce(((e,t,n)=>(":"===t[0]&&e.push({value:t.slice(1),index:n}),e)),[])}function i(){return s(n.pathname)}function s(e){return"/"===e||0===e.trim().length?[e]:("/"===e.slice(-1)&&(e=e.slice(0,-1)),"/"===e[0]&&(e=e.slice(1)),e.split("/"))}return Object.freeze({hash:n.hash,host:n.host,hostname:n.hostname,namedParams:function(){const e=i();return r().reduce(((t,n)=>(t[n.value]=e[n.index],t)),{})}(),namedParamsKeys:r().reduce(((e,t)=>(e.push(t.value),e)),[]),namedParamsValues:function(){const e=i();return r().reduce(((t,n)=>(t.push(e[n.index]),t)),[])}(),pathNames:i(),port:n.port,pathname:n.pathname,protocol:n.protocol,search:n.search,queryParams:function(){const e={};return n.searchParams.forEach(((t,n)=>{e[n]=t})),e}(),queryParamsKeys:function(){const e=[];return n.searchParams.forEach(((t,n)=>{e.push(n)})),e}(),queryParamsValues:function(){const e=[];return n.searchParams.forEach((t=>{e.push(t)})),e}()})},be=e=>{let t=!1;return 0===Object.keys(e).length||(e.childRoute&&0===Object.keys(e.childRoute).length?t=!0:e.childRoute&&(t=be(e.childRoute)),t)},Te=(e,t)=>(t=_e(t)).includes(":")?t.includes(e):t.startsWith(e),Ie=(e,t,n)=>{let r=!1;if(n)return{exists:t.lang&&t.lang[n]&&t.lang[n].includes(e),language:n};if(r=Te(e,t.name),!r&&t.lang&&"object"==typeof t.lang)for(const[i,s]of Object.entries(t.lang))Te(e,s)&&(r=!0,n=i);return{exists:r,language:n}},Ee=e=>"/"===e||0===e.trim().length?[e]:(e=_e(e,"both")).split("/"),ke=(e="")=>{let t;return"/"===e||0===e.trim().length?e:(t=(e=_e(e,"lead")).split(":")[0],t=_e(t,"trail"),t.toLowerCase())},_e=(e,t="lead")=>("trail"!==t&&"both"!==t||(e=e.replace(/\/$/,"")),"lead"!==t&&"both"!==t||(e=e.replace(/^\//,"")),e),Se=(e,t=null)=>t&&e.lang&&e.lang[t]?e.lang[t]:e.name,Ae=e=>{const t=e||!1;let n="";const r=(e,n)=>{if("undefined"!=typeof window){const r=(e=>{let t=[];if(e.queryParams)for(let[n,r]of Object.entries(e.queryParams))t.push(`${n}=${r}`);const n=e.hash?e.hash:"";return t.length>0?`${e.path}?${t.join("&")}${n}`:e.path+n})(e);n&&window.history.pushState({page:r},"",r),t&&i(r)}},i=e=>{"undefined"!=typeof ga&&(ga("set","page",e),ga("send","pageview"))};return Object.freeze({active:()=>n,isActive:(e,t=!1)=>{"/"!==e[0]&&(e="/"+e);let r=we(`http://fake.com${e}`).pathname,i=we(`http://fake.com${n}`).pathname;return r=_e(r,"trail"),i=_e(i,"trail"),t?i.includes(r):i===r},setActive:(e,t)=>{n=e.path,r(e,t)}})},Ce=(e,t)=>{const n=(e=>{const t=e;return Object.freeze({valid:()=>t&&t.guard&&"function"==typeof t.guard,redirect:()=>!t.guard(),redirectPath:()=>{let e="/";return t.redirect&&t.redirect.length>0&&(e=t.redirect),e}})})(e.onlyIf);return Object.freeze({path:()=>{let r=t;return e.redirectTo&&e.redirectTo.length>0&&(r=e.redirectTo),n.valid()&&n.redirect()&&(r=n.redirectPath()),r}})};function Re({basePath:e,basePathName:t,pathNames:n,convert:r,currentLanguage:i}){let s,o,a=i;function c(){return Se(o,a)}function l(){return ke(c())}function u(){return ke(s.result)}return Object.freeze({basePathSameAsLocalised:function(){return u()===l()},updatedPath:function(e){return o=e,s=((e,t,n,r,i=!1)=>{if("/"===e||0===e.trim().length)return{result:e,language:null};let s=e,o=n.name,a=r;if(i&&(a=""),o=_e(o),s=_e(s),n.childRoute)return{result:e,language:a};{let e=Ie(s,n,a);e.exists&&i&&(s=Se(n,r));let c=o.split(":")[0];return c=_e(c,"trail"),c=c.split("/"),c.shift(),c.forEach((()=>{const o=t[0];if(e=Ie(`${s}/${o}`,n,a),!o||!e.exists)return{result:s,language:e.language};s=i?Se(n,r):`${s}/${o}`,t.shift()})),{result:s,language:e.language}}})(t,n,o,a,r),a=r?i:s.language,s},basePathNameWithoutNamedParams:u,localisedPathName:c,localisedRouteWithoutNamedParams:l,namedPath:function(){let t=c();return t&&!t.startsWith("/")&&(t="/"+t),e?`${e}${t}`:t},pathNames:n,routeLanguage:function(){return a},routePath:function(){let t=`${e}/${u()}`;"//"===t&&(t="/"),a&&(n=((e,t)=>{const n=t.split("/");return n.length>1&&n.forEach((function(t,n){t.length>0&&n>0&&e.shift()})),e})(n,l()));const r=((e="")=>0===e.trim().length?[]:Ee(e).reduce(((e,t)=>(":"===t[0]&&e.push(t.slice(1)),e)),[]))(c());return r&&r.length>0&&r.forEach((function(){n.length>0&&(t+=`/${n.shift()}`)})),t}})}function Ne({routes:e,currentUrl:t,routerOptions:n,convert:r}){const i=n.defaultLanguage,s=n.prefix?n.prefix.toLowerCase():"",o=function(e,t){if(t&&t.trim().length>0){const n=e.endsWith(t)?t:t+"/",r=e.replace(n,"");return we(r)}return we(e)}(t,s);let a="",c={},l=!1;function u(e,t,n,r,s){let h={};const d=Re({basePath:t,basePathName:n.shift().toLowerCase(),pathNames:n,convert:s,currentLanguage:r});return l=!1,e.forEach((function(e){if(d.updatedPath(e),function(e,t){const n=e.basePathSameAsLocalised();n&&(l=!0);return n||!l&&(e=>_e(e).startsWith(":"))(t)}(d,e.name)){let t=d.routePath();if(a=Ce(e,a).path(),h.name!==t&&(h=function({route:e,routePath:t,routeLanguage:n,urlParser:r,namedPath:s}){const o=function({routeInfo:e,path:t,routeNamedParams:n,urlParser:r,namedPath:i,language:s}){const o=()=>{const e=we(`https://fake.com${r.pathname}`,i).namedParams;return{...n,...e}};return Object.freeze({get:()=>({name:t,component:e.component,hash:r.hash,layout:e.layout,queryParams:r.queryParams,namedParams:o(),path:t,language:s}),namedParams:o})}({routeInfo:e,urlParser:r,path:t,routeNamedParams:c,namedPath:s,language:n||i});return c=o.namedParams(),o.get()}({route:e,routePath:t,routeLanguage:d.routeLanguage(),urlParser:o,namedPath:d.namedPath()})),e.nestedRoutes&&e.nestedRoutes.length>0&&d.pathNames.length>0)h.childRoute=u(e.nestedRoutes,t,d.pathNames,d.routeLanguage(),s),h.path=h.childRoute.path,h.language=h.childRoute.language;else if(function(e,t){return e.nestedRoutes&&e.nestedRoutes.length>0&&0===t.length}(e,d.pathNames)){const n=u(e.nestedRoutes,t,["index"],d.routeLanguage(),s);n&&Object.keys(n).length>0&&(h.childRoute=n,h.language=h.childRoute.language)}}})),a&&(h.redirectTo=a),h}const h=t=>{const n=e.find((e=>"404"==e.name)),r=t||i||"";return n?{...n,language:r,path:"404"}:{name:"404",component:"",path:"404",redirectTo:"/404.html"}};return Object.freeze({findActiveRoute:function(){let t=u(e,"",o.pathNames,n.lang,r);return t&&Object.keys(t).length&&!be(t)?(t.path=t.path.split("?")[0],s&&(t.path=`/${s}${t.path}`)):"undefined"!=typeof window&&(t=h(n.lang)),t}})}const De="/404.html";let Oe,$e=[],xe={};const Pe=(e,t,n={})=>{xe={...n},void 0!==t&&""!==t||(t=document.location.href),Oe=Ae(xe.gaPageviews),t=_e(t,"trail"),$e=e;const r=()=>{let n=!1;return xe.langConvertTo&&(xe.lang=xe.langConvertTo,n=!0),Ne({routes:e,currentUrl:t,routerOptions:xe,convert:n}).findActiveRoute()};return Object.freeze({setActiveRoute:(e=!0)=>{const t=r();return t.redirectTo?((e,t)=>("undefined"!=typeof window&&(e===De?Oe.setActive({path:De},t):Le(e)),e))(t.redirectTo,e):(Oe.setActive(t,e),ve.set(t),t)},findActiveRoute:r})},Le=(e,t=null,n=!0)=>(e=_e(e,"lead"),t&&(xe.langConvertTo=t),Pe($e,"http://fake.com/"+e,xe).setActiveRoute(n));function Me(e){let t,n;return t=new qe({props:{currentRoute:e[0].childRoute,params:e[1]}}),{c(){le(t.$$.fragment)},m(e,r){ue(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.currentRoute=e[0].childRoute),2&n&&(r.params=e[1]),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function Ue(e){let t,n,r;var i=e[0].component;function s(e){return{props:{currentRoute:{...e[0],component:""},params:e[1]}}}return i&&(t=new i(s(e))),{c(){t&&le(t.$$.fragment),n=R()},m(e,i){t&&ue(t,e,i),E(e,n,i),r=!0},p(e,r){const o={};if(1&r&&(o.currentRoute={...e[0],component:""}),2&r&&(o.params=e[1]),i!==(i=e[0].component)){if(t){ne();const e=t;se(e.$$.fragment,1,0,(()=>{he(e,1)})),re()}i?(t=new i(s(e)),le(t.$$.fragment),ie(t.$$.fragment,1),ue(t,n.parentNode,n)):t=null}else i&&t.$set(o)},i(e){r||(t&&ie(t.$$.fragment,e),r=!0)},o(e){t&&se(t.$$.fragment,e),r=!1},d(e){e&&k(n),t&&he(t,e)}}}function Fe(e){let t,n,r;var i=e[0].layout;function s(e){return{props:{currentRoute:{...e[0],layout:""},params:e[1]}}}return i&&(t=new i(s(e))),{c(){t&&le(t.$$.fragment),n=R()},m(e,i){t&&ue(t,e,i),E(e,n,i),r=!0},p(e,r){const o={};if(1&r&&(o.currentRoute={...e[0],layout:""}),2&r&&(o.params=e[1]),i!==(i=e[0].layout)){if(t){ne();const e=t;se(e.$$.fragment,1,0,(()=>{he(e,1)})),re()}i?(t=new i(s(e)),le(t.$$.fragment),ie(t.$$.fragment,1),ue(t,n.parentNode,n)):t=null}else i&&t.$set(o)},i(e){r||(t&&ie(t.$$.fragment,e),r=!0)},o(e){t&&se(t.$$.fragment,e),r=!1},d(e){e&&k(n),t&&he(t,e)}}}function Ve(e){let t,n,r,i;const s=[Fe,Ue,Me],o=[];function a(e,t){return e[0].layout?0:e[0].component?1:e[0].childRoute?2:-1}return~(t=a(e))&&(n=o[t]=s[t](e)),{c(){n&&n.c(),r=R()},m(e,n){~t&&o[t].m(e,n),E(e,r,n),i=!0},p(e,[i]){let c=t;t=a(e),t===c?~t&&o[t].p(e,i):(n&&(ne(),se(o[c],1,1,(()=>{o[c]=null})),re()),~t?(n=o[t],n?n.p(e,i):(n=o[t]=s[t](e),n.c()),ie(n,1),n.m(r.parentNode,r)):n=null)},i(e){i||(ie(n),i=!0)},o(e){se(n),i=!1},d(e){~t&&o[t].d(e),e&&k(r)}}}function je(e,t,n){let{currentRoute:r={}}=t,{params:i={}}=t;return e.$$set=e=>{"currentRoute"in e&&n(0,r=e.currentRoute),"params"in e&&n(1,i=e.params)},[r,i]}"undefined"!=typeof window&&(window.addEventListener("click",(e=>{if("a"!==e.target.localName.toLowerCase())return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;const t=xe.prefix?`/${xe.prefix.toLowerCase()}`:"",n=e.target.pathname&&e.target.host===window.location.host,r=!(t.length>1)||e.target.pathname.startsWith(t);if(n&&r){e.preventDefault();const t=e.target.pathname+e.target.search+e.target.search+e.target.hash;"_blank"===e.target.target?window.open(t,"newTab"):Le(t)}})),window.onpopstate=function(e){let t=window.location.pathname+window.location.search+window.location.hash;Le(t,null,!1)});class qe extends fe{constructor(e){super(),de(this,e,je,Ve,o,{currentRoute:0,params:1})}}function Be(e){let t,n;return t=new qe({props:{currentRoute:e[0]}}),{c(){le(t.$$.fragment)},m(e,r){ue(t,e,r),n=!0},p(e,[n]){const r={};1&n&&(r.currentRoute=e[0]),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function ze(e,t,n){let r;c(e,ve,(e=>n(0,r=e)));let{routes:i=[]}=t,{options:s={}}=t;return U((()=>{Pe(i,document.location.href,s).setActiveRoute()})),e.$$set=e=>{"routes"in e&&n(1,i=e.routes),"options"in e&&n(2,s=e.options)},[r,i,s]}class He extends fe{constructor(e){super(),de(this,e,ze,Be,o,{routes:1,options:2})}}const Ke=me(0),Ge=me(5);function We(t){let n,r,i,o;return{c(){n=S("button"),r=A(t[0])},m(e,a){E(e,n,a),b(n,r),i||(o=N(n,"click",(function(){s(t[1])&&t[1].apply(this,arguments)})),i=!0)},p(e,[n]){t=e,1&n&&O(r,t[0])},i:e,o:e,d(e){e&&k(n),i=!1,o()}}}function Je(e,t,n){let{text:r}=t,{onClickFn:i=(()=>{})}=t;return e.$$set=e=>{"text"in e&&n(0,r=e.text),"onClickFn"in e&&n(1,i=e.onClickFn)},[r,i]}class Qe extends fe{constructor(e){super(),de(this,e,Je,We,o,{text:0,onClickFn:1})}}function Xe(e){let t,n,r,i,s,o,a,c,l,u=e[0]?`you won :) and typed ${e[1]} words per minute`:"you lost :(";return c=new Qe({props:{onClickFn:e[2],text:e[0]?"play again":"try again"}}),{c(){t=S("div"),n=S("div"),r=A(u),i=C(),s=S("br"),o=S("br"),a=C(),le(c.$$.fragment),D(n,"class","game-over-div svelte-hd18fy"),D(t,"class","game-over-environment svelte-hd18fy")},m(e,u){E(e,t,u),b(t,n),b(n,r),b(t,i),b(t,s),b(t,o),b(t,a),ue(c,t,null),l=!0},p(e,[t]){(!l||3&t)&&u!==(u=e[0]?`you won :) and typed ${e[1]} words per minute`:"you lost :(")&&O(r,u);const n={};4&t&&(n.onClickFn=e[2]),1&t&&(n.text=e[0]?"play again":"try again"),c.$set(n)},i(e){l||(ie(c.$$.fragment,e),l=!0)},o(e){se(c.$$.fragment,e),l=!1},d(e){e&&k(t),he(c)}}}function Ye(e,t,n){let{winGame:r}=t,{wpm:i}=t,{tryAgain:s}=t;return e.$$set=e=>{"winGame"in e&&n(0,r=e.winGame),"wpm"in e&&n(1,i=e.wpm),"tryAgain"in e&&n(2,s=e.tryAgain)},[r,i,s]}class Ze extends fe{constructor(e){super(),de(this,e,Ye,Xe,o,{winGame:0,wpm:1,tryAgain:2})}}function et(t){let n,r,o,a,c,l,u,h,d,f,m,g,y,v;return{c(){n=S("div"),r=S("div"),o=A("easy"),c=C(),l=S("div"),u=A("medium"),d=C(),f=S("div"),m=A("hard"),D(r,"class",a=p("mode-div "+("easy"===t[0]?"active-mode":"inactive-mode"))+" svelte-jpu02f"),D(r,"id","easy"),D(l,"class",h=p("mode-div "+("medium"===t[0]?"active-mode":"inactive-mode"))+" svelte-jpu02f"),D(l,"id","medium"),D(f,"class",g=p("mode-div "+("hard"===t[0]?"active-mode":"inactive-mode"))+" svelte-jpu02f"),D(f,"id","hard"),D(n,"class","mode-container svelte-jpu02f")},m(e,i){E(e,n,i),b(n,r),b(r,o),b(n,c),b(n,l),b(l,u),b(n,d),b(n,f),b(f,m),y||(v=[N(r,"click",(function(){s(t[1])&&t[1].apply(this,arguments)})),N(l,"click",(function(){s(t[1])&&t[1].apply(this,arguments)})),N(f,"click",(function(){s(t[1])&&t[1].apply(this,arguments)}))],y=!0)},p(e,[n]){t=e,1&n&&a!==(a=p("mode-div "+("easy"===t[0]?"active-mode":"inactive-mode"))+" svelte-jpu02f")&&D(r,"class",a),1&n&&h!==(h=p("mode-div "+("medium"===t[0]?"active-mode":"inactive-mode"))+" svelte-jpu02f")&&D(l,"class",h),1&n&&g!==(g=p("mode-div "+("hard"===t[0]?"active-mode":"inactive-mode"))+" svelte-jpu02f")&&D(f,"class",g)},i:e,o:e,d(e){e&&k(n),y=!1,i(v)}}}function tt(e,t,n){let{mode:r}=t,{changeMode:i}=t;return e.$$set=e=>{"mode"in e&&n(0,r=e.mode),"changeMode"in e&&n(1,i=e.changeMode)},[r,i]}class nt extends fe{constructor(e){super(),de(this,e,tt,et,o,{mode:0,changeMode:1})}}var rt=["ability","able","aboard","about","above","accept","accident","according","account","accurate","acres","across","act","action","active","activity","actual","actually","add","addition","additional","adjective","adult","adventure","advice","affect","afraid","after","afternoon","again","against","age","ago","agree","ahead","aid","air","airplane","alike","alive","all","allow","almost","alone","along","aloud","alphabet","already","also","although","am","among","amount","ancient","angle","angry","animal","announced","another","answer","ants","any","anybody","anyone","anything","anyway","anywhere","apart","apartment","appearance","apple","applied","appropriate","are","area","arm","army","around","arrange","arrangement","arrive","arrow","art","article","as","aside","ask","asleep","at","ate","atmosphere","atom","atomic","attached","attack","attempt","attention","audience","author","automobile","available","average","avoid","aware","away","baby","back","bad","badly","bag","balance","ball","balloon","band","bank","bar","bare","bark","barn","base","baseball","basic","basis","basket","bat","battle","be","bean","bear","beat","beautiful","beauty","became","because","become","becoming","bee","been","before","began","beginning","begun","behavior","behind","being","believed","bell","belong","below","belt","bend","beneath","bent","beside","best","bet","better","between","beyond","bicycle","bigger","biggest","bill","birds","birth","birthday","bit","bite","black","blank","blanket","blew","blind","block","blood","blow","blue","board","boat","body","bone","book","border","born","both","bottle","bottom","bound","bow","bowl","box","boy","brain","branch","brass","brave","bread","break","breakfast","breath","breathe","breathing","breeze","brick","bridge","brief","bright","bring","broad","broke","broken","brother","brought","brown","brush","buffalo","build","building","built","buried","burn","burst","bus","bush","business","busy","but","butter","buy","by","cabin","cage","cake","call","calm","came","camera","camp","can","canal","cannot","cap","capital","captain","captured","car","carbon","card","care","careful","carefully","carried","carry","case","cast","castle","cat","catch","cattle","caught","cause","cave","cell","cent","center","central","century","certain","certainly","chain","chair","chamber","chance","change","changing","chapter","character","characteristic","charge","chart","check","cheese","chemical","chest","chicken","chief","child","children","choice","choose","chose","chosen","church","circle","circus","citizen","city","class","classroom","claws","clay","clean","clear","clearly","climate","climb","clock","close","closely","closer","cloth","clothes","clothing","cloud","club","coach","coal","coast","coat","coffee","cold","collect","college","colony","color","column","combination","combine","come","comfortable","coming","command","common","community","company","compare","compass","complete","completely","complex","composed","composition","compound","concerned","condition","congress","connected","consider","consist","consonant","constantly","construction","contain","continent","continued","contrast","control","conversation","cook","cookies","cool","copper","copy","corn","corner","correct","correctly","cost","cotton","could","count","country","couple","courage","course","court","cover","cow","cowboy","crack","cream","create","creature","crew","crop","cross","crowd","cry","cup","curious","current","curve","customs","cut","cutting","daily","damage","dance","danger","dangerous","dark","darkness","date","daughter","dawn","day","dead","deal","dear","death","decide","declared","deep","deeply","deer","definition","degree","depend","depth","describe","desert","design","desk","detail","determine","develop","development","diagram","diameter","did","die","differ","difference","different","difficult","difficulty","dig","dinner","direct","direction","directly","dirt","dirty","disappear","discover","discovery","discuss","discussion","disease","dish","distance","distant","divide","division","do","doctor","does","dog","doing","doll","dollar","done","donkey","door","dot","double","doubt","down","dozen","draw","drawn","dream","dress","drew","dried","drink","drive","driven","driver","driving","drop","dropped","drove","dry","duck","due","dug","dull","during","dust","duty","each","eager","ear","earlier","early","earn","earth","easier","easily","east","easy","eat","eaten","edge","education","effect","effort","egg","eight","either","electric","electricity","element","elephant","eleven","else","empty","end","enemy","energy","engine","engineer","enjoy","enough","enter","entire","entirely","environment","equal","equally","equator","equipment","escape","especially","essential","establish","even","evening","event","eventually","ever","every","everybody","everyone","everything","everywhere","evidence","exact","exactly","examine","example","excellent","except","exchange","excited","excitement","exciting","exclaimed","exercise","exist","expect","experience","experiment","explain","explanation","explore","express","expression","extra","eye","face","facing","fact","factor","factory","failed","fair","fairly","fall","fallen","familiar","family","famous","far","farm","farmer","farther","fast","fastened","faster","fat","father","favorite","fear","feathers","feature","fed","feed","feel","feet","fell","fellow","felt","fence","few","fewer","field","fierce","fifteen","fifth","fifty","fight","fighting","figure","fill","film","final","finally","find","fine","finest","finger","finish","fire","fireplace","firm","first","fish","five","fix","flag","flame","flat","flew","flies","flight","floating","floor","flow","flower","fly","fog","folks","follow","food","foot","football","for","force","foreign","forest","forget","forgot","forgotten","form","former","fort","forth","forty","forward","fought","found","four","fourth","fox","frame","free","freedom","frequently","fresh","friend","friendly","frighten","frog","from","front","frozen","fruit","fuel","full","fully","fun","function","funny","fur","furniture","further","future","gain","game","garage","garden","gas","gasoline","gate","gather","gave","general","generally","gentle","gently","get","getting","giant","gift","girl","give","given","giving","glad","glass","globe","go","goes","gold","golden","gone","good","goose","got","government","grabbed","grade","gradually","grain","grandfather","grandmother","graph","grass","gravity","gray","great","greater","greatest","greatly","green","grew","ground","group","grow","grown","growth","guard","guess","guide","gulf","gun","habit","had","hair","half","halfway","hall","hand","handle","handsome","hang","happen","happened","happily","happy","harbor","hard","harder","hardly","has","hat","have","having","hay","he","headed","heading","health","heard","hearing","heart","heat","heavy","height","held","hello","help","helpful","her","herd","here","herself","hidden","hide","high","higher","highest","highway","hill","him","himself","his","history","hit","hold","hole","hollow","home","honor","hope","horn","horse","hospital","hot","hour","house","how","however","huge","human","hundred","hung","hungry","hunt","hunter","hurried","hurry","hurt","husband","ice","idea","identity","if","ill","image","imagine","immediately","importance","important","impossible","improve","in","inch","include","including","income","increase","indeed","independent","indicate","individual","industrial","industry","influence","information","inside","instance","instant","instead","instrument","interest","interior","into","introduced","invented","involved","iron","is","island","it","its","itself","jack","jar","jet","job","join","joined","journey","joy","judge","jump","jungle","just","keep","kept","key","kids","kill","kind","kitchen","knew","knife","know","knowledge","known","label","labor","lack","lady","laid","lake","lamp","land","language","large","larger","largest","last","late","later","laugh","law","lay","layers","lead","leader","leaf","learn","least","leather","leave","leaving","led","left","leg","length","lesson","let","letter","level","library","lie","life","lift","light","like","likely","limited","line","lion","lips","liquid","list","listen","little","live","living","load","local","locate","location","log","lonely","long","longer","look","loose","lose","loss","lost","lot","loud","love","lovely","low","lower","luck","lucky","lunch","lungs","lying","machine","machinery","mad","made","magic","magnet","mail","main","mainly","major","make","making","man","managed","manner","manufacturing","many","map","mark","market","married","mass","massage","master","material","mathematics","matter","may","maybe","me","meal","mean","means","meant","measure","meat","medicine","meet","melted","member","memory","men","mental","merely","met","metal","method","mice","middle","might","mighty","mile","military","milk","mill","mind","mine","minerals","minute","mirror","missing","mission","mistake","mix","mixture","model","modern","molecular","moment","money","monkey","month","mood","moon","more","morning","most","mostly","mother","motion","motor","mountain","mouse","mouth","move","movement","movie","moving","mud","muscle","music","musical","must","my","myself","mysterious","nails","name","nation","national","native","natural","naturally","nature","near","nearby","nearer","nearest","nearly","necessary","neck","needed","needle","needs","negative","neighbor","neighborhood","nervous","nest","never","new","news","newspaper","next","nice","night","nine","no","nobody","nodded","noise","none","noon","nor","north","nose","not","note","noted","nothing","notice","noun","now","number","numeral","nuts","object","observe","obtain","occasionally","occur","ocean","of","off","offer","office","officer","official","oil","old","older","oldest","on","once","one","only","onto","open","operation","opinion","opportunity","opposite","or","orange","orbit","order","ordinary","organization","organized","origin","original","other","ought","our","ourselves","out","outer","outline","outside","over","own","owner","oxygen","pack","package","page","paid","pain","paint","pair","palace","pale","pan","paper","paragraph","parallel","parent","park","part","particles","particular","particularly","partly","parts","party","pass","passage","past","path","pattern","pay","peace","pen","pencil","people","per","percent","perfect","perfectly","perhaps","period","person","personal","pet","phrase","physical","piano","pick","picture","pictured","pie","piece","pig","pile","pilot","pine","pink","pipe","pitch","place","plain","plan","plane","planet","planned","planning","plant","plastic","plate","plates","play","pleasant","please","pleasure","plenty","plural","plus","pocket","poem","poet","poetry","point","pole","police","policeman","political","pond","pony","pool","poor","popular","population","porch","port","position","positive","possible","possibly","post","pot","potatoes","pound","pour","powder","power","powerful","practical","practice","prepare","present","president","press","pressure","pretty","prevent","previous","price","pride","primitive","principal","principle","printed","private","prize","probably","problem","process","produce","product","production","program","progress","promised","proper","properly","property","protection","proud","prove","provide","public","pull","pupil","pure","purple","purpose","push","put","putting","quarter","queen","question","quick","quickly","quiet","quietly","quite","rabbit","race","radio","railroad","rain","raise","ran","ranch","range","rapidly","rate","rather","raw","rays","reach","read","reader","ready","real","realize","rear","reason","recall","receive","recent","recently","recognize","record","red","refer","refused","region","regular","related","relationship","religious","remain","remarkable","remember","remove","repeat","replace","replied","report","represent","require","research","respect","rest","result","return","review","rhyme","rhythm","rice","rich","ride","riding","right","ring","rise","rising","river","road","roar","rock","rocket","rocky","rod","roll","roof","room","root","rope","rose","rough","round","route","row","rubbed","rubber","rule","ruler","run","running","rush","sad","saddle","safe","safety","said","sail","sale","salmon","salt","same","sand","sang","sat","satellites","satisfied","save","saved","saw","say","scale","scared","scene","school","science","scientific","scientist","score","screen","sea","search","season","seat","second","secret","section","see","seed","seeing","seems","seen","seldom","select","selection","sell","send","sense","sent","sentence","separate","series","serious","serve","service","sets","setting","settle","settlers","seven","several","shade","shadow","shake","shaking","shall","shallow","shape","share","sharp","she","sheep","sheet","shelf","shells","shelter","shine","shinning","ship","shirt","shoe","shoot","shop","shore","short","shorter","shot","should","shoulder","shout","show","shown","shut","sick","sides","sight","sign","signal","silence","silent","silk","silly","silver","similar","simple","simplest","simply","since","sing","single","sink","sister","sit","sitting","situation","six","size","skill","skin","sky","slabs","slave","sleep","slept","slide","slight","slightly","slip","slipped","slope","slow","slowly","small","smaller","smallest","smell","smile","smoke","smooth","snake","snow","so","soap","social","society","soft","softly","soil","solar","sold","soldier","solid","solution","solve","some","somebody","somehow","someone","something","sometime","somewhere","son","song","soon","sort","sound","source","south","southern","space","speak","special","species","specific","speech","speed","spell","spend","spent","spider","spin","spirit","spite","split","spoken","sport","spread","spring","square","stage","stairs","stand","standard","star","stared","start","state","statement","station","stay","steady","steam","steel","steep","stems","step","stepped","stick","stiff","still","stock","stomach","stone","stood","stop","stopped","store","storm","story","stove","straight","strange","stranger","straw","stream","street","strength","stretch","strike","string","strip","strong","stronger","struck","structure","struggle","stuck","student","studied","studying","subject","substance","success","successful","such","sudden","suddenly","sugar","suggest","suit","sum","summer","sun","sunlight","supper","supply","support","suppose","sure","surface","surprise","surrounded","swam","sweet","swept","swim","swimming","swing","swung","syllable","symbol","system","table","tail","take","taken","tales","talk","tall","tank","tape","task","taste","taught","tax","tea","teach","teacher","team","tears","teeth","telephone","television","tell","temperature","ten","tent","term","terrible","test","than","thank","that","thee","them","themselves","then","theory","there","therefore","these","they","thick","thin","thing","think","third","thirty","this","those","thou","though","thought","thousand","thread","three","threw","throat","through","throughout","throw","thrown","thumb","thus","thy","tide","tie","tight","tightly","till","time","tin","tiny","tip","tired","title","to","tobacco","today","together","told","tomorrow","tone","tongue","tonight","too","took","tool","top","topic","torn","total","touch","toward","tower","town","toy","trace","track","trade","traffic","trail","train","transportation","trap","travel","treated","tree","triangle","tribe","trick","tried","trip","troops","tropical","trouble","truck","trunk","truth","try","tube","tune","turn","twelve","twenty","twice","two","type","typical","uncle","under","underline","understanding","unhappy","union","unit","universe","unknown","unless","until","unusual","up","upon","upper","upward","us","use","useful","using","usual","usually","valley","valuable","value","vapor","variety","various","vast","vegetable","verb","vertical","very","vessels","victory","view","village","visit","visitor","voice","volume","vote","vowel","voyage","wagon","wait","walk","wall","want","war","warm","warn","was","wash","waste","watch","water","wave","way","we","weak","wealth","wear","weather","week","weigh","weight","welcome","well","went","were","west","western","wet","whale","what","whatever","wheat","wheel","when","whenever","where","wherever","whether","which","while","whispered","whistle","white","who","whole","whom","whose","why","wide","widely","wife","wild","will","willing","win","wind","window","wing","winter","wire","wise","wish","with","within","without","wolf","women","won","wonder","wonderful","wood","wooden","wool","word","wore","work","worker","world","worried","worry","worse","worth","would","wrapped","write","writer","writing","written","wrong","wrote","yard","year","yellow","yes","yesterday","yet","you","young","younger","your","yourself","youth","zero","zebra","zipper","zoo","zulu"];function it(e){function t(){return e&&e.maxLength>1?function(){let t,r=!1;for(;!r;)t=n(),t.length<=e.maxLength&&(r=!0);return t}():n()}function n(){return rt[r(rt.length)]}function r(e){return Math.floor(Math.random()*e)}if(void 0===e)return t();"number"==typeof e&&(e={exactly:e}),e.exactly&&(e.min=e.exactly,e.max=e.exactly),"number"!=typeof e.wordsPerString&&(e.wordsPerString=1),"function"!=typeof e.formatter&&(e.formatter=e=>e),"string"!=typeof e.separator&&(e.separator=" ");for(var i=e.min+r(e.max+1-e.min),s=[],o="",a=0,c=0;c<i*e.wordsPerString;c++)a===e.wordsPerString-1?o+=e.formatter(t(),a):o+=e.formatter(t(),a)+e.separator,a++,(c+1)%e.wordsPerString==0&&(s.push(o),o="",a=0);return e.join&&(s=s.join(e.join)),s}var st=it;it.wordList=rt;
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
     */function ct(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function lt(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function ut(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function ht(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function dt(){const e=ct();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function ft(){return"object"==typeof indexedDB}class pt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mt.prototype.create)}}class mt{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(gt,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new pt(r,o,n)}}const gt=/\{\$([^}]+)}/g;function yt(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(vt(n)&&vt(s)){if(!yt(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function vt(e){return null!==e&&"object"==typeof e}
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
     */function wt(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function bt(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function Tt(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}class It{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Et),void 0===r.error&&(r.error=Et),void 0===r.complete&&(r.complete=Et);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Et(){}
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
     */function kt(e,t=1e3,n=2){const r=t*Math.pow(n,e),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+i)}
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
     */function _t(e){return e&&e._delegate?e._delegate:e}class St{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
     */const At="[DEFAULT]";
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
     */class Ct{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new at;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
     */(e))try{this.getOrInitializeService({instanceIdentifier:At})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===At?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:At:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Rt{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ct(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
     */var Nt;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(Nt||(Nt={}));const Dt={debug:Nt.DEBUG,verbose:Nt.VERBOSE,info:Nt.INFO,warn:Nt.WARN,error:Nt.ERROR,silent:Nt.SILENT},Ot=Nt.INFO,$t={[Nt.DEBUG]:"log",[Nt.VERBOSE]:"log",[Nt.INFO]:"info",[Nt.WARN]:"warn",[Nt.ERROR]:"error"},xt=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=$t[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class Pt{constructor(e){this.name=e,this._logLevel=Ot,this._logHandler=xt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Nt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Dt[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Nt.DEBUG,...e),this._logHandler(this,Nt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Nt.VERBOSE,...e),this._logHandler(this,Nt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Nt.INFO,...e),this._logHandler(this,Nt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Nt.WARN,...e),this._logHandler(this,Nt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Nt.ERROR,...e),this._logHandler(this,Nt.ERROR,...e)}}
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
     */class Lt{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Mt="@firebase/app",Ut="0.7.11",Ft=new Pt("@firebase/app"),Vt="[DEFAULT]",jt={[Mt]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},qt=new Map,Bt=new Map;function zt(e,t){try{e.container.addComponent(t)}catch(n){Ft.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ht(e){const t=e.name;if(Bt.has(t))return Ft.debug(`There were multiple attempts to register component ${t}.`),!1;Bt.set(t,e);for(const t of qt.values())zt(t,e);return!0}function Kt(e,t){return e.container.getProvider(t)}
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
     */const Gt=new mt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
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
class Wt{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new St("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gt.create("app-deleted",{appName:this._name})}}
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
     */const Jt="9.6.1";function Qt(e="[DEFAULT]"){const t=qt.get(e);if(!t)throw Gt.create("no-app",{appName:e});return t}function Xt(e,t,n){var r;let i=null!==(r=jt[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ft.warn(e.join(" "))}Ht(new St(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
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
     */var Yt;Yt="",Ht(new St("platform-logger",(e=>new Lt(e)),"PRIVATE")),Xt(Mt,Ut,Yt),Xt(Mt,Ut,"esm2017"),Xt("fire-js","");
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
Xt("firebase","9.6.1","app");"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var Zt=function(e){var t={exports:{}};return e(t,t.exports),t.exports}((function(e,t){!function(e){function t(e){return Array.prototype.slice.call(e)}function n(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function r(e,t,r){var i,s=new Promise((function(s,o){n(i=e[t].apply(e,r)).then(s,o)}));return s.request=i,s}function i(e,t,n){var i=r(e,t,n);return i.then((function(e){if(e)return new u(e,i.request)}))}function s(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function o(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return r(this[t],i,arguments)})}))}function a(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return this[t][r].apply(this[t],arguments)})}))}function c(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return i(this[t],r,arguments)})}))}function l(e){this._index=e}function u(e,t){this._cursor=e,this._request=t}function h(e){this._store=e}function d(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function f(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new d(n)}function p(e){this._db=e}function m(e,t,n){var i=r(indexedDB,"open",[e,t]),s=i.request;return s&&(s.onupgradeneeded=function(e){n&&n(new f(s.result,e.oldVersion,s.transaction))}),i.then((function(e){return new p(e)}))}function g(e){return r(indexedDB,"deleteDatabase",[e])}s(l,"_index",["name","keyPath","multiEntry","unique"]),o(l,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),c(l,"_index",IDBIndex,["openCursor","openKeyCursor"]),s(u,"_cursor",["direction","key","primaryKey","value"]),o(u,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(u.prototype[e]=function(){var t=this,r=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,r),n(t._request).then((function(e){if(e)return new u(e,t._request)}))}))})})),h.prototype.createIndex=function(){return new l(this._store.createIndex.apply(this._store,arguments))},h.prototype.index=function(){return new l(this._store.index.apply(this._store,arguments))},s(h,"_store",["name","keyPath","indexNames","autoIncrement"]),o(h,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),c(h,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),a(h,"_store",IDBObjectStore,["deleteIndex"]),d.prototype.objectStore=function(){return new h(this._tx.objectStore.apply(this._tx,arguments))},s(d,"_tx",["objectStoreNames","mode"]),a(d,"_tx",IDBTransaction,["abort"]),f.prototype.createObjectStore=function(){return new h(this._db.createObjectStore.apply(this._db,arguments))},s(f,"_db",["name","version","objectStoreNames"]),a(f,"_db",IDBDatabase,["deleteObjectStore","close"]),p.prototype.transaction=function(){return new d(this._db.transaction.apply(this._db,arguments))},s(p,"_db",["name","version","objectStoreNames"]),a(p,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[h,l].forEach((function(n){e in n.prototype&&(n.prototype[e.replace("open","iterate")]=function(){var n=t(arguments),r=n[n.length-1],i=this._store||this._index,s=i[e].apply(i,n.slice(0,-1));s.onsuccess=function(){r(s.result)}})}))})),[l,h].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,r=[];return new Promise((function(i){n.iterateCursor(e,(function(e){e?(r.push(e.value),void 0===t||r.length!=t?e.continue():i(r)):i(r)}))}))})})),e.openDb=m,e.deleteDb=g,Object.defineProperty(e,"__esModule",{value:!0})}(t)}));const en="@firebase/installations",tn="0.5.4",nn=1e4,rn="w:0.5.4",sn="FIS_v2",on=36e5,an=new mt("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function cn(e){return e instanceof pt&&e.code.includes("request-failed")}
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
     */function ln({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function un(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function hn(e,t){const n=(await t.json()).error;return an.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function dn({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function fn(e,{refreshToken:t}){const n=dn(e);return n.append("Authorization",function(e){return`FIS_v2 ${e}`}
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
     */(t)),n}async function pn(e){const t=await e();return t.status>=500&&t.status<600?e():t}
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
function mn(e){return new Promise((t=>{setTimeout(t,e)}))}
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
const gn=/^[cdef][\w-]{21}$/;function yn(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
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
     */(e);return gn.test(t)?t:""}catch(e){return""}}function vn(e){return`${e.appName}!${e.appId}`}
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
     */const wn=new Map;function bn(e,t){const n=vn(e);Tn(n,t),function(e,t){const n=function(){!In&&"BroadcastChannel"in self&&(In=new BroadcastChannel("[Firebase] FID Change"),In.onmessage=e=>{Tn(e.data.key,e.data.fid)});return In}();n&&n.postMessage({key:e,fid:t});0===wn.size&&In&&(In.close(),In=null)}(n,t)}function Tn(e,t){const n=wn.get(e);if(n)for(const e of n)e(t)}let In=null;
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
const En="firebase-installations-store";let kn=null;function _n(){return kn||(kn=Zt.openDb("firebase-installations-database",1,(e=>{if(0===e.oldVersion)e.createObjectStore(En)}))),kn}async function Sn(e,t){const n=vn(e),r=(await _n()).transaction(En,"readwrite"),i=r.objectStore(En),s=await i.get(n);return await i.put(t,n),await r.complete,s&&s.fid===t.fid||bn(e,t.fid),t}async function An(e){const t=vn(e),n=(await _n()).transaction(En,"readwrite");await n.objectStore(En).delete(t),await n.complete}async function Cn(e,t){const n=vn(e),r=(await _n()).transaction(En,"readwrite"),i=r.objectStore(En),s=await i.get(n),o=t(s);return void 0===o?await i.delete(n):await i.put(o,n),await r.complete,!o||s&&s.fid===o.fid||bn(e,o.fid),o}
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
     */async function Rn(e){let t;const n=await Cn(e,(n=>{const r=function(e){return On(e||{fid:yn(),registrationStatus:0})}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(an.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function(e,{fid:t}){const n=ln(e),r=dn(e),i={fid:t,authVersion:sn,appId:e.appId,sdkVersion:rn},s={method:"POST",headers:r,body:JSON.stringify(i)},o=await pn((()=>fetch(n,s)));if(o.ok){const e=await o.json();return{fid:e.fid||t,registrationStatus:2,refreshToken:e.refreshToken,authToken:un(e.authToken)}}throw await hn("Create Installation",o)}(e,t);return Sn(e,n)}catch(n){throw cn(n)&&409===n.customData.serverCode?await An(e):await Sn(e,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Nn(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function Nn(e){let t=await Dn(e);for(;1===t.registrationStatus;)await mn(100),t=await Dn(e);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await Rn(e);return n||t}return t}function Dn(e){return Cn(e,(e=>{if(!e)throw an.create("installation-not-found");return On(e)}))}function On(e){return 1===(t=e).registrationStatus&&t.registrationTime+nn<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
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
     */}async function $n({appConfig:e,platformLoggerProvider:t},n){const r=function(e,{fid:t}){return`${ln(e)}/${t}/authTokens:generate`}
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
     */(e,n),i=fn(e,n),s=t.getImmediate({optional:!0});s&&i.append("x-firebase-client",s.getPlatformInfoString());const o={installation:{sdkVersion:rn}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await pn((()=>fetch(r,a)));if(c.ok){return un(await c.json())}throw await hn("Generate Auth Token",c)}async function xn(e,t=!1){let n;const r=await Cn(e.appConfig,(r=>{if(!Ln(r))throw an.create("not-registered");const i=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+on}(e)}(i))return r;if(1===i.requestStatus)return n=async function(e,t){let n=await Pn(e.appConfig);for(;1===n.authToken.requestStatus;)await mn(100),n=await Pn(e.appConfig);const r=n.authToken;return 0===r.requestStatus?xn(e,t):r}(e,t),r;{if(!navigator.onLine)throw an.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=async function(e,t){try{const n=await $n(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Sn(e.appConfig,r),n}catch(n){if(!cn(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Sn(e.appConfig,n)}else await An(e.appConfig);throw n}}(e,t),t}}));return n?await n:r.authToken}function Pn(e){return Cn(e,(e=>{if(!Ln(e))throw an.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+nn<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
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
     */}))}function Ln(e){return void 0!==e&&2===e.registrationStatus}
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
async function Mn(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await Rn(e);t&&await t}
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
     */(n.appConfig);return(await xn(n,t)).token}function Un(e){return an.create("missing-app-config-values",{valueName:e})}
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
     */const Fn="installations",Vn=e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw Un("App Configuration");if(!e.name)throw Un("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Un(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,platformLoggerProvider:Kt(t,"platform-logger"),_delete:()=>Promise.resolve()}},jn=e=>{const t=Kt(e.getProvider("app").getImmediate(),Fn).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:r}=await Rn(t.appConfig);return r?r.catch(console.error):xn(t).catch(console.error),n.fid}(t),getToken:e=>Mn(t,e)}};Ht(new St(Fn,Vn,"PUBLIC")),Ht(new St("installations-internal",jn,"PRIVATE")),Xt(en,tn),Xt(en,tn,"esm2017");
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
const qn="analytics",Bn="https://www.googletagmanager.com/gtag/js",zn=new Pt("@firebase/analytics");
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
function Hn(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function Kn(e,t,n,r){return async function(i,s,o){try{"event"===i?await async function(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let e=i.send_to;Array.isArray(e)||(e=[e]);const r=await Hn(n);for(const n of e){const e=r.find((e=>e.measurementId===n)),i=e&&t[e.appId];if(!i){s=[];break}s.push(i)}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(e){zn.error(e)}}(e,t,n,s,o):"config"===i?await async function(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const e=(await Hn(n)).find((e=>e.measurementId===i));e&&await t[e.appId]}}catch(e){zn.error(e)}e("config",i,s)}(e,t,n,r,s,o):e("set",s)}catch(e){zn.error(e)}}}
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
const Gn=new mt("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const Wn=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function Jn(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Qn(e,t=Wn,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw Gn.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Gn.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Yn;return setTimeout((async()=>{a.abort()}),void 0!==n?n:6e4),Xn({appId:r,apiKey:i,measurementId:s},o,a,t)}async function Xn(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Wn){const{appId:s,measurementId:o}=e;try{await function(e,t){return new Promise(((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener((()=>{clearTimeout(s),r(Gn.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(r,t)}catch(e){if(o)return zn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${e.message}]`),{appId:s,measurementId:o};throw e}try{const t=await async function(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:Jn(r)},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(s,i);if(200!==o.status&&304!==o.status){let e="";try{const n=await o.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw Gn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:e})}return o.json()}(e);return i.deleteThrottleMetadata(s),t}catch(t){if(!function(e){if(!(e instanceof pt&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(t)){if(i.deleteThrottleMetadata(s),o)return zn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${t.message}]`),{appId:s,measurementId:o};throw t}const a=503===Number(t.customData.httpStatus)?kt(n,i.intervalMillis,30):kt(n,i.intervalMillis),c={throttleEndTimeMillis:Date.now()+a,backoffCount:n+1};return i.setThrottleMetadata(s,c),zn.debug(`Calling attemptFetch again in ${a} millis`),Xn(e,c,r,i)}}class Yn{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
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
     */async function Zn(){if(!ft())return zn.warn(Gn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}catch(e){return zn.warn(Gn.create("indexeddb-unavailable",{errorInfo:e}).message),!1}return!0}async function er(e,t,n,r,i,s,o){var a;const c=Qn(e);c.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&zn.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>zn.error(e))),t.push(c);const l=Zn().then((e=>e?r.getId():void 0)),[u,h]=await Promise.all([c,l]);(function(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Bn))return t;return null})()||function(e,t){const n=document.createElement("script");n.src=`${Bn}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}(s,u.measurementId),i("js",new Date);const d=null!==(a=null==o?void 0:o.config)&&void 0!==a?a:{};return d.origin="firebase",d.update=!0,null!=h&&(d.firebase_id=h),i("config",u.measurementId,d),u.measurementId}
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
     */class tr{constructor(e){this.app=e}_delete(){return delete nr[this.app.options.appId],Promise.resolve()}}let nr={},rr=[];const ir={};let sr,or,ar="dataLayer",cr=!1;function lr(){const e=[];if(ut()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=Gn.create("invalid-analytics-context",{errorInfo:t});zn.warn(n.message)}}function ur(e,t,n){lr();const r=e.options.appId;if(!r)throw Gn.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw Gn.create("no-api-key");zn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=nr[r])throw Gn.create("already-exists",{id:r});if(!cr){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(ar);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,r,i){let s=function(...e){window[r].push(arguments)};return window[i]&&"function"==typeof window[i]&&(s=window[i]),window[i]=Kn(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}(nr,rr,ir,ar,"gtag");or=e,sr=t,cr=!0}nr[r]=er(e,rr,ir,t,sr,ar,n);return new tr(e)}
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
     */function hr(e=Qt()){const t=Kt(e=_t(e),qn);return t.isInitialized()?t.getImmediate():function(e,t={}){const n=Kt(e,qn);if(n.isInitialized()){const e=n.getImmediate();if(yt(t,n.getOptions()))return e;throw Gn.create("already-initialized")}return n.initialize({options:t})}(e)}function dr(e,t,n,r){e=_t(e),async function(e,t,n,r,i){if(i&&i.global)e("event",n,r);else{const i=await t;e("event",n,Object.assign(Object.assign({},r),{send_to:i}))}}(or,nr[e.app.options.appId],t,n,r).catch((e=>zn.error(e)))}const fr="@firebase/analytics",pr="0.7.4";Ht(new St(qn,((e,{options:t})=>ur(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),Ht(new St("analytics-internal",(function(e){try{const t=e.getProvider(qn).getImmediate();return{logEvent:(e,n,r)=>dr(t,e,n,r)}}catch(e){throw Gn.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),Xt(fr,pr),Xt(fr,pr,"esm2017");var mr,gr="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},yr=yr||{},vr=gr||self;function wr(){}function br(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function Tr(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var Ir="closure_uid_"+(1e9*Math.random()>>>0),Er=0;function kr(e,t,n){return e.call.apply(e.bind,arguments)}function _r(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function Sr(e,t,n){return(Sr=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?kr:_r).apply(null,arguments)}function Ar(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function Cr(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function Rr(){this.s=this.s,this.o=this.o}var Nr={};Rr.prototype.s=!1,Rr.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var e=function(e){return Object.prototype.hasOwnProperty.call(e,Ir)&&e[Ir]||(e[Ir]=++Er)}(this);delete Nr[e]}},Rr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Dr=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},Or=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,i="string"==typeof e?e.split(""):e;for(let s=0;s<r;s++)s in i&&t.call(n,i[s],s,e)};function $r(e){return Array.prototype.concat.apply([],arguments)}function xr(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Pr(e){return/^[\s\xa0]*$/.test(e)}var Lr,Mr=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Ur(e,t){return-1!=e.indexOf(t)}function Fr(e,t){return e<t?-1:e>t?1:0}e:{var Vr=vr.navigator;if(Vr){var jr=Vr.userAgent;if(jr){Lr=jr;break e}}Lr=""}function qr(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Br(e){const t={};for(const n in e)t[n]=e[n];return t}var zr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Hr(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<zr.length;t++)n=zr[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Kr(e){return Kr[" "](e),e}Kr[" "]=wr;var Gr,Wr,Jr=Ur(Lr,"Opera"),Qr=Ur(Lr,"Trident")||Ur(Lr,"MSIE"),Xr=Ur(Lr,"Edge"),Yr=Xr||Qr,Zr=Ur(Lr,"Gecko")&&!(Ur(Lr.toLowerCase(),"webkit")&&!Ur(Lr,"Edge"))&&!(Ur(Lr,"Trident")||Ur(Lr,"MSIE"))&&!Ur(Lr,"Edge"),ei=Ur(Lr.toLowerCase(),"webkit")&&!Ur(Lr,"Edge");function ti(){var e=vr.document;return e?e.documentMode:void 0}e:{var ni="",ri=(Wr=Lr,Zr?/rv:([^\);]+)(\)|;)/.exec(Wr):Xr?/Edge\/([\d\.]+)/.exec(Wr):Qr?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Wr):ei?/WebKit\/(\S+)/.exec(Wr):Jr?/(?:Version)[ \/]?(\S+)/.exec(Wr):void 0);if(ri&&(ni=ri?ri[1]:""),Qr){var ii=ti();if(null!=ii&&ii>parseFloat(ni)){Gr=String(ii);break e}}Gr=ni}var si,oi={};function ai(){return function(e){var t=oi;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=Mr(String(Gr)).split("."),n=Mr("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=Fr(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||Fr(0==i[2].length,0==s[2].length)||Fr(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(vr.document&&Qr){var ci=ti();si=ci||(parseInt(Gr,10)||void 0)}else si=void 0;var li=si,ui=function(){if(!vr.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{vr.addEventListener("test",wr,t),vr.removeEventListener("test",wr,t)}catch(e){}return e}();function hi(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function di(e,t){if(hi.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Zr){e:{try{Kr(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:fi[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&di.Z.h.call(this)}}hi.prototype.h=function(){this.defaultPrevented=!0},Cr(di,hi);var fi={2:"touch",3:"pen",4:"mouse"};di.prototype.h=function(){di.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var pi="closure_listenable_"+(1e6*Math.random()|0),mi=0;function gi(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++mi,this.ca=this.fa=!1}function yi(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function vi(e){this.src=e,this.g={},this.h=0}function wi(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=Dr(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(yi(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function bi(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==r)return i}return-1}vi.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=bi(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):((t=new gi(t,this.src,s,!!r,i)).fa=n,e.push(t)),t};var Ti="closure_lm_"+(1e6*Math.random()|0),Ii={};function Ei(e,t,n,r,i){if(r&&r.once)return _i(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Ei(e,t[s],n,r,i);return null}return n=Oi(n),e&&e[pi]?e.N(t,n,Tr(r)?!!r.capture:!!r,i):ki(e,t,n,!1,r,i)}function ki(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Tr(i)?!!i.capture:!!i,a=Ni(e);if(a||(e[Ti]=a=new vi(e)),(n=a.add(t,n,r,o,s)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}var t=Ri;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)ui||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Ci(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function _i(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)_i(e,t[s],n,r,i);return null}return n=Oi(n),e&&e[pi]?e.O(t,n,Tr(r)?!!r.capture:!!r,i):ki(e,t,n,!0,r,i)}function Si(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Si(e,t[s],n,r,i);else r=Tr(r)?!!r.capture:!!r,n=Oi(n),e&&e[pi]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=bi(s=e.g[t],n,r,i))&&(yi(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Ni(e))&&(t=e.g[t.toString()],e=-1,t&&(e=bi(t,n,r,i)),(n=-1<e?t[e]:null)&&Ai(n))}function Ai(e){if("number"!=typeof e&&e&&!e.ca){var t=e.src;if(t&&t[pi])wi(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Ci(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ni(t))?(wi(n,e),0==n.h&&(n.src=null,t[Ti]=null)):yi(e)}}}function Ci(e){return e in Ii?Ii[e]:Ii[e]="on"+e}function Ri(e,t){if(e.ca)e=!0;else{t=new di(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&Ai(e),e=n.call(r,t)}return e}function Ni(e){return(e=e[Ti])instanceof vi?e:null}var Di="__closure_events_fn_"+(1e9*Math.random()>>>0);function Oi(e){return"function"==typeof e?e:(e[Di]||(e[Di]=function(t){return e.handleEvent(t)}),e[Di])}function $i(){Rr.call(this),this.i=new vi(this),this.P=this,this.I=null}function xi(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new hi(t,e);else if(t instanceof hi)t.target=t.target||e;else{var i=t;Hr(t=new hi(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Pi(o,r,!0,t)&&i}if(i=Pi(o=t.g=e,r,!0,t)&&i,i=Pi(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=Pi(o=t.g=n[s],r,!1,t)&&i}function Pi(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&wi(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}Cr($i,Rr),$i.prototype[pi]=!0,$i.prototype.removeEventListener=function(e,t,n,r){Si(this,e,t,n,r)},$i.prototype.M=function(){if($i.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)yi(n[r]);delete t.g[e],t.h--}}this.I=null},$i.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},$i.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Li=vr.JSON.stringify;function Mi(){var e=zi;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Ui,Fi=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Vi),(e=>e.reset()));class Vi{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function ji(e){vr.setTimeout((()=>{throw e}),0)}function qi(e,t){Ui||function(){var e=vr.Promise.resolve(void 0);Ui=function(){e.then(Hi)}}(),Bi||(Ui(),Bi=!0),zi.add(e,t)}var Bi=!1,zi=new class{constructor(){this.h=this.g=null}add(e,t){const n=Fi.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function Hi(){for(var e;e=Mi();){try{e.h.call(e.g)}catch(e){ji(e)}var t=Fi;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Bi=!1}function Ki(e,t){$i.call(this),this.h=e||1,this.g=t||vr,this.j=Sr(this.kb,this),this.l=Date.now()}function Gi(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function Wi(e,t,n){if("function"==typeof e)n&&(e=Sr(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=Sr(e.handleEvent,e)}return 2147483647<Number(t)?-1:vr.setTimeout(e,t||0)}function Ji(e){e.g=Wi((()=>{e.g=null,e.i&&(e.i=!1,Ji(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}Cr(Ki,$i),(mr=Ki.prototype).da=!1,mr.S=null,mr.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),xi(this,"tick"),this.da&&(Gi(this),this.start()))}},mr.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},mr.M=function(){Ki.Z.M.call(this),Gi(this),delete this.g};class Qi extends Rr{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ji(this)}M(){super.M(),this.g&&(vr.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xi(e){Rr.call(this),this.h=e,this.g={}}Cr(Xi,Rr);var Yi=[];function Zi(e,t,n,r){Array.isArray(n)||(n&&(Yi[0]=n.toString()),n=Yi);for(var i=0;i<n.length;i++){var s=Ei(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function es(e){qr(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Ai(e)}),e),e.g={}}function ts(){this.g=!0}function ns(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Li(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}Xi.prototype.M=function(){Xi.Z.M.call(this),es(this)},Xi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},ts.prototype.Aa=function(){this.g=!1},ts.prototype.info=function(){};var rs={},is=null;function ss(){return is=is||new $i}function os(e){hi.call(this,rs.Ma,e)}function as(e){const t=ss();xi(t,new os(t,e))}function cs(e,t){hi.call(this,rs.STAT_EVENT,e),this.stat=t}function ls(e){const t=ss();xi(t,new cs(t,e))}function us(e,t){hi.call(this,rs.Na,e),this.size=t}function hs(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return vr.setTimeout((function(){e()}),t)}rs.Ma="serverreachability",Cr(os,hi),rs.STAT_EVENT="statevent",Cr(cs,hi),rs.Na="timingevent",Cr(us,hi);var ds={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},fs={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ps(){}function ms(e){return e.h||(e.h=e.i())}function gs(){}ps.prototype.h=null;var ys,vs={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ws(){hi.call(this,"d")}function bs(){hi.call(this,"c")}function Ts(){}function Is(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new Xi(this),this.P=ks,e=Yr?125:void 0,this.W=new Ki(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Es}function Es(){this.i=null,this.g="",this.h=!1}Cr(ws,hi),Cr(bs,hi),Cr(Ts,ps),Ts.prototype.g=function(){return new XMLHttpRequest},Ts.prototype.i=function(){return{}},ys=new Ts;var ks=45e3,_s={},Ss={};function As(e,t,n){e.K=1,e.v=Qs(zs(t)),e.s=n,e.U=!0,Cs(e,null)}function Cs(e,t){e.F=Date.now(),Os(e),e.A=zs(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),lo(n.h,"t",r),e.C=0,n=e.l.H,e.h=new Es,e.g=ua(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Qi(Sr(e.Ia,e,e.g),e.O)),Zi(e.V,e.g,"readystatechange",e.gb),t=e.H?Br(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),as(1),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.X,e.s)}function Rs(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function Ns(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=Ds(e,n),r==Ss){4==t&&(e.o=4,ls(14),i=!1),ns(e.j,e.m,null,"[Incomplete Response]");break}if(r==_s){e.o=4,ls(15),ns(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}ns(e.j,e.m,r,null),Ms(e,r)}Rs(e)&&r!=Ss&&r!=_s&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,ls(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,(t=e.l).g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),na(t),t.L=!0,ls(11))):(ns(e.j,e.m,n,"[Invalid Chunked Response]"),Ls(e),Ps(e))}function Ds(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Ss:(n=Number(t.substring(n,r)),isNaN(n)?_s:(r+=1)+n>t.length?Ss:(t=t.substr(r,n),e.C=r+n,t))}function Os(e){e.Y=Date.now()+e.P,$s(e,e.P)}function $s(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=hs(Sr(e.eb,e),t)}function xs(e){e.B&&(vr.clearTimeout(e.B),e.B=null)}function Ps(e){0==e.l.G||e.I||sa(e.l,e)}function Ls(e){xs(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Gi(e.W),es(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Ms(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||go(n.i,e)))if(n.I=e.N,!e.J&&go(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;ia(n),Go(n)}ta(n),ls(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=hs(Sr(n.ab,n),6e3));if(1>=mo(n.i)&&n.ka){try{n.ka()}catch(e){}n.ka=void 0}}else aa(n,11)}else if((e.J||n.g==e)&&ia(n),!Pr(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(n.U=l[0],l=l[1],2==n.G)if("c"==l[0]){n.J=l[1],n.la=l[2];const t=l[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const i=l[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const u=l[5];null!=u&&"number"==typeof u&&0<u&&(r=1.5*u,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;!s.g&&(Ur(e,"spdy")||Ur(e,"quic")||Ur(e,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(yo(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,Js(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=e;if((r=n).oa=la(r,r.H?r.la:null,r.W),o.J){vo(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(xs(a),Os(a)),r.g=o}else ea(r);0<n.l.length&&Qo(n)}else"stop"!=l[0]&&"close"!=l[0]||aa(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?aa(n,7):Ko(n):"noop"!=l[0]&&n.j&&n.j.wa(l),n.A=0)}as(4)}catch(e){}}function Us(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(br(e)||"string"==typeof e)Or(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(br(e)||"string"==typeof e){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;r=function(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"==typeof e)return e.split("");if(br(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length;for(var s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}}function Fs(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof Fs)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function Vs(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];js(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)js(i,r=e.g[t])||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}function js(e,t){return Object.prototype.hasOwnProperty.call(e,t)}(mr=Is.prototype).setTimeout=function(e){this.P=e},mr.gb=function(e){e=e.target;const t=this.L;t&&3==jo(e)?t.l():this.Ia(e)},mr.Ia=function(e){try{if(e==this.g)e:{const u=jo(this.g);var t=this.g.Da();const h=this.g.ba();if(!(3>u)&&(3!=u||Yr||this.g&&(this.h.h||this.g.ga()||qo(this.g)))){this.I||4!=u||7==t||as(8==t||0>=h?3:2),xs(this);var n=this.g.ba();this.N=n;t:if(Rs(this)){var r=qo(this.g);e="";var i=r.length,s=4==jo(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Ls(this),Ps(this);var o="";break t}this.h.i=new vr.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Pr(a)){var l=a;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,ls(12),Ls(this),Ps(this);break e}ns(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ms(this,n)}this.U?(Ns(this,u,o),Yr&&this.i&&3==u&&(Zi(this.V,this.W,"tick",this.fb),this.W.start())):(ns(this.j,this.m,o,null),Ms(this,o)),4==u&&Ls(this),this.i&&!this.I&&(4==u?sa(this.l,this):(this.i=!1,Os(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ls(12)):(this.o=0,ls(13)),Ls(this),Ps(this)}}}catch(e){}},mr.fb=function(){if(this.g){var e=jo(this.g),t=this.g.ga();this.C<t.length&&(xs(this),Ns(this,e,t),this.i&&4!=e&&Os(this))}},mr.cancel=function(){this.I=!0,Ls(this)},mr.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(as(3),ls(17)),Ls(this),this.o=2,Ps(this)):$s(this,this.Y-e)},(mr=Fs.prototype).R=function(){Vs(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},mr.T=function(){return Vs(this),this.g.concat()},mr.get=function(e,t){return js(this.h,e)?this.h[e]:t},mr.set=function(e,t){js(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},mr.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);e.call(t,s,i,this)}};var qs=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Bs(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Bs){this.g=void 0!==t?t:e.g,Hs(this,e.j),this.s=e.s,Ks(this,e.i),Gs(this,e.m),this.l=e.l,t=e.h;var n=new so;n.i=t.i,t.g&&(n.g=new Fs(t.g),n.h=t.h),Ws(this,n),this.o=e.o}else e&&(n=String(e).match(qs))?(this.g=!!t,Hs(this,n[1]||"",!0),this.s=Xs(n[2]||""),Ks(this,n[3]||"",!0),Gs(this,n[4]),this.l=Xs(n[5]||"",!0),Ws(this,n[6]||"",!0),this.o=Xs(n[7]||"")):(this.g=!!t,this.h=new so(null,this.g))}function zs(e){return new Bs(e)}function Hs(e,t,n){e.j=n?Xs(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ks(e,t,n){e.i=n?Xs(t,!0):t}function Gs(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ws(e,t,n){t instanceof so?(e.h=t,function(e,t){t&&!e.j&&(oo(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(ao(this,t),lo(this,n,e))}),e)),e.j=t}(e.h,e.g)):(n||(t=Ys(t,ro)),e.h=new so(t,e.g))}function Js(e,t,n){e.h.set(t,n)}function Qs(e){return Js(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Xs(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ys(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Zs),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Zs(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Bs.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ys(t,eo,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Ys(t,eo,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(Ys(n,"/"==n.charAt(0)?no:to,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ys(n,io)),e.join("")};var eo=/[#\/\?@]/g,to=/[#\?:]/g,no=/[#\?]/g,ro=/[#\?@]/g,io=/#/g;function so(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function oo(e){e.g||(e.g=new Fs,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function ao(e,t){oo(e),t=uo(e,t),js(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,js((e=e.g).h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Vs(e)))}function co(e,t){return oo(e),t=uo(e,t),js(e.g.h,t)}function lo(e,t,n){ao(e,t),0<n.length&&(e.i=null,e.g.set(uo(e,t),xr(n)),e.h+=n.length)}function uo(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(mr=so.prototype).add=function(e,t){oo(this),this.i=null,e=uo(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},mr.forEach=function(e,t){oo(this),this.g.forEach((function(n,r){Or(n,(function(n){e.call(t,n,r,this)}),this)}),this)},mr.T=function(){oo(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],s=0;s<i.length;s++)n.push(t[r]);return n},mr.R=function(e){oo(this);var t=[];if("string"==typeof e)co(this,e)&&(t=$r(t,this.g.get(uo(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=$r(t,e[n])}return t},mr.set=function(e,t){return oo(this),this.i=null,co(this,e=uo(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},mr.get=function(e,t){return e&&0<(e=this.R(e)).length?String(e[0]):t},mr.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),e.push(o)}}return this.i=e.join("&")};function ho(e){this.l=e||fo,vr.PerformanceNavigationTiming?e=0<(e=vr.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(vr.g&&vr.g.Ea&&vr.g.Ea()&&vr.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var fo=10;function po(e){return!!e.h||!!e.g&&e.g.size>=e.j}function mo(e){return e.h?1:e.g?e.g.size:0}function go(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function yo(e,t){e.g?e.g.add(t):e.h=t}function vo(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function wo(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return xr(e.i)}function bo(){}function To(){this.g=new bo}function Io(e,t,n){const r=n||"";try{Us(e,(function(e,n){let i=e;Tr(e)&&(i=Li(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function Eo(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function ko(e){this.l=e.$b||null,this.j=e.ib||!1}function _o(e,t){$i.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=So,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ho.prototype.cancel=function(){if(this.i=wo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},bo.prototype.stringify=function(e){return vr.JSON.stringify(e,void 0)},bo.prototype.parse=function(e){return vr.JSON.parse(e,void 0)},Cr(ko,ps),ko.prototype.g=function(){return new _o(this.l,this.j)},ko.prototype.i=function(e){return function(){return e}}({}),Cr(_o,$i);var So=0;function Ao(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function Co(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ro(e)}function Ro(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(mr=_o.prototype).open=function(e,t){if(this.readyState!=So)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ro(this)},mr.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||vr).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},mr.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Co(this)),this.readyState=So},mr.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ro(this)),this.g&&(this.readyState=3,Ro(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==vr.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ao(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},mr.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Co(this):Ro(this),3==this.readyState&&Ao(this)}},mr.Ua=function(e){this.g&&(this.response=this.responseText=e,Co(this))},mr.Ta=function(e){this.g&&(this.response=e,Co(this))},mr.ha=function(){this.g&&Co(this)},mr.setRequestHeader=function(e,t){this.v.append(e,t)},mr.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},mr.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(_o.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var No=vr.JSON.parse;function Do(e){$i.call(this),this.headers=new Fs,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Oo,this.K=this.L=!1}Cr(Do,$i);var Oo="",$o=/^https?$/i,xo=["POST","PUT"];function Po(e){return"content-type"==e.toLowerCase()}function Lo(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Mo(e),Fo(e)}function Mo(e){e.D||(e.D=!0,xi(e,"complete"),xi(e,"error"))}function Uo(e){if(e.h&&void 0!==yr&&(!e.C[1]||4!=jo(e)||2!=e.ba()))if(e.v&&4==jo(e))Wi(e.Fa,0,e);else if(xi(e,"readystatechange"),4==jo(e)){e.h=!1;try{const a=e.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var i=String(e.H).match(qs)[1]||null;if(!i&&vr.self&&vr.self.location){var s=vr.self.location.protocol;i=s.substr(0,s.length-1)}r=!$o.test(i?i.toLowerCase():"")}n=r}if(n)xi(e,"complete"),xi(e,"success");else{e.m=6;try{var o=2<jo(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.ba()+"]",Mo(e)}}finally{Fo(e)}}}function Fo(e,t){if(e.g){Vo(e);const n=e.g,r=e.C[0]?wr:null;e.g=null,e.C=null,t||xi(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function Vo(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(vr.clearTimeout(e.A),e.A=null)}function jo(e){return e.g?e.g.readyState:0}function qo(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Oo:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Bo(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=function(e){let t="";return qr(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Js(e,t,n))}function zo(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Ho(e){this.za=0,this.l=[],this.h=new ts,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=zo("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=zo("baseRetryDelayMs",5e3,e),this.$a=zo("retryDelaySeedMs",1e4,e),this.Ya=zo("forwardChannelMaxRetries",2,e),this.ra=zo("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new ho(e&&e.concurrentRequestLimit),this.Ca=new To,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function Ko(e){if(Wo(e),3==e.G){var t=e.V++,n=zs(e.F);Js(n,"SID",e.J),Js(n,"RID",t),Js(n,"TYPE","terminate"),Yo(e,n),(t=new Is(e,e.h,t,void 0)).K=2,t.v=Qs(zs(n)),n=!1,vr.navigator&&vr.navigator.sendBeacon&&(n=vr.navigator.sendBeacon(t.v.toString(),"")),!n&&vr.Image&&((new Image).src=t.v,n=!0),n||(t.g=ua(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Os(t)}ca(e)}function Go(e){e.g&&(na(e),e.g.cancel(),e.g=null)}function Wo(e){Go(e),e.u&&(vr.clearTimeout(e.u),e.u=null),ia(e),e.i.cancel(),e.m&&("number"==typeof e.m&&vr.clearTimeout(e.m),e.m=null)}function Jo(e,t){e.l.push(new class{constructor(e,t){this.h=e,this.g=t}}(e.Za++,t)),3==e.G&&Qo(e)}function Qo(e){po(e.i)||e.m||(e.m=!0,qi(e.Ha,e),e.C=0)}function Xo(e,t){var n;n=t?t.m:e.V++;const r=zs(e.F);Js(r,"SID",e.J),Js(r,"RID",n),Js(r,"AID",e.U),Yo(e,r),e.o&&e.s&&Bo(r,e.o,e.s),n=new Is(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Zo(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),yo(e.i,n),As(n,r,t)}function Yo(e,t){e.j&&Us({},(function(e,n){Js(t,n,e)}))}function Zo(e,t,n){n=Math.min(e.l.length,n);var r=e.j?Sr(e.j.Oa,e.j,e):null;e:{var i=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=t,0>n)t=Math.max(0,i[o].h-100),s=!1;else try{Io(a,e,"req"+n+"_")}catch(e){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function ea(e){e.g||e.u||(e.Y=1,qi(e.Ga,e),e.A=0)}function ta(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=hs(Sr(e.Ga,e),oa(e,e.A)),e.A++,!0)}function na(e){null!=e.B&&(vr.clearTimeout(e.B),e.B=null)}function ra(e){e.g=new Is(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=zs(e.oa);Js(t,"RID","rpc"),Js(t,"SID",e.J),Js(t,"CI",e.N?"0":"1"),Js(t,"AID",e.U),Yo(e,t),Js(t,"TYPE","xmlhttp"),e.o&&e.s&&Bo(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=Qs(zs(t)),n.s=null,n.U=!0,Cs(n,e)}function ia(e){null!=e.v&&(vr.clearTimeout(e.v),e.v=null)}function sa(e,t){var n=null;if(e.g==t){ia(e),na(e),e.g=null;var r=2}else{if(!go(e.i,t))return;n=t.D,vo(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;xi(r=ss(),new us(r,n,t,i)),Qo(e)}else ea(e);else if(3==(i=t.o)||0==i&&0<e.I||!(1==r&&function(e,t){return!(mo(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.l=t.D.concat(e.l),0):1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya)||(e.m=hs(Sr(e.Ha,e,t),oa(e,e.C)),e.C++,0)))}(e,t)||2==r&&ta(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:aa(e,5);break;case 4:aa(e,10);break;case 3:aa(e,6);break;default:aa(e,2)}}function oa(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function aa(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=Sr(e.jb,e);n||(n=new Bs("//www.google.com/images/cleardot.gif"),vr.location&&"http"==vr.location.protocol||Hs(n,"https"),Qs(n)),function(e,t){const n=new ts;if(vr.Image){const r=new Image;r.onload=Ar(Eo,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Ar(Eo,n,r,"TestLoadImage: error",!1,t),r.onabort=Ar(Eo,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Ar(Eo,n,r,"TestLoadImage: timeout",!1,t),vr.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else ls(2);e.G=0,e.j&&e.j.va(t),ca(e),Wo(e)}function ca(e){e.G=0,e.I=-1,e.j&&(0==wo(e.i).length&&0==e.l.length||(e.i.i.length=0,xr(e.l),e.l.length=0),e.j.ua())}function la(e,t,n){let r=function(e){return e instanceof Bs?zs(e):new Bs(e,void 0)}(n);if(""!=r.i)t&&Ks(r,t+"."+r.i),Gs(r,r.m);else{const e=vr.location;r=function(e,t,n,r){var i=new Bs(null,void 0);return e&&Hs(i,e),t&&Ks(i,t),n&&Gs(i,n),r&&(i.l=r),i}(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&qr(e.aa,(function(e,t){Js(r,t,e)})),t=e.D,n=e.sa,t&&n&&Js(r,t,n),Js(r,"VER",e.ma),Yo(e,r),r}function ua(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ba&&!e.qa?new Do(new ko({ib:!0})):new Do(e.qa)).L=e.H,t}function ha(){}function da(){if(Qr&&!(10<=Number(li)))throw Error("Environmental error: no available transport.")}function fa(e,t){$i.call(this),this.g=new Ho(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!Pr(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Pr(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new ya(this)}function pa(e){ws.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function ma(){bs.call(this),this.status=1}function ya(e){this.g=e}(mr=Do.prototype).ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ys.g(),this.C=this.u?ms(this.u):ms(ys),this.g.onreadystatechange=Sr(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void Lo(this,e)}e=n||"";const i=new Fs(this.headers);r&&Us(r,(function(e,t){i.set(t,e)})),r=function(e){e:{var t=Po;const n=e.length,r="string"==typeof e?e.split(""):e;for(let i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:"string"==typeof e?e.charAt(t):e[t]}(i.T()),n=vr.FormData&&e instanceof vr.FormData,!(0<=Dr(xo,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Vo(this),0<this.B&&((this.K=function(e){return Qr&&ai()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Sr(this.pa,this)):this.A=Wi(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){Lo(this,e)}},mr.pa=function(){void 0!==yr&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,xi(this,"timeout"),this.abort(8))},mr.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,xi(this,"complete"),xi(this,"abort"),Fo(this))},mr.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Fo(this,!0)),Do.Z.M.call(this)},mr.Fa=function(){this.s||(this.F||this.v||this.l?Uo(this):this.cb())},mr.cb=function(){Uo(this)},mr.ba=function(){try{return 2<jo(this)?this.g.status:-1}catch(e){return-1}},mr.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},mr.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),No(t)}},mr.Da=function(){return this.m},mr.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(mr=Ho.prototype).ma=8,mr.G=1,mr.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(e){}},mr.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new Is(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?(s=Br(s),Hr(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Zo(this,i,t),Js(n=zs(this.F),"RID",e),Js(n,"CVER",22),this.D&&Js(n,"X-HTTP-Session-Id",this.D),Yo(this,n),this.o&&s&&Bo(n,this.o,s),yo(this.i,i),this.Ra&&Js(n,"TYPE","init"),this.ja?(Js(n,"$req",t),Js(n,"SID","null"),i.$=!0,As(i,n,null)):As(i,n,t),this.G=2}}else 3==this.G&&(e?Xo(this,e):0==this.l.length||po(this.i)||Xo(this))},mr.Ga=function(){if(this.u=null,ra(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=hs(Sr(this.bb,this),e)}},mr.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ls(10),Go(this),ra(this))},mr.ab=function(){null!=this.v&&(this.v=null,Go(this),ta(this),ls(19))},mr.jb=function(e){e?(this.h.info("Successfully pinged google.com"),ls(2)):(this.h.info("Failed to ping google.com"),ls(1))},(mr=ha.prototype).xa=function(){},mr.wa=function(){},mr.va=function(){},mr.ua=function(){},mr.Oa=function(){},da.prototype.g=function(e,t){return new fa(e,t)},Cr(fa,$i),fa.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),qi(Sr(e.hb,e,t))),ls(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=la(e,null,e.W),Qo(e)},fa.prototype.close=function(){Ko(this.g)},fa.prototype.u=function(e){if("string"==typeof e){var t={};t.__data__=e,Jo(this.g,t)}else this.v?((t={}).__data__=Li(e),Jo(this.g,t)):Jo(this.g,e)},fa.prototype.M=function(){this.g.j=null,delete this.j,Ko(this.g),delete this.g,fa.Z.M.call(this)},Cr(pa,ws),Cr(ma,bs),Cr(ya,ha),ya.prototype.xa=function(){xi(this.g,"a")},ya.prototype.wa=function(e){xi(this.g,new pa(e))},ya.prototype.va=function(e){xi(this.g,new ma(e))},ya.prototype.ua=function(){xi(this.g,"b")},da.prototype.createWebChannel=da.prototype.g,fa.prototype.send=fa.prototype.u,fa.prototype.open=fa.prototype.m,fa.prototype.close=fa.prototype.close,ds.NO_ERROR=0,ds.TIMEOUT=8,ds.HTTP_ERROR=6,fs.COMPLETE="complete",gs.EventType=vs,vs.OPEN="a",vs.CLOSE="b",vs.ERROR="c",vs.MESSAGE="d",$i.prototype.listen=$i.prototype.N,Do.prototype.listenOnce=Do.prototype.O,Do.prototype.getLastError=Do.prototype.La,Do.prototype.getLastErrorCode=Do.prototype.Da,Do.prototype.getStatus=Do.prototype.ba,Do.prototype.getResponseJson=Do.prototype.Qa,Do.prototype.getResponseText=Do.prototype.ga,Do.prototype.send=Do.prototype.ea;var va=ds,wa=fs,ba=rs,Ta=10,Ia=11,Ea=ko,ka=gs,_a=Do;const Sa="@firebase/firestore";
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
     */class Aa{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Aa.UNAUTHENTICATED=new Aa(null),Aa.GOOGLE_CREDENTIALS=new Aa("google-credentials-uid"),Aa.FIRST_PARTY=new Aa("first-party-uid"),Aa.MOCK_USER=new Aa("mock-user");
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
let Ca="9.6.1";
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
     */const Ra=new Pt("@firebase/firestore");function Na(){return Ra.logLevel}function Da(e,...t){if(Ra.logLevel<=Nt.DEBUG){const n=t.map(xa);Ra.debug(`Firestore (${Ca}): ${e}`,...n)}}function Oa(e,...t){if(Ra.logLevel<=Nt.ERROR){const n=t.map(xa);Ra.error(`Firestore (${Ca}): ${e}`,...n)}}function $a(e,...t){if(Ra.logLevel<=Nt.WARN){const n=t.map(xa);Ra.warn(`Firestore (${Ca}): ${e}`,...n)}}function xa(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
     */function Pa(e="Unexpected state"){const t=`FIRESTORE (${Ca}) INTERNAL ASSERTION FAILED: `+e;throw Oa(t),new Error(t)}function La(e,t){e||Pa()}function Ma(e,t){return e}
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
     */const Ua={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Fa extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
     */class Va{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
     */class ja{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qa{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Aa.UNAUTHENTICATED)))}shutdown(){}}class Ba{constructor(e){this.t=e,this.currentUser=Aa.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new Va;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Va,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Da("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Da("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Va)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Da("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(La("string"==typeof t.accessToken),new ja(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return La(null===e||"string"==typeof e),new Aa(e)}}class za{constructor(e,t,n){this.type="FirstParty",this.user=Aa.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class Ha{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new za(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(Aa.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ka{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ga{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null}start(e,t){this.o=n=>{e.enqueueRetryable((()=>(e=>(null!=e.error&&Da("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`),t(e.token)))(n)))};const n=e=>{Da("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit((e=>n(e))),setTimeout((()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?n(e):Da("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(La("string"==typeof e.token),new Ka(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
     */class Wa{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.p(e),this.T=e=>t.writeSequenceNumber(e))}p(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}
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
     */function Ja(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
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
     */Wa.I=-1;class Qa{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=Ja(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function Xa(e,t){return e<t?-1:e>t?1:0}function Ya(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
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
     */class Za{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Fa(Ua.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Fa(Ua.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Fa(Ua.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Fa(Ua.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Za.fromMillis(Date.now())}static fromDate(e){return Za.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Za(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Xa(this.nanoseconds,e.nanoseconds):Xa(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
     */class ec{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ec(e)}static min(){return new ec(new Za(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
     */function tc(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function nc(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function rc(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
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
     */class ic{constructor(e,t,n){void 0===t?t=0:t>e.length&&Pa(),void 0===n?n=e.length-t:n>e.length-t&&Pa(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===ic.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ic?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class sc extends ic{construct(e,t,n){return new sc(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Fa(Ua.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new sc(t)}static emptyPath(){return new sc([])}}const oc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ac extends ic{construct(e,t,n){return new ac(e,t,n)}static isValidIdentifier(e){return oc.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ac.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ac(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Fa(Ua.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Fa(Ua.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Fa(Ua.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new Fa(Ua.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ac(t)}static emptyPath(){return new ac([])}}
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
     */class cc{constructor(e){this.fields=e,e.sort(ac.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ya(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
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
     */class lc{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new lc(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new lc(t)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
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
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Xa(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lc.EMPTY_BYTE_STRING=new lc("");const uc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hc(e){if(La(!!e),"string"==typeof e){let t=0;const n=uc.exec(e);if(La(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:dc(e.seconds),nanos:dc(e.nanos)}}function dc(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function fc(e){return"string"==typeof e?lc.fromBase64String(e):lc.fromUint8Array(e)}
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
     */function pc(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function mc(e){const t=e.mapValue.fields.__previous_value__;return pc(t)?mc(t):t}function gc(e){const t=hc(e.mapValue.fields.__local_write_time__.timestampValue);return new Za(t.seconds,t.nanos)}
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
     */function yc(e){return null==e}function vc(e){return 0===e&&1/e==-1/0}
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
class wc{constructor(e){this.path=e}static fromPath(e){return new wc(sc.fromString(e))}static fromName(e){return new wc(sc.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===sc.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return sc.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new wc(new sc(e.slice()))}}
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
     */function bc(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?pc(e)?4:10:Pa()}function Tc(e,t){const n=bc(e);if(n!==bc(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return gc(e).isEqual(gc(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=hc(e.timestampValue),r=hc(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return fc(e.bytesValue).isEqual(fc(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return dc(e.geoPointValue.latitude)===dc(t.geoPointValue.latitude)&&dc(e.geoPointValue.longitude)===dc(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return dc(e.integerValue)===dc(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=dc(e.doubleValue),r=dc(t.doubleValue);return n===r?vc(n)===vc(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Ya(e.arrayValue.values||[],t.arrayValue.values||[],Tc);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(tc(n)!==tc(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!Tc(n[e],r[e])))return!1;return!0}(e,t);default:return Pa()}}function Ic(e,t){return void 0!==(e.values||[]).find((e=>Tc(e,t)))}function Ec(e,t){const n=bc(e),r=bc(t);if(n!==r)return Xa(n,r);switch(n){case 0:return 0;case 1:return Xa(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=dc(e.integerValue||e.doubleValue),r=dc(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return kc(e.timestampValue,t.timestampValue);case 4:return kc(gc(e),gc(t));case 5:return Xa(e.stringValue,t.stringValue);case 6:return function(e,t){const n=fc(e),r=fc(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=Xa(n[e],r[e]);if(0!==t)return t}return Xa(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Xa(dc(e.latitude),dc(t.latitude));return 0!==n?n:Xa(dc(e.longitude),dc(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=Ec(n[e],r[e]);if(t)return t}return Xa(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){const t=Xa(r[e],s[e]);if(0!==t)return t;const o=Ec(n[r[e]],i[s[e]]);if(0!==o)return o}return Xa(r.length,s.length)}(e.mapValue,t.mapValue);default:throw Pa()}}function kc(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Xa(e,t);const n=hc(e),r=hc(t),i=Xa(n.seconds,r.seconds);return 0!==i?i:Xa(n.nanos,r.nanos)}function _c(e){return Sc(e)}function Sc(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=hc(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?fc(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,wc.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Sc(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Sc(e.fields[i])}`;return n+"}"}(e.mapValue):Pa();var t,n}function Ac(e){return!!e&&"integerValue"in e}function Cc(e){return!!e&&"arrayValue"in e}function Rc(e){return!!e&&"nullValue"in e}function Nc(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Dc(e){return!!e&&"mapValue"in e}function Oc(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return nc(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Oc(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Oc(e.arrayValue.values[n]);return t}return Object.assign({},e)}
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
     */class $c{constructor(e){this.value=e}static empty(){return new $c({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Dc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Oc(t)}setAll(e){let t=ac.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Oc(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Dc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Tc(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Dc(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){nc(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new $c(Oc(this.value))}}function xc(e){const t=[];return nc(e.fields,((e,n)=>{const r=new ac([e]);if(Dc(n)){const e=xc(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new cc(t)
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
     */}class Pc{constructor(e,t,n,r,i){this.key=e,this.documentType=t,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(e){return new Pc(e,0,ec.min(),$c.empty(),0)}static newFoundDocument(e,t,n){return new Pc(e,1,t,n,0)}static newNoDocument(e,t){return new Pc(e,2,t,$c.empty(),0)}static newUnknownDocument(e,t){return new Pc(e,3,t,$c.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$c.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$c.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Pc&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new Pc(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
     */class Lc{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.R=null}}function Mc(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Lc(e,t,n,r,i,s,o)}function Uc(e){const t=Ma(e);if(null===t.R){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>function(e){return e.field.canonicalString()+e.op.toString()+_c(e.value)}(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),yc(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=Xc(t.startAt)),t.endAt&&(e+="|ub:",e+=Xc(t.endAt)),t.R=e}return t.R}function Fc(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Zc(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Tc(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!tl(e.startAt,t.startAt)&&tl(e.endAt,t.endAt)}function Vc(e){return wc.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class jc extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.P(e,t,n):new qc(e,t,n):"array-contains"===t?new Kc(e,n):"in"===t?new Gc(e,n):"not-in"===t?new Wc(e,n):"array-contains-any"===t?new Jc(e,n):new jc(e,t,n)}static P(e,t,n){return"in"===t?new Bc(e,n):new zc(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.v(Ec(t,this.value)):null!==t&&bc(this.value)===bc(t)&&this.v(Ec(t,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Pa()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class qc extends jc{constructor(e,t,n){super(e,t,n),this.key=wc.fromName(n.referenceValue)}matches(e){const t=wc.comparator(e.key,this.key);return this.v(t)}}class Bc extends jc{constructor(e,t){super(e,"in",t),this.keys=Hc("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class zc extends jc{constructor(e,t){super(e,"not-in",t),this.keys=Hc("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Hc(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>wc.fromName(e.referenceValue)))}class Kc extends jc{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Cc(t)&&Ic(t.arrayValue,this.value)}}class Gc extends jc{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Ic(this.value.arrayValue,t)}}class Wc extends jc{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ic(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Ic(this.value.arrayValue,t)}}class Jc extends jc{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Cc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Ic(this.value.arrayValue,e)))}}class Qc{constructor(e,t){this.position=e,this.before=t}}function Xc(e){return`${e.before?"b":"a"}:${e.position.map((e=>_c(e))).join(",")}`}class Yc{constructor(e,t="asc"){this.field=e,this.dir=t}}function Zc(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function el(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?wc.comparator(wc.fromName(o.referenceValue),n.key):Ec(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return e.before?r<=0:r<0}function tl(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.before!==t.before||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Tc(e.position[n],t.position[n]))return!1;return!0}
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
     */class nl{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.S=null,this.D=null,this.startAt,this.endAt}}function rl(e){return new nl(e)}function il(e){return!yc(e.limit)&&"F"===e.limitType}function sl(e){return!yc(e.limit)&&"L"===e.limitType}function ol(e){const t=Ma(e);if(null===t.S){t.S=[];const e=function(e){for(const t of e.filters)if(t.V())return t.field;return null}(t),n=function(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}(t);if(null!==e&&null===n)e.isKeyField()||t.S.push(new Yc(e)),t.S.push(new Yc(ac.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.S.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.S.push(new Yc(ac.keyField(),e))}}}return t.S}function al(e){const t=Ma(e);if(!t.D)if("F"===t.limitType)t.D=Mc(t.path,t.collectionGroup,ol(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of ol(t)){const t="desc"===n.dir?"asc":"desc";e.push(new Yc(n.field,t))}const n=t.endAt?new Qc(t.endAt.position,!t.endAt.before):null,r=t.startAt?new Qc(t.startAt.position,!t.startAt.before):null;t.D=Mc(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.D}function cl(e,t){return Fc(al(e),al(t))&&e.limitType===t.limitType}function ll(e){return`${Uc(al(e))}|lt:${e.limitType}`}function ul(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${_c(t.value)}`;var t})).join(", ")}]`),yc(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: "+Xc(e.startAt)),e.endAt&&(t+=", endAt: "+Xc(e.endAt)),`Target(${t})`}(al(e))}; limitType=${e.limitType})`}function hl(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):wc.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!el(e.startAt,ol(e),t))&&(!e.endAt||!el(e.endAt,ol(e),t))}(e,t)}function dl(e){return(t,n)=>{let r=!1;for(const i of ol(e)){const e=fl(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function fl(e,t,n){const r=e.field.isKeyField()?wc.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Ec(r,i):Pa()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Pa()}}
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
     */function pl(e,t){if(e.C){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vc(t)?"-0":t}}function ml(e){return{integerValue:""+e}}function gl(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!vc(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(t)?ml(t):pl(e,t)}
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
     */class yl{constructor(){this._=void 0}}function vl(e,t,n){return e instanceof Tl?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Il?El(e,t):e instanceof kl?_l(e,t):function(e,t){const n=bl(e,t),r=Al(n)+Al(e.N);return Ac(n)&&Ac(e.N)?ml(r):pl(e.k,r)}(e,t)}function wl(e,t,n){return e instanceof Il?El(e,t):e instanceof kl?_l(e,t):n}function bl(e,t){return e instanceof Sl?Ac(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class Tl extends yl{}class Il extends yl{constructor(e){super(),this.elements=e}}function El(e,t){const n=Cl(t);for(const t of e.elements)n.some((e=>Tc(e,t)))||n.push(t);return{arrayValue:{values:n}}}class kl extends yl{constructor(e){super(),this.elements=e}}function _l(e,t){let n=Cl(t);for(const t of e.elements)n=n.filter((e=>!Tc(e,t)));return{arrayValue:{values:n}}}class Sl extends yl{constructor(e,t){super(),this.k=e,this.N=t}}function Al(e){return dc(e.integerValue||e.doubleValue)}function Cl(e){return Cc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class Rl{constructor(e,t){this.version=e,this.transformResults=t}}class Nl{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Nl}static exists(e){return new Nl(void 0,e)}static updateTime(e){return new Nl(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Dl(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Ol{}function $l(e,t,n){e instanceof Ul?function(e,t,n){const r=e.value.clone(),i=jl(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Fl?function(e,t,n){if(!Dl(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=jl(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Vl(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function xl(e,t,n){e instanceof Ul?function(e,t,n){if(!Dl(e.precondition,t))return;const r=e.value.clone(),i=ql(e.fieldTransforms,n,t);r.setAll(i),t.convertToFoundDocument(Ml(t),r).setHasLocalMutations()}(e,t,n):e instanceof Fl?function(e,t,n){if(!Dl(e.precondition,t))return;const r=ql(e.fieldTransforms,n,t),i=t.data;i.setAll(Vl(e)),i.setAll(r),t.convertToFoundDocument(Ml(t),i).setHasLocalMutations()}(e,t,n):function(e,t){Dl(e.precondition,t)&&t.convertToNoDocument(ec.min())}(e,t)}function Pl(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=bl(r.transform,e||null);null!=i&&(null==n&&(n=$c.empty()),n.set(r.field,i))}return n||null}function Ll(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Ya(e,t,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Il&&t instanceof Il||e instanceof kl&&t instanceof kl?Ya(e.elements,t.elements,Tc):e instanceof Sl&&t instanceof Sl?Tc(e.N,t.N):e instanceof Tl&&t instanceof Tl}(e.transform,t.transform)}(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function Ml(e){return e.isFoundDocument()?e.version:ec.min()}class Ul extends Ol{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Fl extends Ol{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Vl(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function jl(e,t,n){const r=new Map;La(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,wl(o,a,n[i]))}return r}function ql(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,vl(e,s,t))}return r}class Bl extends Ol{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class zl extends Ol{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
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
     */class Hl{constructor(e){this.count=e}}
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
     */var Kl,Gl;function Wl(e){if(void 0===e)return Oa("GRPC error has no .code"),Ua.UNKNOWN;switch(e){case Kl.OK:return Ua.OK;case Kl.CANCELLED:return Ua.CANCELLED;case Kl.UNKNOWN:return Ua.UNKNOWN;case Kl.DEADLINE_EXCEEDED:return Ua.DEADLINE_EXCEEDED;case Kl.RESOURCE_EXHAUSTED:return Ua.RESOURCE_EXHAUSTED;case Kl.INTERNAL:return Ua.INTERNAL;case Kl.UNAVAILABLE:return Ua.UNAVAILABLE;case Kl.UNAUTHENTICATED:return Ua.UNAUTHENTICATED;case Kl.INVALID_ARGUMENT:return Ua.INVALID_ARGUMENT;case Kl.NOT_FOUND:return Ua.NOT_FOUND;case Kl.ALREADY_EXISTS:return Ua.ALREADY_EXISTS;case Kl.PERMISSION_DENIED:return Ua.PERMISSION_DENIED;case Kl.FAILED_PRECONDITION:return Ua.FAILED_PRECONDITION;case Kl.ABORTED:return Ua.ABORTED;case Kl.OUT_OF_RANGE:return Ua.OUT_OF_RANGE;case Kl.UNIMPLEMENTED:return Ua.UNIMPLEMENTED;case Kl.DATA_LOSS:return Ua.DATA_LOSS;default:return Pa()}}(Gl=Kl||(Kl={}))[Gl.OK=0]="OK",Gl[Gl.CANCELLED=1]="CANCELLED",Gl[Gl.UNKNOWN=2]="UNKNOWN",Gl[Gl.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Gl[Gl.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Gl[Gl.NOT_FOUND=5]="NOT_FOUND",Gl[Gl.ALREADY_EXISTS=6]="ALREADY_EXISTS",Gl[Gl.PERMISSION_DENIED=7]="PERMISSION_DENIED",Gl[Gl.UNAUTHENTICATED=16]="UNAUTHENTICATED",Gl[Gl.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Gl[Gl.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Gl[Gl.ABORTED=10]="ABORTED",Gl[Gl.OUT_OF_RANGE=11]="OUT_OF_RANGE",Gl[Gl.UNIMPLEMENTED=12]="UNIMPLEMENTED",Gl[Gl.INTERNAL=13]="INTERNAL",Gl[Gl.UNAVAILABLE=14]="UNAVAILABLE",Gl[Gl.DATA_LOSS=15]="DATA_LOSS";
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
class Jl{constructor(e,t){this.comparator=e,this.root=t||Xl.EMPTY}insert(e,t){return new Jl(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Xl.BLACK,null,null))}remove(e){return new Jl(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xl.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ql(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ql(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ql(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ql(this.root,e,this.comparator,!0)}}class Ql{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xl{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Xl.RED,this.left=null!=r?r:Xl.EMPTY,this.right=null!=i?i:Xl.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Xl(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Xl.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Xl.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xl.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xl.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Pa();if(this.right.isRed())throw Pa();const e=this.left.check();if(e!==this.right.check())throw Pa();return e+(this.isRed()?0:1)}}Xl.EMPTY=null,Xl.RED=!0,Xl.BLACK=!1,Xl.EMPTY=new class{constructor(){this.size=0}get key(){throw Pa()}get value(){throw Pa()}get color(){throw Pa()}get left(){throw Pa()}get right(){throw Pa()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Xl(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Yl{constructor(e){this.comparator=e,this.data=new Jl(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Zl(this.data.getIterator())}getIteratorFrom(e){return new Zl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Yl))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Yl(this.comparator);return t.data=e,t}}class Zl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
     */const eu=new Jl(wc.comparator);function tu(){return eu}const nu=new Jl(wc.comparator);function ru(){return nu}const iu=new Jl(wc.comparator);const su=new Yl(wc.comparator);function ou(...e){let t=su;for(const n of e)t=t.add(n);return t}const au=new Yl(Xa);function cu(){return au}
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
     */class lu{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,uu.createSynthesizedTargetChangeForCurrentChange(e,t)),new lu(ec.min(),n,cu(),tu(),ou())}}class uu{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new uu(lc.EMPTY_BYTE_STRING,t,ou(),ou(),ou())}}
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
     */class hu{constructor(e,t,n,r){this.$=e,this.removedTargetIds=t,this.key=n,this.F=r}}class du{constructor(e,t){this.targetId=e,this.O=t}}class fu{constructor(e,t,n=lc.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class pu{constructor(){this.M=0,this.L=yu(),this.B=lc.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return 0!==this.M}get j(){return this.q}W(e){e.approximateByteSize()>0&&(this.q=!0,this.B=e)}G(){let e=ou(),t=ou(),n=ou();return this.L.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Pa()}})),new uu(this.B,this.U,e,t,n)}H(){this.q=!1,this.L=yu()}J(e,t){this.q=!0,this.L=this.L.insert(e,t)}Y(e){this.q=!0,this.L=this.L.remove(e)}X(){this.M+=1}Z(){this.M-=1}tt(){this.q=!0,this.U=!0}}class mu{constructor(e){this.et=e,this.nt=new Map,this.st=tu(),this.it=gu(),this.rt=new Yl(Xa)}ot(e){for(const t of e.$)e.F&&e.F.isFoundDocument()?this.at(t,e.F):this.ct(t,e.key,e.F);for(const t of e.removedTargetIds)this.ct(t,e.key,e.F)}ut(e){this.forEachTarget(e,(t=>{const n=this.ht(t);switch(e.state){case 0:this.lt(t)&&n.W(e.resumeToken);break;case 1:n.Z(),n.K||n.H(),n.W(e.resumeToken);break;case 2:n.Z(),n.K||this.removeTarget(t);break;case 3:this.lt(t)&&(n.tt(),n.W(e.resumeToken));break;case 4:this.lt(t)&&(this.ft(t),n.W(e.resumeToken));break;default:Pa()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.nt.forEach(((e,n)=>{this.lt(n)&&t(n)}))}dt(e){const t=e.targetId,n=e.O.count,r=this.wt(t);if(r){const e=r.target;if(Vc(e))if(0===n){const n=new wc(e.path);this.ct(t,n,Pc.newNoDocument(n,ec.min()))}else La(1===n);else this._t(t)!==n&&(this.ft(t),this.rt=this.rt.add(t))}}gt(e){const t=new Map;this.nt.forEach(((n,r)=>{const i=this.wt(r);if(i){if(n.current&&Vc(i.target)){const t=new wc(i.target.path);null!==this.st.get(t)||this.yt(r,t)||this.ct(r,t,Pc.newNoDocument(t,e))}n.j&&(t.set(r,n.G()),n.H())}}));let n=ou();this.it.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.wt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))}));const r=new lu(e,t,this.rt,this.st,n);return this.st=tu(),this.it=gu(),this.rt=new Yl(Xa),r}at(e,t){if(!this.lt(e))return;const n=this.yt(e,t.key)?2:0;this.ht(e).J(t.key,n),this.st=this.st.insert(t.key,t),this.it=this.it.insert(t.key,this.Tt(t.key).add(e))}ct(e,t,n){if(!this.lt(e))return;const r=this.ht(e);this.yt(e,t)?r.J(t,1):r.Y(t),this.it=this.it.insert(t,this.Tt(t).delete(e)),n&&(this.st=this.st.insert(t,n))}removeTarget(e){this.nt.delete(e)}_t(e){const t=this.ht(e).G();return this.et.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}X(e){this.ht(e).X()}ht(e){let t=this.nt.get(e);return t||(t=new pu,this.nt.set(e,t)),t}Tt(e){let t=this.it.get(e);return t||(t=new Yl(Xa),this.it=this.it.insert(e,t)),t}lt(e){const t=null!==this.wt(e);return t||Da("WatchChangeAggregator","Detected inactive target",e),t}wt(e){const t=this.nt.get(e);return t&&t.K?null:this.et.Et(e)}ft(e){this.nt.set(e,new pu),this.et.getRemoteKeysForTarget(e).forEach((t=>{this.ct(e,t,null)}))}yt(e,t){return this.et.getRemoteKeysForTarget(e).has(t)}}function gu(){return new Jl(wc.comparator)}function yu(){return new Jl(wc.comparator)}
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
     */const vu={asc:"ASCENDING",desc:"DESCENDING"},wu={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class bu{constructor(e,t){this.databaseId=e,this.C=t}}function Tu(e,t){return e.C?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Iu(e,t){return e.C?t.toBase64():t.toUint8Array()}function Eu(e,t){return Tu(e,t.toTimestamp())}function ku(e){return La(!!e),ec.fromTimestamp(function(e){const t=hc(e);return new Za(t.seconds,t.nanos)}(e))}function _u(e,t){return function(e){return new sc(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Su(e){const t=sc.fromString(e);return La(Ku(t)),t}function Au(e,t){return _u(e.databaseId,t.path)}function Cu(e,t){const n=Su(t);if(n.get(1)!==e.databaseId.projectId)throw new Fa(Ua.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Fa(Ua.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new wc(Du(n))}function Ru(e,t){return _u(e.databaseId,t)}function Nu(e){return new sc(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Du(e){return La(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Ou(e,t,n){return{name:Au(e,t),fields:n.value.mapValue.fields}}function $u(e,t){return{documents:[Ru(e,t.path)]}}function xu(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Ru(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Ru(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(Nc(e.value))return{unaryFilter:{field:ju(e.field),op:"IS_NAN"}};if(Rc(e.value))return{unaryFilter:{field:ju(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Nc(e.value))return{unaryFilter:{field:ju(e.field),op:"IS_NOT_NAN"}};if(Rc(e.value))return{unaryFilter:{field:ju(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ju(e.field),op:Vu(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:ju(e.field),direction:Fu(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.C||yc(t)?t:{value:t}}(e,t.limit);return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=Mu(t.startAt)),t.endAt&&(n.structuredQuery.endAt=Mu(t.endAt)),n}function Pu(e){let t=function(e){const t=Su(e);return 4===t.length?sc.emptyPath():Du(t)}(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){La(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=Lu(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new Yc(qu(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,yc(t)?null:t}(n.limit));let c=null;n.startAt&&(c=Uu(n.startAt));let l=null;return n.endAt&&(l=Uu(n.endAt)),function(e,t,n,r,i,s,o,a){return new nl(e,t,n,r,i,s,o,a)}(t,i,o,s,a,"F",c,l)}function Lu(e){return e?void 0!==e.unaryFilter?[zu(e)]:void 0!==e.fieldFilter?[Bu(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>Lu(e))).reduce(((e,t)=>e.concat(t))):Pa():[]}function Mu(e){return{before:e.before,values:e.position}}function Uu(e){const t=!!e.before,n=e.values||[];return new Qc(n,t)}function Fu(e){return vu[e]}function Vu(e){return wu[e]}function ju(e){return{fieldPath:e.canonicalString()}}function qu(e){return ac.fromServerFormat(e.fieldPath)}function Bu(e){return jc.create(qu(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Pa()}}(e.fieldFilter.op),e.fieldFilter.value)}function zu(e){switch(e.unaryFilter.op){case"IS_NAN":const t=qu(e.unaryFilter.field);return jc.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=qu(e.unaryFilter.field);return jc.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=qu(e.unaryFilter.field);return jc.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=qu(e.unaryFilter.field);return jc.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Pa()}}function Hu(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Ku(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
class Gu{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Pa(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Gu(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Gu?t:Gu.resolve(t)}catch(e){return Gu.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Gu.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Gu.reject(t)}static resolve(e){return new Gu(((t,n)=>{t(e)}))}static reject(e){return new Gu(((t,n)=>{n(e)}))}static waitFor(e){return new Gu(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=Gu.resolve(!1);for(const n of e)t=t.next((e=>e?Gu.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}}function Wu(e){return"IndexedDbTransactionError"===e.name}
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
     */class Ju{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(e.key)&&$l(r,e,n[t])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&xl(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&xl(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach((t=>{const n=e.get(t.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(ec.min())}))}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ou())}isEqual(e){return this.batchId===e.batchId&&Ya(this.mutations,e.mutations,((e,t)=>Ll(e,t)))&&Ya(this.baseMutations,e.baseMutations,((e,t)=>Ll(e,t)))}}class Qu{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){La(e.mutations.length===n.length);let r=iu;const i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new Qu(e,t,n,r)}}
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
     */class Xu{constructor(e,t,n,r,i=ec.min(),s=ec.min(),o=lc.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new Xu(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Xu(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Xu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
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
     */class Yu{constructor(e){this.Gt=e}}function Zu(e){const t=Pu({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?function(e,t,n){return new nl(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}(t,t.limit,"L"):t}
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
     */class eh{constructor(){this.zt=new th}addToCollectionParentIndex(e,t){return this.zt.add(t),Gu.resolve()}getCollectionParents(e,t){return Gu.resolve(this.zt.getEntries(t))}}class th{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Yl(sc.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Yl(sc.comparator)).toArray()}}
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
     */class nh{constructor(e){this.se=e}next(){return this.se+=2,this.se}static ie(){return new nh(0)}static re(){return new nh(-1)}}
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
     */async function rh(e){if(e.code!==Ua.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;Da("LocalStore","Unexpectedly lost primary lease")}
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
     */class ih{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t])}else this.inner[n]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),!0;return!1}forEach(e){nc(this.inner,((t,n)=>{for(const[t,r]of n)e(t,r)}))}isEmpty(){return rc(this.inner)}}
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
class sh{constructor(e,t,n){this.Je=e,this.An=t,this.Jt=n}Rn(e,t){return this.An.getAllMutationBatchesAffectingDocumentKey(e,t).next((n=>this.Pn(e,t,n)))}Pn(e,t,n){return this.Je.getEntry(e,t).next((e=>{for(const t of n)t.applyToLocalView(e);return e}))}bn(e,t){e.forEach(((e,n)=>{for(const e of t)e.applyToLocalView(n)}))}vn(e,t){return this.Je.getEntries(e,t).next((t=>this.Vn(e,t).next((()=>t))))}Vn(e,t){return this.An.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>this.bn(t,e)))}getDocumentsMatchingQuery(e,t,n){return function(e){return wc.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.Sn(e,t.path):function(e){return null!==e.collectionGroup}(t)?this.Dn(e,t,n):this.Cn(e,t,n)}Sn(e,t){return this.Rn(e,new wc(t)).next((e=>{let t=ru();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}Dn(e,t,n){const r=t.collectionGroup;let i=ru();return this.Jt.getCollectionParents(e,r).next((s=>Gu.forEach(s,(s=>{const o=function(e,t){return new nl(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.Cn(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}Cn(e,t,n){let r,i;return this.Je.getDocumentsMatchingQuery(e,t,n).next((n=>(r=n,this.An.getAllMutationBatchesAffectingQuery(e,t)))).next((t=>(i=t,this.Nn(e,i,r).next((e=>{r=e;for(const e of i)for(const t of e.mutations){const n=t.key;let i=r.get(n);null==i&&(i=Pc.newInvalidDocument(n),r=r.insert(n,i)),xl(t,i,e.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))))).next((()=>(r.forEach(((e,n)=>{hl(t,n)||(r=r.remove(e))})),r)))}Nn(e,t,n){let r=ou();for(const e of t)for(const t of e.mutations)t instanceof Fl&&null===n.get(t.key)&&(r=r.add(t.key));let i=n;return this.Je.getEntries(e,r).next((e=>(e.forEach(((e,t)=>{t.isFoundDocument()&&(i=i.insert(e,t))})),i)))}}
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
     */class oh{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.kn=n,this.xn=r}static $n(e,t){let n=ou(),r=ou();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new oh(e,t.fromCache,n,r)}}
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
     */class ah{Fn(e){this.On=e}getDocumentsMatchingQuery(e,t,n,r){return function(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}(t)||n.isEqual(ec.min())?this.Mn(e,t):this.On.vn(e,r).next((i=>{const s=this.Ln(t,i);return(il(t)||sl(t))&&this.Bn(t.limitType,s,r,n)?this.Mn(e,t):(Na()<=Nt.DEBUG&&Da("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),ul(t)),this.On.getDocumentsMatchingQuery(e,t,n).next((e=>(s.forEach((t=>{e=e.insert(t.key,t)})),e))))}))}Ln(e,t){let n=new Yl(dl(e));return t.forEach(((t,r)=>{hl(e,r)&&(n=n.add(r))})),n}Bn(e,t,n,r){if(n.size!==t.size)return!0;const i="F"===e?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mn(e,t){return Na()<=Nt.DEBUG&&Da("QueryEngine","Using full collection scan to execute query:",ul(t)),this.On.getDocumentsMatchingQuery(e,t,ec.min())}}
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
     */class ch{constructor(e,t,n,r){this.persistence=e,this.Un=t,this.k=r,this.qn=new Jl(Xa),this.Kn=new ih((e=>Uc(e)),Fc),this.jn=ec.min(),this.An=e.getMutationQueue(n),this.Qn=e.getRemoteDocumentCache(),this.He=e.getTargetCache(),this.Wn=new sh(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=e.getBundleCache(),this.Un.Fn(this.Wn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.qn)))}}async function lh(e,t){const n=Ma(e);let r=n.An,i=n.Wn;const s=await n.persistence.runTransaction("Handle user change","readonly",(e=>{let s;return n.An.getAllMutationBatches(e).next((o=>(s=o,r=n.persistence.getMutationQueue(t),i=new sh(n.Qn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(e)))).next((t=>{const n=[],r=[];let o=ou();for(const e of s){n.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return i.vn(e,o).next((e=>({Gn:e,removedBatchIds:n,addedBatchIds:r})))}))}));return n.An=r,n.Wn=i,n.Un.Fn(n.Wn),s}function uh(e){const t=Ma(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.He.getLastRemoteSnapshotVersion(e)))}function hh(e,t){const n=Ma(e),r=t.snapshotVersion;let i=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Qn.newChangeBuffer({trackRemovals:!0});i=n.qn;const o=[];t.targetChanges.forEach(((t,s)=>{const a=i.get(s);if(!a)return;o.push(n.He.removeMatchingKeys(e,t.removedDocuments,s).next((()=>n.He.addMatchingKeys(e,t.addedDocuments,s))));const c=t.resumeToken;if(c.approximateByteSize()>0){const l=a.withResumeToken(c,r).withSequenceNumber(e.currentSequenceNumber);i=i.insert(s,l),function(e,t,n){return La(t.resumeToken.approximateByteSize()>0),0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,l,t)&&o.push(n.He.updateTargetData(e,l))}}));let a=tu();if(t.documentUpdates.forEach(((r,i)=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(function(e,t,n,r,i){let s=ou();return n.forEach((e=>s=s.add(e))),t.getEntries(e,s).next((e=>{let s=tu();return n.forEach(((n,o)=>{const a=e.get(n),c=(null==i?void 0:i.get(n))||r;o.isNoDocument()&&o.version.isEqual(ec.min())?(t.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(o,c),s=s.insert(n,o)):Da("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)})),s}))}(e,s,t.documentUpdates,r,void 0).next((e=>{a=e}))),!r.isEqual(ec.min())){const t=n.He.getLastRemoteSnapshotVersion(e).next((t=>n.He.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return Gu.waitFor(o).next((()=>s.apply(e))).next((()=>n.Wn.Vn(e,a))).next((()=>a))})).then((e=>(n.qn=i,e)))}function dh(e,t){const n=Ma(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.An.getNextMutationBatchAfterBatchId(e,t))))}async function fh(e,t,n){const r=Ma(e),i=r.qn.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!Wu(e))throw e;Da("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.qn=r.qn.remove(t),r.Kn.delete(i.target)}function ph(e,t,n){const r=Ma(e);let i=ec.min(),s=ou();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=Ma(e),i=r.Kn.get(n);return void 0!==i?Gu.resolve(r.qn.get(i)):r.He.getTargetData(t,n)}(r,e,al(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.He.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Un.getDocumentsMatchingQuery(e,t,n?i:ec.min(),n?s:ou()))).next((e=>({documents:e,zn:s})))))}
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
     */class mh{constructor(e){this.k=e,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(e,t){return Gu.resolve(this.Xn.get(t))}saveBundleMetadata(e,t){var n;return this.Xn.set(t.id,{id:(n=t).id,version:n.version,createTime:ku(n.createTime)}),Gu.resolve()}getNamedQuery(e,t){return Gu.resolve(this.Zn.get(t))}saveNamedQuery(e,t){return this.Zn.set(t.name,function(e){return{name:e.name,query:Zu(e.bundledQuery),readTime:ku(e.readTime)}}(t)),Gu.resolve()}}
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
     */class gh{constructor(){this.ts=new Yl(yh.es),this.ns=new Yl(yh.ss)}isEmpty(){return this.ts.isEmpty()}addReference(e,t){const n=new yh(e,t);this.ts=this.ts.add(n),this.ns=this.ns.add(n)}rs(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.os(new yh(e,t))}cs(e,t){e.forEach((e=>this.removeReference(e,t)))}us(e){const t=new wc(new sc([])),n=new yh(t,e),r=new yh(t,e+1),i=[];return this.ns.forEachInRange([n,r],(e=>{this.os(e),i.push(e.key)})),i}hs(){this.ts.forEach((e=>this.os(e)))}os(e){this.ts=this.ts.delete(e),this.ns=this.ns.delete(e)}ls(e){const t=new wc(new sc([])),n=new yh(t,e),r=new yh(t,e+1);let i=ou();return this.ns.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new yh(e,0),n=this.ts.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class yh{constructor(e,t){this.key=e,this.fs=t}static es(e,t){return wc.comparator(e.key,t.key)||Xa(e.fs,t.fs)}static ss(e,t){return Xa(e.fs,t.fs)||wc.comparator(e.key,t.key)}}
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
     */class vh{constructor(e,t){this.Jt=e,this.referenceDelegate=t,this.An=[],this.ds=1,this.ws=new Yl(yh.es)}checkEmpty(e){return Gu.resolve(0===this.An.length)}addMutationBatch(e,t,n,r){const i=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const s=new Ju(i,t,n,r);this.An.push(s);for(const t of r)this.ws=this.ws.add(new yh(t.key,i)),this.Jt.addToCollectionParentIndex(e,t.key.path.popLast());return Gu.resolve(s)}lookupMutationBatch(e,t){return Gu.resolve(this._s(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.gs(n),i=r<0?0:r;return Gu.resolve(this.An.length>i?this.An[i]:null)}getHighestUnacknowledgedBatchId(){return Gu.resolve(0===this.An.length?-1:this.ds-1)}getAllMutationBatches(e){return Gu.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new yh(t,0),r=new yh(t,Number.POSITIVE_INFINITY),i=[];return this.ws.forEachInRange([n,r],(e=>{const t=this._s(e.fs);i.push(t)})),Gu.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Yl(Xa);return t.forEach((e=>{const t=new yh(e,0),r=new yh(e,Number.POSITIVE_INFINITY);this.ws.forEachInRange([t,r],(e=>{n=n.add(e.fs)}))})),Gu.resolve(this.ys(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;wc.isDocumentKey(i)||(i=i.child(""));const s=new yh(new wc(i),0);let o=new Yl(Xa);return this.ws.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.fs)),!0)}),s),Gu.resolve(this.ys(o))}ys(e){const t=[];return e.forEach((e=>{const n=this._s(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){La(0===this.ps(t.batchId,"removed")),this.An.shift();let n=this.ws;return Gu.forEach(t.mutations,(r=>{const i=new yh(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.ws=n}))}ee(e){}containsKey(e,t){const n=new yh(t,0),r=this.ws.firstAfterOrEqual(n);return Gu.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.An.length,Gu.resolve()}ps(e,t){return this.gs(e)}gs(e){return 0===this.An.length?0:e-this.An[0].batchId}_s(e){const t=this.gs(e);return t<0||t>=this.An.length?null:this.An[t]}}
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
     */class wh{constructor(e,t){this.Jt=e,this.Ts=t,this.docs=new Jl(wc.comparator),this.size=0}addEntry(e,t,n){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ts(t);return this.docs=this.docs.insert(r,{document:t.clone(),size:o,readTime:n}),this.size+=o-s,this.Jt.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Gu.resolve(n?n.document.clone():Pc.newInvalidDocument(t))}getEntries(e,t){let n=tu();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.clone():Pc.newInvalidDocument(e))})),Gu.resolve(n)}getDocumentsMatchingQuery(e,t,n){let r=tu();const i=new wc(t.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i,readTime:o}}=s.getNext();if(!t.path.isPrefixOf(e.path))break;o.compareTo(n)<=0||hl(t,i)&&(r=r.insert(i.key,i.clone()))}return Gu.resolve(r)}Es(e,t){return Gu.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new bh(this)}getSize(e){return Gu.resolve(this.size)}}class bh extends class{constructor(){this.changes=new ih((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}getReadTime(e){const t=this.changes.get(e);return t?t.readTime:ec.min()}addEntry(e,t){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:t})}removeEntry(e,t=null){this.assertNotApplied(),this.changes.set(e,{document:Pc.newInvalidDocument(e),readTime:t})}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Gu.resolve(n.document):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}{constructor(e){super(),this.De=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.document.isValidDocument()?t.push(this.De.addEntry(e,r.document,this.getReadTime(n))):this.De.removeEntry(n)})),Gu.waitFor(t)}getFromCache(e,t){return this.De.getEntry(e,t)}getAllFromCache(e,t){return this.De.getEntries(e,t)}}
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
     */class Th{constructor(e){this.persistence=e,this.Is=new ih((e=>Uc(e)),Fc),this.lastRemoteSnapshotVersion=ec.min(),this.highestTargetId=0,this.As=0,this.Rs=new gh,this.targetCount=0,this.Ps=nh.ie()}forEachTarget(e,t){return this.Is.forEach(((e,n)=>t(n))),Gu.resolve()}getLastRemoteSnapshotVersion(e){return Gu.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Gu.resolve(this.As)}allocateTargetId(e){return this.highestTargetId=this.Ps.next(),Gu.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.As&&(this.As=t),Gu.resolve()}ce(e){this.Is.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ps=new nh(t),this.highestTargetId=t),e.sequenceNumber>this.As&&(this.As=e.sequenceNumber)}addTargetData(e,t){return this.ce(t),this.targetCount+=1,Gu.resolve()}updateTargetData(e,t){return this.ce(t),Gu.resolve()}removeTargetData(e,t){return this.Is.delete(t.target),this.Rs.us(t.targetId),this.targetCount-=1,Gu.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Is.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Is.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),Gu.waitFor(i).next((()=>r))}getTargetCount(e){return Gu.resolve(this.targetCount)}getTargetData(e,t){const n=this.Is.get(t)||null;return Gu.resolve(n)}addMatchingKeys(e,t,n){return this.Rs.rs(t,n),Gu.resolve()}removeMatchingKeys(e,t,n){this.Rs.cs(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Gu.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Rs.us(t),Gu.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Rs.ls(t);return Gu.resolve(n)}containsKey(e,t){return Gu.resolve(this.Rs.containsKey(t))}}
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
     */class Ih{constructor(e,t){this.bs={},this.Be=new Wa(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=e(this),this.He=new Th(this),this.Jt=new eh,this.Je=function(e,t){return new wh(e,t)}(this.Jt,(e=>this.referenceDelegate.vs(e))),this.k=new Yu(t),this.Ye=new mh(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(e){let t=this.bs[e.toKey()];return t||(t=new vh(this.Jt,this.referenceDelegate),this.bs[e.toKey()]=t),t}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(e,t,n){Da("MemoryPersistence","Starting transaction:",e);const r=new Eh(this.Be.next());return this.referenceDelegate.Vs(),n(r).next((e=>this.referenceDelegate.Ss(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ds(e,t){return Gu.or(Object.values(this.bs).map((n=>()=>n.containsKey(e,t))))}}class Eh extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}{constructor(e){super(),this.currentSequenceNumber=e}}class kh{constructor(e){this.persistence=e,this.Cs=new gh,this.Ns=null}static ks(e){return new kh(e)}get xs(){if(this.Ns)return this.Ns;throw Pa()}addReference(e,t,n){return this.Cs.addReference(n,t),this.xs.delete(n.toString()),Gu.resolve()}removeReference(e,t,n){return this.Cs.removeReference(n,t),this.xs.add(n.toString()),Gu.resolve()}markPotentiallyOrphaned(e,t){return this.xs.add(t.toString()),Gu.resolve()}removeTarget(e,t){this.Cs.us(t.targetId).forEach((e=>this.xs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.xs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Vs(){this.Ns=new Set}Ss(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Gu.forEach(this.xs,(n=>{const r=wc.fromPath(n);return this.$s(e,r).next((e=>{e||t.removeEntry(r)}))})).next((()=>(this.Ns=null,t.apply(e))))}updateLimboDocument(e,t){return this.$s(e,t).next((e=>{e?this.xs.delete(t.toString()):this.xs.add(t.toString())}))}vs(e){return 0}$s(e,t){return Gu.or([()=>Gu.resolve(this.Cs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ds(e,t)])}}class _h{constructor(){this.activeTargetIds=cu()}Ms(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ls(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Sh{constructor(){this.pi=new _h,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.pi.Ms(e),this.Ti[e]||"not-current"}updateQueryState(e,t,n){this.Ti[e]=t}removeLocalQueryTarget(e){this.pi.Ls(e)}isLocalQueryTarget(e){return this.pi.activeTargetIds.has(e)}clearQueryState(e){delete this.Ti[e]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(e){return this.pi.activeTargetIds.has(e)}start(){return this.pi=new _h,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}
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
     */class Ah{Ei(e){}shutdown(){}}
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
     */class Ch{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.Pi(),this.bi=[],this.vi()}Ei(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){Da("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Pi(){Da("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
     */const Rh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
     */class Dh extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.Mi=t+"://"+e.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(e,t,n,r,i){const s=this.Ui(e,t);Da("RestConnection","Sending: ",s,n);const o={};return this.qi(o,r,i),this.Ki(e,s,o,n).then((e=>(Da("RestConnection","Received: ",e),e)),(t=>{throw $a("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}ji(e,t,n,r,i){return this.Bi(e,t,n,r,i)}qi(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ca,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}Ui(e,t){const n=Rh[e];return`${this.Mi}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Ki(e,t,n,r){return new Promise(((i,s)=>{const o=new _a;o.listenOnce(wa.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case va.NO_ERROR:const t=o.getResponseJson();Da("Connection","XHR received:",JSON.stringify(t)),i(t);break;case va.TIMEOUT:Da("Connection",'RPC "'+e+'" timed out'),s(new Fa(Ua.DEADLINE_EXCEEDED,"Request time out"));break;case va.HTTP_ERROR:const n=o.getStatus();if(Da("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Ua).indexOf(t)>=0?t:Ua.UNKNOWN}(e.status);s(new Fa(t,e.message))}else s(new Fa(Ua.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new Fa(Ua.UNAVAILABLE,"Connection failed."));break;default:Pa()}}finally{Da("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}Qi(e,t,n){const r=[this.Mi,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=new da,s=ss(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Ea({})),this.qi(o.initMessageHeaders,t,n),lt()||ht()||ct().indexOf("Electron/")>=0||dt()||ct().indexOf("MSAppHost/")>=0||ut()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");Da("Connection","Creating WebChannel: "+a,o);const c=i.createWebChannel(a,o);let l=!1,u=!1;const h=new Nh({Vi:e=>{u?Da("Connection","Not sending because WebChannel is closed:",e):(l||(Da("Connection","Opening WebChannel transport."),c.open(),l=!0),Da("Connection","WebChannel sending:",e),c.send(e))},Si:()=>c.close()}),d=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return d(c,ka.EventType.OPEN,(()=>{u||Da("Connection","WebChannel transport opened.")})),d(c,ka.EventType.CLOSE,(()=>{u||(u=!0,Da("Connection","WebChannel transport closed"),h.Fi())})),d(c,ka.EventType.ERROR,(e=>{u||(u=!0,$a("Connection","WebChannel transport errored:",e),h.Fi(new Fa(Ua.UNAVAILABLE,"The operation could not be completed")))})),d(c,ka.EventType.MESSAGE,(e=>{var t;if(!u){const n=e.data[0];La(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){Da("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=Kl[e];if(void 0!==t)return Wl(t)}(e),n=i.message;void 0===t&&(t=Ua.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),u=!0,h.Fi(new Fa(t,n)),c.close()}else Da("Connection","WebChannel received:",n),h.Oi(n)}})),d(s,ba.STAT_EVENT,(e=>{e.stat===Ta?Da("Connection","Detected buffering proxy"):e.stat===Ia&&Da("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.$i()}),0),h}}function Oh(){return"undefined"!=typeof document?document:null}
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
     */function $h(e){return new bu(e,!0)}class xh{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Oe=e,this.timerId=t,this.Wi=n,this.Gi=r,this.zi=i,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(e){this.cancel();const t=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),r=Math.max(0,t-n);r>0&&Da("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Hi} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Ji=this.Oe.enqueueAfterDelay(this.timerId,r,(()=>(this.Yi=Date.now(),e()))),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
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
     */class Ph{constructor(e,t,n,r,i,s,o,a){this.Oe=e,this.nr=n,this.sr=r,this.ir=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.rr=0,this.ar=null,this.cr=null,this.stream=null,this.ur=new xh(e,t)}hr(){return 1===this.state||5===this.state||this.lr()}lr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&null===this.ar&&(this.ar=this.Oe.enqueueAfterDelay(this.nr,6e4,(()=>this.mr())))}gr(e){this.yr(),this.stream.send(e)}async mr(){if(this.lr())return this.close(0)}yr(){this.ar&&(this.ar.cancel(),this.ar=null)}pr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,t){this.yr(),this.pr(),this.ur.cancel(),this.rr++,4!==e?this.ur.reset():t&&t.code===Ua.RESOURCE_EXHAUSTED?(Oa(t.toString()),Oa("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):t&&t.code===Ua.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Tr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ni(t)}Tr(){}auth(){this.state=1;const e=this.Er(this.rr),t=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.rr===t&&this.Ir(e,n)}),(t=>{e((()=>{const e=new Fa(Ua.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Ar(e)}))}))}Ir(e,t){const n=this.Er(this.rr);this.stream=this.Rr(e,t),this.stream.Di((()=>{n((()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.sr,1e4,(()=>(this.lr()&&(this.state=3),Promise.resolve()))),this.listener.Di())))})),this.stream.Ni((e=>{n((()=>this.Ar(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}dr(){this.state=5,this.ur.Zi((async()=>{this.state=0,this.start()}))}Ar(e){return Da("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Er(e){return t=>{this.Oe.enqueueAndForget((()=>this.rr===e?t():(Da("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Lh extends Ph{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.k=i}Rr(e,t){return this.ir.Qi("Listen",e,t)}onMessage(e){this.ur.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Pa()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.C?(La(void 0===t||"string"==typeof t),lc.fromBase64String(t||"")):(La(void 0===t||t instanceof Uint8Array),lc.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?Ua.UNKNOWN:Wl(e.code);return new Fa(t,e.message||"")}(o);n=new fu(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Cu(e,r.document.name),s=ku(r.document.updateTime),o=new $c({mapValue:{fields:r.document.fields}}),a=Pc.newFoundDocument(i,s,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new hu(c,l,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Cu(e,r.document),s=r.readTime?ku(r.readTime):ec.min(),o=Pc.newNoDocument(i,s),a=r.removedTargetIds||[];n=new hu([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Cu(e,r.document),s=r.removedTargetIds||[];n=new hu([],s,i,null)}else{if(!("filter"in t))return Pa();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new Hl(r),s=e.targetId;n=new du(s,i)}}return n}(this.k,e),n=function(e){if(!("targetChange"in e))return ec.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?ec.min():t.readTime?ku(t.readTime):ec.min()}(e);return this.listener.Pr(t,n)}br(e){const t={};t.database=Nu(this.k),t.addTarget=function(e,t){let n;const r=t.target;return n=Vc(r)?{documents:$u(e,r)}:{query:xu(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=Iu(e,t.resumeToken):t.snapshotVersion.compareTo(ec.min())>0&&(n.readTime=Tu(e,t.snapshotVersion.toTimestamp())),n}(this.k,e);const n=function(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Pa()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.k,e);n&&(t.labels=n),this.gr(t)}vr(e){const t={};t.database=Nu(this.k),t.removeTarget=e,this.gr(t)}}class Mh extends Ph{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.k=i,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(e,t){return this.ir.Qi("Write",e,t)}onMessage(e){if(La(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Vr){this.ur.reset();const t=function(e,t){return e&&e.length>0?(La(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?ku(e.updateTime):ku(t);return n.isEqual(ec.min())&&(n=ku(t)),new Rl(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=ku(e.commitTime);return this.listener.Cr(n,t)}return La(!e.writeResults||0===e.writeResults.length),this.Vr=!0,this.listener.Nr()}kr(){const e={};e.database=Nu(this.k),this.gr(e)}Dr(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>function(e,t){let n;if(t instanceof Ul)n={update:Ou(e,t.key,t.value)};else if(t instanceof Bl)n={delete:Au(e,t.key)};else if(t instanceof Fl)n={update:Ou(e,t.key,t.data),updateMask:Hu(t.fieldMask)};else{if(!(t instanceof zl))return Pa();n={verify:Au(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Tl)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Il)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof kl)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Sl)return{fieldPath:t.field.canonicalString(),increment:n.N};throw Pa()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Eu(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Pa()}(e,t.precondition)),n}(this.k,e)))};this.gr(t)}}
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
     */class Uh extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.ir=n,this.k=r,this.$r=!1}Fr(){if(this.$r)throw new Fa(Ua.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(e,t,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.ir.Bi(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Ua.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Fa(Ua.UNKNOWN,e.toString())}))}ji(e,t,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.ir.ji(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Ua.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Fa(Ua.UNKNOWN,e.toString())}))}terminate(){this.$r=!0}}class Fh{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Or=0,this.Mr=null,this.Lr=!0}Br(){0===this.Or&&(this.Ur("Unknown"),this.Mr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Mr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve()))))}Kr(e){"Online"===this.state?this.Ur("Unknown"):(this.Or++,this.Or>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Ur("Offline")))}set(e){this.jr(),this.Or=0,"Online"===e&&(this.Lr=!1),this.Ur(e)}Ur(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}qr(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(Oa(t),this.Lr=!1):Da("OnlineStateTracker",t)}jr(){null!==this.Mr&&(this.Mr.cancel(),this.Mr=null)}}
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
     */class Vh{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=i,this.Hr.Ei((e=>{n.enqueueAndForget((async()=>{Jh(this)&&(Da("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Ma(e);t.Gr.add(4),await qh(t),t.Jr.set("Unknown"),t.Gr.delete(4),await jh(t)}(this))}))})),this.Jr=new Fh(n,r)}}async function jh(e){if(Jh(e))for(const t of e.zr)await t(!0)}async function qh(e){for(const t of e.zr)await t(!1)}function Bh(e,t){const n=Ma(e);n.Wr.has(t.targetId)||(n.Wr.set(t.targetId,t),Wh(n)?Gh(n):hd(n).lr()&&Hh(n,t))}function zh(e,t){const n=Ma(e),r=hd(n);n.Wr.delete(t),r.lr()&&Kh(n,t),0===n.Wr.size&&(r.lr()?r._r():Jh(n)&&n.Jr.set("Unknown"))}function Hh(e,t){e.Yr.X(t.targetId),hd(e).br(t)}function Kh(e,t){e.Yr.X(t),hd(e).vr(t)}function Gh(e){e.Yr=new mu({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.Wr.get(t)||null}),hd(e).start(),e.Jr.Br()}function Wh(e){return Jh(e)&&!hd(e).hr()&&e.Wr.size>0}function Jh(e){return 0===Ma(e).Gr.size}function Qh(e){e.Yr=void 0}async function Xh(e){e.Wr.forEach(((t,n)=>{Hh(e,t)}))}async function Yh(e,t){Qh(e),Wh(e)?(e.Jr.Kr(t),Gh(e)):e.Jr.set("Unknown")}async function Zh(e,t,n){if(e.Jr.set("Online"),t instanceof fu&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Wr.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Wr.delete(r),e.Yr.removeTarget(r))}(e,t)}catch(n){Da("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await ed(e,n)}else if(t instanceof hu?e.Yr.ot(t):t instanceof du?e.Yr.dt(t):e.Yr.ut(t),!n.isEqual(ec.min()))try{const t=await uh(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Yr.gt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Wr.get(r);i&&e.Wr.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.Wr.get(t);if(!n)return;e.Wr.set(t,n.withResumeToken(lc.EMPTY_BYTE_STRING,n.snapshotVersion)),Kh(e,t);const r=new Xu(n.target,t,1,n.sequenceNumber);Hh(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Da("RemoteStore","Failed to raise snapshot:",t),await ed(e,t)}}async function ed(e,t,n){if(!Wu(t))throw t;e.Gr.add(1),await qh(e),e.Jr.set("Offline"),n||(n=()=>uh(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Da("RemoteStore","Retrying IndexedDB access"),await n(),e.Gr.delete(1),await jh(e)}))}function td(e,t){return t().catch((n=>ed(e,n,t)))}async function nd(e){const t=Ma(e),n=dd(t);let r=t.Qr.length>0?t.Qr[t.Qr.length-1].batchId:-1;for(;rd(t);)try{const e=await dh(t.localStore,r);if(null===e){0===t.Qr.length&&n._r();break}r=e.batchId,id(t,e)}catch(e){await ed(t,e)}sd(t)&&od(t)}function rd(e){return Jh(e)&&e.Qr.length<10}function id(e,t){e.Qr.push(t);const n=dd(e);n.lr()&&n.Sr&&n.Dr(t.mutations)}function sd(e){return Jh(e)&&!dd(e).hr()&&e.Qr.length>0}function od(e){dd(e).start()}async function ad(e){dd(e).kr()}async function cd(e){const t=dd(e);for(const n of e.Qr)t.Dr(n.mutations)}async function ld(e,t,n){const r=e.Qr.shift(),i=Qu.from(r,t,n);await td(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await nd(e)}async function ud(e,t){t&&dd(e).Sr&&await async function(e,t){if(function(e){switch(e){default:return Pa();case Ua.CANCELLED:case Ua.UNKNOWN:case Ua.DEADLINE_EXCEEDED:case Ua.RESOURCE_EXHAUSTED:case Ua.INTERNAL:case Ua.UNAVAILABLE:case Ua.UNAUTHENTICATED:return!1;case Ua.INVALID_ARGUMENT:case Ua.NOT_FOUND:case Ua.ALREADY_EXISTS:case Ua.PERMISSION_DENIED:case Ua.FAILED_PRECONDITION:case Ua.ABORTED:case Ua.OUT_OF_RANGE:case Ua.UNIMPLEMENTED:case Ua.DATA_LOSS:return!0}}(n=t.code)&&n!==Ua.ABORTED){const n=e.Qr.shift();dd(e).wr(),await td(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await nd(e)}var n}(e,t),sd(e)&&od(e)}function hd(e){return e.Xr||(e.Xr=function(e,t,n){const r=Ma(e);return r.Fr(),new Lh(t,r.ir,r.authCredentials,r.appCheckCredentials,r.k,n)
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
     */}(e.datastore,e.asyncQueue,{Di:Xh.bind(null,e),Ni:Yh.bind(null,e),Pr:Zh.bind(null,e)}),e.zr.push((async t=>{t?(e.Xr.wr(),Wh(e)?Gh(e):e.Jr.set("Unknown")):(await e.Xr.stop(),Qh(e))}))),e.Xr}function dd(e){return e.Zr||(e.Zr=function(e,t,n){const r=Ma(e);return r.Fr(),new Mh(t,r.ir,r.authCredentials,r.appCheckCredentials,r.k,n)}(e.datastore,e.asyncQueue,{Di:ad.bind(null,e),Ni:ud.bind(null,e),Nr:cd.bind(null,e),Cr:ld.bind(null,e)}),e.zr.push((async t=>{t?(e.Zr.wr(),await nd(e)):(await e.Zr.stop(),e.Qr.length>0&&(Da("RemoteStore",`Stopping write stream with ${e.Qr.length} pending writes`),e.Qr=[]))}))),e.Zr
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
     */}class fd{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Va,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new fd(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Fa(Ua.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pd(e,t){if(Oa("AsyncQueue",`${t}: ${e}`),Wu(e))return new Fa(Ua.UNAVAILABLE,`${t}: ${e}`);throw e}
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
     */class md{constructor(e){this.comparator=e?(t,n)=>e(t,n)||wc.comparator(t.key,n.key):(e,t)=>wc.comparator(e.key,t.key),this.keyedMap=ru(),this.sortedSet=new Jl(this.comparator)}static emptySet(e){return new md(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof md))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new md;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
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
     */class gd{constructor(){this.eo=new Jl(wc.comparator)}track(e){const t=e.doc.key,n=this.eo.get(t);n?0!==e.type&&3===n.type?this.eo=this.eo.insert(t,e):3===e.type&&1!==n.type?this.eo=this.eo.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.eo=this.eo.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.eo=this.eo.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.eo=this.eo.remove(t):1===e.type&&2===n.type?this.eo=this.eo.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.eo=this.eo.insert(t,{type:2,doc:e.doc}):Pa():this.eo=this.eo.insert(t,e)}no(){const e=[];return this.eo.inorderTraversal(((t,n)=>{e.push(n)})),e}}class yd{constructor(e,t,n,r,i,s,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const i=[];return t.forEach((e=>{i.push({type:0,doc:e})})),new yd(e,t,md.emptySet(t),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&cl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
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
     */class vd{constructor(){this.so=void 0,this.listeners=[]}}class wd{constructor(){this.queries=new ih((e=>ll(e)),cl),this.onlineState="Unknown",this.io=new Set}}function bd(e,t){const n=Ma(e);let r=!1;for(const e of t){const t=e.query,i=n.queries.get(t);if(i){for(const t of i.listeners)t.oo(e)&&(r=!0);i.so=e}}r&&Id(n)}function Td(e,t,n){const r=Ma(e),i=r.queries.get(t);if(i)for(const e of i.listeners)e.onError(n);r.queries.delete(t)}function Id(e){e.io.forEach((e=>{e.next()}))}class Ed{constructor(e,t,n){this.query=e,this.ao=t,this.co=!1,this.uo=null,this.onlineState="Unknown",this.options=n||{}}oo(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new yd(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.co?this.ho(e)&&(this.ao.next(e),t=!0):this.lo(e,this.onlineState)&&(this.fo(e),t=!0),this.uo=e,t}onError(e){this.ao.error(e)}ro(e){this.onlineState=e;let t=!1;return this.uo&&!this.co&&this.lo(this.uo,e)&&(this.fo(this.uo),t=!0),t}lo(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return!(this.options.wo&&n||e.docs.isEmpty()&&"Offline"!==t)}ho(e){if(e.docChanges.length>0)return!0;const t=this.uo&&this.uo.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}fo(e){e=yd.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.co=!0,this.ao.next(e)}}
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
     */class kd{constructor(e){this.key=e}}class _d{constructor(e){this.key=e}}class Sd{constructor(e,t){this.query=e,this.To=t,this.Eo=null,this.current=!1,this.Io=ou(),this.mutatedKeys=ou(),this.Ao=dl(e),this.Ro=new md(this.Ao)}get Po(){return this.To}bo(e,t){const n=t?t.vo:new gd,r=t?t.Ro:this.Ro;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=il(this.query)&&r.size===this.query.limit?r.last():null,c=sl(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const l=r.get(e),u=hl(this.query,t)?t:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.Vo(l,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Ao(u,a)>0||c&&this.Ao(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(u?(s=s.add(u),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),il(this.query)||sl(this.query))for(;s.size>this.query.limit;){const e=il(this.query)?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Ro:s,vo:n,Bn:o,mutatedKeys:i}}Vo(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Ro;this.Ro=e.Ro,this.mutatedKeys=e.mutatedKeys;const i=e.vo.no();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Pa()}};return n(e)-n(t)}
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
     */(e.type,t.type)||this.Ao(e.doc,t.doc))),this.So(n);const s=t?this.Do():[],o=0===this.Io.size&&this.current?1:0,a=o!==this.Eo;return this.Eo=o,0!==i.length||a?{snapshot:new yd(this.query,e.Ro,r,i,e.mutatedKeys,0===o,a,!1),Co:s}:{Co:s}}ro(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new gd,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(e){return!this.To.has(e)&&!!this.Ro.has(e)&&!this.Ro.get(e).hasLocalMutations}So(e){e&&(e.addedDocuments.forEach((e=>this.To=this.To.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.To=this.To.delete(e))),this.current=e.current)}Do(){if(!this.current)return[];const e=this.Io;this.Io=ou(),this.Ro.forEach((e=>{this.No(e.key)&&(this.Io=this.Io.add(e.key))}));const t=[];return e.forEach((e=>{this.Io.has(e)||t.push(new _d(e))})),this.Io.forEach((n=>{e.has(n)||t.push(new kd(n))})),t}ko(e){this.To=e.zn,this.Io=ou();const t=this.bo(e.documents);return this.applyChanges(t,!0)}xo(){return yd.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,0===this.Eo)}}class Ad{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Cd{constructor(e){this.key=e,this.$o=!1}}class Rd{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Fo={},this.Oo=new ih((e=>ll(e)),cl),this.Mo=new Map,this.Lo=new Set,this.Bo=new Jl(wc.comparator),this.Uo=new Map,this.qo=new gh,this.Ko={},this.jo=new Map,this.Qo=nh.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return!0===this.Wo}}async function Nd(e,t){const n=function(e){const t=Ma(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=$d.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Gd.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Pd.bind(null,t),t.Fo.Pr=bd.bind(null,t.eventManager),t.Fo.zo=Td.bind(null,t.eventManager),t}(e);let r,i;const s=n.Oo.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.xo();else{const e=await function(e,t){const n=Ma(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.He.getTargetData(e,t).next((i=>i?(r=i,Gu.resolve(r)):n.He.allocateTargetId(e).next((i=>(r=new Xu(t,i,0,e.currentSequenceNumber),n.He.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.qn.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qn=n.qn.insert(e.targetId,e),n.Kn.set(t,e.targetId)),e}))}(n.localStore,al(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await async function(e,t,n,r){e.Go=(t,n,r)=>async function(e,t,n,r){let i=t.view.bo(n);i.Bn&&(i=await ph(e.localStore,t.query,!1).then((({documents:e})=>t.view.bo(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return qd(e,t.targetId,o.Co),o.snapshot}(e,t,n,r);const i=await ph(e.localStore,t,!0),s=new Sd(t,i.zn),o=s.bo(i.documents),a=uu.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=s.applyChanges(o,e.isPrimaryClient,a);qd(e,n,c.Co);const l=new Ad(t,n,s);return e.Oo.set(t,l),e.Mo.has(n)?e.Mo.get(n).push(t):e.Mo.set(n,[t]),c.snapshot}(n,t,r,"current"===s),n.isPrimaryClient&&Bh(n.remoteStore,e)}return i}async function Dd(e,t){const n=Ma(e),r=n.Oo.get(t),i=n.Mo.get(r.targetId);if(i.length>1)return n.Mo.set(r.targetId,i.filter((e=>!cl(e,t)))),void n.Oo.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await fh(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),zh(n.remoteStore,r.targetId),Vd(n,r.targetId)})).catch(rh)):(Vd(n,r.targetId),await fh(n.localStore,r.targetId,!0))}async function Od(e,t,n){const r=function(e){const t=Ma(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Ld.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Md.bind(null,t),t}(e);try{const e=await function(e,t){const n=Ma(e),r=Za.now(),i=t.reduce(((e,t)=>e.add(t.key)),ou());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>n.Wn.vn(e,i).next((i=>{s=i;const o=[];for(const e of t){const t=Pl(e,s.get(e.key));null!=t&&o.push(new Fl(e.key,t,xc(t.value.mapValue),Nl.exists(!0)))}return n.An.addMutationBatch(e,r,o,t)})))).then((e=>(e.applyToLocalDocumentSet(s),{batchId:e.batchId,changes:s})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Ko[e.currentUser.toKey()];r||(r=new Jl(Xa)),r=r.insert(t,n),e.Ko[e.currentUser.toKey()]=r}(r,e.batchId,n),await Hd(r,e.changes),await nd(r.remoteStore)}catch(e){const t=pd(e,"Failed to persist write");n.reject(t)}}async function $d(e,t){const n=Ma(e);try{const e=await hh(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Uo.get(t);r&&(La(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.$o=!0:e.modifiedDocuments.size>0?La(r.$o):e.removedDocuments.size>0&&(La(r.$o),r.$o=!1))})),await Hd(n,e,t)}catch(e){await rh(e)}}function xd(e,t,n){const r=Ma(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Oo.forEach(((n,r)=>{const i=r.view.ro(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=Ma(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.ro(t)&&(r=!0)})),r&&Id(n)}(r.eventManager,t),e.length&&r.Fo.Pr(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Pd(e,t,n){const r=Ma(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Uo.get(t),s=i&&i.key;if(s){let e=new Jl(wc.comparator);e=e.insert(s,Pc.newNoDocument(s,ec.min()));const n=ou().add(s),i=new lu(ec.min(),new Map,new Yl(Xa),e,n);await $d(r,i),r.Bo=r.Bo.remove(s),r.Uo.delete(t),zd(r)}else await fh(r.localStore,t,!1).then((()=>Vd(r,t,n))).catch(rh)}async function Ld(e,t){const n=Ma(e),r=t.batch.batchId;try{const e=await function(e,t){const n=Ma(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Qn.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Gu.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);La(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&r.addEntry(t,n.commitVersion))}))})),o.next((()=>e.An.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.An.performConsistencyCheck(e))).next((()=>n.Wn.vn(e,r)))}))}(n.localStore,t);Fd(n,r,null),Ud(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Hd(n,e)}catch(e){await rh(e)}}async function Md(e,t,n){const r=Ma(e);try{const e=await function(e,t){const n=Ma(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.An.lookupMutationBatch(e,t).next((t=>(La(null!==t),r=t.keys(),n.An.removeMutationBatch(e,t)))).next((()=>n.An.performConsistencyCheck(e))).next((()=>n.Wn.vn(e,r)))}))}(r.localStore,t);Fd(r,t,n),Ud(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Hd(r,e)}catch(n){await rh(n)}}function Ud(e,t){(e.jo.get(t)||[]).forEach((e=>{e.resolve()})),e.jo.delete(t)}function Fd(e,t,n){const r=Ma(e);let i=r.Ko[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Ko[r.currentUser.toKey()]=i}}function Vd(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Mo.get(t))e.Oo.delete(r),n&&e.Fo.zo(r,n);e.Mo.delete(t),e.isPrimaryClient&&e.qo.us(t).forEach((t=>{e.qo.containsKey(t)||jd(e,t)}))}function jd(e,t){e.Lo.delete(t.path.canonicalString());const n=e.Bo.get(t);null!==n&&(zh(e.remoteStore,n),e.Bo=e.Bo.remove(t),e.Uo.delete(n),zd(e))}function qd(e,t,n){for(const r of n)r instanceof kd?(e.qo.addReference(r.key,t),Bd(e,r)):r instanceof _d?(Da("SyncEngine","Document no longer in limbo: "+r.key),e.qo.removeReference(r.key,t),e.qo.containsKey(r.key)||jd(e,r.key)):Pa()}function Bd(e,t){const n=t.key,r=n.path.canonicalString();e.Bo.get(n)||e.Lo.has(r)||(Da("SyncEngine","New document in limbo: "+n),e.Lo.add(r),zd(e))}function zd(e){for(;e.Lo.size>0&&e.Bo.size<e.maxConcurrentLimboResolutions;){const t=e.Lo.values().next().value;e.Lo.delete(t);const n=new wc(sc.fromString(t)),r=e.Qo.next();e.Uo.set(r,new Cd(n)),e.Bo=e.Bo.insert(n,r),Bh(e.remoteStore,new Xu(al(rl(n.path)),r,2,Wa.I))}}async function Hd(e,t,n){const r=Ma(e),i=[],s=[],o=[];r.Oo.isEmpty()||(r.Oo.forEach(((e,a)=>{o.push(r.Go(a,t,n).then((e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),i.push(e);const t=oh.$n(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.Fo.Pr(i),await async function(e,t){const n=Ma(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Gu.forEach(t,(t=>Gu.forEach(t.kn,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Gu.forEach(t.xn,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!Wu(e))throw e;Da("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.qn.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.qn=n.qn.insert(t,i)}}}(r.localStore,s))}async function Kd(e,t){const n=Ma(e);if(!n.currentUser.isEqual(t)){Da("SyncEngine","User change. New user:",t.toKey());const e=await lh(n.localStore,t);n.currentUser=t,function(e,t){e.jo.forEach((e=>{e.forEach((e=>{e.reject(new Fa(Ua.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),e.jo.clear()}(n),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Hd(n,e.Gn)}}function Gd(e,t){const n=Ma(e),r=n.Uo.get(t);if(r&&r.$o)return ou().add(r.key);{let e=ou();const r=n.Mo.get(t);if(!r)return e;for(const t of r){const r=n.Oo.get(t);e=e.unionWith(r.view.Po)}return e}}class Wd{constructor(){this.synchronizeTabs=!1}async initialize(e){this.k=$h(e.databaseInfo.databaseId),this.sharedClientState=this.Jo(e),this.persistence=this.Yo(e),await this.persistence.start(),this.gcScheduler=this.Xo(e),this.localStore=this.Zo(e)}Xo(e){return null}Zo(e){return function(e,t,n,r){return new ch(e,t,n,r)}(this.persistence,new ah,e.initialUser,this.k)}Yo(e){return new Ih(kh.ks,this.k)}Jo(e){return new Sh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Jd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>xd(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Kd.bind(null,this.syncEngine),await async function(e,t){const n=Ma(e);t?(n.Gr.delete(2),await jh(n)):t||(n.Gr.add(2),await qh(n),n.Jr.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new wd}createDatastore(e){const t=$h(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Dh(r));var r;return function(e,t,n,r){return new Uh(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>xd(this.syncEngine,e,0),s=Ch.bt()?new Ch:new Ah,new Vh(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new Rd(e,t,n,r,i,s);return o&&(a.Wo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Ma(e);Da("RemoteStore","RemoteStore shutting down."),t.Gr.add(5),await qh(t),t.Hr.shutdown(),t.Jr.set("Unknown")}(this.remoteStore)}}
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
     */class Qd{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ea(this.observer.next,e)}error(e){this.observer.error?this.ea(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}na(){this.muted=!0}ea(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
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
     */class Xd{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Aa.UNAUTHENTICATED,this.clientId=Qa.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Da("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(()=>Promise.resolve()))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Fa(Ua.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Va;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=pd(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Yd(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){return e.offlineComponents||(Da("FirestoreClient","Using default OfflineComponentProvider"),await async function(e,t){e.asyncQueue.verifyOperationInProgress(),Da("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await lh(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}(e,new Wd)),e.offlineComponents}(e);Da("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>async function(e,t){const n=Ma(e);n.asyncQueue.verifyOperationInProgress(),Da("RemoteStore","RemoteStore received new credentials");const r=Jh(n);n.Gr.add(3),await qh(n),r&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Gr.delete(3),await jh(n)}(t.remoteStore,e))),e.onlineComponents=t}async function Zd(e){return e.onlineComponents||(Da("FirestoreClient","Using default OnlineComponentProvider"),await Yd(e,new Jd)),e.onlineComponents}async function ef(e){const t=await Zd(e),n=t.eventManager;return n.onListen=Nd.bind(null,t.syncEngine),n.onUnlisten=Dd.bind(null,t.syncEngine),n}function tf(e,t,n={}){const r=new Va;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new Qd({next:s=>{t.enqueueAndForget((()=>async function(e,t){const n=Ma(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new Fa(Ua.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new Fa(Ua.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new Ed(rl(n.path),s,{includeMetadataChanges:!0,wo:!0});return async function(e,t){const n=Ma(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new vd),i)try{s.so=await n.onListen(r)}catch(e){const n=pd(e,`Initialization of query '${ul(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.ro(n.onlineState),s.so&&t.oo(s.so)&&Id(n)}(e,o)}(await ef(e),e.asyncQueue,t,n,r))),r.promise}class nf{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class rf{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof rf&&e.projectId===this.projectId&&e.database===this.database}}
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
     */const sf=new Map;
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
     */function of(e,t,n){if(!n)throw new Fa(Ua.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function af(e){if(!wc.isDocumentKey(e))throw new Fa(Ua.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function cf(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Pa()}function lf(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Fa(Ua.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=cf(e);throw new Fa(Ua.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
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
     */class uf{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new Fa(Ua.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Fa(Ua.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new Fa(Ua.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
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
     */class hf{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uf({}),this._settingsFrozen=!1,e instanceof rf?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Fa(Ua.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rf(e.options.projectId)}(e))}get app(){if(!this._app)throw new Fa(Ua.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Fa(Ua.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uf(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new qa;switch(e.type){case"gapi":const t=e.client;return La(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new Ha(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new Fa(Ua.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=sf.get(e);t&&(Da("ComponentProvider","Removing Datastore"),sf.delete(e),t.terminate())}(this),Promise.resolve()}}
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
     */class df{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pf(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new df(this.firestore,e,this._key)}}class ff{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new ff(this.firestore,e,this._query)}}class pf extends ff{constructor(e,t,n){super(e,t,rl(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new df(this.firestore,null,new wc(e))}withConverter(e){return new pf(this.firestore,e,this._path)}}function mf(e,t,...n){if(e=_t(e),1===arguments.length&&(t=Qa.A()),of("doc","path",t),e instanceof hf){const r=sc.fromString(t,...n);return af(r),new df(e,null,new wc(r))}{if(!(e instanceof df||e instanceof pf))throw new Fa(Ua.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(sc.fromString(t,...n));return af(r),new df(e.firestore,e instanceof pf?e.converter:null,new wc(r))}}
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
     */class gf{constructor(){this.ma=Promise.resolve(),this.ga=[],this.ya=!1,this.pa=[],this.Ta=null,this.Ea=!1,this.Ia=!1,this.Aa=[],this.ur=new xh(this,"async_queue_retry"),this.Ra=()=>{const e=Oh();e&&Da("AsyncQueue","Visibility state changed to "+e.visibilityState),this.ur.er()};const e=Oh();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Ra)}get isShuttingDown(){return this.ya}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pa(),this.ba(e)}enterRestrictedMode(e){if(!this.ya){this.ya=!0,this.Ia=e||!1;const t=Oh();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Ra)}}enqueue(e){if(this.Pa(),this.ya)return new Promise((()=>{}));const t=new Va;return this.ba((()=>this.ya&&this.Ia?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.ga.push(e),this.va())))}async va(){if(0!==this.ga.length){try{await this.ga[0](),this.ga.shift(),this.ur.reset()}catch(e){if(!Wu(e))throw e;Da("AsyncQueue","Operation failed with retryable error: "+e)}this.ga.length>0&&this.ur.Zi((()=>this.va()))}}ba(e){const t=this.ma.then((()=>(this.Ea=!0,e().catch((e=>{this.Ta=e,this.Ea=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
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
     */(e);throw Oa("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Ea=!1,e))))));return this.ma=t,t}enqueueAfterDelay(e,t,n){this.Pa(),this.Aa.indexOf(e)>-1&&(t=0);const r=fd.createAndSchedule(this,e,t,n,(e=>this.Va(e)));return this.pa.push(r),r}Pa(){this.Ta&&Pa()}verifyOperationInProgress(){}async Sa(){let e;do{e=this.ma,await e}while(e!==this.ma)}Da(e){for(const t of this.pa)if(t.timerId===e)return!0;return!1}Ca(e){return this.Sa().then((()=>{this.pa.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.pa)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Sa()}))}Na(e){this.Aa.push(e)}Va(e){const t=this.pa.indexOf(e);this.pa.splice(t,1)}}class yf extends hf{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new gf,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||wf(this),this._firestoreClient.terminate()}}function vf(e){return e._firestoreClient||wf(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function wf(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new nf(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Xd(e._authCredentials,e._appCheckCredentials,e._queue,r)}
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
     */class bf{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Fa(Ua.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ac(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
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
     */class Tf{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Tf(lc.fromBase64String(e))}catch(e){throw new Fa(Ua.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Tf(lc.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
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
     */class Ef{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Fa(Ua.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Fa(Ua.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Xa(this._lat,e._lat)||Xa(this._long,e._long)}}
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
     */const kf=/^__.*__$/;class _f{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Fl(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ul(e,this.data,t,this.fieldTransforms)}}class Sf{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Fl(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Af(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Pa()}}class Cf{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.k=n,this.ignoreUndefinedProperties=r,void 0===i&&this.ka(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get xa(){return this.settings.xa}$a(e){return new Cf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Fa(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.$a({path:n,Oa:!1});return r.Ma(e),r}La(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.$a({path:n,Oa:!1});return r.ka(),r}Ba(e){return this.$a({path:void 0,Oa:!0})}Ua(e){return Vf(e,this.settings.methodName,this.settings.qa||!1,this.path,this.settings.Ka)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}ka(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ma(this.path.get(e))}Ma(e){if(0===e.length)throw this.Ua("Document fields must not be empty");if(Af(this.xa)&&kf.test(e))throw this.Ua('Document fields cannot begin and end with "__"')}}class Rf{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.k=n||$h(e)}ja(e,t,n,r=!1){return new Cf({xa:e,methodName:t,Ka:n,path:ac.emptyPath(),Oa:!1,qa:r},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function Nf(e){const t=e._freezeSettings(),n=$h(e._databaseId);return new Rf(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Df(e,t,n,r,i,s={}){const o=e.ja(s.merge||s.mergeFields?2:0,t,n,i);Lf("Data must be an object, but it was:",o,r);const a=xf(r,o);let c,l;if(s.merge)c=new cc(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=Mf(t,r,n);if(!o.contains(i))throw new Fa(Ua.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);jf(e,i)||e.push(i)}c=new cc(e),l=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,l=o.fieldTransforms;return new _f(new $c(a),c,l)}class Of extends If{_toFieldTransform(e){if(2!==e.xa)throw 1===e.xa?e.Ua(`${this._methodName}() can only appear at the top level of your update data`):e.Ua(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Of}}function $f(e,t){if(Pf(e=_t(e)))return Lf("Unsupported field value:",t,e),xf(e,t);if(e instanceof If)return function(e,t){if(!Af(t.xa))throw t.Ua(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Ua(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Oa&&4!==t.xa)throw t.Ua("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=$f(i,t.Ba(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=_t(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return gl(t.k,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Za.fromDate(e);return{timestampValue:Tu(t.k,n)}}if(e instanceof Za){const n=new Za(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Tu(t.k,n)}}if(e instanceof Ef)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Tf)return{bytesValue:Iu(t.k,e._byteString)};if(e instanceof df){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Ua(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:_u(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Ua(`Unsupported field value: ${cf(e)}`)}(e,t)}function xf(e,t){const n={};return rc(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):nc(e,((e,r)=>{const i=$f(r,t.Fa(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Pf(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Za||e instanceof Ef||e instanceof Tf||e instanceof df||e instanceof If)}function Lf(e,t,n){if(!Pf(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=cf(n);throw"an object"===r?t.Ua(e+" a custom object"):t.Ua(e+" "+r)}}function Mf(e,t,n){if((t=_t(t))instanceof bf)return t._internalPath;if("string"==typeof t)return Ff(e,t);throw Vf("Field path arguments must be of type string or FieldPath.",e,!1,void 0,n)}const Uf=new RegExp("[~\\*/\\[\\]]");function Ff(e,t,n){if(t.search(Uf)>=0)throw Vf(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new bf(...t.split("."))._internalPath}catch(r){throw Vf(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Vf(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Fa(Ua.INVALID_ARGUMENT,a+e+c)}function jf(e,t){return e.some((e=>e.isEqual(t)))}
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
     */class qf{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new df(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Bf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(zf("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Bf extends qf{data(){return super.data()}}function zf(e,t){return"string"==typeof t?Ff(e,t):t instanceof bf?t._internalPath:t._delegate._internalPath}
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
     */class Hf{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Kf extends qf{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Gf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(zf("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Gf extends Kf{data(e={}){return super.data(e)}}
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
function Wf(e){e=lf(e,df);const t=lf(e.firestore,yf);return tf(vf(t),e._key).then((n=>function(e,t,n){const r=n.docs.get(t._key),i=new Jf(e);return new Kf(e,i,t._key,r,new Hf(n.hasPendingWrites,n.fromCache),t.converter)}(t,e,n)))}class Jf extends class{convertValue(e,t="none"){switch(bc(e)){case 0:return null;case 1:return e.booleanValue;case 2:return dc(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(fc(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Pa()}}convertObject(e,t){const n={};return nc(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Ef(dc(e.latitude),dc(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=mc(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(gc(e));default:return null}}convertTimestamp(e){const t=hc(e);return new Za(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=sc.fromString(e);La(Ku(n));const r=new rf(n.get(1),n.get(3)),i=new wc(n.popFirst(5));return r.isEqual(t)||Oa(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
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
     */{constructor(e){super(),this.firestore=e}convertBytes(e){return new Tf(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new df(this.firestore,null,t)}}function Qf(e,t,n,...r){e=lf(e,df);const i=lf(e.firestore,yf),s=Nf(i);let o;return o="string"==typeof(t=_t(t))||t instanceof bf?function(e,t,n,r,i,s){const o=e.ja(1,t,n),a=[Mf(t,r,n)],c=[i];if(s.length%2!=0)throw new Fa(Ua.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)a.push(Mf(t,s[e])),c.push(s[e+1]);const l=[],u=$c.empty();for(let e=a.length-1;e>=0;--e)if(!jf(l,a[e])){const t=a[e];let n=c[e];n=_t(n);const r=o.La(t);if(n instanceof Of)l.push(t);else{const e=$f(n,r);null!=e&&(l.push(t),u.set(t,e))}}const h=new cc(l);return new Sf(u,h,o.fieldTransforms)}(s,"updateDoc",e._key,t,n,r):function(e,t,n,r){const i=e.ja(1,t,n);Lf("Data must be an object, but it was:",i,r);const s=[],o=$c.empty();nc(r,((e,r)=>{const a=Ff(t,e,n);r=_t(r);const c=i.La(a);if(r instanceof Of)s.push(a);else{const e=$f(r,c);null!=e&&(s.push(a),o.set(a,e))}}));const a=new cc(s);return new Sf(o,a,i.fieldTransforms)}(s,"updateDoc",e._key,t),Xf(i,[o.toMutation(e._key,Nl.exists(!0))])}function Xf(e,t){return function(e,t){const n=new Va;return e.asyncQueue.enqueueAndForget((async()=>Od(await function(e){return Zd(e).then((e=>e.syncEngine))}(e),t,n))),n.promise}(vf(e),t)}
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
function Yf(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function Zf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}!function(e,t=!0){Ca="9.6.1",Ht(new St("firestore",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=new yf(r,new Ba(e.getProvider("auth-internal")),new Ga(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),i._setSettings(n),i}),"PUBLIC")),Xt(Sa,"3.4.1",e),Xt(Sa,"3.4.1","esm2017")}();const ep=Zf,tp=new mt("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),np=new Pt("@firebase/auth");function rp(e,...t){np.logLevel<=Nt.ERROR&&np.error(`Auth (9.6.1): ${e}`,...t)}
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
     */function ip(e,...t){throw op(e,...t)}function sp(e,...t){return op(e,...t)}function op(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return tp.create(e,...t)}function ap(e,t,...n){if(!e)throw op(t,...n)}function cp(e){const t="INTERNAL ASSERTION FAILED: "+e;throw rp(t),new Error(t)}function lp(e,t){e||cp(t)}
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
     */const up=new Map;function hp(e){lp(e instanceof Function,"Expected a class definition");let t=up.get(e);return t?(lp(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,up.set(e,t),t)}
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
function dp(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function fp(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
     */function pp(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==fp()&&"https:"!==fp()&&!ut()&&!("connection"in navigator)||navigator.onLine}
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
class mp{constructor(e,t){this.shortDelay=e,this.longDelay=t,lp(t>e,"Short delay should be less than long delay!"),this.isMobile=lt()||ht()}get(){return pp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
     */function gp(e,t){lp(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
     */class yp{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void cp("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void cp("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void cp("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
     */const vp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},wp=new mp(3e4,6e4);
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
     */function bp(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Tp(e,t,n,r,i={}){return Ip(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=wt(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),yp.fetch()(kp(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Ip(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},vp),t);try{const t=new _p(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Sp(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Sp(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Sp(e,"email-already-in-use",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw function(e,t,n){const r=Object.assign(Object.assign({},ep()),{[t]:n});return new mt("auth","Firebase",r).create(t,{appName:e.name})}(e,a,o);ip(e,a)}}catch(t){if(t instanceof pt)throw t;ip(e,"network-request-failed")}}async function Ep(e,t,n,r,i={}){const s=await Tp(e,t,n,r,i);return"mfaPendingCredential"in s&&ip(e,"multi-factor-auth-required",{_serverResponse:s}),s}function kp(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?gp(e.config,i):`${e.config.apiScheme}://${i}`}class _p{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(sp(this.auth,"timeout"))),wp.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Sp(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=sp(e,t,r);return i.customData._tokenResponse=n,i}
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
function Ap(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}function Cp(e){return 1e3*Number(e)}function Rp(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return rp("JWT malformed, contained fewer than 3 sections"),null;try{const e=function(e){try{return ot.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null}(n);return e?JSON.parse(e):(rp("Failed to decode base64 JWT payload"),null)}catch(e){return rp("Caught error parsing JWT payload as JSON",e),null}}
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
async function Np(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof pt&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
     */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Dp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
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
     */class Op{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ap(this.lastLoginAt),this.creationTime=Ap(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
     */async function $p(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Np(e,async function(e,t){return Tp(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));ap(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=Yf(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const u=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Op(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
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
class xp{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ap(e.idToken,"internal-error"),ap(void 0!==e.idToken,"internal-error"),ap(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Rp(e);return ap(t,"internal-error"),ap(void 0!==t.exp,"internal-error"),ap(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return ap(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
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
async function(e,t){const n=await Ip(e,{},(async()=>{const n=wt({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=kp(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",yp.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new xp;return n&&(ap("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(ap("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(ap("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xp,this.toJSON())}_performRefresh(){return cp("not implemented")}}
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
     */function Pp(e,t){ap("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Lp{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Yf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Dp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new Op(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Np(this,this.stsTokenManager.getToken(this.auth,e));return ap(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=_t(e),r=await n.getIdToken(t),i=Rp(r);ap(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ap(Cp(i.auth_time)),issuedAtTime:Ap(Cp(i.iat)),expirationTime:Ap(Cp(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=_t(e);await $p(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(ap(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Lp(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){ap(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await $p(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Np(this,async function(e,t){return Tp(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:T,stsTokenManager:I}=t;ap(v&&I,e,"internal-error");const E=xp.fromJSON(this.name,I);ap("string"==typeof v,e,"internal-error"),Pp(u,e.name),Pp(h,e.name),ap("boolean"==typeof w,e,"internal-error"),ap("boolean"==typeof b,e,"internal-error"),Pp(d,e.name),Pp(f,e.name),Pp(p,e.name),Pp(m,e.name),Pp(g,e.name),Pp(y,e.name);const k=new Lp({uid:v,auth:e,email:h,emailVerified:w,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:g,lastLoginAt:y});return T&&Array.isArray(T)&&(k.providerData=T.map((e=>Object.assign({},e)))),m&&(k._redirectEventId=m),k}static async _fromIdTokenResponse(e,t,n=!1){const r=new xp;r.updateFromServerResponse(t);const i=new Lp({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await $p(i),i}}
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
     */class Mp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Mp.type="NONE";const Up=Mp;
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
     */function Fp(e,t,n){return`firebase:${e}:${t}:${n}`}class Vp{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Fp(this.userKey,r.apiKey,i),this.fullPersistenceKey=Fp("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Lp._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Vp(hp(Up),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||hp(Up);const s=Fp(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const r=Lp._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new Vp(i,e,n)):new Vp(i,e,n)}}
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
     */function jp(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Hp(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(qp(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Gp(t))return"Blackberry";if(Wp(t))return"Webos";if(Bp(t))return"Safari";if((t.includes("chrome/")||zp(t))&&!t.includes("edge/"))return"Chrome";if(Kp(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function qp(e=ct()){return/firefox\//i.test(e)}function Bp(e=ct()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function zp(e=ct()){return/crios\//i.test(e)}function Hp(e=ct()){return/iemobile/i.test(e)}function Kp(e=ct()){return/android/i.test(e)}function Gp(e=ct()){return/blackberry/i.test(e)}function Wp(e=ct()){return/webos/i.test(e)}function Jp(e=ct()){return/iphone|ipad|ipod/i.test(e)}function Qp(e=ct()){return Jp(e)||Kp(e)||Wp(e)||Gp(e)||/windows phone/i.test(e)||Hp(e)}
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
function Xp(e,t=[]){let n;switch(e){case"Browser":n=jp(ct());break;case"Worker":n=`${jp(ct())}-${e}`;break;default:n=e}return`${n}/JsCore/9.6.1/${t.length?t.join(","):"FirebaseCore-web"}`}
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
     */class Yp{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new em(this),this.idTokenSubscription=new em(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tp,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=hp(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Vp.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);r&&r!==i||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(ap(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await $p(e)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?_t(e):null;return t&&ap(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&ap(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(hp(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new mt("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&hp(e)||this._popupRedirectResolver;ap(t,this,"argument-error"),this.redirectPersistenceManager=await Vp.create(this,[hp(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return ap(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ap(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function Zp(e){return _t(e)}class em{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new It(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return ap(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
     */class tm{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return cp("not implemented")}_getIdTokenResponse(e){return cp("not implemented")}_linkToIdToken(e,t){return cp("not implemented")}_getReauthenticationResolver(e){return cp("not implemented")}}async function nm(e,t){return async function(e,t){return Tp(e,"POST","/v1/accounts:sendOobCode",bp(e,t))}(e,t)}
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
class rm extends tm{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new rm(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new rm(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
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
return async function(e,t){return Ep(e,"POST","/v1/accounts:signInWithPassword",bp(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Ep(e,"POST","/v1/accounts:signInWithEmailLink",bp(e,t))}(e,{email:this._email,oobCode:this._password});default:ip(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return async function(e,t){return Tp(e,"POST","/v1/accounts:update",t)}(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Ep(e,"POST","/v1/accounts:signInWithEmailLink",bp(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:ip(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
     */async function im(e,t){return Ep(e,"POST","/v1/accounts:signInWithIdp",bp(e,t))}
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
     */class sm extends tm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new sm(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ip("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Yf(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new sm(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return im(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,im(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,im(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=wt(t)}return e}}
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
     */class om{constructor(e){var t,n,r,i,s,o;const a=bt(Tt(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);ap(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=bt(Tt(e)).link,n=t?bt(Tt(t)).deep_link_id:null,r=bt(Tt(e)).deep_link_id;return(r?bt(Tt(r)).link:null)||r||n||t||e}(e);try{return new om(t)}catch(e){return null}}}
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
     */class am{constructor(){this.providerId=am.PROVIDER_ID}static credential(e,t){return rm._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=om.parseLink(t);return ap(n,"argument-error"),rm._fromEmailAndCode(e,n.code,n.tenantId)}}am.PROVIDER_ID="password",am.EMAIL_PASSWORD_SIGN_IN_METHOD="password",am.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class cm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
     */class lm extends cm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
     */class um extends lm{constructor(){super("facebook.com")}static credential(e){return sm._fromParams({providerId:um.PROVIDER_ID,signInMethod:um.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return um.credentialFromTaggedObject(e)}static credentialFromError(e){return um.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return um.credential(e.oauthAccessToken)}catch(e){return null}}}um.FACEBOOK_SIGN_IN_METHOD="facebook.com",um.PROVIDER_ID="facebook.com";
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
class hm extends lm{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return sm._fromParams({providerId:hm.PROVIDER_ID,signInMethod:hm.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return hm.credentialFromTaggedObject(e)}static credentialFromError(e){return hm.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return hm.credential(t,n)}catch(e){return null}}}hm.GOOGLE_SIGN_IN_METHOD="google.com",hm.PROVIDER_ID="google.com";
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
class dm extends lm{constructor(){super("github.com")}static credential(e){return sm._fromParams({providerId:dm.PROVIDER_ID,signInMethod:dm.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dm.credentialFromTaggedObject(e)}static credentialFromError(e){return dm.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return dm.credential(e.oauthAccessToken)}catch(e){return null}}}dm.GITHUB_SIGN_IN_METHOD="github.com",dm.PROVIDER_ID="github.com";
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
class fm extends lm{constructor(){super("twitter.com")}static credential(e,t){return sm._fromParams({providerId:fm.PROVIDER_ID,signInMethod:fm.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return fm.credentialFromTaggedObject(e)}static credentialFromError(e){return fm.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return fm.credential(t,n)}catch(e){return null}}}fm.TWITTER_SIGN_IN_METHOD="twitter.com",fm.PROVIDER_ID="twitter.com";
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
class pm{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Lp._fromIdTokenResponse(e,n,r),s=mm(n);return new pm({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=mm(n);return new pm({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function mm(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
     */class gm extends pt{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,gm.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new gm(e,t,n,r)}}function ym(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw gm._fromErrorAndOperation(e,n,t,r);throw n}))}
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
async function vm(e,t,n=!1){const r="signIn",i=await ym(e,r,t),s=await pm._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function wm(e,t,n){const r=Zp(e),i=await
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
async function(e,t){return Ep(e,"POST","/v1/accounts:signUp",bp(e,t))}(r,{returnSecureToken:!0,email:t,password:n}),s=await pm._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function bm(e,t,n){return async function(e,t){return vm(Zp(e),t)}
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
     */(_t(e),am.credential(t,n))}async function Tm(e,t){const n=_t(e),r={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&function(e,t,n){var r;ap((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),ap(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(ap(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(ap(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}(n.auth,r,t);const{email:i}=await nm(n.auth,r);i!==e.email&&await e.reload()}function Im(e){return _t(e).signOut()}const Em="__sak";
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
     */class km{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Em,"1"),this.storage.removeItem(Em),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
     */class _m extends km{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=ct();return Bp(e)||Jp(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Qp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);dt()&&10===document.documentMode&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}_m.type="LOCAL";const Sm=_m;
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
     */class Am extends km{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Am.type="SESSION";const Cm=Am;
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
class Rm{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Rm(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
     */Rm.receivers=[];class Dm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Nm("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
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
     */function Om(){return window}
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
function $m(){return void 0!==Om().WorkerGlobalScope&&"function"==typeof Om().importScripts}
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
const xm="firebaseLocalStorageDb",Pm="firebaseLocalStorage",Lm="fbase_key";class Mm{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Um(e,t){return e.transaction([Pm],t?"readwrite":"readonly").objectStore(Pm)}function Fm(){const e=indexedDB.open(xm,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Pm,{keyPath:Lm})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Pm)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(xm);return new Mm(e).toPromise()}(),t(await Fm()))}))}))}async function Vm(e,t,n){const r=Um(e,!0).put({[Lm]:t,value:n});return new Mm(r).toPromise()}function jm(e,t){const n=Um(e,!0).delete(t);return new Mm(n).toPromise()}class qm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Fm()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $m()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rm._getInstance($m()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Dm(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&function(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fm();return await Vm(e,Em,"1"),await jm(e,Em),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Vm(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Um(e,!1).get(t),r=await new Mm(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>jm(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Um(e,!1).getAll();return new Mm(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}qm.type="LOCAL";const Bm=qm;
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
     */function zm(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=sp("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",function(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}().appendChild(r)}))}new mp(3e4,6e4);
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
class Hm extends tm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return im(e,this._buildIdpRequest())}_linkToIdToken(e,t){return im(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return im(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Km(e){return vm(e.auth,new Hm(e),e.bypassAuthState)}function Gm(e){const{auth:t,user:n}=e;return ap(n,t,"internal-error"),
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
async function(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Np(e,ym(r,i,t,e),n);ap(s.idToken,r,"internal-error");const o=Rp(s.idToken);ap(o,r,"internal-error");const{sub:a}=o;return ap(e.uid===a,r,"user-mismatch"),pm._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&ip(r,"user-mismatch"),e}}(n,new Hm(e),e.bypassAuthState)}async function Wm(e){const{auth:t,user:n}=e;return ap(n,t,"internal-error"),async function(e,t,n=!1){const r=await Np(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return pm._forOperation(e,"link",r)}(n,new Hm(e),e.bypassAuthState)}
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
     */class Jm{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Km;case"linkViaPopup":case"linkViaRedirect":return Wm;case"reauthViaPopup":case"reauthViaRedirect":return Gm;default:ip(this.auth,"internal-error")}}resolve(e){lp(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){lp(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
     */const Qm=new mp(2e3,1e4);class Xm extends Jm{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Xm.currentPopupAction&&Xm.currentPopupAction.cancel(),Xm.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ap(e,this.auth,"internal-error"),e}async onExecution(){lp(1===this.filter.length,"Popup operations only handle one event");const e=Nm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(sp(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(sp(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xm.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(sp(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Qm.get())};e()}}Xm.currentPopupAction=null;
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
const Ym="pendingRedirect",Zm=new Map;class eg extends Jm{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Zm.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return Fp(Ym,e.config.apiKey,e.name)}(t),r=function(e){return hp(e._redirectPersistence)}(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Zm.set(this.auth._key(),e)}return this.bypassAuthState||Zm.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function tg(e,t,n=!1){const r=Zp(e),i=
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
function(e,t){return t?hp(t):(ap(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(r,t),s=new eg(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
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
     */class ng{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ig(e);default:return!1}}
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
     */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!ig(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(sp(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(rg(e))}saveEventToCache(e){this.cachedEventUids.add(rg(e)),this.lastProcessedEventTime=Date.now()}}function rg(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function ig({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const sg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,og=/^https?/;async function ag(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Tp(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(cg(e))return}catch(e){}ip(e,"unauthorized-domain")}function cg(e){const t=dp(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!og.test(n))return!1;if(sg.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
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
     */const lg=new mp(3e4,6e4);function ug(){const e=Om().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function hg(e){return new Promise(((t,n)=>{var r,i,s;function o(){ug(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ug(),n(sp(e,"network-request-failed"))},timeout:lg.get()})}if(null===(i=null===(r=Om().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Om().gapi)||void 0===s?void 0:s.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Om()[t]=()=>{gapi.load?o():n(sp(e,"network-request-failed"))},zm(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw dg=null,e}))}let dg=null;
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
const fg=new mp(5e3,15e3),pg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gg(e){const t=e.config;ap(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?gp(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:Jt},i=mg.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${wt(r).slice(1)}`}async function yg(e){const t=await function(e){return dg=dg||hg(e),dg}(e),n=Om().gapi;return ap(n,e,"internal-error"),t.open({where:document.body,url:gg(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pg,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=sp(e,"network-request-failed"),s=Om().setTimeout((()=>{r(i)}),fg.get());function o(){Om().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
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
     */const vg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class wg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function bg(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},vg),{width:r.toString(),height:i.toString(),top:s,left:o}),l=ct().toLowerCase();n&&(a=zp(l)?"_blank":n),qp(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=ct()){var t;return Jp(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
     */(t||"",a),new wg(null);const h=window.open(t||"",a,u);ap(h,e,"popup-blocked");try{h.focus()}catch(e){}return new wg(h)}const Tg="__/auth/handler",Ig="emulator/auth/handler";function Eg(e,t,n,r,i,s){ap(e.config.authDomain,e,"auth-domain-config-required"),ap(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Jt,eventId:i};if(t instanceof cm){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof lm){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${Tg}`;return gp(e,Ig)}
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
     */(e)}?${wt(a).slice(1)}`}const kg="webStorageSupport";const _g=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cm,this._completeRedirectFn=tg}async _openPopup(e,t,n,r){var i;lp(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return bg(e,Eg(e,t,n,dp(),r),Nm())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=Eg(e,t,n,dp(),r),Om().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(lp(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await yg(e),n=new ng(e);return t.register("authEvent",(t=>{ap(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(kg,{type:kg},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),ip(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ag(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Qp()||Bp()||Jp()}};var Sg,Ag="@firebase/auth",Cg="0.19.4";
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
class Rg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ap(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
function Ng(e=Qt()){const t=Kt(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=Kt(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(yt(n.getOptions(),null!=t?t:{}))return e;ip(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:_g,persistence:[Bm,Sm,Cm]})}function Dg(e){e?setTimeout((()=>{window.location.href="/"}),e):window.location.href="/"}Sg="Browser",Ht(new St("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:i}=n.options;return(e=>{ap(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),ap(!(null==i?void 0:i.includes(":")),"argument-error",{appName:e.name});const n={apiKey:r,authDomain:i,clientPlatform:Sg,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xp(Sg)},s=new Yp(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(hp);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Ht(new St("auth-internal",(e=>(e=>new Rg(e))(Zp(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),Xt(Ag,Cg,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Sg)),Xt(Ag,Cg,"esm2017");const Og={email:"",numGames:0,avgWPM:0,matchHistory:[],matchHistoryTime:[],uid:""};function $g(e){return e.split("/")[1].slice(0,-2)}
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
     */const xg=new Map,Pg={activated:!1,tokenObservers:[]},Lg={initialized:!1,enabled:!1};function Mg(e){return xg.get(e)||Pg}function Ug(e,t){xg.set(e,t)}function Fg(){return Lg}
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
     */const Vg="https://content-firebaseappcheck.googleapis.com/v1beta",jg=3e4,qg=96e4,Bg=864e5;
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
class zg{constructor(e,t,n,r,i){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=n,this.lowerBound=r,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=r,r>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch((()=>{}))}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new at,await function(e){return new Promise((t=>{setTimeout(t,e)}))}
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
     */(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new at,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch((()=>{}))}catch(e){this.retryPolicy(e)?this.process(!1).catch((()=>{})):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const e=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),e}}}const Hg=new mt("appCheck","AppCheck",{"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"});
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
function Kg(e=!1){var t;return e?null===(t=self.grecaptcha)||void 0===t?void 0:t.enterprise:self.grecaptcha}function Gg(e){if(!Mg(e).activated)throw Hg.create("use-before-activation",{appName:e.name})}function Wg(e){const t=Math.round(e/1e3),n=Math.floor(t/86400),r=Math.floor((t-3600*n*24)/3600),i=Math.floor((t-3600*n*24-3600*r)/60),s=t-3600*n*24-3600*r-60*i;let o="";return n&&(o+=Jg(n)+"d:"),r&&(o+=Jg(r)+"h:"),o+=Jg(i)+"m:"+Jg(s)+"s",o}function Jg(e){return 0===e?"00":e>=10?e.toString():"0"+e}
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
     */async function Qg({url:e,body:t},n){const r={"Content-Type":"application/json"},i=n.getImmediate({optional:!0});i&&(r["X-Firebase-Client"]=i.getPlatformInfoString());const s={method:"POST",body:JSON.stringify(t),headers:r};let o,a;try{o=await fetch(e,s)}catch(e){throw Hg.create("fetch-network-error",{originalErrorMessage:e.message})}if(200!==o.status)throw Hg.create("fetch-status-error",{httpStatus:o.status});try{a=await o.json()}catch(e){throw Hg.create("fetch-parse-error",{originalErrorMessage:e.message})}const c=a.ttl.match(/^([\d.]+)(s)$/);if(!c||!c[2]||isNaN(Number(c[1])))throw Hg.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${a.ttl}`});const l=1e3*Number(c[1]),u=Date.now();return{token:a.attestationToken,expireTimeMillis:u+l,issuedAtTimeMillis:u}}
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
const Xg="firebase-app-check-store",Yg="debug-token";let Zg=null;function ey(){return Zg||(Zg=new Promise(((e,t)=>{try{const n=indexedDB.open("firebase-app-check-database",1);n.onsuccess=t=>{e(t.target.result)},n.onerror=e=>{var n;t(Hg.create("storage-open",{originalErrorMessage:null===(n=e.target.error)||void 0===n?void 0:n.message}))},n.onupgradeneeded=e=>{const t=e.target.result;if(0===e.oldVersion)t.createObjectStore(Xg,{keyPath:"compositeKey"})}}catch(e){t(Hg.create("storage-open",{originalErrorMessage:e.message}))}})),Zg)}async function ty(e,t){const n=(await ey()).transaction(Xg,"readwrite"),r=n.objectStore(Xg).put({compositeKey:e,value:t});return new Promise(((e,t)=>{r.onsuccess=t=>{e()},n.onerror=e=>{var n;t(Hg.create("storage-set",{originalErrorMessage:null===(n=e.target.error)||void 0===n?void 0:n.message}))}}))}async function ny(e){const t=(await ey()).transaction(Xg,"readonly"),n=t.objectStore(Xg).get(e);return new Promise(((e,r)=>{n.onsuccess=t=>{const n=t.target.result;e(n?n.value:void 0)},t.onerror=e=>{var t;r(Hg.create("storage-get",{originalErrorMessage:null===(t=e.target.error)||void 0===t?void 0:t.message}))}}))}function ry(e){return`${e.options.appId}-${e.name}`}
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
     */const iy=new Pt("@firebase/app-check");
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
     */async function sy(e){if(ft()){let t;try{t=await function(e){return ny(ry(e))}(e)}catch(e){iy.warn(`Failed to read token from IndexedDB. Error: ${e}`)}return t}}function oy(e,t){return ft()?function(e,t){return ty(ry(e),t)}(e,t).catch((e=>{iy.warn(`Failed to write token to IndexedDB. Error: ${e}`)})):Promise.resolve()}async function ay(){let e;try{e=await ny(Yg)}catch(e){}if(e)return e;{const e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(e=>{const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}));return(t=e,ty(Yg,t)).catch((e=>iy.warn(`Failed to persist debug token to IndexedDB. Error: ${e}`))),e}var t}
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
     */function cy(){return Fg().enabled}async function ly(){const e=Fg();if(e.enabled&&e.token)return e.token.promise;throw Error("\n            Can't get debug token in production mode.\n        ")}function uy(){const e=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}
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
     */(),t=Fg();if(t.initialized=!0,"string"!=typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN&&!0!==e.FIREBASE_APPCHECK_DEBUG_TOKEN)return;t.enabled=!0;const n=new at;t.token=n,"string"==typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN?n.resolve(e.FIREBASE_APPCHECK_DEBUG_TOKEN):n.resolve(ay())}
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
     */const hy={error:"UNKNOWN_ERROR"};function dy(e){return ot.encodeString(JSON.stringify(e),!1)}async function fy(e,t=!1){const n=e.app;Gg(n);const r=Mg(n);let i,s=r.token;if(!s){const e=await r.cachedTokenPromise;e&&vy(e)&&(s=e)}if(!t&&s&&vy(s))return{token:s.token};let o,a=!1;if(cy()){r.exchangeTokenPromise||(r.exchangeTokenPromise=Qg(function(e,t){const{projectId:n,appId:r,apiKey:i}=e.options;return{url:`${Vg}/projects/${n}/apps/${r}:exchangeDebugToken?key=${i}`,body:{debug_token:t}}}(n,await ly()),e.platformLoggerProvider).then((e=>(r.exchangeTokenPromise=void 0,e))),a=!0);const t=await r.exchangeTokenPromise;return await oy(n,t),Ug(n,Object.assign(Object.assign({},r),{token:t})),{token:t.token}}try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().then((e=>(r.exchangeTokenPromise=void 0,e))),a=!0),s=await r.exchangeTokenPromise}catch(e){"appCheck/throttled"===e.code?iy.warn(e.message):iy.error(e),i=e}return s?(o={token:s.token},Ug(n,Object.assign(Object.assign({},r),{token:s})),await oy(n,s)):o=function(e){return{token:dy(hy),error:e}}
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
     */(i),a&&yy(n,o),o}function py(e,t,n,r){const{app:i}=e,s=Mg(i),o={next:n,error:r,type:t};if(Ug(i,Object.assign(Object.assign({},s),{tokenObservers:[...s.tokenObservers,o]})),s.token&&vy(s.token)){const t=s.token;Promise.resolve().then((()=>{n({token:t.token}),gy(e)})).catch((()=>{}))}s.cachedTokenPromise.then((()=>gy(e)))}function my(e,t){const n=Mg(e),r=n.tokenObservers.filter((e=>e.next!==t));0===r.length&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),Ug(e,Object.assign(Object.assign({},n),{tokenObservers:r}))}function gy(e){const{app:t}=e,n=Mg(t);let r=n.tokenRefresher;r||(r=function(e){const{app:t}=e;return new zg((async()=>{let n;if(n=Mg(t).token?await fy(e,!0):await fy(e),n.error)throw n.error}),(()=>!0),(()=>{const e=Mg(t);if(e.token){let t=e.token.issuedAtTimeMillis+.5*(e.token.expireTimeMillis-e.token.issuedAtTimeMillis)+3e5;const n=e.token.expireTimeMillis-3e5;return t=Math.min(t,n),Math.max(0,t-Date.now())}return 0}),jg,qg)}(e),Ug(t,Object.assign(Object.assign({},n),{tokenRefresher:r}))),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function yy(e,t){const n=Mg(e).tokenObservers;for(const e of n)try{"EXTERNAL"===e.type&&null!=t.error?e.error(t.error):e.next(t)}catch(e){}}function vy(e){return e.expireTimeMillis-Date.now()>0}class wy{constructor(e,t){this.app=e,this.platformLoggerProvider=t}_delete(){const{tokenObservers:e}=Mg(this.app);for(const t of e)my(this.app,t.next);return Promise.resolve()}}const by="https://www.google.com/recaptcha/api.js";function Ty(e,t){const n=Mg(e),r=new at;Ug(e,Object.assign(Object.assign({},n),{reCAPTCHAState:{initialized:r}}));const i=function(e){const t=`fire_app_check_${e.name}`,n=document.createElement("div");return n.id=t,n.style.display="none",document.body.appendChild(n),t}(e),s=Kg(!1);return s?Iy(e,t,s,i,r):function(e){const t=document.createElement("script");t.src=by,t.onload=e,document.head.appendChild(t)}
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
     */((()=>{const n=Kg(!1);if(!n)throw new Error("no recaptcha");Iy(e,t,n,i,r)})),r.promise}function Iy(e,t,n,r,i){n.ready((()=>{!function(e,t,n,r){const i=n.render(r,{sitekey:t,size:"invisible"}),s=Mg(e);Ug(e,Object.assign(Object.assign({},s),{reCAPTCHAState:Object.assign(Object.assign({},s.reCAPTCHAState),{widgetId:i})}))}(e,t,n,r),i.resolve(n)}))}class Ey{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e;!function(e){if(e&&Date.now()-e.allowRequestsAfter<=0)throw Hg.create("throttled",{time:Wg(e.allowRequestsAfter-Date.now()),httpStatus:e.httpStatus})}
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
     */(this._throttleData);const t=await async function(e){Gg(e);const t=Mg(e).reCAPTCHAState,n=await t.initialized.promise;return new Promise(((t,r)=>{const i=Mg(e).reCAPTCHAState;n.ready((()=>{t(n.execute(i.widgetId,{action:"fire_app_check"}))}))}))}(this._app).catch((e=>{throw Hg.create("recaptcha-error")}));let n;try{n=await Qg(function(e,t){const{projectId:n,appId:r,apiKey:i}=e.options;return{url:`${Vg}/projects/${n}/apps/${r}:exchangeRecaptchaToken?key=${i}`,body:{recaptcha_token:t}}}(this._app,t),this._platformLoggerProvider)}catch(t){throw"fetch-status-error"===t.code?(this._throttleData=function(e,t){if(404===e||403===e)return{backoffCount:1,allowRequestsAfter:Date.now()+Bg,httpStatus:e};{const n=t?t.backoffCount:0,r=kt(n,1e3,2);return{backoffCount:n+1,allowRequestsAfter:Date.now()+r,httpStatus:e}}}(Number(null===(e=t.customData)||void 0===e?void 0:e.httpStatus),this._throttleData),Hg.create("throttled",{time:Wg(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):t}return this._throttleData=null,n}initialize(e){this._app=e,this._platformLoggerProvider=Kt(e,"platform-logger"),Ty(e,this._siteKey).catch((()=>{}))}isEqual(e){return e instanceof Ey&&this._siteKey===e._siteKey}}function ky(e=Qt(),t){const n=Kt(e=_t(e),"app-check");if(Fg().initialized||uy(),cy()&&ly().then((e=>console.log(`App Check debug token: ${e}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`))),n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(i.isTokenAutoRefreshEnabled===t.isTokenAutoRefreshEnabled&&i.provider.isEqual(t.provider))return r;throw Hg.create("already-initialized",{appName:e.name})}const r=n.initialize({options:t});return function(e,t,n){const r=Mg(e),i=Object.assign(Object.assign({},r),{activated:!0});i.provider=t,i.cachedTokenPromise=sy(e).then((t=>(t&&vy(t)&&(Ug(e,Object.assign(Object.assign({},Mg(e)),{token:t})),yy(e,{token:t.token})),t))),i.isTokenAutoRefreshEnabled=void 0===n?e.automaticDataCollectionEnabled:n,Ug(e,i),i.provider.initialize(e)}(e,t.provider,t.isTokenAutoRefreshEnabled),Mg(e).isTokenAutoRefreshEnabled&&py(r,"INTERNAL",(()=>{})),r}const _y="app-check-internal";let Sy,Ay,Cy;Ht(new St("app-check",(e=>function(e,t){return new wy(e,t)}(e.getProvider("app").getImmediate(),e.getProvider("platform-logger"))),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider(_y).initialize()}))),Ht(new St(_y,(e=>function(e){return{getToken:t=>fy(e,t),addTokenListener:t=>py(e,"INTERNAL",t),removeTokenListener:t=>my(e.app,t)}}(e.getProvider("app-check").getImmediate())),"PUBLIC").setInstantiationMode("EXPLICIT")),Xt("@firebase/app-check","0.5.2");const Ry=window.sessionStorage,Ny="user",Dy="leaderboard",Oy="userinfo",$y={easyGamesFailed:0,easyGamesWon:0,easyLPM:0,easyWPM:0,hardGamesFailed:0,hardGamesWon:0,hardLPM:0,hardWPM:0,mediumGamesFailed:0,mediumGamesWon:0,mediumLPM:0,mediumWPM:0};function xy(){Sy=function(e,t={}){"object"!=typeof t&&(t={name:t});const n=Object.assign({name:Vt,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw Gt.create("bad-app-name",{appName:String(r)});const i=qt.get(r);if(i){if(yt(e,i.options)&&yt(n,i.config))return i;throw Gt.create("duplicate-app",{appName:r})}const s=new Rt(r);for(const e of Bt.values())s.addComponent(e);const o=new Wt(e,n,s);return qt.set(r,o),o}({apiKey:"AIzaSyAcfFLGAnLbwIUCfyCYgayBl2oPvbu5RFQ",authDomain:"perfect-type.firebaseapp.com",projectId:"perfect-type",storageBucket:"perfect-type.appspot.com",messagingSenderId:"358376646912",appId:"1:358376646912:web:d750e4f6970556a8072be5",measurementId:"G-MDGFNKMNEC"}),hr(Sy),Ay=Ng(),Cy=function(e=Qt()){return Kt(e,"firestore").getImmediate()}(),ky(Sy,{provider:new Ey("6LfUF8EdAAAAAIsY52KJ4t-SzYybu1gZRYNk-Zce"),isTokenAutoRefreshEnabled:!0})}function Py(){const e=Ry.getItem(Ny);return null==e?null:e.length>0?JSON.parse(e):null}function Ly(){return null!=Py()}async function My(e,t,n){const r=mf(Cy,e,t);return await function(e,t,n){e=lf(e,df);const r=lf(e.firestore,yf),i=function(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}(e.converter,t,n);return Xf(r,[Df(Nf(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,Nl.none())])}(r,n),n}async function Uy(e){const t=mf(Cy,Dy,e);return(await Wf(t)).data()}async function Fy(e,t){const n=mf(Cy,Oy,e);await Qf(n,t)}function Vy(e,{delay:n=0,duration:r=400,easing:i=t}={}){const s=+getComputedStyle(e).opacity;return{delay:n,duration:r,easing:i,css:e=>"opacity: "+e*s}}function jy(e,t,n){const r=e.slice();return r[22]=t[n],r[24]=n,r}function qy(e,t,n){const r=e.slice();return r[25]=t[n],r[24]=n,r}function By(e,t,n){const r=e.slice();return r[27]=t[n],r[29]=n,r}function zy(e){let t,n;return t=new Ze({props:{winGame:e[3],wpm:e[4],tryAgain:e[7]}}),{c(){le(t.$$.fragment)},m(e,r){ue(t,e,r),n=!0},p(e,n){const r={};8&n&&(r.winGame=e[3]),16&n&&(r.wpm=e[4]),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function Hy(t){let n,r,i,o,a,c,l,u,h,d,f;n=new nt({props:{mode:t[5],changeMode:t[8]}});let p=t[0],m=[];for(let e=0;e<p.length;e+=1)m[e]=Gy(qy(t,p,e));let g=[...Array(10).keys()],y=[];for(let e=0;e<g.length;e+=1)y[e]=Wy(jy(t,g,e));return{c(){le(n.$$.fragment),r=C(),i=S("span"),o=C(),a=S("div");for(let e=0;e<m.length;e+=1)m[e].c();c=C();for(let e=0;e<y.length;e+=1)y[e].c();l=C(),u=S("div"),D(i,"id","tracker"),D(i,"class","svelte-lhgb3g"),D(a,"class","game-environment noselect svelte-lhgb3g"),D(a,"id","game-env"),D(u,"id","occlusion"),D(u,"class","svelte-lhgb3g")},m(p,g){ue(n,p,g),E(p,r,g),E(p,i,g),E(p,o,g),E(p,a,g);for(let e=0;e<m.length;e+=1)m[e].m(a,null);b(a,c);for(let e=0;e<y.length;e+=1)y[e].m(a,null);var v;E(p,l,g),E(p,u,g),h=!0,d||(v=t[6].call(null,a),f=v&&s(v.destroy)?v.destroy:e,d=!0)},p(e,t){const r={};if(32&t&&(r.mode=e[5]),n.$set(r),3&t){let n;for(p=e[0],n=0;n<p.length;n+=1){const r=qy(e,p,n);m[n]?m[n].p(r,t):(m[n]=Gy(r),m[n].c(),m[n].m(a,c))}for(;n<m.length;n+=1)m[n].d(1);m.length=p.length}},i(e){h||(ie(n.$$.fragment,e),h=!0)},o(e){se(n.$$.fragment,e),h=!1},d(e){he(n,e),e&&k(r),e&&k(i),e&&k(o),e&&k(a),_(m,e),_(y,e),e&&k(l),e&&k(u),d=!1,f()}}}function Ky(e){let t,n,r,i=e[27]+"";return{c(){t=S("div"),n=A(i),D(t,"class","game-letter svelte-lhgb3g"),D(t,"id",r=e[24]-1<0?`${e[29]}`:`${e[1][e[24]-1]+e[29]}`)},m(e,r){E(e,t,r),b(t,n)},p(e,s){1&s&&i!==(i=e[27]+"")&&O(n,i),2&s&&r!==(r=e[24]-1<0?`${e[29]}`:`${e[1][e[24]-1]+e[29]}`)&&D(t,"id",r)},d(e){e&&k(t)}}}function Gy(e){let t,n,r=0!=e[24]&&function(e){let t,n,r;return{c(){t=S("div"),n=A(" "),D(t,"class","game-letter svelte-lhgb3g"),D(t,"id",r=""+(e[1][e[24]-1]-1))},m(e,r){E(e,t,r),b(t,n)},p(e,n){2&n&&r!==(r=""+(e[1][e[24]-1]-1))&&D(t,"id",r)},d(e){e&&k(t)}}}(e),i=e[25],s=[];for(let t=0;t<i.length;t+=1)s[t]=Ky(By(e,i,t));return{c(){t=S("div"),r&&r.c(),n=C();for(let e=0;e<s.length;e+=1)s[e].c();D(t,"class","game-word svelte-lhgb3g")},m(e,i){E(e,t,i),r&&r.m(t,null),b(t,n);for(let e=0;e<s.length;e+=1)s[e].m(t,null)},p(e,n){if(0!=e[24]&&r.p(e,n),3&n){let r;for(i=e[25],r=0;r<i.length;r+=1){const o=By(e,i,r);s[r]?s[r].p(o,n):(s[r]=Ky(o),s[r].c(),s[r].m(t,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=i.length}},d(e){e&&k(t),r&&r.d(),_(s,e)}}}function Wy(e){let t;return{c(){t=S("div"),t.innerHTML='<div class="game-letter invisible-letter svelte-lhgb3g">if you see this sentence, you&#39;re awesome</div> \n        '},m(e,n){E(e,t,n)},d(e){e&&k(t)}}}function Jy(e){let t,n,r,i,s;const o=[Hy,zy],a=[];function c(e,t){return e[2]?1:0}return n=c(e),r=a[n]=o[n](e),{c(){t=S("main"),r.c()},m(e,r){E(e,t,r),a[n].m(t,null),s=!0},p(e,[i]){let s=n;n=c(e),n===s?a[n].p(e,i):(ne(),se(a[s],1,1,(()=>{a[s]=null})),re(),r=a[n],r?r.p(e,i):(r=a[n]=o[n](e),r.c()),ie(r,1),r.m(t,null))},i(e){s||(ie(r),i||K((()=>{i=ae(t,Vy,{}),i.start()})),s=!0)},o(e){se(r),s=!1},d(e){e&&k(t),a[n].d()}}}function Qy(e,t,n){let r=Ly(),{currentRoute:i}=t,{params:s}=t;Array.prototype.random=function(){return this[Math.floor(Math.random()*this.length)]};let o,a=u(),c=a.split(" "),l=[];for(let e=0;e<c.length;e++)l.push(e-1<0?c[e].length+1:c[e].length+l[e-1]+1);function u(){let e=5;return Ge.subscribe((t=>{e=t})),st(e).join(" ")}Ke.subscribe((e=>{o=e}));let h=!1,d=!1,f=0,p=0,m=0;function g(){f=0,p=0,Ke.update((()=>0)),n(2,h=!1),n(3,d=!1),a=u(),n(0,c=a.split(" ")),n(1,l=[]);for(let e=0;e<c.length;e++)l.push(e-1<0?c[e].length+1:c[e].length+l[e-1]+1);n(5,y),b()}let y="easy";const v={easy:5,medium:20,hard:50};let w=null;async function b(){await(H(),B),w=document.getElementById("tracker");let e=document.getElementById(0).getBoundingClientRect();w.style.top=e.bottom-50+"px",w.style.left=e.left+.5+"px",w.style.width=e.width+.75+"px"}return window.onresize=b,U((()=>{b()})),e.$$set=e=>{"currentRoute"in e&&n(9,i=e.currentRoute),"params"in e&&n(10,s=e.params)},[c,l,h,d,m,y,function(){const e=e=>{if(e.preventDefault(),!h){if(0==f&&(f=new Date),a.charAt(o)!==e.key){if(n(2,h=!0),r){let e=y+"GamesFailed";(async function(e,t){const n=mf(Cy,Oy,e);return(await Wf(n)).data()[t]})(Py().uid,e).then((t=>{let n={};n[e]=t+1,Fy(Py().uid,n)}))}}else!function(e){let t=document.getElementById(o);t.classList.add("typed-letter");let n=t.offsetLeft<p;n&&t.parentElement.scrollIntoView(!0);let r=document.getElementById(o+1);if(null!=r){let e=r.offsetLeft<t.offsetLeft;w.style.backgroundColor=e?"rgb(0, 0, 0, 0)":"var(--game-font-color)";let i=r.getBoundingClientRect();w.style.left=i.left+"px","&nbsp;"!=r.innerHTML?w.style.width="19.5px":n&&(w.style.width=i.width+8+"px")}p=t.offsetLeft}(),Ke.update((e=>e+1));if(o==a.length){let e=(new Date-f)/6e4,t=Math.round(a.length/e*1e3)/1e3;if(n(4,m=Math.round(c.length/e*1e3)/1e3),n(2,h=!0),n(3,d=!0),r){let e=y+"GamesWon",n=y+"LPM",r=y+"WPM";(async function(e,t,n,r){const i=mf(Cy,Oy,e),s=(await Wf(i)).data(),o={};return o[t]=s[t],o[n]=s[n],o[r]=s[r],o})(Py().uid,e,n,r).then((i=>{let s={};s[e]=i[e]+1,s[n]=Math.round((i[n]*i[e]+t)/s[e]*1e3)/1e3,s[r]=Math.round((i[r]*i[e]+m)/s[e]*1e3)/1e3,Fy(Py().uid,s)}));let i=y+"_wpm";!async function(e,t,n){Uy(t).then((r=>{const i=[];let s=!1;for(let t=0;t<r.data.length;t++){if(!s){let o=JSON.parse(r.data[t]);if(n>o.score){let t=new Date,r=t.getDate(),o=t.getMonth()+1,a=t.getFullYear();i.push(JSON.stringify({user:e.email.substr(0,e.email.indexOf("@")),score:n,date:`${o}/${r}/${a}`})),s=!0}}s&&t==r.data.length-1||i.push(r.data[t])}s&&Qf(mf(Cy,Dy,t),{data:i})}))}(Py(),i,m)}}}};return document.addEventListener("keypress",e),{destroy(){document.removeEventListener("keypress",e)}}},g,function(e){let t=document.getElementById(y);t.className=t.className.replace(" active-mode",""),document.getElementById(e.target.innerHTML).className+=" active-mode",n(5,y=e.target.innerHTML),Ge.update((()=>v[y]));for(let e=0;e<o;e++){document.getElementById(e).classList.remove("typed-letter")}g()},i,s]}function Xy(t){let n,r,i,s,o,a,c;return{c(){n=S("div"),r=S("label"),i=A(t[1]),s=C(),o=S("input"),D(r,"for",t[2]),D(o,"id",t[2]),D(o,"type",t[4]),D(o,"name",t[2]),D(o,"autocomplete",t[3]),o.value=t[0],D(n,"class","input-container")},m(e,l){E(e,n,l),b(n,r),b(r,i),b(n,s),b(n,o),a||(c=N(o,"input",t[5]),a=!0)},p(e,[t]){2&t&&O(i,e[1]),4&t&&D(r,"for",e[2]),4&t&&D(o,"id",e[2]),16&t&&D(o,"type",e[4]),4&t&&D(o,"name",e[2]),8&t&&D(o,"autocomplete",e[3]),1&t&&o.value!==e[0]&&(o.value=e[0])},i:e,o:e,d(e){e&&k(n),a=!1,c()}}}function Yy(e,t,n){let{value:r=""}=t,{text:i}=t,{id:s}=t,{autocomplete:o}=t,{type:a="text"}=t;return e.$$set=e=>{"value"in e&&n(0,r=e.value),"text"in e&&n(1,i=e.text),"id"in e&&n(2,s=e.id),"autocomplete"in e&&n(3,o=e.autocomplete),"type"in e&&n(4,a=e.type)},[r,i,s,o,a,e=>{n(0,r=e.target.value),function(e){let t=e.target.parentNode.querySelector("label");e.target.value.length>0?(t.style.top="-10px",t.style.fontSize="1em"):(t.style.top="10px",t.style.fontSize="1.5em")}(e)}]}class Zy extends fe{constructor(e){super(),de(this,e,Yy,Xy,o,{value:0,text:1,id:2,autocomplete:3,type:4})}}function ev(e){let t,n,r,i,s,o,a,c,l,u,h,d,f,p,m,g,y,v,w,T,I,_,A;function O(t){e[9](t)}let $={text:"email",id:"email",type:"email",autocomplete:"email"};function x(t){e[10](t)}void 0!==e[1]&&($.value=e[1]),a=new Zy({props:$}),V.push((()=>ce(a,"value",O)));let P={text:"password",id:"password",type:"password",autocomplete:"current-password"};function L(e,t){return e[4]?rv:nv}void 0!==e[2]&&(P.value=e[2]),u=new Zy({props:P}),V.push((()=>ce(u,"value",x))),y=new Qe({props:{text:"login"}});let M=L(e),U=M(e);return{c(){t=S("form"),n=S("br"),r=C(),i=S("br"),s=C(),o=S("div"),le(a.$$.fragment),l=C(),le(u.$$.fragment),d=C(),f=S("br"),p=C(),m=S("br"),g=C(),le(y.$$.fragment),w=C(),U.c(),T=R(),D(o,"id","form-container")},m(c,h){E(c,t,h),b(t,n),b(t,r),b(t,i),b(t,s),b(t,o),ue(a,o,null),b(o,l),ue(u,o,null),b(t,d),b(t,f),b(t,p),b(t,m),b(t,g),ue(y,t,null),E(c,w,h),U.m(c,h),E(c,T,h),I=!0,_||(A=N(t,"submit",e[5]),_=!0)},p(e,t){const n={};!c&&2&t&&(c=!0,n.value=e[1],G((()=>c=!1))),a.$set(n);const r={};!h&&4&t&&(h=!0,r.value=e[2],G((()=>h=!1))),u.$set(r),M===(M=L(e))&&U?U.p(e,t):(U.d(1),U=M(e),U&&(U.c(),ie(U,1),U.m(T.parentNode,T)))},i(e){I||(ie(a.$$.fragment,e),ie(u.$$.fragment,e),ie(y.$$.fragment,e),v||K((()=>{v=ae(t,Vy,{}),v.start()})),ie(U),I=!0)},o(e){se(a.$$.fragment,e),se(u.$$.fragment,e),se(y.$$.fragment,e),I=!1},d(e){e&&k(t),he(a),he(u),he(y),e&&k(w),U.d(e),e&&k(T),_=!1,A()}}}function tv(t){let n,r;return{c(){n=S("p"),n.textContent="logged in! redirecting to main..."},m(e,t){E(e,n,t)},p:e,i(e){r||K((()=>{r=ae(n,Vy,{}),r.start()}))},o:e,d(e){e&&k(n)}}}function nv(t){let n,r;return{c(){n=S("p"),D(n,"id","error-indicator"),D(n,"class","svelte-k70b88")},m(e,r){E(e,n,r),n.innerHTML=t[3]},p(e,t){8&t&&(n.innerHTML=e[3])},i(e){r||K((()=>{r=ae(n,Vy,{}),r.start()}))},o:e,d(e){e&&k(n)}}}function rv(t){let n,r,i,s,o,a,c;return{c(){n=S("p"),r=A("please verify your email! click "),i=S("span"),i.textContent="here",s=A(" to send another link."),D(i,"class","svelte-k70b88"),D(n,"id","error-indicator"),D(n,"class","svelte-k70b88")},m(e,o){E(e,n,o),b(n,r),b(n,i),b(n,s),a||(c=N(i,"click",t[6]),a=!0)},p:e,i(e){o||K((()=>{o=ae(n,Vy,{}),o.start()}))},o:e,d(e){e&&k(n),a=!1,c()}}}function iv(e){let t,n,r,i,s,o;const a=[tv,ev],c=[];function l(e,t){return e[0]?0:1}return i=l(e),s=c[i]=a[i](e),{c(){t=S("main"),n=S("h1"),n.textContent="login",r=C(),s.c()},m(e,s){E(e,t,s),b(t,n),b(t,r),c[i].m(t,null),o=!0},p(e,[n]){let r=i;i=l(e),i===r?c[i].p(e,n):(ne(),se(c[r],1,1,(()=>{c[r]=null})),re(),s=c[i],s?s.p(e,n):(s=c[i]=a[i](e),s.c()),ie(s,1),s.m(t,null))},i(e){o||(ie(s),o=!0)},o(e){se(s),o=!1},d(e){e&&k(t),c[i].d()}}}function sv(e,t,n){let r,i,s,{currentRoute:o}=t,{params:a}=t,c=!1,l="",u=!1;return e.$$set=e=>{"currentRoute"in e&&n(7,o=e.currentRoute),"params"in e&&n(8,a=e.params)},[c,r,i,l,u,function(e){e&&e.preventDefault(),async function(e,t){try{const n=await bm(Ay,e,t);return n.user.emailVerified?(Ry.setItem(Ny,JSON.stringify(n.user)),{success:!0}):(await Im(Ay),{data:n.user,success:!1})}catch(e){return{message:$g(e.message),success:!1}}}(r,i).then((e=>{n(4,u=!1),e.success?(n(3,l=""),n(0,c=!0),Dg(1e3)):(s=e.data,e.data?(n(3,l=""),n(4,u=!0)):n(3,l=e.message))}))},function(){Tm(s),n(4,u=!1)},o,a,function(e){r=e,n(1,r)},function(e){i=e,n(2,i)}]}function ov(e){let t,n,r,i,s,o,a,c,l,u,h,d,f,p,m,g,y,v,w,T,I,_,A,R,O,$;function x(t){e[8](t)}let P={text:"email",id:"email",type:"email",autocomplete:"email"};function L(t){e[9](t)}void 0!==e[1]&&(P.value=e[1]),n=new Zy({props:P}),V.push((()=>ce(n,"value",x)));let M={text:"password",id:"password",type:"password",autocomplete:"new-password"};function U(t){e[10](t)}void 0!==e[2]&&(M.value=e[2]),u=new Zy({props:M}),V.push((()=>ce(u,"value",L)));let F={text:"confirm password",id:"con-password",type:"password",autocomplete:"new-password"};return void 0!==e[3]&&(F.value=e[3]),f=new Zy({props:F}),V.push((()=>ce(f,"value",U))),T=new Qe({props:{text:"signup"}}),{c(){t=S("form"),le(n.$$.fragment),i=C(),s=S("br"),o=C(),a=S("br"),c=C(),l=S("div"),le(u.$$.fragment),d=C(),le(f.$$.fragment),m=C(),g=S("br"),y=C(),v=S("br"),w=C(),le(T.$$.fragment),_=C(),A=S("p"),D(l,"id","form-container"),D(A,"id","error-indicator"),D(A,"class","svelte-1v1ayny")},m(r,h){E(r,t,h),ue(n,t,null),b(t,i),b(t,s),b(t,o),b(t,a),b(t,c),b(t,l),ue(u,l,null),b(l,d),ue(f,l,null),b(t,m),b(t,g),b(t,y),b(t,v),b(t,w),ue(T,t,null),E(r,_,h),E(r,A,h),A.innerHTML=e[4],R=!0,O||($=N(t,"submit",e[5]),O=!0)},p(e,t){const i={};!r&&2&t&&(r=!0,i.value=e[1],G((()=>r=!1))),n.$set(i);const s={};!h&&4&t&&(h=!0,s.value=e[2],G((()=>h=!1))),u.$set(s);const o={};!p&&8&t&&(p=!0,o.value=e[3],G((()=>p=!1))),f.$set(o),(!R||16&t)&&(A.innerHTML=e[4])},i(e){R||(ie(n.$$.fragment,e),ie(u.$$.fragment,e),ie(f.$$.fragment,e),ie(T.$$.fragment,e),I||K((()=>{I=ae(t,Vy,{}),I.start()})),R=!0)},o(e){se(n.$$.fragment,e),se(u.$$.fragment,e),se(f.$$.fragment,e),se(T.$$.fragment,e),R=!1},d(e){e&&k(t),he(n),he(u),he(f),he(T),e&&k(_),e&&k(A),O=!1,$()}}}function av(t){let n,r,i,s,o;return{c(){n=S("h1"),n.textContent="signed up! now just verify your email.",i=C(),s=S("h3"),s.innerHTML='once you&#39;ve done that, login <a href="/login">here</a>.'},m(e,t){E(e,n,t),E(e,i,t),E(e,s,t)},p:e,i(e){r||K((()=>{r=ae(n,Vy,{}),r.start()})),o||K((()=>{o=ae(s,Vy,{}),o.start()}))},o:e,d(e){e&&k(n),e&&k(i),e&&k(s)}}}function cv(e){let t,n,r,i,s,o;const a=[av,ov],c=[];function l(e,t){return e[0]?0:1}return i=l(e),s=c[i]=a[i](e),{c(){t=S("main"),n=S("h1"),n.textContent="sign up",r=C(),s.c()},m(e,s){E(e,t,s),b(t,n),b(t,r),c[i].m(t,null),o=!0},p(e,[n]){let r=i;i=l(e),i===r?c[i].p(e,n):(ne(),se(c[r],1,1,(()=>{c[r]=null})),re(),s=c[i],s?s.p(e,n):(s=c[i]=a[i](e),s.c()),ie(s,1),s.m(t,null))},i(e){o||(ie(s),o=!0)},o(e){se(s),o=!1},d(e){e&&k(t),c[i].d()}}}function lv(e,t,n){let r,i,s,{currentRoute:o}=t,{params:a}=t,c=!1,l="";return e.$$set=e=>{"currentRoute"in e&&n(6,o=e.currentRoute),"params"in e&&n(7,a=e.params)},[c,r,i,s,l,function(e){e&&e.preventDefault(),function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(r)?s===i?i.length<8?n(4,l="Passwords too short!"):async function(e,t){try{const n=await wm(Ay,e,t);await Tm(n.user),await Im(Ay);let r=Object.assign({},Og);return r.uid=n.user.uid,r.email=n.user.email,await My("users",r.uid,r),await My(Oy,r.uid,$y),{success:!0}}catch(e){return{message:$g(e.message),success:!1}}}(r,i).then((e=>{e.success?(n(0,c=!0),n(4,l="")):n(4,l=e.message)})):n(4,l="Passwords do not match!"):n(4,l="Invalid email!")},o,a,function(e){r=e,n(1,r)},function(e){i=e,n(2,i)},function(e){s=e,n(3,s)}]}function uv(e){let t,n,r,i,s,o,a,c;const u=e[2].default,p=l(u,e,e[1],null),m=p||function(e){let t;return{c(){t=A("default card")},m(e,n){E(e,t,n)},d(e){e&&k(t)}}}();return{c(){t=S("div"),n=S("h2"),r=A(e[0]),i=C(),s=S("div"),o=S("p"),m&&m.c(),D(s,"class","container svelte-cerbtu"),D(t,"class","card svelte-cerbtu")},m(e,a){E(e,t,a),b(t,n),b(n,r),b(t,i),b(t,s),b(s,o),m&&m.m(o,null),c=!0},p(e,[t]){(!c||1&t)&&O(r,e[0]),p&&p.p&&(!c||2&t)&&d(p,u,e,e[1],c?h(u,e[1],t,null):f(e[1]),null)},i(e){c||(ie(m,e),a||K((()=>{a=ae(t,Vy,{}),a.start()})),c=!0)},o(e){se(m,e),c=!1},d(e){e&&k(t),m&&m.d(e)}}}function hv(e,t,n){let{$$slots:r={},$$scope:i}=t,{title:s}=t;return e.$$set=e=>{"title"in e&&n(0,s=e.title),"$$scope"in e&&n(1,i=e.$$scope)},[s,i,r]}class dv extends fe{constructor(e){super(),de(this,e,hv,uv,o,{title:0})}}function fv(t){let n,r,i,s,o,a,c,l,u,h,d,f,p,m,g,y=`overall: ${Math.round(100*t[0])/100}${t[4]}`,v=`${Math.round(100*t[1])/100}${t[4]}`,w=`${Math.round(100*t[2])/100}${t[4]}`,T=`${Math.round(100*t[3])/100}${t[4]}`;return{c(){n=S("p"),r=A(y),i=C(),s=S("table"),o=S("tr"),o.innerHTML='<td class="heading svelte-1e40qcb">easy</td> \n      <td class="heading svelte-1e40qcb">medium</td> \n      <td class="heading svelte-1e40qcb">hard</td>',a=C(),c=S("tr"),l=S("td"),u=A(v),h=C(),d=S("td"),f=A(w),p=C(),m=S("td"),g=A(T),D(l,"class","svelte-1e40qcb"),D(d,"class","svelte-1e40qcb"),D(m,"class","svelte-1e40qcb"),D(s,"class","center-table svelte-1e40qcb")},m(e,t){E(e,n,t),b(n,r),E(e,i,t),E(e,s,t),b(s,o),b(s,a),b(s,c),b(c,l),b(l,u),b(c,h),b(c,d),b(d,f),b(c,p),b(c,m),b(m,g)},p(e,t){17&t&&y!==(y=`overall: ${Math.round(100*e[0])/100}${e[4]}`)&&O(r,y),18&t&&v!==(v=`${Math.round(100*e[1])/100}${e[4]}`)&&O(u,v),20&t&&w!==(w=`${Math.round(100*e[2])/100}${e[4]}`)&&O(f,w),24&t&&T!==(T=`${Math.round(100*e[3])/100}${e[4]}`)&&O(g,T)},i:e,o:e,d(e){e&&k(n),e&&k(i),e&&k(s)}}}function pv(e){let t;const n=e[6].default,r=l(n,e,e[5],null);return{c(){r&&r.c()},m(e,n){r&&r.m(e,n),t=!0},p(e,i){r&&r.p&&(!t||32&i)&&d(r,n,e,e[5],t?h(n,e[5],i,null):f(e[5]),null)},i(e){t||(ie(r,e),t=!0)},o(e){se(r,e),t=!1},d(e){r&&r.d(e)}}}function mv(e){let t,n,r,i;const s=[pv,fv],o=[];function a(e,t){return null==e[0]?0:1}return t=a(e),n=o[t]=s[t](e),{c(){n.c(),r=R()},m(e,n){o[t].m(e,n),E(e,r,n),i=!0},p(e,[i]){let c=t;t=a(e),t===c?o[t].p(e,i):(ne(),se(o[c],1,1,(()=>{o[c]=null})),re(),n=o[t],n?n.p(e,i):(n=o[t]=s[t](e),n.c()),ie(n,1),n.m(r.parentNode,r))},i(e){i||(ie(n),i=!0)},o(e){se(n),i=!1},d(e){o[t].d(e),e&&k(r)}}}function gv(e,t,n){let{$$slots:r={},$$scope:i}=t,{overall:s=null}=t,{easy:o=null}=t,{medium:a=null}=t,{hard:c=null}=t,{units:l=null}=t;return e.$$set=e=>{"overall"in e&&n(0,s=e.overall),"easy"in e&&n(1,o=e.easy),"medium"in e&&n(2,a=e.medium),"hard"in e&&n(3,c=e.hard),"units"in e&&n(4,l=e.units),"$$scope"in e&&n(5,i=e.$$scope)},[s,o,a,c,l,i,r]}class yv extends fe{constructor(e){super(),de(this,e,gv,mv,o,{overall:0,easy:1,medium:2,hard:3,units:4})}}function vv(e){let t,n,r,i,s,o,a,c,l,u,h,d,f;return t=new dv({props:{title:e[16],$$slots:{default:[bv]},$$scope:{ctx:e}}}),o=new dv({props:{title:"total games",$$slots:{default:[Tv]},$$scope:{ctx:e}}}),c=new dv({props:{title:"pass rate",$$slots:{default:[Iv]},$$scope:{ctx:e}}}),u=new dv({props:{title:"avg words per minute",$$slots:{default:[Ev]},$$scope:{ctx:e}}}),d=new dv({props:{title:"avg letters per minute",$$slots:{default:[kv]},$$scope:{ctx:e}}}),{c(){le(t.$$.fragment),n=C(),r=S("br"),i=C(),s=S("div"),le(o.$$.fragment),a=C(),le(c.$$.fragment),l=C(),le(u.$$.fragment),h=C(),le(d.$$.fragment),D(s,"class","card-collection svelte-1y3sr8l")},m(e,p){ue(t,e,p),E(e,n,p),E(e,r,p),E(e,i,p),E(e,s,p),ue(o,s,null),b(s,a),ue(c,s,null),b(s,l),ue(u,s,null),b(s,h),ue(d,s,null),f=!0},p(e,n){const r={};524288&n&&(r.$$scope={dirty:n,ctx:e}),t.$set(r);const i={};524303&n&&(i.$$scope={dirty:n,ctx:e}),o.$set(i);const s={};585728&n&&(s.$$scope={dirty:n,ctx:e}),c.$set(s);const a={};524528&n&&(a.$$scope={dirty:n,ctx:e}),u.$set(a);const l={};528128&n&&(l.$$scope={dirty:n,ctx:e}),d.$set(l)},i(e){f||(ie(t.$$.fragment,e),ie(o.$$.fragment,e),ie(c.$$.fragment,e),ie(u.$$.fragment,e),ie(d.$$.fragment,e),f=!0)},o(e){se(t.$$.fragment,e),se(o.$$.fragment,e),se(c.$$.fragment,e),se(u.$$.fragment,e),se(d.$$.fragment,e),f=!1},d(e){he(t,e),e&&k(n),e&&k(r),e&&k(i),e&&k(s),he(o),he(c),he(u),he(d)}}}function wv(t){let n,r;return{c(){var e,t;n=S("img"),e=n.src,t=r=Sv,a||(a=document.createElement("a")),a.href=t,e!==a.href&&D(n,"src",r),D(n,"alt","Avatar"),D(n,"class","svelte-1y3sr8l")},m(e,t){E(e,n,t)},p:e,d(e){e&&k(n)}}}function bv(e){let t,n;return t=new yv({props:{$$slots:{default:[wv]},$$scope:{ctx:e}}}),{c(){le(t.$$.fragment)},m(e,r){ue(t,e,r),n=!0},p(e,n){const r={};524288&n&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function Tv(e){let t,n;return t=new yv({props:{overall:e[0],easy:e[1],medium:e[2],hard:e[3],units:""}}),{c(){le(t.$$.fragment)},m(e,r){ue(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.overall=e[0]),2&n&&(r.easy=e[1]),4&n&&(r.medium=e[2]),8&n&&(r.hard=e[3]),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function Iv(e){let t,n;return t=new yv({props:{overall:100*e[12],easy:100*e[13],medium:100*e[14],hard:100*e[15],units:"%"}}),{c(){le(t.$$.fragment)},m(e,r){ue(t,e,r),n=!0},p(e,n){const r={};4096&n&&(r.overall=100*e[12]),8192&n&&(r.easy=100*e[13]),16384&n&&(r.medium=100*e[14]),32768&n&&(r.hard=100*e[15]),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function Ev(e){let t,n;return t=new yv({props:{overall:e[4],easy:e[5],medium:e[6],hard:e[7],units:""}}),{c(){le(t.$$.fragment)},m(e,r){ue(t,e,r),n=!0},p(e,n){const r={};16&n&&(r.overall=e[4]),32&n&&(r.easy=e[5]),64&n&&(r.medium=e[6]),128&n&&(r.hard=e[7]),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function kv(e){let t,n;return t=new yv({props:{overall:e[8],easy:e[9],medium:e[10],hard:e[11],units:""}}),{c(){le(t.$$.fragment)},m(e,r){ue(t,e,r),n=!0},p(e,n){const r={};256&n&&(r.overall=e[8]),512&n&&(r.easy=e[9]),1024&n&&(r.medium=e[10]),2048&n&&(r.hard=e[11]),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function _v(e){let t,n,r,i,s=null!=e[0]&&vv(e);return{c(){t=S("main"),n=S("h1"),n.textContent="profile",r=C(),s&&s.c()},m(e,o){E(e,t,o),b(t,n),b(t,r),s&&s.m(t,null),i=!0},p(e,[n]){null!=e[0]?s?(s.p(e,n),1&n&&ie(s,1)):(s=vv(e),s.c(),ie(s,1),s.m(t,null)):s&&(ne(),se(s,1,1,(()=>{s=null})),re())},i(e){i||(ie(s),i=!0)},o(e){se(s),i=!1},d(e){e&&k(t),s&&s.d()}}}let Sv=" /default_avatar.png";function Av(e,t,n){let r,i,s,o,a,c,l,u,h,d,f,p,m,g,y,v,{currentRoute:w}=t,{params:b}=t,T=Py().email.substr(0,Py().email.indexOf("@"));return U((()=>{(async function(e){const t=mf(Cy,Oy,e);return(await Wf(t)).data()})(Py().uid).then((e=>{n(1,i=e.easyGamesFailed+e.easyGamesWon),n(2,s=e.mediumGamesFailed+e.mediumGamesWon),n(3,o=e.hardGamesFailed+e.hardGamesWon),n(0,r=i+s+o);let t=e.easyGamesWon+e.mediumGamesWon+e.hardGamesWon;n(5,c=e.easyWPM),n(9,d=e.easyLPM),n(6,l=e.mediumWPM),n(10,f=e.mediumLPM),n(7,u=e.hardWPM),n(11,p=e.hardLPM),n(4,a=0!=r?(c*e.easyGamesWon+l*e.mediumGamesWon+u*e.hardGamesWon)/t:0),n(8,h=0!=r?(d*e.easyGamesWon+f*e.mediumGamesWon+p*e.hardGamesWon)/t:0),n(13,g=0!=i?Math.round(e.easyGamesWon/i*100)/100:0),n(14,y=0!=s?Math.round(e.mediumGamesWon/s*100)/100:0),n(15,v=0!=o?Math.round(e.hardGamesWon/o*100)/100:0),n(12,m=0!=r?Math.round(t/r*100)/100:0)}))})),e.$$set=e=>{"currentRoute"in e&&n(17,w=e.currentRoute),"params"in e&&n(18,b=e.params)},[r,i,s,o,a,c,l,u,h,d,f,p,m,g,y,v,T,w,b]}function Cv(t){let n,r,i,s,o,a,c,l,u,h,d,f,p,m,g=`${t[2]}`;return{c(){n=S("div"),r=S("div"),i=S("strong"),s=A(g),o=C(),a=S("div"),c=A(t[0]),l=C(),u=S("br"),h=C(),d=A(t[3]),f=C(),p=S("div"),m=A(t[1]),D(r,"class","block-item svelte-bohzy1"),D(a,"class","block-item date svelte-bohzy1"),D(p,"class","block-item score svelte-bohzy1"),D(n,"class","leaderboard-env svelte-bohzy1")},m(e,t){E(e,n,t),b(n,r),b(r,i),b(i,s),b(n,o),b(n,a),b(a,c),b(a,l),b(a,u),b(a,h),b(a,d),b(n,f),b(n,p),b(p,m)},p(e,[t]){4&t&&g!==(g=`${e[2]}`)&&O(s,g),1&t&&O(c,e[0]),8&t&&O(d,e[3]),2&t&&O(m,e[1])},i:e,o:e,d(e){e&&k(n)}}}function Rv(e,t,n){let{user:r}=t,{score:i}=t,{place:s}=t,{date:o}=t;return e.$$set=e=>{"user"in e&&n(0,r=e.user),"score"in e&&n(1,i=e.score),"place"in e&&n(2,s=e.place),"date"in e&&n(3,o=e.date)},[r,i,s,o]}class Nv extends fe{constructor(e){super(),de(this,e,Rv,Cv,o,{user:0,score:1,place:2,date:3})}}function Dv(e,t,n){const r=e.slice();return r[5]=t[n],r[7]=n,r}function Ov(e,t,n){const r=e.slice();return r[5]=t[n],r[7]=n,r}function $v(e,t,n){const r=e.slice();return r[5]=t[n],r[7]=n,r}function xv(e){let t,n;return t=new dv({props:{title:"easy (wpm)",$$slots:{default:[Lv]},$$scope:{ctx:e}}}),{c(){le(t.$$.fragment)},m(e,r){ue(t,e,r),n=!0},p(e,n){const r={};1025&n&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function Pv(e){let t,n;return t=new Nv({props:{user:e[5].user,score:e[5].score,date:e[5].date,place:e[7]+1}}),{c(){le(t.$$.fragment)},m(e,r){ue(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.user=e[5].user),1&n&&(r.score=e[5].score),1&n&&(r.date=e[5].date),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function Lv(e){let t,n,r=e[0],i=[];for(let t=0;t<r.length;t+=1)i[t]=Pv($v(e,r,t));const s=e=>se(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=R()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);E(e,t,r),n=!0},p(e,n){if(1&n){let o;for(r=e[0],o=0;o<r.length;o+=1){const s=$v(e,r,o);i[o]?(i[o].p(s,n),ie(i[o],1)):(i[o]=Pv(s),i[o].c(),ie(i[o],1),i[o].m(t.parentNode,t))}for(ne(),o=r.length;o<i.length;o+=1)s(o);re()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)ie(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)se(i[e]);n=!1},d(e){_(i,e),e&&k(t)}}}function Mv(e){let t,n;return t=new dv({props:{title:"medium (wpm)",$$slots:{default:[Fv]},$$scope:{ctx:e}}}),{c(){le(t.$$.fragment)},m(e,r){ue(t,e,r),n=!0},p(e,n){const r={};1026&n&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function Uv(e){let t,n;return t=new Nv({props:{user:e[5].user,score:e[5].score,date:e[5].date,place:e[7]+1}}),{c(){le(t.$$.fragment)},m(e,r){ue(t,e,r),n=!0},p(e,n){const r={};2&n&&(r.user=e[5].user),2&n&&(r.score=e[5].score),2&n&&(r.date=e[5].date),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function Fv(e){let t,n,r=e[1],i=[];for(let t=0;t<r.length;t+=1)i[t]=Uv(Ov(e,r,t));const s=e=>se(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=R()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);E(e,t,r),n=!0},p(e,n){if(2&n){let o;for(r=e[1],o=0;o<r.length;o+=1){const s=Ov(e,r,o);i[o]?(i[o].p(s,n),ie(i[o],1)):(i[o]=Uv(s),i[o].c(),ie(i[o],1),i[o].m(t.parentNode,t))}for(ne(),o=r.length;o<i.length;o+=1)s(o);re()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)ie(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)se(i[e]);n=!1},d(e){_(i,e),e&&k(t)}}}function Vv(e){let t,n;return t=new dv({props:{title:"hard (wpm)",$$slots:{default:[qv]},$$scope:{ctx:e}}}),{c(){le(t.$$.fragment)},m(e,r){ue(t,e,r),n=!0},p(e,n){const r={};1028&n&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function jv(e){let t,n;return t=new Nv({props:{user:e[5].user,score:e[5].score,date:e[5].date,place:e[7]+1}}),{c(){le(t.$$.fragment)},m(e,r){ue(t,e,r),n=!0},p(e,n){const r={};4&n&&(r.user=e[5].user),4&n&&(r.score=e[5].score),4&n&&(r.date=e[5].date),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function qv(e){let t,n,r=e[2],i=[];for(let t=0;t<r.length;t+=1)i[t]=jv(Dv(e,r,t));const s=e=>se(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=R()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);E(e,t,r),n=!0},p(e,n){if(4&n){let o;for(r=e[2],o=0;o<r.length;o+=1){const s=Dv(e,r,o);i[o]?(i[o].p(s,n),ie(i[o],1)):(i[o]=jv(s),i[o].c(),ie(i[o],1),i[o].m(t.parentNode,t))}for(ne(),o=r.length;o<i.length;o+=1)s(o);re()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)ie(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)se(i[e]);n=!1},d(e){_(i,e),e&&k(t)}}}function Bv(e){let t,n,r,i,s,o,a,c=0!=e[0].length&&xv(e),l=0!=e[1].length&&Mv(e),u=0!=e[2].length&&Vv(e);return{c(){t=S("main"),n=S("h1"),n.textContent="leaderboard",r=C(),i=S("div"),c&&c.c(),s=C(),l&&l.c(),o=C(),u&&u.c(),D(i,"class","card-collection svelte-1fut4fz")},m(e,h){E(e,t,h),b(t,n),b(t,r),b(t,i),c&&c.m(i,null),b(i,s),l&&l.m(i,null),b(i,o),u&&u.m(i,null),a=!0},p(e,[t]){0!=e[0].length?c?(c.p(e,t),1&t&&ie(c,1)):(c=xv(e),c.c(),ie(c,1),c.m(i,s)):c&&(ne(),se(c,1,1,(()=>{c=null})),re()),0!=e[1].length?l?(l.p(e,t),2&t&&ie(l,1)):(l=Mv(e),l.c(),ie(l,1),l.m(i,o)):l&&(ne(),se(l,1,1,(()=>{l=null})),re()),0!=e[2].length?u?(u.p(e,t),4&t&&ie(u,1)):(u=Vv(e),u.c(),ie(u,1),u.m(i,null)):u&&(ne(),se(u,1,1,(()=>{u=null})),re())},i(e){a||(ie(c),ie(l),ie(u),a=!0)},o(e){se(c),se(l),se(u),a=!1},d(e){e&&k(t),c&&c.d(),l&&l.d(),u&&u.d()}}}function zv(e,t,n){let{currentRoute:r}=t,{params:i}=t,s=[],o=[],a=[];return U((()=>{Uy("easy_wpm").then((e=>{e.data.forEach((e=>s.push(JSON.parse(e)))),n(0,s)})),Uy("medium_wpm").then((e=>{e.data.forEach((e=>o.push(JSON.parse(e)))),n(1,o)})),Uy("hard_wpm").then((e=>{e.data.forEach((e=>a.push(JSON.parse(e)))),n(2,a)}))})),e.$$set=e=>{"currentRoute"in e&&n(3,r=e.currentRoute),"params"in e&&n(4,i=e.params)},[s,o,a,r,i]}function Hv(t){let n,r,i,s,o;return s=new Qe({props:{text:"return home",onClickFn:Dg}}),{c(){n=S("main"),r=S("h2"),r.textContent="oops, looks like that page doesn't exist",i=C(),le(s.$$.fragment)},m(e,t){E(e,n,t),b(n,r),b(n,i),ue(s,n,null),o=!0},p:e,i(e){o||(ie(s.$$.fragment,e),o=!0)},o(e){se(s.$$.fragment,e),o=!1},d(e){e&&k(n),he(s)}}}function Kv(e,t,n){let{currentRoute:r}=t,{params:i}=t;return e.$$set=e=>{"currentRoute"in e&&n(0,r=e.currentRoute),"params"in e&&n(1,i=e.params)},[r,i]}function Gv(t){let n,r,i;return{c(){n=S("main"),r=S("h1"),r.textContent="logging you out"},m(e,t){E(e,n,t),b(n,r)},p:e,i(e){i||K((()=>{i=ae(r,Vy,{}),i.start()}))},o:e,d(e){e&&k(n)}}}function Wv(e,t,n){!async function(){try{await Im(Ay)}catch(e){console.log(e)}Ry.setItem(Ny,""),Dg()}();let{currentRoute:r}=t,{params:i}=t;return e.$$set=e=>{"currentRoute"in e&&n(0,r=e.currentRoute),"params"in e&&n(1,i=e.params)},[r,i]}function Jv(e){let t,n,r,i,s,o,a;return{c(){t=S("p"),t.textContent="taco enthusiast",n=C(),r=S("p"),r.innerHTML='website: <a href="https://youtu.be/QtBDL8EiNZo">davedlu.com</a>',i=C(),s=S("p"),s.innerHTML='linkedin: <a href="https://www.linkedin.com/in/davidluprofile">davidluprofile</a>',o=C(),a=S("p"),a.innerHTML='github: <a href="https://github.com/davidlu51412">davidlu51412</a>'},m(e,c){E(e,t,c),E(e,n,c),E(e,r,c),E(e,i,c),E(e,s,c),E(e,o,c),E(e,a,c)},d(e){e&&k(t),e&&k(n),e&&k(r),e&&k(i),e&&k(s),e&&k(o),e&&k(a)}}}function Qv(e){let t,n,r,i,s,o,a;return{c(){t=S("p"),t.textContent="also a taco enthusiast",n=C(),r=S("p"),r.innerHTML='website: <a href="https://aszala.com">aszala.com</a>',i=C(),s=S("p"),s.innerHTML='linkedin: <a href="https://www.linkedin.com/in/aszala">aszala</a>',o=C(),a=S("p"),a.innerHTML='github: <a href="https://www.github.com/aszala">aszala</a>'},m(e,c){E(e,t,c),E(e,n,c),E(e,r,c),E(e,i,c),E(e,s,c),E(e,o,c),E(e,a,c)},d(e){e&&k(t),e&&k(n),e&&k(r),e&&k(i),e&&k(s),e&&k(o),e&&k(a)}}}function Xv(e){let t,n,r,i,s,o;return r=new dv({props:{title:"david lu",$$slots:{default:[Jv]},$$scope:{ctx:e}}}),s=new dv({props:{title:"abhay zala",$$slots:{default:[Qv]},$$scope:{ctx:e}}}),{c(){t=S("main"),n=S("div"),le(r.$$.fragment),i=C(),le(s.$$.fragment),D(n,"class","card-collection svelte-jfc25t")},m(e,a){E(e,t,a),b(t,n),ue(r,n,null),b(n,i),ue(s,n,null),o=!0},p(e,[t]){const n={};4&t&&(n.$$scope={dirty:t,ctx:e}),r.$set(n);const i={};4&t&&(i.$$scope={dirty:t,ctx:e}),s.$set(i)},i(e){o||(ie(r.$$.fragment,e),ie(s.$$.fragment,e),o=!0)},o(e){se(r.$$.fragment,e),se(s.$$.fragment,e),o=!1},d(e){e&&k(t),he(r),he(s)}}}function Yv(e,t,n){let{currentRoute:r}=t,{params:i}=t;return e.$$set=e=>{"currentRoute"in e&&n(0,r=e.currentRoute),"params"in e&&n(1,i=e.params)},[r,i]}function Zv(){return!Ly()}const ew=[{name:"/",component:class extends fe{constructor(e){super(),de(this,e,Qy,Jy,o,{currentRoute:9,params:10})}}},{name:"login",component:class extends fe{constructor(e){super(),de(this,e,sv,iv,o,{currentRoute:7,params:8})}},onlyIf:{guard:Zv,redirect:"/"}},{name:"signup",component:class extends fe{constructor(e){super(),de(this,e,lv,cv,o,{currentRoute:6,params:7})}},onlyIf:{guard:Zv,redirect:"/"}},{name:"profile",component:class extends fe{constructor(e){super(),de(this,e,Av,_v,o,{currentRoute:17,params:18})}},onlyIf:{guard:Ly,redirect:"/"}},{name:"leaderboard",component:class extends fe{constructor(e){super(),de(this,e,zv,Bv,o,{currentRoute:3,params:4})}}},{name:"logout",component:class extends fe{constructor(e){super(),de(this,e,Wv,Gv,o,{currentRoute:0,params:1})}},onlyIf:{guard:Ly,redirect:"/"}},{name:"404",component:class extends fe{constructor(e){super(),de(this,e,Kv,Hv,o,{currentRoute:0,params:1})}}},{name:"creators",component:class extends fe{constructor(e){super(),de(this,e,Yv,Xv,o,{currentRoute:0,params:1})}}}];function tw(e){let t,n,r;return{c(){t=S("a"),t.textContent="login",n=C(),r=S("a"),r.textContent="signup",D(t,"href","/login"),D(t,"class","svelte-w57tyo"),D(r,"href","/signup"),D(r,"class","svelte-w57tyo")},m(e,i){E(e,t,i),E(e,n,i),E(e,r,i)},d(e){e&&k(t),e&&k(n),e&&k(r)}}}function nw(e){let t,n,r;return{c(){t=S("a"),t.textContent="profile",n=C(),r=S("a"),r.textContent="logout",D(t,"href","/profile"),D(t,"class","svelte-w57tyo"),D(r,"href","/logout"),D(r,"class","svelte-w57tyo")},m(e,i){E(e,t,i),E(e,n,i),E(e,r,i)},d(e){e&&k(t),e&&k(n),e&&k(r)}}}function rw(t){let n,r,i,s,o,a,c,l;let u=function(e,t){return e[0]?nw:tw}(t),h=u(t);return{c(){n=S("div"),r=S("a"),r.textContent="perfect type",i=C(),s=S("div"),o=S("a"),o.textContent="play",a=C(),c=S("a"),c.textContent="leaderboard",l=C(),h.c(),D(r,"id","title"),D(r,"href","/"),D(r,"class","svelte-w57tyo"),D(o,"href","/"),D(o,"class","svelte-w57tyo"),D(c,"href","/leaderboard"),D(c,"class","svelte-w57tyo"),D(s,"id","links"),D(s,"class","svelte-w57tyo"),D(n,"class","header svelte-w57tyo")},m(e,t){E(e,n,t),b(n,r),b(n,i),b(n,s),b(s,o),b(s,a),b(s,c),b(s,l),h.m(s,null)},p:e,i:e,o:e,d(e){e&&k(n),h.d()}}}function iw(e){return[Ly()]}class sw extends fe{constructor(e){super(),de(this,e,iw,rw,o,{})}}function ow(t){let n,r,i,s,o,a,c,l,u,h,d,f,p,m;return u=new sw({}),d=new He({props:{routes:ew}}),{c(){n=S("meta"),r=S("meta"),i=S("meta"),s=S("link"),o=S("meta"),a=S("meta"),c=S("meta"),l=C(),le(u.$$.fragment),h=C(),le(d.$$.fragment),f=C(),p=S("a"),p.textContent="see the site devs",document.title="Perfect Type",D(n,"charset","utf-8"),D(r,"name","description"),D(r,"content","Test your typing skills with perfect type. How much and how fast can you type without errors"),D(i,"name","keywords"),D(i,"content","typer,type,perfect,perfect type,perfect-type"),D(s,"rel","canonical"),D(s,"href","https://perfect-type.com/"),D(o,"name","robots"),D(o,"content","index, follow"),D(a,"name","viewport"),D(a,"content","width=device-width, initial-scale=1"),D(c,"name","google"),D(c,"content","nositelinkssearchbox"),D(p,"id","see-devs"),D(p,"href","/creators"),D(p,"class","svelte-wdn31i")},m(e,t){b(document.head,n),b(document.head,r),b(document.head,i),b(document.head,s),b(document.head,o),b(document.head,a),b(document.head,c),E(e,l,t),ue(u,e,t),E(e,h,t),ue(d,e,t),E(e,f,t),E(e,p,t),m=!0},p:e,i(e){m||(ie(u.$$.fragment,e),ie(d.$$.fragment,e),m=!0)},o(e){se(u.$$.fragment,e),se(d.$$.fragment,e),m=!1},d(e){k(n),k(r),k(i),k(s),k(o),k(a),k(c),e&&k(l),he(u,e),e&&k(h),he(d,e),e&&k(f),e&&k(p)}}}function aw(e){return xy(),[]}return new class extends fe{constructor(e){super(),de(this,e,aw,ow,o,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
