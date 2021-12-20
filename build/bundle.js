var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(t)}function i(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let o,a;function c(t,n,r){t.$$.on_destroy.push(function(t,...n){if(null==t)return e;const r=t.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function l(e,t,n,r){if(e){const i=u(e,t,n,r);return e[0](i)}}function u(e,t,n,r){return e[1]&&r?function(e,t){for(const n in t)e[n]=t[n];return e}(n.ctx.slice(),e[1](r(t))):n.ctx}function h(e,t,n,r){if(e[2]&&r){const i=e[2](r(n));if(void 0===t.dirty)return i;if("object"==typeof i){const e=[],n=Math.max(t.dirty.length,i.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|i[r];return e}return t.dirty|i}return t.dirty}function d(e,t,n,r,i,s){if(i){const o=u(t,n,r,s);e.p(o,i)}}function f(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}function p(e){return null==e?"":e}function g(e,t){e.appendChild(t)}function m(e,t,n){e.insertBefore(t,n||null)}function y(e){e.parentNode.removeChild(e)}function v(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function w(e){return document.createElement(e)}function b(e){return document.createTextNode(e)}function I(){return b(" ")}function T(){return b("")}function E(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function _(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function k(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function A(e){a=e}function S(e){(function(){if(!a)throw new Error("Function called outside component initialization");return a})().$$.on_mount.push(e)}const C=[],N=[],R=[],$=[],D=Promise.resolve();let O=!1;function P(e){R.push(e)}function x(e){$.push(e)}let L=!1;const M=new Set;function U(){if(!L){L=!0;do{for(let e=0;e<C.length;e+=1){const t=C[e];A(t),F(t.$$)}for(A(null),C.length=0;N.length;)N.pop()();for(let e=0;e<R.length;e+=1){const t=R[e];M.has(t)||(M.add(t),t())}R.length=0}while(C.length);for(;$.length;)$.pop()();O=!1,L=!1,M.clear()}}function F(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(P)}}const V=new Set;let j;function B(){j={r:0,c:[],p:j}}function q(){j.r||r(j.c),j=j.p}function z(e,t){e&&e.i&&(V.delete(e),e.i(t))}function H(e,t,n,r){if(e&&e.o){if(V.has(e))return;V.add(e),j.c.push((()=>{V.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function K(e,t,n){const r=e.$$.props[t];void 0!==r&&(e.$$.bound[r]=n,n(e.$$.ctx[r]))}function G(e){e&&e.c()}function W(e,n,s,o){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=e.$$;a&&a.m(n,s),o||P((()=>{const n=c.map(t).filter(i);l?l.push(...n):r(n),e.$$.on_mount=[]})),u.forEach(P)}function J(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function X(e,t){-1===e.$$.dirty[0]&&(C.push(e),O||(O=!0,D.then(U)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Q(t,i,s,o,c,l,u,h=[-1]){const d=a;A(t);const f=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(d?d.$$.context:[])),callbacks:n(),dirty:h,skip_bound:!1,root:i.target||d.$$.root};u&&u(f.root);let p=!1;if(f.ctx=s?s(t,i.props||{},((e,n,...r)=>{const i=r.length?r[0]:n;return f.ctx&&c(f.ctx[e],f.ctx[e]=i)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](i),p&&X(t,e)),n})):[],f.update(),p=!0,r(f.before_update),f.fragment=!!o&&o(f.ctx),i.target){if(i.hydrate){const e=function(e){return Array.from(e.childNodes)}(i.target);f.fragment&&f.fragment.l(e),e.forEach(y)}else f.fragment&&f.fragment.c();i.intro&&z(t.$$.fragment),W(t,i.target,i.anchor,i.customElement),U()}A(d)}class Y{$destroy(){J(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Z=[];function ee(t,n=e){let r;const i=new Set;function o(e){if(s(t,e)&&(t=e,r)){const e=!Z.length;for(const e of i)e[1](),Z.push(e,t);if(e){for(let e=0;e<Z.length;e+=2)Z[e][0](Z[e+1]);Z.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(s,a=e){const c=[s,a];return i.add(c),1===i.size&&(r=n(o)||e),s(t),()=>{i.delete(c),0===i.size&&(r(),r=null)}}}}const{set:te,subscribe:ne}=ee({}),re={subscribe:ne,set:te,remove:()=>{te({})}},ie=(e,t="")=>{const n=new URL(e);function r(){return s(t).reduce(((e,t,n)=>(":"===t[0]&&e.push({value:t.slice(1),index:n}),e)),[])}function i(){return s(n.pathname)}function s(e){return"/"===e||0===e.trim().length?[e]:("/"===e.slice(-1)&&(e=e.slice(0,-1)),"/"===e[0]&&(e=e.slice(1)),e.split("/"))}return Object.freeze({hash:n.hash,host:n.host,hostname:n.hostname,namedParams:function(){const e=i();return r().reduce(((t,n)=>(t[n.value]=e[n.index],t)),{})}(),namedParamsKeys:r().reduce(((e,t)=>(e.push(t.value),e)),[]),namedParamsValues:function(){const e=i();return r().reduce(((t,n)=>(t.push(e[n.index]),t)),[])}(),pathNames:i(),port:n.port,pathname:n.pathname,protocol:n.protocol,search:n.search,queryParams:function(){const e={};return n.searchParams.forEach(((t,n)=>{e[n]=t})),e}(),queryParamsKeys:function(){const e=[];return n.searchParams.forEach(((t,n)=>{e.push(n)})),e}(),queryParamsValues:function(){const e=[];return n.searchParams.forEach((t=>{e.push(t)})),e}()})},se=e=>{let t=!1;return 0===Object.keys(e).length||(e.childRoute&&0===Object.keys(e.childRoute).length?t=!0:e.childRoute&&(t=se(e.childRoute)),t)},oe=(e,t)=>(t=ue(t)).includes(":")?t.includes(e):t.startsWith(e),ae=(e,t,n)=>{let r=!1;if(n)return{exists:t.lang&&t.lang[n]&&t.lang[n].includes(e),language:n};if(r=oe(e,t.name),!r&&t.lang&&"object"==typeof t.lang)for(const[i,s]of Object.entries(t.lang))oe(e,s)&&(r=!0,n=i);return{exists:r,language:n}},ce=e=>"/"===e||0===e.trim().length?[e]:(e=ue(e,"both")).split("/"),le=(e="")=>{let t;return"/"===e||0===e.trim().length?e:(t=(e=ue(e,"lead")).split(":")[0],t=ue(t,"trail"),t.toLowerCase())},ue=(e,t="lead")=>("trail"!==t&&"both"!==t||(e=e.replace(/\/$/,"")),"lead"!==t&&"both"!==t||(e=e.replace(/^\//,"")),e),he=(e,t=null)=>t&&e.lang&&e.lang[t]?e.lang[t]:e.name,de=e=>{const t=e||!1;let n="";const r=(e,n)=>{if("undefined"!=typeof window){const r=(e=>{let t=[];if(e.queryParams)for(let[n,r]of Object.entries(e.queryParams))t.push(`${n}=${r}`);const n=e.hash?e.hash:"";return t.length>0?`${e.path}?${t.join("&")}${n}`:e.path+n})(e);n&&window.history.pushState({page:r},"",r),t&&i(r)}},i=e=>{"undefined"!=typeof ga&&(ga("set","page",e),ga("send","pageview"))};return Object.freeze({active:()=>n,isActive:(e,t=!1)=>{"/"!==e[0]&&(e="/"+e);let r=ie(`http://fake.com${e}`).pathname,i=ie(`http://fake.com${n}`).pathname;return r=ue(r,"trail"),i=ue(i,"trail"),t?i.includes(r):i===r},setActive:(e,t)=>{n=e.path,r(e,t)}})},fe=(e,t)=>{const n=(e=>{const t=e;return Object.freeze({valid:()=>t&&t.guard&&"function"==typeof t.guard,redirect:()=>!t.guard(),redirectPath:()=>{let e="/";return t.redirect&&t.redirect.length>0&&(e=t.redirect),e}})})(e.onlyIf);return Object.freeze({path:()=>{let r=t;return e.redirectTo&&e.redirectTo.length>0&&(r=e.redirectTo),n.valid()&&n.redirect()&&(r=n.redirectPath()),r}})};function pe({basePath:e,basePathName:t,pathNames:n,convert:r,currentLanguage:i}){let s,o,a=i;function c(){return he(o,a)}function l(){return le(c())}function u(){return le(s.result)}return Object.freeze({basePathSameAsLocalised:function(){return u()===l()},updatedPath:function(e){return o=e,s=((e,t,n,r,i=!1)=>{if("/"===e||0===e.trim().length)return{result:e,language:null};let s=e,o=n.name,a=r;if(i&&(a=""),o=ue(o),s=ue(s),n.childRoute)return{result:e,language:a};{let e=ae(s,n,a);e.exists&&i&&(s=he(n,r));let c=o.split(":")[0];return c=ue(c,"trail"),c=c.split("/"),c.shift(),c.forEach((()=>{const o=t[0];if(e=ae(`${s}/${o}`,n,a),!o||!e.exists)return{result:s,language:e.language};s=i?he(n,r):`${s}/${o}`,t.shift()})),{result:s,language:e.language}}})(t,n,o,a,r),a=r?i:s.language,s},basePathNameWithoutNamedParams:u,localisedPathName:c,localisedRouteWithoutNamedParams:l,namedPath:function(){let t=c();return t&&!t.startsWith("/")&&(t="/"+t),e?`${e}${t}`:t},pathNames:n,routeLanguage:function(){return a},routePath:function(){let t=`${e}/${u()}`;"//"===t&&(t="/"),a&&(n=((e,t)=>{const n=t.split("/");return n.length>1&&n.forEach((function(t,n){t.length>0&&n>0&&e.shift()})),e})(n,l()));const r=((e="")=>0===e.trim().length?[]:ce(e).reduce(((e,t)=>(":"===t[0]&&e.push(t.slice(1)),e)),[]))(c());return r&&r.length>0&&r.forEach((function(){n.length>0&&(t+=`/${n.shift()}`)})),t}})}function ge({routes:e,currentUrl:t,routerOptions:n,convert:r}){const i=n.defaultLanguage,s=n.prefix?n.prefix.toLowerCase():"",o=function(e,t){if(t&&t.trim().length>0){const n=e.endsWith(t)?t:t+"/",r=e.replace(n,"");return ie(r)}return ie(e)}(t,s);let a="",c={},l=!1;function u(e,t,n,r,s){let h={};const d=pe({basePath:t,basePathName:n.shift().toLowerCase(),pathNames:n,convert:s,currentLanguage:r});return l=!1,e.forEach((function(e){if(d.updatedPath(e),function(e,t){const n=e.basePathSameAsLocalised();n&&(l=!0);return n||!l&&(e=>ue(e).startsWith(":"))(t)}(d,e.name)){let t=d.routePath();if(a=fe(e,a).path(),h.name!==t&&(h=function({route:e,routePath:t,routeLanguage:n,urlParser:r,namedPath:s}){const o=function({routeInfo:e,path:t,routeNamedParams:n,urlParser:r,namedPath:i,language:s}){const o=()=>{const e=ie(`https://fake.com${r.pathname}`,i).namedParams;return{...n,...e}};return Object.freeze({get:()=>({name:t,component:e.component,hash:r.hash,layout:e.layout,queryParams:r.queryParams,namedParams:o(),path:t,language:s}),namedParams:o})}({routeInfo:e,urlParser:r,path:t,routeNamedParams:c,namedPath:s,language:n||i});return c=o.namedParams(),o.get()}({route:e,routePath:t,routeLanguage:d.routeLanguage(),urlParser:o,namedPath:d.namedPath()})),e.nestedRoutes&&e.nestedRoutes.length>0&&d.pathNames.length>0)h.childRoute=u(e.nestedRoutes,t,d.pathNames,d.routeLanguage(),s),h.path=h.childRoute.path,h.language=h.childRoute.language;else if(function(e,t){return e.nestedRoutes&&e.nestedRoutes.length>0&&0===t.length}(e,d.pathNames)){const n=u(e.nestedRoutes,t,["index"],d.routeLanguage(),s);n&&Object.keys(n).length>0&&(h.childRoute=n,h.language=h.childRoute.language)}}})),a&&(h.redirectTo=a),h}const h=t=>{const n=e.find((e=>"404"==e.name)),r=t||i||"";return n?{...n,language:r,path:"404"}:{name:"404",component:"",path:"404",redirectTo:"/404.html"}};return Object.freeze({findActiveRoute:function(){let t=u(e,"",o.pathNames,n.lang,r);return t&&Object.keys(t).length&&!se(t)?(t.path=t.path.split("?")[0],s&&(t.path=`/${s}${t.path}`)):"undefined"!=typeof window&&(t=h(n.lang)),t}})}const me="/404.html";let ye,ve=[],we={};const be=(e,t,n={})=>{we={...n},void 0!==t&&""!==t||(t=document.location.href),ye=de(we.gaPageviews),t=ue(t,"trail"),ve=e;const r=()=>{let n=!1;return we.langConvertTo&&(we.lang=we.langConvertTo,n=!0),ge({routes:e,currentUrl:t,routerOptions:we,convert:n}).findActiveRoute()};return Object.freeze({setActiveRoute:(e=!0)=>{const t=r();return t.redirectTo?((e,t)=>("undefined"!=typeof window&&(e===me?ye.setActive({path:me},t):Ie(e)),e))(t.redirectTo,e):(ye.setActive(t,e),re.set(t),t)},findActiveRoute:r})},Ie=(e,t=null,n=!0)=>(e=ue(e,"lead"),t&&(we.langConvertTo=t),be(ve,"http://fake.com/"+e,we).setActiveRoute(n));function Te(e){let t,n;return t=new Se({props:{currentRoute:e[0].childRoute,params:e[1]}}),{c(){G(t.$$.fragment)},m(e,r){W(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.currentRoute=e[0].childRoute),2&n&&(r.params=e[1]),t.$set(r)},i(e){n||(z(t.$$.fragment,e),n=!0)},o(e){H(t.$$.fragment,e),n=!1},d(e){J(t,e)}}}function Ee(e){let t,n,r;var i=e[0].component;function s(e){return{props:{currentRoute:{...e[0],component:""},params:e[1]}}}return i&&(t=new i(s(e))),{c(){t&&G(t.$$.fragment),n=T()},m(e,i){t&&W(t,e,i),m(e,n,i),r=!0},p(e,r){const o={};if(1&r&&(o.currentRoute={...e[0],component:""}),2&r&&(o.params=e[1]),i!==(i=e[0].component)){if(t){B();const e=t;H(e.$$.fragment,1,0,(()=>{J(e,1)})),q()}i?(t=new i(s(e)),G(t.$$.fragment),z(t.$$.fragment,1),W(t,n.parentNode,n)):t=null}else i&&t.$set(o)},i(e){r||(t&&z(t.$$.fragment,e),r=!0)},o(e){t&&H(t.$$.fragment,e),r=!1},d(e){e&&y(n),t&&J(t,e)}}}function _e(e){let t,n,r;var i=e[0].layout;function s(e){return{props:{currentRoute:{...e[0],layout:""},params:e[1]}}}return i&&(t=new i(s(e))),{c(){t&&G(t.$$.fragment),n=T()},m(e,i){t&&W(t,e,i),m(e,n,i),r=!0},p(e,r){const o={};if(1&r&&(o.currentRoute={...e[0],layout:""}),2&r&&(o.params=e[1]),i!==(i=e[0].layout)){if(t){B();const e=t;H(e.$$.fragment,1,0,(()=>{J(e,1)})),q()}i?(t=new i(s(e)),G(t.$$.fragment),z(t.$$.fragment,1),W(t,n.parentNode,n)):t=null}else i&&t.$set(o)},i(e){r||(t&&z(t.$$.fragment,e),r=!0)},o(e){t&&H(t.$$.fragment,e),r=!1},d(e){e&&y(n),t&&J(t,e)}}}function ke(e){let t,n,r,i;const s=[_e,Ee,Te],o=[];function a(e,t){return e[0].layout?0:e[0].component?1:e[0].childRoute?2:-1}return~(t=a(e))&&(n=o[t]=s[t](e)),{c(){n&&n.c(),r=T()},m(e,n){~t&&o[t].m(e,n),m(e,r,n),i=!0},p(e,[i]){let c=t;t=a(e),t===c?~t&&o[t].p(e,i):(n&&(B(),H(o[c],1,1,(()=>{o[c]=null})),q()),~t?(n=o[t],n?n.p(e,i):(n=o[t]=s[t](e),n.c()),z(n,1),n.m(r.parentNode,r)):n=null)},i(e){i||(z(n),i=!0)},o(e){H(n),i=!1},d(e){~t&&o[t].d(e),e&&y(r)}}}function Ae(e,t,n){let{currentRoute:r={}}=t,{params:i={}}=t;return e.$$set=e=>{"currentRoute"in e&&n(0,r=e.currentRoute),"params"in e&&n(1,i=e.params)},[r,i]}"undefined"!=typeof window&&(window.addEventListener("click",(e=>{if("a"!==e.target.localName.toLowerCase())return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;const t=we.prefix?`/${we.prefix.toLowerCase()}`:"",n=e.target.pathname&&e.target.host===window.location.host,r=!(t.length>1)||e.target.pathname.startsWith(t);if(n&&r){e.preventDefault();const t=e.target.pathname+e.target.search+e.target.search+e.target.hash;"_blank"===e.target.target?window.open(t,"newTab"):Ie(t)}})),window.onpopstate=function(e){let t=window.location.pathname+window.location.search+window.location.hash;Ie(t,null,!1)});class Se extends Y{constructor(e){super(),Q(this,e,Ae,ke,s,{currentRoute:0,params:1})}}function Ce(e){let t,n;return t=new Se({props:{currentRoute:e[0]}}),{c(){G(t.$$.fragment)},m(e,r){W(t,e,r),n=!0},p(e,[n]){const r={};1&n&&(r.currentRoute=e[0]),t.$set(r)},i(e){n||(z(t.$$.fragment,e),n=!0)},o(e){H(t.$$.fragment,e),n=!1},d(e){J(t,e)}}}function Ne(e,t,n){let r;c(e,re,(e=>n(0,r=e)));let{routes:i=[]}=t,{options:s={}}=t;return S((()=>{be(i,document.location.href,s).setActiveRoute()})),e.$$set=e=>{"routes"in e&&n(1,i=e.routes),"options"in e&&n(2,s=e.options)},[r,i,s]}class Re extends Y{constructor(e){super(),Q(this,e,Ne,Ce,s,{routes:1,options:2})}}const $e=ee(0),De=ee(5);function Oe(t){let n,r,s,o;return{c(){n=w("button"),r=b(t[0])},m(e,a){m(e,n,a),g(n,r),s||(o=E(n,"click",(function(){i(t[1])&&t[1].apply(this,arguments)})),s=!0)},p(e,[n]){t=e,1&n&&k(r,t[0])},i:e,o:e,d(e){e&&y(n),s=!1,o()}}}function Pe(e,t,n){let{text:r}=t,{onClickFn:i}=t;return e.$$set=e=>{"text"in e&&n(0,r=e.text),"onClickFn"in e&&n(1,i=e.onClickFn)},[r,i]}class xe extends Y{constructor(e){super(),Q(this,e,Pe,Oe,s,{text:0,onClickFn:1})}}function Le(e){let t,n,r,i,s,o,a=e[0]?`you typed ${e[1]} words per minute`:"you lost :(";return s=new xe({props:{onClickFn:e[2],text:e[0]?"play again":"try again"}}),{c(){t=w("div"),n=w("div"),r=b(a),i=I(),G(s.$$.fragment),_(n,"class","game-over-div svelte-ap5isp"),_(t,"class","game-over-environment svelte-ap5isp")},m(e,a){m(e,t,a),g(t,n),g(n,r),g(t,i),W(s,t,null),o=!0},p(e,[t]){(!o||3&t)&&a!==(a=e[0]?`you typed ${e[1]} words per minute`:"you lost :(")&&k(r,a);const n={};4&t&&(n.onClickFn=e[2]),1&t&&(n.text=e[0]?"play again":"try again"),s.$set(n)},i(e){o||(z(s.$$.fragment,e),o=!0)},o(e){H(s.$$.fragment,e),o=!1},d(e){e&&y(t),J(s)}}}function Me(e,t,n){let{winGame:r}=t,{wpm:i}=t,{tryAgain:s}=t;return e.$$set=e=>{"winGame"in e&&n(0,r=e.winGame),"wpm"in e&&n(1,i=e.wpm),"tryAgain"in e&&n(2,s=e.tryAgain)},[r,i,s]}class Ue extends Y{constructor(e){super(),Q(this,e,Me,Le,s,{winGame:0,wpm:1,tryAgain:2})}}function Fe(t){let n,s,o,a,c,l,u,h,d,f,v,T,k,A;return{c(){n=w("div"),s=w("div"),o=b("easy"),c=I(),l=w("div"),u=b("medium"),d=I(),f=w("div"),v=b("hard"),_(s,"class",a=p("mode-div "+("easy"===t[0]?"active-mode":"inactive-mode"))+" svelte-dzq9n6"),_(s,"id","easy"),_(l,"class",h=p("mode-div "+("medium"===t[0]?"active-mode":"inactive-mode"))+" svelte-dzq9n6"),_(l,"id","medium"),_(f,"class",T=p("mode-div "+("hard"===t[0]?"active-mode":"inactive-mode"))+" svelte-dzq9n6"),_(f,"id","hard"),_(n,"class","mode-container svelte-dzq9n6")},m(e,r){m(e,n,r),g(n,s),g(s,o),g(n,c),g(n,l),g(l,u),g(n,d),g(n,f),g(f,v),k||(A=[E(s,"click",(function(){i(t[1])&&t[1].apply(this,arguments)})),E(l,"click",(function(){i(t[1])&&t[1].apply(this,arguments)})),E(f,"click",(function(){i(t[1])&&t[1].apply(this,arguments)}))],k=!0)},p(e,[n]){t=e,1&n&&a!==(a=p("mode-div "+("easy"===t[0]?"active-mode":"inactive-mode"))+" svelte-dzq9n6")&&_(s,"class",a),1&n&&h!==(h=p("mode-div "+("medium"===t[0]?"active-mode":"inactive-mode"))+" svelte-dzq9n6")&&_(l,"class",h),1&n&&T!==(T=p("mode-div "+("hard"===t[0]?"active-mode":"inactive-mode"))+" svelte-dzq9n6")&&_(f,"class",T)},i:e,o:e,d(e){e&&y(n),k=!1,r(A)}}}function Ve(e,t,n){let{mode:r}=t,{changeMode:i}=t;return e.$$set=e=>{"mode"in e&&n(0,r=e.mode),"changeMode"in e&&n(1,i=e.changeMode)},[r,i]}class je extends Y{constructor(e){super(),Q(this,e,Ve,Fe,s,{mode:0,changeMode:1})}}var Be=["ability","able","aboard","about","above","accept","accident","according","account","accurate","acres","across","act","action","active","activity","actual","actually","add","addition","additional","adjective","adult","adventure","advice","affect","afraid","after","afternoon","again","against","age","ago","agree","ahead","aid","air","airplane","alike","alive","all","allow","almost","alone","along","aloud","alphabet","already","also","although","am","among","amount","ancient","angle","angry","animal","announced","another","answer","ants","any","anybody","anyone","anything","anyway","anywhere","apart","apartment","appearance","apple","applied","appropriate","are","area","arm","army","around","arrange","arrangement","arrive","arrow","art","article","as","aside","ask","asleep","at","ate","atmosphere","atom","atomic","attached","attack","attempt","attention","audience","author","automobile","available","average","avoid","aware","away","baby","back","bad","badly","bag","balance","ball","balloon","band","bank","bar","bare","bark","barn","base","baseball","basic","basis","basket","bat","battle","be","bean","bear","beat","beautiful","beauty","became","because","become","becoming","bee","been","before","began","beginning","begun","behavior","behind","being","believed","bell","belong","below","belt","bend","beneath","bent","beside","best","bet","better","between","beyond","bicycle","bigger","biggest","bill","birds","birth","birthday","bit","bite","black","blank","blanket","blew","blind","block","blood","blow","blue","board","boat","body","bone","book","border","born","both","bottle","bottom","bound","bow","bowl","box","boy","brain","branch","brass","brave","bread","break","breakfast","breath","breathe","breathing","breeze","brick","bridge","brief","bright","bring","broad","broke","broken","brother","brought","brown","brush","buffalo","build","building","built","buried","burn","burst","bus","bush","business","busy","but","butter","buy","by","cabin","cage","cake","call","calm","came","camera","camp","can","canal","cannot","cap","capital","captain","captured","car","carbon","card","care","careful","carefully","carried","carry","case","cast","castle","cat","catch","cattle","caught","cause","cave","cell","cent","center","central","century","certain","certainly","chain","chair","chamber","chance","change","changing","chapter","character","characteristic","charge","chart","check","cheese","chemical","chest","chicken","chief","child","children","choice","choose","chose","chosen","church","circle","circus","citizen","city","class","classroom","claws","clay","clean","clear","clearly","climate","climb","clock","close","closely","closer","cloth","clothes","clothing","cloud","club","coach","coal","coast","coat","coffee","cold","collect","college","colony","color","column","combination","combine","come","comfortable","coming","command","common","community","company","compare","compass","complete","completely","complex","composed","composition","compound","concerned","condition","congress","connected","consider","consist","consonant","constantly","construction","contain","continent","continued","contrast","control","conversation","cook","cookies","cool","copper","copy","corn","corner","correct","correctly","cost","cotton","could","count","country","couple","courage","course","court","cover","cow","cowboy","crack","cream","create","creature","crew","crop","cross","crowd","cry","cup","curious","current","curve","customs","cut","cutting","daily","damage","dance","danger","dangerous","dark","darkness","date","daughter","dawn","day","dead","deal","dear","death","decide","declared","deep","deeply","deer","definition","degree","depend","depth","describe","desert","design","desk","detail","determine","develop","development","diagram","diameter","did","die","differ","difference","different","difficult","difficulty","dig","dinner","direct","direction","directly","dirt","dirty","disappear","discover","discovery","discuss","discussion","disease","dish","distance","distant","divide","division","do","doctor","does","dog","doing","doll","dollar","done","donkey","door","dot","double","doubt","down","dozen","draw","drawn","dream","dress","drew","dried","drink","drive","driven","driver","driving","drop","dropped","drove","dry","duck","due","dug","dull","during","dust","duty","each","eager","ear","earlier","early","earn","earth","easier","easily","east","easy","eat","eaten","edge","education","effect","effort","egg","eight","either","electric","electricity","element","elephant","eleven","else","empty","end","enemy","energy","engine","engineer","enjoy","enough","enter","entire","entirely","environment","equal","equally","equator","equipment","escape","especially","essential","establish","even","evening","event","eventually","ever","every","everybody","everyone","everything","everywhere","evidence","exact","exactly","examine","example","excellent","except","exchange","excited","excitement","exciting","exclaimed","exercise","exist","expect","experience","experiment","explain","explanation","explore","express","expression","extra","eye","face","facing","fact","factor","factory","failed","fair","fairly","fall","fallen","familiar","family","famous","far","farm","farmer","farther","fast","fastened","faster","fat","father","favorite","fear","feathers","feature","fed","feed","feel","feet","fell","fellow","felt","fence","few","fewer","field","fierce","fifteen","fifth","fifty","fight","fighting","figure","fill","film","final","finally","find","fine","finest","finger","finish","fire","fireplace","firm","first","fish","five","fix","flag","flame","flat","flew","flies","flight","floating","floor","flow","flower","fly","fog","folks","follow","food","foot","football","for","force","foreign","forest","forget","forgot","forgotten","form","former","fort","forth","forty","forward","fought","found","four","fourth","fox","frame","free","freedom","frequently","fresh","friend","friendly","frighten","frog","from","front","frozen","fruit","fuel","full","fully","fun","function","funny","fur","furniture","further","future","gain","game","garage","garden","gas","gasoline","gate","gather","gave","general","generally","gentle","gently","get","getting","giant","gift","girl","give","given","giving","glad","glass","globe","go","goes","gold","golden","gone","good","goose","got","government","grabbed","grade","gradually","grain","grandfather","grandmother","graph","grass","gravity","gray","great","greater","greatest","greatly","green","grew","ground","group","grow","grown","growth","guard","guess","guide","gulf","gun","habit","had","hair","half","halfway","hall","hand","handle","handsome","hang","happen","happened","happily","happy","harbor","hard","harder","hardly","has","hat","have","having","hay","he","headed","heading","health","heard","hearing","heart","heat","heavy","height","held","hello","help","helpful","her","herd","here","herself","hidden","hide","high","higher","highest","highway","hill","him","himself","his","history","hit","hold","hole","hollow","home","honor","hope","horn","horse","hospital","hot","hour","house","how","however","huge","human","hundred","hung","hungry","hunt","hunter","hurried","hurry","hurt","husband","ice","idea","identity","if","ill","image","imagine","immediately","importance","important","impossible","improve","in","inch","include","including","income","increase","indeed","independent","indicate","individual","industrial","industry","influence","information","inside","instance","instant","instead","instrument","interest","interior","into","introduced","invented","involved","iron","is","island","it","its","itself","jack","jar","jet","job","join","joined","journey","joy","judge","jump","jungle","just","keep","kept","key","kids","kill","kind","kitchen","knew","knife","know","knowledge","known","label","labor","lack","lady","laid","lake","lamp","land","language","large","larger","largest","last","late","later","laugh","law","lay","layers","lead","leader","leaf","learn","least","leather","leave","leaving","led","left","leg","length","lesson","let","letter","level","library","lie","life","lift","light","like","likely","limited","line","lion","lips","liquid","list","listen","little","live","living","load","local","locate","location","log","lonely","long","longer","look","loose","lose","loss","lost","lot","loud","love","lovely","low","lower","luck","lucky","lunch","lungs","lying","machine","machinery","mad","made","magic","magnet","mail","main","mainly","major","make","making","man","managed","manner","manufacturing","many","map","mark","market","married","mass","massage","master","material","mathematics","matter","may","maybe","me","meal","mean","means","meant","measure","meat","medicine","meet","melted","member","memory","men","mental","merely","met","metal","method","mice","middle","might","mighty","mile","military","milk","mill","mind","mine","minerals","minute","mirror","missing","mission","mistake","mix","mixture","model","modern","molecular","moment","money","monkey","month","mood","moon","more","morning","most","mostly","mother","motion","motor","mountain","mouse","mouth","move","movement","movie","moving","mud","muscle","music","musical","must","my","myself","mysterious","nails","name","nation","national","native","natural","naturally","nature","near","nearby","nearer","nearest","nearly","necessary","neck","needed","needle","needs","negative","neighbor","neighborhood","nervous","nest","never","new","news","newspaper","next","nice","night","nine","no","nobody","nodded","noise","none","noon","nor","north","nose","not","note","noted","nothing","notice","noun","now","number","numeral","nuts","object","observe","obtain","occasionally","occur","ocean","of","off","offer","office","officer","official","oil","old","older","oldest","on","once","one","only","onto","open","operation","opinion","opportunity","opposite","or","orange","orbit","order","ordinary","organization","organized","origin","original","other","ought","our","ourselves","out","outer","outline","outside","over","own","owner","oxygen","pack","package","page","paid","pain","paint","pair","palace","pale","pan","paper","paragraph","parallel","parent","park","part","particles","particular","particularly","partly","parts","party","pass","passage","past","path","pattern","pay","peace","pen","pencil","people","per","percent","perfect","perfectly","perhaps","period","person","personal","pet","phrase","physical","piano","pick","picture","pictured","pie","piece","pig","pile","pilot","pine","pink","pipe","pitch","place","plain","plan","plane","planet","planned","planning","plant","plastic","plate","plates","play","pleasant","please","pleasure","plenty","plural","plus","pocket","poem","poet","poetry","point","pole","police","policeman","political","pond","pony","pool","poor","popular","population","porch","port","position","positive","possible","possibly","post","pot","potatoes","pound","pour","powder","power","powerful","practical","practice","prepare","present","president","press","pressure","pretty","prevent","previous","price","pride","primitive","principal","principle","printed","private","prize","probably","problem","process","produce","product","production","program","progress","promised","proper","properly","property","protection","proud","prove","provide","public","pull","pupil","pure","purple","purpose","push","put","putting","quarter","queen","question","quick","quickly","quiet","quietly","quite","rabbit","race","radio","railroad","rain","raise","ran","ranch","range","rapidly","rate","rather","raw","rays","reach","read","reader","ready","real","realize","rear","reason","recall","receive","recent","recently","recognize","record","red","refer","refused","region","regular","related","relationship","religious","remain","remarkable","remember","remove","repeat","replace","replied","report","represent","require","research","respect","rest","result","return","review","rhyme","rhythm","rice","rich","ride","riding","right","ring","rise","rising","river","road","roar","rock","rocket","rocky","rod","roll","roof","room","root","rope","rose","rough","round","route","row","rubbed","rubber","rule","ruler","run","running","rush","sad","saddle","safe","safety","said","sail","sale","salmon","salt","same","sand","sang","sat","satellites","satisfied","save","saved","saw","say","scale","scared","scene","school","science","scientific","scientist","score","screen","sea","search","season","seat","second","secret","section","see","seed","seeing","seems","seen","seldom","select","selection","sell","send","sense","sent","sentence","separate","series","serious","serve","service","sets","setting","settle","settlers","seven","several","shade","shadow","shake","shaking","shall","shallow","shape","share","sharp","she","sheep","sheet","shelf","shells","shelter","shine","shinning","ship","shirt","shoe","shoot","shop","shore","short","shorter","shot","should","shoulder","shout","show","shown","shut","sick","sides","sight","sign","signal","silence","silent","silk","silly","silver","similar","simple","simplest","simply","since","sing","single","sink","sister","sit","sitting","situation","six","size","skill","skin","sky","slabs","slave","sleep","slept","slide","slight","slightly","slip","slipped","slope","slow","slowly","small","smaller","smallest","smell","smile","smoke","smooth","snake","snow","so","soap","social","society","soft","softly","soil","solar","sold","soldier","solid","solution","solve","some","somebody","somehow","someone","something","sometime","somewhere","son","song","soon","sort","sound","source","south","southern","space","speak","special","species","specific","speech","speed","spell","spend","spent","spider","spin","spirit","spite","split","spoken","sport","spread","spring","square","stage","stairs","stand","standard","star","stared","start","state","statement","station","stay","steady","steam","steel","steep","stems","step","stepped","stick","stiff","still","stock","stomach","stone","stood","stop","stopped","store","storm","story","stove","straight","strange","stranger","straw","stream","street","strength","stretch","strike","string","strip","strong","stronger","struck","structure","struggle","stuck","student","studied","studying","subject","substance","success","successful","such","sudden","suddenly","sugar","suggest","suit","sum","summer","sun","sunlight","supper","supply","support","suppose","sure","surface","surprise","surrounded","swam","sweet","swept","swim","swimming","swing","swung","syllable","symbol","system","table","tail","take","taken","tales","talk","tall","tank","tape","task","taste","taught","tax","tea","teach","teacher","team","tears","teeth","telephone","television","tell","temperature","ten","tent","term","terrible","test","than","thank","that","thee","them","themselves","then","theory","there","therefore","these","they","thick","thin","thing","think","third","thirty","this","those","thou","though","thought","thousand","thread","three","threw","throat","through","throughout","throw","thrown","thumb","thus","thy","tide","tie","tight","tightly","till","time","tin","tiny","tip","tired","title","to","tobacco","today","together","told","tomorrow","tone","tongue","tonight","too","took","tool","top","topic","torn","total","touch","toward","tower","town","toy","trace","track","trade","traffic","trail","train","transportation","trap","travel","treated","tree","triangle","tribe","trick","tried","trip","troops","tropical","trouble","truck","trunk","truth","try","tube","tune","turn","twelve","twenty","twice","two","type","typical","uncle","under","underline","understanding","unhappy","union","unit","universe","unknown","unless","until","unusual","up","upon","upper","upward","us","use","useful","using","usual","usually","valley","valuable","value","vapor","variety","various","vast","vegetable","verb","vertical","very","vessels","victory","view","village","visit","visitor","voice","volume","vote","vowel","voyage","wagon","wait","walk","wall","want","war","warm","warn","was","wash","waste","watch","water","wave","way","we","weak","wealth","wear","weather","week","weigh","weight","welcome","well","went","were","west","western","wet","whale","what","whatever","wheat","wheel","when","whenever","where","wherever","whether","which","while","whispered","whistle","white","who","whole","whom","whose","why","wide","widely","wife","wild","will","willing","win","wind","window","wing","winter","wire","wise","wish","with","within","without","wolf","women","won","wonder","wonderful","wood","wooden","wool","word","wore","work","worker","world","worried","worry","worse","worth","would","wrapped","write","writer","writing","written","wrong","wrote","yard","year","yellow","yes","yesterday","yet","you","young","younger","your","yourself","youth","zero","zebra","zipper","zoo","zulu"];function qe(e){function t(){return e&&e.maxLength>1?function(){let t,r=!1;for(;!r;)t=n(),t.length<=e.maxLength&&(r=!0);return t}():n()}function n(){return Be[r(Be.length)]}function r(e){return Math.floor(Math.random()*e)}if(void 0===e)return t();"number"==typeof e&&(e={exactly:e}),e.exactly&&(e.min=e.exactly,e.max=e.exactly),"number"!=typeof e.wordsPerString&&(e.wordsPerString=1),"function"!=typeof e.formatter&&(e.formatter=e=>e),"string"!=typeof e.separator&&(e.separator=" ");for(var i=e.min+r(e.max+1-e.min),s=[],o="",a=0,c=0;c<i*e.wordsPerString;c++)a===e.wordsPerString-1?o+=e.formatter(t(),a):o+=e.formatter(t(),a)+e.separator,a++,(c+1)%e.wordsPerString==0&&(s.push(o),o="",a=0);return e.join&&(s=s.join(e.join)),s}var ze=qe;function He(e,t,n){const r=e.slice();return r[19]=t[n],r[21]=n,r}function Ke(e,t,n){const r=e.slice();return r[22]=t[n],r[21]=n,r}function Ge(e,t,n){const r=e.slice();return r[24]=t[n],r[26]=n,r}function We(e){let t,n;return t=new Ue({props:{winGame:e[3],wpm:e[4],tryAgain:e[7]}}),{c(){G(t.$$.fragment)},m(e,r){W(t,e,r),n=!0},p(e,n){const r={};8&n&&(r.winGame=e[3]),16&n&&(r.wpm=e[4]),t.$set(r)},i(e){n||(z(t.$$.fragment,e),n=!0)},o(e){H(t.$$.fragment,e),n=!1},d(e){J(t,e)}}}function Je(t){let n,r,s,o,a,c,l,u,h;n=new je({props:{mode:t[5],changeMode:t[8]}});let d=t[0],f=[];for(let e=0;e<d.length;e+=1)f[e]=Qe(Ke(t,d,e));let p=[...Array(10).keys()],b=[];for(let e=0;e<p.length;e+=1)b[e]=Ye(He(t,p,e));return{c(){G(n.$$.fragment),r=I(),s=w("div");for(let e=0;e<f.length;e+=1)f[e].c();o=I();for(let e=0;e<b.length;e+=1)b[e].c();a=I(),c=w("div"),_(s,"class","game-environment noselect svelte-2bi1rc"),_(s,"id","game-env"),_(c,"id","occlusion"),_(c,"class","svelte-2bi1rc")},m(d,p){W(n,d,p),m(d,r,p),m(d,s,p);for(let e=0;e<f.length;e+=1)f[e].m(s,null);g(s,o);for(let e=0;e<b.length;e+=1)b[e].m(s,null);var y;m(d,a,p),m(d,c,p),l=!0,u||(y=t[6].call(null,s),h=y&&i(y.destroy)?y.destroy:e,u=!0)},p(e,t){const r={};if(32&t&&(r.mode=e[5]),n.$set(r),3&t){let n;for(d=e[0],n=0;n<d.length;n+=1){const r=Ke(e,d,n);f[n]?f[n].p(r,t):(f[n]=Qe(r),f[n].c(),f[n].m(s,o))}for(;n<f.length;n+=1)f[n].d(1);f.length=d.length}},i(e){l||(z(n.$$.fragment,e),l=!0)},o(e){H(n.$$.fragment,e),l=!1},d(e){J(n,e),e&&y(r),e&&y(s),v(f,e),v(b,e),e&&y(a),e&&y(c),u=!1,h()}}}function Xe(e){let t,n,r,i=e[24]+"";return{c(){t=w("div"),n=b(i),_(t,"class","game-letter svelte-2bi1rc"),_(t,"id",r=e[21]-1<0?`${e[26]}`:`${e[1][e[21]-1]+e[26]}`)},m(e,r){m(e,t,r),g(t,n)},p(e,s){1&s&&i!==(i=e[24]+"")&&k(n,i),2&s&&r!==(r=e[21]-1<0?`${e[26]}`:`${e[1][e[21]-1]+e[26]}`)&&_(t,"id",r)},d(e){e&&y(t)}}}function Qe(e){let t,n,r=0!=e[21]&&function(e){let t,n,r;return{c(){t=w("div"),n=b(" "),_(t,"class","game-letter svelte-2bi1rc"),_(t,"id",r=""+(e[1][e[21]-1]-1))},m(e,r){m(e,t,r),g(t,n)},p(e,n){2&n&&r!==(r=""+(e[1][e[21]-1]-1))&&_(t,"id",r)},d(e){e&&y(t)}}}(e),i=e[22],s=[];for(let t=0;t<i.length;t+=1)s[t]=Xe(Ge(e,i,t));return{c(){t=w("div"),r&&r.c(),n=I();for(let e=0;e<s.length;e+=1)s[e].c();_(t,"class","game-word svelte-2bi1rc")},m(e,i){m(e,t,i),r&&r.m(t,null),g(t,n);for(let e=0;e<s.length;e+=1)s[e].m(t,null)},p(e,n){if(0!=e[21]&&r.p(e,n),3&n){let r;for(i=e[22],r=0;r<i.length;r+=1){const o=Ge(e,i,r);s[r]?s[r].p(o,n):(s[r]=Xe(o),s[r].c(),s[r].m(t,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=i.length}},d(e){e&&y(t),r&&r.d(),v(s,e)}}}function Ye(e){let t;return{c(){t=w("div"),t.innerHTML='<div class="game-letter invisible-letter svelte-2bi1rc">if you see this sentence, you&#39;re awesome</div> \n        '},m(e,n){m(e,t,n)},d(e){e&&y(t)}}}function Ze(e){let t,n,r,i;const s=[Je,We],o=[];function a(e,t){return e[2]?1:0}return n=a(e),r=o[n]=s[n](e),{c(){t=w("main"),r.c()},m(e,r){m(e,t,r),o[n].m(t,null),i=!0},p(e,[i]){let c=n;n=a(e),n===c?o[n].p(e,i):(B(),H(o[c],1,1,(()=>{o[c]=null})),q(),r=o[n],r?r.p(e,i):(r=o[n]=s[n](e),r.c()),z(r,1),r.m(t,null))},i(e){i||(z(r),i=!0)},o(e){H(r),i=!1},d(e){e&&y(t),o[n].d()}}}function et(e,t,n){let{currentRoute:r}=t,{params:i}=t;Array.prototype.random=function(){return this[Math.floor(Math.random()*this.length)]};let s,o=l(),a=o.split(" "),c=[];for(let e=0;e<a.length;e++)c.push(e-1<0?a[e].length+1:a[e].length+c[e-1]+1);function l(){let e=5;return De.subscribe((t=>{e=t})),ze(e).join(" ")}$e.subscribe((e=>{s=e}));let u=!1,h=!1,d=0,f=0,p=0;function g(){d=0,f=0,$e.update((()=>0)),n(2,u=!1),n(3,h=!1),o=l(),n(0,a=o.split(" ")),n(1,c=[]);for(let e=0;e<a.length;e++)c.push(e-1<0?a[e].length+1:a[e].length+c[e-1]+1);n(5,m)}let m="easy";const y={easy:5,medium:20,hard:50};return e.$$set=e=>{"currentRoute"in e&&n(9,r=e.currentRoute),"params"in e&&n(10,i=e.params)},[a,c,u,h,p,m,function(){const e=e=>{if(e.preventDefault(),!u&&(0==d&&(d=new Date),o.charAt(s)!==e.key?n(2,u=!0):(!function(e){let t=document.getElementById(s);t.classList.add("typed-letter"),t.offsetLeft<f&&t.parentElement.scrollIntoView(!0);f=t.offsetLeft}(),$e.update((e=>e+1))),s==o.length)){let e=(new Date-d)/6e4;n(4,p=Math.round(a.length/e*1e3)/1e3),n(2,u=!0),n(3,h=!0)}};return document.addEventListener("keypress",e),{destroy(){document.removeEventListener("keypress",e)}}},g,function(e){let t=document.getElementById(m);t.className=t.className.replace(" active-mode",""),document.getElementById(e.target.innerHTML).className+=" active-mode",n(5,m=e.target.innerHTML),De.update((()=>y[m]));for(let e=0;e<s;e++){document.getElementById(e).classList.remove("typed-letter")}g()},r,i]}qe.wordList=Be;
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
const tt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=i>>2,u=(3&i)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t}(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw Error();const c=i<<2|s>>4;if(r.push(c),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
class nt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
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
     */function rt(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function it(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function st(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function ot(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function at(){const e=rt();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}class ct extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lt.prototype.create)}}class lt{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(ut,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new ct(r,o,n)}}const ut=/\{\$([^}]+)}/g;function ht(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(dt(n)&&dt(s)){if(!ht(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function dt(e){return null!==e&&"object"==typeof e}
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
     */function ft(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function pt(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function gt(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}class mt{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=yt),void 0===r.error&&(r.error=yt),void 0===r.complete&&(r.complete=yt);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function yt(){}
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
     */function vt(e,t=1e3,n=2){const r=t*Math.pow(n,e),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+i)}
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
     */function wt(e){return e&&e._delegate?e._delegate:e}class bt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
     */const It="[DEFAULT]";
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
     */class Tt{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new nt;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
     */(e))try{this.getOrInitializeService({instanceIdentifier:It})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===It?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:It:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Et{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Tt(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
     */var _t;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(_t||(_t={}));const kt={debug:_t.DEBUG,verbose:_t.VERBOSE,info:_t.INFO,warn:_t.WARN,error:_t.ERROR,silent:_t.SILENT},At=_t.INFO,St={[_t.DEBUG]:"log",[_t.VERBOSE]:"log",[_t.INFO]:"info",[_t.WARN]:"warn",[_t.ERROR]:"error"},Ct=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=St[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class Nt{constructor(e){this.name=e,this._logLevel=At,this._logHandler=Ct,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _t))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?kt[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_t.DEBUG,...e),this._logHandler(this,_t.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_t.VERBOSE,...e),this._logHandler(this,_t.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_t.INFO,...e),this._logHandler(this,_t.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_t.WARN,...e),this._logHandler(this,_t.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_t.ERROR,...e),this._logHandler(this,_t.ERROR,...e)}}
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
     */class Rt{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const $t="@firebase/app",Dt="0.7.11",Ot=new Nt("@firebase/app"),Pt="[DEFAULT]",xt={[$t]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Lt=new Map,Mt=new Map;function Ut(e,t){try{e.container.addComponent(t)}catch(n){Ot.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ft(e){const t=e.name;if(Mt.has(t))return Ot.debug(`There were multiple attempts to register component ${t}.`),!1;Mt.set(t,e);for(const t of Lt.values())Ut(t,e);return!0}function Vt(e,t){return e.container.getProvider(t)}
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
     */const jt=new lt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
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
class Bt{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new bt("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jt.create("app-deleted",{appName:this._name})}}
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
     */const qt="9.6.1";function zt(e="[DEFAULT]"){const t=Lt.get(e);if(!t)throw jt.create("no-app",{appName:e});return t}function Ht(e,t,n){var r;let i=null!==(r=xt[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ot.warn(e.join(" "))}Ft(new bt(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
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
     */var Kt;Kt="",Ft(new bt("platform-logger",(e=>new Rt(e)),"PRIVATE")),Ht($t,Dt,Kt),Ht($t,Dt,"esm2017"),Ht("fire-js","");
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
Ht("firebase","9.6.1","app");"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var Gt,Wt,Jt=(Gt=function(e,t){!function(e){function t(e){return Array.prototype.slice.call(e)}function n(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function r(e,t,r){var i,s=new Promise((function(s,o){n(i=e[t].apply(e,r)).then(s,o)}));return s.request=i,s}function i(e,t,n){var i=r(e,t,n);return i.then((function(e){if(e)return new u(e,i.request)}))}function s(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function o(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return r(this[t],i,arguments)})}))}function a(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return this[t][r].apply(this[t],arguments)})}))}function c(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return i(this[t],r,arguments)})}))}function l(e){this._index=e}function u(e,t){this._cursor=e,this._request=t}function h(e){this._store=e}function d(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function f(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new d(n)}function p(e){this._db=e}function g(e,t,n){var i=r(indexedDB,"open",[e,t]),s=i.request;return s&&(s.onupgradeneeded=function(e){n&&n(new f(s.result,e.oldVersion,s.transaction))}),i.then((function(e){return new p(e)}))}function m(e){return r(indexedDB,"deleteDatabase",[e])}s(l,"_index",["name","keyPath","multiEntry","unique"]),o(l,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),c(l,"_index",IDBIndex,["openCursor","openKeyCursor"]),s(u,"_cursor",["direction","key","primaryKey","value"]),o(u,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(u.prototype[e]=function(){var t=this,r=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,r),n(t._request).then((function(e){if(e)return new u(e,t._request)}))}))})})),h.prototype.createIndex=function(){return new l(this._store.createIndex.apply(this._store,arguments))},h.prototype.index=function(){return new l(this._store.index.apply(this._store,arguments))},s(h,"_store",["name","keyPath","indexNames","autoIncrement"]),o(h,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),c(h,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),a(h,"_store",IDBObjectStore,["deleteIndex"]),d.prototype.objectStore=function(){return new h(this._tx.objectStore.apply(this._tx,arguments))},s(d,"_tx",["objectStoreNames","mode"]),a(d,"_tx",IDBTransaction,["abort"]),f.prototype.createObjectStore=function(){return new h(this._db.createObjectStore.apply(this._db,arguments))},s(f,"_db",["name","version","objectStoreNames"]),a(f,"_db",IDBDatabase,["deleteObjectStore","close"]),p.prototype.transaction=function(){return new d(this._db.transaction.apply(this._db,arguments))},s(p,"_db",["name","version","objectStoreNames"]),a(p,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[h,l].forEach((function(n){e in n.prototype&&(n.prototype[e.replace("open","iterate")]=function(){var n=t(arguments),r=n[n.length-1],i=this._store||this._index,s=i[e].apply(i,n.slice(0,-1));s.onsuccess=function(){r(s.result)}})}))})),[l,h].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,r=[];return new Promise((function(i){n.iterateCursor(e,(function(e){e?(r.push(e.value),void 0===t||r.length!=t?e.continue():i(r)):i(r)}))}))})})),e.openDb=g,e.deleteDb=m,Object.defineProperty(e,"__esModule",{value:!0})}(t)},Gt(Wt={exports:{}},Wt.exports),Wt.exports);const Xt="@firebase/installations",Qt="0.5.4",Yt=1e4,Zt="w:0.5.4",en="FIS_v2",tn=36e5,nn=new lt("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function rn(e){return e instanceof ct&&e.code.includes("request-failed")}
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
     */function sn({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function on(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function an(e,t){const n=(await t.json()).error;return nn.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function cn({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function ln(e,{refreshToken:t}){const n=cn(e);return n.append("Authorization",function(e){return`FIS_v2 ${e}`}
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
     */(t)),n}async function un(e){const t=await e();return t.status>=500&&t.status<600?e():t}
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
function hn(e){return new Promise((t=>{setTimeout(t,e)}))}
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
const dn=/^[cdef][\w-]{21}$/;function fn(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
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
     */(e);return dn.test(t)?t:""}catch(e){return""}}function pn(e){return`${e.appName}!${e.appId}`}
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
     */const gn=new Map;function mn(e,t){const n=pn(e);yn(n,t),function(e,t){const n=function(){!vn&&"BroadcastChannel"in self&&(vn=new BroadcastChannel("[Firebase] FID Change"),vn.onmessage=e=>{yn(e.data.key,e.data.fid)});return vn}();n&&n.postMessage({key:e,fid:t});0===gn.size&&vn&&(vn.close(),vn=null)}(n,t)}function yn(e,t){const n=gn.get(e);if(n)for(const e of n)e(t)}let vn=null;
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
const wn="firebase-installations-store";let bn=null;function In(){return bn||(bn=Jt.openDb("firebase-installations-database",1,(e=>{if(0===e.oldVersion)e.createObjectStore(wn)}))),bn}async function Tn(e,t){const n=pn(e),r=(await In()).transaction(wn,"readwrite"),i=r.objectStore(wn),s=await i.get(n);return await i.put(t,n),await r.complete,s&&s.fid===t.fid||mn(e,t.fid),t}async function En(e){const t=pn(e),n=(await In()).transaction(wn,"readwrite");await n.objectStore(wn).delete(t),await n.complete}async function _n(e,t){const n=pn(e),r=(await In()).transaction(wn,"readwrite"),i=r.objectStore(wn),s=await i.get(n),o=t(s);return void 0===o?await i.delete(n):await i.put(o,n),await r.complete,!o||s&&s.fid===o.fid||mn(e,o.fid),o}
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
     */async function kn(e){let t;const n=await _n(e,(n=>{const r=function(e){return Cn(e||{fid:fn(),registrationStatus:0})}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(nn.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function(e,{fid:t}){const n=sn(e),r=cn(e),i={fid:t,authVersion:en,appId:e.appId,sdkVersion:Zt},s={method:"POST",headers:r,body:JSON.stringify(i)},o=await un((()=>fetch(n,s)));if(o.ok){const e=await o.json();return{fid:e.fid||t,registrationStatus:2,refreshToken:e.refreshToken,authToken:on(e.authToken)}}throw await an("Create Installation",o)}(e,t);return Tn(e,n)}catch(n){throw rn(n)&&409===n.customData.serverCode?await En(e):await Tn(e,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:An(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function An(e){let t=await Sn(e);for(;1===t.registrationStatus;)await hn(100),t=await Sn(e);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await kn(e);return n||t}return t}function Sn(e){return _n(e,(e=>{if(!e)throw nn.create("installation-not-found");return Cn(e)}))}function Cn(e){return 1===(t=e).registrationStatus&&t.registrationTime+Yt<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
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
     */}async function Nn({appConfig:e,platformLoggerProvider:t},n){const r=function(e,{fid:t}){return`${sn(e)}/${t}/authTokens:generate`}
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
     */(e,n),i=ln(e,n),s=t.getImmediate({optional:!0});s&&i.append("x-firebase-client",s.getPlatformInfoString());const o={installation:{sdkVersion:Zt}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await un((()=>fetch(r,a)));if(c.ok){return on(await c.json())}throw await an("Generate Auth Token",c)}async function Rn(e,t=!1){let n;const r=await _n(e.appConfig,(r=>{if(!Dn(r))throw nn.create("not-registered");const i=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+tn}(e)}(i))return r;if(1===i.requestStatus)return n=async function(e,t){let n=await $n(e.appConfig);for(;1===n.authToken.requestStatus;)await hn(100),n=await $n(e.appConfig);const r=n.authToken;return 0===r.requestStatus?Rn(e,t):r}(e,t),r;{if(!navigator.onLine)throw nn.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=async function(e,t){try{const n=await Nn(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Tn(e.appConfig,r),n}catch(n){if(!rn(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Tn(e.appConfig,n)}else await En(e.appConfig);throw n}}(e,t),t}}));return n?await n:r.authToken}function $n(e){return _n(e,(e=>{if(!Dn(e))throw nn.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+Yt<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
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
     */}))}function Dn(e){return void 0!==e&&2===e.registrationStatus}
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
async function On(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await kn(e);t&&await t}
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
     */(n.appConfig);return(await Rn(n,t)).token}function Pn(e){return nn.create("missing-app-config-values",{valueName:e})}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const xn="installations",Ln=e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw Pn("App Configuration");if(!e.name)throw Pn("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Pn(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,platformLoggerProvider:Vt(t,"platform-logger"),_delete:()=>Promise.resolve()}},Mn=e=>{const t=Vt(e.getProvider("app").getImmediate(),xn).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:r}=await kn(t.appConfig);return r?r.catch(console.error):Rn(t).catch(console.error),n.fid}(t),getToken:e=>On(t,e)}};Ft(new bt(xn,Ln,"PUBLIC")),Ft(new bt("installations-internal",Mn,"PRIVATE")),Ht(Xt,Qt),Ht(Xt,Qt,"esm2017");
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
const Un="analytics",Fn="https://www.googletagmanager.com/gtag/js",Vn=new Nt("@firebase/analytics");
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
function jn(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function Bn(e,t,n,r){return async function(i,s,o){try{"event"===i?await async function(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let e=i.send_to;Array.isArray(e)||(e=[e]);const r=await jn(n);for(const n of e){const e=r.find((e=>e.measurementId===n)),i=e&&t[e.appId];if(!i){s=[];break}s.push(i)}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(e){Vn.error(e)}}(e,t,n,s,o):"config"===i?await async function(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const e=(await jn(n)).find((e=>e.measurementId===i));e&&await t[e.appId]}}catch(e){Vn.error(e)}e("config",i,s)}(e,t,n,r,s,o):e("set",s)}catch(e){Vn.error(e)}}}
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
const qn=new lt("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const zn=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function Hn(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Kn(e,t=zn,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw qn.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw qn.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Wn;return setTimeout((async()=>{a.abort()}),void 0!==n?n:6e4),Gn({appId:r,apiKey:i,measurementId:s},o,a,t)}async function Gn(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=zn){const{appId:s,measurementId:o}=e;try{await function(e,t){return new Promise(((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener((()=>{clearTimeout(s),r(qn.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(r,t)}catch(e){if(o)return Vn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${e.message}]`),{appId:s,measurementId:o};throw e}try{const t=await async function(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:Hn(r)},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(s,i);if(200!==o.status&&304!==o.status){let e="";try{const n=await o.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw qn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:e})}return o.json()}(e);return i.deleteThrottleMetadata(s),t}catch(t){if(!function(e){if(!(e instanceof ct&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(t)){if(i.deleteThrottleMetadata(s),o)return Vn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${t.message}]`),{appId:s,measurementId:o};throw t}const a=503===Number(t.customData.httpStatus)?vt(n,i.intervalMillis,30):vt(n,i.intervalMillis),c={throttleEndTimeMillis:Date.now()+a,backoffCount:n+1};return i.setThrottleMetadata(s,c),Vn.debug(`Calling attemptFetch again in ${a} millis`),Gn(e,c,r,i)}}class Wn{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function Jn(){if("object"!=typeof indexedDB)return Vn.warn(qn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}catch(e){return Vn.warn(qn.create("indexeddb-unavailable",{errorInfo:e}).message),!1}return!0}async function Xn(e,t,n,r,i,s,o){var a;const c=Kn(e);c.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&Vn.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>Vn.error(e))),t.push(c);const l=Jn().then((e=>e?r.getId():void 0)),[u,h]=await Promise.all([c,l]);(function(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Fn))return t;return null})()||function(e,t){const n=document.createElement("script");n.src=`${Fn}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}(s,u.measurementId),i("js",new Date);const d=null!==(a=null==o?void 0:o.config)&&void 0!==a?a:{};return d.origin="firebase",d.update=!0,null!=h&&(d.firebase_id=h),i("config",u.measurementId,d),u.measurementId}
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
     */class Qn{constructor(e){this.app=e}_delete(){return delete Yn[this.app.options.appId],Promise.resolve()}}let Yn={},Zn=[];const er={};let tr,nr,rr="dataLayer",ir=!1;function sr(){const e=[];if(st()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=qn.create("invalid-analytics-context",{errorInfo:t});Vn.warn(n.message)}}function or(e,t,n){sr();const r=e.options.appId;if(!r)throw qn.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw qn.create("no-api-key");Vn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=Yn[r])throw qn.create("already-exists",{id:r});if(!ir){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(rr);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,r,i){let s=function(...e){window[r].push(arguments)};return window[i]&&"function"==typeof window[i]&&(s=window[i]),window[i]=Bn(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}(Yn,Zn,er,rr,"gtag");nr=e,tr=t,ir=!0}Yn[r]=Xn(e,Zn,er,t,tr,rr,n);return new Qn(e)}
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
     */function ar(e=zt()){const t=Vt(e=wt(e),Un);return t.isInitialized()?t.getImmediate():function(e,t={}){const n=Vt(e,Un);if(n.isInitialized()){const e=n.getImmediate();if(ht(t,n.getOptions()))return e;throw qn.create("already-initialized")}return n.initialize({options:t})}(e)}function cr(e,t,n,r){e=wt(e),async function(e,t,n,r,i){if(i&&i.global)e("event",n,r);else{const i=await t;e("event",n,Object.assign(Object.assign({},r),{send_to:i}))}}(nr,Yn[e.app.options.appId],t,n,r).catch((e=>Vn.error(e)))}const lr="@firebase/analytics",ur="0.7.4";Ft(new bt(Un,((e,{options:t})=>or(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),Ft(new bt("analytics-internal",(function(e){try{const t=e.getProvider(Un).getImmediate();return{logEvent:(e,n,r)=>cr(t,e,n,r)}}catch(e){throw qn.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),Ht(lr,ur),Ht(lr,ur,"esm2017");var hr,dr="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},fr=fr||{},pr=dr||self;function gr(){}function mr(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function yr(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var vr="closure_uid_"+(1e9*Math.random()>>>0),wr=0;function br(e,t,n){return e.call.apply(e.bind,arguments)}function Ir(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function Tr(e,t,n){return(Tr=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?br:Ir).apply(null,arguments)}function Er(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function _r(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function kr(){this.s=this.s,this.o=this.o}var Ar={};kr.prototype.s=!1,kr.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var e=function(e){return Object.prototype.hasOwnProperty.call(e,vr)&&e[vr]||(e[vr]=++wr)}(this);delete Ar[e]}},kr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Sr=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},Cr=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,i="string"==typeof e?e.split(""):e;for(let s=0;s<r;s++)s in i&&t.call(n,i[s],s,e)};function Nr(e){return Array.prototype.concat.apply([],arguments)}function Rr(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function $r(e){return/^[\s\xa0]*$/.test(e)}var Dr,Or=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Pr(e,t){return-1!=e.indexOf(t)}function xr(e,t){return e<t?-1:e>t?1:0}e:{var Lr=pr.navigator;if(Lr){var Mr=Lr.userAgent;if(Mr){Dr=Mr;break e}}Dr=""}function Ur(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Fr(e){const t={};for(const n in e)t[n]=e[n];return t}var Vr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function jr(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<Vr.length;t++)n=Vr[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Br(e){return Br[" "](e),e}Br[" "]=gr;var qr,zr,Hr=Pr(Dr,"Opera"),Kr=Pr(Dr,"Trident")||Pr(Dr,"MSIE"),Gr=Pr(Dr,"Edge"),Wr=Gr||Kr,Jr=Pr(Dr,"Gecko")&&!(Pr(Dr.toLowerCase(),"webkit")&&!Pr(Dr,"Edge"))&&!(Pr(Dr,"Trident")||Pr(Dr,"MSIE"))&&!Pr(Dr,"Edge"),Xr=Pr(Dr.toLowerCase(),"webkit")&&!Pr(Dr,"Edge");function Qr(){var e=pr.document;return e?e.documentMode:void 0}e:{var Yr="",Zr=(zr=Dr,Jr?/rv:([^\);]+)(\)|;)/.exec(zr):Gr?/Edge\/([\d\.]+)/.exec(zr):Kr?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(zr):Xr?/WebKit\/(\S+)/.exec(zr):Hr?/(?:Version)[ \/]?(\S+)/.exec(zr):void 0);if(Zr&&(Yr=Zr?Zr[1]:""),Kr){var ei=Qr();if(null!=ei&&ei>parseFloat(Yr)){qr=String(ei);break e}}qr=Yr}var ti,ni={};function ri(){return function(e){var t=ni;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=Or(String(qr)).split("."),n=Or("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=xr(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||xr(0==i[2].length,0==s[2].length)||xr(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(pr.document&&Kr){var ii=Qr();ti=ii||(parseInt(qr,10)||void 0)}else ti=void 0;var si=ti,oi=function(){if(!pr.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{pr.addEventListener("test",gr,t),pr.removeEventListener("test",gr,t)}catch(e){}return e}();function ai(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function ci(e,t){if(ai.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Jr){e:{try{Br(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:li[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ci.Z.h.call(this)}}ai.prototype.h=function(){this.defaultPrevented=!0},_r(ci,ai);var li={2:"touch",3:"pen",4:"mouse"};ci.prototype.h=function(){ci.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ui="closure_listenable_"+(1e6*Math.random()|0),hi=0;function di(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++hi,this.ca=this.fa=!1}function fi(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function pi(e){this.src=e,this.g={},this.h=0}function gi(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=Sr(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(fi(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function mi(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==r)return i}return-1}pi.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=mi(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):((t=new di(t,this.src,s,!!r,i)).fa=n,e.push(t)),t};var yi="closure_lm_"+(1e6*Math.random()|0),vi={};function wi(e,t,n,r,i){if(r&&r.once)return Ii(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)wi(e,t[s],n,r,i);return null}return n=Ci(n),e&&e[ui]?e.N(t,n,yr(r)?!!r.capture:!!r,i):bi(e,t,n,!1,r,i)}function bi(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=yr(i)?!!i.capture:!!i,a=Ai(e);if(a||(e[yi]=a=new pi(e)),(n=a.add(t,n,r,o,s)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}var t=ki;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)oi||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(_i(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function Ii(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Ii(e,t[s],n,r,i);return null}return n=Ci(n),e&&e[ui]?e.O(t,n,yr(r)?!!r.capture:!!r,i):bi(e,t,n,!0,r,i)}function Ti(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Ti(e,t[s],n,r,i);else r=yr(r)?!!r.capture:!!r,n=Ci(n),e&&e[ui]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=mi(s=e.g[t],n,r,i))&&(fi(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Ai(e))&&(t=e.g[t.toString()],e=-1,t&&(e=mi(t,n,r,i)),(n=-1<e?t[e]:null)&&Ei(n))}function Ei(e){if("number"!=typeof e&&e&&!e.ca){var t=e.src;if(t&&t[ui])gi(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(_i(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ai(t))?(gi(n,e),0==n.h&&(n.src=null,t[yi]=null)):fi(e)}}}function _i(e){return e in vi?vi[e]:vi[e]="on"+e}function ki(e,t){if(e.ca)e=!0;else{t=new ci(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&Ei(e),e=n.call(r,t)}return e}function Ai(e){return(e=e[yi])instanceof pi?e:null}var Si="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ci(e){return"function"==typeof e?e:(e[Si]||(e[Si]=function(t){return e.handleEvent(t)}),e[Si])}function Ni(){kr.call(this),this.i=new pi(this),this.P=this,this.I=null}function Ri(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new ai(t,e);else if(t instanceof ai)t.target=t.target||e;else{var i=t;jr(t=new ai(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=$i(o,r,!0,t)&&i}if(i=$i(o=t.g=e,r,!0,t)&&i,i=$i(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=$i(o=t.g=n[s],r,!1,t)&&i}function $i(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&gi(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}_r(Ni,kr),Ni.prototype[ui]=!0,Ni.prototype.removeEventListener=function(e,t,n,r){Ti(this,e,t,n,r)},Ni.prototype.M=function(){if(Ni.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)fi(n[r]);delete t.g[e],t.h--}}this.I=null},Ni.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Ni.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Di=pr.JSON.stringify;function Oi(){var e=Vi;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Pi,xi=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Li),(e=>e.reset()));class Li{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Mi(e){pr.setTimeout((()=>{throw e}),0)}function Ui(e,t){Pi||function(){var e=pr.Promise.resolve(void 0);Pi=function(){e.then(ji)}}(),Fi||(Pi(),Fi=!0),Vi.add(e,t)}var Fi=!1,Vi=new class{constructor(){this.h=this.g=null}add(e,t){const n=xi.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function ji(){for(var e;e=Oi();){try{e.h.call(e.g)}catch(e){Mi(e)}var t=xi;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Fi=!1}function Bi(e,t){Ni.call(this),this.h=e||1,this.g=t||pr,this.j=Tr(this.kb,this),this.l=Date.now()}function qi(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function zi(e,t,n){if("function"==typeof e)n&&(e=Tr(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=Tr(e.handleEvent,e)}return 2147483647<Number(t)?-1:pr.setTimeout(e,t||0)}function Hi(e){e.g=zi((()=>{e.g=null,e.i&&(e.i=!1,Hi(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}_r(Bi,Ni),(hr=Bi.prototype).da=!1,hr.S=null,hr.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ri(this,"tick"),this.da&&(qi(this),this.start()))}},hr.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},hr.M=function(){Bi.Z.M.call(this),qi(this),delete this.g};class Ki extends kr{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Hi(this)}M(){super.M(),this.g&&(pr.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gi(e){kr.call(this),this.h=e,this.g={}}_r(Gi,kr);var Wi=[];function Ji(e,t,n,r){Array.isArray(n)||(n&&(Wi[0]=n.toString()),n=Wi);for(var i=0;i<n.length;i++){var s=wi(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Xi(e){Ur(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Ei(e)}),e),e.g={}}function Qi(){this.g=!0}function Yi(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Di(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}Gi.prototype.M=function(){Gi.Z.M.call(this),Xi(this)},Gi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Qi.prototype.Aa=function(){this.g=!1},Qi.prototype.info=function(){};var Zi={},es=null;function ts(){return es=es||new Ni}function ns(e){ai.call(this,Zi.Ma,e)}function rs(e){const t=ts();Ri(t,new ns(t,e))}function is(e,t){ai.call(this,Zi.STAT_EVENT,e),this.stat=t}function ss(e){const t=ts();Ri(t,new is(t,e))}function os(e,t){ai.call(this,Zi.Na,e),this.size=t}function as(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return pr.setTimeout((function(){e()}),t)}Zi.Ma="serverreachability",_r(ns,ai),Zi.STAT_EVENT="statevent",_r(is,ai),Zi.Na="timingevent",_r(os,ai);var cs={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ls={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function us(){}function hs(e){return e.h||(e.h=e.i())}function ds(){}us.prototype.h=null;var fs,ps={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function gs(){ai.call(this,"d")}function ms(){ai.call(this,"c")}function ys(){}function vs(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new Gi(this),this.P=bs,e=Wr?125:void 0,this.W=new Bi(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new ws}function ws(){this.i=null,this.g="",this.h=!1}_r(gs,ai),_r(ms,ai),_r(ys,us),ys.prototype.g=function(){return new XMLHttpRequest},ys.prototype.i=function(){return{}},fs=new ys;var bs=45e3,Is={},Ts={};function Es(e,t,n){e.K=1,e.v=Ks(Vs(t)),e.s=n,e.U=!0,_s(e,null)}function _s(e,t){e.F=Date.now(),Cs(e),e.A=Vs(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),so(n.h,"t",r),e.C=0,n=e.l.H,e.h=new ws,e.g=oa(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Ki(Tr(e.Ia,e,e.g),e.O)),Ji(e.V,e.g,"readystatechange",e.gb),t=e.H?Fr(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),rs(1),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.X,e.s)}function ks(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function As(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=Ss(e,n),r==Ts){4==t&&(e.o=4,ss(14),i=!1),Yi(e.j,e.m,null,"[Incomplete Response]");break}if(r==Is){e.o=4,ss(15),Yi(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Yi(e.j,e.m,r,null),Os(e,r)}ks(e)&&r!=Ts&&r!=Is&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,ss(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,(t=e.l).g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Yo(t),t.L=!0,ss(11))):(Yi(e.j,e.m,n,"[Invalid Chunked Response]"),Ds(e),$s(e))}function Ss(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Ts:(n=Number(t.substring(n,r)),isNaN(n)?Is:(r+=1)+n>t.length?Ts:(t=t.substr(r,n),e.C=r+n,t))}function Cs(e){e.Y=Date.now()+e.P,Ns(e,e.P)}function Ns(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=as(Tr(e.eb,e),t)}function Rs(e){e.B&&(pr.clearTimeout(e.B),e.B=null)}function $s(e){0==e.l.G||e.I||ta(e.l,e)}function Ds(e){Rs(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,qi(e.W),Xi(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Os(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||ho(n.i,e)))if(n.I=e.N,!e.J&&ho(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;ea(n),qo(n)}Qo(n),ss(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=as(Tr(n.ab,n),6e3));if(1>=uo(n.i)&&n.ka){try{n.ka()}catch(e){}n.ka=void 0}}else ra(n,11)}else if((e.J||n.g==e)&&ea(n),!$r(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(n.U=l[0],l=l[1],2==n.G)if("c"==l[0]){n.J=l[1],n.la=l[2];const t=l[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const i=l[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const u=l[5];null!=u&&"number"==typeof u&&0<u&&(r=1.5*u,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;!s.g&&(Pr(e,"spdy")||Pr(e,"quic")||Pr(e,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(fo(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,Hs(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=e;if((r=n).oa=sa(r,r.H?r.la:null,r.W),o.J){po(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Rs(a),Cs(a)),r.g=o}else Xo(r);0<n.l.length&&Ko(n)}else"stop"!=l[0]&&"close"!=l[0]||ra(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?ra(n,7):Bo(n):"noop"!=l[0]&&n.j&&n.j.wa(l),n.A=0)}rs(4)}catch(e){}}function Ps(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(mr(e)||"string"==typeof e)Cr(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(mr(e)||"string"==typeof e){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;r=function(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"==typeof e)return e.split("");if(mr(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length;for(var s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}}function xs(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof xs)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function Ls(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];Ms(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)Ms(i,r=e.g[t])||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}function Ms(e,t){return Object.prototype.hasOwnProperty.call(e,t)}(hr=vs.prototype).setTimeout=function(e){this.P=e},hr.gb=function(e){e=e.target;const t=this.L;t&&3==Mo(e)?t.l():this.Ia(e)},hr.Ia=function(e){try{if(e==this.g)e:{const u=Mo(this.g);var t=this.g.Da();const h=this.g.ba();if(!(3>u)&&(3!=u||Wr||this.g&&(this.h.h||this.g.ga()||Uo(this.g)))){this.I||4!=u||7==t||rs(8==t||0>=h?3:2),Rs(this);var n=this.g.ba();this.N=n;t:if(ks(this)){var r=Uo(this.g);e="";var i=r.length,s=4==Mo(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Ds(this),$s(this);var o="";break t}this.h.i=new pr.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$r(a)){var l=a;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,ss(12),Ds(this),$s(this);break e}Yi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Os(this,n)}this.U?(As(this,u,o),Wr&&this.i&&3==u&&(Ji(this.V,this.W,"tick",this.fb),this.W.start())):(Yi(this.j,this.m,o,null),Os(this,o)),4==u&&Ds(this),this.i&&!this.I&&(4==u?ta(this.l,this):(this.i=!1,Cs(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ss(12)):(this.o=0,ss(13)),Ds(this),$s(this)}}}catch(e){}},hr.fb=function(){if(this.g){var e=Mo(this.g),t=this.g.ga();this.C<t.length&&(Rs(this),As(this,e,t),this.i&&4!=e&&Cs(this))}},hr.cancel=function(){this.I=!0,Ds(this)},hr.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(rs(3),ss(17)),Ds(this),this.o=2,$s(this)):Ns(this,this.Y-e)},(hr=xs.prototype).R=function(){Ls(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},hr.T=function(){return Ls(this),this.g.concat()},hr.get=function(e,t){return Ms(this.h,e)?this.h[e]:t},hr.set=function(e,t){Ms(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},hr.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);e.call(t,s,i,this)}};var Us=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Fs(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Fs){this.g=void 0!==t?t:e.g,js(this,e.j),this.s=e.s,Bs(this,e.i),qs(this,e.m),this.l=e.l,t=e.h;var n=new to;n.i=t.i,t.g&&(n.g=new xs(t.g),n.h=t.h),zs(this,n),this.o=e.o}else e&&(n=String(e).match(Us))?(this.g=!!t,js(this,n[1]||"",!0),this.s=Gs(n[2]||""),Bs(this,n[3]||"",!0),qs(this,n[4]),this.l=Gs(n[5]||"",!0),zs(this,n[6]||"",!0),this.o=Gs(n[7]||"")):(this.g=!!t,this.h=new to(null,this.g))}function Vs(e){return new Fs(e)}function js(e,t,n){e.j=n?Gs(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Bs(e,t,n){e.i=n?Gs(t,!0):t}function qs(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function zs(e,t,n){t instanceof to?(e.h=t,function(e,t){t&&!e.j&&(no(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(ro(this,t),so(this,n,e))}),e)),e.j=t}(e.h,e.g)):(n||(t=Ws(t,Zs)),e.h=new to(t,e.g))}function Hs(e,t,n){e.h.set(t,n)}function Ks(e){return Hs(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Gs(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ws(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Js),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Js(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Fs.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ws(t,Xs,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Ws(t,Xs,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(Ws(n,"/"==n.charAt(0)?Ys:Qs,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ws(n,eo)),e.join("")};var Xs=/[#\/\?@]/g,Qs=/[#\?:]/g,Ys=/[#\?]/g,Zs=/[#\?@]/g,eo=/#/g;function to(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function no(e){e.g||(e.g=new xs,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function ro(e,t){no(e),t=oo(e,t),Ms(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,Ms((e=e.g).h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Ls(e)))}function io(e,t){return no(e),t=oo(e,t),Ms(e.g.h,t)}function so(e,t,n){ro(e,t),0<n.length&&(e.i=null,e.g.set(oo(e,t),Rr(n)),e.h+=n.length)}function oo(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(hr=to.prototype).add=function(e,t){no(this),this.i=null,e=oo(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},hr.forEach=function(e,t){no(this),this.g.forEach((function(n,r){Cr(n,(function(n){e.call(t,n,r,this)}),this)}),this)},hr.T=function(){no(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],s=0;s<i.length;s++)n.push(t[r]);return n},hr.R=function(e){no(this);var t=[];if("string"==typeof e)io(this,e)&&(t=Nr(t,this.g.get(oo(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=Nr(t,e[n])}return t},hr.set=function(e,t){return no(this),this.i=null,io(this,e=oo(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},hr.get=function(e,t){return e&&0<(e=this.R(e)).length?String(e[0]):t},hr.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),e.push(o)}}return this.i=e.join("&")};function ao(e){this.l=e||co,pr.PerformanceNavigationTiming?e=0<(e=pr.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(pr.g&&pr.g.Ea&&pr.g.Ea()&&pr.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var co=10;function lo(e){return!!e.h||!!e.g&&e.g.size>=e.j}function uo(e){return e.h?1:e.g?e.g.size:0}function ho(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function fo(e,t){e.g?e.g.add(t):e.h=t}function po(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function go(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Rr(e.i)}function mo(){}function yo(){this.g=new mo}function vo(e,t,n){const r=n||"";try{Ps(e,(function(e,n){let i=e;yr(e)&&(i=Di(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function wo(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function bo(e){this.l=e.$b||null,this.j=e.ib||!1}function Io(e,t){Ni.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=To,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ao.prototype.cancel=function(){if(this.i=go(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},mo.prototype.stringify=function(e){return pr.JSON.stringify(e,void 0)},mo.prototype.parse=function(e){return pr.JSON.parse(e,void 0)},_r(bo,us),bo.prototype.g=function(){return new Io(this.l,this.j)},bo.prototype.i=function(e){return function(){return e}}({}),_r(Io,Ni);var To=0;function Eo(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function _o(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ko(e)}function ko(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(hr=Io.prototype).open=function(e,t){if(this.readyState!=To)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ko(this)},hr.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||pr).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},hr.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,_o(this)),this.readyState=To},hr.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ko(this)),this.g&&(this.readyState=3,ko(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==pr.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Eo(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},hr.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?_o(this):ko(this),3==this.readyState&&Eo(this)}},hr.Ua=function(e){this.g&&(this.response=this.responseText=e,_o(this))},hr.Ta=function(e){this.g&&(this.response=e,_o(this))},hr.ha=function(){this.g&&_o(this)},hr.setRequestHeader=function(e,t){this.v.append(e,t)},hr.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},hr.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Io.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Ao=pr.JSON.parse;function So(e){Ni.call(this),this.headers=new xs,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Co,this.K=this.L=!1}_r(So,Ni);var Co="",No=/^https?$/i,Ro=["POST","PUT"];function $o(e){return"content-type"==e.toLowerCase()}function Do(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Oo(e),xo(e)}function Oo(e){e.D||(e.D=!0,Ri(e,"complete"),Ri(e,"error"))}function Po(e){if(e.h&&void 0!==fr&&(!e.C[1]||4!=Mo(e)||2!=e.ba()))if(e.v&&4==Mo(e))zi(e.Fa,0,e);else if(Ri(e,"readystatechange"),4==Mo(e)){e.h=!1;try{const a=e.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var i=String(e.H).match(Us)[1]||null;if(!i&&pr.self&&pr.self.location){var s=pr.self.location.protocol;i=s.substr(0,s.length-1)}r=!No.test(i?i.toLowerCase():"")}n=r}if(n)Ri(e,"complete"),Ri(e,"success");else{e.m=6;try{var o=2<Mo(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.ba()+"]",Oo(e)}}finally{xo(e)}}}function xo(e,t){if(e.g){Lo(e);const n=e.g,r=e.C[0]?gr:null;e.g=null,e.C=null,t||Ri(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function Lo(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(pr.clearTimeout(e.A),e.A=null)}function Mo(e){return e.g?e.g.readyState:0}function Uo(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Co:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Fo(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=function(e){let t="";return Ur(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Hs(e,t,n))}function Vo(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function jo(e){this.za=0,this.l=[],this.h=new Qi,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Vo("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Vo("baseRetryDelayMs",5e3,e),this.$a=Vo("retryDelaySeedMs",1e4,e),this.Ya=Vo("forwardChannelMaxRetries",2,e),this.ra=Vo("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new ao(e&&e.concurrentRequestLimit),this.Ca=new yo,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function Bo(e){if(zo(e),3==e.G){var t=e.V++,n=Vs(e.F);Hs(n,"SID",e.J),Hs(n,"RID",t),Hs(n,"TYPE","terminate"),Wo(e,n),(t=new vs(e,e.h,t,void 0)).K=2,t.v=Ks(Vs(n)),n=!1,pr.navigator&&pr.navigator.sendBeacon&&(n=pr.navigator.sendBeacon(t.v.toString(),"")),!n&&pr.Image&&((new Image).src=t.v,n=!0),n||(t.g=oa(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Cs(t)}ia(e)}function qo(e){e.g&&(Yo(e),e.g.cancel(),e.g=null)}function zo(e){qo(e),e.u&&(pr.clearTimeout(e.u),e.u=null),ea(e),e.i.cancel(),e.m&&("number"==typeof e.m&&pr.clearTimeout(e.m),e.m=null)}function Ho(e,t){e.l.push(new class{constructor(e,t){this.h=e,this.g=t}}(e.Za++,t)),3==e.G&&Ko(e)}function Ko(e){lo(e.i)||e.m||(e.m=!0,Ui(e.Ha,e),e.C=0)}function Go(e,t){var n;n=t?t.m:e.V++;const r=Vs(e.F);Hs(r,"SID",e.J),Hs(r,"RID",n),Hs(r,"AID",e.U),Wo(e,r),e.o&&e.s&&Fo(r,e.o,e.s),n=new vs(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Jo(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),fo(e.i,n),Es(n,r,t)}function Wo(e,t){e.j&&Ps({},(function(e,n){Hs(t,n,e)}))}function Jo(e,t,n){n=Math.min(e.l.length,n);var r=e.j?Tr(e.j.Oa,e.j,e):null;e:{var i=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=t,0>n)t=Math.max(0,i[o].h-100),s=!1;else try{vo(a,e,"req"+n+"_")}catch(e){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function Xo(e){e.g||e.u||(e.Y=1,Ui(e.Ga,e),e.A=0)}function Qo(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=as(Tr(e.Ga,e),na(e,e.A)),e.A++,!0)}function Yo(e){null!=e.B&&(pr.clearTimeout(e.B),e.B=null)}function Zo(e){e.g=new vs(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Vs(e.oa);Hs(t,"RID","rpc"),Hs(t,"SID",e.J),Hs(t,"CI",e.N?"0":"1"),Hs(t,"AID",e.U),Wo(e,t),Hs(t,"TYPE","xmlhttp"),e.o&&e.s&&Fo(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=Ks(Vs(t)),n.s=null,n.U=!0,_s(n,e)}function ea(e){null!=e.v&&(pr.clearTimeout(e.v),e.v=null)}function ta(e,t){var n=null;if(e.g==t){ea(e),Yo(e),e.g=null;var r=2}else{if(!ho(e.i,t))return;n=t.D,po(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;Ri(r=ts(),new os(r,n,t,i)),Ko(e)}else Xo(e);else if(3==(i=t.o)||0==i&&0<e.I||!(1==r&&function(e,t){return!(uo(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.l=t.D.concat(e.l),0):1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya)||(e.m=as(Tr(e.Ha,e,t),na(e,e.C)),e.C++,0)))}(e,t)||2==r&&Qo(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:ra(e,5);break;case 4:ra(e,10);break;case 3:ra(e,6);break;default:ra(e,2)}}function na(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function ra(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=Tr(e.jb,e);n||(n=new Fs("//www.google.com/images/cleardot.gif"),pr.location&&"http"==pr.location.protocol||js(n,"https"),Ks(n)),function(e,t){const n=new Qi;if(pr.Image){const r=new Image;r.onload=Er(wo,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Er(wo,n,r,"TestLoadImage: error",!1,t),r.onabort=Er(wo,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Er(wo,n,r,"TestLoadImage: timeout",!1,t),pr.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else ss(2);e.G=0,e.j&&e.j.va(t),ia(e),zo(e)}function ia(e){e.G=0,e.I=-1,e.j&&(0==go(e.i).length&&0==e.l.length||(e.i.i.length=0,Rr(e.l),e.l.length=0),e.j.ua())}function sa(e,t,n){let r=function(e){return e instanceof Fs?Vs(e):new Fs(e,void 0)}(n);if(""!=r.i)t&&Bs(r,t+"."+r.i),qs(r,r.m);else{const e=pr.location;r=function(e,t,n,r){var i=new Fs(null,void 0);return e&&js(i,e),t&&Bs(i,t),n&&qs(i,n),r&&(i.l=r),i}(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&Ur(e.aa,(function(e,t){Hs(r,t,e)})),t=e.D,n=e.sa,t&&n&&Hs(r,t,n),Hs(r,"VER",e.ma),Wo(e,r),r}function oa(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ba&&!e.qa?new So(new bo({ib:!0})):new So(e.qa)).L=e.H,t}function aa(){}function ca(){if(Kr&&!(10<=Number(si)))throw Error("Environmental error: no available transport.")}function la(e,t){Ni.call(this),this.g=new jo(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!$r(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!$r(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new da(this)}function ua(e){gs.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function ha(){ms.call(this),this.status=1}function da(e){this.g=e}(hr=So.prototype).ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():fs.g(),this.C=this.u?hs(this.u):hs(fs),this.g.onreadystatechange=Tr(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void Do(this,e)}e=n||"";const i=new xs(this.headers);r&&Ps(r,(function(e,t){i.set(t,e)})),r=function(e){e:{var t=$o;const n=e.length,r="string"==typeof e?e.split(""):e;for(let i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:"string"==typeof e?e.charAt(t):e[t]}(i.T()),n=pr.FormData&&e instanceof pr.FormData,!(0<=Sr(Ro,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Lo(this),0<this.B&&((this.K=function(e){return Kr&&ri()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Tr(this.pa,this)):this.A=zi(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){Do(this,e)}},hr.pa=function(){void 0!==fr&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ri(this,"timeout"),this.abort(8))},hr.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ri(this,"complete"),Ri(this,"abort"),xo(this))},hr.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),xo(this,!0)),So.Z.M.call(this)},hr.Fa=function(){this.s||(this.F||this.v||this.l?Po(this):this.cb())},hr.cb=function(){Po(this)},hr.ba=function(){try{return 2<Mo(this)?this.g.status:-1}catch(e){return-1}},hr.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},hr.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Ao(t)}},hr.Da=function(){return this.m},hr.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(hr=jo.prototype).ma=8,hr.G=1,hr.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(e){}},hr.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new vs(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?(s=Fr(s),jr(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Jo(this,i,t),Hs(n=Vs(this.F),"RID",e),Hs(n,"CVER",22),this.D&&Hs(n,"X-HTTP-Session-Id",this.D),Wo(this,n),this.o&&s&&Fo(n,this.o,s),fo(this.i,i),this.Ra&&Hs(n,"TYPE","init"),this.ja?(Hs(n,"$req",t),Hs(n,"SID","null"),i.$=!0,Es(i,n,null)):Es(i,n,t),this.G=2}}else 3==this.G&&(e?Go(this,e):0==this.l.length||lo(this.i)||Go(this))},hr.Ga=function(){if(this.u=null,Zo(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=as(Tr(this.bb,this),e)}},hr.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ss(10),qo(this),Zo(this))},hr.ab=function(){null!=this.v&&(this.v=null,qo(this),Qo(this),ss(19))},hr.jb=function(e){e?(this.h.info("Successfully pinged google.com"),ss(2)):(this.h.info("Failed to ping google.com"),ss(1))},(hr=aa.prototype).xa=function(){},hr.wa=function(){},hr.va=function(){},hr.ua=function(){},hr.Oa=function(){},ca.prototype.g=function(e,t){return new la(e,t)},_r(la,Ni),la.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Ui(Tr(e.hb,e,t))),ss(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=sa(e,null,e.W),Ko(e)},la.prototype.close=function(){Bo(this.g)},la.prototype.u=function(e){if("string"==typeof e){var t={};t.__data__=e,Ho(this.g,t)}else this.v?((t={}).__data__=Di(e),Ho(this.g,t)):Ho(this.g,e)},la.prototype.M=function(){this.g.j=null,delete this.j,Bo(this.g),delete this.g,la.Z.M.call(this)},_r(ua,gs),_r(ha,ms),_r(da,aa),da.prototype.xa=function(){Ri(this.g,"a")},da.prototype.wa=function(e){Ri(this.g,new ua(e))},da.prototype.va=function(e){Ri(this.g,new ha(e))},da.prototype.ua=function(){Ri(this.g,"b")},ca.prototype.createWebChannel=ca.prototype.g,la.prototype.send=la.prototype.u,la.prototype.open=la.prototype.m,la.prototype.close=la.prototype.close,cs.NO_ERROR=0,cs.TIMEOUT=8,cs.HTTP_ERROR=6,ls.COMPLETE="complete",ds.EventType=ps,ps.OPEN="a",ps.CLOSE="b",ps.ERROR="c",ps.MESSAGE="d",Ni.prototype.listen=Ni.prototype.N,So.prototype.listenOnce=So.prototype.O,So.prototype.getLastError=So.prototype.La,So.prototype.getLastErrorCode=So.prototype.Da,So.prototype.getStatus=So.prototype.ba,So.prototype.getResponseJson=So.prototype.Qa,So.prototype.getResponseText=So.prototype.ga,So.prototype.send=So.prototype.ea;var fa=cs,pa=ls,ma=Zi,ya=10,va=11,wa=bo,ba=ds,Ia=So;const Ta="@firebase/firestore";
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
     */class Ea{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ea.UNAUTHENTICATED=new Ea(null),Ea.GOOGLE_CREDENTIALS=new Ea("google-credentials-uid"),Ea.FIRST_PARTY=new Ea("first-party-uid"),Ea.MOCK_USER=new Ea("mock-user");
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
let _a="9.6.1";
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
     */const ka=new Nt("@firebase/firestore");function Aa(){return ka.logLevel}function Sa(e,...t){if(ka.logLevel<=_t.DEBUG){const n=t.map(Ra);ka.debug(`Firestore (${_a}): ${e}`,...n)}}function Ca(e,...t){if(ka.logLevel<=_t.ERROR){const n=t.map(Ra);ka.error(`Firestore (${_a}): ${e}`,...n)}}function Na(e,...t){if(ka.logLevel<=_t.WARN){const n=t.map(Ra);ka.warn(`Firestore (${_a}): ${e}`,...n)}}function Ra(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
     */function $a(e="Unexpected state"){const t=`FIRESTORE (${_a}) INTERNAL ASSERTION FAILED: `+e;throw Ca(t),new Error(t)}function Da(e,t){e||$a()}function Oa(e,t){return e}
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
     */const Pa={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class xa extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
     */class La{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
     */class Ma{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ua{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ea.UNAUTHENTICATED)))}shutdown(){}}class Fa{constructor(e){this.t=e,this.currentUser=Ea.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new La;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new La,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Sa("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Sa("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new La)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Sa("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Da("string"==typeof t.accessToken),new Ma(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Da(null===e||"string"==typeof e),new Ea(e)}}class Va{constructor(e,t,n){this.type="FirstParty",this.user=Ea.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class ja{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new Va(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(Ea.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ba{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qa{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null}start(e,t){this.o=n=>{e.enqueueRetryable((()=>(e=>(null!=e.error&&Sa("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`),t(e.token)))(n)))};const n=e=>{Sa("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit((e=>n(e))),setTimeout((()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?n(e):Sa("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Da("string"==typeof e.token),new Ba(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
     */class za{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.p(e),this.T=e=>t.writeSequenceNumber(e))}p(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ha(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
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
     */za.I=-1;class Ka{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=Ha(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function Ga(e,t){return e<t?-1:e>t?1:0}function Wa(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
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
     */class Ja{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new xa(Pa.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new xa(Pa.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new xa(Pa.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new xa(Pa.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ja.fromMillis(Date.now())}static fromDate(e){return Ja.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Ja(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ga(this.nanoseconds,e.nanoseconds):Ga(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
     */class Xa{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Xa(e)}static min(){return new Xa(new Ja(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
     */function Qa(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Ya(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Za(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
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
     */class ec{constructor(e,t,n){void 0===t?t=0:t>e.length&&$a(),void 0===n?n=e.length-t:n>e.length-t&&$a(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===ec.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ec?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class tc extends ec{construct(e,t,n){return new tc(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new xa(Pa.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new tc(t)}static emptyPath(){return new tc([])}}const nc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rc extends ec{construct(e,t,n){return new rc(e,t,n)}static isValidIdentifier(e){return nc.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rc.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new rc(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new xa(Pa.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new xa(Pa.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new xa(Pa.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new xa(Pa.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rc(t)}static emptyPath(){return new rc([])}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ic{constructor(e){this.fields=e,e.sort(rc.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Wa(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class sc{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new sc(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new sc(t)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ga(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}sc.EMPTY_BYTE_STRING=new sc("");const oc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ac(e){if(Da(!!e),"string"==typeof e){let t=0;const n=oc.exec(e);if(Da(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:cc(e.seconds),nanos:cc(e.nanos)}}function cc(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function lc(e){return"string"==typeof e?sc.fromBase64String(e):sc.fromUint8Array(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function uc(e){const t=ac(e.mapValue.fields.__local_write_time__.timestampValue);return new Ja(t.seconds,t.nanos)}
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
     */function hc(e){return null==e}function dc(e){return 0===e&&1/e==-1/0}
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
class fc{constructor(e){this.path=e}static fromPath(e){return new fc(tc.fromString(e))}static fromName(e){return new fc(tc.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===tc.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return tc.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fc(new tc(e.slice()))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function pc(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?function(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}(e)?4:10:$a()}function gc(e,t){const n=pc(e);if(n!==pc(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return uc(e).isEqual(uc(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=ac(e.timestampValue),r=ac(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return lc(e.bytesValue).isEqual(lc(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return cc(e.geoPointValue.latitude)===cc(t.geoPointValue.latitude)&&cc(e.geoPointValue.longitude)===cc(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return cc(e.integerValue)===cc(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=cc(e.doubleValue),r=cc(t.doubleValue);return n===r?dc(n)===dc(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Wa(e.arrayValue.values||[],t.arrayValue.values||[],gc);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Qa(n)!==Qa(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!gc(n[e],r[e])))return!1;return!0}(e,t);default:return $a()}}function mc(e,t){return void 0!==(e.values||[]).find((e=>gc(e,t)))}function yc(e,t){const n=pc(e),r=pc(t);if(n!==r)return Ga(n,r);switch(n){case 0:return 0;case 1:return Ga(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=cc(e.integerValue||e.doubleValue),r=cc(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return vc(e.timestampValue,t.timestampValue);case 4:return vc(uc(e),uc(t));case 5:return Ga(e.stringValue,t.stringValue);case 6:return function(e,t){const n=lc(e),r=lc(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=Ga(n[e],r[e]);if(0!==t)return t}return Ga(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Ga(cc(e.latitude),cc(t.latitude));return 0!==n?n:Ga(cc(e.longitude),cc(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=yc(n[e],r[e]);if(t)return t}return Ga(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){const t=Ga(r[e],s[e]);if(0!==t)return t;const o=yc(n[r[e]],i[s[e]]);if(0!==o)return o}return Ga(r.length,s.length)}(e.mapValue,t.mapValue);default:throw $a()}}function vc(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Ga(e,t);const n=ac(e),r=ac(t),i=Ga(n.seconds,r.seconds);return 0!==i?i:Ga(n.nanos,r.nanos)}function wc(e){return bc(e)}function bc(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=ac(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?lc(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,fc.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=bc(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${bc(e.fields[i])}`;return n+"}"}(e.mapValue):$a();var t,n}function Ic(e){return!!e&&"integerValue"in e}function Tc(e){return!!e&&"arrayValue"in e}function Ec(e){return!!e&&"mapValue"in e}function _c(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Ya(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=_c(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=_c(e.arrayValue.values[n]);return t}return Object.assign({},e)}
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
     */class kc{constructor(e){this.value=e}static empty(){return new kc({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Ec(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=_c(t)}setAll(e){let t=rc.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=_c(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Ec(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return gc(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Ec(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Ya(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new kc(_c(this.value))}}function Ac(e){const t=[];return Ya(e.fields,((e,n)=>{const r=new rc([e]);if(Ec(n)){const e=Ac(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new ic(t)
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
     */}class Sc{constructor(e,t,n,r,i){this.key=e,this.documentType=t,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(e){return new Sc(e,0,Xa.min(),kc.empty(),0)}static newFoundDocument(e,t,n){return new Sc(e,1,t,n,0)}static newNoDocument(e,t){return new Sc(e,2,t,kc.empty(),0)}static newUnknownDocument(e,t){return new Sc(e,3,t,kc.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kc.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kc.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Sc&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new Sc(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
     */class Cc{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.R=null}}function Nc(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Cc(e,t,n,r,i,s,o)}function Rc(e){const t=Oa(e);if(null===t.R){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>function(e){return e.field.canonicalString()+e.op.toString()+wc(e.value)}(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),hc(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=Bc(t.startAt)),t.endAt&&(e+="|ub:",e+=Bc(t.endAt)),t.R=e}return t.R}function $c(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!zc(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!gc(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Kc(e.startAt,t.startAt)&&Kc(e.endAt,t.endAt)}class Dc extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.P(e,t,n):new Oc(e,t,n):"array-contains"===t?new Mc(e,n):"in"===t?new Uc(e,n):"not-in"===t?new Fc(e,n):"array-contains-any"===t?new Vc(e,n):new Dc(e,t,n)}static P(e,t,n){return"in"===t?new Pc(e,n):new xc(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.v(yc(t,this.value)):null!==t&&pc(this.value)===pc(t)&&this.v(yc(t,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return $a()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Oc extends Dc{constructor(e,t,n){super(e,t,n),this.key=fc.fromName(n.referenceValue)}matches(e){const t=fc.comparator(e.key,this.key);return this.v(t)}}class Pc extends Dc{constructor(e,t){super(e,"in",t),this.keys=Lc("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class xc extends Dc{constructor(e,t){super(e,"not-in",t),this.keys=Lc("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Lc(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>fc.fromName(e.referenceValue)))}class Mc extends Dc{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Tc(t)&&mc(t.arrayValue,this.value)}}class Uc extends Dc{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&mc(this.value.arrayValue,t)}}class Fc extends Dc{constructor(e,t){super(e,"not-in",t)}matches(e){if(mc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!mc(this.value.arrayValue,t)}}class Vc extends Dc{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Tc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>mc(this.value.arrayValue,e)))}}class jc{constructor(e,t){this.position=e,this.before=t}}function Bc(e){return`${e.before?"b":"a"}:${e.position.map((e=>wc(e))).join(",")}`}class qc{constructor(e,t="asc"){this.field=e,this.dir=t}}function zc(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Hc(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?fc.comparator(fc.fromName(o.referenceValue),n.key):yc(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return e.before?r<=0:r<0}function Kc(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.before!==t.before||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!gc(e.position[n],t.position[n]))return!1;return!0}
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
     */class Gc{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.S=null,this.D=null,this.startAt,this.endAt}}function Wc(e){const t=Oa(e);if(null===t.S){t.S=[];const e=function(e){for(const t of e.filters)if(t.V())return t.field;return null}(t),n=function(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}(t);if(null!==e&&null===n)e.isKeyField()||t.S.push(new qc(e)),t.S.push(new qc(rc.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.S.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.S.push(new qc(rc.keyField(),e))}}}return t.S}function Jc(e){const t=Oa(e);if(!t.D)if("F"===t.limitType)t.D=Nc(t.path,t.collectionGroup,Wc(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of Wc(t)){const t="desc"===n.dir?"asc":"desc";e.push(new qc(n.field,t))}const n=t.endAt?new jc(t.endAt.position,!t.endAt.before):null,r=t.startAt?new jc(t.startAt.position,!t.startAt.before):null;t.D=Nc(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.D}function Xc(e,t){return $c(Jc(e),Jc(t))&&e.limitType===t.limitType}function Qc(e){return`${Rc(Jc(e))}|lt:${e.limitType}`}function Yc(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${wc(t.value)}`;var t})).join(", ")}]`),hc(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: "+Bc(e.startAt)),e.endAt&&(t+=", endAt: "+Bc(e.endAt)),`Target(${t})`}(Jc(e))}; limitType=${e.limitType})`}function Zc(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):fc.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!Hc(e.startAt,Wc(e),t))&&(!e.endAt||!Hc(e.endAt,Wc(e),t))}(e,t)}function el(e,t,n){const r=e.field.isKeyField()?fc.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?yc(r,i):$a()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return $a()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function tl(e,t){if(e.C){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:dc(t)?"-0":t}}function nl(e){return{integerValue:""+e}}function rl(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!dc(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(t)?nl(t):tl(e,t)}
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
     */class il{constructor(){this._=void 0}}function sl(e,t,n){return e instanceof cl?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof ll?ul(e,t):e instanceof hl?dl(e,t):function(e,t){const n=al(e,t),r=pl(n)+pl(e.N);return Ic(n)&&Ic(e.N)?nl(r):tl(e.k,r)}(e,t)}function ol(e,t,n){return e instanceof ll?ul(e,t):e instanceof hl?dl(e,t):n}function al(e,t){return e instanceof fl?Ic(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class cl extends il{}class ll extends il{constructor(e){super(),this.elements=e}}function ul(e,t){const n=gl(t);for(const t of e.elements)n.some((e=>gc(e,t)))||n.push(t);return{arrayValue:{values:n}}}class hl extends il{constructor(e){super(),this.elements=e}}function dl(e,t){let n=gl(t);for(const t of e.elements)n=n.filter((e=>!gc(e,t)));return{arrayValue:{values:n}}}class fl extends il{constructor(e,t){super(),this.k=e,this.N=t}}function pl(e){return cc(e.integerValue||e.doubleValue)}function gl(e){return Tc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class ml{constructor(e,t){this.version=e,this.transformResults=t}}class yl{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new yl}static exists(e){return new yl(void 0,e)}static updateTime(e){return new yl(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vl(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class wl{}function bl(e,t,n){e instanceof kl?function(e,t,n){const r=e.value.clone(),i=Cl(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Al?function(e,t,n){if(!vl(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Cl(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Sl(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Il(e,t,n){e instanceof kl?function(e,t,n){if(!vl(e.precondition,t))return;const r=e.value.clone(),i=Nl(e.fieldTransforms,n,t);r.setAll(i),t.convertToFoundDocument(_l(t),r).setHasLocalMutations()}(e,t,n):e instanceof Al?function(e,t,n){if(!vl(e.precondition,t))return;const r=Nl(e.fieldTransforms,n,t),i=t.data;i.setAll(Sl(e)),i.setAll(r),t.convertToFoundDocument(_l(t),i).setHasLocalMutations()}(e,t,n):function(e,t){vl(e.precondition,t)&&t.convertToNoDocument(Xa.min())}(e,t)}function Tl(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=al(r.transform,e||null);null!=i&&(null==n&&(n=kc.empty()),n.set(r.field,i))}return n||null}function El(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Wa(e,t,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof ll&&t instanceof ll||e instanceof hl&&t instanceof hl?Wa(e.elements,t.elements,gc):e instanceof fl&&t instanceof fl?gc(e.N,t.N):e instanceof cl&&t instanceof cl}(e.transform,t.transform)}(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function _l(e){return e.isFoundDocument()?e.version:Xa.min()}class kl extends wl{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Al extends wl{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Sl(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Cl(e,t,n){const r=new Map;Da(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,ol(o,a,n[i]))}return r}function Nl(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,sl(e,s,t))}return r}class Rl extends wl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class $l extends wl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
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
     */var Dl,Ol;(Ol=Dl||(Dl={}))[Ol.OK=0]="OK",Ol[Ol.CANCELLED=1]="CANCELLED",Ol[Ol.UNKNOWN=2]="UNKNOWN",Ol[Ol.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ol[Ol.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ol[Ol.NOT_FOUND=5]="NOT_FOUND",Ol[Ol.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ol[Ol.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ol[Ol.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ol[Ol.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ol[Ol.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ol[Ol.ABORTED=10]="ABORTED",Ol[Ol.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ol[Ol.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ol[Ol.INTERNAL=13]="INTERNAL",Ol[Ol.UNAVAILABLE=14]="UNAVAILABLE",Ol[Ol.DATA_LOSS=15]="DATA_LOSS";
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
class Pl{constructor(e,t){this.comparator=e,this.root=t||Ll.EMPTY}insert(e,t){return new Pl(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ll.BLACK,null,null))}remove(e){return new Pl(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ll.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xl(this.root,e,this.comparator,!1)}getReverseIterator(){return new xl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xl(this.root,e,this.comparator,!0)}}class xl{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ll{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Ll.RED,this.left=null!=r?r:Ll.EMPTY,this.right=null!=i?i:Ll.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Ll(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ll.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Ll.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ll.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ll.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw $a();if(this.right.isRed())throw $a();const e=this.left.check();if(e!==this.right.check())throw $a();return e+(this.isRed()?0:1)}}Ll.EMPTY=null,Ll.RED=!0,Ll.BLACK=!1,Ll.EMPTY=new class{constructor(){this.size=0}get key(){throw $a()}get value(){throw $a()}get color(){throw $a()}get left(){throw $a()}get right(){throw $a()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Ll(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Ml{constructor(e){this.comparator=e,this.data=new Pl(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ul(this.data.getIterator())}getIteratorFrom(e){return new Ul(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Ml))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ml(this.comparator);return t.data=e,t}}class Ul{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
     */const Fl=new Pl(fc.comparator);function Vl(){return Fl}const jl=new Pl(fc.comparator);function Bl(){return jl}const ql=new Pl(fc.comparator);const zl=new Ml(fc.comparator);function Hl(...e){let t=zl;for(const n of e)t=t.add(n);return t}const Kl=new Ml(Ga);class Gl{constructor(e,t){this.databaseId=e,this.C=t}}function Wl(e,t){return e.C?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Jl(e,t){return e.C?t.toBase64():t.toUint8Array()}function Xl(e,t){return Wl(e,t.toTimestamp())}function Ql(e){return Da(!!e),Xa.fromTimestamp(function(e){const t=ac(e);return new Ja(t.seconds,t.nanos)}(e))}function Yl(e,t){return function(e){return new tc(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Zl(e,t){return Yl(e.databaseId,t.path)}function eu(e){const t=function(e){const t=tc.fromString(e);return Da(function(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}(t)),t}(e);return 4===t.length?tc.emptyPath():function(e){return Da(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}(t)}function tu(e,t,n){return{name:Zl(e,t),fields:n.value.mapValue.fields}}function nu(e){let t=eu(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Da(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=ru(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new qc(su(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,hc(t)?null:t}(n.limit));let c=null;n.startAt&&(c=iu(n.startAt));let l=null;return n.endAt&&(l=iu(n.endAt)),function(e,t,n,r,i,s,o,a){return new Gc(e,t,n,r,i,s,o,a)}(t,i,o,s,a,"F",c,l)}function ru(e){return e?void 0!==e.unaryFilter?[au(e)]:void 0!==e.fieldFilter?[ou(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>ru(e))).reduce(((e,t)=>e.concat(t))):$a():[]}function iu(e){const t=!!e.before,n=e.values||[];return new jc(n,t)}function su(e){return rc.fromServerFormat(e.fieldPath)}function ou(e){return Dc.create(su(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $a()}}(e.fieldFilter.op),e.fieldFilter.value)}function au(e){switch(e.unaryFilter.op){case"IS_NAN":const t=su(e.unaryFilter.field);return Dc.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=su(e.unaryFilter.field);return Dc.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=su(e.unaryFilter.field);return Dc.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=su(e.unaryFilter.field);return Dc.create(i,"!=",{nullValue:"NULL_VALUE"});default:return $a()}}function cu(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}
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
class lu{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&$a(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new lu(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof lu?t:lu.resolve(t)}catch(e){return lu.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):lu.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):lu.reject(t)}static resolve(e){return new lu(((t,n)=>{t(e)}))}static reject(e){return new lu(((t,n)=>{n(e)}))}static waitFor(e){return new lu(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=lu.resolve(!1);for(const n of e)t=t.next((e=>e?lu.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}}function uu(e){return"IndexedDbTransactionError"===e.name}
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
     */class hu{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(e.key)&&bl(r,e,n[t])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&Il(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&Il(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach((t=>{const n=e.get(t.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(Xa.min())}))}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Hl())}isEqual(e){return this.batchId===e.batchId&&Wa(this.mutations,e.mutations,((e,t)=>El(e,t)))&&Wa(this.baseMutations,e.baseMutations,((e,t)=>El(e,t)))}}class du{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Da(e.mutations.length===n.length);let r=ql;const i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new du(e,t,n,r)}}
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
     */class fu{constructor(e){this.Gt=e}}function pu(e){const t=nu({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?function(e,t,n){return new Gc(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}(t,t.limit,"L"):t}
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
     */class gu{constructor(){this.zt=new mu}addToCollectionParentIndex(e,t){return this.zt.add(t),lu.resolve()}getCollectionParents(e,t){return lu.resolve(this.zt.getEntries(t))}}class mu{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Ml(tc.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Ml(tc.comparator)).toArray()}}
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
     */class yu{constructor(e){this.se=e}next(){return this.se+=2,this.se}static ie(){return new yu(0)}static re(){return new yu(-1)}}
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
     */async function vu(e){if(e.code!==Pa.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;Sa("LocalStore","Unexpectedly lost primary lease")}
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
     */class wu{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t])}else this.inner[n]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),!0;return!1}forEach(e){Ya(this.inner,((t,n)=>{for(const[t,r]of n)e(t,r)}))}isEmpty(){return Za(this.inner)}}
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
class bu{constructor(e,t,n){this.Je=e,this.An=t,this.Jt=n}Rn(e,t){return this.An.getAllMutationBatchesAffectingDocumentKey(e,t).next((n=>this.Pn(e,t,n)))}Pn(e,t,n){return this.Je.getEntry(e,t).next((e=>{for(const t of n)t.applyToLocalView(e);return e}))}bn(e,t){e.forEach(((e,n)=>{for(const e of t)e.applyToLocalView(n)}))}vn(e,t){return this.Je.getEntries(e,t).next((t=>this.Vn(e,t).next((()=>t))))}Vn(e,t){return this.An.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>this.bn(t,e)))}getDocumentsMatchingQuery(e,t,n){return function(e){return fc.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.Sn(e,t.path):function(e){return null!==e.collectionGroup}(t)?this.Dn(e,t,n):this.Cn(e,t,n)}Sn(e,t){return this.Rn(e,new fc(t)).next((e=>{let t=Bl();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}Dn(e,t,n){const r=t.collectionGroup;let i=Bl();return this.Jt.getCollectionParents(e,r).next((s=>lu.forEach(s,(s=>{const o=function(e,t){return new Gc(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.Cn(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}Cn(e,t,n){let r,i;return this.Je.getDocumentsMatchingQuery(e,t,n).next((n=>(r=n,this.An.getAllMutationBatchesAffectingQuery(e,t)))).next((t=>(i=t,this.Nn(e,i,r).next((e=>{r=e;for(const e of i)for(const t of e.mutations){const n=t.key;let i=r.get(n);null==i&&(i=Sc.newInvalidDocument(n),r=r.insert(n,i)),Il(t,i,e.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))))).next((()=>(r.forEach(((e,n)=>{Zc(t,n)||(r=r.remove(e))})),r)))}Nn(e,t,n){let r=Hl();for(const e of t)for(const t of e.mutations)t instanceof Al&&null===n.get(t.key)&&(r=r.add(t.key));let i=n;return this.Je.getEntries(e,r).next((e=>(e.forEach(((e,t)=>{t.isFoundDocument()&&(i=i.insert(e,t))})),i)))}}
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
     */class Iu{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.kn=n,this.xn=r}static $n(e,t){let n=Hl(),r=Hl();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new Iu(e,t.fromCache,n,r)}}
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
     */class Tu{Fn(e){this.On=e}getDocumentsMatchingQuery(e,t,n,r){return function(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}(t)||n.isEqual(Xa.min())?this.Mn(e,t):this.On.vn(e,r).next((i=>{const s=this.Ln(t,i);return(function(e){return!hc(e.limit)&&"F"===e.limitType}(t)||function(e){return!hc(e.limit)&&"L"===e.limitType}(t))&&this.Bn(t.limitType,s,r,n)?this.Mn(e,t):(Aa()<=_t.DEBUG&&Sa("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Yc(t)),this.On.getDocumentsMatchingQuery(e,t,n).next((e=>(s.forEach((t=>{e=e.insert(t.key,t)})),e))))}))}Ln(e,t){let n=new Ml(function(e){return(t,n)=>{let r=!1;for(const i of Wc(e)){const e=el(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}(e));return t.forEach(((t,r)=>{Zc(e,r)&&(n=n.add(r))})),n}Bn(e,t,n,r){if(n.size!==t.size)return!0;const i="F"===e?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mn(e,t){return Aa()<=_t.DEBUG&&Sa("QueryEngine","Using full collection scan to execute query:",Yc(t)),this.On.getDocumentsMatchingQuery(e,t,Xa.min())}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Eu{constructor(e,t,n,r){this.persistence=e,this.Un=t,this.k=r,this.qn=new Pl(Ga),this.Kn=new wu((e=>Rc(e)),$c),this.jn=Xa.min(),this.An=e.getMutationQueue(n),this.Qn=e.getRemoteDocumentCache(),this.He=e.getTargetCache(),this.Wn=new bu(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=e.getBundleCache(),this.Un.Fn(this.Wn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.qn)))}}async function _u(e,t){const n=Oa(e);let r=n.An,i=n.Wn;const s=await n.persistence.runTransaction("Handle user change","readonly",(e=>{let s;return n.An.getAllMutationBatches(e).next((o=>(s=o,r=n.persistence.getMutationQueue(t),i=new bu(n.Qn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(e)))).next((t=>{const n=[],r=[];let o=Hl();for(const e of s){n.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return i.vn(e,o).next((e=>({Gn:e,removedBatchIds:n,addedBatchIds:r})))}))}));return n.An=r,n.Wn=i,n.Un.Fn(n.Wn),s}function ku(e,t){const n=Oa(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.An.getNextMutationBatchAfterBatchId(e,t))))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Au{constructor(e){this.k=e,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(e,t){return lu.resolve(this.Xn.get(t))}saveBundleMetadata(e,t){var n;return this.Xn.set(t.id,{id:(n=t).id,version:n.version,createTime:Ql(n.createTime)}),lu.resolve()}getNamedQuery(e,t){return lu.resolve(this.Zn.get(t))}saveNamedQuery(e,t){return this.Zn.set(t.name,function(e){return{name:e.name,query:pu(e.bundledQuery),readTime:Ql(e.readTime)}}(t)),lu.resolve()}}
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
     */class Su{constructor(){this.ts=new Ml(Cu.es),this.ns=new Ml(Cu.ss)}isEmpty(){return this.ts.isEmpty()}addReference(e,t){const n=new Cu(e,t);this.ts=this.ts.add(n),this.ns=this.ns.add(n)}rs(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.os(new Cu(e,t))}cs(e,t){e.forEach((e=>this.removeReference(e,t)))}us(e){const t=new fc(new tc([])),n=new Cu(t,e),r=new Cu(t,e+1),i=[];return this.ns.forEachInRange([n,r],(e=>{this.os(e),i.push(e.key)})),i}hs(){this.ts.forEach((e=>this.os(e)))}os(e){this.ts=this.ts.delete(e),this.ns=this.ns.delete(e)}ls(e){const t=new fc(new tc([])),n=new Cu(t,e),r=new Cu(t,e+1);let i=Hl();return this.ns.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new Cu(e,0),n=this.ts.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Cu{constructor(e,t){this.key=e,this.fs=t}static es(e,t){return fc.comparator(e.key,t.key)||Ga(e.fs,t.fs)}static ss(e,t){return Ga(e.fs,t.fs)||fc.comparator(e.key,t.key)}}
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
     */class Nu{constructor(e,t){this.Jt=e,this.referenceDelegate=t,this.An=[],this.ds=1,this.ws=new Ml(Cu.es)}checkEmpty(e){return lu.resolve(0===this.An.length)}addMutationBatch(e,t,n,r){const i=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const s=new hu(i,t,n,r);this.An.push(s);for(const t of r)this.ws=this.ws.add(new Cu(t.key,i)),this.Jt.addToCollectionParentIndex(e,t.key.path.popLast());return lu.resolve(s)}lookupMutationBatch(e,t){return lu.resolve(this._s(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.gs(n),i=r<0?0:r;return lu.resolve(this.An.length>i?this.An[i]:null)}getHighestUnacknowledgedBatchId(){return lu.resolve(0===this.An.length?-1:this.ds-1)}getAllMutationBatches(e){return lu.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Cu(t,0),r=new Cu(t,Number.POSITIVE_INFINITY),i=[];return this.ws.forEachInRange([n,r],(e=>{const t=this._s(e.fs);i.push(t)})),lu.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Ml(Ga);return t.forEach((e=>{const t=new Cu(e,0),r=new Cu(e,Number.POSITIVE_INFINITY);this.ws.forEachInRange([t,r],(e=>{n=n.add(e.fs)}))})),lu.resolve(this.ys(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;fc.isDocumentKey(i)||(i=i.child(""));const s=new Cu(new fc(i),0);let o=new Ml(Ga);return this.ws.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.fs)),!0)}),s),lu.resolve(this.ys(o))}ys(e){const t=[];return e.forEach((e=>{const n=this._s(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Da(0===this.ps(t.batchId,"removed")),this.An.shift();let n=this.ws;return lu.forEach(t.mutations,(r=>{const i=new Cu(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.ws=n}))}ee(e){}containsKey(e,t){const n=new Cu(t,0),r=this.ws.firstAfterOrEqual(n);return lu.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.An.length,lu.resolve()}ps(e,t){return this.gs(e)}gs(e){return 0===this.An.length?0:e-this.An[0].batchId}_s(e){const t=this.gs(e);return t<0||t>=this.An.length?null:this.An[t]}}
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
     */class Ru{constructor(e,t){this.Jt=e,this.Ts=t,this.docs=new Pl(fc.comparator),this.size=0}addEntry(e,t,n){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ts(t);return this.docs=this.docs.insert(r,{document:t.clone(),size:o,readTime:n}),this.size+=o-s,this.Jt.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return lu.resolve(n?n.document.clone():Sc.newInvalidDocument(t))}getEntries(e,t){let n=Vl();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.clone():Sc.newInvalidDocument(e))})),lu.resolve(n)}getDocumentsMatchingQuery(e,t,n){let r=Vl();const i=new fc(t.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i,readTime:o}}=s.getNext();if(!t.path.isPrefixOf(e.path))break;o.compareTo(n)<=0||Zc(t,i)&&(r=r.insert(i.key,i.clone()))}return lu.resolve(r)}Es(e,t){return lu.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new $u(this)}getSize(e){return lu.resolve(this.size)}}class $u extends class{constructor(){this.changes=new wu((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}getReadTime(e){const t=this.changes.get(e);return t?t.readTime:Xa.min()}addEntry(e,t){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:t})}removeEntry(e,t=null){this.assertNotApplied(),this.changes.set(e,{document:Sc.newInvalidDocument(e),readTime:t})}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?lu.resolve(n.document):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}{constructor(e){super(),this.De=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.document.isValidDocument()?t.push(this.De.addEntry(e,r.document,this.getReadTime(n))):this.De.removeEntry(n)})),lu.waitFor(t)}getFromCache(e,t){return this.De.getEntry(e,t)}getAllFromCache(e,t){return this.De.getEntries(e,t)}}
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
     */class Du{constructor(e){this.persistence=e,this.Is=new wu((e=>Rc(e)),$c),this.lastRemoteSnapshotVersion=Xa.min(),this.highestTargetId=0,this.As=0,this.Rs=new Su,this.targetCount=0,this.Ps=yu.ie()}forEachTarget(e,t){return this.Is.forEach(((e,n)=>t(n))),lu.resolve()}getLastRemoteSnapshotVersion(e){return lu.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return lu.resolve(this.As)}allocateTargetId(e){return this.highestTargetId=this.Ps.next(),lu.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.As&&(this.As=t),lu.resolve()}ce(e){this.Is.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ps=new yu(t),this.highestTargetId=t),e.sequenceNumber>this.As&&(this.As=e.sequenceNumber)}addTargetData(e,t){return this.ce(t),this.targetCount+=1,lu.resolve()}updateTargetData(e,t){return this.ce(t),lu.resolve()}removeTargetData(e,t){return this.Is.delete(t.target),this.Rs.us(t.targetId),this.targetCount-=1,lu.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Is.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Is.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),lu.waitFor(i).next((()=>r))}getTargetCount(e){return lu.resolve(this.targetCount)}getTargetData(e,t){const n=this.Is.get(t)||null;return lu.resolve(n)}addMatchingKeys(e,t,n){return this.Rs.rs(t,n),lu.resolve()}removeMatchingKeys(e,t,n){this.Rs.cs(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),lu.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Rs.us(t),lu.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Rs.ls(t);return lu.resolve(n)}containsKey(e,t){return lu.resolve(this.Rs.containsKey(t))}}
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
     */class Ou{constructor(e,t){this.bs={},this.Be=new za(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=e(this),this.He=new Du(this),this.Jt=new gu,this.Je=function(e,t){return new Ru(e,t)}(this.Jt,(e=>this.referenceDelegate.vs(e))),this.k=new fu(t),this.Ye=new Au(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(e){let t=this.bs[e.toKey()];return t||(t=new Nu(this.Jt,this.referenceDelegate),this.bs[e.toKey()]=t),t}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(e,t,n){Sa("MemoryPersistence","Starting transaction:",e);const r=new Pu(this.Be.next());return this.referenceDelegate.Vs(),n(r).next((e=>this.referenceDelegate.Ss(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ds(e,t){return lu.or(Object.values(this.bs).map((n=>()=>n.containsKey(e,t))))}}class Pu extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}{constructor(e){super(),this.currentSequenceNumber=e}}class xu{constructor(e){this.persistence=e,this.Cs=new Su,this.Ns=null}static ks(e){return new xu(e)}get xs(){if(this.Ns)return this.Ns;throw $a()}addReference(e,t,n){return this.Cs.addReference(n,t),this.xs.delete(n.toString()),lu.resolve()}removeReference(e,t,n){return this.Cs.removeReference(n,t),this.xs.add(n.toString()),lu.resolve()}markPotentiallyOrphaned(e,t){return this.xs.add(t.toString()),lu.resolve()}removeTarget(e,t){this.Cs.us(t.targetId).forEach((e=>this.xs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.xs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Vs(){this.Ns=new Set}Ss(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return lu.forEach(this.xs,(n=>{const r=fc.fromPath(n);return this.$s(e,r).next((e=>{e||t.removeEntry(r)}))})).next((()=>(this.Ns=null,t.apply(e))))}updateLimboDocument(e,t){return this.$s(e,t).next((e=>{e?this.xs.delete(t.toString()):this.xs.add(t.toString())}))}vs(e){return 0}$s(e,t){return lu.or([()=>lu.resolve(this.Cs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ds(e,t)])}}class Lu{constructor(){this.activeTargetIds=Kl}Ms(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ls(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Mu{constructor(){this.pi=new Lu,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.pi.Ms(e),this.Ti[e]||"not-current"}updateQueryState(e,t,n){this.Ti[e]=t}removeLocalQueryTarget(e){this.pi.Ls(e)}isLocalQueryTarget(e){return this.pi.activeTargetIds.has(e)}clearQueryState(e){delete this.Ti[e]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(e){return this.pi.activeTargetIds.has(e)}start(){return this.pi=new Lu,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}
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
     */class Uu{Ei(e){}shutdown(){}}
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
     */class Fu{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.Pi(),this.bi=[],this.vi()}Ei(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){Sa("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Pi(){Sa("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Vu={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
     */class ju{constructor(e){this.Vi=e.Vi,this.Si=e.Si}Di(e){this.Ci=e}Ni(e){this.ki=e}onMessage(e){this.xi=e}close(){this.Si()}send(e){this.Vi(e)}$i(){this.Ci()}Fi(e){this.ki(e)}Oi(e){this.xi(e)}}
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
     */class Bu extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.Mi=t+"://"+e.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(e,t,n,r,i){const s=this.Ui(e,t);Sa("RestConnection","Sending: ",s,n);const o={};return this.qi(o,r,i),this.Ki(e,s,o,n).then((e=>(Sa("RestConnection","Received: ",e),e)),(t=>{throw Na("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}ji(e,t,n,r,i){return this.Bi(e,t,n,r,i)}qi(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+_a,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}Ui(e,t){const n=Vu[e];return`${this.Mi}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Ki(e,t,n,r){return new Promise(((i,s)=>{const o=new Ia;o.listenOnce(pa.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case fa.NO_ERROR:const t=o.getResponseJson();Sa("Connection","XHR received:",JSON.stringify(t)),i(t);break;case fa.TIMEOUT:Sa("Connection",'RPC "'+e+'" timed out'),s(new xa(Pa.DEADLINE_EXCEEDED,"Request time out"));break;case fa.HTTP_ERROR:const n=o.getStatus();if(Sa("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Pa).indexOf(t)>=0?t:Pa.UNKNOWN}(e.status);s(new xa(t,e.message))}else s(new xa(Pa.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new xa(Pa.UNAVAILABLE,"Connection failed."));break;default:$a()}}finally{Sa("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}Qi(e,t,n){const r=[this.Mi,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=new ca,s=ts(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new wa({})),this.qi(o.initMessageHeaders,t,n),it()||ot()||rt().indexOf("Electron/")>=0||at()||rt().indexOf("MSAppHost/")>=0||st()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");Sa("Connection","Creating WebChannel: "+a,o);const c=i.createWebChannel(a,o);let l=!1,u=!1;const h=new ju({Vi:e=>{u?Sa("Connection","Not sending because WebChannel is closed:",e):(l||(Sa("Connection","Opening WebChannel transport."),c.open(),l=!0),Sa("Connection","WebChannel sending:",e),c.send(e))},Si:()=>c.close()}),d=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return d(c,ba.EventType.OPEN,(()=>{u||Sa("Connection","WebChannel transport opened.")})),d(c,ba.EventType.CLOSE,(()=>{u||(u=!0,Sa("Connection","WebChannel transport closed"),h.Fi())})),d(c,ba.EventType.ERROR,(e=>{u||(u=!0,Na("Connection","WebChannel transport errored:",e),h.Fi(new xa(Pa.UNAVAILABLE,"The operation could not be completed")))})),d(c,ba.EventType.MESSAGE,(e=>{var t;if(!u){const n=e.data[0];Da(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){Sa("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=Dl[e];if(void 0!==t)return function(e){if(void 0===e)return Ca("GRPC error has no .code"),Pa.UNKNOWN;switch(e){case Dl.OK:return Pa.OK;case Dl.CANCELLED:return Pa.CANCELLED;case Dl.UNKNOWN:return Pa.UNKNOWN;case Dl.DEADLINE_EXCEEDED:return Pa.DEADLINE_EXCEEDED;case Dl.RESOURCE_EXHAUSTED:return Pa.RESOURCE_EXHAUSTED;case Dl.INTERNAL:return Pa.INTERNAL;case Dl.UNAVAILABLE:return Pa.UNAVAILABLE;case Dl.UNAUTHENTICATED:return Pa.UNAUTHENTICATED;case Dl.INVALID_ARGUMENT:return Pa.INVALID_ARGUMENT;case Dl.NOT_FOUND:return Pa.NOT_FOUND;case Dl.ALREADY_EXISTS:return Pa.ALREADY_EXISTS;case Dl.PERMISSION_DENIED:return Pa.PERMISSION_DENIED;case Dl.FAILED_PRECONDITION:return Pa.FAILED_PRECONDITION;case Dl.ABORTED:return Pa.ABORTED;case Dl.OUT_OF_RANGE:return Pa.OUT_OF_RANGE;case Dl.UNIMPLEMENTED:return Pa.UNIMPLEMENTED;case Dl.DATA_LOSS:return Pa.DATA_LOSS;default:return $a()}}(t)}(e),n=i.message;void 0===t&&(t=Pa.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),u=!0,h.Fi(new xa(t,n)),c.close()}else Sa("Connection","WebChannel received:",n),h.Oi(n)}})),d(s,ma.STAT_EVENT,(e=>{e.stat===ya?Sa("Connection","Detected buffering proxy"):e.stat===va&&Sa("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.$i()}),0),h}}function qu(){return"undefined"!=typeof document?document:null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function zu(e){return new Gl(e,!0)}class Hu{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Oe=e,this.timerId=t,this.Wi=n,this.Gi=r,this.zi=i,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(e){this.cancel();const t=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),r=Math.max(0,t-n);r>0&&Sa("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Hi} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Ji=this.Oe.enqueueAfterDelay(this.timerId,r,(()=>(this.Yi=Date.now(),e()))),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
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
     */class Ku extends class{constructor(e,t,n,r,i,s,o,a){this.Oe=e,this.nr=n,this.sr=r,this.ir=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.rr=0,this.ar=null,this.cr=null,this.stream=null,this.ur=new Hu(e,t)}hr(){return 1===this.state||5===this.state||this.lr()}lr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&null===this.ar&&(this.ar=this.Oe.enqueueAfterDelay(this.nr,6e4,(()=>this.mr())))}gr(e){this.yr(),this.stream.send(e)}async mr(){if(this.lr())return this.close(0)}yr(){this.ar&&(this.ar.cancel(),this.ar=null)}pr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,t){this.yr(),this.pr(),this.ur.cancel(),this.rr++,4!==e?this.ur.reset():t&&t.code===Pa.RESOURCE_EXHAUSTED?(Ca(t.toString()),Ca("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):t&&t.code===Pa.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Tr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ni(t)}Tr(){}auth(){this.state=1;const e=this.Er(this.rr),t=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.rr===t&&this.Ir(e,n)}),(t=>{e((()=>{const e=new xa(Pa.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Ar(e)}))}))}Ir(e,t){const n=this.Er(this.rr);this.stream=this.Rr(e,t),this.stream.Di((()=>{n((()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.sr,1e4,(()=>(this.lr()&&(this.state=3),Promise.resolve()))),this.listener.Di())))})),this.stream.Ni((e=>{n((()=>this.Ar(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}dr(){this.state=5,this.ur.Zi((async()=>{this.state=0,this.start()}))}Ar(e){return Sa("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Er(e){return t=>{this.Oe.enqueueAndForget((()=>this.rr===e?t():(Sa("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.k=i,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(e,t){return this.ir.Qi("Write",e,t)}onMessage(e){if(Da(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Vr){this.ur.reset();const t=function(e,t){return e&&e.length>0?(Da(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Ql(e.updateTime):Ql(t);return n.isEqual(Xa.min())&&(n=Ql(t)),new ml(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=Ql(e.commitTime);return this.listener.Cr(n,t)}return Da(!e.writeResults||0===e.writeResults.length),this.Vr=!0,this.listener.Nr()}kr(){const e={};e.database=function(e){return new tc(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}(this.k),this.gr(e)}Dr(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>function(e,t){let n;if(t instanceof kl)n={update:tu(e,t.key,t.value)};else if(t instanceof Rl)n={delete:Zl(e,t.key)};else if(t instanceof Al)n={update:tu(e,t.key,t.data),updateMask:cu(t.fieldMask)};else{if(!(t instanceof $l))return $a();n={verify:Zl(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof cl)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ll)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof hl)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof fl)return{fieldPath:t.field.canonicalString(),increment:n.N};throw $a()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Xl(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:$a()}(e,t.precondition)),n}(this.k,e)))};this.gr(t)}}
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
     */class Gu extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.ir=n,this.k=r,this.$r=!1}Fr(){if(this.$r)throw new xa(Pa.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(e,t,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.ir.Bi(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Pa.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new xa(Pa.UNKNOWN,e.toString())}))}ji(e,t,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.ir.ji(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Pa.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new xa(Pa.UNKNOWN,e.toString())}))}terminate(){this.$r=!0}}class Wu{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Or=0,this.Mr=null,this.Lr=!0}Br(){0===this.Or&&(this.Ur("Unknown"),this.Mr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Mr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve()))))}Kr(e){"Online"===this.state?this.Ur("Unknown"):(this.Or++,this.Or>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Ur("Offline")))}set(e){this.jr(),this.Or=0,"Online"===e&&(this.Lr=!1),this.Ur(e)}Ur(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}qr(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(Ca(t),this.Lr=!1):Sa("OnlineStateTracker",t)}jr(){null!==this.Mr&&(this.Mr.cancel(),this.Mr=null)}}
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
     */class Ju{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=i,this.Hr.Ei((e=>{n.enqueueAndForget((async()=>{Yu(this)&&(Sa("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Oa(e);t.Gr.add(4),await Qu(t),t.Jr.set("Unknown"),t.Gr.delete(4),await Xu(t)}(this))}))})),this.Jr=new Wu(n,r)}}async function Xu(e){if(Yu(e))for(const t of e.zr)await t(!0)}async function Qu(e){for(const t of e.zr)await t(!1)}function Yu(e){return 0===Oa(e).Gr.size}async function Zu(e,t,n){if(!uu(t))throw t;e.Gr.add(1),await Qu(e),e.Jr.set("Offline"),n||(n=()=>function(e){const t=Oa(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.He.getLastRemoteSnapshotVersion(e)))}(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Sa("RemoteStore","Retrying IndexedDB access"),await n(),e.Gr.delete(1),await Xu(e)}))}function eh(e,t){return t().catch((n=>Zu(e,n,t)))}async function th(e){const t=Oa(e),n=uh(t);let r=t.Qr.length>0?t.Qr[t.Qr.length-1].batchId:-1;for(;nh(t);)try{const e=await ku(t.localStore,r);if(null===e){0===t.Qr.length&&n._r();break}r=e.batchId,rh(t,e)}catch(e){await Zu(t,e)}ih(t)&&sh(t)}function nh(e){return Yu(e)&&e.Qr.length<10}function rh(e,t){e.Qr.push(t);const n=uh(e);n.lr()&&n.Sr&&n.Dr(t.mutations)}function ih(e){return Yu(e)&&!uh(e).hr()&&e.Qr.length>0}function sh(e){uh(e).start()}async function oh(e){uh(e).kr()}async function ah(e){const t=uh(e);for(const n of e.Qr)t.Dr(n.mutations)}async function ch(e,t,n){const r=e.Qr.shift(),i=du.from(r,t,n);await eh(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await th(e)}async function lh(e,t){t&&uh(e).Sr&&await async function(e,t){if(function(e){switch(e){default:return $a();case Pa.CANCELLED:case Pa.UNKNOWN:case Pa.DEADLINE_EXCEEDED:case Pa.RESOURCE_EXHAUSTED:case Pa.INTERNAL:case Pa.UNAVAILABLE:case Pa.UNAUTHENTICATED:return!1;case Pa.INVALID_ARGUMENT:case Pa.NOT_FOUND:case Pa.ALREADY_EXISTS:case Pa.PERMISSION_DENIED:case Pa.FAILED_PRECONDITION:case Pa.ABORTED:case Pa.OUT_OF_RANGE:case Pa.UNIMPLEMENTED:case Pa.DATA_LOSS:return!0}}(n=t.code)&&n!==Pa.ABORTED){const n=e.Qr.shift();uh(e).wr(),await eh(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await th(e)}var n}(e,t),ih(e)&&sh(e)}function uh(e){return e.Zr||(e.Zr=function(e,t,n){const r=Oa(e);return r.Fr(),new Ku(t,r.ir,r.authCredentials,r.appCheckCredentials,r.k,n)}(e.datastore,e.asyncQueue,{Di:oh.bind(null,e),Ni:lh.bind(null,e),Nr:ah.bind(null,e),Cr:ch.bind(null,e)}),e.zr.push((async t=>{t?(e.Zr.wr(),await th(e)):(await e.Zr.stop(),e.Qr.length>0&&(Sa("RemoteStore",`Stopping write stream with ${e.Qr.length} pending writes`),e.Qr=[]))}))),e.Zr
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
     */}class hh{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new La,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new hh(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new xa(Pa.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dh(e,t){if(Ca("AsyncQueue",`${t}: ${e}`),uu(e))return new xa(Pa.UNAVAILABLE,`${t}: ${e}`);throw e}class fh{constructor(){this.queries=new wu((e=>Qc(e)),Xc),this.onlineState="Unknown",this.io=new Set}}class ph{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Fo={},this.Oo=new wu((e=>Qc(e)),Xc),this.Mo=new Map,this.Lo=new Set,this.Bo=new Pl(fc.comparator),this.Uo=new Map,this.qo=new Su,this.Ko={},this.jo=new Map,this.Qo=yu.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return!0===this.Wo}}async function gh(e,t,n){const r=function(e){const t=Oa(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=yh.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=vh.bind(null,t),t}(e);try{const e=await function(e,t){const n=Oa(e),r=Ja.now(),i=t.reduce(((e,t)=>e.add(t.key)),Hl());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>n.Wn.vn(e,i).next((i=>{s=i;const o=[];for(const e of t){const t=Tl(e,s.get(e.key));null!=t&&o.push(new Al(e.key,t,Ac(t.value.mapValue),yl.exists(!0)))}return n.An.addMutationBatch(e,r,o,t)})))).then((e=>(e.applyToLocalDocumentSet(s),{batchId:e.batchId,changes:s})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Ko[e.currentUser.toKey()];r||(r=new Pl(Ga)),r=r.insert(t,n),e.Ko[e.currentUser.toKey()]=r}(r,e.batchId,n),await Ih(r,e.changes),await th(r.remoteStore)}catch(e){const t=dh(e,"Failed to persist write");n.reject(t)}}function mh(e,t,n){const r=Oa(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Oo.forEach(((n,r)=>{const i=r.view.ro(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=Oa(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.ro(t)&&(r=!0)})),r&&function(e){e.io.forEach((e=>{e.next()}))}(n)}(r.eventManager,t),e.length&&r.Fo.Pr(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function yh(e,t){const n=Oa(e),r=t.batch.batchId;try{const e=await function(e,t){const n=Oa(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Qn.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=lu.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);Da(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&r.addEntry(t,n.commitVersion))}))})),o.next((()=>e.An.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.An.performConsistencyCheck(e))).next((()=>n.Wn.vn(e,r)))}))}(n.localStore,t);bh(n,r,null),wh(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ih(n,e)}catch(e){await vu(e)}}async function vh(e,t,n){const r=Oa(e);try{const e=await function(e,t){const n=Oa(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.An.lookupMutationBatch(e,t).next((t=>(Da(null!==t),r=t.keys(),n.An.removeMutationBatch(e,t)))).next((()=>n.An.performConsistencyCheck(e))).next((()=>n.Wn.vn(e,r)))}))}(r.localStore,t);bh(r,t,n),wh(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Ih(r,e)}catch(n){await vu(n)}}function wh(e,t){(e.jo.get(t)||[]).forEach((e=>{e.resolve()})),e.jo.delete(t)}function bh(e,t,n){const r=Oa(e);let i=r.Ko[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Ko[r.currentUser.toKey()]=i}}async function Ih(e,t,n){const r=Oa(e),i=[],s=[],o=[];r.Oo.isEmpty()||(r.Oo.forEach(((e,a)=>{o.push(r.Go(a,t,n).then((e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),i.push(e);const t=Iu.$n(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.Fo.Pr(i),await async function(e,t){const n=Oa(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>lu.forEach(t,(t=>lu.forEach(t.kn,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>lu.forEach(t.xn,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!uu(e))throw e;Sa("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.qn.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.qn=n.qn.insert(t,i)}}}(r.localStore,s))}async function Th(e,t){const n=Oa(e);if(!n.currentUser.isEqual(t)){Sa("SyncEngine","User change. New user:",t.toKey());const e=await _u(n.localStore,t);n.currentUser=t,function(e,t){e.jo.forEach((e=>{e.forEach((e=>{e.reject(new xa(Pa.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),e.jo.clear()}(n),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Ih(n,e.Gn)}}class Eh{constructor(){this.synchronizeTabs=!1}async initialize(e){this.k=zu(e.databaseInfo.databaseId),this.sharedClientState=this.Jo(e),this.persistence=this.Yo(e),await this.persistence.start(),this.gcScheduler=this.Xo(e),this.localStore=this.Zo(e)}Xo(e){return null}Zo(e){return function(e,t,n,r){return new Eu(e,t,n,r)}(this.persistence,new Tu,e.initialUser,this.k)}Yo(e){return new Ou(xu.ks,this.k)}Jo(e){return new Mu}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class _h{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>mh(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Th.bind(null,this.syncEngine),await async function(e,t){const n=Oa(e);t?(n.Gr.delete(2),await Xu(n)):t||(n.Gr.add(2),await Qu(n),n.Jr.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new fh}createDatastore(e){const t=zu(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Bu(r));var r;return function(e,t,n,r){return new Gu(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>mh(this.syncEngine,e,0),s=Fu.bt()?new Fu:new Uu,new Ju(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new ph(e,t,n,r,i,s);return o&&(a.Wo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Oa(e);Sa("RemoteStore","RemoteStore shutting down."),t.Gr.add(5),await Qu(t),t.Hr.shutdown(),t.Jr.set("Unknown")}(this.remoteStore)}}
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
     */class kh{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Ea.UNAUTHENTICATED,this.clientId=Ka.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Sa("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(()=>Promise.resolve()))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new xa(Pa.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new La;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=dh(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Ah(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){return e.offlineComponents||(Sa("FirestoreClient","Using default OfflineComponentProvider"),await async function(e,t){e.asyncQueue.verifyOperationInProgress(),Sa("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await _u(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}(e,new Eh)),e.offlineComponents}(e);Sa("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>async function(e,t){const n=Oa(e);n.asyncQueue.verifyOperationInProgress(),Sa("RemoteStore","RemoteStore received new credentials");const r=Yu(n);n.Gr.add(3),await Qu(n),r&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Gr.delete(3),await Xu(n)}(t.remoteStore,e))),e.onlineComponents=t}function Sh(e){return async function(e){return e.onlineComponents||(Sa("FirestoreClient","Using default OnlineComponentProvider"),await Ah(e,new _h)),e.onlineComponents}(e).then((e=>e.syncEngine))}class Ch{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Nh{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Nh&&e.projectId===this.projectId&&e.database===this.database}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Rh=new Map;
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
     */function $h(e,t,n){if(!n)throw new xa(Pa.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Dh(e){if(!fc.isDocumentKey(e))throw new xa(Pa.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Oh(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":$a()}function Ph(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new xa(Pa.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Oh(e);throw new xa(Pa.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class xh{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new xa(Pa.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new xa(Pa.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new xa(Pa.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Lh{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xh({}),this._settingsFrozen=!1,e instanceof Nh?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new xa(Pa.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Nh(e.options.projectId)}(e))}get app(){if(!this._app)throw new xa(Pa.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new xa(Pa.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xh(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Ua;switch(e.type){case"gapi":const t=e.client;return Da(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new ja(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new xa(Pa.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Rh.get(e);t&&(Sa("ComponentProvider","Removing Datastore"),Rh.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Mh{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fh(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Mh(this.firestore,e,this._key)}}class Uh{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Uh(this.firestore,e,this._query)}}class Fh extends Uh{constructor(e,t,n){super(e,t,function(e){return new Gc(e)}(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Mh(this.firestore,null,new fc(e))}withConverter(e){return new Fh(this.firestore,e,this._path)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
class Vh{constructor(){this.ma=Promise.resolve(),this.ga=[],this.ya=!1,this.pa=[],this.Ta=null,this.Ea=!1,this.Ia=!1,this.Aa=[],this.ur=new Hu(this,"async_queue_retry"),this.Ra=()=>{const e=qu();e&&Sa("AsyncQueue","Visibility state changed to "+e.visibilityState),this.ur.er()};const e=qu();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Ra)}get isShuttingDown(){return this.ya}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pa(),this.ba(e)}enterRestrictedMode(e){if(!this.ya){this.ya=!0,this.Ia=e||!1;const t=qu();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Ra)}}enqueue(e){if(this.Pa(),this.ya)return new Promise((()=>{}));const t=new La;return this.ba((()=>this.ya&&this.Ia?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.ga.push(e),this.va())))}async va(){if(0!==this.ga.length){try{await this.ga[0](),this.ga.shift(),this.ur.reset()}catch(e){if(!uu(e))throw e;Sa("AsyncQueue","Operation failed with retryable error: "+e)}this.ga.length>0&&this.ur.Zi((()=>this.va()))}}ba(e){const t=this.ma.then((()=>(this.Ea=!0,e().catch((e=>{this.Ta=e,this.Ea=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
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
     */(e);throw Ca("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Ea=!1,e))))));return this.ma=t,t}enqueueAfterDelay(e,t,n){this.Pa(),this.Aa.indexOf(e)>-1&&(t=0);const r=hh.createAndSchedule(this,e,t,n,(e=>this.Va(e)));return this.pa.push(r),r}Pa(){this.Ta&&$a()}verifyOperationInProgress(){}async Sa(){let e;do{e=this.ma,await e}while(e!==this.ma)}Da(e){for(const t of this.pa)if(t.timerId===e)return!0;return!1}Ca(e){return this.Sa().then((()=>{this.pa.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.pa)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Sa()}))}Na(e){this.Aa.push(e)}Va(e){const t=this.pa.indexOf(e);this.pa.splice(t,1)}}class jh extends Lh{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new Vh,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Bh(this),this._firestoreClient.terminate()}}function Bh(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new Ch(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new kh(e._authCredentials,e._appCheckCredentials,e._queue,r)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
     */class qh{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new xa(Pa.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rc(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class zh{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zh(sc.fromBase64String(e))}catch(e){throw new xa(Pa.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new zh(sc.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Hh{constructor(e){this._methodName=e}}
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
     */class Kh{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new xa(Pa.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new xa(Pa.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ga(this._lat,e._lat)||Ga(this._long,e._long)}}
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
     */const Gh=/^__.*__$/;class Wh{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Al(e,this.data,this.fieldMask,t,this.fieldTransforms):new kl(e,this.data,t,this.fieldTransforms)}}function Jh(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $a()}}class Xh{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.k=n,this.ignoreUndefinedProperties=r,void 0===i&&this.ka(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get xa(){return this.settings.xa}$a(e){return new Xh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Fa(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.$a({path:n,Oa:!1});return r.Ma(e),r}La(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.$a({path:n,Oa:!1});return r.ka(),r}Ba(e){return this.$a({path:void 0,Oa:!0})}Ua(e){return od(e,this.settings.methodName,this.settings.qa||!1,this.path,this.settings.Ka)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}ka(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ma(this.path.get(e))}Ma(e){if(0===e.length)throw this.Ua("Document fields must not be empty");if(Jh(this.xa)&&Gh.test(e))throw this.Ua('Document fields cannot begin and end with "__"')}}class Qh{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.k=n||zu(e)}ja(e,t,n,r=!1){return new Xh({xa:e,methodName:t,Ka:n,path:rc.emptyPath(),Oa:!1,qa:r},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function Yh(e){const t=e._freezeSettings(),n=zu(e._databaseId);return new Qh(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Zh(e,t,n,r,i,s={}){const o=e.ja(s.merge||s.mergeFields?2:0,t,n,i);rd("Data must be an object, but it was:",o,r);const a=td(r,o);let c,l;if(s.merge)c=new ic(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=id(t,r,n);if(!o.contains(i))throw new xa(Pa.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);ad(e,i)||e.push(i)}c=new ic(e),l=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,l=o.fieldTransforms;return new Wh(new kc(a),c,l)}function ed(e,t){if(nd(e=wt(e)))return rd("Unsupported field value:",t,e),td(e,t);if(e instanceof Hh)return function(e,t){if(!Jh(t.xa))throw t.Ua(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Ua(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Oa&&4!==t.xa)throw t.Ua("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=ed(i,t.Ba(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=wt(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return rl(t.k,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Ja.fromDate(e);return{timestampValue:Wl(t.k,n)}}if(e instanceof Ja){const n=new Ja(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Wl(t.k,n)}}if(e instanceof Kh)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof zh)return{bytesValue:Jl(t.k,e._byteString)};if(e instanceof Mh){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Ua(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Yl(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Ua(`Unsupported field value: ${Oh(e)}`)}(e,t)}function td(e,t){const n={};return Za(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ya(e,((e,r)=>{const i=ed(r,t.Fa(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function nd(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Ja||e instanceof Kh||e instanceof zh||e instanceof Mh||e instanceof Hh)}function rd(e,t,n){if(!nd(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Oh(n);throw"an object"===r?t.Ua(e+" a custom object"):t.Ua(e+" "+r)}}function id(e,t,n){if((t=wt(t))instanceof qh)return t._internalPath;if("string"==typeof t)return function(e,t,n){if(t.search(sd)>=0)throw od(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new qh(...t.split("."))._internalPath}catch(r){throw od(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}(e,t);throw od("Field path arguments must be of type string or FieldPath.",e,!1,void 0,n)}const sd=new RegExp("[~\\*/\\[\\]]");function od(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new xa(Pa.INVALID_ARGUMENT,a+e+c)}function ad(e,t){return e.some((e=>e.isEqual(t)))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function cd(e,t,n){e=Ph(e,Mh);const r=Ph(e.firestore,jh),i=function(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}(e.converter,t,n);return function(e,t){return function(e,t){const n=new La;return e.asyncQueue.enqueueAndForget((async()=>gh(await Sh(e),t,n))),n.promise}(function(e){return e._firestoreClient||Bh(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}(e),t)}(r,[Zh(Yh(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,yl.none())])}
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
function ld(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function ud(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}!function(e,t=!0){_a="9.6.1",Ft(new bt("firestore",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=new jh(r,new Fa(e.getProvider("auth-internal")),new qa(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),i._setSettings(n),i}),"PUBLIC")),Ht(Ta,"3.4.1",e),Ht(Ta,"3.4.1","esm2017")}();const hd=ud,dd=new lt("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),fd=new Nt("@firebase/auth");function pd(e,...t){fd.logLevel<=_t.ERROR&&fd.error(`Auth (9.6.1): ${e}`,...t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function gd(e,...t){throw yd(e,...t)}function md(e,...t){return yd(e,...t)}function yd(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return dd.create(e,...t)}function vd(e,t,...n){if(!e)throw yd(t,...n)}function wd(e){const t="INTERNAL ASSERTION FAILED: "+e;throw pd(t),new Error(t)}function bd(e,t){e||wd(t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Id=new Map;function Td(e){bd(e instanceof Function,"Expected a class definition");let t=Id.get(e);return t?(bd(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Id.set(e,t),t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
function Ed(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function _d(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function kd(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==_d()&&"https:"!==_d()&&!st()&&!("connection"in navigator)||navigator.onLine}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
class Ad{constructor(e,t){this.shortDelay=e,this.longDelay=t,bd(t>e,"Short delay should be less than long delay!"),this.isMobile=it()||ot()}get(){return kd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Sd(e,t){bd(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Cd{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void wd("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void wd("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void wd("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Nd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Rd=new Ad(3e4,6e4);
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function $d(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Dd(e,t,n,r,i={}){return Od(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=ft(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Cd.fetch()(xd(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Od(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Nd),t);try{const t=new Ld(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Md(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Md(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Md(e,"email-already-in-use",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw function(e,t,n){const r=Object.assign(Object.assign({},hd()),{[t]:n});return new lt("auth","Firebase",r).create(t,{appName:e.name})}(e,a,o);gd(e,a)}}catch(t){if(t instanceof ct)throw t;gd(e,"network-request-failed")}}async function Pd(e,t,n,r,i={}){const s=await Dd(e,t,n,r,i);return"mfaPendingCredential"in s&&gd(e,"multi-factor-auth-required",{_serverResponse:s}),s}function xd(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Sd(e.config,i):`${e.config.apiScheme}://${i}`}class Ld{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(md(this.auth,"timeout"))),Rd.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Md(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=md(e,t,r);return i.customData._tokenResponse=n,i}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
function Ud(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}function Fd(e){return 1e3*Number(e)}function Vd(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return pd("JWT malformed, contained fewer than 3 sections"),null;try{const e=function(e){try{return tt.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null}(n);return e?JSON.parse(e):(pd("Failed to decode base64 JWT payload"),null)}catch(e){return pd("Caught error parsing JWT payload as JSON",e),null}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
async function jd(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof ct&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Bd{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class qd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ud(this.lastLoginAt),this.creationTime=Ud(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
     */async function zd(e){var t;const n=e.auth,r=await e.getIdToken(),i=await jd(e,async function(e,t){return Dd(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));vd(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=ld(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const u=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new qd(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
class Hd{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){vd(e.idToken,"internal-error"),vd(void 0!==e.idToken,"internal-error"),vd(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Vd(e);return vd(t,"internal-error"),vd(void 0!==t.exp,"internal-error"),vd(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return vd(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
async function(e,t){const n=await Od(e,{},(async()=>{const n=ft({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=xd(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Cd.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new Hd;return n&&(vd("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(vd("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(vd("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hd,this.toJSON())}_performRefresh(){return wd("not implemented")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Kd(e,t){vd("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Gd{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=ld(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Bd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new qd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await jd(this,this.stsTokenManager.getToken(this.auth,e));return vd(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=wt(e),r=await n.getIdToken(t),i=Vd(r);vd(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ud(Fd(i.auth_time)),issuedAtTime:Ud(Fd(i.iat)),expirationTime:Ud(Fd(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=wt(e);await zd(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(vd(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Gd(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){vd(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await zd(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await jd(this,async function(e,t){return Dd(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:I,stsTokenManager:T}=t;vd(v&&T,e,"internal-error");const E=Hd.fromJSON(this.name,T);vd("string"==typeof v,e,"internal-error"),Kd(u,e.name),Kd(h,e.name),vd("boolean"==typeof w,e,"internal-error"),vd("boolean"==typeof b,e,"internal-error"),Kd(d,e.name),Kd(f,e.name),Kd(p,e.name),Kd(g,e.name),Kd(m,e.name),Kd(y,e.name);const _=new Gd({uid:v,auth:e,email:h,emailVerified:w,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:m,lastLoginAt:y});return I&&Array.isArray(I)&&(_.providerData=I.map((e=>Object.assign({},e)))),g&&(_._redirectEventId=g),_}static async _fromIdTokenResponse(e,t,n=!1){const r=new Hd;r.updateFromServerResponse(t);const i=new Gd({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await zd(i),i}}
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
     */class Wd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Wd.type="NONE";const Jd=Wd;
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
     */function Xd(e,t,n){return`firebase:${e}:${t}:${n}`}class Qd{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Xd(this.userKey,r.apiKey,i),this.fullPersistenceKey=Xd("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Gd._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Qd(Td(Jd),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||Td(Jd);const s=Xd(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const r=Gd._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new Qd(i,e,n)):new Qd(i,e,n)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Yd(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(nf(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Zd(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(sf(t))return"Blackberry";if(of(t))return"Webos";if(ef(t))return"Safari";if((t.includes("chrome/")||tf(t))&&!t.includes("edge/"))return"Chrome";if(rf(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Zd(e=rt()){return/firefox\//i.test(e)}function ef(e=rt()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function tf(e=rt()){return/crios\//i.test(e)}function nf(e=rt()){return/iemobile/i.test(e)}function rf(e=rt()){return/android/i.test(e)}function sf(e=rt()){return/blackberry/i.test(e)}function of(e=rt()){return/webos/i.test(e)}function af(e=rt()){return/iphone|ipad|ipod/i.test(e)}function cf(e=rt()){return af(e)||rf(e)||of(e)||sf(e)||/windows phone/i.test(e)||nf(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
function lf(e,t=[]){let n;switch(e){case"Browser":n=Yd(rt());break;case"Worker":n=`${Yd(rt())}-${e}`;break;default:n=e}return`${n}/JsCore/9.6.1/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class uf{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new df(this),this.idTokenSubscription=new df(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dd,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Td(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Qd.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);r&&r!==i||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(vd(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await zd(e)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?wt(e):null;return t&&vd(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&vd(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Td(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new lt("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Td(e)||this._popupRedirectResolver;vd(t,this,"argument-error"),this.redirectPersistenceManager=await Qd.create(this,[Td(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return vd(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return vd(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function hf(e){return wt(e)}class df{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new mt(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return vd(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ff{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return wd("not implemented")}_getIdTokenResponse(e){return wd("not implemented")}_linkToIdToken(e,t){return wd("not implemented")}_getReauthenticationResolver(e){return wd("not implemented")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
class pf extends ff{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new pf(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new pf(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
return async function(e,t){return Pd(e,"POST","/v1/accounts:signInWithPassword",$d(e,t))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Pd(e,"POST","/v1/accounts:signInWithEmailLink",$d(e,t))}(e,{email:this._email,oobCode:this._password});default:gd(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return async function(e,t){return Dd(e,"POST","/v1/accounts:update",t)}(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Pd(e,"POST","/v1/accounts:signInWithEmailLink",$d(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:gd(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function gf(e,t){return Pd(e,"POST","/v1/accounts:signInWithIdp",$d(e,t))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class mf extends ff{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new mf(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):gd("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=ld(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new mf(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return gf(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,gf(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,gf(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ft(t)}return e}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class yf{constructor(e){var t,n,r,i,s,o;const a=pt(gt(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);vd(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=pt(gt(e)).link,n=t?pt(gt(t)).deep_link_id:null,r=pt(gt(e)).deep_link_id;return(r?pt(gt(r)).link:null)||r||n||t||e}(e);try{return new yf(t)}catch(e){return null}}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class vf{constructor(){this.providerId=vf.PROVIDER_ID}static credential(e,t){return pf._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=yf.parseLink(t);return vd(n,"argument-error"),pf._fromEmailAndCode(e,n.code,n.tenantId)}}vf.PROVIDER_ID="password",vf.EMAIL_PASSWORD_SIGN_IN_METHOD="password",vf.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
class wf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
     */class bf extends wf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class If extends bf{constructor(){super("facebook.com")}static credential(e){return mf._fromParams({providerId:If.PROVIDER_ID,signInMethod:If.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return If.credentialFromTaggedObject(e)}static credentialFromError(e){return If.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return If.credential(e.oauthAccessToken)}catch(e){return null}}}If.FACEBOOK_SIGN_IN_METHOD="facebook.com",If.PROVIDER_ID="facebook.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
class Tf extends bf{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return mf._fromParams({providerId:Tf.PROVIDER_ID,signInMethod:Tf.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Tf.credentialFromTaggedObject(e)}static credentialFromError(e){return Tf.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Tf.credential(t,n)}catch(e){return null}}}Tf.GOOGLE_SIGN_IN_METHOD="google.com",Tf.PROVIDER_ID="google.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
class Ef extends bf{constructor(){super("github.com")}static credential(e){return mf._fromParams({providerId:Ef.PROVIDER_ID,signInMethod:Ef.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ef.credentialFromTaggedObject(e)}static credentialFromError(e){return Ef.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ef.credential(e.oauthAccessToken)}catch(e){return null}}}Ef.GITHUB_SIGN_IN_METHOD="github.com",Ef.PROVIDER_ID="github.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
class _f extends bf{constructor(){super("twitter.com")}static credential(e,t){return mf._fromParams({providerId:_f.PROVIDER_ID,signInMethod:_f.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return _f.credentialFromTaggedObject(e)}static credentialFromError(e){return _f.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return _f.credential(t,n)}catch(e){return null}}}_f.TWITTER_SIGN_IN_METHOD="twitter.com",_f.PROVIDER_ID="twitter.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
class kf{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Gd._fromIdTokenResponse(e,n,r),s=Af(n);return new kf({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Af(n);return new kf({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Af(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Sf extends ct{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Sf.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Sf(e,t,n,r)}}function Cf(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Sf._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
async function Nf(e,t,n=!1){const r="signIn",i=await Cf(e,r,t),s=await kf._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Rf(e,t,n){const r=hf(e),i=await
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
async function(e,t){return Pd(e,"POST","/v1/accounts:signUp",$d(e,t))}(r,{returnSecureToken:!0,email:t,password:n}),s=await kf._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function $f(e,t,n){return async function(e,t){return Nf(hf(e),t)}(wt(e),vf.credential(t,n))}const Df="__sak";
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
     */class Of{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Df,"1"),this.storage.removeItem(Df),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Pf extends Of{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=rt();return ef(e)||af(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=cf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);at()&&10===document.documentMode&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Pf.type="LOCAL";const xf=Pf;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Lf extends Of{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Lf.type="SESSION";const Mf=Lf;
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
class Uf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Uf(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
function Ff(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
     */Uf.receivers=[];class Vf{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Ff("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function jf(){return window}
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
function Bf(){return void 0!==jf().WorkerGlobalScope&&"function"==typeof jf().importScripts}
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
const qf="firebaseLocalStorageDb",zf="firebaseLocalStorage",Hf="fbase_key";class Kf{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Gf(e,t){return e.transaction([zf],t?"readwrite":"readonly").objectStore(zf)}function Wf(){const e=indexedDB.open(qf,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(zf,{keyPath:Hf})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(zf)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(qf);return new Kf(e).toPromise()}(),t(await Wf()))}))}))}async function Jf(e,t,n){const r=Gf(e,!0).put({[Hf]:t,value:n});return new Kf(r).toPromise()}function Xf(e,t){const n=Gf(e,!0).delete(t);return new Kf(n).toPromise()}class Qf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Wf()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Uf._getInstance(Bf()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Vf(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&function(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wf();return await Jf(e,Df,"1"),await Xf(e,Df),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Jf(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Gf(e,!1).get(t),r=await new Kf(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Xf(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Gf(e,!1).getAll();return new Kf(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Qf.type="LOCAL";const Yf=Qf;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Zf(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=md("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",function(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}().appendChild(r)}))}new Ad(3e4,6e4);
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
class ep extends ff{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gf(e,this._buildIdpRequest())}_linkToIdToken(e,t){return gf(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return gf(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function tp(e){return Nf(e.auth,new ep(e),e.bypassAuthState)}function np(e){const{auth:t,user:n}=e;return vd(n,t,"internal-error"),
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
async function(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await jd(e,Cf(r,i,t,e),n);vd(s.idToken,r,"internal-error");const o=Vd(s.idToken);vd(o,r,"internal-error");const{sub:a}=o;return vd(e.uid===a,r,"user-mismatch"),kf._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&gd(r,"user-mismatch"),e}}(n,new ep(e),e.bypassAuthState)}async function rp(e){const{auth:t,user:n}=e;return vd(n,t,"internal-error"),async function(e,t,n=!1){const r=await jd(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return kf._forOperation(e,"link",r)}(n,new ep(e),e.bypassAuthState)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ip{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tp;case"linkViaPopup":case"linkViaRedirect":return rp;case"reauthViaPopup":case"reauthViaRedirect":return np;default:gd(this.auth,"internal-error")}}resolve(e){bd(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bd(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const sp=new Ad(2e3,1e4);class op extends ip{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,op.currentPopupAction&&op.currentPopupAction.cancel(),op.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return vd(e,this.auth,"internal-error"),e}async onExecution(){bd(1===this.filter.length,"Popup operations only handle one event");const e=Ff();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(md(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(md(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,op.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(md(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,sp.get())};e()}}op.currentPopupAction=null;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
const ap="pendingRedirect",cp=new Map;class lp extends ip{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=cp.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return Xd(ap,e.config.apiKey,e.name)}(t),r=function(e){return Td(e._redirectPersistence)}(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}cp.set(this.auth._key(),e)}return this.bypassAuthState||cp.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function up(e,t,n=!1){const r=hf(e),i=
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
function(e,t){return t?Td(t):(vd(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(r,t),s=new lp(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class hp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fp(e);default:return!1}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!fp(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(md(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(dp(e))}saveEventToCache(e){this.cachedEventUids.add(dp(e)),this.lastProcessedEventTime=Date.now()}}function dp(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function fp({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
const pp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gp=/^https?/;async function mp(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Dd(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(yp(e))return}catch(e){}gd(e,"unauthorized-domain")}function yp(e){const t=Ed(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!gp.test(n))return!1;if(pp.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
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
     */const vp=new Ad(3e4,6e4);function wp(){const e=jf().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function bp(e){return new Promise(((t,n)=>{var r,i,s;function o(){wp(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{wp(),n(md(e,"network-request-failed"))},timeout:vp.get()})}if(null===(i=null===(r=jf().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=jf().gapi)||void 0===s?void 0:s.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return jf()[t]=()=>{gapi.load?o():n(md(e,"network-request-failed"))},Zf(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Ip=null,e}))}let Ip=null;
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
const Tp=new Ad(5e3,15e3),Ep={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_p=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kp(e){const t=e.config;vd(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Sd(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:qt},i=_p.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ft(r).slice(1)}`}async function Ap(e){const t=await function(e){return Ip=Ip||bp(e),Ip}(e),n=jf().gapi;return vd(n,e,"internal-error"),t.open({where:document.body,url:kp(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ep,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=md(e,"network-request-failed"),s=jf().setTimeout((()=>{r(i)}),Tp.get());function o(){jf().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
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
     */const Sp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Cp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Np(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Sp),{width:r.toString(),height:i.toString(),top:s,left:o}),l=rt().toLowerCase();n&&(a=tf(l)?"_blank":n),Zd(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=rt()){var t;return af(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
     */(t||"",a),new Cp(null);const h=window.open(t||"",a,u);vd(h,e,"popup-blocked");try{h.focus()}catch(e){}return new Cp(h)}const Rp="__/auth/handler",$p="emulator/auth/handler";function Dp(e,t,n,r,i,s){vd(e.config.authDomain,e,"auth-domain-config-required"),vd(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:qt,eventId:i};if(t instanceof wf){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof bf){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${Rp}`;return Sd(e,$p)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)}?${ft(a).slice(1)}`}const Op="webStorageSupport";const Pp=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Mf,this._completeRedirectFn=up}async _openPopup(e,t,n,r){var i;bd(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Np(e,Dp(e,t,n,Ed(),r),Ff())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=Dp(e,t,n,Ed(),r),jf().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(bd(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Ap(e),n=new hp(e);return t.register("authEvent",(t=>{vd(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Op,{type:Op},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),gd(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=mp(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return cf()||ef()||af()}};var xp,Lp="@firebase/auth",Mp="0.19.4";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
class Up{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){vd(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
function Fp(e=zt()){const t=Vt(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=Vt(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(ht(n.getOptions(),null!=t?t:{}))return e;gd(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Pp,persistence:[Yf,xf,Mf]})}function Vp(e){e?setTimeout((()=>{window.location.href="/"}),e):window.location.href="/"}xp="Browser",Ft(new bt("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:i}=n.options;return(e=>{vd(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),vd(!(null==i?void 0:i.includes(":")),"argument-error",{appName:e.name});const n={apiKey:r,authDomain:i,clientPlatform:xp,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lf(xp)},s=new uf(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Td);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Ft(new bt("auth-internal",(e=>(e=>new Up(e))(hf(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),Ht(Lp,Mp,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(xp)),Ht(Lp,Mp,"esm2017");const jp={email:"",numGames:0,avgWPM:0,matchHistory:[],matchHistoryTime:[],uid:""};let Bp,qp,zp;const Hp=window.sessionStorage,Kp="user";function Gp(){Bp=function(e,t={}){"object"!=typeof t&&(t={name:t});const n=Object.assign({name:Pt,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw jt.create("bad-app-name",{appName:String(r)});const i=Lt.get(r);if(i){if(ht(e,i.options)&&ht(n,i.config))return i;throw jt.create("duplicate-app",{appName:r})}const s=new Et(r);for(const e of Mt.values())s.addComponent(e);const o=new Bt(e,n,s);return Lt.set(r,o),o}({apiKey:"AIzaSyAcfFLGAnLbwIUCfyCYgayBl2oPvbu5RFQ",authDomain:"perfect-type.firebaseapp.com",projectId:"perfect-type",storageBucket:"perfect-type.appspot.com",messagingSenderId:"358376646912",appId:"1:358376646912:web:d750e4f6970556a8072be5",measurementId:"G-MDGFNKMNEC"}),ar(Bp),qp=Fp(),zp=function(e=zt()){return Vt(e,"firestore").getImmediate()}()}function Wp(){return null!=function(){const e=Hp.getItem(Kp);return null==e?null:e.length>0?JSON.parse(e):null}()}async function Jp(e,t){try{const n=await Rf(qp,e,t);Hp.setItem(Kp,JSON.stringify(n.user));let r=Object.assign({},jp);return r.uid=n.user.uid,r.email=n.user.email,await async function(e,t,n){const r=function(e,t,...n){if(e=wt(e),1===arguments.length&&(t=Ka.A()),$h("doc","path",t),e instanceof Lh){const r=tc.fromString(t,...n);return Dh(r),new Mh(e,null,new fc(r))}{if(!(e instanceof Mh||e instanceof Fh))throw new xa(Pa.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(tc.fromString(t,...n));return Dh(r),new Mh(e.firestore,e instanceof Fh?e.converter:null,new fc(r))}}(zp,e,t);return await cd(r,n),n}("users",r.uid,r),n.user}catch(e){return console.log(e),null}}async function Xp(){try{await function(e){return wt(e).signOut()}()}catch(e){}Hp.setItem(Kp,""),Vp()}function Qp(t){let n,r,i,s,o,a,c;return{c(){n=w("div"),r=w("label"),i=b(t[1]),s=I(),o=w("input"),_(r,"for",t[2]),_(o,"id",t[2]),_(o,"type",t[4]),_(o,"name",t[2]),_(o,"autocomplete",t[3]),o.value=t[0],_(n,"class","input-container")},m(e,l){m(e,n,l),g(n,r),g(r,i),g(n,s),g(n,o),a||(c=E(o,"input",t[5]),a=!0)},p(e,[t]){2&t&&k(i,e[1]),4&t&&_(r,"for",e[2]),4&t&&_(o,"id",e[2]),16&t&&_(o,"type",e[4]),4&t&&_(o,"name",e[2]),8&t&&_(o,"autocomplete",e[3]),1&t&&o.value!==e[0]&&(o.value=e[0])},i:e,o:e,d(e){e&&y(n),a=!1,c()}}}function Yp(e,t,n){let{value:r=""}=t,{text:i}=t,{id:s}=t,{autocomplete:o}=t,{type:a="text"}=t;return e.$$set=e=>{"value"in e&&n(0,r=e.value),"text"in e&&n(1,i=e.text),"id"in e&&n(2,s=e.id),"autocomplete"in e&&n(3,o=e.autocomplete),"type"in e&&n(4,a=e.type)},[r,i,s,o,a,e=>{n(0,r=e.target.value),function(e,t){let n=e.target.parentNode.querySelector("label");e.target.value.length>0?(n.style.top="-10px",n.style.fontSize="1em"):(n.style.top="10px",n.style.fontSize="1.5em")}(e)}]}class Zp extends Y{constructor(e){super(),Q(this,e,Yp,Qp,s,{value:0,text:1,id:2,autocomplete:3,type:4})}}function eg(e){let t,n,r,i,s,o,a,c,l,u,h,d,f,p,v,b,T,k,A,S;function C(t){e[6](t)}let R={text:"email",id:"email",type:"email",autocomplete:"email"};function $(t){e[7](t)}void 0!==e[1]&&(R.value=e[1]),a=new Zp({props:R}),N.push((()=>K(a,"value",C)));let D={text:"password",id:"password",type:"password",autocomplete:"current-password"};return void 0!==e[2]&&(D.value=e[2]),u=new Zp({props:D}),N.push((()=>K(u,"value",$))),T=new xe({props:{text:"login"}}),{c(){t=w("form"),n=w("br"),r=I(),i=w("br"),s=I(),o=w("div"),G(a.$$.fragment),l=I(),G(u.$$.fragment),d=I(),f=w("br"),p=I(),v=w("br"),b=I(),G(T.$$.fragment),_(o,"id","form-container")},m(c,h){m(c,t,h),g(t,n),g(t,r),g(t,i),g(t,s),g(t,o),W(a,o,null),g(o,l),W(u,o,null),g(t,d),g(t,f),g(t,p),g(t,v),g(t,b),W(T,t,null),k=!0,A||(S=E(t,"submit",e[3]),A=!0)},p(e,t){const n={};!c&&2&t&&(c=!0,n.value=e[1],x((()=>c=!1))),a.$set(n);const r={};!h&&4&t&&(h=!0,r.value=e[2],x((()=>h=!1))),u.$set(r)},i(e){k||(z(a.$$.fragment,e),z(u.$$.fragment,e),z(T.$$.fragment,e),k=!0)},o(e){H(a.$$.fragment,e),H(u.$$.fragment,e),H(T.$$.fragment,e),k=!1},d(e){e&&y(t),J(a),J(u),J(T),A=!1,S()}}}function tg(t){let n;return{c(){n=w("p"),n.textContent="logged in! redirecting to main..."},m(e,t){m(e,n,t)},p:e,i:e,o:e,d(e){e&&y(n)}}}function ng(e){let t,n,r,i,s,o;const a=[tg,eg],c=[];function l(e,t){return e[0]?0:1}return i=l(e),s=c[i]=a[i](e),{c(){t=w("main"),n=w("h1"),n.textContent="login",r=I(),s.c()},m(e,s){m(e,t,s),g(t,n),g(t,r),c[i].m(t,null),o=!0},p(e,[n]){let r=i;i=l(e),i===r?c[i].p(e,n):(B(),H(c[r],1,1,(()=>{c[r]=null})),q(),s=c[i],s?s.p(e,n):(s=c[i]=a[i](e),s.c()),z(s,1),s.m(t,null))},i(e){o||(z(s),o=!0)},o(e){H(s),o=!1},d(e){e&&y(t),c[i].d()}}}function rg(e,t,n){let r,i,{currentRoute:s}=t,{params:o}=t,a=!1;return e.$$set=e=>{"currentRoute"in e&&n(4,s=e.currentRoute),"params"in e&&n(5,o=e.params)},[a,r,i,function(e){e&&e.preventDefault(),async function(e,t){try{const n=await $f(qp,e,t);return Hp.setItem(Kp,JSON.stringify(n.user)),n.user}catch(e){return null}}(r,i).then((e=>{null!=e&&(n(0,a=!0),Vp(1e3))}))},s,o,function(e){r=e,n(1,r)},function(e){i=e,n(2,i)}]}function ig(e){let t,n,r,i,s,o,a,c,l,u,h,d,f,p,v,b,T,k,A,S,C,R,$;function D(t){e[7](t)}let O={text:"email",id:"email",type:"email",autocomplete:"email"};function P(t){e[8](t)}void 0!==e[1]&&(O.value=e[1]),n=new Zp({props:O}),N.push((()=>K(n,"value",D)));let L={text:"password",id:"password",type:"password",autocomplete:"new-password"};function M(t){e[9](t)}void 0!==e[2]&&(L.value=e[2]),u=new Zp({props:L}),N.push((()=>K(u,"value",P)));let U={text:"confirm password",id:"con-password",type:"password",autocomplete:"new-password"};return void 0!==e[3]&&(U.value=e[3]),f=new Zp({props:U}),N.push((()=>K(f,"value",M))),S=new xe({props:{text:"signup"}}),{c(){t=w("form"),G(n.$$.fragment),i=I(),s=w("br"),o=I(),a=w("br"),c=I(),l=w("div"),G(u.$$.fragment),d=I(),G(f.$$.fragment),v=I(),b=w("br"),T=I(),k=w("br"),A=I(),G(S.$$.fragment),_(l,"id","form-container")},m(r,h){m(r,t,h),W(n,t,null),g(t,i),g(t,s),g(t,o),g(t,a),g(t,c),g(t,l),W(u,l,null),g(l,d),W(f,l,null),g(t,v),g(t,b),g(t,T),g(t,k),g(t,A),W(S,t,null),C=!0,R||($=E(t,"submit",e[4]),R=!0)},p(e,t){const i={};!r&&2&t&&(r=!0,i.value=e[1],x((()=>r=!1))),n.$set(i);const s={};!h&&4&t&&(h=!0,s.value=e[2],x((()=>h=!1))),u.$set(s);const o={};!p&&8&t&&(p=!0,o.value=e[3],x((()=>p=!1))),f.$set(o)},i(e){C||(z(n.$$.fragment,e),z(u.$$.fragment,e),z(f.$$.fragment,e),z(S.$$.fragment,e),C=!0)},o(e){H(n.$$.fragment,e),H(u.$$.fragment,e),H(f.$$.fragment,e),H(S.$$.fragment,e),C=!1},d(e){e&&y(t),J(n),J(u),J(f),J(S),R=!1,$()}}}function sg(t){let n;return{c(){n=w("p"),n.textContent="signed up and logged in! redirecting to main..."},m(e,t){m(e,n,t)},p:e,i:e,o:e,d(e){e&&y(n)}}}function og(e){let t,n,r,i,s,o;const a=[sg,ig],c=[];function l(e,t){return e[0]?0:1}return i=l(e),s=c[i]=a[i](e),{c(){t=w("main"),n=w("h1"),n.textContent="sign up",r=I(),s.c()},m(e,s){m(e,t,s),g(t,n),g(t,r),c[i].m(t,null),o=!0},p(e,[n]){let r=i;i=l(e),i===r?c[i].p(e,n):(B(),H(c[r],1,1,(()=>{c[r]=null})),q(),s=c[i],s?s.p(e,n):(s=c[i]=a[i](e),s.c()),z(s,1),s.m(t,null))},i(e){o||(z(s),o=!0)},o(e){H(s),o=!1},d(e){e&&y(t),c[i].d()}}}function ag(e,t,n){let r,i,s,{currentRoute:o}=t,{params:a}=t,c=!1;return e.$$set=e=>{"currentRoute"in e&&n(5,o=e.currentRoute),"params"in e&&n(6,a=e.params)},[c,r,i,s,function(e){e&&e.preventDefault(),function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(r)?s===i?i.length<8?alert("Passwords too short!"):Jp(r,i).then((e=>{null!=e&&(n(0,c=!0),Vp(1e3))})):alert("Passwords do not match!"):alert("Invalid email!")},o,a,function(e){r=e,n(1,r)},function(e){i=e,n(2,i)},function(e){s=e,n(3,s)}]}function cg(e){let t,n,r,i,s;const o=e[1].default,a=l(o,e,e[0],null),c=a||function(e){let t;return{c(){t=b("default card")},m(e,n){m(e,t,n)},d(e){e&&y(t)}}}();return{c(){t=w("main"),n=w("div"),r=w("div"),i=w("p"),c&&c.c(),_(r,"class","container svelte-1yx7glz"),_(n,"class","card svelte-1yx7glz")},m(e,o){m(e,t,o),g(t,n),g(n,r),g(r,i),c&&c.m(i,null),s=!0},p(e,[t]){a&&a.p&&(!s||1&t)&&d(a,o,e,e[0],s?h(o,e[0],t,null):f(e[0]),null)},i(e){s||(z(c,e),s=!0)},o(e){H(c,e),s=!1},d(e){e&&y(t),c&&c.d(e)}}}function lg(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}class ug extends Y{constructor(e){super(),Q(this,e,lg,cg,s,{})}}function hg(e){let t,n,r;const i=e[1].default,s=l(i,e,e[0],null),o=s||function(e){let t;return{c(){t=b("place analytics cards here")},m(e,n){m(e,t,n)},d(e){e&&y(t)}}}();return{c(){t=w("main"),n=w("div"),o&&o.c(),_(n,"class","analytics-card-collection svelte-dnt7jz")},m(e,i){m(e,t,i),g(t,n),o&&o.m(n,null),r=!0},p(e,[t]){s&&s.p&&(!r||1&t)&&d(s,i,e,e[0],r?h(i,e[0],t,null):f(e[0]),null)},i(e){r||(z(o,e),r=!0)},o(e){H(o,e),r=!1},d(e){e&&y(t),o&&o.d(e)}}}function dg(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}class fg extends Y{constructor(e){super(),Q(this,e,dg,hg,s,{})}}function pg(t){let n,r,i,s,o,a,c,l,u,h,d,f,p,v,T,E=`overall: ${t[1]}${t[5]}`,A=`${t[2]}${t[5]}`,S=`${t[3]}${t[5]}`,C=`${t[4]}${t[5]}`;return{c(){n=w("p"),r=b(E),i=I(),s=w("table"),o=w("tr"),o.innerHTML='<td class="heading svelte-zlvnl5">easy</td> \n        <td class="heading svelte-zlvnl5">medium</td> \n        <td class="heading svelte-zlvnl5">hard</td>',a=I(),c=w("tr"),l=w("td"),u=b(A),h=I(),d=w("td"),f=b(S),p=I(),v=w("td"),T=b(C),_(l,"class","svelte-zlvnl5"),_(d,"class","svelte-zlvnl5"),_(v,"class","svelte-zlvnl5"),_(s,"class","center-table svelte-zlvnl5")},m(e,t){m(e,n,t),g(n,r),m(e,i,t),m(e,s,t),g(s,o),g(s,a),g(s,c),g(c,l),g(l,u),g(c,h),g(c,d),g(d,f),g(c,p),g(c,v),g(v,T)},p(e,t){34&t&&E!==(E=`overall: ${e[1]}${e[5]}`)&&k(r,E),36&t&&A!==(A=`${e[2]}${e[5]}`)&&k(u,A),40&t&&S!==(S=`${e[3]}${e[5]}`)&&k(f,S),48&t&&C!==(C=`${e[4]}${e[5]}`)&&k(T,C)},i:e,o:e,d(e){e&&y(n),e&&y(i),e&&y(s)}}}function gg(e){let t;const n=e[7].default,r=l(n,e,e[6],null);return{c(){r&&r.c()},m(e,n){r&&r.m(e,n),t=!0},p(e,i){r&&r.p&&(!t||64&i)&&d(r,n,e,e[6],t?h(n,e[6],i,null):f(e[6]),null)},i(e){t||(z(r,e),t=!0)},o(e){H(r,e),t=!1},d(e){r&&r.d(e)}}}function mg(e){let t,n,r,i,s,o,a;const c=[gg,pg],l=[];function u(e,t){return null==e[1]?0:1}return s=u(e),o=l[s]=c[s](e),{c(){t=w("main"),n=w("h2"),r=b(e[0]),i=I(),o.c()},m(e,o){m(e,t,o),g(t,n),g(n,r),g(t,i),l[s].m(t,null),a=!0},p(e,[n]){(!a||1&n)&&k(r,e[0]);let i=s;s=u(e),s===i?l[s].p(e,n):(B(),H(l[i],1,1,(()=>{l[i]=null})),q(),o=l[s],o?o.p(e,n):(o=l[s]=c[s](e),o.c()),z(o,1),o.m(t,null))},i(e){a||(z(o),a=!0)},o(e){H(o),a=!1},d(e){e&&y(t),l[s].d()}}}function yg(e,t,n){let{$$slots:r={},$$scope:i}=t,{title:s}=t,{overall:o}=t,{easy:a}=t,{medium:c}=t,{hard:l}=t,{units:u}=t;return e.$$set=e=>{"title"in e&&n(0,s=e.title),"overall"in e&&n(1,o=e.overall),"easy"in e&&n(2,a=e.easy),"medium"in e&&n(3,c=e.medium),"hard"in e&&n(4,l=e.hard),"units"in e&&n(5,u=e.units),"$$scope"in e&&n(6,i=e.$$scope)},[s,o,a,c,l,u,i,r]}class vg extends Y{constructor(e){super(),Q(this,e,yg,mg,s,{title:0,overall:1,easy:2,medium:3,hard:4,units:5})}}function wg(t){let n,r;return{c(){var e,t;n=w("img"),e=n.src,t=r=Hg,o||(o=document.createElement("a")),o.href=t,e!==o.href&&_(n,"src",r),_(n,"alt","Avatar"),_(n,"class","svelte-g5gjth")},m(e,t){m(e,n,t)},p:e,d(e){e&&y(n)}}}function bg(e){let t,n;return t=new vg({props:{title:Dg,$$slots:{default:[wg]},$$scope:{ctx:e}}}),{c(){G(t.$$.fragment)},m(e,r){W(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){n||(z(t.$$.fragment,e),n=!0)},o(e){H(t.$$.fragment,e),n=!1},d(e){J(t,e)}}}function Ig(t){let n,r;return n=new vg({props:{title:"total games",overall:Cg,easy:Ng,medium:Rg,hard:$g,units:""}}),{c(){G(n.$$.fragment)},m(e,t){W(n,e,t),r=!0},p:e,i(e){r||(z(n.$$.fragment,e),r=!0)},o(e){H(n.$$.fragment,e),r=!1},d(e){J(n,e)}}}function Tg(e){let t,n,r,i;return t=new ug({props:{$$slots:{default:[bg]},$$scope:{ctx:e}}}),r=new ug({props:{$$slots:{default:[Ig]},$$scope:{ctx:e}}}),{c(){G(t.$$.fragment),n=I(),G(r.$$.fragment)},m(e,s){W(t,e,s),m(e,n,s),W(r,e,s),i=!0},p(e,n){const i={};1&n&&(i.$$scope={dirty:n,ctx:e}),t.$set(i);const s={};1&n&&(s.$$scope={dirty:n,ctx:e}),r.$set(s)},i(e){i||(z(t.$$.fragment,e),z(r.$$.fragment,e),i=!0)},o(e){H(t.$$.fragment,e),H(r.$$.fragment,e),i=!1},d(e){J(t,e),e&&y(n),J(r,e)}}}function Eg(t){let n,r;return n=new vg({props:{title:"avg words per minute ",overall:Og,easy:Pg,medium:xg,hard:Lg,units:""}}),{c(){G(n.$$.fragment)},m(e,t){W(n,e,t),r=!0},p:e,i(e){r||(z(n.$$.fragment,e),r=!0)},o(e){H(n.$$.fragment,e),r=!1},d(e){J(n,e)}}}function _g(t){let n,r;return n=new vg({props:{title:"avg letters per minute",overall:Mg,easy:Ug,medium:Fg,hard:Vg,units:""}}),{c(){G(n.$$.fragment)},m(e,t){W(n,e,t),r=!0},p:e,i(e){r||(z(n.$$.fragment,e),r=!0)},o(e){H(n.$$.fragment,e),r=!1},d(e){J(n,e)}}}function kg(t){let n,r;return n=new vg({props:{title:"pass rate",overall:jg,easy:Bg,medium:qg,hard:zg,units:"%"}}),{c(){G(n.$$.fragment)},m(e,t){W(n,e,t),r=!0},p:e,i(e){r||(z(n.$$.fragment,e),r=!0)},o(e){H(n.$$.fragment,e),r=!1},d(e){J(n,e)}}}function Ag(e){let t,n,r,i,s,o;return t=new ug({props:{$$slots:{default:[Eg]},$$scope:{ctx:e}}}),r=new ug({props:{$$slots:{default:[_g]},$$scope:{ctx:e}}}),s=new ug({props:{$$slots:{default:[kg]},$$scope:{ctx:e}}}),{c(){G(t.$$.fragment),n=I(),G(r.$$.fragment),i=I(),G(s.$$.fragment)},m(e,a){W(t,e,a),m(e,n,a),W(r,e,a),m(e,i,a),W(s,e,a),o=!0},p(e,n){const i={};1&n&&(i.$$scope={dirty:n,ctx:e}),t.$set(i);const o={};1&n&&(o.$$scope={dirty:n,ctx:e}),r.$set(o);const a={};1&n&&(a.$$scope={dirty:n,ctx:e}),s.$set(a)},i(e){o||(z(t.$$.fragment,e),z(r.$$.fragment,e),z(s.$$.fragment,e),o=!0)},o(e){H(t.$$.fragment,e),H(r.$$.fragment,e),H(s.$$.fragment,e),o=!1},d(e){J(t,e),e&&y(n),J(r,e),e&&y(i),J(s,e)}}}function Sg(e){let t,n,r,i,s,o,a;return i=new fg({props:{$$slots:{default:[Tg]},$$scope:{ctx:e}}}),o=new fg({props:{$$slots:{default:[Ag]},$$scope:{ctx:e}}}),{c(){t=w("main"),n=w("h1"),n.textContent="profile",r=I(),G(i.$$.fragment),s=I(),G(o.$$.fragment)},m(e,c){m(e,t,c),g(t,n),g(t,r),W(i,t,null),g(t,s),W(o,t,null),a=!0},p(e,[t]){const n={};1&t&&(n.$$scope={dirty:t,ctx:e}),i.$set(n);const r={};1&t&&(r.$$scope={dirty:t,ctx:e}),o.$set(r)},i(e){a||(z(i.$$.fragment,e),z(o.$$.fragment,e),a=!0)},o(e){H(i.$$.fragment,e),H(o.$$.fragment,e),a=!1},d(e){e&&y(t),J(i),J(o)}}}let Cg=10,Ng=3,Rg=4,$g=5,Dg="davidlurocks69",Og=69,Pg=60,xg=50,Lg=40,Mg=69,Ug=60,Fg=50,Vg=40,jg=30,Bg=50,qg=40,zg=30,Hg="../../fart.png";function Kg(e){let t,n,r,i,s,o,a,c;const u=e[2].default,p=l(u,e,e[1],null),v=p||function(e){let t;return{c(){t=b("default card")},m(e,n){m(e,t,n)},d(e){e&&y(t)}}}();return{c(){t=w("main"),n=w("div"),r=w("h1"),i=b(e[0]),s=I(),o=w("div"),a=w("p"),v&&v.c(),_(o,"class","container svelte-dhtldt"),_(n,"class","card svelte-dhtldt")},m(e,l){m(e,t,l),g(t,n),g(n,r),g(r,i),g(n,s),g(n,o),g(o,a),v&&v.m(a,null),c=!0},p(e,[t]){(!c||1&t)&&k(i,e[0]),p&&p.p&&(!c||2&t)&&d(p,u,e,e[1],c?h(u,e[1],t,null):f(e[1]),null)},i(e){c||(z(v,e),c=!0)},o(e){H(v,e),c=!1},d(e){e&&y(t),v&&v.d(e)}}}function Gg(e,t,n){let{$$slots:r={},$$scope:i}=t,{title:s}=t;return e.$$set=e=>{"title"in e&&n(0,s=e.title),"$$scope"in e&&n(1,i=e.$$scope)},[s,i,r]}class Wg extends Y{constructor(e){super(),Q(this,e,Gg,Kg,s,{title:0})}}function Jg(e){let t,n,r;const i=e[1].default,s=l(i,e,e[0],null),o=s||function(e){let t;return{c(){t=b("place analytics cards here")},m(e,n){m(e,t,n)},d(e){e&&y(t)}}}();return{c(){t=w("main"),n=w("div"),o&&o.c(),_(n,"class","analytics-card-collection svelte-dnt7jz")},m(e,i){m(e,t,i),g(t,n),o&&o.m(n,null),r=!0},p(e,[t]){s&&s.p&&(!r||1&t)&&d(s,i,e,e[0],r?h(i,e[0],t,null):f(e[0]),null)},i(e){r||(z(o,e),r=!0)},o(e){H(o,e),r=!1},d(e){e&&y(t),o&&o.d(e)}}}function Xg(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}class Qg extends Y{constructor(e){super(),Q(this,e,Xg,Jg,s,{})}}function Yg(t){let n,r,i,s,o,a,c,l,u,h,d,f,p,v=`${t[2]}:`;return{c(){n=w("div"),r=w("p"),i=w("strong"),s=b(v),o=I(),a=w("div"),c=b(t[3]),l=I(),u=w("div"),h=b(t[0]),d=I(),f=w("div"),p=b(t[1]),_(a,"class","leaderboard-section svelte-p3zygb"),_(u,"class","leaderboard-section svelte-p3zygb"),_(f,"class","leaderboard-section svelte-p3zygb"),_(n,"class","leaderboard-env svelte-p3zygb")},m(e,t){m(e,n,t),g(n,r),g(r,i),g(i,s),g(n,o),g(n,a),g(a,c),g(n,l),g(n,u),g(u,h),g(n,d),g(n,f),g(f,p)},p(e,[t]){4&t&&v!==(v=`${e[2]}:`)&&k(s,v),8&t&&k(c,e[3]),1&t&&k(h,e[0]),2&t&&k(p,e[1])},i:e,o:e,d(e){e&&y(n)}}}function Zg(e,t,n){let{user:r}=t,{score:i}=t,{place:s}=t,{date:o}=t;return e.$$set=e=>{"user"in e&&n(0,r=e.user),"score"in e&&n(1,i=e.score),"place"in e&&n(2,s=e.place),"date"in e&&n(3,o=e.date)},[r,i,s,o]}class em extends Y{constructor(e){super(),Q(this,e,Zg,Yg,s,{user:0,score:1,place:2,date:3})}}function tm(e,t,n){const r=e.slice();return r[3]=t[n],r[5]=n,r}function nm(e,t,n){const r=e.slice();return r[3]=t[n],r[5]=n,r}function rm(e,t,n){const r=e.slice();return r[3]=t[n],r[5]=n,r}function im(t){let n,r;return n=new em({props:{user:t[3].user,score:t[3].score,date:t[3].date,place:t[5]+1}}),{c(){G(n.$$.fragment)},m(e,t){W(n,e,t),r=!0},p:e,i(e){r||(z(n.$$.fragment,e),r=!0)},o(e){H(n.$$.fragment,e),r=!1},d(e){J(n,e)}}}function sm(e){let t,n,r=e[0],i=[];for(let t=0;t<r.length;t+=1)i[t]=im(rm(e,r,t));const s=e=>H(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=T()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);m(e,t,r),n=!0},p(e,n){if(1&n){let o;for(r=e[0],o=0;o<r.length;o+=1){const s=rm(e,r,o);i[o]?(i[o].p(s,n),z(i[o],1)):(i[o]=im(s),i[o].c(),z(i[o],1),i[o].m(t.parentNode,t))}for(B(),o=r.length;o<i.length;o+=1)s(o);q()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)z(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)H(i[e]);n=!1},d(e){v(i,e),e&&y(t)}}}function om(t){let n,r;return n=new em({props:{user:t[3].user,score:t[3].score,date:t[3].date,place:t[5]+1}}),{c(){G(n.$$.fragment)},m(e,t){W(n,e,t),r=!0},p:e,i(e){r||(z(n.$$.fragment,e),r=!0)},o(e){H(n.$$.fragment,e),r=!1},d(e){J(n,e)}}}function am(e){let t,n,r=e[1],i=[];for(let t=0;t<r.length;t+=1)i[t]=om(nm(e,r,t));const s=e=>H(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=T()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);m(e,t,r),n=!0},p(e,n){if(2&n){let o;for(r=e[1],o=0;o<r.length;o+=1){const s=nm(e,r,o);i[o]?(i[o].p(s,n),z(i[o],1)):(i[o]=om(s),i[o].c(),z(i[o],1),i[o].m(t.parentNode,t))}for(B(),o=r.length;o<i.length;o+=1)s(o);q()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)z(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)H(i[e]);n=!1},d(e){v(i,e),e&&y(t)}}}function cm(t){let n,r;return n=new em({props:{user:t[3].user,score:t[3].score,date:t[3].date,place:t[5]+1}}),{c(){G(n.$$.fragment)},m(e,t){W(n,e,t),r=!0},p:e,i(e){r||(z(n.$$.fragment,e),r=!0)},o(e){H(n.$$.fragment,e),r=!1},d(e){J(n,e)}}}function lm(e){let t,n,r=e[2],i=[];for(let t=0;t<r.length;t+=1)i[t]=cm(tm(e,r,t));const s=e=>H(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=T()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);m(e,t,r),n=!0},p(e,n){if(4&n){let o;for(r=e[2],o=0;o<r.length;o+=1){const s=tm(e,r,o);i[o]?(i[o].p(s,n),z(i[o],1)):(i[o]=cm(s),i[o].c(),z(i[o],1),i[o].m(t.parentNode,t))}for(B(),o=r.length;o<i.length;o+=1)s(o);q()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)z(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)H(i[e]);n=!1},d(e){v(i,e),e&&y(t)}}}function um(e){let t,n,r,i,s,o;return t=new Wg({props:{title:"easy (wpm)",$$slots:{default:[sm]},$$scope:{ctx:e}}}),r=new Wg({props:{title:"medium (wpm)",$$slots:{default:[am]},$$scope:{ctx:e}}}),s=new Wg({props:{title:"hard (wpm)",$$slots:{default:[lm]},$$scope:{ctx:e}}}),{c(){G(t.$$.fragment),n=I(),G(r.$$.fragment),i=I(),G(s.$$.fragment)},m(e,a){W(t,e,a),m(e,n,a),W(r,e,a),m(e,i,a),W(s,e,a),o=!0},p(e,n){const i={};256&n&&(i.$$scope={dirty:n,ctx:e}),t.$set(i);const o={};256&n&&(o.$$scope={dirty:n,ctx:e}),r.$set(o);const a={};256&n&&(a.$$scope={dirty:n,ctx:e}),s.$set(a)},i(e){o||(z(t.$$.fragment,e),z(r.$$.fragment,e),z(s.$$.fragment,e),o=!0)},o(e){H(t.$$.fragment,e),H(r.$$.fragment,e),H(s.$$.fragment,e),o=!1},d(e){J(t,e),e&&y(n),J(r,e),e&&y(i),J(s,e)}}}function hm(e){let t,n,r,i,s;return i=new Qg({props:{$$slots:{default:[um]},$$scope:{ctx:e}}}),{c(){t=w("main"),n=w("h1"),n.textContent="leaderboard",r=I(),G(i.$$.fragment)},m(e,o){m(e,t,o),g(t,n),g(t,r),W(i,t,null),s=!0},p(e,[t]){const n={};256&t&&(n.$$scope={dirty:t,ctx:e}),i.$set(n)},i(e){s||(z(i.$$.fragment,e),s=!0)},o(e){H(i.$$.fragment,e),s=!1},d(e){e&&y(t),J(i)}}}function dm(e){return[[{user:"abhayrocks",score:122,date:"12/04/22"},{user:"davidawesome",score:121,date:"12/04/22"},{user:"maximus69",score:109,date:"12/04/22"},{user:"fartman3",score:108,date:"12/04/22"},{user:"gamer65",score:55,date:"12/04/22"}],[{user:"abhayrocks",score:111,date:"12/04/22"},{user:"davidawesome",score:110,date:"12/04/22"},{user:"horseradish2",score:90,date:"12/04/22"},{user:"abhay",score:87,date:"12/04/22"},{user:"poofar2",score:33,date:"12/04/22"}],[{user:"abhayrocks",score:99,date:"12/04/22"},{user:"davidawesome",score:98,date:"12/04/22"},{user:"pencilandpaper1",score:88,date:"12/04/22"},{user:"abhay",score:87,date:"12/04/22"},{user:"throw1",score:22,date:"12/04/22"}]]}function fm(t){let n,r,i,s,o;return s=new xe({props:{text:"return home",onClickFn:"redirectHome"}}),{c(){n=w("main"),r=w("h2"),r.textContent="oops, looks like that page doesn't exist",i=I(),G(s.$$.fragment)},m(e,t){m(e,n,t),g(n,r),g(n,i),W(s,n,null),o=!0},p:e,i(e){o||(z(s.$$.fragment,e),o=!0)},o(e){H(s.$$.fragment,e),o=!1},d(e){e&&y(n),J(s)}}}function pm(t){let n;return{c(){n=w("main"),n.innerHTML="<h1>Logging you out</h1>"},m(e,t){m(e,n,t)},p:e,i:e,o:e,d(e){e&&y(n)}}}function gm(e){return Xp(),[]}function mm(){return!Wp()}const ym=[{name:"/",component:class extends Y{constructor(e){super(),Q(this,e,et,Ze,s,{currentRoute:9,params:10})}}},{name:"login",component:class extends Y{constructor(e){super(),Q(this,e,rg,ng,s,{currentRoute:4,params:5})}},onlyIf:{guard:mm,redirect:"/"}},{name:"signup",component:class extends Y{constructor(e){super(),Q(this,e,ag,og,s,{currentRoute:5,params:6})}},onlyIf:{guard:mm,redirect:"/"}},{name:"profile",component:class extends Y{constructor(e){super(),Q(this,e,null,Sg,s,{})}},onlyIf:{guard:Wp,redirect:"/"}},{name:"leaderboard",component:class extends Y{constructor(e){super(),Q(this,e,dm,hm,s,{})}},onlyIf:{guard:mm,redirect:"/"}},{name:"logout",component:class extends Y{constructor(e){super(),Q(this,e,gm,pm,s,{})}},onlyIf:{guard:Wp,redirect:"/"}},{name:"404",component:class extends Y{constructor(e){super(),Q(this,e,null,fm,s,{})}}}];function vm(e){let t,n,r;return{c(){t=w("a"),t.textContent="signup",n=I(),r=w("a"),r.textContent="login",_(t,"href","/signup"),_(t,"class","svelte-12w73gw"),_(r,"href","/login"),_(r,"class","svelte-12w73gw")},m(e,i){m(e,t,i),m(e,n,i),m(e,r,i)},d(e){e&&y(t),e&&y(n),e&&y(r)}}}function wm(e){let t,n,r;return{c(){t=w("a"),t.textContent="profile",n=I(),r=w("a"),r.textContent="logout",_(t,"href","/profile"),_(t,"class","svelte-12w73gw"),_(r,"href","/logout"),_(r,"class","svelte-12w73gw")},m(e,i){m(e,t,i),m(e,n,i),m(e,r,i)},d(e){e&&y(t),e&&y(n),e&&y(r)}}}function bm(t){let n,r,i,s,o,a;let c=function(e,t){return e[0]?wm:vm}(t),l=c(t);return{c(){n=w("main"),r=w("div"),l.c(),i=I(),s=w("a"),s.textContent="leaderboard",o=I(),a=w("a"),a.textContent="play",_(s,"href","/leaderboard"),_(s,"class","svelte-12w73gw"),_(a,"href","/"),_(a,"class","svelte-12w73gw"),_(r,"class","header svelte-12w73gw")},m(e,t){m(e,n,t),g(n,r),l.m(r,null),g(r,i),g(r,s),g(r,o),g(r,a)},p:e,i:e,o:e,d(e){e&&y(n),l.d()}}}function Im(e){return[Wp()]}class Tm extends Y{constructor(e){super(),Q(this,e,Im,bm,s,{})}}function Em(t){let n,r,i,s,o,a;return i=new Tm({}),o=new Re({props:{routes:ym}}),{c(){n=w("meta"),r=I(),G(i.$$.fragment),s=I(),G(o.$$.fragment),document.title="Perfect Type",_(n,"charset","utf-8")},m(e,t){g(document.head,n),m(e,r,t),W(i,e,t),m(e,s,t),W(o,e,t),a=!0},p:e,i(e){a||(z(i.$$.fragment,e),z(o.$$.fragment,e),a=!0)},o(e){H(i.$$.fragment,e),H(o.$$.fragment,e),a=!1},d(e){y(n),e&&y(r),J(i,e),e&&y(s),J(o,e)}}}function _m(e){return Gp(),[]}return new class extends Y{constructor(e){super(),Q(this,e,_m,Em,s,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
