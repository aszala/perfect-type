var app=function(){"use strict";function e(){}const t=e=>e;function n(e){return e()}function r(){return Object.create(null)}function i(e){e.forEach(n)}function s(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a;function c(e,t){return a||(a=document.createElement("a")),a.href=t,e===a.href}function l(t,n,r){t.$$.on_destroy.push(function(t,...n){if(null==t)return e;const r=t.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function u(e,t,n,r){if(e){const i=h(e,t,n,r);return e[0](i)}}function h(e,t,n,r){return e[1]&&r?function(e,t){for(const n in t)e[n]=t[n];return e}(n.ctx.slice(),e[1](r(t))):n.ctx}function d(e,t,n,r){if(e[2]&&r){const i=e[2](r(n));if(void 0===t.dirty)return i;if("object"==typeof i){const e=[],n=Math.max(t.dirty.length,i.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|i[r];return e}return t.dirty|i}return t.dirty}function f(e,t,n,r,i,s){if(i){const o=h(t,n,r,s);e.p(o,i)}}function p(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}function m(e){return null==e?"":e}const g="undefined"!=typeof window;let y=g?()=>window.performance.now():()=>Date.now(),v=g?e=>requestAnimationFrame(e):e;const w=new Set;function b(e){w.forEach((t=>{t.c(e)||(w.delete(t),t.f())})),0!==w.size&&v(b)}function k(e){let t;return 0===w.size&&v(b),{promise:new Promise((n=>{w.add(t={c:e,f:n})})),abort(){w.delete(t)}}}function _(e,t){e.appendChild(t)}function T(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function E(e){const t=C("style");return function(e,t){_(e.head||e,t)}(T(e),t),t}function I(e,t,n){e.insertBefore(t,n||null)}function S(e){e.parentNode.removeChild(e)}function A(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function C(e){return document.createElement(e)}function x(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function $(e){return document.createTextNode(e)}function R(){return $(" ")}function N(){return $("")}function D(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function O(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function P(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function M(e,t,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,!1,t),r}const L=new Set;let F,U=0;function B(e,t,n,r,i,s,o,a=0){const c=16.666/r;let l="{\n";for(let e=0;e<=1;e+=c){const r=t+(n-t)*s(e);l+=100*e+`%{${o(r,1-r)}}\n`}const u=l+`100% {${o(n,1-n)}}\n}`,h=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(u)}_${a}`,d=T(e);L.add(d);const f=d.__svelte_stylesheet||(d.__svelte_stylesheet=E(e).sheet),p=d.__svelte_rules||(d.__svelte_rules={});p[h]||(p[h]=!0,f.insertRule(`@keyframes ${h} ${u}`,f.cssRules.length));const m=e.style.animation||"";return e.style.animation=`${m?`${m}, `:""}${h} ${r}ms linear ${i}ms 1 both`,U+=1,h}function j(e,t){const n=(e.style.animation||"").split(", "),r=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),i=n.length-r.length;i&&(e.style.animation=r.join(", "),U-=i,U||v((()=>{U||(L.forEach((e=>{const t=e.__svelte_stylesheet;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.__svelte_rules={}})),L.clear())})))}function V(e){F=e}function z(){if(!F)throw new Error("Function called outside component initialization");return F}function q(e){z().$$.on_mount.push(e)}function K(e,t){z().$$.context.set(e,t)}const H=[],W=[],G=[],J=[],X=Promise.resolve();let Y=!1;function Q(){Y||(Y=!0,X.then(re))}function Z(e){G.push(e)}function ee(e){J.push(e)}let te=!1;const ne=new Set;function re(){if(!te){te=!0;do{for(let e=0;e<H.length;e+=1){const t=H[e];V(t),ie(t.$$)}for(V(null),H.length=0;W.length;)W.pop()();for(let e=0;e<G.length;e+=1){const t=G[e];ne.has(t)||(ne.add(t),t())}G.length=0}while(H.length);for(;J.length;)J.pop()();Y=!1,te=!1,ne.clear()}}function ie(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Z)}}let se;function oe(){return se||(se=Promise.resolve(),se.then((()=>{se=null}))),se}function ae(e,t,n){e.dispatchEvent(M(`${t?"intro":"outro"}${n}`))}const ce=new Set;let le;function ue(){le={r:0,c:[],p:le}}function he(){le.r||i(le.c),le=le.p}function de(e,t){e&&e.i&&(ce.delete(e),e.i(t))}function fe(e,t,n,r){if(e&&e.o){if(ce.has(e))return;ce.add(e),le.c.push((()=>{ce.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}const pe={duration:0};function me(n,r,i){let o,a,c=r(n,i),l=!1,u=0;function h(){o&&j(n,o)}function d(){const{delay:r=0,duration:i=300,easing:s=t,tick:d=e,css:f}=c||pe;f&&(o=B(n,0,1,i,r,s,f,u++)),d(0,1);const p=y()+r,m=p+i;a&&a.abort(),l=!0,Z((()=>ae(n,!0,"start"))),a=k((e=>{if(l){if(e>=m)return d(1,0),ae(n,!0,"end"),h(),l=!1;if(e>=p){const t=s((e-p)/i);d(t,1-t)}}return l}))}let f=!1;return{start(){f||(f=!0,j(n),s(c)?(c=c(),oe().then(d)):d())},invalidate(){f=!1},end(){l&&(h(),l=!1)}}}function ge(n,r,o,a){let c=r(n,o),l=a?0:1,u=null,h=null,d=null;function f(){d&&j(n,d)}function p(e,t){const n=e.b-l;return t*=Math.abs(n),{a:l,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function m(r){const{delay:s=0,duration:o=300,easing:a=t,tick:m=e,css:g}=c||pe,v={start:y()+s,b:r};r||(v.group=le,le.r+=1),u||h?h=v:(g&&(f(),d=B(n,l,r,o,s,a,g)),r&&m(0,1),u=p(v,o),Z((()=>ae(n,r,"start"))),k((e=>{if(h&&e>h.start&&(u=p(h,o),h=null,ae(n,u.b,"start"),g&&(f(),d=B(n,l,u.b,u.duration,0,a,c.css))),u)if(e>=u.end)m(l=u.b,1-l),ae(n,u.b,"end"),h||(u.b?f():--u.group.r||i(u.group.c)),u=null;else if(e>=u.start){const t=e-u.start;l=u.a+u.d*a(t/u.duration),m(l,1-l)}return!(!u&&!h)})))}return{run(e){s(c)?oe().then((()=>{c=c(),m(e)})):m(e)},end(){f(),u=h=null}}}const ye="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function ve(e,t,n){const r=e.$$.props[t];void 0!==r&&(e.$$.bound[r]=n,n(e.$$.ctx[r]))}function we(e){e&&e.c()}function be(e,t,r,o){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=e.$$;a&&a.m(t,r),o||Z((()=>{const t=c.map(n).filter(s);l?l.push(...t):i(t),e.$$.on_mount=[]})),u.forEach(Z)}function ke(e,t){const n=e.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function _e(t,n,s,o,a,c,l,u=[-1]){const h=F;V(t);const d=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(h?h.$$.context:[])),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||h.$$.root};l&&l(d.root);let f=!1;if(d.ctx=s?s(t,n.props||{},((e,n,...r)=>{const i=r.length?r[0]:n;return d.ctx&&a(d.ctx[e],d.ctx[e]=i)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](i),f&&function(e,t){-1===e.$$.dirty[0]&&(H.push(e),Q(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(t,e)),n})):[],d.update(),f=!0,i(d.before_update),d.fragment=!!o&&o(d.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);d.fragment&&d.fragment.l(e),e.forEach(S)}else d.fragment&&d.fragment.c();n.intro&&de(t.$$.fragment),be(t,n.target,n.anchor,n.customElement),re()}V(h)}class Te{$destroy(){ke(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ee=[];function Ie(t,n=e){let r;const i=new Set;function s(e){if(o(t,e)&&(t=e,r)){const e=!Ee.length;for(const e of i)e[1](),Ee.push(e,t);if(e){for(let e=0;e<Ee.length;e+=2)Ee[e][0](Ee[e+1]);Ee.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(o,a=e){const c=[o,a];return i.add(c),1===i.size&&(r=n(s)||e),o(t),()=>{i.delete(c),0===i.size&&(r(),r=null)}}}}const{set:Se,subscribe:Ae}=Ie({}),Ce={subscribe:Ae,set:Se,remove:()=>{Se({})}},xe=(e,t="")=>{const n=new URL(e);function r(){return s(t).reduce(((e,t,n)=>(":"===t[0]&&e.push({value:t.slice(1),index:n}),e)),[])}function i(){return s(n.pathname)}function s(e){return"/"===e||0===e.trim().length?[e]:("/"===e.slice(-1)&&(e=e.slice(0,-1)),"/"===e[0]&&(e=e.slice(1)),e.split("/"))}return Object.freeze({hash:n.hash,host:n.host,hostname:n.hostname,namedParams:function(){const e=i();return r().reduce(((t,n)=>(t[n.value]=e[n.index],t)),{})}(),namedParamsKeys:r().reduce(((e,t)=>(e.push(t.value),e)),[]),namedParamsValues:function(){const e=i();return r().reduce(((t,n)=>(t.push(e[n.index]),t)),[])}(),pathNames:i(),port:n.port,pathname:n.pathname,protocol:n.protocol,search:n.search,queryParams:function(){const e={};return n.searchParams.forEach(((t,n)=>{e[n]=t})),e}(),queryParamsKeys:function(){const e=[];return n.searchParams.forEach(((t,n)=>{e.push(n)})),e}(),queryParamsValues:function(){const e=[];return n.searchParams.forEach((t=>{e.push(t)})),e}()})},$e=e=>{let t=!1;return 0===Object.keys(e).length||(e.childRoute&&0===Object.keys(e.childRoute).length?t=!0:e.childRoute&&(t=$e(e.childRoute)),t)},Re=(e,t)=>(t=Pe(t)).includes(":")?t.includes(e):t.startsWith(e),Ne=(e,t,n)=>{let r=!1;if(n)return{exists:t.lang&&t.lang[n]&&t.lang[n].includes(e),language:n};if(r=Re(e,t.name),!r&&t.lang&&"object"==typeof t.lang)for(const[i,s]of Object.entries(t.lang))Re(e,s)&&(r=!0,n=i);return{exists:r,language:n}},De=e=>"/"===e||0===e.trim().length?[e]:(e=Pe(e,"both")).split("/"),Oe=(e="")=>{let t;return"/"===e||0===e.trim().length?e:(t=(e=Pe(e,"lead")).split(":")[0],t=Pe(t,"trail"),t.toLowerCase())},Pe=(e,t="lead")=>("trail"!==t&&"both"!==t||(e=e.replace(/\/$/,"")),"lead"!==t&&"both"!==t||(e=e.replace(/^\//,"")),e),Me=(e,t=null)=>t&&e.lang&&e.lang[t]?e.lang[t]:e.name,Le=e=>{const t=e||!1;let n="";const r=(e,n)=>{if("undefined"!=typeof window){const r=(e=>{let t=[];if(e.queryParams)for(let[n,r]of Object.entries(e.queryParams))t.push(`${n}=${r}`);const n=e.hash?e.hash:"";return t.length>0?`${e.path}?${t.join("&")}${n}`:e.path+n})(e);n&&window.history.pushState({page:r},"",r),t&&i(r)}},i=e=>{"undefined"!=typeof ga&&(ga("set","page",e),ga("send","pageview"))};return Object.freeze({active:()=>n,isActive:(e,t=!1)=>{"/"!==e[0]&&(e="/"+e);let r=xe(`http://fake.com${e}`).pathname,i=xe(`http://fake.com${n}`).pathname;return r=Pe(r,"trail"),i=Pe(i,"trail"),t?i.includes(r):i===r},setActive:(e,t)=>{n=e.path,r(e,t)}})},Fe=(e,t)=>{const n=(e=>{const t=e;return Object.freeze({valid:()=>t&&t.guard&&"function"==typeof t.guard,redirect:()=>!t.guard(),redirectPath:()=>{let e="/";return t.redirect&&t.redirect.length>0&&(e=t.redirect),e}})})(e.onlyIf);return Object.freeze({path:()=>{let r=t;return e.redirectTo&&e.redirectTo.length>0&&(r=e.redirectTo),n.valid()&&n.redirect()&&(r=n.redirectPath()),r}})};function Ue({basePath:e,basePathName:t,pathNames:n,convert:r,currentLanguage:i}){let s,o,a=i;function c(){return Me(o,a)}function l(){return Oe(c())}function u(){return Oe(s.result)}return Object.freeze({basePathSameAsLocalised:function(){return u()===l()},updatedPath:function(e){return o=e,s=((e,t,n,r,i=!1)=>{if("/"===e||0===e.trim().length)return{result:e,language:null};let s=e,o=n.name,a=r;if(i&&(a=""),o=Pe(o),s=Pe(s),n.childRoute)return{result:e,language:a};{let e=Ne(s,n,a);e.exists&&i&&(s=Me(n,r));let c=o.split(":")[0];return c=Pe(c,"trail"),c=c.split("/"),c.shift(),c.forEach((()=>{const o=t[0];if(e=Ne(`${s}/${o}`,n,a),!o||!e.exists)return{result:s,language:e.language};s=i?Me(n,r):`${s}/${o}`,t.shift()})),{result:s,language:e.language}}})(t,n,o,a,r),a=r?i:s.language,s},basePathNameWithoutNamedParams:u,localisedPathName:c,localisedRouteWithoutNamedParams:l,namedPath:function(){let t=c();return t&&!t.startsWith("/")&&(t="/"+t),e?`${e}${t}`:t},pathNames:n,routeLanguage:function(){return a},routePath:function(){let t=`${e}/${u()}`;"//"===t&&(t="/"),a&&(n=((e,t)=>{const n=t.split("/");return n.length>1&&n.forEach((function(t,n){t.length>0&&n>0&&e.shift()})),e})(n,l()));const r=((e="")=>0===e.trim().length?[]:De(e).reduce(((e,t)=>(":"===t[0]&&e.push(t.slice(1)),e)),[]))(c());return r&&r.length>0&&r.forEach((function(){n.length>0&&(t+=`/${n.shift()}`)})),t}})}function Be({routes:e,currentUrl:t,routerOptions:n,convert:r}){const i=n.defaultLanguage,s=n.prefix?n.prefix.toLowerCase():"",o=function(e,t){if(t&&t.trim().length>0){const n=e.endsWith(t)?t:t+"/",r=e.replace(n,"");return xe(r)}return xe(e)}(t,s);let a="",c={},l=!1;function u(e,t,n,r,s){let h={};const d=Ue({basePath:t,basePathName:n.shift().toLowerCase(),pathNames:n,convert:s,currentLanguage:r});return l=!1,e.forEach((function(e){if(d.updatedPath(e),function(e,t){const n=e.basePathSameAsLocalised();n&&(l=!0);return n||!l&&(e=>Pe(e).startsWith(":"))(t)}(d,e.name)){let t=d.routePath();if(a=Fe(e,a).path(),h.name!==t&&(h=function({route:e,routePath:t,routeLanguage:n,urlParser:r,namedPath:s}){const o=function({routeInfo:e,path:t,routeNamedParams:n,urlParser:r,namedPath:i,language:s}){const o=()=>{const e=xe(`https://fake.com${r.pathname}`,i).namedParams;return{...n,...e}};return Object.freeze({get:()=>({name:t,component:e.component,hash:r.hash,layout:e.layout,queryParams:r.queryParams,namedParams:o(),path:t,language:s}),namedParams:o})}({routeInfo:e,urlParser:r,path:t,routeNamedParams:c,namedPath:s,language:n||i});return c=o.namedParams(),o.get()}({route:e,routePath:t,routeLanguage:d.routeLanguage(),urlParser:o,namedPath:d.namedPath()})),e.nestedRoutes&&e.nestedRoutes.length>0&&d.pathNames.length>0)h.childRoute=u(e.nestedRoutes,t,d.pathNames,d.routeLanguage(),s),h.path=h.childRoute.path,h.language=h.childRoute.language;else if(function(e,t){return e.nestedRoutes&&e.nestedRoutes.length>0&&0===t.length}(e,d.pathNames)){const n=u(e.nestedRoutes,t,["index"],d.routeLanguage(),s);n&&Object.keys(n).length>0&&(h.childRoute=n,h.language=h.childRoute.language)}}})),a&&(h.redirectTo=a),h}const h=t=>{const n=e.find((e=>"404"==e.name)),r=t||i||"";return n?{...n,language:r,path:"404"}:{name:"404",component:"",path:"404",redirectTo:"/404.html"}};return Object.freeze({findActiveRoute:function(){let t=u(e,"",o.pathNames,n.lang,r);return t&&Object.keys(t).length&&!$e(t)?(t.path=t.path.split("?")[0],s&&(t.path=`/${s}${t.path}`)):"undefined"!=typeof window&&(t=h(n.lang)),t}})}const je="/404.html";let Ve,ze=[],qe={};const Ke=(e,t,n={})=>{qe={...n},void 0!==t&&""!==t||(t=document.location.href),Ve=Le(qe.gaPageviews),t=Pe(t,"trail"),ze=e;const r=()=>{let n=!1;return qe.langConvertTo&&(qe.lang=qe.langConvertTo,n=!0),Be({routes:e,currentUrl:t,routerOptions:qe,convert:n}).findActiveRoute()};return Object.freeze({setActiveRoute:(e=!0)=>{const t=r();return t.redirectTo?((e,t)=>("undefined"!=typeof window&&(e===je?Ve.setActive({path:je},t):He(e)),e))(t.redirectTo,e):(Ve.setActive(t,e),Ce.set(t),t)},findActiveRoute:r})},He=(e,t=null,n=!0)=>(e=Pe(e,"lead"),t&&(qe.langConvertTo=t),Ke(ze,"http://fake.com/"+e,qe).setActiveRoute(n));function We(e){let t,n;return t=new Qe({props:{currentRoute:e[0].childRoute,params:e[1]}}),{c(){we(t.$$.fragment)},m(e,r){be(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.currentRoute=e[0].childRoute),2&n&&(r.params=e[1]),t.$set(r)},i(e){n||(de(t.$$.fragment,e),n=!0)},o(e){fe(t.$$.fragment,e),n=!1},d(e){ke(t,e)}}}function Ge(e){let t,n,r;var i=e[0].component;function s(e){return{props:{currentRoute:{...e[0],component:""},params:e[1]}}}return i&&(t=new i(s(e))),{c(){t&&we(t.$$.fragment),n=N()},m(e,i){t&&be(t,e,i),I(e,n,i),r=!0},p(e,r){const o={};if(1&r&&(o.currentRoute={...e[0],component:""}),2&r&&(o.params=e[1]),i!==(i=e[0].component)){if(t){ue();const e=t;fe(e.$$.fragment,1,0,(()=>{ke(e,1)})),he()}i?(t=new i(s(e)),we(t.$$.fragment),de(t.$$.fragment,1),be(t,n.parentNode,n)):t=null}else i&&t.$set(o)},i(e){r||(t&&de(t.$$.fragment,e),r=!0)},o(e){t&&fe(t.$$.fragment,e),r=!1},d(e){e&&S(n),t&&ke(t,e)}}}function Je(e){let t,n,r;var i=e[0].layout;function s(e){return{props:{currentRoute:{...e[0],layout:""},params:e[1]}}}return i&&(t=new i(s(e))),{c(){t&&we(t.$$.fragment),n=N()},m(e,i){t&&be(t,e,i),I(e,n,i),r=!0},p(e,r){const o={};if(1&r&&(o.currentRoute={...e[0],layout:""}),2&r&&(o.params=e[1]),i!==(i=e[0].layout)){if(t){ue();const e=t;fe(e.$$.fragment,1,0,(()=>{ke(e,1)})),he()}i?(t=new i(s(e)),we(t.$$.fragment),de(t.$$.fragment,1),be(t,n.parentNode,n)):t=null}else i&&t.$set(o)},i(e){r||(t&&de(t.$$.fragment,e),r=!0)},o(e){t&&fe(t.$$.fragment,e),r=!1},d(e){e&&S(n),t&&ke(t,e)}}}function Xe(e){let t,n,r,i;const s=[Je,Ge,We],o=[];function a(e,t){return e[0].layout?0:e[0].component?1:e[0].childRoute?2:-1}return~(t=a(e))&&(n=o[t]=s[t](e)),{c(){n&&n.c(),r=N()},m(e,n){~t&&o[t].m(e,n),I(e,r,n),i=!0},p(e,[i]){let c=t;t=a(e),t===c?~t&&o[t].p(e,i):(n&&(ue(),fe(o[c],1,1,(()=>{o[c]=null})),he()),~t?(n=o[t],n?n.p(e,i):(n=o[t]=s[t](e),n.c()),de(n,1),n.m(r.parentNode,r)):n=null)},i(e){i||(de(n),i=!0)},o(e){fe(n),i=!1},d(e){~t&&o[t].d(e),e&&S(r)}}}function Ye(e,t,n){let{currentRoute:r={}}=t,{params:i={}}=t;return e.$$set=e=>{"currentRoute"in e&&n(0,r=e.currentRoute),"params"in e&&n(1,i=e.params)},[r,i]}"undefined"!=typeof window&&(window.addEventListener("click",(e=>{if("a"!==e.target.localName.toLowerCase())return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;const t=qe.prefix?`/${qe.prefix.toLowerCase()}`:"",n=e.target.pathname&&e.target.host===window.location.host,r=!(t.length>1)||e.target.pathname.startsWith(t);if(n&&r){e.preventDefault();const t=e.target.pathname+e.target.search+e.target.search+e.target.hash;"_blank"===e.target.target?window.open(t,"newTab"):He(t)}})),window.onpopstate=function(e){let t=window.location.pathname+window.location.search+window.location.hash;He(t,null,!1)});class Qe extends Te{constructor(e){super(),_e(this,e,Ye,Xe,o,{currentRoute:0,params:1})}}function Ze(e){let t,n;return t=new Qe({props:{currentRoute:e[0]}}),{c(){we(t.$$.fragment)},m(e,r){be(t,e,r),n=!0},p(e,[n]){const r={};1&n&&(r.currentRoute=e[0]),t.$set(r)},i(e){n||(de(t.$$.fragment,e),n=!0)},o(e){fe(t.$$.fragment,e),n=!1},d(e){ke(t,e)}}}function et(e,t,n){let r;l(e,Ce,(e=>n(0,r=e)));let{routes:i=[]}=t,{options:s={}}=t;return q((()=>{Ke(i,document.location.href,s).setActiveRoute()})),e.$$set=e=>{"routes"in e&&n(1,i=e.routes),"options"in e&&n(2,s=e.options)},[r,i,s]}class tt extends Te{constructor(e){super(),_e(this,e,et,Ze,o,{routes:1,options:2})}}const nt=Ie(0),rt=Ie(5);var it=["ability","able","aboard","about","above","accept","accident","according","account","accurate","acres","across","act","action","active","activity","actual","actually","add","addition","additional","adjective","adult","adventure","advice","affect","afraid","after","afternoon","again","against","age","ago","agree","ahead","aid","air","airplane","alike","alive","all","allow","almost","alone","along","aloud","alphabet","already","also","although","am","among","amount","ancient","angle","angry","animal","announced","another","answer","ants","any","anybody","anyone","anything","anyway","anywhere","apart","apartment","appearance","apple","applied","appropriate","are","area","arm","army","around","arrange","arrangement","arrive","arrow","art","article","as","aside","ask","asleep","at","ate","atmosphere","atom","atomic","attached","attack","attempt","attention","audience","author","automobile","available","average","avoid","aware","away","baby","back","bad","badly","bag","balance","ball","balloon","band","bank","bar","bare","bark","barn","base","baseball","basic","basis","basket","bat","battle","be","bean","bear","beat","beautiful","beauty","became","because","become","becoming","bee","been","before","began","beginning","begun","behavior","behind","being","believed","bell","belong","below","belt","bend","beneath","bent","beside","best","bet","better","between","beyond","bicycle","bigger","biggest","bill","birds","birth","birthday","bit","bite","black","blank","blanket","blew","blind","block","blood","blow","blue","board","boat","body","bone","book","border","born","both","bottle","bottom","bound","bow","bowl","box","boy","brain","branch","brass","brave","bread","break","breakfast","breath","breathe","breathing","breeze","brick","bridge","brief","bright","bring","broad","broke","broken","brother","brought","brown","brush","buffalo","build","building","built","buried","burn","burst","bus","bush","business","busy","but","butter","buy","by","cabin","cage","cake","call","calm","came","camera","camp","can","canal","cannot","cap","capital","captain","captured","car","carbon","card","care","careful","carefully","carried","carry","case","cast","castle","cat","catch","cattle","caught","cause","cave","cell","cent","center","central","century","certain","certainly","chain","chair","chamber","chance","change","changing","chapter","character","characteristic","charge","chart","check","cheese","chemical","chest","chicken","chief","child","children","choice","choose","chose","chosen","church","circle","circus","citizen","city","class","classroom","claws","clay","clean","clear","clearly","climate","climb","clock","close","closely","closer","cloth","clothes","clothing","cloud","club","coach","coal","coast","coat","coffee","cold","collect","college","colony","color","column","combination","combine","come","comfortable","coming","command","common","community","company","compare","compass","complete","completely","complex","composed","composition","compound","concerned","condition","congress","connected","consider","consist","consonant","constantly","construction","contain","continent","continued","contrast","control","conversation","cook","cookies","cool","copper","copy","corn","corner","correct","correctly","cost","cotton","could","count","country","couple","courage","course","court","cover","cow","cowboy","crack","cream","create","creature","crew","crop","cross","crowd","cry","cup","curious","current","curve","customs","cut","cutting","daily","damage","dance","danger","dangerous","dark","darkness","date","daughter","dawn","day","dead","deal","dear","death","decide","declared","deep","deeply","deer","definition","degree","depend","depth","describe","desert","design","desk","detail","determine","develop","development","diagram","diameter","did","die","differ","difference","different","difficult","difficulty","dig","dinner","direct","direction","directly","dirt","dirty","disappear","discover","discovery","discuss","discussion","disease","dish","distance","distant","divide","division","do","doctor","does","dog","doing","doll","dollar","done","donkey","door","dot","double","doubt","down","dozen","draw","drawn","dream","dress","drew","dried","drink","drive","driven","driver","driving","drop","dropped","drove","dry","duck","due","dug","dull","during","dust","duty","each","eager","ear","earlier","early","earn","earth","easier","easily","east","easy","eat","eaten","edge","education","effect","effort","egg","eight","either","electric","electricity","element","elephant","eleven","else","empty","end","enemy","energy","engine","engineer","enjoy","enough","enter","entire","entirely","environment","equal","equally","equator","equipment","escape","especially","essential","establish","even","evening","event","eventually","ever","every","everybody","everyone","everything","everywhere","evidence","exact","exactly","examine","example","excellent","except","exchange","excited","excitement","exciting","exclaimed","exercise","exist","expect","experience","experiment","explain","explanation","explore","express","expression","extra","eye","face","facing","fact","factor","factory","failed","fair","fairly","fall","fallen","familiar","family","famous","far","farm","farmer","farther","fast","fastened","faster","fat","father","favorite","fear","feathers","feature","fed","feed","feel","feet","fell","fellow","felt","fence","few","fewer","field","fierce","fifteen","fifth","fifty","fight","fighting","figure","fill","film","final","finally","find","fine","finest","finger","finish","fire","fireplace","firm","first","fish","five","fix","flag","flame","flat","flew","flies","flight","floating","floor","flow","flower","fly","fog","folks","follow","food","foot","football","for","force","foreign","forest","forget","forgot","forgotten","form","former","fort","forth","forty","forward","fought","found","four","fourth","fox","frame","free","freedom","frequently","fresh","friend","friendly","frighten","frog","from","front","frozen","fruit","fuel","full","fully","fun","function","funny","fur","furniture","further","future","gain","game","garage","garden","gas","gasoline","gate","gather","gave","general","generally","gentle","gently","get","getting","giant","gift","girl","give","given","giving","glad","glass","globe","go","goes","gold","golden","gone","good","goose","got","government","grabbed","grade","gradually","grain","grandfather","grandmother","graph","grass","gravity","gray","great","greater","greatest","greatly","green","grew","ground","group","grow","grown","growth","guard","guess","guide","gulf","gun","habit","had","hair","half","halfway","hall","hand","handle","handsome","hang","happen","happened","happily","happy","harbor","hard","harder","hardly","has","hat","have","having","hay","he","headed","heading","health","heard","hearing","heart","heat","heavy","height","held","hello","help","helpful","her","herd","here","herself","hidden","hide","high","higher","highest","highway","hill","him","himself","his","history","hit","hold","hole","hollow","home","honor","hope","horn","horse","hospital","hot","hour","house","how","however","huge","human","hundred","hung","hungry","hunt","hunter","hurried","hurry","hurt","husband","ice","idea","identity","if","ill","image","imagine","immediately","importance","important","impossible","improve","in","inch","include","including","income","increase","indeed","independent","indicate","individual","industrial","industry","influence","information","inside","instance","instant","instead","instrument","interest","interior","into","introduced","invented","involved","iron","is","island","it","its","itself","jack","jar","jet","job","join","joined","journey","joy","judge","jump","jungle","just","keep","kept","key","kids","kill","kind","kitchen","knew","knife","know","knowledge","known","label","labor","lack","lady","laid","lake","lamp","land","language","large","larger","largest","last","late","later","laugh","law","lay","layers","lead","leader","leaf","learn","least","leather","leave","leaving","led","left","leg","length","lesson","let","letter","level","library","lie","life","lift","light","like","likely","limited","line","lion","lips","liquid","list","listen","little","live","living","load","local","locate","location","log","lonely","long","longer","look","loose","lose","loss","lost","lot","loud","love","lovely","low","lower","luck","lucky","lunch","lungs","lying","machine","machinery","mad","made","magic","magnet","mail","main","mainly","major","make","making","man","managed","manner","manufacturing","many","map","mark","market","married","mass","massage","master","material","mathematics","matter","may","maybe","me","meal","mean","means","meant","measure","meat","medicine","meet","melted","member","memory","men","mental","merely","met","metal","method","mice","middle","might","mighty","mile","military","milk","mill","mind","mine","minerals","minute","mirror","missing","mission","mistake","mix","mixture","model","modern","molecular","moment","money","monkey","month","mood","moon","more","morning","most","mostly","mother","motion","motor","mountain","mouse","mouth","move","movement","movie","moving","mud","muscle","music","musical","must","my","myself","mysterious","nails","name","nation","national","native","natural","naturally","nature","near","nearby","nearer","nearest","nearly","necessary","neck","needed","needle","needs","negative","neighbor","neighborhood","nervous","nest","never","new","news","newspaper","next","nice","night","nine","no","nobody","nodded","noise","none","noon","nor","north","nose","not","note","noted","nothing","notice","noun","now","number","numeral","nuts","object","observe","obtain","occasionally","occur","ocean","of","off","offer","office","officer","official","oil","old","older","oldest","on","once","one","only","onto","open","operation","opinion","opportunity","opposite","or","orange","orbit","order","ordinary","organization","organized","origin","original","other","ought","our","ourselves","out","outer","outline","outside","over","own","owner","oxygen","pack","package","page","paid","pain","paint","pair","palace","pale","pan","paper","paragraph","parallel","parent","park","part","particles","particular","particularly","partly","parts","party","pass","passage","past","path","pattern","pay","peace","pen","pencil","people","per","percent","perfect","perfectly","perhaps","period","person","personal","pet","phrase","physical","piano","pick","picture","pictured","pie","piece","pig","pile","pilot","pine","pink","pipe","pitch","place","plain","plan","plane","planet","planned","planning","plant","plastic","plate","plates","play","pleasant","please","pleasure","plenty","plural","plus","pocket","poem","poet","poetry","point","pole","police","policeman","political","pond","pony","pool","poor","popular","population","porch","port","position","positive","possible","possibly","post","pot","potatoes","pound","pour","powder","power","powerful","practical","practice","prepare","present","president","press","pressure","pretty","prevent","previous","price","pride","primitive","principal","principle","printed","private","prize","probably","problem","process","produce","product","production","program","progress","promised","proper","properly","property","protection","proud","prove","provide","public","pull","pupil","pure","purple","purpose","push","put","putting","quarter","queen","question","quick","quickly","quiet","quietly","quite","rabbit","race","radio","railroad","rain","raise","ran","ranch","range","rapidly","rate","rather","raw","rays","reach","read","reader","ready","real","realize","rear","reason","recall","receive","recent","recently","recognize","record","red","refer","refused","region","regular","related","relationship","religious","remain","remarkable","remember","remove","repeat","replace","replied","report","represent","require","research","respect","rest","result","return","review","rhyme","rhythm","rice","rich","ride","riding","right","ring","rise","rising","river","road","roar","rock","rocket","rocky","rod","roll","roof","room","root","rope","rose","rough","round","route","row","rubbed","rubber","rule","ruler","run","running","rush","sad","saddle","safe","safety","said","sail","sale","salmon","salt","same","sand","sang","sat","satellites","satisfied","save","saved","saw","say","scale","scared","scene","school","science","scientific","scientist","score","screen","sea","search","season","seat","second","secret","section","see","seed","seeing","seems","seen","seldom","select","selection","sell","send","sense","sent","sentence","separate","series","serious","serve","service","sets","setting","settle","settlers","seven","several","shade","shadow","shake","shaking","shall","shallow","shape","share","sharp","she","sheep","sheet","shelf","shells","shelter","shine","shinning","ship","shirt","shoe","shoot","shop","shore","short","shorter","shot","should","shoulder","shout","show","shown","shut","sick","sides","sight","sign","signal","silence","silent","silk","silly","silver","similar","simple","simplest","simply","since","sing","single","sink","sister","sit","sitting","situation","six","size","skill","skin","sky","slabs","slave","sleep","slept","slide","slight","slightly","slip","slipped","slope","slow","slowly","small","smaller","smallest","smell","smile","smoke","smooth","snake","snow","so","soap","social","society","soft","softly","soil","solar","sold","soldier","solid","solution","solve","some","somebody","somehow","someone","something","sometime","somewhere","son","song","soon","sort","sound","source","south","southern","space","speak","special","species","specific","speech","speed","spell","spend","spent","spider","spin","spirit","spite","split","spoken","sport","spread","spring","square","stage","stairs","stand","standard","star","stared","start","state","statement","station","stay","steady","steam","steel","steep","stems","step","stepped","stick","stiff","still","stock","stomach","stone","stood","stop","stopped","store","storm","story","stove","straight","strange","stranger","straw","stream","street","strength","stretch","strike","string","strip","strong","stronger","struck","structure","struggle","stuck","student","studied","studying","subject","substance","success","successful","such","sudden","suddenly","sugar","suggest","suit","sum","summer","sun","sunlight","supper","supply","support","suppose","sure","surface","surprise","surrounded","swam","sweet","swept","swim","swimming","swing","swung","syllable","symbol","system","table","tail","take","taken","tales","talk","tall","tank","tape","task","taste","taught","tax","tea","teach","teacher","team","tears","teeth","telephone","television","tell","temperature","ten","tent","term","terrible","test","than","thank","that","thee","them","themselves","then","theory","there","therefore","these","they","thick","thin","thing","think","third","thirty","this","those","thou","though","thought","thousand","thread","three","threw","throat","through","throughout","throw","thrown","thumb","thus","thy","tide","tie","tight","tightly","till","time","tin","tiny","tip","tired","title","to","tobacco","today","together","told","tomorrow","tone","tongue","tonight","too","took","tool","top","topic","torn","total","touch","toward","tower","town","toy","trace","track","trade","traffic","trail","train","transportation","trap","travel","treated","tree","triangle","tribe","trick","tried","trip","troops","tropical","trouble","truck","trunk","truth","try","tube","tune","turn","twelve","twenty","twice","two","type","typical","uncle","under","underline","understanding","unhappy","union","unit","universe","unknown","unless","until","unusual","up","upon","upper","upward","us","use","useful","using","usual","usually","valley","valuable","value","vapor","variety","various","vast","vegetable","verb","vertical","very","vessels","victory","view","village","visit","visitor","voice","volume","vote","vowel","voyage","wagon","wait","walk","wall","want","war","warm","warn","was","wash","waste","watch","water","wave","way","we","weak","wealth","wear","weather","week","weigh","weight","welcome","well","went","were","west","western","wet","whale","what","whatever","wheat","wheel","when","whenever","where","wherever","whether","which","while","whispered","whistle","white","who","whole","whom","whose","why","wide","widely","wife","wild","will","willing","win","wind","window","wing","winter","wire","wise","wish","with","within","without","wolf","women","won","wonder","wonderful","wood","wooden","wool","word","wore","work","worker","world","worried","worry","worse","worth","would","wrapped","write","writer","writing","written","wrong","wrote","yard","year","yellow","yes","yesterday","yet","you","young","younger","your","yourself","youth","zero","zebra","zipper","zoo","zulu"];function st(e){function t(){return e&&e.maxLength>1?function(){let t,r=!1;for(;!r;)t=n(),t.length<=e.maxLength&&(r=!0);return t}():n()}function n(){return it[r(it.length)]}function r(e){return Math.floor(Math.random()*e)}if(void 0===e)return t();"number"==typeof e&&(e={exactly:e}),e.exactly&&(e.min=e.exactly,e.max=e.exactly),"number"!=typeof e.wordsPerString&&(e.wordsPerString=1),"function"!=typeof e.formatter&&(e.formatter=e=>e),"string"!=typeof e.separator&&(e.separator=" ");for(var i=e.min+r(e.max+1-e.min),s=[],o="",a=0,c=0;c<i*e.wordsPerString;c++)a===e.wordsPerString-1?o+=e.formatter(t(),a):o+=e.formatter(t(),a)+e.separator,a++,(c+1)%e.wordsPerString==0&&(s.push(o),o="",a=0);return e.join&&(s=s.join(e.join)),s}var ot=st;function at(e){e?setTimeout((()=>{window.location.href="/"}),e):window.location.href="/"}st.wordList=it;const ct={email:"",numGames:0,avgWPM:0,matchHistory:[],matchHistoryTime:[],uid:""};function lt(){let e=5;if(rt.subscribe((t=>{e=t})),-1==e){let e=[];for(let t=0;t<50;t++)e.push(dt(10*Math.random()+1));return e.join(" ")}return ot(e).join(" ")}let ut=document.getElementById("tracker");async function ht(){await(Q(),X),await(e=>new Promise((t=>setTimeout(t,e))))(50),ut=document.getElementById("tracker");let e=document.getElementById(0).getBoundingClientRect();ut.style.top=e.bottom-50+"px",ut.style.left=e.left+.5+"px",ut.style.width=e.width+.75+"px"}function dt(e){for(var t="",n='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}:";<>,./?~`',r=n.length,i=0;i<e;i++)t+=n.charAt(Math.floor(Math.random()*r));return t}function ft(t){let n,r,i,o;return{c(){n=C("button"),r=$(t[0])},m(e,a){I(e,n,a),_(n,r),i||(o=D(n,"click",(function(){s(t[1])&&t[1].apply(this,arguments)})),i=!0)},p(e,[n]){t=e,1&n&&P(r,t[0])},i:e,o:e,d(e){e&&S(n),i=!1,o()}}}function pt(e,t,n){let{text:r}=t,{onClickFn:i=(()=>{})}=t;return e.$$set=e=>{"text"in e&&n(0,r=e.text),"onClickFn"in e&&n(1,i=e.onClickFn)},[r,i]}class mt extends Te{constructor(e){super(),_e(this,e,pt,ft,o,{text:0,onClickFn:1})}}function gt(e){let t,n,r,i,s,o,a,c,l,u=e[0]?`you won :) and typed ${e[1]} words per minute`:"you lost :(";return c=new mt({props:{onClickFn:e[2],text:e[0]?"play again":"try again"}}),{c(){t=C("div"),n=C("div"),r=$(u),i=R(),s=C("br"),o=C("br"),a=R(),we(c.$$.fragment),O(n,"class","game-over-div svelte-hd18fy"),O(t,"class","game-over-environment svelte-hd18fy")},m(e,u){I(e,t,u),_(t,n),_(n,r),_(t,i),_(t,s),_(t,o),_(t,a),be(c,t,null),l=!0},p(e,[t]){(!l||3&t)&&u!==(u=e[0]?`you won :) and typed ${e[1]} words per minute`:"you lost :(")&&P(r,u);const n={};4&t&&(n.onClickFn=e[2]),1&t&&(n.text=e[0]?"play again":"try again"),c.$set(n)},i(e){l||(de(c.$$.fragment,e),l=!0)},o(e){fe(c.$$.fragment,e),l=!1},d(e){e&&S(t),ke(c)}}}function yt(e,t,n){let{winGame:r}=t,{wpm:i}=t,{tryAgain:s}=t;return e.$$set=e=>{"winGame"in e&&n(0,r=e.winGame),"wpm"in e&&n(1,i=e.wpm),"tryAgain"in e&&n(2,s=e.tryAgain)},[r,i,s]}class vt extends Te{constructor(e){super(),_e(this,e,yt,gt,o,{winGame:0,wpm:1,tryAgain:2})}}function wt(t){let n,r,s,o,a,c,l,u,h,d,f,p,g,y,v,w,b,k;return{c(){n=C("div"),r=C("div"),s=$("easy"),a=R(),c=C("div"),l=$("medium"),h=R(),d=C("div"),f=$("hard"),g=R(),y=C("div"),v=$("impossible"),O(r,"class",o=m("mode-div "+("easy"===t[0]?"active-mode":"inactive-mode"))+" svelte-jpu02f"),O(r,"id",t[2][0]),O(c,"class",u=m("mode-div "+("medium"===t[0]?"active-mode":"inactive-mode"))+" svelte-jpu02f"),O(c,"id",t[2][1]),O(d,"class",p=m("mode-div "+("hard"===t[0]?"active-mode":"inactive-mode"))+" svelte-jpu02f"),O(d,"id",t[2][2]),O(y,"class",w=m("mode-div "+("impossible"===t[0]?"active-mode":"inactive-mode"))+" svelte-jpu02f"),O(y,"id",t[2][3]),O(n,"class","mode-container svelte-jpu02f")},m(e,i){I(e,n,i),_(n,r),_(r,s),_(n,a),_(n,c),_(c,l),_(n,h),_(n,d),_(d,f),_(n,g),_(n,y),_(y,v),b||(k=[D(r,"click",t[3]),D(c,"click",t[4]),D(d,"click",t[5]),D(y,"click",t[6])],b=!0)},p(e,[t]){1&t&&o!==(o=m("mode-div "+("easy"===e[0]?"active-mode":"inactive-mode"))+" svelte-jpu02f")&&O(r,"class",o),1&t&&u!==(u=m("mode-div "+("medium"===e[0]?"active-mode":"inactive-mode"))+" svelte-jpu02f")&&O(c,"class",u),1&t&&p!==(p=m("mode-div "+("hard"===e[0]?"active-mode":"inactive-mode"))+" svelte-jpu02f")&&O(d,"class",p),1&t&&w!==(w=m("mode-div "+("impossible"===e[0]?"active-mode":"inactive-mode"))+" svelte-jpu02f")&&O(y,"class",w)},i:e,o:e,d(e){e&&S(n),b=!1,i(k)}}}function bt(e,t,n){let{mode:r}=t,{changeMode:i}=t,s=ot(4);return e.$$set=e=>{"mode"in e&&n(0,r=e.mode),"changeMode"in e&&n(1,i=e.changeMode)},[r,i,s,e=>{i(e,s[0])},e=>{i(e,s[1])},e=>{i(e,s[2])},e=>{i(e,s[3])}]}class kt extends Te{constructor(e){super(),_e(this,e,bt,wt,o,{mode:0,changeMode:1})}}
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
     */const _t={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=i>>2,u=(3&i)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t}(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw Error();const c=i<<2|s>>4;if(r.push(c),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
class Tt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
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
     */function Et(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function It(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Et())}function St(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function At(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Ct(){const e=Et();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function xt(){return"object"==typeof indexedDB}class $t extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,$t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rt.prototype.create)}}class Rt{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(Nt,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new $t(r,o,n)}}const Nt=/\{\$([^}]+)}/g;function Dt(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(Ot(n)&&Ot(s)){if(!Dt(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function Ot(e){return null!==e&&"object"==typeof e}
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
     */function Pt(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Mt(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function Lt(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}class Ft{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Ut),void 0===r.error&&(r.error=Ut),void 0===r.complete&&(r.complete=Ut);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Ut(){}
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
     */function Bt(e,t=1e3,n=2){const r=t*Math.pow(n,e),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+i)}
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
     */function jt(e){return e&&e._delegate?e._delegate:e}class Vt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
     */const zt="[DEFAULT]";
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
     */class qt{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Tt;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
     */(e))try{this.getOrInitializeService({instanceIdentifier:zt})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===zt?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:zt:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Kt{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new qt(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
     */var Ht;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(Ht||(Ht={}));const Wt={debug:Ht.DEBUG,verbose:Ht.VERBOSE,info:Ht.INFO,warn:Ht.WARN,error:Ht.ERROR,silent:Ht.SILENT},Gt=Ht.INFO,Jt={[Ht.DEBUG]:"log",[Ht.VERBOSE]:"log",[Ht.INFO]:"info",[Ht.WARN]:"warn",[Ht.ERROR]:"error"},Xt=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=Jt[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class Yt{constructor(e){this.name=e,this._logLevel=Gt,this._logHandler=Xt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ht))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Wt[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ht.DEBUG,...e),this._logHandler(this,Ht.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ht.VERBOSE,...e),this._logHandler(this,Ht.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ht.INFO,...e),this._logHandler(this,Ht.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ht.WARN,...e),this._logHandler(this,Ht.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ht.ERROR,...e),this._logHandler(this,Ht.ERROR,...e)}}
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
     */class Qt{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Zt="@firebase/app",en="0.7.11",tn=new Yt("@firebase/app"),nn="[DEFAULT]",rn={[Zt]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},sn=new Map,on=new Map;function an(e,t){try{e.container.addComponent(t)}catch(n){tn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function cn(e){const t=e.name;if(on.has(t))return tn.debug(`There were multiple attempts to register component ${t}.`),!1;on.set(t,e);for(const t of sn.values())an(t,e);return!0}function ln(e,t){return e.container.getProvider(t)}
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
     */const un=new Rt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
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
class hn{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Vt("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw un.create("app-deleted",{appName:this._name})}}
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
     */const dn="9.6.1";function fn(e="[DEFAULT]"){const t=sn.get(e);if(!t)throw un.create("no-app",{appName:e});return t}function pn(e,t,n){var r;let i=null!==(r=rn[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void tn.warn(e.join(" "))}cn(new Vt(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
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
     */var mn;mn="",cn(new Vt("platform-logger",(e=>new Qt(e)),"PRIVATE")),pn(Zt,en,mn),pn(Zt,en,"esm2017"),pn("fire-js","");
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
pn("firebase","9.6.1","app");var gn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function yn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function vn(e){var t={exports:{}};return e(t,t.exports),t.exports}var wn=vn((function(e,t){!function(e){function t(e){return Array.prototype.slice.call(e)}function n(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function r(e,t,r){var i,s=new Promise((function(s,o){n(i=e[t].apply(e,r)).then(s,o)}));return s.request=i,s}function i(e,t,n){var i=r(e,t,n);return i.then((function(e){if(e)return new u(e,i.request)}))}function s(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function o(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return r(this[t],i,arguments)})}))}function a(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return this[t][r].apply(this[t],arguments)})}))}function c(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return i(this[t],r,arguments)})}))}function l(e){this._index=e}function u(e,t){this._cursor=e,this._request=t}function h(e){this._store=e}function d(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function f(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new d(n)}function p(e){this._db=e}function m(e,t,n){var i=r(indexedDB,"open",[e,t]),s=i.request;return s&&(s.onupgradeneeded=function(e){n&&n(new f(s.result,e.oldVersion,s.transaction))}),i.then((function(e){return new p(e)}))}function g(e){return r(indexedDB,"deleteDatabase",[e])}s(l,"_index",["name","keyPath","multiEntry","unique"]),o(l,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),c(l,"_index",IDBIndex,["openCursor","openKeyCursor"]),s(u,"_cursor",["direction","key","primaryKey","value"]),o(u,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(u.prototype[e]=function(){var t=this,r=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,r),n(t._request).then((function(e){if(e)return new u(e,t._request)}))}))})})),h.prototype.createIndex=function(){return new l(this._store.createIndex.apply(this._store,arguments))},h.prototype.index=function(){return new l(this._store.index.apply(this._store,arguments))},s(h,"_store",["name","keyPath","indexNames","autoIncrement"]),o(h,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),c(h,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),a(h,"_store",IDBObjectStore,["deleteIndex"]),d.prototype.objectStore=function(){return new h(this._tx.objectStore.apply(this._tx,arguments))},s(d,"_tx",["objectStoreNames","mode"]),a(d,"_tx",IDBTransaction,["abort"]),f.prototype.createObjectStore=function(){return new h(this._db.createObjectStore.apply(this._db,arguments))},s(f,"_db",["name","version","objectStoreNames"]),a(f,"_db",IDBDatabase,["deleteObjectStore","close"]),p.prototype.transaction=function(){return new d(this._db.transaction.apply(this._db,arguments))},s(p,"_db",["name","version","objectStoreNames"]),a(p,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[h,l].forEach((function(n){e in n.prototype&&(n.prototype[e.replace("open","iterate")]=function(){var n=t(arguments),r=n[n.length-1],i=this._store||this._index,s=i[e].apply(i,n.slice(0,-1));s.onsuccess=function(){r(s.result)}})}))})),[l,h].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,r=[];return new Promise((function(i){n.iterateCursor(e,(function(e){e?(r.push(e.value),void 0===t||r.length!=t?e.continue():i(r)):i(r)}))}))})})),e.openDb=m,e.deleteDb=g,Object.defineProperty(e,"__esModule",{value:!0})}(t)}));const bn="@firebase/installations",kn="0.5.4",_n=1e4,Tn="w:0.5.4",En="FIS_v2",In=36e5,Sn=new Rt("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function An(e){return e instanceof $t&&e.code.includes("request-failed")}
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
     */function Cn({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function xn(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function $n(e,t){const n=(await t.json()).error;return Sn.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Rn({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Nn(e,{refreshToken:t}){const n=Rn(e);return n.append("Authorization",function(e){return`FIS_v2 ${e}`}
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
     */(t)),n}async function Dn(e){const t=await e();return t.status>=500&&t.status<600?e():t}
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
function On(e){return new Promise((t=>{setTimeout(t,e)}))}
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
const Pn=/^[cdef][\w-]{21}$/;function Mn(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
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
     */(e);return Pn.test(t)?t:""}catch(e){return""}}function Ln(e){return`${e.appName}!${e.appId}`}
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
     */const Fn=new Map;function Un(e,t){const n=Ln(e);Bn(n,t),function(e,t){const n=function(){!jn&&"BroadcastChannel"in self&&(jn=new BroadcastChannel("[Firebase] FID Change"),jn.onmessage=e=>{Bn(e.data.key,e.data.fid)});return jn}();n&&n.postMessage({key:e,fid:t});0===Fn.size&&jn&&(jn.close(),jn=null)}(n,t)}function Bn(e,t){const n=Fn.get(e);if(n)for(const e of n)e(t)}let jn=null;
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
const Vn="firebase-installations-store";let zn=null;function qn(){return zn||(zn=wn.openDb("firebase-installations-database",1,(e=>{if(0===e.oldVersion)e.createObjectStore(Vn)}))),zn}async function Kn(e,t){const n=Ln(e),r=(await qn()).transaction(Vn,"readwrite"),i=r.objectStore(Vn),s=await i.get(n);return await i.put(t,n),await r.complete,s&&s.fid===t.fid||Un(e,t.fid),t}async function Hn(e){const t=Ln(e),n=(await qn()).transaction(Vn,"readwrite");await n.objectStore(Vn).delete(t),await n.complete}async function Wn(e,t){const n=Ln(e),r=(await qn()).transaction(Vn,"readwrite"),i=r.objectStore(Vn),s=await i.get(n),o=t(s);return void 0===o?await i.delete(n):await i.put(o,n),await r.complete,!o||s&&s.fid===o.fid||Un(e,o.fid),o}
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
     */async function Gn(e){let t;const n=await Wn(e,(n=>{const r=function(e){return Yn(e||{fid:Mn(),registrationStatus:0})}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(Sn.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function(e,{fid:t}){const n=Cn(e),r=Rn(e),i={fid:t,authVersion:En,appId:e.appId,sdkVersion:Tn},s={method:"POST",headers:r,body:JSON.stringify(i)},o=await Dn((()=>fetch(n,s)));if(o.ok){const e=await o.json();return{fid:e.fid||t,registrationStatus:2,refreshToken:e.refreshToken,authToken:xn(e.authToken)}}throw await $n("Create Installation",o)}(e,t);return Kn(e,n)}catch(n){throw An(n)&&409===n.customData.serverCode?await Hn(e):await Kn(e,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Jn(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function Jn(e){let t=await Xn(e);for(;1===t.registrationStatus;)await On(100),t=await Xn(e);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await Gn(e);return n||t}return t}function Xn(e){return Wn(e,(e=>{if(!e)throw Sn.create("installation-not-found");return Yn(e)}))}function Yn(e){return 1===(t=e).registrationStatus&&t.registrationTime+_n<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
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
     */}async function Qn({appConfig:e,platformLoggerProvider:t},n){const r=function(e,{fid:t}){return`${Cn(e)}/${t}/authTokens:generate`}
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
     */(e,n),i=Nn(e,n),s=t.getImmediate({optional:!0});s&&i.append("x-firebase-client",s.getPlatformInfoString());const o={installation:{sdkVersion:Tn}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Dn((()=>fetch(r,a)));if(c.ok){return xn(await c.json())}throw await $n("Generate Auth Token",c)}async function Zn(e,t=!1){let n;const r=await Wn(e.appConfig,(r=>{if(!tr(r))throw Sn.create("not-registered");const i=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+In}(e)}(i))return r;if(1===i.requestStatus)return n=async function(e,t){let n=await er(e.appConfig);for(;1===n.authToken.requestStatus;)await On(100),n=await er(e.appConfig);const r=n.authToken;return 0===r.requestStatus?Zn(e,t):r}(e,t),r;{if(!navigator.onLine)throw Sn.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=async function(e,t){try{const n=await Qn(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Kn(e.appConfig,r),n}catch(n){if(!An(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Kn(e.appConfig,n)}else await Hn(e.appConfig);throw n}}(e,t),t}}));return n?await n:r.authToken}function er(e){return Wn(e,(e=>{if(!tr(e))throw Sn.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+_n<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
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
     */}))}function tr(e){return void 0!==e&&2===e.registrationStatus}
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
async function nr(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await Gn(e);t&&await t}
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
     */(n.appConfig);return(await Zn(n,t)).token}function rr(e){return Sn.create("missing-app-config-values",{valueName:e})}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ir="installations",sr=e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw rr("App Configuration");if(!e.name)throw rr("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw rr(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,platformLoggerProvider:ln(t,"platform-logger"),_delete:()=>Promise.resolve()}},or=e=>{const t=ln(e.getProvider("app").getImmediate(),ir).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:r}=await Gn(t.appConfig);return r?r.catch(console.error):Zn(t).catch(console.error),n.fid}(t),getToken:e=>nr(t,e)}};cn(new Vt(ir,sr,"PUBLIC")),cn(new Vt("installations-internal",or,"PRIVATE")),pn(bn,kn),pn(bn,kn,"esm2017");
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
const ar="analytics",cr="https://www.googletagmanager.com/gtag/js",lr=new Yt("@firebase/analytics");
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
function ur(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function hr(e,t,n,r){return async function(i,s,o){try{"event"===i?await async function(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let e=i.send_to;Array.isArray(e)||(e=[e]);const r=await ur(n);for(const n of e){const e=r.find((e=>e.measurementId===n)),i=e&&t[e.appId];if(!i){s=[];break}s.push(i)}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(e){lr.error(e)}}(e,t,n,s,o):"config"===i?await async function(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const e=(await ur(n)).find((e=>e.measurementId===i));e&&await t[e.appId]}}catch(e){lr.error(e)}e("config",i,s)}(e,t,n,r,s,o):e("set",s)}catch(e){lr.error(e)}}}
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
const dr=new Rt("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const fr=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function pr(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function mr(e,t=fr,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw dr.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw dr.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new yr;return setTimeout((async()=>{a.abort()}),void 0!==n?n:6e4),gr({appId:r,apiKey:i,measurementId:s},o,a,t)}async function gr(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=fr){const{appId:s,measurementId:o}=e;try{await function(e,t){return new Promise(((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener((()=>{clearTimeout(s),r(dr.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(r,t)}catch(e){if(o)return lr.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${e.message}]`),{appId:s,measurementId:o};throw e}try{const t=await async function(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:pr(r)},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(s,i);if(200!==o.status&&304!==o.status){let e="";try{const n=await o.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw dr.create("config-fetch-failed",{httpStatus:o.status,responseMessage:e})}return o.json()}(e);return i.deleteThrottleMetadata(s),t}catch(t){if(!function(e){if(!(e instanceof $t&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(t)){if(i.deleteThrottleMetadata(s),o)return lr.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${t.message}]`),{appId:s,measurementId:o};throw t}const a=503===Number(t.customData.httpStatus)?Bt(n,i.intervalMillis,30):Bt(n,i.intervalMillis),c={throttleEndTimeMillis:Date.now()+a,backoffCount:n+1};return i.setThrottleMetadata(s,c),lr.debug(`Calling attemptFetch again in ${a} millis`),gr(e,c,r,i)}}class yr{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function vr(){if(!xt())return lr.warn(dr.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}catch(e){return lr.warn(dr.create("indexeddb-unavailable",{errorInfo:e}).message),!1}return!0}async function wr(e,t,n,r,i,s,o){var a;const c=mr(e);c.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&lr.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>lr.error(e))),t.push(c);const l=vr().then((e=>e?r.getId():void 0)),[u,h]=await Promise.all([c,l]);(function(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(cr))return t;return null})()||function(e,t){const n=document.createElement("script");n.src=`${cr}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}(s,u.measurementId),i("js",new Date);const d=null!==(a=null==o?void 0:o.config)&&void 0!==a?a:{};return d.origin="firebase",d.update=!0,null!=h&&(d.firebase_id=h),i("config",u.measurementId,d),u.measurementId}
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
     */class br{constructor(e){this.app=e}_delete(){return delete kr[this.app.options.appId],Promise.resolve()}}let kr={},_r=[];const Tr={};let Er,Ir,Sr="dataLayer",Ar=!1;function Cr(){const e=[];if(St()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=dr.create("invalid-analytics-context",{errorInfo:t});lr.warn(n.message)}}function xr(e,t,n){Cr();const r=e.options.appId;if(!r)throw dr.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw dr.create("no-api-key");lr.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=kr[r])throw dr.create("already-exists",{id:r});if(!Ar){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(Sr);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,r,i){let s=function(...e){window[r].push(arguments)};return window[i]&&"function"==typeof window[i]&&(s=window[i]),window[i]=hr(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}(kr,_r,Tr,Sr,"gtag");Ir=e,Er=t,Ar=!0}kr[r]=wr(e,_r,Tr,t,Er,Sr,n);return new br(e)}
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
     */function $r(e=fn()){const t=ln(e=jt(e),ar);return t.isInitialized()?t.getImmediate():function(e,t={}){const n=ln(e,ar);if(n.isInitialized()){const e=n.getImmediate();if(Dt(t,n.getOptions()))return e;throw dr.create("already-initialized")}return n.initialize({options:t})}(e)}function Rr(e,t,n,r){e=jt(e),async function(e,t,n,r,i){if(i&&i.global)e("event",n,r);else{const i=await t;e("event",n,Object.assign(Object.assign({},r),{send_to:i}))}}(Ir,kr[e.app.options.appId],t,n,r).catch((e=>lr.error(e)))}const Nr="@firebase/analytics",Dr="0.7.4";cn(new Vt(ar,((e,{options:t})=>xr(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),cn(new Vt("analytics-internal",(function(e){try{const t=e.getProvider(ar).getImmediate();return{logEvent:(e,n,r)=>Rr(t,e,n,r)}}catch(e){throw dr.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),pn(Nr,Dr),pn(Nr,Dr,"esm2017");var Or,Pr="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Mr=Mr||{},Lr=Pr||self;function Fr(){}function Ur(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function Br(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var jr="closure_uid_"+(1e9*Math.random()>>>0),Vr=0;function zr(e,t,n){return e.call.apply(e.bind,arguments)}function qr(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function Kr(e,t,n){return(Kr=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?zr:qr).apply(null,arguments)}function Hr(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function Wr(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function Gr(){this.s=this.s,this.o=this.o}var Jr={};Gr.prototype.s=!1,Gr.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var e=function(e){return Object.prototype.hasOwnProperty.call(e,jr)&&e[jr]||(e[jr]=++Vr)}(this);delete Jr[e]}},Gr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Xr=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},Yr=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,i="string"==typeof e?e.split(""):e;for(let s=0;s<r;s++)s in i&&t.call(n,i[s],s,e)};function Qr(e){return Array.prototype.concat.apply([],arguments)}function Zr(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function ei(e){return/^[\s\xa0]*$/.test(e)}var ti,ni=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function ri(e,t){return-1!=e.indexOf(t)}function ii(e,t){return e<t?-1:e>t?1:0}e:{var si=Lr.navigator;if(si){var oi=si.userAgent;if(oi){ti=oi;break e}}ti=""}function ai(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function ci(e){const t={};for(const n in e)t[n]=e[n];return t}var li="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ui(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<li.length;t++)n=li[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function hi(e){return hi[" "](e),e}hi[" "]=Fr;var di,fi,pi=ri(ti,"Opera"),mi=ri(ti,"Trident")||ri(ti,"MSIE"),gi=ri(ti,"Edge"),yi=gi||mi,vi=ri(ti,"Gecko")&&!(ri(ti.toLowerCase(),"webkit")&&!ri(ti,"Edge"))&&!(ri(ti,"Trident")||ri(ti,"MSIE"))&&!ri(ti,"Edge"),wi=ri(ti.toLowerCase(),"webkit")&&!ri(ti,"Edge");function bi(){var e=Lr.document;return e?e.documentMode:void 0}e:{var ki="",_i=(fi=ti,vi?/rv:([^\);]+)(\)|;)/.exec(fi):gi?/Edge\/([\d\.]+)/.exec(fi):mi?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(fi):wi?/WebKit\/(\S+)/.exec(fi):pi?/(?:Version)[ \/]?(\S+)/.exec(fi):void 0);if(_i&&(ki=_i?_i[1]:""),mi){var Ti=bi();if(null!=Ti&&Ti>parseFloat(ki)){di=String(Ti);break e}}di=ki}var Ei,Ii={};function Si(){return function(e){var t=Ii;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=ni(String(di)).split("."),n=ni("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=ii(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||ii(0==i[2].length,0==s[2].length)||ii(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(Lr.document&&mi){var Ai=bi();Ei=Ai||(parseInt(di,10)||void 0)}else Ei=void 0;var Ci=Ei,xi=function(){if(!Lr.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{Lr.addEventListener("test",Fr,t),Lr.removeEventListener("test",Fr,t)}catch(e){}return e}();function $i(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function Ri(e,t){if($i.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(vi){e:{try{hi(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Ni[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Ri.Z.h.call(this)}}$i.prototype.h=function(){this.defaultPrevented=!0},Wr(Ri,$i);var Ni={2:"touch",3:"pen",4:"mouse"};Ri.prototype.h=function(){Ri.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Di="closure_listenable_"+(1e6*Math.random()|0),Oi=0;function Pi(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++Oi,this.ca=this.fa=!1}function Mi(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function Li(e){this.src=e,this.g={},this.h=0}function Fi(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=Xr(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Mi(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Ui(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==r)return i}return-1}Li.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=Ui(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):((t=new Pi(t,this.src,s,!!r,i)).fa=n,e.push(t)),t};var Bi="closure_lm_"+(1e6*Math.random()|0),ji={};function Vi(e,t,n,r,i){if(r&&r.once)return qi(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Vi(e,t[s],n,r,i);return null}return n=Yi(n),e&&e[Di]?e.N(t,n,Br(r)?!!r.capture:!!r,i):zi(e,t,n,!1,r,i)}function zi(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Br(i)?!!i.capture:!!i,a=Ji(e);if(a||(e[Bi]=a=new Li(e)),(n=a.add(t,n,r,o,s)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}var t=Gi;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)xi||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Wi(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function qi(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)qi(e,t[s],n,r,i);return null}return n=Yi(n),e&&e[Di]?e.O(t,n,Br(r)?!!r.capture:!!r,i):zi(e,t,n,!0,r,i)}function Ki(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Ki(e,t[s],n,r,i);else r=Br(r)?!!r.capture:!!r,n=Yi(n),e&&e[Di]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=Ui(s=e.g[t],n,r,i))&&(Mi(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Ji(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Ui(t,n,r,i)),(n=-1<e?t[e]:null)&&Hi(n))}function Hi(e){if("number"!=typeof e&&e&&!e.ca){var t=e.src;if(t&&t[Di])Fi(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Wi(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ji(t))?(Fi(n,e),0==n.h&&(n.src=null,t[Bi]=null)):Mi(e)}}}function Wi(e){return e in ji?ji[e]:ji[e]="on"+e}function Gi(e,t){if(e.ca)e=!0;else{t=new Ri(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&Hi(e),e=n.call(r,t)}return e}function Ji(e){return(e=e[Bi])instanceof Li?e:null}var Xi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Yi(e){return"function"==typeof e?e:(e[Xi]||(e[Xi]=function(t){return e.handleEvent(t)}),e[Xi])}function Qi(){Gr.call(this),this.i=new Li(this),this.P=this,this.I=null}function Zi(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new $i(t,e);else if(t instanceof $i)t.target=t.target||e;else{var i=t;ui(t=new $i(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=es(o,r,!0,t)&&i}if(i=es(o=t.g=e,r,!0,t)&&i,i=es(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=es(o=t.g=n[s],r,!1,t)&&i}function es(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Fi(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}Wr(Qi,Gr),Qi.prototype[Di]=!0,Qi.prototype.removeEventListener=function(e,t,n,r){Ki(this,e,t,n,r)},Qi.prototype.M=function(){if(Qi.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Mi(n[r]);delete t.g[e],t.h--}}this.I=null},Qi.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Qi.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var ts=Lr.JSON.stringify;function ns(){var e=ls;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var rs,is=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new ss),(e=>e.reset()));class ss{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function os(e){Lr.setTimeout((()=>{throw e}),0)}function as(e,t){rs||function(){var e=Lr.Promise.resolve(void 0);rs=function(){e.then(us)}}(),cs||(rs(),cs=!0),ls.add(e,t)}var cs=!1,ls=new class{constructor(){this.h=this.g=null}add(e,t){const n=is.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function us(){for(var e;e=ns();){try{e.h.call(e.g)}catch(e){os(e)}var t=is;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}cs=!1}function hs(e,t){Qi.call(this),this.h=e||1,this.g=t||Lr,this.j=Kr(this.kb,this),this.l=Date.now()}function ds(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function fs(e,t,n){if("function"==typeof e)n&&(e=Kr(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=Kr(e.handleEvent,e)}return 2147483647<Number(t)?-1:Lr.setTimeout(e,t||0)}function ps(e){e.g=fs((()=>{e.g=null,e.i&&(e.i=!1,ps(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}Wr(hs,Qi),(Or=hs.prototype).da=!1,Or.S=null,Or.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Zi(this,"tick"),this.da&&(ds(this),this.start()))}},Or.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Or.M=function(){hs.Z.M.call(this),ds(this),delete this.g};class ms extends Gr{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ps(this)}M(){super.M(),this.g&&(Lr.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gs(e){Gr.call(this),this.h=e,this.g={}}Wr(gs,Gr);var ys=[];function vs(e,t,n,r){Array.isArray(n)||(n&&(ys[0]=n.toString()),n=ys);for(var i=0;i<n.length;i++){var s=Vi(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function ws(e){ai(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Hi(e)}),e),e.g={}}function bs(){this.g=!0}function ks(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return ts(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}gs.prototype.M=function(){gs.Z.M.call(this),ws(this)},gs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},bs.prototype.Aa=function(){this.g=!1},bs.prototype.info=function(){};var _s={},Ts=null;function Es(){return Ts=Ts||new Qi}function Is(e){$i.call(this,_s.Ma,e)}function Ss(e){const t=Es();Zi(t,new Is(t,e))}function As(e,t){$i.call(this,_s.STAT_EVENT,e),this.stat=t}function Cs(e){const t=Es();Zi(t,new As(t,e))}function xs(e,t){$i.call(this,_s.Na,e),this.size=t}function $s(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return Lr.setTimeout((function(){e()}),t)}_s.Ma="serverreachability",Wr(Is,$i),_s.STAT_EVENT="statevent",Wr(As,$i),_s.Na="timingevent",Wr(xs,$i);var Rs={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Ns={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ds(){}function Os(e){return e.h||(e.h=e.i())}function Ps(){}Ds.prototype.h=null;var Ms,Ls={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Fs(){$i.call(this,"d")}function Us(){$i.call(this,"c")}function Bs(){}function js(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new gs(this),this.P=zs,e=yi?125:void 0,this.W=new hs(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Vs}function Vs(){this.i=null,this.g="",this.h=!1}Wr(Fs,$i),Wr(Us,$i),Wr(Bs,Ds),Bs.prototype.g=function(){return new XMLHttpRequest},Bs.prototype.i=function(){return{}},Ms=new Bs;var zs=45e3,qs={},Ks={};function Hs(e,t,n){e.K=1,e.v=go(lo(t)),e.s=n,e.U=!0,Ws(e,null)}function Ws(e,t){e.F=Date.now(),Ys(e),e.A=lo(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),xo(n.h,"t",r),e.C=0,n=e.l.H,e.h=new Vs,e.g=$a(e.l,n?t:null,!e.s),0<e.O&&(e.L=new ms(Kr(e.Ia,e,e.g),e.O)),vs(e.V,e.g,"readystatechange",e.gb),t=e.H?ci(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Ss(1),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.X,e.s)}function Gs(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function Js(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=Xs(e,n),r==Ks){4==t&&(e.o=4,Cs(14),i=!1),ks(e.j,e.m,null,"[Incomplete Response]");break}if(r==qs){e.o=4,Cs(15),ks(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}ks(e.j,e.m,r,null),no(e,r)}Gs(e)&&r!=Ks&&r!=qs&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Cs(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,(t=e.l).g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),_a(t),t.L=!0,Cs(11))):(ks(e.j,e.m,n,"[Invalid Chunked Response]"),to(e),eo(e))}function Xs(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Ks:(n=Number(t.substring(n,r)),isNaN(n)?qs:(r+=1)+n>t.length?Ks:(t=t.substr(r,n),e.C=r+n,t))}function Ys(e){e.Y=Date.now()+e.P,Qs(e,e.P)}function Qs(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=$s(Kr(e.eb,e),t)}function Zs(e){e.B&&(Lr.clearTimeout(e.B),e.B=null)}function eo(e){0==e.l.G||e.I||Ia(e.l,e)}function to(e){Zs(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,ds(e.W),ws(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function no(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||Po(n.i,e)))if(n.I=e.N,!e.J&&Po(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Ea(n),da(n)}ka(n),Cs(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=$s(Kr(n.ab,n),6e3));if(1>=Oo(n.i)&&n.ka){try{n.ka()}catch(e){}n.ka=void 0}}else Aa(n,11)}else if((e.J||n.g==e)&&Ea(n),!ei(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(n.U=l[0],l=l[1],2==n.G)if("c"==l[0]){n.J=l[1],n.la=l[2];const t=l[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const i=l[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const u=l[5];null!=u&&"number"==typeof u&&0<u&&(r=1.5*u,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;!s.g&&(ri(e,"spdy")||ri(e,"quic")||ri(e,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Mo(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,mo(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=e;if((r=n).oa=xa(r,r.H?r.la:null,r.W),o.J){Lo(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Zs(a),Ys(a)),r.g=o}else ba(r);0<n.l.length&&ma(n)}else"stop"!=l[0]&&"close"!=l[0]||Aa(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?Aa(n,7):ha(n):"noop"!=l[0]&&n.j&&n.j.wa(l),n.A=0)}Ss(4)}catch(e){}}function ro(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(Ur(e)||"string"==typeof e)Yr(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(Ur(e)||"string"==typeof e){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;r=function(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"==typeof e)return e.split("");if(Ur(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length;for(var s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}}function io(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof io)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function so(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];oo(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)oo(i,r=e.g[t])||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}function oo(e,t){return Object.prototype.hasOwnProperty.call(e,t)}(Or=js.prototype).setTimeout=function(e){this.P=e},Or.gb=function(e){e=e.target;const t=this.L;t&&3==oa(e)?t.l():this.Ia(e)},Or.Ia=function(e){try{if(e==this.g)e:{const u=oa(this.g);var t=this.g.Da();const h=this.g.ba();if(!(3>u)&&(3!=u||yi||this.g&&(this.h.h||this.g.ga()||aa(this.g)))){this.I||4!=u||7==t||Ss(8==t||0>=h?3:2),Zs(this);var n=this.g.ba();this.N=n;t:if(Gs(this)){var r=aa(this.g);e="";var i=r.length,s=4==oa(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){to(this),eo(this);var o="";break t}this.h.i=new Lr.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ei(a)){var l=a;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,Cs(12),to(this),eo(this);break e}ks(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,no(this,n)}this.U?(Js(this,u,o),yi&&this.i&&3==u&&(vs(this.V,this.W,"tick",this.fb),this.W.start())):(ks(this.j,this.m,o,null),no(this,o)),4==u&&to(this),this.i&&!this.I&&(4==u?Ia(this.l,this):(this.i=!1,Ys(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Cs(12)):(this.o=0,Cs(13)),to(this),eo(this)}}}catch(e){}},Or.fb=function(){if(this.g){var e=oa(this.g),t=this.g.ga();this.C<t.length&&(Zs(this),Js(this,e,t),this.i&&4!=e&&Ys(this))}},Or.cancel=function(){this.I=!0,to(this)},Or.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(Ss(3),Cs(17)),to(this),this.o=2,eo(this)):Qs(this,this.Y-e)},(Or=io.prototype).R=function(){so(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},Or.T=function(){return so(this),this.g.concat()},Or.get=function(e,t){return oo(this.h,e)?this.h[e]:t},Or.set=function(e,t){oo(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},Or.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);e.call(t,s,i,this)}};var ao=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function co(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof co){this.g=void 0!==t?t:e.g,uo(this,e.j),this.s=e.s,ho(this,e.i),fo(this,e.m),this.l=e.l,t=e.h;var n=new Io;n.i=t.i,t.g&&(n.g=new io(t.g),n.h=t.h),po(this,n),this.o=e.o}else e&&(n=String(e).match(ao))?(this.g=!!t,uo(this,n[1]||"",!0),this.s=yo(n[2]||""),ho(this,n[3]||"",!0),fo(this,n[4]),this.l=yo(n[5]||"",!0),po(this,n[6]||"",!0),this.o=yo(n[7]||"")):(this.g=!!t,this.h=new Io(null,this.g))}function lo(e){return new co(e)}function uo(e,t,n){e.j=n?yo(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ho(e,t,n){e.i=n?yo(t,!0):t}function fo(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function po(e,t,n){t instanceof Io?(e.h=t,function(e,t){t&&!e.j&&(So(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Ao(this,t),xo(this,n,e))}),e)),e.j=t}(e.h,e.g)):(n||(t=vo(t,To)),e.h=new Io(t,e.g))}function mo(e,t,n){e.h.set(t,n)}function go(e){return mo(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function yo(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function vo(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,wo),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function wo(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}co.prototype.toString=function(){var e=[],t=this.j;t&&e.push(vo(t,bo,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(vo(t,bo,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(vo(n,"/"==n.charAt(0)?_o:ko,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",vo(n,Eo)),e.join("")};var bo=/[#\/\?@]/g,ko=/[#\?:]/g,_o=/[#\?]/g,To=/[#\?@]/g,Eo=/#/g;function Io(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function So(e){e.g||(e.g=new io,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Ao(e,t){So(e),t=$o(e,t),oo(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,oo((e=e.g).h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&so(e)))}function Co(e,t){return So(e),t=$o(e,t),oo(e.g.h,t)}function xo(e,t,n){Ao(e,t),0<n.length&&(e.i=null,e.g.set($o(e,t),Zr(n)),e.h+=n.length)}function $o(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(Or=Io.prototype).add=function(e,t){So(this),this.i=null,e=$o(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},Or.forEach=function(e,t){So(this),this.g.forEach((function(n,r){Yr(n,(function(n){e.call(t,n,r,this)}),this)}),this)},Or.T=function(){So(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],s=0;s<i.length;s++)n.push(t[r]);return n},Or.R=function(e){So(this);var t=[];if("string"==typeof e)Co(this,e)&&(t=Qr(t,this.g.get($o(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=Qr(t,e[n])}return t},Or.set=function(e,t){return So(this),this.i=null,Co(this,e=$o(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},Or.get=function(e,t){return e&&0<(e=this.R(e)).length?String(e[0]):t},Or.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),e.push(o)}}return this.i=e.join("&")};function Ro(e){this.l=e||No,Lr.PerformanceNavigationTiming?e=0<(e=Lr.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(Lr.g&&Lr.g.Ea&&Lr.g.Ea()&&Lr.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var No=10;function Do(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Oo(e){return e.h?1:e.g?e.g.size:0}function Po(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Mo(e,t){e.g?e.g.add(t):e.h=t}function Lo(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Fo(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Zr(e.i)}function Uo(){}function Bo(){this.g=new Uo}function jo(e,t,n){const r=n||"";try{ro(e,(function(e,n){let i=e;Br(e)&&(i=ts(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function Vo(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function zo(e){this.l=e.$b||null,this.j=e.ib||!1}function qo(e,t){Qi.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Ko,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ro.prototype.cancel=function(){if(this.i=Fo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},Uo.prototype.stringify=function(e){return Lr.JSON.stringify(e,void 0)},Uo.prototype.parse=function(e){return Lr.JSON.parse(e,void 0)},Wr(zo,Ds),zo.prototype.g=function(){return new qo(this.l,this.j)},zo.prototype.i=function(e){return function(){return e}}({}),Wr(qo,Qi);var Ko=0;function Ho(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function Wo(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Go(e)}function Go(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(Or=qo.prototype).open=function(e,t){if(this.readyState!=Ko)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Go(this)},Or.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||Lr).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},Or.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Wo(this)),this.readyState=Ko},Or.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Go(this)),this.g&&(this.readyState=3,Go(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==Lr.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ho(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},Or.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Wo(this):Go(this),3==this.readyState&&Ho(this)}},Or.Ua=function(e){this.g&&(this.response=this.responseText=e,Wo(this))},Or.Ta=function(e){this.g&&(this.response=e,Wo(this))},Or.ha=function(){this.g&&Wo(this)},Or.setRequestHeader=function(e,t){this.v.append(e,t)},Or.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},Or.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(qo.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Jo=Lr.JSON.parse;function Xo(e){Qi.call(this),this.headers=new io,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Yo,this.K=this.L=!1}Wr(Xo,Qi);var Yo="",Qo=/^https?$/i,Zo=["POST","PUT"];function ea(e){return"content-type"==e.toLowerCase()}function ta(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,na(e),ia(e)}function na(e){e.D||(e.D=!0,Zi(e,"complete"),Zi(e,"error"))}function ra(e){if(e.h&&void 0!==Mr&&(!e.C[1]||4!=oa(e)||2!=e.ba()))if(e.v&&4==oa(e))fs(e.Fa,0,e);else if(Zi(e,"readystatechange"),4==oa(e)){e.h=!1;try{const a=e.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var i=String(e.H).match(ao)[1]||null;if(!i&&Lr.self&&Lr.self.location){var s=Lr.self.location.protocol;i=s.substr(0,s.length-1)}r=!Qo.test(i?i.toLowerCase():"")}n=r}if(n)Zi(e,"complete"),Zi(e,"success");else{e.m=6;try{var o=2<oa(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.ba()+"]",na(e)}}finally{ia(e)}}}function ia(e,t){if(e.g){sa(e);const n=e.g,r=e.C[0]?Fr:null;e.g=null,e.C=null,t||Zi(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function sa(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(Lr.clearTimeout(e.A),e.A=null)}function oa(e){return e.g?e.g.readyState:0}function aa(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Yo:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function ca(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=function(e){let t="";return ai(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):mo(e,t,n))}function la(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function ua(e){this.za=0,this.l=[],this.h=new bs,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=la("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=la("baseRetryDelayMs",5e3,e),this.$a=la("retryDelaySeedMs",1e4,e),this.Ya=la("forwardChannelMaxRetries",2,e),this.ra=la("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new Ro(e&&e.concurrentRequestLimit),this.Ca=new Bo,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function ha(e){if(fa(e),3==e.G){var t=e.V++,n=lo(e.F);mo(n,"SID",e.J),mo(n,"RID",t),mo(n,"TYPE","terminate"),va(e,n),(t=new js(e,e.h,t,void 0)).K=2,t.v=go(lo(n)),n=!1,Lr.navigator&&Lr.navigator.sendBeacon&&(n=Lr.navigator.sendBeacon(t.v.toString(),"")),!n&&Lr.Image&&((new Image).src=t.v,n=!0),n||(t.g=$a(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Ys(t)}Ca(e)}function da(e){e.g&&(_a(e),e.g.cancel(),e.g=null)}function fa(e){da(e),e.u&&(Lr.clearTimeout(e.u),e.u=null),Ea(e),e.i.cancel(),e.m&&("number"==typeof e.m&&Lr.clearTimeout(e.m),e.m=null)}function pa(e,t){e.l.push(new class{constructor(e,t){this.h=e,this.g=t}}(e.Za++,t)),3==e.G&&ma(e)}function ma(e){Do(e.i)||e.m||(e.m=!0,as(e.Ha,e),e.C=0)}function ya(e,t){var n;n=t?t.m:e.V++;const r=lo(e.F);mo(r,"SID",e.J),mo(r,"RID",n),mo(r,"AID",e.U),va(e,r),e.o&&e.s&&ca(r,e.o,e.s),n=new js(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=wa(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),Mo(e.i,n),Hs(n,r,t)}function va(e,t){e.j&&ro({},(function(e,n){mo(t,n,e)}))}function wa(e,t,n){n=Math.min(e.l.length,n);var r=e.j?Kr(e.j.Oa,e.j,e):null;e:{var i=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=t,0>n)t=Math.max(0,i[o].h-100),s=!1;else try{jo(a,e,"req"+n+"_")}catch(e){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function ba(e){e.g||e.u||(e.Y=1,as(e.Ga,e),e.A=0)}function ka(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=$s(Kr(e.Ga,e),Sa(e,e.A)),e.A++,!0)}function _a(e){null!=e.B&&(Lr.clearTimeout(e.B),e.B=null)}function Ta(e){e.g=new js(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=lo(e.oa);mo(t,"RID","rpc"),mo(t,"SID",e.J),mo(t,"CI",e.N?"0":"1"),mo(t,"AID",e.U),va(e,t),mo(t,"TYPE","xmlhttp"),e.o&&e.s&&ca(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=go(lo(t)),n.s=null,n.U=!0,Ws(n,e)}function Ea(e){null!=e.v&&(Lr.clearTimeout(e.v),e.v=null)}function Ia(e,t){var n=null;if(e.g==t){Ea(e),_a(e),e.g=null;var r=2}else{if(!Po(e.i,t))return;n=t.D,Lo(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;Zi(r=Es(),new xs(r,n,t,i)),ma(e)}else ba(e);else if(3==(i=t.o)||0==i&&0<e.I||!(1==r&&function(e,t){return!(Oo(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.l=t.D.concat(e.l),0):1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya)||(e.m=$s(Kr(e.Ha,e,t),Sa(e,e.C)),e.C++,0)))}(e,t)||2==r&&ka(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Aa(e,5);break;case 4:Aa(e,10);break;case 3:Aa(e,6);break;default:Aa(e,2)}}function Sa(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function Aa(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=Kr(e.jb,e);n||(n=new co("//www.google.com/images/cleardot.gif"),Lr.location&&"http"==Lr.location.protocol||uo(n,"https"),go(n)),function(e,t){const n=new bs;if(Lr.Image){const r=new Image;r.onload=Hr(Vo,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Hr(Vo,n,r,"TestLoadImage: error",!1,t),r.onabort=Hr(Vo,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Hr(Vo,n,r,"TestLoadImage: timeout",!1,t),Lr.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else Cs(2);e.G=0,e.j&&e.j.va(t),Ca(e),fa(e)}function Ca(e){e.G=0,e.I=-1,e.j&&(0==Fo(e.i).length&&0==e.l.length||(e.i.i.length=0,Zr(e.l),e.l.length=0),e.j.ua())}function xa(e,t,n){let r=function(e){return e instanceof co?lo(e):new co(e,void 0)}(n);if(""!=r.i)t&&ho(r,t+"."+r.i),fo(r,r.m);else{const e=Lr.location;r=function(e,t,n,r){var i=new co(null,void 0);return e&&uo(i,e),t&&ho(i,t),n&&fo(i,n),r&&(i.l=r),i}(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&ai(e.aa,(function(e,t){mo(r,t,e)})),t=e.D,n=e.sa,t&&n&&mo(r,t,n),mo(r,"VER",e.ma),va(e,r),r}function $a(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ba&&!e.qa?new Xo(new zo({ib:!0})):new Xo(e.qa)).L=e.H,t}function Ra(){}function Na(){if(mi&&!(10<=Number(Ci)))throw Error("Environmental error: no available transport.")}function Da(e,t){Qi.call(this),this.g=new ua(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!ei(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ei(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Ma(this)}function Oa(e){Fs.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Pa(){Us.call(this),this.status=1}function Ma(e){this.g=e}(Or=Xo.prototype).ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ms.g(),this.C=this.u?Os(this.u):Os(Ms),this.g.onreadystatechange=Kr(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void ta(this,e)}e=n||"";const i=new io(this.headers);r&&ro(r,(function(e,t){i.set(t,e)})),r=function(e){e:{var t=ea;const n=e.length,r="string"==typeof e?e.split(""):e;for(let i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:"string"==typeof e?e.charAt(t):e[t]}(i.T()),n=Lr.FormData&&e instanceof Lr.FormData,!(0<=Xr(Zo,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{sa(this),0<this.B&&((this.K=function(e){return mi&&Si()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Kr(this.pa,this)):this.A=fs(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){ta(this,e)}},Or.pa=function(){void 0!==Mr&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Zi(this,"timeout"),this.abort(8))},Or.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Zi(this,"complete"),Zi(this,"abort"),ia(this))},Or.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ia(this,!0)),Xo.Z.M.call(this)},Or.Fa=function(){this.s||(this.F||this.v||this.l?ra(this):this.cb())},Or.cb=function(){ra(this)},Or.ba=function(){try{return 2<oa(this)?this.g.status:-1}catch(e){return-1}},Or.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},Or.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Jo(t)}},Or.Da=function(){return this.m},Or.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(Or=ua.prototype).ma=8,Or.G=1,Or.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(e){}},Or.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new js(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?(s=ci(s),ui(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=wa(this,i,t),mo(n=lo(this.F),"RID",e),mo(n,"CVER",22),this.D&&mo(n,"X-HTTP-Session-Id",this.D),va(this,n),this.o&&s&&ca(n,this.o,s),Mo(this.i,i),this.Ra&&mo(n,"TYPE","init"),this.ja?(mo(n,"$req",t),mo(n,"SID","null"),i.$=!0,Hs(i,n,null)):Hs(i,n,t),this.G=2}}else 3==this.G&&(e?ya(this,e):0==this.l.length||Do(this.i)||ya(this))},Or.Ga=function(){if(this.u=null,Ta(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=$s(Kr(this.bb,this),e)}},Or.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Cs(10),da(this),Ta(this))},Or.ab=function(){null!=this.v&&(this.v=null,da(this),ka(this),Cs(19))},Or.jb=function(e){e?(this.h.info("Successfully pinged google.com"),Cs(2)):(this.h.info("Failed to ping google.com"),Cs(1))},(Or=Ra.prototype).xa=function(){},Or.wa=function(){},Or.va=function(){},Or.ua=function(){},Or.Oa=function(){},Na.prototype.g=function(e,t){return new Da(e,t)},Wr(Da,Qi),Da.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),as(Kr(e.hb,e,t))),Cs(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=xa(e,null,e.W),ma(e)},Da.prototype.close=function(){ha(this.g)},Da.prototype.u=function(e){if("string"==typeof e){var t={};t.__data__=e,pa(this.g,t)}else this.v?((t={}).__data__=ts(e),pa(this.g,t)):pa(this.g,e)},Da.prototype.M=function(){this.g.j=null,delete this.j,ha(this.g),delete this.g,Da.Z.M.call(this)},Wr(Oa,Fs),Wr(Pa,Us),Wr(Ma,Ra),Ma.prototype.xa=function(){Zi(this.g,"a")},Ma.prototype.wa=function(e){Zi(this.g,new Oa(e))},Ma.prototype.va=function(e){Zi(this.g,new Pa(e))},Ma.prototype.ua=function(){Zi(this.g,"b")},Na.prototype.createWebChannel=Na.prototype.g,Da.prototype.send=Da.prototype.u,Da.prototype.open=Da.prototype.m,Da.prototype.close=Da.prototype.close,Rs.NO_ERROR=0,Rs.TIMEOUT=8,Rs.HTTP_ERROR=6,Ns.COMPLETE="complete",Ps.EventType=Ls,Ls.OPEN="a",Ls.CLOSE="b",Ls.ERROR="c",Ls.MESSAGE="d",Qi.prototype.listen=Qi.prototype.N,Xo.prototype.listenOnce=Xo.prototype.O,Xo.prototype.getLastError=Xo.prototype.La,Xo.prototype.getLastErrorCode=Xo.prototype.Da,Xo.prototype.getStatus=Xo.prototype.ba,Xo.prototype.getResponseJson=Xo.prototype.Qa,Xo.prototype.getResponseText=Xo.prototype.ga,Xo.prototype.send=Xo.prototype.ea;var La=Rs,Fa=Ns,Ua=_s,Ba=10,ja=11,Va=zo,za=Ps,qa=Xo;const Ka="@firebase/firestore";
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
     */class Ha{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ha.UNAUTHENTICATED=new Ha(null),Ha.GOOGLE_CREDENTIALS=new Ha("google-credentials-uid"),Ha.FIRST_PARTY=new Ha("first-party-uid"),Ha.MOCK_USER=new Ha("mock-user");
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
let Wa="9.6.1";
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
     */const Ga=new Yt("@firebase/firestore");function Ja(){return Ga.logLevel}function Xa(e,...t){if(Ga.logLevel<=Ht.DEBUG){const n=t.map(Za);Ga.debug(`Firestore (${Wa}): ${e}`,...n)}}function Ya(e,...t){if(Ga.logLevel<=Ht.ERROR){const n=t.map(Za);Ga.error(`Firestore (${Wa}): ${e}`,...n)}}function Qa(e,...t){if(Ga.logLevel<=Ht.WARN){const n=t.map(Za);Ga.warn(`Firestore (${Wa}): ${e}`,...n)}}function Za(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
     */function ec(e="Unexpected state"){const t=`FIRESTORE (${Wa}) INTERNAL ASSERTION FAILED: `+e;throw Ya(t),new Error(t)}function tc(e,t){e||ec()}function nc(e,t){return e}
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
     */const rc={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ic extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
     */class sc{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
     */class oc{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ac{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ha.UNAUTHENTICATED)))}shutdown(){}}class cc{constructor(e){this.t=e,this.currentUser=Ha.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new sc;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new sc,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Xa("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Xa("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new sc)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Xa("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(tc("string"==typeof t.accessToken),new oc(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return tc(null===e||"string"==typeof e),new Ha(e)}}class lc{constructor(e,t,n){this.type="FirstParty",this.user=Ha.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class uc{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new lc(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(Ha.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class hc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dc{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null}start(e,t){this.o=n=>{e.enqueueRetryable((()=>(e=>(null!=e.error&&Xa("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`),t(e.token)))(n)))};const n=e=>{Xa("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit((e=>n(e))),setTimeout((()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?n(e):Xa("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(tc("string"==typeof e.token),new hc(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
     */class fc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.p(e),this.T=e=>t.writeSequenceNumber(e))}p(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function pc(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
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
     */fc.I=-1;class mc{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=pc(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function gc(e,t){return e<t?-1:e>t?1:0}function yc(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
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
     */class vc{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ic(rc.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ic(rc.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ic(rc.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ic(rc.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return vc.fromMillis(Date.now())}static fromDate(e){return vc.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new vc(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?gc(this.nanoseconds,e.nanoseconds):gc(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
     */class wc{constructor(e){this.timestamp=e}static fromTimestamp(e){return new wc(e)}static min(){return new wc(new vc(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
     */function bc(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function kc(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function _c(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
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
     */class Tc{constructor(e,t,n){void 0===t?t=0:t>e.length&&ec(),void 0===n?n=e.length-t:n>e.length-t&&ec(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Tc.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Tc?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ec extends Tc{construct(e,t,n){return new Ec(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new ic(rc.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Ec(t)}static emptyPath(){return new Ec([])}}const Ic=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Sc extends Tc{construct(e,t,n){return new Sc(e,t,n)}static isValidIdentifier(e){return Ic.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Sc.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Sc(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new ic(rc.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new ic(rc.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new ic(rc.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new ic(rc.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Sc(t)}static emptyPath(){return new Sc([])}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ac{constructor(e){this.fields=e,e.sort(Sc.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return yc(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Cc{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Cc(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Cc(t)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return gc(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Cc.EMPTY_BYTE_STRING=new Cc("");const xc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $c(e){if(tc(!!e),"string"==typeof e){let t=0;const n=xc.exec(e);if(tc(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Rc(e.seconds),nanos:Rc(e.nanos)}}function Rc(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Nc(e){return"string"==typeof e?Cc.fromBase64String(e):Cc.fromUint8Array(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Dc(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Oc(e){const t=e.mapValue.fields.__previous_value__;return Dc(t)?Oc(t):t}function Pc(e){const t=$c(e.mapValue.fields.__local_write_time__.timestampValue);return new vc(t.seconds,t.nanos)}
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
     */function Mc(e){return null==e}function Lc(e){return 0===e&&1/e==-1/0}
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
class Fc{constructor(e){this.path=e}static fromPath(e){return new Fc(Ec.fromString(e))}static fromName(e){return new Fc(Ec.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===Ec.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Ec.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Fc(new Ec(e.slice()))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Uc(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Dc(e)?4:10:ec()}function Bc(e,t){const n=Uc(e);if(n!==Uc(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Pc(e).isEqual(Pc(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=$c(e.timestampValue),r=$c(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Nc(e.bytesValue).isEqual(Nc(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Rc(e.geoPointValue.latitude)===Rc(t.geoPointValue.latitude)&&Rc(e.geoPointValue.longitude)===Rc(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Rc(e.integerValue)===Rc(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Rc(e.doubleValue),r=Rc(t.doubleValue);return n===r?Lc(n)===Lc(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return yc(e.arrayValue.values||[],t.arrayValue.values||[],Bc);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(bc(n)!==bc(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!Bc(n[e],r[e])))return!1;return!0}(e,t);default:return ec()}}function jc(e,t){return void 0!==(e.values||[]).find((e=>Bc(e,t)))}function Vc(e,t){const n=Uc(e),r=Uc(t);if(n!==r)return gc(n,r);switch(n){case 0:return 0;case 1:return gc(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Rc(e.integerValue||e.doubleValue),r=Rc(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return zc(e.timestampValue,t.timestampValue);case 4:return zc(Pc(e),Pc(t));case 5:return gc(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Nc(e),r=Nc(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=gc(n[e],r[e]);if(0!==t)return t}return gc(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=gc(Rc(e.latitude),Rc(t.latitude));return 0!==n?n:gc(Rc(e.longitude),Rc(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=Vc(n[e],r[e]);if(t)return t}return gc(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){const t=gc(r[e],s[e]);if(0!==t)return t;const o=Vc(n[r[e]],i[s[e]]);if(0!==o)return o}return gc(r.length,s.length)}(e.mapValue,t.mapValue);default:throw ec()}}function zc(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return gc(e,t);const n=$c(e),r=$c(t),i=gc(n.seconds,r.seconds);return 0!==i?i:gc(n.nanos,r.nanos)}function qc(e){return Kc(e)}function Kc(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=$c(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Nc(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Fc.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Kc(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Kc(e.fields[i])}`;return n+"}"}(e.mapValue):ec();var t,n}function Hc(e){return!!e&&"integerValue"in e}function Wc(e){return!!e&&"arrayValue"in e}function Gc(e){return!!e&&"nullValue"in e}function Jc(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Xc(e){return!!e&&"mapValue"in e}function Yc(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return kc(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Yc(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Yc(e.arrayValue.values[n]);return t}return Object.assign({},e)}
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
     */class Qc{constructor(e){this.value=e}static empty(){return new Qc({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Xc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Yc(t)}setAll(e){let t=Sc.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Yc(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Xc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Bc(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Xc(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){kc(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new Qc(Yc(this.value))}}function Zc(e){const t=[];return kc(e.fields,((e,n)=>{const r=new Sc([e]);if(Xc(n)){const e=Zc(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Ac(t)
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
     */}class el{constructor(e,t,n,r,i){this.key=e,this.documentType=t,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(e){return new el(e,0,wc.min(),Qc.empty(),0)}static newFoundDocument(e,t,n){return new el(e,1,t,n,0)}static newNoDocument(e,t){return new el(e,2,t,Qc.empty(),0)}static newUnknownDocument(e,t){return new el(e,3,t,Qc.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qc.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qc.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof el&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new el(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
     */class tl{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.R=null}}function nl(e,t=null,n=[],r=[],i=null,s=null,o=null){return new tl(e,t,n,r,i,s,o)}function rl(e){const t=nc(e);if(null===t.R){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>function(e){return e.field.canonicalString()+e.op.toString()+qc(e.value)}(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Mc(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=gl(t.startAt)),t.endAt&&(e+="|ub:",e+=gl(t.endAt)),t.R=e}return t.R}function il(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!vl(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Bc(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!bl(e.startAt,t.startAt)&&bl(e.endAt,t.endAt)}function sl(e){return Fc.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class ol extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.P(e,t,n):new al(e,t,n):"array-contains"===t?new hl(e,n):"in"===t?new dl(e,n):"not-in"===t?new fl(e,n):"array-contains-any"===t?new pl(e,n):new ol(e,t,n)}static P(e,t,n){return"in"===t?new cl(e,n):new ll(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.v(Vc(t,this.value)):null!==t&&Uc(this.value)===Uc(t)&&this.v(Vc(t,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return ec()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class al extends ol{constructor(e,t,n){super(e,t,n),this.key=Fc.fromName(n.referenceValue)}matches(e){const t=Fc.comparator(e.key,this.key);return this.v(t)}}class cl extends ol{constructor(e,t){super(e,"in",t),this.keys=ul("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class ll extends ol{constructor(e,t){super(e,"not-in",t),this.keys=ul("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function ul(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Fc.fromName(e.referenceValue)))}class hl extends ol{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Wc(t)&&jc(t.arrayValue,this.value)}}class dl extends ol{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&jc(this.value.arrayValue,t)}}class fl extends ol{constructor(e,t){super(e,"not-in",t)}matches(e){if(jc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!jc(this.value.arrayValue,t)}}class pl extends ol{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Wc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>jc(this.value.arrayValue,e)))}}class ml{constructor(e,t){this.position=e,this.before=t}}function gl(e){return`${e.before?"b":"a"}:${e.position.map((e=>qc(e))).join(",")}`}class yl{constructor(e,t="asc"){this.field=e,this.dir=t}}function vl(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function wl(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?Fc.comparator(Fc.fromName(o.referenceValue),n.key):Vc(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return e.before?r<=0:r<0}function bl(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.before!==t.before||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Bc(e.position[n],t.position[n]))return!1;return!0}
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
     */class kl{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.S=null,this.D=null,this.startAt,this.endAt}}function _l(e){return new kl(e)}function Tl(e){return!Mc(e.limit)&&"F"===e.limitType}function El(e){return!Mc(e.limit)&&"L"===e.limitType}function Il(e){const t=nc(e);if(null===t.S){t.S=[];const e=function(e){for(const t of e.filters)if(t.V())return t.field;return null}(t),n=function(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}(t);if(null!==e&&null===n)e.isKeyField()||t.S.push(new yl(e)),t.S.push(new yl(Sc.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.S.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.S.push(new yl(Sc.keyField(),e))}}}return t.S}function Sl(e){const t=nc(e);if(!t.D)if("F"===t.limitType)t.D=nl(t.path,t.collectionGroup,Il(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of Il(t)){const t="desc"===n.dir?"asc":"desc";e.push(new yl(n.field,t))}const n=t.endAt?new ml(t.endAt.position,!t.endAt.before):null,r=t.startAt?new ml(t.startAt.position,!t.startAt.before):null;t.D=nl(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.D}function Al(e,t){return il(Sl(e),Sl(t))&&e.limitType===t.limitType}function Cl(e){return`${rl(Sl(e))}|lt:${e.limitType}`}function xl(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${qc(t.value)}`;var t})).join(", ")}]`),Mc(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: "+gl(e.startAt)),e.endAt&&(t+=", endAt: "+gl(e.endAt)),`Target(${t})`}(Sl(e))}; limitType=${e.limitType})`}function $l(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Fc.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!wl(e.startAt,Il(e),t))&&(!e.endAt||!wl(e.endAt,Il(e),t))}(e,t)}function Rl(e){return(t,n)=>{let r=!1;for(const i of Il(e)){const e=Nl(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Nl(e,t,n){const r=e.field.isKeyField()?Fc.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Vc(r,i):ec()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return ec()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Dl(e,t){if(e.C){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Lc(t)?"-0":t}}function Ol(e){return{integerValue:""+e}}function Pl(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!Lc(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(t)?Ol(t):Dl(e,t)}
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
     */class Ml{constructor(){this._=void 0}}function Ll(e,t,n){return e instanceof Bl?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof jl?Vl(e,t):e instanceof zl?ql(e,t):function(e,t){const n=Ul(e,t),r=Hl(n)+Hl(e.N);return Hc(n)&&Hc(e.N)?Ol(r):Dl(e.k,r)}(e,t)}function Fl(e,t,n){return e instanceof jl?Vl(e,t):e instanceof zl?ql(e,t):n}function Ul(e,t){return e instanceof Kl?Hc(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class Bl extends Ml{}class jl extends Ml{constructor(e){super(),this.elements=e}}function Vl(e,t){const n=Wl(t);for(const t of e.elements)n.some((e=>Bc(e,t)))||n.push(t);return{arrayValue:{values:n}}}class zl extends Ml{constructor(e){super(),this.elements=e}}function ql(e,t){let n=Wl(t);for(const t of e.elements)n=n.filter((e=>!Bc(e,t)));return{arrayValue:{values:n}}}class Kl extends Ml{constructor(e,t){super(),this.k=e,this.N=t}}function Hl(e){return Rc(e.integerValue||e.doubleValue)}function Wl(e){return Wc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class Gl{constructor(e,t){this.version=e,this.transformResults=t}}class Jl{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Jl}static exists(e){return new Jl(void 0,e)}static updateTime(e){return new Jl(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xl(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Yl{}function Ql(e,t,n){e instanceof ru?function(e,t,n){const r=e.value.clone(),i=ou(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof iu?function(e,t,n){if(!Xl(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=ou(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(su(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Zl(e,t,n){e instanceof ru?function(e,t,n){if(!Xl(e.precondition,t))return;const r=e.value.clone(),i=au(e.fieldTransforms,n,t);r.setAll(i),t.convertToFoundDocument(nu(t),r).setHasLocalMutations()}(e,t,n):e instanceof iu?function(e,t,n){if(!Xl(e.precondition,t))return;const r=au(e.fieldTransforms,n,t),i=t.data;i.setAll(su(e)),i.setAll(r),t.convertToFoundDocument(nu(t),i).setHasLocalMutations()}(e,t,n):function(e,t){Xl(e.precondition,t)&&t.convertToNoDocument(wc.min())}(e,t)}function eu(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Ul(r.transform,e||null);null!=i&&(null==n&&(n=Qc.empty()),n.set(r.field,i))}return n||null}function tu(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&yc(e,t,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof jl&&t instanceof jl||e instanceof zl&&t instanceof zl?yc(e.elements,t.elements,Bc):e instanceof Kl&&t instanceof Kl?Bc(e.N,t.N):e instanceof Bl&&t instanceof Bl}(e.transform,t.transform)}(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function nu(e){return e.isFoundDocument()?e.version:wc.min()}class ru extends Yl{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class iu extends Yl{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function su(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function ou(e,t,n){const r=new Map;tc(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Fl(o,a,n[i]))}return r}function au(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,Ll(e,s,t))}return r}class cu extends Yl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class lu extends Yl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
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
     */class uu{constructor(e){this.count=e}}
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
     */var hu,du;function fu(e){if(void 0===e)return Ya("GRPC error has no .code"),rc.UNKNOWN;switch(e){case hu.OK:return rc.OK;case hu.CANCELLED:return rc.CANCELLED;case hu.UNKNOWN:return rc.UNKNOWN;case hu.DEADLINE_EXCEEDED:return rc.DEADLINE_EXCEEDED;case hu.RESOURCE_EXHAUSTED:return rc.RESOURCE_EXHAUSTED;case hu.INTERNAL:return rc.INTERNAL;case hu.UNAVAILABLE:return rc.UNAVAILABLE;case hu.UNAUTHENTICATED:return rc.UNAUTHENTICATED;case hu.INVALID_ARGUMENT:return rc.INVALID_ARGUMENT;case hu.NOT_FOUND:return rc.NOT_FOUND;case hu.ALREADY_EXISTS:return rc.ALREADY_EXISTS;case hu.PERMISSION_DENIED:return rc.PERMISSION_DENIED;case hu.FAILED_PRECONDITION:return rc.FAILED_PRECONDITION;case hu.ABORTED:return rc.ABORTED;case hu.OUT_OF_RANGE:return rc.OUT_OF_RANGE;case hu.UNIMPLEMENTED:return rc.UNIMPLEMENTED;case hu.DATA_LOSS:return rc.DATA_LOSS;default:return ec()}}(du=hu||(hu={}))[du.OK=0]="OK",du[du.CANCELLED=1]="CANCELLED",du[du.UNKNOWN=2]="UNKNOWN",du[du.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",du[du.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",du[du.NOT_FOUND=5]="NOT_FOUND",du[du.ALREADY_EXISTS=6]="ALREADY_EXISTS",du[du.PERMISSION_DENIED=7]="PERMISSION_DENIED",du[du.UNAUTHENTICATED=16]="UNAUTHENTICATED",du[du.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",du[du.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",du[du.ABORTED=10]="ABORTED",du[du.OUT_OF_RANGE=11]="OUT_OF_RANGE",du[du.UNIMPLEMENTED=12]="UNIMPLEMENTED",du[du.INTERNAL=13]="INTERNAL",du[du.UNAVAILABLE=14]="UNAVAILABLE",du[du.DATA_LOSS=15]="DATA_LOSS";
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
class pu{constructor(e,t){this.comparator=e,this.root=t||gu.EMPTY}insert(e,t){return new pu(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,gu.BLACK,null,null))}remove(e){return new pu(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gu.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new mu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new mu(this.root,e,this.comparator,!1)}getReverseIterator(){return new mu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new mu(this.root,e,this.comparator,!0)}}class mu{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class gu{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:gu.RED,this.left=null!=r?r:gu.EMPTY,this.right=null!=i?i:gu.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new gu(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return gu.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return gu.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gu.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gu.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ec();if(this.right.isRed())throw ec();const e=this.left.check();if(e!==this.right.check())throw ec();return e+(this.isRed()?0:1)}}gu.EMPTY=null,gu.RED=!0,gu.BLACK=!1,gu.EMPTY=new class{constructor(){this.size=0}get key(){throw ec()}get value(){throw ec()}get color(){throw ec()}get left(){throw ec()}get right(){throw ec()}copy(e,t,n,r,i){return this}insert(e,t,n){return new gu(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class yu{constructor(e){this.comparator=e,this.data=new pu(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new vu(this.data.getIterator())}getIteratorFrom(e){return new vu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof yu))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new yu(this.comparator);return t.data=e,t}}class vu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
     */const wu=new pu(Fc.comparator);function bu(){return wu}const ku=new pu(Fc.comparator);function _u(){return ku}const Tu=new pu(Fc.comparator);const Eu=new yu(Fc.comparator);function Iu(...e){let t=Eu;for(const n of e)t=t.add(n);return t}const Su=new yu(gc);function Au(){return Su}
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
     */class Cu{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,xu.createSynthesizedTargetChangeForCurrentChange(e,t)),new Cu(wc.min(),n,Au(),bu(),Iu())}}class xu{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new xu(Cc.EMPTY_BYTE_STRING,t,Iu(),Iu(),Iu())}}
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
     */class $u{constructor(e,t,n,r){this.$=e,this.removedTargetIds=t,this.key=n,this.F=r}}class Ru{constructor(e,t){this.targetId=e,this.O=t}}class Nu{constructor(e,t,n=Cc.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Du{constructor(){this.M=0,this.L=Mu(),this.B=Cc.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return 0!==this.M}get j(){return this.q}W(e){e.approximateByteSize()>0&&(this.q=!0,this.B=e)}G(){let e=Iu(),t=Iu(),n=Iu();return this.L.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:ec()}})),new xu(this.B,this.U,e,t,n)}H(){this.q=!1,this.L=Mu()}J(e,t){this.q=!0,this.L=this.L.insert(e,t)}Y(e){this.q=!0,this.L=this.L.remove(e)}X(){this.M+=1}Z(){this.M-=1}tt(){this.q=!0,this.U=!0}}class Ou{constructor(e){this.et=e,this.nt=new Map,this.st=bu(),this.it=Pu(),this.rt=new yu(gc)}ot(e){for(const t of e.$)e.F&&e.F.isFoundDocument()?this.at(t,e.F):this.ct(t,e.key,e.F);for(const t of e.removedTargetIds)this.ct(t,e.key,e.F)}ut(e){this.forEachTarget(e,(t=>{const n=this.ht(t);switch(e.state){case 0:this.lt(t)&&n.W(e.resumeToken);break;case 1:n.Z(),n.K||n.H(),n.W(e.resumeToken);break;case 2:n.Z(),n.K||this.removeTarget(t);break;case 3:this.lt(t)&&(n.tt(),n.W(e.resumeToken));break;case 4:this.lt(t)&&(this.ft(t),n.W(e.resumeToken));break;default:ec()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.nt.forEach(((e,n)=>{this.lt(n)&&t(n)}))}dt(e){const t=e.targetId,n=e.O.count,r=this.wt(t);if(r){const e=r.target;if(sl(e))if(0===n){const n=new Fc(e.path);this.ct(t,n,el.newNoDocument(n,wc.min()))}else tc(1===n);else this._t(t)!==n&&(this.ft(t),this.rt=this.rt.add(t))}}gt(e){const t=new Map;this.nt.forEach(((n,r)=>{const i=this.wt(r);if(i){if(n.current&&sl(i.target)){const t=new Fc(i.target.path);null!==this.st.get(t)||this.yt(r,t)||this.ct(r,t,el.newNoDocument(t,e))}n.j&&(t.set(r,n.G()),n.H())}}));let n=Iu();this.it.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.wt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))}));const r=new Cu(e,t,this.rt,this.st,n);return this.st=bu(),this.it=Pu(),this.rt=new yu(gc),r}at(e,t){if(!this.lt(e))return;const n=this.yt(e,t.key)?2:0;this.ht(e).J(t.key,n),this.st=this.st.insert(t.key,t),this.it=this.it.insert(t.key,this.Tt(t.key).add(e))}ct(e,t,n){if(!this.lt(e))return;const r=this.ht(e);this.yt(e,t)?r.J(t,1):r.Y(t),this.it=this.it.insert(t,this.Tt(t).delete(e)),n&&(this.st=this.st.insert(t,n))}removeTarget(e){this.nt.delete(e)}_t(e){const t=this.ht(e).G();return this.et.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}X(e){this.ht(e).X()}ht(e){let t=this.nt.get(e);return t||(t=new Du,this.nt.set(e,t)),t}Tt(e){let t=this.it.get(e);return t||(t=new yu(gc),this.it=this.it.insert(e,t)),t}lt(e){const t=null!==this.wt(e);return t||Xa("WatchChangeAggregator","Detected inactive target",e),t}wt(e){const t=this.nt.get(e);return t&&t.K?null:this.et.Et(e)}ft(e){this.nt.set(e,new Du),this.et.getRemoteKeysForTarget(e).forEach((t=>{this.ct(e,t,null)}))}yt(e,t){return this.et.getRemoteKeysForTarget(e).has(t)}}function Pu(){return new pu(Fc.comparator)}function Mu(){return new pu(Fc.comparator)}
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
     */const Lu={asc:"ASCENDING",desc:"DESCENDING"},Fu={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class Uu{constructor(e,t){this.databaseId=e,this.C=t}}function Bu(e,t){return e.C?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ju(e,t){return e.C?t.toBase64():t.toUint8Array()}function Vu(e,t){return Bu(e,t.toTimestamp())}function zu(e){return tc(!!e),wc.fromTimestamp(function(e){const t=$c(e);return new vc(t.seconds,t.nanos)}(e))}function qu(e,t){return function(e){return new Ec(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Ku(e){const t=Ec.fromString(e);return tc(hh(t)),t}function Hu(e,t){return qu(e.databaseId,t.path)}function Wu(e,t){const n=Ku(t);if(n.get(1)!==e.databaseId.projectId)throw new ic(rc.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new ic(rc.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Fc(Xu(n))}function Gu(e,t){return qu(e.databaseId,t)}function Ju(e){return new Ec(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Xu(e){return tc(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Yu(e,t,n){return{name:Hu(e,t),fields:n.value.mapValue.fields}}function Qu(e,t){return{documents:[Gu(e,t.path)]}}function Zu(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Gu(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Gu(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(Jc(e.value))return{unaryFilter:{field:oh(e.field),op:"IS_NAN"}};if(Gc(e.value))return{unaryFilter:{field:oh(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Jc(e.value))return{unaryFilter:{field:oh(e.field),op:"IS_NOT_NAN"}};if(Gc(e.value))return{unaryFilter:{field:oh(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:oh(e.field),op:sh(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:oh(e.field),direction:ih(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.C||Mc(t)?t:{value:t}}(e,t.limit);return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=nh(t.startAt)),t.endAt&&(n.structuredQuery.endAt=nh(t.endAt)),n}function eh(e){let t=function(e){const t=Ku(e);return 4===t.length?Ec.emptyPath():Xu(t)}(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){tc(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=th(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new yl(ah(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Mc(t)?null:t}(n.limit));let c=null;n.startAt&&(c=rh(n.startAt));let l=null;return n.endAt&&(l=rh(n.endAt)),function(e,t,n,r,i,s,o,a){return new kl(e,t,n,r,i,s,o,a)}(t,i,o,s,a,"F",c,l)}function th(e){return e?void 0!==e.unaryFilter?[lh(e)]:void 0!==e.fieldFilter?[ch(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>th(e))).reduce(((e,t)=>e.concat(t))):ec():[]}function nh(e){return{before:e.before,values:e.position}}function rh(e){const t=!!e.before,n=e.values||[];return new ml(n,t)}function ih(e){return Lu[e]}function sh(e){return Fu[e]}function oh(e){return{fieldPath:e.canonicalString()}}function ah(e){return Sc.fromServerFormat(e.fieldPath)}function ch(e){return ol.create(ah(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ec()}}(e.fieldFilter.op),e.fieldFilter.value)}function lh(e){switch(e.unaryFilter.op){case"IS_NAN":const t=ah(e.unaryFilter.field);return ol.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=ah(e.unaryFilter.field);return ol.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ah(e.unaryFilter.field);return ol.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ah(e.unaryFilter.field);return ol.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ec()}}function uh(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function hh(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
class dh{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ec(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new dh(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof dh?t:dh.resolve(t)}catch(e){return dh.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):dh.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):dh.reject(t)}static resolve(e){return new dh(((t,n)=>{t(e)}))}static reject(e){return new dh(((t,n)=>{n(e)}))}static waitFor(e){return new dh(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=dh.resolve(!1);for(const n of e)t=t.next((e=>e?dh.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}}function fh(e){return"IndexedDbTransactionError"===e.name}
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
     */class ph{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(e.key)&&Ql(r,e,n[t])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&Zl(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&Zl(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach((t=>{const n=e.get(t.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(wc.min())}))}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Iu())}isEqual(e){return this.batchId===e.batchId&&yc(this.mutations,e.mutations,((e,t)=>tu(e,t)))&&yc(this.baseMutations,e.baseMutations,((e,t)=>tu(e,t)))}}class mh{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){tc(e.mutations.length===n.length);let r=Tu;const i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new mh(e,t,n,r)}}
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
     */class gh{constructor(e,t,n,r,i=wc.min(),s=wc.min(),o=Cc.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new gh(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new gh(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new gh(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
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
     */class yh{constructor(e){this.Gt=e}}function vh(e){const t=eh({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?function(e,t,n){return new kl(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}(t,t.limit,"L"):t}
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
     */class wh{constructor(){this.zt=new bh}addToCollectionParentIndex(e,t){return this.zt.add(t),dh.resolve()}getCollectionParents(e,t){return dh.resolve(this.zt.getEntries(t))}}class bh{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new yu(Ec.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new yu(Ec.comparator)).toArray()}}
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
     */class kh{constructor(e){this.se=e}next(){return this.se+=2,this.se}static ie(){return new kh(0)}static re(){return new kh(-1)}}
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
     */async function _h(e){if(e.code!==rc.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;Xa("LocalStore","Unexpectedly lost primary lease")}
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
     */class Th{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t])}else this.inner[n]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),!0;return!1}forEach(e){kc(this.inner,((t,n)=>{for(const[t,r]of n)e(t,r)}))}isEmpty(){return _c(this.inner)}}
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
class Eh{constructor(e,t,n){this.Je=e,this.An=t,this.Jt=n}Rn(e,t){return this.An.getAllMutationBatchesAffectingDocumentKey(e,t).next((n=>this.Pn(e,t,n)))}Pn(e,t,n){return this.Je.getEntry(e,t).next((e=>{for(const t of n)t.applyToLocalView(e);return e}))}bn(e,t){e.forEach(((e,n)=>{for(const e of t)e.applyToLocalView(n)}))}vn(e,t){return this.Je.getEntries(e,t).next((t=>this.Vn(e,t).next((()=>t))))}Vn(e,t){return this.An.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>this.bn(t,e)))}getDocumentsMatchingQuery(e,t,n){return function(e){return Fc.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.Sn(e,t.path):function(e){return null!==e.collectionGroup}(t)?this.Dn(e,t,n):this.Cn(e,t,n)}Sn(e,t){return this.Rn(e,new Fc(t)).next((e=>{let t=_u();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}Dn(e,t,n){const r=t.collectionGroup;let i=_u();return this.Jt.getCollectionParents(e,r).next((s=>dh.forEach(s,(s=>{const o=function(e,t){return new kl(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.Cn(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}Cn(e,t,n){let r,i;return this.Je.getDocumentsMatchingQuery(e,t,n).next((n=>(r=n,this.An.getAllMutationBatchesAffectingQuery(e,t)))).next((t=>(i=t,this.Nn(e,i,r).next((e=>{r=e;for(const e of i)for(const t of e.mutations){const n=t.key;let i=r.get(n);null==i&&(i=el.newInvalidDocument(n),r=r.insert(n,i)),Zl(t,i,e.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))))).next((()=>(r.forEach(((e,n)=>{$l(t,n)||(r=r.remove(e))})),r)))}Nn(e,t,n){let r=Iu();for(const e of t)for(const t of e.mutations)t instanceof iu&&null===n.get(t.key)&&(r=r.add(t.key));let i=n;return this.Je.getEntries(e,r).next((e=>(e.forEach(((e,t)=>{t.isFoundDocument()&&(i=i.insert(e,t))})),i)))}}
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
     */class Ih{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.kn=n,this.xn=r}static $n(e,t){let n=Iu(),r=Iu();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new Ih(e,t.fromCache,n,r)}}
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
     */class Sh{Fn(e){this.On=e}getDocumentsMatchingQuery(e,t,n,r){return function(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}(t)||n.isEqual(wc.min())?this.Mn(e,t):this.On.vn(e,r).next((i=>{const s=this.Ln(t,i);return(Tl(t)||El(t))&&this.Bn(t.limitType,s,r,n)?this.Mn(e,t):(Ja()<=Ht.DEBUG&&Xa("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),xl(t)),this.On.getDocumentsMatchingQuery(e,t,n).next((e=>(s.forEach((t=>{e=e.insert(t.key,t)})),e))))}))}Ln(e,t){let n=new yu(Rl(e));return t.forEach(((t,r)=>{$l(e,r)&&(n=n.add(r))})),n}Bn(e,t,n,r){if(n.size!==t.size)return!0;const i="F"===e?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mn(e,t){return Ja()<=Ht.DEBUG&&Xa("QueryEngine","Using full collection scan to execute query:",xl(t)),this.On.getDocumentsMatchingQuery(e,t,wc.min())}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ah{constructor(e,t,n,r){this.persistence=e,this.Un=t,this.k=r,this.qn=new pu(gc),this.Kn=new Th((e=>rl(e)),il),this.jn=wc.min(),this.An=e.getMutationQueue(n),this.Qn=e.getRemoteDocumentCache(),this.He=e.getTargetCache(),this.Wn=new Eh(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=e.getBundleCache(),this.Un.Fn(this.Wn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.qn)))}}async function Ch(e,t){const n=nc(e);let r=n.An,i=n.Wn;const s=await n.persistence.runTransaction("Handle user change","readonly",(e=>{let s;return n.An.getAllMutationBatches(e).next((o=>(s=o,r=n.persistence.getMutationQueue(t),i=new Eh(n.Qn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(e)))).next((t=>{const n=[],r=[];let o=Iu();for(const e of s){n.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return i.vn(e,o).next((e=>({Gn:e,removedBatchIds:n,addedBatchIds:r})))}))}));return n.An=r,n.Wn=i,n.Un.Fn(n.Wn),s}function xh(e){const t=nc(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.He.getLastRemoteSnapshotVersion(e)))}function $h(e,t){const n=nc(e),r=t.snapshotVersion;let i=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Qn.newChangeBuffer({trackRemovals:!0});i=n.qn;const o=[];t.targetChanges.forEach(((t,s)=>{const a=i.get(s);if(!a)return;o.push(n.He.removeMatchingKeys(e,t.removedDocuments,s).next((()=>n.He.addMatchingKeys(e,t.addedDocuments,s))));const c=t.resumeToken;if(c.approximateByteSize()>0){const l=a.withResumeToken(c,r).withSequenceNumber(e.currentSequenceNumber);i=i.insert(s,l),function(e,t,n){return tc(t.resumeToken.approximateByteSize()>0),0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,l,t)&&o.push(n.He.updateTargetData(e,l))}}));let a=bu();if(t.documentUpdates.forEach(((r,i)=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(function(e,t,n,r,i){let s=Iu();return n.forEach((e=>s=s.add(e))),t.getEntries(e,s).next((e=>{let s=bu();return n.forEach(((n,o)=>{const a=e.get(n),c=(null==i?void 0:i.get(n))||r;o.isNoDocument()&&o.version.isEqual(wc.min())?(t.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(o,c),s=s.insert(n,o)):Xa("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)})),s}))}(e,s,t.documentUpdates,r,void 0).next((e=>{a=e}))),!r.isEqual(wc.min())){const t=n.He.getLastRemoteSnapshotVersion(e).next((t=>n.He.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return dh.waitFor(o).next((()=>s.apply(e))).next((()=>n.Wn.Vn(e,a))).next((()=>a))})).then((e=>(n.qn=i,e)))}function Rh(e,t){const n=nc(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.An.getNextMutationBatchAfterBatchId(e,t))))}async function Nh(e,t,n){const r=nc(e),i=r.qn.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!fh(e))throw e;Xa("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.qn=r.qn.remove(t),r.Kn.delete(i.target)}function Dh(e,t,n){const r=nc(e);let i=wc.min(),s=Iu();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=nc(e),i=r.Kn.get(n);return void 0!==i?dh.resolve(r.qn.get(i)):r.He.getTargetData(t,n)}(r,e,Sl(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.He.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Un.getDocumentsMatchingQuery(e,t,n?i:wc.min(),n?s:Iu()))).next((e=>({documents:e,zn:s})))))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Oh{constructor(e){this.k=e,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(e,t){return dh.resolve(this.Xn.get(t))}saveBundleMetadata(e,t){var n;return this.Xn.set(t.id,{id:(n=t).id,version:n.version,createTime:zu(n.createTime)}),dh.resolve()}getNamedQuery(e,t){return dh.resolve(this.Zn.get(t))}saveNamedQuery(e,t){return this.Zn.set(t.name,function(e){return{name:e.name,query:vh(e.bundledQuery),readTime:zu(e.readTime)}}(t)),dh.resolve()}}
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
     */class Ph{constructor(){this.ts=new yu(Mh.es),this.ns=new yu(Mh.ss)}isEmpty(){return this.ts.isEmpty()}addReference(e,t){const n=new Mh(e,t);this.ts=this.ts.add(n),this.ns=this.ns.add(n)}rs(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.os(new Mh(e,t))}cs(e,t){e.forEach((e=>this.removeReference(e,t)))}us(e){const t=new Fc(new Ec([])),n=new Mh(t,e),r=new Mh(t,e+1),i=[];return this.ns.forEachInRange([n,r],(e=>{this.os(e),i.push(e.key)})),i}hs(){this.ts.forEach((e=>this.os(e)))}os(e){this.ts=this.ts.delete(e),this.ns=this.ns.delete(e)}ls(e){const t=new Fc(new Ec([])),n=new Mh(t,e),r=new Mh(t,e+1);let i=Iu();return this.ns.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new Mh(e,0),n=this.ts.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Mh{constructor(e,t){this.key=e,this.fs=t}static es(e,t){return Fc.comparator(e.key,t.key)||gc(e.fs,t.fs)}static ss(e,t){return gc(e.fs,t.fs)||Fc.comparator(e.key,t.key)}}
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
     */class Lh{constructor(e,t){this.Jt=e,this.referenceDelegate=t,this.An=[],this.ds=1,this.ws=new yu(Mh.es)}checkEmpty(e){return dh.resolve(0===this.An.length)}addMutationBatch(e,t,n,r){const i=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const s=new ph(i,t,n,r);this.An.push(s);for(const t of r)this.ws=this.ws.add(new Mh(t.key,i)),this.Jt.addToCollectionParentIndex(e,t.key.path.popLast());return dh.resolve(s)}lookupMutationBatch(e,t){return dh.resolve(this._s(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.gs(n),i=r<0?0:r;return dh.resolve(this.An.length>i?this.An[i]:null)}getHighestUnacknowledgedBatchId(){return dh.resolve(0===this.An.length?-1:this.ds-1)}getAllMutationBatches(e){return dh.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Mh(t,0),r=new Mh(t,Number.POSITIVE_INFINITY),i=[];return this.ws.forEachInRange([n,r],(e=>{const t=this._s(e.fs);i.push(t)})),dh.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new yu(gc);return t.forEach((e=>{const t=new Mh(e,0),r=new Mh(e,Number.POSITIVE_INFINITY);this.ws.forEachInRange([t,r],(e=>{n=n.add(e.fs)}))})),dh.resolve(this.ys(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Fc.isDocumentKey(i)||(i=i.child(""));const s=new Mh(new Fc(i),0);let o=new yu(gc);return this.ws.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.fs)),!0)}),s),dh.resolve(this.ys(o))}ys(e){const t=[];return e.forEach((e=>{const n=this._s(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){tc(0===this.ps(t.batchId,"removed")),this.An.shift();let n=this.ws;return dh.forEach(t.mutations,(r=>{const i=new Mh(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.ws=n}))}ee(e){}containsKey(e,t){const n=new Mh(t,0),r=this.ws.firstAfterOrEqual(n);return dh.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.An.length,dh.resolve()}ps(e,t){return this.gs(e)}gs(e){return 0===this.An.length?0:e-this.An[0].batchId}_s(e){const t=this.gs(e);return t<0||t>=this.An.length?null:this.An[t]}}
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
     */class Fh{constructor(e,t){this.Jt=e,this.Ts=t,this.docs=new pu(Fc.comparator),this.size=0}addEntry(e,t,n){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ts(t);return this.docs=this.docs.insert(r,{document:t.clone(),size:o,readTime:n}),this.size+=o-s,this.Jt.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return dh.resolve(n?n.document.clone():el.newInvalidDocument(t))}getEntries(e,t){let n=bu();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.clone():el.newInvalidDocument(e))})),dh.resolve(n)}getDocumentsMatchingQuery(e,t,n){let r=bu();const i=new Fc(t.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i,readTime:o}}=s.getNext();if(!t.path.isPrefixOf(e.path))break;o.compareTo(n)<=0||$l(t,i)&&(r=r.insert(i.key,i.clone()))}return dh.resolve(r)}Es(e,t){return dh.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Uh(this)}getSize(e){return dh.resolve(this.size)}}class Uh extends class{constructor(){this.changes=new Th((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}getReadTime(e){const t=this.changes.get(e);return t?t.readTime:wc.min()}addEntry(e,t){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:t})}removeEntry(e,t=null){this.assertNotApplied(),this.changes.set(e,{document:el.newInvalidDocument(e),readTime:t})}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?dh.resolve(n.document):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}{constructor(e){super(),this.De=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.document.isValidDocument()?t.push(this.De.addEntry(e,r.document,this.getReadTime(n))):this.De.removeEntry(n)})),dh.waitFor(t)}getFromCache(e,t){return this.De.getEntry(e,t)}getAllFromCache(e,t){return this.De.getEntries(e,t)}}
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
     */class Bh{constructor(e){this.persistence=e,this.Is=new Th((e=>rl(e)),il),this.lastRemoteSnapshotVersion=wc.min(),this.highestTargetId=0,this.As=0,this.Rs=new Ph,this.targetCount=0,this.Ps=kh.ie()}forEachTarget(e,t){return this.Is.forEach(((e,n)=>t(n))),dh.resolve()}getLastRemoteSnapshotVersion(e){return dh.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return dh.resolve(this.As)}allocateTargetId(e){return this.highestTargetId=this.Ps.next(),dh.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.As&&(this.As=t),dh.resolve()}ce(e){this.Is.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ps=new kh(t),this.highestTargetId=t),e.sequenceNumber>this.As&&(this.As=e.sequenceNumber)}addTargetData(e,t){return this.ce(t),this.targetCount+=1,dh.resolve()}updateTargetData(e,t){return this.ce(t),dh.resolve()}removeTargetData(e,t){return this.Is.delete(t.target),this.Rs.us(t.targetId),this.targetCount-=1,dh.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Is.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Is.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),dh.waitFor(i).next((()=>r))}getTargetCount(e){return dh.resolve(this.targetCount)}getTargetData(e,t){const n=this.Is.get(t)||null;return dh.resolve(n)}addMatchingKeys(e,t,n){return this.Rs.rs(t,n),dh.resolve()}removeMatchingKeys(e,t,n){this.Rs.cs(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),dh.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Rs.us(t),dh.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Rs.ls(t);return dh.resolve(n)}containsKey(e,t){return dh.resolve(this.Rs.containsKey(t))}}
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
     */class jh{constructor(e,t){this.bs={},this.Be=new fc(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=e(this),this.He=new Bh(this),this.Jt=new wh,this.Je=function(e,t){return new Fh(e,t)}(this.Jt,(e=>this.referenceDelegate.vs(e))),this.k=new yh(t),this.Ye=new Oh(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(e){let t=this.bs[e.toKey()];return t||(t=new Lh(this.Jt,this.referenceDelegate),this.bs[e.toKey()]=t),t}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(e,t,n){Xa("MemoryPersistence","Starting transaction:",e);const r=new Vh(this.Be.next());return this.referenceDelegate.Vs(),n(r).next((e=>this.referenceDelegate.Ss(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ds(e,t){return dh.or(Object.values(this.bs).map((n=>()=>n.containsKey(e,t))))}}class Vh extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}{constructor(e){super(),this.currentSequenceNumber=e}}class zh{constructor(e){this.persistence=e,this.Cs=new Ph,this.Ns=null}static ks(e){return new zh(e)}get xs(){if(this.Ns)return this.Ns;throw ec()}addReference(e,t,n){return this.Cs.addReference(n,t),this.xs.delete(n.toString()),dh.resolve()}removeReference(e,t,n){return this.Cs.removeReference(n,t),this.xs.add(n.toString()),dh.resolve()}markPotentiallyOrphaned(e,t){return this.xs.add(t.toString()),dh.resolve()}removeTarget(e,t){this.Cs.us(t.targetId).forEach((e=>this.xs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.xs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Vs(){this.Ns=new Set}Ss(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return dh.forEach(this.xs,(n=>{const r=Fc.fromPath(n);return this.$s(e,r).next((e=>{e||t.removeEntry(r)}))})).next((()=>(this.Ns=null,t.apply(e))))}updateLimboDocument(e,t){return this.$s(e,t).next((e=>{e?this.xs.delete(t.toString()):this.xs.add(t.toString())}))}vs(e){return 0}$s(e,t){return dh.or([()=>dh.resolve(this.Cs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ds(e,t)])}}class qh{constructor(){this.activeTargetIds=Au()}Ms(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ls(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Kh{constructor(){this.pi=new qh,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.pi.Ms(e),this.Ti[e]||"not-current"}updateQueryState(e,t,n){this.Ti[e]=t}removeLocalQueryTarget(e){this.pi.Ls(e)}isLocalQueryTarget(e){return this.pi.activeTargetIds.has(e)}clearQueryState(e){delete this.Ti[e]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(e){return this.pi.activeTargetIds.has(e)}start(){return this.pi=new qh,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}
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
     */class Hh{Ei(e){}shutdown(){}}
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
     */class Wh{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.Pi(),this.bi=[],this.vi()}Ei(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){Xa("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Pi(){Xa("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Gh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
     */class Jh{constructor(e){this.Vi=e.Vi,this.Si=e.Si}Di(e){this.Ci=e}Ni(e){this.ki=e}onMessage(e){this.xi=e}close(){this.Si()}send(e){this.Vi(e)}$i(){this.Ci()}Fi(e){this.ki(e)}Oi(e){this.xi(e)}}
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
     */class Xh extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.Mi=t+"://"+e.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(e,t,n,r,i){const s=this.Ui(e,t);Xa("RestConnection","Sending: ",s,n);const o={};return this.qi(o,r,i),this.Ki(e,s,o,n).then((e=>(Xa("RestConnection","Received: ",e),e)),(t=>{throw Qa("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}ji(e,t,n,r,i){return this.Bi(e,t,n,r,i)}qi(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Wa,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}Ui(e,t){const n=Gh[e];return`${this.Mi}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Ki(e,t,n,r){return new Promise(((i,s)=>{const o=new qa;o.listenOnce(Fa.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case La.NO_ERROR:const t=o.getResponseJson();Xa("Connection","XHR received:",JSON.stringify(t)),i(t);break;case La.TIMEOUT:Xa("Connection",'RPC "'+e+'" timed out'),s(new ic(rc.DEADLINE_EXCEEDED,"Request time out"));break;case La.HTTP_ERROR:const n=o.getStatus();if(Xa("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(rc).indexOf(t)>=0?t:rc.UNKNOWN}(e.status);s(new ic(t,e.message))}else s(new ic(rc.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new ic(rc.UNAVAILABLE,"Connection failed."));break;default:ec()}}finally{Xa("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}Qi(e,t,n){const r=[this.Mi,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=new Na,s=Es(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Va({})),this.qi(o.initMessageHeaders,t,n),It()||At()||Et().indexOf("Electron/")>=0||Ct()||Et().indexOf("MSAppHost/")>=0||St()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");Xa("Connection","Creating WebChannel: "+a,o);const c=i.createWebChannel(a,o);let l=!1,u=!1;const h=new Jh({Vi:e=>{u?Xa("Connection","Not sending because WebChannel is closed:",e):(l||(Xa("Connection","Opening WebChannel transport."),c.open(),l=!0),Xa("Connection","WebChannel sending:",e),c.send(e))},Si:()=>c.close()}),d=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return d(c,za.EventType.OPEN,(()=>{u||Xa("Connection","WebChannel transport opened.")})),d(c,za.EventType.CLOSE,(()=>{u||(u=!0,Xa("Connection","WebChannel transport closed"),h.Fi())})),d(c,za.EventType.ERROR,(e=>{u||(u=!0,Qa("Connection","WebChannel transport errored:",e),h.Fi(new ic(rc.UNAVAILABLE,"The operation could not be completed")))})),d(c,za.EventType.MESSAGE,(e=>{var t;if(!u){const n=e.data[0];tc(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){Xa("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=hu[e];if(void 0!==t)return fu(t)}(e),n=i.message;void 0===t&&(t=rc.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),u=!0,h.Fi(new ic(t,n)),c.close()}else Xa("Connection","WebChannel received:",n),h.Oi(n)}})),d(s,Ua.STAT_EVENT,(e=>{e.stat===Ba?Xa("Connection","Detected buffering proxy"):e.stat===ja&&Xa("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.$i()}),0),h}}function Yh(){return"undefined"!=typeof document?document:null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Qh(e){return new Uu(e,!0)}class Zh{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Oe=e,this.timerId=t,this.Wi=n,this.Gi=r,this.zi=i,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(e){this.cancel();const t=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),r=Math.max(0,t-n);r>0&&Xa("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Hi} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Ji=this.Oe.enqueueAfterDelay(this.timerId,r,(()=>(this.Yi=Date.now(),e()))),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
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
     */class ed{constructor(e,t,n,r,i,s,o,a){this.Oe=e,this.nr=n,this.sr=r,this.ir=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.rr=0,this.ar=null,this.cr=null,this.stream=null,this.ur=new Zh(e,t)}hr(){return 1===this.state||5===this.state||this.lr()}lr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&null===this.ar&&(this.ar=this.Oe.enqueueAfterDelay(this.nr,6e4,(()=>this.mr())))}gr(e){this.yr(),this.stream.send(e)}async mr(){if(this.lr())return this.close(0)}yr(){this.ar&&(this.ar.cancel(),this.ar=null)}pr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,t){this.yr(),this.pr(),this.ur.cancel(),this.rr++,4!==e?this.ur.reset():t&&t.code===rc.RESOURCE_EXHAUSTED?(Ya(t.toString()),Ya("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):t&&t.code===rc.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Tr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ni(t)}Tr(){}auth(){this.state=1;const e=this.Er(this.rr),t=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.rr===t&&this.Ir(e,n)}),(t=>{e((()=>{const e=new ic(rc.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Ar(e)}))}))}Ir(e,t){const n=this.Er(this.rr);this.stream=this.Rr(e,t),this.stream.Di((()=>{n((()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.sr,1e4,(()=>(this.lr()&&(this.state=3),Promise.resolve()))),this.listener.Di())))})),this.stream.Ni((e=>{n((()=>this.Ar(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}dr(){this.state=5,this.ur.Zi((async()=>{this.state=0,this.start()}))}Ar(e){return Xa("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Er(e){return t=>{this.Oe.enqueueAndForget((()=>this.rr===e?t():(Xa("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class td extends ed{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.k=i}Rr(e,t){return this.ir.Qi("Listen",e,t)}onMessage(e){this.ur.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:ec()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.C?(tc(void 0===t||"string"==typeof t),Cc.fromBase64String(t||"")):(tc(void 0===t||t instanceof Uint8Array),Cc.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?rc.UNKNOWN:fu(e.code);return new ic(t,e.message||"")}(o);n=new Nu(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Wu(e,r.document.name),s=zu(r.document.updateTime),o=new Qc({mapValue:{fields:r.document.fields}}),a=el.newFoundDocument(i,s,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new $u(c,l,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Wu(e,r.document),s=r.readTime?zu(r.readTime):wc.min(),o=el.newNoDocument(i,s),a=r.removedTargetIds||[];n=new $u([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Wu(e,r.document),s=r.removedTargetIds||[];n=new $u([],s,i,null)}else{if(!("filter"in t))return ec();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new uu(r),s=e.targetId;n=new Ru(s,i)}}return n}(this.k,e),n=function(e){if(!("targetChange"in e))return wc.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?wc.min():t.readTime?zu(t.readTime):wc.min()}(e);return this.listener.Pr(t,n)}br(e){const t={};t.database=Ju(this.k),t.addTarget=function(e,t){let n;const r=t.target;return n=sl(r)?{documents:Qu(e,r)}:{query:Zu(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=ju(e,t.resumeToken):t.snapshotVersion.compareTo(wc.min())>0&&(n.readTime=Bu(e,t.snapshotVersion.toTimestamp())),n}(this.k,e);const n=function(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ec()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.k,e);n&&(t.labels=n),this.gr(t)}vr(e){const t={};t.database=Ju(this.k),t.removeTarget=e,this.gr(t)}}class nd extends ed{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.k=i,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(e,t){return this.ir.Qi("Write",e,t)}onMessage(e){if(tc(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Vr){this.ur.reset();const t=function(e,t){return e&&e.length>0?(tc(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?zu(e.updateTime):zu(t);return n.isEqual(wc.min())&&(n=zu(t)),new Gl(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=zu(e.commitTime);return this.listener.Cr(n,t)}return tc(!e.writeResults||0===e.writeResults.length),this.Vr=!0,this.listener.Nr()}kr(){const e={};e.database=Ju(this.k),this.gr(e)}Dr(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>function(e,t){let n;if(t instanceof ru)n={update:Yu(e,t.key,t.value)};else if(t instanceof cu)n={delete:Hu(e,t.key)};else if(t instanceof iu)n={update:Yu(e,t.key,t.data),updateMask:uh(t.fieldMask)};else{if(!(t instanceof lu))return ec();n={verify:Hu(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Bl)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof jl)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof zl)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Kl)return{fieldPath:t.field.canonicalString(),increment:n.N};throw ec()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Vu(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:ec()}(e,t.precondition)),n}(this.k,e)))};this.gr(t)}}
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
     */class rd extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.ir=n,this.k=r,this.$r=!1}Fr(){if(this.$r)throw new ic(rc.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(e,t,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.ir.Bi(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===rc.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ic(rc.UNKNOWN,e.toString())}))}ji(e,t,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.ir.ji(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===rc.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ic(rc.UNKNOWN,e.toString())}))}terminate(){this.$r=!0}}class id{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Or=0,this.Mr=null,this.Lr=!0}Br(){0===this.Or&&(this.Ur("Unknown"),this.Mr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Mr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve()))))}Kr(e){"Online"===this.state?this.Ur("Unknown"):(this.Or++,this.Or>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Ur("Offline")))}set(e){this.jr(),this.Or=0,"Online"===e&&(this.Lr=!1),this.Ur(e)}Ur(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}qr(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(Ya(t),this.Lr=!1):Xa("OnlineStateTracker",t)}jr(){null!==this.Mr&&(this.Mr.cancel(),this.Mr=null)}}
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
     */class sd{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=i,this.Hr.Ei((e=>{n.enqueueAndForget((async()=>{pd(this)&&(Xa("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=nc(e);t.Gr.add(4),await ad(t),t.Jr.set("Unknown"),t.Gr.delete(4),await od(t)}(this))}))})),this.Jr=new id(n,r)}}async function od(e){if(pd(e))for(const t of e.zr)await t(!0)}async function ad(e){for(const t of e.zr)await t(!1)}function cd(e,t){const n=nc(e);n.Wr.has(t.targetId)||(n.Wr.set(t.targetId,t),fd(n)?dd(n):$d(n).lr()&&ud(n,t))}function ld(e,t){const n=nc(e),r=$d(n);n.Wr.delete(t),r.lr()&&hd(n,t),0===n.Wr.size&&(r.lr()?r._r():pd(n)&&n.Jr.set("Unknown"))}function ud(e,t){e.Yr.X(t.targetId),$d(e).br(t)}function hd(e,t){e.Yr.X(t),$d(e).vr(t)}function dd(e){e.Yr=new Ou({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.Wr.get(t)||null}),$d(e).start(),e.Jr.Br()}function fd(e){return pd(e)&&!$d(e).hr()&&e.Wr.size>0}function pd(e){return 0===nc(e).Gr.size}function md(e){e.Yr=void 0}async function gd(e){e.Wr.forEach(((t,n)=>{ud(e,t)}))}async function yd(e,t){md(e),fd(e)?(e.Jr.Kr(t),dd(e)):e.Jr.set("Unknown")}async function vd(e,t,n){if(e.Jr.set("Online"),t instanceof Nu&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Wr.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Wr.delete(r),e.Yr.removeTarget(r))}(e,t)}catch(n){Xa("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await wd(e,n)}else if(t instanceof $u?e.Yr.ot(t):t instanceof Ru?e.Yr.dt(t):e.Yr.ut(t),!n.isEqual(wc.min()))try{const t=await xh(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Yr.gt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Wr.get(r);i&&e.Wr.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.Wr.get(t);if(!n)return;e.Wr.set(t,n.withResumeToken(Cc.EMPTY_BYTE_STRING,n.snapshotVersion)),hd(e,t);const r=new gh(n.target,t,1,n.sequenceNumber);ud(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Xa("RemoteStore","Failed to raise snapshot:",t),await wd(e,t)}}async function wd(e,t,n){if(!fh(t))throw t;e.Gr.add(1),await ad(e),e.Jr.set("Offline"),n||(n=()=>xh(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Xa("RemoteStore","Retrying IndexedDB access"),await n(),e.Gr.delete(1),await od(e)}))}function bd(e,t){return t().catch((n=>wd(e,n,t)))}async function kd(e){const t=nc(e),n=Rd(t);let r=t.Qr.length>0?t.Qr[t.Qr.length-1].batchId:-1;for(;_d(t);)try{const e=await Rh(t.localStore,r);if(null===e){0===t.Qr.length&&n._r();break}r=e.batchId,Td(t,e)}catch(e){await wd(t,e)}Ed(t)&&Id(t)}function _d(e){return pd(e)&&e.Qr.length<10}function Td(e,t){e.Qr.push(t);const n=Rd(e);n.lr()&&n.Sr&&n.Dr(t.mutations)}function Ed(e){return pd(e)&&!Rd(e).hr()&&e.Qr.length>0}function Id(e){Rd(e).start()}async function Sd(e){Rd(e).kr()}async function Ad(e){const t=Rd(e);for(const n of e.Qr)t.Dr(n.mutations)}async function Cd(e,t,n){const r=e.Qr.shift(),i=mh.from(r,t,n);await bd(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await kd(e)}async function xd(e,t){t&&Rd(e).Sr&&await async function(e,t){if(function(e){switch(e){default:return ec();case rc.CANCELLED:case rc.UNKNOWN:case rc.DEADLINE_EXCEEDED:case rc.RESOURCE_EXHAUSTED:case rc.INTERNAL:case rc.UNAVAILABLE:case rc.UNAUTHENTICATED:return!1;case rc.INVALID_ARGUMENT:case rc.NOT_FOUND:case rc.ALREADY_EXISTS:case rc.PERMISSION_DENIED:case rc.FAILED_PRECONDITION:case rc.ABORTED:case rc.OUT_OF_RANGE:case rc.UNIMPLEMENTED:case rc.DATA_LOSS:return!0}}(n=t.code)&&n!==rc.ABORTED){const n=e.Qr.shift();Rd(e).wr(),await bd(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await kd(e)}var n}(e,t),Ed(e)&&Id(e)}function $d(e){return e.Xr||(e.Xr=function(e,t,n){const r=nc(e);return r.Fr(),new td(t,r.ir,r.authCredentials,r.appCheckCredentials,r.k,n)
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
     */}(e.datastore,e.asyncQueue,{Di:gd.bind(null,e),Ni:yd.bind(null,e),Pr:vd.bind(null,e)}),e.zr.push((async t=>{t?(e.Xr.wr(),fd(e)?dd(e):e.Jr.set("Unknown")):(await e.Xr.stop(),md(e))}))),e.Xr}function Rd(e){return e.Zr||(e.Zr=function(e,t,n){const r=nc(e);return r.Fr(),new nd(t,r.ir,r.authCredentials,r.appCheckCredentials,r.k,n)}(e.datastore,e.asyncQueue,{Di:Sd.bind(null,e),Ni:xd.bind(null,e),Nr:Ad.bind(null,e),Cr:Cd.bind(null,e)}),e.zr.push((async t=>{t?(e.Zr.wr(),await kd(e)):(await e.Zr.stop(),e.Qr.length>0&&(Xa("RemoteStore",`Stopping write stream with ${e.Qr.length} pending writes`),e.Qr=[]))}))),e.Zr
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
     */}class Nd{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new sc,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Nd(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ic(rc.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Dd(e,t){if(Ya("AsyncQueue",`${t}: ${e}`),fh(e))return new ic(rc.UNAVAILABLE,`${t}: ${e}`);throw e}
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
     */class Od{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Fc.comparator(t.key,n.key):(e,t)=>Fc.comparator(e.key,t.key),this.keyedMap=_u(),this.sortedSet=new pu(this.comparator)}static emptySet(e){return new Od(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Od))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Od;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
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
     */class Pd{constructor(){this.eo=new pu(Fc.comparator)}track(e){const t=e.doc.key,n=this.eo.get(t);n?0!==e.type&&3===n.type?this.eo=this.eo.insert(t,e):3===e.type&&1!==n.type?this.eo=this.eo.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.eo=this.eo.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.eo=this.eo.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.eo=this.eo.remove(t):1===e.type&&2===n.type?this.eo=this.eo.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.eo=this.eo.insert(t,{type:2,doc:e.doc}):ec():this.eo=this.eo.insert(t,e)}no(){const e=[];return this.eo.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Md{constructor(e,t,n,r,i,s,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const i=[];return t.forEach((e=>{i.push({type:0,doc:e})})),new Md(e,t,Od.emptySet(t),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Al(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
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
     */class Ld{constructor(){this.so=void 0,this.listeners=[]}}class Fd{constructor(){this.queries=new Th((e=>Cl(e)),Al),this.onlineState="Unknown",this.io=new Set}}function Ud(e,t){const n=nc(e);let r=!1;for(const e of t){const t=e.query,i=n.queries.get(t);if(i){for(const t of i.listeners)t.oo(e)&&(r=!0);i.so=e}}r&&jd(n)}function Bd(e,t,n){const r=nc(e),i=r.queries.get(t);if(i)for(const e of i.listeners)e.onError(n);r.queries.delete(t)}function jd(e){e.io.forEach((e=>{e.next()}))}class Vd{constructor(e,t,n){this.query=e,this.ao=t,this.co=!1,this.uo=null,this.onlineState="Unknown",this.options=n||{}}oo(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Md(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.co?this.ho(e)&&(this.ao.next(e),t=!0):this.lo(e,this.onlineState)&&(this.fo(e),t=!0),this.uo=e,t}onError(e){this.ao.error(e)}ro(e){this.onlineState=e;let t=!1;return this.uo&&!this.co&&this.lo(this.uo,e)&&(this.fo(this.uo),t=!0),t}lo(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return!(this.options.wo&&n||e.docs.isEmpty()&&"Offline"!==t)}ho(e){if(e.docChanges.length>0)return!0;const t=this.uo&&this.uo.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}fo(e){e=Md.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.co=!0,this.ao.next(e)}}
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
     */class zd{constructor(e){this.key=e}}class qd{constructor(e){this.key=e}}class Kd{constructor(e,t){this.query=e,this.To=t,this.Eo=null,this.current=!1,this.Io=Iu(),this.mutatedKeys=Iu(),this.Ao=Rl(e),this.Ro=new Od(this.Ao)}get Po(){return this.To}bo(e,t){const n=t?t.vo:new Pd,r=t?t.Ro:this.Ro;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=Tl(this.query)&&r.size===this.query.limit?r.last():null,c=El(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const l=r.get(e),u=$l(this.query,t)?t:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.Vo(l,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Ao(u,a)>0||c&&this.Ao(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(u?(s=s.add(u),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),Tl(this.query)||El(this.query))for(;s.size>this.query.limit;){const e=Tl(this.query)?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Ro:s,vo:n,Bn:o,mutatedKeys:i}}Vo(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Ro;this.Ro=e.Ro,this.mutatedKeys=e.mutatedKeys;const i=e.vo.no();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ec()}};return n(e)-n(t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e.type,t.type)||this.Ao(e.doc,t.doc))),this.So(n);const s=t?this.Do():[],o=0===this.Io.size&&this.current?1:0,a=o!==this.Eo;return this.Eo=o,0!==i.length||a?{snapshot:new Md(this.query,e.Ro,r,i,e.mutatedKeys,0===o,a,!1),Co:s}:{Co:s}}ro(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new Pd,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(e){return!this.To.has(e)&&!!this.Ro.has(e)&&!this.Ro.get(e).hasLocalMutations}So(e){e&&(e.addedDocuments.forEach((e=>this.To=this.To.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.To=this.To.delete(e))),this.current=e.current)}Do(){if(!this.current)return[];const e=this.Io;this.Io=Iu(),this.Ro.forEach((e=>{this.No(e.key)&&(this.Io=this.Io.add(e.key))}));const t=[];return e.forEach((e=>{this.Io.has(e)||t.push(new qd(e))})),this.Io.forEach((n=>{e.has(n)||t.push(new zd(n))})),t}ko(e){this.To=e.zn,this.Io=Iu();const t=this.bo(e.documents);return this.applyChanges(t,!0)}xo(){return Md.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,0===this.Eo)}}class Hd{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Wd{constructor(e){this.key=e,this.$o=!1}}class Gd{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Fo={},this.Oo=new Th((e=>Cl(e)),Al),this.Mo=new Map,this.Lo=new Set,this.Bo=new pu(Fc.comparator),this.Uo=new Map,this.qo=new Ph,this.Ko={},this.jo=new Map,this.Qo=kh.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return!0===this.Wo}}async function Jd(e,t){const n=function(e){const t=nc(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Qd.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=ff.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ef.bind(null,t),t.Fo.Pr=Ud.bind(null,t.eventManager),t.Fo.zo=Bd.bind(null,t.eventManager),t}(e);let r,i;const s=n.Oo.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.xo();else{const e=await function(e,t){const n=nc(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.He.getTargetData(e,t).next((i=>i?(r=i,dh.resolve(r)):n.He.allocateTargetId(e).next((i=>(r=new gh(t,i,0,e.currentSequenceNumber),n.He.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.qn.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qn=n.qn.insert(e.targetId,e),n.Kn.set(t,e.targetId)),e}))}(n.localStore,Sl(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await async function(e,t,n,r){e.Go=(t,n,r)=>async function(e,t,n,r){let i=t.view.bo(n);i.Bn&&(i=await Dh(e.localStore,t.query,!1).then((({documents:e})=>t.view.bo(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return cf(e,t.targetId,o.Co),o.snapshot}(e,t,n,r);const i=await Dh(e.localStore,t,!0),s=new Kd(t,i.zn),o=s.bo(i.documents),a=xu.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=s.applyChanges(o,e.isPrimaryClient,a);cf(e,n,c.Co);const l=new Hd(t,n,s);return e.Oo.set(t,l),e.Mo.has(n)?e.Mo.get(n).push(t):e.Mo.set(n,[t]),c.snapshot}(n,t,r,"current"===s),n.isPrimaryClient&&cd(n.remoteStore,e)}return i}async function Xd(e,t){const n=nc(e),r=n.Oo.get(t),i=n.Mo.get(r.targetId);if(i.length>1)return n.Mo.set(r.targetId,i.filter((e=>!Al(e,t)))),void n.Oo.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Nh(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),ld(n.remoteStore,r.targetId),of(n,r.targetId)})).catch(_h)):(of(n,r.targetId),await Nh(n.localStore,r.targetId,!0))}async function Yd(e,t,n){const r=function(e){const t=nc(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=tf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=nf.bind(null,t),t}(e);try{const e=await function(e,t){const n=nc(e),r=vc.now(),i=t.reduce(((e,t)=>e.add(t.key)),Iu());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>n.Wn.vn(e,i).next((i=>{s=i;const o=[];for(const e of t){const t=eu(e,s.get(e.key));null!=t&&o.push(new iu(e.key,t,Zc(t.value.mapValue),Jl.exists(!0)))}return n.An.addMutationBatch(e,r,o,t)})))).then((e=>(e.applyToLocalDocumentSet(s),{batchId:e.batchId,changes:s})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Ko[e.currentUser.toKey()];r||(r=new pu(gc)),r=r.insert(t,n),e.Ko[e.currentUser.toKey()]=r}(r,e.batchId,n),await hf(r,e.changes),await kd(r.remoteStore)}catch(e){const t=Dd(e,"Failed to persist write");n.reject(t)}}async function Qd(e,t){const n=nc(e);try{const e=await $h(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Uo.get(t);r&&(tc(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.$o=!0:e.modifiedDocuments.size>0?tc(r.$o):e.removedDocuments.size>0&&(tc(r.$o),r.$o=!1))})),await hf(n,e,t)}catch(e){await _h(e)}}function Zd(e,t,n){const r=nc(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Oo.forEach(((n,r)=>{const i=r.view.ro(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=nc(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.ro(t)&&(r=!0)})),r&&jd(n)}(r.eventManager,t),e.length&&r.Fo.Pr(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function ef(e,t,n){const r=nc(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Uo.get(t),s=i&&i.key;if(s){let e=new pu(Fc.comparator);e=e.insert(s,el.newNoDocument(s,wc.min()));const n=Iu().add(s),i=new Cu(wc.min(),new Map,new yu(gc),e,n);await Qd(r,i),r.Bo=r.Bo.remove(s),r.Uo.delete(t),uf(r)}else await Nh(r.localStore,t,!1).then((()=>of(r,t,n))).catch(_h)}async function tf(e,t){const n=nc(e),r=t.batch.batchId;try{const e=await function(e,t){const n=nc(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Qn.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=dh.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);tc(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&r.addEntry(t,n.commitVersion))}))})),o.next((()=>e.An.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.An.performConsistencyCheck(e))).next((()=>n.Wn.vn(e,r)))}))}(n.localStore,t);sf(n,r,null),rf(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await hf(n,e)}catch(e){await _h(e)}}async function nf(e,t,n){const r=nc(e);try{const e=await function(e,t){const n=nc(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.An.lookupMutationBatch(e,t).next((t=>(tc(null!==t),r=t.keys(),n.An.removeMutationBatch(e,t)))).next((()=>n.An.performConsistencyCheck(e))).next((()=>n.Wn.vn(e,r)))}))}(r.localStore,t);sf(r,t,n),rf(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await hf(r,e)}catch(n){await _h(n)}}function rf(e,t){(e.jo.get(t)||[]).forEach((e=>{e.resolve()})),e.jo.delete(t)}function sf(e,t,n){const r=nc(e);let i=r.Ko[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Ko[r.currentUser.toKey()]=i}}function of(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Mo.get(t))e.Oo.delete(r),n&&e.Fo.zo(r,n);e.Mo.delete(t),e.isPrimaryClient&&e.qo.us(t).forEach((t=>{e.qo.containsKey(t)||af(e,t)}))}function af(e,t){e.Lo.delete(t.path.canonicalString());const n=e.Bo.get(t);null!==n&&(ld(e.remoteStore,n),e.Bo=e.Bo.remove(t),e.Uo.delete(n),uf(e))}function cf(e,t,n){for(const r of n)r instanceof zd?(e.qo.addReference(r.key,t),lf(e,r)):r instanceof qd?(Xa("SyncEngine","Document no longer in limbo: "+r.key),e.qo.removeReference(r.key,t),e.qo.containsKey(r.key)||af(e,r.key)):ec()}function lf(e,t){const n=t.key,r=n.path.canonicalString();e.Bo.get(n)||e.Lo.has(r)||(Xa("SyncEngine","New document in limbo: "+n),e.Lo.add(r),uf(e))}function uf(e){for(;e.Lo.size>0&&e.Bo.size<e.maxConcurrentLimboResolutions;){const t=e.Lo.values().next().value;e.Lo.delete(t);const n=new Fc(Ec.fromString(t)),r=e.Qo.next();e.Uo.set(r,new Wd(n)),e.Bo=e.Bo.insert(n,r),cd(e.remoteStore,new gh(Sl(_l(n.path)),r,2,fc.I))}}async function hf(e,t,n){const r=nc(e),i=[],s=[],o=[];r.Oo.isEmpty()||(r.Oo.forEach(((e,a)=>{o.push(r.Go(a,t,n).then((e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),i.push(e);const t=Ih.$n(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.Fo.Pr(i),await async function(e,t){const n=nc(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>dh.forEach(t,(t=>dh.forEach(t.kn,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>dh.forEach(t.xn,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!fh(e))throw e;Xa("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.qn.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.qn=n.qn.insert(t,i)}}}(r.localStore,s))}async function df(e,t){const n=nc(e);if(!n.currentUser.isEqual(t)){Xa("SyncEngine","User change. New user:",t.toKey());const e=await Ch(n.localStore,t);n.currentUser=t,function(e,t){e.jo.forEach((e=>{e.forEach((e=>{e.reject(new ic(rc.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),e.jo.clear()}(n),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await hf(n,e.Gn)}}function ff(e,t){const n=nc(e),r=n.Uo.get(t);if(r&&r.$o)return Iu().add(r.key);{let e=Iu();const r=n.Mo.get(t);if(!r)return e;for(const t of r){const r=n.Oo.get(t);e=e.unionWith(r.view.Po)}return e}}class pf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.k=Qh(e.databaseInfo.databaseId),this.sharedClientState=this.Jo(e),this.persistence=this.Yo(e),await this.persistence.start(),this.gcScheduler=this.Xo(e),this.localStore=this.Zo(e)}Xo(e){return null}Zo(e){return function(e,t,n,r){return new Ah(e,t,n,r)}(this.persistence,new Sh,e.initialUser,this.k)}Yo(e){return new jh(zh.ks,this.k)}Jo(e){return new Kh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class mf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Zd(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=df.bind(null,this.syncEngine),await async function(e,t){const n=nc(e);t?(n.Gr.delete(2),await od(n)):t||(n.Gr.add(2),await ad(n),n.Jr.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Fd}createDatastore(e){const t=Qh(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Xh(r));var r;return function(e,t,n,r){return new rd(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>Zd(this.syncEngine,e,0),s=Wh.bt()?new Wh:new Hh,new sd(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new Gd(e,t,n,r,i,s);return o&&(a.Wo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=nc(e);Xa("RemoteStore","RemoteStore shutting down."),t.Gr.add(5),await ad(t),t.Hr.shutdown(),t.Jr.set("Unknown")}(this.remoteStore)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
     */class gf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ea(this.observer.next,e)}error(e){this.observer.error?this.ea(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}na(){this.muted=!0}ea(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
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
     */class yf{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Ha.UNAUTHENTICATED,this.clientId=mc.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Xa("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(()=>Promise.resolve()))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ic(rc.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new sc;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Dd(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function vf(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){return e.offlineComponents||(Xa("FirestoreClient","Using default OfflineComponentProvider"),await async function(e,t){e.asyncQueue.verifyOperationInProgress(),Xa("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await Ch(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}(e,new pf)),e.offlineComponents}(e);Xa("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>async function(e,t){const n=nc(e);n.asyncQueue.verifyOperationInProgress(),Xa("RemoteStore","RemoteStore received new credentials");const r=pd(n);n.Gr.add(3),await ad(n),r&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Gr.delete(3),await od(n)}(t.remoteStore,e))),e.onlineComponents=t}async function wf(e){return e.onlineComponents||(Xa("FirestoreClient","Using default OnlineComponentProvider"),await vf(e,new mf)),e.onlineComponents}async function bf(e){const t=await wf(e),n=t.eventManager;return n.onListen=Jd.bind(null,t.syncEngine),n.onUnlisten=Xd.bind(null,t.syncEngine),n}function kf(e,t,n={}){const r=new sc;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new gf({next:s=>{t.enqueueAndForget((()=>async function(e,t){const n=nc(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new ic(rc.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new ic(rc.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new Vd(_l(n.path),s,{includeMetadataChanges:!0,wo:!0});return async function(e,t){const n=nc(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Ld),i)try{s.so=await n.onListen(r)}catch(e){const n=Dd(e,`Initialization of query '${xl(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.ro(n.onlineState),s.so&&t.oo(s.so)&&jd(n)}(e,o)}(await bf(e),e.asyncQueue,t,n,r))),r.promise}class _f{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Tf{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Tf&&e.projectId===this.projectId&&e.database===this.database}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Ef=new Map;
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
     */function If(e,t,n){if(!n)throw new ic(rc.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Sf(e){if(!Fc.isDocumentKey(e))throw new ic(rc.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Af(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":ec()}function Cf(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new ic(rc.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Af(e);throw new ic(rc.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class xf{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new ic(rc.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new ic(rc.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new ic(rc.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class $f{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xf({}),this._settingsFrozen=!1,e instanceof Tf?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new ic(rc.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Tf(e.options.projectId)}(e))}get app(){if(!this._app)throw new ic(rc.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new ic(rc.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xf(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new ac;switch(e.type){case"gapi":const t=e.client;return tc(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new uc(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new ic(rc.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Ef.get(e);t&&(Xa("ComponentProvider","Removing Datastore"),Ef.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Rf{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Df(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rf(this.firestore,e,this._key)}}class Nf{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Nf(this.firestore,e,this._query)}}class Df extends Nf{constructor(e,t,n){super(e,t,_l(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rf(this.firestore,null,new Fc(e))}withConverter(e){return new Df(this.firestore,e,this._path)}}function Of(e,t,...n){if(e=jt(e),1===arguments.length&&(t=mc.A()),If("doc","path",t),e instanceof $f){const r=Ec.fromString(t,...n);return Sf(r),new Rf(e,null,new Fc(r))}{if(!(e instanceof Rf||e instanceof Df))throw new ic(rc.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ec.fromString(t,...n));return Sf(r),new Rf(e.firestore,e instanceof Df?e.converter:null,new Fc(r))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Pf{constructor(){this.ma=Promise.resolve(),this.ga=[],this.ya=!1,this.pa=[],this.Ta=null,this.Ea=!1,this.Ia=!1,this.Aa=[],this.ur=new Zh(this,"async_queue_retry"),this.Ra=()=>{const e=Yh();e&&Xa("AsyncQueue","Visibility state changed to "+e.visibilityState),this.ur.er()};const e=Yh();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Ra)}get isShuttingDown(){return this.ya}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pa(),this.ba(e)}enterRestrictedMode(e){if(!this.ya){this.ya=!0,this.Ia=e||!1;const t=Yh();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Ra)}}enqueue(e){if(this.Pa(),this.ya)return new Promise((()=>{}));const t=new sc;return this.ba((()=>this.ya&&this.Ia?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.ga.push(e),this.va())))}async va(){if(0!==this.ga.length){try{await this.ga[0](),this.ga.shift(),this.ur.reset()}catch(e){if(!fh(e))throw e;Xa("AsyncQueue","Operation failed with retryable error: "+e)}this.ga.length>0&&this.ur.Zi((()=>this.va()))}}ba(e){const t=this.ma.then((()=>(this.Ea=!0,e().catch((e=>{this.Ta=e,this.Ea=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
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
     */(e);throw Ya("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Ea=!1,e))))));return this.ma=t,t}enqueueAfterDelay(e,t,n){this.Pa(),this.Aa.indexOf(e)>-1&&(t=0);const r=Nd.createAndSchedule(this,e,t,n,(e=>this.Va(e)));return this.pa.push(r),r}Pa(){this.Ta&&ec()}verifyOperationInProgress(){}async Sa(){let e;do{e=this.ma,await e}while(e!==this.ma)}Da(e){for(const t of this.pa)if(t.timerId===e)return!0;return!1}Ca(e){return this.Sa().then((()=>{this.pa.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.pa)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Sa()}))}Na(e){this.Aa.push(e)}Va(e){const t=this.pa.indexOf(e);this.pa.splice(t,1)}}class Mf extends $f{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new Pf,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Ff(this),this._firestoreClient.terminate()}}function Lf(e){return e._firestoreClient||Ff(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Ff(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new _f(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new yf(e._authCredentials,e._appCheckCredentials,e._queue,r)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
     */class Uf{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new ic(rc.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Sc(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Bf{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Bf(Cc.fromBase64String(e))}catch(e){throw new ic(rc.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Bf(Cc.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class jf{constructor(e){this._methodName=e}}
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
     */class Vf{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ic(rc.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ic(rc.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return gc(this._lat,e._lat)||gc(this._long,e._long)}}
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
     */const zf=/^__.*__$/;class qf{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new iu(e,this.data,this.fieldMask,t,this.fieldTransforms):new ru(e,this.data,t,this.fieldTransforms)}}class Kf{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new iu(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Hf(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ec()}}class Wf{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.k=n,this.ignoreUndefinedProperties=r,void 0===i&&this.ka(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get xa(){return this.settings.xa}$a(e){return new Wf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Fa(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.$a({path:n,Oa:!1});return r.Ma(e),r}La(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.$a({path:n,Oa:!1});return r.ka(),r}Ba(e){return this.$a({path:void 0,Oa:!0})}Ua(e){return sp(e,this.settings.methodName,this.settings.qa||!1,this.path,this.settings.Ka)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}ka(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ma(this.path.get(e))}Ma(e){if(0===e.length)throw this.Ua("Document fields must not be empty");if(Hf(this.xa)&&zf.test(e))throw this.Ua('Document fields cannot begin and end with "__"')}}class Gf{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.k=n||Qh(e)}ja(e,t,n,r=!1){return new Wf({xa:e,methodName:t,Ka:n,path:Sc.emptyPath(),Oa:!1,qa:r},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function Jf(e){const t=e._freezeSettings(),n=Qh(e._databaseId);return new Gf(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Xf(e,t,n,r,i,s={}){const o=e.ja(s.merge||s.mergeFields?2:0,t,n,i);tp("Data must be an object, but it was:",o,r);const a=Zf(r,o);let c,l;if(s.merge)c=new Ac(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=np(t,r,n);if(!o.contains(i))throw new ic(rc.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);op(e,i)||e.push(i)}c=new Ac(e),l=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,l=o.fieldTransforms;return new qf(new Qc(a),c,l)}class Yf extends jf{_toFieldTransform(e){if(2!==e.xa)throw 1===e.xa?e.Ua(`${this._methodName}() can only appear at the top level of your update data`):e.Ua(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Yf}}function Qf(e,t){if(ep(e=jt(e)))return tp("Unsupported field value:",t,e),Zf(e,t);if(e instanceof jf)return function(e,t){if(!Hf(t.xa))throw t.Ua(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Ua(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Oa&&4!==t.xa)throw t.Ua("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Qf(i,t.Ba(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=jt(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Pl(t.k,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=vc.fromDate(e);return{timestampValue:Bu(t.k,n)}}if(e instanceof vc){const n=new vc(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Bu(t.k,n)}}if(e instanceof Vf)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Bf)return{bytesValue:ju(t.k,e._byteString)};if(e instanceof Rf){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Ua(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:qu(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Ua(`Unsupported field value: ${Af(e)}`)}(e,t)}function Zf(e,t){const n={};return _c(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):kc(e,((e,r)=>{const i=Qf(r,t.Fa(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function ep(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof vc||e instanceof Vf||e instanceof Bf||e instanceof Rf||e instanceof jf)}function tp(e,t,n){if(!ep(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Af(n);throw"an object"===r?t.Ua(e+" a custom object"):t.Ua(e+" "+r)}}function np(e,t,n){if((t=jt(t))instanceof Uf)return t._internalPath;if("string"==typeof t)return ip(e,t);throw sp("Field path arguments must be of type string or FieldPath.",e,!1,void 0,n)}const rp=new RegExp("[~\\*/\\[\\]]");function ip(e,t,n){if(t.search(rp)>=0)throw sp(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Uf(...t.split("."))._internalPath}catch(r){throw sp(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function sp(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new ic(rc.INVALID_ARGUMENT,a+e+c)}function op(e,t){return e.some((e=>e.isEqual(t)))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ap{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Rf(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new cp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(lp("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class cp extends ap{data(){return super.data()}}function lp(e,t){return"string"==typeof t?ip(e,t):t instanceof Uf?t._internalPath:t._delegate._internalPath}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class up{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hp extends ap{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new dp(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(lp("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class dp extends hp{data(e={}){return super.data(e)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
function fp(e){e=Cf(e,Rf);const t=Cf(e.firestore,Mf);return kf(Lf(t),e._key).then((n=>function(e,t,n){const r=n.docs.get(t._key),i=new pp(e);return new hp(e,i,t._key,r,new up(n.hasPendingWrites,n.fromCache),t.converter)}(t,e,n)))}class pp extends class{convertValue(e,t="none"){switch(Uc(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Rc(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Nc(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw ec()}}convertObject(e,t){const n={};return kc(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Vf(Rc(e.latitude),Rc(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Oc(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Pc(e));default:return null}}convertTimestamp(e){const t=$c(e);return new vc(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Ec.fromString(e);tc(hh(n));const r=new Tf(n.get(1),n.get(3)),i=new Fc(n.popFirst(5));return r.isEqual(t)||Ya(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */{constructor(e){super(),this.firestore=e}convertBytes(e){return new Bf(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Rf(this.firestore,null,t)}}function mp(e,t,n,...r){e=Cf(e,Rf);const i=Cf(e.firestore,Mf),s=Jf(i);let o;return o="string"==typeof(t=jt(t))||t instanceof Uf?function(e,t,n,r,i,s){const o=e.ja(1,t,n),a=[np(t,r,n)],c=[i];if(s.length%2!=0)throw new ic(rc.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)a.push(np(t,s[e])),c.push(s[e+1]);const l=[],u=Qc.empty();for(let e=a.length-1;e>=0;--e)if(!op(l,a[e])){const t=a[e];let n=c[e];n=jt(n);const r=o.La(t);if(n instanceof Yf)l.push(t);else{const e=Qf(n,r);null!=e&&(l.push(t),u.set(t,e))}}const h=new Ac(l);return new Kf(u,h,o.fieldTransforms)}(s,"updateDoc",e._key,t,n,r):function(e,t,n,r){const i=e.ja(1,t,n);tp("Data must be an object, but it was:",i,r);const s=[],o=Qc.empty();kc(r,((e,r)=>{const a=ip(t,e,n);r=jt(r);const c=i.La(a);if(r instanceof Yf)s.push(a);else{const e=Qf(r,c);null!=e&&(s.push(a),o.set(a,e))}}));const a=new Ac(s);return new Kf(o,a,i.fieldTransforms)}(s,"updateDoc",e._key,t),gp(i,[o.toMutation(e._key,Jl.exists(!0))])}function gp(e,t){return function(e,t){const n=new sc;return e.asyncQueue.enqueueAndForget((async()=>Yd(await function(e){return wf(e).then((e=>e.syncEngine))}(e),t,n))),n.promise}(Lf(e),t)}
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
function yp(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function vp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}!function(e,t=!0){Wa="9.6.1",cn(new Vt("firestore",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=new Mf(r,new cc(e.getProvider("auth-internal")),new dc(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),i._setSettings(n),i}),"PUBLIC")),pn(Ka,"3.4.1",e),pn(Ka,"3.4.1","esm2017")}();const wp=vp,bp=new Rt("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),kp=new Yt("@firebase/auth");function _p(e,...t){kp.logLevel<=Ht.ERROR&&kp.error(`Auth (9.6.1): ${e}`,...t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Tp(e,...t){throw Ip(e,...t)}function Ep(e,...t){return Ip(e,...t)}function Ip(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return bp.create(e,...t)}function Sp(e,t,...n){if(!e)throw Ip(t,...n)}function Ap(e){const t="INTERNAL ASSERTION FAILED: "+e;throw _p(t),new Error(t)}function Cp(e,t){e||Ap(t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const xp=new Map;function $p(e){Cp(e instanceof Function,"Expected a class definition");let t=xp.get(e);return t?(Cp(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,xp.set(e,t),t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
function Rp(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Np(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Dp(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==Np()&&"https:"!==Np()&&!St()&&!("connection"in navigator)||navigator.onLine}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
class Op{constructor(e,t){this.shortDelay=e,this.longDelay=t,Cp(t>e,"Short delay should be less than long delay!"),this.isMobile=It()||At()}get(){return Dp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Pp(e,t){Cp(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Mp{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Ap("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Ap("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Ap("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Lp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Fp=new Op(3e4,6e4);
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Up(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Bp(e,t,n,r,i={}){return jp(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=Pt(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Mp.fetch()(zp(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function jp(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Lp),t);try{const t=new qp(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Kp(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Kp(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Kp(e,"email-already-in-use",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw function(e,t,n){const r=Object.assign(Object.assign({},wp()),{[t]:n});return new Rt("auth","Firebase",r).create(t,{appName:e.name})}(e,a,o);Tp(e,a)}}catch(t){if(t instanceof $t)throw t;Tp(e,"network-request-failed")}}async function Vp(e,t,n,r,i={}){const s=await Bp(e,t,n,r,i);return"mfaPendingCredential"in s&&Tp(e,"multi-factor-auth-required",{_serverResponse:s}),s}function zp(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Pp(e.config,i):`${e.config.apiScheme}://${i}`}class qp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Ep(this.auth,"timeout"))),Fp.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Kp(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ep(e,t,r);return i.customData._tokenResponse=n,i}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
function Hp(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}function Wp(e){return 1e3*Number(e)}function Gp(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return _p("JWT malformed, contained fewer than 3 sections"),null;try{const e=function(e){try{return _t.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null}(n);return e?JSON.parse(e):(_p("Failed to decode base64 JWT payload"),null)}catch(e){return _p("Caught error parsing JWT payload as JSON",e),null}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
async function Jp(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof $t&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Xp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Yp{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hp(this.lastLoginAt),this.creationTime=Hp(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
     */async function Qp(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Jp(e,async function(e,t){return Bp(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));Sp(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=yp(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const u=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Yp(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
class Zp{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Sp(e.idToken,"internal-error"),Sp(void 0!==e.idToken,"internal-error"),Sp(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Gp(e);return Sp(t,"internal-error"),Sp(void 0!==t.exp,"internal-error"),Sp(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Sp(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
async function(e,t){const n=await jp(e,{},(async()=>{const n=Pt({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=zp(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Mp.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new Zp;return n&&(Sp("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(Sp("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(Sp("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zp,this.toJSON())}_performRefresh(){return Ap("not implemented")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function em(e,t){Sp("string"==typeof e||void 0===e,"internal-error",{appName:t})}class tm{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=yp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Xp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new Yp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Jp(this,this.stsTokenManager.getToken(this.auth,e));return Sp(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=jt(e),r=await n.getIdToken(t),i=Gp(r);Sp(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Hp(Wp(i.auth_time)),issuedAtTime:Hp(Wp(i.iat)),expirationTime:Hp(Wp(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=jt(e);await Qp(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Sp(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new tm(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Sp(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Qp(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Jp(this,async function(e,t){return Bp(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:k,stsTokenManager:_}=t;Sp(v&&_,e,"internal-error");const T=Zp.fromJSON(this.name,_);Sp("string"==typeof v,e,"internal-error"),em(u,e.name),em(h,e.name),Sp("boolean"==typeof w,e,"internal-error"),Sp("boolean"==typeof b,e,"internal-error"),em(d,e.name),em(f,e.name),em(p,e.name),em(m,e.name),em(g,e.name),em(y,e.name);const E=new tm({uid:v,auth:e,email:h,emailVerified:w,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:y});return k&&Array.isArray(k)&&(E.providerData=k.map((e=>Object.assign({},e)))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(e,t,n=!1){const r=new Zp;r.updateFromServerResponse(t);const i=new tm({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Qp(i),i}}
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
     */class nm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}nm.type="NONE";const rm=nm;
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
     */function im(e,t,n){return`firebase:${e}:${t}:${n}`}class sm{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=im(this.userKey,r.apiKey,i),this.fullPersistenceKey=im("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?tm._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new sm($p(rm),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||$p(rm);const s=im(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const r=tm._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new sm(i,e,n)):new sm(i,e,n)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function om(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(um(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(am(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(dm(t))return"Blackberry";if(fm(t))return"Webos";if(cm(t))return"Safari";if((t.includes("chrome/")||lm(t))&&!t.includes("edge/"))return"Chrome";if(hm(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function am(e=Et()){return/firefox\//i.test(e)}function cm(e=Et()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function lm(e=Et()){return/crios\//i.test(e)}function um(e=Et()){return/iemobile/i.test(e)}function hm(e=Et()){return/android/i.test(e)}function dm(e=Et()){return/blackberry/i.test(e)}function fm(e=Et()){return/webos/i.test(e)}function pm(e=Et()){return/iphone|ipad|ipod/i.test(e)}function mm(e=Et()){return pm(e)||hm(e)||fm(e)||dm(e)||/windows phone/i.test(e)||um(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
function gm(e,t=[]){let n;switch(e){case"Browser":n=om(Et());break;case"Worker":n=`${om(Et())}-${e}`;break;default:n=e}return`${n}/JsCore/9.6.1/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ym{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wm(this),this.idTokenSubscription=new wm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bp,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=$p(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await sm.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);r&&r!==i||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(Sp(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Qp(e)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?jt(e):null;return t&&Sp(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&Sp(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence($p(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Rt("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&$p(e)||this._popupRedirectResolver;Sp(t,this,"argument-error"),this.redirectPersistenceManager=await sm.create(this,[$p(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return Sp(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Sp(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function vm(e){return jt(e)}class wm{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new Ft(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return Sp(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class bm{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ap("not implemented")}_getIdTokenResponse(e){return Ap("not implemented")}_linkToIdToken(e,t){return Ap("not implemented")}_getReauthenticationResolver(e){return Ap("not implemented")}}async function km(e,t){return async function(e,t){return Bp(e,"POST","/v1/accounts:sendOobCode",Up(e,t))}(e,t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
class _m extends bm{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new _m(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new _m(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
return async function(e,t){return Vp(e,"POST","/v1/accounts:signInWithPassword",Up(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Vp(e,"POST","/v1/accounts:signInWithEmailLink",Up(e,t))}(e,{email:this._email,oobCode:this._password});default:Tp(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return async function(e,t){return Bp(e,"POST","/v1/accounts:update",t)}(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Vp(e,"POST","/v1/accounts:signInWithEmailLink",Up(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Tp(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function Tm(e,t){return Vp(e,"POST","/v1/accounts:signInWithIdp",Up(e,t))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Em extends bm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Em(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Tp("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=yp(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Em(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return Tm(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Tm(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Tm(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Pt(t)}return e}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Im{constructor(e){var t,n,r,i,s,o;const a=Mt(Lt(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);Sp(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=Mt(Lt(e)).link,n=t?Mt(Lt(t)).deep_link_id:null,r=Mt(Lt(e)).deep_link_id;return(r?Mt(Lt(r)).link:null)||r||n||t||e}(e);try{return new Im(t)}catch(e){return null}}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Sm{constructor(){this.providerId=Sm.PROVIDER_ID}static credential(e,t){return _m._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Im.parseLink(t);return Sp(n,"argument-error"),_m._fromEmailAndCode(e,n.code,n.tenantId)}}Sm.PROVIDER_ID="password",Sm.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Sm.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
class Am{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
     */class Cm extends Am{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class xm extends Cm{constructor(){super("facebook.com")}static credential(e){return Em._fromParams({providerId:xm.PROVIDER_ID,signInMethod:xm.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xm.credentialFromTaggedObject(e)}static credentialFromError(e){return xm.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return xm.credential(e.oauthAccessToken)}catch(e){return null}}}xm.FACEBOOK_SIGN_IN_METHOD="facebook.com",xm.PROVIDER_ID="facebook.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
class $m extends Cm{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Em._fromParams({providerId:$m.PROVIDER_ID,signInMethod:$m.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return $m.credentialFromTaggedObject(e)}static credentialFromError(e){return $m.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return $m.credential(t,n)}catch(e){return null}}}$m.GOOGLE_SIGN_IN_METHOD="google.com",$m.PROVIDER_ID="google.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
class Rm extends Cm{constructor(){super("github.com")}static credential(e){return Em._fromParams({providerId:Rm.PROVIDER_ID,signInMethod:Rm.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rm.credentialFromTaggedObject(e)}static credentialFromError(e){return Rm.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Rm.credential(e.oauthAccessToken)}catch(e){return null}}}Rm.GITHUB_SIGN_IN_METHOD="github.com",Rm.PROVIDER_ID="github.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
class Nm extends Cm{constructor(){super("twitter.com")}static credential(e,t){return Em._fromParams({providerId:Nm.PROVIDER_ID,signInMethod:Nm.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Nm.credentialFromTaggedObject(e)}static credentialFromError(e){return Nm.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Nm.credential(t,n)}catch(e){return null}}}Nm.TWITTER_SIGN_IN_METHOD="twitter.com",Nm.PROVIDER_ID="twitter.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
class Dm{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await tm._fromIdTokenResponse(e,n,r),s=Om(n);return new Dm({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Om(n);return new Dm({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Om(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Pm extends $t{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Pm.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Pm(e,t,n,r)}}function Mm(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Pm._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
async function Lm(e,t,n=!1){const r="signIn",i=await Mm(e,r,t),s=await Dm._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Fm(e,t,n){const r=vm(e),i=await
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
async function(e,t){return Vp(e,"POST","/v1/accounts:signUp",Up(e,t))}(r,{returnSecureToken:!0,email:t,password:n}),s=await Dm._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Um(e,t,n){return async function(e,t){return Lm(vm(e),t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(jt(e),Sm.credential(t,n))}async function Bm(e,t){const n=jt(e),r={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&function(e,t,n){var r;Sp((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),Sp(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(Sp(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(Sp(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}(n.auth,r,t);const{email:i}=await km(n.auth,r);i!==e.email&&await e.reload()}function jm(e){return jt(e).signOut()}const Vm="__sak";
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
     */class zm{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Vm,"1"),this.storage.removeItem(Vm),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class qm extends zm{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Et();return cm(e)||pm(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=mm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Ct()&&10===document.documentMode&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}qm.type="LOCAL";const Km=qm;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Hm extends zm{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Hm.type="SESSION";const Wm=Hm;
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
class Gm{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Gm(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
function Jm(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
     */Gm.receivers=[];class Xm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Jm("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ym(){return window}
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
function Qm(){return void 0!==Ym().WorkerGlobalScope&&"function"==typeof Ym().importScripts}
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
const Zm="firebaseLocalStorageDb",eg="firebaseLocalStorage",tg="fbase_key";class ng{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function rg(e,t){return e.transaction([eg],t?"readwrite":"readonly").objectStore(eg)}function ig(){const e=indexedDB.open(Zm,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(eg,{keyPath:tg})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(eg)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Zm);return new ng(e).toPromise()}(),t(await ig()))}))}))}async function sg(e,t,n){const r=rg(e,!0).put({[tg]:t,value:n});return new ng(r).toPromise()}function og(e,t){const n=rg(e,!0).delete(t);return new ng(n).toPromise()}class ag{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await ig()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gm._getInstance(Qm()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Xm(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&function(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ig();return await sg(e,Vm,"1"),await og(e,Vm),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>sg(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=rg(e,!1).get(t),r=await new ng(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>og(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=rg(e,!1).getAll();return new ng(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ag.type="LOCAL";const cg=ag;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function lg(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Ep("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",function(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}().appendChild(r)}))}new Op(3e4,6e4);
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
class ug extends bm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Tm(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Tm(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Tm(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function hg(e){return Lm(e.auth,new ug(e),e.bypassAuthState)}function dg(e){const{auth:t,user:n}=e;return Sp(n,t,"internal-error"),
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
async function(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Jp(e,Mm(r,i,t,e),n);Sp(s.idToken,r,"internal-error");const o=Gp(s.idToken);Sp(o,r,"internal-error");const{sub:a}=o;return Sp(e.uid===a,r,"user-mismatch"),Dm._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Tp(r,"user-mismatch"),e}}(n,new ug(e),e.bypassAuthState)}async function fg(e){const{auth:t,user:n}=e;return Sp(n,t,"internal-error"),async function(e,t,n=!1){const r=await Jp(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Dm._forOperation(e,"link",r)}(n,new ug(e),e.bypassAuthState)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class pg{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hg;case"linkViaPopup":case"linkViaRedirect":return fg;case"reauthViaPopup":case"reauthViaRedirect":return dg;default:Tp(this.auth,"internal-error")}}resolve(e){Cp(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cp(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const mg=new Op(2e3,1e4);class gg extends pg{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,gg.currentPopupAction&&gg.currentPopupAction.cancel(),gg.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Sp(e,this.auth,"internal-error"),e}async onExecution(){Cp(1===this.filter.length,"Popup operations only handle one event");const e=Jm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Ep(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Ep(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gg.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Ep(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,mg.get())};e()}}gg.currentPopupAction=null;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
const yg="pendingRedirect",vg=new Map;class wg extends pg{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=vg.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return im(yg,e.config.apiKey,e.name)}(t),r=function(e){return $p(e._redirectPersistence)}(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}vg.set(this.auth._key(),e)}return this.bypassAuthState||vg.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function bg(e,t,n=!1){const r=vm(e),i=
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
function(e,t){return t?$p(t):(Sp(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(r,t),s=new wg(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class kg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tg(e);default:return!1}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Tg(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Ep(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(_g(e))}saveEventToCache(e){this.cachedEventUids.add(_g(e)),this.lastProcessedEventTime=Date.now()}}function _g(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Tg({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
const Eg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ig=/^https?/;async function Sg(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Bp(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Ag(e))return}catch(e){}Tp(e,"unauthorized-domain")}function Ag(e){const t=Rp(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Ig.test(n))return!1;if(Eg.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
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
     */const Cg=new Op(3e4,6e4);function xg(){const e=Ym().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function $g(e){return new Promise(((t,n)=>{var r,i,s;function o(){xg(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{xg(),n(Ep(e,"network-request-failed"))},timeout:Cg.get()})}if(null===(i=null===(r=Ym().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Ym().gapi)||void 0===s?void 0:s.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Ym()[t]=()=>{gapi.load?o():n(Ep(e,"network-request-failed"))},lg(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Rg=null,e}))}let Rg=null;
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
const Ng=new Op(5e3,15e3),Dg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Og=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Pg(e){const t=e.config;Sp(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Pp(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:dn},i=Og.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Pt(r).slice(1)}`}async function Mg(e){const t=await function(e){return Rg=Rg||$g(e),Rg}(e),n=Ym().gapi;return Sp(n,e,"internal-error"),t.open({where:document.body,url:Pg(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Dg,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=Ep(e,"network-request-failed"),s=Ym().setTimeout((()=>{r(i)}),Ng.get());function o(){Ym().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
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
     */const Lg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Fg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Ug(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Lg),{width:r.toString(),height:i.toString(),top:s,left:o}),l=Et().toLowerCase();n&&(a=lm(l)?"_blank":n),am(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Et()){var t;return pm(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
     */(t||"",a),new Fg(null);const h=window.open(t||"",a,u);Sp(h,e,"popup-blocked");try{h.focus()}catch(e){}return new Fg(h)}const Bg="__/auth/handler",jg="emulator/auth/handler";function Vg(e,t,n,r,i,s){Sp(e.config.authDomain,e,"auth-domain-config-required"),Sp(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:dn,eventId:i};if(t instanceof Am){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof Cm){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${Bg}`;return Pp(e,jg)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)}?${Pt(a).slice(1)}`}const zg="webStorageSupport";const qg=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wm,this._completeRedirectFn=bg}async _openPopup(e,t,n,r){var i;Cp(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Ug(e,Vg(e,t,n,Rp(),r),Jm())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=Vg(e,t,n,Rp(),r),Ym().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Cp(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Mg(e),n=new kg(e);return t.register("authEvent",(t=>{Sp(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(zg,{type:zg},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),Tp(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Sg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return mm()||cm()||pm()}};var Kg,Hg="@firebase/auth",Wg="0.19.4";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
class Gg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Sp(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
function Jg(e=fn()){const t=ln(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=ln(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(Dt(n.getOptions(),null!=t?t:{}))return e;Tp(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:qg,persistence:[cg,Km,Wm]})}Kg="Browser",cn(new Vt("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:i}=n.options;return(e=>{Sp(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),Sp(!(null==i?void 0:i.includes(":")),"argument-error",{appName:e.name});const n={apiKey:r,authDomain:i,clientPlatform:Kg,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gm(Kg)},s=new ym(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map($p);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),cn(new Vt("auth-internal",(e=>(e=>new Gg(e))(vm(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),pn(Hg,Wg,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Kg)),pn(Hg,Wg,"esm2017");
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
const Xg=new Map,Yg={activated:!1,tokenObservers:[]},Qg={initialized:!1,enabled:!1};function Zg(e){return Xg.get(e)||Yg}function ey(e,t){Xg.set(e,t)}function ty(){return Qg}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ny="https://content-firebaseappcheck.googleapis.com/v1beta",ry=3e4,iy=96e4,sy=864e5;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
class oy{constructor(e,t,n,r,i){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=n,this.lowerBound=r,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=r,r>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch((()=>{}))}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Tt,await function(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Tt,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch((()=>{}))}catch(e){this.retryPolicy(e)?this.process(!1).catch((()=>{})):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const e=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),e}}}const ay=new Rt("appCheck","AppCheck",{"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"});
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
function cy(e=!1){var t;return e?null===(t=self.grecaptcha)||void 0===t?void 0:t.enterprise:self.grecaptcha}function ly(e){if(!Zg(e).activated)throw ay.create("use-before-activation",{appName:e.name})}function uy(e){const t=Math.round(e/1e3),n=Math.floor(t/86400),r=Math.floor((t-3600*n*24)/3600),i=Math.floor((t-3600*n*24-3600*r)/60),s=t-3600*n*24-3600*r-60*i;let o="";return n&&(o+=hy(n)+"d:"),r&&(o+=hy(r)+"h:"),o+=hy(i)+"m:"+hy(s)+"s",o}function hy(e){return 0===e?"00":e>=10?e.toString():"0"+e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function dy({url:e,body:t},n){const r={"Content-Type":"application/json"},i=n.getImmediate({optional:!0});i&&(r["X-Firebase-Client"]=i.getPlatformInfoString());const s={method:"POST",body:JSON.stringify(t),headers:r};let o,a;try{o=await fetch(e,s)}catch(e){throw ay.create("fetch-network-error",{originalErrorMessage:e.message})}if(200!==o.status)throw ay.create("fetch-status-error",{httpStatus:o.status});try{a=await o.json()}catch(e){throw ay.create("fetch-parse-error",{originalErrorMessage:e.message})}const c=a.ttl.match(/^([\d.]+)(s)$/);if(!c||!c[2]||isNaN(Number(c[1])))throw ay.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${a.ttl}`});const l=1e3*Number(c[1]),u=Date.now();return{token:a.attestationToken,expireTimeMillis:u+l,issuedAtTimeMillis:u}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
const fy="firebase-app-check-store",py="debug-token";let my=null;function gy(){return my||(my=new Promise(((e,t)=>{try{const n=indexedDB.open("firebase-app-check-database",1);n.onsuccess=t=>{e(t.target.result)},n.onerror=e=>{var n;t(ay.create("storage-open",{originalErrorMessage:null===(n=e.target.error)||void 0===n?void 0:n.message}))},n.onupgradeneeded=e=>{const t=e.target.result;if(0===e.oldVersion)t.createObjectStore(fy,{keyPath:"compositeKey"})}}catch(e){t(ay.create("storage-open",{originalErrorMessage:e.message}))}})),my)}async function yy(e,t){const n=(await gy()).transaction(fy,"readwrite"),r=n.objectStore(fy).put({compositeKey:e,value:t});return new Promise(((e,t)=>{r.onsuccess=t=>{e()},n.onerror=e=>{var n;t(ay.create("storage-set",{originalErrorMessage:null===(n=e.target.error)||void 0===n?void 0:n.message}))}}))}async function vy(e){const t=(await gy()).transaction(fy,"readonly"),n=t.objectStore(fy).get(e);return new Promise(((e,r)=>{n.onsuccess=t=>{const n=t.target.result;e(n?n.value:void 0)},t.onerror=e=>{var t;r(ay.create("storage-get",{originalErrorMessage:null===(t=e.target.error)||void 0===t?void 0:t.message}))}}))}function wy(e){return`${e.options.appId}-${e.name}`}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const by=new Yt("@firebase/app-check");
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function ky(e){if(xt()){let t;try{t=await function(e){return vy(wy(e))}(e)}catch(e){by.warn(`Failed to read token from IndexedDB. Error: ${e}`)}return t}}function _y(e,t){return xt()?function(e,t){return yy(wy(e),t)}(e,t).catch((e=>{by.warn(`Failed to write token to IndexedDB. Error: ${e}`)})):Promise.resolve()}async function Ty(){let e;try{e=await vy(py)}catch(e){}if(e)return e;{const e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(e=>{const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}));return(t=e,yy(py,t)).catch((e=>by.warn(`Failed to persist debug token to IndexedDB. Error: ${e}`))),e}var t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ey(){return ty().enabled}async function Iy(){const e=ty();if(e.enabled&&e.token)return e.token.promise;throw Error("\n            Can't get debug token in production mode.\n        ")}function Sy(){const e=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}
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
     */(),t=ty();if(t.initialized=!0,"string"!=typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN&&!0!==e.FIREBASE_APPCHECK_DEBUG_TOKEN)return;t.enabled=!0;const n=new Tt;t.token=n,"string"==typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN?n.resolve(e.FIREBASE_APPCHECK_DEBUG_TOKEN):n.resolve(Ty())}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Ay={error:"UNKNOWN_ERROR"};function Cy(e){return _t.encodeString(JSON.stringify(e),!1)}async function xy(e,t=!1){const n=e.app;ly(n);const r=Zg(n);let i,s=r.token;if(!s){const e=await r.cachedTokenPromise;e&&Oy(e)&&(s=e)}if(!t&&s&&Oy(s))return{token:s.token};let o,a=!1;if(Ey()){r.exchangeTokenPromise||(r.exchangeTokenPromise=dy(function(e,t){const{projectId:n,appId:r,apiKey:i}=e.options;return{url:`${ny}/projects/${n}/apps/${r}:exchangeDebugToken?key=${i}`,body:{debug_token:t}}}(n,await Iy()),e.platformLoggerProvider).then((e=>(r.exchangeTokenPromise=void 0,e))),a=!0);const t=await r.exchangeTokenPromise;return await _y(n,t),ey(n,Object.assign(Object.assign({},r),{token:t})),{token:t.token}}try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().then((e=>(r.exchangeTokenPromise=void 0,e))),a=!0),s=await r.exchangeTokenPromise}catch(e){"appCheck/throttled"===e.code?by.warn(e.message):by.error(e),i=e}return s?(o={token:s.token},ey(n,Object.assign(Object.assign({},r),{token:s})),await _y(n,s)):o=function(e){return{token:Cy(Ay),error:e}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(i),a&&Dy(n,o),o}function $y(e,t,n,r){const{app:i}=e,s=Zg(i),o={next:n,error:r,type:t};if(ey(i,Object.assign(Object.assign({},s),{tokenObservers:[...s.tokenObservers,o]})),s.token&&Oy(s.token)){const t=s.token;Promise.resolve().then((()=>{n({token:t.token}),Ny(e)})).catch((()=>{}))}s.cachedTokenPromise.then((()=>Ny(e)))}function Ry(e,t){const n=Zg(e),r=n.tokenObservers.filter((e=>e.next!==t));0===r.length&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),ey(e,Object.assign(Object.assign({},n),{tokenObservers:r}))}function Ny(e){const{app:t}=e,n=Zg(t);let r=n.tokenRefresher;r||(r=function(e){const{app:t}=e;return new oy((async()=>{let n;if(n=Zg(t).token?await xy(e,!0):await xy(e),n.error)throw n.error}),(()=>!0),(()=>{const e=Zg(t);if(e.token){let t=e.token.issuedAtTimeMillis+.5*(e.token.expireTimeMillis-e.token.issuedAtTimeMillis)+3e5;const n=e.token.expireTimeMillis-3e5;return t=Math.min(t,n),Math.max(0,t-Date.now())}return 0}),ry,iy)}(e),ey(t,Object.assign(Object.assign({},n),{tokenRefresher:r}))),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function Dy(e,t){const n=Zg(e).tokenObservers;for(const e of n)try{"EXTERNAL"===e.type&&null!=t.error?e.error(t.error):e.next(t)}catch(e){}}function Oy(e){return e.expireTimeMillis-Date.now()>0}class Py{constructor(e,t){this.app=e,this.platformLoggerProvider=t}_delete(){const{tokenObservers:e}=Zg(this.app);for(const t of e)Ry(this.app,t.next);return Promise.resolve()}}const My="https://www.google.com/recaptcha/api.js";function Ly(e,t){const n=Zg(e),r=new Tt;ey(e,Object.assign(Object.assign({},n),{reCAPTCHAState:{initialized:r}}));const i=function(e){const t=`fire_app_check_${e.name}`,n=document.createElement("div");return n.id=t,n.style.display="none",document.body.appendChild(n),t}(e),s=cy(!1);return s?Fy(e,t,s,i,r):function(e){const t=document.createElement("script");t.src=My,t.onload=e,document.head.appendChild(t)}
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
     */((()=>{const n=cy(!1);if(!n)throw new Error("no recaptcha");Fy(e,t,n,i,r)})),r.promise}function Fy(e,t,n,r,i){n.ready((()=>{!function(e,t,n,r){const i=n.render(r,{sitekey:t,size:"invisible"}),s=Zg(e);ey(e,Object.assign(Object.assign({},s),{reCAPTCHAState:Object.assign(Object.assign({},s.reCAPTCHAState),{widgetId:i})}))}(e,t,n,r),i.resolve(n)}))}class Uy{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e;!function(e){if(e&&Date.now()-e.allowRequestsAfter<=0)throw ay.create("throttled",{time:uy(e.allowRequestsAfter-Date.now()),httpStatus:e.httpStatus})}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(this._throttleData);const t=await async function(e){ly(e);const t=Zg(e).reCAPTCHAState,n=await t.initialized.promise;return new Promise(((t,r)=>{const i=Zg(e).reCAPTCHAState;n.ready((()=>{t(n.execute(i.widgetId,{action:"fire_app_check"}))}))}))}(this._app).catch((e=>{throw ay.create("recaptcha-error")}));let n;try{n=await dy(function(e,t){const{projectId:n,appId:r,apiKey:i}=e.options;return{url:`${ny}/projects/${n}/apps/${r}:exchangeRecaptchaToken?key=${i}`,body:{recaptcha_token:t}}}(this._app,t),this._platformLoggerProvider)}catch(t){throw"fetch-status-error"===t.code?(this._throttleData=function(e,t){if(404===e||403===e)return{backoffCount:1,allowRequestsAfter:Date.now()+sy,httpStatus:e};{const n=t?t.backoffCount:0,r=Bt(n,1e3,2);return{backoffCount:n+1,allowRequestsAfter:Date.now()+r,httpStatus:e}}}(Number(null===(e=t.customData)||void 0===e?void 0:e.httpStatus),this._throttleData),ay.create("throttled",{time:uy(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):t}return this._throttleData=null,n}initialize(e){this._app=e,this._platformLoggerProvider=ln(e,"platform-logger"),Ly(e,this._siteKey).catch((()=>{}))}isEqual(e){return e instanceof Uy&&this._siteKey===e._siteKey}}function By(e=fn(),t){const n=ln(e=jt(e),"app-check");if(ty().initialized||Sy(),Ey()&&Iy().then((e=>console.log(`App Check debug token: ${e}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`))),n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(i.isTokenAutoRefreshEnabled===t.isTokenAutoRefreshEnabled&&i.provider.isEqual(t.provider))return r;throw ay.create("already-initialized",{appName:e.name})}const r=n.initialize({options:t});return function(e,t,n){const r=Zg(e),i=Object.assign(Object.assign({},r),{activated:!0});i.provider=t,i.cachedTokenPromise=ky(e).then((t=>(t&&Oy(t)&&(ey(e,Object.assign(Object.assign({},Zg(e)),{token:t})),Dy(e,{token:t.token})),t))),i.isTokenAutoRefreshEnabled=void 0===n?e.automaticDataCollectionEnabled:n,ey(e,i),i.provider.initialize(e)}(e,t.provider,t.isTokenAutoRefreshEnabled),Zg(e).isTokenAutoRefreshEnabled&&$y(r,"INTERNAL",(()=>{})),r}const jy="app-check-internal";cn(new Vt("app-check",(e=>function(e,t){return new Py(e,t)}(e.getProvider("app").getImmediate(),e.getProvider("platform-logger"))),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider(jy).initialize()}))),cn(new Vt(jy,(e=>function(e){return{getToken:t=>xy(e,t),addTokenListener:t=>$y(e,"INTERNAL",t),removeTokenListener:t=>Ry(e.app,t)}}(e.getProvider("app-check").getImmediate())),"PUBLIC").setInstantiationMode("EXPLICIT")),pn("@firebase/app-check","0.5.2");var Vy=vn((function(e){!function(){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&n.rotl(e,8)|4278255360&n.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=n.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],n=0,r=0;n<e.length;n++,r+=8)t[r>>>5]|=e[n]<<24-r%32;return t},wordsToBytes:function(e){for(var t=[],n=0;n<32*e.length;n+=8)t.push(e[n>>>5]>>>24-n%32&255);return t},bytesToHex:function(e){for(var t=[],n=0;n<e.length;n++)t.push((e[n]>>>4).toString(16)),t.push((15&e[n]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],n=0;n<e.length;n+=2)t.push(parseInt(e.substr(n,2),16));return t},bytesToBase64:function(e){for(var n=[],r=0;r<e.length;r+=3)for(var i=e[r]<<16|e[r+1]<<8|e[r+2],s=0;s<4;s++)8*r+6*s<=8*e.length?n.push(t.charAt(i>>>6*(3-s)&63)):n.push("=");return n.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var n=[],r=0,i=0;r<e.length;i=++r%4)0!=i&&n.push((t.indexOf(e.charAt(r-1))&Math.pow(2,-2*i+8)-1)<<2*i|t.indexOf(e.charAt(r))>>>6-2*i);return n}};e.exports=n}()})),zy={utf8:{stringToBytes:function(e){return zy.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(zy.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t},bytesToString:function(e){for(var t=[],n=0;n<e.length;n++)t.push(String.fromCharCode(e[n]));return t.join("")}}},qy=zy,Ky=function(e){return null!=e&&(Hy(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&Hy(e.slice(0,0))}(e)||!!e._isBuffer)};function Hy(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}var Wy=vn((function(e){!function(){var t=Vy,n=qy.utf8,r=Ky,i=qy.bin,s=function(e,o){e.constructor==String?e=o&&"binary"===o.encoding?i.stringToBytes(e):n.stringToBytes(e):r(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||e.constructor===Uint8Array||(e=e.toString());for(var a=t.bytesToWords(e),c=8*e.length,l=1732584193,u=-271733879,h=-1732584194,d=271733878,f=0;f<a.length;f++)a[f]=16711935&(a[f]<<8|a[f]>>>24)|4278255360&(a[f]<<24|a[f]>>>8);a[c>>>5]|=128<<c%32,a[14+(c+64>>>9<<4)]=c;var p=s._ff,m=s._gg,g=s._hh,y=s._ii;for(f=0;f<a.length;f+=16){var v=l,w=u,b=h,k=d;l=p(l,u,h,d,a[f+0],7,-680876936),d=p(d,l,u,h,a[f+1],12,-389564586),h=p(h,d,l,u,a[f+2],17,606105819),u=p(u,h,d,l,a[f+3],22,-1044525330),l=p(l,u,h,d,a[f+4],7,-176418897),d=p(d,l,u,h,a[f+5],12,1200080426),h=p(h,d,l,u,a[f+6],17,-1473231341),u=p(u,h,d,l,a[f+7],22,-45705983),l=p(l,u,h,d,a[f+8],7,1770035416),d=p(d,l,u,h,a[f+9],12,-1958414417),h=p(h,d,l,u,a[f+10],17,-42063),u=p(u,h,d,l,a[f+11],22,-1990404162),l=p(l,u,h,d,a[f+12],7,1804603682),d=p(d,l,u,h,a[f+13],12,-40341101),h=p(h,d,l,u,a[f+14],17,-1502002290),l=m(l,u=p(u,h,d,l,a[f+15],22,1236535329),h,d,a[f+1],5,-165796510),d=m(d,l,u,h,a[f+6],9,-1069501632),h=m(h,d,l,u,a[f+11],14,643717713),u=m(u,h,d,l,a[f+0],20,-373897302),l=m(l,u,h,d,a[f+5],5,-701558691),d=m(d,l,u,h,a[f+10],9,38016083),h=m(h,d,l,u,a[f+15],14,-660478335),u=m(u,h,d,l,a[f+4],20,-405537848),l=m(l,u,h,d,a[f+9],5,568446438),d=m(d,l,u,h,a[f+14],9,-1019803690),h=m(h,d,l,u,a[f+3],14,-187363961),u=m(u,h,d,l,a[f+8],20,1163531501),l=m(l,u,h,d,a[f+13],5,-1444681467),d=m(d,l,u,h,a[f+2],9,-51403784),h=m(h,d,l,u,a[f+7],14,1735328473),l=g(l,u=m(u,h,d,l,a[f+12],20,-1926607734),h,d,a[f+5],4,-378558),d=g(d,l,u,h,a[f+8],11,-2022574463),h=g(h,d,l,u,a[f+11],16,1839030562),u=g(u,h,d,l,a[f+14],23,-35309556),l=g(l,u,h,d,a[f+1],4,-1530992060),d=g(d,l,u,h,a[f+4],11,1272893353),h=g(h,d,l,u,a[f+7],16,-155497632),u=g(u,h,d,l,a[f+10],23,-1094730640),l=g(l,u,h,d,a[f+13],4,681279174),d=g(d,l,u,h,a[f+0],11,-358537222),h=g(h,d,l,u,a[f+3],16,-722521979),u=g(u,h,d,l,a[f+6],23,76029189),l=g(l,u,h,d,a[f+9],4,-640364487),d=g(d,l,u,h,a[f+12],11,-421815835),h=g(h,d,l,u,a[f+15],16,530742520),l=y(l,u=g(u,h,d,l,a[f+2],23,-995338651),h,d,a[f+0],6,-198630844),d=y(d,l,u,h,a[f+7],10,1126891415),h=y(h,d,l,u,a[f+14],15,-1416354905),u=y(u,h,d,l,a[f+5],21,-57434055),l=y(l,u,h,d,a[f+12],6,1700485571),d=y(d,l,u,h,a[f+3],10,-1894986606),h=y(h,d,l,u,a[f+10],15,-1051523),u=y(u,h,d,l,a[f+1],21,-2054922799),l=y(l,u,h,d,a[f+8],6,1873313359),d=y(d,l,u,h,a[f+15],10,-30611744),h=y(h,d,l,u,a[f+6],15,-1560198380),u=y(u,h,d,l,a[f+13],21,1309151649),l=y(l,u,h,d,a[f+4],6,-145523070),d=y(d,l,u,h,a[f+11],10,-1120210379),h=y(h,d,l,u,a[f+2],15,718787259),u=y(u,h,d,l,a[f+9],21,-343485551),l=l+v>>>0,u=u+w>>>0,h=h+b>>>0,d=d+k>>>0}return t.endian([l,u,h,d])};s._ff=function(e,t,n,r,i,s,o){var a=e+(t&n|~t&r)+(i>>>0)+o;return(a<<s|a>>>32-s)+t},s._gg=function(e,t,n,r,i,s,o){var a=e+(t&r|n&~r)+(i>>>0)+o;return(a<<s|a>>>32-s)+t},s._hh=function(e,t,n,r,i,s,o){var a=e+(t^n^r)+(i>>>0)+o;return(a<<s|a>>>32-s)+t},s._ii=function(e,t,n,r,i,s,o){var a=e+(n^(t|~r))+(i>>>0)+o;return(a<<s|a>>>32-s)+t},s._blocksize=16,s._digestsize=16,e.exports=function(e,n){if(null==e)throw new Error("Illegal argument "+e);var r=t.wordsToBytes(s(e,n));return n&&n.asBytes?r:n&&n.asString?i.bytesToString(r):t.bytesToHex(r)}}()})),Gy=vn((function(e,t){!function(t,n){e.exports=n()}(0,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=f(n(1)),s=f(n(2)),o=f(n(8)),a=f(n(9)),c=f(n(10)),l=f(n(11)),u=f(n(16)),h=f(n(17)),d=f(n(18));function f(e){return e&&e.__esModule?e:{default:e}}var p=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t=t||{},this._name="secure-ls",this.utils=i.default,this.constants=s.default,this.Base64=a.default,this.LZString=c.default,this.AES=l.default,this.DES=u.default,this.RABBIT=h.default,this.RC4=d.default,this.enc=o.default,this.config={isCompression:!0,encodingType:s.default.EncrytionTypes.BASE64,encryptionSecret:t.encryptionSecret,encryptionNamespace:t.encryptionNamespace},this.config.isCompression=void 0===t.isCompression||t.isCompression,this.config.encodingType=void 0!==t.encodingType||""===t.encodingType?t.encodingType.toLowerCase():s.default.EncrytionTypes.BASE64,this.ls=localStorage,this.init()}return r(e,[{key:"init",value:function(){var e=this.getMetaData();this.WarningEnum=this.constants.WarningEnum,this.WarningTypes=this.constants.WarningTypes,this.EncrytionTypes=this.constants.EncrytionTypes,this._isBase64=this._isBase64EncryptionType(),this._isAES=this._isAESEncryptionType(),this._isDES=this._isDESEncryptionType(),this._isRabbit=this._isRabbitEncryptionType(),this._isRC4=this._isRC4EncryptionType(),this._isCompression=this._isDataCompressionEnabled(),this.utils.allKeys=e.keys||this.resetAllKeys()}},{key:"_isBase64EncryptionType",value:function(){return a.default&&(void 0===this.config.encodingType||this.config.encodingType===this.constants.EncrytionTypes.BASE64)}},{key:"_isAESEncryptionType",value:function(){return l.default&&this.config.encodingType===this.constants.EncrytionTypes.AES}},{key:"_isDESEncryptionType",value:function(){return u.default&&this.config.encodingType===this.constants.EncrytionTypes.DES}},{key:"_isRabbitEncryptionType",value:function(){return h.default&&this.config.encodingType===this.constants.EncrytionTypes.RABBIT}},{key:"_isRC4EncryptionType",value:function(){return d.default&&this.config.encodingType===this.constants.EncrytionTypes.RC4}},{key:"_isDataCompressionEnabled",value:function(){return this.config.isCompression}},{key:"getEncryptionSecret",value:function(e){var t=this.getMetaData(),n=this.utils.getObjectFromKey(t.keys,e);n&&(this._isAES||this._isDES||this._isRabbit||this._isRC4)&&(void 0===this.config.encryptionSecret?(this.utils.encryptionSecret=n.s,this.utils.encryptionSecret||(this.utils.encryptionSecret=this.utils.generateSecretKey(),this.setMetaData())):this.utils.encryptionSecret=this.config.encryptionSecret||n.s||"")}},{key:"get",value:function(e,t){var n,r="",i="",s=void 0,f=void 0;if(!this.utils.is(e))return this.utils.warn(this.WarningEnum.KEY_NOT_PROVIDED),i;if(!(n=this.getDataFromLocalStorage(e)))return i;s=n,(this._isCompression||t)&&(s=c.default.decompressFromUTF16(n)),r=s,this._isBase64||t?r=a.default.decode(s):(this.getEncryptionSecret(e),this._isAES?f=l.default.decrypt(s.toString(),this.utils.encryptionSecret):this._isDES?f=u.default.decrypt(s.toString(),this.utils.encryptionSecret):this._isRabbit?f=h.default.decrypt(s.toString(),this.utils.encryptionSecret):this._isRC4&&(f=d.default.decrypt(s.toString(),this.utils.encryptionSecret)),f&&(r=f.toString(o.default._Utf8)));try{i=JSON.parse(r)}catch(e){throw new Error("Could not parse JSON")}return i}},{key:"getDataFromLocalStorage",value:function(e){return this.ls.getItem(e,!0)}},{key:"getAllKeys",value:function(){var e=this.getMetaData();return this.utils.extractKeyNames(e)||[]}},{key:"set",value:function(e,t){var n;this.utils.is(e)?(this.getEncryptionSecret(e),String(e)!==String(this.utils.metaKey)&&(this.utils.isKeyPresent(e)||(this.utils.addToKeysList(e),this.setMetaData())),n=this.processData(t),this.setDataToLocalStorage(e,n)):this.utils.warn(this.WarningEnum.KEY_NOT_PROVIDED)}},{key:"setDataToLocalStorage",value:function(e,t){this.ls.setItem(e,t)}},{key:"remove",value:function(e){this.utils.is(e)?e===this.utils.metaKey&&this.getAllKeys().length?this.utils.warn(this.WarningEnum.META_KEY_REMOVE):(this.utils.isKeyPresent(e)&&(this.utils.removeFromKeysList(e),this.setMetaData()),this.ls.removeItem(e)):this.utils.warn(this.WarningEnum.KEY_NOT_PROVIDED)}},{key:"removeAll",value:function(){var e,t=void 0;for(e=this.getAllKeys(),t=0;t<e.length;t++)this.ls.removeItem(e[t]);this.ls.removeItem(this.utils.metaKey),this.resetAllKeys()}},{key:"clear",value:function(){this.ls.clear(),this.resetAllKeys()}},{key:"resetAllKeys",value:function(){return this.utils.allKeys=[],[]}},{key:"processData",value:function(e,t){if(null==e||""===e)return"";var n=void 0,r=void 0,i=void 0;try{n=JSON.stringify(e)}catch(e){throw new Error("Could not stringify data.")}return r=n,this._isBase64||t?r=a.default.encode(n):(this._isAES?r=l.default.encrypt(n,this.utils.encryptionSecret):this._isDES?r=u.default.encrypt(n,this.utils.encryptionSecret):this._isRabbit?r=h.default.encrypt(n,this.utils.encryptionSecret):this._isRC4&&(r=d.default.encrypt(n,this.utils.encryptionSecret)),r=r&&r.toString()),i=r,(this._isCompression||t)&&(i=c.default.compressToUTF16(r)),i}},{key:"setMetaData",value:function(){var e=this.processData({keys:this.utils.allKeys},!0);this.setDataToLocalStorage(this.getMetaKey(),e)}},{key:"getMetaData",value:function(){return this.get(this.getMetaKey(),!0)||{}}},{key:"getMetaKey",value:function(){return this.utils.metaKey+(this.config.encryptionNamespace?"__"+this.config.encryptionNamespace:"")}}]),e}();t.default=p,e.exports=t.default},function(e,t,n){var r=o(n(2)),i=o(n(3)),s=o(n(4));function o(e){return e&&e.__esModule?e:{default:e}}var a={metaKey:"_secure__ls__metadata",encryptionSecret:"",secretPhrase:"s3cr3t$#@135^&*246",allKeys:[],is:function(e){return!!e},warn:function(e){e=e||r.default.WarningEnum.DEFAULT_TEXT,console.warn(r.default.WarningTypes[e])},generateSecretKey:function(){var e=i.default.random(16),t=(0,s.default)(this.secretPhrase,e,{keySize:4});return t&&t.toString()},getObjectFromKey:function(e,t){if(!e||!e.length)return{};var n=void 0,r={};for(n=0;n<e.length;n++)if(e[n].k===t){r=e[n];break}return r},extractKeyNames:function(e){return e&&e.keys&&e.keys.length?e.keys.map((function(e){return e.k})):[]},getAllKeys:function(){return this.allKeys},isKeyPresent:function(e){for(var t=!1,n=0;n<this.allKeys.length;n++)if(String(this.allKeys[n].k)===String(e)){t=!0;break}return t},addToKeysList:function(e){this.allKeys.push({k:e,s:this.encryptionSecret})},removeFromKeysList:function(e){var t=void 0,n=-1;for(t=0;t<this.allKeys.length;t++)if(this.allKeys[t].k===e){n=t;break}return-1!==n&&this.allKeys.splice(n,1),n}};e.exports=a},function(e,t){var n={KEY_NOT_PROVIDED:"keyNotProvided",META_KEY_REMOVE:"metaKeyRemove",DEFAULT_TEXT:"defaultText"},r={};r[n.KEY_NOT_PROVIDED]="Secure LS: Key not provided. Aborting operation!",r[n.META_KEY_REMOVE]="Secure LS: Meta key can not be removed\nunless all keys created by Secure LS are removed!",r[n.DEFAULT_TEXT]="Unexpected output";var i={WarningEnum:n,WarningTypes:r,EncrytionTypes:{BASE64:"base64",AES:"aes",DES:"des",RABBIT:"rabbit",RC4:"rc4"}};e.exports=i},function(e,t){var n={random:function(e){for(var t,n=[],r=function(e){var t=987654321,n=4294967295;return function(){var r=((t=36969*(65535&t)+(t>>16)&n)<<16)+(e=18e3*(65535&e)+(e>>16)&n)&n;return r/=4294967296,(r+=.5)*(Math.random()>.5?1:-1)}},i=0;i<e;i+=4){var s=r(4294967296*(t||Math.random()));t=987654071*s(),n.push(4294967296*s()|0)}return new this.Set(n,e)},Set:function(e,t){e=this.words=e||[],this.sigBytes=void 0!==t?t:8*e.length}};e.exports=n},function(e,t,n){var r;e.exports=(r=n(5),n(6),n(7),function(){var e=r,t=e.lib,n=t.Base,i=t.WordArray,s=e.algo,o=s.SHA1,a=s.HMAC,c=s.PBKDF2=n.extend({cfg:n.extend({keySize:4,hasher:o,iterations:1}),init:function(e){this.cfg=this.cfg.extend(e)},compute:function(e,t){for(var n=this.cfg,r=a.create(n.hasher,e),s=i.create(),o=i.create([1]),c=s.words,l=o.words,u=n.keySize,h=n.iterations;c.length<u;){var d=r.update(t).finalize(o);r.reset();for(var f=d.words,p=f.length,m=d,g=1;g<h;g++){m=r.finalize(m),r.reset();for(var y=m.words,v=0;v<p;v++)f[v]^=y[v]}s.concat(d),l[0]++}return s.sigBytes=4*u,s}});e.PBKDF2=function(e,t,n){return c.create(n).compute(e,t)}}(),r.PBKDF2)},function(e,t,n){var r;e.exports=(r=r||function(e,t){var n=Object.create||function(){function e(){}return function(t){var n;return e.prototype=t,n=new e,e.prototype=null,n}}(),r={},i=r.lib={},s=i.Base={extend:function(e){var t=n(this);return e&&t.mixIn(e),t.hasOwnProperty("init")&&this.init!==t.init||(t.init=function(){t.$super.init.apply(this,arguments)}),t.init.prototype=t,t.$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}},o=i.WordArray=s.extend({init:function(e,n){e=this.words=e||[],this.sigBytes=n!=t?n:4*e.length},toString:function(e){return(e||c).stringify(this)},concat:function(e){var t=this.words,n=e.words,r=this.sigBytes,i=e.sigBytes;if(this.clamp(),r%4)for(var s=0;s<i;s++){var o=n[s>>>2]>>>24-s%4*8&255;t[r+s>>>2]|=o<<24-(r+s)%4*8}else for(s=0;s<i;s+=4)t[r+s>>>2]=n[s>>>2];return this.sigBytes+=i,this},clamp:function(){var t=this.words,n=this.sigBytes;t[n>>>2]&=4294967295<<32-n%4*8,t.length=e.ceil(n/4)},clone:function(){var e=s.clone.call(this);return e.words=this.words.slice(0),e},random:function(t){for(var n,r=[],i=function(t){t=t;var n=987654321,r=4294967295;return function(){var i=((n=36969*(65535&n)+(n>>16)&r)<<16)+(t=18e3*(65535&t)+(t>>16)&r)&r;return i/=4294967296,(i+=.5)*(e.random()>.5?1:-1)}},s=0;s<t;s+=4){var a=i(4294967296*(n||e.random()));n=987654071*a(),r.push(4294967296*a()|0)}return new o.init(r,t)}}),a=r.enc={},c=a.Hex={stringify:function(e){for(var t=e.words,n=e.sigBytes,r=[],i=0;i<n;i++){var s=t[i>>>2]>>>24-i%4*8&255;r.push((s>>>4).toString(16)),r.push((15&s).toString(16))}return r.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r+=2)n[r>>>3]|=parseInt(e.substr(r,2),16)<<24-r%8*4;return new o.init(n,t/2)}},l=a.Latin1={stringify:function(e){for(var t=e.words,n=e.sigBytes,r=[],i=0;i<n;i++){var s=t[i>>>2]>>>24-i%4*8&255;r.push(String.fromCharCode(s))}return r.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r++)n[r>>>2]|=(255&e.charCodeAt(r))<<24-r%4*8;return new o.init(n,t)}},u=a.Utf8={stringify:function(e){try{return decodeURIComponent(escape(l.stringify(e)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(e){return l.parse(unescape(encodeURIComponent(e)))}},h=i.BufferedBlockAlgorithm=s.extend({reset:function(){this._data=new o.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=u.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(t){var n=this._data,r=n.words,i=n.sigBytes,s=this.blockSize,a=i/(4*s),c=(a=t?e.ceil(a):e.max((0|a)-this._minBufferSize,0))*s,l=e.min(4*c,i);if(c){for(var u=0;u<c;u+=s)this._doProcessBlock(r,u);var h=r.splice(0,c);n.sigBytes-=l}return new o.init(h,l)},clone:function(){var e=s.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0});i.Hasher=h.extend({cfg:s.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){h.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(t,n){return new e.init(n).finalize(t)}},_createHmacHelper:function(e){return function(t,n){return new d.HMAC.init(e,n).finalize(t)}}});var d=r.algo={};return r}(Math),r)},function(e,t,n){var r;e.exports=(r=n(5),function(){var e=r,t=e.lib,n=t.WordArray,i=t.Hasher,s=e.algo,o=[],a=s.SHA1=i.extend({_doReset:function(){this._hash=new n.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(e,t){for(var n=this._hash.words,r=n[0],i=n[1],s=n[2],a=n[3],c=n[4],l=0;l<80;l++){if(l<16)o[l]=0|e[t+l];else{var u=o[l-3]^o[l-8]^o[l-14]^o[l-16];o[l]=u<<1|u>>>31}var h=(r<<5|r>>>27)+c+o[l];h+=l<20?1518500249+(i&s|~i&a):l<40?1859775393+(i^s^a):l<60?(i&s|i&a|s&a)-1894007588:(i^s^a)-899497514,c=a,a=s,s=i<<30|i>>>2,i=r,r=h}n[0]=n[0]+r|0,n[1]=n[1]+i|0,n[2]=n[2]+s|0,n[3]=n[3]+a|0,n[4]=n[4]+c|0},_doFinalize:function(){var e=this._data,t=e.words,n=8*this._nDataBytes,r=8*e.sigBytes;return t[r>>>5]|=128<<24-r%32,t[14+(r+64>>>9<<4)]=Math.floor(n/4294967296),t[15+(r+64>>>9<<4)]=n,e.sigBytes=4*t.length,this._process(),this._hash},clone:function(){var e=i.clone.call(this);return e._hash=this._hash.clone(),e}});e.SHA1=i._createHelper(a),e.HmacSHA1=i._createHmacHelper(a)}(),r.SHA1)},function(e,t,n){var r;e.exports=(r=n(5),void function(){var e=r,t=e.lib.Base,n=e.enc.Utf8;e.algo.HMAC=t.extend({init:function(e,t){e=this._hasher=new e.init,"string"==typeof t&&(t=n.parse(t));var r=e.blockSize,i=4*r;t.sigBytes>i&&(t=e.finalize(t)),t.clamp();for(var s=this._oKey=t.clone(),o=this._iKey=t.clone(),a=s.words,c=o.words,l=0;l<r;l++)a[l]^=1549556828,c[l]^=909522486;s.sigBytes=o.sigBytes=i,this.reset()},reset:function(){var e=this._hasher;e.reset(),e.update(this._iKey)},update:function(e){return this._hasher.update(e),this},finalize:function(e){var t=this._hasher,n=t.finalize(e);return t.reset(),t.finalize(this._oKey.clone().concat(n))}})}())},function(e,t){var n={};n.Latin1={stringify:function(e){var t=e.words,n=e.sigBytes,r=[],i=void 0,s=void 0;for(i=0;i<n;i++)s=t[i>>>2]>>>24-i%4*8&255,r.push(String.fromCharCode(s));return r.join("")}},n._Utf8={stringify:function(e){try{return decodeURIComponent(escape(n.Latin1.stringify(e)))}catch(e){throw new Error("Malformed UTF-8 data")}}},e.exports=n},function(e,t){var n={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="",r=void 0,i=void 0,s=void 0,o=void 0,a=void 0,c=void 0,l=void 0,u=0;for(e=n._utf8Encode(e);u<e.length;)o=(r=e.charCodeAt(u++))>>2,a=(3&r)<<4|(i=e.charCodeAt(u++))>>4,c=(15&i)<<2|(s=e.charCodeAt(u++))>>6,l=63&s,isNaN(i)?c=l=64:isNaN(s)&&(l=64),t=t+this._keyStr.charAt(o)+this._keyStr.charAt(a)+this._keyStr.charAt(c)+this._keyStr.charAt(l);return t},decode:function(e){var t="",r=void 0,i=void 0,s=void 0,o=void 0,a=void 0,c=void 0,l=0;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");l<e.length;)r=this._keyStr.indexOf(e.charAt(l++))<<2|(o=this._keyStr.indexOf(e.charAt(l++)))>>4,i=(15&o)<<4|(a=this._keyStr.indexOf(e.charAt(l++)))>>2,s=(3&a)<<6|(c=this._keyStr.indexOf(e.charAt(l++))),t+=String.fromCharCode(r),64!==a&&(t+=String.fromCharCode(i)),64!==c&&(t+=String.fromCharCode(s));return t=n._utf8Decode(t)},_utf8Encode:function(e){e=e.replace(/\r\n/g,"\n");for(var t="",n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t+=String.fromCharCode(r):r>127&&r<2048?(t+=String.fromCharCode(r>>6|192),t+=String.fromCharCode(63&r|128)):(t+=String.fromCharCode(r>>12|224),t+=String.fromCharCode(r>>6&63|128),t+=String.fromCharCode(63&r|128))}return t},_utf8Decode:function(e){var t="",n=0,r=void 0,i=void 0,s=void 0;for(r=i=0;n<e.length;)(r=e.charCodeAt(n))<128?(t+=String.fromCharCode(r),n++):r>191&&r<224?(i=e.charCodeAt(n+1),t+=String.fromCharCode((31&r)<<6|63&i),n+=2):(i=e.charCodeAt(n+1),s=e.charCodeAt(n+2),t+=String.fromCharCode((15&r)<<12|(63&i)<<6|63&s),n+=3);return t}};e.exports=n},function(e,t,n){var r,i=function(){var e=String.fromCharCode,t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",r={};function i(e,t){if(!r[e]){r[e]={};for(var n=0;n<e.length;n++)r[e][e.charAt(n)]=n}return r[e][t]}var s={compressToBase64:function(e){if(null==e)return"";var n=s._compress(e,6,(function(e){return t.charAt(e)}));switch(n.length%4){default:case 0:return n;case 1:return n+"===";case 2:return n+"==";case 3:return n+"="}},decompressFromBase64:function(e){return null==e?"":""==e?null:s._decompress(e.length,32,(function(n){return i(t,e.charAt(n))}))},compressToUTF16:function(t){return null==t?"":s._compress(t,15,(function(t){return e(t+32)}))+" "},decompressFromUTF16:function(e){return null==e?"":""==e?null:s._decompress(e.length,16384,(function(t){return e.charCodeAt(t)-32}))},compressToUint8Array:function(e){for(var t=s.compress(e),n=new Uint8Array(2*t.length),r=0,i=t.length;r<i;r++){var o=t.charCodeAt(r);n[2*r]=o>>>8,n[2*r+1]=o%256}return n},decompressFromUint8Array:function(t){if(null==t)return s.decompress(t);for(var n=new Array(t.length/2),r=0,i=n.length;r<i;r++)n[r]=256*t[2*r]+t[2*r+1];var o=[];return n.forEach((function(t){o.push(e(t))})),s.decompress(o.join(""))},compressToEncodedURIComponent:function(e){return null==e?"":s._compress(e,6,(function(e){return n.charAt(e)}))},decompressFromEncodedURIComponent:function(e){return null==e?"":""==e?null:(e=e.replace(/ /g,"+"),s._decompress(e.length,32,(function(t){return i(n,e.charAt(t))})))},compress:function(t){return s._compress(t,16,(function(t){return e(t)}))},_compress:function(e,t,n){if(null==e)return"";var r,i,s,o={},a={},c="",l="",u="",h=2,d=3,f=2,p=[],m=0,g=0;for(s=0;s<e.length;s+=1)if(c=e.charAt(s),Object.prototype.hasOwnProperty.call(o,c)||(o[c]=d++,a[c]=!0),l=u+c,Object.prototype.hasOwnProperty.call(o,l))u=l;else{if(Object.prototype.hasOwnProperty.call(a,u)){if(u.charCodeAt(0)<256){for(r=0;r<f;r++)m<<=1,g==t-1?(g=0,p.push(n(m)),m=0):g++;for(i=u.charCodeAt(0),r=0;r<8;r++)m=m<<1|1&i,g==t-1?(g=0,p.push(n(m)),m=0):g++,i>>=1}else{for(i=1,r=0;r<f;r++)m=m<<1|i,g==t-1?(g=0,p.push(n(m)),m=0):g++,i=0;for(i=u.charCodeAt(0),r=0;r<16;r++)m=m<<1|1&i,g==t-1?(g=0,p.push(n(m)),m=0):g++,i>>=1}0==--h&&(h=Math.pow(2,f),f++),delete a[u]}else for(i=o[u],r=0;r<f;r++)m=m<<1|1&i,g==t-1?(g=0,p.push(n(m)),m=0):g++,i>>=1;0==--h&&(h=Math.pow(2,f),f++),o[l]=d++,u=String(c)}if(""!==u){if(Object.prototype.hasOwnProperty.call(a,u)){if(u.charCodeAt(0)<256){for(r=0;r<f;r++)m<<=1,g==t-1?(g=0,p.push(n(m)),m=0):g++;for(i=u.charCodeAt(0),r=0;r<8;r++)m=m<<1|1&i,g==t-1?(g=0,p.push(n(m)),m=0):g++,i>>=1}else{for(i=1,r=0;r<f;r++)m=m<<1|i,g==t-1?(g=0,p.push(n(m)),m=0):g++,i=0;for(i=u.charCodeAt(0),r=0;r<16;r++)m=m<<1|1&i,g==t-1?(g=0,p.push(n(m)),m=0):g++,i>>=1}0==--h&&(h=Math.pow(2,f),f++),delete a[u]}else for(i=o[u],r=0;r<f;r++)m=m<<1|1&i,g==t-1?(g=0,p.push(n(m)),m=0):g++,i>>=1;0==--h&&(h=Math.pow(2,f),f++)}for(i=2,r=0;r<f;r++)m=m<<1|1&i,g==t-1?(g=0,p.push(n(m)),m=0):g++,i>>=1;for(;;){if(m<<=1,g==t-1){p.push(n(m));break}g++}return p.join("")},decompress:function(e){return null==e?"":""==e?null:s._decompress(e.length,32768,(function(t){return e.charCodeAt(t)}))},_decompress:function(t,n,r){var i,s,o,a,c,l,u,h=[],d=4,f=4,p=3,m="",g=[],y={val:r(0),position:n,index:1};for(i=0;i<3;i+=1)h[i]=i;for(o=0,c=Math.pow(2,2),l=1;l!=c;)a=y.val&y.position,y.position>>=1,0==y.position&&(y.position=n,y.val=r(y.index++)),o|=(a>0?1:0)*l,l<<=1;switch(o){case 0:for(o=0,c=Math.pow(2,8),l=1;l!=c;)a=y.val&y.position,y.position>>=1,0==y.position&&(y.position=n,y.val=r(y.index++)),o|=(a>0?1:0)*l,l<<=1;u=e(o);break;case 1:for(o=0,c=Math.pow(2,16),l=1;l!=c;)a=y.val&y.position,y.position>>=1,0==y.position&&(y.position=n,y.val=r(y.index++)),o|=(a>0?1:0)*l,l<<=1;u=e(o);break;case 2:return""}for(h[3]=u,s=u,g.push(u);;){if(y.index>t)return"";for(o=0,c=Math.pow(2,p),l=1;l!=c;)a=y.val&y.position,y.position>>=1,0==y.position&&(y.position=n,y.val=r(y.index++)),o|=(a>0?1:0)*l,l<<=1;switch(u=o){case 0:for(o=0,c=Math.pow(2,8),l=1;l!=c;)a=y.val&y.position,y.position>>=1,0==y.position&&(y.position=n,y.val=r(y.index++)),o|=(a>0?1:0)*l,l<<=1;h[f++]=e(o),u=f-1,d--;break;case 1:for(o=0,c=Math.pow(2,16),l=1;l!=c;)a=y.val&y.position,y.position>>=1,0==y.position&&(y.position=n,y.val=r(y.index++)),o|=(a>0?1:0)*l,l<<=1;h[f++]=e(o),u=f-1,d--;break;case 2:return g.join("")}if(0==d&&(d=Math.pow(2,p),p++),h[u])m=h[u];else{if(u!==f)return null;m=s+s.charAt(0)}g.push(m),h[f++]=s+m.charAt(0),s=m,0==--d&&(d=Math.pow(2,p),p++)}}};return s}();void 0===(r=function(){return i}.call(t,n,t,e))||(e.exports=r)},function(e,t,n){var r;e.exports=(r=n(5),n(12),n(13),n(14),n(15),function(){var e=r,t=e.lib.BlockCipher,n=e.algo,i=[],s=[],o=[],a=[],c=[],l=[],u=[],h=[],d=[],f=[];!function(){for(var e=[],t=0;t<256;t++)e[t]=t<128?t<<1:t<<1^283;var n=0,r=0;for(t=0;t<256;t++){var p=r^r<<1^r<<2^r<<3^r<<4;p=p>>>8^255&p^99,i[n]=p,s[p]=n;var m=e[n],g=e[m],y=e[g],v=257*e[p]^16843008*p;o[n]=v<<24|v>>>8,a[n]=v<<16|v>>>16,c[n]=v<<8|v>>>24,l[n]=v,v=16843009*y^65537*g^257*m^16843008*n,u[p]=v<<24|v>>>8,h[p]=v<<16|v>>>16,d[p]=v<<8|v>>>24,f[p]=v,n?(n=m^e[e[e[y^m]]],r^=e[e[r]]):n=r=1}}();var p=[0,1,2,4,8,16,32,64,128,27,54],m=n.AES=t.extend({_doReset:function(){if(!this._nRounds||this._keyPriorReset!==this._key){for(var e=this._keyPriorReset=this._key,t=e.words,n=e.sigBytes/4,r=4*((this._nRounds=n+6)+1),s=this._keySchedule=[],o=0;o<r;o++)if(o<n)s[o]=t[o];else{var a=s[o-1];o%n?n>6&&o%n==4&&(a=i[a>>>24]<<24|i[a>>>16&255]<<16|i[a>>>8&255]<<8|i[255&a]):(a=i[(a=a<<8|a>>>24)>>>24]<<24|i[a>>>16&255]<<16|i[a>>>8&255]<<8|i[255&a],a^=p[o/n|0]<<24),s[o]=s[o-n]^a}for(var c=this._invKeySchedule=[],l=0;l<r;l++)o=r-l,a=l%4?s[o]:s[o-4],c[l]=l<4||o<=4?a:u[i[a>>>24]]^h[i[a>>>16&255]]^d[i[a>>>8&255]]^f[i[255&a]]}},encryptBlock:function(e,t){this._doCryptBlock(e,t,this._keySchedule,o,a,c,l,i)},decryptBlock:function(e,t){var n=e[t+1];e[t+1]=e[t+3],e[t+3]=n,this._doCryptBlock(e,t,this._invKeySchedule,u,h,d,f,s),n=e[t+1],e[t+1]=e[t+3],e[t+3]=n},_doCryptBlock:function(e,t,n,r,i,s,o,a){for(var c=this._nRounds,l=e[t]^n[0],u=e[t+1]^n[1],h=e[t+2]^n[2],d=e[t+3]^n[3],f=4,p=1;p<c;p++){var m=r[l>>>24]^i[u>>>16&255]^s[h>>>8&255]^o[255&d]^n[f++],g=r[u>>>24]^i[h>>>16&255]^s[d>>>8&255]^o[255&l]^n[f++],y=r[h>>>24]^i[d>>>16&255]^s[l>>>8&255]^o[255&u]^n[f++],v=r[d>>>24]^i[l>>>16&255]^s[u>>>8&255]^o[255&h]^n[f++];l=m,u=g,h=y,d=v}m=(a[l>>>24]<<24|a[u>>>16&255]<<16|a[h>>>8&255]<<8|a[255&d])^n[f++],g=(a[u>>>24]<<24|a[h>>>16&255]<<16|a[d>>>8&255]<<8|a[255&l])^n[f++],y=(a[h>>>24]<<24|a[d>>>16&255]<<16|a[l>>>8&255]<<8|a[255&u])^n[f++],v=(a[d>>>24]<<24|a[l>>>16&255]<<16|a[u>>>8&255]<<8|a[255&h])^n[f++],e[t]=m,e[t+1]=g,e[t+2]=y,e[t+3]=v},keySize:8});e.AES=t._createHelper(m)}(),r.AES)},function(e,t,n){var r;e.exports=(r=n(5),function(){var e=r,t=e.lib.WordArray;function n(e,n,r){for(var i=[],s=0,o=0;o<n;o++)if(o%4){var a=r[e.charCodeAt(o-1)]<<o%4*2,c=r[e.charCodeAt(o)]>>>6-o%4*2;i[s>>>2]|=(a|c)<<24-s%4*8,s++}return t.create(i,s)}e.enc.Base64={stringify:function(e){var t=e.words,n=e.sigBytes,r=this._map;e.clamp();for(var i=[],s=0;s<n;s+=3)for(var o=(t[s>>>2]>>>24-s%4*8&255)<<16|(t[s+1>>>2]>>>24-(s+1)%4*8&255)<<8|t[s+2>>>2]>>>24-(s+2)%4*8&255,a=0;a<4&&s+.75*a<n;a++)i.push(r.charAt(o>>>6*(3-a)&63));var c=r.charAt(64);if(c)for(;i.length%4;)i.push(c);return i.join("")},parse:function(e){var t=e.length,r=this._map,i=this._reverseMap;if(!i){i=this._reverseMap=[];for(var s=0;s<r.length;s++)i[r.charCodeAt(s)]=s}var o=r.charAt(64);if(o){var a=e.indexOf(o);-1!==a&&(t=a)}return n(e,t,i)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),r.enc.Base64)},function(e,t,n){var r;e.exports=(r=n(5),function(e){var t=r,n=t.lib,i=n.WordArray,s=n.Hasher,o=t.algo,a=[];!function(){for(var t=0;t<64;t++)a[t]=4294967296*e.abs(e.sin(t+1))|0}();var c=o.MD5=s.extend({_doReset:function(){this._hash=new i.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(e,t){for(var n=0;n<16;n++){var r=t+n,i=e[r];e[r]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8)}var s=this._hash.words,o=e[t+0],c=e[t+1],f=e[t+2],p=e[t+3],m=e[t+4],g=e[t+5],y=e[t+6],v=e[t+7],w=e[t+8],b=e[t+9],k=e[t+10],_=e[t+11],T=e[t+12],E=e[t+13],I=e[t+14],S=e[t+15],A=s[0],C=s[1],x=s[2],$=s[3];A=l(A,C,x,$,o,7,a[0]),$=l($,A,C,x,c,12,a[1]),x=l(x,$,A,C,f,17,a[2]),C=l(C,x,$,A,p,22,a[3]),A=l(A,C,x,$,m,7,a[4]),$=l($,A,C,x,g,12,a[5]),x=l(x,$,A,C,y,17,a[6]),C=l(C,x,$,A,v,22,a[7]),A=l(A,C,x,$,w,7,a[8]),$=l($,A,C,x,b,12,a[9]),x=l(x,$,A,C,k,17,a[10]),C=l(C,x,$,A,_,22,a[11]),A=l(A,C,x,$,T,7,a[12]),$=l($,A,C,x,E,12,a[13]),x=l(x,$,A,C,I,17,a[14]),A=u(A,C=l(C,x,$,A,S,22,a[15]),x,$,c,5,a[16]),$=u($,A,C,x,y,9,a[17]),x=u(x,$,A,C,_,14,a[18]),C=u(C,x,$,A,o,20,a[19]),A=u(A,C,x,$,g,5,a[20]),$=u($,A,C,x,k,9,a[21]),x=u(x,$,A,C,S,14,a[22]),C=u(C,x,$,A,m,20,a[23]),A=u(A,C,x,$,b,5,a[24]),$=u($,A,C,x,I,9,a[25]),x=u(x,$,A,C,p,14,a[26]),C=u(C,x,$,A,w,20,a[27]),A=u(A,C,x,$,E,5,a[28]),$=u($,A,C,x,f,9,a[29]),x=u(x,$,A,C,v,14,a[30]),A=h(A,C=u(C,x,$,A,T,20,a[31]),x,$,g,4,a[32]),$=h($,A,C,x,w,11,a[33]),x=h(x,$,A,C,_,16,a[34]),C=h(C,x,$,A,I,23,a[35]),A=h(A,C,x,$,c,4,a[36]),$=h($,A,C,x,m,11,a[37]),x=h(x,$,A,C,v,16,a[38]),C=h(C,x,$,A,k,23,a[39]),A=h(A,C,x,$,E,4,a[40]),$=h($,A,C,x,o,11,a[41]),x=h(x,$,A,C,p,16,a[42]),C=h(C,x,$,A,y,23,a[43]),A=h(A,C,x,$,b,4,a[44]),$=h($,A,C,x,T,11,a[45]),x=h(x,$,A,C,S,16,a[46]),A=d(A,C=h(C,x,$,A,f,23,a[47]),x,$,o,6,a[48]),$=d($,A,C,x,v,10,a[49]),x=d(x,$,A,C,I,15,a[50]),C=d(C,x,$,A,g,21,a[51]),A=d(A,C,x,$,T,6,a[52]),$=d($,A,C,x,p,10,a[53]),x=d(x,$,A,C,k,15,a[54]),C=d(C,x,$,A,c,21,a[55]),A=d(A,C,x,$,w,6,a[56]),$=d($,A,C,x,S,10,a[57]),x=d(x,$,A,C,y,15,a[58]),C=d(C,x,$,A,E,21,a[59]),A=d(A,C,x,$,m,6,a[60]),$=d($,A,C,x,_,10,a[61]),x=d(x,$,A,C,f,15,a[62]),C=d(C,x,$,A,b,21,a[63]),s[0]=s[0]+A|0,s[1]=s[1]+C|0,s[2]=s[2]+x|0,s[3]=s[3]+$|0},_doFinalize:function(){var t=this._data,n=t.words,r=8*this._nDataBytes,i=8*t.sigBytes;n[i>>>5]|=128<<24-i%32;var s=e.floor(r/4294967296),o=r;n[15+(i+64>>>9<<4)]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),n[14+(i+64>>>9<<4)]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),t.sigBytes=4*(n.length+1),this._process();for(var a=this._hash,c=a.words,l=0;l<4;l++){var u=c[l];c[l]=16711935&(u<<8|u>>>24)|4278255360&(u<<24|u>>>8)}return a},clone:function(){var e=s.clone.call(this);return e._hash=this._hash.clone(),e}});function l(e,t,n,r,i,s,o){var a=e+(t&n|~t&r)+i+o;return(a<<s|a>>>32-s)+t}function u(e,t,n,r,i,s,o){var a=e+(t&r|n&~r)+i+o;return(a<<s|a>>>32-s)+t}function h(e,t,n,r,i,s,o){var a=e+(t^n^r)+i+o;return(a<<s|a>>>32-s)+t}function d(e,t,n,r,i,s,o){var a=e+(n^(t|~r))+i+o;return(a<<s|a>>>32-s)+t}t.MD5=s._createHelper(c),t.HmacMD5=s._createHmacHelper(c)}(Math),r.MD5)},function(e,t,n){var r;e.exports=(r=n(5),n(6),n(7),function(){var e=r,t=e.lib,n=t.Base,i=t.WordArray,s=e.algo,o=s.MD5,a=s.EvpKDF=n.extend({cfg:n.extend({keySize:4,hasher:o,iterations:1}),init:function(e){this.cfg=this.cfg.extend(e)},compute:function(e,t){for(var n=this.cfg,r=n.hasher.create(),s=i.create(),o=s.words,a=n.keySize,c=n.iterations;o.length<a;){l&&r.update(l);var l=r.update(e).finalize(t);r.reset();for(var u=1;u<c;u++)l=r.finalize(l),r.reset();s.concat(l)}return s.sigBytes=4*a,s}});e.EvpKDF=function(e,t,n){return a.create(n).compute(e,t)}}(),r.EvpKDF)},function(e,t,n){var r;e.exports=void((r=n(5)).lib.Cipher||function(e){var t=r,n=t.lib,i=n.Base,s=n.WordArray,o=n.BufferedBlockAlgorithm,a=t.enc;a.Utf8;var c=a.Base64,l=t.algo.EvpKDF,u=n.Cipher=o.extend({cfg:i.extend(),createEncryptor:function(e,t){return this.create(this._ENC_XFORM_MODE,e,t)},createDecryptor:function(e,t){return this.create(this._DEC_XFORM_MODE,e,t)},init:function(e,t,n){this.cfg=this.cfg.extend(n),this._xformMode=e,this._key=t,this.reset()},reset:function(){o.reset.call(this),this._doReset()},process:function(e){return this._append(e),this._process()},finalize:function(e){return e&&this._append(e),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function e(e){return"string"==typeof e?w:y}return function(t){return{encrypt:function(n,r,i){return e(r).encrypt(t,n,r,i)},decrypt:function(n,r,i){return e(r).decrypt(t,n,r,i)}}}}()});n.StreamCipher=u.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var h=t.mode={},d=n.BlockCipherMode=i.extend({createEncryptor:function(e,t){return this.Encryptor.create(e,t)},createDecryptor:function(e,t){return this.Decryptor.create(e,t)},init:function(e,t){this._cipher=e,this._iv=t}}),f=h.CBC=function(){var t=d.extend();function n(t,n,r){var i=this._iv;if(i){var s=i;this._iv=e}else s=this._prevBlock;for(var o=0;o<r;o++)t[n+o]^=s[o]}return t.Encryptor=t.extend({processBlock:function(e,t){var r=this._cipher,i=r.blockSize;n.call(this,e,t,i),r.encryptBlock(e,t),this._prevBlock=e.slice(t,t+i)}}),t.Decryptor=t.extend({processBlock:function(e,t){var r=this._cipher,i=r.blockSize,s=e.slice(t,t+i);r.decryptBlock(e,t),n.call(this,e,t,i),this._prevBlock=s}}),t}(),p=(t.pad={}).Pkcs7={pad:function(e,t){for(var n=4*t,r=n-e.sigBytes%n,i=r<<24|r<<16|r<<8|r,o=[],a=0;a<r;a+=4)o.push(i);var c=s.create(o,r);e.concat(c)},unpad:function(e){var t=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=t}};n.BlockCipher=u.extend({cfg:u.cfg.extend({mode:f,padding:p}),reset:function(){u.reset.call(this);var e=this.cfg,t=e.iv,n=e.mode;if(this._xformMode==this._ENC_XFORM_MODE)var r=n.createEncryptor;else r=n.createDecryptor,this._minBufferSize=1;this._mode=r.call(n,this,t&&t.words)},_doProcessBlock:function(e,t){this._mode.processBlock(e,t)},_doFinalize:function(){var e=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){e.pad(this._data,this.blockSize);var t=this._process(!0)}else t=this._process(!0),e.unpad(t);return t},blockSize:4});var m=n.CipherParams=i.extend({init:function(e){this.mixIn(e)},toString:function(e){return(e||this.formatter).stringify(this)}}),g=(t.format={}).OpenSSL={stringify:function(e){var t=e.ciphertext,n=e.salt;if(n)var r=s.create([1398893684,1701076831]).concat(n).concat(t);else r=t;return r.toString(c)},parse:function(e){var t=c.parse(e),n=t.words;if(1398893684==n[0]&&1701076831==n[1]){var r=s.create(n.slice(2,4));n.splice(0,4),t.sigBytes-=16}return m.create({ciphertext:t,salt:r})}},y=n.SerializableCipher=i.extend({cfg:i.extend({format:g}),encrypt:function(e,t,n,r){r=this.cfg.extend(r);var i=e.createEncryptor(n,r),s=i.finalize(t),o=i.cfg;return m.create({ciphertext:s,key:n,iv:o.iv,algorithm:e,mode:o.mode,padding:o.padding,blockSize:e.blockSize,formatter:r.format})},decrypt:function(e,t,n,r){return r=this.cfg.extend(r),t=this._parse(t,r.format),e.createDecryptor(n,r).finalize(t.ciphertext)},_parse:function(e,t){return"string"==typeof e?t.parse(e,this):e}}),v=(t.kdf={}).OpenSSL={execute:function(e,t,n,r){r||(r=s.random(8));var i=l.create({keySize:t+n}).compute(e,r),o=s.create(i.words.slice(t),4*n);return i.sigBytes=4*t,m.create({key:i,iv:o,salt:r})}},w=n.PasswordBasedCipher=y.extend({cfg:y.cfg.extend({kdf:v}),encrypt:function(e,t,n,r){var i=(r=this.cfg.extend(r)).kdf.execute(n,e.keySize,e.ivSize);r.iv=i.iv;var s=y.encrypt.call(this,e,t,i.key,r);return s.mixIn(i),s},decrypt:function(e,t,n,r){r=this.cfg.extend(r),t=this._parse(t,r.format);var i=r.kdf.execute(n,e.keySize,e.ivSize,t.salt);return r.iv=i.iv,y.decrypt.call(this,e,t,i.key,r)}})}())},function(e,t,n){var r;e.exports=(r=n(5),n(12),n(13),n(14),n(15),function(){var e=r,t=e.lib,n=t.WordArray,i=t.BlockCipher,s=e.algo,o=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],a=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],c=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],l=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],u=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],h=s.DES=i.extend({_doReset:function(){for(var e=this._key.words,t=[],n=0;n<56;n++){var r=o[n]-1;t[n]=e[r>>>5]>>>31-r%32&1}for(var i=this._subKeys=[],s=0;s<16;s++){var l=i[s]=[],u=c[s];for(n=0;n<24;n++)l[n/6|0]|=t[(a[n]-1+u)%28]<<31-n%6,l[4+(n/6|0)]|=t[28+(a[n+24]-1+u)%28]<<31-n%6;for(l[0]=l[0]<<1|l[0]>>>31,n=1;n<7;n++)l[n]=l[n]>>>4*(n-1)+3;l[7]=l[7]<<5|l[7]>>>27}var h=this._invSubKeys=[];for(n=0;n<16;n++)h[n]=i[15-n]},encryptBlock:function(e,t){this._doCryptBlock(e,t,this._subKeys)},decryptBlock:function(e,t){this._doCryptBlock(e,t,this._invSubKeys)},_doCryptBlock:function(e,t,n){this._lBlock=e[t],this._rBlock=e[t+1],d.call(this,4,252645135),d.call(this,16,65535),f.call(this,2,858993459),f.call(this,8,16711935),d.call(this,1,1431655765);for(var r=0;r<16;r++){for(var i=n[r],s=this._lBlock,o=this._rBlock,a=0,c=0;c<8;c++)a|=l[c][((o^i[c])&u[c])>>>0];this._lBlock=o,this._rBlock=s^a}var h=this._lBlock;this._lBlock=this._rBlock,this._rBlock=h,d.call(this,1,1431655765),f.call(this,8,16711935),f.call(this,2,858993459),d.call(this,16,65535),d.call(this,4,252645135),e[t]=this._lBlock,e[t+1]=this._rBlock},keySize:2,ivSize:2,blockSize:2});function d(e,t){var n=(this._lBlock>>>e^this._rBlock)&t;this._rBlock^=n,this._lBlock^=n<<e}function f(e,t){var n=(this._rBlock>>>e^this._lBlock)&t;this._lBlock^=n,this._rBlock^=n<<e}e.DES=i._createHelper(h);var p=s.TripleDES=i.extend({_doReset:function(){var e=this._key.words;this._des1=h.createEncryptor(n.create(e.slice(0,2))),this._des2=h.createEncryptor(n.create(e.slice(2,4))),this._des3=h.createEncryptor(n.create(e.slice(4,6)))},encryptBlock:function(e,t){this._des1.encryptBlock(e,t),this._des2.decryptBlock(e,t),this._des3.encryptBlock(e,t)},decryptBlock:function(e,t){this._des3.decryptBlock(e,t),this._des2.encryptBlock(e,t),this._des1.decryptBlock(e,t)},keySize:6,ivSize:2,blockSize:2});e.TripleDES=i._createHelper(p)}(),r.TripleDES)},function(e,t,n){var r;e.exports=(r=n(5),n(12),n(13),n(14),n(15),function(){var e=r,t=e.lib.StreamCipher,n=e.algo,i=[],s=[],o=[],a=n.Rabbit=t.extend({_doReset:function(){for(var e=this._key.words,t=this.cfg.iv,n=0;n<4;n++)e[n]=16711935&(e[n]<<8|e[n]>>>24)|4278255360&(e[n]<<24|e[n]>>>8);var r=this._X=[e[0],e[3]<<16|e[2]>>>16,e[1],e[0]<<16|e[3]>>>16,e[2],e[1]<<16|e[0]>>>16,e[3],e[2]<<16|e[1]>>>16],i=this._C=[e[2]<<16|e[2]>>>16,4294901760&e[0]|65535&e[1],e[3]<<16|e[3]>>>16,4294901760&e[1]|65535&e[2],e[0]<<16|e[0]>>>16,4294901760&e[2]|65535&e[3],e[1]<<16|e[1]>>>16,4294901760&e[3]|65535&e[0]];for(this._b=0,n=0;n<4;n++)c.call(this);for(n=0;n<8;n++)i[n]^=r[n+4&7];if(t){var s=t.words,o=s[0],a=s[1],l=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),u=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8),h=l>>>16|4294901760&u,d=u<<16|65535&l;for(i[0]^=l,i[1]^=h,i[2]^=u,i[3]^=d,i[4]^=l,i[5]^=h,i[6]^=u,i[7]^=d,n=0;n<4;n++)c.call(this)}},_doProcessBlock:function(e,t){var n=this._X;c.call(this),i[0]=n[0]^n[5]>>>16^n[3]<<16,i[1]=n[2]^n[7]>>>16^n[5]<<16,i[2]=n[4]^n[1]>>>16^n[7]<<16,i[3]=n[6]^n[3]>>>16^n[1]<<16;for(var r=0;r<4;r++)i[r]=16711935&(i[r]<<8|i[r]>>>24)|4278255360&(i[r]<<24|i[r]>>>8),e[t+r]^=i[r]},blockSize:4,ivSize:2});function c(){for(var e=this._X,t=this._C,n=0;n<8;n++)s[n]=t[n];for(t[0]=t[0]+1295307597+this._b|0,t[1]=t[1]+3545052371+(t[0]>>>0<s[0]>>>0?1:0)|0,t[2]=t[2]+886263092+(t[1]>>>0<s[1]>>>0?1:0)|0,t[3]=t[3]+1295307597+(t[2]>>>0<s[2]>>>0?1:0)|0,t[4]=t[4]+3545052371+(t[3]>>>0<s[3]>>>0?1:0)|0,t[5]=t[5]+886263092+(t[4]>>>0<s[4]>>>0?1:0)|0,t[6]=t[6]+1295307597+(t[5]>>>0<s[5]>>>0?1:0)|0,t[7]=t[7]+3545052371+(t[6]>>>0<s[6]>>>0?1:0)|0,this._b=t[7]>>>0<s[7]>>>0?1:0,n=0;n<8;n++){var r=e[n]+t[n],i=65535&r,a=r>>>16,c=((i*i>>>17)+i*a>>>15)+a*a,l=((4294901760&r)*r|0)+((65535&r)*r|0);o[n]=c^l}e[0]=o[0]+(o[7]<<16|o[7]>>>16)+(o[6]<<16|o[6]>>>16)|0,e[1]=o[1]+(o[0]<<8|o[0]>>>24)+o[7]|0,e[2]=o[2]+(o[1]<<16|o[1]>>>16)+(o[0]<<16|o[0]>>>16)|0,e[3]=o[3]+(o[2]<<8|o[2]>>>24)+o[1]|0,e[4]=o[4]+(o[3]<<16|o[3]>>>16)+(o[2]<<16|o[2]>>>16)|0,e[5]=o[5]+(o[4]<<8|o[4]>>>24)+o[3]|0,e[6]=o[6]+(o[5]<<16|o[5]>>>16)+(o[4]<<16|o[4]>>>16)|0,e[7]=o[7]+(o[6]<<8|o[6]>>>24)+o[5]|0}e.Rabbit=t._createHelper(a)}(),r.Rabbit)},function(e,t,n){var r;e.exports=(r=n(5),n(12),n(13),n(14),n(15),function(){var e=r,t=e.lib.StreamCipher,n=e.algo,i=n.RC4=t.extend({_doReset:function(){for(var e=this._key,t=e.words,n=e.sigBytes,r=this._S=[],i=0;i<256;i++)r[i]=i;i=0;for(var s=0;i<256;i++){var o=i%n,a=t[o>>>2]>>>24-o%4*8&255;s=(s+r[i]+a)%256;var c=r[i];r[i]=r[s],r[s]=c}this._i=this._j=0},_doProcessBlock:function(e,t){e[t]^=s.call(this)},keySize:8,ivSize:0});function s(){for(var e=this._S,t=this._i,n=this._j,r=0,i=0;i<4;i++){n=(n+e[t=(t+1)%256])%256;var s=e[t];e[t]=e[n],e[n]=s,r|=e[(e[t]+e[n])%256]<<24-8*i}return this._i=t,this._j=n,r}e.RC4=t._createHelper(i);var o=n.RC4Drop=i.extend({cfg:i.cfg.extend({drop:192}),_doReset:function(){i._doReset.call(this);for(var e=this.cfg.drop;e>0;e--)s.call(this)}});e.RC4Drop=t._createHelper(o)}(),r.RC4)}])}))}));let Jy,Xy,Yy;const Qy=new(yn(Gy)),Zy="user",ev="token",tv="leaderboard",nv="userinfo",rv="diary",iv={easyGamesFailed:0,easyGamesWon:0,easyLPM:0,easyWPM:0,hardGamesFailed:0,hardGamesWon:0,hardLPM:0,hardWPM:0,mediumGamesFailed:0,mediumGamesWon:0,mediumLPM:0,mediumWPM:0,profilePhoto:0};function sv(){Jy=function(e,t={}){"object"!=typeof t&&(t={name:t});const n=Object.assign({name:nn,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw un.create("bad-app-name",{appName:String(r)});const i=sn.get(r);if(i){if(Dt(e,i.options)&&Dt(n,i.config))return i;throw un.create("duplicate-app",{appName:r})}const s=new Kt(r);for(const e of on.values())s.addComponent(e);const o=new hn(e,n,s);return sn.set(r,o),o}({apiKey:"AIzaSyAcfFLGAnLbwIUCfyCYgayBl2oPvbu5RFQ",authDomain:"perfect-type.firebaseapp.com",projectId:"perfect-type",storageBucket:"perfect-type.appspot.com",messagingSenderId:"358376646912",appId:"1:358376646912:web:d750e4f6970556a8072be5",measurementId:"G-MDGFNKMNEC"}),$r(Jy),Xy=Jg(),Yy=function(e=fn()){return ln(e,"firestore").getImmediate()}(),By(Jy,{provider:new Uy("6LfUF8EdAAAAAIsY52KJ4t-SzYybu1gZRYNk-Zce"),isTokenAutoRefreshEnabled:!0})}function ov(){const e=Qy.get(Zy);return null==e?null:e.length>0?JSON.parse(e):null}async function av(){if(null==ov())return!1;let e=await async function(e){const t=Of(Yy,rv,e),n=(await fp(t)).data();if(""==n.token)return!1;if(function(){const e=Qy.get(ev);return null==e?null:e.length>0?e:null}()===n.token)return await fv(e),!0;return!1}(ov().uid);return e||await lv(),null!=ov()&&e}async function cv(e,t,n){const r=Of(Yy,e,t);return await function(e,t,n){e=Cf(e,Rf);const r=Cf(e.firestore,Mf),i=function(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}(e.converter,t,n);return gp(r,[Xf(Jf(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,Jl.none())])}(r,n),n}async function lv(){try{await cv(rv,ov().uid,{token:""}),await jm(Xy)}catch(e){console.log(e)}at(),Qy.set(Zy,""),Qy.set(ev,"")}async function uv(e){const t=Of(Yy,tv,e),n=(await fp(t)).data();let r=[];for await(let e of n.data){e=JSON.parse(e);let t=await hv(e.uid);null!=t.profilePhoto?e.profilePhoto=t.profilePhoto:e.profilePhoto=0,r.push(e)}return r}async function hv(e){const t=Of(Yy,nv,e);return(await fp(t)).data()}async function dv(e,t){const n=Of(Yy,nv,e);await mp(n,t)}async function fv(e){let t=Wy(JSON.stringify(ov())+Math.floor(1e9*Math.random()));var n;await cv(rv,e,{token:t}),n=t,Qy.set(ev,n)}function pv(e,{delay:n=0,duration:r=400,easing:i=t}={}){const s=+getComputedStyle(e).opacity;return{delay:n,duration:r,easing:i,css:e=>"opacity: "+e*s}}function mv(e,t,n){const r=e.slice();return r[19]=t[n],r[21]=n,r}function gv(e,t,n){const r=e.slice();return r[22]=t[n],r[21]=n,r}function yv(e,t,n){const r=e.slice();return r[24]=t[n],r[26]=n,r}function vv(e){let t,n;return t=new vt({props:{winGame:e[4],wpm:e[5],tryAgain:e[8]}}),{c(){we(t.$$.fragment)},m(e,r){be(t,e,r),n=!0},p(e,n){const r={};16&n&&(r.winGame=e[4]),32&n&&(r.wpm=e[5]),t.$set(r)},i(e){n||(de(t.$$.fragment,e),n=!0)},o(e){fe(t.$$.fragment,e),n=!1},d(e){ke(t,e)}}}function wv(e){let t,n,r,i,s,o,a,c,l;t=new kt({props:{mode:e[0],changeMode:e[6]}});let u=e[1],h=[];for(let t=0;t<u.length;t+=1)h[t]=kv(gv(e,u,t));let d=[...Array(10).keys()],f=[];for(let t=0;t<d.length;t+=1)f[t]=_v(mv(e,d,t));return{c(){we(t.$$.fragment),n=R(),r=C("span"),i=R(),s=C("div");for(let e=0;e<h.length;e+=1)h[e].c();o=R();for(let e=0;e<f.length;e+=1)f[e].c();a=R(),c=C("div"),O(r,"id","tracker"),O(r,"class","svelte-1k9you9"),O(s,"class","game-environment noselect svelte-1k9you9"),O(s,"id","game-env"),O(c,"id","occlusion"),O(c,"class","svelte-1k9you9")},m(e,u){be(t,e,u),I(e,n,u),I(e,r,u),I(e,i,u),I(e,s,u);for(let e=0;e<h.length;e+=1)h[e].m(s,null);_(s,o);for(let e=0;e<f.length;e+=1)f[e].m(s,null);I(e,a,u),I(e,c,u),l=!0},p(e,n){const r={};if(1&n&&(r.mode=e[0]),t.$set(r),6&n){let t;for(u=e[1],t=0;t<u.length;t+=1){const r=gv(e,u,t);h[t]?h[t].p(r,n):(h[t]=kv(r),h[t].c(),h[t].m(s,o))}for(;t<h.length;t+=1)h[t].d(1);h.length=u.length}},i(e){l||(de(t.$$.fragment,e),l=!0)},o(e){fe(t.$$.fragment,e),l=!1},d(e){ke(t,e),e&&S(n),e&&S(r),e&&S(i),e&&S(s),A(h,e),A(f,e),e&&S(a),e&&S(c)}}}function bv(e){let t,n,r,i=e[24]+"";return{c(){t=C("div"),n=$(i),O(t,"class","game-letter svelte-1k9you9"),O(t,"id",r=e[21]-1<0?`${e[26]}`:`${e[2][e[21]-1]+e[26]}`)},m(e,r){I(e,t,r),_(t,n)},p(e,s){2&s&&i!==(i=e[24]+"")&&P(n,i),4&s&&r!==(r=e[21]-1<0?`${e[26]}`:`${e[2][e[21]-1]+e[26]}`)&&O(t,"id",r)},d(e){e&&S(t)}}}function kv(e){let t,n,r=0!=e[21]&&function(e){let t,n,r;return{c(){t=C("div"),n=$(" "),O(t,"class","game-letter svelte-1k9you9"),O(t,"id",r=""+(e[2][e[21]-1]-1))},m(e,r){I(e,t,r),_(t,n)},p(e,n){4&n&&r!==(r=""+(e[2][e[21]-1]-1))&&O(t,"id",r)},d(e){e&&S(t)}}}(e),i=e[22],s=[];for(let t=0;t<i.length;t+=1)s[t]=bv(yv(e,i,t));return{c(){t=C("div"),r&&r.c(),n=R();for(let e=0;e<s.length;e+=1)s[e].c();O(t,"class","game-word svelte-1k9you9")},m(e,i){I(e,t,i),r&&r.m(t,null),_(t,n);for(let e=0;e<s.length;e+=1)s[e].m(t,null)},p(e,n){if(0!=e[21]&&r.p(e,n),6&n){let r;for(i=e[22],r=0;r<i.length;r+=1){const o=yv(e,i,r);s[r]?s[r].p(o,n):(s[r]=bv(o),s[r].c(),s[r].m(t,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=i.length}},d(e){e&&S(t),r&&r.d(),A(s,e)}}}function _v(e){let t;return{c(){t=C("div"),t.innerHTML='<div class="game-letter invisible-letter svelte-1k9you9">if you see this sentence, you&#39;re awesome</div> \n        '},m(e,n){I(e,t,n)},d(e){e&&S(t)}}}function Tv(t){let n,r,i,o,a,c,l;const u=[wv,vv],h=[];function d(e,t){return e[3]?1:0}return r=d(t),i=h[r]=u[r](t),{c(){n=C("main"),i.c()},m(i,o){var u;I(i,n,o),h[r].m(n,null),a=!0,c||(u=t[7].call(null,n),l=u&&s(u.destroy)?u.destroy:e,c=!0)},p(e,[t]){let s=r;r=d(e),r===s?h[r].p(e,t):(ue(),fe(h[s],1,1,(()=>{h[s]=null})),he(),i=h[r],i?i.p(e,t):(i=h[r]=u[r](e),i.c()),de(i,1),i.m(n,null))},i(e){a||(de(i),o||Z((()=>{o=me(n,pv,{}),o.start()})),a=!0)},o(e){fe(i),a=!1},d(e){e&&S(n),h[r].d(),c=!1,l()}}}function Ev(e,t,n){let r=!1;av().then((e=>r=e));let{currentRoute:i}=t,{params:s}=t,o="easy";const a={easy:5,medium:20,hard:50,impossible:-1};let c;rt.update((()=>a[o]));let l=lt(),u=l.split(" "),h=[],d=!1,f=!1,p=0,m=0,g=0;for(let e=0;e<u.length;e++)h.push(e-1<0?u[e].length+1:u[e].length+h[e-1]+1);function y(){p=0,m=0,nt.update((()=>0)),n(3,d=!1),n(4,f=!1),l=lt(),n(1,u=l.split(" ")),n(2,h=[]);for(let e=0;e<u.length;e++)h.push(e-1<0?u[e].length+1:u[e].length+h[e-1]+1);n(0,o),ht()}return nt.subscribe((e=>{c=e})),window.onresize=ht,q((()=>{ht()})),e.$$set=e=>{"currentRoute"in e&&n(9,i=e.currentRoute),"params"in e&&n(10,s=e.params)},[o,u,h,d,f,g,function(e,t){let r=document.getElementsByClassName("active-mode")[0];r.className=r.className.replace(" active-mode",""),document.getElementById(t).className+=" active-mode",n(0,o=e.target.innerHTML),rt.update((()=>a[o]));for(let e=0;e<c;e++){document.getElementById(e).classList.remove("typed-letter")}y()},function(){const e=e=>{if(e.preventDefault(),d)"Enter"==e.key&&y();else{if(0==p&&(p=new Date),l.charAt(c)!==e.key){if(n(3,d=!0),r){let e=o+"GamesFailed";(async function(e,t){const n=Of(Yy,nv,e);return(await fp(n)).data()[t]})(ov().uid,e).then((t=>{let n={};n[e]=t+1,dv(ov().uid,n)}))}}else!function(e){let t=document.getElementById(c);t.classList.add("typed-letter");let n=t.offsetLeft<m;n&&t.parentElement.scrollIntoView(!0);let r=document.getElementById(c+1);if(null!=r){let e=r.offsetLeft<t.offsetLeft;tracker.style.backgroundColor=e?"rgb(0, 0, 0, 0)":"var(--game-font-color)";let i=r.getBoundingClientRect();tracker.style.left=i.left+"px","&nbsp;"!=r.innerHTML?tracker.style.width="19.5px":n&&(tracker.style.width=i.width+8+"px")}m=t.offsetLeft}(),nt.update((e=>e+1));if(c==l.length){let e=(new Date-p)/6e4,t=Math.round(l.length/e*1e3)/1e3;const i=4.7;if(n(5,g=Math.round((l.length-(u.length-1))/i/e*1e3)/1e3),n(3,d=!0),n(4,f=!0),r){let e=o+"GamesWon",n=o+"LPM",r=o+"WPM";(async function(e,t,n,r){const i=Of(Yy,nv,e),s=(await fp(i)).data(),o={};return o[t]=s[t],o[n]=s[n],o[r]=s[r],o})(ov().uid,e,n,r).then((i=>{let s={};s[e]=i[e]+1,s[n]=Math.round((i[n]*i[e]+t)/s[e]*1e3)/1e3,s[r]=Math.round((i[r]*i[e]+g)/s[e]*1e3)/1e3,dv(ov().uid,s)}));let i=o+"_wpm";!async function(e,t,n){uv(t).then((r=>{const i=[];let s=!1,o=new Date,a=o.getDate(),c=o.getMonth()+1,l=o.getFullYear(),u=e.email.substr(0,e.email.indexOf("@")),h=e.uid;if(0==r.length)i.push(JSON.stringify({user:u,uid:h,score:n,date:`${c}/${a}/${l}`})),s=!0;else if(r.length<10){let e=!1;for(let t=0;t<r.length;t++)!e&&n>r[t].score&&(e=!0,s=!0,i.push(JSON.stringify({user:u,uid:h,score:n,date:`${c}/${a}/${l}`}))),e?r[t].user!==u&&i.push(JSON.stringify(r[t])):(r[t].user===u&&(e=!0),i.push(JSON.stringify(r[t])));e||(s=!0,i.push(JSON.stringify({user:u,uid:h,score:n,date:`${c}/${a}/${l}`})))}else{let e=!1;for(let t=0;t<r.length;t++)!e&&n>r[t].score&&(e=!0,s=!0,i.push(JSON.stringify({user:u,uid:h,score:n,date:`${c}/${a}/${l}`}))),e?r[t].user!==u&&t!=r.length-1&&i.push(JSON.stringify(r[t])):(r[t].user===u&&(e=!0),i.push(JSON.stringify(r[t])))}s&&mp(Of(Yy,tv,t),{data:i})}))}(ov(),i,g)}}}};return document.addEventListener("keypress",e),{destroy(){document.removeEventListener("keypress",e)}}},y,i,s]}class Iv extends Te{constructor(e){super(),_e(this,e,Ev,Tv,o,{currentRoute:9,params:10})}}function Sv(t){let n,r,i,s,o,a,c;return{c(){n=C("div"),r=C("label"),i=$(t[1]),s=R(),o=C("input"),O(r,"for",t[2]),O(o,"id",t[2]),O(o,"type",t[4]),O(o,"name",t[2]),O(o,"autocomplete",t[3]),o.value=t[0],O(n,"class","input-container")},m(e,l){I(e,n,l),_(n,r),_(r,i),_(n,s),_(n,o),a||(c=D(o,"input",t[5]),a=!0)},p(e,[t]){2&t&&P(i,e[1]),4&t&&O(r,"for",e[2]),4&t&&O(o,"id",e[2]),16&t&&O(o,"type",e[4]),4&t&&O(o,"name",e[2]),8&t&&O(o,"autocomplete",e[3]),1&t&&o.value!==e[0]&&(o.value=e[0])},i:e,o:e,d(e){e&&S(n),a=!1,c()}}}function Av(e,t,n){let{value:r=""}=t,{text:i}=t,{id:s}=t,{autocomplete:o}=t,{type:a="text"}=t;return e.$$set=e=>{"value"in e&&n(0,r=e.value),"text"in e&&n(1,i=e.text),"id"in e&&n(2,s=e.id),"autocomplete"in e&&n(3,o=e.autocomplete),"type"in e&&n(4,a=e.type)},[r,i,s,o,a,e=>{n(0,r=e.target.value),function(e){let t=e.target.parentNode.querySelector("label");e.target.value.length>0?(t.style.top="-10px",t.style.fontSize="1em"):(t.style.top="10px",t.style.fontSize="1.5em")}(e)}]}class Cv extends Te{constructor(e){super(),_e(this,e,Av,Sv,o,{value:0,text:1,id:2,autocomplete:3,type:4})}}function xv(e){let t,n,r,i,s,o,a,c,l,u,h,d,f,p,m,g,y,v,w,b,k,T,E;function A(t){e[9](t)}let x={text:"email",id:"email",type:"email",autocomplete:"email"};function $(t){e[10](t)}void 0!==e[1]&&(x.value=e[1]),a=new Cv({props:x}),W.push((()=>ve(a,"value",A)));let P={text:"password",id:"password",type:"password",autocomplete:"current-password"};function M(e,t){return e[4]?Nv:Rv}void 0!==e[2]&&(P.value=e[2]),u=new Cv({props:P}),W.push((()=>ve(u,"value",$))),y=new mt({props:{text:"login"}});let L=M(e),F=L(e);return{c(){t=C("form"),n=C("br"),r=R(),i=C("br"),s=R(),o=C("div"),we(a.$$.fragment),l=R(),we(u.$$.fragment),d=R(),f=C("br"),p=R(),m=C("br"),g=R(),we(y.$$.fragment),w=R(),F.c(),b=N(),O(o,"id","form-container")},m(c,h){I(c,t,h),_(t,n),_(t,r),_(t,i),_(t,s),_(t,o),be(a,o,null),_(o,l),be(u,o,null),_(t,d),_(t,f),_(t,p),_(t,m),_(t,g),be(y,t,null),I(c,w,h),F.m(c,h),I(c,b,h),k=!0,T||(E=D(t,"submit",e[5]),T=!0)},p(e,t){const n={};!c&&2&t&&(c=!0,n.value=e[1],ee((()=>c=!1))),a.$set(n);const r={};!h&&4&t&&(h=!0,r.value=e[2],ee((()=>h=!1))),u.$set(r),L===(L=M(e))&&F?F.p(e,t):(F.d(1),F=L(e),F&&(F.c(),de(F,1),F.m(b.parentNode,b)))},i(e){k||(de(a.$$.fragment,e),de(u.$$.fragment,e),de(y.$$.fragment,e),v||Z((()=>{v=me(t,pv,{}),v.start()})),de(F),k=!0)},o(e){fe(a.$$.fragment,e),fe(u.$$.fragment,e),fe(y.$$.fragment,e),k=!1},d(e){e&&S(t),ke(a),ke(u),ke(y),e&&S(w),F.d(e),e&&S(b),T=!1,E()}}}function $v(t){let n,r;return{c(){n=C("p"),n.textContent="logged in! redirecting to main..."},m(e,t){I(e,n,t)},p:e,i(e){r||Z((()=>{r=me(n,pv,{}),r.start()}))},o:e,d(e){e&&S(n)}}}function Rv(t){let n,r;return{c(){n=C("p"),O(n,"id","error-indicator"),O(n,"class","svelte-k70b88")},m(e,r){I(e,n,r),n.innerHTML=t[3]},p(e,t){8&t&&(n.innerHTML=e[3])},i(e){r||Z((()=>{r=me(n,pv,{}),r.start()}))},o:e,d(e){e&&S(n)}}}function Nv(t){let n,r,i,s,o,a,c;return{c(){n=C("p"),r=$("please verify your email! click "),i=C("span"),i.textContent="here",s=$(" to send another link."),O(i,"class","svelte-k70b88"),O(n,"id","error-indicator"),O(n,"class","svelte-k70b88")},m(e,o){I(e,n,o),_(n,r),_(n,i),_(n,s),a||(c=D(i,"click",t[6]),a=!0)},p:e,i(e){o||Z((()=>{o=me(n,pv,{}),o.start()}))},o:e,d(e){e&&S(n),a=!1,c()}}}function Dv(e){let t,n,r,i,s,o;const a=[$v,xv],c=[];function l(e,t){return e[0]?0:1}return i=l(e),s=c[i]=a[i](e),{c(){t=C("main"),n=C("h1"),n.textContent="login",r=R(),s.c()},m(e,s){I(e,t,s),_(t,n),_(t,r),c[i].m(t,null),o=!0},p(e,[n]){let r=i;i=l(e),i===r?c[i].p(e,n):(ue(),fe(c[r],1,1,(()=>{c[r]=null})),he(),s=c[i],s?s.p(e,n):(s=c[i]=a[i](e),s.c()),de(s,1),s.m(t,null))},i(e){o||(de(s),o=!0)},o(e){fe(s),o=!1},d(e){e&&S(t),c[i].d()}}}function Ov(e,t,n){let r,i,s,{currentRoute:o}=t,{params:a}=t,c=!1,l="",u=!1;return e.$$set=e=>{"currentRoute"in e&&n(7,o=e.currentRoute),"params"in e&&n(8,a=e.params)},[c,r,i,l,u,function(e){e&&e.preventDefault(),async function(e,t){try{const n=await Um(Xy,e,t);return n.user.emailVerified?(Qy.set(Zy,JSON.stringify(n.user)),await fv(ov().uid),{success:!0}):(await jm(Xy),{data:n.user,success:!1})}catch(e){return{success:!1}}}(r,i).then((e=>{n(4,u=!1),e.success?(n(3,l=""),n(0,c=!0),at(1e3)):(s=e.data,e.data?(n(3,l=""),n(4,u=!0)):n(3,l="invalid login credentials"))}))},function(){Bm(s),n(4,u=!1)},o,a,function(e){r=e,n(1,r)},function(e){i=e,n(2,i)}]}function Pv(e){let t,n,r,i,s,o,a,c,l,u,h,d,f,p,m,g,y,v,w,b,k,T,E,A,x,$;function N(t){e[8](t)}let P={text:"email",id:"email",type:"email",autocomplete:"email"};function M(t){e[9](t)}void 0!==e[1]&&(P.value=e[1]),n=new Cv({props:P}),W.push((()=>ve(n,"value",N)));let L={text:"password",id:"password",type:"password",autocomplete:"new-password"};function F(t){e[10](t)}void 0!==e[2]&&(L.value=e[2]),u=new Cv({props:L}),W.push((()=>ve(u,"value",M)));let U={text:"confirm password",id:"con-password",type:"password",autocomplete:"new-password"};return void 0!==e[3]&&(U.value=e[3]),f=new Cv({props:U}),W.push((()=>ve(f,"value",F))),b=new mt({props:{text:"signup"}}),{c(){t=C("form"),we(n.$$.fragment),i=R(),s=C("br"),o=R(),a=C("br"),c=R(),l=C("div"),we(u.$$.fragment),d=R(),we(f.$$.fragment),m=R(),g=C("br"),y=R(),v=C("br"),w=R(),we(b.$$.fragment),T=R(),E=C("p"),O(l,"id","form-container"),O(E,"id","error-indicator"),O(E,"class","svelte-1v1ayny")},m(r,h){I(r,t,h),be(n,t,null),_(t,i),_(t,s),_(t,o),_(t,a),_(t,c),_(t,l),be(u,l,null),_(l,d),be(f,l,null),_(t,m),_(t,g),_(t,y),_(t,v),_(t,w),be(b,t,null),I(r,T,h),I(r,E,h),E.innerHTML=e[4],A=!0,x||($=D(t,"submit",e[5]),x=!0)},p(e,t){const i={};!r&&2&t&&(r=!0,i.value=e[1],ee((()=>r=!1))),n.$set(i);const s={};!h&&4&t&&(h=!0,s.value=e[2],ee((()=>h=!1))),u.$set(s);const o={};!p&&8&t&&(p=!0,o.value=e[3],ee((()=>p=!1))),f.$set(o),(!A||16&t)&&(E.innerHTML=e[4])},i(e){A||(de(n.$$.fragment,e),de(u.$$.fragment,e),de(f.$$.fragment,e),de(b.$$.fragment,e),k||Z((()=>{k=me(t,pv,{}),k.start()})),A=!0)},o(e){fe(n.$$.fragment,e),fe(u.$$.fragment,e),fe(f.$$.fragment,e),fe(b.$$.fragment,e),A=!1},d(e){e&&S(t),ke(n),ke(u),ke(f),ke(b),e&&S(T),e&&S(E),x=!1,$()}}}function Mv(t){let n,r,i,s,o;return{c(){n=C("h1"),n.textContent="signed up! now just verify your email.",i=R(),s=C("h3"),s.innerHTML='once you&#39;ve done that, login <a href="/login">here</a>.'},m(e,t){I(e,n,t),I(e,i,t),I(e,s,t)},p:e,i(e){r||Z((()=>{r=me(n,pv,{}),r.start()})),o||Z((()=>{o=me(s,pv,{}),o.start()}))},o:e,d(e){e&&S(n),e&&S(i),e&&S(s)}}}function Lv(e){let t,n,r,i,s,o;const a=[Mv,Pv],c=[];function l(e,t){return e[0]?0:1}return i=l(e),s=c[i]=a[i](e),{c(){t=C("main"),n=C("h1"),n.textContent="sign up",r=R(),s.c()},m(e,s){I(e,t,s),_(t,n),_(t,r),c[i].m(t,null),o=!0},p(e,[n]){let r=i;i=l(e),i===r?c[i].p(e,n):(ue(),fe(c[r],1,1,(()=>{c[r]=null})),he(),s=c[i],s?s.p(e,n):(s=c[i]=a[i](e),s.c()),de(s,1),s.m(t,null))},i(e){o||(de(s),o=!0)},o(e){fe(s),o=!1},d(e){e&&S(t),c[i].d()}}}function Fv(e,t,n){let r,i,s,{currentRoute:o}=t,{params:a}=t,c=!1,l="";return e.$$set=e=>{"currentRoute"in e&&n(6,o=e.currentRoute),"params"in e&&n(7,a=e.params)},[c,r,i,s,l,function(e){e&&e.preventDefault(),function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(r)?s===i?i.length<8?n(4,l="Passwords too short!"):async function(e,t){try{const n=await Fm(Xy,e,t);await Bm(n.user),await jm(Xy);let r=Object.assign({},ct);return r.uid=n.user.uid,r.email=n.user.email,await cv("users",r.uid,r),await cv(nv,r.uid,iv),{success:!0}}catch(e){return{message:(n=e.message,n.split("/")[1].slice(0,-2)),success:!1}}var n}(r,i).then((e=>{e.success?(n(0,c=!0),n(4,l="")):n(4,l=e.message)})):n(4,l="Passwords do not match!"):n(4,l="Invalid email!")},o,a,function(e){r=e,n(1,r)},function(e){i=e,n(2,i)},function(e){s=e,n(3,s)}]}function Uv(e){let t,n,r,i,s,o,a,c;const l=e[2].default,h=u(l,e,e[1],null),m=h||function(e){let t;return{c(){t=$("default card")},m(e,n){I(e,t,n)},d(e){e&&S(t)}}}();return{c(){t=C("div"),n=C("h2"),r=$(e[0]),i=R(),s=C("div"),o=C("p"),m&&m.c(),O(s,"class","container svelte-z1mzoz"),O(t,"class","card svelte-z1mzoz")},m(e,a){I(e,t,a),_(t,n),_(n,r),_(t,i),_(t,s),_(s,o),m&&m.m(o,null),c=!0},p(e,[t]){(!c||1&t)&&P(r,e[0]),h&&h.p&&(!c||2&t)&&f(h,l,e,e[1],c?d(l,e[1],t,null):p(e[1]),null)},i(e){c||(de(m,e),a||Z((()=>{a=me(t,pv,{}),a.start()})),c=!0)},o(e){fe(m,e),c=!1},d(e){e&&S(t),m&&m.d(e)}}}function Bv(e,t,n){let{$$slots:r={},$$scope:i}=t,{title:s}=t;return e.$$set=e=>{"title"in e&&n(0,s=e.title),"$$scope"in e&&n(1,i=e.$$scope)},[s,i,r]}class jv extends Te{constructor(e){super(),_e(this,e,Bv,Uv,o,{title:0})}}function Vv(t){let n,r,i,s,o,a,c,l,u,h,d,f,p,m,g,y,v,w,b=`overall: ${Math.round(100*t[0])/100}${t[5]}`,k=`${Math.round(100*t[1])/100}${t[5]}`,T=`${Math.round(100*t[2])/100}${t[5]}`,E=`${Math.round(100*t[4])/100}${t[5]}`,A=`${Math.round(100*t[3])/100}${t[5]}`;return{c(){n=C("p"),r=$(b),i=R(),s=C("table"),o=C("tr"),o.innerHTML='<td class="heading svelte-1e40qcb">easy</td> \n      <td class="heading svelte-1e40qcb">medium</td> \n      <td class="heading svelte-1e40qcb">hard</td> \n      <td class="heading svelte-1e40qcb">impossible</td>',a=R(),c=C("tr"),l=C("td"),u=$(k),h=R(),d=C("td"),f=$(T),p=R(),m=C("td"),g=$(E),y=R(),v=C("td"),w=$(A),O(l,"class","svelte-1e40qcb"),O(d,"class","svelte-1e40qcb"),O(m,"class","svelte-1e40qcb"),O(v,"class","svelte-1e40qcb"),O(s,"class","center-table svelte-1e40qcb")},m(e,t){I(e,n,t),_(n,r),I(e,i,t),I(e,s,t),_(s,o),_(s,a),_(s,c),_(c,l),_(l,u),_(c,h),_(c,d),_(d,f),_(c,p),_(c,m),_(m,g),_(c,y),_(c,v),_(v,w)},p(e,t){33&t&&b!==(b=`overall: ${Math.round(100*e[0])/100}${e[5]}`)&&P(r,b),34&t&&k!==(k=`${Math.round(100*e[1])/100}${e[5]}`)&&P(u,k),36&t&&T!==(T=`${Math.round(100*e[2])/100}${e[5]}`)&&P(f,T),48&t&&E!==(E=`${Math.round(100*e[4])/100}${e[5]}`)&&P(g,E),40&t&&A!==(A=`${Math.round(100*e[3])/100}${e[5]}`)&&P(w,A)},i:e,o:e,d(e){e&&S(n),e&&S(i),e&&S(s)}}}function zv(e){let t;const n=e[7].default,r=u(n,e,e[6],null);return{c(){r&&r.c()},m(e,n){r&&r.m(e,n),t=!0},p(e,i){r&&r.p&&(!t||64&i)&&f(r,n,e,e[6],t?d(n,e[6],i,null):p(e[6]),null)},i(e){t||(de(r,e),t=!0)},o(e){fe(r,e),t=!1},d(e){r&&r.d(e)}}}function qv(e){let t,n,r,i;const s=[zv,Vv],o=[];function a(e,t){return null==e[0]?0:1}return t=a(e),n=o[t]=s[t](e),{c(){n.c(),r=N()},m(e,n){o[t].m(e,n),I(e,r,n),i=!0},p(e,[i]){let c=t;t=a(e),t===c?o[t].p(e,i):(ue(),fe(o[c],1,1,(()=>{o[c]=null})),he(),n=o[t],n?n.p(e,i):(n=o[t]=s[t](e),n.c()),de(n,1),n.m(r.parentNode,r))},i(e){i||(de(n),i=!0)},o(e){fe(n),i=!1},d(e){o[t].d(e),e&&S(r)}}}function Kv(e,t,n){let{$$slots:r={},$$scope:i}=t,{overall:s=null}=t,{easy:o=null}=t,{medium:a=null}=t,{impossible:c=null}=t,{hard:l=null}=t,{units:u=null}=t;return e.$$set=e=>{"overall"in e&&n(0,s=e.overall),"easy"in e&&n(1,o=e.easy),"medium"in e&&n(2,a=e.medium),"impossible"in e&&n(3,c=e.impossible),"hard"in e&&n(4,l=e.hard),"units"in e&&n(5,u=e.units),"$$scope"in e&&n(6,i=e.$$scope)},[s,o,a,c,l,u,i,r]}class Hv extends Te{constructor(e){super(),_e(this,e,Kv,qv,o,{overall:0,easy:1,medium:2,impossible:3,hard:4,units:5})}}const{window:Wv}=ye;function Gv(e){let t,n,r,o,a,c,l,u,h,d,f,p,m,g=e[0].closeButton&&Jv(e);var y=e[1];return y&&(c=new y({})),{c(){t=C("div"),n=C("div"),r=C("div"),g&&g.c(),o=R(),a=C("div"),c&&we(c.$$.fragment),O(a,"class","content svelte-ktxllv"),O(a,"style",e[8]),O(r,"class","window svelte-ktxllv"),O(r,"role","dialog"),O(r,"aria-modal","true"),O(r,"aria-label",l=e[0].ariaLabelledBy?null:e[0].ariaLabel||null),O(r,"aria-labelledby",u=e[0].ariaLabelledBy||null),O(r,"style",e[7]),O(n,"class","window-wrap svelte-ktxllv"),O(n,"style",e[6]),O(t,"class","bg svelte-ktxllv"),O(t,"style",e[5])},m(i,l){I(i,t,l),_(t,n),_(n,r),g&&g.m(r,null),_(r,o),_(r,a),c&&be(c,a,null),e[42](r),e[43](n),e[44](t),f=!0,p||(m=[D(r,"introstart",(function(){s(e[12])&&e[12].apply(this,arguments)})),D(r,"outrostart",(function(){s(e[13])&&e[13].apply(this,arguments)})),D(r,"introend",(function(){s(e[14])&&e[14].apply(this,arguments)})),D(r,"outroend",(function(){s(e[15])&&e[15].apply(this,arguments)})),D(t,"mousedown",e[19]),D(t,"mouseup",e[20])],p=!0)},p(i,s){if((e=i)[0].closeButton?g?(g.p(e,s),1&s[0]&&de(g,1)):(g=Jv(e),g.c(),de(g,1),g.m(r,o)):g&&(ue(),fe(g,1,1,(()=>{g=null})),he()),y!==(y=e[1])){if(c){ue();const e=c;fe(e.$$.fragment,1,0,(()=>{ke(e,1)})),he()}y?(c=new y({}),we(c.$$.fragment),de(c.$$.fragment,1),be(c,a,null)):c=null}(!f||256&s[0])&&O(a,"style",e[8]),(!f||1&s[0]&&l!==(l=e[0].ariaLabelledBy?null:e[0].ariaLabel||null))&&O(r,"aria-label",l),(!f||1&s[0]&&u!==(u=e[0].ariaLabelledBy||null))&&O(r,"aria-labelledby",u),(!f||128&s[0])&&O(r,"style",e[7]),(!f||64&s[0])&&O(n,"style",e[6]),(!f||32&s[0])&&O(t,"style",e[5])},i(n){f||(de(g),c&&de(c.$$.fragment,n),Z((()=>{h||(h=ge(r,e[11],e[0].transitionWindowProps,!0)),h.run(1)})),Z((()=>{d||(d=ge(t,e[10],e[0].transitionBgProps,!0)),d.run(1)})),f=!0)},o(n){fe(g),c&&fe(c.$$.fragment,n),h||(h=ge(r,e[11],e[0].transitionWindowProps,!1)),h.run(0),d||(d=ge(t,e[10],e[0].transitionBgProps,!1)),d.run(0),f=!1},d(n){n&&S(t),g&&g.d(),c&&ke(c),e[42](null),n&&h&&h.end(),e[43](null),e[44](null),n&&d&&d.end(),p=!1,i(m)}}}function Jv(e){let t,n,r,i,s;const o=[Yv,Xv],a=[];function c(e,n){return(null==t||1&n[0])&&(t=!!e[16](e[0].closeButton)),t?0:1}return n=c(e,[-1,-1]),r=a[n]=o[n](e),{c(){r.c(),i=N()},m(e,t){a[n].m(e,t),I(e,i,t),s=!0},p(e,t){let s=n;n=c(e,t),n===s?a[n].p(e,t):(ue(),fe(a[s],1,1,(()=>{a[s]=null})),he(),r=a[n],r?r.p(e,t):(r=a[n]=o[n](e),r.c()),de(r,1),r.m(i.parentNode,i))},i(e){s||(de(r),s=!0)},o(e){fe(r),s=!1},d(e){a[n].d(e),e&&S(i)}}}function Xv(t){let n,r,i;return{c(){n=C("button"),O(n,"class","close svelte-ktxllv"),O(n,"aria-label","Close modal"),O(n,"style",t[9])},m(e,s){I(e,n,s),r||(i=D(n,"click",t[17]),r=!0)},p(e,t){512&t[0]&&O(n,"style",e[9])},i:e,o:e,d(e){e&&S(n),r=!1,i()}}}function Yv(e){let t,n,r;var i=e[0].closeButton;function s(e){return{props:{onClose:e[17]}}}return i&&(t=new i(s(e))),{c(){t&&we(t.$$.fragment),n=N()},m(e,i){t&&be(t,e,i),I(e,n,i),r=!0},p(e,r){if(i!==(i=e[0].closeButton)){if(t){ue();const e=t;fe(e.$$.fragment,1,0,(()=>{ke(e,1)})),he()}i?(t=new i(s(e)),we(t.$$.fragment),de(t.$$.fragment,1),be(t,n.parentNode,n)):t=null}},i(e){r||(t&&de(t.$$.fragment,e),r=!0)},o(e){t&&fe(t.$$.fragment,e),r=!1},d(e){e&&S(n),t&&ke(t,e)}}}function Qv(e){let t,n,r,i,s=e[1]&&Gv(e);const o=e[41].default,a=u(o,e,e[40],null);return{c(){s&&s.c(),t=R(),a&&a.c()},m(o,c){s&&s.m(o,c),I(o,t,c),a&&a.m(o,c),n=!0,r||(i=D(Wv,"keydown",e[18]),r=!0)},p(e,r){e[1]?s?(s.p(e,r),2&r[0]&&de(s,1)):(s=Gv(e),s.c(),de(s,1),s.m(t.parentNode,t)):s&&(ue(),fe(s,1,1,(()=>{s=null})),he()),a&&a.p&&(!n||512&r[1])&&f(a,o,e,e[40],n?d(o,e[40],r,null):p(e[40]),null)},i(e){n||(de(s),de(a,e),n=!0)},o(e){fe(s),fe(a,e),n=!1},d(e){s&&s.d(e),e&&S(t),a&&a.d(e),r=!1,i()}}}function Zv(e,t,n){let{$$slots:r={},$$scope:i}=t;const s=function(){const e=z();return(t,n)=>{const r=e.$$.callbacks[t];if(r){const i=M(t,n);r.slice().forEach((t=>{t.call(e,i)}))}}}(),o=K;let{show:a=null}=t,{key:c="simple-modal"}=t,{ariaLabel:l=null}=t,{ariaLabelledBy:u=null}=t,{closeButton:h=!0}=t,{closeOnEsc:d=!0}=t,{closeOnOuterClick:f=!0}=t,{styleBg:p={}}=t,{styleWindowWrap:m={}}=t,{styleWindow:g={}}=t,{styleContent:y={}}=t,{styleCloseButton:v={}}=t,{setContext:w=o}=t,{transitionBg:b=pv}=t,{transitionBgProps:k={duration:250}}=t,{transitionWindow:_=b}=t,{transitionWindowProps:T=k}=t,{disableFocusTrap:E=!1}=t;const I={ariaLabel:l,ariaLabelledBy:u,closeButton:h,closeOnEsc:d,closeOnOuterClick:f,styleBg:p,styleWindowWrap:m,styleWindow:g,styleContent:y,styleCloseButton:v,transitionBg:b,transitionBgProps:k,transitionWindow:_,transitionWindowProps:T,disableFocusTrap:E};let S,A,C,x,$,R,N,D,O,P,L,F,U,B,j,V={...I},H=null;const G=e=>e?Object.keys(e).reduce(((t,n)=>`${t}; ${(e=>e.replace(/([a-zA-Z])(?=[A-Z])/g,"$1-").toLowerCase())(n)}: ${e[n]}`),""):"",J=e=>!!(e&&e.constructor&&e.call&&e.apply),X=()=>{};let Y=X,Q=X,Z=X,ee=X;const te=(e,t={},r={},i={})=>{n(1,H=function(e,t={}){return function(n){return new e({...n,props:{...t,...n.props}})}}(e,t)),n(0,V={...I,...r}),n(5,$=G(Object.assign({},{width:window.innerWidth,height:window.innerHeight},V.styleBg))),n(6,R=G(V.styleWindowWrap)),n(7,N=G(V.styleWindow)),n(8,D=G(V.styleContent)),n(9,O=G(V.styleCloseButton)),n(10,P=V.transitionBg),n(11,L=V.transitionWindow),re(),n(12,Y=e=>{i.onOpen&&i.onOpen(e),s("open"),s("opening")}),n(13,Q=e=>{i.onClose&&i.onClose(e),s("close"),s("closing")}),n(14,Z=e=>{i.onOpened&&i.onOpened(e),s("opened")}),n(15,ee=e=>{i.onClosed&&i.onClosed(e),s("closed")})},ne=(e={})=>{H&&(n(13,Q=e.onClose||Q),n(15,ee=e.onClosed||ee),n(1,H=null),ie())},re=()=>{x=window.scrollY,F=document.body.style.position,U=document.body.style.overflow,B=document.body.style.width,document.body.style.position="fixed",document.body.style.top=`-${x}px`,document.body.style.overflow="hidden",document.body.style.width="100%"},ie=()=>{document.body.style.position=F||"",document.body.style.top="",document.body.style.overflow=U||"",document.body.style.width=B||"",window.scrollTo(0,x)};w(c,{open:te,close:ne});let se=!1;return function(e){z().$$.on_destroy.push(e)}((()=>{se&&ne()})),q((()=>{n(39,se=!0)})),e.$$set=e=>{"show"in e&&n(21,a=e.show),"key"in e&&n(22,c=e.key),"ariaLabel"in e&&n(23,l=e.ariaLabel),"ariaLabelledBy"in e&&n(24,u=e.ariaLabelledBy),"closeButton"in e&&n(25,h=e.closeButton),"closeOnEsc"in e&&n(26,d=e.closeOnEsc),"closeOnOuterClick"in e&&n(27,f=e.closeOnOuterClick),"styleBg"in e&&n(28,p=e.styleBg),"styleWindowWrap"in e&&n(29,m=e.styleWindowWrap),"styleWindow"in e&&n(30,g=e.styleWindow),"styleContent"in e&&n(31,y=e.styleContent),"styleCloseButton"in e&&n(32,v=e.styleCloseButton),"setContext"in e&&n(33,w=e.setContext),"transitionBg"in e&&n(34,b=e.transitionBg),"transitionBgProps"in e&&n(35,k=e.transitionBgProps),"transitionWindow"in e&&n(36,_=e.transitionWindow),"transitionWindowProps"in e&&n(37,T=e.transitionWindowProps),"disableFocusTrap"in e&&n(38,E=e.disableFocusTrap),"$$scope"in e&&n(40,i=e.$$scope)},e.$$.update=()=>{2097152&e.$$.dirty[0]|256&e.$$.dirty[1]&&se&&(J(a)?te(a):ne())},[V,H,S,A,C,$,R,N,D,O,P,L,Y,Q,Z,ee,J,ne,e=>{if(V.closeOnEsc&&H&&"Escape"===e.key&&(e.preventDefault(),ne()),H&&"Tab"===e.key&&!V.disableFocusTrap){const t=C.querySelectorAll("*"),n=Array.from(t).filter((e=>e.tabIndex>=0));let r=n.indexOf(document.activeElement);-1===r&&e.shiftKey&&(r=0),r+=n.length+(e.shiftKey?-1:1),r%=n.length,n[r].focus(),e.preventDefault()}},e=>{!V.closeOnOuterClick||e.target!==S&&e.target!==A||(j=e.target)},e=>{V.closeOnOuterClick&&e.target===j&&(e.preventDefault(),ne())},a,c,l,u,h,d,f,p,m,g,y,v,w,b,k,_,T,E,se,i,r,function(e){W[e?"unshift":"push"]((()=>{C=e,n(4,C)}))},function(e){W[e?"unshift":"push"]((()=>{A=e,n(3,A)}))},function(e){W[e?"unshift":"push"]((()=>{S=e,n(2,S)}))}]}class ew extends Te{constructor(e){super(),_e(this,e,Zv,Qv,o,{show:21,key:22,ariaLabel:23,ariaLabelledBy:24,closeButton:25,closeOnEsc:26,closeOnOuterClick:27,styleBg:28,styleWindowWrap:29,styleWindow:30,styleContent:31,styleCloseButton:32,setContext:33,transitionBg:34,transitionBgProps:35,transitionWindow:36,transitionWindowProps:37,disableFocusTrap:38},null,[-1,-1])}}function tw(e,t,n){const r=e.slice();return r[7]=t[n],r[9]=n,r}function nw(e){let t,n,r,i,o;return{c(){t=C("div"),n=C("img"),O(n,"id",`profile-photo-${e[9]}`),O(n,"class","selected-avatar svelte-bxtzz4"),c(n.src,r=`/profile-photos/photo${e[9]}.png`)||O(n,"src",r),O(n,"alt","Avatar"),O(t,"class","photo-div svelte-bxtzz4")},m(r,a){I(r,t,a),_(t,n),i||(o=D(t,"click",(function(){s(e[1])&&e[1].apply(this,arguments)})),i=!0)},p(t,n){e=t},d(e){e&&S(t),i=!1,o()}}}function rw(e){let t,n,r,i,o;return{c(){t=C("div"),n=C("img"),O(n,"id",`profile-photo-${e[9]}`),O(n,"class","nonselected-avatar svelte-bxtzz4"),c(n.src,r=`/profile-photos/photo${e[9]}.png`)||O(n,"src",r),O(n,"alt","Avatar"),O(t,"class","photo-div svelte-bxtzz4")},m(r,a){I(r,t,a),_(t,n),i||(o=D(t,"click",(function(){s(e[1])&&e[1].apply(this,arguments)})),i=!0)},p(t,n){e=t},d(e){e&&S(t),i=!1,o()}}}function iw(e){let t;function n(e,t){return e[9]!=e[0]?rw:nw}let r=n(e),i=r(e);return{c(){i.c(),t=N()},m(e,n){i.m(e,n),I(e,t,n)},p(e,s){r===(r=n(e))&&i?i.p(e,s):(i.d(1),i=r(e),i&&(i.c(),i.m(t.parentNode,t)))},d(e){i.d(e),e&&S(t)}}}function sw(t){let n,r,s,o,a,c,l,u,h=Array(ow),d=[];for(let e=0;e<h.length;e+=1)d[e]=iw(tw(t,h,e));return{c(){n=C("div");for(let e=0;e<d.length;e+=1)d[e].c();r=R(),s=C("main"),o=C("button"),o.textContent="Apply",a=R(),c=C("button"),c.textContent="Cancel",O(n,"class","photo-div-container svelte-bxtzz4")},m(e,i){I(e,n,i);for(let e=0;e<d.length;e+=1)d[e].m(n,null);_(n,r),_(n,s),_(s,o),_(s,a),_(s,c),l||(u=[D(o,"click",t[5]),D(c,"click",t[6])],l=!0)},p(e,[t]){if(3&t){let i;for(h=Array(ow),i=0;i<h.length;i+=1){const s=tw(e,h,i);d[i]?d[i].p(s,t):(d[i]=iw(s),d[i].c(),d[i].m(n,r))}for(;i<d.length;i+=1)d[i].d(1);d.length=h.length}},i:e,o:e,d(e){e&&S(n),A(d,e),l=!1,i(u)}}}const ow=10;function aw(e,t,n){let{currentAvatar:r}=t,{switchAvatar:i}=t,{applyChanges:s}=t,{cancelChanges:o}=t,{closeModal:a}=t;return e.$$set=e=>{"currentAvatar"in e&&n(0,r=e.currentAvatar),"switchAvatar"in e&&n(1,i=e.switchAvatar),"applyChanges"in e&&n(2,s=e.applyChanges),"cancelChanges"in e&&n(3,o=e.cancelChanges),"closeModal"in e&&n(4,a=e.closeModal)},[r,i,s,o,a,()=>{s(),a()},()=>{o(),a()}]}class cw extends Te{constructor(e){super(),_e(this,e,aw,sw,o,{currentAvatar:0,switchAvatar:1,applyChanges:2,cancelChanges:3,closeModal:4})}}const lw=parseFloat;function uw(e,t=";"){let n;if(Array.isArray(e))n=e.filter((e=>e));else{n=[];for(const t in e)e[t]&&n.push(`${t}:${e[t]}`)}return n.join(t)}function hw(e){let t,n,r,i,s,o,a;function c(e,t){return"string"==typeof e[7][4]?fw:dw}let l=c(e),u=l(e);return{c(){t=x("svg"),n=x("g"),r=x("g"),u.c(),O(r,"transform",e[10]),O(n,"transform",i=`translate(${e[7][0]/2} ${e[7][1]/2})`),O(n,"transform-origin",s=e[7][0]/4+" 0"),O(t,"id",e[0]),O(t,"class",o=m(e[8])+" svelte-1cj2gr0"),O(t,"style",e[9]),O(t,"viewBox",a=`0 0 ${e[7][0]} ${e[7][1]}`),O(t,"aria-hidden","true"),O(t,"role","img"),O(t,"xmlns","http://www.w3.org/2000/svg")},m(e,i){I(e,t,i),_(t,n),_(n,r),u.m(r,null)},p(e,h){l===(l=c(e))&&u?u.p(e,h):(u.d(1),u=l(e),u&&(u.c(),u.m(r,null))),1024&h&&O(r,"transform",e[10]),128&h&&i!==(i=`translate(${e[7][0]/2} ${e[7][1]/2})`)&&O(n,"transform",i),128&h&&s!==(s=e[7][0]/4+" 0")&&O(n,"transform-origin",s),1&h&&O(t,"id",e[0]),256&h&&o!==(o=m(e[8])+" svelte-1cj2gr0")&&O(t,"class",o),512&h&&O(t,"style",e[9]),128&h&&a!==(a=`0 0 ${e[7][0]} ${e[7][1]}`)&&O(t,"viewBox",a)},d(e){e&&S(t),u.d()}}}function dw(e){let t,n,r,i,s,o,a,c,l,u;return{c(){t=x("path"),o=x("path"),O(t,"d",n=e[7][4][0]),O(t,"fill",r=e[3]||e[1]||"currentColor"),O(t,"fill-opacity",i=0!=e[6]?e[4]:e[5]),O(t,"transform",s=`translate(${e[7][0]/-2} ${e[7][1]/-2})`),O(o,"d",a=e[7][4][1]),O(o,"fill",c=e[2]||e[1]||"currentColor"),O(o,"fill-opacity",l=0!=e[6]?e[5]:e[4]),O(o,"transform",u=`translate(${e[7][0]/-2} ${e[7][1]/-2})`)},m(e,n){I(e,t,n),I(e,o,n)},p(e,h){128&h&&n!==(n=e[7][4][0])&&O(t,"d",n),10&h&&r!==(r=e[3]||e[1]||"currentColor")&&O(t,"fill",r),112&h&&i!==(i=0!=e[6]?e[4]:e[5])&&O(t,"fill-opacity",i),128&h&&s!==(s=`translate(${e[7][0]/-2} ${e[7][1]/-2})`)&&O(t,"transform",s),128&h&&a!==(a=e[7][4][1])&&O(o,"d",a),6&h&&c!==(c=e[2]||e[1]||"currentColor")&&O(o,"fill",c),112&h&&l!==(l=0!=e[6]?e[5]:e[4])&&O(o,"fill-opacity",l),128&h&&u!==(u=`translate(${e[7][0]/-2} ${e[7][1]/-2})`)&&O(o,"transform",u)},d(e){e&&S(t),e&&S(o)}}}function fw(e){let t,n,r,i;return{c(){t=x("path"),O(t,"d",n=e[7][4]),O(t,"fill",r=e[1]||e[2]||"currentColor"),O(t,"transform",i=`translate(${e[7][0]/-2} ${e[7][1]/-2})`)},m(e,n){I(e,t,n)},p(e,s){128&s&&n!==(n=e[7][4])&&O(t,"d",n),6&s&&r!==(r=e[1]||e[2]||"currentColor")&&O(t,"fill",r),128&s&&i!==(i=`translate(${e[7][0]/-2} ${e[7][1]/-2})`)&&O(t,"transform",i)},d(e){e&&S(t)}}}function pw(t){let n,r=t[7][4]&&hw(t);return{c(){r&&r.c(),n=N()},m(e,t){r&&r.m(e,t),I(e,n,t)},p(e,[t]){e[7][4]?r?r.p(e,t):(r=hw(e),r.c(),r.m(n.parentNode,n)):r&&(r.d(1),r=null)},i:e,o:e,d(e){r&&r.d(e),e&&S(n)}}}function mw(e,t,n){let r,i,s,o,{class:a=""}=t,{id:c=""}=t,{style:l=""}=t,{icon:u}=t,{size:h=""}=t,{color:d=""}=t,{fw:f=!1}=t,{pull:p=""}=t,{scale:m=1}=t,{translateX:g=0}=t,{translateY:y=0}=t,{rotate:v=""}=t,{flip:w=!1}=t,{spin:b=!1}=t,{pulse:k=!1}=t,{primaryColor:_=""}=t,{secondaryColor:T=""}=t,{primaryOpacity:E=1}=t,{secondaryOpacity:I=.4}=t,{swapOpacity:S=!1}=t;return e.$$set=e=>{"class"in e&&n(11,a=e.class),"id"in e&&n(0,c=e.id),"style"in e&&n(12,l=e.style),"icon"in e&&n(13,u=e.icon),"size"in e&&n(14,h=e.size),"color"in e&&n(1,d=e.color),"fw"in e&&n(15,f=e.fw),"pull"in e&&n(16,p=e.pull),"scale"in e&&n(17,m=e.scale),"translateX"in e&&n(18,g=e.translateX),"translateY"in e&&n(19,y=e.translateY),"rotate"in e&&n(20,v=e.rotate),"flip"in e&&n(21,w=e.flip),"spin"in e&&n(22,b=e.spin),"pulse"in e&&n(23,k=e.pulse),"primaryColor"in e&&n(2,_=e.primaryColor),"secondaryColor"in e&&n(3,T=e.secondaryColor),"primaryOpacity"in e&&n(4,E=e.primaryOpacity),"secondaryOpacity"in e&&n(5,I=e.secondaryOpacity),"swapOpacity"in e&&n(6,S=e.swapOpacity)},e.$$.update=()=>{8192&e.$$.dirty&&n(7,r=u&&u.icon||[0,0,"",[],""]),12584960&e.$$.dirty&&n(8,i=uw([a,"svelte-fa",b&&"spin",k&&"pulse"]," ")),118784&e.$$.dirty&&n(9,s=function(e,t,n,r){let i,s,o,a,c,l="-.125em";return r&&(c="center",s="1.25em"),n&&(i=n),t&&("lg"==t?(a="1.33333em",o=".75em",l="-.225em"):a="xs"==t?".75em":"sm"==t?".875em":t.replace("x","em")),uw([uw({float:i,width:s,height:"1em","line-height":o,"font-size":a,"text-align":c,"vertical-align":l,"transform-origin":"center",overflow:"visible"}),e])}(l,h,p,f)),4063232&e.$$.dirty&&n(10,o=function(e,t,n,r,i,s=1,o="",a=""){let c=1,l=1;return i&&("horizontal"==i?c=-1:"vertical"==i?l=-1:c=l=-1),uw([`translate(${lw(t)*s}${o},${lw(n)*s}${o})`,`scale(${c*lw(e)},${l*lw(e)})`,r&&`rotate(${r}${a})`]," ")}(m,g,y,v,w,512))},[c,d,_,T,E,I,S,r,i,s,o,a,l,u,h,f,p,m,g,y,v,w,b,k]}class gw extends Te{constructor(e){super(),_e(this,e,mw,pw,o,{class:11,id:0,style:12,icon:13,size:14,color:1,fw:15,pull:16,scale:17,translateX:18,translateY:19,rotate:20,flip:21,spin:22,pulse:23,primaryColor:2,secondaryColor:3,primaryOpacity:4,secondaryOpacity:5,swapOpacity:6})}}
/*!
     * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
     * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
     */var yw={prefix:"fas",iconName:"edit",icon:[576,512,[],"f044","M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"]};function vw(t){let n,r,i,s,o;return r=new gw({props:{icon:yw}}),{c(){n=C("p"),we(r.$$.fragment),O(n,"class","profile-editor-btn svelte-l23lzd")},m(e,a){I(e,n,a),be(r,n,null),i=!0,s||(o=D(n,"click",t[0]),s=!0)},p:e,i(e){i||(de(r.$$.fragment,e),i=!0)},o(e){fe(r.$$.fragment,e),i=!1},d(e){e&&S(n),ke(r),s=!1,o()}}}function ww(e,t,n){const{open:r,close:i}=(s="simple-modal",z().$$.context.get(s));var s;const o={styleBg:{backgroundColor:"rgb(0,0,0,.85)"},styleWindow:{backgroundColor:"var(--main-bg-color)"},closeButton:!1};let{currentAvatar:a}=t,{switchAvatar:c}=t,{applyChanges:l}=t,{cancelChanges:u}=t;function h(){i()}return e.$$set=e=>{"currentAvatar"in e&&n(1,a=e.currentAvatar),"switchAvatar"in e&&n(2,c=e.switchAvatar),"applyChanges"in e&&n(3,l=e.applyChanges),"cancelChanges"in e&&n(4,u=e.cancelChanges)},[()=>{r(cw,{currentAvatar:a,switchAvatar:c,applyChanges:l,cancelChanges:u,closeModal:h},o)},a,c,l,u]}class bw extends Te{constructor(e){super(),_e(this,e,ww,vw,o,{currentAvatar:1,switchAvatar:2,applyChanges:3,cancelChanges:4})}}function kw(e){let t,n,r,i,s,o,a,c,l,u,h,d,f;return t=new jv({props:{title:e[19],$$slots:{default:[Ew]},$$scope:{ctx:e}}}),o=new jv({props:{title:"total games",$$slots:{default:[Iw]},$$scope:{ctx:e}}}),c=new jv({props:{title:"pass rate",$$slots:{default:[Sw]},$$scope:{ctx:e}}}),u=new jv({props:{title:"avg words per minute",$$slots:{default:[Aw]},$$scope:{ctx:e}}}),d=new jv({props:{title:"avg letters per minute",$$slots:{default:[Cw]},$$scope:{ctx:e}}}),{c(){we(t.$$.fragment),n=R(),r=C("br"),i=R(),s=C("div"),we(o.$$.fragment),a=R(),we(c.$$.fragment),l=R(),we(u.$$.fragment),h=R(),we(d.$$.fragment),O(s,"class","card-collection svelte-1y3sr8l")},m(e,p){be(t,e,p),I(e,n,p),I(e,r,p),I(e,i,p),I(e,s,p),be(o,s,null),_(s,a),be(c,s,null),_(s,l),be(u,s,null),_(s,h),be(d,s,null),f=!0},p(e,n){const r={};537067520&n&&(r.$$scope={dirty:n,ctx:e}),t.$set(r);const i={};536870927&n&&(i.$$scope={dirty:n,ctx:e}),o.$set(i);const s={};536932352&n&&(s.$$scope={dirty:n,ctx:e}),c.$set(s);const a={};536871152&n&&(a.$$scope={dirty:n,ctx:e}),u.$set(a);const l={};536874752&n&&(l.$$scope={dirty:n,ctx:e}),d.$set(l)},i(e){f||(de(t.$$.fragment,e),de(o.$$.fragment,e),de(c.$$.fragment,e),de(u.$$.fragment,e),de(d.$$.fragment,e),f=!0)},o(e){fe(t.$$.fragment,e),fe(o.$$.fragment,e),fe(c.$$.fragment,e),fe(u.$$.fragment,e),fe(d.$$.fragment,e),f=!1},d(e){ke(t,e),e&&S(n),e&&S(r),e&&S(i),e&&S(s),ke(o),ke(c),ke(u),ke(d)}}}function _w(e){let t,n;return{c(){t=C("img"),c(t.src,n=e[16])||O(t,"src",n),O(t,"alt","Avatar"),O(t,"class","svelte-1y3sr8l")},m(e,n){I(e,t,n)},p(e,r){65536&r&&!c(t.src,n=e[16])&&O(t,"src",n)},d(e){e&&S(t)}}}function Tw(e){let t,n;return t=new bw({props:{currentAvatar:e[17],switchAvatar:e[23],applyChanges:e[24],cancelChanges:e[25]}}),{c(){we(t.$$.fragment)},m(e,r){be(t,e,r),n=!0},p(e,n){const r={};131072&n&&(r.currentAvatar=e[17]),t.$set(r)},i(e){n||(de(t.$$.fragment,e),n=!0)},o(e){fe(t.$$.fragment,e),n=!1},d(e){ke(t,e)}}}function Ew(e){let t,n,r,i,s,o;return t=new Hv({props:{$$slots:{default:[_w]},$$scope:{ctx:e}}}),s=new ew({props:{$$slots:{default:[Tw]},$$scope:{ctx:e}}}),{c(){we(t.$$.fragment),n=R(),r=C("br"),i=R(),we(s.$$.fragment)},m(e,a){be(t,e,a),I(e,n,a),I(e,r,a),I(e,i,a),be(s,e,a),o=!0},p(e,n){const r={};536936448&n&&(r.$$scope={dirty:n,ctx:e}),t.$set(r);const i={};537001984&n&&(i.$$scope={dirty:n,ctx:e}),s.$set(i)},i(e){o||(de(t.$$.fragment,e),de(s.$$.fragment,e),o=!0)},o(e){fe(t.$$.fragment,e),fe(s.$$.fragment,e),o=!1},d(e){ke(t,e),e&&S(n),e&&S(r),e&&S(i),ke(s,e)}}}function Iw(e){let t,n;return t=new Hv({props:{overall:e[0],easy:e[1],medium:e[2],hard:e[3],impossible:e[18],units:""}}),{c(){we(t.$$.fragment)},m(e,r){be(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.overall=e[0]),2&n&&(r.easy=e[1]),4&n&&(r.medium=e[2]),8&n&&(r.hard=e[3]),t.$set(r)},i(e){n||(de(t.$$.fragment,e),n=!0)},o(e){fe(t.$$.fragment,e),n=!1},d(e){ke(t,e)}}}function Sw(e){let t,n;return t=new Hv({props:{overall:100*e[12],easy:100*e[13],medium:100*e[14],hard:100*e[15],impossible:e[22],units:"%"}}),{c(){we(t.$$.fragment)},m(e,r){be(t,e,r),n=!0},p(e,n){const r={};4096&n&&(r.overall=100*e[12]),8192&n&&(r.easy=100*e[13]),16384&n&&(r.medium=100*e[14]),32768&n&&(r.hard=100*e[15]),t.$set(r)},i(e){n||(de(t.$$.fragment,e),n=!0)},o(e){fe(t.$$.fragment,e),n=!1},d(e){ke(t,e)}}}function Aw(e){let t,n;return t=new Hv({props:{overall:e[4],easy:e[5],medium:e[6],hard:e[7],impossible:e[20],units:""}}),{c(){we(t.$$.fragment)},m(e,r){be(t,e,r),n=!0},p(e,n){const r={};16&n&&(r.overall=e[4]),32&n&&(r.easy=e[5]),64&n&&(r.medium=e[6]),128&n&&(r.hard=e[7]),t.$set(r)},i(e){n||(de(t.$$.fragment,e),n=!0)},o(e){fe(t.$$.fragment,e),n=!1},d(e){ke(t,e)}}}function Cw(e){let t,n;return t=new Hv({props:{overall:e[8],easy:e[9],medium:e[10],hard:e[11],impossible:e[21],units:""}}),{c(){we(t.$$.fragment)},m(e,r){be(t,e,r),n=!0},p(e,n){const r={};256&n&&(r.overall=e[8]),512&n&&(r.easy=e[9]),1024&n&&(r.medium=e[10]),2048&n&&(r.hard=e[11]),t.$set(r)},i(e){n||(de(t.$$.fragment,e),n=!0)},o(e){fe(t.$$.fragment,e),n=!1},d(e){ke(t,e)}}}function xw(e){let t,n,r,i,s=null!=e[0]&&kw(e);return{c(){t=C("main"),n=C("h1"),n.textContent="profile",r=R(),s&&s.c()},m(e,o){I(e,t,o),_(t,n),_(t,r),s&&s.m(t,null),i=!0},p(e,[n]){null!=e[0]?s?(s.p(e,n),1&n&&de(s,1)):(s=kw(e),s.c(),de(s,1),s.m(t,null)):s&&(ue(),fe(s,1,1,(()=>{s=null})),he())},i(e){i||(de(s),i=!0)},o(e){fe(s),i=!1},d(e){e&&S(t),s&&s.d()}}}const $w="profile-photo-";function Rw(e,t,n){let r,i,s,o,a,c,l,u,h,d,f,p,m,g,y,v,{currentRoute:w}=t,{params:b}=t,k=ov().email.substr(0,ov().email.indexOf("@")),_="/profile-photos/photo0.png",T=0,E=0;return q((()=>{hv(ov().uid).then((e=>{n(1,i=e.easyGamesFailed+e.easyGamesWon),n(2,s=e.mediumGamesFailed+e.mediumGamesWon),n(3,o=e.hardGamesFailed+e.hardGamesWon),n(0,r=i+s+o);let t=e.easyGamesWon+e.mediumGamesWon+e.hardGamesWon;n(5,c=e.easyWPM),n(9,d=e.easyLPM),n(6,l=e.mediumWPM),n(10,f=e.mediumLPM),n(7,u=e.hardWPM),n(11,p=e.hardLPM),n(4,a=0!=r?(c*e.easyGamesWon+l*e.mediumGamesWon+u*e.hardGamesWon)/t:0),n(8,h=0!=r?(d*e.easyGamesWon+f*e.mediumGamesWon+p*e.hardGamesWon)/t:0),n(13,g=0!=i?Math.round(e.easyGamesWon/i*100)/100:0),n(14,y=0!=s?Math.round(e.mediumGamesWon/s*100)/100:0),n(15,v=0!=o?Math.round(e.hardGamesWon/o*100)/100:0),n(12,m=0!=r?Math.round(t/r*100)/100:0),null==e.profilePhoto?dv(ov().uid,{profilePhoto:0}):(n(17,T=e.profilePhoto),E=T,n(16,_="/profile-photos/photo"+e.profilePhoto+".png"))}))})),e.$$set=e=>{"currentRoute"in e&&n(26,w=e.currentRoute),"params"in e&&n(27,b=e.params)},[r,i,s,o,a,c,l,u,h,d,f,p,m,g,y,v,_,T,undefined,k,undefined,undefined,undefined,function(e){const t=$w+E;if(e.target.id!=t){let n=document.getElementById(e.target.id);n.classList.remove("nonselected-avatar"),n.classList.add("selected-avatar");let r=document.getElementById(t);r.classList.remove("selected-avatar"),r.classList.add("nonselected-avatar"),E=e.target.id.substr($w.length)}},async function(){n(17,T=E),n(16,_="/profile-photos/photo"+E+".png"),dv(ov().uid,{profilePhoto:E})},function(){const e=$w+E;let t=document.getElementById(e);t.classList.remove("selected-avatar"),t.classList.add("nonselected-avatar"),E=T},w,b]}function Nw(t){let n,r,i,s,o,a,l,u,h,d,f,p,m,g,y,v,w,b,k,T,E=`${t[3]}`;return{c(){n=C("div"),r=C("div"),i=C("strong"),s=$(E),o=R(),a=C("div"),l=C("img"),h=R(),d=C("div"),f=$(t[0]),p=R(),m=C("br"),g=R(),y=$(t[4]),v=R(),w=C("br"),b=R(),k=C("div"),T=$(t[2]),O(r,"class","block-item svelte-1faartk"),O(l,"alt","avatar"),c(l.src,u="/profile-photos/photo"+t[1]+".png")||O(l,"src",u),O(l,"class","svelte-1faartk"),O(a,"class","block-item profile-photo svelte-1faartk"),O(d,"class","block-item date svelte-1faartk"),O(k,"class","block-item score svelte-1faartk"),O(n,"class","leaderboard-env svelte-1faartk")},m(e,t){I(e,n,t),_(n,r),_(r,i),_(i,s),_(n,o),_(n,a),_(a,l),_(n,h),_(n,d),_(d,f),_(d,p),_(d,m),_(d,g),_(d,y),_(d,v),_(d,w),_(n,b),_(n,k),_(k,T)},p(e,[t]){8&t&&E!==(E=`${e[3]}`)&&P(s,E),2&t&&!c(l.src,u="/profile-photos/photo"+e[1]+".png")&&O(l,"src",u),1&t&&P(f,e[0]),16&t&&P(y,e[4]),4&t&&P(T,e[2])},i:e,o:e,d(e){e&&S(n)}}}function Dw(e,t,n){let{user:r}=t,{profilePhoto:i}=t,{score:s}=t,{place:o}=t,{date:a}=t;return e.$$set=e=>{"user"in e&&n(0,r=e.user),"profilePhoto"in e&&n(1,i=e.profilePhoto),"score"in e&&n(2,s=e.score),"place"in e&&n(3,o=e.place),"date"in e&&n(4,a=e.date)},[r,i,s,o,a]}class Ow extends Te{constructor(e){super(),_e(this,e,Dw,Nw,o,{user:0,profilePhoto:1,score:2,place:3,date:4})}}function Pw(e,t,n){const r=e.slice();return r[6]=t[n],r[8]=n,r}function Mw(e,t,n){const r=e.slice();return r[6]=t[n],r[8]=n,r}function Lw(e,t,n){const r=e.slice();return r[6]=t[n],r[8]=n,r}function Fw(e,t,n){const r=e.slice();return r[6]=t[n],r[8]=n,r}function Uw(e){let t,n,r,i,s,o,a,c,l;return n=new jv({props:{title:"easy (wpm)",$$slots:{default:[jw]},$$scope:{ctx:e}}}),i=new jv({props:{title:"medium (wpm)",$$slots:{default:[zw]},$$scope:{ctx:e}}}),o=new jv({props:{title:"hard (wpm)",$$slots:{default:[Kw]},$$scope:{ctx:e}}}),c=new jv({props:{title:"impossible (wpm)",$$slots:{default:[Ww]},$$scope:{ctx:e}}}),{c(){t=C("div"),we(n.$$.fragment),r=R(),we(i.$$.fragment),s=R(),we(o.$$.fragment),a=R(),we(c.$$.fragment),O(t,"class","card-collection svelte-1fut4fz")},m(e,u){I(e,t,u),be(n,t,null),_(t,r),be(i,t,null),_(t,s),be(o,t,null),_(t,a),be(c,t,null),l=!0},p(e,t){const r={};4097&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r);const s={};4098&t&&(s.$$scope={dirty:t,ctx:e}),i.$set(s);const a={};4100&t&&(a.$$scope={dirty:t,ctx:e}),o.$set(a);const l={};4104&t&&(l.$$scope={dirty:t,ctx:e}),c.$set(l)},i(e){l||(de(n.$$.fragment,e),de(i.$$.fragment,e),de(o.$$.fragment,e),de(c.$$.fragment,e),l=!0)},o(e){fe(n.$$.fragment,e),fe(i.$$.fragment,e),fe(o.$$.fragment,e),fe(c.$$.fragment,e),l=!1},d(e){e&&S(t),ke(n),ke(i),ke(o),ke(c)}}}function Bw(e){let t,n;return t=new Ow({props:{profilePhoto:e[6].profilePhoto,user:e[6].user,score:e[6].score,date:e[6].date,place:e[8]+1}}),{c(){we(t.$$.fragment)},m(e,r){be(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.profilePhoto=e[6].profilePhoto),1&n&&(r.user=e[6].user),1&n&&(r.score=e[6].score),1&n&&(r.date=e[6].date),t.$set(r)},i(e){n||(de(t.$$.fragment,e),n=!0)},o(e){fe(t.$$.fragment,e),n=!1},d(e){ke(t,e)}}}function jw(e){let t,n,r=e[0].slice(0,5),i=[];for(let t=0;t<r.length;t+=1)i[t]=Bw(Fw(e,r,t));const s=e=>fe(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=N()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);I(e,t,r),n=!0},p(e,n){if(1&n){let o;for(r=e[0].slice(0,5),o=0;o<r.length;o+=1){const s=Fw(e,r,o);i[o]?(i[o].p(s,n),de(i[o],1)):(i[o]=Bw(s),i[o].c(),de(i[o],1),i[o].m(t.parentNode,t))}for(ue(),o=r.length;o<i.length;o+=1)s(o);he()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)de(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)fe(i[e]);n=!1},d(e){A(i,e),e&&S(t)}}}function Vw(e){let t,n;return t=new Ow({props:{profilePhoto:e[6].profilePhoto,user:e[6].user,score:e[6].score,date:e[6].date,place:e[8]+1}}),{c(){we(t.$$.fragment)},m(e,r){be(t,e,r),n=!0},p(e,n){const r={};2&n&&(r.profilePhoto=e[6].profilePhoto),2&n&&(r.user=e[6].user),2&n&&(r.score=e[6].score),2&n&&(r.date=e[6].date),t.$set(r)},i(e){n||(de(t.$$.fragment,e),n=!0)},o(e){fe(t.$$.fragment,e),n=!1},d(e){ke(t,e)}}}function zw(e){let t,n,r=e[1].slice(0,5),i=[];for(let t=0;t<r.length;t+=1)i[t]=Vw(Lw(e,r,t));const s=e=>fe(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=N()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);I(e,t,r),n=!0},p(e,n){if(2&n){let o;for(r=e[1].slice(0,5),o=0;o<r.length;o+=1){const s=Lw(e,r,o);i[o]?(i[o].p(s,n),de(i[o],1)):(i[o]=Vw(s),i[o].c(),de(i[o],1),i[o].m(t.parentNode,t))}for(ue(),o=r.length;o<i.length;o+=1)s(o);he()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)de(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)fe(i[e]);n=!1},d(e){A(i,e),e&&S(t)}}}function qw(e){let t,n;return t=new Ow({props:{profilePhoto:e[6].profilePhoto,user:e[6].user,score:e[6].score,date:e[6].date,place:e[8]+1}}),{c(){we(t.$$.fragment)},m(e,r){be(t,e,r),n=!0},p(e,n){const r={};4&n&&(r.profilePhoto=e[6].profilePhoto),4&n&&(r.user=e[6].user),4&n&&(r.score=e[6].score),4&n&&(r.date=e[6].date),t.$set(r)},i(e){n||(de(t.$$.fragment,e),n=!0)},o(e){fe(t.$$.fragment,e),n=!1},d(e){ke(t,e)}}}function Kw(e){let t,n,r=e[2].slice(0,5),i=[];for(let t=0;t<r.length;t+=1)i[t]=qw(Mw(e,r,t));const s=e=>fe(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=N()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);I(e,t,r),n=!0},p(e,n){if(4&n){let o;for(r=e[2].slice(0,5),o=0;o<r.length;o+=1){const s=Mw(e,r,o);i[o]?(i[o].p(s,n),de(i[o],1)):(i[o]=qw(s),i[o].c(),de(i[o],1),i[o].m(t.parentNode,t))}for(ue(),o=r.length;o<i.length;o+=1)s(o);he()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)de(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)fe(i[e]);n=!1},d(e){A(i,e),e&&S(t)}}}function Hw(e){let t,n;return t=new Ow({props:{profilePhoto:e[6].profilePhoto,user:e[6].user,score:e[6].score,date:e[6].date,place:e[8]+1}}),{c(){we(t.$$.fragment)},m(e,r){be(t,e,r),n=!0},p(e,n){const r={};8&n&&(r.profilePhoto=e[6].profilePhoto),8&n&&(r.user=e[6].user),8&n&&(r.score=e[6].score),8&n&&(r.date=e[6].date),t.$set(r)},i(e){n||(de(t.$$.fragment,e),n=!0)},o(e){fe(t.$$.fragment,e),n=!1},d(e){ke(t,e)}}}function Ww(e){let t,n,r=e[3].slice(0,5),i=[];for(let t=0;t<r.length;t+=1)i[t]=Hw(Pw(e,r,t));const s=e=>fe(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=N()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);I(e,t,r),n=!0},p(e,n){if(8&n){let o;for(r=e[3].slice(0,5),o=0;o<r.length;o+=1){const s=Pw(e,r,o);i[o]?(i[o].p(s,n),de(i[o],1)):(i[o]=Hw(s),i[o].c(),de(i[o],1),i[o].m(t.parentNode,t))}for(ue(),o=r.length;o<i.length;o+=1)s(o);he()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)de(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)fe(i[e]);n=!1},d(e){A(i,e),e&&S(t)}}}function Gw(e){let t,n,r,i,s=!(0==e[0].length||0==e[1].length||0==e[2].length||0==e[3].length)&&Uw(e);return{c(){t=C("main"),n=C("h1"),n.textContent="leaderboard",r=R(),s&&s.c()},m(e,o){I(e,t,o),_(t,n),_(t,r),s&&s.m(t,null),i=!0},p(e,[n]){0!=e[0].length&&0!=e[1].length&&0!=e[2].length&&0!=e[3].length?s?(s.p(e,n),15&n&&de(s,1)):(s=Uw(e),s.c(),de(s,1),s.m(t,null)):s&&(ue(),fe(s,1,1,(()=>{s=null})),he())},i(e){i||(de(s),i=!0)},o(e){fe(s),i=!1},d(e){e&&S(t),s&&s.d()}}}function Jw(e,t,n){let{currentRoute:r}=t,{params:i}=t,s=[],o=[],a=[],c=[];return q((()=>{uv("easy_wpm").then((e=>{n(0,s=e)})),uv("medium_wpm").then((e=>{n(1,o=e)})),uv("hard_wpm").then((e=>{n(2,a=e)})),uv("impossible_wpm").then((e=>{n(3,c=e)}))})),e.$$set=e=>{"currentRoute"in e&&n(4,r=e.currentRoute),"params"in e&&n(5,i=e.params)},[s,o,a,c,r,i]}function Xw(t){let n,r,i,s,o;return s=new mt({props:{text:"return home",onClickFn:at}}),{c(){n=C("main"),r=C("h2"),r.textContent="oops, looks like that page doesn't exist",i=R(),we(s.$$.fragment)},m(e,t){I(e,n,t),_(n,r),_(n,i),be(s,n,null),o=!0},p:e,i(e){o||(de(s.$$.fragment,e),o=!0)},o(e){fe(s.$$.fragment,e),o=!1},d(e){e&&S(n),ke(s)}}}function Yw(e,t,n){let{currentRoute:r}=t,{params:i}=t;return e.$$set=e=>{"currentRoute"in e&&n(0,r=e.currentRoute),"params"in e&&n(1,i=e.params)},[r,i]}function Qw(t){let n,r,i;return{c(){n=C("main"),r=C("h1"),r.textContent="logging you out"},m(e,t){I(e,n,t),_(n,r)},p:e,i(e){i||Z((()=>{i=me(r,pv,{}),i.start()}))},o:e,d(e){e&&S(n)}}}function Zw(e,t,n){lv();let{currentRoute:r}=t,{params:i}=t;return e.$$set=e=>{"currentRoute"in e&&n(0,r=e.currentRoute),"params"in e&&n(1,i=e.params)},[r,i]}function eb(e){let t,n,r,i,s,o,a;return{c(){t=C("p"),t.textContent="taco enthusiast",n=R(),r=C("p"),r.innerHTML='website: <a href="https://youtu.be/QtBDL8EiNZo">davedlu.com</a>',i=R(),s=C("p"),s.innerHTML='linkedin: <a href="https://www.linkedin.com/in/davidluprofile">davidluprofile</a>',o=R(),a=C("p"),a.innerHTML='github: <a href="https://github.com/davidlu51412">davidlu51412</a>'},m(e,c){I(e,t,c),I(e,n,c),I(e,r,c),I(e,i,c),I(e,s,c),I(e,o,c),I(e,a,c)},d(e){e&&S(t),e&&S(n),e&&S(r),e&&S(i),e&&S(s),e&&S(o),e&&S(a)}}}function tb(e){let t,n,r,i,s,o,a;return{c(){t=C("p"),t.textContent="also a taco enthusiast",n=R(),r=C("p"),r.innerHTML='website: <a href="https://aszala.com">aszala.com</a>',i=R(),s=C("p"),s.innerHTML='linkedin: <a href="https://www.linkedin.com/in/aszala">aszala</a>',o=R(),a=C("p"),a.innerHTML='github: <a href="https://www.github.com/aszala">aszala</a>'},m(e,c){I(e,t,c),I(e,n,c),I(e,r,c),I(e,i,c),I(e,s,c),I(e,o,c),I(e,a,c)},d(e){e&&S(t),e&&S(n),e&&S(r),e&&S(i),e&&S(s),e&&S(o),e&&S(a)}}}function nb(e){let t,n,r,i,s,o;return r=new jv({props:{title:"david lu",$$slots:{default:[eb]},$$scope:{ctx:e}}}),s=new jv({props:{title:"abhay zala",$$slots:{default:[tb]},$$scope:{ctx:e}}}),{c(){t=C("main"),n=C("div"),we(r.$$.fragment),i=R(),we(s.$$.fragment),O(n,"class","card-collection svelte-jfc25t")},m(e,a){I(e,t,a),_(t,n),be(r,n,null),_(n,i),be(s,n,null),o=!0},p(e,[t]){const n={};4&t&&(n.$$scope={dirty:t,ctx:e}),r.$set(n);const i={};4&t&&(i.$$scope={dirty:t,ctx:e}),s.$set(i)},i(e){o||(de(r.$$.fragment,e),de(s.$$.fragment,e),o=!0)},o(e){fe(r.$$.fragment,e),fe(s.$$.fragment,e),o=!1},d(e){e&&S(t),ke(r),ke(s)}}}function rb(e,t,n){let{currentRoute:r}=t,{params:i}=t;return e.$$set=e=>{"currentRoute"in e&&n(0,r=e.currentRoute),"params"in e&&n(1,i=e.params)},[r,i]}async function ib(){return!await av()}const sb=[{name:"/",component:Iv},{name:"index",component:Iv,onlyIf:{guard:()=>!1,redirect:"/"}},{name:"login",component:class extends Te{constructor(e){super(),_e(this,e,Ov,Dv,o,{currentRoute:7,params:8})}},onlyIf:{guard:ib,redirect:"/"}},{name:"signup",component:class extends Te{constructor(e){super(),_e(this,e,Fv,Lv,o,{currentRoute:6,params:7})}},onlyIf:{guard:ib,redirect:"/"}},{name:"profile",component:class extends Te{constructor(e){super(),_e(this,e,Rw,xw,o,{currentRoute:26,params:27})}},onlyIf:{guard:av,redirect:"/"}},{name:"leaderboard",component:class extends Te{constructor(e){super(),_e(this,e,Jw,Gw,o,{currentRoute:4,params:5})}}},{name:"logout",component:class extends Te{constructor(e){super(),_e(this,e,Zw,Qw,o,{currentRoute:0,params:1})}},onlyIf:{guard:av,redirect:"/"}},{name:"404",component:class extends Te{constructor(e){super(),_e(this,e,Yw,Xw,o,{currentRoute:0,params:1})}}},{name:"creators",component:class extends Te{constructor(e){super(),_e(this,e,rb,nb,o,{currentRoute:0,params:1})}}}];function ob(t){let n,r,i,s,o,a;function c(e,t){return e[0]?cb:ab}let l=c(t),u=l(t);return{c(){n=C("div"),r=C("a"),r.textContent="play",i=R(),s=C("a"),s.textContent="leaderboard",o=R(),u.c(),O(r,"href","/"),O(r,"class","svelte-w57tyo"),O(s,"href","/leaderboard"),O(s,"class","svelte-w57tyo"),O(n,"id","links"),O(n,"class","svelte-w57tyo")},m(e,t){I(e,n,t),_(n,r),_(n,i),_(n,s),_(n,o),u.m(n,null)},p(e,t){l!==(l=c(e))&&(u.d(1),u=l(e),u&&(u.c(),u.m(n,null)))},i(e){a||Z((()=>{a=me(n,pv,{}),a.start()}))},o:e,d(e){e&&S(n),u.d()}}}function ab(e){let t,n,r;return{c(){t=C("a"),t.textContent="login",n=R(),r=C("a"),r.textContent="signup",O(t,"href","/login"),O(t,"class","svelte-w57tyo"),O(r,"href","/signup"),O(r,"class","svelte-w57tyo")},m(e,i){I(e,t,i),I(e,n,i),I(e,r,i)},d(e){e&&S(t),e&&S(n),e&&S(r)}}}function cb(e){let t,n,r;return{c(){t=C("a"),t.textContent="profile",n=R(),r=C("a"),r.textContent="logout",O(t,"href","/profile"),O(t,"class","svelte-w57tyo"),O(r,"href","/logout"),O(r,"class","svelte-w57tyo")},m(e,i){I(e,t,i),I(e,n,i),I(e,r,i)},d(e){e&&S(t),e&&S(n),e&&S(r)}}}function lb(t){let n,r,i,s=t[1]&&ob(t);return{c(){n=C("div"),r=C("a"),r.textContent="perfect type",i=R(),s&&s.c(),O(r,"id","title"),O(r,"href","/"),O(r,"class","svelte-w57tyo"),O(n,"class","header svelte-w57tyo")},m(e,t){I(e,n,t),_(n,r),_(n,i),s&&s.m(n,null)},p(e,[t]){e[1]?s?(s.p(e,t),2&t&&de(s,1)):(s=ob(e),s.c(),de(s,1),s.m(n,null)):s&&(s.d(1),s=null)},i(e){de(s)},o:e,d(e){e&&S(n),s&&s.d()}}}function ub(e,t,n){let r=!1,i=!1;return av().then((e=>{n(0,r=e),n(1,i=!0)})),[r,i]}class hb extends Te{constructor(e){super(),_e(this,e,ub,lb,o,{})}}var db=vn((function(e,t){!function(n,r){var i="function",s="undefined",o="object",a="string",c="model",l="name",u="type",h="vendor",d="version",f="architecture",p="console",m="mobile",g="tablet",y="smarttv",v="wearable",w="embedded",b="Amazon",k="Apple",_="ASUS",T="BlackBerry",E="Firefox",I="Google",S="Huawei",A="LG",C="Microsoft",x="Motorola",$="Opera",R="Samsung",N="Sony",D="Xiaomi",O="Zebra",P="Facebook",M=function(e){for(var t={},n=0;n<e.length;n++)t[e[n].toUpperCase()]=e[n];return t},L=function(e,t){return typeof e===a&&-1!==F(t).indexOf(F(e))},F=function(e){return e.toLowerCase()},U=function(e,t){if(typeof e===a)return e=e.replace(/^\s\s*/,"").replace(/\s\s*$/,""),typeof t===s?e:e.substring(0,255)},B=function(e,t){for(var n,s,a,c,l,u,h=0;h<t.length&&!l;){var d=t[h],f=t[h+1];for(n=s=0;n<d.length&&!l;)if(l=d[n++].exec(e))for(a=0;a<f.length;a++)u=l[++s],typeof(c=f[a])===o&&c.length>0?2===c.length?typeof c[1]==i?this[c[0]]=c[1].call(this,u):this[c[0]]=c[1]:3===c.length?typeof c[1]!==i||c[1].exec&&c[1].test?this[c[0]]=u?u.replace(c[1],c[2]):r:this[c[0]]=u?c[1].call(this,u,c[2]):r:4===c.length&&(this[c[0]]=u?c[3].call(this,u.replace(c[1],c[2])):r):this[c]=u||r;h+=2}},j=function(e,t){for(var n in t)if(typeof t[n]===o&&t[n].length>0){for(var i=0;i<t[n].length;i++)if(L(t[n][i],e))return"?"===n?r:n}else if(L(t[n],e))return"?"===n?r:n;return e},V={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},z={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[d,[l,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[d,[l,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[l,d],[/opios[\/ ]+([\w\.]+)/i],[d,[l,"Opera Mini"]],[/\bopr\/([\w\.]+)/i],[d,[l,$]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[l,d],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[d,[l,"UCBrowser"]],[/\bqbcore\/([\w\.]+)/i],[d,[l,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[d,[l,"WeChat"]],[/konqueror\/([\w\.]+)/i],[d,[l,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[d,[l,"IE"]],[/yabrowser\/([\w\.]+)/i],[d,[l,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[l,/(.+)/,"$1 Secure Browser"],d],[/\bfocus\/([\w\.]+)/i],[d,[l,"Firefox Focus"]],[/\bopt\/([\w\.]+)/i],[d,[l,"Opera Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[d,[l,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[d,[l,"Dolphin"]],[/coast\/([\w\.]+)/i],[d,[l,"Opera Coast"]],[/miuibrowser\/([\w\.]+)/i],[d,[l,"MIUI Browser"]],[/fxios\/([-\w\.]+)/i],[d,[l,E]],[/\bqihu|(qi?ho?o?|360)browser/i],[[l,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[l,/(.+)/,"$1 Browser"],d],[/(comodo_dragon)\/([\w\.]+)/i],[[l,/_/g," "],d],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[l,d],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i],[l],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[l,P],d],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[l,d],[/\bgsa\/([\w\.]+) .*safari\//i],[d,[l,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[d,[l,"Chrome Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[l,"Chrome WebView"],d],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[d,[l,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[l,d],[/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],[d,[l,"Mobile Safari"]],[/version\/([\w\.]+) .*(mobile ?safari|safari)/i],[d,l],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[l,[d,j,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[l,d],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[l,"Netscape"],d],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[d,[l,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[l,d]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[f,"amd64"]],[/(ia32(?=;))/i],[[f,F]],[/((?:i[346]|x)86)[;\)]/i],[[f,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[f,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[f,"armhf"]],[/windows (ce|mobile); ppc;/i],[[f,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[f,/ower/,"",F]],[/(sun4\w)[;\)]/i],[[f,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[f,F]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[c,[h,R],[u,g]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[c,[h,R],[u,m]],[/\((ip(?:hone|od)[\w ]*);/i],[c,[h,k],[u,m]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[c,[h,k],[u,g]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[c,[h,S],[u,g]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i],[c,[h,S],[u,m]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[c,/_/g," "],[h,D],[u,m]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[c,/_/g," "],[h,D],[u,g]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[c,[h,"OPPO"],[u,m]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[c,[h,"Vivo"],[u,m]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[c,[h,"Realme"],[u,m]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[c,[h,x],[u,m]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[c,[h,x],[u,g]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[c,[h,A],[u,g]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[c,[h,A],[u,m]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[c,[h,"Lenovo"],[u,g]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[c,/_/g," "],[h,"Nokia"],[u,m]],[/(pixel c)\b/i],[c,[h,I],[u,g]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[c,[h,I],[u,m]],[/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[c,[h,N],[u,m]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[c,"Xperia Tablet"],[h,N],[u,g]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[c,[h,"OnePlus"],[u,m]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[c,[h,b],[u,g]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[c,/(.+)/g,"Fire Phone $1"],[h,b],[u,m]],[/(playbook);[-\w\),; ]+(rim)/i],[c,h,[u,g]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[c,[h,T],[u,m]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[c,[h,_],[u,g]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[c,[h,_],[u,m]],[/(nexus 9)/i],[c,[h,"HTC"],[u,g]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i],[h,[c,/_/g," "],[u,m]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[c,[h,"Acer"],[u,g]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[c,[h,"Meizu"],[u,m]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[c,[h,"Sharp"],[u,m]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[h,c,[u,m]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[h,c,[u,g]],[/(surface duo)/i],[c,[h,C],[u,g]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[c,[h,"Fairphone"],[u,m]],[/(u304aa)/i],[c,[h,"AT&T"],[u,m]],[/\bsie-(\w*)/i],[c,[h,"Siemens"],[u,m]],[/\b(rct\w+) b/i],[c,[h,"RCA"],[u,g]],[/\b(venue[\d ]{2,7}) b/i],[c,[h,"Dell"],[u,g]],[/\b(q(?:mv|ta)\w+) b/i],[c,[h,"Verizon"],[u,g]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[c,[h,"Barnes & Noble"],[u,g]],[/\b(tm\d{3}\w+) b/i],[c,[h,"NuVision"],[u,g]],[/\b(k88) b/i],[c,[h,"ZTE"],[u,g]],[/\b(nx\d{3}j) b/i],[c,[h,"ZTE"],[u,m]],[/\b(gen\d{3}) b.+49h/i],[c,[h,"Swiss"],[u,m]],[/\b(zur\d{3}) b/i],[c,[h,"Swiss"],[u,g]],[/\b((zeki)?tb.*\b) b/i],[c,[h,"Zeki"],[u,g]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[h,"Dragon Touch"],c,[u,g]],[/\b(ns-?\w{0,9}) b/i],[c,[h,"Insignia"],[u,g]],[/\b((nxa|next)-?\w{0,9}) b/i],[c,[h,"NextBook"],[u,g]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[h,"Voice"],c,[u,m]],[/\b(lvtel\-)?(v1[12]) b/i],[[h,"LvTel"],c,[u,m]],[/\b(ph-1) /i],[c,[h,"Essential"],[u,m]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[c,[h,"Envizen"],[u,g]],[/\b(trio[-\w\. ]+) b/i],[c,[h,"MachSpeed"],[u,g]],[/\btu_(1491) b/i],[c,[h,"Rotor"],[u,g]],[/(shield[\w ]+) b/i],[c,[h,"Nvidia"],[u,g]],[/(sprint) (\w+)/i],[h,c,[u,m]],[/(kin\.[onetw]{3})/i],[[c,/\./g," "],[h,C],[u,m]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[c,[h,O],[u,g]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[c,[h,O],[u,m]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[h,c,[u,p]],[/droid.+; (shield) bui/i],[c,[h,"Nvidia"],[u,p]],[/(playstation [345portablevi]+)/i],[c,[h,N],[u,p]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[c,[h,C],[u,p]],[/smart-tv.+(samsung)/i],[h,[u,y]],[/hbbtv.+maple;(\d+)/i],[[c,/^/,"SmartTV"],[h,R],[u,y]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[h,A],[u,y]],[/(apple) ?tv/i],[h,[c,"Apple TV"],[u,y]],[/crkey/i],[[c,"Chromecast"],[h,I],[u,y]],[/droid.+aft(\w)( bui|\))/i],[c,[h,b],[u,y]],[/\(dtv[\);].+(aquos)/i],[c,[h,"Sharp"],[u,y]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[h,U],[c,U],[u,y]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[u,y]],[/((pebble))app/i],[h,c,[u,v]],[/droid.+; (glass) \d/i],[c,[h,I],[u,v]],[/droid.+; (wt63?0{2,3})\)/i],[c,[h,O],[u,v]],[/(quest( 2)?)/i],[c,[h,P],[u,v]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[h,[u,w]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[c,[u,m]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[c,[u,g]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[u,g]],[/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],[[u,m]],[/(android[-\w\. ]{0,9});.+buil/i],[c,[h,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[d,[l,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[d,[l,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[l,d],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[d,l]],os:[[/microsoft (windows) (vista|xp)/i],[l,d],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[l,[d,j,V]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[l,"Windows"],[d,j,V]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[d,/_/g,"."],[l,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[l,"Mac OS"],[d,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86)/i],[d,l],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[l,d],[/\(bb(10);/i],[d,[l,T]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[d,[l,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[d,[l,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[d,[l,"webOS"]],[/crkey\/([\d\.]+)/i],[d,[l,"Chromecast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[l,"Chromium OS"],d],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[l,d],[/(sunos) ?([\w\.\d]*)/i],[[l,"Solaris"],d],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[l,d]]},q=function(e,t){if(typeof e===o&&(t=e,e=r),!(this instanceof q))return new q(e,t).getResult();var i=e||(typeof n!==s&&n.navigator&&n.navigator.userAgent?n.navigator.userAgent:""),c=t?function(e,t){var n={};for(var r in e)t[r]&&t[r].length%2==0?n[r]=t[r].concat(e[r]):n[r]=e[r];return n}(z,t):z;return this.getBrowser=function(){var e={};return e.name=r,e.version=r,B.call(e,i,c.browser),e.major=function(e){return typeof e===a?e.replace(/[^\d\.]/g,"").split(".")[0]:r}(e.version),e},this.getCPU=function(){var e={};return e.architecture=r,B.call(e,i,c.cpu),e},this.getDevice=function(){var e={};return e.vendor=r,e.model=r,e.type=r,B.call(e,i,c.device),e},this.getEngine=function(){var e={};return e.name=r,e.version=r,B.call(e,i,c.engine),e},this.getOS=function(){var e={};return e.name=r,e.version=r,B.call(e,i,c.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return i},this.setUA=function(e){return i=typeof e===a&&e.length>255?U(e,255):e,this},this.setUA(i),this};q.VERSION="0.7.31",q.BROWSER=M([l,d,"major"]),q.CPU=M([f]),q.DEVICE=M([c,h,u,p,m,y,g,v,w]),q.ENGINE=q.OS=M([l,d]),e.exports&&(t=e.exports=q),t.UAParser=q;var K=typeof n!==s&&(n.jQuery||n.Zepto);if(K&&!K.ua){var H=new q;K.ua=H.getResult(),K.ua.get=function(){return H.getUA()},K.ua.set=function(e){H.setUA(e);var t=H.getResult();for(var n in t)K.ua[n]=t[n]}}}("object"==typeof window?window:gn)}));function fb(e){let t;const n=e[5].default,r=u(n,e,e[4],null);return{c(){r&&r.c()},m(e,n){r&&r.m(e,n),t=!0},p(e,i){r&&r.p&&(!t||16&i)&&f(r,n,e,e[4],t?d(n,e[4],i,null):p(e[4]),null)},i(e){t||(de(r,e),t=!0)},o(e){fe(r,e),t=!1},d(e){r&&r.d(e)}}}function pb(e){let t,n,r=e[0]&&fb(e);return{c(){r&&r.c(),t=N()},m(e,i){r&&r.m(e,i),I(e,t,i),n=!0},p(e,[n]){e[0]?r?(r.p(e,n),1&n&&de(r,1)):(r=fb(e),r.c(),de(r,1),r.m(t.parentNode,t)):r&&(ue(),fe(r,1,1,(()=>{r=null})),he())},i(e){n||(de(r),n=!0)},o(e){fe(r),n=!1},d(e){r&&r.d(e),e&&S(t)}}}function mb(e,t,n){let{$$slots:r={},$$scope:i}=t,{showInDevice:s}=t,{showInBrowser:o}=t,{showInOs:a}=t,c=!1;q((()=>{const e=new db;let t=e.getBrowser(),r=e.getDevice(),i=e.getOS(),d=!0;s&&!h(l(r),s)&&(d=!1),o&&!h(u(t.name),o)&&(d=!1),a&&!h(u(i.name),a)&&(d=!1),n(0,c=d)}));const l=e=>e.type?u(e.type):"desktop",u=e=>e.toLowerCase().normalize("NFD").replace(/ /g,"").replace(/[^\w\s]/gi,"").replace(/[\u0300-\u036f]/g,""),h=(e,t)=>Array.isArray(t)?t.some((t=>e===u(t))):e===u(t);return e.$$set=e=>{"showInDevice"in e&&n(1,s=e.showInDevice),"showInBrowser"in e&&n(2,o=e.showInBrowser),"showInOs"in e&&n(3,a=e.showInOs),"$$scope"in e&&n(4,i=e.$$scope)},[c,s,o,a,i,r]}class gb extends Te{constructor(e){super(),_e(this,e,mb,pb,o,{showInDevice:1,showInBrowser:2,showInOs:3})}}function yb(t){let n,r,i,s,o,a;return n=new hb({}),i=new tt({props:{routes:sb}}),{c(){we(n.$$.fragment),r=R(),we(i.$$.fragment),s=R(),o=C("a"),o.textContent="see the site devs",O(o,"id","see-devs"),O(o,"href","/creators"),O(o,"class","svelte-1avb1ie")},m(e,t){be(n,e,t),I(e,r,t),be(i,e,t),I(e,s,t),I(e,o,t),a=!0},p:e,i(e){a||(de(n.$$.fragment,e),de(i.$$.fragment,e),a=!0)},o(e){fe(n.$$.fragment,e),fe(i.$$.fragment,e),a=!1},d(e){ke(n,e),e&&S(r),ke(i,e),e&&S(s),e&&S(o)}}}function vb(e){let t;return{c(){t=C("div"),t.innerHTML='<a href="/" class="svelte-1avb1ie">perfect type</a> \n\t\t<div class="svelte-1avb1ie">mobile is not supported yet :(\n\t\t\t<br/><br/>\n\t\t\tplease use a laptop or desktop device\n\t\t\t<br/><br/>\n\t\t\tmobile support is coming soon.</div>',O(t,"id","desktop-notifier"),O(t,"class","svelte-1avb1ie")},m(e,n){I(e,t,n)},d(e){e&&S(t)}}}function wb(e){let t,n,r,i,s,o,a,l,u,h,d,f,p,m,g;return f=new gb({props:{showInDevice:"desktop",$$slots:{default:[yb]},$$scope:{ctx:e}}}),m=new gb({props:{showInDevice:"mobile",$$slots:{default:[vb]},$$scope:{ctx:e}}}),{c(){t=C("meta"),n=C("meta"),r=C("meta"),i=C("meta"),s=C("link"),o=C("meta"),a=C("meta"),l=C("meta"),u=C("script"),d=R(),we(f.$$.fragment),p=R(),we(m.$$.fragment),O(t,"charset","utf-8"),document.title="perfect type",O(n,"name","description"),O(n,"content","perfect type is a typing game that requires you to type perfectly. are you up for the challenge?"),O(r,"name","keywords"),O(r,"content","typing, typing game, keyboard, words per minute, wpm, typing speed, typer, online game, game, play, internet games, online games, internet game, typing games, type speed, typing speed, games to play on the internet, typing games to play, typing games to play online"),O(i,"name","author"),O(i,"content","perfect type devs"),O(s,"rel","canonical"),O(s,"href","https://perfect-type.com/"),O(o,"name","robots"),O(o,"content","index, follow"),O(a,"name","viewport"),O(a,"content","width=device-width, initial-scale=1"),O(l,"name","google"),O(l,"content","nositelinkssearchbox"),u.async=!0,c(u.src,h="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5479752995149616")||O(u,"src","https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5479752995149616"),O(u,"crossorigin","anonymous")},m(e,c){_(document.head,t),_(document.head,n),_(document.head,r),_(document.head,i),_(document.head,s),_(document.head,o),_(document.head,a),_(document.head,l),_(document.head,u),I(e,d,c),be(f,e,c),I(e,p,c),be(m,e,c),g=!0},p(e,[t]){const n={};1&t&&(n.$$scope={dirty:t,ctx:e}),f.$set(n);const r={};1&t&&(r.$$scope={dirty:t,ctx:e}),m.$set(r)},i(e){g||(de(f.$$.fragment,e),de(m.$$.fragment,e),g=!0)},o(e){fe(f.$$.fragment,e),fe(m.$$.fragment,e),g=!1},d(e){S(t),S(n),S(r),S(i),S(s),S(o),S(a),S(l),S(u),e&&S(d),ke(f,e),e&&S(p),ke(m,e)}}}function bb(e){return sv(),[]}return new class extends Te{constructor(e){super(),_e(this,e,bb,wb,o,{})}}({target:document.body,props:{}})}();
