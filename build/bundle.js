var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function i(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function o(e,n,i){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const i=e.subscribe(...n);return i.unsubscribe?()=>i.unsubscribe():i}(n,i))}function a(t,e){t.appendChild(e)}function h(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function u(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function l(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function p(){return f("")}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let y;function v(t){y=t}function b(t){(function(){if(!y)throw new Error("Function called outside component initialization");return y})().$$.on_mount.push(t)}const w=[],I=[],T=[],_=[],E=Promise.resolve();let A=!1;function S(t){T.push(t)}let C=!1;const k=new Set;function R(){if(!C){C=!0;do{for(let t=0;t<w.length;t+=1){const e=w[t];v(e),N(e.$$)}for(v(null),w.length=0;I.length;)I.pop()();for(let t=0;t<T.length;t+=1){const e=T[t];k.has(e)||(k.add(e),e())}T.length=0}while(w.length);for(;_.length;)_.pop()();A=!1,C=!1,k.clear()}}function N(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const P=new Set;let O;function D(){O={r:0,c:[],p:O}}function L(){O.r||i(O.c),O=O.p}function x(t,e){t&&t.i&&(P.delete(t),t.i(e))}function $(t,e,n,i){if(t&&t.o){if(P.has(t))return;P.add(t),O.c.push((()=>{P.delete(t),i&&(n&&t.d(1),i())})),t.o(e)}}function U(t){t&&t.c()}function M(t,n,s,o){const{fragment:a,on_mount:h,on_destroy:c,after_update:u}=t.$$;a&&a.m(n,s),o||S((()=>{const n=h.map(e).filter(r);c?c.push(...n):i(n),t.$$.on_mount=[]})),u.forEach(S)}function j(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function F(t,e){-1===t.$$.dirty[0]&&(w.push(t),A||(A=!0,E.then(R)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function B(e,r,s,o,a,h,u,l=[-1]){const f=y;v(e);const d=e.$$={fragment:null,ctx:null,props:h,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(f?f.$$.context:[])),callbacks:n(),dirty:l,skip_bound:!1,root:r.target||f.$$.root};u&&u(d.root);let p=!1;if(d.ctx=s?s(e,r.props||{},((t,n,...i)=>{const r=i.length?i[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),p&&F(e,t)),n})):[],d.update(),p=!0,i(d.before_update),d.fragment=!!o&&o(d.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);d.fragment&&d.fragment.l(t),t.forEach(c)}else d.fragment&&d.fragment.c();r.intro&&x(e.$$.fragment),M(e,r.target,r.anchor,r.customElement),R()}v(f)}class H{$destroy(){j(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const z=[];function K(e,n=t){let i;const r=new Set;function o(t){if(s(e,t)&&(e=t,i)){const t=!z.length;for(const t of r)t[1](),z.push(t,e);if(t){for(let t=0;t<z.length;t+=2)z[t][0](z[t+1]);z.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(s,a=t){const h=[s,a];return r.add(h),1===r.size&&(i=n(o)||t),s(e),()=>{r.delete(h),0===r.size&&(i(),i=null)}}}}const{set:V,subscribe:q}=K({}),G={subscribe:q,set:V,remove:()=>{V({})}},X=(t,e="")=>{const n=new URL(t);function i(){return s(e).reduce(((t,e,n)=>(":"===e[0]&&t.push({value:e.slice(1),index:n}),t)),[])}function r(){return s(n.pathname)}function s(t){return"/"===t||0===t.trim().length?[t]:("/"===t.slice(-1)&&(t=t.slice(0,-1)),"/"===t[0]&&(t=t.slice(1)),t.split("/"))}return Object.freeze({hash:n.hash,host:n.host,hostname:n.hostname,namedParams:function(){const t=r();return i().reduce(((e,n)=>(e[n.value]=t[n.index],e)),{})}(),namedParamsKeys:i().reduce(((t,e)=>(t.push(e.value),t)),[]),namedParamsValues:function(){const t=r();return i().reduce(((e,n)=>(e.push(t[n.index]),e)),[])}(),pathNames:r(),port:n.port,pathname:n.pathname,protocol:n.protocol,search:n.search,queryParams:function(){const t={};return n.searchParams.forEach(((e,n)=>{t[n]=e})),t}(),queryParamsKeys:function(){const t=[];return n.searchParams.forEach(((e,n)=>{t.push(n)})),t}(),queryParamsValues:function(){const t=[];return n.searchParams.forEach((e=>{t.push(e)})),t}()})},W=t=>{let e=!1;return 0===Object.keys(t).length||(t.childRoute&&0===Object.keys(t.childRoute).length?e=!0:t.childRoute&&(e=W(t.childRoute)),e)},J=(t,e)=>(e=tt(e)).includes(":")?e.includes(t):e.startsWith(t),Y=(t,e,n)=>{let i=!1;if(n)return{exists:e.lang&&e.lang[n]&&e.lang[n].includes(t),language:n};if(i=J(t,e.name),!i&&e.lang&&"object"==typeof e.lang)for(const[r,s]of Object.entries(e.lang))J(t,s)&&(i=!0,n=r);return{exists:i,language:n}},Z=t=>"/"===t||0===t.trim().length?[t]:(t=tt(t,"both")).split("/"),Q=(t="")=>{let e;return"/"===t||0===t.trim().length?t:(e=(t=tt(t,"lead")).split(":")[0],e=tt(e,"trail"),e.toLowerCase())},tt=(t,e="lead")=>("trail"!==e&&"both"!==e||(t=t.replace(/\/$/,"")),"lead"!==e&&"both"!==e||(t=t.replace(/^\//,"")),t),et=(t,e=null)=>e&&t.lang&&t.lang[e]?t.lang[e]:t.name,nt=t=>{const e=t||!1;let n="";const i=(t,n)=>{if("undefined"!=typeof window){const i=(t=>{let e=[];if(t.queryParams)for(let[n,i]of Object.entries(t.queryParams))e.push(`${n}=${i}`);const n=t.hash?t.hash:"";return e.length>0?`${t.path}?${e.join("&")}${n}`:t.path+n})(t);n&&window.history.pushState({page:i},"",i),e&&r(i)}},r=t=>{"undefined"!=typeof ga&&(ga("set","page",t),ga("send","pageview"))};return Object.freeze({active:()=>n,isActive:(t,e=!1)=>{"/"!==t[0]&&(t="/"+t);let i=X(`http://fake.com${t}`).pathname,r=X(`http://fake.com${n}`).pathname;return i=tt(i,"trail"),r=tt(r,"trail"),e?r.includes(i):r===i},setActive:(t,e)=>{n=t.path,i(t,e)}})},it=(t,e)=>{const n=(t=>{const e=t;return Object.freeze({valid:()=>e&&e.guard&&"function"==typeof e.guard,redirect:()=>!e.guard(),redirectPath:()=>{let t="/";return e.redirect&&e.redirect.length>0&&(t=e.redirect),t}})})(t.onlyIf);return Object.freeze({path:()=>{let i=e;return t.redirectTo&&t.redirectTo.length>0&&(i=t.redirectTo),n.valid()&&n.redirect()&&(i=n.redirectPath()),i}})};function rt({basePath:t,basePathName:e,pathNames:n,convert:i,currentLanguage:r}){let s,o,a=r;function h(){return et(o,a)}function c(){return Q(h())}function u(){return Q(s.result)}return Object.freeze({basePathSameAsLocalised:function(){return u()===c()},updatedPath:function(t){return o=t,s=((t,e,n,i,r=!1)=>{if("/"===t||0===t.trim().length)return{result:t,language:null};let s=t,o=n.name,a=i;if(r&&(a=""),o=tt(o),s=tt(s),n.childRoute)return{result:t,language:a};{let t=Y(s,n,a);t.exists&&r&&(s=et(n,i));let h=o.split(":")[0];return h=tt(h,"trail"),h=h.split("/"),h.shift(),h.forEach((()=>{const o=e[0];if(t=Y(`${s}/${o}`,n,a),!o||!t.exists)return{result:s,language:t.language};s=r?et(n,i):`${s}/${o}`,e.shift()})),{result:s,language:t.language}}})(e,n,o,a,i),a=i?r:s.language,s},basePathNameWithoutNamedParams:u,localisedPathName:h,localisedRouteWithoutNamedParams:c,namedPath:function(){let e=h();return e&&!e.startsWith("/")&&(e="/"+e),t?`${t}${e}`:e},pathNames:n,routeLanguage:function(){return a},routePath:function(){let e=`${t}/${u()}`;"//"===e&&(e="/"),a&&(n=((t,e)=>{const n=e.split("/");return n.length>1&&n.forEach((function(e,n){e.length>0&&n>0&&t.shift()})),t})(n,c()));const i=((t="")=>0===t.trim().length?[]:Z(t).reduce(((t,e)=>(":"===e[0]&&t.push(e.slice(1)),t)),[]))(h());return i&&i.length>0&&i.forEach((function(){n.length>0&&(e+=`/${n.shift()}`)})),e}})}function st({routes:t,currentUrl:e,routerOptions:n,convert:i}){const r=n.defaultLanguage,s=n.prefix?n.prefix.toLowerCase():"",o=function(t,e){if(e&&e.trim().length>0){const n=t.endsWith(e)?e:e+"/",i=t.replace(n,"");return X(i)}return X(t)}(e,s);let a="",h={},c=!1;function u(t,e,n,i,s){let l={};const f=rt({basePath:e,basePathName:n.shift().toLowerCase(),pathNames:n,convert:s,currentLanguage:i});return c=!1,t.forEach((function(t){if(f.updatedPath(t),function(t,e){const n=t.basePathSameAsLocalised();n&&(c=!0);return n||!c&&(t=>tt(t).startsWith(":"))(e)}(f,t.name)){let e=f.routePath();if(a=it(t,a).path(),l.name!==e&&(l=function({route:t,routePath:e,routeLanguage:n,urlParser:i,namedPath:s}){const o=function({routeInfo:t,path:e,routeNamedParams:n,urlParser:i,namedPath:r,language:s}){const o=()=>{const t=X(`https://fake.com${i.pathname}`,r).namedParams;return{...n,...t}};return Object.freeze({get:()=>({name:e,component:t.component,hash:i.hash,layout:t.layout,queryParams:i.queryParams,namedParams:o(),path:e,language:s}),namedParams:o})}({routeInfo:t,urlParser:i,path:e,routeNamedParams:h,namedPath:s,language:n||r});return h=o.namedParams(),o.get()}({route:t,routePath:e,routeLanguage:f.routeLanguage(),urlParser:o,namedPath:f.namedPath()})),t.nestedRoutes&&t.nestedRoutes.length>0&&f.pathNames.length>0)l.childRoute=u(t.nestedRoutes,e,f.pathNames,f.routeLanguage(),s),l.path=l.childRoute.path,l.language=l.childRoute.language;else if(function(t,e){return t.nestedRoutes&&t.nestedRoutes.length>0&&0===e.length}(t,f.pathNames)){const n=u(t.nestedRoutes,e,["index"],f.routeLanguage(),s);n&&Object.keys(n).length>0&&(l.childRoute=n,l.language=l.childRoute.language)}}})),a&&(l.redirectTo=a),l}const l=e=>{const n=t.find((t=>"404"==t.name)),i=e||r||"";return n?{...n,language:i,path:"404"}:{name:"404",component:"",path:"404",redirectTo:"/404.html"}};return Object.freeze({findActiveRoute:function(){let e=u(t,"",o.pathNames,n.lang,i);return e&&Object.keys(e).length&&!W(e)?(e.path=e.path.split("?")[0],s&&(e.path=`/${s}${e.path}`)):"undefined"!=typeof window&&(e=l(n.lang)),e}})}const ot="/404.html";let at,ht=[],ct={};const ut=(t,e,n={})=>{ct={...n},void 0!==e&&""!==e||(e=document.location.href),at=nt(ct.gaPageviews),e=tt(e,"trail"),ht=t;const i=()=>{let n=!1;return ct.langConvertTo&&(ct.lang=ct.langConvertTo,n=!0),st({routes:t,currentUrl:e,routerOptions:ct,convert:n}).findActiveRoute()};return Object.freeze({setActiveRoute:(t=!0)=>{const e=i();return e.redirectTo?((t,e)=>("undefined"!=typeof window&&(t===ot?at.setActive({path:ot},e):lt(t)),t))(e.redirectTo,t):(at.setActive(e,t),G.set(e),e)},findActiveRoute:i})},lt=(t,e=null,n=!0)=>(t=tt(t,"lead"),e&&(ct.langConvertTo=e),ut(ht,"http://fake.com/"+t,ct).setActiveRoute(n));function ft(t){let e,n;return e=new yt({props:{currentRoute:t[0].childRoute,params:t[1]}}),{c(){U(e.$$.fragment)},m(t,i){M(e,t,i),n=!0},p(t,n){const i={};1&n&&(i.currentRoute=t[0].childRoute),2&n&&(i.params=t[1]),e.$set(i)},i(t){n||(x(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){j(e,t)}}}function dt(t){let e,n,i;var r=t[0].component;function s(t){return{props:{currentRoute:{...t[0],component:""},params:t[1]}}}return r&&(e=new r(s(t))),{c(){e&&U(e.$$.fragment),n=p()},m(t,r){e&&M(e,t,r),h(t,n,r),i=!0},p(t,i){const o={};if(1&i&&(o.currentRoute={...t[0],component:""}),2&i&&(o.params=t[1]),r!==(r=t[0].component)){if(e){D();const t=e;$(t.$$.fragment,1,0,(()=>{j(t,1)})),L()}r?(e=new r(s(t)),U(e.$$.fragment),x(e.$$.fragment,1),M(e,n.parentNode,n)):e=null}else r&&e.$set(o)},i(t){i||(e&&x(e.$$.fragment,t),i=!0)},o(t){e&&$(e.$$.fragment,t),i=!1},d(t){t&&c(n),e&&j(e,t)}}}function pt(t){let e,n,i;var r=t[0].layout;function s(t){return{props:{currentRoute:{...t[0],layout:""},params:t[1]}}}return r&&(e=new r(s(t))),{c(){e&&U(e.$$.fragment),n=p()},m(t,r){e&&M(e,t,r),h(t,n,r),i=!0},p(t,i){const o={};if(1&i&&(o.currentRoute={...t[0],layout:""}),2&i&&(o.params=t[1]),r!==(r=t[0].layout)){if(e){D();const t=e;$(t.$$.fragment,1,0,(()=>{j(t,1)})),L()}r?(e=new r(s(t)),U(e.$$.fragment),x(e.$$.fragment,1),M(e,n.parentNode,n)):e=null}else r&&e.$set(o)},i(t){i||(e&&x(e.$$.fragment,t),i=!0)},o(t){e&&$(e.$$.fragment,t),i=!1},d(t){t&&c(n),e&&j(e,t)}}}function gt(t){let e,n,i,r;const s=[pt,dt,ft],o=[];function a(t,e){return t[0].layout?0:t[0].component?1:t[0].childRoute?2:-1}return~(e=a(t))&&(n=o[e]=s[e](t)),{c(){n&&n.c(),i=p()},m(t,n){~e&&o[e].m(t,n),h(t,i,n),r=!0},p(t,[r]){let h=e;e=a(t),e===h?~e&&o[e].p(t,r):(n&&(D(),$(o[h],1,1,(()=>{o[h]=null})),L()),~e?(n=o[e],n?n.p(t,r):(n=o[e]=s[e](t),n.c()),x(n,1),n.m(i.parentNode,i)):n=null)},i(t){r||(x(n),r=!0)},o(t){$(n),r=!1},d(t){~e&&o[e].d(t),t&&c(i)}}}function mt(t,e,n){let{currentRoute:i={}}=e,{params:r={}}=e;return t.$$set=t=>{"currentRoute"in t&&n(0,i=t.currentRoute),"params"in t&&n(1,r=t.params)},[i,r]}"undefined"!=typeof window&&(window.addEventListener("click",(t=>{if("a"!==t.target.localName.toLowerCase())return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;const e=ct.prefix?`/${ct.prefix.toLowerCase()}`:"",n=t.target.pathname&&t.target.host===window.location.host,i=!(e.length>1)||t.target.pathname.startsWith(e);if(n&&i){t.preventDefault();const e=t.target.pathname+t.target.search+t.target.search+t.target.hash;"_blank"===t.target.target?window.open(e,"newTab"):lt(e)}})),window.onpopstate=function(t){let e=window.location.pathname+window.location.search+window.location.hash;lt(e,null,!1)});class yt extends H{constructor(t){super(),B(this,t,mt,gt,s,{currentRoute:0,params:1})}}function vt(t){let e,n;return e=new yt({props:{currentRoute:t[0]}}),{c(){U(e.$$.fragment)},m(t,i){M(e,t,i),n=!0},p(t,[n]){const i={};1&n&&(i.currentRoute=t[0]),e.$set(i)},i(t){n||(x(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){j(e,t)}}}function bt(t,e,n){let i;o(t,G,(t=>n(0,i=t)));let{routes:r=[]}=e,{options:s={}}=e;return b((()=>{ut(r,document.location.href,s).setActiveRoute()})),t.$$set=t=>{"routes"in t&&n(1,r=t.routes),"options"in t&&n(2,s=t.options)},[i,r,s]}class wt extends H{constructor(t){super(),B(this,t,bt,vt,s,{routes:1,options:2})}}const It=K(0);function Tt(t,e,n){const i=t.slice();return i[14]=e[n],i[16]=n,i}function _t(t,e,n){const i=t.slice();return i[17]=e[n],i[19]=n,i}function Et(t){let e,n,i,r,s,o,u,p,y=t[3]?`you typed ${t[4]} words per minute`:"you lost :(",v=t[3]?"play again":"try again";return{c(){e=l("div"),n=l("div"),i=f(y),r=d(),s=l("button"),o=f(v),g(n,"class","game-over-div svelte-ryugib"),g(e,"class","game-over-environment svelte-ryugib")},m(c,l){var f,d,g,m;h(c,e,l),a(e,n),a(n,i),a(e,r),a(e,s),a(s,o),u||(f=s,d="click",g=t[6],f.addEventListener(d,g,m),p=()=>f.removeEventListener(d,g,m),u=!0)},p(t,e){24&e&&y!==(y=t[3]?`you typed ${t[4]} words per minute`:"you lost :(")&&m(i,y),8&e&&v!==(v=t[3]?"play again":"try again")&&m(o,v)},d(t){t&&c(e),u=!1,p()}}}function At(e){let n,i,s,o=e[0],a=[];for(let t=0;t<o.length;t+=1)a[t]=Ct(Tt(e,o,t));return{c(){n=l("div");for(let t=0;t<a.length;t+=1)a[t].c();g(n,"class","game-environment svelte-ryugib"),g(n,"id","game-env")},m(o,c){h(o,n,c);for(let t=0;t<a.length;t+=1)a[t].m(n,null);var u;i||(u=e[5].call(null,n),s=u&&r(u.destroy)?u.destroy:t,i=!0)},p(t,e){if(3&e){let i;for(o=t[0],i=0;i<o.length;i+=1){const r=Tt(t,o,i);a[i]?a[i].p(r,e):(a[i]=Ct(r),a[i].c(),a[i].m(n,null))}for(;i<a.length;i+=1)a[i].d(1);a.length=o.length}},d(t){t&&c(n),u(a,t),i=!1,s()}}}function St(t){let e,n,i,r=t[17]+"";return{c(){e=l("div"),n=f(r),g(e,"class","game-letter svelte-ryugib"),g(e,"id",i=t[16]-1<0?`${t[19]}`:`${t[1][t[16]-1]+t[19]}`)},m(t,i){h(t,e,i),a(e,n)},p(t,s){1&s&&r!==(r=t[17]+"")&&m(n,r),2&s&&i!==(i=t[16]-1<0?`${t[19]}`:`${t[1][t[16]-1]+t[19]}`)&&g(e,"id",i)},d(t){t&&c(e)}}}function Ct(t){let e,n,i,r=0!=t[16]&&function(t){let e,n,i;return{c(){e=l("div"),n=f(" "),g(e,"class","game-letter svelte-ryugib"),g(e,"id",i=""+(t[1][t[16]-1]-1))},m(t,i){h(t,e,i),a(e,n)},p(t,n){2&n&&i!==(i=""+(t[1][t[16]-1]-1))&&g(e,"id",i)},d(t){t&&c(e)}}}(t),s=t[14],o=[];for(let e=0;e<s.length;e+=1)o[e]=St(_t(t,s,e));return{c(){e=l("div"),r&&r.c(),n=d();for(let t=0;t<o.length;t+=1)o[t].c();i=d(),g(e,"class","game-word svelte-ryugib")},m(t,s){h(t,e,s),r&&r.m(e,null),a(e,n);for(let t=0;t<o.length;t+=1)o[t].m(e,null);a(e,i)},p(t,n){if(0!=t[16]&&r.p(t,n),3&n){let r;for(s=t[14],r=0;r<s.length;r+=1){const a=_t(t,s,r);o[r]?o[r].p(a,n):(o[r]=St(a),o[r].c(),o[r].m(e,i))}for(;r<o.length;r+=1)o[r].d(1);o.length=s.length}},d(t){t&&c(e),r&&r.d(),u(o,t)}}}function kt(e){let n;function i(t,e){return t[2]?Et:At}let r=i(e),s=r(e);return{c(){n=l("main"),s.c()},m(t,e){h(t,n,e),s.m(n,null)},p(t,[e]){r===(r=i(t))&&s?s.p(t,e):(s.d(1),s=r(t),s&&(s.c(),s.m(n,null)))},i:t,o:t,d(t){t&&c(n),s.d()}}}function Rt(t,e,n){Array.prototype.random=function(){return this[Math.floor(Math.random()*this.length)]};let i,r=["I like to play minecraft and league of legends and my name is David and I sometimes like to eat and there are a lot of things I like to do as well"],s=r.random(),o=s.split(" "),a=[];for(let t=0;t<o.length;t++)a.push(t-1<0?o[t].length+1:o[t].length+a[t-1]+1);It.subscribe((t=>{i=t}));let h=!1,c=!1,u=0,l=0,f=0,d=0;return[o,a,h,c,d,function(){const t=t=>{if(t.preventDefault(),!h&&(0==u&&(u=new Date),s.charAt(i)!==t.key?(u=0,n(2,h=!0),l=0,f=0):(!function(t){let e=document.getElementById(i);e.style.color="rgba(100, 100, 100, 0.5)"," "==t.key&&function(t){var e=1,n=setInterval((function(){e<=0&&clearInterval(n),t.style.opacity=e,t.style.filter="alpha(opacity="+100*e+")",e-=.2*e+.05}),100)}(f.parentElement);e.offsetLeft<l&&e.parentElement.scrollIntoView(!0);f=e,l=e.offsetLeft}(t),It.update((t=>t+1))),i==s.length)){let t=(new Date-u)/6e4;n(4,d=Math.round(o.length/t*1e3)/1e3),u=0,n(2,h=!0),n(3,c=!0),l=0,f=0}};return document.addEventListener("keypress",t),{destroy(){document.removeEventListener("keypress",t)}}},function(){It.update((()=>0)),n(2,h=!1),n(3,c=!1),s=r.random(),n(0,o=s.split(" ")),n(1,a=[]);for(let t=0;t<o.length;t++)a.push(t-1<0?o[t].length+1:o[t].length+a[t-1]+1)}]}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
const Nt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){const r=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,h=a?t[e+2]:0,c=r>>2,u=(3&r)<<4|o>>4;let l=(15&o)<<2|h>>6,f=63&h;a||(f=64,s||(l=64)),i.push(n[c],n[u],n[l],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296==(64512&r)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e}(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(s>>10)),e[i++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){const r=n[t.charAt(e++)],s=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==r||null==s||null==o||null==a)throw Error();const h=r<<2|s>>4;if(i.push(h),64!==o){const t=s<<4&240|o>>2;if(i.push(t),64!==a){const t=o<<6&192|a;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Pt(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Ot(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}class Dt extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Lt.prototype.create)}}class Lt{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?function(t,e){return t.replace(xt,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new Dt(i,o,n)}}const xt=/\{\$([^}]+)}/g;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function $t(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}class Ut{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=Mt),void 0===i.error&&(i.error=Mt),void 0===i.complete&&(i.complete=Mt);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}})),this.observers.push(i),r}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Mt(){}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function jt(t,e=1e3,n=2){const i=e*Math.pow(n,t),r=Math.round(.5*i*(Math.random()-.5)*2);return Math.min(144e5,i+r)}
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
     */function Ft(t){return t&&t._delegate?t._delegate:t}class Bt{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var Ht;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(Ht||(Ht={}));const zt={debug:Ht.DEBUG,verbose:Ht.VERBOSE,info:Ht.INFO,warn:Ht.WARN,error:Ht.ERROR,silent:Ht.SILENT},Kt=Ht.INFO,Vt={[Ht.DEBUG]:"log",[Ht.VERBOSE]:"log",[Ht.INFO]:"info",[Ht.WARN]:"warn",[Ht.ERROR]:"error"},qt=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=Vt[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class Gt{constructor(t){this.name=t,this._logLevel=Kt,this._logHandler=qt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Ht))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?zt[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Ht.DEBUG,...t),this._logHandler(this,Ht.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Ht.VERBOSE,...t),this._logHandler(this,Ht.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Ht.INFO,...t),this._logHandler(this,Ht.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Ht.WARN,...t),this._logHandler(this,Ht.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Ht.ERROR,...t),this._logHandler(this,Ht.ERROR,...t)}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Xt{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const Wt="@firebase/app",Jt="0.7.11",Yt=new Gt("@firebase/app"),Zt={[Wt]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Qt=new Map,te=new Map;function ee(t,e){try{t.container.addComponent(e)}catch(n){Yt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ne(t){const e=t.name;if(te.has(e))return Yt.debug(`There were multiple attempts to register component ${e}.`),!1;te.set(e,t);for(const e of Qt.values())ee(e,t);return!0}function ie(t,e){return t.container.getProvider(e)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */new Lt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});function re(t,e,n){var i;let r=null!==(i=Zt[t])&&void 0!==i?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${r}" with version "${e}":`];return s&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Yt.warn(t.join(" "))}ne(new Bt(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var se;se="",ne(new Bt("platform-logger",(t=>new Xt(t)),"PRIVATE")),re(Wt,Jt,se),re(Wt,Jt,"esm2017"),re("fire-js","");
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
re("firebase","9.6.1","app");"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var oe,ae,he=(oe=function(t,e){!function(t){function e(t){return Array.prototype.slice.call(t)}function n(t){return new Promise((function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}}))}function i(t,e,i){var r,s=new Promise((function(s,o){n(r=t[e].apply(t,i)).then(s,o)}));return s.request=r,s}function r(t,e,n){var r=i(t,e,n);return r.then((function(t){if(t)return new u(t,r.request)}))}function s(t,e,n){n.forEach((function(n){Object.defineProperty(t.prototype,n,{get:function(){return this[e][n]},set:function(t){this[e][n]=t}})}))}function o(t,e,n,r){r.forEach((function(r){r in n.prototype&&(t.prototype[r]=function(){return i(this[e],r,arguments)})}))}function a(t,e,n,i){i.forEach((function(i){i in n.prototype&&(t.prototype[i]=function(){return this[e][i].apply(this[e],arguments)})}))}function h(t,e,n,i){i.forEach((function(i){i in n.prototype&&(t.prototype[i]=function(){return r(this[e],i,arguments)})}))}function c(t){this._index=t}function u(t,e){this._cursor=t,this._request=e}function l(t){this._store=t}function f(t){this._tx=t,this.complete=new Promise((function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}}))}function d(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new f(n)}function p(t){this._db=t}function g(t,e,n){var r=i(indexedDB,"open",[t,e]),s=r.request;return s&&(s.onupgradeneeded=function(t){n&&n(new d(s.result,t.oldVersion,s.transaction))}),r.then((function(t){return new p(t)}))}function m(t){return i(indexedDB,"deleteDatabase",[t])}s(c,"_index",["name","keyPath","multiEntry","unique"]),o(c,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),h(c,"_index",IDBIndex,["openCursor","openKeyCursor"]),s(u,"_cursor",["direction","key","primaryKey","value"]),o(u,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(t){t in IDBCursor.prototype&&(u.prototype[t]=function(){var e=this,i=arguments;return Promise.resolve().then((function(){return e._cursor[t].apply(e._cursor,i),n(e._request).then((function(t){if(t)return new u(t,e._request)}))}))})})),l.prototype.createIndex=function(){return new c(this._store.createIndex.apply(this._store,arguments))},l.prototype.index=function(){return new c(this._store.index.apply(this._store,arguments))},s(l,"_store",["name","keyPath","indexNames","autoIncrement"]),o(l,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),h(l,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),a(l,"_store",IDBObjectStore,["deleteIndex"]),f.prototype.objectStore=function(){return new l(this._tx.objectStore.apply(this._tx,arguments))},s(f,"_tx",["objectStoreNames","mode"]),a(f,"_tx",IDBTransaction,["abort"]),d.prototype.createObjectStore=function(){return new l(this._db.createObjectStore.apply(this._db,arguments))},s(d,"_db",["name","version","objectStoreNames"]),a(d,"_db",IDBDatabase,["deleteObjectStore","close"]),p.prototype.transaction=function(){return new f(this._db.transaction.apply(this._db,arguments))},s(p,"_db",["name","version","objectStoreNames"]),a(p,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(t){[l,c].forEach((function(n){t in n.prototype&&(n.prototype[t.replace("open","iterate")]=function(){var n=e(arguments),i=n[n.length-1],r=this._store||this._index,s=r[t].apply(r,n.slice(0,-1));s.onsuccess=function(){i(s.result)}})}))})),[c,l].forEach((function(t){t.prototype.getAll||(t.prototype.getAll=function(t,e){var n=this,i=[];return new Promise((function(r){n.iterateCursor(t,(function(t){t?(i.push(t.value),void 0===e||i.length!=e?t.continue():r(i)):r(i)}))}))})})),t.openDb=g,t.deleteDb=m,Object.defineProperty(t,"__esModule",{value:!0})}(e)},oe(ae={exports:{}},ae.exports),ae.exports);const ce="@firebase/installations",ue="0.5.4",le=1e4,fe="w:0.5.4",de="FIS_v2",pe=36e5,ge=new Lt("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function me(t){return t instanceof Dt&&t.code.includes("request-failed")}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ye({projectId:t}){return`https://firebaseinstallations.googleapis.com/v1/projects/${t}/installations`}function ve(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()};var e}async function be(t,e){const n=(await e.json()).error;return ge.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function we({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Ie(t,{refreshToken:e}){const n=we(t);return n.append("Authorization",function(t){return`FIS_v2 ${t}`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)),n}async function Te(t){const e=await t();return e.status>=500&&e.status<600?t():e}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function _e(t){return new Promise((e=>{setTimeout(e,t)}))}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
const Ee=/^[cdef][\w-]{21}$/;function Ae(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const e=function(t){return(e=t,btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var e}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t);return Ee.test(e)?e:""}catch(t){return""}}function Se(t){return`${t.appName}!${t.appId}`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Ce=new Map;function ke(t,e){const n=Se(t);Re(n,e),function(t,e){const n=function(){!Ne&&"BroadcastChannel"in self&&(Ne=new BroadcastChannel("[Firebase] FID Change"),Ne.onmessage=t=>{Re(t.data.key,t.data.fid)});return Ne}();n&&n.postMessage({key:t,fid:e});0===Ce.size&&Ne&&(Ne.close(),Ne=null)}(n,e)}function Re(t,e){const n=Ce.get(t);if(n)for(const t of n)t(e)}let Ne=null;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Pe="firebase-installations-store";let Oe=null;function De(){return Oe||(Oe=he.openDb("firebase-installations-database",1,(t=>{if(0===t.oldVersion)t.createObjectStore(Pe)}))),Oe}async function Le(t,e){const n=Se(t),i=(await De()).transaction(Pe,"readwrite"),r=i.objectStore(Pe),s=await r.get(n);return await r.put(e,n),await i.complete,s&&s.fid===e.fid||ke(t,e.fid),e}async function xe(t){const e=Se(t),n=(await De()).transaction(Pe,"readwrite");await n.objectStore(Pe).delete(e),await n.complete}async function $e(t,e){const n=Se(t),i=(await De()).transaction(Pe,"readwrite"),r=i.objectStore(Pe),s=await r.get(n),o=e(s);return void 0===o?await r.delete(n):await r.put(o,n),await i.complete,!o||s&&s.fid===o.fid||ke(t,o.fid),o}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function Ue(t){let e;const n=await $e(t,(n=>{const i=function(t){return Fe(t||{fid:Ae(),registrationStatus:0})}(n),r=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine){return{installationEntry:e,registrationPromise:Promise.reject(ge.create("app-offline"))}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=async function(t,e){try{const n=await async function(t,{fid:e}){const n=ye(t),i=we(t),r={fid:e,authVersion:de,appId:t.appId,sdkVersion:fe},s={method:"POST",headers:i,body:JSON.stringify(r)},o=await Te((()=>fetch(n,s)));if(o.ok){const t=await o.json();return{fid:t.fid||e,registrationStatus:2,refreshToken:t.refreshToken,authToken:ve(t.authToken)}}throw await be("Create Installation",o)}(t,e);return Le(t,n)}catch(n){throw me(n)&&409===n.customData.serverCode?await xe(t):await Le(t,{fid:e.fid,registrationStatus:0}),n}}(t,n);return{installationEntry:n,registrationPromise:i}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:Me(t)}:{installationEntry:e}}(t,i);return e=r.registrationPromise,r.installationEntry}));return""===n.fid?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}async function Me(t){let e=await je(t);for(;1===e.registrationStatus;)await _e(100),e=await je(t);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await Ue(t);return n||e}return e}function je(t){return $e(t,(t=>{if(!t)throw ge.create("installation-not-found");return Fe(t)}))}function Fe(t){return 1===(e=t).registrationStatus&&e.registrationTime+le<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}async function Be({appConfig:t,platformLoggerProvider:e},n){const i=function(t,{fid:e}){return`${ye(t)}/${e}/authTokens:generate`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t,n),r=Ie(t,n),s=e.getImmediate({optional:!0});s&&r.append("x-firebase-client",s.getPlatformInfoString());const o={installation:{sdkVersion:fe}},a={method:"POST",headers:r,body:JSON.stringify(o)},h=await Te((()=>fetch(i,a)));if(h.ok){return ve(await h.json())}throw await be("Generate Auth Token",h)}async function He(t,e=!1){let n;const i=await $e(t.appConfig,(i=>{if(!Ke(i))throw ge.create("not-registered");const r=i.authToken;if(!e&&function(t){return 2===t.requestStatus&&!function(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+pe}(t)}(r))return i;if(1===r.requestStatus)return n=async function(t,e){let n=await ze(t.appConfig);for(;1===n.authToken.requestStatus;)await _e(100),n=await ze(t.appConfig);const i=n.authToken;return 0===i.requestStatus?He(t,e):i}(t,e),i;{if(!navigator.onLine)throw ge.create("app-offline");const e=function(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}(i);return n=async function(t,e){try{const n=await Be(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await Le(t.appConfig,i),n}catch(n){if(!me(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Le(t.appConfig,n)}else await xe(t.appConfig);throw n}}(t,e),e}}));return n?await n:i.authToken}function ze(t){return $e(t,(t=>{if(!Ke(t))throw ge.create("not-registered");const e=t.authToken;return 1===(n=e).requestStatus&&n.requestTime+le<Date.now()?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t;var n;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}))}function Ke(t){return void 0!==t&&2===t.registrationStatus}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function Ve(t,e=!1){const n=t;await async function(t){const{registrationPromise:e}=await Ue(t);e&&await e}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(n.appConfig);return(await He(n,e)).token}function qe(t){return ge.create("missing-app-config-values",{valueName:t})}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Ge="installations",Xe=t=>{const e=t.getProvider("app").getImmediate(),n=function(t){if(!t||!t.options)throw qe("App Configuration");if(!t.name)throw qe("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw qe(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e);return{app:e,appConfig:n,platformLoggerProvider:ie(e,"platform-logger"),_delete:()=>Promise.resolve()}},We=t=>{const e=ie(t.getProvider("app").getImmediate(),Ge).getImmediate();return{getId:()=>async function(t){const e=t,{installationEntry:n,registrationPromise:i}=await Ue(e.appConfig);return i?i.catch(console.error):He(e).catch(console.error),n.fid}(e),getToken:t=>Ve(e,t)}};ne(new Bt(Ge,Xe,"PUBLIC")),ne(new Bt("installations-internal",We,"PRIVATE")),re(ce,ue),re(ce,ue,"esm2017");
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Je="analytics",Ye="https://www.googletagmanager.com/gtag/js",Ze=new Gt("@firebase/analytics");
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Qe(t){return Promise.all(t.map((t=>t.catch((t=>t)))))}function tn(t,e,n,i){return async function(r,s,o){try{"event"===r?await async function(t,e,n,i,r){try{let s=[];if(r&&r.send_to){let t=r.send_to;Array.isArray(t)||(t=[t]);const i=await Qe(n);for(const n of t){const t=i.find((t=>t.measurementId===n)),r=t&&e[t.appId];if(!r){s=[];break}s.push(r)}}0===s.length&&(s=Object.values(e)),await Promise.all(s),t("event",i,r||{})}catch(t){Ze.error(t)}}(t,e,n,s,o):"config"===r?await async function(t,e,n,i,r,s){const o=i[r];try{if(o)await e[o];else{const t=(await Qe(n)).find((t=>t.measurementId===r));t&&await e[t.appId]}}catch(t){Ze.error(t)}t("config",r,s)}(t,e,n,i,s,o):t("set",s)}catch(t){Ze.error(t)}}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const en=new Lt("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const nn=new class{constructor(t={},e=1e3){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}};function rn(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function sn(t,e=nn,n){const{appId:i,apiKey:r,measurementId:s}=t.options;if(!i)throw en.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw en.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new an;return setTimeout((async()=>{a.abort()}),void 0!==n?n:6e4),on({appId:i,apiKey:r,measurementId:s},o,a,e)}async function on(t,{throttleEndTimeMillis:e,backoffCount:n},i,r=nn){const{appId:s,measurementId:o}=t;try{await function(t,e){return new Promise(((n,i)=>{const r=Math.max(e-Date.now(),0),s=setTimeout(n,r);t.addEventListener((()=>{clearTimeout(s),i(en.create("fetch-throttle",{throttleEndTimeMillis:e}))}))}))}(i,e)}catch(t){if(o)return Ze.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${t.message}]`),{appId:s,measurementId:o};throw t}try{const e=await async function(t){var e;const{appId:n,apiKey:i}=t,r={method:"GET",headers:rn(i)},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(s,r);if(200!==o.status&&304!==o.status){let t="";try{const n=await o.json();(null===(e=n.error)||void 0===e?void 0:e.message)&&(t=n.error.message)}catch(t){}throw en.create("config-fetch-failed",{httpStatus:o.status,responseMessage:t})}return o.json()}(t);return r.deleteThrottleMetadata(s),e}catch(e){if(!function(t){if(!(t instanceof Dt&&t.customData))return!1;const e=Number(t.customData.httpStatus);return 429===e||500===e||503===e||504===e}(e)){if(r.deleteThrottleMetadata(s),o)return Ze.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${e.message}]`),{appId:s,measurementId:o};throw e}const a=503===Number(e.customData.httpStatus)?jt(n,r.intervalMillis,30):jt(n,r.intervalMillis),h={throttleEndTimeMillis:Date.now()+a,backoffCount:n+1};return r.setThrottleMetadata(s,h),Ze.debug(`Calling attemptFetch again in ${a} millis`),on(t,h,i,r)}}class an{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach((t=>t()))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function hn(){if("object"!=typeof indexedDB)return Ze.warn(en.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}}))}catch(t){return Ze.warn(en.create("indexeddb-unavailable",{errorInfo:t}).message),!1}return!0}async function cn(t,e,n,i,r,s,o){var a;const h=sn(t);h.then((e=>{n[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&Ze.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((t=>Ze.error(t))),e.push(h);const c=hn().then((t=>t?i.getId():void 0)),[u,l]=await Promise.all([h,c]);(function(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Ye))return e;return null})()||function(t,e){const n=document.createElement("script");n.src=`${Ye}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}(s,u.measurementId),r("js",new Date);const f=null!==(a=null==o?void 0:o.config)&&void 0!==a?a:{};return f.origin="firebase",f.update=!0,null!=l&&(f.firebase_id=l),r("config",u.measurementId,f),u.measurementId}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class un{constructor(t){this.app=t}_delete(){return delete ln[this.app.options.appId],Promise.resolve()}}let ln={},fn=[];const dn={};let pn,gn,mn="dataLayer",yn=!1;function vn(){const t=[];if(Ot()&&t.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||t.push("Cookies are not available."),t.length>0){const e=t.map(((t,e)=>`(${e+1}) ${t}`)).join(" "),n=en.create("invalid-analytics-context",{errorInfo:e});Ze.warn(n.message)}}function bn(t,e,n){vn();const i=t.options.appId;if(!i)throw en.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw en.create("no-api-key");Ze.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=ln[i])throw en.create("already-exists",{id:i});if(!yn){!function(t){let e=[];Array.isArray(window[t])?e=window[t]:window[t]=e}(mn);const{wrappedGtag:t,gtagCore:e}=function(t,e,n,i,r){let s=function(...t){window[i].push(arguments)};return window[r]&&"function"==typeof window[r]&&(s=window[r]),window[r]=tn(s,t,e,n),{gtagCore:s,wrappedGtag:window[r]}}(ln,fn,dn,mn,"gtag");gn=t,pn=e,yn=!0}ln[i]=cn(t,fn,dn,e,pn,mn,n);return new un(t)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function wn(t,e,n,i){t=Ft(t),async function(t,e,n,i,r){if(r&&r.global)t("event",n,i);else{const r=await e;t("event",n,Object.assign(Object.assign({},i),{send_to:r}))}}(gn,ln[t.app.options.appId],e,n,i).catch((t=>Ze.error(t)))}const In="@firebase/analytics",Tn="0.7.4";ne(new Bt(Je,((t,{options:e})=>bn(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),e)),"PUBLIC")),ne(new Bt("analytics-internal",(function(t){try{const e=t.getProvider(Je).getImmediate();return{logEvent:(t,n,i)=>wn(e,t,n,i)}}catch(t){throw en.create("interop-component-reg-failed",{reason:t})}}),"PRIVATE")),re(In,Tn),re(In,Tn,"esm2017");var _n,En="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},An=An||{},Sn=En||self;function Cn(){}function kn(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function Rn(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var Nn="closure_uid_"+(1e9*Math.random()>>>0),Pn=0;function On(t,e,n){return t.call.apply(t.bind,arguments)}function Dn(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Ln(t,e,n){return(Ln=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?On:Dn).apply(null,arguments)}function xn(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function $n(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function Un(){this.s=this.s,this.o=this.o}var Mn={};Un.prototype.s=!1,Un.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,Nn)&&t[Nn]||(t[Nn]=++Pn)}(this);delete Mn[t]}},Un.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const jn=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Fn=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,r="string"==typeof t?t.split(""):t;for(let s=0;s<i;s++)s in r&&e.call(n,r[s],s,t)};function Bn(t){return Array.prototype.concat.apply([],arguments)}function Hn(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function zn(t){return/^[\s\xa0]*$/.test(t)}var Kn,Vn=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function qn(t,e){return-1!=t.indexOf(e)}function Gn(t,e){return t<e?-1:t>e?1:0}t:{var Xn=Sn.navigator;if(Xn){var Wn=Xn.userAgent;if(Wn){Kn=Wn;break t}}Kn=""}function Jn(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Yn(t){const e={};for(const n in t)e[n]=t[n];return e}var Zn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Qn(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e],i)t[n]=i[n];for(let e=0;e<Zn.length;e++)n=Zn[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function ti(t){return ti[" "](t),t}ti[" "]=Cn;var ei,ni,ii=qn(Kn,"Opera"),ri=qn(Kn,"Trident")||qn(Kn,"MSIE"),si=qn(Kn,"Edge"),oi=si||ri,ai=qn(Kn,"Gecko")&&!(qn(Kn.toLowerCase(),"webkit")&&!qn(Kn,"Edge"))&&!(qn(Kn,"Trident")||qn(Kn,"MSIE"))&&!qn(Kn,"Edge"),hi=qn(Kn.toLowerCase(),"webkit")&&!qn(Kn,"Edge");function ci(){var t=Sn.document;return t?t.documentMode:void 0}t:{var ui="",li=(ni=Kn,ai?/rv:([^\);]+)(\)|;)/.exec(ni):si?/Edge\/([\d\.]+)/.exec(ni):ri?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(ni):hi?/WebKit\/(\S+)/.exec(ni):ii?/(?:Version)[ \/]?(\S+)/.exec(ni):void 0);if(li&&(ui=li?li[1]:""),ri){var fi=ci();if(null!=fi&&fi>parseFloat(ui)){ei=String(fi);break t}}ei=ui}var di={};function pi(){return function(t){var e=di;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=Vn(String(ei)).split("."),n=Vn("9").split("."),i=Math.max(e.length,n.length);for(let o=0;0==t&&o<i;o++){var r=e[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==r[0].length&&0==s[0].length)break;t=Gn(0==r[1].length?0:parseInt(r[1],10),0==s[1].length?0:parseInt(s[1],10))||Gn(0==r[2].length,0==s[2].length)||Gn(r[2],s[2]),r=r[3],s=s[3]}while(0==t)}return 0<=t}))}Sn.document&&ri&&ci();var gi=function(){if(!Sn.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Sn.addEventListener("test",Cn,e),Sn.removeEventListener("test",Cn,e)}catch(t){}return t}();function mi(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function yi(t,e){if(mi.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ai){t:{try{ti(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:vi[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&yi.Z.h.call(this)}}mi.prototype.h=function(){this.defaultPrevented=!0},$n(yi,mi);var vi={2:"touch",3:"pen",4:"mouse"};yi.prototype.h=function(){yi.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var bi="closure_listenable_"+(1e6*Math.random()|0),wi=0;function Ii(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=r,this.key=++wi,this.ca=this.fa=!1}function Ti(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function _i(t){this.src=t,this.g={},this.h=0}function Ei(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=jn(r,e);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Ti(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Ai(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==i)return r}return-1}_i.prototype.add=function(t,e,n,i,r){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=Ai(t,e,i,r);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new Ii(e,this.src,s,!!i,r)).fa=n,t.push(e)),e};var Si="closure_lm_"+(1e6*Math.random()|0),Ci={};function ki(t,e,n,i,r){if(i&&i.once)return Ni(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)ki(t,e[s],n,i,r);return null}return n=Ui(n),t&&t[bi]?t.N(e,n,Rn(i)?!!i.capture:!!i,r):Ri(t,e,n,!1,i,r)}function Ri(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=Rn(r)?!!r.capture:!!r,a=xi(t);if(a||(t[Si]=a=new _i(t)),(n=a.add(e,n,i,o,s)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}var e=Li;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)gi||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(Di(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function Ni(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Ni(t,e[s],n,i,r);return null}return n=Ui(n),t&&t[bi]?t.O(e,n,Rn(i)?!!i.capture:!!i,r):Ri(t,e,n,!0,i,r)}function Pi(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)Pi(t,e[s],n,i,r);else i=Rn(i)?!!i.capture:!!i,n=Ui(n),t&&t[bi]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=Ai(s=t.g[e],n,i,r))&&(Ti(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=xi(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ai(e,n,i,r)),(n=-1<t?e[t]:null)&&Oi(n))}function Oi(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[bi])Ei(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Di(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=xi(e))?(Ei(n,t),0==n.h&&(n.src=null,e[Si]=null)):Ti(t)}}}function Di(t){return t in Ci?Ci[t]:Ci[t]="on"+t}function Li(t,e){if(t.ca)t=!0;else{e=new yi(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&Oi(t),t=n.call(i,e)}return t}function xi(t){return(t=t[Si])instanceof _i?t:null}var $i="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ui(t){return"function"==typeof t?t:(t[$i]||(t[$i]=function(e){return t.handleEvent(e)}),t[$i])}function Mi(){Un.call(this),this.i=new _i(this),this.P=this,this.I=null}function ji(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"==typeof e)e=new mi(e,t);else if(e instanceof mi)e.target=e.target||t;else{var r=e;Qn(e=new mi(i,t),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=Fi(o,i,!0,e)&&r}if(r=Fi(o=e.g=t,i,!0,e)&&r,r=Fi(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)r=Fi(o=e.g=n[s],i,!1,e)&&r}function Fi(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,h=o.ia||o.src;o.fa&&Ei(t.i,o),r=!1!==a.call(h,i)&&r}}return r&&!i.defaultPrevented}$n(Mi,Un),Mi.prototype[bi]=!0,Mi.prototype.removeEventListener=function(t,e,n,i){Pi(this,t,e,n,i)},Mi.prototype.M=function(){if(Mi.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)Ti(n[i]);delete e.g[t],e.h--}}this.I=null},Mi.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},Mi.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var Bi=Sn.JSON.stringify;function Hi(){var t=Wi;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var zi,Ki=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Vi),(t=>t.reset()));class Vi{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function qi(t){Sn.setTimeout((()=>{throw t}),0)}function Gi(t,e){zi||function(){var t=Sn.Promise.resolve(void 0);zi=function(){t.then(Ji)}}(),Xi||(zi(),Xi=!0),Wi.add(t,e)}var Xi=!1,Wi=new class{constructor(){this.h=this.g=null}add(t,e){const n=Ki.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function Ji(){for(var t;t=Hi();){try{t.h.call(t.g)}catch(t){qi(t)}var e=Ki;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Xi=!1}function Yi(t,e){Mi.call(this),this.h=t||1,this.g=e||Sn,this.j=Ln(this.kb,this),this.l=Date.now()}function Zi(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Qi(t,e,n){if("function"==typeof t)n&&(t=Ln(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Ln(t.handleEvent,t)}return 2147483647<Number(e)?-1:Sn.setTimeout(t,e||0)}function tr(t){t.g=Qi((()=>{t.g=null,t.i&&(t.i=!1,tr(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}$n(Yi,Mi),(_n=Yi.prototype).da=!1,_n.S=null,_n.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),ji(this,"tick"),this.da&&(Zi(this),this.start()))}},_n.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},_n.M=function(){Yi.Z.M.call(this),Zi(this),delete this.g};class er extends Un{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:tr(this)}M(){super.M(),this.g&&(Sn.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function nr(t){Un.call(this),this.h=t,this.g={}}$n(nr,Un);var ir=[];function rr(t,e,n,i){Array.isArray(n)||(n&&(ir[0]=n.toString()),n=ir);for(var r=0;r<n.length;r++){var s=ki(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function sr(t){Jn(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Oi(t)}),t),t.g={}}function or(){this.g=!0}function ar(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return Bi(n)}catch(t){return e}}(t,n)+(i?" "+i:"")}))}nr.prototype.M=function(){nr.Z.M.call(this),sr(this)},nr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},or.prototype.Aa=function(){this.g=!1},or.prototype.info=function(){};var hr={},cr=null;function ur(){return cr=cr||new Mi}function lr(t){mi.call(this,hr.Ma,t)}function fr(t){const e=ur();ji(e,new lr(e,t))}function dr(t,e){mi.call(this,hr.STAT_EVENT,t),this.stat=e}function pr(t){const e=ur();ji(e,new dr(e,t))}function gr(t,e){mi.call(this,hr.Na,t),this.size=e}function mr(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Sn.setTimeout((function(){t()}),e)}hr.Ma="serverreachability",$n(lr,mi),hr.STAT_EVENT="statevent",$n(dr,mi),hr.Na="timingevent",$n(gr,mi);var yr={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9};function vr(){}function br(t){return t.h||(t.h=t.i())}vr.prototype.h=null;var wr,Ir={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Tr(){mi.call(this,"d")}function _r(){mi.call(this,"c")}function Er(){}function Ar(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new nr(this),this.P=Cr,t=oi?125:void 0,this.W=new Yi(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Sr}function Sr(){this.i=null,this.g="",this.h=!1}$n(Tr,mi),$n(_r,mi),$n(Er,vr),Er.prototype.g=function(){return new XMLHttpRequest},Er.prototype.i=function(){return{}},wr=new Er;var Cr=45e3,kr={},Rr={};function Nr(t,e,n){t.K=1,t.v=Qr(Gr(e)),t.s=n,t.U=!0,Pr(t,null)}function Pr(t,e){t.F=Date.now(),xr(t),t.A=Gr(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),fs(n.h,"t",i),t.C=0,n=t.l.H,t.h=new Sr,t.g=fo(t.l,n?e:null,!t.s),0<t.O&&(t.L=new er(Ln(t.Ia,t,t.g),t.O)),rr(t.V,t.g,"readystatechange",t.gb),e=t.H?Yn(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),fr(1),function(t,e,n,i,r,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),h=0;h<a.length;h++){var c=a[h].split("=");if(1<c.length){var u=c[0];c=c[1];var l=u.split("_");o=2<=l.length&&"type"==l[1]?o+(u+"=")+c+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function Or(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Dr(t,e,n){let i,r=!0;for(;!t.I&&t.C<n.length;){if(i=Lr(t,n),i==Rr){4==e&&(t.o=4,pr(14),r=!1),ar(t.j,t.m,null,"[Incomplete Response]");break}if(i==kr){t.o=4,pr(15),ar(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}ar(t.j,t.m,i,null),Fr(t,i)}Or(t)&&i!=Rr&&i!=kr&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,pr(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),ro(e),e.L=!0,pr(11))):(ar(t.j,t.m,n,"[Invalid Chunked Response]"),jr(t),Mr(t))}function Lr(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?Rr:(n=Number(e.substring(n,i)),isNaN(n)?kr:(i+=1)+n>e.length?Rr:(e=e.substr(i,n),t.C=i+n,e))}function xr(t){t.Y=Date.now()+t.P,$r(t,t.P)}function $r(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=mr(Ln(t.eb,t),e)}function Ur(t){t.B&&(Sn.clearTimeout(t.B),t.B=null)}function Mr(t){0==t.l.G||t.I||ao(t.l,t)}function jr(t){Ur(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Zi(t.W),sr(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Fr(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||vs(n.i,t)))if(n.I=t.N,!t.J&&vs(n.i,t)&&3==n.G){try{var i=n.Ca.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;oo(n),Ws(n)}io(n),pr(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&0==n.A&&!n.v&&(n.v=mr(Ln(n.ab,n),6e3));if(1>=ys(n.i)&&n.ka){try{n.ka()}catch(t){}n.ka=void 0}}else co(n,11)}else if((t.J||n.g==t)&&oo(n),!zn(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.U=c[0],c=c[1],2==n.G)if("c"==c[0]){n.J=c[1],n.la=c[2];const e=c[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const r=c[4];null!=r&&(n.za=r,n.h.info("SVER="+n.za));const u=c[5];null!=u&&"number"==typeof u&&0<u&&(i=1.5*u,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.i;!s.g&&(qn(t,"spdy")||qn(t,"quic")||qn(t,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(bs(s,s.h),s.h=null))}if(i.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.sa=t,Zr(i.F,i.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=t;if((i=n).oa=lo(i,i.H?i.la:null,i.W),o.J){ws(i.i,o);var a=o,h=i.K;h&&a.setTimeout(h),a.B&&(Ur(a),xr(a)),i.g=o}else no(i);0<n.l.length&&Zs(n)}else"stop"!=c[0]&&"close"!=c[0]||co(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?co(n,7):Xs(n):"noop"!=c[0]&&n.j&&n.j.wa(c),n.A=0)}fr(4)}catch(t){}}function Br(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(kn(t)||"string"==typeof t)Fn(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(kn(t)||"string"==typeof t){n=[];for(var i=t.length,r=0;r<i;r++)n.push(r)}else for(r in n=[],i=0,t)n[i++]=r;i=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(kn(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),r=i.length;for(var s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}}function Hr(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof Hr)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}function zr(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];Kr(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)Kr(r,i=t.g[e])||(t.g[n++]=i,r[i]=1),e++;t.g.length=n}}function Kr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(_n=Ar.prototype).setTimeout=function(t){this.P=t},_n.gb=function(t){t=t.target;const e=this.L;e&&3==zs(t)?e.l():this.Ia(t)},_n.Ia=function(t){try{if(t==this.g)t:{const u=zs(this.g);var e=this.g.Da();const l=this.g.ba();if(!(3>u)&&(3!=u||oi||this.g&&(this.h.h||this.g.ga()||Ks(this.g)))){this.I||4!=u||7==e||fr(8==e||0>=l?3:2),Ur(this);var n=this.g.ba();this.N=n;e:if(Or(this)){var i=Ks(this.g);t="";var r=i.length,s=4==zs(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){jr(this),Mr(this);var o="";break e}this.h.i=new Sn.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(t,e,n,i,r,s,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,h=this.g;if((a=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!zn(a)){var c=a;break e}}c=null}if(!(n=c)){this.i=!1,this.o=3,pr(12),jr(this),Mr(this);break t}ar(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Fr(this,n)}this.U?(Dr(this,u,o),oi&&this.i&&3==u&&(rr(this.V,this.W,"tick",this.fb),this.W.start())):(ar(this.j,this.m,o,null),Fr(this,o)),4==u&&jr(this),this.i&&!this.I&&(4==u?ao(this.l,this):(this.i=!1,xr(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,pr(12)):(this.o=0,pr(13)),jr(this),Mr(this)}}}catch(t){}},_n.fb=function(){if(this.g){var t=zs(this.g),e=this.g.ga();this.C<e.length&&(Ur(this),Dr(this,t,e),this.i&&4!=t&&xr(this))}},_n.cancel=function(){this.I=!0,jr(this)},_n.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(fr(3),pr(17)),jr(this),this.o=2,Mr(this)):$r(this,this.Y-t)},(_n=Hr.prototype).R=function(){zr(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},_n.T=function(){return zr(this),this.g.concat()},_n.get=function(t,e){return Kr(this.h,t)?this.h[t]:e},_n.set=function(t,e){Kr(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},_n.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var r=n[i],s=this.get(r);t.call(e,s,r,this)}};var Vr=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function qr(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof qr){this.g=void 0!==e?e:t.g,Xr(this,t.j),this.s=t.s,Wr(this,t.i),Jr(this,t.m),this.l=t.l,e=t.h;var n=new hs;n.i=e.i,e.g&&(n.g=new Hr(e.g),n.h=e.h),Yr(this,n),this.o=t.o}else t&&(n=String(t).match(Vr))?(this.g=!!e,Xr(this,n[1]||"",!0),this.s=ts(n[2]||""),Wr(this,n[3]||"",!0),Jr(this,n[4]),this.l=ts(n[5]||"",!0),Yr(this,n[6]||"",!0),this.o=ts(n[7]||"")):(this.g=!!e,this.h=new hs(null,this.g))}function Gr(t){return new qr(t)}function Xr(t,e,n){t.j=n?ts(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Wr(t,e,n){t.i=n?ts(e,!0):e}function Jr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Yr(t,e,n){e instanceof hs?(t.h=e,function(t,e){e&&!t.j&&(cs(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(us(this,e),fs(this,n,t))}),t)),t.j=e}(t.h,t.g)):(n||(e=es(e,os)),t.h=new hs(e,t.g))}function Zr(t,e,n){t.h.set(e,n)}function Qr(t){return Zr(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ts(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function es(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,ns),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ns(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}qr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(es(e,is,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(es(e,is,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(es(n,"/"==n.charAt(0)?ss:rs,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",es(n,as)),t.join("")};var is=/[#\/\?@]/g,rs=/[#\?:]/g,ss=/[#\?]/g,os=/[#\?@]/g,as=/#/g;function hs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function cs(t){t.g||(t.g=new Hr,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function us(t,e){cs(t),e=ds(t,e),Kr(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,Kr((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&zr(t)))}function ls(t,e){return cs(t),e=ds(t,e),Kr(t.g.h,e)}function fs(t,e,n){us(t,e),0<n.length&&(t.i=null,t.g.set(ds(t,e),Hn(n)),t.h+=n.length)}function ds(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(_n=hs.prototype).add=function(t,e){cs(this),this.i=null,t=ds(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},_n.forEach=function(t,e){cs(this),this.g.forEach((function(n,i){Fn(n,(function(n){t.call(e,n,i,this)}),this)}),this)},_n.T=function(){cs(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var r=t[i],s=0;s<r.length;s++)n.push(e[i]);return n},_n.R=function(t){cs(this);var e=[];if("string"==typeof t)ls(this,t)&&(e=Bn(e,this.g.get(ds(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Bn(e,t[n])}return e},_n.set=function(t,e){return cs(this),this.i=null,ls(this,t=ds(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},_n.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},_n.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],r=encodeURIComponent(String(i));i=this.R(i);for(var s=0;s<i.length;s++){var o=r;""!==i[s]&&(o+="="+encodeURIComponent(String(i[s]))),t.push(o)}}return this.i=t.join("&")};function ps(t){this.l=t||gs,Sn.PerformanceNavigationTiming?t=0<(t=Sn.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(Sn.g&&Sn.g.Ea&&Sn.g.Ea()&&Sn.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var gs=10;function ms(t){return!!t.h||!!t.g&&t.g.size>=t.j}function ys(t){return t.h?1:t.g?t.g.size:0}function vs(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function bs(t,e){t.g?t.g.add(e):t.h=e}function ws(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Is(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Hn(t.i)}function Ts(){}function _s(){this.g=new Ts}function Es(t,e,n){const i=n||"";try{Br(t,(function(t,n){let r=t;Rn(t)&&(r=Bi(t)),e.push(i+n+"="+encodeURIComponent(r))}))}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function As(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(t){}}function Ss(t){this.l=t.$b||null,this.j=t.ib||!1}function Cs(t,e){Mi.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ks,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ps.prototype.cancel=function(){if(this.i=Is(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Ts.prototype.stringify=function(t){return Sn.JSON.stringify(t,void 0)},Ts.prototype.parse=function(t){return Sn.JSON.parse(t,void 0)},$n(Ss,vr),Ss.prototype.g=function(){return new Cs(this.l,this.j)},Ss.prototype.i=function(t){return function(){return t}}({}),$n(Cs,Mi);var ks=0;function Rs(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Ns(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ps(t)}function Ps(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(_n=Cs.prototype).open=function(t,e){if(this.readyState!=ks)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ps(this)},_n.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Sn).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},_n.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Ns(this)),this.readyState=ks},_n.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ps(this)),this.g&&(this.readyState=3,Ps(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==Sn.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Rs(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},_n.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ns(this):Ps(this),3==this.readyState&&Rs(this)}},_n.Ua=function(t){this.g&&(this.response=this.responseText=t,Ns(this))},_n.Ta=function(t){this.g&&(this.response=t,Ns(this))},_n.ha=function(){this.g&&Ns(this)},_n.setRequestHeader=function(t,e){this.v.append(t,e)},_n.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},_n.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Cs.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Os=Sn.JSON.parse;function Ds(t){Mi.call(this),this.headers=new Hr,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ls,this.K=this.L=!1}$n(Ds,Mi);var Ls="",xs=/^https?$/i,$s=["POST","PUT"];function Us(t){return"content-type"==t.toLowerCase()}function Ms(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,js(t),Bs(t)}function js(t){t.D||(t.D=!0,ji(t,"complete"),ji(t,"error"))}function Fs(t){if(t.h&&void 0!==An&&(!t.C[1]||4!=zs(t)||2!=t.ba()))if(t.v&&4==zs(t))Qi(t.Fa,0,t);else if(ji(t,"readystatechange"),4==zs(t)){t.h=!1;try{const a=t.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===a){var r=String(t.H).match(Vr)[1]||null;if(!r&&Sn.self&&Sn.self.location){var s=Sn.self.location.protocol;r=s.substr(0,s.length-1)}i=!xs.test(r?r.toLowerCase():"")}n=i}if(n)ji(t,"complete"),ji(t,"success");else{t.m=6;try{var o=2<zs(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.ba()+"]",js(t)}}finally{Bs(t)}}}function Bs(t,e){if(t.g){Hs(t);const n=t.g,i=t.C[0]?Cn:null;t.g=null,t.C=null,e||ji(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function Hs(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Sn.clearTimeout(t.A),t.A=null)}function zs(t){return t.g?t.g.readyState:0}function Ks(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ls:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Vs(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=function(t){let e="";return Jn(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Zr(t,e,n))}function qs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Gs(t){this.za=0,this.l=[],this.h=new or,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=qs("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=qs("baseRetryDelayMs",5e3,t),this.$a=qs("retryDelaySeedMs",1e4,t),this.Ya=qs("forwardChannelMaxRetries",2,t),this.ra=qs("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new ps(t&&t.concurrentRequestLimit),this.Ca=new _s,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function Xs(t){if(Js(t),3==t.G){var e=t.V++,n=Gr(t.F);Zr(n,"SID",t.J),Zr(n,"RID",e),Zr(n,"TYPE","terminate"),to(t,n),(e=new Ar(t,t.h,e,void 0)).K=2,e.v=Qr(Gr(n)),n=!1,Sn.navigator&&Sn.navigator.sendBeacon&&(n=Sn.navigator.sendBeacon(e.v.toString(),"")),!n&&Sn.Image&&((new Image).src=e.v,n=!0),n||(e.g=fo(e.l,null),e.g.ea(e.v)),e.F=Date.now(),xr(e)}uo(t)}function Ws(t){t.g&&(ro(t),t.g.cancel(),t.g=null)}function Js(t){Ws(t),t.u&&(Sn.clearTimeout(t.u),t.u=null),oo(t),t.i.cancel(),t.m&&("number"==typeof t.m&&Sn.clearTimeout(t.m),t.m=null)}function Ys(t,e){t.l.push(new class{constructor(t,e){this.h=t,this.g=e}}(t.Za++,e)),3==t.G&&Zs(t)}function Zs(t){ms(t.i)||t.m||(t.m=!0,Gi(t.Ha,t),t.C=0)}function Qs(t,e){var n;n=e?e.m:t.V++;const i=Gr(t.F);Zr(i,"SID",t.J),Zr(i,"RID",n),Zr(i,"AID",t.U),to(t,i),t.o&&t.s&&Vs(i,t.o,t.s),n=new Ar(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=eo(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),bs(t.i,n),Nr(n,i,e)}function to(t,e){t.j&&Br({},(function(t,n){Zr(e,n,t)}))}function eo(t,e,n){n=Math.min(t.l.length,n);var i=t.j?Ln(t.j.Oa,t.j,t):null;t:{var r=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=r[o].h;const a=r[o].g;if(n-=e,0>n)e=Math.max(0,r[o].h-100),s=!1;else try{Es(a,t,"req"+n+"_")}catch(t){i&&i(a)}}if(s){i=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,i}function no(t){t.g||t.u||(t.Y=1,Gi(t.Ga,t),t.A=0)}function io(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=mr(Ln(t.Ga,t),ho(t,t.A)),t.A++,!0)}function ro(t){null!=t.B&&(Sn.clearTimeout(t.B),t.B=null)}function so(t){t.g=new Ar(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Gr(t.oa);Zr(e,"RID","rpc"),Zr(e,"SID",t.J),Zr(e,"CI",t.N?"0":"1"),Zr(e,"AID",t.U),to(t,e),Zr(e,"TYPE","xmlhttp"),t.o&&t.s&&Vs(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Qr(Gr(e)),n.s=null,n.U=!0,Pr(n,t)}function oo(t){null!=t.v&&(Sn.clearTimeout(t.v),t.v=null)}function ao(t,e){var n=null;if(t.g==e){oo(t),ro(t),t.g=null;var i=2}else{if(!vs(t.i,e))return;n=e.D,ws(t.i,e),i=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;ji(i=ur(),new gr(i,n,e,r)),Zs(t)}else no(t);else if(3==(r=e.o)||0==r&&0<t.I||!(1==i&&function(t,e){return!(ys(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=mr(Ln(t.Ha,t,e),ho(t,t.C)),t.C++,0)))}(t,e)||2==i&&io(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:co(t,5);break;case 4:co(t,10);break;case 3:co(t,6);break;default:co(t,2)}}function ho(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function co(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var i=Ln(t.jb,t);n||(n=new qr("//www.google.com/images/cleardot.gif"),Sn.location&&"http"==Sn.location.protocol||Xr(n,"https"),Qr(n)),function(t,e){const n=new or;if(Sn.Image){const i=new Image;i.onload=xn(As,n,i,"TestLoadImage: loaded",!0,e),i.onerror=xn(As,n,i,"TestLoadImage: error",!1,e),i.onabort=xn(As,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=xn(As,n,i,"TestLoadImage: timeout",!1,e),Sn.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}(n.toString(),i)}else pr(2);t.G=0,t.j&&t.j.va(e),uo(t),Js(t)}function uo(t){t.G=0,t.I=-1,t.j&&(0==Is(t.i).length&&0==t.l.length||(t.i.i.length=0,Hn(t.l),t.l.length=0),t.j.ua())}function lo(t,e,n){let i=function(t){return t instanceof qr?Gr(t):new qr(t,void 0)}(n);if(""!=i.i)e&&Wr(i,e+"."+i.i),Jr(i,i.m);else{const t=Sn.location;i=function(t,e,n,i){var r=new qr(null,void 0);return t&&Xr(r,t),e&&Wr(r,e),n&&Jr(r,n),i&&(r.l=i),r}(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&Jn(t.aa,(function(t,e){Zr(i,e,t)})),e=t.D,n=t.sa,e&&n&&Zr(i,e,n),Zr(i,"VER",t.ma),to(t,i),i}function fo(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new Ds(new Ss({ib:!0})):new Ds(t.qa)).L=t.H,e}function po(){}function go(t,e){Mi.call(this),this.g=new Gs(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!zn(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!zn(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new vo(this)}function mo(t){Tr.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function yo(){_r.call(this),this.status=1}function vo(t){this.g=t}(_n=Ds.prototype).ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():wr.g(),this.C=this.u?br(this.u):br(wr),this.g.onreadystatechange=Ln(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void Ms(this,t)}t=n||"";const r=new Hr(this.headers);i&&Br(i,(function(t,e){r.set(e,t)})),i=function(t){t:{var e=Us;const n=t.length,i="string"==typeof t?t.split(""):t;for(let r=0;r<n;r++)if(r in i&&e.call(void 0,i[r],r,t)){e=r;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(r.T()),n=Sn.FormData&&t instanceof Sn.FormData,!(0<=jn($s,e))||i||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Hs(this),0<this.B&&((this.K=function(t){return ri&&pi()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ln(this.pa,this)):this.A=Qi(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){Ms(this,t)}},_n.pa=function(){void 0!==An&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ji(this,"timeout"),this.abort(8))},_n.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ji(this,"complete"),ji(this,"abort"),Bs(this))},_n.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Bs(this,!0)),Ds.Z.M.call(this)},_n.Fa=function(){this.s||(this.F||this.v||this.l?Fs(this):this.cb())},_n.cb=function(){Fs(this)},_n.ba=function(){try{return 2<zs(this)?this.g.status:-1}catch(t){return-1}},_n.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},_n.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Os(e)}},_n.Da=function(){return this.m},_n.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(_n=Gs.prototype).ma=8,_n.G=1,_n.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},_n.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new Ar(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=Yn(s),Qn(s,this.P)):s=this.P),null===this.o&&(r.H=s),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var i=this.l[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=eo(this,r,e),Zr(n=Gr(this.F),"RID",t),Zr(n,"CVER",22),this.D&&Zr(n,"X-HTTP-Session-Id",this.D),to(this,n),this.o&&s&&Vs(n,this.o,s),bs(this.i,r),this.Ra&&Zr(n,"TYPE","init"),this.ja?(Zr(n,"$req",e),Zr(n,"SID","null"),r.$=!0,Nr(r,n,null)):Nr(r,n,e),this.G=2}}else 3==this.G&&(t?Qs(this,t):0==this.l.length||ms(this.i)||Qs(this))},_n.Ga=function(){if(this.u=null,so(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=mr(Ln(this.bb,this),t)}},_n.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,pr(10),Ws(this),so(this))},_n.ab=function(){null!=this.v&&(this.v=null,Ws(this),io(this),pr(19))},_n.jb=function(t){t?(this.h.info("Successfully pinged google.com"),pr(2)):(this.h.info("Failed to ping google.com"),pr(1))},(_n=po.prototype).xa=function(){},_n.wa=function(){},_n.va=function(){},_n.ua=function(){},_n.Oa=function(){},$n(go,Mi),go.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Gi(Ln(t.hb,t,e))),pr(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=lo(t,null,t.W),Zs(t)},go.prototype.close=function(){Xs(this.g)},go.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,Ys(this.g,e)}else this.v?((e={}).__data__=Bi(t),Ys(this.g,e)):Ys(this.g,t)},go.prototype.M=function(){this.g.j=null,delete this.j,Xs(this.g),delete this.g,go.Z.M.call(this)},$n(mo,Tr),$n(yo,_r),$n(vo,po),vo.prototype.xa=function(){ji(this.g,"a")},vo.prototype.wa=function(t){ji(this.g,new mo(t))},vo.prototype.va=function(t){ji(this.g,new yo(t))},vo.prototype.ua=function(){ji(this.g,"b")},go.prototype.send=go.prototype.u,go.prototype.open=go.prototype.m,go.prototype.close=go.prototype.close,yr.NO_ERROR=0,yr.TIMEOUT=8,yr.HTTP_ERROR=6,Ir.OPEN="a",Ir.CLOSE="b",Ir.ERROR="c",Ir.MESSAGE="d",Mi.prototype.listen=Mi.prototype.N,Ds.prototype.listenOnce=Ds.prototype.O,Ds.prototype.getLastError=Ds.prototype.La,Ds.prototype.getLastErrorCode=Ds.prototype.Da,Ds.prototype.getStatus=Ds.prototype.ba,Ds.prototype.getResponseJson=Ds.prototype.Qa,Ds.prototype.getResponseText=Ds.prototype.ga,Ds.prototype.send=Ds.prototype.ea;const bo="@firebase/firestore";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class wo{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}wo.UNAUTHENTICATED=new wo(null),wo.GOOGLE_CREDENTIALS=new wo("google-credentials-uid"),wo.FIRST_PARTY=new wo("first-party-uid"),wo.MOCK_USER=new wo("mock-user");
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
let Io="9.6.1";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const To=new Gt("@firebase/firestore");function _o(t,...e){if(To.logLevel<=Ht.DEBUG){const n=e.map(Ao);To.debug(`Firestore (${Io}): ${t}`,...n)}}function Eo(t,...e){if(To.logLevel<=Ht.ERROR){const n=e.map(Ao);To.error(`Firestore (${Io}): ${t}`,...n)}}function Ao(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function So(t="Unexpected state"){const e=`FIRESTORE (${Io}) INTERNAL ASSERTION FAILED: `+t;throw Eo(e),new Error(e)}function Co(t,e){t||So()}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ko="cancelled",Ro="invalid-argument",No="failed-precondition",Po="unavailable";class Oo extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Do{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Lo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class xo{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(wo.UNAUTHENTICATED)))}shutdown(){}}class $o{constructor(t){this.t=t,this.currentUser=wo.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new Do;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Do,t.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{_o("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(_o("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Do)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(_o("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Co("string"==typeof e.accessToken),new Lo(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Co(null===t||"string"==typeof t),new wo(t)}}class Uo{constructor(t,e,n){this.type="FirstParty",this.user=wo.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class Mo{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new Uo(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(wo.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class jo{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Fo{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null}start(t,e){this.o=n=>{t.enqueueRetryable((()=>(t=>(null!=t.error&&_o("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`),e(t.token)))(n)))};const n=t=>{_o("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>n(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?n(t):_o("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Co("string"==typeof t.token),new jo(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Bo(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
var Ho,zo;function Ko(t){return"IndexedDbTransactionError"===t.name}function Vo(){return"undefined"!=typeof document?document:null}(zo=Ho||(Ho={}))[zo.OK=0]="OK",zo[zo.CANCELLED=1]="CANCELLED",zo[zo.UNKNOWN=2]="UNKNOWN",zo[zo.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",zo[zo.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",zo[zo.NOT_FOUND=5]="NOT_FOUND",zo[zo.ALREADY_EXISTS=6]="ALREADY_EXISTS",zo[zo.PERMISSION_DENIED=7]="PERMISSION_DENIED",zo[zo.UNAUTHENTICATED=16]="UNAUTHENTICATED",zo[zo.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",zo[zo.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",zo[zo.ABORTED=10]="ABORTED",zo[zo.OUT_OF_RANGE=11]="OUT_OF_RANGE",zo[zo.UNIMPLEMENTED=12]="UNIMPLEMENTED",zo[zo.INTERNAL=13]="INTERNAL",zo[zo.UNAVAILABLE=14]="UNAVAILABLE",zo[zo.DATA_LOSS=15]="DATA_LOSS";class qo{constructor(t,e,n=1e3,i=1.5,r=6e4){this.Oe=t,this.timerId=e,this.Wi=n,this.Gi=i,this.zi=r,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(t){this.cancel();const e=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),i=Math.max(0,e-n);i>0&&_o("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Hi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Ji=this.Oe.enqueueAfterDelay(this.timerId,i,(()=>(this.Yi=Date.now(),t()))),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Go{constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new Do,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,i,r){const s=Date.now()+n,o=new Go(t,e,s,i,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Oo(ko,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Xo{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=wo.UNAUTHENTICATED,this.clientId=class{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=Bo(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%t.length))}return n}}.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{_o("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(()=>Promise.resolve()))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Oo(No,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Do;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=function(t,e){if(Eo("AsyncQueue",`${e}: ${t}`),Ko(t))return new Oo(Po,`${e}: ${t}`);throw t}(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}class Wo{constructor(t,e,n,i,r,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Jo{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Jo&&t.projectId===this.projectId&&t.database===this.database}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Yo=new Map;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Zo{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Oo(Ro,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Oo(Ro,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,i){if(!0===e&&!0===i)throw new Oo(Ro,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
class Qo{constructor(){this.ma=Promise.resolve(),this.ga=[],this.ya=!1,this.pa=[],this.Ta=null,this.Ea=!1,this.Ia=!1,this.Aa=[],this.ur=new qo(this,"async_queue_retry"),this.Ra=()=>{const t=Vo();t&&_o("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ur.er()};const t=Vo();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ra)}get isShuttingDown(){return this.ya}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pa(),this.ba(t)}enterRestrictedMode(t){if(!this.ya){this.ya=!0,this.Ia=t||!1;const e=Vo();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ra)}}enqueue(t){if(this.Pa(),this.ya)return new Promise((()=>{}));const e=new Do;return this.ba((()=>this.ya&&this.Ia?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.ga.push(t),this.va())))}async va(){if(0!==this.ga.length){try{await this.ga[0](),this.ga.shift(),this.ur.reset()}catch(t){if(!Ko(t))throw t;_o("AsyncQueue","Operation failed with retryable error: "+t)}this.ga.length>0&&this.ur.Zi((()=>this.va()))}}ba(t){const e=this.ma.then((()=>(this.Ea=!0,t().catch((t=>{this.Ta=t,this.Ea=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t);throw Eo("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Ea=!1,t))))));return this.ma=e,e}enqueueAfterDelay(t,e,n){this.Pa(),this.Aa.indexOf(t)>-1&&(e=0);const i=Go.createAndSchedule(this,t,e,n,(t=>this.Va(t)));return this.pa.push(i),i}Pa(){this.Ta&&So()}verifyOperationInProgress(){}async Sa(){let t;do{t=this.ma,await t}while(t!==this.ma)}Da(t){for(const e of this.pa)if(e.timerId===t)return!0;return!1}Ca(t){return this.Sa().then((()=>{this.pa.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.pa)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Sa()}))}Na(t){this.Aa.push(t)}Va(t){const e=this.pa.indexOf(t);this.pa.splice(e,1)}}class ta extends class{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zo({}),this._settingsFrozen=!1,t instanceof Jo?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Oo(Ro,'"projectId" not provided in firebase.initializeApp.');return new Jo(t.options.projectId)}(t))}get app(){if(!this._app)throw new Oo(No,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Oo(No,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zo(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new xo;switch(t.type){case"gapi":const e=t.client;return Co(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new Mo(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Oo(Ro,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Yo.get(t);e&&(_o("ComponentProvider","Removing Datastore"),Yo.delete(t),e.terminate())}(this),Promise.resolve()}}{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new Qo,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||function(t){var e;const n=t._freezeSettings(),i=function(t,e,n,i){return new Wo(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Xo(t._authCredentials,t._appCheckCredentials,t._queue,i)}(this),this._firestoreClient.terminate()}}
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
function ea(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n}function na(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}!function(t,e=!0){Io="9.6.1",ne(new Bt("firestore",((t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=new ta(i,new $o(t.getProvider("auth-internal")),new Fo(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),r._setSettings(n),r}),"PUBLIC")),re(bo,"3.4.1",t),re(bo,"3.4.1","esm2017")}();const ia=na,ra=new Lt("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),sa=new Gt("@firebase/auth");function oa(t,...e){sa.logLevel<=Ht.ERROR&&sa.error(`Auth (9.6.1): ${t}`,...e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function aa(t,...e){throw ca(t,...e)}function ha(t,...e){return ca(t,...e)}function ca(t,...e){if("string"!=typeof t){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return ra.create(t,...e)}function ua(t,e,...n){if(!t)throw ca(e,...n)}function la(t){const e="INTERNAL ASSERTION FAILED: "+t;throw oa(e),new Error(e)}function fa(t,e){t||la(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const da=new Map;function pa(t){fa(t instanceof Function,"Expected a class definition");let e=da.get(t);return e?(fa(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,da.set(t,e),e)}function ma(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ya(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==ma()&&"https:"!==ma()&&!Ot()&&!("connection"in navigator)||navigator.onLine}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class va{constructor(t,e){this.shortDelay=t,this.longDelay=e,fa(e>t,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pt())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return ya()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
class ba{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void la("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void la("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void la("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const wa={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Ia=new va(3e4,6e4);
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function Ta(t,e,n,i,r={}){return _a(t,r,(async()=>{let r={},s={};i&&("GET"===e?s=i:r={body:JSON.stringify(i)});const o=$t(Object.assign({key:t.config.apiKey},s)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),ba.fetch()(Ea(t,t.config.apiHost,n,o),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},r))}))}async function _a(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},wa),e);try{const e=new Aa(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw Sa(t,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const e=r.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Sa(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Sa(t,"email-already-in-use",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw function(t,e,n){const i=Object.assign(Object.assign({},ia()),{[e]:n});return new Lt("auth","Firebase",i).create(e,{appName:t.name})}(t,a,o);aa(t,a)}}catch(e){if(e instanceof Dt)throw e;aa(t,"network-request-failed")}}function Ea(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?function(t,e){fa(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}(t.config,r):`${t.config.apiScheme}://${r}`}class Aa{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(ha(this.auth,"timeout"))),Ia.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Sa(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=ha(t,e,i);return r.customData._tokenResponse=n,r}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
function Ca(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}function ka(t){return 1e3*Number(t)}function Ra(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return oa("JWT malformed, contained fewer than 3 sections"),null;try{const t=function(t){try{return Nt.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null}(n);return t?JSON.parse(t):(oa("Failed to decode base64 JWT payload"),null)}catch(t){return oa("Caught error parsing JWT payload as JSON",t),null}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function Na(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof Dt&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class Pa{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Oa{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ca(this.lastLoginAt),this.creationTime=Ca(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function Da(t){var e;const n=t.auth,i=await t.getIdToken(),r=await Na(t,async function(t,e){return Ta(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:i}));ua(null==r?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?s.providerUserInfo.map((t=>{var{providerId:e}=t,n=ea(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(h=t.providerData,c=o,[...h.filter((t=>!c.some((e=>e.providerId===t.providerId)))),...c]);var h,c;const u=t.isAnonymous,l=!(t.email&&s.passwordHash||(null==a?void 0:a.length)),f=!!u&&l,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Oa(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,d)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class La{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ua(t.idToken,"internal-error"),ua(void 0!==t.idToken,"internal-error"),ua(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=Ra(t);return ua(e,"internal-error"),ua(void 0!==e.exp,"internal-error"),ua(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return ua(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:i,expiresIn:r}=await
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function(t,e){const n=await _a(t,{},(async()=>{const n=$t({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,s=Ea(t,i,"/v1/token",`key=${r}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",ba.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:i,expirationTime:r}=e,s=new La;return n&&(ua("string"==typeof n,"internal-error",{appName:t}),s.refreshToken=n),i&&(ua("string"==typeof i,"internal-error",{appName:t}),s.accessToken=i),r&&(ua("number"==typeof r,"internal-error",{appName:t}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new La,this.toJSON())}_performRefresh(){return la("not implemented")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function xa(t,e){ua("string"==typeof t||void 0===t,"internal-error",{appName:e})}class $a{constructor(t){var{uid:e,auth:n,stsTokenManager:i}=t,r=ea(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Pa(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.metadata=new Oa(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await Na(this,this.stsTokenManager.getToken(this.auth,t));return ua(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=Ft(t),i=await n.getIdToken(e),r=Ra(i);ua(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s="object"==typeof r.firebase?r.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Ca(ka(r.auth_time)),issuedAtTime:Ca(ka(r.iat)),expirationTime:Ca(ka(r.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=Ft(t);await Da(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(ua(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new $a(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){ua(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Da(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Na(this,async function(t,e){return Ta(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,i,r,s,o,a,h,c;const u=null!==(n=e.displayName)&&void 0!==n?n:void 0,l=null!==(i=e.email)&&void 0!==i?i:void 0,f=null!==(r=e.phoneNumber)&&void 0!==r?r:void 0,d=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(h=e.createdAt)&&void 0!==h?h:void 0,y=null!==(c=e.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:b,isAnonymous:w,providerData:I,stsTokenManager:T}=e;ua(v&&T,t,"internal-error");const _=La.fromJSON(this.name,T);ua("string"==typeof v,t,"internal-error"),xa(u,t.name),xa(l,t.name),ua("boolean"==typeof b,t,"internal-error"),ua("boolean"==typeof w,t,"internal-error"),xa(f,t.name),xa(d,t.name),xa(p,t.name),xa(g,t.name),xa(m,t.name),xa(y,t.name);const E=new $a({uid:v,auth:t,email:l,emailVerified:b,displayName:u,isAnonymous:w,photoURL:d,phoneNumber:f,tenantId:p,stsTokenManager:_,createdAt:m,lastLoginAt:y});return I&&Array.isArray(I)&&(E.providerData=I.map((t=>Object.assign({},t)))),g&&(E._redirectEventId=g),E}static async _fromIdTokenResponse(t,e,n=!1){const i=new La;i.updateFromServerResponse(e);const r=new $a({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await Da(r),r}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ua{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Ua.type="NONE";const Ma=Ua;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ja(t,e,n){return`firebase:${t}:${e}:${n}`}class Fa{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=ja(this.userKey,i.apiKey,r),this.fullPersistenceKey=ja("persistence",i.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?$a._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new Fa(pa(Ma),t,n);const i=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let r=i[0]||pa(Ma);const s=ja(n,t.config.apiKey,t.name);let o=null;for(const n of e)try{const e=await n._get(s);if(e){const i=$a._fromJSON(t,e);n!==r&&(o=i),r=n;break}}catch(t){}const a=i.filter((t=>t._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==r)try{await t._remove(s)}catch(t){}}))),new Fa(r,t,n)):new Fa(r,t,n)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ba(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(function(t=Pt()){return/iemobile/i.test(t)}(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(function(t=Pt()){return/firefox\//i.test(t)}(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(function(t=Pt()){return/blackberry/i.test(t)}(e))return"Blackberry";if(function(t=Pt()){return/webos/i.test(t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e))return"Webos";if(function(t=Pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}(e))return"Safari";if((e.includes("chrome/")||function(t=Pt()){return/crios\//i.test(t)}(e))&&!e.includes("edge/"))return"Chrome";if(function(t=Pt()){return/android/i.test(t)}(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Ha(t,e=[]){let n;switch(t){case"Browser":n=Ba(Pt());break;case"Worker":n=`${Ba(Pt())}-${t}`;break;default:n=t}return`${n}/JsCore/9.6.1/${e.length?e.join(","):"FirebaseCore-web"}`}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class za{constructor(t,e){this.app=t,this.config=e,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ka(this),this.idTokenSubscription=new Ka(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ra,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=e.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=pa(e)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Fa.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t):void 0}async initializeCurrentUser(t){var e;let n=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,r=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(t);i&&i!==r||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(ua(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Da(t)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Ft(t):null;return e&&ua(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&ua(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(pa(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Lt("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&pa(t)||this._popupRedirectResolver;ua(e,this,"argument-error"),this.redirectPersistenceManager=await Fa.create(this,[pa(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,i){if(this._deleted)return()=>{};const r="function"==typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return ua(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"==typeof e?t.addObserver(e,n,i):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ua(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ha(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};return this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId),t}}class Ka{constructor(t){this.auth=t,this.observer=null,this.addObserver=function(t,e){const n=new Ut(t,e);return n.subscribe.bind(n)}((t=>this.observer=t))}get next(){return ua(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}new va(3e4,6e4),
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
new va(2e3,1e4),
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
new va(3e4,6e4),
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
new va(5e3,15e3);var Va,qa="@firebase/auth",Ga="0.19.4";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Xa{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){ua(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */Va="Browser",ne(new Bt("auth",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),{apiKey:i,authDomain:r}=n.options;return(t=>{ua(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),ua(!(null==r?void 0:r.includes(":")),"argument-error",{appName:t.name});const n={apiKey:i,authDomain:r,clientPlatform:Va,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ha(Va)},s=new za(t,n);return function(t,e){const n=(null==e?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(pa);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,null==e?void 0:e.popupRedirectResolver)}(s,e),s})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),ne(new Bt("auth-internal",(t=>(t=>new Xa(t))(function(t){return Ft(t)}(t.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),re(qa,Ga,function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Va)),re(qa,Ga,"esm2017");const Wa=window.sessionStorage;function Ja(){return null!=function(){const t=Wa.getItem("user");return null==t?null:t.length>0?JSON.parse(t):null}()}function Ya(t){return[]}function Za(){return!Ja()}const Qa=[{name:"/",component:class extends H{constructor(t){super(),B(this,t,Rt,kt,s,{})}}},{name:"login",component:class extends H{constructor(t){super(),B(this,t,null,null,s,{})}},onlyIf:{guard:Za,redirect:"/"}},{name:"signup",component:class extends H{constructor(t){super(),B(this,t,Ya,null,s,{})}},onlyIf:{guard:Za,redirect:"/"}}];function th(e){let n,i,r,s;return r=new wt({props:{routes:Qa}}),{c(){n=l("meta"),i=d(),U(r.$$.fragment),document.title="Perfect Type",g(n,"charset","utf-8")},m(t,e){a(document.head,n),h(t,i,e),M(r,t,e),s=!0},p:t,i(t){s||(x(r.$$.fragment,t),s=!0)},o(t){$(r.$$.fragment,t),s=!1},d(t){c(n),t&&c(i),j(r,t)}}}return new class extends H{constructor(t){super(),B(this,t,null,th,s,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
