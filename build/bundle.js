var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function i(e){e.forEach(t)}function r(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function o(t,n,i){t.$$.on_destroy.push(function(t,...n){if(null==t)return e;const i=t.subscribe(...n);return i.unsubscribe?()=>i.unsubscribe():i}(n,i))}function a(e,t){e.appendChild(t)}function c(e,t,n){e.insertBefore(t,n||null)}function l(e){e.parentNode.removeChild(e)}function u(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function h(e){return document.createElement(e)}function d(e){return document.createTextNode(e)}function f(){return d(" ")}function p(){return d("")}function g(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function m(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function y(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let v;function w(e){v=e}function b(e){(function(){if(!v)throw new Error("Function called outside component initialization");return v})().$$.on_mount.push(e)}const I=[],T=[],E=[],_=[],k=Promise.resolve();let A=!1;function S(e){E.push(e)}function C(e){_.push(e)}let N=!1;const R=new Set;function D(){if(!N){N=!0;do{for(let e=0;e<I.length;e+=1){const t=I[e];w(t),O(t.$$)}for(w(null),I.length=0;T.length;)T.pop()();for(let e=0;e<E.length;e+=1){const t=E[e];R.has(t)||(R.add(t),t())}E.length=0}while(I.length);for(;_.length;)_.pop()();A=!1,N=!1,R.clear()}}function O(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(S)}}const P=new Set;let L;function x(){L={r:0,c:[],p:L}}function M(){L.r||i(L.c),L=L.p}function U(e,t){e&&e.i&&(P.delete(e),e.i(t))}function $(e,t,n,i){if(e&&e.o){if(P.has(e))return;P.add(e),L.c.push((()=>{P.delete(e),i&&(n&&e.d(1),i())})),e.o(t)}}function F(e,t,n){const i=e.$$.props[t];void 0!==i&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function V(e){e&&e.c()}function j(e,n,s,o){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=e.$$;a&&a.m(n,s),o||S((()=>{const n=c.map(t).filter(r);l?l.push(...n):i(n),e.$$.on_mount=[]})),u.forEach(S)}function B(e,t){const n=e.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function q(e,t){-1===e.$$.dirty[0]&&(I.push(e),A||(A=!0,k.then(D)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function z(t,r,s,o,a,c,u,h=[-1]){const d=v;w(t);const f=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:n(),dirty:h,skip_bound:!1,root:r.target||d.$$.root};u&&u(f.root);let p=!1;if(f.ctx=s?s(t,r.props||{},((e,n,...i)=>{const r=i.length?i[0]:n;return f.ctx&&a(f.ctx[e],f.ctx[e]=r)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](r),p&&q(t,e)),n})):[],f.update(),p=!0,i(f.before_update),f.fragment=!!o&&o(f.ctx),r.target){if(r.hydrate){const e=function(e){return Array.from(e.childNodes)}(r.target);f.fragment&&f.fragment.l(e),e.forEach(l)}else f.fragment&&f.fragment.c();r.intro&&U(t.$$.fragment),j(t,r.target,r.anchor,r.customElement),D()}w(d)}class H{$destroy(){B(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const K=[];function G(t,n=e){let i;const r=new Set;function o(e){if(s(t,e)&&(t=e,i)){const e=!K.length;for(const e of r)e[1](),K.push(e,t);if(e){for(let e=0;e<K.length;e+=2)K[e][0](K[e+1]);K.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(s,a=e){const c=[s,a];return r.add(c),1===r.size&&(i=n(o)||e),s(t),()=>{r.delete(c),0===r.size&&(i(),i=null)}}}}const{set:W,subscribe:J}=G({}),X={subscribe:J,set:W,remove:()=>{W({})}},Q=(e,t="")=>{const n=new URL(e);function i(){return s(t).reduce(((e,t,n)=>(":"===t[0]&&e.push({value:t.slice(1),index:n}),e)),[])}function r(){return s(n.pathname)}function s(e){return"/"===e||0===e.trim().length?[e]:("/"===e.slice(-1)&&(e=e.slice(0,-1)),"/"===e[0]&&(e=e.slice(1)),e.split("/"))}return Object.freeze({hash:n.hash,host:n.host,hostname:n.hostname,namedParams:function(){const e=r();return i().reduce(((t,n)=>(t[n.value]=e[n.index],t)),{})}(),namedParamsKeys:i().reduce(((e,t)=>(e.push(t.value),e)),[]),namedParamsValues:function(){const e=r();return i().reduce(((t,n)=>(t.push(e[n.index]),t)),[])}(),pathNames:r(),port:n.port,pathname:n.pathname,protocol:n.protocol,search:n.search,queryParams:function(){const e={};return n.searchParams.forEach(((t,n)=>{e[n]=t})),e}(),queryParamsKeys:function(){const e=[];return n.searchParams.forEach(((t,n)=>{e.push(n)})),e}(),queryParamsValues:function(){const e=[];return n.searchParams.forEach((t=>{e.push(t)})),e}()})},Y=e=>{let t=!1;return 0===Object.keys(e).length||(e.childRoute&&0===Object.keys(e.childRoute).length?t=!0:e.childRoute&&(t=Y(e.childRoute)),t)},Z=(e,t)=>(t=ie(t)).includes(":")?t.includes(e):t.startsWith(e),ee=(e,t,n)=>{let i=!1;if(n)return{exists:t.lang&&t.lang[n]&&t.lang[n].includes(e),language:n};if(i=Z(e,t.name),!i&&t.lang&&"object"==typeof t.lang)for(const[r,s]of Object.entries(t.lang))Z(e,s)&&(i=!0,n=r);return{exists:i,language:n}},te=e=>"/"===e||0===e.trim().length?[e]:(e=ie(e,"both")).split("/"),ne=(e="")=>{let t;return"/"===e||0===e.trim().length?e:(t=(e=ie(e,"lead")).split(":")[0],t=ie(t,"trail"),t.toLowerCase())},ie=(e,t="lead")=>("trail"!==t&&"both"!==t||(e=e.replace(/\/$/,"")),"lead"!==t&&"both"!==t||(e=e.replace(/^\//,"")),e),re=(e,t=null)=>t&&e.lang&&e.lang[t]?e.lang[t]:e.name,se=e=>{const t=e||!1;let n="";const i=(e,n)=>{if("undefined"!=typeof window){const i=(e=>{let t=[];if(e.queryParams)for(let[n,i]of Object.entries(e.queryParams))t.push(`${n}=${i}`);const n=e.hash?e.hash:"";return t.length>0?`${e.path}?${t.join("&")}${n}`:e.path+n})(e);n&&window.history.pushState({page:i},"",i),t&&r(i)}},r=e=>{"undefined"!=typeof ga&&(ga("set","page",e),ga("send","pageview"))};return Object.freeze({active:()=>n,isActive:(e,t=!1)=>{"/"!==e[0]&&(e="/"+e);let i=Q(`http://fake.com${e}`).pathname,r=Q(`http://fake.com${n}`).pathname;return i=ie(i,"trail"),r=ie(r,"trail"),t?r.includes(i):r===i},setActive:(e,t)=>{n=e.path,i(e,t)}})},oe=(e,t)=>{const n=(e=>{const t=e;return Object.freeze({valid:()=>t&&t.guard&&"function"==typeof t.guard,redirect:()=>!t.guard(),redirectPath:()=>{let e="/";return t.redirect&&t.redirect.length>0&&(e=t.redirect),e}})})(e.onlyIf);return Object.freeze({path:()=>{let i=t;return e.redirectTo&&e.redirectTo.length>0&&(i=e.redirectTo),n.valid()&&n.redirect()&&(i=n.redirectPath()),i}})};function ae({basePath:e,basePathName:t,pathNames:n,convert:i,currentLanguage:r}){let s,o,a=r;function c(){return re(o,a)}function l(){return ne(c())}function u(){return ne(s.result)}return Object.freeze({basePathSameAsLocalised:function(){return u()===l()},updatedPath:function(e){return o=e,s=((e,t,n,i,r=!1)=>{if("/"===e||0===e.trim().length)return{result:e,language:null};let s=e,o=n.name,a=i;if(r&&(a=""),o=ie(o),s=ie(s),n.childRoute)return{result:e,language:a};{let e=ee(s,n,a);e.exists&&r&&(s=re(n,i));let c=o.split(":")[0];return c=ie(c,"trail"),c=c.split("/"),c.shift(),c.forEach((()=>{const o=t[0];if(e=ee(`${s}/${o}`,n,a),!o||!e.exists)return{result:s,language:e.language};s=r?re(n,i):`${s}/${o}`,t.shift()})),{result:s,language:e.language}}})(t,n,o,a,i),a=i?r:s.language,s},basePathNameWithoutNamedParams:u,localisedPathName:c,localisedRouteWithoutNamedParams:l,namedPath:function(){let t=c();return t&&!t.startsWith("/")&&(t="/"+t),e?`${e}${t}`:t},pathNames:n,routeLanguage:function(){return a},routePath:function(){let t=`${e}/${u()}`;"//"===t&&(t="/"),a&&(n=((e,t)=>{const n=t.split("/");return n.length>1&&n.forEach((function(t,n){t.length>0&&n>0&&e.shift()})),e})(n,l()));const i=((e="")=>0===e.trim().length?[]:te(e).reduce(((e,t)=>(":"===t[0]&&e.push(t.slice(1)),e)),[]))(c());return i&&i.length>0&&i.forEach((function(){n.length>0&&(t+=`/${n.shift()}`)})),t}})}function ce({routes:e,currentUrl:t,routerOptions:n,convert:i}){const r=n.defaultLanguage,s=n.prefix?n.prefix.toLowerCase():"",o=function(e,t){if(t&&t.trim().length>0){const n=e.endsWith(t)?t:t+"/",i=e.replace(n,"");return Q(i)}return Q(e)}(t,s);let a="",c={},l=!1;function u(e,t,n,i,s){let h={};const d=ae({basePath:t,basePathName:n.shift().toLowerCase(),pathNames:n,convert:s,currentLanguage:i});return l=!1,e.forEach((function(e){if(d.updatedPath(e),function(e,t){const n=e.basePathSameAsLocalised();n&&(l=!0);return n||!l&&(e=>ie(e).startsWith(":"))(t)}(d,e.name)){let t=d.routePath();if(a=oe(e,a).path(),h.name!==t&&(h=function({route:e,routePath:t,routeLanguage:n,urlParser:i,namedPath:s}){const o=function({routeInfo:e,path:t,routeNamedParams:n,urlParser:i,namedPath:r,language:s}){const o=()=>{const e=Q(`https://fake.com${i.pathname}`,r).namedParams;return{...n,...e}};return Object.freeze({get:()=>({name:t,component:e.component,hash:i.hash,layout:e.layout,queryParams:i.queryParams,namedParams:o(),path:t,language:s}),namedParams:o})}({routeInfo:e,urlParser:i,path:t,routeNamedParams:c,namedPath:s,language:n||r});return c=o.namedParams(),o.get()}({route:e,routePath:t,routeLanguage:d.routeLanguage(),urlParser:o,namedPath:d.namedPath()})),e.nestedRoutes&&e.nestedRoutes.length>0&&d.pathNames.length>0)h.childRoute=u(e.nestedRoutes,t,d.pathNames,d.routeLanguage(),s),h.path=h.childRoute.path,h.language=h.childRoute.language;else if(function(e,t){return e.nestedRoutes&&e.nestedRoutes.length>0&&0===t.length}(e,d.pathNames)){const n=u(e.nestedRoutes,t,["index"],d.routeLanguage(),s);n&&Object.keys(n).length>0&&(h.childRoute=n,h.language=h.childRoute.language)}}})),a&&(h.redirectTo=a),h}const h=t=>{const n=e.find((e=>"404"==e.name)),i=t||r||"";return n?{...n,language:i,path:"404"}:{name:"404",component:"",path:"404",redirectTo:"/404.html"}};return Object.freeze({findActiveRoute:function(){let t=u(e,"",o.pathNames,n.lang,i);return t&&Object.keys(t).length&&!Y(t)?(t.path=t.path.split("?")[0],s&&(t.path=`/${s}${t.path}`)):"undefined"!=typeof window&&(t=h(n.lang)),t}})}const le="/404.html";let ue,he=[],de={};const fe=(e,t,n={})=>{de={...n},void 0!==t&&""!==t||(t=document.location.href),ue=se(de.gaPageviews),t=ie(t,"trail"),he=e;const i=()=>{let n=!1;return de.langConvertTo&&(de.lang=de.langConvertTo,n=!0),ce({routes:e,currentUrl:t,routerOptions:de,convert:n}).findActiveRoute()};return Object.freeze({setActiveRoute:(e=!0)=>{const t=i();return t.redirectTo?((e,t)=>("undefined"!=typeof window&&(e===le?ue.setActive({path:le},t):pe(e)),e))(t.redirectTo,e):(ue.setActive(t,e),X.set(t),t)},findActiveRoute:i})},pe=(e,t=null,n=!0)=>(e=ie(e,"lead"),t&&(de.langConvertTo=t),fe(he,"http://fake.com/"+e,de).setActiveRoute(n));function ge(e){let t,n;return t=new be({props:{currentRoute:e[0].childRoute,params:e[1]}}),{c(){V(t.$$.fragment)},m(e,i){j(t,e,i),n=!0},p(e,n){const i={};1&n&&(i.currentRoute=e[0].childRoute),2&n&&(i.params=e[1]),t.$set(i)},i(e){n||(U(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){B(t,e)}}}function me(e){let t,n,i;var r=e[0].component;function s(e){return{props:{currentRoute:{...e[0],component:""},params:e[1]}}}return r&&(t=new r(s(e))),{c(){t&&V(t.$$.fragment),n=p()},m(e,r){t&&j(t,e,r),c(e,n,r),i=!0},p(e,i){const o={};if(1&i&&(o.currentRoute={...e[0],component:""}),2&i&&(o.params=e[1]),r!==(r=e[0].component)){if(t){x();const e=t;$(e.$$.fragment,1,0,(()=>{B(e,1)})),M()}r?(t=new r(s(e)),V(t.$$.fragment),U(t.$$.fragment,1),j(t,n.parentNode,n)):t=null}else r&&t.$set(o)},i(e){i||(t&&U(t.$$.fragment,e),i=!0)},o(e){t&&$(t.$$.fragment,e),i=!1},d(e){e&&l(n),t&&B(t,e)}}}function ye(e){let t,n,i;var r=e[0].layout;function s(e){return{props:{currentRoute:{...e[0],layout:""},params:e[1]}}}return r&&(t=new r(s(e))),{c(){t&&V(t.$$.fragment),n=p()},m(e,r){t&&j(t,e,r),c(e,n,r),i=!0},p(e,i){const o={};if(1&i&&(o.currentRoute={...e[0],layout:""}),2&i&&(o.params=e[1]),r!==(r=e[0].layout)){if(t){x();const e=t;$(e.$$.fragment,1,0,(()=>{B(e,1)})),M()}r?(t=new r(s(e)),V(t.$$.fragment),U(t.$$.fragment,1),j(t,n.parentNode,n)):t=null}else r&&t.$set(o)},i(e){i||(t&&U(t.$$.fragment,e),i=!0)},o(e){t&&$(t.$$.fragment,e),i=!1},d(e){e&&l(n),t&&B(t,e)}}}function ve(e){let t,n,i,r;const s=[ye,me,ge],o=[];function a(e,t){return e[0].layout?0:e[0].component?1:e[0].childRoute?2:-1}return~(t=a(e))&&(n=o[t]=s[t](e)),{c(){n&&n.c(),i=p()},m(e,n){~t&&o[t].m(e,n),c(e,i,n),r=!0},p(e,[r]){let c=t;t=a(e),t===c?~t&&o[t].p(e,r):(n&&(x(),$(o[c],1,1,(()=>{o[c]=null})),M()),~t?(n=o[t],n?n.p(e,r):(n=o[t]=s[t](e),n.c()),U(n,1),n.m(i.parentNode,i)):n=null)},i(e){r||(U(n),r=!0)},o(e){$(n),r=!1},d(e){~t&&o[t].d(e),e&&l(i)}}}function we(e,t,n){let{currentRoute:i={}}=t,{params:r={}}=t;return e.$$set=e=>{"currentRoute"in e&&n(0,i=e.currentRoute),"params"in e&&n(1,r=e.params)},[i,r]}"undefined"!=typeof window&&(window.addEventListener("click",(e=>{if("a"!==e.target.localName.toLowerCase())return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;const t=de.prefix?`/${de.prefix.toLowerCase()}`:"",n=e.target.pathname&&e.target.host===window.location.host,i=!(t.length>1)||e.target.pathname.startsWith(t);if(n&&i){e.preventDefault();const t=e.target.pathname+e.target.search+e.target.search+e.target.hash;"_blank"===e.target.target?window.open(t,"newTab"):pe(t)}})),window.onpopstate=function(e){let t=window.location.pathname+window.location.search+window.location.hash;pe(t,null,!1)});class be extends H{constructor(e){super(),z(this,e,we,ve,s,{currentRoute:0,params:1})}}function Ie(e){let t,n;return t=new be({props:{currentRoute:e[0]}}),{c(){V(t.$$.fragment)},m(e,i){j(t,e,i),n=!0},p(e,[n]){const i={};1&n&&(i.currentRoute=e[0]),t.$set(i)},i(e){n||(U(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){B(t,e)}}}function Te(e,t,n){let i;o(e,X,(e=>n(0,i=e)));let{routes:r=[]}=t,{options:s={}}=t;return b((()=>{fe(r,document.location.href,s).setActiveRoute()})),e.$$set=e=>{"routes"in e&&n(1,r=e.routes),"options"in e&&n(2,s=e.options)},[i,r,s]}class Ee extends H{constructor(e){super(),z(this,e,Te,Ie,s,{routes:1,options:2})}}const _e=G(0),ke=G(10);function Ae(t){let n,i,s,o;return{c(){n=h("button"),i=d(t[0]),m(n,"class","svelte-1guggz1")},m(e,l){c(e,n,l),a(n,i),s||(o=g(n,"click",(function(){r(t[1])&&t[1].apply(this,arguments)})),s=!0)},p(e,[n]){t=e,1&n&&y(i,t[0])},i:e,o:e,d(e){e&&l(n),s=!1,o()}}}function Se(e,t,n){let{text:i}=t,{onClickFn:r}=t;return e.$$set=e=>{"text"in e&&n(0,i=e.text),"onClickFn"in e&&n(1,r=e.onClickFn)},[i,r]}class Ce extends H{constructor(e){super(),z(this,e,Se,Ae,s,{text:0,onClickFn:1})}}function Ne(e){let t,n,i,r,s,o,u=e[0]?`you typed ${e[1]} words per minute`:"you lost :(";return s=new Ce({props:{onClickFn:e[2],text:e[0]?"play again":"try again"}}),{c(){t=h("div"),n=h("div"),i=d(u),r=f(),V(s.$$.fragment),m(n,"class","game-over-div svelte-jt4vm3"),m(t,"class","game-over-environment svelte-jt4vm3")},m(e,l){c(e,t,l),a(t,n),a(n,i),a(t,r),j(s,t,null),o=!0},p(e,[t]){(!o||3&t)&&u!==(u=e[0]?`you typed ${e[1]} words per minute`:"you lost :(")&&y(i,u);const n={};4&t&&(n.onClickFn=e[2]),1&t&&(n.text=e[0]?"play again":"try again"),s.$set(n)},i(e){o||(U(s.$$.fragment,e),o=!0)},o(e){$(s.$$.fragment,e),o=!1},d(e){e&&l(t),B(s)}}}function Re(e,t,n){let{winGame:i}=t,{wpm:r}=t,{tryAgain:s}=t;return e.$$set=e=>{"winGame"in e&&n(0,i=e.winGame),"wpm"in e&&n(1,r=e.wpm),"tryAgain"in e&&n(2,s=e.tryAgain)},[i,r,s]}class De extends H{constructor(e){super(),z(this,e,Re,Ne,s,{winGame:0,wpm:1,tryAgain:2})}}var Oe=["ability","able","aboard","about","above","accept","accident","according","account","accurate","acres","across","act","action","active","activity","actual","actually","add","addition","additional","adjective","adult","adventure","advice","affect","afraid","after","afternoon","again","against","age","ago","agree","ahead","aid","air","airplane","alike","alive","all","allow","almost","alone","along","aloud","alphabet","already","also","although","am","among","amount","ancient","angle","angry","animal","announced","another","answer","ants","any","anybody","anyone","anything","anyway","anywhere","apart","apartment","appearance","apple","applied","appropriate","are","area","arm","army","around","arrange","arrangement","arrive","arrow","art","article","as","aside","ask","asleep","at","ate","atmosphere","atom","atomic","attached","attack","attempt","attention","audience","author","automobile","available","average","avoid","aware","away","baby","back","bad","badly","bag","balance","ball","balloon","band","bank","bar","bare","bark","barn","base","baseball","basic","basis","basket","bat","battle","be","bean","bear","beat","beautiful","beauty","became","because","become","becoming","bee","been","before","began","beginning","begun","behavior","behind","being","believed","bell","belong","below","belt","bend","beneath","bent","beside","best","bet","better","between","beyond","bicycle","bigger","biggest","bill","birds","birth","birthday","bit","bite","black","blank","blanket","blew","blind","block","blood","blow","blue","board","boat","body","bone","book","border","born","both","bottle","bottom","bound","bow","bowl","box","boy","brain","branch","brass","brave","bread","break","breakfast","breath","breathe","breathing","breeze","brick","bridge","brief","bright","bring","broad","broke","broken","brother","brought","brown","brush","buffalo","build","building","built","buried","burn","burst","bus","bush","business","busy","but","butter","buy","by","cabin","cage","cake","call","calm","came","camera","camp","can","canal","cannot","cap","capital","captain","captured","car","carbon","card","care","careful","carefully","carried","carry","case","cast","castle","cat","catch","cattle","caught","cause","cave","cell","cent","center","central","century","certain","certainly","chain","chair","chamber","chance","change","changing","chapter","character","characteristic","charge","chart","check","cheese","chemical","chest","chicken","chief","child","children","choice","choose","chose","chosen","church","circle","circus","citizen","city","class","classroom","claws","clay","clean","clear","clearly","climate","climb","clock","close","closely","closer","cloth","clothes","clothing","cloud","club","coach","coal","coast","coat","coffee","cold","collect","college","colony","color","column","combination","combine","come","comfortable","coming","command","common","community","company","compare","compass","complete","completely","complex","composed","composition","compound","concerned","condition","congress","connected","consider","consist","consonant","constantly","construction","contain","continent","continued","contrast","control","conversation","cook","cookies","cool","copper","copy","corn","corner","correct","correctly","cost","cotton","could","count","country","couple","courage","course","court","cover","cow","cowboy","crack","cream","create","creature","crew","crop","cross","crowd","cry","cup","curious","current","curve","customs","cut","cutting","daily","damage","dance","danger","dangerous","dark","darkness","date","daughter","dawn","day","dead","deal","dear","death","decide","declared","deep","deeply","deer","definition","degree","depend","depth","describe","desert","design","desk","detail","determine","develop","development","diagram","diameter","did","die","differ","difference","different","difficult","difficulty","dig","dinner","direct","direction","directly","dirt","dirty","disappear","discover","discovery","discuss","discussion","disease","dish","distance","distant","divide","division","do","doctor","does","dog","doing","doll","dollar","done","donkey","door","dot","double","doubt","down","dozen","draw","drawn","dream","dress","drew","dried","drink","drive","driven","driver","driving","drop","dropped","drove","dry","duck","due","dug","dull","during","dust","duty","each","eager","ear","earlier","early","earn","earth","easier","easily","east","easy","eat","eaten","edge","education","effect","effort","egg","eight","either","electric","electricity","element","elephant","eleven","else","empty","end","enemy","energy","engine","engineer","enjoy","enough","enter","entire","entirely","environment","equal","equally","equator","equipment","escape","especially","essential","establish","even","evening","event","eventually","ever","every","everybody","everyone","everything","everywhere","evidence","exact","exactly","examine","example","excellent","except","exchange","excited","excitement","exciting","exclaimed","exercise","exist","expect","experience","experiment","explain","explanation","explore","express","expression","extra","eye","face","facing","fact","factor","factory","failed","fair","fairly","fall","fallen","familiar","family","famous","far","farm","farmer","farther","fast","fastened","faster","fat","father","favorite","fear","feathers","feature","fed","feed","feel","feet","fell","fellow","felt","fence","few","fewer","field","fierce","fifteen","fifth","fifty","fight","fighting","figure","fill","film","final","finally","find","fine","finest","finger","finish","fire","fireplace","firm","first","fish","five","fix","flag","flame","flat","flew","flies","flight","floating","floor","flow","flower","fly","fog","folks","follow","food","foot","football","for","force","foreign","forest","forget","forgot","forgotten","form","former","fort","forth","forty","forward","fought","found","four","fourth","fox","frame","free","freedom","frequently","fresh","friend","friendly","frighten","frog","from","front","frozen","fruit","fuel","full","fully","fun","function","funny","fur","furniture","further","future","gain","game","garage","garden","gas","gasoline","gate","gather","gave","general","generally","gentle","gently","get","getting","giant","gift","girl","give","given","giving","glad","glass","globe","go","goes","gold","golden","gone","good","goose","got","government","grabbed","grade","gradually","grain","grandfather","grandmother","graph","grass","gravity","gray","great","greater","greatest","greatly","green","grew","ground","group","grow","grown","growth","guard","guess","guide","gulf","gun","habit","had","hair","half","halfway","hall","hand","handle","handsome","hang","happen","happened","happily","happy","harbor","hard","harder","hardly","has","hat","have","having","hay","he","headed","heading","health","heard","hearing","heart","heat","heavy","height","held","hello","help","helpful","her","herd","here","herself","hidden","hide","high","higher","highest","highway","hill","him","himself","his","history","hit","hold","hole","hollow","home","honor","hope","horn","horse","hospital","hot","hour","house","how","however","huge","human","hundred","hung","hungry","hunt","hunter","hurried","hurry","hurt","husband","ice","idea","identity","if","ill","image","imagine","immediately","importance","important","impossible","improve","in","inch","include","including","income","increase","indeed","independent","indicate","individual","industrial","industry","influence","information","inside","instance","instant","instead","instrument","interest","interior","into","introduced","invented","involved","iron","is","island","it","its","itself","jack","jar","jet","job","join","joined","journey","joy","judge","jump","jungle","just","keep","kept","key","kids","kill","kind","kitchen","knew","knife","know","knowledge","known","label","labor","lack","lady","laid","lake","lamp","land","language","large","larger","largest","last","late","later","laugh","law","lay","layers","lead","leader","leaf","learn","least","leather","leave","leaving","led","left","leg","length","lesson","let","letter","level","library","lie","life","lift","light","like","likely","limited","line","lion","lips","liquid","list","listen","little","live","living","load","local","locate","location","log","lonely","long","longer","look","loose","lose","loss","lost","lot","loud","love","lovely","low","lower","luck","lucky","lunch","lungs","lying","machine","machinery","mad","made","magic","magnet","mail","main","mainly","major","make","making","man","managed","manner","manufacturing","many","map","mark","market","married","mass","massage","master","material","mathematics","matter","may","maybe","me","meal","mean","means","meant","measure","meat","medicine","meet","melted","member","memory","men","mental","merely","met","metal","method","mice","middle","might","mighty","mile","military","milk","mill","mind","mine","minerals","minute","mirror","missing","mission","mistake","mix","mixture","model","modern","molecular","moment","money","monkey","month","mood","moon","more","morning","most","mostly","mother","motion","motor","mountain","mouse","mouth","move","movement","movie","moving","mud","muscle","music","musical","must","my","myself","mysterious","nails","name","nation","national","native","natural","naturally","nature","near","nearby","nearer","nearest","nearly","necessary","neck","needed","needle","needs","negative","neighbor","neighborhood","nervous","nest","never","new","news","newspaper","next","nice","night","nine","no","nobody","nodded","noise","none","noon","nor","north","nose","not","note","noted","nothing","notice","noun","now","number","numeral","nuts","object","observe","obtain","occasionally","occur","ocean","of","off","offer","office","officer","official","oil","old","older","oldest","on","once","one","only","onto","open","operation","opinion","opportunity","opposite","or","orange","orbit","order","ordinary","organization","organized","origin","original","other","ought","our","ourselves","out","outer","outline","outside","over","own","owner","oxygen","pack","package","page","paid","pain","paint","pair","palace","pale","pan","paper","paragraph","parallel","parent","park","part","particles","particular","particularly","partly","parts","party","pass","passage","past","path","pattern","pay","peace","pen","pencil","people","per","percent","perfect","perfectly","perhaps","period","person","personal","pet","phrase","physical","piano","pick","picture","pictured","pie","piece","pig","pile","pilot","pine","pink","pipe","pitch","place","plain","plan","plane","planet","planned","planning","plant","plastic","plate","plates","play","pleasant","please","pleasure","plenty","plural","plus","pocket","poem","poet","poetry","point","pole","police","policeman","political","pond","pony","pool","poor","popular","population","porch","port","position","positive","possible","possibly","post","pot","potatoes","pound","pour","powder","power","powerful","practical","practice","prepare","present","president","press","pressure","pretty","prevent","previous","price","pride","primitive","principal","principle","printed","private","prize","probably","problem","process","produce","product","production","program","progress","promised","proper","properly","property","protection","proud","prove","provide","public","pull","pupil","pure","purple","purpose","push","put","putting","quarter","queen","question","quick","quickly","quiet","quietly","quite","rabbit","race","radio","railroad","rain","raise","ran","ranch","range","rapidly","rate","rather","raw","rays","reach","read","reader","ready","real","realize","rear","reason","recall","receive","recent","recently","recognize","record","red","refer","refused","region","regular","related","relationship","religious","remain","remarkable","remember","remove","repeat","replace","replied","report","represent","require","research","respect","rest","result","return","review","rhyme","rhythm","rice","rich","ride","riding","right","ring","rise","rising","river","road","roar","rock","rocket","rocky","rod","roll","roof","room","root","rope","rose","rough","round","route","row","rubbed","rubber","rule","ruler","run","running","rush","sad","saddle","safe","safety","said","sail","sale","salmon","salt","same","sand","sang","sat","satellites","satisfied","save","saved","saw","say","scale","scared","scene","school","science","scientific","scientist","score","screen","sea","search","season","seat","second","secret","section","see","seed","seeing","seems","seen","seldom","select","selection","sell","send","sense","sent","sentence","separate","series","serious","serve","service","sets","setting","settle","settlers","seven","several","shade","shadow","shake","shaking","shall","shallow","shape","share","sharp","she","sheep","sheet","shelf","shells","shelter","shine","shinning","ship","shirt","shoe","shoot","shop","shore","short","shorter","shot","should","shoulder","shout","show","shown","shut","sick","sides","sight","sign","signal","silence","silent","silk","silly","silver","similar","simple","simplest","simply","since","sing","single","sink","sister","sit","sitting","situation","six","size","skill","skin","sky","slabs","slave","sleep","slept","slide","slight","slightly","slip","slipped","slope","slow","slowly","small","smaller","smallest","smell","smile","smoke","smooth","snake","snow","so","soap","social","society","soft","softly","soil","solar","sold","soldier","solid","solution","solve","some","somebody","somehow","someone","something","sometime","somewhere","son","song","soon","sort","sound","source","south","southern","space","speak","special","species","specific","speech","speed","spell","spend","spent","spider","spin","spirit","spite","split","spoken","sport","spread","spring","square","stage","stairs","stand","standard","star","stared","start","state","statement","station","stay","steady","steam","steel","steep","stems","step","stepped","stick","stiff","still","stock","stomach","stone","stood","stop","stopped","store","storm","story","stove","straight","strange","stranger","straw","stream","street","strength","stretch","strike","string","strip","strong","stronger","struck","structure","struggle","stuck","student","studied","studying","subject","substance","success","successful","such","sudden","suddenly","sugar","suggest","suit","sum","summer","sun","sunlight","supper","supply","support","suppose","sure","surface","surprise","surrounded","swam","sweet","swept","swim","swimming","swing","swung","syllable","symbol","system","table","tail","take","taken","tales","talk","tall","tank","tape","task","taste","taught","tax","tea","teach","teacher","team","tears","teeth","telephone","television","tell","temperature","ten","tent","term","terrible","test","than","thank","that","thee","them","themselves","then","theory","there","therefore","these","they","thick","thin","thing","think","third","thirty","this","those","thou","though","thought","thousand","thread","three","threw","throat","through","throughout","throw","thrown","thumb","thus","thy","tide","tie","tight","tightly","till","time","tin","tiny","tip","tired","title","to","tobacco","today","together","told","tomorrow","tone","tongue","tonight","too","took","tool","top","topic","torn","total","touch","toward","tower","town","toy","trace","track","trade","traffic","trail","train","transportation","trap","travel","treated","tree","triangle","tribe","trick","tried","trip","troops","tropical","trouble","truck","trunk","truth","try","tube","tune","turn","twelve","twenty","twice","two","type","typical","uncle","under","underline","understanding","unhappy","union","unit","universe","unknown","unless","until","unusual","up","upon","upper","upward","us","use","useful","using","usual","usually","valley","valuable","value","vapor","variety","various","vast","vegetable","verb","vertical","very","vessels","victory","view","village","visit","visitor","voice","volume","vote","vowel","voyage","wagon","wait","walk","wall","want","war","warm","warn","was","wash","waste","watch","water","wave","way","we","weak","wealth","wear","weather","week","weigh","weight","welcome","well","went","were","west","western","wet","whale","what","whatever","wheat","wheel","when","whenever","where","wherever","whether","which","while","whispered","whistle","white","who","whole","whom","whose","why","wide","widely","wife","wild","will","willing","win","wind","window","wing","winter","wire","wise","wish","with","within","without","wolf","women","won","wonder","wonderful","wood","wooden","wool","word","wore","work","worker","world","worried","worry","worse","worth","would","wrapped","write","writer","writing","written","wrong","wrote","yard","year","yellow","yes","yesterday","yet","you","young","younger","your","yourself","youth","zero","zebra","zipper","zoo","zulu"];function Pe(e){function t(){return e&&e.maxLength>1?function(){let t,i=!1;for(;!i;)t=n(),t.length<=e.maxLength&&(i=!0);return t}():n()}function n(){return Oe[i(Oe.length)]}function i(e){return Math.floor(Math.random()*e)}if(void 0===e)return t();"number"==typeof e&&(e={exactly:e}),e.exactly&&(e.min=e.exactly,e.max=e.exactly),"number"!=typeof e.wordsPerString&&(e.wordsPerString=1),"function"!=typeof e.formatter&&(e.formatter=e=>e),"string"!=typeof e.separator&&(e.separator=" ");for(var r=e.min+i(e.max+1-e.min),s=[],o="",a=0,c=0;c<r*e.wordsPerString;c++)a===e.wordsPerString-1?o+=e.formatter(t(),a):o+=e.formatter(t(),a)+e.separator,a++,(c+1)%e.wordsPerString==0&&(s.push(o),o="",a=0);return e.join&&(s=s.join(e.join)),s}var Le=Pe;function xe(e,t,n){const i=e.slice();return i[16]=t[n],i[18]=n,i}function Me(e,t,n){const i=e.slice();return i[19]=t[n],i[21]=n,i}function Ue(e){let t,n;return t=new De({props:{winGame:e[3],wpm:e[4],tryAgain:e[6]}}),{c(){V(t.$$.fragment)},m(e,i){j(t,e,i),n=!0},p(e,n){const i={};8&n&&(i.winGame=e[3]),16&n&&(i.wpm=e[4]),t.$set(i)},i(e){n||(U(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){B(t,e)}}}function $e(t){let n,i,s,o,a,d=t[0],p=[];for(let e=0;e<d.length;e+=1)p[e]=Ve(xe(t,d,e));return{c(){n=h("div");for(let e=0;e<p.length;e+=1)p[e].c();i=f(),s=h("div"),m(n,"class","game-environment noselect svelte-sfswy0"),m(n,"id","game-env"),m(s,"id","occlusion"),m(s,"class","svelte-sfswy0")},m(l,u){c(l,n,u);for(let e=0;e<p.length;e+=1)p[e].m(n,null);var h;c(l,i,u),c(l,s,u),o||(h=t[5].call(null,n),a=h&&r(h.destroy)?h.destroy:e,o=!0)},p(e,t){if(3&t){let i;for(d=e[0],i=0;i<d.length;i+=1){const r=xe(e,d,i);p[i]?p[i].p(r,t):(p[i]=Ve(r),p[i].c(),p[i].m(n,null))}for(;i<p.length;i+=1)p[i].d(1);p.length=d.length}},i:e,o:e,d(e){e&&l(n),u(p,e),e&&l(i),e&&l(s),o=!1,a()}}}function Fe(e){let t,n,i,r=e[19]+"";return{c(){t=h("div"),n=d(r),m(t,"class","game-letter svelte-sfswy0"),m(t,"id",i=e[18]-1<0?`${e[21]}`:`${e[1][e[18]-1]+e[21]}`)},m(e,i){c(e,t,i),a(t,n)},p(e,s){1&s&&r!==(r=e[19]+"")&&y(n,r),2&s&&i!==(i=e[18]-1<0?`${e[21]}`:`${e[1][e[18]-1]+e[21]}`)&&m(t,"id",i)},d(e){e&&l(t)}}}function Ve(e){let t,n,i,r=0!=e[18]&&function(e){let t,n,i;return{c(){t=h("div"),n=d(" "),m(t,"class","game-letter svelte-sfswy0"),m(t,"id",i=""+(e[1][e[18]-1]-1))},m(e,i){c(e,t,i),a(t,n)},p(e,n){2&n&&i!==(i=""+(e[1][e[18]-1]-1))&&m(t,"id",i)},d(e){e&&l(t)}}}(e),s=e[16],o=[];for(let t=0;t<s.length;t+=1)o[t]=Fe(Me(e,s,t));return{c(){t=h("div"),r&&r.c(),n=f();for(let e=0;e<o.length;e+=1)o[e].c();i=f(),m(t,"class","game-word svelte-sfswy0")},m(e,s){c(e,t,s),r&&r.m(t,null),a(t,n);for(let e=0;e<o.length;e+=1)o[e].m(t,null);a(t,i)},p(e,n){if(0!=e[18]&&r.p(e,n),3&n){let r;for(s=e[16],r=0;r<s.length;r+=1){const a=Me(e,s,r);o[r]?o[r].p(a,n):(o[r]=Fe(a),o[r].c(),o[r].m(t,i))}for(;r<o.length;r+=1)o[r].d(1);o.length=s.length}},d(e){e&&l(t),r&&r.d(),u(o,e)}}}function je(e){let t,n,i,r;const s=[$e,Ue],o=[];function a(e,t){return e[2]?1:0}return n=a(e),i=o[n]=s[n](e),{c(){t=h("main"),i.c()},m(e,i){c(e,t,i),o[n].m(t,null),r=!0},p(e,[r]){let c=n;n=a(e),n===c?o[n].p(e,r):(x(),$(o[c],1,1,(()=>{o[c]=null})),M(),i=o[n],i?i.p(e,r):(i=o[n]=s[n](e),i.c()),U(i,1),i.m(t,null))},i(e){r||(U(i),r=!0)},o(e){$(i),r=!1},d(e){e&&l(t),o[n].d()}}}function Be(e,t,n){let{currentRoute:i}=t,{params:r}=t;Array.prototype.random=function(){return this[Math.floor(Math.random()*this.length)]};let s,o=l(),a=o.split(" "),c=[];for(let e=0;e<a.length;e++)c.push(e-1<0?a[e].length+1:a[e].length+c[e-1]+1);function l(){let e=10;return ke.subscribe((t=>{e=t})),Le(e).join(" ")}_e.subscribe((e=>{s=e}));let u=!1,h=!1,d=0,f=0,p=0;return e.$$set=e=>{"currentRoute"in e&&n(7,i=e.currentRoute),"params"in e&&n(8,r=e.params)},[a,c,u,h,p,function(){const e=e=>{if(console.log(o),e.preventDefault(),!u&&(0==d&&(d=new Date),o.charAt(s)!==e.key?n(2,u=!0):(!function(e){let t=document.getElementById(s);t.classList.add("typed-letter"),t.offsetLeft<f&&t.parentElement.scrollIntoView(!0);f=t.offsetLeft}(),_e.update((e=>e+1))),s==o.length)){let e=(new Date-d)/6e4;n(4,p=Math.round(a.length/e*1e3)/1e3),n(2,u=!0),n(3,h=!0)}};return document.addEventListener("keypress",e),{destroy(){document.removeEventListener("keypress",e)}}},function(){d=0,f=0,_e.update((()=>0)),n(2,u=!1),n(3,h=!1),o=l(),n(0,a=o.split(" ")),n(1,c=[]);for(let e=0;e<a.length;e++)c.push(e-1<0?a[e].length+1:a[e].length+c[e-1]+1)},i,r]}Pe.wordList=Oe;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
const qe={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=r>>2,u=(3&r)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),i.push(n[l],n[u],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t}(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw Error();const c=r<<2|s>>4;if(i.push(c),64!==o){const e=s<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class ze{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function He(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Ke(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(He())}function Ge(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function We(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Je(){const e=He();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}class Xe extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Xe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qe.prototype.create)}}class Qe{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?function(e,t){return e.replace(Ye,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new Xe(i,o,n)}}const Ye=/\{\$([^}]+)}/g;function Ze(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(et(n)&&et(s)){if(!Ze(n,s))return!1}else if(n!==s)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function et(e){return null!==e&&"object"==typeof e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function tt(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function nt(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function it(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}class rt{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=st),void 0===i.error&&(i.error=st),void 0===i.complete&&(i.complete=st);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function st(){}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ot(e,t=1e3,n=2){const i=t*Math.pow(n,e),r=Math.round(.5*i*(Math.random()-.5)*2);return Math.min(144e5,i+r)}
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
     */function at(e){return e&&e._delegate?e._delegate:e}class ct{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const lt="[DEFAULT]";
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ut{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new ze;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e))try{this.getOrInitializeService({instanceIdentifier:lt})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===lt?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:lt:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class ht{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ut(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var dt;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(dt||(dt={}));const ft={debug:dt.DEBUG,verbose:dt.VERBOSE,info:dt.INFO,warn:dt.WARN,error:dt.ERROR,silent:dt.SILENT},pt=dt.INFO,gt={[dt.DEBUG]:"log",[dt.VERBOSE]:"log",[dt.INFO]:"info",[dt.WARN]:"warn",[dt.ERROR]:"error"},mt=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=gt[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class yt{constructor(e){this.name=e,this._logLevel=pt,this._logHandler=mt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in dt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?ft[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,dt.DEBUG,...e),this._logHandler(this,dt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,dt.VERBOSE,...e),this._logHandler(this,dt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,dt.INFO,...e),this._logHandler(this,dt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,dt.WARN,...e),this._logHandler(this,dt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,dt.ERROR,...e),this._logHandler(this,dt.ERROR,...e)}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class vt{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const wt="@firebase/app",bt="0.7.11",It=new yt("@firebase/app"),Tt="[DEFAULT]",Et={[wt]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},_t=new Map,kt=new Map;function At(e,t){try{e.container.addComponent(t)}catch(n){It.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function St(e){const t=e.name;if(kt.has(t))return It.debug(`There were multiple attempts to register component ${t}.`),!1;kt.set(t,e);for(const t of _t.values())At(t,e);return!0}function Ct(e,t){return e.container.getProvider(t)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Nt=new Qe("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Rt{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ct("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nt.create("app-deleted",{appName:this._name})}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Dt="9.6.1";function Ot(e="[DEFAULT]"){const t=_t.get(e);if(!t)throw Nt.create("no-app",{appName:e});return t}function Pt(e,t,n){var i;let r=null!==(i=Et[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void It.warn(e.join(" "))}St(new ct(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var Lt;Lt="",St(new ct("platform-logger",(e=>new vt(e)),"PRIVATE")),Pt(wt,bt,Lt),Pt(wt,bt,"esm2017"),Pt("fire-js","");
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
Pt("firebase","9.6.1","app");"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var xt,Mt,Ut=(xt=function(e,t){!function(e){function t(e){return Array.prototype.slice.call(e)}function n(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function i(e,t,i){var r,s=new Promise((function(s,o){n(r=e[t].apply(e,i)).then(s,o)}));return s.request=r,s}function r(e,t,n){var r=i(e,t,n);return r.then((function(e){if(e)return new u(e,r.request)}))}function s(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function o(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return i(this[t],r,arguments)})}))}function a(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return this[t][i].apply(this[t],arguments)})}))}function c(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return r(this[t],i,arguments)})}))}function l(e){this._index=e}function u(e,t){this._cursor=e,this._request=t}function h(e){this._store=e}function d(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function f(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new d(n)}function p(e){this._db=e}function g(e,t,n){var r=i(indexedDB,"open",[e,t]),s=r.request;return s&&(s.onupgradeneeded=function(e){n&&n(new f(s.result,e.oldVersion,s.transaction))}),r.then((function(e){return new p(e)}))}function m(e){return i(indexedDB,"deleteDatabase",[e])}s(l,"_index",["name","keyPath","multiEntry","unique"]),o(l,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),c(l,"_index",IDBIndex,["openCursor","openKeyCursor"]),s(u,"_cursor",["direction","key","primaryKey","value"]),o(u,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(u.prototype[e]=function(){var t=this,i=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,i),n(t._request).then((function(e){if(e)return new u(e,t._request)}))}))})})),h.prototype.createIndex=function(){return new l(this._store.createIndex.apply(this._store,arguments))},h.prototype.index=function(){return new l(this._store.index.apply(this._store,arguments))},s(h,"_store",["name","keyPath","indexNames","autoIncrement"]),o(h,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),c(h,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),a(h,"_store",IDBObjectStore,["deleteIndex"]),d.prototype.objectStore=function(){return new h(this._tx.objectStore.apply(this._tx,arguments))},s(d,"_tx",["objectStoreNames","mode"]),a(d,"_tx",IDBTransaction,["abort"]),f.prototype.createObjectStore=function(){return new h(this._db.createObjectStore.apply(this._db,arguments))},s(f,"_db",["name","version","objectStoreNames"]),a(f,"_db",IDBDatabase,["deleteObjectStore","close"]),p.prototype.transaction=function(){return new d(this._db.transaction.apply(this._db,arguments))},s(p,"_db",["name","version","objectStoreNames"]),a(p,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[h,l].forEach((function(n){e in n.prototype&&(n.prototype[e.replace("open","iterate")]=function(){var n=t(arguments),i=n[n.length-1],r=this._store||this._index,s=r[e].apply(r,n.slice(0,-1));s.onsuccess=function(){i(s.result)}})}))})),[l,h].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,i=[];return new Promise((function(r){n.iterateCursor(e,(function(e){e?(i.push(e.value),void 0===t||i.length!=t?e.continue():r(i)):r(i)}))}))})})),e.openDb=g,e.deleteDb=m,Object.defineProperty(e,"__esModule",{value:!0})}(t)},xt(Mt={exports:{}},Mt.exports),Mt.exports);const $t="@firebase/installations",Ft="0.5.4",Vt=1e4,jt="w:0.5.4",Bt="FIS_v2",qt=36e5,zt=new Qe("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function Ht(e){return e instanceof Xe&&e.code.includes("request-failed")}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Kt({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function Gt(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function Wt(e,t){const n=(await t.json()).error;return zt.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Jt({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Xt(e,{refreshToken:t}){const n=Jt(e);return n.append("Authorization",function(e){return`FIS_v2 ${e}`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)),n}async function Qt(e){const t=await e();return t.status>=500&&t.status<600?e():t}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
const an="firebase-installations-store";let cn=null;function ln(){return cn||(cn=Ut.openDb("firebase-installations-database",1,(e=>{if(0===e.oldVersion)e.createObjectStore(an)}))),cn}async function un(e,t){const n=tn(e),i=(await ln()).transaction(an,"readwrite"),r=i.objectStore(an),s=await r.get(n);return await r.put(t,n),await i.complete,s&&s.fid===t.fid||rn(e,t.fid),t}async function hn(e){const t=tn(e),n=(await ln()).transaction(an,"readwrite");await n.objectStore(an).delete(t),await n.complete}async function dn(e,t){const n=tn(e),i=(await ln()).transaction(an,"readwrite"),r=i.objectStore(an),s=await r.get(n),o=t(s);return void 0===o?await r.delete(n):await r.put(o,n),await i.complete,!o||s&&s.fid===o.fid||rn(e,o.fid),o}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function fn(e){let t;const n=await dn(e,(n=>{const i=function(e){return mn(e||{fid:en(),registrationStatus:0})}(n),r=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(zt.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=async function(e,t){try{const n=await async function(e,{fid:t}){const n=Kt(e),i=Jt(e),r={fid:t,authVersion:Bt,appId:e.appId,sdkVersion:jt},s={method:"POST",headers:i,body:JSON.stringify(r)},o=await Qt((()=>fetch(n,s)));if(o.ok){const e=await o.json();return{fid:e.fid||t,registrationStatus:2,refreshToken:e.refreshToken,authToken:Gt(e.authToken)}}throw await Wt("Create Installation",o)}(e,t);return un(e,n)}catch(n){throw Ht(n)&&409===n.customData.serverCode?await hn(e):await un(e,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:pn(e)}:{installationEntry:t}}(e,i);return t=r.registrationPromise,r.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function pn(e){let t=await gn(e);for(;1===t.registrationStatus;)await Yt(100),t=await gn(e);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await fn(e);return n||t}return t}function gn(e){return dn(e,(e=>{if(!e)throw zt.create("installation-not-found");return mn(e)}))}function mn(e){return 1===(t=e).registrationStatus&&t.registrationTime+Vt<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}async function yn({appConfig:e,platformLoggerProvider:t},n){const i=function(e,{fid:t}){return`${Kt(e)}/${t}/authTokens:generate`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e,n),r=Xt(e,n),s=t.getImmediate({optional:!0});s&&r.append("x-firebase-client",s.getPlatformInfoString());const o={installation:{sdkVersion:jt}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Qt((()=>fetch(i,a)));if(c.ok){return Gt(await c.json())}throw await Wt("Generate Auth Token",c)}async function vn(e,t=!1){let n;const i=await dn(e.appConfig,(i=>{if(!bn(i))throw zt.create("not-registered");const r=i.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+qt}(e)}(r))return i;if(1===r.requestStatus)return n=async function(e,t){let n=await wn(e.appConfig);for(;1===n.authToken.requestStatus;)await Yt(100),n=await wn(e.appConfig);const i=n.authToken;return 0===i.requestStatus?vn(e,t):i}(e,t),i;{if(!navigator.onLine)throw zt.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(i);return n=async function(e,t){try{const n=await yn(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await un(e.appConfig,i),n}catch(n){if(!Ht(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await un(e.appConfig,n)}else await hn(e.appConfig);throw n}}(e,t),t}}));return n?await n:i.authToken}function wn(e){return dn(e,(e=>{if(!bn(e))throw zt.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+Vt<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
     */const En="installations",_n=e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw Tn("App Configuration");if(!e.name)throw Tn("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Tn(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,platformLoggerProvider:Ct(t,"platform-logger"),_delete:()=>Promise.resolve()}},kn=e=>{const t=Ct(e.getProvider("app").getImmediate(),En).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:i}=await fn(t.appConfig);return i?i.catch(console.error):vn(t).catch(console.error),n.fid}(t),getToken:e=>In(t,e)}};St(new ct(En,_n,"PUBLIC")),St(new ct("installations-internal",kn,"PRIVATE")),Pt($t,Ft),Pt($t,Ft,"esm2017");
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const An="analytics",Sn="https://www.googletagmanager.com/gtag/js",Cn=new yt("@firebase/analytics");
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Nn(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function Rn(e,t,n,i){return async function(r,s,o){try{"event"===r?await async function(e,t,n,i,r){try{let s=[];if(r&&r.send_to){let e=r.send_to;Array.isArray(e)||(e=[e]);const i=await Nn(n);for(const n of e){const e=i.find((e=>e.measurementId===n)),r=e&&t[e.appId];if(!r){s=[];break}s.push(r)}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",i,r||{})}catch(e){Cn.error(e)}}(e,t,n,s,o):"config"===r?await async function(e,t,n,i,r,s){const o=i[r];try{if(o)await t[o];else{const e=(await Nn(n)).find((e=>e.measurementId===r));e&&await t[e.appId]}}catch(e){Cn.error(e)}e("config",r,s)}(e,t,n,i,s,o):e("set",s)}catch(e){Cn.error(e)}}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Dn=new Qe("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const On=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function Pn(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Ln(e,t=On,n){const{appId:i,apiKey:r,measurementId:s}=e.options;if(!i)throw Dn.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw Dn.create("no-api-key")}const o=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Mn;return setTimeout((async()=>{a.abort()}),void 0!==n?n:6e4),xn({appId:i,apiKey:r,measurementId:s},o,a,t)}async function xn(e,{throttleEndTimeMillis:t,backoffCount:n},i,r=On){const{appId:s,measurementId:o}=e;try{await function(e,t){return new Promise(((n,i)=>{const r=Math.max(t-Date.now(),0),s=setTimeout(n,r);e.addEventListener((()=>{clearTimeout(s),i(Dn.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(i,t)}catch(e){if(o)return Cn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${e.message}]`),{appId:s,measurementId:o};throw e}try{const t=await async function(e){var t;const{appId:n,apiKey:i}=e,r={method:"GET",headers:Pn(i)},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(s,r);if(200!==o.status&&304!==o.status){let e="";try{const n=await o.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw Dn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:e})}return o.json()}(e);return r.deleteThrottleMetadata(s),t}catch(t){if(!function(e){if(!(e instanceof Xe&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(t)){if(r.deleteThrottleMetadata(s),o)return Cn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${t.message}]`),{appId:s,measurementId:o};throw t}const a=503===Number(t.customData.httpStatus)?ot(n,r.intervalMillis,30):ot(n,r.intervalMillis),c={throttleEndTimeMillis:Date.now()+a,backoffCount:n+1};return r.setThrottleMetadata(s,c),Cn.debug(`Calling attemptFetch again in ${a} millis`),xn(e,c,i,r)}}class Mn{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function Un(){if("object"!=typeof indexedDB)return Cn.warn(Dn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}catch(e){return Cn.warn(Dn.create("indexeddb-unavailable",{errorInfo:e}).message),!1}return!0}async function $n(e,t,n,i,r,s,o){var a;const c=Ln(e);c.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&Cn.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>Cn.error(e))),t.push(c);const l=Un().then((e=>e?i.getId():void 0)),[u,h]=await Promise.all([c,l]);(function(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Sn))return t;return null})()||function(e,t){const n=document.createElement("script");n.src=`${Sn}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}(s,u.measurementId),r("js",new Date);const d=null!==(a=null==o?void 0:o.config)&&void 0!==a?a:{};return d.origin="firebase",d.update=!0,null!=h&&(d.firebase_id=h),r("config",u.measurementId,d),u.measurementId}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Fn{constructor(e){this.app=e}_delete(){return delete Vn[this.app.options.appId],Promise.resolve()}}let Vn={},jn=[];const Bn={};let qn,zn,Hn="dataLayer",Kn=!1;function Gn(){const e=[];if(Ge()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=Dn.create("invalid-analytics-context",{errorInfo:t});Cn.warn(n.message)}}function Wn(e,t,n){Gn();const i=e.options.appId;if(!i)throw Dn.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw Dn.create("no-api-key");Cn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=Vn[i])throw Dn.create("already-exists",{id:i});if(!Kn){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(Hn);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,i,r){let s=function(...e){window[i].push(arguments)};return window[r]&&"function"==typeof window[r]&&(s=window[r]),window[r]=Rn(s,e,t,n),{gtagCore:s,wrappedGtag:window[r]}}(Vn,jn,Bn,Hn,"gtag");zn=e,qn=t,Kn=!0}Vn[i]=$n(e,jn,Bn,t,qn,Hn,n);return new Fn(e)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Jn(e=Ot()){const t=Ct(e=at(e),An);return t.isInitialized()?t.getImmediate():function(e,t={}){const n=Ct(e,An);if(n.isInitialized()){const e=n.getImmediate();if(Ze(t,n.getOptions()))return e;throw Dn.create("already-initialized")}return n.initialize({options:t})}(e)}function Xn(e,t,n,i){e=at(e),async function(e,t,n,i,r){if(r&&r.global)e("event",n,i);else{const r=await t;e("event",n,Object.assign(Object.assign({},i),{send_to:r}))}}(zn,Vn[e.app.options.appId],t,n,i).catch((e=>Cn.error(e)))}const Qn="@firebase/analytics",Yn="0.7.4";St(new ct(An,((e,{options:t})=>Wn(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),St(new ct("analytics-internal",(function(e){try{const t=e.getProvider(An).getImmediate();return{logEvent:(e,n,i)=>Xn(t,e,n,i)}}catch(e){throw Dn.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),Pt(Qn,Yn),Pt(Qn,Yn,"esm2017");var Zn,ei="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},ti=ti||{},ni=ei||self;function ii(){}function ri(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function si(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var oi="closure_uid_"+(1e9*Math.random()>>>0),ai=0;function ci(e,t,n){return e.call.apply(e.bind,arguments)}function li(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function ui(e,t,n){return(ui=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ci:li).apply(null,arguments)}function hi(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function di(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[n].apply(e,r)}}function fi(){this.s=this.s,this.o=this.o}var pi={};fi.prototype.s=!1,fi.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var e=function(e){return Object.prototype.hasOwnProperty.call(e,oi)&&e[oi]||(e[oi]=++ai)}(this);delete pi[e]}},fi.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const gi=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},mi=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const i=e.length,r="string"==typeof e?e.split(""):e;for(let s=0;s<i;s++)s in r&&t.call(n,r[s],s,e)};function yi(e){return Array.prototype.concat.apply([],arguments)}function vi(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function wi(e){return/^[\s\xa0]*$/.test(e)}var bi,Ii=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Ti(e,t){return-1!=e.indexOf(t)}function Ei(e,t){return e<t?-1:e>t?1:0}e:{var _i=ni.navigator;if(_i){var ki=_i.userAgent;if(ki){bi=ki;break e}}bi=""}function Ai(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function Si(e){const t={};for(const n in e)t[n]=e[n];return t}var Ci="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ni(e,t){let n,i;for(let t=1;t<arguments.length;t++){for(n in i=arguments[t],i)e[n]=i[n];for(let t=0;t<Ci.length;t++)n=Ci[t],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function Ri(e){return Ri[" "](e),e}Ri[" "]=ii;var Di,Oi,Pi=Ti(bi,"Opera"),Li=Ti(bi,"Trident")||Ti(bi,"MSIE"),xi=Ti(bi,"Edge"),Mi=xi||Li,Ui=Ti(bi,"Gecko")&&!(Ti(bi.toLowerCase(),"webkit")&&!Ti(bi,"Edge"))&&!(Ti(bi,"Trident")||Ti(bi,"MSIE"))&&!Ti(bi,"Edge"),$i=Ti(bi.toLowerCase(),"webkit")&&!Ti(bi,"Edge");function Fi(){var e=ni.document;return e?e.documentMode:void 0}e:{var Vi="",ji=(Oi=bi,Ui?/rv:([^\);]+)(\)|;)/.exec(Oi):xi?/Edge\/([\d\.]+)/.exec(Oi):Li?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Oi):$i?/WebKit\/(\S+)/.exec(Oi):Pi?/(?:Version)[ \/]?(\S+)/.exec(Oi):void 0);if(ji&&(Vi=ji?ji[1]:""),Li){var Bi=Fi();if(null!=Bi&&Bi>parseFloat(Vi)){Di=String(Bi);break e}}Di=Vi}var qi,zi={};function Hi(){return function(e){var t=zi;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=Ii(String(Di)).split("."),n=Ii("9").split("."),i=Math.max(t.length,n.length);for(let o=0;0==e&&o<i;o++){var r=t[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==r[0].length&&0==s[0].length)break;e=Ei(0==r[1].length?0:parseInt(r[1],10),0==s[1].length?0:parseInt(s[1],10))||Ei(0==r[2].length,0==s[2].length)||Ei(r[2],s[2]),r=r[3],s=s[3]}while(0==e)}return 0<=e}))}if(ni.document&&Li){var Ki=Fi();qi=Ki||(parseInt(Di,10)||void 0)}else qi=void 0;var Gi=qi,Wi=function(){if(!ni.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{ni.addEventListener("test",ii,t),ni.removeEventListener("test",ii,t)}catch(e){}return e}();function Ji(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function Xi(e,t){if(Ji.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Ui){e:{try{Ri(t.nodeName);var r=!0;break e}catch(e){}r=!1}r||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Qi[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Xi.Z.h.call(this)}}Ji.prototype.h=function(){this.defaultPrevented=!0},di(Xi,Ji);var Qi={2:"touch",3:"pen",4:"mouse"};Xi.prototype.h=function(){Xi.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Yi="closure_listenable_"+(1e6*Math.random()|0),Zi=0;function er(e,t,n,i,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.ia=r,this.key=++Zi,this.ca=this.fa=!1}function tr(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function nr(e){this.src=e,this.g={},this.h=0}function ir(e,t){var n=t.type;if(n in e.g){var i,r=e.g[n],s=gi(r,t);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(tr(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function rr(e,t,n,i){for(var r=0;r<e.length;++r){var s=e[r];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==i)return r}return-1}nr.prototype.add=function(e,t,n,i,r){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=rr(e,t,i,r);return-1<o?(t=e[o],n||(t.fa=!1)):((t=new er(t,this.src,s,!!i,r)).fa=n,e.push(t)),t};var sr="closure_lm_"+(1e6*Math.random()|0),or={};function ar(e,t,n,i,r){if(i&&i.once)return lr(e,t,n,i,r);if(Array.isArray(t)){for(var s=0;s<t.length;s++)ar(e,t[s],n,i,r);return null}return n=mr(n),e&&e[Yi]?e.N(t,n,si(i)?!!i.capture:!!i,r):cr(e,t,n,!1,i,r)}function cr(e,t,n,i,r,s){if(!t)throw Error("Invalid event type");var o=si(r)?!!r.capture:!!r,a=pr(e);if(a||(e[sr]=a=new nr(e)),(n=a.add(t,n,i,o,s)).proxy)return n;if(i=function(){function e(n){return t.call(e.src,e.listener,n)}var t=fr;return e}(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)Wi||(r=o),void 0===r&&(r=!1),e.addEventListener(t.toString(),i,r);else if(e.attachEvent)e.attachEvent(dr(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}function lr(e,t,n,i,r){if(Array.isArray(t)){for(var s=0;s<t.length;s++)lr(e,t[s],n,i,r);return null}return n=mr(n),e&&e[Yi]?e.O(t,n,si(i)?!!i.capture:!!i,r):cr(e,t,n,!0,i,r)}function ur(e,t,n,i,r){if(Array.isArray(t))for(var s=0;s<t.length;s++)ur(e,t[s],n,i,r);else i=si(i)?!!i.capture:!!i,n=mr(n),e&&e[Yi]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=rr(s=e.g[t],n,i,r))&&(tr(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=pr(e))&&(t=e.g[t.toString()],e=-1,t&&(e=rr(t,n,i,r)),(n=-1<e?t[e]:null)&&hr(n))}function hr(e){if("number"!=typeof e&&e&&!e.ca){var t=e.src;if(t&&t[Yi])ir(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(dr(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=pr(t))?(ir(n,e),0==n.h&&(n.src=null,t[sr]=null)):tr(e)}}}function dr(e){return e in or?or[e]:or[e]="on"+e}function fr(e,t){if(e.ca)e=!0;else{t=new Xi(t,this);var n=e.listener,i=e.ia||e.src;e.fa&&hr(e),e=n.call(i,t)}return e}function pr(e){return(e=e[sr])instanceof nr?e:null}var gr="__closure_events_fn_"+(1e9*Math.random()>>>0);function mr(e){return"function"==typeof e?e:(e[gr]||(e[gr]=function(t){return e.handleEvent(t)}),e[gr])}function yr(){fi.call(this),this.i=new nr(this),this.P=this,this.I=null}function vr(e,t){var n,i=e.I;if(i)for(n=[];i;i=i.I)n.push(i);if(e=e.P,i=t.type||t,"string"==typeof t)t=new Ji(t,e);else if(t instanceof Ji)t.target=t.target||e;else{var r=t;Ni(t=new Ji(i,e),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];r=wr(o,i,!0,t)&&r}if(r=wr(o=t.g=e,i,!0,t)&&r,r=wr(o,i,!1,t)&&r,n)for(s=0;s<n.length;s++)r=wr(o=t.g=n[s],i,!1,t)&&r}function wr(e,t,n,i){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&ir(e.i,o),r=!1!==a.call(c,i)&&r}}return r&&!i.defaultPrevented}di(yr,fi),yr.prototype[Yi]=!0,yr.prototype.removeEventListener=function(e,t,n,i){ur(this,e,t,n,i)},yr.prototype.M=function(){if(yr.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)tr(n[i]);delete t.g[e],t.h--}}this.I=null},yr.prototype.N=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},yr.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};var br=ni.JSON.stringify;function Ir(){var e=Cr;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Tr,Er=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new _r),(e=>e.reset()));class _r{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function kr(e){ni.setTimeout((()=>{throw e}),0)}function Ar(e,t){Tr||function(){var e=ni.Promise.resolve(void 0);Tr=function(){e.then(Nr)}}(),Sr||(Tr(),Sr=!0),Cr.add(e,t)}var Sr=!1,Cr=new class{constructor(){this.h=this.g=null}add(e,t){const n=Er.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function Nr(){for(var e;e=Ir();){try{e.h.call(e.g)}catch(e){kr(e)}var t=Er;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Sr=!1}function Rr(e,t){yr.call(this),this.h=e||1,this.g=t||ni,this.j=ui(this.kb,this),this.l=Date.now()}function Dr(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function Or(e,t,n){if("function"==typeof e)n&&(e=ui(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=ui(e.handleEvent,e)}return 2147483647<Number(t)?-1:ni.setTimeout(e,t||0)}function Pr(e){e.g=Or((()=>{e.g=null,e.i&&(e.i=!1,Pr(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}di(Rr,yr),(Zn=Rr.prototype).da=!1,Zn.S=null,Zn.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),vr(this,"tick"),this.da&&(Dr(this),this.start()))}},Zn.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Zn.M=function(){Rr.Z.M.call(this),Dr(this),delete this.g};class Lr extends fi{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Pr(this)}M(){super.M(),this.g&&(ni.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xr(e){fi.call(this),this.h=e,this.g={}}di(xr,fi);var Mr=[];function Ur(e,t,n,i){Array.isArray(n)||(n&&(Mr[0]=n.toString()),n=Mr);for(var r=0;r<n.length;r++){var s=ar(t,n[r],i||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function $r(e){Ai(e.g,(function(e,t){this.g.hasOwnProperty(t)&&hr(e)}),e),e.g={}}function Fr(){this.g=!0}function Vr(e,t,n,i){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return br(n)}catch(e){return t}}(e,n)+(i?" "+i:"")}))}xr.prototype.M=function(){xr.Z.M.call(this),$r(this)},xr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Fr.prototype.Aa=function(){this.g=!1},Fr.prototype.info=function(){};var jr={},Br=null;function qr(){return Br=Br||new yr}function zr(e){Ji.call(this,jr.Ma,e)}function Hr(e){const t=qr();vr(t,new zr(t,e))}function Kr(e,t){Ji.call(this,jr.STAT_EVENT,e),this.stat=t}function Gr(e){const t=qr();vr(t,new Kr(t,e))}function Wr(e,t){Ji.call(this,jr.Na,e),this.size=t}function Jr(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return ni.setTimeout((function(){e()}),t)}jr.Ma="serverreachability",di(zr,Ji),jr.STAT_EVENT="statevent",di(Kr,Ji),jr.Na="timingevent",di(Wr,Ji);var Xr={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Qr={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Yr(){}function Zr(e){return e.h||(e.h=e.i())}function es(){}Yr.prototype.h=null;var ts,ns={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function is(){Ji.call(this,"d")}function rs(){Ji.call(this,"c")}function ss(){}function os(e,t,n,i){this.l=e,this.j=t,this.m=n,this.X=i||1,this.V=new xr(this),this.P=cs,e=Mi?125:void 0,this.W=new Rr(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new as}function as(){this.i=null,this.g="",this.h=!1}di(is,Ji),di(rs,Ji),di(ss,Yr),ss.prototype.g=function(){return new XMLHttpRequest},ss.prototype.i=function(){return{}},ts=new ss;var cs=45e3,ls={},us={};function hs(e,t,n){e.K=1,e.v=Ls(Cs(t)),e.s=n,e.U=!0,ds(e,null)}function ds(e,t){e.F=Date.now(),ms(e),e.A=Cs(e.v);var n=e.A,i=e.X;Array.isArray(i)||(i=[String(i)]),Gs(n.h,"t",i),e.C=0,n=e.l.H,e.h=new as,e.g=Wo(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Lr(ui(e.Ia,e,e.g),e.O)),Ur(e.V,e.g,"readystatechange",e.gb),t=e.H?Si(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Hr(1),function(e,t,n,i,r,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.X,e.s)}function fs(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function ps(e,t,n){let i,r=!0;for(;!e.I&&e.C<n.length;){if(i=gs(e,n),i==us){4==t&&(e.o=4,Gr(14),r=!1),Vr(e.j,e.m,null,"[Incomplete Response]");break}if(i==ls){e.o=4,Gr(15),Vr(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}Vr(e.j,e.m,i,null),Is(e,i)}fs(e)&&i!=us&&i!=ls&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Gr(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.aa&&(e.aa=!0,(t=e.l).g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Vo(t),t.L=!0,Gr(11))):(Vr(e.j,e.m,n,"[Invalid Chunked Response]"),bs(e),ws(e))}function gs(e,t){var n=e.C,i=t.indexOf("\n",n);return-1==i?us:(n=Number(t.substring(n,i)),isNaN(n)?ls:(i+=1)+n>t.length?us:(t=t.substr(i,n),e.C=i+n,t))}function ms(e){e.Y=Date.now()+e.P,ys(e,e.P)}function ys(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Jr(ui(e.eb,e),t)}function vs(e){e.B&&(ni.clearTimeout(e.B),e.B=null)}function ws(e){0==e.l.G||e.I||qo(e.l,e)}function bs(e){vs(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Dr(e.W),$r(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Is(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||Zs(n.i,e)))if(n.I=e.N,!e.J&&Zs(n.i,e)&&3==n.G){try{var i=n.Ca.g.parse(t)}catch(e){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Bo(n),Do(n)}Fo(n),Gr(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&0==n.A&&!n.v&&(n.v=Jr(ui(n.ab,n),6e3));if(1>=Ys(n.i)&&n.ka){try{n.ka()}catch(e){}n.ka=void 0}}else Ho(n,11)}else if((e.J||n.g==e)&&Bo(n),!wi(t))for(r=n.Ca.g.parse(t),t=0;t<r.length;t++){let l=r[t];if(n.U=l[0],l=l[1],2==n.G)if("c"==l[0]){n.J=l[1],n.la=l[2];const t=l[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const r=l[4];null!=r&&(n.za=r,n.h.info("SVER="+n.za));const u=l[5];null!=u&&"number"==typeof u&&0<u&&(i=1.5*u,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=i.i;!s.g&&(Ti(e,"spdy")||Ti(e,"quic")||Ti(e,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(eo(s,s.h),s.h=null))}if(i.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.sa=e,Ps(i.F,i.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=e;if((i=n).oa=Go(i,i.H?i.la:null,i.W),o.J){to(i.i,o);var a=o,c=i.K;c&&a.setTimeout(c),a.B&&(vs(a),ms(a)),i.g=o}else $o(i);0<n.l.length&&Lo(n)}else"stop"!=l[0]&&"close"!=l[0]||Ho(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?Ho(n,7):Ro(n):"noop"!=l[0]&&n.j&&n.j.wa(l),n.A=0)}Hr(4)}catch(e){}}function Ts(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(ri(e)||"string"==typeof e)mi(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(ri(e)||"string"==typeof e){n=[];for(var i=e.length,r=0;r<i;r++)n.push(r)}else for(r in n=[],i=0,e)n[i++]=r;i=function(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"==typeof e)return e.split("");if(ri(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}for(i in t=[],n=0,e)t[n++]=e[i];return t}(e),r=i.length;for(var s=0;s<r;s++)t.call(void 0,i[s],n&&n[s],e)}}function Es(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(e)if(e instanceof Es)for(n=e.T(),i=0;i<n.length;i++)this.set(n[i],e.get(n[i]));else for(i in e)this.set(i,e[i])}function _s(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var i=e.g[t];ks(e.h,i)&&(e.g[n++]=i),t++}e.g.length=n}if(e.i!=e.g.length){var r={};for(n=t=0;t<e.g.length;)ks(r,i=e.g[t])||(e.g[n++]=i,r[i]=1),t++;e.g.length=n}}function ks(e,t){return Object.prototype.hasOwnProperty.call(e,t)}(Zn=os.prototype).setTimeout=function(e){this.P=e},Zn.gb=function(e){e=e.target;const t=this.L;t&&3==ko(e)?t.l():this.Ia(e)},Zn.Ia=function(e){try{if(e==this.g)e:{const u=ko(this.g);var t=this.g.Da();const h=this.g.ba();if(!(3>u)&&(3!=u||Mi||this.g&&(this.h.h||this.g.ga()||Ao(this.g)))){this.I||4!=u||7==t||Hr(8==t||0>=h?3:2),vs(this);var n=this.g.ba();this.N=n;t:if(fs(this)){var i=Ao(this.g);e="";var r=i.length,s=4==ko(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){bs(this),ws(this);var o="";break t}this.h.i=new ni.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:s&&t==r-1});i.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(e,t,n,i,r,s,o){e.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!wi(a)){var l=a;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,Gr(12),bs(this),ws(this);break e}Vr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Is(this,n)}this.U?(ps(this,u,o),Mi&&this.i&&3==u&&(Ur(this.V,this.W,"tick",this.fb),this.W.start())):(Vr(this.j,this.m,o,null),Is(this,o)),4==u&&bs(this),this.i&&!this.I&&(4==u?qo(this.l,this):(this.i=!1,ms(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Gr(12)):(this.o=0,Gr(13)),bs(this),ws(this)}}}catch(e){}},Zn.fb=function(){if(this.g){var e=ko(this.g),t=this.g.ga();this.C<t.length&&(vs(this),ps(this,e,t),this.i&&4!=e&&ms(this))}},Zn.cancel=function(){this.I=!0,bs(this)},Zn.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(Hr(3),Gr(17)),bs(this),this.o=2,ws(this)):ys(this,this.Y-e)},(Zn=Es.prototype).R=function(){_s(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},Zn.T=function(){return _s(this),this.g.concat()},Zn.get=function(e,t){return ks(this.h,e)?this.h[e]:t},Zn.set=function(e,t){ks(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},Zn.forEach=function(e,t){for(var n=this.T(),i=0;i<n.length;i++){var r=n[i],s=this.get(r);e.call(t,s,r,this)}};var As=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ss(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Ss){this.g=void 0!==t?t:e.g,Ns(this,e.j),this.s=e.s,Rs(this,e.i),Ds(this,e.m),this.l=e.l,t=e.h;var n=new qs;n.i=t.i,t.g&&(n.g=new Es(t.g),n.h=t.h),Os(this,n),this.o=e.o}else e&&(n=String(e).match(As))?(this.g=!!t,Ns(this,n[1]||"",!0),this.s=xs(n[2]||""),Rs(this,n[3]||"",!0),Ds(this,n[4]),this.l=xs(n[5]||"",!0),Os(this,n[6]||"",!0),this.o=xs(n[7]||"")):(this.g=!!t,this.h=new qs(null,this.g))}function Cs(e){return new Ss(e)}function Ns(e,t,n){e.j=n?xs(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Rs(e,t,n){e.i=n?xs(t,!0):t}function Ds(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Os(e,t,n){t instanceof qs?(e.h=t,function(e,t){t&&!e.j&&(zs(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Hs(this,t),Gs(this,n,e))}),e)),e.j=t}(e.h,e.g)):(n||(t=Ms(t,js)),e.h=new qs(t,e.g))}function Ps(e,t,n){e.h.set(t,n)}function Ls(e){return Ps(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function xs(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ms(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Us),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Us(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Ss.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ms(t,$s,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Ms(t,$s,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(Ms(n,"/"==n.charAt(0)?Vs:Fs,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ms(n,Bs)),e.join("")};var $s=/[#\/\?@]/g,Fs=/[#\?:]/g,Vs=/[#\?]/g,js=/[#\?@]/g,Bs=/#/g;function qs(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function zs(e){e.g||(e.g=new Es,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),r=null;if(0<=i){var s=e[n].substring(0,i);r=e[n].substring(i+1)}else s=e[n];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Hs(e,t){zs(e),t=Ws(e,t),ks(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,ks((e=e.g).h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&_s(e)))}function Ks(e,t){return zs(e),t=Ws(e,t),ks(e.g.h,t)}function Gs(e,t,n){Hs(e,t),0<n.length&&(e.i=null,e.g.set(Ws(e,t),vi(n)),e.h+=n.length)}function Ws(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(Zn=qs.prototype).add=function(e,t){zs(this),this.i=null,e=Ws(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},Zn.forEach=function(e,t){zs(this),this.g.forEach((function(n,i){mi(n,(function(n){e.call(t,n,i,this)}),this)}),this)},Zn.T=function(){zs(this);for(var e=this.g.R(),t=this.g.T(),n=[],i=0;i<t.length;i++)for(var r=e[i],s=0;s<r.length;s++)n.push(t[i]);return n},Zn.R=function(e){zs(this);var t=[];if("string"==typeof e)Ks(this,e)&&(t=yi(t,this.g.get(Ws(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=yi(t,e[n])}return t},Zn.set=function(e,t){return zs(this),this.i=null,Ks(this,e=Ws(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},Zn.get=function(e,t){return e&&0<(e=this.R(e)).length?String(e[0]):t},Zn.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var i=t[n],r=encodeURIComponent(String(i));i=this.R(i);for(var s=0;s<i.length;s++){var o=r;""!==i[s]&&(o+="="+encodeURIComponent(String(i[s]))),e.push(o)}}return this.i=e.join("&")};function Js(e){this.l=e||Xs,ni.PerformanceNavigationTiming?e=0<(e=ni.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(ni.g&&ni.g.Ea&&ni.g.Ea()&&ni.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Xs=10;function Qs(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Ys(e){return e.h?1:e.g?e.g.size:0}function Zs(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function eo(e,t){e.g?e.g.add(t):e.h=t}function to(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function no(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return vi(e.i)}function io(){}function ro(){this.g=new io}function so(e,t,n){const i=n||"";try{Ts(e,(function(e,n){let r=e;si(e)&&(r=br(e)),t.push(i+n+"="+encodeURIComponent(r))}))}catch(e){throw t.push(i+"type="+encodeURIComponent("_badmap")),e}}function oo(e,t,n,i,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(i)}catch(e){}}function ao(e){this.l=e.$b||null,this.j=e.ib||!1}function co(e,t){yr.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=lo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Js.prototype.cancel=function(){if(this.i=no(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},io.prototype.stringify=function(e){return ni.JSON.stringify(e,void 0)},io.prototype.parse=function(e){return ni.JSON.parse(e,void 0)},di(ao,Yr),ao.prototype.g=function(){return new co(this.l,this.j)},ao.prototype.i=function(e){return function(){return e}}({}),di(co,yr);var lo=0;function uo(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function ho(e){e.readyState=4,e.l=null,e.j=null,e.A=null,fo(e)}function fo(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(Zn=co.prototype).open=function(e,t){if(this.readyState!=lo)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,fo(this)},Zn.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||ni).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},Zn.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ho(this)),this.readyState=lo},Zn.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,fo(this)),this.g&&(this.readyState=3,fo(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==ni.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;uo(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},Zn.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ho(this):fo(this),3==this.readyState&&uo(this)}},Zn.Ua=function(e){this.g&&(this.response=this.responseText=e,ho(this))},Zn.Ta=function(e){this.g&&(this.response=e,ho(this))},Zn.ha=function(){this.g&&ho(this)},Zn.setRequestHeader=function(e,t){this.v.append(e,t)},Zn.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},Zn.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(co.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var po=ni.JSON.parse;function go(e){yr.call(this),this.headers=new Es,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=mo,this.K=this.L=!1}di(go,yr);var mo="",yo=/^https?$/i,vo=["POST","PUT"];function wo(e){return"content-type"==e.toLowerCase()}function bo(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Io(e),Eo(e)}function Io(e){e.D||(e.D=!0,vr(e,"complete"),vr(e,"error"))}function To(e){if(e.h&&void 0!==ti&&(!e.C[1]||4!=ko(e)||2!=e.ba()))if(e.v&&4==ko(e))Or(e.Fa,0,e);else if(vr(e,"readystatechange"),4==ko(e)){e.h=!1;try{const a=e.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=0===a){var r=String(e.H).match(As)[1]||null;if(!r&&ni.self&&ni.self.location){var s=ni.self.location.protocol;r=s.substr(0,s.length-1)}i=!yo.test(r?r.toLowerCase():"")}n=i}if(n)vr(e,"complete"),vr(e,"success");else{e.m=6;try{var o=2<ko(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.ba()+"]",Io(e)}}finally{Eo(e)}}}function Eo(e,t){if(e.g){_o(e);const n=e.g,i=e.C[0]?ii:null;e.g=null,e.C=null,t||vr(e,"ready");try{n.onreadystatechange=i}catch(e){}}}function _o(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(ni.clearTimeout(e.A),e.A=null)}function ko(e){return e.g?e.g.readyState:0}function Ao(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case mo:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function So(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=function(e){let t="";return Ai(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Ps(e,t,n))}function Co(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function No(e){this.za=0,this.l=[],this.h=new Fr,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Co("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Co("baseRetryDelayMs",5e3,e),this.$a=Co("retryDelaySeedMs",1e4,e),this.Ya=Co("forwardChannelMaxRetries",2,e),this.ra=Co("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new Js(e&&e.concurrentRequestLimit),this.Ca=new ro,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function Ro(e){if(Oo(e),3==e.G){var t=e.V++,n=Cs(e.F);Ps(n,"SID",e.J),Ps(n,"RID",t),Ps(n,"TYPE","terminate"),Mo(e,n),(t=new os(e,e.h,t,void 0)).K=2,t.v=Ls(Cs(n)),n=!1,ni.navigator&&ni.navigator.sendBeacon&&(n=ni.navigator.sendBeacon(t.v.toString(),"")),!n&&ni.Image&&((new Image).src=t.v,n=!0),n||(t.g=Wo(t.l,null),t.g.ea(t.v)),t.F=Date.now(),ms(t)}Ko(e)}function Do(e){e.g&&(Vo(e),e.g.cancel(),e.g=null)}function Oo(e){Do(e),e.u&&(ni.clearTimeout(e.u),e.u=null),Bo(e),e.i.cancel(),e.m&&("number"==typeof e.m&&ni.clearTimeout(e.m),e.m=null)}function Po(e,t){e.l.push(new class{constructor(e,t){this.h=e,this.g=t}}(e.Za++,t)),3==e.G&&Lo(e)}function Lo(e){Qs(e.i)||e.m||(e.m=!0,Ar(e.Ha,e),e.C=0)}function xo(e,t){var n;n=t?t.m:e.V++;const i=Cs(e.F);Ps(i,"SID",e.J),Ps(i,"RID",n),Ps(i,"AID",e.U),Mo(e,i),e.o&&e.s&&So(i,e.o,e.s),n=new os(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Uo(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),eo(e.i,n),hs(n,i,t)}function Mo(e,t){e.j&&Ts({},(function(e,n){Ps(t,n,e)}))}function Uo(e,t,n){n=Math.min(e.l.length,n);var i=e.j?ui(e.j.Oa,e.j,e):null;e:{var r=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=r[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=r[o].h;const a=r[o].g;if(n-=t,0>n)t=Math.max(0,r[o].h-100),s=!1;else try{so(a,e,"req"+n+"_")}catch(e){i&&i(a)}}if(s){i=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,i}function $o(e){e.g||e.u||(e.Y=1,Ar(e.Ga,e),e.A=0)}function Fo(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=Jr(ui(e.Ga,e),zo(e,e.A)),e.A++,!0)}function Vo(e){null!=e.B&&(ni.clearTimeout(e.B),e.B=null)}function jo(e){e.g=new os(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Cs(e.oa);Ps(t,"RID","rpc"),Ps(t,"SID",e.J),Ps(t,"CI",e.N?"0":"1"),Ps(t,"AID",e.U),Mo(e,t),Ps(t,"TYPE","xmlhttp"),e.o&&e.s&&So(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=Ls(Cs(t)),n.s=null,n.U=!0,ds(n,e)}function Bo(e){null!=e.v&&(ni.clearTimeout(e.v),e.v=null)}function qo(e,t){var n=null;if(e.g==t){Bo(e),Vo(e),e.g=null;var i=2}else{if(!Zs(e.i,t))return;n=t.D,to(e.i,t),i=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==i){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;vr(i=qr(),new Wr(i,n,t,r)),Lo(e)}else $o(e);else if(3==(r=t.o)||0==r&&0<e.I||!(1==i&&function(e,t){return!(Ys(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.l=t.D.concat(e.l),0):1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya)||(e.m=Jr(ui(e.Ha,e,t),zo(e,e.C)),e.C++,0)))}(e,t)||2==i&&Fo(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),r){case 1:Ho(e,5);break;case 4:Ho(e,10);break;case 3:Ho(e,6);break;default:Ho(e,2)}}function zo(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function Ho(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var i=ui(e.jb,e);n||(n=new Ss("//www.google.com/images/cleardot.gif"),ni.location&&"http"==ni.location.protocol||Ns(n,"https"),Ls(n)),function(e,t){const n=new Fr;if(ni.Image){const i=new Image;i.onload=hi(oo,n,i,"TestLoadImage: loaded",!0,t),i.onerror=hi(oo,n,i,"TestLoadImage: error",!1,t),i.onabort=hi(oo,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=hi(oo,n,i,"TestLoadImage: timeout",!1,t),ni.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=e}else t(!1)}(n.toString(),i)}else Gr(2);e.G=0,e.j&&e.j.va(t),Ko(e),Oo(e)}function Ko(e){e.G=0,e.I=-1,e.j&&(0==no(e.i).length&&0==e.l.length||(e.i.i.length=0,vi(e.l),e.l.length=0),e.j.ua())}function Go(e,t,n){let i=function(e){return e instanceof Ss?Cs(e):new Ss(e,void 0)}(n);if(""!=i.i)t&&Rs(i,t+"."+i.i),Ds(i,i.m);else{const e=ni.location;i=function(e,t,n,i){var r=new Ss(null,void 0);return e&&Ns(r,e),t&&Rs(r,t),n&&Ds(r,n),i&&(r.l=i),r}(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&Ai(e.aa,(function(e,t){Ps(i,t,e)})),t=e.D,n=e.sa,t&&n&&Ps(i,t,n),Ps(i,"VER",e.ma),Mo(e,i),i}function Wo(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ba&&!e.qa?new go(new ao({ib:!0})):new go(e.qa)).L=e.H,t}function Jo(){}function Xo(){if(Li&&!(10<=Number(Gi)))throw Error("Environmental error: no available transport.")}function Qo(e,t){yr.call(this),this.g=new No(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!wi(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!wi(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new ea(this)}function Yo(e){is.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Zo(){rs.call(this),this.status=1}function ea(e){this.g=e}(Zn=go.prototype).ea=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ts.g(),this.C=this.u?Zr(this.u):Zr(ts),this.g.onreadystatechange=ui(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void bo(this,e)}e=n||"";const r=new Es(this.headers);i&&Ts(i,(function(e,t){r.set(t,e)})),i=function(e){e:{var t=wo;const n=e.length,i="string"==typeof e?e.split(""):e;for(let r=0;r<n;r++)if(r in i&&t.call(void 0,i[r],r,e)){t=r;break e}t=-1}return 0>t?null:"string"==typeof e?e.charAt(t):e[t]}(r.T()),n=ni.FormData&&e instanceof ni.FormData,!(0<=gi(vo,t))||i||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{_o(this),0<this.B&&((this.K=function(e){return Li&&Hi()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ui(this.pa,this)):this.A=Or(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){bo(this,e)}},Zn.pa=function(){void 0!==ti&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,vr(this,"timeout"),this.abort(8))},Zn.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,vr(this,"complete"),vr(this,"abort"),Eo(this))},Zn.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Eo(this,!0)),go.Z.M.call(this)},Zn.Fa=function(){this.s||(this.F||this.v||this.l?To(this):this.cb())},Zn.cb=function(){To(this)},Zn.ba=function(){try{return 2<ko(this)?this.g.status:-1}catch(e){return-1}},Zn.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},Zn.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),po(t)}},Zn.Da=function(){return this.m},Zn.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(Zn=No.prototype).ma=8,Zn.G=1,Zn.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(e){}},Zn.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const r=new os(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?(s=Si(s),Ni(s,this.P)):s=this.P),null===this.o&&(r.H=s),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var i=this.l[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(t+=i)){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Uo(this,r,t),Ps(n=Cs(this.F),"RID",e),Ps(n,"CVER",22),this.D&&Ps(n,"X-HTTP-Session-Id",this.D),Mo(this,n),this.o&&s&&So(n,this.o,s),eo(this.i,r),this.Ra&&Ps(n,"TYPE","init"),this.ja?(Ps(n,"$req",t),Ps(n,"SID","null"),r.$=!0,hs(r,n,null)):hs(r,n,t),this.G=2}}else 3==this.G&&(e?xo(this,e):0==this.l.length||Qs(this.i)||xo(this))},Zn.Ga=function(){if(this.u=null,jo(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=Jr(ui(this.bb,this),e)}},Zn.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Gr(10),Do(this),jo(this))},Zn.ab=function(){null!=this.v&&(this.v=null,Do(this),Fo(this),Gr(19))},Zn.jb=function(e){e?(this.h.info("Successfully pinged google.com"),Gr(2)):(this.h.info("Failed to ping google.com"),Gr(1))},(Zn=Jo.prototype).xa=function(){},Zn.wa=function(){},Zn.va=function(){},Zn.ua=function(){},Zn.Oa=function(){},Xo.prototype.g=function(e,t){return new Qo(e,t)},di(Qo,yr),Qo.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Ar(ui(e.hb,e,t))),Gr(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=Go(e,null,e.W),Lo(e)},Qo.prototype.close=function(){Ro(this.g)},Qo.prototype.u=function(e){if("string"==typeof e){var t={};t.__data__=e,Po(this.g,t)}else this.v?((t={}).__data__=br(e),Po(this.g,t)):Po(this.g,e)},Qo.prototype.M=function(){this.g.j=null,delete this.j,Ro(this.g),delete this.g,Qo.Z.M.call(this)},di(Yo,is),di(Zo,rs),di(ea,Jo),ea.prototype.xa=function(){vr(this.g,"a")},ea.prototype.wa=function(e){vr(this.g,new Yo(e))},ea.prototype.va=function(e){vr(this.g,new Zo(e))},ea.prototype.ua=function(){vr(this.g,"b")},Xo.prototype.createWebChannel=Xo.prototype.g,Qo.prototype.send=Qo.prototype.u,Qo.prototype.open=Qo.prototype.m,Qo.prototype.close=Qo.prototype.close,Xr.NO_ERROR=0,Xr.TIMEOUT=8,Xr.HTTP_ERROR=6,Qr.COMPLETE="complete",es.EventType=ns,ns.OPEN="a",ns.CLOSE="b",ns.ERROR="c",ns.MESSAGE="d",yr.prototype.listen=yr.prototype.N,go.prototype.listenOnce=go.prototype.O,go.prototype.getLastError=go.prototype.La,go.prototype.getLastErrorCode=go.prototype.Da,go.prototype.getStatus=go.prototype.ba,go.prototype.getResponseJson=go.prototype.Qa,go.prototype.getResponseText=go.prototype.ga,go.prototype.send=go.prototype.ea;var ta=Xr,na=Qr,ia=jr,ra=10,sa=11,oa=ao,aa=es,ca=go;const la="@firebase/firestore";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
     */const da=new yt("@firebase/firestore");function fa(){return da.logLevel}function pa(e,...t){if(da.logLevel<=dt.DEBUG){const n=t.map(va);da.debug(`Firestore (${ha}): ${e}`,...n)}}function ma(e,...t){if(da.logLevel<=dt.ERROR){const n=t.map(va);da.error(`Firestore (${ha}): ${e}`,...n)}}function ya(e,...t){if(da.logLevel<=dt.WARN){const n=t.map(va);da.warn(`Firestore (${ha}): ${e}`,...n)}}function va(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
     */class ka{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Aa{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ua.UNAUTHENTICATED)))}shutdown(){}}class Sa{constructor(e){this.t=e,this.currentUser=ua.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let r=new _a;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new _a,e.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const t=r;e.enqueueRetryable((async()=>{await t.promise,await i(this.currentUser)}))},o=e=>{pa("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(pa("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new _a)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(pa("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(ba("string"==typeof t.accessToken),new ka(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ba(null===e||"string"==typeof e),new ua(e)}}class Ca{constructor(e,t,n){this.type="FirstParty",this.user=ua.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class Na{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new Ca(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(ua.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ra{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Da{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null}start(e,t){this.o=n=>{e.enqueueRetryable((()=>(e=>(null!=e.error&&pa("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`),t(e.token)))(n)))};const n=e=>{pa("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit((e=>n(e))),setTimeout((()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?n(e):pa("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(ba("string"==typeof e.token),new Ra(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
     */class Oa{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.p(e),this.T=e=>t.writeSequenceNumber(e))}p(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Pa(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */Oa.I=-1;class La{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=Pa(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<t&&(n+=e.charAt(i[r]%e.length))}return n}}function xa(e,t){return e<t?-1:e>t?1:0}function Ma(e,t,n){return e.length===t.length&&e.every(((e,i)=>n(e,t[i])))}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ua{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Ea(Ta.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Ea(Ta.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Ea(Ta.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Ea(Ta.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ua.fromMillis(Date.now())}static fromDate(e){return Ua.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Ua(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?xa(this.nanoseconds,e.nanoseconds):xa(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class $a{constructor(e){this.timestamp=e}static fromTimestamp(e){return new $a(e)}static min(){return new $a(new Ua(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
     */class Ba{constructor(e,t,n){void 0===t?t=0:t>e.length&&wa(),void 0===n?n=e.length-t:n>e.length-t&&wa(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Ba.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ba?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const n=e.get(i),r=t.get(i);if(n<r)return-1;if(n>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class qa extends Ba{construct(e,t,n){return new qa(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Ea(Ta.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new qa(t)}static emptyPath(){return new qa([])}}const za=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ha extends Ba{construct(e,t,n){return new Ha(e,t,n)}static isValidIdentifier(e){return za.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ha.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ha(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const r=()=>{if(0===n.length)throw new Ea(Ta.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;i<e.length;){const t=e[i];if("\\"===t){if(i+1===e.length)throw new Ea(Ta.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Ea(Ta.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?(s=!s,i++):"."!==t||s?(n+=t,i++):(r(),i++)}if(r(),s)throw new Ea(Ta.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ha(t)}static emptyPath(){return new Ha([])}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ka{constructor(e){this.fields=e,e.sort(Ha.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ma(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xa(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ga.EMPTY_BYTE_STRING=new Ga("");const Wa=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ja(e){if(ba(!!e),"string"==typeof e){let t=0;const n=Wa.exec(e);if(ba(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:Xa(e.seconds),nanos:Xa(e.nanos)}}function Xa(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Qa(e){return"string"==typeof e?Ga.fromBase64String(e):Ga.fromUint8Array(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ya(e){const t=Ja(e.mapValue.fields.__local_write_time__.timestampValue);return new Ua(t.seconds,t.nanos)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Za(e){return null==e}function ec(e){return 0===e&&1/e==-1/0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class tc{constructor(e){this.path=e}static fromPath(e){return new tc(qa.fromString(e))}static fromName(e){return new tc(qa.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===qa.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return qa.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new tc(new qa(e.slice()))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function nc(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?function(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}(e)?4:10:wa()}function ic(e,t){const n=nc(e);if(n!==nc(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ya(e).isEqual(Ya(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Ja(e.timestampValue),i=Ja(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Qa(e.bytesValue).isEqual(Qa(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Xa(e.geoPointValue.latitude)===Xa(t.geoPointValue.latitude)&&Xa(e.geoPointValue.longitude)===Xa(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Xa(e.integerValue)===Xa(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Xa(e.doubleValue),i=Xa(t.doubleValue);return n===i?ec(n)===ec(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return Ma(e.arrayValue.values||[],t.arrayValue.values||[],ic);case 10:return function(e,t){const n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(Fa(n)!==Fa(i))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===i[e]||!ic(n[e],i[e])))return!1;return!0}(e,t);default:return wa()}}function rc(e,t){return void 0!==(e.values||[]).find((e=>ic(e,t)))}function sc(e,t){const n=nc(e),i=nc(t);if(n!==i)return xa(n,i);switch(n){case 0:return 0;case 1:return xa(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Xa(e.integerValue||e.doubleValue),i=Xa(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return oc(e.timestampValue,t.timestampValue);case 4:return oc(Ya(e),Ya(t));case 5:return xa(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Qa(e),i=Qa(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),i=t.split("/");for(let e=0;e<n.length&&e<i.length;e++){const t=xa(n[e],i[e]);if(0!==t)return t}return xa(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=xa(Xa(e.latitude),Xa(t.latitude));return 0!==n?n:xa(Xa(e.longitude),Xa(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],i=t.values||[];for(let e=0;e<n.length&&e<i.length;++e){const t=sc(n[e],i[e]);if(t)return t}return xa(n.length,i.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},i=Object.keys(n),r=t.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let e=0;e<i.length&&e<s.length;++e){const t=xa(i[e],s[e]);if(0!==t)return t;const o=sc(n[i[e]],r[s[e]]);if(0!==o)return o}return xa(i.length,s.length)}(e.mapValue,t.mapValue);default:throw wa()}}function oc(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return xa(e,t);const n=Ja(e),i=Ja(t),r=xa(n.seconds,i.seconds);return 0!==r?r:xa(n.nanos,i.nanos)}function ac(e){return cc(e)}function cc(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Ja(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Qa(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,tc.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const i of e.values||[])n?n=!1:t+=",",t+=cc(i);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",i=!0;for(const r of t)i?i=!1:n+=",",n+=`${r}:${cc(e.fields[r])}`;return n+"}"}(e.mapValue):wa();var t,n}function lc(e){return!!e&&"integerValue"in e}function uc(e){return!!e&&"arrayValue"in e}function hc(e){return!!e&&"mapValue"in e}function dc(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Va(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=dc(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=dc(e.arrayValue.values[n]);return t}return Object.assign({},e)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class fc{constructor(e){this.value=e}static empty(){return new fc({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!hc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=dc(t)}setAll(e){let t=Ha.emptyPath(),n={},i=[];e.forEach(((e,r)=>{if(!t.isImmediateParentOf(r)){const e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=r.popLast()}e?n[r.lastSegment()]=dc(e):i.push(r.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,n,i)}delete(e){const t=this.field(e.popLast());hc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ic(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];hc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){Va(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new fc(dc(this.value))}}function pc(e){const t=[];return Va(e.fields,((e,n)=>{const i=new Ha([e]);if(hc(n)){const e=pc(n.mapValue).fields;if(0===e.length)t.push(i);else for(const n of e)t.push(i.child(n))}else t.push(i)})),new Ka(t)
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class gc{constructor(e,t,n,i,r){this.key=e,this.documentType=t,this.version=n,this.data=i,this.documentState=r}static newInvalidDocument(e){return new gc(e,0,$a.min(),fc.empty(),0)}static newFoundDocument(e,t,n){return new gc(e,1,t,n,0)}static newNoDocument(e,t){return new gc(e,2,t,fc.empty(),0)}static newUnknownDocument(e,t){return new gc(e,3,t,fc.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=fc.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=fc.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof gc&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new gc(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class mc{constructor(e,t=null,n=[],i=[],r=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.R=null}}function yc(e,t=null,n=[],i=[],r=null,s=null,o=null){return new mc(e,t,n,i,r,s,o)}function vc(e){const t=Ia(e);if(null===t.R){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>function(e){return e.field.canonicalString()+e.op.toString()+ac(e.value)}(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Za(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=Rc(t.startAt)),t.endAt&&(e+="|ub:",e+=Rc(t.endAt)),t.R=e}return t.R}function wc(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Oc(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(n=e.filters[r],i=t.filters[r],n.op!==i.op||!n.field.isEqual(i.field)||!ic(n.value,i.value))return!1;var n,i;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Lc(e.startAt,t.startAt)&&Lc(e.endAt,t.endAt)}class bc extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.P(e,t,n):new Ic(e,t,n):"array-contains"===t?new kc(e,n):"in"===t?new Ac(e,n):"not-in"===t?new Sc(e,n):"array-contains-any"===t?new Cc(e,n):new bc(e,t,n)}static P(e,t,n){return"in"===t?new Tc(e,n):new Ec(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.v(sc(t,this.value)):null!==t&&nc(this.value)===nc(t)&&this.v(sc(t,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return wa()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Ic extends bc{constructor(e,t,n){super(e,t,n),this.key=tc.fromName(n.referenceValue)}matches(e){const t=tc.comparator(e.key,this.key);return this.v(t)}}class Tc extends bc{constructor(e,t){super(e,"in",t),this.keys=_c("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Ec extends bc{constructor(e,t){super(e,"not-in",t),this.keys=_c("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function _c(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>tc.fromName(e.referenceValue)))}class kc extends bc{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return uc(t)&&rc(t.arrayValue,this.value)}}class Ac extends bc{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&rc(this.value.arrayValue,t)}}class Sc extends bc{constructor(e,t){super(e,"not-in",t)}matches(e){if(rc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!rc(this.value.arrayValue,t)}}class Cc extends bc{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!uc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>rc(this.value.arrayValue,e)))}}class Nc{constructor(e,t){this.position=e,this.before=t}}function Rc(e){return`${e.before?"b":"a"}:${e.position.map((e=>ac(e))).join(",")}`}class Dc{constructor(e,t="asc"){this.field=e,this.dir=t}}function Oc(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Pc(e,t,n){let i=0;for(let r=0;r<e.position.length;r++){const s=t[r],o=e.position[r];if(i=s.field.isKeyField()?tc.comparator(tc.fromName(o.referenceValue),n.key):sc(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return e.before?i<=0:i<0}function Lc(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.before!==t.before||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ic(e.position[n],t.position[n]))return!1;return!0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class xc{constructor(e,t=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.S=null,this.D=null,this.startAt,this.endAt}}function Mc(e){const t=Ia(e);if(null===t.S){t.S=[];const e=function(e){for(const t of e.filters)if(t.V())return t.field;return null}(t),n=function(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}(t);if(null!==e&&null===n)e.isKeyField()||t.S.push(new Dc(e)),t.S.push(new Dc(Ha.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.S.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.S.push(new Dc(Ha.keyField(),e))}}}return t.S}function Uc(e){const t=Ia(e);if(!t.D)if("F"===t.limitType)t.D=yc(t.path,t.collectionGroup,Mc(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of Mc(t)){const t="desc"===n.dir?"asc":"desc";e.push(new Dc(n.field,t))}const n=t.endAt?new Nc(t.endAt.position,!t.endAt.before):null,i=t.startAt?new Nc(t.startAt.position,!t.startAt.before):null;t.D=yc(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}return t.D}function $c(e,t){return wc(Uc(e),Uc(t))&&e.limitType===t.limitType}function Fc(e){return`${vc(Uc(e))}|lt:${e.limitType}`}function Vc(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${ac(t.value)}`;var t})).join(", ")}]`),Za(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: "+Rc(e.startAt)),e.endAt&&(t+=", endAt: "+Rc(e.endAt)),`Target(${t})`}(Uc(e))}; limitType=${e.limitType})`}function jc(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):tc.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!Pc(e.startAt,Mc(e),t))&&(!e.endAt||!Pc(e.endAt,Mc(e),t))}(e,t)}function Bc(e,t,n){const i=e.field.isKeyField()?tc.comparator(t.key,n.key):function(e,t,n){const i=t.data.field(e),r=n.data.field(e);return null!==i&&null!==r?sc(i,r):wa()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return wa()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function qc(e,t){if(e.C){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ec(t)?"-0":t}}function zc(e){return{integerValue:""+e}}function Hc(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!ec(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(t)?zc(t):qc(e,t)}
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
     */class Kc{constructor(){this._=void 0}}function Gc(e,t,n){return e instanceof Xc?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Qc?Yc(e,t):e instanceof Zc?el(e,t):function(e,t){const n=Jc(e,t),i=nl(n)+nl(e.N);return lc(n)&&lc(e.N)?zc(i):qc(e.k,i)}(e,t)}function Wc(e,t,n){return e instanceof Qc?Yc(e,t):e instanceof Zc?el(e,t):n}function Jc(e,t){return e instanceof tl?lc(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class Xc extends Kc{}class Qc extends Kc{constructor(e){super(),this.elements=e}}function Yc(e,t){const n=il(t);for(const t of e.elements)n.some((e=>ic(e,t)))||n.push(t);return{arrayValue:{values:n}}}class Zc extends Kc{constructor(e){super(),this.elements=e}}function el(e,t){let n=il(t);for(const t of e.elements)n=n.filter((e=>!ic(e,t)));return{arrayValue:{values:n}}}class tl extends Kc{constructor(e,t){super(),this.k=e,this.N=t}}function nl(e){return Xa(e.integerValue||e.doubleValue)}function il(e){return uc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class rl{constructor(e,t){this.version=e,this.transformResults=t}}class sl{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new sl}static exists(e){return new sl(void 0,e)}static updateTime(e){return new sl(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ol(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class al{}function cl(e,t,n){e instanceof fl?function(e,t,n){const i=e.value.clone(),r=ml(e.fieldTransforms,t,n.transformResults);i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):e instanceof pl?function(e,t,n){if(!ol(e.precondition,t))return void t.convertToUnknownDocument(n.version);const i=ml(e.fieldTransforms,t,n.transformResults),r=t.data;r.setAll(gl(e)),r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function ll(e,t,n){e instanceof fl?function(e,t,n){if(!ol(e.precondition,t))return;const i=e.value.clone(),r=yl(e.fieldTransforms,n,t);i.setAll(r),t.convertToFoundDocument(dl(t),i).setHasLocalMutations()}(e,t,n):e instanceof pl?function(e,t,n){if(!ol(e.precondition,t))return;const i=yl(e.fieldTransforms,n,t),r=t.data;r.setAll(gl(e)),r.setAll(i),t.convertToFoundDocument(dl(t),r).setHasLocalMutations()}(e,t,n):function(e,t){ol(e.precondition,t)&&t.convertToNoDocument($a.min())}(e,t)}function ul(e,t){let n=null;for(const i of e.fieldTransforms){const e=t.data.field(i.field),r=Jc(i.transform,e||null);null!=r&&(null==n&&(n=fc.empty()),n.set(i.field,r))}return n||null}function hl(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Ma(e,t,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Qc&&t instanceof Qc||e instanceof Zc&&t instanceof Zc?Ma(e.elements,t.elements,ic):e instanceof tl&&t instanceof tl?ic(e.N,t.N):e instanceof Xc&&t instanceof Xc}(e.transform,t.transform)}(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function dl(e){return e.isFoundDocument()?e.version:$a.min()}class fl extends al{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}}class pl extends al{constructor(e,t,n,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}}function gl(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}})),t}function ml(e,t,n){const i=new Map;ba(e.length===n.length);for(let r=0;r<n.length;r++){const s=e[r],o=s.transform,a=t.data.field(s.field);i.set(s.field,Wc(o,a,n[r]))}return i}function yl(e,t,n){const i=new Map;for(const r of e){const e=r.transform,s=n.data.field(r.field);i.set(r.field,Gc(e,s,t))}return i}class vl extends al{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class wl extends al{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var bl,Il;(Il=bl||(bl={}))[Il.OK=0]="OK",Il[Il.CANCELLED=1]="CANCELLED",Il[Il.UNKNOWN=2]="UNKNOWN",Il[Il.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Il[Il.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Il[Il.NOT_FOUND=5]="NOT_FOUND",Il[Il.ALREADY_EXISTS=6]="ALREADY_EXISTS",Il[Il.PERMISSION_DENIED=7]="PERMISSION_DENIED",Il[Il.UNAUTHENTICATED=16]="UNAUTHENTICATED",Il[Il.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Il[Il.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Il[Il.ABORTED=10]="ABORTED",Il[Il.OUT_OF_RANGE=11]="OUT_OF_RANGE",Il[Il.UNIMPLEMENTED=12]="UNIMPLEMENTED",Il[Il.INTERNAL=13]="INTERNAL",Il[Il.UNAVAILABLE=14]="UNAVAILABLE",Il[Il.DATA_LOSS=15]="DATA_LOSS";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Tl{constructor(e,t){this.comparator=e,this.root=t||_l.EMPTY}insert(e,t){return new Tl(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,_l.BLACK,null,null))}remove(e){return new Tl(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_l.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new El(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new El(this.root,e,this.comparator,!1)}getReverseIterator(){return new El(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new El(this.root,e,this.comparator,!0)}}class El{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _l{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:_l.RED,this.left=null!=i?i:_l.EMPTY,this.right=null!=r?r:_l.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,r){return new _l(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return _l.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return _l.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_l.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_l.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw wa();if(this.right.isRed())throw wa();const e=this.left.check();if(e!==this.right.check())throw wa();return e+(this.isRed()?0:1)}}_l.EMPTY=null,_l.RED=!0,_l.BLACK=!1,_l.EMPTY=new class{constructor(){this.size=0}get key(){throw wa()}get value(){throw wa()}get color(){throw wa()}get left(){throw wa()}get right(){throw wa()}copy(e,t,n,i,r){return this}insert(e,t,n){return new _l(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class kl{constructor(e){this.comparator=e,this.data=new Tl(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Al(this.data.getIterator())}getIteratorFrom(e){return new Al(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof kl))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new kl(this.comparator);return t.data=e,t}}class Al{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Sl=new Tl(tc.comparator);function Cl(){return Sl}const Nl=new Tl(tc.comparator);function Rl(){return Nl}const Dl=new Tl(tc.comparator);const Ol=new kl(tc.comparator);function Pl(...e){let t=Ol;for(const n of e)t=t.add(n);return t}const Ll=new kl(xa);class xl{constructor(e,t){this.databaseId=e,this.C=t}}function Ml(e,t){return e.C?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ul(e,t){return e.C?t.toBase64():t.toUint8Array()}function $l(e,t){return Ml(e,t.toTimestamp())}function Fl(e){return ba(!!e),$a.fromTimestamp(function(e){const t=Ja(e);return new Ua(t.seconds,t.nanos)}(e))}function Vl(e,t){return function(e){return new qa(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function jl(e,t){return Vl(e.databaseId,t.path)}function Bl(e){const t=function(e){const t=qa.fromString(e);return ba(function(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}(t)),t}(e);return 4===t.length?qa.emptyPath():function(e){return ba(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}(t)}function ql(e,t,n){return{name:jl(e,t),fields:n.value.mapValue.fields}}function zl(e){let t=Bl(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){ba(1===i);const e=n.from[0];e.allDescendants?r=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=Hl(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new Dc(Gl(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Za(t)?null:t}(n.limit));let c=null;n.startAt&&(c=Kl(n.startAt));let l=null;return n.endAt&&(l=Kl(n.endAt)),function(e,t,n,i,r,s,o,a){return new xc(e,t,n,i,r,s,o,a)}(t,r,o,s,a,"F",c,l)}function Hl(e){return e?void 0!==e.unaryFilter?[Jl(e)]:void 0!==e.fieldFilter?[Wl(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>Hl(e))).reduce(((e,t)=>e.concat(t))):wa():[]}function Kl(e){const t=!!e.before,n=e.values||[];return new Nc(n,t)}function Gl(e){return Ha.fromServerFormat(e.fieldPath)}function Wl(e){return bc.create(Gl(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return wa()}}(e.fieldFilter.op),e.fieldFilter.value)}function Jl(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Gl(e.unaryFilter.field);return bc.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Gl(e.unaryFilter.field);return bc.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Gl(e.unaryFilter.field);return bc.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Gl(e.unaryFilter.field);return bc.create(r,"!=",{nullValue:"NULL_VALUE"});default:return wa()}}function Xl(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Ql{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&wa(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Ql(((n,i)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,i)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Ql?t:Ql.resolve(t)}catch(e){return Ql.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Ql.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Ql.reject(t)}static resolve(e){return new Ql(((t,n)=>{t(e)}))}static reject(e){return new Ql(((t,n)=>{n(e)}))}static waitFor(e){return new Ql(((t,n)=>{let i=0,r=0,s=!1;e.forEach((e=>{++i,e.next((()=>{++r,s&&r===i&&t()}),(e=>n(e)))})),s=!0,r===i&&t()}))}static or(e){let t=Ql.resolve(!1);for(const n of e)t=t.next((e=>e?Ql.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,i)=>{n.push(t.call(this,e,i))})),this.waitFor(n)}}function Yl(e){return"IndexedDbTransactionError"===e.name}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Zl{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const i=this.mutations[t];i.key.isEqual(e.key)&&cl(i,e,n[t])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&ll(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&ll(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach((t=>{const n=e.get(t.key),i=n;this.applyToLocalView(i),n.isValidDocument()||i.convertToNoDocument($a.min())}))}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Pl())}isEqual(e){return this.batchId===e.batchId&&Ma(this.mutations,e.mutations,((e,t)=>hl(e,t)))&&Ma(this.baseMutations,e.baseMutations,((e,t)=>hl(e,t)))}}class eu{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){ba(e.mutations.length===n.length);let i=Dl;const r=e.mutations;for(let e=0;e<r.length;e++)i=i.insert(r[e].key,n[e].version);return new eu(e,t,n,i)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class tu{constructor(e){this.Gt=e}}function nu(e){const t=zl({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?function(e,t,n){return new xc(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}(t,t.limit,"L"):t}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class iu{constructor(){this.zt=new ru}addToCollectionParentIndex(e,t){return this.zt.add(t),Ql.resolve()}getCollectionParents(e,t){return Ql.resolve(this.zt.getEntries(t))}}class ru{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new kl(qa.comparator),r=!i.has(n);return this.index[t]=i.add(n),r}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new kl(qa.comparator)).toArray()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class su{constructor(e){this.se=e}next(){return this.se+=2,this.se}static ie(){return new su(0)}static re(){return new su(-1)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function ou(e){if(e.code!==Ta.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;pa("LocalStore","Unexpectedly lost primary lease")}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class au{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,i]of n)if(this.equalsFn(t,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(void 0!==i){for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],e))return void(i[n]=[e,t]);i.push([e,t])}else this.inner[n]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return 1===n.length?delete this.inner[t]:n.splice(i,1),!0;return!1}forEach(e){Va(this.inner,((t,n)=>{for(const[t,i]of n)e(t,i)}))}isEmpty(){return ja(this.inner)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
class cu{constructor(e,t,n){this.Je=e,this.An=t,this.Jt=n}Rn(e,t){return this.An.getAllMutationBatchesAffectingDocumentKey(e,t).next((n=>this.Pn(e,t,n)))}Pn(e,t,n){return this.Je.getEntry(e,t).next((e=>{for(const t of n)t.applyToLocalView(e);return e}))}bn(e,t){e.forEach(((e,n)=>{for(const e of t)e.applyToLocalView(n)}))}vn(e,t){return this.Je.getEntries(e,t).next((t=>this.Vn(e,t).next((()=>t))))}Vn(e,t){return this.An.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>this.bn(t,e)))}getDocumentsMatchingQuery(e,t,n){return function(e){return tc.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.Sn(e,t.path):function(e){return null!==e.collectionGroup}(t)?this.Dn(e,t,n):this.Cn(e,t,n)}Sn(e,t){return this.Rn(e,new tc(t)).next((e=>{let t=Rl();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}Dn(e,t,n){const i=t.collectionGroup;let r=Rl();return this.Jt.getCollectionParents(e,i).next((s=>Ql.forEach(s,(s=>{const o=function(e,t){return new xc(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(i));return this.Cn(e,o,n).next((e=>{e.forEach(((e,t)=>{r=r.insert(e,t)}))}))})).next((()=>r))))}Cn(e,t,n){let i,r;return this.Je.getDocumentsMatchingQuery(e,t,n).next((n=>(i=n,this.An.getAllMutationBatchesAffectingQuery(e,t)))).next((t=>(r=t,this.Nn(e,r,i).next((e=>{i=e;for(const e of r)for(const t of e.mutations){const n=t.key;let r=i.get(n);null==r&&(r=gc.newInvalidDocument(n),i=i.insert(n,r)),ll(t,r,e.localWriteTime),r.isFoundDocument()||(i=i.remove(n))}}))))).next((()=>(i.forEach(((e,n)=>{jc(t,n)||(i=i.remove(e))})),i)))}Nn(e,t,n){let i=Pl();for(const e of t)for(const t of e.mutations)t instanceof pl&&null===n.get(t.key)&&(i=i.add(t.key));let r=n;return this.Je.getEntries(e,i).next((e=>(e.forEach(((e,t)=>{t.isFoundDocument()&&(r=r.insert(e,t))})),r)))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class lu{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.kn=n,this.xn=i}static $n(e,t){let n=Pl(),i=Pl();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:i=i.add(e.doc.key)}return new lu(e,t.fromCache,n,i)}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class uu{Fn(e){this.On=e}getDocumentsMatchingQuery(e,t,n,i){return function(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}(t)||n.isEqual($a.min())?this.Mn(e,t):this.On.vn(e,i).next((r=>{const s=this.Ln(t,r);return(function(e){return!Za(e.limit)&&"F"===e.limitType}(t)||function(e){return!Za(e.limit)&&"L"===e.limitType}(t))&&this.Bn(t.limitType,s,i,n)?this.Mn(e,t):(fa()<=dt.DEBUG&&pa("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Vc(t)),this.On.getDocumentsMatchingQuery(e,t,n).next((e=>(s.forEach((t=>{e=e.insert(t.key,t)})),e))))}))}Ln(e,t){let n=new kl(function(e){return(t,n)=>{let i=!1;for(const r of Mc(e)){const e=Bc(r,t,n);if(0!==e)return e;i=i||r.field.isKeyField()}return 0}}(e));return t.forEach(((t,i)=>{jc(e,i)&&(n=n.add(i))})),n}Bn(e,t,n,i){if(n.size!==t.size)return!0;const r="F"===e?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mn(e,t){return fa()<=dt.DEBUG&&pa("QueryEngine","Using full collection scan to execute query:",Vc(t)),this.On.getDocumentsMatchingQuery(e,t,$a.min())}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class hu{constructor(e,t,n,i){this.persistence=e,this.Un=t,this.k=i,this.qn=new Tl(xa),this.Kn=new au((e=>vc(e)),wc),this.jn=$a.min(),this.An=e.getMutationQueue(n),this.Qn=e.getRemoteDocumentCache(),this.He=e.getTargetCache(),this.Wn=new cu(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=e.getBundleCache(),this.Un.Fn(this.Wn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.qn)))}}async function du(e,t){const n=Ia(e);let i=n.An,r=n.Wn;const s=await n.persistence.runTransaction("Handle user change","readonly",(e=>{let s;return n.An.getAllMutationBatches(e).next((o=>(s=o,i=n.persistence.getMutationQueue(t),r=new cu(n.Qn,i,n.persistence.getIndexManager()),i.getAllMutationBatches(e)))).next((t=>{const n=[],i=[];let o=Pl();for(const e of s){n.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return r.vn(e,o).next((e=>({Gn:e,removedBatchIds:n,addedBatchIds:i})))}))}));return n.An=i,n.Wn=r,n.Un.Fn(n.Wn),s}function fu(e,t){const n=Ia(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.An.getNextMutationBatchAfterBatchId(e,t))))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class pu{constructor(e){this.k=e,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(e,t){return Ql.resolve(this.Xn.get(t))}saveBundleMetadata(e,t){var n;return this.Xn.set(t.id,{id:(n=t).id,version:n.version,createTime:Fl(n.createTime)}),Ql.resolve()}getNamedQuery(e,t){return Ql.resolve(this.Zn.get(t))}saveNamedQuery(e,t){return this.Zn.set(t.name,function(e){return{name:e.name,query:nu(e.bundledQuery),readTime:Fl(e.readTime)}}(t)),Ql.resolve()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class gu{constructor(){this.ts=new kl(mu.es),this.ns=new kl(mu.ss)}isEmpty(){return this.ts.isEmpty()}addReference(e,t){const n=new mu(e,t);this.ts=this.ts.add(n),this.ns=this.ns.add(n)}rs(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.os(new mu(e,t))}cs(e,t){e.forEach((e=>this.removeReference(e,t)))}us(e){const t=new tc(new qa([])),n=new mu(t,e),i=new mu(t,e+1),r=[];return this.ns.forEachInRange([n,i],(e=>{this.os(e),r.push(e.key)})),r}hs(){this.ts.forEach((e=>this.os(e)))}os(e){this.ts=this.ts.delete(e),this.ns=this.ns.delete(e)}ls(e){const t=new tc(new qa([])),n=new mu(t,e),i=new mu(t,e+1);let r=Pl();return this.ns.forEachInRange([n,i],(e=>{r=r.add(e.key)})),r}containsKey(e){const t=new mu(e,0),n=this.ts.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class mu{constructor(e,t){this.key=e,this.fs=t}static es(e,t){return tc.comparator(e.key,t.key)||xa(e.fs,t.fs)}static ss(e,t){return xa(e.fs,t.fs)||tc.comparator(e.key,t.key)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class yu{constructor(e,t){this.Jt=e,this.referenceDelegate=t,this.An=[],this.ds=1,this.ws=new kl(mu.es)}checkEmpty(e){return Ql.resolve(0===this.An.length)}addMutationBatch(e,t,n,i){const r=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const s=new Zl(r,t,n,i);this.An.push(s);for(const t of i)this.ws=this.ws.add(new mu(t.key,r)),this.Jt.addToCollectionParentIndex(e,t.key.path.popLast());return Ql.resolve(s)}lookupMutationBatch(e,t){return Ql.resolve(this._s(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.gs(n),r=i<0?0:i;return Ql.resolve(this.An.length>r?this.An[r]:null)}getHighestUnacknowledgedBatchId(){return Ql.resolve(0===this.An.length?-1:this.ds-1)}getAllMutationBatches(e){return Ql.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new mu(t,0),i=new mu(t,Number.POSITIVE_INFINITY),r=[];return this.ws.forEachInRange([n,i],(e=>{const t=this._s(e.fs);r.push(t)})),Ql.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new kl(xa);return t.forEach((e=>{const t=new mu(e,0),i=new mu(e,Number.POSITIVE_INFINITY);this.ws.forEachInRange([t,i],(e=>{n=n.add(e.fs)}))})),Ql.resolve(this.ys(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let r=n;tc.isDocumentKey(r)||(r=r.child(""));const s=new mu(new tc(r),0);let o=new kl(xa);return this.ws.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===i&&(o=o.add(e.fs)),!0)}),s),Ql.resolve(this.ys(o))}ys(e){const t=[];return e.forEach((e=>{const n=this._s(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){ba(0===this.ps(t.batchId,"removed")),this.An.shift();let n=this.ws;return Ql.forEach(t.mutations,(i=>{const r=new mu(i.key,t.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.ws=n}))}ee(e){}containsKey(e,t){const n=new mu(t,0),i=this.ws.firstAfterOrEqual(n);return Ql.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.An.length,Ql.resolve()}ps(e,t){return this.gs(e)}gs(e){return 0===this.An.length?0:e-this.An[0].batchId}_s(e){const t=this.gs(e);return t<0||t>=this.An.length?null:this.An[t]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class vu{constructor(e,t){this.Jt=e,this.Ts=t,this.docs=new Tl(tc.comparator),this.size=0}addEntry(e,t,n){const i=t.key,r=this.docs.get(i),s=r?r.size:0,o=this.Ts(t);return this.docs=this.docs.insert(i,{document:t.clone(),size:o,readTime:n}),this.size+=o-s,this.Jt.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Ql.resolve(n?n.document.clone():gc.newInvalidDocument(t))}getEntries(e,t){let n=Cl();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.clone():gc.newInvalidDocument(e))})),Ql.resolve(n)}getDocumentsMatchingQuery(e,t,n){let i=Cl();const r=new tc(t.path.child("")),s=this.docs.getIteratorFrom(r);for(;s.hasNext();){const{key:e,value:{document:r,readTime:o}}=s.getNext();if(!t.path.isPrefixOf(e.path))break;o.compareTo(n)<=0||jc(t,r)&&(i=i.insert(r.key,r.clone()))}return Ql.resolve(i)}Es(e,t){return Ql.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new wu(this)}getSize(e){return Ql.resolve(this.size)}}class wu extends class{constructor(){this.changes=new au((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}getReadTime(e){const t=this.changes.get(e);return t?t.readTime:$a.min()}addEntry(e,t){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:t})}removeEntry(e,t=null){this.assertNotApplied(),this.changes.set(e,{document:gc.newInvalidDocument(e),readTime:t})}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Ql.resolve(n.document):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}{constructor(e){super(),this.De=e}applyChanges(e){const t=[];return this.changes.forEach(((n,i)=>{i.document.isValidDocument()?t.push(this.De.addEntry(e,i.document,this.getReadTime(n))):this.De.removeEntry(n)})),Ql.waitFor(t)}getFromCache(e,t){return this.De.getEntry(e,t)}getAllFromCache(e,t){return this.De.getEntries(e,t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class bu{constructor(e){this.persistence=e,this.Is=new au((e=>vc(e)),wc),this.lastRemoteSnapshotVersion=$a.min(),this.highestTargetId=0,this.As=0,this.Rs=new gu,this.targetCount=0,this.Ps=su.ie()}forEachTarget(e,t){return this.Is.forEach(((e,n)=>t(n))),Ql.resolve()}getLastRemoteSnapshotVersion(e){return Ql.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Ql.resolve(this.As)}allocateTargetId(e){return this.highestTargetId=this.Ps.next(),Ql.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.As&&(this.As=t),Ql.resolve()}ce(e){this.Is.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ps=new su(t),this.highestTargetId=t),e.sequenceNumber>this.As&&(this.As=e.sequenceNumber)}addTargetData(e,t){return this.ce(t),this.targetCount+=1,Ql.resolve()}updateTargetData(e,t){return this.ce(t),Ql.resolve()}removeTargetData(e,t){return this.Is.delete(t.target),this.Rs.us(t.targetId),this.targetCount-=1,Ql.resolve()}removeTargets(e,t,n){let i=0;const r=[];return this.Is.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Is.delete(s),r.push(this.removeMatchingKeysForTargetId(e,o.targetId)),i++)})),Ql.waitFor(r).next((()=>i))}getTargetCount(e){return Ql.resolve(this.targetCount)}getTargetData(e,t){const n=this.Is.get(t)||null;return Ql.resolve(n)}addMatchingKeys(e,t,n){return this.Rs.rs(t,n),Ql.resolve()}removeMatchingKeys(e,t,n){this.Rs.cs(t,n);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach((t=>{r.push(i.markPotentiallyOrphaned(e,t))})),Ql.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Rs.us(t),Ql.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Rs.ls(t);return Ql.resolve(n)}containsKey(e,t){return Ql.resolve(this.Rs.containsKey(t))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Iu{constructor(e,t){this.bs={},this.Be=new Oa(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=e(this),this.He=new bu(this),this.Jt=new iu,this.Je=function(e,t){return new vu(e,t)}(this.Jt,(e=>this.referenceDelegate.vs(e))),this.k=new tu(t),this.Ye=new pu(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(e){let t=this.bs[e.toKey()];return t||(t=new yu(this.Jt,this.referenceDelegate),this.bs[e.toKey()]=t),t}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(e,t,n){pa("MemoryPersistence","Starting transaction:",e);const i=new Tu(this.Be.next());return this.referenceDelegate.Vs(),n(i).next((e=>this.referenceDelegate.Ss(i).next((()=>e)))).toPromise().then((e=>(i.raiseOnCommittedEvent(),e)))}Ds(e,t){return Ql.or(Object.values(this.bs).map((n=>()=>n.containsKey(e,t))))}}class Tu extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}{constructor(e){super(),this.currentSequenceNumber=e}}class Eu{constructor(e){this.persistence=e,this.Cs=new gu,this.Ns=null}static ks(e){return new Eu(e)}get xs(){if(this.Ns)return this.Ns;throw wa()}addReference(e,t,n){return this.Cs.addReference(n,t),this.xs.delete(n.toString()),Ql.resolve()}removeReference(e,t,n){return this.Cs.removeReference(n,t),this.xs.add(n.toString()),Ql.resolve()}markPotentiallyOrphaned(e,t){return this.xs.add(t.toString()),Ql.resolve()}removeTarget(e,t){this.Cs.us(t.targetId).forEach((e=>this.xs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.xs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Vs(){this.Ns=new Set}Ss(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ql.forEach(this.xs,(n=>{const i=tc.fromPath(n);return this.$s(e,i).next((e=>{e||t.removeEntry(i)}))})).next((()=>(this.Ns=null,t.apply(e))))}updateLimboDocument(e,t){return this.$s(e,t).next((e=>{e?this.xs.delete(t.toString()):this.xs.add(t.toString())}))}vs(e){return 0}$s(e,t){return Ql.or([()=>Ql.resolve(this.Cs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ds(e,t)])}}class _u{constructor(){this.activeTargetIds=Ll}Ms(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ls(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ku{constructor(){this.pi=new _u,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.pi.Ms(e),this.Ti[e]||"not-current"}updateQueryState(e,t,n){this.Ti[e]=t}removeLocalQueryTarget(e){this.pi.Ls(e)}isLocalQueryTarget(e){return this.pi.activeTargetIds.has(e)}clearQueryState(e){delete this.Ti[e]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(e){return this.pi.activeTargetIds.has(e)}start(){return this.pi=new _u,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Au{Ei(e){}shutdown(){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Su{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.Pi(),this.bi=[],this.vi()}Ei(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){pa("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Pi(){pa("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Cu={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Nu{constructor(e){this.Vi=e.Vi,this.Si=e.Si}Di(e){this.Ci=e}Ni(e){this.ki=e}onMessage(e){this.xi=e}close(){this.Si()}send(e){this.Vi(e)}$i(){this.Ci()}Fi(e){this.ki(e)}Oi(e){this.xi(e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ru extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.Mi=t+"://"+e.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(e,t,n,i,r){const s=this.Ui(e,t);pa("RestConnection","Sending: ",s,n);const o={};return this.qi(o,i,r),this.Ki(e,s,o,n).then((e=>(pa("RestConnection","Received: ",e),e)),(t=>{throw ya("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}ji(e,t,n,i,r){return this.Bi(e,t,n,i,r)}qi(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+ha,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}Ui(e,t){const n=Cu[e];return`${this.Mi}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Ki(e,t,n,i){return new Promise(((r,s)=>{const o=new ca;o.listenOnce(na.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case ta.NO_ERROR:const t=o.getResponseJson();pa("Connection","XHR received:",JSON.stringify(t)),r(t);break;case ta.TIMEOUT:pa("Connection",'RPC "'+e+'" timed out'),s(new Ea(Ta.DEADLINE_EXCEEDED,"Request time out"));break;case ta.HTTP_ERROR:const n=o.getStatus();if(pa("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Ta).indexOf(t)>=0?t:Ta.UNKNOWN}(e.status);s(new Ea(t,e.message))}else s(new Ea(Ta.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new Ea(Ta.UNAVAILABLE,"Connection failed."));break;default:wa()}}finally{pa("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(i);o.send(t,"POST",a,n,15)}))}Qi(e,t,n){const i=[this.Mi,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=new Xo,s=qr(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new oa({})),this.qi(o.initMessageHeaders,t,n),Ke()||We()||He().indexOf("Electron/")>=0||Je()||He().indexOf("MSAppHost/")>=0||Ge()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=i.join("");pa("Connection","Creating WebChannel: "+a,o);const c=r.createWebChannel(a,o);let l=!1,u=!1;const h=new Nu({Vi:e=>{u?pa("Connection","Not sending because WebChannel is closed:",e):(l||(pa("Connection","Opening WebChannel transport."),c.open(),l=!0),pa("Connection","WebChannel sending:",e),c.send(e))},Si:()=>c.close()}),d=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return d(c,aa.EventType.OPEN,(()=>{u||pa("Connection","WebChannel transport opened.")})),d(c,aa.EventType.CLOSE,(()=>{u||(u=!0,pa("Connection","WebChannel transport closed"),h.Fi())})),d(c,aa.EventType.ERROR,(e=>{u||(u=!0,ya("Connection","WebChannel transport errored:",e),h.Fi(new Ea(Ta.UNAVAILABLE,"The operation could not be completed")))})),d(c,aa.EventType.MESSAGE,(e=>{var t;if(!u){const n=e.data[0];ba(!!n);const i=n,r=i.error||(null===(t=i[0])||void 0===t?void 0:t.error);if(r){pa("Connection","WebChannel received error:",r);const e=r.status;let t=function(e){const t=bl[e];if(void 0!==t)return function(e){if(void 0===e)return ma("GRPC error has no .code"),Ta.UNKNOWN;switch(e){case bl.OK:return Ta.OK;case bl.CANCELLED:return Ta.CANCELLED;case bl.UNKNOWN:return Ta.UNKNOWN;case bl.DEADLINE_EXCEEDED:return Ta.DEADLINE_EXCEEDED;case bl.RESOURCE_EXHAUSTED:return Ta.RESOURCE_EXHAUSTED;case bl.INTERNAL:return Ta.INTERNAL;case bl.UNAVAILABLE:return Ta.UNAVAILABLE;case bl.UNAUTHENTICATED:return Ta.UNAUTHENTICATED;case bl.INVALID_ARGUMENT:return Ta.INVALID_ARGUMENT;case bl.NOT_FOUND:return Ta.NOT_FOUND;case bl.ALREADY_EXISTS:return Ta.ALREADY_EXISTS;case bl.PERMISSION_DENIED:return Ta.PERMISSION_DENIED;case bl.FAILED_PRECONDITION:return Ta.FAILED_PRECONDITION;case bl.ABORTED:return Ta.ABORTED;case bl.OUT_OF_RANGE:return Ta.OUT_OF_RANGE;case bl.UNIMPLEMENTED:return Ta.UNIMPLEMENTED;case bl.DATA_LOSS:return Ta.DATA_LOSS;default:return wa()}}(t)}(e),n=r.message;void 0===t&&(t=Ta.INTERNAL,n="Unknown error status: "+e+" with message "+r.message),u=!0,h.Fi(new Ea(t,n)),c.close()}else pa("Connection","WebChannel received:",n),h.Oi(n)}})),d(s,ia.STAT_EVENT,(e=>{e.stat===ra?pa("Connection","Detected buffering proxy"):e.stat===sa&&pa("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.$i()}),0),h}}function Du(){return"undefined"!=typeof document?document:null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ou(e){return new xl(e,!0)}class Pu{constructor(e,t,n=1e3,i=1.5,r=6e4){this.Oe=e,this.timerId=t,this.Wi=n,this.Gi=i,this.zi=r,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(e){this.cancel();const t=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),i=Math.max(0,t-n);i>0&&pa("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Hi} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Ji=this.Oe.enqueueAfterDelay(this.timerId,i,(()=>(this.Yi=Date.now(),e()))),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Lu extends class{constructor(e,t,n,i,r,s,o,a){this.Oe=e,this.nr=n,this.sr=i,this.ir=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.rr=0,this.ar=null,this.cr=null,this.stream=null,this.ur=new Pu(e,t)}hr(){return 1===this.state||5===this.state||this.lr()}lr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&null===this.ar&&(this.ar=this.Oe.enqueueAfterDelay(this.nr,6e4,(()=>this.mr())))}gr(e){this.yr(),this.stream.send(e)}async mr(){if(this.lr())return this.close(0)}yr(){this.ar&&(this.ar.cancel(),this.ar=null)}pr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,t){this.yr(),this.pr(),this.ur.cancel(),this.rr++,4!==e?this.ur.reset():t&&t.code===Ta.RESOURCE_EXHAUSTED?(ma(t.toString()),ma("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):t&&t.code===Ta.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Tr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ni(t)}Tr(){}auth(){this.state=1;const e=this.Er(this.rr),t=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.rr===t&&this.Ir(e,n)}),(t=>{e((()=>{const e=new Ea(Ta.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Ar(e)}))}))}Ir(e,t){const n=this.Er(this.rr);this.stream=this.Rr(e,t),this.stream.Di((()=>{n((()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.sr,1e4,(()=>(this.lr()&&(this.state=3),Promise.resolve()))),this.listener.Di())))})),this.stream.Ni((e=>{n((()=>this.Ar(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}dr(){this.state=5,this.ur.Zi((async()=>{this.state=0,this.start()}))}Ar(e){return pa("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Er(e){return t=>{this.Oe.enqueueAndForget((()=>this.rr===e?t():(pa("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}{constructor(e,t,n,i,r,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,s),this.k=r,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(e,t){return this.ir.Qi("Write",e,t)}onMessage(e){if(ba(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Vr){this.ur.reset();const t=function(e,t){return e&&e.length>0?(ba(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Fl(e.updateTime):Fl(t);return n.isEqual($a.min())&&(n=Fl(t)),new rl(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=Fl(e.commitTime);return this.listener.Cr(n,t)}return ba(!e.writeResults||0===e.writeResults.length),this.Vr=!0,this.listener.Nr()}kr(){const e={};e.database=function(e){return new qa(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}(this.k),this.gr(e)}Dr(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>function(e,t){let n;if(t instanceof fl)n={update:ql(e,t.key,t.value)};else if(t instanceof vl)n={delete:jl(e,t.key)};else if(t instanceof pl)n={update:ql(e,t.key,t.data),updateMask:Xl(t.fieldMask)};else{if(!(t instanceof wl))return wa();n={verify:jl(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Xc)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Qc)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Zc)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof tl)return{fieldPath:t.field.canonicalString(),increment:n.N};throw wa()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:$l(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:wa()}(e,t.precondition)),n}(this.k,e)))};this.gr(t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class xu extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.ir=n,this.k=i,this.$r=!1}Fr(){if(this.$r)throw new Ea(Ta.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(e,t,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.ir.Bi(e,t,n,i,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Ta.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Ea(Ta.UNKNOWN,e.toString())}))}ji(e,t,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.ir.ji(e,t,n,i,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Ta.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Ea(Ta.UNKNOWN,e.toString())}))}terminate(){this.$r=!0}}class Mu{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Or=0,this.Mr=null,this.Lr=!0}Br(){0===this.Or&&(this.Ur("Unknown"),this.Mr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Mr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve()))))}Kr(e){"Online"===this.state?this.Ur("Unknown"):(this.Or++,this.Or>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Ur("Offline")))}set(e){this.jr(),this.Or=0,"Online"===e&&(this.Lr=!1),this.Ur(e)}Ur(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}qr(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(ma(t),this.Lr=!1):pa("OnlineStateTracker",t)}jr(){null!==this.Mr&&(this.Mr.cancel(),this.Mr=null)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Uu{constructor(e,t,n,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=r,this.Hr.Ei((e=>{n.enqueueAndForget((async()=>{Vu(this)&&(pa("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Ia(e);t.Gr.add(4),await Fu(t),t.Jr.set("Unknown"),t.Gr.delete(4),await $u(t)}(this))}))})),this.Jr=new Mu(n,i)}}async function $u(e){if(Vu(e))for(const t of e.zr)await t(!0)}async function Fu(e){for(const t of e.zr)await t(!1)}function Vu(e){return 0===Ia(e).Gr.size}async function ju(e,t,n){if(!Yl(t))throw t;e.Gr.add(1),await Fu(e),e.Jr.set("Offline"),n||(n=()=>function(e){const t=Ia(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.He.getLastRemoteSnapshotVersion(e)))}(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{pa("RemoteStore","Retrying IndexedDB access"),await n(),e.Gr.delete(1),await $u(e)}))}function Bu(e,t){return t().catch((n=>ju(e,n,t)))}async function qu(e){const t=Ia(e),n=Yu(t);let i=t.Qr.length>0?t.Qr[t.Qr.length-1].batchId:-1;for(;zu(t);)try{const e=await fu(t.localStore,i);if(null===e){0===t.Qr.length&&n._r();break}i=e.batchId,Hu(t,e)}catch(e){await ju(t,e)}Ku(t)&&Gu(t)}function zu(e){return Vu(e)&&e.Qr.length<10}function Hu(e,t){e.Qr.push(t);const n=Yu(e);n.lr()&&n.Sr&&n.Dr(t.mutations)}function Ku(e){return Vu(e)&&!Yu(e).hr()&&e.Qr.length>0}function Gu(e){Yu(e).start()}async function Wu(e){Yu(e).kr()}async function Ju(e){const t=Yu(e);for(const n of e.Qr)t.Dr(n.mutations)}async function Xu(e,t,n){const i=e.Qr.shift(),r=eu.from(i,t,n);await Bu(e,(()=>e.remoteSyncer.applySuccessfulWrite(r))),await qu(e)}async function Qu(e,t){t&&Yu(e).Sr&&await async function(e,t){if(function(e){switch(e){default:return wa();case Ta.CANCELLED:case Ta.UNKNOWN:case Ta.DEADLINE_EXCEEDED:case Ta.RESOURCE_EXHAUSTED:case Ta.INTERNAL:case Ta.UNAVAILABLE:case Ta.UNAUTHENTICATED:return!1;case Ta.INVALID_ARGUMENT:case Ta.NOT_FOUND:case Ta.ALREADY_EXISTS:case Ta.PERMISSION_DENIED:case Ta.FAILED_PRECONDITION:case Ta.ABORTED:case Ta.OUT_OF_RANGE:case Ta.UNIMPLEMENTED:case Ta.DATA_LOSS:return!0}}(n=t.code)&&n!==Ta.ABORTED){const n=e.Qr.shift();Yu(e).wr(),await Bu(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await qu(e)}var n}(e,t),Ku(e)&&Gu(e)}function Yu(e){return e.Zr||(e.Zr=function(e,t,n){const i=Ia(e);return i.Fr(),new Lu(t,i.ir,i.authCredentials,i.appCheckCredentials,i.k,n)}(e.datastore,e.asyncQueue,{Di:Wu.bind(null,e),Ni:Qu.bind(null,e),Nr:Ju.bind(null,e),Cr:Xu.bind(null,e)}),e.zr.push((async t=>{t?(e.Zr.wr(),await qu(e)):(await e.Zr.stop(),e.Qr.length>0&&(pa("RemoteStore",`Stopping write stream with ${e.Qr.length} pending writes`),e.Qr=[]))}))),e.Zr
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class Zu{constructor(e,t,n,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new _a,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,i,r){const s=Date.now()+n,o=new Zu(e,t,s,i,r);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Ea(Ta.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function eh(e,t){if(ma("AsyncQueue",`${t}: ${e}`),Yl(e))return new Ea(Ta.UNAVAILABLE,`${t}: ${e}`);throw e}class th{constructor(){this.queries=new au((e=>Fc(e)),$c),this.onlineState="Unknown",this.io=new Set}}class nh{constructor(e,t,n,i,r,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.Fo={},this.Oo=new au((e=>Fc(e)),$c),this.Mo=new Map,this.Lo=new Set,this.Bo=new Tl(tc.comparator),this.Uo=new Map,this.qo=new gu,this.Ko={},this.jo=new Map,this.Qo=su.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return!0===this.Wo}}async function ih(e,t,n){const i=function(e){const t=Ia(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=sh.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=oh.bind(null,t),t}(e);try{const e=await function(e,t){const n=Ia(e),i=Ua.now(),r=t.reduce(((e,t)=>e.add(t.key)),Pl());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>n.Wn.vn(e,r).next((r=>{s=r;const o=[];for(const e of t){const t=ul(e,s.get(e.key));null!=t&&o.push(new pl(e.key,t,pc(t.value.mapValue),sl.exists(!0)))}return n.An.addMutationBatch(e,i,o,t)})))).then((e=>(e.applyToLocalDocumentSet(s),{batchId:e.batchId,changes:s})))}(i.localStore,t);i.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let i=e.Ko[e.currentUser.toKey()];i||(i=new Tl(xa)),i=i.insert(t,n),e.Ko[e.currentUser.toKey()]=i}(i,e.batchId,n),await lh(i,e.changes),await qu(i.remoteStore)}catch(e){const t=eh(e,"Failed to persist write");n.reject(t)}}function rh(e,t,n){const i=Ia(e);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const e=[];i.Oo.forEach(((n,i)=>{const r=i.view.ro(t);r.snapshot&&e.push(r.snapshot)})),function(e,t){const n=Ia(e);n.onlineState=t;let i=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.ro(t)&&(i=!0)})),i&&function(e){e.io.forEach((e=>{e.next()}))}(n)}(i.eventManager,t),e.length&&i.Fo.Pr(e),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function sh(e,t){const n=Ia(e),i=t.batch.batchId;try{const e=await function(e,t){const n=Ia(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const i=t.batch.keys(),r=n.Qn.newChangeBuffer({trackRemovals:!0});return function(e,t,n,i){const r=n.batch,s=r.keys();let o=Ql.resolve();return s.forEach((e=>{o=o.next((()=>i.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);ba(null!==s),t.version.compareTo(s)<0&&(r.applyToRemoteDocument(t,n),t.isValidDocument()&&i.addEntry(t,n.commitVersion))}))})),o.next((()=>e.An.removeMutationBatch(t,r)))}(n,e,t,r).next((()=>r.apply(e))).next((()=>n.An.performConsistencyCheck(e))).next((()=>n.Wn.vn(e,i)))}))}(n.localStore,t);ch(n,i,null),ah(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await lh(n,e)}catch(e){await ou(e)}}async function oh(e,t,n){const i=Ia(e);try{const e=await function(e,t){const n=Ia(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let i;return n.An.lookupMutationBatch(e,t).next((t=>(ba(null!==t),i=t.keys(),n.An.removeMutationBatch(e,t)))).next((()=>n.An.performConsistencyCheck(e))).next((()=>n.Wn.vn(e,i)))}))}(i.localStore,t);ch(i,t,n),ah(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await lh(i,e)}catch(n){await ou(n)}}function ah(e,t){(e.jo.get(t)||[]).forEach((e=>{e.resolve()})),e.jo.delete(t)}function ch(e,t,n){const i=Ia(e);let r=i.Ko[i.currentUser.toKey()];if(r){const e=r.get(t);e&&(n?e.reject(n):e.resolve(),r=r.remove(t)),i.Ko[i.currentUser.toKey()]=r}}async function lh(e,t,n){const i=Ia(e),r=[],s=[],o=[];i.Oo.isEmpty()||(i.Oo.forEach(((e,a)=>{o.push(i.Go(a,t,n).then((e=>{if(e){i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),r.push(e);const t=lu.$n(a.targetId,e);s.push(t)}})))})),await Promise.all(o),i.Fo.Pr(r),await async function(e,t){const n=Ia(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Ql.forEach(t,(t=>Ql.forEach(t.kn,(i=>n.persistence.referenceDelegate.addReference(e,t.targetId,i))).next((()=>Ql.forEach(t.xn,(i=>n.persistence.referenceDelegate.removeReference(e,t.targetId,i)))))))))}catch(e){if(!Yl(e))throw e;pa("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.qn.get(t),i=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(i);n.qn=n.qn.insert(t,r)}}}(i.localStore,s))}async function uh(e,t){const n=Ia(e);if(!n.currentUser.isEqual(t)){pa("SyncEngine","User change. New user:",t.toKey());const e=await du(n.localStore,t);n.currentUser=t,function(e,t){e.jo.forEach((e=>{e.forEach((e=>{e.reject(new Ea(Ta.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),e.jo.clear()}(n),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await lh(n,e.Gn)}}class hh{constructor(){this.synchronizeTabs=!1}async initialize(e){this.k=Ou(e.databaseInfo.databaseId),this.sharedClientState=this.Jo(e),this.persistence=this.Yo(e),await this.persistence.start(),this.gcScheduler=this.Xo(e),this.localStore=this.Zo(e)}Xo(e){return null}Zo(e){return function(e,t,n,i){return new hu(e,t,n,i)}(this.persistence,new uu,e.initialUser,this.k)}Yo(e){return new Iu(Eu.ks,this.k)}Jo(e){return new ku}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class dh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>rh(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=uh.bind(null,this.syncEngine),await async function(e,t){const n=Ia(e);t?(n.Gr.delete(2),await $u(n)):t||(n.Gr.add(2),await Fu(n),n.Jr.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new th}createDatastore(e){const t=Ou(e.databaseInfo.databaseId),n=(i=e.databaseInfo,new Ru(i));var i;return function(e,t,n,i){return new xu(e,t,n,i)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,i=e.asyncQueue,r=e=>rh(this.syncEngine,e,0),s=Su.bt()?new Su:new Au,new Uu(t,n,i,r,s);var t,n,i,r,s}createSyncEngine(e,t){return function(e,t,n,i,r,s,o){const a=new nh(e,t,n,i,r,s);return o&&(a.Wo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Ia(e);pa("RemoteStore","RemoteStore shutting down."),t.Gr.add(5),await Fu(t),t.Hr.shutdown(),t.Jr.set("Unknown")}(this.remoteStore)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class fh{constructor(e,t,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=ua.UNAUTHENTICATED,this.clientId=La.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{pa("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(()=>Promise.resolve()))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ea(Ta.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _a;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=eh(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function ph(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){return e.offlineComponents||(pa("FirestoreClient","Using default OfflineComponentProvider"),await async function(e,t){e.asyncQueue.verifyOperationInProgress(),pa("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener((async e=>{i.isEqual(e)||(await du(t.localStore,e),i=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}(e,new hh)),e.offlineComponents}(e);pa("FirestoreClient","Initializing OnlineComponentProvider");const i=await e.getConfiguration();await t.initialize(n,i),e.setCredentialChangeListener((e=>async function(e,t){const n=Ia(e);n.asyncQueue.verifyOperationInProgress(),pa("RemoteStore","RemoteStore received new credentials");const i=Vu(n);n.Gr.add(3),await Fu(n),i&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Gr.delete(3),await $u(n)}(t.remoteStore,e))),e.onlineComponents=t}function gh(e){return async function(e){return e.onlineComponents||(pa("FirestoreClient","Using default OnlineComponentProvider"),await ph(e,new dh)),e.onlineComponents}(e).then((e=>e.syncEngine))}class mh{constructor(e,t,n,i,r,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class yh{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof yh&&e.projectId===this.projectId&&e.database===this.database}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const vh=new Map;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function wh(e,t,n){if(!n)throw new Ea(Ta.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function bh(e){if(!tc.isDocumentKey(e))throw new Ea(Ta.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ih(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":wa()}function Th(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Ea(Ta.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ih(e);throw new Ea(Ta.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Eh{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new Ea(Ta.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Ea(Ta.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,i){if(!0===t&&!0===i)throw new Ea(Ta.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class _h{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Eh({}),this._settingsFrozen=!1,e instanceof yh?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Ea(Ta.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yh(e.options.projectId)}(e))}get app(){if(!this._app)throw new Ea(Ta.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Ea(Ta.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Eh(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Aa;switch(e.type){case"gapi":const t=e.client;return ba(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new Na(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new Ea(Ta.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=vh.get(e);t&&(pa("ComponentProvider","Removing Datastore"),vh.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class kh{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Sh(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new kh(this.firestore,e,this._key)}}class Ah{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Ah(this.firestore,e,this._query)}}class Sh extends Ah{constructor(e,t,n){super(e,t,function(e){return new xc(e)}(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new kh(this.firestore,null,new tc(e))}withConverter(e){return new Sh(this.firestore,e,this._path)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Ch{constructor(){this.ma=Promise.resolve(),this.ga=[],this.ya=!1,this.pa=[],this.Ta=null,this.Ea=!1,this.Ia=!1,this.Aa=[],this.ur=new Pu(this,"async_queue_retry"),this.Ra=()=>{const e=Du();e&&pa("AsyncQueue","Visibility state changed to "+e.visibilityState),this.ur.er()};const e=Du();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Ra)}get isShuttingDown(){return this.ya}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pa(),this.ba(e)}enterRestrictedMode(e){if(!this.ya){this.ya=!0,this.Ia=e||!1;const t=Du();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Ra)}}enqueue(e){if(this.Pa(),this.ya)return new Promise((()=>{}));const t=new _a;return this.ba((()=>this.ya&&this.Ia?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.ga.push(e),this.va())))}async va(){if(0!==this.ga.length){try{await this.ga[0](),this.ga.shift(),this.ur.reset()}catch(e){if(!Yl(e))throw e;pa("AsyncQueue","Operation failed with retryable error: "+e)}this.ga.length>0&&this.ur.Zi((()=>this.va()))}}ba(e){const t=this.ma.then((()=>(this.Ea=!0,e().catch((e=>{this.Ta=e,this.Ea=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e);throw ma("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Ea=!1,e))))));return this.ma=t,t}enqueueAfterDelay(e,t,n){this.Pa(),this.Aa.indexOf(e)>-1&&(t=0);const i=Zu.createAndSchedule(this,e,t,n,(e=>this.Va(e)));return this.pa.push(i),i}Pa(){this.Ta&&wa()}verifyOperationInProgress(){}async Sa(){let e;do{e=this.ma,await e}while(e!==this.ma)}Da(e){for(const t of this.pa)if(t.timerId===e)return!0;return!1}Ca(e){return this.Sa().then((()=>{this.pa.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.pa)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Sa()}))}Na(e){this.Aa.push(e)}Va(e){const t=this.pa.indexOf(e);this.pa.splice(t,1)}}class Nh extends _h{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new Ch,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Rh(this),this._firestoreClient.terminate()}}function Rh(e){var t;const n=e._freezeSettings(),i=function(e,t,n,i){return new mh(e,t,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new fh(e._authCredentials,e._appCheckCredentials,e._queue,i)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
     */class Dh{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Ea(Ta.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ha(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Oh{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Oh(Ga.fromBase64String(e))}catch(e){throw new Ea(Ta.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Oh(Ga.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ph{constructor(e){this._methodName=e}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Lh{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Ea(Ta.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Ea(Ta.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return xa(this._lat,e._lat)||xa(this._long,e._long)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const xh=/^__.*__$/;class Mh{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new pl(e,this.data,this.fieldMask,t,this.fieldTransforms):new fl(e,this.data,t,this.fieldTransforms)}}function Uh(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw wa()}}class $h{constructor(e,t,n,i,r,s){this.settings=e,this.databaseId=t,this.k=n,this.ignoreUndefinedProperties=i,void 0===r&&this.ka(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get xa(){return this.settings.xa}$a(e){return new $h(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Fa(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.$a({path:n,Oa:!1});return i.Ma(e),i}La(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.$a({path:n,Oa:!1});return i.ka(),i}Ba(e){return this.$a({path:void 0,Oa:!0})}Ua(e){return Wh(e,this.settings.methodName,this.settings.qa||!1,this.path,this.settings.Ka)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}ka(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ma(this.path.get(e))}Ma(e){if(0===e.length)throw this.Ua("Document fields must not be empty");if(Uh(this.xa)&&xh.test(e))throw this.Ua('Document fields cannot begin and end with "__"')}}class Fh{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.k=n||Ou(e)}ja(e,t,n,i=!1){return new $h({xa:e,methodName:t,Ka:n,path:Ha.emptyPath(),Oa:!1,qa:i},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function Vh(e){const t=e._freezeSettings(),n=Ou(e._databaseId);return new Fh(e._databaseId,!!t.ignoreUndefinedProperties,n)}function jh(e,t,n,i,r,s={}){const o=e.ja(s.merge||s.mergeFields?2:0,t,n,r);Hh("Data must be an object, but it was:",o,i);const a=qh(i,o);let c,l;if(s.merge)c=new Ka(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const i of s.mergeFields){const r=Kh(t,i,n);if(!o.contains(r))throw new Ea(Ta.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);Jh(e,r)||e.push(r)}c=new Ka(e),l=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,l=o.fieldTransforms;return new Mh(new fc(a),c,l)}function Bh(e,t){if(zh(e=at(e)))return Hh("Unsupported field value:",t,e),qh(e,t);if(e instanceof Ph)return function(e,t){if(!Uh(t.xa))throw t.Ua(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Ua(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Oa&&4!==t.xa)throw t.Ua("Nested arrays are not supported");return function(e,t){const n=[];let i=0;for(const r of e){let e=Bh(r,t.Ba(i));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),i++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=at(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Hc(t.k,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Ua.fromDate(e);return{timestampValue:Ml(t.k,n)}}if(e instanceof Ua){const n=new Ua(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Ml(t.k,n)}}if(e instanceof Lh)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Oh)return{bytesValue:Ul(t.k,e._byteString)};if(e instanceof kh){const n=t.databaseId,i=e.firestore._databaseId;if(!i.isEqual(n))throw t.Ua(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Vl(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Ua(`Unsupported field value: ${Ih(e)}`)}(e,t)}function qh(e,t){const n={};return ja(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Va(e,((e,i)=>{const r=Bh(i,t.Fa(e));null!=r&&(n[e]=r)})),{mapValue:{fields:n}}}function zh(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Ua||e instanceof Lh||e instanceof Oh||e instanceof kh||e instanceof Ph)}function Hh(e,t,n){if(!zh(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const i=Ih(n);throw"an object"===i?t.Ua(e+" a custom object"):t.Ua(e+" "+i)}}function Kh(e,t,n){if((t=at(t))instanceof Dh)return t._internalPath;if("string"==typeof t)return function(e,t,n){if(t.search(Gh)>=0)throw Wh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Dh(...t.split("."))._internalPath}catch(i){throw Wh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}(e,t);throw Wh("Field path arguments must be of type string or FieldPath.",e,!1,void 0,n)}const Gh=new RegExp("[~\\*/\\[\\]]");function Wh(e,t,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new Ea(Ta.INVALID_ARGUMENT,a+e+c)}function Jh(e,t){return e.some((e=>e.isEqual(t)))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Xh(e,t,n){e=Th(e,kh);const i=Th(e.firestore,Nh),r=function(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}(e.converter,t,n);return function(e,t){return function(e,t){const n=new _a;return e.asyncQueue.enqueueAndForget((async()=>ih(await gh(e),t,n))),n.promise}(function(e){return e._firestoreClient||Rh(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}(e),t)}(i,[jh(Vh(i),"setDoc",e._key,r,null!==e.converter,n).toMutation(e._key,sl.none())])}
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
function Qh(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}function Yh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}!function(e,t=!0){ha="9.6.1",St(new ct("firestore",((e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=new Nh(i,new Sa(e.getProvider("auth-internal")),new Da(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),r._setSettings(n),r}),"PUBLIC")),Pt(la,"3.4.1",e),Pt(la,"3.4.1","esm2017")}();const Zh=Yh,ed=new Qe("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),td=new yt("@firebase/auth");function nd(e,...t){td.logLevel<=dt.ERROR&&td.error(`Auth (9.6.1): ${e}`,...t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function id(e,...t){throw sd(e,...t)}function rd(e,...t){return sd(e,...t)}function sd(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return ed.create(e,...t)}function od(e,t,...n){if(!e)throw sd(t,...n)}function ad(e){const t="INTERNAL ASSERTION FAILED: "+e;throw nd(t),new Error(t)}function cd(e,t){e||ad(t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ld=new Map;function ud(e){cd(e instanceof Function,"Expected a class definition");let t=ld.get(e);return t?(cd(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ld.set(e,t),t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
function hd(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function dd(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function fd(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==dd()&&"https:"!==dd()&&!Ge()&&!("connection"in navigator)||navigator.onLine}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class pd{constructor(e,t){this.shortDelay=e,this.longDelay=t,cd(t>e,"Short delay should be less than long delay!"),this.isMobile=Ke()||We()}get(){return fd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function gd(e,t){cd(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class md{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void ad("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void ad("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void ad("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const yd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},vd=new pd(3e4,6e4);
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function wd(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function bd(e,t,n,i,r={}){return Id(e,r,(async()=>{let r={},s={};i&&("GET"===t?s=i:r={body:JSON.stringify(i)});const o=tt(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),md.fetch()(Ed(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))}))}async function Id(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},yd),t);try{const t=new _d(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw kd(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw kd(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw kd(e,"email-already-in-use",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw function(e,t,n){const i=Object.assign(Object.assign({},Zh()),{[t]:n});return new Qe("auth","Firebase",i).create(t,{appName:e.name})}(e,a,o);id(e,a)}}catch(t){if(t instanceof Xe)throw t;id(e,"network-request-failed")}}async function Td(e,t,n,i,r={}){const s=await bd(e,t,n,i,r);return"mfaPendingCredential"in s&&id(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Ed(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?gd(e.config,r):`${e.config.apiScheme}://${r}`}class _d{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(rd(this.auth,"timeout"))),vd.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function kd(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=rd(e,t,i);return r.customData._tokenResponse=n,r}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
function Ad(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}function Sd(e){return 1e3*Number(e)}function Cd(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return nd("JWT malformed, contained fewer than 3 sections"),null;try{const e=function(e){try{return qe.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null}(n);return e?JSON.parse(e):(nd("Failed to decode base64 JWT payload"),null)}catch(e){return nd("Caught error parsing JWT payload as JSON",e),null}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function Nd(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Xe&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Rd{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Dd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ad(this.lastLoginAt),this.creationTime=Ad(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function Od(e){var t;const n=e.auth,i=await e.getIdToken(),r=await Nd(e,async function(e,t){return bd(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));od(null==r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=Qh(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const u=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Dd(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Pd{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){od(e.idToken,"internal-error"),od(void 0!==e.idToken,"internal-error"),od(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Cd(e);return od(t,"internal-error"),od(void 0!==t.exp,"internal-error"),od(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return od(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function(e,t){const n=await Id(e,{},(async()=>{const n=tt({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,s=Ed(e,i,"/v1/token",`key=${r}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",md.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new Pd;return n&&(od("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(od("string"==typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(od("number"==typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pd,this.toJSON())}_performRefresh(){return ad("not implemented")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ld(e,t){od("string"==typeof e||void 0===e,"internal-error",{appName:t})}class xd{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=Qh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Rd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.metadata=new Dd(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Nd(this,this.stsTokenManager.getToken(this.auth,e));return od(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=at(e),i=await n.getIdToken(t),r=Cd(i);od(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s="object"==typeof r.firebase?r.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Ad(Sd(r.auth_time)),issuedAtTime:Ad(Sd(r.iat)),expirationTime:Ad(Sd(r.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=at(e);await Od(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(od(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new xd(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){od(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Od(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Nd(this,async function(e,t){return bd(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:I,stsTokenManager:T}=t;od(v&&T,e,"internal-error");const E=Pd.fromJSON(this.name,T);od("string"==typeof v,e,"internal-error"),Ld(u,e.name),Ld(h,e.name),od("boolean"==typeof w,e,"internal-error"),od("boolean"==typeof b,e,"internal-error"),Ld(d,e.name),Ld(f,e.name),Ld(p,e.name),Ld(g,e.name),Ld(m,e.name),Ld(y,e.name);const _=new xd({uid:v,auth:e,email:h,emailVerified:w,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:m,lastLoginAt:y});return I&&Array.isArray(I)&&(_.providerData=I.map((e=>Object.assign({},e)))),g&&(_._redirectEventId=g),_}static async _fromIdTokenResponse(e,t,n=!1){const i=new Pd;i.updateFromServerResponse(t);const r=new xd({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Od(r),r}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Md{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Md.type="NONE";const Ud=Md;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function $d(e,t,n){return`firebase:${e}:${t}:${n}`}class Fd{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=$d(this.userKey,i.apiKey,r),this.fullPersistenceKey=$d("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xd._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Fd(ud(Ud),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||ud(Ud);const s=$d(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const i=xd._fromJSON(e,t);n!==r&&(o=i),r=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new Fd(r,e,n)):new Fd(r,e,n)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Vd(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(zd(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(jd(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Kd(t))return"Blackberry";if(Gd(t))return"Webos";if(Bd(t))return"Safari";if((t.includes("chrome/")||qd(t))&&!t.includes("edge/"))return"Chrome";if(Hd(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function jd(e=He()){return/firefox\//i.test(e)}function Bd(e=He()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function qd(e=He()){return/crios\//i.test(e)}function zd(e=He()){return/iemobile/i.test(e)}function Hd(e=He()){return/android/i.test(e)}function Kd(e=He()){return/blackberry/i.test(e)}function Gd(e=He()){return/webos/i.test(e)}function Wd(e=He()){return/iphone|ipad|ipod/i.test(e)}function Jd(e=He()){return Wd(e)||Hd(e)||Gd(e)||Kd(e)||/windows phone/i.test(e)||zd(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Xd(e,t=[]){let n;switch(e){case"Browser":n=Vd(He());break;case"Worker":n=`${Vd(He())}-${e}`;break;default:n=e}return`${n}/JsCore/9.6.1/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Qd{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zd(this),this.idTokenSubscription=new Zd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ed,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ud(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Fd.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);i&&i!==r||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(od(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Od(e)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?at(e):null;return t&&od(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&od(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(ud(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qe("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ud(e)||this._popupRedirectResolver;od(t,this,"argument-error"),this.redirectPersistenceManager=await Fd.create(this,[ud(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return od(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return od(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function Yd(e){return at(e)}class Zd{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new rt(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return od(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ef{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ad("not implemented")}_getIdTokenResponse(e){return ad("not implemented")}_linkToIdToken(e,t){return ad("not implemented")}_getReauthenticationResolver(e){return ad("not implemented")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class tf extends ef{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new tf(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new tf(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
return async function(e,t){return Td(e,"POST","/v1/accounts:signInWithPassword",wd(e,t))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Td(e,"POST","/v1/accounts:signInWithEmailLink",wd(e,t))}(e,{email:this._email,oobCode:this._password});default:id(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return async function(e,t){return bd(e,"POST","/v1/accounts:update",t)}(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Td(e,"POST","/v1/accounts:signInWithEmailLink",wd(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:id(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function nf(e,t){return Td(e,"POST","/v1/accounts:signInWithIdp",wd(e,t))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class rf extends ef{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new rf(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):id("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=Qh(t,["providerId","signInMethod"]);if(!n||!i)return null;const s=new rf(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){return nf(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,nf(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,nf(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=tt(t)}return e}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class sf{constructor(e){var t,n,i,r,s,o;const a=nt(it(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);od(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=nt(it(e)).link,n=t?nt(it(t)).deep_link_id:null,i=nt(it(e)).deep_link_id;return(i?nt(it(i)).link:null)||i||n||t||e}(e);try{return new sf(t)}catch(e){return null}}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class of{constructor(){this.providerId=of.PROVIDER_ID}static credential(e,t){return tf._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=sf.parseLink(t);return od(n,"argument-error"),tf._fromEmailAndCode(e,n.code,n.tenantId)}}of.PROVIDER_ID="password",of.EMAIL_PASSWORD_SIGN_IN_METHOD="password",of.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class af{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class cf extends af{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class lf extends cf{constructor(){super("facebook.com")}static credential(e){return rf._fromParams({providerId:lf.PROVIDER_ID,signInMethod:lf.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lf.credentialFromTaggedObject(e)}static credentialFromError(e){return lf.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return lf.credential(e.oauthAccessToken)}catch(e){return null}}}lf.FACEBOOK_SIGN_IN_METHOD="facebook.com",lf.PROVIDER_ID="facebook.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class uf extends cf{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return rf._fromParams({providerId:uf.PROVIDER_ID,signInMethod:uf.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return uf.credentialFromTaggedObject(e)}static credentialFromError(e){return uf.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return uf.credential(t,n)}catch(e){return null}}}uf.GOOGLE_SIGN_IN_METHOD="google.com",uf.PROVIDER_ID="google.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class hf extends cf{constructor(){super("github.com")}static credential(e){return rf._fromParams({providerId:hf.PROVIDER_ID,signInMethod:hf.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hf.credentialFromTaggedObject(e)}static credentialFromError(e){return hf.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return hf.credential(e.oauthAccessToken)}catch(e){return null}}}hf.GITHUB_SIGN_IN_METHOD="github.com",hf.PROVIDER_ID="github.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class df extends cf{constructor(){super("twitter.com")}static credential(e,t){return rf._fromParams({providerId:df.PROVIDER_ID,signInMethod:df.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return df.credentialFromTaggedObject(e)}static credentialFromError(e){return df.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return df.credential(t,n)}catch(e){return null}}}df.TWITTER_SIGN_IN_METHOD="twitter.com",df.PROVIDER_ID="twitter.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class ff{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const r=await xd._fromIdTokenResponse(e,n,i),s=pf(n);return new ff({user:r,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=pf(n);return new ff({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function pf(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class gf extends Xe{constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,gf.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new gf(e,t,n,i)}}function mf(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw gf._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function yf(e,t,n=!1){const i="signIn",r=await mf(e,i,t),s=await ff._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function vf(e,t,n){const i=Yd(e),r=await
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function(e,t){return Td(e,"POST","/v1/accounts:signUp",wd(e,t))}(i,{returnSecureToken:!0,email:t,password:n}),s=await ff._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}function wf(e,t,n){return async function(e,t){return yf(Yd(e),t)}(at(e),of.credential(t,n))}const bf="__sak";
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class If{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(bf,"1"),this.storage.removeItem(bf),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Tf extends If{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=He();return Bd(e)||Wd(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Jd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);Je()&&10===document.documentMode&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Tf.type="LOCAL";const Ef=Tf;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class _f extends If{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}_f.type="SESSION";const kf=_f;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
class Af{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Af(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async e=>e(t.origin,r))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Sf(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */Af.receivers=[];class Cf{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const c=Sf("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(l),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Nf(){return window}
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
function Rf(){return void 0!==Nf().WorkerGlobalScope&&"function"==typeof Nf().importScripts}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Df="firebaseLocalStorageDb",Of="firebaseLocalStorage",Pf="fbase_key";class Lf{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function xf(e,t){return e.transaction([Of],t?"readwrite":"readonly").objectStore(Of)}function Mf(){const e=indexedDB.open(Df,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Of,{keyPath:Pf})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Of)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Df);return new Lf(e).toPromise()}(),t(await Mf()))}))}))}async function Uf(e,t,n){const i=xf(e,!0).put({[Pf]:t,value:n});return new Lf(i).toPromise()}function $f(e,t){const n=xf(e,!0).delete(t);return new Lf(n).toPromise()}class Ff{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Mf()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Rf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Af._getInstance(Rf()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Cf(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&function(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mf();return await Uf(e,bf,"1"),await $f(e,bf),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Uf(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=xf(e,!1).get(t),i=await new Lf(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>$f(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=xf(e,!1).getAll();return new Lf(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Ff.type="LOCAL";const Vf=Ff;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function jf(e){return new Promise(((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=rd("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",function(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}().appendChild(i)}))}new pd(3e4,6e4);
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Bf extends ef{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return nf(e,this._buildIdpRequest())}_linkToIdToken(e,t){return nf(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return nf(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function qf(e){return yf(e.auth,new Bf(e),e.bypassAuthState)}function zf(e){const{auth:t,user:n}=e;return od(n,t,"internal-error"),
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const s=await Nd(e,mf(i,r,t,e),n);od(s.idToken,i,"internal-error");const o=Cd(s.idToken);od(o,i,"internal-error");const{sub:a}=o;return od(e.uid===a,i,"user-mismatch"),ff._forOperation(e,r,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&id(i,"user-mismatch"),e}}(n,new Bf(e),e.bypassAuthState)}async function Hf(e){const{auth:t,user:n}=e;return od(n,t,"internal-error"),async function(e,t,n=!1){const i=await Nd(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return ff._forOperation(e,"link",i)}(n,new Bf(e),e.bypassAuthState)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Kf{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qf;case"linkViaPopup":case"linkViaRedirect":return Hf;case"reauthViaPopup":case"reauthViaRedirect":return zf;default:id(this.auth,"internal-error")}}resolve(e){cd(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cd(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Gf=new pd(2e3,1e4);class Wf extends Kf{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,Wf.currentPopupAction&&Wf.currentPopupAction.cancel(),Wf.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return od(e,this.auth,"internal-error"),e}async onExecution(){cd(1===this.filter.length,"Popup operations only handle one event");const e=Sf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(rd(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(rd(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wf.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(rd(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Gf.get())};e()}}Wf.currentPopupAction=null;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Jf="pendingRedirect",Xf=new Map;class Qf extends Kf{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Xf.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return $d(Jf,e.config.apiKey,e.name)}(t),i=function(e){return ud(e._redirectPersistence)}(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Xf.set(this.auth._key(),e)}return this.bypassAuthState||Xf.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Yf(e,t,n=!1){const i=Yd(e),r=
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
function(e,t){return t?ud(t):(od(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(i,t),s=new Qf(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Zf{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tp(e);default:return!1}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!tp(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(rd(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ep(e))}saveEventToCache(e){this.cachedEventUids.add(ep(e)),this.lastProcessedEventTime=Date.now()}}function ep(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function tp({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const np=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ip=/^https?/;async function rp(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return bd(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(sp(e))return}catch(e){}id(e,"unauthorized-domain")}function sp(e){const t=hd(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!ip.test(n))return!1;if(np.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
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
     */const op=new pd(3e4,6e4);function ap(){const e=Nf().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function cp(e){return new Promise(((t,n)=>{var i,r,s;function o(){ap(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ap(),n(rd(e,"network-request-failed"))},timeout:op.get()})}if(null===(r=null===(i=Nf().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Nf().gapi)||void 0===s?void 0:s.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Nf()[t]=()=>{gapi.load?o():n(rd(e,"network-request-failed"))},jf(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw lp=null,e}))}let lp=null;
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
const up=new pd(5e3,15e3),hp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fp(e){const t=e.config;od(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?gd(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:Dt},r=dp.get(e.config.apiHost);r&&(i.eid=r);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${tt(i).slice(1)}`}async function pp(e){const t=await function(e){return lp=lp||cp(e),lp}(e),n=Nf().gapi;return od(n,e,"internal-error"),t.open({where:document.body,url:fp(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hp,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=rd(e,"network-request-failed"),s=Nf().setTimeout((()=>{i(r)}),up.get());function o(){Nf().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{i(r)}))}))))}
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
     */const gp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class mp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function yp(e,t,n,i=500,r=600){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},gp),{width:i.toString(),height:r.toString(),top:s,left:o}),l=He().toLowerCase();n&&(a=qd(l)?"_blank":n),jd(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=He()){var t;return Wd(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
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
     */(t||"",a),new mp(null);const h=window.open(t||"",a,u);od(h,e,"popup-blocked");try{h.focus()}catch(e){}return new mp(h)}const vp="__/auth/handler",wp="emulator/auth/handler";function bp(e,t,n,i,r,s){od(e.config.authDomain,e,"auth-domain-config-required"),od(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:Dt,eventId:r};if(t instanceof af){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof cf){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${vp}`;return gd(e,wp)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)}?${tt(a).slice(1)}`}const Ip="webStorageSupport";const Tp=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kf,this._completeRedirectFn=Yf}async _openPopup(e,t,n,i){var r;cd(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return yp(e,bp(e,t,n,hd(),i),Sf())}async _openRedirect(e,t,n,i){var r;return await this._originValidation(e),r=bp(e,t,n,hd(),i),Nf().location.href=r,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(cd(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await pp(e),n=new Zf(e);return t.register("authEvent",(t=>{od(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ip,{type:Ip},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&t(!!r),id(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=rp(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Jd()||Bd()||Wd()}};var Ep,_p="@firebase/auth",kp="0.19.4";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Ap{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){od(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
function Sp(e=Ot()){const t=Ct(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=Ct(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(Ze(n.getOptions(),null!=t?t:{}))return e;id(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Tp,persistence:[Vf,Ef,kf]})}function Cp(e){e?setTimeout((()=>{window.location.href="/"}),e):window.location.href="/"}Ep="Browser",St(new ct("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:r}=n.options;return(e=>{od(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),od(!(null==r?void 0:r.includes(":")),"argument-error",{appName:e.name});const n={apiKey:i,authDomain:r,clientPlatform:Ep,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xd(Ep)},s=new Qd(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(ud);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),St(new ct("auth-internal",(e=>(e=>new Ap(e))(Yd(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),Pt(_p,kp,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Ep)),Pt(_p,kp,"esm2017");const Np={email:"",numGames:0,avgWPM:0,matchHistory:[],matchHistoryTime:[],uid:""};let Rp,Dp,Op;const Pp=window.sessionStorage,Lp="user";function xp(){Rp=function(e,t={}){"object"!=typeof t&&(t={name:t});const n=Object.assign({name:Tt,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw Nt.create("bad-app-name",{appName:String(i)});const r=_t.get(i);if(r){if(Ze(e,r.options)&&Ze(n,r.config))return r;throw Nt.create("duplicate-app",{appName:i})}const s=new ht(i);for(const e of kt.values())s.addComponent(e);const o=new Rt(e,n,s);return _t.set(i,o),o}({apiKey:"AIzaSyAcfFLGAnLbwIUCfyCYgayBl2oPvbu5RFQ",authDomain:"perfect-type.firebaseapp.com",projectId:"perfect-type",storageBucket:"perfect-type.appspot.com",messagingSenderId:"358376646912",appId:"1:358376646912:web:d750e4f6970556a8072be5",measurementId:"G-MDGFNKMNEC"}),Jn(Rp),Dp=Sp(),Op=function(e=Ot()){return Ct(e,"firestore").getImmediate()}()}function Mp(){return null!=function(){const e=Pp.getItem(Lp);return null==e?null:e.length>0?JSON.parse(e):null}()}async function Up(e,t){try{const n=await vf(Dp,e,t);Pp.setItem(Lp,JSON.stringify(n.user));let i=Object.assign({},Np);return i.uid=n.user.uid,i.email=n.user.email,await async function(e,t,n){const i=function(e,t,...n){if(e=at(e),1===arguments.length&&(t=La.A()),wh("doc","path",t),e instanceof _h){const i=qa.fromString(t,...n);return bh(i),new kh(e,null,new tc(i))}{if(!(e instanceof kh||e instanceof Sh))throw new Ea(Ta.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(qa.fromString(t,...n));return bh(i),new kh(e.firestore,e instanceof Sh?e.converter:null,new tc(i))}}(Op,e,t);return await Xh(i,n),n}("users",i.uid,i),n.user}catch(e){return console.log(e),null}}function $p(t){let n,i,r,s,o,u,p;return{c(){n=h("div"),i=h("label"),r=d(t[1]),s=f(),o=h("input"),m(i,"for",t[2]),m(o,"id",t[2]),m(o,"type",t[4]),m(o,"name",t[2]),m(o,"autocomplete",t[3]),o.value=t[0],m(n,"class","input-container")},m(e,l){c(e,n,l),a(n,i),a(i,r),a(n,s),a(n,o),u||(p=g(o,"input",t[5]),u=!0)},p(e,[t]){2&t&&y(r,e[1]),4&t&&m(i,"for",e[2]),4&t&&m(o,"id",e[2]),16&t&&m(o,"type",e[4]),4&t&&m(o,"name",e[2]),8&t&&m(o,"autocomplete",e[3]),1&t&&o.value!==e[0]&&(o.value=e[0])},i:e,o:e,d(e){e&&l(n),u=!1,p()}}}function Fp(e,t,n){let{value:i=""}=t,{text:r}=t,{id:s}=t,{autocomplete:o}=t,{type:a="text"}=t;return e.$$set=e=>{"value"in e&&n(0,i=e.value),"text"in e&&n(1,r=e.text),"id"in e&&n(2,s=e.id),"autocomplete"in e&&n(3,o=e.autocomplete),"type"in e&&n(4,a=e.type)},[i,r,s,o,a,e=>{n(0,i=e.target.value),function(e,t){let n=e.target.parentNode.querySelector("label");e.target.value.length>0?(n.style.top="-10px",n.style.fontSize="1em"):(n.style.top="10px",n.style.fontSize="1.5em")}(e)}]}class Vp extends H{constructor(e){super(),z(this,e,Fp,$p,s,{value:0,text:1,id:2,autocomplete:3,type:4})}}function jp(e){let t,n,i,r,s,o,u,d,p,y,v,w,b,I,E,_,k,A,S,N;function R(t){e[6](t)}let D={text:"email",id:"email",type:"email",autocomplete:"email"};function O(t){e[7](t)}void 0!==e[1]&&(D.value=e[1]),u=new Vp({props:D}),T.push((()=>F(u,"value",R)));let P={text:"password",id:"password",type:"password",autocomplete:"current-password"};return void 0!==e[2]&&(P.value=e[2]),y=new Vp({props:P}),T.push((()=>F(y,"value",O))),k=new Ce({props:{text:"login"}}),{c(){t=h("form"),n=h("br"),i=f(),r=h("br"),s=f(),o=h("div"),V(u.$$.fragment),p=f(),V(y.$$.fragment),w=f(),b=h("br"),I=f(),E=h("br"),_=f(),V(k.$$.fragment),m(o,"id","form-container")},m(l,h){c(l,t,h),a(t,n),a(t,i),a(t,r),a(t,s),a(t,o),j(u,o,null),a(o,p),j(y,o,null),a(t,w),a(t,b),a(t,I),a(t,E),a(t,_),j(k,t,null),A=!0,S||(N=g(t,"submit",e[3]),S=!0)},p(e,t){const n={};!d&&2&t&&(d=!0,n.value=e[1],C((()=>d=!1))),u.$set(n);const i={};!v&&4&t&&(v=!0,i.value=e[2],C((()=>v=!1))),y.$set(i)},i(e){A||(U(u.$$.fragment,e),U(y.$$.fragment,e),U(k.$$.fragment,e),A=!0)},o(e){$(u.$$.fragment,e),$(y.$$.fragment,e),$(k.$$.fragment,e),A=!1},d(e){e&&l(t),B(u),B(y),B(k),S=!1,N()}}}function Bp(t){let n;return{c(){n=h("p"),n.textContent="logged in! redirecting to main..."},m(e,t){c(e,n,t)},p:e,i:e,o:e,d(e){e&&l(n)}}}function qp(e){let t,n,i,r,s,o;const u=[Bp,jp],d=[];function p(e,t){return e[0]?0:1}return r=p(e),s=d[r]=u[r](e),{c(){t=h("main"),n=h("h1"),n.textContent="login",i=f(),s.c()},m(e,s){c(e,t,s),a(t,n),a(t,i),d[r].m(t,null),o=!0},p(e,[n]){let i=r;r=p(e),r===i?d[r].p(e,n):(x(),$(d[i],1,1,(()=>{d[i]=null})),M(),s=d[r],s?s.p(e,n):(s=d[r]=u[r](e),s.c()),U(s,1),s.m(t,null))},i(e){o||(U(s),o=!0)},o(e){$(s),o=!1},d(e){e&&l(t),d[r].d()}}}function zp(e,t,n){let i,r,{currentRoute:s}=t,{params:o}=t,a=!1;return e.$$set=e=>{"currentRoute"in e&&n(4,s=e.currentRoute),"params"in e&&n(5,o=e.params)},[a,i,r,function(e){e&&e.preventDefault(),async function(e,t){try{const n=await wf(Dp,e,t);return Pp.setItem(Lp,JSON.stringify(n.user)),n.user}catch(e){return null}}(i,r).then((e=>{null!=e&&(n(0,a=!0),Cp(1e3))}))},s,o,function(e){i=e,n(1,i)},function(e){r=e,n(2,r)}]}function Hp(e){let t,n,i,r,s,o,u,d,p,y,v,w,b,I,E,_,k,A,S,N,R,D,O;function P(t){e[7](t)}let L={text:"email",id:"email",type:"email",autocomplete:"email"};function x(t){e[8](t)}void 0!==e[1]&&(L.value=e[1]),n=new Vp({props:L}),T.push((()=>F(n,"value",P)));let M={text:"password",id:"password",type:"password",autocomplete:"new-password"};function q(t){e[9](t)}void 0!==e[2]&&(M.value=e[2]),y=new Vp({props:M}),T.push((()=>F(y,"value",x)));let z={text:"confirm password",id:"con-password",type:"password",autocomplete:"new-password"};return void 0!==e[3]&&(z.value=e[3]),b=new Vp({props:z}),T.push((()=>F(b,"value",q))),N=new Ce({props:{text:"signup"}}),{c(){t=h("form"),V(n.$$.fragment),r=f(),s=h("br"),o=f(),u=h("br"),d=f(),p=h("div"),V(y.$$.fragment),w=f(),V(b.$$.fragment),E=f(),_=h("br"),k=f(),A=h("br"),S=f(),V(N.$$.fragment),m(p,"id","form-container")},m(i,l){c(i,t,l),j(n,t,null),a(t,r),a(t,s),a(t,o),a(t,u),a(t,d),a(t,p),j(y,p,null),a(p,w),j(b,p,null),a(t,E),a(t,_),a(t,k),a(t,A),a(t,S),j(N,t,null),R=!0,D||(O=g(t,"submit",e[4]),D=!0)},p(e,t){const r={};!i&&2&t&&(i=!0,r.value=e[1],C((()=>i=!1))),n.$set(r);const s={};!v&&4&t&&(v=!0,s.value=e[2],C((()=>v=!1))),y.$set(s);const o={};!I&&8&t&&(I=!0,o.value=e[3],C((()=>I=!1))),b.$set(o)},i(e){R||(U(n.$$.fragment,e),U(y.$$.fragment,e),U(b.$$.fragment,e),U(N.$$.fragment,e),R=!0)},o(e){$(n.$$.fragment,e),$(y.$$.fragment,e),$(b.$$.fragment,e),$(N.$$.fragment,e),R=!1},d(e){e&&l(t),B(n),B(y),B(b),B(N),D=!1,O()}}}function Kp(t){let n;return{c(){n=h("p"),n.textContent="signed up and logged in! redirecting to main..."},m(e,t){c(e,n,t)},p:e,i:e,o:e,d(e){e&&l(n)}}}function Gp(e){let t,n,i,r,s,o;const u=[Kp,Hp],d=[];function p(e,t){return e[0]?0:1}return r=p(e),s=d[r]=u[r](e),{c(){t=h("main"),n=h("h1"),n.textContent="sign up",i=f(),s.c()},m(e,s){c(e,t,s),a(t,n),a(t,i),d[r].m(t,null),o=!0},p(e,[n]){let i=r;r=p(e),r===i?d[r].p(e,n):(x(),$(d[i],1,1,(()=>{d[i]=null})),M(),s=d[r],s?s.p(e,n):(s=d[r]=u[r](e),s.c()),U(s,1),s.m(t,null))},i(e){o||(U(s),o=!0)},o(e){$(s),o=!1},d(e){e&&l(t),d[r].d()}}}function Wp(e,t,n){let i,r,s,{currentRoute:o}=t,{params:a}=t,c=!1;return e.$$set=e=>{"currentRoute"in e&&n(5,o=e.currentRoute),"params"in e&&n(6,a=e.params)},[c,i,r,s,function(e){e&&e.preventDefault(),function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(i)?s===r?r.length<8?alert("Passwords too short!"):Up(i,r).then((e=>{null!=e&&(n(0,c=!0),Cp(1e3))})):alert("Passwords do not match!"):alert("Invalid email!")},o,a,function(e){i=e,n(1,i)},function(e){r=e,n(2,r)},function(e){s=e,n(3,s)}]}function Jp(){return!Mp()}const Xp=[{name:"/",component:class extends H{constructor(e){super(),z(this,e,Be,je,s,{currentRoute:7,params:8})}}},{name:"login",component:class extends H{constructor(e){super(),z(this,e,zp,qp,s,{currentRoute:4,params:5})}},onlyIf:{guard:Jp,redirect:"/"}},{name:"signup",component:class extends H{constructor(e){super(),z(this,e,Wp,Gp,s,{currentRoute:5,params:6})}},onlyIf:{guard:Jp,redirect:"/"}}];function Qp(t){let n;return{c(){n=h("main"),n.innerHTML='<div class="header svelte-1weaa9o"><a href="/analytics" class="svelte-1weaa9o">analytics</a> \n    <a href="/signup" class="svelte-1weaa9o">signup</a> \n    <a href="/login" class="svelte-1weaa9o">login</a> \n    <a href="/" class="svelte-1weaa9o">play</a></div>'},m(e,t){c(e,n,t)},p:e,i:e,o:e,d(e){e&&l(n)}}}class Yp extends H{constructor(e){super(),z(this,e,null,Qp,s,{})}}function Zp(t){let n,i,r,s,o,u;return r=new Yp({}),o=new Ee({props:{routes:Xp}}),{c(){n=h("meta"),i=f(),V(r.$$.fragment),s=f(),V(o.$$.fragment),document.title="Perfect Type",m(n,"charset","utf-8")},m(e,t){a(document.head,n),c(e,i,t),j(r,e,t),c(e,s,t),j(o,e,t),u=!0},p:e,i(e){u||(U(r.$$.fragment,e),U(o.$$.fragment,e),u=!0)},o(e){$(r.$$.fragment,e),$(o.$$.fragment,e),u=!1},d(e){l(n),e&&l(i),B(r,e),e&&l(s),B(o,e)}}}function eg(e){return xp(),[]}return new class extends H{constructor(e){super(),z(this,e,eg,Zp,s,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
