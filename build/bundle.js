var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function i(e){e.forEach(t)}function r(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function o(t,n,i){t.$$.on_destroy.push(function(t,...n){if(null==t)return e;const i=t.subscribe(...n);return i.unsubscribe?()=>i.unsubscribe():i}(n,i))}function a(e,t){e.appendChild(t)}function c(e,t,n){e.insertBefore(t,n||null)}function l(e){e.parentNode.removeChild(e)}function u(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function h(e){return document.createElement(e)}function d(e){return document.createTextNode(e)}function f(){return d(" ")}function p(){return d("")}function g(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function m(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function y(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let v;function w(e){v=e}function b(e){(function(){if(!v)throw new Error("Function called outside component initialization");return v})().$$.on_mount.push(e)}const I=[],T=[],E=[],_=[],k=Promise.resolve();let A=!1;function S(e){E.push(e)}function C(e){_.push(e)}let N=!1;const R=new Set;function D(){if(!N){N=!0;do{for(let e=0;e<I.length;e+=1){const t=I[e];w(t),O(t.$$)}for(w(null),I.length=0;T.length;)T.pop()();for(let e=0;e<E.length;e+=1){const t=E[e];R.has(t)||(R.add(t),t())}E.length=0}while(I.length);for(;_.length;)_.pop()();A=!1,N=!1,R.clear()}}function O(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(S)}}const P=new Set;let L;function x(){L={r:0,c:[],p:L}}function M(){L.r||i(L.c),L=L.p}function U(e,t){e&&e.i&&(P.delete(e),e.i(t))}function F(e,t,n,i){if(e&&e.o){if(P.has(e))return;P.add(e),L.c.push((()=>{P.delete(e),i&&(n&&e.d(1),i())})),e.o(t)}}function V(e,t,n){const i=e.$$.props[t];void 0!==i&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function $(e){e&&e.c()}function j(e,n,s,o){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=e.$$;a&&a.m(n,s),o||S((()=>{const n=c.map(t).filter(r);l?l.push(...n):i(n),e.$$.on_mount=[]})),u.forEach(S)}function B(e,t){const n=e.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function q(e,t){-1===e.$$.dirty[0]&&(I.push(e),A||(A=!0,k.then(D)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function z(t,r,s,o,a,c,u,h=[-1]){const d=v;w(t);const f=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:n(),dirty:h,skip_bound:!1,root:r.target||d.$$.root};u&&u(f.root);let p=!1;if(f.ctx=s?s(t,r.props||{},((e,n,...i)=>{const r=i.length?i[0]:n;return f.ctx&&a(f.ctx[e],f.ctx[e]=r)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](r),p&&q(t,e)),n})):[],f.update(),p=!0,i(f.before_update),f.fragment=!!o&&o(f.ctx),r.target){if(r.hydrate){const e=function(e){return Array.from(e.childNodes)}(r.target);f.fragment&&f.fragment.l(e),e.forEach(l)}else f.fragment&&f.fragment.c();r.intro&&U(t.$$.fragment),j(t,r.target,r.anchor,r.customElement),D()}w(d)}class H{$destroy(){B(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const K=[];function G(t,n=e){let i;const r=new Set;function o(e){if(s(t,e)&&(t=e,i)){const e=!K.length;for(const e of r)e[1](),K.push(e,t);if(e){for(let e=0;e<K.length;e+=2)K[e][0](K[e+1]);K.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(s,a=e){const c=[s,a];return r.add(c),1===r.size&&(i=n(o)||e),s(t),()=>{r.delete(c),0===r.size&&(i(),i=null)}}}}const{set:W,subscribe:J}=G({}),X={subscribe:J,set:W,remove:()=>{W({})}},Q=(e,t="")=>{const n=new URL(e);function i(){return s(t).reduce(((e,t,n)=>(":"===t[0]&&e.push({value:t.slice(1),index:n}),e)),[])}function r(){return s(n.pathname)}function s(e){return"/"===e||0===e.trim().length?[e]:("/"===e.slice(-1)&&(e=e.slice(0,-1)),"/"===e[0]&&(e=e.slice(1)),e.split("/"))}return Object.freeze({hash:n.hash,host:n.host,hostname:n.hostname,namedParams:function(){const e=r();return i().reduce(((t,n)=>(t[n.value]=e[n.index],t)),{})}(),namedParamsKeys:i().reduce(((e,t)=>(e.push(t.value),e)),[]),namedParamsValues:function(){const e=r();return i().reduce(((t,n)=>(t.push(e[n.index]),t)),[])}(),pathNames:r(),port:n.port,pathname:n.pathname,protocol:n.protocol,search:n.search,queryParams:function(){const e={};return n.searchParams.forEach(((t,n)=>{e[n]=t})),e}(),queryParamsKeys:function(){const e=[];return n.searchParams.forEach(((t,n)=>{e.push(n)})),e}(),queryParamsValues:function(){const e=[];return n.searchParams.forEach((t=>{e.push(t)})),e}()})},Y=e=>{let t=!1;return 0===Object.keys(e).length||(e.childRoute&&0===Object.keys(e.childRoute).length?t=!0:e.childRoute&&(t=Y(e.childRoute)),t)},Z=(e,t)=>(t=ie(t)).includes(":")?t.includes(e):t.startsWith(e),ee=(e,t,n)=>{let i=!1;if(n)return{exists:t.lang&&t.lang[n]&&t.lang[n].includes(e),language:n};if(i=Z(e,t.name),!i&&t.lang&&"object"==typeof t.lang)for(const[r,s]of Object.entries(t.lang))Z(e,s)&&(i=!0,n=r);return{exists:i,language:n}},te=e=>"/"===e||0===e.trim().length?[e]:(e=ie(e,"both")).split("/"),ne=(e="")=>{let t;return"/"===e||0===e.trim().length?e:(t=(e=ie(e,"lead")).split(":")[0],t=ie(t,"trail"),t.toLowerCase())},ie=(e,t="lead")=>("trail"!==t&&"both"!==t||(e=e.replace(/\/$/,"")),"lead"!==t&&"both"!==t||(e=e.replace(/^\//,"")),e),re=(e,t=null)=>t&&e.lang&&e.lang[t]?e.lang[t]:e.name,se=e=>{const t=e||!1;let n="";const i=(e,n)=>{if("undefined"!=typeof window){const i=(e=>{let t=[];if(e.queryParams)for(let[n,i]of Object.entries(e.queryParams))t.push(`${n}=${i}`);const n=e.hash?e.hash:"";return t.length>0?`${e.path}?${t.join("&")}${n}`:e.path+n})(e);n&&window.history.pushState({page:i},"",i),t&&r(i)}},r=e=>{"undefined"!=typeof ga&&(ga("set","page",e),ga("send","pageview"))};return Object.freeze({active:()=>n,isActive:(e,t=!1)=>{"/"!==e[0]&&(e="/"+e);let i=Q(`http://fake.com${e}`).pathname,r=Q(`http://fake.com${n}`).pathname;return i=ie(i,"trail"),r=ie(r,"trail"),t?r.includes(i):r===i},setActive:(e,t)=>{n=e.path,i(e,t)}})},oe=(e,t)=>{const n=(e=>{const t=e;return Object.freeze({valid:()=>t&&t.guard&&"function"==typeof t.guard,redirect:()=>!t.guard(),redirectPath:()=>{let e="/";return t.redirect&&t.redirect.length>0&&(e=t.redirect),e}})})(e.onlyIf);return Object.freeze({path:()=>{let i=t;return e.redirectTo&&e.redirectTo.length>0&&(i=e.redirectTo),n.valid()&&n.redirect()&&(i=n.redirectPath()),i}})};function ae({basePath:e,basePathName:t,pathNames:n,convert:i,currentLanguage:r}){let s,o,a=r;function c(){return re(o,a)}function l(){return ne(c())}function u(){return ne(s.result)}return Object.freeze({basePathSameAsLocalised:function(){return u()===l()},updatedPath:function(e){return o=e,s=((e,t,n,i,r=!1)=>{if("/"===e||0===e.trim().length)return{result:e,language:null};let s=e,o=n.name,a=i;if(r&&(a=""),o=ie(o),s=ie(s),n.childRoute)return{result:e,language:a};{let e=ee(s,n,a);e.exists&&r&&(s=re(n,i));let c=o.split(":")[0];return c=ie(c,"trail"),c=c.split("/"),c.shift(),c.forEach((()=>{const o=t[0];if(e=ee(`${s}/${o}`,n,a),!o||!e.exists)return{result:s,language:e.language};s=r?re(n,i):`${s}/${o}`,t.shift()})),{result:s,language:e.language}}})(t,n,o,a,i),a=i?r:s.language,s},basePathNameWithoutNamedParams:u,localisedPathName:c,localisedRouteWithoutNamedParams:l,namedPath:function(){let t=c();return t&&!t.startsWith("/")&&(t="/"+t),e?`${e}${t}`:t},pathNames:n,routeLanguage:function(){return a},routePath:function(){let t=`${e}/${u()}`;"//"===t&&(t="/"),a&&(n=((e,t)=>{const n=t.split("/");return n.length>1&&n.forEach((function(t,n){t.length>0&&n>0&&e.shift()})),e})(n,l()));const i=((e="")=>0===e.trim().length?[]:te(e).reduce(((e,t)=>(":"===t[0]&&e.push(t.slice(1)),e)),[]))(c());return i&&i.length>0&&i.forEach((function(){n.length>0&&(t+=`/${n.shift()}`)})),t}})}function ce({routes:e,currentUrl:t,routerOptions:n,convert:i}){const r=n.defaultLanguage,s=n.prefix?n.prefix.toLowerCase():"",o=function(e,t){if(t&&t.trim().length>0){const n=e.endsWith(t)?t:t+"/",i=e.replace(n,"");return Q(i)}return Q(e)}(t,s);let a="",c={},l=!1;function u(e,t,n,i,s){let h={};const d=ae({basePath:t,basePathName:n.shift().toLowerCase(),pathNames:n,convert:s,currentLanguage:i});return l=!1,e.forEach((function(e){if(d.updatedPath(e),function(e,t){const n=e.basePathSameAsLocalised();n&&(l=!0);return n||!l&&(e=>ie(e).startsWith(":"))(t)}(d,e.name)){let t=d.routePath();if(a=oe(e,a).path(),h.name!==t&&(h=function({route:e,routePath:t,routeLanguage:n,urlParser:i,namedPath:s}){const o=function({routeInfo:e,path:t,routeNamedParams:n,urlParser:i,namedPath:r,language:s}){const o=()=>{const e=Q(`https://fake.com${i.pathname}`,r).namedParams;return{...n,...e}};return Object.freeze({get:()=>({name:t,component:e.component,hash:i.hash,layout:e.layout,queryParams:i.queryParams,namedParams:o(),path:t,language:s}),namedParams:o})}({routeInfo:e,urlParser:i,path:t,routeNamedParams:c,namedPath:s,language:n||r});return c=o.namedParams(),o.get()}({route:e,routePath:t,routeLanguage:d.routeLanguage(),urlParser:o,namedPath:d.namedPath()})),e.nestedRoutes&&e.nestedRoutes.length>0&&d.pathNames.length>0)h.childRoute=u(e.nestedRoutes,t,d.pathNames,d.routeLanguage(),s),h.path=h.childRoute.path,h.language=h.childRoute.language;else if(function(e,t){return e.nestedRoutes&&e.nestedRoutes.length>0&&0===t.length}(e,d.pathNames)){const n=u(e.nestedRoutes,t,["index"],d.routeLanguage(),s);n&&Object.keys(n).length>0&&(h.childRoute=n,h.language=h.childRoute.language)}}})),a&&(h.redirectTo=a),h}const h=t=>{const n=e.find((e=>"404"==e.name)),i=t||r||"";return n?{...n,language:i,path:"404"}:{name:"404",component:"",path:"404",redirectTo:"/404.html"}};return Object.freeze({findActiveRoute:function(){let t=u(e,"",o.pathNames,n.lang,i);return t&&Object.keys(t).length&&!Y(t)?(t.path=t.path.split("?")[0],s&&(t.path=`/${s}${t.path}`)):"undefined"!=typeof window&&(t=h(n.lang)),t}})}const le="/404.html";let ue,he=[],de={};const fe=(e,t,n={})=>{de={...n},void 0!==t&&""!==t||(t=document.location.href),ue=se(de.gaPageviews),t=ie(t,"trail"),he=e;const i=()=>{let n=!1;return de.langConvertTo&&(de.lang=de.langConvertTo,n=!0),ce({routes:e,currentUrl:t,routerOptions:de,convert:n}).findActiveRoute()};return Object.freeze({setActiveRoute:(e=!0)=>{const t=i();return t.redirectTo?((e,t)=>("undefined"!=typeof window&&(e===le?ue.setActive({path:le},t):pe(e)),e))(t.redirectTo,e):(ue.setActive(t,e),X.set(t),t)},findActiveRoute:i})},pe=(e,t=null,n=!0)=>(e=ie(e,"lead"),t&&(de.langConvertTo=t),fe(he,"http://fake.com/"+e,de).setActiveRoute(n));function ge(e){let t,n;return t=new be({props:{currentRoute:e[0].childRoute,params:e[1]}}),{c(){$(t.$$.fragment)},m(e,i){j(t,e,i),n=!0},p(e,n){const i={};1&n&&(i.currentRoute=e[0].childRoute),2&n&&(i.params=e[1]),t.$set(i)},i(e){n||(U(t.$$.fragment,e),n=!0)},o(e){F(t.$$.fragment,e),n=!1},d(e){B(t,e)}}}function me(e){let t,n,i;var r=e[0].component;function s(e){return{props:{currentRoute:{...e[0],component:""},params:e[1]}}}return r&&(t=new r(s(e))),{c(){t&&$(t.$$.fragment),n=p()},m(e,r){t&&j(t,e,r),c(e,n,r),i=!0},p(e,i){const o={};if(1&i&&(o.currentRoute={...e[0],component:""}),2&i&&(o.params=e[1]),r!==(r=e[0].component)){if(t){x();const e=t;F(e.$$.fragment,1,0,(()=>{B(e,1)})),M()}r?(t=new r(s(e)),$(t.$$.fragment),U(t.$$.fragment,1),j(t,n.parentNode,n)):t=null}else r&&t.$set(o)},i(e){i||(t&&U(t.$$.fragment,e),i=!0)},o(e){t&&F(t.$$.fragment,e),i=!1},d(e){e&&l(n),t&&B(t,e)}}}function ye(e){let t,n,i;var r=e[0].layout;function s(e){return{props:{currentRoute:{...e[0],layout:""},params:e[1]}}}return r&&(t=new r(s(e))),{c(){t&&$(t.$$.fragment),n=p()},m(e,r){t&&j(t,e,r),c(e,n,r),i=!0},p(e,i){const o={};if(1&i&&(o.currentRoute={...e[0],layout:""}),2&i&&(o.params=e[1]),r!==(r=e[0].layout)){if(t){x();const e=t;F(e.$$.fragment,1,0,(()=>{B(e,1)})),M()}r?(t=new r(s(e)),$(t.$$.fragment),U(t.$$.fragment,1),j(t,n.parentNode,n)):t=null}else r&&t.$set(o)},i(e){i||(t&&U(t.$$.fragment,e),i=!0)},o(e){t&&F(t.$$.fragment,e),i=!1},d(e){e&&l(n),t&&B(t,e)}}}function ve(e){let t,n,i,r;const s=[ye,me,ge],o=[];function a(e,t){return e[0].layout?0:e[0].component?1:e[0].childRoute?2:-1}return~(t=a(e))&&(n=o[t]=s[t](e)),{c(){n&&n.c(),i=p()},m(e,n){~t&&o[t].m(e,n),c(e,i,n),r=!0},p(e,[r]){let c=t;t=a(e),t===c?~t&&o[t].p(e,r):(n&&(x(),F(o[c],1,1,(()=>{o[c]=null})),M()),~t?(n=o[t],n?n.p(e,r):(n=o[t]=s[t](e),n.c()),U(n,1),n.m(i.parentNode,i)):n=null)},i(e){r||(U(n),r=!0)},o(e){F(n),r=!1},d(e){~t&&o[t].d(e),e&&l(i)}}}function we(e,t,n){let{currentRoute:i={}}=t,{params:r={}}=t;return e.$$set=e=>{"currentRoute"in e&&n(0,i=e.currentRoute),"params"in e&&n(1,r=e.params)},[i,r]}"undefined"!=typeof window&&(window.addEventListener("click",(e=>{if("a"!==e.target.localName.toLowerCase())return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;const t=de.prefix?`/${de.prefix.toLowerCase()}`:"",n=e.target.pathname&&e.target.host===window.location.host,i=!(t.length>1)||e.target.pathname.startsWith(t);if(n&&i){e.preventDefault();const t=e.target.pathname+e.target.search+e.target.search+e.target.hash;"_blank"===e.target.target?window.open(t,"newTab"):pe(t)}})),window.onpopstate=function(e){let t=window.location.pathname+window.location.search+window.location.hash;pe(t,null,!1)});class be extends H{constructor(e){super(),z(this,e,we,ve,s,{currentRoute:0,params:1})}}function Ie(e){let t,n;return t=new be({props:{currentRoute:e[0]}}),{c(){$(t.$$.fragment)},m(e,i){j(t,e,i),n=!0},p(e,[n]){const i={};1&n&&(i.currentRoute=e[0]),t.$set(i)},i(e){n||(U(t.$$.fragment,e),n=!0)},o(e){F(t.$$.fragment,e),n=!1},d(e){B(t,e)}}}function Te(e,t,n){let i;o(e,X,(e=>n(0,i=e)));let{routes:r=[]}=t,{options:s={}}=t;return b((()=>{fe(r,document.location.href,s).setActiveRoute()})),e.$$set=e=>{"routes"in e&&n(1,r=e.routes),"options"in e&&n(2,s=e.options)},[i,r,s]}class Ee extends H{constructor(e){super(),z(this,e,Te,Ie,s,{routes:1,options:2})}}const _e=G(0);var ke=["ability","able","aboard","about","above","accept","accident","according","account","accurate","acres","across","act","action","active","activity","actual","actually","add","addition","additional","adjective","adult","adventure","advice","affect","afraid","after","afternoon","again","against","age","ago","agree","ahead","aid","air","airplane","alike","alive","all","allow","almost","alone","along","aloud","alphabet","already","also","although","am","among","amount","ancient","angle","angry","animal","announced","another","answer","ants","any","anybody","anyone","anything","anyway","anywhere","apart","apartment","appearance","apple","applied","appropriate","are","area","arm","army","around","arrange","arrangement","arrive","arrow","art","article","as","aside","ask","asleep","at","ate","atmosphere","atom","atomic","attached","attack","attempt","attention","audience","author","automobile","available","average","avoid","aware","away","baby","back","bad","badly","bag","balance","ball","balloon","band","bank","bar","bare","bark","barn","base","baseball","basic","basis","basket","bat","battle","be","bean","bear","beat","beautiful","beauty","became","because","become","becoming","bee","been","before","began","beginning","begun","behavior","behind","being","believed","bell","belong","below","belt","bend","beneath","bent","beside","best","bet","better","between","beyond","bicycle","bigger","biggest","bill","birds","birth","birthday","bit","bite","black","blank","blanket","blew","blind","block","blood","blow","blue","board","boat","body","bone","book","border","born","both","bottle","bottom","bound","bow","bowl","box","boy","brain","branch","brass","brave","bread","break","breakfast","breath","breathe","breathing","breeze","brick","bridge","brief","bright","bring","broad","broke","broken","brother","brought","brown","brush","buffalo","build","building","built","buried","burn","burst","bus","bush","business","busy","but","butter","buy","by","cabin","cage","cake","call","calm","came","camera","camp","can","canal","cannot","cap","capital","captain","captured","car","carbon","card","care","careful","carefully","carried","carry","case","cast","castle","cat","catch","cattle","caught","cause","cave","cell","cent","center","central","century","certain","certainly","chain","chair","chamber","chance","change","changing","chapter","character","characteristic","charge","chart","check","cheese","chemical","chest","chicken","chief","child","children","choice","choose","chose","chosen","church","circle","circus","citizen","city","class","classroom","claws","clay","clean","clear","clearly","climate","climb","clock","close","closely","closer","cloth","clothes","clothing","cloud","club","coach","coal","coast","coat","coffee","cold","collect","college","colony","color","column","combination","combine","come","comfortable","coming","command","common","community","company","compare","compass","complete","completely","complex","composed","composition","compound","concerned","condition","congress","connected","consider","consist","consonant","constantly","construction","contain","continent","continued","contrast","control","conversation","cook","cookies","cool","copper","copy","corn","corner","correct","correctly","cost","cotton","could","count","country","couple","courage","course","court","cover","cow","cowboy","crack","cream","create","creature","crew","crop","cross","crowd","cry","cup","curious","current","curve","customs","cut","cutting","daily","damage","dance","danger","dangerous","dark","darkness","date","daughter","dawn","day","dead","deal","dear","death","decide","declared","deep","deeply","deer","definition","degree","depend","depth","describe","desert","design","desk","detail","determine","develop","development","diagram","diameter","did","die","differ","difference","different","difficult","difficulty","dig","dinner","direct","direction","directly","dirt","dirty","disappear","discover","discovery","discuss","discussion","disease","dish","distance","distant","divide","division","do","doctor","does","dog","doing","doll","dollar","done","donkey","door","dot","double","doubt","down","dozen","draw","drawn","dream","dress","drew","dried","drink","drive","driven","driver","driving","drop","dropped","drove","dry","duck","due","dug","dull","during","dust","duty","each","eager","ear","earlier","early","earn","earth","easier","easily","east","easy","eat","eaten","edge","education","effect","effort","egg","eight","either","electric","electricity","element","elephant","eleven","else","empty","end","enemy","energy","engine","engineer","enjoy","enough","enter","entire","entirely","environment","equal","equally","equator","equipment","escape","especially","essential","establish","even","evening","event","eventually","ever","every","everybody","everyone","everything","everywhere","evidence","exact","exactly","examine","example","excellent","except","exchange","excited","excitement","exciting","exclaimed","exercise","exist","expect","experience","experiment","explain","explanation","explore","express","expression","extra","eye","face","facing","fact","factor","factory","failed","fair","fairly","fall","fallen","familiar","family","famous","far","farm","farmer","farther","fast","fastened","faster","fat","father","favorite","fear","feathers","feature","fed","feed","feel","feet","fell","fellow","felt","fence","few","fewer","field","fierce","fifteen","fifth","fifty","fight","fighting","figure","fill","film","final","finally","find","fine","finest","finger","finish","fire","fireplace","firm","first","fish","five","fix","flag","flame","flat","flew","flies","flight","floating","floor","flow","flower","fly","fog","folks","follow","food","foot","football","for","force","foreign","forest","forget","forgot","forgotten","form","former","fort","forth","forty","forward","fought","found","four","fourth","fox","frame","free","freedom","frequently","fresh","friend","friendly","frighten","frog","from","front","frozen","fruit","fuel","full","fully","fun","function","funny","fur","furniture","further","future","gain","game","garage","garden","gas","gasoline","gate","gather","gave","general","generally","gentle","gently","get","getting","giant","gift","girl","give","given","giving","glad","glass","globe","go","goes","gold","golden","gone","good","goose","got","government","grabbed","grade","gradually","grain","grandfather","grandmother","graph","grass","gravity","gray","great","greater","greatest","greatly","green","grew","ground","group","grow","grown","growth","guard","guess","guide","gulf","gun","habit","had","hair","half","halfway","hall","hand","handle","handsome","hang","happen","happened","happily","happy","harbor","hard","harder","hardly","has","hat","have","having","hay","he","headed","heading","health","heard","hearing","heart","heat","heavy","height","held","hello","help","helpful","her","herd","here","herself","hidden","hide","high","higher","highest","highway","hill","him","himself","his","history","hit","hold","hole","hollow","home","honor","hope","horn","horse","hospital","hot","hour","house","how","however","huge","human","hundred","hung","hungry","hunt","hunter","hurried","hurry","hurt","husband","ice","idea","identity","if","ill","image","imagine","immediately","importance","important","impossible","improve","in","inch","include","including","income","increase","indeed","independent","indicate","individual","industrial","industry","influence","information","inside","instance","instant","instead","instrument","interest","interior","into","introduced","invented","involved","iron","is","island","it","its","itself","jack","jar","jet","job","join","joined","journey","joy","judge","jump","jungle","just","keep","kept","key","kids","kill","kind","kitchen","knew","knife","know","knowledge","known","label","labor","lack","lady","laid","lake","lamp","land","language","large","larger","largest","last","late","later","laugh","law","lay","layers","lead","leader","leaf","learn","least","leather","leave","leaving","led","left","leg","length","lesson","let","letter","level","library","lie","life","lift","light","like","likely","limited","line","lion","lips","liquid","list","listen","little","live","living","load","local","locate","location","log","lonely","long","longer","look","loose","lose","loss","lost","lot","loud","love","lovely","low","lower","luck","lucky","lunch","lungs","lying","machine","machinery","mad","made","magic","magnet","mail","main","mainly","major","make","making","man","managed","manner","manufacturing","many","map","mark","market","married","mass","massage","master","material","mathematics","matter","may","maybe","me","meal","mean","means","meant","measure","meat","medicine","meet","melted","member","memory","men","mental","merely","met","metal","method","mice","middle","might","mighty","mile","military","milk","mill","mind","mine","minerals","minute","mirror","missing","mission","mistake","mix","mixture","model","modern","molecular","moment","money","monkey","month","mood","moon","more","morning","most","mostly","mother","motion","motor","mountain","mouse","mouth","move","movement","movie","moving","mud","muscle","music","musical","must","my","myself","mysterious","nails","name","nation","national","native","natural","naturally","nature","near","nearby","nearer","nearest","nearly","necessary","neck","needed","needle","needs","negative","neighbor","neighborhood","nervous","nest","never","new","news","newspaper","next","nice","night","nine","no","nobody","nodded","noise","none","noon","nor","north","nose","not","note","noted","nothing","notice","noun","now","number","numeral","nuts","object","observe","obtain","occasionally","occur","ocean","of","off","offer","office","officer","official","oil","old","older","oldest","on","once","one","only","onto","open","operation","opinion","opportunity","opposite","or","orange","orbit","order","ordinary","organization","organized","origin","original","other","ought","our","ourselves","out","outer","outline","outside","over","own","owner","oxygen","pack","package","page","paid","pain","paint","pair","palace","pale","pan","paper","paragraph","parallel","parent","park","part","particles","particular","particularly","partly","parts","party","pass","passage","past","path","pattern","pay","peace","pen","pencil","people","per","percent","perfect","perfectly","perhaps","period","person","personal","pet","phrase","physical","piano","pick","picture","pictured","pie","piece","pig","pile","pilot","pine","pink","pipe","pitch","place","plain","plan","plane","planet","planned","planning","plant","plastic","plate","plates","play","pleasant","please","pleasure","plenty","plural","plus","pocket","poem","poet","poetry","point","pole","police","policeman","political","pond","pony","pool","poor","popular","population","porch","port","position","positive","possible","possibly","post","pot","potatoes","pound","pour","powder","power","powerful","practical","practice","prepare","present","president","press","pressure","pretty","prevent","previous","price","pride","primitive","principal","principle","printed","private","prize","probably","problem","process","produce","product","production","program","progress","promised","proper","properly","property","protection","proud","prove","provide","public","pull","pupil","pure","purple","purpose","push","put","putting","quarter","queen","question","quick","quickly","quiet","quietly","quite","rabbit","race","radio","railroad","rain","raise","ran","ranch","range","rapidly","rate","rather","raw","rays","reach","read","reader","ready","real","realize","rear","reason","recall","receive","recent","recently","recognize","record","red","refer","refused","region","regular","related","relationship","religious","remain","remarkable","remember","remove","repeat","replace","replied","report","represent","require","research","respect","rest","result","return","review","rhyme","rhythm","rice","rich","ride","riding","right","ring","rise","rising","river","road","roar","rock","rocket","rocky","rod","roll","roof","room","root","rope","rose","rough","round","route","row","rubbed","rubber","rule","ruler","run","running","rush","sad","saddle","safe","safety","said","sail","sale","salmon","salt","same","sand","sang","sat","satellites","satisfied","save","saved","saw","say","scale","scared","scene","school","science","scientific","scientist","score","screen","sea","search","season","seat","second","secret","section","see","seed","seeing","seems","seen","seldom","select","selection","sell","send","sense","sent","sentence","separate","series","serious","serve","service","sets","setting","settle","settlers","seven","several","shade","shadow","shake","shaking","shall","shallow","shape","share","sharp","she","sheep","sheet","shelf","shells","shelter","shine","shinning","ship","shirt","shoe","shoot","shop","shore","short","shorter","shot","should","shoulder","shout","show","shown","shut","sick","sides","sight","sign","signal","silence","silent","silk","silly","silver","similar","simple","simplest","simply","since","sing","single","sink","sister","sit","sitting","situation","six","size","skill","skin","sky","slabs","slave","sleep","slept","slide","slight","slightly","slip","slipped","slope","slow","slowly","small","smaller","smallest","smell","smile","smoke","smooth","snake","snow","so","soap","social","society","soft","softly","soil","solar","sold","soldier","solid","solution","solve","some","somebody","somehow","someone","something","sometime","somewhere","son","song","soon","sort","sound","source","south","southern","space","speak","special","species","specific","speech","speed","spell","spend","spent","spider","spin","spirit","spite","split","spoken","sport","spread","spring","square","stage","stairs","stand","standard","star","stared","start","state","statement","station","stay","steady","steam","steel","steep","stems","step","stepped","stick","stiff","still","stock","stomach","stone","stood","stop","stopped","store","storm","story","stove","straight","strange","stranger","straw","stream","street","strength","stretch","strike","string","strip","strong","stronger","struck","structure","struggle","stuck","student","studied","studying","subject","substance","success","successful","such","sudden","suddenly","sugar","suggest","suit","sum","summer","sun","sunlight","supper","supply","support","suppose","sure","surface","surprise","surrounded","swam","sweet","swept","swim","swimming","swing","swung","syllable","symbol","system","table","tail","take","taken","tales","talk","tall","tank","tape","task","taste","taught","tax","tea","teach","teacher","team","tears","teeth","telephone","television","tell","temperature","ten","tent","term","terrible","test","than","thank","that","thee","them","themselves","then","theory","there","therefore","these","they","thick","thin","thing","think","third","thirty","this","those","thou","though","thought","thousand","thread","three","threw","throat","through","throughout","throw","thrown","thumb","thus","thy","tide","tie","tight","tightly","till","time","tin","tiny","tip","tired","title","to","tobacco","today","together","told","tomorrow","tone","tongue","tonight","too","took","tool","top","topic","torn","total","touch","toward","tower","town","toy","trace","track","trade","traffic","trail","train","transportation","trap","travel","treated","tree","triangle","tribe","trick","tried","trip","troops","tropical","trouble","truck","trunk","truth","try","tube","tune","turn","twelve","twenty","twice","two","type","typical","uncle","under","underline","understanding","unhappy","union","unit","universe","unknown","unless","until","unusual","up","upon","upper","upward","us","use","useful","using","usual","usually","valley","valuable","value","vapor","variety","various","vast","vegetable","verb","vertical","very","vessels","victory","view","village","visit","visitor","voice","volume","vote","vowel","voyage","wagon","wait","walk","wall","want","war","warm","warn","was","wash","waste","watch","water","wave","way","we","weak","wealth","wear","weather","week","weigh","weight","welcome","well","went","were","west","western","wet","whale","what","whatever","wheat","wheel","when","whenever","where","wherever","whether","which","while","whispered","whistle","white","who","whole","whom","whose","why","wide","widely","wife","wild","will","willing","win","wind","window","wing","winter","wire","wise","wish","with","within","without","wolf","women","won","wonder","wonderful","wood","wooden","wool","word","wore","work","worker","world","worried","worry","worse","worth","would","wrapped","write","writer","writing","written","wrong","wrote","yard","year","yellow","yes","yesterday","yet","you","young","younger","your","yourself","youth","zero","zebra","zipper","zoo","zulu"];function Ae(e){function t(){return e&&e.maxLength>1?function(){let t,i=!1;for(;!i;)t=n(),t.length<=e.maxLength&&(i=!0);return t}():n()}function n(){return ke[i(ke.length)]}function i(e){return Math.floor(Math.random()*e)}if(void 0===e)return t();"number"==typeof e&&(e={exactly:e}),e.exactly&&(e.min=e.exactly,e.max=e.exactly),"number"!=typeof e.wordsPerString&&(e.wordsPerString=1),"function"!=typeof e.formatter&&(e.formatter=e=>e),"string"!=typeof e.separator&&(e.separator=" ");for(var r=e.min+i(e.max+1-e.min),s=[],o="",a=0,c=0;c<r*e.wordsPerString;c++)a===e.wordsPerString-1?o+=e.formatter(t(),a):o+=e.formatter(t(),a)+e.separator,a++,(c+1)%e.wordsPerString==0&&(s.push(o),o="",a=0);return e.join&&(s=s.join(e.join)),s}var Se=Ae;function Ce(e,t,n){const i=e.slice();return i[16]=t[n],i[18]=n,i}function Ne(e,t,n){const i=e.slice();return i[19]=t[n],i[21]=n,i}function Re(e){let t,n,i,r,s,o,u,p,v=e[3]?`you typed ${e[4]} words per minute`:"you lost :(",w=e[3]?"play again":"try again";return{c(){t=h("div"),n=h("div"),i=d(v),r=f(),s=h("button"),o=d(w),m(n,"class","game-over-div svelte-1b4qjnc"),m(t,"class","game-over-environment svelte-1b4qjnc")},m(l,h){c(l,t,h),a(t,n),a(n,i),a(t,r),a(t,s),a(s,o),u||(p=g(s,"click",e[6]),u=!0)},p(e,t){24&t&&v!==(v=e[3]?`you typed ${e[4]} words per minute`:"you lost :(")&&y(i,v),8&t&&w!==(w=e[3]?"play again":"try again")&&y(o,w)},d(e){e&&l(t),u=!1,p()}}}function De(t){let n,i,s,o,a,d=t[0],p=[];for(let e=0;e<d.length;e+=1)p[e]=Pe(Ce(t,d,e));return{c(){n=h("div");for(let e=0;e<p.length;e+=1)p[e].c();i=f(),s=h("div"),m(n,"class","game-environment noselect svelte-1b4qjnc"),m(n,"id","game-env"),m(s,"id","occlusion"),m(s,"class","svelte-1b4qjnc")},m(l,u){c(l,n,u);for(let e=0;e<p.length;e+=1)p[e].m(n,null);var h;c(l,i,u),c(l,s,u),o||(h=t[5].call(null,n),a=h&&r(h.destroy)?h.destroy:e,o=!0)},p(e,t){if(3&t){let i;for(d=e[0],i=0;i<d.length;i+=1){const r=Ce(e,d,i);p[i]?p[i].p(r,t):(p[i]=Pe(r),p[i].c(),p[i].m(n,null))}for(;i<p.length;i+=1)p[i].d(1);p.length=d.length}},d(e){e&&l(n),u(p,e),e&&l(i),e&&l(s),o=!1,a()}}}function Oe(e){let t,n,i,r=e[19]+"";return{c(){t=h("div"),n=d(r),m(t,"class","game-letter svelte-1b4qjnc"),m(t,"id",i=e[18]-1<0?`${e[21]}`:`${e[1][e[18]-1]+e[21]}`)},m(e,i){c(e,t,i),a(t,n)},p(e,s){1&s&&r!==(r=e[19]+"")&&y(n,r),2&s&&i!==(i=e[18]-1<0?`${e[21]}`:`${e[1][e[18]-1]+e[21]}`)&&m(t,"id",i)},d(e){e&&l(t)}}}function Pe(e){let t,n,i,r=0!=e[18]&&function(e){let t,n,i;return{c(){t=h("div"),n=d(" "),m(t,"class","game-letter svelte-1b4qjnc"),m(t,"id",i=""+(e[1][e[18]-1]-1))},m(e,i){c(e,t,i),a(t,n)},p(e,n){2&n&&i!==(i=""+(e[1][e[18]-1]-1))&&m(t,"id",i)},d(e){e&&l(t)}}}(e),s=e[16],o=[];for(let t=0;t<s.length;t+=1)o[t]=Oe(Ne(e,s,t));return{c(){t=h("div"),r&&r.c(),n=f();for(let e=0;e<o.length;e+=1)o[e].c();i=f(),m(t,"class","game-word svelte-1b4qjnc")},m(e,s){c(e,t,s),r&&r.m(t,null),a(t,n);for(let e=0;e<o.length;e+=1)o[e].m(t,null);a(t,i)},p(e,n){if(0!=e[18]&&r.p(e,n),3&n){let r;for(s=e[16],r=0;r<s.length;r+=1){const a=Ne(e,s,r);o[r]?o[r].p(a,n):(o[r]=Oe(a),o[r].c(),o[r].m(t,i))}for(;r<o.length;r+=1)o[r].d(1);o.length=s.length}},d(e){e&&l(t),r&&r.d(),u(o,e)}}}function Le(t){let n;function i(e,t){return e[2]?Re:De}let r=i(t),s=r(t);return{c(){n=h("main"),s.c()},m(e,t){c(e,n,t),s.m(n,null)},p(e,[t]){r===(r=i(e))&&s?s.p(e,t):(s.d(1),s=r(e),s&&(s.c(),s.m(n,null)))},i:e,o:e,d(e){e&&l(n),s.d()}}}function xe(e,t,n){let{currentRoute:i}=t,{params:r}=t;function s(){return Se(30).join(" ")}Array.prototype.random=function(){return this[Math.floor(Math.random()*this.length)]};let o=s();console.log(o);let a,c=o.split(" "),l=[];for(let e=0;e<c.length;e++)l.push(e-1<0?c[e].length+1:c[e].length+l[e-1]+1);_e.subscribe((e=>{a=e}));let u=!1,h=!1,d=0,f=0,p=0;return e.$$set=e=>{"currentRoute"in e&&n(7,i=e.currentRoute),"params"in e&&n(8,r=e.params)},[c,l,u,h,p,function(){const e=e=>{if(e.preventDefault(),!u&&(0==d&&(d=new Date),o.charAt(a)!==e.key?(d=0,n(2,u=!0),f=0):(!function(e){let t=document.getElementById(a);t.classList.add("typed-letter"),t.offsetLeft<f&&t.parentElement.scrollIntoView(!0);f=t.offsetLeft}(),_e.update((e=>e+1))),a==o.length)){let e=(new Date-d)/6e4;n(4,p=Math.round(c.length/e*1e3)/1e3),d=0,n(2,u=!0),n(3,h=!0),f=0}};return document.addEventListener("keypress",e),{destroy(){document.removeEventListener("keypress",e)}}},function(){_e.update((()=>0)),n(2,u=!1),n(3,h=!1),o=s(),n(0,c=o.split(" ")),n(1,l=[]);for(let e=0;e<c.length;e++)l.push(e-1<0?c[e].length+1:c[e].length+l[e-1]+1)},i,r]}Ae.wordList=ke;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
const Me={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=r>>2,u=(3&r)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),i.push(n[l],n[u],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t}(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw Error();const c=r<<2|s>>4;if(i.push(c),64!==o){const e=s<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Ue{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Fe(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Ve(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Fe())}function $e(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function je(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Be(){const e=Fe();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}class qe extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,qe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ze.prototype.create)}}class ze{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?function(e,t){return e.replace(He,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new qe(i,o,n)}}const He=/\{\$([^}]+)}/g;function Ke(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(Ge(n)&&Ge(s)){if(!Ke(n,s))return!1}else if(n!==s)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function Ge(e){return null!==e&&"object"==typeof e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function We(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function Je(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function Xe(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}class Qe{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=Ye),void 0===i.error&&(i.error=Ye),void 0===i.complete&&(i.complete=Ye);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Ye(){}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ze(e,t=1e3,n=2){const i=t*Math.pow(n,e),r=Math.round(.5*i*(Math.random()-.5)*2);return Math.min(144e5,i+r)}
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
     */function et(e){return e&&e._delegate?e._delegate:e}class tt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const nt="[DEFAULT]";
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class it{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Ue;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e))try{this.getOrInitializeService({instanceIdentifier:nt})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===nt?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:nt:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class rt{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new it(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var st;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(st||(st={}));const ot={debug:st.DEBUG,verbose:st.VERBOSE,info:st.INFO,warn:st.WARN,error:st.ERROR,silent:st.SILENT},at=st.INFO,ct={[st.DEBUG]:"log",[st.VERBOSE]:"log",[st.INFO]:"info",[st.WARN]:"warn",[st.ERROR]:"error"},lt=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=ct[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class ut{constructor(e){this.name=e,this._logLevel=at,this._logHandler=lt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in st))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?ot[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,st.DEBUG,...e),this._logHandler(this,st.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,st.VERBOSE,...e),this._logHandler(this,st.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,st.INFO,...e),this._logHandler(this,st.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,st.WARN,...e),this._logHandler(this,st.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,st.ERROR,...e),this._logHandler(this,st.ERROR,...e)}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ht{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const dt="@firebase/app",ft="0.7.11",pt=new ut("@firebase/app"),gt="[DEFAULT]",mt={[dt]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},yt=new Map,vt=new Map;function wt(e,t){try{e.container.addComponent(t)}catch(n){pt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function bt(e){const t=e.name;if(vt.has(t))return pt.debug(`There were multiple attempts to register component ${t}.`),!1;vt.set(t,e);for(const t of yt.values())wt(t,e);return!0}function It(e,t){return e.container.getProvider(t)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Tt=new ze("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Et{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new tt("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tt.create("app-deleted",{appName:this._name})}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const _t="9.6.1";function kt(e="[DEFAULT]"){const t=yt.get(e);if(!t)throw Tt.create("no-app",{appName:e});return t}function At(e,t,n){var i;let r=null!==(i=mt[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void pt.warn(e.join(" "))}bt(new tt(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var St;St="",bt(new tt("platform-logger",(e=>new ht(e)),"PRIVATE")),At(dt,ft,St),At(dt,ft,"esm2017"),At("fire-js","");
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
At("firebase","9.6.1","app");"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var Ct,Nt,Rt=(Ct=function(e,t){!function(e){function t(e){return Array.prototype.slice.call(e)}function n(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function i(e,t,i){var r,s=new Promise((function(s,o){n(r=e[t].apply(e,i)).then(s,o)}));return s.request=r,s}function r(e,t,n){var r=i(e,t,n);return r.then((function(e){if(e)return new u(e,r.request)}))}function s(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function o(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return i(this[t],r,arguments)})}))}function a(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return this[t][i].apply(this[t],arguments)})}))}function c(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return r(this[t],i,arguments)})}))}function l(e){this._index=e}function u(e,t){this._cursor=e,this._request=t}function h(e){this._store=e}function d(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function f(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new d(n)}function p(e){this._db=e}function g(e,t,n){var r=i(indexedDB,"open",[e,t]),s=r.request;return s&&(s.onupgradeneeded=function(e){n&&n(new f(s.result,e.oldVersion,s.transaction))}),r.then((function(e){return new p(e)}))}function m(e){return i(indexedDB,"deleteDatabase",[e])}s(l,"_index",["name","keyPath","multiEntry","unique"]),o(l,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),c(l,"_index",IDBIndex,["openCursor","openKeyCursor"]),s(u,"_cursor",["direction","key","primaryKey","value"]),o(u,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(u.prototype[e]=function(){var t=this,i=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,i),n(t._request).then((function(e){if(e)return new u(e,t._request)}))}))})})),h.prototype.createIndex=function(){return new l(this._store.createIndex.apply(this._store,arguments))},h.prototype.index=function(){return new l(this._store.index.apply(this._store,arguments))},s(h,"_store",["name","keyPath","indexNames","autoIncrement"]),o(h,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),c(h,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),a(h,"_store",IDBObjectStore,["deleteIndex"]),d.prototype.objectStore=function(){return new h(this._tx.objectStore.apply(this._tx,arguments))},s(d,"_tx",["objectStoreNames","mode"]),a(d,"_tx",IDBTransaction,["abort"]),f.prototype.createObjectStore=function(){return new h(this._db.createObjectStore.apply(this._db,arguments))},s(f,"_db",["name","version","objectStoreNames"]),a(f,"_db",IDBDatabase,["deleteObjectStore","close"]),p.prototype.transaction=function(){return new d(this._db.transaction.apply(this._db,arguments))},s(p,"_db",["name","version","objectStoreNames"]),a(p,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[h,l].forEach((function(n){e in n.prototype&&(n.prototype[e.replace("open","iterate")]=function(){var n=t(arguments),i=n[n.length-1],r=this._store||this._index,s=r[e].apply(r,n.slice(0,-1));s.onsuccess=function(){i(s.result)}})}))})),[l,h].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,i=[];return new Promise((function(r){n.iterateCursor(e,(function(e){e?(i.push(e.value),void 0===t||i.length!=t?e.continue():r(i)):r(i)}))}))})})),e.openDb=g,e.deleteDb=m,Object.defineProperty(e,"__esModule",{value:!0})}(t)},Ct(Nt={exports:{}},Nt.exports),Nt.exports);const Dt="@firebase/installations",Ot="0.5.4",Pt=1e4,Lt="w:0.5.4",xt="FIS_v2",Mt=36e5,Ut=new ze("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function Ft(e){return e instanceof qe&&e.code.includes("request-failed")}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Vt({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function $t(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function jt(e,t){const n=(await t.json()).error;return Ut.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Bt({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function qt(e,{refreshToken:t}){const n=Bt(e);return n.append("Authorization",function(e){return`FIS_v2 ${e}`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)),n}async function zt(e){const t=await e();return t.status>=500&&t.status<600?e():t}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Ht(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
const Kt=/^[cdef][\w-]{21}$/;function Gt(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e);return Kt.test(t)?t:""}catch(e){return""}}function Wt(e){return`${e.appName}!${e.appId}`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Jt=new Map;function Xt(e,t){const n=Wt(e);Qt(n,t),function(e,t){const n=function(){!Yt&&"BroadcastChannel"in self&&(Yt=new BroadcastChannel("[Firebase] FID Change"),Yt.onmessage=e=>{Qt(e.data.key,e.data.fid)});return Yt}();n&&n.postMessage({key:e,fid:t});0===Jt.size&&Yt&&(Yt.close(),Yt=null)}(n,t)}function Qt(e,t){const n=Jt.get(e);if(n)for(const e of n)e(t)}let Yt=null;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Zt="firebase-installations-store";let en=null;function tn(){return en||(en=Rt.openDb("firebase-installations-database",1,(e=>{if(0===e.oldVersion)e.createObjectStore(Zt)}))),en}async function nn(e,t){const n=Wt(e),i=(await tn()).transaction(Zt,"readwrite"),r=i.objectStore(Zt),s=await r.get(n);return await r.put(t,n),await i.complete,s&&s.fid===t.fid||Xt(e,t.fid),t}async function rn(e){const t=Wt(e),n=(await tn()).transaction(Zt,"readwrite");await n.objectStore(Zt).delete(t),await n.complete}async function sn(e,t){const n=Wt(e),i=(await tn()).transaction(Zt,"readwrite"),r=i.objectStore(Zt),s=await r.get(n),o=t(s);return void 0===o?await r.delete(n):await r.put(o,n),await i.complete,!o||s&&s.fid===o.fid||Xt(e,o.fid),o}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function on(e){let t;const n=await sn(e,(n=>{const i=function(e){return ln(e||{fid:Gt(),registrationStatus:0})}(n),r=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(Ut.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=async function(e,t){try{const n=await async function(e,{fid:t}){const n=Vt(e),i=Bt(e),r={fid:t,authVersion:xt,appId:e.appId,sdkVersion:Lt},s={method:"POST",headers:i,body:JSON.stringify(r)},o=await zt((()=>fetch(n,s)));if(o.ok){const e=await o.json();return{fid:e.fid||t,registrationStatus:2,refreshToken:e.refreshToken,authToken:$t(e.authToken)}}throw await jt("Create Installation",o)}(e,t);return nn(e,n)}catch(n){throw Ft(n)&&409===n.customData.serverCode?await rn(e):await nn(e,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:an(e)}:{installationEntry:t}}(e,i);return t=r.registrationPromise,r.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function an(e){let t=await cn(e);for(;1===t.registrationStatus;)await Ht(100),t=await cn(e);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await on(e);return n||t}return t}function cn(e){return sn(e,(e=>{if(!e)throw Ut.create("installation-not-found");return ln(e)}))}function ln(e){return 1===(t=e).registrationStatus&&t.registrationTime+Pt<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}async function un({appConfig:e,platformLoggerProvider:t},n){const i=function(e,{fid:t}){return`${Vt(e)}/${t}/authTokens:generate`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e,n),r=qt(e,n),s=t.getImmediate({optional:!0});s&&r.append("x-firebase-client",s.getPlatformInfoString());const o={installation:{sdkVersion:Lt}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await zt((()=>fetch(i,a)));if(c.ok){return $t(await c.json())}throw await jt("Generate Auth Token",c)}async function hn(e,t=!1){let n;const i=await sn(e.appConfig,(i=>{if(!fn(i))throw Ut.create("not-registered");const r=i.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Mt}(e)}(r))return i;if(1===r.requestStatus)return n=async function(e,t){let n=await dn(e.appConfig);for(;1===n.authToken.requestStatus;)await Ht(100),n=await dn(e.appConfig);const i=n.authToken;return 0===i.requestStatus?hn(e,t):i}(e,t),i;{if(!navigator.onLine)throw Ut.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(i);return n=async function(e,t){try{const n=await un(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await nn(e.appConfig,i),n}catch(n){if(!Ft(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await nn(e.appConfig,n)}else await rn(e.appConfig);throw n}}(e,t),t}}));return n?await n:i.authToken}function dn(e){return sn(e,(e=>{if(!fn(e))throw Ut.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+Pt<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}))}function fn(e){return void 0!==e&&2===e.registrationStatus}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function pn(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await on(e);t&&await t}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(n.appConfig);return(await hn(n,t)).token}function gn(e){return Ut.create("missing-app-config-values",{valueName:e})}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const mn="installations",yn=e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw gn("App Configuration");if(!e.name)throw gn("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw gn(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,platformLoggerProvider:It(t,"platform-logger"),_delete:()=>Promise.resolve()}},vn=e=>{const t=It(e.getProvider("app").getImmediate(),mn).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:i}=await on(t.appConfig);return i?i.catch(console.error):hn(t).catch(console.error),n.fid}(t),getToken:e=>pn(t,e)}};bt(new tt(mn,yn,"PUBLIC")),bt(new tt("installations-internal",vn,"PRIVATE")),At(Dt,Ot),At(Dt,Ot,"esm2017");
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const wn="analytics",bn="https://www.googletagmanager.com/gtag/js",In=new ut("@firebase/analytics");
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Tn(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function En(e,t,n,i){return async function(r,s,o){try{"event"===r?await async function(e,t,n,i,r){try{let s=[];if(r&&r.send_to){let e=r.send_to;Array.isArray(e)||(e=[e]);const i=await Tn(n);for(const n of e){const e=i.find((e=>e.measurementId===n)),r=e&&t[e.appId];if(!r){s=[];break}s.push(r)}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",i,r||{})}catch(e){In.error(e)}}(e,t,n,s,o):"config"===r?await async function(e,t,n,i,r,s){const o=i[r];try{if(o)await t[o];else{const e=(await Tn(n)).find((e=>e.measurementId===r));e&&await t[e.appId]}}catch(e){In.error(e)}e("config",r,s)}(e,t,n,i,s,o):e("set",s)}catch(e){In.error(e)}}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const _n=new ze("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const kn=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function An(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Sn(e,t=kn,n){const{appId:i,apiKey:r,measurementId:s}=e.options;if(!i)throw _n.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw _n.create("no-api-key")}const o=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Nn;return setTimeout((async()=>{a.abort()}),void 0!==n?n:6e4),Cn({appId:i,apiKey:r,measurementId:s},o,a,t)}async function Cn(e,{throttleEndTimeMillis:t,backoffCount:n},i,r=kn){const{appId:s,measurementId:o}=e;try{await function(e,t){return new Promise(((n,i)=>{const r=Math.max(t-Date.now(),0),s=setTimeout(n,r);e.addEventListener((()=>{clearTimeout(s),i(_n.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(i,t)}catch(e){if(o)return In.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${e.message}]`),{appId:s,measurementId:o};throw e}try{const t=await async function(e){var t;const{appId:n,apiKey:i}=e,r={method:"GET",headers:An(i)},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(s,r);if(200!==o.status&&304!==o.status){let e="";try{const n=await o.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw _n.create("config-fetch-failed",{httpStatus:o.status,responseMessage:e})}return o.json()}(e);return r.deleteThrottleMetadata(s),t}catch(t){if(!function(e){if(!(e instanceof qe&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(t)){if(r.deleteThrottleMetadata(s),o)return In.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${t.message}]`),{appId:s,measurementId:o};throw t}const a=503===Number(t.customData.httpStatus)?Ze(n,r.intervalMillis,30):Ze(n,r.intervalMillis),c={throttleEndTimeMillis:Date.now()+a,backoffCount:n+1};return r.setThrottleMetadata(s,c),In.debug(`Calling attemptFetch again in ${a} millis`),Cn(e,c,i,r)}}class Nn{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function Rn(){if("object"!=typeof indexedDB)return In.warn(_n.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}catch(e){return In.warn(_n.create("indexeddb-unavailable",{errorInfo:e}).message),!1}return!0}async function Dn(e,t,n,i,r,s,o){var a;const c=Sn(e);c.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&In.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>In.error(e))),t.push(c);const l=Rn().then((e=>e?i.getId():void 0)),[u,h]=await Promise.all([c,l]);(function(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(bn))return t;return null})()||function(e,t){const n=document.createElement("script");n.src=`${bn}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}(s,u.measurementId),r("js",new Date);const d=null!==(a=null==o?void 0:o.config)&&void 0!==a?a:{};return d.origin="firebase",d.update=!0,null!=h&&(d.firebase_id=h),r("config",u.measurementId,d),u.measurementId}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class On{constructor(e){this.app=e}_delete(){return delete Pn[this.app.options.appId],Promise.resolve()}}let Pn={},Ln=[];const xn={};let Mn,Un,Fn="dataLayer",Vn=!1;function $n(){const e=[];if($e()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=_n.create("invalid-analytics-context",{errorInfo:t});In.warn(n.message)}}function jn(e,t,n){$n();const i=e.options.appId;if(!i)throw _n.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw _n.create("no-api-key");In.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=Pn[i])throw _n.create("already-exists",{id:i});if(!Vn){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(Fn);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,i,r){let s=function(...e){window[i].push(arguments)};return window[r]&&"function"==typeof window[r]&&(s=window[r]),window[r]=En(s,e,t,n),{gtagCore:s,wrappedGtag:window[r]}}(Pn,Ln,xn,Fn,"gtag");Un=e,Mn=t,Vn=!0}Pn[i]=Dn(e,Ln,xn,t,Mn,Fn,n);return new On(e)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Bn(e=kt()){const t=It(e=et(e),wn);return t.isInitialized()?t.getImmediate():function(e,t={}){const n=It(e,wn);if(n.isInitialized()){const e=n.getImmediate();if(Ke(t,n.getOptions()))return e;throw _n.create("already-initialized")}return n.initialize({options:t})}(e)}function qn(e,t,n,i){e=et(e),async function(e,t,n,i,r){if(r&&r.global)e("event",n,i);else{const r=await t;e("event",n,Object.assign(Object.assign({},i),{send_to:r}))}}(Un,Pn[e.app.options.appId],t,n,i).catch((e=>In.error(e)))}const zn="@firebase/analytics",Hn="0.7.4";bt(new tt(wn,((e,{options:t})=>jn(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),bt(new tt("analytics-internal",(function(e){try{const t=e.getProvider(wn).getImmediate();return{logEvent:(e,n,i)=>qn(t,e,n,i)}}catch(e){throw _n.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),At(zn,Hn),At(zn,Hn,"esm2017");var Kn,Gn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Wn=Wn||{},Jn=Gn||self;function Xn(){}function Qn(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function Yn(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var Zn="closure_uid_"+(1e9*Math.random()>>>0),ei=0;function ti(e,t,n){return e.call.apply(e.bind,arguments)}function ni(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function ii(e,t,n){return(ii=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ti:ni).apply(null,arguments)}function ri(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function si(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[n].apply(e,r)}}function oi(){this.s=this.s,this.o=this.o}var ai={};oi.prototype.s=!1,oi.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var e=function(e){return Object.prototype.hasOwnProperty.call(e,Zn)&&e[Zn]||(e[Zn]=++ei)}(this);delete ai[e]}},oi.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ci=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},li=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const i=e.length,r="string"==typeof e?e.split(""):e;for(let s=0;s<i;s++)s in r&&t.call(n,r[s],s,e)};function ui(e){return Array.prototype.concat.apply([],arguments)}function hi(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function di(e){return/^[\s\xa0]*$/.test(e)}var fi,pi=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function gi(e,t){return-1!=e.indexOf(t)}function mi(e,t){return e<t?-1:e>t?1:0}e:{var yi=Jn.navigator;if(yi){var vi=yi.userAgent;if(vi){fi=vi;break e}}fi=""}function wi(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function bi(e){const t={};for(const n in e)t[n]=e[n];return t}var Ii="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ti(e,t){let n,i;for(let t=1;t<arguments.length;t++){for(n in i=arguments[t],i)e[n]=i[n];for(let t=0;t<Ii.length;t++)n=Ii[t],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function Ei(e){return Ei[" "](e),e}Ei[" "]=Xn;var _i,ki,Ai=gi(fi,"Opera"),Si=gi(fi,"Trident")||gi(fi,"MSIE"),Ci=gi(fi,"Edge"),Ni=Ci||Si,Ri=gi(fi,"Gecko")&&!(gi(fi.toLowerCase(),"webkit")&&!gi(fi,"Edge"))&&!(gi(fi,"Trident")||gi(fi,"MSIE"))&&!gi(fi,"Edge"),Di=gi(fi.toLowerCase(),"webkit")&&!gi(fi,"Edge");function Oi(){var e=Jn.document;return e?e.documentMode:void 0}e:{var Pi="",Li=(ki=fi,Ri?/rv:([^\);]+)(\)|;)/.exec(ki):Ci?/Edge\/([\d\.]+)/.exec(ki):Si?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(ki):Di?/WebKit\/(\S+)/.exec(ki):Ai?/(?:Version)[ \/]?(\S+)/.exec(ki):void 0);if(Li&&(Pi=Li?Li[1]:""),Si){var xi=Oi();if(null!=xi&&xi>parseFloat(Pi)){_i=String(xi);break e}}_i=Pi}var Mi,Ui={};function Fi(){return function(e){var t=Ui;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=pi(String(_i)).split("."),n=pi("9").split("."),i=Math.max(t.length,n.length);for(let o=0;0==e&&o<i;o++){var r=t[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==r[0].length&&0==s[0].length)break;e=mi(0==r[1].length?0:parseInt(r[1],10),0==s[1].length?0:parseInt(s[1],10))||mi(0==r[2].length,0==s[2].length)||mi(r[2],s[2]),r=r[3],s=s[3]}while(0==e)}return 0<=e}))}if(Jn.document&&Si){var Vi=Oi();Mi=Vi||(parseInt(_i,10)||void 0)}else Mi=void 0;var $i=Mi,ji=function(){if(!Jn.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{Jn.addEventListener("test",Xn,t),Jn.removeEventListener("test",Xn,t)}catch(e){}return e}();function Bi(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function qi(e,t){if(Bi.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Ri){e:{try{Ei(t.nodeName);var r=!0;break e}catch(e){}r=!1}r||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:zi[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&qi.Z.h.call(this)}}Bi.prototype.h=function(){this.defaultPrevented=!0},si(qi,Bi);var zi={2:"touch",3:"pen",4:"mouse"};qi.prototype.h=function(){qi.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Hi="closure_listenable_"+(1e6*Math.random()|0),Ki=0;function Gi(e,t,n,i,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.ia=r,this.key=++Ki,this.ca=this.fa=!1}function Wi(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function Ji(e){this.src=e,this.g={},this.h=0}function Xi(e,t){var n=t.type;if(n in e.g){var i,r=e.g[n],s=ci(r,t);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Wi(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Qi(e,t,n,i){for(var r=0;r<e.length;++r){var s=e[r];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==i)return r}return-1}Ji.prototype.add=function(e,t,n,i,r){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=Qi(e,t,i,r);return-1<o?(t=e[o],n||(t.fa=!1)):((t=new Gi(t,this.src,s,!!i,r)).fa=n,e.push(t)),t};var Yi="closure_lm_"+(1e6*Math.random()|0),Zi={};function er(e,t,n,i,r){if(i&&i.once)return nr(e,t,n,i,r);if(Array.isArray(t)){for(var s=0;s<t.length;s++)er(e,t[s],n,i,r);return null}return n=lr(n),e&&e[Hi]?e.N(t,n,Yn(i)?!!i.capture:!!i,r):tr(e,t,n,!1,i,r)}function tr(e,t,n,i,r,s){if(!t)throw Error("Invalid event type");var o=Yn(r)?!!r.capture:!!r,a=ar(e);if(a||(e[Yi]=a=new Ji(e)),(n=a.add(t,n,i,o,s)).proxy)return n;if(i=function(){function e(n){return t.call(e.src,e.listener,n)}var t=or;return e}(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)ji||(r=o),void 0===r&&(r=!1),e.addEventListener(t.toString(),i,r);else if(e.attachEvent)e.attachEvent(sr(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}function nr(e,t,n,i,r){if(Array.isArray(t)){for(var s=0;s<t.length;s++)nr(e,t[s],n,i,r);return null}return n=lr(n),e&&e[Hi]?e.O(t,n,Yn(i)?!!i.capture:!!i,r):tr(e,t,n,!0,i,r)}function ir(e,t,n,i,r){if(Array.isArray(t))for(var s=0;s<t.length;s++)ir(e,t[s],n,i,r);else i=Yn(i)?!!i.capture:!!i,n=lr(n),e&&e[Hi]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=Qi(s=e.g[t],n,i,r))&&(Wi(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=ar(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Qi(t,n,i,r)),(n=-1<e?t[e]:null)&&rr(n))}function rr(e){if("number"!=typeof e&&e&&!e.ca){var t=e.src;if(t&&t[Hi])Xi(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(sr(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=ar(t))?(Xi(n,e),0==n.h&&(n.src=null,t[Yi]=null)):Wi(e)}}}function sr(e){return e in Zi?Zi[e]:Zi[e]="on"+e}function or(e,t){if(e.ca)e=!0;else{t=new qi(t,this);var n=e.listener,i=e.ia||e.src;e.fa&&rr(e),e=n.call(i,t)}return e}function ar(e){return(e=e[Yi])instanceof Ji?e:null}var cr="__closure_events_fn_"+(1e9*Math.random()>>>0);function lr(e){return"function"==typeof e?e:(e[cr]||(e[cr]=function(t){return e.handleEvent(t)}),e[cr])}function ur(){oi.call(this),this.i=new Ji(this),this.P=this,this.I=null}function hr(e,t){var n,i=e.I;if(i)for(n=[];i;i=i.I)n.push(i);if(e=e.P,i=t.type||t,"string"==typeof t)t=new Bi(t,e);else if(t instanceof Bi)t.target=t.target||e;else{var r=t;Ti(t=new Bi(i,e),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];r=dr(o,i,!0,t)&&r}if(r=dr(o=t.g=e,i,!0,t)&&r,r=dr(o,i,!1,t)&&r,n)for(s=0;s<n.length;s++)r=dr(o=t.g=n[s],i,!1,t)&&r}function dr(e,t,n,i){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Xi(e.i,o),r=!1!==a.call(c,i)&&r}}return r&&!i.defaultPrevented}si(ur,oi),ur.prototype[Hi]=!0,ur.prototype.removeEventListener=function(e,t,n,i){ir(this,e,t,n,i)},ur.prototype.M=function(){if(ur.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Wi(n[i]);delete t.g[e],t.h--}}this.I=null},ur.prototype.N=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},ur.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};var fr=Jn.JSON.stringify;function pr(){var e=Ir;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var gr,mr=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new yr),(e=>e.reset()));class yr{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function vr(e){Jn.setTimeout((()=>{throw e}),0)}function wr(e,t){gr||function(){var e=Jn.Promise.resolve(void 0);gr=function(){e.then(Tr)}}(),br||(gr(),br=!0),Ir.add(e,t)}var br=!1,Ir=new class{constructor(){this.h=this.g=null}add(e,t){const n=mr.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function Tr(){for(var e;e=pr();){try{e.h.call(e.g)}catch(e){vr(e)}var t=mr;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}br=!1}function Er(e,t){ur.call(this),this.h=e||1,this.g=t||Jn,this.j=ii(this.kb,this),this.l=Date.now()}function _r(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function kr(e,t,n){if("function"==typeof e)n&&(e=ii(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=ii(e.handleEvent,e)}return 2147483647<Number(t)?-1:Jn.setTimeout(e,t||0)}function Ar(e){e.g=kr((()=>{e.g=null,e.i&&(e.i=!1,Ar(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}si(Er,ur),(Kn=Er.prototype).da=!1,Kn.S=null,Kn.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),hr(this,"tick"),this.da&&(_r(this),this.start()))}},Kn.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Kn.M=function(){Er.Z.M.call(this),_r(this),delete this.g};class Sr extends oi{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ar(this)}M(){super.M(),this.g&&(Jn.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Cr(e){oi.call(this),this.h=e,this.g={}}si(Cr,oi);var Nr=[];function Rr(e,t,n,i){Array.isArray(n)||(n&&(Nr[0]=n.toString()),n=Nr);for(var r=0;r<n.length;r++){var s=er(t,n[r],i||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Dr(e){wi(e.g,(function(e,t){this.g.hasOwnProperty(t)&&rr(e)}),e),e.g={}}function Or(){this.g=!0}function Pr(e,t,n,i){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return fr(n)}catch(e){return t}}(e,n)+(i?" "+i:"")}))}Cr.prototype.M=function(){Cr.Z.M.call(this),Dr(this)},Cr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Or.prototype.Aa=function(){this.g=!1},Or.prototype.info=function(){};var Lr={},xr=null;function Mr(){return xr=xr||new ur}function Ur(e){Bi.call(this,Lr.Ma,e)}function Fr(e){const t=Mr();hr(t,new Ur(t,e))}function Vr(e,t){Bi.call(this,Lr.STAT_EVENT,e),this.stat=t}function $r(e){const t=Mr();hr(t,new Vr(t,e))}function jr(e,t){Bi.call(this,Lr.Na,e),this.size=t}function Br(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return Jn.setTimeout((function(){e()}),t)}Lr.Ma="serverreachability",si(Ur,Bi),Lr.STAT_EVENT="statevent",si(Vr,Bi),Lr.Na="timingevent",si(jr,Bi);var qr={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},zr={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Hr(){}function Kr(e){return e.h||(e.h=e.i())}function Gr(){}Hr.prototype.h=null;var Wr,Jr={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Xr(){Bi.call(this,"d")}function Qr(){Bi.call(this,"c")}function Yr(){}function Zr(e,t,n,i){this.l=e,this.j=t,this.m=n,this.X=i||1,this.V=new Cr(this),this.P=ts,e=Ni?125:void 0,this.W=new Er(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new es}function es(){this.i=null,this.g="",this.h=!1}si(Xr,Bi),si(Qr,Bi),si(Yr,Hr),Yr.prototype.g=function(){return new XMLHttpRequest},Yr.prototype.i=function(){return{}},Wr=new Yr;var ts=45e3,ns={},is={};function rs(e,t,n){e.K=1,e.v=Ss(Is(t)),e.s=n,e.U=!0,ss(e,null)}function ss(e,t){e.F=Date.now(),ls(e),e.A=Is(e.v);var n=e.A,i=e.X;Array.isArray(i)||(i=[String(i)]),$s(n.h,"t",i),e.C=0,n=e.l.H,e.h=new es,e.g=jo(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Sr(ii(e.Ia,e,e.g),e.O)),Rr(e.V,e.g,"readystatechange",e.gb),t=e.H?bi(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Fr(1),function(e,t,n,i,r,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.X,e.s)}function os(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function as(e,t,n){let i,r=!0;for(;!e.I&&e.C<n.length;){if(i=cs(e,n),i==is){4==t&&(e.o=4,$r(14),r=!1),Pr(e.j,e.m,null,"[Incomplete Response]");break}if(i==ns){e.o=4,$r(15),Pr(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}Pr(e.j,e.m,i,null),ps(e,i)}os(e)&&i!=is&&i!=ns&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,$r(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.aa&&(e.aa=!0,(t=e.l).g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Po(t),t.L=!0,$r(11))):(Pr(e.j,e.m,n,"[Invalid Chunked Response]"),fs(e),ds(e))}function cs(e,t){var n=e.C,i=t.indexOf("\n",n);return-1==i?is:(n=Number(t.substring(n,i)),isNaN(n)?ns:(i+=1)+n>t.length?is:(t=t.substr(i,n),e.C=i+n,t))}function ls(e){e.Y=Date.now()+e.P,us(e,e.P)}function us(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Br(ii(e.eb,e),t)}function hs(e){e.B&&(Jn.clearTimeout(e.B),e.B=null)}function ds(e){0==e.l.G||e.I||Mo(e.l,e)}function fs(e){hs(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,_r(e.W),Dr(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function ps(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||Ks(n.i,e)))if(n.I=e.N,!e.J&&Ks(n.i,e)&&3==n.G){try{var i=n.Ca.g.parse(t)}catch(e){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;xo(n),_o(n)}Oo(n),$r(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&0==n.A&&!n.v&&(n.v=Br(ii(n.ab,n),6e3));if(1>=Hs(n.i)&&n.ka){try{n.ka()}catch(e){}n.ka=void 0}}else Fo(n,11)}else if((e.J||n.g==e)&&xo(n),!di(t))for(r=n.Ca.g.parse(t),t=0;t<r.length;t++){let l=r[t];if(n.U=l[0],l=l[1],2==n.G)if("c"==l[0]){n.J=l[1],n.la=l[2];const t=l[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const r=l[4];null!=r&&(n.za=r,n.h.info("SVER="+n.za));const u=l[5];null!=u&&"number"==typeof u&&0<u&&(i=1.5*u,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=i.i;!s.g&&(gi(e,"spdy")||gi(e,"quic")||gi(e,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Gs(s,s.h),s.h=null))}if(i.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.sa=e,As(i.F,i.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=e;if((i=n).oa=$o(i,i.H?i.la:null,i.W),o.J){Ws(i.i,o);var a=o,c=i.K;c&&a.setTimeout(c),a.B&&(hs(a),ls(a)),i.g=o}else Do(i);0<n.l.length&&So(n)}else"stop"!=l[0]&&"close"!=l[0]||Fo(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?Fo(n,7):Eo(n):"noop"!=l[0]&&n.j&&n.j.wa(l),n.A=0)}Fr(4)}catch(e){}}function gs(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(Qn(e)||"string"==typeof e)li(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(Qn(e)||"string"==typeof e){n=[];for(var i=e.length,r=0;r<i;r++)n.push(r)}else for(r in n=[],i=0,e)n[i++]=r;i=function(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"==typeof e)return e.split("");if(Qn(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}for(i in t=[],n=0,e)t[n++]=e[i];return t}(e),r=i.length;for(var s=0;s<r;s++)t.call(void 0,i[s],n&&n[s],e)}}function ms(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(e)if(e instanceof ms)for(n=e.T(),i=0;i<n.length;i++)this.set(n[i],e.get(n[i]));else for(i in e)this.set(i,e[i])}function ys(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var i=e.g[t];vs(e.h,i)&&(e.g[n++]=i),t++}e.g.length=n}if(e.i!=e.g.length){var r={};for(n=t=0;t<e.g.length;)vs(r,i=e.g[t])||(e.g[n++]=i,r[i]=1),t++;e.g.length=n}}function vs(e,t){return Object.prototype.hasOwnProperty.call(e,t)}(Kn=Zr.prototype).setTimeout=function(e){this.P=e},Kn.gb=function(e){e=e.target;const t=this.L;t&&3==vo(e)?t.l():this.Ia(e)},Kn.Ia=function(e){try{if(e==this.g)e:{const u=vo(this.g);var t=this.g.Da();const h=this.g.ba();if(!(3>u)&&(3!=u||Ni||this.g&&(this.h.h||this.g.ga()||wo(this.g)))){this.I||4!=u||7==t||Fr(8==t||0>=h?3:2),hs(this);var n=this.g.ba();this.N=n;t:if(os(this)){var i=wo(this.g);e="";var r=i.length,s=4==vo(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){fs(this),ds(this);var o="";break t}this.h.i=new Jn.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:s&&t==r-1});i.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(e,t,n,i,r,s,o){e.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!di(a)){var l=a;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,$r(12),fs(this),ds(this);break e}Pr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ps(this,n)}this.U?(as(this,u,o),Ni&&this.i&&3==u&&(Rr(this.V,this.W,"tick",this.fb),this.W.start())):(Pr(this.j,this.m,o,null),ps(this,o)),4==u&&fs(this),this.i&&!this.I&&(4==u?Mo(this.l,this):(this.i=!1,ls(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,$r(12)):(this.o=0,$r(13)),fs(this),ds(this)}}}catch(e){}},Kn.fb=function(){if(this.g){var e=vo(this.g),t=this.g.ga();this.C<t.length&&(hs(this),as(this,e,t),this.i&&4!=e&&ls(this))}},Kn.cancel=function(){this.I=!0,fs(this)},Kn.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(Fr(3),$r(17)),fs(this),this.o=2,ds(this)):us(this,this.Y-e)},(Kn=ms.prototype).R=function(){ys(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},Kn.T=function(){return ys(this),this.g.concat()},Kn.get=function(e,t){return vs(this.h,e)?this.h[e]:t},Kn.set=function(e,t){vs(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},Kn.forEach=function(e,t){for(var n=this.T(),i=0;i<n.length;i++){var r=n[i],s=this.get(r);e.call(t,s,r,this)}};var ws=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function bs(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof bs){this.g=void 0!==t?t:e.g,Ts(this,e.j),this.s=e.s,Es(this,e.i),_s(this,e.m),this.l=e.l,t=e.h;var n=new Ms;n.i=t.i,t.g&&(n.g=new ms(t.g),n.h=t.h),ks(this,n),this.o=e.o}else e&&(n=String(e).match(ws))?(this.g=!!t,Ts(this,n[1]||"",!0),this.s=Cs(n[2]||""),Es(this,n[3]||"",!0),_s(this,n[4]),this.l=Cs(n[5]||"",!0),ks(this,n[6]||"",!0),this.o=Cs(n[7]||"")):(this.g=!!t,this.h=new Ms(null,this.g))}function Is(e){return new bs(e)}function Ts(e,t,n){e.j=n?Cs(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Es(e,t,n){e.i=n?Cs(t,!0):t}function _s(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function ks(e,t,n){t instanceof Ms?(e.h=t,function(e,t){t&&!e.j&&(Us(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Fs(this,t),$s(this,n,e))}),e)),e.j=t}(e.h,e.g)):(n||(t=Ns(t,Ls)),e.h=new Ms(t,e.g))}function As(e,t,n){e.h.set(t,n)}function Ss(e){return As(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Cs(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ns(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Rs),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Rs(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}bs.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ns(t,Ds,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Ns(t,Ds,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(Ns(n,"/"==n.charAt(0)?Ps:Os,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ns(n,xs)),e.join("")};var Ds=/[#\/\?@]/g,Os=/[#\?:]/g,Ps=/[#\?]/g,Ls=/[#\?@]/g,xs=/#/g;function Ms(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Us(e){e.g||(e.g=new ms,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),r=null;if(0<=i){var s=e[n].substring(0,i);r=e[n].substring(i+1)}else s=e[n];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Fs(e,t){Us(e),t=js(e,t),vs(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,vs((e=e.g).h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&ys(e)))}function Vs(e,t){return Us(e),t=js(e,t),vs(e.g.h,t)}function $s(e,t,n){Fs(e,t),0<n.length&&(e.i=null,e.g.set(js(e,t),hi(n)),e.h+=n.length)}function js(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(Kn=Ms.prototype).add=function(e,t){Us(this),this.i=null,e=js(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},Kn.forEach=function(e,t){Us(this),this.g.forEach((function(n,i){li(n,(function(n){e.call(t,n,i,this)}),this)}),this)},Kn.T=function(){Us(this);for(var e=this.g.R(),t=this.g.T(),n=[],i=0;i<t.length;i++)for(var r=e[i],s=0;s<r.length;s++)n.push(t[i]);return n},Kn.R=function(e){Us(this);var t=[];if("string"==typeof e)Vs(this,e)&&(t=ui(t,this.g.get(js(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=ui(t,e[n])}return t},Kn.set=function(e,t){return Us(this),this.i=null,Vs(this,e=js(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},Kn.get=function(e,t){return e&&0<(e=this.R(e)).length?String(e[0]):t},Kn.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var i=t[n],r=encodeURIComponent(String(i));i=this.R(i);for(var s=0;s<i.length;s++){var o=r;""!==i[s]&&(o+="="+encodeURIComponent(String(i[s]))),e.push(o)}}return this.i=e.join("&")};function Bs(e){this.l=e||qs,Jn.PerformanceNavigationTiming?e=0<(e=Jn.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(Jn.g&&Jn.g.Ea&&Jn.g.Ea()&&Jn.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var qs=10;function zs(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Hs(e){return e.h?1:e.g?e.g.size:0}function Ks(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Gs(e,t){e.g?e.g.add(t):e.h=t}function Ws(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Js(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return hi(e.i)}function Xs(){}function Qs(){this.g=new Xs}function Ys(e,t,n){const i=n||"";try{gs(e,(function(e,n){let r=e;Yn(e)&&(r=fr(e)),t.push(i+n+"="+encodeURIComponent(r))}))}catch(e){throw t.push(i+"type="+encodeURIComponent("_badmap")),e}}function Zs(e,t,n,i,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(i)}catch(e){}}function eo(e){this.l=e.$b||null,this.j=e.ib||!1}function to(e,t){ur.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=no,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Bs.prototype.cancel=function(){if(this.i=Js(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},Xs.prototype.stringify=function(e){return Jn.JSON.stringify(e,void 0)},Xs.prototype.parse=function(e){return Jn.JSON.parse(e,void 0)},si(eo,Hr),eo.prototype.g=function(){return new to(this.l,this.j)},eo.prototype.i=function(e){return function(){return e}}({}),si(to,ur);var no=0;function io(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function ro(e){e.readyState=4,e.l=null,e.j=null,e.A=null,so(e)}function so(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(Kn=to.prototype).open=function(e,t){if(this.readyState!=no)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,so(this)},Kn.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||Jn).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},Kn.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ro(this)),this.readyState=no},Kn.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,so(this)),this.g&&(this.readyState=3,so(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==Jn.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;io(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},Kn.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ro(this):so(this),3==this.readyState&&io(this)}},Kn.Ua=function(e){this.g&&(this.response=this.responseText=e,ro(this))},Kn.Ta=function(e){this.g&&(this.response=e,ro(this))},Kn.ha=function(){this.g&&ro(this)},Kn.setRequestHeader=function(e,t){this.v.append(e,t)},Kn.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},Kn.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(to.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var oo=Jn.JSON.parse;function ao(e){ur.call(this),this.headers=new ms,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=co,this.K=this.L=!1}si(ao,ur);var co="",lo=/^https?$/i,uo=["POST","PUT"];function ho(e){return"content-type"==e.toLowerCase()}function fo(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,po(e),mo(e)}function po(e){e.D||(e.D=!0,hr(e,"complete"),hr(e,"error"))}function go(e){if(e.h&&void 0!==Wn&&(!e.C[1]||4!=vo(e)||2!=e.ba()))if(e.v&&4==vo(e))kr(e.Fa,0,e);else if(hr(e,"readystatechange"),4==vo(e)){e.h=!1;try{const a=e.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=0===a){var r=String(e.H).match(ws)[1]||null;if(!r&&Jn.self&&Jn.self.location){var s=Jn.self.location.protocol;r=s.substr(0,s.length-1)}i=!lo.test(r?r.toLowerCase():"")}n=i}if(n)hr(e,"complete"),hr(e,"success");else{e.m=6;try{var o=2<vo(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.ba()+"]",po(e)}}finally{mo(e)}}}function mo(e,t){if(e.g){yo(e);const n=e.g,i=e.C[0]?Xn:null;e.g=null,e.C=null,t||hr(e,"ready");try{n.onreadystatechange=i}catch(e){}}}function yo(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(Jn.clearTimeout(e.A),e.A=null)}function vo(e){return e.g?e.g.readyState:0}function wo(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case co:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function bo(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=function(e){let t="";return wi(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):As(e,t,n))}function Io(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function To(e){this.za=0,this.l=[],this.h=new Or,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Io("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Io("baseRetryDelayMs",5e3,e),this.$a=Io("retryDelaySeedMs",1e4,e),this.Ya=Io("forwardChannelMaxRetries",2,e),this.ra=Io("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new Bs(e&&e.concurrentRequestLimit),this.Ca=new Qs,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function Eo(e){if(ko(e),3==e.G){var t=e.V++,n=Is(e.F);As(n,"SID",e.J),As(n,"RID",t),As(n,"TYPE","terminate"),No(e,n),(t=new Zr(e,e.h,t,void 0)).K=2,t.v=Ss(Is(n)),n=!1,Jn.navigator&&Jn.navigator.sendBeacon&&(n=Jn.navigator.sendBeacon(t.v.toString(),"")),!n&&Jn.Image&&((new Image).src=t.v,n=!0),n||(t.g=jo(t.l,null),t.g.ea(t.v)),t.F=Date.now(),ls(t)}Vo(e)}function _o(e){e.g&&(Po(e),e.g.cancel(),e.g=null)}function ko(e){_o(e),e.u&&(Jn.clearTimeout(e.u),e.u=null),xo(e),e.i.cancel(),e.m&&("number"==typeof e.m&&Jn.clearTimeout(e.m),e.m=null)}function Ao(e,t){e.l.push(new class{constructor(e,t){this.h=e,this.g=t}}(e.Za++,t)),3==e.G&&So(e)}function So(e){zs(e.i)||e.m||(e.m=!0,wr(e.Ha,e),e.C=0)}function Co(e,t){var n;n=t?t.m:e.V++;const i=Is(e.F);As(i,"SID",e.J),As(i,"RID",n),As(i,"AID",e.U),No(e,i),e.o&&e.s&&bo(i,e.o,e.s),n=new Zr(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Ro(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),Gs(e.i,n),rs(n,i,t)}function No(e,t){e.j&&gs({},(function(e,n){As(t,n,e)}))}function Ro(e,t,n){n=Math.min(e.l.length,n);var i=e.j?ii(e.j.Oa,e.j,e):null;e:{var r=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=r[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=r[o].h;const a=r[o].g;if(n-=t,0>n)t=Math.max(0,r[o].h-100),s=!1;else try{Ys(a,e,"req"+n+"_")}catch(e){i&&i(a)}}if(s){i=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,i}function Do(e){e.g||e.u||(e.Y=1,wr(e.Ga,e),e.A=0)}function Oo(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=Br(ii(e.Ga,e),Uo(e,e.A)),e.A++,!0)}function Po(e){null!=e.B&&(Jn.clearTimeout(e.B),e.B=null)}function Lo(e){e.g=new Zr(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Is(e.oa);As(t,"RID","rpc"),As(t,"SID",e.J),As(t,"CI",e.N?"0":"1"),As(t,"AID",e.U),No(e,t),As(t,"TYPE","xmlhttp"),e.o&&e.s&&bo(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=Ss(Is(t)),n.s=null,n.U=!0,ss(n,e)}function xo(e){null!=e.v&&(Jn.clearTimeout(e.v),e.v=null)}function Mo(e,t){var n=null;if(e.g==t){xo(e),Po(e),e.g=null;var i=2}else{if(!Ks(e.i,t))return;n=t.D,Ws(e.i,t),i=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==i){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;hr(i=Mr(),new jr(i,n,t,r)),So(e)}else Do(e);else if(3==(r=t.o)||0==r&&0<e.I||!(1==i&&function(e,t){return!(Hs(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.l=t.D.concat(e.l),0):1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya)||(e.m=Br(ii(e.Ha,e,t),Uo(e,e.C)),e.C++,0)))}(e,t)||2==i&&Oo(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),r){case 1:Fo(e,5);break;case 4:Fo(e,10);break;case 3:Fo(e,6);break;default:Fo(e,2)}}function Uo(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function Fo(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var i=ii(e.jb,e);n||(n=new bs("//www.google.com/images/cleardot.gif"),Jn.location&&"http"==Jn.location.protocol||Ts(n,"https"),Ss(n)),function(e,t){const n=new Or;if(Jn.Image){const i=new Image;i.onload=ri(Zs,n,i,"TestLoadImage: loaded",!0,t),i.onerror=ri(Zs,n,i,"TestLoadImage: error",!1,t),i.onabort=ri(Zs,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=ri(Zs,n,i,"TestLoadImage: timeout",!1,t),Jn.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=e}else t(!1)}(n.toString(),i)}else $r(2);e.G=0,e.j&&e.j.va(t),Vo(e),ko(e)}function Vo(e){e.G=0,e.I=-1,e.j&&(0==Js(e.i).length&&0==e.l.length||(e.i.i.length=0,hi(e.l),e.l.length=0),e.j.ua())}function $o(e,t,n){let i=function(e){return e instanceof bs?Is(e):new bs(e,void 0)}(n);if(""!=i.i)t&&Es(i,t+"."+i.i),_s(i,i.m);else{const e=Jn.location;i=function(e,t,n,i){var r=new bs(null,void 0);return e&&Ts(r,e),t&&Es(r,t),n&&_s(r,n),i&&(r.l=i),r}(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&wi(e.aa,(function(e,t){As(i,t,e)})),t=e.D,n=e.sa,t&&n&&As(i,t,n),As(i,"VER",e.ma),No(e,i),i}function jo(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ba&&!e.qa?new ao(new eo({ib:!0})):new ao(e.qa)).L=e.H,t}function Bo(){}function qo(){if(Si&&!(10<=Number($i)))throw Error("Environmental error: no available transport.")}function zo(e,t){ur.call(this),this.g=new To(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!di(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!di(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Go(this)}function Ho(e){Xr.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Ko(){Qr.call(this),this.status=1}function Go(e){this.g=e}(Kn=ao.prototype).ea=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Wr.g(),this.C=this.u?Kr(this.u):Kr(Wr),this.g.onreadystatechange=ii(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void fo(this,e)}e=n||"";const r=new ms(this.headers);i&&gs(i,(function(e,t){r.set(t,e)})),i=function(e){e:{var t=ho;const n=e.length,i="string"==typeof e?e.split(""):e;for(let r=0;r<n;r++)if(r in i&&t.call(void 0,i[r],r,e)){t=r;break e}t=-1}return 0>t?null:"string"==typeof e?e.charAt(t):e[t]}(r.T()),n=Jn.FormData&&e instanceof Jn.FormData,!(0<=ci(uo,t))||i||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{yo(this),0<this.B&&((this.K=function(e){return Si&&Fi()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ii(this.pa,this)):this.A=kr(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){fo(this,e)}},Kn.pa=function(){void 0!==Wn&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,hr(this,"timeout"),this.abort(8))},Kn.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,hr(this,"complete"),hr(this,"abort"),mo(this))},Kn.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),mo(this,!0)),ao.Z.M.call(this)},Kn.Fa=function(){this.s||(this.F||this.v||this.l?go(this):this.cb())},Kn.cb=function(){go(this)},Kn.ba=function(){try{return 2<vo(this)?this.g.status:-1}catch(e){return-1}},Kn.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},Kn.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),oo(t)}},Kn.Da=function(){return this.m},Kn.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(Kn=To.prototype).ma=8,Kn.G=1,Kn.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(e){}},Kn.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const r=new Zr(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?(s=bi(s),Ti(s,this.P)):s=this.P),null===this.o&&(r.H=s),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var i=this.l[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(t+=i)){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Ro(this,r,t),As(n=Is(this.F),"RID",e),As(n,"CVER",22),this.D&&As(n,"X-HTTP-Session-Id",this.D),No(this,n),this.o&&s&&bo(n,this.o,s),Gs(this.i,r),this.Ra&&As(n,"TYPE","init"),this.ja?(As(n,"$req",t),As(n,"SID","null"),r.$=!0,rs(r,n,null)):rs(r,n,t),this.G=2}}else 3==this.G&&(e?Co(this,e):0==this.l.length||zs(this.i)||Co(this))},Kn.Ga=function(){if(this.u=null,Lo(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=Br(ii(this.bb,this),e)}},Kn.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,$r(10),_o(this),Lo(this))},Kn.ab=function(){null!=this.v&&(this.v=null,_o(this),Oo(this),$r(19))},Kn.jb=function(e){e?(this.h.info("Successfully pinged google.com"),$r(2)):(this.h.info("Failed to ping google.com"),$r(1))},(Kn=Bo.prototype).xa=function(){},Kn.wa=function(){},Kn.va=function(){},Kn.ua=function(){},Kn.Oa=function(){},qo.prototype.g=function(e,t){return new zo(e,t)},si(zo,ur),zo.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),wr(ii(e.hb,e,t))),$r(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=$o(e,null,e.W),So(e)},zo.prototype.close=function(){Eo(this.g)},zo.prototype.u=function(e){if("string"==typeof e){var t={};t.__data__=e,Ao(this.g,t)}else this.v?((t={}).__data__=fr(e),Ao(this.g,t)):Ao(this.g,e)},zo.prototype.M=function(){this.g.j=null,delete this.j,Eo(this.g),delete this.g,zo.Z.M.call(this)},si(Ho,Xr),si(Ko,Qr),si(Go,Bo),Go.prototype.xa=function(){hr(this.g,"a")},Go.prototype.wa=function(e){hr(this.g,new Ho(e))},Go.prototype.va=function(e){hr(this.g,new Ko(e))},Go.prototype.ua=function(){hr(this.g,"b")},qo.prototype.createWebChannel=qo.prototype.g,zo.prototype.send=zo.prototype.u,zo.prototype.open=zo.prototype.m,zo.prototype.close=zo.prototype.close,qr.NO_ERROR=0,qr.TIMEOUT=8,qr.HTTP_ERROR=6,zr.COMPLETE="complete",Gr.EventType=Jr,Jr.OPEN="a",Jr.CLOSE="b",Jr.ERROR="c",Jr.MESSAGE="d",ur.prototype.listen=ur.prototype.N,ao.prototype.listenOnce=ao.prototype.O,ao.prototype.getLastError=ao.prototype.La,ao.prototype.getLastErrorCode=ao.prototype.Da,ao.prototype.getStatus=ao.prototype.ba,ao.prototype.getResponseJson=ao.prototype.Qa,ao.prototype.getResponseText=ao.prototype.ga,ao.prototype.send=ao.prototype.ea;var Wo=qr,Jo=zr,Xo=Lr,Qo=10,Yo=11,Zo=eo,ea=Gr,ta=ao;const na="@firebase/firestore";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ia{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ia.UNAUTHENTICATED=new ia(null),ia.GOOGLE_CREDENTIALS=new ia("google-credentials-uid"),ia.FIRST_PARTY=new ia("first-party-uid"),ia.MOCK_USER=new ia("mock-user");
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
let ra="9.6.1";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const sa=new ut("@firebase/firestore");function oa(){return sa.logLevel}function aa(e,...t){if(sa.logLevel<=st.DEBUG){const n=t.map(ua);sa.debug(`Firestore (${ra}): ${e}`,...n)}}function ca(e,...t){if(sa.logLevel<=st.ERROR){const n=t.map(ua);sa.error(`Firestore (${ra}): ${e}`,...n)}}function la(e,...t){if(sa.logLevel<=st.WARN){const n=t.map(ua);sa.warn(`Firestore (${ra}): ${e}`,...n)}}function ua(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
     */function ha(e="Unexpected state"){const t=`FIRESTORE (${ra}) INTERNAL ASSERTION FAILED: `+e;throw ca(t),new Error(t)}function da(e,t){e||ha()}function fa(e,t){return e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const pa={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ma extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ya{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class va{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wa{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ia.UNAUTHENTICATED)))}shutdown(){}}class ba{constructor(e){this.t=e,this.currentUser=ia.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let r=new ya;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ya,e.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const t=r;e.enqueueRetryable((async()=>{await t.promise,await i(this.currentUser)}))},o=e=>{aa("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(aa("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ya)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(aa("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(da("string"==typeof t.accessToken),new va(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return da(null===e||"string"==typeof e),new ia(e)}}class Ia{constructor(e,t,n){this.type="FirstParty",this.user=ia.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class Ta{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new Ia(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(ia.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ea{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _a{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null}start(e,t){this.o=n=>{e.enqueueRetryable((()=>(e=>(null!=e.error&&aa("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`),t(e.token)))(n)))};const n=e=>{aa("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit((e=>n(e))),setTimeout((()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?n(e):aa("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(da("string"==typeof e.token),new Ea(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
     */class ka{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.p(e),this.T=e=>t.writeSequenceNumber(e))}p(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Aa(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ka.I=-1;class Sa{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=Aa(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<t&&(n+=e.charAt(i[r]%e.length))}return n}}function Ca(e,t){return e<t?-1:e>t?1:0}function Na(e,t,n){return e.length===t.length&&e.every(((e,i)=>n(e,t[i])))}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ra{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ma(pa.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ma(pa.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ma(pa.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ma(pa.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ra.fromMillis(Date.now())}static fromDate(e){return Ra.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Ra(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ca(this.nanoseconds,e.nanoseconds):Ca(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Da{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Da(e)}static min(){return new Da(new Ra(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Oa(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Pa(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function La(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class xa{constructor(e,t,n){void 0===t?t=0:t>e.length&&ha(),void 0===n?n=e.length-t:n>e.length-t&&ha(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===xa.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof xa?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const n=e.get(i),r=t.get(i);if(n<r)return-1;if(n>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ma extends xa{construct(e,t,n){return new Ma(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new ma(pa.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Ma(t)}static emptyPath(){return new Ma([])}}const Ua=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fa extends xa{construct(e,t,n){return new Fa(e,t,n)}static isValidIdentifier(e){return Ua.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fa.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Fa(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const r=()=>{if(0===n.length)throw new ma(pa.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;i<e.length;){const t=e[i];if("\\"===t){if(i+1===e.length)throw new ma(pa.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new ma(pa.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?(s=!s,i++):"."!==t||s?(n+=t,i++):(r(),i++)}if(r(),s)throw new ma(pa.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Fa(t)}static emptyPath(){return new Fa([])}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Va{constructor(e){this.fields=e,e.sort(Fa.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Na(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class $a{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new $a(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new $a(t)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ca(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$a.EMPTY_BYTE_STRING=new $a("");const ja=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ba(e){if(da(!!e),"string"==typeof e){let t=0;const n=ja.exec(e);if(da(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:qa(e.seconds),nanos:qa(e.nanos)}}function qa(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function za(e){return"string"==typeof e?$a.fromBase64String(e):$a.fromUint8Array(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ha(e){const t=Ba(e.mapValue.fields.__local_write_time__.timestampValue);return new Ra(t.seconds,t.nanos)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ka(e){return null==e}function Ga(e){return 0===e&&1/e==-1/0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Wa{constructor(e){this.path=e}static fromPath(e){return new Wa(Ma.fromString(e))}static fromName(e){return new Wa(Ma.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===Ma.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Ma.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Wa(new Ma(e.slice()))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ja(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?function(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}(e)?4:10:ha()}function Xa(e,t){const n=Ja(e);if(n!==Ja(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ha(e).isEqual(Ha(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Ba(e.timestampValue),i=Ba(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return za(e.bytesValue).isEqual(za(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return qa(e.geoPointValue.latitude)===qa(t.geoPointValue.latitude)&&qa(e.geoPointValue.longitude)===qa(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return qa(e.integerValue)===qa(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=qa(e.doubleValue),i=qa(t.doubleValue);return n===i?Ga(n)===Ga(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return Na(e.arrayValue.values||[],t.arrayValue.values||[],Xa);case 10:return function(e,t){const n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(Oa(n)!==Oa(i))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===i[e]||!Xa(n[e],i[e])))return!1;return!0}(e,t);default:return ha()}}function Qa(e,t){return void 0!==(e.values||[]).find((e=>Xa(e,t)))}function Ya(e,t){const n=Ja(e),i=Ja(t);if(n!==i)return Ca(n,i);switch(n){case 0:return 0;case 1:return Ca(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=qa(e.integerValue||e.doubleValue),i=qa(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return Za(e.timestampValue,t.timestampValue);case 4:return Za(Ha(e),Ha(t));case 5:return Ca(e.stringValue,t.stringValue);case 6:return function(e,t){const n=za(e),i=za(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),i=t.split("/");for(let e=0;e<n.length&&e<i.length;e++){const t=Ca(n[e],i[e]);if(0!==t)return t}return Ca(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Ca(qa(e.latitude),qa(t.latitude));return 0!==n?n:Ca(qa(e.longitude),qa(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],i=t.values||[];for(let e=0;e<n.length&&e<i.length;++e){const t=Ya(n[e],i[e]);if(t)return t}return Ca(n.length,i.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},i=Object.keys(n),r=t.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let e=0;e<i.length&&e<s.length;++e){const t=Ca(i[e],s[e]);if(0!==t)return t;const o=Ya(n[i[e]],r[s[e]]);if(0!==o)return o}return Ca(i.length,s.length)}(e.mapValue,t.mapValue);default:throw ha()}}function Za(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Ca(e,t);const n=Ba(e),i=Ba(t),r=Ca(n.seconds,i.seconds);return 0!==r?r:Ca(n.nanos,i.nanos)}function ec(e){return tc(e)}function tc(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Ba(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?za(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Wa.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const i of e.values||[])n?n=!1:t+=",",t+=tc(i);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",i=!0;for(const r of t)i?i=!1:n+=",",n+=`${r}:${tc(e.fields[r])}`;return n+"}"}(e.mapValue):ha();var t,n}function nc(e){return!!e&&"integerValue"in e}function ic(e){return!!e&&"arrayValue"in e}function rc(e){return!!e&&"mapValue"in e}function sc(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Pa(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=sc(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=sc(e.arrayValue.values[n]);return t}return Object.assign({},e)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class oc{constructor(e){this.value=e}static empty(){return new oc({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!rc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=sc(t)}setAll(e){let t=Fa.emptyPath(),n={},i=[];e.forEach(((e,r)=>{if(!t.isImmediateParentOf(r)){const e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=r.popLast()}e?n[r.lastSegment()]=sc(e):i.push(r.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,n,i)}delete(e){const t=this.field(e.popLast());rc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Xa(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];rc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){Pa(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new oc(sc(this.value))}}function ac(e){const t=[];return Pa(e.fields,((e,n)=>{const i=new Fa([e]);if(rc(n)){const e=ac(n.mapValue).fields;if(0===e.length)t.push(i);else for(const n of e)t.push(i.child(n))}else t.push(i)})),new Va(t)
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class cc{constructor(e,t,n,i,r){this.key=e,this.documentType=t,this.version=n,this.data=i,this.documentState=r}static newInvalidDocument(e){return new cc(e,0,Da.min(),oc.empty(),0)}static newFoundDocument(e,t,n){return new cc(e,1,t,n,0)}static newNoDocument(e,t){return new cc(e,2,t,oc.empty(),0)}static newUnknownDocument(e,t){return new cc(e,3,t,oc.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=oc.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=oc.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof cc&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new cc(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class lc{constructor(e,t=null,n=[],i=[],r=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.R=null}}function uc(e,t=null,n=[],i=[],r=null,s=null,o=null){return new lc(e,t,n,i,r,s,o)}function hc(e){const t=fa(e);if(null===t.R){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>function(e){return e.field.canonicalString()+e.op.toString()+ec(e.value)}(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Ka(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=Ec(t.startAt)),t.endAt&&(e+="|ub:",e+=Ec(t.endAt)),t.R=e}return t.R}function dc(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!kc(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(n=e.filters[r],i=t.filters[r],n.op!==i.op||!n.field.isEqual(i.field)||!Xa(n.value,i.value))return!1;var n,i;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Sc(e.startAt,t.startAt)&&Sc(e.endAt,t.endAt)}class fc extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.P(e,t,n):new pc(e,t,n):"array-contains"===t?new vc(e,n):"in"===t?new wc(e,n):"not-in"===t?new bc(e,n):"array-contains-any"===t?new Ic(e,n):new fc(e,t,n)}static P(e,t,n){return"in"===t?new gc(e,n):new mc(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.v(Ya(t,this.value)):null!==t&&Ja(this.value)===Ja(t)&&this.v(Ya(t,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return ha()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class pc extends fc{constructor(e,t,n){super(e,t,n),this.key=Wa.fromName(n.referenceValue)}matches(e){const t=Wa.comparator(e.key,this.key);return this.v(t)}}class gc extends fc{constructor(e,t){super(e,"in",t),this.keys=yc("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class mc extends fc{constructor(e,t){super(e,"not-in",t),this.keys=yc("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function yc(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Wa.fromName(e.referenceValue)))}class vc extends fc{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ic(t)&&Qa(t.arrayValue,this.value)}}class wc extends fc{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Qa(this.value.arrayValue,t)}}class bc extends fc{constructor(e,t){super(e,"not-in",t)}matches(e){if(Qa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Qa(this.value.arrayValue,t)}}class Ic extends fc{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ic(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Qa(this.value.arrayValue,e)))}}class Tc{constructor(e,t){this.position=e,this.before=t}}function Ec(e){return`${e.before?"b":"a"}:${e.position.map((e=>ec(e))).join(",")}`}class _c{constructor(e,t="asc"){this.field=e,this.dir=t}}function kc(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Ac(e,t,n){let i=0;for(let r=0;r<e.position.length;r++){const s=t[r],o=e.position[r];if(i=s.field.isKeyField()?Wa.comparator(Wa.fromName(o.referenceValue),n.key):Ya(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return e.before?i<=0:i<0}function Sc(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.before!==t.before||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Xa(e.position[n],t.position[n]))return!1;return!0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Cc{constructor(e,t=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.S=null,this.D=null,this.startAt,this.endAt}}function Nc(e){const t=fa(e);if(null===t.S){t.S=[];const e=function(e){for(const t of e.filters)if(t.V())return t.field;return null}(t),n=function(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}(t);if(null!==e&&null===n)e.isKeyField()||t.S.push(new _c(e)),t.S.push(new _c(Fa.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.S.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.S.push(new _c(Fa.keyField(),e))}}}return t.S}function Rc(e){const t=fa(e);if(!t.D)if("F"===t.limitType)t.D=uc(t.path,t.collectionGroup,Nc(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of Nc(t)){const t="desc"===n.dir?"asc":"desc";e.push(new _c(n.field,t))}const n=t.endAt?new Tc(t.endAt.position,!t.endAt.before):null,i=t.startAt?new Tc(t.startAt.position,!t.startAt.before):null;t.D=uc(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}return t.D}function Dc(e,t){return dc(Rc(e),Rc(t))&&e.limitType===t.limitType}function Oc(e){return`${hc(Rc(e))}|lt:${e.limitType}`}function Pc(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${ec(t.value)}`;var t})).join(", ")}]`),Ka(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: "+Ec(e.startAt)),e.endAt&&(t+=", endAt: "+Ec(e.endAt)),`Target(${t})`}(Rc(e))}; limitType=${e.limitType})`}function Lc(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Wa.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!Ac(e.startAt,Nc(e),t))&&(!e.endAt||!Ac(e.endAt,Nc(e),t))}(e,t)}function xc(e,t,n){const i=e.field.isKeyField()?Wa.comparator(t.key,n.key):function(e,t,n){const i=t.data.field(e),r=n.data.field(e);return null!==i&&null!==r?Ya(i,r):ha()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return ha()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Mc(e,t){if(e.C){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ga(t)?"-0":t}}function Uc(e){return{integerValue:""+e}}function Fc(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!Ga(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(t)?Uc(t):Mc(e,t)}
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
     */class Vc{constructor(){this._=void 0}}function $c(e,t,n){return e instanceof qc?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof zc?Hc(e,t):e instanceof Kc?Gc(e,t):function(e,t){const n=Bc(e,t),i=Jc(n)+Jc(e.N);return nc(n)&&nc(e.N)?Uc(i):Mc(e.k,i)}(e,t)}function jc(e,t,n){return e instanceof zc?Hc(e,t):e instanceof Kc?Gc(e,t):n}function Bc(e,t){return e instanceof Wc?nc(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class qc extends Vc{}class zc extends Vc{constructor(e){super(),this.elements=e}}function Hc(e,t){const n=Xc(t);for(const t of e.elements)n.some((e=>Xa(e,t)))||n.push(t);return{arrayValue:{values:n}}}class Kc extends Vc{constructor(e){super(),this.elements=e}}function Gc(e,t){let n=Xc(t);for(const t of e.elements)n=n.filter((e=>!Xa(e,t)));return{arrayValue:{values:n}}}class Wc extends Vc{constructor(e,t){super(),this.k=e,this.N=t}}function Jc(e){return qa(e.integerValue||e.doubleValue)}function Xc(e){return ic(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class Qc{constructor(e,t){this.version=e,this.transformResults=t}}class Yc{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Yc}static exists(e){return new Yc(void 0,e)}static updateTime(e){return new Yc(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zc(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class el{}function tl(e,t,n){e instanceof ol?function(e,t,n){const i=e.value.clone(),r=ll(e.fieldTransforms,t,n.transformResults);i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):e instanceof al?function(e,t,n){if(!Zc(e.precondition,t))return void t.convertToUnknownDocument(n.version);const i=ll(e.fieldTransforms,t,n.transformResults),r=t.data;r.setAll(cl(e)),r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function nl(e,t,n){e instanceof ol?function(e,t,n){if(!Zc(e.precondition,t))return;const i=e.value.clone(),r=ul(e.fieldTransforms,n,t);i.setAll(r),t.convertToFoundDocument(sl(t),i).setHasLocalMutations()}(e,t,n):e instanceof al?function(e,t,n){if(!Zc(e.precondition,t))return;const i=ul(e.fieldTransforms,n,t),r=t.data;r.setAll(cl(e)),r.setAll(i),t.convertToFoundDocument(sl(t),r).setHasLocalMutations()}(e,t,n):function(e,t){Zc(e.precondition,t)&&t.convertToNoDocument(Da.min())}(e,t)}function il(e,t){let n=null;for(const i of e.fieldTransforms){const e=t.data.field(i.field),r=Bc(i.transform,e||null);null!=r&&(null==n&&(n=oc.empty()),n.set(i.field,r))}return n||null}function rl(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Na(e,t,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof zc&&t instanceof zc||e instanceof Kc&&t instanceof Kc?Na(e.elements,t.elements,Xa):e instanceof Wc&&t instanceof Wc?Xa(e.N,t.N):e instanceof qc&&t instanceof qc}(e.transform,t.transform)}(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function sl(e){return e.isFoundDocument()?e.version:Da.min()}class ol extends el{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}}class al extends el{constructor(e,t,n,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}}function cl(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}})),t}function ll(e,t,n){const i=new Map;da(e.length===n.length);for(let r=0;r<n.length;r++){const s=e[r],o=s.transform,a=t.data.field(s.field);i.set(s.field,jc(o,a,n[r]))}return i}function ul(e,t,n){const i=new Map;for(const r of e){const e=r.transform,s=n.data.field(r.field);i.set(r.field,$c(e,s,t))}return i}class hl extends el{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class dl extends el{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var fl,pl;(pl=fl||(fl={}))[pl.OK=0]="OK",pl[pl.CANCELLED=1]="CANCELLED",pl[pl.UNKNOWN=2]="UNKNOWN",pl[pl.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pl[pl.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pl[pl.NOT_FOUND=5]="NOT_FOUND",pl[pl.ALREADY_EXISTS=6]="ALREADY_EXISTS",pl[pl.PERMISSION_DENIED=7]="PERMISSION_DENIED",pl[pl.UNAUTHENTICATED=16]="UNAUTHENTICATED",pl[pl.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pl[pl.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pl[pl.ABORTED=10]="ABORTED",pl[pl.OUT_OF_RANGE=11]="OUT_OF_RANGE",pl[pl.UNIMPLEMENTED=12]="UNIMPLEMENTED",pl[pl.INTERNAL=13]="INTERNAL",pl[pl.UNAVAILABLE=14]="UNAVAILABLE",pl[pl.DATA_LOSS=15]="DATA_LOSS";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class gl{constructor(e,t){this.comparator=e,this.root=t||yl.EMPTY}insert(e,t){return new gl(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,yl.BLACK,null,null))}remove(e){return new gl(this.comparator,this.root.remove(e,this.comparator).copy(null,null,yl.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ml(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ml(this.root,e,this.comparator,!1)}getReverseIterator(){return new ml(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ml(this.root,e,this.comparator,!0)}}class ml{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class yl{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:yl.RED,this.left=null!=i?i:yl.EMPTY,this.right=null!=r?r:yl.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,r){return new yl(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return yl.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return yl.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,yl.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,yl.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ha();if(this.right.isRed())throw ha();const e=this.left.check();if(e!==this.right.check())throw ha();return e+(this.isRed()?0:1)}}yl.EMPTY=null,yl.RED=!0,yl.BLACK=!1,yl.EMPTY=new class{constructor(){this.size=0}get key(){throw ha()}get value(){throw ha()}get color(){throw ha()}get left(){throw ha()}get right(){throw ha()}copy(e,t,n,i,r){return this}insert(e,t,n){return new yl(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class vl{constructor(e){this.comparator=e,this.data=new gl(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new wl(this.data.getIterator())}getIteratorFrom(e){return new wl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof vl))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new vl(this.comparator);return t.data=e,t}}class wl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const bl=new gl(Wa.comparator);function Il(){return bl}const Tl=new gl(Wa.comparator);function El(){return Tl}const _l=new gl(Wa.comparator);const kl=new vl(Wa.comparator);function Al(...e){let t=kl;for(const n of e)t=t.add(n);return t}const Sl=new vl(Ca);class Cl{constructor(e,t){this.databaseId=e,this.C=t}}function Nl(e,t){return e.C?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Rl(e,t){return e.C?t.toBase64():t.toUint8Array()}function Dl(e,t){return Nl(e,t.toTimestamp())}function Ol(e){return da(!!e),Da.fromTimestamp(function(e){const t=Ba(e);return new Ra(t.seconds,t.nanos)}(e))}function Pl(e,t){return function(e){return new Ma(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Ll(e,t){return Pl(e.databaseId,t.path)}function xl(e){const t=function(e){const t=Ma.fromString(e);return da(function(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}(t)),t}(e);return 4===t.length?Ma.emptyPath():function(e){return da(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}(t)}function Ml(e,t,n){return{name:Ll(e,t),fields:n.value.mapValue.fields}}function Ul(e){let t=xl(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){da(1===i);const e=n.from[0];e.allDescendants?r=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=Fl(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new _c($l(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Ka(t)?null:t}(n.limit));let c=null;n.startAt&&(c=Vl(n.startAt));let l=null;return n.endAt&&(l=Vl(n.endAt)),function(e,t,n,i,r,s,o,a){return new Cc(e,t,n,i,r,s,o,a)}(t,r,o,s,a,"F",c,l)}function Fl(e){return e?void 0!==e.unaryFilter?[Bl(e)]:void 0!==e.fieldFilter?[jl(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>Fl(e))).reduce(((e,t)=>e.concat(t))):ha():[]}function Vl(e){const t=!!e.before,n=e.values||[];return new Tc(n,t)}function $l(e){return Fa.fromServerFormat(e.fieldPath)}function jl(e){return fc.create($l(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ha()}}(e.fieldFilter.op),e.fieldFilter.value)}function Bl(e){switch(e.unaryFilter.op){case"IS_NAN":const t=$l(e.unaryFilter.field);return fc.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=$l(e.unaryFilter.field);return fc.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=$l(e.unaryFilter.field);return fc.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=$l(e.unaryFilter.field);return fc.create(r,"!=",{nullValue:"NULL_VALUE"});default:return ha()}}function ql(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class zl{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ha(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new zl(((n,i)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,i)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof zl?t:zl.resolve(t)}catch(e){return zl.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):zl.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):zl.reject(t)}static resolve(e){return new zl(((t,n)=>{t(e)}))}static reject(e){return new zl(((t,n)=>{n(e)}))}static waitFor(e){return new zl(((t,n)=>{let i=0,r=0,s=!1;e.forEach((e=>{++i,e.next((()=>{++r,s&&r===i&&t()}),(e=>n(e)))})),s=!0,r===i&&t()}))}static or(e){let t=zl.resolve(!1);for(const n of e)t=t.next((e=>e?zl.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,i)=>{n.push(t.call(this,e,i))})),this.waitFor(n)}}function Hl(e){return"IndexedDbTransactionError"===e.name}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Kl{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const i=this.mutations[t];i.key.isEqual(e.key)&&tl(i,e,n[t])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&nl(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&nl(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach((t=>{const n=e.get(t.key),i=n;this.applyToLocalView(i),n.isValidDocument()||i.convertToNoDocument(Da.min())}))}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Al())}isEqual(e){return this.batchId===e.batchId&&Na(this.mutations,e.mutations,((e,t)=>rl(e,t)))&&Na(this.baseMutations,e.baseMutations,((e,t)=>rl(e,t)))}}class Gl{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){da(e.mutations.length===n.length);let i=_l;const r=e.mutations;for(let e=0;e<r.length;e++)i=i.insert(r[e].key,n[e].version);return new Gl(e,t,n,i)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Wl{constructor(e){this.Gt=e}}function Jl(e){const t=Ul({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?function(e,t,n){return new Cc(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}(t,t.limit,"L"):t}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Xl{constructor(){this.zt=new Ql}addToCollectionParentIndex(e,t){return this.zt.add(t),zl.resolve()}getCollectionParents(e,t){return zl.resolve(this.zt.getEntries(t))}}class Ql{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new vl(Ma.comparator),r=!i.has(n);return this.index[t]=i.add(n),r}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new vl(Ma.comparator)).toArray()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Yl{constructor(e){this.se=e}next(){return this.se+=2,this.se}static ie(){return new Yl(0)}static re(){return new Yl(-1)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function Zl(e){if(e.code!==pa.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;aa("LocalStore","Unexpectedly lost primary lease")}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class eu{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,i]of n)if(this.equalsFn(t,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(void 0!==i){for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],e))return void(i[n]=[e,t]);i.push([e,t])}else this.inner[n]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return 1===n.length?delete this.inner[t]:n.splice(i,1),!0;return!1}forEach(e){Pa(this.inner,((t,n)=>{for(const[t,i]of n)e(t,i)}))}isEmpty(){return La(this.inner)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
class tu{constructor(e,t,n){this.Je=e,this.An=t,this.Jt=n}Rn(e,t){return this.An.getAllMutationBatchesAffectingDocumentKey(e,t).next((n=>this.Pn(e,t,n)))}Pn(e,t,n){return this.Je.getEntry(e,t).next((e=>{for(const t of n)t.applyToLocalView(e);return e}))}bn(e,t){e.forEach(((e,n)=>{for(const e of t)e.applyToLocalView(n)}))}vn(e,t){return this.Je.getEntries(e,t).next((t=>this.Vn(e,t).next((()=>t))))}Vn(e,t){return this.An.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>this.bn(t,e)))}getDocumentsMatchingQuery(e,t,n){return function(e){return Wa.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.Sn(e,t.path):function(e){return null!==e.collectionGroup}(t)?this.Dn(e,t,n):this.Cn(e,t,n)}Sn(e,t){return this.Rn(e,new Wa(t)).next((e=>{let t=El();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}Dn(e,t,n){const i=t.collectionGroup;let r=El();return this.Jt.getCollectionParents(e,i).next((s=>zl.forEach(s,(s=>{const o=function(e,t){return new Cc(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(i));return this.Cn(e,o,n).next((e=>{e.forEach(((e,t)=>{r=r.insert(e,t)}))}))})).next((()=>r))))}Cn(e,t,n){let i,r;return this.Je.getDocumentsMatchingQuery(e,t,n).next((n=>(i=n,this.An.getAllMutationBatchesAffectingQuery(e,t)))).next((t=>(r=t,this.Nn(e,r,i).next((e=>{i=e;for(const e of r)for(const t of e.mutations){const n=t.key;let r=i.get(n);null==r&&(r=cc.newInvalidDocument(n),i=i.insert(n,r)),nl(t,r,e.localWriteTime),r.isFoundDocument()||(i=i.remove(n))}}))))).next((()=>(i.forEach(((e,n)=>{Lc(t,n)||(i=i.remove(e))})),i)))}Nn(e,t,n){let i=Al();for(const e of t)for(const t of e.mutations)t instanceof al&&null===n.get(t.key)&&(i=i.add(t.key));let r=n;return this.Je.getEntries(e,i).next((e=>(e.forEach(((e,t)=>{t.isFoundDocument()&&(r=r.insert(e,t))})),r)))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class nu{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.kn=n,this.xn=i}static $n(e,t){let n=Al(),i=Al();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:i=i.add(e.doc.key)}return new nu(e,t.fromCache,n,i)}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class iu{Fn(e){this.On=e}getDocumentsMatchingQuery(e,t,n,i){return function(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}(t)||n.isEqual(Da.min())?this.Mn(e,t):this.On.vn(e,i).next((r=>{const s=this.Ln(t,r);return(function(e){return!Ka(e.limit)&&"F"===e.limitType}(t)||function(e){return!Ka(e.limit)&&"L"===e.limitType}(t))&&this.Bn(t.limitType,s,i,n)?this.Mn(e,t):(oa()<=st.DEBUG&&aa("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Pc(t)),this.On.getDocumentsMatchingQuery(e,t,n).next((e=>(s.forEach((t=>{e=e.insert(t.key,t)})),e))))}))}Ln(e,t){let n=new vl(function(e){return(t,n)=>{let i=!1;for(const r of Nc(e)){const e=xc(r,t,n);if(0!==e)return e;i=i||r.field.isKeyField()}return 0}}(e));return t.forEach(((t,i)=>{Lc(e,i)&&(n=n.add(i))})),n}Bn(e,t,n,i){if(n.size!==t.size)return!0;const r="F"===e?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mn(e,t){return oa()<=st.DEBUG&&aa("QueryEngine","Using full collection scan to execute query:",Pc(t)),this.On.getDocumentsMatchingQuery(e,t,Da.min())}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ru{constructor(e,t,n,i){this.persistence=e,this.Un=t,this.k=i,this.qn=new gl(Ca),this.Kn=new eu((e=>hc(e)),dc),this.jn=Da.min(),this.An=e.getMutationQueue(n),this.Qn=e.getRemoteDocumentCache(),this.He=e.getTargetCache(),this.Wn=new tu(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=e.getBundleCache(),this.Un.Fn(this.Wn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.qn)))}}async function su(e,t){const n=fa(e);let i=n.An,r=n.Wn;const s=await n.persistence.runTransaction("Handle user change","readonly",(e=>{let s;return n.An.getAllMutationBatches(e).next((o=>(s=o,i=n.persistence.getMutationQueue(t),r=new tu(n.Qn,i,n.persistence.getIndexManager()),i.getAllMutationBatches(e)))).next((t=>{const n=[],i=[];let o=Al();for(const e of s){n.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return r.vn(e,o).next((e=>({Gn:e,removedBatchIds:n,addedBatchIds:i})))}))}));return n.An=i,n.Wn=r,n.Un.Fn(n.Wn),s}function ou(e,t){const n=fa(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.An.getNextMutationBatchAfterBatchId(e,t))))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class au{constructor(e){this.k=e,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(e,t){return zl.resolve(this.Xn.get(t))}saveBundleMetadata(e,t){var n;return this.Xn.set(t.id,{id:(n=t).id,version:n.version,createTime:Ol(n.createTime)}),zl.resolve()}getNamedQuery(e,t){return zl.resolve(this.Zn.get(t))}saveNamedQuery(e,t){return this.Zn.set(t.name,function(e){return{name:e.name,query:Jl(e.bundledQuery),readTime:Ol(e.readTime)}}(t)),zl.resolve()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class cu{constructor(){this.ts=new vl(lu.es),this.ns=new vl(lu.ss)}isEmpty(){return this.ts.isEmpty()}addReference(e,t){const n=new lu(e,t);this.ts=this.ts.add(n),this.ns=this.ns.add(n)}rs(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.os(new lu(e,t))}cs(e,t){e.forEach((e=>this.removeReference(e,t)))}us(e){const t=new Wa(new Ma([])),n=new lu(t,e),i=new lu(t,e+1),r=[];return this.ns.forEachInRange([n,i],(e=>{this.os(e),r.push(e.key)})),r}hs(){this.ts.forEach((e=>this.os(e)))}os(e){this.ts=this.ts.delete(e),this.ns=this.ns.delete(e)}ls(e){const t=new Wa(new Ma([])),n=new lu(t,e),i=new lu(t,e+1);let r=Al();return this.ns.forEachInRange([n,i],(e=>{r=r.add(e.key)})),r}containsKey(e){const t=new lu(e,0),n=this.ts.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class lu{constructor(e,t){this.key=e,this.fs=t}static es(e,t){return Wa.comparator(e.key,t.key)||Ca(e.fs,t.fs)}static ss(e,t){return Ca(e.fs,t.fs)||Wa.comparator(e.key,t.key)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class uu{constructor(e,t){this.Jt=e,this.referenceDelegate=t,this.An=[],this.ds=1,this.ws=new vl(lu.es)}checkEmpty(e){return zl.resolve(0===this.An.length)}addMutationBatch(e,t,n,i){const r=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const s=new Kl(r,t,n,i);this.An.push(s);for(const t of i)this.ws=this.ws.add(new lu(t.key,r)),this.Jt.addToCollectionParentIndex(e,t.key.path.popLast());return zl.resolve(s)}lookupMutationBatch(e,t){return zl.resolve(this._s(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.gs(n),r=i<0?0:i;return zl.resolve(this.An.length>r?this.An[r]:null)}getHighestUnacknowledgedBatchId(){return zl.resolve(0===this.An.length?-1:this.ds-1)}getAllMutationBatches(e){return zl.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new lu(t,0),i=new lu(t,Number.POSITIVE_INFINITY),r=[];return this.ws.forEachInRange([n,i],(e=>{const t=this._s(e.fs);r.push(t)})),zl.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new vl(Ca);return t.forEach((e=>{const t=new lu(e,0),i=new lu(e,Number.POSITIVE_INFINITY);this.ws.forEachInRange([t,i],(e=>{n=n.add(e.fs)}))})),zl.resolve(this.ys(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let r=n;Wa.isDocumentKey(r)||(r=r.child(""));const s=new lu(new Wa(r),0);let o=new vl(Ca);return this.ws.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===i&&(o=o.add(e.fs)),!0)}),s),zl.resolve(this.ys(o))}ys(e){const t=[];return e.forEach((e=>{const n=this._s(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){da(0===this.ps(t.batchId,"removed")),this.An.shift();let n=this.ws;return zl.forEach(t.mutations,(i=>{const r=new lu(i.key,t.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.ws=n}))}ee(e){}containsKey(e,t){const n=new lu(t,0),i=this.ws.firstAfterOrEqual(n);return zl.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.An.length,zl.resolve()}ps(e,t){return this.gs(e)}gs(e){return 0===this.An.length?0:e-this.An[0].batchId}_s(e){const t=this.gs(e);return t<0||t>=this.An.length?null:this.An[t]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class hu{constructor(e,t){this.Jt=e,this.Ts=t,this.docs=new gl(Wa.comparator),this.size=0}addEntry(e,t,n){const i=t.key,r=this.docs.get(i),s=r?r.size:0,o=this.Ts(t);return this.docs=this.docs.insert(i,{document:t.clone(),size:o,readTime:n}),this.size+=o-s,this.Jt.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return zl.resolve(n?n.document.clone():cc.newInvalidDocument(t))}getEntries(e,t){let n=Il();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.clone():cc.newInvalidDocument(e))})),zl.resolve(n)}getDocumentsMatchingQuery(e,t,n){let i=Il();const r=new Wa(t.path.child("")),s=this.docs.getIteratorFrom(r);for(;s.hasNext();){const{key:e,value:{document:r,readTime:o}}=s.getNext();if(!t.path.isPrefixOf(e.path))break;o.compareTo(n)<=0||Lc(t,r)&&(i=i.insert(r.key,r.clone()))}return zl.resolve(i)}Es(e,t){return zl.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new du(this)}getSize(e){return zl.resolve(this.size)}}class du extends class{constructor(){this.changes=new eu((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}getReadTime(e){const t=this.changes.get(e);return t?t.readTime:Da.min()}addEntry(e,t){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:t})}removeEntry(e,t=null){this.assertNotApplied(),this.changes.set(e,{document:cc.newInvalidDocument(e),readTime:t})}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?zl.resolve(n.document):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}{constructor(e){super(),this.De=e}applyChanges(e){const t=[];return this.changes.forEach(((n,i)=>{i.document.isValidDocument()?t.push(this.De.addEntry(e,i.document,this.getReadTime(n))):this.De.removeEntry(n)})),zl.waitFor(t)}getFromCache(e,t){return this.De.getEntry(e,t)}getAllFromCache(e,t){return this.De.getEntries(e,t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class fu{constructor(e){this.persistence=e,this.Is=new eu((e=>hc(e)),dc),this.lastRemoteSnapshotVersion=Da.min(),this.highestTargetId=0,this.As=0,this.Rs=new cu,this.targetCount=0,this.Ps=Yl.ie()}forEachTarget(e,t){return this.Is.forEach(((e,n)=>t(n))),zl.resolve()}getLastRemoteSnapshotVersion(e){return zl.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return zl.resolve(this.As)}allocateTargetId(e){return this.highestTargetId=this.Ps.next(),zl.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.As&&(this.As=t),zl.resolve()}ce(e){this.Is.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ps=new Yl(t),this.highestTargetId=t),e.sequenceNumber>this.As&&(this.As=e.sequenceNumber)}addTargetData(e,t){return this.ce(t),this.targetCount+=1,zl.resolve()}updateTargetData(e,t){return this.ce(t),zl.resolve()}removeTargetData(e,t){return this.Is.delete(t.target),this.Rs.us(t.targetId),this.targetCount-=1,zl.resolve()}removeTargets(e,t,n){let i=0;const r=[];return this.Is.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Is.delete(s),r.push(this.removeMatchingKeysForTargetId(e,o.targetId)),i++)})),zl.waitFor(r).next((()=>i))}getTargetCount(e){return zl.resolve(this.targetCount)}getTargetData(e,t){const n=this.Is.get(t)||null;return zl.resolve(n)}addMatchingKeys(e,t,n){return this.Rs.rs(t,n),zl.resolve()}removeMatchingKeys(e,t,n){this.Rs.cs(t,n);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach((t=>{r.push(i.markPotentiallyOrphaned(e,t))})),zl.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Rs.us(t),zl.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Rs.ls(t);return zl.resolve(n)}containsKey(e,t){return zl.resolve(this.Rs.containsKey(t))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class pu{constructor(e,t){this.bs={},this.Be=new ka(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=e(this),this.He=new fu(this),this.Jt=new Xl,this.Je=function(e,t){return new hu(e,t)}(this.Jt,(e=>this.referenceDelegate.vs(e))),this.k=new Wl(t),this.Ye=new au(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(e){let t=this.bs[e.toKey()];return t||(t=new uu(this.Jt,this.referenceDelegate),this.bs[e.toKey()]=t),t}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(e,t,n){aa("MemoryPersistence","Starting transaction:",e);const i=new gu(this.Be.next());return this.referenceDelegate.Vs(),n(i).next((e=>this.referenceDelegate.Ss(i).next((()=>e)))).toPromise().then((e=>(i.raiseOnCommittedEvent(),e)))}Ds(e,t){return zl.or(Object.values(this.bs).map((n=>()=>n.containsKey(e,t))))}}class gu extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}{constructor(e){super(),this.currentSequenceNumber=e}}class mu{constructor(e){this.persistence=e,this.Cs=new cu,this.Ns=null}static ks(e){return new mu(e)}get xs(){if(this.Ns)return this.Ns;throw ha()}addReference(e,t,n){return this.Cs.addReference(n,t),this.xs.delete(n.toString()),zl.resolve()}removeReference(e,t,n){return this.Cs.removeReference(n,t),this.xs.add(n.toString()),zl.resolve()}markPotentiallyOrphaned(e,t){return this.xs.add(t.toString()),zl.resolve()}removeTarget(e,t){this.Cs.us(t.targetId).forEach((e=>this.xs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.xs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Vs(){this.Ns=new Set}Ss(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return zl.forEach(this.xs,(n=>{const i=Wa.fromPath(n);return this.$s(e,i).next((e=>{e||t.removeEntry(i)}))})).next((()=>(this.Ns=null,t.apply(e))))}updateLimboDocument(e,t){return this.$s(e,t).next((e=>{e?this.xs.delete(t.toString()):this.xs.add(t.toString())}))}vs(e){return 0}$s(e,t){return zl.or([()=>zl.resolve(this.Cs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ds(e,t)])}}class yu{constructor(){this.activeTargetIds=Sl}Ms(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ls(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vu{constructor(){this.pi=new yu,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.pi.Ms(e),this.Ti[e]||"not-current"}updateQueryState(e,t,n){this.Ti[e]=t}removeLocalQueryTarget(e){this.pi.Ls(e)}isLocalQueryTarget(e){return this.pi.activeTargetIds.has(e)}clearQueryState(e){delete this.Ti[e]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(e){return this.pi.activeTargetIds.has(e)}start(){return this.pi=new yu,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class wu{Ei(e){}shutdown(){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class bu{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.Pi(),this.bi=[],this.vi()}Ei(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){aa("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Pi(){aa("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Iu={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Tu{constructor(e){this.Vi=e.Vi,this.Si=e.Si}Di(e){this.Ci=e}Ni(e){this.ki=e}onMessage(e){this.xi=e}close(){this.Si()}send(e){this.Vi(e)}$i(){this.Ci()}Fi(e){this.ki(e)}Oi(e){this.xi(e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Eu extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.Mi=t+"://"+e.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(e,t,n,i,r){const s=this.Ui(e,t);aa("RestConnection","Sending: ",s,n);const o={};return this.qi(o,i,r),this.Ki(e,s,o,n).then((e=>(aa("RestConnection","Received: ",e),e)),(t=>{throw la("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}ji(e,t,n,i,r){return this.Bi(e,t,n,i,r)}qi(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+ra,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}Ui(e,t){const n=Iu[e];return`${this.Mi}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Ki(e,t,n,i){return new Promise(((r,s)=>{const o=new ta;o.listenOnce(Jo.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Wo.NO_ERROR:const t=o.getResponseJson();aa("Connection","XHR received:",JSON.stringify(t)),r(t);break;case Wo.TIMEOUT:aa("Connection",'RPC "'+e+'" timed out'),s(new ma(pa.DEADLINE_EXCEEDED,"Request time out"));break;case Wo.HTTP_ERROR:const n=o.getStatus();if(aa("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(pa).indexOf(t)>=0?t:pa.UNKNOWN}(e.status);s(new ma(t,e.message))}else s(new ma(pa.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new ma(pa.UNAVAILABLE,"Connection failed."));break;default:ha()}}finally{aa("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(i);o.send(t,"POST",a,n,15)}))}Qi(e,t,n){const i=[this.Mi,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=new qo,s=Mr(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Zo({})),this.qi(o.initMessageHeaders,t,n),Ve()||je()||Fe().indexOf("Electron/")>=0||Be()||Fe().indexOf("MSAppHost/")>=0||$e()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=i.join("");aa("Connection","Creating WebChannel: "+a,o);const c=r.createWebChannel(a,o);let l=!1,u=!1;const h=new Tu({Vi:e=>{u?aa("Connection","Not sending because WebChannel is closed:",e):(l||(aa("Connection","Opening WebChannel transport."),c.open(),l=!0),aa("Connection","WebChannel sending:",e),c.send(e))},Si:()=>c.close()}),d=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return d(c,ea.EventType.OPEN,(()=>{u||aa("Connection","WebChannel transport opened.")})),d(c,ea.EventType.CLOSE,(()=>{u||(u=!0,aa("Connection","WebChannel transport closed"),h.Fi())})),d(c,ea.EventType.ERROR,(e=>{u||(u=!0,la("Connection","WebChannel transport errored:",e),h.Fi(new ma(pa.UNAVAILABLE,"The operation could not be completed")))})),d(c,ea.EventType.MESSAGE,(e=>{var t;if(!u){const n=e.data[0];da(!!n);const i=n,r=i.error||(null===(t=i[0])||void 0===t?void 0:t.error);if(r){aa("Connection","WebChannel received error:",r);const e=r.status;let t=function(e){const t=fl[e];if(void 0!==t)return function(e){if(void 0===e)return ca("GRPC error has no .code"),pa.UNKNOWN;switch(e){case fl.OK:return pa.OK;case fl.CANCELLED:return pa.CANCELLED;case fl.UNKNOWN:return pa.UNKNOWN;case fl.DEADLINE_EXCEEDED:return pa.DEADLINE_EXCEEDED;case fl.RESOURCE_EXHAUSTED:return pa.RESOURCE_EXHAUSTED;case fl.INTERNAL:return pa.INTERNAL;case fl.UNAVAILABLE:return pa.UNAVAILABLE;case fl.UNAUTHENTICATED:return pa.UNAUTHENTICATED;case fl.INVALID_ARGUMENT:return pa.INVALID_ARGUMENT;case fl.NOT_FOUND:return pa.NOT_FOUND;case fl.ALREADY_EXISTS:return pa.ALREADY_EXISTS;case fl.PERMISSION_DENIED:return pa.PERMISSION_DENIED;case fl.FAILED_PRECONDITION:return pa.FAILED_PRECONDITION;case fl.ABORTED:return pa.ABORTED;case fl.OUT_OF_RANGE:return pa.OUT_OF_RANGE;case fl.UNIMPLEMENTED:return pa.UNIMPLEMENTED;case fl.DATA_LOSS:return pa.DATA_LOSS;default:return ha()}}(t)}(e),n=r.message;void 0===t&&(t=pa.INTERNAL,n="Unknown error status: "+e+" with message "+r.message),u=!0,h.Fi(new ma(t,n)),c.close()}else aa("Connection","WebChannel received:",n),h.Oi(n)}})),d(s,Xo.STAT_EVENT,(e=>{e.stat===Qo?aa("Connection","Detected buffering proxy"):e.stat===Yo&&aa("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.$i()}),0),h}}function _u(){return"undefined"!=typeof document?document:null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ku(e){return new Cl(e,!0)}class Au{constructor(e,t,n=1e3,i=1.5,r=6e4){this.Oe=e,this.timerId=t,this.Wi=n,this.Gi=i,this.zi=r,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(e){this.cancel();const t=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),i=Math.max(0,t-n);i>0&&aa("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Hi} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Ji=this.Oe.enqueueAfterDelay(this.timerId,i,(()=>(this.Yi=Date.now(),e()))),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Su extends class{constructor(e,t,n,i,r,s,o,a){this.Oe=e,this.nr=n,this.sr=i,this.ir=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.rr=0,this.ar=null,this.cr=null,this.stream=null,this.ur=new Au(e,t)}hr(){return 1===this.state||5===this.state||this.lr()}lr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&null===this.ar&&(this.ar=this.Oe.enqueueAfterDelay(this.nr,6e4,(()=>this.mr())))}gr(e){this.yr(),this.stream.send(e)}async mr(){if(this.lr())return this.close(0)}yr(){this.ar&&(this.ar.cancel(),this.ar=null)}pr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,t){this.yr(),this.pr(),this.ur.cancel(),this.rr++,4!==e?this.ur.reset():t&&t.code===pa.RESOURCE_EXHAUSTED?(ca(t.toString()),ca("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):t&&t.code===pa.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Tr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ni(t)}Tr(){}auth(){this.state=1;const e=this.Er(this.rr),t=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.rr===t&&this.Ir(e,n)}),(t=>{e((()=>{const e=new ma(pa.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Ar(e)}))}))}Ir(e,t){const n=this.Er(this.rr);this.stream=this.Rr(e,t),this.stream.Di((()=>{n((()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.sr,1e4,(()=>(this.lr()&&(this.state=3),Promise.resolve()))),this.listener.Di())))})),this.stream.Ni((e=>{n((()=>this.Ar(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}dr(){this.state=5,this.ur.Zi((async()=>{this.state=0,this.start()}))}Ar(e){return aa("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Er(e){return t=>{this.Oe.enqueueAndForget((()=>this.rr===e?t():(aa("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}{constructor(e,t,n,i,r,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,s),this.k=r,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(e,t){return this.ir.Qi("Write",e,t)}onMessage(e){if(da(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Vr){this.ur.reset();const t=function(e,t){return e&&e.length>0?(da(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Ol(e.updateTime):Ol(t);return n.isEqual(Da.min())&&(n=Ol(t)),new Qc(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=Ol(e.commitTime);return this.listener.Cr(n,t)}return da(!e.writeResults||0===e.writeResults.length),this.Vr=!0,this.listener.Nr()}kr(){const e={};e.database=function(e){return new Ma(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}(this.k),this.gr(e)}Dr(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>function(e,t){let n;if(t instanceof ol)n={update:Ml(e,t.key,t.value)};else if(t instanceof hl)n={delete:Ll(e,t.key)};else if(t instanceof al)n={update:Ml(e,t.key,t.data),updateMask:ql(t.fieldMask)};else{if(!(t instanceof dl))return ha();n={verify:Ll(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof qc)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof zc)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Kc)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Wc)return{fieldPath:t.field.canonicalString(),increment:n.N};throw ha()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Dl(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:ha()}(e,t.precondition)),n}(this.k,e)))};this.gr(t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Cu extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.ir=n,this.k=i,this.$r=!1}Fr(){if(this.$r)throw new ma(pa.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(e,t,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.ir.Bi(e,t,n,i,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===pa.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ma(pa.UNKNOWN,e.toString())}))}ji(e,t,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.ir.ji(e,t,n,i,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===pa.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ma(pa.UNKNOWN,e.toString())}))}terminate(){this.$r=!0}}class Nu{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Or=0,this.Mr=null,this.Lr=!0}Br(){0===this.Or&&(this.Ur("Unknown"),this.Mr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Mr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve()))))}Kr(e){"Online"===this.state?this.Ur("Unknown"):(this.Or++,this.Or>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Ur("Offline")))}set(e){this.jr(),this.Or=0,"Online"===e&&(this.Lr=!1),this.Ur(e)}Ur(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}qr(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(ca(t),this.Lr=!1):aa("OnlineStateTracker",t)}jr(){null!==this.Mr&&(this.Mr.cancel(),this.Mr=null)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ru{constructor(e,t,n,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=r,this.Hr.Ei((e=>{n.enqueueAndForget((async()=>{Pu(this)&&(aa("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=fa(e);t.Gr.add(4),await Ou(t),t.Jr.set("Unknown"),t.Gr.delete(4),await Du(t)}(this))}))})),this.Jr=new Nu(n,i)}}async function Du(e){if(Pu(e))for(const t of e.zr)await t(!0)}async function Ou(e){for(const t of e.zr)await t(!1)}function Pu(e){return 0===fa(e).Gr.size}async function Lu(e,t,n){if(!Hl(t))throw t;e.Gr.add(1),await Ou(e),e.Jr.set("Offline"),n||(n=()=>function(e){const t=fa(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.He.getLastRemoteSnapshotVersion(e)))}(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{aa("RemoteStore","Retrying IndexedDB access"),await n(),e.Gr.delete(1),await Du(e)}))}function xu(e,t){return t().catch((n=>Lu(e,n,t)))}async function Mu(e){const t=fa(e),n=Hu(t);let i=t.Qr.length>0?t.Qr[t.Qr.length-1].batchId:-1;for(;Uu(t);)try{const e=await ou(t.localStore,i);if(null===e){0===t.Qr.length&&n._r();break}i=e.batchId,Fu(t,e)}catch(e){await Lu(t,e)}Vu(t)&&$u(t)}function Uu(e){return Pu(e)&&e.Qr.length<10}function Fu(e,t){e.Qr.push(t);const n=Hu(e);n.lr()&&n.Sr&&n.Dr(t.mutations)}function Vu(e){return Pu(e)&&!Hu(e).hr()&&e.Qr.length>0}function $u(e){Hu(e).start()}async function ju(e){Hu(e).kr()}async function Bu(e){const t=Hu(e);for(const n of e.Qr)t.Dr(n.mutations)}async function qu(e,t,n){const i=e.Qr.shift(),r=Gl.from(i,t,n);await xu(e,(()=>e.remoteSyncer.applySuccessfulWrite(r))),await Mu(e)}async function zu(e,t){t&&Hu(e).Sr&&await async function(e,t){if(function(e){switch(e){default:return ha();case pa.CANCELLED:case pa.UNKNOWN:case pa.DEADLINE_EXCEEDED:case pa.RESOURCE_EXHAUSTED:case pa.INTERNAL:case pa.UNAVAILABLE:case pa.UNAUTHENTICATED:return!1;case pa.INVALID_ARGUMENT:case pa.NOT_FOUND:case pa.ALREADY_EXISTS:case pa.PERMISSION_DENIED:case pa.FAILED_PRECONDITION:case pa.ABORTED:case pa.OUT_OF_RANGE:case pa.UNIMPLEMENTED:case pa.DATA_LOSS:return!0}}(n=t.code)&&n!==pa.ABORTED){const n=e.Qr.shift();Hu(e).wr(),await xu(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Mu(e)}var n}(e,t),Vu(e)&&$u(e)}function Hu(e){return e.Zr||(e.Zr=function(e,t,n){const i=fa(e);return i.Fr(),new Su(t,i.ir,i.authCredentials,i.appCheckCredentials,i.k,n)}(e.datastore,e.asyncQueue,{Di:ju.bind(null,e),Ni:zu.bind(null,e),Nr:Bu.bind(null,e),Cr:qu.bind(null,e)}),e.zr.push((async t=>{t?(e.Zr.wr(),await Mu(e)):(await e.Zr.stop(),e.Qr.length>0&&(aa("RemoteStore",`Stopping write stream with ${e.Qr.length} pending writes`),e.Qr=[]))}))),e.Zr
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class Ku{constructor(e,t,n,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new ya,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,i,r){const s=Date.now()+n,o=new Ku(e,t,s,i,r);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ma(pa.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gu(e,t){if(ca("AsyncQueue",`${t}: ${e}`),Hl(e))return new ma(pa.UNAVAILABLE,`${t}: ${e}`);throw e}class Wu{constructor(){this.queries=new eu((e=>Oc(e)),Dc),this.onlineState="Unknown",this.io=new Set}}class Ju{constructor(e,t,n,i,r,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.Fo={},this.Oo=new eu((e=>Oc(e)),Dc),this.Mo=new Map,this.Lo=new Set,this.Bo=new gl(Wa.comparator),this.Uo=new Map,this.qo=new cu,this.Ko={},this.jo=new Map,this.Qo=Yl.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return!0===this.Wo}}async function Xu(e,t,n){const i=function(e){const t=fa(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Yu.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Zu.bind(null,t),t}(e);try{const e=await function(e,t){const n=fa(e),i=Ra.now(),r=t.reduce(((e,t)=>e.add(t.key)),Al());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>n.Wn.vn(e,r).next((r=>{s=r;const o=[];for(const e of t){const t=il(e,s.get(e.key));null!=t&&o.push(new al(e.key,t,ac(t.value.mapValue),Yc.exists(!0)))}return n.An.addMutationBatch(e,i,o,t)})))).then((e=>(e.applyToLocalDocumentSet(s),{batchId:e.batchId,changes:s})))}(i.localStore,t);i.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let i=e.Ko[e.currentUser.toKey()];i||(i=new gl(Ca)),i=i.insert(t,n),e.Ko[e.currentUser.toKey()]=i}(i,e.batchId,n),await nh(i,e.changes),await Mu(i.remoteStore)}catch(e){const t=Gu(e,"Failed to persist write");n.reject(t)}}function Qu(e,t,n){const i=fa(e);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const e=[];i.Oo.forEach(((n,i)=>{const r=i.view.ro(t);r.snapshot&&e.push(r.snapshot)})),function(e,t){const n=fa(e);n.onlineState=t;let i=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.ro(t)&&(i=!0)})),i&&function(e){e.io.forEach((e=>{e.next()}))}(n)}(i.eventManager,t),e.length&&i.Fo.Pr(e),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function Yu(e,t){const n=fa(e),i=t.batch.batchId;try{const e=await function(e,t){const n=fa(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const i=t.batch.keys(),r=n.Qn.newChangeBuffer({trackRemovals:!0});return function(e,t,n,i){const r=n.batch,s=r.keys();let o=zl.resolve();return s.forEach((e=>{o=o.next((()=>i.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);da(null!==s),t.version.compareTo(s)<0&&(r.applyToRemoteDocument(t,n),t.isValidDocument()&&i.addEntry(t,n.commitVersion))}))})),o.next((()=>e.An.removeMutationBatch(t,r)))}(n,e,t,r).next((()=>r.apply(e))).next((()=>n.An.performConsistencyCheck(e))).next((()=>n.Wn.vn(e,i)))}))}(n.localStore,t);th(n,i,null),eh(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await nh(n,e)}catch(e){await Zl(e)}}async function Zu(e,t,n){const i=fa(e);try{const e=await function(e,t){const n=fa(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let i;return n.An.lookupMutationBatch(e,t).next((t=>(da(null!==t),i=t.keys(),n.An.removeMutationBatch(e,t)))).next((()=>n.An.performConsistencyCheck(e))).next((()=>n.Wn.vn(e,i)))}))}(i.localStore,t);th(i,t,n),eh(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await nh(i,e)}catch(n){await Zl(n)}}function eh(e,t){(e.jo.get(t)||[]).forEach((e=>{e.resolve()})),e.jo.delete(t)}function th(e,t,n){const i=fa(e);let r=i.Ko[i.currentUser.toKey()];if(r){const e=r.get(t);e&&(n?e.reject(n):e.resolve(),r=r.remove(t)),i.Ko[i.currentUser.toKey()]=r}}async function nh(e,t,n){const i=fa(e),r=[],s=[],o=[];i.Oo.isEmpty()||(i.Oo.forEach(((e,a)=>{o.push(i.Go(a,t,n).then((e=>{if(e){i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),r.push(e);const t=nu.$n(a.targetId,e);s.push(t)}})))})),await Promise.all(o),i.Fo.Pr(r),await async function(e,t){const n=fa(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>zl.forEach(t,(t=>zl.forEach(t.kn,(i=>n.persistence.referenceDelegate.addReference(e,t.targetId,i))).next((()=>zl.forEach(t.xn,(i=>n.persistence.referenceDelegate.removeReference(e,t.targetId,i)))))))))}catch(e){if(!Hl(e))throw e;aa("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.qn.get(t),i=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(i);n.qn=n.qn.insert(t,r)}}}(i.localStore,s))}async function ih(e,t){const n=fa(e);if(!n.currentUser.isEqual(t)){aa("SyncEngine","User change. New user:",t.toKey());const e=await su(n.localStore,t);n.currentUser=t,function(e,t){e.jo.forEach((e=>{e.forEach((e=>{e.reject(new ma(pa.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),e.jo.clear()}(n),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await nh(n,e.Gn)}}class rh{constructor(){this.synchronizeTabs=!1}async initialize(e){this.k=ku(e.databaseInfo.databaseId),this.sharedClientState=this.Jo(e),this.persistence=this.Yo(e),await this.persistence.start(),this.gcScheduler=this.Xo(e),this.localStore=this.Zo(e)}Xo(e){return null}Zo(e){return function(e,t,n,i){return new ru(e,t,n,i)}(this.persistence,new iu,e.initialUser,this.k)}Yo(e){return new pu(mu.ks,this.k)}Jo(e){return new vu}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class sh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Qu(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=ih.bind(null,this.syncEngine),await async function(e,t){const n=fa(e);t?(n.Gr.delete(2),await Du(n)):t||(n.Gr.add(2),await Ou(n),n.Jr.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Wu}createDatastore(e){const t=ku(e.databaseInfo.databaseId),n=(i=e.databaseInfo,new Eu(i));var i;return function(e,t,n,i){return new Cu(e,t,n,i)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,i=e.asyncQueue,r=e=>Qu(this.syncEngine,e,0),s=bu.bt()?new bu:new wu,new Ru(t,n,i,r,s);var t,n,i,r,s}createSyncEngine(e,t){return function(e,t,n,i,r,s,o){const a=new Ju(e,t,n,i,r,s);return o&&(a.Wo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=fa(e);aa("RemoteStore","RemoteStore shutting down."),t.Gr.add(5),await Ou(t),t.Hr.shutdown(),t.Jr.set("Unknown")}(this.remoteStore)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class oh{constructor(e,t,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=ia.UNAUTHENTICATED,this.clientId=Sa.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{aa("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(()=>Promise.resolve()))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ma(pa.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ya;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Gu(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function ah(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){return e.offlineComponents||(aa("FirestoreClient","Using default OfflineComponentProvider"),await async function(e,t){e.asyncQueue.verifyOperationInProgress(),aa("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener((async e=>{i.isEqual(e)||(await su(t.localStore,e),i=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}(e,new rh)),e.offlineComponents}(e);aa("FirestoreClient","Initializing OnlineComponentProvider");const i=await e.getConfiguration();await t.initialize(n,i),e.setCredentialChangeListener((e=>async function(e,t){const n=fa(e);n.asyncQueue.verifyOperationInProgress(),aa("RemoteStore","RemoteStore received new credentials");const i=Pu(n);n.Gr.add(3),await Ou(n),i&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Gr.delete(3),await Du(n)}(t.remoteStore,e))),e.onlineComponents=t}function ch(e){return async function(e){return e.onlineComponents||(aa("FirestoreClient","Using default OnlineComponentProvider"),await ah(e,new sh)),e.onlineComponents}(e).then((e=>e.syncEngine))}class lh{constructor(e,t,n,i,r,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class uh{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof uh&&e.projectId===this.projectId&&e.database===this.database}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const hh=new Map;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function dh(e,t,n){if(!n)throw new ma(pa.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function fh(e){if(!Wa.isDocumentKey(e))throw new ma(pa.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ph(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":ha()}function gh(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new ma(pa.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ph(e);throw new ma(pa.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class mh{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new ma(pa.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new ma(pa.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,i){if(!0===t&&!0===i)throw new ma(pa.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class yh{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mh({}),this._settingsFrozen=!1,e instanceof uh?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new ma(pa.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new uh(e.options.projectId)}(e))}get app(){if(!this._app)throw new ma(pa.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new ma(pa.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mh(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new wa;switch(e.type){case"gapi":const t=e.client;return da(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new Ta(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new ma(pa.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=hh.get(e);t&&(aa("ComponentProvider","Removing Datastore"),hh.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class vh{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bh(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vh(this.firestore,e,this._key)}}class wh{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new wh(this.firestore,e,this._query)}}class bh extends wh{constructor(e,t,n){super(e,t,function(e){return new Cc(e)}(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vh(this.firestore,null,new Wa(e))}withConverter(e){return new bh(this.firestore,e,this._path)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Ih{constructor(){this.ma=Promise.resolve(),this.ga=[],this.ya=!1,this.pa=[],this.Ta=null,this.Ea=!1,this.Ia=!1,this.Aa=[],this.ur=new Au(this,"async_queue_retry"),this.Ra=()=>{const e=_u();e&&aa("AsyncQueue","Visibility state changed to "+e.visibilityState),this.ur.er()};const e=_u();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Ra)}get isShuttingDown(){return this.ya}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pa(),this.ba(e)}enterRestrictedMode(e){if(!this.ya){this.ya=!0,this.Ia=e||!1;const t=_u();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Ra)}}enqueue(e){if(this.Pa(),this.ya)return new Promise((()=>{}));const t=new ya;return this.ba((()=>this.ya&&this.Ia?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.ga.push(e),this.va())))}async va(){if(0!==this.ga.length){try{await this.ga[0](),this.ga.shift(),this.ur.reset()}catch(e){if(!Hl(e))throw e;aa("AsyncQueue","Operation failed with retryable error: "+e)}this.ga.length>0&&this.ur.Zi((()=>this.va()))}}ba(e){const t=this.ma.then((()=>(this.Ea=!0,e().catch((e=>{this.Ta=e,this.Ea=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e);throw ca("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Ea=!1,e))))));return this.ma=t,t}enqueueAfterDelay(e,t,n){this.Pa(),this.Aa.indexOf(e)>-1&&(t=0);const i=Ku.createAndSchedule(this,e,t,n,(e=>this.Va(e)));return this.pa.push(i),i}Pa(){this.Ta&&ha()}verifyOperationInProgress(){}async Sa(){let e;do{e=this.ma,await e}while(e!==this.ma)}Da(e){for(const t of this.pa)if(t.timerId===e)return!0;return!1}Ca(e){return this.Sa().then((()=>{this.pa.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.pa)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Sa()}))}Na(e){this.Aa.push(e)}Va(e){const t=this.pa.indexOf(e);this.pa.splice(t,1)}}class Th extends yh{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new Ih,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Eh(this),this._firestoreClient.terminate()}}function Eh(e){var t;const n=e._freezeSettings(),i=function(e,t,n,i){return new lh(e,t,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new oh(e._authCredentials,e._appCheckCredentials,e._queue,i)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
     */class _h{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new ma(pa.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fa(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class kh{constructor(e){this._byteString=e}static fromBase64String(e){try{return new kh($a.fromBase64String(e))}catch(e){throw new ma(pa.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new kh($a.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ah{constructor(e){this._methodName=e}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Sh{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ma(pa.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ma(pa.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ca(this._lat,e._lat)||Ca(this._long,e._long)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Ch=/^__.*__$/;class Nh{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new al(e,this.data,this.fieldMask,t,this.fieldTransforms):new ol(e,this.data,t,this.fieldTransforms)}}function Rh(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ha()}}class Dh{constructor(e,t,n,i,r,s){this.settings=e,this.databaseId=t,this.k=n,this.ignoreUndefinedProperties=i,void 0===r&&this.ka(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get xa(){return this.settings.xa}$a(e){return new Dh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Fa(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.$a({path:n,Oa:!1});return i.Ma(e),i}La(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.$a({path:n,Oa:!1});return i.ka(),i}Ba(e){return this.$a({path:void 0,Oa:!0})}Ua(e){return jh(e,this.settings.methodName,this.settings.qa||!1,this.path,this.settings.Ka)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}ka(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ma(this.path.get(e))}Ma(e){if(0===e.length)throw this.Ua("Document fields must not be empty");if(Rh(this.xa)&&Ch.test(e))throw this.Ua('Document fields cannot begin and end with "__"')}}class Oh{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.k=n||ku(e)}ja(e,t,n,i=!1){return new Dh({xa:e,methodName:t,Ka:n,path:Fa.emptyPath(),Oa:!1,qa:i},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function Ph(e){const t=e._freezeSettings(),n=ku(e._databaseId);return new Oh(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Lh(e,t,n,i,r,s={}){const o=e.ja(s.merge||s.mergeFields?2:0,t,n,r);Fh("Data must be an object, but it was:",o,i);const a=Mh(i,o);let c,l;if(s.merge)c=new Va(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const i of s.mergeFields){const r=Vh(t,i,n);if(!o.contains(r))throw new ma(pa.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);Bh(e,r)||e.push(r)}c=new Va(e),l=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,l=o.fieldTransforms;return new Nh(new oc(a),c,l)}function xh(e,t){if(Uh(e=et(e)))return Fh("Unsupported field value:",t,e),Mh(e,t);if(e instanceof Ah)return function(e,t){if(!Rh(t.xa))throw t.Ua(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Ua(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Oa&&4!==t.xa)throw t.Ua("Nested arrays are not supported");return function(e,t){const n=[];let i=0;for(const r of e){let e=xh(r,t.Ba(i));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),i++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=et(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Fc(t.k,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Ra.fromDate(e);return{timestampValue:Nl(t.k,n)}}if(e instanceof Ra){const n=new Ra(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Nl(t.k,n)}}if(e instanceof Sh)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof kh)return{bytesValue:Rl(t.k,e._byteString)};if(e instanceof vh){const n=t.databaseId,i=e.firestore._databaseId;if(!i.isEqual(n))throw t.Ua(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Pl(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Ua(`Unsupported field value: ${ph(e)}`)}(e,t)}function Mh(e,t){const n={};return La(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Pa(e,((e,i)=>{const r=xh(i,t.Fa(e));null!=r&&(n[e]=r)})),{mapValue:{fields:n}}}function Uh(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Ra||e instanceof Sh||e instanceof kh||e instanceof vh||e instanceof Ah)}function Fh(e,t,n){if(!Uh(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const i=ph(n);throw"an object"===i?t.Ua(e+" a custom object"):t.Ua(e+" "+i)}}function Vh(e,t,n){if((t=et(t))instanceof _h)return t._internalPath;if("string"==typeof t)return function(e,t,n){if(t.search($h)>=0)throw jh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new _h(...t.split("."))._internalPath}catch(i){throw jh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}(e,t);throw jh("Field path arguments must be of type string or FieldPath.",e,!1,void 0,n)}const $h=new RegExp("[~\\*/\\[\\]]");function jh(e,t,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new ma(pa.INVALID_ARGUMENT,a+e+c)}function Bh(e,t){return e.some((e=>e.isEqual(t)))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function qh(e,t,n){e=gh(e,vh);const i=gh(e.firestore,Th),r=function(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}(e.converter,t,n);return function(e,t){return function(e,t){const n=new ya;return e.asyncQueue.enqueueAndForget((async()=>Xu(await ch(e),t,n))),n.promise}(function(e){return e._firestoreClient||Eh(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}(e),t)}(i,[Lh(Ph(i),"setDoc",e._key,r,null!==e.converter,n).toMutation(e._key,Yc.none())])}
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
function zh(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}function Hh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}!function(e,t=!0){ra="9.6.1",bt(new tt("firestore",((e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=new Th(i,new ba(e.getProvider("auth-internal")),new _a(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),r._setSettings(n),r}),"PUBLIC")),At(na,"3.4.1",e),At(na,"3.4.1","esm2017")}();const Kh=Hh,Gh=new ze("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Wh=new ut("@firebase/auth");function Jh(e,...t){Wh.logLevel<=st.ERROR&&Wh.error(`Auth (9.6.1): ${e}`,...t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Xh(e,...t){throw Yh(e,...t)}function Qh(e,...t){return Yh(e,...t)}function Yh(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return Gh.create(e,...t)}function Zh(e,t,...n){if(!e)throw Yh(t,...n)}function ed(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Jh(t),new Error(t)}function td(e,t){e||ed(t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const nd=new Map;function id(e){td(e instanceof Function,"Expected a class definition");let t=nd.get(e);return t?(td(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,nd.set(e,t),t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
function rd(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function sd(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function od(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==sd()&&"https:"!==sd()&&!$e()&&!("connection"in navigator)||navigator.onLine}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class ad{constructor(e,t){this.shortDelay=e,this.longDelay=t,td(t>e,"Short delay should be less than long delay!"),this.isMobile=Ve()||je()}get(){return od()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function cd(e,t){td(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ld{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void ed("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void ed("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void ed("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ud={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},hd=new ad(3e4,6e4);
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function dd(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function fd(e,t,n,i,r={}){return pd(e,r,(async()=>{let r={},s={};i&&("GET"===t?s=i:r={body:JSON.stringify(i)});const o=We(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),ld.fetch()(md(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))}))}async function pd(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},ud),t);try{const t=new yd(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw vd(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw vd(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw vd(e,"email-already-in-use",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw function(e,t,n){const i=Object.assign(Object.assign({},Kh()),{[t]:n});return new ze("auth","Firebase",i).create(t,{appName:e.name})}(e,a,o);Xh(e,a)}}catch(t){if(t instanceof qe)throw t;Xh(e,"network-request-failed")}}async function gd(e,t,n,i,r={}){const s=await fd(e,t,n,i,r);return"mfaPendingCredential"in s&&Xh(e,"multi-factor-auth-required",{_serverResponse:s}),s}function md(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?cd(e.config,r):`${e.config.apiScheme}://${r}`}class yd{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Qh(this.auth,"timeout"))),hd.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function vd(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=Qh(e,t,i);return r.customData._tokenResponse=n,r}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
function wd(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}function bd(e){return 1e3*Number(e)}function Id(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return Jh("JWT malformed, contained fewer than 3 sections"),null;try{const e=function(e){try{return Me.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null}(n);return e?JSON.parse(e):(Jh("Failed to decode base64 JWT payload"),null)}catch(e){return Jh("Caught error parsing JWT payload as JSON",e),null}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function Td(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof qe&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Ed{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class _d{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=wd(this.lastLoginAt),this.creationTime=wd(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function kd(e){var t;const n=e.auth,i=await e.getIdToken(),r=await Td(e,async function(e,t){return fd(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));Zh(null==r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=zh(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const u=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new _d(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Ad{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Zh(e.idToken,"internal-error"),Zh(void 0!==e.idToken,"internal-error"),Zh(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Id(e);return Zh(t,"internal-error"),Zh(void 0!==t.exp,"internal-error"),Zh(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Zh(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function(e,t){const n=await pd(e,{},(async()=>{const n=We({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,s=md(e,i,"/v1/token",`key=${r}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",ld.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new Ad;return n&&(Zh("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(Zh("string"==typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(Zh("number"==typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ad,this.toJSON())}_performRefresh(){return ed("not implemented")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Sd(e,t){Zh("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Cd{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=zh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Ed(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.metadata=new _d(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Td(this,this.stsTokenManager.getToken(this.auth,e));return Zh(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=et(e),i=await n.getIdToken(t),r=Id(i);Zh(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s="object"==typeof r.firebase?r.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:wd(bd(r.auth_time)),issuedAtTime:wd(bd(r.iat)),expirationTime:wd(bd(r.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=et(e);await kd(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Zh(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Cd(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Zh(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await kd(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Td(this,async function(e,t){return fd(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:I,stsTokenManager:T}=t;Zh(v&&T,e,"internal-error");const E=Ad.fromJSON(this.name,T);Zh("string"==typeof v,e,"internal-error"),Sd(u,e.name),Sd(h,e.name),Zh("boolean"==typeof w,e,"internal-error"),Zh("boolean"==typeof b,e,"internal-error"),Sd(d,e.name),Sd(f,e.name),Sd(p,e.name),Sd(g,e.name),Sd(m,e.name),Sd(y,e.name);const _=new Cd({uid:v,auth:e,email:h,emailVerified:w,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:m,lastLoginAt:y});return I&&Array.isArray(I)&&(_.providerData=I.map((e=>Object.assign({},e)))),g&&(_._redirectEventId=g),_}static async _fromIdTokenResponse(e,t,n=!1){const i=new Ad;i.updateFromServerResponse(t);const r=new Cd({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await kd(r),r}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Nd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Nd.type="NONE";const Rd=Nd;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Dd(e,t,n){return`firebase:${e}:${t}:${n}`}class Od{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=Dd(this.userKey,i.apiKey,r),this.fullPersistenceKey=Dd("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cd._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Od(id(Rd),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||id(Rd);const s=Dd(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const i=Cd._fromJSON(e,t);n!==r&&(o=i),r=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new Od(r,e,n)):new Od(r,e,n)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Pd(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Ud(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ld(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Vd(t))return"Blackberry";if($d(t))return"Webos";if(xd(t))return"Safari";if((t.includes("chrome/")||Md(t))&&!t.includes("edge/"))return"Chrome";if(Fd(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Ld(e=Fe()){return/firefox\//i.test(e)}function xd(e=Fe()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Md(e=Fe()){return/crios\//i.test(e)}function Ud(e=Fe()){return/iemobile/i.test(e)}function Fd(e=Fe()){return/android/i.test(e)}function Vd(e=Fe()){return/blackberry/i.test(e)}function $d(e=Fe()){return/webos/i.test(e)}function jd(e=Fe()){return/iphone|ipad|ipod/i.test(e)}function Bd(e=Fe()){return jd(e)||Fd(e)||$d(e)||Vd(e)||/windows phone/i.test(e)||Ud(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function qd(e,t=[]){let n;switch(e){case"Browser":n=Pd(Fe());break;case"Worker":n=`${Pd(Fe())}-${e}`;break;default:n=e}return`${n}/JsCore/9.6.1/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class zd{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kd(this),this.idTokenSubscription=new Kd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gh,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=id(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Od.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);i&&i!==r||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(Zh(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await kd(e)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?et(e):null;return t&&Zh(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&Zh(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(id(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ze("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&id(e)||this._popupRedirectResolver;Zh(t,this,"argument-error"),this.redirectPersistenceManager=await Od.create(this,[id(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return Zh(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Zh(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function Hd(e){return et(e)}class Kd{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new Qe(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return Zh(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Gd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ed("not implemented")}_getIdTokenResponse(e){return ed("not implemented")}_linkToIdToken(e,t){return ed("not implemented")}_getReauthenticationResolver(e){return ed("not implemented")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Wd extends Gd{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Wd(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Wd(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
return async function(e,t){return gd(e,"POST","/v1/accounts:signInWithPassword",dd(e,t))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return gd(e,"POST","/v1/accounts:signInWithEmailLink",dd(e,t))}(e,{email:this._email,oobCode:this._password});default:Xh(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return async function(e,t){return fd(e,"POST","/v1/accounts:update",t)}(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return gd(e,"POST","/v1/accounts:signInWithEmailLink",dd(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Xh(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function Jd(e,t){return gd(e,"POST","/v1/accounts:signInWithIdp",dd(e,t))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Xd extends Gd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Xd(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Xh("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=zh(t,["providerId","signInMethod"]);if(!n||!i)return null;const s=new Xd(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){return Jd(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Jd(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Jd(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=We(t)}return e}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Qd{constructor(e){var t,n,i,r,s,o;const a=Je(Xe(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);Zh(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=Je(Xe(e)).link,n=t?Je(Xe(t)).deep_link_id:null,i=Je(Xe(e)).deep_link_id;return(i?Je(Xe(i)).link:null)||i||n||t||e}(e);try{return new Qd(t)}catch(e){return null}}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Yd{constructor(){this.providerId=Yd.PROVIDER_ID}static credential(e,t){return Wd._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Qd.parseLink(t);return Zh(n,"argument-error"),Wd._fromEmailAndCode(e,n.code,n.tenantId)}}Yd.PROVIDER_ID="password",Yd.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Yd.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Zd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ef extends Zd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class tf extends ef{constructor(){super("facebook.com")}static credential(e){return Xd._fromParams({providerId:tf.PROVIDER_ID,signInMethod:tf.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tf.credentialFromTaggedObject(e)}static credentialFromError(e){return tf.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return tf.credential(e.oauthAccessToken)}catch(e){return null}}}tf.FACEBOOK_SIGN_IN_METHOD="facebook.com",tf.PROVIDER_ID="facebook.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class nf extends ef{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Xd._fromParams({providerId:nf.PROVIDER_ID,signInMethod:nf.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return nf.credentialFromTaggedObject(e)}static credentialFromError(e){return nf.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return nf.credential(t,n)}catch(e){return null}}}nf.GOOGLE_SIGN_IN_METHOD="google.com",nf.PROVIDER_ID="google.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class rf extends ef{constructor(){super("github.com")}static credential(e){return Xd._fromParams({providerId:rf.PROVIDER_ID,signInMethod:rf.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rf.credentialFromTaggedObject(e)}static credentialFromError(e){return rf.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return rf.credential(e.oauthAccessToken)}catch(e){return null}}}rf.GITHUB_SIGN_IN_METHOD="github.com",rf.PROVIDER_ID="github.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class sf extends ef{constructor(){super("twitter.com")}static credential(e,t){return Xd._fromParams({providerId:sf.PROVIDER_ID,signInMethod:sf.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return sf.credentialFromTaggedObject(e)}static credentialFromError(e){return sf.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return sf.credential(t,n)}catch(e){return null}}}sf.TWITTER_SIGN_IN_METHOD="twitter.com",sf.PROVIDER_ID="twitter.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class of{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const r=await Cd._fromIdTokenResponse(e,n,i),s=af(n);return new of({user:r,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=af(n);return new of({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function af(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class cf extends qe{constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,cf.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new cf(e,t,n,i)}}function lf(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw cf._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function uf(e,t,n=!1){const i="signIn",r=await lf(e,i,t),s=await of._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function hf(e,t,n){const i=Hd(e),r=await
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function(e,t){return gd(e,"POST","/v1/accounts:signUp",dd(e,t))}(i,{returnSecureToken:!0,email:t,password:n}),s=await of._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}function df(e,t,n){return async function(e,t){return uf(Hd(e),t)}(et(e),Yd.credential(t,n))}const ff="__sak";
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class pf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ff,"1"),this.storage.removeItem(ff),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class gf extends pf{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Fe();return xd(e)||jd(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Bd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);Be()&&10===document.documentMode&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}gf.type="LOCAL";const mf=gf;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class yf extends pf{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}yf.type="SESSION";const vf=yf;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
class wf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new wf(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async e=>e(t.origin,r))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function bf(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */wf.receivers=[];class If{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const c=bf("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(l),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Tf(){return window}
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
function Ef(){return void 0!==Tf().WorkerGlobalScope&&"function"==typeof Tf().importScripts}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const _f="firebaseLocalStorageDb",kf="firebaseLocalStorage",Af="fbase_key";class Sf{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Cf(e,t){return e.transaction([kf],t?"readwrite":"readonly").objectStore(kf)}function Nf(){const e=indexedDB.open(_f,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(kf,{keyPath:Af})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(kf)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(_f);return new Sf(e).toPromise()}(),t(await Nf()))}))}))}async function Rf(e,t,n){const i=Cf(e,!0).put({[Af]:t,value:n});return new Sf(i).toPromise()}function Df(e,t){const n=Cf(e,!0).delete(t);return new Sf(n).toPromise()}class Of{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Nf()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ef()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wf._getInstance(Ef()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new If(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&function(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nf();return await Rf(e,ff,"1"),await Df(e,ff),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Rf(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Cf(e,!1).get(t),i=await new Sf(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Df(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Cf(e,!1).getAll();return new Sf(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Of.type="LOCAL";const Pf=Of;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Lf(e){return new Promise(((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=Qh("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",function(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}().appendChild(i)}))}new ad(3e4,6e4);
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class xf extends Gd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Jd(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Jd(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Jd(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Mf(e){return uf(e.auth,new xf(e),e.bypassAuthState)}function Uf(e){const{auth:t,user:n}=e;return Zh(n,t,"internal-error"),
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const s=await Td(e,lf(i,r,t,e),n);Zh(s.idToken,i,"internal-error");const o=Id(s.idToken);Zh(o,i,"internal-error");const{sub:a}=o;return Zh(e.uid===a,i,"user-mismatch"),of._forOperation(e,r,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Xh(i,"user-mismatch"),e}}(n,new xf(e),e.bypassAuthState)}async function Ff(e){const{auth:t,user:n}=e;return Zh(n,t,"internal-error"),async function(e,t,n=!1){const i=await Td(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return of._forOperation(e,"link",i)}(n,new xf(e),e.bypassAuthState)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Vf{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Mf;case"linkViaPopup":case"linkViaRedirect":return Ff;case"reauthViaPopup":case"reauthViaRedirect":return Uf;default:Xh(this.auth,"internal-error")}}resolve(e){td(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){td(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const $f=new ad(2e3,1e4);class jf extends Vf{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,jf.currentPopupAction&&jf.currentPopupAction.cancel(),jf.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Zh(e,this.auth,"internal-error"),e}async onExecution(){td(1===this.filter.length,"Popup operations only handle one event");const e=bf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Qh(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Qh(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jf.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Qh(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,$f.get())};e()}}jf.currentPopupAction=null;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Bf="pendingRedirect",qf=new Map;class zf extends Vf{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=qf.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return Dd(Bf,e.config.apiKey,e.name)}(t),i=function(e){return id(e._redirectPersistence)}(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}qf.set(this.auth._key(),e)}return this.bypassAuthState||qf.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Hf(e,t,n=!1){const i=Hd(e),r=
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
function(e,t){return t?id(t):(Zh(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(i,t),s=new zf(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Kf{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wf(e);default:return!1}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Wf(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Qh(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gf(e))}saveEventToCache(e){this.cachedEventUids.add(Gf(e)),this.lastProcessedEventTime=Date.now()}}function Gf(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Wf({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Jf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Xf=/^https?/;async function Qf(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return fd(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Yf(e))return}catch(e){}Xh(e,"unauthorized-domain")}function Yf(e){const t=rd(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!Xf.test(n))return!1;if(Jf.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
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
     */const Zf=new ad(3e4,6e4);function ep(){const e=Tf().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function tp(e){return new Promise(((t,n)=>{var i,r,s;function o(){ep(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ep(),n(Qh(e,"network-request-failed"))},timeout:Zf.get()})}if(null===(r=null===(i=Tf().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Tf().gapi)||void 0===s?void 0:s.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Tf()[t]=()=>{gapi.load?o():n(Qh(e,"network-request-failed"))},Lf(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw np=null,e}))}let np=null;
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
const ip=new ad(5e3,15e3),rp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function op(e){const t=e.config;Zh(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?cd(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:_t},r=sp.get(e.config.apiHost);r&&(i.eid=r);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${We(i).slice(1)}`}async function ap(e){const t=await function(e){return np=np||tp(e),np}(e),n=Tf().gapi;return Zh(n,e,"internal-error"),t.open({where:document.body,url:op(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rp,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=Qh(e,"network-request-failed"),s=Tf().setTimeout((()=>{i(r)}),ip.get());function o(){Tf().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{i(r)}))}))))}
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
     */const cp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class lp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function up(e,t,n,i=500,r=600){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},cp),{width:i.toString(),height:r.toString(),top:s,left:o}),l=Fe().toLowerCase();n&&(a=Md(l)?"_blank":n),Ld(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Fe()){var t;return jd(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
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
     */(t||"",a),new lp(null);const h=window.open(t||"",a,u);Zh(h,e,"popup-blocked");try{h.focus()}catch(e){}return new lp(h)}const hp="__/auth/handler",dp="emulator/auth/handler";function fp(e,t,n,i,r,s){Zh(e.config.authDomain,e,"auth-domain-config-required"),Zh(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:_t,eventId:r};if(t instanceof Zd){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof ef){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${hp}`;return cd(e,dp)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)}?${We(a).slice(1)}`}const pp="webStorageSupport";const gp=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vf,this._completeRedirectFn=Hf}async _openPopup(e,t,n,i){var r;td(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return up(e,fp(e,t,n,rd(),i),bf())}async _openRedirect(e,t,n,i){var r;return await this._originValidation(e),r=fp(e,t,n,rd(),i),Tf().location.href=r,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(td(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await ap(e),n=new Kf(e);return t.register("authEvent",(t=>{Zh(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(pp,{type:pp},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&t(!!r),Xh(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Qf(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Bd()||xd()||jd()}};var mp,yp="@firebase/auth",vp="0.19.4";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class wp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Zh(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
function bp(e=kt()){const t=It(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=It(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(Ke(n.getOptions(),null!=t?t:{}))return e;Xh(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:gp,persistence:[Pf,mf,vf]})}function Ip(e){e?setTimeout((()=>{window.location.href="/"}),e):window.location.href="/"}mp="Browser",bt(new tt("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:r}=n.options;return(e=>{Zh(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),Zh(!(null==r?void 0:r.includes(":")),"argument-error",{appName:e.name});const n={apiKey:i,authDomain:r,clientPlatform:mp,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qd(mp)},s=new zd(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(id);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),bt(new tt("auth-internal",(e=>(e=>new wp(e))(Hd(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),At(yp,vp,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(mp)),At(yp,vp,"esm2017");const Tp={email:"",numGames:0,avgWPM:0,matchHistory:[],matchHistoryTime:[],uid:""};let Ep,_p,kp;const Ap=window.sessionStorage,Sp="user";function Cp(){Ep=function(e,t={}){"object"!=typeof t&&(t={name:t});const n=Object.assign({name:gt,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw Tt.create("bad-app-name",{appName:String(i)});const r=yt.get(i);if(r){if(Ke(e,r.options)&&Ke(n,r.config))return r;throw Tt.create("duplicate-app",{appName:i})}const s=new rt(i);for(const e of vt.values())s.addComponent(e);const o=new Et(e,n,s);return yt.set(i,o),o}({apiKey:"AIzaSyAcfFLGAnLbwIUCfyCYgayBl2oPvbu5RFQ",authDomain:"perfect-type.firebaseapp.com",projectId:"perfect-type",storageBucket:"perfect-type.appspot.com",messagingSenderId:"358376646912",appId:"1:358376646912:web:d750e4f6970556a8072be5",measurementId:"G-MDGFNKMNEC"}),Bn(Ep),_p=bp(),kp=function(e=kt()){return It(e,"firestore").getImmediate()}()}function Np(){return null!=function(){const e=Ap.getItem(Sp);return null==e?null:e.length>0?JSON.parse(e):null}()}async function Rp(e,t){try{const n=await hf(_p,e,t);Ap.setItem(Sp,JSON.stringify(n.user));let i=Object.assign({},Tp);return i.uid=n.user.uid,i.email=n.user.email,await async function(e,t,n){const i=function(e,t,...n){if(e=et(e),1===arguments.length&&(t=Sa.A()),dh("doc","path",t),e instanceof yh){const i=Ma.fromString(t,...n);return fh(i),new vh(e,null,new Wa(i))}{if(!(e instanceof vh||e instanceof bh))throw new ma(pa.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(Ma.fromString(t,...n));return fh(i),new vh(e.firestore,e instanceof bh?e.converter:null,new Wa(i))}}(kp,e,t);return await qh(i,n),n}("users",i.uid,i),n.user}catch(e){return console.log(e),null}}function Dp(t){let n,i,r,s,o,u,p;return{c(){n=h("div"),i=h("label"),r=d(t[1]),s=f(),o=h("input"),m(i,"for",t[2]),m(o,"id",t[2]),m(o,"type",t[4]),m(o,"name",t[2]),m(o,"autocomplete",t[3]),o.value=t[0],m(n,"class","input-container")},m(e,l){c(e,n,l),a(n,i),a(i,r),a(n,s),a(n,o),u||(p=g(o,"input",t[5]),u=!0)},p(e,[t]){2&t&&y(r,e[1]),4&t&&m(i,"for",e[2]),4&t&&m(o,"id",e[2]),16&t&&m(o,"type",e[4]),4&t&&m(o,"name",e[2]),8&t&&m(o,"autocomplete",e[3]),1&t&&o.value!==e[0]&&(o.value=e[0])},i:e,o:e,d(e){e&&l(n),u=!1,p()}}}function Op(e,t,n){let{value:i=""}=t,{text:r}=t,{id:s}=t,{autocomplete:o}=t,{type:a="text"}=t;return e.$$set=e=>{"value"in e&&n(0,i=e.value),"text"in e&&n(1,r=e.text),"id"in e&&n(2,s=e.id),"autocomplete"in e&&n(3,o=e.autocomplete),"type"in e&&n(4,a=e.type)},[i,r,s,o,a,e=>{n(0,i=e.target.value),function(e,t){let n=e.target.parentNode.querySelector("label");e.target.value.length>0?(n.style.top="-10px",n.style.fontSize="1em"):(n.style.top="10px",n.style.fontSize="1.5em")}(e)}]}class Pp extends H{constructor(e){super(),z(this,e,Op,Dp,s,{value:0,text:1,id:2,autocomplete:3,type:4})}}function Lp(e){let t,n,i,r,s,o,u,d,p,y,v,w,b,I,E,_,k,A,S,N;function R(t){e[6](t)}let D={text:"email",id:"email",type:"email",autocomplete:"email"};function O(t){e[7](t)}void 0!==e[1]&&(D.value=e[1]),u=new Pp({props:D}),T.push((()=>V(u,"value",R)));let P={text:"password",id:"password",type:"password",autocomplete:"current-password"};return void 0!==e[2]&&(P.value=e[2]),y=new Pp({props:P}),T.push((()=>V(y,"value",O))),{c(){t=h("form"),n=h("br"),i=f(),r=h("br"),s=f(),o=h("div"),$(u.$$.fragment),p=f(),$(y.$$.fragment),w=f(),b=h("br"),I=f(),E=h("br"),_=f(),k=h("button"),k.textContent="log in",m(o,"id","form-container")},m(l,h){c(l,t,h),a(t,n),a(t,i),a(t,r),a(t,s),a(t,o),j(u,o,null),a(o,p),j(y,o,null),a(t,w),a(t,b),a(t,I),a(t,E),a(t,_),a(t,k),A=!0,S||(N=g(t,"submit",e[3]),S=!0)},p(e,t){const n={};!d&&2&t&&(d=!0,n.value=e[1],C((()=>d=!1))),u.$set(n);const i={};!v&&4&t&&(v=!0,i.value=e[2],C((()=>v=!1))),y.$set(i)},i(e){A||(U(u.$$.fragment,e),U(y.$$.fragment,e),A=!0)},o(e){F(u.$$.fragment,e),F(y.$$.fragment,e),A=!1},d(e){e&&l(t),B(u),B(y),S=!1,N()}}}function xp(t){let n;return{c(){n=h("p"),n.textContent="logged in! redirecting to main..."},m(e,t){c(e,n,t)},p:e,i:e,o:e,d(e){e&&l(n)}}}function Mp(e){let t,n,i,r,s,o;const u=[xp,Lp],d=[];function p(e,t){return e[0]?0:1}return r=p(e),s=d[r]=u[r](e),{c(){t=h("main"),n=h("h1"),n.textContent="log in",i=f(),s.c()},m(e,s){c(e,t,s),a(t,n),a(t,i),d[r].m(t,null),o=!0},p(e,[n]){let i=r;r=p(e),r===i?d[r].p(e,n):(x(),F(d[i],1,1,(()=>{d[i]=null})),M(),s=d[r],s?s.p(e,n):(s=d[r]=u[r](e),s.c()),U(s,1),s.m(t,null))},i(e){o||(U(s),o=!0)},o(e){F(s),o=!1},d(e){e&&l(t),d[r].d()}}}function Up(e,t,n){let i,r,{currentRoute:s}=t,{params:o}=t,a=!1;return e.$$set=e=>{"currentRoute"in e&&n(4,s=e.currentRoute),"params"in e&&n(5,o=e.params)},[a,i,r,function(e){e&&e.preventDefault(),async function(e,t){try{const n=await df(_p,e,t);return Ap.setItem(Sp,JSON.stringify(n.user)),n.user}catch(e){return null}}(i,r).then((e=>{null!=e&&(n(0,a=!0),Ip(1e3))}))},s,o,function(e){i=e,n(1,i)},function(e){r=e,n(2,r)}]}function Fp(e){let t,n,i,r,s,o,u,d,p,y,v,w,b,I,E,_,k,A,S,N,R,D,O;function P(t){e[7](t)}let L={text:"email",id:"email",type:"email",autocomplete:"email"};function x(t){e[8](t)}void 0!==e[1]&&(L.value=e[1]),n=new Pp({props:L}),T.push((()=>V(n,"value",P)));let M={text:"password",id:"password",type:"password",autocomplete:"new-password"};function q(t){e[9](t)}void 0!==e[2]&&(M.value=e[2]),y=new Pp({props:M}),T.push((()=>V(y,"value",x)));let z={text:"confirm password",id:"con-password",type:"password",autocomplete:"new-password"};return void 0!==e[3]&&(z.value=e[3]),b=new Pp({props:z}),T.push((()=>V(b,"value",q))),{c(){t=h("form"),$(n.$$.fragment),r=f(),s=h("br"),o=f(),u=h("br"),d=f(),p=h("div"),$(y.$$.fragment),w=f(),$(b.$$.fragment),E=f(),_=h("br"),k=f(),A=h("br"),S=f(),N=h("button"),N.textContent="sign up",m(p,"id","form-container")},m(i,l){c(i,t,l),j(n,t,null),a(t,r),a(t,s),a(t,o),a(t,u),a(t,d),a(t,p),j(y,p,null),a(p,w),j(b,p,null),a(t,E),a(t,_),a(t,k),a(t,A),a(t,S),a(t,N),R=!0,D||(O=g(t,"submit",e[4]),D=!0)},p(e,t){const r={};!i&&2&t&&(i=!0,r.value=e[1],C((()=>i=!1))),n.$set(r);const s={};!v&&4&t&&(v=!0,s.value=e[2],C((()=>v=!1))),y.$set(s);const o={};!I&&8&t&&(I=!0,o.value=e[3],C((()=>I=!1))),b.$set(o)},i(e){R||(U(n.$$.fragment,e),U(y.$$.fragment,e),U(b.$$.fragment,e),R=!0)},o(e){F(n.$$.fragment,e),F(y.$$.fragment,e),F(b.$$.fragment,e),R=!1},d(e){e&&l(t),B(n),B(y),B(b),D=!1,O()}}}function Vp(t){let n;return{c(){n=h("p"),n.textContent="signed up and logged in! redirecting to main..."},m(e,t){c(e,n,t)},p:e,i:e,o:e,d(e){e&&l(n)}}}function $p(e){let t,n,i,r,s,o;const u=[Vp,Fp],d=[];function p(e,t){return e[0]?0:1}return r=p(e),s=d[r]=u[r](e),{c(){t=h("main"),n=h("h1"),n.textContent="sign up",i=f(),s.c()},m(e,s){c(e,t,s),a(t,n),a(t,i),d[r].m(t,null),o=!0},p(e,[n]){let i=r;r=p(e),r===i?d[r].p(e,n):(x(),F(d[i],1,1,(()=>{d[i]=null})),M(),s=d[r],s?s.p(e,n):(s=d[r]=u[r](e),s.c()),U(s,1),s.m(t,null))},i(e){o||(U(s),o=!0)},o(e){F(s),o=!1},d(e){e&&l(t),d[r].d()}}}function jp(e,t,n){let i,r,s,{currentRoute:o}=t,{params:a}=t,c=!1;return e.$$set=e=>{"currentRoute"in e&&n(5,o=e.currentRoute),"params"in e&&n(6,a=e.params)},[c,i,r,s,function(e){e&&e.preventDefault(),function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(i)?s===r?r.length<8?alert("Passwords too short!"):Rp(i,r).then((e=>{null!=e&&(n(0,c=!0),Ip(1e3))})):alert("Passwords do not match!"):alert("Invalid email!")},o,a,function(e){i=e,n(1,i)},function(e){r=e,n(2,r)},function(e){s=e,n(3,s)}]}function Bp(){return!Np()}const qp=[{name:"/",component:class extends H{constructor(e){super(),z(this,e,xe,Le,s,{currentRoute:7,params:8})}}},{name:"login",component:class extends H{constructor(e){super(),z(this,e,Up,Mp,s,{currentRoute:4,params:5})}},onlyIf:{guard:Bp,redirect:"/"}},{name:"signup",component:class extends H{constructor(e){super(),z(this,e,jp,$p,s,{currentRoute:5,params:6})}},onlyIf:{guard:Bp,redirect:"/"}}];function zp(t){let n,i,r,s;return r=new Ee({props:{routes:qp}}),{c(){n=h("meta"),i=f(),$(r.$$.fragment),document.title="Perfect Type",m(n,"charset","utf-8")},m(e,t){a(document.head,n),c(e,i,t),j(r,e,t),s=!0},p:e,i(e){s||(U(r.$$.fragment,e),s=!0)},o(e){F(r.$$.fragment,e),s=!1},d(e){l(n),e&&l(i),B(r,e)}}}function Hp(e){return Cp(),[]}return new class extends H{constructor(e){super(),z(this,e,Hp,zp,s,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
