(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,89129,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={DecodeError:function(){return y},MiddlewareNotFoundError:function(){return x},MissingStaticPage:function(){return w},NormalizeError:function(){return j},PageNotFoundError:function(){return b},SP:function(){return m},ST:function(){return g},WEB_VITALS:function(){return o},execOnce:function(){return i},getDisplayName:function(){return d},getLocationOrigin:function(){return u},getURL:function(){return c},isAbsoluteUrl:function(){return a},isResSent:function(){return f},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return v}};for(var s in r)Object.defineProperty(n,s,{enumerable:!0,get:r[s]});let o=["CLS","FCP","FID","INP","LCP","TTFB"];function i(e){let t,n=!1;return(...r)=>(n||(n=!0,t=e(...r)),t)}let l=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,a=e=>l.test(e);function u(){let{protocol:e,hostname:t,port:n}=window.location;return`${e}//${t}${n?":"+n:""}`}function c(){let{href:e}=window.location,t=u();return e.substring(t.length)}function d(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function h(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await h(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&f(n))return r;if(!r)throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return r}let m="undefined"!=typeof performance,g=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class y extends Error{}class j extends Error{}class b extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class w extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class x extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function v(e){return JSON.stringify({message:e.message,stack:e.stack})}},20955,(e,t,n)=>{var r={229:function(e){var t,n,r,s=e.exports={};function o(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}var a=[],u=!1,c=-1;function d(){u&&r&&(u=!1,r.length?a=r.concat(a):c=-1,a.length&&f())}function f(){if(!u){var e=l(d);u=!0;for(var t=a.length;t;){for(r=a,a=[];++c<t;)r&&r[c].run();c=-1,t=a.length}r=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}s.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new p(e,t)),1!==a.length||u||l(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=h,s.addListener=h,s.once=h,s.off=h,s.removeListener=h,s.removeAllListeners=h,s.emit=h,s.prependListener=h,s.prependOnceListener=h,s.listeners=function(e){return[]},s.binding=function(e){throw Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw Error("process.chdir is not supported")},s.umask=function(){return 0}}},s={};function o(e){var t=s[e];if(void 0!==t)return t.exports;var n=s[e]={exports:{}},i=!0;try{r[e](n,n.exports,o),i=!1}finally{i&&delete s[e]}return n.exports}o.ab="/ROOT/node_modules/next/dist/compiled/process/",t.exports=o(229)},50461,(e,t,n)=>{"use strict";var r,s;t.exports=(null==(r=e.g.process)?void 0:r.env)&&"object"==typeof(null==(s=e.g.process)?void 0:s.env)?e.g.process:e.r(20955)},8481,(e,t,n)=>{"use strict";var r=Symbol.for("react.transitional.element");function s(e,t,n){var s=null;if(void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),"key"in t)for(var o in n={},t)"key"!==o&&(n[o]=t[o]);else n=t;return{$$typeof:r,type:e,key:s,ref:void 0!==(t=n.ref)?t:null,props:n}}n.Fragment=Symbol.for("react.fragment"),n.jsx=s,n.jsxs=s},91398,(e,t,n)=>{"use strict";t.exports=e.r(8481)},61556,(e,t,n)=>{"use strict";var r=e.i(50461),s=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),g=Symbol.iterator,y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,b={};function w(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||y}function x(){}function v(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||y}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=w.prototype;var _=v.prototype=new x;_.constructor=v,j(_,w.prototype),_.isPureReactComponent=!0;var k=Array.isArray;function T(){}var S={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function P(e,t,n){var r=n.ref;return{$$typeof:s,type:e,key:t,ref:void 0!==r?r:null,props:n}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===s}var N=/\/+/g;function C(e,t){var n,r;return"object"==typeof e&&null!==e&&null!=e.key?(n=""+e.key,r={"=":"=0",":":"=2"},"$"+n.replace(/[=:]/g,function(e){return r[e]})):t.toString(36)}function R(e,t,n){if(null==e)return e;var r=[],i=0;return!function e(t,n,r,i,l){var a,u,c,d=typeof t;("undefined"===d||"boolean"===d)&&(t=null);var f=!1;if(null===t)f=!0;else switch(d){case"bigint":case"string":case"number":f=!0;break;case"object":switch(t.$$typeof){case s:case o:f=!0;break;case h:return e((f=t._init)(t._payload),n,r,i,l)}}if(f)return l=l(t),f=""===i?"."+C(t,0):i,k(l)?(r="",null!=f&&(r=f.replace(N,"$&/")+"/"),e(l,n,r,"",function(e){return e})):null!=l&&(O(l)&&(a=l,u=r+(null==l.key||t&&t.key===l.key?"":(""+l.key).replace(N,"$&/")+"/")+f,l=P(a.type,u,a.props)),n.push(l)),1;f=0;var p=""===i?".":i+":";if(k(t))for(var m=0;m<t.length;m++)d=p+C(i=t[m],m),f+=e(i,n,r,d,l);else if("function"==typeof(m=null===(c=t)||"object"!=typeof c?null:"function"==typeof(c=g&&c[g]||c["@@iterator"])?c:null))for(t=m.call(t),m=0;!(i=t.next()).done;)d=p+C(i=i.value,m++),f+=e(i,n,r,d,l);else if("object"===d){if("function"==typeof t.then)return e(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"==typeof e.status?e.then(T,T):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(t),n,r,i,l);throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(n=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.")}return f}(e,r,"","",function(e){return t.call(n,e,i++)}),r}function I(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var A="function"==typeof reportError?reportError:function(e){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"==typeof e&&null!==e&&"string"==typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"==typeof r.default&&"function"==typeof r.default.emit)return void r.default.emit("uncaughtException",e);console.error(e)};n.Activity=m,n.Children={map:R,forEach:function(e,t,n){R(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return R(e,function(){t++}),t},toArray:function(e){return R(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=w,n.Fragment=i,n.Profiler=a,n.PureComponent=v,n.StrictMode=l,n.Suspense=f,n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,n.__COMPILER_RUNTIME={__proto__:null,c:function(e){return S.H.useMemoCache(e)}},n.cache=function(e){return function(){return e.apply(null,arguments)}},n.cacheSignal=function(){return null},n.cloneElement=function(e,t,n){if(null==e)throw Error("The argument must be a React element, but you passed "+e+".");var r=j({},e.props),s=e.key;if(null!=t)for(o in void 0!==t.key&&(s=""+t.key),t)E.call(t,o)&&"key"!==o&&"__self"!==o&&"__source"!==o&&("ref"!==o||void 0!==t.ref)&&(r[o]=t[o]);var o=arguments.length-2;if(1===o)r.children=n;else if(1<o){for(var i=Array(o),l=0;l<o;l++)i[l]=arguments[l+2];r.children=i}return P(e.type,s,r)},n.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:u,_context:e},e},n.createElement=function(e,t,n){var r,s={},o=null;if(null!=t)for(r in void 0!==t.key&&(o=""+t.key),t)E.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(s[r]=t[r]);var i=arguments.length-2;if(1===i)s.children=n;else if(1<i){for(var l=Array(i),a=0;a<i;a++)l[a]=arguments[a+2];s.children=l}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===s[r]&&(s[r]=i[r]);return P(e,o,s)},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:d,render:e}},n.isValidElement=O,n.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:I}},n.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},n.startTransition=function(e){var t=S.T,n={};S.T=n;try{var r=e(),s=S.S;null!==s&&s(n,r),"object"==typeof r&&null!==r&&"function"==typeof r.then&&r.then(T,A)}catch(e){A(e)}finally{null!==t&&null!==n.types&&(t.types=n.types),S.T=t}},n.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},n.use=function(e){return S.H.use(e)},n.useActionState=function(e,t,n){return S.H.useActionState(e,t,n)},n.useCallback=function(e,t){return S.H.useCallback(e,t)},n.useContext=function(e){return S.H.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e,t){return S.H.useDeferredValue(e,t)},n.useEffect=function(e,t){return S.H.useEffect(e,t)},n.useEffectEvent=function(e){return S.H.useEffectEvent(e)},n.useId=function(){return S.H.useId()},n.useImperativeHandle=function(e,t,n){return S.H.useImperativeHandle(e,t,n)},n.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},n.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},n.useMemo=function(e,t){return S.H.useMemo(e,t)},n.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},n.useReducer=function(e,t,n){return S.H.useReducer(e,t,n)},n.useRef=function(e){return S.H.useRef(e)},n.useState=function(e){return S.H.useState(e)},n.useSyncExternalStore=function(e,t,n){return S.H.useSyncExternalStore(e,t,n)},n.useTransition=function(){return S.H.useTransition()},n.version="19.2.1"},91788,(e,t,n)=>{"use strict";t.exports=e.r(61556)},41705,(e,t,n)=>{"use strict";n._=function(e){return e&&e.__esModule?e:{default:e}}},13584,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"HeadManagerContext",{enumerable:!0,get:function(){return r}});let r=e.r(41705)._(e.r(91788)).default.createContext({})},94470,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},52456,(e,t,n)=>{"use strict";function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}n._=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var s={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(s,i,l):s[i]=e[i]}return s.default=e,n&&n.set(e,s),s}},94941,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});let r=e.r(91788),s="undefined"==typeof window,o=s?()=>{}:r.useLayoutEffect,i=s?()=>{}:r.useEffect;function l(e){let{headManager:t,reduceComponentsToState:n}=e;function l(){if(t&&t.mountedInstances){let e=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(e))}}return s&&(t?.mountedInstances?.add(e.children),l()),o(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),o(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),i(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},80963,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return m},defaultHead:function(){return d}};for(var s in r)Object.defineProperty(n,s,{enumerable:!0,get:r[s]});let o=e.r(41705),i=e.r(52456),l=e.r(91398),a=i._(e.r(91788)),u=o._(e.r(94941)),c=e.r(13584);function d(){return[(0,l.jsx)("meta",{charSet:"utf-8"},"charset"),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(94470);let p=["name","httpEquiv","charSet","itemProp"];function h(e){let t,n,r,s;return e.reduce(f,[]).reverse().concat(d().reverse()).filter((t=new Set,n=new Set,r=new Set,s={},e=>{let o=!0,i=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){i=!0;let n=e.key.slice(e.key.indexOf("$")+1);t.has(n)?o=!1:t.add(n)}switch(e.type){case"title":case"base":n.has(e.type)?o=!1:n.add(e.type);break;case"meta":for(let t=0,n=p.length;t<n;t++){let n=p[t];if(e.props.hasOwnProperty(n))if("charSet"===n)r.has(n)?o=!1:r.add(n);else{let t=e.props[n],r=s[n]||new Set;("name"!==n||!i)&&r.has(t)?o=!1:(r.add(t),s[n]=r)}}}return o})).reverse().map((e,t)=>{let n=e.key||t;return a.default.cloneElement(e,{key:n})})}let m=function({children:e}){let t=(0,a.useContext)(c.HeadManagerContext);return(0,l.jsx)(u.default,{reduceComponentsToState:h,headManager:t,children:e})};("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},61592,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"LoadableContext",{enumerable:!0,get:function(){return r}});let r=e.r(41705)._(e.r(91788)).default.createContext(null)},52414,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return f}});let r=e.r(41705)._(e.r(91788)),s=e.r(61592),o=[],i=[],l=!1;function a(e){let t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(e=>(n.loading=!1,n.loaded=e,e)).catch(e=>{throw n.loading=!1,n.error=e,e}),n}class u{constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}}function c(t){return function(t,n){let a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},n),c=null;function d(){if(!c){let e=new u(t,a);c={getCurrentValue:e.getCurrentValue.bind(e),subscribe:e.subscribe.bind(e),retry:e.retry.bind(e),promise:e.promise.bind(e)}}return c.promise()}if("undefined"==typeof window&&o.push(d),!l&&"undefined"!=typeof window){let t=a.webpack&&"function"==typeof e.t.resolveWeak?a.webpack():a.modules;t&&i.push(e=>{for(let n of t)if(e.includes(n))return d()})}function f(e,t){let n;d(),(n=r.default.useContext(s.LoadableContext))&&Array.isArray(a.modules)&&a.modules.forEach(e=>{n(e)});let o=r.default.useSyncExternalStore(c.subscribe,c.getCurrentValue,c.getCurrentValue);return r.default.useImperativeHandle(t,()=>({retry:c.retry}),[]),r.default.useMemo(()=>{var t;return o.loading||o.error?r.default.createElement(a.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:c.retry}):o.loaded?r.default.createElement((t=o.loaded)&&t.default?t.default:t,e):null},[e,o])}return f.preload=()=>d(),f.displayName="LoadableComponent",r.default.forwardRef(f)}(a,t)}function d(e,t){let n=[];for(;e.length;){let r=e.pop();n.push(r(t))}return Promise.all(n).then(()=>{if(e.length)return d(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{d(o).then(e,t)}),c.preloadReady=(e=[])=>new Promise(t=>{let n=()=>(l=!0,t());d(i,e).then(n,n)}),"undefined"!=typeof window&&(window.__NEXT_PRELOADREADY=c.preloadReady);let f=c},25167,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return d},noSSR:function(){return c}};for(var s in r)Object.defineProperty(n,s,{enumerable:!0,get:r[s]});let o=e.r(41705),i=e.r(91398);e.r(91788);let l=o._(e.r(52414)),a="undefined"==typeof window;function u(e){return{default:e?.default||e}}function c(e,t){if(delete t.webpack,delete t.modules,!a)return e(t);let n=t.loading;return()=>(0,i.jsx)(n,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}function d(e,t){let n=l.default,r={loading:({error:e,isLoading:t,pastDelay:n})=>null};e instanceof Promise?r.loader=()=>e:"function"==typeof e?r.loader=e:"object"==typeof e&&(r={...r,...e});let s=(r={...r,...t}).loader;return(r.loadableGenerated&&(r={...r,...r.loadableGenerated},delete r.loadableGenerated),"boolean"!=typeof r.ssr||r.ssr)?n({...r,loader:()=>null!=s?s().then(u):Promise.resolve(u(()=>null))}):(delete r.webpack,delete r.modules,c(n,r))}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},68489,(e,t,n)=>{t.exports=e.r(25167)},72966,e=>{"use strict";var t=e.i(91398),n=e.i(3828),r=e.i(58678),s=e.i(30142),o=e.i(48998),i=e.i(62172),l=e.i(26019);let a=(0,e.i(68489).default)(()=>e.A(21327),{loadableGenerated:{modules:[5939]},ssr:!1}),u=`
npm config set proxy http://proxy.example.org:8080
npm config set https-proxy http://proxy.example.org:8080
`.trim(),c=`
npm install -g grunt-cli
`.trim(),d=`
npm init
`.trim(),f=`
{
  "name": "demo-project",
  "version": "0.0.1",
  "author": "Jennifer Tesolin"
}
`.trim(),p="npm install grunt --save-dev".trim(),h=`
"devDependencies": {
    "grunt": "~0.4.1"
}
`.trim(),m="npm install grunt-contrib --save-dev".trim(),g=`module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

    });

    // Load call for plugins

    // Default task(s).

};`.trim(),y=`
module.exports = function(grunt) {

  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'expanded', /**human readable */
          sourcemap: 'none',
        },
        files: {
          'css/style.css': 'sass/style.scss'
        }
      }
    },
    csslint: {
        strict: {
            src: ['css/style.css']
        },
        lax: {
            options: {
                csslintrc: '.csslintrc' //just check for css errors that would stop code
            },
            src: ['css/style.css']
        }
    },
    concat: {
      css: {
          src: ['node_modules/normalize.css/normalize.css', 'css/style.css'],
          dest: 'css/style.css'
      }
    },
    postcss: {
      options: {
        processors: [
          require('pixrem')(),
          require('autoprefixer')({browsers: 'last 2 versions'})
        ]
      },
      dist: {
        src: 'css/style.css',
        dest: 'css/style.css'
      }

    },
    cssmin : {
        css:{
            src: 'css/style.css',
            dest: 'css/style.min.css'
        }
    },
    uglify: {
      options: {
        banner: '/*
 <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> 
*/
'
      },
      build: {
        files: {
          'js/scripts.min.js': ['js/*.js', '!js/*.min.js']
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'js/*.js', '!js/*.min.js'],
      options: {
        jshintrc: '.jshintrc',
        ignores: '.jshintignore'
      },
    },
    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: [
          {
            expand: true,     // Enable dynamic expansion.
            cwd: 'src/',      // Src matches are relative to this path.
            src: ['**/*.html'], // Actual pattern(s) to match.
            dest: 'dist/',   // Destination path prefix.
          },
        ],
      }
    },

    imagemin: {
        png: {
          options: {
            optimizationLevel: 7
          },
          files: [
            {
              expand: true,
              cwd: 'img/',
              src: ['**/*.png'],
              dest: 'img/compressed/',
              ext: '.png'
            }
          ]
        },
        jpg: {
          options: {
            progressive: true
          },
          files: [
            {
              expand: true,
              cwd: 'img/',
              src: ['**/*.jpg'],
              dest: 'img/compressed/',
              ext: '.jpg'
            }
          ]
        }
      },
    responsive_images: {
      myTask: {
        options: {
          sizes: [{
              name: 'header-320',
              width: 320
            },
            {
              name: 'header-640',
              width: 640
            },
            {
              name: 'header-768',
              width: 768
            },
            {
              name: 'header-1024',
              width: 1024
            },
            {
              name: 'header-1366',
              width: 1366
            },
            {
              name: 'header-1920',
              width: 1920
            },
            {
              name: "header-2560",
              width: 2560
          }]
        },
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['**.{jpg,gif,png}'],
          dest: 'img/resize'
        }]
      }
  },
  clean: {
    build: {
      src: [ 'build' ]
    },
    stylesheets: {
      src: [ 'build/**/*.css', '!build/application.css' ]
    },
    scripts: {
      src: [ 'build/**/*.js', '!build/application.js' ]
    },
    images:{
      src: [ 'img/compressed/**/', 'img/resize/**/']
    }
  },
  watch: {
    gruntfile: {
      files: 'Gruntfile.js',
      tasks: ['jshint'],
    },
    css: {
      files: ['sass/*.scss'],
      tasks: ['sass', 'csslint:lax', 'postcss', 'concat:css']
    },
    js: {
      files: ['js/*.js','!js/*.min.js'],
      tasks: ['jshint'/*,'concat:js','uglify'*/]
    }
  },
  copy: {
      build: {
        cwd: 'source',
        src: [ '**' ],
        dest: 'build',
        expand: true
      },
    }

  }); //end grunt config

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('images', ['clean:images', 'responsive_images','imagemin']);
  grunt.registerTask('css', ['sass', 'csslint:lax', 'postcss','concat:css']);
  grunt.registerTask('jscript', ['jshint']);
  grunt.registerTask('dev', ['jscript', 'css','watch']);
  grunt.registerTask('build', ['clean', 'copy']);

};
`.trim(),j=`
npm uninstall jshint
npm cache clean -f
npm install --save-dev jshint
`.trim(),b="Installing Node JS and Grunt",w="This tutorial focuses on installing the platform, and provides resources for using Grunt.",x=["javascript","node","grunt"];function v(){let e=(0,n.useRouter)(),v=(e?.pathname?.split("/")?.pop()||"").match(/^(\d{4}-\d{2}-\d{2})/),_=v?v[1]:"2018-04-18";return(0,t.jsxs)(o.default,{children:[(0,t.jsxs)(r.default,{children:[(0,t.jsx)("title",{children:`${b} - ${s.BLOG_TITLE} - ${s.SITE_TITLE}`}),(0,t.jsx)("meta",{name:"description",content:w}),(0,t.jsx)(i.default,{title:b,description:w,date:_,tags:x,pathname:e?.pathname||"/blog/2018-04-18-installing-node-js-and-grunt"})]}),(0,t.jsxs)("section",{"aria-labelledby":"main-content",children:[(0,t.jsx)("h1",{id:"main-content",children:b}),(0,t.jsx)("p",{className:"alert-warning",children:(0,t.jsxs)("small",{children:["Under review: This post was originally written on ",(0,t.jsx)("a",{className:"underline focus:ring-2",href:"https://web.archive.org/web/20180926123105/https://www.jenntesolin.com/blog/2013/05/08/installing-node-js-and-grunt-on-mountain-lion/",rel:"nofollow noreferrer",children:"May 8, 2013"})," and was fully re-written in 2018 to reflect newer versions of Node.js and Grunt. It is currently under review for accuracy."]})}),(0,t.jsx)("p",{children:"This tutorial focuses on installing the platform, and provides resources for using Grunt."}),(0,t.jsx)("h2",{children:"Step 1: Install Node"}),(0,t.jsx)("p",{children:(0,t.jsx)("b",{children:"If you installed with homebrew, skip to Proxy or Grunt step(s)"})})," ",(0,t.jsxs)("p",{children:["Otherwise, Download the latest stable binary from ",(0,t.jsx)("a",{className:"underline focus:ring-2",href:"https://nodejs.org/en/download/",rel:"nofollow noreferrer",children:"nodejs.org"}),". On production servers is recommended to use the latest STABLE version. The default settings will be fine."]}),(0,t.jsx)(l.default,{src:"/blog/2018-04-18-installing-node-js-and-grunt/nodejs-home.png",alt:"",width:440,height:368,priority:!0}),(0,t.jsxs)("p",{children:["Verify your path as per installer message: Make sure that ",(0,t.jsx)("strong",{children:"/usr/local/bin"})," is in your $PATH."]}),(0,t.jsx)(l.default,{src:"/blog/2018-04-18-installing-node-js-and-grunt/node_installer.png",alt:"",width:400,height:281,priority:!1}),(0,t.jsxs)("p",{children:["Note: I found this Stackoverflow post useful: ",(0,t.jsx)("a",{className:"underline focus:ring-2",href:"https://stackoverflow.com/questions/42323485/set-environment-variables-on-mac-os-x-sierra#42323635",rel:"nofollow noreferrer",children:"Set environment variables: bash profile"}),". Please note to check that the path in the installer is shown in case it differs between versions. For my install, the path was correctly set."]}),(0,t.jsx)("h2",{children:"Step 2: Use a proxy with node"}),(0,t.jsxs)("p",{children:["If you require the use of a proxy with node, you set it with the below (this to this post ",(0,t.jsx)("a",{href:"https://web.archive.org/web/20190504045736/https://jjasonclark.com/how-to-setup-node-behind-web-proxy/",rel:"nofollow noreferrer",children:"How to setup Node.js and Npm behind a corporate web proxy"}),")."]}),(0,t.jsx)(a,{code:u,language:"shell-session",plugins:["line-numbers"]}),(0,t.jsx)("h2",{children:"Step 3: Grunt set-up"}),(0,t.jsx)("h3",{children:"Installing Grunt on your machine globally."}),(0,t.jsxs)("p",{children:["This section uses grunt ",(0,t.jsx)("em",{children:"0.4.x"})]}),(0,t.jsx)("p",{children:"Grunt JS is installed by what NodeJS refers to as NPM, or Node Package Manager. To install Grunt from NPM, you will need to use the command line."}),(0,t.jsx)("p",{children:"Type following command into the terminal:"}),(0,t.jsx)(a,{code:c,language:"shell-session",plugins:["line-numbers"]}),(0,t.jsx)("h3",{children:"Create a package.json file"}),(0,t.jsx)("p",{children:"Go into your project directory, and run the below command. You can use the default settings, as the text file will be edited. My output is below."}),(0,t.jsx)(a,{code:d,language:"shell-session",plugins:["line-numbers"]}),(0,t.jsx)(l.default,{src:"/blog/2018-04-18-installing-node-js-and-grunt/node-npm-init.png",alt:"",width:400,height:233,priority:!1}),(0,t.jsx)("p",{children:'Open your favorite text editor, and edit the file "package.json" replace the text so it will fit your project:'}),(0,t.jsx)(a,{code:f,language:"json",plugins:["line-numbers"]}),(0,t.jsx)("p",{children:"Now, using the terminal, run the below command in your project directory:"}),(0,t.jsx)(a,{code:p,language:"shell-session",plugins:["line-numbers"]}),(0,t.jsx)("p",{children:"This will install grunt locally in your package folder. If you open your package.json, you will find a new section added:"}),(0,t.jsx)(a,{code:h,language:"json",plugins:["line-numbers"]}),(0,t.jsx)("h3",{children:"Associating plugins with Grunt/package.json"}),(0,t.jsx)("p",{children:"Run the below command to use the plugin npm."}),(0,t.jsx)(a,{code:m,language:"shell-session",plugins:["line-numbers"]}),(0,t.jsx)("h3",{children:"Create your grunt file"}),(0,t.jsx)("p",{children:'In your text editor, create a file called "Gruntfile.js" and save this into your project directory. A sample copy is below:'}),(0,t.jsx)(a,{code:g,language:"javascript",plugins:["line-numbers"]}),(0,t.jsx)("h3",{children:"Sample Grunt file"}),(0,t.jsx)("p",{children:"TThe various commands you can run in your terminal are as follows:"}),(0,t.jsxs)("ol",{className:"list-decimal list-inside m-2",children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("kbd",{children:"grunt images"}),": Will make your images web ready, and create sizes for different screens."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("kbd",{children:"grunt css"}),": will convert sass to css, then run through a linter, post css and finally concatenate your css files"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("kbd",{children:"grunt jscript"}),": runs jshint"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("kbd",{children:"grunt dev"}),": will run the ",(0,t.jsx)("code",{children:"jscript"}),", and ",(0,t.jsx)("code",{children:"css"})," grunt commands, and will open up ",(0,t.jsx)("code",{children:"watch"})," to monitor changes."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("kbd",{children:"grunt build"}),": will run everything and create a build you can use for production."]})]}),(0,t.jsx)(a,{code:y,language:"javascript",plugins:["line-numbers"]}),(0,t.jsx)("h2",{children:"Re-install devDependencies or dependencies"}),(0,t.jsx)("p",{children:"With the new package.lock file, npm update may not get the latest version if its a major update. Use the below to pick up the latest package. With Thanks to stack overflow (please let me know if you see the post, it was deleted from my notes)."}),(0,t.jsx)(a,{code:j,language:"shell-script",plugins:["line-numbers"]}),(0,t.jsx)("h2",{children:"Resources:"}),(0,t.jsxs)("ul",{className:"list-disc list-inside m-2",children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{className:"underline focus:ring-2",href:"https://gruntjs.com/getting-started",rel:"nofollow noreferrer",children:"Grunt: Getting started documentation"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{className:"underline focus:ring-2",href:"https://gruntjs.com/getting-started#installing-the-cli",rel:"nofollow noreferrer",children:"Grunt: Installing the CLI"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{className:"underline focus:ring-2",href:"https://gruntjs.com/getting-started#preparing-a-new-grunt-project",rel:"nofollow noreferrer",children:"Preparing a new Grunt Package"})}),(0,t.jsxs)("li",{children:[(0,t.jsx)("a",{className:"underline focus:ring-2",href:"https://gruntjs.com/sample-gruntfile",rel:"nofollow noreferrer",children:"Gruntjs.com's Sample Grunt File"}),"."]}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{className:"underline focus:ring-2",href:"https://tutsplus.com/tutorials/search/grunt",rel:"nofollow noreferrer",children:"Tutsplus.com's Grunt tutorials"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{className:"underline focus:ring-2",href:"https://scotch.io/tutorials/a-simple-guide-to-getting-started-with-grunt",rel:"nofollow noreferrer",children:"A Simple Guide to Getting Started With Grunt ― Scotch"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{className:"underline focus:ring-2",href:"https://chrome.google.com/webstore/detail/grunt-devtools/fbiodiodggnlakggeeckkjccjhhjndnb?hl=en",rel:"nofollow noreferrer",children:"Google Chrome Grunt dev tools."})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{className:"underline focus:ring-2",href:"https://www.justinmccandless.com/post/a-tutorial-for-getting-started-with-grunt/",rel:"nofollow noreferrer",children:"A tutorial for getting started with Grunt"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{className:"underline focus:ring-2",href:"https://code.tutsplus.com/tutorials/meet-grunt-the-build-tool-for-javascript--net-24856",rel:"nofollow noreferrer",children:"Meet Grunt: The Build Tool for JavaScript"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{className:"underline focus:ring-2",href:"https://web.archive.org/web/20170606003354/http://dailyjs.com/post/backbone-tutorial-1",rel:"nofollow noreferrer",children:"DailyJS: Backbone.js Tutorial: Build Environment"})})]})]})]})}e.s(["POST_DESCRIPTION",0,w,"POST_TAGS",0,x,"POST_TITLE",0,b,"default",()=>v])},44666,(e,t,n)=>{let r="/blog/2018-04-18-installing-node-js-and-grunt";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(72966)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})},48761,e=>{e.v(t=>Promise.all(["static/chunks/f4fe8aeb8343dcd3.js"].map(t=>e.l(t))).then(()=>t(93594)))},28805,e=>{e.v(t=>Promise.all(["static/chunks/3dcc93bb4829c1ba.js"].map(t=>e.l(t))).then(()=>t(79466)))},21327,e=>{e.v(t=>Promise.all(["static/chunks/e602c78eba919cee.js","static/chunks/4c7b50438181f0b0.css","static/chunks/3fde2663c7386c47.css"].map(t=>e.l(t))).then(()=>t(5939)))}]);