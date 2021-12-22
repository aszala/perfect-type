var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(t)}function i(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let o,a;function c(t,n,r){t.$$.on_destroy.push(function(t,...n){if(null==t)return e;const r=t.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function l(e,t,n,r){if(e){const i=u(e,t,n,r);return e[0](i)}}function u(e,t,n,r){return e[1]&&r?function(e,t){for(const n in t)e[n]=t[n];return e}(n.ctx.slice(),e[1](r(t))):n.ctx}function h(e,t,n,r){if(e[2]&&r){const i=e[2](r(n));if(void 0===t.dirty)return i;if("object"==typeof i){const e=[],n=Math.max(t.dirty.length,i.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|i[r];return e}return t.dirty|i}return t.dirty}function d(e,t,n,r,i,s){if(i){const o=u(t,n,r,s);e.p(o,i)}}function f(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}function p(e){return null==e?"":e}function m(e,t){e.appendChild(t)}function g(e,t,n){e.insertBefore(t,n||null)}function y(e){e.parentNode.removeChild(e)}function v(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function w(e){return document.createElement(e)}function b(e){return document.createTextNode(e)}function I(){return b(" ")}function T(){return b("")}function E(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function _(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function k(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function S(e){a=e}function A(e){(function(){if(!a)throw new Error("Function called outside component initialization");return a})().$$.on_mount.push(e)}const C=[],N=[],R=[],D=[],$=Promise.resolve();let O=!1;function P(e){R.push(e)}function x(e){D.push(e)}let L=!1;const M=new Set;function U(){if(!L){L=!0;do{for(let e=0;e<C.length;e+=1){const t=C[e];S(t),F(t.$$)}for(S(null),C.length=0;N.length;)N.pop()();for(let e=0;e<R.length;e+=1){const t=R[e];M.has(t)||(M.add(t),t())}R.length=0}while(C.length);for(;D.length;)D.pop()();O=!1,L=!1,M.clear()}}function F(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(P)}}const V=new Set;let j;function q(){j={r:0,c:[],p:j}}function B(){j.r||r(j.c),j=j.p}function z(e,t){e&&e.i&&(V.delete(e),e.i(t))}function K(e,t,n,r){if(e&&e.o){if(V.has(e))return;V.add(e),j.c.push((()=>{V.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function H(e,t,n){const r=e.$$.props[t];void 0!==r&&(e.$$.bound[r]=n,n(e.$$.ctx[r]))}function G(e){e&&e.c()}function W(e,n,s,o){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=e.$$;a&&a.m(n,s),o||P((()=>{const n=c.map(t).filter(i);l?l.push(...n):r(n),e.$$.on_mount=[]})),u.forEach(P)}function J(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(e,t){-1===e.$$.dirty[0]&&(C.push(e),O||(O=!0,$.then(U)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function X(t,i,s,o,c,l,u,h=[-1]){const d=a;S(t);const f=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(d?d.$$.context:[])),callbacks:n(),dirty:h,skip_bound:!1,root:i.target||d.$$.root};u&&u(f.root);let p=!1;if(f.ctx=s?s(t,i.props||{},((e,n,...r)=>{const i=r.length?r[0]:n;return f.ctx&&c(f.ctx[e],f.ctx[e]=i)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](i),p&&Q(t,e)),n})):[],f.update(),p=!0,r(f.before_update),f.fragment=!!o&&o(f.ctx),i.target){if(i.hydrate){const e=function(e){return Array.from(e.childNodes)}(i.target);f.fragment&&f.fragment.l(e),e.forEach(y)}else f.fragment&&f.fragment.c();i.intro&&z(t.$$.fragment),W(t,i.target,i.anchor,i.customElement),U()}S(d)}class Y{$destroy(){J(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Z=[];function ee(t,n=e){let r;const i=new Set;function o(e){if(s(t,e)&&(t=e,r)){const e=!Z.length;for(const e of i)e[1](),Z.push(e,t);if(e){for(let e=0;e<Z.length;e+=2)Z[e][0](Z[e+1]);Z.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(s,a=e){const c=[s,a];return i.add(c),1===i.size&&(r=n(o)||e),s(t),()=>{i.delete(c),0===i.size&&(r(),r=null)}}}}const{set:te,subscribe:ne}=ee({}),re={subscribe:ne,set:te,remove:()=>{te({})}},ie=(e,t="")=>{const n=new URL(e);function r(){return s(t).reduce(((e,t,n)=>(":"===t[0]&&e.push({value:t.slice(1),index:n}),e)),[])}function i(){return s(n.pathname)}function s(e){return"/"===e||0===e.trim().length?[e]:("/"===e.slice(-1)&&(e=e.slice(0,-1)),"/"===e[0]&&(e=e.slice(1)),e.split("/"))}return Object.freeze({hash:n.hash,host:n.host,hostname:n.hostname,namedParams:function(){const e=i();return r().reduce(((t,n)=>(t[n.value]=e[n.index],t)),{})}(),namedParamsKeys:r().reduce(((e,t)=>(e.push(t.value),e)),[]),namedParamsValues:function(){const e=i();return r().reduce(((t,n)=>(t.push(e[n.index]),t)),[])}(),pathNames:i(),port:n.port,pathname:n.pathname,protocol:n.protocol,search:n.search,queryParams:function(){const e={};return n.searchParams.forEach(((t,n)=>{e[n]=t})),e}(),queryParamsKeys:function(){const e=[];return n.searchParams.forEach(((t,n)=>{e.push(n)})),e}(),queryParamsValues:function(){const e=[];return n.searchParams.forEach((t=>{e.push(t)})),e}()})},se=e=>{let t=!1;return 0===Object.keys(e).length||(e.childRoute&&0===Object.keys(e.childRoute).length?t=!0:e.childRoute&&(t=se(e.childRoute)),t)},oe=(e,t)=>(t=ue(t)).includes(":")?t.includes(e):t.startsWith(e),ae=(e,t,n)=>{let r=!1;if(n)return{exists:t.lang&&t.lang[n]&&t.lang[n].includes(e),language:n};if(r=oe(e,t.name),!r&&t.lang&&"object"==typeof t.lang)for(const[i,s]of Object.entries(t.lang))oe(e,s)&&(r=!0,n=i);return{exists:r,language:n}},ce=e=>"/"===e||0===e.trim().length?[e]:(e=ue(e,"both")).split("/"),le=(e="")=>{let t;return"/"===e||0===e.trim().length?e:(t=(e=ue(e,"lead")).split(":")[0],t=ue(t,"trail"),t.toLowerCase())},ue=(e,t="lead")=>("trail"!==t&&"both"!==t||(e=e.replace(/\/$/,"")),"lead"!==t&&"both"!==t||(e=e.replace(/^\//,"")),e),he=(e,t=null)=>t&&e.lang&&e.lang[t]?e.lang[t]:e.name,de=e=>{const t=e||!1;let n="";const r=(e,n)=>{if("undefined"!=typeof window){const r=(e=>{let t=[];if(e.queryParams)for(let[n,r]of Object.entries(e.queryParams))t.push(`${n}=${r}`);const n=e.hash?e.hash:"";return t.length>0?`${e.path}?${t.join("&")}${n}`:e.path+n})(e);n&&window.history.pushState({page:r},"",r),t&&i(r)}},i=e=>{"undefined"!=typeof ga&&(ga("set","page",e),ga("send","pageview"))};return Object.freeze({active:()=>n,isActive:(e,t=!1)=>{"/"!==e[0]&&(e="/"+e);let r=ie(`http://fake.com${e}`).pathname,i=ie(`http://fake.com${n}`).pathname;return r=ue(r,"trail"),i=ue(i,"trail"),t?i.includes(r):i===r},setActive:(e,t)=>{n=e.path,r(e,t)}})},fe=(e,t)=>{const n=(e=>{const t=e;return Object.freeze({valid:()=>t&&t.guard&&"function"==typeof t.guard,redirect:()=>!t.guard(),redirectPath:()=>{let e="/";return t.redirect&&t.redirect.length>0&&(e=t.redirect),e}})})(e.onlyIf);return Object.freeze({path:()=>{let r=t;return e.redirectTo&&e.redirectTo.length>0&&(r=e.redirectTo),n.valid()&&n.redirect()&&(r=n.redirectPath()),r}})};function pe({basePath:e,basePathName:t,pathNames:n,convert:r,currentLanguage:i}){let s,o,a=i;function c(){return he(o,a)}function l(){return le(c())}function u(){return le(s.result)}return Object.freeze({basePathSameAsLocalised:function(){return u()===l()},updatedPath:function(e){return o=e,s=((e,t,n,r,i=!1)=>{if("/"===e||0===e.trim().length)return{result:e,language:null};let s=e,o=n.name,a=r;if(i&&(a=""),o=ue(o),s=ue(s),n.childRoute)return{result:e,language:a};{let e=ae(s,n,a);e.exists&&i&&(s=he(n,r));let c=o.split(":")[0];return c=ue(c,"trail"),c=c.split("/"),c.shift(),c.forEach((()=>{const o=t[0];if(e=ae(`${s}/${o}`,n,a),!o||!e.exists)return{result:s,language:e.language};s=i?he(n,r):`${s}/${o}`,t.shift()})),{result:s,language:e.language}}})(t,n,o,a,r),a=r?i:s.language,s},basePathNameWithoutNamedParams:u,localisedPathName:c,localisedRouteWithoutNamedParams:l,namedPath:function(){let t=c();return t&&!t.startsWith("/")&&(t="/"+t),e?`${e}${t}`:t},pathNames:n,routeLanguage:function(){return a},routePath:function(){let t=`${e}/${u()}`;"//"===t&&(t="/"),a&&(n=((e,t)=>{const n=t.split("/");return n.length>1&&n.forEach((function(t,n){t.length>0&&n>0&&e.shift()})),e})(n,l()));const r=((e="")=>0===e.trim().length?[]:ce(e).reduce(((e,t)=>(":"===t[0]&&e.push(t.slice(1)),e)),[]))(c());return r&&r.length>0&&r.forEach((function(){n.length>0&&(t+=`/${n.shift()}`)})),t}})}function me({routes:e,currentUrl:t,routerOptions:n,convert:r}){const i=n.defaultLanguage,s=n.prefix?n.prefix.toLowerCase():"",o=function(e,t){if(t&&t.trim().length>0){const n=e.endsWith(t)?t:t+"/",r=e.replace(n,"");return ie(r)}return ie(e)}(t,s);let a="",c={},l=!1;function u(e,t,n,r,s){let h={};const d=pe({basePath:t,basePathName:n.shift().toLowerCase(),pathNames:n,convert:s,currentLanguage:r});return l=!1,e.forEach((function(e){if(d.updatedPath(e),function(e,t){const n=e.basePathSameAsLocalised();n&&(l=!0);return n||!l&&(e=>ue(e).startsWith(":"))(t)}(d,e.name)){let t=d.routePath();if(a=fe(e,a).path(),h.name!==t&&(h=function({route:e,routePath:t,routeLanguage:n,urlParser:r,namedPath:s}){const o=function({routeInfo:e,path:t,routeNamedParams:n,urlParser:r,namedPath:i,language:s}){const o=()=>{const e=ie(`https://fake.com${r.pathname}`,i).namedParams;return{...n,...e}};return Object.freeze({get:()=>({name:t,component:e.component,hash:r.hash,layout:e.layout,queryParams:r.queryParams,namedParams:o(),path:t,language:s}),namedParams:o})}({routeInfo:e,urlParser:r,path:t,routeNamedParams:c,namedPath:s,language:n||i});return c=o.namedParams(),o.get()}({route:e,routePath:t,routeLanguage:d.routeLanguage(),urlParser:o,namedPath:d.namedPath()})),e.nestedRoutes&&e.nestedRoutes.length>0&&d.pathNames.length>0)h.childRoute=u(e.nestedRoutes,t,d.pathNames,d.routeLanguage(),s),h.path=h.childRoute.path,h.language=h.childRoute.language;else if(function(e,t){return e.nestedRoutes&&e.nestedRoutes.length>0&&0===t.length}(e,d.pathNames)){const n=u(e.nestedRoutes,t,["index"],d.routeLanguage(),s);n&&Object.keys(n).length>0&&(h.childRoute=n,h.language=h.childRoute.language)}}})),a&&(h.redirectTo=a),h}const h=t=>{const n=e.find((e=>"404"==e.name)),r=t||i||"";return n?{...n,language:r,path:"404"}:{name:"404",component:"",path:"404",redirectTo:"/404.html"}};return Object.freeze({findActiveRoute:function(){let t=u(e,"",o.pathNames,n.lang,r);return t&&Object.keys(t).length&&!se(t)?(t.path=t.path.split("?")[0],s&&(t.path=`/${s}${t.path}`)):"undefined"!=typeof window&&(t=h(n.lang)),t}})}const ge="/404.html";let ye,ve=[],we={};const be=(e,t,n={})=>{we={...n},void 0!==t&&""!==t||(t=document.location.href),ye=de(we.gaPageviews),t=ue(t,"trail"),ve=e;const r=()=>{let n=!1;return we.langConvertTo&&(we.lang=we.langConvertTo,n=!0),me({routes:e,currentUrl:t,routerOptions:we,convert:n}).findActiveRoute()};return Object.freeze({setActiveRoute:(e=!0)=>{const t=r();return t.redirectTo?((e,t)=>("undefined"!=typeof window&&(e===ge?ye.setActive({path:ge},t):Ie(e)),e))(t.redirectTo,e):(ye.setActive(t,e),re.set(t),t)},findActiveRoute:r})},Ie=(e,t=null,n=!0)=>(e=ue(e,"lead"),t&&(we.langConvertTo=t),be(ve,"http://fake.com/"+e,we).setActiveRoute(n));function Te(e){let t,n;return t=new Ae({props:{currentRoute:e[0].childRoute,params:e[1]}}),{c(){G(t.$$.fragment)},m(e,r){W(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.currentRoute=e[0].childRoute),2&n&&(r.params=e[1]),t.$set(r)},i(e){n||(z(t.$$.fragment,e),n=!0)},o(e){K(t.$$.fragment,e),n=!1},d(e){J(t,e)}}}function Ee(e){let t,n,r;var i=e[0].component;function s(e){return{props:{currentRoute:{...e[0],component:""},params:e[1]}}}return i&&(t=new i(s(e))),{c(){t&&G(t.$$.fragment),n=T()},m(e,i){t&&W(t,e,i),g(e,n,i),r=!0},p(e,r){const o={};if(1&r&&(o.currentRoute={...e[0],component:""}),2&r&&(o.params=e[1]),i!==(i=e[0].component)){if(t){q();const e=t;K(e.$$.fragment,1,0,(()=>{J(e,1)})),B()}i?(t=new i(s(e)),G(t.$$.fragment),z(t.$$.fragment,1),W(t,n.parentNode,n)):t=null}else i&&t.$set(o)},i(e){r||(t&&z(t.$$.fragment,e),r=!0)},o(e){t&&K(t.$$.fragment,e),r=!1},d(e){e&&y(n),t&&J(t,e)}}}function _e(e){let t,n,r;var i=e[0].layout;function s(e){return{props:{currentRoute:{...e[0],layout:""},params:e[1]}}}return i&&(t=new i(s(e))),{c(){t&&G(t.$$.fragment),n=T()},m(e,i){t&&W(t,e,i),g(e,n,i),r=!0},p(e,r){const o={};if(1&r&&(o.currentRoute={...e[0],layout:""}),2&r&&(o.params=e[1]),i!==(i=e[0].layout)){if(t){q();const e=t;K(e.$$.fragment,1,0,(()=>{J(e,1)})),B()}i?(t=new i(s(e)),G(t.$$.fragment),z(t.$$.fragment,1),W(t,n.parentNode,n)):t=null}else i&&t.$set(o)},i(e){r||(t&&z(t.$$.fragment,e),r=!0)},o(e){t&&K(t.$$.fragment,e),r=!1},d(e){e&&y(n),t&&J(t,e)}}}function ke(e){let t,n,r,i;const s=[_e,Ee,Te],o=[];function a(e,t){return e[0].layout?0:e[0].component?1:e[0].childRoute?2:-1}return~(t=a(e))&&(n=o[t]=s[t](e)),{c(){n&&n.c(),r=T()},m(e,n){~t&&o[t].m(e,n),g(e,r,n),i=!0},p(e,[i]){let c=t;t=a(e),t===c?~t&&o[t].p(e,i):(n&&(q(),K(o[c],1,1,(()=>{o[c]=null})),B()),~t?(n=o[t],n?n.p(e,i):(n=o[t]=s[t](e),n.c()),z(n,1),n.m(r.parentNode,r)):n=null)},i(e){i||(z(n),i=!0)},o(e){K(n),i=!1},d(e){~t&&o[t].d(e),e&&y(r)}}}function Se(e,t,n){let{currentRoute:r={}}=t,{params:i={}}=t;return e.$$set=e=>{"currentRoute"in e&&n(0,r=e.currentRoute),"params"in e&&n(1,i=e.params)},[r,i]}"undefined"!=typeof window&&(window.addEventListener("click",(e=>{if("a"!==e.target.localName.toLowerCase())return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;const t=we.prefix?`/${we.prefix.toLowerCase()}`:"",n=e.target.pathname&&e.target.host===window.location.host,r=!(t.length>1)||e.target.pathname.startsWith(t);if(n&&r){e.preventDefault();const t=e.target.pathname+e.target.search+e.target.search+e.target.hash;"_blank"===e.target.target?window.open(t,"newTab"):Ie(t)}})),window.onpopstate=function(e){let t=window.location.pathname+window.location.search+window.location.hash;Ie(t,null,!1)});class Ae extends Y{constructor(e){super(),X(this,e,Se,ke,s,{currentRoute:0,params:1})}}function Ce(e){let t,n;return t=new Ae({props:{currentRoute:e[0]}}),{c(){G(t.$$.fragment)},m(e,r){W(t,e,r),n=!0},p(e,[n]){const r={};1&n&&(r.currentRoute=e[0]),t.$set(r)},i(e){n||(z(t.$$.fragment,e),n=!0)},o(e){K(t.$$.fragment,e),n=!1},d(e){J(t,e)}}}function Ne(e,t,n){let r;c(e,re,(e=>n(0,r=e)));let{routes:i=[]}=t,{options:s={}}=t;return A((()=>{be(i,document.location.href,s).setActiveRoute()})),e.$$set=e=>{"routes"in e&&n(1,i=e.routes),"options"in e&&n(2,s=e.options)},[r,i,s]}class Re extends Y{constructor(e){super(),X(this,e,Ne,Ce,s,{routes:1,options:2})}}const De=ee(0),$e=ee(5);function Oe(t){let n,r,s,o;return{c(){n=w("button"),r=b(t[0])},m(e,a){g(e,n,a),m(n,r),s||(o=E(n,"click",(function(){i(t[1])&&t[1].apply(this,arguments)})),s=!0)},p(e,[n]){t=e,1&n&&k(r,t[0])},i:e,o:e,d(e){e&&y(n),s=!1,o()}}}function Pe(e,t,n){let{text:r}=t,{onClickFn:i}=t;return e.$$set=e=>{"text"in e&&n(0,r=e.text),"onClickFn"in e&&n(1,i=e.onClickFn)},[r,i]}class xe extends Y{constructor(e){super(),X(this,e,Pe,Oe,s,{text:0,onClickFn:1})}}function Le(e){let t,n,r,i,s,o,a=e[0]?`you typed ${e[1]} words per minute`:"you lost :(";return s=new xe({props:{onClickFn:e[2],text:e[0]?"play again":"try again"}}),{c(){t=w("div"),n=w("div"),r=b(a),i=I(),G(s.$$.fragment),_(n,"class","game-over-div svelte-ap5isp"),_(t,"class","game-over-environment svelte-ap5isp")},m(e,a){g(e,t,a),m(t,n),m(n,r),m(t,i),W(s,t,null),o=!0},p(e,[t]){(!o||3&t)&&a!==(a=e[0]?`you typed ${e[1]} words per minute`:"you lost :(")&&k(r,a);const n={};4&t&&(n.onClickFn=e[2]),1&t&&(n.text=e[0]?"play again":"try again"),s.$set(n)},i(e){o||(z(s.$$.fragment,e),o=!0)},o(e){K(s.$$.fragment,e),o=!1},d(e){e&&y(t),J(s)}}}function Me(e,t,n){let{winGame:r}=t,{wpm:i}=t,{tryAgain:s}=t;return e.$$set=e=>{"winGame"in e&&n(0,r=e.winGame),"wpm"in e&&n(1,i=e.wpm),"tryAgain"in e&&n(2,s=e.tryAgain)},[r,i,s]}class Ue extends Y{constructor(e){super(),X(this,e,Me,Le,s,{winGame:0,wpm:1,tryAgain:2})}}function Fe(t){let n,s,o,a,c,l,u,h,d,f,v,T,k,S;return{c(){n=w("div"),s=w("div"),o=b("easy"),c=I(),l=w("div"),u=b("medium"),d=I(),f=w("div"),v=b("hard"),_(s,"class",a=p("mode-div "+("easy"===t[0]?"active-mode":"inactive-mode"))+" svelte-dzq9n6"),_(s,"id","easy"),_(l,"class",h=p("mode-div "+("medium"===t[0]?"active-mode":"inactive-mode"))+" svelte-dzq9n6"),_(l,"id","medium"),_(f,"class",T=p("mode-div "+("hard"===t[0]?"active-mode":"inactive-mode"))+" svelte-dzq9n6"),_(f,"id","hard"),_(n,"class","mode-container svelte-dzq9n6")},m(e,r){g(e,n,r),m(n,s),m(s,o),m(n,c),m(n,l),m(l,u),m(n,d),m(n,f),m(f,v),k||(S=[E(s,"click",(function(){i(t[1])&&t[1].apply(this,arguments)})),E(l,"click",(function(){i(t[1])&&t[1].apply(this,arguments)})),E(f,"click",(function(){i(t[1])&&t[1].apply(this,arguments)}))],k=!0)},p(e,[n]){t=e,1&n&&a!==(a=p("mode-div "+("easy"===t[0]?"active-mode":"inactive-mode"))+" svelte-dzq9n6")&&_(s,"class",a),1&n&&h!==(h=p("mode-div "+("medium"===t[0]?"active-mode":"inactive-mode"))+" svelte-dzq9n6")&&_(l,"class",h),1&n&&T!==(T=p("mode-div "+("hard"===t[0]?"active-mode":"inactive-mode"))+" svelte-dzq9n6")&&_(f,"class",T)},i:e,o:e,d(e){e&&y(n),k=!1,r(S)}}}function Ve(e,t,n){let{mode:r}=t,{changeMode:i}=t;return e.$$set=e=>{"mode"in e&&n(0,r=e.mode),"changeMode"in e&&n(1,i=e.changeMode)},[r,i]}class je extends Y{constructor(e){super(),X(this,e,Ve,Fe,s,{mode:0,changeMode:1})}}var qe=["ability","able","aboard","about","above","accept","accident","according","account","accurate","acres","across","act","action","active","activity","actual","actually","add","addition","additional","adjective","adult","adventure","advice","affect","afraid","after","afternoon","again","against","age","ago","agree","ahead","aid","air","airplane","alike","alive","all","allow","almost","alone","along","aloud","alphabet","already","also","although","am","among","amount","ancient","angle","angry","animal","announced","another","answer","ants","any","anybody","anyone","anything","anyway","anywhere","apart","apartment","appearance","apple","applied","appropriate","are","area","arm","army","around","arrange","arrangement","arrive","arrow","art","article","as","aside","ask","asleep","at","ate","atmosphere","atom","atomic","attached","attack","attempt","attention","audience","author","automobile","available","average","avoid","aware","away","baby","back","bad","badly","bag","balance","ball","balloon","band","bank","bar","bare","bark","barn","base","baseball","basic","basis","basket","bat","battle","be","bean","bear","beat","beautiful","beauty","became","because","become","becoming","bee","been","before","began","beginning","begun","behavior","behind","being","believed","bell","belong","below","belt","bend","beneath","bent","beside","best","bet","better","between","beyond","bicycle","bigger","biggest","bill","birds","birth","birthday","bit","bite","black","blank","blanket","blew","blind","block","blood","blow","blue","board","boat","body","bone","book","border","born","both","bottle","bottom","bound","bow","bowl","box","boy","brain","branch","brass","brave","bread","break","breakfast","breath","breathe","breathing","breeze","brick","bridge","brief","bright","bring","broad","broke","broken","brother","brought","brown","brush","buffalo","build","building","built","buried","burn","burst","bus","bush","business","busy","but","butter","buy","by","cabin","cage","cake","call","calm","came","camera","camp","can","canal","cannot","cap","capital","captain","captured","car","carbon","card","care","careful","carefully","carried","carry","case","cast","castle","cat","catch","cattle","caught","cause","cave","cell","cent","center","central","century","certain","certainly","chain","chair","chamber","chance","change","changing","chapter","character","characteristic","charge","chart","check","cheese","chemical","chest","chicken","chief","child","children","choice","choose","chose","chosen","church","circle","circus","citizen","city","class","classroom","claws","clay","clean","clear","clearly","climate","climb","clock","close","closely","closer","cloth","clothes","clothing","cloud","club","coach","coal","coast","coat","coffee","cold","collect","college","colony","color","column","combination","combine","come","comfortable","coming","command","common","community","company","compare","compass","complete","completely","complex","composed","composition","compound","concerned","condition","congress","connected","consider","consist","consonant","constantly","construction","contain","continent","continued","contrast","control","conversation","cook","cookies","cool","copper","copy","corn","corner","correct","correctly","cost","cotton","could","count","country","couple","courage","course","court","cover","cow","cowboy","crack","cream","create","creature","crew","crop","cross","crowd","cry","cup","curious","current","curve","customs","cut","cutting","daily","damage","dance","danger","dangerous","dark","darkness","date","daughter","dawn","day","dead","deal","dear","death","decide","declared","deep","deeply","deer","definition","degree","depend","depth","describe","desert","design","desk","detail","determine","develop","development","diagram","diameter","did","die","differ","difference","different","difficult","difficulty","dig","dinner","direct","direction","directly","dirt","dirty","disappear","discover","discovery","discuss","discussion","disease","dish","distance","distant","divide","division","do","doctor","does","dog","doing","doll","dollar","done","donkey","door","dot","double","doubt","down","dozen","draw","drawn","dream","dress","drew","dried","drink","drive","driven","driver","driving","drop","dropped","drove","dry","duck","due","dug","dull","during","dust","duty","each","eager","ear","earlier","early","earn","earth","easier","easily","east","easy","eat","eaten","edge","education","effect","effort","egg","eight","either","electric","electricity","element","elephant","eleven","else","empty","end","enemy","energy","engine","engineer","enjoy","enough","enter","entire","entirely","environment","equal","equally","equator","equipment","escape","especially","essential","establish","even","evening","event","eventually","ever","every","everybody","everyone","everything","everywhere","evidence","exact","exactly","examine","example","excellent","except","exchange","excited","excitement","exciting","exclaimed","exercise","exist","expect","experience","experiment","explain","explanation","explore","express","expression","extra","eye","face","facing","fact","factor","factory","failed","fair","fairly","fall","fallen","familiar","family","famous","far","farm","farmer","farther","fast","fastened","faster","fat","father","favorite","fear","feathers","feature","fed","feed","feel","feet","fell","fellow","felt","fence","few","fewer","field","fierce","fifteen","fifth","fifty","fight","fighting","figure","fill","film","final","finally","find","fine","finest","finger","finish","fire","fireplace","firm","first","fish","five","fix","flag","flame","flat","flew","flies","flight","floating","floor","flow","flower","fly","fog","folks","follow","food","foot","football","for","force","foreign","forest","forget","forgot","forgotten","form","former","fort","forth","forty","forward","fought","found","four","fourth","fox","frame","free","freedom","frequently","fresh","friend","friendly","frighten","frog","from","front","frozen","fruit","fuel","full","fully","fun","function","funny","fur","furniture","further","future","gain","game","garage","garden","gas","gasoline","gate","gather","gave","general","generally","gentle","gently","get","getting","giant","gift","girl","give","given","giving","glad","glass","globe","go","goes","gold","golden","gone","good","goose","got","government","grabbed","grade","gradually","grain","grandfather","grandmother","graph","grass","gravity","gray","great","greater","greatest","greatly","green","grew","ground","group","grow","grown","growth","guard","guess","guide","gulf","gun","habit","had","hair","half","halfway","hall","hand","handle","handsome","hang","happen","happened","happily","happy","harbor","hard","harder","hardly","has","hat","have","having","hay","he","headed","heading","health","heard","hearing","heart","heat","heavy","height","held","hello","help","helpful","her","herd","here","herself","hidden","hide","high","higher","highest","highway","hill","him","himself","his","history","hit","hold","hole","hollow","home","honor","hope","horn","horse","hospital","hot","hour","house","how","however","huge","human","hundred","hung","hungry","hunt","hunter","hurried","hurry","hurt","husband","ice","idea","identity","if","ill","image","imagine","immediately","importance","important","impossible","improve","in","inch","include","including","income","increase","indeed","independent","indicate","individual","industrial","industry","influence","information","inside","instance","instant","instead","instrument","interest","interior","into","introduced","invented","involved","iron","is","island","it","its","itself","jack","jar","jet","job","join","joined","journey","joy","judge","jump","jungle","just","keep","kept","key","kids","kill","kind","kitchen","knew","knife","know","knowledge","known","label","labor","lack","lady","laid","lake","lamp","land","language","large","larger","largest","last","late","later","laugh","law","lay","layers","lead","leader","leaf","learn","least","leather","leave","leaving","led","left","leg","length","lesson","let","letter","level","library","lie","life","lift","light","like","likely","limited","line","lion","lips","liquid","list","listen","little","live","living","load","local","locate","location","log","lonely","long","longer","look","loose","lose","loss","lost","lot","loud","love","lovely","low","lower","luck","lucky","lunch","lungs","lying","machine","machinery","mad","made","magic","magnet","mail","main","mainly","major","make","making","man","managed","manner","manufacturing","many","map","mark","market","married","mass","massage","master","material","mathematics","matter","may","maybe","me","meal","mean","means","meant","measure","meat","medicine","meet","melted","member","memory","men","mental","merely","met","metal","method","mice","middle","might","mighty","mile","military","milk","mill","mind","mine","minerals","minute","mirror","missing","mission","mistake","mix","mixture","model","modern","molecular","moment","money","monkey","month","mood","moon","more","morning","most","mostly","mother","motion","motor","mountain","mouse","mouth","move","movement","movie","moving","mud","muscle","music","musical","must","my","myself","mysterious","nails","name","nation","national","native","natural","naturally","nature","near","nearby","nearer","nearest","nearly","necessary","neck","needed","needle","needs","negative","neighbor","neighborhood","nervous","nest","never","new","news","newspaper","next","nice","night","nine","no","nobody","nodded","noise","none","noon","nor","north","nose","not","note","noted","nothing","notice","noun","now","number","numeral","nuts","object","observe","obtain","occasionally","occur","ocean","of","off","offer","office","officer","official","oil","old","older","oldest","on","once","one","only","onto","open","operation","opinion","opportunity","opposite","or","orange","orbit","order","ordinary","organization","organized","origin","original","other","ought","our","ourselves","out","outer","outline","outside","over","own","owner","oxygen","pack","package","page","paid","pain","paint","pair","palace","pale","pan","paper","paragraph","parallel","parent","park","part","particles","particular","particularly","partly","parts","party","pass","passage","past","path","pattern","pay","peace","pen","pencil","people","per","percent","perfect","perfectly","perhaps","period","person","personal","pet","phrase","physical","piano","pick","picture","pictured","pie","piece","pig","pile","pilot","pine","pink","pipe","pitch","place","plain","plan","plane","planet","planned","planning","plant","plastic","plate","plates","play","pleasant","please","pleasure","plenty","plural","plus","pocket","poem","poet","poetry","point","pole","police","policeman","political","pond","pony","pool","poor","popular","population","porch","port","position","positive","possible","possibly","post","pot","potatoes","pound","pour","powder","power","powerful","practical","practice","prepare","present","president","press","pressure","pretty","prevent","previous","price","pride","primitive","principal","principle","printed","private","prize","probably","problem","process","produce","product","production","program","progress","promised","proper","properly","property","protection","proud","prove","provide","public","pull","pupil","pure","purple","purpose","push","put","putting","quarter","queen","question","quick","quickly","quiet","quietly","quite","rabbit","race","radio","railroad","rain","raise","ran","ranch","range","rapidly","rate","rather","raw","rays","reach","read","reader","ready","real","realize","rear","reason","recall","receive","recent","recently","recognize","record","red","refer","refused","region","regular","related","relationship","religious","remain","remarkable","remember","remove","repeat","replace","replied","report","represent","require","research","respect","rest","result","return","review","rhyme","rhythm","rice","rich","ride","riding","right","ring","rise","rising","river","road","roar","rock","rocket","rocky","rod","roll","roof","room","root","rope","rose","rough","round","route","row","rubbed","rubber","rule","ruler","run","running","rush","sad","saddle","safe","safety","said","sail","sale","salmon","salt","same","sand","sang","sat","satellites","satisfied","save","saved","saw","say","scale","scared","scene","school","science","scientific","scientist","score","screen","sea","search","season","seat","second","secret","section","see","seed","seeing","seems","seen","seldom","select","selection","sell","send","sense","sent","sentence","separate","series","serious","serve","service","sets","setting","settle","settlers","seven","several","shade","shadow","shake","shaking","shall","shallow","shape","share","sharp","she","sheep","sheet","shelf","shells","shelter","shine","shinning","ship","shirt","shoe","shoot","shop","shore","short","shorter","shot","should","shoulder","shout","show","shown","shut","sick","sides","sight","sign","signal","silence","silent","silk","silly","silver","similar","simple","simplest","simply","since","sing","single","sink","sister","sit","sitting","situation","six","size","skill","skin","sky","slabs","slave","sleep","slept","slide","slight","slightly","slip","slipped","slope","slow","slowly","small","smaller","smallest","smell","smile","smoke","smooth","snake","snow","so","soap","social","society","soft","softly","soil","solar","sold","soldier","solid","solution","solve","some","somebody","somehow","someone","something","sometime","somewhere","son","song","soon","sort","sound","source","south","southern","space","speak","special","species","specific","speech","speed","spell","spend","spent","spider","spin","spirit","spite","split","spoken","sport","spread","spring","square","stage","stairs","stand","standard","star","stared","start","state","statement","station","stay","steady","steam","steel","steep","stems","step","stepped","stick","stiff","still","stock","stomach","stone","stood","stop","stopped","store","storm","story","stove","straight","strange","stranger","straw","stream","street","strength","stretch","strike","string","strip","strong","stronger","struck","structure","struggle","stuck","student","studied","studying","subject","substance","success","successful","such","sudden","suddenly","sugar","suggest","suit","sum","summer","sun","sunlight","supper","supply","support","suppose","sure","surface","surprise","surrounded","swam","sweet","swept","swim","swimming","swing","swung","syllable","symbol","system","table","tail","take","taken","tales","talk","tall","tank","tape","task","taste","taught","tax","tea","teach","teacher","team","tears","teeth","telephone","television","tell","temperature","ten","tent","term","terrible","test","than","thank","that","thee","them","themselves","then","theory","there","therefore","these","they","thick","thin","thing","think","third","thirty","this","those","thou","though","thought","thousand","thread","three","threw","throat","through","throughout","throw","thrown","thumb","thus","thy","tide","tie","tight","tightly","till","time","tin","tiny","tip","tired","title","to","tobacco","today","together","told","tomorrow","tone","tongue","tonight","too","took","tool","top","topic","torn","total","touch","toward","tower","town","toy","trace","track","trade","traffic","trail","train","transportation","trap","travel","treated","tree","triangle","tribe","trick","tried","trip","troops","tropical","trouble","truck","trunk","truth","try","tube","tune","turn","twelve","twenty","twice","two","type","typical","uncle","under","underline","understanding","unhappy","union","unit","universe","unknown","unless","until","unusual","up","upon","upper","upward","us","use","useful","using","usual","usually","valley","valuable","value","vapor","variety","various","vast","vegetable","verb","vertical","very","vessels","victory","view","village","visit","visitor","voice","volume","vote","vowel","voyage","wagon","wait","walk","wall","want","war","warm","warn","was","wash","waste","watch","water","wave","way","we","weak","wealth","wear","weather","week","weigh","weight","welcome","well","went","were","west","western","wet","whale","what","whatever","wheat","wheel","when","whenever","where","wherever","whether","which","while","whispered","whistle","white","who","whole","whom","whose","why","wide","widely","wife","wild","will","willing","win","wind","window","wing","winter","wire","wise","wish","with","within","without","wolf","women","won","wonder","wonderful","wood","wooden","wool","word","wore","work","worker","world","worried","worry","worse","worth","would","wrapped","write","writer","writing","written","wrong","wrote","yard","year","yellow","yes","yesterday","yet","you","young","younger","your","yourself","youth","zero","zebra","zipper","zoo","zulu"];function Be(e){function t(){return e&&e.maxLength>1?function(){let t,r=!1;for(;!r;)t=n(),t.length<=e.maxLength&&(r=!0);return t}():n()}function n(){return qe[r(qe.length)]}function r(e){return Math.floor(Math.random()*e)}if(void 0===e)return t();"number"==typeof e&&(e={exactly:e}),e.exactly&&(e.min=e.exactly,e.max=e.exactly),"number"!=typeof e.wordsPerString&&(e.wordsPerString=1),"function"!=typeof e.formatter&&(e.formatter=e=>e),"string"!=typeof e.separator&&(e.separator=" ");for(var i=e.min+r(e.max+1-e.min),s=[],o="",a=0,c=0;c<i*e.wordsPerString;c++)a===e.wordsPerString-1?o+=e.formatter(t(),a):o+=e.formatter(t(),a)+e.separator,a++,(c+1)%e.wordsPerString==0&&(s.push(o),o="",a=0);return e.join&&(s=s.join(e.join)),s}var ze=Be;Be.wordList=qe;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
const Ke={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=i>>2,u=(3&i)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t}(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw Error();const c=i<<2|s>>4;if(r.push(c),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class He{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ge(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function We(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ge())}function Je(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function Qe(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Xe(){const e=Ge();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}class Ye extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Ye.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ze.prototype.create)}}class Ze{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(et,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new Ye(r,o,n)}}const et=/\{\$([^}]+)}/g;function tt(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(nt(n)&&nt(s)){if(!tt(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function nt(e){return null!==e&&"object"==typeof e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function rt(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function it(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function st(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}class ot{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=at),void 0===r.error&&(r.error=at),void 0===r.complete&&(r.complete=at);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function at(){}
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
     */function ct(e,t=1e3,n=2){const r=t*Math.pow(n,e),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+i)}
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
     */function lt(e){return e&&e._delegate?e._delegate:e}class ut{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
     */const ht="[DEFAULT]";
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
     */class dt{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new He;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
     */(e))try{this.getOrInitializeService({instanceIdentifier:ht})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===ht?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:ht:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class ft{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new dt(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var pt;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(pt||(pt={}));const mt={debug:pt.DEBUG,verbose:pt.VERBOSE,info:pt.INFO,warn:pt.WARN,error:pt.ERROR,silent:pt.SILENT},gt=pt.INFO,yt={[pt.DEBUG]:"log",[pt.VERBOSE]:"log",[pt.INFO]:"info",[pt.WARN]:"warn",[pt.ERROR]:"error"},vt=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=yt[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class wt{constructor(e){this.name=e,this._logLevel=gt,this._logHandler=vt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?mt[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pt.DEBUG,...e),this._logHandler(this,pt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pt.VERBOSE,...e),this._logHandler(this,pt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pt.INFO,...e),this._logHandler(this,pt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pt.WARN,...e),this._logHandler(this,pt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pt.ERROR,...e),this._logHandler(this,pt.ERROR,...e)}}
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
     */class bt{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const It="@firebase/app",Tt="0.7.11",Et=new wt("@firebase/app"),_t="[DEFAULT]",kt={[It]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},St=new Map,At=new Map;function Ct(e,t){try{e.container.addComponent(t)}catch(n){Et.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Nt(e){const t=e.name;if(At.has(t))return Et.debug(`There were multiple attempts to register component ${t}.`),!1;At.set(t,e);for(const t of St.values())Ct(t,e);return!0}function Rt(e,t){return e.container.getProvider(t)}
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
     */const Dt=new Ze("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
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
class $t{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ut("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dt.create("app-deleted",{appName:this._name})}}
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
     */const Ot="9.6.1";function Pt(e="[DEFAULT]"){const t=St.get(e);if(!t)throw Dt.create("no-app",{appName:e});return t}function xt(e,t,n){var r;let i=null!==(r=kt[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Et.warn(e.join(" "))}Nt(new ut(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
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
     */var Lt;Lt="",Nt(new ut("platform-logger",(e=>new bt(e)),"PRIVATE")),xt(It,Tt,Lt),xt(It,Tt,"esm2017"),xt("fire-js","");
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
xt("firebase","9.6.1","app");"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var Mt=function(e){var t={exports:{}};return e(t,t.exports),t.exports}((function(e,t){!function(e){function t(e){return Array.prototype.slice.call(e)}function n(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function r(e,t,r){var i,s=new Promise((function(s,o){n(i=e[t].apply(e,r)).then(s,o)}));return s.request=i,s}function i(e,t,n){var i=r(e,t,n);return i.then((function(e){if(e)return new u(e,i.request)}))}function s(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function o(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return r(this[t],i,arguments)})}))}function a(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return this[t][r].apply(this[t],arguments)})}))}function c(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return i(this[t],r,arguments)})}))}function l(e){this._index=e}function u(e,t){this._cursor=e,this._request=t}function h(e){this._store=e}function d(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function f(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new d(n)}function p(e){this._db=e}function m(e,t,n){var i=r(indexedDB,"open",[e,t]),s=i.request;return s&&(s.onupgradeneeded=function(e){n&&n(new f(s.result,e.oldVersion,s.transaction))}),i.then((function(e){return new p(e)}))}function g(e){return r(indexedDB,"deleteDatabase",[e])}s(l,"_index",["name","keyPath","multiEntry","unique"]),o(l,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),c(l,"_index",IDBIndex,["openCursor","openKeyCursor"]),s(u,"_cursor",["direction","key","primaryKey","value"]),o(u,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(u.prototype[e]=function(){var t=this,r=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,r),n(t._request).then((function(e){if(e)return new u(e,t._request)}))}))})})),h.prototype.createIndex=function(){return new l(this._store.createIndex.apply(this._store,arguments))},h.prototype.index=function(){return new l(this._store.index.apply(this._store,arguments))},s(h,"_store",["name","keyPath","indexNames","autoIncrement"]),o(h,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),c(h,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),a(h,"_store",IDBObjectStore,["deleteIndex"]),d.prototype.objectStore=function(){return new h(this._tx.objectStore.apply(this._tx,arguments))},s(d,"_tx",["objectStoreNames","mode"]),a(d,"_tx",IDBTransaction,["abort"]),f.prototype.createObjectStore=function(){return new h(this._db.createObjectStore.apply(this._db,arguments))},s(f,"_db",["name","version","objectStoreNames"]),a(f,"_db",IDBDatabase,["deleteObjectStore","close"]),p.prototype.transaction=function(){return new d(this._db.transaction.apply(this._db,arguments))},s(p,"_db",["name","version","objectStoreNames"]),a(p,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[h,l].forEach((function(n){e in n.prototype&&(n.prototype[e.replace("open","iterate")]=function(){var n=t(arguments),r=n[n.length-1],i=this._store||this._index,s=i[e].apply(i,n.slice(0,-1));s.onsuccess=function(){r(s.result)}})}))})),[l,h].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,r=[];return new Promise((function(i){n.iterateCursor(e,(function(e){e?(r.push(e.value),void 0===t||r.length!=t?e.continue():i(r)):i(r)}))}))})})),e.openDb=m,e.deleteDb=g,Object.defineProperty(e,"__esModule",{value:!0})}(t)}));const Ut="@firebase/installations",Ft="0.5.4",Vt=1e4,jt="w:0.5.4",qt="FIS_v2",Bt=36e5,zt=new Ze("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function Kt(e){return e instanceof Ye&&e.code.includes("request-failed")}
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
     */function Ht({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function Gt(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function Wt(e,t){const n=(await t.json()).error;return zt.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Jt({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Qt(e,{refreshToken:t}){const n=Jt(e);return n.append("Authorization",function(e){return`FIS_v2 ${e}`}
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
     */(t)),n}async function Xt(e){const t=await e();return t.status>=500&&t.status<600?e():t}
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
function Yt(e){return new Promise((t=>{setTimeout(t,e)}))}
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
const Zt=/^[cdef][\w-]{21}$/;function en(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
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
     */(e);return Zt.test(t)?t:""}catch(e){return""}}function tn(e){return`${e.appName}!${e.appId}`}
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
     */const nn=new Map;function rn(e,t){const n=tn(e);sn(n,t),function(e,t){const n=function(){!on&&"BroadcastChannel"in self&&(on=new BroadcastChannel("[Firebase] FID Change"),on.onmessage=e=>{sn(e.data.key,e.data.fid)});return on}();n&&n.postMessage({key:e,fid:t});0===nn.size&&on&&(on.close(),on=null)}(n,t)}function sn(e,t){const n=nn.get(e);if(n)for(const e of n)e(t)}let on=null;
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
const an="firebase-installations-store";let cn=null;function ln(){return cn||(cn=Mt.openDb("firebase-installations-database",1,(e=>{if(0===e.oldVersion)e.createObjectStore(an)}))),cn}async function un(e,t){const n=tn(e),r=(await ln()).transaction(an,"readwrite"),i=r.objectStore(an),s=await i.get(n);return await i.put(t,n),await r.complete,s&&s.fid===t.fid||rn(e,t.fid),t}async function hn(e){const t=tn(e),n=(await ln()).transaction(an,"readwrite");await n.objectStore(an).delete(t),await n.complete}async function dn(e,t){const n=tn(e),r=(await ln()).transaction(an,"readwrite"),i=r.objectStore(an),s=await i.get(n),o=t(s);return void 0===o?await i.delete(n):await i.put(o,n),await r.complete,!o||s&&s.fid===o.fid||rn(e,o.fid),o}
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
     */async function fn(e){let t;const n=await dn(e,(n=>{const r=function(e){return gn(e||{fid:en(),registrationStatus:0})}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(zt.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function(e,{fid:t}){const n=Ht(e),r=Jt(e),i={fid:t,authVersion:qt,appId:e.appId,sdkVersion:jt},s={method:"POST",headers:r,body:JSON.stringify(i)},o=await Xt((()=>fetch(n,s)));if(o.ok){const e=await o.json();return{fid:e.fid||t,registrationStatus:2,refreshToken:e.refreshToken,authToken:Gt(e.authToken)}}throw await Wt("Create Installation",o)}(e,t);return un(e,n)}catch(n){throw Kt(n)&&409===n.customData.serverCode?await hn(e):await un(e,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:pn(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function pn(e){let t=await mn(e);for(;1===t.registrationStatus;)await Yt(100),t=await mn(e);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await fn(e);return n||t}return t}function mn(e){return dn(e,(e=>{if(!e)throw zt.create("installation-not-found");return gn(e)}))}function gn(e){return 1===(t=e).registrationStatus&&t.registrationTime+Vt<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
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
     */}async function yn({appConfig:e,platformLoggerProvider:t},n){const r=function(e,{fid:t}){return`${Ht(e)}/${t}/authTokens:generate`}
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
     */(e,n),i=Qt(e,n),s=t.getImmediate({optional:!0});s&&i.append("x-firebase-client",s.getPlatformInfoString());const o={installation:{sdkVersion:jt}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Xt((()=>fetch(r,a)));if(c.ok){return Gt(await c.json())}throw await Wt("Generate Auth Token",c)}async function vn(e,t=!1){let n;const r=await dn(e.appConfig,(r=>{if(!bn(r))throw zt.create("not-registered");const i=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Bt}(e)}(i))return r;if(1===i.requestStatus)return n=async function(e,t){let n=await wn(e.appConfig);for(;1===n.authToken.requestStatus;)await Yt(100),n=await wn(e.appConfig);const r=n.authToken;return 0===r.requestStatus?vn(e,t):r}(e,t),r;{if(!navigator.onLine)throw zt.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=async function(e,t){try{const n=await yn(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await un(e.appConfig,r),n}catch(n){if(!Kt(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await un(e.appConfig,n)}else await hn(e.appConfig);throw n}}(e,t),t}}));return n?await n:r.authToken}function wn(e){return dn(e,(e=>{if(!bn(e))throw zt.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+Vt<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
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
     */}))}function bn(e){return void 0!==e&&2===e.registrationStatus}
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
async function In(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await fn(e);t&&await t}
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
     */(n.appConfig);return(await vn(n,t)).token}function Tn(e){return zt.create("missing-app-config-values",{valueName:e})}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const En="installations",_n=e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw Tn("App Configuration");if(!e.name)throw Tn("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Tn(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,platformLoggerProvider:Rt(t,"platform-logger"),_delete:()=>Promise.resolve()}},kn=e=>{const t=Rt(e.getProvider("app").getImmediate(),En).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:r}=await fn(t.appConfig);return r?r.catch(console.error):vn(t).catch(console.error),n.fid}(t),getToken:e=>In(t,e)}};Nt(new ut(En,_n,"PUBLIC")),Nt(new ut("installations-internal",kn,"PRIVATE")),xt(Ut,Ft),xt(Ut,Ft,"esm2017");
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
const Sn="analytics",An="https://www.googletagmanager.com/gtag/js",Cn=new wt("@firebase/analytics");
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
function Nn(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function Rn(e,t,n,r){return async function(i,s,o){try{"event"===i?await async function(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let e=i.send_to;Array.isArray(e)||(e=[e]);const r=await Nn(n);for(const n of e){const e=r.find((e=>e.measurementId===n)),i=e&&t[e.appId];if(!i){s=[];break}s.push(i)}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(e){Cn.error(e)}}(e,t,n,s,o):"config"===i?await async function(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const e=(await Nn(n)).find((e=>e.measurementId===i));e&&await t[e.appId]}}catch(e){Cn.error(e)}e("config",i,s)}(e,t,n,r,s,o):e("set",s)}catch(e){Cn.error(e)}}}
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
const Dn=new Ze("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const $n=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function On(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Pn(e,t=$n,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw Dn.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Dn.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Ln;return setTimeout((async()=>{a.abort()}),void 0!==n?n:6e4),xn({appId:r,apiKey:i,measurementId:s},o,a,t)}async function xn(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=$n){const{appId:s,measurementId:o}=e;try{await function(e,t){return new Promise(((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener((()=>{clearTimeout(s),r(Dn.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(r,t)}catch(e){if(o)return Cn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${e.message}]`),{appId:s,measurementId:o};throw e}try{const t=await async function(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:On(r)},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(s,i);if(200!==o.status&&304!==o.status){let e="";try{const n=await o.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw Dn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:e})}return o.json()}(e);return i.deleteThrottleMetadata(s),t}catch(t){if(!function(e){if(!(e instanceof Ye&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(t)){if(i.deleteThrottleMetadata(s),o)return Cn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${t.message}]`),{appId:s,measurementId:o};throw t}const a=503===Number(t.customData.httpStatus)?ct(n,i.intervalMillis,30):ct(n,i.intervalMillis),c={throttleEndTimeMillis:Date.now()+a,backoffCount:n+1};return i.setThrottleMetadata(s,c),Cn.debug(`Calling attemptFetch again in ${a} millis`),xn(e,c,r,i)}}class Ln{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function Mn(){if("object"!=typeof indexedDB)return Cn.warn(Dn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}catch(e){return Cn.warn(Dn.create("indexeddb-unavailable",{errorInfo:e}).message),!1}return!0}async function Un(e,t,n,r,i,s,o){var a;const c=Pn(e);c.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&Cn.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>Cn.error(e))),t.push(c);const l=Mn().then((e=>e?r.getId():void 0)),[u,h]=await Promise.all([c,l]);(function(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(An))return t;return null})()||function(e,t){const n=document.createElement("script");n.src=`${An}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}(s,u.measurementId),i("js",new Date);const d=null!==(a=null==o?void 0:o.config)&&void 0!==a?a:{};return d.origin="firebase",d.update=!0,null!=h&&(d.firebase_id=h),i("config",u.measurementId,d),u.measurementId}
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
     */class Fn{constructor(e){this.app=e}_delete(){return delete Vn[this.app.options.appId],Promise.resolve()}}let Vn={},jn=[];const qn={};let Bn,zn,Kn="dataLayer",Hn=!1;function Gn(){const e=[];if(Je()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=Dn.create("invalid-analytics-context",{errorInfo:t});Cn.warn(n.message)}}function Wn(e,t,n){Gn();const r=e.options.appId;if(!r)throw Dn.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw Dn.create("no-api-key");Cn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=Vn[r])throw Dn.create("already-exists",{id:r});if(!Hn){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(Kn);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,r,i){let s=function(...e){window[r].push(arguments)};return window[i]&&"function"==typeof window[i]&&(s=window[i]),window[i]=Rn(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}(Vn,jn,qn,Kn,"gtag");zn=e,Bn=t,Hn=!0}Vn[r]=Un(e,jn,qn,t,Bn,Kn,n);return new Fn(e)}
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
     */function Jn(e=Pt()){const t=Rt(e=lt(e),Sn);return t.isInitialized()?t.getImmediate():function(e,t={}){const n=Rt(e,Sn);if(n.isInitialized()){const e=n.getImmediate();if(tt(t,n.getOptions()))return e;throw Dn.create("already-initialized")}return n.initialize({options:t})}(e)}function Qn(e,t,n,r){e=lt(e),async function(e,t,n,r,i){if(i&&i.global)e("event",n,r);else{const i=await t;e("event",n,Object.assign(Object.assign({},r),{send_to:i}))}}(zn,Vn[e.app.options.appId],t,n,r).catch((e=>Cn.error(e)))}const Xn="@firebase/analytics",Yn="0.7.4";Nt(new ut(Sn,((e,{options:t})=>Wn(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),Nt(new ut("analytics-internal",(function(e){try{const t=e.getProvider(Sn).getImmediate();return{logEvent:(e,n,r)=>Qn(t,e,n,r)}}catch(e){throw Dn.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),xt(Xn,Yn),xt(Xn,Yn,"esm2017");var Zn,er="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},tr=tr||{},nr=er||self;function rr(){}function ir(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function sr(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var or="closure_uid_"+(1e9*Math.random()>>>0),ar=0;function cr(e,t,n){return e.call.apply(e.bind,arguments)}function lr(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function ur(e,t,n){return(ur=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?cr:lr).apply(null,arguments)}function hr(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function dr(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function fr(){this.s=this.s,this.o=this.o}var pr={};fr.prototype.s=!1,fr.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var e=function(e){return Object.prototype.hasOwnProperty.call(e,or)&&e[or]||(e[or]=++ar)}(this);delete pr[e]}},fr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const mr=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},gr=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,i="string"==typeof e?e.split(""):e;for(let s=0;s<r;s++)s in i&&t.call(n,i[s],s,e)};function yr(e){return Array.prototype.concat.apply([],arguments)}function vr(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function wr(e){return/^[\s\xa0]*$/.test(e)}var br,Ir=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Tr(e,t){return-1!=e.indexOf(t)}function Er(e,t){return e<t?-1:e>t?1:0}e:{var _r=nr.navigator;if(_r){var kr=_r.userAgent;if(kr){br=kr;break e}}br=""}function Sr(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Ar(e){const t={};for(const n in e)t[n]=e[n];return t}var Cr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Nr(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<Cr.length;t++)n=Cr[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Rr(e){return Rr[" "](e),e}Rr[" "]=rr;var Dr,$r,Or=Tr(br,"Opera"),Pr=Tr(br,"Trident")||Tr(br,"MSIE"),xr=Tr(br,"Edge"),Lr=xr||Pr,Mr=Tr(br,"Gecko")&&!(Tr(br.toLowerCase(),"webkit")&&!Tr(br,"Edge"))&&!(Tr(br,"Trident")||Tr(br,"MSIE"))&&!Tr(br,"Edge"),Ur=Tr(br.toLowerCase(),"webkit")&&!Tr(br,"Edge");function Fr(){var e=nr.document;return e?e.documentMode:void 0}e:{var Vr="",jr=($r=br,Mr?/rv:([^\);]+)(\)|;)/.exec($r):xr?/Edge\/([\d\.]+)/.exec($r):Pr?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec($r):Ur?/WebKit\/(\S+)/.exec($r):Or?/(?:Version)[ \/]?(\S+)/.exec($r):void 0);if(jr&&(Vr=jr?jr[1]:""),Pr){var qr=Fr();if(null!=qr&&qr>parseFloat(Vr)){Dr=String(qr);break e}}Dr=Vr}var Br,zr={};function Kr(){return function(e){var t=zr;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=Ir(String(Dr)).split("."),n=Ir("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=Er(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||Er(0==i[2].length,0==s[2].length)||Er(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(nr.document&&Pr){var Hr=Fr();Br=Hr||(parseInt(Dr,10)||void 0)}else Br=void 0;var Gr=Br,Wr=function(){if(!nr.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{nr.addEventListener("test",rr,t),nr.removeEventListener("test",rr,t)}catch(e){}return e}();function Jr(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function Qr(e,t){if(Jr.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Mr){e:{try{Rr(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Xr[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Qr.Z.h.call(this)}}Jr.prototype.h=function(){this.defaultPrevented=!0},dr(Qr,Jr);var Xr={2:"touch",3:"pen",4:"mouse"};Qr.prototype.h=function(){Qr.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Yr="closure_listenable_"+(1e6*Math.random()|0),Zr=0;function ei(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++Zr,this.ca=this.fa=!1}function ti(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function ni(e){this.src=e,this.g={},this.h=0}function ri(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=mr(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ti(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ii(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==r)return i}return-1}ni.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=ii(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):((t=new ei(t,this.src,s,!!r,i)).fa=n,e.push(t)),t};var si="closure_lm_"+(1e6*Math.random()|0),oi={};function ai(e,t,n,r,i){if(r&&r.once)return li(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)ai(e,t[s],n,r,i);return null}return n=gi(n),e&&e[Yr]?e.N(t,n,sr(r)?!!r.capture:!!r,i):ci(e,t,n,!1,r,i)}function ci(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=sr(i)?!!i.capture:!!i,a=pi(e);if(a||(e[si]=a=new ni(e)),(n=a.add(t,n,r,o,s)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}var t=fi;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Wr||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(di(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function li(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)li(e,t[s],n,r,i);return null}return n=gi(n),e&&e[Yr]?e.O(t,n,sr(r)?!!r.capture:!!r,i):ci(e,t,n,!0,r,i)}function ui(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)ui(e,t[s],n,r,i);else r=sr(r)?!!r.capture:!!r,n=gi(n),e&&e[Yr]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=ii(s=e.g[t],n,r,i))&&(ti(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=pi(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ii(t,n,r,i)),(n=-1<e?t[e]:null)&&hi(n))}function hi(e){if("number"!=typeof e&&e&&!e.ca){var t=e.src;if(t&&t[Yr])ri(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(di(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=pi(t))?(ri(n,e),0==n.h&&(n.src=null,t[si]=null)):ti(e)}}}function di(e){return e in oi?oi[e]:oi[e]="on"+e}function fi(e,t){if(e.ca)e=!0;else{t=new Qr(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&hi(e),e=n.call(r,t)}return e}function pi(e){return(e=e[si])instanceof ni?e:null}var mi="__closure_events_fn_"+(1e9*Math.random()>>>0);function gi(e){return"function"==typeof e?e:(e[mi]||(e[mi]=function(t){return e.handleEvent(t)}),e[mi])}function yi(){fr.call(this),this.i=new ni(this),this.P=this,this.I=null}function vi(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new Jr(t,e);else if(t instanceof Jr)t.target=t.target||e;else{var i=t;Nr(t=new Jr(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=wi(o,r,!0,t)&&i}if(i=wi(o=t.g=e,r,!0,t)&&i,i=wi(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=wi(o=t.g=n[s],r,!1,t)&&i}function wi(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&ri(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}dr(yi,fr),yi.prototype[Yr]=!0,yi.prototype.removeEventListener=function(e,t,n,r){ui(this,e,t,n,r)},yi.prototype.M=function(){if(yi.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ti(n[r]);delete t.g[e],t.h--}}this.I=null},yi.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},yi.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var bi=nr.JSON.stringify;function Ii(){var e=Ci;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Ti,Ei=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new _i),(e=>e.reset()));class _i{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function ki(e){nr.setTimeout((()=>{throw e}),0)}function Si(e,t){Ti||function(){var e=nr.Promise.resolve(void 0);Ti=function(){e.then(Ni)}}(),Ai||(Ti(),Ai=!0),Ci.add(e,t)}var Ai=!1,Ci=new class{constructor(){this.h=this.g=null}add(e,t){const n=Ei.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function Ni(){for(var e;e=Ii();){try{e.h.call(e.g)}catch(e){ki(e)}var t=Ei;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ai=!1}function Ri(e,t){yi.call(this),this.h=e||1,this.g=t||nr,this.j=ur(this.kb,this),this.l=Date.now()}function Di(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function $i(e,t,n){if("function"==typeof e)n&&(e=ur(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=ur(e.handleEvent,e)}return 2147483647<Number(t)?-1:nr.setTimeout(e,t||0)}function Oi(e){e.g=$i((()=>{e.g=null,e.i&&(e.i=!1,Oi(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}dr(Ri,yi),(Zn=Ri.prototype).da=!1,Zn.S=null,Zn.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),vi(this,"tick"),this.da&&(Di(this),this.start()))}},Zn.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Zn.M=function(){Ri.Z.M.call(this),Di(this),delete this.g};class Pi extends fr{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Oi(this)}M(){super.M(),this.g&&(nr.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xi(e){fr.call(this),this.h=e,this.g={}}dr(xi,fr);var Li=[];function Mi(e,t,n,r){Array.isArray(n)||(n&&(Li[0]=n.toString()),n=Li);for(var i=0;i<n.length;i++){var s=ai(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Ui(e){Sr(e.g,(function(e,t){this.g.hasOwnProperty(t)&&hi(e)}),e),e.g={}}function Fi(){this.g=!0}function Vi(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return bi(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}xi.prototype.M=function(){xi.Z.M.call(this),Ui(this)},xi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Fi.prototype.Aa=function(){this.g=!1},Fi.prototype.info=function(){};var ji={},qi=null;function Bi(){return qi=qi||new yi}function zi(e){Jr.call(this,ji.Ma,e)}function Ki(e){const t=Bi();vi(t,new zi(t,e))}function Hi(e,t){Jr.call(this,ji.STAT_EVENT,e),this.stat=t}function Gi(e){const t=Bi();vi(t,new Hi(t,e))}function Wi(e,t){Jr.call(this,ji.Na,e),this.size=t}function Ji(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return nr.setTimeout((function(){e()}),t)}ji.Ma="serverreachability",dr(zi,Jr),ji.STAT_EVENT="statevent",dr(Hi,Jr),ji.Na="timingevent",dr(Wi,Jr);var Qi={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Xi={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Yi(){}function Zi(e){return e.h||(e.h=e.i())}function es(){}Yi.prototype.h=null;var ts,ns={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function rs(){Jr.call(this,"d")}function is(){Jr.call(this,"c")}function ss(){}function os(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new xi(this),this.P=cs,e=Lr?125:void 0,this.W=new Ri(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new as}function as(){this.i=null,this.g="",this.h=!1}dr(rs,Jr),dr(is,Jr),dr(ss,Yi),ss.prototype.g=function(){return new XMLHttpRequest},ss.prototype.i=function(){return{}},ts=new ss;var cs=45e3,ls={},us={};function hs(e,t,n){e.K=1,e.v=Ps(Cs(t)),e.s=n,e.U=!0,ds(e,null)}function ds(e,t){e.F=Date.now(),gs(e),e.A=Cs(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),Gs(n.h,"t",r),e.C=0,n=e.l.H,e.h=new as,e.g=Wo(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Pi(ur(e.Ia,e,e.g),e.O)),Mi(e.V,e.g,"readystatechange",e.gb),t=e.H?Ar(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Ki(1),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.X,e.s)}function fs(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function ps(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=ms(e,n),r==us){4==t&&(e.o=4,Gi(14),i=!1),Vi(e.j,e.m,null,"[Incomplete Response]");break}if(r==ls){e.o=4,Gi(15),Vi(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Vi(e.j,e.m,r,null),Is(e,r)}fs(e)&&r!=us&&r!=ls&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Gi(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,(t=e.l).g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Vo(t),t.L=!0,Gi(11))):(Vi(e.j,e.m,n,"[Invalid Chunked Response]"),bs(e),ws(e))}function ms(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?us:(n=Number(t.substring(n,r)),isNaN(n)?ls:(r+=1)+n>t.length?us:(t=t.substr(r,n),e.C=r+n,t))}function gs(e){e.Y=Date.now()+e.P,ys(e,e.P)}function ys(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Ji(ur(e.eb,e),t)}function vs(e){e.B&&(nr.clearTimeout(e.B),e.B=null)}function ws(e){0==e.l.G||e.I||Bo(e.l,e)}function bs(e){vs(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Di(e.W),Ui(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Is(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||Zs(n.i,e)))if(n.I=e.N,!e.J&&Zs(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;qo(n),Do(n)}Fo(n),Gi(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=Ji(ur(n.ab,n),6e3));if(1>=Ys(n.i)&&n.ka){try{n.ka()}catch(e){}n.ka=void 0}}else Ko(n,11)}else if((e.J||n.g==e)&&qo(n),!wr(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(n.U=l[0],l=l[1],2==n.G)if("c"==l[0]){n.J=l[1],n.la=l[2];const t=l[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const i=l[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const u=l[5];null!=u&&"number"==typeof u&&0<u&&(r=1.5*u,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;!s.g&&(Tr(e,"spdy")||Tr(e,"quic")||Tr(e,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(eo(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,Os(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=e;if((r=n).oa=Go(r,r.H?r.la:null,r.W),o.J){to(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(vs(a),gs(a)),r.g=o}else Uo(r);0<n.l.length&&Po(n)}else"stop"!=l[0]&&"close"!=l[0]||Ko(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?Ko(n,7):Ro(n):"noop"!=l[0]&&n.j&&n.j.wa(l),n.A=0)}Ki(4)}catch(e){}}function Ts(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(ir(e)||"string"==typeof e)gr(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(ir(e)||"string"==typeof e){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;r=function(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"==typeof e)return e.split("");if(ir(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length;for(var s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}}function Es(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof Es)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function _s(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];ks(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)ks(i,r=e.g[t])||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}function ks(e,t){return Object.prototype.hasOwnProperty.call(e,t)}(Zn=os.prototype).setTimeout=function(e){this.P=e},Zn.gb=function(e){e=e.target;const t=this.L;t&&3==ko(e)?t.l():this.Ia(e)},Zn.Ia=function(e){try{if(e==this.g)e:{const u=ko(this.g);var t=this.g.Da();const h=this.g.ba();if(!(3>u)&&(3!=u||Lr||this.g&&(this.h.h||this.g.ga()||So(this.g)))){this.I||4!=u||7==t||Ki(8==t||0>=h?3:2),vs(this);var n=this.g.ba();this.N=n;t:if(fs(this)){var r=So(this.g);e="";var i=r.length,s=4==ko(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){bs(this),ws(this);var o="";break t}this.h.i=new nr.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!wr(a)){var l=a;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,Gi(12),bs(this),ws(this);break e}Vi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Is(this,n)}this.U?(ps(this,u,o),Lr&&this.i&&3==u&&(Mi(this.V,this.W,"tick",this.fb),this.W.start())):(Vi(this.j,this.m,o,null),Is(this,o)),4==u&&bs(this),this.i&&!this.I&&(4==u?Bo(this.l,this):(this.i=!1,gs(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Gi(12)):(this.o=0,Gi(13)),bs(this),ws(this)}}}catch(e){}},Zn.fb=function(){if(this.g){var e=ko(this.g),t=this.g.ga();this.C<t.length&&(vs(this),ps(this,e,t),this.i&&4!=e&&gs(this))}},Zn.cancel=function(){this.I=!0,bs(this)},Zn.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(Ki(3),Gi(17)),bs(this),this.o=2,ws(this)):ys(this,this.Y-e)},(Zn=Es.prototype).R=function(){_s(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},Zn.T=function(){return _s(this),this.g.concat()},Zn.get=function(e,t){return ks(this.h,e)?this.h[e]:t},Zn.set=function(e,t){ks(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},Zn.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);e.call(t,s,i,this)}};var Ss=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function As(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof As){this.g=void 0!==t?t:e.g,Ns(this,e.j),this.s=e.s,Rs(this,e.i),Ds(this,e.m),this.l=e.l,t=e.h;var n=new Bs;n.i=t.i,t.g&&(n.g=new Es(t.g),n.h=t.h),$s(this,n),this.o=e.o}else e&&(n=String(e).match(Ss))?(this.g=!!t,Ns(this,n[1]||"",!0),this.s=xs(n[2]||""),Rs(this,n[3]||"",!0),Ds(this,n[4]),this.l=xs(n[5]||"",!0),$s(this,n[6]||"",!0),this.o=xs(n[7]||"")):(this.g=!!t,this.h=new Bs(null,this.g))}function Cs(e){return new As(e)}function Ns(e,t,n){e.j=n?xs(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Rs(e,t,n){e.i=n?xs(t,!0):t}function Ds(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function $s(e,t,n){t instanceof Bs?(e.h=t,function(e,t){t&&!e.j&&(zs(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Ks(this,t),Gs(this,n,e))}),e)),e.j=t}(e.h,e.g)):(n||(t=Ls(t,js)),e.h=new Bs(t,e.g))}function Os(e,t,n){e.h.set(t,n)}function Ps(e){return Os(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function xs(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ls(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Ms),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Ms(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}As.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ls(t,Us,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Ls(t,Us,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(Ls(n,"/"==n.charAt(0)?Vs:Fs,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ls(n,qs)),e.join("")};var Us=/[#\/\?@]/g,Fs=/[#\?:]/g,Vs=/[#\?]/g,js=/[#\?@]/g,qs=/#/g;function Bs(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function zs(e){e.g||(e.g=new Es,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Ks(e,t){zs(e),t=Ws(e,t),ks(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,ks((e=e.g).h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&_s(e)))}function Hs(e,t){return zs(e),t=Ws(e,t),ks(e.g.h,t)}function Gs(e,t,n){Ks(e,t),0<n.length&&(e.i=null,e.g.set(Ws(e,t),vr(n)),e.h+=n.length)}function Ws(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(Zn=Bs.prototype).add=function(e,t){zs(this),this.i=null,e=Ws(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},Zn.forEach=function(e,t){zs(this),this.g.forEach((function(n,r){gr(n,(function(n){e.call(t,n,r,this)}),this)}),this)},Zn.T=function(){zs(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],s=0;s<i.length;s++)n.push(t[r]);return n},Zn.R=function(e){zs(this);var t=[];if("string"==typeof e)Hs(this,e)&&(t=yr(t,this.g.get(Ws(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=yr(t,e[n])}return t},Zn.set=function(e,t){return zs(this),this.i=null,Hs(this,e=Ws(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},Zn.get=function(e,t){return e&&0<(e=this.R(e)).length?String(e[0]):t},Zn.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),e.push(o)}}return this.i=e.join("&")};function Js(e){this.l=e||Qs,nr.PerformanceNavigationTiming?e=0<(e=nr.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(nr.g&&nr.g.Ea&&nr.g.Ea()&&nr.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Qs=10;function Xs(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Ys(e){return e.h?1:e.g?e.g.size:0}function Zs(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function eo(e,t){e.g?e.g.add(t):e.h=t}function to(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function no(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return vr(e.i)}function ro(){}function io(){this.g=new ro}function so(e,t,n){const r=n||"";try{Ts(e,(function(e,n){let i=e;sr(e)&&(i=bi(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function oo(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function ao(e){this.l=e.$b||null,this.j=e.ib||!1}function co(e,t){yi.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=lo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Js.prototype.cancel=function(){if(this.i=no(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},ro.prototype.stringify=function(e){return nr.JSON.stringify(e,void 0)},ro.prototype.parse=function(e){return nr.JSON.parse(e,void 0)},dr(ao,Yi),ao.prototype.g=function(){return new co(this.l,this.j)},ao.prototype.i=function(e){return function(){return e}}({}),dr(co,yi);var lo=0;function uo(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function ho(e){e.readyState=4,e.l=null,e.j=null,e.A=null,fo(e)}function fo(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(Zn=co.prototype).open=function(e,t){if(this.readyState!=lo)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,fo(this)},Zn.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||nr).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},Zn.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ho(this)),this.readyState=lo},Zn.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,fo(this)),this.g&&(this.readyState=3,fo(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==nr.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;uo(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},Zn.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ho(this):fo(this),3==this.readyState&&uo(this)}},Zn.Ua=function(e){this.g&&(this.response=this.responseText=e,ho(this))},Zn.Ta=function(e){this.g&&(this.response=e,ho(this))},Zn.ha=function(){this.g&&ho(this)},Zn.setRequestHeader=function(e,t){this.v.append(e,t)},Zn.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},Zn.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(co.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var po=nr.JSON.parse;function mo(e){yi.call(this),this.headers=new Es,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=go,this.K=this.L=!1}dr(mo,yi);var go="",yo=/^https?$/i,vo=["POST","PUT"];function wo(e){return"content-type"==e.toLowerCase()}function bo(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Io(e),Eo(e)}function Io(e){e.D||(e.D=!0,vi(e,"complete"),vi(e,"error"))}function To(e){if(e.h&&void 0!==tr&&(!e.C[1]||4!=ko(e)||2!=e.ba()))if(e.v&&4==ko(e))$i(e.Fa,0,e);else if(vi(e,"readystatechange"),4==ko(e)){e.h=!1;try{const a=e.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var i=String(e.H).match(Ss)[1]||null;if(!i&&nr.self&&nr.self.location){var s=nr.self.location.protocol;i=s.substr(0,s.length-1)}r=!yo.test(i?i.toLowerCase():"")}n=r}if(n)vi(e,"complete"),vi(e,"success");else{e.m=6;try{var o=2<ko(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.ba()+"]",Io(e)}}finally{Eo(e)}}}function Eo(e,t){if(e.g){_o(e);const n=e.g,r=e.C[0]?rr:null;e.g=null,e.C=null,t||vi(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function _o(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(nr.clearTimeout(e.A),e.A=null)}function ko(e){return e.g?e.g.readyState:0}function So(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case go:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Ao(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=function(e){let t="";return Sr(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Os(e,t,n))}function Co(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function No(e){this.za=0,this.l=[],this.h=new Fi,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Co("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Co("baseRetryDelayMs",5e3,e),this.$a=Co("retryDelaySeedMs",1e4,e),this.Ya=Co("forwardChannelMaxRetries",2,e),this.ra=Co("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new Js(e&&e.concurrentRequestLimit),this.Ca=new io,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function Ro(e){if($o(e),3==e.G){var t=e.V++,n=Cs(e.F);Os(n,"SID",e.J),Os(n,"RID",t),Os(n,"TYPE","terminate"),Lo(e,n),(t=new os(e,e.h,t,void 0)).K=2,t.v=Ps(Cs(n)),n=!1,nr.navigator&&nr.navigator.sendBeacon&&(n=nr.navigator.sendBeacon(t.v.toString(),"")),!n&&nr.Image&&((new Image).src=t.v,n=!0),n||(t.g=Wo(t.l,null),t.g.ea(t.v)),t.F=Date.now(),gs(t)}Ho(e)}function Do(e){e.g&&(Vo(e),e.g.cancel(),e.g=null)}function $o(e){Do(e),e.u&&(nr.clearTimeout(e.u),e.u=null),qo(e),e.i.cancel(),e.m&&("number"==typeof e.m&&nr.clearTimeout(e.m),e.m=null)}function Oo(e,t){e.l.push(new class{constructor(e,t){this.h=e,this.g=t}}(e.Za++,t)),3==e.G&&Po(e)}function Po(e){Xs(e.i)||e.m||(e.m=!0,Si(e.Ha,e),e.C=0)}function xo(e,t){var n;n=t?t.m:e.V++;const r=Cs(e.F);Os(r,"SID",e.J),Os(r,"RID",n),Os(r,"AID",e.U),Lo(e,r),e.o&&e.s&&Ao(r,e.o,e.s),n=new os(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Mo(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),eo(e.i,n),hs(n,r,t)}function Lo(e,t){e.j&&Ts({},(function(e,n){Os(t,n,e)}))}function Mo(e,t,n){n=Math.min(e.l.length,n);var r=e.j?ur(e.j.Oa,e.j,e):null;e:{var i=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=t,0>n)t=Math.max(0,i[o].h-100),s=!1;else try{so(a,e,"req"+n+"_")}catch(e){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function Uo(e){e.g||e.u||(e.Y=1,Si(e.Ga,e),e.A=0)}function Fo(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=Ji(ur(e.Ga,e),zo(e,e.A)),e.A++,!0)}function Vo(e){null!=e.B&&(nr.clearTimeout(e.B),e.B=null)}function jo(e){e.g=new os(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Cs(e.oa);Os(t,"RID","rpc"),Os(t,"SID",e.J),Os(t,"CI",e.N?"0":"1"),Os(t,"AID",e.U),Lo(e,t),Os(t,"TYPE","xmlhttp"),e.o&&e.s&&Ao(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=Ps(Cs(t)),n.s=null,n.U=!0,ds(n,e)}function qo(e){null!=e.v&&(nr.clearTimeout(e.v),e.v=null)}function Bo(e,t){var n=null;if(e.g==t){qo(e),Vo(e),e.g=null;var r=2}else{if(!Zs(e.i,t))return;n=t.D,to(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;vi(r=Bi(),new Wi(r,n,t,i)),Po(e)}else Uo(e);else if(3==(i=t.o)||0==i&&0<e.I||!(1==r&&function(e,t){return!(Ys(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.l=t.D.concat(e.l),0):1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya)||(e.m=Ji(ur(e.Ha,e,t),zo(e,e.C)),e.C++,0)))}(e,t)||2==r&&Fo(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Ko(e,5);break;case 4:Ko(e,10);break;case 3:Ko(e,6);break;default:Ko(e,2)}}function zo(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function Ko(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=ur(e.jb,e);n||(n=new As("//www.google.com/images/cleardot.gif"),nr.location&&"http"==nr.location.protocol||Ns(n,"https"),Ps(n)),function(e,t){const n=new Fi;if(nr.Image){const r=new Image;r.onload=hr(oo,n,r,"TestLoadImage: loaded",!0,t),r.onerror=hr(oo,n,r,"TestLoadImage: error",!1,t),r.onabort=hr(oo,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=hr(oo,n,r,"TestLoadImage: timeout",!1,t),nr.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else Gi(2);e.G=0,e.j&&e.j.va(t),Ho(e),$o(e)}function Ho(e){e.G=0,e.I=-1,e.j&&(0==no(e.i).length&&0==e.l.length||(e.i.i.length=0,vr(e.l),e.l.length=0),e.j.ua())}function Go(e,t,n){let r=function(e){return e instanceof As?Cs(e):new As(e,void 0)}(n);if(""!=r.i)t&&Rs(r,t+"."+r.i),Ds(r,r.m);else{const e=nr.location;r=function(e,t,n,r){var i=new As(null,void 0);return e&&Ns(i,e),t&&Rs(i,t),n&&Ds(i,n),r&&(i.l=r),i}(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&Sr(e.aa,(function(e,t){Os(r,t,e)})),t=e.D,n=e.sa,t&&n&&Os(r,t,n),Os(r,"VER",e.ma),Lo(e,r),r}function Wo(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ba&&!e.qa?new mo(new ao({ib:!0})):new mo(e.qa)).L=e.H,t}function Jo(){}function Qo(){if(Pr&&!(10<=Number(Gr)))throw Error("Environmental error: no available transport.")}function Xo(e,t){yi.call(this),this.g=new No(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!wr(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!wr(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new ea(this)}function Yo(e){rs.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Zo(){is.call(this),this.status=1}function ea(e){this.g=e}(Zn=mo.prototype).ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ts.g(),this.C=this.u?Zi(this.u):Zi(ts),this.g.onreadystatechange=ur(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void bo(this,e)}e=n||"";const i=new Es(this.headers);r&&Ts(r,(function(e,t){i.set(t,e)})),r=function(e){e:{var t=wo;const n=e.length,r="string"==typeof e?e.split(""):e;for(let i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:"string"==typeof e?e.charAt(t):e[t]}(i.T()),n=nr.FormData&&e instanceof nr.FormData,!(0<=mr(vo,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{_o(this),0<this.B&&((this.K=function(e){return Pr&&Kr()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ur(this.pa,this)):this.A=$i(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){bo(this,e)}},Zn.pa=function(){void 0!==tr&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,vi(this,"timeout"),this.abort(8))},Zn.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,vi(this,"complete"),vi(this,"abort"),Eo(this))},Zn.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Eo(this,!0)),mo.Z.M.call(this)},Zn.Fa=function(){this.s||(this.F||this.v||this.l?To(this):this.cb())},Zn.cb=function(){To(this)},Zn.ba=function(){try{return 2<ko(this)?this.g.status:-1}catch(e){return-1}},Zn.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},Zn.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),po(t)}},Zn.Da=function(){return this.m},Zn.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(Zn=No.prototype).ma=8,Zn.G=1,Zn.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(e){}},Zn.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new os(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?(s=Ar(s),Nr(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Mo(this,i,t),Os(n=Cs(this.F),"RID",e),Os(n,"CVER",22),this.D&&Os(n,"X-HTTP-Session-Id",this.D),Lo(this,n),this.o&&s&&Ao(n,this.o,s),eo(this.i,i),this.Ra&&Os(n,"TYPE","init"),this.ja?(Os(n,"$req",t),Os(n,"SID","null"),i.$=!0,hs(i,n,null)):hs(i,n,t),this.G=2}}else 3==this.G&&(e?xo(this,e):0==this.l.length||Xs(this.i)||xo(this))},Zn.Ga=function(){if(this.u=null,jo(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=Ji(ur(this.bb,this),e)}},Zn.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Gi(10),Do(this),jo(this))},Zn.ab=function(){null!=this.v&&(this.v=null,Do(this),Fo(this),Gi(19))},Zn.jb=function(e){e?(this.h.info("Successfully pinged google.com"),Gi(2)):(this.h.info("Failed to ping google.com"),Gi(1))},(Zn=Jo.prototype).xa=function(){},Zn.wa=function(){},Zn.va=function(){},Zn.ua=function(){},Zn.Oa=function(){},Qo.prototype.g=function(e,t){return new Xo(e,t)},dr(Xo,yi),Xo.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Si(ur(e.hb,e,t))),Gi(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=Go(e,null,e.W),Po(e)},Xo.prototype.close=function(){Ro(this.g)},Xo.prototype.u=function(e){if("string"==typeof e){var t={};t.__data__=e,Oo(this.g,t)}else this.v?((t={}).__data__=bi(e),Oo(this.g,t)):Oo(this.g,e)},Xo.prototype.M=function(){this.g.j=null,delete this.j,Ro(this.g),delete this.g,Xo.Z.M.call(this)},dr(Yo,rs),dr(Zo,is),dr(ea,Jo),ea.prototype.xa=function(){vi(this.g,"a")},ea.prototype.wa=function(e){vi(this.g,new Yo(e))},ea.prototype.va=function(e){vi(this.g,new Zo(e))},ea.prototype.ua=function(){vi(this.g,"b")},Qo.prototype.createWebChannel=Qo.prototype.g,Xo.prototype.send=Xo.prototype.u,Xo.prototype.open=Xo.prototype.m,Xo.prototype.close=Xo.prototype.close,Qi.NO_ERROR=0,Qi.TIMEOUT=8,Qi.HTTP_ERROR=6,Xi.COMPLETE="complete",es.EventType=ns,ns.OPEN="a",ns.CLOSE="b",ns.ERROR="c",ns.MESSAGE="d",yi.prototype.listen=yi.prototype.N,mo.prototype.listenOnce=mo.prototype.O,mo.prototype.getLastError=mo.prototype.La,mo.prototype.getLastErrorCode=mo.prototype.Da,mo.prototype.getStatus=mo.prototype.ba,mo.prototype.getResponseJson=mo.prototype.Qa,mo.prototype.getResponseText=mo.prototype.ga,mo.prototype.send=mo.prototype.ea;var ta=Qi,na=Xi,ra=ji,ia=10,sa=11,oa=ao,aa=es,ca=mo;const la="@firebase/firestore";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ua{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ua.UNAUTHENTICATED=new ua(null),ua.GOOGLE_CREDENTIALS=new ua("google-credentials-uid"),ua.FIRST_PARTY=new ua("first-party-uid"),ua.MOCK_USER=new ua("mock-user");
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
let ha="9.6.1";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const da=new wt("@firebase/firestore");function fa(){return da.logLevel}function pa(e,...t){if(da.logLevel<=pt.DEBUG){const n=t.map(va);da.debug(`Firestore (${ha}): ${e}`,...n)}}function ma(e,...t){if(da.logLevel<=pt.ERROR){const n=t.map(va);da.error(`Firestore (${ha}): ${e}`,...n)}}function ya(e,...t){if(da.logLevel<=pt.WARN){const n=t.map(va);da.warn(`Firestore (${ha}): ${e}`,...n)}}function va(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
     */function wa(e="Unexpected state"){const t=`FIRESTORE (${ha}) INTERNAL ASSERTION FAILED: `+e;throw ma(t),new Error(t)}function ba(e,t){e||wa()}function Ia(e,t){return e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Ta={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ea extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class _a{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ka{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Sa{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ua.UNAUTHENTICATED)))}shutdown(){}}class Aa{constructor(e){this.t=e,this.currentUser=ua.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new _a;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new _a,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{pa("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(pa("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new _a)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(pa("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(ba("string"==typeof t.accessToken),new ka(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ba(null===e||"string"==typeof e),new ua(e)}}class Ca{constructor(e,t,n){this.type="FirstParty",this.user=ua.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class Na{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new Ca(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(ua.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ra{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Da{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null}start(e,t){this.o=n=>{e.enqueueRetryable((()=>(e=>(null!=e.error&&pa("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`),t(e.token)))(n)))};const n=e=>{pa("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit((e=>n(e))),setTimeout((()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?n(e):pa("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(ba("string"==typeof e.token),new Ra(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
     */class $a{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.p(e),this.T=e=>t.writeSequenceNumber(e))}p(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Oa(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */$a.I=-1;class Pa{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=Oa(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function xa(e,t){return e<t?-1:e>t?1:0}function La(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ma{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Ea(Ta.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Ea(Ta.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Ea(Ta.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Ea(Ta.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ma.fromMillis(Date.now())}static fromDate(e){return Ma.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Ma(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?xa(this.nanoseconds,e.nanoseconds):xa(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ua{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ua(e)}static min(){return new Ua(new Ma(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Fa(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Va(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ja(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class qa{constructor(e,t,n){void 0===t?t=0:t>e.length&&wa(),void 0===n?n=e.length-t:n>e.length-t&&wa(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===qa.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof qa?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ba extends qa{construct(e,t,n){return new Ba(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Ea(Ta.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Ba(t)}static emptyPath(){return new Ba([])}}const za=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ka extends qa{construct(e,t,n){return new Ka(e,t,n)}static isValidIdentifier(e){return za.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ka.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ka(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Ea(Ta.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Ea(Ta.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Ea(Ta.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new Ea(Ta.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ka(t)}static emptyPath(){return new Ka([])}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ha{constructor(e){this.fields=e,e.sort(Ka.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return La(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ga{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Ga(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Ga(t)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xa(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ga.EMPTY_BYTE_STRING=new Ga("");const Wa=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ja(e){if(ba(!!e),"string"==typeof e){let t=0;const n=Wa.exec(e);if(ba(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Qa(e.seconds),nanos:Qa(e.nanos)}}function Qa(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Xa(e){return"string"==typeof e?Ga.fromBase64String(e):Ga.fromUint8Array(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ya(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Za(e){const t=e.mapValue.fields.__previous_value__;return Ya(t)?Za(t):t}function ec(e){const t=Ja(e.mapValue.fields.__local_write_time__.timestampValue);return new Ma(t.seconds,t.nanos)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function tc(e){return null==e}function nc(e){return 0===e&&1/e==-1/0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class rc{constructor(e){this.path=e}static fromPath(e){return new rc(Ba.fromString(e))}static fromName(e){return new rc(Ba.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===Ba.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Ba.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new rc(new Ba(e.slice()))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ic(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ya(e)?4:10:wa()}function sc(e,t){const n=ic(e);if(n!==ic(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ec(e).isEqual(ec(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Ja(e.timestampValue),r=Ja(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Xa(e.bytesValue).isEqual(Xa(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Qa(e.geoPointValue.latitude)===Qa(t.geoPointValue.latitude)&&Qa(e.geoPointValue.longitude)===Qa(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Qa(e.integerValue)===Qa(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Qa(e.doubleValue),r=Qa(t.doubleValue);return n===r?nc(n)===nc(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return La(e.arrayValue.values||[],t.arrayValue.values||[],sc);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Fa(n)!==Fa(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!sc(n[e],r[e])))return!1;return!0}(e,t);default:return wa()}}function oc(e,t){return void 0!==(e.values||[]).find((e=>sc(e,t)))}function ac(e,t){const n=ic(e),r=ic(t);if(n!==r)return xa(n,r);switch(n){case 0:return 0;case 1:return xa(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Qa(e.integerValue||e.doubleValue),r=Qa(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return cc(e.timestampValue,t.timestampValue);case 4:return cc(ec(e),ec(t));case 5:return xa(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Xa(e),r=Xa(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=xa(n[e],r[e]);if(0!==t)return t}return xa(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=xa(Qa(e.latitude),Qa(t.latitude));return 0!==n?n:xa(Qa(e.longitude),Qa(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=ac(n[e],r[e]);if(t)return t}return xa(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){const t=xa(r[e],s[e]);if(0!==t)return t;const o=ac(n[r[e]],i[s[e]]);if(0!==o)return o}return xa(r.length,s.length)}(e.mapValue,t.mapValue);default:throw wa()}}function cc(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return xa(e,t);const n=Ja(e),r=Ja(t),i=xa(n.seconds,r.seconds);return 0!==i?i:xa(n.nanos,r.nanos)}function lc(e){return uc(e)}function uc(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Ja(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Xa(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,rc.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=uc(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${uc(e.fields[i])}`;return n+"}"}(e.mapValue):wa();var t,n}function hc(e){return!!e&&"integerValue"in e}function dc(e){return!!e&&"arrayValue"in e}function fc(e){return!!e&&"nullValue"in e}function pc(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function mc(e){return!!e&&"mapValue"in e}function gc(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Va(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=gc(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=gc(e.arrayValue.values[n]);return t}return Object.assign({},e)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class yc{constructor(e){this.value=e}static empty(){return new yc({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!mc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=gc(t)}setAll(e){let t=Ka.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=gc(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());mc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return sc(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];mc(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Va(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new yc(gc(this.value))}}function vc(e){const t=[];return Va(e.fields,((e,n)=>{const r=new Ka([e]);if(mc(n)){const e=vc(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Ha(t)
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class wc{constructor(e,t,n,r,i){this.key=e,this.documentType=t,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(e){return new wc(e,0,Ua.min(),yc.empty(),0)}static newFoundDocument(e,t,n){return new wc(e,1,t,n,0)}static newNoDocument(e,t){return new wc(e,2,t,yc.empty(),0)}static newUnknownDocument(e,t){return new wc(e,3,t,yc.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yc.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yc.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof wc&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new wc(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
     */class bc{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.R=null}}function Ic(e,t=null,n=[],r=[],i=null,s=null,o=null){return new bc(e,t,n,r,i,s,o)}function Tc(e){const t=Ia(e);if(null===t.R){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>function(e){return e.field.canonicalString()+e.op.toString()+lc(e.value)}(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),tc(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=xc(t.startAt)),t.endAt&&(e+="|ub:",e+=xc(t.endAt)),t.R=e}return t.R}function Ec(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Mc(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!sc(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Fc(e.startAt,t.startAt)&&Fc(e.endAt,t.endAt)}function _c(e){return rc.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class kc extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.P(e,t,n):new Sc(e,t,n):"array-contains"===t?new Rc(e,n):"in"===t?new Dc(e,n):"not-in"===t?new $c(e,n):"array-contains-any"===t?new Oc(e,n):new kc(e,t,n)}static P(e,t,n){return"in"===t?new Ac(e,n):new Cc(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.v(ac(t,this.value)):null!==t&&ic(this.value)===ic(t)&&this.v(ac(t,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return wa()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Sc extends kc{constructor(e,t,n){super(e,t,n),this.key=rc.fromName(n.referenceValue)}matches(e){const t=rc.comparator(e.key,this.key);return this.v(t)}}class Ac extends kc{constructor(e,t){super(e,"in",t),this.keys=Nc("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Cc extends kc{constructor(e,t){super(e,"not-in",t),this.keys=Nc("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Nc(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>rc.fromName(e.referenceValue)))}class Rc extends kc{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return dc(t)&&oc(t.arrayValue,this.value)}}class Dc extends kc{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&oc(this.value.arrayValue,t)}}class $c extends kc{constructor(e,t){super(e,"not-in",t)}matches(e){if(oc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!oc(this.value.arrayValue,t)}}class Oc extends kc{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!dc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>oc(this.value.arrayValue,e)))}}class Pc{constructor(e,t){this.position=e,this.before=t}}function xc(e){return`${e.before?"b":"a"}:${e.position.map((e=>lc(e))).join(",")}`}class Lc{constructor(e,t="asc"){this.field=e,this.dir=t}}function Mc(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Uc(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?rc.comparator(rc.fromName(o.referenceValue),n.key):ac(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return e.before?r<=0:r<0}function Fc(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.before!==t.before||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!sc(e.position[n],t.position[n]))return!1;return!0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Vc{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.S=null,this.D=null,this.startAt,this.endAt}}function jc(e){return new Vc(e)}function qc(e){return!tc(e.limit)&&"F"===e.limitType}function Bc(e){return!tc(e.limit)&&"L"===e.limitType}function zc(e){const t=Ia(e);if(null===t.S){t.S=[];const e=function(e){for(const t of e.filters)if(t.V())return t.field;return null}(t),n=function(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}(t);if(null!==e&&null===n)e.isKeyField()||t.S.push(new Lc(e)),t.S.push(new Lc(Ka.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.S.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.S.push(new Lc(Ka.keyField(),e))}}}return t.S}function Kc(e){const t=Ia(e);if(!t.D)if("F"===t.limitType)t.D=Ic(t.path,t.collectionGroup,zc(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of zc(t)){const t="desc"===n.dir?"asc":"desc";e.push(new Lc(n.field,t))}const n=t.endAt?new Pc(t.endAt.position,!t.endAt.before):null,r=t.startAt?new Pc(t.startAt.position,!t.startAt.before):null;t.D=Ic(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.D}function Hc(e,t){return Ec(Kc(e),Kc(t))&&e.limitType===t.limitType}function Gc(e){return`${Tc(Kc(e))}|lt:${e.limitType}`}function Wc(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${lc(t.value)}`;var t})).join(", ")}]`),tc(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: "+xc(e.startAt)),e.endAt&&(t+=", endAt: "+xc(e.endAt)),`Target(${t})`}(Kc(e))}; limitType=${e.limitType})`}function Jc(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):rc.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!Uc(e.startAt,zc(e),t))&&(!e.endAt||!Uc(e.endAt,zc(e),t))}(e,t)}function Qc(e){return(t,n)=>{let r=!1;for(const i of zc(e)){const e=Xc(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Xc(e,t,n){const r=e.field.isKeyField()?rc.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?ac(r,i):wa()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return wa()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Yc(e,t){if(e.C){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nc(t)?"-0":t}}function Zc(e){return{integerValue:""+e}}function el(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!nc(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(t)?Zc(t):Yc(e,t)}
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
     */class tl{constructor(){this._=void 0}}function nl(e,t,n){return e instanceof sl?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof ol?al(e,t):e instanceof cl?ll(e,t):function(e,t){const n=il(e,t),r=hl(n)+hl(e.N);return hc(n)&&hc(e.N)?Zc(r):Yc(e.k,r)}(e,t)}function rl(e,t,n){return e instanceof ol?al(e,t):e instanceof cl?ll(e,t):n}function il(e,t){return e instanceof ul?hc(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class sl extends tl{}class ol extends tl{constructor(e){super(),this.elements=e}}function al(e,t){const n=dl(t);for(const t of e.elements)n.some((e=>sc(e,t)))||n.push(t);return{arrayValue:{values:n}}}class cl extends tl{constructor(e){super(),this.elements=e}}function ll(e,t){let n=dl(t);for(const t of e.elements)n=n.filter((e=>!sc(e,t)));return{arrayValue:{values:n}}}class ul extends tl{constructor(e,t){super(),this.k=e,this.N=t}}function hl(e){return Qa(e.integerValue||e.doubleValue)}function dl(e){return dc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class fl{constructor(e,t){this.version=e,this.transformResults=t}}class pl{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new pl}static exists(e){return new pl(void 0,e)}static updateTime(e){return new pl(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ml(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class gl{}function yl(e,t,n){e instanceof Tl?function(e,t,n){const r=e.value.clone(),i=kl(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof El?function(e,t,n){if(!ml(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=kl(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(_l(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function vl(e,t,n){e instanceof Tl?function(e,t,n){if(!ml(e.precondition,t))return;const r=e.value.clone(),i=Sl(e.fieldTransforms,n,t);r.setAll(i),t.convertToFoundDocument(Il(t),r).setHasLocalMutations()}(e,t,n):e instanceof El?function(e,t,n){if(!ml(e.precondition,t))return;const r=Sl(e.fieldTransforms,n,t),i=t.data;i.setAll(_l(e)),i.setAll(r),t.convertToFoundDocument(Il(t),i).setHasLocalMutations()}(e,t,n):function(e,t){ml(e.precondition,t)&&t.convertToNoDocument(Ua.min())}(e,t)}function wl(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=il(r.transform,e||null);null!=i&&(null==n&&(n=yc.empty()),n.set(r.field,i))}return n||null}function bl(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&La(e,t,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof ol&&t instanceof ol||e instanceof cl&&t instanceof cl?La(e.elements,t.elements,sc):e instanceof ul&&t instanceof ul?sc(e.N,t.N):e instanceof sl&&t instanceof sl}(e.transform,t.transform)}(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function Il(e){return e.isFoundDocument()?e.version:Ua.min()}class Tl extends gl{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class El extends gl{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function _l(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function kl(e,t,n){const r=new Map;ba(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,rl(o,a,n[i]))}return r}function Sl(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,nl(e,s,t))}return r}class Al extends gl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Cl extends gl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Nl{constructor(e){this.count=e}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var Rl,Dl;function $l(e){if(void 0===e)return ma("GRPC error has no .code"),Ta.UNKNOWN;switch(e){case Rl.OK:return Ta.OK;case Rl.CANCELLED:return Ta.CANCELLED;case Rl.UNKNOWN:return Ta.UNKNOWN;case Rl.DEADLINE_EXCEEDED:return Ta.DEADLINE_EXCEEDED;case Rl.RESOURCE_EXHAUSTED:return Ta.RESOURCE_EXHAUSTED;case Rl.INTERNAL:return Ta.INTERNAL;case Rl.UNAVAILABLE:return Ta.UNAVAILABLE;case Rl.UNAUTHENTICATED:return Ta.UNAUTHENTICATED;case Rl.INVALID_ARGUMENT:return Ta.INVALID_ARGUMENT;case Rl.NOT_FOUND:return Ta.NOT_FOUND;case Rl.ALREADY_EXISTS:return Ta.ALREADY_EXISTS;case Rl.PERMISSION_DENIED:return Ta.PERMISSION_DENIED;case Rl.FAILED_PRECONDITION:return Ta.FAILED_PRECONDITION;case Rl.ABORTED:return Ta.ABORTED;case Rl.OUT_OF_RANGE:return Ta.OUT_OF_RANGE;case Rl.UNIMPLEMENTED:return Ta.UNIMPLEMENTED;case Rl.DATA_LOSS:return Ta.DATA_LOSS;default:return wa()}}(Dl=Rl||(Rl={}))[Dl.OK=0]="OK",Dl[Dl.CANCELLED=1]="CANCELLED",Dl[Dl.UNKNOWN=2]="UNKNOWN",Dl[Dl.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Dl[Dl.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Dl[Dl.NOT_FOUND=5]="NOT_FOUND",Dl[Dl.ALREADY_EXISTS=6]="ALREADY_EXISTS",Dl[Dl.PERMISSION_DENIED=7]="PERMISSION_DENIED",Dl[Dl.UNAUTHENTICATED=16]="UNAUTHENTICATED",Dl[Dl.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Dl[Dl.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Dl[Dl.ABORTED=10]="ABORTED",Dl[Dl.OUT_OF_RANGE=11]="OUT_OF_RANGE",Dl[Dl.UNIMPLEMENTED=12]="UNIMPLEMENTED",Dl[Dl.INTERNAL=13]="INTERNAL",Dl[Dl.UNAVAILABLE=14]="UNAVAILABLE",Dl[Dl.DATA_LOSS=15]="DATA_LOSS";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Ol{constructor(e,t){this.comparator=e,this.root=t||xl.EMPTY}insert(e,t){return new Ol(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,xl.BLACK,null,null))}remove(e){return new Ol(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xl.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pl(this.root,e,this.comparator,!0)}}class Pl{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xl{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:xl.RED,this.left=null!=r?r:xl.EMPTY,this.right=null!=i?i:xl.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new xl(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return xl.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return xl.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xl.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xl.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw wa();if(this.right.isRed())throw wa();const e=this.left.check();if(e!==this.right.check())throw wa();return e+(this.isRed()?0:1)}}xl.EMPTY=null,xl.RED=!0,xl.BLACK=!1,xl.EMPTY=new class{constructor(){this.size=0}get key(){throw wa()}get value(){throw wa()}get color(){throw wa()}get left(){throw wa()}get right(){throw wa()}copy(e,t,n,r,i){return this}insert(e,t,n){return new xl(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Ll{constructor(e){this.comparator=e,this.data=new Ol(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ml(this.data.getIterator())}getIteratorFrom(e){return new Ml(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Ll))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ll(this.comparator);return t.data=e,t}}class Ml{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Ul=new Ol(rc.comparator);function Fl(){return Ul}const Vl=new Ol(rc.comparator);function jl(){return Vl}const ql=new Ol(rc.comparator);const Bl=new Ll(rc.comparator);function zl(...e){let t=Bl;for(const n of e)t=t.add(n);return t}const Kl=new Ll(xa);function Hl(){return Kl}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Gl{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,Wl.createSynthesizedTargetChangeForCurrentChange(e,t)),new Gl(Ua.min(),n,Hl(),Fl(),zl())}}class Wl{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new Wl(Ga.EMPTY_BYTE_STRING,t,zl(),zl(),zl())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Jl{constructor(e,t,n,r){this.$=e,this.removedTargetIds=t,this.key=n,this.F=r}}class Ql{constructor(e,t){this.targetId=e,this.O=t}}class Xl{constructor(e,t,n=Ga.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Yl{constructor(){this.M=0,this.L=tu(),this.B=Ga.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return 0!==this.M}get j(){return this.q}W(e){e.approximateByteSize()>0&&(this.q=!0,this.B=e)}G(){let e=zl(),t=zl(),n=zl();return this.L.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:wa()}})),new Wl(this.B,this.U,e,t,n)}H(){this.q=!1,this.L=tu()}J(e,t){this.q=!0,this.L=this.L.insert(e,t)}Y(e){this.q=!0,this.L=this.L.remove(e)}X(){this.M+=1}Z(){this.M-=1}tt(){this.q=!0,this.U=!0}}class Zl{constructor(e){this.et=e,this.nt=new Map,this.st=Fl(),this.it=eu(),this.rt=new Ll(xa)}ot(e){for(const t of e.$)e.F&&e.F.isFoundDocument()?this.at(t,e.F):this.ct(t,e.key,e.F);for(const t of e.removedTargetIds)this.ct(t,e.key,e.F)}ut(e){this.forEachTarget(e,(t=>{const n=this.ht(t);switch(e.state){case 0:this.lt(t)&&n.W(e.resumeToken);break;case 1:n.Z(),n.K||n.H(),n.W(e.resumeToken);break;case 2:n.Z(),n.K||this.removeTarget(t);break;case 3:this.lt(t)&&(n.tt(),n.W(e.resumeToken));break;case 4:this.lt(t)&&(this.ft(t),n.W(e.resumeToken));break;default:wa()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.nt.forEach(((e,n)=>{this.lt(n)&&t(n)}))}dt(e){const t=e.targetId,n=e.O.count,r=this.wt(t);if(r){const e=r.target;if(_c(e))if(0===n){const n=new rc(e.path);this.ct(t,n,wc.newNoDocument(n,Ua.min()))}else ba(1===n);else this._t(t)!==n&&(this.ft(t),this.rt=this.rt.add(t))}}gt(e){const t=new Map;this.nt.forEach(((n,r)=>{const i=this.wt(r);if(i){if(n.current&&_c(i.target)){const t=new rc(i.target.path);null!==this.st.get(t)||this.yt(r,t)||this.ct(r,t,wc.newNoDocument(t,e))}n.j&&(t.set(r,n.G()),n.H())}}));let n=zl();this.it.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.wt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))}));const r=new Gl(e,t,this.rt,this.st,n);return this.st=Fl(),this.it=eu(),this.rt=new Ll(xa),r}at(e,t){if(!this.lt(e))return;const n=this.yt(e,t.key)?2:0;this.ht(e).J(t.key,n),this.st=this.st.insert(t.key,t),this.it=this.it.insert(t.key,this.Tt(t.key).add(e))}ct(e,t,n){if(!this.lt(e))return;const r=this.ht(e);this.yt(e,t)?r.J(t,1):r.Y(t),this.it=this.it.insert(t,this.Tt(t).delete(e)),n&&(this.st=this.st.insert(t,n))}removeTarget(e){this.nt.delete(e)}_t(e){const t=this.ht(e).G();return this.et.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}X(e){this.ht(e).X()}ht(e){let t=this.nt.get(e);return t||(t=new Yl,this.nt.set(e,t)),t}Tt(e){let t=this.it.get(e);return t||(t=new Ll(xa),this.it=this.it.insert(e,t)),t}lt(e){const t=null!==this.wt(e);return t||pa("WatchChangeAggregator","Detected inactive target",e),t}wt(e){const t=this.nt.get(e);return t&&t.K?null:this.et.Et(e)}ft(e){this.nt.set(e,new Yl),this.et.getRemoteKeysForTarget(e).forEach((t=>{this.ct(e,t,null)}))}yt(e,t){return this.et.getRemoteKeysForTarget(e).has(t)}}function eu(){return new Ol(rc.comparator)}function tu(){return new Ol(rc.comparator)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const nu={asc:"ASCENDING",desc:"DESCENDING"},ru={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class iu{constructor(e,t){this.databaseId=e,this.C=t}}function su(e,t){return e.C?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ou(e,t){return e.C?t.toBase64():t.toUint8Array()}function au(e,t){return su(e,t.toTimestamp())}function cu(e){return ba(!!e),Ua.fromTimestamp(function(e){const t=Ja(e);return new Ma(t.seconds,t.nanos)}(e))}function lu(e,t){return function(e){return new Ba(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function uu(e){const t=Ba.fromString(e);return ba(Ru(t)),t}function hu(e,t){return lu(e.databaseId,t.path)}function du(e,t){const n=uu(t);if(n.get(1)!==e.databaseId.projectId)throw new Ea(Ta.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Ea(Ta.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new rc(mu(n))}function fu(e,t){return lu(e.databaseId,t)}function pu(e){return new Ba(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function mu(e){return ba(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function gu(e,t,n){return{name:hu(e,t),fields:n.value.mapValue.fields}}function yu(e,t){return{documents:[fu(e,t.path)]}}function vu(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=fu(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=fu(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(pc(e.value))return{unaryFilter:{field:ku(e.field),op:"IS_NAN"}};if(fc(e.value))return{unaryFilter:{field:ku(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(pc(e.value))return{unaryFilter:{field:ku(e.field),op:"IS_NOT_NAN"}};if(fc(e.value))return{unaryFilter:{field:ku(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ku(e.field),op:_u(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:ku(e.field),direction:Eu(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.C||tc(t)?t:{value:t}}(e,t.limit);return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=Iu(t.startAt)),t.endAt&&(n.structuredQuery.endAt=Iu(t.endAt)),n}function wu(e){let t=function(e){const t=uu(e);return 4===t.length?Ba.emptyPath():mu(t)}(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ba(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=bu(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new Lc(Su(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,tc(t)?null:t}(n.limit));let c=null;n.startAt&&(c=Tu(n.startAt));let l=null;return n.endAt&&(l=Tu(n.endAt)),function(e,t,n,r,i,s,o,a){return new Vc(e,t,n,r,i,s,o,a)}(t,i,o,s,a,"F",c,l)}function bu(e){return e?void 0!==e.unaryFilter?[Cu(e)]:void 0!==e.fieldFilter?[Au(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>bu(e))).reduce(((e,t)=>e.concat(t))):wa():[]}function Iu(e){return{before:e.before,values:e.position}}function Tu(e){const t=!!e.before,n=e.values||[];return new Pc(n,t)}function Eu(e){return nu[e]}function _u(e){return ru[e]}function ku(e){return{fieldPath:e.canonicalString()}}function Su(e){return Ka.fromServerFormat(e.fieldPath)}function Au(e){return kc.create(Su(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return wa()}}(e.fieldFilter.op),e.fieldFilter.value)}function Cu(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Su(e.unaryFilter.field);return kc.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Su(e.unaryFilter.field);return kc.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Su(e.unaryFilter.field);return kc.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Su(e.unaryFilter.field);return kc.create(i,"!=",{nullValue:"NULL_VALUE"});default:return wa()}}function Nu(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Ru(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Du{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&wa(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Du(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Du?t:Du.resolve(t)}catch(e){return Du.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Du.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Du.reject(t)}static resolve(e){return new Du(((t,n)=>{t(e)}))}static reject(e){return new Du(((t,n)=>{n(e)}))}static waitFor(e){return new Du(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=Du.resolve(!1);for(const n of e)t=t.next((e=>e?Du.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}}function $u(e){return"IndexedDbTransactionError"===e.name}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ou{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(e.key)&&yl(r,e,n[t])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&vl(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&vl(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach((t=>{const n=e.get(t.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(Ua.min())}))}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),zl())}isEqual(e){return this.batchId===e.batchId&&La(this.mutations,e.mutations,((e,t)=>bl(e,t)))&&La(this.baseMutations,e.baseMutations,((e,t)=>bl(e,t)))}}class Pu{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){ba(e.mutations.length===n.length);let r=ql;const i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new Pu(e,t,n,r)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class xu{constructor(e,t,n,r,i=Ua.min(),s=Ua.min(),o=Ga.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new xu(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new xu(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new xu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Lu{constructor(e){this.Gt=e}}function Mu(e){const t=wu({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?function(e,t,n){return new Vc(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}(t,t.limit,"L"):t}
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
     */class Uu{constructor(){this.zt=new Fu}addToCollectionParentIndex(e,t){return this.zt.add(t),Du.resolve()}getCollectionParents(e,t){return Du.resolve(this.zt.getEntries(t))}}class Fu{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Ll(Ba.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Ll(Ba.comparator)).toArray()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Vu{constructor(e){this.se=e}next(){return this.se+=2,this.se}static ie(){return new Vu(0)}static re(){return new Vu(-1)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function ju(e){if(e.code!==Ta.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;pa("LocalStore","Unexpectedly lost primary lease")}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class qu{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t])}else this.inner[n]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),!0;return!1}forEach(e){Va(this.inner,((t,n)=>{for(const[t,r]of n)e(t,r)}))}isEmpty(){return ja(this.inner)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
class Bu{constructor(e,t,n){this.Je=e,this.An=t,this.Jt=n}Rn(e,t){return this.An.getAllMutationBatchesAffectingDocumentKey(e,t).next((n=>this.Pn(e,t,n)))}Pn(e,t,n){return this.Je.getEntry(e,t).next((e=>{for(const t of n)t.applyToLocalView(e);return e}))}bn(e,t){e.forEach(((e,n)=>{for(const e of t)e.applyToLocalView(n)}))}vn(e,t){return this.Je.getEntries(e,t).next((t=>this.Vn(e,t).next((()=>t))))}Vn(e,t){return this.An.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>this.bn(t,e)))}getDocumentsMatchingQuery(e,t,n){return function(e){return rc.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.Sn(e,t.path):function(e){return null!==e.collectionGroup}(t)?this.Dn(e,t,n):this.Cn(e,t,n)}Sn(e,t){return this.Rn(e,new rc(t)).next((e=>{let t=jl();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}Dn(e,t,n){const r=t.collectionGroup;let i=jl();return this.Jt.getCollectionParents(e,r).next((s=>Du.forEach(s,(s=>{const o=function(e,t){return new Vc(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.Cn(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}Cn(e,t,n){let r,i;return this.Je.getDocumentsMatchingQuery(e,t,n).next((n=>(r=n,this.An.getAllMutationBatchesAffectingQuery(e,t)))).next((t=>(i=t,this.Nn(e,i,r).next((e=>{r=e;for(const e of i)for(const t of e.mutations){const n=t.key;let i=r.get(n);null==i&&(i=wc.newInvalidDocument(n),r=r.insert(n,i)),vl(t,i,e.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))))).next((()=>(r.forEach(((e,n)=>{Jc(t,n)||(r=r.remove(e))})),r)))}Nn(e,t,n){let r=zl();for(const e of t)for(const t of e.mutations)t instanceof El&&null===n.get(t.key)&&(r=r.add(t.key));let i=n;return this.Je.getEntries(e,r).next((e=>(e.forEach(((e,t)=>{t.isFoundDocument()&&(i=i.insert(e,t))})),i)))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class zu{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.kn=n,this.xn=r}static $n(e,t){let n=zl(),r=zl();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new zu(e,t.fromCache,n,r)}}
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
     */class Ku{Fn(e){this.On=e}getDocumentsMatchingQuery(e,t,n,r){return function(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}(t)||n.isEqual(Ua.min())?this.Mn(e,t):this.On.vn(e,r).next((i=>{const s=this.Ln(t,i);return(qc(t)||Bc(t))&&this.Bn(t.limitType,s,r,n)?this.Mn(e,t):(fa()<=pt.DEBUG&&pa("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Wc(t)),this.On.getDocumentsMatchingQuery(e,t,n).next((e=>(s.forEach((t=>{e=e.insert(t.key,t)})),e))))}))}Ln(e,t){let n=new Ll(Qc(e));return t.forEach(((t,r)=>{Jc(e,r)&&(n=n.add(r))})),n}Bn(e,t,n,r){if(n.size!==t.size)return!0;const i="F"===e?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mn(e,t){return fa()<=pt.DEBUG&&pa("QueryEngine","Using full collection scan to execute query:",Wc(t)),this.On.getDocumentsMatchingQuery(e,t,Ua.min())}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Hu{constructor(e,t,n,r){this.persistence=e,this.Un=t,this.k=r,this.qn=new Ol(xa),this.Kn=new qu((e=>Tc(e)),Ec),this.jn=Ua.min(),this.An=e.getMutationQueue(n),this.Qn=e.getRemoteDocumentCache(),this.He=e.getTargetCache(),this.Wn=new Bu(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=e.getBundleCache(),this.Un.Fn(this.Wn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.qn)))}}async function Gu(e,t){const n=Ia(e);let r=n.An,i=n.Wn;const s=await n.persistence.runTransaction("Handle user change","readonly",(e=>{let s;return n.An.getAllMutationBatches(e).next((o=>(s=o,r=n.persistence.getMutationQueue(t),i=new Bu(n.Qn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(e)))).next((t=>{const n=[],r=[];let o=zl();for(const e of s){n.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return i.vn(e,o).next((e=>({Gn:e,removedBatchIds:n,addedBatchIds:r})))}))}));return n.An=r,n.Wn=i,n.Un.Fn(n.Wn),s}function Wu(e){const t=Ia(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.He.getLastRemoteSnapshotVersion(e)))}function Ju(e,t){const n=Ia(e),r=t.snapshotVersion;let i=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Qn.newChangeBuffer({trackRemovals:!0});i=n.qn;const o=[];t.targetChanges.forEach(((t,s)=>{const a=i.get(s);if(!a)return;o.push(n.He.removeMatchingKeys(e,t.removedDocuments,s).next((()=>n.He.addMatchingKeys(e,t.addedDocuments,s))));const c=t.resumeToken;if(c.approximateByteSize()>0){const l=a.withResumeToken(c,r).withSequenceNumber(e.currentSequenceNumber);i=i.insert(s,l),function(e,t,n){return ba(t.resumeToken.approximateByteSize()>0),0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,l,t)&&o.push(n.He.updateTargetData(e,l))}}));let a=Fl();if(t.documentUpdates.forEach(((r,i)=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(function(e,t,n,r,i){let s=zl();return n.forEach((e=>s=s.add(e))),t.getEntries(e,s).next((e=>{let s=Fl();return n.forEach(((n,o)=>{const a=e.get(n),c=(null==i?void 0:i.get(n))||r;o.isNoDocument()&&o.version.isEqual(Ua.min())?(t.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(o,c),s=s.insert(n,o)):pa("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)})),s}))}(e,s,t.documentUpdates,r,void 0).next((e=>{a=e}))),!r.isEqual(Ua.min())){const t=n.He.getLastRemoteSnapshotVersion(e).next((t=>n.He.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return Du.waitFor(o).next((()=>s.apply(e))).next((()=>n.Wn.Vn(e,a))).next((()=>a))})).then((e=>(n.qn=i,e)))}function Qu(e,t){const n=Ia(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.An.getNextMutationBatchAfterBatchId(e,t))))}async function Xu(e,t,n){const r=Ia(e),i=r.qn.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!$u(e))throw e;pa("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.qn=r.qn.remove(t),r.Kn.delete(i.target)}function Yu(e,t,n){const r=Ia(e);let i=Ua.min(),s=zl();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=Ia(e),i=r.Kn.get(n);return void 0!==i?Du.resolve(r.qn.get(i)):r.He.getTargetData(t,n)}(r,e,Kc(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.He.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Un.getDocumentsMatchingQuery(e,t,n?i:Ua.min(),n?s:zl()))).next((e=>({documents:e,zn:s})))))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Zu{constructor(e){this.k=e,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(e,t){return Du.resolve(this.Xn.get(t))}saveBundleMetadata(e,t){var n;return this.Xn.set(t.id,{id:(n=t).id,version:n.version,createTime:cu(n.createTime)}),Du.resolve()}getNamedQuery(e,t){return Du.resolve(this.Zn.get(t))}saveNamedQuery(e,t){return this.Zn.set(t.name,function(e){return{name:e.name,query:Mu(e.bundledQuery),readTime:cu(e.readTime)}}(t)),Du.resolve()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class eh{constructor(){this.ts=new Ll(th.es),this.ns=new Ll(th.ss)}isEmpty(){return this.ts.isEmpty()}addReference(e,t){const n=new th(e,t);this.ts=this.ts.add(n),this.ns=this.ns.add(n)}rs(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.os(new th(e,t))}cs(e,t){e.forEach((e=>this.removeReference(e,t)))}us(e){const t=new rc(new Ba([])),n=new th(t,e),r=new th(t,e+1),i=[];return this.ns.forEachInRange([n,r],(e=>{this.os(e),i.push(e.key)})),i}hs(){this.ts.forEach((e=>this.os(e)))}os(e){this.ts=this.ts.delete(e),this.ns=this.ns.delete(e)}ls(e){const t=new rc(new Ba([])),n=new th(t,e),r=new th(t,e+1);let i=zl();return this.ns.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new th(e,0),n=this.ts.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class th{constructor(e,t){this.key=e,this.fs=t}static es(e,t){return rc.comparator(e.key,t.key)||xa(e.fs,t.fs)}static ss(e,t){return xa(e.fs,t.fs)||rc.comparator(e.key,t.key)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class nh{constructor(e,t){this.Jt=e,this.referenceDelegate=t,this.An=[],this.ds=1,this.ws=new Ll(th.es)}checkEmpty(e){return Du.resolve(0===this.An.length)}addMutationBatch(e,t,n,r){const i=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const s=new Ou(i,t,n,r);this.An.push(s);for(const t of r)this.ws=this.ws.add(new th(t.key,i)),this.Jt.addToCollectionParentIndex(e,t.key.path.popLast());return Du.resolve(s)}lookupMutationBatch(e,t){return Du.resolve(this._s(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.gs(n),i=r<0?0:r;return Du.resolve(this.An.length>i?this.An[i]:null)}getHighestUnacknowledgedBatchId(){return Du.resolve(0===this.An.length?-1:this.ds-1)}getAllMutationBatches(e){return Du.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new th(t,0),r=new th(t,Number.POSITIVE_INFINITY),i=[];return this.ws.forEachInRange([n,r],(e=>{const t=this._s(e.fs);i.push(t)})),Du.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Ll(xa);return t.forEach((e=>{const t=new th(e,0),r=new th(e,Number.POSITIVE_INFINITY);this.ws.forEachInRange([t,r],(e=>{n=n.add(e.fs)}))})),Du.resolve(this.ys(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;rc.isDocumentKey(i)||(i=i.child(""));const s=new th(new rc(i),0);let o=new Ll(xa);return this.ws.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.fs)),!0)}),s),Du.resolve(this.ys(o))}ys(e){const t=[];return e.forEach((e=>{const n=this._s(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){ba(0===this.ps(t.batchId,"removed")),this.An.shift();let n=this.ws;return Du.forEach(t.mutations,(r=>{const i=new th(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.ws=n}))}ee(e){}containsKey(e,t){const n=new th(t,0),r=this.ws.firstAfterOrEqual(n);return Du.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.An.length,Du.resolve()}ps(e,t){return this.gs(e)}gs(e){return 0===this.An.length?0:e-this.An[0].batchId}_s(e){const t=this.gs(e);return t<0||t>=this.An.length?null:this.An[t]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class rh{constructor(e,t){this.Jt=e,this.Ts=t,this.docs=new Ol(rc.comparator),this.size=0}addEntry(e,t,n){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ts(t);return this.docs=this.docs.insert(r,{document:t.clone(),size:o,readTime:n}),this.size+=o-s,this.Jt.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Du.resolve(n?n.document.clone():wc.newInvalidDocument(t))}getEntries(e,t){let n=Fl();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.clone():wc.newInvalidDocument(e))})),Du.resolve(n)}getDocumentsMatchingQuery(e,t,n){let r=Fl();const i=new rc(t.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i,readTime:o}}=s.getNext();if(!t.path.isPrefixOf(e.path))break;o.compareTo(n)<=0||Jc(t,i)&&(r=r.insert(i.key,i.clone()))}return Du.resolve(r)}Es(e,t){return Du.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new ih(this)}getSize(e){return Du.resolve(this.size)}}class ih extends class{constructor(){this.changes=new qu((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}getReadTime(e){const t=this.changes.get(e);return t?t.readTime:Ua.min()}addEntry(e,t){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:t})}removeEntry(e,t=null){this.assertNotApplied(),this.changes.set(e,{document:wc.newInvalidDocument(e),readTime:t})}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Du.resolve(n.document):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}{constructor(e){super(),this.De=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.document.isValidDocument()?t.push(this.De.addEntry(e,r.document,this.getReadTime(n))):this.De.removeEntry(n)})),Du.waitFor(t)}getFromCache(e,t){return this.De.getEntry(e,t)}getAllFromCache(e,t){return this.De.getEntries(e,t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class sh{constructor(e){this.persistence=e,this.Is=new qu((e=>Tc(e)),Ec),this.lastRemoteSnapshotVersion=Ua.min(),this.highestTargetId=0,this.As=0,this.Rs=new eh,this.targetCount=0,this.Ps=Vu.ie()}forEachTarget(e,t){return this.Is.forEach(((e,n)=>t(n))),Du.resolve()}getLastRemoteSnapshotVersion(e){return Du.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Du.resolve(this.As)}allocateTargetId(e){return this.highestTargetId=this.Ps.next(),Du.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.As&&(this.As=t),Du.resolve()}ce(e){this.Is.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ps=new Vu(t),this.highestTargetId=t),e.sequenceNumber>this.As&&(this.As=e.sequenceNumber)}addTargetData(e,t){return this.ce(t),this.targetCount+=1,Du.resolve()}updateTargetData(e,t){return this.ce(t),Du.resolve()}removeTargetData(e,t){return this.Is.delete(t.target),this.Rs.us(t.targetId),this.targetCount-=1,Du.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Is.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Is.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),Du.waitFor(i).next((()=>r))}getTargetCount(e){return Du.resolve(this.targetCount)}getTargetData(e,t){const n=this.Is.get(t)||null;return Du.resolve(n)}addMatchingKeys(e,t,n){return this.Rs.rs(t,n),Du.resolve()}removeMatchingKeys(e,t,n){this.Rs.cs(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Du.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Rs.us(t),Du.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Rs.ls(t);return Du.resolve(n)}containsKey(e,t){return Du.resolve(this.Rs.containsKey(t))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class oh{constructor(e,t){this.bs={},this.Be=new $a(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=e(this),this.He=new sh(this),this.Jt=new Uu,this.Je=function(e,t){return new rh(e,t)}(this.Jt,(e=>this.referenceDelegate.vs(e))),this.k=new Lu(t),this.Ye=new Zu(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(e){let t=this.bs[e.toKey()];return t||(t=new nh(this.Jt,this.referenceDelegate),this.bs[e.toKey()]=t),t}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(e,t,n){pa("MemoryPersistence","Starting transaction:",e);const r=new ah(this.Be.next());return this.referenceDelegate.Vs(),n(r).next((e=>this.referenceDelegate.Ss(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ds(e,t){return Du.or(Object.values(this.bs).map((n=>()=>n.containsKey(e,t))))}}class ah extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}{constructor(e){super(),this.currentSequenceNumber=e}}class ch{constructor(e){this.persistence=e,this.Cs=new eh,this.Ns=null}static ks(e){return new ch(e)}get xs(){if(this.Ns)return this.Ns;throw wa()}addReference(e,t,n){return this.Cs.addReference(n,t),this.xs.delete(n.toString()),Du.resolve()}removeReference(e,t,n){return this.Cs.removeReference(n,t),this.xs.add(n.toString()),Du.resolve()}markPotentiallyOrphaned(e,t){return this.xs.add(t.toString()),Du.resolve()}removeTarget(e,t){this.Cs.us(t.targetId).forEach((e=>this.xs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.xs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Vs(){this.Ns=new Set}Ss(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Du.forEach(this.xs,(n=>{const r=rc.fromPath(n);return this.$s(e,r).next((e=>{e||t.removeEntry(r)}))})).next((()=>(this.Ns=null,t.apply(e))))}updateLimboDocument(e,t){return this.$s(e,t).next((e=>{e?this.xs.delete(t.toString()):this.xs.add(t.toString())}))}vs(e){return 0}$s(e,t){return Du.or([()=>Du.resolve(this.Cs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ds(e,t)])}}class lh{constructor(){this.activeTargetIds=Hl()}Ms(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ls(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class uh{constructor(){this.pi=new lh,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.pi.Ms(e),this.Ti[e]||"not-current"}updateQueryState(e,t,n){this.Ti[e]=t}removeLocalQueryTarget(e){this.pi.Ls(e)}isLocalQueryTarget(e){return this.pi.activeTargetIds.has(e)}clearQueryState(e){delete this.Ti[e]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(e){return this.pi.activeTargetIds.has(e)}start(){return this.pi=new lh,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}
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
     */class hh{Ei(e){}shutdown(){}}
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
     */class dh{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.Pi(),this.bi=[],this.vi()}Ei(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){pa("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Pi(){pa("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const fh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ph{constructor(e){this.Vi=e.Vi,this.Si=e.Si}Di(e){this.Ci=e}Ni(e){this.ki=e}onMessage(e){this.xi=e}close(){this.Si()}send(e){this.Vi(e)}$i(){this.Ci()}Fi(e){this.ki(e)}Oi(e){this.xi(e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class mh extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.Mi=t+"://"+e.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(e,t,n,r,i){const s=this.Ui(e,t);pa("RestConnection","Sending: ",s,n);const o={};return this.qi(o,r,i),this.Ki(e,s,o,n).then((e=>(pa("RestConnection","Received: ",e),e)),(t=>{throw ya("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}ji(e,t,n,r,i){return this.Bi(e,t,n,r,i)}qi(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+ha,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}Ui(e,t){const n=fh[e];return`${this.Mi}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Ki(e,t,n,r){return new Promise(((i,s)=>{const o=new ca;o.listenOnce(na.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case ta.NO_ERROR:const t=o.getResponseJson();pa("Connection","XHR received:",JSON.stringify(t)),i(t);break;case ta.TIMEOUT:pa("Connection",'RPC "'+e+'" timed out'),s(new Ea(Ta.DEADLINE_EXCEEDED,"Request time out"));break;case ta.HTTP_ERROR:const n=o.getStatus();if(pa("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Ta).indexOf(t)>=0?t:Ta.UNKNOWN}(e.status);s(new Ea(t,e.message))}else s(new Ea(Ta.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new Ea(Ta.UNAVAILABLE,"Connection failed."));break;default:wa()}}finally{pa("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}Qi(e,t,n){const r=[this.Mi,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=new Qo,s=Bi(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new oa({})),this.qi(o.initMessageHeaders,t,n),We()||Qe()||Ge().indexOf("Electron/")>=0||Xe()||Ge().indexOf("MSAppHost/")>=0||Je()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");pa("Connection","Creating WebChannel: "+a,o);const c=i.createWebChannel(a,o);let l=!1,u=!1;const h=new ph({Vi:e=>{u?pa("Connection","Not sending because WebChannel is closed:",e):(l||(pa("Connection","Opening WebChannel transport."),c.open(),l=!0),pa("Connection","WebChannel sending:",e),c.send(e))},Si:()=>c.close()}),d=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return d(c,aa.EventType.OPEN,(()=>{u||pa("Connection","WebChannel transport opened.")})),d(c,aa.EventType.CLOSE,(()=>{u||(u=!0,pa("Connection","WebChannel transport closed"),h.Fi())})),d(c,aa.EventType.ERROR,(e=>{u||(u=!0,ya("Connection","WebChannel transport errored:",e),h.Fi(new Ea(Ta.UNAVAILABLE,"The operation could not be completed")))})),d(c,aa.EventType.MESSAGE,(e=>{var t;if(!u){const n=e.data[0];ba(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){pa("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=Rl[e];if(void 0!==t)return $l(t)}(e),n=i.message;void 0===t&&(t=Ta.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),u=!0,h.Fi(new Ea(t,n)),c.close()}else pa("Connection","WebChannel received:",n),h.Oi(n)}})),d(s,ra.STAT_EVENT,(e=>{e.stat===ia?pa("Connection","Detected buffering proxy"):e.stat===sa&&pa("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.$i()}),0),h}}function gh(){return"undefined"!=typeof document?document:null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function yh(e){return new iu(e,!0)}class vh{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Oe=e,this.timerId=t,this.Wi=n,this.Gi=r,this.zi=i,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(e){this.cancel();const t=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),r=Math.max(0,t-n);r>0&&pa("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Hi} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Ji=this.Oe.enqueueAfterDelay(this.timerId,r,(()=>(this.Yi=Date.now(),e()))),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class wh{constructor(e,t,n,r,i,s,o,a){this.Oe=e,this.nr=n,this.sr=r,this.ir=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.rr=0,this.ar=null,this.cr=null,this.stream=null,this.ur=new vh(e,t)}hr(){return 1===this.state||5===this.state||this.lr()}lr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&null===this.ar&&(this.ar=this.Oe.enqueueAfterDelay(this.nr,6e4,(()=>this.mr())))}gr(e){this.yr(),this.stream.send(e)}async mr(){if(this.lr())return this.close(0)}yr(){this.ar&&(this.ar.cancel(),this.ar=null)}pr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,t){this.yr(),this.pr(),this.ur.cancel(),this.rr++,4!==e?this.ur.reset():t&&t.code===Ta.RESOURCE_EXHAUSTED?(ma(t.toString()),ma("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):t&&t.code===Ta.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Tr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ni(t)}Tr(){}auth(){this.state=1;const e=this.Er(this.rr),t=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.rr===t&&this.Ir(e,n)}),(t=>{e((()=>{const e=new Ea(Ta.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Ar(e)}))}))}Ir(e,t){const n=this.Er(this.rr);this.stream=this.Rr(e,t),this.stream.Di((()=>{n((()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.sr,1e4,(()=>(this.lr()&&(this.state=3),Promise.resolve()))),this.listener.Di())))})),this.stream.Ni((e=>{n((()=>this.Ar(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}dr(){this.state=5,this.ur.Zi((async()=>{this.state=0,this.start()}))}Ar(e){return pa("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Er(e){return t=>{this.Oe.enqueueAndForget((()=>this.rr===e?t():(pa("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class bh extends wh{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.k=i}Rr(e,t){return this.ir.Qi("Listen",e,t)}onMessage(e){this.ur.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:wa()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.C?(ba(void 0===t||"string"==typeof t),Ga.fromBase64String(t||"")):(ba(void 0===t||t instanceof Uint8Array),Ga.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?Ta.UNKNOWN:$l(e.code);return new Ea(t,e.message||"")}(o);n=new Xl(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=du(e,r.document.name),s=cu(r.document.updateTime),o=new yc({mapValue:{fields:r.document.fields}}),a=wc.newFoundDocument(i,s,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new Jl(c,l,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=du(e,r.document),s=r.readTime?cu(r.readTime):Ua.min(),o=wc.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Jl([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=du(e,r.document),s=r.removedTargetIds||[];n=new Jl([],s,i,null)}else{if(!("filter"in t))return wa();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new Nl(r),s=e.targetId;n=new Ql(s,i)}}return n}(this.k,e),n=function(e){if(!("targetChange"in e))return Ua.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Ua.min():t.readTime?cu(t.readTime):Ua.min()}(e);return this.listener.Pr(t,n)}br(e){const t={};t.database=pu(this.k),t.addTarget=function(e,t){let n;const r=t.target;return n=_c(r)?{documents:yu(e,r)}:{query:vu(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=ou(e,t.resumeToken):t.snapshotVersion.compareTo(Ua.min())>0&&(n.readTime=su(e,t.snapshotVersion.toTimestamp())),n}(this.k,e);const n=function(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return wa()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.k,e);n&&(t.labels=n),this.gr(t)}vr(e){const t={};t.database=pu(this.k),t.removeTarget=e,this.gr(t)}}class Ih extends wh{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.k=i,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(e,t){return this.ir.Qi("Write",e,t)}onMessage(e){if(ba(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Vr){this.ur.reset();const t=function(e,t){return e&&e.length>0?(ba(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?cu(e.updateTime):cu(t);return n.isEqual(Ua.min())&&(n=cu(t)),new fl(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=cu(e.commitTime);return this.listener.Cr(n,t)}return ba(!e.writeResults||0===e.writeResults.length),this.Vr=!0,this.listener.Nr()}kr(){const e={};e.database=pu(this.k),this.gr(e)}Dr(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>function(e,t){let n;if(t instanceof Tl)n={update:gu(e,t.key,t.value)};else if(t instanceof Al)n={delete:hu(e,t.key)};else if(t instanceof El)n={update:gu(e,t.key,t.data),updateMask:Nu(t.fieldMask)};else{if(!(t instanceof Cl))return wa();n={verify:hu(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof sl)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ol)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof cl)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ul)return{fieldPath:t.field.canonicalString(),increment:n.N};throw wa()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:au(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:wa()}(e,t.precondition)),n}(this.k,e)))};this.gr(t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Th extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.ir=n,this.k=r,this.$r=!1}Fr(){if(this.$r)throw new Ea(Ta.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(e,t,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.ir.Bi(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Ta.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Ea(Ta.UNKNOWN,e.toString())}))}ji(e,t,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.ir.ji(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Ta.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Ea(Ta.UNKNOWN,e.toString())}))}terminate(){this.$r=!0}}class Eh{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Or=0,this.Mr=null,this.Lr=!0}Br(){0===this.Or&&(this.Ur("Unknown"),this.Mr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Mr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve()))))}Kr(e){"Online"===this.state?this.Ur("Unknown"):(this.Or++,this.Or>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Ur("Offline")))}set(e){this.jr(),this.Or=0,"Online"===e&&(this.Lr=!1),this.Ur(e)}Ur(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}qr(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(ma(t),this.Lr=!1):pa("OnlineStateTracker",t)}jr(){null!==this.Mr&&(this.Mr.cancel(),this.Mr=null)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class _h{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=i,this.Hr.Ei((e=>{n.enqueueAndForget((async()=>{Oh(this)&&(pa("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Ia(e);t.Gr.add(4),await Sh(t),t.Jr.set("Unknown"),t.Gr.delete(4),await kh(t)}(this))}))})),this.Jr=new Eh(n,r)}}async function kh(e){if(Oh(e))for(const t of e.zr)await t(!0)}async function Sh(e){for(const t of e.zr)await t(!1)}function Ah(e,t){const n=Ia(e);n.Wr.has(t.targetId)||(n.Wr.set(t.targetId,t),$h(n)?Dh(n):Jh(n).lr()&&Nh(n,t))}function Ch(e,t){const n=Ia(e),r=Jh(n);n.Wr.delete(t),r.lr()&&Rh(n,t),0===n.Wr.size&&(r.lr()?r._r():Oh(n)&&n.Jr.set("Unknown"))}function Nh(e,t){e.Yr.X(t.targetId),Jh(e).br(t)}function Rh(e,t){e.Yr.X(t),Jh(e).vr(t)}function Dh(e){e.Yr=new Zl({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.Wr.get(t)||null}),Jh(e).start(),e.Jr.Br()}function $h(e){return Oh(e)&&!Jh(e).hr()&&e.Wr.size>0}function Oh(e){return 0===Ia(e).Gr.size}function Ph(e){e.Yr=void 0}async function xh(e){e.Wr.forEach(((t,n)=>{Nh(e,t)}))}async function Lh(e,t){Ph(e),$h(e)?(e.Jr.Kr(t),Dh(e)):e.Jr.set("Unknown")}async function Mh(e,t,n){if(e.Jr.set("Online"),t instanceof Xl&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Wr.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Wr.delete(r),e.Yr.removeTarget(r))}(e,t)}catch(n){pa("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Uh(e,n)}else if(t instanceof Jl?e.Yr.ot(t):t instanceof Ql?e.Yr.dt(t):e.Yr.ut(t),!n.isEqual(Ua.min()))try{const t=await Wu(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Yr.gt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Wr.get(r);i&&e.Wr.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.Wr.get(t);if(!n)return;e.Wr.set(t,n.withResumeToken(Ga.EMPTY_BYTE_STRING,n.snapshotVersion)),Rh(e,t);const r=new xu(n.target,t,1,n.sequenceNumber);Nh(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){pa("RemoteStore","Failed to raise snapshot:",t),await Uh(e,t)}}async function Uh(e,t,n){if(!$u(t))throw t;e.Gr.add(1),await Sh(e),e.Jr.set("Offline"),n||(n=()=>Wu(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{pa("RemoteStore","Retrying IndexedDB access"),await n(),e.Gr.delete(1),await kh(e)}))}function Fh(e,t){return t().catch((n=>Uh(e,n,t)))}async function Vh(e){const t=Ia(e),n=Qh(t);let r=t.Qr.length>0?t.Qr[t.Qr.length-1].batchId:-1;for(;jh(t);)try{const e=await Qu(t.localStore,r);if(null===e){0===t.Qr.length&&n._r();break}r=e.batchId,qh(t,e)}catch(e){await Uh(t,e)}Bh(t)&&zh(t)}function jh(e){return Oh(e)&&e.Qr.length<10}function qh(e,t){e.Qr.push(t);const n=Qh(e);n.lr()&&n.Sr&&n.Dr(t.mutations)}function Bh(e){return Oh(e)&&!Qh(e).hr()&&e.Qr.length>0}function zh(e){Qh(e).start()}async function Kh(e){Qh(e).kr()}async function Hh(e){const t=Qh(e);for(const n of e.Qr)t.Dr(n.mutations)}async function Gh(e,t,n){const r=e.Qr.shift(),i=Pu.from(r,t,n);await Fh(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await Vh(e)}async function Wh(e,t){t&&Qh(e).Sr&&await async function(e,t){if(function(e){switch(e){default:return wa();case Ta.CANCELLED:case Ta.UNKNOWN:case Ta.DEADLINE_EXCEEDED:case Ta.RESOURCE_EXHAUSTED:case Ta.INTERNAL:case Ta.UNAVAILABLE:case Ta.UNAUTHENTICATED:return!1;case Ta.INVALID_ARGUMENT:case Ta.NOT_FOUND:case Ta.ALREADY_EXISTS:case Ta.PERMISSION_DENIED:case Ta.FAILED_PRECONDITION:case Ta.ABORTED:case Ta.OUT_OF_RANGE:case Ta.UNIMPLEMENTED:case Ta.DATA_LOSS:return!0}}(n=t.code)&&n!==Ta.ABORTED){const n=e.Qr.shift();Qh(e).wr(),await Fh(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Vh(e)}var n}(e,t),Bh(e)&&zh(e)}function Jh(e){return e.Xr||(e.Xr=function(e,t,n){const r=Ia(e);return r.Fr(),new bh(t,r.ir,r.authCredentials,r.appCheckCredentials,r.k,n)
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
     */}(e.datastore,e.asyncQueue,{Di:xh.bind(null,e),Ni:Lh.bind(null,e),Pr:Mh.bind(null,e)}),e.zr.push((async t=>{t?(e.Xr.wr(),$h(e)?Dh(e):e.Jr.set("Unknown")):(await e.Xr.stop(),Ph(e))}))),e.Xr}function Qh(e){return e.Zr||(e.Zr=function(e,t,n){const r=Ia(e);return r.Fr(),new Ih(t,r.ir,r.authCredentials,r.appCheckCredentials,r.k,n)}(e.datastore,e.asyncQueue,{Di:Kh.bind(null,e),Ni:Wh.bind(null,e),Nr:Hh.bind(null,e),Cr:Gh.bind(null,e)}),e.zr.push((async t=>{t?(e.Zr.wr(),await Vh(e)):(await e.Zr.stop(),e.Qr.length>0&&(pa("RemoteStore",`Stopping write stream with ${e.Qr.length} pending writes`),e.Qr=[]))}))),e.Zr
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class Xh{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new _a,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Xh(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Ea(Ta.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yh(e,t){if(ma("AsyncQueue",`${t}: ${e}`),$u(e))return new Ea(Ta.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Zh{constructor(e){this.comparator=e?(t,n)=>e(t,n)||rc.comparator(t.key,n.key):(e,t)=>rc.comparator(e.key,t.key),this.keyedMap=jl(),this.sortedSet=new Ol(this.comparator)}static emptySet(e){return new Zh(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Zh))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Zh;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ed{constructor(){this.eo=new Ol(rc.comparator)}track(e){const t=e.doc.key,n=this.eo.get(t);n?0!==e.type&&3===n.type?this.eo=this.eo.insert(t,e):3===e.type&&1!==n.type?this.eo=this.eo.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.eo=this.eo.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.eo=this.eo.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.eo=this.eo.remove(t):1===e.type&&2===n.type?this.eo=this.eo.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.eo=this.eo.insert(t,{type:2,doc:e.doc}):wa():this.eo=this.eo.insert(t,e)}no(){const e=[];return this.eo.inorderTraversal(((t,n)=>{e.push(n)})),e}}class td{constructor(e,t,n,r,i,s,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const i=[];return t.forEach((e=>{i.push({type:0,doc:e})})),new td(e,t,Zh.emptySet(t),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Hc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class nd{constructor(){this.so=void 0,this.listeners=[]}}class rd{constructor(){this.queries=new qu((e=>Gc(e)),Hc),this.onlineState="Unknown",this.io=new Set}}function id(e,t){const n=Ia(e);let r=!1;for(const e of t){const t=e.query,i=n.queries.get(t);if(i){for(const t of i.listeners)t.oo(e)&&(r=!0);i.so=e}}r&&od(n)}function sd(e,t,n){const r=Ia(e),i=r.queries.get(t);if(i)for(const e of i.listeners)e.onError(n);r.queries.delete(t)}function od(e){e.io.forEach((e=>{e.next()}))}class ad{constructor(e,t,n){this.query=e,this.ao=t,this.co=!1,this.uo=null,this.onlineState="Unknown",this.options=n||{}}oo(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new td(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.co?this.ho(e)&&(this.ao.next(e),t=!0):this.lo(e,this.onlineState)&&(this.fo(e),t=!0),this.uo=e,t}onError(e){this.ao.error(e)}ro(e){this.onlineState=e;let t=!1;return this.uo&&!this.co&&this.lo(this.uo,e)&&(this.fo(this.uo),t=!0),t}lo(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return!(this.options.wo&&n||e.docs.isEmpty()&&"Offline"!==t)}ho(e){if(e.docChanges.length>0)return!0;const t=this.uo&&this.uo.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}fo(e){e=td.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.co=!0,this.ao.next(e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class cd{constructor(e){this.key=e}}class ld{constructor(e){this.key=e}}class ud{constructor(e,t){this.query=e,this.To=t,this.Eo=null,this.current=!1,this.Io=zl(),this.mutatedKeys=zl(),this.Ao=Qc(e),this.Ro=new Zh(this.Ao)}get Po(){return this.To}bo(e,t){const n=t?t.vo:new ed,r=t?t.Ro:this.Ro;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=qc(this.query)&&r.size===this.query.limit?r.last():null,c=Bc(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const l=r.get(e),u=Jc(this.query,t)?t:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.Vo(l,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Ao(u,a)>0||c&&this.Ao(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(u?(s=s.add(u),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),qc(this.query)||Bc(this.query))for(;s.size>this.query.limit;){const e=qc(this.query)?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Ro:s,vo:n,Bn:o,mutatedKeys:i}}Vo(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Ro;this.Ro=e.Ro,this.mutatedKeys=e.mutatedKeys;const i=e.vo.no();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return wa()}};return n(e)-n(t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e.type,t.type)||this.Ao(e.doc,t.doc))),this.So(n);const s=t?this.Do():[],o=0===this.Io.size&&this.current?1:0,a=o!==this.Eo;return this.Eo=o,0!==i.length||a?{snapshot:new td(this.query,e.Ro,r,i,e.mutatedKeys,0===o,a,!1),Co:s}:{Co:s}}ro(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new ed,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(e){return!this.To.has(e)&&!!this.Ro.has(e)&&!this.Ro.get(e).hasLocalMutations}So(e){e&&(e.addedDocuments.forEach((e=>this.To=this.To.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.To=this.To.delete(e))),this.current=e.current)}Do(){if(!this.current)return[];const e=this.Io;this.Io=zl(),this.Ro.forEach((e=>{this.No(e.key)&&(this.Io=this.Io.add(e.key))}));const t=[];return e.forEach((e=>{this.Io.has(e)||t.push(new ld(e))})),this.Io.forEach((n=>{e.has(n)||t.push(new cd(n))})),t}ko(e){this.To=e.zn,this.Io=zl();const t=this.bo(e.documents);return this.applyChanges(t,!0)}xo(){return td.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,0===this.Eo)}}class hd{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class dd{constructor(e){this.key=e,this.$o=!1}}class fd{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Fo={},this.Oo=new qu((e=>Gc(e)),Hc),this.Mo=new Map,this.Lo=new Set,this.Bo=new Ol(rc.comparator),this.Uo=new Map,this.qo=new eh,this.Ko={},this.jo=new Map,this.Qo=Vu.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return!0===this.Wo}}async function pd(e,t){const n=function(e){const t=Ia(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=yd.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Dd.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=wd.bind(null,t),t.Fo.Pr=id.bind(null,t.eventManager),t.Fo.zo=sd.bind(null,t.eventManager),t}(e);let r,i;const s=n.Oo.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.xo();else{const e=await function(e,t){const n=Ia(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.He.getTargetData(e,t).next((i=>i?(r=i,Du.resolve(r)):n.He.allocateTargetId(e).next((i=>(r=new xu(t,i,0,e.currentSequenceNumber),n.He.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.qn.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qn=n.qn.insert(e.targetId,e),n.Kn.set(t,e.targetId)),e}))}(n.localStore,Kc(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await async function(e,t,n,r){e.Go=(t,n,r)=>async function(e,t,n,r){let i=t.view.bo(n);i.Bn&&(i=await Yu(e.localStore,t.query,!1).then((({documents:e})=>t.view.bo(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return Sd(e,t.targetId,o.Co),o.snapshot}(e,t,n,r);const i=await Yu(e.localStore,t,!0),s=new ud(t,i.zn),o=s.bo(i.documents),a=Wl.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=s.applyChanges(o,e.isPrimaryClient,a);Sd(e,n,c.Co);const l=new hd(t,n,s);return e.Oo.set(t,l),e.Mo.has(n)?e.Mo.get(n).push(t):e.Mo.set(n,[t]),c.snapshot}(n,t,r,"current"===s),n.isPrimaryClient&&Ah(n.remoteStore,e)}return i}async function md(e,t){const n=Ia(e),r=n.Oo.get(t),i=n.Mo.get(r.targetId);if(i.length>1)return n.Mo.set(r.targetId,i.filter((e=>!Hc(e,t)))),void n.Oo.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Xu(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Ch(n.remoteStore,r.targetId),_d(n,r.targetId)})).catch(ju)):(_d(n,r.targetId),await Xu(n.localStore,r.targetId,!0))}async function gd(e,t,n){const r=function(e){const t=Ia(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=bd.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Id.bind(null,t),t}(e);try{const e=await function(e,t){const n=Ia(e),r=Ma.now(),i=t.reduce(((e,t)=>e.add(t.key)),zl());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>n.Wn.vn(e,i).next((i=>{s=i;const o=[];for(const e of t){const t=wl(e,s.get(e.key));null!=t&&o.push(new El(e.key,t,vc(t.value.mapValue),pl.exists(!0)))}return n.An.addMutationBatch(e,r,o,t)})))).then((e=>(e.applyToLocalDocumentSet(s),{batchId:e.batchId,changes:s})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Ko[e.currentUser.toKey()];r||(r=new Ol(xa)),r=r.insert(t,n),e.Ko[e.currentUser.toKey()]=r}(r,e.batchId,n),await Nd(r,e.changes),await Vh(r.remoteStore)}catch(e){const t=Yh(e,"Failed to persist write");n.reject(t)}}async function yd(e,t){const n=Ia(e);try{const e=await Ju(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Uo.get(t);r&&(ba(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.$o=!0:e.modifiedDocuments.size>0?ba(r.$o):e.removedDocuments.size>0&&(ba(r.$o),r.$o=!1))})),await Nd(n,e,t)}catch(e){await ju(e)}}function vd(e,t,n){const r=Ia(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Oo.forEach(((n,r)=>{const i=r.view.ro(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=Ia(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.ro(t)&&(r=!0)})),r&&od(n)}(r.eventManager,t),e.length&&r.Fo.Pr(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function wd(e,t,n){const r=Ia(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Uo.get(t),s=i&&i.key;if(s){let e=new Ol(rc.comparator);e=e.insert(s,wc.newNoDocument(s,Ua.min()));const n=zl().add(s),i=new Gl(Ua.min(),new Map,new Ll(xa),e,n);await yd(r,i),r.Bo=r.Bo.remove(s),r.Uo.delete(t),Cd(r)}else await Xu(r.localStore,t,!1).then((()=>_d(r,t,n))).catch(ju)}async function bd(e,t){const n=Ia(e),r=t.batch.batchId;try{const e=await function(e,t){const n=Ia(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Qn.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Du.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);ba(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&r.addEntry(t,n.commitVersion))}))})),o.next((()=>e.An.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.An.performConsistencyCheck(e))).next((()=>n.Wn.vn(e,r)))}))}(n.localStore,t);Ed(n,r,null),Td(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Nd(n,e)}catch(e){await ju(e)}}async function Id(e,t,n){const r=Ia(e);try{const e=await function(e,t){const n=Ia(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.An.lookupMutationBatch(e,t).next((t=>(ba(null!==t),r=t.keys(),n.An.removeMutationBatch(e,t)))).next((()=>n.An.performConsistencyCheck(e))).next((()=>n.Wn.vn(e,r)))}))}(r.localStore,t);Ed(r,t,n),Td(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Nd(r,e)}catch(n){await ju(n)}}function Td(e,t){(e.jo.get(t)||[]).forEach((e=>{e.resolve()})),e.jo.delete(t)}function Ed(e,t,n){const r=Ia(e);let i=r.Ko[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Ko[r.currentUser.toKey()]=i}}function _d(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Mo.get(t))e.Oo.delete(r),n&&e.Fo.zo(r,n);e.Mo.delete(t),e.isPrimaryClient&&e.qo.us(t).forEach((t=>{e.qo.containsKey(t)||kd(e,t)}))}function kd(e,t){e.Lo.delete(t.path.canonicalString());const n=e.Bo.get(t);null!==n&&(Ch(e.remoteStore,n),e.Bo=e.Bo.remove(t),e.Uo.delete(n),Cd(e))}function Sd(e,t,n){for(const r of n)r instanceof cd?(e.qo.addReference(r.key,t),Ad(e,r)):r instanceof ld?(pa("SyncEngine","Document no longer in limbo: "+r.key),e.qo.removeReference(r.key,t),e.qo.containsKey(r.key)||kd(e,r.key)):wa()}function Ad(e,t){const n=t.key,r=n.path.canonicalString();e.Bo.get(n)||e.Lo.has(r)||(pa("SyncEngine","New document in limbo: "+n),e.Lo.add(r),Cd(e))}function Cd(e){for(;e.Lo.size>0&&e.Bo.size<e.maxConcurrentLimboResolutions;){const t=e.Lo.values().next().value;e.Lo.delete(t);const n=new rc(Ba.fromString(t)),r=e.Qo.next();e.Uo.set(r,new dd(n)),e.Bo=e.Bo.insert(n,r),Ah(e.remoteStore,new xu(Kc(jc(n.path)),r,2,$a.I))}}async function Nd(e,t,n){const r=Ia(e),i=[],s=[],o=[];r.Oo.isEmpty()||(r.Oo.forEach(((e,a)=>{o.push(r.Go(a,t,n).then((e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),i.push(e);const t=zu.$n(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.Fo.Pr(i),await async function(e,t){const n=Ia(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Du.forEach(t,(t=>Du.forEach(t.kn,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Du.forEach(t.xn,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!$u(e))throw e;pa("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.qn.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.qn=n.qn.insert(t,i)}}}(r.localStore,s))}async function Rd(e,t){const n=Ia(e);if(!n.currentUser.isEqual(t)){pa("SyncEngine","User change. New user:",t.toKey());const e=await Gu(n.localStore,t);n.currentUser=t,function(e,t){e.jo.forEach((e=>{e.forEach((e=>{e.reject(new Ea(Ta.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),e.jo.clear()}(n),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Nd(n,e.Gn)}}function Dd(e,t){const n=Ia(e),r=n.Uo.get(t);if(r&&r.$o)return zl().add(r.key);{let e=zl();const r=n.Mo.get(t);if(!r)return e;for(const t of r){const r=n.Oo.get(t);e=e.unionWith(r.view.Po)}return e}}class $d{constructor(){this.synchronizeTabs=!1}async initialize(e){this.k=yh(e.databaseInfo.databaseId),this.sharedClientState=this.Jo(e),this.persistence=this.Yo(e),await this.persistence.start(),this.gcScheduler=this.Xo(e),this.localStore=this.Zo(e)}Xo(e){return null}Zo(e){return function(e,t,n,r){return new Hu(e,t,n,r)}(this.persistence,new Ku,e.initialUser,this.k)}Yo(e){return new oh(ch.ks,this.k)}Jo(e){return new uh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Od{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>vd(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Rd.bind(null,this.syncEngine),await async function(e,t){const n=Ia(e);t?(n.Gr.delete(2),await kh(n)):t||(n.Gr.add(2),await Sh(n),n.Jr.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new rd}createDatastore(e){const t=yh(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new mh(r));var r;return function(e,t,n,r){return new Th(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>vd(this.syncEngine,e,0),s=dh.bt()?new dh:new hh,new _h(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new fd(e,t,n,r,i,s);return o&&(a.Wo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Ia(e);pa("RemoteStore","RemoteStore shutting down."),t.Gr.add(5),await Sh(t),t.Hr.shutdown(),t.Jr.set("Unknown")}(this.remoteStore)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
     */class Pd{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ea(this.observer.next,e)}error(e){this.observer.error?this.ea(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}na(){this.muted=!0}ea(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class xd{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=ua.UNAUTHENTICATED,this.clientId=Pa.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{pa("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(()=>Promise.resolve()))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ea(Ta.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _a;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Yh(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Ld(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){return e.offlineComponents||(pa("FirestoreClient","Using default OfflineComponentProvider"),await async function(e,t){e.asyncQueue.verifyOperationInProgress(),pa("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await Gu(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}(e,new $d)),e.offlineComponents}(e);pa("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>async function(e,t){const n=Ia(e);n.asyncQueue.verifyOperationInProgress(),pa("RemoteStore","RemoteStore received new credentials");const r=Oh(n);n.Gr.add(3),await Sh(n),r&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Gr.delete(3),await kh(n)}(t.remoteStore,e))),e.onlineComponents=t}async function Md(e){return e.onlineComponents||(pa("FirestoreClient","Using default OnlineComponentProvider"),await Ld(e,new Od)),e.onlineComponents}async function Ud(e){const t=await Md(e),n=t.eventManager;return n.onListen=pd.bind(null,t.syncEngine),n.onUnlisten=md.bind(null,t.syncEngine),n}function Fd(e,t,n={}){const r=new _a;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new Pd({next:s=>{t.enqueueAndForget((()=>async function(e,t){const n=Ia(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new Ea(Ta.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new Ea(Ta.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new ad(jc(n.path),s,{includeMetadataChanges:!0,wo:!0});return async function(e,t){const n=Ia(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new nd),i)try{s.so=await n.onListen(r)}catch(e){const n=Yh(e,`Initialization of query '${Wc(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.ro(n.onlineState),s.so&&t.oo(s.so)&&od(n)}(e,o)}(await Ud(e),e.asyncQueue,t,n,r))),r.promise}class Vd{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class jd{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof jd&&e.projectId===this.projectId&&e.database===this.database}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const qd=new Map;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Bd(e,t,n){if(!n)throw new Ea(Ta.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function zd(e){if(!rc.isDocumentKey(e))throw new Ea(Ta.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Kd(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":wa()}function Hd(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Ea(Ta.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Kd(e);throw new Ea(Ta.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Gd{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new Ea(Ta.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Ea(Ta.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new Ea(Ta.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Wd{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gd({}),this._settingsFrozen=!1,e instanceof jd?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Ea(Ta.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new jd(e.options.projectId)}(e))}get app(){if(!this._app)throw new Ea(Ta.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Ea(Ta.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gd(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Sa;switch(e.type){case"gapi":const t=e.client;return ba(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new Na(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new Ea(Ta.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=qd.get(e);t&&(pa("ComponentProvider","Removing Datastore"),qd.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Jd{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xd(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Jd(this.firestore,e,this._key)}}class Qd{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Qd(this.firestore,e,this._query)}}class Xd extends Qd{constructor(e,t,n){super(e,t,jc(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Jd(this.firestore,null,new rc(e))}withConverter(e){return new Xd(this.firestore,e,this._path)}}function Yd(e,t,...n){if(e=lt(e),1===arguments.length&&(t=Pa.A()),Bd("doc","path",t),e instanceof Wd){const r=Ba.fromString(t,...n);return zd(r),new Jd(e,null,new rc(r))}{if(!(e instanceof Jd||e instanceof Xd))throw new Ea(Ta.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ba.fromString(t,...n));return zd(r),new Jd(e.firestore,e instanceof Xd?e.converter:null,new rc(r))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Zd{constructor(){this.ma=Promise.resolve(),this.ga=[],this.ya=!1,this.pa=[],this.Ta=null,this.Ea=!1,this.Ia=!1,this.Aa=[],this.ur=new vh(this,"async_queue_retry"),this.Ra=()=>{const e=gh();e&&pa("AsyncQueue","Visibility state changed to "+e.visibilityState),this.ur.er()};const e=gh();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Ra)}get isShuttingDown(){return this.ya}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pa(),this.ba(e)}enterRestrictedMode(e){if(!this.ya){this.ya=!0,this.Ia=e||!1;const t=gh();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Ra)}}enqueue(e){if(this.Pa(),this.ya)return new Promise((()=>{}));const t=new _a;return this.ba((()=>this.ya&&this.Ia?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.ga.push(e),this.va())))}async va(){if(0!==this.ga.length){try{await this.ga[0](),this.ga.shift(),this.ur.reset()}catch(e){if(!$u(e))throw e;pa("AsyncQueue","Operation failed with retryable error: "+e)}this.ga.length>0&&this.ur.Zi((()=>this.va()))}}ba(e){const t=this.ma.then((()=>(this.Ea=!0,e().catch((e=>{this.Ta=e,this.Ea=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e);throw ma("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Ea=!1,e))))));return this.ma=t,t}enqueueAfterDelay(e,t,n){this.Pa(),this.Aa.indexOf(e)>-1&&(t=0);const r=Xh.createAndSchedule(this,e,t,n,(e=>this.Va(e)));return this.pa.push(r),r}Pa(){this.Ta&&wa()}verifyOperationInProgress(){}async Sa(){let e;do{e=this.ma,await e}while(e!==this.ma)}Da(e){for(const t of this.pa)if(t.timerId===e)return!0;return!1}Ca(e){return this.Sa().then((()=>{this.pa.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.pa)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Sa()}))}Na(e){this.Aa.push(e)}Va(e){const t=this.pa.indexOf(e);this.pa.splice(t,1)}}class ef extends Wd{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new Zd,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||nf(this),this._firestoreClient.terminate()}}function tf(e){return e._firestoreClient||nf(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function nf(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new Vd(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new xd(e._authCredentials,e._appCheckCredentials,e._queue,r)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
     */class rf{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Ea(Ta.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ka(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class sf{constructor(e){this._byteString=e}static fromBase64String(e){try{return new sf(Ga.fromBase64String(e))}catch(e){throw new Ea(Ta.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new sf(Ga.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class of{constructor(e){this._methodName=e}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class af{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Ea(Ta.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Ea(Ta.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return xa(this._lat,e._lat)||xa(this._long,e._long)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const cf=/^__.*__$/;class lf{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new El(e,this.data,this.fieldMask,t,this.fieldTransforms):new Tl(e,this.data,t,this.fieldTransforms)}}class uf{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new El(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function hf(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw wa()}}class df{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.k=n,this.ignoreUndefinedProperties=r,void 0===i&&this.ka(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get xa(){return this.settings.xa}$a(e){return new df(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Fa(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.$a({path:n,Oa:!1});return r.Ma(e),r}La(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.$a({path:n,Oa:!1});return r.ka(),r}Ba(e){return this.$a({path:void 0,Oa:!0})}Ua(e){return _f(e,this.settings.methodName,this.settings.qa||!1,this.path,this.settings.Ka)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}ka(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ma(this.path.get(e))}Ma(e){if(0===e.length)throw this.Ua("Document fields must not be empty");if(hf(this.xa)&&cf.test(e))throw this.Ua('Document fields cannot begin and end with "__"')}}class ff{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.k=n||yh(e)}ja(e,t,n,r=!1){return new df({xa:e,methodName:t,Ka:n,path:Ka.emptyPath(),Oa:!1,qa:r},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function pf(e){const t=e._freezeSettings(),n=yh(e._databaseId);return new ff(e._databaseId,!!t.ignoreUndefinedProperties,n)}function mf(e,t,n,r,i,s={}){const o=e.ja(s.merge||s.mergeFields?2:0,t,n,i);bf("Data must be an object, but it was:",o,r);const a=vf(r,o);let c,l;if(s.merge)c=new Ha(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=If(t,r,n);if(!o.contains(i))throw new Ea(Ta.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);kf(e,i)||e.push(i)}c=new Ha(e),l=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,l=o.fieldTransforms;return new lf(new yc(a),c,l)}class gf extends of{_toFieldTransform(e){if(2!==e.xa)throw 1===e.xa?e.Ua(`${this._methodName}() can only appear at the top level of your update data`):e.Ua(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof gf}}function yf(e,t){if(wf(e=lt(e)))return bf("Unsupported field value:",t,e),vf(e,t);if(e instanceof of)return function(e,t){if(!hf(t.xa))throw t.Ua(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Ua(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Oa&&4!==t.xa)throw t.Ua("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=yf(i,t.Ba(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=lt(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return el(t.k,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Ma.fromDate(e);return{timestampValue:su(t.k,n)}}if(e instanceof Ma){const n=new Ma(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:su(t.k,n)}}if(e instanceof af)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof sf)return{bytesValue:ou(t.k,e._byteString)};if(e instanceof Jd){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Ua(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:lu(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Ua(`Unsupported field value: ${Kd(e)}`)}(e,t)}function vf(e,t){const n={};return ja(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Va(e,((e,r)=>{const i=yf(r,t.Fa(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function wf(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Ma||e instanceof af||e instanceof sf||e instanceof Jd||e instanceof of)}function bf(e,t,n){if(!wf(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Kd(n);throw"an object"===r?t.Ua(e+" a custom object"):t.Ua(e+" "+r)}}function If(e,t,n){if((t=lt(t))instanceof rf)return t._internalPath;if("string"==typeof t)return Ef(e,t);throw _f("Field path arguments must be of type string or FieldPath.",e,!1,void 0,n)}const Tf=new RegExp("[~\\*/\\[\\]]");function Ef(e,t,n){if(t.search(Tf)>=0)throw _f(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new rf(...t.split("."))._internalPath}catch(r){throw _f(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function _f(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Ea(Ta.INVALID_ARGUMENT,a+e+c)}function kf(e,t){return e.some((e=>e.isEqual(t)))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Sf{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Jd(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Af(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Cf("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Af extends Sf{data(){return super.data()}}function Cf(e,t){return"string"==typeof t?Ef(e,t):t instanceof rf?t._internalPath:t._delegate._internalPath}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Nf{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Rf extends Sf{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Df(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Cf("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Df extends Rf{data(e={}){return super.data(e)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
function $f(e){e=Hd(e,Jd);const t=Hd(e.firestore,ef);return Fd(tf(t),e._key).then((n=>function(e,t,n){const r=n.docs.get(t._key),i=new Of(e);return new Rf(e,i,t._key,r,new Nf(n.hasPendingWrites,n.fromCache),t.converter)}(t,e,n)))}class Of extends class{convertValue(e,t="none"){switch(ic(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Qa(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Xa(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw wa()}}convertObject(e,t){const n={};return Va(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new af(Qa(e.latitude),Qa(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Za(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ec(e));default:return null}}convertTimestamp(e){const t=Ja(e);return new Ma(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Ba.fromString(e);ba(Ru(n));const r=new jd(n.get(1),n.get(3)),i=new rc(n.popFirst(5));return r.isEqual(t)||ma(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */{constructor(e){super(),this.firestore=e}convertBytes(e){return new sf(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Jd(this.firestore,null,t)}}function Pf(e,t,n,...r){e=Hd(e,Jd);const i=Hd(e.firestore,ef),s=pf(i);let o;return o="string"==typeof(t=lt(t))||t instanceof rf?function(e,t,n,r,i,s){const o=e.ja(1,t,n),a=[If(t,r,n)],c=[i];if(s.length%2!=0)throw new Ea(Ta.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)a.push(If(t,s[e])),c.push(s[e+1]);const l=[],u=yc.empty();for(let e=a.length-1;e>=0;--e)if(!kf(l,a[e])){const t=a[e];let n=c[e];n=lt(n);const r=o.La(t);if(n instanceof gf)l.push(t);else{const e=yf(n,r);null!=e&&(l.push(t),u.set(t,e))}}const h=new Ha(l);return new uf(u,h,o.fieldTransforms)}(s,"updateDoc",e._key,t,n,r):function(e,t,n,r){const i=e.ja(1,t,n);bf("Data must be an object, but it was:",i,r);const s=[],o=yc.empty();Va(r,((e,r)=>{const a=Ef(t,e,n);r=lt(r);const c=i.La(a);if(r instanceof gf)s.push(a);else{const e=yf(r,c);null!=e&&(s.push(a),o.set(a,e))}}));const a=new Ha(s);return new uf(o,a,i.fieldTransforms)}(s,"updateDoc",e._key,t),xf(i,[o.toMutation(e._key,pl.exists(!0))])}function xf(e,t){return function(e,t){const n=new _a;return e.asyncQueue.enqueueAndForget((async()=>gd(await function(e){return Md(e).then((e=>e.syncEngine))}(e),t,n))),n.promise}(tf(e),t)}
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
function Lf(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function Mf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}!function(e,t=!0){ha="9.6.1",Nt(new ut("firestore",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=new ef(r,new Aa(e.getProvider("auth-internal")),new Da(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),i._setSettings(n),i}),"PUBLIC")),xt(la,"3.4.1",e),xt(la,"3.4.1","esm2017")}();const Uf=Mf,Ff=new Ze("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Vf=new wt("@firebase/auth");function jf(e,...t){Vf.logLevel<=pt.ERROR&&Vf.error(`Auth (9.6.1): ${e}`,...t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function qf(e,...t){throw zf(e,...t)}function Bf(e,...t){return zf(e,...t)}function zf(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Ff.create(e,...t)}function Kf(e,t,...n){if(!e)throw zf(t,...n)}function Hf(e){const t="INTERNAL ASSERTION FAILED: "+e;throw jf(t),new Error(t)}function Gf(e,t){e||Hf(t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Wf=new Map;function Jf(e){Gf(e instanceof Function,"Expected a class definition");let t=Wf.get(e);return t?(Gf(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Wf.set(e,t),t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
function Qf(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Xf(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Yf(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==Xf()&&"https:"!==Xf()&&!Je()&&!("connection"in navigator)||navigator.onLine}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Zf{constructor(e,t){this.shortDelay=e,this.longDelay=t,Gf(t>e,"Short delay should be less than long delay!"),this.isMobile=We()||Qe()}get(){return Yf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ep(e,t){Gf(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class tp{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Hf("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Hf("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Hf("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const np={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},rp=new Zf(3e4,6e4);
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ip(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function sp(e,t,n,r,i={}){return op(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=rt(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),tp.fetch()(cp(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function op(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},np),t);try{const t=new lp(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw up(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw up(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw up(e,"email-already-in-use",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw function(e,t,n){const r=Object.assign(Object.assign({},Uf()),{[t]:n});return new Ze("auth","Firebase",r).create(t,{appName:e.name})}(e,a,o);qf(e,a)}}catch(t){if(t instanceof Ye)throw t;qf(e,"network-request-failed")}}async function ap(e,t,n,r,i={}){const s=await sp(e,t,n,r,i);return"mfaPendingCredential"in s&&qf(e,"multi-factor-auth-required",{_serverResponse:s}),s}function cp(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?ep(e.config,i):`${e.config.apiScheme}://${i}`}class lp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Bf(this.auth,"timeout"))),rp.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function up(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Bf(e,t,r);return i.customData._tokenResponse=n,i}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
function hp(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}function dp(e){return 1e3*Number(e)}function fp(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return jf("JWT malformed, contained fewer than 3 sections"),null;try{const e=function(e){try{return Ke.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null}(n);return e?JSON.parse(e):(jf("Failed to decode base64 JWT payload"),null)}catch(e){return jf("Caught error parsing JWT payload as JSON",e),null}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function pp(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Ye&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class mp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class gp{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=hp(this.lastLoginAt),this.creationTime=hp(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
     */async function yp(e){var t;const n=e.auth,r=await e.getIdToken(),i=await pp(e,async function(e,t){return sp(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));Kf(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=Lf(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const u=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new gp(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class vp{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Kf(e.idToken,"internal-error"),Kf(void 0!==e.idToken,"internal-error"),Kf(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=fp(e);return Kf(t,"internal-error"),Kf(void 0!==t.exp,"internal-error"),Kf(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Kf(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function(e,t){const n=await op(e,{},(async()=>{const n=rt({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=cp(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",tp.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new vp;return n&&(Kf("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(Kf("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(Kf("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vp,this.toJSON())}_performRefresh(){return Hf("not implemented")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function wp(e,t){Kf("string"==typeof e||void 0===e,"internal-error",{appName:t})}class bp{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Lf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new mp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new gp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await pp(this,this.stsTokenManager.getToken(this.auth,e));return Kf(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=lt(e),r=await n.getIdToken(t),i=fp(r);Kf(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:hp(dp(i.auth_time)),issuedAtTime:hp(dp(i.iat)),expirationTime:hp(dp(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=lt(e);await yp(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Kf(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new bp(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Kf(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await yp(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await pp(this,async function(e,t){return sp(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:I,stsTokenManager:T}=t;Kf(v&&T,e,"internal-error");const E=vp.fromJSON(this.name,T);Kf("string"==typeof v,e,"internal-error"),wp(u,e.name),wp(h,e.name),Kf("boolean"==typeof w,e,"internal-error"),Kf("boolean"==typeof b,e,"internal-error"),wp(d,e.name),wp(f,e.name),wp(p,e.name),wp(m,e.name),wp(g,e.name),wp(y,e.name);const _=new bp({uid:v,auth:e,email:h,emailVerified:w,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:g,lastLoginAt:y});return I&&Array.isArray(I)&&(_.providerData=I.map((e=>Object.assign({},e)))),m&&(_._redirectEventId=m),_}static async _fromIdTokenResponse(e,t,n=!1){const r=new vp;r.updateFromServerResponse(t);const i=new bp({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await yp(i),i}}
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
     */class Ip{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ip.type="NONE";const Tp=Ip;
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
     */function Ep(e,t,n){return`firebase:${e}:${t}:${n}`}class _p{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Ep(this.userKey,r.apiKey,i),this.fullPersistenceKey=Ep("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?bp._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new _p(Jf(Tp),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||Jf(Tp);const s=Ep(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const r=bp._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new _p(i,e,n)):new _p(i,e,n)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function kp(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Np(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Sp(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Dp(t))return"Blackberry";if($p(t))return"Webos";if(Ap(t))return"Safari";if((t.includes("chrome/")||Cp(t))&&!t.includes("edge/"))return"Chrome";if(Rp(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Sp(e=Ge()){return/firefox\//i.test(e)}function Ap(e=Ge()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Cp(e=Ge()){return/crios\//i.test(e)}function Np(e=Ge()){return/iemobile/i.test(e)}function Rp(e=Ge()){return/android/i.test(e)}function Dp(e=Ge()){return/blackberry/i.test(e)}function $p(e=Ge()){return/webos/i.test(e)}function Op(e=Ge()){return/iphone|ipad|ipod/i.test(e)}function Pp(e=Ge()){return Op(e)||Rp(e)||$p(e)||Dp(e)||/windows phone/i.test(e)||Np(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function xp(e,t=[]){let n;switch(e){case"Browser":n=kp(Ge());break;case"Worker":n=`${kp(Ge())}-${e}`;break;default:n=e}return`${n}/JsCore/9.6.1/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Lp{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Up(this),this.idTokenSubscription=new Up(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ff,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Jf(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await _p.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);r&&r!==i||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(Kf(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await yp(e)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?lt(e):null;return t&&Kf(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&Kf(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Jf(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ze("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Jf(e)||this._popupRedirectResolver;Kf(t,this,"argument-error"),this.redirectPersistenceManager=await _p.create(this,[Jf(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return Kf(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Kf(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function Mp(e){return lt(e)}class Up{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new ot(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return Kf(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Fp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Hf("not implemented")}_getIdTokenResponse(e){return Hf("not implemented")}_linkToIdToken(e,t){return Hf("not implemented")}_getReauthenticationResolver(e){return Hf("not implemented")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Vp extends Fp{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Vp(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Vp(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
return async function(e,t){return ap(e,"POST","/v1/accounts:signInWithPassword",ip(e,t))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return ap(e,"POST","/v1/accounts:signInWithEmailLink",ip(e,t))}(e,{email:this._email,oobCode:this._password});default:qf(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return async function(e,t){return sp(e,"POST","/v1/accounts:update",t)}(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return ap(e,"POST","/v1/accounts:signInWithEmailLink",ip(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:qf(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function jp(e,t){return ap(e,"POST","/v1/accounts:signInWithIdp",ip(e,t))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class qp extends Fp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new qp(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):qf("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Lf(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new qp(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return jp(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,jp(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,jp(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=rt(t)}return e}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Bp{constructor(e){var t,n,r,i,s,o;const a=it(st(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);Kf(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=it(st(e)).link,n=t?it(st(t)).deep_link_id:null,r=it(st(e)).deep_link_id;return(r?it(st(r)).link:null)||r||n||t||e}(e);try{return new Bp(t)}catch(e){return null}}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class zp{constructor(){this.providerId=zp.PROVIDER_ID}static credential(e,t){return Vp._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Bp.parseLink(t);return Kf(n,"argument-error"),Vp._fromEmailAndCode(e,n.code,n.tenantId)}}zp.PROVIDER_ID="password",zp.EMAIL_PASSWORD_SIGN_IN_METHOD="password",zp.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Kp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
     */class Hp extends Kp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Gp extends Hp{constructor(){super("facebook.com")}static credential(e){return qp._fromParams({providerId:Gp.PROVIDER_ID,signInMethod:Gp.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gp.credentialFromTaggedObject(e)}static credentialFromError(e){return Gp.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Gp.credential(e.oauthAccessToken)}catch(e){return null}}}Gp.FACEBOOK_SIGN_IN_METHOD="facebook.com",Gp.PROVIDER_ID="facebook.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Wp extends Hp{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return qp._fromParams({providerId:Wp.PROVIDER_ID,signInMethod:Wp.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Wp.credentialFromTaggedObject(e)}static credentialFromError(e){return Wp.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Wp.credential(t,n)}catch(e){return null}}}Wp.GOOGLE_SIGN_IN_METHOD="google.com",Wp.PROVIDER_ID="google.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Jp extends Hp{constructor(){super("github.com")}static credential(e){return qp._fromParams({providerId:Jp.PROVIDER_ID,signInMethod:Jp.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jp.credentialFromTaggedObject(e)}static credentialFromError(e){return Jp.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Jp.credential(e.oauthAccessToken)}catch(e){return null}}}Jp.GITHUB_SIGN_IN_METHOD="github.com",Jp.PROVIDER_ID="github.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Qp extends Hp{constructor(){super("twitter.com")}static credential(e,t){return qp._fromParams({providerId:Qp.PROVIDER_ID,signInMethod:Qp.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Qp.credentialFromTaggedObject(e)}static credentialFromError(e){return Qp.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Qp.credential(t,n)}catch(e){return null}}}Qp.TWITTER_SIGN_IN_METHOD="twitter.com",Qp.PROVIDER_ID="twitter.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Xp{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await bp._fromIdTokenResponse(e,n,r),s=Yp(n);return new Xp({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Yp(n);return new Xp({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Yp(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Zp extends Ye{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Zp.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Zp(e,t,n,r)}}function em(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Zp._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function tm(e,t,n=!1){const r="signIn",i=await em(e,r,t),s=await Xp._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function nm(e,t,n){const r=Mp(e),i=await
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function(e,t){return ap(e,"POST","/v1/accounts:signUp",ip(e,t))}(r,{returnSecureToken:!0,email:t,password:n}),s=await Xp._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function rm(e,t,n){return async function(e,t){return tm(Mp(e),t)}(lt(e),zp.credential(t,n))}const im="__sak";
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
     */class sm{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(im,"1"),this.storage.removeItem(im),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class om extends sm{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Ge();return Ap(e)||Op(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Pp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Xe()&&10===document.documentMode&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}om.type="LOCAL";const am=om;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class cm extends sm{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}cm.type="SESSION";const lm=cm;
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
class um{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new um(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function hm(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
     */um.receivers=[];class dm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=hm("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function fm(){return window}
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
function pm(){return void 0!==fm().WorkerGlobalScope&&"function"==typeof fm().importScripts}
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
const mm="firebaseLocalStorageDb",gm="firebaseLocalStorage",ym="fbase_key";class vm{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function wm(e,t){return e.transaction([gm],t?"readwrite":"readonly").objectStore(gm)}function bm(){const e=indexedDB.open(mm,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(gm,{keyPath:ym})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(gm)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(mm);return new vm(e).toPromise()}(),t(await bm()))}))}))}async function Im(e,t,n){const r=wm(e,!0).put({[ym]:t,value:n});return new vm(r).toPromise()}function Tm(e,t){const n=wm(e,!0).delete(t);return new vm(n).toPromise()}class Em{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await bm()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=um._getInstance(pm()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new dm(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&function(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bm();return await Im(e,im,"1"),await Tm(e,im),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Im(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=wm(e,!1).get(t),r=await new vm(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Tm(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=wm(e,!1).getAll();return new vm(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Em.type="LOCAL";const _m=Em;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function km(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Bf("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",function(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}().appendChild(r)}))}new Zf(3e4,6e4);
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
class Sm extends Fp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return jp(e,this._buildIdpRequest())}_linkToIdToken(e,t){return jp(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return jp(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Am(e){return tm(e.auth,new Sm(e),e.bypassAuthState)}function Cm(e){const{auth:t,user:n}=e;return Kf(n,t,"internal-error"),
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
async function(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await pp(e,em(r,i,t,e),n);Kf(s.idToken,r,"internal-error");const o=fp(s.idToken);Kf(o,r,"internal-error");const{sub:a}=o;return Kf(e.uid===a,r,"user-mismatch"),Xp._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&qf(r,"user-mismatch"),e}}(n,new Sm(e),e.bypassAuthState)}async function Nm(e){const{auth:t,user:n}=e;return Kf(n,t,"internal-error"),async function(e,t,n=!1){const r=await pp(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Xp._forOperation(e,"link",r)}(n,new Sm(e),e.bypassAuthState)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Rm{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Am;case"linkViaPopup":case"linkViaRedirect":return Nm;case"reauthViaPopup":case"reauthViaRedirect":return Cm;default:qf(this.auth,"internal-error")}}resolve(e){Gf(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gf(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Dm=new Zf(2e3,1e4);class $m extends Rm{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,$m.currentPopupAction&&$m.currentPopupAction.cancel(),$m.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Kf(e,this.auth,"internal-error"),e}async onExecution(){Gf(1===this.filter.length,"Popup operations only handle one event");const e=hm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Bf(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Bf(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$m.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Bf(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Dm.get())};e()}}$m.currentPopupAction=null;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Om="pendingRedirect",Pm=new Map;class xm extends Rm{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Pm.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return Ep(Om,e.config.apiKey,e.name)}(t),r=function(e){return Jf(e._redirectPersistence)}(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Pm.set(this.auth._key(),e)}return this.bypassAuthState||Pm.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Lm(e,t,n=!1){const r=Mp(e),i=
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
function(e,t){return t?Jf(t):(Kf(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(r,t),s=new xm(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Mm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fm(e);default:return!1}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Fm(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Bf(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Um(e))}saveEventToCache(e){this.cachedEventUids.add(Um(e)),this.lastProcessedEventTime=Date.now()}}function Um(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Fm({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Vm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jm=/^https?/;async function qm(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return sp(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Bm(e))return}catch(e){}qf(e,"unauthorized-domain")}function Bm(e){const t=Qf(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!jm.test(n))return!1;if(Vm.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
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
     */const zm=new Zf(3e4,6e4);function Km(){const e=fm().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function Hm(e){return new Promise(((t,n)=>{var r,i,s;function o(){Km(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Km(),n(Bf(e,"network-request-failed"))},timeout:zm.get()})}if(null===(i=null===(r=fm().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=fm().gapi)||void 0===s?void 0:s.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return fm()[t]=()=>{gapi.load?o():n(Bf(e,"network-request-failed"))},km(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Gm=null,e}))}let Gm=null;
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
const Wm=new Zf(5e3,15e3),Jm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Qm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Xm(e){const t=e.config;Kf(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?ep(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:Ot},i=Qm.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${rt(r).slice(1)}`}async function Ym(e){const t=await function(e){return Gm=Gm||Hm(e),Gm}(e),n=fm().gapi;return Kf(n,e,"internal-error"),t.open({where:document.body,url:Xm(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Jm,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=Bf(e,"network-request-failed"),s=fm().setTimeout((()=>{r(i)}),Wm.get());function o(){fm().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
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
     */const Zm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class eg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function tg(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Zm),{width:r.toString(),height:i.toString(),top:s,left:o}),l=Ge().toLowerCase();n&&(a=Cp(l)?"_blank":n),Sp(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Ge()){var t;return Op(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
     */(t||"",a),new eg(null);const h=window.open(t||"",a,u);Kf(h,e,"popup-blocked");try{h.focus()}catch(e){}return new eg(h)}const ng="__/auth/handler",rg="emulator/auth/handler";function ig(e,t,n,r,i,s){Kf(e.config.authDomain,e,"auth-domain-config-required"),Kf(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Ot,eventId:i};if(t instanceof Kp){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof Hp){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${ng}`;return ep(e,rg)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)}?${rt(a).slice(1)}`}const sg="webStorageSupport";const og=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lm,this._completeRedirectFn=Lm}async _openPopup(e,t,n,r){var i;Gf(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return tg(e,ig(e,t,n,Qf(),r),hm())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=ig(e,t,n,Qf(),r),fm().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Gf(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Ym(e),n=new Mm(e);return t.register("authEvent",(t=>{Kf(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(sg,{type:sg},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),qf(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=qm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Pp()||Ap()||Op()}};var ag,cg="@firebase/auth",lg="0.19.4";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class ug{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Kf(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
function hg(e=Pt()){const t=Rt(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=Rt(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(tt(n.getOptions(),null!=t?t:{}))return e;qf(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:og,persistence:[_m,am,lm]})}function dg(e){e?setTimeout((()=>{window.location.href="/"}),e):window.location.href="/"}ag="Browser",Nt(new ut("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:i}=n.options;return(e=>{Kf(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),Kf(!(null==i?void 0:i.includes(":")),"argument-error",{appName:e.name});const n={apiKey:r,authDomain:i,clientPlatform:ag,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xp(ag)},s=new Lp(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Jf);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Nt(new ut("auth-internal",(e=>(e=>new ug(e))(Mp(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),xt(cg,lg,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(ag)),xt(cg,lg,"esm2017");const fg={email:"",numGames:0,avgWPM:0,matchHistory:[],matchHistoryTime:[],uid:""};let pg,mg,gg;const yg=window.sessionStorage,vg="user",wg="leaderboard",bg="userinfo",Ig={easyGamesFailed:0,easyGamesWon:0,easyLPM:0,easyWPM:0,hardGamesFailed:0,hardGamesWon:0,hardLPM:0,hardWPM:0,mediumGamesFailed:0,mediumGamesWon:0,mediumLPM:0,mediumWPM:0};function Tg(){pg=function(e,t={}){"object"!=typeof t&&(t={name:t});const n=Object.assign({name:_t,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw Dt.create("bad-app-name",{appName:String(r)});const i=St.get(r);if(i){if(tt(e,i.options)&&tt(n,i.config))return i;throw Dt.create("duplicate-app",{appName:r})}const s=new ft(r);for(const e of At.values())s.addComponent(e);const o=new $t(e,n,s);return St.set(r,o),o}({apiKey:"AIzaSyAcfFLGAnLbwIUCfyCYgayBl2oPvbu5RFQ",authDomain:"perfect-type.firebaseapp.com",projectId:"perfect-type",storageBucket:"perfect-type.appspot.com",messagingSenderId:"358376646912",appId:"1:358376646912:web:d750e4f6970556a8072be5",measurementId:"G-MDGFNKMNEC"}),Jn(pg),mg=hg(),gg=function(e=Pt()){return Rt(e,"firestore").getImmediate()}()}function Eg(){const e=yg.getItem(vg);return null==e?null:e.length>0?JSON.parse(e):null}function _g(){return null!=Eg()}async function kg(e,t,n){const r=Yd(gg,e,t);return await function(e,t,n){e=Hd(e,Jd);const r=Hd(e.firestore,ef),i=function(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}(e.converter,t,n);return xf(r,[mf(pf(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,pl.none())])}(r,n),n}async function Sg(){try{await function(e){return lt(e).signOut()}()}catch(e){}yg.setItem(vg,""),dg()}async function Ag(e){const t=Yd(gg,wg,e);return(await $f(t)).data()}async function Cg(e,t){const n=Yd(gg,bg,e);await Pf(n,t)}function Ng(e,t,n){const r=e.slice();return r[20]=t[n],r[22]=n,r}function Rg(e,t,n){const r=e.slice();return r[23]=t[n],r[22]=n,r}function Dg(e,t,n){const r=e.slice();return r[25]=t[n],r[27]=n,r}function $g(e){let t,n;return t=new Ue({props:{winGame:e[3],wpm:e[4],tryAgain:e[7]}}),{c(){G(t.$$.fragment)},m(e,r){W(t,e,r),n=!0},p(e,n){const r={};8&n&&(r.winGame=e[3]),16&n&&(r.wpm=e[4]),t.$set(r)},i(e){n||(z(t.$$.fragment,e),n=!0)},o(e){K(t.$$.fragment,e),n=!1},d(e){J(t,e)}}}function Og(t){let n,r,s,o,a,c,l,u,h;n=new je({props:{mode:t[5],changeMode:t[8]}});let d=t[0],f=[];for(let e=0;e<d.length;e+=1)f[e]=xg(Rg(t,d,e));let p=[...Array(10).keys()],b=[];for(let e=0;e<p.length;e+=1)b[e]=Lg(Ng(t,p,e));return{c(){G(n.$$.fragment),r=I(),s=w("div");for(let e=0;e<f.length;e+=1)f[e].c();o=I();for(let e=0;e<b.length;e+=1)b[e].c();a=I(),c=w("div"),_(s,"class","game-environment noselect svelte-w60ehk"),_(s,"id","game-env"),_(c,"id","occlusion"),_(c,"class","svelte-w60ehk")},m(d,p){W(n,d,p),g(d,r,p),g(d,s,p);for(let e=0;e<f.length;e+=1)f[e].m(s,null);m(s,o);for(let e=0;e<b.length;e+=1)b[e].m(s,null);var y;g(d,a,p),g(d,c,p),l=!0,u||(y=t[6].call(null,s),h=y&&i(y.destroy)?y.destroy:e,u=!0)},p(e,t){const r={};if(32&t&&(r.mode=e[5]),n.$set(r),3&t){let n;for(d=e[0],n=0;n<d.length;n+=1){const r=Rg(e,d,n);f[n]?f[n].p(r,t):(f[n]=xg(r),f[n].c(),f[n].m(s,o))}for(;n<f.length;n+=1)f[n].d(1);f.length=d.length}},i(e){l||(z(n.$$.fragment,e),l=!0)},o(e){K(n.$$.fragment,e),l=!1},d(e){J(n,e),e&&y(r),e&&y(s),v(f,e),v(b,e),e&&y(a),e&&y(c),u=!1,h()}}}function Pg(e){let t,n,r,i=e[25]+"";return{c(){t=w("div"),n=b(i),_(t,"class","game-letter svelte-w60ehk"),_(t,"id",r=e[22]-1<0?`${e[27]}`:`${e[1][e[22]-1]+e[27]}`)},m(e,r){g(e,t,r),m(t,n)},p(e,s){1&s&&i!==(i=e[25]+"")&&k(n,i),2&s&&r!==(r=e[22]-1<0?`${e[27]}`:`${e[1][e[22]-1]+e[27]}`)&&_(t,"id",r)},d(e){e&&y(t)}}}function xg(e){let t,n,r=0!=e[22]&&function(e){let t,n,r;return{c(){t=w("div"),n=b(" "),_(t,"class","game-letter svelte-w60ehk"),_(t,"id",r=""+(e[1][e[22]-1]-1))},m(e,r){g(e,t,r),m(t,n)},p(e,n){2&n&&r!==(r=""+(e[1][e[22]-1]-1))&&_(t,"id",r)},d(e){e&&y(t)}}}(e),i=e[23],s=[];for(let t=0;t<i.length;t+=1)s[t]=Pg(Dg(e,i,t));return{c(){t=w("div"),r&&r.c(),n=I();for(let e=0;e<s.length;e+=1)s[e].c();_(t,"class","game-word svelte-w60ehk")},m(e,i){g(e,t,i),r&&r.m(t,null),m(t,n);for(let e=0;e<s.length;e+=1)s[e].m(t,null)},p(e,n){if(0!=e[22]&&r.p(e,n),3&n){let r;for(i=e[23],r=0;r<i.length;r+=1){const o=Dg(e,i,r);s[r]?s[r].p(o,n):(s[r]=Pg(o),s[r].c(),s[r].m(t,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=i.length}},d(e){e&&y(t),r&&r.d(),v(s,e)}}}function Lg(e){let t;return{c(){t=w("div"),t.innerHTML='<div class="game-letter invisible-letter svelte-w60ehk">if you see this sentence, you&#39;re awesome</div> \n        '},m(e,n){g(e,t,n)},d(e){e&&y(t)}}}function Mg(e){let t,n,r,i;const s=[Og,$g],o=[];function a(e,t){return e[2]?1:0}return n=a(e),r=o[n]=s[n](e),{c(){t=w("main"),r.c()},m(e,r){g(e,t,r),o[n].m(t,null),i=!0},p(e,[i]){let c=n;n=a(e),n===c?o[n].p(e,i):(q(),K(o[c],1,1,(()=>{o[c]=null})),B(),r=o[n],r?r.p(e,i):(r=o[n]=s[n](e),r.c()),z(r,1),r.m(t,null))},i(e){i||(z(r),i=!0)},o(e){K(r),i=!1},d(e){e&&y(t),o[n].d()}}}function Ug(e,t,n){let r=_g(),{currentRoute:i}=t,{params:s}=t;Array.prototype.random=function(){return this[Math.floor(Math.random()*this.length)]};let o,a=u(),c=a.split(" "),l=[];for(let e=0;e<c.length;e++)l.push(e-1<0?c[e].length+1:c[e].length+l[e-1]+1);function u(){let e=5;return $e.subscribe((t=>{e=t})),ze(e).join(" ")}De.subscribe((e=>{o=e}));let h=!1,d=!1,f=0,p=0,m=0;function g(){f=0,p=0,De.update((()=>0)),n(2,h=!1),n(3,d=!1),a=u(),n(0,c=a.split(" ")),n(1,l=[]);for(let e=0;e<c.length;e++)l.push(e-1<0?c[e].length+1:c[e].length+l[e-1]+1);n(5,y)}let y="easy";const v={easy:5,medium:20,hard:50};return e.$$set=e=>{"currentRoute"in e&&n(9,i=e.currentRoute),"params"in e&&n(10,s=e.params)},[c,l,h,d,m,y,function(){const e=e=>{if(e.preventDefault(),!h){if(0==f&&(f=new Date),a.charAt(o)!==e.key){if(n(2,h=!0),r){let e=y+"GamesFailed";(async function(e,t){const n=Yd(gg,bg,e);return(await $f(n)).data()[t]})(Eg().uid,e).then((t=>{let n={};n[e]=t+1,Cg(Eg().uid,n)}))}}else!function(e){let t=document.getElementById(o);t.classList.add("typed-letter"),t.offsetLeft<p&&t.parentElement.scrollIntoView(!0);p=t.offsetLeft}(),De.update((e=>e+1));if(o==a.length){let e=(new Date-f)/6e4,t=Math.round(a.length/e*1e3)/1e3;if(n(4,m=Math.round(c.length/e*1e3)/1e3),n(2,h=!0),n(3,d=!0),r){let e=y+"GamesWon",n=y+"LPM",r=y+"WPM";(async function(e,t,n,r){const i=Yd(gg,bg,e),s=(await $f(i)).data(),o={};return o[t]=s[t],o[n]=s[n],o[r]=s[r],o})(Eg().uid,e,n,r).then((i=>{let s={};s[e]=i[e]+1,s[n]=Math.round((i[n]*i[e]+t)/s[e]*1e3)/1e3,s[r]=Math.round((i[r]*i[e]+m)/s[e]*1e3)/1e3,Cg(Eg().uid,s)}));let i=y+"_wpm";!async function(e,t,n){Ag(t).then((r=>{const i=[];let s=!1;for(let t=0;t<r.data.length;t++){if(!s){let o=JSON.parse(r.data[t]);if(n>o.score){let t=new Date,r=t.getDate(),o=t.getMonth()+1,a=t.getFullYear();i.push(JSON.stringify({user:e.email.substr(0,e.email.indexOf("@")),score:n,date:`${o}/${r}/${a}`})),s=!0}}s&&t==r.data.length-1||i.push(r.data[t])}s&&Pf(Yd(gg,wg,t),{data:i})}))}(Eg(),i,m)}}}};return document.addEventListener("keypress",e),{destroy(){document.removeEventListener("keypress",e)}}},g,function(e){let t=document.getElementById(y);t.className=t.className.replace(" active-mode",""),document.getElementById(e.target.innerHTML).className+=" active-mode",n(5,y=e.target.innerHTML),$e.update((()=>v[y]));for(let e=0;e<o;e++){document.getElementById(e).classList.remove("typed-letter")}g()},i,s]}function Fg(t){let n,r,i,s,o,a,c;return{c(){n=w("div"),r=w("label"),i=b(t[1]),s=I(),o=w("input"),_(r,"for",t[2]),_(o,"id",t[2]),_(o,"type",t[4]),_(o,"name",t[2]),_(o,"autocomplete",t[3]),o.value=t[0],_(n,"class","input-container")},m(e,l){g(e,n,l),m(n,r),m(r,i),m(n,s),m(n,o),a||(c=E(o,"input",t[5]),a=!0)},p(e,[t]){2&t&&k(i,e[1]),4&t&&_(r,"for",e[2]),4&t&&_(o,"id",e[2]),16&t&&_(o,"type",e[4]),4&t&&_(o,"name",e[2]),8&t&&_(o,"autocomplete",e[3]),1&t&&o.value!==e[0]&&(o.value=e[0])},i:e,o:e,d(e){e&&y(n),a=!1,c()}}}function Vg(e,t,n){let{value:r=""}=t,{text:i}=t,{id:s}=t,{autocomplete:o}=t,{type:a="text"}=t;return e.$$set=e=>{"value"in e&&n(0,r=e.value),"text"in e&&n(1,i=e.text),"id"in e&&n(2,s=e.id),"autocomplete"in e&&n(3,o=e.autocomplete),"type"in e&&n(4,a=e.type)},[r,i,s,o,a,e=>{n(0,r=e.target.value),function(e,t){let n=e.target.parentNode.querySelector("label");e.target.value.length>0?(n.style.top="-10px",n.style.fontSize="1em"):(n.style.top="10px",n.style.fontSize="1.5em")}(e)}]}class jg extends Y{constructor(e){super(),X(this,e,Vg,Fg,s,{value:0,text:1,id:2,autocomplete:3,type:4})}}function qg(e){let t,n,r,i,s,o,a,c,l,u,h,d,f,p,v,b,T,k,S,A;function C(t){e[6](t)}let R={text:"email",id:"email",type:"email",autocomplete:"email"};function D(t){e[7](t)}void 0!==e[1]&&(R.value=e[1]),a=new jg({props:R}),N.push((()=>H(a,"value",C)));let $={text:"password",id:"password",type:"password",autocomplete:"current-password"};return void 0!==e[2]&&($.value=e[2]),u=new jg({props:$}),N.push((()=>H(u,"value",D))),T=new xe({props:{text:"login"}}),{c(){t=w("form"),n=w("br"),r=I(),i=w("br"),s=I(),o=w("div"),G(a.$$.fragment),l=I(),G(u.$$.fragment),d=I(),f=w("br"),p=I(),v=w("br"),b=I(),G(T.$$.fragment),_(o,"id","form-container")},m(c,h){g(c,t,h),m(t,n),m(t,r),m(t,i),m(t,s),m(t,o),W(a,o,null),m(o,l),W(u,o,null),m(t,d),m(t,f),m(t,p),m(t,v),m(t,b),W(T,t,null),k=!0,S||(A=E(t,"submit",e[3]),S=!0)},p(e,t){const n={};!c&&2&t&&(c=!0,n.value=e[1],x((()=>c=!1))),a.$set(n);const r={};!h&&4&t&&(h=!0,r.value=e[2],x((()=>h=!1))),u.$set(r)},i(e){k||(z(a.$$.fragment,e),z(u.$$.fragment,e),z(T.$$.fragment,e),k=!0)},o(e){K(a.$$.fragment,e),K(u.$$.fragment,e),K(T.$$.fragment,e),k=!1},d(e){e&&y(t),J(a),J(u),J(T),S=!1,A()}}}function Bg(t){let n;return{c(){n=w("p"),n.textContent="logged in! redirecting to main..."},m(e,t){g(e,n,t)},p:e,i:e,o:e,d(e){e&&y(n)}}}function zg(e){let t,n,r,i,s,o;const a=[Bg,qg],c=[];function l(e,t){return e[0]?0:1}return i=l(e),s=c[i]=a[i](e),{c(){t=w("main"),n=w("h1"),n.textContent="login",r=I(),s.c()},m(e,s){g(e,t,s),m(t,n),m(t,r),c[i].m(t,null),o=!0},p(e,[n]){let r=i;i=l(e),i===r?c[i].p(e,n):(q(),K(c[r],1,1,(()=>{c[r]=null})),B(),s=c[i],s?s.p(e,n):(s=c[i]=a[i](e),s.c()),z(s,1),s.m(t,null))},i(e){o||(z(s),o=!0)},o(e){K(s),o=!1},d(e){e&&y(t),c[i].d()}}}function Kg(e,t,n){let r,i,{currentRoute:s}=t,{params:o}=t,a=!1;return e.$$set=e=>{"currentRoute"in e&&n(4,s=e.currentRoute),"params"in e&&n(5,o=e.params)},[a,r,i,function(e){e&&e.preventDefault(),async function(e,t){try{const n=await rm(mg,e,t);return yg.setItem(vg,JSON.stringify(n.user)),n.user}catch(e){return null}}(r,i).then((e=>{null!=e&&(n(0,a=!0),dg(1e3))}))},s,o,function(e){r=e,n(1,r)},function(e){i=e,n(2,i)}]}function Hg(e){let t,n,r,i,s,o,a,c,l,u,h,d,f,p,v,b,T,k,S,A,C,R,D;function $(t){e[7](t)}let O={text:"email",id:"email",type:"email",autocomplete:"email"};function P(t){e[8](t)}void 0!==e[1]&&(O.value=e[1]),n=new jg({props:O}),N.push((()=>H(n,"value",$)));let L={text:"password",id:"password",type:"password",autocomplete:"new-password"};function M(t){e[9](t)}void 0!==e[2]&&(L.value=e[2]),u=new jg({props:L}),N.push((()=>H(u,"value",P)));let U={text:"confirm password",id:"con-password",type:"password",autocomplete:"new-password"};return void 0!==e[3]&&(U.value=e[3]),f=new jg({props:U}),N.push((()=>H(f,"value",M))),A=new xe({props:{text:"signup"}}),{c(){t=w("form"),G(n.$$.fragment),i=I(),s=w("br"),o=I(),a=w("br"),c=I(),l=w("div"),G(u.$$.fragment),d=I(),G(f.$$.fragment),v=I(),b=w("br"),T=I(),k=w("br"),S=I(),G(A.$$.fragment),_(l,"id","form-container")},m(r,h){g(r,t,h),W(n,t,null),m(t,i),m(t,s),m(t,o),m(t,a),m(t,c),m(t,l),W(u,l,null),m(l,d),W(f,l,null),m(t,v),m(t,b),m(t,T),m(t,k),m(t,S),W(A,t,null),C=!0,R||(D=E(t,"submit",e[4]),R=!0)},p(e,t){const i={};!r&&2&t&&(r=!0,i.value=e[1],x((()=>r=!1))),n.$set(i);const s={};!h&&4&t&&(h=!0,s.value=e[2],x((()=>h=!1))),u.$set(s);const o={};!p&&8&t&&(p=!0,o.value=e[3],x((()=>p=!1))),f.$set(o)},i(e){C||(z(n.$$.fragment,e),z(u.$$.fragment,e),z(f.$$.fragment,e),z(A.$$.fragment,e),C=!0)},o(e){K(n.$$.fragment,e),K(u.$$.fragment,e),K(f.$$.fragment,e),K(A.$$.fragment,e),C=!1},d(e){e&&y(t),J(n),J(u),J(f),J(A),R=!1,D()}}}function Gg(t){let n;return{c(){n=w("p"),n.textContent="signed up and logged in! redirecting to main..."},m(e,t){g(e,n,t)},p:e,i:e,o:e,d(e){e&&y(n)}}}function Wg(e){let t,n,r,i,s,o;const a=[Gg,Hg],c=[];function l(e,t){return e[0]?0:1}return i=l(e),s=c[i]=a[i](e),{c(){t=w("main"),n=w("h1"),n.textContent="sign up",r=I(),s.c()},m(e,s){g(e,t,s),m(t,n),m(t,r),c[i].m(t,null),o=!0},p(e,[n]){let r=i;i=l(e),i===r?c[i].p(e,n):(q(),K(c[r],1,1,(()=>{c[r]=null})),B(),s=c[i],s?s.p(e,n):(s=c[i]=a[i](e),s.c()),z(s,1),s.m(t,null))},i(e){o||(z(s),o=!0)},o(e){K(s),o=!1},d(e){e&&y(t),c[i].d()}}}function Jg(e,t,n){let r,i,s,{currentRoute:o}=t,{params:a}=t,c=!1;return e.$$set=e=>{"currentRoute"in e&&n(5,o=e.currentRoute),"params"in e&&n(6,a=e.params)},[c,r,i,s,function(e){e&&e.preventDefault(),function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(r)?s===i?i.length<8?alert("Passwords too short!"):async function(e,t){try{const n=await nm(mg,e,t);yg.setItem(vg,JSON.stringify(n.user));let r=Object.assign({},fg);return r.uid=n.user.uid,r.email=n.user.email,await kg("users",r.uid,r),await kg(bg,r.uid,Ig),n.user}catch(e){return console.log(e),null}}(r,i).then((e=>{null!=e&&(n(0,c=!0),dg(1e3))})):alert("Passwords do not match!"):alert("Invalid email!")},o,a,function(e){r=e,n(1,r)},function(e){i=e,n(2,i)},function(e){s=e,n(3,s)}]}function Qg(e){let t,n,r,i,s;const o=e[1].default,a=l(o,e,e[0],null),c=a||function(e){let t;return{c(){t=b("default card")},m(e,n){g(e,t,n)},d(e){e&&y(t)}}}();return{c(){t=w("main"),n=w("div"),r=w("div"),i=w("p"),c&&c.c(),_(r,"class","container svelte-1yx7glz"),_(n,"class","card svelte-1yx7glz")},m(e,o){g(e,t,o),m(t,n),m(n,r),m(r,i),c&&c.m(i,null),s=!0},p(e,[t]){a&&a.p&&(!s||1&t)&&d(a,o,e,e[0],s?h(o,e[0],t,null):f(e[0]),null)},i(e){s||(z(c,e),s=!0)},o(e){K(c,e),s=!1},d(e){e&&y(t),c&&c.d(e)}}}function Xg(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}class Yg extends Y{constructor(e){super(),X(this,e,Xg,Qg,s,{})}}function Zg(e){let t,n,r;const i=e[1].default,s=l(i,e,e[0],null),o=s||function(e){let t;return{c(){t=b("place analytics cards here")},m(e,n){g(e,t,n)},d(e){e&&y(t)}}}();return{c(){t=w("main"),n=w("div"),o&&o.c(),_(n,"class","analytics-card-collection svelte-dnt7jz")},m(e,i){g(e,t,i),m(t,n),o&&o.m(n,null),r=!0},p(e,[t]){s&&s.p&&(!r||1&t)&&d(s,i,e,e[0],r?h(i,e[0],t,null):f(e[0]),null)},i(e){r||(z(o,e),r=!0)},o(e){K(o,e),r=!1},d(e){e&&y(t),o&&o.d(e)}}}function ey(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}class ty extends Y{constructor(e){super(),X(this,e,ey,Zg,s,{})}}function ny(t){let n,r,i,s,o,a,c,l,u,h,d,f,p,v,T,E=`overall: ${Math.round(100*t[1])/100}${t[5]}`,S=`${Math.round(100*t[2])/100}${t[5]}`,A=`${Math.round(100*t[3])/100}${t[5]}`,C=`${Math.round(100*t[4])/100}${t[5]}`;return{c(){n=w("p"),r=b(E),i=I(),s=w("table"),o=w("tr"),o.innerHTML='<td class="heading svelte-zlvnl5">easy</td> \n        <td class="heading svelte-zlvnl5">medium</td> \n        <td class="heading svelte-zlvnl5">hard</td>',a=I(),c=w("tr"),l=w("td"),u=b(S),h=I(),d=w("td"),f=b(A),p=I(),v=w("td"),T=b(C),_(l,"class","svelte-zlvnl5"),_(d,"class","svelte-zlvnl5"),_(v,"class","svelte-zlvnl5"),_(s,"class","center-table svelte-zlvnl5")},m(e,t){g(e,n,t),m(n,r),g(e,i,t),g(e,s,t),m(s,o),m(s,a),m(s,c),m(c,l),m(l,u),m(c,h),m(c,d),m(d,f),m(c,p),m(c,v),m(v,T)},p(e,t){34&t&&E!==(E=`overall: ${Math.round(100*e[1])/100}${e[5]}`)&&k(r,E),36&t&&S!==(S=`${Math.round(100*e[2])/100}${e[5]}`)&&k(u,S),40&t&&A!==(A=`${Math.round(100*e[3])/100}${e[5]}`)&&k(f,A),48&t&&C!==(C=`${Math.round(100*e[4])/100}${e[5]}`)&&k(T,C)},i:e,o:e,d(e){e&&y(n),e&&y(i),e&&y(s)}}}function ry(e){let t;const n=e[7].default,r=l(n,e,e[6],null);return{c(){r&&r.c()},m(e,n){r&&r.m(e,n),t=!0},p(e,i){r&&r.p&&(!t||64&i)&&d(r,n,e,e[6],t?h(n,e[6],i,null):f(e[6]),null)},i(e){t||(z(r,e),t=!0)},o(e){K(r,e),t=!1},d(e){r&&r.d(e)}}}function iy(e){let t,n,r,i,s,o,a;const c=[ry,ny],l=[];function u(e,t){return null==e[1]?0:1}return s=u(e),o=l[s]=c[s](e),{c(){t=w("main"),n=w("h2"),r=b(e[0]),i=I(),o.c()},m(e,o){g(e,t,o),m(t,n),m(n,r),m(t,i),l[s].m(t,null),a=!0},p(e,[n]){(!a||1&n)&&k(r,e[0]);let i=s;s=u(e),s===i?l[s].p(e,n):(q(),K(l[i],1,1,(()=>{l[i]=null})),B(),o=l[s],o?o.p(e,n):(o=l[s]=c[s](e),o.c()),z(o,1),o.m(t,null))},i(e){a||(z(o),a=!0)},o(e){K(o),a=!1},d(e){e&&y(t),l[s].d()}}}function sy(e,t,n){let{$$slots:r={},$$scope:i}=t,{title:s}=t,{overall:o}=t,{easy:a}=t,{medium:c}=t,{hard:l}=t,{units:u}=t;return e.$$set=e=>{"title"in e&&n(0,s=e.title),"overall"in e&&n(1,o=e.overall),"easy"in e&&n(2,a=e.easy),"medium"in e&&n(3,c=e.medium),"hard"in e&&n(4,l=e.hard),"units"in e&&n(5,u=e.units),"$$scope"in e&&n(6,i=e.$$scope)},[s,o,a,c,l,u,i,r]}class oy extends Y{constructor(e){super(),X(this,e,sy,iy,s,{title:0,overall:1,easy:2,medium:3,hard:4,units:5})}}function ay(t){let n,r;return{c(){var e,t;n=w("img"),e=n.src,t=r=gy,o||(o=document.createElement("a")),o.href=t,e!==o.href&&_(n,"src",r),_(n,"alt","Avatar"),_(n,"class","svelte-g5gjth")},m(e,t){g(e,n,t)},p:e,d(e){e&&y(n)}}}function cy(e){let t,n;return t=new oy({props:{title:e[16],$$slots:{default:[ay]},$$scope:{ctx:e}}}),{c(){G(t.$$.fragment)},m(e,r){W(t,e,r),n=!0},p(e,n){const r={};131072&n&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){n||(z(t.$$.fragment,e),n=!0)},o(e){K(t.$$.fragment,e),n=!1},d(e){J(t,e)}}}function ly(e){let t,n;return t=new oy({props:{title:"total games",overall:e[0],easy:e[1],medium:e[2],hard:e[3],units:""}}),{c(){G(t.$$.fragment)},m(e,r){W(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.overall=e[0]),2&n&&(r.easy=e[1]),4&n&&(r.medium=e[2]),8&n&&(r.hard=e[3]),t.$set(r)},i(e){n||(z(t.$$.fragment,e),n=!0)},o(e){K(t.$$.fragment,e),n=!1},d(e){J(t,e)}}}function uy(e){let t,n,r,i;return t=new Yg({props:{$$slots:{default:[cy]},$$scope:{ctx:e}}}),r=new Yg({props:{$$slots:{default:[ly]},$$scope:{ctx:e}}}),{c(){G(t.$$.fragment),n=I(),G(r.$$.fragment)},m(e,s){W(t,e,s),g(e,n,s),W(r,e,s),i=!0},p(e,n){const i={};131072&n&&(i.$$scope={dirty:n,ctx:e}),t.$set(i);const s={};131087&n&&(s.$$scope={dirty:n,ctx:e}),r.$set(s)},i(e){i||(z(t.$$.fragment,e),z(r.$$.fragment,e),i=!0)},o(e){K(t.$$.fragment,e),K(r.$$.fragment,e),i=!1},d(e){J(t,e),e&&y(n),J(r,e)}}}function hy(e){let t,n;return t=new oy({props:{title:"avg words per minute ",overall:e[4],easy:e[5],medium:e[6],hard:e[7],units:""}}),{c(){G(t.$$.fragment)},m(e,r){W(t,e,r),n=!0},p(e,n){const r={};16&n&&(r.overall=e[4]),32&n&&(r.easy=e[5]),64&n&&(r.medium=e[6]),128&n&&(r.hard=e[7]),t.$set(r)},i(e){n||(z(t.$$.fragment,e),n=!0)},o(e){K(t.$$.fragment,e),n=!1},d(e){J(t,e)}}}function dy(e){let t,n;return t=new oy({props:{title:"avg letters per minute",overall:e[8],easy:e[9],medium:e[10],hard:e[11],units:""}}),{c(){G(t.$$.fragment)},m(e,r){W(t,e,r),n=!0},p(e,n){const r={};256&n&&(r.overall=e[8]),512&n&&(r.easy=e[9]),1024&n&&(r.medium=e[10]),2048&n&&(r.hard=e[11]),t.$set(r)},i(e){n||(z(t.$$.fragment,e),n=!0)},o(e){K(t.$$.fragment,e),n=!1},d(e){J(t,e)}}}function fy(e){let t,n;return t=new oy({props:{title:"pass rate",overall:100*e[12],easy:100*e[13],medium:100*e[14],hard:100*e[15],units:"%"}}),{c(){G(t.$$.fragment)},m(e,r){W(t,e,r),n=!0},p(e,n){const r={};4096&n&&(r.overall=100*e[12]),8192&n&&(r.easy=100*e[13]),16384&n&&(r.medium=100*e[14]),32768&n&&(r.hard=100*e[15]),t.$set(r)},i(e){n||(z(t.$$.fragment,e),n=!0)},o(e){K(t.$$.fragment,e),n=!1},d(e){J(t,e)}}}function py(e){let t,n,r,i,s,o;return t=new Yg({props:{$$slots:{default:[hy]},$$scope:{ctx:e}}}),r=new Yg({props:{$$slots:{default:[dy]},$$scope:{ctx:e}}}),s=new Yg({props:{$$slots:{default:[fy]},$$scope:{ctx:e}}}),{c(){G(t.$$.fragment),n=I(),G(r.$$.fragment),i=I(),G(s.$$.fragment)},m(e,a){W(t,e,a),g(e,n,a),W(r,e,a),g(e,i,a),W(s,e,a),o=!0},p(e,n){const i={};131312&n&&(i.$$scope={dirty:n,ctx:e}),t.$set(i);const o={};134912&n&&(o.$$scope={dirty:n,ctx:e}),r.$set(o);const a={};192512&n&&(a.$$scope={dirty:n,ctx:e}),s.$set(a)},i(e){o||(z(t.$$.fragment,e),z(r.$$.fragment,e),z(s.$$.fragment,e),o=!0)},o(e){K(t.$$.fragment,e),K(r.$$.fragment,e),K(s.$$.fragment,e),o=!1},d(e){J(t,e),e&&y(n),J(r,e),e&&y(i),J(s,e)}}}function my(e){let t,n,r,i,s,o,a;return i=new ty({props:{$$slots:{default:[uy]},$$scope:{ctx:e}}}),o=new ty({props:{$$slots:{default:[py]},$$scope:{ctx:e}}}),{c(){t=w("main"),n=w("h1"),n.textContent="profile",r=I(),G(i.$$.fragment),s=I(),G(o.$$.fragment)},m(e,c){g(e,t,c),m(t,n),m(t,r),W(i,t,null),m(t,s),W(o,t,null),a=!0},p(e,[t]){const n={};131087&t&&(n.$$scope={dirty:t,ctx:e}),i.$set(n);const r={};196592&t&&(r.$$scope={dirty:t,ctx:e}),o.$set(r)},i(e){a||(z(i.$$.fragment,e),z(o.$$.fragment,e),a=!0)},o(e){K(i.$$.fragment,e),K(o.$$.fragment,e),a=!1},d(e){e&&y(t),J(i),J(o)}}}let gy="../../fart.png";function yy(e,t,n){let r,i,s,o,a,c,l,u,h,d,f,p,m,g,y,v,w=Eg().email.substr(0,Eg().email.indexOf("@"));return async function(e){const t=Yd(gg,bg,e);return(await $f(t)).data()}(Eg().uid).then((e=>{n(1,i=e.easyGamesFailed+e.easyGamesWon),n(2,s=e.mediumGamesFailed+e.mediumGamesWon),n(3,o=e.hardGamesFailed+e.hardGamesWon),n(0,r=i+s+o),n(5,c=e.easyWPM),n(9,d=e.easyLPM),n(6,l=e.mediumWPM),n(10,f=e.mediumLPM),n(7,u=e.hardWPM),n(11,p=e.hardLPM),n(4,a=0!=r?(c*i+l*s+u*o)/r:0),n(8,h=0!=r?(d*i+f*s+p*o)/r:0),n(13,g=0!=i?Math.round(e.easyGamesWon/i*100)/100:0),n(14,y=0!=s?Math.round(e.mediumGamesWon/s*100)/100:0),n(15,v=0!=o?Math.round(e.hardGamesWon/o*100)/100:0),n(12,m=0!=r?Math.round((e.easyGamesWon+e.mediumGamesWon+e.hardGamesWon)/r*100)/100:0)})),[r,i,s,o,a,c,l,u,h,d,f,p,m,g,y,v,w]}function vy(e){let t,n,r,i,s,o,a,c;const u=e[2].default,p=l(u,e,e[1],null),v=p||function(e){let t;return{c(){t=b("default card")},m(e,n){g(e,t,n)},d(e){e&&y(t)}}}();return{c(){t=w("main"),n=w("div"),r=w("h1"),i=b(e[0]),s=I(),o=w("div"),a=w("p"),v&&v.c(),_(o,"class","container svelte-dhtldt"),_(n,"class","card svelte-dhtldt")},m(e,l){g(e,t,l),m(t,n),m(n,r),m(r,i),m(n,s),m(n,o),m(o,a),v&&v.m(a,null),c=!0},p(e,[t]){(!c||1&t)&&k(i,e[0]),p&&p.p&&(!c||2&t)&&d(p,u,e,e[1],c?h(u,e[1],t,null):f(e[1]),null)},i(e){c||(z(v,e),c=!0)},o(e){K(v,e),c=!1},d(e){e&&y(t),v&&v.d(e)}}}function wy(e,t,n){let{$$slots:r={},$$scope:i}=t,{title:s}=t;return e.$$set=e=>{"title"in e&&n(0,s=e.title),"$$scope"in e&&n(1,i=e.$$scope)},[s,i,r]}class by extends Y{constructor(e){super(),X(this,e,wy,vy,s,{title:0})}}function Iy(e){let t,n,r;const i=e[1].default,s=l(i,e,e[0],null),o=s||function(e){let t;return{c(){t=b("place analytics cards here")},m(e,n){g(e,t,n)},d(e){e&&y(t)}}}();return{c(){t=w("main"),n=w("div"),o&&o.c(),_(n,"class","analytics-card-collection svelte-dnt7jz")},m(e,i){g(e,t,i),m(t,n),o&&o.m(n,null),r=!0},p(e,[t]){s&&s.p&&(!r||1&t)&&d(s,i,e,e[0],r?h(i,e[0],t,null):f(e[0]),null)},i(e){r||(z(o,e),r=!0)},o(e){K(o,e),r=!1},d(e){e&&y(t),o&&o.d(e)}}}function Ty(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}class Ey extends Y{constructor(e){super(),X(this,e,Ty,Iy,s,{})}}function _y(t){let n,r,i,s,o,a,c,l,u,h,d,f,p,v=`${t[2]}:`;return{c(){n=w("div"),r=w("p"),i=w("strong"),s=b(v),o=I(),a=w("div"),c=b(t[3]),l=I(),u=w("div"),h=b(t[0]),d=I(),f=w("div"),p=b(t[1]),_(a,"class","leaderboard-section svelte-p3zygb"),_(u,"class","leaderboard-section svelte-p3zygb"),_(f,"class","leaderboard-section svelte-p3zygb"),_(n,"class","leaderboard-env svelte-p3zygb")},m(e,t){g(e,n,t),m(n,r),m(r,i),m(i,s),m(n,o),m(n,a),m(a,c),m(n,l),m(n,u),m(u,h),m(n,d),m(n,f),m(f,p)},p(e,[t]){4&t&&v!==(v=`${e[2]}:`)&&k(s,v),8&t&&k(c,e[3]),1&t&&k(h,e[0]),2&t&&k(p,e[1])},i:e,o:e,d(e){e&&y(n)}}}function ky(e,t,n){let{user:r}=t,{score:i}=t,{place:s}=t,{date:o}=t;return e.$$set=e=>{"user"in e&&n(0,r=e.user),"score"in e&&n(1,i=e.score),"place"in e&&n(2,s=e.place),"date"in e&&n(3,o=e.date)},[r,i,s,o]}class Sy extends Y{constructor(e){super(),X(this,e,ky,_y,s,{user:0,score:1,place:2,date:3})}}function Ay(e,t,n){const r=e.slice();return r[3]=t[n],r[5]=n,r}function Cy(e,t,n){const r=e.slice();return r[3]=t[n],r[5]=n,r}function Ny(e,t,n){const r=e.slice();return r[3]=t[n],r[5]=n,r}function Ry(e){let t,n;return t=new Sy({props:{user:e[3].user,score:e[3].score,date:e[3].date,place:e[5]+1}}),{c(){G(t.$$.fragment)},m(e,r){W(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.user=e[3].user),1&n&&(r.score=e[3].score),1&n&&(r.date=e[3].date),t.$set(r)},i(e){n||(z(t.$$.fragment,e),n=!0)},o(e){K(t.$$.fragment,e),n=!1},d(e){J(t,e)}}}function Dy(e){let t,n,r=e[0],i=[];for(let t=0;t<r.length;t+=1)i[t]=Ry(Ny(e,r,t));const s=e=>K(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=T()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);g(e,t,r),n=!0},p(e,n){if(1&n){let o;for(r=e[0],o=0;o<r.length;o+=1){const s=Ny(e,r,o);i[o]?(i[o].p(s,n),z(i[o],1)):(i[o]=Ry(s),i[o].c(),z(i[o],1),i[o].m(t.parentNode,t))}for(q(),o=r.length;o<i.length;o+=1)s(o);B()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)z(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)K(i[e]);n=!1},d(e){v(i,e),e&&y(t)}}}function $y(e){let t,n;return t=new Sy({props:{user:e[3].user,score:e[3].score,date:e[3].date,place:e[5]+1}}),{c(){G(t.$$.fragment)},m(e,r){W(t,e,r),n=!0},p(e,n){const r={};2&n&&(r.user=e[3].user),2&n&&(r.score=e[3].score),2&n&&(r.date=e[3].date),t.$set(r)},i(e){n||(z(t.$$.fragment,e),n=!0)},o(e){K(t.$$.fragment,e),n=!1},d(e){J(t,e)}}}function Oy(e){let t,n,r=e[1],i=[];for(let t=0;t<r.length;t+=1)i[t]=$y(Cy(e,r,t));const s=e=>K(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=T()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);g(e,t,r),n=!0},p(e,n){if(2&n){let o;for(r=e[1],o=0;o<r.length;o+=1){const s=Cy(e,r,o);i[o]?(i[o].p(s,n),z(i[o],1)):(i[o]=$y(s),i[o].c(),z(i[o],1),i[o].m(t.parentNode,t))}for(q(),o=r.length;o<i.length;o+=1)s(o);B()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)z(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)K(i[e]);n=!1},d(e){v(i,e),e&&y(t)}}}function Py(e){let t,n;return t=new Sy({props:{user:e[3].user,score:e[3].score,date:e[3].date,place:e[5]+1}}),{c(){G(t.$$.fragment)},m(e,r){W(t,e,r),n=!0},p(e,n){const r={};4&n&&(r.user=e[3].user),4&n&&(r.score=e[3].score),4&n&&(r.date=e[3].date),t.$set(r)},i(e){n||(z(t.$$.fragment,e),n=!0)},o(e){K(t.$$.fragment,e),n=!1},d(e){J(t,e)}}}function xy(e){let t,n,r=e[2],i=[];for(let t=0;t<r.length;t+=1)i[t]=Py(Ay(e,r,t));const s=e=>K(i[e],1,1,(()=>{i[e]=null}));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=T()},m(e,r){for(let t=0;t<i.length;t+=1)i[t].m(e,r);g(e,t,r),n=!0},p(e,n){if(4&n){let o;for(r=e[2],o=0;o<r.length;o+=1){const s=Ay(e,r,o);i[o]?(i[o].p(s,n),z(i[o],1)):(i[o]=Py(s),i[o].c(),z(i[o],1),i[o].m(t.parentNode,t))}for(q(),o=r.length;o<i.length;o+=1)s(o);B()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)z(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)K(i[e]);n=!1},d(e){v(i,e),e&&y(t)}}}function Ly(e){let t,n,r,i,s,o;return t=new by({props:{title:"easy (wpm)",$$slots:{default:[Dy]},$$scope:{ctx:e}}}),r=new by({props:{title:"medium (wpm)",$$slots:{default:[Oy]},$$scope:{ctx:e}}}),s=new by({props:{title:"hard (wpm)",$$slots:{default:[xy]},$$scope:{ctx:e}}}),{c(){G(t.$$.fragment),n=I(),G(r.$$.fragment),i=I(),G(s.$$.fragment)},m(e,a){W(t,e,a),g(e,n,a),W(r,e,a),g(e,i,a),W(s,e,a),o=!0},p(e,n){const i={};257&n&&(i.$$scope={dirty:n,ctx:e}),t.$set(i);const o={};258&n&&(o.$$scope={dirty:n,ctx:e}),r.$set(o);const a={};260&n&&(a.$$scope={dirty:n,ctx:e}),s.$set(a)},i(e){o||(z(t.$$.fragment,e),z(r.$$.fragment,e),z(s.$$.fragment,e),o=!0)},o(e){K(t.$$.fragment,e),K(r.$$.fragment,e),K(s.$$.fragment,e),o=!1},d(e){J(t,e),e&&y(n),J(r,e),e&&y(i),J(s,e)}}}function My(e){let t,n,r,i,s;return i=new Ey({props:{$$slots:{default:[Ly]},$$scope:{ctx:e}}}),{c(){t=w("main"),n=w("h1"),n.textContent="leaderboard",r=I(),G(i.$$.fragment)},m(e,o){g(e,t,o),m(t,n),m(t,r),W(i,t,null),s=!0},p(e,[t]){const n={};263&t&&(n.$$scope={dirty:t,ctx:e}),i.$set(n)},i(e){s||(z(i.$$.fragment,e),s=!0)},o(e){K(i.$$.fragment,e),s=!1},d(e){e&&y(t),J(i)}}}function Uy(e,t,n){let r=[];Ag("easy_wpm").then((e=>{e.data.forEach((e=>r.push(JSON.parse(e)))),n(0,r)}));let i=[];Ag("medium_wpm").then((e=>{e.data.forEach((e=>i.push(JSON.parse(e)))),n(1,i)}));let s=[];return Ag("hard_wpm").then((e=>{e.data.forEach((e=>s.push(JSON.parse(e)))),n(2,s)})),[r,i,s]}function Fy(t){let n,r,i,s,o;return s=new xe({props:{text:"return home",onClickFn:"redirectHome"}}),{c(){n=w("main"),r=w("h2"),r.textContent="oops, looks like that page doesn't exist",i=I(),G(s.$$.fragment)},m(e,t){g(e,n,t),m(n,r),m(n,i),W(s,n,null),o=!0},p:e,i(e){o||(z(s.$$.fragment,e),o=!0)},o(e){K(s.$$.fragment,e),o=!1},d(e){e&&y(n),J(s)}}}function Vy(t){let n;return{c(){n=w("main"),n.innerHTML="<h1>Logging you out</h1>"},m(e,t){g(e,n,t)},p:e,i:e,o:e,d(e){e&&y(n)}}}function jy(e){return Sg(),[]}function qy(){return!_g()}const By=[{name:"/",component:class extends Y{constructor(e){super(),X(this,e,Ug,Mg,s,{currentRoute:9,params:10})}}},{name:"login",component:class extends Y{constructor(e){super(),X(this,e,Kg,zg,s,{currentRoute:4,params:5})}},onlyIf:{guard:qy,redirect:"/"}},{name:"signup",component:class extends Y{constructor(e){super(),X(this,e,Jg,Wg,s,{currentRoute:5,params:6})}},onlyIf:{guard:qy,redirect:"/"}},{name:"profile",component:class extends Y{constructor(e){super(),X(this,e,yy,my,s,{})}},onlyIf:{guard:_g,redirect:"/"}},{name:"leaderboard",component:class extends Y{constructor(e){super(),X(this,e,Uy,My,s,{})}}},{name:"logout",component:class extends Y{constructor(e){super(),X(this,e,jy,Vy,s,{})}},onlyIf:{guard:_g,redirect:"/"}},{name:"404",component:class extends Y{constructor(e){super(),X(this,e,null,Fy,s,{})}}}];function zy(e){let t,n,r;return{c(){t=w("a"),t.textContent="signup",n=I(),r=w("a"),r.textContent="login",_(t,"href","/signup"),_(t,"class","svelte-1ywqo0t"),_(r,"href","/login"),_(r,"class","svelte-1ywqo0t")},m(e,i){g(e,t,i),g(e,n,i),g(e,r,i)},d(e){e&&y(t),e&&y(n),e&&y(r)}}}function Ky(e){let t,n,r;return{c(){t=w("a"),t.textContent="logout",n=I(),r=w("a"),r.textContent="profile",_(t,"href","/logout"),_(t,"class","svelte-1ywqo0t"),_(r,"href","/profile"),_(r,"class","svelte-1ywqo0t")},m(e,i){g(e,t,i),g(e,n,i),g(e,r,i)},d(e){e&&y(t),e&&y(n),e&&y(r)}}}function Hy(t){let n,r,i,s,o,a;let c=function(e,t){return e[0]?Ky:zy}(t),l=c(t);return{c(){n=w("main"),r=w("div"),l.c(),i=I(),s=w("a"),s.textContent="leaderboard",o=I(),a=w("a"),a.textContent="play",_(s,"href","/leaderboard"),_(s,"class","svelte-1ywqo0t"),_(a,"href","/"),_(a,"class","svelte-1ywqo0t"),_(r,"class","header svelte-1ywqo0t")},m(e,t){g(e,n,t),m(n,r),l.m(r,null),m(r,i),m(r,s),m(r,o),m(r,a)},p:e,i:e,o:e,d(e){e&&y(n),l.d()}}}function Gy(e){return[_g()]}class Wy extends Y{constructor(e){super(),X(this,e,Gy,Hy,s,{})}}function Jy(t){let n,r,i,s,o,a;return i=new Wy({}),o=new Re({props:{routes:By}}),{c(){n=w("meta"),r=I(),G(i.$$.fragment),s=I(),G(o.$$.fragment),document.title="Perfect Type",_(n,"charset","utf-8")},m(e,t){m(document.head,n),g(e,r,t),W(i,e,t),g(e,s,t),W(o,e,t),a=!0},p:e,i(e){a||(z(i.$$.fragment,e),z(o.$$.fragment,e),a=!0)},o(e){K(i.$$.fragment,e),K(o.$$.fragment,e),a=!1},d(e){y(n),e&&y(r),J(i,e),e&&y(s),J(o,e)}}}function Qy(e){return Tg(),[]}return new class extends Y{constructor(e){super(),X(this,e,Qy,Jy,s,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
