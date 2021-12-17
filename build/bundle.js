var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function i(e){e.forEach(t)}function r(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let o,a;function c(t,n,i){t.$$.on_destroy.push(function(t,...n){if(null==t)return e;const i=t.subscribe(...n);return i.unsubscribe?()=>i.unsubscribe():i}(n,i))}function l(e,t,n,i){if(e){const r=u(e,t,n,i);return e[0](r)}}function u(e,t,n,i){return e[1]&&i?function(e,t){for(const n in t)e[n]=t[n];return e}(n.ctx.slice(),e[1](i(t))):n.ctx}function h(e,t,n,i){if(e[2]&&i){const r=e[2](i(n));if(void 0===t.dirty)return r;if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length);for(let i=0;i<n;i+=1)e[i]=t.dirty[i]|r[i];return e}return t.dirty|r}return t.dirty}function d(e,t,n,i,r,s){if(r){const o=u(t,n,i,s);e.p(o,r)}}function f(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}function p(e){return null==e?"":e}function g(e,t){e.appendChild(t)}function m(e,t,n){e.insertBefore(t,n||null)}function y(e){e.parentNode.removeChild(e)}function v(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function w(e){return document.createElement(e)}function b(e){return document.createTextNode(e)}function I(){return b(" ")}function T(){return b("")}function E(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function _(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function k(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function A(e){a=e}function S(e){(function(){if(!a)throw new Error("Function called outside component initialization");return a})().$$.on_mount.push(e)}const C=[],N=[],R=[],D=[],O=Promise.resolve();let P=!1;function x(e){R.push(e)}function L(e){D.push(e)}let M=!1;const $=new Set;function U(){if(!M){M=!0;do{for(let e=0;e<C.length;e+=1){const t=C[e];A(t),F(t.$$)}for(A(null),C.length=0;N.length;)N.pop()();for(let e=0;e<R.length;e+=1){const t=R[e];$.has(t)||($.add(t),t())}R.length=0}while(C.length);for(;D.length;)D.pop()();P=!1,M=!1,$.clear()}}function F(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(x)}}const V=new Set;let j;function B(){j={r:0,c:[],p:j}}function q(){j.r||i(j.c),j=j.p}function z(e,t){e&&e.i&&(V.delete(e),e.i(t))}function H(e,t,n,i){if(e&&e.o){if(V.has(e))return;V.add(e),j.c.push((()=>{V.delete(e),i&&(n&&e.d(1),i())})),e.o(t)}}function K(e,t,n){const i=e.$$.props[t];void 0!==i&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function G(e){e&&e.c()}function W(e,n,s,o){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=e.$$;a&&a.m(n,s),o||x((()=>{const n=c.map(t).filter(r);l?l.push(...n):i(n),e.$$.on_mount=[]})),u.forEach(x)}function J(e,t){const n=e.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function X(e,t){-1===e.$$.dirty[0]&&(C.push(e),P||(P=!0,O.then(U)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Q(t,r,s,o,c,l,u,h=[-1]){const d=a;A(t);const f=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:n(),dirty:h,skip_bound:!1,root:r.target||d.$$.root};u&&u(f.root);let p=!1;if(f.ctx=s?s(t,r.props||{},((e,n,...i)=>{const r=i.length?i[0]:n;return f.ctx&&c(f.ctx[e],f.ctx[e]=r)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](r),p&&X(t,e)),n})):[],f.update(),p=!0,i(f.before_update),f.fragment=!!o&&o(f.ctx),r.target){if(r.hydrate){const e=function(e){return Array.from(e.childNodes)}(r.target);f.fragment&&f.fragment.l(e),e.forEach(y)}else f.fragment&&f.fragment.c();r.intro&&z(t.$$.fragment),W(t,r.target,r.anchor,r.customElement),U()}A(d)}class Y{$destroy(){J(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Z=[];function ee(t,n=e){let i;const r=new Set;function o(e){if(s(t,e)&&(t=e,i)){const e=!Z.length;for(const e of r)e[1](),Z.push(e,t);if(e){for(let e=0;e<Z.length;e+=2)Z[e][0](Z[e+1]);Z.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(s,a=e){const c=[s,a];return r.add(c),1===r.size&&(i=n(o)||e),s(t),()=>{r.delete(c),0===r.size&&(i(),i=null)}}}}const{set:te,subscribe:ne}=ee({}),ie={subscribe:ne,set:te,remove:()=>{te({})}},re=(e,t="")=>{const n=new URL(e);function i(){return s(t).reduce(((e,t,n)=>(":"===t[0]&&e.push({value:t.slice(1),index:n}),e)),[])}function r(){return s(n.pathname)}function s(e){return"/"===e||0===e.trim().length?[e]:("/"===e.slice(-1)&&(e=e.slice(0,-1)),"/"===e[0]&&(e=e.slice(1)),e.split("/"))}return Object.freeze({hash:n.hash,host:n.host,hostname:n.hostname,namedParams:function(){const e=r();return i().reduce(((t,n)=>(t[n.value]=e[n.index],t)),{})}(),namedParamsKeys:i().reduce(((e,t)=>(e.push(t.value),e)),[]),namedParamsValues:function(){const e=r();return i().reduce(((t,n)=>(t.push(e[n.index]),t)),[])}(),pathNames:r(),port:n.port,pathname:n.pathname,protocol:n.protocol,search:n.search,queryParams:function(){const e={};return n.searchParams.forEach(((t,n)=>{e[n]=t})),e}(),queryParamsKeys:function(){const e=[];return n.searchParams.forEach(((t,n)=>{e.push(n)})),e}(),queryParamsValues:function(){const e=[];return n.searchParams.forEach((t=>{e.push(t)})),e}()})},se=e=>{let t=!1;return 0===Object.keys(e).length||(e.childRoute&&0===Object.keys(e.childRoute).length?t=!0:e.childRoute&&(t=se(e.childRoute)),t)},oe=(e,t)=>(t=ue(t)).includes(":")?t.includes(e):t.startsWith(e),ae=(e,t,n)=>{let i=!1;if(n)return{exists:t.lang&&t.lang[n]&&t.lang[n].includes(e),language:n};if(i=oe(e,t.name),!i&&t.lang&&"object"==typeof t.lang)for(const[r,s]of Object.entries(t.lang))oe(e,s)&&(i=!0,n=r);return{exists:i,language:n}},ce=e=>"/"===e||0===e.trim().length?[e]:(e=ue(e,"both")).split("/"),le=(e="")=>{let t;return"/"===e||0===e.trim().length?e:(t=(e=ue(e,"lead")).split(":")[0],t=ue(t,"trail"),t.toLowerCase())},ue=(e,t="lead")=>("trail"!==t&&"both"!==t||(e=e.replace(/\/$/,"")),"lead"!==t&&"both"!==t||(e=e.replace(/^\//,"")),e),he=(e,t=null)=>t&&e.lang&&e.lang[t]?e.lang[t]:e.name,de=e=>{const t=e||!1;let n="";const i=(e,n)=>{if("undefined"!=typeof window){const i=(e=>{let t=[];if(e.queryParams)for(let[n,i]of Object.entries(e.queryParams))t.push(`${n}=${i}`);const n=e.hash?e.hash:"";return t.length>0?`${e.path}?${t.join("&")}${n}`:e.path+n})(e);n&&window.history.pushState({page:i},"",i),t&&r(i)}},r=e=>{"undefined"!=typeof ga&&(ga("set","page",e),ga("send","pageview"))};return Object.freeze({active:()=>n,isActive:(e,t=!1)=>{"/"!==e[0]&&(e="/"+e);let i=re(`http://fake.com${e}`).pathname,r=re(`http://fake.com${n}`).pathname;return i=ue(i,"trail"),r=ue(r,"trail"),t?r.includes(i):r===i},setActive:(e,t)=>{n=e.path,i(e,t)}})},fe=(e,t)=>{const n=(e=>{const t=e;return Object.freeze({valid:()=>t&&t.guard&&"function"==typeof t.guard,redirect:()=>!t.guard(),redirectPath:()=>{let e="/";return t.redirect&&t.redirect.length>0&&(e=t.redirect),e}})})(e.onlyIf);return Object.freeze({path:()=>{let i=t;return e.redirectTo&&e.redirectTo.length>0&&(i=e.redirectTo),n.valid()&&n.redirect()&&(i=n.redirectPath()),i}})};function pe({basePath:e,basePathName:t,pathNames:n,convert:i,currentLanguage:r}){let s,o,a=r;function c(){return he(o,a)}function l(){return le(c())}function u(){return le(s.result)}return Object.freeze({basePathSameAsLocalised:function(){return u()===l()},updatedPath:function(e){return o=e,s=((e,t,n,i,r=!1)=>{if("/"===e||0===e.trim().length)return{result:e,language:null};let s=e,o=n.name,a=i;if(r&&(a=""),o=ue(o),s=ue(s),n.childRoute)return{result:e,language:a};{let e=ae(s,n,a);e.exists&&r&&(s=he(n,i));let c=o.split(":")[0];return c=ue(c,"trail"),c=c.split("/"),c.shift(),c.forEach((()=>{const o=t[0];if(e=ae(`${s}/${o}`,n,a),!o||!e.exists)return{result:s,language:e.language};s=r?he(n,i):`${s}/${o}`,t.shift()})),{result:s,language:e.language}}})(t,n,o,a,i),a=i?r:s.language,s},basePathNameWithoutNamedParams:u,localisedPathName:c,localisedRouteWithoutNamedParams:l,namedPath:function(){let t=c();return t&&!t.startsWith("/")&&(t="/"+t),e?`${e}${t}`:t},pathNames:n,routeLanguage:function(){return a},routePath:function(){let t=`${e}/${u()}`;"//"===t&&(t="/"),a&&(n=((e,t)=>{const n=t.split("/");return n.length>1&&n.forEach((function(t,n){t.length>0&&n>0&&e.shift()})),e})(n,l()));const i=((e="")=>0===e.trim().length?[]:ce(e).reduce(((e,t)=>(":"===t[0]&&e.push(t.slice(1)),e)),[]))(c());return i&&i.length>0&&i.forEach((function(){n.length>0&&(t+=`/${n.shift()}`)})),t}})}function ge({routes:e,currentUrl:t,routerOptions:n,convert:i}){const r=n.defaultLanguage,s=n.prefix?n.prefix.toLowerCase():"",o=function(e,t){if(t&&t.trim().length>0){const n=e.endsWith(t)?t:t+"/",i=e.replace(n,"");return re(i)}return re(e)}(t,s);let a="",c={},l=!1;function u(e,t,n,i,s){let h={};const d=pe({basePath:t,basePathName:n.shift().toLowerCase(),pathNames:n,convert:s,currentLanguage:i});return l=!1,e.forEach((function(e){if(d.updatedPath(e),function(e,t){const n=e.basePathSameAsLocalised();n&&(l=!0);return n||!l&&(e=>ue(e).startsWith(":"))(t)}(d,e.name)){let t=d.routePath();if(a=fe(e,a).path(),h.name!==t&&(h=function({route:e,routePath:t,routeLanguage:n,urlParser:i,namedPath:s}){const o=function({routeInfo:e,path:t,routeNamedParams:n,urlParser:i,namedPath:r,language:s}){const o=()=>{const e=re(`https://fake.com${i.pathname}`,r).namedParams;return{...n,...e}};return Object.freeze({get:()=>({name:t,component:e.component,hash:i.hash,layout:e.layout,queryParams:i.queryParams,namedParams:o(),path:t,language:s}),namedParams:o})}({routeInfo:e,urlParser:i,path:t,routeNamedParams:c,namedPath:s,language:n||r});return c=o.namedParams(),o.get()}({route:e,routePath:t,routeLanguage:d.routeLanguage(),urlParser:o,namedPath:d.namedPath()})),e.nestedRoutes&&e.nestedRoutes.length>0&&d.pathNames.length>0)h.childRoute=u(e.nestedRoutes,t,d.pathNames,d.routeLanguage(),s),h.path=h.childRoute.path,h.language=h.childRoute.language;else if(function(e,t){return e.nestedRoutes&&e.nestedRoutes.length>0&&0===t.length}(e,d.pathNames)){const n=u(e.nestedRoutes,t,["index"],d.routeLanguage(),s);n&&Object.keys(n).length>0&&(h.childRoute=n,h.language=h.childRoute.language)}}})),a&&(h.redirectTo=a),h}const h=t=>{const n=e.find((e=>"404"==e.name)),i=t||r||"";return n?{...n,language:i,path:"404"}:{name:"404",component:"",path:"404",redirectTo:"/404.html"}};return Object.freeze({findActiveRoute:function(){let t=u(e,"",o.pathNames,n.lang,i);return t&&Object.keys(t).length&&!se(t)?(t.path=t.path.split("?")[0],s&&(t.path=`/${s}${t.path}`)):"undefined"!=typeof window&&(t=h(n.lang)),t}})}const me="/404.html";let ye,ve=[],we={};const be=(e,t,n={})=>{we={...n},void 0!==t&&""!==t||(t=document.location.href),ye=de(we.gaPageviews),t=ue(t,"trail"),ve=e;const i=()=>{let n=!1;return we.langConvertTo&&(we.lang=we.langConvertTo,n=!0),ge({routes:e,currentUrl:t,routerOptions:we,convert:n}).findActiveRoute()};return Object.freeze({setActiveRoute:(e=!0)=>{const t=i();return t.redirectTo?((e,t)=>("undefined"!=typeof window&&(e===me?ye.setActive({path:me},t):Ie(e)),e))(t.redirectTo,e):(ye.setActive(t,e),ie.set(t),t)},findActiveRoute:i})},Ie=(e,t=null,n=!0)=>(e=ue(e,"lead"),t&&(we.langConvertTo=t),be(ve,"http://fake.com/"+e,we).setActiveRoute(n));function Te(e){let t,n;return t=new Se({props:{currentRoute:e[0].childRoute,params:e[1]}}),{c(){G(t.$$.fragment)},m(e,i){W(t,e,i),n=!0},p(e,n){const i={};1&n&&(i.currentRoute=e[0].childRoute),2&n&&(i.params=e[1]),t.$set(i)},i(e){n||(z(t.$$.fragment,e),n=!0)},o(e){H(t.$$.fragment,e),n=!1},d(e){J(t,e)}}}function Ee(e){let t,n,i;var r=e[0].component;function s(e){return{props:{currentRoute:{...e[0],component:""},params:e[1]}}}return r&&(t=new r(s(e))),{c(){t&&G(t.$$.fragment),n=T()},m(e,r){t&&W(t,e,r),m(e,n,r),i=!0},p(e,i){const o={};if(1&i&&(o.currentRoute={...e[0],component:""}),2&i&&(o.params=e[1]),r!==(r=e[0].component)){if(t){B();const e=t;H(e.$$.fragment,1,0,(()=>{J(e,1)})),q()}r?(t=new r(s(e)),G(t.$$.fragment),z(t.$$.fragment,1),W(t,n.parentNode,n)):t=null}else r&&t.$set(o)},i(e){i||(t&&z(t.$$.fragment,e),i=!0)},o(e){t&&H(t.$$.fragment,e),i=!1},d(e){e&&y(n),t&&J(t,e)}}}function _e(e){let t,n,i;var r=e[0].layout;function s(e){return{props:{currentRoute:{...e[0],layout:""},params:e[1]}}}return r&&(t=new r(s(e))),{c(){t&&G(t.$$.fragment),n=T()},m(e,r){t&&W(t,e,r),m(e,n,r),i=!0},p(e,i){const o={};if(1&i&&(o.currentRoute={...e[0],layout:""}),2&i&&(o.params=e[1]),r!==(r=e[0].layout)){if(t){B();const e=t;H(e.$$.fragment,1,0,(()=>{J(e,1)})),q()}r?(t=new r(s(e)),G(t.$$.fragment),z(t.$$.fragment,1),W(t,n.parentNode,n)):t=null}else r&&t.$set(o)},i(e){i||(t&&z(t.$$.fragment,e),i=!0)},o(e){t&&H(t.$$.fragment,e),i=!1},d(e){e&&y(n),t&&J(t,e)}}}function ke(e){let t,n,i,r;const s=[_e,Ee,Te],o=[];function a(e,t){return e[0].layout?0:e[0].component?1:e[0].childRoute?2:-1}return~(t=a(e))&&(n=o[t]=s[t](e)),{c(){n&&n.c(),i=T()},m(e,n){~t&&o[t].m(e,n),m(e,i,n),r=!0},p(e,[r]){let c=t;t=a(e),t===c?~t&&o[t].p(e,r):(n&&(B(),H(o[c],1,1,(()=>{o[c]=null})),q()),~t?(n=o[t],n?n.p(e,r):(n=o[t]=s[t](e),n.c()),z(n,1),n.m(i.parentNode,i)):n=null)},i(e){r||(z(n),r=!0)},o(e){H(n),r=!1},d(e){~t&&o[t].d(e),e&&y(i)}}}function Ae(e,t,n){let{currentRoute:i={}}=t,{params:r={}}=t;return e.$$set=e=>{"currentRoute"in e&&n(0,i=e.currentRoute),"params"in e&&n(1,r=e.params)},[i,r]}"undefined"!=typeof window&&(window.addEventListener("click",(e=>{if("a"!==e.target.localName.toLowerCase())return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;const t=we.prefix?`/${we.prefix.toLowerCase()}`:"",n=e.target.pathname&&e.target.host===window.location.host,i=!(t.length>1)||e.target.pathname.startsWith(t);if(n&&i){e.preventDefault();const t=e.target.pathname+e.target.search+e.target.search+e.target.hash;"_blank"===e.target.target?window.open(t,"newTab"):Ie(t)}})),window.onpopstate=function(e){let t=window.location.pathname+window.location.search+window.location.hash;Ie(t,null,!1)});class Se extends Y{constructor(e){super(),Q(this,e,Ae,ke,s,{currentRoute:0,params:1})}}function Ce(e){let t,n;return t=new Se({props:{currentRoute:e[0]}}),{c(){G(t.$$.fragment)},m(e,i){W(t,e,i),n=!0},p(e,[n]){const i={};1&n&&(i.currentRoute=e[0]),t.$set(i)},i(e){n||(z(t.$$.fragment,e),n=!0)},o(e){H(t.$$.fragment,e),n=!1},d(e){J(t,e)}}}function Ne(e,t,n){let i;c(e,ie,(e=>n(0,i=e)));let{routes:r=[]}=t,{options:s={}}=t;return S((()=>{be(r,document.location.href,s).setActiveRoute()})),e.$$set=e=>{"routes"in e&&n(1,r=e.routes),"options"in e&&n(2,s=e.options)},[i,r,s]}class Re extends Y{constructor(e){super(),Q(this,e,Ne,Ce,s,{routes:1,options:2})}}const De=ee(0),Oe=ee(5);function Pe(t){let n,i,s,o;return{c(){n=w("button"),i=b(t[0]),_(n,"class","svelte-1guggz1")},m(e,a){m(e,n,a),g(n,i),s||(o=E(n,"click",(function(){r(t[1])&&t[1].apply(this,arguments)})),s=!0)},p(e,[n]){t=e,1&n&&k(i,t[0])},i:e,o:e,d(e){e&&y(n),s=!1,o()}}}function xe(e,t,n){let{text:i}=t,{onClickFn:r}=t;return e.$$set=e=>{"text"in e&&n(0,i=e.text),"onClickFn"in e&&n(1,r=e.onClickFn)},[i,r]}class Le extends Y{constructor(e){super(),Q(this,e,xe,Pe,s,{text:0,onClickFn:1})}}function Me(e){let t,n,i,r,s,o,a=e[0]?`you typed ${e[1]} words per minute`:"you lost :(";return s=new Le({props:{onClickFn:e[2],text:e[0]?"play again":"try again"}}),{c(){t=w("div"),n=w("div"),i=b(a),r=I(),G(s.$$.fragment),_(n,"class","game-over-div svelte-ap5isp"),_(t,"class","game-over-environment svelte-ap5isp")},m(e,a){m(e,t,a),g(t,n),g(n,i),g(t,r),W(s,t,null),o=!0},p(e,[t]){(!o||3&t)&&a!==(a=e[0]?`you typed ${e[1]} words per minute`:"you lost :(")&&k(i,a);const n={};4&t&&(n.onClickFn=e[2]),1&t&&(n.text=e[0]?"play again":"try again"),s.$set(n)},i(e){o||(z(s.$$.fragment,e),o=!0)},o(e){H(s.$$.fragment,e),o=!1},d(e){e&&y(t),J(s)}}}function $e(e,t,n){let{winGame:i}=t,{wpm:r}=t,{tryAgain:s}=t;return e.$$set=e=>{"winGame"in e&&n(0,i=e.winGame),"wpm"in e&&n(1,r=e.wpm),"tryAgain"in e&&n(2,s=e.tryAgain)},[i,r,s]}class Ue extends Y{constructor(e){super(),Q(this,e,$e,Me,s,{winGame:0,wpm:1,tryAgain:2})}}function Fe(t){let n,s,o,a,c,l,u,h,d,f,v,T,k,A;return{c(){n=w("div"),s=w("div"),o=b("easy"),c=I(),l=w("div"),u=b("medium"),d=I(),f=w("div"),v=b("hard"),_(s,"class",a=p("mode-div "+("easy"===t[0]?"active-mode":""))+" svelte-8axfu2"),_(s,"id","easy"),_(l,"class",h=p("mode-div "+("medium"===t[0]?"active-mode":""))+" svelte-8axfu2"),_(l,"id","medium"),_(f,"class",T=p("mode-div "+("hard"===t[0]?"active-mode":""))+" svelte-8axfu2"),_(f,"id","hard"),_(n,"class","mode-container svelte-8axfu2")},m(e,i){m(e,n,i),g(n,s),g(s,o),g(n,c),g(n,l),g(l,u),g(n,d),g(n,f),g(f,v),k||(A=[E(s,"click",(function(){r(t[1])&&t[1].apply(this,arguments)})),E(l,"click",(function(){r(t[1])&&t[1].apply(this,arguments)})),E(f,"click",(function(){r(t[1])&&t[1].apply(this,arguments)}))],k=!0)},p(e,[n]){t=e,1&n&&a!==(a=p("mode-div "+("easy"===t[0]?"active-mode":""))+" svelte-8axfu2")&&_(s,"class",a),1&n&&h!==(h=p("mode-div "+("medium"===t[0]?"active-mode":""))+" svelte-8axfu2")&&_(l,"class",h),1&n&&T!==(T=p("mode-div "+("hard"===t[0]?"active-mode":""))+" svelte-8axfu2")&&_(f,"class",T)},i:e,o:e,d(e){e&&y(n),k=!1,i(A)}}}function Ve(e,t,n){let{mode:i}=t,{changeMode:r}=t;return e.$$set=e=>{"mode"in e&&n(0,i=e.mode),"changeMode"in e&&n(1,r=e.changeMode)},[i,r]}class je extends Y{constructor(e){super(),Q(this,e,Ve,Fe,s,{mode:0,changeMode:1})}}var Be=["ability","able","aboard","about","above","accept","accident","according","account","accurate","acres","across","act","action","active","activity","actual","actually","add","addition","additional","adjective","adult","adventure","advice","affect","afraid","after","afternoon","again","against","age","ago","agree","ahead","aid","air","airplane","alike","alive","all","allow","almost","alone","along","aloud","alphabet","already","also","although","am","among","amount","ancient","angle","angry","animal","announced","another","answer","ants","any","anybody","anyone","anything","anyway","anywhere","apart","apartment","appearance","apple","applied","appropriate","are","area","arm","army","around","arrange","arrangement","arrive","arrow","art","article","as","aside","ask","asleep","at","ate","atmosphere","atom","atomic","attached","attack","attempt","attention","audience","author","automobile","available","average","avoid","aware","away","baby","back","bad","badly","bag","balance","ball","balloon","band","bank","bar","bare","bark","barn","base","baseball","basic","basis","basket","bat","battle","be","bean","bear","beat","beautiful","beauty","became","because","become","becoming","bee","been","before","began","beginning","begun","behavior","behind","being","believed","bell","belong","below","belt","bend","beneath","bent","beside","best","bet","better","between","beyond","bicycle","bigger","biggest","bill","birds","birth","birthday","bit","bite","black","blank","blanket","blew","blind","block","blood","blow","blue","board","boat","body","bone","book","border","born","both","bottle","bottom","bound","bow","bowl","box","boy","brain","branch","brass","brave","bread","break","breakfast","breath","breathe","breathing","breeze","brick","bridge","brief","bright","bring","broad","broke","broken","brother","brought","brown","brush","buffalo","build","building","built","buried","burn","burst","bus","bush","business","busy","but","butter","buy","by","cabin","cage","cake","call","calm","came","camera","camp","can","canal","cannot","cap","capital","captain","captured","car","carbon","card","care","careful","carefully","carried","carry","case","cast","castle","cat","catch","cattle","caught","cause","cave","cell","cent","center","central","century","certain","certainly","chain","chair","chamber","chance","change","changing","chapter","character","characteristic","charge","chart","check","cheese","chemical","chest","chicken","chief","child","children","choice","choose","chose","chosen","church","circle","circus","citizen","city","class","classroom","claws","clay","clean","clear","clearly","climate","climb","clock","close","closely","closer","cloth","clothes","clothing","cloud","club","coach","coal","coast","coat","coffee","cold","collect","college","colony","color","column","combination","combine","come","comfortable","coming","command","common","community","company","compare","compass","complete","completely","complex","composed","composition","compound","concerned","condition","congress","connected","consider","consist","consonant","constantly","construction","contain","continent","continued","contrast","control","conversation","cook","cookies","cool","copper","copy","corn","corner","correct","correctly","cost","cotton","could","count","country","couple","courage","course","court","cover","cow","cowboy","crack","cream","create","creature","crew","crop","cross","crowd","cry","cup","curious","current","curve","customs","cut","cutting","daily","damage","dance","danger","dangerous","dark","darkness","date","daughter","dawn","day","dead","deal","dear","death","decide","declared","deep","deeply","deer","definition","degree","depend","depth","describe","desert","design","desk","detail","determine","develop","development","diagram","diameter","did","die","differ","difference","different","difficult","difficulty","dig","dinner","direct","direction","directly","dirt","dirty","disappear","discover","discovery","discuss","discussion","disease","dish","distance","distant","divide","division","do","doctor","does","dog","doing","doll","dollar","done","donkey","door","dot","double","doubt","down","dozen","draw","drawn","dream","dress","drew","dried","drink","drive","driven","driver","driving","drop","dropped","drove","dry","duck","due","dug","dull","during","dust","duty","each","eager","ear","earlier","early","earn","earth","easier","easily","east","easy","eat","eaten","edge","education","effect","effort","egg","eight","either","electric","electricity","element","elephant","eleven","else","empty","end","enemy","energy","engine","engineer","enjoy","enough","enter","entire","entirely","environment","equal","equally","equator","equipment","escape","especially","essential","establish","even","evening","event","eventually","ever","every","everybody","everyone","everything","everywhere","evidence","exact","exactly","examine","example","excellent","except","exchange","excited","excitement","exciting","exclaimed","exercise","exist","expect","experience","experiment","explain","explanation","explore","express","expression","extra","eye","face","facing","fact","factor","factory","failed","fair","fairly","fall","fallen","familiar","family","famous","far","farm","farmer","farther","fast","fastened","faster","fat","father","favorite","fear","feathers","feature","fed","feed","feel","feet","fell","fellow","felt","fence","few","fewer","field","fierce","fifteen","fifth","fifty","fight","fighting","figure","fill","film","final","finally","find","fine","finest","finger","finish","fire","fireplace","firm","first","fish","five","fix","flag","flame","flat","flew","flies","flight","floating","floor","flow","flower","fly","fog","folks","follow","food","foot","football","for","force","foreign","forest","forget","forgot","forgotten","form","former","fort","forth","forty","forward","fought","found","four","fourth","fox","frame","free","freedom","frequently","fresh","friend","friendly","frighten","frog","from","front","frozen","fruit","fuel","full","fully","fun","function","funny","fur","furniture","further","future","gain","game","garage","garden","gas","gasoline","gate","gather","gave","general","generally","gentle","gently","get","getting","giant","gift","girl","give","given","giving","glad","glass","globe","go","goes","gold","golden","gone","good","goose","got","government","grabbed","grade","gradually","grain","grandfather","grandmother","graph","grass","gravity","gray","great","greater","greatest","greatly","green","grew","ground","group","grow","grown","growth","guard","guess","guide","gulf","gun","habit","had","hair","half","halfway","hall","hand","handle","handsome","hang","happen","happened","happily","happy","harbor","hard","harder","hardly","has","hat","have","having","hay","he","headed","heading","health","heard","hearing","heart","heat","heavy","height","held","hello","help","helpful","her","herd","here","herself","hidden","hide","high","higher","highest","highway","hill","him","himself","his","history","hit","hold","hole","hollow","home","honor","hope","horn","horse","hospital","hot","hour","house","how","however","huge","human","hundred","hung","hungry","hunt","hunter","hurried","hurry","hurt","husband","ice","idea","identity","if","ill","image","imagine","immediately","importance","important","impossible","improve","in","inch","include","including","income","increase","indeed","independent","indicate","individual","industrial","industry","influence","information","inside","instance","instant","instead","instrument","interest","interior","into","introduced","invented","involved","iron","is","island","it","its","itself","jack","jar","jet","job","join","joined","journey","joy","judge","jump","jungle","just","keep","kept","key","kids","kill","kind","kitchen","knew","knife","know","knowledge","known","label","labor","lack","lady","laid","lake","lamp","land","language","large","larger","largest","last","late","later","laugh","law","lay","layers","lead","leader","leaf","learn","least","leather","leave","leaving","led","left","leg","length","lesson","let","letter","level","library","lie","life","lift","light","like","likely","limited","line","lion","lips","liquid","list","listen","little","live","living","load","local","locate","location","log","lonely","long","longer","look","loose","lose","loss","lost","lot","loud","love","lovely","low","lower","luck","lucky","lunch","lungs","lying","machine","machinery","mad","made","magic","magnet","mail","main","mainly","major","make","making","man","managed","manner","manufacturing","many","map","mark","market","married","mass","massage","master","material","mathematics","matter","may","maybe","me","meal","mean","means","meant","measure","meat","medicine","meet","melted","member","memory","men","mental","merely","met","metal","method","mice","middle","might","mighty","mile","military","milk","mill","mind","mine","minerals","minute","mirror","missing","mission","mistake","mix","mixture","model","modern","molecular","moment","money","monkey","month","mood","moon","more","morning","most","mostly","mother","motion","motor","mountain","mouse","mouth","move","movement","movie","moving","mud","muscle","music","musical","must","my","myself","mysterious","nails","name","nation","national","native","natural","naturally","nature","near","nearby","nearer","nearest","nearly","necessary","neck","needed","needle","needs","negative","neighbor","neighborhood","nervous","nest","never","new","news","newspaper","next","nice","night","nine","no","nobody","nodded","noise","none","noon","nor","north","nose","not","note","noted","nothing","notice","noun","now","number","numeral","nuts","object","observe","obtain","occasionally","occur","ocean","of","off","offer","office","officer","official","oil","old","older","oldest","on","once","one","only","onto","open","operation","opinion","opportunity","opposite","or","orange","orbit","order","ordinary","organization","organized","origin","original","other","ought","our","ourselves","out","outer","outline","outside","over","own","owner","oxygen","pack","package","page","paid","pain","paint","pair","palace","pale","pan","paper","paragraph","parallel","parent","park","part","particles","particular","particularly","partly","parts","party","pass","passage","past","path","pattern","pay","peace","pen","pencil","people","per","percent","perfect","perfectly","perhaps","period","person","personal","pet","phrase","physical","piano","pick","picture","pictured","pie","piece","pig","pile","pilot","pine","pink","pipe","pitch","place","plain","plan","plane","planet","planned","planning","plant","plastic","plate","plates","play","pleasant","please","pleasure","plenty","plural","plus","pocket","poem","poet","poetry","point","pole","police","policeman","political","pond","pony","pool","poor","popular","population","porch","port","position","positive","possible","possibly","post","pot","potatoes","pound","pour","powder","power","powerful","practical","practice","prepare","present","president","press","pressure","pretty","prevent","previous","price","pride","primitive","principal","principle","printed","private","prize","probably","problem","process","produce","product","production","program","progress","promised","proper","properly","property","protection","proud","prove","provide","public","pull","pupil","pure","purple","purpose","push","put","putting","quarter","queen","question","quick","quickly","quiet","quietly","quite","rabbit","race","radio","railroad","rain","raise","ran","ranch","range","rapidly","rate","rather","raw","rays","reach","read","reader","ready","real","realize","rear","reason","recall","receive","recent","recently","recognize","record","red","refer","refused","region","regular","related","relationship","religious","remain","remarkable","remember","remove","repeat","replace","replied","report","represent","require","research","respect","rest","result","return","review","rhyme","rhythm","rice","rich","ride","riding","right","ring","rise","rising","river","road","roar","rock","rocket","rocky","rod","roll","roof","room","root","rope","rose","rough","round","route","row","rubbed","rubber","rule","ruler","run","running","rush","sad","saddle","safe","safety","said","sail","sale","salmon","salt","same","sand","sang","sat","satellites","satisfied","save","saved","saw","say","scale","scared","scene","school","science","scientific","scientist","score","screen","sea","search","season","seat","second","secret","section","see","seed","seeing","seems","seen","seldom","select","selection","sell","send","sense","sent","sentence","separate","series","serious","serve","service","sets","setting","settle","settlers","seven","several","shade","shadow","shake","shaking","shall","shallow","shape","share","sharp","she","sheep","sheet","shelf","shells","shelter","shine","shinning","ship","shirt","shoe","shoot","shop","shore","short","shorter","shot","should","shoulder","shout","show","shown","shut","sick","sides","sight","sign","signal","silence","silent","silk","silly","silver","similar","simple","simplest","simply","since","sing","single","sink","sister","sit","sitting","situation","six","size","skill","skin","sky","slabs","slave","sleep","slept","slide","slight","slightly","slip","slipped","slope","slow","slowly","small","smaller","smallest","smell","smile","smoke","smooth","snake","snow","so","soap","social","society","soft","softly","soil","solar","sold","soldier","solid","solution","solve","some","somebody","somehow","someone","something","sometime","somewhere","son","song","soon","sort","sound","source","south","southern","space","speak","special","species","specific","speech","speed","spell","spend","spent","spider","spin","spirit","spite","split","spoken","sport","spread","spring","square","stage","stairs","stand","standard","star","stared","start","state","statement","station","stay","steady","steam","steel","steep","stems","step","stepped","stick","stiff","still","stock","stomach","stone","stood","stop","stopped","store","storm","story","stove","straight","strange","stranger","straw","stream","street","strength","stretch","strike","string","strip","strong","stronger","struck","structure","struggle","stuck","student","studied","studying","subject","substance","success","successful","such","sudden","suddenly","sugar","suggest","suit","sum","summer","sun","sunlight","supper","supply","support","suppose","sure","surface","surprise","surrounded","swam","sweet","swept","swim","swimming","swing","swung","syllable","symbol","system","table","tail","take","taken","tales","talk","tall","tank","tape","task","taste","taught","tax","tea","teach","teacher","team","tears","teeth","telephone","television","tell","temperature","ten","tent","term","terrible","test","than","thank","that","thee","them","themselves","then","theory","there","therefore","these","they","thick","thin","thing","think","third","thirty","this","those","thou","though","thought","thousand","thread","three","threw","throat","through","throughout","throw","thrown","thumb","thus","thy","tide","tie","tight","tightly","till","time","tin","tiny","tip","tired","title","to","tobacco","today","together","told","tomorrow","tone","tongue","tonight","too","took","tool","top","topic","torn","total","touch","toward","tower","town","toy","trace","track","trade","traffic","trail","train","transportation","trap","travel","treated","tree","triangle","tribe","trick","tried","trip","troops","tropical","trouble","truck","trunk","truth","try","tube","tune","turn","twelve","twenty","twice","two","type","typical","uncle","under","underline","understanding","unhappy","union","unit","universe","unknown","unless","until","unusual","up","upon","upper","upward","us","use","useful","using","usual","usually","valley","valuable","value","vapor","variety","various","vast","vegetable","verb","vertical","very","vessels","victory","view","village","visit","visitor","voice","volume","vote","vowel","voyage","wagon","wait","walk","wall","want","war","warm","warn","was","wash","waste","watch","water","wave","way","we","weak","wealth","wear","weather","week","weigh","weight","welcome","well","went","were","west","western","wet","whale","what","whatever","wheat","wheel","when","whenever","where","wherever","whether","which","while","whispered","whistle","white","who","whole","whom","whose","why","wide","widely","wife","wild","will","willing","win","wind","window","wing","winter","wire","wise","wish","with","within","without","wolf","women","won","wonder","wonderful","wood","wooden","wool","word","wore","work","worker","world","worried","worry","worse","worth","would","wrapped","write","writer","writing","written","wrong","wrote","yard","year","yellow","yes","yesterday","yet","you","young","younger","your","yourself","youth","zero","zebra","zipper","zoo","zulu"];function qe(e){function t(){return e&&e.maxLength>1?function(){let t,i=!1;for(;!i;)t=n(),t.length<=e.maxLength&&(i=!0);return t}():n()}function n(){return Be[i(Be.length)]}function i(e){return Math.floor(Math.random()*e)}if(void 0===e)return t();"number"==typeof e&&(e={exactly:e}),e.exactly&&(e.min=e.exactly,e.max=e.exactly),"number"!=typeof e.wordsPerString&&(e.wordsPerString=1),"function"!=typeof e.formatter&&(e.formatter=e=>e),"string"!=typeof e.separator&&(e.separator=" ");for(var r=e.min+i(e.max+1-e.min),s=[],o="",a=0,c=0;c<r*e.wordsPerString;c++)a===e.wordsPerString-1?o+=e.formatter(t(),a):o+=e.formatter(t(),a)+e.separator,a++,(c+1)%e.wordsPerString==0&&(s.push(o),o="",a=0);return e.join&&(s=s.join(e.join)),s}var ze=qe;function He(e,t,n){const i=e.slice();return i[19]=t[n],i[21]=n,i}function Ke(e,t,n){const i=e.slice();return i[22]=t[n],i[21]=n,i}function Ge(e,t,n){const i=e.slice();return i[24]=t[n],i[26]=n,i}function We(e){let t,n;return t=new Ue({props:{winGame:e[3],wpm:e[4],tryAgain:e[7]}}),{c(){G(t.$$.fragment)},m(e,i){W(t,e,i),n=!0},p(e,n){const i={};8&n&&(i.winGame=e[3]),16&n&&(i.wpm=e[4]),t.$set(i)},i(e){n||(z(t.$$.fragment,e),n=!0)},o(e){H(t.$$.fragment,e),n=!1},d(e){J(t,e)}}}function Je(t){let n,i,s,o,a,c,l,u,h;n=new je({props:{mode:t[5],changeMode:t[8]}});let d=t[0],f=[];for(let e=0;e<d.length;e+=1)f[e]=Qe(Ke(t,d,e));let p=[...Array(10).keys()],b=[];for(let e=0;e<p.length;e+=1)b[e]=Ye(He(t,p,e));return{c(){G(n.$$.fragment),i=I(),s=w("div");for(let e=0;e<f.length;e+=1)f[e].c();o=I();for(let e=0;e<b.length;e+=1)b[e].c();a=I(),c=w("div"),_(s,"class","game-environment noselect svelte-2bi1rc"),_(s,"id","game-env"),_(c,"id","occlusion"),_(c,"class","svelte-2bi1rc")},m(d,p){W(n,d,p),m(d,i,p),m(d,s,p);for(let e=0;e<f.length;e+=1)f[e].m(s,null);g(s,o);for(let e=0;e<b.length;e+=1)b[e].m(s,null);var y;m(d,a,p),m(d,c,p),l=!0,u||(y=t[6].call(null,s),h=y&&r(y.destroy)?y.destroy:e,u=!0)},p(e,t){const i={};if(32&t&&(i.mode=e[5]),n.$set(i),3&t){let n;for(d=e[0],n=0;n<d.length;n+=1){const i=Ke(e,d,n);f[n]?f[n].p(i,t):(f[n]=Qe(i),f[n].c(),f[n].m(s,o))}for(;n<f.length;n+=1)f[n].d(1);f.length=d.length}},i(e){l||(z(n.$$.fragment,e),l=!0)},o(e){H(n.$$.fragment,e),l=!1},d(e){J(n,e),e&&y(i),e&&y(s),v(f,e),v(b,e),e&&y(a),e&&y(c),u=!1,h()}}}function Xe(e){let t,n,i,r=e[24]+"";return{c(){t=w("div"),n=b(r),_(t,"class","game-letter svelte-2bi1rc"),_(t,"id",i=e[21]-1<0?`${e[26]}`:`${e[1][e[21]-1]+e[26]}`)},m(e,i){m(e,t,i),g(t,n)},p(e,s){1&s&&r!==(r=e[24]+"")&&k(n,r),2&s&&i!==(i=e[21]-1<0?`${e[26]}`:`${e[1][e[21]-1]+e[26]}`)&&_(t,"id",i)},d(e){e&&y(t)}}}function Qe(e){let t,n,i=0!=e[21]&&function(e){let t,n,i;return{c(){t=w("div"),n=b(" "),_(t,"class","game-letter svelte-2bi1rc"),_(t,"id",i=""+(e[1][e[21]-1]-1))},m(e,i){m(e,t,i),g(t,n)},p(e,n){2&n&&i!==(i=""+(e[1][e[21]-1]-1))&&_(t,"id",i)},d(e){e&&y(t)}}}(e),r=e[22],s=[];for(let t=0;t<r.length;t+=1)s[t]=Xe(Ge(e,r,t));return{c(){t=w("div"),i&&i.c(),n=I();for(let e=0;e<s.length;e+=1)s[e].c();_(t,"class","game-word svelte-2bi1rc")},m(e,r){m(e,t,r),i&&i.m(t,null),g(t,n);for(let e=0;e<s.length;e+=1)s[e].m(t,null)},p(e,n){if(0!=e[21]&&i.p(e,n),3&n){let i;for(r=e[22],i=0;i<r.length;i+=1){const o=Ge(e,r,i);s[i]?s[i].p(o,n):(s[i]=Xe(o),s[i].c(),s[i].m(t,null))}for(;i<s.length;i+=1)s[i].d(1);s.length=r.length}},d(e){e&&y(t),i&&i.d(),v(s,e)}}}function Ye(e){let t;return{c(){t=w("div"),t.innerHTML='<div class="game-letter invisible-letter svelte-2bi1rc">if you see this sentence, you&#39;re awesome</div> \n        '},m(e,n){m(e,t,n)},d(e){e&&y(t)}}}function Ze(e){let t,n,i,r;const s=[Je,We],o=[];function a(e,t){return e[2]?1:0}return n=a(e),i=o[n]=s[n](e),{c(){t=w("main"),i.c()},m(e,i){m(e,t,i),o[n].m(t,null),r=!0},p(e,[r]){let c=n;n=a(e),n===c?o[n].p(e,r):(B(),H(o[c],1,1,(()=>{o[c]=null})),q(),i=o[n],i?i.p(e,r):(i=o[n]=s[n](e),i.c()),z(i,1),i.m(t,null))},i(e){r||(z(i),r=!0)},o(e){H(i),r=!1},d(e){e&&y(t),o[n].d()}}}function et(e,t,n){let{currentRoute:i}=t,{params:r}=t;Array.prototype.random=function(){return this[Math.floor(Math.random()*this.length)]};let s,o=l(),a=o.split(" "),c=[];for(let e=0;e<a.length;e++)c.push(e-1<0?a[e].length+1:a[e].length+c[e-1]+1);function l(){let e=5;return Oe.subscribe((t=>{e=t})),ze(e).join(" ")}De.subscribe((e=>{s=e}));let u=!1,h=!1,d=0,f=0,p=0;function g(){d=0,f=0,De.update((()=>0)),n(2,u=!1),n(3,h=!1),o=l(),n(0,a=o.split(" ")),n(1,c=[]);for(let e=0;e<a.length;e++)c.push(e-1<0?a[e].length+1:a[e].length+c[e-1]+1);n(5,m)}let m="easy";const y={easy:5,medium:20,hard:50};return e.$$set=e=>{"currentRoute"in e&&n(9,i=e.currentRoute),"params"in e&&n(10,r=e.params)},[a,c,u,h,p,m,function(){const e=e=>{if(e.preventDefault(),!u&&(0==d&&(d=new Date),o.charAt(s)!==e.key?n(2,u=!0):(!function(e){let t=document.getElementById(s);t.classList.add("typed-letter"),t.offsetLeft<f&&t.parentElement.scrollIntoView(!0);f=t.offsetLeft}(),De.update((e=>e+1))),s==o.length)){let e=(new Date-d)/6e4;n(4,p=Math.round(a.length/e*1e3)/1e3),n(2,u=!0),n(3,h=!0)}};return document.addEventListener("keypress",e),{destroy(){document.removeEventListener("keypress",e)}}},g,function(e){let t=document.getElementById(m);t.className=t.className.replace(" active-mode",""),document.getElementById(e.target.innerHTML).className+=" active-mode",n(5,m=e.target.innerHTML),Oe.update((()=>y[m]));for(let e=0;e<s;e++){document.getElementById(e).classList.remove("typed-letter")}g()},i,r]}qe.wordList=Be;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
const tt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=r>>2,u=(3&r)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),i.push(n[l],n[u],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t}(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw Error();const c=r<<2|s>>4;if(i.push(c),64!==o){const e=s<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
     */function it(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function rt(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(it())}function st(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function ot(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function at(){const e=it();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}class ct extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lt.prototype.create)}}class lt{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?function(e,t){return e.replace(ut,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new ct(i,o,n)}}const ut=/\{\$([^}]+)}/g;function ht(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(dt(n)&&dt(s)){if(!ht(n,s))return!1}else if(n!==s)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function dt(e){return null!==e&&"object"==typeof e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ft(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function pt(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function gt(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}class mt{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=yt),void 0===i.error&&(i.error=yt),void 0===i.complete&&(i.complete=yt);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function yt(){}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function vt(e,t=1e3,n=2){const i=t*Math.pow(n,e),r=Math.round(.5*i*(Math.random()-.5)*2);return Math.min(144e5,i+r)}
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
     */class Tt{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new nt;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e))try{this.getOrInitializeService({instanceIdentifier:It})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===It?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:It:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Et{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Tt(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var _t;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(_t||(_t={}));const kt={debug:_t.DEBUG,verbose:_t.VERBOSE,info:_t.INFO,warn:_t.WARN,error:_t.ERROR,silent:_t.SILENT},At=_t.INFO,St={[_t.DEBUG]:"log",[_t.VERBOSE]:"log",[_t.INFO]:"info",[_t.WARN]:"warn",[_t.ERROR]:"error"},Ct=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=St[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class Nt{constructor(e){this.name=e,this._logLevel=At,this._logHandler=Ct,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _t))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?kt[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_t.DEBUG,...e),this._logHandler(this,_t.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_t.VERBOSE,...e),this._logHandler(this,_t.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_t.INFO,...e),this._logHandler(this,_t.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_t.WARN,...e),this._logHandler(this,_t.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_t.ERROR,...e),this._logHandler(this,_t.ERROR,...e)}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Rt{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Dt="@firebase/app",Ot="0.7.11",Pt=new Nt("@firebase/app"),xt="[DEFAULT]",Lt={[Dt]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Mt=new Map,$t=new Map;function Ut(e,t){try{e.container.addComponent(t)}catch(n){Pt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ft(e){const t=e.name;if($t.has(t))return Pt.debug(`There were multiple attempts to register component ${t}.`),!1;$t.set(t,e);for(const t of Mt.values())Ut(t,e);return!0}function Vt(e,t){return e.container.getProvider(t)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
     */const qt="9.6.1";function zt(e="[DEFAULT]"){const t=Mt.get(e);if(!t)throw jt.create("no-app",{appName:e});return t}function Ht(e,t,n){var i;let r=null!==(i=Lt[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Pt.warn(e.join(" "))}Ft(new bt(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var Kt;Kt="",Ft(new bt("platform-logger",(e=>new Rt(e)),"PRIVATE")),Ht(Dt,Ot,Kt),Ht(Dt,Ot,"esm2017"),Ht("fire-js","");
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
Ht("firebase","9.6.1","app");"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var Gt,Wt,Jt=(Gt=function(e,t){!function(e){function t(e){return Array.prototype.slice.call(e)}function n(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function i(e,t,i){var r,s=new Promise((function(s,o){n(r=e[t].apply(e,i)).then(s,o)}));return s.request=r,s}function r(e,t,n){var r=i(e,t,n);return r.then((function(e){if(e)return new u(e,r.request)}))}function s(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function o(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return i(this[t],r,arguments)})}))}function a(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return this[t][i].apply(this[t],arguments)})}))}function c(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return r(this[t],i,arguments)})}))}function l(e){this._index=e}function u(e,t){this._cursor=e,this._request=t}function h(e){this._store=e}function d(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function f(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new d(n)}function p(e){this._db=e}function g(e,t,n){var r=i(indexedDB,"open",[e,t]),s=r.request;return s&&(s.onupgradeneeded=function(e){n&&n(new f(s.result,e.oldVersion,s.transaction))}),r.then((function(e){return new p(e)}))}function m(e){return i(indexedDB,"deleteDatabase",[e])}s(l,"_index",["name","keyPath","multiEntry","unique"]),o(l,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),c(l,"_index",IDBIndex,["openCursor","openKeyCursor"]),s(u,"_cursor",["direction","key","primaryKey","value"]),o(u,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(u.prototype[e]=function(){var t=this,i=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,i),n(t._request).then((function(e){if(e)return new u(e,t._request)}))}))})})),h.prototype.createIndex=function(){return new l(this._store.createIndex.apply(this._store,arguments))},h.prototype.index=function(){return new l(this._store.index.apply(this._store,arguments))},s(h,"_store",["name","keyPath","indexNames","autoIncrement"]),o(h,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),c(h,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),a(h,"_store",IDBObjectStore,["deleteIndex"]),d.prototype.objectStore=function(){return new h(this._tx.objectStore.apply(this._tx,arguments))},s(d,"_tx",["objectStoreNames","mode"]),a(d,"_tx",IDBTransaction,["abort"]),f.prototype.createObjectStore=function(){return new h(this._db.createObjectStore.apply(this._db,arguments))},s(f,"_db",["name","version","objectStoreNames"]),a(f,"_db",IDBDatabase,["deleteObjectStore","close"]),p.prototype.transaction=function(){return new d(this._db.transaction.apply(this._db,arguments))},s(p,"_db",["name","version","objectStoreNames"]),a(p,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[h,l].forEach((function(n){e in n.prototype&&(n.prototype[e.replace("open","iterate")]=function(){var n=t(arguments),i=n[n.length-1],r=this._store||this._index,s=r[e].apply(r,n.slice(0,-1));s.onsuccess=function(){i(s.result)}})}))})),[l,h].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,i=[];return new Promise((function(r){n.iterateCursor(e,(function(e){e?(i.push(e.value),void 0===t||i.length!=t?e.continue():r(i)):r(i)}))}))})})),e.openDb=g,e.deleteDb=m,Object.defineProperty(e,"__esModule",{value:!0})}(t)},Gt(Wt={exports:{}},Wt.exports),Wt.exports);const Xt="@firebase/installations",Qt="0.5.4",Yt=1e4,Zt="w:0.5.4",en="FIS_v2",tn=36e5,nn=new lt("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function rn(e){return e instanceof ct&&e.code.includes("request-failed")}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
const wn="firebase-installations-store";let bn=null;function In(){return bn||(bn=Jt.openDb("firebase-installations-database",1,(e=>{if(0===e.oldVersion)e.createObjectStore(wn)}))),bn}async function Tn(e,t){const n=pn(e),i=(await In()).transaction(wn,"readwrite"),r=i.objectStore(wn),s=await r.get(n);return await r.put(t,n),await i.complete,s&&s.fid===t.fid||mn(e,t.fid),t}async function En(e){const t=pn(e),n=(await In()).transaction(wn,"readwrite");await n.objectStore(wn).delete(t),await n.complete}async function _n(e,t){const n=pn(e),i=(await In()).transaction(wn,"readwrite"),r=i.objectStore(wn),s=await r.get(n),o=t(s);return void 0===o?await r.delete(n):await r.put(o,n),await i.complete,!o||s&&s.fid===o.fid||mn(e,o.fid),o}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function kn(e){let t;const n=await _n(e,(n=>{const i=function(e){return Cn(e||{fid:fn(),registrationStatus:0})}(n),r=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(nn.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=async function(e,t){try{const n=await async function(e,{fid:t}){const n=sn(e),i=cn(e),r={fid:t,authVersion:en,appId:e.appId,sdkVersion:Zt},s={method:"POST",headers:i,body:JSON.stringify(r)},o=await un((()=>fetch(n,s)));if(o.ok){const e=await o.json();return{fid:e.fid||t,registrationStatus:2,refreshToken:e.refreshToken,authToken:on(e.authToken)}}throw await an("Create Installation",o)}(e,t);return Tn(e,n)}catch(n){throw rn(n)&&409===n.customData.serverCode?await En(e):await Tn(e,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:An(e)}:{installationEntry:t}}(e,i);return t=r.registrationPromise,r.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function An(e){let t=await Sn(e);for(;1===t.registrationStatus;)await hn(100),t=await Sn(e);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await kn(e);return n||t}return t}function Sn(e){return _n(e,(e=>{if(!e)throw nn.create("installation-not-found");return Cn(e)}))}function Cn(e){return 1===(t=e).registrationStatus&&t.registrationTime+Yt<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}async function Nn({appConfig:e,platformLoggerProvider:t},n){const i=function(e,{fid:t}){return`${sn(e)}/${t}/authTokens:generate`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e,n),r=ln(e,n),s=t.getImmediate({optional:!0});s&&r.append("x-firebase-client",s.getPlatformInfoString());const o={installation:{sdkVersion:Zt}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await un((()=>fetch(i,a)));if(c.ok){return on(await c.json())}throw await an("Generate Auth Token",c)}async function Rn(e,t=!1){let n;const i=await _n(e.appConfig,(i=>{if(!On(i))throw nn.create("not-registered");const r=i.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+tn}(e)}(r))return i;if(1===r.requestStatus)return n=async function(e,t){let n=await Dn(e.appConfig);for(;1===n.authToken.requestStatus;)await hn(100),n=await Dn(e.appConfig);const i=n.authToken;return 0===i.requestStatus?Rn(e,t):i}(e,t),i;{if(!navigator.onLine)throw nn.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(i);return n=async function(e,t){try{const n=await Nn(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await Tn(e.appConfig,i),n}catch(n){if(!rn(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Tn(e.appConfig,n)}else await En(e.appConfig);throw n}}(e,t),t}}));return n?await n:i.authToken}function Dn(e){return _n(e,(e=>{if(!On(e))throw nn.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+Yt<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}))}function On(e){return void 0!==e&&2===e.registrationStatus}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function Pn(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await kn(e);t&&await t}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(n.appConfig);return(await Rn(n,t)).token}function xn(e){return nn.create("missing-app-config-values",{valueName:e})}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Ln="installations",Mn=e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw xn("App Configuration");if(!e.name)throw xn("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw xn(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,platformLoggerProvider:Vt(t,"platform-logger"),_delete:()=>Promise.resolve()}},$n=e=>{const t=Vt(e.getProvider("app").getImmediate(),Ln).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:i}=await kn(t.appConfig);return i?i.catch(console.error):Rn(t).catch(console.error),n.fid}(t),getToken:e=>Pn(t,e)}};Ft(new bt(Ln,Mn,"PUBLIC")),Ft(new bt("installations-internal",$n,"PRIVATE")),Ht(Xt,Qt),Ht(Xt,Qt,"esm2017");
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
function jn(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function Bn(e,t,n,i){return async function(r,s,o){try{"event"===r?await async function(e,t,n,i,r){try{let s=[];if(r&&r.send_to){let e=r.send_to;Array.isArray(e)||(e=[e]);const i=await jn(n);for(const n of e){const e=i.find((e=>e.measurementId===n)),r=e&&t[e.appId];if(!r){s=[];break}s.push(r)}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",i,r||{})}catch(e){Vn.error(e)}}(e,t,n,s,o):"config"===r?await async function(e,t,n,i,r,s){const o=i[r];try{if(o)await t[o];else{const e=(await jn(n)).find((e=>e.measurementId===r));e&&await t[e.appId]}}catch(e){Vn.error(e)}e("config",r,s)}(e,t,n,i,s,o):e("set",s)}catch(e){Vn.error(e)}}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const qn=new lt("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const zn=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function Hn(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Kn(e,t=zn,n){const{appId:i,apiKey:r,measurementId:s}=e.options;if(!i)throw qn.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw qn.create("no-api-key")}const o=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Wn;return setTimeout((async()=>{a.abort()}),void 0!==n?n:6e4),Gn({appId:i,apiKey:r,measurementId:s},o,a,t)}async function Gn(e,{throttleEndTimeMillis:t,backoffCount:n},i,r=zn){const{appId:s,measurementId:o}=e;try{await function(e,t){return new Promise(((n,i)=>{const r=Math.max(t-Date.now(),0),s=setTimeout(n,r);e.addEventListener((()=>{clearTimeout(s),i(qn.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(i,t)}catch(e){if(o)return Vn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${e.message}]`),{appId:s,measurementId:o};throw e}try{const t=await async function(e){var t;const{appId:n,apiKey:i}=e,r={method:"GET",headers:Hn(i)},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(s,r);if(200!==o.status&&304!==o.status){let e="";try{const n=await o.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw qn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:e})}return o.json()}(e);return r.deleteThrottleMetadata(s),t}catch(t){if(!function(e){if(!(e instanceof ct&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(t)){if(r.deleteThrottleMetadata(s),o)return Vn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${t.message}]`),{appId:s,measurementId:o};throw t}const a=503===Number(t.customData.httpStatus)?vt(n,r.intervalMillis,30):vt(n,r.intervalMillis),c={throttleEndTimeMillis:Date.now()+a,backoffCount:n+1};return r.setThrottleMetadata(s,c),Vn.debug(`Calling attemptFetch again in ${a} millis`),Gn(e,c,i,r)}}class Wn{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function Jn(){if("object"!=typeof indexedDB)return Vn.warn(qn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}catch(e){return Vn.warn(qn.create("indexeddb-unavailable",{errorInfo:e}).message),!1}return!0}async function Xn(e,t,n,i,r,s,o){var a;const c=Kn(e);c.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&Vn.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>Vn.error(e))),t.push(c);const l=Jn().then((e=>e?i.getId():void 0)),[u,h]=await Promise.all([c,l]);(function(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Fn))return t;return null})()||function(e,t){const n=document.createElement("script");n.src=`${Fn}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}(s,u.measurementId),r("js",new Date);const d=null!==(a=null==o?void 0:o.config)&&void 0!==a?a:{};return d.origin="firebase",d.update=!0,null!=h&&(d.firebase_id=h),r("config",u.measurementId,d),u.measurementId}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Qn{constructor(e){this.app=e}_delete(){return delete Yn[this.app.options.appId],Promise.resolve()}}let Yn={},Zn=[];const ei={};let ti,ni,ii="dataLayer",ri=!1;function si(){const e=[];if(st()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=qn.create("invalid-analytics-context",{errorInfo:t});Vn.warn(n.message)}}function oi(e,t,n){si();const i=e.options.appId;if(!i)throw qn.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw qn.create("no-api-key");Vn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=Yn[i])throw qn.create("already-exists",{id:i});if(!ri){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(ii);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,i,r){let s=function(...e){window[i].push(arguments)};return window[r]&&"function"==typeof window[r]&&(s=window[r]),window[r]=Bn(s,e,t,n),{gtagCore:s,wrappedGtag:window[r]}}(Yn,Zn,ei,ii,"gtag");ni=e,ti=t,ri=!0}Yn[i]=Xn(e,Zn,ei,t,ti,ii,n);return new Qn(e)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ai(e=zt()){const t=Vt(e=wt(e),Un);return t.isInitialized()?t.getImmediate():function(e,t={}){const n=Vt(e,Un);if(n.isInitialized()){const e=n.getImmediate();if(ht(t,n.getOptions()))return e;throw qn.create("already-initialized")}return n.initialize({options:t})}(e)}function ci(e,t,n,i){e=wt(e),async function(e,t,n,i,r){if(r&&r.global)e("event",n,i);else{const r=await t;e("event",n,Object.assign(Object.assign({},i),{send_to:r}))}}(ni,Yn[e.app.options.appId],t,n,i).catch((e=>Vn.error(e)))}const li="@firebase/analytics",ui="0.7.4";Ft(new bt(Un,((e,{options:t})=>oi(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),Ft(new bt("analytics-internal",(function(e){try{const t=e.getProvider(Un).getImmediate();return{logEvent:(e,n,i)=>ci(t,e,n,i)}}catch(e){throw qn.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),Ht(li,ui),Ht(li,ui,"esm2017");var hi,di="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},fi=fi||{},pi=di||self;function gi(){}function mi(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function yi(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var vi="closure_uid_"+(1e9*Math.random()>>>0),wi=0;function bi(e,t,n){return e.call.apply(e.bind,arguments)}function Ii(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function Ti(e,t,n){return(Ti=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?bi:Ii).apply(null,arguments)}function Ei(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function _i(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[n].apply(e,r)}}function ki(){this.s=this.s,this.o=this.o}var Ai={};ki.prototype.s=!1,ki.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var e=function(e){return Object.prototype.hasOwnProperty.call(e,vi)&&e[vi]||(e[vi]=++wi)}(this);delete Ai[e]}},ki.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Si=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},Ci=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const i=e.length,r="string"==typeof e?e.split(""):e;for(let s=0;s<i;s++)s in r&&t.call(n,r[s],s,e)};function Ni(e){return Array.prototype.concat.apply([],arguments)}function Ri(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function Di(e){return/^[\s\xa0]*$/.test(e)}var Oi,Pi=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function xi(e,t){return-1!=e.indexOf(t)}function Li(e,t){return e<t?-1:e>t?1:0}e:{var Mi=pi.navigator;if(Mi){var $i=Mi.userAgent;if($i){Oi=$i;break e}}Oi=""}function Ui(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function Fi(e){const t={};for(const n in e)t[n]=e[n];return t}var Vi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ji(e,t){let n,i;for(let t=1;t<arguments.length;t++){for(n in i=arguments[t],i)e[n]=i[n];for(let t=0;t<Vi.length;t++)n=Vi[t],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function Bi(e){return Bi[" "](e),e}Bi[" "]=gi;var qi,zi,Hi=xi(Oi,"Opera"),Ki=xi(Oi,"Trident")||xi(Oi,"MSIE"),Gi=xi(Oi,"Edge"),Wi=Gi||Ki,Ji=xi(Oi,"Gecko")&&!(xi(Oi.toLowerCase(),"webkit")&&!xi(Oi,"Edge"))&&!(xi(Oi,"Trident")||xi(Oi,"MSIE"))&&!xi(Oi,"Edge"),Xi=xi(Oi.toLowerCase(),"webkit")&&!xi(Oi,"Edge");function Qi(){var e=pi.document;return e?e.documentMode:void 0}e:{var Yi="",Zi=(zi=Oi,Ji?/rv:([^\);]+)(\)|;)/.exec(zi):Gi?/Edge\/([\d\.]+)/.exec(zi):Ki?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(zi):Xi?/WebKit\/(\S+)/.exec(zi):Hi?/(?:Version)[ \/]?(\S+)/.exec(zi):void 0);if(Zi&&(Yi=Zi?Zi[1]:""),Ki){var er=Qi();if(null!=er&&er>parseFloat(Yi)){qi=String(er);break e}}qi=Yi}var tr,nr={};function ir(){return function(e){var t=nr;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=Pi(String(qi)).split("."),n=Pi("9").split("."),i=Math.max(t.length,n.length);for(let o=0;0==e&&o<i;o++){var r=t[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==r[0].length&&0==s[0].length)break;e=Li(0==r[1].length?0:parseInt(r[1],10),0==s[1].length?0:parseInt(s[1],10))||Li(0==r[2].length,0==s[2].length)||Li(r[2],s[2]),r=r[3],s=s[3]}while(0==e)}return 0<=e}))}if(pi.document&&Ki){var rr=Qi();tr=rr||(parseInt(qi,10)||void 0)}else tr=void 0;var sr=tr,or=function(){if(!pi.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{pi.addEventListener("test",gi,t),pi.removeEventListener("test",gi,t)}catch(e){}return e}();function ar(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function cr(e,t){if(ar.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Ji){e:{try{Bi(t.nodeName);var r=!0;break e}catch(e){}r=!1}r||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:lr[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&cr.Z.h.call(this)}}ar.prototype.h=function(){this.defaultPrevented=!0},_i(cr,ar);var lr={2:"touch",3:"pen",4:"mouse"};cr.prototype.h=function(){cr.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ur="closure_listenable_"+(1e6*Math.random()|0),hr=0;function dr(e,t,n,i,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.ia=r,this.key=++hr,this.ca=this.fa=!1}function fr(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function pr(e){this.src=e,this.g={},this.h=0}function gr(e,t){var n=t.type;if(n in e.g){var i,r=e.g[n],s=Si(r,t);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(fr(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function mr(e,t,n,i){for(var r=0;r<e.length;++r){var s=e[r];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==i)return r}return-1}pr.prototype.add=function(e,t,n,i,r){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=mr(e,t,i,r);return-1<o?(t=e[o],n||(t.fa=!1)):((t=new dr(t,this.src,s,!!i,r)).fa=n,e.push(t)),t};var yr="closure_lm_"+(1e6*Math.random()|0),vr={};function wr(e,t,n,i,r){if(i&&i.once)return Ir(e,t,n,i,r);if(Array.isArray(t)){for(var s=0;s<t.length;s++)wr(e,t[s],n,i,r);return null}return n=Cr(n),e&&e[ur]?e.N(t,n,yi(i)?!!i.capture:!!i,r):br(e,t,n,!1,i,r)}function br(e,t,n,i,r,s){if(!t)throw Error("Invalid event type");var o=yi(r)?!!r.capture:!!r,a=Ar(e);if(a||(e[yr]=a=new pr(e)),(n=a.add(t,n,i,o,s)).proxy)return n;if(i=function(){function e(n){return t.call(e.src,e.listener,n)}var t=kr;return e}(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)or||(r=o),void 0===r&&(r=!1),e.addEventListener(t.toString(),i,r);else if(e.attachEvent)e.attachEvent(_r(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}function Ir(e,t,n,i,r){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Ir(e,t[s],n,i,r);return null}return n=Cr(n),e&&e[ur]?e.O(t,n,yi(i)?!!i.capture:!!i,r):br(e,t,n,!0,i,r)}function Tr(e,t,n,i,r){if(Array.isArray(t))for(var s=0;s<t.length;s++)Tr(e,t[s],n,i,r);else i=yi(i)?!!i.capture:!!i,n=Cr(n),e&&e[ur]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=mr(s=e.g[t],n,i,r))&&(fr(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Ar(e))&&(t=e.g[t.toString()],e=-1,t&&(e=mr(t,n,i,r)),(n=-1<e?t[e]:null)&&Er(n))}function Er(e){if("number"!=typeof e&&e&&!e.ca){var t=e.src;if(t&&t[ur])gr(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(_r(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=Ar(t))?(gr(n,e),0==n.h&&(n.src=null,t[yr]=null)):fr(e)}}}function _r(e){return e in vr?vr[e]:vr[e]="on"+e}function kr(e,t){if(e.ca)e=!0;else{t=new cr(t,this);var n=e.listener,i=e.ia||e.src;e.fa&&Er(e),e=n.call(i,t)}return e}function Ar(e){return(e=e[yr])instanceof pr?e:null}var Sr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Cr(e){return"function"==typeof e?e:(e[Sr]||(e[Sr]=function(t){return e.handleEvent(t)}),e[Sr])}function Nr(){ki.call(this),this.i=new pr(this),this.P=this,this.I=null}function Rr(e,t){var n,i=e.I;if(i)for(n=[];i;i=i.I)n.push(i);if(e=e.P,i=t.type||t,"string"==typeof t)t=new ar(t,e);else if(t instanceof ar)t.target=t.target||e;else{var r=t;ji(t=new ar(i,e),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];r=Dr(o,i,!0,t)&&r}if(r=Dr(o=t.g=e,i,!0,t)&&r,r=Dr(o,i,!1,t)&&r,n)for(s=0;s<n.length;s++)r=Dr(o=t.g=n[s],i,!1,t)&&r}function Dr(e,t,n,i){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&gr(e.i,o),r=!1!==a.call(c,i)&&r}}return r&&!i.defaultPrevented}_i(Nr,ki),Nr.prototype[ur]=!0,Nr.prototype.removeEventListener=function(e,t,n,i){Tr(this,e,t,n,i)},Nr.prototype.M=function(){if(Nr.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)fr(n[i]);delete t.g[e],t.h--}}this.I=null},Nr.prototype.N=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},Nr.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};var Or=pi.JSON.stringify;function Pr(){var e=Vr;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var xr,Lr=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Mr),(e=>e.reset()));class Mr{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function $r(e){pi.setTimeout((()=>{throw e}),0)}function Ur(e,t){xr||function(){var e=pi.Promise.resolve(void 0);xr=function(){e.then(jr)}}(),Fr||(xr(),Fr=!0),Vr.add(e,t)}var Fr=!1,Vr=new class{constructor(){this.h=this.g=null}add(e,t){const n=Lr.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function jr(){for(var e;e=Pr();){try{e.h.call(e.g)}catch(e){$r(e)}var t=Lr;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Fr=!1}function Br(e,t){Nr.call(this),this.h=e||1,this.g=t||pi,this.j=Ti(this.kb,this),this.l=Date.now()}function qr(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function zr(e,t,n){if("function"==typeof e)n&&(e=Ti(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=Ti(e.handleEvent,e)}return 2147483647<Number(t)?-1:pi.setTimeout(e,t||0)}function Hr(e){e.g=zr((()=>{e.g=null,e.i&&(e.i=!1,Hr(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}_i(Br,Nr),(hi=Br.prototype).da=!1,hi.S=null,hi.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Rr(this,"tick"),this.da&&(qr(this),this.start()))}},hi.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},hi.M=function(){Br.Z.M.call(this),qr(this),delete this.g};class Kr extends ki{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Hr(this)}M(){super.M(),this.g&&(pi.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gr(e){ki.call(this),this.h=e,this.g={}}_i(Gr,ki);var Wr=[];function Jr(e,t,n,i){Array.isArray(n)||(n&&(Wr[0]=n.toString()),n=Wr);for(var r=0;r<n.length;r++){var s=wr(t,n[r],i||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Xr(e){Ui(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Er(e)}),e),e.g={}}function Qr(){this.g=!0}function Yr(e,t,n,i){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return Or(n)}catch(e){return t}}(e,n)+(i?" "+i:"")}))}Gr.prototype.M=function(){Gr.Z.M.call(this),Xr(this)},Gr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Qr.prototype.Aa=function(){this.g=!1},Qr.prototype.info=function(){};var Zr={},es=null;function ts(){return es=es||new Nr}function ns(e){ar.call(this,Zr.Ma,e)}function is(e){const t=ts();Rr(t,new ns(t,e))}function rs(e,t){ar.call(this,Zr.STAT_EVENT,e),this.stat=t}function ss(e){const t=ts();Rr(t,new rs(t,e))}function os(e,t){ar.call(this,Zr.Na,e),this.size=t}function as(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return pi.setTimeout((function(){e()}),t)}Zr.Ma="serverreachability",_i(ns,ar),Zr.STAT_EVENT="statevent",_i(rs,ar),Zr.Na="timingevent",_i(os,ar);var cs={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ls={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function us(){}function hs(e){return e.h||(e.h=e.i())}function ds(){}us.prototype.h=null;var fs,ps={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function gs(){ar.call(this,"d")}function ms(){ar.call(this,"c")}function ys(){}function vs(e,t,n,i){this.l=e,this.j=t,this.m=n,this.X=i||1,this.V=new Gr(this),this.P=bs,e=Wi?125:void 0,this.W=new Br(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new ws}function ws(){this.i=null,this.g="",this.h=!1}_i(gs,ar),_i(ms,ar),_i(ys,us),ys.prototype.g=function(){return new XMLHttpRequest},ys.prototype.i=function(){return{}},fs=new ys;var bs=45e3,Is={},Ts={};function Es(e,t,n){e.K=1,e.v=Ks(Vs(t)),e.s=n,e.U=!0,_s(e,null)}function _s(e,t){e.F=Date.now(),Cs(e),e.A=Vs(e.v);var n=e.A,i=e.X;Array.isArray(i)||(i=[String(i)]),so(n.h,"t",i),e.C=0,n=e.l.H,e.h=new ws,e.g=oa(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Kr(Ti(e.Ia,e,e.g),e.O)),Jr(e.V,e.g,"readystatechange",e.gb),t=e.H?Fi(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),is(1),function(e,t,n,i,r,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.X,e.s)}function ks(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function As(e,t,n){let i,r=!0;for(;!e.I&&e.C<n.length;){if(i=Ss(e,n),i==Ts){4==t&&(e.o=4,ss(14),r=!1),Yr(e.j,e.m,null,"[Incomplete Response]");break}if(i==Is){e.o=4,ss(15),Yr(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}Yr(e.j,e.m,i,null),Ps(e,i)}ks(e)&&i!=Ts&&i!=Is&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,ss(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.aa&&(e.aa=!0,(t=e.l).g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Yo(t),t.L=!0,ss(11))):(Yr(e.j,e.m,n,"[Invalid Chunked Response]"),Os(e),Ds(e))}function Ss(e,t){var n=e.C,i=t.indexOf("\n",n);return-1==i?Ts:(n=Number(t.substring(n,i)),isNaN(n)?Is:(i+=1)+n>t.length?Ts:(t=t.substr(i,n),e.C=i+n,t))}function Cs(e){e.Y=Date.now()+e.P,Ns(e,e.P)}function Ns(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=as(Ti(e.eb,e),t)}function Rs(e){e.B&&(pi.clearTimeout(e.B),e.B=null)}function Ds(e){0==e.l.G||e.I||ta(e.l,e)}function Os(e){Rs(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,qr(e.W),Xr(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Ps(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||ho(n.i,e)))if(n.I=e.N,!e.J&&ho(n.i,e)&&3==n.G){try{var i=n.Ca.g.parse(t)}catch(e){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;ea(n),qo(n)}Qo(n),ss(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&0==n.A&&!n.v&&(n.v=as(Ti(n.ab,n),6e3));if(1>=uo(n.i)&&n.ka){try{n.ka()}catch(e){}n.ka=void 0}}else ia(n,11)}else if((e.J||n.g==e)&&ea(n),!Di(t))for(r=n.Ca.g.parse(t),t=0;t<r.length;t++){let l=r[t];if(n.U=l[0],l=l[1],2==n.G)if("c"==l[0]){n.J=l[1],n.la=l[2];const t=l[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const r=l[4];null!=r&&(n.za=r,n.h.info("SVER="+n.za));const u=l[5];null!=u&&"number"==typeof u&&0<u&&(i=1.5*u,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=i.i;!s.g&&(xi(e,"spdy")||xi(e,"quic")||xi(e,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(fo(s,s.h),s.h=null))}if(i.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.sa=e,Hs(i.F,i.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=e;if((i=n).oa=sa(i,i.H?i.la:null,i.W),o.J){po(i.i,o);var a=o,c=i.K;c&&a.setTimeout(c),a.B&&(Rs(a),Cs(a)),i.g=o}else Xo(i);0<n.l.length&&Ko(n)}else"stop"!=l[0]&&"close"!=l[0]||ia(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?ia(n,7):Bo(n):"noop"!=l[0]&&n.j&&n.j.wa(l),n.A=0)}is(4)}catch(e){}}function xs(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(mi(e)||"string"==typeof e)Ci(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(mi(e)||"string"==typeof e){n=[];for(var i=e.length,r=0;r<i;r++)n.push(r)}else for(r in n=[],i=0,e)n[i++]=r;i=function(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"==typeof e)return e.split("");if(mi(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}for(i in t=[],n=0,e)t[n++]=e[i];return t}(e),r=i.length;for(var s=0;s<r;s++)t.call(void 0,i[s],n&&n[s],e)}}function Ls(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(e)if(e instanceof Ls)for(n=e.T(),i=0;i<n.length;i++)this.set(n[i],e.get(n[i]));else for(i in e)this.set(i,e[i])}function Ms(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var i=e.g[t];$s(e.h,i)&&(e.g[n++]=i),t++}e.g.length=n}if(e.i!=e.g.length){var r={};for(n=t=0;t<e.g.length;)$s(r,i=e.g[t])||(e.g[n++]=i,r[i]=1),t++;e.g.length=n}}function $s(e,t){return Object.prototype.hasOwnProperty.call(e,t)}(hi=vs.prototype).setTimeout=function(e){this.P=e},hi.gb=function(e){e=e.target;const t=this.L;t&&3==$o(e)?t.l():this.Ia(e)},hi.Ia=function(e){try{if(e==this.g)e:{const u=$o(this.g);var t=this.g.Da();const h=this.g.ba();if(!(3>u)&&(3!=u||Wi||this.g&&(this.h.h||this.g.ga()||Uo(this.g)))){this.I||4!=u||7==t||is(8==t||0>=h?3:2),Rs(this);var n=this.g.ba();this.N=n;t:if(ks(this)){var i=Uo(this.g);e="";var r=i.length,s=4==$o(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Os(this),Ds(this);var o="";break t}this.h.i=new pi.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:s&&t==r-1});i.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(e,t,n,i,r,s,o){e.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Di(a)){var l=a;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,ss(12),Os(this),Ds(this);break e}Yr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ps(this,n)}this.U?(As(this,u,o),Wi&&this.i&&3==u&&(Jr(this.V,this.W,"tick",this.fb),this.W.start())):(Yr(this.j,this.m,o,null),Ps(this,o)),4==u&&Os(this),this.i&&!this.I&&(4==u?ta(this.l,this):(this.i=!1,Cs(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ss(12)):(this.o=0,ss(13)),Os(this),Ds(this)}}}catch(e){}},hi.fb=function(){if(this.g){var e=$o(this.g),t=this.g.ga();this.C<t.length&&(Rs(this),As(this,e,t),this.i&&4!=e&&Cs(this))}},hi.cancel=function(){this.I=!0,Os(this)},hi.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(is(3),ss(17)),Os(this),this.o=2,Ds(this)):Ns(this,this.Y-e)},(hi=Ls.prototype).R=function(){Ms(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},hi.T=function(){return Ms(this),this.g.concat()},hi.get=function(e,t){return $s(this.h,e)?this.h[e]:t},hi.set=function(e,t){$s(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},hi.forEach=function(e,t){for(var n=this.T(),i=0;i<n.length;i++){var r=n[i],s=this.get(r);e.call(t,s,r,this)}};var Us=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Fs(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Fs){this.g=void 0!==t?t:e.g,js(this,e.j),this.s=e.s,Bs(this,e.i),qs(this,e.m),this.l=e.l,t=e.h;var n=new to;n.i=t.i,t.g&&(n.g=new Ls(t.g),n.h=t.h),zs(this,n),this.o=e.o}else e&&(n=String(e).match(Us))?(this.g=!!t,js(this,n[1]||"",!0),this.s=Gs(n[2]||""),Bs(this,n[3]||"",!0),qs(this,n[4]),this.l=Gs(n[5]||"",!0),zs(this,n[6]||"",!0),this.o=Gs(n[7]||"")):(this.g=!!t,this.h=new to(null,this.g))}function Vs(e){return new Fs(e)}function js(e,t,n){e.j=n?Gs(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Bs(e,t,n){e.i=n?Gs(t,!0):t}function qs(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function zs(e,t,n){t instanceof to?(e.h=t,function(e,t){t&&!e.j&&(no(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(io(this,t),so(this,n,e))}),e)),e.j=t}(e.h,e.g)):(n||(t=Ws(t,Zs)),e.h=new to(t,e.g))}function Hs(e,t,n){e.h.set(t,n)}function Ks(e){return Hs(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Gs(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ws(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Js),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Js(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Fs.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ws(t,Xs,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Ws(t,Xs,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(Ws(n,"/"==n.charAt(0)?Ys:Qs,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ws(n,eo)),e.join("")};var Xs=/[#\/\?@]/g,Qs=/[#\?:]/g,Ys=/[#\?]/g,Zs=/[#\?@]/g,eo=/#/g;function to(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function no(e){e.g||(e.g=new Ls,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),r=null;if(0<=i){var s=e[n].substring(0,i);r=e[n].substring(i+1)}else s=e[n];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function io(e,t){no(e),t=oo(e,t),$s(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,$s((e=e.g).h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Ms(e)))}function ro(e,t){return no(e),t=oo(e,t),$s(e.g.h,t)}function so(e,t,n){io(e,t),0<n.length&&(e.i=null,e.g.set(oo(e,t),Ri(n)),e.h+=n.length)}function oo(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(hi=to.prototype).add=function(e,t){no(this),this.i=null,e=oo(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},hi.forEach=function(e,t){no(this),this.g.forEach((function(n,i){Ci(n,(function(n){e.call(t,n,i,this)}),this)}),this)},hi.T=function(){no(this);for(var e=this.g.R(),t=this.g.T(),n=[],i=0;i<t.length;i++)for(var r=e[i],s=0;s<r.length;s++)n.push(t[i]);return n},hi.R=function(e){no(this);var t=[];if("string"==typeof e)ro(this,e)&&(t=Ni(t,this.g.get(oo(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=Ni(t,e[n])}return t},hi.set=function(e,t){return no(this),this.i=null,ro(this,e=oo(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},hi.get=function(e,t){return e&&0<(e=this.R(e)).length?String(e[0]):t},hi.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var i=t[n],r=encodeURIComponent(String(i));i=this.R(i);for(var s=0;s<i.length;s++){var o=r;""!==i[s]&&(o+="="+encodeURIComponent(String(i[s]))),e.push(o)}}return this.i=e.join("&")};function ao(e){this.l=e||co,pi.PerformanceNavigationTiming?e=0<(e=pi.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(pi.g&&pi.g.Ea&&pi.g.Ea()&&pi.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var co=10;function lo(e){return!!e.h||!!e.g&&e.g.size>=e.j}function uo(e){return e.h?1:e.g?e.g.size:0}function ho(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function fo(e,t){e.g?e.g.add(t):e.h=t}function po(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function go(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Ri(e.i)}function mo(){}function yo(){this.g=new mo}function vo(e,t,n){const i=n||"";try{xs(e,(function(e,n){let r=e;yi(e)&&(r=Or(e)),t.push(i+n+"="+encodeURIComponent(r))}))}catch(e){throw t.push(i+"type="+encodeURIComponent("_badmap")),e}}function wo(e,t,n,i,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(i)}catch(e){}}function bo(e){this.l=e.$b||null,this.j=e.ib||!1}function Io(e,t){Nr.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=To,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ao.prototype.cancel=function(){if(this.i=go(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},mo.prototype.stringify=function(e){return pi.JSON.stringify(e,void 0)},mo.prototype.parse=function(e){return pi.JSON.parse(e,void 0)},_i(bo,us),bo.prototype.g=function(){return new Io(this.l,this.j)},bo.prototype.i=function(e){return function(){return e}}({}),_i(Io,Nr);var To=0;function Eo(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function _o(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ko(e)}function ko(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(hi=Io.prototype).open=function(e,t){if(this.readyState!=To)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ko(this)},hi.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||pi).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},hi.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,_o(this)),this.readyState=To},hi.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ko(this)),this.g&&(this.readyState=3,ko(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==pi.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Eo(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},hi.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?_o(this):ko(this),3==this.readyState&&Eo(this)}},hi.Ua=function(e){this.g&&(this.response=this.responseText=e,_o(this))},hi.Ta=function(e){this.g&&(this.response=e,_o(this))},hi.ha=function(){this.g&&_o(this)},hi.setRequestHeader=function(e,t){this.v.append(e,t)},hi.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},hi.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Io.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Ao=pi.JSON.parse;function So(e){Nr.call(this),this.headers=new Ls,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Co,this.K=this.L=!1}_i(So,Nr);var Co="",No=/^https?$/i,Ro=["POST","PUT"];function Do(e){return"content-type"==e.toLowerCase()}function Oo(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Po(e),Lo(e)}function Po(e){e.D||(e.D=!0,Rr(e,"complete"),Rr(e,"error"))}function xo(e){if(e.h&&void 0!==fi&&(!e.C[1]||4!=$o(e)||2!=e.ba()))if(e.v&&4==$o(e))zr(e.Fa,0,e);else if(Rr(e,"readystatechange"),4==$o(e)){e.h=!1;try{const a=e.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=0===a){var r=String(e.H).match(Us)[1]||null;if(!r&&pi.self&&pi.self.location){var s=pi.self.location.protocol;r=s.substr(0,s.length-1)}i=!No.test(r?r.toLowerCase():"")}n=i}if(n)Rr(e,"complete"),Rr(e,"success");else{e.m=6;try{var o=2<$o(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.ba()+"]",Po(e)}}finally{Lo(e)}}}function Lo(e,t){if(e.g){Mo(e);const n=e.g,i=e.C[0]?gi:null;e.g=null,e.C=null,t||Rr(e,"ready");try{n.onreadystatechange=i}catch(e){}}}function Mo(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(pi.clearTimeout(e.A),e.A=null)}function $o(e){return e.g?e.g.readyState:0}function Uo(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Co:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Fo(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=function(e){let t="";return Ui(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Hs(e,t,n))}function Vo(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function jo(e){this.za=0,this.l=[],this.h=new Qr,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Vo("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Vo("baseRetryDelayMs",5e3,e),this.$a=Vo("retryDelaySeedMs",1e4,e),this.Ya=Vo("forwardChannelMaxRetries",2,e),this.ra=Vo("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new ao(e&&e.concurrentRequestLimit),this.Ca=new yo,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function Bo(e){if(zo(e),3==e.G){var t=e.V++,n=Vs(e.F);Hs(n,"SID",e.J),Hs(n,"RID",t),Hs(n,"TYPE","terminate"),Wo(e,n),(t=new vs(e,e.h,t,void 0)).K=2,t.v=Ks(Vs(n)),n=!1,pi.navigator&&pi.navigator.sendBeacon&&(n=pi.navigator.sendBeacon(t.v.toString(),"")),!n&&pi.Image&&((new Image).src=t.v,n=!0),n||(t.g=oa(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Cs(t)}ra(e)}function qo(e){e.g&&(Yo(e),e.g.cancel(),e.g=null)}function zo(e){qo(e),e.u&&(pi.clearTimeout(e.u),e.u=null),ea(e),e.i.cancel(),e.m&&("number"==typeof e.m&&pi.clearTimeout(e.m),e.m=null)}function Ho(e,t){e.l.push(new class{constructor(e,t){this.h=e,this.g=t}}(e.Za++,t)),3==e.G&&Ko(e)}function Ko(e){lo(e.i)||e.m||(e.m=!0,Ur(e.Ha,e),e.C=0)}function Go(e,t){var n;n=t?t.m:e.V++;const i=Vs(e.F);Hs(i,"SID",e.J),Hs(i,"RID",n),Hs(i,"AID",e.U),Wo(e,i),e.o&&e.s&&Fo(i,e.o,e.s),n=new vs(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Jo(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),fo(e.i,n),Es(n,i,t)}function Wo(e,t){e.j&&xs({},(function(e,n){Hs(t,n,e)}))}function Jo(e,t,n){n=Math.min(e.l.length,n);var i=e.j?Ti(e.j.Oa,e.j,e):null;e:{var r=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=r[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=r[o].h;const a=r[o].g;if(n-=t,0>n)t=Math.max(0,r[o].h-100),s=!1;else try{vo(a,e,"req"+n+"_")}catch(e){i&&i(a)}}if(s){i=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,i}function Xo(e){e.g||e.u||(e.Y=1,Ur(e.Ga,e),e.A=0)}function Qo(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=as(Ti(e.Ga,e),na(e,e.A)),e.A++,!0)}function Yo(e){null!=e.B&&(pi.clearTimeout(e.B),e.B=null)}function Zo(e){e.g=new vs(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Vs(e.oa);Hs(t,"RID","rpc"),Hs(t,"SID",e.J),Hs(t,"CI",e.N?"0":"1"),Hs(t,"AID",e.U),Wo(e,t),Hs(t,"TYPE","xmlhttp"),e.o&&e.s&&Fo(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=Ks(Vs(t)),n.s=null,n.U=!0,_s(n,e)}function ea(e){null!=e.v&&(pi.clearTimeout(e.v),e.v=null)}function ta(e,t){var n=null;if(e.g==t){ea(e),Yo(e),e.g=null;var i=2}else{if(!ho(e.i,t))return;n=t.D,po(e.i,t),i=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==i){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;Rr(i=ts(),new os(i,n,t,r)),Ko(e)}else Xo(e);else if(3==(r=t.o)||0==r&&0<e.I||!(1==i&&function(e,t){return!(uo(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.l=t.D.concat(e.l),0):1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya)||(e.m=as(Ti(e.Ha,e,t),na(e,e.C)),e.C++,0)))}(e,t)||2==i&&Qo(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),r){case 1:ia(e,5);break;case 4:ia(e,10);break;case 3:ia(e,6);break;default:ia(e,2)}}function na(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function ia(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var i=Ti(e.jb,e);n||(n=new Fs("//www.google.com/images/cleardot.gif"),pi.location&&"http"==pi.location.protocol||js(n,"https"),Ks(n)),function(e,t){const n=new Qr;if(pi.Image){const i=new Image;i.onload=Ei(wo,n,i,"TestLoadImage: loaded",!0,t),i.onerror=Ei(wo,n,i,"TestLoadImage: error",!1,t),i.onabort=Ei(wo,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=Ei(wo,n,i,"TestLoadImage: timeout",!1,t),pi.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=e}else t(!1)}(n.toString(),i)}else ss(2);e.G=0,e.j&&e.j.va(t),ra(e),zo(e)}function ra(e){e.G=0,e.I=-1,e.j&&(0==go(e.i).length&&0==e.l.length||(e.i.i.length=0,Ri(e.l),e.l.length=0),e.j.ua())}function sa(e,t,n){let i=function(e){return e instanceof Fs?Vs(e):new Fs(e,void 0)}(n);if(""!=i.i)t&&Bs(i,t+"."+i.i),qs(i,i.m);else{const e=pi.location;i=function(e,t,n,i){var r=new Fs(null,void 0);return e&&js(r,e),t&&Bs(r,t),n&&qs(r,n),i&&(r.l=i),r}(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&Ui(e.aa,(function(e,t){Hs(i,t,e)})),t=e.D,n=e.sa,t&&n&&Hs(i,t,n),Hs(i,"VER",e.ma),Wo(e,i),i}function oa(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ba&&!e.qa?new So(new bo({ib:!0})):new So(e.qa)).L=e.H,t}function aa(){}function ca(){if(Ki&&!(10<=Number(sr)))throw Error("Environmental error: no available transport.")}function la(e,t){Nr.call(this),this.g=new jo(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!Di(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Di(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new da(this)}function ua(e){gs.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function ha(){ms.call(this),this.status=1}function da(e){this.g=e}(hi=So.prototype).ea=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():fs.g(),this.C=this.u?hs(this.u):hs(fs),this.g.onreadystatechange=Ti(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void Oo(this,e)}e=n||"";const r=new Ls(this.headers);i&&xs(i,(function(e,t){r.set(t,e)})),i=function(e){e:{var t=Do;const n=e.length,i="string"==typeof e?e.split(""):e;for(let r=0;r<n;r++)if(r in i&&t.call(void 0,i[r],r,e)){t=r;break e}t=-1}return 0>t?null:"string"==typeof e?e.charAt(t):e[t]}(r.T()),n=pi.FormData&&e instanceof pi.FormData,!(0<=Si(Ro,t))||i||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Mo(this),0<this.B&&((this.K=function(e){return Ki&&ir()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ti(this.pa,this)):this.A=zr(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){Oo(this,e)}},hi.pa=function(){void 0!==fi&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Rr(this,"timeout"),this.abort(8))},hi.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Rr(this,"complete"),Rr(this,"abort"),Lo(this))},hi.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Lo(this,!0)),So.Z.M.call(this)},hi.Fa=function(){this.s||(this.F||this.v||this.l?xo(this):this.cb())},hi.cb=function(){xo(this)},hi.ba=function(){try{return 2<$o(this)?this.g.status:-1}catch(e){return-1}},hi.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},hi.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Ao(t)}},hi.Da=function(){return this.m},hi.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(hi=jo.prototype).ma=8,hi.G=1,hi.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(e){}},hi.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const r=new vs(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?(s=Fi(s),ji(s,this.P)):s=this.P),null===this.o&&(r.H=s),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var i=this.l[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(t+=i)){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Jo(this,r,t),Hs(n=Vs(this.F),"RID",e),Hs(n,"CVER",22),this.D&&Hs(n,"X-HTTP-Session-Id",this.D),Wo(this,n),this.o&&s&&Fo(n,this.o,s),fo(this.i,r),this.Ra&&Hs(n,"TYPE","init"),this.ja?(Hs(n,"$req",t),Hs(n,"SID","null"),r.$=!0,Es(r,n,null)):Es(r,n,t),this.G=2}}else 3==this.G&&(e?Go(this,e):0==this.l.length||lo(this.i)||Go(this))},hi.Ga=function(){if(this.u=null,Zo(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=as(Ti(this.bb,this),e)}},hi.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ss(10),qo(this),Zo(this))},hi.ab=function(){null!=this.v&&(this.v=null,qo(this),Qo(this),ss(19))},hi.jb=function(e){e?(this.h.info("Successfully pinged google.com"),ss(2)):(this.h.info("Failed to ping google.com"),ss(1))},(hi=aa.prototype).xa=function(){},hi.wa=function(){},hi.va=function(){},hi.ua=function(){},hi.Oa=function(){},ca.prototype.g=function(e,t){return new la(e,t)},_i(la,Nr),la.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Ur(Ti(e.hb,e,t))),ss(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=sa(e,null,e.W),Ko(e)},la.prototype.close=function(){Bo(this.g)},la.prototype.u=function(e){if("string"==typeof e){var t={};t.__data__=e,Ho(this.g,t)}else this.v?((t={}).__data__=Or(e),Ho(this.g,t)):Ho(this.g,e)},la.prototype.M=function(){this.g.j=null,delete this.j,Bo(this.g),delete this.g,la.Z.M.call(this)},_i(ua,gs),_i(ha,ms),_i(da,aa),da.prototype.xa=function(){Rr(this.g,"a")},da.prototype.wa=function(e){Rr(this.g,new ua(e))},da.prototype.va=function(e){Rr(this.g,new ha(e))},da.prototype.ua=function(){Rr(this.g,"b")},ca.prototype.createWebChannel=ca.prototype.g,la.prototype.send=la.prototype.u,la.prototype.open=la.prototype.m,la.prototype.close=la.prototype.close,cs.NO_ERROR=0,cs.TIMEOUT=8,cs.HTTP_ERROR=6,ls.COMPLETE="complete",ds.EventType=ps,ps.OPEN="a",ps.CLOSE="b",ps.ERROR="c",ps.MESSAGE="d",Nr.prototype.listen=Nr.prototype.N,So.prototype.listenOnce=So.prototype.O,So.prototype.getLastError=So.prototype.La,So.prototype.getLastErrorCode=So.prototype.Da,So.prototype.getStatus=So.prototype.ba,So.prototype.getResponseJson=So.prototype.Qa,So.prototype.getResponseText=So.prototype.ga,So.prototype.send=So.prototype.ea;var fa=cs,pa=ls,ma=Zr,ya=10,va=11,wa=bo,ba=ds,Ia=So;const Ta="@firebase/firestore";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
     */function Da(e="Unexpected state"){const t=`FIRESTORE (${_a}) INTERNAL ASSERTION FAILED: `+e;throw Ca(t),new Error(t)}function Oa(e,t){e||Da()}function Pa(e,t){return e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const xa={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class La extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ma{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class $a{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ua{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ea.UNAUTHENTICATED)))}shutdown(){}}class Fa{constructor(e){this.t=e,this.currentUser=Ea.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let r=new Ma;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Ma,e.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const t=r;e.enqueueRetryable((async()=>{await t.promise,await i(this.currentUser)}))},o=e=>{Sa("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Sa("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Ma)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Sa("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Oa("string"==typeof t.accessToken),new $a(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Oa(null===e||"string"==typeof e),new Ea(e)}}class Va{constructor(e,t,n){this.type="FirstParty",this.user=Ea.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class ja{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new Va(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(Ea.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ba{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qa{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null}start(e,t){this.o=n=>{e.enqueueRetryable((()=>(e=>(null!=e.error&&Sa("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`),t(e.token)))(n)))};const n=e=>{Sa("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit((e=>n(e))),setTimeout((()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?n(e):Sa("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Oa("string"==typeof e.token),new Ba(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
     */za.I=-1;class Ka{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=Ha(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<t&&(n+=e.charAt(i[r]%e.length))}return n}}function Ga(e,t){return e<t?-1:e>t?1:0}function Wa(e,t,n){return e.length===t.length&&e.every(((e,i)=>n(e,t[i])))}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ja{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new La(xa.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new La(xa.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new La(xa.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new La(xa.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ja.fromMillis(Date.now())}static fromDate(e){return Ja.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Ja(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ga(this.nanoseconds,e.nanoseconds):Ga(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
     */class ec{constructor(e,t,n){void 0===t?t=0:t>e.length&&Da(),void 0===n?n=e.length-t:n>e.length-t&&Da(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===ec.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ec?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const n=e.get(i),r=t.get(i);if(n<r)return-1;if(n>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class tc extends ec{construct(e,t,n){return new tc(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new La(xa.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new tc(t)}static emptyPath(){return new tc([])}}const nc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ic extends ec{construct(e,t,n){return new ic(e,t,n)}static isValidIdentifier(e){return nc.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ic.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ic(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const r=()=>{if(0===n.length)throw new La(xa.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;i<e.length;){const t=e[i];if("\\"===t){if(i+1===e.length)throw new La(xa.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new La(xa.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?(s=!s,i++):"."!==t||s?(n+=t,i++):(r(),i++)}if(r(),s)throw new La(xa.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ic(t)}static emptyPath(){return new ic([])}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class rc{constructor(e){this.fields=e,e.sort(ic.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Wa(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ga(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}sc.EMPTY_BYTE_STRING=new sc("");const oc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ac(e){if(Oa(!!e),"string"==typeof e){let t=0;const n=oc.exec(e);if(Oa(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:cc(e.seconds),nanos:cc(e.nanos)}}function cc(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function lc(e){return"string"==typeof e?sc.fromBase64String(e):sc.fromUint8Array(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
     */function pc(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?function(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}(e)?4:10:Da()}function gc(e,t){const n=pc(e);if(n!==pc(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return uc(e).isEqual(uc(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=ac(e.timestampValue),i=ac(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return lc(e.bytesValue).isEqual(lc(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return cc(e.geoPointValue.latitude)===cc(t.geoPointValue.latitude)&&cc(e.geoPointValue.longitude)===cc(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return cc(e.integerValue)===cc(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=cc(e.doubleValue),i=cc(t.doubleValue);return n===i?dc(n)===dc(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return Wa(e.arrayValue.values||[],t.arrayValue.values||[],gc);case 10:return function(e,t){const n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(Qa(n)!==Qa(i))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===i[e]||!gc(n[e],i[e])))return!1;return!0}(e,t);default:return Da()}}function mc(e,t){return void 0!==(e.values||[]).find((e=>gc(e,t)))}function yc(e,t){const n=pc(e),i=pc(t);if(n!==i)return Ga(n,i);switch(n){case 0:return 0;case 1:return Ga(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=cc(e.integerValue||e.doubleValue),i=cc(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return vc(e.timestampValue,t.timestampValue);case 4:return vc(uc(e),uc(t));case 5:return Ga(e.stringValue,t.stringValue);case 6:return function(e,t){const n=lc(e),i=lc(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),i=t.split("/");for(let e=0;e<n.length&&e<i.length;e++){const t=Ga(n[e],i[e]);if(0!==t)return t}return Ga(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Ga(cc(e.latitude),cc(t.latitude));return 0!==n?n:Ga(cc(e.longitude),cc(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],i=t.values||[];for(let e=0;e<n.length&&e<i.length;++e){const t=yc(n[e],i[e]);if(t)return t}return Ga(n.length,i.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},i=Object.keys(n),r=t.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let e=0;e<i.length&&e<s.length;++e){const t=Ga(i[e],s[e]);if(0!==t)return t;const o=yc(n[i[e]],r[s[e]]);if(0!==o)return o}return Ga(i.length,s.length)}(e.mapValue,t.mapValue);default:throw Da()}}function vc(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Ga(e,t);const n=ac(e),i=ac(t),r=Ga(n.seconds,i.seconds);return 0!==r?r:Ga(n.nanos,i.nanos)}function wc(e){return bc(e)}function bc(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=ac(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?lc(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,fc.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const i of e.values||[])n?n=!1:t+=",",t+=bc(i);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",i=!0;for(const r of t)i?i=!1:n+=",",n+=`${r}:${bc(e.fields[r])}`;return n+"}"}(e.mapValue):Da();var t,n}function Ic(e){return!!e&&"integerValue"in e}function Tc(e){return!!e&&"arrayValue"in e}function Ec(e){return!!e&&"mapValue"in e}function _c(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Ya(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=_c(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=_c(e.arrayValue.values[n]);return t}return Object.assign({},e)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class kc{constructor(e){this.value=e}static empty(){return new kc({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Ec(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=_c(t)}setAll(e){let t=ic.emptyPath(),n={},i=[];e.forEach(((e,r)=>{if(!t.isImmediateParentOf(r)){const e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=r.popLast()}e?n[r.lastSegment()]=_c(e):i.push(r.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,n,i)}delete(e){const t=this.field(e.popLast());Ec(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return gc(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];Ec(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){Ya(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new kc(_c(this.value))}}function Ac(e){const t=[];return Ya(e.fields,((e,n)=>{const i=new ic([e]);if(Ec(n)){const e=Ac(n.mapValue).fields;if(0===e.length)t.push(i);else for(const n of e)t.push(i.child(n))}else t.push(i)})),new rc(t)
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class Sc{constructor(e,t,n,i,r){this.key=e,this.documentType=t,this.version=n,this.data=i,this.documentState=r}static newInvalidDocument(e){return new Sc(e,0,Xa.min(),kc.empty(),0)}static newFoundDocument(e,t,n){return new Sc(e,1,t,n,0)}static newNoDocument(e,t){return new Sc(e,2,t,kc.empty(),0)}static newUnknownDocument(e,t){return new Sc(e,3,t,kc.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kc.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kc.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Sc&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new Sc(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Cc{constructor(e,t=null,n=[],i=[],r=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.R=null}}function Nc(e,t=null,n=[],i=[],r=null,s=null,o=null){return new Cc(e,t,n,i,r,s,o)}function Rc(e){const t=Pa(e);if(null===t.R){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>function(e){return e.field.canonicalString()+e.op.toString()+wc(e.value)}(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),hc(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=Bc(t.startAt)),t.endAt&&(e+="|ub:",e+=Bc(t.endAt)),t.R=e}return t.R}function Dc(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!zc(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(n=e.filters[r],i=t.filters[r],n.op!==i.op||!n.field.isEqual(i.field)||!gc(n.value,i.value))return!1;var n,i;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Kc(e.startAt,t.startAt)&&Kc(e.endAt,t.endAt)}class Oc extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.P(e,t,n):new Pc(e,t,n):"array-contains"===t?new $c(e,n):"in"===t?new Uc(e,n):"not-in"===t?new Fc(e,n):"array-contains-any"===t?new Vc(e,n):new Oc(e,t,n)}static P(e,t,n){return"in"===t?new xc(e,n):new Lc(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.v(yc(t,this.value)):null!==t&&pc(this.value)===pc(t)&&this.v(yc(t,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Da()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Pc extends Oc{constructor(e,t,n){super(e,t,n),this.key=fc.fromName(n.referenceValue)}matches(e){const t=fc.comparator(e.key,this.key);return this.v(t)}}class xc extends Oc{constructor(e,t){super(e,"in",t),this.keys=Mc("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Lc extends Oc{constructor(e,t){super(e,"not-in",t),this.keys=Mc("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Mc(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>fc.fromName(e.referenceValue)))}class $c extends Oc{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Tc(t)&&mc(t.arrayValue,this.value)}}class Uc extends Oc{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&mc(this.value.arrayValue,t)}}class Fc extends Oc{constructor(e,t){super(e,"not-in",t)}matches(e){if(mc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!mc(this.value.arrayValue,t)}}class Vc extends Oc{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Tc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>mc(this.value.arrayValue,e)))}}class jc{constructor(e,t){this.position=e,this.before=t}}function Bc(e){return`${e.before?"b":"a"}:${e.position.map((e=>wc(e))).join(",")}`}class qc{constructor(e,t="asc"){this.field=e,this.dir=t}}function zc(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Hc(e,t,n){let i=0;for(let r=0;r<e.position.length;r++){const s=t[r],o=e.position[r];if(i=s.field.isKeyField()?fc.comparator(fc.fromName(o.referenceValue),n.key):yc(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return e.before?i<=0:i<0}function Kc(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.before!==t.before||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!gc(e.position[n],t.position[n]))return!1;return!0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Gc{constructor(e,t=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.S=null,this.D=null,this.startAt,this.endAt}}function Wc(e){const t=Pa(e);if(null===t.S){t.S=[];const e=function(e){for(const t of e.filters)if(t.V())return t.field;return null}(t),n=function(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}(t);if(null!==e&&null===n)e.isKeyField()||t.S.push(new qc(e)),t.S.push(new qc(ic.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.S.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.S.push(new qc(ic.keyField(),e))}}}return t.S}function Jc(e){const t=Pa(e);if(!t.D)if("F"===t.limitType)t.D=Nc(t.path,t.collectionGroup,Wc(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of Wc(t)){const t="desc"===n.dir?"asc":"desc";e.push(new qc(n.field,t))}const n=t.endAt?new jc(t.endAt.position,!t.endAt.before):null,i=t.startAt?new jc(t.startAt.position,!t.startAt.before):null;t.D=Nc(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}return t.D}function Xc(e,t){return Dc(Jc(e),Jc(t))&&e.limitType===t.limitType}function Qc(e){return`${Rc(Jc(e))}|lt:${e.limitType}`}function Yc(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${wc(t.value)}`;var t})).join(", ")}]`),hc(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: "+Bc(e.startAt)),e.endAt&&(t+=", endAt: "+Bc(e.endAt)),`Target(${t})`}(Jc(e))}; limitType=${e.limitType})`}function Zc(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):fc.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!Hc(e.startAt,Wc(e),t))&&(!e.endAt||!Hc(e.endAt,Wc(e),t))}(e,t)}function el(e,t,n){const i=e.field.isKeyField()?fc.comparator(t.key,n.key):function(e,t,n){const i=t.data.field(e),r=n.data.field(e);return null!==i&&null!==r?yc(i,r):Da()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return Da()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function tl(e,t){if(e.C){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:dc(t)?"-0":t}}function nl(e){return{integerValue:""+e}}function il(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!dc(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(t)?nl(t):tl(e,t)}
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
     */class rl{constructor(){this._=void 0}}function sl(e,t,n){return e instanceof cl?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof ll?ul(e,t):e instanceof hl?dl(e,t):function(e,t){const n=al(e,t),i=pl(n)+pl(e.N);return Ic(n)&&Ic(e.N)?nl(i):tl(e.k,i)}(e,t)}function ol(e,t,n){return e instanceof ll?ul(e,t):e instanceof hl?dl(e,t):n}function al(e,t){return e instanceof fl?Ic(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class cl extends rl{}class ll extends rl{constructor(e){super(),this.elements=e}}function ul(e,t){const n=gl(t);for(const t of e.elements)n.some((e=>gc(e,t)))||n.push(t);return{arrayValue:{values:n}}}class hl extends rl{constructor(e){super(),this.elements=e}}function dl(e,t){let n=gl(t);for(const t of e.elements)n=n.filter((e=>!gc(e,t)));return{arrayValue:{values:n}}}class fl extends rl{constructor(e,t){super(),this.k=e,this.N=t}}function pl(e){return cc(e.integerValue||e.doubleValue)}function gl(e){return Tc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class ml{constructor(e,t){this.version=e,this.transformResults=t}}class yl{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new yl}static exists(e){return new yl(void 0,e)}static updateTime(e){return new yl(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vl(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class wl{}function bl(e,t,n){e instanceof kl?function(e,t,n){const i=e.value.clone(),r=Cl(e.fieldTransforms,t,n.transformResults);i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):e instanceof Al?function(e,t,n){if(!vl(e.precondition,t))return void t.convertToUnknownDocument(n.version);const i=Cl(e.fieldTransforms,t,n.transformResults),r=t.data;r.setAll(Sl(e)),r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Il(e,t,n){e instanceof kl?function(e,t,n){if(!vl(e.precondition,t))return;const i=e.value.clone(),r=Nl(e.fieldTransforms,n,t);i.setAll(r),t.convertToFoundDocument(_l(t),i).setHasLocalMutations()}(e,t,n):e instanceof Al?function(e,t,n){if(!vl(e.precondition,t))return;const i=Nl(e.fieldTransforms,n,t),r=t.data;r.setAll(Sl(e)),r.setAll(i),t.convertToFoundDocument(_l(t),r).setHasLocalMutations()}(e,t,n):function(e,t){vl(e.precondition,t)&&t.convertToNoDocument(Xa.min())}(e,t)}function Tl(e,t){let n=null;for(const i of e.fieldTransforms){const e=t.data.field(i.field),r=al(i.transform,e||null);null!=r&&(null==n&&(n=kc.empty()),n.set(i.field,r))}return n||null}function El(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Wa(e,t,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof ll&&t instanceof ll||e instanceof hl&&t instanceof hl?Wa(e.elements,t.elements,gc):e instanceof fl&&t instanceof fl?gc(e.N,t.N):e instanceof cl&&t instanceof cl}(e.transform,t.transform)}(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function _l(e){return e.isFoundDocument()?e.version:Xa.min()}class kl extends wl{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}}class Al extends wl{constructor(e,t,n,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}}function Sl(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}})),t}function Cl(e,t,n){const i=new Map;Oa(e.length===n.length);for(let r=0;r<n.length;r++){const s=e[r],o=s.transform,a=t.data.field(s.field);i.set(s.field,ol(o,a,n[r]))}return i}function Nl(e,t,n){const i=new Map;for(const r of e){const e=r.transform,s=n.data.field(r.field);i.set(r.field,sl(e,s,t))}return i}class Rl extends wl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Dl extends wl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var Ol,Pl;(Pl=Ol||(Ol={}))[Pl.OK=0]="OK",Pl[Pl.CANCELLED=1]="CANCELLED",Pl[Pl.UNKNOWN=2]="UNKNOWN",Pl[Pl.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Pl[Pl.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Pl[Pl.NOT_FOUND=5]="NOT_FOUND",Pl[Pl.ALREADY_EXISTS=6]="ALREADY_EXISTS",Pl[Pl.PERMISSION_DENIED=7]="PERMISSION_DENIED",Pl[Pl.UNAUTHENTICATED=16]="UNAUTHENTICATED",Pl[Pl.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Pl[Pl.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Pl[Pl.ABORTED=10]="ABORTED",Pl[Pl.OUT_OF_RANGE=11]="OUT_OF_RANGE",Pl[Pl.UNIMPLEMENTED=12]="UNIMPLEMENTED",Pl[Pl.INTERNAL=13]="INTERNAL",Pl[Pl.UNAVAILABLE=14]="UNAVAILABLE",Pl[Pl.DATA_LOSS=15]="DATA_LOSS";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class xl{constructor(e,t){this.comparator=e,this.root=t||Ml.EMPTY}insert(e,t){return new xl(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ml.BLACK,null,null))}remove(e){return new xl(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ml.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ll(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ll(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ll(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ll(this.root,e,this.comparator,!0)}}class Ll{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ml{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:Ml.RED,this.left=null!=i?i:Ml.EMPTY,this.right=null!=r?r:Ml.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,r){return new Ml(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ml.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return Ml.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ml.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ml.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Da();if(this.right.isRed())throw Da();const e=this.left.check();if(e!==this.right.check())throw Da();return e+(this.isRed()?0:1)}}Ml.EMPTY=null,Ml.RED=!0,Ml.BLACK=!1,Ml.EMPTY=new class{constructor(){this.size=0}get key(){throw Da()}get value(){throw Da()}get color(){throw Da()}get left(){throw Da()}get right(){throw Da()}copy(e,t,n,i,r){return this}insert(e,t,n){return new Ml(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class $l{constructor(e){this.comparator=e,this.data=new xl(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ul(this.data.getIterator())}getIteratorFrom(e){return new Ul(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof $l))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new $l(this.comparator);return t.data=e,t}}class Ul{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Fl=new xl(fc.comparator);function Vl(){return Fl}const jl=new xl(fc.comparator);function Bl(){return jl}const ql=new xl(fc.comparator);const zl=new $l(fc.comparator);function Hl(...e){let t=zl;for(const n of e)t=t.add(n);return t}const Kl=new $l(Ga);class Gl{constructor(e,t){this.databaseId=e,this.C=t}}function Wl(e,t){return e.C?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Jl(e,t){return e.C?t.toBase64():t.toUint8Array()}function Xl(e,t){return Wl(e,t.toTimestamp())}function Ql(e){return Oa(!!e),Xa.fromTimestamp(function(e){const t=ac(e);return new Ja(t.seconds,t.nanos)}(e))}function Yl(e,t){return function(e){return new tc(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Zl(e,t){return Yl(e.databaseId,t.path)}function eu(e){const t=function(e){const t=tc.fromString(e);return Oa(function(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}(t)),t}(e);return 4===t.length?tc.emptyPath():function(e){return Oa(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}(t)}function tu(e,t,n){return{name:Zl(e,t),fields:n.value.mapValue.fields}}function nu(e){let t=eu(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){Oa(1===i);const e=n.from[0];e.allDescendants?r=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=iu(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new qc(su(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,hc(t)?null:t}(n.limit));let c=null;n.startAt&&(c=ru(n.startAt));let l=null;return n.endAt&&(l=ru(n.endAt)),function(e,t,n,i,r,s,o,a){return new Gc(e,t,n,i,r,s,o,a)}(t,r,o,s,a,"F",c,l)}function iu(e){return e?void 0!==e.unaryFilter?[au(e)]:void 0!==e.fieldFilter?[ou(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>iu(e))).reduce(((e,t)=>e.concat(t))):Da():[]}function ru(e){const t=!!e.before,n=e.values||[];return new jc(n,t)}function su(e){return ic.fromServerFormat(e.fieldPath)}function ou(e){return Oc.create(su(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Da()}}(e.fieldFilter.op),e.fieldFilter.value)}function au(e){switch(e.unaryFilter.op){case"IS_NAN":const t=su(e.unaryFilter.field);return Oc.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=su(e.unaryFilter.field);return Oc.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=su(e.unaryFilter.field);return Oc.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=su(e.unaryFilter.field);return Oc.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Da()}}function cu(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class lu{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Da(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new lu(((n,i)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,i)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof lu?t:lu.resolve(t)}catch(e){return lu.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):lu.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):lu.reject(t)}static resolve(e){return new lu(((t,n)=>{t(e)}))}static reject(e){return new lu(((t,n)=>{n(e)}))}static waitFor(e){return new lu(((t,n)=>{let i=0,r=0,s=!1;e.forEach((e=>{++i,e.next((()=>{++r,s&&r===i&&t()}),(e=>n(e)))})),s=!0,r===i&&t()}))}static or(e){let t=lu.resolve(!1);for(const n of e)t=t.next((e=>e?lu.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,i)=>{n.push(t.call(this,e,i))})),this.waitFor(n)}}function uu(e){return"IndexedDbTransactionError"===e.name}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class hu{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const i=this.mutations[t];i.key.isEqual(e.key)&&bl(i,e,n[t])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&Il(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&Il(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach((t=>{const n=e.get(t.key),i=n;this.applyToLocalView(i),n.isValidDocument()||i.convertToNoDocument(Xa.min())}))}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Hl())}isEqual(e){return this.batchId===e.batchId&&Wa(this.mutations,e.mutations,((e,t)=>El(e,t)))&&Wa(this.baseMutations,e.baseMutations,((e,t)=>El(e,t)))}}class du{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){Oa(e.mutations.length===n.length);let i=ql;const r=e.mutations;for(let e=0;e<r.length;e++)i=i.insert(r[e].key,n[e].version);return new du(e,t,n,i)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
     */class gu{constructor(){this.zt=new mu}addToCollectionParentIndex(e,t){return this.zt.add(t),lu.resolve()}getCollectionParents(e,t){return lu.resolve(this.zt.getEntries(t))}}class mu{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new $l(tc.comparator),r=!i.has(n);return this.index[t]=i.add(n),r}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new $l(tc.comparator)).toArray()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
     */async function vu(e){if(e.code!==xa.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;Sa("LocalStore","Unexpectedly lost primary lease")}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class wu{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,i]of n)if(this.equalsFn(t,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(void 0!==i){for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],e))return void(i[n]=[e,t]);i.push([e,t])}else this.inner[n]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return 1===n.length?delete this.inner[t]:n.splice(i,1),!0;return!1}forEach(e){Ya(this.inner,((t,n)=>{for(const[t,i]of n)e(t,i)}))}isEmpty(){return Za(this.inner)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
class bu{constructor(e,t,n){this.Je=e,this.An=t,this.Jt=n}Rn(e,t){return this.An.getAllMutationBatchesAffectingDocumentKey(e,t).next((n=>this.Pn(e,t,n)))}Pn(e,t,n){return this.Je.getEntry(e,t).next((e=>{for(const t of n)t.applyToLocalView(e);return e}))}bn(e,t){e.forEach(((e,n)=>{for(const e of t)e.applyToLocalView(n)}))}vn(e,t){return this.Je.getEntries(e,t).next((t=>this.Vn(e,t).next((()=>t))))}Vn(e,t){return this.An.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>this.bn(t,e)))}getDocumentsMatchingQuery(e,t,n){return function(e){return fc.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.Sn(e,t.path):function(e){return null!==e.collectionGroup}(t)?this.Dn(e,t,n):this.Cn(e,t,n)}Sn(e,t){return this.Rn(e,new fc(t)).next((e=>{let t=Bl();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}Dn(e,t,n){const i=t.collectionGroup;let r=Bl();return this.Jt.getCollectionParents(e,i).next((s=>lu.forEach(s,(s=>{const o=function(e,t){return new Gc(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(i));return this.Cn(e,o,n).next((e=>{e.forEach(((e,t)=>{r=r.insert(e,t)}))}))})).next((()=>r))))}Cn(e,t,n){let i,r;return this.Je.getDocumentsMatchingQuery(e,t,n).next((n=>(i=n,this.An.getAllMutationBatchesAffectingQuery(e,t)))).next((t=>(r=t,this.Nn(e,r,i).next((e=>{i=e;for(const e of r)for(const t of e.mutations){const n=t.key;let r=i.get(n);null==r&&(r=Sc.newInvalidDocument(n),i=i.insert(n,r)),Il(t,r,e.localWriteTime),r.isFoundDocument()||(i=i.remove(n))}}))))).next((()=>(i.forEach(((e,n)=>{Zc(t,n)||(i=i.remove(e))})),i)))}Nn(e,t,n){let i=Hl();for(const e of t)for(const t of e.mutations)t instanceof Al&&null===n.get(t.key)&&(i=i.add(t.key));let r=n;return this.Je.getEntries(e,i).next((e=>(e.forEach(((e,t)=>{t.isFoundDocument()&&(r=r.insert(e,t))})),r)))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Iu{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.kn=n,this.xn=i}static $n(e,t){let n=Hl(),i=Hl();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:i=i.add(e.doc.key)}return new Iu(e,t.fromCache,n,i)}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Tu{Fn(e){this.On=e}getDocumentsMatchingQuery(e,t,n,i){return function(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}(t)||n.isEqual(Xa.min())?this.Mn(e,t):this.On.vn(e,i).next((r=>{const s=this.Ln(t,r);return(function(e){return!hc(e.limit)&&"F"===e.limitType}(t)||function(e){return!hc(e.limit)&&"L"===e.limitType}(t))&&this.Bn(t.limitType,s,i,n)?this.Mn(e,t):(Aa()<=_t.DEBUG&&Sa("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Yc(t)),this.On.getDocumentsMatchingQuery(e,t,n).next((e=>(s.forEach((t=>{e=e.insert(t.key,t)})),e))))}))}Ln(e,t){let n=new $l(function(e){return(t,n)=>{let i=!1;for(const r of Wc(e)){const e=el(r,t,n);if(0!==e)return e;i=i||r.field.isKeyField()}return 0}}(e));return t.forEach(((t,i)=>{Zc(e,i)&&(n=n.add(i))})),n}Bn(e,t,n,i){if(n.size!==t.size)return!0;const r="F"===e?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mn(e,t){return Aa()<=_t.DEBUG&&Sa("QueryEngine","Using full collection scan to execute query:",Yc(t)),this.On.getDocumentsMatchingQuery(e,t,Xa.min())}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Eu{constructor(e,t,n,i){this.persistence=e,this.Un=t,this.k=i,this.qn=new xl(Ga),this.Kn=new wu((e=>Rc(e)),Dc),this.jn=Xa.min(),this.An=e.getMutationQueue(n),this.Qn=e.getRemoteDocumentCache(),this.He=e.getTargetCache(),this.Wn=new bu(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=e.getBundleCache(),this.Un.Fn(this.Wn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.qn)))}}async function _u(e,t){const n=Pa(e);let i=n.An,r=n.Wn;const s=await n.persistence.runTransaction("Handle user change","readonly",(e=>{let s;return n.An.getAllMutationBatches(e).next((o=>(s=o,i=n.persistence.getMutationQueue(t),r=new bu(n.Qn,i,n.persistence.getIndexManager()),i.getAllMutationBatches(e)))).next((t=>{const n=[],i=[];let o=Hl();for(const e of s){n.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return r.vn(e,o).next((e=>({Gn:e,removedBatchIds:n,addedBatchIds:i})))}))}));return n.An=i,n.Wn=r,n.Un.Fn(n.Wn),s}function ku(e,t){const n=Pa(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.An.getNextMutationBatchAfterBatchId(e,t))))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
     */class Su{constructor(){this.ts=new $l(Cu.es),this.ns=new $l(Cu.ss)}isEmpty(){return this.ts.isEmpty()}addReference(e,t){const n=new Cu(e,t);this.ts=this.ts.add(n),this.ns=this.ns.add(n)}rs(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.os(new Cu(e,t))}cs(e,t){e.forEach((e=>this.removeReference(e,t)))}us(e){const t=new fc(new tc([])),n=new Cu(t,e),i=new Cu(t,e+1),r=[];return this.ns.forEachInRange([n,i],(e=>{this.os(e),r.push(e.key)})),r}hs(){this.ts.forEach((e=>this.os(e)))}os(e){this.ts=this.ts.delete(e),this.ns=this.ns.delete(e)}ls(e){const t=new fc(new tc([])),n=new Cu(t,e),i=new Cu(t,e+1);let r=Hl();return this.ns.forEachInRange([n,i],(e=>{r=r.add(e.key)})),r}containsKey(e){const t=new Cu(e,0),n=this.ts.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Cu{constructor(e,t){this.key=e,this.fs=t}static es(e,t){return fc.comparator(e.key,t.key)||Ga(e.fs,t.fs)}static ss(e,t){return Ga(e.fs,t.fs)||fc.comparator(e.key,t.key)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Nu{constructor(e,t){this.Jt=e,this.referenceDelegate=t,this.An=[],this.ds=1,this.ws=new $l(Cu.es)}checkEmpty(e){return lu.resolve(0===this.An.length)}addMutationBatch(e,t,n,i){const r=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const s=new hu(r,t,n,i);this.An.push(s);for(const t of i)this.ws=this.ws.add(new Cu(t.key,r)),this.Jt.addToCollectionParentIndex(e,t.key.path.popLast());return lu.resolve(s)}lookupMutationBatch(e,t){return lu.resolve(this._s(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.gs(n),r=i<0?0:i;return lu.resolve(this.An.length>r?this.An[r]:null)}getHighestUnacknowledgedBatchId(){return lu.resolve(0===this.An.length?-1:this.ds-1)}getAllMutationBatches(e){return lu.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Cu(t,0),i=new Cu(t,Number.POSITIVE_INFINITY),r=[];return this.ws.forEachInRange([n,i],(e=>{const t=this._s(e.fs);r.push(t)})),lu.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new $l(Ga);return t.forEach((e=>{const t=new Cu(e,0),i=new Cu(e,Number.POSITIVE_INFINITY);this.ws.forEachInRange([t,i],(e=>{n=n.add(e.fs)}))})),lu.resolve(this.ys(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let r=n;fc.isDocumentKey(r)||(r=r.child(""));const s=new Cu(new fc(r),0);let o=new $l(Ga);return this.ws.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===i&&(o=o.add(e.fs)),!0)}),s),lu.resolve(this.ys(o))}ys(e){const t=[];return e.forEach((e=>{const n=this._s(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Oa(0===this.ps(t.batchId,"removed")),this.An.shift();let n=this.ws;return lu.forEach(t.mutations,(i=>{const r=new Cu(i.key,t.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.ws=n}))}ee(e){}containsKey(e,t){const n=new Cu(t,0),i=this.ws.firstAfterOrEqual(n);return lu.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.An.length,lu.resolve()}ps(e,t){return this.gs(e)}gs(e){return 0===this.An.length?0:e-this.An[0].batchId}_s(e){const t=this.gs(e);return t<0||t>=this.An.length?null:this.An[t]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ru{constructor(e,t){this.Jt=e,this.Ts=t,this.docs=new xl(fc.comparator),this.size=0}addEntry(e,t,n){const i=t.key,r=this.docs.get(i),s=r?r.size:0,o=this.Ts(t);return this.docs=this.docs.insert(i,{document:t.clone(),size:o,readTime:n}),this.size+=o-s,this.Jt.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return lu.resolve(n?n.document.clone():Sc.newInvalidDocument(t))}getEntries(e,t){let n=Vl();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.clone():Sc.newInvalidDocument(e))})),lu.resolve(n)}getDocumentsMatchingQuery(e,t,n){let i=Vl();const r=new fc(t.path.child("")),s=this.docs.getIteratorFrom(r);for(;s.hasNext();){const{key:e,value:{document:r,readTime:o}}=s.getNext();if(!t.path.isPrefixOf(e.path))break;o.compareTo(n)<=0||Zc(t,r)&&(i=i.insert(r.key,r.clone()))}return lu.resolve(i)}Es(e,t){return lu.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Du(this)}getSize(e){return lu.resolve(this.size)}}class Du extends class{constructor(){this.changes=new wu((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}getReadTime(e){const t=this.changes.get(e);return t?t.readTime:Xa.min()}addEntry(e,t){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:t})}removeEntry(e,t=null){this.assertNotApplied(),this.changes.set(e,{document:Sc.newInvalidDocument(e),readTime:t})}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?lu.resolve(n.document):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}{constructor(e){super(),this.De=e}applyChanges(e){const t=[];return this.changes.forEach(((n,i)=>{i.document.isValidDocument()?t.push(this.De.addEntry(e,i.document,this.getReadTime(n))):this.De.removeEntry(n)})),lu.waitFor(t)}getFromCache(e,t){return this.De.getEntry(e,t)}getAllFromCache(e,t){return this.De.getEntries(e,t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ou{constructor(e){this.persistence=e,this.Is=new wu((e=>Rc(e)),Dc),this.lastRemoteSnapshotVersion=Xa.min(),this.highestTargetId=0,this.As=0,this.Rs=new Su,this.targetCount=0,this.Ps=yu.ie()}forEachTarget(e,t){return this.Is.forEach(((e,n)=>t(n))),lu.resolve()}getLastRemoteSnapshotVersion(e){return lu.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return lu.resolve(this.As)}allocateTargetId(e){return this.highestTargetId=this.Ps.next(),lu.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.As&&(this.As=t),lu.resolve()}ce(e){this.Is.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ps=new yu(t),this.highestTargetId=t),e.sequenceNumber>this.As&&(this.As=e.sequenceNumber)}addTargetData(e,t){return this.ce(t),this.targetCount+=1,lu.resolve()}updateTargetData(e,t){return this.ce(t),lu.resolve()}removeTargetData(e,t){return this.Is.delete(t.target),this.Rs.us(t.targetId),this.targetCount-=1,lu.resolve()}removeTargets(e,t,n){let i=0;const r=[];return this.Is.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Is.delete(s),r.push(this.removeMatchingKeysForTargetId(e,o.targetId)),i++)})),lu.waitFor(r).next((()=>i))}getTargetCount(e){return lu.resolve(this.targetCount)}getTargetData(e,t){const n=this.Is.get(t)||null;return lu.resolve(n)}addMatchingKeys(e,t,n){return this.Rs.rs(t,n),lu.resolve()}removeMatchingKeys(e,t,n){this.Rs.cs(t,n);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach((t=>{r.push(i.markPotentiallyOrphaned(e,t))})),lu.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Rs.us(t),lu.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Rs.ls(t);return lu.resolve(n)}containsKey(e,t){return lu.resolve(this.Rs.containsKey(t))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Pu{constructor(e,t){this.bs={},this.Be=new za(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=e(this),this.He=new Ou(this),this.Jt=new gu,this.Je=function(e,t){return new Ru(e,t)}(this.Jt,(e=>this.referenceDelegate.vs(e))),this.k=new fu(t),this.Ye=new Au(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(e){let t=this.bs[e.toKey()];return t||(t=new Nu(this.Jt,this.referenceDelegate),this.bs[e.toKey()]=t),t}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(e,t,n){Sa("MemoryPersistence","Starting transaction:",e);const i=new xu(this.Be.next());return this.referenceDelegate.Vs(),n(i).next((e=>this.referenceDelegate.Ss(i).next((()=>e)))).toPromise().then((e=>(i.raiseOnCommittedEvent(),e)))}Ds(e,t){return lu.or(Object.values(this.bs).map((n=>()=>n.containsKey(e,t))))}}class xu extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}{constructor(e){super(),this.currentSequenceNumber=e}}class Lu{constructor(e){this.persistence=e,this.Cs=new Su,this.Ns=null}static ks(e){return new Lu(e)}get xs(){if(this.Ns)return this.Ns;throw Da()}addReference(e,t,n){return this.Cs.addReference(n,t),this.xs.delete(n.toString()),lu.resolve()}removeReference(e,t,n){return this.Cs.removeReference(n,t),this.xs.add(n.toString()),lu.resolve()}markPotentiallyOrphaned(e,t){return this.xs.add(t.toString()),lu.resolve()}removeTarget(e,t){this.Cs.us(t.targetId).forEach((e=>this.xs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.xs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Vs(){this.Ns=new Set}Ss(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return lu.forEach(this.xs,(n=>{const i=fc.fromPath(n);return this.$s(e,i).next((e=>{e||t.removeEntry(i)}))})).next((()=>(this.Ns=null,t.apply(e))))}updateLimboDocument(e,t){return this.$s(e,t).next((e=>{e?this.xs.delete(t.toString()):this.xs.add(t.toString())}))}vs(e){return 0}$s(e,t){return lu.or([()=>lu.resolve(this.Cs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ds(e,t)])}}class Mu{constructor(){this.activeTargetIds=Kl}Ms(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ls(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $u{constructor(){this.pi=new Mu,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.pi.Ms(e),this.Ti[e]||"not-current"}updateQueryState(e,t,n){this.Ti[e]=t}removeLocalQueryTarget(e){this.pi.Ls(e)}isLocalQueryTarget(e){return this.pi.activeTargetIds.has(e)}clearQueryState(e){delete this.Ti[e]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(e){return this.pi.activeTargetIds.has(e)}start(){return this.pi=new Mu,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
     */class Bu extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.Mi=t+"://"+e.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(e,t,n,i,r){const s=this.Ui(e,t);Sa("RestConnection","Sending: ",s,n);const o={};return this.qi(o,i,r),this.Ki(e,s,o,n).then((e=>(Sa("RestConnection","Received: ",e),e)),(t=>{throw Na("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}ji(e,t,n,i,r){return this.Bi(e,t,n,i,r)}qi(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+_a,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}Ui(e,t){const n=Vu[e];return`${this.Mi}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Ki(e,t,n,i){return new Promise(((r,s)=>{const o=new Ia;o.listenOnce(pa.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case fa.NO_ERROR:const t=o.getResponseJson();Sa("Connection","XHR received:",JSON.stringify(t)),r(t);break;case fa.TIMEOUT:Sa("Connection",'RPC "'+e+'" timed out'),s(new La(xa.DEADLINE_EXCEEDED,"Request time out"));break;case fa.HTTP_ERROR:const n=o.getStatus();if(Sa("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(xa).indexOf(t)>=0?t:xa.UNKNOWN}(e.status);s(new La(t,e.message))}else s(new La(xa.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new La(xa.UNAVAILABLE,"Connection failed."));break;default:Da()}}finally{Sa("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(i);o.send(t,"POST",a,n,15)}))}Qi(e,t,n){const i=[this.Mi,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=new ca,s=ts(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new wa({})),this.qi(o.initMessageHeaders,t,n),rt()||ot()||it().indexOf("Electron/")>=0||at()||it().indexOf("MSAppHost/")>=0||st()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=i.join("");Sa("Connection","Creating WebChannel: "+a,o);const c=r.createWebChannel(a,o);let l=!1,u=!1;const h=new ju({Vi:e=>{u?Sa("Connection","Not sending because WebChannel is closed:",e):(l||(Sa("Connection","Opening WebChannel transport."),c.open(),l=!0),Sa("Connection","WebChannel sending:",e),c.send(e))},Si:()=>c.close()}),d=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return d(c,ba.EventType.OPEN,(()=>{u||Sa("Connection","WebChannel transport opened.")})),d(c,ba.EventType.CLOSE,(()=>{u||(u=!0,Sa("Connection","WebChannel transport closed"),h.Fi())})),d(c,ba.EventType.ERROR,(e=>{u||(u=!0,Na("Connection","WebChannel transport errored:",e),h.Fi(new La(xa.UNAVAILABLE,"The operation could not be completed")))})),d(c,ba.EventType.MESSAGE,(e=>{var t;if(!u){const n=e.data[0];Oa(!!n);const i=n,r=i.error||(null===(t=i[0])||void 0===t?void 0:t.error);if(r){Sa("Connection","WebChannel received error:",r);const e=r.status;let t=function(e){const t=Ol[e];if(void 0!==t)return function(e){if(void 0===e)return Ca("GRPC error has no .code"),xa.UNKNOWN;switch(e){case Ol.OK:return xa.OK;case Ol.CANCELLED:return xa.CANCELLED;case Ol.UNKNOWN:return xa.UNKNOWN;case Ol.DEADLINE_EXCEEDED:return xa.DEADLINE_EXCEEDED;case Ol.RESOURCE_EXHAUSTED:return xa.RESOURCE_EXHAUSTED;case Ol.INTERNAL:return xa.INTERNAL;case Ol.UNAVAILABLE:return xa.UNAVAILABLE;case Ol.UNAUTHENTICATED:return xa.UNAUTHENTICATED;case Ol.INVALID_ARGUMENT:return xa.INVALID_ARGUMENT;case Ol.NOT_FOUND:return xa.NOT_FOUND;case Ol.ALREADY_EXISTS:return xa.ALREADY_EXISTS;case Ol.PERMISSION_DENIED:return xa.PERMISSION_DENIED;case Ol.FAILED_PRECONDITION:return xa.FAILED_PRECONDITION;case Ol.ABORTED:return xa.ABORTED;case Ol.OUT_OF_RANGE:return xa.OUT_OF_RANGE;case Ol.UNIMPLEMENTED:return xa.UNIMPLEMENTED;case Ol.DATA_LOSS:return xa.DATA_LOSS;default:return Da()}}(t)}(e),n=r.message;void 0===t&&(t=xa.INTERNAL,n="Unknown error status: "+e+" with message "+r.message),u=!0,h.Fi(new La(t,n)),c.close()}else Sa("Connection","WebChannel received:",n),h.Oi(n)}})),d(s,ma.STAT_EVENT,(e=>{e.stat===ya?Sa("Connection","Detected buffering proxy"):e.stat===va&&Sa("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.$i()}),0),h}}function qu(){return"undefined"!=typeof document?document:null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function zu(e){return new Gl(e,!0)}class Hu{constructor(e,t,n=1e3,i=1.5,r=6e4){this.Oe=e,this.timerId=t,this.Wi=n,this.Gi=i,this.zi=r,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(e){this.cancel();const t=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),i=Math.max(0,t-n);i>0&&Sa("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Hi} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Ji=this.Oe.enqueueAfterDelay(this.timerId,i,(()=>(this.Yi=Date.now(),e()))),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ku extends class{constructor(e,t,n,i,r,s,o,a){this.Oe=e,this.nr=n,this.sr=i,this.ir=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.rr=0,this.ar=null,this.cr=null,this.stream=null,this.ur=new Hu(e,t)}hr(){return 1===this.state||5===this.state||this.lr()}lr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&null===this.ar&&(this.ar=this.Oe.enqueueAfterDelay(this.nr,6e4,(()=>this.mr())))}gr(e){this.yr(),this.stream.send(e)}async mr(){if(this.lr())return this.close(0)}yr(){this.ar&&(this.ar.cancel(),this.ar=null)}pr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,t){this.yr(),this.pr(),this.ur.cancel(),this.rr++,4!==e?this.ur.reset():t&&t.code===xa.RESOURCE_EXHAUSTED?(Ca(t.toString()),Ca("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):t&&t.code===xa.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Tr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ni(t)}Tr(){}auth(){this.state=1;const e=this.Er(this.rr),t=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.rr===t&&this.Ir(e,n)}),(t=>{e((()=>{const e=new La(xa.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Ar(e)}))}))}Ir(e,t){const n=this.Er(this.rr);this.stream=this.Rr(e,t),this.stream.Di((()=>{n((()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.sr,1e4,(()=>(this.lr()&&(this.state=3),Promise.resolve()))),this.listener.Di())))})),this.stream.Ni((e=>{n((()=>this.Ar(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}dr(){this.state=5,this.ur.Zi((async()=>{this.state=0,this.start()}))}Ar(e){return Sa("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Er(e){return t=>{this.Oe.enqueueAndForget((()=>this.rr===e?t():(Sa("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}{constructor(e,t,n,i,r,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,s),this.k=r,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(e,t){return this.ir.Qi("Write",e,t)}onMessage(e){if(Oa(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Vr){this.ur.reset();const t=function(e,t){return e&&e.length>0?(Oa(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Ql(e.updateTime):Ql(t);return n.isEqual(Xa.min())&&(n=Ql(t)),new ml(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=Ql(e.commitTime);return this.listener.Cr(n,t)}return Oa(!e.writeResults||0===e.writeResults.length),this.Vr=!0,this.listener.Nr()}kr(){const e={};e.database=function(e){return new tc(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}(this.k),this.gr(e)}Dr(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>function(e,t){let n;if(t instanceof kl)n={update:tu(e,t.key,t.value)};else if(t instanceof Rl)n={delete:Zl(e,t.key)};else if(t instanceof Al)n={update:tu(e,t.key,t.data),updateMask:cu(t.fieldMask)};else{if(!(t instanceof Dl))return Da();n={verify:Zl(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof cl)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ll)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof hl)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof fl)return{fieldPath:t.field.canonicalString(),increment:n.N};throw Da()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Xl(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Da()}(e,t.precondition)),n}(this.k,e)))};this.gr(t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Gu extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.ir=n,this.k=i,this.$r=!1}Fr(){if(this.$r)throw new La(xa.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(e,t,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.ir.Bi(e,t,n,i,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===xa.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new La(xa.UNKNOWN,e.toString())}))}ji(e,t,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.ir.ji(e,t,n,i,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===xa.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new La(xa.UNKNOWN,e.toString())}))}terminate(){this.$r=!0}}class Wu{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Or=0,this.Mr=null,this.Lr=!0}Br(){0===this.Or&&(this.Ur("Unknown"),this.Mr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Mr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve()))))}Kr(e){"Online"===this.state?this.Ur("Unknown"):(this.Or++,this.Or>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Ur("Offline")))}set(e){this.jr(),this.Or=0,"Online"===e&&(this.Lr=!1),this.Ur(e)}Ur(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}qr(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(Ca(t),this.Lr=!1):Sa("OnlineStateTracker",t)}jr(){null!==this.Mr&&(this.Mr.cancel(),this.Mr=null)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ju{constructor(e,t,n,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=r,this.Hr.Ei((e=>{n.enqueueAndForget((async()=>{Yu(this)&&(Sa("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Pa(e);t.Gr.add(4),await Qu(t),t.Jr.set("Unknown"),t.Gr.delete(4),await Xu(t)}(this))}))})),this.Jr=new Wu(n,i)}}async function Xu(e){if(Yu(e))for(const t of e.zr)await t(!0)}async function Qu(e){for(const t of e.zr)await t(!1)}function Yu(e){return 0===Pa(e).Gr.size}async function Zu(e,t,n){if(!uu(t))throw t;e.Gr.add(1),await Qu(e),e.Jr.set("Offline"),n||(n=()=>function(e){const t=Pa(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.He.getLastRemoteSnapshotVersion(e)))}(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Sa("RemoteStore","Retrying IndexedDB access"),await n(),e.Gr.delete(1),await Xu(e)}))}function eh(e,t){return t().catch((n=>Zu(e,n,t)))}async function th(e){const t=Pa(e),n=uh(t);let i=t.Qr.length>0?t.Qr[t.Qr.length-1].batchId:-1;for(;nh(t);)try{const e=await ku(t.localStore,i);if(null===e){0===t.Qr.length&&n._r();break}i=e.batchId,ih(t,e)}catch(e){await Zu(t,e)}rh(t)&&sh(t)}function nh(e){return Yu(e)&&e.Qr.length<10}function ih(e,t){e.Qr.push(t);const n=uh(e);n.lr()&&n.Sr&&n.Dr(t.mutations)}function rh(e){return Yu(e)&&!uh(e).hr()&&e.Qr.length>0}function sh(e){uh(e).start()}async function oh(e){uh(e).kr()}async function ah(e){const t=uh(e);for(const n of e.Qr)t.Dr(n.mutations)}async function ch(e,t,n){const i=e.Qr.shift(),r=du.from(i,t,n);await eh(e,(()=>e.remoteSyncer.applySuccessfulWrite(r))),await th(e)}async function lh(e,t){t&&uh(e).Sr&&await async function(e,t){if(function(e){switch(e){default:return Da();case xa.CANCELLED:case xa.UNKNOWN:case xa.DEADLINE_EXCEEDED:case xa.RESOURCE_EXHAUSTED:case xa.INTERNAL:case xa.UNAVAILABLE:case xa.UNAUTHENTICATED:return!1;case xa.INVALID_ARGUMENT:case xa.NOT_FOUND:case xa.ALREADY_EXISTS:case xa.PERMISSION_DENIED:case xa.FAILED_PRECONDITION:case xa.ABORTED:case xa.OUT_OF_RANGE:case xa.UNIMPLEMENTED:case xa.DATA_LOSS:return!0}}(n=t.code)&&n!==xa.ABORTED){const n=e.Qr.shift();uh(e).wr(),await eh(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await th(e)}var n}(e,t),rh(e)&&sh(e)}function uh(e){return e.Zr||(e.Zr=function(e,t,n){const i=Pa(e);return i.Fr(),new Ku(t,i.ir,i.authCredentials,i.appCheckCredentials,i.k,n)}(e.datastore,e.asyncQueue,{Di:oh.bind(null,e),Ni:lh.bind(null,e),Nr:ah.bind(null,e),Cr:ch.bind(null,e)}),e.zr.push((async t=>{t?(e.Zr.wr(),await th(e)):(await e.Zr.stop(),e.Qr.length>0&&(Sa("RemoteStore",`Stopping write stream with ${e.Qr.length} pending writes`),e.Qr=[]))}))),e.Zr
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class hh{constructor(e,t,n,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new Ma,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,i,r){const s=Date.now()+n,o=new hh(e,t,s,i,r);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new La(xa.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dh(e,t){if(Ca("AsyncQueue",`${t}: ${e}`),uu(e))return new La(xa.UNAVAILABLE,`${t}: ${e}`);throw e}class fh{constructor(){this.queries=new wu((e=>Qc(e)),Xc),this.onlineState="Unknown",this.io=new Set}}class ph{constructor(e,t,n,i,r,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.Fo={},this.Oo=new wu((e=>Qc(e)),Xc),this.Mo=new Map,this.Lo=new Set,this.Bo=new xl(fc.comparator),this.Uo=new Map,this.qo=new Su,this.Ko={},this.jo=new Map,this.Qo=yu.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return!0===this.Wo}}async function gh(e,t,n){const i=function(e){const t=Pa(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=yh.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=vh.bind(null,t),t}(e);try{const e=await function(e,t){const n=Pa(e),i=Ja.now(),r=t.reduce(((e,t)=>e.add(t.key)),Hl());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>n.Wn.vn(e,r).next((r=>{s=r;const o=[];for(const e of t){const t=Tl(e,s.get(e.key));null!=t&&o.push(new Al(e.key,t,Ac(t.value.mapValue),yl.exists(!0)))}return n.An.addMutationBatch(e,i,o,t)})))).then((e=>(e.applyToLocalDocumentSet(s),{batchId:e.batchId,changes:s})))}(i.localStore,t);i.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let i=e.Ko[e.currentUser.toKey()];i||(i=new xl(Ga)),i=i.insert(t,n),e.Ko[e.currentUser.toKey()]=i}(i,e.batchId,n),await Ih(i,e.changes),await th(i.remoteStore)}catch(e){const t=dh(e,"Failed to persist write");n.reject(t)}}function mh(e,t,n){const i=Pa(e);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const e=[];i.Oo.forEach(((n,i)=>{const r=i.view.ro(t);r.snapshot&&e.push(r.snapshot)})),function(e,t){const n=Pa(e);n.onlineState=t;let i=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.ro(t)&&(i=!0)})),i&&function(e){e.io.forEach((e=>{e.next()}))}(n)}(i.eventManager,t),e.length&&i.Fo.Pr(e),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function yh(e,t){const n=Pa(e),i=t.batch.batchId;try{const e=await function(e,t){const n=Pa(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const i=t.batch.keys(),r=n.Qn.newChangeBuffer({trackRemovals:!0});return function(e,t,n,i){const r=n.batch,s=r.keys();let o=lu.resolve();return s.forEach((e=>{o=o.next((()=>i.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);Oa(null!==s),t.version.compareTo(s)<0&&(r.applyToRemoteDocument(t,n),t.isValidDocument()&&i.addEntry(t,n.commitVersion))}))})),o.next((()=>e.An.removeMutationBatch(t,r)))}(n,e,t,r).next((()=>r.apply(e))).next((()=>n.An.performConsistencyCheck(e))).next((()=>n.Wn.vn(e,i)))}))}(n.localStore,t);bh(n,i,null),wh(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Ih(n,e)}catch(e){await vu(e)}}async function vh(e,t,n){const i=Pa(e);try{const e=await function(e,t){const n=Pa(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let i;return n.An.lookupMutationBatch(e,t).next((t=>(Oa(null!==t),i=t.keys(),n.An.removeMutationBatch(e,t)))).next((()=>n.An.performConsistencyCheck(e))).next((()=>n.Wn.vn(e,i)))}))}(i.localStore,t);bh(i,t,n),wh(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await Ih(i,e)}catch(n){await vu(n)}}function wh(e,t){(e.jo.get(t)||[]).forEach((e=>{e.resolve()})),e.jo.delete(t)}function bh(e,t,n){const i=Pa(e);let r=i.Ko[i.currentUser.toKey()];if(r){const e=r.get(t);e&&(n?e.reject(n):e.resolve(),r=r.remove(t)),i.Ko[i.currentUser.toKey()]=r}}async function Ih(e,t,n){const i=Pa(e),r=[],s=[],o=[];i.Oo.isEmpty()||(i.Oo.forEach(((e,a)=>{o.push(i.Go(a,t,n).then((e=>{if(e){i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),r.push(e);const t=Iu.$n(a.targetId,e);s.push(t)}})))})),await Promise.all(o),i.Fo.Pr(r),await async function(e,t){const n=Pa(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>lu.forEach(t,(t=>lu.forEach(t.kn,(i=>n.persistence.referenceDelegate.addReference(e,t.targetId,i))).next((()=>lu.forEach(t.xn,(i=>n.persistence.referenceDelegate.removeReference(e,t.targetId,i)))))))))}catch(e){if(!uu(e))throw e;Sa("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.qn.get(t),i=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(i);n.qn=n.qn.insert(t,r)}}}(i.localStore,s))}async function Th(e,t){const n=Pa(e);if(!n.currentUser.isEqual(t)){Sa("SyncEngine","User change. New user:",t.toKey());const e=await _u(n.localStore,t);n.currentUser=t,function(e,t){e.jo.forEach((e=>{e.forEach((e=>{e.reject(new La(xa.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),e.jo.clear()}(n),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Ih(n,e.Gn)}}class Eh{constructor(){this.synchronizeTabs=!1}async initialize(e){this.k=zu(e.databaseInfo.databaseId),this.sharedClientState=this.Jo(e),this.persistence=this.Yo(e),await this.persistence.start(),this.gcScheduler=this.Xo(e),this.localStore=this.Zo(e)}Xo(e){return null}Zo(e){return function(e,t,n,i){return new Eu(e,t,n,i)}(this.persistence,new Tu,e.initialUser,this.k)}Yo(e){return new Pu(Lu.ks,this.k)}Jo(e){return new $u}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class _h{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>mh(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Th.bind(null,this.syncEngine),await async function(e,t){const n=Pa(e);t?(n.Gr.delete(2),await Xu(n)):t||(n.Gr.add(2),await Qu(n),n.Jr.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new fh}createDatastore(e){const t=zu(e.databaseInfo.databaseId),n=(i=e.databaseInfo,new Bu(i));var i;return function(e,t,n,i){return new Gu(e,t,n,i)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,i=e.asyncQueue,r=e=>mh(this.syncEngine,e,0),s=Fu.bt()?new Fu:new Uu,new Ju(t,n,i,r,s);var t,n,i,r,s}createSyncEngine(e,t){return function(e,t,n,i,r,s,o){const a=new ph(e,t,n,i,r,s);return o&&(a.Wo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Pa(e);Sa("RemoteStore","RemoteStore shutting down."),t.Gr.add(5),await Qu(t),t.Hr.shutdown(),t.Jr.set("Unknown")}(this.remoteStore)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class kh{constructor(e,t,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=Ea.UNAUTHENTICATED,this.clientId=Ka.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Sa("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(()=>Promise.resolve()))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new La(xa.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ma;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=dh(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Ah(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){return e.offlineComponents||(Sa("FirestoreClient","Using default OfflineComponentProvider"),await async function(e,t){e.asyncQueue.verifyOperationInProgress(),Sa("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener((async e=>{i.isEqual(e)||(await _u(t.localStore,e),i=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}(e,new Eh)),e.offlineComponents}(e);Sa("FirestoreClient","Initializing OnlineComponentProvider");const i=await e.getConfiguration();await t.initialize(n,i),e.setCredentialChangeListener((e=>async function(e,t){const n=Pa(e);n.asyncQueue.verifyOperationInProgress(),Sa("RemoteStore","RemoteStore received new credentials");const i=Yu(n);n.Gr.add(3),await Qu(n),i&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Gr.delete(3),await Xu(n)}(t.remoteStore,e))),e.onlineComponents=t}function Sh(e){return async function(e){return e.onlineComponents||(Sa("FirestoreClient","Using default OnlineComponentProvider"),await Ah(e,new _h)),e.onlineComponents}(e).then((e=>e.syncEngine))}class Ch{constructor(e,t,n,i,r,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Nh{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Nh&&e.projectId===this.projectId&&e.database===this.database}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
     */function Dh(e,t,n){if(!n)throw new La(xa.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Oh(e){if(!fc.isDocumentKey(e))throw new La(xa.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ph(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Da()}function xh(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new La(xa.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ph(e);throw new La(xa.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Lh{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new La(xa.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new La(xa.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,i){if(!0===t&&!0===i)throw new La(xa.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Mh{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lh({}),this._settingsFrozen=!1,e instanceof Nh?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new La(xa.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Nh(e.options.projectId)}(e))}get app(){if(!this._app)throw new La(xa.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new La(xa.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lh(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Ua;switch(e.type){case"gapi":const t=e.client;return Oa(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new ja(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new La(xa.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Rh.get(e);t&&(Sa("ComponentProvider","Removing Datastore"),Rh.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class $h{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fh(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $h(this.firestore,e,this._key)}}class Uh{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Uh(this.firestore,e,this._query)}}class Fh extends Uh{constructor(e,t,n){super(e,t,function(e){return new Gc(e)}(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $h(this.firestore,null,new fc(e))}withConverter(e){return new Fh(this.firestore,e,this._path)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Vh{constructor(){this.ma=Promise.resolve(),this.ga=[],this.ya=!1,this.pa=[],this.Ta=null,this.Ea=!1,this.Ia=!1,this.Aa=[],this.ur=new Hu(this,"async_queue_retry"),this.Ra=()=>{const e=qu();e&&Sa("AsyncQueue","Visibility state changed to "+e.visibilityState),this.ur.er()};const e=qu();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Ra)}get isShuttingDown(){return this.ya}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pa(),this.ba(e)}enterRestrictedMode(e){if(!this.ya){this.ya=!0,this.Ia=e||!1;const t=qu();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Ra)}}enqueue(e){if(this.Pa(),this.ya)return new Promise((()=>{}));const t=new Ma;return this.ba((()=>this.ya&&this.Ia?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.ga.push(e),this.va())))}async va(){if(0!==this.ga.length){try{await this.ga[0](),this.ga.shift(),this.ur.reset()}catch(e){if(!uu(e))throw e;Sa("AsyncQueue","Operation failed with retryable error: "+e)}this.ga.length>0&&this.ur.Zi((()=>this.va()))}}ba(e){const t=this.ma.then((()=>(this.Ea=!0,e().catch((e=>{this.Ta=e,this.Ea=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e);throw Ca("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Ea=!1,e))))));return this.ma=t,t}enqueueAfterDelay(e,t,n){this.Pa(),this.Aa.indexOf(e)>-1&&(t=0);const i=hh.createAndSchedule(this,e,t,n,(e=>this.Va(e)));return this.pa.push(i),i}Pa(){this.Ta&&Da()}verifyOperationInProgress(){}async Sa(){let e;do{e=this.ma,await e}while(e!==this.ma)}Da(e){for(const t of this.pa)if(t.timerId===e)return!0;return!1}Ca(e){return this.Sa().then((()=>{this.pa.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.pa)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Sa()}))}Na(e){this.Aa.push(e)}Va(e){const t=this.pa.indexOf(e);this.pa.splice(t,1)}}class jh extends Mh{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new Vh,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Bh(this),this._firestoreClient.terminate()}}function Bh(e){var t;const n=e._freezeSettings(),i=function(e,t,n,i){return new Ch(e,t,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new kh(e._authCredentials,e._appCheckCredentials,e._queue,i)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
     */class qh{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new La(xa.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ic(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class zh{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zh(sc.fromBase64String(e))}catch(e){throw new La(xa.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new zh(sc.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
     */class Kh{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new La(xa.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new La(xa.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ga(this._lat,e._lat)||Ga(this._long,e._long)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Gh=/^__.*__$/;class Wh{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Al(e,this.data,this.fieldMask,t,this.fieldTransforms):new kl(e,this.data,t,this.fieldTransforms)}}function Jh(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Da()}}class Xh{constructor(e,t,n,i,r,s){this.settings=e,this.databaseId=t,this.k=n,this.ignoreUndefinedProperties=i,void 0===r&&this.ka(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get xa(){return this.settings.xa}$a(e){return new Xh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Fa(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.$a({path:n,Oa:!1});return i.Ma(e),i}La(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.$a({path:n,Oa:!1});return i.ka(),i}Ba(e){return this.$a({path:void 0,Oa:!0})}Ua(e){return od(e,this.settings.methodName,this.settings.qa||!1,this.path,this.settings.Ka)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}ka(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ma(this.path.get(e))}Ma(e){if(0===e.length)throw this.Ua("Document fields must not be empty");if(Jh(this.xa)&&Gh.test(e))throw this.Ua('Document fields cannot begin and end with "__"')}}class Qh{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.k=n||zu(e)}ja(e,t,n,i=!1){return new Xh({xa:e,methodName:t,Ka:n,path:ic.emptyPath(),Oa:!1,qa:i},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function Yh(e){const t=e._freezeSettings(),n=zu(e._databaseId);return new Qh(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Zh(e,t,n,i,r,s={}){const o=e.ja(s.merge||s.mergeFields?2:0,t,n,r);id("Data must be an object, but it was:",o,i);const a=td(i,o);let c,l;if(s.merge)c=new rc(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const i of s.mergeFields){const r=rd(t,i,n);if(!o.contains(r))throw new La(xa.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);ad(e,r)||e.push(r)}c=new rc(e),l=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,l=o.fieldTransforms;return new Wh(new kc(a),c,l)}function ed(e,t){if(nd(e=wt(e)))return id("Unsupported field value:",t,e),td(e,t);if(e instanceof Hh)return function(e,t){if(!Jh(t.xa))throw t.Ua(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Ua(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Oa&&4!==t.xa)throw t.Ua("Nested arrays are not supported");return function(e,t){const n=[];let i=0;for(const r of e){let e=ed(r,t.Ba(i));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),i++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=wt(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return il(t.k,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Ja.fromDate(e);return{timestampValue:Wl(t.k,n)}}if(e instanceof Ja){const n=new Ja(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Wl(t.k,n)}}if(e instanceof Kh)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof zh)return{bytesValue:Jl(t.k,e._byteString)};if(e instanceof $h){const n=t.databaseId,i=e.firestore._databaseId;if(!i.isEqual(n))throw t.Ua(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Yl(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Ua(`Unsupported field value: ${Ph(e)}`)}(e,t)}function td(e,t){const n={};return Za(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ya(e,((e,i)=>{const r=ed(i,t.Fa(e));null!=r&&(n[e]=r)})),{mapValue:{fields:n}}}function nd(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Ja||e instanceof Kh||e instanceof zh||e instanceof $h||e instanceof Hh)}function id(e,t,n){if(!nd(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const i=Ph(n);throw"an object"===i?t.Ua(e+" a custom object"):t.Ua(e+" "+i)}}function rd(e,t,n){if((t=wt(t))instanceof qh)return t._internalPath;if("string"==typeof t)return function(e,t,n){if(t.search(sd)>=0)throw od(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new qh(...t.split("."))._internalPath}catch(i){throw od(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}(e,t);throw od("Field path arguments must be of type string or FieldPath.",e,!1,void 0,n)}const sd=new RegExp("[~\\*/\\[\\]]");function od(e,t,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new La(xa.INVALID_ARGUMENT,a+e+c)}function ad(e,t){return e.some((e=>e.isEqual(t)))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function cd(e,t,n){e=xh(e,$h);const i=xh(e.firestore,jh),r=function(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}(e.converter,t,n);return function(e,t){return function(e,t){const n=new Ma;return e.asyncQueue.enqueueAndForget((async()=>gh(await Sh(e),t,n))),n.promise}(function(e){return e._firestoreClient||Bh(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}(e),t)}(i,[Zh(Yh(i),"setDoc",e._key,r,null!==e.converter,n).toMutation(e._key,yl.none())])}
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
function ld(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}function ud(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}!function(e,t=!0){_a="9.6.1",Ft(new bt("firestore",((e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=new jh(i,new Fa(e.getProvider("auth-internal")),new qa(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),r._setSettings(n),r}),"PUBLIC")),Ht(Ta,"3.4.1",e),Ht(Ta,"3.4.1","esm2017")}();const hd=ud,dd=new lt("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),fd=new Nt("@firebase/auth");function pd(e,...t){fd.logLevel<=_t.ERROR&&fd.error(`Auth (9.6.1): ${e}`,...t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function gd(e,...t){throw yd(e,...t)}function md(e,...t){return yd(e,...t)}function yd(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return dd.create(e,...t)}function vd(e,t,...n){if(!e)throw yd(t,...n)}function wd(e){const t="INTERNAL ASSERTION FAILED: "+e;throw pd(t),new Error(t)}function bd(e,t){e||wd(t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
class Ad{constructor(e,t){this.shortDelay=e,this.longDelay=t,bd(t>e,"Short delay should be less than long delay!"),this.isMobile=rt()||ot()}get(){return kd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
     */function Dd(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Od(e,t,n,i,r={}){return Pd(e,r,(async()=>{let r={},s={};i&&("GET"===t?s=i:r={body:JSON.stringify(i)});const o=ft(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Cd.fetch()(Ld(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))}))}async function Pd(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},Nd),t);try{const t=new Md(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw $d(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw $d(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw $d(e,"email-already-in-use",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw function(e,t,n){const i=Object.assign(Object.assign({},hd()),{[t]:n});return new lt("auth","Firebase",i).create(t,{appName:e.name})}(e,a,o);gd(e,a)}}catch(t){if(t instanceof ct)throw t;gd(e,"network-request-failed")}}async function xd(e,t,n,i,r={}){const s=await Od(e,t,n,i,r);return"mfaPendingCredential"in s&&gd(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Ld(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?Sd(e.config,r):`${e.config.apiScheme}://${r}`}class Md{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(md(this.auth,"timeout"))),Rd.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function $d(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=md(e,t,i);return r.customData._tokenResponse=n,r}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
function Ud(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}function Fd(e){return 1e3*Number(e)}function Vd(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return pd("JWT malformed, contained fewer than 3 sections"),null;try{const e=function(e){try{return tt.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null}(n);return e?JSON.parse(e):(pd("Failed to decode base64 JWT payload"),null)}catch(e){return pd("Caught error parsing JWT payload as JSON",e),null}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
     */async function zd(e){var t;const n=e.auth,i=await e.getIdToken(),r=await jd(e,async function(e,t){return Od(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));vd(null==r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=ld(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const u=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new qd(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Hd{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){vd(e.idToken,"internal-error"),vd(void 0!==e.idToken,"internal-error"),vd(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Vd(e);return vd(t,"internal-error"),vd(void 0!==t.exp,"internal-error"),vd(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return vd(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function(e,t){const n=await Pd(e,{},(async()=>{const n=ft({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,s=Ld(e,i,"/v1/token",`key=${r}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Cd.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new Hd;return n&&(vd("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(vd("string"==typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(vd("number"==typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hd,this.toJSON())}_performRefresh(){return wd("not implemented")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Kd(e,t){vd("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Gd{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=ld(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Bd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.metadata=new qd(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await jd(this,this.stsTokenManager.getToken(this.auth,e));return vd(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=wt(e),i=await n.getIdToken(t),r=Vd(i);vd(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s="object"==typeof r.firebase?r.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Ud(Fd(r.auth_time)),issuedAtTime:Ud(Fd(r.iat)),expirationTime:Ud(Fd(r.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=wt(e);await zd(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(vd(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Gd(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){vd(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await zd(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await jd(this,async function(e,t){return Od(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:I,stsTokenManager:T}=t;vd(v&&T,e,"internal-error");const E=Hd.fromJSON(this.name,T);vd("string"==typeof v,e,"internal-error"),Kd(u,e.name),Kd(h,e.name),vd("boolean"==typeof w,e,"internal-error"),vd("boolean"==typeof b,e,"internal-error"),Kd(d,e.name),Kd(f,e.name),Kd(p,e.name),Kd(g,e.name),Kd(m,e.name),Kd(y,e.name);const _=new Gd({uid:v,auth:e,email:h,emailVerified:w,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:m,lastLoginAt:y});return I&&Array.isArray(I)&&(_.providerData=I.map((e=>Object.assign({},e)))),g&&(_._redirectEventId=g),_}static async _fromIdTokenResponse(e,t,n=!1){const i=new Hd;i.updateFromServerResponse(t);const r=new Gd({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await zd(r),r}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
     */function Xd(e,t,n){return`firebase:${e}:${t}:${n}`}class Qd{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=Xd(this.userKey,i.apiKey,r),this.fullPersistenceKey=Xd("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Gd._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Qd(Td(Jd),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||Td(Jd);const s=Xd(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const i=Gd._fromJSON(e,t);n!==r&&(o=i),r=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new Qd(r,e,n)):new Qd(r,e,n)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Yd(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(nf(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Zd(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(sf(t))return"Blackberry";if(of(t))return"Webos";if(ef(t))return"Safari";if((t.includes("chrome/")||tf(t))&&!t.includes("edge/"))return"Chrome";if(rf(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Zd(e=it()){return/firefox\//i.test(e)}function ef(e=it()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function tf(e=it()){return/crios\//i.test(e)}function nf(e=it()){return/iemobile/i.test(e)}function rf(e=it()){return/android/i.test(e)}function sf(e=it()){return/blackberry/i.test(e)}function of(e=it()){return/webos/i.test(e)}function af(e=it()){return/iphone|ipad|ipod/i.test(e)}function cf(e=it()){return af(e)||rf(e)||of(e)||sf(e)||/windows phone/i.test(e)||nf(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function lf(e,t=[]){let n;switch(e){case"Browser":n=Yd(it());break;case"Worker":n=`${Yd(it())}-${e}`;break;default:n=e}return`${n}/JsCore/9.6.1/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class uf{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new df(this),this.idTokenSubscription=new df(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dd,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Td(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Qd.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);i&&i!==r||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(vd(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await zd(e)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?wt(e):null;return t&&vd(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&vd(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Td(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new lt("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Td(e)||this._popupRedirectResolver;vd(t,this,"argument-error"),this.redirectPersistenceManager=await Qd.create(this,[Td(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return vd(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return vd(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function hf(e){return wt(e)}class df{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new mt(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return vd(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
class pf extends ff{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new pf(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new pf(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
return async function(e,t){return xd(e,"POST","/v1/accounts:signInWithPassword",Dd(e,t))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return xd(e,"POST","/v1/accounts:signInWithEmailLink",Dd(e,t))}(e,{email:this._email,oobCode:this._password});default:gd(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return async function(e,t){return Od(e,"POST","/v1/accounts:update",t)}(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return xd(e,"POST","/v1/accounts:signInWithEmailLink",Dd(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:gd(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function gf(e,t){return xd(e,"POST","/v1/accounts:signInWithIdp",Dd(e,t))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class mf extends ff{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new mf(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):gd("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=ld(t,["providerId","signInMethod"]);if(!n||!i)return null;const s=new mf(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){return gf(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,gf(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,gf(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ft(t)}return e}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class yf{constructor(e){var t,n,i,r,s,o;const a=pt(gt(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);vd(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=pt(gt(e)).link,n=t?pt(gt(t)).deep_link_id:null,i=pt(gt(e)).deep_link_id;return(i?pt(gt(i)).link:null)||i||n||t||e}(e);try{return new yf(t)}catch(e){return null}}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
class kf{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const r=await Gd._fromIdTokenResponse(e,n,i),s=Af(n);return new kf({user:r,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Af(n);return new kf({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Af(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Sf extends ct{constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Sf.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Sf(e,t,n,i)}}function Cf(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Sf._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function Nf(e,t,n=!1){const i="signIn",r=await Cf(e,i,t),s=await kf._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function Rf(e,t,n){const i=hf(e),r=await
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function(e,t){return xd(e,"POST","/v1/accounts:signUp",Dd(e,t))}(i,{returnSecureToken:!0,email:t,password:n}),s=await kf._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}function Df(e,t,n){return async function(e,t){return Nf(hf(e),t)}(wt(e),vf.credential(t,n))}const Of="__sak";
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Pf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Of,"1"),this.storage.removeItem(Of),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class xf extends Pf{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=it();return ef(e)||af(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=cf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);at()&&10===document.documentMode&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}xf.type="LOCAL";const Lf=xf;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Mf extends Pf{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Mf.type="SESSION";const $f=Mf;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
class Uf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Uf(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async e=>e(t.origin,r))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
     */Uf.receivers=[];class Vf{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const c=Ff("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(l),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
const qf="firebaseLocalStorageDb",zf="firebaseLocalStorage",Hf="fbase_key";class Kf{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Gf(e,t){return e.transaction([zf],t?"readwrite":"readonly").objectStore(zf)}function Wf(){const e=indexedDB.open(qf,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(zf,{keyPath:Hf})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(zf)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(qf);return new Kf(e).toPromise()}(),t(await Wf()))}))}))}async function Jf(e,t,n){const i=Gf(e,!0).put({[Hf]:t,value:n});return new Kf(i).toPromise()}function Xf(e,t){const n=Gf(e,!0).delete(t);return new Kf(n).toPromise()}class Qf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Wf()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Uf._getInstance(Bf()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Vf(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&function(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wf();return await Jf(e,Of,"1"),await Xf(e,Of),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Jf(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Gf(e,!1).get(t),i=await new Kf(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Xf(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Gf(e,!1).getAll();return new Kf(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Qf.type="LOCAL";const Yf=Qf;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Zf(e){return new Promise(((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=md("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",function(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}().appendChild(i)}))}new Ad(3e4,6e4);
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
async function(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const s=await jd(e,Cf(i,r,t,e),n);vd(s.idToken,i,"internal-error");const o=Vd(s.idToken);vd(o,i,"internal-error");const{sub:a}=o;return vd(e.uid===a,i,"user-mismatch"),kf._forOperation(e,r,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&gd(i,"user-mismatch"),e}}(n,new ep(e),e.bypassAuthState)}async function ip(e){const{auth:t,user:n}=e;return vd(n,t,"internal-error"),async function(e,t,n=!1){const i=await jd(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return kf._forOperation(e,"link",i)}(n,new ep(e),e.bypassAuthState)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class rp{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tp;case"linkViaPopup":case"linkViaRedirect":return ip;case"reauthViaPopup":case"reauthViaRedirect":return np;default:gd(this.auth,"internal-error")}}resolve(e){bd(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bd(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const sp=new Ad(2e3,1e4);class op extends rp{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,op.currentPopupAction&&op.currentPopupAction.cancel(),op.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return vd(e,this.auth,"internal-error"),e}async onExecution(){bd(1===this.filter.length,"Popup operations only handle one event");const e=Ff();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(md(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(md(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,op.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(md(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,sp.get())};e()}}op.currentPopupAction=null;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const ap="pendingRedirect",cp=new Map;class lp extends rp{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=cp.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return Xd(ap,e.config.apiKey,e.name)}(t),i=function(e){return Td(e._redirectPersistence)}(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}cp.set(this.auth._key(),e)}return this.bypassAuthState||cp.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function up(e,t,n=!1){const i=hf(e),r=
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
function(e,t){return t?Td(t):(vd(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(i,t),s=new lp(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
     */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!fp(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(md(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(dp(e))}saveEventToCache(e){this.cachedEventUids.add(dp(e)),this.lastProcessedEventTime=Date.now()}}function dp(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function fp({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const pp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gp=/^https?/;async function mp(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Od(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(yp(e))return}catch(e){}gd(e,"unauthorized-domain")}function yp(e){const t=Ed(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!gp.test(n))return!1;if(pp.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
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
     */const vp=new Ad(3e4,6e4);function wp(){const e=jf().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function bp(e){return new Promise(((t,n)=>{var i,r,s;function o(){wp(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{wp(),n(md(e,"network-request-failed"))},timeout:vp.get()})}if(null===(r=null===(i=jf().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=jf().gapi)||void 0===s?void 0:s.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return jf()[t]=()=>{gapi.load?o():n(md(e,"network-request-failed"))},Zf(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Ip=null,e}))}let Ip=null;
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
const Tp=new Ad(5e3,15e3),Ep={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_p=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kp(e){const t=e.config;vd(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Sd(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:qt},r=_p.get(e.config.apiHost);r&&(i.eid=r);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${ft(i).slice(1)}`}async function Ap(e){const t=await function(e){return Ip=Ip||bp(e),Ip}(e),n=jf().gapi;return vd(n,e,"internal-error"),t.open({where:document.body,url:kp(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ep,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=md(e,"network-request-failed"),s=jf().setTimeout((()=>{i(r)}),Tp.get());function o(){jf().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{i(r)}))}))))}
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
     */const Sp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Cp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Np(e,t,n,i=500,r=600){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Sp),{width:i.toString(),height:r.toString(),top:s,left:o}),l=it().toLowerCase();n&&(a=tf(l)?"_blank":n),Zd(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=it()){var t;return af(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
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
     */(t||"",a),new Cp(null);const h=window.open(t||"",a,u);vd(h,e,"popup-blocked");try{h.focus()}catch(e){}return new Cp(h)}const Rp="__/auth/handler",Dp="emulator/auth/handler";function Op(e,t,n,i,r,s){vd(e.config.authDomain,e,"auth-domain-config-required"),vd(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:qt,eventId:r};if(t instanceof wf){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof bf){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${Rp}`;return Sd(e,Dp)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)}?${ft(a).slice(1)}`}const Pp="webStorageSupport";const xp=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$f,this._completeRedirectFn=up}async _openPopup(e,t,n,i){var r;bd(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return Np(e,Op(e,t,n,Ed(),i),Ff())}async _openRedirect(e,t,n,i){var r;return await this._originValidation(e),r=Op(e,t,n,Ed(),i),jf().location.href=r,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(bd(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Ap(e),n=new hp(e);return t.register("authEvent",(t=>{vd(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Pp,{type:Pp},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&t(!!r),gd(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=mp(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return cf()||ef()||af()}};var Lp,Mp="@firebase/auth",$p="0.19.4";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
function Fp(e=zt()){const t=Vt(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=Vt(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(ht(n.getOptions(),null!=t?t:{}))return e;gd(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:xp,persistence:[Yf,Lf,$f]})}function Vp(e){e?setTimeout((()=>{window.location.href="/"}),e):window.location.href="/"}Lp="Browser",Ft(new bt("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:r}=n.options;return(e=>{vd(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),vd(!(null==r?void 0:r.includes(":")),"argument-error",{appName:e.name});const n={apiKey:i,authDomain:r,clientPlatform:Lp,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lf(Lp)},s=new uf(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Td);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Ft(new bt("auth-internal",(e=>(e=>new Up(e))(hf(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),Ht(Mp,$p,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Lp)),Ht(Mp,$p,"esm2017");const jp={email:"",numGames:0,avgWPM:0,matchHistory:[],matchHistoryTime:[],uid:""};let Bp,qp,zp;const Hp=window.sessionStorage,Kp="user";function Gp(){Bp=function(e,t={}){"object"!=typeof t&&(t={name:t});const n=Object.assign({name:xt,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw jt.create("bad-app-name",{appName:String(i)});const r=Mt.get(i);if(r){if(ht(e,r.options)&&ht(n,r.config))return r;throw jt.create("duplicate-app",{appName:i})}const s=new Et(i);for(const e of $t.values())s.addComponent(e);const o=new Bt(e,n,s);return Mt.set(i,o),o}({apiKey:"AIzaSyAcfFLGAnLbwIUCfyCYgayBl2oPvbu5RFQ",authDomain:"perfect-type.firebaseapp.com",projectId:"perfect-type",storageBucket:"perfect-type.appspot.com",messagingSenderId:"358376646912",appId:"1:358376646912:web:d750e4f6970556a8072be5",measurementId:"G-MDGFNKMNEC"}),ai(Bp),qp=Fp(),zp=function(e=zt()){return Vt(e,"firestore").getImmediate()}()}function Wp(){return null!=function(){const e=Hp.getItem(Kp);return null==e?null:e.length>0?JSON.parse(e):null}()}async function Jp(e,t){try{const n=await Rf(qp,e,t);Hp.setItem(Kp,JSON.stringify(n.user));let i=Object.assign({},jp);return i.uid=n.user.uid,i.email=n.user.email,await async function(e,t,n){const i=function(e,t,...n){if(e=wt(e),1===arguments.length&&(t=Ka.A()),Dh("doc","path",t),e instanceof Mh){const i=tc.fromString(t,...n);return Oh(i),new $h(e,null,new fc(i))}{if(!(e instanceof $h||e instanceof Fh))throw new La(xa.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(tc.fromString(t,...n));return Oh(i),new $h(e.firestore,e instanceof Fh?e.converter:null,new fc(i))}}(zp,e,t);return await cd(i,n),n}("users",i.uid,i),n.user}catch(e){return console.log(e),null}}function Xp(t){let n,i,r,s,o,a,c;return{c(){n=w("div"),i=w("label"),r=b(t[1]),s=I(),o=w("input"),_(i,"for",t[2]),_(o,"id",t[2]),_(o,"type",t[4]),_(o,"name",t[2]),_(o,"autocomplete",t[3]),o.value=t[0],_(n,"class","input-container")},m(e,l){m(e,n,l),g(n,i),g(i,r),g(n,s),g(n,o),a||(c=E(o,"input",t[5]),a=!0)},p(e,[t]){2&t&&k(r,e[1]),4&t&&_(i,"for",e[2]),4&t&&_(o,"id",e[2]),16&t&&_(o,"type",e[4]),4&t&&_(o,"name",e[2]),8&t&&_(o,"autocomplete",e[3]),1&t&&o.value!==e[0]&&(o.value=e[0])},i:e,o:e,d(e){e&&y(n),a=!1,c()}}}function Qp(e,t,n){let{value:i=""}=t,{text:r}=t,{id:s}=t,{autocomplete:o}=t,{type:a="text"}=t;return e.$$set=e=>{"value"in e&&n(0,i=e.value),"text"in e&&n(1,r=e.text),"id"in e&&n(2,s=e.id),"autocomplete"in e&&n(3,o=e.autocomplete),"type"in e&&n(4,a=e.type)},[i,r,s,o,a,e=>{n(0,i=e.target.value),function(e,t){let n=e.target.parentNode.querySelector("label");e.target.value.length>0?(n.style.top="-10px",n.style.fontSize="1em"):(n.style.top="10px",n.style.fontSize="1.5em")}(e)}]}class Yp extends Y{constructor(e){super(),Q(this,e,Qp,Xp,s,{value:0,text:1,id:2,autocomplete:3,type:4})}}function Zp(e){let t,n,i,r,s,o,a,c,l,u,h,d,f,p,v,b,T,k,A,S;function C(t){e[6](t)}let R={text:"email",id:"email",type:"email",autocomplete:"email"};function D(t){e[7](t)}void 0!==e[1]&&(R.value=e[1]),a=new Yp({props:R}),N.push((()=>K(a,"value",C)));let O={text:"password",id:"password",type:"password",autocomplete:"current-password"};return void 0!==e[2]&&(O.value=e[2]),u=new Yp({props:O}),N.push((()=>K(u,"value",D))),T=new Le({props:{text:"login"}}),{c(){t=w("form"),n=w("br"),i=I(),r=w("br"),s=I(),o=w("div"),G(a.$$.fragment),l=I(),G(u.$$.fragment),d=I(),f=w("br"),p=I(),v=w("br"),b=I(),G(T.$$.fragment),_(o,"id","form-container")},m(c,h){m(c,t,h),g(t,n),g(t,i),g(t,r),g(t,s),g(t,o),W(a,o,null),g(o,l),W(u,o,null),g(t,d),g(t,f),g(t,p),g(t,v),g(t,b),W(T,t,null),k=!0,A||(S=E(t,"submit",e[3]),A=!0)},p(e,t){const n={};!c&&2&t&&(c=!0,n.value=e[1],L((()=>c=!1))),a.$set(n);const i={};!h&&4&t&&(h=!0,i.value=e[2],L((()=>h=!1))),u.$set(i)},i(e){k||(z(a.$$.fragment,e),z(u.$$.fragment,e),z(T.$$.fragment,e),k=!0)},o(e){H(a.$$.fragment,e),H(u.$$.fragment,e),H(T.$$.fragment,e),k=!1},d(e){e&&y(t),J(a),J(u),J(T),A=!1,S()}}}function eg(t){let n;return{c(){n=w("p"),n.textContent="logged in! redirecting to main..."},m(e,t){m(e,n,t)},p:e,i:e,o:e,d(e){e&&y(n)}}}function tg(e){let t,n,i,r,s,o;const a=[eg,Zp],c=[];function l(e,t){return e[0]?0:1}return r=l(e),s=c[r]=a[r](e),{c(){t=w("main"),n=w("h1"),n.textContent="login",i=I(),s.c()},m(e,s){m(e,t,s),g(t,n),g(t,i),c[r].m(t,null),o=!0},p(e,[n]){let i=r;r=l(e),r===i?c[r].p(e,n):(B(),H(c[i],1,1,(()=>{c[i]=null})),q(),s=c[r],s?s.p(e,n):(s=c[r]=a[r](e),s.c()),z(s,1),s.m(t,null))},i(e){o||(z(s),o=!0)},o(e){H(s),o=!1},d(e){e&&y(t),c[r].d()}}}function ng(e,t,n){let i,r,{currentRoute:s}=t,{params:o}=t,a=!1;return e.$$set=e=>{"currentRoute"in e&&n(4,s=e.currentRoute),"params"in e&&n(5,o=e.params)},[a,i,r,function(e){e&&e.preventDefault(),async function(e,t){try{const n=await Df(qp,e,t);return Hp.setItem(Kp,JSON.stringify(n.user)),n.user}catch(e){return null}}(i,r).then((e=>{null!=e&&(n(0,a=!0),Vp(1e3))}))},s,o,function(e){i=e,n(1,i)},function(e){r=e,n(2,r)}]}function ig(e){let t,n,i,r,s,o,a,c,l,u,h,d,f,p,v,b,T,k,A,S,C,R,D;function O(t){e[7](t)}let P={text:"email",id:"email",type:"email",autocomplete:"email"};function x(t){e[8](t)}void 0!==e[1]&&(P.value=e[1]),n=new Yp({props:P}),N.push((()=>K(n,"value",O)));let M={text:"password",id:"password",type:"password",autocomplete:"new-password"};function $(t){e[9](t)}void 0!==e[2]&&(M.value=e[2]),u=new Yp({props:M}),N.push((()=>K(u,"value",x)));let U={text:"confirm password",id:"con-password",type:"password",autocomplete:"new-password"};return void 0!==e[3]&&(U.value=e[3]),f=new Yp({props:U}),N.push((()=>K(f,"value",$))),S=new Le({props:{text:"signup"}}),{c(){t=w("form"),G(n.$$.fragment),r=I(),s=w("br"),o=I(),a=w("br"),c=I(),l=w("div"),G(u.$$.fragment),d=I(),G(f.$$.fragment),v=I(),b=w("br"),T=I(),k=w("br"),A=I(),G(S.$$.fragment),_(l,"id","form-container")},m(i,h){m(i,t,h),W(n,t,null),g(t,r),g(t,s),g(t,o),g(t,a),g(t,c),g(t,l),W(u,l,null),g(l,d),W(f,l,null),g(t,v),g(t,b),g(t,T),g(t,k),g(t,A),W(S,t,null),C=!0,R||(D=E(t,"submit",e[4]),R=!0)},p(e,t){const r={};!i&&2&t&&(i=!0,r.value=e[1],L((()=>i=!1))),n.$set(r);const s={};!h&&4&t&&(h=!0,s.value=e[2],L((()=>h=!1))),u.$set(s);const o={};!p&&8&t&&(p=!0,o.value=e[3],L((()=>p=!1))),f.$set(o)},i(e){C||(z(n.$$.fragment,e),z(u.$$.fragment,e),z(f.$$.fragment,e),z(S.$$.fragment,e),C=!0)},o(e){H(n.$$.fragment,e),H(u.$$.fragment,e),H(f.$$.fragment,e),H(S.$$.fragment,e),C=!1},d(e){e&&y(t),J(n),J(u),J(f),J(S),R=!1,D()}}}function rg(t){let n;return{c(){n=w("p"),n.textContent="signed up and logged in! redirecting to main..."},m(e,t){m(e,n,t)},p:e,i:e,o:e,d(e){e&&y(n)}}}function sg(e){let t,n,i,r,s,o;const a=[rg,ig],c=[];function l(e,t){return e[0]?0:1}return r=l(e),s=c[r]=a[r](e),{c(){t=w("main"),n=w("h1"),n.textContent="sign up",i=I(),s.c()},m(e,s){m(e,t,s),g(t,n),g(t,i),c[r].m(t,null),o=!0},p(e,[n]){let i=r;r=l(e),r===i?c[r].p(e,n):(B(),H(c[i],1,1,(()=>{c[i]=null})),q(),s=c[r],s?s.p(e,n):(s=c[r]=a[r](e),s.c()),z(s,1),s.m(t,null))},i(e){o||(z(s),o=!0)},o(e){H(s),o=!1},d(e){e&&y(t),c[r].d()}}}function og(e,t,n){let i,r,s,{currentRoute:o}=t,{params:a}=t,c=!1;return e.$$set=e=>{"currentRoute"in e&&n(5,o=e.currentRoute),"params"in e&&n(6,a=e.params)},[c,i,r,s,function(e){e&&e.preventDefault(),function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(i)?s===r?r.length<8?alert("Passwords too short!"):Jp(i,r).then((e=>{null!=e&&(n(0,c=!0),Vp(1e3))})):alert("Passwords do not match!"):alert("Invalid email!")},o,a,function(e){i=e,n(1,i)},function(e){r=e,n(2,r)},function(e){s=e,n(3,s)}]}function ag(e){let t,n,i,r;const s=e[2].default,o=l(s,e,e[1],null),a=o||function(e){let t;return{c(){t=b("default card")},m(e,n){m(e,t,n)},d(e){e&&y(t)}}}();return{c(){t=w("div"),n=w("div"),i=w("p"),a&&a.c(),_(n,"class","container svelte-1uju7xc"),_(t,"class","card svelte-1uju7xc")},m(e,s){m(e,t,s),g(t,n),g(n,i),a&&a.m(i,null),r=!0},p(e,[t]){o&&o.p&&(!r||2&t)&&d(o,s,e,e[1],r?h(s,e[1],t,null):f(e[1]),null)},i(e){r||(z(a,e),r=!0)},o(e){H(a,e),r=!1},d(e){e&&y(t),a&&a.d(e)}}}function cg(e,t,n){let{$$slots:i={},$$scope:r}=t,{title:s}=t;return e.$$set=e=>{"title"in e&&n(0,s=e.title),"$$scope"in e&&n(1,r=e.$$scope)},[s,r,i]}class lg extends Y{constructor(e){super(),Q(this,e,cg,ag,s,{title:0})}}function ug(e){let t,n,i;const r=e[1].default,s=l(r,e,e[0],null),o=s||function(e){let t;return{c(){t=b("place analytics cards here")},m(e,n){m(e,t,n)},d(e){e&&y(t)}}}();return{c(){t=w("main"),n=w("div"),o&&o.c(),_(n,"class","analytics-card-collection svelte-1qtczwf")},m(e,r){m(e,t,r),g(t,n),o&&o.m(n,null),i=!0},p(e,[t]){s&&s.p&&(!i||1&t)&&d(s,r,e,e[0],i?h(r,e[0],t,null):f(e[0]),null)},i(e){i||(z(o,e),i=!0)},o(e){H(o,e),i=!1},d(e){e&&y(t),o&&o.d(e)}}}function hg(e,t,n){let{$$slots:i={},$$scope:r}=t;return e.$$set=e=>{"$$scope"in e&&n(0,r=e.$$scope)},[r,i]}class dg extends Y{constructor(e){super(),Q(this,e,hg,ug,s,{})}}function fg(t){let n,i,r,s,a,c,l,u,h=`username: ${Tg}`;return{c(){var e,t;n=w("h2"),n.textContent="user information",i=I(),r=w("img"),a=I(),c=w("br"),l=I(),u=b(h),e=r.src,t=s=Dg,o||(o=document.createElement("a")),o.href=t,e!==o.href&&_(r,"src",s),_(r,"alt","Avatar"),_(r,"class","svelte-m9xsnv")},m(e,t){m(e,n,t),m(e,i,t),m(e,r,t),m(e,a,t),m(e,c,t),m(e,l,t),m(e,u,t)},p:e,d(e){e&&y(n),e&&y(i),e&&y(r),e&&y(a),e&&y(c),e&&y(l),e&&y(u)}}}function pg(t){let n,i,r,s,o,a,c,l,u,h,d,f,p,g,v,T,E,_,k,A,S,C,N,R,D,O,P,x,L,M,$,U,F,V,j,B="overall: "+vg,q="easy: "+wg,z=" - medium: "+bg,H=" - hard: "+Ig,K="overall: "+Eg,G="easy: "+_g,W=" - medium: "+kg,J=" - hard: "+Ag,X="overall: "+Sg,Q="easy: "+Cg,Y=" - medium: "+Ng,Z=" - hard: "+Rg;return{c(){n=w("h2"),n.textContent="total games",i=I(),r=b(B),s=I(),o=w("br"),a=I(),c=b(q),l=I(),u=b(z),h=I(),d=b(H),f=I(),p=w("h2"),p.textContent="avg words per minute",g=I(),v=b(K),T=I(),E=w("br"),_=I(),k=b(G),A=I(),S=b(W),C=I(),N=b(J),R=I(),D=w("h2"),D.textContent="avg letters per minute",O=I(),P=b(X),x=I(),L=w("br"),M=I(),$=b(Q),U=I(),F=b(Y),V=I(),j=b(Z)},m(e,t){m(e,n,t),m(e,i,t),m(e,r,t),m(e,s,t),m(e,o,t),m(e,a,t),m(e,c,t),m(e,l,t),m(e,u,t),m(e,h,t),m(e,d,t),m(e,f,t),m(e,p,t),m(e,g,t),m(e,v,t),m(e,T,t),m(e,E,t),m(e,_,t),m(e,k,t),m(e,A,t),m(e,S,t),m(e,C,t),m(e,N,t),m(e,R,t),m(e,D,t),m(e,O,t),m(e,P,t),m(e,x,t),m(e,L,t),m(e,M,t),m(e,$,t),m(e,U,t),m(e,F,t),m(e,V,t),m(e,j,t)},p:e,d(e){e&&y(n),e&&y(i),e&&y(r),e&&y(s),e&&y(o),e&&y(a),e&&y(c),e&&y(l),e&&y(u),e&&y(h),e&&y(d),e&&y(f),e&&y(p),e&&y(g),e&&y(v),e&&y(T),e&&y(E),e&&y(_),e&&y(k),e&&y(A),e&&y(S),e&&y(C),e&&y(N),e&&y(R),e&&y(D),e&&y(O),e&&y(P),e&&y(x),e&&y(L),e&&y(M),e&&y($),e&&y(U),e&&y(F),e&&y(V),e&&y(j)}}}function gg(e){let t,n;return{c(){t=w("h2"),t.textContent="success rate",n=b("\n      use pie charts here")},m(e,i){m(e,t,i),m(e,n,i)},d(e){e&&y(t),e&&y(n)}}}function mg(e){let t,n,i,r,s,o;return t=new lg({props:{$$slots:{default:[fg]},$$scope:{ctx:e}}}),i=new lg({props:{$$slots:{default:[pg]},$$scope:{ctx:e}}}),s=new lg({props:{$$slots:{default:[gg]},$$scope:{ctx:e}}}),{c(){G(t.$$.fragment),n=I(),G(i.$$.fragment),r=I(),G(s.$$.fragment)},m(e,a){W(t,e,a),m(e,n,a),W(i,e,a),m(e,r,a),W(s,e,a),o=!0},p(e,n){const r={};1&n&&(r.$$scope={dirty:n,ctx:e}),t.$set(r);const o={};1&n&&(o.$$scope={dirty:n,ctx:e}),i.$set(o);const a={};1&n&&(a.$$scope={dirty:n,ctx:e}),s.$set(a)},i(e){o||(z(t.$$.fragment,e),z(i.$$.fragment,e),z(s.$$.fragment,e),o=!0)},o(e){H(t.$$.fragment,e),H(i.$$.fragment,e),H(s.$$.fragment,e),o=!1},d(e){J(t,e),e&&y(n),J(i,e),e&&y(r),J(s,e)}}}function yg(e){let t,n,i,r,s;return r=new dg({props:{$$slots:{default:[mg]},$$scope:{ctx:e}}}),{c(){t=w("main"),n=w("h1"),n.textContent="profile",i=I(),G(r.$$.fragment)},m(e,o){m(e,t,o),g(t,n),g(t,i),W(r,t,null),s=!0},p(e,[t]){const n={};1&t&&(n.$$scope={dirty:t,ctx:e}),r.$set(n)},i(e){s||(z(r.$$.fragment,e),s=!0)},o(e){H(r.$$.fragment,e),s=!1},d(e){e&&y(t),J(r)}}}let vg=10,wg=3,bg=4,Ig=5,Tg="davidlurocks69",Eg=69,_g=60,kg=50,Ag=40,Sg=69,Cg=60,Ng=50,Rg=40,Dg="../../fart.png";function Og(t){let n;return{c(){n=w("main"),n.textContent="leaderboard"},m(e,t){m(e,n,t)},p:e,i:e,o:e,d(e){e&&y(n)}}}function Pg(){return!Wp()}const xg=[{name:"/",component:class extends Y{constructor(e){super(),Q(this,e,et,Ze,s,{currentRoute:9,params:10})}}},{name:"login",component:class extends Y{constructor(e){super(),Q(this,e,ng,tg,s,{currentRoute:4,params:5})}},onlyIf:{guard:Pg,redirect:"/"}},{name:"signup",component:class extends Y{constructor(e){super(),Q(this,e,og,sg,s,{currentRoute:5,params:6})}},onlyIf:{guard:Pg,redirect:"/"}},{name:"profile",component:class extends Y{constructor(e){super(),Q(this,e,null,yg,s,{})}},onlyIf:{guard:Pg,redirect:"/"}},{name:"leaderboard",component:class extends Y{constructor(e){super(),Q(this,e,null,Og,s,{})}},onlyIf:{guard:Pg,redirect:"/"}}];function Lg(t){let n;return{c(){n=w("main"),n.innerHTML='<div class="header svelte-1weaa9o"><a href="/profile" class="svelte-1weaa9o">profile</a> \n    <a href="/signup" class="svelte-1weaa9o">signup</a> \n    <a href="/login" class="svelte-1weaa9o">login</a> \n    <a href="/leaderboard" class="svelte-1weaa9o">leaderboard</a> \n    <a href="/" class="svelte-1weaa9o">play</a></div>'},m(e,t){m(e,n,t)},p:e,i:e,o:e,d(e){e&&y(n)}}}class Mg extends Y{constructor(e){super(),Q(this,e,null,Lg,s,{})}}function $g(t){let n,i,r,s,o,a;return r=new Mg({}),o=new Re({props:{routes:xg}}),{c(){n=w("meta"),i=I(),G(r.$$.fragment),s=I(),G(o.$$.fragment),document.title="Perfect Type",_(n,"charset","utf-8")},m(e,t){g(document.head,n),m(e,i,t),W(r,e,t),m(e,s,t),W(o,e,t),a=!0},p:e,i(e){a||(z(r.$$.fragment,e),z(o.$$.fragment,e),a=!0)},o(e){H(r.$$.fragment,e),H(o.$$.fragment,e),a=!1},d(e){y(n),e&&y(i),J(r,e),e&&y(s),J(o,e)}}}function Ug(e){return Gp(),[]}return new class extends Y{constructor(e){super(),Q(this,e,Ug,$g,s,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
