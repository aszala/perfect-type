var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(t)}function i(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function a(t,n,r){t.$$.on_destroy.push(function(t,...n){if(null==t)return e;const r=t.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function o(e,t){e.appendChild(t)}function c(e,t,n){e.insertBefore(t,n||null)}function u(e){e.parentNode.removeChild(e)}function l(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function h(e){return document.createElement(e)}function d(e){return document.createTextNode(e)}function f(){return d(" ")}function p(){return d("")}function m(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function g(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let y;function v(e){y=e}function b(e){(function(){if(!y)throw new Error("Function called outside component initialization");return y})().$$.on_mount.push(e)}const w=[],_=[],I=[],T=[],E=Promise.resolve();let A=!1;function S(e){I.push(e)}let k=!1;const N=new Set;function O(){if(!k){k=!0;do{for(let e=0;e<w.length;e+=1){const t=w[e];v(t),R(t.$$)}for(v(null),w.length=0;_.length;)_.pop()();for(let e=0;e<I.length;e+=1){const t=I[e];N.has(t)||(N.add(t),t())}I.length=0}while(w.length);for(;T.length;)T.pop()();A=!1,k=!1,N.clear()}}function R(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(S)}}const P=new Set;let C;function $(){C={r:0,c:[],p:C}}function D(){C.r||r(C.c),C=C.p}function L(e,t){e&&e.i&&(P.delete(e),e.i(t))}function U(e,t,n,r){if(e&&e.o){if(P.has(e))return;P.add(e),C.c.push((()=>{P.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function M(e){e&&e.c()}function x(e,n,s,a){const{fragment:o,on_mount:c,on_destroy:u,after_update:l}=e.$$;o&&o.m(n,s),a||S((()=>{const n=c.map(t).filter(i);u?u.push(...n):r(n),e.$$.on_mount=[]})),l.forEach(S)}function j(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function F(e,t){-1===e.$$.dirty[0]&&(w.push(e),A||(A=!0,E.then(O)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function B(t,i,s,a,o,c,l,h=[-1]){const d=y;v(t);const f=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:o,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(d?d.$$.context:[])),callbacks:n(),dirty:h,skip_bound:!1,root:i.target||d.$$.root};l&&l(f.root);let p=!1;if(f.ctx=s?s(t,i.props||{},((e,n,...r)=>{const i=r.length?r[0]:n;return f.ctx&&o(f.ctx[e],f.ctx[e]=i)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](i),p&&F(t,e)),n})):[],f.update(),p=!0,r(f.before_update),f.fragment=!!a&&a(f.ctx),i.target){if(i.hydrate){const e=function(e){return Array.from(e.childNodes)}(i.target);f.fragment&&f.fragment.l(e),e.forEach(u)}else f.fragment&&f.fragment.c();i.intro&&L(t.$$.fragment),x(t,i.target,i.anchor,i.customElement),O()}v(d)}class z{$destroy(){j(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const V=[];function K(t,n=e){let r;const i=new Set;function a(e){if(s(t,e)&&(t=e,r)){const e=!V.length;for(const e of i)e[1](),V.push(e,t);if(e){for(let e=0;e<V.length;e+=2)V[e][0](V[e+1]);V.length=0}}}return{set:a,update:function(e){a(e(t))},subscribe:function(s,o=e){const c=[s,o];return i.add(c),1===i.size&&(r=n(a)||e),s(t),()=>{i.delete(c),0===i.size&&(r(),r=null)}}}}const{set:q,subscribe:H}=K({}),W={subscribe:H,set:q,remove:()=>{q({})}},G=(e,t="")=>{const n=new URL(e);function r(){return s(t).reduce(((e,t,n)=>(":"===t[0]&&e.push({value:t.slice(1),index:n}),e)),[])}function i(){return s(n.pathname)}function s(e){return"/"===e||0===e.trim().length?[e]:("/"===e.slice(-1)&&(e=e.slice(0,-1)),"/"===e[0]&&(e=e.slice(1)),e.split("/"))}return Object.freeze({hash:n.hash,host:n.host,hostname:n.hostname,namedParams:function(){const e=i();return r().reduce(((t,n)=>(t[n.value]=e[n.index],t)),{})}(),namedParamsKeys:r().reduce(((e,t)=>(e.push(t.value),e)),[]),namedParamsValues:function(){const e=i();return r().reduce(((t,n)=>(t.push(e[n.index]),t)),[])}(),pathNames:i(),port:n.port,pathname:n.pathname,protocol:n.protocol,search:n.search,queryParams:function(){const e={};return n.searchParams.forEach(((t,n)=>{e[n]=t})),e}(),queryParamsKeys:function(){const e=[];return n.searchParams.forEach(((t,n)=>{e.push(n)})),e}(),queryParamsValues:function(){const e=[];return n.searchParams.forEach((t=>{e.push(t)})),e}()})},J=e=>{let t=!1;return 0===Object.keys(e).length||(e.childRoute&&0===Object.keys(e.childRoute).length?t=!0:e.childRoute&&(t=J(e.childRoute)),t)},X=(e,t)=>(t=ee(t)).includes(":")?t.includes(e):t.startsWith(e),Y=(e,t,n)=>{let r=!1;if(n)return{exists:t.lang&&t.lang[n]&&t.lang[n].includes(e),language:n};if(r=X(e,t.name),!r&&t.lang&&"object"==typeof t.lang)for(const[i,s]of Object.entries(t.lang))X(e,s)&&(r=!0,n=i);return{exists:r,language:n}},Z=e=>"/"===e||0===e.trim().length?[e]:(e=ee(e,"both")).split("/"),Q=(e="")=>{let t;return"/"===e||0===e.trim().length?e:(t=(e=ee(e,"lead")).split(":")[0],t=ee(t,"trail"),t.toLowerCase())},ee=(e,t="lead")=>("trail"!==t&&"both"!==t||(e=e.replace(/\/$/,"")),"lead"!==t&&"both"!==t||(e=e.replace(/^\//,"")),e),te=(e,t=null)=>t&&e.lang&&e.lang[t]?e.lang[t]:e.name,ne=e=>{const t=e||!1;let n="";const r=(e,n)=>{if("undefined"!=typeof window){const r=(e=>{let t=[];if(e.queryParams)for(let[n,r]of Object.entries(e.queryParams))t.push(`${n}=${r}`);const n=e.hash?e.hash:"";return t.length>0?`${e.path}?${t.join("&")}${n}`:e.path+n})(e);n&&window.history.pushState({page:r},"",r),t&&i(r)}},i=e=>{"undefined"!=typeof ga&&(ga("set","page",e),ga("send","pageview"))};return Object.freeze({active:()=>n,isActive:(e,t=!1)=>{"/"!==e[0]&&(e="/"+e);let r=G(`http://fake.com${e}`).pathname,i=G(`http://fake.com${n}`).pathname;return r=ee(r,"trail"),i=ee(i,"trail"),t?i.includes(r):i===r},setActive:(e,t)=>{n=e.path,r(e,t)}})},re=(e,t)=>{const n=(e=>{const t=e;return Object.freeze({valid:()=>t&&t.guard&&"function"==typeof t.guard,redirect:()=>!t.guard(),redirectPath:()=>{let e="/";return t.redirect&&t.redirect.length>0&&(e=t.redirect),e}})})(e.onlyIf);return Object.freeze({path:()=>{let r=t;return e.redirectTo&&e.redirectTo.length>0&&(r=e.redirectTo),n.valid()&&n.redirect()&&(r=n.redirectPath()),r}})};function ie({basePath:e,basePathName:t,pathNames:n,convert:r,currentLanguage:i}){let s,a,o=i;function c(){return te(a,o)}function u(){return Q(c())}function l(){return Q(s.result)}return Object.freeze({basePathSameAsLocalised:function(){return l()===u()},updatedPath:function(e){return a=e,s=((e,t,n,r,i=!1)=>{if("/"===e||0===e.trim().length)return{result:e,language:null};let s=e,a=n.name,o=r;if(i&&(o=""),a=ee(a),s=ee(s),n.childRoute)return{result:e,language:o};{let e=Y(s,n,o);e.exists&&i&&(s=te(n,r));let c=a.split(":")[0];return c=ee(c,"trail"),c=c.split("/"),c.shift(),c.forEach((()=>{const a=t[0];if(e=Y(`${s}/${a}`,n,o),!a||!e.exists)return{result:s,language:e.language};s=i?te(n,r):`${s}/${a}`,t.shift()})),{result:s,language:e.language}}})(t,n,a,o,r),o=r?i:s.language,s},basePathNameWithoutNamedParams:l,localisedPathName:c,localisedRouteWithoutNamedParams:u,namedPath:function(){let t=c();return t&&!t.startsWith("/")&&(t="/"+t),e?`${e}${t}`:t},pathNames:n,routeLanguage:function(){return o},routePath:function(){let t=`${e}/${l()}`;"//"===t&&(t="/"),o&&(n=((e,t)=>{const n=t.split("/");return n.length>1&&n.forEach((function(t,n){t.length>0&&n>0&&e.shift()})),e})(n,u()));const r=((e="")=>0===e.trim().length?[]:Z(e).reduce(((e,t)=>(":"===t[0]&&e.push(t.slice(1)),e)),[]))(c());return r&&r.length>0&&r.forEach((function(){n.length>0&&(t+=`/${n.shift()}`)})),t}})}function se({routes:e,currentUrl:t,routerOptions:n,convert:r}){const i=n.defaultLanguage,s=n.prefix?n.prefix.toLowerCase():"",a=function(e,t){if(t&&t.trim().length>0){const n=e.endsWith(t)?t:t+"/",r=e.replace(n,"");return G(r)}return G(e)}(t,s);let o="",c={},u=!1;function l(e,t,n,r,s){let h={};const d=ie({basePath:t,basePathName:n.shift().toLowerCase(),pathNames:n,convert:s,currentLanguage:r});return u=!1,e.forEach((function(e){if(d.updatedPath(e),function(e,t){const n=e.basePathSameAsLocalised();n&&(u=!0);return n||!u&&(e=>ee(e).startsWith(":"))(t)}(d,e.name)){let t=d.routePath();if(o=re(e,o).path(),h.name!==t&&(h=function({route:e,routePath:t,routeLanguage:n,urlParser:r,namedPath:s}){const a=function({routeInfo:e,path:t,routeNamedParams:n,urlParser:r,namedPath:i,language:s}){const a=()=>{const e=G(`https://fake.com${r.pathname}`,i).namedParams;return{...n,...e}};return Object.freeze({get:()=>({name:t,component:e.component,hash:r.hash,layout:e.layout,queryParams:r.queryParams,namedParams:a(),path:t,language:s}),namedParams:a})}({routeInfo:e,urlParser:r,path:t,routeNamedParams:c,namedPath:s,language:n||i});return c=a.namedParams(),a.get()}({route:e,routePath:t,routeLanguage:d.routeLanguage(),urlParser:a,namedPath:d.namedPath()})),e.nestedRoutes&&e.nestedRoutes.length>0&&d.pathNames.length>0)h.childRoute=l(e.nestedRoutes,t,d.pathNames,d.routeLanguage(),s),h.path=h.childRoute.path,h.language=h.childRoute.language;else if(function(e,t){return e.nestedRoutes&&e.nestedRoutes.length>0&&0===t.length}(e,d.pathNames)){const n=l(e.nestedRoutes,t,["index"],d.routeLanguage(),s);n&&Object.keys(n).length>0&&(h.childRoute=n,h.language=h.childRoute.language)}}})),o&&(h.redirectTo=o),h}const h=t=>{const n=e.find((e=>"404"==e.name)),r=t||i||"";return n?{...n,language:r,path:"404"}:{name:"404",component:"",path:"404",redirectTo:"/404.html"}};return Object.freeze({findActiveRoute:function(){let t=l(e,"",a.pathNames,n.lang,r);return t&&Object.keys(t).length&&!J(t)?(t.path=t.path.split("?")[0],s&&(t.path=`/${s}${t.path}`)):"undefined"!=typeof window&&(t=h(n.lang)),t}})}const ae="/404.html";let oe,ce=[],ue={};const le=(e,t,n={})=>{ue={...n},void 0!==t&&""!==t||(t=document.location.href),oe=ne(ue.gaPageviews),t=ee(t,"trail"),ce=e;const r=()=>{let n=!1;return ue.langConvertTo&&(ue.lang=ue.langConvertTo,n=!0),se({routes:e,currentUrl:t,routerOptions:ue,convert:n}).findActiveRoute()};return Object.freeze({setActiveRoute:(e=!0)=>{const t=r();return t.redirectTo?((e,t)=>("undefined"!=typeof window&&(e===ae?oe.setActive({path:ae},t):he(e)),e))(t.redirectTo,e):(oe.setActive(t,e),W.set(t),t)},findActiveRoute:r})},he=(e,t=null,n=!0)=>(e=ee(e,"lead"),t&&(ue.langConvertTo=t),le(ce,"http://fake.com/"+e,ue).setActiveRoute(n));function de(e){let t,n;return t=new ye({props:{currentRoute:e[0].childRoute,params:e[1]}}),{c(){M(t.$$.fragment)},m(e,r){x(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.currentRoute=e[0].childRoute),2&n&&(r.params=e[1]),t.$set(r)},i(e){n||(L(t.$$.fragment,e),n=!0)},o(e){U(t.$$.fragment,e),n=!1},d(e){j(t,e)}}}function fe(e){let t,n,r;var i=e[0].component;function s(e){return{props:{currentRoute:{...e[0],component:""},params:e[1]}}}return i&&(t=new i(s(e))),{c(){t&&M(t.$$.fragment),n=p()},m(e,i){t&&x(t,e,i),c(e,n,i),r=!0},p(e,r){const a={};if(1&r&&(a.currentRoute={...e[0],component:""}),2&r&&(a.params=e[1]),i!==(i=e[0].component)){if(t){$();const e=t;U(e.$$.fragment,1,0,(()=>{j(e,1)})),D()}i?(t=new i(s(e)),M(t.$$.fragment),L(t.$$.fragment,1),x(t,n.parentNode,n)):t=null}else i&&t.$set(a)},i(e){r||(t&&L(t.$$.fragment,e),r=!0)},o(e){t&&U(t.$$.fragment,e),r=!1},d(e){e&&u(n),t&&j(t,e)}}}function pe(e){let t,n,r;var i=e[0].layout;function s(e){return{props:{currentRoute:{...e[0],layout:""},params:e[1]}}}return i&&(t=new i(s(e))),{c(){t&&M(t.$$.fragment),n=p()},m(e,i){t&&x(t,e,i),c(e,n,i),r=!0},p(e,r){const a={};if(1&r&&(a.currentRoute={...e[0],layout:""}),2&r&&(a.params=e[1]),i!==(i=e[0].layout)){if(t){$();const e=t;U(e.$$.fragment,1,0,(()=>{j(e,1)})),D()}i?(t=new i(s(e)),M(t.$$.fragment),L(t.$$.fragment,1),x(t,n.parentNode,n)):t=null}else i&&t.$set(a)},i(e){r||(t&&L(t.$$.fragment,e),r=!0)},o(e){t&&U(t.$$.fragment,e),r=!1},d(e){e&&u(n),t&&j(t,e)}}}function me(e){let t,n,r,i;const s=[pe,fe,de],a=[];function o(e,t){return e[0].layout?0:e[0].component?1:e[0].childRoute?2:-1}return~(t=o(e))&&(n=a[t]=s[t](e)),{c(){n&&n.c(),r=p()},m(e,n){~t&&a[t].m(e,n),c(e,r,n),i=!0},p(e,[i]){let c=t;t=o(e),t===c?~t&&a[t].p(e,i):(n&&($(),U(a[c],1,1,(()=>{a[c]=null})),D()),~t?(n=a[t],n?n.p(e,i):(n=a[t]=s[t](e),n.c()),L(n,1),n.m(r.parentNode,r)):n=null)},i(e){i||(L(n),i=!0)},o(e){U(n),i=!1},d(e){~t&&a[t].d(e),e&&u(r)}}}function ge(e,t,n){let{currentRoute:r={}}=t,{params:i={}}=t;return e.$$set=e=>{"currentRoute"in e&&n(0,r=e.currentRoute),"params"in e&&n(1,i=e.params)},[r,i]}"undefined"!=typeof window&&(window.addEventListener("click",(e=>{if("a"!==e.target.localName.toLowerCase())return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;const t=ue.prefix?`/${ue.prefix.toLowerCase()}`:"",n=e.target.pathname&&e.target.host===window.location.host,r=!(t.length>1)||e.target.pathname.startsWith(t);if(n&&r){e.preventDefault();const t=e.target.pathname+e.target.search+e.target.search+e.target.hash;"_blank"===e.target.target?window.open(t,"newTab"):he(t)}})),window.onpopstate=function(e){let t=window.location.pathname+window.location.search+window.location.hash;he(t,null,!1)});class ye extends z{constructor(e){super(),B(this,e,ge,me,s,{currentRoute:0,params:1})}}function ve(e){let t,n;return t=new ye({props:{currentRoute:e[0]}}),{c(){M(t.$$.fragment)},m(e,r){x(t,e,r),n=!0},p(e,[n]){const r={};1&n&&(r.currentRoute=e[0]),t.$set(r)},i(e){n||(L(t.$$.fragment,e),n=!0)},o(e){U(t.$$.fragment,e),n=!1},d(e){j(t,e)}}}function be(e,t,n){let r;a(e,W,(e=>n(0,r=e)));let{routes:i=[]}=t,{options:s={}}=t;return b((()=>{le(i,document.location.href,s).setActiveRoute()})),e.$$set=e=>{"routes"in e&&n(1,i=e.routes),"options"in e&&n(2,s=e.options)},[r,i,s]}class we extends z{constructor(e){super(),B(this,e,be,ve,s,{routes:1,options:2})}}const _e=K(0);function Ie(e,t,n){const r=e.slice();return r[14]=t[n],r[16]=n,r}function Te(e,t,n){const r=e.slice();return r[17]=t[n],r[19]=n,r}function Ee(e){let t,n,r,i,s,a,l,p,y=e[3]?`you typed ${e[4]} words per minute`:"you lost :(",v=e[3]?"play again":"try again";return{c(){t=h("div"),n=h("div"),r=d(y),i=f(),s=h("button"),a=d(v),m(n,"class","game-over-div svelte-ryugib"),m(t,"class","game-over-environment svelte-ryugib")},m(u,h){var d,f,m,g;c(u,t,h),o(t,n),o(n,r),o(t,i),o(t,s),o(s,a),l||(d=s,f="click",m=e[6],d.addEventListener(f,m,g),p=()=>d.removeEventListener(f,m,g),l=!0)},p(e,t){24&t&&y!==(y=e[3]?`you typed ${e[4]} words per minute`:"you lost :(")&&g(r,y),8&t&&v!==(v=e[3]?"play again":"try again")&&g(a,v)},d(e){e&&u(t),l=!1,p()}}}function Ae(t){let n,r,s,a=t[0],o=[];for(let e=0;e<a.length;e+=1)o[e]=ke(Ie(t,a,e));return{c(){n=h("div");for(let e=0;e<o.length;e+=1)o[e].c();m(n,"class","game-environment svelte-ryugib"),m(n,"id","game-env")},m(a,u){c(a,n,u);for(let e=0;e<o.length;e+=1)o[e].m(n,null);var l;r||(l=t[5].call(null,n),s=l&&i(l.destroy)?l.destroy:e,r=!0)},p(e,t){if(3&t){let r;for(a=e[0],r=0;r<a.length;r+=1){const i=Ie(e,a,r);o[r]?o[r].p(i,t):(o[r]=ke(i),o[r].c(),o[r].m(n,null))}for(;r<o.length;r+=1)o[r].d(1);o.length=a.length}},d(e){e&&u(n),l(o,e),r=!1,s()}}}function Se(e){let t,n,r,i=e[17]+"";return{c(){t=h("div"),n=d(i),m(t,"class","game-letter svelte-ryugib"),m(t,"id",r=e[16]-1<0?`${e[19]}`:`${e[1][e[16]-1]+e[19]}`)},m(e,r){c(e,t,r),o(t,n)},p(e,s){1&s&&i!==(i=e[17]+"")&&g(n,i),2&s&&r!==(r=e[16]-1<0?`${e[19]}`:`${e[1][e[16]-1]+e[19]}`)&&m(t,"id",r)},d(e){e&&u(t)}}}function ke(e){let t,n,r,i=0!=e[16]&&function(e){let t,n,r;return{c(){t=h("div"),n=d(" "),m(t,"class","game-letter svelte-ryugib"),m(t,"id",r=""+(e[1][e[16]-1]-1))},m(e,r){c(e,t,r),o(t,n)},p(e,n){2&n&&r!==(r=""+(e[1][e[16]-1]-1))&&m(t,"id",r)},d(e){e&&u(t)}}}(e),s=e[14],a=[];for(let t=0;t<s.length;t+=1)a[t]=Se(Te(e,s,t));return{c(){t=h("div"),i&&i.c(),n=f();for(let e=0;e<a.length;e+=1)a[e].c();r=f(),m(t,"class","game-word svelte-ryugib")},m(e,s){c(e,t,s),i&&i.m(t,null),o(t,n);for(let e=0;e<a.length;e+=1)a[e].m(t,null);o(t,r)},p(e,n){if(0!=e[16]&&i.p(e,n),3&n){let i;for(s=e[14],i=0;i<s.length;i+=1){const o=Te(e,s,i);a[i]?a[i].p(o,n):(a[i]=Se(o),a[i].c(),a[i].m(t,r))}for(;i<a.length;i+=1)a[i].d(1);a.length=s.length}},d(e){e&&u(t),i&&i.d(),l(a,e)}}}function Ne(t){let n;function r(e,t){return e[2]?Ee:Ae}let i=r(t),s=i(t);return{c(){n=h("main"),s.c()},m(e,t){c(e,n,t),s.m(n,null)},p(e,[t]){i===(i=r(e))&&s?s.p(e,t):(s.d(1),s=i(e),s&&(s.c(),s.m(n,null)))},i:e,o:e,d(e){e&&u(n),s.d()}}}function Oe(e,t,n){Array.prototype.random=function(){return this[Math.floor(Math.random()*this.length)]};let r,i=["I like to play minecraft and league of legends and my name is David and I sometimes like to eat and there are a lot of things I like to do as well"],s=i.random(),a=s.split(" "),o=[];for(let e=0;e<a.length;e++)o.push(e-1<0?a[e].length+1:a[e].length+o[e-1]+1);_e.subscribe((e=>{r=e}));let c=!1,u=!1,l=0,h=0,d=0,f=0;return[a,o,c,u,f,function(){const e=e=>{if(e.preventDefault(),!c&&(0==l&&(l=new Date),s.charAt(r)!==e.key?(l=0,n(2,c=!0),h=0,d=0):(!function(e){let t=document.getElementById(r);t.style.color="rgba(100, 100, 100, 0.5)"," "==e.key&&function(e){var t=1,n=setInterval((function(){t<=0&&clearInterval(n),e.style.opacity=t,e.style.filter="alpha(opacity="+100*t+")",t-=.2*t+.05}),100)}(d.parentElement);t.offsetLeft<h&&t.parentElement.scrollIntoView(!0);d=t,h=t.offsetLeft}(e),_e.update((e=>e+1))),r==s.length)){let e=(new Date-l)/6e4;n(4,f=Math.round(a.length/e*1e3)/1e3),l=0,n(2,c=!0),n(3,u=!0),h=0,d=0}};return document.addEventListener("keypress",e),{destroy(){document.removeEventListener("keypress",e)}}},function(){_e.update((()=>0)),n(2,c=!1),n(3,u=!1),s=i.random(),n(0,a=s.split(" ")),n(1,o=[]);for(let e=0;e<a.length;e++)o.push(e-1<0?a[e].length+1:a[e].length+o[e-1]+1)}]}class Re extends z{constructor(e){super(),B(this,e,Oe,Ne,s,{})}}class Pe extends z{constructor(e){super(),B(this,e,null,null,s,{})}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
     */const Ce={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,a=s?e[t+1]:0,o=t+2<e.length,c=o?e[t+2]:0,u=i>>2,l=(3&i)<<4|a>>4;let h=(15&a)<<2|c>>6,d=63&c;o||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t}(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const a=t<e.length?n[e.charAt(t)]:64;++t;const o=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==a||null==o)throw Error();const c=i<<2|s>>4;if(r.push(c),64!==a){const e=s<<4&240|a>>2;if(r.push(e),64!==o){const e=a<<6&192|o;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function $e(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function De(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}class Le extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Le.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ue.prototype.create)}}class Ue{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(Me,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",a=`${this.serviceName}: ${s} (${r}).`;return new Le(r,a,n)}}const Me=/\{\$([^}]+)}/g;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function xe(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}class je{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Fe),void 0===r.error&&(r.error=Fe),void 0===r.complete&&(r.complete=Fe);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Fe(){}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Be(e,t=1e3,n=2){const r=t*Math.pow(n,e),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+i)}
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
     */function ze(e){return e&&e._delegate?e._delegate:e}class Ve{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var Ke;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(Ke||(Ke={}));const qe={debug:Ke.DEBUG,verbose:Ke.VERBOSE,info:Ke.INFO,warn:Ke.WARN,error:Ke.ERROR,silent:Ke.SILENT},He=Ke.INFO,We={[Ke.DEBUG]:"log",[Ke.VERBOSE]:"log",[Ke.INFO]:"info",[Ke.WARN]:"warn",[Ke.ERROR]:"error"},Ge=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=We[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class Je{constructor(e){this.name=e,this._logLevel=He,this._logHandler=Ge,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?qe[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ke.DEBUG,...e),this._logHandler(this,Ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ke.VERBOSE,...e),this._logHandler(this,Ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ke.INFO,...e),this._logHandler(this,Ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ke.WARN,...e),this._logHandler(this,Ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ke.ERROR,...e),this._logHandler(this,Ke.ERROR,...e)}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Xe{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Ye="@firebase/app",Ze="0.7.11",Qe=new Je("@firebase/app"),et={[Ye]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},tt=new Map,nt=new Map;function rt(e,t){try{e.container.addComponent(t)}catch(n){Qe.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function it(e){const t=e.name;if(nt.has(t))return Qe.debug(`There were multiple attempts to register component ${t}.`),!1;nt.set(t,e);for(const t of tt.values())rt(t,e);return!0}function st(e,t){return e.container.getProvider(t)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */new Ue("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});function at(e,t,n){var r;let i=null!==(r=et[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Qe.warn(e.join(" "))}it(new Ve(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var ot;ot="",it(new Ve("platform-logger",(e=>new Xe(e)),"PRIVATE")),at(Ye,Ze,ot),at(Ye,Ze,"esm2017"),at("fire-js","");
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
at("firebase","9.6.1","app");"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var ct,ut,lt=(ct=function(e,t){!function(e){function t(e){return Array.prototype.slice.call(e)}function n(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function r(e,t,r){var i,s=new Promise((function(s,a){n(i=e[t].apply(e,r)).then(s,a)}));return s.request=i,s}function i(e,t,n){var i=r(e,t,n);return i.then((function(e){if(e)return new l(e,i.request)}))}function s(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function a(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return r(this[t],i,arguments)})}))}function o(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return this[t][r].apply(this[t],arguments)})}))}function c(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return i(this[t],r,arguments)})}))}function u(e){this._index=e}function l(e,t){this._cursor=e,this._request=t}function h(e){this._store=e}function d(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function f(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new d(n)}function p(e){this._db=e}function m(e,t,n){var i=r(indexedDB,"open",[e,t]),s=i.request;return s&&(s.onupgradeneeded=function(e){n&&n(new f(s.result,e.oldVersion,s.transaction))}),i.then((function(e){return new p(e)}))}function g(e){return r(indexedDB,"deleteDatabase",[e])}s(u,"_index",["name","keyPath","multiEntry","unique"]),a(u,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),c(u,"_index",IDBIndex,["openCursor","openKeyCursor"]),s(l,"_cursor",["direction","key","primaryKey","value"]),a(l,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(l.prototype[e]=function(){var t=this,r=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,r),n(t._request).then((function(e){if(e)return new l(e,t._request)}))}))})})),h.prototype.createIndex=function(){return new u(this._store.createIndex.apply(this._store,arguments))},h.prototype.index=function(){return new u(this._store.index.apply(this._store,arguments))},s(h,"_store",["name","keyPath","indexNames","autoIncrement"]),a(h,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),c(h,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),o(h,"_store",IDBObjectStore,["deleteIndex"]),d.prototype.objectStore=function(){return new h(this._tx.objectStore.apply(this._tx,arguments))},s(d,"_tx",["objectStoreNames","mode"]),o(d,"_tx",IDBTransaction,["abort"]),f.prototype.createObjectStore=function(){return new h(this._db.createObjectStore.apply(this._db,arguments))},s(f,"_db",["name","version","objectStoreNames"]),o(f,"_db",IDBDatabase,["deleteObjectStore","close"]),p.prototype.transaction=function(){return new d(this._db.transaction.apply(this._db,arguments))},s(p,"_db",["name","version","objectStoreNames"]),o(p,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[h,u].forEach((function(n){e in n.prototype&&(n.prototype[e.replace("open","iterate")]=function(){var n=t(arguments),r=n[n.length-1],i=this._store||this._index,s=i[e].apply(i,n.slice(0,-1));s.onsuccess=function(){r(s.result)}})}))})),[u,h].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,r=[];return new Promise((function(i){n.iterateCursor(e,(function(e){e?(r.push(e.value),void 0===t||r.length!=t?e.continue():i(r)):i(r)}))}))})})),e.openDb=m,e.deleteDb=g,Object.defineProperty(e,"__esModule",{value:!0})}(t)},ct(ut={exports:{}},ut.exports),ut.exports);const ht="@firebase/installations",dt="0.5.4",ft=1e4,pt="w:0.5.4",mt="FIS_v2",gt=36e5,yt=new Ue("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function vt(e){return e instanceof Le&&e.code.includes("request-failed")}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function bt({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function wt(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function _t(e,t){const n=(await t.json()).error;return yt.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function It({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Tt(e,{refreshToken:t}){const n=It(e);return n.append("Authorization",function(e){return`FIS_v2 ${e}`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)),n}async function Et(e){const t=await e();return t.status>=500&&t.status<600?e():t}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function At(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
const St=/^[cdef][\w-]{21}$/;function kt(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e);return St.test(t)?t:""}catch(e){return""}}function Nt(e){return`${e.appName}!${e.appId}`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Ot=new Map;function Rt(e,t){const n=Nt(e);Pt(n,t),function(e,t){const n=function(){!Ct&&"BroadcastChannel"in self&&(Ct=new BroadcastChannel("[Firebase] FID Change"),Ct.onmessage=e=>{Pt(e.data.key,e.data.fid)});return Ct}();n&&n.postMessage({key:e,fid:t});0===Ot.size&&Ct&&(Ct.close(),Ct=null)}(n,t)}function Pt(e,t){const n=Ot.get(e);if(n)for(const e of n)e(t)}let Ct=null;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const $t="firebase-installations-store";let Dt=null;function Lt(){return Dt||(Dt=lt.openDb("firebase-installations-database",1,(e=>{if(0===e.oldVersion)e.createObjectStore($t)}))),Dt}async function Ut(e,t){const n=Nt(e),r=(await Lt()).transaction($t,"readwrite"),i=r.objectStore($t),s=await i.get(n);return await i.put(t,n),await r.complete,s&&s.fid===t.fid||Rt(e,t.fid),t}async function Mt(e){const t=Nt(e),n=(await Lt()).transaction($t,"readwrite");await n.objectStore($t).delete(t),await n.complete}async function xt(e,t){const n=Nt(e),r=(await Lt()).transaction($t,"readwrite"),i=r.objectStore($t),s=await i.get(n),a=t(s);return void 0===a?await i.delete(n):await i.put(a,n),await r.complete,!a||s&&s.fid===a.fid||Rt(e,a.fid),a}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function jt(e){let t;const n=await xt(e,(n=>{const r=function(e){return zt(e||{fid:kt(),registrationStatus:0})}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(yt.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function(e,{fid:t}){const n=bt(e),r=It(e),i={fid:t,authVersion:mt,appId:e.appId,sdkVersion:pt},s={method:"POST",headers:r,body:JSON.stringify(i)},a=await Et((()=>fetch(n,s)));if(a.ok){const e=await a.json();return{fid:e.fid||t,registrationStatus:2,refreshToken:e.refreshToken,authToken:wt(e.authToken)}}throw await _t("Create Installation",a)}(e,t);return Ut(e,n)}catch(n){throw vt(n)&&409===n.customData.serverCode?await Mt(e):await Ut(e,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Ft(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function Ft(e){let t=await Bt(e);for(;1===t.registrationStatus;)await At(100),t=await Bt(e);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await jt(e);return n||t}return t}function Bt(e){return xt(e,(e=>{if(!e)throw yt.create("installation-not-found");return zt(e)}))}function zt(e){return 1===(t=e).registrationStatus&&t.registrationTime+ft<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}async function Vt({appConfig:e,platformLoggerProvider:t},n){const r=function(e,{fid:t}){return`${bt(e)}/${t}/authTokens:generate`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e,n),i=Tt(e,n),s=t.getImmediate({optional:!0});s&&i.append("x-firebase-client",s.getPlatformInfoString());const a={installation:{sdkVersion:pt}},o={method:"POST",headers:i,body:JSON.stringify(a)},c=await Et((()=>fetch(r,o)));if(c.ok){return wt(await c.json())}throw await _t("Generate Auth Token",c)}async function Kt(e,t=!1){let n;const r=await xt(e.appConfig,(r=>{if(!Ht(r))throw yt.create("not-registered");const i=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+gt}(e)}(i))return r;if(1===i.requestStatus)return n=async function(e,t){let n=await qt(e.appConfig);for(;1===n.authToken.requestStatus;)await At(100),n=await qt(e.appConfig);const r=n.authToken;return 0===r.requestStatus?Kt(e,t):r}(e,t),r;{if(!navigator.onLine)throw yt.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=async function(e,t){try{const n=await Vt(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Ut(e.appConfig,r),n}catch(n){if(!vt(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Ut(e.appConfig,n)}else await Mt(e.appConfig);throw n}}(e,t),t}}));return n?await n:r.authToken}function qt(e){return xt(e,(e=>{if(!Ht(e))throw yt.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+ft<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}))}function Ht(e){return void 0!==e&&2===e.registrationStatus}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function Wt(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await jt(e);t&&await t}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(n.appConfig);return(await Kt(n,t)).token}function Gt(e){return yt.create("missing-app-config-values",{valueName:e})}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Jt="installations",Xt=e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw Gt("App Configuration");if(!e.name)throw Gt("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Gt(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,platformLoggerProvider:st(t,"platform-logger"),_delete:()=>Promise.resolve()}},Yt=e=>{const t=st(e.getProvider("app").getImmediate(),Jt).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:r}=await jt(t.appConfig);return r?r.catch(console.error):Kt(t).catch(console.error),n.fid}(t),getToken:e=>Wt(t,e)}};it(new Ve(Jt,Xt,"PUBLIC")),it(new Ve("installations-internal",Yt,"PRIVATE")),at(ht,dt),at(ht,dt,"esm2017");
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Zt="analytics",Qt="https://www.googletagmanager.com/gtag/js",en=new Je("@firebase/analytics");
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function tn(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function nn(e,t,n,r){return async function(i,s,a){try{"event"===i?await async function(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let e=i.send_to;Array.isArray(e)||(e=[e]);const r=await tn(n);for(const n of e){const e=r.find((e=>e.measurementId===n)),i=e&&t[e.appId];if(!i){s=[];break}s.push(i)}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(e){en.error(e)}}(e,t,n,s,a):"config"===i?await async function(e,t,n,r,i,s){const a=r[i];try{if(a)await t[a];else{const e=(await tn(n)).find((e=>e.measurementId===i));e&&await t[e.appId]}}catch(e){en.error(e)}e("config",i,s)}(e,t,n,r,s,a):e("set",s)}catch(e){en.error(e)}}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const rn=new Ue("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const sn=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function an(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function on(e,t=sn,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw rn.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw rn.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new un;return setTimeout((async()=>{o.abort()}),void 0!==n?n:6e4),cn({appId:r,apiKey:i,measurementId:s},a,o,t)}async function cn(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=sn){const{appId:s,measurementId:a}=e;try{await function(e,t){return new Promise(((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener((()=>{clearTimeout(s),r(rn.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(r,t)}catch(e){if(a)return en.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${e.message}]`),{appId:s,measurementId:a};throw e}try{const t=await async function(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:an(r)},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),a=await fetch(s,i);if(200!==a.status&&304!==a.status){let e="";try{const n=await a.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw rn.create("config-fetch-failed",{httpStatus:a.status,responseMessage:e})}return a.json()}(e);return i.deleteThrottleMetadata(s),t}catch(t){if(!function(e){if(!(e instanceof Le&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(t)){if(i.deleteThrottleMetadata(s),a)return en.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${t.message}]`),{appId:s,measurementId:a};throw t}const o=503===Number(t.customData.httpStatus)?Be(n,i.intervalMillis,30):Be(n,i.intervalMillis),c={throttleEndTimeMillis:Date.now()+o,backoffCount:n+1};return i.setThrottleMetadata(s,c),en.debug(`Calling attemptFetch again in ${o} millis`),cn(e,c,r,i)}}class un{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function ln(){if("object"!=typeof indexedDB)return en.warn(rn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}catch(e){return en.warn(rn.create("indexeddb-unavailable",{errorInfo:e}).message),!1}return!0}async function hn(e,t,n,r,i,s,a){var o;const c=on(e);c.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&en.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>en.error(e))),t.push(c);const u=ln().then((e=>e?r.getId():void 0)),[l,h]=await Promise.all([c,u]);(function(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Qt))return t;return null})()||function(e,t){const n=document.createElement("script");n.src=`${Qt}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}(s,l.measurementId),i("js",new Date);const d=null!==(o=null==a?void 0:a.config)&&void 0!==o?o:{};return d.origin="firebase",d.update=!0,null!=h&&(d.firebase_id=h),i("config",l.measurementId,d),l.measurementId}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class dn{constructor(e){this.app=e}_delete(){return delete fn[this.app.options.appId],Promise.resolve()}}let fn={},pn=[];const mn={};let gn,yn,vn="dataLayer",bn=!1;function wn(){const e=[];if(De()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=rn.create("invalid-analytics-context",{errorInfo:t});en.warn(n.message)}}function _n(e,t,n){wn();const r=e.options.appId;if(!r)throw rn.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw rn.create("no-api-key");en.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=fn[r])throw rn.create("already-exists",{id:r});if(!bn){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(vn);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,r,i){let s=function(...e){window[r].push(arguments)};return window[i]&&"function"==typeof window[i]&&(s=window[i]),window[i]=nn(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}(fn,pn,mn,vn,"gtag");yn=e,gn=t,bn=!0}fn[r]=hn(e,pn,mn,t,gn,vn,n);return new dn(e)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function In(e,t,n,r){e=ze(e),async function(e,t,n,r,i){if(i&&i.global)e("event",n,r);else{const i=await t;e("event",n,Object.assign(Object.assign({},r),{send_to:i}))}}(yn,fn[e.app.options.appId],t,n,r).catch((e=>en.error(e)))}const Tn="@firebase/analytics",En="0.7.4";
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
function An(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function Sn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}it(new Ve(Zt,((e,{options:t})=>_n(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),it(new Ve("analytics-internal",(function(e){try{const t=e.getProvider(Zt).getImmediate();return{logEvent:(e,n,r)=>In(t,e,n,r)}}catch(e){throw rn.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),at(Tn,En),at(Tn,En,"esm2017");const kn=Sn,Nn=new Ue("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),On=new Je("@firebase/auth");function Rn(e,...t){On.logLevel<=Ke.ERROR&&On.error(`Auth (9.6.1): ${e}`,...t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Pn(e,...t){throw $n(e,...t)}function Cn(e,...t){return $n(e,...t)}function $n(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Nn.create(e,...t)}function Dn(e,t,...n){if(!e)throw $n(t,...n)}function Ln(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Rn(t),new Error(t)}function Un(e,t){e||Ln(t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Mn=new Map;function xn(e){Un(e instanceof Function,"Expected a class definition");let t=Mn.get(e);return t?(Un(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Mn.set(e,t),t)}function jn(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Fn(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==jn()&&"https:"!==jn()&&!De()&&!("connection"in navigator)||navigator.onLine}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Bn{constructor(e,t){this.shortDelay=e,this.longDelay=t,Un(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return Fn()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
class zn{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Vn={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Kn=new Bn(3e4,6e4);
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function qn(e,t,n,r,i={}){return Hn(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const a=xe(Object.assign({key:e.config.apiKey},s)).slice(1),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/json",e.languageCode&&(o["X-Firebase-Locale"]=e.languageCode),zn.fetch()(Wn(e,e.config.apiHost,n,a),Object.assign({method:t,headers:o,referrerPolicy:"no-referrer"},i))}))}async function Hn(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Vn),t);try{const t=new Gn(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Jn(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Jn(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Jn(e,"email-already-in-use",s);const o=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw function(e,t,n){const r=Object.assign(Object.assign({},kn()),{[t]:n});return new Ue("auth","Firebase",r).create(t,{appName:e.name})}(e,o,a);Pn(e,o)}}catch(t){if(t instanceof Le)throw t;Pn(e,"network-request-failed")}}function Wn(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?function(e,t){Un(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}(e.config,i):`${e.config.apiScheme}://${i}`}class Gn{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Cn(this.auth,"timeout"))),Kn.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Jn(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Cn(e,t,r);return i.customData._tokenResponse=n,i}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
function Xn(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}function Yn(e){return 1e3*Number(e)}function Zn(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return Rn("JWT malformed, contained fewer than 3 sections"),null;try{const e=function(e){try{return Ce.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null}(n);return e?JSON.parse(e):(Rn("Failed to decode base64 JWT payload"),null)}catch(e){return Rn("Caught error parsing JWT payload as JSON",e),null}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function Qn(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Le&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class er{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class tr{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xn(this.lastLoginAt),this.creationTime=Xn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function nr(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Qn(e,async function(e,t){return qn(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));Dn(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const a=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=An(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const o=(c=e.providerData,u=a,[...c.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var c,u;const l=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==o?void 0:o.length)),d=!!l&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new tr(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class rr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Dn(e.idToken,"internal-error"),Dn(void 0!==e.idToken,"internal-error"),Dn(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Zn(e);return Dn(t,"internal-error"),Dn(void 0!==t.exp,"internal-error"),Dn(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Dn(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function(e,t){const n=await Hn(e,{},(async()=>{const n=xe({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=Wn(e,r,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",zn.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new rr;return n&&(Dn("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(Dn("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(Dn("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new rr,this.toJSON())}_performRefresh(){return Ln("not implemented")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ir(e,t){Dn("string"==typeof e||void 0===e,"internal-error",{appName:t})}class sr{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=An(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new er(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new tr(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Qn(this,this.stsTokenManager.getToken(this.auth,e));return Dn(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=ze(e),r=await n.getIdToken(t),i=Zn(r);Dn(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,a=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Xn(Yn(i.auth_time)),issuedAtTime:Xn(Yn(i.iat)),expirationTime:Xn(Yn(i.exp)),signInProvider:a||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=ze(e);await nr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Dn(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new sr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Dn(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await nr(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Qn(this,async function(e,t){return qn(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,a,o,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(a=t.tenantId)&&void 0!==a?a:void 0,m=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:b,isAnonymous:w,providerData:_,stsTokenManager:I}=t;Dn(v&&I,e,"internal-error");const T=rr.fromJSON(this.name,I);Dn("string"==typeof v,e,"internal-error"),ir(l,e.name),ir(h,e.name),Dn("boolean"==typeof b,e,"internal-error"),Dn("boolean"==typeof w,e,"internal-error"),ir(d,e.name),ir(f,e.name),ir(p,e.name),ir(m,e.name),ir(g,e.name),ir(y,e.name);const E=new sr({uid:v,auth:e,email:h,emailVerified:b,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:y});return _&&Array.isArray(_)&&(E.providerData=_.map((e=>Object.assign({},e)))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(e,t,n=!1){const r=new rr;r.updateFromServerResponse(t);const i=new sr({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await nr(i),i}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ar{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ar.type="NONE";const or=ar;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function cr(e,t,n){return`firebase:${e}:${t}:${n}`}class ur{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=cr(this.userKey,r.apiKey,i),this.fullPersistenceKey=cr("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?sr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ur(xn(or),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||xn(or);const s=cr(n,e.config.apiKey,e.name);let a=null;for(const n of t)try{const t=await n._get(s);if(t){const r=sr._fromJSON(e,t);n!==i&&(a=r),i=n;break}}catch(e){}const o=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&o.length?(i=o[0],a&&await i._set(s,a.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new ur(i,e,n)):new ur(i,e,n)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function lr(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(function(e=$e()){return/iemobile/i.test(e)}(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(function(e=$e()){return/firefox\//i.test(e)}(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(function(e=$e()){return/blackberry/i.test(e)}(t))return"Blackberry";if(function(e=$e()){return/webos/i.test(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t))return"Webos";if(function(e=$e()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}(t))return"Safari";if((t.includes("chrome/")||function(e=$e()){return/crios\//i.test(e)}(t))&&!t.includes("edge/"))return"Chrome";if(function(e=$e()){return/android/i.test(e)}(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function hr(e,t=[]){let n;switch(e){case"Browser":n=lr($e());break;case"Worker":n=`${lr($e())}-${e}`;break;default:n=e}return`${n}/JsCore/9.6.1/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class dr{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fr(this),this.idTokenSubscription=new fr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nn,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=xn(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ur.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);r&&r!==i||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(Dn(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await nr(e)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ze(e):null;return t&&Dn(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&Dn(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(xn(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ue("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&xn(e)||this._popupRedirectResolver;Dn(t,this,"argument-error"),this.redirectPersistenceManager=await ur.create(this,[xn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return Dn(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Dn(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}class fr{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new je(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return Dn(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}new Bn(3e4,6e4),
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
new Bn(2e3,1e4),
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
new Bn(3e4,6e4),
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
new Bn(5e3,15e3);var pr,mr="@firebase/auth",gr="0.19.4";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class yr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Dn(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function vr(){return null!=function(){const e=sessionStorage.getItem("user");return null==e?null:e.length>0?JSON.parse(e):null}()}function br(){return!vr()}pr="Browser",it(new Ve("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:i}=n.options;return(e=>{Dn(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),Dn(!(null==i?void 0:i.includes(":")),"argument-error",{appName:e.name});const n={apiKey:r,authDomain:i,clientPlatform:pr,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hr(pr)},s=new dr(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(xn);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),it(new Ve("auth-internal",(e=>(e=>new yr(e))(function(e){return ze(e)}(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),at(mr,gr,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(pr)),at(mr,gr,"esm2017");const wr=[{name:"perfect-type",component:Re},{name:"/",component:Re},{name:"login",component:Pe,onlyIf:{guard:br,redirect:"/"}},{name:"signup",component:Pe,onlyIf:{guard:br,redirect:"/"}}];function _r(t){let n,r,i,s;return i=new we({props:{routes:wr}}),{c(){n=h("meta"),r=f(),M(i.$$.fragment),document.title="Perfect Type",m(n,"charset","utf-8")},m(e,t){o(document.head,n),c(e,r,t),x(i,e,t),s=!0},p:e,i(e){s||(L(i.$$.fragment,e),s=!0)},o(e){U(i.$$.fragment,e),s=!1},d(e){u(n),e&&u(r),j(i,e)}}}return new class extends z{constructor(e){super(),B(this,e,null,_r,s,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
