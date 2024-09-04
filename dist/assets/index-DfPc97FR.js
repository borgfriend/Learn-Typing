function Qc(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const i=Object.getOwnPropertyDescriptor(r,l);i&&Object.defineProperty(e,l,i.get?i:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}})();function Zc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Jo={exports:{}},ii={},Go={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $r=Symbol.for("react.element"),Yc=Symbol.for("react.portal"),Xc=Symbol.for("react.fragment"),eh=Symbol.for("react.strict_mode"),nh=Symbol.for("react.profiler"),th=Symbol.for("react.provider"),rh=Symbol.for("react.context"),lh=Symbol.for("react.forward_ref"),ih=Symbol.for("react.suspense"),ah=Symbol.for("react.memo"),sh=Symbol.for("react.lazy"),gu=Symbol.iterator;function uh(e){return e===null||typeof e!="object"?null:(e=gu&&e[gu]||e["@@iterator"],typeof e=="function"?e:null)}var Qo={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zo=Object.assign,Yo={};function Ut(e,n,t){this.props=e,this.context=n,this.refs=Yo,this.updater=t||Qo}Ut.prototype.isReactComponent={};Ut.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Ut.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xo(){}Xo.prototype=Ut.prototype;function ms(e,n,t){this.props=e,this.context=n,this.refs=Yo,this.updater=t||Qo}var gs=ms.prototype=new Xo;gs.constructor=ms;Zo(gs,Ut.prototype);gs.isPureReactComponent=!0;var ku=Array.isArray,ed=Object.prototype.hasOwnProperty,ks={current:null},nd={key:!0,ref:!0,__self:!0,__source:!0};function td(e,n,t){var r,l={},i=null,a=null;if(n!=null)for(r in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(i=""+n.key),n)ed.call(n,r)&&!nd.hasOwnProperty(r)&&(l[r]=n[r]);var s=arguments.length-2;if(s===1)l.children=t;else if(1<s){for(var u=Array(s),o=0;o<s;o++)u[o]=arguments[o+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:$r,type:e,key:i,ref:a,props:l,_owner:ks.current}}function oh(e,n){return{$$typeof:$r,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function vs(e){return typeof e=="object"&&e!==null&&e.$$typeof===$r}function dh(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var vu=/\/+/g;function Li(e,n){return typeof e=="object"&&e!==null&&e.key!=null?dh(""+e.key):n.toString(36)}function hl(e,n,t,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case $r:case Yc:a=!0}}if(a)return a=e,l=l(a),e=r===""?"."+Li(a,0):r,ku(l)?(t="",e!=null&&(t=e.replace(vu,"$&/")+"/"),hl(l,n,t,"",function(o){return o})):l!=null&&(vs(l)&&(l=oh(l,t+(!l.key||a&&a.key===l.key?"":(""+l.key).replace(vu,"$&/")+"/")+e)),n.push(l)),1;if(a=0,r=r===""?".":r+":",ku(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+Li(i,s);a+=hl(i,n,t,u,l)}else if(u=uh(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+Li(i,s++),a+=hl(i,n,t,u,l);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function Jr(e,n,t){if(e==null)return e;var r=[],l=0;return hl(e,r,"","",function(i){return n.call(t,i,l++)}),r}function fh(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},pl={transition:null},ch={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:pl,ReactCurrentOwner:ks};function rd(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:Jr,forEach:function(e,n,t){Jr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Jr(e,function(){n++}),n},toArray:function(e){return Jr(e,function(n){return n})||[]},only:function(e){if(!vs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=Ut;F.Fragment=Xc;F.Profiler=nh;F.PureComponent=ms;F.StrictMode=eh;F.Suspense=ih;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ch;F.act=rd;F.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Zo({},e.props),l=e.key,i=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,a=ks.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in n)ed.call(n,u)&&!nd.hasOwnProperty(u)&&(r[u]=n[u]===void 0&&s!==void 0?s[u]:n[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){s=Array(u);for(var o=0;o<u;o++)s[o]=arguments[o+2];r.children=s}return{$$typeof:$r,type:e.type,key:l,ref:i,props:r,_owner:a}};F.createContext=function(e){return e={$$typeof:rh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:th,_context:e},e.Consumer=e};F.createElement=td;F.createFactory=function(e){var n=td.bind(null,e);return n.type=e,n};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:lh,render:e}};F.isValidElement=vs;F.lazy=function(e){return{$$typeof:sh,_payload:{_status:-1,_result:e},_init:fh}};F.memo=function(e,n){return{$$typeof:ah,type:e,compare:n===void 0?null:n}};F.startTransition=function(e){var n=pl.transition;pl.transition={};try{e()}finally{pl.transition=n}};F.unstable_act=rd;F.useCallback=function(e,n){return pe.current.useCallback(e,n)};F.useContext=function(e){return pe.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};F.useEffect=function(e,n){return pe.current.useEffect(e,n)};F.useId=function(){return pe.current.useId()};F.useImperativeHandle=function(e,n,t){return pe.current.useImperativeHandle(e,n,t)};F.useInsertionEffect=function(e,n){return pe.current.useInsertionEffect(e,n)};F.useLayoutEffect=function(e,n){return pe.current.useLayoutEffect(e,n)};F.useMemo=function(e,n){return pe.current.useMemo(e,n)};F.useReducer=function(e,n,t){return pe.current.useReducer(e,n,t)};F.useRef=function(e){return pe.current.useRef(e)};F.useState=function(e){return pe.current.useState(e)};F.useSyncExternalStore=function(e,n,t){return pe.current.useSyncExternalStore(e,n,t)};F.useTransition=function(){return pe.current.useTransition()};F.version="18.3.1";Go.exports=F;var E=Go.exports;const et=Zc(E),hh=Qc({__proto__:null,default:et},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ph=E,mh=Symbol.for("react.element"),gh=Symbol.for("react.fragment"),kh=Object.prototype.hasOwnProperty,vh=ph.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jh={key:!0,ref:!0,__self:!0,__source:!0};function ld(e,n,t){var r,l={},i=null,a=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(a=n.ref);for(r in n)kh.call(n,r)&&!jh.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:mh,type:e,key:i,ref:a,props:l,_owner:vh.current}}ii.Fragment=gh;ii.jsx=ld;ii.jsxs=ld;Jo.exports=ii;var T=Jo.exports,da={},id={exports:{}},Ne={},ad={exports:{}},sd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(C,N){var b=C.length;C.push(N);e:for(;0<b;){var O=b-1>>>1,$=C[O];if(0<l($,N))C[O]=N,C[b]=$,b=O;else break e}}function t(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var N=C[0],b=C.pop();if(b!==N){C[0]=b;e:for(var O=0,$=C.length,Un=$>>>1;O<Un;){var Oe=2*(O+1)-1,pn=C[Oe],xe=Oe+1,Xe=C[xe];if(0>l(pn,b))xe<$&&0>l(Xe,pn)?(C[O]=Xe,C[xe]=b,O=xe):(C[O]=pn,C[Oe]=b,O=Oe);else if(xe<$&&0>l(Xe,b))C[O]=Xe,C[xe]=b,O=xe;else break e}}return N}function l(C,N){var b=C.sortIndex-N.sortIndex;return b!==0?b:C.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var u=[],o=[],p=1,f=null,m=3,g=!1,v=!1,j=!1,z=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(C){for(var N=t(o);N!==null;){if(N.callback===null)r(o);else if(N.startTime<=C)r(o),N.sortIndex=N.expirationTime,n(u,N);else break;N=t(o)}}function k(C){if(j=!1,h(C),!v)if(t(u)!==null)v=!0,Vt(S);else{var N=t(o);N!==null&&qn(k,N.startTime-C)}}function S(C,N){v=!1,j&&(j=!1,c(P),P=-1),g=!0;var b=m;try{for(h(N),f=t(u);f!==null&&(!(f.expirationTime>N)||C&&!Se());){var O=f.callback;if(typeof O=="function"){f.callback=null,m=f.priorityLevel;var $=O(f.expirationTime<=N);N=e.unstable_now(),typeof $=="function"?f.callback=$:f===t(u)&&r(u),h(N)}else r(u);f=t(u)}if(f!==null)var Un=!0;else{var Oe=t(o);Oe!==null&&qn(k,Oe.startTime-N),Un=!1}return Un}finally{f=null,m=b,g=!1}}var x=!1,y=null,P=-1,A=5,R=-1;function Se(){return!(e.unstable_now()-R<A)}function $n(){if(y!==null){var C=e.unstable_now();R=C;var N=!0;try{N=y(!0,C)}finally{N?An():(x=!1,y=null)}}else x=!1}var An;if(typeof d=="function")An=function(){d($n)};else if(typeof MessageChannel<"u"){var Kr=new MessageChannel,bi=Kr.port2;Kr.port1.onmessage=$n,An=function(){bi.postMessage(null)}}else An=function(){z($n,0)};function Vt(C){y=C,x||(x=!0,An())}function qn(C,N){P=z(function(){C(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,Vt(S))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(C){switch(m){case 1:case 2:case 3:var N=3;break;default:N=m}var b=m;m=N;try{return C()}finally{m=b}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,N){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var b=m;m=C;try{return N()}finally{m=b}},e.unstable_scheduleCallback=function(C,N,b){var O=e.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?O+b:O):b=O,C){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=b+$,C={id:p++,callback:N,priorityLevel:C,startTime:b,expirationTime:$,sortIndex:-1},b>O?(C.sortIndex=b,n(o,C),t(u)===null&&C===t(o)&&(j?(c(P),P=-1):j=!0,qn(k,b-O))):(C.sortIndex=$,n(u,C),v||g||(v=!0,Vt(S))),C},e.unstable_shouldYield=Se,e.unstable_wrapCallback=function(C){var N=m;return function(){var b=m;m=N;try{return C.apply(this,arguments)}finally{m=b}}}})(sd);ad.exports=sd;var yh=ad.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wh=E,Pe=yh;function w(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ud=new Set,vr={};function at(e,n){bt(e,n),bt(e+"Capture",n)}function bt(e,n){for(vr[e]=n,e=0;e<n.length;e++)ud.add(n[e])}var sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fa=Object.prototype.hasOwnProperty,Sh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ju={},yu={};function xh(e){return fa.call(yu,e)?!0:fa.call(ju,e)?!1:Sh.test(e)?yu[e]=!0:(ju[e]=!0,!1)}function zh(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Eh(e,n,t,r){if(n===null||typeof n>"u"||zh(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function me(e,n,t,r,l,i,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=a}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];se[n]=new me(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)});var js=/[\-:]([a-z])/g;function ys(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(js,ys);se[n]=new me(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(js,ys);se[n]=new me(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(js,ys);se[n]=new me(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)});function ws(e,n,t,r){var l=se.hasOwnProperty(n)?se[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Eh(n,t,l,r)&&(t=null),r||l===null?xh(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var fn=wh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gr=Symbol.for("react.element"),ft=Symbol.for("react.portal"),ct=Symbol.for("react.fragment"),Ss=Symbol.for("react.strict_mode"),ca=Symbol.for("react.profiler"),od=Symbol.for("react.provider"),dd=Symbol.for("react.context"),xs=Symbol.for("react.forward_ref"),ha=Symbol.for("react.suspense"),pa=Symbol.for("react.suspense_list"),zs=Symbol.for("react.memo"),vn=Symbol.for("react.lazy"),fd=Symbol.for("react.offscreen"),wu=Symbol.iterator;function Gt(e){return e===null||typeof e!="object"?null:(e=wu&&e[wu]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,Ri;function rr(e){if(Ri===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Ri=n&&n[1]||""}return`
`+Ri+e}var Fi=!1;function Di(e,n){if(!e||Fi)return"";Fi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(o){var r=o}Reflect.construct(e,[],n)}else{try{n.call()}catch(o){r=o}e.call(n.prototype)}else{try{throw Error()}catch(o){r=o}e()}}catch(o){if(o&&r&&typeof o.stack=="string"){for(var l=o.stack.split(`
`),i=r.stack.split(`
`),a=l.length-1,s=i.length-1;1<=a&&0<=s&&l[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(l[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||l[a]!==i[s]){var u=`
`+l[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=s);break}}}finally{Fi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?rr(e):""}function Ch(e){switch(e.tag){case 5:return rr(e.type);case 16:return rr("Lazy");case 13:return rr("Suspense");case 19:return rr("SuspenseList");case 0:case 2:case 15:return e=Di(e.type,!1),e;case 11:return e=Di(e.type.render,!1),e;case 1:return e=Di(e.type,!0),e;default:return""}}function ma(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ct:return"Fragment";case ft:return"Portal";case ca:return"Profiler";case Ss:return"StrictMode";case ha:return"Suspense";case pa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case dd:return(e.displayName||"Context")+".Consumer";case od:return(e._context.displayName||"Context")+".Provider";case xs:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case zs:return n=e.displayName||null,n!==null?n:ma(e.type)||"Memo";case vn:n=e._payload,e=e._init;try{return ma(e(n))}catch{}}return null}function _h(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ma(n);case 8:return n===Ss?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Fn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ph(e){var n=cd(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Qr(e){e._valueTracker||(e._valueTracker=Ph(e))}function hd(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=cd(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function bl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ga(e,n){var t=n.checked;return J({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Su(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Fn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function pd(e,n){n=n.checked,n!=null&&ws(e,"checked",n,!1)}function ka(e,n){pd(e,n);var t=Fn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?va(e,n.type,t):n.hasOwnProperty("defaultValue")&&va(e,n.type,Fn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function xu(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function va(e,n,t){(n!=="number"||bl(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var lr=Array.isArray;function zt(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Fn(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function ja(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(w(91));return J({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zu(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(w(92));if(lr(t)){if(1<t.length)throw Error(w(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Fn(t)}}function md(e,n){var t=Fn(n.value),r=Fn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Eu(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function gd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ya(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?gd(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zr,kd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Zr=Zr||document.createElement("div"),Zr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Zr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function jr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Nh=["Webkit","ms","Moz","O"];Object.keys(ur).forEach(function(e){Nh.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),ur[n]=ur[e]})});function vd(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||ur.hasOwnProperty(e)&&ur[e]?(""+n).trim():n+"px"}function jd(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=vd(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var bh=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wa(e,n){if(n){if(bh[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(w(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(w(61))}if(n.style!=null&&typeof n.style!="object")throw Error(w(62))}}function Sa(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xa=null;function Es(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var za=null,Et=null,Ct=null;function Cu(e){if(e=Ur(e)){if(typeof za!="function")throw Error(w(280));var n=e.stateNode;n&&(n=di(n),za(e.stateNode,e.type,n))}}function yd(e){Et?Ct?Ct.push(e):Ct=[e]:Et=e}function wd(){if(Et){var e=Et,n=Ct;if(Ct=Et=null,Cu(e),n)for(e=0;e<n.length;e++)Cu(n[e])}}function Sd(e,n){return e(n)}function xd(){}var Ii=!1;function zd(e,n,t){if(Ii)return e(n,t);Ii=!0;try{return Sd(e,n,t)}finally{Ii=!1,(Et!==null||Ct!==null)&&(xd(),wd())}}function yr(e,n){var t=e.stateNode;if(t===null)return null;var r=di(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(w(231,n,typeof t));return t}var Ea=!1;if(sn)try{var Qt={};Object.defineProperty(Qt,"passive",{get:function(){Ea=!0}}),window.addEventListener("test",Qt,Qt),window.removeEventListener("test",Qt,Qt)}catch{Ea=!1}function Th(e,n,t,r,l,i,a,s,u){var o=Array.prototype.slice.call(arguments,3);try{n.apply(t,o)}catch(p){this.onError(p)}}var or=!1,Tl=null,Ll=!1,Ca=null,Lh={onError:function(e){or=!0,Tl=e}};function Rh(e,n,t,r,l,i,a,s,u){or=!1,Tl=null,Th.apply(Lh,arguments)}function Fh(e,n,t,r,l,i,a,s,u){if(Rh.apply(this,arguments),or){if(or){var o=Tl;or=!1,Tl=null}else throw Error(w(198));Ll||(Ll=!0,Ca=o)}}function st(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Ed(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function _u(e){if(st(e)!==e)throw Error(w(188))}function Dh(e){var n=e.alternate;if(!n){if(n=st(e),n===null)throw Error(w(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return _u(l),e;if(i===r)return _u(l),n;i=i.sibling}throw Error(w(188))}if(t.return!==r.return)t=l,r=i;else{for(var a=!1,s=l.child;s;){if(s===t){a=!0,t=l,r=i;break}if(s===r){a=!0,r=l,t=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===t){a=!0,t=i,r=l;break}if(s===r){a=!0,r=i,t=l;break}s=s.sibling}if(!a)throw Error(w(189))}}if(t.alternate!==r)throw Error(w(190))}if(t.tag!==3)throw Error(w(188));return t.stateNode.current===t?e:n}function Cd(e){return e=Dh(e),e!==null?_d(e):null}function _d(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=_d(e);if(n!==null)return n;e=e.sibling}return null}var Pd=Pe.unstable_scheduleCallback,Pu=Pe.unstable_cancelCallback,Ih=Pe.unstable_shouldYield,Mh=Pe.unstable_requestPaint,Q=Pe.unstable_now,Oh=Pe.unstable_getCurrentPriorityLevel,Cs=Pe.unstable_ImmediatePriority,Nd=Pe.unstable_UserBlockingPriority,Rl=Pe.unstable_NormalPriority,$h=Pe.unstable_LowPriority,bd=Pe.unstable_IdlePriority,ai=null,Ze=null;function Ah(e){if(Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(ai,e,void 0,(e.current.flags&128)===128)}catch{}}var Be=Math.clz32?Math.clz32:Bh,qh=Math.log,Uh=Math.LN2;function Bh(e){return e>>>=0,e===0?32:31-(qh(e)/Uh|0)|0}var Yr=64,Xr=4194304;function ir(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fl(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,a=t&268435455;if(a!==0){var s=a&~l;s!==0?r=ir(s):(i&=a,i!==0&&(r=ir(i)))}else a=t&~l,a!==0?r=ir(a):i!==0&&(r=ir(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,i=n&-n,l>=i||l===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Be(n),l=1<<t,r|=e[t],n&=~l;return r}function Hh(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wh(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Be(i),s=1<<a,u=l[a];u===-1?(!(s&t)||s&r)&&(l[a]=Hh(s,n)):u<=n&&(e.expiredLanes|=s),i&=~s}}function _a(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Td(){var e=Yr;return Yr<<=1,!(Yr&4194240)&&(Yr=64),e}function Mi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Ar(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Be(n),e[n]=t}function Kh(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-Be(t),i=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~i}}function _s(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Be(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var M=0;function Ld(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Rd,Ps,Fd,Dd,Id,Pa=!1,el=[],En=null,Cn=null,_n=null,wr=new Map,Sr=new Map,yn=[],Vh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nu(e,n){switch(e){case"focusin":case"focusout":En=null;break;case"dragenter":case"dragleave":Cn=null;break;case"mouseover":case"mouseout":_n=null;break;case"pointerover":case"pointerout":wr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sr.delete(n.pointerId)}}function Zt(e,n,t,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},n!==null&&(n=Ur(n),n!==null&&Ps(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function Jh(e,n,t,r,l){switch(n){case"focusin":return En=Zt(En,e,n,t,r,l),!0;case"dragenter":return Cn=Zt(Cn,e,n,t,r,l),!0;case"mouseover":return _n=Zt(_n,e,n,t,r,l),!0;case"pointerover":var i=l.pointerId;return wr.set(i,Zt(wr.get(i)||null,e,n,t,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Sr.set(i,Zt(Sr.get(i)||null,e,n,t,r,l)),!0}return!1}function Md(e){var n=Kn(e.target);if(n!==null){var t=st(n);if(t!==null){if(n=t.tag,n===13){if(n=Ed(t),n!==null){e.blockedOn=n,Id(e.priority,function(){Fd(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ml(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Na(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);xa=r,t.target.dispatchEvent(r),xa=null}else return n=Ur(t),n!==null&&Ps(n),e.blockedOn=t,!1;n.shift()}return!0}function bu(e,n,t){ml(e)&&t.delete(n)}function Gh(){Pa=!1,En!==null&&ml(En)&&(En=null),Cn!==null&&ml(Cn)&&(Cn=null),_n!==null&&ml(_n)&&(_n=null),wr.forEach(bu),Sr.forEach(bu)}function Yt(e,n){e.blockedOn===n&&(e.blockedOn=null,Pa||(Pa=!0,Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority,Gh)))}function xr(e){function n(l){return Yt(l,e)}if(0<el.length){Yt(el[0],e);for(var t=1;t<el.length;t++){var r=el[t];r.blockedOn===e&&(r.blockedOn=null)}}for(En!==null&&Yt(En,e),Cn!==null&&Yt(Cn,e),_n!==null&&Yt(_n,e),wr.forEach(n),Sr.forEach(n),t=0;t<yn.length;t++)r=yn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<yn.length&&(t=yn[0],t.blockedOn===null);)Md(t),t.blockedOn===null&&yn.shift()}var _t=fn.ReactCurrentBatchConfig,Dl=!0;function Qh(e,n,t,r){var l=M,i=_t.transition;_t.transition=null;try{M=1,Ns(e,n,t,r)}finally{M=l,_t.transition=i}}function Zh(e,n,t,r){var l=M,i=_t.transition;_t.transition=null;try{M=4,Ns(e,n,t,r)}finally{M=l,_t.transition=i}}function Ns(e,n,t,r){if(Dl){var l=Na(e,n,t,r);if(l===null)Vi(e,n,r,Il,t),Nu(e,r);else if(Jh(l,e,n,t,r))r.stopPropagation();else if(Nu(e,r),n&4&&-1<Vh.indexOf(e)){for(;l!==null;){var i=Ur(l);if(i!==null&&Rd(i),i=Na(e,n,t,r),i===null&&Vi(e,n,r,Il,t),i===l)break;l=i}l!==null&&r.stopPropagation()}else Vi(e,n,r,null,t)}}var Il=null;function Na(e,n,t,r){if(Il=null,e=Es(r),e=Kn(e),e!==null)if(n=st(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Ed(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Il=e,null}function Od(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Oh()){case Cs:return 1;case Nd:return 4;case Rl:case $h:return 16;case bd:return 536870912;default:return 16}default:return 16}}var Sn=null,bs=null,gl=null;function $d(){if(gl)return gl;var e,n=bs,t=n.length,r,l="value"in Sn?Sn.value:Sn.textContent,i=l.length;for(e=0;e<t&&n[e]===l[e];e++);var a=t-e;for(r=1;r<=a&&n[t-r]===l[i-r];r++);return gl=l.slice(e,1<r?1-r:void 0)}function kl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function nl(){return!0}function Tu(){return!1}function be(e){function n(t,r,l,i,a){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?nl:Tu,this.isPropagationStopped=Tu,this}return J(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),n}var Bt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ts=be(Bt),qr=J({},Bt,{view:0,detail:0}),Yh=be(qr),Oi,$i,Xt,si=J({},qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ls,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xt&&(Xt&&e.type==="mousemove"?(Oi=e.screenX-Xt.screenX,$i=e.screenY-Xt.screenY):$i=Oi=0,Xt=e),Oi)},movementY:function(e){return"movementY"in e?e.movementY:$i}}),Lu=be(si),Xh=J({},si,{dataTransfer:0}),ep=be(Xh),np=J({},qr,{relatedTarget:0}),Ai=be(np),tp=J({},Bt,{animationName:0,elapsedTime:0,pseudoElement:0}),rp=be(tp),lp=J({},Bt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ip=be(lp),ap=J({},Bt,{data:0}),Ru=be(ap),sp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},up={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},op={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dp(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=op[e])?!!n[e]:!1}function Ls(){return dp}var fp=J({},qr,{key:function(e){if(e.key){var n=sp[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=kl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?up[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ls,charCode:function(e){return e.type==="keypress"?kl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?kl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cp=be(fp),hp=J({},si,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fu=be(hp),pp=J({},qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ls}),mp=be(pp),gp=J({},Bt,{propertyName:0,elapsedTime:0,pseudoElement:0}),kp=be(gp),vp=J({},si,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jp=be(vp),yp=[9,13,27,32],Rs=sn&&"CompositionEvent"in window,dr=null;sn&&"documentMode"in document&&(dr=document.documentMode);var wp=sn&&"TextEvent"in window&&!dr,Ad=sn&&(!Rs||dr&&8<dr&&11>=dr),Du=" ",Iu=!1;function qd(e,n){switch(e){case"keyup":return yp.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ud(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ht=!1;function Sp(e,n){switch(e){case"compositionend":return Ud(n);case"keypress":return n.which!==32?null:(Iu=!0,Du);case"textInput":return e=n.data,e===Du&&Iu?null:e;default:return null}}function xp(e,n){if(ht)return e==="compositionend"||!Rs&&qd(e,n)?(e=$d(),gl=bs=Sn=null,ht=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ad&&n.locale!=="ko"?null:n.data;default:return null}}var zp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!zp[e.type]:n==="textarea"}function Bd(e,n,t,r){yd(r),n=Ml(n,"onChange"),0<n.length&&(t=new Ts("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var fr=null,zr=null;function Ep(e){ef(e,0)}function ui(e){var n=gt(e);if(hd(n))return e}function Cp(e,n){if(e==="change")return n}var Hd=!1;if(sn){var qi;if(sn){var Ui="oninput"in document;if(!Ui){var Ou=document.createElement("div");Ou.setAttribute("oninput","return;"),Ui=typeof Ou.oninput=="function"}qi=Ui}else qi=!1;Hd=qi&&(!document.documentMode||9<document.documentMode)}function $u(){fr&&(fr.detachEvent("onpropertychange",Wd),zr=fr=null)}function Wd(e){if(e.propertyName==="value"&&ui(zr)){var n=[];Bd(n,zr,e,Es(e)),zd(Ep,n)}}function _p(e,n,t){e==="focusin"?($u(),fr=n,zr=t,fr.attachEvent("onpropertychange",Wd)):e==="focusout"&&$u()}function Pp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ui(zr)}function Np(e,n){if(e==="click")return ui(n)}function bp(e,n){if(e==="input"||e==="change")return ui(n)}function Tp(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ke=typeof Object.is=="function"?Object.is:Tp;function Er(e,n){if(Ke(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!fa.call(n,l)||!Ke(e[l],n[l]))return!1}return!0}function Au(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qu(e,n){var t=Au(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Au(t)}}function Kd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Kd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Vd(){for(var e=window,n=bl();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=bl(e.document)}return n}function Fs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Lp(e){var n=Vd(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Kd(t.ownerDocument.documentElement,t)){if(r!==null&&Fs(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=qu(t,i);var a=qu(t,r);l&&a&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Rp=sn&&"documentMode"in document&&11>=document.documentMode,pt=null,ba=null,cr=null,Ta=!1;function Uu(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ta||pt==null||pt!==bl(r)||(r=pt,"selectionStart"in r&&Fs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),cr&&Er(cr,r)||(cr=r,r=Ml(ba,"onSelect"),0<r.length&&(n=new Ts("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=pt)))}function tl(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var mt={animationend:tl("Animation","AnimationEnd"),animationiteration:tl("Animation","AnimationIteration"),animationstart:tl("Animation","AnimationStart"),transitionend:tl("Transition","TransitionEnd")},Bi={},Jd={};sn&&(Jd=document.createElement("div").style,"AnimationEvent"in window||(delete mt.animationend.animation,delete mt.animationiteration.animation,delete mt.animationstart.animation),"TransitionEvent"in window||delete mt.transitionend.transition);function oi(e){if(Bi[e])return Bi[e];if(!mt[e])return e;var n=mt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Jd)return Bi[e]=n[t];return e}var Gd=oi("animationend"),Qd=oi("animationiteration"),Zd=oi("animationstart"),Yd=oi("transitionend"),Xd=new Map,Bu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function In(e,n){Xd.set(e,n),at(n,[e])}for(var Hi=0;Hi<Bu.length;Hi++){var Wi=Bu[Hi],Fp=Wi.toLowerCase(),Dp=Wi[0].toUpperCase()+Wi.slice(1);In(Fp,"on"+Dp)}In(Gd,"onAnimationEnd");In(Qd,"onAnimationIteration");In(Zd,"onAnimationStart");In("dblclick","onDoubleClick");In("focusin","onFocus");In("focusout","onBlur");In(Yd,"onTransitionEnd");bt("onMouseEnter",["mouseout","mouseover"]);bt("onMouseLeave",["mouseout","mouseover"]);bt("onPointerEnter",["pointerout","pointerover"]);bt("onPointerLeave",["pointerout","pointerover"]);at("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));at("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));at("onBeforeInput",["compositionend","keypress","textInput","paste"]);at("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));at("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));at("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ip=new Set("cancel close invalid load scroll toggle".split(" ").concat(ar));function Hu(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Fh(r,n,void 0,e),e.currentTarget=null}function ef(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var a=r.length-1;0<=a;a--){var s=r[a],u=s.instance,o=s.currentTarget;if(s=s.listener,u!==i&&l.isPropagationStopped())break e;Hu(l,s,o),i=u}else for(a=0;a<r.length;a++){if(s=r[a],u=s.instance,o=s.currentTarget,s=s.listener,u!==i&&l.isPropagationStopped())break e;Hu(l,s,o),i=u}}}if(Ll)throw e=Ca,Ll=!1,Ca=null,e}function U(e,n){var t=n[Ia];t===void 0&&(t=n[Ia]=new Set);var r=e+"__bubble";t.has(r)||(nf(n,e,2,!1),t.add(r))}function Ki(e,n,t){var r=0;n&&(r|=4),nf(t,e,r,n)}var rl="_reactListening"+Math.random().toString(36).slice(2);function Cr(e){if(!e[rl]){e[rl]=!0,ud.forEach(function(t){t!=="selectionchange"&&(Ip.has(t)||Ki(t,!1,e),Ki(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[rl]||(n[rl]=!0,Ki("selectionchange",!1,n))}}function nf(e,n,t,r){switch(Od(n)){case 1:var l=Qh;break;case 4:l=Zh;break;default:l=Ns}t=l.bind(null,n,t,e),l=void 0,!Ea||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function Vi(e,n,t,r,l){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;a=a.return}for(;s!==null;){if(a=Kn(s),a===null)return;if(u=a.tag,u===5||u===6){r=i=a;continue e}s=s.parentNode}}r=r.return}zd(function(){var o=i,p=Es(t),f=[];e:{var m=Xd.get(e);if(m!==void 0){var g=Ts,v=e;switch(e){case"keypress":if(kl(t)===0)break e;case"keydown":case"keyup":g=cp;break;case"focusin":v="focus",g=Ai;break;case"focusout":v="blur",g=Ai;break;case"beforeblur":case"afterblur":g=Ai;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Lu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=ep;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=mp;break;case Gd:case Qd:case Zd:g=rp;break;case Yd:g=kp;break;case"scroll":g=Yh;break;case"wheel":g=jp;break;case"copy":case"cut":case"paste":g=ip;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Fu}var j=(n&4)!==0,z=!j&&e==="scroll",c=j?m!==null?m+"Capture":null:m;j=[];for(var d=o,h;d!==null;){h=d;var k=h.stateNode;if(h.tag===5&&k!==null&&(h=k,c!==null&&(k=yr(d,c),k!=null&&j.push(_r(d,k,h)))),z)break;d=d.return}0<j.length&&(m=new g(m,v,null,t,p),f.push({event:m,listeners:j}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&t!==xa&&(v=t.relatedTarget||t.fromElement)&&(Kn(v)||v[un]))break e;if((g||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,g?(v=t.relatedTarget||t.toElement,g=o,v=v?Kn(v):null,v!==null&&(z=st(v),v!==z||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=o),g!==v)){if(j=Lu,k="onMouseLeave",c="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(j=Fu,k="onPointerLeave",c="onPointerEnter",d="pointer"),z=g==null?m:gt(g),h=v==null?m:gt(v),m=new j(k,d+"leave",g,t,p),m.target=z,m.relatedTarget=h,k=null,Kn(p)===o&&(j=new j(c,d+"enter",v,t,p),j.target=h,j.relatedTarget=z,k=j),z=k,g&&v)n:{for(j=g,c=v,d=0,h=j;h;h=ot(h))d++;for(h=0,k=c;k;k=ot(k))h++;for(;0<d-h;)j=ot(j),d--;for(;0<h-d;)c=ot(c),h--;for(;d--;){if(j===c||c!==null&&j===c.alternate)break n;j=ot(j),c=ot(c)}j=null}else j=null;g!==null&&Wu(f,m,g,j,!1),v!==null&&z!==null&&Wu(f,z,v,j,!0)}}e:{if(m=o?gt(o):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var S=Cp;else if(Mu(m))if(Hd)S=bp;else{S=Pp;var x=_p}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=Np);if(S&&(S=S(e,o))){Bd(f,S,t,p);break e}x&&x(e,m,o),e==="focusout"&&(x=m._wrapperState)&&x.controlled&&m.type==="number"&&va(m,"number",m.value)}switch(x=o?gt(o):window,e){case"focusin":(Mu(x)||x.contentEditable==="true")&&(pt=x,ba=o,cr=null);break;case"focusout":cr=ba=pt=null;break;case"mousedown":Ta=!0;break;case"contextmenu":case"mouseup":case"dragend":Ta=!1,Uu(f,t,p);break;case"selectionchange":if(Rp)break;case"keydown":case"keyup":Uu(f,t,p)}var y;if(Rs)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ht?qd(e,t)&&(P="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(Ad&&t.locale!=="ko"&&(ht||P!=="onCompositionStart"?P==="onCompositionEnd"&&ht&&(y=$d()):(Sn=p,bs="value"in Sn?Sn.value:Sn.textContent,ht=!0)),x=Ml(o,P),0<x.length&&(P=new Ru(P,e,null,t,p),f.push({event:P,listeners:x}),y?P.data=y:(y=Ud(t),y!==null&&(P.data=y)))),(y=wp?Sp(e,t):xp(e,t))&&(o=Ml(o,"onBeforeInput"),0<o.length&&(p=new Ru("onBeforeInput","beforeinput",null,t,p),f.push({event:p,listeners:o}),p.data=y))}ef(f,n)})}function _r(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ml(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=yr(e,t),i!=null&&r.unshift(_r(e,i,l)),i=yr(e,n),i!=null&&r.push(_r(e,i,l))),e=e.return}return r}function ot(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Wu(e,n,t,r,l){for(var i=n._reactName,a=[];t!==null&&t!==r;){var s=t,u=s.alternate,o=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&o!==null&&(s=o,l?(u=yr(t,i),u!=null&&a.unshift(_r(t,u,s))):l||(u=yr(t,i),u!=null&&a.push(_r(t,u,s)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var Mp=/\r\n?/g,Op=/\u0000|\uFFFD/g;function Ku(e){return(typeof e=="string"?e:""+e).replace(Mp,`
`).replace(Op,"")}function ll(e,n,t){if(n=Ku(n),Ku(e)!==n&&t)throw Error(w(425))}function Ol(){}var La=null,Ra=null;function Fa(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Da=typeof setTimeout=="function"?setTimeout:void 0,$p=typeof clearTimeout=="function"?clearTimeout:void 0,Vu=typeof Promise=="function"?Promise:void 0,Ap=typeof queueMicrotask=="function"?queueMicrotask:typeof Vu<"u"?function(e){return Vu.resolve(null).then(e).catch(qp)}:Da;function qp(e){setTimeout(function(){throw e})}function Ji(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),xr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);xr(n)}function Pn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ju(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Ht=Math.random().toString(36).slice(2),Qe="__reactFiber$"+Ht,Pr="__reactProps$"+Ht,un="__reactContainer$"+Ht,Ia="__reactEvents$"+Ht,Up="__reactListeners$"+Ht,Bp="__reactHandles$"+Ht;function Kn(e){var n=e[Qe];if(n)return n;for(var t=e.parentNode;t;){if(n=t[un]||t[Qe]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ju(e);e!==null;){if(t=e[Qe])return t;e=Ju(e)}return n}e=t,t=e.parentNode}return null}function Ur(e){return e=e[Qe]||e[un],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function gt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function di(e){return e[Pr]||null}var Ma=[],kt=-1;function Mn(e){return{current:e}}function H(e){0>kt||(e.current=Ma[kt],Ma[kt]=null,kt--)}function q(e,n){kt++,Ma[kt]=e.current,e.current=n}var Dn={},fe=Mn(Dn),je=Mn(!1),nt=Dn;function Tt(e,n){var t=e.type.contextTypes;if(!t)return Dn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in t)l[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function ye(e){return e=e.childContextTypes,e!=null}function $l(){H(je),H(fe)}function Gu(e,n,t){if(fe.current!==Dn)throw Error(w(168));q(fe,n),q(je,t)}function tf(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(w(108,_h(e)||"Unknown",l));return J({},t,r)}function Al(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Dn,nt=fe.current,q(fe,e),q(je,je.current),!0}function Qu(e,n,t){var r=e.stateNode;if(!r)throw Error(w(169));t?(e=tf(e,n,nt),r.__reactInternalMemoizedMergedChildContext=e,H(je),H(fe),q(fe,e)):H(je),q(je,t)}var tn=null,fi=!1,Gi=!1;function rf(e){tn===null?tn=[e]:tn.push(e)}function Hp(e){fi=!0,rf(e)}function On(){if(!Gi&&tn!==null){Gi=!0;var e=0,n=M;try{var t=tn;for(M=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}tn=null,fi=!1}catch(l){throw tn!==null&&(tn=tn.slice(e+1)),Pd(Cs,On),l}finally{M=n,Gi=!1}}return null}var vt=[],jt=0,ql=null,Ul=0,Te=[],Le=0,tt=null,rn=1,ln="";function Hn(e,n){vt[jt++]=Ul,vt[jt++]=ql,ql=e,Ul=n}function lf(e,n,t){Te[Le++]=rn,Te[Le++]=ln,Te[Le++]=tt,tt=e;var r=rn;e=ln;var l=32-Be(r)-1;r&=~(1<<l),t+=1;var i=32-Be(n)+l;if(30<i){var a=l-l%5;i=(r&(1<<a)-1).toString(32),r>>=a,l-=a,rn=1<<32-Be(n)+l|t<<l|r,ln=i+e}else rn=1<<i|t<<l|r,ln=e}function Ds(e){e.return!==null&&(Hn(e,1),lf(e,1,0))}function Is(e){for(;e===ql;)ql=vt[--jt],vt[jt]=null,Ul=vt[--jt],vt[jt]=null;for(;e===tt;)tt=Te[--Le],Te[Le]=null,ln=Te[--Le],Te[Le]=null,rn=Te[--Le],Te[Le]=null}var _e=null,Ce=null,W=!1,Ue=null;function af(e,n){var t=Re(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Zu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,_e=e,Ce=Pn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,_e=e,Ce=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=tt!==null?{id:rn,overflow:ln}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Re(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,_e=e,Ce=null,!0):!1;default:return!1}}function Oa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function $a(e){if(W){var n=Ce;if(n){var t=n;if(!Zu(e,n)){if(Oa(e))throw Error(w(418));n=Pn(t.nextSibling);var r=_e;n&&Zu(e,n)?af(r,t):(e.flags=e.flags&-4097|2,W=!1,_e=e)}}else{if(Oa(e))throw Error(w(418));e.flags=e.flags&-4097|2,W=!1,_e=e}}}function Yu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;_e=e}function il(e){if(e!==_e)return!1;if(!W)return Yu(e),W=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Fa(e.type,e.memoizedProps)),n&&(n=Ce)){if(Oa(e))throw sf(),Error(w(418));for(;n;)af(e,n),n=Pn(n.nextSibling)}if(Yu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ce=Pn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ce=null}}else Ce=_e?Pn(e.stateNode.nextSibling):null;return!0}function sf(){for(var e=Ce;e;)e=Pn(e.nextSibling)}function Lt(){Ce=_e=null,W=!1}function Ms(e){Ue===null?Ue=[e]:Ue.push(e)}var Wp=fn.ReactCurrentBatchConfig;function er(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(w(309));var r=t.stateNode}if(!r)throw Error(w(147,e));var l=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(a){var s=l.refs;a===null?delete s[i]:s[i]=a},n._stringRef=i,n)}if(typeof e!="string")throw Error(w(284));if(!t._owner)throw Error(w(290,e))}return e}function al(e,n){throw e=Object.prototype.toString.call(n),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Xu(e){var n=e._init;return n(e._payload)}function uf(e){function n(c,d){if(e){var h=c.deletions;h===null?(c.deletions=[d],c.flags|=16):h.push(d)}}function t(c,d){if(!e)return null;for(;d!==null;)n(c,d),d=d.sibling;return null}function r(c,d){for(c=new Map;d!==null;)d.key!==null?c.set(d.key,d):c.set(d.index,d),d=d.sibling;return c}function l(c,d){return c=Ln(c,d),c.index=0,c.sibling=null,c}function i(c,d,h){return c.index=h,e?(h=c.alternate,h!==null?(h=h.index,h<d?(c.flags|=2,d):h):(c.flags|=2,d)):(c.flags|=1048576,d)}function a(c){return e&&c.alternate===null&&(c.flags|=2),c}function s(c,d,h,k){return d===null||d.tag!==6?(d=ta(h,c.mode,k),d.return=c,d):(d=l(d,h),d.return=c,d)}function u(c,d,h,k){var S=h.type;return S===ct?p(c,d,h.props.children,k,h.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===vn&&Xu(S)===d.type)?(k=l(d,h.props),k.ref=er(c,d,h),k.return=c,k):(k=zl(h.type,h.key,h.props,null,c.mode,k),k.ref=er(c,d,h),k.return=c,k)}function o(c,d,h,k){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=ra(h,c.mode,k),d.return=c,d):(d=l(d,h.children||[]),d.return=c,d)}function p(c,d,h,k,S){return d===null||d.tag!==7?(d=Zn(h,c.mode,k,S),d.return=c,d):(d=l(d,h),d.return=c,d)}function f(c,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ta(""+d,c.mode,h),d.return=c,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Gr:return h=zl(d.type,d.key,d.props,null,c.mode,h),h.ref=er(c,null,d),h.return=c,h;case ft:return d=ra(d,c.mode,h),d.return=c,d;case vn:var k=d._init;return f(c,k(d._payload),h)}if(lr(d)||Gt(d))return d=Zn(d,c.mode,h,null),d.return=c,d;al(c,d)}return null}function m(c,d,h,k){var S=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:s(c,d,""+h,k);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Gr:return h.key===S?u(c,d,h,k):null;case ft:return h.key===S?o(c,d,h,k):null;case vn:return S=h._init,m(c,d,S(h._payload),k)}if(lr(h)||Gt(h))return S!==null?null:p(c,d,h,k,null);al(c,h)}return null}function g(c,d,h,k,S){if(typeof k=="string"&&k!==""||typeof k=="number")return c=c.get(h)||null,s(d,c,""+k,S);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Gr:return c=c.get(k.key===null?h:k.key)||null,u(d,c,k,S);case ft:return c=c.get(k.key===null?h:k.key)||null,o(d,c,k,S);case vn:var x=k._init;return g(c,d,h,x(k._payload),S)}if(lr(k)||Gt(k))return c=c.get(h)||null,p(d,c,k,S,null);al(d,k)}return null}function v(c,d,h,k){for(var S=null,x=null,y=d,P=d=0,A=null;y!==null&&P<h.length;P++){y.index>P?(A=y,y=null):A=y.sibling;var R=m(c,y,h[P],k);if(R===null){y===null&&(y=A);break}e&&y&&R.alternate===null&&n(c,y),d=i(R,d,P),x===null?S=R:x.sibling=R,x=R,y=A}if(P===h.length)return t(c,y),W&&Hn(c,P),S;if(y===null){for(;P<h.length;P++)y=f(c,h[P],k),y!==null&&(d=i(y,d,P),x===null?S=y:x.sibling=y,x=y);return W&&Hn(c,P),S}for(y=r(c,y);P<h.length;P++)A=g(y,c,P,h[P],k),A!==null&&(e&&A.alternate!==null&&y.delete(A.key===null?P:A.key),d=i(A,d,P),x===null?S=A:x.sibling=A,x=A);return e&&y.forEach(function(Se){return n(c,Se)}),W&&Hn(c,P),S}function j(c,d,h,k){var S=Gt(h);if(typeof S!="function")throw Error(w(150));if(h=S.call(h),h==null)throw Error(w(151));for(var x=S=null,y=d,P=d=0,A=null,R=h.next();y!==null&&!R.done;P++,R=h.next()){y.index>P?(A=y,y=null):A=y.sibling;var Se=m(c,y,R.value,k);if(Se===null){y===null&&(y=A);break}e&&y&&Se.alternate===null&&n(c,y),d=i(Se,d,P),x===null?S=Se:x.sibling=Se,x=Se,y=A}if(R.done)return t(c,y),W&&Hn(c,P),S;if(y===null){for(;!R.done;P++,R=h.next())R=f(c,R.value,k),R!==null&&(d=i(R,d,P),x===null?S=R:x.sibling=R,x=R);return W&&Hn(c,P),S}for(y=r(c,y);!R.done;P++,R=h.next())R=g(y,c,P,R.value,k),R!==null&&(e&&R.alternate!==null&&y.delete(R.key===null?P:R.key),d=i(R,d,P),x===null?S=R:x.sibling=R,x=R);return e&&y.forEach(function($n){return n(c,$n)}),W&&Hn(c,P),S}function z(c,d,h,k){if(typeof h=="object"&&h!==null&&h.type===ct&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Gr:e:{for(var S=h.key,x=d;x!==null;){if(x.key===S){if(S=h.type,S===ct){if(x.tag===7){t(c,x.sibling),d=l(x,h.props.children),d.return=c,c=d;break e}}else if(x.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===vn&&Xu(S)===x.type){t(c,x.sibling),d=l(x,h.props),d.ref=er(c,x,h),d.return=c,c=d;break e}t(c,x);break}else n(c,x);x=x.sibling}h.type===ct?(d=Zn(h.props.children,c.mode,k,h.key),d.return=c,c=d):(k=zl(h.type,h.key,h.props,null,c.mode,k),k.ref=er(c,d,h),k.return=c,c=k)}return a(c);case ft:e:{for(x=h.key;d!==null;){if(d.key===x)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){t(c,d.sibling),d=l(d,h.children||[]),d.return=c,c=d;break e}else{t(c,d);break}else n(c,d);d=d.sibling}d=ra(h,c.mode,k),d.return=c,c=d}return a(c);case vn:return x=h._init,z(c,d,x(h._payload),k)}if(lr(h))return v(c,d,h,k);if(Gt(h))return j(c,d,h,k);al(c,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(t(c,d.sibling),d=l(d,h),d.return=c,c=d):(t(c,d),d=ta(h,c.mode,k),d.return=c,c=d),a(c)):t(c,d)}return z}var Rt=uf(!0),of=uf(!1),Bl=Mn(null),Hl=null,yt=null,Os=null;function $s(){Os=yt=Hl=null}function As(e){var n=Bl.current;H(Bl),e._currentValue=n}function Aa(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Pt(e,n){Hl=e,Os=yt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ke=!0),e.firstContext=null)}function De(e){var n=e._currentValue;if(Os!==e)if(e={context:e,memoizedValue:n,next:null},yt===null){if(Hl===null)throw Error(w(308));yt=e,Hl.dependencies={lanes:0,firstContext:e}}else yt=yt.next=e;return n}var Vn=null;function qs(e){Vn===null?Vn=[e]:Vn.push(e)}function df(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,qs(n)):(t.next=l.next,l.next=t),n.interleaved=t,on(e,r)}function on(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var jn=!1;function Us(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ff(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function an(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Nn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,on(e,t)}return l=r.interleaved,l===null?(n.next=n,qs(r)):(n.next=l.next,l.next=n),r.interleaved=n,on(e,t)}function vl(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,_s(e,t)}}function eo(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?l=i=a:i=i.next=a,t=t.next}while(t!==null);i===null?l=i=n:i=i.next=n}else l=i=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Wl(e,n,t,r){var l=e.updateQueue;jn=!1;var i=l.firstBaseUpdate,a=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,o=u.next;u.next=null,a===null?i=o:a.next=o,a=u;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==a&&(s===null?p.firstBaseUpdate=o:s.next=o,p.lastBaseUpdate=u))}if(i!==null){var f=l.baseState;a=0,p=o=u=null,s=i;do{var m=s.lane,g=s.eventTime;if((r&m)===m){p!==null&&(p=p.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,j=s;switch(m=n,g=t,j.tag){case 1:if(v=j.payload,typeof v=="function"){f=v.call(g,f,m);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=j.payload,m=typeof v=="function"?v.call(g,f,m):v,m==null)break e;f=J({},f,m);break e;case 2:jn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[s]:m.push(s))}else g={eventTime:g,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(o=p=g,u=f):p=p.next=g,a|=m;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;m=s,s=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(p===null&&(u=f),l.baseState=u,l.firstBaseUpdate=o,l.lastBaseUpdate=p,n=l.shared.interleaved,n!==null){l=n;do a|=l.lane,l=l.next;while(l!==n)}else i===null&&(l.shared.lanes=0);lt|=a,e.lanes=a,e.memoizedState=f}}function no(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(w(191,l));l.call(r)}}}var Br={},Ye=Mn(Br),Nr=Mn(Br),br=Mn(Br);function Jn(e){if(e===Br)throw Error(w(174));return e}function Bs(e,n){switch(q(br,n),q(Nr,e),q(Ye,Br),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ya(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ya(n,e)}H(Ye),q(Ye,n)}function Ft(){H(Ye),H(Nr),H(br)}function cf(e){Jn(br.current);var n=Jn(Ye.current),t=ya(n,e.type);n!==t&&(q(Nr,e),q(Ye,t))}function Hs(e){Nr.current===e&&(H(Ye),H(Nr))}var K=Mn(0);function Kl(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Qi=[];function Ws(){for(var e=0;e<Qi.length;e++)Qi[e]._workInProgressVersionPrimary=null;Qi.length=0}var jl=fn.ReactCurrentDispatcher,Zi=fn.ReactCurrentBatchConfig,rt=0,V=null,ee=null,te=null,Vl=!1,hr=!1,Tr=0,Kp=0;function ue(){throw Error(w(321))}function Ks(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ke(e[t],n[t]))return!1;return!0}function Vs(e,n,t,r,l,i){if(rt=i,V=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,jl.current=e===null||e.memoizedState===null?Qp:Zp,e=t(r,l),hr){i=0;do{if(hr=!1,Tr=0,25<=i)throw Error(w(301));i+=1,te=ee=null,n.updateQueue=null,jl.current=Yp,e=t(r,l)}while(hr)}if(jl.current=Jl,n=ee!==null&&ee.next!==null,rt=0,te=ee=V=null,Vl=!1,n)throw Error(w(300));return e}function Js(){var e=Tr!==0;return Tr=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?V.memoizedState=te=e:te=te.next=e,te}function Ie(){if(ee===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var n=te===null?V.memoizedState:te.next;if(n!==null)te=n,ee=e;else{if(e===null)throw Error(w(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},te===null?V.memoizedState=te=e:te=te.next=e}return te}function Lr(e,n){return typeof n=="function"?n(e):n}function Yi(e){var n=Ie(),t=n.queue;if(t===null)throw Error(w(311));t.lastRenderedReducer=e;var r=ee,l=r.baseQueue,i=t.pending;if(i!==null){if(l!==null){var a=l.next;l.next=i.next,i.next=a}r.baseQueue=l=i,t.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=a=null,u=null,o=i;do{var p=o.lane;if((rt&p)===p)u!==null&&(u=u.next={lane:0,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null}),r=o.hasEagerState?o.eagerState:e(r,o.action);else{var f={lane:p,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null};u===null?(s=u=f,a=r):u=u.next=f,V.lanes|=p,lt|=p}o=o.next}while(o!==null&&o!==i);u===null?a=r:u.next=s,Ke(r,n.memoizedState)||(ke=!0),n.memoizedState=r,n.baseState=a,n.baseQueue=u,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do i=l.lane,V.lanes|=i,lt|=i,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Xi(e){var n=Ie(),t=n.queue;if(t===null)throw Error(w(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,i=n.memoizedState;if(l!==null){t.pending=null;var a=l=l.next;do i=e(i,a.action),a=a.next;while(a!==l);Ke(i,n.memoizedState)||(ke=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function hf(){}function pf(e,n){var t=V,r=Ie(),l=n(),i=!Ke(r.memoizedState,l);if(i&&(r.memoizedState=l,ke=!0),r=r.queue,Gs(kf.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||te!==null&&te.memoizedState.tag&1){if(t.flags|=2048,Rr(9,gf.bind(null,t,r,l,n),void 0,null),le===null)throw Error(w(349));rt&30||mf(t,n,l)}return l}function mf(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=V.updateQueue,n===null?(n={lastEffect:null,stores:null},V.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function gf(e,n,t,r){n.value=t,n.getSnapshot=r,vf(n)&&jf(e)}function kf(e,n,t){return t(function(){vf(n)&&jf(e)})}function vf(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ke(e,t)}catch{return!0}}function jf(e){var n=on(e,1);n!==null&&He(n,e,1,-1)}function to(e){var n=Je();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lr,lastRenderedState:e},n.queue=e,e=e.dispatch=Gp.bind(null,V,e),[n.memoizedState,e]}function Rr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=V.updateQueue,n===null?(n={lastEffect:null,stores:null},V.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function yf(){return Ie().memoizedState}function yl(e,n,t,r){var l=Je();V.flags|=e,l.memoizedState=Rr(1|n,t,void 0,r===void 0?null:r)}function ci(e,n,t,r){var l=Ie();r=r===void 0?null:r;var i=void 0;if(ee!==null){var a=ee.memoizedState;if(i=a.destroy,r!==null&&Ks(r,a.deps)){l.memoizedState=Rr(n,t,i,r);return}}V.flags|=e,l.memoizedState=Rr(1|n,t,i,r)}function ro(e,n){return yl(8390656,8,e,n)}function Gs(e,n){return ci(2048,8,e,n)}function wf(e,n){return ci(4,2,e,n)}function Sf(e,n){return ci(4,4,e,n)}function xf(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function zf(e,n,t){return t=t!=null?t.concat([e]):null,ci(4,4,xf.bind(null,n,e),t)}function Qs(){}function Ef(e,n){var t=Ie();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ks(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Cf(e,n){var t=Ie();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ks(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function _f(e,n,t){return rt&21?(Ke(t,n)||(t=Td(),V.lanes|=t,lt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ke=!0),e.memoizedState=t)}function Vp(e,n){var t=M;M=t!==0&&4>t?t:4,e(!0);var r=Zi.transition;Zi.transition={};try{e(!1),n()}finally{M=t,Zi.transition=r}}function Pf(){return Ie().memoizedState}function Jp(e,n,t){var r=Tn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Nf(e))bf(n,t);else if(t=df(e,n,t,r),t!==null){var l=he();He(t,e,r,l),Tf(t,n,r)}}function Gp(e,n,t){var r=Tn(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Nf(e))bf(n,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var a=n.lastRenderedState,s=i(a,t);if(l.hasEagerState=!0,l.eagerState=s,Ke(s,a)){var u=n.interleaved;u===null?(l.next=l,qs(n)):(l.next=u.next,u.next=l),n.interleaved=l;return}}catch{}finally{}t=df(e,n,l,r),t!==null&&(l=he(),He(t,e,r,l),Tf(t,n,r))}}function Nf(e){var n=e.alternate;return e===V||n!==null&&n===V}function bf(e,n){hr=Vl=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Tf(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,_s(e,t)}}var Jl={readContext:De,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},Qp={readContext:De,useCallback:function(e,n){return Je().memoizedState=[e,n===void 0?null:n],e},useContext:De,useEffect:ro,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,yl(4194308,4,xf.bind(null,n,e),t)},useLayoutEffect:function(e,n){return yl(4194308,4,e,n)},useInsertionEffect:function(e,n){return yl(4,2,e,n)},useMemo:function(e,n){var t=Je();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Je();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Jp.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var n=Je();return e={current:e},n.memoizedState=e},useState:to,useDebugValue:Qs,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=to(!1),n=e[0];return e=Vp.bind(null,e[1]),Je().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=V,l=Je();if(W){if(t===void 0)throw Error(w(407));t=t()}else{if(t=n(),le===null)throw Error(w(349));rt&30||mf(r,n,t)}l.memoizedState=t;var i={value:t,getSnapshot:n};return l.queue=i,ro(kf.bind(null,r,i,e),[e]),r.flags|=2048,Rr(9,gf.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=Je(),n=le.identifierPrefix;if(W){var t=ln,r=rn;t=(r&~(1<<32-Be(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Tr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Kp++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Zp={readContext:De,useCallback:Ef,useContext:De,useEffect:Gs,useImperativeHandle:zf,useInsertionEffect:wf,useLayoutEffect:Sf,useMemo:Cf,useReducer:Yi,useRef:yf,useState:function(){return Yi(Lr)},useDebugValue:Qs,useDeferredValue:function(e){var n=Ie();return _f(n,ee.memoizedState,e)},useTransition:function(){var e=Yi(Lr)[0],n=Ie().memoizedState;return[e,n]},useMutableSource:hf,useSyncExternalStore:pf,useId:Pf,unstable_isNewReconciler:!1},Yp={readContext:De,useCallback:Ef,useContext:De,useEffect:Gs,useImperativeHandle:zf,useInsertionEffect:wf,useLayoutEffect:Sf,useMemo:Cf,useReducer:Xi,useRef:yf,useState:function(){return Xi(Lr)},useDebugValue:Qs,useDeferredValue:function(e){var n=Ie();return ee===null?n.memoizedState=e:_f(n,ee.memoizedState,e)},useTransition:function(){var e=Xi(Lr)[0],n=Ie().memoizedState;return[e,n]},useMutableSource:hf,useSyncExternalStore:pf,useId:Pf,unstable_isNewReconciler:!1};function Ae(e,n){if(e&&e.defaultProps){n=J({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function qa(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:J({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var hi={isMounted:function(e){return(e=e._reactInternals)?st(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=he(),l=Tn(e),i=an(r,l);i.payload=n,t!=null&&(i.callback=t),n=Nn(e,i,l),n!==null&&(He(n,e,l,r),vl(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=he(),l=Tn(e),i=an(r,l);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Nn(e,i,l),n!==null&&(He(n,e,l,r),vl(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=he(),r=Tn(e),l=an(t,r);l.tag=2,n!=null&&(l.callback=n),n=Nn(e,l,r),n!==null&&(He(n,e,r,t),vl(n,e,r))}};function lo(e,n,t,r,l,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):n.prototype&&n.prototype.isPureReactComponent?!Er(t,r)||!Er(l,i):!0}function Lf(e,n,t){var r=!1,l=Dn,i=n.contextType;return typeof i=="object"&&i!==null?i=De(i):(l=ye(n)?nt:fe.current,r=n.contextTypes,i=(r=r!=null)?Tt(e,l):Dn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=hi,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),n}function io(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&hi.enqueueReplaceState(n,n.state,null)}function Ua(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},Us(e);var i=n.contextType;typeof i=="object"&&i!==null?l.context=De(i):(i=ye(n)?nt:fe.current,l.context=Tt(e,i)),l.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(qa(e,n,i,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&hi.enqueueReplaceState(l,l.state,null),Wl(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Dt(e,n){try{var t="",r=n;do t+=Ch(r),r=r.return;while(r);var l=t}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:l,digest:null}}function ea(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ba(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Xp=typeof WeakMap=="function"?WeakMap:Map;function Rf(e,n,t){t=an(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Ql||(Ql=!0,Xa=r),Ba(e,n)},t}function Ff(e,n,t){t=an(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){Ba(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Ba(e,n),typeof r!="function"&&(bn===null?bn=new Set([this]):bn.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function ao(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Xp;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=hm.bind(null,e,n,t),n.then(e,e))}function so(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function uo(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=an(-1,1),n.tag=2,Nn(t,n,1))),t.lanes|=1),e)}var em=fn.ReactCurrentOwner,ke=!1;function ce(e,n,t,r){n.child=e===null?of(n,null,t,r):Rt(n,e.child,t,r)}function oo(e,n,t,r,l){t=t.render;var i=n.ref;return Pt(n,l),r=Vs(e,n,t,r,i,l),t=Js(),e!==null&&!ke?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,dn(e,n,l)):(W&&t&&Ds(n),n.flags|=1,ce(e,n,r,l),n.child)}function fo(e,n,t,r,l){if(e===null){var i=t.type;return typeof i=="function"&&!lu(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Df(e,n,i,r,l)):(e=zl(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&l)){var a=i.memoizedProps;if(t=t.compare,t=t!==null?t:Er,t(a,r)&&e.ref===n.ref)return dn(e,n,l)}return n.flags|=1,e=Ln(i,r),e.ref=n.ref,e.return=n,n.child=e}function Df(e,n,t,r,l){if(e!==null){var i=e.memoizedProps;if(Er(i,r)&&e.ref===n.ref)if(ke=!1,n.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(ke=!0);else return n.lanes=e.lanes,dn(e,n,l)}return Ha(e,n,t,r,l)}function If(e,n,t){var r=n.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(St,Ee),Ee|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,q(St,Ee),Ee|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,q(St,Ee),Ee|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,q(St,Ee),Ee|=r;return ce(e,n,l,t),n.child}function Mf(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ha(e,n,t,r,l){var i=ye(t)?nt:fe.current;return i=Tt(n,i),Pt(n,l),t=Vs(e,n,t,r,i,l),r=Js(),e!==null&&!ke?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,dn(e,n,l)):(W&&r&&Ds(n),n.flags|=1,ce(e,n,t,l),n.child)}function co(e,n,t,r,l){if(ye(t)){var i=!0;Al(n)}else i=!1;if(Pt(n,l),n.stateNode===null)wl(e,n),Lf(n,t,r),Ua(n,t,r,l),r=!0;else if(e===null){var a=n.stateNode,s=n.memoizedProps;a.props=s;var u=a.context,o=t.contextType;typeof o=="object"&&o!==null?o=De(o):(o=ye(t)?nt:fe.current,o=Tt(n,o));var p=t.getDerivedStateFromProps,f=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||u!==o)&&io(n,a,r,o),jn=!1;var m=n.memoizedState;a.state=m,Wl(n,r,a,l),u=n.memoizedState,s!==r||m!==u||je.current||jn?(typeof p=="function"&&(qa(n,t,p,r),u=n.memoizedState),(s=jn||lo(n,t,s,r,m,u,o))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=u),a.props=r,a.state=u,a.context=o,r=s):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{a=n.stateNode,ff(e,n),s=n.memoizedProps,o=n.type===n.elementType?s:Ae(n.type,s),a.props=o,f=n.pendingProps,m=a.context,u=t.contextType,typeof u=="object"&&u!==null?u=De(u):(u=ye(t)?nt:fe.current,u=Tt(n,u));var g=t.getDerivedStateFromProps;(p=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||m!==u)&&io(n,a,r,u),jn=!1,m=n.memoizedState,a.state=m,Wl(n,r,a,l);var v=n.memoizedState;s!==f||m!==v||je.current||jn?(typeof g=="function"&&(qa(n,t,g,r),v=n.memoizedState),(o=jn||lo(n,t,o,r,m,v,u)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,u)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=v),a.props=r,a.state=v,a.context=u,r=o):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return Wa(e,n,t,r,i,l)}function Wa(e,n,t,r,l,i){Mf(e,n);var a=(n.flags&128)!==0;if(!r&&!a)return l&&Qu(n,t,!1),dn(e,n,i);r=n.stateNode,em.current=n;var s=a&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&a?(n.child=Rt(n,e.child,null,i),n.child=Rt(n,null,s,i)):ce(e,n,s,i),n.memoizedState=r.state,l&&Qu(n,t,!0),n.child}function Of(e){var n=e.stateNode;n.pendingContext?Gu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Gu(e,n.context,!1),Bs(e,n.containerInfo)}function ho(e,n,t,r,l){return Lt(),Ms(l),n.flags|=256,ce(e,n,t,r),n.child}var Ka={dehydrated:null,treeContext:null,retryLane:0};function Va(e){return{baseLanes:e,cachePool:null,transitions:null}}function $f(e,n,t){var r=n.pendingProps,l=K.current,i=!1,a=(n.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),q(K,l&1),e===null)return $a(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=r.children,e=r.fallback,i?(r=n.mode,i=n.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=gi(a,r,0,null),e=Zn(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Va(t),n.memoizedState=Ka,e):Zs(n,a));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return nm(e,n,a,r,s,l,t);if(i){i=r.fallback,a=n.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=u,n.deletions=null):(r=Ln(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=Ln(s,i):(i=Zn(i,a,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,a=e.child.memoizedState,a=a===null?Va(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~t,n.memoizedState=Ka,r}return i=e.child,e=i.sibling,r=Ln(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Zs(e,n){return n=gi({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function sl(e,n,t,r){return r!==null&&Ms(r),Rt(n,e.child,null,t),e=Zs(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function nm(e,n,t,r,l,i,a){if(t)return n.flags&256?(n.flags&=-257,r=ea(Error(w(422))),sl(e,n,a,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,l=n.mode,r=gi({mode:"visible",children:r.children},l,0,null),i=Zn(i,l,a,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&Rt(n,e.child,null,a),n.child.memoizedState=Va(a),n.memoizedState=Ka,i);if(!(n.mode&1))return sl(e,n,a,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(w(419)),r=ea(i,r,void 0),sl(e,n,a,r)}if(s=(a&e.childLanes)!==0,ke||s){if(r=le,r!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|a)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,on(e,l),He(r,e,l,-1))}return ru(),r=ea(Error(w(421))),sl(e,n,a,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=pm.bind(null,e),l._reactRetry=n,null):(e=i.treeContext,Ce=Pn(l.nextSibling),_e=n,W=!0,Ue=null,e!==null&&(Te[Le++]=rn,Te[Le++]=ln,Te[Le++]=tt,rn=e.id,ln=e.overflow,tt=n),n=Zs(n,r.children),n.flags|=4096,n)}function po(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Aa(e.return,n,t)}function na(e,n,t,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=l)}function Af(e,n,t){var r=n.pendingProps,l=r.revealOrder,i=r.tail;if(ce(e,n,r.children,t),r=K.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&po(e,t,n);else if(e.tag===19)po(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(K,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&Kl(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),na(n,!1,l,t,i);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Kl(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}na(n,!0,t,null,i);break;case"together":na(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function wl(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function dn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),lt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(w(153));if(n.child!==null){for(e=n.child,t=Ln(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Ln(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function tm(e,n,t){switch(n.tag){case 3:Of(n),Lt();break;case 5:cf(n);break;case 1:ye(n.type)&&Al(n);break;case 4:Bs(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;q(Bl,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(q(K,K.current&1),n.flags|=128,null):t&n.child.childLanes?$f(e,n,t):(q(K,K.current&1),e=dn(e,n,t),e!==null?e.sibling:null);q(K,K.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Af(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),q(K,K.current),r)break;return null;case 22:case 23:return n.lanes=0,If(e,n,t)}return dn(e,n,t)}var qf,Ja,Uf,Bf;qf=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ja=function(){};Uf=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,Jn(Ye.current);var i=null;switch(t){case"input":l=ga(e,l),r=ga(e,r),i=[];break;case"select":l=J({},l,{value:void 0}),r=J({},r,{value:void 0}),i=[];break;case"textarea":l=ja(e,l),r=ja(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ol)}wa(t,r);var a;t=null;for(o in l)if(!r.hasOwnProperty(o)&&l.hasOwnProperty(o)&&l[o]!=null)if(o==="style"){var s=l[o];for(a in s)s.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else o!=="dangerouslySetInnerHTML"&&o!=="children"&&o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(vr.hasOwnProperty(o)?i||(i=[]):(i=i||[]).push(o,null));for(o in r){var u=r[o];if(s=l!=null?l[o]:void 0,r.hasOwnProperty(o)&&u!==s&&(u!=null||s!=null))if(o==="style")if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(t||(t={}),t[a]=u[a])}else t||(i||(i=[]),i.push(o,t)),t=u;else o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(o,u)):o==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(o,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&(vr.hasOwnProperty(o)?(u!=null&&o==="onScroll"&&U("scroll",e),i||s===u||(i=[])):(i=i||[]).push(o,u))}t&&(i=i||[]).push("style",t);var o=i;(n.updateQueue=o)&&(n.flags|=4)}};Bf=function(e,n,t,r){t!==r&&(n.flags|=4)};function nr(e,n){if(!W)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function rm(e,n,t){var r=n.pendingProps;switch(Is(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(n),null;case 1:return ye(n.type)&&$l(),oe(n),null;case 3:return r=n.stateNode,Ft(),H(je),H(fe),Ws(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(il(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ue!==null&&(ts(Ue),Ue=null))),Ja(e,n),oe(n),null;case 5:Hs(n);var l=Jn(br.current);if(t=n.type,e!==null&&n.stateNode!=null)Uf(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(w(166));return oe(n),null}if(e=Jn(Ye.current),il(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[Qe]=n,r[Pr]=i,e=(n.mode&1)!==0,t){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(l=0;l<ar.length;l++)U(ar[l],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":Su(r,i),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},U("invalid",r);break;case"textarea":zu(r,i),U("invalid",r)}wa(t,i),l=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&ll(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&ll(r.textContent,s,e),l=["children",""+s]):vr.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&U("scroll",r)}switch(t){case"input":Qr(r),xu(r,i,!0);break;case"textarea":Qr(r),Eu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ol)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gd(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(t,{is:r.is}):(e=a.createElement(t),t==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,t),e[Qe]=n,e[Pr]=r,qf(e,n,!1,!1),n.stateNode=e;e:{switch(a=Sa(t,r),t){case"dialog":U("cancel",e),U("close",e),l=r;break;case"iframe":case"object":case"embed":U("load",e),l=r;break;case"video":case"audio":for(l=0;l<ar.length;l++)U(ar[l],e);l=r;break;case"source":U("error",e),l=r;break;case"img":case"image":case"link":U("error",e),U("load",e),l=r;break;case"details":U("toggle",e),l=r;break;case"input":Su(e,r),l=ga(e,r),U("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=J({},r,{value:void 0}),U("invalid",e);break;case"textarea":zu(e,r),l=ja(e,r),U("invalid",e);break;default:l=r}wa(t,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?jd(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&kd(e,u)):i==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&jr(e,u):typeof u=="number"&&jr(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(vr.hasOwnProperty(i)?u!=null&&i==="onScroll"&&U("scroll",e):u!=null&&ws(e,i,u,a))}switch(t){case"input":Qr(e),xu(e,r,!1);break;case"textarea":Qr(e),Eu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Fn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?zt(e,!!r.multiple,i,!1):r.defaultValue!=null&&zt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Ol)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return oe(n),null;case 6:if(e&&n.stateNode!=null)Bf(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(w(166));if(t=Jn(br.current),Jn(Ye.current),il(n)){if(r=n.stateNode,t=n.memoizedProps,r[Qe]=n,(i=r.nodeValue!==t)&&(e=_e,e!==null))switch(e.tag){case 3:ll(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ll(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Qe]=n,n.stateNode=r}return oe(n),null;case 13:if(H(K),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Ce!==null&&n.mode&1&&!(n.flags&128))sf(),Lt(),n.flags|=98560,i=!1;else if(i=il(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(w(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(w(317));i[Qe]=n}else Lt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;oe(n),i=!1}else Ue!==null&&(ts(Ue),Ue=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||K.current&1?ne===0&&(ne=3):ru())),n.updateQueue!==null&&(n.flags|=4),oe(n),null);case 4:return Ft(),Ja(e,n),e===null&&Cr(n.stateNode.containerInfo),oe(n),null;case 10:return As(n.type._context),oe(n),null;case 17:return ye(n.type)&&$l(),oe(n),null;case 19:if(H(K),i=n.memoizedState,i===null)return oe(n),null;if(r=(n.flags&128)!==0,a=i.rendering,a===null)if(r)nr(i,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=Kl(e),a!==null){for(n.flags|=128,nr(i,!1),r=a.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return q(K,K.current&1|2),n.child}e=e.sibling}i.tail!==null&&Q()>It&&(n.flags|=128,r=!0,nr(i,!1),n.lanes=4194304)}else{if(!r)if(e=Kl(a),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),nr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!W)return oe(n),null}else 2*Q()-i.renderingStartTime>It&&t!==1073741824&&(n.flags|=128,r=!0,nr(i,!1),n.lanes=4194304);i.isBackwards?(a.sibling=n.child,n.child=a):(t=i.last,t!==null?t.sibling=a:n.child=a,i.last=a)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=Q(),n.sibling=null,t=K.current,q(K,r?t&1|2:t&1),n):(oe(n),null);case 22:case 23:return tu(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Ee&1073741824&&(oe(n),n.subtreeFlags&6&&(n.flags|=8192)):oe(n),null;case 24:return null;case 25:return null}throw Error(w(156,n.tag))}function lm(e,n){switch(Is(n),n.tag){case 1:return ye(n.type)&&$l(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ft(),H(je),H(fe),Ws(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Hs(n),null;case 13:if(H(K),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(w(340));Lt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return H(K),null;case 4:return Ft(),null;case 10:return As(n.type._context),null;case 22:case 23:return tu(),null;case 24:return null;default:return null}}var ul=!1,de=!1,im=typeof WeakSet=="function"?WeakSet:Set,_=null;function wt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){G(e,n,r)}else t.current=null}function Ga(e,n,t){try{t()}catch(r){G(e,n,r)}}var mo=!1;function am(e,n){if(La=Dl,e=Vd(),Fs(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var a=0,s=-1,u=-1,o=0,p=0,f=e,m=null;n:for(;;){for(var g;f!==t||l!==0&&f.nodeType!==3||(s=a+l),f!==i||r!==0&&f.nodeType!==3||(u=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(g=f.firstChild)!==null;)m=f,f=g;for(;;){if(f===e)break n;if(m===t&&++o===l&&(s=a),m===i&&++p===r&&(u=a),(g=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=g}t=s===-1||u===-1?null:{start:s,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ra={focusedElem:e,selectionRange:t},Dl=!1,_=n;_!==null;)if(n=_,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,_=e;else for(;_!==null;){n=_;try{var v=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var j=v.memoizedProps,z=v.memoizedState,c=n.stateNode,d=c.getSnapshotBeforeUpdate(n.elementType===n.type?j:Ae(n.type,j),z);c.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=n.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(k){G(n,n.return,k)}if(e=n.sibling,e!==null){e.return=n.return,_=e;break}_=n.return}return v=mo,mo=!1,v}function pr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Ga(n,t,i)}l=l.next}while(l!==r)}}function pi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Qa(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Hf(e){var n=e.alternate;n!==null&&(e.alternate=null,Hf(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Qe],delete n[Pr],delete n[Ia],delete n[Up],delete n[Bp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wf(e){return e.tag===5||e.tag===3||e.tag===4}function go(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Za(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Ol));else if(r!==4&&(e=e.child,e!==null))for(Za(e,n,t),e=e.sibling;e!==null;)Za(e,n,t),e=e.sibling}function Ya(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ya(e,n,t),e=e.sibling;e!==null;)Ya(e,n,t),e=e.sibling}var ie=null,qe=!1;function gn(e,n,t){for(t=t.child;t!==null;)Kf(e,n,t),t=t.sibling}function Kf(e,n,t){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(ai,t)}catch{}switch(t.tag){case 5:de||wt(t,n);case 6:var r=ie,l=qe;ie=null,gn(e,n,t),ie=r,qe=l,ie!==null&&(qe?(e=ie,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ie.removeChild(t.stateNode));break;case 18:ie!==null&&(qe?(e=ie,t=t.stateNode,e.nodeType===8?Ji(e.parentNode,t):e.nodeType===1&&Ji(e,t),xr(e)):Ji(ie,t.stateNode));break;case 4:r=ie,l=qe,ie=t.stateNode.containerInfo,qe=!0,gn(e,n,t),ie=r,qe=l;break;case 0:case 11:case 14:case 15:if(!de&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Ga(t,n,a),l=l.next}while(l!==r)}gn(e,n,t);break;case 1:if(!de&&(wt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){G(t,n,s)}gn(e,n,t);break;case 21:gn(e,n,t);break;case 22:t.mode&1?(de=(r=de)||t.memoizedState!==null,gn(e,n,t),de=r):gn(e,n,t);break;default:gn(e,n,t)}}function ko(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new im),n.forEach(function(r){var l=mm.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function $e(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var i=e,a=n,s=a;e:for(;s!==null;){switch(s.tag){case 5:ie=s.stateNode,qe=!1;break e;case 3:ie=s.stateNode.containerInfo,qe=!0;break e;case 4:ie=s.stateNode.containerInfo,qe=!0;break e}s=s.return}if(ie===null)throw Error(w(160));Kf(i,a,l),ie=null,qe=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(o){G(l,n,o)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Vf(n,e),n=n.sibling}function Vf(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if($e(n,e),Ve(e),r&4){try{pr(3,e,e.return),pi(3,e)}catch(j){G(e,e.return,j)}try{pr(5,e,e.return)}catch(j){G(e,e.return,j)}}break;case 1:$e(n,e),Ve(e),r&512&&t!==null&&wt(t,t.return);break;case 5:if($e(n,e),Ve(e),r&512&&t!==null&&wt(t,t.return),e.flags&32){var l=e.stateNode;try{jr(l,"")}catch(j){G(e,e.return,j)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,a=t!==null?t.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&pd(l,i),Sa(s,a);var o=Sa(s,i);for(a=0;a<u.length;a+=2){var p=u[a],f=u[a+1];p==="style"?jd(l,f):p==="dangerouslySetInnerHTML"?kd(l,f):p==="children"?jr(l,f):ws(l,p,f,o)}switch(s){case"input":ka(l,i);break;case"textarea":md(l,i);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?zt(l,!!i.multiple,g,!1):m!==!!i.multiple&&(i.defaultValue!=null?zt(l,!!i.multiple,i.defaultValue,!0):zt(l,!!i.multiple,i.multiple?[]:"",!1))}l[Pr]=i}catch(j){G(e,e.return,j)}}break;case 6:if($e(n,e),Ve(e),r&4){if(e.stateNode===null)throw Error(w(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(j){G(e,e.return,j)}}break;case 3:if($e(n,e),Ve(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{xr(n.containerInfo)}catch(j){G(e,e.return,j)}break;case 4:$e(n,e),Ve(e);break;case 13:$e(n,e),Ve(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(eu=Q())),r&4&&ko(e);break;case 22:if(p=t!==null&&t.memoizedState!==null,e.mode&1?(de=(o=de)||p,$e(n,e),de=o):$e(n,e),Ve(e),r&8192){if(o=e.memoizedState!==null,(e.stateNode.isHidden=o)&&!p&&e.mode&1)for(_=e,p=e.child;p!==null;){for(f=_=p;_!==null;){switch(m=_,g=m.child,m.tag){case 0:case 11:case 14:case 15:pr(4,m,m.return);break;case 1:wt(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,v.props=n.memoizedProps,v.state=n.memoizedState,v.componentWillUnmount()}catch(j){G(r,t,j)}}break;case 5:wt(m,m.return);break;case 22:if(m.memoizedState!==null){jo(f);continue}}g!==null?(g.return=m,_=g):jo(f)}p=p.sibling}e:for(p=null,f=e;;){if(f.tag===5){if(p===null){p=f;try{l=f.stateNode,o?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=f.stateNode,u=f.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=vd("display",a))}catch(j){G(e,e.return,j)}}}else if(f.tag===6){if(p===null)try{f.stateNode.nodeValue=o?"":f.memoizedProps}catch(j){G(e,e.return,j)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;p===f&&(p=null),f=f.return}p===f&&(p=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:$e(n,e),Ve(e),r&4&&ko(e);break;case 21:break;default:$e(n,e),Ve(e)}}function Ve(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Wf(t)){var r=t;break e}t=t.return}throw Error(w(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(jr(l,""),r.flags&=-33);var i=go(e);Ya(e,i,l);break;case 3:case 4:var a=r.stateNode.containerInfo,s=go(e);Za(e,s,a);break;default:throw Error(w(161))}}catch(u){G(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function sm(e,n,t){_=e,Jf(e)}function Jf(e,n,t){for(var r=(e.mode&1)!==0;_!==null;){var l=_,i=l.child;if(l.tag===22&&r){var a=l.memoizedState!==null||ul;if(!a){var s=l.alternate,u=s!==null&&s.memoizedState!==null||de;s=ul;var o=de;if(ul=a,(de=u)&&!o)for(_=l;_!==null;)a=_,u=a.child,a.tag===22&&a.memoizedState!==null?yo(l):u!==null?(u.return=a,_=u):yo(l);for(;i!==null;)_=i,Jf(i),i=i.sibling;_=l,ul=s,de=o}vo(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,_=i):vo(e)}}function vo(e){for(;_!==null;){var n=_;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:de||pi(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!de)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:Ae(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&no(n,i,r);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}no(n,a,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var o=n.alternate;if(o!==null){var p=o.memoizedState;if(p!==null){var f=p.dehydrated;f!==null&&xr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}de||n.flags&512&&Qa(n)}catch(m){G(n,n.return,m)}}if(n===e){_=null;break}if(t=n.sibling,t!==null){t.return=n.return,_=t;break}_=n.return}}function jo(e){for(;_!==null;){var n=_;if(n===e){_=null;break}var t=n.sibling;if(t!==null){t.return=n.return,_=t;break}_=n.return}}function yo(e){for(;_!==null;){var n=_;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{pi(4,n)}catch(u){G(n,t,u)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(u){G(n,l,u)}}var i=n.return;try{Qa(n)}catch(u){G(n,i,u)}break;case 5:var a=n.return;try{Qa(n)}catch(u){G(n,a,u)}}}catch(u){G(n,n.return,u)}if(n===e){_=null;break}var s=n.sibling;if(s!==null){s.return=n.return,_=s;break}_=n.return}}var um=Math.ceil,Gl=fn.ReactCurrentDispatcher,Ys=fn.ReactCurrentOwner,Fe=fn.ReactCurrentBatchConfig,D=0,le=null,Y=null,ae=0,Ee=0,St=Mn(0),ne=0,Fr=null,lt=0,mi=0,Xs=0,mr=null,ge=null,eu=0,It=1/0,en=null,Ql=!1,Xa=null,bn=null,ol=!1,xn=null,Zl=0,gr=0,es=null,Sl=-1,xl=0;function he(){return D&6?Q():Sl!==-1?Sl:Sl=Q()}function Tn(e){return e.mode&1?D&2&&ae!==0?ae&-ae:Wp.transition!==null?(xl===0&&(xl=Td()),xl):(e=M,e!==0||(e=window.event,e=e===void 0?16:Od(e.type)),e):1}function He(e,n,t,r){if(50<gr)throw gr=0,es=null,Error(w(185));Ar(e,t,r),(!(D&2)||e!==le)&&(e===le&&(!(D&2)&&(mi|=t),ne===4&&wn(e,ae)),we(e,r),t===1&&D===0&&!(n.mode&1)&&(It=Q()+500,fi&&On()))}function we(e,n){var t=e.callbackNode;Wh(e,n);var r=Fl(e,e===le?ae:0);if(r===0)t!==null&&Pu(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Pu(t),n===1)e.tag===0?Hp(wo.bind(null,e)):rf(wo.bind(null,e)),Ap(function(){!(D&6)&&On()}),t=null;else{switch(Ld(r)){case 1:t=Cs;break;case 4:t=Nd;break;case 16:t=Rl;break;case 536870912:t=bd;break;default:t=Rl}t=tc(t,Gf.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Gf(e,n){if(Sl=-1,xl=0,D&6)throw Error(w(327));var t=e.callbackNode;if(Nt()&&e.callbackNode!==t)return null;var r=Fl(e,e===le?ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Yl(e,r);else{n=r;var l=D;D|=2;var i=Zf();(le!==e||ae!==n)&&(en=null,It=Q()+500,Qn(e,n));do try{fm();break}catch(s){Qf(e,s)}while(!0);$s(),Gl.current=i,D=l,Y!==null?n=0:(le=null,ae=0,n=ne)}if(n!==0){if(n===2&&(l=_a(e),l!==0&&(r=l,n=ns(e,l))),n===1)throw t=Fr,Qn(e,0),wn(e,r),we(e,Q()),t;if(n===6)wn(e,r);else{if(l=e.current.alternate,!(r&30)&&!om(l)&&(n=Yl(e,r),n===2&&(i=_a(e),i!==0&&(r=i,n=ns(e,i))),n===1))throw t=Fr,Qn(e,0),wn(e,r),we(e,Q()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(w(345));case 2:Wn(e,ge,en);break;case 3:if(wn(e,r),(r&130023424)===r&&(n=eu+500-Q(),10<n)){if(Fl(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){he(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Da(Wn.bind(null,e,ge,en),n);break}Wn(e,ge,en);break;case 4:if(wn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var a=31-Be(r);i=1<<a,a=n[a],a>l&&(l=a),r&=~i}if(r=l,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*um(r/1960))-r,10<r){e.timeoutHandle=Da(Wn.bind(null,e,ge,en),r);break}Wn(e,ge,en);break;case 5:Wn(e,ge,en);break;default:throw Error(w(329))}}}return we(e,Q()),e.callbackNode===t?Gf.bind(null,e):null}function ns(e,n){var t=mr;return e.current.memoizedState.isDehydrated&&(Qn(e,n).flags|=256),e=Yl(e,n),e!==2&&(n=ge,ge=t,n!==null&&ts(n)),e}function ts(e){ge===null?ge=e:ge.push.apply(ge,e)}function om(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],i=l.getSnapshot;l=l.value;try{if(!Ke(i(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function wn(e,n){for(n&=~Xs,n&=~mi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Be(n),r=1<<t;e[t]=-1,n&=~r}}function wo(e){if(D&6)throw Error(w(327));Nt();var n=Fl(e,0);if(!(n&1))return we(e,Q()),null;var t=Yl(e,n);if(e.tag!==0&&t===2){var r=_a(e);r!==0&&(n=r,t=ns(e,r))}if(t===1)throw t=Fr,Qn(e,0),wn(e,n),we(e,Q()),t;if(t===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Wn(e,ge,en),we(e,Q()),null}function nu(e,n){var t=D;D|=1;try{return e(n)}finally{D=t,D===0&&(It=Q()+500,fi&&On())}}function it(e){xn!==null&&xn.tag===0&&!(D&6)&&Nt();var n=D;D|=1;var t=Fe.transition,r=M;try{if(Fe.transition=null,M=1,e)return e()}finally{M=r,Fe.transition=t,D=n,!(D&6)&&On()}}function tu(){Ee=St.current,H(St)}function Qn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,$p(t)),Y!==null)for(t=Y.return;t!==null;){var r=t;switch(Is(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$l();break;case 3:Ft(),H(je),H(fe),Ws();break;case 5:Hs(r);break;case 4:Ft();break;case 13:H(K);break;case 19:H(K);break;case 10:As(r.type._context);break;case 22:case 23:tu()}t=t.return}if(le=e,Y=e=Ln(e.current,null),ae=Ee=n,ne=0,Fr=null,Xs=mi=lt=0,ge=mr=null,Vn!==null){for(n=0;n<Vn.length;n++)if(t=Vn[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,i=t.pending;if(i!==null){var a=i.next;i.next=l,r.next=a}t.pending=r}Vn=null}return e}function Qf(e,n){do{var t=Y;try{if($s(),jl.current=Jl,Vl){for(var r=V.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Vl=!1}if(rt=0,te=ee=V=null,hr=!1,Tr=0,Ys.current=null,t===null||t.return===null){ne=1,Fr=n,Y=null;break}e:{var i=e,a=t.return,s=t,u=n;if(n=ae,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var o=u,p=s,f=p.tag;if(!(p.mode&1)&&(f===0||f===11||f===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var g=so(a);if(g!==null){g.flags&=-257,uo(g,a,s,i,n),g.mode&1&&ao(i,o,n),n=g,u=o;var v=n.updateQueue;if(v===null){var j=new Set;j.add(u),n.updateQueue=j}else v.add(u);break e}else{if(!(n&1)){ao(i,o,n),ru();break e}u=Error(w(426))}}else if(W&&s.mode&1){var z=so(a);if(z!==null){!(z.flags&65536)&&(z.flags|=256),uo(z,a,s,i,n),Ms(Dt(u,s));break e}}i=u=Dt(u,s),ne!==4&&(ne=2),mr===null?mr=[i]:mr.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var c=Rf(i,u,n);eo(i,c);break e;case 1:s=u;var d=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(bn===null||!bn.has(h)))){i.flags|=65536,n&=-n,i.lanes|=n;var k=Ff(i,s,n);eo(i,k);break e}}i=i.return}while(i!==null)}Xf(t)}catch(S){n=S,Y===t&&t!==null&&(Y=t=t.return);continue}break}while(!0)}function Zf(){var e=Gl.current;return Gl.current=Jl,e===null?Jl:e}function ru(){(ne===0||ne===3||ne===2)&&(ne=4),le===null||!(lt&268435455)&&!(mi&268435455)||wn(le,ae)}function Yl(e,n){var t=D;D|=2;var r=Zf();(le!==e||ae!==n)&&(en=null,Qn(e,n));do try{dm();break}catch(l){Qf(e,l)}while(!0);if($s(),D=t,Gl.current=r,Y!==null)throw Error(w(261));return le=null,ae=0,ne}function dm(){for(;Y!==null;)Yf(Y)}function fm(){for(;Y!==null&&!Ih();)Yf(Y)}function Yf(e){var n=nc(e.alternate,e,Ee);e.memoizedProps=e.pendingProps,n===null?Xf(e):Y=n,Ys.current=null}function Xf(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=lm(t,n),t!==null){t.flags&=32767,Y=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,Y=null;return}}else if(t=rm(t,n,Ee),t!==null){Y=t;return}if(n=n.sibling,n!==null){Y=n;return}Y=n=e}while(n!==null);ne===0&&(ne=5)}function Wn(e,n,t){var r=M,l=Fe.transition;try{Fe.transition=null,M=1,cm(e,n,t,r)}finally{Fe.transition=l,M=r}return null}function cm(e,n,t,r){do Nt();while(xn!==null);if(D&6)throw Error(w(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(Kh(e,i),e===le&&(Y=le=null,ae=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ol||(ol=!0,tc(Rl,function(){return Nt(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Fe.transition,Fe.transition=null;var a=M;M=1;var s=D;D|=4,Ys.current=null,am(e,t),Vf(t,e),Lp(Ra),Dl=!!La,Ra=La=null,e.current=t,sm(t),Mh(),D=s,M=a,Fe.transition=i}else e.current=t;if(ol&&(ol=!1,xn=e,Zl=l),i=e.pendingLanes,i===0&&(bn=null),Ah(t.stateNode),we(e,Q()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(Ql)throw Ql=!1,e=Xa,Xa=null,e;return Zl&1&&e.tag!==0&&Nt(),i=e.pendingLanes,i&1?e===es?gr++:(gr=0,es=e):gr=0,On(),null}function Nt(){if(xn!==null){var e=Ld(Zl),n=Fe.transition,t=M;try{if(Fe.transition=null,M=16>e?16:e,xn===null)var r=!1;else{if(e=xn,xn=null,Zl=0,D&6)throw Error(w(331));var l=D;for(D|=4,_=e.current;_!==null;){var i=_,a=i.child;if(_.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var o=s[u];for(_=o;_!==null;){var p=_;switch(p.tag){case 0:case 11:case 15:pr(8,p,i)}var f=p.child;if(f!==null)f.return=p,_=f;else for(;_!==null;){p=_;var m=p.sibling,g=p.return;if(Hf(p),p===o){_=null;break}if(m!==null){m.return=g,_=m;break}_=g}}}var v=i.alternate;if(v!==null){var j=v.child;if(j!==null){v.child=null;do{var z=j.sibling;j.sibling=null,j=z}while(j!==null)}}_=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,_=a;else e:for(;_!==null;){if(i=_,i.flags&2048)switch(i.tag){case 0:case 11:case 15:pr(9,i,i.return)}var c=i.sibling;if(c!==null){c.return=i.return,_=c;break e}_=i.return}}var d=e.current;for(_=d;_!==null;){a=_;var h=a.child;if(a.subtreeFlags&2064&&h!==null)h.return=a,_=h;else e:for(a=d;_!==null;){if(s=_,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:pi(9,s)}}catch(S){G(s,s.return,S)}if(s===a){_=null;break e}var k=s.sibling;if(k!==null){k.return=s.return,_=k;break e}_=s.return}}if(D=l,On(),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(ai,e)}catch{}r=!0}return r}finally{M=t,Fe.transition=n}}return!1}function So(e,n,t){n=Dt(t,n),n=Rf(e,n,1),e=Nn(e,n,1),n=he(),e!==null&&(Ar(e,1,n),we(e,n))}function G(e,n,t){if(e.tag===3)So(e,e,t);else for(;n!==null;){if(n.tag===3){So(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(bn===null||!bn.has(r))){e=Dt(t,e),e=Ff(n,e,1),n=Nn(n,e,1),e=he(),n!==null&&(Ar(n,1,e),we(n,e));break}}n=n.return}}function hm(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=he(),e.pingedLanes|=e.suspendedLanes&t,le===e&&(ae&t)===t&&(ne===4||ne===3&&(ae&130023424)===ae&&500>Q()-eu?Qn(e,0):Xs|=t),we(e,n)}function ec(e,n){n===0&&(e.mode&1?(n=Xr,Xr<<=1,!(Xr&130023424)&&(Xr=4194304)):n=1);var t=he();e=on(e,n),e!==null&&(Ar(e,n,t),we(e,t))}function pm(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),ec(e,t)}function mm(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(n),ec(e,t)}var nc;nc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||je.current)ke=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ke=!1,tm(e,n,t);ke=!!(e.flags&131072)}else ke=!1,W&&n.flags&1048576&&lf(n,Ul,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;wl(e,n),e=n.pendingProps;var l=Tt(n,fe.current);Pt(n,t),l=Vs(null,n,r,e,l,t);var i=Js();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ye(r)?(i=!0,Al(n)):i=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Us(n),l.updater=hi,n.stateNode=l,l._reactInternals=n,Ua(n,r,e,t),n=Wa(null,n,r,!0,i,t)):(n.tag=0,W&&i&&Ds(n),ce(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(wl(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=km(r),e=Ae(r,e),l){case 0:n=Ha(null,n,r,e,t);break e;case 1:n=co(null,n,r,e,t);break e;case 11:n=oo(null,n,r,e,t);break e;case 14:n=fo(null,n,r,Ae(r.type,e),t);break e}throw Error(w(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Ae(r,l),Ha(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Ae(r,l),co(e,n,r,l,t);case 3:e:{if(Of(n),e===null)throw Error(w(387));r=n.pendingProps,i=n.memoizedState,l=i.element,ff(e,n),Wl(n,r,null,t);var a=n.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){l=Dt(Error(w(423)),n),n=ho(e,n,r,t,l);break e}else if(r!==l){l=Dt(Error(w(424)),n),n=ho(e,n,r,t,l);break e}else for(Ce=Pn(n.stateNode.containerInfo.firstChild),_e=n,W=!0,Ue=null,t=of(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Lt(),r===l){n=dn(e,n,t);break e}ce(e,n,r,t)}n=n.child}return n;case 5:return cf(n),e===null&&$a(n),r=n.type,l=n.pendingProps,i=e!==null?e.memoizedProps:null,a=l.children,Fa(r,l)?a=null:i!==null&&Fa(r,i)&&(n.flags|=32),Mf(e,n),ce(e,n,a,t),n.child;case 6:return e===null&&$a(n),null;case 13:return $f(e,n,t);case 4:return Bs(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Rt(n,null,r,t):ce(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Ae(r,l),oo(e,n,r,l,t);case 7:return ce(e,n,n.pendingProps,t),n.child;case 8:return ce(e,n,n.pendingProps.children,t),n.child;case 12:return ce(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,i=n.memoizedProps,a=l.value,q(Bl,r._currentValue),r._currentValue=a,i!==null)if(Ke(i.value,a)){if(i.children===l.children&&!je.current){n=dn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=an(-1,t&-t),u.tag=2;var o=i.updateQueue;if(o!==null){o=o.shared;var p=o.pending;p===null?u.next=u:(u.next=p.next,p.next=u),o.pending=u}}i.lanes|=t,u=i.alternate,u!==null&&(u.lanes|=t),Aa(i.return,t,n),s.lanes|=t;break}u=u.next}}else if(i.tag===10)a=i.type===n.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(w(341));a.lanes|=t,s=a.alternate,s!==null&&(s.lanes|=t),Aa(a,t,n),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===n){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}ce(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,Pt(n,t),l=De(l),r=r(l),n.flags|=1,ce(e,n,r,t),n.child;case 14:return r=n.type,l=Ae(r,n.pendingProps),l=Ae(r.type,l),fo(e,n,r,l,t);case 15:return Df(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Ae(r,l),wl(e,n),n.tag=1,ye(r)?(e=!0,Al(n)):e=!1,Pt(n,t),Lf(n,r,l),Ua(n,r,l,t),Wa(null,n,r,!0,e,t);case 19:return Af(e,n,t);case 22:return If(e,n,t)}throw Error(w(156,n.tag))};function tc(e,n){return Pd(e,n)}function gm(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Re(e,n,t,r){return new gm(e,n,t,r)}function lu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function km(e){if(typeof e=="function")return lu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xs)return 11;if(e===zs)return 14}return 2}function Ln(e,n){var t=e.alternate;return t===null?(t=Re(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function zl(e,n,t,r,l,i){var a=2;if(r=e,typeof e=="function")lu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case ct:return Zn(t.children,l,i,n);case Ss:a=8,l|=8;break;case ca:return e=Re(12,t,n,l|2),e.elementType=ca,e.lanes=i,e;case ha:return e=Re(13,t,n,l),e.elementType=ha,e.lanes=i,e;case pa:return e=Re(19,t,n,l),e.elementType=pa,e.lanes=i,e;case fd:return gi(t,l,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case od:a=10;break e;case dd:a=9;break e;case xs:a=11;break e;case zs:a=14;break e;case vn:a=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return n=Re(a,t,n,l),n.elementType=e,n.type=r,n.lanes=i,n}function Zn(e,n,t,r){return e=Re(7,e,r,n),e.lanes=t,e}function gi(e,n,t,r){return e=Re(22,e,r,n),e.elementType=fd,e.lanes=t,e.stateNode={isHidden:!1},e}function ta(e,n,t){return e=Re(6,e,null,n),e.lanes=t,e}function ra(e,n,t){return n=Re(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function vm(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mi(0),this.expirationTimes=Mi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mi(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function iu(e,n,t,r,l,i,a,s,u){return e=new vm(e,n,t,s,u),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Re(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Us(i),e}function jm(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ft,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function rc(e){if(!e)return Dn;e=e._reactInternals;e:{if(st(e)!==e||e.tag!==1)throw Error(w(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ye(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(w(171))}if(e.tag===1){var t=e.type;if(ye(t))return tf(e,t,n)}return n}function lc(e,n,t,r,l,i,a,s,u){return e=iu(t,r,!0,e,l,i,a,s,u),e.context=rc(null),t=e.current,r=he(),l=Tn(t),i=an(r,l),i.callback=n??null,Nn(t,i,l),e.current.lanes=l,Ar(e,l,r),we(e,r),e}function ki(e,n,t,r){var l=n.current,i=he(),a=Tn(l);return t=rc(t),n.context===null?n.context=t:n.pendingContext=t,n=an(i,a),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Nn(l,n,a),e!==null&&(He(e,l,a,i),vl(e,l,a)),a}function Xl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xo(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function au(e,n){xo(e,n),(e=e.alternate)&&xo(e,n)}function ym(){return null}var ic=typeof reportError=="function"?reportError:function(e){console.error(e)};function su(e){this._internalRoot=e}vi.prototype.render=su.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(w(409));ki(e,n,null,null)};vi.prototype.unmount=su.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;it(function(){ki(null,e,null,null)}),n[un]=null}};function vi(e){this._internalRoot=e}vi.prototype.unstable_scheduleHydration=function(e){if(e){var n=Dd();e={blockedOn:null,target:e,priority:n};for(var t=0;t<yn.length&&n!==0&&n<yn[t].priority;t++);yn.splice(t,0,e),t===0&&Md(e)}};function uu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ji(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zo(){}function wm(e,n,t,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var o=Xl(a);i.call(o)}}var a=lc(n,r,e,0,null,!1,!1,"",zo);return e._reactRootContainer=a,e[un]=a.current,Cr(e.nodeType===8?e.parentNode:e),it(),a}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var o=Xl(u);s.call(o)}}var u=iu(e,0,!1,null,null,!1,!1,"",zo);return e._reactRootContainer=u,e[un]=u.current,Cr(e.nodeType===8?e.parentNode:e),it(function(){ki(n,u,t,r)}),u}function yi(e,n,t,r,l){var i=t._reactRootContainer;if(i){var a=i;if(typeof l=="function"){var s=l;l=function(){var u=Xl(a);s.call(u)}}ki(n,a,e,l)}else a=wm(t,n,e,l,r);return Xl(a)}Rd=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=ir(n.pendingLanes);t!==0&&(_s(n,t|1),we(n,Q()),!(D&6)&&(It=Q()+500,On()))}break;case 13:it(function(){var r=on(e,1);if(r!==null){var l=he();He(r,e,1,l)}}),au(e,1)}};Ps=function(e){if(e.tag===13){var n=on(e,134217728);if(n!==null){var t=he();He(n,e,134217728,t)}au(e,134217728)}};Fd=function(e){if(e.tag===13){var n=Tn(e),t=on(e,n);if(t!==null){var r=he();He(t,e,n,r)}au(e,n)}};Dd=function(){return M};Id=function(e,n){var t=M;try{return M=e,n()}finally{M=t}};za=function(e,n,t){switch(n){case"input":if(ka(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=di(r);if(!l)throw Error(w(90));hd(r),ka(r,l)}}}break;case"textarea":md(e,t);break;case"select":n=t.value,n!=null&&zt(e,!!t.multiple,n,!1)}};Sd=nu;xd=it;var Sm={usingClientEntryPoint:!1,Events:[Ur,gt,di,yd,wd,nu]},tr={findFiberByHostInstance:Kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xm={bundleType:tr.bundleType,version:tr.version,rendererPackageName:tr.rendererPackageName,rendererConfig:tr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Cd(e),e===null?null:e.stateNode},findFiberByHostInstance:tr.findFiberByHostInstance||ym,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dl.isDisabled&&dl.supportsFiber)try{ai=dl.inject(xm),Ze=dl}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sm;Ne.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!uu(n))throw Error(w(200));return jm(e,n,null,t)};Ne.createRoot=function(e,n){if(!uu(e))throw Error(w(299));var t=!1,r="",l=ic;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=iu(e,1,!1,null,null,t,!1,r,l),e[un]=n.current,Cr(e.nodeType===8?e.parentNode:e),new su(n)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Cd(n),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return it(e)};Ne.hydrate=function(e,n,t){if(!ji(n))throw Error(w(200));return yi(null,e,n,!0,t)};Ne.hydrateRoot=function(e,n,t){if(!uu(e))throw Error(w(405));var r=t!=null&&t.hydratedSources||null,l=!1,i="",a=ic;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=lc(n,null,e,1,t??null,l,!1,i,a),e[un]=n.current,Cr(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new vi(n)};Ne.render=function(e,n,t){if(!ji(n))throw Error(w(200));return yi(null,e,n,!1,t)};Ne.unmountComponentAtNode=function(e){if(!ji(e))throw Error(w(40));return e._reactRootContainer?(it(function(){yi(null,null,e,!1,function(){e._reactRootContainer=null,e[un]=null})}),!0):!1};Ne.unstable_batchedUpdates=nu;Ne.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!ji(t))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return yi(e,n,t,!1,r)};Ne.version="18.3.1-next-f1338f8080-20240426";function ac(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ac)}catch(e){console.error(e)}}ac(),id.exports=Ne;var zm=id.exports,Eo=zm;da.createRoot=Eo.createRoot,da.hydrateRoot=Eo.hydrateRoot;/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dr(){return Dr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Dr.apply(this,arguments)}var zn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(zn||(zn={}));const Co="popstate";function Em(e){e===void 0&&(e={});function n(r,l){let{pathname:i,search:a,hash:s}=r.location;return rs("",{pathname:i,search:a,hash:s},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(r,l){return typeof l=="string"?l:ei(l)}return _m(n,t,null,e)}function X(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function sc(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Cm(){return Math.random().toString(36).substr(2,8)}function _o(e,n){return{usr:e.state,key:e.key,idx:n}}function rs(e,n,t,r){return t===void 0&&(t=null),Dr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Wt(n):n,{state:t,key:n&&n.key||r||Cm()})}function ei(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function Wt(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function _m(e,n,t,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:i=!1}=r,a=l.history,s=zn.Pop,u=null,o=p();o==null&&(o=0,a.replaceState(Dr({},a.state,{idx:o}),""));function p(){return(a.state||{idx:null}).idx}function f(){s=zn.Pop;let z=p(),c=z==null?null:z-o;o=z,u&&u({action:s,location:j.location,delta:c})}function m(z,c){s=zn.Push;let d=rs(j.location,z,c);o=p()+1;let h=_o(d,o),k=j.createHref(d);try{a.pushState(h,"",k)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;l.location.assign(k)}i&&u&&u({action:s,location:j.location,delta:1})}function g(z,c){s=zn.Replace;let d=rs(j.location,z,c);o=p();let h=_o(d,o),k=j.createHref(d);a.replaceState(h,"",k),i&&u&&u({action:s,location:j.location,delta:0})}function v(z){let c=l.location.origin!=="null"?l.location.origin:l.location.href,d=typeof z=="string"?z:ei(z);return d=d.replace(/ $/,"%20"),X(c,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,c)}let j={get action(){return s},get location(){return e(l,a)},listen(z){if(u)throw new Error("A history only accepts one active listener");return l.addEventListener(Co,f),u=z,()=>{l.removeEventListener(Co,f),u=null}},createHref(z){return n(l,z)},createURL:v,encodeLocation(z){let c=v(z);return{pathname:c.pathname,search:c.search,hash:c.hash}},push:m,replace:g,go(z){return a.go(z)}};return j}var Po;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Po||(Po={}));function Pm(e,n,t){return t===void 0&&(t="/"),Nm(e,n,t,!1)}function Nm(e,n,t,r){let l=typeof n=="string"?Wt(n):n,i=ou(l.pathname||"/",t);if(i==null)return null;let a=uc(e);bm(a);let s=null;for(let u=0;s==null&&u<a.length;++u){let o=qm(i);s=$m(a[u],o,r)}return s}function uc(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let l=(i,a,s)=>{let u={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};u.relativePath.startsWith("/")&&(X(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let o=Rn([r,u.relativePath]),p=t.concat(u);i.children&&i.children.length>0&&(X(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+o+'".')),uc(i.children,n,p,o)),!(i.path==null&&!i.index)&&n.push({path:o,score:Mm(o,i.index),routesMeta:p})};return e.forEach((i,a)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))l(i,a);else for(let u of oc(i.path))l(i,a,u)}),n}function oc(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,l=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return l?[i,""]:[i];let a=oc(r.join("/")),s=[];return s.push(...a.map(u=>u===""?i:[i,u].join("/"))),l&&s.push(...a),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function bm(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Om(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const Tm=/^:[\w-]+$/,Lm=3,Rm=2,Fm=1,Dm=10,Im=-2,No=e=>e==="*";function Mm(e,n){let t=e.split("/"),r=t.length;return t.some(No)&&(r+=Im),n&&(r+=Rm),t.filter(l=>!No(l)).reduce((l,i)=>l+(Tm.test(i)?Lm:i===""?Fm:Dm),r)}function Om(e,n){return e.length===n.length&&e.slice(0,-1).every((r,l)=>r===n[l])?e[e.length-1]-n[n.length-1]:0}function $m(e,n,t){let{routesMeta:r}=e,l={},i="/",a=[];for(let s=0;s<r.length;++s){let u=r[s],o=s===r.length-1,p=i==="/"?n:n.slice(i.length)||"/",f=bo({path:u.relativePath,caseSensitive:u.caseSensitive,end:o},p),m=u.route;if(!f&&o&&t&&!r[r.length-1].route.index&&(f=bo({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},p)),!f)return null;Object.assign(l,f.params),a.push({params:l,pathname:Rn([i,f.pathname]),pathnameBase:Wm(Rn([i,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(i=Rn([i,f.pathnameBase]))}return a}function bo(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=Am(e.path,e.caseSensitive,e.end),l=n.match(t);if(!l)return null;let i=l[0],a=i.replace(/(.)\/+$/,"$1"),s=l.slice(1);return{params:r.reduce((o,p,f)=>{let{paramName:m,isOptional:g}=p;if(m==="*"){let j=s[f]||"";a=i.slice(0,i.length-j.length).replace(/(.)\/+$/,"$1")}const v=s[f];return g&&!v?o[m]=void 0:o[m]=(v||"").replace(/%2F/g,"/"),o},{}),pathname:i,pathnameBase:a,pattern:e}}function Am(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),sc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,u)=>(r.push({paramName:s,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,n?void 0:"i"),r]}function qm(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return sc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function ou(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function Um(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:l=""}=typeof e=="string"?Wt(e):e;return{pathname:t?t.startsWith("/")?t:Bm(t,n):n,search:Km(r),hash:Vm(l)}}function Bm(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?t.length>1&&t.pop():l!=="."&&t.push(l)}),t.length>1?t.join("/"):"/"}function la(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Hm(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function dc(e,n){let t=Hm(e);return n?t.map((r,l)=>l===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function fc(e,n,t,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=Wt(e):(l=Dr({},e),X(!l.pathname||!l.pathname.includes("?"),la("?","pathname","search",l)),X(!l.pathname||!l.pathname.includes("#"),la("#","pathname","hash",l)),X(!l.search||!l.search.includes("#"),la("#","search","hash",l)));let i=e===""||l.pathname==="",a=i?"/":l.pathname,s;if(a==null)s=t;else{let f=n.length-1;if(!r&&a.startsWith("..")){let m=a.split("/");for(;m[0]==="..";)m.shift(),f-=1;l.pathname=m.join("/")}s=f>=0?n[f]:"/"}let u=Um(l,s),o=a&&a!=="/"&&a.endsWith("/"),p=(i||a===".")&&t.endsWith("/");return!u.pathname.endsWith("/")&&(o||p)&&(u.pathname+="/"),u}const Rn=e=>e.join("/").replace(/\/\/+/g,"/"),Wm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Km=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Vm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Jm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const cc=["post","put","patch","delete"];new Set(cc);const Gm=["get",...cc];new Set(Gm);/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ir(){return Ir=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ir.apply(this,arguments)}const du=E.createContext(null),Qm=E.createContext(null),ut=E.createContext(null),wi=E.createContext(null),cn=E.createContext({outlet:null,matches:[],isDataRoute:!1}),hc=E.createContext(null);function Zm(e,n){let{relative:t}=n===void 0?{}:n;Hr()||X(!1);let{basename:r,navigator:l}=E.useContext(ut),{hash:i,pathname:a,search:s}=mc(e,{relative:t}),u=a;return r!=="/"&&(u=a==="/"?r:Rn([r,a])),l.createHref({pathname:u,search:s,hash:i})}function Hr(){return E.useContext(wi)!=null}function Si(){return Hr()||X(!1),E.useContext(wi).location}function pc(e){E.useContext(ut).static||E.useLayoutEffect(e)}function Ym(){let{isDataRoute:e}=E.useContext(cn);return e?pg():Xm()}function Xm(){Hr()||X(!1);let e=E.useContext(du),{basename:n,future:t,navigator:r}=E.useContext(ut),{matches:l}=E.useContext(cn),{pathname:i}=Si(),a=JSON.stringify(dc(l,t.v7_relativeSplatPath)),s=E.useRef(!1);return pc(()=>{s.current=!0}),E.useCallback(function(o,p){if(p===void 0&&(p={}),!s.current)return;if(typeof o=="number"){r.go(o);return}let f=fc(o,JSON.parse(a),i,p.relative==="path");e==null&&n!=="/"&&(f.pathname=f.pathname==="/"?n:Rn([n,f.pathname])),(p.replace?r.replace:r.push)(f,p.state,p)},[n,r,a,i,e])}const eg=E.createContext(null);function ng(e){let n=E.useContext(cn).outlet;return n&&E.createElement(eg.Provider,{value:e},n)}function tg(){let{matches:e}=E.useContext(cn),n=e[e.length-1];return n?n.params:{}}function mc(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=E.useContext(ut),{matches:l}=E.useContext(cn),{pathname:i}=Si(),a=JSON.stringify(dc(l,r.v7_relativeSplatPath));return E.useMemo(()=>fc(e,JSON.parse(a),i,t==="path"),[e,a,i,t])}function rg(e,n){return lg(e,n)}function lg(e,n,t,r){Hr()||X(!1);let{navigator:l}=E.useContext(ut),{matches:i}=E.useContext(cn),a=i[i.length-1],s=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let o=Si(),p;if(n){var f;let z=typeof n=="string"?Wt(n):n;u==="/"||(f=z.pathname)!=null&&f.startsWith(u)||X(!1),p=z}else p=o;let m=p.pathname||"/",g=m;if(u!=="/"){let z=u.replace(/^\//,"").split("/");g="/"+m.replace(/^\//,"").split("/").slice(z.length).join("/")}let v=Pm(e,{pathname:g}),j=og(v&&v.map(z=>Object.assign({},z,{params:Object.assign({},s,z.params),pathname:Rn([u,l.encodeLocation?l.encodeLocation(z.pathname).pathname:z.pathname]),pathnameBase:z.pathnameBase==="/"?u:Rn([u,l.encodeLocation?l.encodeLocation(z.pathnameBase).pathname:z.pathnameBase])})),i,t,r);return n&&j?E.createElement(wi.Provider,{value:{location:Ir({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:zn.Pop}},j):j}function ig(){let e=hg(),n=Jm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},n),t?E.createElement("pre",{style:l},t):null,null)}const ag=E.createElement(ig,null);class sg extends E.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?E.createElement(cn.Provider,{value:this.props.routeContext},E.createElement(hc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ug(e){let{routeContext:n,match:t,children:r}=e,l=E.useContext(du);return l&&l.static&&l.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=t.route.id),E.createElement(cn.Provider,{value:n},r)}function og(e,n,t,r){var l;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var i;if(!t)return null;if(t.errors)e=t.matches;else if((i=r)!=null&&i.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let a=e,s=(l=t)==null?void 0:l.errors;if(s!=null){let p=a.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);p>=0||X(!1),a=a.slice(0,Math.min(a.length,p+1))}let u=!1,o=-1;if(t&&r&&r.v7_partialHydration)for(let p=0;p<a.length;p++){let f=a[p];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(o=p),f.route.id){let{loaderData:m,errors:g}=t,v=f.route.loader&&m[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||v){u=!0,o>=0?a=a.slice(0,o+1):a=[a[0]];break}}}return a.reduceRight((p,f,m)=>{let g,v=!1,j=null,z=null;t&&(g=s&&f.route.id?s[f.route.id]:void 0,j=f.route.errorElement||ag,u&&(o<0&&m===0?(v=!0,z=null):o===m&&(v=!0,z=f.route.hydrateFallbackElement||null)));let c=n.concat(a.slice(0,m+1)),d=()=>{let h;return g?h=j:v?h=z:f.route.Component?h=E.createElement(f.route.Component,null):f.route.element?h=f.route.element:h=p,E.createElement(ug,{match:f,routeContext:{outlet:p,matches:c,isDataRoute:t!=null},children:h})};return t&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?E.createElement(sg,{location:t.location,revalidation:t.revalidation,component:j,error:g,children:d(),routeContext:{outlet:null,matches:c,isDataRoute:!0}}):d()},null)}var gc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(gc||{}),ni=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ni||{});function dg(e){let n=E.useContext(du);return n||X(!1),n}function fg(e){let n=E.useContext(Qm);return n||X(!1),n}function cg(e){let n=E.useContext(cn);return n||X(!1),n}function kc(e){let n=cg(),t=n.matches[n.matches.length-1];return t.route.id||X(!1),t.route.id}function hg(){var e;let n=E.useContext(hc),t=fg(ni.UseRouteError),r=kc(ni.UseRouteError);return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function pg(){let{router:e}=dg(gc.UseNavigateStable),n=kc(ni.UseNavigateStable),t=E.useRef(!1);return pc(()=>{t.current=!0}),E.useCallback(function(l,i){i===void 0&&(i={}),t.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,Ir({fromRouteId:n},i)))},[e,n])}function mg(e){return ng(e.context)}function ls(e){X(!1)}function gg(e){let{basename:n="/",children:t=null,location:r,navigationType:l=zn.Pop,navigator:i,static:a=!1,future:s}=e;Hr()&&X(!1);let u=n.replace(/^\/*/,"/"),o=E.useMemo(()=>({basename:u,navigator:i,static:a,future:Ir({v7_relativeSplatPath:!1},s)}),[u,s,i,a]);typeof r=="string"&&(r=Wt(r));let{pathname:p="/",search:f="",hash:m="",state:g=null,key:v="default"}=r,j=E.useMemo(()=>{let z=ou(p,u);return z==null?null:{location:{pathname:z,search:f,hash:m,state:g,key:v},navigationType:l}},[u,p,f,m,g,v,l]);return j==null?null:E.createElement(ut.Provider,{value:o},E.createElement(wi.Provider,{children:t,value:j}))}function kg(e){let{children:n,location:t}=e;return rg(is(n),t)}new Promise(()=>{});function is(e,n){n===void 0&&(n=[]);let t=[];return E.Children.forEach(e,(r,l)=>{if(!E.isValidElement(r))return;let i=[...n,l];if(r.type===E.Fragment){t.push.apply(t,is(r.props.children,i));return}r.type!==ls&&X(!1),!r.props.index||!r.props.children||X(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=is(r.props.children,i)),t.push(a)}),t}/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function as(){return as=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},as.apply(this,arguments)}function vg(e,n){if(e==null)return{};var t={},r=Object.keys(e),l,i;for(i=0;i<r.length;i++)l=r[i],!(n.indexOf(l)>=0)&&(t[l]=e[l]);return t}function jg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function yg(e,n){return e.button===0&&(!n||n==="_self")&&!jg(e)}const wg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Sg="6";try{window.__reactRouterVersion=Sg}catch{}const xg="startTransition",To=hh[xg];function zg(e){let{basename:n,children:t,future:r,window:l}=e,i=E.useRef();i.current==null&&(i.current=Em({window:l,v5Compat:!0}));let a=i.current,[s,u]=E.useState({action:a.action,location:a.location}),{v7_startTransition:o}=r||{},p=E.useCallback(f=>{o&&To?To(()=>u(f)):u(f)},[u,o]);return E.useLayoutEffect(()=>a.listen(p),[a,p]),E.createElement(gg,{basename:n,children:t,location:s.location,navigationType:s.action,navigator:a,future:r})}const Eg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Cg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vc=E.forwardRef(function(n,t){let{onClick:r,relative:l,reloadDocument:i,replace:a,state:s,target:u,to:o,preventScrollReset:p,unstable_viewTransition:f}=n,m=vg(n,wg),{basename:g}=E.useContext(ut),v,j=!1;if(typeof o=="string"&&Cg.test(o)&&(v=o,Eg))try{let h=new URL(window.location.href),k=o.startsWith("//")?new URL(h.protocol+o):new URL(o),S=ou(k.pathname,g);k.origin===h.origin&&S!=null?o=S+k.search+k.hash:j=!0}catch{}let z=Zm(o,{relative:l}),c=_g(o,{replace:a,state:s,target:u,preventScrollReset:p,relative:l,unstable_viewTransition:f});function d(h){r&&r(h),h.defaultPrevented||c(h)}return E.createElement("a",as({},m,{href:v||z,onClick:j||i?r:d,ref:t,target:u}))});var Lo;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Lo||(Lo={}));var Ro;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ro||(Ro={}));function _g(e,n){let{target:t,replace:r,state:l,preventScrollReset:i,relative:a,unstable_viewTransition:s}=n===void 0?{}:n,u=Ym(),o=Si(),p=mc(e,{relative:a});return E.useCallback(f=>{if(yg(f,t)){f.preventDefault();let m=r!==void 0?r:ei(o)===ei(p);u(e,{replace:m,state:l,preventScrollReset:i,relative:a,unstable_viewTransition:s})}},[o,u,p,r,l,t,e,i,a,s])}var ve=function(){return ve=Object.assign||function(n){for(var t,r=1,l=arguments.length;r<l;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},ve.apply(this,arguments)};function Mr(e,n,t){if(t||arguments.length===2)for(var r=0,l=n.length,i;r<l;r++)(i||!(r in n))&&(i||(i=Array.prototype.slice.call(n,0,r)),i[r]=n[r]);return e.concat(i||Array.prototype.slice.call(n))}var B="-ms-",kr="-moz-",I="-webkit-",jc="comm",xi="rule",fu="decl",Pg="@import",yc="@keyframes",Ng="@layer",wc=Math.abs,cu=String.fromCharCode,ss=Object.assign;function bg(e,n){return re(e,0)^45?(((n<<2^re(e,0))<<2^re(e,1))<<2^re(e,2))<<2^re(e,3):0}function Sc(e){return e.trim()}function nn(e,n){return(e=n.exec(e))?e[0]:e}function L(e,n,t){return e.replace(n,t)}function El(e,n,t){return e.indexOf(n,t)}function re(e,n){return e.charCodeAt(n)|0}function Mt(e,n,t){return e.slice(n,t)}function Ge(e){return e.length}function xc(e){return e.length}function sr(e,n){return n.push(e),e}function Tg(e,n){return e.map(n).join("")}function Fo(e,n){return e.filter(function(t){return!nn(t,n)})}var zi=1,Ot=1,zc=0,Me=0,Z=0,Kt="";function Ei(e,n,t,r,l,i,a,s){return{value:e,root:n,parent:t,type:r,props:l,children:i,line:zi,column:Ot,length:a,return:"",siblings:s}}function kn(e,n){return ss(Ei("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},n)}function dt(e){for(;e.root;)e=kn(e.root,{children:[e]});sr(e,e.siblings)}function Lg(){return Z}function Rg(){return Z=Me>0?re(Kt,--Me):0,Ot--,Z===10&&(Ot=1,zi--),Z}function We(){return Z=Me<zc?re(Kt,Me++):0,Ot++,Z===10&&(Ot=1,zi++),Z}function Yn(){return re(Kt,Me)}function Cl(){return Me}function Ci(e,n){return Mt(Kt,e,n)}function us(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Fg(e){return zi=Ot=1,zc=Ge(Kt=e),Me=0,[]}function Dg(e){return Kt="",e}function ia(e){return Sc(Ci(Me-1,os(e===91?e+2:e===40?e+1:e)))}function Ig(e){for(;(Z=Yn())&&Z<33;)We();return us(e)>2||us(Z)>3?"":" "}function Mg(e,n){for(;--n&&We()&&!(Z<48||Z>102||Z>57&&Z<65||Z>70&&Z<97););return Ci(e,Cl()+(n<6&&Yn()==32&&We()==32))}function os(e){for(;We();)switch(Z){case e:return Me;case 34:case 39:e!==34&&e!==39&&os(Z);break;case 40:e===41&&os(e);break;case 92:We();break}return Me}function Og(e,n){for(;We()&&e+Z!==57;)if(e+Z===84&&Yn()===47)break;return"/*"+Ci(n,Me-1)+"*"+cu(e===47?e:We())}function $g(e){for(;!us(Yn());)We();return Ci(e,Me)}function Ag(e){return Dg(_l("",null,null,null,[""],e=Fg(e),0,[0],e))}function _l(e,n,t,r,l,i,a,s,u){for(var o=0,p=0,f=a,m=0,g=0,v=0,j=1,z=1,c=1,d=0,h="",k=l,S=i,x=r,y=h;z;)switch(v=d,d=We()){case 40:if(v!=108&&re(y,f-1)==58){El(y+=L(ia(d),"&","&\f"),"&\f",wc(o?s[o-1]:0))!=-1&&(c=-1);break}case 34:case 39:case 91:y+=ia(d);break;case 9:case 10:case 13:case 32:y+=Ig(v);break;case 92:y+=Mg(Cl()-1,7);continue;case 47:switch(Yn()){case 42:case 47:sr(qg(Og(We(),Cl()),n,t,u),u);break;default:y+="/"}break;case 123*j:s[o++]=Ge(y)*c;case 125*j:case 59:case 0:switch(d){case 0:case 125:z=0;case 59+p:c==-1&&(y=L(y,/\f/g,"")),g>0&&Ge(y)-f&&sr(g>32?Io(y+";",r,t,f-1,u):Io(L(y," ","")+";",r,t,f-2,u),u);break;case 59:y+=";";default:if(sr(x=Do(y,n,t,o,p,l,s,h,k=[],S=[],f,i),i),d===123)if(p===0)_l(y,n,x,x,k,i,f,s,S);else switch(m===99&&re(y,3)===110?100:m){case 100:case 108:case 109:case 115:_l(e,x,x,r&&sr(Do(e,x,x,0,0,l,s,h,l,k=[],f,S),S),l,S,f,s,r?k:S);break;default:_l(y,x,x,x,[""],S,0,s,S)}}o=p=g=0,j=c=1,h=y="",f=a;break;case 58:f=1+Ge(y),g=v;default:if(j<1){if(d==123)--j;else if(d==125&&j++==0&&Rg()==125)continue}switch(y+=cu(d),d*j){case 38:c=p>0?1:(y+="\f",-1);break;case 44:s[o++]=(Ge(y)-1)*c,c=1;break;case 64:Yn()===45&&(y+=ia(We())),m=Yn(),p=f=Ge(h=y+=$g(Cl())),d++;break;case 45:v===45&&Ge(y)==2&&(j=0)}}return i}function Do(e,n,t,r,l,i,a,s,u,o,p,f){for(var m=l-1,g=l===0?i:[""],v=xc(g),j=0,z=0,c=0;j<r;++j)for(var d=0,h=Mt(e,m+1,m=wc(z=a[j])),k=e;d<v;++d)(k=Sc(z>0?g[d]+" "+h:L(h,/&\f/g,g[d])))&&(u[c++]=k);return Ei(e,n,t,l===0?xi:s,u,o,p,f)}function qg(e,n,t,r){return Ei(e,n,t,jc,cu(Lg()),Mt(e,2,-2),0,r)}function Io(e,n,t,r,l){return Ei(e,n,t,fu,Mt(e,0,r),Mt(e,r+1,-1),r,l)}function Ec(e,n,t){switch(bg(e,n)){case 5103:return I+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return I+e+e;case 4789:return kr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return I+e+kr+e+B+e+e;case 5936:switch(re(e,n+11)){case 114:return I+e+B+L(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return I+e+B+L(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return I+e+B+L(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return I+e+B+e+e;case 6165:return I+e+B+"flex-"+e+e;case 5187:return I+e+L(e,/(\w+).+(:[^]+)/,I+"box-$1$2"+B+"flex-$1$2")+e;case 5443:return I+e+B+"flex-item-"+L(e,/flex-|-self/g,"")+(nn(e,/flex-|baseline/)?"":B+"grid-row-"+L(e,/flex-|-self/g,""))+e;case 4675:return I+e+B+"flex-line-pack"+L(e,/align-content|flex-|-self/g,"")+e;case 5548:return I+e+B+L(e,"shrink","negative")+e;case 5292:return I+e+B+L(e,"basis","preferred-size")+e;case 6060:return I+"box-"+L(e,"-grow","")+I+e+B+L(e,"grow","positive")+e;case 4554:return I+L(e,/([^-])(transform)/g,"$1"+I+"$2")+e;case 6187:return L(L(L(e,/(zoom-|grab)/,I+"$1"),/(image-set)/,I+"$1"),e,"")+e;case 5495:case 3959:return L(e,/(image-set\([^]*)/,I+"$1$`$1");case 4968:return L(L(e,/(.+:)(flex-)?(.*)/,I+"box-pack:$3"+B+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+I+e+e;case 4200:if(!nn(e,/flex-|baseline/))return B+"grid-column-align"+Mt(e,n)+e;break;case 2592:case 3360:return B+L(e,"template-","")+e;case 4384:case 3616:return t&&t.some(function(r,l){return n=l,nn(r.props,/grid-\w+-end/)})?~El(e+(t=t[n].value),"span",0)?e:B+L(e,"-start","")+e+B+"grid-row-span:"+(~El(t,"span",0)?nn(t,/\d+/):+nn(t,/\d+/)-+nn(e,/\d+/))+";":B+L(e,"-start","")+e;case 4896:case 4128:return t&&t.some(function(r){return nn(r.props,/grid-\w+-start/)})?e:B+L(L(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return L(e,/(.+)-inline(.+)/,I+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ge(e)-1-n>6)switch(re(e,n+1)){case 109:if(re(e,n+4)!==45)break;case 102:return L(e,/(.+:)(.+)-([^]+)/,"$1"+I+"$2-$3$1"+kr+(re(e,n+3)==108?"$3":"$2-$3"))+e;case 115:return~El(e,"stretch",0)?Ec(L(e,"stretch","fill-available"),n,t)+e:e}break;case 5152:case 5920:return L(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,l,i,a,s,u,o){return B+l+":"+i+o+(a?B+l+"-span:"+(s?u:+u-+i)+o:"")+e});case 4949:if(re(e,n+6)===121)return L(e,":",":"+I)+e;break;case 6444:switch(re(e,re(e,14)===45?18:11)){case 120:return L(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+I+(re(e,14)===45?"inline-":"")+"box$3$1"+I+"$2$3$1"+B+"$2box$3")+e;case 100:return L(e,":",":"+B)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return L(e,"scroll-","scroll-snap-")+e}return e}function ti(e,n){for(var t="",r=0;r<e.length;r++)t+=n(e[r],r,e,n)||"";return t}function Ug(e,n,t,r){switch(e.type){case Ng:if(e.children.length)break;case Pg:case fu:return e.return=e.return||e.value;case jc:return"";case yc:return e.return=e.value+"{"+ti(e.children,r)+"}";case xi:if(!Ge(e.value=e.props.join(",")))return""}return Ge(t=ti(e.children,r))?e.return=e.value+"{"+t+"}":""}function Bg(e){var n=xc(e);return function(t,r,l,i){for(var a="",s=0;s<n;s++)a+=e[s](t,r,l,i)||"";return a}}function Hg(e){return function(n){n.root||(n=n.return)&&e(n)}}function Wg(e,n,t,r){if(e.length>-1&&!e.return)switch(e.type){case fu:e.return=Ec(e.value,e.length,t);return;case yc:return ti([kn(e,{value:L(e.value,"@","@"+I)})],r);case xi:if(e.length)return Tg(t=e.props,function(l){switch(nn(l,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":dt(kn(e,{props:[L(l,/:(read-\w+)/,":"+kr+"$1")]})),dt(kn(e,{props:[l]})),ss(e,{props:Fo(t,r)});break;case"::placeholder":dt(kn(e,{props:[L(l,/:(plac\w+)/,":"+I+"input-$1")]})),dt(kn(e,{props:[L(l,/:(plac\w+)/,":"+kr+"$1")]})),dt(kn(e,{props:[L(l,/:(plac\w+)/,B+"input-$1")]})),dt(kn(e,{props:[l]})),ss(e,{props:Fo(t,r)});break}return""})}}var Kg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ze={},$t=typeof process<"u"&&ze!==void 0&&(ze.REACT_APP_SC_ATTR||ze.SC_ATTR)||"data-styled",Cc="active",_c="data-styled-version",_i="6.1.13",hu=`/*!sc*/
`,ri=typeof window<"u"&&"HTMLElement"in window,Vg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ze!==void 0&&ze.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ze.REACT_APP_SC_DISABLE_SPEEDY!==""?ze.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ze.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ze!==void 0&&ze.SC_DISABLE_SPEEDY!==void 0&&ze.SC_DISABLE_SPEEDY!==""&&ze.SC_DISABLE_SPEEDY!=="false"&&ze.SC_DISABLE_SPEEDY),Pi=Object.freeze([]),At=Object.freeze({});function Jg(e,n,t){return t===void 0&&(t=At),e.theme!==t.theme&&e.theme||n||t.theme}var Pc=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Gg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Qg=/(^-|-$)/g;function Mo(e){return e.replace(Gg,"-").replace(Qg,"")}var Zg=/(a)(d)/gi,fl=52,Oo=function(e){return String.fromCharCode(e+(e>25?39:97))};function ds(e){var n,t="";for(n=Math.abs(e);n>fl;n=n/fl|0)t=Oo(n%fl)+t;return(Oo(n%fl)+t).replace(Zg,"$1-$2")}var aa,Nc=5381,xt=function(e,n){for(var t=n.length;t;)e=33*e^n.charCodeAt(--t);return e},bc=function(e){return xt(Nc,e)};function Tc(e){return ds(bc(e)>>>0)}function Yg(e){return e.displayName||e.name||"Component"}function sa(e){return typeof e=="string"&&!0}var Lc=typeof Symbol=="function"&&Symbol.for,Rc=Lc?Symbol.for("react.memo"):60115,Xg=Lc?Symbol.for("react.forward_ref"):60112,ek={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},nk={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Fc={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},tk=((aa={})[Xg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},aa[Rc]=Fc,aa);function $o(e){return("type"in(n=e)&&n.type.$$typeof)===Rc?Fc:"$$typeof"in e?tk[e.$$typeof]:ek;var n}var rk=Object.defineProperty,lk=Object.getOwnPropertyNames,Ao=Object.getOwnPropertySymbols,ik=Object.getOwnPropertyDescriptor,ak=Object.getPrototypeOf,qo=Object.prototype;function Dc(e,n,t){if(typeof n!="string"){if(qo){var r=ak(n);r&&r!==qo&&Dc(e,r,t)}var l=lk(n);Ao&&(l=l.concat(Ao(n)));for(var i=$o(e),a=$o(n),s=0;s<l.length;++s){var u=l[s];if(!(u in nk||t&&t[u]||a&&u in a||i&&u in i)){var o=ik(n,u);try{rk(e,u,o)}catch{}}}}return e}function qt(e){return typeof e=="function"}function pu(e){return typeof e=="object"&&"styledComponentId"in e}function Gn(e,n){return e&&n?"".concat(e," ").concat(n):e||n||""}function fs(e,n){if(e.length===0)return"";for(var t=e[0],r=1;r<e.length;r++)t+=e[r];return t}function Or(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function cs(e,n,t){if(t===void 0&&(t=!1),!t&&!Or(e)&&!Array.isArray(e))return n;if(Array.isArray(n))for(var r=0;r<n.length;r++)e[r]=cs(e[r],n[r]);else if(Or(n))for(var r in n)e[r]=cs(e[r],n[r]);return e}function mu(e,n){Object.defineProperty(e,"toString",{value:n})}function Wr(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(n.length>0?" Args: ".concat(n.join(", ")):""))}var sk=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}return e.prototype.indexOfGroup=function(n){for(var t=0,r=0;r<n;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(n,t){if(n>=this.groupSizes.length){for(var r=this.groupSizes,l=r.length,i=l;n>=i;)if((i<<=1)<0)throw Wr(16,"".concat(n));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var a=l;a<i;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(n+1),u=(a=0,t.length);a<u;a++)this.tag.insertRule(s,t[a])&&(this.groupSizes[n]++,s++)},e.prototype.clearGroup=function(n){if(n<this.length){var t=this.groupSizes[n],r=this.indexOfGroup(n),l=r+t;this.groupSizes[n]=0;for(var i=r;i<l;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(n){var t="";if(n>=this.length||this.groupSizes[n]===0)return t;for(var r=this.groupSizes[n],l=this.indexOfGroup(n),i=l+r,a=l;a<i;a++)t+="".concat(this.tag.getRule(a)).concat(hu);return t},e}(),Pl=new Map,li=new Map,Nl=1,cl=function(e){if(Pl.has(e))return Pl.get(e);for(;li.has(Nl);)Nl++;var n=Nl++;return Pl.set(e,n),li.set(n,e),n},uk=function(e,n){Nl=n+1,Pl.set(e,n),li.set(n,e)},ok="style[".concat($t,"][").concat(_c,'="').concat(_i,'"]'),dk=new RegExp("^".concat($t,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),fk=function(e,n,t){for(var r,l=t.split(","),i=0,a=l.length;i<a;i++)(r=l[i])&&e.registerName(n,r)},ck=function(e,n){for(var t,r=((t=n.textContent)!==null&&t!==void 0?t:"").split(hu),l=[],i=0,a=r.length;i<a;i++){var s=r[i].trim();if(s){var u=s.match(dk);if(u){var o=0|parseInt(u[1],10),p=u[2];o!==0&&(uk(p,o),fk(e,p,u[3]),e.getTag().insertRules(o,l)),l.length=0}else l.push(s)}}},Uo=function(e){for(var n=document.querySelectorAll(ok),t=0,r=n.length;t<r;t++){var l=n[t];l&&l.getAttribute($t)!==Cc&&(ck(e,l),l.parentNode&&l.parentNode.removeChild(l))}};function hk(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Ic=function(e){var n=document.head,t=e||n,r=document.createElement("style"),l=function(s){var u=Array.from(s.querySelectorAll("style[".concat($t,"]")));return u[u.length-1]}(t),i=l!==void 0?l.nextSibling:null;r.setAttribute($t,Cc),r.setAttribute(_c,_i);var a=hk();return a&&r.setAttribute("nonce",a),t.insertBefore(r,i),r},pk=function(){function e(n){this.element=Ic(n),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var r=document.styleSheets,l=0,i=r.length;l<i;l++){var a=r[l];if(a.ownerNode===t)return a}throw Wr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(n,t){try{return this.sheet.insertRule(t,n),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.prototype.getRule=function(n){var t=this.sheet.cssRules[n];return t&&t.cssText?t.cssText:""},e}(),mk=function(){function e(n){this.element=Ic(n),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(n,t){if(n<=this.length&&n>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[n]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.prototype.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),gk=function(){function e(n){this.rules=[],this.length=0}return e.prototype.insertRule=function(n,t){return n<=this.length&&(this.rules.splice(n,0,t),this.length++,!0)},e.prototype.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.prototype.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Bo=ri,kk={isServer:!ri,useCSSOMInjection:!Vg},Mc=function(){function e(n,t,r){n===void 0&&(n=At),t===void 0&&(t={});var l=this;this.options=ve(ve({},kk),n),this.gs=t,this.names=new Map(r),this.server=!!n.isServer,!this.server&&ri&&Bo&&(Bo=!1,Uo(this)),mu(this,function(){return function(i){for(var a=i.getTag(),s=a.length,u="",o=function(f){var m=function(c){return li.get(c)}(f);if(m===void 0)return"continue";var g=i.names.get(m),v=a.getGroup(f);if(g===void 0||!g.size||v.length===0)return"continue";var j="".concat($t,".g").concat(f,'[id="').concat(m,'"]'),z="";g!==void 0&&g.forEach(function(c){c.length>0&&(z+="".concat(c,","))}),u+="".concat(v).concat(j,'{content:"').concat(z,'"}').concat(hu)},p=0;p<s;p++)o(p);return u}(l)})}return e.registerId=function(n){return cl(n)},e.prototype.rehydrate=function(){!this.server&&ri&&Uo(this)},e.prototype.reconstructWithOptions=function(n,t){return t===void 0&&(t=!0),new e(ve(ve({},this.options),n),this.gs,t&&this.names||void 0)},e.prototype.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(n=function(t){var r=t.useCSSOMInjection,l=t.target;return t.isServer?new gk(l):r?new pk(l):new mk(l)}(this.options),new sk(n)));var n},e.prototype.hasNameForId=function(n,t){return this.names.has(n)&&this.names.get(n).has(t)},e.prototype.registerName=function(n,t){if(cl(n),this.names.has(n))this.names.get(n).add(t);else{var r=new Set;r.add(t),this.names.set(n,r)}},e.prototype.insertRules=function(n,t,r){this.registerName(n,t),this.getTag().insertRules(cl(n),r)},e.prototype.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.prototype.clearRules=function(n){this.getTag().clearGroup(cl(n)),this.clearNames(n)},e.prototype.clearTag=function(){this.tag=void 0},e}(),vk=/&/g,jk=/^\s*\/\/.*$/gm;function Oc(e,n){return e.map(function(t){return t.type==="rule"&&(t.value="".concat(n," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(n," ")),t.props=t.props.map(function(r){return"".concat(n," ").concat(r)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=Oc(t.children,n)),t})}function yk(e){var n,t,r,l=At,i=l.options,a=i===void 0?At:i,s=l.plugins,u=s===void 0?Pi:s,o=function(m,g,v){return v.startsWith(t)&&v.endsWith(t)&&v.replaceAll(t,"").length>0?".".concat(n):m},p=u.slice();p.push(function(m){m.type===xi&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(vk,t).replace(r,o))}),a.prefix&&p.push(Wg),p.push(Ug);var f=function(m,g,v,j){g===void 0&&(g=""),v===void 0&&(v=""),j===void 0&&(j="&"),n=j,t=g,r=new RegExp("\\".concat(t,"\\b"),"g");var z=m.replace(jk,""),c=Ag(v||g?"".concat(v," ").concat(g," { ").concat(z," }"):z);a.namespace&&(c=Oc(c,a.namespace));var d=[];return ti(c,Bg(p.concat(Hg(function(h){return d.push(h)})))),d};return f.hash=u.length?u.reduce(function(m,g){return g.name||Wr(15),xt(m,g.name)},Nc).toString():"",f}var wk=new Mc,hs=yk(),$c=et.createContext({shouldForwardProp:void 0,styleSheet:wk,stylis:hs});$c.Consumer;et.createContext(void 0);function Ho(){return E.useContext($c)}var Ac=function(){function e(n,t){var r=this;this.inject=function(l,i){i===void 0&&(i=hs);var a=r.name+i.hash;l.hasNameForId(r.id,a)||l.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.name=n,this.id="sc-keyframes-".concat(n),this.rules=t,mu(this,function(){throw Wr(12,String(r.name))})}return e.prototype.getName=function(n){return n===void 0&&(n=hs),this.name+n.hash},e}(),Sk=function(e){return e>="A"&&e<="Z"};function Wo(e){for(var n="",t=0;t<e.length;t++){var r=e[t];if(t===1&&r==="-"&&e[0]==="-")return e;Sk(r)?n+="-"+r.toLowerCase():n+=r}return n.startsWith("ms-")?"-"+n:n}var qc=function(e){return e==null||e===!1||e===""},Uc=function(e){var n,t,r=[];for(var l in e){var i=e[l];e.hasOwnProperty(l)&&!qc(i)&&(Array.isArray(i)&&i.isCss||qt(i)?r.push("".concat(Wo(l),":"),i,";"):Or(i)?r.push.apply(r,Mr(Mr(["".concat(l," {")],Uc(i),!1),["}"],!1)):r.push("".concat(Wo(l),": ").concat((n=l,(t=i)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||n in Kg||n.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return r};function Xn(e,n,t,r){if(qc(e))return[];if(pu(e))return[".".concat(e.styledComponentId)];if(qt(e)){if(!qt(i=e)||i.prototype&&i.prototype.isReactComponent||!n)return[e];var l=e(n);return Xn(l,n,t,r)}var i;return e instanceof Ac?t?(e.inject(t,r),[e.getName(r)]):[e]:Or(e)?Uc(e):Array.isArray(e)?Array.prototype.concat.apply(Pi,e.map(function(a){return Xn(a,n,t,r)})):[e.toString()]}function xk(e){for(var n=0;n<e.length;n+=1){var t=e[n];if(qt(t)&&!pu(t))return!1}return!0}var zk=bc(_i),Ek=function(){function e(n,t,r){this.rules=n,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&xk(n),this.componentId=t,this.baseHash=xt(zk,t),this.baseStyle=r,Mc.registerId(t)}return e.prototype.generateAndInjectStyles=function(n,t,r){var l=this.baseStyle?this.baseStyle.generateAndInjectStyles(n,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))l=Gn(l,this.staticRulesId);else{var i=fs(Xn(this.rules,n,t,r)),a=ds(xt(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,a)){var s=r(i,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,s)}l=Gn(l,a),this.staticRulesId=a}else{for(var u=xt(this.baseHash,r.hash),o="",p=0;p<this.rules.length;p++){var f=this.rules[p];if(typeof f=="string")o+=f;else if(f){var m=fs(Xn(f,n,t,r));u=xt(u,m+p),o+=m}}if(o){var g=ds(u>>>0);t.hasNameForId(this.componentId,g)||t.insertRules(this.componentId,g,r(o,".".concat(g),void 0,this.componentId)),l=Gn(l,g)}}return l},e}(),Bc=et.createContext(void 0);Bc.Consumer;var ua={};function Ck(e,n,t){var r=pu(e),l=e,i=!sa(e),a=n.attrs,s=a===void 0?Pi:a,u=n.componentId,o=u===void 0?function(k,S){var x=typeof k!="string"?"sc":Mo(k);ua[x]=(ua[x]||0)+1;var y="".concat(x,"-").concat(Tc(_i+x+ua[x]));return S?"".concat(S,"-").concat(y):y}(n.displayName,n.parentComponentId):u,p=n.displayName,f=p===void 0?function(k){return sa(k)?"styled.".concat(k):"Styled(".concat(Yg(k),")")}(e):p,m=n.displayName&&n.componentId?"".concat(Mo(n.displayName),"-").concat(n.componentId):n.componentId||o,g=r&&l.attrs?l.attrs.concat(s).filter(Boolean):s,v=n.shouldForwardProp;if(r&&l.shouldForwardProp){var j=l.shouldForwardProp;if(n.shouldForwardProp){var z=n.shouldForwardProp;v=function(k,S){return j(k,S)&&z(k,S)}}else v=j}var c=new Ek(t,m,r?l.componentStyle:void 0);function d(k,S){return function(x,y,P){var A=x.attrs,R=x.componentStyle,Se=x.defaultProps,$n=x.foldedComponentIds,An=x.styledComponentId,Kr=x.target,bi=et.useContext(Bc),Vt=Ho(),qn=x.shouldForwardProp||Vt.shouldForwardProp,C=Jg(y,bi,Se)||At,N=function(pn,xe,Xe){for(var Jt,Bn=ve(ve({},xe),{className:void 0,theme:Xe}),Ti=0;Ti<pn.length;Ti+=1){var Vr=qt(Jt=pn[Ti])?Jt(Bn):Jt;for(var mn in Vr)Bn[mn]=mn==="className"?Gn(Bn[mn],Vr[mn]):mn==="style"?ve(ve({},Bn[mn]),Vr[mn]):Vr[mn]}return xe.className&&(Bn.className=Gn(Bn.className,xe.className)),Bn}(A,y,C),b=N.as||Kr,O={};for(var $ in N)N[$]===void 0||$[0]==="$"||$==="as"||$==="theme"&&N.theme===C||($==="forwardedAs"?O.as=N.forwardedAs:qn&&!qn($,b)||(O[$]=N[$]));var Un=function(pn,xe){var Xe=Ho(),Jt=pn.generateAndInjectStyles(xe,Xe.styleSheet,Xe.stylis);return Jt}(R,N),Oe=Gn($n,An);return Un&&(Oe+=" "+Un),N.className&&(Oe+=" "+N.className),O[sa(b)&&!Pc.has(b)?"class":"className"]=Oe,O.ref=P,E.createElement(b,O)}(h,k,S)}d.displayName=f;var h=et.forwardRef(d);return h.attrs=g,h.componentStyle=c,h.displayName=f,h.shouldForwardProp=v,h.foldedComponentIds=r?Gn(l.foldedComponentIds,l.styledComponentId):"",h.styledComponentId=m,h.target=r?l.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=r?function(S){for(var x=[],y=1;y<arguments.length;y++)x[y-1]=arguments[y];for(var P=0,A=x;P<A.length;P++)cs(S,A[P],!0);return S}({},l.defaultProps,k):k}}),mu(h,function(){return".".concat(h.styledComponentId)}),i&&Dc(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function Ko(e,n){for(var t=[e[0]],r=0,l=n.length;r<l;r+=1)t.push(n[r],e[r+1]);return t}var Vo=function(e){return Object.assign(e,{isCss:!0})};function Hc(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];if(qt(e)||Or(e))return Vo(Xn(Ko(Pi,Mr([e],n,!0))));var r=e;return n.length===0&&r.length===1&&typeof r[0]=="string"?Xn(r):Vo(Xn(Ko(r,n)))}function ps(e,n,t){if(t===void 0&&(t=At),!n)throw Wr(1,n);var r=function(l){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(n,t,Hc.apply(void 0,Mr([l],i,!1)))};return r.attrs=function(l){return ps(e,n,ve(ve({},t),{attrs:Array.prototype.concat(t.attrs,l).filter(Boolean)}))},r.withConfig=function(l){return ps(e,n,ve(ve({},t),l))},r}var Wc=function(e){return ps(Ck,e)},hn=Wc;Pc.forEach(function(e){hn[e]=Wc(e)});function _k(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];var r=fs(Hc.apply(void 0,Mr([e],n,!1))),l=Tc(r);return new Ac(l,r)}const Pk=hn.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 5rem;
  background-color: white;
  box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0),
    0 1px 1px rgba(16, 22, 26, 0.2);
  & > * {
    padding: 0 2rem;
  }
`,Nk="Learn Typing",bk="Start Lesson",Tk={APP_TITLE:Nk,START_LESSON:bk},Kc=hn.div`
  padding: 1.5rem;
  margin: 1rem;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: 0.2rem;
  background-color: rgba(50,50,50, 1)
`,Lk=_k`
    0% {
      background-color: yellow;
    }
    100% {
      background-color: transparent;
    }
`,Ni=hn.span`
  font-family: "Courier New";
`,Rk=hn(Ni)`
  background-color: lightgreen;
`,Fk=hn(Ni)`
  background-color: red;
`,Dk=hn(Ni)`
  background-color: yellow;
  animation-name: ${Lk};
  animation-duration: 8s;
  animation-iteration-count: infinite;
`,Ik=({data:e,isCurrent:n})=>{let t=T.jsx(T.Fragment,{children:e.value});e.value===`
`&&(t=T.jsx("span",{children:T.jsx("br",{})}));const r={ok:Rk,error:Fk,current:Dk,transparent:Ni},l=n?"current":e.color,i=r[l];return T.jsx(i,{children:t})},Mk=({lesson:e,completeLesson:n})=>{const[t,r]=E.useState(e),[l,i]=E.useState(0),[a,s]=E.useState(new Date),u=l===t.length;E.useEffect(()=>{const p=f=>{if(f.key==="Space"&&f.target===document.body&&f.preventDefault(),l===0&&s(new Date),u){n({mistakes:Ok(t),time:$k(a)});return}const m=f.key==="Enter"?`
`:f.key,g=[...t],v=t[l];g[l]={color:v.value===m?"ok":"error",value:v.value},r(g),i(l+1)};return document.addEventListener("keydown",p),()=>{document.removeEventListener("keydown",p)}},[u,t,l,n,s,a]);const o=t.map((p,f)=>T.jsx(Ik,{data:p,isCurrent:f===l},f));return T.jsx("section",{children:o})},Ok=e=>e.filter(n=>n.color==="error").length,$k=e=>(new Date().getTime()-e.getTime())/1e3,Vc=hn.button`
  background: red;
  color: white;
  padding: 0.5rem 0.75rem;
  font-weight: bold;
  cursor: pointer;
`,Ak=hn(Vc)`
  background: blue;
`,Jc=({onClick:e,children:n,color:t="default"})=>{const l={default:Vc,primary:Ak}[t];return T.jsx(l,{onClick:e,children:n})},oa={Reset:"Reset",Mistakes:"Mistakes",Time:"Time"},qk=({lessonStats:e,resetAction:n})=>{const{mistakes:t,time:r}=e;return T.jsxs(T.Fragment,{children:[T.jsxs("ul",{children:[T.jsxs("li",{children:[oa.Mistakes,": ",t]}),T.jsxs("li",{children:[oa.Time,": ",r]})]}),T.jsx(Jc,{onClick:n,children:oa.Reset})]})},Gc=[{id:21,title:"Test Lesson",description:"Test Lesson",lesson:"fd fd fd"},{id:1,title:"Lesson 01",description:`Setzen Sie sich aufrecht und entspannt in den Sessel,  ertasten
Sie blind die Grundstellung und schreiben Sie den in der oberen
Bildschirmhälfte  gezeigten  Text ab, ohne auf die  Tastatur zu
schauen.  Schreiben Sie zu Beginn langsam und möglichst fehler-
los und versuchen Sie rhythmisch zu schreiben.`,lesson:`fd fd fd fd fd fd fd fd fd fd fd fd df df df df df df df df df df df
jk jk jk jk jk jk jk jk jk jk jk jk kj kj kj kj kj kj kj kj kj kj kj
sa sa sa sa sa sa sa sa sa sa sa sa as as as as as as as as as as as
lö lö lö lö lö lö lö lö lö lö lö lö öl öl öl öl öl öl öl öl öl öl öl

fffjjj fffjjj ffjj dddkkk dddkkk ddkk ssslll ssslll ssll aaaööö aaaööö
fjf fjf fjf fjf fjf fjf fjf fjf fjf jfj jfj jfj jfj jfj jfj jfj jfj
dkd dkd dkd dkd dkd dkd dkd dkd dkd kdk kdk kdk kdk kdk kdk kdk kdk
sls sls sls sls sls sls sls sls lsl lsl lsl ssl ssl lls lls lss lss
aöa aöa aöa aöa aöa aöa aöa öaö öaö öaö öaö aöö aöö ööa ööa aaö öaa
fjf jfj ffj jjf jff dkd kkd kdd dkd ddk dkk sls sll lss sls ssl lsl
aöa aöö öaa öaö aaö ööa fjfj jfjf kdkd dkdk lsls slsl öaöa ööaa aaöö
asdf jklö asdf jklö asdf jklö asdf jklö asdf jklö asdf jklö asdf jklö
ölkj fdsa ölkj fdsa ölkj fdsa jklö asdf ölkj fdsa asdf ölkj fdsa ölkj

als als als als als als als als als las las las las las las las las
all all all all all all all all aal aal aal aal aal aal aal aal aal
fall fall fall fall fall fall falk falk falk falk falk falk falk falk
saal saal saal saal saal saal skala skala skala skala skala skala als
als all aal fall kalk saal skala als all aal fall kalk saal skala all
als das öl da las saal skala kalk da ja das öl fall ja saal da öl aal
als das öl da las saal skala kalk da ja das öl fall ja saal da öl aal

kalk klak lakk alkk lakk klla lkak kakl akkl lkka kkla kkal klka kkal
kalk klak lakk alkk lakk klla lkak kakl akkl lkka kkla kkal klka alkk`},{id:2,title:"Lesson 02",description:`Der linke Mittelfinger tastet kurz zum 'E' nach oben und kehrt
daraufhin sofort wieder  federnd in die  Grundstellung zurück.
Schreiben Sie wieder langsam und entspannt. Versuchen Sie, den
Text  fertigzuschreiben.  Die  Geschwindigkeit spielt momentan
noch keine große Rolle.`,lesson:`ded ded ded ded ded ded ded ded ede ede ede ede ede ede ede ede ede
ded ded ded ded ded ded ded ded ede ede ede ede ede ede ede ede ede
eedd eedd eedd edede dede dede deded e d e d e d e d e d e d e d e d
eedd eedd eedd edede dede dede deded e d e d e d e d e d e d e d e d

des des des des des des des def def def def dea dea dea dea dea dea
dej dej dej dej dej dej dek dek dek dek dek dek del del del del del
deö deö deö deö deö deö ded ded ded ded ded ede ede ede ede ede ede
sej sek sel seö aej aek ael aeö fej fek fel feö jea jes jed jef kea
kes ked kef lea les led lef öea öes öed öef jae jse jde jfe kae kse
kde kfe lae lse lde lfe öae öse öde öfe edj edk edl edö eda eds edf

fell fell fell fell fell fell fell fell feld feld feld feld feld feld
fels fels fels fels fels öse öse öse öse öse öse öse öse öse öse öse
löse löse löse löse löse löse jade jade jade jade jade jade jade jade
kasse kasse kasse kasse kasse klasse klasse klasse asse asse asse asse
edel edel edel edel edel edel jedes jedes jedes jedes jedes jede jede
adel adel adel adel adel adel fasse fasse fasse fasse fass fass fass
alles alles alles alles lalle lalle lalle lalle lalle lalle lalle

jede klasse löse das fell jede klasse löse das fell jede klasse löse
das fell jede klasse löse das fell jede klasse löse das fell jede
das kleefeld las alles öl des löffels des kaffees des adels des kalk
das kleefeld las alles öl des löffels des kaffees des adels des kalk
das kleefeld las alles öl des löffels des kaffees des adels des kalk
das öl löse das fell lade alle kaffeelöffel jedes klasseadels
das öl löse das fell lade alle kaffeelöffel jedes klasseadels
das öl löse das fell lade alle kaffeelöffel jedes klasseadels`},{id:3,title:"Lesson 03",description:`Das  'I'  wird  mit dem Mittelfinger der rechten  Hand  getippt.
Der  Finger  kehrt danach sofort wieder in die  Ausgangsstellung
zurück.  Kehren  Sie  auch bei Griffolgen immer  wieder  in  die
Grundstellung zurück. Versuchen Sie, am Zeilenende die <ENTER> -
Taste mit dem kleinen Finger der rechten Hand zu tippen.`,lesson:`kik kik kik kik kik kik kik kik iki iki iki iki iki iki iki iki iki
kik kik kik kik kik kik kik kik iki iki iki iki iki iki iki iki iki

kkii kkii kkii kkii kkii kiki kiki kiki ki ki ki ki ki ik ik ik ik ik
kkii kkii kkii kkii kkii kiki kiki kiki ki ki ki ki ki ik ik ik ik ik

iki iki iki iki iki iki kia kis kid kif kij kik kil kiö ika iks ikd
ikf ikj ikk ikl ikö jij jik jil jiö jia jis jid jif lia lis lid lif
lij lik lil liö öia öis öid öif öij öik öil öiö aia ais aid aif aij
aik ail aiö sia sis sid sif sij sik sil siö dia dis did dif dij dik
dil diö fia fis fid fif fij fik fil fiö aji aki ali aöi sji ski sli
söi dji dki dli döi fji fki fli föi jai jsi jdi jfi jji jki jli jöi
kai ksi kdi kfi kji kki kli köi lai lsi ldi lfi lji lki lli löi öai
ösi ödi öfi öji öki öli ööi

aei sei dei fei jei kei lei öei aie sie die fie jie kie lie öie
aei sei dei fei jei kei lei öei aie sie die fie jie kie lie öie

ski ski ski ski ski ski ski ski ski ski ski ski ski ski ski ski ski
ali ali ali ali ali ali ali ali ali ali ali ali ali ali ali ali ali
sie sie sie sie sie sie sie sie sie sie sie sie sie sie sie sie sie
eis eis eis eis eis eis eis eis eis eis eis eis eis eis eis eis eis

idee idee idee idee idee idee idee idee kies kies kies kies kies kies
lise lies lies lies lies lisa lisa lisa lisa lisa lisa seil seil seil

seil seil seil seil seil seil seil keil keil keil keil keil keil keil
kiel kiel kiel kiel kiel kiel kiel lila lila lila lila lila lila lila

ideal ideal ideal ideal diele diele diele diele fiedel fiedel fiedel
kleid kleid kleid kleid feile feile feile feile fliese fliese fliese
dieselöl dieselöl dieselöl dieselöl dieselöl dieselöl dieselöl 
die idee sei ideal die idee sei ideal die idee sei ideal die idee sei
ideal die idee sei ideal die idee sei ideal die idee sei ideal

die fee lief ski sie fiel leise die fee lief ski sie fiel leise
die fee lief ski sie fiel leise die fee lief ski sie fiel leise

die feile des ali sei lila die feile des ali sei lila die feile des
ali sei lila die feile des ali sei lila die feile des ali sei lila
edi lies leise dieses lied edi lies leise dieses lied edi lies leise
dieses lied edi lies leise dieses lied edi lies leise dieses lied
diese seide des kleides sei lila diese seide des kleides sei lila
diese seide des kleides sei lila diese seide des kleides sei lila
diese seide des kleides sei lila diese seide des kleides sei lila
diese seide des kleides sei lila diese seide des kleides sei lila

ilse las dieses lied ali las alles edi las dies sisi las das
ilse las dieses lied ali las alles edi las dies sisi las das
ilse las dieses lied ali las alles edi las dies sisi las das
als ilse las lief lili ski sie fiel als sie lief als ilse las
als ilse las lief lili ski sie fiel als sie lief als ilse las
als ilse las lief lili ski sie fiel als sie lief als ilse las

als edda lief las sisi das lied sie las das lied als edda lief
als edda lief las sisi das lied sie las das lied als edda lief
als edda lief las sisi das lied sie las das lied als edda lief
`},{id:4,title:"Lesson 04",description:`Ertasten Sie wieder die Grundstellung und tippen Sie nun folgende
Übung.  Das 'R' wird mit dem linken Zeigefinger getippt, der nach
dem Anschlag sofort wieder auf das  'F'  zurückkehrt.  Achten Sie
immer auf eine bequeme Sitzhaltung: Oberkörper am Sessel anlehnen
und die Oberarme nicht abwinkeln.`,lesson:`frf frf frf frf frf frf frf frf frf rfr rfr rfr rfr rfr rfr rfr rfr
frf frf frf frf frf frf frf frf frf rfr rfr rfr rfr rfr rfr rfr rfr

rrff rrff rrff rrff rrff rrff rfr frfrf rfrf rfrf rfrf rfrf rfrf
rrff rrff rrff rrff rrff rrff rfr frfrf rfrf rfrf rfrf rfrf rfrf

fra frs frd frf frj frk frl frö ara ars ard arf arj ark arl arö sra
srs srd srf srj srk srl srö dra drs drd drf drj drk drl drö jra jrs
jrd jrf jrj jrk jrl jrö kra krs krd krf krj krk krl krö lra lrs lrd
lrf lrj lrk lrl lrö öra örs örd örf örj örk örl örö rea res red ref
rej rek rel reö ria ris rid rif rij rik ril riö rie ire rei ari are

laser laser laser laser laser laser laser laser laser laser laser
jeder jeder jeder jeder jeder jeder köder köder köder köder köder
leder leder leder leder leder adler adler adler adler adler adler
leiser leiser leiser leiser leiser erlös erlös erlös erlös erlös
kader kader kader kader kader kader riff riff riff riff riff riff
ferkel ferkel ferkel ferkel ferkel kerl kerl kerl kerl kerl kerl kerl
dreier dreier dreier dreier dreier klares klares klares klares klares
freier freier freier freier freier lieder lieder lieder lieder lieder
kreis kreis kreis kreis kreis kreis kleider kleider kleider kleider
siedler siedler siedler siedler erlöser erlöser erlöser erlöser
reise reise reise reise reise leser leser leser leser leser leser
als dieser kerl rief lief resi leider eis als dieser kerl rief lief
resi leider eis als dieser kerl rief lief resi leider eis als dieser
kerl rief lief resi leider eis er las diese lieder leiser als karl
er las diese lieder leiser als karl er las diese lieder leiser als
karl er las diese lieder leiser als karl er las diese lieder leiser
als karl das rad des kerls fiel als alfred das ferkel rief das rad
des kerls fiel als alfred das ferkel rief 
als er dieses lied las fiel er da er ja lief als er das lied las
als er dieses lied las fiel er da er ja lief als er das lied las
als er dieses lied las fiel er da er ja lief als er das lied las

der kerl rief leiser als er darf da er leider als er rief leise las
der kerl rief leiser als er darf da er leider als er rief leise las
der kerl rief leiser als er darf da er leider als er rief leise las

der erlöser erlöse alle er sei der erlöser der seele der elfriede
der erlöser erlöse alle er sei der erlöser der seele der elfriede`},{id:5,title:"Lesson 05",description:`Ertasten Sie die Grundstellung und tippen Sie die folgende Übung.
Das 'U' wird mit dem Zeigefinger der rechten Hand getippt. Kehren
Sie nach jedem Anschlag wieder in die Grundstellung zurck.
`,lesson:`juj juj juj juj juj juj juj juj uju uju uju uju uju uju uju uju uju
juj juj juj juj juj juj juj juj uju uju uju uju uju uju uju uju uju

uujj uujj uujj uujj uujj uujj juju juju juju ujuj ujuj ujuj ujuj ujuj
uujj uujj uujj uujj uujj uujj juju juju juju ujuj ujuj ujuj ujuj ujuj

jua jus jud juf juj juk jul juö aua aus aud auf auj auk aul auö sua
sus sud suf suj suk sul suö dua dus dud duf duj duk dul duö fua fus
fud fuf fuj fuk ful fuö kua kus kud kuf kuj kuk kul kuö lua lus lud
luf luj luk luö öua öus öud öuf öuj öuk öul öuö iua ius iud iuf iuj
iuk iul iuö uea ues ued uef uej uek uel ueö eua eus eud euf euj euk
eul euö rua rus rud ruf ruj ruk rul ruö ura urs urd urf urj urk url
urö

dur dur dur dur dur sau sau sau sau sau sau aus aus aus aus aus aus
usa usa usa usa usa usa ulk ulk ulk ulk ulk ulk ruf ruf ruf ruf ruf
kuss kuss kuss kuss kuss aula aula aula aula aula faul faul faul faul
kauf kauf kauf kauf kauf laus laus laus laus luke luke luke luke luke
drau drau drau drau jude jude jude jude jude ural ural ural ural ural
flur flur flur flur flur juli juli juli juli juli ufer ufer ufer ufer
klaus klaus klaus klaus klaus feuer feuer feuer feuer feuer feuer
ruder ruder ruder ruder ruder ausfall ausfall ausfall ausfall ausfall
auslauf auslauf auslauf auslauf ulrike ulrike ulrike ulrike ulrike
freude freude freude freude freude ausreise ausreise ausreise ausreise
klausur klausur klausur klausur klausur

ulrike rufe es aus ulrike rufe es aus ulrike rufe es aus ulrike rufe
es aus ulrike rufe es aus ulrike rufe es aus ulrike rufe es aus
der ausfall löse das feuer aus der ausfall löse das feuer aus der
ausfall löse das feuer aus der ausfall löse das feuer aus
die feier fiel aus da der faule rudi rauslief die feier fiel aus da
der faule rudi rauslief die feier fiel aus da der faule rudi rauslief
er sei leider die faule susi leid er sei leider die faule susi leid
re ies rediel ied eluaf isus diel re ies rediel ied eluaf isus diel

als die laus auf das efeu lief fiel sie aus freude auf das drauufer
als die laus auf das efeu lief fiel sie aus freude auf das drauufer

frau susi kaufe dieses kleid aus seide
frau susi kaufe dieses kleid aus seide
der jude aus israel fiel auf als er auf die ölfelder lief
der jude aus israel fiel auf als er auf die ölfelder lief
der jude aus israel fiel auf als er auf die ölfelder lief`},{id:6,title:"Lesson 06",description:`Mit dem  Zeigefinger der  linken  Hand  tasten  Sie vom  'F' nach
rechts oben zum 'T'. Das 'N' ist der zweithäufigste Buchstabe und
wird mit dem Zeigefinger der rechten Hand getippt.  Schreiben Sie
langsam und  konzentriert.  Nur  ausdauernde  Übung  bringt einen
Fortschritt.`,lesson:`ftf ftf ftf ftf ftf ftf ftf ftf ftf ftf tft tft tft tft tft tft tft
ftf ftf ftf ftf ftf ftf ftf ftf ftf ftf tft tft tft tft tft tft tft

ttff ttff ttff ttff ttff ttff tftf tftf tftf ftft ftft ftft ftft ftft
ttff ttff ttff ttff ttff ttff tftf tftf tftf ftft ftft ftft ftft ftft

jnj jnj jnj jnj jnj jnj jnj jnj jnj jnj njn njn njn njn njn njn njn
jnj jnj jnj jnj jnj jnj jnj jnj jnj jnj njn njn njn njn njn njn njn

nnjj nnjj nnjj nnjj nnjj nnjj njnj njnj njnj jnjn jnjn jnjn jnjn jnjn
nnjj nnjj nnjj nnjj nnjj nnjj njnj njnj njnj jnjn jnjn jnjn jnjn jnjn

fta fts ftd ftf ftj ftk ftl ftö ata ats atd atf atj atk atl atö sta
sts std stf stj stk stl stö dta dts dtd dtf dtj dtk dtl dtö jta jts
jtd jtf jtj jtk jtl jtö kta kts ktd ktf ktj ktk ktl ktö lta lts ltd
ltf ltj ltk ltl ltö öta öts ötd ötf ötj ötk ötl ötö
jna jns jnd jnf jnj jnk jnl jnö ana ans and anf anj ank anl anö sna
sns snd snf snj snk snl snö dna dns dnd dnf dnj dnk dnl dnö fna fns
fnd fnf fnj fnk fnl fnö kna kns knd knf knj knk knl knö lna lns lnd
lnf lnj lnk lnl lnö öna öns önd önf önj önk önl önö
rat rat rat rat fit fit fit fit ute ute ute ute alt alt alt alt alt
fön fön fön fön und und und und nie nie nie nie tun tun tun tun tun
fast fast fast fast fink fink fink fink tönt tönt tönt tönt last last
last last farn farn farn farn tank tank tank tank tran tran tran tran
fein fein fein fein nein nein nein nein rund rund rund rund nest nest
nest nest rein rein rein rein ente ente ente ente kant kant kant kant

löten löten löten kette kette kette kante kante kante tönen tönen
tönen tanne tanne tanne tante tante tante turin turin turin niete
niete niete tinte tinte tinte finte finte finte raten raten raten
kunst kunst kunst unten unten unten fasten fasten kasten kasten leiten
leiten turnen turnen reiten reiten trinkfest trinkfest fettsteuer
fettsteuer tankstelle tankstelle landkarten landkarten stalaktiten
stalaktiten eisenketten eisenketten eintrittskarte eintrittskarte
kreislauf kreislauf karteikasten karteikasten

jede dieser drei frauen leitet in turin eine filiale
jede dieser drei frauen leitet in turin eine filiale
jede dieser drei frauen leitet in turin eine filiale

diese alte statue könnte das resultat der kunst des italieners raffael
sein
diese alte statue könnte das resultat der kunst des italieners raffael
sein

die alte tante die öfters eine tasse kaffee trinkt kritisierte den
netten kellner
die alte tante die öfters eine tasse kaffee trinkt kritisierte den
netten kellner

er tröstete sie und die alte frau staunte denn sie fand die taktik
des kellners interessant
er tröstete sie und die alte frau staunte denn sie fand die taktik
des kellners interessant`},{id:7,title:"Lesson 07",description:`Der linke  Zeigefinger spreizt sich zum  'G',  die anderen Finger
bleiben  auf  den  Tasten  der  Grundreihe.  Der  Zeigefinger der
rechten  Hand  spreizt nach links zum  'H',  die  anderen  Finger
bleiben wieder auf ihren Tasten.
Sicherheit geht auf alle Fälle vor Schnelligkeit !!!`,lesson:`fgf fgf fgf fgf fgf fgf fgf fgf gfg gfg gfg gfg gfg gfg gfg gfg gfg
fgf fgf fgf fgf fgf fgf fgf fgf gfg gfg gfg gfg gfg gfg gfg gfg gfg

ggff ggff ggff ggff ggff ggff gfgf gfgf gfgf gfgf fgfg fgfg fgfg fgfg
ggff ggff ggff ggff ggff ggff gfgf gfgf gfgf gfgf fgfg fgfg fgfg fgfg

jhj jhj jhj jhj jhj jhj jhj jhj hjh hjh hjh hjh hjh hjh hjh hjh hjh
jhj jhj jhj jhj jhj jhj jhj jhj hjh hjh hjh hjh hjh hjh hjh hjh hjh

hhjj hhjj hhjj hhjj hhjj hhjj hjhj hjhj hjhj hjhj jhjh jhjh jhjh jhjh
hhjj hhjj hhjj hhjj hhjj hhjj hjhj hjhj hjhj hjhj jhjh jhjh jhjh jhjh

fga fgs fgd fgf fgj fgk fgl fgö aga ags agd agf agj agk agl agö sga
sgs sgd sgf sgj sgk sgl sgö dga dgs dgd dgf dgj dgk dgl dgö jga jgs
jgd jgf jgj jgk jgl jgö kga kgs kgd kgf kgj kgk kgl kgö lga lgs lgd
lgf lgj lgk lgl lgö öga ögs ögd ögf ögj ögk ögl ögö

jha jhs jhd jhf jhj jhk jhl jhö aha ahs ahd ahf ahj ahk ahl ahö sha
shs shd shf shj shk shl shö dha dhs dhd dhf dhj dhk dhl dhö fha fhs
fhd fhf fhj fhk fhl fhö kha khs khd khf khj khk khl khö lha lhs lhd
lhf lhj lhk lhl lhö öha öhs öhd öhf öhj öhk öhl öhö

gas gas gas gas hat hat hat hat gen gen gen gen hut hut hut hut hut
gis gis gis gis tag tag tag tag uhu uhu uhu uhu göd göd göd göd göd
hin hin hin hin gnu gnu gnu gnu geh geh geh geh hege hege hege hege
haus haus haus haus gehe gehe gehe gehe gans gans gans gans lage lage
lage lage ruhe ruhe ruhe ruhe gute gute gute gute herr herr herr herr
gras gras gras gras hang hang hang hang glas glas glas glas geld geld
geld geld hager hager hager regen regen regen heger heger heger flöhe
flöhe flöhe gehege gehege hunger hunger huldigung huldigung hörigkeit
hörigkeit gehörgang gehörgang gartenhaus gartenhaus handelsregister
handelsregister lagerhaltung lagerhaltung gelegenheitskauf gelegenheit

der regen ist heuer leider öfters ausgefallen
der regen ist heuer leider öfters ausgefallen
der regen ist heuer leider öfters ausgefallen

der hund des herrn riegler hat flöhe
der hund des herrn riegler hat flöhe
der hund des herrn riegler hat flöhe
diese jahr fand herr hangl keine ruhe daher kaufte er das haus und den
garten in sehr ruhiger lage in ungarn
diese jahr fand herr hangl keine ruhe daher kaufte er das haus und den
garten in sehr ruhiger lage in ungarn

da rudi genug geld hatte kaufte er uns heuer in italien ein kleines
haus in hanglage
da rudi genug geld hatte kaufte er uns heuer in italien ein kleines
haus in hanglage`},{id:8,title:"Lesson 08",description:`Der linke Zeigefinger tastet in die Unterreihe zum  'V',  mit dem
rechten  Zeigefinger  wird  das  'M'  getippt.  Achten  Sie  beim
Schreiben  immer darauf,  daß  Sie nie auf die  Tastatur schauen,
auch wenn die Versuchung noch so groß ist !!!`,lesson:`fvf fvf fvf fvf fvf fvf fvf fvf fvf vfv vfv vfv vfv vfv vfv vfv vfv
fvf fvf fvf fvf fvf fvf fvf fvf fvf vfv vfv vfv vfv vfv vfv vfv vfv

ffvv ffvv ffvv ffvv ffvv ffvv fvfv fvfv fvfv fvfv fvfv vfvf vfvf vfvf
ffvv ffvv ffvv ffvv ffvv ffvv fvfv fvfv fvfv fvfv fvfv vfvf vfvf vfvf

jmj jmj jmj jmj jmj jmj jmj jmj jmj mjm mjm mjm mjm mjm mjm mjm mjm
jmj jmj jmj jmj jmj jmj jmj jmj jmj mjm mjm mjm mjm mjm mjm mjm mjm

jjmm jjmm jjmm jjmm jjmm jjmm jmjm jmjm jmjm jmjm jmjm mjmj mjmj mjmj
jjmm jjmm jjmm jjmm jjmm jjmm jmjm jmjm jmjm jmjm jmjm mjmj mjmj mjmj

fva fvs fvd fvf fvj fvk fvl fvö ava avs avd avf avj avk avl avö sva
svs svd svf svj svk svl svö dva dvs dvd dvf dvj dvk dvl dvö jva jvs
jvd jvf jvj jvk jvl jvö kva kvs kvd kvf kvj kvk kvl kvö lva lvs lvd
lvf lvj lvk lvl lvö öva övs övd övf övj övk övl övö

jma jms jmd jmf jmj jmk jml jmö ama ams amd amf amj amk aml amö sma
sms smd smf smj smk sml smö dma dms dmd dmf dmj dmk dml dmö fma fms
fmd fmf fmj fmk fml fmö kma kms kmd kmf kmj kmk kml kmö lma lms lmd
lmf lmj lmk lml lmö öma öms ömd ömf ömj ömk öml ömö

man man man man mai mai mai mai luv luv luv luv mal mal mal mal mal
kam kam kam kam rum rum rum rum mahd mahd mahd mahd turm turm turm
turm kamm kamm kamm kamm damm damm damm damm dumm dumm dumm dumm mehr
mehr mehr mehr mehr saum saum saum saum halm halm halm halm matt matt
matt matt viel viel viel viel vieh vieh vieh vieh möve möve möve möve
harve harve harve larve larve larve kurve kurve kurve masse masse
masse makel makel makel gummi gummi gummi virus virus virus viele
viele viele vater vater vater völlig völlig frevel frevel hummer
hummer hammel hammel vehement vehement vielmals vielmals vermummen
vermummen verdammung verdammung verminderung verminderung manöver
manöver massenverkehr massenverkehr

der gegenstand mathematik ist vielen ein greuel da er viel geduld und
ausdauer verlangt
der gegenstand mathematik ist vielen ein greuel da er viel geduld und
ausdauer verlangt

als der regen kam lief der vater vom feld in einen der vielen
heustadel die auf dem riesigen areal standen
als der regen kam lief der vater vom feld in einen der vielen
heustadel die auf dem riesigen areal standen

der uns völlig fremde mann fuhr einige male um das denkmal herum ehe
er sein fahrrad geradeausmanövrierte und mit unverminderter leistung
in die kurve fuhr
der uns völlig fremde mann fuhr einige male um das denkmal herum ehe
er sein fahrrad geradeausmanövrierte und mit unverminderter leistung
in die kurve fuhr`},{id:9,title:"Lesson 09",description:`Der rechte  Zeigefinger greift vom  'J' weit nach rechts oben zum
'Z'. Versuchen Sie trotzdem, nach jedem  Anschlag wieder zum  'J'
zurückzukehren.  Der linke  Zeigefinger greift  entsprechend weit
nach links unten zum 'B'.
Schreiben Sie nicht schnell, aber sicher !!!`,lesson:`fbf fbf fbf fbf fbf fbf fbf fbf fbf bfb bfb bfb bfb bfb bfb bfb bfb
fbf fbf fbf fbf fbf fbf fbf fbf fbf bfb bfb bfb bfb bfb bfb bfb bfb

ffbb ffbb ffbb ffbb ffbb ffbb fbfb fbfb fbfb fbfb fbfb bfbf bfbf bfbf
ffbb ffbb ffbb ffbb ffbb ffbb fbfb fbfb fbfb fbfb fbfb bfbf bfbf bfbf

jzj jzj jzj jzj jzj jzj jzj jzj jzj zjz zjz zjz zjz zjz zjz zjz zjz
jzj jzj jzj jzj jzj jzj jzj jzj jzj zjz zjz zjz zjz zjz zjz zjz zjz

jjzz jjzz jjzz jjzz jjzz jjzz jzjz jzjz jzjz jzjz jzjz zjzj zjzj zjzj
jjzz jjzz jjzz jjzz jjzz jjzz jzjz jzjz jzjz jzjz jzjz zjzj zjzj zjzj

fba fbs fbd fbf fbj fbk fbl fbö aba abs abd abf abj abk abl abö sba
sbs sbd sbf sbj sbk sbl sbö dba dbs dbd dbf dbj dbk dbl dbö jba jbs
jbd jbf jbj jbk jbl jbö kba kbs kbd kbf kbj kbk kbl kbö lba lbs lbd
lbf lbj lbk lbl lbö öba öbs öbd öbf öbj öbk öbl öbö

jza jzs jzd jzf jzj jzk jzl jzö aza azs azd azf azj azk azl azö sza
szs szd szf szj szk szl szö dza dzs dzd dzf dzj dzk dzl dzö fza fzs
fzd fzf fzj fzk fzl fzö kza kzs kzd kzf kzj kzk kzl kzö lza lzs lzd
lzf lzj lzk lzl lzö öza özs özd özf özj özk özl özö

bad bad bad bad bar bar bar bar gab gab gab gab gib gib gib gib gib
bus bus bus bus bei bei bei bei bub bub bub bub zar zar zar zar zar
zur zur zur zur zum zum zum zum ball ball ball ball rabe rabe rabe
rabe rebe rebe rebe rebe aber aber aber aber jazz jazz jazz jazz jazz
zank zank zank zank zahn zahn zahn zahn zinn zinn zinn zinn tanz tanz
tanz tanz zelt zelt zelt zelt netz netz netz netz nerz nerz nerz nerz
kurz kurz kurz kurz blume blume blume bezug bezug bezug beize beize
beize blitz blitz blitz zunge zunge zunge zange zange zange katze
katze katze jetzt jetzt jetzt krabbe krabbe brezel brezel bregenz
bregenz bezahlen bezahlen bezeugen bezeugen bruzzeln bruzzeln besitzer
besitzer zerbeulen zerbeulen zerberus zerberus barzahlung barzahlung
zauberkunst zauberkunst

als herbert zur bushaltestelle kam fuhr der bus bereits ab
als herbert zur bushaltestelle kam fuhr der bus bereits ab
als herbert zur bushaltestelle kam fuhr der bus bereits ab


der zauberer zeigte heute im zirkuszelt seine kunst die die meisten
leute völlig begeisterte
der zauberer zeigte heute im zirkuszelt seine kunst die die meisten
leute völlig begeisterte

als man den zeugen in den zeugenstand rief zeigte der angeklagte
bereits reue und er bedauerte seine tat
als man den zeugen in den zeugenstand rief zeigte der angeklagte
bereits reue und er bedauerte seine tat

zur halbzeit sagte der trainer den jungen ballartisten einiges aus
seiner erfahrung und als sie dann aufs feld liefen hatten sie genug
mut und selbstvertrauen um einer unnötigen niederlage zu entgehen
zur halbzeit sagte der trainer den jungen ballartisten einiges aus
seiner erfahrung und als sie dann aufs feld liefen hatten sie genug
mut und selbstvertrauen um einer unnötigen niederlage zu entgehen`},{id:10,title:"Lesson 10",description:`Der  Mittelfinger  der  linken  Hand tastet  nach unten zum  'C'.
Achten Sie darauf,  daß das 'C' nicht mit dem Zeigefinger getippt
wird.  Der  Mittelfinger der rechten  Hand greift nach unten  zum
Komma ','.  Der Zeigefinger sollte dabei möglichst am 'J' liegen-
bleiben.`,lesson:`dcd dcd dcd dcd dcd dcd dcd dcd dcd cdc cdc cdc cdc cdc cdc cdc cdc
dcd dcd dcd dcd dcd dcd dcd dcd dcd cdc cdc cdc cdc cdc cdc cdc cdc

ddcc ddcc ddcc ddcc ddcc ddcc ddcc dcdc dcdc dcdc cdcd cdcd cdcd cdcd
ddcc ddcc ddcc ddcc ddcc ddcc ddcc dcdc dcdc dcdc cdcd cdcd cdcd cdcd

k,k k,k k,k k,k k,k k,k k,k k,k k,k ,k, ,k, ,k, ,k, ,k, ,k, ,k, ,k,
k,k k,k k,k k,k k,k k,k k,k k,k k,k ,k, ,k, ,k, ,k, ,k, ,k, ,k, ,k,

kk,, kk,, kk,, kk,, kk,, kk,, kk,, k,k, k,k, k,k, ,k,k ,k,k ,k,k ,k,k
kk,, kk,, kk,, kk,, kk,, kk,, kk,, k,k, k,k, k,k, ,k,k ,k,k ,k,k ,k,k

dca dcs dcd dcf dcj dck dcl dcö aca acs acd acf acj ack acl acö sca
scs scd scf scj sck scl scö fca fcs fcd fcf fcj fck fcl fcö jca jcs
jcd jcf jcj jck jcl jcö kca kcs kcd kcf kcj kck kcl kcö lca lcs lcd
lcf lcj lck lcl lcö öca öcs öcd öcf öcj öck öcl öcö

k,a k,s k,d k,f k,j k,k k,l k,ö a,a a,s a,d a,f a,j a,k a,l a,ö s,a
s,s s,d s,f s,j s,k s,l s,ö d,a d,s d,d d,f d,j d,k d,l d,ö f,a f,s
f,d f,f f,j f,k f,l f,ö j,a j,s j,d j,f j,j j,k j,l j,ö l,a l,s l,d
l,f l,j l,k l,l l,ö ö,a ö,s ö,d ö,f ö,j ö,k ö,l ö,ö

ach, ach, ach, ach, ich, ich, ich, ich, ich, eck, eck, eck, eck, eck,
cis, cis, cis, cis, fach, fach, fach, fach, dach, dach, dach, dach,
dich, dich, dich, dich, mich, mich, mich, mich, auch, auch, auch,
auch, acht, acht, acht, bach, bach, bach, bach, nach, nach, nach,
schi, schi, schi, schi, chef, chef, chef, chef, sache, sache, sache,
schaf, schaf, schaf, macht, macht, macht, krach, krach, krach, recht,
recht, recht, reich, reich, reich, licht, licht, licht, sicht, sicht,
sicht, nicht, nicht, nicht, schön, schön, schön, lachen, lachen,
tausch, tausch, nackt, nackt, acker, acker, höchst, höchst, sichel,
sichel, sicher, sicher, schief, schief, fesch, fesch, schein, schein,
feucht, feucht, scheck, scheck, gleich, gleich, schicht, schicht,
fachbuch, fachbuch, scheckbuch, scheckbuch, schilling, schilling,
sicherlich, sicherlich, sichtschutz, sichtschutz, tauschsachen,
tauschsachen

manchmal ist auch das recht nicht nur eine sache des reichtums
manchmal ist auch das recht nicht nur eine sache des reichtums
manchmal ist auch das recht nicht nur eine sache des reichtums
als ich nach österreich kam, kaufte ich meiner nichte ein einfaches,
aber auch schönes geschenk
als ich nach österreich kam, kaufte ich meiner nichte ein einfaches,
aber auch schönes geschenk
ich möchte die nackten tatsachen nicht einfach aufdecken, da das geld
und die macht der reichen schicht sicherlich ausreichen, um vielleicht
auch noch die richter zu bestechen
ich möchte die nackten tatsachen nicht einfach aufdecken, da das geld
und die macht der reichen schicht sicherlich ausreichen, um vielleicht
auch noch die richter zu bestechen
ich möchte bei meinem chef sicher nicht gleich den eindruck eines
reichen mitarbeiters machen, der ein scheinbar leicht erreichtes
vermögen gemacht hat
ich möchte bei meinem chef sicher nicht gleich den eindruck eines
reichen mitarbeiters machen, der ein scheinbar leicht erreichtes
vermögen gemacht hat`},{id:11,title:"Lesson 11",description:`Der linke Ringfinger tastet nach links oben zum  'W'.  Der rechte
Ringfinger tastet hoch zum 'O'. Die Ringfinger sind am ungeschick-
testen.  Viel  Übung ist zum  Erlernen dieser  beiden Griffe not-
wendig.
Seien Sie konzentriert und ausdauernd !!!`,lesson:`sws sws sws sws sws sws sws sws sws wsw wsw wsw wsw wsw wsw wsw wsw
sws sws sws sws sws sws sws sws sws wsw wsw wsw wsw wsw wsw wsw wsw

ssww ssww ssww ssww ssww ssww ssww swsw swsw swsw swsw wsws wsws wsws
ssww ssww ssww ssww ssww ssww ssww swsw swsw swsw swsw wsws wsws wsws

lol lol lol lol lol lol lol lol lol olo olo olo olo olo olo olo olo
lol lol lol lol lol lol lol lol lol olo olo olo olo olo olo olo olo

lloo lloo lloo lloo lloo lloo lloo lolo lolo lolo lolo olol olol olol
lloo lloo lloo lloo lloo lloo lloo lolo lolo lolo lolo olol olol olol

swa sws swd swf swj swk swl swö awa aws awd awf awj awk awl awö dwa
dws dwd dwf dwj dwk dwl dwö fwa fws fwd fwf fwj fwk fwl fwö jwa jws
jwd jwf jwj jwk jwl jwö kwa kws kwd kwf kwj kwk kwl kwö lwa lws lwd
lwf lwj lwk lwl lwö öwa öws öwd öwf öwj öwk öwl öwö

loa los lod lof loj lok lol loö aoa aos aod aof aoj aok aol aoö soa
sos sod sof soj sok sol soö doa dos dod dof doj dok dol doö foa fos
fod fof foj fok fol foö joa jos jod jof joj jok jol joö koa kos kod
kof koj kok kol koö öoa öos öod öof öoj öok öol öoö

wo wo wo wo wo wo wo wo wo wo wo wo wo wo wo wo wo wo wo wo wo wo wo
lok lok lok los los los was was was wal wal wal weg weg weg wem wem
wem wir wir wir wie wie wie vor vor vor von von von rom rom rom dom
dom dom rot rot rot wut wut wut wall wall wall wade wade wade wabe
wabe wabe wand wand wand wach wach wein wein wein wohl wohl wohl woge
woge woge wort wort fort fort fort dose dose dose hose hose hose rosa
rosa rosa foto foto foto oslo oslo oslo wolga wolga wolke wolke wolle
wolle wonne wonne worte worte womit womit wovon wovon motor motor
motto motto wollen wollen wohnen wohnen obwohl obwohl waggon waggon
vorwort vorwort bewohner bewohner wohnmobil wohnmobil gewohnheit
gewohnheit gewitterwolken gewitterwolken lottogewinn lottogewinn

die bewohner von worms wollten die schwarzen gewitterwolken nicht
wahrhaben
die bewohner von worms wollten die schwarzen gewitterwolken nicht
wahrhaben

obwohl otto noch nicht oft im lotto gewonnen hatte, wollte er sich
wohl aus gewohnheit auch noch ein los der klassenlotterie besorgen
obwohl otto noch nicht oft im lotto gewonnen hatte, wollte er sich
wohl aus gewohnheit auch noch ein los der klassenlotterie besorgen

es war wohl wahnsinnig wichtig, die wahl zu gewinnen, wovon die
gewichtigen worte des wahlwerbers zeugten, obwohl sich die wochenlang
betriebene wahlwerbung noch nicht vollends auswirkte
es war wohl wahnsinnig wichtig, die wahl zu gewinnen, wovon die
gewichtigen worte des wahlwerbers zeugten, obwohl sich die wochenlang
betriebene wahlwerbung noch nicht vollends auswirkte`},{id:12,title:"Lesson 12",description:`Der linke Ringfinger tastet nach unten zum  'X'. Der Anschlag ist
zwar  selten,  aber auch  sehr schwierig.  Der rechte  Ringfinger
tippt den Punkt '.'. Auch dieser Anschlag ist schwierig.
Nur Übung macht den Meister !!!`,lesson:`sxs sxs sxs sxs sxs sxs sxs sxs sxs xsx xsx xsx xsx xsx xsx xsx xsx
sxs sxs sxs sxs sxs sxs sxs sxs sxs xsx xsx xsx xsx xsx xsx xsx xsx

ssxx ssxx ssxx ssxx ssxx ssxx ssxx sxsx sxsx sxsx sxsx xsxs xsxs xsxs
ssxx ssxx ssxx ssxx ssxx ssxx ssxx sxsx sxsx sxsx sxsx xsxs xsxs xsxs

l.l l.l l.l l.l l.l l.l l.l l.l l.l .l. .l. .l. .l. .l. .l. .l. .l.
l.l l.l l.l l.l l.l l.l l.l l.l l.l .l. .l. .l. .l. .l. .l. .l. .l.

ll.. ll.. ll.. ll.. ll.. ll.. ll.. l.l. l.l. l.l. l.l. .l.l .l.l .l.l
ll.. ll.. ll.. ll.. ll.. ll.. ll.. l.l. l.l. l.l. l.l. .l.l .l.l .l.l

sxa sxs sxd sxf sxj sxk sxl sxö axa axs axd axf axj axk axl axö dxa
dxs dxd dxf dxj dxk dxl dxö fxa fxs fxd fxf fxj fxk fxl fxö jxa jxs
jxd jxf jxj jxk jxl jxö kxa kxs kxd kxf kxj kxk kxl kxö lxa lxs lxd
lxf lxj lxk lxl lxö öxa öxs öxd öxf öxj öxk öxl öxö

l.a l.s l.d l.f l.j l.k l.l l.ö a.a a.s a.d a.f a.j a.k a.l a.ö s.a
s.s s.d s.f s.j s.k s.l s.ö d.a d.s d.d d.f d.j d.k d.l d.ö f.a f.s
f.d f.f f.j f.k f.l f.ö j.a j.s j.d j.f j.j j.k j.l j.ö k.a k.s k.d
k.f k.j k.k k.l k.ö ö.a ö.s ö.d ö.f ö.j ö.k ö.l ö.ö

rex. rex. rex. rex. fix. fix. fix. fix. max. max. max. max. axt. axt.
axt. axt. fixe. fixe. fixe. nixe. nixe. nixe. taxe. taxe. taxe. taxi.
taxi. taxi. hexe. hexe. hexe. text. text. text. exil. exil. exil.
exil. faxen. faxen. faxen. texas. texas. texas. mixer. mixer. mixer.
xaver. xaver. xaver. hexer. hexer. hexer. boxer. boxer. boxer. luxus.
luxus. luxus. extra. extra. extra. mexiko. mexiko. examen. examen.
examen. extern. extern. extrem. extrem. textil. textil. texter.
texter. oxford. oxford. existenz. existenz. exekutive. exekutive.
fixkosten. fixkosten. taxistand. taxistand. extrabonus. extrabonus.
boxweltmeister. boxweltmeister.

max fixierte den boxer aus mexico extrem lang.
max fixierte den boxer aus mexico extrem lang.
max fixierte den boxer aus mexico extrem lang.

der taxilenker aus texas ging ins exil nach mexico.
der taxilenker aus texas ging ins exil nach mexico.
der taxilenker aus texas ging ins exil nach mexico.
das exekutivorgan fand xaver in einem extrem luxuriösen
textilkaufhaus in oxford

das exekutivorgan fand xaver in einem extrem luxuriösen
textilkaufhaus in oxford

das exekutivorgan fand xaver in einem extrem luxuriösen
textilkaufhaus in oxford`},{id:13,title:"Lesson 13",description:`Der kleine Finger der linken Hand spreizt nach oben zum  'Q', der
kleine Finger der rechten Hand entsprechend zum 'P'. Wichtig ist,
daß Sie nie auf die Tasten schauen. Schreiben Sie anfangs langsam
und möglichst fehlerfrei !!!`,lesson:`aqa aqa aqa aqa aqa aqa aqa aqa aqa qaq qaq qaq qaq qaq qaq qaq qaq
aqa aqa aqa aqa aqa aqa aqa aqa aqa qaq qaq qaq qaq qaq qaq qaq qaq

aaqq aaqq aaqq aaqq aaqq aaqq aaqq aqaq aqaq aqaq aqaq qaqa qaqa qaqa
aaqq aaqq aaqq aaqq aaqq aaqq aaqq aqaq aqaq aqaq aqaq qaqa qaqa qaqa

öpö öpö öpö öpö öpö öpö öpö öpö öpö pöp pöp pöp pöp pöp pöp pöp pöp
öpö öpö öpö öpö öpö öpö öpö öpö öpö pöp pöp pöp pöp pöp pöp pöp pöp

ööpp ööpp ööpp ööpp ööpp ööpp ööpp öpöp öpöp öpöp öpöp pöpö pöpö pöpö
ööpp ööpp ööpp ööpp ööpp ööpp ööpp öpöp öpöp öpöp öpöp pöpö pöpö pöpö

aqa aqs aqd aqf aqj aqk aql aqö sqa sqs sqd sqf sqj sqk sql sqö dqa
dqs dqd dqf dqj dqk dql dqö fqa fqs fqd fqf fqj fqk fql fqö jqa jqs
jqd jqf jqj jqk jql jqö kqa kqs kqd kqf kqj kqk kql kqö lqa lqs lqd
lqf lqj lqk lql lqö öqa öqs öqd öqf öqj öqk öql öqö

öpa öps öpd öpf öpj öpk öpl öpö apa aps apd apf apj apk apl apö spa
sps spd spf spj spk spl spö dpa dps dpd dpf dpj dpk dpl dpö fpa fps
fpd fpf fpj fpk fpl fpö jpa jps jpd jpf jpj jpk jpl jpö kpa kps kpd
kpf kpj kpk kpl kpö lpa lps lpd lpf lpj lpk lpl lpö

per per per per pur pur pur pur pub pub pub pub pol pol pol pol pol
opa opa opa opa tip tip tip tip qual qual qual qual quer quer quer
quer quiz quiz quiz quiz aqua aqua aqua aqua papa papa papa papa
paar paar paar paar opal opal opal opal lupe lupe lupe lupe kopf kopf
kopf kopf jeep jeep jeep jeep quasi quasi quasi quarz quarz quarz
quell quell quell quint quint quint paris paris paris kappe kappe
kappe rappe rappe rappe pappe pappe pappe puppe puppe puppe suppe
suppe suppe kuppe kuppe kuppe trupp trupp trupp qualle qualle quelle
quelle bequem bequem klippe klippe kippen kippen etappe etappe
prinzip prinzip papagei papagei puppenspiel puppenspiel quizspiel
quizspiel querrippe querrippe querkopf querkopf quarzlampe quarzlampe
hauptquelle hauptquelle qualifikationsetappe qualifikationsetappe

die pumpe pumpte quasi das qualitativ hochwertige quellwasser quer
durch die pampas.
die pumpe pumpte quasi das qualitativ hochwertige quellwasser quer
durch die pampas.
die pumpe pumpte quasi das qualitativ hochwertige quellwasser quer
durch die pampas.

der papagei plapperte quasi puren quatsch, aber das publikum
applaudierte.
der papagei plapperte quasi puren quatsch, aber das publikum
applaudierte.
der papagei plapperte quasi puren quatsch, aber das publikum
applaudierte.`},{id:14,title:"Lesson 14",description:`Mit dem kleinen  Finger der  linken Hand  tasten Sie hinunter zum
'Y',  mit dem kleinen  Finger der rechten Hand schreiben  Sie den
Mittelstrich.  Zurückfedern in die Grundstellung ist nach wie vor
sehr wichtig !!!`,lesson:`aya aya aya aya aya aya aya aya aya yay yay yay yay yay yay yay yay
aya aya aya aya aya aya aya aya aya yay yay yay yay yay yay yay yay

aayy aayy aayy aayy aayy aayy aayy ayay ayay ayay ayay yaya yaya yaya
aayy aayy aayy aayy aayy aayy aayy ayay ayay ayay ayay yaya yaya yaya

ö-ö ö-ö ö-ö ö-ö ö-ö ö-ö ö-ö ö-ö ö-ö -ö- -ö- -ö- -ö- -ö- -ö- -ö- -ö-
ö-ö ö-ö ö-ö ö-ö ö-ö ö-ö ö-ö ö-ö ö-ö -ö- -ö- -ö- -ö- -ö- -ö- -ö- -ö-

öö-- öö-- öö-- öö-- öö-- öö-- öö-- ö-ö- ö-ö- ö-ö- ö-ö- -ö-ö -ö-ö -ö-ö
öö-- öö-- öö-- öö-- öö-- öö-- öö-- ö-ö- ö-ö- ö-ö- ö-ö- -ö-ö -ö-ö -ö-ö

aya ays ayd ayf ayj ayk ayl ayö sya sys syd syf syj syk syl syö dya
dys dyd dyf dyj dyk dyl dyö fya fys fyd fyf fyj fyk fyl fyö jya jys
jyd jyf jyj jyk jyl jyö kya kys kyd kyf kyj kyk kyl kyö lya lys lyd
lyf lyj lyk lyl lyö öya öys öyd öyf öyj öyk öyl öyö

ö-a ö-s ö-d ö-f ö-j ö-k ö-l ö-ö a-a a-s a-d a-f a-j a-k a-l a-ö s-a
s-s s-d s-f s-j s-k s-l s-ö d-a d-s d-d d-f d-j d-k d-l d-ö f-a f-s
f-d f-f f-j f-k f-l f-ö j-a j-s j-d j-f j-j j-k j-l j-ö k-a k-s k-d
k-f k-j k-k k-l k-ö l-a l-s l-d l-f l-j l-k l-l l-ö

sym-bol sym-bol sym-bol sym-bol sym-bol sym-bol sym-bol sym-bol
py-ra-mi-de py-ra-mi-de py-ra-mi-de py-ra-mi-de py-ra-mi-de
hy-per-bel hy-per-bel hy-per-bel hy-per-bel hy-per-bel hy-per-bel
py-ro-ma-nie py-ro-ma-nie py-ro-ma-nie py-ro-ma-nie py-ro-ma-nie

typ-typ-typ-typ yen-yen-yen-yen yao-yao-yao-yao yin-yin-yin-yin-yin
wye-wye-wye-wye dyn-dyn-dyn-dyn asyl-asyl-asyl-asyl lyra-lyra-lyra-
lyra type-type-type-type york-york-york-york yard-yard-yard-yard
ybbs-ybbs-ybbs-ybbs zyan-zyan-zyan-zyan lyon-lyon-lyon-lyon myom-
myom-myom-myom nylon-nylon-nylon lyrik-lyrik-lyrik lydia-lydia-lydia
hydra-hydra-hydra yukon-yukon-yukon pyrit-pyrit-pyrit symbol-symbol
yankee-yankee mylady-mylady mystik-mystik mythos-mythos syntax-
syntax synode-synode xylophon-xylophon synagoge-synagoge symmetrie-
symmetrie sympathie-sympathie symphonie-symphonie hydrant-hydrant
hydraulik-hydraulik hydrokultur-hydrokultur hygiene-hygiene hysterie-
hysterie hyperbel-hyperbel hypothese-hypothese gymnastik-gymnastik
dynamit-dynamit dynastie-dynastie pythagoras-pythagoras pyromanie-
pyromanie pyramide-pyramide
lydia tanzte wie in hypnose zum rhythmus der musik
lydia tanzte wie in hypnose zum rhythmus der musik
lydia tanzte wie in hypnose zum rhythmus der musik

pyramide - hyperbel - pyramide sind typische begriffe, die bereits
pythagoras kannte, und die auch jeder gymnasiast kennen sollte
pyramide - hyperbel - pyramide sind typische begriffe, die bereits
pythagoras kannte, und die auch jeder gymnasiast kennen sollte
pyramide - hyperbel - pyramide sind typische begriffe, die bereits
pythagoras kannte, und die auch jeder gymnasiast kennen sollte
die lady aus new york war völlig hypnotisiert, als sie die hypothese
des herrn mayr hörte

die lady aus new york war völlig hypnotisiert, als sie die hypothese
des herrn mayr hörte

die lady aus new york war völlig hypnotisiert, als sie die hypothese
des herrn mayr hörte`},{id:15,title:"Lesson 15",description:`Der kleine Finger der rechten Hand schreibt das 'Ä' und das 'Ü'.
Die restlichen  Finger sollten dabei  möglichst auf ihren  Tasten
bleiben.  Schreiben Sie alle Übungen jeweils bis zum Ende. Nur so
läßt sich ein Lernerfolg garantieren !!!`,lesson:`öäö öäö öäö öäö öäö öäö öäö öäö öäö äöä äöä äöä äöä äöä äöä äöä äöä
öäö öäö öäö öäö öäö öäö öäö öäö öäö äöä äöä äöä äöä äöä äöä äöä äöä

ööää ööää ööää ööää ööää ööää ööaa öäöä öäöä öäöä öäöä äöäö äöäö äö äö
ööää ööää ööää ööää ööää ööää ööaa öäöä öäöä öäöä öäöä äöäö äöäö äö äö

öüö öüö öüö öüö öüö öüö öüö öüö öüö üöü üöü üöü üöü üöü üöü üöü üöü
öüö öüö öüö öüö öüö öüö öüö öüö öüö üöü üöü üöü üöü üöü üöü üöü üöü

ööüü ööüü ööüü ööüü ööüü ööüü ööaa öüöü öüöü öüöü öüöü üöüö üöüö üö üö
ööüü ööüü ööüü ööüü ööüü ööüü ööaa öüöü öüöü öüöü öüöü üöüö üöüö üö üö

üüüüüüüüüüüüüüüüüüüüüüüüüüüüüü ü ü ü ü ü ü ü ü ü üü üü üü üü üü üü üü
üüööüüööüüöö üü öö üü öö üü öö üöüöüöüö üö üö üö üö üö üö üö üö üö üö

öäa öäs öäd öäf öäj öäk öäl öäö aäa aäs aäd aäf aäj aäk aäl aäö säa
säs säd säf säj säk säl säö däa däs däd däf däj däk däl däö fäa fäs
fäd fäf fäj fäk fäl fäö jäa jäs jäd jäf jäj jäk jäl jäö käa käs käd
käf käj käk käl käö läa läs läd läf läj läk läl läö

öüa öüs öüd öüf öüj öük öül öüö aüa aüs aüd aüf aüj aük aül aüö süa
süs süd süf süj sük sül süö düa düs düd düf düj dük dül düö füa füs
füd füf füj fük fül füö jüa jüs jüd jüf jüj jük jül jüö küa küs küd
küf küj kük kül küö lüa lüs lüd lüf lüj lük lül lüö

jäh jäh jäh jäh wär wär wär wär mär mär mär mär süd süd süd süd süd
für für für für kür kür kür kür müd müd müd müd übe übe übe übe übe
käse käse käse käse wäre wäre wäre wäre spät spät spät spät kühl kühl
kühl kühl früh früh früh früh rüde rüde rüde rüde müde müde müde müde
grün grün grün grün trüb trüb trüb trüb übel übel übel übel über über
über über büro büro büro büro fäden fäden fäden gerät gerät gerät jä-
ger jäger jäger äpfel äpfel äpfel gäste gäste gäste länge länge länge
führt führt führt würde würde würde kästen kästen späher späher prü-
fer prüfer qualität qualität täglich täglich geschäft geschäft ver-
spätung verspätung fräulein fräulein häufigkeit häufigkeit mündlich
mündlich berühmt berühmt glückwünsche glückwünsche

die bären wären für alle jäger zu gefährlich
die bären wären für alle jäger zu gefährlich
die bären wären für alle jäger zu gefährlich
die geschäftsleute hätten für die qualität der äpfel und anderer
früchte sorgen müssen
die geschäftsleute hätten für die qualität der äpfel und anderer
früchte sorgen müssen
die geschäftsleute hätten für die qualität der äpfel und anderer
früchte sorgen müssen

die fünf mädchen führten die fünfundfünfzig berühmten gäste durch die
überfüllten räume

die fünf mädchen führten die fünfundfünfzig berühmten gäste durch die
überfüllten räume
die fünf mädchen führten die fünfundfünfzig berühmten gäste durch die
überfüllten räume`},{id:16,title:"Lesson 16",description:`Die  Umschaltung auf  Großbuchstaben machen  Sie mit den  kleinen
Fingern.  Verwenden Sie  dabei immer die Hand,  die den Großbuch-
staben  nicht schreiben muß.  Das  Anschlagen und  Loslassen  der
SHIFT-Taste ist ein eigener Takt.  Das  '+'  wird mit dem kleinen
Finger der rechten Hand getippt.`,lesson:`Ja Ja Ja Ja Ja Ja Ja Ja Ja Ja Ja Ja Ja Ja Ja Ja Ja Ja Ja Ja Ja Ja Ja
Fö Fö Fö Fö Fö Fö Fö Fö Fö Fö Fö Fö Fö Fö Fö Fö Fö Fö Fö Fö Fö Fö Fö
Ja Fö Ja Fö Ja Fö Ja Fö Ja Fö Ja Fö Ja Fö Ja Fö Ja Fö Ja Fö Ja Fö

Ha Ha Ha Ha Ha Ha Ha Ha Ha Ha Ha Ha Ha Ha Ha Ha Ha Ha Ha Ha Ha Ha Ha
Sä Sä Sä Sä Sä Sä Sä Sä Sä Sä Sä Sä Sä Sä Sä Sä Sä Sä Sä Sä Sä Sä Sä
Ha Sä Ha Sä Ha Sä Ha Sä Ha Sä Ha Sä Ha Sä Ha Sä Ha Sä Ha Sä Ha Sä

Jagd Jagd Jagd Jagd Jagd Jagd Jagd Jagd Jagd Jagd Jagd Jagd Jagd Jagd
Föhn Föhn Föhn Föhn Föhn Föhn Föhn Föhn Föhn Föhn Föhn Föhn Föhn Föhn
Jagd Föhn Jagd Föhn Jagd Föhn Jagd Föhn Jagd Föhn Jagd Föhn Jagd Föhn

Kalk Kalk Kalk Kalk Kalk Kalk Kalk Kalk Kalk Kalk Kalk Kalk Kalk Kalk
Fall Fall Fall Fall Fall Fall Fall Fall Fall Fall Fall Fall Fall Fall
Kalk Fall Kalk Fall Kalk Fall Kalk Fall Kalk Fall Kalk Fall Kalk Fall

Hase Last Hase Last Hase Last Hase Last Hase Last Hase Last Hase Last
Dose Soll Dose Soll Dose Soll Dose Soll Dose Soll Dose Soll Dose Soll

Damm Damm Damm Damm Damm Damm Damm Damm Damm Damm Damm Damm Damm
Käse Käse Käse Käse Käse Käse Käse Käse Käse Käse Käse Käse Käse
Saum Saum Saum Saum Saum Saum Saum Saum Saum Saum Saum Saum Saum
Kopf Kopf Kopf Kopf Kopf Kopf Kopf Kopf Kopf Kopf Kopf Kopf Kopf

Alle, Saal, Dank, Fall, Jazz, Land, Kalk, Ösen, Esel, Igel, Rede,
Usus, Tanz, Nerz, Gast, Hand, Vase, Mund, Zaun, Bann, Chef, Wall,
Oslo, Xylo, Qual, Paar, Yard, Übel, Ähre.
Alle, Saal, Dank, Fall, Jazz, Land, Kalk, Ösen, Esel, Igel, Rede,
Usus, Tanz, Nerz, Gast, Hand, Vase, Mund, Zaun, Bann, Chef, Wall,
Oslo, Xylo, Qual, Paar, Yard, Übel, Ähre.
Alle, Saal, Dank, Fall, Jazz, Land, Kalk, Ösen, Esel, Igel, Rede,
Usus, Tanz, Nerz, Gast, Hand, Vase, Mund, Zaun, Bann, Chef, Wall,
Oslo, Xylo, Qual, Paar, Yard, Übel, Ähre.

ö+ö ö+ö ö+ö ö+ö ö+ö ö+ö ö+ö ö+ö ö+ö +ö+ +ö+ +ö+ +ö+ +ö+ +ö+ +ö+ +ö+
ö+ö ö+ö ö+ö ö+ö ö+ö ö+ö ö+ö ö+ö ö+ö +ö+ +ö+ +ö+ +ö+ +ö+ +ö+ +ö+ +ö+

öö++ öö++ öö++ öö++ öö++ öö++ öö++ ö+ö+ ö+ö+ ö+ö+ ö+ö+ +ö+ö +ö+ö +ö+ö
öö++ öö++ öö++ öö++ öö++ öö++ öö++ ö+ö+ ö+ö+ ö+ö+ ö+ö+ +ö+ö +ö+ö +ö+ö

ö+a ö+s ö+d ö+f ö+j ö+k ö+l ö+ö a+a a+s a+d a+f a+j a+k a+l a+ö s+a
s+s s+d s+f s+j s+k s+l s+ö d+a d+s d+d d+f d+j d+k d+l d+ö f+a f+s
f+d f+f f+j f+k f+l f+ö j+a j+s j+d j+f j+j j+k j+l j+ö k+a k+s k+d
k+f k+j k+k k+l k+ö l+a l+s l+d l+f l+j l+k l+l l+ö

Eins + Zwei + Drei + Vier + Fünf + Sechs + Sieben + Acht + Neun +
Zehn + Elf + Zwölf + Dreizehn + Vierzehn + Fünfzehn + Sechzehn +
Siebzehn + Achtzehn + Neunzehn + Zwanzig ergibt Zweihundertundzehn.


Eins + Zwei + Drei + Vier + Fünf + Sechs + Sieben + Acht + Neun +
Zehn + Elf + Zwölf + Dreizehn + Vierzehn + Fünfzehn + Sechzehn +
Siebzehn + Achtzehn + Neunzehn + Zwanzig ergibt Zweihundertundzehn.`},{id:17,title:"Lesson 17",description:`Die  Ziffern  müssen mit  viel  Ausdauer und  Konzentration geübt
werden.   Achten  Sie  weiterhin  auf  genaues  und   fehlerloses
Schreiben, schauen Sie dabei aber nie auf die Tastatur !!!`,lesson:`d4d d4d d4d d4d d4d d4d d4d d4d d4d d4d d4d d4d d4d d4d d4d d4d d4d
a4a a4s a4d a4f a4j a4k a4l a4ö s4a s4s s4d s4f s4j s4k s4l s4ö d4a
d4s d4d d4f d4j d4k d4l d4ö f4a f4s f4d f4f f4j f4k f4l f4ö j4a j4s
j4d j4f j4j j4k j4l j4ö k4a k4s k4d k4f k4j k4k k4l k4ö l4a l4s l4d
l4f l4j l4k l4l l4ö ö4a ö4s ö4d ö4f ö4j ö4k ö4l ö4ö

k9k k9k k9k k9k k9k k9k k9k k9k k9k k9k k9k k9k k9k k9k k9k k9k k9k
a9a a9s a9d a9f a9j a9k a9l a9ö s9a s9s s9d s9f s9j s9k s9l s9ö d9a
d9s d9d d9f d9j d9k d9l d9ö f9a f9s f9d f9f f9j f9k f9l f9ö j9a j9s
j9d j9f j9j j9k j9l j9ö k9a k9s k9d k9f k9j k9k k9l k9ö l9a l9s l9d
l9f l9j l9k l9l l9ö ö9a ö9s ö9d ö9f ö9j ö9k ö9l ö9ö

f5f f5f f5f f5f f5f f5f f5f f5f f5f f5f f5f f5f f5f f5f f5f f5f f5f
a5a a5s a5d a5f a5j a5k a5l a5ö s5a s5s s5d s5f s5j s5k s5l s5ö d5a
d5s d5d d5f d5j d5k d5l d5ö f5a f5s f5d f5f f5j f5k f5l f5ö j5a j5s
j5d j5f j5j j5k j5l j5ö k5a k5s k5d k5f k5j k5k k5l k5ö l5a l5s l5d
l5f l5j l5k l5l l5ö ö5a ö5s ö5d ö5f ö5j ö5k ö5l ö5ö

j8j j8j j8j j8j j8j j8j j8j j8j j8j j8j j8j j8j j8j j8j j8j j8j j8j
a8a a8s a8d a8f a8j a8k a8l a8ö s8a s8s s8d s8f s8j s8k s8l s8ö d8a
d8s d8d d8f d8j d8k d8l d8ö f8a f8s f8d f8f f8j f8k f8l f8ö j8a j8s
j8d j8f j8j j8k j8l j8ö k8a k8s k8d k8f k8j k8k k8l k8ö l8a l8s l8d
l8f l8j l8k l8l l8ö ö8a ö8s ö8d ö8f ö8j ö8k ö8l ö8ö

f6f f6f f6f f6f f6f f6f f6f f6f f6f f6f f6f f6f f6f f6f f6f f6f f6f
ff66 ff66 ff66 ff66 ff66 ff66 ff66 f6f6 f6f6 f6f6 f6f6 6f6f 6f6f 6f6f

j7j j7j j7j j7j j7j j7j j7j j7j j7j j7j j7j j7j j7j j7j j7j j7j j7j
jj77 jj77 jj77 jj77 jj77 jj77 jj77 j7j7 j7j7 j7j7 j7j7 7j7j 7j7j 7j7j

a6a a6s a6d a6f a6j a6k a6l a6ö s6a s6s s6d s6f s6j s6k s6l s6ö d6a
d6s d6d d6f d6j d6k d6l d6ö f6a f6s f6d f6f f6j f6k f6l f6ö j6a j6s
j6d j6f j6j j6k j6l j6ö k6a k6s k6d k6f k6j k6k k6l k6ö l6a l6s l6d
l6f l6j l6k l6l l6ö ö6a ö6s ö6d ö6f ö6j ö6k ö6l ö6ö
a7a a7s a7d a7f a7j a7k a7l a7ö s7a s7s s7d s7f s7j s7k s7l s7ö d7a
d7s d7d d7f d7j d7k d7l d7ö f7a f7s f7d f7f f7j f7k f7l f7ö j7a j7s
j7d j7f j7j j7k j7l j7ö k7a k7s k7d k7f k7j k7k k7l k7ö l7a l7s l7d
l7f l7j l7k l7l l7ö ö7a ö7s ö7d ö7f ö7j ö7k ö7l ö7ö

s3s s3s s3s s3s s3s s3s s3s s3s s3s s3s s3s s3s s3s s3s s3s s3s s3s
ss33 ss33 ss33 ss33 ss33 ss33 ss33 s3s3 s3s3 s3s3 s3s3 s3s3 s3s3 s3s3

l0l l0l l0l l0l l0l l0l l0l l0l l0l 0l0 0l0 0l0 0l0 0l0 0l0 0l0 0l0
ll00 ll00 ll00 ll00 ll00 ll00 ll00 l0l0 l0l0 l0l0 l0l0 l0l0 l0l0 l0l0

a3a a3s a3d a3f a3j a3k a3l a3ö s3a s3s s3d s3f s3j s3k s3l s3ö d3a
d3s d3d d3f d3j d3k d3l d3ö f3a f3s f3d f3f f3j f3k f3l f3ö j3a j3s
j3d j3f j3j j3k j3l j3ö k3a k3s k3d k3f k3j k3k k3l k3ö l3a l3s l3d
l3f l3j l3k l3l l3ö ö3a ö3s ö3d ö3f ö3j ö3k ö3l ö3ö

a0a a0s a0d a0f a0j a0k a0l a0ö s0a s0s s0d s0f s0j s0k s0l s0ö d0a
d0s d0d d0f d0j d0k d0l d0ö f0a f0s f0d f0f f0j f0k f0l f0ö j0a j0s
j0d j0f j0j j0k j0l j0ö k0a k0s k0d k0f k0j k0k k0l k0ö l0a l0s l0d
l0f l0j l0k l0l l0ö ö0a ö0s ö0d ö0f ö0j ö0k ö0l ö0ö
a2a a2a a2a a2a a2a a2a a2a a2a a2a 2a2 2a2 2a2 2a2 2a2 2a2 2a2 2a2
aa22 aa22 aa22 aa22 aa22 aa22 aa22 a2a2 a2a2 a2a2 a2a2 a2a2 a2a2 a2a2

a1a a1a a1a a1a a1a a1a a1a a1a a1a 1a1 1a1 1a1 1a1 1a1 1a1 1a1 1a1
aa11 aa11 aa11 aa11 aa11 aa11 aa11 a1a1 a1a1 a1a1 a1a1 a1a1 a1a1 a1a1

a2a a2a a2d a2f a2j a2k a2l a2ö s2a s2s s2d s2f s2j s2k s2l s2ö d2a
d2s d2d d2f d2j d2k d2l d2ö f2a f2s f2d f2f f2j f2k f2l f2ö j2a j2s
j2d j2f j2j j2k j2l j2ö k2a k2s k2d k2f k2j k2k k2l k2ö l2a l2s l2d
l2f l2j l2k l2l l2ö ö2a ö2s ö2d ö2f ö2j ö2k ö2l ö2ö
a1a a1s a1d a1f a1j a1k a1l a1ö s1a s1s s1d s1f s1j s1k s1l s1ö d1a
d1s d1d d1f d1j d1k d1l d1ö f1a f1s f1d f1f f1j f1k f1l f1ö j1a j1s
j1d j1f j1j j1k j1l j1ö k1a k1s k1d k1f k1j k1k k1l k1ö l1a l1s l1d
l1f l1j l1k l1l l1ö ö1a ö1s ö1d ö1f ö1j ö1k ö1l ö1ö
ößö ößö ößö ößö ößö ößö ößö ößö ößö ßöß ßöß ßöß ßöß ßöß ßöß ßöß ßöß
öößß öößß öößß öößß öößß öößß öößß ößöß ößöß ößöß ößöß ößöß ößöß ößöß
aßa aßa aßd aßf aßj aßk aßl aßö sßa sßs sßd sßf sßj sßk sßl sßö dßa
dßs dßd dßf dßj dßk dßl dßö fßa fßs fßd fßf fßj fßk fßl fßö jßa jßs
jßd jßf jßj jßk jßl jßö kßa kßs kßd kßf kßj kßk kßl kßö lßa lßs lßd
lßf lßj lßk lßl lßö ößa ößs ößd ößf ößj ößk ößl ößö

1+2+3+4+5+6+7+8+9+10+11+12+13+14+15+16+17+18+19+20 = 210

In 1 Stunde hatten die 3 Bergsteiger den 1420 m hohen Berg bestiegen.

Die 32 Schüler der 3. Klasse der HS 7 waren vom 21. 5. bis zum 28. 5.
1988 in Wien.

Von den 3 455 DM, die Herr Mayr im Februar verdiente, mußte er am 3.
250 DM, am 13. weitere 250 DM und am 23. noch einmal 250 DM für die
Rückzahlung eines Kredits ausgeben, den er am 15. 11. des Vorjahres
aufgenommen hatte.

Die Firma Taylor & Son konnte heuer den Umsatz um 14% gegenüber dem
Vorjahr (1991) steigern. (Dies entspricht mit 45000 DM dem gesetzten
Ziel!)
"1991 war ein gutes Jahr" gab der Geschäftsleiter zu, "aber hätten
wir nicht noch mehr Gewinn machen können ?" fragte er seine 15 Mitar-
beiter.`},{id:18,title:"Lesson 18",description:"Geschichte",lesson:`Sieben Männer - Joe, Jim, John, Jeff, Jack, Jonathan und Jeremias -
treffen sich oft in einer Bar. Der 1. kommt täglich, der 2. jeden 2.
Tag, der 3. jeden 3. Tag usw. "Sollte ich euch wieder einmal alle
zusammen hier sehen", sagt der Wirt, "dann gebe ich eine Runde aus."
Er glaubt nämlich, daß dies ohnehin nicht mehr eintreten wird. Hat er
recht?




Ein alter Araber hinterläßt bei seinem Tod den drei Söhnen 11 Kame-
le. Man findet ein Testament des Alten, in dem bestimmt wird, daß der
älteste Sohn die Hälfte, der zweitälteste ein Viertel und der jüngste
ein Sechstel der Kamele erben soll. Da es den Söhnen unmöglich ist,
die Aufteilung nach dem Willen des Vaters durchzuführen, fragen sie
ihren weisen Nachbarn um Rat. Dieser löst die Aufgabe so: Er stellt
sein eigenes Kamel zu den 11 aufzuteilenden dazu und übergibt dem
ältesten Sohn, dem Testament entsprechend, 6 Kamele, dem zweiten 3
und dem jüngsten 2 Kamele. Das übrigbleibende zwölfte Kamel führt er
wieder nach Hause.
Was sagst du zu dieser Aufteilung? Ist der Wille des Vaters genau er-
füllt?








Sicher,- einen Vierkantstab zu'nem Schlips biegen, kann nicht jeder.
Dazu gehört ein ordentlicher Bizeps und auch eine gewisse Stier-
nackigkeit. Aber im grunde genommen, was ist das schon? Muskeln hat
ein Ochse auch. Auf den Kopf kommt es an, auf den Kopf. Also wollen
wir beweisen, daß wir einen haben. Und spassigerweise beweisen wir es
an eben diesem Vierkantstab. Gebt mal gut acht: Als wir nämlich den
Muskelmax fragten, wie schwer denn sein Vierkantstab sei, gab er zur
Antwort: "Er wiegt 4 Kilogramm und die Hälfte seines Gesamtgewichts!"
Na, das war eine Nuss! Wir haben es dann aber doch herausbekommen,
wieviel Kilogramm der Vierkantstab insgesamt wiegt. Nämlich wieviel?
Ein Diener wird von seinem Herrn in die Stadt geschickt, um 8 Mass
Wein zu holen. Auf dem Rückweg begegnet ihm ein anderer Diener, der
für seinen Herrn gleichfalls Wein holen soll.
"Du wirst keinen mehr bekommen", meinte der erste,"da überall schon
geschlossen ist!"
Da bittet der zweite Diener die 8 Mass Wein mit ihm zu teilen.
"Gerne", sagte der erste,"aber wie willst du aus einem 8-masskrug die
Hälfte herausnehmen? Du hast ja selbst nur einen Krug für 5 Mass und
einen für 3 Mass bei dir!"

"Das werden wir gleich haben" lächelte der andere, und es gelang ihm
tatsächlich, allein mit Hilfe dieser 3 Gefässe durch Umschütten die
genaue Teilung einwandfrei durchzuführen. Nämlich wie?







Von Euklid stammt die folgende Aufgabe. Sie ist, wie es sich für die
damalige Zeit gehört, in Versen geschrieben:
Esel und Maultier schritten mit Säcken beladen des Weges. Unter dem
Drucke der schweren Last stöhnte und seufzte der Esel. Das Maultier
bemerkte es und sprach zu dem kummerbeladenen Gefährten: "Alterchen,
sag, was weinst du und jammerst fast wie ein Mägdlein? Doppelt so
viel wie du trüg ich, gäbst einen Sack du mir; nähmst du mir einen,
so trügen wir dann erst beide dasselbe!" - alsdann, scharfer Denker,
sag, wieviel hat jeder getragen?

2 Schnecken wollten um die Wette eine Treppe mit 7 Stufen hoch-
klettern. Nach 1 Stunde und 43 Minuten hatte es die eine geschafft;
die andere dagegen brauchte insgesamt 103 Minuten, und dennoch kamen
beide zur gleichen Zeit auf der 7. Stufe an. Wer kann dieses Wunder
erklären?





Im Flohzirkus ist der Teufel los. Der Dompteur hat die Übersicht ver-
loren, die lieben Tierchen wimmeln durcheinander und wollen sich
nicht zählen lassen. "Jaromir!" schreit der Dompteur und starrt durch
seine Lupe. "Sprich, wieviel seid ihr?" Doch Jaromir, der Flohkönig,
hat seinen bockigen Tag. - "Rate doch!" antwortet er. - "Vielleicht
100?" fragt der Dompteur ins Blaue. - "Nein. Aber wenn du unsere Zahl
verdoppelst, die Hälfte und ein Viertel unserer Zahl und dich selbst
auch noch dazuzählst, dann kommst du auf genau 100."


Bei einem Sturm knickte der 9 Meter hohe Fahnenmast vor der Lotsen-
station um. Die Spitze des Mastes berührte gerade eben die Erde, so
daß ein Dreieck entstand, dessen Grundseite 3 Meter lang war. Sinnend
stand der Lotse vor dem Gebilde. "Was meinst du", sagte er zu seinem
Kollegen, "können wir wenigstens noch halbmast flaggen?". In welcher
Höhe wurde der Mast geknickt?




Sie fährt nicht schnell, die schwäbische Eisenbahn, dafür aber
gleichmäßig. Schnaufend und quietschend zuckelt sie einmal am Tag von
Spätzlingen über Schaffheim nach Schwäbisch Ruh, und wenn alles
klappt, kann man sogar schon am nächsten Tag mit ihr wieder zurück-
fahren. Eines Tages stiegen auch Andreas und Ulrike in Spätzlingen
ein, um nach Schwäbisch Ruh zu fahren. Nach 20 Minuten Fahrt erschien
der Schaffner. "Herr Schaffner", sagte Ulrike, "geht es denn wirklich
nicht ein bißchen schneller?" - "Leider nein", antwortete dieser ge-
mütlich. "Aber wir haben ja schon ein schönes Stückchen geschafft.
Bis Spätzlingen ist es jetzt genau halb so weit wie von hier nach
Schaffheim." 50 Kilometer hinter Schaffheim erschien der Mann zum 2.
Mal. "Na, Kinder, jetzt ist es nach Schwäbisch Ruh nur noch halb so
weit wie von hier nach Schaffheim. In einer Stunde sind wir da." -
"Vielen Dank!" sagte Andreas. "Jetzt wissen wir endlich, wie weit es
von Spätzlingen nach Schwäbisch Ruh ist."





Ein Reisender ist auf halber Wegstrecke eingeschlafen. Ta-tam, ta-
tam, ta-tam...es gibt kein besseres Schlafmittel als den Rhythmus
eines über die Schienen ratternden Zuges. Der Reisende schläft, bis
er (und jetzt scharf aufpassen und notfalls zweimal lesen!) noch die
Hälfte der Entfernung vor sich hat, die er bereits zurückgelegt
hatte, als er zu träumen begann. Welchen Teil der Reise hat dieser
Mann verschlafen?



Auf dem Kaminsims in der Eingangshalle des Landhauses stand das
Porträt eines würdigen älteren Herrn. "Wer ist das?" fragte eine
Bekannte die Dame des Hauses. "Ach", sagte die Frau, "die Mutter
dieses Mannes war die Schwiegermutter meiner Mutter..." Es dauerte
eine Zeitlang, bis die Bekannte herausgebracht hatte, in welcher
Beziehung dieser Mann zu der Frau stand. Zerbrich dir auch ein wenig
den Kopf!



Ein Zahnarzt kauft für sein Wartezimmer einen neuen Tisch und einen
neuen Stuhl. Der Tisch kostet 2000 Schilling mehr als der Stuhl, und
der Zahnarzt muß im ganzen 2500 Schilling bezahlen. Wieviel kostet
der Stuhl?






Ein Bauer merkt, daß seine Kuh und seine Ziege innerhalb von 45 Tagen
alles Gras von seiner Weide fressen, während die Kuh gemeinsam mit
der Gans 60 Tage dazu benötigt. Weil er außerdem festgestellt hat,
daß die Gans und die Ziege zusammen dafür 90 Tage brauchen, will er
wissen, wie lange die drei Tiere miteinander weiden müssen, um die
ganze Wiese kahlzufressen. Wir gehen davon aus, daß sehr schlechtes
Wetter herrscht und das Gras nicht nachwächst.



Monika und Bettina warten mit Onkel Max auf den Zug. "Wie alt bist du
denn jetzt?" fragt Onkel Max Monika. "Ich bin 3 Jahre jünger als
Bettina", antwortet Monika, "aber in 6 Jahren ist Bettina doppelt so
alt wie ich heute." Onkel Max braucht eine ganze Weile, bis er her-
ausbringt, wie alt die beiden Mädchen sind. Schaffst du es schneller?





12 Einschillingmarken ergeben ein Dutzend. Wieviele Vierschilling-
marken braucht man für ein Dutzend?








Dies ist eine Aufgabe aus alter Zeit. Sie kommt in Schriften des 8.
Jahrhunderts vor und hat ein Märchen zum Inhalt. Es war einmal ein
Mann, der mußte einen Wolf, eine Ziege und einen Krautkopf in einem
Kahn über einen Fluß setzen. In dem Kahn konnten aber nur der Mann
und mit ihm entweder der Wolf oder die Ziege oder der Krautkopf
untergebracht werden. Wenn man aber den Wolf mit der Ziege ohne den
Menschen zurückläßt, frißt der Wolf die Ziege, und wenn man die Ziege
mit dem Krautkopf allein zurückläßt, dann frißt die Ziege den Kraut-
kopf; nur in Anwesenheit des Menschen frißt keiner den anderen. Den-
noch brachte der Mann seine Ladung über den Fluß. Wie machte er das?
Ein Schnellzug fuhr ohne Unterbrechung von Adorf nach Bedorf mit
einer Geschwindigkeit von 60 km/h. Ein anderer Zug fuhr ebenfalls
ohne Unterbrechung von Bedorf nach Adorf mit einer Geschwindigkeit
von 40 km/h. Welchen Abstand voneinander haben die Züge eine Stunde
vor ihrer Begegnung?





Nicht weit von der Küste liegt ein Schiff vor Anker. An seiner Bord-
wand hängt eine Strickleiter bis zum Wasser hinab. Sie hat 10 Spros-
sen. Der Abstand zwischen den Sprossen beträgt 30 cm. Die unterste
Sprosse berührt die Wasserfläche. Das Meer ist sehr ruhig. Da beginnt
die Flut, die das Wasser in jeder Stunde um 15 cm steigen läßt.
Innerhalb welcher Zeit wird die dritte Sprosse vom Wasser erreicht?




Auf meinen Reisen durch die große Sowjetunion kam ich durch Orte, wo
der Temperaturunterschied der Luft am Tag und in der Nacht so groß
ist, daß er sich beim Aufenthalt im Freien am Gang der Uhr bemerkbar
machte. Ich stellte fest, daß durch die Temperaturschwankungen die
Uhr am Tage eine halbe Minute vor- und nachts eine drittel Minute
nachging. Am Morgen des 1. Mai zeigte die Uhr die richtige Zeit. An
welchem Tage ging sie bereits 5 Minuten vor?



Ein Junge fand irgendwo ein verlassenes Kätzchen, er nahm es hoch und
brachte es nach Hause. Er zog schon immer ein paar junge Katzen auf;
aber wieviel er hatte, sagte er nicht gern, damit man ihn nicht aus-
lachte. Einmal wurde er gefragt: "Wieviele Kätzchen hast du jetzt?"
"Nicht viele", antwortete er, "drei Viertel ihrer Zahl und noch drei
Viertel eines Kätzchens." Seine Kameraden dachten, daß er Spaß
machte. Er hatte ihnen jedoch eine Aufgabe gestellt, die gar nicht
schwer zu lösen ist. Versuch es!


Als ein Fahrgast die Hälfte seiner Reise zurückgelegt hatte, begann
er zu schlafen und schlief so lange, bis von der Reise noch die
Hälfte der Strecke zurückzulegen war, die er schlafend verbracht
hatte. Welchen Teil der Strecke war er schlafend gefahren?






Stell dir einen hölzernen Würfel mit 30 cm Kantenlänge vor, dessen
gesamte Oberfläche mit schwarzer Farbe angestrichen ist.
1. Wieviele Schnitte sind nötig, um den Würfel in Würfel mit 10 cm
   Kantenlänge zu zerlegen?
2. Wieviele solcher Würfel erhält man?
3. Wieviele Würfel haben 4 schwarze Flächen?
4. Wieviele Würfel haben 3 schwarze Flächen?
5. Wieviele Würfel haben 2 schwarze Flächen?
6. Wieviele Würfel haben 1 schwarze Fläche?
7. Wieviele Würfel haben keinen Anstrich?
Wenn du die Ziffern des Lebensalter von Alois vertauscht, erhältst du
das Alter von Berthold. Die Differenz des Lebensalter von Alois und
Berthold ergibt das doppelte Lebensalter von Christian. Berthold ist
zehnmal so alt wie Christian. Bestimme das Alter eines jeden!`},{id:19,title:"Lesson 19",description:"Brief",lesson:`



                                            Rovinj, 27. Juli 1992

Liebe Eltern!

Nach 9-stündiger Fahrt sind wir gestern gut in Rovinj angekommen. Die
Fahrt war zwar etwas anstrengend, aber sie hat sich gelohnt. Das
Wetter hier ist herrlich, die Pension sehr sauber und das Essen
ausreichend und gut.

Morgen wollen wir einen Ausflug nach Pula unternehmen, um etwas von
dieser schönen Stadt zu sehen. Vielleicht machen wir auch eine kleine
Rundfahrt mit einem der vielen Touristenboote, die es hier gibt.

Ihr werdet Euch wahrscheinlich wundern, daß ich den Brief auf einem
Computer schreibe, aber der Sohn der Familie, bei der wir hier
wohnen, hat vor 2 Monaten einen bekommen und ich darf ihn benützen.
Ich habe so die Gelegenheit, meine Maschinenschreibkenntnisse wieder
etwas aufzubessern.

Ich kann nur hoffen, daß bei Euch alles in Ordnung ist, und daß Ihr
ebenfalls so schönes Wetter habt. Nächste Woche schicken wir Euch
noch eine Ansichtskarte von Rovinj.

Herzliche Grüße






Herbert Mayr                                  Linz, 4. April 1992
Turmgasse 12

A-4020 Linz






Firma
Josef Berger
Computershop
Marienstraße 12

A-1050 Wien





Bestellung




Ich habe heuer im Februar einen Computer erhalten und habe mich
seither auch eingehend damit befaßt. Da ich mich dennoch immer noch
als Neuling auf dem Gebiet der EDV bezeichnen muß, bitte ich Sie mir
umgehend ein Computer-Selbstlernprogramm zum Preis von DM 398,- zu-
zusenden.

Außerdem könnte ich einige Leerdisketten und anderes Zubehör ge-
brauchen. Ich bestelle somit:

                    1   Computer-Selbstlernprogramm        398,-
                    50  Leerdisketten, 5 1/4 Zoll           50,-
                    100 Etiketten, Format 89 x 36           25,-
                    1   Druckerfarbband                     39,-
                    30  Diskettenboxen für 100 Disketten   450,-

Ich bitte um baldige Zusendung.

Hochachtungsvoll



(Herbert Mayr)`},{id:20,title:"Lesson 20",description:"Lebenslauf",lesson:`



Zollamt Linz                                    Linz, 11. Juli 1989
Zollamtstraße 7
Postfach

A-4010 Linz




Herrn
Johann Schmiedinger
Blumauerstraße 11

A-4400 Steyr


Zl. 500/3/G  345/2/88/R-Sch 390 Sachbearbeiter: AR Meier



Vorlage von Unterlagen



Zur Bearbeitung Ihrer Berufung vom 4.7.1988 gegen den ho. Bescheid
vom 27.6.1988, WE- Nr. 501/128.456/00/88 betreffend Einbeziehung der
deutschen Mehrwertsteuer in Höhe von 14%, werden Sie eingeladen,
nachstehend angeführte Unterlagen vorzulegen:

Eine vom ausländischen Lieferanten abgegebene Bestätigung, daß Sie
die deutsche Mehrwertsteuer in Höhe von DM 346,50 entweder nicht
bezahlt haben oder erstattet bekamen.

Sofern bis zum 23. August 1988 keine Unterlagen vorgelegt werden, muß
über die Eingabe nach bisher vorliegenden Aktenunterlagen entschieden
werden.


                                 Für den Vorstand:

Karin Danner
Brückenweg 2
5020  Salzburg                            Salzburg, 15. Dezember 1988



                       L E B E N S L A U F


Ich wurde am 23. Jänner 1966 in Hallein als erstes Kind des Haupt-
schullehrers Johann Danner und seiner Ehefrau Maria, geb. Früchtl,
geboren. Ich habe einen Bruder im Alter von 15 Jahren, der den
Polytechnischen Lehrgang in Salzburg besucht.

Nach dem Besuch der Volksschule in Hallein absolvierte ich von 1977
bis 1986 das Bundesrealgymnasium in Salzburg. Im September 1986
inskripierte ich an der Pädagogischen Akademie des Bundes in Linz und
belege hier die Fächer Mathematik und Geographie. Ich stehe nun im 4.
Semester meiner Ausbildung als Hauptschulleher.

Ich bin österreichischer Staatsbürger, römisch-katholischer
Konfession und ledig.`}],Uk=e=>{const n=Gc.find(r=>r.id===e),t=[];return n&&n.lesson.split("").forEach(r=>{t.push({value:r,color:"transparent"})}),t},Bk=()=>{const[e,n]=E.useState(!1),[t,r]=E.useState({mistakes:0,time:0}),{id:l=""}=tg(),i=parseInt(l,10),a=Uk(i);console.log({lesson:a,id:l}),E.useEffect(()=>{window.scrollTo(0,0)},[]);const s=()=>n(!1),u=o=>{r(o),n(!0)};return T.jsx(Kc,{children:e?T.jsx(qk,{resetAction:s,lessonStats:t}):T.jsx(Mk,{lesson:a,completeLesson:u})})},Hk=({lesson:e})=>T.jsxs(Kc,{children:[T.jsx("h2",{children:e.title}),T.jsx("p",{children:e.description}),T.jsx(vc,{to:`/lesson/${e.id}`,children:T.jsx(Jc,{children:"Start Lesson"})})]}),Wk=()=>{const e=Gc.map(n=>T.jsx(Hk,{lesson:n,key:n.id}));return T.jsx("div",{children:e})},Kk=()=>T.jsxs(T.Fragment,{children:[T.jsx(Pk,{children:T.jsx(vc,{to:"/",children:T.jsx("h1",{children:Tk.APP_TITLE})})}),T.jsx(mg,{})]}),Vk=()=>T.jsxs(T.Fragment,{children:[T.jsx(Kk,{}),T.jsxs(kg,{children:[T.jsx(ls,{path:"/",element:T.jsx(Wk,{})}),T.jsx(ls,{path:"lesson/:id",element:T.jsx(Bk,{})})]})]});da.createRoot(document.getElementById("root")).render(T.jsx(et.StrictMode,{children:T.jsx(zg,{children:T.jsx(Vk,{})})}));
