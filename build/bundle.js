var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function i(e){e.forEach(t)}function r(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function o(t,n,i){t.$$.on_destroy.push(function(t,...n){if(null==t)return e;const i=t.subscribe(...n);return i.unsubscribe?()=>i.unsubscribe():i}(n,i))}function a(e){return null==e?"":e}function c(e,t){e.appendChild(t)}function l(e,t,n){e.insertBefore(t,n||null)}function u(e){e.parentNode.removeChild(e)}function h(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function d(e){return document.createElement(e)}function f(e){return document.createTextNode(e)}function p(){return f(" ")}function g(){return f("")}function m(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function y(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function v(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let w;function b(e){w=e}function I(e){(function(){if(!w)throw new Error("Function called outside component initialization");return w})().$$.on_mount.push(e)}const T=[],E=[],_=[],k=[],A=Promise.resolve();let S=!1;function C(e){_.push(e)}function N(e){k.push(e)}let R=!1;const D=new Set;function O(){if(!R){R=!0;do{for(let e=0;e<T.length;e+=1){const t=T[e];b(t),P(t.$$)}for(b(null),T.length=0;E.length;)E.pop()();for(let e=0;e<_.length;e+=1){const t=_[e];D.has(t)||(D.add(t),t())}_.length=0}while(T.length);for(;k.length;)k.pop()();S=!1,R=!1,D.clear()}}function P(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(C)}}const L=new Set;let x;function M(){x={r:0,c:[],p:x}}function U(){x.r||i(x.c),x=x.p}function $(e,t){e&&e.i&&(L.delete(e),e.i(t))}function F(e,t,n,i){if(e&&e.o){if(L.has(e))return;L.add(e),x.c.push((()=>{L.delete(e),i&&(n&&e.d(1),i())})),e.o(t)}}function V(e,t,n){const i=e.$$.props[t];void 0!==i&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function j(e){e&&e.c()}function B(e,n,s,o){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=e.$$;a&&a.m(n,s),o||C((()=>{const n=c.map(t).filter(r);l?l.push(...n):i(n),e.$$.on_mount=[]})),u.forEach(C)}function q(e,t){const n=e.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function z(e,t){-1===e.$$.dirty[0]&&(T.push(e),S||(S=!0,A.then(O)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function H(t,r,s,o,a,c,l,h=[-1]){const d=w;b(t);const f=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:n(),dirty:h,skip_bound:!1,root:r.target||d.$$.root};l&&l(f.root);let p=!1;if(f.ctx=s?s(t,r.props||{},((e,n,...i)=>{const r=i.length?i[0]:n;return f.ctx&&a(f.ctx[e],f.ctx[e]=r)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](r),p&&z(t,e)),n})):[],f.update(),p=!0,i(f.before_update),f.fragment=!!o&&o(f.ctx),r.target){if(r.hydrate){const e=function(e){return Array.from(e.childNodes)}(r.target);f.fragment&&f.fragment.l(e),e.forEach(u)}else f.fragment&&f.fragment.c();r.intro&&$(t.$$.fragment),B(t,r.target,r.anchor,r.customElement),O()}b(d)}class K{$destroy(){q(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const G=[];function W(t,n=e){let i;const r=new Set;function o(e){if(s(t,e)&&(t=e,i)){const e=!G.length;for(const e of r)e[1](),G.push(e,t);if(e){for(let e=0;e<G.length;e+=2)G[e][0](G[e+1]);G.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(s,a=e){const c=[s,a];return r.add(c),1===r.size&&(i=n(o)||e),s(t),()=>{r.delete(c),0===r.size&&(i(),i=null)}}}}const{set:J,subscribe:X}=W({}),Q={subscribe:X,set:J,remove:()=>{J({})}},Y=(e,t="")=>{const n=new URL(e);function i(){return s(t).reduce(((e,t,n)=>(":"===t[0]&&e.push({value:t.slice(1),index:n}),e)),[])}function r(){return s(n.pathname)}function s(e){return"/"===e||0===e.trim().length?[e]:("/"===e.slice(-1)&&(e=e.slice(0,-1)),"/"===e[0]&&(e=e.slice(1)),e.split("/"))}return Object.freeze({hash:n.hash,host:n.host,hostname:n.hostname,namedParams:function(){const e=r();return i().reduce(((t,n)=>(t[n.value]=e[n.index],t)),{})}(),namedParamsKeys:i().reduce(((e,t)=>(e.push(t.value),e)),[]),namedParamsValues:function(){const e=r();return i().reduce(((t,n)=>(t.push(e[n.index]),t)),[])}(),pathNames:r(),port:n.port,pathname:n.pathname,protocol:n.protocol,search:n.search,queryParams:function(){const e={};return n.searchParams.forEach(((t,n)=>{e[n]=t})),e}(),queryParamsKeys:function(){const e=[];return n.searchParams.forEach(((t,n)=>{e.push(n)})),e}(),queryParamsValues:function(){const e=[];return n.searchParams.forEach((t=>{e.push(t)})),e}()})},Z=e=>{let t=!1;return 0===Object.keys(e).length||(e.childRoute&&0===Object.keys(e.childRoute).length?t=!0:e.childRoute&&(t=Z(e.childRoute)),t)},ee=(e,t)=>(t=re(t)).includes(":")?t.includes(e):t.startsWith(e),te=(e,t,n)=>{let i=!1;if(n)return{exists:t.lang&&t.lang[n]&&t.lang[n].includes(e),language:n};if(i=ee(e,t.name),!i&&t.lang&&"object"==typeof t.lang)for(const[r,s]of Object.entries(t.lang))ee(e,s)&&(i=!0,n=r);return{exists:i,language:n}},ne=e=>"/"===e||0===e.trim().length?[e]:(e=re(e,"both")).split("/"),ie=(e="")=>{let t;return"/"===e||0===e.trim().length?e:(t=(e=re(e,"lead")).split(":")[0],t=re(t,"trail"),t.toLowerCase())},re=(e,t="lead")=>("trail"!==t&&"both"!==t||(e=e.replace(/\/$/,"")),"lead"!==t&&"both"!==t||(e=e.replace(/^\//,"")),e),se=(e,t=null)=>t&&e.lang&&e.lang[t]?e.lang[t]:e.name,oe=e=>{const t=e||!1;let n="";const i=(e,n)=>{if("undefined"!=typeof window){const i=(e=>{let t=[];if(e.queryParams)for(let[n,i]of Object.entries(e.queryParams))t.push(`${n}=${i}`);const n=e.hash?e.hash:"";return t.length>0?`${e.path}?${t.join("&")}${n}`:e.path+n})(e);n&&window.history.pushState({page:i},"",i),t&&r(i)}},r=e=>{"undefined"!=typeof ga&&(ga("set","page",e),ga("send","pageview"))};return Object.freeze({active:()=>n,isActive:(e,t=!1)=>{"/"!==e[0]&&(e="/"+e);let i=Y(`http://fake.com${e}`).pathname,r=Y(`http://fake.com${n}`).pathname;return i=re(i,"trail"),r=re(r,"trail"),t?r.includes(i):r===i},setActive:(e,t)=>{n=e.path,i(e,t)}})},ae=(e,t)=>{const n=(e=>{const t=e;return Object.freeze({valid:()=>t&&t.guard&&"function"==typeof t.guard,redirect:()=>!t.guard(),redirectPath:()=>{let e="/";return t.redirect&&t.redirect.length>0&&(e=t.redirect),e}})})(e.onlyIf);return Object.freeze({path:()=>{let i=t;return e.redirectTo&&e.redirectTo.length>0&&(i=e.redirectTo),n.valid()&&n.redirect()&&(i=n.redirectPath()),i}})};function ce({basePath:e,basePathName:t,pathNames:n,convert:i,currentLanguage:r}){let s,o,a=r;function c(){return se(o,a)}function l(){return ie(c())}function u(){return ie(s.result)}return Object.freeze({basePathSameAsLocalised:function(){return u()===l()},updatedPath:function(e){return o=e,s=((e,t,n,i,r=!1)=>{if("/"===e||0===e.trim().length)return{result:e,language:null};let s=e,o=n.name,a=i;if(r&&(a=""),o=re(o),s=re(s),n.childRoute)return{result:e,language:a};{let e=te(s,n,a);e.exists&&r&&(s=se(n,i));let c=o.split(":")[0];return c=re(c,"trail"),c=c.split("/"),c.shift(),c.forEach((()=>{const o=t[0];if(e=te(`${s}/${o}`,n,a),!o||!e.exists)return{result:s,language:e.language};s=r?se(n,i):`${s}/${o}`,t.shift()})),{result:s,language:e.language}}})(t,n,o,a,i),a=i?r:s.language,s},basePathNameWithoutNamedParams:u,localisedPathName:c,localisedRouteWithoutNamedParams:l,namedPath:function(){let t=c();return t&&!t.startsWith("/")&&(t="/"+t),e?`${e}${t}`:t},pathNames:n,routeLanguage:function(){return a},routePath:function(){let t=`${e}/${u()}`;"//"===t&&(t="/"),a&&(n=((e,t)=>{const n=t.split("/");return n.length>1&&n.forEach((function(t,n){t.length>0&&n>0&&e.shift()})),e})(n,l()));const i=((e="")=>0===e.trim().length?[]:ne(e).reduce(((e,t)=>(":"===t[0]&&e.push(t.slice(1)),e)),[]))(c());return i&&i.length>0&&i.forEach((function(){n.length>0&&(t+=`/${n.shift()}`)})),t}})}function le({routes:e,currentUrl:t,routerOptions:n,convert:i}){const r=n.defaultLanguage,s=n.prefix?n.prefix.toLowerCase():"",o=function(e,t){if(t&&t.trim().length>0){const n=e.endsWith(t)?t:t+"/",i=e.replace(n,"");return Y(i)}return Y(e)}(t,s);let a="",c={},l=!1;function u(e,t,n,i,s){let h={};const d=ce({basePath:t,basePathName:n.shift().toLowerCase(),pathNames:n,convert:s,currentLanguage:i});return l=!1,e.forEach((function(e){if(d.updatedPath(e),function(e,t){const n=e.basePathSameAsLocalised();n&&(l=!0);return n||!l&&(e=>re(e).startsWith(":"))(t)}(d,e.name)){let t=d.routePath();if(a=ae(e,a).path(),h.name!==t&&(h=function({route:e,routePath:t,routeLanguage:n,urlParser:i,namedPath:s}){const o=function({routeInfo:e,path:t,routeNamedParams:n,urlParser:i,namedPath:r,language:s}){const o=()=>{const e=Y(`https://fake.com${i.pathname}`,r).namedParams;return{...n,...e}};return Object.freeze({get:()=>({name:t,component:e.component,hash:i.hash,layout:e.layout,queryParams:i.queryParams,namedParams:o(),path:t,language:s}),namedParams:o})}({routeInfo:e,urlParser:i,path:t,routeNamedParams:c,namedPath:s,language:n||r});return c=o.namedParams(),o.get()}({route:e,routePath:t,routeLanguage:d.routeLanguage(),urlParser:o,namedPath:d.namedPath()})),e.nestedRoutes&&e.nestedRoutes.length>0&&d.pathNames.length>0)h.childRoute=u(e.nestedRoutes,t,d.pathNames,d.routeLanguage(),s),h.path=h.childRoute.path,h.language=h.childRoute.language;else if(function(e,t){return e.nestedRoutes&&e.nestedRoutes.length>0&&0===t.length}(e,d.pathNames)){const n=u(e.nestedRoutes,t,["index"],d.routeLanguage(),s);n&&Object.keys(n).length>0&&(h.childRoute=n,h.language=h.childRoute.language)}}})),a&&(h.redirectTo=a),h}const h=t=>{const n=e.find((e=>"404"==e.name)),i=t||r||"";return n?{...n,language:i,path:"404"}:{name:"404",component:"",path:"404",redirectTo:"/404.html"}};return Object.freeze({findActiveRoute:function(){let t=u(e,"",o.pathNames,n.lang,i);return t&&Object.keys(t).length&&!Z(t)?(t.path=t.path.split("?")[0],s&&(t.path=`/${s}${t.path}`)):"undefined"!=typeof window&&(t=h(n.lang)),t}})}const ue="/404.html";let he,de=[],fe={};const pe=(e,t,n={})=>{fe={...n},void 0!==t&&""!==t||(t=document.location.href),he=oe(fe.gaPageviews),t=re(t,"trail"),de=e;const i=()=>{let n=!1;return fe.langConvertTo&&(fe.lang=fe.langConvertTo,n=!0),le({routes:e,currentUrl:t,routerOptions:fe,convert:n}).findActiveRoute()};return Object.freeze({setActiveRoute:(e=!0)=>{const t=i();return t.redirectTo?((e,t)=>("undefined"!=typeof window&&(e===ue?he.setActive({path:ue},t):ge(e)),e))(t.redirectTo,e):(he.setActive(t,e),Q.set(t),t)},findActiveRoute:i})},ge=(e,t=null,n=!0)=>(e=re(e,"lead"),t&&(fe.langConvertTo=t),pe(de,"http://fake.com/"+e,fe).setActiveRoute(n));function me(e){let t,n;return t=new Ie({props:{currentRoute:e[0].childRoute,params:e[1]}}),{c(){j(t.$$.fragment)},m(e,i){B(t,e,i),n=!0},p(e,n){const i={};1&n&&(i.currentRoute=e[0].childRoute),2&n&&(i.params=e[1]),t.$set(i)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){F(t.$$.fragment,e),n=!1},d(e){q(t,e)}}}function ye(e){let t,n,i;var r=e[0].component;function s(e){return{props:{currentRoute:{...e[0],component:""},params:e[1]}}}return r&&(t=new r(s(e))),{c(){t&&j(t.$$.fragment),n=g()},m(e,r){t&&B(t,e,r),l(e,n,r),i=!0},p(e,i){const o={};if(1&i&&(o.currentRoute={...e[0],component:""}),2&i&&(o.params=e[1]),r!==(r=e[0].component)){if(t){M();const e=t;F(e.$$.fragment,1,0,(()=>{q(e,1)})),U()}r?(t=new r(s(e)),j(t.$$.fragment),$(t.$$.fragment,1),B(t,n.parentNode,n)):t=null}else r&&t.$set(o)},i(e){i||(t&&$(t.$$.fragment,e),i=!0)},o(e){t&&F(t.$$.fragment,e),i=!1},d(e){e&&u(n),t&&q(t,e)}}}function ve(e){let t,n,i;var r=e[0].layout;function s(e){return{props:{currentRoute:{...e[0],layout:""},params:e[1]}}}return r&&(t=new r(s(e))),{c(){t&&j(t.$$.fragment),n=g()},m(e,r){t&&B(t,e,r),l(e,n,r),i=!0},p(e,i){const o={};if(1&i&&(o.currentRoute={...e[0],layout:""}),2&i&&(o.params=e[1]),r!==(r=e[0].layout)){if(t){M();const e=t;F(e.$$.fragment,1,0,(()=>{q(e,1)})),U()}r?(t=new r(s(e)),j(t.$$.fragment),$(t.$$.fragment,1),B(t,n.parentNode,n)):t=null}else r&&t.$set(o)},i(e){i||(t&&$(t.$$.fragment,e),i=!0)},o(e){t&&F(t.$$.fragment,e),i=!1},d(e){e&&u(n),t&&q(t,e)}}}function we(e){let t,n,i,r;const s=[ve,ye,me],o=[];function a(e,t){return e[0].layout?0:e[0].component?1:e[0].childRoute?2:-1}return~(t=a(e))&&(n=o[t]=s[t](e)),{c(){n&&n.c(),i=g()},m(e,n){~t&&o[t].m(e,n),l(e,i,n),r=!0},p(e,[r]){let c=t;t=a(e),t===c?~t&&o[t].p(e,r):(n&&(M(),F(o[c],1,1,(()=>{o[c]=null})),U()),~t?(n=o[t],n?n.p(e,r):(n=o[t]=s[t](e),n.c()),$(n,1),n.m(i.parentNode,i)):n=null)},i(e){r||($(n),r=!0)},o(e){F(n),r=!1},d(e){~t&&o[t].d(e),e&&u(i)}}}function be(e,t,n){let{currentRoute:i={}}=t,{params:r={}}=t;return e.$$set=e=>{"currentRoute"in e&&n(0,i=e.currentRoute),"params"in e&&n(1,r=e.params)},[i,r]}"undefined"!=typeof window&&(window.addEventListener("click",(e=>{if("a"!==e.target.localName.toLowerCase())return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;const t=fe.prefix?`/${fe.prefix.toLowerCase()}`:"",n=e.target.pathname&&e.target.host===window.location.host,i=!(t.length>1)||e.target.pathname.startsWith(t);if(n&&i){e.preventDefault();const t=e.target.pathname+e.target.search+e.target.search+e.target.hash;"_blank"===e.target.target?window.open(t,"newTab"):ge(t)}})),window.onpopstate=function(e){let t=window.location.pathname+window.location.search+window.location.hash;ge(t,null,!1)});class Ie extends K{constructor(e){super(),H(this,e,be,we,s,{currentRoute:0,params:1})}}function Te(e){let t,n;return t=new Ie({props:{currentRoute:e[0]}}),{c(){j(t.$$.fragment)},m(e,i){B(t,e,i),n=!0},p(e,[n]){const i={};1&n&&(i.currentRoute=e[0]),t.$set(i)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){F(t.$$.fragment,e),n=!1},d(e){q(t,e)}}}function Ee(e,t,n){let i;o(e,Q,(e=>n(0,i=e)));let{routes:r=[]}=t,{options:s={}}=t;return I((()=>{pe(r,document.location.href,s).setActiveRoute()})),e.$$set=e=>{"routes"in e&&n(1,r=e.routes),"options"in e&&n(2,s=e.options)},[i,r,s]}class _e extends K{constructor(e){super(),H(this,e,Ee,Te,s,{routes:1,options:2})}}const ke=W(0),Ae=W(5);function Se(t){let n,i,s,o;return{c(){n=d("button"),i=f(t[0]),y(n,"class","svelte-1guggz1")},m(e,a){l(e,n,a),c(n,i),s||(o=m(n,"click",(function(){r(t[1])&&t[1].apply(this,arguments)})),s=!0)},p(e,[n]){t=e,1&n&&v(i,t[0])},i:e,o:e,d(e){e&&u(n),s=!1,o()}}}function Ce(e,t,n){let{text:i}=t,{onClickFn:r}=t;return e.$$set=e=>{"text"in e&&n(0,i=e.text),"onClickFn"in e&&n(1,r=e.onClickFn)},[i,r]}class Ne extends K{constructor(e){super(),H(this,e,Ce,Se,s,{text:0,onClickFn:1})}}function Re(e){let t,n,i,r,s,o,a=e[0]?`you typed ${e[1]} words per minute`:"you lost :(";return s=new Ne({props:{onClickFn:e[2],text:e[0]?"play again":"try again"}}),{c(){t=d("div"),n=d("div"),i=f(a),r=p(),j(s.$$.fragment),y(n,"class","game-over-div svelte-jt4vm3"),y(t,"class","game-over-environment svelte-jt4vm3")},m(e,a){l(e,t,a),c(t,n),c(n,i),c(t,r),B(s,t,null),o=!0},p(e,[t]){(!o||3&t)&&a!==(a=e[0]?`you typed ${e[1]} words per minute`:"you lost :(")&&v(i,a);const n={};4&t&&(n.onClickFn=e[2]),1&t&&(n.text=e[0]?"play again":"try again"),s.$set(n)},i(e){o||($(s.$$.fragment,e),o=!0)},o(e){F(s.$$.fragment,e),o=!1},d(e){e&&u(t),q(s)}}}function De(e,t,n){let{winGame:i}=t,{wpm:r}=t,{tryAgain:s}=t;return e.$$set=e=>{"winGame"in e&&n(0,i=e.winGame),"wpm"in e&&n(1,r=e.wpm),"tryAgain"in e&&n(2,s=e.tryAgain)},[i,r,s]}class Oe extends K{constructor(e){super(),H(this,e,De,Re,s,{winGame:0,wpm:1,tryAgain:2})}}function Pe(t){let n,s,o,h,g,v,w,b,I,T,E,_,k,A;return{c(){n=d("div"),s=d("div"),o=f("easy"),g=p(),v=d("div"),w=f("medium"),I=p(),T=d("div"),E=f("hard"),y(s,"class",h=a("mode-div "+("easy"===t[0]?"active-mode":""))+" svelte-xhr9hg"),y(s,"id","easy"),y(v,"class",b=a("mode-div "+("medium"===t[0]?"active-mode":""))+" svelte-xhr9hg"),y(v,"id","medium"),y(T,"class",_=a("mode-div "+("hard"===t[0]?"active-mode":""))+" svelte-xhr9hg"),y(T,"id","hard"),y(n,"class","mode-container svelte-xhr9hg")},m(e,i){l(e,n,i),c(n,s),c(s,o),c(n,g),c(n,v),c(v,w),c(n,I),c(n,T),c(T,E),k||(A=[m(s,"click",(function(){r(t[1])&&t[1].apply(this,arguments)})),m(v,"click",(function(){r(t[1])&&t[1].apply(this,arguments)})),m(T,"click",(function(){r(t[1])&&t[1].apply(this,arguments)}))],k=!0)},p(e,[n]){t=e,1&n&&h!==(h=a("mode-div "+("easy"===t[0]?"active-mode":""))+" svelte-xhr9hg")&&y(s,"class",h),1&n&&b!==(b=a("mode-div "+("medium"===t[0]?"active-mode":""))+" svelte-xhr9hg")&&y(v,"class",b),1&n&&_!==(_=a("mode-div "+("hard"===t[0]?"active-mode":""))+" svelte-xhr9hg")&&y(T,"class",_)},i:e,o:e,d(e){e&&u(n),k=!1,i(A)}}}function Le(e,t,n){let{mode:i}=t,{changeMode:r}=t;return e.$$set=e=>{"mode"in e&&n(0,i=e.mode),"changeMode"in e&&n(1,r=e.changeMode)},[i,r]}class xe extends K{constructor(e){super(),H(this,e,Le,Pe,s,{mode:0,changeMode:1})}}var Me=["ability","able","aboard","about","above","accept","accident","according","account","accurate","acres","across","act","action","active","activity","actual","actually","add","addition","additional","adjective","adult","adventure","advice","affect","afraid","after","afternoon","again","against","age","ago","agree","ahead","aid","air","airplane","alike","alive","all","allow","almost","alone","along","aloud","alphabet","already","also","although","am","among","amount","ancient","angle","angry","animal","announced","another","answer","ants","any","anybody","anyone","anything","anyway","anywhere","apart","apartment","appearance","apple","applied","appropriate","are","area","arm","army","around","arrange","arrangement","arrive","arrow","art","article","as","aside","ask","asleep","at","ate","atmosphere","atom","atomic","attached","attack","attempt","attention","audience","author","automobile","available","average","avoid","aware","away","baby","back","bad","badly","bag","balance","ball","balloon","band","bank","bar","bare","bark","barn","base","baseball","basic","basis","basket","bat","battle","be","bean","bear","beat","beautiful","beauty","became","because","become","becoming","bee","been","before","began","beginning","begun","behavior","behind","being","believed","bell","belong","below","belt","bend","beneath","bent","beside","best","bet","better","between","beyond","bicycle","bigger","biggest","bill","birds","birth","birthday","bit","bite","black","blank","blanket","blew","blind","block","blood","blow","blue","board","boat","body","bone","book","border","born","both","bottle","bottom","bound","bow","bowl","box","boy","brain","branch","brass","brave","bread","break","breakfast","breath","breathe","breathing","breeze","brick","bridge","brief","bright","bring","broad","broke","broken","brother","brought","brown","brush","buffalo","build","building","built","buried","burn","burst","bus","bush","business","busy","but","butter","buy","by","cabin","cage","cake","call","calm","came","camera","camp","can","canal","cannot","cap","capital","captain","captured","car","carbon","card","care","careful","carefully","carried","carry","case","cast","castle","cat","catch","cattle","caught","cause","cave","cell","cent","center","central","century","certain","certainly","chain","chair","chamber","chance","change","changing","chapter","character","characteristic","charge","chart","check","cheese","chemical","chest","chicken","chief","child","children","choice","choose","chose","chosen","church","circle","circus","citizen","city","class","classroom","claws","clay","clean","clear","clearly","climate","climb","clock","close","closely","closer","cloth","clothes","clothing","cloud","club","coach","coal","coast","coat","coffee","cold","collect","college","colony","color","column","combination","combine","come","comfortable","coming","command","common","community","company","compare","compass","complete","completely","complex","composed","composition","compound","concerned","condition","congress","connected","consider","consist","consonant","constantly","construction","contain","continent","continued","contrast","control","conversation","cook","cookies","cool","copper","copy","corn","corner","correct","correctly","cost","cotton","could","count","country","couple","courage","course","court","cover","cow","cowboy","crack","cream","create","creature","crew","crop","cross","crowd","cry","cup","curious","current","curve","customs","cut","cutting","daily","damage","dance","danger","dangerous","dark","darkness","date","daughter","dawn","day","dead","deal","dear","death","decide","declared","deep","deeply","deer","definition","degree","depend","depth","describe","desert","design","desk","detail","determine","develop","development","diagram","diameter","did","die","differ","difference","different","difficult","difficulty","dig","dinner","direct","direction","directly","dirt","dirty","disappear","discover","discovery","discuss","discussion","disease","dish","distance","distant","divide","division","do","doctor","does","dog","doing","doll","dollar","done","donkey","door","dot","double","doubt","down","dozen","draw","drawn","dream","dress","drew","dried","drink","drive","driven","driver","driving","drop","dropped","drove","dry","duck","due","dug","dull","during","dust","duty","each","eager","ear","earlier","early","earn","earth","easier","easily","east","easy","eat","eaten","edge","education","effect","effort","egg","eight","either","electric","electricity","element","elephant","eleven","else","empty","end","enemy","energy","engine","engineer","enjoy","enough","enter","entire","entirely","environment","equal","equally","equator","equipment","escape","especially","essential","establish","even","evening","event","eventually","ever","every","everybody","everyone","everything","everywhere","evidence","exact","exactly","examine","example","excellent","except","exchange","excited","excitement","exciting","exclaimed","exercise","exist","expect","experience","experiment","explain","explanation","explore","express","expression","extra","eye","face","facing","fact","factor","factory","failed","fair","fairly","fall","fallen","familiar","family","famous","far","farm","farmer","farther","fast","fastened","faster","fat","father","favorite","fear","feathers","feature","fed","feed","feel","feet","fell","fellow","felt","fence","few","fewer","field","fierce","fifteen","fifth","fifty","fight","fighting","figure","fill","film","final","finally","find","fine","finest","finger","finish","fire","fireplace","firm","first","fish","five","fix","flag","flame","flat","flew","flies","flight","floating","floor","flow","flower","fly","fog","folks","follow","food","foot","football","for","force","foreign","forest","forget","forgot","forgotten","form","former","fort","forth","forty","forward","fought","found","four","fourth","fox","frame","free","freedom","frequently","fresh","friend","friendly","frighten","frog","from","front","frozen","fruit","fuel","full","fully","fun","function","funny","fur","furniture","further","future","gain","game","garage","garden","gas","gasoline","gate","gather","gave","general","generally","gentle","gently","get","getting","giant","gift","girl","give","given","giving","glad","glass","globe","go","goes","gold","golden","gone","good","goose","got","government","grabbed","grade","gradually","grain","grandfather","grandmother","graph","grass","gravity","gray","great","greater","greatest","greatly","green","grew","ground","group","grow","grown","growth","guard","guess","guide","gulf","gun","habit","had","hair","half","halfway","hall","hand","handle","handsome","hang","happen","happened","happily","happy","harbor","hard","harder","hardly","has","hat","have","having","hay","he","headed","heading","health","heard","hearing","heart","heat","heavy","height","held","hello","help","helpful","her","herd","here","herself","hidden","hide","high","higher","highest","highway","hill","him","himself","his","history","hit","hold","hole","hollow","home","honor","hope","horn","horse","hospital","hot","hour","house","how","however","huge","human","hundred","hung","hungry","hunt","hunter","hurried","hurry","hurt","husband","ice","idea","identity","if","ill","image","imagine","immediately","importance","important","impossible","improve","in","inch","include","including","income","increase","indeed","independent","indicate","individual","industrial","industry","influence","information","inside","instance","instant","instead","instrument","interest","interior","into","introduced","invented","involved","iron","is","island","it","its","itself","jack","jar","jet","job","join","joined","journey","joy","judge","jump","jungle","just","keep","kept","key","kids","kill","kind","kitchen","knew","knife","know","knowledge","known","label","labor","lack","lady","laid","lake","lamp","land","language","large","larger","largest","last","late","later","laugh","law","lay","layers","lead","leader","leaf","learn","least","leather","leave","leaving","led","left","leg","length","lesson","let","letter","level","library","lie","life","lift","light","like","likely","limited","line","lion","lips","liquid","list","listen","little","live","living","load","local","locate","location","log","lonely","long","longer","look","loose","lose","loss","lost","lot","loud","love","lovely","low","lower","luck","lucky","lunch","lungs","lying","machine","machinery","mad","made","magic","magnet","mail","main","mainly","major","make","making","man","managed","manner","manufacturing","many","map","mark","market","married","mass","massage","master","material","mathematics","matter","may","maybe","me","meal","mean","means","meant","measure","meat","medicine","meet","melted","member","memory","men","mental","merely","met","metal","method","mice","middle","might","mighty","mile","military","milk","mill","mind","mine","minerals","minute","mirror","missing","mission","mistake","mix","mixture","model","modern","molecular","moment","money","monkey","month","mood","moon","more","morning","most","mostly","mother","motion","motor","mountain","mouse","mouth","move","movement","movie","moving","mud","muscle","music","musical","must","my","myself","mysterious","nails","name","nation","national","native","natural","naturally","nature","near","nearby","nearer","nearest","nearly","necessary","neck","needed","needle","needs","negative","neighbor","neighborhood","nervous","nest","never","new","news","newspaper","next","nice","night","nine","no","nobody","nodded","noise","none","noon","nor","north","nose","not","note","noted","nothing","notice","noun","now","number","numeral","nuts","object","observe","obtain","occasionally","occur","ocean","of","off","offer","office","officer","official","oil","old","older","oldest","on","once","one","only","onto","open","operation","opinion","opportunity","opposite","or","orange","orbit","order","ordinary","organization","organized","origin","original","other","ought","our","ourselves","out","outer","outline","outside","over","own","owner","oxygen","pack","package","page","paid","pain","paint","pair","palace","pale","pan","paper","paragraph","parallel","parent","park","part","particles","particular","particularly","partly","parts","party","pass","passage","past","path","pattern","pay","peace","pen","pencil","people","per","percent","perfect","perfectly","perhaps","period","person","personal","pet","phrase","physical","piano","pick","picture","pictured","pie","piece","pig","pile","pilot","pine","pink","pipe","pitch","place","plain","plan","plane","planet","planned","planning","plant","plastic","plate","plates","play","pleasant","please","pleasure","plenty","plural","plus","pocket","poem","poet","poetry","point","pole","police","policeman","political","pond","pony","pool","poor","popular","population","porch","port","position","positive","possible","possibly","post","pot","potatoes","pound","pour","powder","power","powerful","practical","practice","prepare","present","president","press","pressure","pretty","prevent","previous","price","pride","primitive","principal","principle","printed","private","prize","probably","problem","process","produce","product","production","program","progress","promised","proper","properly","property","protection","proud","prove","provide","public","pull","pupil","pure","purple","purpose","push","put","putting","quarter","queen","question","quick","quickly","quiet","quietly","quite","rabbit","race","radio","railroad","rain","raise","ran","ranch","range","rapidly","rate","rather","raw","rays","reach","read","reader","ready","real","realize","rear","reason","recall","receive","recent","recently","recognize","record","red","refer","refused","region","regular","related","relationship","religious","remain","remarkable","remember","remove","repeat","replace","replied","report","represent","require","research","respect","rest","result","return","review","rhyme","rhythm","rice","rich","ride","riding","right","ring","rise","rising","river","road","roar","rock","rocket","rocky","rod","roll","roof","room","root","rope","rose","rough","round","route","row","rubbed","rubber","rule","ruler","run","running","rush","sad","saddle","safe","safety","said","sail","sale","salmon","salt","same","sand","sang","sat","satellites","satisfied","save","saved","saw","say","scale","scared","scene","school","science","scientific","scientist","score","screen","sea","search","season","seat","second","secret","section","see","seed","seeing","seems","seen","seldom","select","selection","sell","send","sense","sent","sentence","separate","series","serious","serve","service","sets","setting","settle","settlers","seven","several","shade","shadow","shake","shaking","shall","shallow","shape","share","sharp","she","sheep","sheet","shelf","shells","shelter","shine","shinning","ship","shirt","shoe","shoot","shop","shore","short","shorter","shot","should","shoulder","shout","show","shown","shut","sick","sides","sight","sign","signal","silence","silent","silk","silly","silver","similar","simple","simplest","simply","since","sing","single","sink","sister","sit","sitting","situation","six","size","skill","skin","sky","slabs","slave","sleep","slept","slide","slight","slightly","slip","slipped","slope","slow","slowly","small","smaller","smallest","smell","smile","smoke","smooth","snake","snow","so","soap","social","society","soft","softly","soil","solar","sold","soldier","solid","solution","solve","some","somebody","somehow","someone","something","sometime","somewhere","son","song","soon","sort","sound","source","south","southern","space","speak","special","species","specific","speech","speed","spell","spend","spent","spider","spin","spirit","spite","split","spoken","sport","spread","spring","square","stage","stairs","stand","standard","star","stared","start","state","statement","station","stay","steady","steam","steel","steep","stems","step","stepped","stick","stiff","still","stock","stomach","stone","stood","stop","stopped","store","storm","story","stove","straight","strange","stranger","straw","stream","street","strength","stretch","strike","string","strip","strong","stronger","struck","structure","struggle","stuck","student","studied","studying","subject","substance","success","successful","such","sudden","suddenly","sugar","suggest","suit","sum","summer","sun","sunlight","supper","supply","support","suppose","sure","surface","surprise","surrounded","swam","sweet","swept","swim","swimming","swing","swung","syllable","symbol","system","table","tail","take","taken","tales","talk","tall","tank","tape","task","taste","taught","tax","tea","teach","teacher","team","tears","teeth","telephone","television","tell","temperature","ten","tent","term","terrible","test","than","thank","that","thee","them","themselves","then","theory","there","therefore","these","they","thick","thin","thing","think","third","thirty","this","those","thou","though","thought","thousand","thread","three","threw","throat","through","throughout","throw","thrown","thumb","thus","thy","tide","tie","tight","tightly","till","time","tin","tiny","tip","tired","title","to","tobacco","today","together","told","tomorrow","tone","tongue","tonight","too","took","tool","top","topic","torn","total","touch","toward","tower","town","toy","trace","track","trade","traffic","trail","train","transportation","trap","travel","treated","tree","triangle","tribe","trick","tried","trip","troops","tropical","trouble","truck","trunk","truth","try","tube","tune","turn","twelve","twenty","twice","two","type","typical","uncle","under","underline","understanding","unhappy","union","unit","universe","unknown","unless","until","unusual","up","upon","upper","upward","us","use","useful","using","usual","usually","valley","valuable","value","vapor","variety","various","vast","vegetable","verb","vertical","very","vessels","victory","view","village","visit","visitor","voice","volume","vote","vowel","voyage","wagon","wait","walk","wall","want","war","warm","warn","was","wash","waste","watch","water","wave","way","we","weak","wealth","wear","weather","week","weigh","weight","welcome","well","went","were","west","western","wet","whale","what","whatever","wheat","wheel","when","whenever","where","wherever","whether","which","while","whispered","whistle","white","who","whole","whom","whose","why","wide","widely","wife","wild","will","willing","win","wind","window","wing","winter","wire","wise","wish","with","within","without","wolf","women","won","wonder","wonderful","wood","wooden","wool","word","wore","work","worker","world","worried","worry","worse","worth","would","wrapped","write","writer","writing","written","wrong","wrote","yard","year","yellow","yes","yesterday","yet","you","young","younger","your","yourself","youth","zero","zebra","zipper","zoo","zulu"];function Ue(e){function t(){return e&&e.maxLength>1?function(){let t,i=!1;for(;!i;)t=n(),t.length<=e.maxLength&&(i=!0);return t}():n()}function n(){return Me[i(Me.length)]}function i(e){return Math.floor(Math.random()*e)}if(void 0===e)return t();"number"==typeof e&&(e={exactly:e}),e.exactly&&(e.min=e.exactly,e.max=e.exactly),"number"!=typeof e.wordsPerString&&(e.wordsPerString=1),"function"!=typeof e.formatter&&(e.formatter=e=>e),"string"!=typeof e.separator&&(e.separator=" ");for(var r=e.min+i(e.max+1-e.min),s=[],o="",a=0,c=0;c<r*e.wordsPerString;c++)a===e.wordsPerString-1?o+=e.formatter(t(),a):o+=e.formatter(t(),a)+e.separator,a++,(c+1)%e.wordsPerString==0&&(s.push(o),o="",a=0);return e.join&&(s=s.join(e.join)),s}var $e=Ue;function Fe(e,t,n){const i=e.slice();return i[19]=t[n],i[21]=n,i}function Ve(e,t,n){const i=e.slice();return i[22]=t[n],i[24]=n,i}function je(e){let t,n;return t=new Oe({props:{winGame:e[3],wpm:e[4],tryAgain:e[7]}}),{c(){j(t.$$.fragment)},m(e,i){B(t,e,i),n=!0},p(e,n){const i={};8&n&&(i.winGame=e[3]),16&n&&(i.wpm=e[4]),t.$set(i)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){F(t.$$.fragment,e),n=!1},d(e){q(t,e)}}}function Be(t){let n,i,s,o,a,c,f,g;n=new xe({props:{mode:t[5],changeMode:t[8]}});let m=t[0],v=[];for(let e=0;e<m.length;e+=1)v[e]=ze(Fe(t,m,e));return{c(){j(n.$$.fragment),i=p(),s=d("div");for(let e=0;e<v.length;e+=1)v[e].c();o=p(),a=d("div"),y(s,"class","game-environment noselect svelte-sfswy0"),y(s,"id","game-env"),y(a,"id","occlusion"),y(a,"class","svelte-sfswy0")},m(u,h){B(n,u,h),l(u,i,h),l(u,s,h);for(let e=0;e<v.length;e+=1)v[e].m(s,null);var d;l(u,o,h),l(u,a,h),c=!0,f||(d=t[6].call(null,s),g=d&&r(d.destroy)?d.destroy:e,f=!0)},p(e,t){const i={};if(32&t&&(i.mode=e[5]),n.$set(i),3&t){let n;for(m=e[0],n=0;n<m.length;n+=1){const i=Fe(e,m,n);v[n]?v[n].p(i,t):(v[n]=ze(i),v[n].c(),v[n].m(s,null))}for(;n<v.length;n+=1)v[n].d(1);v.length=m.length}},i(e){c||($(n.$$.fragment,e),c=!0)},o(e){F(n.$$.fragment,e),c=!1},d(e){q(n,e),e&&u(i),e&&u(s),h(v,e),e&&u(o),e&&u(a),f=!1,g()}}}function qe(e){let t,n,i,r=e[22]+"";return{c(){t=d("div"),n=f(r),y(t,"class","game-letter svelte-sfswy0"),y(t,"id",i=e[21]-1<0?`${e[24]}`:`${e[1][e[21]-1]+e[24]}`)},m(e,i){l(e,t,i),c(t,n)},p(e,s){1&s&&r!==(r=e[22]+"")&&v(n,r),2&s&&i!==(i=e[21]-1<0?`${e[24]}`:`${e[1][e[21]-1]+e[24]}`)&&y(t,"id",i)},d(e){e&&u(t)}}}function ze(e){let t,n,i,r=0!=e[21]&&function(e){let t,n,i;return{c(){t=d("div"),n=f(" "),y(t,"class","game-letter svelte-sfswy0"),y(t,"id",i=""+(e[1][e[21]-1]-1))},m(e,i){l(e,t,i),c(t,n)},p(e,n){2&n&&i!==(i=""+(e[1][e[21]-1]-1))&&y(t,"id",i)},d(e){e&&u(t)}}}(e),s=e[19],o=[];for(let t=0;t<s.length;t+=1)o[t]=qe(Ve(e,s,t));return{c(){t=d("div"),r&&r.c(),n=p();for(let e=0;e<o.length;e+=1)o[e].c();i=p(),y(t,"class","game-word svelte-sfswy0")},m(e,s){l(e,t,s),r&&r.m(t,null),c(t,n);for(let e=0;e<o.length;e+=1)o[e].m(t,null);c(t,i)},p(e,n){if(0!=e[21]&&r.p(e,n),3&n){let r;for(s=e[19],r=0;r<s.length;r+=1){const a=Ve(e,s,r);o[r]?o[r].p(a,n):(o[r]=qe(a),o[r].c(),o[r].m(t,i))}for(;r<o.length;r+=1)o[r].d(1);o.length=s.length}},d(e){e&&u(t),r&&r.d(),h(o,e)}}}function He(e){let t,n,i,r;const s=[Be,je],o=[];function a(e,t){return e[2]?1:0}return n=a(e),i=o[n]=s[n](e),{c(){t=d("main"),i.c()},m(e,i){l(e,t,i),o[n].m(t,null),r=!0},p(e,[r]){let c=n;n=a(e),n===c?o[n].p(e,r):(M(),F(o[c],1,1,(()=>{o[c]=null})),U(),i=o[n],i?i.p(e,r):(i=o[n]=s[n](e),i.c()),$(i,1),i.m(t,null))},i(e){r||($(i),r=!0)},o(e){F(i),r=!1},d(e){e&&u(t),o[n].d()}}}function Ke(e,t,n){let{currentRoute:i}=t,{params:r}=t;Array.prototype.random=function(){return this[Math.floor(Math.random()*this.length)]};let s,o=l(),a=o.split(" "),c=[];for(let e=0;e<a.length;e++)c.push(e-1<0?a[e].length+1:a[e].length+c[e-1]+1);function l(){let e=5;return Ae.subscribe((t=>{e=t})),$e(e).join(" ")}ke.subscribe((e=>{s=e}));let u=!1,h=!1,d=0,f=0,p=0;function g(){d=0,f=0,ke.update((()=>0)),n(2,u=!1),n(3,h=!1),o=l(),n(0,a=o.split(" ")),n(1,c=[]);for(let e=0;e<a.length;e++)c.push(e-1<0?a[e].length+1:a[e].length+c[e-1]+1);n(5,m)}let m="easy";const y={easy:5,medium:20,hard:50};return e.$$set=e=>{"currentRoute"in e&&n(9,i=e.currentRoute),"params"in e&&n(10,r=e.params)},[a,c,u,h,p,m,function(){const e=e=>{if(e.preventDefault(),!u&&(0==d&&(d=new Date),o.charAt(s)!==e.key?n(2,u=!0):(!function(e){let t=document.getElementById(s);t.classList.add("typed-letter"),t.offsetLeft<f&&t.parentElement.scrollIntoView(!0);f=t.offsetLeft}(),ke.update((e=>e+1))),s==o.length)){let e=(new Date-d)/6e4;n(4,p=Math.round(a.length/e*1e3)/1e3),n(2,u=!0),n(3,h=!0)}};return document.addEventListener("keypress",e),{destroy(){document.removeEventListener("keypress",e)}}},g,function(e){let t=document.getElementById(m);t.className=t.className.replace(" active-mode",""),document.getElementById(e.target.innerHTML).className+=" active-mode",n(5,m=e.target.innerHTML),Ae.update((()=>y[m]));for(let e=0;e<s;e++){document.getElementById(e).classList.remove("typed-letter")}g()},i,r]}Ue.wordList=Me;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
const Ge={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=r>>2,u=(3&r)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),i.push(n[l],n[u],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t}(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw Error();const c=r<<2|s>>4;if(i.push(c),64!==o){const e=s<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class We{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Je(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Xe(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function Qe(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function Ye(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Ze(){const e=Je();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}class et extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,tt.prototype.create)}}class tt{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?function(e,t){return e.replace(nt,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new et(i,o,n)}}const nt=/\{\$([^}]+)}/g;function it(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(rt(n)&&rt(s)){if(!it(n,s))return!1}else if(n!==s)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function rt(e){return null!==e&&"object"==typeof e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function st(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function ot(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function at(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}class ct{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=lt),void 0===i.error&&(i.error=lt),void 0===i.complete&&(i.complete=lt);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function lt(){}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ut(e,t=1e3,n=2){const i=t*Math.pow(n,e),r=Math.round(.5*i*(Math.random()-.5)*2);return Math.min(144e5,i+r)}
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
     */function ht(e){return e&&e._delegate?e._delegate:e}class dt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ft="[DEFAULT]";
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class pt{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new We;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e))try{this.getOrInitializeService({instanceIdentifier:ft})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===ft?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:ft:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class gt{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new pt(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var mt;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(mt||(mt={}));const yt={debug:mt.DEBUG,verbose:mt.VERBOSE,info:mt.INFO,warn:mt.WARN,error:mt.ERROR,silent:mt.SILENT},vt=mt.INFO,wt={[mt.DEBUG]:"log",[mt.VERBOSE]:"log",[mt.INFO]:"info",[mt.WARN]:"warn",[mt.ERROR]:"error"},bt=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=wt[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class It{constructor(e){this.name=e,this._logLevel=vt,this._logHandler=bt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in mt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?yt[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,mt.DEBUG,...e),this._logHandler(this,mt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,mt.VERBOSE,...e),this._logHandler(this,mt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,mt.INFO,...e),this._logHandler(this,mt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,mt.WARN,...e),this._logHandler(this,mt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,mt.ERROR,...e),this._logHandler(this,mt.ERROR,...e)}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Tt{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Et="@firebase/app",_t="0.7.11",kt=new It("@firebase/app"),At="[DEFAULT]",St={[Et]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Ct=new Map,Nt=new Map;function Rt(e,t){try{e.container.addComponent(t)}catch(n){kt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Dt(e){const t=e.name;if(Nt.has(t))return kt.debug(`There were multiple attempts to register component ${t}.`),!1;Nt.set(t,e);for(const t of Ct.values())Rt(t,e);return!0}function Ot(e,t){return e.container.getProvider(t)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Pt=new tt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Lt{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new dt("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pt.create("app-deleted",{appName:this._name})}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const xt="9.6.1";function Mt(e="[DEFAULT]"){const t=Ct.get(e);if(!t)throw Pt.create("no-app",{appName:e});return t}function Ut(e,t,n){var i;let r=null!==(i=St[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void kt.warn(e.join(" "))}Dt(new dt(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var $t;$t="",Dt(new dt("platform-logger",(e=>new Tt(e)),"PRIVATE")),Ut(Et,_t,$t),Ut(Et,_t,"esm2017"),Ut("fire-js","");
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
Ut("firebase","9.6.1","app");"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var Ft,Vt,jt=(Ft=function(e,t){!function(e){function t(e){return Array.prototype.slice.call(e)}function n(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function i(e,t,i){var r,s=new Promise((function(s,o){n(r=e[t].apply(e,i)).then(s,o)}));return s.request=r,s}function r(e,t,n){var r=i(e,t,n);return r.then((function(e){if(e)return new u(e,r.request)}))}function s(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function o(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return i(this[t],r,arguments)})}))}function a(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return this[t][i].apply(this[t],arguments)})}))}function c(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return r(this[t],i,arguments)})}))}function l(e){this._index=e}function u(e,t){this._cursor=e,this._request=t}function h(e){this._store=e}function d(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function f(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new d(n)}function p(e){this._db=e}function g(e,t,n){var r=i(indexedDB,"open",[e,t]),s=r.request;return s&&(s.onupgradeneeded=function(e){n&&n(new f(s.result,e.oldVersion,s.transaction))}),r.then((function(e){return new p(e)}))}function m(e){return i(indexedDB,"deleteDatabase",[e])}s(l,"_index",["name","keyPath","multiEntry","unique"]),o(l,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),c(l,"_index",IDBIndex,["openCursor","openKeyCursor"]),s(u,"_cursor",["direction","key","primaryKey","value"]),o(u,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(u.prototype[e]=function(){var t=this,i=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,i),n(t._request).then((function(e){if(e)return new u(e,t._request)}))}))})})),h.prototype.createIndex=function(){return new l(this._store.createIndex.apply(this._store,arguments))},h.prototype.index=function(){return new l(this._store.index.apply(this._store,arguments))},s(h,"_store",["name","keyPath","indexNames","autoIncrement"]),o(h,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),c(h,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),a(h,"_store",IDBObjectStore,["deleteIndex"]),d.prototype.objectStore=function(){return new h(this._tx.objectStore.apply(this._tx,arguments))},s(d,"_tx",["objectStoreNames","mode"]),a(d,"_tx",IDBTransaction,["abort"]),f.prototype.createObjectStore=function(){return new h(this._db.createObjectStore.apply(this._db,arguments))},s(f,"_db",["name","version","objectStoreNames"]),a(f,"_db",IDBDatabase,["deleteObjectStore","close"]),p.prototype.transaction=function(){return new d(this._db.transaction.apply(this._db,arguments))},s(p,"_db",["name","version","objectStoreNames"]),a(p,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[h,l].forEach((function(n){e in n.prototype&&(n.prototype[e.replace("open","iterate")]=function(){var n=t(arguments),i=n[n.length-1],r=this._store||this._index,s=r[e].apply(r,n.slice(0,-1));s.onsuccess=function(){i(s.result)}})}))})),[l,h].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,i=[];return new Promise((function(r){n.iterateCursor(e,(function(e){e?(i.push(e.value),void 0===t||i.length!=t?e.continue():r(i)):r(i)}))}))})})),e.openDb=g,e.deleteDb=m,Object.defineProperty(e,"__esModule",{value:!0})}(t)},Ft(Vt={exports:{}},Vt.exports),Vt.exports);const Bt="@firebase/installations",qt="0.5.4",zt=1e4,Ht="w:0.5.4",Kt="FIS_v2",Gt=36e5,Wt=new tt("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function Jt(e){return e instanceof et&&e.code.includes("request-failed")}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Xt({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function Qt(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function Yt(e,t){const n=(await t.json()).error;return Wt.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Zt({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function en(e,{refreshToken:t}){const n=Zt(e);return n.append("Authorization",function(e){return`FIS_v2 ${e}`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)),n}async function tn(e){const t=await e();return t.status>=500&&t.status<600?e():t}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function nn(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
const rn=/^[cdef][\w-]{21}$/;function sn(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e);return rn.test(t)?t:""}catch(e){return""}}function on(e){return`${e.appName}!${e.appId}`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const an=new Map;function cn(e,t){const n=on(e);ln(n,t),function(e,t){const n=function(){!un&&"BroadcastChannel"in self&&(un=new BroadcastChannel("[Firebase] FID Change"),un.onmessage=e=>{ln(e.data.key,e.data.fid)});return un}();n&&n.postMessage({key:e,fid:t});0===an.size&&un&&(un.close(),un=null)}(n,t)}function ln(e,t){const n=an.get(e);if(n)for(const e of n)e(t)}let un=null;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const hn="firebase-installations-store";let dn=null;function fn(){return dn||(dn=jt.openDb("firebase-installations-database",1,(e=>{if(0===e.oldVersion)e.createObjectStore(hn)}))),dn}async function pn(e,t){const n=on(e),i=(await fn()).transaction(hn,"readwrite"),r=i.objectStore(hn),s=await r.get(n);return await r.put(t,n),await i.complete,s&&s.fid===t.fid||cn(e,t.fid),t}async function gn(e){const t=on(e),n=(await fn()).transaction(hn,"readwrite");await n.objectStore(hn).delete(t),await n.complete}async function mn(e,t){const n=on(e),i=(await fn()).transaction(hn,"readwrite"),r=i.objectStore(hn),s=await r.get(n),o=t(s);return void 0===o?await r.delete(n):await r.put(o,n),await i.complete,!o||s&&s.fid===o.fid||cn(e,o.fid),o}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function yn(e){let t;const n=await mn(e,(n=>{const i=function(e){return bn(e||{fid:sn(),registrationStatus:0})}(n),r=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(Wt.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=async function(e,t){try{const n=await async function(e,{fid:t}){const n=Xt(e),i=Zt(e),r={fid:t,authVersion:Kt,appId:e.appId,sdkVersion:Ht},s={method:"POST",headers:i,body:JSON.stringify(r)},o=await tn((()=>fetch(n,s)));if(o.ok){const e=await o.json();return{fid:e.fid||t,registrationStatus:2,refreshToken:e.refreshToken,authToken:Qt(e.authToken)}}throw await Yt("Create Installation",o)}(e,t);return pn(e,n)}catch(n){throw Jt(n)&&409===n.customData.serverCode?await gn(e):await pn(e,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:vn(e)}:{installationEntry:t}}(e,i);return t=r.registrationPromise,r.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function vn(e){let t=await wn(e);for(;1===t.registrationStatus;)await nn(100),t=await wn(e);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await yn(e);return n||t}return t}function wn(e){return mn(e,(e=>{if(!e)throw Wt.create("installation-not-found");return bn(e)}))}function bn(e){return 1===(t=e).registrationStatus&&t.registrationTime+zt<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}async function In({appConfig:e,platformLoggerProvider:t},n){const i=function(e,{fid:t}){return`${Xt(e)}/${t}/authTokens:generate`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e,n),r=en(e,n),s=t.getImmediate({optional:!0});s&&r.append("x-firebase-client",s.getPlatformInfoString());const o={installation:{sdkVersion:Ht}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await tn((()=>fetch(i,a)));if(c.ok){return Qt(await c.json())}throw await Yt("Generate Auth Token",c)}async function Tn(e,t=!1){let n;const i=await mn(e.appConfig,(i=>{if(!_n(i))throw Wt.create("not-registered");const r=i.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Gt}(e)}(r))return i;if(1===r.requestStatus)return n=async function(e,t){let n=await En(e.appConfig);for(;1===n.authToken.requestStatus;)await nn(100),n=await En(e.appConfig);const i=n.authToken;return 0===i.requestStatus?Tn(e,t):i}(e,t),i;{if(!navigator.onLine)throw Wt.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(i);return n=async function(e,t){try{const n=await In(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await pn(e.appConfig,i),n}catch(n){if(!Jt(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await pn(e.appConfig,n)}else await gn(e.appConfig);throw n}}(e,t),t}}));return n?await n:i.authToken}function En(e){return mn(e,(e=>{if(!_n(e))throw Wt.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+zt<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}))}function _n(e){return void 0!==e&&2===e.registrationStatus}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function kn(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await yn(e);t&&await t}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(n.appConfig);return(await Tn(n,t)).token}function An(e){return Wt.create("missing-app-config-values",{valueName:e})}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Sn="installations",Cn=e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw An("App Configuration");if(!e.name)throw An("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw An(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,platformLoggerProvider:Ot(t,"platform-logger"),_delete:()=>Promise.resolve()}},Nn=e=>{const t=Ot(e.getProvider("app").getImmediate(),Sn).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:i}=await yn(t.appConfig);return i?i.catch(console.error):Tn(t).catch(console.error),n.fid}(t),getToken:e=>kn(t,e)}};Dt(new dt(Sn,Cn,"PUBLIC")),Dt(new dt("installations-internal",Nn,"PRIVATE")),Ut(Bt,qt),Ut(Bt,qt,"esm2017");
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Rn="analytics",Dn="https://www.googletagmanager.com/gtag/js",On=new It("@firebase/analytics");
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Pn(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function Ln(e,t,n,i){return async function(r,s,o){try{"event"===r?await async function(e,t,n,i,r){try{let s=[];if(r&&r.send_to){let e=r.send_to;Array.isArray(e)||(e=[e]);const i=await Pn(n);for(const n of e){const e=i.find((e=>e.measurementId===n)),r=e&&t[e.appId];if(!r){s=[];break}s.push(r)}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",i,r||{})}catch(e){On.error(e)}}(e,t,n,s,o):"config"===r?await async function(e,t,n,i,r,s){const o=i[r];try{if(o)await t[o];else{const e=(await Pn(n)).find((e=>e.measurementId===r));e&&await t[e.appId]}}catch(e){On.error(e)}e("config",r,s)}(e,t,n,i,s,o):e("set",s)}catch(e){On.error(e)}}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const xn=new tt("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const Mn=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function Un(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function $n(e,t=Mn,n){const{appId:i,apiKey:r,measurementId:s}=e.options;if(!i)throw xn.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw xn.create("no-api-key")}const o=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Vn;return setTimeout((async()=>{a.abort()}),void 0!==n?n:6e4),Fn({appId:i,apiKey:r,measurementId:s},o,a,t)}async function Fn(e,{throttleEndTimeMillis:t,backoffCount:n},i,r=Mn){const{appId:s,measurementId:o}=e;try{await function(e,t){return new Promise(((n,i)=>{const r=Math.max(t-Date.now(),0),s=setTimeout(n,r);e.addEventListener((()=>{clearTimeout(s),i(xn.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(i,t)}catch(e){if(o)return On.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${e.message}]`),{appId:s,measurementId:o};throw e}try{const t=await async function(e){var t;const{appId:n,apiKey:i}=e,r={method:"GET",headers:Un(i)},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(s,r);if(200!==o.status&&304!==o.status){let e="";try{const n=await o.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw xn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:e})}return o.json()}(e);return r.deleteThrottleMetadata(s),t}catch(t){if(!function(e){if(!(e instanceof et&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(t)){if(r.deleteThrottleMetadata(s),o)return On.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${t.message}]`),{appId:s,measurementId:o};throw t}const a=503===Number(t.customData.httpStatus)?ut(n,r.intervalMillis,30):ut(n,r.intervalMillis),c={throttleEndTimeMillis:Date.now()+a,backoffCount:n+1};return r.setThrottleMetadata(s,c),On.debug(`Calling attemptFetch again in ${a} millis`),Fn(e,c,i,r)}}class Vn{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function jn(){if("object"!=typeof indexedDB)return On.warn(xn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}catch(e){return On.warn(xn.create("indexeddb-unavailable",{errorInfo:e}).message),!1}return!0}async function Bn(e,t,n,i,r,s,o){var a;const c=$n(e);c.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&On.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>On.error(e))),t.push(c);const l=jn().then((e=>e?i.getId():void 0)),[u,h]=await Promise.all([c,l]);(function(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Dn))return t;return null})()||function(e,t){const n=document.createElement("script");n.src=`${Dn}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}(s,u.measurementId),r("js",new Date);const d=null!==(a=null==o?void 0:o.config)&&void 0!==a?a:{};return d.origin="firebase",d.update=!0,null!=h&&(d.firebase_id=h),r("config",u.measurementId,d),u.measurementId}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class qn{constructor(e){this.app=e}_delete(){return delete zn[this.app.options.appId],Promise.resolve()}}let zn={},Hn=[];const Kn={};let Gn,Wn,Jn="dataLayer",Xn=!1;function Qn(){const e=[];if(Qe()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=xn.create("invalid-analytics-context",{errorInfo:t});On.warn(n.message)}}function Yn(e,t,n){Qn();const i=e.options.appId;if(!i)throw xn.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw xn.create("no-api-key");On.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=zn[i])throw xn.create("already-exists",{id:i});if(!Xn){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(Jn);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,i,r){let s=function(...e){window[i].push(arguments)};return window[r]&&"function"==typeof window[r]&&(s=window[r]),window[r]=Ln(s,e,t,n),{gtagCore:s,wrappedGtag:window[r]}}(zn,Hn,Kn,Jn,"gtag");Wn=e,Gn=t,Xn=!0}zn[i]=Bn(e,Hn,Kn,t,Gn,Jn,n);return new qn(e)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Zn(e=Mt()){const t=Ot(e=ht(e),Rn);return t.isInitialized()?t.getImmediate():function(e,t={}){const n=Ot(e,Rn);if(n.isInitialized()){const e=n.getImmediate();if(it(t,n.getOptions()))return e;throw xn.create("already-initialized")}return n.initialize({options:t})}(e)}function ei(e,t,n,i){e=ht(e),async function(e,t,n,i,r){if(r&&r.global)e("event",n,i);else{const r=await t;e("event",n,Object.assign(Object.assign({},i),{send_to:r}))}}(Wn,zn[e.app.options.appId],t,n,i).catch((e=>On.error(e)))}const ti="@firebase/analytics",ni="0.7.4";Dt(new dt(Rn,((e,{options:t})=>Yn(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),Dt(new dt("analytics-internal",(function(e){try{const t=e.getProvider(Rn).getImmediate();return{logEvent:(e,n,i)=>ei(t,e,n,i)}}catch(e){throw xn.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),Ut(ti,ni),Ut(ti,ni,"esm2017");var ii,ri="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},si=si||{},oi=ri||self;function ai(){}function ci(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function li(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var ui="closure_uid_"+(1e9*Math.random()>>>0),hi=0;function di(e,t,n){return e.call.apply(e.bind,arguments)}function fi(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function pi(e,t,n){return(pi=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?di:fi).apply(null,arguments)}function gi(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function mi(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[n].apply(e,r)}}function yi(){this.s=this.s,this.o=this.o}var vi={};yi.prototype.s=!1,yi.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var e=function(e){return Object.prototype.hasOwnProperty.call(e,ui)&&e[ui]||(e[ui]=++hi)}(this);delete vi[e]}},yi.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const wi=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},bi=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const i=e.length,r="string"==typeof e?e.split(""):e;for(let s=0;s<i;s++)s in r&&t.call(n,r[s],s,e)};function Ii(e){return Array.prototype.concat.apply([],arguments)}function Ti(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function Ei(e){return/^[\s\xa0]*$/.test(e)}var _i,ki=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Ai(e,t){return-1!=e.indexOf(t)}function Si(e,t){return e<t?-1:e>t?1:0}e:{var Ci=oi.navigator;if(Ci){var Ni=Ci.userAgent;if(Ni){_i=Ni;break e}}_i=""}function Ri(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function Di(e){const t={};for(const n in e)t[n]=e[n];return t}var Oi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Pi(e,t){let n,i;for(let t=1;t<arguments.length;t++){for(n in i=arguments[t],i)e[n]=i[n];for(let t=0;t<Oi.length;t++)n=Oi[t],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function Li(e){return Li[" "](e),e}Li[" "]=ai;var xi,Mi,Ui=Ai(_i,"Opera"),$i=Ai(_i,"Trident")||Ai(_i,"MSIE"),Fi=Ai(_i,"Edge"),Vi=Fi||$i,ji=Ai(_i,"Gecko")&&!(Ai(_i.toLowerCase(),"webkit")&&!Ai(_i,"Edge"))&&!(Ai(_i,"Trident")||Ai(_i,"MSIE"))&&!Ai(_i,"Edge"),Bi=Ai(_i.toLowerCase(),"webkit")&&!Ai(_i,"Edge");function qi(){var e=oi.document;return e?e.documentMode:void 0}e:{var zi="",Hi=(Mi=_i,ji?/rv:([^\);]+)(\)|;)/.exec(Mi):Fi?/Edge\/([\d\.]+)/.exec(Mi):$i?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Mi):Bi?/WebKit\/(\S+)/.exec(Mi):Ui?/(?:Version)[ \/]?(\S+)/.exec(Mi):void 0);if(Hi&&(zi=Hi?Hi[1]:""),$i){var Ki=qi();if(null!=Ki&&Ki>parseFloat(zi)){xi=String(Ki);break e}}xi=zi}var Gi,Wi={};function Ji(){return function(e){var t=Wi;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=ki(String(xi)).split("."),n=ki("9").split("."),i=Math.max(t.length,n.length);for(let o=0;0==e&&o<i;o++){var r=t[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==r[0].length&&0==s[0].length)break;e=Si(0==r[1].length?0:parseInt(r[1],10),0==s[1].length?0:parseInt(s[1],10))||Si(0==r[2].length,0==s[2].length)||Si(r[2],s[2]),r=r[3],s=s[3]}while(0==e)}return 0<=e}))}if(oi.document&&$i){var Xi=qi();Gi=Xi||(parseInt(xi,10)||void 0)}else Gi=void 0;var Qi=Gi,Yi=function(){if(!oi.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{oi.addEventListener("test",ai,t),oi.removeEventListener("test",ai,t)}catch(e){}return e}();function Zi(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function er(e,t){if(Zi.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(ji){e:{try{Li(t.nodeName);var r=!0;break e}catch(e){}r=!1}r||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:tr[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&er.Z.h.call(this)}}Zi.prototype.h=function(){this.defaultPrevented=!0},mi(er,Zi);var tr={2:"touch",3:"pen",4:"mouse"};er.prototype.h=function(){er.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var nr="closure_listenable_"+(1e6*Math.random()|0),ir=0;function rr(e,t,n,i,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.ia=r,this.key=++ir,this.ca=this.fa=!1}function sr(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function or(e){this.src=e,this.g={},this.h=0}function ar(e,t){var n=t.type;if(n in e.g){var i,r=e.g[n],s=wi(r,t);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(sr(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function cr(e,t,n,i){for(var r=0;r<e.length;++r){var s=e[r];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==i)return r}return-1}or.prototype.add=function(e,t,n,i,r){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=cr(e,t,i,r);return-1<o?(t=e[o],n||(t.fa=!1)):((t=new rr(t,this.src,s,!!i,r)).fa=n,e.push(t)),t};var lr="closure_lm_"+(1e6*Math.random()|0),ur={};function hr(e,t,n,i,r){if(i&&i.once)return fr(e,t,n,i,r);if(Array.isArray(t)){for(var s=0;s<t.length;s++)hr(e,t[s],n,i,r);return null}return n=br(n),e&&e[nr]?e.N(t,n,li(i)?!!i.capture:!!i,r):dr(e,t,n,!1,i,r)}function dr(e,t,n,i,r,s){if(!t)throw Error("Invalid event type");var o=li(r)?!!r.capture:!!r,a=vr(e);if(a||(e[lr]=a=new or(e)),(n=a.add(t,n,i,o,s)).proxy)return n;if(i=function(){function e(n){return t.call(e.src,e.listener,n)}var t=yr;return e}(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)Yi||(r=o),void 0===r&&(r=!1),e.addEventListener(t.toString(),i,r);else if(e.attachEvent)e.attachEvent(mr(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}function fr(e,t,n,i,r){if(Array.isArray(t)){for(var s=0;s<t.length;s++)fr(e,t[s],n,i,r);return null}return n=br(n),e&&e[nr]?e.O(t,n,li(i)?!!i.capture:!!i,r):dr(e,t,n,!0,i,r)}function pr(e,t,n,i,r){if(Array.isArray(t))for(var s=0;s<t.length;s++)pr(e,t[s],n,i,r);else i=li(i)?!!i.capture:!!i,n=br(n),e&&e[nr]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=cr(s=e.g[t],n,i,r))&&(sr(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=vr(e))&&(t=e.g[t.toString()],e=-1,t&&(e=cr(t,n,i,r)),(n=-1<e?t[e]:null)&&gr(n))}function gr(e){if("number"!=typeof e&&e&&!e.ca){var t=e.src;if(t&&t[nr])ar(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(mr(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=vr(t))?(ar(n,e),0==n.h&&(n.src=null,t[lr]=null)):sr(e)}}}function mr(e){return e in ur?ur[e]:ur[e]="on"+e}function yr(e,t){if(e.ca)e=!0;else{t=new er(t,this);var n=e.listener,i=e.ia||e.src;e.fa&&gr(e),e=n.call(i,t)}return e}function vr(e){return(e=e[lr])instanceof or?e:null}var wr="__closure_events_fn_"+(1e9*Math.random()>>>0);function br(e){return"function"==typeof e?e:(e[wr]||(e[wr]=function(t){return e.handleEvent(t)}),e[wr])}function Ir(){yi.call(this),this.i=new or(this),this.P=this,this.I=null}function Tr(e,t){var n,i=e.I;if(i)for(n=[];i;i=i.I)n.push(i);if(e=e.P,i=t.type||t,"string"==typeof t)t=new Zi(t,e);else if(t instanceof Zi)t.target=t.target||e;else{var r=t;Pi(t=new Zi(i,e),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];r=Er(o,i,!0,t)&&r}if(r=Er(o=t.g=e,i,!0,t)&&r,r=Er(o,i,!1,t)&&r,n)for(s=0;s<n.length;s++)r=Er(o=t.g=n[s],i,!1,t)&&r}function Er(e,t,n,i){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&ar(e.i,o),r=!1!==a.call(c,i)&&r}}return r&&!i.defaultPrevented}mi(Ir,yi),Ir.prototype[nr]=!0,Ir.prototype.removeEventListener=function(e,t,n,i){pr(this,e,t,n,i)},Ir.prototype.M=function(){if(Ir.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)sr(n[i]);delete t.g[e],t.h--}}this.I=null},Ir.prototype.N=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},Ir.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};var _r=oi.JSON.stringify;function kr(){var e=Or;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Ar,Sr=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Cr),(e=>e.reset()));class Cr{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Nr(e){oi.setTimeout((()=>{throw e}),0)}function Rr(e,t){Ar||function(){var e=oi.Promise.resolve(void 0);Ar=function(){e.then(Pr)}}(),Dr||(Ar(),Dr=!0),Or.add(e,t)}var Dr=!1,Or=new class{constructor(){this.h=this.g=null}add(e,t){const n=Sr.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function Pr(){for(var e;e=kr();){try{e.h.call(e.g)}catch(e){Nr(e)}var t=Sr;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Dr=!1}function Lr(e,t){Ir.call(this),this.h=e||1,this.g=t||oi,this.j=pi(this.kb,this),this.l=Date.now()}function xr(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function Mr(e,t,n){if("function"==typeof e)n&&(e=pi(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=pi(e.handleEvent,e)}return 2147483647<Number(t)?-1:oi.setTimeout(e,t||0)}function Ur(e){e.g=Mr((()=>{e.g=null,e.i&&(e.i=!1,Ur(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}mi(Lr,Ir),(ii=Lr.prototype).da=!1,ii.S=null,ii.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Tr(this,"tick"),this.da&&(xr(this),this.start()))}},ii.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},ii.M=function(){Lr.Z.M.call(this),xr(this),delete this.g};class $r extends yi{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ur(this)}M(){super.M(),this.g&&(oi.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fr(e){yi.call(this),this.h=e,this.g={}}mi(Fr,yi);var Vr=[];function jr(e,t,n,i){Array.isArray(n)||(n&&(Vr[0]=n.toString()),n=Vr);for(var r=0;r<n.length;r++){var s=hr(t,n[r],i||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Br(e){Ri(e.g,(function(e,t){this.g.hasOwnProperty(t)&&gr(e)}),e),e.g={}}function qr(){this.g=!0}function zr(e,t,n,i){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return _r(n)}catch(e){return t}}(e,n)+(i?" "+i:"")}))}Fr.prototype.M=function(){Fr.Z.M.call(this),Br(this)},Fr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},qr.prototype.Aa=function(){this.g=!1},qr.prototype.info=function(){};var Hr={},Kr=null;function Gr(){return Kr=Kr||new Ir}function Wr(e){Zi.call(this,Hr.Ma,e)}function Jr(e){const t=Gr();Tr(t,new Wr(t,e))}function Xr(e,t){Zi.call(this,Hr.STAT_EVENT,e),this.stat=t}function Qr(e){const t=Gr();Tr(t,new Xr(t,e))}function Yr(e,t){Zi.call(this,Hr.Na,e),this.size=t}function Zr(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return oi.setTimeout((function(){e()}),t)}Hr.Ma="serverreachability",mi(Wr,Zi),Hr.STAT_EVENT="statevent",mi(Xr,Zi),Hr.Na="timingevent",mi(Yr,Zi);var es={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ts={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ns(){}function is(e){return e.h||(e.h=e.i())}function rs(){}ns.prototype.h=null;var ss,os={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function as(){Zi.call(this,"d")}function cs(){Zi.call(this,"c")}function ls(){}function us(e,t,n,i){this.l=e,this.j=t,this.m=n,this.X=i||1,this.V=new Fr(this),this.P=ds,e=Vi?125:void 0,this.W=new Lr(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new hs}function hs(){this.i=null,this.g="",this.h=!1}mi(as,Zi),mi(cs,Zi),mi(ls,ns),ls.prototype.g=function(){return new XMLHttpRequest},ls.prototype.i=function(){return{}},ss=new ls;var ds=45e3,fs={},ps={};function gs(e,t,n){e.K=1,e.v=$s(Os(t)),e.s=n,e.U=!0,ms(e,null)}function ms(e,t){e.F=Date.now(),bs(e),e.A=Os(e.v);var n=e.A,i=e.X;Array.isArray(i)||(i=[String(i)]),Qs(n.h,"t",i),e.C=0,n=e.l.H,e.h=new hs,e.g=Yo(e.l,n?t:null,!e.s),0<e.O&&(e.L=new $r(pi(e.Ia,e,e.g),e.O)),jr(e.V,e.g,"readystatechange",e.gb),t=e.H?Di(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Jr(1),function(e,t,n,i,r,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.X,e.s)}function ys(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function vs(e,t,n){let i,r=!0;for(;!e.I&&e.C<n.length;){if(i=ws(e,n),i==ps){4==t&&(e.o=4,Qr(14),r=!1),zr(e.j,e.m,null,"[Incomplete Response]");break}if(i==fs){e.o=4,Qr(15),zr(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}zr(e.j,e.m,i,null),ks(e,i)}ys(e)&&i!=ps&&i!=fs&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Qr(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.aa&&(e.aa=!0,(t=e.l).g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),zo(t),t.L=!0,Qr(11))):(zr(e.j,e.m,n,"[Invalid Chunked Response]"),_s(e),Es(e))}function ws(e,t){var n=e.C,i=t.indexOf("\n",n);return-1==i?ps:(n=Number(t.substring(n,i)),isNaN(n)?fs:(i+=1)+n>t.length?ps:(t=t.substr(i,n),e.C=i+n,t))}function bs(e){e.Y=Date.now()+e.P,Is(e,e.P)}function Is(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Zr(pi(e.eb,e),t)}function Ts(e){e.B&&(oi.clearTimeout(e.B),e.B=null)}function Es(e){0==e.l.G||e.I||Go(e.l,e)}function _s(e){Ts(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,xr(e.W),Br(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function ks(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||io(n.i,e)))if(n.I=e.N,!e.J&&io(n.i,e)&&3==n.G){try{var i=n.Ca.g.parse(t)}catch(e){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Ko(n),xo(n)}qo(n),Qr(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&0==n.A&&!n.v&&(n.v=Zr(pi(n.ab,n),6e3));if(1>=no(n.i)&&n.ka){try{n.ka()}catch(e){}n.ka=void 0}}else Jo(n,11)}else if((e.J||n.g==e)&&Ko(n),!Ei(t))for(r=n.Ca.g.parse(t),t=0;t<r.length;t++){let l=r[t];if(n.U=l[0],l=l[1],2==n.G)if("c"==l[0]){n.J=l[1],n.la=l[2];const t=l[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const r=l[4];null!=r&&(n.za=r,n.h.info("SVER="+n.za));const u=l[5];null!=u&&"number"==typeof u&&0<u&&(i=1.5*u,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=i.i;!s.g&&(Ai(e,"spdy")||Ai(e,"quic")||Ai(e,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(ro(s,s.h),s.h=null))}if(i.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.sa=e,Us(i.F,i.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=e;if((i=n).oa=Qo(i,i.H?i.la:null,i.W),o.J){so(i.i,o);var a=o,c=i.K;c&&a.setTimeout(c),a.B&&(Ts(a),bs(a)),i.g=o}else Bo(i);0<n.l.length&&$o(n)}else"stop"!=l[0]&&"close"!=l[0]||Jo(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?Jo(n,7):Lo(n):"noop"!=l[0]&&n.j&&n.j.wa(l),n.A=0)}Jr(4)}catch(e){}}function As(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(ci(e)||"string"==typeof e)bi(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(ci(e)||"string"==typeof e){n=[];for(var i=e.length,r=0;r<i;r++)n.push(r)}else for(r in n=[],i=0,e)n[i++]=r;i=function(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"==typeof e)return e.split("");if(ci(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}for(i in t=[],n=0,e)t[n++]=e[i];return t}(e),r=i.length;for(var s=0;s<r;s++)t.call(void 0,i[s],n&&n[s],e)}}function Ss(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(e)if(e instanceof Ss)for(n=e.T(),i=0;i<n.length;i++)this.set(n[i],e.get(n[i]));else for(i in e)this.set(i,e[i])}function Cs(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var i=e.g[t];Ns(e.h,i)&&(e.g[n++]=i),t++}e.g.length=n}if(e.i!=e.g.length){var r={};for(n=t=0;t<e.g.length;)Ns(r,i=e.g[t])||(e.g[n++]=i,r[i]=1),t++;e.g.length=n}}function Ns(e,t){return Object.prototype.hasOwnProperty.call(e,t)}(ii=us.prototype).setTimeout=function(e){this.P=e},ii.gb=function(e){e=e.target;const t=this.L;t&&3==No(e)?t.l():this.Ia(e)},ii.Ia=function(e){try{if(e==this.g)e:{const u=No(this.g);var t=this.g.Da();const h=this.g.ba();if(!(3>u)&&(3!=u||Vi||this.g&&(this.h.h||this.g.ga()||Ro(this.g)))){this.I||4!=u||7==t||Jr(8==t||0>=h?3:2),Ts(this);var n=this.g.ba();this.N=n;t:if(ys(this)){var i=Ro(this.g);e="";var r=i.length,s=4==No(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){_s(this),Es(this);var o="";break t}this.h.i=new oi.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:s&&t==r-1});i.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(e,t,n,i,r,s,o){e.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ei(a)){var l=a;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,Qr(12),_s(this),Es(this);break e}zr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ks(this,n)}this.U?(vs(this,u,o),Vi&&this.i&&3==u&&(jr(this.V,this.W,"tick",this.fb),this.W.start())):(zr(this.j,this.m,o,null),ks(this,o)),4==u&&_s(this),this.i&&!this.I&&(4==u?Go(this.l,this):(this.i=!1,bs(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Qr(12)):(this.o=0,Qr(13)),_s(this),Es(this)}}}catch(e){}},ii.fb=function(){if(this.g){var e=No(this.g),t=this.g.ga();this.C<t.length&&(Ts(this),vs(this,e,t),this.i&&4!=e&&bs(this))}},ii.cancel=function(){this.I=!0,_s(this)},ii.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(Jr(3),Qr(17)),_s(this),this.o=2,Es(this)):Is(this,this.Y-e)},(ii=Ss.prototype).R=function(){Cs(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},ii.T=function(){return Cs(this),this.g.concat()},ii.get=function(e,t){return Ns(this.h,e)?this.h[e]:t},ii.set=function(e,t){Ns(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},ii.forEach=function(e,t){for(var n=this.T(),i=0;i<n.length;i++){var r=n[i],s=this.get(r);e.call(t,s,r,this)}};var Rs=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ds(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Ds){this.g=void 0!==t?t:e.g,Ps(this,e.j),this.s=e.s,Ls(this,e.i),xs(this,e.m),this.l=e.l,t=e.h;var n=new Gs;n.i=t.i,t.g&&(n.g=new Ss(t.g),n.h=t.h),Ms(this,n),this.o=e.o}else e&&(n=String(e).match(Rs))?(this.g=!!t,Ps(this,n[1]||"",!0),this.s=Fs(n[2]||""),Ls(this,n[3]||"",!0),xs(this,n[4]),this.l=Fs(n[5]||"",!0),Ms(this,n[6]||"",!0),this.o=Fs(n[7]||"")):(this.g=!!t,this.h=new Gs(null,this.g))}function Os(e){return new Ds(e)}function Ps(e,t,n){e.j=n?Fs(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ls(e,t,n){e.i=n?Fs(t,!0):t}function xs(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ms(e,t,n){t instanceof Gs?(e.h=t,function(e,t){t&&!e.j&&(Ws(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Js(this,t),Qs(this,n,e))}),e)),e.j=t}(e.h,e.g)):(n||(t=Vs(t,Hs)),e.h=new Gs(t,e.g))}function Us(e,t,n){e.h.set(t,n)}function $s(e){return Us(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Fs(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Vs(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,js),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function js(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Ds.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Vs(t,Bs,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Vs(t,Bs,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(Vs(n,"/"==n.charAt(0)?zs:qs,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Vs(n,Ks)),e.join("")};var Bs=/[#\/\?@]/g,qs=/[#\?:]/g,zs=/[#\?]/g,Hs=/[#\?@]/g,Ks=/#/g;function Gs(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Ws(e){e.g||(e.g=new Ss,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),r=null;if(0<=i){var s=e[n].substring(0,i);r=e[n].substring(i+1)}else s=e[n];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Js(e,t){Ws(e),t=Ys(e,t),Ns(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,Ns((e=e.g).h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Cs(e)))}function Xs(e,t){return Ws(e),t=Ys(e,t),Ns(e.g.h,t)}function Qs(e,t,n){Js(e,t),0<n.length&&(e.i=null,e.g.set(Ys(e,t),Ti(n)),e.h+=n.length)}function Ys(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(ii=Gs.prototype).add=function(e,t){Ws(this),this.i=null,e=Ys(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},ii.forEach=function(e,t){Ws(this),this.g.forEach((function(n,i){bi(n,(function(n){e.call(t,n,i,this)}),this)}),this)},ii.T=function(){Ws(this);for(var e=this.g.R(),t=this.g.T(),n=[],i=0;i<t.length;i++)for(var r=e[i],s=0;s<r.length;s++)n.push(t[i]);return n},ii.R=function(e){Ws(this);var t=[];if("string"==typeof e)Xs(this,e)&&(t=Ii(t,this.g.get(Ys(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=Ii(t,e[n])}return t},ii.set=function(e,t){return Ws(this),this.i=null,Xs(this,e=Ys(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},ii.get=function(e,t){return e&&0<(e=this.R(e)).length?String(e[0]):t},ii.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var i=t[n],r=encodeURIComponent(String(i));i=this.R(i);for(var s=0;s<i.length;s++){var o=r;""!==i[s]&&(o+="="+encodeURIComponent(String(i[s]))),e.push(o)}}return this.i=e.join("&")};function Zs(e){this.l=e||eo,oi.PerformanceNavigationTiming?e=0<(e=oi.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(oi.g&&oi.g.Ea&&oi.g.Ea()&&oi.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var eo=10;function to(e){return!!e.h||!!e.g&&e.g.size>=e.j}function no(e){return e.h?1:e.g?e.g.size:0}function io(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function ro(e,t){e.g?e.g.add(t):e.h=t}function so(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function oo(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Ti(e.i)}function ao(){}function co(){this.g=new ao}function lo(e,t,n){const i=n||"";try{As(e,(function(e,n){let r=e;li(e)&&(r=_r(e)),t.push(i+n+"="+encodeURIComponent(r))}))}catch(e){throw t.push(i+"type="+encodeURIComponent("_badmap")),e}}function uo(e,t,n,i,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(i)}catch(e){}}function ho(e){this.l=e.$b||null,this.j=e.ib||!1}function fo(e,t){Ir.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=po,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Zs.prototype.cancel=function(){if(this.i=oo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},ao.prototype.stringify=function(e){return oi.JSON.stringify(e,void 0)},ao.prototype.parse=function(e){return oi.JSON.parse(e,void 0)},mi(ho,ns),ho.prototype.g=function(){return new fo(this.l,this.j)},ho.prototype.i=function(e){return function(){return e}}({}),mi(fo,Ir);var po=0;function go(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function mo(e){e.readyState=4,e.l=null,e.j=null,e.A=null,yo(e)}function yo(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(ii=fo.prototype).open=function(e,t){if(this.readyState!=po)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,yo(this)},ii.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||oi).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},ii.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,mo(this)),this.readyState=po},ii.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,yo(this)),this.g&&(this.readyState=3,yo(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==oi.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;go(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},ii.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?mo(this):yo(this),3==this.readyState&&go(this)}},ii.Ua=function(e){this.g&&(this.response=this.responseText=e,mo(this))},ii.Ta=function(e){this.g&&(this.response=e,mo(this))},ii.ha=function(){this.g&&mo(this)},ii.setRequestHeader=function(e,t){this.v.append(e,t)},ii.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},ii.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(fo.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var vo=oi.JSON.parse;function wo(e){Ir.call(this),this.headers=new Ss,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=bo,this.K=this.L=!1}mi(wo,Ir);var bo="",Io=/^https?$/i,To=["POST","PUT"];function Eo(e){return"content-type"==e.toLowerCase()}function _o(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,ko(e),So(e)}function ko(e){e.D||(e.D=!0,Tr(e,"complete"),Tr(e,"error"))}function Ao(e){if(e.h&&void 0!==si&&(!e.C[1]||4!=No(e)||2!=e.ba()))if(e.v&&4==No(e))Mr(e.Fa,0,e);else if(Tr(e,"readystatechange"),4==No(e)){e.h=!1;try{const a=e.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=0===a){var r=String(e.H).match(Rs)[1]||null;if(!r&&oi.self&&oi.self.location){var s=oi.self.location.protocol;r=s.substr(0,s.length-1)}i=!Io.test(r?r.toLowerCase():"")}n=i}if(n)Tr(e,"complete"),Tr(e,"success");else{e.m=6;try{var o=2<No(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.ba()+"]",ko(e)}}finally{So(e)}}}function So(e,t){if(e.g){Co(e);const n=e.g,i=e.C[0]?ai:null;e.g=null,e.C=null,t||Tr(e,"ready");try{n.onreadystatechange=i}catch(e){}}}function Co(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(oi.clearTimeout(e.A),e.A=null)}function No(e){return e.g?e.g.readyState:0}function Ro(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case bo:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Do(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=function(e){let t="";return Ri(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Us(e,t,n))}function Oo(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Po(e){this.za=0,this.l=[],this.h=new qr,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Oo("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Oo("baseRetryDelayMs",5e3,e),this.$a=Oo("retryDelaySeedMs",1e4,e),this.Ya=Oo("forwardChannelMaxRetries",2,e),this.ra=Oo("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new Zs(e&&e.concurrentRequestLimit),this.Ca=new co,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function Lo(e){if(Mo(e),3==e.G){var t=e.V++,n=Os(e.F);Us(n,"SID",e.J),Us(n,"RID",t),Us(n,"TYPE","terminate"),Vo(e,n),(t=new us(e,e.h,t,void 0)).K=2,t.v=$s(Os(n)),n=!1,oi.navigator&&oi.navigator.sendBeacon&&(n=oi.navigator.sendBeacon(t.v.toString(),"")),!n&&oi.Image&&((new Image).src=t.v,n=!0),n||(t.g=Yo(t.l,null),t.g.ea(t.v)),t.F=Date.now(),bs(t)}Xo(e)}function xo(e){e.g&&(zo(e),e.g.cancel(),e.g=null)}function Mo(e){xo(e),e.u&&(oi.clearTimeout(e.u),e.u=null),Ko(e),e.i.cancel(),e.m&&("number"==typeof e.m&&oi.clearTimeout(e.m),e.m=null)}function Uo(e,t){e.l.push(new class{constructor(e,t){this.h=e,this.g=t}}(e.Za++,t)),3==e.G&&$o(e)}function $o(e){to(e.i)||e.m||(e.m=!0,Rr(e.Ha,e),e.C=0)}function Fo(e,t){var n;n=t?t.m:e.V++;const i=Os(e.F);Us(i,"SID",e.J),Us(i,"RID",n),Us(i,"AID",e.U),Vo(e,i),e.o&&e.s&&Do(i,e.o,e.s),n=new us(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=jo(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),ro(e.i,n),gs(n,i,t)}function Vo(e,t){e.j&&As({},(function(e,n){Us(t,n,e)}))}function jo(e,t,n){n=Math.min(e.l.length,n);var i=e.j?pi(e.j.Oa,e.j,e):null;e:{var r=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=r[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=r[o].h;const a=r[o].g;if(n-=t,0>n)t=Math.max(0,r[o].h-100),s=!1;else try{lo(a,e,"req"+n+"_")}catch(e){i&&i(a)}}if(s){i=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,i}function Bo(e){e.g||e.u||(e.Y=1,Rr(e.Ga,e),e.A=0)}function qo(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=Zr(pi(e.Ga,e),Wo(e,e.A)),e.A++,!0)}function zo(e){null!=e.B&&(oi.clearTimeout(e.B),e.B=null)}function Ho(e){e.g=new us(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Os(e.oa);Us(t,"RID","rpc"),Us(t,"SID",e.J),Us(t,"CI",e.N?"0":"1"),Us(t,"AID",e.U),Vo(e,t),Us(t,"TYPE","xmlhttp"),e.o&&e.s&&Do(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=$s(Os(t)),n.s=null,n.U=!0,ms(n,e)}function Ko(e){null!=e.v&&(oi.clearTimeout(e.v),e.v=null)}function Go(e,t){var n=null;if(e.g==t){Ko(e),zo(e),e.g=null;var i=2}else{if(!io(e.i,t))return;n=t.D,so(e.i,t),i=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==i){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;Tr(i=Gr(),new Yr(i,n,t,r)),$o(e)}else Bo(e);else if(3==(r=t.o)||0==r&&0<e.I||!(1==i&&function(e,t){return!(no(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.l=t.D.concat(e.l),0):1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya)||(e.m=Zr(pi(e.Ha,e,t),Wo(e,e.C)),e.C++,0)))}(e,t)||2==i&&qo(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),r){case 1:Jo(e,5);break;case 4:Jo(e,10);break;case 3:Jo(e,6);break;default:Jo(e,2)}}function Wo(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function Jo(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var i=pi(e.jb,e);n||(n=new Ds("//www.google.com/images/cleardot.gif"),oi.location&&"http"==oi.location.protocol||Ps(n,"https"),$s(n)),function(e,t){const n=new qr;if(oi.Image){const i=new Image;i.onload=gi(uo,n,i,"TestLoadImage: loaded",!0,t),i.onerror=gi(uo,n,i,"TestLoadImage: error",!1,t),i.onabort=gi(uo,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=gi(uo,n,i,"TestLoadImage: timeout",!1,t),oi.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=e}else t(!1)}(n.toString(),i)}else Qr(2);e.G=0,e.j&&e.j.va(t),Xo(e),Mo(e)}function Xo(e){e.G=0,e.I=-1,e.j&&(0==oo(e.i).length&&0==e.l.length||(e.i.i.length=0,Ti(e.l),e.l.length=0),e.j.ua())}function Qo(e,t,n){let i=function(e){return e instanceof Ds?Os(e):new Ds(e,void 0)}(n);if(""!=i.i)t&&Ls(i,t+"."+i.i),xs(i,i.m);else{const e=oi.location;i=function(e,t,n,i){var r=new Ds(null,void 0);return e&&Ps(r,e),t&&Ls(r,t),n&&xs(r,n),i&&(r.l=i),r}(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&Ri(e.aa,(function(e,t){Us(i,t,e)})),t=e.D,n=e.sa,t&&n&&Us(i,t,n),Us(i,"VER",e.ma),Vo(e,i),i}function Yo(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ba&&!e.qa?new wo(new ho({ib:!0})):new wo(e.qa)).L=e.H,t}function Zo(){}function ea(){if($i&&!(10<=Number(Qi)))throw Error("Environmental error: no available transport.")}function ta(e,t){Ir.call(this),this.g=new Po(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!Ei(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Ei(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new ra(this)}function na(e){as.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function ia(){cs.call(this),this.status=1}function ra(e){this.g=e}(ii=wo.prototype).ea=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ss.g(),this.C=this.u?is(this.u):is(ss),this.g.onreadystatechange=pi(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void _o(this,e)}e=n||"";const r=new Ss(this.headers);i&&As(i,(function(e,t){r.set(t,e)})),i=function(e){e:{var t=Eo;const n=e.length,i="string"==typeof e?e.split(""):e;for(let r=0;r<n;r++)if(r in i&&t.call(void 0,i[r],r,e)){t=r;break e}t=-1}return 0>t?null:"string"==typeof e?e.charAt(t):e[t]}(r.T()),n=oi.FormData&&e instanceof oi.FormData,!(0<=wi(To,t))||i||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Co(this),0<this.B&&((this.K=function(e){return $i&&Ji()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=pi(this.pa,this)):this.A=Mr(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){_o(this,e)}},ii.pa=function(){void 0!==si&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Tr(this,"timeout"),this.abort(8))},ii.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Tr(this,"complete"),Tr(this,"abort"),So(this))},ii.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),So(this,!0)),wo.Z.M.call(this)},ii.Fa=function(){this.s||(this.F||this.v||this.l?Ao(this):this.cb())},ii.cb=function(){Ao(this)},ii.ba=function(){try{return 2<No(this)?this.g.status:-1}catch(e){return-1}},ii.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},ii.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),vo(t)}},ii.Da=function(){return this.m},ii.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(ii=Po.prototype).ma=8,ii.G=1,ii.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(e){}},ii.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const r=new us(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?(s=Di(s),Pi(s,this.P)):s=this.P),null===this.o&&(r.H=s),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var i=this.l[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(t+=i)){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=jo(this,r,t),Us(n=Os(this.F),"RID",e),Us(n,"CVER",22),this.D&&Us(n,"X-HTTP-Session-Id",this.D),Vo(this,n),this.o&&s&&Do(n,this.o,s),ro(this.i,r),this.Ra&&Us(n,"TYPE","init"),this.ja?(Us(n,"$req",t),Us(n,"SID","null"),r.$=!0,gs(r,n,null)):gs(r,n,t),this.G=2}}else 3==this.G&&(e?Fo(this,e):0==this.l.length||to(this.i)||Fo(this))},ii.Ga=function(){if(this.u=null,Ho(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=Zr(pi(this.bb,this),e)}},ii.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Qr(10),xo(this),Ho(this))},ii.ab=function(){null!=this.v&&(this.v=null,xo(this),qo(this),Qr(19))},ii.jb=function(e){e?(this.h.info("Successfully pinged google.com"),Qr(2)):(this.h.info("Failed to ping google.com"),Qr(1))},(ii=Zo.prototype).xa=function(){},ii.wa=function(){},ii.va=function(){},ii.ua=function(){},ii.Oa=function(){},ea.prototype.g=function(e,t){return new ta(e,t)},mi(ta,Ir),ta.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Rr(pi(e.hb,e,t))),Qr(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=Qo(e,null,e.W),$o(e)},ta.prototype.close=function(){Lo(this.g)},ta.prototype.u=function(e){if("string"==typeof e){var t={};t.__data__=e,Uo(this.g,t)}else this.v?((t={}).__data__=_r(e),Uo(this.g,t)):Uo(this.g,e)},ta.prototype.M=function(){this.g.j=null,delete this.j,Lo(this.g),delete this.g,ta.Z.M.call(this)},mi(na,as),mi(ia,cs),mi(ra,Zo),ra.prototype.xa=function(){Tr(this.g,"a")},ra.prototype.wa=function(e){Tr(this.g,new na(e))},ra.prototype.va=function(e){Tr(this.g,new ia(e))},ra.prototype.ua=function(){Tr(this.g,"b")},ea.prototype.createWebChannel=ea.prototype.g,ta.prototype.send=ta.prototype.u,ta.prototype.open=ta.prototype.m,ta.prototype.close=ta.prototype.close,es.NO_ERROR=0,es.TIMEOUT=8,es.HTTP_ERROR=6,ts.COMPLETE="complete",rs.EventType=os,os.OPEN="a",os.CLOSE="b",os.ERROR="c",os.MESSAGE="d",Ir.prototype.listen=Ir.prototype.N,wo.prototype.listenOnce=wo.prototype.O,wo.prototype.getLastError=wo.prototype.La,wo.prototype.getLastErrorCode=wo.prototype.Da,wo.prototype.getStatus=wo.prototype.ba,wo.prototype.getResponseJson=wo.prototype.Qa,wo.prototype.getResponseText=wo.prototype.ga,wo.prototype.send=wo.prototype.ea;var sa=es,oa=ts,aa=Hr,ca=10,la=11,ua=ho,ha=rs,da=wo;const fa="@firebase/firestore";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class pa{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pa.UNAUTHENTICATED=new pa(null),pa.GOOGLE_CREDENTIALS=new pa("google-credentials-uid"),pa.FIRST_PARTY=new pa("first-party-uid"),pa.MOCK_USER=new pa("mock-user");
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
let ma="9.6.1";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ya=new It("@firebase/firestore");function va(){return ya.logLevel}function wa(e,...t){if(ya.logLevel<=mt.DEBUG){const n=t.map(Ta);ya.debug(`Firestore (${ma}): ${e}`,...n)}}function ba(e,...t){if(ya.logLevel<=mt.ERROR){const n=t.map(Ta);ya.error(`Firestore (${ma}): ${e}`,...n)}}function Ia(e,...t){if(ya.logLevel<=mt.WARN){const n=t.map(Ta);ya.warn(`Firestore (${ma}): ${e}`,...n)}}function Ta(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
     */function Ea(e="Unexpected state"){const t=`FIRESTORE (${ma}) INTERNAL ASSERTION FAILED: `+e;throw ba(t),new Error(t)}function _a(e,t){e||Ea()}function ka(e,t){return e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Aa={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Sa extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ca{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Na{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ra{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(pa.UNAUTHENTICATED)))}shutdown(){}}class Da{constructor(e){this.t=e,this.currentUser=pa.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let r=new Ca;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Ca,e.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const t=r;e.enqueueRetryable((async()=>{await t.promise,await i(this.currentUser)}))},o=e=>{wa("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(wa("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Ca)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(wa("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(_a("string"==typeof t.accessToken),new Na(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return _a(null===e||"string"==typeof e),new pa(e)}}class Oa{constructor(e,t,n){this.type="FirstParty",this.user=pa.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class Pa{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new Oa(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(pa.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class La{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xa{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null}start(e,t){this.o=n=>{e.enqueueRetryable((()=>(e=>(null!=e.error&&wa("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`),t(e.token)))(n)))};const n=e=>{wa("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit((e=>n(e))),setTimeout((()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?n(e):wa("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(_a("string"==typeof e.token),new La(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
     */class Ma{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.p(e),this.T=e=>t.writeSequenceNumber(e))}p(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ua(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */Ma.I=-1;class $a{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=Ua(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<t&&(n+=e.charAt(i[r]%e.length))}return n}}function Fa(e,t){return e<t?-1:e>t?1:0}function Va(e,t,n){return e.length===t.length&&e.every(((e,i)=>n(e,t[i])))}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ja{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Sa(Aa.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Sa(Aa.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Sa(Aa.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Sa(Aa.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ja.fromMillis(Date.now())}static fromDate(e){return ja.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new ja(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Fa(this.nanoseconds,e.nanoseconds):Fa(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ba{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ba(e)}static min(){return new Ba(new ja(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function qa(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function za(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Ha(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ka{constructor(e,t,n){void 0===t?t=0:t>e.length&&Ea(),void 0===n?n=e.length-t:n>e.length-t&&Ea(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Ka.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ka?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const n=e.get(i),r=t.get(i);if(n<r)return-1;if(n>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ga extends Ka{construct(e,t,n){return new Ga(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Sa(Aa.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Ga(t)}static emptyPath(){return new Ga([])}}const Wa=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ja extends Ka{construct(e,t,n){return new Ja(e,t,n)}static isValidIdentifier(e){return Wa.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ja.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ja(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const r=()=>{if(0===n.length)throw new Sa(Aa.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;i<e.length;){const t=e[i];if("\\"===t){if(i+1===e.length)throw new Sa(Aa.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Sa(Aa.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?(s=!s,i++):"."!==t||s?(n+=t,i++):(r(),i++)}if(r(),s)throw new Sa(Aa.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ja(t)}static emptyPath(){return new Ja([])}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Xa{constructor(e){this.fields=e,e.sort(Ja.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Va(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Qa{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Qa(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Qa(t)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Fa(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qa.EMPTY_BYTE_STRING=new Qa("");const Ya=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Za(e){if(_a(!!e),"string"==typeof e){let t=0;const n=Ya.exec(e);if(_a(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:ec(e.seconds),nanos:ec(e.nanos)}}function ec(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function tc(e){return"string"==typeof e?Qa.fromBase64String(e):Qa.fromUint8Array(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function nc(e){const t=Za(e.mapValue.fields.__local_write_time__.timestampValue);return new ja(t.seconds,t.nanos)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ic(e){return null==e}function rc(e){return 0===e&&1/e==-1/0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class sc{constructor(e){this.path=e}static fromPath(e){return new sc(Ga.fromString(e))}static fromName(e){return new sc(Ga.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===Ga.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Ga.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new sc(new Ga(e.slice()))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function oc(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?function(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}(e)?4:10:Ea()}function ac(e,t){const n=oc(e);if(n!==oc(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return nc(e).isEqual(nc(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Za(e.timestampValue),i=Za(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return tc(e.bytesValue).isEqual(tc(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return ec(e.geoPointValue.latitude)===ec(t.geoPointValue.latitude)&&ec(e.geoPointValue.longitude)===ec(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return ec(e.integerValue)===ec(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=ec(e.doubleValue),i=ec(t.doubleValue);return n===i?rc(n)===rc(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return Va(e.arrayValue.values||[],t.arrayValue.values||[],ac);case 10:return function(e,t){const n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(qa(n)!==qa(i))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===i[e]||!ac(n[e],i[e])))return!1;return!0}(e,t);default:return Ea()}}function cc(e,t){return void 0!==(e.values||[]).find((e=>ac(e,t)))}function lc(e,t){const n=oc(e),i=oc(t);if(n!==i)return Fa(n,i);switch(n){case 0:return 0;case 1:return Fa(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=ec(e.integerValue||e.doubleValue),i=ec(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return uc(e.timestampValue,t.timestampValue);case 4:return uc(nc(e),nc(t));case 5:return Fa(e.stringValue,t.stringValue);case 6:return function(e,t){const n=tc(e),i=tc(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),i=t.split("/");for(let e=0;e<n.length&&e<i.length;e++){const t=Fa(n[e],i[e]);if(0!==t)return t}return Fa(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Fa(ec(e.latitude),ec(t.latitude));return 0!==n?n:Fa(ec(e.longitude),ec(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],i=t.values||[];for(let e=0;e<n.length&&e<i.length;++e){const t=lc(n[e],i[e]);if(t)return t}return Fa(n.length,i.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},i=Object.keys(n),r=t.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let e=0;e<i.length&&e<s.length;++e){const t=Fa(i[e],s[e]);if(0!==t)return t;const o=lc(n[i[e]],r[s[e]]);if(0!==o)return o}return Fa(i.length,s.length)}(e.mapValue,t.mapValue);default:throw Ea()}}function uc(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Fa(e,t);const n=Za(e),i=Za(t),r=Fa(n.seconds,i.seconds);return 0!==r?r:Fa(n.nanos,i.nanos)}function hc(e){return dc(e)}function dc(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Za(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?tc(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,sc.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const i of e.values||[])n?n=!1:t+=",",t+=dc(i);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",i=!0;for(const r of t)i?i=!1:n+=",",n+=`${r}:${dc(e.fields[r])}`;return n+"}"}(e.mapValue):Ea();var t,n}function fc(e){return!!e&&"integerValue"in e}function pc(e){return!!e&&"arrayValue"in e}function gc(e){return!!e&&"mapValue"in e}function mc(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return za(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=mc(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=mc(e.arrayValue.values[n]);return t}return Object.assign({},e)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class yc{constructor(e){this.value=e}static empty(){return new yc({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!gc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=mc(t)}setAll(e){let t=Ja.emptyPath(),n={},i=[];e.forEach(((e,r)=>{if(!t.isImmediateParentOf(r)){const e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=r.popLast()}e?n[r.lastSegment()]=mc(e):i.push(r.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,n,i)}delete(e){const t=this.field(e.popLast());gc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ac(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];gc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){za(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new yc(mc(this.value))}}function vc(e){const t=[];return za(e.fields,((e,n)=>{const i=new Ja([e]);if(gc(n)){const e=vc(n.mapValue).fields;if(0===e.length)t.push(i);else for(const n of e)t.push(i.child(n))}else t.push(i)})),new Xa(t)
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class wc{constructor(e,t,n,i,r){this.key=e,this.documentType=t,this.version=n,this.data=i,this.documentState=r}static newInvalidDocument(e){return new wc(e,0,Ba.min(),yc.empty(),0)}static newFoundDocument(e,t,n){return new wc(e,1,t,n,0)}static newNoDocument(e,t){return new wc(e,2,t,yc.empty(),0)}static newUnknownDocument(e,t){return new wc(e,3,t,yc.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yc.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yc.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof wc&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new wc(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class bc{constructor(e,t=null,n=[],i=[],r=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.R=null}}function Ic(e,t=null,n=[],i=[],r=null,s=null,o=null){return new bc(e,t,n,i,r,s,o)}function Tc(e){const t=ka(e);if(null===t.R){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>function(e){return e.field.canonicalString()+e.op.toString()+hc(e.value)}(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),ic(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=Lc(t.startAt)),t.endAt&&(e+="|ub:",e+=Lc(t.endAt)),t.R=e}return t.R}function Ec(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Mc(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(n=e.filters[r],i=t.filters[r],n.op!==i.op||!n.field.isEqual(i.field)||!ac(n.value,i.value))return!1;var n,i;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!$c(e.startAt,t.startAt)&&$c(e.endAt,t.endAt)}class _c extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.P(e,t,n):new kc(e,t,n):"array-contains"===t?new Nc(e,n):"in"===t?new Rc(e,n):"not-in"===t?new Dc(e,n):"array-contains-any"===t?new Oc(e,n):new _c(e,t,n)}static P(e,t,n){return"in"===t?new Ac(e,n):new Sc(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.v(lc(t,this.value)):null!==t&&oc(this.value)===oc(t)&&this.v(lc(t,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Ea()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class kc extends _c{constructor(e,t,n){super(e,t,n),this.key=sc.fromName(n.referenceValue)}matches(e){const t=sc.comparator(e.key,this.key);return this.v(t)}}class Ac extends _c{constructor(e,t){super(e,"in",t),this.keys=Cc("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Sc extends _c{constructor(e,t){super(e,"not-in",t),this.keys=Cc("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Cc(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>sc.fromName(e.referenceValue)))}class Nc extends _c{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return pc(t)&&cc(t.arrayValue,this.value)}}class Rc extends _c{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&cc(this.value.arrayValue,t)}}class Dc extends _c{constructor(e,t){super(e,"not-in",t)}matches(e){if(cc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!cc(this.value.arrayValue,t)}}class Oc extends _c{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!pc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>cc(this.value.arrayValue,e)))}}class Pc{constructor(e,t){this.position=e,this.before=t}}function Lc(e){return`${e.before?"b":"a"}:${e.position.map((e=>hc(e))).join(",")}`}class xc{constructor(e,t="asc"){this.field=e,this.dir=t}}function Mc(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Uc(e,t,n){let i=0;for(let r=0;r<e.position.length;r++){const s=t[r],o=e.position[r];if(i=s.field.isKeyField()?sc.comparator(sc.fromName(o.referenceValue),n.key):lc(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return e.before?i<=0:i<0}function $c(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.before!==t.before||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ac(e.position[n],t.position[n]))return!1;return!0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Fc{constructor(e,t=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.S=null,this.D=null,this.startAt,this.endAt}}function Vc(e){const t=ka(e);if(null===t.S){t.S=[];const e=function(e){for(const t of e.filters)if(t.V())return t.field;return null}(t),n=function(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}(t);if(null!==e&&null===n)e.isKeyField()||t.S.push(new xc(e)),t.S.push(new xc(Ja.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.S.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.S.push(new xc(Ja.keyField(),e))}}}return t.S}function jc(e){const t=ka(e);if(!t.D)if("F"===t.limitType)t.D=Ic(t.path,t.collectionGroup,Vc(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of Vc(t)){const t="desc"===n.dir?"asc":"desc";e.push(new xc(n.field,t))}const n=t.endAt?new Pc(t.endAt.position,!t.endAt.before):null,i=t.startAt?new Pc(t.startAt.position,!t.startAt.before):null;t.D=Ic(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}return t.D}function Bc(e,t){return Ec(jc(e),jc(t))&&e.limitType===t.limitType}function qc(e){return`${Tc(jc(e))}|lt:${e.limitType}`}function zc(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${hc(t.value)}`;var t})).join(", ")}]`),ic(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: "+Lc(e.startAt)),e.endAt&&(t+=", endAt: "+Lc(e.endAt)),`Target(${t})`}(jc(e))}; limitType=${e.limitType})`}function Hc(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):sc.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!Uc(e.startAt,Vc(e),t))&&(!e.endAt||!Uc(e.endAt,Vc(e),t))}(e,t)}function Kc(e,t,n){const i=e.field.isKeyField()?sc.comparator(t.key,n.key):function(e,t,n){const i=t.data.field(e),r=n.data.field(e);return null!==i&&null!==r?lc(i,r):Ea()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return Ea()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Gc(e,t){if(e.C){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rc(t)?"-0":t}}function Wc(e){return{integerValue:""+e}}function Jc(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!rc(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(t)?Wc(t):Gc(e,t)}
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
     */class Xc{constructor(){this._=void 0}}function Qc(e,t,n){return e instanceof el?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof tl?nl(e,t):e instanceof il?rl(e,t):function(e,t){const n=Zc(e,t),i=ol(n)+ol(e.N);return fc(n)&&fc(e.N)?Wc(i):Gc(e.k,i)}(e,t)}function Yc(e,t,n){return e instanceof tl?nl(e,t):e instanceof il?rl(e,t):n}function Zc(e,t){return e instanceof sl?fc(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class el extends Xc{}class tl extends Xc{constructor(e){super(),this.elements=e}}function nl(e,t){const n=al(t);for(const t of e.elements)n.some((e=>ac(e,t)))||n.push(t);return{arrayValue:{values:n}}}class il extends Xc{constructor(e){super(),this.elements=e}}function rl(e,t){let n=al(t);for(const t of e.elements)n=n.filter((e=>!ac(e,t)));return{arrayValue:{values:n}}}class sl extends Xc{constructor(e,t){super(),this.k=e,this.N=t}}function ol(e){return ec(e.integerValue||e.doubleValue)}function al(e){return pc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class cl{constructor(e,t){this.version=e,this.transformResults=t}}class ll{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ll}static exists(e){return new ll(void 0,e)}static updateTime(e){return new ll(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ul(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class hl{}function dl(e,t,n){e instanceof yl?function(e,t,n){const i=e.value.clone(),r=bl(e.fieldTransforms,t,n.transformResults);i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):e instanceof vl?function(e,t,n){if(!ul(e.precondition,t))return void t.convertToUnknownDocument(n.version);const i=bl(e.fieldTransforms,t,n.transformResults),r=t.data;r.setAll(wl(e)),r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function fl(e,t,n){e instanceof yl?function(e,t,n){if(!ul(e.precondition,t))return;const i=e.value.clone(),r=Il(e.fieldTransforms,n,t);i.setAll(r),t.convertToFoundDocument(ml(t),i).setHasLocalMutations()}(e,t,n):e instanceof vl?function(e,t,n){if(!ul(e.precondition,t))return;const i=Il(e.fieldTransforms,n,t),r=t.data;r.setAll(wl(e)),r.setAll(i),t.convertToFoundDocument(ml(t),r).setHasLocalMutations()}(e,t,n):function(e,t){ul(e.precondition,t)&&t.convertToNoDocument(Ba.min())}(e,t)}function pl(e,t){let n=null;for(const i of e.fieldTransforms){const e=t.data.field(i.field),r=Zc(i.transform,e||null);null!=r&&(null==n&&(n=yc.empty()),n.set(i.field,r))}return n||null}function gl(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Va(e,t,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof tl&&t instanceof tl||e instanceof il&&t instanceof il?Va(e.elements,t.elements,ac):e instanceof sl&&t instanceof sl?ac(e.N,t.N):e instanceof el&&t instanceof el}(e.transform,t.transform)}(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function ml(e){return e.isFoundDocument()?e.version:Ba.min()}class yl extends hl{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}}class vl extends hl{constructor(e,t,n,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}}function wl(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}})),t}function bl(e,t,n){const i=new Map;_a(e.length===n.length);for(let r=0;r<n.length;r++){const s=e[r],o=s.transform,a=t.data.field(s.field);i.set(s.field,Yc(o,a,n[r]))}return i}function Il(e,t,n){const i=new Map;for(const r of e){const e=r.transform,s=n.data.field(r.field);i.set(r.field,Qc(e,s,t))}return i}class Tl extends hl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class El extends hl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var _l,kl;(kl=_l||(_l={}))[kl.OK=0]="OK",kl[kl.CANCELLED=1]="CANCELLED",kl[kl.UNKNOWN=2]="UNKNOWN",kl[kl.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",kl[kl.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",kl[kl.NOT_FOUND=5]="NOT_FOUND",kl[kl.ALREADY_EXISTS=6]="ALREADY_EXISTS",kl[kl.PERMISSION_DENIED=7]="PERMISSION_DENIED",kl[kl.UNAUTHENTICATED=16]="UNAUTHENTICATED",kl[kl.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",kl[kl.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",kl[kl.ABORTED=10]="ABORTED",kl[kl.OUT_OF_RANGE=11]="OUT_OF_RANGE",kl[kl.UNIMPLEMENTED=12]="UNIMPLEMENTED",kl[kl.INTERNAL=13]="INTERNAL",kl[kl.UNAVAILABLE=14]="UNAVAILABLE",kl[kl.DATA_LOSS=15]="DATA_LOSS";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Al{constructor(e,t){this.comparator=e,this.root=t||Cl.EMPTY}insert(e,t){return new Al(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Cl.BLACK,null,null))}remove(e){return new Al(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Cl.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Sl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Sl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Sl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Sl(this.root,e,this.comparator,!0)}}class Sl{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Cl{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:Cl.RED,this.left=null!=i?i:Cl.EMPTY,this.right=null!=r?r:Cl.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,r){return new Cl(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Cl.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return Cl.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Cl.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Cl.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ea();if(this.right.isRed())throw Ea();const e=this.left.check();if(e!==this.right.check())throw Ea();return e+(this.isRed()?0:1)}}Cl.EMPTY=null,Cl.RED=!0,Cl.BLACK=!1,Cl.EMPTY=new class{constructor(){this.size=0}get key(){throw Ea()}get value(){throw Ea()}get color(){throw Ea()}get left(){throw Ea()}get right(){throw Ea()}copy(e,t,n,i,r){return this}insert(e,t,n){return new Cl(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Nl{constructor(e){this.comparator=e,this.data=new Al(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Rl(this.data.getIterator())}getIteratorFrom(e){return new Rl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Nl))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Nl(this.comparator);return t.data=e,t}}class Rl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Dl=new Al(sc.comparator);function Ol(){return Dl}const Pl=new Al(sc.comparator);function Ll(){return Pl}const xl=new Al(sc.comparator);const Ml=new Nl(sc.comparator);function Ul(...e){let t=Ml;for(const n of e)t=t.add(n);return t}const $l=new Nl(Fa);class Fl{constructor(e,t){this.databaseId=e,this.C=t}}function Vl(e,t){return e.C?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function jl(e,t){return e.C?t.toBase64():t.toUint8Array()}function Bl(e,t){return Vl(e,t.toTimestamp())}function ql(e){return _a(!!e),Ba.fromTimestamp(function(e){const t=Za(e);return new ja(t.seconds,t.nanos)}(e))}function zl(e,t){return function(e){return new Ga(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Hl(e,t){return zl(e.databaseId,t.path)}function Kl(e){const t=function(e){const t=Ga.fromString(e);return _a(function(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}(t)),t}(e);return 4===t.length?Ga.emptyPath():function(e){return _a(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}(t)}function Gl(e,t,n){return{name:Hl(e,t),fields:n.value.mapValue.fields}}function Wl(e){let t=Kl(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){_a(1===i);const e=n.from[0];e.allDescendants?r=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=Jl(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new xc(Ql(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,ic(t)?null:t}(n.limit));let c=null;n.startAt&&(c=Xl(n.startAt));let l=null;return n.endAt&&(l=Xl(n.endAt)),function(e,t,n,i,r,s,o,a){return new Fc(e,t,n,i,r,s,o,a)}(t,r,o,s,a,"F",c,l)}function Jl(e){return e?void 0!==e.unaryFilter?[Zl(e)]:void 0!==e.fieldFilter?[Yl(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>Jl(e))).reduce(((e,t)=>e.concat(t))):Ea():[]}function Xl(e){const t=!!e.before,n=e.values||[];return new Pc(n,t)}function Ql(e){return Ja.fromServerFormat(e.fieldPath)}function Yl(e){return _c.create(Ql(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ea()}}(e.fieldFilter.op),e.fieldFilter.value)}function Zl(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ql(e.unaryFilter.field);return _c.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Ql(e.unaryFilter.field);return _c.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ql(e.unaryFilter.field);return _c.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ql(e.unaryFilter.field);return _c.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Ea()}}function eu(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class tu{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ea(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new tu(((n,i)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,i)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof tu?t:tu.resolve(t)}catch(e){return tu.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):tu.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):tu.reject(t)}static resolve(e){return new tu(((t,n)=>{t(e)}))}static reject(e){return new tu(((t,n)=>{n(e)}))}static waitFor(e){return new tu(((t,n)=>{let i=0,r=0,s=!1;e.forEach((e=>{++i,e.next((()=>{++r,s&&r===i&&t()}),(e=>n(e)))})),s=!0,r===i&&t()}))}static or(e){let t=tu.resolve(!1);for(const n of e)t=t.next((e=>e?tu.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,i)=>{n.push(t.call(this,e,i))})),this.waitFor(n)}}function nu(e){return"IndexedDbTransactionError"===e.name}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class iu{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const i=this.mutations[t];i.key.isEqual(e.key)&&dl(i,e,n[t])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&fl(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&fl(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach((t=>{const n=e.get(t.key),i=n;this.applyToLocalView(i),n.isValidDocument()||i.convertToNoDocument(Ba.min())}))}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ul())}isEqual(e){return this.batchId===e.batchId&&Va(this.mutations,e.mutations,((e,t)=>gl(e,t)))&&Va(this.baseMutations,e.baseMutations,((e,t)=>gl(e,t)))}}class ru{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){_a(e.mutations.length===n.length);let i=xl;const r=e.mutations;for(let e=0;e<r.length;e++)i=i.insert(r[e].key,n[e].version);return new ru(e,t,n,i)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class su{constructor(e){this.Gt=e}}function ou(e){const t=Wl({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?function(e,t,n){return new Fc(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}(t,t.limit,"L"):t}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class au{constructor(){this.zt=new cu}addToCollectionParentIndex(e,t){return this.zt.add(t),tu.resolve()}getCollectionParents(e,t){return tu.resolve(this.zt.getEntries(t))}}class cu{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new Nl(Ga.comparator),r=!i.has(n);return this.index[t]=i.add(n),r}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new Nl(Ga.comparator)).toArray()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class lu{constructor(e){this.se=e}next(){return this.se+=2,this.se}static ie(){return new lu(0)}static re(){return new lu(-1)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function uu(e){if(e.code!==Aa.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;wa("LocalStore","Unexpectedly lost primary lease")}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class hu{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,i]of n)if(this.equalsFn(t,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(void 0!==i){for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],e))return void(i[n]=[e,t]);i.push([e,t])}else this.inner[n]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return 1===n.length?delete this.inner[t]:n.splice(i,1),!0;return!1}forEach(e){za(this.inner,((t,n)=>{for(const[t,i]of n)e(t,i)}))}isEmpty(){return Ha(this.inner)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
class du{constructor(e,t,n){this.Je=e,this.An=t,this.Jt=n}Rn(e,t){return this.An.getAllMutationBatchesAffectingDocumentKey(e,t).next((n=>this.Pn(e,t,n)))}Pn(e,t,n){return this.Je.getEntry(e,t).next((e=>{for(const t of n)t.applyToLocalView(e);return e}))}bn(e,t){e.forEach(((e,n)=>{for(const e of t)e.applyToLocalView(n)}))}vn(e,t){return this.Je.getEntries(e,t).next((t=>this.Vn(e,t).next((()=>t))))}Vn(e,t){return this.An.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>this.bn(t,e)))}getDocumentsMatchingQuery(e,t,n){return function(e){return sc.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.Sn(e,t.path):function(e){return null!==e.collectionGroup}(t)?this.Dn(e,t,n):this.Cn(e,t,n)}Sn(e,t){return this.Rn(e,new sc(t)).next((e=>{let t=Ll();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}Dn(e,t,n){const i=t.collectionGroup;let r=Ll();return this.Jt.getCollectionParents(e,i).next((s=>tu.forEach(s,(s=>{const o=function(e,t){return new Fc(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(i));return this.Cn(e,o,n).next((e=>{e.forEach(((e,t)=>{r=r.insert(e,t)}))}))})).next((()=>r))))}Cn(e,t,n){let i,r;return this.Je.getDocumentsMatchingQuery(e,t,n).next((n=>(i=n,this.An.getAllMutationBatchesAffectingQuery(e,t)))).next((t=>(r=t,this.Nn(e,r,i).next((e=>{i=e;for(const e of r)for(const t of e.mutations){const n=t.key;let r=i.get(n);null==r&&(r=wc.newInvalidDocument(n),i=i.insert(n,r)),fl(t,r,e.localWriteTime),r.isFoundDocument()||(i=i.remove(n))}}))))).next((()=>(i.forEach(((e,n)=>{Hc(t,n)||(i=i.remove(e))})),i)))}Nn(e,t,n){let i=Ul();for(const e of t)for(const t of e.mutations)t instanceof vl&&null===n.get(t.key)&&(i=i.add(t.key));let r=n;return this.Je.getEntries(e,i).next((e=>(e.forEach(((e,t)=>{t.isFoundDocument()&&(r=r.insert(e,t))})),r)))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class fu{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.kn=n,this.xn=i}static $n(e,t){let n=Ul(),i=Ul();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:i=i.add(e.doc.key)}return new fu(e,t.fromCache,n,i)}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class pu{Fn(e){this.On=e}getDocumentsMatchingQuery(e,t,n,i){return function(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}(t)||n.isEqual(Ba.min())?this.Mn(e,t):this.On.vn(e,i).next((r=>{const s=this.Ln(t,r);return(function(e){return!ic(e.limit)&&"F"===e.limitType}(t)||function(e){return!ic(e.limit)&&"L"===e.limitType}(t))&&this.Bn(t.limitType,s,i,n)?this.Mn(e,t):(va()<=mt.DEBUG&&wa("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),zc(t)),this.On.getDocumentsMatchingQuery(e,t,n).next((e=>(s.forEach((t=>{e=e.insert(t.key,t)})),e))))}))}Ln(e,t){let n=new Nl(function(e){return(t,n)=>{let i=!1;for(const r of Vc(e)){const e=Kc(r,t,n);if(0!==e)return e;i=i||r.field.isKeyField()}return 0}}(e));return t.forEach(((t,i)=>{Hc(e,i)&&(n=n.add(i))})),n}Bn(e,t,n,i){if(n.size!==t.size)return!0;const r="F"===e?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mn(e,t){return va()<=mt.DEBUG&&wa("QueryEngine","Using full collection scan to execute query:",zc(t)),this.On.getDocumentsMatchingQuery(e,t,Ba.min())}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class gu{constructor(e,t,n,i){this.persistence=e,this.Un=t,this.k=i,this.qn=new Al(Fa),this.Kn=new hu((e=>Tc(e)),Ec),this.jn=Ba.min(),this.An=e.getMutationQueue(n),this.Qn=e.getRemoteDocumentCache(),this.He=e.getTargetCache(),this.Wn=new du(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=e.getBundleCache(),this.Un.Fn(this.Wn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.qn)))}}async function mu(e,t){const n=ka(e);let i=n.An,r=n.Wn;const s=await n.persistence.runTransaction("Handle user change","readonly",(e=>{let s;return n.An.getAllMutationBatches(e).next((o=>(s=o,i=n.persistence.getMutationQueue(t),r=new du(n.Qn,i,n.persistence.getIndexManager()),i.getAllMutationBatches(e)))).next((t=>{const n=[],i=[];let o=Ul();for(const e of s){n.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return r.vn(e,o).next((e=>({Gn:e,removedBatchIds:n,addedBatchIds:i})))}))}));return n.An=i,n.Wn=r,n.Un.Fn(n.Wn),s}function yu(e,t){const n=ka(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.An.getNextMutationBatchAfterBatchId(e,t))))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class vu{constructor(e){this.k=e,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(e,t){return tu.resolve(this.Xn.get(t))}saveBundleMetadata(e,t){var n;return this.Xn.set(t.id,{id:(n=t).id,version:n.version,createTime:ql(n.createTime)}),tu.resolve()}getNamedQuery(e,t){return tu.resolve(this.Zn.get(t))}saveNamedQuery(e,t){return this.Zn.set(t.name,function(e){return{name:e.name,query:ou(e.bundledQuery),readTime:ql(e.readTime)}}(t)),tu.resolve()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class wu{constructor(){this.ts=new Nl(bu.es),this.ns=new Nl(bu.ss)}isEmpty(){return this.ts.isEmpty()}addReference(e,t){const n=new bu(e,t);this.ts=this.ts.add(n),this.ns=this.ns.add(n)}rs(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.os(new bu(e,t))}cs(e,t){e.forEach((e=>this.removeReference(e,t)))}us(e){const t=new sc(new Ga([])),n=new bu(t,e),i=new bu(t,e+1),r=[];return this.ns.forEachInRange([n,i],(e=>{this.os(e),r.push(e.key)})),r}hs(){this.ts.forEach((e=>this.os(e)))}os(e){this.ts=this.ts.delete(e),this.ns=this.ns.delete(e)}ls(e){const t=new sc(new Ga([])),n=new bu(t,e),i=new bu(t,e+1);let r=Ul();return this.ns.forEachInRange([n,i],(e=>{r=r.add(e.key)})),r}containsKey(e){const t=new bu(e,0),n=this.ts.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class bu{constructor(e,t){this.key=e,this.fs=t}static es(e,t){return sc.comparator(e.key,t.key)||Fa(e.fs,t.fs)}static ss(e,t){return Fa(e.fs,t.fs)||sc.comparator(e.key,t.key)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Iu{constructor(e,t){this.Jt=e,this.referenceDelegate=t,this.An=[],this.ds=1,this.ws=new Nl(bu.es)}checkEmpty(e){return tu.resolve(0===this.An.length)}addMutationBatch(e,t,n,i){const r=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const s=new iu(r,t,n,i);this.An.push(s);for(const t of i)this.ws=this.ws.add(new bu(t.key,r)),this.Jt.addToCollectionParentIndex(e,t.key.path.popLast());return tu.resolve(s)}lookupMutationBatch(e,t){return tu.resolve(this._s(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.gs(n),r=i<0?0:i;return tu.resolve(this.An.length>r?this.An[r]:null)}getHighestUnacknowledgedBatchId(){return tu.resolve(0===this.An.length?-1:this.ds-1)}getAllMutationBatches(e){return tu.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new bu(t,0),i=new bu(t,Number.POSITIVE_INFINITY),r=[];return this.ws.forEachInRange([n,i],(e=>{const t=this._s(e.fs);r.push(t)})),tu.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Nl(Fa);return t.forEach((e=>{const t=new bu(e,0),i=new bu(e,Number.POSITIVE_INFINITY);this.ws.forEachInRange([t,i],(e=>{n=n.add(e.fs)}))})),tu.resolve(this.ys(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let r=n;sc.isDocumentKey(r)||(r=r.child(""));const s=new bu(new sc(r),0);let o=new Nl(Fa);return this.ws.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===i&&(o=o.add(e.fs)),!0)}),s),tu.resolve(this.ys(o))}ys(e){const t=[];return e.forEach((e=>{const n=this._s(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){_a(0===this.ps(t.batchId,"removed")),this.An.shift();let n=this.ws;return tu.forEach(t.mutations,(i=>{const r=new bu(i.key,t.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.ws=n}))}ee(e){}containsKey(e,t){const n=new bu(t,0),i=this.ws.firstAfterOrEqual(n);return tu.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.An.length,tu.resolve()}ps(e,t){return this.gs(e)}gs(e){return 0===this.An.length?0:e-this.An[0].batchId}_s(e){const t=this.gs(e);return t<0||t>=this.An.length?null:this.An[t]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Tu{constructor(e,t){this.Jt=e,this.Ts=t,this.docs=new Al(sc.comparator),this.size=0}addEntry(e,t,n){const i=t.key,r=this.docs.get(i),s=r?r.size:0,o=this.Ts(t);return this.docs=this.docs.insert(i,{document:t.clone(),size:o,readTime:n}),this.size+=o-s,this.Jt.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return tu.resolve(n?n.document.clone():wc.newInvalidDocument(t))}getEntries(e,t){let n=Ol();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.clone():wc.newInvalidDocument(e))})),tu.resolve(n)}getDocumentsMatchingQuery(e,t,n){let i=Ol();const r=new sc(t.path.child("")),s=this.docs.getIteratorFrom(r);for(;s.hasNext();){const{key:e,value:{document:r,readTime:o}}=s.getNext();if(!t.path.isPrefixOf(e.path))break;o.compareTo(n)<=0||Hc(t,r)&&(i=i.insert(r.key,r.clone()))}return tu.resolve(i)}Es(e,t){return tu.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Eu(this)}getSize(e){return tu.resolve(this.size)}}class Eu extends class{constructor(){this.changes=new hu((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}getReadTime(e){const t=this.changes.get(e);return t?t.readTime:Ba.min()}addEntry(e,t){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:t})}removeEntry(e,t=null){this.assertNotApplied(),this.changes.set(e,{document:wc.newInvalidDocument(e),readTime:t})}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?tu.resolve(n.document):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}{constructor(e){super(),this.De=e}applyChanges(e){const t=[];return this.changes.forEach(((n,i)=>{i.document.isValidDocument()?t.push(this.De.addEntry(e,i.document,this.getReadTime(n))):this.De.removeEntry(n)})),tu.waitFor(t)}getFromCache(e,t){return this.De.getEntry(e,t)}getAllFromCache(e,t){return this.De.getEntries(e,t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class _u{constructor(e){this.persistence=e,this.Is=new hu((e=>Tc(e)),Ec),this.lastRemoteSnapshotVersion=Ba.min(),this.highestTargetId=0,this.As=0,this.Rs=new wu,this.targetCount=0,this.Ps=lu.ie()}forEachTarget(e,t){return this.Is.forEach(((e,n)=>t(n))),tu.resolve()}getLastRemoteSnapshotVersion(e){return tu.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return tu.resolve(this.As)}allocateTargetId(e){return this.highestTargetId=this.Ps.next(),tu.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.As&&(this.As=t),tu.resolve()}ce(e){this.Is.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ps=new lu(t),this.highestTargetId=t),e.sequenceNumber>this.As&&(this.As=e.sequenceNumber)}addTargetData(e,t){return this.ce(t),this.targetCount+=1,tu.resolve()}updateTargetData(e,t){return this.ce(t),tu.resolve()}removeTargetData(e,t){return this.Is.delete(t.target),this.Rs.us(t.targetId),this.targetCount-=1,tu.resolve()}removeTargets(e,t,n){let i=0;const r=[];return this.Is.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Is.delete(s),r.push(this.removeMatchingKeysForTargetId(e,o.targetId)),i++)})),tu.waitFor(r).next((()=>i))}getTargetCount(e){return tu.resolve(this.targetCount)}getTargetData(e,t){const n=this.Is.get(t)||null;return tu.resolve(n)}addMatchingKeys(e,t,n){return this.Rs.rs(t,n),tu.resolve()}removeMatchingKeys(e,t,n){this.Rs.cs(t,n);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach((t=>{r.push(i.markPotentiallyOrphaned(e,t))})),tu.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Rs.us(t),tu.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Rs.ls(t);return tu.resolve(n)}containsKey(e,t){return tu.resolve(this.Rs.containsKey(t))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ku{constructor(e,t){this.bs={},this.Be=new Ma(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=e(this),this.He=new _u(this),this.Jt=new au,this.Je=function(e,t){return new Tu(e,t)}(this.Jt,(e=>this.referenceDelegate.vs(e))),this.k=new su(t),this.Ye=new vu(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(e){let t=this.bs[e.toKey()];return t||(t=new Iu(this.Jt,this.referenceDelegate),this.bs[e.toKey()]=t),t}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(e,t,n){wa("MemoryPersistence","Starting transaction:",e);const i=new Au(this.Be.next());return this.referenceDelegate.Vs(),n(i).next((e=>this.referenceDelegate.Ss(i).next((()=>e)))).toPromise().then((e=>(i.raiseOnCommittedEvent(),e)))}Ds(e,t){return tu.or(Object.values(this.bs).map((n=>()=>n.containsKey(e,t))))}}class Au extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}{constructor(e){super(),this.currentSequenceNumber=e}}class Su{constructor(e){this.persistence=e,this.Cs=new wu,this.Ns=null}static ks(e){return new Su(e)}get xs(){if(this.Ns)return this.Ns;throw Ea()}addReference(e,t,n){return this.Cs.addReference(n,t),this.xs.delete(n.toString()),tu.resolve()}removeReference(e,t,n){return this.Cs.removeReference(n,t),this.xs.add(n.toString()),tu.resolve()}markPotentiallyOrphaned(e,t){return this.xs.add(t.toString()),tu.resolve()}removeTarget(e,t){this.Cs.us(t.targetId).forEach((e=>this.xs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.xs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Vs(){this.Ns=new Set}Ss(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return tu.forEach(this.xs,(n=>{const i=sc.fromPath(n);return this.$s(e,i).next((e=>{e||t.removeEntry(i)}))})).next((()=>(this.Ns=null,t.apply(e))))}updateLimboDocument(e,t){return this.$s(e,t).next((e=>{e?this.xs.delete(t.toString()):this.xs.add(t.toString())}))}vs(e){return 0}$s(e,t){return tu.or([()=>tu.resolve(this.Cs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ds(e,t)])}}class Cu{constructor(){this.activeTargetIds=$l}Ms(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ls(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Nu{constructor(){this.pi=new Cu,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.pi.Ms(e),this.Ti[e]||"not-current"}updateQueryState(e,t,n){this.Ti[e]=t}removeLocalQueryTarget(e){this.pi.Ls(e)}isLocalQueryTarget(e){return this.pi.activeTargetIds.has(e)}clearQueryState(e){delete this.Ti[e]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(e){return this.pi.activeTargetIds.has(e)}start(){return this.pi=new Cu,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ru{Ei(e){}shutdown(){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Du{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.Pi(),this.bi=[],this.vi()}Ei(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){wa("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Pi(){wa("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Ou={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Pu{constructor(e){this.Vi=e.Vi,this.Si=e.Si}Di(e){this.Ci=e}Ni(e){this.ki=e}onMessage(e){this.xi=e}close(){this.Si()}send(e){this.Vi(e)}$i(){this.Ci()}Fi(e){this.ki(e)}Oi(e){this.xi(e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Lu extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.Mi=t+"://"+e.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(e,t,n,i,r){const s=this.Ui(e,t);wa("RestConnection","Sending: ",s,n);const o={};return this.qi(o,i,r),this.Ki(e,s,o,n).then((e=>(wa("RestConnection","Received: ",e),e)),(t=>{throw Ia("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}ji(e,t,n,i,r){return this.Bi(e,t,n,i,r)}qi(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+ma,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}Ui(e,t){const n=Ou[e];return`${this.Mi}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Ki(e,t,n,i){return new Promise(((r,s)=>{const o=new da;o.listenOnce(oa.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case sa.NO_ERROR:const t=o.getResponseJson();wa("Connection","XHR received:",JSON.stringify(t)),r(t);break;case sa.TIMEOUT:wa("Connection",'RPC "'+e+'" timed out'),s(new Sa(Aa.DEADLINE_EXCEEDED,"Request time out"));break;case sa.HTTP_ERROR:const n=o.getStatus();if(wa("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Aa).indexOf(t)>=0?t:Aa.UNKNOWN}(e.status);s(new Sa(t,e.message))}else s(new Sa(Aa.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new Sa(Aa.UNAVAILABLE,"Connection failed."));break;default:Ea()}}finally{wa("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(i);o.send(t,"POST",a,n,15)}))}Qi(e,t,n){const i=[this.Mi,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=new ea,s=Gr(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new ua({})),this.qi(o.initMessageHeaders,t,n),Xe()||Ye()||Je().indexOf("Electron/")>=0||Ze()||Je().indexOf("MSAppHost/")>=0||Qe()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=i.join("");wa("Connection","Creating WebChannel: "+a,o);const c=r.createWebChannel(a,o);let l=!1,u=!1;const h=new Pu({Vi:e=>{u?wa("Connection","Not sending because WebChannel is closed:",e):(l||(wa("Connection","Opening WebChannel transport."),c.open(),l=!0),wa("Connection","WebChannel sending:",e),c.send(e))},Si:()=>c.close()}),d=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return d(c,ha.EventType.OPEN,(()=>{u||wa("Connection","WebChannel transport opened.")})),d(c,ha.EventType.CLOSE,(()=>{u||(u=!0,wa("Connection","WebChannel transport closed"),h.Fi())})),d(c,ha.EventType.ERROR,(e=>{u||(u=!0,Ia("Connection","WebChannel transport errored:",e),h.Fi(new Sa(Aa.UNAVAILABLE,"The operation could not be completed")))})),d(c,ha.EventType.MESSAGE,(e=>{var t;if(!u){const n=e.data[0];_a(!!n);const i=n,r=i.error||(null===(t=i[0])||void 0===t?void 0:t.error);if(r){wa("Connection","WebChannel received error:",r);const e=r.status;let t=function(e){const t=_l[e];if(void 0!==t)return function(e){if(void 0===e)return ba("GRPC error has no .code"),Aa.UNKNOWN;switch(e){case _l.OK:return Aa.OK;case _l.CANCELLED:return Aa.CANCELLED;case _l.UNKNOWN:return Aa.UNKNOWN;case _l.DEADLINE_EXCEEDED:return Aa.DEADLINE_EXCEEDED;case _l.RESOURCE_EXHAUSTED:return Aa.RESOURCE_EXHAUSTED;case _l.INTERNAL:return Aa.INTERNAL;case _l.UNAVAILABLE:return Aa.UNAVAILABLE;case _l.UNAUTHENTICATED:return Aa.UNAUTHENTICATED;case _l.INVALID_ARGUMENT:return Aa.INVALID_ARGUMENT;case _l.NOT_FOUND:return Aa.NOT_FOUND;case _l.ALREADY_EXISTS:return Aa.ALREADY_EXISTS;case _l.PERMISSION_DENIED:return Aa.PERMISSION_DENIED;case _l.FAILED_PRECONDITION:return Aa.FAILED_PRECONDITION;case _l.ABORTED:return Aa.ABORTED;case _l.OUT_OF_RANGE:return Aa.OUT_OF_RANGE;case _l.UNIMPLEMENTED:return Aa.UNIMPLEMENTED;case _l.DATA_LOSS:return Aa.DATA_LOSS;default:return Ea()}}(t)}(e),n=r.message;void 0===t&&(t=Aa.INTERNAL,n="Unknown error status: "+e+" with message "+r.message),u=!0,h.Fi(new Sa(t,n)),c.close()}else wa("Connection","WebChannel received:",n),h.Oi(n)}})),d(s,aa.STAT_EVENT,(e=>{e.stat===ca?wa("Connection","Detected buffering proxy"):e.stat===la&&wa("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.$i()}),0),h}}function xu(){return"undefined"!=typeof document?document:null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Mu(e){return new Fl(e,!0)}class Uu{constructor(e,t,n=1e3,i=1.5,r=6e4){this.Oe=e,this.timerId=t,this.Wi=n,this.Gi=i,this.zi=r,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(e){this.cancel();const t=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),i=Math.max(0,t-n);i>0&&wa("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Hi} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Ji=this.Oe.enqueueAfterDelay(this.timerId,i,(()=>(this.Yi=Date.now(),e()))),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class $u extends class{constructor(e,t,n,i,r,s,o,a){this.Oe=e,this.nr=n,this.sr=i,this.ir=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.rr=0,this.ar=null,this.cr=null,this.stream=null,this.ur=new Uu(e,t)}hr(){return 1===this.state||5===this.state||this.lr()}lr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&null===this.ar&&(this.ar=this.Oe.enqueueAfterDelay(this.nr,6e4,(()=>this.mr())))}gr(e){this.yr(),this.stream.send(e)}async mr(){if(this.lr())return this.close(0)}yr(){this.ar&&(this.ar.cancel(),this.ar=null)}pr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,t){this.yr(),this.pr(),this.ur.cancel(),this.rr++,4!==e?this.ur.reset():t&&t.code===Aa.RESOURCE_EXHAUSTED?(ba(t.toString()),ba("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):t&&t.code===Aa.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Tr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ni(t)}Tr(){}auth(){this.state=1;const e=this.Er(this.rr),t=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.rr===t&&this.Ir(e,n)}),(t=>{e((()=>{const e=new Sa(Aa.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Ar(e)}))}))}Ir(e,t){const n=this.Er(this.rr);this.stream=this.Rr(e,t),this.stream.Di((()=>{n((()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.sr,1e4,(()=>(this.lr()&&(this.state=3),Promise.resolve()))),this.listener.Di())))})),this.stream.Ni((e=>{n((()=>this.Ar(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}dr(){this.state=5,this.ur.Zi((async()=>{this.state=0,this.start()}))}Ar(e){return wa("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Er(e){return t=>{this.Oe.enqueueAndForget((()=>this.rr===e?t():(wa("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}{constructor(e,t,n,i,r,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,s),this.k=r,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(e,t){return this.ir.Qi("Write",e,t)}onMessage(e){if(_a(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Vr){this.ur.reset();const t=function(e,t){return e&&e.length>0?(_a(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?ql(e.updateTime):ql(t);return n.isEqual(Ba.min())&&(n=ql(t)),new cl(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=ql(e.commitTime);return this.listener.Cr(n,t)}return _a(!e.writeResults||0===e.writeResults.length),this.Vr=!0,this.listener.Nr()}kr(){const e={};e.database=function(e){return new Ga(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}(this.k),this.gr(e)}Dr(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>function(e,t){let n;if(t instanceof yl)n={update:Gl(e,t.key,t.value)};else if(t instanceof Tl)n={delete:Hl(e,t.key)};else if(t instanceof vl)n={update:Gl(e,t.key,t.data),updateMask:eu(t.fieldMask)};else{if(!(t instanceof El))return Ea();n={verify:Hl(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof el)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof tl)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof il)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof sl)return{fieldPath:t.field.canonicalString(),increment:n.N};throw Ea()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Bl(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Ea()}(e,t.precondition)),n}(this.k,e)))};this.gr(t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Fu extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.ir=n,this.k=i,this.$r=!1}Fr(){if(this.$r)throw new Sa(Aa.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(e,t,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.ir.Bi(e,t,n,i,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Aa.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Sa(Aa.UNKNOWN,e.toString())}))}ji(e,t,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.ir.ji(e,t,n,i,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Aa.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Sa(Aa.UNKNOWN,e.toString())}))}terminate(){this.$r=!0}}class Vu{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Or=0,this.Mr=null,this.Lr=!0}Br(){0===this.Or&&(this.Ur("Unknown"),this.Mr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Mr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve()))))}Kr(e){"Online"===this.state?this.Ur("Unknown"):(this.Or++,this.Or>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Ur("Offline")))}set(e){this.jr(),this.Or=0,"Online"===e&&(this.Lr=!1),this.Ur(e)}Ur(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}qr(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(ba(t),this.Lr=!1):wa("OnlineStateTracker",t)}jr(){null!==this.Mr&&(this.Mr.cancel(),this.Mr=null)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ju{constructor(e,t,n,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=r,this.Hr.Ei((e=>{n.enqueueAndForget((async()=>{zu(this)&&(wa("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=ka(e);t.Gr.add(4),await qu(t),t.Jr.set("Unknown"),t.Gr.delete(4),await Bu(t)}(this))}))})),this.Jr=new Vu(n,i)}}async function Bu(e){if(zu(e))for(const t of e.zr)await t(!0)}async function qu(e){for(const t of e.zr)await t(!1)}function zu(e){return 0===ka(e).Gr.size}async function Hu(e,t,n){if(!nu(t))throw t;e.Gr.add(1),await qu(e),e.Jr.set("Offline"),n||(n=()=>function(e){const t=ka(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.He.getLastRemoteSnapshotVersion(e)))}(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{wa("RemoteStore","Retrying IndexedDB access"),await n(),e.Gr.delete(1),await Bu(e)}))}function Ku(e,t){return t().catch((n=>Hu(e,n,t)))}async function Gu(e){const t=ka(e),n=nh(t);let i=t.Qr.length>0?t.Qr[t.Qr.length-1].batchId:-1;for(;Wu(t);)try{const e=await yu(t.localStore,i);if(null===e){0===t.Qr.length&&n._r();break}i=e.batchId,Ju(t,e)}catch(e){await Hu(t,e)}Xu(t)&&Qu(t)}function Wu(e){return zu(e)&&e.Qr.length<10}function Ju(e,t){e.Qr.push(t);const n=nh(e);n.lr()&&n.Sr&&n.Dr(t.mutations)}function Xu(e){return zu(e)&&!nh(e).hr()&&e.Qr.length>0}function Qu(e){nh(e).start()}async function Yu(e){nh(e).kr()}async function Zu(e){const t=nh(e);for(const n of e.Qr)t.Dr(n.mutations)}async function eh(e,t,n){const i=e.Qr.shift(),r=ru.from(i,t,n);await Ku(e,(()=>e.remoteSyncer.applySuccessfulWrite(r))),await Gu(e)}async function th(e,t){t&&nh(e).Sr&&await async function(e,t){if(function(e){switch(e){default:return Ea();case Aa.CANCELLED:case Aa.UNKNOWN:case Aa.DEADLINE_EXCEEDED:case Aa.RESOURCE_EXHAUSTED:case Aa.INTERNAL:case Aa.UNAVAILABLE:case Aa.UNAUTHENTICATED:return!1;case Aa.INVALID_ARGUMENT:case Aa.NOT_FOUND:case Aa.ALREADY_EXISTS:case Aa.PERMISSION_DENIED:case Aa.FAILED_PRECONDITION:case Aa.ABORTED:case Aa.OUT_OF_RANGE:case Aa.UNIMPLEMENTED:case Aa.DATA_LOSS:return!0}}(n=t.code)&&n!==Aa.ABORTED){const n=e.Qr.shift();nh(e).wr(),await Ku(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Gu(e)}var n}(e,t),Xu(e)&&Qu(e)}function nh(e){return e.Zr||(e.Zr=function(e,t,n){const i=ka(e);return i.Fr(),new $u(t,i.ir,i.authCredentials,i.appCheckCredentials,i.k,n)}(e.datastore,e.asyncQueue,{Di:Yu.bind(null,e),Ni:th.bind(null,e),Nr:Zu.bind(null,e),Cr:eh.bind(null,e)}),e.zr.push((async t=>{t?(e.Zr.wr(),await Gu(e)):(await e.Zr.stop(),e.Qr.length>0&&(wa("RemoteStore",`Stopping write stream with ${e.Qr.length} pending writes`),e.Qr=[]))}))),e.Zr
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class ih{constructor(e,t,n,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new Ca,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,i,r){const s=Date.now()+n,o=new ih(e,t,s,i,r);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Sa(Aa.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rh(e,t){if(ba("AsyncQueue",`${t}: ${e}`),nu(e))return new Sa(Aa.UNAVAILABLE,`${t}: ${e}`);throw e}class sh{constructor(){this.queries=new hu((e=>qc(e)),Bc),this.onlineState="Unknown",this.io=new Set}}class oh{constructor(e,t,n,i,r,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.Fo={},this.Oo=new hu((e=>qc(e)),Bc),this.Mo=new Map,this.Lo=new Set,this.Bo=new Al(sc.comparator),this.Uo=new Map,this.qo=new wu,this.Ko={},this.jo=new Map,this.Qo=lu.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return!0===this.Wo}}async function ah(e,t,n){const i=function(e){const t=ka(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=lh.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=uh.bind(null,t),t}(e);try{const e=await function(e,t){const n=ka(e),i=ja.now(),r=t.reduce(((e,t)=>e.add(t.key)),Ul());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>n.Wn.vn(e,r).next((r=>{s=r;const o=[];for(const e of t){const t=pl(e,s.get(e.key));null!=t&&o.push(new vl(e.key,t,vc(t.value.mapValue),ll.exists(!0)))}return n.An.addMutationBatch(e,i,o,t)})))).then((e=>(e.applyToLocalDocumentSet(s),{batchId:e.batchId,changes:s})))}(i.localStore,t);i.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let i=e.Ko[e.currentUser.toKey()];i||(i=new Al(Fa)),i=i.insert(t,n),e.Ko[e.currentUser.toKey()]=i}(i,e.batchId,n),await fh(i,e.changes),await Gu(i.remoteStore)}catch(e){const t=rh(e,"Failed to persist write");n.reject(t)}}function ch(e,t,n){const i=ka(e);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const e=[];i.Oo.forEach(((n,i)=>{const r=i.view.ro(t);r.snapshot&&e.push(r.snapshot)})),function(e,t){const n=ka(e);n.onlineState=t;let i=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.ro(t)&&(i=!0)})),i&&function(e){e.io.forEach((e=>{e.next()}))}(n)}(i.eventManager,t),e.length&&i.Fo.Pr(e),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function lh(e,t){const n=ka(e),i=t.batch.batchId;try{const e=await function(e,t){const n=ka(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const i=t.batch.keys(),r=n.Qn.newChangeBuffer({trackRemovals:!0});return function(e,t,n,i){const r=n.batch,s=r.keys();let o=tu.resolve();return s.forEach((e=>{o=o.next((()=>i.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);_a(null!==s),t.version.compareTo(s)<0&&(r.applyToRemoteDocument(t,n),t.isValidDocument()&&i.addEntry(t,n.commitVersion))}))})),o.next((()=>e.An.removeMutationBatch(t,r)))}(n,e,t,r).next((()=>r.apply(e))).next((()=>n.An.performConsistencyCheck(e))).next((()=>n.Wn.vn(e,i)))}))}(n.localStore,t);dh(n,i,null),hh(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await fh(n,e)}catch(e){await uu(e)}}async function uh(e,t,n){const i=ka(e);try{const e=await function(e,t){const n=ka(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let i;return n.An.lookupMutationBatch(e,t).next((t=>(_a(null!==t),i=t.keys(),n.An.removeMutationBatch(e,t)))).next((()=>n.An.performConsistencyCheck(e))).next((()=>n.Wn.vn(e,i)))}))}(i.localStore,t);dh(i,t,n),hh(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await fh(i,e)}catch(n){await uu(n)}}function hh(e,t){(e.jo.get(t)||[]).forEach((e=>{e.resolve()})),e.jo.delete(t)}function dh(e,t,n){const i=ka(e);let r=i.Ko[i.currentUser.toKey()];if(r){const e=r.get(t);e&&(n?e.reject(n):e.resolve(),r=r.remove(t)),i.Ko[i.currentUser.toKey()]=r}}async function fh(e,t,n){const i=ka(e),r=[],s=[],o=[];i.Oo.isEmpty()||(i.Oo.forEach(((e,a)=>{o.push(i.Go(a,t,n).then((e=>{if(e){i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),r.push(e);const t=fu.$n(a.targetId,e);s.push(t)}})))})),await Promise.all(o),i.Fo.Pr(r),await async function(e,t){const n=ka(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>tu.forEach(t,(t=>tu.forEach(t.kn,(i=>n.persistence.referenceDelegate.addReference(e,t.targetId,i))).next((()=>tu.forEach(t.xn,(i=>n.persistence.referenceDelegate.removeReference(e,t.targetId,i)))))))))}catch(e){if(!nu(e))throw e;wa("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.qn.get(t),i=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(i);n.qn=n.qn.insert(t,r)}}}(i.localStore,s))}async function ph(e,t){const n=ka(e);if(!n.currentUser.isEqual(t)){wa("SyncEngine","User change. New user:",t.toKey());const e=await mu(n.localStore,t);n.currentUser=t,function(e,t){e.jo.forEach((e=>{e.forEach((e=>{e.reject(new Sa(Aa.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),e.jo.clear()}(n),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await fh(n,e.Gn)}}class gh{constructor(){this.synchronizeTabs=!1}async initialize(e){this.k=Mu(e.databaseInfo.databaseId),this.sharedClientState=this.Jo(e),this.persistence=this.Yo(e),await this.persistence.start(),this.gcScheduler=this.Xo(e),this.localStore=this.Zo(e)}Xo(e){return null}Zo(e){return function(e,t,n,i){return new gu(e,t,n,i)}(this.persistence,new pu,e.initialUser,this.k)}Yo(e){return new ku(Su.ks,this.k)}Jo(e){return new Nu}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class mh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>ch(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=ph.bind(null,this.syncEngine),await async function(e,t){const n=ka(e);t?(n.Gr.delete(2),await Bu(n)):t||(n.Gr.add(2),await qu(n),n.Jr.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new sh}createDatastore(e){const t=Mu(e.databaseInfo.databaseId),n=(i=e.databaseInfo,new Lu(i));var i;return function(e,t,n,i){return new Fu(e,t,n,i)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,i=e.asyncQueue,r=e=>ch(this.syncEngine,e,0),s=Du.bt()?new Du:new Ru,new ju(t,n,i,r,s);var t,n,i,r,s}createSyncEngine(e,t){return function(e,t,n,i,r,s,o){const a=new oh(e,t,n,i,r,s);return o&&(a.Wo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=ka(e);wa("RemoteStore","RemoteStore shutting down."),t.Gr.add(5),await qu(t),t.Hr.shutdown(),t.Jr.set("Unknown")}(this.remoteStore)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class yh{constructor(e,t,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=pa.UNAUTHENTICATED,this.clientId=$a.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{wa("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(()=>Promise.resolve()))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Sa(Aa.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ca;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=rh(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function vh(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){return e.offlineComponents||(wa("FirestoreClient","Using default OfflineComponentProvider"),await async function(e,t){e.asyncQueue.verifyOperationInProgress(),wa("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener((async e=>{i.isEqual(e)||(await mu(t.localStore,e),i=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}(e,new gh)),e.offlineComponents}(e);wa("FirestoreClient","Initializing OnlineComponentProvider");const i=await e.getConfiguration();await t.initialize(n,i),e.setCredentialChangeListener((e=>async function(e,t){const n=ka(e);n.asyncQueue.verifyOperationInProgress(),wa("RemoteStore","RemoteStore received new credentials");const i=zu(n);n.Gr.add(3),await qu(n),i&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Gr.delete(3),await Bu(n)}(t.remoteStore,e))),e.onlineComponents=t}function wh(e){return async function(e){return e.onlineComponents||(wa("FirestoreClient","Using default OnlineComponentProvider"),await vh(e,new mh)),e.onlineComponents}(e).then((e=>e.syncEngine))}class bh{constructor(e,t,n,i,r,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ih{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Ih&&e.projectId===this.projectId&&e.database===this.database}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Th=new Map;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Eh(e,t,n){if(!n)throw new Sa(Aa.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function _h(e){if(!sc.isDocumentKey(e))throw new Sa(Aa.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function kh(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Ea()}function Ah(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Sa(Aa.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=kh(e);throw new Sa(Aa.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Sh{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new Sa(Aa.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Sa(Aa.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,i){if(!0===t&&!0===i)throw new Sa(Aa.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ch{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sh({}),this._settingsFrozen=!1,e instanceof Ih?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Sa(Aa.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ih(e.options.projectId)}(e))}get app(){if(!this._app)throw new Sa(Aa.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Sa(Aa.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sh(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Ra;switch(e.type){case"gapi":const t=e.client;return _a(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new Pa(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new Sa(Aa.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Th.get(e);t&&(wa("ComponentProvider","Removing Datastore"),Th.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Nh{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dh(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Nh(this.firestore,e,this._key)}}class Rh{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Rh(this.firestore,e,this._query)}}class Dh extends Rh{constructor(e,t,n){super(e,t,function(e){return new Fc(e)}(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Nh(this.firestore,null,new sc(e))}withConverter(e){return new Dh(this.firestore,e,this._path)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Oh{constructor(){this.ma=Promise.resolve(),this.ga=[],this.ya=!1,this.pa=[],this.Ta=null,this.Ea=!1,this.Ia=!1,this.Aa=[],this.ur=new Uu(this,"async_queue_retry"),this.Ra=()=>{const e=xu();e&&wa("AsyncQueue","Visibility state changed to "+e.visibilityState),this.ur.er()};const e=xu();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Ra)}get isShuttingDown(){return this.ya}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pa(),this.ba(e)}enterRestrictedMode(e){if(!this.ya){this.ya=!0,this.Ia=e||!1;const t=xu();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Ra)}}enqueue(e){if(this.Pa(),this.ya)return new Promise((()=>{}));const t=new Ca;return this.ba((()=>this.ya&&this.Ia?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.ga.push(e),this.va())))}async va(){if(0!==this.ga.length){try{await this.ga[0](),this.ga.shift(),this.ur.reset()}catch(e){if(!nu(e))throw e;wa("AsyncQueue","Operation failed with retryable error: "+e)}this.ga.length>0&&this.ur.Zi((()=>this.va()))}}ba(e){const t=this.ma.then((()=>(this.Ea=!0,e().catch((e=>{this.Ta=e,this.Ea=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e);throw ba("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Ea=!1,e))))));return this.ma=t,t}enqueueAfterDelay(e,t,n){this.Pa(),this.Aa.indexOf(e)>-1&&(t=0);const i=ih.createAndSchedule(this,e,t,n,(e=>this.Va(e)));return this.pa.push(i),i}Pa(){this.Ta&&Ea()}verifyOperationInProgress(){}async Sa(){let e;do{e=this.ma,await e}while(e!==this.ma)}Da(e){for(const t of this.pa)if(t.timerId===e)return!0;return!1}Ca(e){return this.Sa().then((()=>{this.pa.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.pa)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Sa()}))}Na(e){this.Aa.push(e)}Va(e){const t=this.pa.indexOf(e);this.pa.splice(t,1)}}class Ph extends Ch{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new Oh,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Lh(this),this._firestoreClient.terminate()}}function Lh(e){var t;const n=e._freezeSettings(),i=function(e,t,n,i){return new bh(e,t,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new yh(e._authCredentials,e._appCheckCredentials,e._queue,i)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
     */class xh{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Sa(Aa.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ja(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Mh{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Mh(Qa.fromBase64String(e))}catch(e){throw new Sa(Aa.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Mh(Qa.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Uh{constructor(e){this._methodName=e}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class $h{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Sa(Aa.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Sa(Aa.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Fa(this._lat,e._lat)||Fa(this._long,e._long)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Fh=/^__.*__$/;class Vh{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new vl(e,this.data,this.fieldMask,t,this.fieldTransforms):new yl(e,this.data,t,this.fieldTransforms)}}function jh(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ea()}}class Bh{constructor(e,t,n,i,r,s){this.settings=e,this.databaseId=t,this.k=n,this.ignoreUndefinedProperties=i,void 0===r&&this.ka(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get xa(){return this.settings.xa}$a(e){return new Bh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Fa(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.$a({path:n,Oa:!1});return i.Ma(e),i}La(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.$a({path:n,Oa:!1});return i.ka(),i}Ba(e){return this.$a({path:void 0,Oa:!0})}Ua(e){return Yh(e,this.settings.methodName,this.settings.qa||!1,this.path,this.settings.Ka)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}ka(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ma(this.path.get(e))}Ma(e){if(0===e.length)throw this.Ua("Document fields must not be empty");if(jh(this.xa)&&Fh.test(e))throw this.Ua('Document fields cannot begin and end with "__"')}}class qh{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.k=n||Mu(e)}ja(e,t,n,i=!1){return new Bh({xa:e,methodName:t,Ka:n,path:Ja.emptyPath(),Oa:!1,qa:i},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function zh(e){const t=e._freezeSettings(),n=Mu(e._databaseId);return new qh(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Hh(e,t,n,i,r,s={}){const o=e.ja(s.merge||s.mergeFields?2:0,t,n,r);Jh("Data must be an object, but it was:",o,i);const a=Gh(i,o);let c,l;if(s.merge)c=new Xa(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const i of s.mergeFields){const r=Xh(t,i,n);if(!o.contains(r))throw new Sa(Aa.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);Zh(e,r)||e.push(r)}c=new Xa(e),l=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,l=o.fieldTransforms;return new Vh(new yc(a),c,l)}function Kh(e,t){if(Wh(e=ht(e)))return Jh("Unsupported field value:",t,e),Gh(e,t);if(e instanceof Uh)return function(e,t){if(!jh(t.xa))throw t.Ua(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Ua(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Oa&&4!==t.xa)throw t.Ua("Nested arrays are not supported");return function(e,t){const n=[];let i=0;for(const r of e){let e=Kh(r,t.Ba(i));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),i++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=ht(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Jc(t.k,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=ja.fromDate(e);return{timestampValue:Vl(t.k,n)}}if(e instanceof ja){const n=new ja(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Vl(t.k,n)}}if(e instanceof $h)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Mh)return{bytesValue:jl(t.k,e._byteString)};if(e instanceof Nh){const n=t.databaseId,i=e.firestore._databaseId;if(!i.isEqual(n))throw t.Ua(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:zl(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Ua(`Unsupported field value: ${kh(e)}`)}(e,t)}function Gh(e,t){const n={};return Ha(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):za(e,((e,i)=>{const r=Kh(i,t.Fa(e));null!=r&&(n[e]=r)})),{mapValue:{fields:n}}}function Wh(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof ja||e instanceof $h||e instanceof Mh||e instanceof Nh||e instanceof Uh)}function Jh(e,t,n){if(!Wh(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const i=kh(n);throw"an object"===i?t.Ua(e+" a custom object"):t.Ua(e+" "+i)}}function Xh(e,t,n){if((t=ht(t))instanceof xh)return t._internalPath;if("string"==typeof t)return function(e,t,n){if(t.search(Qh)>=0)throw Yh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new xh(...t.split("."))._internalPath}catch(i){throw Yh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}(e,t);throw Yh("Field path arguments must be of type string or FieldPath.",e,!1,void 0,n)}const Qh=new RegExp("[~\\*/\\[\\]]");function Yh(e,t,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new Sa(Aa.INVALID_ARGUMENT,a+e+c)}function Zh(e,t){return e.some((e=>e.isEqual(t)))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ed(e,t,n){e=Ah(e,Nh);const i=Ah(e.firestore,Ph),r=function(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}(e.converter,t,n);return function(e,t){return function(e,t){const n=new Ca;return e.asyncQueue.enqueueAndForget((async()=>ah(await wh(e),t,n))),n.promise}(function(e){return e._firestoreClient||Lh(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}(e),t)}(i,[Hh(zh(i),"setDoc",e._key,r,null!==e.converter,n).toMutation(e._key,ll.none())])}
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
function td(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}function nd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}!function(e,t=!0){ma="9.6.1",Dt(new dt("firestore",((e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=new Ph(i,new Da(e.getProvider("auth-internal")),new xa(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),r._setSettings(n),r}),"PUBLIC")),Ut(fa,"3.4.1",e),Ut(fa,"3.4.1","esm2017")}();const id=nd,rd=new tt("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),sd=new It("@firebase/auth");function od(e,...t){sd.logLevel<=mt.ERROR&&sd.error(`Auth (9.6.1): ${e}`,...t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ad(e,...t){throw ld(e,...t)}function cd(e,...t){return ld(e,...t)}function ld(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return rd.create(e,...t)}function ud(e,t,...n){if(!e)throw ld(t,...n)}function hd(e){const t="INTERNAL ASSERTION FAILED: "+e;throw od(t),new Error(t)}function dd(e,t){e||hd(t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const fd=new Map;function pd(e){dd(e instanceof Function,"Expected a class definition");let t=fd.get(e);return t?(dd(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,fd.set(e,t),t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
function gd(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function md(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function yd(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==md()&&"https:"!==md()&&!Qe()&&!("connection"in navigator)||navigator.onLine}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class vd{constructor(e,t){this.shortDelay=e,this.longDelay=t,dd(t>e,"Short delay should be less than long delay!"),this.isMobile=Xe()||Ye()}get(){return yd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function wd(e,t){dd(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class bd{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void hd("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void hd("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void hd("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Id={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Td=new vd(3e4,6e4);
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ed(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function _d(e,t,n,i,r={}){return kd(e,r,(async()=>{let r={},s={};i&&("GET"===t?s=i:r={body:JSON.stringify(i)});const o=st(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),bd.fetch()(Sd(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))}))}async function kd(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},Id),t);try{const t=new Cd(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw Nd(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Nd(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Nd(e,"email-already-in-use",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw function(e,t,n){const i=Object.assign(Object.assign({},id()),{[t]:n});return new tt("auth","Firebase",i).create(t,{appName:e.name})}(e,a,o);ad(e,a)}}catch(t){if(t instanceof et)throw t;ad(e,"network-request-failed")}}async function Ad(e,t,n,i,r={}){const s=await _d(e,t,n,i,r);return"mfaPendingCredential"in s&&ad(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Sd(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?wd(e.config,r):`${e.config.apiScheme}://${r}`}class Cd{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(cd(this.auth,"timeout"))),Td.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Nd(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=cd(e,t,i);return r.customData._tokenResponse=n,r}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
function Rd(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}function Dd(e){return 1e3*Number(e)}function Od(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return od("JWT malformed, contained fewer than 3 sections"),null;try{const e=function(e){try{return Ge.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null}(n);return e?JSON.parse(e):(od("Failed to decode base64 JWT payload"),null)}catch(e){return od("Caught error parsing JWT payload as JSON",e),null}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function Pd(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof et&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Ld{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class xd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Rd(this.lastLoginAt),this.creationTime=Rd(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function Md(e){var t;const n=e.auth,i=await e.getIdToken(),r=await Pd(e,async function(e,t){return _d(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));ud(null==r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=td(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const u=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new xd(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Ud{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ud(e.idToken,"internal-error"),ud(void 0!==e.idToken,"internal-error"),ud(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Od(e);return ud(t,"internal-error"),ud(void 0!==t.exp,"internal-error"),ud(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return ud(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function(e,t){const n=await kd(e,{},(async()=>{const n=st({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,s=Sd(e,i,"/v1/token",`key=${r}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",bd.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new Ud;return n&&(ud("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(ud("string"==typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(ud("number"==typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ud,this.toJSON())}_performRefresh(){return hd("not implemented")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function $d(e,t){ud("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Fd{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=td(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Ld(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.metadata=new xd(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Pd(this,this.stsTokenManager.getToken(this.auth,e));return ud(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=ht(e),i=await n.getIdToken(t),r=Od(i);ud(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s="object"==typeof r.firebase?r.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Rd(Dd(r.auth_time)),issuedAtTime:Rd(Dd(r.iat)),expirationTime:Rd(Dd(r.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=ht(e);await Md(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(ud(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Fd(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){ud(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Md(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Pd(this,async function(e,t){return _d(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:I,stsTokenManager:T}=t;ud(v&&T,e,"internal-error");const E=Ud.fromJSON(this.name,T);ud("string"==typeof v,e,"internal-error"),$d(u,e.name),$d(h,e.name),ud("boolean"==typeof w,e,"internal-error"),ud("boolean"==typeof b,e,"internal-error"),$d(d,e.name),$d(f,e.name),$d(p,e.name),$d(g,e.name),$d(m,e.name),$d(y,e.name);const _=new Fd({uid:v,auth:e,email:h,emailVerified:w,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:m,lastLoginAt:y});return I&&Array.isArray(I)&&(_.providerData=I.map((e=>Object.assign({},e)))),g&&(_._redirectEventId=g),_}static async _fromIdTokenResponse(e,t,n=!1){const i=new Ud;i.updateFromServerResponse(t);const r=new Fd({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Md(r),r}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Vd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Vd.type="NONE";const jd=Vd;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Bd(e,t,n){return`firebase:${e}:${t}:${n}`}class qd{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=Bd(this.userKey,i.apiKey,r),this.fullPersistenceKey=Bd("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Fd._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new qd(pd(jd),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||pd(jd);const s=Bd(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const i=Fd._fromJSON(e,t);n!==r&&(o=i),r=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new qd(r,e,n)):new qd(r,e,n)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function zd(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Wd(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Hd(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Xd(t))return"Blackberry";if(Qd(t))return"Webos";if(Kd(t))return"Safari";if((t.includes("chrome/")||Gd(t))&&!t.includes("edge/"))return"Chrome";if(Jd(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Hd(e=Je()){return/firefox\//i.test(e)}function Kd(e=Je()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Gd(e=Je()){return/crios\//i.test(e)}function Wd(e=Je()){return/iemobile/i.test(e)}function Jd(e=Je()){return/android/i.test(e)}function Xd(e=Je()){return/blackberry/i.test(e)}function Qd(e=Je()){return/webos/i.test(e)}function Yd(e=Je()){return/iphone|ipad|ipod/i.test(e)}function Zd(e=Je()){return Yd(e)||Jd(e)||Qd(e)||Xd(e)||/windows phone/i.test(e)||Wd(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function ef(e,t=[]){let n;switch(e){case"Browser":n=zd(Je());break;case"Worker":n=`${zd(Je())}-${e}`;break;default:n=e}return`${n}/JsCore/9.6.1/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class tf{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rf(this),this.idTokenSubscription=new rf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rd,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=pd(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await qd.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);i&&i!==r||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(ud(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Md(e)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ht(e):null;return t&&ud(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&ud(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(pd(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new tt("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&pd(e)||this._popupRedirectResolver;ud(t,this,"argument-error"),this.redirectPersistenceManager=await qd.create(this,[pd(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return ud(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ud(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ef(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function nf(e){return ht(e)}class rf{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new ct(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return ud(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class sf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return hd("not implemented")}_getIdTokenResponse(e){return hd("not implemented")}_linkToIdToken(e,t){return hd("not implemented")}_getReauthenticationResolver(e){return hd("not implemented")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class of extends sf{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new of(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new of(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
return async function(e,t){return Ad(e,"POST","/v1/accounts:signInWithPassword",Ed(e,t))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Ad(e,"POST","/v1/accounts:signInWithEmailLink",Ed(e,t))}(e,{email:this._email,oobCode:this._password});default:ad(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return async function(e,t){return _d(e,"POST","/v1/accounts:update",t)}(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Ad(e,"POST","/v1/accounts:signInWithEmailLink",Ed(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:ad(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function af(e,t){return Ad(e,"POST","/v1/accounts:signInWithIdp",Ed(e,t))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class cf extends sf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new cf(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ad("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=td(t,["providerId","signInMethod"]);if(!n||!i)return null;const s=new cf(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){return af(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,af(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,af(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=st(t)}return e}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class lf{constructor(e){var t,n,i,r,s,o;const a=ot(at(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);ud(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=ot(at(e)).link,n=t?ot(at(t)).deep_link_id:null,i=ot(at(e)).deep_link_id;return(i?ot(at(i)).link:null)||i||n||t||e}(e);try{return new lf(t)}catch(e){return null}}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class uf{constructor(){this.providerId=uf.PROVIDER_ID}static credential(e,t){return of._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=lf.parseLink(t);return ud(n,"argument-error"),of._fromEmailAndCode(e,n.code,n.tenantId)}}uf.PROVIDER_ID="password",uf.EMAIL_PASSWORD_SIGN_IN_METHOD="password",uf.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class hf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class df extends hf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ff extends df{constructor(){super("facebook.com")}static credential(e){return cf._fromParams({providerId:ff.PROVIDER_ID,signInMethod:ff.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ff.credentialFromTaggedObject(e)}static credentialFromError(e){return ff.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ff.credential(e.oauthAccessToken)}catch(e){return null}}}ff.FACEBOOK_SIGN_IN_METHOD="facebook.com",ff.PROVIDER_ID="facebook.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class pf extends df{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return cf._fromParams({providerId:pf.PROVIDER_ID,signInMethod:pf.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return pf.credentialFromTaggedObject(e)}static credentialFromError(e){return pf.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return pf.credential(t,n)}catch(e){return null}}}pf.GOOGLE_SIGN_IN_METHOD="google.com",pf.PROVIDER_ID="google.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class gf extends df{constructor(){super("github.com")}static credential(e){return cf._fromParams({providerId:gf.PROVIDER_ID,signInMethod:gf.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gf.credentialFromTaggedObject(e)}static credentialFromError(e){return gf.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return gf.credential(e.oauthAccessToken)}catch(e){return null}}}gf.GITHUB_SIGN_IN_METHOD="github.com",gf.PROVIDER_ID="github.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class mf extends df{constructor(){super("twitter.com")}static credential(e,t){return cf._fromParams({providerId:mf.PROVIDER_ID,signInMethod:mf.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return mf.credentialFromTaggedObject(e)}static credentialFromError(e){return mf.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return mf.credential(t,n)}catch(e){return null}}}mf.TWITTER_SIGN_IN_METHOD="twitter.com",mf.PROVIDER_ID="twitter.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class yf{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const r=await Fd._fromIdTokenResponse(e,n,i),s=vf(n);return new yf({user:r,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=vf(n);return new yf({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function vf(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class wf extends et{constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,wf.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new wf(e,t,n,i)}}function bf(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw wf._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function If(e,t,n=!1){const i="signIn",r=await bf(e,i,t),s=await yf._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function Tf(e,t,n){const i=nf(e),r=await
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function(e,t){return Ad(e,"POST","/v1/accounts:signUp",Ed(e,t))}(i,{returnSecureToken:!0,email:t,password:n}),s=await yf._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}function Ef(e,t,n){return async function(e,t){return If(nf(e),t)}(ht(e),uf.credential(t,n))}const _f="__sak";
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class kf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(_f,"1"),this.storage.removeItem(_f),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Af extends kf{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Je();return Kd(e)||Yd(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Zd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);Ze()&&10===document.documentMode&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Af.type="LOCAL";const Sf=Af;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Cf extends kf{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Cf.type="SESSION";const Nf=Cf;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
class Rf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Rf(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async e=>e(t.origin,r))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Df(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */Rf.receivers=[];class Of{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const c=Df("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(l),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Pf(){return window}
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
function Lf(){return void 0!==Pf().WorkerGlobalScope&&"function"==typeof Pf().importScripts}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const xf="firebaseLocalStorageDb",Mf="firebaseLocalStorage",Uf="fbase_key";class $f{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Ff(e,t){return e.transaction([Mf],t?"readwrite":"readonly").objectStore(Mf)}function Vf(){const e=indexedDB.open(xf,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Mf,{keyPath:Uf})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Mf)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(xf);return new $f(e).toPromise()}(),t(await Vf()))}))}))}async function jf(e,t,n){const i=Ff(e,!0).put({[Uf]:t,value:n});return new $f(i).toPromise()}function Bf(e,t){const n=Ff(e,!0).delete(t);return new $f(n).toPromise()}class qf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Vf()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Lf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rf._getInstance(Lf()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Of(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&function(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vf();return await jf(e,_f,"1"),await Bf(e,_f),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>jf(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Ff(e,!1).get(t),i=await new $f(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Bf(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Ff(e,!1).getAll();return new $f(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}qf.type="LOCAL";const zf=qf;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Hf(e){return new Promise(((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=cd("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",function(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}().appendChild(i)}))}new vd(3e4,6e4);
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Kf extends sf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return af(e,this._buildIdpRequest())}_linkToIdToken(e,t){return af(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return af(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Gf(e){return If(e.auth,new Kf(e),e.bypassAuthState)}function Wf(e){const{auth:t,user:n}=e;return ud(n,t,"internal-error"),
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const s=await Pd(e,bf(i,r,t,e),n);ud(s.idToken,i,"internal-error");const o=Od(s.idToken);ud(o,i,"internal-error");const{sub:a}=o;return ud(e.uid===a,i,"user-mismatch"),yf._forOperation(e,r,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&ad(i,"user-mismatch"),e}}(n,new Kf(e),e.bypassAuthState)}async function Jf(e){const{auth:t,user:n}=e;return ud(n,t,"internal-error"),async function(e,t,n=!1){const i=await Pd(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return yf._forOperation(e,"link",i)}(n,new Kf(e),e.bypassAuthState)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Xf{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Gf;case"linkViaPopup":case"linkViaRedirect":return Jf;case"reauthViaPopup":case"reauthViaRedirect":return Wf;default:ad(this.auth,"internal-error")}}resolve(e){dd(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dd(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Qf=new vd(2e3,1e4);class Yf extends Xf{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,Yf.currentPopupAction&&Yf.currentPopupAction.cancel(),Yf.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ud(e,this.auth,"internal-error"),e}async onExecution(){dd(1===this.filter.length,"Popup operations only handle one event");const e=Df();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(cd(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(cd(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yf.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(cd(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Qf.get())};e()}}Yf.currentPopupAction=null;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Zf="pendingRedirect",ep=new Map;class tp extends Xf{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=ep.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return Bd(Zf,e.config.apiKey,e.name)}(t),i=function(e){return pd(e._redirectPersistence)}(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}ep.set(this.auth._key(),e)}return this.bypassAuthState||ep.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function np(e,t,n=!1){const i=nf(e),r=
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
function(e,t){return t?pd(t):(ud(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(i,t),s=new tp(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ip{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sp(e);default:return!1}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!sp(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(cd(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(rp(e))}saveEventToCache(e){this.cachedEventUids.add(rp(e)),this.lastProcessedEventTime=Date.now()}}function rp(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function sp({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const op=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ap=/^https?/;async function cp(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return _d(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(lp(e))return}catch(e){}ad(e,"unauthorized-domain")}function lp(e){const t=gd(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!ap.test(n))return!1;if(op.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
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
     */const up=new vd(3e4,6e4);function hp(){const e=Pf().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function dp(e){return new Promise(((t,n)=>{var i,r,s;function o(){hp(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{hp(),n(cd(e,"network-request-failed"))},timeout:up.get()})}if(null===(r=null===(i=Pf().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Pf().gapi)||void 0===s?void 0:s.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Pf()[t]=()=>{gapi.load?o():n(cd(e,"network-request-failed"))},Hf(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw fp=null,e}))}let fp=null;
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
const pp=new vd(5e3,15e3),gp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yp(e){const t=e.config;ud(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?wd(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:xt},r=mp.get(e.config.apiHost);r&&(i.eid=r);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${st(i).slice(1)}`}async function vp(e){const t=await function(e){return fp=fp||dp(e),fp}(e),n=Pf().gapi;return ud(n,e,"internal-error"),t.open({where:document.body,url:yp(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gp,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=cd(e,"network-request-failed"),s=Pf().setTimeout((()=>{i(r)}),pp.get());function o(){Pf().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{i(r)}))}))))}
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
     */const wp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class bp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Ip(e,t,n,i=500,r=600){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},wp),{width:i.toString(),height:r.toString(),top:s,left:o}),l=Je().toLowerCase();n&&(a=Gd(l)?"_blank":n),Hd(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Je()){var t;return Yd(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
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
     */(t||"",a),new bp(null);const h=window.open(t||"",a,u);ud(h,e,"popup-blocked");try{h.focus()}catch(e){}return new bp(h)}const Tp="__/auth/handler",Ep="emulator/auth/handler";function _p(e,t,n,i,r,s){ud(e.config.authDomain,e,"auth-domain-config-required"),ud(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:xt,eventId:r};if(t instanceof hf){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof df){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${Tp}`;return wd(e,Ep)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)}?${st(a).slice(1)}`}const kp="webStorageSupport";const Ap=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Nf,this._completeRedirectFn=np}async _openPopup(e,t,n,i){var r;dd(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return Ip(e,_p(e,t,n,gd(),i),Df())}async _openRedirect(e,t,n,i){var r;return await this._originValidation(e),r=_p(e,t,n,gd(),i),Pf().location.href=r,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(dd(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await vp(e),n=new ip(e);return t.register("authEvent",(t=>{ud(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(kp,{type:kp},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&t(!!r),ad(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=cp(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Zd()||Kd()||Yd()}};var Sp,Cp="@firebase/auth",Np="0.19.4";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Rp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ud(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
function Dp(e=Mt()){const t=Ot(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=Ot(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(it(n.getOptions(),null!=t?t:{}))return e;ad(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Ap,persistence:[zf,Sf,Nf]})}function Op(e){e?setTimeout((()=>{window.location.href="/"}),e):window.location.href="/"}Sp="Browser",Dt(new dt("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:r}=n.options;return(e=>{ud(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),ud(!(null==r?void 0:r.includes(":")),"argument-error",{appName:e.name});const n={apiKey:i,authDomain:r,clientPlatform:Sp,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ef(Sp)},s=new tf(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(pd);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Dt(new dt("auth-internal",(e=>(e=>new Rp(e))(nf(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),Ut(Cp,Np,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Sp)),Ut(Cp,Np,"esm2017");const Pp={email:"",numGames:0,avgWPM:0,matchHistory:[],matchHistoryTime:[],uid:""};let Lp,xp,Mp;const Up=window.sessionStorage,$p="user";function Fp(){Lp=function(e,t={}){"object"!=typeof t&&(t={name:t});const n=Object.assign({name:At,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw Pt.create("bad-app-name",{appName:String(i)});const r=Ct.get(i);if(r){if(it(e,r.options)&&it(n,r.config))return r;throw Pt.create("duplicate-app",{appName:i})}const s=new gt(i);for(const e of Nt.values())s.addComponent(e);const o=new Lt(e,n,s);return Ct.set(i,o),o}({apiKey:"AIzaSyAcfFLGAnLbwIUCfyCYgayBl2oPvbu5RFQ",authDomain:"perfect-type.firebaseapp.com",projectId:"perfect-type",storageBucket:"perfect-type.appspot.com",messagingSenderId:"358376646912",appId:"1:358376646912:web:d750e4f6970556a8072be5",measurementId:"G-MDGFNKMNEC"}),Zn(Lp),xp=Dp(),Mp=function(e=Mt()){return Ot(e,"firestore").getImmediate()}()}function Vp(){return null!=function(){const e=Up.getItem($p);return null==e?null:e.length>0?JSON.parse(e):null}()}async function jp(e,t){try{const n=await Tf(xp,e,t);Up.setItem($p,JSON.stringify(n.user));let i=Object.assign({},Pp);return i.uid=n.user.uid,i.email=n.user.email,await async function(e,t,n){const i=function(e,t,...n){if(e=ht(e),1===arguments.length&&(t=$a.A()),Eh("doc","path",t),e instanceof Ch){const i=Ga.fromString(t,...n);return _h(i),new Nh(e,null,new sc(i))}{if(!(e instanceof Nh||e instanceof Dh))throw new Sa(Aa.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(Ga.fromString(t,...n));return _h(i),new Nh(e.firestore,e instanceof Dh?e.converter:null,new sc(i))}}(Mp,e,t);return await ed(i,n),n}("users",i.uid,i),n.user}catch(e){return console.log(e),null}}function Bp(t){let n,i,r,s,o,a,h;return{c(){n=d("div"),i=d("label"),r=f(t[1]),s=p(),o=d("input"),y(i,"for",t[2]),y(o,"id",t[2]),y(o,"type",t[4]),y(o,"name",t[2]),y(o,"autocomplete",t[3]),o.value=t[0],y(n,"class","input-container")},m(e,u){l(e,n,u),c(n,i),c(i,r),c(n,s),c(n,o),a||(h=m(o,"input",t[5]),a=!0)},p(e,[t]){2&t&&v(r,e[1]),4&t&&y(i,"for",e[2]),4&t&&y(o,"id",e[2]),16&t&&y(o,"type",e[4]),4&t&&y(o,"name",e[2]),8&t&&y(o,"autocomplete",e[3]),1&t&&o.value!==e[0]&&(o.value=e[0])},i:e,o:e,d(e){e&&u(n),a=!1,h()}}}function qp(e,t,n){let{value:i=""}=t,{text:r}=t,{id:s}=t,{autocomplete:o}=t,{type:a="text"}=t;return e.$$set=e=>{"value"in e&&n(0,i=e.value),"text"in e&&n(1,r=e.text),"id"in e&&n(2,s=e.id),"autocomplete"in e&&n(3,o=e.autocomplete),"type"in e&&n(4,a=e.type)},[i,r,s,o,a,e=>{n(0,i=e.target.value),function(e,t){let n=e.target.parentNode.querySelector("label");e.target.value.length>0?(n.style.top="-10px",n.style.fontSize="1em"):(n.style.top="10px",n.style.fontSize="1.5em")}(e)}]}class zp extends K{constructor(e){super(),H(this,e,qp,Bp,s,{value:0,text:1,id:2,autocomplete:3,type:4})}}function Hp(e){let t,n,i,r,s,o,a,h,f,g,v,w,b,I,T,_,k,A,S,C;function R(t){e[6](t)}let D={text:"email",id:"email",type:"email",autocomplete:"email"};function O(t){e[7](t)}void 0!==e[1]&&(D.value=e[1]),a=new zp({props:D}),E.push((()=>V(a,"value",R)));let P={text:"password",id:"password",type:"password",autocomplete:"current-password"};return void 0!==e[2]&&(P.value=e[2]),g=new zp({props:P}),E.push((()=>V(g,"value",O))),k=new Ne({props:{text:"login"}}),{c(){t=d("form"),n=d("br"),i=p(),r=d("br"),s=p(),o=d("div"),j(a.$$.fragment),f=p(),j(g.$$.fragment),w=p(),b=d("br"),I=p(),T=d("br"),_=p(),j(k.$$.fragment),y(o,"id","form-container")},m(u,h){l(u,t,h),c(t,n),c(t,i),c(t,r),c(t,s),c(t,o),B(a,o,null),c(o,f),B(g,o,null),c(t,w),c(t,b),c(t,I),c(t,T),c(t,_),B(k,t,null),A=!0,S||(C=m(t,"submit",e[3]),S=!0)},p(e,t){const n={};!h&&2&t&&(h=!0,n.value=e[1],N((()=>h=!1))),a.$set(n);const i={};!v&&4&t&&(v=!0,i.value=e[2],N((()=>v=!1))),g.$set(i)},i(e){A||($(a.$$.fragment,e),$(g.$$.fragment,e),$(k.$$.fragment,e),A=!0)},o(e){F(a.$$.fragment,e),F(g.$$.fragment,e),F(k.$$.fragment,e),A=!1},d(e){e&&u(t),q(a),q(g),q(k),S=!1,C()}}}function Kp(t){let n;return{c(){n=d("p"),n.textContent="logged in! redirecting to main..."},m(e,t){l(e,n,t)},p:e,i:e,o:e,d(e){e&&u(n)}}}function Gp(e){let t,n,i,r,s,o;const a=[Kp,Hp],h=[];function f(e,t){return e[0]?0:1}return r=f(e),s=h[r]=a[r](e),{c(){t=d("main"),n=d("h1"),n.textContent="login",i=p(),s.c()},m(e,s){l(e,t,s),c(t,n),c(t,i),h[r].m(t,null),o=!0},p(e,[n]){let i=r;r=f(e),r===i?h[r].p(e,n):(M(),F(h[i],1,1,(()=>{h[i]=null})),U(),s=h[r],s?s.p(e,n):(s=h[r]=a[r](e),s.c()),$(s,1),s.m(t,null))},i(e){o||($(s),o=!0)},o(e){F(s),o=!1},d(e){e&&u(t),h[r].d()}}}function Wp(e,t,n){let i,r,{currentRoute:s}=t,{params:o}=t,a=!1;return e.$$set=e=>{"currentRoute"in e&&n(4,s=e.currentRoute),"params"in e&&n(5,o=e.params)},[a,i,r,function(e){e&&e.preventDefault(),async function(e,t){try{const n=await Ef(xp,e,t);return Up.setItem($p,JSON.stringify(n.user)),n.user}catch(e){return null}}(i,r).then((e=>{null!=e&&(n(0,a=!0),Op(1e3))}))},s,o,function(e){i=e,n(1,i)},function(e){r=e,n(2,r)}]}function Jp(e){let t,n,i,r,s,o,a,h,f,g,v,w,b,I,T,_,k,A,S,C,R,D,O;function P(t){e[7](t)}let L={text:"email",id:"email",type:"email",autocomplete:"email"};function x(t){e[8](t)}void 0!==e[1]&&(L.value=e[1]),n=new zp({props:L}),E.push((()=>V(n,"value",P)));let M={text:"password",id:"password",type:"password",autocomplete:"new-password"};function U(t){e[9](t)}void 0!==e[2]&&(M.value=e[2]),g=new zp({props:M}),E.push((()=>V(g,"value",x)));let z={text:"confirm password",id:"con-password",type:"password",autocomplete:"new-password"};return void 0!==e[3]&&(z.value=e[3]),b=new zp({props:z}),E.push((()=>V(b,"value",U))),C=new Ne({props:{text:"signup"}}),{c(){t=d("form"),j(n.$$.fragment),r=p(),s=d("br"),o=p(),a=d("br"),h=p(),f=d("div"),j(g.$$.fragment),w=p(),j(b.$$.fragment),T=p(),_=d("br"),k=p(),A=d("br"),S=p(),j(C.$$.fragment),y(f,"id","form-container")},m(i,u){l(i,t,u),B(n,t,null),c(t,r),c(t,s),c(t,o),c(t,a),c(t,h),c(t,f),B(g,f,null),c(f,w),B(b,f,null),c(t,T),c(t,_),c(t,k),c(t,A),c(t,S),B(C,t,null),R=!0,D||(O=m(t,"submit",e[4]),D=!0)},p(e,t){const r={};!i&&2&t&&(i=!0,r.value=e[1],N((()=>i=!1))),n.$set(r);const s={};!v&&4&t&&(v=!0,s.value=e[2],N((()=>v=!1))),g.$set(s);const o={};!I&&8&t&&(I=!0,o.value=e[3],N((()=>I=!1))),b.$set(o)},i(e){R||($(n.$$.fragment,e),$(g.$$.fragment,e),$(b.$$.fragment,e),$(C.$$.fragment,e),R=!0)},o(e){F(n.$$.fragment,e),F(g.$$.fragment,e),F(b.$$.fragment,e),F(C.$$.fragment,e),R=!1},d(e){e&&u(t),q(n),q(g),q(b),q(C),D=!1,O()}}}function Xp(t){let n;return{c(){n=d("p"),n.textContent="signed up and logged in! redirecting to main..."},m(e,t){l(e,n,t)},p:e,i:e,o:e,d(e){e&&u(n)}}}function Qp(e){let t,n,i,r,s,o;const a=[Xp,Jp],h=[];function f(e,t){return e[0]?0:1}return r=f(e),s=h[r]=a[r](e),{c(){t=d("main"),n=d("h1"),n.textContent="sign up",i=p(),s.c()},m(e,s){l(e,t,s),c(t,n),c(t,i),h[r].m(t,null),o=!0},p(e,[n]){let i=r;r=f(e),r===i?h[r].p(e,n):(M(),F(h[i],1,1,(()=>{h[i]=null})),U(),s=h[r],s?s.p(e,n):(s=h[r]=a[r](e),s.c()),$(s,1),s.m(t,null))},i(e){o||($(s),o=!0)},o(e){F(s),o=!1},d(e){e&&u(t),h[r].d()}}}function Yp(e,t,n){let i,r,s,{currentRoute:o}=t,{params:a}=t,c=!1;return e.$$set=e=>{"currentRoute"in e&&n(5,o=e.currentRoute),"params"in e&&n(6,a=e.params)},[c,i,r,s,function(e){e&&e.preventDefault(),function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(i)?s===r?r.length<8?alert("Passwords too short!"):jp(i,r).then((e=>{null!=e&&(n(0,c=!0),Op(1e3))})):alert("Passwords do not match!"):alert("Invalid email!")},o,a,function(e){i=e,n(1,i)},function(e){r=e,n(2,r)},function(e){s=e,n(3,s)}]}function Zp(){return!Vp()}const eg=[{name:"/",component:class extends K{constructor(e){super(),H(this,e,Ke,He,s,{currentRoute:9,params:10})}}},{name:"login",component:class extends K{constructor(e){super(),H(this,e,Wp,Gp,s,{currentRoute:4,params:5})}},onlyIf:{guard:Zp,redirect:"/"}},{name:"signup",component:class extends K{constructor(e){super(),H(this,e,Yp,Qp,s,{currentRoute:5,params:6})}},onlyIf:{guard:Zp,redirect:"/"}}];function tg(t){let n;return{c(){n=d("main"),n.innerHTML='<div class="header svelte-1weaa9o"><a href="/analytics" class="svelte-1weaa9o">analytics</a> \n    <a href="/signup" class="svelte-1weaa9o">signup</a> \n    <a href="/login" class="svelte-1weaa9o">login</a> \n    <a href="/" class="svelte-1weaa9o">play</a></div>'},m(e,t){l(e,n,t)},p:e,i:e,o:e,d(e){e&&u(n)}}}class ng extends K{constructor(e){super(),H(this,e,null,tg,s,{})}}function ig(t){let n,i,r,s,o,a;return r=new ng({}),o=new _e({props:{routes:eg}}),{c(){n=d("meta"),i=p(),j(r.$$.fragment),s=p(),j(o.$$.fragment),document.title="Perfect Type",y(n,"charset","utf-8")},m(e,t){c(document.head,n),l(e,i,t),B(r,e,t),l(e,s,t),B(o,e,t),a=!0},p:e,i(e){a||($(r.$$.fragment,e),$(o.$$.fragment,e),a=!0)},o(e){F(r.$$.fragment,e),F(o.$$.fragment,e),a=!1},d(e){u(n),e&&u(i),q(r,e),e&&u(s),q(o,e)}}}function rg(e){return Fp(),[]}return new class extends K{constructor(e){super(),H(this,e,rg,ig,s,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
