var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function i(e){e.forEach(t)}function r(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function o(t,n,i){t.$$.on_destroy.push(function(t,...n){if(null==t)return e;const i=t.subscribe(...n);return i.unsubscribe?()=>i.unsubscribe():i}(n,i))}function a(e,t){e.appendChild(t)}function l(e,t,n){e.insertBefore(t,n||null)}function h(e){e.parentNode.removeChild(e)}function c(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function u(e){return document.createElement(e)}function d(e){return document.createTextNode(e)}function f(){return d(" ")}function p(){return d("")}function g(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function m(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let y;function v(e){y=e}function b(e){(function(){if(!y)throw new Error("Function called outside component initialization");return y})().$$.on_mount.push(e)}const w=[],I=[],T=[],_=[],E=Promise.resolve();let k=!1;function A(e){T.push(e)}let S=!1;const C=new Set;function R(){if(!S){S=!0;do{for(let e=0;e<w.length;e+=1){const t=w[e];v(t),P(t.$$)}for(v(null),w.length=0;I.length;)I.pop()();for(let e=0;e<T.length;e+=1){const t=T[e];C.has(t)||(C.add(t),t())}T.length=0}while(w.length);for(;_.length;)_.pop()();k=!1,S=!1,C.clear()}}function P(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(A)}}const N=new Set;let O;function D(){O={r:0,c:[],p:O}}function L(){O.r||i(O.c),O=O.p}function x(e,t){e&&e.i&&(N.delete(e),e.i(t))}function $(e,t,n,i){if(e&&e.o){if(N.has(e))return;N.add(e),O.c.push((()=>{N.delete(e),i&&(n&&e.d(1),i())})),e.o(t)}}function j(e){e&&e.c()}function U(e,n,s,o){const{fragment:a,on_mount:l,on_destroy:h,after_update:c}=e.$$;a&&a.m(n,s),o||A((()=>{const n=l.map(t).filter(r);h?h.push(...n):i(n),e.$$.on_mount=[]})),c.forEach(A)}function M(e,t){const n=e.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function F(e,t){-1===e.$$.dirty[0]&&(w.push(e),k||(k=!0,E.then(R)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function B(t,r,s,o,a,l,c,u=[-1]){const d=y;v(t);const f=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:n(),dirty:u,skip_bound:!1,root:r.target||d.$$.root};c&&c(f.root);let p=!1;if(f.ctx=s?s(t,r.props||{},((e,n,...i)=>{const r=i.length?i[0]:n;return f.ctx&&a(f.ctx[e],f.ctx[e]=r)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](r),p&&F(t,e)),n})):[],f.update(),p=!0,i(f.before_update),f.fragment=!!o&&o(f.ctx),r.target){if(r.hydrate){const e=function(e){return Array.from(e.childNodes)}(r.target);f.fragment&&f.fragment.l(e),e.forEach(h)}else f.fragment&&f.fragment.c();r.intro&&x(t.$$.fragment),U(t,r.target,r.anchor,r.customElement),R()}v(d)}class H{$destroy(){M(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const z=[];function q(t,n=e){let i;const r=new Set;function o(e){if(s(t,e)&&(t=e,i)){const e=!z.length;for(const e of r)e[1](),z.push(e,t);if(e){for(let e=0;e<z.length;e+=2)z[e][0](z[e+1]);z.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(s,a=e){const l=[s,a];return r.add(l),1===r.size&&(i=n(o)||e),s(t),()=>{r.delete(l),0===r.size&&(i(),i=null)}}}}const{set:K,subscribe:V}=q({}),G={subscribe:V,set:K,remove:()=>{K({})}},X=(e,t="")=>{const n=new URL(e);function i(){return s(t).reduce(((e,t,n)=>(":"===t[0]&&e.push({value:t.slice(1),index:n}),e)),[])}function r(){return s(n.pathname)}function s(e){return"/"===e||0===e.trim().length?[e]:("/"===e.slice(-1)&&(e=e.slice(0,-1)),"/"===e[0]&&(e=e.slice(1)),e.split("/"))}return Object.freeze({hash:n.hash,host:n.host,hostname:n.hostname,namedParams:function(){const e=r();return i().reduce(((t,n)=>(t[n.value]=e[n.index],t)),{})}(),namedParamsKeys:i().reduce(((e,t)=>(e.push(t.value),e)),[]),namedParamsValues:function(){const e=r();return i().reduce(((t,n)=>(t.push(e[n.index]),t)),[])}(),pathNames:r(),port:n.port,pathname:n.pathname,protocol:n.protocol,search:n.search,queryParams:function(){const e={};return n.searchParams.forEach(((t,n)=>{e[n]=t})),e}(),queryParamsKeys:function(){const e=[];return n.searchParams.forEach(((t,n)=>{e.push(n)})),e}(),queryParamsValues:function(){const e=[];return n.searchParams.forEach((t=>{e.push(t)})),e}()})},W=e=>{let t=!1;return 0===Object.keys(e).length||(e.childRoute&&0===Object.keys(e.childRoute).length?t=!0:e.childRoute&&(t=W(e.childRoute)),t)},J=(e,t)=>(t=ee(t)).includes(":")?t.includes(e):t.startsWith(e),Y=(e,t,n)=>{let i=!1;if(n)return{exists:t.lang&&t.lang[n]&&t.lang[n].includes(e),language:n};if(i=J(e,t.name),!i&&t.lang&&"object"==typeof t.lang)for(const[r,s]of Object.entries(t.lang))J(e,s)&&(i=!0,n=r);return{exists:i,language:n}},Z=e=>"/"===e||0===e.trim().length?[e]:(e=ee(e,"both")).split("/"),Q=(e="")=>{let t;return"/"===e||0===e.trim().length?e:(t=(e=ee(e,"lead")).split(":")[0],t=ee(t,"trail"),t.toLowerCase())},ee=(e,t="lead")=>("trail"!==t&&"both"!==t||(e=e.replace(/\/$/,"")),"lead"!==t&&"both"!==t||(e=e.replace(/^\//,"")),e),te=(e,t=null)=>t&&e.lang&&e.lang[t]?e.lang[t]:e.name,ne=e=>{const t=e||!1;let n="";const i=(e,n)=>{if("undefined"!=typeof window){const i=(e=>{let t=[];if(e.queryParams)for(let[n,i]of Object.entries(e.queryParams))t.push(`${n}=${i}`);const n=e.hash?e.hash:"";return t.length>0?`${e.path}?${t.join("&")}${n}`:e.path+n})(e);n&&window.history.pushState({page:i},"",i),t&&r(i)}},r=e=>{"undefined"!=typeof ga&&(ga("set","page",e),ga("send","pageview"))};return Object.freeze({active:()=>n,isActive:(e,t=!1)=>{"/"!==e[0]&&(e="/"+e);let i=X(`http://fake.com${e}`).pathname,r=X(`http://fake.com${n}`).pathname;return i=ee(i,"trail"),r=ee(r,"trail"),t?r.includes(i):r===i},setActive:(e,t)=>{n=e.path,i(e,t)}})},ie=(e,t)=>{const n=(e=>{const t=e;return Object.freeze({valid:()=>t&&t.guard&&"function"==typeof t.guard,redirect:()=>!t.guard(),redirectPath:()=>{let e="/";return t.redirect&&t.redirect.length>0&&(e=t.redirect),e}})})(e.onlyIf);return Object.freeze({path:()=>{let i=t;return e.redirectTo&&e.redirectTo.length>0&&(i=e.redirectTo),n.valid()&&n.redirect()&&(i=n.redirectPath()),i}})};function re({basePath:e,basePathName:t,pathNames:n,convert:i,currentLanguage:r}){let s,o,a=r;function l(){return te(o,a)}function h(){return Q(l())}function c(){return Q(s.result)}return Object.freeze({basePathSameAsLocalised:function(){return c()===h()},updatedPath:function(e){return o=e,s=((e,t,n,i,r=!1)=>{if("/"===e||0===e.trim().length)return{result:e,language:null};let s=e,o=n.name,a=i;if(r&&(a=""),o=ee(o),s=ee(s),n.childRoute)return{result:e,language:a};{let e=Y(s,n,a);e.exists&&r&&(s=te(n,i));let l=o.split(":")[0];return l=ee(l,"trail"),l=l.split("/"),l.shift(),l.forEach((()=>{const o=t[0];if(e=Y(`${s}/${o}`,n,a),!o||!e.exists)return{result:s,language:e.language};s=r?te(n,i):`${s}/${o}`,t.shift()})),{result:s,language:e.language}}})(t,n,o,a,i),a=i?r:s.language,s},basePathNameWithoutNamedParams:c,localisedPathName:l,localisedRouteWithoutNamedParams:h,namedPath:function(){let t=l();return t&&!t.startsWith("/")&&(t="/"+t),e?`${e}${t}`:t},pathNames:n,routeLanguage:function(){return a},routePath:function(){let t=`${e}/${c()}`;"//"===t&&(t="/"),a&&(n=((e,t)=>{const n=t.split("/");return n.length>1&&n.forEach((function(t,n){t.length>0&&n>0&&e.shift()})),e})(n,h()));const i=((e="")=>0===e.trim().length?[]:Z(e).reduce(((e,t)=>(":"===t[0]&&e.push(t.slice(1)),e)),[]))(l());return i&&i.length>0&&i.forEach((function(){n.length>0&&(t+=`/${n.shift()}`)})),t}})}function se({routes:e,currentUrl:t,routerOptions:n,convert:i}){const r=n.defaultLanguage,s=n.prefix?n.prefix.toLowerCase():"",o=function(e,t){if(t&&t.trim().length>0){const n=e.endsWith(t)?t:t+"/",i=e.replace(n,"");return X(i)}return X(e)}(t,s);let a="",l={},h=!1;function c(e,t,n,i,s){let u={};const d=re({basePath:t,basePathName:n.shift().toLowerCase(),pathNames:n,convert:s,currentLanguage:i});return h=!1,e.forEach((function(e){if(d.updatedPath(e),function(e,t){const n=e.basePathSameAsLocalised();n&&(h=!0);return n||!h&&(e=>ee(e).startsWith(":"))(t)}(d,e.name)){let t=d.routePath();if(a=ie(e,a).path(),u.name!==t&&(u=function({route:e,routePath:t,routeLanguage:n,urlParser:i,namedPath:s}){const o=function({routeInfo:e,path:t,routeNamedParams:n,urlParser:i,namedPath:r,language:s}){const o=()=>{const e=X(`https://fake.com${i.pathname}`,r).namedParams;return{...n,...e}};return Object.freeze({get:()=>({name:t,component:e.component,hash:i.hash,layout:e.layout,queryParams:i.queryParams,namedParams:o(),path:t,language:s}),namedParams:o})}({routeInfo:e,urlParser:i,path:t,routeNamedParams:l,namedPath:s,language:n||r});return l=o.namedParams(),o.get()}({route:e,routePath:t,routeLanguage:d.routeLanguage(),urlParser:o,namedPath:d.namedPath()})),e.nestedRoutes&&e.nestedRoutes.length>0&&d.pathNames.length>0)u.childRoute=c(e.nestedRoutes,t,d.pathNames,d.routeLanguage(),s),u.path=u.childRoute.path,u.language=u.childRoute.language;else if(function(e,t){return e.nestedRoutes&&e.nestedRoutes.length>0&&0===t.length}(e,d.pathNames)){const n=c(e.nestedRoutes,t,["index"],d.routeLanguage(),s);n&&Object.keys(n).length>0&&(u.childRoute=n,u.language=u.childRoute.language)}}})),a&&(u.redirectTo=a),u}const u=t=>{const n=e.find((e=>"404"==e.name)),i=t||r||"";return n?{...n,language:i,path:"404"}:{name:"404",component:"",path:"404",redirectTo:"/404.html"}};return Object.freeze({findActiveRoute:function(){let t=c(e,"",o.pathNames,n.lang,i);return t&&Object.keys(t).length&&!W(t)?(t.path=t.path.split("?")[0],s&&(t.path=`/${s}${t.path}`)):"undefined"!=typeof window&&(t=u(n.lang)),t}})}const oe="/404.html";let ae,le=[],he={};const ce=(e,t,n={})=>{he={...n},void 0!==t&&""!==t||(t=document.location.href),ae=ne(he.gaPageviews),t=ee(t,"trail"),le=e;const i=()=>{let n=!1;return he.langConvertTo&&(he.lang=he.langConvertTo,n=!0),se({routes:e,currentUrl:t,routerOptions:he,convert:n}).findActiveRoute()};return Object.freeze({setActiveRoute:(e=!0)=>{const t=i();return t.redirectTo?((e,t)=>("undefined"!=typeof window&&(e===oe?ae.setActive({path:oe},t):ue(e)),e))(t.redirectTo,e):(ae.setActive(t,e),G.set(t),t)},findActiveRoute:i})},ue=(e,t=null,n=!0)=>(e=ee(e,"lead"),t&&(he.langConvertTo=t),ce(le,"http://fake.com/"+e,he).setActiveRoute(n));function de(e){let t,n;return t=new ye({props:{currentRoute:e[0].childRoute,params:e[1]}}),{c(){j(t.$$.fragment)},m(e,i){U(t,e,i),n=!0},p(e,n){const i={};1&n&&(i.currentRoute=e[0].childRoute),2&n&&(i.params=e[1]),t.$set(i)},i(e){n||(x(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){M(t,e)}}}function fe(e){let t,n,i;var r=e[0].component;function s(e){return{props:{currentRoute:{...e[0],component:""},params:e[1]}}}return r&&(t=new r(s(e))),{c(){t&&j(t.$$.fragment),n=p()},m(e,r){t&&U(t,e,r),l(e,n,r),i=!0},p(e,i){const o={};if(1&i&&(o.currentRoute={...e[0],component:""}),2&i&&(o.params=e[1]),r!==(r=e[0].component)){if(t){D();const e=t;$(e.$$.fragment,1,0,(()=>{M(e,1)})),L()}r?(t=new r(s(e)),j(t.$$.fragment),x(t.$$.fragment,1),U(t,n.parentNode,n)):t=null}else r&&t.$set(o)},i(e){i||(t&&x(t.$$.fragment,e),i=!0)},o(e){t&&$(t.$$.fragment,e),i=!1},d(e){e&&h(n),t&&M(t,e)}}}function pe(e){let t,n,i;var r=e[0].layout;function s(e){return{props:{currentRoute:{...e[0],layout:""},params:e[1]}}}return r&&(t=new r(s(e))),{c(){t&&j(t.$$.fragment),n=p()},m(e,r){t&&U(t,e,r),l(e,n,r),i=!0},p(e,i){const o={};if(1&i&&(o.currentRoute={...e[0],layout:""}),2&i&&(o.params=e[1]),r!==(r=e[0].layout)){if(t){D();const e=t;$(e.$$.fragment,1,0,(()=>{M(e,1)})),L()}r?(t=new r(s(e)),j(t.$$.fragment),x(t.$$.fragment,1),U(t,n.parentNode,n)):t=null}else r&&t.$set(o)},i(e){i||(t&&x(t.$$.fragment,e),i=!0)},o(e){t&&$(t.$$.fragment,e),i=!1},d(e){e&&h(n),t&&M(t,e)}}}function ge(e){let t,n,i,r;const s=[pe,fe,de],o=[];function a(e,t){return e[0].layout?0:e[0].component?1:e[0].childRoute?2:-1}return~(t=a(e))&&(n=o[t]=s[t](e)),{c(){n&&n.c(),i=p()},m(e,n){~t&&o[t].m(e,n),l(e,i,n),r=!0},p(e,[r]){let l=t;t=a(e),t===l?~t&&o[t].p(e,r):(n&&(D(),$(o[l],1,1,(()=>{o[l]=null})),L()),~t?(n=o[t],n?n.p(e,r):(n=o[t]=s[t](e),n.c()),x(n,1),n.m(i.parentNode,i)):n=null)},i(e){r||(x(n),r=!0)},o(e){$(n),r=!1},d(e){~t&&o[t].d(e),e&&h(i)}}}function me(e,t,n){let{currentRoute:i={}}=t,{params:r={}}=t;return e.$$set=e=>{"currentRoute"in e&&n(0,i=e.currentRoute),"params"in e&&n(1,r=e.params)},[i,r]}"undefined"!=typeof window&&(window.addEventListener("click",(e=>{if("a"!==e.target.localName.toLowerCase())return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;const t=he.prefix?`/${he.prefix.toLowerCase()}`:"",n=e.target.pathname&&e.target.host===window.location.host,i=!(t.length>1)||e.target.pathname.startsWith(t);if(n&&i){e.preventDefault();const t=e.target.pathname+e.target.search+e.target.search+e.target.hash;"_blank"===e.target.target?window.open(t,"newTab"):ue(t)}})),window.onpopstate=function(e){let t=window.location.pathname+window.location.search+window.location.hash;ue(t,null,!1)});class ye extends H{constructor(e){super(),B(this,e,me,ge,s,{currentRoute:0,params:1})}}function ve(e){let t,n;return t=new ye({props:{currentRoute:e[0]}}),{c(){j(t.$$.fragment)},m(e,i){U(t,e,i),n=!0},p(e,[n]){const i={};1&n&&(i.currentRoute=e[0]),t.$set(i)},i(e){n||(x(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){M(t,e)}}}function be(e,t,n){let i;o(e,G,(e=>n(0,i=e)));let{routes:r=[]}=t,{options:s={}}=t;return b((()=>{ce(r,document.location.href,s).setActiveRoute()})),e.$$set=e=>{"routes"in e&&n(1,r=e.routes),"options"in e&&n(2,s=e.options)},[i,r,s]}class we extends H{constructor(e){super(),B(this,e,be,ve,s,{routes:1,options:2})}}const Ie=q(0);var Te=["ability","able","aboard","about","above","accept","accident","according","account","accurate","acres","across","act","action","active","activity","actual","actually","add","addition","additional","adjective","adult","adventure","advice","affect","afraid","after","afternoon","again","against","age","ago","agree","ahead","aid","air","airplane","alike","alive","all","allow","almost","alone","along","aloud","alphabet","already","also","although","am","among","amount","ancient","angle","angry","animal","announced","another","answer","ants","any","anybody","anyone","anything","anyway","anywhere","apart","apartment","appearance","apple","applied","appropriate","are","area","arm","army","around","arrange","arrangement","arrive","arrow","art","article","as","aside","ask","asleep","at","ate","atmosphere","atom","atomic","attached","attack","attempt","attention","audience","author","automobile","available","average","avoid","aware","away","baby","back","bad","badly","bag","balance","ball","balloon","band","bank","bar","bare","bark","barn","base","baseball","basic","basis","basket","bat","battle","be","bean","bear","beat","beautiful","beauty","became","because","become","becoming","bee","been","before","began","beginning","begun","behavior","behind","being","believed","bell","belong","below","belt","bend","beneath","bent","beside","best","bet","better","between","beyond","bicycle","bigger","biggest","bill","birds","birth","birthday","bit","bite","black","blank","blanket","blew","blind","block","blood","blow","blue","board","boat","body","bone","book","border","born","both","bottle","bottom","bound","bow","bowl","box","boy","brain","branch","brass","brave","bread","break","breakfast","breath","breathe","breathing","breeze","brick","bridge","brief","bright","bring","broad","broke","broken","brother","brought","brown","brush","buffalo","build","building","built","buried","burn","burst","bus","bush","business","busy","but","butter","buy","by","cabin","cage","cake","call","calm","came","camera","camp","can","canal","cannot","cap","capital","captain","captured","car","carbon","card","care","careful","carefully","carried","carry","case","cast","castle","cat","catch","cattle","caught","cause","cave","cell","cent","center","central","century","certain","certainly","chain","chair","chamber","chance","change","changing","chapter","character","characteristic","charge","chart","check","cheese","chemical","chest","chicken","chief","child","children","choice","choose","chose","chosen","church","circle","circus","citizen","city","class","classroom","claws","clay","clean","clear","clearly","climate","climb","clock","close","closely","closer","cloth","clothes","clothing","cloud","club","coach","coal","coast","coat","coffee","cold","collect","college","colony","color","column","combination","combine","come","comfortable","coming","command","common","community","company","compare","compass","complete","completely","complex","composed","composition","compound","concerned","condition","congress","connected","consider","consist","consonant","constantly","construction","contain","continent","continued","contrast","control","conversation","cook","cookies","cool","copper","copy","corn","corner","correct","correctly","cost","cotton","could","count","country","couple","courage","course","court","cover","cow","cowboy","crack","cream","create","creature","crew","crop","cross","crowd","cry","cup","curious","current","curve","customs","cut","cutting","daily","damage","dance","danger","dangerous","dark","darkness","date","daughter","dawn","day","dead","deal","dear","death","decide","declared","deep","deeply","deer","definition","degree","depend","depth","describe","desert","design","desk","detail","determine","develop","development","diagram","diameter","did","die","differ","difference","different","difficult","difficulty","dig","dinner","direct","direction","directly","dirt","dirty","disappear","discover","discovery","discuss","discussion","disease","dish","distance","distant","divide","division","do","doctor","does","dog","doing","doll","dollar","done","donkey","door","dot","double","doubt","down","dozen","draw","drawn","dream","dress","drew","dried","drink","drive","driven","driver","driving","drop","dropped","drove","dry","duck","due","dug","dull","during","dust","duty","each","eager","ear","earlier","early","earn","earth","easier","easily","east","easy","eat","eaten","edge","education","effect","effort","egg","eight","either","electric","electricity","element","elephant","eleven","else","empty","end","enemy","energy","engine","engineer","enjoy","enough","enter","entire","entirely","environment","equal","equally","equator","equipment","escape","especially","essential","establish","even","evening","event","eventually","ever","every","everybody","everyone","everything","everywhere","evidence","exact","exactly","examine","example","excellent","except","exchange","excited","excitement","exciting","exclaimed","exercise","exist","expect","experience","experiment","explain","explanation","explore","express","expression","extra","eye","face","facing","fact","factor","factory","failed","fair","fairly","fall","fallen","familiar","family","famous","far","farm","farmer","farther","fast","fastened","faster","fat","father","favorite","fear","feathers","feature","fed","feed","feel","feet","fell","fellow","felt","fence","few","fewer","field","fierce","fifteen","fifth","fifty","fight","fighting","figure","fill","film","final","finally","find","fine","finest","finger","finish","fire","fireplace","firm","first","fish","five","fix","flag","flame","flat","flew","flies","flight","floating","floor","flow","flower","fly","fog","folks","follow","food","foot","football","for","force","foreign","forest","forget","forgot","forgotten","form","former","fort","forth","forty","forward","fought","found","four","fourth","fox","frame","free","freedom","frequently","fresh","friend","friendly","frighten","frog","from","front","frozen","fruit","fuel","full","fully","fun","function","funny","fur","furniture","further","future","gain","game","garage","garden","gas","gasoline","gate","gather","gave","general","generally","gentle","gently","get","getting","giant","gift","girl","give","given","giving","glad","glass","globe","go","goes","gold","golden","gone","good","goose","got","government","grabbed","grade","gradually","grain","grandfather","grandmother","graph","grass","gravity","gray","great","greater","greatest","greatly","green","grew","ground","group","grow","grown","growth","guard","guess","guide","gulf","gun","habit","had","hair","half","halfway","hall","hand","handle","handsome","hang","happen","happened","happily","happy","harbor","hard","harder","hardly","has","hat","have","having","hay","he","headed","heading","health","heard","hearing","heart","heat","heavy","height","held","hello","help","helpful","her","herd","here","herself","hidden","hide","high","higher","highest","highway","hill","him","himself","his","history","hit","hold","hole","hollow","home","honor","hope","horn","horse","hospital","hot","hour","house","how","however","huge","human","hundred","hung","hungry","hunt","hunter","hurried","hurry","hurt","husband","ice","idea","identity","if","ill","image","imagine","immediately","importance","important","impossible","improve","in","inch","include","including","income","increase","indeed","independent","indicate","individual","industrial","industry","influence","information","inside","instance","instant","instead","instrument","interest","interior","into","introduced","invented","involved","iron","is","island","it","its","itself","jack","jar","jet","job","join","joined","journey","joy","judge","jump","jungle","just","keep","kept","key","kids","kill","kind","kitchen","knew","knife","know","knowledge","known","label","labor","lack","lady","laid","lake","lamp","land","language","large","larger","largest","last","late","later","laugh","law","lay","layers","lead","leader","leaf","learn","least","leather","leave","leaving","led","left","leg","length","lesson","let","letter","level","library","lie","life","lift","light","like","likely","limited","line","lion","lips","liquid","list","listen","little","live","living","load","local","locate","location","log","lonely","long","longer","look","loose","lose","loss","lost","lot","loud","love","lovely","low","lower","luck","lucky","lunch","lungs","lying","machine","machinery","mad","made","magic","magnet","mail","main","mainly","major","make","making","man","managed","manner","manufacturing","many","map","mark","market","married","mass","massage","master","material","mathematics","matter","may","maybe","me","meal","mean","means","meant","measure","meat","medicine","meet","melted","member","memory","men","mental","merely","met","metal","method","mice","middle","might","mighty","mile","military","milk","mill","mind","mine","minerals","minute","mirror","missing","mission","mistake","mix","mixture","model","modern","molecular","moment","money","monkey","month","mood","moon","more","morning","most","mostly","mother","motion","motor","mountain","mouse","mouth","move","movement","movie","moving","mud","muscle","music","musical","must","my","myself","mysterious","nails","name","nation","national","native","natural","naturally","nature","near","nearby","nearer","nearest","nearly","necessary","neck","needed","needle","needs","negative","neighbor","neighborhood","nervous","nest","never","new","news","newspaper","next","nice","night","nine","no","nobody","nodded","noise","none","noon","nor","north","nose","not","note","noted","nothing","notice","noun","now","number","numeral","nuts","object","observe","obtain","occasionally","occur","ocean","of","off","offer","office","officer","official","oil","old","older","oldest","on","once","one","only","onto","open","operation","opinion","opportunity","opposite","or","orange","orbit","order","ordinary","organization","organized","origin","original","other","ought","our","ourselves","out","outer","outline","outside","over","own","owner","oxygen","pack","package","page","paid","pain","paint","pair","palace","pale","pan","paper","paragraph","parallel","parent","park","part","particles","particular","particularly","partly","parts","party","pass","passage","past","path","pattern","pay","peace","pen","pencil","people","per","percent","perfect","perfectly","perhaps","period","person","personal","pet","phrase","physical","piano","pick","picture","pictured","pie","piece","pig","pile","pilot","pine","pink","pipe","pitch","place","plain","plan","plane","planet","planned","planning","plant","plastic","plate","plates","play","pleasant","please","pleasure","plenty","plural","plus","pocket","poem","poet","poetry","point","pole","police","policeman","political","pond","pony","pool","poor","popular","population","porch","port","position","positive","possible","possibly","post","pot","potatoes","pound","pour","powder","power","powerful","practical","practice","prepare","present","president","press","pressure","pretty","prevent","previous","price","pride","primitive","principal","principle","printed","private","prize","probably","problem","process","produce","product","production","program","progress","promised","proper","properly","property","protection","proud","prove","provide","public","pull","pupil","pure","purple","purpose","push","put","putting","quarter","queen","question","quick","quickly","quiet","quietly","quite","rabbit","race","radio","railroad","rain","raise","ran","ranch","range","rapidly","rate","rather","raw","rays","reach","read","reader","ready","real","realize","rear","reason","recall","receive","recent","recently","recognize","record","red","refer","refused","region","regular","related","relationship","religious","remain","remarkable","remember","remove","repeat","replace","replied","report","represent","require","research","respect","rest","result","return","review","rhyme","rhythm","rice","rich","ride","riding","right","ring","rise","rising","river","road","roar","rock","rocket","rocky","rod","roll","roof","room","root","rope","rose","rough","round","route","row","rubbed","rubber","rule","ruler","run","running","rush","sad","saddle","safe","safety","said","sail","sale","salmon","salt","same","sand","sang","sat","satellites","satisfied","save","saved","saw","say","scale","scared","scene","school","science","scientific","scientist","score","screen","sea","search","season","seat","second","secret","section","see","seed","seeing","seems","seen","seldom","select","selection","sell","send","sense","sent","sentence","separate","series","serious","serve","service","sets","setting","settle","settlers","seven","several","shade","shadow","shake","shaking","shall","shallow","shape","share","sharp","she","sheep","sheet","shelf","shells","shelter","shine","shinning","ship","shirt","shoe","shoot","shop","shore","short","shorter","shot","should","shoulder","shout","show","shown","shut","sick","sides","sight","sign","signal","silence","silent","silk","silly","silver","similar","simple","simplest","simply","since","sing","single","sink","sister","sit","sitting","situation","six","size","skill","skin","sky","slabs","slave","sleep","slept","slide","slight","slightly","slip","slipped","slope","slow","slowly","small","smaller","smallest","smell","smile","smoke","smooth","snake","snow","so","soap","social","society","soft","softly","soil","solar","sold","soldier","solid","solution","solve","some","somebody","somehow","someone","something","sometime","somewhere","son","song","soon","sort","sound","source","south","southern","space","speak","special","species","specific","speech","speed","spell","spend","spent","spider","spin","spirit","spite","split","spoken","sport","spread","spring","square","stage","stairs","stand","standard","star","stared","start","state","statement","station","stay","steady","steam","steel","steep","stems","step","stepped","stick","stiff","still","stock","stomach","stone","stood","stop","stopped","store","storm","story","stove","straight","strange","stranger","straw","stream","street","strength","stretch","strike","string","strip","strong","stronger","struck","structure","struggle","stuck","student","studied","studying","subject","substance","success","successful","such","sudden","suddenly","sugar","suggest","suit","sum","summer","sun","sunlight","supper","supply","support","suppose","sure","surface","surprise","surrounded","swam","sweet","swept","swim","swimming","swing","swung","syllable","symbol","system","table","tail","take","taken","tales","talk","tall","tank","tape","task","taste","taught","tax","tea","teach","teacher","team","tears","teeth","telephone","television","tell","temperature","ten","tent","term","terrible","test","than","thank","that","thee","them","themselves","then","theory","there","therefore","these","they","thick","thin","thing","think","third","thirty","this","those","thou","though","thought","thousand","thread","three","threw","throat","through","throughout","throw","thrown","thumb","thus","thy","tide","tie","tight","tightly","till","time","tin","tiny","tip","tired","title","to","tobacco","today","together","told","tomorrow","tone","tongue","tonight","too","took","tool","top","topic","torn","total","touch","toward","tower","town","toy","trace","track","trade","traffic","trail","train","transportation","trap","travel","treated","tree","triangle","tribe","trick","tried","trip","troops","tropical","trouble","truck","trunk","truth","try","tube","tune","turn","twelve","twenty","twice","two","type","typical","uncle","under","underline","understanding","unhappy","union","unit","universe","unknown","unless","until","unusual","up","upon","upper","upward","us","use","useful","using","usual","usually","valley","valuable","value","vapor","variety","various","vast","vegetable","verb","vertical","very","vessels","victory","view","village","visit","visitor","voice","volume","vote","vowel","voyage","wagon","wait","walk","wall","want","war","warm","warn","was","wash","waste","watch","water","wave","way","we","weak","wealth","wear","weather","week","weigh","weight","welcome","well","went","were","west","western","wet","whale","what","whatever","wheat","wheel","when","whenever","where","wherever","whether","which","while","whispered","whistle","white","who","whole","whom","whose","why","wide","widely","wife","wild","will","willing","win","wind","window","wing","winter","wire","wise","wish","with","within","without","wolf","women","won","wonder","wonderful","wood","wooden","wool","word","wore","work","worker","world","worried","worry","worse","worth","would","wrapped","write","writer","writing","written","wrong","wrote","yard","year","yellow","yes","yesterday","yet","you","young","younger","your","yourself","youth","zero","zebra","zipper","zoo","zulu"];function _e(e){function t(){return e&&e.maxLength>1?function(){var t,i=!1;for(;!i;)(t=n()).length<=e.maxLength&&(i=!0);return t}():n()}function n(){return Te[i(Te.length)]}function i(e){return Math.floor(Math.random()*e)}if(void 0===e)return t();"number"==typeof e&&(e={exactly:e}),e.exactly&&(e.min=e.exactly,e.max=e.exactly),"number"!=typeof e.wordsPerString&&(e.wordsPerString=1),"function"!=typeof e.formatter&&(e.formatter=e=>e),"string"!=typeof e.separator&&(e.separator=" ");for(var r=e.min+i(e.max+1-e.min),s=[],o="",a=0,l=0;l<r*e.wordsPerString;l++)a===e.wordsPerString-1?o+=e.formatter(t(),a):o+=e.formatter(t(),a)+e.separator,a++,(l+1)%e.wordsPerString==0&&(s.push(o),o="",a=0);return"string"==typeof e.join&&(s=s.join(e.join)),s}var Ee=_e;function ke(e,t,n){const i=e.slice();return i[14]=t[n],i[16]=n,i}function Ae(e,t,n){const i=e.slice();return i[17]=t[n],i[19]=n,i}function Se(e){let t,n,i,r,s,o,c,p,y=e[3]?`you typed ${e[4]} words per minute`:"you lost :(",v=e[3]?"play again":"try again";return{c(){t=u("div"),n=u("div"),i=d(y),r=f(),s=u("button"),o=d(v),g(n,"class","game-over-div svelte-1ysp0qi"),g(t,"class","game-over-environment svelte-1ysp0qi")},m(h,u){var d,f,g,m;l(h,t,u),a(t,n),a(n,i),a(t,r),a(t,s),a(s,o),c||(d=s,f="click",g=e[6],d.addEventListener(f,g,m),p=()=>d.removeEventListener(f,g,m),c=!0)},p(e,t){24&t&&y!==(y=e[3]?`you typed ${e[4]} words per minute`:"you lost :(")&&m(i,y),8&t&&v!==(v=e[3]?"play again":"try again")&&m(o,v)},d(e){e&&h(t),c=!1,p()}}}function Ce(t){let n,i,s,o=t[0],a=[];for(let e=0;e<o.length;e+=1)a[e]=Pe(ke(t,o,e));return{c(){n=u("div");for(let e=0;e<a.length;e+=1)a[e].c();g(n,"class","game-environment svelte-1ysp0qi"),g(n,"id","game-env")},m(o,h){l(o,n,h);for(let e=0;e<a.length;e+=1)a[e].m(n,null);var c;i||(c=t[5].call(null,n),s=c&&r(c.destroy)?c.destroy:e,i=!0)},p(e,t){if(3&t){let i;for(o=e[0],i=0;i<o.length;i+=1){const r=ke(e,o,i);a[i]?a[i].p(r,t):(a[i]=Pe(r),a[i].c(),a[i].m(n,null))}for(;i<a.length;i+=1)a[i].d(1);a.length=o.length}},d(e){e&&h(n),c(a,e),i=!1,s()}}}function Re(e){let t,n,i,r=e[17]+"";return{c(){t=u("div"),n=d(r),g(t,"class","game-letter svelte-1ysp0qi"),g(t,"id",i=e[16]-1<0?`${e[19]}`:`${e[1][e[16]-1]+e[19]}`)},m(e,i){l(e,t,i),a(t,n)},p(e,s){1&s&&r!==(r=e[17]+"")&&m(n,r),2&s&&i!==(i=e[16]-1<0?`${e[19]}`:`${e[1][e[16]-1]+e[19]}`)&&g(t,"id",i)},d(e){e&&h(t)}}}function Pe(e){let t,n,i,r=0!=e[16]&&function(e){let t,n,i;return{c(){t=u("div"),n=d(" "),g(t,"class","game-letter svelte-1ysp0qi"),g(t,"id",i=""+(e[1][e[16]-1]-1))},m(e,i){l(e,t,i),a(t,n)},p(e,n){2&n&&i!==(i=""+(e[1][e[16]-1]-1))&&g(t,"id",i)},d(e){e&&h(t)}}}(e),s=e[14],o=[];for(let t=0;t<s.length;t+=1)o[t]=Re(Ae(e,s,t));return{c(){t=u("div"),r&&r.c(),n=f();for(let e=0;e<o.length;e+=1)o[e].c();i=f(),g(t,"class","game-word svelte-1ysp0qi")},m(e,s){l(e,t,s),r&&r.m(t,null),a(t,n);for(let e=0;e<o.length;e+=1)o[e].m(t,null);a(t,i)},p(e,n){if(0!=e[16]&&r.p(e,n),3&n){let r;for(s=e[14],r=0;r<s.length;r+=1){const a=Ae(e,s,r);o[r]?o[r].p(a,n):(o[r]=Re(a),o[r].c(),o[r].m(t,i))}for(;r<o.length;r+=1)o[r].d(1);o.length=s.length}},d(e){e&&h(t),r&&r.d(),c(o,e)}}}function Ne(t){let n;function i(e,t){return e[2]?Se:Ce}let r=i(t),s=r(t);return{c(){n=u("main"),s.c()},m(e,t){l(e,n,t),s.m(n,null)},p(e,[t]){r===(r=i(e))&&s?s.p(e,t):(s.d(1),s=r(e),s&&(s.c(),s.m(n,null)))},i:e,o:e,d(e){e&&h(n),s.d()}}}function Oe(e,t,n){function i(){return Ee(30).join(" ")}Array.prototype.random=function(){return this[Math.floor(Math.random()*this.length)]};let r=i();console.log(r);let s,o=r.split(" "),a=[];for(let e=0;e<o.length;e++)a.push(e-1<0?o[e].length+1:o[e].length+a[e-1]+1);Ie.subscribe((e=>{s=e}));let l=!1,h=!1,c=0,u=0,d=0,f=0;return[o,a,l,h,f,function(){const e=e=>{if(e.preventDefault(),!l&&(0==c&&(c=new Date),r.charAt(s)!==e.key?(c=0,n(2,l=!0),u=0,d=0):(!function(e){let t=document.getElementById(s);t.style.color="rgba(100, 100, 100, 0.5)"," "==e.key&&function(e){var t=1,n=setInterval((function(){t<=0&&clearInterval(n),e.style.opacity=t,e.style.filter="alpha(opacity="+100*t+")",t-=.2*t+.05}),100)}(d.parentElement);t.offsetLeft<u&&t.parentElement.scrollIntoView(!0);d=t,u=t.offsetLeft}(e),Ie.update((e=>e+1))),s==r.length)){let e=(new Date-c)/6e4;n(4,f=Math.round(o.length/e*1e3)/1e3),c=0,n(2,l=!0),n(3,h=!0),u=0,d=0}};return document.addEventListener("keypress",e),{destroy(){document.removeEventListener("keypress",e)}}},function(){Ie.update((()=>0)),n(2,l=!1),n(3,h=!1),r=i(),n(0,o=r.split(" ")),n(1,a=[]);for(let e=0;e<o.length;e++)a.push(e-1<0?o[e].length+1:o[e].length+a[e-1]+1)}]}_e.wordList=Te;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
const De={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,h=r>>2,c=(3&r)<<4|o>>4;let u=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(u=64)),i.push(n[h],n[c],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t}(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw Error();const l=r<<2|s>>4;if(i.push(l),64!==o){const e=s<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Le(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function xe(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}class $e extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,$e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,je.prototype.create)}}class je{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?function(e,t){return e.replace(Ue,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new $e(i,o,n)}}const Ue=/\{\$([^}]+)}/g;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Me(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}class Fe{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=Be),void 0===i.error&&(i.error=Be),void 0===i.complete&&(i.complete=Be);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Be(){}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function He(e,t=1e3,n=2){const i=t*Math.pow(n,e),r=Math.round(.5*i*(Math.random()-.5)*2);return Math.min(144e5,i+r)}
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
     */function ze(e){return e&&e._delegate?e._delegate:e}class qe{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var Ke;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(Ke||(Ke={}));const Ve={debug:Ke.DEBUG,verbose:Ke.VERBOSE,info:Ke.INFO,warn:Ke.WARN,error:Ke.ERROR,silent:Ke.SILENT},Ge=Ke.INFO,Xe={[Ke.DEBUG]:"log",[Ke.VERBOSE]:"log",[Ke.INFO]:"info",[Ke.WARN]:"warn",[Ke.ERROR]:"error"},We=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=Xe[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class Je{constructor(e){this.name=e,this._logLevel=Ge,this._logHandler=We,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Ve[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ke.DEBUG,...e),this._logHandler(this,Ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ke.VERBOSE,...e),this._logHandler(this,Ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ke.INFO,...e),this._logHandler(this,Ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ke.WARN,...e),this._logHandler(this,Ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ke.ERROR,...e),this._logHandler(this,Ke.ERROR,...e)}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ye{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Ze="@firebase/app",Qe="0.7.11",et=new Je("@firebase/app"),tt={[Ze]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},nt=new Map,it=new Map;function rt(e,t){try{e.container.addComponent(t)}catch(n){et.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function st(e){const t=e.name;if(it.has(t))return et.debug(`There were multiple attempts to register component ${t}.`),!1;it.set(t,e);for(const t of nt.values())rt(t,e);return!0}function ot(e,t){return e.container.getProvider(t)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */new je("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});function at(e,t,n){var i;let r=null!==(i=tt[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void et.warn(e.join(" "))}st(new qe(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var lt;lt="",st(new qe("platform-logger",(e=>new Ye(e)),"PRIVATE")),at(Ze,Qe,lt),at(Ze,Qe,"esm2017"),at("fire-js","");
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
at("firebase","9.6.1","app");"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var ht,ct,ut=(ht=function(e,t){!function(e){function t(e){return Array.prototype.slice.call(e)}function n(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function i(e,t,i){var r,s=new Promise((function(s,o){n(r=e[t].apply(e,i)).then(s,o)}));return s.request=r,s}function r(e,t,n){var r=i(e,t,n);return r.then((function(e){if(e)return new c(e,r.request)}))}function s(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function o(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return i(this[t],r,arguments)})}))}function a(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return this[t][i].apply(this[t],arguments)})}))}function l(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return r(this[t],i,arguments)})}))}function h(e){this._index=e}function c(e,t){this._cursor=e,this._request=t}function u(e){this._store=e}function d(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function f(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new d(n)}function p(e){this._db=e}function g(e,t,n){var r=i(indexedDB,"open",[e,t]),s=r.request;return s&&(s.onupgradeneeded=function(e){n&&n(new f(s.result,e.oldVersion,s.transaction))}),r.then((function(e){return new p(e)}))}function m(e){return i(indexedDB,"deleteDatabase",[e])}s(h,"_index",["name","keyPath","multiEntry","unique"]),o(h,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),l(h,"_index",IDBIndex,["openCursor","openKeyCursor"]),s(c,"_cursor",["direction","key","primaryKey","value"]),o(c,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(c.prototype[e]=function(){var t=this,i=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,i),n(t._request).then((function(e){if(e)return new c(e,t._request)}))}))})})),u.prototype.createIndex=function(){return new h(this._store.createIndex.apply(this._store,arguments))},u.prototype.index=function(){return new h(this._store.index.apply(this._store,arguments))},s(u,"_store",["name","keyPath","indexNames","autoIncrement"]),o(u,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),l(u,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),a(u,"_store",IDBObjectStore,["deleteIndex"]),d.prototype.objectStore=function(){return new u(this._tx.objectStore.apply(this._tx,arguments))},s(d,"_tx",["objectStoreNames","mode"]),a(d,"_tx",IDBTransaction,["abort"]),f.prototype.createObjectStore=function(){return new u(this._db.createObjectStore.apply(this._db,arguments))},s(f,"_db",["name","version","objectStoreNames"]),a(f,"_db",IDBDatabase,["deleteObjectStore","close"]),p.prototype.transaction=function(){return new d(this._db.transaction.apply(this._db,arguments))},s(p,"_db",["name","version","objectStoreNames"]),a(p,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[u,h].forEach((function(n){e in n.prototype&&(n.prototype[e.replace("open","iterate")]=function(){var n=t(arguments),i=n[n.length-1],r=this._store||this._index,s=r[e].apply(r,n.slice(0,-1));s.onsuccess=function(){i(s.result)}})}))})),[h,u].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,i=[];return new Promise((function(r){n.iterateCursor(e,(function(e){e?(i.push(e.value),void 0===t||i.length!=t?e.continue():r(i)):r(i)}))}))})})),e.openDb=g,e.deleteDb=m,Object.defineProperty(e,"__esModule",{value:!0})}(t)},ht(ct={exports:{}},ct.exports),ct.exports);const dt="@firebase/installations",ft="0.5.4",pt=1e4,gt="w:0.5.4",mt="FIS_v2",yt=36e5,vt=new je("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function bt(e){return e instanceof $e&&e.code.includes("request-failed")}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function wt({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function It(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function Tt(e,t){const n=(await t.json()).error;return vt.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function _t({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Et(e,{refreshToken:t}){const n=_t(e);return n.append("Authorization",function(e){return`FIS_v2 ${e}`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)),n}async function kt(e){const t=await e();return t.status>=500&&t.status<600?e():t}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
const St=/^[cdef][\w-]{21}$/;function Ct(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e);return St.test(t)?t:""}catch(e){return""}}function Rt(e){return`${e.appName}!${e.appId}`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Pt=new Map;function Nt(e,t){const n=Rt(e);Ot(n,t),function(e,t){const n=function(){!Dt&&"BroadcastChannel"in self&&(Dt=new BroadcastChannel("[Firebase] FID Change"),Dt.onmessage=e=>{Ot(e.data.key,e.data.fid)});return Dt}();n&&n.postMessage({key:e,fid:t});0===Pt.size&&Dt&&(Dt.close(),Dt=null)}(n,t)}function Ot(e,t){const n=Pt.get(e);if(n)for(const e of n)e(t)}let Dt=null;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Lt="firebase-installations-store";let xt=null;function $t(){return xt||(xt=ut.openDb("firebase-installations-database",1,(e=>{if(0===e.oldVersion)e.createObjectStore(Lt)}))),xt}async function jt(e,t){const n=Rt(e),i=(await $t()).transaction(Lt,"readwrite"),r=i.objectStore(Lt),s=await r.get(n);return await r.put(t,n),await i.complete,s&&s.fid===t.fid||Nt(e,t.fid),t}async function Ut(e){const t=Rt(e),n=(await $t()).transaction(Lt,"readwrite");await n.objectStore(Lt).delete(t),await n.complete}async function Mt(e,t){const n=Rt(e),i=(await $t()).transaction(Lt,"readwrite"),r=i.objectStore(Lt),s=await r.get(n),o=t(s);return void 0===o?await r.delete(n):await r.put(o,n),await i.complete,!o||s&&s.fid===o.fid||Nt(e,o.fid),o}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function Ft(e){let t;const n=await Mt(e,(n=>{const i=function(e){return zt(e||{fid:Ct(),registrationStatus:0})}(n),r=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(vt.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=async function(e,t){try{const n=await async function(e,{fid:t}){const n=wt(e),i=_t(e),r={fid:t,authVersion:mt,appId:e.appId,sdkVersion:gt},s={method:"POST",headers:i,body:JSON.stringify(r)},o=await kt((()=>fetch(n,s)));if(o.ok){const e=await o.json();return{fid:e.fid||t,registrationStatus:2,refreshToken:e.refreshToken,authToken:It(e.authToken)}}throw await Tt("Create Installation",o)}(e,t);return jt(e,n)}catch(n){throw bt(n)&&409===n.customData.serverCode?await Ut(e):await jt(e,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Bt(e)}:{installationEntry:t}}(e,i);return t=r.registrationPromise,r.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function Bt(e){let t=await Ht(e);for(;1===t.registrationStatus;)await At(100),t=await Ht(e);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await Ft(e);return n||t}return t}function Ht(e){return Mt(e,(e=>{if(!e)throw vt.create("installation-not-found");return zt(e)}))}function zt(e){return 1===(t=e).registrationStatus&&t.registrationTime+pt<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}async function qt({appConfig:e,platformLoggerProvider:t},n){const i=function(e,{fid:t}){return`${wt(e)}/${t}/authTokens:generate`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e,n),r=Et(e,n),s=t.getImmediate({optional:!0});s&&r.append("x-firebase-client",s.getPlatformInfoString());const o={installation:{sdkVersion:gt}},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await kt((()=>fetch(i,a)));if(l.ok){return It(await l.json())}throw await Tt("Generate Auth Token",l)}async function Kt(e,t=!1){let n;const i=await Mt(e.appConfig,(i=>{if(!Gt(i))throw vt.create("not-registered");const r=i.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+yt}(e)}(r))return i;if(1===r.requestStatus)return n=async function(e,t){let n=await Vt(e.appConfig);for(;1===n.authToken.requestStatus;)await At(100),n=await Vt(e.appConfig);const i=n.authToken;return 0===i.requestStatus?Kt(e,t):i}(e,t),i;{if(!navigator.onLine)throw vt.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(i);return n=async function(e,t){try{const n=await qt(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await jt(e.appConfig,i),n}catch(n){if(!bt(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await jt(e.appConfig,n)}else await Ut(e.appConfig);throw n}}(e,t),t}}));return n?await n:i.authToken}function Vt(e){return Mt(e,(e=>{if(!Gt(e))throw vt.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+pt<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}))}function Gt(e){return void 0!==e&&2===e.registrationStatus}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function Xt(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await Ft(e);t&&await t}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(n.appConfig);return(await Kt(n,t)).token}function Wt(e){return vt.create("missing-app-config-values",{valueName:e})}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Jt="installations",Yt=e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw Wt("App Configuration");if(!e.name)throw Wt("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Wt(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,platformLoggerProvider:ot(t,"platform-logger"),_delete:()=>Promise.resolve()}},Zt=e=>{const t=ot(e.getProvider("app").getImmediate(),Jt).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:i}=await Ft(t.appConfig);return i?i.catch(console.error):Kt(t).catch(console.error),n.fid}(t),getToken:e=>Xt(t,e)}};st(new qe(Jt,Yt,"PUBLIC")),st(new qe("installations-internal",Zt,"PRIVATE")),at(dt,ft),at(dt,ft,"esm2017");
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Qt="analytics",en="https://www.googletagmanager.com/gtag/js",tn=new Je("@firebase/analytics");
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function nn(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function rn(e,t,n,i){return async function(r,s,o){try{"event"===r?await async function(e,t,n,i,r){try{let s=[];if(r&&r.send_to){let e=r.send_to;Array.isArray(e)||(e=[e]);const i=await nn(n);for(const n of e){const e=i.find((e=>e.measurementId===n)),r=e&&t[e.appId];if(!r){s=[];break}s.push(r)}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",i,r||{})}catch(e){tn.error(e)}}(e,t,n,s,o):"config"===r?await async function(e,t,n,i,r,s){const o=i[r];try{if(o)await t[o];else{const e=(await nn(n)).find((e=>e.measurementId===r));e&&await t[e.appId]}}catch(e){tn.error(e)}e("config",r,s)}(e,t,n,i,s,o):e("set",s)}catch(e){tn.error(e)}}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const sn=new je("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const on=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function an(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function ln(e,t=on,n){const{appId:i,apiKey:r,measurementId:s}=e.options;if(!i)throw sn.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw sn.create("no-api-key")}const o=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new cn;return setTimeout((async()=>{a.abort()}),void 0!==n?n:6e4),hn({appId:i,apiKey:r,measurementId:s},o,a,t)}async function hn(e,{throttleEndTimeMillis:t,backoffCount:n},i,r=on){const{appId:s,measurementId:o}=e;try{await function(e,t){return new Promise(((n,i)=>{const r=Math.max(t-Date.now(),0),s=setTimeout(n,r);e.addEventListener((()=>{clearTimeout(s),i(sn.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(i,t)}catch(e){if(o)return tn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${e.message}]`),{appId:s,measurementId:o};throw e}try{const t=await async function(e){var t;const{appId:n,apiKey:i}=e,r={method:"GET",headers:an(i)},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(s,r);if(200!==o.status&&304!==o.status){let e="";try{const n=await o.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw sn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:e})}return o.json()}(e);return r.deleteThrottleMetadata(s),t}catch(t){if(!function(e){if(!(e instanceof $e&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(t)){if(r.deleteThrottleMetadata(s),o)return tn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${t.message}]`),{appId:s,measurementId:o};throw t}const a=503===Number(t.customData.httpStatus)?He(n,r.intervalMillis,30):He(n,r.intervalMillis),l={throttleEndTimeMillis:Date.now()+a,backoffCount:n+1};return r.setThrottleMetadata(s,l),tn.debug(`Calling attemptFetch again in ${a} millis`),hn(e,l,i,r)}}class cn{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function un(){if("object"!=typeof indexedDB)return tn.warn(sn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}catch(e){return tn.warn(sn.create("indexeddb-unavailable",{errorInfo:e}).message),!1}return!0}async function dn(e,t,n,i,r,s,o){var a;const l=ln(e);l.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&tn.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>tn.error(e))),t.push(l);const h=un().then((e=>e?i.getId():void 0)),[c,u]=await Promise.all([l,h]);(function(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(en))return t;return null})()||function(e,t){const n=document.createElement("script");n.src=`${en}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}(s,c.measurementId),r("js",new Date);const d=null!==(a=null==o?void 0:o.config)&&void 0!==a?a:{};return d.origin="firebase",d.update=!0,null!=u&&(d.firebase_id=u),r("config",c.measurementId,d),c.measurementId}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class fn{constructor(e){this.app=e}_delete(){return delete pn[this.app.options.appId],Promise.resolve()}}let pn={},gn=[];const mn={};let yn,vn,bn="dataLayer",wn=!1;function In(){const e=[];if(xe()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=sn.create("invalid-analytics-context",{errorInfo:t});tn.warn(n.message)}}function Tn(e,t,n){In();const i=e.options.appId;if(!i)throw sn.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw sn.create("no-api-key");tn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=pn[i])throw sn.create("already-exists",{id:i});if(!wn){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(bn);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,i,r){let s=function(...e){window[i].push(arguments)};return window[r]&&"function"==typeof window[r]&&(s=window[r]),window[r]=rn(s,e,t,n),{gtagCore:s,wrappedGtag:window[r]}}(pn,gn,mn,bn,"gtag");vn=e,yn=t,wn=!0}pn[i]=dn(e,gn,mn,t,yn,bn,n);return new fn(e)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function _n(e,t,n,i){e=ze(e),async function(e,t,n,i,r){if(r&&r.global)e("event",n,i);else{const r=await t;e("event",n,Object.assign(Object.assign({},i),{send_to:r}))}}(vn,pn[e.app.options.appId],t,n,i).catch((e=>tn.error(e)))}const En="@firebase/analytics",kn="0.7.4";st(new qe(Qt,((e,{options:t})=>Tn(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),st(new qe("analytics-internal",(function(e){try{const t=e.getProvider(Qt).getImmediate();return{logEvent:(e,n,i)=>_n(t,e,n,i)}}catch(e){throw sn.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),at(En,kn),at(En,kn,"esm2017");var An,Sn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Cn=Cn||{},Rn=Sn||self;function Pn(){}function Nn(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function On(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var Dn="closure_uid_"+(1e9*Math.random()>>>0),Ln=0;function xn(e,t,n){return e.call.apply(e.bind,arguments)}function $n(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function jn(e,t,n){return(jn=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?xn:$n).apply(null,arguments)}function Un(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function Mn(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[n].apply(e,r)}}function Fn(){this.s=this.s,this.o=this.o}var Bn={};Fn.prototype.s=!1,Fn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var e=function(e){return Object.prototype.hasOwnProperty.call(e,Dn)&&e[Dn]||(e[Dn]=++Ln)}(this);delete Bn[e]}},Fn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Hn=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},zn=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const i=e.length,r="string"==typeof e?e.split(""):e;for(let s=0;s<i;s++)s in r&&t.call(n,r[s],s,e)};function qn(e){return Array.prototype.concat.apply([],arguments)}function Kn(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function Vn(e){return/^[\s\xa0]*$/.test(e)}var Gn,Xn=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Wn(e,t){return-1!=e.indexOf(t)}function Jn(e,t){return e<t?-1:e>t?1:0}e:{var Yn=Rn.navigator;if(Yn){var Zn=Yn.userAgent;if(Zn){Gn=Zn;break e}}Gn=""}function Qn(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function ei(e){const t={};for(const n in e)t[n]=e[n];return t}var ti="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ni(e,t){let n,i;for(let t=1;t<arguments.length;t++){for(n in i=arguments[t],i)e[n]=i[n];for(let t=0;t<ti.length;t++)n=ti[t],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function ii(e){return ii[" "](e),e}ii[" "]=Pn;var ri,si,oi=Wn(Gn,"Opera"),ai=Wn(Gn,"Trident")||Wn(Gn,"MSIE"),li=Wn(Gn,"Edge"),hi=li||ai,ci=Wn(Gn,"Gecko")&&!(Wn(Gn.toLowerCase(),"webkit")&&!Wn(Gn,"Edge"))&&!(Wn(Gn,"Trident")||Wn(Gn,"MSIE"))&&!Wn(Gn,"Edge"),ui=Wn(Gn.toLowerCase(),"webkit")&&!Wn(Gn,"Edge");function di(){var e=Rn.document;return e?e.documentMode:void 0}e:{var fi="",pi=(si=Gn,ci?/rv:([^\);]+)(\)|;)/.exec(si):li?/Edge\/([\d\.]+)/.exec(si):ai?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(si):ui?/WebKit\/(\S+)/.exec(si):oi?/(?:Version)[ \/]?(\S+)/.exec(si):void 0);if(pi&&(fi=pi?pi[1]:""),ai){var gi=di();if(null!=gi&&gi>parseFloat(fi)){ri=String(gi);break e}}ri=fi}var mi={};function yi(){return function(e){var t=mi;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=Xn(String(ri)).split("."),n=Xn("9").split("."),i=Math.max(t.length,n.length);for(let o=0;0==e&&o<i;o++){var r=t[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==r[0].length&&0==s[0].length)break;e=Jn(0==r[1].length?0:parseInt(r[1],10),0==s[1].length?0:parseInt(s[1],10))||Jn(0==r[2].length,0==s[2].length)||Jn(r[2],s[2]),r=r[3],s=s[3]}while(0==e)}return 0<=e}))}Rn.document&&ai&&di();var vi=function(){if(!Rn.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{Rn.addEventListener("test",Pn,t),Rn.removeEventListener("test",Pn,t)}catch(e){}return e}();function bi(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function wi(e,t){if(bi.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(ci){e:{try{ii(t.nodeName);var r=!0;break e}catch(e){}r=!1}r||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Ii[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&wi.Z.h.call(this)}}bi.prototype.h=function(){this.defaultPrevented=!0},Mn(wi,bi);var Ii={2:"touch",3:"pen",4:"mouse"};wi.prototype.h=function(){wi.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ti="closure_listenable_"+(1e6*Math.random()|0),_i=0;function Ei(e,t,n,i,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.ia=r,this.key=++_i,this.ca=this.fa=!1}function ki(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function Ai(e){this.src=e,this.g={},this.h=0}function Si(e,t){var n=t.type;if(n in e.g){var i,r=e.g[n],s=Hn(r,t);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ki(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Ci(e,t,n,i){for(var r=0;r<e.length;++r){var s=e[r];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==i)return r}return-1}Ai.prototype.add=function(e,t,n,i,r){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=Ci(e,t,i,r);return-1<o?(t=e[o],n||(t.fa=!1)):((t=new Ei(t,this.src,s,!!i,r)).fa=n,e.push(t)),t};var Ri="closure_lm_"+(1e6*Math.random()|0),Pi={};function Ni(e,t,n,i,r){if(i&&i.once)return Di(e,t,n,i,r);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Ni(e,t[s],n,i,r);return null}return n=Fi(n),e&&e[Ti]?e.N(t,n,On(i)?!!i.capture:!!i,r):Oi(e,t,n,!1,i,r)}function Oi(e,t,n,i,r,s){if(!t)throw Error("Invalid event type");var o=On(r)?!!r.capture:!!r,a=Ui(e);if(a||(e[Ri]=a=new Ai(e)),(n=a.add(t,n,i,o,s)).proxy)return n;if(i=function(){function e(n){return t.call(e.src,e.listener,n)}var t=ji;return e}(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)vi||(r=o),void 0===r&&(r=!1),e.addEventListener(t.toString(),i,r);else if(e.attachEvent)e.attachEvent($i(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}function Di(e,t,n,i,r){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Di(e,t[s],n,i,r);return null}return n=Fi(n),e&&e[Ti]?e.O(t,n,On(i)?!!i.capture:!!i,r):Oi(e,t,n,!0,i,r)}function Li(e,t,n,i,r){if(Array.isArray(t))for(var s=0;s<t.length;s++)Li(e,t[s],n,i,r);else i=On(i)?!!i.capture:!!i,n=Fi(n),e&&e[Ti]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=Ci(s=e.g[t],n,i,r))&&(ki(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Ui(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Ci(t,n,i,r)),(n=-1<e?t[e]:null)&&xi(n))}function xi(e){if("number"!=typeof e&&e&&!e.ca){var t=e.src;if(t&&t[Ti])Si(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent($i(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=Ui(t))?(Si(n,e),0==n.h&&(n.src=null,t[Ri]=null)):ki(e)}}}function $i(e){return e in Pi?Pi[e]:Pi[e]="on"+e}function ji(e,t){if(e.ca)e=!0;else{t=new wi(t,this);var n=e.listener,i=e.ia||e.src;e.fa&&xi(e),e=n.call(i,t)}return e}function Ui(e){return(e=e[Ri])instanceof Ai?e:null}var Mi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fi(e){return"function"==typeof e?e:(e[Mi]||(e[Mi]=function(t){return e.handleEvent(t)}),e[Mi])}function Bi(){Fn.call(this),this.i=new Ai(this),this.P=this,this.I=null}function Hi(e,t){var n,i=e.I;if(i)for(n=[];i;i=i.I)n.push(i);if(e=e.P,i=t.type||t,"string"==typeof t)t=new bi(t,e);else if(t instanceof bi)t.target=t.target||e;else{var r=t;ni(t=new bi(i,e),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];r=zi(o,i,!0,t)&&r}if(r=zi(o=t.g=e,i,!0,t)&&r,r=zi(o,i,!1,t)&&r,n)for(s=0;s<n.length;s++)r=zi(o=t.g=n[s],i,!1,t)&&r}function zi(e,t,n,i){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&Si(e.i,o),r=!1!==a.call(l,i)&&r}}return r&&!i.defaultPrevented}Mn(Bi,Fn),Bi.prototype[Ti]=!0,Bi.prototype.removeEventListener=function(e,t,n,i){Li(this,e,t,n,i)},Bi.prototype.M=function(){if(Bi.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)ki(n[i]);delete t.g[e],t.h--}}this.I=null},Bi.prototype.N=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},Bi.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};var qi=Rn.JSON.stringify;function Ki(){var e=Zi;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Vi,Gi=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Xi),(e=>e.reset()));class Xi{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Wi(e){Rn.setTimeout((()=>{throw e}),0)}function Ji(e,t){Vi||function(){var e=Rn.Promise.resolve(void 0);Vi=function(){e.then(Qi)}}(),Yi||(Vi(),Yi=!0),Zi.add(e,t)}var Yi=!1,Zi=new class{constructor(){this.h=this.g=null}add(e,t){const n=Gi.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function Qi(){for(var e;e=Ki();){try{e.h.call(e.g)}catch(e){Wi(e)}var t=Gi;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Yi=!1}function er(e,t){Bi.call(this),this.h=e||1,this.g=t||Rn,this.j=jn(this.kb,this),this.l=Date.now()}function tr(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function nr(e,t,n){if("function"==typeof e)n&&(e=jn(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=jn(e.handleEvent,e)}return 2147483647<Number(t)?-1:Rn.setTimeout(e,t||0)}function ir(e){e.g=nr((()=>{e.g=null,e.i&&(e.i=!1,ir(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}Mn(er,Bi),(An=er.prototype).da=!1,An.S=null,An.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Hi(this,"tick"),this.da&&(tr(this),this.start()))}},An.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},An.M=function(){er.Z.M.call(this),tr(this),delete this.g};class rr extends Fn{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ir(this)}M(){super.M(),this.g&&(Rn.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function sr(e){Fn.call(this),this.h=e,this.g={}}Mn(sr,Fn);var or=[];function ar(e,t,n,i){Array.isArray(n)||(n&&(or[0]=n.toString()),n=or);for(var r=0;r<n.length;r++){var s=Ni(t,n[r],i||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function lr(e){Qn(e.g,(function(e,t){this.g.hasOwnProperty(t)&&xi(e)}),e),e.g={}}function hr(){this.g=!0}function cr(e,t,n,i){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return qi(n)}catch(e){return t}}(e,n)+(i?" "+i:"")}))}sr.prototype.M=function(){sr.Z.M.call(this),lr(this)},sr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},hr.prototype.Aa=function(){this.g=!1},hr.prototype.info=function(){};var ur={},dr=null;function fr(){return dr=dr||new Bi}function pr(e){bi.call(this,ur.Ma,e)}function gr(e){const t=fr();Hi(t,new pr(t,e))}function mr(e,t){bi.call(this,ur.STAT_EVENT,e),this.stat=t}function yr(e){const t=fr();Hi(t,new mr(t,e))}function vr(e,t){bi.call(this,ur.Na,e),this.size=t}function br(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return Rn.setTimeout((function(){e()}),t)}ur.Ma="serverreachability",Mn(pr,bi),ur.STAT_EVENT="statevent",Mn(mr,bi),ur.Na="timingevent",Mn(vr,bi);var wr={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9};function Ir(){}function Tr(e){return e.h||(e.h=e.i())}Ir.prototype.h=null;var _r,Er={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function kr(){bi.call(this,"d")}function Ar(){bi.call(this,"c")}function Sr(){}function Cr(e,t,n,i){this.l=e,this.j=t,this.m=n,this.X=i||1,this.V=new sr(this),this.P=Pr,e=hi?125:void 0,this.W=new er(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Rr}function Rr(){this.i=null,this.g="",this.h=!1}Mn(kr,bi),Mn(Ar,bi),Mn(Sr,Ir),Sr.prototype.g=function(){return new XMLHttpRequest},Sr.prototype.i=function(){return{}},_r=new Sr;var Pr=45e3,Nr={},Or={};function Dr(e,t,n){e.K=1,e.v=ns(Jr(t)),e.s=n,e.U=!0,Lr(e,null)}function Lr(e,t){e.F=Date.now(),Ur(e),e.A=Jr(e.v);var n=e.A,i=e.X;Array.isArray(i)||(i=[String(i)]),gs(n.h,"t",i),e.C=0,n=e.l.H,e.h=new Rr,e.g=mo(e.l,n?t:null,!e.s),0<e.O&&(e.L=new rr(jn(e.Ia,e,e.g),e.O)),ar(e.V,e.g,"readystatechange",e.gb),t=e.H?ei(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),gr(1),function(e,t,n,i,r,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var h=a[l].split("=");if(1<h.length){var c=h[0];h=h[1];var u=c.split("_");o=2<=u.length&&"type"==u[1]?o+(c+"=")+h+"&":o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.X,e.s)}function xr(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function $r(e,t,n){let i,r=!0;for(;!e.I&&e.C<n.length;){if(i=jr(e,n),i==Or){4==t&&(e.o=4,yr(14),r=!1),cr(e.j,e.m,null,"[Incomplete Response]");break}if(i==Nr){e.o=4,yr(15),cr(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}cr(e.j,e.m,i,null),zr(e,i)}xr(e)&&i!=Or&&i!=Nr&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,yr(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.aa&&(e.aa=!0,(t=e.l).g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),ao(t),t.L=!0,yr(11))):(cr(e.j,e.m,n,"[Invalid Chunked Response]"),Hr(e),Br(e))}function jr(e,t){var n=e.C,i=t.indexOf("\n",n);return-1==i?Or:(n=Number(t.substring(n,i)),isNaN(n)?Nr:(i+=1)+n>t.length?Or:(t=t.substr(i,n),e.C=i+n,t))}function Ur(e){e.Y=Date.now()+e.P,Mr(e,e.P)}function Mr(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=br(jn(e.eb,e),t)}function Fr(e){e.B&&(Rn.clearTimeout(e.B),e.B=null)}function Br(e){0==e.l.G||e.I||co(e.l,e)}function Hr(e){Fr(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,tr(e.W),lr(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function zr(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||Is(n.i,e)))if(n.I=e.N,!e.J&&Is(n.i,e)&&3==n.G){try{var i=n.Ca.g.parse(t)}catch(e){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;ho(n),Zs(n)}oo(n),yr(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&0==n.A&&!n.v&&(n.v=br(jn(n.ab,n),6e3));if(1>=ws(n.i)&&n.ka){try{n.ka()}catch(e){}n.ka=void 0}}else fo(n,11)}else if((e.J||n.g==e)&&ho(n),!Vn(t))for(r=n.Ca.g.parse(t),t=0;t<r.length;t++){let h=r[t];if(n.U=h[0],h=h[1],2==n.G)if("c"==h[0]){n.J=h[1],n.la=h[2];const t=h[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const r=h[4];null!=r&&(n.za=r,n.h.info("SVER="+n.za));const c=h[5];null!=c&&"number"==typeof c&&0<c&&(i=1.5*c,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const u=e.g;if(u){const e=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=i.i;!s.g&&(Wn(e,"spdy")||Wn(e,"quic")||Wn(e,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Ts(s,s.h),s.h=null))}if(i.D){const e=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.sa=e,ts(i.F,i.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=e;if((i=n).oa=go(i,i.H?i.la:null,i.W),o.J){_s(i.i,o);var a=o,l=i.K;l&&a.setTimeout(l),a.B&&(Fr(a),Ur(a)),i.g=o}else so(i);0<n.l.length&&to(n)}else"stop"!=h[0]&&"close"!=h[0]||fo(n,7);else 3==n.G&&("stop"==h[0]||"close"==h[0]?"stop"==h[0]?fo(n,7):Ys(n):"noop"!=h[0]&&n.j&&n.j.wa(h),n.A=0)}gr(4)}catch(e){}}function qr(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(Nn(e)||"string"==typeof e)zn(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(Nn(e)||"string"==typeof e){n=[];for(var i=e.length,r=0;r<i;r++)n.push(r)}else for(r in n=[],i=0,e)n[i++]=r;i=function(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"==typeof e)return e.split("");if(Nn(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}for(i in t=[],n=0,e)t[n++]=e[i];return t}(e),r=i.length;for(var s=0;s<r;s++)t.call(void 0,i[s],n&&n[s],e)}}function Kr(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(e)if(e instanceof Kr)for(n=e.T(),i=0;i<n.length;i++)this.set(n[i],e.get(n[i]));else for(i in e)this.set(i,e[i])}function Vr(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var i=e.g[t];Gr(e.h,i)&&(e.g[n++]=i),t++}e.g.length=n}if(e.i!=e.g.length){var r={};for(n=t=0;t<e.g.length;)Gr(r,i=e.g[t])||(e.g[n++]=i,r[i]=1),t++;e.g.length=n}}function Gr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}(An=Cr.prototype).setTimeout=function(e){this.P=e},An.gb=function(e){e=e.target;const t=this.L;t&&3==Vs(e)?t.l():this.Ia(e)},An.Ia=function(e){try{if(e==this.g)e:{const c=Vs(this.g);var t=this.g.Da();const u=this.g.ba();if(!(3>c)&&(3!=c||hi||this.g&&(this.h.h||this.g.ga()||Gs(this.g)))){this.I||4!=c||7==t||gr(8==t||0>=u?3:2),Fr(this);var n=this.g.ba();this.N=n;t:if(xr(this)){var i=Gs(this.g);e="";var r=i.length,s=4==Vs(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Hr(this),Br(this);var o="";break t}this.h.i=new Rn.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:s&&t==r-1});i.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(e,t,n,i,r,s,o){e.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Vn(a)){var h=a;break t}}h=null}if(!(n=h)){this.i=!1,this.o=3,yr(12),Hr(this),Br(this);break e}cr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,zr(this,n)}this.U?($r(this,c,o),hi&&this.i&&3==c&&(ar(this.V,this.W,"tick",this.fb),this.W.start())):(cr(this.j,this.m,o,null),zr(this,o)),4==c&&Hr(this),this.i&&!this.I&&(4==c?co(this.l,this):(this.i=!1,Ur(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,yr(12)):(this.o=0,yr(13)),Hr(this),Br(this)}}}catch(e){}},An.fb=function(){if(this.g){var e=Vs(this.g),t=this.g.ga();this.C<t.length&&(Fr(this),$r(this,e,t),this.i&&4!=e&&Ur(this))}},An.cancel=function(){this.I=!0,Hr(this)},An.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(gr(3),yr(17)),Hr(this),this.o=2,Br(this)):Mr(this,this.Y-e)},(An=Kr.prototype).R=function(){Vr(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},An.T=function(){return Vr(this),this.g.concat()},An.get=function(e,t){return Gr(this.h,e)?this.h[e]:t},An.set=function(e,t){Gr(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},An.forEach=function(e,t){for(var n=this.T(),i=0;i<n.length;i++){var r=n[i],s=this.get(r);e.call(t,s,r,this)}};var Xr=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Wr(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Wr){this.g=void 0!==t?t:e.g,Yr(this,e.j),this.s=e.s,Zr(this,e.i),Qr(this,e.m),this.l=e.l,t=e.h;var n=new us;n.i=t.i,t.g&&(n.g=new Kr(t.g),n.h=t.h),es(this,n),this.o=e.o}else e&&(n=String(e).match(Xr))?(this.g=!!t,Yr(this,n[1]||"",!0),this.s=is(n[2]||""),Zr(this,n[3]||"",!0),Qr(this,n[4]),this.l=is(n[5]||"",!0),es(this,n[6]||"",!0),this.o=is(n[7]||"")):(this.g=!!t,this.h=new us(null,this.g))}function Jr(e){return new Wr(e)}function Yr(e,t,n){e.j=n?is(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Zr(e,t,n){e.i=n?is(t,!0):t}function Qr(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function es(e,t,n){t instanceof us?(e.h=t,function(e,t){t&&!e.j&&(ds(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(fs(this,t),gs(this,n,e))}),e)),e.j=t}(e.h,e.g)):(n||(t=rs(t,hs)),e.h=new us(t,e.g))}function ts(e,t,n){e.h.set(t,n)}function ns(e){return ts(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function is(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function rs(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,ss),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ss(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Wr.prototype.toString=function(){var e=[],t=this.j;t&&e.push(rs(t,os,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(rs(t,os,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(rs(n,"/"==n.charAt(0)?ls:as,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",rs(n,cs)),e.join("")};var os=/[#\/\?@]/g,as=/[#\?:]/g,ls=/[#\?]/g,hs=/[#\?@]/g,cs=/#/g;function us(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ds(e){e.g||(e.g=new Kr,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),r=null;if(0<=i){var s=e[n].substring(0,i);r=e[n].substring(i+1)}else s=e[n];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function fs(e,t){ds(e),t=ms(e,t),Gr(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,Gr((e=e.g).h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Vr(e)))}function ps(e,t){return ds(e),t=ms(e,t),Gr(e.g.h,t)}function gs(e,t,n){fs(e,t),0<n.length&&(e.i=null,e.g.set(ms(e,t),Kn(n)),e.h+=n.length)}function ms(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(An=us.prototype).add=function(e,t){ds(this),this.i=null,e=ms(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},An.forEach=function(e,t){ds(this),this.g.forEach((function(n,i){zn(n,(function(n){e.call(t,n,i,this)}),this)}),this)},An.T=function(){ds(this);for(var e=this.g.R(),t=this.g.T(),n=[],i=0;i<t.length;i++)for(var r=e[i],s=0;s<r.length;s++)n.push(t[i]);return n},An.R=function(e){ds(this);var t=[];if("string"==typeof e)ps(this,e)&&(t=qn(t,this.g.get(ms(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=qn(t,e[n])}return t},An.set=function(e,t){return ds(this),this.i=null,ps(this,e=ms(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},An.get=function(e,t){return e&&0<(e=this.R(e)).length?String(e[0]):t},An.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var i=t[n],r=encodeURIComponent(String(i));i=this.R(i);for(var s=0;s<i.length;s++){var o=r;""!==i[s]&&(o+="="+encodeURIComponent(String(i[s]))),e.push(o)}}return this.i=e.join("&")};function ys(e){this.l=e||vs,Rn.PerformanceNavigationTiming?e=0<(e=Rn.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(Rn.g&&Rn.g.Ea&&Rn.g.Ea()&&Rn.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var vs=10;function bs(e){return!!e.h||!!e.g&&e.g.size>=e.j}function ws(e){return e.h?1:e.g?e.g.size:0}function Is(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Ts(e,t){e.g?e.g.add(t):e.h=t}function _s(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Es(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Kn(e.i)}function ks(){}function As(){this.g=new ks}function Ss(e,t,n){const i=n||"";try{qr(e,(function(e,n){let r=e;On(e)&&(r=qi(e)),t.push(i+n+"="+encodeURIComponent(r))}))}catch(e){throw t.push(i+"type="+encodeURIComponent("_badmap")),e}}function Cs(e,t,n,i,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(i)}catch(e){}}function Rs(e){this.l=e.$b||null,this.j=e.ib||!1}function Ps(e,t){Bi.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Ns,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ys.prototype.cancel=function(){if(this.i=Es(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},ks.prototype.stringify=function(e){return Rn.JSON.stringify(e,void 0)},ks.prototype.parse=function(e){return Rn.JSON.parse(e,void 0)},Mn(Rs,Ir),Rs.prototype.g=function(){return new Ps(this.l,this.j)},Rs.prototype.i=function(e){return function(){return e}}({}),Mn(Ps,Bi);var Ns=0;function Os(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function Ds(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ls(e)}function Ls(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(An=Ps.prototype).open=function(e,t){if(this.readyState!=Ns)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ls(this)},An.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||Rn).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},An.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Ds(this)),this.readyState=Ns},An.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ls(this)),this.g&&(this.readyState=3,Ls(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==Rn.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Os(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},An.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ds(this):Ls(this),3==this.readyState&&Os(this)}},An.Ua=function(e){this.g&&(this.response=this.responseText=e,Ds(this))},An.Ta=function(e){this.g&&(this.response=e,Ds(this))},An.ha=function(){this.g&&Ds(this)},An.setRequestHeader=function(e,t){this.v.append(e,t)},An.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},An.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Ps.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var xs=Rn.JSON.parse;function $s(e){Bi.call(this),this.headers=new Kr,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=js,this.K=this.L=!1}Mn($s,Bi);var js="",Us=/^https?$/i,Ms=["POST","PUT"];function Fs(e){return"content-type"==e.toLowerCase()}function Bs(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Hs(e),qs(e)}function Hs(e){e.D||(e.D=!0,Hi(e,"complete"),Hi(e,"error"))}function zs(e){if(e.h&&void 0!==Cn&&(!e.C[1]||4!=Vs(e)||2!=e.ba()))if(e.v&&4==Vs(e))nr(e.Fa,0,e);else if(Hi(e,"readystatechange"),4==Vs(e)){e.h=!1;try{const a=e.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=0===a){var r=String(e.H).match(Xr)[1]||null;if(!r&&Rn.self&&Rn.self.location){var s=Rn.self.location.protocol;r=s.substr(0,s.length-1)}i=!Us.test(r?r.toLowerCase():"")}n=i}if(n)Hi(e,"complete"),Hi(e,"success");else{e.m=6;try{var o=2<Vs(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.ba()+"]",Hs(e)}}finally{qs(e)}}}function qs(e,t){if(e.g){Ks(e);const n=e.g,i=e.C[0]?Pn:null;e.g=null,e.C=null,t||Hi(e,"ready");try{n.onreadystatechange=i}catch(e){}}}function Ks(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(Rn.clearTimeout(e.A),e.A=null)}function Vs(e){return e.g?e.g.readyState:0}function Gs(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case js:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Xs(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=function(e){let t="";return Qn(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):ts(e,t,n))}function Ws(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Js(e){this.za=0,this.l=[],this.h=new hr,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ws("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ws("baseRetryDelayMs",5e3,e),this.$a=Ws("retryDelaySeedMs",1e4,e),this.Ya=Ws("forwardChannelMaxRetries",2,e),this.ra=Ws("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new ys(e&&e.concurrentRequestLimit),this.Ca=new As,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function Ys(e){if(Qs(e),3==e.G){var t=e.V++,n=Jr(e.F);ts(n,"SID",e.J),ts(n,"RID",t),ts(n,"TYPE","terminate"),io(e,n),(t=new Cr(e,e.h,t,void 0)).K=2,t.v=ns(Jr(n)),n=!1,Rn.navigator&&Rn.navigator.sendBeacon&&(n=Rn.navigator.sendBeacon(t.v.toString(),"")),!n&&Rn.Image&&((new Image).src=t.v,n=!0),n||(t.g=mo(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Ur(t)}po(e)}function Zs(e){e.g&&(ao(e),e.g.cancel(),e.g=null)}function Qs(e){Zs(e),e.u&&(Rn.clearTimeout(e.u),e.u=null),ho(e),e.i.cancel(),e.m&&("number"==typeof e.m&&Rn.clearTimeout(e.m),e.m=null)}function eo(e,t){e.l.push(new class{constructor(e,t){this.h=e,this.g=t}}(e.Za++,t)),3==e.G&&to(e)}function to(e){bs(e.i)||e.m||(e.m=!0,Ji(e.Ha,e),e.C=0)}function no(e,t){var n;n=t?t.m:e.V++;const i=Jr(e.F);ts(i,"SID",e.J),ts(i,"RID",n),ts(i,"AID",e.U),io(e,i),e.o&&e.s&&Xs(i,e.o,e.s),n=new Cr(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=ro(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),Ts(e.i,n),Dr(n,i,t)}function io(e,t){e.j&&qr({},(function(e,n){ts(t,n,e)}))}function ro(e,t,n){n=Math.min(e.l.length,n);var i=e.j?jn(e.j.Oa,e.j,e):null;e:{var r=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=r[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=r[o].h;const a=r[o].g;if(n-=t,0>n)t=Math.max(0,r[o].h-100),s=!1;else try{Ss(a,e,"req"+n+"_")}catch(e){i&&i(a)}}if(s){i=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,i}function so(e){e.g||e.u||(e.Y=1,Ji(e.Ga,e),e.A=0)}function oo(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=br(jn(e.Ga,e),uo(e,e.A)),e.A++,!0)}function ao(e){null!=e.B&&(Rn.clearTimeout(e.B),e.B=null)}function lo(e){e.g=new Cr(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Jr(e.oa);ts(t,"RID","rpc"),ts(t,"SID",e.J),ts(t,"CI",e.N?"0":"1"),ts(t,"AID",e.U),io(e,t),ts(t,"TYPE","xmlhttp"),e.o&&e.s&&Xs(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=ns(Jr(t)),n.s=null,n.U=!0,Lr(n,e)}function ho(e){null!=e.v&&(Rn.clearTimeout(e.v),e.v=null)}function co(e,t){var n=null;if(e.g==t){ho(e),ao(e),e.g=null;var i=2}else{if(!Is(e.i,t))return;n=t.D,_s(e.i,t),i=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==i){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;Hi(i=fr(),new vr(i,n,t,r)),to(e)}else so(e);else if(3==(r=t.o)||0==r&&0<e.I||!(1==i&&function(e,t){return!(ws(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.l=t.D.concat(e.l),0):1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya)||(e.m=br(jn(e.Ha,e,t),uo(e,e.C)),e.C++,0)))}(e,t)||2==i&&oo(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),r){case 1:fo(e,5);break;case 4:fo(e,10);break;case 3:fo(e,6);break;default:fo(e,2)}}function uo(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function fo(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var i=jn(e.jb,e);n||(n=new Wr("//www.google.com/images/cleardot.gif"),Rn.location&&"http"==Rn.location.protocol||Yr(n,"https"),ns(n)),function(e,t){const n=new hr;if(Rn.Image){const i=new Image;i.onload=Un(Cs,n,i,"TestLoadImage: loaded",!0,t),i.onerror=Un(Cs,n,i,"TestLoadImage: error",!1,t),i.onabort=Un(Cs,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=Un(Cs,n,i,"TestLoadImage: timeout",!1,t),Rn.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=e}else t(!1)}(n.toString(),i)}else yr(2);e.G=0,e.j&&e.j.va(t),po(e),Qs(e)}function po(e){e.G=0,e.I=-1,e.j&&(0==Es(e.i).length&&0==e.l.length||(e.i.i.length=0,Kn(e.l),e.l.length=0),e.j.ua())}function go(e,t,n){let i=function(e){return e instanceof Wr?Jr(e):new Wr(e,void 0)}(n);if(""!=i.i)t&&Zr(i,t+"."+i.i),Qr(i,i.m);else{const e=Rn.location;i=function(e,t,n,i){var r=new Wr(null,void 0);return e&&Yr(r,e),t&&Zr(r,t),n&&Qr(r,n),i&&(r.l=i),r}(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&Qn(e.aa,(function(e,t){ts(i,t,e)})),t=e.D,n=e.sa,t&&n&&ts(i,t,n),ts(i,"VER",e.ma),io(e,i),i}function mo(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ba&&!e.qa?new $s(new Rs({ib:!0})):new $s(e.qa)).L=e.H,t}function yo(){}function vo(e,t){Bi.call(this),this.g=new Js(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!Vn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Vn(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Io(this)}function bo(e){kr.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function wo(){Ar.call(this),this.status=1}function Io(e){this.g=e}(An=$s.prototype).ea=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():_r.g(),this.C=this.u?Tr(this.u):Tr(_r),this.g.onreadystatechange=jn(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void Bs(this,e)}e=n||"";const r=new Kr(this.headers);i&&qr(i,(function(e,t){r.set(t,e)})),i=function(e){e:{var t=Fs;const n=e.length,i="string"==typeof e?e.split(""):e;for(let r=0;r<n;r++)if(r in i&&t.call(void 0,i[r],r,e)){t=r;break e}t=-1}return 0>t?null:"string"==typeof e?e.charAt(t):e[t]}(r.T()),n=Rn.FormData&&e instanceof Rn.FormData,!(0<=Hn(Ms,t))||i||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ks(this),0<this.B&&((this.K=function(e){return ai&&yi()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=jn(this.pa,this)):this.A=nr(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){Bs(this,e)}},An.pa=function(){void 0!==Cn&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Hi(this,"timeout"),this.abort(8))},An.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Hi(this,"complete"),Hi(this,"abort"),qs(this))},An.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),qs(this,!0)),$s.Z.M.call(this)},An.Fa=function(){this.s||(this.F||this.v||this.l?zs(this):this.cb())},An.cb=function(){zs(this)},An.ba=function(){try{return 2<Vs(this)?this.g.status:-1}catch(e){return-1}},An.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},An.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),xs(t)}},An.Da=function(){return this.m},An.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(An=Js.prototype).ma=8,An.G=1,An.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(e){}},An.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const r=new Cr(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?(s=ei(s),ni(s,this.P)):s=this.P),null===this.o&&(r.H=s),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var i=this.l[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(t+=i)){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=ro(this,r,t),ts(n=Jr(this.F),"RID",e),ts(n,"CVER",22),this.D&&ts(n,"X-HTTP-Session-Id",this.D),io(this,n),this.o&&s&&Xs(n,this.o,s),Ts(this.i,r),this.Ra&&ts(n,"TYPE","init"),this.ja?(ts(n,"$req",t),ts(n,"SID","null"),r.$=!0,Dr(r,n,null)):Dr(r,n,t),this.G=2}}else 3==this.G&&(e?no(this,e):0==this.l.length||bs(this.i)||no(this))},An.Ga=function(){if(this.u=null,lo(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=br(jn(this.bb,this),e)}},An.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,yr(10),Zs(this),lo(this))},An.ab=function(){null!=this.v&&(this.v=null,Zs(this),oo(this),yr(19))},An.jb=function(e){e?(this.h.info("Successfully pinged google.com"),yr(2)):(this.h.info("Failed to ping google.com"),yr(1))},(An=yo.prototype).xa=function(){},An.wa=function(){},An.va=function(){},An.ua=function(){},An.Oa=function(){},Mn(vo,Bi),vo.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Ji(jn(e.hb,e,t))),yr(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=go(e,null,e.W),to(e)},vo.prototype.close=function(){Ys(this.g)},vo.prototype.u=function(e){if("string"==typeof e){var t={};t.__data__=e,eo(this.g,t)}else this.v?((t={}).__data__=qi(e),eo(this.g,t)):eo(this.g,e)},vo.prototype.M=function(){this.g.j=null,delete this.j,Ys(this.g),delete this.g,vo.Z.M.call(this)},Mn(bo,kr),Mn(wo,Ar),Mn(Io,yo),Io.prototype.xa=function(){Hi(this.g,"a")},Io.prototype.wa=function(e){Hi(this.g,new bo(e))},Io.prototype.va=function(e){Hi(this.g,new wo(e))},Io.prototype.ua=function(){Hi(this.g,"b")},vo.prototype.send=vo.prototype.u,vo.prototype.open=vo.prototype.m,vo.prototype.close=vo.prototype.close,wr.NO_ERROR=0,wr.TIMEOUT=8,wr.HTTP_ERROR=6,Er.OPEN="a",Er.CLOSE="b",Er.ERROR="c",Er.MESSAGE="d",Bi.prototype.listen=Bi.prototype.N,$s.prototype.listenOnce=$s.prototype.O,$s.prototype.getLastError=$s.prototype.La,$s.prototype.getLastErrorCode=$s.prototype.Da,$s.prototype.getStatus=$s.prototype.ba,$s.prototype.getResponseJson=$s.prototype.Qa,$s.prototype.getResponseText=$s.prototype.ga,$s.prototype.send=$s.prototype.ea;const To="@firebase/firestore";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class _o{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_o.UNAUTHENTICATED=new _o(null),_o.GOOGLE_CREDENTIALS=new _o("google-credentials-uid"),_o.FIRST_PARTY=new _o("first-party-uid"),_o.MOCK_USER=new _o("mock-user");
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
let Eo="9.6.1";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ko=new Je("@firebase/firestore");function Ao(e,...t){if(ko.logLevel<=Ke.DEBUG){const n=t.map(Co);ko.debug(`Firestore (${Eo}): ${e}`,...n)}}function So(e,...t){if(ko.logLevel<=Ke.ERROR){const n=t.map(Co);ko.error(`Firestore (${Eo}): ${e}`,...n)}}function Co(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
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
     */function Ro(e="Unexpected state"){const t=`FIRESTORE (${Eo}) INTERNAL ASSERTION FAILED: `+e;throw So(t),new Error(t)}function Po(e,t){e||Ro()}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const No="cancelled",Oo="invalid-argument",Do="failed-precondition",Lo="unavailable";class xo extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class $o{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class jo{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Uo{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(_o.UNAUTHENTICATED)))}shutdown(){}}class Mo{constructor(e){this.t=e,this.currentUser=_o.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let r=new $o;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new $o,e.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const t=r;e.enqueueRetryable((async()=>{await t.promise,await i(this.currentUser)}))},o=e=>{Ao("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Ao("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new $o)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Ao("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Po("string"==typeof t.accessToken),new jo(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Po(null===e||"string"==typeof e),new _o(e)}}class Fo{constructor(e,t,n){this.type="FirstParty",this.user=_o.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class Bo{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new Fo(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(_o.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ho{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zo{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null}start(e,t){this.o=n=>{e.enqueueRetryable((()=>(e=>(null!=e.error&&Ao("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`),t(e.token)))(n)))};const n=e=>{Ao("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit((e=>n(e))),setTimeout((()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?n(e):Ao("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Po("string"==typeof e.token),new Ho(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function qo(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
var Ko,Vo;function Go(e){return"IndexedDbTransactionError"===e.name}function Xo(){return"undefined"!=typeof document?document:null}(Vo=Ko||(Ko={}))[Vo.OK=0]="OK",Vo[Vo.CANCELLED=1]="CANCELLED",Vo[Vo.UNKNOWN=2]="UNKNOWN",Vo[Vo.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Vo[Vo.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Vo[Vo.NOT_FOUND=5]="NOT_FOUND",Vo[Vo.ALREADY_EXISTS=6]="ALREADY_EXISTS",Vo[Vo.PERMISSION_DENIED=7]="PERMISSION_DENIED",Vo[Vo.UNAUTHENTICATED=16]="UNAUTHENTICATED",Vo[Vo.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Vo[Vo.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Vo[Vo.ABORTED=10]="ABORTED",Vo[Vo.OUT_OF_RANGE=11]="OUT_OF_RANGE",Vo[Vo.UNIMPLEMENTED=12]="UNIMPLEMENTED",Vo[Vo.INTERNAL=13]="INTERNAL",Vo[Vo.UNAVAILABLE=14]="UNAVAILABLE",Vo[Vo.DATA_LOSS=15]="DATA_LOSS";class Wo{constructor(e,t,n=1e3,i=1.5,r=6e4){this.Oe=e,this.timerId=t,this.Wi=n,this.Gi=i,this.zi=r,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(e){this.cancel();const t=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),i=Math.max(0,t-n);i>0&&Ao("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Hi} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Ji=this.Oe.enqueueAfterDelay(this.timerId,i,(()=>(this.Yi=Date.now(),e()))),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Jo{constructor(e,t,n,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new $o,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,i,r){const s=Date.now()+n,o=new Jo(e,t,s,i,r);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new xo(No,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Yo{constructor(e,t,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=_o.UNAUTHENTICATED,this.clientId=class{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=qo(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<t&&(n+=e.charAt(i[r]%e.length))}return n}}.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Ao("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(()=>Promise.resolve()))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new xo(Do,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $o;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=function(e,t){if(So("AsyncQueue",`${t}: ${e}`),Go(e))return new xo(Lo,`${t}: ${e}`);throw e}(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}class Zo{constructor(e,t,n,i,r,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Qo{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Qo&&e.projectId===this.projectId&&e.database===this.database}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ea=new Map;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class ta{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new xo(Oo,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new xo(Oo,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,i){if(!0===t&&!0===i)throw new xo(Oo,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
class na{constructor(){this.ma=Promise.resolve(),this.ga=[],this.ya=!1,this.pa=[],this.Ta=null,this.Ea=!1,this.Ia=!1,this.Aa=[],this.ur=new Wo(this,"async_queue_retry"),this.Ra=()=>{const e=Xo();e&&Ao("AsyncQueue","Visibility state changed to "+e.visibilityState),this.ur.er()};const e=Xo();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Ra)}get isShuttingDown(){return this.ya}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pa(),this.ba(e)}enterRestrictedMode(e){if(!this.ya){this.ya=!0,this.Ia=e||!1;const t=Xo();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Ra)}}enqueue(e){if(this.Pa(),this.ya)return new Promise((()=>{}));const t=new $o;return this.ba((()=>this.ya&&this.Ia?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.ga.push(e),this.va())))}async va(){if(0!==this.ga.length){try{await this.ga[0](),this.ga.shift(),this.ur.reset()}catch(e){if(!Go(e))throw e;Ao("AsyncQueue","Operation failed with retryable error: "+e)}this.ga.length>0&&this.ur.Zi((()=>this.va()))}}ba(e){const t=this.ma.then((()=>(this.Ea=!0,e().catch((e=>{this.Ta=e,this.Ea=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e);throw So("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Ea=!1,e))))));return this.ma=t,t}enqueueAfterDelay(e,t,n){this.Pa(),this.Aa.indexOf(e)>-1&&(t=0);const i=Jo.createAndSchedule(this,e,t,n,(e=>this.Va(e)));return this.pa.push(i),i}Pa(){this.Ta&&Ro()}verifyOperationInProgress(){}async Sa(){let e;do{e=this.ma,await e}while(e!==this.ma)}Da(e){for(const t of this.pa)if(t.timerId===e)return!0;return!1}Ca(e){return this.Sa().then((()=>{this.pa.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.pa)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Sa()}))}Na(e){this.Aa.push(e)}Va(e){const t=this.pa.indexOf(e);this.pa.splice(t,1)}}class ia extends class{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ta({}),this._settingsFrozen=!1,e instanceof Qo?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new xo(Oo,'"projectId" not provided in firebase.initializeApp.');return new Qo(e.options.projectId)}(e))}get app(){if(!this._app)throw new xo(Do,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new xo(Do,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ta(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Uo;switch(e.type){case"gapi":const t=e.client;return Po(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new Bo(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new xo(Oo,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=ea.get(e);t&&(Ao("ComponentProvider","Removing Datastore"),ea.delete(e),t.terminate())}(this),Promise.resolve()}}{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new na,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||function(e){var t;const n=e._freezeSettings(),i=function(e,t,n,i){return new Zo(e,t,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Yo(e._authCredentials,e._appCheckCredentials,e._queue,i)}(this),this._firestoreClient.terminate()}}
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
function ra(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}function sa(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}!function(e,t=!0){Eo="9.6.1",st(new qe("firestore",((e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=new ia(i,new Mo(e.getProvider("auth-internal")),new zo(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),r._setSettings(n),r}),"PUBLIC")),at(To,"3.4.1",e),at(To,"3.4.1","esm2017")}();const oa=sa,aa=new je("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),la=new Je("@firebase/auth");function ha(e,...t){la.logLevel<=Ke.ERROR&&la.error(`Auth (9.6.1): ${e}`,...t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ca(e,...t){throw da(e,...t)}function ua(e,...t){return da(e,...t)}function da(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return aa.create(e,...t)}function fa(e,t,...n){if(!e)throw da(t,...n)}function pa(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ha(t),new Error(t)}function ma(e,t){e||pa(t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ya=new Map;function va(e){ma(e instanceof Function,"Expected a class definition");let t=ya.get(e);return t?(ma(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ya.set(e,t),t)}function ba(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function wa(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==ba()&&"https:"!==ba()&&!xe()&&!("connection"in navigator)||navigator.onLine}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Ia{constructor(e,t){this.shortDelay=e,this.longDelay=t,ma(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return wa()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
class Ta{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void pa("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void pa("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void pa("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const _a={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Ea=new Ia(3e4,6e4);
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function ka(e,t,n,i,r={}){return Aa(e,r,(async()=>{let r={},s={};i&&("GET"===t?s=i:r={body:JSON.stringify(i)});const o=Me(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Ta.fetch()(Sa(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))}))}async function Aa(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},_a),t);try{const t=new Ca(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw Ra(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Ra(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Ra(e,"email-already-in-use",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw function(e,t,n){const i=Object.assign(Object.assign({},oa()),{[t]:n});return new je("auth","Firebase",i).create(t,{appName:e.name})}(e,a,o);ca(e,a)}}catch(t){if(t instanceof $e)throw t;ca(e,"network-request-failed")}}function Sa(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?function(e,t){ma(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}(e.config,r):`${e.config.apiScheme}://${r}`}class Ca{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(ua(this.auth,"timeout"))),Ea.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ra(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=ua(e,t,i);return r.customData._tokenResponse=n,r}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
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
function Pa(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}function Na(e){return 1e3*Number(e)}function Oa(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return ha("JWT malformed, contained fewer than 3 sections"),null;try{const e=function(e){try{return De.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null}(n);return e?JSON.parse(e):(ha("Failed to decode base64 JWT payload"),null)}catch(e){return ha("Caught error parsing JWT payload as JSON",e),null}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function Da(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof $e&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class La{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class xa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pa(this.lastLoginAt),this.creationTime=Pa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function $a(e){var t;const n=e.auth,i=await e.getIdToken(),r=await Da(e,async function(e,t){return ka(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));fa(null==r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=ra(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=e.providerData,h=o,[...l.filter((e=>!h.some((t=>t.providerId===e.providerId)))),...h]);var l,h;const c=e.isAnonymous,u=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!c&&u,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new xa(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class ja{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fa(e.idToken,"internal-error"),fa(void 0!==e.idToken,"internal-error"),fa(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Oa(e);return fa(t,"internal-error"),fa(void 0!==t.exp,"internal-error"),fa(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return fa(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function(e,t){const n=await Aa(e,{},(async()=>{const n=Me({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,s=Sa(e,i,"/v1/token",`key=${r}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Ta.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new ja;return n&&(fa("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(fa("string"==typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(fa("number"==typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ja,this.toJSON())}_performRefresh(){return pa("not implemented")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ua(e,t){fa("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Ma{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=ra(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new La(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.metadata=new xa(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Da(this,this.stsTokenManager.getToken(this.auth,e));return fa(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=ze(e),i=await n.getIdToken(t),r=Oa(i);fa(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s="object"==typeof r.firebase?r.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Pa(Na(r.auth_time)),issuedAtTime:Pa(Na(r.iat)),expirationTime:Pa(Na(r.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=ze(e);await $a(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(fa(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ma(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){fa(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await $a(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Da(this,async function(e,t){return ka(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,a,l,h;const c=null!==(n=t.displayName)&&void 0!==n?n:void 0,u=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(h=t.lastLoginAt)&&void 0!==h?h:void 0,{uid:v,emailVerified:b,isAnonymous:w,providerData:I,stsTokenManager:T}=t;fa(v&&T,e,"internal-error");const _=ja.fromJSON(this.name,T);fa("string"==typeof v,e,"internal-error"),Ua(c,e.name),Ua(u,e.name),fa("boolean"==typeof b,e,"internal-error"),fa("boolean"==typeof w,e,"internal-error"),Ua(d,e.name),Ua(f,e.name),Ua(p,e.name),Ua(g,e.name),Ua(m,e.name),Ua(y,e.name);const E=new Ma({uid:v,auth:e,email:u,emailVerified:b,displayName:c,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:_,createdAt:m,lastLoginAt:y});return I&&Array.isArray(I)&&(E.providerData=I.map((e=>Object.assign({},e)))),g&&(E._redirectEventId=g),E}static async _fromIdTokenResponse(e,t,n=!1){const i=new ja;i.updateFromServerResponse(t);const r=new Ma({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await $a(r),r}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Fa{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Fa.type="NONE";const Ba=Fa;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ha(e,t,n){return`firebase:${e}:${t}:${n}`}class za{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=Ha(this.userKey,i.apiKey,r),this.fullPersistenceKey=Ha("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ma._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new za(va(Ba),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||va(Ba);const s=Ha(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const i=Ma._fromJSON(e,t);n!==r&&(o=i),r=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new za(r,e,n)):new za(r,e,n)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function qa(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(function(e=Le()){return/iemobile/i.test(e)}(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(function(e=Le()){return/firefox\//i.test(e)}(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(function(e=Le()){return/blackberry/i.test(e)}(t))return"Blackberry";if(function(e=Le()){return/webos/i.test(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t))return"Webos";if(function(e=Le()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}(t))return"Safari";if((t.includes("chrome/")||function(e=Le()){return/crios\//i.test(e)}(t))&&!t.includes("edge/"))return"Chrome";if(function(e=Le()){return/android/i.test(e)}(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Ka(e,t=[]){let n;switch(e){case"Browser":n=qa(Le());break;case"Worker":n=`${qa(Le())}-${e}`;break;default:n=e}return`${n}/JsCore/9.6.1/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Va{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ga(this),this.idTokenSubscription=new Ga(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=aa,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=va(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await za.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);i&&i!==r||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(fa(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await $a(e)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ze(e):null;return t&&fa(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&fa(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(va(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new je("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&va(e)||this._popupRedirectResolver;fa(t,this,"argument-error"),this.redirectPersistenceManager=await za.create(this,[va(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return fa(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fa(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ka(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}class Ga{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new Fe(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return fa(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}new Ia(3e4,6e4),
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
new Ia(2e3,1e4),
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
new Ia(3e4,6e4),
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
new Ia(5e3,15e3);var Xa,Wa="@firebase/auth",Ja="0.19.4";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Ya{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){fa(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */Xa="Browser",st(new qe("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:r}=n.options;return(e=>{fa(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),fa(!(null==r?void 0:r.includes(":")),"argument-error",{appName:e.name});const n={apiKey:i,authDomain:r,clientPlatform:Xa,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ka(Xa)},s=new Va(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(va);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),st(new qe("auth-internal",(e=>(e=>new Ya(e))(function(e){return ze(e)}(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),at(Wa,Ja,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Xa)),at(Wa,Ja,"esm2017");const Za=window.sessionStorage;function Qa(){return null!=function(){const e=Za.getItem("user");return null==e?null:e.length>0?JSON.parse(e):null}()}function el(e){return[]}function tl(){return!Qa()}const nl=[{name:"/",component:class extends H{constructor(e){super(),B(this,e,Oe,Ne,s,{})}}},{name:"login",component:class extends H{constructor(e){super(),B(this,e,null,null,s,{})}},onlyIf:{guard:tl,redirect:"/"}},{name:"signup",component:class extends H{constructor(e){super(),B(this,e,el,null,s,{})}},onlyIf:{guard:tl,redirect:"/"}}];function il(t){let n,i,r,s;return r=new we({props:{routes:nl}}),{c(){n=u("meta"),i=f(),j(r.$$.fragment),document.title="Perfect Type",g(n,"charset","utf-8")},m(e,t){a(document.head,n),l(e,i,t),U(r,e,t),s=!0},p:e,i(e){s||(x(r.$$.fragment,e),s=!0)},o(e){$(r.$$.fragment,e),s=!1},d(e){h(n),e&&h(i),M(r,e)}}}return new class extends H{constructor(e){super(),B(this,e,null,il,s,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
