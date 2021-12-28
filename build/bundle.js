var app=function(){"use strict";function e(){}const t=e=>e;function n(e){return e()}function r(){return Object.create(null)}function i(e){e.forEach(n)}function s(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a;function c(t,n,r){t.$$.on_destroy.push(function(t,...n){if(null==t)return e;const r=t.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function l(e,t,n,r){if(e){const i=u(e,t,n,r);return e[0](i)}}function u(e,t,n,r){return e[1]&&r?function(e,t){for(const n in t)e[n]=t[n];return e}(n.ctx.slice(),e[1](r(t))):n.ctx}function h(e,t,n,r){if(e[2]&&r){const i=e[2](r(n));if(void 0===t.dirty)return i;if("object"==typeof i){const e=[],n=Math.max(t.dirty.length,i.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|i[r];return e}return t.dirty|i}return t.dirty}function d(e,t,n,r,i,s){if(i){const o=u(t,n,r,s);e.p(o,i)}}function f(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}function p(e){return null==e?"":e}const g="undefined"!=typeof window;let m=g?()=>window.performance.now():()=>Date.now(),y=g?e=>requestAnimationFrame(e):e;const v=new Set;function w(e){v.forEach((t=>{t.c(e)||(v.delete(t),t.f())})),0!==v.size&&y(w)}function b(e,t){e.appendChild(t)}function _(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function E(e){const t=S("style");return function(e,t){b(e.head||e,t)}(_(e),t),t}function T(e,t,n){e.insertBefore(t,n||null)}function k(e){e.parentNode.removeChild(e)}function I(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function S(e){return document.createElement(e)}function A(e){return document.createTextNode(e)}function C(){return A(" ")}function R(){return A("")}function N(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function D(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function x(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}const O=new Set;let P,$=0;function M(e,t){const n=(e.style.animation||"").split(", "),r=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),i=n.length-r.length;i&&(e.style.animation=r.join(", "),$-=i,$||y((()=>{$||(O.forEach((e=>{const t=e.__svelte_stylesheet;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.__svelte_rules={}})),O.clear())})))}function L(e){P=e}function F(e){(function(){if(!P)throw new Error("Function called outside component initialization");return P})().$$.on_mount.push(e)}const U=[],B=[],V=[],j=[],z=Promise.resolve();let q=!1;function K(){q||(q=!0,z.then(X))}function H(e){V.push(e)}function W(e){j.push(e)}let G=!1;const J=new Set;function X(){if(!G){G=!0;do{for(let e=0;e<U.length;e+=1){const t=U[e];L(t),Y(t.$$)}for(L(null),U.length=0;B.length;)B.pop()();for(let e=0;e<V.length;e+=1){const t=V[e];J.has(t)||(J.add(t),t())}V.length=0}while(U.length);for(;j.length;)j.pop()();q=!1,G=!1,J.clear()}}function Y(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(H)}}let Q;function Z(e,t,n){e.dispatchEvent(function(e,t,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,!1,t),r}(`${t?"intro":"outro"}${n}`))}const ee=new Set;let te;function ne(){te={r:0,c:[],p:te}}function re(){te.r||i(te.c),te=te.p}function ie(e,t){e&&e.i&&(ee.delete(e),e.i(t))}function se(e,t,n,r){if(e&&e.o){if(ee.has(e))return;ee.add(e),te.c.push((()=>{ee.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}const oe={duration:0};function ae(n,r,i){let o,a,c=r(n,i),l=!1,u=0;function h(){o&&M(n,o)}function d(){const{delay:r=0,duration:i=300,easing:s=t,tick:d=e,css:f}=c||oe;f&&(o=function(e,t,n,r,i,s,o,a=0){const c=16.666/r;let l="{\n";for(let e=0;e<=1;e+=c){const r=t+(n-t)*s(e);l+=100*e+`%{${o(r,1-r)}}\n`}const u=l+`100% {${o(n,1-n)}}\n}`,h=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(u)}_${a}`,d=_(e);O.add(d);const f=d.__svelte_stylesheet||(d.__svelte_stylesheet=E(e).sheet),p=d.__svelte_rules||(d.__svelte_rules={});p[h]||(p[h]=!0,f.insertRule(`@keyframes ${h} ${u}`,f.cssRules.length));const g=e.style.animation||"";return e.style.animation=`${g?`${g}, `:""}${h} ${r}ms linear ${i}ms 1 both`,$+=1,h}(n,0,1,i,r,s,f,u++)),d(0,1);const p=m()+r,g=p+i;a&&a.abort(),l=!0,H((()=>Z(n,!0,"start"))),a=function(e){let t;return 0===v.size&&y(w),{promise:new Promise((n=>{v.add(t={c:e,f:n})})),abort(){v.delete(t)}}}((e=>{if(l){if(e>=g)return d(1,0),Z(n,!0,"end"),h(),l=!1;if(e>=p){const t=s((e-p)/i);d(t,1-t)}}return l}))}let f=!1;return{start(){f||(f=!0,M(n),s(c)?(c=c(),(Q||(Q=Promise.resolve(),Q.then((()=>{Q=null}))),Q).then(d)):d())},invalidate(){f=!1},end(){l&&(h(),l=!1)}}}function ce(e,t,n){const r=e.$$.props[t];void 0!==r&&(e.$$.bound[r]=n,n(e.$$.ctx[r]))}function le(e){e&&e.c()}function ue(e,t,r,o){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=e.$$;a&&a.m(t,r),o||H((()=>{const t=c.map(n).filter(s);l?l.push(...t):i(t),e.$$.on_mount=[]})),u.forEach(H)}function he(e,t){const n=e.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function de(t,n,s,o,a,c,l,u=[-1]){const h=P;L(t);const d=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(h?h.$$.context:[])),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||h.$$.root};l&&l(d.root);let f=!1;if(d.ctx=s?s(t,n.props||{},((e,n,...r)=>{const i=r.length?r[0]:n;return d.ctx&&a(d.ctx[e],d.ctx[e]=i)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](i),f&&function(e,t){-1===e.$$.dirty[0]&&(U.push(e),K(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(t,e)),n})):[],d.update(),f=!0,i(d.before_update),d.fragment=!!o&&o(d.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);d.fragment&&d.fragment.l(e),e.forEach(k)}else d.fragment&&d.fragment.c();n.intro&&ie(t.$$.fragment),ue(t,n.target,n.anchor,n.customElement),X()}L(h)}class fe{$destroy(){he(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const pe=[];function ge(t,n=e){let r;const i=new Set;function s(e){if(o(t,e)&&(t=e,r)){const e=!pe.length;for(const e of i)e[1](),pe.push(e,t);if(e){for(let e=0;e<pe.length;e+=2)pe[e][0](pe[e+1]);pe.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(o,a=e){const c=[o,a];return i.add(c),1===i.size&&(r=n(s)||e),o(t),()=>{i.delete(c),0===i.size&&(r(),r=null)}}}}const{set:me,subscribe:ye}=ge({}),ve={subscribe:ye,set:me,remove:()=>{me({})}},we=(e,t="")=>{const n=new URL(e);function r(){return s(t).reduce(((e,t,n)=>(":"===t[0]&&e.push({value:t.slice(1),index:n}),e)),[])}function i(){return s(n.pathname)}function s(e){return"/"===e||0===e.trim().length?[e]:("/"===e.slice(-1)&&(e=e.slice(0,-1)),"/"===e[0]&&(e=e.slice(1)),e.split("/"))}return Object.freeze({hash:n.hash,host:n.host,hostname:n.hostname,namedParams:function(){const e=i();return r().reduce(((t,n)=>(t[n.value]=e[n.index],t)),{})}(),namedParamsKeys:r().reduce(((e,t)=>(e.push(t.value),e)),[]),namedParamsValues:function(){const e=i();return r().reduce(((t,n)=>(t.push(e[n.index]),t)),[])}(),pathNames:i(),port:n.port,pathname:n.pathname,protocol:n.protocol,search:n.search,queryParams:function(){const e={};return n.searchParams.forEach(((t,n)=>{e[n]=t})),e}(),queryParamsKeys:function(){const e=[];return n.searchParams.forEach(((t,n)=>{e.push(n)})),e}(),queryParamsValues:function(){const e=[];return n.searchParams.forEach((t=>{e.push(t)})),e}()})},be=e=>{let t=!1;return 0===Object.keys(e).length||(e.childRoute&&0===Object.keys(e.childRoute).length?t=!0:e.childRoute&&(t=be(e.childRoute)),t)},_e=(e,t)=>(t=Ie(t)).includes(":")?t.includes(e):t.startsWith(e),Ee=(e,t,n)=>{let r=!1;if(n)return{exists:t.lang&&t.lang[n]&&t.lang[n].includes(e),language:n};if(r=_e(e,t.name),!r&&t.lang&&"object"==typeof t.lang)for(const[i,s]of Object.entries(t.lang))_e(e,s)&&(r=!0,n=i);return{exists:r,language:n}},Te=e=>"/"===e||0===e.trim().length?[e]:(e=Ie(e,"both")).split("/"),ke=(e="")=>{let t;return"/"===e||0===e.trim().length?e:(t=(e=Ie(e,"lead")).split(":")[0],t=Ie(t,"trail"),t.toLowerCase())},Ie=(e,t="lead")=>("trail"!==t&&"both"!==t||(e=e.replace(/\/$/,"")),"lead"!==t&&"both"!==t||(e=e.replace(/^\//,"")),e),Se=(e,t=null)=>t&&e.lang&&e.lang[t]?e.lang[t]:e.name,Ae=e=>{const t=e||!1;let n="";const r=(e,n)=>{if("undefined"!=typeof window){const r=(e=>{let t=[];if(e.queryParams)for(let[n,r]of Object.entries(e.queryParams))t.push(`${n}=${r}`);const n=e.hash?e.hash:"";return t.length>0?`${e.path}?${t.join("&")}${n}`:e.path+n})(e);n&&window.history.pushState({page:r},"",r),t&&i(r)}},i=e=>{"undefined"!=typeof ga&&(ga("set","page",e),ga("send","pageview"))};return Object.freeze({active:()=>n,isActive:(e,t=!1)=>{"/"!==e[0]&&(e="/"+e);let r=we(`http://fake.com${e}`).pathname,i=we(`http://fake.com${n}`).pathname;return r=Ie(r,"trail"),i=Ie(i,"trail"),t?i.includes(r):i===r},setActive:(e,t)=>{n=e.path,r(e,t)}})},Ce=(e,t)=>{const n=(e=>{const t=e;return Object.freeze({valid:()=>t&&t.guard&&"function"==typeof t.guard,redirect:()=>!t.guard(),redirectPath:()=>{let e="/";return t.redirect&&t.redirect.length>0&&(e=t.redirect),e}})})(e.onlyIf);return Object.freeze({path:()=>{let r=t;return e.redirectTo&&e.redirectTo.length>0&&(r=e.redirectTo),n.valid()&&n.redirect()&&(r=n.redirectPath()),r}})};function Re({basePath:e,basePathName:t,pathNames:n,convert:r,currentLanguage:i}){let s,o,a=i;function c(){return Se(o,a)}function l(){return ke(c())}function u(){return ke(s.result)}return Object.freeze({basePathSameAsLocalised:function(){return u()===l()},updatedPath:function(e){return o=e,s=((e,t,n,r,i=!1)=>{if("/"===e||0===e.trim().length)return{result:e,language:null};let s=e,o=n.name,a=r;if(i&&(a=""),o=Ie(o),s=Ie(s),n.childRoute)return{result:e,language:a};{let e=Ee(s,n,a);e.exists&&i&&(s=Se(n,r));let c=o.split(":")[0];return c=Ie(c,"trail"),c=c.split("/"),c.shift(),c.forEach((()=>{const o=t[0];if(e=Ee(`${s}/${o}`,n,a),!o||!e.exists)return{result:s,language:e.language};s=i?Se(n,r):`${s}/${o}`,t.shift()})),{result:s,language:e.language}}})(t,n,o,a,r),a=r?i:s.language,s},basePathNameWithoutNamedParams:u,localisedPathName:c,localisedRouteWithoutNamedParams:l,namedPath:function(){let t=c();return t&&!t.startsWith("/")&&(t="/"+t),e?`${e}${t}`:t},pathNames:n,routeLanguage:function(){return a},routePath:function(){let t=`${e}/${u()}`;"//"===t&&(t="/"),a&&(n=((e,t)=>{const n=t.split("/");return n.length>1&&n.forEach((function(t,n){t.length>0&&n>0&&e.shift()})),e})(n,l()));const r=((e="")=>0===e.trim().length?[]:Te(e).reduce(((e,t)=>(":"===t[0]&&e.push(t.slice(1)),e)),[]))(c());return r&&r.length>0&&r.forEach((function(){n.length>0&&(t+=`/${n.shift()}`)})),t}})}function Ne({routes:e,currentUrl:t,routerOptions:n,convert:r}){const i=n.defaultLanguage,s=n.prefix?n.prefix.toLowerCase():"",o=function(e,t){if(t&&t.trim().length>0){const n=e.endsWith(t)?t:t+"/",r=e.replace(n,"");return we(r)}return we(e)}(t,s);let a="",c={},l=!1;function u(e,t,n,r,s){let h={};const d=Re({basePath:t,basePathName:n.shift().toLowerCase(),pathNames:n,convert:s,currentLanguage:r});return l=!1,e.forEach((function(e){if(d.updatedPath(e),function(e,t){const n=e.basePathSameAsLocalised();n&&(l=!0);return n||!l&&(e=>Ie(e).startsWith(":"))(t)}(d,e.name)){let t=d.routePath();if(a=Ce(e,a).path(),h.name!==t&&(h=function({route:e,routePath:t,routeLanguage:n,urlParser:r,namedPath:s}){const o=function({routeInfo:e,path:t,routeNamedParams:n,urlParser:r,namedPath:i,language:s}){const o=()=>{const e=we(`https://fake.com${r.pathname}`,i).namedParams;return{...n,...e}};return Object.freeze({get:()=>({name:t,component:e.component,hash:r.hash,layout:e.layout,queryParams:r.queryParams,namedParams:o(),path:t,language:s}),namedParams:o})}({routeInfo:e,urlParser:r,path:t,routeNamedParams:c,namedPath:s,language:n||i});return c=o.namedParams(),o.get()}({route:e,routePath:t,routeLanguage:d.routeLanguage(),urlParser:o,namedPath:d.namedPath()})),e.nestedRoutes&&e.nestedRoutes.length>0&&d.pathNames.length>0)h.childRoute=u(e.nestedRoutes,t,d.pathNames,d.routeLanguage(),s),h.path=h.childRoute.path,h.language=h.childRoute.language;else if(function(e,t){return e.nestedRoutes&&e.nestedRoutes.length>0&&0===t.length}(e,d.pathNames)){const n=u(e.nestedRoutes,t,["index"],d.routeLanguage(),s);n&&Object.keys(n).length>0&&(h.childRoute=n,h.language=h.childRoute.language)}}})),a&&(h.redirectTo=a),h}const h=t=>{const n=e.find((e=>"404"==e.name)),r=t||i||"";return n?{...n,language:r,path:"404"}:{name:"404",component:"",path:"404",redirectTo:"/404.html"}};return Object.freeze({findActiveRoute:function(){let t=u(e,"",o.pathNames,n.lang,r);return t&&Object.keys(t).length&&!be(t)?(t.path=t.path.split("?")[0],s&&(t.path=`/${s}${t.path}`)):"undefined"!=typeof window&&(t=h(n.lang)),t}})}const De="/404.html";let xe,Oe=[],Pe={};const $e=(e,t,n={})=>{Pe={...n},void 0!==t&&""!==t||(t=document.location.href),xe=Ae(Pe.gaPageviews),t=Ie(t,"trail"),Oe=e;const r=()=>{let n=!1;return Pe.langConvertTo&&(Pe.lang=Pe.langConvertTo,n=!0),Ne({routes:e,currentUrl:t,routerOptions:Pe,convert:n}).findActiveRoute()};return Object.freeze({setActiveRoute:(e=!0)=>{const t=r();return t.redirectTo?((e,t)=>("undefined"!=typeof window&&(e===De?xe.setActive({path:De},t):Me(e)),e))(t.redirectTo,e):(xe.setActive(t,e),ve.set(t),t)},findActiveRoute:r})},Me=(e,t=null,n=!0)=>(e=Ie(e,"lead"),t&&(Pe.langConvertTo=t),$e(Oe,"http://fake.com/"+e,Pe).setActiveRoute(n));function Le(e){let t,n;return t=new je({props:{currentRoute:e[0].childRoute,params:e[1]}}),{c(){le(t.$$.fragment)},m(e,r){ue(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.currentRoute=e[0].childRoute),2&n&&(r.params=e[1]),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function Fe(e){let t,n,r;var i=e[0].component;function s(e){return{props:{currentRoute:{...e[0],component:""},params:e[1]}}}return i&&(t=new i(s(e))),{c(){t&&le(t.$$.fragment),n=R()},m(e,i){t&&ue(t,e,i),T(e,n,i),r=!0},p(e,r){const o={};if(1&r&&(o.currentRoute={...e[0],component:""}),2&r&&(o.params=e[1]),i!==(i=e[0].component)){if(t){ne();const e=t;se(e.$$.fragment,1,0,(()=>{he(e,1)})),re()}i?(t=new i(s(e)),le(t.$$.fragment),ie(t.$$.fragment,1),ue(t,n.parentNode,n)):t=null}else i&&t.$set(o)},i(e){r||(t&&ie(t.$$.fragment,e),r=!0)},o(e){t&&se(t.$$.fragment,e),r=!1},d(e){e&&k(n),t&&he(t,e)}}}function Ue(e){let t,n,r;var i=e[0].layout;function s(e){return{props:{currentRoute:{...e[0],layout:""},params:e[1]}}}return i&&(t=new i(s(e))),{c(){t&&le(t.$$.fragment),n=R()},m(e,i){t&&ue(t,e,i),T(e,n,i),r=!0},p(e,r){const o={};if(1&r&&(o.currentRoute={...e[0],layout:""}),2&r&&(o.params=e[1]),i!==(i=e[0].layout)){if(t){ne();const e=t;se(e.$$.fragment,1,0,(()=>{he(e,1)})),re()}i?(t=new i(s(e)),le(t.$$.fragment),ie(t.$$.fragment,1),ue(t,n.parentNode,n)):t=null}else i&&t.$set(o)},i(e){r||(t&&ie(t.$$.fragment,e),r=!0)},o(e){t&&se(t.$$.fragment,e),r=!1},d(e){e&&k(n),t&&he(t,e)}}}function Be(e){let t,n,r,i;const s=[Ue,Fe,Le],o=[];function a(e,t){return e[0].layout?0:e[0].component?1:e[0].childRoute?2:-1}return~(t=a(e))&&(n=o[t]=s[t](e)),{c(){n&&n.c(),r=R()},m(e,n){~t&&o[t].m(e,n),T(e,r,n),i=!0},p(e,[i]){let c=t;t=a(e),t===c?~t&&o[t].p(e,i):(n&&(ne(),se(o[c],1,1,(()=>{o[c]=null})),re()),~t?(n=o[t],n?n.p(e,i):(n=o[t]=s[t](e),n.c()),ie(n,1),n.m(r.parentNode,r)):n=null)},i(e){i||(ie(n),i=!0)},o(e){se(n),i=!1},d(e){~t&&o[t].d(e),e&&k(r)}}}function Ve(e,t,n){let{currentRoute:r={}}=t,{params:i={}}=t;return e.$$set=e=>{"currentRoute"in e&&n(0,r=e.currentRoute),"params"in e&&n(1,i=e.params)},[r,i]}"undefined"!=typeof window&&(window.addEventListener("click",(e=>{if("a"!==e.target.localName.toLowerCase())return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;const t=Pe.prefix?`/${Pe.prefix.toLowerCase()}`:"",n=e.target.pathname&&e.target.host===window.location.host,r=!(t.length>1)||e.target.pathname.startsWith(t);if(n&&r){e.preventDefault();const t=e.target.pathname+e.target.search+e.target.search+e.target.hash;"_blank"===e.target.target?window.open(t,"newTab"):Me(t)}})),window.onpopstate=function(e){let t=window.location.pathname+window.location.search+window.location.hash;Me(t,null,!1)});class je extends fe{constructor(e){super(),de(this,e,Ve,Be,o,{currentRoute:0,params:1})}}function ze(e){let t,n;return t=new je({props:{currentRoute:e[0]}}),{c(){le(t.$$.fragment)},m(e,r){ue(t,e,r),n=!0},p(e,[n]){const r={};1&n&&(r.currentRoute=e[0]),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function qe(e,t,n){let r;c(e,ve,(e=>n(0,r=e)));let{routes:i=[]}=t,{options:s={}}=t;return F((()=>{$e(i,document.location.href,s).setActiveRoute()})),e.$$set=e=>{"routes"in e&&n(1,i=e.routes),"options"in e&&n(2,s=e.options)},[r,i,s]}class Ke extends fe{constructor(e){super(),de(this,e,qe,ze,o,{routes:1,options:2})}}const He=ge(0),We=ge(5);var Ge=["ability","able","aboard","about","above","accept","accident","according","account","accurate","acres","across","act","action","active","activity","actual","actually","add","addition","additional","adjective","adult","adventure","advice","affect","afraid","after","afternoon","again","against","age","ago","agree","ahead","aid","air","airplane","alike","alive","all","allow","almost","alone","along","aloud","alphabet","already","also","although","am","among","amount","ancient","angle","angry","animal","announced","another","answer","ants","any","anybody","anyone","anything","anyway","anywhere","apart","apartment","appearance","apple","applied","appropriate","are","area","arm","army","around","arrange","arrangement","arrive","arrow","art","article","as","aside","ask","asleep","at","ate","atmosphere","atom","atomic","attached","attack","attempt","attention","audience","author","automobile","available","average","avoid","aware","away","baby","back","bad","badly","bag","balance","ball","balloon","band","bank","bar","bare","bark","barn","base","baseball","basic","basis","basket","bat","battle","be","bean","bear","beat","beautiful","beauty","became","because","become","becoming","bee","been","before","began","beginning","begun","behavior","behind","being","believed","bell","belong","below","belt","bend","beneath","bent","beside","best","bet","better","between","beyond","bicycle","bigger","biggest","bill","birds","birth","birthday","bit","bite","black","blank","blanket","blew","blind","block","blood","blow","blue","board","boat","body","bone","book","border","born","both","bottle","bottom","bound","bow","bowl","box","boy","brain","branch","brass","brave","bread","break","breakfast","breath","breathe","breathing","breeze","brick","bridge","brief","bright","bring","broad","broke","broken","brother","brought","brown","brush","buffalo","build","building","built","buried","burn","burst","bus","bush","business","busy","but","butter","buy","by","cabin","cage","cake","call","calm","came","camera","camp","can","canal","cannot","cap","capital","captain","captured","car","carbon","card","care","careful","carefully","carried","carry","case","cast","castle","cat","catch","cattle","caught","cause","cave","cell","cent","center","central","century","certain","certainly","chain","chair","chamber","chance","change","changing","chapter","character","characteristic","charge","chart","check","cheese","chemical","chest","chicken","chief","child","children","choice","choose","chose","chosen","church","circle","circus","citizen","city","class","classroom","claws","clay","clean","clear","clearly","climate","climb","clock","close","closely","closer","cloth","clothes","clothing","cloud","club","coach","coal","coast","coat","coffee","cold","collect","college","colony","color","column","combination","combine","come","comfortable","coming","command","common","community","company","compare","compass","complete","completely","complex","composed","composition","compound","concerned","condition","congress","connected","consider","consist","consonant","constantly","construction","contain","continent","continued","contrast","control","conversation","cook","cookies","cool","copper","copy","corn","corner","correct","correctly","cost","cotton","could","count","country","couple","courage","course","court","cover","cow","cowboy","crack","cream","create","creature","crew","crop","cross","crowd","cry","cup","curious","current","curve","customs","cut","cutting","daily","damage","dance","danger","dangerous","dark","darkness","date","daughter","dawn","day","dead","deal","dear","death","decide","declared","deep","deeply","deer","definition","degree","depend","depth","describe","desert","design","desk","detail","determine","develop","development","diagram","diameter","did","die","differ","difference","different","difficult","difficulty","dig","dinner","direct","direction","directly","dirt","dirty","disappear","discover","discovery","discuss","discussion","disease","dish","distance","distant","divide","division","do","doctor","does","dog","doing","doll","dollar","done","donkey","door","dot","double","doubt","down","dozen","draw","drawn","dream","dress","drew","dried","drink","drive","driven","driver","driving","drop","dropped","drove","dry","duck","due","dug","dull","during","dust","duty","each","eager","ear","earlier","early","earn","earth","easier","easily","east","easy","eat","eaten","edge","education","effect","effort","egg","eight","either","electric","electricity","element","elephant","eleven","else","empty","end","enemy","energy","engine","engineer","enjoy","enough","enter","entire","entirely","environment","equal","equally","equator","equipment","escape","especially","essential","establish","even","evening","event","eventually","ever","every","everybody","everyone","everything","everywhere","evidence","exact","exactly","examine","example","excellent","except","exchange","excited","excitement","exciting","exclaimed","exercise","exist","expect","experience","experiment","explain","explanation","explore","express","expression","extra","eye","face","facing","fact","factor","factory","failed","fair","fairly","fall","fallen","familiar","family","famous","far","farm","farmer","farther","fast","fastened","faster","fat","father","favorite","fear","feathers","feature","fed","feed","feel","feet","fell","fellow","felt","fence","few","fewer","field","fierce","fifteen","fifth","fifty","fight","fighting","figure","fill","film","final","finally","find","fine","finest","finger","finish","fire","fireplace","firm","first","fish","five","fix","flag","flame","flat","flew","flies","flight","floating","floor","flow","flower","fly","fog","folks","follow","food","foot","football","for","force","foreign","forest","forget","forgot","forgotten","form","former","fort","forth","forty","forward","fought","found","four","fourth","fox","frame","free","freedom","frequently","fresh","friend","friendly","frighten","frog","from","front","frozen","fruit","fuel","full","fully","fun","function","funny","fur","furniture","further","future","gain","game","garage","garden","gas","gasoline","gate","gather","gave","general","generally","gentle","gently","get","getting","giant","gift","girl","give","given","giving","glad","glass","globe","go","goes","gold","golden","gone","good","goose","got","government","grabbed","grade","gradually","grain","grandfather","grandmother","graph","grass","gravity","gray","great","greater","greatest","greatly","green","grew","ground","group","grow","grown","growth","guard","guess","guide","gulf","gun","habit","had","hair","half","halfway","hall","hand","handle","handsome","hang","happen","happened","happily","happy","harbor","hard","harder","hardly","has","hat","have","having","hay","he","headed","heading","health","heard","hearing","heart","heat","heavy","height","held","hello","help","helpful","her","herd","here","herself","hidden","hide","high","higher","highest","highway","hill","him","himself","his","history","hit","hold","hole","hollow","home","honor","hope","horn","horse","hospital","hot","hour","house","how","however","huge","human","hundred","hung","hungry","hunt","hunter","hurried","hurry","hurt","husband","ice","idea","identity","if","ill","image","imagine","immediately","importance","important","impossible","improve","in","inch","include","including","income","increase","indeed","independent","indicate","individual","industrial","industry","influence","information","inside","instance","instant","instead","instrument","interest","interior","into","introduced","invented","involved","iron","is","island","it","its","itself","jack","jar","jet","job","join","joined","journey","joy","judge","jump","jungle","just","keep","kept","key","kids","kill","kind","kitchen","knew","knife","know","knowledge","known","label","labor","lack","lady","laid","lake","lamp","land","language","large","larger","largest","last","late","later","laugh","law","lay","layers","lead","leader","leaf","learn","least","leather","leave","leaving","led","left","leg","length","lesson","let","letter","level","library","lie","life","lift","light","like","likely","limited","line","lion","lips","liquid","list","listen","little","live","living","load","local","locate","location","log","lonely","long","longer","look","loose","lose","loss","lost","lot","loud","love","lovely","low","lower","luck","lucky","lunch","lungs","lying","machine","machinery","mad","made","magic","magnet","mail","main","mainly","major","make","making","man","managed","manner","manufacturing","many","map","mark","market","married","mass","massage","master","material","mathematics","matter","may","maybe","me","meal","mean","means","meant","measure","meat","medicine","meet","melted","member","memory","men","mental","merely","met","metal","method","mice","middle","might","mighty","mile","military","milk","mill","mind","mine","minerals","minute","mirror","missing","mission","mistake","mix","mixture","model","modern","molecular","moment","money","monkey","month","mood","moon","more","morning","most","mostly","mother","motion","motor","mountain","mouse","mouth","move","movement","movie","moving","mud","muscle","music","musical","must","my","myself","mysterious","nails","name","nation","national","native","natural","naturally","nature","near","nearby","nearer","nearest","nearly","necessary","neck","needed","needle","needs","negative","neighbor","neighborhood","nervous","nest","never","new","news","newspaper","next","nice","night","nine","no","nobody","nodded","noise","none","noon","nor","north","nose","not","note","noted","nothing","notice","noun","now","number","numeral","nuts","object","observe","obtain","occasionally","occur","ocean","of","off","offer","office","officer","official","oil","old","older","oldest","on","once","one","only","onto","open","operation","opinion","opportunity","opposite","or","orange","orbit","order","ordinary","organization","organized","origin","original","other","ought","our","ourselves","out","outer","outline","outside","over","own","owner","oxygen","pack","package","page","paid","pain","paint","pair","palace","pale","pan","paper","paragraph","parallel","parent","park","part","particles","particular","particularly","partly","parts","party","pass","passage","past","path","pattern","pay","peace","pen","pencil","people","per","percent","perfect","perfectly","perhaps","period","person","personal","pet","phrase","physical","piano","pick","picture","pictured","pie","piece","pig","pile","pilot","pine","pink","pipe","pitch","place","plain","plan","plane","planet","planned","planning","plant","plastic","plate","plates","play","pleasant","please","pleasure","plenty","plural","plus","pocket","poem","poet","poetry","point","pole","police","policeman","political","pond","pony","pool","poor","popular","population","porch","port","position","positive","possible","possibly","post","pot","potatoes","pound","pour","powder","power","powerful","practical","practice","prepare","present","president","press","pressure","pretty","prevent","previous","price","pride","primitive","principal","principle","printed","private","prize","probably","problem","process","produce","product","production","program","progress","promised","proper","properly","property","protection","proud","prove","provide","public","pull","pupil","pure","purple","purpose","push","put","putting","quarter","queen","question","quick","quickly","quiet","quietly","quite","rabbit","race","radio","railroad","rain","raise","ran","ranch","range","rapidly","rate","rather","raw","rays","reach","read","reader","ready","real","realize","rear","reason","recall","receive","recent","recently","recognize","record","red","refer","refused","region","regular","related","relationship","religious","remain","remarkable","remember","remove","repeat","replace","replied","report","represent","require","research","respect","rest","result","return","review","rhyme","rhythm","rice","rich","ride","riding","right","ring","rise","rising","river","road","roar","rock","rocket","rocky","rod","roll","roof","room","root","rope","rose","rough","round","route","row","rubbed","rubber","rule","ruler","run","running","rush","sad","saddle","safe","safety","said","sail","sale","salmon","salt","same","sand","sang","sat","satellites","satisfied","save","saved","saw","say","scale","scared","scene","school","science","scientific","scientist","score","screen","sea","search","season","seat","second","secret","section","see","seed","seeing","seems","seen","seldom","select","selection","sell","send","sense","sent","sentence","separate","series","serious","serve","service","sets","setting","settle","settlers","seven","several","shade","shadow","shake","shaking","shall","shallow","shape","share","sharp","she","sheep","sheet","shelf","shells","shelter","shine","shinning","ship","shirt","shoe","shoot","shop","shore","short","shorter","shot","should","shoulder","shout","show","shown","shut","sick","sides","sight","sign","signal","silence","silent","silk","silly","silver","similar","simple","simplest","simply","since","sing","single","sink","sister","sit","sitting","situation","six","size","skill","skin","sky","slabs","slave","sleep","slept","slide","slight","slightly","slip","slipped","slope","slow","slowly","small","smaller","smallest","smell","smile","smoke","smooth","snake","snow","so","soap","social","society","soft","softly","soil","solar","sold","soldier","solid","solution","solve","some","somebody","somehow","someone","something","sometime","somewhere","son","song","soon","sort","sound","source","south","southern","space","speak","special","species","specific","speech","speed","spell","spend","spent","spider","spin","spirit","spite","split","spoken","sport","spread","spring","square","stage","stairs","stand","standard","star","stared","start","state","statement","station","stay","steady","steam","steel","steep","stems","step","stepped","stick","stiff","still","stock","stomach","stone","stood","stop","stopped","store","storm","story","stove","straight","strange","stranger","straw","stream","street","strength","stretch","strike","string","strip","strong","stronger","struck","structure","struggle","stuck","student","studied","studying","subject","substance","success","successful","such","sudden","suddenly","sugar","suggest","suit","sum","summer","sun","sunlight","supper","supply","support","suppose","sure","surface","surprise","surrounded","swam","sweet","swept","swim","swimming","swing","swung","syllable","symbol","system","table","tail","take","taken","tales","talk","tall","tank","tape","task","taste","taught","tax","tea","teach","teacher","team","tears","teeth","telephone","television","tell","temperature","ten","tent","term","terrible","test","than","thank","that","thee","them","themselves","then","theory","there","therefore","these","they","thick","thin","thing","think","third","thirty","this","those","thou","though","thought","thousand","thread","three","threw","throat","through","throughout","throw","thrown","thumb","thus","thy","tide","tie","tight","tightly","till","time","tin","tiny","tip","tired","title","to","tobacco","today","together","told","tomorrow","tone","tongue","tonight","too","took","tool","top","topic","torn","total","touch","toward","tower","town","toy","trace","track","trade","traffic","trail","train","transportation","trap","travel","treated","tree","triangle","tribe","trick","tried","trip","troops","tropical","trouble","truck","trunk","truth","try","tube","tune","turn","twelve","twenty","twice","two","type","typical","uncle","under","underline","understanding","unhappy","union","unit","universe","unknown","unless","until","unusual","up","upon","upper","upward","us","use","useful","using","usual","usually","valley","valuable","value","vapor","variety","various","vast","vegetable","verb","vertical","very","vessels","victory","view","village","visit","visitor","voice","volume","vote","vowel","voyage","wagon","wait","walk","wall","want","war","warm","warn","was","wash","waste","watch","water","wave","way","we","weak","wealth","wear","weather","week","weigh","weight","welcome","well","went","were","west","western","wet","whale","what","whatever","wheat","wheel","when","whenever","where","wherever","whether","which","while","whispered","whistle","white","who","whole","whom","whose","why","wide","widely","wife","wild","will","willing","win","wind","window","wing","winter","wire","wise","wish","with","within","without","wolf","women","won","wonder","wonderful","wood","wooden","wool","word","wore","work","worker","world","worried","worry","worse","worth","would","wrapped","write","writer","writing","written","wrong","wrote","yard","year","yellow","yes","yesterday","yet","you","young","younger","your","yourself","youth","zero","zebra","zipper","zoo","zulu"];function Je(e){function t(){return e&&e.maxLength>1?function(){let t,r=!1;for(;!r;)t=n(),t.length<=e.maxLength&&(r=!0);return t}():n()}function n(){return Ge[r(Ge.length)]}function r(e){return Math.floor(Math.random()*e)}if(void 0===e)return t();"number"==typeof e&&(e={exactly:e}),e.exactly&&(e.min=e.exactly,e.max=e.exactly),"number"!=typeof e.wordsPerString&&(e.wordsPerString=1),"function"!=typeof e.formatter&&(e.formatter=e=>e),"string"!=typeof e.separator&&(e.separator=" ");for(var i=e.min+r(e.max+1-e.min),s=[],o="",a=0,c=0;c<i*e.wordsPerString;c++)a===e.wordsPerString-1?o+=e.formatter(t(),a):o+=e.formatter(t(),a)+e.separator,a++,(c+1)%e.wordsPerString==0&&(s.push(o),o="",a=0);return e.join&&(s=s.join(e.join)),s}var Xe=Je;function Ye(e){e?setTimeout((()=>{window.location.href="/"}),e):window.location.href="/"}Je.wordList=Ge;const Qe={email:"",numGames:0,avgWPM:0,matchHistory:[],matchHistoryTime:[],uid:""};function Ze(e){return e.split("/")[1].slice(0,-2)}function et(){let e=5;return We.subscribe((t=>{e=t})),Xe(e).join(" ")}let tt=null;async function nt(){await(K(),z),tt=document.getElementById("tracker");let e=document.getElementById(0).getBoundingClientRect();tt.style.top=e.bottom-50+"px",tt.style.left=e.left+.5+"px",tt.style.width=e.width+.75+"px"}function rt(t){let n,r,i,o;return{c(){n=S("button"),r=A(t[0])},m(e,a){T(e,n,a),b(n,r),i||(o=N(n,"click",(function(){s(t[1])&&t[1].apply(this,arguments)})),i=!0)},p(e,[n]){t=e,1&n&&x(r,t[0])},i:e,o:e,d(e){e&&k(n),i=!1,o()}}}function it(e,t,n){let{text:r}=t,{onClickFn:i=(()=>{})}=t;return e.$$set=e=>{"text"in e&&n(0,r=e.text),"onClickFn"in e&&n(1,i=e.onClickFn)},[r,i]}class st extends fe{constructor(e){super(),de(this,e,it,rt,o,{text:0,onClickFn:1})}}function ot(e){let t,n,r,i,s,o,a,c,l,u=e[0]?`you won :) and typed ${e[1]} words per minute`:"you lost :(";return c=new st({props:{onClickFn:e[2],text:e[0]?"play again":"try again"}}),{c(){t=S("div"),n=S("div"),r=A(u),i=C(),s=S("br"),o=S("br"),a=C(),le(c.$$.fragment),D(n,"class","game-over-div svelte-hd18fy"),D(t,"class","game-over-environment svelte-hd18fy")},m(e,u){T(e,t,u),b(t,n),b(n,r),b(t,i),b(t,s),b(t,o),b(t,a),ue(c,t,null),l=!0},p(e,[t]){(!l||3&t)&&u!==(u=e[0]?`you won :) and typed ${e[1]} words per minute`:"you lost :(")&&x(r,u);const n={};4&t&&(n.onClickFn=e[2]),1&t&&(n.text=e[0]?"play again":"try again"),c.$set(n)},i(e){l||(ie(c.$$.fragment,e),l=!0)},o(e){se(c.$$.fragment,e),l=!1},d(e){e&&k(t),he(c)}}}function at(e,t,n){let{winGame:r}=t,{wpm:i}=t,{tryAgain:s}=t;return e.$$set=e=>{"winGame"in e&&n(0,r=e.winGame),"wpm"in e&&n(1,i=e.wpm),"tryAgain"in e&&n(2,s=e.tryAgain)},[r,i,s]}class ct extends fe{constructor(e){super(),de(this,e,at,ot,o,{winGame:0,wpm:1,tryAgain:2})}}function lt(t){let n,r,o,a,c,l,u,h,d,f,g,m,y,v;return{c(){n=S("div"),r=S("div"),o=A("easy"),c=C(),l=S("div"),u=A("medium"),d=C(),f=S("div"),g=A("hard"),D(r,"class",a=p("mode-div "+("easy"===t[0]?"active-mode":"inactive-mode"))+" svelte-jpu02f"),D(r,"id","easy"),D(l,"class",h=p("mode-div "+("medium"===t[0]?"active-mode":"inactive-mode"))+" svelte-jpu02f"),D(l,"id","medium"),D(f,"class",m=p("mode-div "+("hard"===t[0]?"active-mode":"inactive-mode"))+" svelte-jpu02f"),D(f,"id","hard"),D(n,"class","mode-container svelte-jpu02f")},m(e,i){T(e,n,i),b(n,r),b(r,o),b(n,c),b(n,l),b(l,u),b(n,d),b(n,f),b(f,g),y||(v=[N(r,"click",(function(){s(t[1])&&t[1].apply(this,arguments)})),N(l,"click",(function(){s(t[1])&&t[1].apply(this,arguments)})),N(f,"click",(function(){s(t[1])&&t[1].apply(this,arguments)}))],y=!0)},p(e,[n]){t=e,1&n&&a!==(a=p("mode-div "+("easy"===t[0]?"active-mode":"inactive-mode"))+" svelte-jpu02f")&&D(r,"class",a),1&n&&h!==(h=p("mode-div "+("medium"===t[0]?"active-mode":"inactive-mode"))+" svelte-jpu02f")&&D(l,"class",h),1&n&&m!==(m=p("mode-div "+("hard"===t[0]?"active-mode":"inactive-mode"))+" svelte-jpu02f")&&D(f,"class",m)},i:e,o:e,d(e){e&&k(n),y=!1,i(v)}}}function ut(e,t,n){let{mode:r}=t,{changeMode:i}=t;return e.$$set=e=>{"mode"in e&&n(0,r=e.mode),"changeMode"in e&&n(1,i=e.changeMode)},[r,i]}class ht extends fe{constructor(e){super(),de(this,e,ut,lt,o,{mode:0,changeMode:1})}}
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
     */const dt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=i>>2,u=(3&i)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t}(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw Error();const c=i<<2|s>>4;if(r.push(c),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
class ft{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
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
     */function pt(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function gt(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function mt(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function yt(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function vt(){const e=pt();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function wt(){return"object"==typeof indexedDB}class bt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_t.prototype.create)}}class _t{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(Et,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new bt(r,o,n)}}const Et=/\{\$([^}]+)}/g;function Tt(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(kt(n)&&kt(s)){if(!Tt(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function kt(e){return null!==e&&"object"==typeof e}
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
     */function It(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function St(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function At(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}class Ct{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Rt),void 0===r.error&&(r.error=Rt),void 0===r.complete&&(r.complete=Rt);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Rt(){}
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
     */function Nt(e,t=1e3,n=2){const r=t*Math.pow(n,e),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+i)}
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
     */function Dt(e){return e&&e._delegate?e._delegate:e}class xt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
     */const Ot="[DEFAULT]";
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
     */class Pt{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new ft;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
     */(e))try{this.getOrInitializeService({instanceIdentifier:Ot})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===Ot?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:Ot:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class $t{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Pt(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
     */var Mt;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(Mt||(Mt={}));const Lt={debug:Mt.DEBUG,verbose:Mt.VERBOSE,info:Mt.INFO,warn:Mt.WARN,error:Mt.ERROR,silent:Mt.SILENT},Ft=Mt.INFO,Ut={[Mt.DEBUG]:"log",[Mt.VERBOSE]:"log",[Mt.INFO]:"info",[Mt.WARN]:"warn",[Mt.ERROR]:"error"},Bt=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=Ut[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class Vt{constructor(e){this.name=e,this._logLevel=Ft,this._logHandler=Bt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Mt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Lt[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Mt.DEBUG,...e),this._logHandler(this,Mt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Mt.VERBOSE,...e),this._logHandler(this,Mt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Mt.INFO,...e),this._logHandler(this,Mt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Mt.WARN,...e),this._logHandler(this,Mt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Mt.ERROR,...e),this._logHandler(this,Mt.ERROR,...e)}}
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
     */class jt{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const zt="@firebase/app",qt="0.7.11",Kt=new Vt("@firebase/app"),Ht="[DEFAULT]",Wt={[zt]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Gt=new Map,Jt=new Map;function Xt(e,t){try{e.container.addComponent(t)}catch(n){Kt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Yt(e){const t=e.name;if(Jt.has(t))return Kt.debug(`There were multiple attempts to register component ${t}.`),!1;Jt.set(t,e);for(const t of Gt.values())Xt(t,e);return!0}function Qt(e,t){return e.container.getProvider(t)}
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
     */const Zt=new _t("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
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
class en{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new xt("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zt.create("app-deleted",{appName:this._name})}}
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
     */const tn="9.6.1";function nn(e="[DEFAULT]"){const t=Gt.get(e);if(!t)throw Zt.create("no-app",{appName:e});return t}function rn(e,t,n){var r;let i=null!==(r=Wt[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Kt.warn(e.join(" "))}Yt(new xt(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
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
     */var sn;sn="",Yt(new xt("platform-logger",(e=>new jt(e)),"PRIVATE")),rn(zt,qt,sn),rn(zt,qt,"esm2017"),rn("fire-js","");
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
rn("firebase","9.6.1","app");"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function on(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function an(e){var t={exports:{}};return e(t,t.exports),t.exports}var cn=an((function(e,t){!function(e){function t(e){return Array.prototype.slice.call(e)}function n(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function r(e,t,r){var i,s=new Promise((function(s,o){n(i=e[t].apply(e,r)).then(s,o)}));return s.request=i,s}function i(e,t,n){var i=r(e,t,n);return i.then((function(e){if(e)return new u(e,i.request)}))}function s(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function o(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return r(this[t],i,arguments)})}))}function a(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return this[t][r].apply(this[t],arguments)})}))}function c(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return i(this[t],r,arguments)})}))}function l(e){this._index=e}function u(e,t){this._cursor=e,this._request=t}function h(e){this._store=e}function d(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function f(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new d(n)}function p(e){this._db=e}function g(e,t,n){var i=r(indexedDB,"open",[e,t]),s=i.request;return s&&(s.onupgradeneeded=function(e){n&&n(new f(s.result,e.oldVersion,s.transaction))}),i.then((function(e){return new p(e)}))}function m(e){return r(indexedDB,"deleteDatabase",[e])}s(l,"_index",["name","keyPath","multiEntry","unique"]),o(l,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),c(l,"_index",IDBIndex,["openCursor","openKeyCursor"]),s(u,"_cursor",["direction","key","primaryKey","value"]),o(u,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(u.prototype[e]=function(){var t=this,r=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,r),n(t._request).then((function(e){if(e)return new u(e,t._request)}))}))})})),h.prototype.createIndex=function(){return new l(this._store.createIndex.apply(this._store,arguments))},h.prototype.index=function(){return new l(this._store.index.apply(this._store,arguments))},s(h,"_store",["name","keyPath","indexNames","autoIncrement"]),o(h,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),c(h,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),a(h,"_store",IDBObjectStore,["deleteIndex"]),d.prototype.objectStore=function(){return new h(this._tx.objectStore.apply(this._tx,arguments))},s(d,"_tx",["objectStoreNames","mode"]),a(d,"_tx",IDBTransaction,["abort"]),f.prototype.createObjectStore=function(){return new h(this._db.createObjectStore.apply(this._db,arguments))},s(f,"_db",["name","version","objectStoreNames"]),a(f,"_db",IDBDatabase,["deleteObjectStore","close"]),p.prototype.transaction=function(){return new d(this._db.transaction.apply(this._db,arguments))},s(p,"_db",["name","version","objectStoreNames"]),a(p,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[h,l].forEach((function(n){e in n.prototype&&(n.prototype[e.replace("open","iterate")]=function(){var n=t(arguments),r=n[n.length-1],i=this._store||this._index,s=i[e].apply(i,n.slice(0,-1));s.onsuccess=function(){r(s.result)}})}))})),[l,h].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,r=[];return new Promise((function(i){n.iterateCursor(e,(function(e){e?(r.push(e.value),void 0===t||r.length!=t?e.continue():i(r)):i(r)}))}))})})),e.openDb=g,e.deleteDb=m,Object.defineProperty(e,"__esModule",{value:!0})}(t)}));const ln="@firebase/installations",un="0.5.4",hn=1e4,dn="w:0.5.4",fn="FIS_v2",pn=36e5,gn=new _t("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function mn(e){return e instanceof bt&&e.code.includes("request-failed")}
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
     */function yn({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function vn(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function wn(e,t){const n=(await t.json()).error;return gn.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function bn({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function _n(e,{refreshToken:t}){const n=bn(e);return n.append("Authorization",function(e){return`FIS_v2 ${e}`}
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
     */(t)),n}async function En(e){const t=await e();return t.status>=500&&t.status<600?e():t}
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
function Tn(e){return new Promise((t=>{setTimeout(t,e)}))}
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
const kn=/^[cdef][\w-]{21}$/;function In(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
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
     */(e);return kn.test(t)?t:""}catch(e){return""}}function Sn(e){return`${e.appName}!${e.appId}`}
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
     */const An=new Map;function Cn(e,t){const n=Sn(e);Rn(n,t),function(e,t){const n=function(){!Nn&&"BroadcastChannel"in self&&(Nn=new BroadcastChannel("[Firebase] FID Change"),Nn.onmessage=e=>{Rn(e.data.key,e.data.fid)});return Nn}();n&&n.postMessage({key:e,fid:t});0===An.size&&Nn&&(Nn.close(),Nn=null)}(n,t)}function Rn(e,t){const n=An.get(e);if(n)for(const e of n)e(t)}let Nn=null;
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
const Dn="firebase-installations-store";let xn=null;function On(){return xn||(xn=cn.openDb("firebase-installations-database",1,(e=>{if(0===e.oldVersion)e.createObjectStore(Dn)}))),xn}async function Pn(e,t){const n=Sn(e),r=(await On()).transaction(Dn,"readwrite"),i=r.objectStore(Dn),s=await i.get(n);return await i.put(t,n),await r.complete,s&&s.fid===t.fid||Cn(e,t.fid),t}async function $n(e){const t=Sn(e),n=(await On()).transaction(Dn,"readwrite");await n.objectStore(Dn).delete(t),await n.complete}async function Mn(e,t){const n=Sn(e),r=(await On()).transaction(Dn,"readwrite"),i=r.objectStore(Dn),s=await i.get(n),o=t(s);return void 0===o?await i.delete(n):await i.put(o,n),await r.complete,!o||s&&s.fid===o.fid||Cn(e,o.fid),o}
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
     */async function Ln(e){let t;const n=await Mn(e,(n=>{const r=function(e){return Bn(e||{fid:In(),registrationStatus:0})}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(gn.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function(e,{fid:t}){const n=yn(e),r=bn(e),i={fid:t,authVersion:fn,appId:e.appId,sdkVersion:dn},s={method:"POST",headers:r,body:JSON.stringify(i)},o=await En((()=>fetch(n,s)));if(o.ok){const e=await o.json();return{fid:e.fid||t,registrationStatus:2,refreshToken:e.refreshToken,authToken:vn(e.authToken)}}throw await wn("Create Installation",o)}(e,t);return Pn(e,n)}catch(n){throw mn(n)&&409===n.customData.serverCode?await $n(e):await Pn(e,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Fn(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function Fn(e){let t=await Un(e);for(;1===t.registrationStatus;)await Tn(100),t=await Un(e);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await Ln(e);return n||t}return t}function Un(e){return Mn(e,(e=>{if(!e)throw gn.create("installation-not-found");return Bn(e)}))}function Bn(e){return 1===(t=e).registrationStatus&&t.registrationTime+hn<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
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
     */}async function Vn({appConfig:e,platformLoggerProvider:t},n){const r=function(e,{fid:t}){return`${yn(e)}/${t}/authTokens:generate`}
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
     */(e,n),i=_n(e,n),s=t.getImmediate({optional:!0});s&&i.append("x-firebase-client",s.getPlatformInfoString());const o={installation:{sdkVersion:dn}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await En((()=>fetch(r,a)));if(c.ok){return vn(await c.json())}throw await wn("Generate Auth Token",c)}async function jn(e,t=!1){let n;const r=await Mn(e.appConfig,(r=>{if(!qn(r))throw gn.create("not-registered");const i=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+pn}(e)}(i))return r;if(1===i.requestStatus)return n=async function(e,t){let n=await zn(e.appConfig);for(;1===n.authToken.requestStatus;)await Tn(100),n=await zn(e.appConfig);const r=n.authToken;return 0===r.requestStatus?jn(e,t):r}(e,t),r;{if(!navigator.onLine)throw gn.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=async function(e,t){try{const n=await Vn(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Pn(e.appConfig,r),n}catch(n){if(!mn(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Pn(e.appConfig,n)}else await $n(e.appConfig);throw n}}(e,t),t}}));return n?await n:r.authToken}function zn(e){return Mn(e,(e=>{if(!qn(e))throw gn.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+hn<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
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
     */}))}function qn(e){return void 0!==e&&2===e.registrationStatus}
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
async function Kn(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await Ln(e);t&&await t}
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
     */(n.appConfig);return(await jn(n,t)).token}function Hn(e){return gn.create("missing-app-config-values",{valueName:e})}
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
     */const Wn="installations",Gn=e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw Hn("App Configuration");if(!e.name)throw Hn("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Hn(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,platformLoggerProvider:Qt(t,"platform-logger"),_delete:()=>Promise.resolve()}},Jn=e=>{const t=Qt(e.getProvider("app").getImmediate(),Wn).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:r}=await Ln(t.appConfig);return r?r.catch(console.error):jn(t).catch(console.error),n.fid}(t),getToken:e=>Kn(t,e)}};Yt(new xt(Wn,Gn,"PUBLIC")),Yt(new xt("installations-internal",Jn,"PRIVATE")),rn(ln,un),rn(ln,un,"esm2017");
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
const Xn="analytics",Yn="https://www.googletagmanager.com/gtag/js",Qn=new Vt("@firebase/analytics");
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
function Zn(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function er(e,t,n,r){return async function(i,s,o){try{"event"===i?await async function(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let e=i.send_to;Array.isArray(e)||(e=[e]);const r=await Zn(n);for(const n of e){const e=r.find((e=>e.measurementId===n)),i=e&&t[e.appId];if(!i){s=[];break}s.push(i)}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(e){Qn.error(e)}}(e,t,n,s,o):"config"===i?await async function(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const e=(await Zn(n)).find((e=>e.measurementId===i));e&&await t[e.appId]}}catch(e){Qn.error(e)}e("config",i,s)}(e,t,n,r,s,o):e("set",s)}catch(e){Qn.error(e)}}}
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
const tr=new _t("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const nr=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function rr(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function ir(e,t=nr,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw tr.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw tr.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new or;return setTimeout((async()=>{a.abort()}),void 0!==n?n:6e4),sr({appId:r,apiKey:i,measurementId:s},o,a,t)}async function sr(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=nr){const{appId:s,measurementId:o}=e;try{await function(e,t){return new Promise(((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener((()=>{clearTimeout(s),r(tr.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(r,t)}catch(e){if(o)return Qn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${e.message}]`),{appId:s,measurementId:o};throw e}try{const t=await async function(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:rr(r)},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(s,i);if(200!==o.status&&304!==o.status){let e="";try{const n=await o.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw tr.create("config-fetch-failed",{httpStatus:o.status,responseMessage:e})}return o.json()}(e);return i.deleteThrottleMetadata(s),t}catch(t){if(!function(e){if(!(e instanceof bt&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(t)){if(i.deleteThrottleMetadata(s),o)return Qn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${t.message}]`),{appId:s,measurementId:o};throw t}const a=503===Number(t.customData.httpStatus)?Nt(n,i.intervalMillis,30):Nt(n,i.intervalMillis),c={throttleEndTimeMillis:Date.now()+a,backoffCount:n+1};return i.setThrottleMetadata(s,c),Qn.debug(`Calling attemptFetch again in ${a} millis`),sr(e,c,r,i)}}class or{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
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
     */async function ar(){if(!wt())return Qn.warn(tr.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}catch(e){return Qn.warn(tr.create("indexeddb-unavailable",{errorInfo:e}).message),!1}return!0}async function cr(e,t,n,r,i,s,o){var a;const c=ir(e);c.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&Qn.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>Qn.error(e))),t.push(c);const l=ar().then((e=>e?r.getId():void 0)),[u,h]=await Promise.all([c,l]);(function(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Yn))return t;return null})()||function(e,t){const n=document.createElement("script");n.src=`${Yn}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}(s,u.measurementId),i("js",new Date);const d=null!==(a=null==o?void 0:o.config)&&void 0!==a?a:{};return d.origin="firebase",d.update=!0,null!=h&&(d.firebase_id=h),i("config",u.measurementId,d),u.measurementId}
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
     */class lr{constructor(e){this.app=e}_delete(){return delete ur[this.app.options.appId],Promise.resolve()}}let ur={},hr=[];const dr={};let fr,pr,gr="dataLayer",mr=!1;function yr(){const e=[];if(mt()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=tr.create("invalid-analytics-context",{errorInfo:t});Qn.warn(n.message)}}function vr(e,t,n){yr();const r=e.options.appId;if(!r)throw tr.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw tr.create("no-api-key");Qn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=ur[r])throw tr.create("already-exists",{id:r});if(!mr){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(gr);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,r,i){let s=function(...e){window[r].push(arguments)};return window[i]&&"function"==typeof window[i]&&(s=window[i]),window[i]=er(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}(ur,hr,dr,gr,"gtag");pr=e,fr=t,mr=!0}ur[r]=cr(e,hr,dr,t,fr,gr,n);return new lr(e)}
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
     */function wr(e=nn()){const t=Qt(e=Dt(e),Xn);return t.isInitialized()?t.getImmediate():function(e,t={}){const n=Qt(e,Xn);if(n.isInitialized()){const e=n.getImmediate();if(Tt(t,n.getOptions()))return e;throw tr.create("already-initialized")}return n.initialize({options:t})}(e)}function br(e,t,n,r){e=Dt(e),async function(e,t,n,r,i){if(i&&i.global)e("event",n,r);else{const i=await t;e("event",n,Object.assign(Object.assign({},r),{send_to:i}))}}(pr,ur[e.app.options.appId],t,n,r).catch((e=>Qn.error(e)))}const _r="@firebase/analytics",Er="0.7.4";Yt(new xt(Xn,((e,{options:t})=>vr(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),Yt(new xt("analytics-internal",(function(e){try{const t=e.getProvider(Xn).getImmediate();return{logEvent:(e,n,r)=>br(t,e,n,r)}}catch(e){throw tr.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),rn(_r,Er),rn(_r,Er,"esm2017");var Tr,kr="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Ir=Ir||{},Sr=kr||self;function Ar(){}function Cr(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function Rr(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var Nr="closure_uid_"+(1e9*Math.random()>>>0),Dr=0;function xr(e,t,n){return e.call.apply(e.bind,arguments)}function Or(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function Pr(e,t,n){return(Pr=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?xr:Or).apply(null,arguments)}function $r(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function Mr(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function Lr(){this.s=this.s,this.o=this.o}var Fr={};Lr.prototype.s=!1,Lr.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var e=function(e){return Object.prototype.hasOwnProperty.call(e,Nr)&&e[Nr]||(e[Nr]=++Dr)}(this);delete Fr[e]}},Lr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ur=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},Br=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,i="string"==typeof e?e.split(""):e;for(let s=0;s<r;s++)s in i&&t.call(n,i[s],s,e)};function Vr(e){return Array.prototype.concat.apply([],arguments)}function jr(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function zr(e){return/^[\s\xa0]*$/.test(e)}var qr,Kr=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Hr(e,t){return-1!=e.indexOf(t)}function Wr(e,t){return e<t?-1:e>t?1:0}e:{var Gr=Sr.navigator;if(Gr){var Jr=Gr.userAgent;if(Jr){qr=Jr;break e}}qr=""}function Xr(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Yr(e){const t={};for(const n in e)t[n]=e[n];return t}var Qr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Zr(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<Qr.length;t++)n=Qr[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ei(e){return ei[" "](e),e}ei[" "]=Ar;var ti,ni,ri=Hr(qr,"Opera"),ii=Hr(qr,"Trident")||Hr(qr,"MSIE"),si=Hr(qr,"Edge"),oi=si||ii,ai=Hr(qr,"Gecko")&&!(Hr(qr.toLowerCase(),"webkit")&&!Hr(qr,"Edge"))&&!(Hr(qr,"Trident")||Hr(qr,"MSIE"))&&!Hr(qr,"Edge"),ci=Hr(qr.toLowerCase(),"webkit")&&!Hr(qr,"Edge");function li(){var e=Sr.document;return e?e.documentMode:void 0}e:{var ui="",hi=(ni=qr,ai?/rv:([^\);]+)(\)|;)/.exec(ni):si?/Edge\/([\d\.]+)/.exec(ni):ii?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(ni):ci?/WebKit\/(\S+)/.exec(ni):ri?/(?:Version)[ \/]?(\S+)/.exec(ni):void 0);if(hi&&(ui=hi?hi[1]:""),ii){var di=li();if(null!=di&&di>parseFloat(ui)){ti=String(di);break e}}ti=ui}var fi,pi={};function gi(){return function(e){var t=pi;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=Kr(String(ti)).split("."),n=Kr("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=Wr(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||Wr(0==i[2].length,0==s[2].length)||Wr(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(Sr.document&&ii){var mi=li();fi=mi||(parseInt(ti,10)||void 0)}else fi=void 0;var yi=fi,vi=function(){if(!Sr.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{Sr.addEventListener("test",Ar,t),Sr.removeEventListener("test",Ar,t)}catch(e){}return e}();function wi(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function bi(e,t){if(wi.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(ai){e:{try{ei(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:_i[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&bi.Z.h.call(this)}}wi.prototype.h=function(){this.defaultPrevented=!0},Mr(bi,wi);var _i={2:"touch",3:"pen",4:"mouse"};bi.prototype.h=function(){bi.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ei="closure_listenable_"+(1e6*Math.random()|0),Ti=0;function ki(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++Ti,this.ca=this.fa=!1}function Ii(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function Si(e){this.src=e,this.g={},this.h=0}function Ai(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=Ur(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Ii(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Ci(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==r)return i}return-1}Si.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=Ci(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):((t=new ki(t,this.src,s,!!r,i)).fa=n,e.push(t)),t};var Ri="closure_lm_"+(1e6*Math.random()|0),Ni={};function Di(e,t,n,r,i){if(r&&r.once)return Oi(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Di(e,t[s],n,r,i);return null}return n=Bi(n),e&&e[Ei]?e.N(t,n,Rr(r)?!!r.capture:!!r,i):xi(e,t,n,!1,r,i)}function xi(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Rr(i)?!!i.capture:!!i,a=Fi(e);if(a||(e[Ri]=a=new Si(e)),(n=a.add(t,n,r,o,s)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}var t=Li;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)vi||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Mi(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function Oi(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Oi(e,t[s],n,r,i);return null}return n=Bi(n),e&&e[Ei]?e.O(t,n,Rr(r)?!!r.capture:!!r,i):xi(e,t,n,!0,r,i)}function Pi(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Pi(e,t[s],n,r,i);else r=Rr(r)?!!r.capture:!!r,n=Bi(n),e&&e[Ei]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=Ci(s=e.g[t],n,r,i))&&(Ii(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Fi(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Ci(t,n,r,i)),(n=-1<e?t[e]:null)&&$i(n))}function $i(e){if("number"!=typeof e&&e&&!e.ca){var t=e.src;if(t&&t[Ei])Ai(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Mi(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Fi(t))?(Ai(n,e),0==n.h&&(n.src=null,t[Ri]=null)):Ii(e)}}}function Mi(e){return e in Ni?Ni[e]:Ni[e]="on"+e}function Li(e,t){if(e.ca)e=!0;else{t=new bi(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&$i(e),e=n.call(r,t)}return e}function Fi(e){return(e=e[Ri])instanceof Si?e:null}var Ui="__closure_events_fn_"+(1e9*Math.random()>>>0);function Bi(e){return"function"==typeof e?e:(e[Ui]||(e[Ui]=function(t){return e.handleEvent(t)}),e[Ui])}function Vi(){Lr.call(this),this.i=new Si(this),this.P=this,this.I=null}function ji(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new wi(t,e);else if(t instanceof wi)t.target=t.target||e;else{var i=t;Zr(t=new wi(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=zi(o,r,!0,t)&&i}if(i=zi(o=t.g=e,r,!0,t)&&i,i=zi(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=zi(o=t.g=n[s],r,!1,t)&&i}function zi(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Ai(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}Mr(Vi,Lr),Vi.prototype[Ei]=!0,Vi.prototype.removeEventListener=function(e,t,n,r){Pi(this,e,t,n,r)},Vi.prototype.M=function(){if(Vi.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ii(n[r]);delete t.g[e],t.h--}}this.I=null},Vi.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Vi.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var qi=Sr.JSON.stringify;function Ki(){var e=Qi;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Hi,Wi=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Gi),(e=>e.reset()));class Gi{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Ji(e){Sr.setTimeout((()=>{throw e}),0)}function Xi(e,t){Hi||function(){var e=Sr.Promise.resolve(void 0);Hi=function(){e.then(Zi)}}(),Yi||(Hi(),Yi=!0),Qi.add(e,t)}var Yi=!1,Qi=new class{constructor(){this.h=this.g=null}add(e,t){const n=Wi.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function Zi(){for(var e;e=Ki();){try{e.h.call(e.g)}catch(e){Ji(e)}var t=Wi;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Yi=!1}function es(e,t){Vi.call(this),this.h=e||1,this.g=t||Sr,this.j=Pr(this.kb,this),this.l=Date.now()}function ts(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function ns(e,t,n){if("function"==typeof e)n&&(e=Pr(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=Pr(e.handleEvent,e)}return 2147483647<Number(t)?-1:Sr.setTimeout(e,t||0)}function rs(e){e.g=ns((()=>{e.g=null,e.i&&(e.i=!1,rs(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}Mr(es,Vi),(Tr=es.prototype).da=!1,Tr.S=null,Tr.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),ji(this,"tick"),this.da&&(ts(this),this.start()))}},Tr.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Tr.M=function(){es.Z.M.call(this),ts(this),delete this.g};class is extends Lr{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:rs(this)}M(){super.M(),this.g&&(Sr.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ss(e){Lr.call(this),this.h=e,this.g={}}Mr(ss,Lr);var os=[];function as(e,t,n,r){Array.isArray(n)||(n&&(os[0]=n.toString()),n=os);for(var i=0;i<n.length;i++){var s=Di(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function cs(e){Xr(e.g,(function(e,t){this.g.hasOwnProperty(t)&&$i(e)}),e),e.g={}}function ls(){this.g=!0}function us(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return qi(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}ss.prototype.M=function(){ss.Z.M.call(this),cs(this)},ss.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},ls.prototype.Aa=function(){this.g=!1},ls.prototype.info=function(){};var hs={},ds=null;function fs(){return ds=ds||new Vi}function ps(e){wi.call(this,hs.Ma,e)}function gs(e){const t=fs();ji(t,new ps(t,e))}function ms(e,t){wi.call(this,hs.STAT_EVENT,e),this.stat=t}function ys(e){const t=fs();ji(t,new ms(t,e))}function vs(e,t){wi.call(this,hs.Na,e),this.size=t}function ws(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return Sr.setTimeout((function(){e()}),t)}hs.Ma="serverreachability",Mr(ps,wi),hs.STAT_EVENT="statevent",Mr(ms,wi),hs.Na="timingevent",Mr(vs,wi);var bs={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},_s={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Es(){}function Ts(e){return e.h||(e.h=e.i())}function ks(){}Es.prototype.h=null;var Is,Ss={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function As(){wi.call(this,"d")}function Cs(){wi.call(this,"c")}function Rs(){}function Ns(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new ss(this),this.P=xs,e=oi?125:void 0,this.W=new es(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ds}function Ds(){this.i=null,this.g="",this.h=!1}Mr(As,wi),Mr(Cs,wi),Mr(Rs,Es),Rs.prototype.g=function(){return new XMLHttpRequest},Rs.prototype.i=function(){return{}},Is=new Rs;var xs=45e3,Os={},Ps={};function $s(e,t,n){e.K=1,e.v=io(Qs(t)),e.s=n,e.U=!0,Ms(e,null)}function Ms(e,t){e.F=Date.now(),Bs(e),e.A=Qs(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),vo(n.h,"t",r),e.C=0,n=e.l.H,e.h=new Ds,e.g=wa(e.l,n?t:null,!e.s),0<e.O&&(e.L=new is(Pr(e.Ia,e,e.g),e.O)),as(e.V,e.g,"readystatechange",e.gb),t=e.H?Yr(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),gs(1),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.X,e.s)}function Ls(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function Fs(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=Us(e,n),r==Ps){4==t&&(e.o=4,ys(14),i=!1),us(e.j,e.m,null,"[Incomplete Response]");break}if(r==Os){e.o=4,ys(15),us(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}us(e.j,e.m,r,null),Ks(e,r)}Ls(e)&&r!=Ps&&r!=Os&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,ys(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,(t=e.l).g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),ua(t),t.L=!0,ys(11))):(us(e.j,e.m,n,"[Invalid Chunked Response]"),qs(e),zs(e))}function Us(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Ps:(n=Number(t.substring(n,r)),isNaN(n)?Os:(r+=1)+n>t.length?Ps:(t=t.substr(r,n),e.C=r+n,t))}function Bs(e){e.Y=Date.now()+e.P,Vs(e,e.P)}function Vs(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=ws(Pr(e.eb,e),t)}function js(e){e.B&&(Sr.clearTimeout(e.B),e.B=null)}function zs(e){0==e.l.G||e.I||fa(e.l,e)}function qs(e){js(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,ts(e.W),cs(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Ks(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||ko(n.i,e)))if(n.I=e.N,!e.J&&ko(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;da(n),ta(n)}la(n),ys(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=ws(Pr(n.ab,n),6e3));if(1>=To(n.i)&&n.ka){try{n.ka()}catch(e){}n.ka=void 0}}else ma(n,11)}else if((e.J||n.g==e)&&da(n),!zr(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(n.U=l[0],l=l[1],2==n.G)if("c"==l[0]){n.J=l[1],n.la=l[2];const t=l[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const i=l[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const u=l[5];null!=u&&"number"==typeof u&&0<u&&(r=1.5*u,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;!s.g&&(Hr(e,"spdy")||Hr(e,"quic")||Hr(e,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Io(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,ro(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=e;if((r=n).oa=va(r,r.H?r.la:null,r.W),o.J){So(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(js(a),Bs(a)),r.g=o}else ca(r);0<n.l.length&&ia(n)}else"stop"!=l[0]&&"close"!=l[0]||ma(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?ma(n,7):ea(n):"noop"!=l[0]&&n.j&&n.j.wa(l),n.A=0)}gs(4)}catch(e){}}function Hs(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(Cr(e)||"string"==typeof e)Br(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(Cr(e)||"string"==typeof e){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;r=function(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"==typeof e)return e.split("");if(Cr(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length;for(var s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}}function Ws(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof Ws)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function Gs(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];Js(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)Js(i,r=e.g[t])||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}function Js(e,t){return Object.prototype.hasOwnProperty.call(e,t)}(Tr=Ns.prototype).setTimeout=function(e){this.P=e},Tr.gb=function(e){e=e.target;const t=this.L;t&&3==Jo(e)?t.l():this.Ia(e)},Tr.Ia=function(e){try{if(e==this.g)e:{const u=Jo(this.g);var t=this.g.Da();const h=this.g.ba();if(!(3>u)&&(3!=u||oi||this.g&&(this.h.h||this.g.ga()||Xo(this.g)))){this.I||4!=u||7==t||gs(8==t||0>=h?3:2),js(this);var n=this.g.ba();this.N=n;t:if(Ls(this)){var r=Xo(this.g);e="";var i=r.length,s=4==Jo(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){qs(this),zs(this);var o="";break t}this.h.i=new Sr.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!zr(a)){var l=a;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,ys(12),qs(this),zs(this);break e}us(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ks(this,n)}this.U?(Fs(this,u,o),oi&&this.i&&3==u&&(as(this.V,this.W,"tick",this.fb),this.W.start())):(us(this.j,this.m,o,null),Ks(this,o)),4==u&&qs(this),this.i&&!this.I&&(4==u?fa(this.l,this):(this.i=!1,Bs(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ys(12)):(this.o=0,ys(13)),qs(this),zs(this)}}}catch(e){}},Tr.fb=function(){if(this.g){var e=Jo(this.g),t=this.g.ga();this.C<t.length&&(js(this),Fs(this,e,t),this.i&&4!=e&&Bs(this))}},Tr.cancel=function(){this.I=!0,qs(this)},Tr.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(gs(3),ys(17)),qs(this),this.o=2,zs(this)):Vs(this,this.Y-e)},(Tr=Ws.prototype).R=function(){Gs(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},Tr.T=function(){return Gs(this),this.g.concat()},Tr.get=function(e,t){return Js(this.h,e)?this.h[e]:t},Tr.set=function(e,t){Js(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},Tr.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);e.call(t,s,i,this)}};var Xs=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ys(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Ys){this.g=void 0!==t?t:e.g,Zs(this,e.j),this.s=e.s,eo(this,e.i),to(this,e.m),this.l=e.l,t=e.h;var n=new po;n.i=t.i,t.g&&(n.g=new Ws(t.g),n.h=t.h),no(this,n),this.o=e.o}else e&&(n=String(e).match(Xs))?(this.g=!!t,Zs(this,n[1]||"",!0),this.s=so(n[2]||""),eo(this,n[3]||"",!0),to(this,n[4]),this.l=so(n[5]||"",!0),no(this,n[6]||"",!0),this.o=so(n[7]||"")):(this.g=!!t,this.h=new po(null,this.g))}function Qs(e){return new Ys(e)}function Zs(e,t,n){e.j=n?so(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function eo(e,t,n){e.i=n?so(t,!0):t}function to(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function no(e,t,n){t instanceof po?(e.h=t,function(e,t){t&&!e.j&&(go(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(mo(this,t),vo(this,n,e))}),e)),e.j=t}(e.h,e.g)):(n||(t=oo(t,ho)),e.h=new po(t,e.g))}function ro(e,t,n){e.h.set(t,n)}function io(e){return ro(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function so(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function oo(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,ao),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ao(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Ys.prototype.toString=function(){var e=[],t=this.j;t&&e.push(oo(t,co,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(oo(t,co,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(oo(n,"/"==n.charAt(0)?uo:lo,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",oo(n,fo)),e.join("")};var co=/[#\/\?@]/g,lo=/[#\?:]/g,uo=/[#\?]/g,ho=/[#\?@]/g,fo=/#/g;function po(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function go(e){e.g||(e.g=new Ws,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function mo(e,t){go(e),t=wo(e,t),Js(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,Js((e=e.g).h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Gs(e)))}function yo(e,t){return go(e),t=wo(e,t),Js(e.g.h,t)}function vo(e,t,n){mo(e,t),0<n.length&&(e.i=null,e.g.set(wo(e,t),jr(n)),e.h+=n.length)}function wo(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(Tr=po.prototype).add=function(e,t){go(this),this.i=null,e=wo(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},Tr.forEach=function(e,t){go(this),this.g.forEach((function(n,r){Br(n,(function(n){e.call(t,n,r,this)}),this)}),this)},Tr.T=function(){go(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],s=0;s<i.length;s++)n.push(t[r]);return n},Tr.R=function(e){go(this);var t=[];if("string"==typeof e)yo(this,e)&&(t=Vr(t,this.g.get(wo(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=Vr(t,e[n])}return t},Tr.set=function(e,t){return go(this),this.i=null,yo(this,e=wo(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},Tr.get=function(e,t){return e&&0<(e=this.R(e)).length?String(e[0]):t},Tr.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),e.push(o)}}return this.i=e.join("&")};function bo(e){this.l=e||_o,Sr.PerformanceNavigationTiming?e=0<(e=Sr.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(Sr.g&&Sr.g.Ea&&Sr.g.Ea()&&Sr.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var _o=10;function Eo(e){return!!e.h||!!e.g&&e.g.size>=e.j}function To(e){return e.h?1:e.g?e.g.size:0}function ko(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Io(e,t){e.g?e.g.add(t):e.h=t}function So(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Ao(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return jr(e.i)}function Co(){}function Ro(){this.g=new Co}function No(e,t,n){const r=n||"";try{Hs(e,(function(e,n){let i=e;Rr(e)&&(i=qi(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function Do(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function xo(e){this.l=e.$b||null,this.j=e.ib||!1}function Oo(e,t){Vi.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Po,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}bo.prototype.cancel=function(){if(this.i=Ao(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},Co.prototype.stringify=function(e){return Sr.JSON.stringify(e,void 0)},Co.prototype.parse=function(e){return Sr.JSON.parse(e,void 0)},Mr(xo,Es),xo.prototype.g=function(){return new Oo(this.l,this.j)},xo.prototype.i=function(e){return function(){return e}}({}),Mr(Oo,Vi);var Po=0;function $o(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function Mo(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Lo(e)}function Lo(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(Tr=Oo.prototype).open=function(e,t){if(this.readyState!=Po)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Lo(this)},Tr.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||Sr).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},Tr.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Mo(this)),this.readyState=Po},Tr.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Lo(this)),this.g&&(this.readyState=3,Lo(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==Sr.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;$o(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},Tr.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Mo(this):Lo(this),3==this.readyState&&$o(this)}},Tr.Ua=function(e){this.g&&(this.response=this.responseText=e,Mo(this))},Tr.Ta=function(e){this.g&&(this.response=e,Mo(this))},Tr.ha=function(){this.g&&Mo(this)},Tr.setRequestHeader=function(e,t){this.v.append(e,t)},Tr.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},Tr.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Oo.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Fo=Sr.JSON.parse;function Uo(e){Vi.call(this),this.headers=new Ws,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Bo,this.K=this.L=!1}Mr(Uo,Vi);var Bo="",Vo=/^https?$/i,jo=["POST","PUT"];function zo(e){return"content-type"==e.toLowerCase()}function qo(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Ko(e),Wo(e)}function Ko(e){e.D||(e.D=!0,ji(e,"complete"),ji(e,"error"))}function Ho(e){if(e.h&&void 0!==Ir&&(!e.C[1]||4!=Jo(e)||2!=e.ba()))if(e.v&&4==Jo(e))ns(e.Fa,0,e);else if(ji(e,"readystatechange"),4==Jo(e)){e.h=!1;try{const a=e.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var i=String(e.H).match(Xs)[1]||null;if(!i&&Sr.self&&Sr.self.location){var s=Sr.self.location.protocol;i=s.substr(0,s.length-1)}r=!Vo.test(i?i.toLowerCase():"")}n=r}if(n)ji(e,"complete"),ji(e,"success");else{e.m=6;try{var o=2<Jo(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.ba()+"]",Ko(e)}}finally{Wo(e)}}}function Wo(e,t){if(e.g){Go(e);const n=e.g,r=e.C[0]?Ar:null;e.g=null,e.C=null,t||ji(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function Go(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(Sr.clearTimeout(e.A),e.A=null)}function Jo(e){return e.g?e.g.readyState:0}function Xo(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Bo:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Yo(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=function(e){let t="";return Xr(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):ro(e,t,n))}function Qo(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Zo(e){this.za=0,this.l=[],this.h=new ls,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Qo("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Qo("baseRetryDelayMs",5e3,e),this.$a=Qo("retryDelaySeedMs",1e4,e),this.Ya=Qo("forwardChannelMaxRetries",2,e),this.ra=Qo("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new bo(e&&e.concurrentRequestLimit),this.Ca=new Ro,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function ea(e){if(na(e),3==e.G){var t=e.V++,n=Qs(e.F);ro(n,"SID",e.J),ro(n,"RID",t),ro(n,"TYPE","terminate"),oa(e,n),(t=new Ns(e,e.h,t,void 0)).K=2,t.v=io(Qs(n)),n=!1,Sr.navigator&&Sr.navigator.sendBeacon&&(n=Sr.navigator.sendBeacon(t.v.toString(),"")),!n&&Sr.Image&&((new Image).src=t.v,n=!0),n||(t.g=wa(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Bs(t)}ya(e)}function ta(e){e.g&&(ua(e),e.g.cancel(),e.g=null)}function na(e){ta(e),e.u&&(Sr.clearTimeout(e.u),e.u=null),da(e),e.i.cancel(),e.m&&("number"==typeof e.m&&Sr.clearTimeout(e.m),e.m=null)}function ra(e,t){e.l.push(new class{constructor(e,t){this.h=e,this.g=t}}(e.Za++,t)),3==e.G&&ia(e)}function ia(e){Eo(e.i)||e.m||(e.m=!0,Xi(e.Ha,e),e.C=0)}function sa(e,t){var n;n=t?t.m:e.V++;const r=Qs(e.F);ro(r,"SID",e.J),ro(r,"RID",n),ro(r,"AID",e.U),oa(e,r),e.o&&e.s&&Yo(r,e.o,e.s),n=new Ns(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=aa(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),Io(e.i,n),$s(n,r,t)}function oa(e,t){e.j&&Hs({},(function(e,n){ro(t,n,e)}))}function aa(e,t,n){n=Math.min(e.l.length,n);var r=e.j?Pr(e.j.Oa,e.j,e):null;e:{var i=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=t,0>n)t=Math.max(0,i[o].h-100),s=!1;else try{No(a,e,"req"+n+"_")}catch(e){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function ca(e){e.g||e.u||(e.Y=1,Xi(e.Ga,e),e.A=0)}function la(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=ws(Pr(e.Ga,e),pa(e,e.A)),e.A++,!0)}function ua(e){null!=e.B&&(Sr.clearTimeout(e.B),e.B=null)}function ha(e){e.g=new Ns(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Qs(e.oa);ro(t,"RID","rpc"),ro(t,"SID",e.J),ro(t,"CI",e.N?"0":"1"),ro(t,"AID",e.U),oa(e,t),ro(t,"TYPE","xmlhttp"),e.o&&e.s&&Yo(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=io(Qs(t)),n.s=null,n.U=!0,Ms(n,e)}function da(e){null!=e.v&&(Sr.clearTimeout(e.v),e.v=null)}function fa(e,t){var n=null;if(e.g==t){da(e),ua(e),e.g=null;var r=2}else{if(!ko(e.i,t))return;n=t.D,So(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;ji(r=fs(),new vs(r,n,t,i)),ia(e)}else ca(e);else if(3==(i=t.o)||0==i&&0<e.I||!(1==r&&function(e,t){return!(To(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.l=t.D.concat(e.l),0):1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya)||(e.m=ws(Pr(e.Ha,e,t),pa(e,e.C)),e.C++,0)))}(e,t)||2==r&&la(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:ma(e,5);break;case 4:ma(e,10);break;case 3:ma(e,6);break;default:ma(e,2)}}function pa(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function ma(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=Pr(e.jb,e);n||(n=new Ys("//www.google.com/images/cleardot.gif"),Sr.location&&"http"==Sr.location.protocol||Zs(n,"https"),io(n)),function(e,t){const n=new ls;if(Sr.Image){const r=new Image;r.onload=$r(Do,n,r,"TestLoadImage: loaded",!0,t),r.onerror=$r(Do,n,r,"TestLoadImage: error",!1,t),r.onabort=$r(Do,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=$r(Do,n,r,"TestLoadImage: timeout",!1,t),Sr.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else ys(2);e.G=0,e.j&&e.j.va(t),ya(e),na(e)}function ya(e){e.G=0,e.I=-1,e.j&&(0==Ao(e.i).length&&0==e.l.length||(e.i.i.length=0,jr(e.l),e.l.length=0),e.j.ua())}function va(e,t,n){let r=function(e){return e instanceof Ys?Qs(e):new Ys(e,void 0)}(n);if(""!=r.i)t&&eo(r,t+"."+r.i),to(r,r.m);else{const e=Sr.location;r=function(e,t,n,r){var i=new Ys(null,void 0);return e&&Zs(i,e),t&&eo(i,t),n&&to(i,n),r&&(i.l=r),i}(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&Xr(e.aa,(function(e,t){ro(r,t,e)})),t=e.D,n=e.sa,t&&n&&ro(r,t,n),ro(r,"VER",e.ma),oa(e,r),r}function wa(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ba&&!e.qa?new Uo(new xo({ib:!0})):new Uo(e.qa)).L=e.H,t}function ba(){}function _a(){if(ii&&!(10<=Number(yi)))throw Error("Environmental error: no available transport.")}function Ea(e,t){Vi.call(this),this.g=new Zo(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!zr(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!zr(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Ia(this)}function Ta(e){As.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function ka(){Cs.call(this),this.status=1}function Ia(e){this.g=e}(Tr=Uo.prototype).ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Is.g(),this.C=this.u?Ts(this.u):Ts(Is),this.g.onreadystatechange=Pr(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void qo(this,e)}e=n||"";const i=new Ws(this.headers);r&&Hs(r,(function(e,t){i.set(t,e)})),r=function(e){e:{var t=zo;const n=e.length,r="string"==typeof e?e.split(""):e;for(let i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:"string"==typeof e?e.charAt(t):e[t]}(i.T()),n=Sr.FormData&&e instanceof Sr.FormData,!(0<=Ur(jo,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Go(this),0<this.B&&((this.K=function(e){return ii&&gi()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Pr(this.pa,this)):this.A=ns(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){qo(this,e)}},Tr.pa=function(){void 0!==Ir&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ji(this,"timeout"),this.abort(8))},Tr.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ji(this,"complete"),ji(this,"abort"),Wo(this))},Tr.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Wo(this,!0)),Uo.Z.M.call(this)},Tr.Fa=function(){this.s||(this.F||this.v||this.l?Ho(this):this.cb())},Tr.cb=function(){Ho(this)},Tr.ba=function(){try{return 2<Jo(this)?this.g.status:-1}catch(e){return-1}},Tr.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},Tr.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Fo(t)}},Tr.Da=function(){return this.m},Tr.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(Tr=Zo.prototype).ma=8,Tr.G=1,Tr.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(e){}},Tr.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new Ns(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?(s=Yr(s),Zr(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=aa(this,i,t),ro(n=Qs(this.F),"RID",e),ro(n,"CVER",22),this.D&&ro(n,"X-HTTP-Session-Id",this.D),oa(this,n),this.o&&s&&Yo(n,this.o,s),Io(this.i,i),this.Ra&&ro(n,"TYPE","init"),this.ja?(ro(n,"$req",t),ro(n,"SID","null"),i.$=!0,$s(i,n,null)):$s(i,n,t),this.G=2}}else 3==this.G&&(e?sa(this,e):0==this.l.length||Eo(this.i)||sa(this))},Tr.Ga=function(){if(this.u=null,ha(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=ws(Pr(this.bb,this),e)}},Tr.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ys(10),ta(this),ha(this))},Tr.ab=function(){null!=this.v&&(this.v=null,ta(this),la(this),ys(19))},Tr.jb=function(e){e?(this.h.info("Successfully pinged google.com"),ys(2)):(this.h.info("Failed to ping google.com"),ys(1))},(Tr=ba.prototype).xa=function(){},Tr.wa=function(){},Tr.va=function(){},Tr.ua=function(){},Tr.Oa=function(){},_a.prototype.g=function(e,t){return new Ea(e,t)},Mr(Ea,Vi),Ea.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Xi(Pr(e.hb,e,t))),ys(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=va(e,null,e.W),ia(e)},Ea.prototype.close=function(){ea(this.g)},Ea.prototype.u=function(e){if("string"==typeof e){var t={};t.__data__=e,ra(this.g,t)}else this.v?((t={}).__data__=qi(e),ra(this.g,t)):ra(this.g,e)},Ea.prototype.M=function(){this.g.j=null,delete this.j,ea(this.g),delete this.g,Ea.Z.M.call(this)},Mr(Ta,As),Mr(ka,Cs),Mr(Ia,ba),Ia.prototype.xa=function(){ji(this.g,"a")},Ia.prototype.wa=function(e){ji(this.g,new Ta(e))},Ia.prototype.va=function(e){ji(this.g,new ka(e))},Ia.prototype.ua=function(){ji(this.g,"b")},_a.prototype.createWebChannel=_a.prototype.g,Ea.prototype.send=Ea.prototype.u,Ea.prototype.open=Ea.prototype.m,Ea.prototype.close=Ea.prototype.close,bs.NO_ERROR=0,bs.TIMEOUT=8,bs.HTTP_ERROR=6,_s.COMPLETE="complete",ks.EventType=Ss,Ss.OPEN="a",Ss.CLOSE="b",Ss.ERROR="c",Ss.MESSAGE="d",Vi.prototype.listen=Vi.prototype.N,Uo.prototype.listenOnce=Uo.prototype.O,Uo.prototype.getLastError=Uo.prototype.La,Uo.prototype.getLastErrorCode=Uo.prototype.Da,Uo.prototype.getStatus=Uo.prototype.ba,Uo.prototype.getResponseJson=Uo.prototype.Qa,Uo.prototype.getResponseText=Uo.prototype.ga,Uo.prototype.send=Uo.prototype.ea;var Sa=bs,Aa=_s,Ca=hs,Ra=10,Na=11,Da=xo,xa=ks,Oa=Uo;const Pa="@firebase/firestore";
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
     */class $a{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$a.UNAUTHENTICATED=new $a(null),$a.GOOGLE_CREDENTIALS=new $a("google-credentials-uid"),$a.FIRST_PARTY=new $a("first-party-uid"),$a.MOCK_USER=new $a("mock-user");
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
let Ma="9.6.1";
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
     */const La=new Vt("@firebase/firestore");function Fa(){return La.logLevel}function Ua(e,...t){if(La.logLevel<=Mt.DEBUG){const n=t.map(ja);La.debug(`Firestore (${Ma}): ${e}`,...n)}}function Ba(e,...t){if(La.logLevel<=Mt.ERROR){const n=t.map(ja);La.error(`Firestore (${Ma}): ${e}`,...n)}}function Va(e,...t){if(La.logLevel<=Mt.WARN){const n=t.map(ja);La.warn(`Firestore (${Ma}): ${e}`,...n)}}function ja(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
     */function za(e="Unexpected state"){const t=`FIRESTORE (${Ma}) INTERNAL ASSERTION FAILED: `+e;throw Ba(t),new Error(t)}function qa(e,t){e||za()}function Ka(e,t){return e}
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
     */const Ha={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Wa extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
     */class Ga{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
     */class Ja{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Xa{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t($a.UNAUTHENTICATED)))}shutdown(){}}class Ya{constructor(e){this.t=e,this.currentUser=$a.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new Ga;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ga,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Ua("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Ua("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ga)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Ua("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(qa("string"==typeof t.accessToken),new Ja(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return qa(null===e||"string"==typeof e),new $a(e)}}class Qa{constructor(e,t,n){this.type="FirstParty",this.user=$a.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class Za{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new Qa(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t($a.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ec{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tc{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null}start(e,t){this.o=n=>{e.enqueueRetryable((()=>(e=>(null!=e.error&&Ua("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`),t(e.token)))(n)))};const n=e=>{Ua("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit((e=>n(e))),setTimeout((()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?n(e):Ua("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(qa("string"==typeof e.token),new ec(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
     */class nc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.p(e),this.T=e=>t.writeSequenceNumber(e))}p(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}
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
     */function rc(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
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
     */nc.I=-1;class ic{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=rc(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function sc(e,t){return e<t?-1:e>t?1:0}function oc(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
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
     */class ac{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Wa(Ha.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Wa(Ha.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Wa(Ha.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Wa(Ha.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ac.fromMillis(Date.now())}static fromDate(e){return ac.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new ac(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?sc(this.nanoseconds,e.nanoseconds):sc(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
     */class cc{constructor(e){this.timestamp=e}static fromTimestamp(e){return new cc(e)}static min(){return new cc(new ac(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
     */function lc(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function uc(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function hc(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
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
     */class dc{constructor(e,t,n){void 0===t?t=0:t>e.length&&za(),void 0===n?n=e.length-t:n>e.length-t&&za(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===dc.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof dc?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class fc extends dc{construct(e,t,n){return new fc(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Wa(Ha.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new fc(t)}static emptyPath(){return new fc([])}}const pc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gc extends dc{construct(e,t,n){return new gc(e,t,n)}static isValidIdentifier(e){return pc.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gc.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new gc(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Wa(Ha.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Wa(Ha.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Wa(Ha.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new Wa(Ha.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gc(t)}static emptyPath(){return new gc([])}}
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
     */class mc{constructor(e){this.fields=e,e.sort(gc.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return oc(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
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
     */class yc{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new yc(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new yc(t)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
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
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return sc(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}yc.EMPTY_BYTE_STRING=new yc("");const vc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wc(e){if(qa(!!e),"string"==typeof e){let t=0;const n=vc.exec(e);if(qa(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:bc(e.seconds),nanos:bc(e.nanos)}}function bc(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function _c(e){return"string"==typeof e?yc.fromBase64String(e):yc.fromUint8Array(e)}
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
     */function Ec(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Tc(e){const t=e.mapValue.fields.__previous_value__;return Ec(t)?Tc(t):t}function kc(e){const t=wc(e.mapValue.fields.__local_write_time__.timestampValue);return new ac(t.seconds,t.nanos)}
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
     */function Ic(e){return null==e}function Sc(e){return 0===e&&1/e==-1/0}
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
class Ac{constructor(e){this.path=e}static fromPath(e){return new Ac(fc.fromString(e))}static fromName(e){return new Ac(fc.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===fc.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return fc.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ac(new fc(e.slice()))}}
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
     */function Cc(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ec(e)?4:10:za()}function Rc(e,t){const n=Cc(e);if(n!==Cc(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return kc(e).isEqual(kc(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=wc(e.timestampValue),r=wc(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return _c(e.bytesValue).isEqual(_c(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return bc(e.geoPointValue.latitude)===bc(t.geoPointValue.latitude)&&bc(e.geoPointValue.longitude)===bc(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return bc(e.integerValue)===bc(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=bc(e.doubleValue),r=bc(t.doubleValue);return n===r?Sc(n)===Sc(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return oc(e.arrayValue.values||[],t.arrayValue.values||[],Rc);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(lc(n)!==lc(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!Rc(n[e],r[e])))return!1;return!0}(e,t);default:return za()}}function Nc(e,t){return void 0!==(e.values||[]).find((e=>Rc(e,t)))}function Dc(e,t){const n=Cc(e),r=Cc(t);if(n!==r)return sc(n,r);switch(n){case 0:return 0;case 1:return sc(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=bc(e.integerValue||e.doubleValue),r=bc(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return xc(e.timestampValue,t.timestampValue);case 4:return xc(kc(e),kc(t));case 5:return sc(e.stringValue,t.stringValue);case 6:return function(e,t){const n=_c(e),r=_c(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=sc(n[e],r[e]);if(0!==t)return t}return sc(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=sc(bc(e.latitude),bc(t.latitude));return 0!==n?n:sc(bc(e.longitude),bc(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=Dc(n[e],r[e]);if(t)return t}return sc(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){const t=sc(r[e],s[e]);if(0!==t)return t;const o=Dc(n[r[e]],i[s[e]]);if(0!==o)return o}return sc(r.length,s.length)}(e.mapValue,t.mapValue);default:throw za()}}function xc(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return sc(e,t);const n=wc(e),r=wc(t),i=sc(n.seconds,r.seconds);return 0!==i?i:sc(n.nanos,r.nanos)}function Oc(e){return Pc(e)}function Pc(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=wc(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?_c(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Ac.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Pc(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Pc(e.fields[i])}`;return n+"}"}(e.mapValue):za();var t,n}function $c(e){return!!e&&"integerValue"in e}function Mc(e){return!!e&&"arrayValue"in e}function Lc(e){return!!e&&"nullValue"in e}function Fc(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Uc(e){return!!e&&"mapValue"in e}function Bc(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return uc(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Bc(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Bc(e.arrayValue.values[n]);return t}return Object.assign({},e)}
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
     */class Vc{constructor(e){this.value=e}static empty(){return new Vc({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Uc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Bc(t)}setAll(e){let t=gc.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Bc(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Uc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Rc(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Uc(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){uc(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new Vc(Bc(this.value))}}function jc(e){const t=[];return uc(e.fields,((e,n)=>{const r=new gc([e]);if(Uc(n)){const e=jc(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new mc(t)
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
     */}class zc{constructor(e,t,n,r,i){this.key=e,this.documentType=t,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(e){return new zc(e,0,cc.min(),Vc.empty(),0)}static newFoundDocument(e,t,n){return new zc(e,1,t,n,0)}static newNoDocument(e,t){return new zc(e,2,t,Vc.empty(),0)}static newUnknownDocument(e,t){return new zc(e,3,t,Vc.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Vc.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Vc.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof zc&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new zc(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
     */class qc{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.R=null}}function Kc(e,t=null,n=[],r=[],i=null,s=null,o=null){return new qc(e,t,n,r,i,s,o)}function Hc(e){const t=Ka(e);if(null===t.R){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>function(e){return e.field.canonicalString()+e.op.toString()+Oc(e.value)}(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Ic(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=sl(t.startAt)),t.endAt&&(e+="|ub:",e+=sl(t.endAt)),t.R=e}return t.R}function Wc(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!al(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Rc(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ll(e.startAt,t.startAt)&&ll(e.endAt,t.endAt)}function Gc(e){return Ac.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class Jc extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.P(e,t,n):new Xc(e,t,n):"array-contains"===t?new el(e,n):"in"===t?new tl(e,n):"not-in"===t?new nl(e,n):"array-contains-any"===t?new rl(e,n):new Jc(e,t,n)}static P(e,t,n){return"in"===t?new Yc(e,n):new Qc(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.v(Dc(t,this.value)):null!==t&&Cc(this.value)===Cc(t)&&this.v(Dc(t,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return za()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Xc extends Jc{constructor(e,t,n){super(e,t,n),this.key=Ac.fromName(n.referenceValue)}matches(e){const t=Ac.comparator(e.key,this.key);return this.v(t)}}class Yc extends Jc{constructor(e,t){super(e,"in",t),this.keys=Zc("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Qc extends Jc{constructor(e,t){super(e,"not-in",t),this.keys=Zc("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Zc(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Ac.fromName(e.referenceValue)))}class el extends Jc{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Mc(t)&&Nc(t.arrayValue,this.value)}}class tl extends Jc{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Nc(this.value.arrayValue,t)}}class nl extends Jc{constructor(e,t){super(e,"not-in",t)}matches(e){if(Nc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Nc(this.value.arrayValue,t)}}class rl extends Jc{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Mc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Nc(this.value.arrayValue,e)))}}class il{constructor(e,t){this.position=e,this.before=t}}function sl(e){return`${e.before?"b":"a"}:${e.position.map((e=>Oc(e))).join(",")}`}class ol{constructor(e,t="asc"){this.field=e,this.dir=t}}function al(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function cl(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?Ac.comparator(Ac.fromName(o.referenceValue),n.key):Dc(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return e.before?r<=0:r<0}function ll(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.before!==t.before||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Rc(e.position[n],t.position[n]))return!1;return!0}
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
     */class ul{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.S=null,this.D=null,this.startAt,this.endAt}}function hl(e){return new ul(e)}function dl(e){return!Ic(e.limit)&&"F"===e.limitType}function fl(e){return!Ic(e.limit)&&"L"===e.limitType}function pl(e){const t=Ka(e);if(null===t.S){t.S=[];const e=function(e){for(const t of e.filters)if(t.V())return t.field;return null}(t),n=function(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}(t);if(null!==e&&null===n)e.isKeyField()||t.S.push(new ol(e)),t.S.push(new ol(gc.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.S.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.S.push(new ol(gc.keyField(),e))}}}return t.S}function gl(e){const t=Ka(e);if(!t.D)if("F"===t.limitType)t.D=Kc(t.path,t.collectionGroup,pl(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of pl(t)){const t="desc"===n.dir?"asc":"desc";e.push(new ol(n.field,t))}const n=t.endAt?new il(t.endAt.position,!t.endAt.before):null,r=t.startAt?new il(t.startAt.position,!t.startAt.before):null;t.D=Kc(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.D}function ml(e,t){return Wc(gl(e),gl(t))&&e.limitType===t.limitType}function yl(e){return`${Hc(gl(e))}|lt:${e.limitType}`}function vl(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${Oc(t.value)}`;var t})).join(", ")}]`),Ic(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: "+sl(e.startAt)),e.endAt&&(t+=", endAt: "+sl(e.endAt)),`Target(${t})`}(gl(e))}; limitType=${e.limitType})`}function wl(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Ac.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!cl(e.startAt,pl(e),t))&&(!e.endAt||!cl(e.endAt,pl(e),t))}(e,t)}function bl(e){return(t,n)=>{let r=!1;for(const i of pl(e)){const e=_l(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function _l(e,t,n){const r=e.field.isKeyField()?Ac.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Dc(r,i):za()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return za()}}
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
     */function El(e,t){if(e.C){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Sc(t)?"-0":t}}function Tl(e){return{integerValue:""+e}}function kl(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!Sc(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(t)?Tl(t):El(e,t)}
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
     */class Il{constructor(){this._=void 0}}function Sl(e,t,n){return e instanceof Rl?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Nl?Dl(e,t):e instanceof xl?Ol(e,t):function(e,t){const n=Cl(e,t),r=$l(n)+$l(e.N);return $c(n)&&$c(e.N)?Tl(r):El(e.k,r)}(e,t)}function Al(e,t,n){return e instanceof Nl?Dl(e,t):e instanceof xl?Ol(e,t):n}function Cl(e,t){return e instanceof Pl?$c(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class Rl extends Il{}class Nl extends Il{constructor(e){super(),this.elements=e}}function Dl(e,t){const n=Ml(t);for(const t of e.elements)n.some((e=>Rc(e,t)))||n.push(t);return{arrayValue:{values:n}}}class xl extends Il{constructor(e){super(),this.elements=e}}function Ol(e,t){let n=Ml(t);for(const t of e.elements)n=n.filter((e=>!Rc(e,t)));return{arrayValue:{values:n}}}class Pl extends Il{constructor(e,t){super(),this.k=e,this.N=t}}function $l(e){return bc(e.integerValue||e.doubleValue)}function Ml(e){return Mc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class Ll{constructor(e,t){this.version=e,this.transformResults=t}}class Fl{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Fl}static exists(e){return new Fl(void 0,e)}static updateTime(e){return new Fl(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ul(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Bl{}function Vl(e,t,n){e instanceof Hl?function(e,t,n){const r=e.value.clone(),i=Jl(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Wl?function(e,t,n){if(!Ul(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Jl(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Gl(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function jl(e,t,n){e instanceof Hl?function(e,t,n){if(!Ul(e.precondition,t))return;const r=e.value.clone(),i=Xl(e.fieldTransforms,n,t);r.setAll(i),t.convertToFoundDocument(Kl(t),r).setHasLocalMutations()}(e,t,n):e instanceof Wl?function(e,t,n){if(!Ul(e.precondition,t))return;const r=Xl(e.fieldTransforms,n,t),i=t.data;i.setAll(Gl(e)),i.setAll(r),t.convertToFoundDocument(Kl(t),i).setHasLocalMutations()}(e,t,n):function(e,t){Ul(e.precondition,t)&&t.convertToNoDocument(cc.min())}(e,t)}function zl(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Cl(r.transform,e||null);null!=i&&(null==n&&(n=Vc.empty()),n.set(r.field,i))}return n||null}function ql(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&oc(e,t,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Nl&&t instanceof Nl||e instanceof xl&&t instanceof xl?oc(e.elements,t.elements,Rc):e instanceof Pl&&t instanceof Pl?Rc(e.N,t.N):e instanceof Rl&&t instanceof Rl}(e.transform,t.transform)}(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function Kl(e){return e.isFoundDocument()?e.version:cc.min()}class Hl extends Bl{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Wl extends Bl{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Gl(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Jl(e,t,n){const r=new Map;qa(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Al(o,a,n[i]))}return r}function Xl(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,Sl(e,s,t))}return r}class Yl extends Bl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Ql extends Bl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
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
     */class Zl{constructor(e){this.count=e}}
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
     */var eu,tu;function nu(e){if(void 0===e)return Ba("GRPC error has no .code"),Ha.UNKNOWN;switch(e){case eu.OK:return Ha.OK;case eu.CANCELLED:return Ha.CANCELLED;case eu.UNKNOWN:return Ha.UNKNOWN;case eu.DEADLINE_EXCEEDED:return Ha.DEADLINE_EXCEEDED;case eu.RESOURCE_EXHAUSTED:return Ha.RESOURCE_EXHAUSTED;case eu.INTERNAL:return Ha.INTERNAL;case eu.UNAVAILABLE:return Ha.UNAVAILABLE;case eu.UNAUTHENTICATED:return Ha.UNAUTHENTICATED;case eu.INVALID_ARGUMENT:return Ha.INVALID_ARGUMENT;case eu.NOT_FOUND:return Ha.NOT_FOUND;case eu.ALREADY_EXISTS:return Ha.ALREADY_EXISTS;case eu.PERMISSION_DENIED:return Ha.PERMISSION_DENIED;case eu.FAILED_PRECONDITION:return Ha.FAILED_PRECONDITION;case eu.ABORTED:return Ha.ABORTED;case eu.OUT_OF_RANGE:return Ha.OUT_OF_RANGE;case eu.UNIMPLEMENTED:return Ha.UNIMPLEMENTED;case eu.DATA_LOSS:return Ha.DATA_LOSS;default:return za()}}(tu=eu||(eu={}))[tu.OK=0]="OK",tu[tu.CANCELLED=1]="CANCELLED",tu[tu.UNKNOWN=2]="UNKNOWN",tu[tu.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",tu[tu.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",tu[tu.NOT_FOUND=5]="NOT_FOUND",tu[tu.ALREADY_EXISTS=6]="ALREADY_EXISTS",tu[tu.PERMISSION_DENIED=7]="PERMISSION_DENIED",tu[tu.UNAUTHENTICATED=16]="UNAUTHENTICATED",tu[tu.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",tu[tu.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",tu[tu.ABORTED=10]="ABORTED",tu[tu.OUT_OF_RANGE=11]="OUT_OF_RANGE",tu[tu.UNIMPLEMENTED=12]="UNIMPLEMENTED",tu[tu.INTERNAL=13]="INTERNAL",tu[tu.UNAVAILABLE=14]="UNAVAILABLE",tu[tu.DATA_LOSS=15]="DATA_LOSS";
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
class ru{constructor(e,t){this.comparator=e,this.root=t||su.EMPTY}insert(e,t){return new ru(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,su.BLACK,null,null))}remove(e){return new ru(this.comparator,this.root.remove(e,this.comparator).copy(null,null,su.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new iu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new iu(this.root,e,this.comparator,!1)}getReverseIterator(){return new iu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new iu(this.root,e,this.comparator,!0)}}class iu{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class su{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:su.RED,this.left=null!=r?r:su.EMPTY,this.right=null!=i?i:su.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new su(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return su.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return su.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,su.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,su.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw za();if(this.right.isRed())throw za();const e=this.left.check();if(e!==this.right.check())throw za();return e+(this.isRed()?0:1)}}su.EMPTY=null,su.RED=!0,su.BLACK=!1,su.EMPTY=new class{constructor(){this.size=0}get key(){throw za()}get value(){throw za()}get color(){throw za()}get left(){throw za()}get right(){throw za()}copy(e,t,n,r,i){return this}insert(e,t,n){return new su(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class ou{constructor(e){this.comparator=e,this.data=new ru(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new au(this.data.getIterator())}getIteratorFrom(e){return new au(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof ou))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ou(this.comparator);return t.data=e,t}}class au{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
     */const cu=new ru(Ac.comparator);function lu(){return cu}const uu=new ru(Ac.comparator);function hu(){return uu}const du=new ru(Ac.comparator);const fu=new ou(Ac.comparator);function pu(...e){let t=fu;for(const n of e)t=t.add(n);return t}const gu=new ou(sc);function mu(){return gu}
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
     */class yu{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,vu.createSynthesizedTargetChangeForCurrentChange(e,t)),new yu(cc.min(),n,mu(),lu(),pu())}}class vu{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new vu(yc.EMPTY_BYTE_STRING,t,pu(),pu(),pu())}}
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
     */class wu{constructor(e,t,n,r){this.$=e,this.removedTargetIds=t,this.key=n,this.F=r}}class bu{constructor(e,t){this.targetId=e,this.O=t}}class _u{constructor(e,t,n=yc.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Eu{constructor(){this.M=0,this.L=Iu(),this.B=yc.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return 0!==this.M}get j(){return this.q}W(e){e.approximateByteSize()>0&&(this.q=!0,this.B=e)}G(){let e=pu(),t=pu(),n=pu();return this.L.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:za()}})),new vu(this.B,this.U,e,t,n)}H(){this.q=!1,this.L=Iu()}J(e,t){this.q=!0,this.L=this.L.insert(e,t)}Y(e){this.q=!0,this.L=this.L.remove(e)}X(){this.M+=1}Z(){this.M-=1}tt(){this.q=!0,this.U=!0}}class Tu{constructor(e){this.et=e,this.nt=new Map,this.st=lu(),this.it=ku(),this.rt=new ou(sc)}ot(e){for(const t of e.$)e.F&&e.F.isFoundDocument()?this.at(t,e.F):this.ct(t,e.key,e.F);for(const t of e.removedTargetIds)this.ct(t,e.key,e.F)}ut(e){this.forEachTarget(e,(t=>{const n=this.ht(t);switch(e.state){case 0:this.lt(t)&&n.W(e.resumeToken);break;case 1:n.Z(),n.K||n.H(),n.W(e.resumeToken);break;case 2:n.Z(),n.K||this.removeTarget(t);break;case 3:this.lt(t)&&(n.tt(),n.W(e.resumeToken));break;case 4:this.lt(t)&&(this.ft(t),n.W(e.resumeToken));break;default:za()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.nt.forEach(((e,n)=>{this.lt(n)&&t(n)}))}dt(e){const t=e.targetId,n=e.O.count,r=this.wt(t);if(r){const e=r.target;if(Gc(e))if(0===n){const n=new Ac(e.path);this.ct(t,n,zc.newNoDocument(n,cc.min()))}else qa(1===n);else this._t(t)!==n&&(this.ft(t),this.rt=this.rt.add(t))}}gt(e){const t=new Map;this.nt.forEach(((n,r)=>{const i=this.wt(r);if(i){if(n.current&&Gc(i.target)){const t=new Ac(i.target.path);null!==this.st.get(t)||this.yt(r,t)||this.ct(r,t,zc.newNoDocument(t,e))}n.j&&(t.set(r,n.G()),n.H())}}));let n=pu();this.it.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.wt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))}));const r=new yu(e,t,this.rt,this.st,n);return this.st=lu(),this.it=ku(),this.rt=new ou(sc),r}at(e,t){if(!this.lt(e))return;const n=this.yt(e,t.key)?2:0;this.ht(e).J(t.key,n),this.st=this.st.insert(t.key,t),this.it=this.it.insert(t.key,this.Tt(t.key).add(e))}ct(e,t,n){if(!this.lt(e))return;const r=this.ht(e);this.yt(e,t)?r.J(t,1):r.Y(t),this.it=this.it.insert(t,this.Tt(t).delete(e)),n&&(this.st=this.st.insert(t,n))}removeTarget(e){this.nt.delete(e)}_t(e){const t=this.ht(e).G();return this.et.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}X(e){this.ht(e).X()}ht(e){let t=this.nt.get(e);return t||(t=new Eu,this.nt.set(e,t)),t}Tt(e){let t=this.it.get(e);return t||(t=new ou(sc),this.it=this.it.insert(e,t)),t}lt(e){const t=null!==this.wt(e);return t||Ua("WatchChangeAggregator","Detected inactive target",e),t}wt(e){const t=this.nt.get(e);return t&&t.K?null:this.et.Et(e)}ft(e){this.nt.set(e,new Eu),this.et.getRemoteKeysForTarget(e).forEach((t=>{this.ct(e,t,null)}))}yt(e,t){return this.et.getRemoteKeysForTarget(e).has(t)}}function ku(){return new ru(Ac.comparator)}function Iu(){return new ru(Ac.comparator)}
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
     */const Su={asc:"ASCENDING",desc:"DESCENDING"},Au={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class Cu{constructor(e,t){this.databaseId=e,this.C=t}}function Ru(e,t){return e.C?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Nu(e,t){return e.C?t.toBase64():t.toUint8Array()}function Du(e,t){return Ru(e,t.toTimestamp())}function xu(e){return qa(!!e),cc.fromTimestamp(function(e){const t=wc(e);return new ac(t.seconds,t.nanos)}(e))}function Ou(e,t){return function(e){return new fc(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Pu(e){const t=fc.fromString(e);return qa(eh(t)),t}function $u(e,t){return Ou(e.databaseId,t.path)}function Mu(e,t){const n=Pu(t);if(n.get(1)!==e.databaseId.projectId)throw new Wa(Ha.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Wa(Ha.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Ac(Uu(n))}function Lu(e,t){return Ou(e.databaseId,t)}function Fu(e){return new fc(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Uu(e){return qa(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Bu(e,t,n){return{name:$u(e,t),fields:n.value.mapValue.fields}}function Vu(e,t){return{documents:[Lu(e,t.path)]}}function ju(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Lu(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Lu(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(Fc(e.value))return{unaryFilter:{field:Ju(e.field),op:"IS_NAN"}};if(Lc(e.value))return{unaryFilter:{field:Ju(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Fc(e.value))return{unaryFilter:{field:Ju(e.field),op:"IS_NOT_NAN"}};if(Lc(e.value))return{unaryFilter:{field:Ju(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ju(e.field),op:Gu(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Ju(e.field),direction:Wu(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.C||Ic(t)?t:{value:t}}(e,t.limit);return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=Ku(t.startAt)),t.endAt&&(n.structuredQuery.endAt=Ku(t.endAt)),n}function zu(e){let t=function(e){const t=Pu(e);return 4===t.length?fc.emptyPath():Uu(t)}(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){qa(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=qu(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new ol(Xu(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Ic(t)?null:t}(n.limit));let c=null;n.startAt&&(c=Hu(n.startAt));let l=null;return n.endAt&&(l=Hu(n.endAt)),function(e,t,n,r,i,s,o,a){return new ul(e,t,n,r,i,s,o,a)}(t,i,o,s,a,"F",c,l)}function qu(e){return e?void 0!==e.unaryFilter?[Qu(e)]:void 0!==e.fieldFilter?[Yu(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>qu(e))).reduce(((e,t)=>e.concat(t))):za():[]}function Ku(e){return{before:e.before,values:e.position}}function Hu(e){const t=!!e.before,n=e.values||[];return new il(n,t)}function Wu(e){return Su[e]}function Gu(e){return Au[e]}function Ju(e){return{fieldPath:e.canonicalString()}}function Xu(e){return gc.fromServerFormat(e.fieldPath)}function Yu(e){return Jc.create(Xu(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return za()}}(e.fieldFilter.op),e.fieldFilter.value)}function Qu(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Xu(e.unaryFilter.field);return Jc.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Xu(e.unaryFilter.field);return Jc.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Xu(e.unaryFilter.field);return Jc.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Xu(e.unaryFilter.field);return Jc.create(i,"!=",{nullValue:"NULL_VALUE"});default:return za()}}function Zu(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function eh(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
class th{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&za(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new th(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof th?t:th.resolve(t)}catch(e){return th.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):th.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):th.reject(t)}static resolve(e){return new th(((t,n)=>{t(e)}))}static reject(e){return new th(((t,n)=>{n(e)}))}static waitFor(e){return new th(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=th.resolve(!1);for(const n of e)t=t.next((e=>e?th.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}}function nh(e){return"IndexedDbTransactionError"===e.name}
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
     */class rh{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(e.key)&&Vl(r,e,n[t])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&jl(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&jl(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach((t=>{const n=e.get(t.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(cc.min())}))}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),pu())}isEqual(e){return this.batchId===e.batchId&&oc(this.mutations,e.mutations,((e,t)=>ql(e,t)))&&oc(this.baseMutations,e.baseMutations,((e,t)=>ql(e,t)))}}class ih{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){qa(e.mutations.length===n.length);let r=du;const i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new ih(e,t,n,r)}}
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
     */class sh{constructor(e,t,n,r,i=cc.min(),s=cc.min(),o=yc.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new sh(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new sh(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new sh(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
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
     */class oh{constructor(e){this.Gt=e}}function ah(e){const t=zu({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?function(e,t,n){return new ul(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}(t,t.limit,"L"):t}
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
     */class ch{constructor(){this.zt=new lh}addToCollectionParentIndex(e,t){return this.zt.add(t),th.resolve()}getCollectionParents(e,t){return th.resolve(this.zt.getEntries(t))}}class lh{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new ou(fc.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new ou(fc.comparator)).toArray()}}
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
     */class uh{constructor(e){this.se=e}next(){return this.se+=2,this.se}static ie(){return new uh(0)}static re(){return new uh(-1)}}
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
     */async function hh(e){if(e.code!==Ha.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;Ua("LocalStore","Unexpectedly lost primary lease")}
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
     */class dh{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t])}else this.inner[n]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),!0;return!1}forEach(e){uc(this.inner,((t,n)=>{for(const[t,r]of n)e(t,r)}))}isEmpty(){return hc(this.inner)}}
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
class fh{constructor(e,t,n){this.Je=e,this.An=t,this.Jt=n}Rn(e,t){return this.An.getAllMutationBatchesAffectingDocumentKey(e,t).next((n=>this.Pn(e,t,n)))}Pn(e,t,n){return this.Je.getEntry(e,t).next((e=>{for(const t of n)t.applyToLocalView(e);return e}))}bn(e,t){e.forEach(((e,n)=>{for(const e of t)e.applyToLocalView(n)}))}vn(e,t){return this.Je.getEntries(e,t).next((t=>this.Vn(e,t).next((()=>t))))}Vn(e,t){return this.An.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>this.bn(t,e)))}getDocumentsMatchingQuery(e,t,n){return function(e){return Ac.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.Sn(e,t.path):function(e){return null!==e.collectionGroup}(t)?this.Dn(e,t,n):this.Cn(e,t,n)}Sn(e,t){return this.Rn(e,new Ac(t)).next((e=>{let t=hu();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}Dn(e,t,n){const r=t.collectionGroup;let i=hu();return this.Jt.getCollectionParents(e,r).next((s=>th.forEach(s,(s=>{const o=function(e,t){return new ul(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.Cn(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}Cn(e,t,n){let r,i;return this.Je.getDocumentsMatchingQuery(e,t,n).next((n=>(r=n,this.An.getAllMutationBatchesAffectingQuery(e,t)))).next((t=>(i=t,this.Nn(e,i,r).next((e=>{r=e;for(const e of i)for(const t of e.mutations){const n=t.key;let i=r.get(n);null==i&&(i=zc.newInvalidDocument(n),r=r.insert(n,i)),jl(t,i,e.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))))).next((()=>(r.forEach(((e,n)=>{wl(t,n)||(r=r.remove(e))})),r)))}Nn(e,t,n){let r=pu();for(const e of t)for(const t of e.mutations)t instanceof Wl&&null===n.get(t.key)&&(r=r.add(t.key));let i=n;return this.Je.getEntries(e,r).next((e=>(e.forEach(((e,t)=>{t.isFoundDocument()&&(i=i.insert(e,t))})),i)))}}
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
     */class ph{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.kn=n,this.xn=r}static $n(e,t){let n=pu(),r=pu();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new ph(e,t.fromCache,n,r)}}
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
     */class gh{Fn(e){this.On=e}getDocumentsMatchingQuery(e,t,n,r){return function(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}(t)||n.isEqual(cc.min())?this.Mn(e,t):this.On.vn(e,r).next((i=>{const s=this.Ln(t,i);return(dl(t)||fl(t))&&this.Bn(t.limitType,s,r,n)?this.Mn(e,t):(Fa()<=Mt.DEBUG&&Ua("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),vl(t)),this.On.getDocumentsMatchingQuery(e,t,n).next((e=>(s.forEach((t=>{e=e.insert(t.key,t)})),e))))}))}Ln(e,t){let n=new ou(bl(e));return t.forEach(((t,r)=>{wl(e,r)&&(n=n.add(r))})),n}Bn(e,t,n,r){if(n.size!==t.size)return!0;const i="F"===e?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mn(e,t){return Fa()<=Mt.DEBUG&&Ua("QueryEngine","Using full collection scan to execute query:",vl(t)),this.On.getDocumentsMatchingQuery(e,t,cc.min())}}
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
     */class mh{constructor(e,t,n,r){this.persistence=e,this.Un=t,this.k=r,this.qn=new ru(sc),this.Kn=new dh((e=>Hc(e)),Wc),this.jn=cc.min(),this.An=e.getMutationQueue(n),this.Qn=e.getRemoteDocumentCache(),this.He=e.getTargetCache(),this.Wn=new fh(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=e.getBundleCache(),this.Un.Fn(this.Wn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.qn)))}}async function yh(e,t){const n=Ka(e);let r=n.An,i=n.Wn;const s=await n.persistence.runTransaction("Handle user change","readonly",(e=>{let s;return n.An.getAllMutationBatches(e).next((o=>(s=o,r=n.persistence.getMutationQueue(t),i=new fh(n.Qn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(e)))).next((t=>{const n=[],r=[];let o=pu();for(const e of s){n.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return i.vn(e,o).next((e=>({Gn:e,removedBatchIds:n,addedBatchIds:r})))}))}));return n.An=r,n.Wn=i,n.Un.Fn(n.Wn),s}function vh(e){const t=Ka(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.He.getLastRemoteSnapshotVersion(e)))}function wh(e,t){const n=Ka(e),r=t.snapshotVersion;let i=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Qn.newChangeBuffer({trackRemovals:!0});i=n.qn;const o=[];t.targetChanges.forEach(((t,s)=>{const a=i.get(s);if(!a)return;o.push(n.He.removeMatchingKeys(e,t.removedDocuments,s).next((()=>n.He.addMatchingKeys(e,t.addedDocuments,s))));const c=t.resumeToken;if(c.approximateByteSize()>0){const l=a.withResumeToken(c,r).withSequenceNumber(e.currentSequenceNumber);i=i.insert(s,l),function(e,t,n){return qa(t.resumeToken.approximateByteSize()>0),0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,l,t)&&o.push(n.He.updateTargetData(e,l))}}));let a=lu();if(t.documentUpdates.forEach(((r,i)=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(function(e,t,n,r,i){let s=pu();return n.forEach((e=>s=s.add(e))),t.getEntries(e,s).next((e=>{let s=lu();return n.forEach(((n,o)=>{const a=e.get(n),c=(null==i?void 0:i.get(n))||r;o.isNoDocument()&&o.version.isEqual(cc.min())?(t.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(o,c),s=s.insert(n,o)):Ua("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)})),s}))}(e,s,t.documentUpdates,r,void 0).next((e=>{a=e}))),!r.isEqual(cc.min())){const t=n.He.getLastRemoteSnapshotVersion(e).next((t=>n.He.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return th.waitFor(o).next((()=>s.apply(e))).next((()=>n.Wn.Vn(e,a))).next((()=>a))})).then((e=>(n.qn=i,e)))}function bh(e,t){const n=Ka(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.An.getNextMutationBatchAfterBatchId(e,t))))}async function _h(e,t,n){const r=Ka(e),i=r.qn.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!nh(e))throw e;Ua("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.qn=r.qn.remove(t),r.Kn.delete(i.target)}function Eh(e,t,n){const r=Ka(e);let i=cc.min(),s=pu();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=Ka(e),i=r.Kn.get(n);return void 0!==i?th.resolve(r.qn.get(i)):r.He.getTargetData(t,n)}(r,e,gl(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.He.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Un.getDocumentsMatchingQuery(e,t,n?i:cc.min(),n?s:pu()))).next((e=>({documents:e,zn:s})))))}
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
     */class Th{constructor(e){this.k=e,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(e,t){return th.resolve(this.Xn.get(t))}saveBundleMetadata(e,t){var n;return this.Xn.set(t.id,{id:(n=t).id,version:n.version,createTime:xu(n.createTime)}),th.resolve()}getNamedQuery(e,t){return th.resolve(this.Zn.get(t))}saveNamedQuery(e,t){return this.Zn.set(t.name,function(e){return{name:e.name,query:ah(e.bundledQuery),readTime:xu(e.readTime)}}(t)),th.resolve()}}
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
     */class kh{constructor(){this.ts=new ou(Ih.es),this.ns=new ou(Ih.ss)}isEmpty(){return this.ts.isEmpty()}addReference(e,t){const n=new Ih(e,t);this.ts=this.ts.add(n),this.ns=this.ns.add(n)}rs(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.os(new Ih(e,t))}cs(e,t){e.forEach((e=>this.removeReference(e,t)))}us(e){const t=new Ac(new fc([])),n=new Ih(t,e),r=new Ih(t,e+1),i=[];return this.ns.forEachInRange([n,r],(e=>{this.os(e),i.push(e.key)})),i}hs(){this.ts.forEach((e=>this.os(e)))}os(e){this.ts=this.ts.delete(e),this.ns=this.ns.delete(e)}ls(e){const t=new Ac(new fc([])),n=new Ih(t,e),r=new Ih(t,e+1);let i=pu();return this.ns.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new Ih(e,0),n=this.ts.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Ih{constructor(e,t){this.key=e,this.fs=t}static es(e,t){return Ac.comparator(e.key,t.key)||sc(e.fs,t.fs)}static ss(e,t){return sc(e.fs,t.fs)||Ac.comparator(e.key,t.key)}}
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
     */class Sh{constructor(e,t){this.Jt=e,this.referenceDelegate=t,this.An=[],this.ds=1,this.ws=new ou(Ih.es)}checkEmpty(e){return th.resolve(0===this.An.length)}addMutationBatch(e,t,n,r){const i=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const s=new rh(i,t,n,r);this.An.push(s);for(const t of r)this.ws=this.ws.add(new Ih(t.key,i)),this.Jt.addToCollectionParentIndex(e,t.key.path.popLast());return th.resolve(s)}lookupMutationBatch(e,t){return th.resolve(this._s(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.gs(n),i=r<0?0:r;return th.resolve(this.An.length>i?this.An[i]:null)}getHighestUnacknowledgedBatchId(){return th.resolve(0===this.An.length?-1:this.ds-1)}getAllMutationBatches(e){return th.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Ih(t,0),r=new Ih(t,Number.POSITIVE_INFINITY),i=[];return this.ws.forEachInRange([n,r],(e=>{const t=this._s(e.fs);i.push(t)})),th.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ou(sc);return t.forEach((e=>{const t=new Ih(e,0),r=new Ih(e,Number.POSITIVE_INFINITY);this.ws.forEachInRange([t,r],(e=>{n=n.add(e.fs)}))})),th.resolve(this.ys(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Ac.isDocumentKey(i)||(i=i.child(""));const s=new Ih(new Ac(i),0);let o=new ou(sc);return this.ws.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.fs)),!0)}),s),th.resolve(this.ys(o))}ys(e){const t=[];return e.forEach((e=>{const n=this._s(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){qa(0===this.ps(t.batchId,"removed")),this.An.shift();let n=this.ws;return th.forEach(t.mutations,(r=>{const i=new Ih(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.ws=n}))}ee(e){}containsKey(e,t){const n=new Ih(t,0),r=this.ws.firstAfterOrEqual(n);return th.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.An.length,th.resolve()}ps(e,t){return this.gs(e)}gs(e){return 0===this.An.length?0:e-this.An[0].batchId}_s(e){const t=this.gs(e);return t<0||t>=this.An.length?null:this.An[t]}}
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
     */class Ah{constructor(e,t){this.Jt=e,this.Ts=t,this.docs=new ru(Ac.comparator),this.size=0}addEntry(e,t,n){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ts(t);return this.docs=this.docs.insert(r,{document:t.clone(),size:o,readTime:n}),this.size+=o-s,this.Jt.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return th.resolve(n?n.document.clone():zc.newInvalidDocument(t))}getEntries(e,t){let n=lu();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.clone():zc.newInvalidDocument(e))})),th.resolve(n)}getDocumentsMatchingQuery(e,t,n){let r=lu();const i=new Ac(t.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i,readTime:o}}=s.getNext();if(!t.path.isPrefixOf(e.path))break;o.compareTo(n)<=0||wl(t,i)&&(r=r.insert(i.key,i.clone()))}return th.resolve(r)}Es(e,t){return th.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Ch(this)}getSize(e){return th.resolve(this.size)}}class Ch extends class{constructor(){this.changes=new dh((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}getReadTime(e){const t=this.changes.get(e);return t?t.readTime:cc.min()}addEntry(e,t){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:t})}removeEntry(e,t=null){this.assertNotApplied(),this.changes.set(e,{document:zc.newInvalidDocument(e),readTime:t})}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?th.resolve(n.document):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}{constructor(e){super(),this.De=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.document.isValidDocument()?t.push(this.De.addEntry(e,r.document,this.getReadTime(n))):this.De.removeEntry(n)})),th.waitFor(t)}getFromCache(e,t){return this.De.getEntry(e,t)}getAllFromCache(e,t){return this.De.getEntries(e,t)}}
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
     */class Rh{constructor(e){this.persistence=e,this.Is=new dh((e=>Hc(e)),Wc),this.lastRemoteSnapshotVersion=cc.min(),this.highestTargetId=0,this.As=0,this.Rs=new kh,this.targetCount=0,this.Ps=uh.ie()}forEachTarget(e,t){return this.Is.forEach(((e,n)=>t(n))),th.resolve()}getLastRemoteSnapshotVersion(e){return th.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return th.resolve(this.As)}allocateTargetId(e){return this.highestTargetId=this.Ps.next(),th.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.As&&(this.As=t),th.resolve()}ce(e){this.Is.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ps=new uh(t),this.highestTargetId=t),e.sequenceNumber>this.As&&(this.As=e.sequenceNumber)}addTargetData(e,t){return this.ce(t),this.targetCount+=1,th.resolve()}updateTargetData(e,t){return this.ce(t),th.resolve()}removeTargetData(e,t){return this.Is.delete(t.target),this.Rs.us(t.targetId),this.targetCount-=1,th.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Is.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Is.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),th.waitFor(i).next((()=>r))}getTargetCount(e){return th.resolve(this.targetCount)}getTargetData(e,t){const n=this.Is.get(t)||null;return th.resolve(n)}addMatchingKeys(e,t,n){return this.Rs.rs(t,n),th.resolve()}removeMatchingKeys(e,t,n){this.Rs.cs(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),th.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Rs.us(t),th.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Rs.ls(t);return th.resolve(n)}containsKey(e,t){return th.resolve(this.Rs.containsKey(t))}}
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
     */class Nh{constructor(e,t){this.bs={},this.Be=new nc(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=e(this),this.He=new Rh(this),this.Jt=new ch,this.Je=function(e,t){return new Ah(e,t)}(this.Jt,(e=>this.referenceDelegate.vs(e))),this.k=new oh(t),this.Ye=new Th(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(e){let t=this.bs[e.toKey()];return t||(t=new Sh(this.Jt,this.referenceDelegate),this.bs[e.toKey()]=t),t}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(e,t,n){Ua("MemoryPersistence","Starting transaction:",e);const r=new Dh(this.Be.next());return this.referenceDelegate.Vs(),n(r).next((e=>this.referenceDelegate.Ss(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ds(e,t){return th.or(Object.values(this.bs).map((n=>()=>n.containsKey(e,t))))}}class Dh extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}{constructor(e){super(),this.currentSequenceNumber=e}}class xh{constructor(e){this.persistence=e,this.Cs=new kh,this.Ns=null}static ks(e){return new xh(e)}get xs(){if(this.Ns)return this.Ns;throw za()}addReference(e,t,n){return this.Cs.addReference(n,t),this.xs.delete(n.toString()),th.resolve()}removeReference(e,t,n){return this.Cs.removeReference(n,t),this.xs.add(n.toString()),th.resolve()}markPotentiallyOrphaned(e,t){return this.xs.add(t.toString()),th.resolve()}removeTarget(e,t){this.Cs.us(t.targetId).forEach((e=>this.xs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.xs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Vs(){this.Ns=new Set}Ss(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return th.forEach(this.xs,(n=>{const r=Ac.fromPath(n);return this.$s(e,r).next((e=>{e||t.removeEntry(r)}))})).next((()=>(this.Ns=null,t.apply(e))))}updateLimboDocument(e,t){return this.$s(e,t).next((e=>{e?this.xs.delete(t.toString()):this.xs.add(t.toString())}))}vs(e){return 0}$s(e,t){return th.or([()=>th.resolve(this.Cs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ds(e,t)])}}class Oh{constructor(){this.activeTargetIds=mu()}Ms(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ls(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ph{constructor(){this.pi=new Oh,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.pi.Ms(e),this.Ti[e]||"not-current"}updateQueryState(e,t,n){this.Ti[e]=t}removeLocalQueryTarget(e){this.pi.Ls(e)}isLocalQueryTarget(e){return this.pi.activeTargetIds.has(e)}clearQueryState(e){delete this.Ti[e]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(e){return this.pi.activeTargetIds.has(e)}start(){return this.pi=new Oh,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}
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
     */class $h{Ei(e){}shutdown(){}}
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
     */class Mh{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.Pi(),this.bi=[],this.vi()}Ei(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){Ua("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Pi(){Ua("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
     */const Lh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
     */class Fh{constructor(e){this.Vi=e.Vi,this.Si=e.Si}Di(e){this.Ci=e}Ni(e){this.ki=e}onMessage(e){this.xi=e}close(){this.Si()}send(e){this.Vi(e)}$i(){this.Ci()}Fi(e){this.ki(e)}Oi(e){this.xi(e)}}
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
     */class Uh extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.Mi=t+"://"+e.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(e,t,n,r,i){const s=this.Ui(e,t);Ua("RestConnection","Sending: ",s,n);const o={};return this.qi(o,r,i),this.Ki(e,s,o,n).then((e=>(Ua("RestConnection","Received: ",e),e)),(t=>{throw Va("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}ji(e,t,n,r,i){return this.Bi(e,t,n,r,i)}qi(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ma,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}Ui(e,t){const n=Lh[e];return`${this.Mi}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Ki(e,t,n,r){return new Promise(((i,s)=>{const o=new Oa;o.listenOnce(Aa.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Sa.NO_ERROR:const t=o.getResponseJson();Ua("Connection","XHR received:",JSON.stringify(t)),i(t);break;case Sa.TIMEOUT:Ua("Connection",'RPC "'+e+'" timed out'),s(new Wa(Ha.DEADLINE_EXCEEDED,"Request time out"));break;case Sa.HTTP_ERROR:const n=o.getStatus();if(Ua("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Ha).indexOf(t)>=0?t:Ha.UNKNOWN}(e.status);s(new Wa(t,e.message))}else s(new Wa(Ha.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new Wa(Ha.UNAVAILABLE,"Connection failed."));break;default:za()}}finally{Ua("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}Qi(e,t,n){const r=[this.Mi,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=new _a,s=fs(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Da({})),this.qi(o.initMessageHeaders,t,n),gt()||yt()||pt().indexOf("Electron/")>=0||vt()||pt().indexOf("MSAppHost/")>=0||mt()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");Ua("Connection","Creating WebChannel: "+a,o);const c=i.createWebChannel(a,o);let l=!1,u=!1;const h=new Fh({Vi:e=>{u?Ua("Connection","Not sending because WebChannel is closed:",e):(l||(Ua("Connection","Opening WebChannel transport."),c.open(),l=!0),Ua("Connection","WebChannel sending:",e),c.send(e))},Si:()=>c.close()}),d=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return d(c,xa.EventType.OPEN,(()=>{u||Ua("Connection","WebChannel transport opened.")})),d(c,xa.EventType.CLOSE,(()=>{u||(u=!0,Ua("Connection","WebChannel transport closed"),h.Fi())})),d(c,xa.EventType.ERROR,(e=>{u||(u=!0,Va("Connection","WebChannel transport errored:",e),h.Fi(new Wa(Ha.UNAVAILABLE,"The operation could not be completed")))})),d(c,xa.EventType.MESSAGE,(e=>{var t;if(!u){const n=e.data[0];qa(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){Ua("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=eu[e];if(void 0!==t)return nu(t)}(e),n=i.message;void 0===t&&(t=Ha.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),u=!0,h.Fi(new Wa(t,n)),c.close()}else Ua("Connection","WebChannel received:",n),h.Oi(n)}})),d(s,Ca.STAT_EVENT,(e=>{e.stat===Ra?Ua("Connection","Detected buffering proxy"):e.stat===Na&&Ua("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.$i()}),0),h}}function Bh(){return"undefined"!=typeof document?document:null}
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
     */function Vh(e){return new Cu(e,!0)}class jh{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Oe=e,this.timerId=t,this.Wi=n,this.Gi=r,this.zi=i,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(e){this.cancel();const t=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),r=Math.max(0,t-n);r>0&&Ua("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Hi} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Ji=this.Oe.enqueueAfterDelay(this.timerId,r,(()=>(this.Yi=Date.now(),e()))),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
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
     */class zh{constructor(e,t,n,r,i,s,o,a){this.Oe=e,this.nr=n,this.sr=r,this.ir=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.rr=0,this.ar=null,this.cr=null,this.stream=null,this.ur=new jh(e,t)}hr(){return 1===this.state||5===this.state||this.lr()}lr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&null===this.ar&&(this.ar=this.Oe.enqueueAfterDelay(this.nr,6e4,(()=>this.mr())))}gr(e){this.yr(),this.stream.send(e)}async mr(){if(this.lr())return this.close(0)}yr(){this.ar&&(this.ar.cancel(),this.ar=null)}pr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,t){this.yr(),this.pr(),this.ur.cancel(),this.rr++,4!==e?this.ur.reset():t&&t.code===Ha.RESOURCE_EXHAUSTED?(Ba(t.toString()),Ba("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):t&&t.code===Ha.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Tr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ni(t)}Tr(){}auth(){this.state=1;const e=this.Er(this.rr),t=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.rr===t&&this.Ir(e,n)}),(t=>{e((()=>{const e=new Wa(Ha.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Ar(e)}))}))}Ir(e,t){const n=this.Er(this.rr);this.stream=this.Rr(e,t),this.stream.Di((()=>{n((()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.sr,1e4,(()=>(this.lr()&&(this.state=3),Promise.resolve()))),this.listener.Di())))})),this.stream.Ni((e=>{n((()=>this.Ar(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}dr(){this.state=5,this.ur.Zi((async()=>{this.state=0,this.start()}))}Ar(e){return Ua("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Er(e){return t=>{this.Oe.enqueueAndForget((()=>this.rr===e?t():(Ua("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class qh extends zh{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.k=i}Rr(e,t){return this.ir.Qi("Listen",e,t)}onMessage(e){this.ur.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:za()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.C?(qa(void 0===t||"string"==typeof t),yc.fromBase64String(t||"")):(qa(void 0===t||t instanceof Uint8Array),yc.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?Ha.UNKNOWN:nu(e.code);return new Wa(t,e.message||"")}(o);n=new _u(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Mu(e,r.document.name),s=xu(r.document.updateTime),o=new Vc({mapValue:{fields:r.document.fields}}),a=zc.newFoundDocument(i,s,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new wu(c,l,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Mu(e,r.document),s=r.readTime?xu(r.readTime):cc.min(),o=zc.newNoDocument(i,s),a=r.removedTargetIds||[];n=new wu([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Mu(e,r.document),s=r.removedTargetIds||[];n=new wu([],s,i,null)}else{if(!("filter"in t))return za();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new Zl(r),s=e.targetId;n=new bu(s,i)}}return n}(this.k,e),n=function(e){if(!("targetChange"in e))return cc.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?cc.min():t.readTime?xu(t.readTime):cc.min()}(e);return this.listener.Pr(t,n)}br(e){const t={};t.database=Fu(this.k),t.addTarget=function(e,t){let n;const r=t.target;return n=Gc(r)?{documents:Vu(e,r)}:{query:ju(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=Nu(e,t.resumeToken):t.snapshotVersion.compareTo(cc.min())>0&&(n.readTime=Ru(e,t.snapshotVersion.toTimestamp())),n}(this.k,e);const n=function(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return za()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.k,e);n&&(t.labels=n),this.gr(t)}vr(e){const t={};t.database=Fu(this.k),t.removeTarget=e,this.gr(t)}}class Kh extends zh{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.k=i,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(e,t){return this.ir.Qi("Write",e,t)}onMessage(e){if(qa(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Vr){this.ur.reset();const t=function(e,t){return e&&e.length>0?(qa(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?xu(e.updateTime):xu(t);return n.isEqual(cc.min())&&(n=xu(t)),new Ll(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=xu(e.commitTime);return this.listener.Cr(n,t)}return qa(!e.writeResults||0===e.writeResults.length),this.Vr=!0,this.listener.Nr()}kr(){const e={};e.database=Fu(this.k),this.gr(e)}Dr(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>function(e,t){let n;if(t instanceof Hl)n={update:Bu(e,t.key,t.value)};else if(t instanceof Yl)n={delete:$u(e,t.key)};else if(t instanceof Wl)n={update:Bu(e,t.key,t.data),updateMask:Zu(t.fieldMask)};else{if(!(t instanceof Ql))return za();n={verify:$u(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Rl)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Nl)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof xl)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Pl)return{fieldPath:t.field.canonicalString(),increment:n.N};throw za()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Du(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:za()}(e,t.precondition)),n}(this.k,e)))};this.gr(t)}}
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
     */class Hh extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.ir=n,this.k=r,this.$r=!1}Fr(){if(this.$r)throw new Wa(Ha.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(e,t,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.ir.Bi(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Ha.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Wa(Ha.UNKNOWN,e.toString())}))}ji(e,t,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.ir.ji(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Ha.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Wa(Ha.UNKNOWN,e.toString())}))}terminate(){this.$r=!0}}class Wh{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Or=0,this.Mr=null,this.Lr=!0}Br(){0===this.Or&&(this.Ur("Unknown"),this.Mr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Mr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve()))))}Kr(e){"Online"===this.state?this.Ur("Unknown"):(this.Or++,this.Or>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Ur("Offline")))}set(e){this.jr(),this.Or=0,"Online"===e&&(this.Lr=!1),this.Ur(e)}Ur(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}qr(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(Ba(t),this.Lr=!1):Ua("OnlineStateTracker",t)}jr(){null!==this.Mr&&(this.Mr.cancel(),this.Mr=null)}}
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
     */class Gh{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=i,this.Hr.Ei((e=>{n.enqueueAndForget((async()=>{rd(this)&&(Ua("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Ka(e);t.Gr.add(4),await Xh(t),t.Jr.set("Unknown"),t.Gr.delete(4),await Jh(t)}(this))}))})),this.Jr=new Wh(n,r)}}async function Jh(e){if(rd(e))for(const t of e.zr)await t(!0)}async function Xh(e){for(const t of e.zr)await t(!1)}function Yh(e,t){const n=Ka(e);n.Wr.has(t.targetId)||(n.Wr.set(t.targetId,t),nd(n)?td(n):wd(n).lr()&&Zh(n,t))}function Qh(e,t){const n=Ka(e),r=wd(n);n.Wr.delete(t),r.lr()&&ed(n,t),0===n.Wr.size&&(r.lr()?r._r():rd(n)&&n.Jr.set("Unknown"))}function Zh(e,t){e.Yr.X(t.targetId),wd(e).br(t)}function ed(e,t){e.Yr.X(t),wd(e).vr(t)}function td(e){e.Yr=new Tu({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.Wr.get(t)||null}),wd(e).start(),e.Jr.Br()}function nd(e){return rd(e)&&!wd(e).hr()&&e.Wr.size>0}function rd(e){return 0===Ka(e).Gr.size}function id(e){e.Yr=void 0}async function sd(e){e.Wr.forEach(((t,n)=>{Zh(e,t)}))}async function od(e,t){id(e),nd(e)?(e.Jr.Kr(t),td(e)):e.Jr.set("Unknown")}async function ad(e,t,n){if(e.Jr.set("Online"),t instanceof _u&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Wr.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Wr.delete(r),e.Yr.removeTarget(r))}(e,t)}catch(n){Ua("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await cd(e,n)}else if(t instanceof wu?e.Yr.ot(t):t instanceof bu?e.Yr.dt(t):e.Yr.ut(t),!n.isEqual(cc.min()))try{const t=await vh(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Yr.gt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Wr.get(r);i&&e.Wr.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.Wr.get(t);if(!n)return;e.Wr.set(t,n.withResumeToken(yc.EMPTY_BYTE_STRING,n.snapshotVersion)),ed(e,t);const r=new sh(n.target,t,1,n.sequenceNumber);Zh(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Ua("RemoteStore","Failed to raise snapshot:",t),await cd(e,t)}}async function cd(e,t,n){if(!nh(t))throw t;e.Gr.add(1),await Xh(e),e.Jr.set("Offline"),n||(n=()=>vh(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Ua("RemoteStore","Retrying IndexedDB access"),await n(),e.Gr.delete(1),await Jh(e)}))}function ld(e,t){return t().catch((n=>cd(e,n,t)))}async function ud(e){const t=Ka(e),n=bd(t);let r=t.Qr.length>0?t.Qr[t.Qr.length-1].batchId:-1;for(;hd(t);)try{const e=await bh(t.localStore,r);if(null===e){0===t.Qr.length&&n._r();break}r=e.batchId,dd(t,e)}catch(e){await cd(t,e)}fd(t)&&pd(t)}function hd(e){return rd(e)&&e.Qr.length<10}function dd(e,t){e.Qr.push(t);const n=bd(e);n.lr()&&n.Sr&&n.Dr(t.mutations)}function fd(e){return rd(e)&&!bd(e).hr()&&e.Qr.length>0}function pd(e){bd(e).start()}async function gd(e){bd(e).kr()}async function md(e){const t=bd(e);for(const n of e.Qr)t.Dr(n.mutations)}async function yd(e,t,n){const r=e.Qr.shift(),i=ih.from(r,t,n);await ld(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await ud(e)}async function vd(e,t){t&&bd(e).Sr&&await async function(e,t){if(function(e){switch(e){default:return za();case Ha.CANCELLED:case Ha.UNKNOWN:case Ha.DEADLINE_EXCEEDED:case Ha.RESOURCE_EXHAUSTED:case Ha.INTERNAL:case Ha.UNAVAILABLE:case Ha.UNAUTHENTICATED:return!1;case Ha.INVALID_ARGUMENT:case Ha.NOT_FOUND:case Ha.ALREADY_EXISTS:case Ha.PERMISSION_DENIED:case Ha.FAILED_PRECONDITION:case Ha.ABORTED:case Ha.OUT_OF_RANGE:case Ha.UNIMPLEMENTED:case Ha.DATA_LOSS:return!0}}(n=t.code)&&n!==Ha.ABORTED){const n=e.Qr.shift();bd(e).wr(),await ld(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await ud(e)}var n}(e,t),fd(e)&&pd(e)}function wd(e){return e.Xr||(e.Xr=function(e,t,n){const r=Ka(e);return r.Fr(),new qh(t,r.ir,r.authCredentials,r.appCheckCredentials,r.k,n)
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
     */}(e.datastore,e.asyncQueue,{Di:sd.bind(null,e),Ni:od.bind(null,e),Pr:ad.bind(null,e)}),e.zr.push((async t=>{t?(e.Xr.wr(),nd(e)?td(e):e.Jr.set("Unknown")):(await e.Xr.stop(),id(e))}))),e.Xr}function bd(e){return e.Zr||(e.Zr=function(e,t,n){const r=Ka(e);return r.Fr(),new Kh(t,r.ir,r.authCredentials,r.appCheckCredentials,r.k,n)}(e.datastore,e.asyncQueue,{Di:gd.bind(null,e),Ni:vd.bind(null,e),Nr:md.bind(null,e),Cr:yd.bind(null,e)}),e.zr.push((async t=>{t?(e.Zr.wr(),await ud(e)):(await e.Zr.stop(),e.Qr.length>0&&(Ua("RemoteStore",`Stopping write stream with ${e.Qr.length} pending writes`),e.Qr=[]))}))),e.Zr
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
     */}class _d{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Ga,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new _d(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Wa(Ha.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ed(e,t){if(Ba("AsyncQueue",`${t}: ${e}`),nh(e))return new Wa(Ha.UNAVAILABLE,`${t}: ${e}`);throw e}
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
     */class Td{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Ac.comparator(t.key,n.key):(e,t)=>Ac.comparator(e.key,t.key),this.keyedMap=hu(),this.sortedSet=new ru(this.comparator)}static emptySet(e){return new Td(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Td))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Td;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
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
     */class kd{constructor(){this.eo=new ru(Ac.comparator)}track(e){const t=e.doc.key,n=this.eo.get(t);n?0!==e.type&&3===n.type?this.eo=this.eo.insert(t,e):3===e.type&&1!==n.type?this.eo=this.eo.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.eo=this.eo.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.eo=this.eo.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.eo=this.eo.remove(t):1===e.type&&2===n.type?this.eo=this.eo.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.eo=this.eo.insert(t,{type:2,doc:e.doc}):za():this.eo=this.eo.insert(t,e)}no(){const e=[];return this.eo.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Id{constructor(e,t,n,r,i,s,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const i=[];return t.forEach((e=>{i.push({type:0,doc:e})})),new Id(e,t,Td.emptySet(t),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ml(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
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
     */class Sd{constructor(){this.so=void 0,this.listeners=[]}}class Ad{constructor(){this.queries=new dh((e=>yl(e)),ml),this.onlineState="Unknown",this.io=new Set}}function Cd(e,t){const n=Ka(e);let r=!1;for(const e of t){const t=e.query,i=n.queries.get(t);if(i){for(const t of i.listeners)t.oo(e)&&(r=!0);i.so=e}}r&&Nd(n)}function Rd(e,t,n){const r=Ka(e),i=r.queries.get(t);if(i)for(const e of i.listeners)e.onError(n);r.queries.delete(t)}function Nd(e){e.io.forEach((e=>{e.next()}))}class Dd{constructor(e,t,n){this.query=e,this.ao=t,this.co=!1,this.uo=null,this.onlineState="Unknown",this.options=n||{}}oo(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Id(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.co?this.ho(e)&&(this.ao.next(e),t=!0):this.lo(e,this.onlineState)&&(this.fo(e),t=!0),this.uo=e,t}onError(e){this.ao.error(e)}ro(e){this.onlineState=e;let t=!1;return this.uo&&!this.co&&this.lo(this.uo,e)&&(this.fo(this.uo),t=!0),t}lo(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return!(this.options.wo&&n||e.docs.isEmpty()&&"Offline"!==t)}ho(e){if(e.docChanges.length>0)return!0;const t=this.uo&&this.uo.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}fo(e){e=Id.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.co=!0,this.ao.next(e)}}
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
     */class xd{constructor(e){this.key=e}}class Od{constructor(e){this.key=e}}class Pd{constructor(e,t){this.query=e,this.To=t,this.Eo=null,this.current=!1,this.Io=pu(),this.mutatedKeys=pu(),this.Ao=bl(e),this.Ro=new Td(this.Ao)}get Po(){return this.To}bo(e,t){const n=t?t.vo:new kd,r=t?t.Ro:this.Ro;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=dl(this.query)&&r.size===this.query.limit?r.last():null,c=fl(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const l=r.get(e),u=wl(this.query,t)?t:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.Vo(l,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Ao(u,a)>0||c&&this.Ao(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(u?(s=s.add(u),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),dl(this.query)||fl(this.query))for(;s.size>this.query.limit;){const e=dl(this.query)?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Ro:s,vo:n,Bn:o,mutatedKeys:i}}Vo(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Ro;this.Ro=e.Ro,this.mutatedKeys=e.mutatedKeys;const i=e.vo.no();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return za()}};return n(e)-n(t)}
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
     */(e.type,t.type)||this.Ao(e.doc,t.doc))),this.So(n);const s=t?this.Do():[],o=0===this.Io.size&&this.current?1:0,a=o!==this.Eo;return this.Eo=o,0!==i.length||a?{snapshot:new Id(this.query,e.Ro,r,i,e.mutatedKeys,0===o,a,!1),Co:s}:{Co:s}}ro(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new kd,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(e){return!this.To.has(e)&&!!this.Ro.has(e)&&!this.Ro.get(e).hasLocalMutations}So(e){e&&(e.addedDocuments.forEach((e=>this.To=this.To.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.To=this.To.delete(e))),this.current=e.current)}Do(){if(!this.current)return[];const e=this.Io;this.Io=pu(),this.Ro.forEach((e=>{this.No(e.key)&&(this.Io=this.Io.add(e.key))}));const t=[];return e.forEach((e=>{this.Io.has(e)||t.push(new Od(e))})),this.Io.forEach((n=>{e.has(n)||t.push(new xd(n))})),t}ko(e){this.To=e.zn,this.Io=pu();const t=this.bo(e.documents);return this.applyChanges(t,!0)}xo(){return Id.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,0===this.Eo)}}class $d{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Md{constructor(e){this.key=e,this.$o=!1}}class Ld{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Fo={},this.Oo=new dh((e=>yl(e)),ml),this.Mo=new Map,this.Lo=new Set,this.Bo=new ru(Ac.comparator),this.Uo=new Map,this.qo=new kh,this.Ko={},this.jo=new Map,this.Qo=uh.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return!0===this.Wo}}async function Fd(e,t){const n=function(e){const t=Ka(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Vd.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=tf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=zd.bind(null,t),t.Fo.Pr=Cd.bind(null,t.eventManager),t.Fo.zo=Rd.bind(null,t.eventManager),t}(e);let r,i;const s=n.Oo.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.xo();else{const e=await function(e,t){const n=Ka(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.He.getTargetData(e,t).next((i=>i?(r=i,th.resolve(r)):n.He.allocateTargetId(e).next((i=>(r=new sh(t,i,0,e.currentSequenceNumber),n.He.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.qn.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qn=n.qn.insert(e.targetId,e),n.Kn.set(t,e.targetId)),e}))}(n.localStore,gl(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await async function(e,t,n,r){e.Go=(t,n,r)=>async function(e,t,n,r){let i=t.view.bo(n);i.Bn&&(i=await Eh(e.localStore,t.query,!1).then((({documents:e})=>t.view.bo(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return Xd(e,t.targetId,o.Co),o.snapshot}(e,t,n,r);const i=await Eh(e.localStore,t,!0),s=new Pd(t,i.zn),o=s.bo(i.documents),a=vu.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=s.applyChanges(o,e.isPrimaryClient,a);Xd(e,n,c.Co);const l=new $d(t,n,s);return e.Oo.set(t,l),e.Mo.has(n)?e.Mo.get(n).push(t):e.Mo.set(n,[t]),c.snapshot}(n,t,r,"current"===s),n.isPrimaryClient&&Yh(n.remoteStore,e)}return i}async function Ud(e,t){const n=Ka(e),r=n.Oo.get(t),i=n.Mo.get(r.targetId);if(i.length>1)return n.Mo.set(r.targetId,i.filter((e=>!ml(e,t)))),void n.Oo.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await _h(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Qh(n.remoteStore,r.targetId),Gd(n,r.targetId)})).catch(hh)):(Gd(n,r.targetId),await _h(n.localStore,r.targetId,!0))}async function Bd(e,t,n){const r=function(e){const t=Ka(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=qd.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Kd.bind(null,t),t}(e);try{const e=await function(e,t){const n=Ka(e),r=ac.now(),i=t.reduce(((e,t)=>e.add(t.key)),pu());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>n.Wn.vn(e,i).next((i=>{s=i;const o=[];for(const e of t){const t=zl(e,s.get(e.key));null!=t&&o.push(new Wl(e.key,t,jc(t.value.mapValue),Fl.exists(!0)))}return n.An.addMutationBatch(e,r,o,t)})))).then((e=>(e.applyToLocalDocumentSet(s),{batchId:e.batchId,changes:s})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Ko[e.currentUser.toKey()];r||(r=new ru(sc)),r=r.insert(t,n),e.Ko[e.currentUser.toKey()]=r}(r,e.batchId,n),await Zd(r,e.changes),await ud(r.remoteStore)}catch(e){const t=Ed(e,"Failed to persist write");n.reject(t)}}async function Vd(e,t){const n=Ka(e);try{const e=await wh(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Uo.get(t);r&&(qa(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.$o=!0:e.modifiedDocuments.size>0?qa(r.$o):e.removedDocuments.size>0&&(qa(r.$o),r.$o=!1))})),await Zd(n,e,t)}catch(e){await hh(e)}}function jd(e,t,n){const r=Ka(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Oo.forEach(((n,r)=>{const i=r.view.ro(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=Ka(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.ro(t)&&(r=!0)})),r&&Nd(n)}(r.eventManager,t),e.length&&r.Fo.Pr(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function zd(e,t,n){const r=Ka(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Uo.get(t),s=i&&i.key;if(s){let e=new ru(Ac.comparator);e=e.insert(s,zc.newNoDocument(s,cc.min()));const n=pu().add(s),i=new yu(cc.min(),new Map,new ou(sc),e,n);await Vd(r,i),r.Bo=r.Bo.remove(s),r.Uo.delete(t),Qd(r)}else await _h(r.localStore,t,!1).then((()=>Gd(r,t,n))).catch(hh)}async function qd(e,t){const n=Ka(e),r=t.batch.batchId;try{const e=await function(e,t){const n=Ka(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Qn.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=th.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);qa(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&r.addEntry(t,n.commitVersion))}))})),o.next((()=>e.An.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.An.performConsistencyCheck(e))).next((()=>n.Wn.vn(e,r)))}))}(n.localStore,t);Wd(n,r,null),Hd(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Zd(n,e)}catch(e){await hh(e)}}async function Kd(e,t,n){const r=Ka(e);try{const e=await function(e,t){const n=Ka(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.An.lookupMutationBatch(e,t).next((t=>(qa(null!==t),r=t.keys(),n.An.removeMutationBatch(e,t)))).next((()=>n.An.performConsistencyCheck(e))).next((()=>n.Wn.vn(e,r)))}))}(r.localStore,t);Wd(r,t,n),Hd(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Zd(r,e)}catch(n){await hh(n)}}function Hd(e,t){(e.jo.get(t)||[]).forEach((e=>{e.resolve()})),e.jo.delete(t)}function Wd(e,t,n){const r=Ka(e);let i=r.Ko[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Ko[r.currentUser.toKey()]=i}}function Gd(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Mo.get(t))e.Oo.delete(r),n&&e.Fo.zo(r,n);e.Mo.delete(t),e.isPrimaryClient&&e.qo.us(t).forEach((t=>{e.qo.containsKey(t)||Jd(e,t)}))}function Jd(e,t){e.Lo.delete(t.path.canonicalString());const n=e.Bo.get(t);null!==n&&(Qh(e.remoteStore,n),e.Bo=e.Bo.remove(t),e.Uo.delete(n),Qd(e))}function Xd(e,t,n){for(const r of n)r instanceof xd?(e.qo.addReference(r.key,t),Yd(e,r)):r instanceof Od?(Ua("SyncEngine","Document no longer in limbo: "+r.key),e.qo.removeReference(r.key,t),e.qo.containsKey(r.key)||Jd(e,r.key)):za()}function Yd(e,t){const n=t.key,r=n.path.canonicalString();e.Bo.get(n)||e.Lo.has(r)||(Ua("SyncEngine","New document in limbo: "+n),e.Lo.add(r),Qd(e))}function Qd(e){for(;e.Lo.size>0&&e.Bo.size<e.maxConcurrentLimboResolutions;){const t=e.Lo.values().next().value;e.Lo.delete(t);const n=new Ac(fc.fromString(t)),r=e.Qo.next();e.Uo.set(r,new Md(n)),e.Bo=e.Bo.insert(n,r),Yh(e.remoteStore,new sh(gl(hl(n.path)),r,2,nc.I))}}async function Zd(e,t,n){const r=Ka(e),i=[],s=[],o=[];r.Oo.isEmpty()||(r.Oo.forEach(((e,a)=>{o.push(r.Go(a,t,n).then((e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),i.push(e);const t=ph.$n(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.Fo.Pr(i),await async function(e,t){const n=Ka(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>th.forEach(t,(t=>th.forEach(t.kn,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>th.forEach(t.xn,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!nh(e))throw e;Ua("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.qn.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.qn=n.qn.insert(t,i)}}}(r.localStore,s))}async function ef(e,t){const n=Ka(e);if(!n.currentUser.isEqual(t)){Ua("SyncEngine","User change. New user:",t.toKey());const e=await yh(n.localStore,t);n.currentUser=t,function(e,t){e.jo.forEach((e=>{e.forEach((e=>{e.reject(new Wa(Ha.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),e.jo.clear()}(n),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Zd(n,e.Gn)}}function tf(e,t){const n=Ka(e),r=n.Uo.get(t);if(r&&r.$o)return pu().add(r.key);{let e=pu();const r=n.Mo.get(t);if(!r)return e;for(const t of r){const r=n.Oo.get(t);e=e.unionWith(r.view.Po)}return e}}class nf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.k=Vh(e.databaseInfo.databaseId),this.sharedClientState=this.Jo(e),this.persistence=this.Yo(e),await this.persistence.start(),this.gcScheduler=this.Xo(e),this.localStore=this.Zo(e)}Xo(e){return null}Zo(e){return function(e,t,n,r){return new mh(e,t,n,r)}(this.persistence,new gh,e.initialUser,this.k)}Yo(e){return new Nh(xh.ks,this.k)}Jo(e){return new Ph}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class rf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>jd(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=ef.bind(null,this.syncEngine),await async function(e,t){const n=Ka(e);t?(n.Gr.delete(2),await Jh(n)):t||(n.Gr.add(2),await Xh(n),n.Jr.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Ad}createDatastore(e){const t=Vh(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Uh(r));var r;return function(e,t,n,r){return new Hh(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>jd(this.syncEngine,e,0),s=Mh.bt()?new Mh:new $h,new Gh(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new Ld(e,t,n,r,i,s);return o&&(a.Wo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Ka(e);Ua("RemoteStore","RemoteStore shutting down."),t.Gr.add(5),await Xh(t),t.Hr.shutdown(),t.Jr.set("Unknown")}(this.remoteStore)}}
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
     */class sf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ea(this.observer.next,e)}error(e){this.observer.error?this.ea(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}na(){this.muted=!0}ea(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
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
     */class of{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=$a.UNAUTHENTICATED,this.clientId=ic.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Ua("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(()=>Promise.resolve()))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Wa(Ha.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ga;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Ed(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function af(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){return e.offlineComponents||(Ua("FirestoreClient","Using default OfflineComponentProvider"),await async function(e,t){e.asyncQueue.verifyOperationInProgress(),Ua("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await yh(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}(e,new nf)),e.offlineComponents}(e);Ua("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>async function(e,t){const n=Ka(e);n.asyncQueue.verifyOperationInProgress(),Ua("RemoteStore","RemoteStore received new credentials");const r=rd(n);n.Gr.add(3),await Xh(n),r&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Gr.delete(3),await Jh(n)}(t.remoteStore,e))),e.onlineComponents=t}async function cf(e){return e.onlineComponents||(Ua("FirestoreClient","Using default OnlineComponentProvider"),await af(e,new rf)),e.onlineComponents}async function lf(e){const t=await cf(e),n=t.eventManager;return n.onListen=Fd.bind(null,t.syncEngine),n.onUnlisten=Ud.bind(null,t.syncEngine),n}function uf(e,t,n={}){const r=new Ga;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new sf({next:s=>{t.enqueueAndForget((()=>async function(e,t){const n=Ka(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new Wa(Ha.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new Wa(Ha.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new Dd(hl(n.path),s,{includeMetadataChanges:!0,wo:!0});return async function(e,t){const n=Ka(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Sd),i)try{s.so=await n.onListen(r)}catch(e){const n=Ed(e,`Initialization of query '${vl(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.ro(n.onlineState),s.so&&t.oo(s.so)&&Nd(n)}(e,o)}(await lf(e),e.asyncQueue,t,n,r))),r.promise}class hf{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class df{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof df&&e.projectId===this.projectId&&e.database===this.database}}
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
     */const ff=new Map;
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
     */function pf(e,t,n){if(!n)throw new Wa(Ha.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function gf(e){if(!Ac.isDocumentKey(e))throw new Wa(Ha.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function mf(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":za()}function yf(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Wa(Ha.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=mf(e);throw new Wa(Ha.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
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
     */class vf{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new Wa(Ha.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Wa(Ha.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new Wa(Ha.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
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
     */class wf{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vf({}),this._settingsFrozen=!1,e instanceof df?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Wa(Ha.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new df(e.options.projectId)}(e))}get app(){if(!this._app)throw new Wa(Ha.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Wa(Ha.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vf(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Xa;switch(e.type){case"gapi":const t=e.client;return qa(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new Za(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new Wa(Ha.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=ff.get(e);t&&(Ua("ComponentProvider","Removing Datastore"),ff.delete(e),t.terminate())}(this),Promise.resolve()}}
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
     */class bf{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ef(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new bf(this.firestore,e,this._key)}}class _f{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new _f(this.firestore,e,this._query)}}class Ef extends _f{constructor(e,t,n){super(e,t,hl(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new bf(this.firestore,null,new Ac(e))}withConverter(e){return new Ef(this.firestore,e,this._path)}}function Tf(e,t,...n){if(e=Dt(e),1===arguments.length&&(t=ic.A()),pf("doc","path",t),e instanceof wf){const r=fc.fromString(t,...n);return gf(r),new bf(e,null,new Ac(r))}{if(!(e instanceof bf||e instanceof Ef))throw new Wa(Ha.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(fc.fromString(t,...n));return gf(r),new bf(e.firestore,e instanceof Ef?e.converter:null,new Ac(r))}}
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
     */class kf{constructor(){this.ma=Promise.resolve(),this.ga=[],this.ya=!1,this.pa=[],this.Ta=null,this.Ea=!1,this.Ia=!1,this.Aa=[],this.ur=new jh(this,"async_queue_retry"),this.Ra=()=>{const e=Bh();e&&Ua("AsyncQueue","Visibility state changed to "+e.visibilityState),this.ur.er()};const e=Bh();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Ra)}get isShuttingDown(){return this.ya}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pa(),this.ba(e)}enterRestrictedMode(e){if(!this.ya){this.ya=!0,this.Ia=e||!1;const t=Bh();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Ra)}}enqueue(e){if(this.Pa(),this.ya)return new Promise((()=>{}));const t=new Ga;return this.ba((()=>this.ya&&this.Ia?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.ga.push(e),this.va())))}async va(){if(0!==this.ga.length){try{await this.ga[0](),this.ga.shift(),this.ur.reset()}catch(e){if(!nh(e))throw e;Ua("AsyncQueue","Operation failed with retryable error: "+e)}this.ga.length>0&&this.ur.Zi((()=>this.va()))}}ba(e){const t=this.ma.then((()=>(this.Ea=!0,e().catch((e=>{this.Ta=e,this.Ea=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
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
     */(e);throw Ba("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Ea=!1,e))))));return this.ma=t,t}enqueueAfterDelay(e,t,n){this.Pa(),this.Aa.indexOf(e)>-1&&(t=0);const r=_d.createAndSchedule(this,e,t,n,(e=>this.Va(e)));return this.pa.push(r),r}Pa(){this.Ta&&za()}verifyOperationInProgress(){}async Sa(){let e;do{e=this.ma,await e}while(e!==this.ma)}Da(e){for(const t of this.pa)if(t.timerId===e)return!0;return!1}Ca(e){return this.Sa().then((()=>{this.pa.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.pa)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Sa()}))}Na(e){this.Aa.push(e)}Va(e){const t=this.pa.indexOf(e);this.pa.splice(t,1)}}class If extends wf{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new kf,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Af(this),this._firestoreClient.terminate()}}function Sf(e){return e._firestoreClient||Af(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Af(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new hf(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new of(e._authCredentials,e._appCheckCredentials,e._queue,r)}
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
     */class Cf{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Wa(Ha.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gc(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
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
     */class Rf{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rf(yc.fromBase64String(e))}catch(e){throw new Wa(Ha.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Rf(yc.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
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
     */class Nf{constructor(e){this._methodName=e}}
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
     */class Df{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Wa(Ha.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Wa(Ha.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return sc(this._lat,e._lat)||sc(this._long,e._long)}}
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
     */const xf=/^__.*__$/;class Of{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Wl(e,this.data,this.fieldMask,t,this.fieldTransforms):new Hl(e,this.data,t,this.fieldTransforms)}}class Pf{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Wl(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function $f(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw za()}}class Mf{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.k=n,this.ignoreUndefinedProperties=r,void 0===i&&this.ka(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get xa(){return this.settings.xa}$a(e){return new Mf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Fa(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.$a({path:n,Oa:!1});return r.Ma(e),r}La(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.$a({path:n,Oa:!1});return r.ka(),r}Ba(e){return this.$a({path:void 0,Oa:!0})}Ua(e){return Gf(e,this.settings.methodName,this.settings.qa||!1,this.path,this.settings.Ka)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}ka(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ma(this.path.get(e))}Ma(e){if(0===e.length)throw this.Ua("Document fields must not be empty");if($f(this.xa)&&xf.test(e))throw this.Ua('Document fields cannot begin and end with "__"')}}class Lf{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.k=n||Vh(e)}ja(e,t,n,r=!1){return new Mf({xa:e,methodName:t,Ka:n,path:gc.emptyPath(),Oa:!1,qa:r},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function Ff(e){const t=e._freezeSettings(),n=Vh(e._databaseId);return new Lf(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Uf(e,t,n,r,i,s={}){const o=e.ja(s.merge||s.mergeFields?2:0,t,n,i);qf("Data must be an object, but it was:",o,r);const a=jf(r,o);let c,l;if(s.merge)c=new mc(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=Kf(t,r,n);if(!o.contains(i))throw new Wa(Ha.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Jf(e,i)||e.push(i)}c=new mc(e),l=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,l=o.fieldTransforms;return new Of(new Vc(a),c,l)}class Bf extends Nf{_toFieldTransform(e){if(2!==e.xa)throw 1===e.xa?e.Ua(`${this._methodName}() can only appear at the top level of your update data`):e.Ua(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Bf}}function Vf(e,t){if(zf(e=Dt(e)))return qf("Unsupported field value:",t,e),jf(e,t);if(e instanceof Nf)return function(e,t){if(!$f(t.xa))throw t.Ua(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Ua(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Oa&&4!==t.xa)throw t.Ua("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Vf(i,t.Ba(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Dt(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return kl(t.k,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=ac.fromDate(e);return{timestampValue:Ru(t.k,n)}}if(e instanceof ac){const n=new ac(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Ru(t.k,n)}}if(e instanceof Df)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Rf)return{bytesValue:Nu(t.k,e._byteString)};if(e instanceof bf){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Ua(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Ou(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Ua(`Unsupported field value: ${mf(e)}`)}(e,t)}function jf(e,t){const n={};return hc(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):uc(e,((e,r)=>{const i=Vf(r,t.Fa(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function zf(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof ac||e instanceof Df||e instanceof Rf||e instanceof bf||e instanceof Nf)}function qf(e,t,n){if(!zf(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=mf(n);throw"an object"===r?t.Ua(e+" a custom object"):t.Ua(e+" "+r)}}function Kf(e,t,n){if((t=Dt(t))instanceof Cf)return t._internalPath;if("string"==typeof t)return Wf(e,t);throw Gf("Field path arguments must be of type string or FieldPath.",e,!1,void 0,n)}const Hf=new RegExp("[~\\*/\\[\\]]");function Wf(e,t,n){if(t.search(Hf)>=0)throw Gf(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Cf(...t.split("."))._internalPath}catch(r){throw Gf(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Gf(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Wa(Ha.INVALID_ARGUMENT,a+e+c)}function Jf(e,t){return e.some((e=>e.isEqual(t)))}
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
     */class Xf{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new bf(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Yf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Qf("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Yf extends Xf{data(){return super.data()}}function Qf(e,t){return"string"==typeof t?Wf(e,t):t instanceof Cf?t._internalPath:t._delegate._internalPath}
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
     */class Zf{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ep extends Xf{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new tp(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Qf("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class tp extends ep{data(e={}){return super.data(e)}}
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
function np(e){e=yf(e,bf);const t=yf(e.firestore,If);return uf(Sf(t),e._key).then((n=>function(e,t,n){const r=n.docs.get(t._key),i=new rp(e);return new ep(e,i,t._key,r,new Zf(n.hasPendingWrites,n.fromCache),t.converter)}(t,e,n)))}class rp extends class{convertValue(e,t="none"){switch(Cc(e)){case 0:return null;case 1:return e.booleanValue;case 2:return bc(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(_c(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw za()}}convertObject(e,t){const n={};return uc(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Df(bc(e.latitude),bc(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Tc(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(kc(e));default:return null}}convertTimestamp(e){const t=wc(e);return new ac(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=fc.fromString(e);qa(eh(n));const r=new df(n.get(1),n.get(3)),i=new Ac(n.popFirst(5));return r.isEqual(t)||Ba(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
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
     */{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rf(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new bf(this.firestore,null,t)}}function ip(e,t,n,...r){e=yf(e,bf);const i=yf(e.firestore,If),s=Ff(i);let o;return o="string"==typeof(t=Dt(t))||t instanceof Cf?function(e,t,n,r,i,s){const o=e.ja(1,t,n),a=[Kf(t,r,n)],c=[i];if(s.length%2!=0)throw new Wa(Ha.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)a.push(Kf(t,s[e])),c.push(s[e+1]);const l=[],u=Vc.empty();for(let e=a.length-1;e>=0;--e)if(!Jf(l,a[e])){const t=a[e];let n=c[e];n=Dt(n);const r=o.La(t);if(n instanceof Bf)l.push(t);else{const e=Vf(n,r);null!=e&&(l.push(t),u.set(t,e))}}const h=new mc(l);return new Pf(u,h,o.fieldTransforms)}(s,"updateDoc",e._key,t,n,r):function(e,t,n,r){const i=e.ja(1,t,n);qf("Data must be an object, but it was:",i,r);const s=[],o=Vc.empty();uc(r,((e,r)=>{const a=Wf(t,e,n);r=Dt(r);const c=i.La(a);if(r instanceof Bf)s.push(a);else{const e=Vf(r,c);null!=e&&(s.push(a),o.set(a,e))}}));const a=new mc(s);return new Pf(o,a,i.fieldTransforms)}(s,"updateDoc",e._key,t),sp(i,[o.toMutation(e._key,Fl.exists(!0))])}function sp(e,t){return function(e,t){const n=new Ga;return e.asyncQueue.enqueueAndForget((async()=>Bd(await function(e){return cf(e).then((e=>e.syncEngine))}(e),t,n))),n.promise}(Sf(e),t)}
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
function op(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function ap(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}!function(e,t=!0){Ma="9.6.1",Yt(new xt("firestore",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=new If(r,new Ya(e.getProvider("auth-internal")),new tc(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),i._setSettings(n),i}),"PUBLIC")),rn(Pa,"3.4.1",e),rn(Pa,"3.4.1","esm2017")}();const cp=ap,lp=new _t("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),up=new Vt("@firebase/auth");function hp(e,...t){up.logLevel<=Mt.ERROR&&up.error(`Auth (9.6.1): ${e}`,...t)}
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
     */function dp(e,...t){throw pp(e,...t)}function fp(e,...t){return pp(e,...t)}function pp(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return lp.create(e,...t)}function gp(e,t,...n){if(!e)throw pp(t,...n)}function mp(e){const t="INTERNAL ASSERTION FAILED: "+e;throw hp(t),new Error(t)}function yp(e,t){e||mp(t)}
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
     */const vp=new Map;function wp(e){yp(e instanceof Function,"Expected a class definition");let t=vp.get(e);return t?(yp(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,vp.set(e,t),t)}
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
function bp(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function _p(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
     */function Ep(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==_p()&&"https:"!==_p()&&!mt()&&!("connection"in navigator)||navigator.onLine}
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
class Tp{constructor(e,t){this.shortDelay=e,this.longDelay=t,yp(t>e,"Short delay should be less than long delay!"),this.isMobile=gt()||yt()}get(){return Ep()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
     */function kp(e,t){yp(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
     */class Ip{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void mp("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void mp("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void mp("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
     */const Sp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Ap=new Tp(3e4,6e4);
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
     */function Cp(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Rp(e,t,n,r,i={}){return Np(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=It(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Ip.fetch()(xp(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Np(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Sp),t);try{const t=new Op(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Pp(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Pp(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Pp(e,"email-already-in-use",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw function(e,t,n){const r=Object.assign(Object.assign({},cp()),{[t]:n});return new _t("auth","Firebase",r).create(t,{appName:e.name})}(e,a,o);dp(e,a)}}catch(t){if(t instanceof bt)throw t;dp(e,"network-request-failed")}}async function Dp(e,t,n,r,i={}){const s=await Rp(e,t,n,r,i);return"mfaPendingCredential"in s&&dp(e,"multi-factor-auth-required",{_serverResponse:s}),s}function xp(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?kp(e.config,i):`${e.config.apiScheme}://${i}`}class Op{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(fp(this.auth,"timeout"))),Ap.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Pp(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=fp(e,t,r);return i.customData._tokenResponse=n,i}
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
function $p(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}function Mp(e){return 1e3*Number(e)}function Lp(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return hp("JWT malformed, contained fewer than 3 sections"),null;try{const e=function(e){try{return dt.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null}(n);return e?JSON.parse(e):(hp("Failed to decode base64 JWT payload"),null)}catch(e){return hp("Caught error parsing JWT payload as JSON",e),null}}
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
async function Fp(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof bt&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
     */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Up{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
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
     */class Bp{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=$p(this.lastLoginAt),this.creationTime=$p(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
     */async function Vp(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Fp(e,async function(e,t){return Rp(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));gp(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=op(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const u=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Bp(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
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
class jp{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){gp(e.idToken,"internal-error"),gp(void 0!==e.idToken,"internal-error"),gp(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Lp(e);return gp(t,"internal-error"),gp(void 0!==t.exp,"internal-error"),gp(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return gp(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
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
async function(e,t){const n=await Np(e,{},(async()=>{const n=It({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=xp(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Ip.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new jp;return n&&(gp("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(gp("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(gp("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new jp,this.toJSON())}_performRefresh(){return mp("not implemented")}}
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
     */function zp(e,t){gp("string"==typeof e||void 0===e,"internal-error",{appName:t})}class qp{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=op(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Up(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new Bp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Fp(this,this.stsTokenManager.getToken(this.auth,e));return gp(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Dt(e),r=await n.getIdToken(t),i=Lp(r);gp(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:$p(Mp(i.auth_time)),issuedAtTime:$p(Mp(i.iat)),expirationTime:$p(Mp(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Dt(e);await Vp(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(gp(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new qp(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){gp(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Vp(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Fp(this,async function(e,t){return Rp(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:_,stsTokenManager:E}=t;gp(v&&E,e,"internal-error");const T=jp.fromJSON(this.name,E);gp("string"==typeof v,e,"internal-error"),zp(u,e.name),zp(h,e.name),gp("boolean"==typeof w,e,"internal-error"),gp("boolean"==typeof b,e,"internal-error"),zp(d,e.name),zp(f,e.name),zp(p,e.name),zp(g,e.name),zp(m,e.name),zp(y,e.name);const k=new qp({uid:v,auth:e,email:h,emailVerified:w,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:m,lastLoginAt:y});return _&&Array.isArray(_)&&(k.providerData=_.map((e=>Object.assign({},e)))),g&&(k._redirectEventId=g),k}static async _fromIdTokenResponse(e,t,n=!1){const r=new jp;r.updateFromServerResponse(t);const i=new qp({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Vp(i),i}}
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
     */class Kp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Kp.type="NONE";const Hp=Kp;
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
     */function Wp(e,t,n){return`firebase:${e}:${t}:${n}`}class Gp{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Wp(this.userKey,r.apiKey,i),this.fullPersistenceKey=Wp("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qp._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Gp(wp(Hp),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||wp(Hp);const s=Wp(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const r=qp._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new Gp(i,e,n)):new Gp(i,e,n)}}
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
     */function Jp(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Zp(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Xp(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(tg(t))return"Blackberry";if(ng(t))return"Webos";if(Yp(t))return"Safari";if((t.includes("chrome/")||Qp(t))&&!t.includes("edge/"))return"Chrome";if(eg(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Xp(e=pt()){return/firefox\//i.test(e)}function Yp(e=pt()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Qp(e=pt()){return/crios\//i.test(e)}function Zp(e=pt()){return/iemobile/i.test(e)}function eg(e=pt()){return/android/i.test(e)}function tg(e=pt()){return/blackberry/i.test(e)}function ng(e=pt()){return/webos/i.test(e)}function rg(e=pt()){return/iphone|ipad|ipod/i.test(e)}function ig(e=pt()){return rg(e)||eg(e)||ng(e)||tg(e)||/windows phone/i.test(e)||Zp(e)}
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
function sg(e,t=[]){let n;switch(e){case"Browser":n=Jp(pt());break;case"Worker":n=`${Jp(pt())}-${e}`;break;default:n=e}return`${n}/JsCore/9.6.1/${t.length?t.join(","):"FirebaseCore-web"}`}
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
     */class og{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cg(this),this.idTokenSubscription=new cg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lp,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=wp(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Gp.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);r&&r!==i||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(gp(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Vp(e)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Dt(e):null;return t&&gp(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&gp(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(wp(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _t("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&wp(e)||this._popupRedirectResolver;gp(t,this,"argument-error"),this.redirectPersistenceManager=await Gp.create(this,[wp(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return gp(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return gp(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function ag(e){return Dt(e)}class cg{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new Ct(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return gp(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
     */class lg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return mp("not implemented")}_getIdTokenResponse(e){return mp("not implemented")}_linkToIdToken(e,t){return mp("not implemented")}_getReauthenticationResolver(e){return mp("not implemented")}}async function ug(e,t){return async function(e,t){return Rp(e,"POST","/v1/accounts:sendOobCode",Cp(e,t))}(e,t)}
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
class hg extends lg{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new hg(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new hg(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
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
return async function(e,t){return Dp(e,"POST","/v1/accounts:signInWithPassword",Cp(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Dp(e,"POST","/v1/accounts:signInWithEmailLink",Cp(e,t))}(e,{email:this._email,oobCode:this._password});default:dp(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return async function(e,t){return Rp(e,"POST","/v1/accounts:update",t)}(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Dp(e,"POST","/v1/accounts:signInWithEmailLink",Cp(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:dp(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
     */async function dg(e,t){return Dp(e,"POST","/v1/accounts:signInWithIdp",Cp(e,t))}
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
     */class fg extends lg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new fg(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):dp("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=op(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new fg(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return dg(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,dg(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,dg(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=It(t)}return e}}
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
     */class pg{constructor(e){var t,n,r,i,s,o;const a=St(At(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);gp(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=St(At(e)).link,n=t?St(At(t)).deep_link_id:null,r=St(At(e)).deep_link_id;return(r?St(At(r)).link:null)||r||n||t||e}(e);try{return new pg(t)}catch(e){return null}}}
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
     */class gg{constructor(){this.providerId=gg.PROVIDER_ID}static credential(e,t){return hg._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=pg.parseLink(t);return gp(n,"argument-error"),hg._fromEmailAndCode(e,n.code,n.tenantId)}}gg.PROVIDER_ID="password",gg.EMAIL_PASSWORD_SIGN_IN_METHOD="password",gg.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class mg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
     */class yg extends mg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
     */class vg extends yg{constructor(){super("facebook.com")}static credential(e){return fg._fromParams({providerId:vg.PROVIDER_ID,signInMethod:vg.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vg.credentialFromTaggedObject(e)}static credentialFromError(e){return vg.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return vg.credential(e.oauthAccessToken)}catch(e){return null}}}vg.FACEBOOK_SIGN_IN_METHOD="facebook.com",vg.PROVIDER_ID="facebook.com";
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
class wg extends yg{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return fg._fromParams({providerId:wg.PROVIDER_ID,signInMethod:wg.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return wg.credentialFromTaggedObject(e)}static credentialFromError(e){return wg.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return wg.credential(t,n)}catch(e){return null}}}wg.GOOGLE_SIGN_IN_METHOD="google.com",wg.PROVIDER_ID="google.com";
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
class bg extends yg{constructor(){super("github.com")}static credential(e){return fg._fromParams({providerId:bg.PROVIDER_ID,signInMethod:bg.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bg.credentialFromTaggedObject(e)}static credentialFromError(e){return bg.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return bg.credential(e.oauthAccessToken)}catch(e){return null}}}bg.GITHUB_SIGN_IN_METHOD="github.com",bg.PROVIDER_ID="github.com";
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
class _g extends yg{constructor(){super("twitter.com")}static credential(e,t){return fg._fromParams({providerId:_g.PROVIDER_ID,signInMethod:_g.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return _g.credentialFromTaggedObject(e)}static credentialFromError(e){return _g.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return _g.credential(t,n)}catch(e){return null}}}_g.TWITTER_SIGN_IN_METHOD="twitter.com",_g.PROVIDER_ID="twitter.com";
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
class Eg{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await qp._fromIdTokenResponse(e,n,r),s=Tg(n);return new Eg({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Tg(n);return new Eg({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Tg(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
     */class kg extends bt{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,kg.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new kg(e,t,n,r)}}function Ig(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw kg._fromErrorAndOperation(e,n,t,r);throw n}))}
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
async function Sg(e,t,n=!1){const r="signIn",i=await Ig(e,r,t),s=await Eg._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Ag(e,t,n){const r=ag(e),i=await
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
async function(e,t){return Dp(e,"POST","/v1/accounts:signUp",Cp(e,t))}(r,{returnSecureToken:!0,email:t,password:n}),s=await Eg._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Cg(e,t,n){return async function(e,t){return Sg(ag(e),t)}
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
     */(Dt(e),gg.credential(t,n))}async function Rg(e,t){const n=Dt(e),r={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&function(e,t,n){var r;gp((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),gp(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(gp(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(gp(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}(n.auth,r,t);const{email:i}=await ug(n.auth,r);i!==e.email&&await e.reload()}function Ng(e){return Dt(e).signOut()}const Dg="__sak";
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
     */class xg{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Dg,"1"),this.storage.removeItem(Dg),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
     */class Og extends xg{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=pt();return Yp(e)||rg(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=ig(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);vt()&&10===document.documentMode&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Og.type="LOCAL";const Pg=Og;
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
     */class $g extends xg{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}$g.type="SESSION";const Mg=$g;
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
class Lg{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Lg(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function Fg(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
     */Lg.receivers=[];class Ug{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Fg("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
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
     */function Bg(){return window}
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
function Vg(){return void 0!==Bg().WorkerGlobalScope&&"function"==typeof Bg().importScripts}
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
const jg="firebaseLocalStorageDb",zg="firebaseLocalStorage",qg="fbase_key";class Kg{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Hg(e,t){return e.transaction([zg],t?"readwrite":"readonly").objectStore(zg)}function Wg(){const e=indexedDB.open(jg,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(zg,{keyPath:qg})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(zg)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(jg);return new Kg(e).toPromise()}(),t(await Wg()))}))}))}async function Gg(e,t,n){const r=Hg(e,!0).put({[qg]:t,value:n});return new Kg(r).toPromise()}function Jg(e,t){const n=Hg(e,!0).delete(t);return new Kg(n).toPromise()}class Xg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Wg()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lg._getInstance(Vg()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Ug(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&function(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wg();return await Gg(e,Dg,"1"),await Jg(e,Dg),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Gg(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Hg(e,!1).get(t),r=await new Kg(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Jg(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Hg(e,!1).getAll();return new Kg(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Xg.type="LOCAL";const Yg=Xg;
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
     */function Qg(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=fp("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",function(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}().appendChild(r)}))}new Tp(3e4,6e4);
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
class Zg extends lg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return dg(e,this._buildIdpRequest())}_linkToIdToken(e,t){return dg(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return dg(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function em(e){return Sg(e.auth,new Zg(e),e.bypassAuthState)}function tm(e){const{auth:t,user:n}=e;return gp(n,t,"internal-error"),
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
async function(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Fp(e,Ig(r,i,t,e),n);gp(s.idToken,r,"internal-error");const o=Lp(s.idToken);gp(o,r,"internal-error");const{sub:a}=o;return gp(e.uid===a,r,"user-mismatch"),Eg._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&dp(r,"user-mismatch"),e}}(n,new Zg(e),e.bypassAuthState)}async function nm(e){const{auth:t,user:n}=e;return gp(n,t,"internal-error"),async function(e,t,n=!1){const r=await Fp(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Eg._forOperation(e,"link",r)}(n,new Zg(e),e.bypassAuthState)}
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
     */class rm{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return em;case"linkViaPopup":case"linkViaRedirect":return nm;case"reauthViaPopup":case"reauthViaRedirect":return tm;default:dp(this.auth,"internal-error")}}resolve(e){yp(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yp(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
     */const im=new Tp(2e3,1e4);class sm extends rm{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,sm.currentPopupAction&&sm.currentPopupAction.cancel(),sm.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return gp(e,this.auth,"internal-error"),e}async onExecution(){yp(1===this.filter.length,"Popup operations only handle one event");const e=Fg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(fp(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(fp(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sm.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(fp(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,im.get())};e()}}sm.currentPopupAction=null;
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
const om="pendingRedirect",am=new Map;class cm extends rm{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=am.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return Wp(om,e.config.apiKey,e.name)}(t),r=function(e){return wp(e._redirectPersistence)}(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}am.set(this.auth._key(),e)}return this.bypassAuthState||am.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function lm(e,t,n=!1){const r=ag(e),i=
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
function(e,t){return t?wp(t):(gp(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(r,t),s=new cm(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
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
     */class um{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dm(e);default:return!1}}
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
     */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!dm(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(fp(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(hm(e))}saveEventToCache(e){this.cachedEventUids.add(hm(e)),this.lastProcessedEventTime=Date.now()}}function hm(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function dm({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const fm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pm=/^https?/;async function gm(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Rp(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(mm(e))return}catch(e){}dp(e,"unauthorized-domain")}function mm(e){const t=bp(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!pm.test(n))return!1;if(fm.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
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
     */const ym=new Tp(3e4,6e4);function vm(){const e=Bg().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function wm(e){return new Promise(((t,n)=>{var r,i,s;function o(){vm(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{vm(),n(fp(e,"network-request-failed"))},timeout:ym.get()})}if(null===(i=null===(r=Bg().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Bg().gapi)||void 0===s?void 0:s.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Bg()[t]=()=>{gapi.load?o():n(fp(e,"network-request-failed"))},Qg(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw bm=null,e}))}let bm=null;
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
const _m=new Tp(5e3,15e3),Em={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Tm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function km(e){const t=e.config;gp(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?kp(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:tn},i=Tm.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${It(r).slice(1)}`}async function Im(e){const t=await function(e){return bm=bm||wm(e),bm}(e),n=Bg().gapi;return gp(n,e,"internal-error"),t.open({where:document.body,url:km(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Em,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=fp(e,"network-request-failed"),s=Bg().setTimeout((()=>{r(i)}),_m.get());function o(){Bg().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
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
     */const Sm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Am{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Cm(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Sm),{width:r.toString(),height:i.toString(),top:s,left:o}),l=pt().toLowerCase();n&&(a=Qp(l)?"_blank":n),Xp(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=pt()){var t;return rg(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
     */(t||"",a),new Am(null);const h=window.open(t||"",a,u);gp(h,e,"popup-blocked");try{h.focus()}catch(e){}return new Am(h)}const Rm="__/auth/handler",Nm="emulator/auth/handler";function Dm(e,t,n,r,i,s){gp(e.config.authDomain,e,"auth-domain-config-required"),gp(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:tn,eventId:i};if(t instanceof mg){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof yg){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${Rm}`;return kp(e,Nm)}
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
     */(e)}?${It(a).slice(1)}`}const xm="webStorageSupport";const Om=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Mg,this._completeRedirectFn=lm}async _openPopup(e,t,n,r){var i;yp(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Cm(e,Dm(e,t,n,bp(),r),Fg())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=Dm(e,t,n,bp(),r),Bg().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(yp(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Im(e),n=new um(e);return t.register("authEvent",(t=>{gp(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(xm,{type:xm},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),dp(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=gm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ig()||Yp()||rg()}};var Pm,$m="@firebase/auth",Mm="0.19.4";
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
class Lm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){gp(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
function Fm(e=nn()){const t=Qt(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=Qt(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(Tt(n.getOptions(),null!=t?t:{}))return e;dp(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Om,persistence:[Yg,Pg,Mg]})}Pm="Browser",Yt(new xt("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:i}=n.options;return(e=>{gp(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),gp(!(null==i?void 0:i.includes(":")),"argument-error",{appName:e.name});const n={apiKey:r,authDomain:i,clientPlatform:Pm,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sg(Pm)},s=new og(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(wp);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Yt(new xt("auth-internal",(e=>(e=>new Lm(e))(ag(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),rn($m,Mm,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Pm)),rn($m,Mm,"esm2017");
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
const Um=new Map,Bm={activated:!1,tokenObservers:[]},Vm={initialized:!1,enabled:!1};function jm(e){return Um.get(e)||Bm}function zm(e,t){Um.set(e,t)}function qm(){return Vm}
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
     */const Km="https://content-firebaseappcheck.googleapis.com/v1beta",Hm=3e4,Wm=96e4,Gm=864e5;
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
class Jm{constructor(e,t,n,r,i){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=n,this.lowerBound=r,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=r,r>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch((()=>{}))}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new ft,await function(e){return new Promise((t=>{setTimeout(t,e)}))}
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
     */(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new ft,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch((()=>{}))}catch(e){this.retryPolicy(e)?this.process(!1).catch((()=>{})):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const e=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),e}}}const Xm=new _t("appCheck","AppCheck",{"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"});
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
function Ym(e=!1){var t;return e?null===(t=self.grecaptcha)||void 0===t?void 0:t.enterprise:self.grecaptcha}function Qm(e){if(!jm(e).activated)throw Xm.create("use-before-activation",{appName:e.name})}function Zm(e){const t=Math.round(e/1e3),n=Math.floor(t/86400),r=Math.floor((t-3600*n*24)/3600),i=Math.floor((t-3600*n*24-3600*r)/60),s=t-3600*n*24-3600*r-60*i;let o="";return n&&(o+=ey(n)+"d:"),r&&(o+=ey(r)+"h:"),o+=ey(i)+"m:"+ey(s)+"s",o}function ey(e){return 0===e?"00":e>=10?e.toString():"0"+e}
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
     */async function ty({url:e,body:t},n){const r={"Content-Type":"application/json"},i=n.getImmediate({optional:!0});i&&(r["X-Firebase-Client"]=i.getPlatformInfoString());const s={method:"POST",body:JSON.stringify(t),headers:r};let o,a;try{o=await fetch(e,s)}catch(e){throw Xm.create("fetch-network-error",{originalErrorMessage:e.message})}if(200!==o.status)throw Xm.create("fetch-status-error",{httpStatus:o.status});try{a=await o.json()}catch(e){throw Xm.create("fetch-parse-error",{originalErrorMessage:e.message})}const c=a.ttl.match(/^([\d.]+)(s)$/);if(!c||!c[2]||isNaN(Number(c[1])))throw Xm.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${a.ttl}`});const l=1e3*Number(c[1]),u=Date.now();return{token:a.attestationToken,expireTimeMillis:u+l,issuedAtTimeMillis:u}}
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
const ny="firebase-app-check-store",ry="debug-token";let iy=null;function sy(){return iy||(iy=new Promise(((e,t)=>{try{const n=indexedDB.open("firebase-app-check-database",1);n.onsuccess=t=>{e(t.target.result)},n.onerror=e=>{var n;t(Xm.create("storage-open",{originalErrorMessage:null===(n=e.target.error)||void 0===n?void 0:n.message}))},n.onupgradeneeded=e=>{const t=e.target.result;if(0===e.oldVersion)t.createObjectStore(ny,{keyPath:"compositeKey"})}}catch(e){t(Xm.create("storage-open",{originalErrorMessage:e.message}))}})),iy)}async function oy(e,t){const n=(await sy()).transaction(ny,"readwrite"),r=n.objectStore(ny).put({compositeKey:e,value:t});return new Promise(((e,t)=>{r.onsuccess=t=>{e()},n.onerror=e=>{var n;t(Xm.create("storage-set",{originalErrorMessage:null===(n=e.target.error)||void 0===n?void 0:n.message}))}}))}async function ay(e){const t=(await sy()).transaction(ny,"readonly"),n=t.objectStore(ny).get(e);return new Promise(((e,r)=>{n.onsuccess=t=>{const n=t.target.result;e(n?n.value:void 0)},t.onerror=e=>{var t;r(Xm.create("storage-get",{originalErrorMessage:null===(t=e.target.error)||void 0===t?void 0:t.message}))}}))}function cy(e){return`${e.options.appId}-${e.name}`}
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
     */const ly=new Vt("@firebase/app-check");
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
     */async function uy(e){if(wt()){let t;try{t=await function(e){return ay(cy(e))}(e)}catch(e){ly.warn(`Failed to read token from IndexedDB. Error: ${e}`)}return t}}function hy(e,t){return wt()?function(e,t){return oy(cy(e),t)}(e,t).catch((e=>{ly.warn(`Failed to write token to IndexedDB. Error: ${e}`)})):Promise.resolve()}async function dy(){let e;try{e=await ay(ry)}catch(e){}if(e)return e;{const e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(e=>{const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}));return(t=e,oy(ry,t)).catch((e=>ly.warn(`Failed to persist debug token to IndexedDB. Error: ${e}`))),e}var t}
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
     */function fy(){return qm().enabled}async function py(){const e=qm();if(e.enabled&&e.token)return e.token.promise;throw Error("\n            Can't get debug token in production mode.\n        ")}function gy(){const e=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}
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
     */(),t=qm();if(t.initialized=!0,"string"!=typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN&&!0!==e.FIREBASE_APPCHECK_DEBUG_TOKEN)return;t.enabled=!0;const n=new ft;t.token=n,"string"==typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN?n.resolve(e.FIREBASE_APPCHECK_DEBUG_TOKEN):n.resolve(dy())}
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
     */const my={error:"UNKNOWN_ERROR"};function yy(e){return dt.encodeString(JSON.stringify(e),!1)}async function vy(e,t=!1){const n=e.app;Qm(n);const r=jm(n);let i,s=r.token;if(!s){const e=await r.cachedTokenPromise;e&&Ty(e)&&(s=e)}if(!t&&s&&Ty(s))return{token:s.token};let o,a=!1;if(fy()){r.exchangeTokenPromise||(r.exchangeTokenPromise=ty(function(e,t){const{projectId:n,appId:r,apiKey:i}=e.options;return{url:`${Km}/projects/${n}/apps/${r}:exchangeDebugToken?key=${i}`,body:{debug_token:t}}}(n,await py()),e.platformLoggerProvider).then((e=>(r.exchangeTokenPromise=void 0,e))),a=!0);const t=await r.exchangeTokenPromise;return await hy(n,t),zm(n,Object.assign(Object.assign({},r),{token:t})),{token:t.token}}try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().then((e=>(r.exchangeTokenPromise=void 0,e))),a=!0),s=await r.exchangeTokenPromise}catch(e){"appCheck/throttled"===e.code?ly.warn(e.message):ly.error(e),i=e}return s?(o={token:s.token},zm(n,Object.assign(Object.assign({},r),{token:s})),await hy(n,s)):o=function(e){return{token:yy(my),error:e}}
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
     */(i),a&&Ey(n,o),o}function wy(e,t,n,r){const{app:i}=e,s=jm(i),o={next:n,error:r,type:t};if(zm(i,Object.assign(Object.assign({},s),{tokenObservers:[...s.tokenObservers,o]})),s.token&&Ty(s.token)){const t=s.token;Promise.resolve().then((()=>{n({token:t.token}),_y(e)})).catch((()=>{}))}s.cachedTokenPromise.then((()=>_y(e)))}function by(e,t){const n=jm(e),r=n.tokenObservers.filter((e=>e.next!==t));0===r.length&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),zm(e,Object.assign(Object.assign({},n),{tokenObservers:r}))}function _y(e){const{app:t}=e,n=jm(t);let r=n.tokenRefresher;r||(r=function(e){const{app:t}=e;return new Jm((async()=>{let n;if(n=jm(t).token?await vy(e,!0):await vy(e),n.error)throw n.error}),(()=>!0),(()=>{const e=jm(t);if(e.token){let t=e.token.issuedAtTimeMillis+.5*(e.token.expireTimeMillis-e.token.issuedAtTimeMillis)+3e5;const n=e.token.expireTimeMillis-3e5;return t=Math.min(t,n),Math.max(0,t-Date.now())}return 0}),Hm,Wm)}(e),zm(t,Object.assign(Object.assign({},n),{tokenRefresher:r}))),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function Ey(e,t){const n=jm(e).tokenObservers;for(const e of n)try{"EXTERNAL"===e.type&&null!=t.error?e.error(t.error):e.next(t)}catch(e){}}function Ty(e){return e.expireTimeMillis-Date.now()>0}class ky{constructor(e,t){this.app=e,this.platformLoggerProvider=t}_delete(){const{tokenObservers:e}=jm(this.app);for(const t of e)by(this.app,t.next);return Promise.resolve()}}const Iy="https://www.google.com/recaptcha/api.js";function Sy(e,t){const n=jm(e),r=new ft;zm(e,Object.assign(Object.assign({},n),{reCAPTCHAState:{initialized:r}}));const i=function(e){const t=`fire_app_check_${e.name}`,n=document.createElement("div");return n.id=t,n.style.display="none",document.body.appendChild(n),t}(e),s=Ym(!1);return s?Ay(e,t,s,i,r):function(e){const t=document.createElement("script");t.src=Iy,t.onload=e,document.head.appendChild(t)}
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
     */((()=>{const n=Ym(!1);if(!n)throw new Error("no recaptcha");Ay(e,t,n,i,r)})),r.promise}function Ay(e,t,n,r,i){n.ready((()=>{!function(e,t,n,r){const i=n.render(r,{sitekey:t,size:"invisible"}),s=jm(e);zm(e,Object.assign(Object.assign({},s),{reCAPTCHAState:Object.assign(Object.assign({},s.reCAPTCHAState),{widgetId:i})}))}(e,t,n,r),i.resolve(n)}))}class Cy{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e;!function(e){if(e&&Date.now()-e.allowRequestsAfter<=0)throw Xm.create("throttled",{time:Zm(e.allowRequestsAfter-Date.now()),httpStatus:e.httpStatus})}
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
     */(this._throttleData);const t=await async function(e){Qm(e);const t=jm(e).reCAPTCHAState,n=await t.initialized.promise;return new Promise(((t,r)=>{const i=jm(e).reCAPTCHAState;n.ready((()=>{t(n.execute(i.widgetId,{action:"fire_app_check"}))}))}))}(this._app).catch((e=>{throw Xm.create("recaptcha-error")}));let n;try{n=await ty(function(e,t){const{projectId:n,appId:r,apiKey:i}=e.options;return{url:`${Km}/projects/${n}/apps/${r}:exchangeRecaptchaToken?key=${i}`,body:{recaptcha_token:t}}}(this._app,t),this._platformLoggerProvider)}catch(t){throw"fetch-status-error"===t.code?(this._throttleData=function(e,t){if(404===e||403===e)return{backoffCount:1,allowRequestsAfter:Date.now()+Gm,httpStatus:e};{const n=t?t.backoffCount:0,r=Nt(n,1e3,2);return{backoffCount:n+1,allowRequestsAfter:Date.now()+r,httpStatus:e}}}(Number(null===(e=t.customData)||void 0===e?void 0:e.httpStatus),this._throttleData),Xm.create("throttled",{time:Zm(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):t}return this._throttleData=null,n}initialize(e){this._app=e,this._platformLoggerProvider=Qt(e,"platform-logger"),Sy(e,this._siteKey).catch((()=>{}))}isEqual(e){return e instanceof Cy&&this._siteKey===e._siteKey}}function Ry(e=nn(),t){const n=Qt(e=Dt(e),"app-check");if(qm().initialized||gy(),fy()&&py().then((e=>console.log(`App Check debug token: ${e}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`))),n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(i.isTokenAutoRefreshEnabled===t.isTokenAutoRefreshEnabled&&i.provider.isEqual(t.provider))return r;throw Xm.create("already-initialized",{appName:e.name})}const r=n.initialize({options:t});return function(e,t,n){const r=jm(e),i=Object.assign(Object.assign({},r),{activated:!0});i.provider=t,i.cachedTokenPromise=uy(e).then((t=>(t&&Ty(t)&&(zm(e,Object.assign(Object.assign({},jm(e)),{token:t})),Ey(e,{token:t.token})),t))),i.isTokenAutoRefreshEnabled=void 0===n?e.automaticDataCollectionEnabled:n,zm(e,i),i.provider.initialize(e)}(e,t.provider,t.isTokenAutoRefreshEnabled),jm(e).isTokenAutoRefreshEnabled&&wy(r,"INTERNAL",(()=>{})),r}const Ny="app-check-internal";Yt(new xt("app-check",(e=>function(e,t){return new ky(e,t)}(e.getProvider("app").getImmediate(),e.getProvider("platform-logger"))),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider(Ny).initialize()}))),Yt(new xt(Ny,(e=>function(e){return{getToken:t=>vy(e,t),addTokenListener:t=>wy(e,"INTERNAL",t),removeTokenListener:t=>by(e.app,t)}}(e.getProvider("app-check").getImmediate())),"PUBLIC").setInstantiationMode("EXPLICIT")),rn("@firebase/app-check","0.5.2");var Dy=an((function(e){!function(){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&n.rotl(e,8)|4278255360&n.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=n.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],n=0,r=0;n<e.length;n++,r+=8)t[r>>>5]|=e[n]<<24-r%32;return t},wordsToBytes:function(e){for(var t=[],n=0;n<32*e.length;n+=8)t.push(e[n>>>5]>>>24-n%32&255);return t},bytesToHex:function(e){for(var t=[],n=0;n<e.length;n++)t.push((e[n]>>>4).toString(16)),t.push((15&e[n]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],n=0;n<e.length;n+=2)t.push(parseInt(e.substr(n,2),16));return t},bytesToBase64:function(e){for(var n=[],r=0;r<e.length;r+=3)for(var i=e[r]<<16|e[r+1]<<8|e[r+2],s=0;s<4;s++)8*r+6*s<=8*e.length?n.push(t.charAt(i>>>6*(3-s)&63)):n.push("=");return n.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var n=[],r=0,i=0;r<e.length;i=++r%4)0!=i&&n.push((t.indexOf(e.charAt(r-1))&Math.pow(2,-2*i+8)-1)<<2*i|t.indexOf(e.charAt(r))>>>6-2*i);return n}};e.exports=n}()})),xy={utf8:{stringToBytes:function(e){return xy.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(xy.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t},bytesToString:function(e){for(var t=[],n=0;n<e.length;n++)t.push(String.fromCharCode(e[n]));return t.join("")}}},Oy=xy,Py=function(e){return null!=e&&($y(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&$y(e.slice(0,0))}(e)||!!e._isBuffer)};function $y(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}var My=an((function(e){!function(){var t=Dy,n=Oy.utf8,r=Py,i=Oy.bin,s=function(e,o){e.constructor==String?e=o&&"binary"===o.encoding?i.stringToBytes(e):n.stringToBytes(e):r(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||e.constructor===Uint8Array||(e=e.toString());for(var a=t.bytesToWords(e),c=8*e.length,l=1732584193,u=-271733879,h=-1732584194,d=271733878,f=0;f<a.length;f++)a[f]=16711935&(a[f]<<8|a[f]>>>24)|4278255360&(a[f]<<24|a[f]>>>8);a[c>>>5]|=128<<c%32,a[14+(c+64>>>9<<4)]=c;var p=s._ff,g=s._gg,m=s._hh,y=s._ii;for(f=0;f<a.length;f+=16){var v=l,w=u,b=h,_=d;l=p(l,u,h,d,a[f+0],7,-680876936),d=p(d,l,u,h,a[f+1],12,-389564586),h=p(h,d,l,u,a[f+2],17,606105819),u=p(u,h,d,l,a[f+3],22,-1044525330),l=p(l,u,h,d,a[f+4],7,-176418897),d=p(d,l,u,h,a[f+5],12,1200080426),h=p(h,d,l,u,a[f+6],17,-1473231341),u=p(u,h,d,l,a[f+7],22,-45705983),l=p(l,u,h,d,a[f+8],7,1770035416),d=p(d,l,u,h,a[f+9],12,-1958414417),h=p(h,d,l,u,a[f+10],17,-42063),u=p(u,h,d,l,a[f+11],22,-1990404162),l=p(l,u,h,d,a[f+12],7,1804603682),d=p(d,l,u,h,a[f+13],12,-40341101),h=p(h,d,l,u,a[f+14],17,-1502002290),l=g(l,u=p(u,h,d,l,a[f+15],22,1236535329),h,d,a[f+1],5,-165796510),d=g(d,l,u,h,a[f+6],9,-1069501632),h=g(h,d,l,u,a[f+11],14,643717713),u=g(u,h,d,l,a[f+0],20,-373897302),l=g(l,u,h,d,a[f+5],5,-701558691),d=g(d,l,u,h,a[f+10],9,38016083),h=g(h,d,l,u,a[f+15],14,-660478335),u=g(u,h,d,l,a[f+4],20,-405537848),l=g(l,u,h,d,a[f+9],5,568446438),d=g(d,l,u,h,a[f+14],9,-1019803690),h=g(h,d,l,u,a[f+3],14,-187363961),u=g(u,h,d,l,a[f+8],20,1163531501),l=g(l,u,h,d,a[f+13],5,-1444681467),d=g(d,l,u,h,a[f+2],9,-51403784),h=g(h,d,l,u,a[f+7],14,1735328473),l=m(l,u=g(u,h,d,l,a[f+12],20,-1926607734),h,d,a[f+5],4,-378558),d=m(d,l,u,h,a[f+8],11,-2022574463),h=m(h,d,l,u,a[f+11],16,1839030562),u=m(u,h,d,l,a[f+14],23,-35309556),l=m(l,u,h,d,a[f+1],4,-1530992060),d=m(d,l,u,h,a[f+4],11,1272893353),h=m(h,d,l,u,a[f+7],16,-155497632),u=m(u,h,d,l,a[f+10],23,-1094730640),l=m(l,u,h,d,a[f+13],4,681279174),d=m(d,l,u,h,a[f+0],11,-358537222),h=m(h,d,l,u,a[f+3],16,-722521979),u=m(u,h,d,l,a[f+6],23,76029189),l=m(l,u,h,d,a[f+9],4,-640364487),d=m(d,l,u,h,a[f+12],11,-421815835),h=m(h,d,l,u,a[f+15],16,530742520),l=y(l,u=m(u,h,d,l,a[f+2],23,-995338651),h,d,a[f+0],6,-198630844),d=y(d,l,u,h,a[f+7],10,1126891415),h=y(h,d,l,u,a[f+14],15,-1416354905),u=y(u,h,d,l,a[f+5],21,-57434055),l=y(l,u,h,d,a[f+12],6,1700485571),d=y(d,l,u,h,a[f+3],10,-1894986606),h=y(h,d,l,u,a[f+10],15,-1051523),u=y(u,h,d,l,a[f+1],21,-2054922799),l=y(l,u,h,d,a[f+8],6,1873313359),d=y(d,l,u,h,a[f+15],10,-30611744),h=y(h,d,l,u,a[f+6],15,-1560198380),u=y(u,h,d,l,a[f+13],21,1309151649),l=y(l,u,h,d,a[f+4],6,-145523070),d=y(d,l,u,h,a[f+11],10,-1120210379),h=y(h,d,l,u,a[f+2],15,718787259),u=y(u,h,d,l,a[f+9],21,-343485551),l=l+v>>>0,u=u+w>>>0,h=h+b>>>0,d=d+_>>>0}return t.endian([l,u,h,d])};s._ff=function(e,t,n,r,i,s,o){var a=e+(t&n|~t&r)+(i>>>0)+o;return(a<<s|a>>>32-s)+t},s._gg=function(e,t,n,r,i,s,o){var a=e+(t&r|n&~r)+(i>>>0)+o;return(a<<s|a>>>32-s)+t},s._hh=function(e,t,n,r,i,s,o){var a=e+(t^n^r)+(i>>>0)+o;return(a<<s|a>>>32-s)+t},s._ii=function(e,t,n,r,i,s,o){var a=e+(n^(t|~r))+(i>>>0)+o;return(a<<s|a>>>32-s)+t},s._blocksize=16,s._digestsize=16,e.exports=function(e,n){if(null==e)throw new Error("Illegal argument "+e);var r=t.wordsToBytes(s(e,n));return n&&n.asBytes?r:n&&n.asString?i.bytesToString(r):t.bytesToHex(r)}}()})),Ly=an((function(e,t){!function(t,n){e.exports=n()}(0,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=f(n(1)),s=f(n(2)),o=f(n(8)),a=f(n(9)),c=f(n(10)),l=f(n(11)),u=f(n(16)),h=f(n(17)),d=f(n(18));function f(e){return e&&e.__esModule?e:{default:e}}var p=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t=t||{},this._name="secure-ls",this.utils=i.default,this.constants=s.default,this.Base64=a.default,this.LZString=c.default,this.AES=l.default,this.DES=u.default,this.RABBIT=h.default,this.RC4=d.default,this.enc=o.default,this.config={isCompression:!0,encodingType:s.default.EncrytionTypes.BASE64,encryptionSecret:t.encryptionSecret,encryptionNamespace:t.encryptionNamespace},this.config.isCompression=void 0===t.isCompression||t.isCompression,this.config.encodingType=void 0!==t.encodingType||""===t.encodingType?t.encodingType.toLowerCase():s.default.EncrytionTypes.BASE64,this.ls=localStorage,this.init()}return r(e,[{key:"init",value:function(){var e=this.getMetaData();this.WarningEnum=this.constants.WarningEnum,this.WarningTypes=this.constants.WarningTypes,this.EncrytionTypes=this.constants.EncrytionTypes,this._isBase64=this._isBase64EncryptionType(),this._isAES=this._isAESEncryptionType(),this._isDES=this._isDESEncryptionType(),this._isRabbit=this._isRabbitEncryptionType(),this._isRC4=this._isRC4EncryptionType(),this._isCompression=this._isDataCompressionEnabled(),this.utils.allKeys=e.keys||this.resetAllKeys()}},{key:"_isBase64EncryptionType",value:function(){return a.default&&(void 0===this.config.encodingType||this.config.encodingType===this.constants.EncrytionTypes.BASE64)}},{key:"_isAESEncryptionType",value:function(){return l.default&&this.config.encodingType===this.constants.EncrytionTypes.AES}},{key:"_isDESEncryptionType",value:function(){return u.default&&this.config.encodingType===this.constants.EncrytionTypes.DES}},{key:"_isRabbitEncryptionType",value:function(){return h.default&&this.config.encodingType===this.constants.EncrytionTypes.RABBIT}},{key:"_isRC4EncryptionType",value:function(){return d.default&&this.config.encodingType===this.constants.EncrytionTypes.RC4}},{key:"_isDataCompressionEnabled",value:function(){return this.config.isCompression}},{key:"getEncryptionSecret",value:function(e){var t=this.getMetaData(),n=this.utils.getObjectFromKey(t.keys,e);n&&(this._isAES||this._isDES||this._isRabbit||this._isRC4)&&(void 0===this.config.encryptionSecret?(this.utils.encryptionSecret=n.s,this.utils.encryptionSecret||(this.utils.encryptionSecret=this.utils.generateSecretKey(),this.setMetaData())):this.utils.encryptionSecret=this.config.encryptionSecret||n.s||"")}},{key:"get",value:function(e,t){var n,r="",i="",s=void 0,f=void 0;if(!this.utils.is(e))return this.utils.warn(this.WarningEnum.KEY_NOT_PROVIDED),i;if(!(n=this.getDataFromLocalStorage(e)))return i;s=n,(this._isCompression||t)&&(s=c.default.decompressFromUTF16(n)),r=s,this._isBase64||t?r=a.default.decode(s):(this.getEncryptionSecret(e),this._isAES?f=l.default.decrypt(s.toString(),this.utils.encryptionSecret):this._isDES?f=u.default.decrypt(s.toString(),this.utils.encryptionSecret):this._isRabbit?f=h.default.decrypt(s.toString(),this.utils.encryptionSecret):this._isRC4&&(f=d.default.decrypt(s.toString(),this.utils.encryptionSecret)),f&&(r=f.toString(o.default._Utf8)));try{i=JSON.parse(r)}catch(e){throw new Error("Could not parse JSON")}return i}},{key:"getDataFromLocalStorage",value:function(e){return this.ls.getItem(e,!0)}},{key:"getAllKeys",value:function(){var e=this.getMetaData();return this.utils.extractKeyNames(e)||[]}},{key:"set",value:function(e,t){var n;this.utils.is(e)?(this.getEncryptionSecret(e),String(e)!==String(this.utils.metaKey)&&(this.utils.isKeyPresent(e)||(this.utils.addToKeysList(e),this.setMetaData())),n=this.processData(t),this.setDataToLocalStorage(e,n)):this.utils.warn(this.WarningEnum.KEY_NOT_PROVIDED)}},{key:"setDataToLocalStorage",value:function(e,t){this.ls.setItem(e,t)}},{key:"remove",value:function(e){this.utils.is(e)?e===this.utils.metaKey&&this.getAllKeys().length?this.utils.warn(this.WarningEnum.META_KEY_REMOVE):(this.utils.isKeyPresent(e)&&(this.utils.removeFromKeysList(e),this.setMetaData()),this.ls.removeItem(e)):this.utils.warn(this.WarningEnum.KEY_NOT_PROVIDED)}},{key:"removeAll",value:function(){var e,t=void 0;for(e=this.getAllKeys(),t=0;t<e.length;t++)this.ls.removeItem(e[t]);this.ls.removeItem(this.utils.metaKey),this.resetAllKeys()}},{key:"clear",value:function(){this.ls.clear(),this.resetAllKeys()}},{key:"resetAllKeys",value:function(){return this.utils.allKeys=[],[]}},{key:"processData",value:function(e,t){if(null==e||""===e)return"";var n=void 0,r=void 0,i=void 0;try{n=JSON.stringify(e)}catch(e){throw new Error("Could not stringify data.")}return r=n,this._isBase64||t?r=a.default.encode(n):(this._isAES?r=l.default.encrypt(n,this.utils.encryptionSecret):this._isDES?r=u.default.encrypt(n,this.utils.encryptionSecret):this._isRabbit?r=h.default.encrypt(n,this.utils.encryptionSecret):this._isRC4&&(r=d.default.encrypt(n,this.utils.encryptionSecret)),r=r&&r.toString()),i=r,(this._isCompression||t)&&(i=c.default.compressToUTF16(r)),i}},{key:"setMetaData",value:function(){var e=this.processData({keys:this.utils.allKeys},!0);this.setDataToLocalStorage(this.getMetaKey(),e)}},{key:"getMetaData",value:function(){return this.get(this.getMetaKey(),!0)||{}}},{key:"getMetaKey",value:function(){return this.utils.metaKey+(this.config.encryptionNamespace?"__"+this.config.encryptionNamespace:"")}}]),e}();t.default=p,e.exports=t.default},function(e,t,n){var r=o(n(2)),i=o(n(3)),s=o(n(4));function o(e){return e&&e.__esModule?e:{default:e}}var a={metaKey:"_secure__ls__metadata",encryptionSecret:"",secretPhrase:"s3cr3t$#@135^&*246",allKeys:[],is:function(e){return!!e},warn:function(e){e=e||r.default.WarningEnum.DEFAULT_TEXT,console.warn(r.default.WarningTypes[e])},generateSecretKey:function(){var e=i.default.random(16),t=(0,s.default)(this.secretPhrase,e,{keySize:4});return t&&t.toString()},getObjectFromKey:function(e,t){if(!e||!e.length)return{};var n=void 0,r={};for(n=0;n<e.length;n++)if(e[n].k===t){r=e[n];break}return r},extractKeyNames:function(e){return e&&e.keys&&e.keys.length?e.keys.map((function(e){return e.k})):[]},getAllKeys:function(){return this.allKeys},isKeyPresent:function(e){for(var t=!1,n=0;n<this.allKeys.length;n++)if(String(this.allKeys[n].k)===String(e)){t=!0;break}return t},addToKeysList:function(e){this.allKeys.push({k:e,s:this.encryptionSecret})},removeFromKeysList:function(e){var t=void 0,n=-1;for(t=0;t<this.allKeys.length;t++)if(this.allKeys[t].k===e){n=t;break}return-1!==n&&this.allKeys.splice(n,1),n}};e.exports=a},function(e,t){var n={KEY_NOT_PROVIDED:"keyNotProvided",META_KEY_REMOVE:"metaKeyRemove",DEFAULT_TEXT:"defaultText"},r={};r[n.KEY_NOT_PROVIDED]="Secure LS: Key not provided. Aborting operation!",r[n.META_KEY_REMOVE]="Secure LS: Meta key can not be removed\nunless all keys created by Secure LS are removed!",r[n.DEFAULT_TEXT]="Unexpected output";var i={WarningEnum:n,WarningTypes:r,EncrytionTypes:{BASE64:"base64",AES:"aes",DES:"des",RABBIT:"rabbit",RC4:"rc4"}};e.exports=i},function(e,t){var n={random:function(e){for(var t,n=[],r=function(e){var t=987654321,n=4294967295;return function(){var r=((t=36969*(65535&t)+(t>>16)&n)<<16)+(e=18e3*(65535&e)+(e>>16)&n)&n;return r/=4294967296,(r+=.5)*(Math.random()>.5?1:-1)}},i=0;i<e;i+=4){var s=r(4294967296*(t||Math.random()));t=987654071*s(),n.push(4294967296*s()|0)}return new this.Set(n,e)},Set:function(e,t){e=this.words=e||[],this.sigBytes=void 0!==t?t:8*e.length}};e.exports=n},function(e,t,n){var r;e.exports=(r=n(5),n(6),n(7),function(){var e=r,t=e.lib,n=t.Base,i=t.WordArray,s=e.algo,o=s.SHA1,a=s.HMAC,c=s.PBKDF2=n.extend({cfg:n.extend({keySize:4,hasher:o,iterations:1}),init:function(e){this.cfg=this.cfg.extend(e)},compute:function(e,t){for(var n=this.cfg,r=a.create(n.hasher,e),s=i.create(),o=i.create([1]),c=s.words,l=o.words,u=n.keySize,h=n.iterations;c.length<u;){var d=r.update(t).finalize(o);r.reset();for(var f=d.words,p=f.length,g=d,m=1;m<h;m++){g=r.finalize(g),r.reset();for(var y=g.words,v=0;v<p;v++)f[v]^=y[v]}s.concat(d),l[0]++}return s.sigBytes=4*u,s}});e.PBKDF2=function(e,t,n){return c.create(n).compute(e,t)}}(),r.PBKDF2)},function(e,t,n){var r;e.exports=(r=r||function(e,t){var n=Object.create||function(){function e(){}return function(t){var n;return e.prototype=t,n=new e,e.prototype=null,n}}(),r={},i=r.lib={},s=i.Base={extend:function(e){var t=n(this);return e&&t.mixIn(e),t.hasOwnProperty("init")&&this.init!==t.init||(t.init=function(){t.$super.init.apply(this,arguments)}),t.init.prototype=t,t.$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}},o=i.WordArray=s.extend({init:function(e,n){e=this.words=e||[],this.sigBytes=n!=t?n:4*e.length},toString:function(e){return(e||c).stringify(this)},concat:function(e){var t=this.words,n=e.words,r=this.sigBytes,i=e.sigBytes;if(this.clamp(),r%4)for(var s=0;s<i;s++){var o=n[s>>>2]>>>24-s%4*8&255;t[r+s>>>2]|=o<<24-(r+s)%4*8}else for(s=0;s<i;s+=4)t[r+s>>>2]=n[s>>>2];return this.sigBytes+=i,this},clamp:function(){var t=this.words,n=this.sigBytes;t[n>>>2]&=4294967295<<32-n%4*8,t.length=e.ceil(n/4)},clone:function(){var e=s.clone.call(this);return e.words=this.words.slice(0),e},random:function(t){for(var n,r=[],i=function(t){t=t;var n=987654321,r=4294967295;return function(){var i=((n=36969*(65535&n)+(n>>16)&r)<<16)+(t=18e3*(65535&t)+(t>>16)&r)&r;return i/=4294967296,(i+=.5)*(e.random()>.5?1:-1)}},s=0;s<t;s+=4){var a=i(4294967296*(n||e.random()));n=987654071*a(),r.push(4294967296*a()|0)}return new o.init(r,t)}}),a=r.enc={},c=a.Hex={stringify:function(e){for(var t=e.words,n=e.sigBytes,r=[],i=0;i<n;i++){var s=t[i>>>2]>>>24-i%4*8&255;r.push((s>>>4).toString(16)),r.push((15&s).toString(16))}return r.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r+=2)n[r>>>3]|=parseInt(e.substr(r,2),16)<<24-r%8*4;return new o.init(n,t/2)}},l=a.Latin1={stringify:function(e){for(var t=e.words,n=e.sigBytes,r=[],i=0;i<n;i++){var s=t[i>>>2]>>>24-i%4*8&255;r.push(String.fromCharCode(s))}return r.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r++)n[r>>>2]|=(255&e.charCodeAt(r))<<24-r%4*8;return new o.init(n,t)}},u=a.Utf8={stringify:function(e){try{return decodeURIComponent(escape(l.stringify(e)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(e){return l.parse(unescape(encodeURIComponent(e)))}},h=i.BufferedBlockAlgorithm=s.extend({reset:function(){this._data=new o.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=u.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(t){var n=this._data,r=n.words,i=n.sigBytes,s=this.blockSize,a=i/(4*s),c=(a=t?e.ceil(a):e.max((0|a)-this._minBufferSize,0))*s,l=e.min(4*c,i);if(c){for(var u=0;u<c;u+=s)this._doProcessBlock(r,u);var h=r.splice(0,c);n.sigBytes-=l}return new o.init(h,l)},clone:function(){var e=s.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0});i.Hasher=h.extend({cfg:s.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){h.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(t,n){return new e.init(n).finalize(t)}},_createHmacHelper:function(e){return function(t,n){return new d.HMAC.init(e,n).finalize(t)}}});var d=r.algo={};return r}(Math),r)},function(e,t,n){var r;e.exports=(r=n(5),function(){var e=r,t=e.lib,n=t.WordArray,i=t.Hasher,s=e.algo,o=[],a=s.SHA1=i.extend({_doReset:function(){this._hash=new n.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(e,t){for(var n=this._hash.words,r=n[0],i=n[1],s=n[2],a=n[3],c=n[4],l=0;l<80;l++){if(l<16)o[l]=0|e[t+l];else{var u=o[l-3]^o[l-8]^o[l-14]^o[l-16];o[l]=u<<1|u>>>31}var h=(r<<5|r>>>27)+c+o[l];h+=l<20?1518500249+(i&s|~i&a):l<40?1859775393+(i^s^a):l<60?(i&s|i&a|s&a)-1894007588:(i^s^a)-899497514,c=a,a=s,s=i<<30|i>>>2,i=r,r=h}n[0]=n[0]+r|0,n[1]=n[1]+i|0,n[2]=n[2]+s|0,n[3]=n[3]+a|0,n[4]=n[4]+c|0},_doFinalize:function(){var e=this._data,t=e.words,n=8*this._nDataBytes,r=8*e.sigBytes;return t[r>>>5]|=128<<24-r%32,t[14+(r+64>>>9<<4)]=Math.floor(n/4294967296),t[15+(r+64>>>9<<4)]=n,e.sigBytes=4*t.length,this._process(),this._hash},clone:function(){var e=i.clone.call(this);return e._hash=this._hash.clone(),e}});e.SHA1=i._createHelper(a),e.HmacSHA1=i._createHmacHelper(a)}(),r.SHA1)},function(e,t,n){var r;e.exports=(r=n(5),void function(){var e=r,t=e.lib.Base,n=e.enc.Utf8;e.algo.HMAC=t.extend({init:function(e,t){e=this._hasher=new e.init,"string"==typeof t&&(t=n.parse(t));var r=e.blockSize,i=4*r;t.sigBytes>i&&(t=e.finalize(t)),t.clamp();for(var s=this._oKey=t.clone(),o=this._iKey=t.clone(),a=s.words,c=o.words,l=0;l<r;l++)a[l]^=1549556828,c[l]^=909522486;s.sigBytes=o.sigBytes=i,this.reset()},reset:function(){var e=this._hasher;e.reset(),e.update(this._iKey)},update:function(e){return this._hasher.update(e),this},finalize:function(e){var t=this._hasher,n=t.finalize(e);return t.reset(),t.finalize(this._oKey.clone().concat(n))}})}())},function(e,t){var n={};n.Latin1={stringify:function(e){var t=e.words,n=e.sigBytes,r=[],i=void 0,s=void 0;for(i=0;i<n;i++)s=t[i>>>2]>>>24-i%4*8&255,r.push(String.fromCharCode(s));return r.join("")}},n._Utf8={stringify:function(e){try{return decodeURIComponent(escape(n.Latin1.stringify(e)))}catch(e){throw new Error("Malformed UTF-8 data")}}},e.exports=n},function(e,t){var n={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="",r=void 0,i=void 0,s=void 0,o=void 0,a=void 0,c=void 0,l=void 0,u=0;for(e=n._utf8Encode(e);u<e.length;)o=(r=e.charCodeAt(u++))>>2,a=(3&r)<<4|(i=e.charCodeAt(u++))>>4,c=(15&i)<<2|(s=e.charCodeAt(u++))>>6,l=63&s,isNaN(i)?c=l=64:isNaN(s)&&(l=64),t=t+this._keyStr.charAt(o)+this._keyStr.charAt(a)+this._keyStr.charAt(c)+this._keyStr.charAt(l);return t},decode:function(e){var t="",r=void 0,i=void 0,s=void 0,o=void 0,a=void 0,c=void 0,l=0;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");l<e.length;)r=this._keyStr.indexOf(e.charAt(l++))<<2|(o=this._keyStr.indexOf(e.charAt(l++)))>>4,i=(15&o)<<4|(a=this._keyStr.indexOf(e.charAt(l++)))>>2,s=(3&a)<<6|(c=this._keyStr.indexOf(e.charAt(l++))),t+=String.fromCharCode(r),64!==a&&(t+=String.fromCharCode(i)),64!==c&&(t+=String.fromCharCode(s));return t=n._utf8Decode(t)},_utf8Encode:function(e){e=e.replace(/\r\n/g,"\n");for(var t="",n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t+=String.fromCharCode(r):r>127&&r<2048?(t+=String.fromCharCode(r>>6|192),t+=String.fromCharCode(63&r|128)):(t+=String.fromCharCode(r>>12|224),t+=String.fromCharCode(r>>6&63|128),t+=String.fromCharCode(63&r|128))}return t},_utf8Decode:function(e){var t="",n=0,r=void 0,i=void 0,s=void 0;for(r=i=0;n<e.length;)(r=e.charCodeAt(n))<128?(t+=String.fromCharCode(r),n++):r>191&&r<224?(i=e.charCodeAt(n+1),t+=String.fromCharCode((31&r)<<6|63&i),n+=2):(i=e.charCodeAt(n+1),s=e.charCodeAt(n+2),t+=String.fromCharCode((15&r)<<12|(63&i)<<6|63&s),n+=3);return t}};e.exports=n},function(e,t,n){var r,i=function(){var e=String.fromCharCode,t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",r={};function i(e,t){if(!r[e]){r[e]={};for(var n=0;n<e.length;n++)r[e][e.charAt(n)]=n}return r[e][t]}var s={compressToBase64:function(e){if(null==e)return"";var n=s._compress(e,6,(function(e){return t.charAt(e)}));switch(n.length%4){default:case 0:return n;case 1:return n+"===";case 2:return n+"==";case 3:return n+"="}},decompressFromBase64:function(e){return null==e?"":""==e?null:s._decompress(e.length,32,(function(n){return i(t,e.charAt(n))}))},compressToUTF16:function(t){return null==t?"":s._compress(t,15,(function(t){return e(t+32)}))+" "},decompressFromUTF16:function(e){return null==e?"":""==e?null:s._decompress(e.length,16384,(function(t){return e.charCodeAt(t)-32}))},compressToUint8Array:function(e){for(var t=s.compress(e),n=new Uint8Array(2*t.length),r=0,i=t.length;r<i;r++){var o=t.charCodeAt(r);n[2*r]=o>>>8,n[2*r+1]=o%256}return n},decompressFromUint8Array:function(t){if(null==t)return s.decompress(t);for(var n=new Array(t.length/2),r=0,i=n.length;r<i;r++)n[r]=256*t[2*r]+t[2*r+1];var o=[];return n.forEach((function(t){o.push(e(t))})),s.decompress(o.join(""))},compressToEncodedURIComponent:function(e){return null==e?"":s._compress(e,6,(function(e){return n.charAt(e)}))},decompressFromEncodedURIComponent:function(e){return null==e?"":""==e?null:(e=e.replace(/ /g,"+"),s._decompress(e.length,32,(function(t){return i(n,e.charAt(t))})))},compress:function(t){return s._compress(t,16,(function(t){return e(t)}))},_compress:function(e,t,n){if(null==e)return"";var r,i,s,o={},a={},c="",l="",u="",h=2,d=3,f=2,p=[],g=0,m=0;for(s=0;s<e.length;s+=1)if(c=e.charAt(s),Object.prototype.hasOwnProperty.call(o,c)||(o[c]=d++,a[c]=!0),l=u+c,Object.prototype.hasOwnProperty.call(o,l))u=l;else{if(Object.prototype.hasOwnProperty.call(a,u)){if(u.charCodeAt(0)<256){for(r=0;r<f;r++)g<<=1,m==t-1?(m=0,p.push(n(g)),g=0):m++;for(i=u.charCodeAt(0),r=0;r<8;r++)g=g<<1|1&i,m==t-1?(m=0,p.push(n(g)),g=0):m++,i>>=1}else{for(i=1,r=0;r<f;r++)g=g<<1|i,m==t-1?(m=0,p.push(n(g)),g=0):m++,i=0;for(i=u.charCodeAt(0),r=0;r<16;r++)g=g<<1|1&i,m==t-1?(m=0,p.push(n(g)),g=0):m++,i>>=1}0==--h&&(h=Math.pow(2,f),f++),delete a[u]}else for(i=o[u],r=0;r<f;r++)g=g<<1|1&i,m==t-1?(m=0,p.push(n(g)),g=0):m++,i>>=1;0==--h&&(h=Math.pow(2,f),f++),o[l]=d++,u=String(c)}if(""!==u){if(Object.prototype.hasOwnProperty.call(a,u)){if(u.charCodeAt(0)<256){for(r=0;r<f;r++)g<<=1,m==t-1?(m=0,p.push(n(g)),g=0):m++;for(i=u.charCodeAt(0),r=0;r<8;r++)g=g<<1|1&i,m==t-1?(m=0,p.push(n(g)),g=0):m++,i>>=1}else{for(i=1,r=0;r<f;r++)g=g<<1|i,m==t-1?(m=0,p.push(n(g)),g=0):m++,i=0;for(i=u.charCodeAt(0),r=0;r<16;r++)g=g<<1|1&i,m==t-1?(m=0,p.push(n(g)),g=0):m++,i>>=1}0==--h&&(h=Math.pow(2,f),f++),delete a[u]}else for(i=o[u],r=0;r<f;r++)g=g<<1|1&i,m==t-1?(m=0,p.push(n(g)),g=0):m++,i>>=1;0==--h&&(h=Math.pow(2,f),f++)}for(i=2,r=0;r<f;r++)g=g<<1|1&i,m==t-1?(m=0,p.push(n(g)),g=0):m++,i>>=1;for(;;){if(g<<=1,m==t-1){p.push(n(g));break}m++}return p.join("")},decompress:function(e){return null==e?"":""==e?null:s._decompress(e.length,32768,(function(t){return e.charCodeAt(t)}))},_decompress:function(t,n,r){var i,s,o,a,c,l,u,h=[],d=4,f=4,p=3,g="",m=[],y={val:r(0),position:n,index:1};for(i=0;i<3;i+=1)h[i]=i;for(o=0,c=Math.pow(2,2),l=1;l!=c;)a=y.val&y.position,y.position>>=1,0==y.position&&(y.position=n,y.val=r(y.index++)),o|=(a>0?1:0)*l,l<<=1;switch(o){case 0:for(o=0,c=Math.pow(2,8),l=1;l!=c;)a=y.val&y.position,y.position>>=1,0==y.position&&(y.position=n,y.val=r(y.index++)),o|=(a>0?1:0)*l,l<<=1;u=e(o);break;case 1:for(o=0,c=Math.pow(2,16),l=1;l!=c;)a=y.val&y.position,y.position>>=1,0==y.position&&(y.position=n,y.val=r(y.index++)),o|=(a>0?1:0)*l,l<<=1;u=e(o);break;case 2:return""}for(h[3]=u,s=u,m.push(u);;){if(y.index>t)return"";for(o=0,c=Math.pow(2,p),l=1;l!=c;)a=y.val&y.position,y.position>>=1,0==y.position&&(y.position=n,y.val=r(y.index++)),o|=(a>0?1:0)*l,l<<=1;switch(u=o){case 0:for(o=0,c=Math.pow(2,8),l=1;l!=c;)a=y.val&y.position,y.position>>=1,0==y.position&&(y.position=n,y.val=r(y.index++)),o|=(a>0?1:0)*l,l<<=1;h[f++]=e(o),u=f-1,d--;break;case 1:for(o=0,c=Math.pow(2,16),l=1;l!=c;)a=y.val&y.position,y.position>>=1,0==y.position&&(y.position=n,y.val=r(y.index++)),o|=(a>0?1:0)*l,l<<=1;h[f++]=e(o),u=f-1,d--;break;case 2:return m.join("")}if(0==d&&(d=Math.pow(2,p),p++),h[u])g=h[u];else{if(u!==f)return null;g=s+s.charAt(0)}m.push(g),h[f++]=s+g.charAt(0),s=g,0==--d&&(d=Math.pow(2,p),p++)}}};return s}();void 0===(r=function(){return i}.call(t,n,t,e))||(e.exports=r)},function(e,t,n){var r;e.exports=(r=n(5),n(12),n(13),n(14),n(15),function(){var e=r,t=e.lib.BlockCipher,n=e.algo,i=[],s=[],o=[],a=[],c=[],l=[],u=[],h=[],d=[],f=[];!function(){for(var e=[],t=0;t<256;t++)e[t]=t<128?t<<1:t<<1^283;var n=0,r=0;for(t=0;t<256;t++){var p=r^r<<1^r<<2^r<<3^r<<4;p=p>>>8^255&p^99,i[n]=p,s[p]=n;var g=e[n],m=e[g],y=e[m],v=257*e[p]^16843008*p;o[n]=v<<24|v>>>8,a[n]=v<<16|v>>>16,c[n]=v<<8|v>>>24,l[n]=v,v=16843009*y^65537*m^257*g^16843008*n,u[p]=v<<24|v>>>8,h[p]=v<<16|v>>>16,d[p]=v<<8|v>>>24,f[p]=v,n?(n=g^e[e[e[y^g]]],r^=e[e[r]]):n=r=1}}();var p=[0,1,2,4,8,16,32,64,128,27,54],g=n.AES=t.extend({_doReset:function(){if(!this._nRounds||this._keyPriorReset!==this._key){for(var e=this._keyPriorReset=this._key,t=e.words,n=e.sigBytes/4,r=4*((this._nRounds=n+6)+1),s=this._keySchedule=[],o=0;o<r;o++)if(o<n)s[o]=t[o];else{var a=s[o-1];o%n?n>6&&o%n==4&&(a=i[a>>>24]<<24|i[a>>>16&255]<<16|i[a>>>8&255]<<8|i[255&a]):(a=i[(a=a<<8|a>>>24)>>>24]<<24|i[a>>>16&255]<<16|i[a>>>8&255]<<8|i[255&a],a^=p[o/n|0]<<24),s[o]=s[o-n]^a}for(var c=this._invKeySchedule=[],l=0;l<r;l++)o=r-l,a=l%4?s[o]:s[o-4],c[l]=l<4||o<=4?a:u[i[a>>>24]]^h[i[a>>>16&255]]^d[i[a>>>8&255]]^f[i[255&a]]}},encryptBlock:function(e,t){this._doCryptBlock(e,t,this._keySchedule,o,a,c,l,i)},decryptBlock:function(e,t){var n=e[t+1];e[t+1]=e[t+3],e[t+3]=n,this._doCryptBlock(e,t,this._invKeySchedule,u,h,d,f,s),n=e[t+1],e[t+1]=e[t+3],e[t+3]=n},_doCryptBlock:function(e,t,n,r,i,s,o,a){for(var c=this._nRounds,l=e[t]^n[0],u=e[t+1]^n[1],h=e[t+2]^n[2],d=e[t+3]^n[3],f=4,p=1;p<c;p++){var g=r[l>>>24]^i[u>>>16&255]^s[h>>>8&255]^o[255&d]^n[f++],m=r[u>>>24]^i[h>>>16&255]^s[d>>>8&255]^o[255&l]^n[f++],y=r[h>>>24]^i[d>>>16&255]^s[l>>>8&255]^o[255&u]^n[f++],v=r[d>>>24]^i[l>>>16&255]^s[u>>>8&255]^o[255&h]^n[f++];l=g,u=m,h=y,d=v}g=(a[l>>>24]<<24|a[u>>>16&255]<<16|a[h>>>8&255]<<8|a[255&d])^n[f++],m=(a[u>>>24]<<24|a[h>>>16&255]<<16|a[d>>>8&255]<<8|a[255&l])^n[f++],y=(a[h>>>24]<<24|a[d>>>16&255]<<16|a[l>>>8&255]<<8|a[255&u])^n[f++],v=(a[d>>>24]<<24|a[l>>>16&255]<<16|a[u>>>8&255]<<8|a[255&h])^n[f++],e[t]=g,e[t+1]=m,e[t+2]=y,e[t+3]=v},keySize:8});e.AES=t._createHelper(g)}(),r.AES)},function(e,t,n){var r;e.exports=(r=n(5),function(){var e=r,t=e.lib.WordArray;function n(e,n,r){for(var i=[],s=0,o=0;o<n;o++)if(o%4){var a=r[e.charCodeAt(o-1)]<<o%4*2,c=r[e.charCodeAt(o)]>>>6-o%4*2;i[s>>>2]|=(a|c)<<24-s%4*8,s++}return t.create(i,s)}e.enc.Base64={stringify:function(e){var t=e.words,n=e.sigBytes,r=this._map;e.clamp();for(var i=[],s=0;s<n;s+=3)for(var o=(t[s>>>2]>>>24-s%4*8&255)<<16|(t[s+1>>>2]>>>24-(s+1)%4*8&255)<<8|t[s+2>>>2]>>>24-(s+2)%4*8&255,a=0;a<4&&s+.75*a<n;a++)i.push(r.charAt(o>>>6*(3-a)&63));var c=r.charAt(64);if(c)for(;i.length%4;)i.push(c);return i.join("")},parse:function(e){var t=e.length,r=this._map,i=this._reverseMap;if(!i){i=this._reverseMap=[];for(var s=0;s<r.length;s++)i[r.charCodeAt(s)]=s}var o=r.charAt(64);if(o){var a=e.indexOf(o);-1!==a&&(t=a)}return n(e,t,i)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),r.enc.Base64)},function(e,t,n){var r;e.exports=(r=n(5),function(e){var t=r,n=t.lib,i=n.WordArray,s=n.Hasher,o=t.algo,a=[];!function(){for(var t=0;t<64;t++)a[t]=4294967296*e.abs(e.sin(t+1))|0}();var c=o.MD5=s.extend({_doReset:function(){this._hash=new i.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(e,t){for(var n=0;n<16;n++){var r=t+n,i=e[r];e[r]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8)}var s=this._hash.words,o=e[t+0],c=e[t+1],f=e[t+2],p=e[t+3],g=e[t+4],m=e[t+5],y=e[t+6],v=e[t+7],w=e[t+8],b=e[t+9],_=e[t+10],E=e[t+11],T=e[t+12],k=e[t+13],I=e[t+14],S=e[t+15],A=s[0],C=s[1],R=s[2],N=s[3];A=l(A,C,R,N,o,7,a[0]),N=l(N,A,C,R,c,12,a[1]),R=l(R,N,A,C,f,17,a[2]),C=l(C,R,N,A,p,22,a[3]),A=l(A,C,R,N,g,7,a[4]),N=l(N,A,C,R,m,12,a[5]),R=l(R,N,A,C,y,17,a[6]),C=l(C,R,N,A,v,22,a[7]),A=l(A,C,R,N,w,7,a[8]),N=l(N,A,C,R,b,12,a[9]),R=l(R,N,A,C,_,17,a[10]),C=l(C,R,N,A,E,22,a[11]),A=l(A,C,R,N,T,7,a[12]),N=l(N,A,C,R,k,12,a[13]),R=l(R,N,A,C,I,17,a[14]),A=u(A,C=l(C,R,N,A,S,22,a[15]),R,N,c,5,a[16]),N=u(N,A,C,R,y,9,a[17]),R=u(R,N,A,C,E,14,a[18]),C=u(C,R,N,A,o,20,a[19]),A=u(A,C,R,N,m,5,a[20]),N=u(N,A,C,R,_,9,a[21]),R=u(R,N,A,C,S,14,a[22]),C=u(C,R,N,A,g,20,a[23]),A=u(A,C,R,N,b,5,a[24]),N=u(N,A,C,R,I,9,a[25]),R=u(R,N,A,C,p,14,a[26]),C=u(C,R,N,A,w,20,a[27]),A=u(A,C,R,N,k,5,a[28]),N=u(N,A,C,R,f,9,a[29]),R=u(R,N,A,C,v,14,a[30]),A=h(A,C=u(C,R,N,A,T,20,a[31]),R,N,m,4,a[32]),N=h(N,A,C,R,w,11,a[33]),R=h(R,N,A,C,E,16,a[34]),C=h(C,R,N,A,I,23,a[35]),A=h(A,C,R,N,c,4,a[36]),N=h(N,A,C,R,g,11,a[37]),R=h(R,N,A,C,v,16,a[38]),C=h(C,R,N,A,_,23,a[39]),A=h(A,C,R,N,k,4,a[40]),N=h(N,A,C,R,o,11,a[41]),R=h(R,N,A,C,p,16,a[42]),C=h(C,R,N,A,y,23,a[43]),A=h(A,C,R,N,b,4,a[44]),N=h(N,A,C,R,T,11,a[45]),R=h(R,N,A,C,S,16,a[46]),A=d(A,C=h(C,R,N,A,f,23,a[47]),R,N,o,6,a[48]),N=d(N,A,C,R,v,10,a[49]),R=d(R,N,A,C,I,15,a[50]),C=d(C,R,N,A,m,21,a[51]),A=d(A,C,R,N,T,6,a[52]),N=d(N,A,C,R,p,10,a[53]),R=d(R,N,A,C,_,15,a[54]),C=d(C,R,N,A,c,21,a[55]),A=d(A,C,R,N,w,6,a[56]),N=d(N,A,C,R,S,10,a[57]),R=d(R,N,A,C,y,15,a[58]),C=d(C,R,N,A,k,21,a[59]),A=d(A,C,R,N,g,6,a[60]),N=d(N,A,C,R,E,10,a[61]),R=d(R,N,A,C,f,15,a[62]),C=d(C,R,N,A,b,21,a[63]),s[0]=s[0]+A|0,s[1]=s[1]+C|0,s[2]=s[2]+R|0,s[3]=s[3]+N|0},_doFinalize:function(){var t=this._data,n=t.words,r=8*this._nDataBytes,i=8*t.sigBytes;n[i>>>5]|=128<<24-i%32;var s=e.floor(r/4294967296),o=r;n[15+(i+64>>>9<<4)]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),n[14+(i+64>>>9<<4)]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),t.sigBytes=4*(n.length+1),this._process();for(var a=this._hash,c=a.words,l=0;l<4;l++){var u=c[l];c[l]=16711935&(u<<8|u>>>24)|4278255360&(u<<24|u>>>8)}return a},clone:function(){var e=s.clone.call(this);return e._hash=this._hash.clone(),e}});function l(e,t,n,r,i,s,o){var a=e+(t&n|~t&r)+i+o;return(a<<s|a>>>32-s)+t}function u(e,t,n,r,i,s,o){var a=e+(t&r|n&~r)+i+o;return(a<<s|a>>>32-s)+t}function h(e,t,n,r,i,s,o){var a=e+(t^n^r)+i+o;return(a<<s|a>>>32-s)+t}function d(e,t,n,r,i,s,o){var a=e+(n^(t|~r))+i+o;return(a<<s|a>>>32-s)+t}t.MD5=s._createHelper(c),t.HmacMD5=s._createHmacHelper(c)}(Math),r.MD5)},function(e,t,n){var r;e.exports=(r=n(5),n(6),n(7),function(){var e=r,t=e.lib,n=t.Base,i=t.WordArray,s=e.algo,o=s.MD5,a=s.EvpKDF=n.extend({cfg:n.extend({keySize:4,hasher:o,iterations:1}),init:function(e){this.cfg=this.cfg.extend(e)},compute:function(e,t){for(var n=this.cfg,r=n.hasher.create(),s=i.create(),o=s.words,a=n.keySize,c=n.iterations;o.length<a;){l&&r.update(l);var l=r.update(e).finalize(t);r.reset();for(var u=1;u<c;u++)l=r.finalize(l),r.reset();s.concat(l)}return s.sigBytes=4*a,s}});e.EvpKDF=function(e,t,n){return a.create(n).compute(e,t)}}(),r.EvpKDF)},function(e,t,n){var r;e.exports=void((r=n(5)).lib.Cipher||function(e){var t=r,n=t.lib,i=n.Base,s=n.WordArray,o=n.BufferedBlockAlgorithm,a=t.enc;a.Utf8;var c=a.Base64,l=t.algo.EvpKDF,u=n.Cipher=o.extend({cfg:i.extend(),createEncryptor:function(e,t){return this.create(this._ENC_XFORM_MODE,e,t)},createDecryptor:function(e,t){return this.create(this._DEC_XFORM_MODE,e,t)},init:function(e,t,n){this.cfg=this.cfg.extend(n),this._xformMode=e,this._key=t,this.reset()},reset:function(){o.reset.call(this),this._doReset()},process:function(e){return this._append(e),this._process()},finalize:function(e){return e&&this._append(e),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function e(e){return"string"==typeof e?w:y}return function(t){return{encrypt:function(n,r,i){return e(r).encrypt(t,n,r,i)},decrypt:function(n,r,i){return e(r).decrypt(t,n,r,i)}}}}()});n.StreamCipher=u.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var h=t.mode={},d=n.BlockCipherMode=i.extend({createEncryptor:function(e,t){return this.Encryptor.create(e,t)},createDecryptor:function(e,t){return this.Decryptor.create(e,t)},init:function(e,t){this._cipher=e,this._iv=t}}),f=h.CBC=function(){var t=d.extend();function n(t,n,r){var i=this._iv;if(i){var s=i;this._iv=e}else s=this._prevBlock;for(var o=0;o<r;o++)t[n+o]^=s[o]}return t.Encryptor=t.extend({processBlock:function(e,t){var r=this._cipher,i=r.blockSize;n.call(this,e,t,i),r.encryptBlock(e,t),this._prevBlock=e.slice(t,t+i)}}),t.Decryptor=t.extend({processBlock:function(e,t){var r=this._cipher,i=r.blockSize,s=e.slice(t,t+i);r.decryptBlock(e,t),n.call(this,e,t,i),this._prevBlock=s}}),t}(),p=(t.pad={}).Pkcs7={pad:function(e,t){for(var n=4*t,r=n-e.sigBytes%n,i=r<<24|r<<16|r<<8|r,o=[],a=0;a<r;a+=4)o.push(i);var c=s.create(o,r);e.concat(c)},unpad:function(e){var t=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=t}};n.BlockCipher=u.extend({cfg:u.cfg.extend({mode:f,padding:p}),reset:function(){u.reset.call(this);var e=this.cfg,t=e.iv,n=e.mode;if(this._xformMode==this._ENC_XFORM_MODE)var r=n.createEncryptor;else r=n.createDecryptor,this._minBufferSize=1;this._mode=r.call(n,this,t&&t.words)},_doProcessBlock:function(e,t){this._mode.processBlock(e,t)},_doFinalize:function(){var e=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){e.pad(this._data,this.blockSize);var t=this._process(!0)}else t=this._process(!0),e.unpad(t);return t},blockSize:4});var g=n.CipherParams=i.extend({init:function(e){this.mixIn(e)},toString:function(e){return(e||this.formatter).stringify(this)}}),m=(t.format={}).OpenSSL={stringify:function(e){var t=e.ciphertext,n=e.salt;if(n)var r=s.create([1398893684,1701076831]).concat(n).concat(t);else r=t;return r.toString(c)},parse:function(e){var t=c.parse(e),n=t.words;if(1398893684==n[0]&&1701076831==n[1]){var r=s.create(n.slice(2,4));n.splice(0,4),t.sigBytes-=16}return g.create({ciphertext:t,salt:r})}},y=n.SerializableCipher=i.extend({cfg:i.extend({format:m}),encrypt:function(e,t,n,r){r=this.cfg.extend(r);var i=e.createEncryptor(n,r),s=i.finalize(t),o=i.cfg;return g.create({ciphertext:s,key:n,iv:o.iv,algorithm:e,mode:o.mode,padding:o.padding,blockSize:e.blockSize,formatter:r.format})},decrypt:function(e,t,n,r){return r=this.cfg.extend(r),t=this._parse(t,r.format),e.createDecryptor(n,r).finalize(t.ciphertext)},_parse:function(e,t){return"string"==typeof e?t.parse(e,this):e}}),v=(t.kdf={}).OpenSSL={execute:function(e,t,n,r){r||(r=s.random(8));var i=l.create({keySize:t+n}).compute(e,r),o=s.create(i.words.slice(t),4*n);return i.sigBytes=4*t,g.create({key:i,iv:o,salt:r})}},w=n.PasswordBasedCipher=y.extend({cfg:y.cfg.extend({kdf:v}),encrypt:function(e,t,n,r){var i=(r=this.cfg.extend(r)).kdf.execute(n,e.keySize,e.ivSize);r.iv=i.iv;var s=y.encrypt.call(this,e,t,i.key,r);return s.mixIn(i),s},decrypt:function(e,t,n,r){r=this.cfg.extend(r),t=this._parse(t,r.format);var i=r.kdf.execute(n,e.keySize,e.ivSize,t.salt);return r.iv=i.iv,y.decrypt.call(this,e,t,i.key,r)}})}())},function(e,t,n){var r;e.exports=(r=n(5),n(12),n(13),n(14),n(15),function(){var e=r,t=e.lib,n=t.WordArray,i=t.BlockCipher,s=e.algo,o=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],a=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],c=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],l=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],u=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],h=s.DES=i.extend({_doReset:function(){for(var e=this._key.words,t=[],n=0;n<56;n++){var r=o[n]-1;t[n]=e[r>>>5]>>>31-r%32&1}for(var i=this._subKeys=[],s=0;s<16;s++){var l=i[s]=[],u=c[s];for(n=0;n<24;n++)l[n/6|0]|=t[(a[n]-1+u)%28]<<31-n%6,l[4+(n/6|0)]|=t[28+(a[n+24]-1+u)%28]<<31-n%6;for(l[0]=l[0]<<1|l[0]>>>31,n=1;n<7;n++)l[n]=l[n]>>>4*(n-1)+3;l[7]=l[7]<<5|l[7]>>>27}var h=this._invSubKeys=[];for(n=0;n<16;n++)h[n]=i[15-n]},encryptBlock:function(e,t){this._doCryptBlock(e,t,this._subKeys)},decryptBlock:function(e,t){this._doCryptBlock(e,t,this._invSubKeys)},_doCryptBlock:function(e,t,n){this._lBlock=e[t],this._rBlock=e[t+1],d.call(this,4,252645135),d.call(this,16,65535),f.call(this,2,858993459),f.call(this,8,16711935),d.call(this,1,1431655765);for(var r=0;r<16;r++){for(var i=n[r],s=this._lBlock,o=this._rBlock,a=0,c=0;c<8;c++)a|=l[c][((o^i[c])&u[c])>>>0];this._lBlock=o,this._rBlock=s^a}var h=this._lBlock;this._lBlock=this._rBlock,this._rBlock=h,d.call(this,1,1431655765),f.call(this,8,16711935),f.call(this,2,858993459),d.call(this,16,65535),d.call(this,4,252645135),e[t]=this._lBlock,e[t+1]=this._rBlock},keySize:2,ivSize:2,blockSize:2});function d(e,t){var n=(this._lBlock>>>e^this._rBlock)&t;this._rBlock^=n,this._lBlock^=n<<e}function f(e,t){var n=(this._rBlock>>>e^this._lBlock)&t;this._lBlock^=n,this._rBlock^=n<<e}e.DES=i._createHelper(h);var p=s.TripleDES=i.extend({_doReset:function(){var e=this._key.words;this._des1=h.createEncryptor(n.create(e.slice(0,2))),this._des2=h.createEncryptor(n.create(e.slice(2,4))),this._des3=h.createEncryptor(n.create(e.slice(4,6)))},encryptBlock:function(e,t){this._des1.encryptBlock(e,t),this._des2.decryptBlock(e,t),this._des3.encryptBlock(e,t)},decryptBlock:function(e,t){this._des3.decryptBlock(e,t),this._des2.encryptBlock(e,t),this._des1.decryptBlock(e,t)},keySize:6,ivSize:2,blockSize:2});e.TripleDES=i._createHelper(p)}(),r.TripleDES)},function(e,t,n){var r;e.exports=(r=n(5),n(12),n(13),n(14),n(15),function(){var e=r,t=e.lib.StreamCipher,n=e.algo,i=[],s=[],o=[],a=n.Rabbit=t.extend({_doReset:function(){for(var e=this._key.words,t=this.cfg.iv,n=0;n<4;n++)e[n]=16711935&(e[n]<<8|e[n]>>>24)|4278255360&(e[n]<<24|e[n]>>>8);var r=this._X=[e[0],e[3]<<16|e[2]>>>16,e[1],e[0]<<16|e[3]>>>16,e[2],e[1]<<16|e[0]>>>16,e[3],e[2]<<16|e[1]>>>16],i=this._C=[e[2]<<16|e[2]>>>16,4294901760&e[0]|65535&e[1],e[3]<<16|e[3]>>>16,4294901760&e[1]|65535&e[2],e[0]<<16|e[0]>>>16,4294901760&e[2]|65535&e[3],e[1]<<16|e[1]>>>16,4294901760&e[3]|65535&e[0]];for(this._b=0,n=0;n<4;n++)c.call(this);for(n=0;n<8;n++)i[n]^=r[n+4&7];if(t){var s=t.words,o=s[0],a=s[1],l=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),u=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8),h=l>>>16|4294901760&u,d=u<<16|65535&l;for(i[0]^=l,i[1]^=h,i[2]^=u,i[3]^=d,i[4]^=l,i[5]^=h,i[6]^=u,i[7]^=d,n=0;n<4;n++)c.call(this)}},_doProcessBlock:function(e,t){var n=this._X;c.call(this),i[0]=n[0]^n[5]>>>16^n[3]<<16,i[1]=n[2]^n[7]>>>16^n[5]<<16,i[2]=n[4]^n[1]>>>16^n[7]<<16,i[3]=n[6]^n[3]>>>16^n[1]<<16;for(var r=0;r<4;r++)i[r]=16711935&(i[r]<<8|i[r]>>>24)|4278255360&(i[r]<<24|i[r]>>>8),e[t+r]^=i[r]},blockSize:4,ivSize:2});function c(){for(var e=this._X,t=this._C,n=0;n<8;n++)s[n]=t[n];for(t[0]=t[0]+1295307597+this._b|0,t[1]=t[1]+3545052371+(t[0]>>>0<s[0]>>>0?1:0)|0,t[2]=t[2]+886263092+(t[1]>>>0<s[1]>>>0?1:0)|0,t[3]=t[3]+1295307597+(t[2]>>>0<s[2]>>>0?1:0)|0,t[4]=t[4]+3545052371+(t[3]>>>0<s[3]>>>0?1:0)|0,t[5]=t[5]+886263092+(t[4]>>>0<s[4]>>>0?1:0)|0,t[6]=t[6]+1295307597+(t[5]>>>0<s[5]>>>0?1:0)|0,t[7]=t[7]+3545052371+(t[6]>>>0<s[6]>>>0?1:0)|0,this._b=t[7]>>>0<s[7]>>>0?1:0,n=0;n<8;n++){var r=e[n]+t[n],i=65535&r,a=r>>>16,c=((i*i>>>17)+i*a>>>15)+a*a,l=((4294901760&r)*r|0)+((65535&r)*r|0);o[n]=c^l}e[0]=o[0]+(o[7]<<16|o[7]>>>16)+(o[6]<<16|o[6]>>>16)|0,e[1]=o[1]+(o[0]<<8|o[0]>>>24)+o[7]|0,e[2]=o[2]+(o[1]<<16|o[1]>>>16)+(o[0]<<16|o[0]>>>16)|0,e[3]=o[3]+(o[2]<<8|o[2]>>>24)+o[1]|0,e[4]=o[4]+(o[3]<<16|o[3]>>>16)+(o[2]<<16|o[2]>>>16)|0,e[5]=o[5]+(o[4]<<8|o[4]>>>24)+o[3]|0,e[6]=o[6]+(o[5]<<16|o[5]>>>16)+(o[4]<<16|o[4]>>>16)|0,e[7]=o[7]+(o[6]<<8|o[6]>>>24)+o[5]|0}e.Rabbit=t._createHelper(a)}(),r.Rabbit)},function(e,t,n){var r;e.exports=(r=n(5),n(12),n(13),n(14),n(15),function(){var e=r,t=e.lib.StreamCipher,n=e.algo,i=n.RC4=t.extend({_doReset:function(){for(var e=this._key,t=e.words,n=e.sigBytes,r=this._S=[],i=0;i<256;i++)r[i]=i;i=0;for(var s=0;i<256;i++){var o=i%n,a=t[o>>>2]>>>24-o%4*8&255;s=(s+r[i]+a)%256;var c=r[i];r[i]=r[s],r[s]=c}this._i=this._j=0},_doProcessBlock:function(e,t){e[t]^=s.call(this)},keySize:8,ivSize:0});function s(){for(var e=this._S,t=this._i,n=this._j,r=0,i=0;i<4;i++){n=(n+e[t=(t+1)%256])%256;var s=e[t];e[t]=e[n],e[n]=s,r|=e[(e[t]+e[n])%256]<<24-8*i}return this._i=t,this._j=n,r}e.RC4=t._createHelper(i);var o=n.RC4Drop=i.extend({cfg:i.cfg.extend({drop:192}),_doReset:function(){i._doReset.call(this);for(var e=this.cfg.drop;e>0;e--)s.call(this)}});e.RC4Drop=t._createHelper(o)}(),r.RC4)}])}))}));let Fy,Uy,By;const Vy=new(on(Ly)),jy="user",zy="token",qy="leaderboard",Ky="userinfo",Hy="diary",Wy={easyGamesFailed:0,easyGamesWon:0,easyLPM:0,easyWPM:0,hardGamesFailed:0,hardGamesWon:0,hardLPM:0,hardWPM:0,mediumGamesFailed:0,mediumGamesWon:0,mediumLPM:0,mediumWPM:0};function Gy(){Fy=function(e,t={}){"object"!=typeof t&&(t={name:t});const n=Object.assign({name:Ht,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw Zt.create("bad-app-name",{appName:String(r)});const i=Gt.get(r);if(i){if(Tt(e,i.options)&&Tt(n,i.config))return i;throw Zt.create("duplicate-app",{appName:r})}const s=new $t(r);for(const e of Jt.values())s.addComponent(e);const o=new en(e,n,s);return Gt.set(r,o),o}({apiKey:"AIzaSyAcfFLGAnLbwIUCfyCYgayBl2oPvbu5RFQ",authDomain:"perfect-type.firebaseapp.com",projectId:"perfect-type",storageBucket:"perfect-type.appspot.com",messagingSenderId:"358376646912",appId:"1:358376646912:web:d750e4f6970556a8072be5",measurementId:"G-MDGFNKMNEC"}),wr(Fy),Uy=Fm(),By=function(e=nn()){return Qt(e,"firestore").getImmediate()}(),Ry(Fy,{provider:new Cy("6LfUF8EdAAAAAIsY52KJ4t-SzYybu1gZRYNk-Zce"),isTokenAutoRefreshEnabled:!0})}function Jy(){const e=Vy.get(jy);return null==e?null:e.length>0?JSON.parse(e):null}async function Xy(){if(null==Jy())return!1;let e=await async function(e){const t=Tf(By,Hy,e),n=(await np(t)).data();if(""==n.token)return!1;if(function(){const e=Vy.get(zy);return null==e?null:e.length>0?e:null}()===n.token)return await tv(e),!0;return!1}(Jy().uid);return e||await Qy(),null!=Jy()&&e}async function Yy(e,t,n){const r=Tf(By,e,t);return await function(e,t,n){e=yf(e,bf);const r=yf(e.firestore,If),i=function(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}(e.converter,t,n);return sp(r,[Uf(Ff(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,Fl.none())])}(r,n),n}async function Qy(){try{await Yy(Hy,Jy().uid,{token:""}),await Ng(Uy)}catch(e){console.log(e)}Ye(),Vy.set(jy,""),Vy.set(zy,"")}async function Zy(e){const t=Tf(By,qy,e);return(await np(t)).data()}async function ev(e,t){const n=Tf(By,Ky,e);await ip(n,t)}async function tv(e){let t=My(JSON.stringify(Jy())+Math.floor(1e9*Math.random()));var n;await Yy(Hy,e,{token:t}),n=t,Vy.set(zy,n)}function nv(e,{delay:n=0,duration:r=400,easing:i=t}={}){const s=+getComputedStyle(e).opacity;return{delay:n,duration:r,easing:i,css:e=>"opacity: "+e*s}}function rv(e,t,n){const r=e.slice();return r[19]=t[n],r[21]=n,r}function iv(e,t,n){const r=e.slice();return r[22]=t[n],r[21]=n,r}function sv(e,t,n){const r=e.slice();return r[24]=t[n],r[26]=n,r}function ov(e){let t,n;return t=new ct({props:{winGame:e[4],wpm:e[5],tryAgain:e[8]}}),{c(){le(t.$$.fragment)},m(e,r){ue(t,e,r),n=!0},p(e,n){const r={};16&n&&(r.winGame=e[4]),32&n&&(r.wpm=e[5]),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function av(e){let t,n,r,i,s,o,a,c,l;t=new ht({props:{mode:e[0],changeMode:e[6]}});let u=e[1],h=[];for(let t=0;t<u.length;t+=1)h[t]=lv(iv(e,u,t));let d=[...Array(10).keys()],f=[];for(let t=0;t<d.length;t+=1)f[t]=uv(rv(e,d,t));return{c(){le(t.$$.fragment),n=C(),r=S("span"),i=C(),s=S("div");for(let e=0;e<h.length;e+=1)h[e].c();o=C();for(let e=0;e<f.length;e+=1)f[e].c();a=C(),c=S("div"),D(r,"id","tracker"),D(r,"class","svelte-lhgb3g"),D(s,"class","game-environment noselect svelte-lhgb3g"),D(s,"id","game-env"),D(c,"id","occlusion"),D(c,"class","svelte-lhgb3g")},m(e,u){ue(t,e,u),T(e,n,u),T(e,r,u),T(e,i,u),T(e,s,u);for(let e=0;e<h.length;e+=1)h[e].m(s,null);b(s,o);for(let e=0;e<f.length;e+=1)f[e].m(s,null);T(e,a,u),T(e,c,u),l=!0},p(e,n){const r={};if(1&n&&(r.mode=e[0]),t.$set(r),6&n){let t;for(u=e[1],t=0;t<u.length;t+=1){const r=iv(e,u,t);h[t]?h[t].p(r,n):(h[t]=lv(r),h[t].c(),h[t].m(s,o))}for(;t<h.length;t+=1)h[t].d(1);h.length=u.length}},i(e){l||(ie(t.$$.fragment,e),l=!0)},o(e){se(t.$$.fragment,e),l=!1},d(e){he(t,e),e&&k(n),e&&k(r),e&&k(i),e&&k(s),I(h,e),I(f,e),e&&k(a),e&&k(c)}}}function cv(e){let t,n,r,i=e[24]+"";return{c(){t=S("div"),n=A(i),D(t,"class","game-letter svelte-lhgb3g"),D(t,"id",r=e[21]-1<0?`${e[26]}`:`${e[2][e[21]-1]+e[26]}`)},m(e,r){T(e,t,r),b(t,n)},p(e,s){2&s&&i!==(i=e[24]+"")&&x(n,i),4&s&&r!==(r=e[21]-1<0?`${e[26]}`:`${e[2][e[21]-1]+e[26]}`)&&D(t,"id",r)},d(e){e&&k(t)}}}function lv(e){let t,n,r=0!=e[21]&&function(e){let t,n,r;return{c(){t=S("div"),n=A(" "),D(t,"class","game-letter svelte-lhgb3g"),D(t,"id",r=""+(e[2][e[21]-1]-1))},m(e,r){T(e,t,r),b(t,n)},p(e,n){4&n&&r!==(r=""+(e[2][e[21]-1]-1))&&D(t,"id",r)},d(e){e&&k(t)}}}(e),i=e[22],s=[];for(let t=0;t<i.length;t+=1)s[t]=cv(sv(e,i,t));return{c(){t=S("div"),r&&r.c(),n=C();for(let e=0;e<s.length;e+=1)s[e].c();D(t,"class","game-word svelte-lhgb3g")},m(e,i){T(e,t,i),r&&r.m(t,null),b(t,n);for(let e=0;e<s.length;e+=1)s[e].m(t,null)},p(e,n){if(0!=e[21]&&r.p(e,n),6&n){let r;for(i=e[22],r=0;r<i.length;r+=1){const o=sv(e,i,r);s[r]?s[r].p(o,n):(s[r]=cv(o),s[r].c(),s[r].m(t,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=i.length}},d(e){e&&k(t),r&&r.d(),I(s,e)}}}function uv(e){let t;return{c(){t=S("div"),t.innerHTML='<div class="game-letter invisible-letter svelte-lhgb3g">if you see this sentence, you&#39;re awesome</div> \n        '},m(e,n){T(e,t,n)},d(e){e&&k(t)}}}function hv(t){let n,r,i,o,a,c,l;const u=[av,ov],h=[];function d(e,t){return e[3]?1:0}return r=d(t),i=h[r]=u[r](t),{c(){n=S("main"),i.c()},m(i,o){var u;T(i,n,o),h[r].m(n,null),a=!0,c||(u=t[7].call(null,n),l=u&&s(u.destroy)?u.destroy:e,c=!0)},p(e,[t]){let s=r;r=d(e),r===s?h[r].p(e,t):(ne(),se(h[s],1,1,(()=>{h[s]=null})),re(),i=h[r],i?i.p(e,t):(i=h[r]=u[r](e),i.c()),ie(i,1),i.m(n,null))},i(e){a||(ie(i),o||H((()=>{o=ae(n,nv,{}),o.start()})),a=!0)},o(e){se(i),a=!1},d(e){e&&k(n),h[r].d(),c=!1,l()}}}function dv(e,t,n){let r=!1;Xy().then((e=>r=e));let{currentRoute:i}=t,{params:s}=t,o="easy";const a={easy:5,medium:20,hard:50};let c;We.update((()=>a[o]));let l=et(),u=l.split(" "),h=[],d=!1,f=!1,p=0,g=0,m=0;for(let e=0;e<u.length;e++)h.push(e-1<0?u[e].length+1:u[e].length+h[e-1]+1);function y(){p=0,g=0,He.update((()=>0)),n(3,d=!1),n(4,f=!1),l=et(),n(1,u=l.split(" ")),n(2,h=[]);for(let e=0;e<u.length;e++)h.push(e-1<0?u[e].length+1:u[e].length+h[e-1]+1);n(0,o),nt()}return He.subscribe((e=>{c=e})),window.onresize=nt,F((()=>{nt()})),e.$$set=e=>{"currentRoute"in e&&n(9,i=e.currentRoute),"params"in e&&n(10,s=e.params)},[o,u,h,d,f,m,function(e){let t=document.getElementById(o);t.className=t.className.replace(" active-mode",""),document.getElementById(e.target.innerHTML).className+=" active-mode",n(0,o=e.target.innerHTML),We.update((()=>a[o]));for(let e=0;e<c;e++){document.getElementById(e).classList.remove("typed-letter")}y()},function(){const e=e=>{if(e.preventDefault(),d)"Enter"==e.key&&y();else{if(0==p&&(p=new Date),l.charAt(c)!==e.key){if(n(3,d=!0),r){let e=o+"GamesFailed";(async function(e,t){const n=Tf(By,Ky,e);return(await np(n)).data()[t]})(Jy().uid,e).then((t=>{let n={};n[e]=t+1,ev(Jy().uid,n)}))}}else!function(e){let t=document.getElementById(c);t.classList.add("typed-letter");let n=t.offsetLeft<g;n&&t.parentElement.scrollIntoView(!0);let r=document.getElementById(c+1);if(null!=r){let e=r.offsetLeft<t.offsetLeft;tracker.style.backgroundColor=e?"rgb(0, 0, 0, 0)":"var(--game-font-color)";let i=r.getBoundingClientRect();tracker.style.left=i.left+"px","&nbsp;"!=r.innerHTML?tracker.style.width="19.5px":n&&(tracker.style.width=i.width+8+"px")}g=t.offsetLeft}(),He.update((e=>e+1));if(c==l.length){let e=(new Date-p)/6e4,t=Math.round(l.length/e*1e3)/1e3;const i=4.7;if(n(5,m=Math.round((l.length-(u.length-1))/i/e*1e3)/1e3),n(3,d=!0),n(4,f=!0),r){let e=o+"GamesWon",n=o+"LPM",r=o+"WPM";(async function(e,t,n,r){const i=Tf(By,Ky,e),s=(await np(i)).data(),o={};return o[t]=s[t],o[n]=s[n],o[r]=s[r],o})(Jy().uid,e,n,r).then((i=>{let s={};s[e]=i[e]+1,s[n]=Math.round((i[n]*i[e]+t)/s[e]*1e3)/1e3,s[r]=Math.round((i[r]*i[e]+m)/s[e]*1e3)/1e3,ev(Jy().uid,s)}));let i=o+"_wpm";!async function(e,t,n){Zy(t).then((r=>{const i=[];let s=!1,o=new Date,a=o.getDate(),c=o.getMonth()+1,l=o.getFullYear(),u=e.email.substr(0,e.email.indexOf("@"));if(0==r.data.length)i.push(JSON.stringify({user:u,score:n,date:`${c}/${a}/${l}`})),s=!0;else if(r.data.length<5){let e=!1;for(let t=0;t<r.data.length;t++){let o=JSON.parse(r.data[t]);!e&&n>o.score&&(e=!0,s=!0,i.push(JSON.stringify({user:u,score:n,date:`${c}/${a}/${l}`}))),e?o.user!==u&&i.push(r.data[t]):(o.user===u&&(e=!0),i.push(r.data[t]))}e||(s=!0,i.push(JSON.stringify({user:u,score:n,date:`${c}/${a}/${l}`})))}else{let e=!1;for(let t=0;t<r.data.length;t++){let o=JSON.parse(r.data[t]);!e&&n>o.score&&(e=!0,s=!0,i.push(JSON.stringify({user:u,score:n,date:`${c}/${a}/${l}`}))),e?o.user!==u&&t!=r.data.length-1&&i.push(r.data[t]):(o.user===u&&(e=!0),i.push(r.data[t]))}}s&&ip(Tf(By,qy,t),{data:i})}))}(Jy(),i,m)}}}};return document.addEventListener("keypress",e),{destroy(){document.removeEventListener("keypress",e)}}},y,i,s]}class fv extends fe{constructor(e){super(),de(this,e,dv,hv,o,{currentRoute:9,params:10})}}function pv(t){let n,r,i,s,o,a,c;return{c(){n=S("div"),r=S("label"),i=A(t[1]),s=C(),o=S("input"),D(r,"for",t[2]),D(o,"id",t[2]),D(o,"type",t[4]),D(o,"name",t[2]),D(o,"autocomplete",t[3]),o.value=t[0],D(n,"class","input-container")},m(e,l){T(e,n,l),b(n,r),b(r,i),b(n,s),b(n,o),a||(c=N(o,"input",t[5]),a=!0)},p(e,[t]){2&t&&x(i,e[1]),4&t&&D(r,"for",e[2]),4&t&&D(o,"id",e[2]),16&t&&D(o,"type",e[4]),4&t&&D(o,"name",e[2]),8&t&&D(o,"autocomplete",e[3]),1&t&&o.value!==e[0]&&(o.value=e[0])},i:e,o:e,d(e){e&&k(n),a=!1,c()}}}function gv(e,t,n){let{value:r=""}=t,{text:i}=t,{id:s}=t,{autocomplete:o}=t,{type:a="text"}=t;return e.$$set=e=>{"value"in e&&n(0,r=e.value),"text"in e&&n(1,i=e.text),"id"in e&&n(2,s=e.id),"autocomplete"in e&&n(3,o=e.autocomplete),"type"in e&&n(4,a=e.type)},[r,i,s,o,a,e=>{n(0,r=e.target.value),function(e){let t=e.target.parentNode.querySelector("label");e.target.value.length>0?(t.style.top="-10px",t.style.fontSize="1em"):(t.style.top="10px",t.style.fontSize="1.5em")}(e)}]}class mv extends fe{constructor(e){super(),de(this,e,gv,pv,o,{value:0,text:1,id:2,autocomplete:3,type:4})}}function yv(e){let t,n,r,i,s,o,a,c,l,u,h,d,f,p,g,m,y,v,w,_,E,I,A;function x(t){e[9](t)}let O={text:"email",id:"email",type:"email",autocomplete:"email"};function P(t){e[10](t)}void 0!==e[1]&&(O.value=e[1]),a=new mv({props:O}),B.push((()=>ce(a,"value",x)));let $={text:"password",id:"password",type:"password",autocomplete:"current-password"};function M(e,t){return e[4]?bv:wv}void 0!==e[2]&&($.value=e[2]),u=new mv({props:$}),B.push((()=>ce(u,"value",P))),y=new st({props:{text:"login"}});let L=M(e),F=L(e);return{c(){t=S("form"),n=S("br"),r=C(),i=S("br"),s=C(),o=S("div"),le(a.$$.fragment),l=C(),le(u.$$.fragment),d=C(),f=S("br"),p=C(),g=S("br"),m=C(),le(y.$$.fragment),w=C(),F.c(),_=R(),D(o,"id","form-container")},m(c,h){T(c,t,h),b(t,n),b(t,r),b(t,i),b(t,s),b(t,o),ue(a,o,null),b(o,l),ue(u,o,null),b(t,d),b(t,f),b(t,p),b(t,g),b(t,m),ue(y,t,null),T(c,w,h),F.m(c,h),T(c,_,h),E=!0,I||(A=N(t,"submit",e[5]),I=!0)},p(e,t){const n={};!c&&2&t&&(c=!0,n.value=e[1],W((()=>c=!1))),a.$set(n);const r={};!h&&4&t&&(h=!0,r.value=e[2],W((()=>h=!1))),u.$set(r),L===(L=M(e))&&F?F.p(e,t):(F.d(1),F=L(e),F&&(F.c(),ie(F,1),F.m(_.parentNode,_)))},i(e){E||(ie(a.$$.fragment,e),ie(u.$$.fragment,e),ie(y.$$.fragment,e),v||H((()=>{v=ae(t,nv,{}),v.start()})),ie(F),E=!0)},o(e){se(a.$$.fragment,e),se(u.$$.fragment,e),se(y.$$.fragment,e),E=!1},d(e){e&&k(t),he(a),he(u),he(y),e&&k(w),F.d(e),e&&k(_),I=!1,A()}}}function vv(t){let n,r;return{c(){n=S("p"),n.textContent="logged in! redirecting to main..."},m(e,t){T(e,n,t)},p:e,i(e){r||H((()=>{r=ae(n,nv,{}),r.start()}))},o:e,d(e){e&&k(n)}}}function wv(t){let n,r;return{c(){n=S("p"),D(n,"id","error-indicator"),D(n,"class","svelte-k70b88")},m(e,r){T(e,n,r),n.innerHTML=t[3]},p(e,t){8&t&&(n.innerHTML=e[3])},i(e){r||H((()=>{r=ae(n,nv,{}),r.start()}))},o:e,d(e){e&&k(n)}}}function bv(t){let n,r,i,s,o,a,c;return{c(){n=S("p"),r=A("please verify your email! click "),i=S("span"),i.textContent="here",s=A(" to send another link."),D(i,"class","svelte-k70b88"),D(n,"id","error-indicator"),D(n,"class","svelte-k70b88")},m(e,o){T(e,n,o),b(n,r),b(n,i),b(n,s),a||(c=N(i,"click",t[6]),a=!0)},p:e,i(e){o||H((()=>{o=ae(n,nv,{}),o.start()}))},o:e,d(e){e&&k(n),a=!1,c()}}}function _v(e){let t,n,r,i,s,o;const a=[vv,yv],c=[];function l(e,t){return e[0]?0:1}return i=l(e),s=c[i]=a[i](e),{c(){t=S("main"),n=S("h1"),n.textContent="login",r=C(),s.c()},m(e,s){T(e,t,s),b(t,n),b(t,r),c[i].m(t,null),o=!0},p(e,[n]){let r=i;i=l(e),i===r?c[i].p(e,n):(ne(),se(c[r],1,1,(()=>{c[r]=null})),re(),s=c[i],s?s.p(e,n):(s=c[i]=a[i](e),s.c()),ie(s,1),s.m(t,null))},i(e){o||(ie(s),o=!0)},o(e){se(s),o=!1},d(e){e&&k(t),c[i].d()}}}function Ev(e,t,n){let r,i,s,{currentRoute:o}=t,{params:a}=t,c=!1,l="",u=!1;return e.$$set=e=>{"currentRoute"in e&&n(7,o=e.currentRoute),"params"in e&&n(8,a=e.params)},[c,r,i,l,u,function(e){e&&e.preventDefault(),async function(e,t){try{const n=await Cg(Uy,e,t);return n.user.emailVerified?(Vy.set(jy,JSON.stringify(n.user)),await tv(Jy().uid),{success:!0}):(await Ng(Uy),{data:n.user,success:!1})}catch(e){return{message:Ze(e.message),success:!1}}}(r,i).then((e=>{n(4,u=!1),e.success?(n(3,l=""),n(0,c=!0),Ye(1e3)):(s=e.data,e.data?(n(3,l=""),n(4,u=!0)):n(3,l=e.message))}))},function(){Rg(s),n(4,u=!1)},o,a,function(e){r=e,n(1,r)},function(e){i=e,n(2,i)}]}function Tv(e){let t,n,r,i,s,o,a,c,l,u,h,d,f,p,g,m,y,v,w,_,E,I,A,R,x,O;function P(t){e[8](t)}let $={text:"email",id:"email",type:"email",autocomplete:"email"};function M(t){e[9](t)}void 0!==e[1]&&($.value=e[1]),n=new mv({props:$}),B.push((()=>ce(n,"value",P)));let L={text:"password",id:"password",type:"password",autocomplete:"new-password"};function F(t){e[10](t)}void 0!==e[2]&&(L.value=e[2]),u=new mv({props:L}),B.push((()=>ce(u,"value",M)));let U={text:"confirm password",id:"con-password",type:"password",autocomplete:"new-password"};return void 0!==e[3]&&(U.value=e[3]),f=new mv({props:U}),B.push((()=>ce(f,"value",F))),_=new st({props:{text:"signup"}}),{c(){t=S("form"),le(n.$$.fragment),i=C(),s=S("br"),o=C(),a=S("br"),c=C(),l=S("div"),le(u.$$.fragment),d=C(),le(f.$$.fragment),g=C(),m=S("br"),y=C(),v=S("br"),w=C(),le(_.$$.fragment),I=C(),A=S("p"),D(l,"id","form-container"),D(A,"id","error-indicator"),D(A,"class","svelte-1v1ayny")},m(r,h){T(r,t,h),ue(n,t,null),b(t,i),b(t,s),b(t,o),b(t,a),b(t,c),b(t,l),ue(u,l,null),b(l,d),ue(f,l,null),b(t,g),b(t,m),b(t,y),b(t,v),b(t,w),ue(_,t,null),T(r,I,h),T(r,A,h),A.innerHTML=e[4],R=!0,x||(O=N(t,"submit",e[5]),x=!0)},p(e,t){const i={};!r&&2&t&&(r=!0,i.value=e[1],W((()=>r=!1))),n.$set(i);const s={};!h&&4&t&&(h=!0,s.value=e[2],W((()=>h=!1))),u.$set(s);const o={};!p&&8&t&&(p=!0,o.value=e[3],W((()=>p=!1))),f.$set(o),(!R||16&t)&&(A.innerHTML=e[4])},i(e){R||(ie(n.$$.fragment,e),ie(u.$$.fragment,e),ie(f.$$.fragment,e),ie(_.$$.fragment,e),E||H((()=>{E=ae(t,nv,{}),E.start()})),R=!0)},o(e){se(n.$$.fragment,e),se(u.$$.fragment,e),se(f.$$.fragment,e),se(_.$$.fragment,e),R=!1},d(e){e&&k(t),he(n),he(u),he(f),he(_),e&&k(I),e&&k(A),x=!1,O()}}}function kv(t){let n,r,i,s,o;return{c(){n=S("h1"),n.textContent="signed up! now just verify your email.",i=C(),s=S("h3"),s.innerHTML='once you&#39;ve done that, login <a href="/login">here</a>.'},m(e,t){T(e,n,t),T(e,i,t),T(e,s,t)},p:e,i(e){r||H((()=>{r=ae(n,nv,{}),r.start()})),o||H((()=>{o=ae(s,nv,{}),o.start()}))},o:e,d(e){e&&k(n),e&&k(i),e&&k(s)}}}function Iv(e){let t,n,r,i,s,o;const a=[kv,Tv],c=[];function l(e,t){return e[0]?0:1}return i=l(e),s=c[i]=a[i](e),{c(){t=S("main"),n=S("h1"),n.textContent="sign up",r=C(),s.c()},m(e,s){T(e,t,s),b(t,n),b(t,r),c[i].m(t,null),o=!0},p(e,[n]){let r=i;i=l(e),i===r?c[i].p(e,n):(ne(),se(c[r],1,1,(()=>{c[r]=null})),re(),s=c[i],s?s.p(e,n):(s=c[i]=a[i](e),s.c()),ie(s,1),s.m(t,null))},i(e){o||(ie(s),o=!0)},o(e){se(s),o=!1},d(e){e&&k(t),c[i].d()}}}function Sv(e,t,n){let r,i,s,{currentRoute:o}=t,{params:a}=t,c=!1,l="";return e.$$set=e=>{"currentRoute"in e&&n(6,o=e.currentRoute),"params"in e&&n(7,a=e.params)},[c,r,i,s,l,function(e){e&&e.preventDefault(),function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(r)?s===i?i.length<8?n(4,l="Passwords too short!"):async function(e,t){try{const n=await Ag(Uy,e,t);await Rg(n.user),await Ng(Uy);let r=Object.assign({},Qe);return r.uid=n.user.uid,r.email=n.user.email,await Yy("users",r.uid,r),await Yy(Ky,r.uid,Wy),{success:!0}}catch(e){return{message:Ze(e.message),success:!1}}}(r,i).then((e=>{e.success?(n(0,c=!0),n(4,l="")):n(4,l=e.message)})):n(4,l="Passwords do not match!"):n(4,l="Invalid email!")},o,a,function(e){r=e,n(1,r)},function(e){i=e,n(2,i)},function(e){s=e,n(3,s)}]}function Av(e){let t,n,r,i,s,o,a,c;const u=e[2].default,p=l(u,e,e[1],null),g=p||function(e){let t;return{c(){t=A("default card")},m(e,n){T(e,t,n)},d(e){e&&k(t)}}}();return{c(){t=S("div"),n=S("h2"),r=A(e[0]),i=C(),s=S("div"),o=S("p"),g&&g.c(),D(s,"class","container svelte-cerbtu"),D(t,"class","card svelte-cerbtu")},m(e,a){T(e,t,a),b(t,n),b(n,r),b(t,i),b(t,s),b(s,o),g&&g.m(o,null),c=!0},p(e,[t]){(!c||1&t)&&x(r,e[0]),p&&p.p&&(!c||2&t)&&d(p,u,e,e[1],c?h(u,e[1],t,null):f(e[1]),null)},i(e){c||(ie(g,e),a||H((()=>{a=ae(t,nv,{}),a.start()})),c=!0)},o(e){se(g,e),c=!1},d(e){e&&k(t),g&&g.d(e)}}}function Cv(e,t,n){let{$$slots:r={},$$scope:i}=t,{title:s}=t;return e.$$set=e=>{"title"in e&&n(0,s=e.title),"$$scope"in e&&n(1,i=e.$$scope)},[s,i,r]}class Rv extends fe{constructor(e){super(),de(this,e,Cv,Av,o,{title:0})}}function Nv(t){let n,r,i,s,o,a,c,l,u,h,d,f,p,g,m,y=`overall: ${Math.round(100*t[0])/100}${t[4]}`,v=`${Math.round(100*t[1])/100}${t[4]}`,w=`${Math.round(100*t[2])/100}${t[4]}`,_=`${Math.round(100*t[3])/100}${t[4]}`;return{c(){n=S("p"),r=A(y),i=C(),s=S("table"),o=S("tr"),o.innerHTML='<td class="heading svelte-1e40qcb">easy</td> \n      <td class="heading svelte-1e40qcb">medium</td> \n      <td class="heading svelte-1e40qcb">hard</td>',a=C(),c=S("tr"),l=S("td"),u=A(v),h=C(),d=S("td"),f=A(w),p=C(),g=S("td"),m=A(_),D(l,"class","svelte-1e40qcb"),D(d,"class","svelte-1e40qcb"),D(g,"class","svelte-1e40qcb"),D(s,"class","center-table svelte-1e40qcb")},m(e,t){T(e,n,t),b(n,r),T(e,i,t),T(e,s,t),b(s,o),b(s,a),b(s,c),b(c,l),b(l,u),b(c,h),b(c,d),b(d,f),b(c,p),b(c,g),b(g,m)},p(e,t){17&t&&y!==(y=`overall: ${Math.round(100*e[0])/100}${e[4]}`)&&x(r,y),18&t&&v!==(v=`${Math.round(100*e[1])/100}${e[4]}`)&&x(u,v),20&t&&w!==(w=`${Math.round(100*e[2])/100}${e[4]}`)&&x(f,w),24&t&&_!==(_=`${Math.round(100*e[3])/100}${e[4]}`)&&x(m,_)},i:e,o:e,d(e){e&&k(n),e&&k(i),e&&k(s)}}}function Dv(e){let t;const n=e[6].default,r=l(n,e,e[5],null);return{c(){r&&r.c()},m(e,n){r&&r.m(e,n),t=!0},p(e,i){r&&r.p&&(!t||32&i)&&d(r,n,e,e[5],t?h(n,e[5],i,null):f(e[5]),null)},i(e){t||(ie(r,e),t=!0)},o(e){se(r,e),t=!1},d(e){r&&r.d(e)}}}function xv(e){let t,n,r,i;const s=[Dv,Nv],o=[];function a(e,t){return null==e[0]?0:1}return t=a(e),n=o[t]=s[t](e),{c(){n.c(),r=R()},m(e,n){o[t].m(e,n),T(e,r,n),i=!0},p(e,[i]){let c=t;t=a(e),t===c?o[t].p(e,i):(ne(),se(o[c],1,1,(()=>{o[c]=null})),re(),n=o[t],n?n.p(e,i):(n=o[t]=s[t](e),n.c()),ie(n,1),n.m(r.parentNode,r))},i(e){i||(ie(n),i=!0)},o(e){se(n),i=!1},d(e){o[t].d(e),e&&k(r)}}}function Ov(e,t,n){let{$$slots:r={},$$scope:i}=t,{overall:s=null}=t,{easy:o=null}=t,{medium:a=null}=t,{hard:c=null}=t,{units:l=null}=t;return e.$$set=e=>{"overall"in e&&n(0,s=e.overall),"easy"in e&&n(1,o=e.easy),"medium"in e&&n(2,a=e.medium),"hard"in e&&n(3,c=e.hard),"units"in e&&n(4,l=e.units),"$$scope"in e&&n(5,i=e.$$scope)},[s,o,a,c,l,i,r]}class Pv extends fe{constructor(e){super(),de(this,e,Ov,xv,o,{overall:0,easy:1,medium:2,hard:3,units:4})}}function $v(e){let t,n,r,i,s,o,a,c,l,u,h,d,f;return t=new Rv({props:{title:e[16],$$slots:{default:[Lv]},$$scope:{ctx:e}}}),o=new Rv({props:{title:"total games",$$slots:{default:[Fv]},$$scope:{ctx:e}}}),c=new Rv({props:{title:"pass rate",$$slots:{default:[Uv]},$$scope:{ctx:e}}}),u=new Rv({props:{title:"avg words per minute",$$slots:{default:[Bv]},$$scope:{ctx:e}}}),d=new Rv({props:{title:"avg letters per minute",$$slots:{default:[Vv]},$$scope:{ctx:e}}}),{c(){le(t.$$.fragment),n=C(),r=S("br"),i=C(),s=S("div"),le(o.$$.fragment),a=C(),le(c.$$.fragment),l=C(),le(u.$$.fragment),h=C(),le(d.$$.fragment),D(s,"class","card-collection svelte-1y3sr8l")},m(e,p){ue(t,e,p),T(e,n,p),T(e,r,p),T(e,i,p),T(e,s,p),ue(o,s,null),b(s,a),ue(c,s,null),b(s,l),ue(u,s,null),b(s,h),ue(d,s,null),f=!0},p(e,n){const r={};524288&n&&(r.$$scope={dirty:n,ctx:e}),t.$set(r);const i={};524303&n&&(i.$$scope={dirty:n,ctx:e}),o.$set(i);const s={};585728&n&&(s.$$scope={dirty:n,ctx:e}),c.$set(s);const a={};524528&n&&(a.$$scope={dirty:n,ctx:e}),u.$set(a);const l={};528128&n&&(l.$$scope={dirty:n,ctx:e}),d.$set(l)},i(e){f||(ie(t.$$.fragment,e),ie(o.$$.fragment,e),ie(c.$$.fragment,e),ie(u.$$.fragment,e),ie(d.$$.fragment,e),f=!0)},o(e){se(t.$$.fragment,e),se(o.$$.fragment,e),se(c.$$.fragment,e),se(u.$$.fragment,e),se(d.$$.fragment,e),f=!1},d(e){he(t,e),e&&k(n),e&&k(r),e&&k(i),e&&k(s),he(o),he(c),he(u),he(d)}}}function Mv(t){let n,r;return{c(){var e,t;n=S("img"),e=n.src,t=r=zv,a||(a=document.createElement("a")),a.href=t,e!==a.href&&D(n,"src",r),D(n,"alt","Avatar"),D(n,"class","svelte-1y3sr8l")},m(e,t){T(e,n,t)},p:e,d(e){e&&k(n)}}}function Lv(e){let t,n;return t=new Pv({props:{$$slots:{default:[Mv]},$$scope:{ctx:e}}}),{c(){le(t.$$.fragment)},m(e,r){ue(t,e,r),n=!0},p(e,n){const r={};524288&n&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function Fv(e){let t,n;return t=new Pv({props:{overall:e[0],easy:e[1],medium:e[2],hard:e[3],units:""}}),{c(){le(t.$$.fragment)},m(e,r){ue(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.overall=e[0]),2&n&&(r.easy=e[1]),4&n&&(r.medium=e[2]),8&n&&(r.hard=e[3]),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function Uv(e){let t,n;return t=new Pv({props:{overall:100*e[12],easy:100*e[13],medium:100*e[14],hard:100*e[15],units:"%"}}),{c(){le(t.$$.fragment)},m(e,r){ue(t,e,r),n=!0},p(e,n){const r={};4096&n&&(r.overall=100*e[12]),8192&n&&(r.easy=100*e[13]),16384&n&&(r.medium=100*e[14]),32768&n&&(r.hard=100*e[15]),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function Bv(e){let t,n;return t=new Pv({props:{overall:e[4],easy:e[5],medium:e[6],hard:e[7],units:""}}),{c(){le(t.$$.fragment)},m(e,r){ue(t,e,r),n=!0},p(e,n){const r={};16&n&&(r.overall=e[4]),32&n&&(r.easy=e[5]),64&n&&(r.medium=e[6]),128&n&&(r.hard=e[7]),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function Vv(e){let t,n;return t=new Pv({props:{overall:e[8],easy:e[9],medium:e[10],hard:e[11],units:""}}),{c(){le(t.$$.fragment)},m(e,r){ue(t,e,r),n=!0},p(e,n){const r={};256&n&&(r.overall=e[8]),512&n&&(r.easy=e[9]),1024&n&&(r.medium=e[10]),2048&n&&(r.hard=e[11]),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function jv(e){let t,n,r,i,s=null!=e[0]&&$v(e);return{c(){t=S("main"),n=S("h1"),n.textContent="profile",r=C(),s&&s.c()},m(e,o){T(e,t,o),b(t,n),b(t,r),s&&s.m(t,null),i=!0},p(e,[n]){null!=e[0]?s?(s.p(e,n),1&n&&ie(s,1)):(s=$v(e),s.c(),ie(s,1),s.m(t,null)):s&&(ne(),se(s,1,1,(()=>{s=null})),re())},i(e){i||(ie(s),i=!0)},o(e){se(s),i=!1},d(e){e&&k(t),s&&s.d()}}}let zv=" /default_avatar.png";function qv(e,t,n){let r,i,s,o,a,c,l,u,h,d,f,p,g,m,y,v,{currentRoute:w}=t,{params:b}=t,_=Jy().email.substr(0,Jy().email.indexOf("@"));return F((()=>{(async function(e){const t=Tf(By,Ky,e);return(await np(t)).data()})(Jy().uid).then((e=>{n(1,i=e.easyGamesFailed+e.easyGamesWon),n(2,s=e.mediumGamesFailed+e.mediumGamesWon),n(3,o=e.hardGamesFailed+e.hardGamesWon),n(0,r=i+s+o);let t=e.easyGamesWon+e.mediumGamesWon+e.hardGamesWon;n(5,c=e.easyWPM),n(9,d=e.easyLPM),n(6,l=e.mediumWPM),n(10,f=e.mediumLPM),n(7,u=e.hardWPM),n(11,p=e.hardLPM),n(4,a=0!=r?(c*e.easyGamesWon+l*e.mediumGamesWon+u*e.hardGamesWon)/t:0),n(8,h=0!=r?(d*e.easyGamesWon+f*e.mediumGamesWon+p*e.hardGamesWon)/t:0),n(13,m=0!=i?Math.round(e.easyGamesWon/i*100)/100:0),n(14,y=0!=s?Math.round(e.mediumGamesWon/s*100)/100:0),n(15,v=0!=o?Math.round(e.hardGamesWon/o*100)/100:0),n(12,g=0!=r?Math.round(t/r*100)/100:0)}))})),e.$$set=e=>{"currentRoute"in e&&n(17,w=e.currentRoute),"params"in e&&n(18,b=e.params)},[r,i,s,o,a,c,l,u,h,d,f,p,g,m,y,v,_,w,b]}function Kv(t){let n,r,i,s,o,a,c,l,u,h,d,f,p,g,m=`${t[2]}`;return{c(){n=S("div"),r=S("div"),i=S("strong"),s=A(m),o=C(),a=S("div"),c=A(t[0]),l=C(),u=S("br"),h=C(),d=A(t[3]),f=C(),p=S("div"),g=A(t[1]),D(r,"class","block-item svelte-bohzy1"),D(a,"class","block-item date svelte-bohzy1"),D(p,"class","block-item score svelte-bohzy1"),D(n,"class","leaderboard-env svelte-bohzy1")},m(e,t){T(e,n,t),b(n,r),b(r,i),b(i,s),b(n,o),b(n,a),b(a,c),b(a,l),b(a,u),b(a,h),b(a,d),b(n,f),b(n,p),b(p,g)},p(e,[t]){4&t&&m!==(m=`${e[2]}`)&&x(s,m),1&t&&x(c,e[0]),8&t&&x(d,e[3]),2&t&&x(g,e[1])},i:e,o:e,d(e){e&&k(n)}}}function Hv(e,t,n){let{user:r}=t,{score:i}=t,{place:s}=t,{date:o}=t;return e.$$set=e=>{"user"in e&&n(0,r=e.user),"score"in e&&n(1,i=e.score),"place"in e&&n(2,s=e.place),"date"in e&&n(3,o=e.date)},[r,i,s,o]}class Wv extends fe{constructor(e){super(),de(this,e,Hv,Kv,o,{user:0,score:1,place:2,date:3})}}function Gv(e,t,n){const r=e.slice();return r[5]=t[n],r[7]=n,r}function Jv(e,t,n){const r=e.slice();return r[5]=t[n],r[7]=n,r}function Xv(e,t,n){const r=e.slice();return r[5]=t[n],r[7]=n,r}function Yv(e){let t,n;return t=new Rv({props:{title:"easy (wpm)",$$slots:{default:[Zv]},$$scope:{ctx:e}}}),{c(){le(t.$$.fragment)},m(e,r){ue(t,e,r),n=!0},p(e,n){const r={};1025&n&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function Qv(e){let t,n;return t=new Wv({props:{user:e[5].user,score:e[5].score,date:e[5].date,place:e[7]+1}}),{c(){le(t.$$.fragment)},m(e,r){ue(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.user=e[5].user),1&n&&(r.score=e[5].score),1&n&&(r.date=e[5].date),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function Zv(e){let t,n,r=e[0],i=[];for(let t=0;t<r.length;t+=1)i[t]=Qv(Xv(e,r,t));const s=e=>se(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=R()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);T(e,t,r),n=!0},p(e,n){if(1&n){let o;for(r=e[0],o=0;o<r.length;o+=1){const s=Xv(e,r,o);i[o]?(i[o].p(s,n),ie(i[o],1)):(i[o]=Qv(s),i[o].c(),ie(i[o],1),i[o].m(t.parentNode,t))}for(ne(),o=r.length;o<i.length;o+=1)s(o);re()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)ie(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)se(i[e]);n=!1},d(e){I(i,e),e&&k(t)}}}function ew(e){let t,n;return t=new Rv({props:{title:"medium (wpm)",$$slots:{default:[nw]},$$scope:{ctx:e}}}),{c(){le(t.$$.fragment)},m(e,r){ue(t,e,r),n=!0},p(e,n){const r={};1026&n&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function tw(e){let t,n;return t=new Wv({props:{user:e[5].user,score:e[5].score,date:e[5].date,place:e[7]+1}}),{c(){le(t.$$.fragment)},m(e,r){ue(t,e,r),n=!0},p(e,n){const r={};2&n&&(r.user=e[5].user),2&n&&(r.score=e[5].score),2&n&&(r.date=e[5].date),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function nw(e){let t,n,r=e[1],i=[];for(let t=0;t<r.length;t+=1)i[t]=tw(Jv(e,r,t));const s=e=>se(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=R()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);T(e,t,r),n=!0},p(e,n){if(2&n){let o;for(r=e[1],o=0;o<r.length;o+=1){const s=Jv(e,r,o);i[o]?(i[o].p(s,n),ie(i[o],1)):(i[o]=tw(s),i[o].c(),ie(i[o],1),i[o].m(t.parentNode,t))}for(ne(),o=r.length;o<i.length;o+=1)s(o);re()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)ie(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)se(i[e]);n=!1},d(e){I(i,e),e&&k(t)}}}function rw(e){let t,n;return t=new Rv({props:{title:"hard (wpm)",$$slots:{default:[sw]},$$scope:{ctx:e}}}),{c(){le(t.$$.fragment)},m(e,r){ue(t,e,r),n=!0},p(e,n){const r={};1028&n&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function iw(e){let t,n;return t=new Wv({props:{user:e[5].user,score:e[5].score,date:e[5].date,place:e[7]+1}}),{c(){le(t.$$.fragment)},m(e,r){ue(t,e,r),n=!0},p(e,n){const r={};4&n&&(r.user=e[5].user),4&n&&(r.score=e[5].score),4&n&&(r.date=e[5].date),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function sw(e){let t,n,r=e[2],i=[];for(let t=0;t<r.length;t+=1)i[t]=iw(Gv(e,r,t));const s=e=>se(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=R()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);T(e,t,r),n=!0},p(e,n){if(4&n){let o;for(r=e[2],o=0;o<r.length;o+=1){const s=Gv(e,r,o);i[o]?(i[o].p(s,n),ie(i[o],1)):(i[o]=iw(s),i[o].c(),ie(i[o],1),i[o].m(t.parentNode,t))}for(ne(),o=r.length;o<i.length;o+=1)s(o);re()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)ie(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)se(i[e]);n=!1},d(e){I(i,e),e&&k(t)}}}function ow(e){let t,n,r,i,s,o,a,c=0!=e[0].length&&Yv(e),l=0!=e[1].length&&ew(e),u=0!=e[2].length&&rw(e);return{c(){t=S("main"),n=S("h1"),n.textContent="leaderboard",r=C(),i=S("div"),c&&c.c(),s=C(),l&&l.c(),o=C(),u&&u.c(),D(i,"class","card-collection svelte-1fut4fz")},m(e,h){T(e,t,h),b(t,n),b(t,r),b(t,i),c&&c.m(i,null),b(i,s),l&&l.m(i,null),b(i,o),u&&u.m(i,null),a=!0},p(e,[t]){0!=e[0].length?c?(c.p(e,t),1&t&&ie(c,1)):(c=Yv(e),c.c(),ie(c,1),c.m(i,s)):c&&(ne(),se(c,1,1,(()=>{c=null})),re()),0!=e[1].length?l?(l.p(e,t),2&t&&ie(l,1)):(l=ew(e),l.c(),ie(l,1),l.m(i,o)):l&&(ne(),se(l,1,1,(()=>{l=null})),re()),0!=e[2].length?u?(u.p(e,t),4&t&&ie(u,1)):(u=rw(e),u.c(),ie(u,1),u.m(i,null)):u&&(ne(),se(u,1,1,(()=>{u=null})),re())},i(e){a||(ie(c),ie(l),ie(u),a=!0)},o(e){se(c),se(l),se(u),a=!1},d(e){e&&k(t),c&&c.d(),l&&l.d(),u&&u.d()}}}function aw(e,t,n){let{currentRoute:r}=t,{params:i}=t,s=[],o=[],a=[];return F((()=>{Zy("easy_wpm").then((e=>{e.data.forEach((e=>s.push(JSON.parse(e)))),n(0,s)})),Zy("medium_wpm").then((e=>{e.data.forEach((e=>o.push(JSON.parse(e)))),n(1,o)})),Zy("hard_wpm").then((e=>{e.data.forEach((e=>a.push(JSON.parse(e)))),n(2,a)}))})),e.$$set=e=>{"currentRoute"in e&&n(3,r=e.currentRoute),"params"in e&&n(4,i=e.params)},[s,o,a,r,i]}function cw(t){let n,r,i,s,o;return s=new st({props:{text:"return home",onClickFn:Ye}}),{c(){n=S("main"),r=S("h2"),r.textContent="oops, looks like that page doesn't exist",i=C(),le(s.$$.fragment)},m(e,t){T(e,n,t),b(n,r),b(n,i),ue(s,n,null),o=!0},p:e,i(e){o||(ie(s.$$.fragment,e),o=!0)},o(e){se(s.$$.fragment,e),o=!1},d(e){e&&k(n),he(s)}}}function lw(e,t,n){let{currentRoute:r}=t,{params:i}=t;return e.$$set=e=>{"currentRoute"in e&&n(0,r=e.currentRoute),"params"in e&&n(1,i=e.params)},[r,i]}function uw(t){let n,r,i;return{c(){n=S("main"),r=S("h1"),r.textContent="logging you out"},m(e,t){T(e,n,t),b(n,r)},p:e,i(e){i||H((()=>{i=ae(r,nv,{}),i.start()}))},o:e,d(e){e&&k(n)}}}function hw(e,t,n){Qy();let{currentRoute:r}=t,{params:i}=t;return e.$$set=e=>{"currentRoute"in e&&n(0,r=e.currentRoute),"params"in e&&n(1,i=e.params)},[r,i]}function dw(e){let t,n,r,i,s,o,a;return{c(){t=S("p"),t.textContent="taco enthusiast",n=C(),r=S("p"),r.innerHTML='website: <a href="https://youtu.be/QtBDL8EiNZo">davedlu.com</a>',i=C(),s=S("p"),s.innerHTML='linkedin: <a href="https://www.linkedin.com/in/davidluprofile">davidluprofile</a>',o=C(),a=S("p"),a.innerHTML='github: <a href="https://github.com/davidlu51412">davidlu51412</a>'},m(e,c){T(e,t,c),T(e,n,c),T(e,r,c),T(e,i,c),T(e,s,c),T(e,o,c),T(e,a,c)},d(e){e&&k(t),e&&k(n),e&&k(r),e&&k(i),e&&k(s),e&&k(o),e&&k(a)}}}function fw(e){let t,n,r,i,s,o,a;return{c(){t=S("p"),t.textContent="also a taco enthusiast",n=C(),r=S("p"),r.innerHTML='website: <a href="https://aszala.com">aszala.com</a>',i=C(),s=S("p"),s.innerHTML='linkedin: <a href="https://www.linkedin.com/in/aszala">aszala</a>',o=C(),a=S("p"),a.innerHTML='github: <a href="https://www.github.com/aszala">aszala</a>'},m(e,c){T(e,t,c),T(e,n,c),T(e,r,c),T(e,i,c),T(e,s,c),T(e,o,c),T(e,a,c)},d(e){e&&k(t),e&&k(n),e&&k(r),e&&k(i),e&&k(s),e&&k(o),e&&k(a)}}}function pw(e){let t,n,r,i,s,o;return r=new Rv({props:{title:"david lu",$$slots:{default:[dw]},$$scope:{ctx:e}}}),s=new Rv({props:{title:"abhay zala",$$slots:{default:[fw]},$$scope:{ctx:e}}}),{c(){t=S("main"),n=S("div"),le(r.$$.fragment),i=C(),le(s.$$.fragment),D(n,"class","card-collection svelte-jfc25t")},m(e,a){T(e,t,a),b(t,n),ue(r,n,null),b(n,i),ue(s,n,null),o=!0},p(e,[t]){const n={};4&t&&(n.$$scope={dirty:t,ctx:e}),r.$set(n);const i={};4&t&&(i.$$scope={dirty:t,ctx:e}),s.$set(i)},i(e){o||(ie(r.$$.fragment,e),ie(s.$$.fragment,e),o=!0)},o(e){se(r.$$.fragment,e),se(s.$$.fragment,e),o=!1},d(e){e&&k(t),he(r),he(s)}}}function gw(e,t,n){let{currentRoute:r}=t,{params:i}=t;return e.$$set=e=>{"currentRoute"in e&&n(0,r=e.currentRoute),"params"in e&&n(1,i=e.params)},[r,i]}async function mw(){return!await Xy()}const yw=[{name:"/",component:fv},{name:"index",component:fv,onlyIf:{guard:()=>!1,redirect:"/"}},{name:"login",component:class extends fe{constructor(e){super(),de(this,e,Ev,_v,o,{currentRoute:7,params:8})}},onlyIf:{guard:mw,redirect:"/"}},{name:"signup",component:class extends fe{constructor(e){super(),de(this,e,Sv,Iv,o,{currentRoute:6,params:7})}},onlyIf:{guard:mw,redirect:"/"}},{name:"profile",component:class extends fe{constructor(e){super(),de(this,e,qv,jv,o,{currentRoute:17,params:18})}},onlyIf:{guard:Xy,redirect:"/"}},{name:"leaderboard",component:class extends fe{constructor(e){super(),de(this,e,aw,ow,o,{currentRoute:3,params:4})}}},{name:"logout",component:class extends fe{constructor(e){super(),de(this,e,hw,uw,o,{currentRoute:0,params:1})}},onlyIf:{guard:Xy,redirect:"/"}},{name:"404",component:class extends fe{constructor(e){super(),de(this,e,lw,cw,o,{currentRoute:0,params:1})}}},{name:"creators",component:class extends fe{constructor(e){super(),de(this,e,gw,pw,o,{currentRoute:0,params:1})}}}];function vw(t){let n,r,i,s,o,a;function c(e,t){return e[0]?bw:ww}let l=c(t),u=l(t);return{c(){n=S("div"),r=S("a"),r.textContent="play",i=C(),s=S("a"),s.textContent="leaderboard",o=C(),u.c(),D(r,"href","/"),D(r,"class","svelte-w57tyo"),D(s,"href","/leaderboard"),D(s,"class","svelte-w57tyo"),D(n,"id","links"),D(n,"class","svelte-w57tyo")},m(e,t){T(e,n,t),b(n,r),b(n,i),b(n,s),b(n,o),u.m(n,null)},p(e,t){l!==(l=c(e))&&(u.d(1),u=l(e),u&&(u.c(),u.m(n,null)))},i(e){a||H((()=>{a=ae(n,nv,{}),a.start()}))},o:e,d(e){e&&k(n),u.d()}}}function ww(e){let t,n,r;return{c(){t=S("a"),t.textContent="login",n=C(),r=S("a"),r.textContent="signup",D(t,"href","/login"),D(t,"class","svelte-w57tyo"),D(r,"href","/signup"),D(r,"class","svelte-w57tyo")},m(e,i){T(e,t,i),T(e,n,i),T(e,r,i)},d(e){e&&k(t),e&&k(n),e&&k(r)}}}function bw(e){let t,n,r;return{c(){t=S("a"),t.textContent="profile",n=C(),r=S("a"),r.textContent="logout",D(t,"href","/profile"),D(t,"class","svelte-w57tyo"),D(r,"href","/logout"),D(r,"class","svelte-w57tyo")},m(e,i){T(e,t,i),T(e,n,i),T(e,r,i)},d(e){e&&k(t),e&&k(n),e&&k(r)}}}function _w(t){let n,r,i,s=t[1]&&vw(t);return{c(){n=S("div"),r=S("a"),r.textContent="perfect type",i=C(),s&&s.c(),D(r,"id","title"),D(r,"href","/"),D(r,"class","svelte-w57tyo"),D(n,"class","header svelte-w57tyo")},m(e,t){T(e,n,t),b(n,r),b(n,i),s&&s.m(n,null)},p(e,[t]){e[1]?s?(s.p(e,t),2&t&&ie(s,1)):(s=vw(e),s.c(),ie(s,1),s.m(n,null)):s&&(s.d(1),s=null)},i(e){ie(s)},o:e,d(e){e&&k(n),s&&s.d()}}}function Ew(e,t,n){let r=!1,i=!1;return Xy().then((e=>{n(0,r=e),n(1,i=!0)})),[r,i]}class Tw extends fe{constructor(e){super(),de(this,e,Ew,_w,o,{})}}function kw(t){let n,r,i,s,o,a,c,l,u,h,d,f,p,g,m;return h=new Tw({}),f=new Ke({props:{routes:yw}}),{c(){n=S("meta"),r=S("meta"),i=S("meta"),s=S("meta"),o=S("link"),a=S("meta"),c=S("meta"),l=S("meta"),u=C(),le(h.$$.fragment),d=C(),le(f.$$.fragment),p=C(),g=S("a"),g.textContent="see the site devs",D(n,"charset","utf-8"),document.title="perfect type",D(r,"name","description"),D(r,"content","perfect type is a typing game that requires you to type perfectly. are you up for the challenge?"),D(i,"name","keywords"),D(i,"content","typing, typing game, keyboard, words per minute, wpm, typing speed, typer, online game, game, play, internet games, online games, internet game, typing games, type speed, typing speed, games to play on the internet, typing games to play, typing games to play online"),D(s,"name","author"),D(s,"content","perfect type devs"),D(o,"rel","canonical"),D(o,"href","https://perfect-type.com/"),D(a,"name","robots"),D(a,"content","index, follow"),D(c,"name","viewport"),D(c,"content","width=device-width, initial-scale=1"),D(l,"name","google"),D(l,"content","nositelinkssearchbox"),D(g,"id","see-devs"),D(g,"href","/creators"),D(g,"class","svelte-11dozz2")},m(e,t){b(document.head,n),b(document.head,r),b(document.head,i),b(document.head,s),b(document.head,o),b(document.head,a),b(document.head,c),b(document.head,l),T(e,u,t),ue(h,e,t),T(e,d,t),ue(f,e,t),T(e,p,t),T(e,g,t),m=!0},p:e,i(e){m||(ie(h.$$.fragment,e),ie(f.$$.fragment,e),m=!0)},o(e){se(h.$$.fragment,e),se(f.$$.fragment,e),m=!1},d(e){k(n),k(r),k(i),k(s),k(o),k(a),k(c),k(l),e&&k(u),he(h,e),e&&k(d),he(f,e),e&&k(p),e&&k(g)}}}function Iw(e){return Gy(),[]}return new class extends fe{constructor(e){super(),de(this,e,Iw,kw,o,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
