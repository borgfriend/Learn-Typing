(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function ep(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Td={exports:{}},_s={},Md={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var si=Symbol.for("react.element"),np=Symbol.for("react.portal"),tp=Symbol.for("react.fragment"),rp=Symbol.for("react.strict_mode"),ip=Symbol.for("react.profiler"),sp=Symbol.for("react.provider"),lp=Symbol.for("react.context"),ap=Symbol.for("react.forward_ref"),op=Symbol.for("react.suspense"),up=Symbol.for("react.memo"),dp=Symbol.for("react.lazy"),Qo=Symbol.iterator;function cp(e){return e===null||typeof e!="object"?null:(e=Qo&&e[Qo]||e["@@iterator"],typeof e=="function"?e:null)}var Dd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Id=Object.assign,Od={};function ur(e,n,t){this.props=e,this.context=n,this.refs=Od,this.updater=t||Dd}ur.prototype.isReactComponent={};ur.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ur.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ad(){}Ad.prototype=ur.prototype;function Wa(e,n,t){this.props=e,this.context=n,this.refs=Od,this.updater=t||Dd}var Ka=Wa.prototype=new Ad;Ka.constructor=Wa;Id(Ka,ur.prototype);Ka.isPureReactComponent=!0;var Zo=Array.isArray,Bd=Object.prototype.hasOwnProperty,Va={current:null},Ud={key:!0,ref:!0,__self:!0,__source:!0};function qd(e,n,t){var r,i={},s=null,l=null;if(n!=null)for(r in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(s=""+n.key),n)Bd.call(n,r)&&!Ud.hasOwnProperty(r)&&(i[r]=n[r]);var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){for(var o=Array(a),u=0;u<a;u++)o[u]=arguments[u+2];i.children=o}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:si,type:e,key:s,ref:l,props:i,_owner:Va.current}}function fp(e,n){return{$$typeof:si,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Ga(e){return typeof e=="object"&&e!==null&&e.$$typeof===si}function hp(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Yo=/\/+/g;function il(e,n){return typeof e=="object"&&e!==null&&e.key!=null?hp(""+e.key):n.toString(36)}function Ti(e,n,t,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case si:case np:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+il(l,0):r,Zo(i)?(t="",e!=null&&(t=e.replace(Yo,"$&/")+"/"),Ti(i,n,t,"",function(u){return u})):i!=null&&(Ga(i)&&(i=fp(i,t+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Yo,"$&/")+"/")+e)),n.push(i)),1;if(l=0,r=r===""?".":r+":",Zo(e))for(var a=0;a<e.length;a++){s=e[a];var o=r+il(s,a);l+=Ti(s,n,t,o,i)}else if(o=cp(e),typeof o=="function")for(e=o.call(e),a=0;!(s=e.next()).done;)s=s.value,o=r+il(s,a++),l+=Ti(s,n,t,o,i);else if(s==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function fi(e,n,t){if(e==null)return e;var r=[],i=0;return Ti(e,r,"","",function(s){return n.call(t,s,i++)}),r}function pp(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Ne={current:null},Mi={transition:null},mp={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:Mi,ReactCurrentOwner:Va};function Hd(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:fi,forEach:function(e,n,t){fi(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return fi(e,function(){n++}),n},toArray:function(e){return fi(e,function(n){return n})||[]},only:function(e){if(!Ga(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=ur;I.Fragment=tp;I.Profiler=ip;I.PureComponent=Wa;I.StrictMode=rp;I.Suspense=op;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mp;I.act=Hd;I.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Id({},e.props),i=e.key,s=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(s=n.ref,l=Va.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(o in n)Bd.call(n,o)&&!Ud.hasOwnProperty(o)&&(r[o]=n[o]===void 0&&a!==void 0?a[o]:n[o])}var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){a=Array(o);for(var u=0;u<o;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:si,type:e.type,key:i,ref:s,props:r,_owner:l}};I.createContext=function(e){return e={$$typeof:lp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:sp,_context:e},e.Consumer=e};I.createElement=qd;I.createFactory=function(e){var n=qd.bind(null,e);return n.type=e,n};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:ap,render:e}};I.isValidElement=Ga;I.lazy=function(e){return{$$typeof:dp,_payload:{_status:-1,_result:e},_init:pp}};I.memo=function(e,n){return{$$typeof:up,type:e,compare:n===void 0?null:n}};I.startTransition=function(e){var n=Mi.transition;Mi.transition={};try{e()}finally{Mi.transition=n}};I.unstable_act=Hd;I.useCallback=function(e,n){return Ne.current.useCallback(e,n)};I.useContext=function(e){return Ne.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return Ne.current.useDeferredValue(e)};I.useEffect=function(e,n){return Ne.current.useEffect(e,n)};I.useId=function(){return Ne.current.useId()};I.useImperativeHandle=function(e,n,t){return Ne.current.useImperativeHandle(e,n,t)};I.useInsertionEffect=function(e,n){return Ne.current.useInsertionEffect(e,n)};I.useLayoutEffect=function(e,n){return Ne.current.useLayoutEffect(e,n)};I.useMemo=function(e,n){return Ne.current.useMemo(e,n)};I.useReducer=function(e,n,t){return Ne.current.useReducer(e,n,t)};I.useRef=function(e){return Ne.current.useRef(e)};I.useState=function(e){return Ne.current.useState(e)};I.useSyncExternalStore=function(e,n,t){return Ne.current.useSyncExternalStore(e,n,t)};I.useTransition=function(){return Ne.current.useTransition()};I.version="18.3.1";Md.exports=I;var F=Md.exports;const W=ep(F);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gp=F,kp=Symbol.for("react.element"),vp=Symbol.for("react.fragment"),yp=Object.prototype.hasOwnProperty,jp=gp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xp={key:!0,ref:!0,__self:!0,__source:!0};function Wd(e,n,t){var r,i={},s=null,l=null;t!==void 0&&(s=""+t),n.key!==void 0&&(s=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)yp.call(n,r)&&!xp.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:kp,type:e,key:s,ref:l,props:i,_owner:jp.current}}_s.Fragment=vp;_s.jsx=Wd;_s.jsxs=Wd;Td.exports=_s;var c=Td.exports,Al={},Kd={exports:{}},Ge={},Vd={exports:{}},Gd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(E,_){var R=E.length;E.push(_);e:for(;0<R;){var D=R-1>>>1,O=E[D];if(0<i(O,_))E[D]=_,E[R]=O,R=D;else break e}}function t(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var _=E[0],R=E.pop();if(R!==_){E[0]=R;e:for(var D=0,O=E.length,Pe=O>>>1;D<Pe;){var ve=2*(D+1)-1,Ue=E[ve],B=ve+1,ue=E[B];if(0>i(Ue,R))B<O&&0>i(ue,Ue)?(E[D]=ue,E[B]=R,D=B):(E[D]=Ue,E[ve]=R,D=ve);else if(B<O&&0>i(ue,R))E[D]=ue,E[B]=R,D=B;else break e}}return _}function i(E,_){var R=E.sortIndex-_.sortIndex;return R!==0?R:E.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var o=[],u=[],d=1,f=null,h=3,g=!1,v=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(E){for(var _=t(u);_!==null;){if(_.callback===null)r(u);else if(_.startTime<=E)r(u),_.sortIndex=_.expirationTime,n(o,_);else break;_=t(u)}}function j(E){if(y=!1,k(E),!v)if(t(o)!==null)v=!0,N(w);else{var _=t(u);_!==null&&V(j,_.startTime-E)}}function w(E,_){v=!1,y&&(y=!1,p(S),S=-1),g=!0;var R=h;try{for(k(_),f=t(o);f!==null&&(!(f.expirationTime>_)||E&&!q());){var D=f.callback;if(typeof D=="function"){f.callback=null,h=f.priorityLevel;var O=D(f.expirationTime<=_);_=e.unstable_now(),typeof O=="function"?f.callback=O:f===t(o)&&r(o),k(_)}else r(o);f=t(o)}if(f!==null)var Pe=!0;else{var ve=t(u);ve!==null&&V(j,ve.startTime-_),Pe=!1}return Pe}finally{f=null,h=R,g=!1}}var C=!1,z=null,S=-1,L=5,$=-1;function q(){return!(e.unstable_now()-$<L)}function T(){if(z!==null){var E=e.unstable_now();$=E;var _=!0;try{_=z(!0,E)}finally{_?ne():(C=!1,z=null)}}else C=!1}var ne;if(typeof m=="function")ne=function(){m(T)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,A=le.port2;le.port1.onmessage=T,ne=function(){A.postMessage(null)}}else ne=function(){x(T,0)};function N(E){z=E,C||(C=!0,ne())}function V(E,_){S=x(function(){E(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,N(w))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(o)},e.unstable_next=function(E){switch(h){case 1:case 2:case 3:var _=3;break;default:_=h}var R=h;h=_;try{return E()}finally{h=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,_){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var R=h;h=E;try{return _()}finally{h=R}},e.unstable_scheduleCallback=function(E,_,R){var D=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?D+R:D):R=D,E){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=R+O,E={id:d++,callback:_,priorityLevel:E,startTime:R,expirationTime:O,sortIndex:-1},R>D?(E.sortIndex=R,n(u,E),t(o)===null&&E===t(u)&&(y?(p(S),S=-1):y=!0,V(j,R-D))):(E.sortIndex=O,n(o,E),v||g||(v=!0,N(w))),E},e.unstable_shouldYield=q,e.unstable_wrapCallback=function(E){var _=h;return function(){var R=h;h=_;try{return E.apply(this,arguments)}finally{h=R}}}})(Gd);Vd.exports=Gd;var wp=Vd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp=F,Ve=wp;function b(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jd=new Set,Ar={};function wt(e,n){Gt(e,n),Gt(e+"Capture",n)}function Gt(e,n){for(Ar[e]=n,e=0;e<n.length;e++)Jd.add(n[e])}var _n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bl=Object.prototype.hasOwnProperty,zp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xo={},eu={};function Cp(e){return Bl.call(eu,e)?!0:Bl.call(Xo,e)?!1:zp.test(e)?eu[e]=!0:(Xo[e]=!0,!1)}function Ep(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function bp(e,n,t,r){if(n===null||typeof n>"u"||Ep(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Te(e,n,t,r,i,s,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=s,this.removeEmptyString=l}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){we[e]=new Te(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];we[n]=new Te(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){we[e]=new Te(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){we[e]=new Te(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){we[e]=new Te(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){we[e]=new Te(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){we[e]=new Te(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){we[e]=new Te(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){we[e]=new Te(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ja=/[\-:]([a-z])/g;function Qa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Ja,Qa);we[n]=new Te(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Ja,Qa);we[n]=new Te(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Ja,Qa);we[n]=new Te(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){we[e]=new Te(e,1,!1,e.toLowerCase(),null,!1,!1)});we.xlinkHref=new Te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){we[e]=new Te(e,1,!1,e.toLowerCase(),null,!0,!0)});function Za(e,n,t,r){var i=we.hasOwnProperty(n)?we[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(bp(n,t,i,r)&&(t=null),r||i===null?Cp(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Ln=Sp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hi=Symbol.for("react.element"),Et=Symbol.for("react.portal"),bt=Symbol.for("react.fragment"),Ya=Symbol.for("react.strict_mode"),Ul=Symbol.for("react.profiler"),Qd=Symbol.for("react.provider"),Zd=Symbol.for("react.context"),Xa=Symbol.for("react.forward_ref"),ql=Symbol.for("react.suspense"),Hl=Symbol.for("react.suspense_list"),eo=Symbol.for("react.memo"),Dn=Symbol.for("react.lazy"),Yd=Symbol.for("react.offscreen"),nu=Symbol.iterator;function hr(e){return e===null||typeof e!="object"?null:(e=nu&&e[nu]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,sl;function xr(e){if(sl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);sl=n&&n[1]||""}return`
`+sl+e}var ll=!1;function al(e,n){if(!e||ll)return"";ll=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),l=i.length-1,a=s.length-1;1<=l&&0<=a&&i[l]!==s[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==s[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==s[a]){var o=`
`+i[l].replace(" at new "," at ");return e.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",e.displayName)),o}while(1<=l&&0<=a);break}}}finally{ll=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?xr(e):""}function _p(e){switch(e.tag){case 5:return xr(e.type);case 16:return xr("Lazy");case 13:return xr("Suspense");case 19:return xr("SuspenseList");case 0:case 2:case 15:return e=al(e.type,!1),e;case 11:return e=al(e.type.render,!1),e;case 1:return e=al(e.type,!0),e;default:return""}}function Wl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case bt:return"Fragment";case Et:return"Portal";case Ul:return"Profiler";case Ya:return"StrictMode";case ql:return"Suspense";case Hl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Zd:return(e.displayName||"Context")+".Consumer";case Qd:return(e._context.displayName||"Context")+".Provider";case Xa:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case eo:return n=e.displayName||null,n!==null?n:Wl(e.type)||"Memo";case Dn:n=e._payload,e=e._init;try{return Wl(e(n))}catch{}}return null}function $p(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wl(n);case 8:return n===Ya?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Yn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Pp(e){var n=Xd(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,s=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,s.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function pi(e){e._valueTracker||(e._valueTracker=Pp(e))}function ec(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Xd(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Xi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Kl(e,n){var t=n.checked;return se({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function tu(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Yn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function nc(e,n){n=n.checked,n!=null&&Za(e,"checked",n,!1)}function Vl(e,n){nc(e,n);var t=Yn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Gl(e,n.type,t):n.hasOwnProperty("defaultValue")&&Gl(e,n.type,Yn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ru(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Gl(e,n,t){(n!=="number"||Xi(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var wr=Array.isArray;function Bt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Yn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Jl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(b(91));return se({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function iu(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(b(92));if(wr(t)){if(1<t.length)throw Error(b(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Yn(t)}}function tc(e,n){var t=Yn(n.value),r=Yn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function su(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function rc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ql(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?rc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var mi,ic=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(mi=mi||document.createElement("div"),mi.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=mi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Br(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var br={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rp=["Webkit","ms","Moz","O"];Object.keys(br).forEach(function(e){Rp.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),br[n]=br[e]})});function sc(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||br.hasOwnProperty(e)&&br[e]?(""+n).trim():n+"px"}function lc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=sc(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var Lp=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zl(e,n){if(n){if(Lp[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(b(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(b(61))}if(n.style!=null&&typeof n.style!="object")throw Error(b(62))}}function Yl(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xl=null;function no(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ea=null,Ut=null,qt=null;function lu(e){if(e=oi(e)){if(typeof ea!="function")throw Error(b(280));var n=e.stateNode;n&&(n=Fs(n),ea(e.stateNode,e.type,n))}}function ac(e){Ut?qt?qt.push(e):qt=[e]:Ut=e}function oc(){if(Ut){var e=Ut,n=qt;if(qt=Ut=null,lu(e),n)for(e=0;e<n.length;e++)lu(n[e])}}function uc(e,n){return e(n)}function dc(){}var ol=!1;function cc(e,n,t){if(ol)return e(n,t);ol=!0;try{return uc(e,n,t)}finally{ol=!1,(Ut!==null||qt!==null)&&(dc(),oc())}}function Ur(e,n){var t=e.stateNode;if(t===null)return null;var r=Fs(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(b(231,n,typeof t));return t}var na=!1;if(_n)try{var pr={};Object.defineProperty(pr,"passive",{get:function(){na=!0}}),window.addEventListener("test",pr,pr),window.removeEventListener("test",pr,pr)}catch{na=!1}function Fp(e,n,t,r,i,s,l,a,o){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(d){this.onError(d)}}var _r=!1,es=null,ns=!1,ta=null,Np={onError:function(e){_r=!0,es=e}};function Tp(e,n,t,r,i,s,l,a,o){_r=!1,es=null,Fp.apply(Np,arguments)}function Mp(e,n,t,r,i,s,l,a,o){if(Tp.apply(this,arguments),_r){if(_r){var u=es;_r=!1,es=null}else throw Error(b(198));ns||(ns=!0,ta=u)}}function St(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function fc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function au(e){if(St(e)!==e)throw Error(b(188))}function Dp(e){var n=e.alternate;if(!n){if(n=St(e),n===null)throw Error(b(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===t)return au(i),e;if(s===r)return au(i),n;s=s.sibling}throw Error(b(188))}if(t.return!==r.return)t=i,r=s;else{for(var l=!1,a=i.child;a;){if(a===t){l=!0,t=i,r=s;break}if(a===r){l=!0,r=i,t=s;break}a=a.sibling}if(!l){for(a=s.child;a;){if(a===t){l=!0,t=s,r=i;break}if(a===r){l=!0,r=s,t=i;break}a=a.sibling}if(!l)throw Error(b(189))}}if(t.alternate!==r)throw Error(b(190))}if(t.tag!==3)throw Error(b(188));return t.stateNode.current===t?e:n}function hc(e){return e=Dp(e),e!==null?pc(e):null}function pc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=pc(e);if(n!==null)return n;e=e.sibling}return null}var mc=Ve.unstable_scheduleCallback,ou=Ve.unstable_cancelCallback,Ip=Ve.unstable_shouldYield,Op=Ve.unstable_requestPaint,oe=Ve.unstable_now,Ap=Ve.unstable_getCurrentPriorityLevel,to=Ve.unstable_ImmediatePriority,gc=Ve.unstable_UserBlockingPriority,ts=Ve.unstable_NormalPriority,Bp=Ve.unstable_LowPriority,kc=Ve.unstable_IdlePriority,$s=null,yn=null;function Up(e){if(yn&&typeof yn.onCommitFiberRoot=="function")try{yn.onCommitFiberRoot($s,e,void 0,(e.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:Wp,qp=Math.log,Hp=Math.LN2;function Wp(e){return e>>>=0,e===0?32:31-(qp(e)/Hp|0)|0}var gi=64,ki=4194304;function Sr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function rs(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,l=t&268435455;if(l!==0){var a=l&~i;a!==0?r=Sr(a):(s&=l,s!==0&&(r=Sr(s)))}else l=t&~i,l!==0?r=Sr(l):s!==0&&(r=Sr(s));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,s=n&-n,i>=s||i===16&&(s&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-on(n),i=1<<t,r|=e[t],n&=~i;return r}function Kp(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vp(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-on(s),a=1<<l,o=i[l];o===-1?(!(a&t)||a&r)&&(i[l]=Kp(a,n)):o<=n&&(e.expiredLanes|=a),s&=~a}}function ra(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function vc(){var e=gi;return gi<<=1,!(gi&4194240)&&(gi=64),e}function ul(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function li(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-on(n),e[n]=t}function Gp(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-on(t),s=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~s}}function ro(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-on(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var K=0;function yc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var jc,io,xc,wc,Sc,ia=!1,vi=[],qn=null,Hn=null,Wn=null,qr=new Map,Hr=new Map,On=[],Jp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uu(e,n){switch(e){case"focusin":case"focusout":qn=null;break;case"dragenter":case"dragleave":Hn=null;break;case"mouseover":case"mouseout":Wn=null;break;case"pointerover":case"pointerout":qr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hr.delete(n.pointerId)}}function mr(e,n,t,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},n!==null&&(n=oi(n),n!==null&&io(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Qp(e,n,t,r,i){switch(n){case"focusin":return qn=mr(qn,e,n,t,r,i),!0;case"dragenter":return Hn=mr(Hn,e,n,t,r,i),!0;case"mouseover":return Wn=mr(Wn,e,n,t,r,i),!0;case"pointerover":var s=i.pointerId;return qr.set(s,mr(qr.get(s)||null,e,n,t,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Hr.set(s,mr(Hr.get(s)||null,e,n,t,r,i)),!0}return!1}function zc(e){var n=ut(e.target);if(n!==null){var t=St(n);if(t!==null){if(n=t.tag,n===13){if(n=fc(t),n!==null){e.blockedOn=n,Sc(e.priority,function(){xc(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Di(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=sa(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Xl=r,t.target.dispatchEvent(r),Xl=null}else return n=oi(t),n!==null&&io(n),e.blockedOn=t,!1;n.shift()}return!0}function du(e,n,t){Di(e)&&t.delete(n)}function Zp(){ia=!1,qn!==null&&Di(qn)&&(qn=null),Hn!==null&&Di(Hn)&&(Hn=null),Wn!==null&&Di(Wn)&&(Wn=null),qr.forEach(du),Hr.forEach(du)}function gr(e,n){e.blockedOn===n&&(e.blockedOn=null,ia||(ia=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,Zp)))}function Wr(e){function n(i){return gr(i,e)}if(0<vi.length){gr(vi[0],e);for(var t=1;t<vi.length;t++){var r=vi[t];r.blockedOn===e&&(r.blockedOn=null)}}for(qn!==null&&gr(qn,e),Hn!==null&&gr(Hn,e),Wn!==null&&gr(Wn,e),qr.forEach(n),Hr.forEach(n),t=0;t<On.length;t++)r=On[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<On.length&&(t=On[0],t.blockedOn===null);)zc(t),t.blockedOn===null&&On.shift()}var Ht=Ln.ReactCurrentBatchConfig,is=!0;function Yp(e,n,t,r){var i=K,s=Ht.transition;Ht.transition=null;try{K=1,so(e,n,t,r)}finally{K=i,Ht.transition=s}}function Xp(e,n,t,r){var i=K,s=Ht.transition;Ht.transition=null;try{K=4,so(e,n,t,r)}finally{K=i,Ht.transition=s}}function so(e,n,t,r){if(is){var i=sa(e,n,t,r);if(i===null)yl(e,n,r,ss,t),uu(e,r);else if(Qp(i,e,n,t,r))r.stopPropagation();else if(uu(e,r),n&4&&-1<Jp.indexOf(e)){for(;i!==null;){var s=oi(i);if(s!==null&&jc(s),s=sa(e,n,t,r),s===null&&yl(e,n,r,ss,t),s===i)break;i=s}i!==null&&r.stopPropagation()}else yl(e,n,r,null,t)}}var ss=null;function sa(e,n,t,r){if(ss=null,e=no(r),e=ut(e),e!==null)if(n=St(e),n===null)e=null;else if(t=n.tag,t===13){if(e=fc(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ss=e,null}function Cc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ap()){case to:return 1;case gc:return 4;case ts:case Bp:return 16;case kc:return 536870912;default:return 16}default:return 16}}var Bn=null,lo=null,Ii=null;function Ec(){if(Ii)return Ii;var e,n=lo,t=n.length,r,i="value"in Bn?Bn.value:Bn.textContent,s=i.length;for(e=0;e<t&&n[e]===i[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===i[s-r];r++);return Ii=i.slice(e,1<r?1-r:void 0)}function Oi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function yi(){return!0}function cu(){return!1}function Je(e){function n(t,r,i,s,l){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?yi:cu,this.isPropagationStopped=cu,this}return se(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=yi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=yi)},persist:function(){},isPersistent:yi}),n}var dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ao=Je(dr),ai=se({},dr,{view:0,detail:0}),em=Je(ai),dl,cl,kr,Ps=se({},ai,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kr&&(kr&&e.type==="mousemove"?(dl=e.screenX-kr.screenX,cl=e.screenY-kr.screenY):cl=dl=0,kr=e),dl)},movementY:function(e){return"movementY"in e?e.movementY:cl}}),fu=Je(Ps),nm=se({},Ps,{dataTransfer:0}),tm=Je(nm),rm=se({},ai,{relatedTarget:0}),fl=Je(rm),im=se({},dr,{animationName:0,elapsedTime:0,pseudoElement:0}),sm=Je(im),lm=se({},dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),am=Je(lm),om=se({},dr,{data:0}),hu=Je(om),um={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fm(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=cm[e])?!!n[e]:!1}function oo(){return fm}var hm=se({},ai,{key:function(e){if(e.key){var n=um[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Oi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oo,charCode:function(e){return e.type==="keypress"?Oi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Oi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),pm=Je(hm),mm=se({},Ps,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pu=Je(mm),gm=se({},ai,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oo}),km=Je(gm),vm=se({},dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ym=Je(vm),jm=se({},Ps,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xm=Je(jm),wm=[9,13,27,32],uo=_n&&"CompositionEvent"in window,$r=null;_n&&"documentMode"in document&&($r=document.documentMode);var Sm=_n&&"TextEvent"in window&&!$r,bc=_n&&(!uo||$r&&8<$r&&11>=$r),mu=" ",gu=!1;function _c(e,n){switch(e){case"keyup":return wm.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $c(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _t=!1;function zm(e,n){switch(e){case"compositionend":return $c(n);case"keypress":return n.which!==32?null:(gu=!0,mu);case"textInput":return e=n.data,e===mu&&gu?null:e;default:return null}}function Cm(e,n){if(_t)return e==="compositionend"||!uo&&_c(e,n)?(e=Ec(),Ii=lo=Bn=null,_t=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return bc&&n.locale!=="ko"?null:n.data;default:return null}}var Em={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ku(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Em[e.type]:n==="textarea"}function Pc(e,n,t,r){ac(r),n=ls(n,"onChange"),0<n.length&&(t=new ao("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Pr=null,Kr=null;function bm(e){Bc(e,0)}function Rs(e){var n=Rt(e);if(ec(n))return e}function _m(e,n){if(e==="change")return n}var Rc=!1;if(_n){var hl;if(_n){var pl="oninput"in document;if(!pl){var vu=document.createElement("div");vu.setAttribute("oninput","return;"),pl=typeof vu.oninput=="function"}hl=pl}else hl=!1;Rc=hl&&(!document.documentMode||9<document.documentMode)}function yu(){Pr&&(Pr.detachEvent("onpropertychange",Lc),Kr=Pr=null)}function Lc(e){if(e.propertyName==="value"&&Rs(Kr)){var n=[];Pc(n,Kr,e,no(e)),cc(bm,n)}}function $m(e,n,t){e==="focusin"?(yu(),Pr=n,Kr=t,Pr.attachEvent("onpropertychange",Lc)):e==="focusout"&&yu()}function Pm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Rs(Kr)}function Rm(e,n){if(e==="click")return Rs(n)}function Lm(e,n){if(e==="input"||e==="change")return Rs(n)}function Fm(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var cn=typeof Object.is=="function"?Object.is:Fm;function Vr(e,n){if(cn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Bl.call(n,i)||!cn(e[i],n[i]))return!1}return!0}function ju(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xu(e,n){var t=ju(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ju(t)}}function Fc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Fc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Nc(){for(var e=window,n=Xi();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Xi(e.document)}return n}function co(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Nm(e){var n=Nc(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Fc(t.ownerDocument.documentElement,t)){if(r!==null&&co(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=xu(t,s);var l=xu(t,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tm=_n&&"documentMode"in document&&11>=document.documentMode,$t=null,la=null,Rr=null,aa=!1;function wu(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;aa||$t==null||$t!==Xi(r)||(r=$t,"selectionStart"in r&&co(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rr&&Vr(Rr,r)||(Rr=r,r=ls(la,"onSelect"),0<r.length&&(n=new ao("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=$t)))}function ji(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Pt={animationend:ji("Animation","AnimationEnd"),animationiteration:ji("Animation","AnimationIteration"),animationstart:ji("Animation","AnimationStart"),transitionend:ji("Transition","TransitionEnd")},ml={},Tc={};_n&&(Tc=document.createElement("div").style,"AnimationEvent"in window||(delete Pt.animationend.animation,delete Pt.animationiteration.animation,delete Pt.animationstart.animation),"TransitionEvent"in window||delete Pt.transitionend.transition);function Ls(e){if(ml[e])return ml[e];if(!Pt[e])return e;var n=Pt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Tc)return ml[e]=n[t];return e}var Mc=Ls("animationend"),Dc=Ls("animationiteration"),Ic=Ls("animationstart"),Oc=Ls("transitionend"),Ac=new Map,Su="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nt(e,n){Ac.set(e,n),wt(n,[e])}for(var gl=0;gl<Su.length;gl++){var kl=Su[gl],Mm=kl.toLowerCase(),Dm=kl[0].toUpperCase()+kl.slice(1);nt(Mm,"on"+Dm)}nt(Mc,"onAnimationEnd");nt(Dc,"onAnimationIteration");nt(Ic,"onAnimationStart");nt("dblclick","onDoubleClick");nt("focusin","onFocus");nt("focusout","onBlur");nt(Oc,"onTransitionEnd");Gt("onMouseEnter",["mouseout","mouseover"]);Gt("onMouseLeave",["mouseout","mouseover"]);Gt("onPointerEnter",["pointerout","pointerover"]);Gt("onPointerLeave",["pointerout","pointerover"]);wt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wt("onBeforeInput",["compositionend","keypress","textInput","paste"]);wt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Im=new Set("cancel close invalid load scroll toggle".split(" ").concat(zr));function zu(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Mp(r,n,void 0,e),e.currentTarget=null}function Bc(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var s=void 0;if(n)for(var l=r.length-1;0<=l;l--){var a=r[l],o=a.instance,u=a.currentTarget;if(a=a.listener,o!==s&&i.isPropagationStopped())break e;zu(i,a,u),s=o}else for(l=0;l<r.length;l++){if(a=r[l],o=a.instance,u=a.currentTarget,a=a.listener,o!==s&&i.isPropagationStopped())break e;zu(i,a,u),s=o}}}if(ns)throw e=ta,ns=!1,ta=null,e}function Z(e,n){var t=n[fa];t===void 0&&(t=n[fa]=new Set);var r=e+"__bubble";t.has(r)||(Uc(n,e,2,!1),t.add(r))}function vl(e,n,t){var r=0;n&&(r|=4),Uc(t,e,r,n)}var xi="_reactListening"+Math.random().toString(36).slice(2);function Gr(e){if(!e[xi]){e[xi]=!0,Jd.forEach(function(t){t!=="selectionchange"&&(Im.has(t)||vl(t,!1,e),vl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[xi]||(n[xi]=!0,vl("selectionchange",!1,n))}}function Uc(e,n,t,r){switch(Cc(n)){case 1:var i=Yp;break;case 4:i=Xp;break;default:i=so}t=i.bind(null,n,t,e),i=void 0,!na||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function yl(e,n,t,r,i){var s=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var o=l.tag;if((o===3||o===4)&&(o=l.stateNode.containerInfo,o===i||o.nodeType===8&&o.parentNode===i))return;l=l.return}for(;a!==null;){if(l=ut(a),l===null)return;if(o=l.tag,o===5||o===6){r=s=l;continue e}a=a.parentNode}}r=r.return}cc(function(){var u=s,d=no(t),f=[];e:{var h=Ac.get(e);if(h!==void 0){var g=ao,v=e;switch(e){case"keypress":if(Oi(t)===0)break e;case"keydown":case"keyup":g=pm;break;case"focusin":v="focus",g=fl;break;case"focusout":v="blur",g=fl;break;case"beforeblur":case"afterblur":g=fl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=fu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=tm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=km;break;case Mc:case Dc:case Ic:g=sm;break;case Oc:g=ym;break;case"scroll":g=em;break;case"wheel":g=xm;break;case"copy":case"cut":case"paste":g=am;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=pu}var y=(n&4)!==0,x=!y&&e==="scroll",p=y?h!==null?h+"Capture":null:h;y=[];for(var m=u,k;m!==null;){k=m;var j=k.stateNode;if(k.tag===5&&j!==null&&(k=j,p!==null&&(j=Ur(m,p),j!=null&&y.push(Jr(m,j,k)))),x)break;m=m.return}0<y.length&&(h=new g(h,v,null,t,d),f.push({event:h,listeners:y}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&t!==Xl&&(v=t.relatedTarget||t.fromElement)&&(ut(v)||v[$n]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(v=t.relatedTarget||t.toElement,g=u,v=v?ut(v):null,v!==null&&(x=St(v),v!==x||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(y=fu,j="onMouseLeave",p="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(y=pu,j="onPointerLeave",p="onPointerEnter",m="pointer"),x=g==null?h:Rt(g),k=v==null?h:Rt(v),h=new y(j,m+"leave",g,t,d),h.target=x,h.relatedTarget=k,j=null,ut(d)===u&&(y=new y(p,m+"enter",v,t,d),y.target=k,y.relatedTarget=x,j=y),x=j,g&&v)n:{for(y=g,p=v,m=0,k=y;k;k=zt(k))m++;for(k=0,j=p;j;j=zt(j))k++;for(;0<m-k;)y=zt(y),m--;for(;0<k-m;)p=zt(p),k--;for(;m--;){if(y===p||p!==null&&y===p.alternate)break n;y=zt(y),p=zt(p)}y=null}else y=null;g!==null&&Cu(f,h,g,y,!1),v!==null&&x!==null&&Cu(f,x,v,y,!0)}}e:{if(h=u?Rt(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var w=_m;else if(ku(h))if(Rc)w=Lm;else{w=Pm;var C=$m}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(w=Rm);if(w&&(w=w(e,u))){Pc(f,w,t,d);break e}C&&C(e,h,u),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Gl(h,"number",h.value)}switch(C=u?Rt(u):window,e){case"focusin":(ku(C)||C.contentEditable==="true")&&($t=C,la=u,Rr=null);break;case"focusout":Rr=la=$t=null;break;case"mousedown":aa=!0;break;case"contextmenu":case"mouseup":case"dragend":aa=!1,wu(f,t,d);break;case"selectionchange":if(Tm)break;case"keydown":case"keyup":wu(f,t,d)}var z;if(uo)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else _t?_c(e,t)&&(S="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(S="onCompositionStart");S&&(bc&&t.locale!=="ko"&&(_t||S!=="onCompositionStart"?S==="onCompositionEnd"&&_t&&(z=Ec()):(Bn=d,lo="value"in Bn?Bn.value:Bn.textContent,_t=!0)),C=ls(u,S),0<C.length&&(S=new hu(S,e,null,t,d),f.push({event:S,listeners:C}),z?S.data=z:(z=$c(t),z!==null&&(S.data=z)))),(z=Sm?zm(e,t):Cm(e,t))&&(u=ls(u,"onBeforeInput"),0<u.length&&(d=new hu("onBeforeInput","beforeinput",null,t,d),f.push({event:d,listeners:u}),d.data=z))}Bc(f,n)})}function Jr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ls(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ur(e,t),s!=null&&r.unshift(Jr(e,s,i)),s=Ur(e,n),s!=null&&r.push(Jr(e,s,i))),e=e.return}return r}function zt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Cu(e,n,t,r,i){for(var s=n._reactName,l=[];t!==null&&t!==r;){var a=t,o=a.alternate,u=a.stateNode;if(o!==null&&o===r)break;a.tag===5&&u!==null&&(a=u,i?(o=Ur(t,s),o!=null&&l.unshift(Jr(t,o,a))):i||(o=Ur(t,s),o!=null&&l.push(Jr(t,o,a)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var Om=/\r\n?/g,Am=/\u0000|\uFFFD/g;function Eu(e){return(typeof e=="string"?e:""+e).replace(Om,`
`).replace(Am,"")}function wi(e,n,t){if(n=Eu(n),Eu(e)!==n&&t)throw Error(b(425))}function as(){}var oa=null,ua=null;function da(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ca=typeof setTimeout=="function"?setTimeout:void 0,Bm=typeof clearTimeout=="function"?clearTimeout:void 0,bu=typeof Promise=="function"?Promise:void 0,Um=typeof queueMicrotask=="function"?queueMicrotask:typeof bu<"u"?function(e){return bu.resolve(null).then(e).catch(qm)}:ca;function qm(e){setTimeout(function(){throw e})}function jl(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Wr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Wr(n)}function Kn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function _u(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var cr=Math.random().toString(36).slice(2),vn="__reactFiber$"+cr,Qr="__reactProps$"+cr,$n="__reactContainer$"+cr,fa="__reactEvents$"+cr,Hm="__reactListeners$"+cr,Wm="__reactHandles$"+cr;function ut(e){var n=e[vn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[$n]||t[vn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=_u(e);e!==null;){if(t=e[vn])return t;e=_u(e)}return n}e=t,t=e.parentNode}return null}function oi(e){return e=e[vn]||e[$n],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Rt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function Fs(e){return e[Qr]||null}var ha=[],Lt=-1;function tt(e){return{current:e}}function X(e){0>Lt||(e.current=ha[Lt],ha[Lt]=null,Lt--)}function J(e,n){Lt++,ha[Lt]=e.current,e.current=n}var Xn={},$e=tt(Xn),Oe=tt(!1),kt=Xn;function Jt(e,n){var t=e.type.contextTypes;if(!t)return Xn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in t)i[s]=n[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ae(e){return e=e.childContextTypes,e!=null}function os(){X(Oe),X($e)}function $u(e,n,t){if($e.current!==Xn)throw Error(b(168));J($e,n),J(Oe,t)}function qc(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(b(108,$p(e)||"Unknown",i));return se({},t,r)}function us(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Xn,kt=$e.current,J($e,e),J(Oe,Oe.current),!0}function Pu(e,n,t){var r=e.stateNode;if(!r)throw Error(b(169));t?(e=qc(e,n,kt),r.__reactInternalMemoizedMergedChildContext=e,X(Oe),X($e),J($e,e)):X(Oe),J(Oe,t)}var zn=null,Ns=!1,xl=!1;function Hc(e){zn===null?zn=[e]:zn.push(e)}function Km(e){Ns=!0,Hc(e)}function rt(){if(!xl&&zn!==null){xl=!0;var e=0,n=K;try{var t=zn;for(K=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}zn=null,Ns=!1}catch(i){throw zn!==null&&(zn=zn.slice(e+1)),mc(to,rt),i}finally{K=n,xl=!1}}return null}var Ft=[],Nt=0,ds=null,cs=0,Qe=[],Ze=0,vt=null,Cn=1,En="";function it(e,n){Ft[Nt++]=cs,Ft[Nt++]=ds,ds=e,cs=n}function Wc(e,n,t){Qe[Ze++]=Cn,Qe[Ze++]=En,Qe[Ze++]=vt,vt=e;var r=Cn;e=En;var i=32-on(r)-1;r&=~(1<<i),t+=1;var s=32-on(n)+i;if(30<s){var l=i-i%5;s=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Cn=1<<32-on(n)+i|t<<i|r,En=s+e}else Cn=1<<s|t<<i|r,En=e}function fo(e){e.return!==null&&(it(e,1),Wc(e,1,0))}function ho(e){for(;e===ds;)ds=Ft[--Nt],Ft[Nt]=null,cs=Ft[--Nt],Ft[Nt]=null;for(;e===vt;)vt=Qe[--Ze],Qe[Ze]=null,En=Qe[--Ze],Qe[Ze]=null,Cn=Qe[--Ze],Qe[Ze]=null}var Ke=null,We=null,ee=!1,an=null;function Kc(e,n){var t=Ye(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Ru(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ke=e,We=Kn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ke=e,We=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=vt!==null?{id:Cn,overflow:En}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ye(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ke=e,We=null,!0):!1;default:return!1}}function pa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ma(e){if(ee){var n=We;if(n){var t=n;if(!Ru(e,n)){if(pa(e))throw Error(b(418));n=Kn(t.nextSibling);var r=Ke;n&&Ru(e,n)?Kc(r,t):(e.flags=e.flags&-4097|2,ee=!1,Ke=e)}}else{if(pa(e))throw Error(b(418));e.flags=e.flags&-4097|2,ee=!1,Ke=e}}}function Lu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ke=e}function Si(e){if(e!==Ke)return!1;if(!ee)return Lu(e),ee=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!da(e.type,e.memoizedProps)),n&&(n=We)){if(pa(e))throw Vc(),Error(b(418));for(;n;)Kc(e,n),n=Kn(n.nextSibling)}if(Lu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){We=Kn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}We=null}}else We=Ke?Kn(e.stateNode.nextSibling):null;return!0}function Vc(){for(var e=We;e;)e=Kn(e.nextSibling)}function Qt(){We=Ke=null,ee=!1}function po(e){an===null?an=[e]:an.push(e)}var Vm=Ln.ReactCurrentBatchConfig;function vr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(b(309));var r=t.stateNode}if(!r)throw Error(b(147,e));var i=r,s=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===s?n.ref:(n=function(l){var a=i.refs;l===null?delete a[s]:a[s]=l},n._stringRef=s,n)}if(typeof e!="string")throw Error(b(284));if(!t._owner)throw Error(b(290,e))}return e}function zi(e,n){throw e=Object.prototype.toString.call(n),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Fu(e){var n=e._init;return n(e._payload)}function Gc(e){function n(p,m){if(e){var k=p.deletions;k===null?(p.deletions=[m],p.flags|=16):k.push(m)}}function t(p,m){if(!e)return null;for(;m!==null;)n(p,m),m=m.sibling;return null}function r(p,m){for(p=new Map;m!==null;)m.key!==null?p.set(m.key,m):p.set(m.index,m),m=m.sibling;return p}function i(p,m){return p=Qn(p,m),p.index=0,p.sibling=null,p}function s(p,m,k){return p.index=k,e?(k=p.alternate,k!==null?(k=k.index,k<m?(p.flags|=2,m):k):(p.flags|=2,m)):(p.flags|=1048576,m)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,m,k,j){return m===null||m.tag!==6?(m=_l(k,p.mode,j),m.return=p,m):(m=i(m,k),m.return=p,m)}function o(p,m,k,j){var w=k.type;return w===bt?d(p,m,k.props.children,j,k.key):m!==null&&(m.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Dn&&Fu(w)===m.type)?(j=i(m,k.props),j.ref=vr(p,m,k),j.return=p,j):(j=Ki(k.type,k.key,k.props,null,p.mode,j),j.ref=vr(p,m,k),j.return=p,j)}function u(p,m,k,j){return m===null||m.tag!==4||m.stateNode.containerInfo!==k.containerInfo||m.stateNode.implementation!==k.implementation?(m=$l(k,p.mode,j),m.return=p,m):(m=i(m,k.children||[]),m.return=p,m)}function d(p,m,k,j,w){return m===null||m.tag!==7?(m=pt(k,p.mode,j,w),m.return=p,m):(m=i(m,k),m.return=p,m)}function f(p,m,k){if(typeof m=="string"&&m!==""||typeof m=="number")return m=_l(""+m,p.mode,k),m.return=p,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case hi:return k=Ki(m.type,m.key,m.props,null,p.mode,k),k.ref=vr(p,null,m),k.return=p,k;case Et:return m=$l(m,p.mode,k),m.return=p,m;case Dn:var j=m._init;return f(p,j(m._payload),k)}if(wr(m)||hr(m))return m=pt(m,p.mode,k,null),m.return=p,m;zi(p,m)}return null}function h(p,m,k,j){var w=m!==null?m.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return w!==null?null:a(p,m,""+k,j);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case hi:return k.key===w?o(p,m,k,j):null;case Et:return k.key===w?u(p,m,k,j):null;case Dn:return w=k._init,h(p,m,w(k._payload),j)}if(wr(k)||hr(k))return w!==null?null:d(p,m,k,j,null);zi(p,k)}return null}function g(p,m,k,j,w){if(typeof j=="string"&&j!==""||typeof j=="number")return p=p.get(k)||null,a(m,p,""+j,w);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case hi:return p=p.get(j.key===null?k:j.key)||null,o(m,p,j,w);case Et:return p=p.get(j.key===null?k:j.key)||null,u(m,p,j,w);case Dn:var C=j._init;return g(p,m,k,C(j._payload),w)}if(wr(j)||hr(j))return p=p.get(k)||null,d(m,p,j,w,null);zi(m,j)}return null}function v(p,m,k,j){for(var w=null,C=null,z=m,S=m=0,L=null;z!==null&&S<k.length;S++){z.index>S?(L=z,z=null):L=z.sibling;var $=h(p,z,k[S],j);if($===null){z===null&&(z=L);break}e&&z&&$.alternate===null&&n(p,z),m=s($,m,S),C===null?w=$:C.sibling=$,C=$,z=L}if(S===k.length)return t(p,z),ee&&it(p,S),w;if(z===null){for(;S<k.length;S++)z=f(p,k[S],j),z!==null&&(m=s(z,m,S),C===null?w=z:C.sibling=z,C=z);return ee&&it(p,S),w}for(z=r(p,z);S<k.length;S++)L=g(z,p,S,k[S],j),L!==null&&(e&&L.alternate!==null&&z.delete(L.key===null?S:L.key),m=s(L,m,S),C===null?w=L:C.sibling=L,C=L);return e&&z.forEach(function(q){return n(p,q)}),ee&&it(p,S),w}function y(p,m,k,j){var w=hr(k);if(typeof w!="function")throw Error(b(150));if(k=w.call(k),k==null)throw Error(b(151));for(var C=w=null,z=m,S=m=0,L=null,$=k.next();z!==null&&!$.done;S++,$=k.next()){z.index>S?(L=z,z=null):L=z.sibling;var q=h(p,z,$.value,j);if(q===null){z===null&&(z=L);break}e&&z&&q.alternate===null&&n(p,z),m=s(q,m,S),C===null?w=q:C.sibling=q,C=q,z=L}if($.done)return t(p,z),ee&&it(p,S),w;if(z===null){for(;!$.done;S++,$=k.next())$=f(p,$.value,j),$!==null&&(m=s($,m,S),C===null?w=$:C.sibling=$,C=$);return ee&&it(p,S),w}for(z=r(p,z);!$.done;S++,$=k.next())$=g(z,p,S,$.value,j),$!==null&&(e&&$.alternate!==null&&z.delete($.key===null?S:$.key),m=s($,m,S),C===null?w=$:C.sibling=$,C=$);return e&&z.forEach(function(T){return n(p,T)}),ee&&it(p,S),w}function x(p,m,k,j){if(typeof k=="object"&&k!==null&&k.type===bt&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case hi:e:{for(var w=k.key,C=m;C!==null;){if(C.key===w){if(w=k.type,w===bt){if(C.tag===7){t(p,C.sibling),m=i(C,k.props.children),m.return=p,p=m;break e}}else if(C.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Dn&&Fu(w)===C.type){t(p,C.sibling),m=i(C,k.props),m.ref=vr(p,C,k),m.return=p,p=m;break e}t(p,C);break}else n(p,C);C=C.sibling}k.type===bt?(m=pt(k.props.children,p.mode,j,k.key),m.return=p,p=m):(j=Ki(k.type,k.key,k.props,null,p.mode,j),j.ref=vr(p,m,k),j.return=p,p=j)}return l(p);case Et:e:{for(C=k.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===k.containerInfo&&m.stateNode.implementation===k.implementation){t(p,m.sibling),m=i(m,k.children||[]),m.return=p,p=m;break e}else{t(p,m);break}else n(p,m);m=m.sibling}m=$l(k,p.mode,j),m.return=p,p=m}return l(p);case Dn:return C=k._init,x(p,m,C(k._payload),j)}if(wr(k))return v(p,m,k,j);if(hr(k))return y(p,m,k,j);zi(p,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,m!==null&&m.tag===6?(t(p,m.sibling),m=i(m,k),m.return=p,p=m):(t(p,m),m=_l(k,p.mode,j),m.return=p,p=m),l(p)):t(p,m)}return x}var Zt=Gc(!0),Jc=Gc(!1),fs=tt(null),hs=null,Tt=null,mo=null;function go(){mo=Tt=hs=null}function ko(e){var n=fs.current;X(fs),e._currentValue=n}function ga(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Wt(e,n){hs=e,mo=Tt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(De=!0),e.firstContext=null)}function en(e){var n=e._currentValue;if(mo!==e)if(e={context:e,memoizedValue:n,next:null},Tt===null){if(hs===null)throw Error(b(308));Tt=e,hs.dependencies={lanes:0,firstContext:e}}else Tt=Tt.next=e;return n}var dt=null;function vo(e){dt===null?dt=[e]:dt.push(e)}function Qc(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,vo(n)):(t.next=i.next,i.next=t),n.interleaved=t,Pn(e,r)}function Pn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var In=!1;function yo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function bn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Vn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,Pn(e,t)}return i=r.interleaved,i===null?(n.next=n,vo(r)):(n.next=i.next,i.next=n),r.interleaved=n,Pn(e,t)}function Ai(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ro(e,t)}}function Nu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?i=s=l:s=s.next=l,t=t.next}while(t!==null);s===null?i=s=n:s=s.next=n}else i=s=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function ps(e,n,t,r){var i=e.updateQueue;In=!1;var s=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var o=a,u=o.next;o.next=null,l===null?s=u:l.next=u,l=o;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==l&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=o))}if(s!==null){var f=i.baseState;l=0,d=u=o=null,a=s;do{var h=a.lane,g=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,y=a;switch(h=n,g=t,y.tag){case 1:if(v=y.payload,typeof v=="function"){f=v.call(g,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(g,f,h):v,h==null)break e;f=se({},f,h);break e;case 2:In=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=g,o=f):d=d.next=g,l|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(o=f),i.baseState=o,i.firstBaseUpdate=u,i.lastBaseUpdate=d,n=i.shared.interleaved,n!==null){i=n;do l|=i.lane,i=i.next;while(i!==n)}else s===null&&(i.shared.lanes=0);jt|=l,e.lanes=l,e.memoizedState=f}}function Tu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var ui={},jn=tt(ui),Zr=tt(ui),Yr=tt(ui);function ct(e){if(e===ui)throw Error(b(174));return e}function jo(e,n){switch(J(Yr,n),J(Zr,e),J(jn,ui),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ql(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ql(n,e)}X(jn),J(jn,n)}function Yt(){X(jn),X(Zr),X(Yr)}function Yc(e){ct(Yr.current);var n=ct(jn.current),t=Ql(n,e.type);n!==t&&(J(Zr,e),J(jn,t))}function xo(e){Zr.current===e&&(X(jn),X(Zr))}var re=tt(0);function ms(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var wl=[];function wo(){for(var e=0;e<wl.length;e++)wl[e]._workInProgressVersionPrimary=null;wl.length=0}var Bi=Ln.ReactCurrentDispatcher,Sl=Ln.ReactCurrentBatchConfig,yt=0,ie=null,he=null,me=null,gs=!1,Lr=!1,Xr=0,Gm=0;function ze(){throw Error(b(321))}function So(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!cn(e[t],n[t]))return!1;return!0}function zo(e,n,t,r,i,s){if(yt=s,ie=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Bi.current=e===null||e.memoizedState===null?Ym:Xm,e=t(r,i),Lr){s=0;do{if(Lr=!1,Xr=0,25<=s)throw Error(b(301));s+=1,me=he=null,n.updateQueue=null,Bi.current=eg,e=t(r,i)}while(Lr)}if(Bi.current=ks,n=he!==null&&he.next!==null,yt=0,me=he=ie=null,gs=!1,n)throw Error(b(300));return e}function Co(){var e=Xr!==0;return Xr=0,e}function mn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?ie.memoizedState=me=e:me=me.next=e,me}function nn(){if(he===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var n=me===null?ie.memoizedState:me.next;if(n!==null)me=n,he=e;else{if(e===null)throw Error(b(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},me===null?ie.memoizedState=me=e:me=me.next=e}return me}function ei(e,n){return typeof n=="function"?n(e):n}function zl(e){var n=nn(),t=n.queue;if(t===null)throw Error(b(311));t.lastRenderedReducer=e;var r=he,i=r.baseQueue,s=t.pending;if(s!==null){if(i!==null){var l=i.next;i.next=s.next,s.next=l}r.baseQueue=i=s,t.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=l=null,o=null,u=s;do{var d=u.lane;if((yt&d)===d)o!==null&&(o=o.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};o===null?(a=o=f,l=r):o=o.next=f,ie.lanes|=d,jt|=d}u=u.next}while(u!==null&&u!==s);o===null?l=r:o.next=a,cn(r,n.memoizedState)||(De=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=o,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do s=i.lane,ie.lanes|=s,jt|=s,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Cl(e){var n=nn(),t=n.queue;if(t===null)throw Error(b(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,s=n.memoizedState;if(i!==null){t.pending=null;var l=i=i.next;do s=e(s,l.action),l=l.next;while(l!==i);cn(s,n.memoizedState)||(De=!0),n.memoizedState=s,n.baseQueue===null&&(n.baseState=s),t.lastRenderedState=s}return[s,r]}function Xc(){}function ef(e,n){var t=ie,r=nn(),i=n(),s=!cn(r.memoizedState,i);if(s&&(r.memoizedState=i,De=!0),r=r.queue,Eo(rf.bind(null,t,r,e),[e]),r.getSnapshot!==n||s||me!==null&&me.memoizedState.tag&1){if(t.flags|=2048,ni(9,tf.bind(null,t,r,i,n),void 0,null),ke===null)throw Error(b(349));yt&30||nf(t,n,i)}return i}function nf(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ie.updateQueue,n===null?(n={lastEffect:null,stores:null},ie.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function tf(e,n,t,r){n.value=t,n.getSnapshot=r,sf(n)&&lf(e)}function rf(e,n,t){return t(function(){sf(n)&&lf(e)})}function sf(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!cn(e,t)}catch{return!0}}function lf(e){var n=Pn(e,1);n!==null&&un(n,e,1,-1)}function Mu(e){var n=mn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ei,lastRenderedState:e},n.queue=e,e=e.dispatch=Zm.bind(null,ie,e),[n.memoizedState,e]}function ni(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=ie.updateQueue,n===null?(n={lastEffect:null,stores:null},ie.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function af(){return nn().memoizedState}function Ui(e,n,t,r){var i=mn();ie.flags|=e,i.memoizedState=ni(1|n,t,void 0,r===void 0?null:r)}function Ts(e,n,t,r){var i=nn();r=r===void 0?null:r;var s=void 0;if(he!==null){var l=he.memoizedState;if(s=l.destroy,r!==null&&So(r,l.deps)){i.memoizedState=ni(n,t,s,r);return}}ie.flags|=e,i.memoizedState=ni(1|n,t,s,r)}function Du(e,n){return Ui(8390656,8,e,n)}function Eo(e,n){return Ts(2048,8,e,n)}function of(e,n){return Ts(4,2,e,n)}function uf(e,n){return Ts(4,4,e,n)}function df(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function cf(e,n,t){return t=t!=null?t.concat([e]):null,Ts(4,4,df.bind(null,n,e),t)}function bo(){}function ff(e,n){var t=nn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&So(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function hf(e,n){var t=nn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&So(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function pf(e,n,t){return yt&21?(cn(t,n)||(t=vc(),ie.lanes|=t,jt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,De=!0),e.memoizedState=t)}function Jm(e,n){var t=K;K=t!==0&&4>t?t:4,e(!0);var r=Sl.transition;Sl.transition={};try{e(!1),n()}finally{K=t,Sl.transition=r}}function mf(){return nn().memoizedState}function Qm(e,n,t){var r=Jn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},gf(e))kf(n,t);else if(t=Qc(e,n,t,r),t!==null){var i=Fe();un(t,e,r,i),vf(t,n,r)}}function Zm(e,n,t){var r=Jn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(gf(e))kf(n,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=n.lastRenderedReducer,s!==null))try{var l=n.lastRenderedState,a=s(l,t);if(i.hasEagerState=!0,i.eagerState=a,cn(a,l)){var o=n.interleaved;o===null?(i.next=i,vo(n)):(i.next=o.next,o.next=i),n.interleaved=i;return}}catch{}finally{}t=Qc(e,n,i,r),t!==null&&(i=Fe(),un(t,e,r,i),vf(t,n,r))}}function gf(e){var n=e.alternate;return e===ie||n!==null&&n===ie}function kf(e,n){Lr=gs=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function vf(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ro(e,t)}}var ks={readContext:en,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},Ym={readContext:en,useCallback:function(e,n){return mn().memoizedState=[e,n===void 0?null:n],e},useContext:en,useEffect:Du,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Ui(4194308,4,df.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ui(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ui(4,2,e,n)},useMemo:function(e,n){var t=mn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=mn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Qm.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var n=mn();return e={current:e},n.memoizedState=e},useState:Mu,useDebugValue:bo,useDeferredValue:function(e){return mn().memoizedState=e},useTransition:function(){var e=Mu(!1),n=e[0];return e=Jm.bind(null,e[1]),mn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=ie,i=mn();if(ee){if(t===void 0)throw Error(b(407));t=t()}else{if(t=n(),ke===null)throw Error(b(349));yt&30||nf(r,n,t)}i.memoizedState=t;var s={value:t,getSnapshot:n};return i.queue=s,Du(rf.bind(null,r,s,e),[e]),r.flags|=2048,ni(9,tf.bind(null,r,s,t,n),void 0,null),t},useId:function(){var e=mn(),n=ke.identifierPrefix;if(ee){var t=En,r=Cn;t=(r&~(1<<32-on(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Xr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Gm++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Xm={readContext:en,useCallback:ff,useContext:en,useEffect:Eo,useImperativeHandle:cf,useInsertionEffect:of,useLayoutEffect:uf,useMemo:hf,useReducer:zl,useRef:af,useState:function(){return zl(ei)},useDebugValue:bo,useDeferredValue:function(e){var n=nn();return pf(n,he.memoizedState,e)},useTransition:function(){var e=zl(ei)[0],n=nn().memoizedState;return[e,n]},useMutableSource:Xc,useSyncExternalStore:ef,useId:mf,unstable_isNewReconciler:!1},eg={readContext:en,useCallback:ff,useContext:en,useEffect:Eo,useImperativeHandle:cf,useInsertionEffect:of,useLayoutEffect:uf,useMemo:hf,useReducer:Cl,useRef:af,useState:function(){return Cl(ei)},useDebugValue:bo,useDeferredValue:function(e){var n=nn();return he===null?n.memoizedState=e:pf(n,he.memoizedState,e)},useTransition:function(){var e=Cl(ei)[0],n=nn().memoizedState;return[e,n]},useMutableSource:Xc,useSyncExternalStore:ef,useId:mf,unstable_isNewReconciler:!1};function sn(e,n){if(e&&e.defaultProps){n=se({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function ka(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:se({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ms={isMounted:function(e){return(e=e._reactInternals)?St(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Fe(),i=Jn(e),s=bn(r,i);s.payload=n,t!=null&&(s.callback=t),n=Vn(e,s,i),n!==null&&(un(n,e,i,r),Ai(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Fe(),i=Jn(e),s=bn(r,i);s.tag=1,s.payload=n,t!=null&&(s.callback=t),n=Vn(e,s,i),n!==null&&(un(n,e,i,r),Ai(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Fe(),r=Jn(e),i=bn(t,r);i.tag=2,n!=null&&(i.callback=n),n=Vn(e,i,r),n!==null&&(un(n,e,r,t),Ai(n,e,r))}};function Iu(e,n,t,r,i,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,l):n.prototype&&n.prototype.isPureReactComponent?!Vr(t,r)||!Vr(i,s):!0}function yf(e,n,t){var r=!1,i=Xn,s=n.contextType;return typeof s=="object"&&s!==null?s=en(s):(i=Ae(n)?kt:$e.current,r=n.contextTypes,s=(r=r!=null)?Jt(e,i):Xn),n=new n(t,s),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ms,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),n}function Ou(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Ms.enqueueReplaceState(n,n.state,null)}function va(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},yo(e);var s=n.contextType;typeof s=="object"&&s!==null?i.context=en(s):(s=Ae(n)?kt:$e.current,i.context=Jt(e,s)),i.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(ka(e,n,s,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Ms.enqueueReplaceState(i,i.state,null),ps(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Xt(e,n){try{var t="",r=n;do t+=_p(r),r=r.return;while(r);var i=t}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:n,stack:i,digest:null}}function El(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function ya(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var ng=typeof WeakMap=="function"?WeakMap:Map;function jf(e,n,t){t=bn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){ys||(ys=!0,$a=r),ya(e,n)},t}function xf(e,n,t){t=bn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){ya(e,n)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){ya(e,n),typeof r!="function"&&(Gn===null?Gn=new Set([this]):Gn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function Au(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new ng;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=mg.bind(null,e,n,t),n.then(e,e))}function Bu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Uu(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=bn(-1,1),n.tag=2,Vn(t,n,1))),t.lanes|=1),e)}var tg=Ln.ReactCurrentOwner,De=!1;function Re(e,n,t,r){n.child=e===null?Jc(n,null,t,r):Zt(n,e.child,t,r)}function qu(e,n,t,r,i){t=t.render;var s=n.ref;return Wt(n,i),r=zo(e,n,t,r,s,i),t=Co(),e!==null&&!De?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Rn(e,n,i)):(ee&&t&&fo(n),n.flags|=1,Re(e,n,r,i),n.child)}function Hu(e,n,t,r,i){if(e===null){var s=t.type;return typeof s=="function"&&!To(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=s,wf(e,n,s,r,i)):(e=Ki(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(s=e.child,!(e.lanes&i)){var l=s.memoizedProps;if(t=t.compare,t=t!==null?t:Vr,t(l,r)&&e.ref===n.ref)return Rn(e,n,i)}return n.flags|=1,e=Qn(s,r),e.ref=n.ref,e.return=n,n.child=e}function wf(e,n,t,r,i){if(e!==null){var s=e.memoizedProps;if(Vr(s,r)&&e.ref===n.ref)if(De=!1,n.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(De=!0);else return n.lanes=e.lanes,Rn(e,n,i)}return ja(e,n,t,r,i)}function Sf(e,n,t){var r=n.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(Dt,He),He|=t;else{if(!(t&1073741824))return e=s!==null?s.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,J(Dt,He),He|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:t,J(Dt,He),He|=r}else s!==null?(r=s.baseLanes|t,n.memoizedState=null):r=t,J(Dt,He),He|=r;return Re(e,n,i,t),n.child}function zf(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function ja(e,n,t,r,i){var s=Ae(t)?kt:$e.current;return s=Jt(n,s),Wt(n,i),t=zo(e,n,t,r,s,i),r=Co(),e!==null&&!De?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Rn(e,n,i)):(ee&&r&&fo(n),n.flags|=1,Re(e,n,t,i),n.child)}function Wu(e,n,t,r,i){if(Ae(t)){var s=!0;us(n)}else s=!1;if(Wt(n,i),n.stateNode===null)qi(e,n),yf(n,t,r),va(n,t,r,i),r=!0;else if(e===null){var l=n.stateNode,a=n.memoizedProps;l.props=a;var o=l.context,u=t.contextType;typeof u=="object"&&u!==null?u=en(u):(u=Ae(t)?kt:$e.current,u=Jt(n,u));var d=t.getDerivedStateFromProps,f=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||o!==u)&&Ou(n,l,r,u),In=!1;var h=n.memoizedState;l.state=h,ps(n,r,l,i),o=n.memoizedState,a!==r||h!==o||Oe.current||In?(typeof d=="function"&&(ka(n,t,d,r),o=n.memoizedState),(a=In||Iu(n,t,a,r,h,o,u))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=o),l.props=r,l.state=o,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,Zc(e,n),a=n.memoizedProps,u=n.type===n.elementType?a:sn(n.type,a),l.props=u,f=n.pendingProps,h=l.context,o=t.contextType,typeof o=="object"&&o!==null?o=en(o):(o=Ae(t)?kt:$e.current,o=Jt(n,o));var g=t.getDerivedStateFromProps;(d=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==f||h!==o)&&Ou(n,l,r,o),In=!1,h=n.memoizedState,l.state=h,ps(n,r,l,i);var v=n.memoizedState;a!==f||h!==v||Oe.current||In?(typeof g=="function"&&(ka(n,t,g,r),v=n.memoizedState),(u=In||Iu(n,t,u,r,h,v,o)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,v,o),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,v,o)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=v),l.props=r,l.state=v,l.context=o,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),r=!1)}return xa(e,n,t,r,s,i)}function xa(e,n,t,r,i,s){zf(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return i&&Pu(n,t,!1),Rn(e,n,s);r=n.stateNode,tg.current=n;var a=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=Zt(n,e.child,null,s),n.child=Zt(n,null,a,s)):Re(e,n,a,s),n.memoizedState=r.state,i&&Pu(n,t,!0),n.child}function Cf(e){var n=e.stateNode;n.pendingContext?$u(e,n.pendingContext,n.pendingContext!==n.context):n.context&&$u(e,n.context,!1),jo(e,n.containerInfo)}function Ku(e,n,t,r,i){return Qt(),po(i),n.flags|=256,Re(e,n,t,r),n.child}var wa={dehydrated:null,treeContext:null,retryLane:0};function Sa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ef(e,n,t){var r=n.pendingProps,i=re.current,s=!1,l=(n.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),J(re,i&1),e===null)return ma(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=r.children,e=r.fallback,s?(r=n.mode,s=n.child,l={mode:"hidden",children:l},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=Os(l,r,0,null),e=pt(e,r,t,null),s.return=n,e.return=n,s.sibling=e,n.child=s,n.child.memoizedState=Sa(t),n.memoizedState=wa,e):_o(n,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return rg(e,n,l,r,a,i,t);if(s){s=r.fallback,l=n.mode,i=e.child,a=i.sibling;var o={mode:"hidden",children:r.children};return!(l&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=o,n.deletions=null):(r=Qn(i,o),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Qn(a,s):(s=pt(s,l,t,null),s.flags|=2),s.return=n,r.return=n,r.sibling=s,n.child=r,r=s,s=n.child,l=e.child.memoizedState,l=l===null?Sa(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~t,n.memoizedState=wa,r}return s=e.child,e=s.sibling,r=Qn(s,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function _o(e,n){return n=Os({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Ci(e,n,t,r){return r!==null&&po(r),Zt(n,e.child,null,t),e=_o(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function rg(e,n,t,r,i,s,l){if(t)return n.flags&256?(n.flags&=-257,r=El(Error(b(422))),Ci(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(s=r.fallback,i=n.mode,r=Os({mode:"visible",children:r.children},i,0,null),s=pt(s,i,l,null),s.flags|=2,r.return=n,s.return=n,r.sibling=s,n.child=r,n.mode&1&&Zt(n,e.child,null,l),n.child.memoizedState=Sa(l),n.memoizedState=wa,s);if(!(n.mode&1))return Ci(e,n,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(b(419)),r=El(s,r,void 0),Ci(e,n,l,r)}if(a=(l&e.childLanes)!==0,De||a){if(r=ke,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Pn(e,i),un(r,e,i,-1))}return No(),r=El(Error(b(421))),Ci(e,n,l,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=gg.bind(null,e),i._reactRetry=n,null):(e=s.treeContext,We=Kn(i.nextSibling),Ke=n,ee=!0,an=null,e!==null&&(Qe[Ze++]=Cn,Qe[Ze++]=En,Qe[Ze++]=vt,Cn=e.id,En=e.overflow,vt=n),n=_o(n,r.children),n.flags|=4096,n)}function Vu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ga(e.return,n,t)}function bl(e,n,t,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(s.isBackwards=n,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=t,s.tailMode=i)}function bf(e,n,t){var r=n.pendingProps,i=r.revealOrder,s=r.tail;if(Re(e,n,r.children,t),r=re.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vu(e,t,n);else if(e.tag===19)Vu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(J(re,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&ms(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),bl(n,!1,i,t,s);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&ms(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}bl(n,!0,t,null,s);break;case"together":bl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function qi(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Rn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),jt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(b(153));if(n.child!==null){for(e=n.child,t=Qn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Qn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function ig(e,n,t){switch(n.tag){case 3:Cf(n),Qt();break;case 5:Yc(n);break;case 1:Ae(n.type)&&us(n);break;case 4:jo(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;J(fs,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(J(re,re.current&1),n.flags|=128,null):t&n.child.childLanes?Ef(e,n,t):(J(re,re.current&1),e=Rn(e,n,t),e!==null?e.sibling:null);J(re,re.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return bf(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),J(re,re.current),r)break;return null;case 22:case 23:return n.lanes=0,Sf(e,n,t)}return Rn(e,n,t)}var _f,za,$f,Pf;_f=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};za=function(){};$f=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,ct(jn.current);var s=null;switch(t){case"input":i=Kl(e,i),r=Kl(e,r),s=[];break;case"select":i=se({},i,{value:void 0}),r=se({},r,{value:void 0}),s=[];break;case"textarea":i=Jl(e,i),r=Jl(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=as)}Zl(t,r);var l;t=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(l in a)a.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ar.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var o=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&o!==a&&(o!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||o&&o.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in o)o.hasOwnProperty(l)&&a[l]!==o[l]&&(t||(t={}),t[l]=o[l])}else t||(s||(s=[]),s.push(u,t)),t=o;else u==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,a=a?a.__html:void 0,o!=null&&a!==o&&(s=s||[]).push(u,o)):u==="children"?typeof o!="string"&&typeof o!="number"||(s=s||[]).push(u,""+o):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ar.hasOwnProperty(u)?(o!=null&&u==="onScroll"&&Z("scroll",e),s||a===o||(s=[])):(s=s||[]).push(u,o))}t&&(s=s||[]).push("style",t);var u=s;(n.updateQueue=u)&&(n.flags|=4)}};Pf=function(e,n,t,r){t!==r&&(n.flags|=4)};function yr(e,n){if(!ee)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function sg(e,n,t){var r=n.pendingProps;switch(ho(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(n),null;case 1:return Ae(n.type)&&os(),Ce(n),null;case 3:return r=n.stateNode,Yt(),X(Oe),X($e),wo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Si(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,an!==null&&(La(an),an=null))),za(e,n),Ce(n),null;case 5:xo(n);var i=ct(Yr.current);if(t=n.type,e!==null&&n.stateNode!=null)$f(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(b(166));return Ce(n),null}if(e=ct(jn.current),Si(n)){r=n.stateNode,t=n.type;var s=n.memoizedProps;switch(r[vn]=n,r[Qr]=s,e=(n.mode&1)!==0,t){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(i=0;i<zr.length;i++)Z(zr[i],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":tu(r,s),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Z("invalid",r);break;case"textarea":iu(r,s),Z("invalid",r)}Zl(t,s),i=null;for(var l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&wi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&wi(r.textContent,a,e),i=["children",""+a]):Ar.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&Z("scroll",r)}switch(t){case"input":pi(r),ru(r,s,!0);break;case"textarea":pi(r),su(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=as)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=rc(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[vn]=n,e[Qr]=r,_f(e,n,!1,!1),n.stateNode=e;e:{switch(l=Yl(t,r),t){case"dialog":Z("cancel",e),Z("close",e),i=r;break;case"iframe":case"object":case"embed":Z("load",e),i=r;break;case"video":case"audio":for(i=0;i<zr.length;i++)Z(zr[i],e);i=r;break;case"source":Z("error",e),i=r;break;case"img":case"image":case"link":Z("error",e),Z("load",e),i=r;break;case"details":Z("toggle",e),i=r;break;case"input":tu(e,r),i=Kl(e,r),Z("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=se({},r,{value:void 0}),Z("invalid",e);break;case"textarea":iu(e,r),i=Jl(e,r),Z("invalid",e);break;default:i=r}Zl(t,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var o=a[s];s==="style"?lc(e,o):s==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&ic(e,o)):s==="children"?typeof o=="string"?(t!=="textarea"||o!=="")&&Br(e,o):typeof o=="number"&&Br(e,""+o):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ar.hasOwnProperty(s)?o!=null&&s==="onScroll"&&Z("scroll",e):o!=null&&Za(e,s,o,l))}switch(t){case"input":pi(e),ru(e,r,!1);break;case"textarea":pi(e),su(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Yn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Bt(e,!!r.multiple,s,!1):r.defaultValue!=null&&Bt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=as)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ce(n),null;case 6:if(e&&n.stateNode!=null)Pf(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(b(166));if(t=ct(Yr.current),ct(jn.current),Si(n)){if(r=n.stateNode,t=n.memoizedProps,r[vn]=n,(s=r.nodeValue!==t)&&(e=Ke,e!==null))switch(e.tag){case 3:wi(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wi(r.nodeValue,t,(e.mode&1)!==0)}s&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[vn]=n,n.stateNode=r}return Ce(n),null;case 13:if(X(re),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ee&&We!==null&&n.mode&1&&!(n.flags&128))Vc(),Qt(),n.flags|=98560,s=!1;else if(s=Si(n),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(b(318));if(s=n.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[vn]=n}else Qt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Ce(n),s=!1}else an!==null&&(La(an),an=null),s=!0;if(!s)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||re.current&1?pe===0&&(pe=3):No())),n.updateQueue!==null&&(n.flags|=4),Ce(n),null);case 4:return Yt(),za(e,n),e===null&&Gr(n.stateNode.containerInfo),Ce(n),null;case 10:return ko(n.type._context),Ce(n),null;case 17:return Ae(n.type)&&os(),Ce(n),null;case 19:if(X(re),s=n.memoizedState,s===null)return Ce(n),null;if(r=(n.flags&128)!==0,l=s.rendering,l===null)if(r)yr(s,!1);else{if(pe!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=ms(e),l!==null){for(n.flags|=128,yr(s,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)s=t,e=r,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return J(re,re.current&1|2),n.child}e=e.sibling}s.tail!==null&&oe()>er&&(n.flags|=128,r=!0,yr(s,!1),n.lanes=4194304)}else{if(!r)if(e=ms(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),yr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!ee)return Ce(n),null}else 2*oe()-s.renderingStartTime>er&&t!==1073741824&&(n.flags|=128,r=!0,yr(s,!1),n.lanes=4194304);s.isBackwards?(l.sibling=n.child,n.child=l):(t=s.last,t!==null?t.sibling=l:n.child=l,s.last=l)}return s.tail!==null?(n=s.tail,s.rendering=n,s.tail=n.sibling,s.renderingStartTime=oe(),n.sibling=null,t=re.current,J(re,r?t&1|2:t&1),n):(Ce(n),null);case 22:case 23:return Fo(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?He&1073741824&&(Ce(n),n.subtreeFlags&6&&(n.flags|=8192)):Ce(n),null;case 24:return null;case 25:return null}throw Error(b(156,n.tag))}function lg(e,n){switch(ho(n),n.tag){case 1:return Ae(n.type)&&os(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Yt(),X(Oe),X($e),wo(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return xo(n),null;case 13:if(X(re),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(b(340));Qt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return X(re),null;case 4:return Yt(),null;case 10:return ko(n.type._context),null;case 22:case 23:return Fo(),null;case 24:return null;default:return null}}var Ei=!1,be=!1,ag=typeof WeakSet=="function"?WeakSet:Set,P=null;function Mt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){ae(e,n,r)}else t.current=null}function Ca(e,n,t){try{t()}catch(r){ae(e,n,r)}}var Gu=!1;function og(e,n){if(oa=is,e=Nc(),co(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var l=0,a=-1,o=-1,u=0,d=0,f=e,h=null;n:for(;;){for(var g;f!==t||i!==0&&f.nodeType!==3||(a=l+i),f!==s||r!==0&&f.nodeType!==3||(o=l+r),f.nodeType===3&&(l+=f.nodeValue.length),(g=f.firstChild)!==null;)h=f,f=g;for(;;){if(f===e)break n;if(h===t&&++u===i&&(a=l),h===s&&++d===r&&(o=l),(g=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=g}t=a===-1||o===-1?null:{start:a,end:o}}else t=null}t=t||{start:0,end:0}}else t=null;for(ua={focusedElem:e,selectionRange:t},is=!1,P=n;P!==null;)if(n=P,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,P=e;else for(;P!==null;){n=P;try{var v=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,x=v.memoizedState,p=n.stateNode,m=p.getSnapshotBeforeUpdate(n.elementType===n.type?y:sn(n.type,y),x);p.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var k=n.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(j){ae(n,n.return,j)}if(e=n.sibling,e!==null){e.return=n.return,P=e;break}P=n.return}return v=Gu,Gu=!1,v}function Fr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ca(n,t,s)}i=i.next}while(i!==r)}}function Ds(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Ea(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Rf(e){var n=e.alternate;n!==null&&(e.alternate=null,Rf(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[vn],delete n[Qr],delete n[fa],delete n[Hm],delete n[Wm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Lf(e){return e.tag===5||e.tag===3||e.tag===4}function Ju(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Lf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ba(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=as));else if(r!==4&&(e=e.child,e!==null))for(ba(e,n,t),e=e.sibling;e!==null;)ba(e,n,t),e=e.sibling}function _a(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(_a(e,n,t),e=e.sibling;e!==null;)_a(e,n,t),e=e.sibling}var ye=null,ln=!1;function Tn(e,n,t){for(t=t.child;t!==null;)Ff(e,n,t),t=t.sibling}function Ff(e,n,t){if(yn&&typeof yn.onCommitFiberUnmount=="function")try{yn.onCommitFiberUnmount($s,t)}catch{}switch(t.tag){case 5:be||Mt(t,n);case 6:var r=ye,i=ln;ye=null,Tn(e,n,t),ye=r,ln=i,ye!==null&&(ln?(e=ye,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ye.removeChild(t.stateNode));break;case 18:ye!==null&&(ln?(e=ye,t=t.stateNode,e.nodeType===8?jl(e.parentNode,t):e.nodeType===1&&jl(e,t),Wr(e)):jl(ye,t.stateNode));break;case 4:r=ye,i=ln,ye=t.stateNode.containerInfo,ln=!0,Tn(e,n,t),ye=r,ln=i;break;case 0:case 11:case 14:case 15:if(!be&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&Ca(t,n,l),i=i.next}while(i!==r)}Tn(e,n,t);break;case 1:if(!be&&(Mt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){ae(t,n,a)}Tn(e,n,t);break;case 21:Tn(e,n,t);break;case 22:t.mode&1?(be=(r=be)||t.memoizedState!==null,Tn(e,n,t),be=r):Tn(e,n,t);break;default:Tn(e,n,t)}}function Qu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new ag),n.forEach(function(r){var i=kg.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function rn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var s=e,l=n,a=l;e:for(;a!==null;){switch(a.tag){case 5:ye=a.stateNode,ln=!1;break e;case 3:ye=a.stateNode.containerInfo,ln=!0;break e;case 4:ye=a.stateNode.containerInfo,ln=!0;break e}a=a.return}if(ye===null)throw Error(b(160));Ff(s,l,i),ye=null,ln=!1;var o=i.alternate;o!==null&&(o.return=null),i.return=null}catch(u){ae(i,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Nf(n,e),n=n.sibling}function Nf(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(rn(n,e),hn(e),r&4){try{Fr(3,e,e.return),Ds(3,e)}catch(y){ae(e,e.return,y)}try{Fr(5,e,e.return)}catch(y){ae(e,e.return,y)}}break;case 1:rn(n,e),hn(e),r&512&&t!==null&&Mt(t,t.return);break;case 5:if(rn(n,e),hn(e),r&512&&t!==null&&Mt(t,t.return),e.flags&32){var i=e.stateNode;try{Br(i,"")}catch(y){ae(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,l=t!==null?t.memoizedProps:s,a=e.type,o=e.updateQueue;if(e.updateQueue=null,o!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&nc(i,s),Yl(a,l);var u=Yl(a,s);for(l=0;l<o.length;l+=2){var d=o[l],f=o[l+1];d==="style"?lc(i,f):d==="dangerouslySetInnerHTML"?ic(i,f):d==="children"?Br(i,f):Za(i,d,f,u)}switch(a){case"input":Vl(i,s);break;case"textarea":tc(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Bt(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?Bt(i,!!s.multiple,s.defaultValue,!0):Bt(i,!!s.multiple,s.multiple?[]:"",!1))}i[Qr]=s}catch(y){ae(e,e.return,y)}}break;case 6:if(rn(n,e),hn(e),r&4){if(e.stateNode===null)throw Error(b(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(y){ae(e,e.return,y)}}break;case 3:if(rn(n,e),hn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Wr(n.containerInfo)}catch(y){ae(e,e.return,y)}break;case 4:rn(n,e),hn(e);break;case 13:rn(n,e),hn(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ro=oe())),r&4&&Qu(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(be=(u=be)||d,rn(n,e),be=u):rn(n,e),hn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(P=e,d=e.child;d!==null;){for(f=P=d;P!==null;){switch(h=P,g=h.child,h.tag){case 0:case 11:case 14:case 15:Fr(4,h,h.return);break;case 1:Mt(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,t=h.return;try{n=r,v.props=n.memoizedProps,v.state=n.memoizedState,v.componentWillUnmount()}catch(y){ae(r,t,y)}}break;case 5:Mt(h,h.return);break;case 22:if(h.memoizedState!==null){Yu(f);continue}}g!==null?(g.return=h,P=g):Yu(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,o=f.memoizedProps.style,l=o!=null&&o.hasOwnProperty("display")?o.display:null,a.style.display=sc("display",l))}catch(y){ae(e,e.return,y)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){ae(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:rn(n,e),hn(e),r&4&&Qu(e);break;case 21:break;default:rn(n,e),hn(e)}}function hn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Lf(t)){var r=t;break e}t=t.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Br(i,""),r.flags&=-33);var s=Ju(e);_a(e,s,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Ju(e);ba(e,a,l);break;default:throw Error(b(161))}}catch(o){ae(e,e.return,o)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function ug(e,n,t){P=e,Tf(e)}function Tf(e,n,t){for(var r=(e.mode&1)!==0;P!==null;){var i=P,s=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Ei;if(!l){var a=i.alternate,o=a!==null&&a.memoizedState!==null||be;a=Ei;var u=be;if(Ei=l,(be=o)&&!u)for(P=i;P!==null;)l=P,o=l.child,l.tag===22&&l.memoizedState!==null?Xu(i):o!==null?(o.return=l,P=o):Xu(i);for(;s!==null;)P=s,Tf(s),s=s.sibling;P=i,Ei=a,be=u}Zu(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,P=s):Zu(e)}}function Zu(e){for(;P!==null;){var n=P;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:be||Ds(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!be)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:sn(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=n.updateQueue;s!==null&&Tu(n,s,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Tu(n,l,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var o=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&t.focus();break;case"img":o.src&&(t.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Wr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}be||n.flags&512&&Ea(n)}catch(h){ae(n,n.return,h)}}if(n===e){P=null;break}if(t=n.sibling,t!==null){t.return=n.return,P=t;break}P=n.return}}function Yu(e){for(;P!==null;){var n=P;if(n===e){P=null;break}var t=n.sibling;if(t!==null){t.return=n.return,P=t;break}P=n.return}}function Xu(e){for(;P!==null;){var n=P;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ds(4,n)}catch(o){ae(n,t,o)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(o){ae(n,i,o)}}var s=n.return;try{Ea(n)}catch(o){ae(n,s,o)}break;case 5:var l=n.return;try{Ea(n)}catch(o){ae(n,l,o)}}}catch(o){ae(n,n.return,o)}if(n===e){P=null;break}var a=n.sibling;if(a!==null){a.return=n.return,P=a;break}P=n.return}}var dg=Math.ceil,vs=Ln.ReactCurrentDispatcher,$o=Ln.ReactCurrentOwner,Xe=Ln.ReactCurrentBatchConfig,U=0,ke=null,fe=null,xe=0,He=0,Dt=tt(0),pe=0,ti=null,jt=0,Is=0,Po=0,Nr=null,Me=null,Ro=0,er=1/0,wn=null,ys=!1,$a=null,Gn=null,bi=!1,Un=null,js=0,Tr=0,Pa=null,Hi=-1,Wi=0;function Fe(){return U&6?oe():Hi!==-1?Hi:Hi=oe()}function Jn(e){return e.mode&1?U&2&&xe!==0?xe&-xe:Vm.transition!==null?(Wi===0&&(Wi=vc()),Wi):(e=K,e!==0||(e=window.event,e=e===void 0?16:Cc(e.type)),e):1}function un(e,n,t,r){if(50<Tr)throw Tr=0,Pa=null,Error(b(185));li(e,t,r),(!(U&2)||e!==ke)&&(e===ke&&(!(U&2)&&(Is|=t),pe===4&&An(e,xe)),Be(e,r),t===1&&U===0&&!(n.mode&1)&&(er=oe()+500,Ns&&rt()))}function Be(e,n){var t=e.callbackNode;Vp(e,n);var r=rs(e,e===ke?xe:0);if(r===0)t!==null&&ou(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&ou(t),n===1)e.tag===0?Km(ed.bind(null,e)):Hc(ed.bind(null,e)),Um(function(){!(U&6)&&rt()}),t=null;else{switch(yc(r)){case 1:t=to;break;case 4:t=gc;break;case 16:t=ts;break;case 536870912:t=kc;break;default:t=ts}t=qf(t,Mf.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Mf(e,n){if(Hi=-1,Wi=0,U&6)throw Error(b(327));var t=e.callbackNode;if(Kt()&&e.callbackNode!==t)return null;var r=rs(e,e===ke?xe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=xs(e,r);else{n=r;var i=U;U|=2;var s=If();(ke!==e||xe!==n)&&(wn=null,er=oe()+500,ht(e,n));do try{hg();break}catch(a){Df(e,a)}while(!0);go(),vs.current=s,U=i,fe!==null?n=0:(ke=null,xe=0,n=pe)}if(n!==0){if(n===2&&(i=ra(e),i!==0&&(r=i,n=Ra(e,i))),n===1)throw t=ti,ht(e,0),An(e,r),Be(e,oe()),t;if(n===6)An(e,r);else{if(i=e.current.alternate,!(r&30)&&!cg(i)&&(n=xs(e,r),n===2&&(s=ra(e),s!==0&&(r=s,n=Ra(e,s))),n===1))throw t=ti,ht(e,0),An(e,r),Be(e,oe()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(b(345));case 2:st(e,Me,wn);break;case 3:if(An(e,r),(r&130023424)===r&&(n=Ro+500-oe(),10<n)){if(rs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Fe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ca(st.bind(null,e,Me,wn),n);break}st(e,Me,wn);break;case 4:if(An(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var l=31-on(r);s=1<<l,l=n[l],l>i&&(i=l),r&=~s}if(r=i,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*dg(r/1960))-r,10<r){e.timeoutHandle=ca(st.bind(null,e,Me,wn),r);break}st(e,Me,wn);break;case 5:st(e,Me,wn);break;default:throw Error(b(329))}}}return Be(e,oe()),e.callbackNode===t?Mf.bind(null,e):null}function Ra(e,n){var t=Nr;return e.current.memoizedState.isDehydrated&&(ht(e,n).flags|=256),e=xs(e,n),e!==2&&(n=Me,Me=t,n!==null&&La(n)),e}function La(e){Me===null?Me=e:Me.push.apply(Me,e)}function cg(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],s=i.getSnapshot;i=i.value;try{if(!cn(s(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function An(e,n){for(n&=~Po,n&=~Is,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-on(n),r=1<<t;e[t]=-1,n&=~r}}function ed(e){if(U&6)throw Error(b(327));Kt();var n=rs(e,0);if(!(n&1))return Be(e,oe()),null;var t=xs(e,n);if(e.tag!==0&&t===2){var r=ra(e);r!==0&&(n=r,t=Ra(e,r))}if(t===1)throw t=ti,ht(e,0),An(e,n),Be(e,oe()),t;if(t===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,st(e,Me,wn),Be(e,oe()),null}function Lo(e,n){var t=U;U|=1;try{return e(n)}finally{U=t,U===0&&(er=oe()+500,Ns&&rt())}}function xt(e){Un!==null&&Un.tag===0&&!(U&6)&&Kt();var n=U;U|=1;var t=Xe.transition,r=K;try{if(Xe.transition=null,K=1,e)return e()}finally{K=r,Xe.transition=t,U=n,!(U&6)&&rt()}}function Fo(){He=Dt.current,X(Dt)}function ht(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Bm(t)),fe!==null)for(t=fe.return;t!==null;){var r=t;switch(ho(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&os();break;case 3:Yt(),X(Oe),X($e),wo();break;case 5:xo(r);break;case 4:Yt();break;case 13:X(re);break;case 19:X(re);break;case 10:ko(r.type._context);break;case 22:case 23:Fo()}t=t.return}if(ke=e,fe=e=Qn(e.current,null),xe=He=n,pe=0,ti=null,Po=Is=jt=0,Me=Nr=null,dt!==null){for(n=0;n<dt.length;n++)if(t=dt[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,s=t.pending;if(s!==null){var l=s.next;s.next=i,r.next=l}t.pending=r}dt=null}return e}function Df(e,n){do{var t=fe;try{if(go(),Bi.current=ks,gs){for(var r=ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}gs=!1}if(yt=0,me=he=ie=null,Lr=!1,Xr=0,$o.current=null,t===null||t.return===null){pe=1,ti=n,fe=null;break}e:{var s=e,l=t.return,a=t,o=n;if(n=xe,a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var u=o,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Bu(l);if(g!==null){g.flags&=-257,Uu(g,l,a,s,n),g.mode&1&&Au(s,u,n),n=g,o=u;var v=n.updateQueue;if(v===null){var y=new Set;y.add(o),n.updateQueue=y}else v.add(o);break e}else{if(!(n&1)){Au(s,u,n),No();break e}o=Error(b(426))}}else if(ee&&a.mode&1){var x=Bu(l);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Uu(x,l,a,s,n),po(Xt(o,a));break e}}s=o=Xt(o,a),pe!==4&&(pe=2),Nr===null?Nr=[s]:Nr.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,n&=-n,s.lanes|=n;var p=jf(s,o,n);Nu(s,p);break e;case 1:a=o;var m=s.type,k=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(Gn===null||!Gn.has(k)))){s.flags|=65536,n&=-n,s.lanes|=n;var j=xf(s,a,n);Nu(s,j);break e}}s=s.return}while(s!==null)}Af(t)}catch(w){n=w,fe===t&&t!==null&&(fe=t=t.return);continue}break}while(!0)}function If(){var e=vs.current;return vs.current=ks,e===null?ks:e}function No(){(pe===0||pe===3||pe===2)&&(pe=4),ke===null||!(jt&268435455)&&!(Is&268435455)||An(ke,xe)}function xs(e,n){var t=U;U|=2;var r=If();(ke!==e||xe!==n)&&(wn=null,ht(e,n));do try{fg();break}catch(i){Df(e,i)}while(!0);if(go(),U=t,vs.current=r,fe!==null)throw Error(b(261));return ke=null,xe=0,pe}function fg(){for(;fe!==null;)Of(fe)}function hg(){for(;fe!==null&&!Ip();)Of(fe)}function Of(e){var n=Uf(e.alternate,e,He);e.memoizedProps=e.pendingProps,n===null?Af(e):fe=n,$o.current=null}function Af(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=lg(t,n),t!==null){t.flags&=32767,fe=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pe=6,fe=null;return}}else if(t=sg(t,n,He),t!==null){fe=t;return}if(n=n.sibling,n!==null){fe=n;return}fe=n=e}while(n!==null);pe===0&&(pe=5)}function st(e,n,t){var r=K,i=Xe.transition;try{Xe.transition=null,K=1,pg(e,n,t,r)}finally{Xe.transition=i,K=r}return null}function pg(e,n,t,r){do Kt();while(Un!==null);if(U&6)throw Error(b(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var s=t.lanes|t.childLanes;if(Gp(e,s),e===ke&&(fe=ke=null,xe=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||bi||(bi=!0,qf(ts,function(){return Kt(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Xe.transition,Xe.transition=null;var l=K;K=1;var a=U;U|=4,$o.current=null,og(e,t),Nf(t,e),Nm(ua),is=!!oa,ua=oa=null,e.current=t,ug(t),Op(),U=a,K=l,Xe.transition=s}else e.current=t;if(bi&&(bi=!1,Un=e,js=i),s=e.pendingLanes,s===0&&(Gn=null),Up(t.stateNode),Be(e,oe()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(ys)throw ys=!1,e=$a,$a=null,e;return js&1&&e.tag!==0&&Kt(),s=e.pendingLanes,s&1?e===Pa?Tr++:(Tr=0,Pa=e):Tr=0,rt(),null}function Kt(){if(Un!==null){var e=yc(js),n=Xe.transition,t=K;try{if(Xe.transition=null,K=16>e?16:e,Un===null)var r=!1;else{if(e=Un,Un=null,js=0,U&6)throw Error(b(331));var i=U;for(U|=4,P=e.current;P!==null;){var s=P,l=s.child;if(P.flags&16){var a=s.deletions;if(a!==null){for(var o=0;o<a.length;o++){var u=a[o];for(P=u;P!==null;){var d=P;switch(d.tag){case 0:case 11:case 15:Fr(8,d,s)}var f=d.child;if(f!==null)f.return=d,P=f;else for(;P!==null;){d=P;var h=d.sibling,g=d.return;if(Rf(d),d===u){P=null;break}if(h!==null){h.return=g,P=h;break}P=g}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var x=y.sibling;y.sibling=null,y=x}while(y!==null)}}P=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,P=l;else e:for(;P!==null;){if(s=P,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Fr(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,P=p;break e}P=s.return}}var m=e.current;for(P=m;P!==null;){l=P;var k=l.child;if(l.subtreeFlags&2064&&k!==null)k.return=l,P=k;else e:for(l=m;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ds(9,a)}}catch(w){ae(a,a.return,w)}if(a===l){P=null;break e}var j=a.sibling;if(j!==null){j.return=a.return,P=j;break e}P=a.return}}if(U=i,rt(),yn&&typeof yn.onPostCommitFiberRoot=="function")try{yn.onPostCommitFiberRoot($s,e)}catch{}r=!0}return r}finally{K=t,Xe.transition=n}}return!1}function nd(e,n,t){n=Xt(t,n),n=jf(e,n,1),e=Vn(e,n,1),n=Fe(),e!==null&&(li(e,1,n),Be(e,n))}function ae(e,n,t){if(e.tag===3)nd(e,e,t);else for(;n!==null;){if(n.tag===3){nd(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Gn===null||!Gn.has(r))){e=Xt(t,e),e=xf(n,e,1),n=Vn(n,e,1),e=Fe(),n!==null&&(li(n,1,e),Be(n,e));break}}n=n.return}}function mg(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Fe(),e.pingedLanes|=e.suspendedLanes&t,ke===e&&(xe&t)===t&&(pe===4||pe===3&&(xe&130023424)===xe&&500>oe()-Ro?ht(e,0):Po|=t),Be(e,n)}function Bf(e,n){n===0&&(e.mode&1?(n=ki,ki<<=1,!(ki&130023424)&&(ki=4194304)):n=1);var t=Fe();e=Pn(e,n),e!==null&&(li(e,n,t),Be(e,t))}function gg(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Bf(e,t)}function kg(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(n),Bf(e,t)}var Uf;Uf=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Oe.current)De=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return De=!1,ig(e,n,t);De=!!(e.flags&131072)}else De=!1,ee&&n.flags&1048576&&Wc(n,cs,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;qi(e,n),e=n.pendingProps;var i=Jt(n,$e.current);Wt(n,t),i=zo(null,n,r,e,i,t);var s=Co();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ae(r)?(s=!0,us(n)):s=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,yo(n),i.updater=Ms,n.stateNode=i,i._reactInternals=n,va(n,r,e,t),n=xa(null,n,r,!0,s,t)):(n.tag=0,ee&&s&&fo(n),Re(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(qi(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=yg(r),e=sn(r,e),i){case 0:n=ja(null,n,r,e,t);break e;case 1:n=Wu(null,n,r,e,t);break e;case 11:n=qu(null,n,r,e,t);break e;case 14:n=Hu(null,n,r,sn(r.type,e),t);break e}throw Error(b(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:sn(r,i),ja(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:sn(r,i),Wu(e,n,r,i,t);case 3:e:{if(Cf(n),e===null)throw Error(b(387));r=n.pendingProps,s=n.memoizedState,i=s.element,Zc(e,n),ps(n,r,null,t);var l=n.memoizedState;if(r=l.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=s,n.memoizedState=s,n.flags&256){i=Xt(Error(b(423)),n),n=Ku(e,n,r,t,i);break e}else if(r!==i){i=Xt(Error(b(424)),n),n=Ku(e,n,r,t,i);break e}else for(We=Kn(n.stateNode.containerInfo.firstChild),Ke=n,ee=!0,an=null,t=Jc(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Qt(),r===i){n=Rn(e,n,t);break e}Re(e,n,r,t)}n=n.child}return n;case 5:return Yc(n),e===null&&ma(n),r=n.type,i=n.pendingProps,s=e!==null?e.memoizedProps:null,l=i.children,da(r,i)?l=null:s!==null&&da(r,s)&&(n.flags|=32),zf(e,n),Re(e,n,l,t),n.child;case 6:return e===null&&ma(n),null;case 13:return Ef(e,n,t);case 4:return jo(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Zt(n,null,r,t):Re(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:sn(r,i),qu(e,n,r,i,t);case 7:return Re(e,n,n.pendingProps,t),n.child;case 8:return Re(e,n,n.pendingProps.children,t),n.child;case 12:return Re(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,s=n.memoizedProps,l=i.value,J(fs,r._currentValue),r._currentValue=l,s!==null)if(cn(s.value,l)){if(s.children===i.children&&!Oe.current){n=Rn(e,n,t);break e}}else for(s=n.child,s!==null&&(s.return=n);s!==null;){var a=s.dependencies;if(a!==null){l=s.child;for(var o=a.firstContext;o!==null;){if(o.context===r){if(s.tag===1){o=bn(-1,t&-t),o.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?o.next=o:(o.next=d.next,d.next=o),u.pending=o}}s.lanes|=t,o=s.alternate,o!==null&&(o.lanes|=t),ga(s.return,t,n),a.lanes|=t;break}o=o.next}}else if(s.tag===10)l=s.type===n.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(b(341));l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),ga(l,t,n),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===n){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}Re(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,Wt(n,t),i=en(i),r=r(i),n.flags|=1,Re(e,n,r,t),n.child;case 14:return r=n.type,i=sn(r,n.pendingProps),i=sn(r.type,i),Hu(e,n,r,i,t);case 15:return wf(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:sn(r,i),qi(e,n),n.tag=1,Ae(r)?(e=!0,us(n)):e=!1,Wt(n,t),yf(n,r,i),va(n,r,i,t),xa(null,n,r,!0,e,t);case 19:return bf(e,n,t);case 22:return Sf(e,n,t)}throw Error(b(156,n.tag))};function qf(e,n){return mc(e,n)}function vg(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ye(e,n,t,r){return new vg(e,n,t,r)}function To(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yg(e){if(typeof e=="function")return To(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xa)return 11;if(e===eo)return 14}return 2}function Qn(e,n){var t=e.alternate;return t===null?(t=Ye(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Ki(e,n,t,r,i,s){var l=2;if(r=e,typeof e=="function")To(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case bt:return pt(t.children,i,s,n);case Ya:l=8,i|=8;break;case Ul:return e=Ye(12,t,n,i|2),e.elementType=Ul,e.lanes=s,e;case ql:return e=Ye(13,t,n,i),e.elementType=ql,e.lanes=s,e;case Hl:return e=Ye(19,t,n,i),e.elementType=Hl,e.lanes=s,e;case Yd:return Os(t,i,s,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Qd:l=10;break e;case Zd:l=9;break e;case Xa:l=11;break e;case eo:l=14;break e;case Dn:l=16,r=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return n=Ye(l,t,n,i),n.elementType=e,n.type=r,n.lanes=s,n}function pt(e,n,t,r){return e=Ye(7,e,r,n),e.lanes=t,e}function Os(e,n,t,r){return e=Ye(22,e,r,n),e.elementType=Yd,e.lanes=t,e.stateNode={isHidden:!1},e}function _l(e,n,t){return e=Ye(6,e,null,n),e.lanes=t,e}function $l(e,n,t){return n=Ye(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function jg(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ul(0),this.expirationTimes=ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ul(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Mo(e,n,t,r,i,s,l,a,o){return e=new jg(e,n,t,a,o),n===1?(n=1,s===!0&&(n|=8)):n=0,s=Ye(3,null,null,n),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},yo(s),e}function xg(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Et,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Hf(e){if(!e)return Xn;e=e._reactInternals;e:{if(St(e)!==e||e.tag!==1)throw Error(b(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ae(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(b(171))}if(e.tag===1){var t=e.type;if(Ae(t))return qc(e,t,n)}return n}function Wf(e,n,t,r,i,s,l,a,o){return e=Mo(t,r,!0,e,i,s,l,a,o),e.context=Hf(null),t=e.current,r=Fe(),i=Jn(t),s=bn(r,i),s.callback=n??null,Vn(t,s,i),e.current.lanes=i,li(e,i,r),Be(e,r),e}function As(e,n,t,r){var i=n.current,s=Fe(),l=Jn(i);return t=Hf(t),n.context===null?n.context=t:n.pendingContext=t,n=bn(s,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Vn(i,n,l),e!==null&&(un(e,i,l,s),Ai(e,i,l)),l}function ws(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function td(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Do(e,n){td(e,n),(e=e.alternate)&&td(e,n)}function wg(){return null}var Kf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Io(e){this._internalRoot=e}Bs.prototype.render=Io.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(b(409));As(e,n,null,null)};Bs.prototype.unmount=Io.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;xt(function(){As(null,e,null,null)}),n[$n]=null}};function Bs(e){this._internalRoot=e}Bs.prototype.unstable_scheduleHydration=function(e){if(e){var n=wc();e={blockedOn:null,target:e,priority:n};for(var t=0;t<On.length&&n!==0&&n<On[t].priority;t++);On.splice(t,0,e),t===0&&zc(e)}};function Oo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Us(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function rd(){}function Sg(e,n,t,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ws(l);s.call(u)}}var l=Wf(n,r,e,0,null,!1,!1,"",rd);return e._reactRootContainer=l,e[$n]=l.current,Gr(e.nodeType===8?e.parentNode:e),xt(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ws(o);a.call(u)}}var o=Mo(e,0,!1,null,null,!1,!1,"",rd);return e._reactRootContainer=o,e[$n]=o.current,Gr(e.nodeType===8?e.parentNode:e),xt(function(){As(n,o,t,r)}),o}function qs(e,n,t,r,i){var s=t._reactRootContainer;if(s){var l=s;if(typeof i=="function"){var a=i;i=function(){var o=ws(l);a.call(o)}}As(n,l,e,i)}else l=Sg(t,n,e,i,r);return ws(l)}jc=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Sr(n.pendingLanes);t!==0&&(ro(n,t|1),Be(n,oe()),!(U&6)&&(er=oe()+500,rt()))}break;case 13:xt(function(){var r=Pn(e,1);if(r!==null){var i=Fe();un(r,e,1,i)}}),Do(e,1)}};io=function(e){if(e.tag===13){var n=Pn(e,134217728);if(n!==null){var t=Fe();un(n,e,134217728,t)}Do(e,134217728)}};xc=function(e){if(e.tag===13){var n=Jn(e),t=Pn(e,n);if(t!==null){var r=Fe();un(t,e,n,r)}Do(e,n)}};wc=function(){return K};Sc=function(e,n){var t=K;try{return K=e,n()}finally{K=t}};ea=function(e,n,t){switch(n){case"input":if(Vl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Fs(r);if(!i)throw Error(b(90));ec(r),Vl(r,i)}}}break;case"textarea":tc(e,t);break;case"select":n=t.value,n!=null&&Bt(e,!!t.multiple,n,!1)}};uc=Lo;dc=xt;var zg={usingClientEntryPoint:!1,Events:[oi,Rt,Fs,ac,oc,Lo]},jr={findFiberByHostInstance:ut,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Cg={bundleType:jr.bundleType,version:jr.version,rendererPackageName:jr.rendererPackageName,rendererConfig:jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=hc(e),e===null?null:e.stateNode},findFiberByHostInstance:jr.findFiberByHostInstance||wg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_i.isDisabled&&_i.supportsFiber)try{$s=_i.inject(Cg),yn=_i}catch{}}Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zg;Ge.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oo(n))throw Error(b(200));return xg(e,n,null,t)};Ge.createRoot=function(e,n){if(!Oo(e))throw Error(b(299));var t=!1,r="",i=Kf;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Mo(e,1,!1,null,null,t,!1,r,i),e[$n]=n.current,Gr(e.nodeType===8?e.parentNode:e),new Io(n)};Ge.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=hc(n),e=e===null?null:e.stateNode,e};Ge.flushSync=function(e){return xt(e)};Ge.hydrate=function(e,n,t){if(!Us(n))throw Error(b(200));return qs(null,e,n,!0,t)};Ge.hydrateRoot=function(e,n,t){if(!Oo(e))throw Error(b(405));var r=t!=null&&t.hydratedSources||null,i=!1,s="",l=Kf;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=Wf(n,null,e,1,t??null,i,!1,s,l),e[$n]=n.current,Gr(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Bs(n)};Ge.render=function(e,n,t){if(!Us(n))throw Error(b(200));return qs(null,e,n,!1,t)};Ge.unmountComponentAtNode=function(e){if(!Us(e))throw Error(b(40));return e._reactRootContainer?(xt(function(){qs(null,null,e,!1,function(){e._reactRootContainer=null,e[$n]=null})}),!0):!1};Ge.unstable_batchedUpdates=Lo;Ge.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Us(t))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return qs(e,n,t,!1,r)};Ge.version="18.3.1-next-f1338f8080-20240426";function Vf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vf)}catch(e){console.error(e)}}Vf(),Kd.exports=Ge;var Gf=Kd.exports,id=Gf;Al.createRoot=id.createRoot,Al.hydrateRoot=id.hydrateRoot;const sd="pushstate",ld="popstate",Jf="beforeunload",Qf=e=>(e.preventDefault(),e.returnValue=""),Eg=()=>{removeEventListener(Jf,Qf,{capture:!0})};function Zf(e){let n=e.getLocation();const t=new Set;let r=[];const i=()=>{n=e.getLocation(),t.forEach(l=>l())},s=async(l,a)=>{var o;if(!((a==null?void 0:a.ignoreBlocker)??!1)&&typeof document<"u"&&r.length){for(const d of r)if(!await d()){(o=e.onBlocked)==null||o.call(e,i);return}}l()};return{get location(){return n},subscribe:l=>(t.add(l),()=>{t.delete(l)}),push:(l,a,o)=>{a=Mr(a),s(()=>{e.pushState(l,a),i()},o)},replace:(l,a,o)=>{a=Mr(a),s(()=>{e.replaceState(l,a),i()},o)},go:(l,a)=>{s(()=>{e.go(l),i()},a)},back:l=>{s(()=>{e.back(),i()},l)},forward:l=>{s(()=>{e.forward(),i()},l)},createHref:l=>e.createHref(l),block:l=>(r.push(l),r.length===1&&addEventListener(Jf,Qf,{capture:!0}),()=>{r=r.filter(a=>a!==l),r.length||Eg()}),flush:()=>{var l;return(l=e.flush)==null?void 0:l.call(e)},destroy:()=>{var l;return(l=e.destroy)==null?void 0:l.call(e)},notify:i}}function Mr(e){return e||(e={}),{...e,key:Yf()}}function bg(e){const n=typeof document<"u"?window:void 0,t=n.history.pushState,r=n.history.replaceState,i=y=>y,s=()=>Fa(`${n.location.pathname}${n.location.search}${n.location.hash}`,n.history.state);let l=s(),a;const o=()=>l;let u,d;const f=()=>{if(!u)return;(u.isPush?t:r).call(n.history,u.state,"",u.href),u=void 0,d=void 0,a=void 0},h=(y,x,p)=>{const m=i(x);d||(a=l),l=Fa(x,p),u={href:m,state:p,isPush:(u==null?void 0:u.isPush)||y==="push"},d||(d=Promise.resolve().then(()=>f()))},g=()=>{l=s(),v.notify()},v=Zf({getLocation:o,pushState:(y,x)=>h("push",y,x),replaceState:(y,x)=>h("replace",y,x),back:()=>n.history.back(),forward:()=>n.history.forward(),go:y=>n.history.go(y),createHref:y=>i(y),flush:f,destroy:()=>{n.history.pushState=t,n.history.replaceState=r,n.removeEventListener(sd,g),n.removeEventListener(ld,g)},onBlocked:y=>{a&&l!==a&&(l=a,y())}});return n.addEventListener(sd,g),n.addEventListener(ld,g),n.history.pushState=function(...y){const x=t.apply(n.history,y);return g(),x},n.history.replaceState=function(...y){const x=r.apply(n.history,y);return g(),x},v}function _g(e={initialEntries:["/"]}){const n=e.initialEntries;let t=e.initialIndex??n.length-1,r={key:Yf()};return Zf({getLocation:()=>Fa(n[t],r),pushState:(s,l)=>{r=l,n.push(s),t=Math.max(n.length-1,0)},replaceState:(s,l)=>{r=l,n[t]=s},back:()=>{r=Mr(r),t--},forward:()=>{r=Mr(r),t=Math.min(t+1,n.length-1)},go:s=>{r=Mr(r),t=Math.min(Math.max(t+s,0),n.length-1)},createHref:s=>s})}function Fa(e,n){const t=e.indexOf("#"),r=e.indexOf("?");return{href:e,pathname:e.substring(0,t>0?r>0?Math.min(t,r):t:r>0?r:e.length),hash:t>-1?e.substring(t):"",search:r>-1?e.slice(r,t===-1?void 0:t):"",state:n||{}}}function Yf(){return(Math.random()+1).toString(36).substring(7)}var $g="Invariant failed";function Le(e,n){if(!e)throw new Error($g)}const Pl=F.createContext(null);function Xf(){return typeof document>"u"?Pl:window.__TSR_ROUTER_CONTEXT__?window.__TSR_ROUTER_CONTEXT__:(window.__TSR_ROUTER_CONTEXT__=Pl,Pl)}function Fn(e){const n=F.useContext(Xf());return e==null||e.warn,n}var eh={exports:{}},nh={},th={exports:{}},rh={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nr=F;function Pg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Rg=typeof Object.is=="function"?Object.is:Pg,Lg=nr.useState,Fg=nr.useEffect,Ng=nr.useLayoutEffect,Tg=nr.useDebugValue;function Mg(e,n){var t=n(),r=Lg({inst:{value:t,getSnapshot:n}}),i=r[0].inst,s=r[1];return Ng(function(){i.value=t,i.getSnapshot=n,Rl(i)&&s({inst:i})},[e,t,n]),Fg(function(){return Rl(i)&&s({inst:i}),e(function(){Rl(i)&&s({inst:i})})},[e]),Tg(t),t}function Rl(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Rg(e,t)}catch{return!0}}function Dg(e,n){return n()}var Ig=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Dg:Mg;rh.useSyncExternalStore=nr.useSyncExternalStore!==void 0?nr.useSyncExternalStore:Ig;th.exports=rh;var Og=th.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hs=F,Ag=Og;function Bg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ug=typeof Object.is=="function"?Object.is:Bg,qg=Ag.useSyncExternalStore,Hg=Hs.useRef,Wg=Hs.useEffect,Kg=Hs.useMemo,Vg=Hs.useDebugValue;nh.useSyncExternalStoreWithSelector=function(e,n,t,r,i){var s=Hg(null);if(s.current===null){var l={hasValue:!1,value:null};s.current=l}else l=s.current;s=Kg(function(){function o(g){if(!u){if(u=!0,d=g,g=r(g),i!==void 0&&l.hasValue){var v=l.value;if(i(v,g))return f=v}return f=g}if(v=f,Ug(d,g))return v;var y=r(g);return i!==void 0&&i(v,y)?v:(d=g,f=y)}var u=!1,d,f,h=t===void 0?null:t;return[function(){return o(n())},h===null?void 0:function(){return o(h())}]},[n,t,r,i]);var a=qg(e,s[0],s[1]);return Wg(function(){l.hasValue=!0,l.value=a},[a]),Vg(a),a};eh.exports=nh;var Gg=eh.exports,Jg=class{constructor(e,n){this.listeners=new Set,this._batching=!1,this._flushing=0,this._nextPriority=null,this.subscribe=t=>{var i,s;this.listeners.add(t);const r=(s=(i=this.options)==null?void 0:i.onSubscribe)==null?void 0:s.call(i,t,this);return()=>{this.listeners.delete(t),r==null||r()}},this.setState=(t,r)=>{var l,a,o,u,d;const i=this.state;this.state=(l=this.options)!=null&&l.updateFn?this.options.updateFn(i)(t):t(i);const s=(r==null?void 0:r.priority)??((a=this.options)==null?void 0:a.defaultPriority)??"high";this._nextPriority===null?this._nextPriority=s:this._nextPriority==="high"?this._nextPriority=s:this._nextPriority=((o=this.options)==null?void 0:o.defaultPriority)??"high",(d=(u=this.options)==null?void 0:u.onUpdate)==null||d.call(u,{priority:this._nextPriority}),this._flush()},this._flush=()=>{if(this._batching)return;const t=++this._flushing;this.listeners.forEach(r=>{this._flushing===t&&r({priority:this._nextPriority??"high"})})},this.batch=t=>{if(this._batching)return t();this._batching=!0,t(),this._batching=!1,this._flush()},this.state=e,this.options=n}};function Qg(e,n=t=>t){return Gg.useSyncExternalStoreWithSelector(e.subscribe,()=>e.state,()=>e.state,n,Zg)}function Zg(e,n){if(Object.is(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;const t=Object.keys(e);if(t.length!==Object.keys(n).length)return!1;for(let r=0;r<t.length;r++)if(!Object.prototype.hasOwnProperty.call(n,t[r])||!Object.is(e[t[r]],n[t[r]]))return!1;return!0}const Ee="__root__";function Yg(e,n){let t,r,i,s="";for(t in e)if((i=e[t])!==void 0)if(Array.isArray(i))for(r=0;r<i.length;r++)s&&(s+="&"),s+=encodeURIComponent(t)+"="+encodeURIComponent(i[r]);else s&&(s+="&"),s+=encodeURIComponent(t)+"="+encodeURIComponent(i);return""+s}function ad(e){if(!e)return"";const n=decodeURIComponent(e);return n==="false"?!1:n==="true"?!0:+n*0===0&&+n+""===n?+n:n}function Xg(e,n){let t,r;const i={},s=e.split("&");for(;t=s.shift();){const l=t.indexOf("=");if(l!==-1){r=t.slice(0,l);const a=t.slice(l+1);i[r]!==void 0?i[r]=[].concat(i[r],ad(a)):i[r]=ad(a)}else r=t,i[r]=""}return i}const e0=t0(JSON.parse),n0=r0(JSON.stringify,JSON.parse);function t0(e){return n=>{n.substring(0,1)==="?"&&(n=n.substring(1));const t=Xg(n);for(const r in t){const i=t[r];if(typeof i=="string")try{t[r]=e(i)}catch{}}return t}}function r0(e,n){function t(r){if(typeof r=="object"&&r!==null)try{return e(r)}catch{}else if(typeof r=="string"&&typeof n=="function")try{return n(r),e(r)}catch{}return r}return r=>{r={...r},Object.keys(r).forEach(s=>{const l=r[s];typeof l>"u"||l===void 0?delete r[s]:r[s]=t(l)});const i=Yg(r).toString();return i?`?${i}`:""}}function at(e){return e[e.length-1]}function i0(e){return typeof e=="function"}function It(e,n){return i0(e)?e(n):e}function Dr(e,n){return n.reduce((t,r)=>(t[r]=e[r],t),{})}function pn(e,n){if(e===n)return e;const t=n,r=ud(e)&&ud(t);if(r||Ss(e)&&Ss(t)){const i=r?e:Object.keys(e),s=i.length,l=r?t:Object.keys(t),a=l.length,o=r?[]:{};let u=0;for(let d=0;d<a;d++){const f=r?d:l[d];(!r&&i.includes(f)||r)&&e[f]===void 0&&t[f]===void 0?(o[f]=void 0,u++):(o[f]=pn(e[f],t[f]),o[f]===e[f]&&e[f]!==void 0&&u++)}return s===a&&u===s?e:o}return t}function Ss(e){if(!od(e))return!1;const n=e.constructor;if(typeof n>"u")return!0;const t=n.prototype;return!(!od(t)||!t.hasOwnProperty("isPrototypeOf"))}function od(e){return Object.prototype.toString.call(e)==="[object Object]"}function ud(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Vt(e,n,t=!1){if(e===n)return!0;if(typeof e!=typeof n)return!1;if(Ss(e)&&Ss(n)){const r=Object.keys(e),i=Object.keys(n);return!t&&r.length!==i.length?!1:!i.some(s=>!(s in e)||!Vt(e[s],n[s],t))}return Array.isArray(e)&&Array.isArray(n)?!e.some((r,i)=>!Vt(r,n[i],t)):!1}const Ll=typeof window<"u"?F.useLayoutEffect:F.useEffect;function Ir(e){let n,t;const r=new Promise((i,s)=>{n=i,t=s});return r.status="pending",r.resolve=i=>{r.status="resolved",r.value=i,n(i),e==null||e(i)},r.reject=i=>{r.status="rejected",t(i)},r}function dd(e){const n=F.useRef({value:e,prev:null}),t=n.current.value;return e!==t&&(n.current={value:e,prev:t}),n.current.prev}function Ao(e){const n=e.errorComponent??Ws;return c.jsx(s0,{getResetKey:e.getResetKey,onCatch:e.onCatch,children:({error:t,reset:r})=>t?F.createElement(n,{error:t,reset:r}):e.children})}class s0 extends F.Component{constructor(){super(...arguments),this.state={error:null}}static getDerivedStateFromProps(n){return{resetKey:n.getResetKey()}}static getDerivedStateFromError(n){return{error:n}}reset(){this.setState({error:null})}componentDidUpdate(n,t){t.error&&t.resetKey!==this.state.resetKey&&this.reset()}componentDidCatch(n,t){this.props.onCatch&&this.props.onCatch(n,t)}render(){return this.props.children({error:this.state.error,reset:()=>{this.reset()}})}}function Ws({error:e}){const[n,t]=F.useState(!1);return c.jsxs("div",{style:{padding:".5rem",maxWidth:"100%"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:".5rem"},children:[c.jsx("strong",{style:{fontSize:"1rem"},children:"Something went wrong!"}),c.jsx("button",{style:{appearance:"none",fontSize:".6em",border:"1px solid currentColor",padding:".1rem .2rem",fontWeight:"bold",borderRadius:".25rem"},onClick:()=>t(r=>!r),children:n?"Hide Error":"Show Error"})]}),c.jsx("div",{style:{height:".25rem"}}),n?c.jsx("div",{children:c.jsx("pre",{style:{fontSize:".7em",border:"1px solid red",borderRadius:".25rem",padding:".3rem",color:"red",overflow:"auto"},children:e.message?c.jsx("code",{children:e.message}):null})}):null]})}function _e(e){const n=Fn({warn:(e==null?void 0:e.router)===void 0});return Qg(((e==null?void 0:e.router)||n).__store,e==null?void 0:e.select)}function l0(){const e=Fn(),n=F.useRef({router:e,mounted:!1}),t=_e({select:u=>Dr(u,["isLoading","location","resolvedLocation","isTransitioning"])}),[r,i]=F.useTransition(),s=_e({select:u=>u.matches.some(d=>d.status==="pending")}),l=dd(t.isLoading),a=t.isLoading||r||s,o=dd(a);return e.isServer||(e.startReactTransition=i),F.useEffect(()=>{const u=e.history.subscribe(e.load),d=e.buildLocation({to:e.latestLocation.pathname,search:!0,params:!0,hash:!0,state:!0});return e.state.location.href!==d.href&&e.commitLocation({...d,replace:!0}),()=>{u()}},[e,e.history]),Ll(()=>{var u;if((u=window.__TSR__)!=null&&u.dehydrated||n.current.router===e&&n.current.mounted)return;n.current={router:e,mounted:!0},(async()=>{try{await e.load()}catch(f){console.error(f)}})()},[e]),Ll(()=>{if(l&&!t.isLoading){const u=e.state.location,d=e.state.resolvedLocation,f=d.href!==u.href;e.emit({type:"onLoad",fromLocation:d,toLocation:u,pathChanged:f})}},[l,e,t.isLoading]),Ll(()=>{if(o&&!a){const u=e.state.location,d=e.state.resolvedLocation,f=d.href!==u.href;if(e.emit({type:"onResolved",fromLocation:d,toLocation:u,pathChanged:f}),e.__store.setState(h=>({...h,status:"idle",resolvedLocation:h.location})),document.querySelector&&e.state.location.hash!==""){const h=document.getElementById(e.state.location.hash);h&&h.scrollIntoView()}}},[a,o,e]),null}const Ks=F.createContext(void 0);function gn(e){return!!(e!=null&&e.isNotFound)}function a0(e){const n=_e({select:t=>`not-found-${t.location.pathname}-${t.status}`});return c.jsx(Ao,{getResetKey:()=>n,onCatch:(t,r)=>{var i;if(gn(t))(i=e.onCatch)==null||i.call(e,t,r);else throw t},errorComponent:({error:t})=>{var r;return(r=e.fallback)==null?void 0:r.call(e,t)},children:e.children})}function o0(){return c.jsx("p",{children:"Not Found"})}function lt(e){return!!(e!=null&&e.isRedirect)}function cd(e){return!!(e!=null&&e.isRedirect)&&e.href}function fd(e){return!(typeof e=="object"&&e&&"data"in e)||!("__isServerError"in e&&e.__isServerError)||!(typeof e.data=="object"&&e.data)?!1:e.__isServerError===!0}function hd(e){if("name"in e&&"message"in e){const n=new Error(e.message);return n.name=e.name,n}return e.data}function Vi(e){return c.jsx(c.Fragment,{children:e.children})}function ih(e,n,t){return n.options.notFoundComponent?c.jsx(n.options.notFoundComponent,{data:t}):e.options.defaultNotFoundComponent?c.jsx(e.options.defaultNotFoundComponent,{data:t}):c.jsx(o0,{})}function sh({matchId:e}){var n,t;const r=Fn(),i=_e({select:y=>{var x;return(x=y.matches.find(p=>p.id===e))==null?void 0:x.routeId}});Le(i);const s=r.routesById[i],l=s.options.pendingComponent??r.options.defaultPendingComponent,a=l?c.jsx(l,{}):null,o=s.options.errorComponent??r.options.defaultErrorComponent,u=s.options.onCatch??r.options.defaultOnCatch,d=s.isRoot?s.options.notFoundComponent??((n=r.options.notFoundRoute)==null?void 0:n.options.component):s.options.notFoundComponent,f=(!s.isRoot||s.options.wrapInSuspense)&&(s.options.wrapInSuspense??l??((t=s.options.errorComponent)==null?void 0:t.preload))?F.Suspense:Vi,h=o?Ao:Vi,g=d?a0:Vi,v=_e({select:y=>y.resolvedLocation.state.key});return c.jsx(Ks.Provider,{value:e,children:c.jsx(f,{fallback:a,children:c.jsx(h,{getResetKey:()=>v,errorComponent:o||Ws,onCatch:(y,x)=>{if(gn(y))throw y;u==null||u(y,x)},children:c.jsx(g,{fallback:y=>{if(!d||y.routeId&&y.routeId!==i||!y.routeId&&!s.isRoot)throw y;return F.createElement(d,y)},children:c.jsx(u0,{matchId:e})})})})})}function u0({matchId:e}){var n,t;const r=Fn(),i=_e({select:f=>{var h;return(h=f.matches.find(g=>g.id===e))==null?void 0:h.routeId}}),s=r.routesById[i],[l,a]=_e({select:f=>{const h=f.matches.findIndex(v=>v.id===e),g=f.matches[h];return[Dr(g,["id","status","error","loadPromise","minPendingPromise"]),h]}}),o=(s.options.errorComponent??r.options.defaultErrorComponent)||Ws;if(l.status==="notFound"){let f;return fd(l.error)?f=(((n=r.options.errorSerializer)==null?void 0:n.deserialize)??hd)(l.error.data):f=l.error,Le(gn(f)),ih(r,s,f)}if(l.status==="redirected")throw Le(lt(l.error)),l.loadPromise;if(l.status==="error"){if(r.isServer)return c.jsx(o,{error:l.error,info:{componentStack:""}});throw fd(l.error)?(((t=r.options.errorSerializer)==null?void 0:t.deserialize)??hd)(l.error.data):l.error}if(l.status==="pending"){const f=s.options.pendingMinMs??r.options.defaultPendingMinMs;throw f&&!l.minPendingPromise&&(l.minPendingPromise=Ir(),r.isServer||(Promise.resolve().then(()=>{r.__store.setState(h=>({...h,matches:h.matches.map(g=>g.id===l.id?{...g,minPendingPromise:Ir()}:g)}))}),setTimeout(()=>{r.__store.setState(h=>({...h,matches:h.matches.map(g=>{var v;return g.id===l.id?{...g,minPendingPromise:((v=g.minPendingPromise)==null||v.resolve(),void 0)}:g})}))},f))),l.loadPromise}const u=s.options.component??r.options.defaultComponent,d=u?c.jsx(u,{}):c.jsx(lh,{});return c.jsxs(c.Fragment,{children:[r.AfterEachMatch?c.jsx(r.AfterEachMatch,{match:l,matchIndex:a}):null,d]})}const lh=F.memo(function(){const n=Fn(),t=F.useContext(Ks),r=_e({select:u=>{var d;return(d=u.matches.find(f=>f.id===t))==null?void 0:d.routeId}}),i=n.routesById[r],{parentGlobalNotFound:s}=_e({select:u=>{const f=u.matches.find(h=>h.id===t);return Le(f),{parentGlobalNotFound:f.globalNotFound}}}),l=_e({select:u=>{var d;const f=u.matches,h=f.findIndex(g=>g.id===t);return(d=f[h+1])==null?void 0:d.id}});if(s)return ih(n,i,void 0);if(!l)return null;const a=c.jsx(sh,{matchId:l}),o=n.options.defaultPendingComponent?c.jsx(n.options.defaultPendingComponent,{}):null;return t===Ee?c.jsx(F.Suspense,{fallback:o,children:a}):a});function d0(){const e=Fn(),n=e.options.defaultPendingComponent?c.jsx(e.options.defaultPendingComponent,{}):null,t=e.state.matches.length?Vi:F.Suspense,r=c.jsxs(t,{fallback:n,children:[c.jsx(l0,{}),c.jsx(c0,{})]});return e.options.InnerWrap?c.jsx(e.options.InnerWrap,{children:r}):r}function c0(){const e=_e({select:t=>{var r;return(r=t.matches[0])==null?void 0:r.id}}),n=_e({select:t=>t.resolvedLocation.state.key});return c.jsx(Ks.Provider,{value:e,children:c.jsx(Ao,{getResetKey:()=>n,errorComponent:Ws,onCatch:t=>{t.message||t.toString()},children:e?c.jsx(sh,{matchId:e}):null})})}function f0({router:e,children:n,...t}){e.update({...e.options,...t,context:{...e.options.context,...t.context}});const r=Xf(),i=c.jsx(r.Provider,{value:e,children:n});return e.options.Wrap?c.jsx(e.options.Wrap,{children:i}):i}function h0({router:e,...n}){return c.jsx(f0,{router:e,...n,children:c.jsx(d0,{})})}function $i(e,n){return[...e.cachedMatches,...e.pendingMatches??[],...e.matches].find(t=>t.id===n)}function Zn(e){return Vs(e.filter(Boolean).join("/"))}function Vs(e){return e.replace(/\/{2,}/g,"/")}function Bo(e){return e==="/"?e:e.replace(/^\/{1,}/,"")}function Cr(e){return e==="/"?e:e.replace(/\/{1,}$/,"")}function Na(e){return Cr(Bo(e))}function zs(e,n){return e.endsWith("/")&&e!=="/"&&e!==`${n}/`?e.slice(0,-1):e}function p0(e,n,t){return zs(e,t)===zs(n,t)}function m0({basepath:e,base:n,to:t,trailingSlash:r="never"}){var i,s;n=n.replace(new RegExp(`^${e}`),"/"),t=t.replace(new RegExp(`^${e}`),"/");let l=tr(n);const a=tr(t);l.length>1&&((i=at(l))==null?void 0:i.value)==="/"&&l.pop(),a.forEach((u,d)=>{u.value==="/"?d?d===a.length-1&&l.push(u):l=[u]:u.value===".."?l.pop():u.value==="."||l.push(u)}),l.length>1&&(((s=at(l))==null?void 0:s.value)==="/"?r==="never"&&l.pop():r==="always"&&l.push({type:"pathname",value:"/"}));const o=Zn([e,...l.map(u=>u.value)]);return Vs(o)}function tr(e){if(!e)return[];e=Vs(e);const n=[];if(e.slice(0,1)==="/"&&(e=e.substring(1),n.push({type:"pathname",value:"/"})),!e)return n;const t=e.split("/").filter(Boolean);return n.push(...t.map(r=>r==="$"||r==="*"?{type:"wildcard",value:r}:r.charAt(0)==="$"?{type:"param",value:r}:{type:"pathname",value:r})),e.slice(-1)==="/"&&(e=e.substring(1),n.push({type:"pathname",value:"/"})),n}function Fl({path:e,params:n,leaveWildcards:t,leaveParams:r}){const i=tr(e),s={};for(const[l,a]of Object.entries(n)){const o=typeof a=="string";["*","_splat"].includes(l)?s[l]=o?encodeURI(a):a:s[l]=o?encodeURIComponent(a):a}return Zn(i.map(l=>{if(l.type==="wildcard"){const a=s._splat;return t?`${l.value}${a??""}`:a}if(l.type==="param"){if(r){const a=s[l.value];return`${l.value}${a??""}`}return s[l.value.substring(1)]??"undefined"}return l.value}))}function Pi(e,n,t){const r=g0(e,n,t);if(!(t.to&&!r))return r??{}}function pd(e,n){switch(!0){case e==="/":return n;case n===e:return"";case n.length<e.length:return n;case n[e.length]!=="/":return n;case n.startsWith(e):return n.slice(e.length);default:return n}}function g0(e,n,t){n=pd(e,n);const r=pd(e,`${t.to??"$"}`),i=tr(n),s=tr(r);n.startsWith("/")||i.unshift({type:"pathname",value:"/"}),r.startsWith("/")||s.unshift({type:"pathname",value:"/"});const l={};return(()=>{for(let o=0;o<Math.max(i.length,s.length);o++){const u=i[o],d=s[o],f=o>=i.length-1,h=o>=s.length-1;if(d){if(d.type==="wildcard"){if(u!=null&&u.value){const g=decodeURI(Zn(i.slice(o).map(v=>v.value)));return l["*"]=g,l._splat=g,!0}return!1}if(d.type==="pathname"){if(d.value==="/"&&!(u!=null&&u.value))return!0;if(u){if(t.caseSensitive){if(d.value!==u.value)return!1}else if(d.value.toLowerCase()!==u.value.toLowerCase())return!1}}if(!u)return!1;if(d.type==="param"){if(u.value==="/")return!1;u.value.charAt(0)!=="$"&&(l[d.value.substring(1)]=decodeURIComponent(u.value))}}if(!f&&h)return l["**"]=Zn(i.slice(o+1).map(g=>g.value)),!!t.fuzzy&&(d==null?void 0:d.value)!=="/"}return!0})()?l:void 0}const k0=["component","errorComponent","pendingComponent","notFoundComponent"];function v0(e){return new y0(e)}class y0{constructor(n){this.tempLocationKey=`${Math.round(Math.random()*1e7)}`,this.resetNextScroll=!0,this.shouldViewTransition=void 0,this.latestLoadPromise=Promise.resolve(),this.subscribers=new Set,this.isServer=typeof document>"u",this.startReactTransition=t=>t(),this.update=t=>{t.notFoundRoute&&console.warn("The notFoundRoute API is deprecated and will be removed in the next major version. See https://tanstack.com/router/v1/docs/guide/not-found-errors#migrating-from-notfoundroute for more info.");const r=this.options;this.options={...this.options,...t},(!this.basepath||t.basepath&&t.basepath!==r.basepath)&&(t.basepath===void 0||t.basepath===""||t.basepath==="/"?this.basepath="/":this.basepath=`/${Na(t.basepath)}`),(!this.history||this.options.history&&this.options.history!==this.history)&&(this.history=this.options.history??(typeof document<"u"?bg():_g({initialEntries:[this.options.basepath||"/"]})),this.latestLocation=this.parseLocation()),this.options.routeTree!==this.routeTree&&(this.routeTree=this.options.routeTree,this.buildRouteTree()),this.__store||(this.__store=new Jg(w0(this.latestLocation),{onUpdate:()=>{this.__store.state={...this.state,cachedMatches:this.state.cachedMatches.filter(i=>!["redirected"].includes(i.status))}}}))},this.buildRouteTree=()=>{this.routesById={},this.routesByPath={};const t=this.options.notFoundRoute;t&&(t.init({originalIndex:99999999999}),this.routesById[t.id]=t);const r=l=>{l.forEach((a,o)=>{a.init({originalIndex:o});const u=this.routesById[a.id];if(Le(!u,`Duplicate routes found with id: ${String(a.id)}`),this.routesById[a.id]=a,!a.isRoot&&a.path){const f=Cr(a.fullPath);(!this.routesByPath[f]||a.fullPath.endsWith("/"))&&(this.routesByPath[f]=a)}const d=a.children;d!=null&&d.length&&r(d)})};r([this.routeTree]);const i=[];Object.values(this.routesById).forEach((l,a)=>{var o;if(l.isRoot||!l.path)return;const u=Bo(l.fullPath),d=tr(u);for(;d.length>1&&((o=d[0])==null?void 0:o.value)==="/";)d.shift();const f=d.map(h=>h.value==="/"?.75:h.type==="param"?.5:h.type==="wildcard"?.25:1);i.push({child:l,trimmed:u,parsed:d,index:a,scores:f})}),this.flatRoutes=i.sort((l,a)=>{const o=Math.min(l.scores.length,a.scores.length);for(let u=0;u<o;u++)if(l.scores[u]!==a.scores[u])return a.scores[u]-l.scores[u];if(l.scores.length!==a.scores.length)return a.scores.length-l.scores.length;for(let u=0;u<o;u++)if(l.parsed[u].value!==a.parsed[u].value)return l.parsed[u].value>a.parsed[u].value?1:-1;return l.index-a.index}).map((l,a)=>(l.child.rank=a,l.child))},this.subscribe=(t,r)=>{const i={eventType:t,fn:r};return this.subscribers.add(i),()=>{this.subscribers.delete(i)}},this.emit=t=>{this.subscribers.forEach(r=>{r.eventType===t.type&&r.fn(t)})},this.checkLatest=t=>{if(this.latestLoadPromise!==t)throw this.latestLoadPromise},this.parseLocation=t=>{const r=({pathname:a,search:o,hash:u,state:d})=>{const f=this.options.parseSearch(o),h=this.options.stringifySearch(f);return{pathname:a,searchStr:h,search:pn(t==null?void 0:t.search,f),hash:u.split("#").reverse()[0]??"",href:`${a}${h}${u}`,state:pn(t==null?void 0:t.state,d)}},i=r(this.history.location),{__tempLocation:s,__tempKey:l}=i.state;if(s&&(!l||l===this.tempLocationKey)){const a=r(s);return a.state.key=i.state.key,delete a.state.__tempLocation,{...a,maskedLocation:i}}return i},this.resolvePathWithBase=(t,r)=>m0({basepath:this.basepath,base:t,to:Vs(r),trailingSlash:this.options.trailingSlash}),this.matchRoutes=(t,r,i)=>{let s={};const l=this.flatRoutes.find(g=>{const v=Pi(this.basepath,Cr(t),{to:g.fullPath,caseSensitive:g.options.caseSensitive??this.options.caseSensitive,fuzzy:!0});return v?(s=v,!0):!1});let a=l||this.routesById[Ee];const o=[a];let u=!1;for((l?l.path!=="/"&&s["**"]:Cr(t))&&(this.options.notFoundRoute?o.push(this.options.notFoundRoute):u=!0);a.parentRoute;)a=a.parentRoute,o.unshift(a);const d=(()=>{if(u){if(this.options.notFoundMode!=="root")for(let g=o.length-1;g>=0;g--){const v=o[g];if(v.children)return v.id}return Ee}})(),f=o.map(g=>{var v;let y;const x=((v=g.options.params)==null?void 0:v.parse)??g.options.parseParams;if(x)try{const p=x(s);Object.assign(s,p)}catch(p){if(y=new x0(p.message,{cause:p}),i!=null&&i.throwOnError)throw y;return y}}),h=[];return o.forEach((g,v)=>{var y,x,p,m,k,j,w,C,z,S;const L=h[v-1],[$,q]=(()=>{const _=(L==null?void 0:L.search)??r;try{const R=typeof g.options.validateSearch=="object"?g.options.validateSearch.parse:g.options.validateSearch,D=(R==null?void 0:R(_))??{};return[{..._,...D},void 0]}catch(R){const D=new j0(R.message,{cause:R});if(i!=null&&i.throwOnError)throw D;return[_,D]}})(),T=((x=(y=g.options).loaderDeps)==null?void 0:x.call(y,{search:$}))??"",ne=T?JSON.stringify(T):"",le=Fl({path:g.fullPath,params:s}),A=Fl({path:g.id,params:s,leaveWildcards:!0})+ne,N=$i(this.state,A),V=this.state.matches.find(_=>_.id===A)?"stay":"enter";let E;if(N)E={...N,cause:V,params:s};else{const _=g.options.loader||g.options.beforeLoad?"pending":"success",R=Ir();_==="success"&&R.resolve(),E={id:A,index:v,routeId:g.id,params:s,pathname:Zn([this.basepath,le]),updatedAt:Date.now(),search:{},searchError:void 0,status:"pending",isFetching:!1,error:void 0,paramsError:f[v],loaderPromise:Promise.resolve(),loadPromise:R,routeContext:void 0,context:void 0,abortController:new AbortController,fetchCount:0,cause:V,loaderDeps:T,invalid:!1,preload:!1,links:(m=(p=g.options).links)==null?void 0:m.call(p),scripts:(j=(k=g.options).scripts)==null?void 0:j.call(k),staticData:g.options.staticData||{}}}E.status==="success"&&(E.meta=(C=(w=g.options).meta)==null?void 0:C.call(w,{matches:h,params:E.params,loaderData:E.loaderData}),E.headers=(S=(z=g.options).headers)==null?void 0:S.call(z,{loaderData:E.loaderData})),i!=null&&i.preload||(E.globalNotFound=d===g.id),E.search=pn(E.search,$),E.searchError=q,h.push(E)}),h},this.cancelMatch=t=>{var r;(r=$i(this.state,t))==null||r.abortController.abort()},this.cancelMatches=()=>{var t;(t=this.state.pendingMatches)==null||t.forEach(r=>{this.cancelMatch(r.id)})},this.buildLocation=t=>{const r=(s={},l)=>{var a,o,u;const d=this.state.isLoading?this.state.resolvedLocation:this.latestLocation,f=s._fromLocation??d;let h=f.pathname,g=s.fromSearch||f.search;const v=this.matchRoutes(f.pathname,g),y=s.from!=null?v.find(A=>Pi(this.basepath,Cr(A.pathname),{to:s.from,caseSensitive:!1,fuzzy:!1})):void 0;h=(y==null?void 0:y.pathname)||h,Le(s.from==null||y!=null,"Could not find match for from: "+s.from),g=((a=at(v))==null?void 0:a.search)||this.latestLocation.search;const x=l==null?void 0:l.filter(A=>v.find(N=>N.routeId===A.routeId)),p=this.routesById[(o=x==null?void 0:x.find(A=>A.pathname===h))==null?void 0:o.routeId];let m=s.to?this.resolvePathWithBase(h,`${s.to}`):this.resolvePathWithBase(h,(p==null?void 0:p.to)??h);const k={...(u=at(v))==null?void 0:u.params};let j=(s.params??!0)===!0?k:{...k,...It(s.params,k)};Object.keys(j).length>0&&(l==null||l.map(A=>{var N;const V=this.looseRoutesById[A.routeId];return((N=V==null?void 0:V.options.params)==null?void 0:N.stringify)??V.options.stringifyParams}).filter(Boolean).forEach(A=>{j={...j,...A(j)}})),m=Fl({path:m,params:j??{},leaveWildcards:!1,leaveParams:t.leaveParams});const w=(x==null?void 0:x.map(A=>this.looseRoutesById[A.routeId].options.preSearchFilters??[]).flat().filter(Boolean))??[],C=(x==null?void 0:x.map(A=>this.looseRoutesById[A.routeId].options.postSearchFilters??[]).flat().filter(Boolean))??[],z=w.length?w.reduce((A,N)=>N(A),g):g,S=s.search===!0?z:s.search?It(s.search,z):w.length?z:{},L=C.length?C.reduce((A,N)=>N(A),S):S,$=pn(g,L),q=this.options.stringifySearch($),T=s.hash===!0?this.latestLocation.hash:s.hash?It(s.hash,this.latestLocation.hash):void 0,ne=T?`#${T}`:"";let le=s.state===!0?this.latestLocation.state:s.state?It(s.state,this.latestLocation.state):{};return le=pn(this.latestLocation.state,le),{pathname:m,search:$,searchStr:q,state:le,hash:T??"",href:`${m}${q}${ne}`,unmaskOnReload:s.unmaskOnReload}},i=(s={},l)=>{var a;const o=r(s);let u=l?r(l):void 0;if(!u){let v={};const y=(a=this.options.routeMasks)==null?void 0:a.find(x=>{const p=Pi(this.basepath,o.pathname,{to:x.from,caseSensitive:!1,fuzzy:!1});return p?(v=p,!0):!1});if(y){const{from:x,...p}=y;l={...Dr(t,["from"]),...p,params:v},u=r(l)}}const d=this.matchRoutes(o.pathname,o.search),f=u?this.matchRoutes(u.pathname,u.search):void 0,h=u?r(l,f):void 0,g=r(s,d);return h&&(g.maskedLocation=h),g};return t.mask?i(t,{...Dr(t,["from"]),...t.mask}):i(t)},this.commitLocation=async({startTransition:t,viewTransition:r,ignoreBlocker:i,...s})=>{const l=()=>{s.state.key=this.latestLocation.state.key;const o=Vt(s.state,this.latestLocation.state);return delete s.state.key,o};if(this.latestLocation.href===s.href&&l())this.load();else{let{maskedLocation:o,...u}=s;o&&(u={...o,state:{...o.state,__tempKey:void 0,__tempLocation:{...u,search:u.searchStr,state:{...u.state,__tempKey:void 0,__tempLocation:void 0,key:void 0}}}},(u.unmaskOnReload??this.options.unmaskOnReload??!1)&&(u.state.__tempKey=this.tempLocationKey)),this.shouldViewTransition=r,this.history[s.replace?"replace":"push"](u.href,u.state,{ignoreBlocker:i})}return this.resetNextScroll=s.resetScroll??!0,this.latestLoadPromise},this.buildAndCommitLocation=({replace:t,resetScroll:r,startTransition:i,viewTransition:s,ignoreBlocker:l,...a}={})=>{const o=this.buildLocation(a);return this.commitLocation({...o,startTransition:i,viewTransition:s,replace:t,resetScroll:r,ignoreBlocker:l})},this.navigate=({from:t,to:r,__isRedirect:i,...s})=>{const l=String(r);let a;try{new URL(`${l}`),a=!0}catch{}return Le(!a),this.buildAndCommitLocation({...s,from:t,to:r})},this.load=async()=>{if(this.latestLocation=this.parseLocation(this.latestLocation),this.state.location===this.latestLocation)return;const t=Ir();this.latestLoadPromise=t;let r,i;return this.startReactTransition(async()=>{try{const s=this.latestLocation,l=this.state.resolvedLocation,a=l.href!==s.href;this.cancelMatches();let o;this.__store.batch(()=>{o=this.matchRoutes(s.pathname,s.search),this.__store.setState(u=>({...u,status:"pending",isLoading:!0,location:s,pendingMatches:o,cachedMatches:u.cachedMatches.filter(d=>!o.find(f=>f.id===d.id))}))}),this.state.redirect||this.emit({type:"onBeforeNavigate",fromLocation:l,toLocation:s,pathChanged:a}),this.emit({type:"onBeforeLoad",fromLocation:l,toLocation:s,pathChanged:a}),await this.loadMatches({matches:o,location:s,checkLatest:()=>this.checkLatest(t),onReady:async()=>{await this.startViewTransition(async()=>{let u,d,f;this.__store.batch(()=>{this.__store.setState(h=>{const g=h.matches,v=h.pendingMatches||h.matches;return u=g.filter(y=>!v.find(x=>x.id===y.id)),d=v.filter(y=>!g.find(x=>x.id===y.id)),f=g.filter(y=>v.find(x=>x.id===y.id)),{...h,isLoading:!1,matches:v,pendingMatches:void 0,cachedMatches:[...h.cachedMatches,...u.filter(y=>y.status!=="error")]}}),this.cleanCache()}),[[u,"onLeave"],[d,"onEnter"],[f,"onStay"]].forEach(([h,g])=>{h.forEach(v=>{var y,x;(x=(y=this.looseRoutesById[v.routeId].options)[g])==null||x.call(y,v)})})})}})}catch(s){cd(s)?(r=s,this.isServer||this.navigate({...s,replace:!0,__isRedirect:!0})):gn(s)&&(i=s),this.__store.setState(l=>({...l,statusCode:r?r.statusCode:i?404:l.matches.some(a=>a.status==="error")?500:200,redirect:r}))}t.resolve()}),this.latestLoadPromise},this.startViewTransition=async t=>{var r,i;const s=this.shouldViewTransition??this.options.defaultViewTransition;delete this.shouldViewTransition,(i=(r=s&&typeof document<"u"?document:void 0)==null?void 0:r.startViewTransition)!=null&&i.call(r,t)||t()},this.loadMatches=async({checkLatest:t,location:r,matches:i,preload:s,onReady:l})=>{let a,o=!1;const u=async()=>{o||(o=!0,await(l==null?void 0:l()))};!this.isServer&&!this.state.matches.length&&u();const d=(h,g,v)=>{var y;let x;const p=(y=this.state.pendingMatches)==null?void 0:y.find(j=>j.id===h),m=this.state.matches.find(j=>j.id===h),k=p?"pendingMatches":m?"matches":"cachedMatches";return this.__store.setState(j=>{var w;return{...j,[k]:(w=j[k])==null?void 0:w.map(C=>C.id===h?x=g(C):C)}}),x},f=(h,g)=>{if(cd(g))throw g;if(lt(g)||gn(g)){if(d(h.id,v=>({...v,status:lt(g)?"redirected":gn(g)?"notFound":"error",isFetching:!1,error:g})),g.routeId||(g.routeId=h.routeId),lt(g))throw o=!0,g=this.resolveRedirect({...g,_fromLocation:r}),g;if(gn(g))throw this.handleNotFound(i,g),g}};try{await new Promise((h,g)=>{(async()=>{try{for(let[x,p]of i.entries()){const m=i[x-1],k=this.looseRoutesById[p.routeId],j=new AbortController;let w=p.loadPromise;const C=k.options.pendingMs??this.options.defaultPendingMs;if(!!(l&&!this.isServer&&!s&&(k.options.loader||k.options.beforeLoad)&&typeof C=="number"&&C!==1/0&&(k.options.pendingComponent??this.options.defaultPendingComponent))&&setTimeout(()=>{try{t(),u()}catch{}},C),p.isFetching)continue;const S=w.resolve;w=Ir(S),i[x]=p=d(p.id,$=>({...$,isFetching:"beforeLoad",loadPromise:w}));const L=($,q)=>{var T,ne;if($ instanceof Promise)throw $;$.routerCode=q,a=a??x,f(p,$);try{(ne=(T=k.options).onError)==null||ne.call(T,$)}catch(le){$=le,f(p,$)}i[x]=p=d(p.id,()=>({...p,error:$,status:"error",updatedAt:Date.now(),abortController:new AbortController}))};p.paramsError&&L(p.paramsError,"PARSE_PARAMS"),p.searchError&&L(p.searchError,"VALIDATE_SEARCH");try{const $=(m==null?void 0:m.context)??this.options.context??{};i[x]=p={...p,routeContext:pn(p.routeContext,$),context:pn(p.context,$),abortController:j};const q={search:p.search,abortController:j,params:p.params,preload:!!s,context:p.routeContext,location:r,navigate:le=>this.navigate({...le,_fromLocation:r}),buildLocation:this.buildLocation,cause:s?"preload":p.cause},T=k.options.beforeLoad?await k.options.beforeLoad(q)??{}:{};t(),(lt(T)||gn(T))&&L(T,"BEFORE_LOAD");const ne={...$,...T};i[x]=p={...p,routeContext:pn(p.routeContext,T),context:pn(p.context,ne),abortController:j},d(p.id,()=>p)}catch($){L($,"BEFORE_LOAD");break}}t();const v=i.slice(0,a),y=[];v.forEach((x,p)=>{const m=async()=>{const k=y[p-1],j=this.looseRoutesById[x.routeId],w={params:x.params,deps:x.loaderDeps,preload:!!s,parentMatchPromise:k,abortController:x.abortController,context:x.context,location:r,navigate:T=>this.navigate({...T,_fromLocation:r}),cause:s?"preload":x.cause,route:j},C=async()=>{var T,ne,le,A,N,V,E,_,R;const D=$i(this.state,x.id);let O=Promise.resolve(),Pe=Promise.resolve(),ve=D.loaderPromise;const Ue=async()=>{const B=$i(this.state,x.id);B!=null&&B.minPendingPromise&&(await B.minPendingPromise,t(),d(B.id,ue=>({...ue,minPendingPromise:void 0})))};try{x.isFetching==="beforeLoad"&&(i[p]=x=d(x.id,de=>({...de,isFetching:"loader",fetchCount:x.fetchCount+1})),O=((T=j.lazyFn)==null?void 0:T.call(j).then(de=>{Object.assign(j.options,de.options)}))||Promise.resolve(),Pe=O.then(()=>Promise.all(k0.map(async de=>{const fn=j.options[de];fn!=null&&fn.preload&&await fn.preload()}))),await O,t(),ve=(le=(ne=j.options).loader)==null?void 0:le.call(ne,w),i[p]=x=d(x.id,de=>({...de,loaderPromise:ve})));let B=await ve;this.serializeLoaderData&&(B=this.serializeLoaderData(B,{router:this,match:x})),t(),f(x,B),await Ue(),t();const ue=(N=(A=j.options).meta)==null?void 0:N.call(A,{matches:i,params:x.params,loaderData:B}),Se=(E=(V=j.options).headers)==null?void 0:E.call(V,{loaderData:B});i[p]=x=d(x.id,de=>({...de,error:void 0,status:"success",isFetching:!1,updatedAt:Date.now(),loaderData:B,meta:ue,headers:Se}))}catch(B){t();let ue=B;await Ue(),t(),f(x,B);try{(R=(_=j.options).onError)==null||R.call(_,B)}catch(Se){ue=Se,f(x,Se)}i[p]=x=d(x.id,Se=>({...Se,error:ue,status:"error",isFetching:!1}))}await Pe,t(),x.loadPromise.resolve()},z=Date.now()-x.updatedAt,S=s?j.options.preloadStaleTime??this.options.defaultPreloadStaleTime??3e4:j.options.staleTime??this.options.defaultStaleTime??0,L=j.options.shouldReload,$=typeof L=="function"?L(w):L;i[p]=x={...x,preload:!!s&&!this.state.matches.find(T=>T.id===x.id)};const q=async()=>{try{await C()}catch(T){t(),f(x,T)}};if(x.status==="success"&&(x.invalid||($??z>S))){(async()=>{try{await q()}catch{}})();return}x.status!=="success"&&await q()};y.push(m())}),await Promise.all(y),t(),h()}catch(v){g(v)}})()}),await u()}catch(h){if(lt(h)||gn(h))throw gn(h)&&!s&&await u(),h}return i},this.invalidate=()=>{const t=r=>({...r,invalid:!0,...r.status==="error"?{status:"pending"}:{}});return this.__store.setState(r=>{var i;return{...r,matches:r.matches.map(t),cachedMatches:r.cachedMatches.map(t),pendingMatches:(i=r.pendingMatches)==null?void 0:i.map(t)}}),this.load()},this.resolveRedirect=t=>{const r=t;return r.href||(r.href=this.buildLocation(r).href),r},this.cleanCache=()=>{this.__store.setState(t=>({...t,cachedMatches:t.cachedMatches.filter(r=>{const i=this.looseRoutesById[r.routeId];if(!i.options.loader)return!1;const s=(r.preload?i.options.preloadGcTime??this.options.defaultPreloadGcTime:i.options.gcTime??this.options.defaultGcTime)??5*60*1e3;return r.status!=="error"&&Date.now()-r.updatedAt<s})}))},this.preloadRoute=async t=>{const r=this.buildLocation(t);let i=this.matchRoutes(r.pathname,r.search,{throwOnError:!0,preload:!0});const s=Object.fromEntries([...this.state.matches,...this.state.pendingMatches??[],...this.state.cachedMatches].map(u=>[u.id,!0]));this.__store.batch(()=>{i.forEach(u=>{s[u.id]||this.__store.setState(d=>({...d,cachedMatches:[...d.cachedMatches,u]}))})});const l=at(i),a=at(this.state.matches),o=at(this.state.pendingMatches??[]);if(!(l&&((a==null?void 0:a.id)===l.id||(o==null?void 0:o.id)===l.id)))try{return i=await this.loadMatches({matches:i,location:r,preload:!0,checkLatest:()=>{}}),i}catch(u){if(lt(u))return await this.preloadRoute({...u,_fromLocation:r});console.error(u);return}},this.matchRoute=(t,r)=>{const i={...t,to:t.to?this.resolvePathWithBase(t.from||"",t.to):void 0,params:t.params||{},leaveParams:!0},s=this.buildLocation(i);if(r!=null&&r.pending&&this.state.status!=="pending")return!1;const a=((r==null?void 0:r.pending)===void 0?!this.state.isLoading:r.pending)?this.latestLocation:this.state.resolvedLocation,o=Pi(this.basepath,a.pathname,{...r,to:s.pathname});return!o||t.params&&!Vt(o,t.params,!0)?!1:o&&((r==null?void 0:r.includeSearch)??!0)?Vt(a.search,s.search,!0)?o:!1:o},this.dehydrate=()=>{var t;const r=((t=this.options.errorSerializer)==null?void 0:t.serialize)??S0;return{state:{dehydratedMatches:this.state.matches.map(i=>({...Dr(i,["id","status","updatedAt"]),error:i.error?{data:r(i.error),__isServerError:!0}:void 0}))},manifest:this.manifest}},this.hydrate=async t=>{var r,i,s;let l=t;typeof document<"u"&&(l=(r=window.__TSR__)==null?void 0:r.dehydrated),Le(l);const a=this.options.transformer.parse(l);this.dehydratedData=a.payload,(s=(i=this.options).hydrate)==null||s.call(i,a.payload);const o=a.router.state,u=this.matchRoutes(this.state.location.pathname,this.state.location.search).map(d=>{const f=o.dehydratedMatches.find(h=>h.id===d.id);return Le(f,`Could not find a client-side match for dehydrated match with id: ${d.id}!`),{...d,...f}});this.__store.setState(d=>({...d,matches:u})),this.manifest=a.router.manifest},this.injectedHtml=[],this.getStreamedValue=t=>{var r;if(!this.isServer)return(r=window.__TSR__)==null?void 0:r.streamedValues[t]},this.streamValue=(t,r)=>{var i;const s=`window.__TSR__.streamedValues['${t}'] = ${(i=this.serializer)==null?void 0:i.call(this,r)}`;this.injectedHtml.push(`<script class='tsr-once'>${s}<\/script>`)},this.handleNotFound=(t,r)=>{const i=Object.fromEntries(t.map(a=>[a.routeId,a]));let s=(r.global?this.looseRoutesById[Ee]:this.looseRoutesById[r.routeId])||this.looseRoutesById[Ee];for(;!s.options.notFoundComponent&&!this.options.defaultNotFoundComponent&&s.id!==Ee;)s=s.parentRoute,Le(s);const l=i[s.id];Le(l,"Could not find match for route: "+s.id),Object.assign(l,{status:"notFound",error:r,isFetching:!1})},this.hasNotFoundMatch=()=>this.__store.state.matches.some(t=>t.status==="notFound"||t.globalNotFound),this.update({defaultPreloadDelay:50,defaultPendingMs:1e3,defaultPendingMinMs:500,context:void 0,...n,stringifySearch:n.stringifySearch??n0,parseSearch:n.parseSearch??e0,transformer:n.transformer??JSON}),typeof document<"u"&&(window.__TSR__ROUTER__=this)}get state(){return this.__store.state}get looseRoutesById(){return this.routesById}}class j0 extends Error{}class x0 extends Error{}function w0(e){return{isLoading:!1,isTransitioning:!1,status:"idle",resolvedLocation:{...e},location:e,matches:[],pendingMatches:[],cachedMatches:[],statusCode:200}}function S0(e){return e instanceof Error?{name:e.name,message:e.message}:{data:e}}function et(e){const n=F.useContext(Ks);return _e({select:r=>{const i=r.matches.find(s=>e.from?e.from===s.routeId:s.id===n);return Le(i,`Could not find ${e.from?`an active match from "${e.from}"`:"a nearest match!"}`),e.select?e.select(i):i}})}function ah(e){return et({...e,select:n=>typeof e.select=="function"?e.select(n.loaderDeps):n.loaderDeps})}function oh(e){return et({...e,select:n=>typeof e.select=="function"?e.select(n.loaderData):n.loaderData})}function uh(e){return et({...e,select:n=>e.select?e.select(n.params):n.params})}function dh(e){return et({...e,select:n=>e.select?e.select(n.search):n.search})}function ch(e){const n=Fn();return F.useCallback(t=>n.navigate({...t}),[n])}let fh=class{constructor(n){this.init=t=>{var r,i;this.originalIndex=t.originalIndex;const s=this.options,l=!(s!=null&&s.path)&&!(s!=null&&s.id);this.parentRoute=(i=(r=this.options)==null?void 0:r.getParentRoute)==null?void 0:i.call(r),l?this.path=Ee:Le(this.parentRoute);let a=l?Ee:s.path;a&&a!=="/"&&(a=Bo(a));const o=(s==null?void 0:s.id)||a;let u=l?Ee:Zn([this.parentRoute.id===Ee?"":this.parentRoute.id,o]);a===Ee&&(a="/"),u!==Ee&&(u=Zn(["/",u]));const d=u===Ee?"/":Zn([this.parentRoute.fullPath,a]);this.path=a,this.id=u,this.fullPath=d,this.to=d},this.addChildren=t=>(this.children=Array.isArray(t)?t:Object.values(t),this),this.updateLoader=t=>(Object.assign(this.options,t),this),this.update=t=>(Object.assign(this.options,t),this),this.lazy=t=>(this.lazyFn=t,this),this.useMatch=t=>et({...t,from:this.id}),this.useRouteContext=t=>et({...t,from:this.id,select:r=>t!=null&&t.select?t.select(r.context):r.context}),this.useSearch=t=>dh({...t,from:this.id}),this.useParams=t=>uh({...t,from:this.id}),this.useLoaderDeps=t=>ah({...t,from:this.id}),this.useLoaderData=t=>oh({...t,from:this.id}),this.useNavigate=()=>ch({from:this.id}),this.options=n||{},this.isRoot=!(n!=null&&n.getParentRoute),Le(!(n!=null&&n.id&&(n!=null&&n.path))),this.$$typeof=Symbol.for("react.memo")}};function z0(e){return new fh(e)}class C0 extends fh{constructor(n){super(n)}}function E0(e){return new C0(e)}function hh(e){return new b0(e,{silent:!0}).createRoute}class b0{constructor(n,t){this.path=n,this.createRoute=r=>{this.silent;const i=z0(r);return i.isRoot=!1,i},this.silent=t==null?void 0:t.silent}}class _0{constructor(n){this.useMatch=t=>et({select:t==null?void 0:t.select,from:this.options.id}),this.useRouteContext=t=>et({from:this.options.id,select:r=>t!=null&&t.select?t.select(r.context):r.context}),this.useSearch=t=>dh({...t,from:this.options.id}),this.useParams=t=>uh({...t,from:this.options.id}),this.useLoaderDeps=t=>ah({...t,from:this.options.id}),this.useLoaderData=t=>oh({...t,from:this.options.id}),this.useNavigate=()=>ch({from:this.options.id}),this.options=n,this.$$typeof=Symbol.for("react.memo")}}function bv(e){const n=P0(e);return t=>new _0({id:n,...t})}const $0=/\(.+\)/g;function P0(e){return e.replaceAll($0,"").replaceAll("//","/")}const R0="Error preloading route! ☝️";function L0(e){const n=Fn(),[t,r]=F.useState(!1),{activeProps:i=()=>({className:"active"}),inactiveProps:s=()=>({}),activeOptions:l,hash:a,search:o,params:u,to:d,state:f,mask:h,preload:g,preloadDelay:v,replace:y,startTransition:x,resetScroll:p,viewTransition:m,children:k,target:j,disabled:w,style:C,className:z,onClick:S,onFocus:L,onMouseEnter:$,onMouseLeave:q,onTouchStart:T,ignoreBlocker:ne,...le}=e;let A="internal";try{new URL(`${d}`),A="external"}catch{}const N=n.buildLocation(e),V=g??n.options.defaultPreload,E=v??n.options.defaultPreloadDelay??0,_=_e({select:te=>{const Q=zs(te.location.pathname,n.basepath).split("/"),rl=zs(N.pathname,n.basepath).split("/").every((Yh,Xh)=>Yh===Q[Xh]),Jh=l!=null&&l.exact?p0(te.location.pathname,N.pathname,n.basepath):rl,Qh=l!=null&&l.includeHash?te.location.hash===N.hash:!0,Zh=(l==null?void 0:l.includeSearch)??!0?Vt(te.location.search,N.search,!(l!=null&&l.exact)):!0;return Jh&&Qh&&Zh}});if(A==="external")return{...le,type:A,href:d,...k&&{children:k},...j&&{target:j},...w&&{disabled:w},...C&&{style:C},...z&&{className:z},...S&&{onClick:S},...L&&{onFocus:L},...$&&{onMouseEnter:$},...q&&{onMouseLeave:q},...T&&{onTouchStart:T}};const R=te=>{if(!w&&!F0(te)&&!te.defaultPrevented&&(!j||j==="_self")&&te.button===0){te.preventDefault(),Gf.flushSync(()=>{r(!0)});const Q=n.subscribe("onResolved",()=>{Q(),r(!1)});n.commitLocation({...N,replace:y,resetScroll:p,startTransition:x,viewTransition:m,ignoreBlocker:ne})}},D=()=>{n.preloadRoute(e).catch(te=>{console.warn(te),console.warn(R0)})},O=te=>{w||V&&D()},Pe=O,ve=te=>{if(w)return;const Q=te.target||{};if(V){if(Q.preloadTimeout)return;Q.preloadTimeout=setTimeout(()=>{Q.preloadTimeout=null,D()},E)}},Ue=te=>{if(w)return;const Q=te.target||{};Q.preloadTimeout&&(clearTimeout(Q.preloadTimeout),Q.preloadTimeout=null)},B=te=>Q=>{var tl;(tl=Q.persist)==null||tl.call(Q),te.filter(Boolean).forEach(rl=>{Q.defaultPrevented||rl(Q)})},ue=_?It(i,{})??{}:{},Se=_?{}:It(s,{}),de=[z,ue.className,Se.className].filter(Boolean).join(" "),fn={...C,...ue.style,...Se.style};return{...ue,...Se,...le,href:w?void 0:N.maskedLocation?n.history.createHref(N.maskedLocation.href):n.history.createHref(N.href),onClick:B([S,R]),onFocus:B([L,O]),onMouseEnter:B([$,ve]),onMouseLeave:B([q,Ue]),onTouchStart:B([T,Pe]),disabled:!!w,target:j,...Object.keys(fn).length&&{style:fn},...de&&{className:de},...w&&{role:"link","aria-disabled":!0},..._&&{"data-status":"active","aria-current":"page"},...t&&{"data-transitioning":"transitioning"}}}const md=F.forwardRef((e,n)=>{const{_asChild:t,...r}=e,{type:i,...s}=L0(r),l=typeof r.children=="function"?r.children({isActive:s["data-status"]==="active"}):r.children;return typeof t>"u"&&delete s.disabled,F.createElement(t||"a",{...s,ref:n},l)});function F0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const N0="modulepreload",T0=function(e){return"/"+e},gd={},M0=function(n,t,r){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));i=Promise.all(t.map(a=>{if(a=T0(a),a in gd)return;gd[a]=!0;const o=a.endsWith(".css"),u=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${u}`))return;const d=document.createElement("link");if(d.rel=o?"stylesheet":N0,o||(d.as="script",d.crossOrigin=""),d.href=a,l&&d.setAttribute("nonce",l),document.head.appendChild(d),o)return new Promise((f,h)=>{d.addEventListener("load",f),d.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${a}`)))})}))}return i.then(()=>n()).catch(s=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s})};let D0={data:""},I0=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||D0,O0=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,A0=/\/\*[^]*?\*\/|  +/g,kd=/\n+/g,ot=(e,n)=>{let t="",r="",i="";for(let s in e){let l=e[s];s[0]=="@"?s[1]=="i"?t=s+" "+l+";":r+=s[1]=="f"?ot(l,s):s+"{"+ot(l,s[1]=="k"?"":n)+"}":typeof l=="object"?r+=ot(l,n?n.replace(/([^,])+/g,a=>s.replace(/(^:.*)|([^,])+/g,o=>/&/.test(o)?o.replace(/&/g,a):a?a+" "+o:o)):s):l!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=ot.p?ot.p(s,l):s+":"+l+";")}return t+(n&&i?n+"{"+i+"}":i)+r},xn={},ph=e=>{if(typeof e=="object"){let n="";for(let t in e)n+=t+ph(e[t]);return n}return e},B0=(e,n,t,r,i)=>{let s=ph(e),l=xn[s]||(xn[s]=(o=>{let u=0,d=11;for(;u<o.length;)d=101*d+o.charCodeAt(u++)>>>0;return"go"+d})(s));if(!xn[l]){let o=s!==e?e:(u=>{let d,f,h=[{}];for(;d=O0.exec(u.replace(A0,""));)d[4]?h.shift():d[3]?(f=d[3].replace(kd," ").trim(),h.unshift(h[0][f]=h[0][f]||{})):h[0][d[1]]=d[2].replace(kd," ").trim();return h[0]})(e);xn[l]=ot(i?{["@keyframes "+l]:o}:o,t?"":"."+l)}let a=t&&xn.g?xn.g:null;return t&&(xn.g=xn[l]),((o,u,d,f)=>{f?u.data=u.data.replace(f,o):u.data.indexOf(o)===-1&&(u.data=d?o+u.data:u.data+o)})(xn[l],n,r,a),l},U0=(e,n,t)=>e.reduce((r,i,s)=>{let l=n[s];if(l&&l.call){let a=l(t),o=a&&a.props&&a.props.className||/^go/.test(a)&&a;l=o?"."+o:a&&typeof a=="object"?a.props?"":ot(a,""):a===!1?"":a}return r+i+(l??"")},"");function rr(e){let n=this||{},t=e.call?e(n.p):e;return B0(t.unshift?t.raw?U0(t,[].slice.call(arguments,1),n.p):t.reduce((r,i)=>Object.assign(r,i&&i.call?i(n.p):i),{}):t,I0(n.target),n.g,n.o,n.k)}rr.bind({g:1});rr.bind({k:1});function mh(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(t=mh(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function je(){for(var e,n,t=0,r="",i=arguments.length;t<i;t++)(e=arguments[t])&&(n=mh(e))&&(r&&(r+=" "),r+=n);return r}const q0=e=>{try{const n=localStorage.getItem(e);return typeof n=="string"?JSON.parse(n):void 0}catch{return}};function Cs(e,n){const[t,r]=W.useState();W.useEffect(()=>{const s=q0(e);r(typeof s>"u"||s===null?typeof n=="function"?n():n:s)},[n,e]);const i=W.useCallback(s=>{r(l=>{let a=s;typeof s=="function"&&(a=s(l));try{localStorage.setItem(e,JSON.stringify(a))}catch{}return a})},[e]);return[t,i]}const H0=typeof window>"u";function Ta(e){return e.status==="success"&&e.isFetching?"blue":e.status==="pending"?"yellow":e.status==="error"?"red":e.status==="success"?"green":"gray"}function W0(e,n){const t=e.find(r=>r.routeId===n.id);return t?Ta(t):"gray"}function gh(){const e=W.useRef(!1),n=W.useCallback(()=>e.current,[]);return W[H0?"useEffect":"useLayoutEffect"](()=>(e.current=!0,()=>{e.current=!1}),[]),n}const K0=e=>{const n=Object.getOwnPropertyNames(Object(e)),t=typeof e=="bigint"?`${e.toString()}n`:e;try{return JSON.stringify(t,n)}catch{return"unable to stringify"}};function vd(e){const n=gh(),[t,r]=W.useState(e),i=W.useCallback(s=>{V0(()=>{n()&&r(s)})},[n]);return[t,i]}function V0(e){Promise.resolve().then(e).catch(n=>setTimeout(()=>{throw n}))}function G0(e,n=[t=>t]){return e.map((t,r)=>[t,r]).sort(([t,r],[i,s])=>{for(const l of n){const a=l(t),o=l(i);if(typeof a>"u"){if(typeof o>"u")continue;return 1}if(a!==o)return a>o?1:-1}return r-s}).map(([t])=>t)}const G={colors:{inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000000",white:"#ffffff",neutral:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},darkGray:{50:"#525c7a",100:"#49536e",200:"#414962",300:"#394056",400:"#313749",500:"#292e3d",600:"#212530",700:"#191c24",800:"#111318",900:"#0b0d10"},gray:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},blue:{25:"#F5FAFF",50:"#EFF8FF",100:"#D1E9FF",200:"#B2DDFF",300:"#84CAFF",400:"#53B1FD",500:"#2E90FA",600:"#1570EF",700:"#175CD3",800:"#1849A9",900:"#194185"},green:{25:"#F6FEF9",50:"#ECFDF3",100:"#D1FADF",200:"#A6F4C5",300:"#6CE9A6",400:"#32D583",500:"#12B76A",600:"#039855",700:"#027A48",800:"#05603A",900:"#054F31"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},yellow:{25:"#FFFCF5",50:"#FFFAEB",100:"#FEF0C7",200:"#FEDF89",300:"#FEC84B",400:"#FDB022",500:"#F79009",600:"#DC6803",700:"#B54708",800:"#93370D",900:"#7A2E0E"},purple:{25:"#FAFAFF",50:"#F4F3FF",100:"#EBE9FE",200:"#D9D6FE",300:"#BDB4FE",400:"#9B8AFB",500:"#7A5AF8",600:"#6938EF",700:"#5925DC",800:"#4A1FB8",900:"#3E1C96"},teal:{25:"#F6FEFC",50:"#F0FDF9",100:"#CCFBEF",200:"#99F6E0",300:"#5FE9D0",400:"#2ED3B7",500:"#15B79E",600:"#0E9384",700:"#107569",800:"#125D56",900:"#134E48"},pink:{25:"#fdf2f8",50:"#fce7f3",100:"#fbcfe8",200:"#f9a8d4",300:"#f472b6",400:"#ec4899",500:"#db2777",600:"#be185d",700:"#9d174d",800:"#831843",900:"#500724"},cyan:{25:"#ecfeff",50:"#cffafe",100:"#a5f3fc",200:"#67e8f9",300:"#22d3ee",400:"#06b6d4",500:"#0891b2",600:"#0e7490",700:"#155e75",800:"#164e63",900:"#083344"}},alpha:{100:"ff",90:"e5",80:"cc",70:"b3",60:"99",50:"80",40:"66",30:"4d",20:"33",10:"1a",0:"00"},font:{size:{"2xs":"calc(var(--tsrd-font-size) * 0.625)",xs:"calc(var(--tsrd-font-size) * 0.75)",sm:"calc(var(--tsrd-font-size) * 0.875)",md:"var(--tsrd-font-size)",lg:"calc(var(--tsrd-font-size) * 1.125)",xl:"calc(var(--tsrd-font-size) * 1.25)","2xl":"calc(var(--tsrd-font-size) * 1.5)","3xl":"calc(var(--tsrd-font-size) * 1.875)","4xl":"calc(var(--tsrd-font-size) * 2.25)","5xl":"calc(var(--tsrd-font-size) * 3)","6xl":"calc(var(--tsrd-font-size) * 3.75)","7xl":"calc(var(--tsrd-font-size) * 4.5)","8xl":"calc(var(--tsrd-font-size) * 6)","9xl":"calc(var(--tsrd-font-size) * 8)"},lineHeight:{"3xs":"calc(var(--tsrd-font-size) * 0.75)","2xs":"calc(var(--tsrd-font-size) * 0.875)",xs:"calc(var(--tsrd-font-size) * 1)",sm:"calc(var(--tsrd-font-size) * 1.25)",md:"calc(var(--tsrd-font-size) * 1.5)",lg:"calc(var(--tsrd-font-size) * 1.75)",xl:"calc(var(--tsrd-font-size) * 2)","2xl":"calc(var(--tsrd-font-size) * 2.25)","3xl":"calc(var(--tsrd-font-size) * 2.5)","4xl":"calc(var(--tsrd-font-size) * 2.75)","5xl":"calc(var(--tsrd-font-size) * 3)","6xl":"calc(var(--tsrd-font-size) * 3.25)","7xl":"calc(var(--tsrd-font-size) * 3.5)","8xl":"calc(var(--tsrd-font-size) * 3.75)","9xl":"calc(var(--tsrd-font-size) * 4)"},weight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},fontFamily:{sans:"ui-sans-serif, Inter, system-ui, sans-serif, sans-serif",mono:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"}},breakpoints:{xs:"320px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},border:{radius:{none:"0px",xs:"calc(var(--tsrd-font-size) * 0.125)",sm:"calc(var(--tsrd-font-size) * 0.25)",md:"calc(var(--tsrd-font-size) * 0.375)",lg:"calc(var(--tsrd-font-size) * 0.5)",xl:"calc(var(--tsrd-font-size) * 0.75)","2xl":"calc(var(--tsrd-font-size) * 1)","3xl":"calc(var(--tsrd-font-size) * 1.5)",full:"9999px"}},size:{0:"0px",.25:"calc(var(--tsrd-font-size) * 0.0625)",.5:"calc(var(--tsrd-font-size) * 0.125)",1:"calc(var(--tsrd-font-size) * 0.25)",1.5:"calc(var(--tsrd-font-size) * 0.375)",2:"calc(var(--tsrd-font-size) * 0.5)",2.5:"calc(var(--tsrd-font-size) * 0.625)",3:"calc(var(--tsrd-font-size) * 0.75)",3.5:"calc(var(--tsrd-font-size) * 0.875)",4:"calc(var(--tsrd-font-size) * 1)",4.5:"calc(var(--tsrd-font-size) * 1.125)",5:"calc(var(--tsrd-font-size) * 1.25)",5.5:"calc(var(--tsrd-font-size) * 1.375)",6:"calc(var(--tsrd-font-size) * 1.5)",6.5:"calc(var(--tsrd-font-size) * 1.625)",7:"calc(var(--tsrd-font-size) * 1.75)",8:"calc(var(--tsrd-font-size) * 2)",9:"calc(var(--tsrd-font-size) * 2.25)",10:"calc(var(--tsrd-font-size) * 2.5)",11:"calc(var(--tsrd-font-size) * 2.75)",12:"calc(var(--tsrd-font-size) * 3)",14:"calc(var(--tsrd-font-size) * 3.5)",16:"calc(var(--tsrd-font-size) * 4)",20:"calc(var(--tsrd-font-size) * 5)",24:"calc(var(--tsrd-font-size) * 6)",28:"calc(var(--tsrd-font-size) * 7)",32:"calc(var(--tsrd-font-size) * 8)",36:"calc(var(--tsrd-font-size) * 9)",40:"calc(var(--tsrd-font-size) * 10)",44:"calc(var(--tsrd-font-size) * 11)",48:"calc(var(--tsrd-font-size) * 12)",52:"calc(var(--tsrd-font-size) * 13)",56:"calc(var(--tsrd-font-size) * 14)",60:"calc(var(--tsrd-font-size) * 15)",64:"calc(var(--tsrd-font-size) * 16)",72:"calc(var(--tsrd-font-size) * 18)",80:"calc(var(--tsrd-font-size) * 20)",96:"calc(var(--tsrd-font-size) * 24)"},shadow:{xs:(e="rgb(0 0 0 / 0.1)")=>"0 1px 2px 0 rgb(0 0 0 / 0.05)",sm:(e="rgb(0 0 0 / 0.1)")=>`0 1px 3px 0 ${e}, 0 1px 2px -1px ${e}`,md:(e="rgb(0 0 0 / 0.1)")=>`0 4px 6px -1px ${e}, 0 2px 4px -2px ${e}`,lg:(e="rgb(0 0 0 / 0.1)")=>`0 10px 15px -3px ${e}, 0 4px 6px -4px ${e}`,xl:(e="rgb(0 0 0 / 0.1)")=>`0 20px 25px -5px ${e}, 0 8px 10px -6px ${e}`,"2xl":(e="rgb(0 0 0 / 0.25)")=>`0 25px 50px -12px ${e}`,inner:(e="rgb(0 0 0 / 0.05)")=>`inset 0 2px 4px 0 ${e}`,none:()=>"none"},zIndices:{hide:-1,auto:"auto",base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800}},Gs=W.createContext(void 0),Uo=W.createContext(void 0),J0=()=>{const e=W.useContext(Uo);if(!e)throw new Error("useDevtoolsOnClose must be used within a TanStackRouterDevtools component");return e},yd=({expanded:e,style:n={}})=>{const t=kh();return c.jsx("span",{className:t.expander,children:c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"none",viewBox:"0 0 24 24",className:je(t.expanderIcon(e)),children:c.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 18l6-6-6-6"})})})};function Q0(e,n){if(n<1)return[];let t=0;const r=[];for(;t<e.length;)r.push(e.slice(t,t+n)),t=t+n;return r}const Z0=({handleEntry:e,label:n,value:t,subEntries:r=[],subEntryPages:i=[],type:s,expanded:l=!1,toggleExpanded:a,pageSize:o,renderer:u})=>{const[d,f]=F.useState([]),[h,g]=F.useState(void 0),v=kh(),y=()=>{g(t())};return c.jsx("div",{className:v.entry,children:i.length?c.jsxs(c.Fragment,{children:[c.jsxs("button",{className:v.expandButton,onClick:()=>a(),children:[c.jsx(yd,{expanded:l}),n,c.jsxs("span",{className:v.info,children:[String(s).toLowerCase()==="iterable"?"(Iterable) ":"",r.length," ",r.length>1?"items":"item"]})]}),l?i.length===1?c.jsx("div",{className:v.subEntries,children:r.map((x,p)=>e(x))}):c.jsx("div",{className:v.subEntries,children:i.map((x,p)=>c.jsx("div",{children:c.jsxs("div",{className:v.entry,children:[c.jsxs("button",{className:je(v.labelButton,"labelButton"),onClick:()=>f(m=>m.includes(p)?m.filter(k=>k!==p):[...m,p]),children:[c.jsx(yd,{expanded:d.includes(p)})," ","[",p*o," ..."," ",p*o+o-1,"]"]}),d.includes(p)?c.jsx("div",{className:v.subEntries,children:x.map(m=>e(m))}):null]})},p))}):null]}):s==="function"?c.jsx(c.Fragment,{children:c.jsx(Ot,{renderer:u,label:c.jsxs("button",{onClick:y,className:v.refreshValueBtn,children:[c.jsx("span",{children:n})," 🔄"," "]}),value:h,defaultExpanded:{}})}):c.jsxs(c.Fragment,{children:[c.jsxs("span",{children:[n,":"]})," ",c.jsx("span",{className:v.value,children:K0(t)})]})})};function Y0(e){return Symbol.iterator in e}function Ot({value:e,defaultExpanded:n,renderer:t=Z0,pageSize:r=100,filterSubEntries:i,...s}){const[l,a]=F.useState(!!n),o=F.useCallback(()=>a(g=>!g),[]);let u=typeof e,d=[];const f=g=>{const v=n===!0?{[g.label]:!0}:n==null?void 0:n[g.label];return{...g,defaultExpanded:v}};Array.isArray(e)?(u="array",d=e.map((g,v)=>f({label:v.toString(),value:g}))):e!==null&&typeof e=="object"&&Y0(e)&&typeof e[Symbol.iterator]=="function"?(u="Iterable",d=Array.from(e,(g,v)=>f({label:v.toString(),value:g}))):typeof e=="object"&&e!==null&&(u="object",d=Object.entries(e).map(([g,v])=>f({label:g,value:v}))),d=i?i(d):d;const h=Q0(d,r);return t({handleEntry:g=>c.jsx(Ot,{value:e,renderer:t,filterSubEntries:i,...s,...g},g.label),type:u,subEntries:d,subEntryPages:h,value:e,expanded:l,toggleExpanded:o,pageSize:r,...s})}const X0=e=>{const{colors:n,font:t,size:r,alpha:i,shadow:s,border:l}=G,{fontFamily:a,lineHeight:o,size:u}=t,d=e?rr.bind({target:e}):rr;return{entry:d`
      font-family: ${a.mono};
      font-size: ${u.xs};
      line-height: ${o.sm};
      outline: none;
      word-break: break-word;
    `,labelButton:d`
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      background: transparent;
      border: none;
      padding: 0;
    `,expander:d`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: ${r[3]};
      height: ${r[3]};
      padding-left: 3px;
      box-sizing: content-box;
    `,expanderIcon:f=>f?d`
          transform: rotate(90deg);
          transition: transform 0.1s ease;
        `:d`
        transform: rotate(0deg);
        transition: transform 0.1s ease;
      `,expandButton:d`
      display: flex;
      gap: ${r[1]};
      align-items: center;
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      background: transparent;
      border: none;
      padding: 0;
    `,value:d`
      color: ${n.purple[400]};
    `,subEntries:d`
      margin-left: ${r[2]};
      padding-left: ${r[2]};
      border-left: 2px solid ${n.darkGray[400]};
    `,info:d`
      color: ${n.gray[500]};
      font-size: ${u["2xs"]};
      padding-left: ${r[1]};
    `,refreshValueBtn:d`
      appearance: none;
      border: 0;
      cursor: pointer;
      background: transparent;
      color: inherit;
      padding: 0;
      font-family: ${a.mono};
      font-size: ${u.xs};
    `}};let Ri=null;function kh(){const e=F.useContext(Gs);return Ri||(Ri=X0(e),Ri)}function jd(){const e=W.useId();return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 634 633",viewBox:"0 0 634 633",children:c.jsxs("g",{transform:"translate(1)",children:[c.jsxs("linearGradient",{id:`a-${e}`,x1:"-641.486",x2:"-641.486",y1:"856.648",y2:"855.931",gradientTransform:"matrix(633 0 0 -633 406377 542258)",gradientUnits:"userSpaceOnUse",children:[c.jsx("stop",{offset:"0",stopColor:"#6bdaff"}),c.jsx("stop",{offset:"0.319",stopColor:"#f9ffb5"}),c.jsx("stop",{offset:"0.706",stopColor:"#ffa770"}),c.jsx("stop",{offset:"1",stopColor:"#ff7373"})]}),c.jsx("circle",{cx:"316.5",cy:"316.5",r:"316.5",fill:`url(#a-${e})`,fillRule:"evenodd",clipRule:"evenodd"}),c.jsx("defs",{children:c.jsx("filter",{id:`b-${e}`,width:"454",height:"396.9",x:"-137.5",y:"412",filterUnits:"userSpaceOnUse",children:c.jsx("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"})})}),c.jsx("mask",{id:`c-${e}`,width:"454",height:"396.9",x:"-137.5",y:"412",maskUnits:"userSpaceOnUse",children:c.jsx("g",{filter:`url(#b-${e})`,children:c.jsx("circle",{cx:"316.5",cy:"316.5",r:"316.5",fill:"#FFF",fillRule:"evenodd",clipRule:"evenodd"})})}),c.jsx("ellipse",{cx:"89.5",cy:"610.5",fill:"#015064",fillRule:"evenodd",stroke:"#00CFE2",strokeWidth:"25",clipRule:"evenodd",mask:`url(#c-${e})`,rx:"214.5",ry:"186"}),c.jsx("defs",{children:c.jsx("filter",{id:`d-${e}`,width:"454",height:"396.9",x:"316.5",y:"412",filterUnits:"userSpaceOnUse",children:c.jsx("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"})})}),c.jsx("mask",{id:`e-${e}`,width:"454",height:"396.9",x:"316.5",y:"412",maskUnits:"userSpaceOnUse",children:c.jsx("g",{filter:`url(#d-${e})`,children:c.jsx("circle",{cx:"316.5",cy:"316.5",r:"316.5",fill:"#FFF",fillRule:"evenodd",clipRule:"evenodd"})})}),c.jsx("ellipse",{cx:"543.5",cy:"610.5",fill:"#015064",fillRule:"evenodd",stroke:"#00CFE2",strokeWidth:"25",clipRule:"evenodd",mask:`url(#e-${e})`,rx:"214.5",ry:"186"}),c.jsx("defs",{children:c.jsx("filter",{id:`f-${e}`,width:"454",height:"396.9",x:"-137.5",y:"450",filterUnits:"userSpaceOnUse",children:c.jsx("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"})})}),c.jsx("mask",{id:`g-${e}`,width:"454",height:"396.9",x:"-137.5",y:"450",maskUnits:"userSpaceOnUse",children:c.jsx("g",{filter:`url(#f-${e})`,children:c.jsx("circle",{cx:"316.5",cy:"316.5",r:"316.5",fill:"#FFF",fillRule:"evenodd",clipRule:"evenodd"})})}),c.jsx("ellipse",{cx:"89.5",cy:"648.5",fill:"#015064",fillRule:"evenodd",stroke:"#00A8B8",strokeWidth:"25",clipRule:"evenodd",mask:`url(#g-${e})`,rx:"214.5",ry:"186"}),c.jsx("defs",{children:c.jsx("filter",{id:`h-${e}`,width:"454",height:"396.9",x:"316.5",y:"450",filterUnits:"userSpaceOnUse",children:c.jsx("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"})})}),c.jsx("mask",{id:`i-${e}`,width:"454",height:"396.9",x:"316.5",y:"450",maskUnits:"userSpaceOnUse",children:c.jsx("g",{filter:`url(#h-${e})`,children:c.jsx("circle",{cx:"316.5",cy:"316.5",r:"316.5",fill:"#FFF",fillRule:"evenodd",clipRule:"evenodd"})})}),c.jsx("ellipse",{cx:"543.5",cy:"648.5",fill:"#015064",fillRule:"evenodd",stroke:"#00A8B8",strokeWidth:"25",clipRule:"evenodd",mask:`url(#i-${e})`,rx:"214.5",ry:"186"}),c.jsx("defs",{children:c.jsx("filter",{id:`j-${e}`,width:"454",height:"396.9",x:"-137.5",y:"486",filterUnits:"userSpaceOnUse",children:c.jsx("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"})})}),c.jsx("mask",{id:`k-${e}`,width:"454",height:"396.9",x:"-137.5",y:"486",maskUnits:"userSpaceOnUse",children:c.jsx("g",{filter:`url(#j-${e})`,children:c.jsx("circle",{cx:"316.5",cy:"316.5",r:"316.5",fill:"#FFF",fillRule:"evenodd",clipRule:"evenodd"})})}),c.jsx("ellipse",{cx:"89.5",cy:"684.5",fill:"#015064",fillRule:"evenodd",stroke:"#007782",strokeWidth:"25",clipRule:"evenodd",mask:`url(#k-${e})`,rx:"214.5",ry:"186"}),c.jsx("defs",{children:c.jsx("filter",{id:`l-${e}`,width:"454",height:"396.9",x:"316.5",y:"486",filterUnits:"userSpaceOnUse",children:c.jsx("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"})})}),c.jsx("mask",{id:`m-${e}`,width:"454",height:"396.9",x:"316.5",y:"486",maskUnits:"userSpaceOnUse",children:c.jsx("g",{filter:`url(#l-${e})`,children:c.jsx("circle",{cx:"316.5",cy:"316.5",r:"316.5",fill:"#FFF",fillRule:"evenodd",clipRule:"evenodd"})})}),c.jsx("ellipse",{cx:"543.5",cy:"684.5",fill:"#015064",fillRule:"evenodd",stroke:"#007782",strokeWidth:"25",clipRule:"evenodd",mask:`url(#m-${e})`,rx:"214.5",ry:"186"}),c.jsx("defs",{children:c.jsx("filter",{id:`n-${e}`,width:"176.9",height:"129.3",x:"272.2",y:"308",filterUnits:"userSpaceOnUse",children:c.jsx("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"})})}),c.jsx("mask",{id:`o-${e}`,width:"176.9",height:"129.3",x:"272.2",y:"308",maskUnits:"userSpaceOnUse",children:c.jsx("g",{filter:`url(#n-${e})`,children:c.jsx("circle",{cx:"316.5",cy:"316.5",r:"316.5",fill:"#FFF",fillRule:"evenodd",clipRule:"evenodd"})})}),c.jsxs("g",{mask:`url(#o-${e})`,children:[c.jsx("path",{fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"bevel",strokeWidth:"11",d:"M436 403.2l-5 28.6m-140-90.3l-10.9 62m52.8-19.4l-4.3 27.1"}),c.jsxs("linearGradient",{id:`p-${e}`,x1:"-645.656",x2:"-646.499",y1:"854.878",y2:"854.788",gradientTransform:"matrix(-184.159 -32.4722 11.4608 -64.9973 -128419.844 34938.836)",gradientUnits:"userSpaceOnUse",children:[c.jsx("stop",{offset:"0",stopColor:"#ee2700"}),c.jsx("stop",{offset:"1",stopColor:"#ff008e"})]}),c.jsx("path",{fill:`url(#p-${e})`,fillRule:"evenodd",d:"M344.1 363l97.7 17.2c5.8 2.1 8.2 6.2 7.1 12.1-1 5.9-4.7 9.2-11 9.9l-106-18.7-57.5-59.2c-3.2-4.8-2.9-9.1.8-12.8 3.7-3.7 8.3-4.4 13.7-2.1l55.2 53.6z",clipRule:"evenodd"}),c.jsx("path",{fill:"#D8D8D8",fillRule:"evenodd",stroke:"#FFF",strokeLinecap:"round",strokeLinejoin:"bevel",strokeWidth:"7",d:"M428.3 384.5l.9-6.5m-33.9 1.5l.9-6.5m-34 .5l.9-6.1m-38.9-16.1l4.2-3.9m-25.2-16.1l4.2-3.9",clipRule:"evenodd"})]}),c.jsx("defs",{children:c.jsx("filter",{id:`q-${e}`,width:"280.6",height:"317.4",x:"73.2",y:"113.9",filterUnits:"userSpaceOnUse",children:c.jsx("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"})})}),c.jsx("mask",{id:`r-${e}`,width:"280.6",height:"317.4",x:"73.2",y:"113.9",maskUnits:"userSpaceOnUse",children:c.jsx("g",{filter:`url(#q-${e})`,children:c.jsx("circle",{cx:"316.5",cy:"316.5",r:"316.5",fill:"#FFF",fillRule:"evenodd",clipRule:"evenodd"})})}),c.jsxs("g",{mask:`url(#r-${e})`,children:[c.jsxs("linearGradient",{id:`s-${e}`,x1:"-646.8",x2:"-646.8",y1:"854.844",y2:"853.844",gradientTransform:"matrix(-100.1751 48.8587 -97.9753 -200.879 19124.773 203538.61)",gradientUnits:"userSpaceOnUse",children:[c.jsx("stop",{offset:"0",stopColor:"#a17500"}),c.jsx("stop",{offset:"1",stopColor:"#5d2100"})]}),c.jsx("path",{fill:`url(#s-${e})`,fillRule:"evenodd",d:"M192.3 203c8.1 37.3 14 73.6 17.8 109.1 3.8 35.4 2.8 75.2-2.9 119.2l61.2-16.7c-15.6-59-25.2-97.9-28.6-116.6-3.4-18.7-10.8-51.8-22.2-99.6l-25.3 4.6",clipRule:"evenodd"}),c.jsxs("linearGradient",{id:`t-${e}`,x1:"-635.467",x2:"-635.467",y1:"852.115",y2:"851.115",gradientTransform:"matrix(92.6873 4.8575 2.0257 -38.6535 57323.695 36176.047)",gradientUnits:"userSpaceOnUse",children:[c.jsx("stop",{offset:"0",stopColor:"#2f8a00"}),c.jsx("stop",{offset:"1",stopColor:"#90ff57"})]}),c.jsx("path",{fill:`url(#t-${e})`,fillRule:"evenodd",stroke:"#2F8A00",strokeWidth:"13",d:"M195 183.9s-12.6-22.1-36.5-29.9c-15.9-5.2-34.4-1.5-55.5 11.1 15.9 14.3 29.5 22.6 40.7 24.9 16.8 3.6 51.3-6.1 51.3-6.1z",clipRule:"evenodd"}),c.jsxs("linearGradient",{id:`u-${e}`,x1:"-636.573",x2:"-636.573",y1:"855.444",y2:"854.444",gradientTransform:"matrix(109.9945 5.7646 6.3597 -121.3507 64719.133 107659.336)",gradientUnits:"userSpaceOnUse",children:[c.jsx("stop",{offset:"0",stopColor:"#2f8a00"}),c.jsx("stop",{offset:"1",stopColor:"#90ff57"})]}),c.jsx("path",{fill:`url(#u-${e})`,fillRule:"evenodd",stroke:"#2F8A00",strokeWidth:"13",d:"M194.9 184.5s-47.5-8.5-83.2 15.7c-23.8 16.2-34.3 49.3-31.6 99.3 30.3-27.8 52.1-48.5 65.2-61.9 19.8-20 49.6-53.1 49.6-53.1z",clipRule:"evenodd"}),c.jsxs("linearGradient",{id:`v-${e}`,x1:"-632.145",x2:"-632.145",y1:"854.174",y2:"853.174",gradientTransform:"matrix(62.9558 3.2994 3.5021 -66.8246 37035.367 59284.227)",gradientUnits:"userSpaceOnUse",children:[c.jsx("stop",{offset:"0",stopColor:"#2f8a00"}),c.jsx("stop",{offset:"1",stopColor:"#90ff57"})]}),c.jsx("path",{fill:`url(#v-${e})`,fillRule:"evenodd",stroke:"#2F8A00",strokeWidth:"13",d:"M195 183.9c-.8-21.9 6-38 20.6-48.2 14.6-10.2 29.8-15.3 45.5-15.3-6.1 21.4-14.5 35.8-25.2 43.4-10.7 7.5-24.4 14.2-40.9 20.1z",clipRule:"evenodd"}),c.jsxs("linearGradient",{id:`w-${e}`,x1:"-638.224",x2:"-638.224",y1:"853.801",y2:"852.801",gradientTransform:"matrix(152.4666 7.9904 3.0934 -59.0251 94939.86 55646.855)",gradientUnits:"userSpaceOnUse",children:[c.jsx("stop",{offset:"0",stopColor:"#2f8a00"}),c.jsx("stop",{offset:"1",stopColor:"#90ff57"})]}),c.jsx("path",{fill:`url(#w-${e})`,fillRule:"evenodd",stroke:"#2F8A00",strokeWidth:"13",d:"M194.9 184.5c31.9-30 64.1-39.7 96.7-29 32.6 10.7 50.8 30.4 54.6 59.1-35.2-5.5-60.4-9.6-75.8-12.1-15.3-2.6-40.5-8.6-75.5-18z",clipRule:"evenodd"}),c.jsxs("linearGradient",{id:`x-${e}`,x1:"-637.723",x2:"-637.723",y1:"855.103",y2:"854.103",gradientTransform:"matrix(136.467 7.1519 5.2165 -99.5377 82830.875 89859.578)",gradientUnits:"userSpaceOnUse",children:[c.jsx("stop",{offset:"0",stopColor:"#2f8a00"}),c.jsx("stop",{offset:"1",stopColor:"#90ff57"})]}),c.jsx("path",{fill:`url(#x-${e})`,fillRule:"evenodd",stroke:"#2F8A00",strokeWidth:"13",d:"M194.9 184.5c35.8-7.6 65.6-.2 89.2 22 23.6 22.2 37.7 49 42.3 80.3-39.8-9.7-68.3-23.8-85.5-42.4-17.2-18.5-32.5-38.5-46-59.9z",clipRule:"evenodd"}),c.jsxs("linearGradient",{id:`y-${e}`,x1:"-631.79",x2:"-631.79",y1:"855.872",y2:"854.872",gradientTransform:"matrix(60.8683 3.19 8.7771 -167.4773 31110.818 145537.61)",gradientUnits:"userSpaceOnUse",children:[c.jsx("stop",{offset:"0",stopColor:"#2f8a00"}),c.jsx("stop",{offset:"1",stopColor:"#90ff57"})]}),c.jsx("path",{fill:`url(#y-${e})`,fillRule:"evenodd",stroke:"#2F8A00",strokeWidth:"13",d:"M194.9 184.5c-33.6 13.8-53.6 35.7-60.1 65.6-6.5 29.9-3.6 63.1 8.7 99.6 27.4-40.3 43.2-69.6 47.4-88 4.2-18.3 5.5-44.1 4-77.2z",clipRule:"evenodd"}),c.jsx("path",{fill:"none",stroke:"#2F8A00",strokeLinecap:"round",strokeWidth:"8",d:"M196.5 182.3c-14.8 21.6-25.1 41.4-30.8 59.4-5.7 18-9.4 33-11.1 45.1"}),c.jsx("path",{fill:"none",stroke:"#2F8A00",strokeLinecap:"round",strokeWidth:"8",d:"M194.8 185.7c-24.4 1.7-43.8 9-58.1 21.8-14.3 12.8-24.7 25.4-31.3 37.8m99.1-68.9c29.7-6.7 52-8.4 67-5 15 3.4 26.9 8.7 35.8 15.9m-110.8-5.9c20.3 9.9 38.2 20.5 53.9 31.9 15.7 11.4 27.4 22.1 35.1 32"})]}),c.jsx("defs",{children:c.jsx("filter",{id:`z-${e}`,width:"532",height:"633",x:"50.5",y:"399",filterUnits:"userSpaceOnUse",children:c.jsx("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"})})}),c.jsx("mask",{id:`A-${e}`,width:"532",height:"633",x:"50.5",y:"399",maskUnits:"userSpaceOnUse",children:c.jsx("g",{filter:`url(#z-${e})`,children:c.jsx("circle",{cx:"316.5",cy:"316.5",r:"316.5",fill:"#FFF",fillRule:"evenodd",clipRule:"evenodd"})})}),c.jsxs("linearGradient",{id:`B-${e}`,x1:"-641.104",x2:"-641.278",y1:"856.577",y2:"856.183",gradientTransform:"matrix(532 0 0 -633 341484.5 542657)",gradientUnits:"userSpaceOnUse",children:[c.jsx("stop",{offset:"0",stopColor:"#fff400"}),c.jsx("stop",{offset:"1",stopColor:"#3c8700"})]}),c.jsx("ellipse",{cx:"316.5",cy:"715.5",fill:`url(#B-${e})`,fillRule:"evenodd",clipRule:"evenodd",mask:`url(#A-${e})`,rx:"266",ry:"316.5"}),c.jsx("defs",{children:c.jsx("filter",{id:`C-${e}`,width:"288",height:"283",x:"391",y:"-24",filterUnits:"userSpaceOnUse",children:c.jsx("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"})})}),c.jsx("mask",{id:`D-${e}`,width:"288",height:"283",x:"391",y:"-24",maskUnits:"userSpaceOnUse",children:c.jsx("g",{filter:`url(#C-${e})`,children:c.jsx("circle",{cx:"316.5",cy:"316.5",r:"316.5",fill:"#FFF",fillRule:"evenodd",clipRule:"evenodd"})})}),c.jsx("g",{mask:`url(#D-${e})`,children:c.jsxs("g",{transform:"translate(397 -24)",children:[c.jsxs("linearGradient",{id:`E-${e}`,x1:"-1036.672",x2:"-1036.672",y1:"880.018",y2:"879.018",gradientTransform:"matrix(227 0 0 -227 235493 199764)",gradientUnits:"userSpaceOnUse",children:[c.jsx("stop",{offset:"0",stopColor:"#ffdf00"}),c.jsx("stop",{offset:"1",stopColor:"#ff9d00"})]}),c.jsx("circle",{cx:"168.5",cy:"113.5",r:"113.5",fill:`url(#E-${e})`,fillRule:"evenodd",clipRule:"evenodd"}),c.jsxs("linearGradient",{id:`F-${e}`,x1:"-1017.329",x2:"-1018.602",y1:"658.003",y2:"657.998",gradientTransform:"matrix(30 0 0 -1 30558 771)",gradientUnits:"userSpaceOnUse",children:[c.jsx("stop",{offset:"0",stopColor:"#ffa400"}),c.jsx("stop",{offset:"1",stopColor:"#ff5e00"})]}),c.jsx("path",{fill:"none",stroke:`url(#F-${e})`,strokeLinecap:"round",strokeLinejoin:"bevel",strokeWidth:"12",d:"M30 113H0"}),c.jsxs("linearGradient",{id:`G-${e}`,x1:"-1014.501",x2:"-1015.774",y1:"839.985",y2:"839.935",gradientTransform:"matrix(26.5 0 0 -5.5 26925 4696.5)",gradientUnits:"userSpaceOnUse",children:[c.jsx("stop",{offset:"0",stopColor:"#ffa400"}),c.jsx("stop",{offset:"1",stopColor:"#ff5e00"})]}),c.jsx("path",{fill:"none",stroke:`url(#G-${e})`,strokeLinecap:"round",strokeLinejoin:"bevel",strokeWidth:"12",d:"M33.5 79.5L7 74"}),c.jsxs("linearGradient",{id:`H-${e}`,x1:"-1016.59",x2:"-1017.862",y1:"852.671",y2:"852.595",gradientTransform:"matrix(29 0 0 -8 29523 6971)",gradientUnits:"userSpaceOnUse",children:[c.jsx("stop",{offset:"0",stopColor:"#ffa400"}),c.jsx("stop",{offset:"1",stopColor:"#ff5e00"})]}),c.jsx("path",{fill:"none",stroke:`url(#H-${e})`,strokeLinecap:"round",strokeLinejoin:"bevel",strokeWidth:"12",d:"M34 146l-29 8"}),c.jsxs("linearGradient",{id:`I-${e}`,x1:"-1011.984",x2:"-1013.257",y1:"863.523",y2:"863.229",gradientTransform:"matrix(24 0 0 -13 24339 11407)",gradientUnits:"userSpaceOnUse",children:[c.jsx("stop",{offset:"0",stopColor:"#ffa400"}),c.jsx("stop",{offset:"1",stopColor:"#ff5e00"})]}),c.jsx("path",{fill:"none",stroke:`url(#I-${e})`,strokeLinecap:"round",strokeLinejoin:"bevel",strokeWidth:"12",d:"M45 177l-24 13"}),c.jsxs("linearGradient",{id:`J-${e}`,x1:"-1006.673",x2:"-1007.946",y1:"869.279",y2:"868.376",gradientTransform:"matrix(20 0 0 -19 20205 16720)",gradientUnits:"userSpaceOnUse",children:[c.jsx("stop",{offset:"0",stopColor:"#ffa400"}),c.jsx("stop",{offset:"1",stopColor:"#ff5e00"})]}),c.jsx("path",{fill:"none",stroke:`url(#J-${e})`,strokeLinecap:"round",strokeLinejoin:"bevel",strokeWidth:"12",d:"M67 204l-20 19"}),c.jsxs("linearGradient",{id:`K-${e}`,x1:"-992.85",x2:"-993.317",y1:"871.258",y2:"870.258",gradientTransform:"matrix(13.8339 0 0 -22.8467 13825.796 20131.938)",gradientUnits:"userSpaceOnUse",children:[c.jsx("stop",{offset:"0",stopColor:"#ffa400"}),c.jsx("stop",{offset:"1",stopColor:"#ff5e00"})]}),c.jsx("path",{fill:"none",stroke:`url(#K-${e})`,strokeLinecap:"round",strokeLinejoin:"bevel",strokeWidth:"12",d:"M94.4 227l-13.8 22.8"}),c.jsxs("linearGradient",{id:`L-${e}`,x1:"-953.835",x2:"-953.965",y1:"871.9",y2:"870.9",gradientTransform:"matrix(7.5 0 0 -24.5 7278 21605)",gradientUnits:"userSpaceOnUse",children:[c.jsx("stop",{offset:"0",stopColor:"#ffa400"}),c.jsx("stop",{offset:"1",stopColor:"#ff5e00"})]}),c.jsx("path",{fill:"none",stroke:`url(#L-${e})`,strokeLinecap:"round",strokeLinejoin:"bevel",strokeWidth:"12",d:"M127.5 243.5L120 268"}),c.jsxs("linearGradient",{id:`M-${e}`,x1:"244.504",x2:"244.496",y1:"871.898",y2:"870.898",gradientTransform:"matrix(.5 0 0 -24.5 45.5 21614)",gradientUnits:"userSpaceOnUse",children:[c.jsx("stop",{offset:"0",stopColor:"#ffa400"}),c.jsx("stop",{offset:"1",stopColor:"#ff5e00"})]}),c.jsx("path",{fill:"none",stroke:`url(#M-${e})`,strokeLinecap:"round",strokeLinejoin:"bevel",strokeWidth:"12",d:"M167.5 252.5l.5 24.5"})]})})]})})}function ek(e){const{className:n,...t}=e,r=di();return c.jsxs("button",{...t,className:je(r.logo,n),children:[c.jsx("div",{className:r.tanstackLogo,children:"TANSTACK"}),c.jsx("div",{className:r.routerLogo,children:"React Router v1"})]})}function nk(e){const{shadowDOMTarget:n}=e;return c.jsx(Gs.Provider,{value:n,children:c.jsx(tk,{...e})})}function tk({initialIsOpen:e,panelProps:n={},closeButtonProps:t={},toggleButtonProps:r={},position:i="bottom-left",containerElement:s="footer",router:l,shadowDOMTarget:a}){const[o,u]=W.useState(),d=W.useRef(null),[f,h]=Cs("tanstackRouterDevtoolsOpen",e),[g,v]=Cs("tanstackRouterDevtoolsHeight",null),[y,x]=vd(!1),[p,m]=vd(!1),k=gh(),j=di(),w=(N,V)=>{if(V.button!==0)return;m(!0);const E={originalHeight:(N==null?void 0:N.getBoundingClientRect().height)??0,pageY:V.pageY},_=D=>{const O=E.pageY-D.pageY,Pe=E.originalHeight+O;v(Pe),Pe<70?h(!1):h(!0)},R=()=>{m(!1),document.removeEventListener("mousemove",_),document.removeEventListener("mouseUp",R)};document.addEventListener("mousemove",_),document.addEventListener("mouseup",R)},C=f??!1;W.useEffect(()=>{x(f??!1)},[f,y,x]),W.useEffect(()=>{var N;if(y){const V=(N=o==null?void 0:o.parentElement)==null?void 0:N.style.paddingBottom,E=()=>{var _;const R=(_=d.current)==null?void 0:_.getBoundingClientRect().height;o!=null&&o.parentElement&&(o.parentElement.style.paddingBottom=`${R}px`)};if(E(),typeof window<"u")return window.addEventListener("resize",E),()=>{window.removeEventListener("resize",E),o!=null&&o.parentElement&&typeof V=="string"&&(o.parentElement.style.paddingBottom=V)}}},[y,o==null?void 0:o.parentElement]),W.useEffect(()=>{if(o){const N=o,V=getComputedStyle(N).fontSize;N.style.setProperty("--tsrd-font-size",V)}},[o]);const{style:z={},...S}=n,{style:L={},onClick:$,...q}=t,{onClick:T,className:ne,...le}=r;if(!k())return null;const A=g??500;return c.jsxs(s,{ref:u,className:"TanStackRouterDevtools",children:[c.jsx(Uo.Provider,{value:{onCloseClick:$??(()=>{})},children:c.jsx(yh,{ref:d,...S,router:l,className:je(j.devtoolsPanelContainer,j.devtoolsPanelContainerVisibility(!!f),j.devtoolsPanelContainerResizing(p),j.devtoolsPanelContainerAnimation(y,A+16)),style:{height:A,...z},isOpen:y,setIsOpen:h,handleDragStart:N=>w(d.current,N),shadowDOMTarget:a})}),c.jsxs("button",{type:"button",...le,"aria-label":"Open TanStack Router Devtools",onClick:N=>{h(!0),T&&T(N)},className:je(j.mainCloseBtn,j.mainCloseBtnPosition(i),j.mainCloseBtnAnimation(!C),ne),children:[c.jsxs("div",{className:j.mainCloseBtnIconContainer,children:[c.jsx("div",{className:j.mainCloseBtnIconOuter,children:c.jsx(jd,{})}),c.jsx("div",{className:j.mainCloseBtnIconInner,children:c.jsx(jd,{})})]}),c.jsx("div",{className:j.mainCloseBtnDivider,children:"-"}),c.jsx("div",{className:j.routerLogoCloseButton,children:"TanStack Router"})]})]})}W.forwardRef(function(n,t){const{shadowDOMTarget:r}=n;return c.jsx(Gs.Provider,{value:r,children:c.jsx(Uo.Provider,{value:{onCloseClick:()=>{}},children:c.jsx(yh,{ref:t,...n})})})});function vh({router:e,route:n,isRoot:t,activeId:r,setActiveId:i}){var s;const l=_e({router:e}),a=di(),o=l.pendingMatches||l.matches,u=l.matches.find(f=>f.routeId===n.id),d=W.useMemo(()=>{try{if(u!=null&&u.params){const f=u.params,h=n.path||Na(n.id);if(h.startsWith("$")){const g=h.slice(1);if(f[g])return`(${f[g]})`}}return""}catch{return""}},[u,n]);return c.jsxs("div",{children:[c.jsxs("div",{role:"button","aria-label":`Open match details for ${n.id}`,onClick:()=>{u&&i(r===n.id?"":n.id)},className:je(a.routesRowContainer(n.id===r,!!u)),children:[c.jsx("div",{className:je(a.matchIndicator(W0(o,n)))}),c.jsxs("div",{className:je(a.routesRow(!!u)),children:[c.jsxs("div",{children:[c.jsxs("code",{className:a.code,children:[t?Ee:n.path||Na(n.id)," "]}),c.jsx("code",{className:a.routeParamInfo,children:d})]}),c.jsx(Ma,{match:u,router:e})]})]}),(s=n.children)!=null&&s.length?c.jsx("div",{className:a.nestedRouteRow(!!t),children:[...n.children].sort((f,h)=>f.rank-h.rank).map(f=>c.jsx(vh,{router:e,route:f,activeId:r,setActiveId:i},f.id))}):null]})}const yh=W.forwardRef(function(n,t){var r;const{isOpen:i=!0,setIsOpen:s,handleDragStart:l,router:a,shadowDOMTarget:o,...u}=n,{onCloseClick:d}=J0(),f=di(),{className:h,...g}=u,v=Fn({warn:!1}),y=a??v,x=_e({router:y});Le(y);const[p,m]=Cs("tanstackRouterDevtoolsShowMatches",!0),[k,j]=Cs("tanstackRouterDevtoolsActiveRouteId",""),w=W.useMemo(()=>[...x.pendingMatches??[],...x.matches,...x.cachedMatches].find(L=>L.routeId===k||L.id===k),[k,x.cachedMatches,x.matches,x.pendingMatches]),C=Object.keys(x.location.search).length,z={...y,state:y.state};return c.jsxs("div",{ref:t,className:je(f.devtoolsPanel,"TanStackRouterDevtoolsPanel",h),...g,children:[l?c.jsx("div",{className:f.dragHandle,onMouseDown:l}):null,c.jsx("button",{className:f.panelCloseBtn,onClick:S=>{s(!1),d(S)},children:c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"6",fill:"none",viewBox:"0 0 10 6",className:f.panelCloseBtnIcon,children:c.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.667",d:"M1 1l4 4 4-4"})})}),c.jsxs("div",{className:f.firstContainer,children:[c.jsx("div",{className:f.row,children:c.jsx(ek,{"aria-hidden":!0,onClick:S=>{s(!1),d(S)}})}),c.jsx("div",{className:f.routerExplorerContainer,children:c.jsx("div",{className:f.routerExplorer,children:c.jsx(Ot,{label:"Router",value:Object.fromEntries(G0(Object.keys(z),["state","routesById","routesByPath","flatRoutes","options","manifest"].map(S=>L=>L!==S)).map(S=>[S,z[S]]).filter(S=>typeof S[1]!="function"&&!["__store","basepath","injectedHtml","subscribers","latestLoadPromise","navigateTimeout","resetNextScroll","tempLocationKey","latestLocation","routeTree","history"].includes(S[0]))),defaultExpanded:{state:{},context:{},options:{}},filterSubEntries:S=>S.filter(L=>typeof L.value!="function")})})})]}),c.jsxs("div",{className:f.secondContainer,children:[c.jsxs("div",{className:f.matchesContainer,children:[c.jsxs("div",{className:f.detailsHeader,children:[c.jsx("span",{children:"Pathname"}),x.location.maskedLocation?c.jsx("div",{className:f.maskedBadgeContainer,children:c.jsx("span",{className:f.maskedBadge,children:"masked"})}):null]}),c.jsxs("div",{className:f.detailsContent,children:[c.jsx("code",{children:x.location.pathname}),x.location.maskedLocation?c.jsx("code",{className:f.maskedLocation,children:x.location.maskedLocation.pathname}):null]}),c.jsxs("div",{className:f.detailsHeader,children:[c.jsxs("div",{className:f.routeMatchesToggle,children:[c.jsx("button",{type:"button",onClick:()=>{m(!1)},disabled:!p,className:je(f.routeMatchesToggleBtn(!p,!0)),children:"Routes"}),c.jsx("button",{type:"button",onClick:()=>{m(!0)},disabled:p,className:je(f.routeMatchesToggleBtn(!!p,!1)),children:"Matches"})]}),c.jsx("div",{className:f.detailsHeaderInfo,children:c.jsx("div",{children:"age / staleTime / gcTime"})})]}),c.jsx("div",{className:je(f.routesContainer),children:p?c.jsx("div",{children:(x.pendingMatches||x.matches).map((S,L)=>c.jsxs("div",{role:"button","aria-label":`Open match details for ${S.id}`,onClick:()=>j(k===S.id?"":S.id),className:je(f.matchRow(S===w)),children:[c.jsx("div",{className:je(f.matchIndicator(Ta(S)))}),c.jsx("code",{className:f.matchID,children:`${S.routeId===Ee?Ee:S.pathname}`}),c.jsx(Ma,{match:S,router:y})]},S.id||L))}):c.jsx(vh,{router:y,route:y.routeTree,isRoot:!0,activeId:k,setActiveId:j})})]}),x.cachedMatches.length?c.jsxs("div",{className:f.cachedMatchesContainer,children:[c.jsxs("div",{className:f.detailsHeader,children:[c.jsx("div",{children:"Cached Matches"}),c.jsx("div",{className:f.detailsHeaderInfo,children:"age / staleTime / gcTime"})]}),c.jsx("div",{children:x.cachedMatches.map(S=>c.jsxs("div",{role:"button","aria-label":`Open match details for ${S.id}`,onClick:()=>j(k===S.id?"":S.id),className:je(f.matchRow(S===w)),children:[c.jsx("div",{className:je(f.matchIndicator(Ta(S)))}),c.jsx("code",{className:f.matchID,children:`${S.id}`}),c.jsx(Ma,{match:S,router:y})]},S.id))})]}):null]}),w?c.jsxs("div",{className:f.thirdContainer,children:[c.jsx("div",{className:f.detailsHeader,children:"Match Details"}),c.jsx("div",{children:c.jsxs("div",{className:f.matchDetails,children:[c.jsx("div",{className:f.matchStatus(w.status,w.isFetching),children:c.jsx("div",{children:w.status==="success"&&w.isFetching?"fetching":w.status})}),c.jsxs("div",{className:f.matchDetailsInfoLabel,children:[c.jsx("div",{children:"ID:"}),c.jsx("div",{className:f.matchDetailsInfo,children:c.jsx("code",{children:w.id})})]}),c.jsxs("div",{className:f.matchDetailsInfoLabel,children:[c.jsx("div",{children:"State:"}),c.jsx("div",{className:f.matchDetailsInfo,children:(r=x.pendingMatches)!=null&&r.find(S=>S.id===w.id)?"Pending":x.matches.find(S=>S.id===w.id)?"Active":"Cached"})]}),c.jsxs("div",{className:f.matchDetailsInfoLabel,children:[c.jsx("div",{children:"Last Updated:"}),c.jsx("div",{className:f.matchDetailsInfo,children:w.updatedAt?new Date(w.updatedAt).toLocaleTimeString():"N/A"})]})]})}),w.loaderData?c.jsxs(c.Fragment,{children:[c.jsx("div",{className:f.detailsHeader,children:"Loader Data"}),c.jsx("div",{className:f.detailsContent,children:c.jsx(Ot,{label:"loaderData",value:w.loaderData,defaultExpanded:{}})})]}):null,c.jsx("div",{className:f.detailsHeader,children:"Explorer"}),c.jsx("div",{className:f.detailsContent,children:c.jsx(Ot,{label:"Match",value:w,defaultExpanded:{}})})]}):null,C?c.jsxs("div",{className:f.fourthContainer,children:[c.jsx("div",{className:f.detailsHeader,children:"Search Params"}),c.jsx("div",{className:f.detailsContent,children:c.jsx(Ot,{value:x.location.search,defaultExpanded:Object.keys(x.location.search).reduce((S,L)=>(S[L]={},S),{})})})]}):null]})});function Ma({match:e,router:n}){const t=di(),r=W.useReducer(()=>({}),()=>({}))[1];if(W.useEffect(()=>{const o=setInterval(()=>{r()},1e3);return()=>{clearInterval(o)}},[r]),!e)return null;const i=n.looseRoutesById[e.routeId];if(!i.options.loader)return null;const s=Date.now()-e.updatedAt,l=i.options.staleTime??n.options.defaultStaleTime??0,a=i.options.gcTime??n.options.defaultGcTime??30*60*1e3;return c.jsxs("div",{className:je(t.ageTicker(s>l)),children:[c.jsx("div",{children:Nl(s)}),c.jsx("div",{children:"/"}),c.jsx("div",{children:Nl(l)}),c.jsx("div",{children:"/"}),c.jsx("div",{children:Nl(a)})]})}function Nl(e){const n=["s","min","h","d"],t=[e/1e3,e/6e4,e/36e5,e/864e5];let r=0;for(let s=1;s<t.length&&!(t[s]<1);s++)r=s;return new Intl.NumberFormat(navigator.language,{compactDisplay:"short",notation:"compact",maximumFractionDigits:0}).format(t[r])+n[r]}const rk=e=>{const{colors:n,font:t,size:r,alpha:i,shadow:s,border:l}=G,{fontFamily:a,lineHeight:o,size:u}=t,d=e?rr.bind({target:e}):rr;return{devtoolsPanelContainer:d`
      direction: ltr;
      position: fixed;
      bottom: 0;
      right: 0;
      z-index: 99999;
      width: 100%;
      max-height: 90%;
      border-top: 1px solid ${n.gray[700]};
      transform-origin: top;
    `,devtoolsPanelContainerVisibility:f=>d`
        visibility: ${f?"visible":"hidden"};
      `,devtoolsPanelContainerResizing:f=>f?d`
          transition: none;
        `:d`
        transition: all 0.4s ease;
      `,devtoolsPanelContainerAnimation:(f,h)=>f?d`
          pointer-events: auto;
          transform: translateY(0);
        `:d`
        pointer-events: none;
        transform: translateY(${h}px);
      `,logo:d`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      font-family: ${a.sans};
      gap: ${G.size[.5]};
      padding: 0px;
      &:hover {
        opacity: 0.7;
      }
      &:focus-visible {
        outline-offset: 4px;
        border-radius: ${l.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,tanstackLogo:d`
      font-size: ${t.size.md};
      font-weight: ${t.weight.bold};
      line-height: ${t.lineHeight.xs};
      white-space: nowrap;
      color: ${n.gray[300]};
    `,routerLogo:d`
      font-weight: ${t.weight.semibold};
      font-size: ${t.size.xs};
      background: linear-gradient(to right, #84cc16, #10b981);
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,devtoolsPanel:d`
      display: flex;
      font-size: ${u.sm};
      font-family: ${a.sans};
      background-color: ${n.darkGray[700]};
      color: ${n.gray[300]};

      @media (max-width: 700px) {
        flex-direction: column;
      }
      @media (max-width: 600px) {
        font-size: ${u.xs};
      }
    `,dragHandle:d`
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 4px;
      cursor: row-resize;
      z-index: 100000;
      &:hover {
        background-color: ${n.purple[400]}${i[90]};
      }
    `,firstContainer:d`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      border-right: 1px solid ${n.gray[700]};
      display: flex;
      flex-direction: column;
    `,routerExplorerContainer:d`
      overflow-y: auto;
      flex: 1;
    `,routerExplorer:d`
      padding: ${G.size[2]};
    `,row:d`
      display: flex;
      align-items: center;
      padding: ${G.size[2]} ${G.size[2.5]};
      gap: ${G.size[2.5]};
      border-bottom: ${n.darkGray[500]} 1px solid;
      align-items: center;
    `,detailsHeader:d`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      position: sticky;
      top: 0;
      z-index: 2;
      background-color: ${n.darkGray[600]};
      padding: 0px ${G.size[2]};
      font-weight: ${t.weight.medium};
      font-size: ${t.size.xs};
      min-height: ${G.size[8]};
      line-height: ${t.lineHeight.xs};
      text-align: left;
      display: flex;
      align-items: center;
    `,maskedBadge:d`
      background: ${n.yellow[900]}${i[70]};
      color: ${n.yellow[300]};
      display: inline-block;
      padding: ${G.size[0]} ${G.size[2.5]};
      border-radius: ${l.radius.full};
      font-size: ${t.size.xs};
      font-weight: ${t.weight.normal};
      border: 1px solid ${n.yellow[300]};
    `,maskedLocation:d`
      color: ${n.yellow[300]};
    `,detailsContent:d`
      padding: ${G.size[1.5]} ${G.size[2]};
      display: flex;
      align-items: center;
      font-size: ${t.size.xs};
    `,routeMatchesToggle:d`
      display: flex;
      align-items: center;
      border: 1px solid ${n.gray[500]};
      border-radius: ${l.radius.sm};
      overflow: hidden;
    `,routeMatchesToggleBtn:(f,h)=>{const v=[d`
        appearance: none;
        border: none;
        font-size: 12px;
        padding: 4px 8px;
        background: transparent;
        cursor: pointer;
        font-family: ${a.sans};
        font-weight: ${t.weight.medium};
      `];if(f){const y=d`
          background: ${n.darkGray[400]};
          color: ${n.gray[300]};
        `;v.push(y)}else{const y=d`
          color: ${n.gray[500]};
          background: ${n.darkGray[800]}${i[20]};
        `;v.push(y)}return h&&v.push(d`
          border-right: 1px solid ${G.colors.gray[500]};
        `),v},detailsHeaderInfo:d`
      flex: 1;
      justify-content: flex-end;
      display: flex;
      align-items: center;
      font-weight: ${t.weight.normal};
      color: ${n.gray[400]};
    `,matchRow:f=>{const g=[d`
        display: flex;
        border-bottom: 1px solid ${n.darkGray[400]};
        cursor: pointer;
        align-items: center;
        padding: ${r[1]} ${r[2]};
        gap: ${r[2]};
        font-size: ${u.xs};
        color: ${n.gray[300]};
      `];if(f){const v=d`
          background: ${n.darkGray[500]};
        `;g.push(v)}return g},matchIndicator:f=>{const g=[d`
        flex: 0 0 auto;
        width: ${r[3]};
        height: ${r[3]};
        background: ${n[f][900]};
        border: 1px solid ${n[f][500]};
        border-radius: ${l.radius.full};
        transition: all 0.25s ease-out;
        box-sizing: border-box;
      `];if(f==="gray"){const v=d`
          background: ${n.gray[700]};
          border-color: ${n.gray[400]};
        `;g.push(v)}return g},matchID:d`
      flex: 1;
      line-height: ${o.xs};
    `,ageTicker:f=>{const g=[d`
        display: flex;
        gap: ${r[1]};
        font-size: ${u.xs};
        color: ${n.gray[400]};
        font-variant-numeric: tabular-nums;
        line-height: ${o.xs};
      `];if(f){const v=d`
          color: ${n.yellow[400]};
        `;g.push(v)}return g},secondContainer:d`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      border-right: 1px solid ${n.gray[700]};
      display: flex;
      flex-direction: column;
    `,thirdContainer:d`
      flex: 1 1 500px;
      overflow: auto;
      display: flex;
      flex-direction: column;
      height: 100%;
      border-right: 1px solid ${n.gray[700]};

      @media (max-width: 700px) {
        border-top: 2px solid ${n.gray[700]};
      }
    `,fourthContainer:d`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      display: flex;
      flex-direction: column;
    `,routesContainer:d`
      overflow-x: auto;
      overflow-y: visible;
    `,routesRowContainer:(f,h)=>{const v=[d`
        display: flex;
        border-bottom: 1px solid ${n.darkGray[400]};
        align-items: center;
        padding: ${r[1]} ${r[2]};
        gap: ${r[2]};
        font-size: ${u.xs};
        color: ${n.gray[300]};
        cursor: ${h?"pointer":"default"};
        line-height: ${o.xs};
      `];if(f){const y=d`
          background: ${n.darkGray[500]};
        `;v.push(y)}return v},routesRow:f=>{const g=[d`
        flex: 1 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: ${u.xs};
        line-height: ${o.xs};
      `];if(!f){const v=d`
          color: ${n.gray[400]};
        `;g.push(v)}return g},routeParamInfo:d`
      color: ${n.gray[400]};
      font-size: ${u.xs};
      line-height: ${o.xs};
    `,nestedRouteRow:f=>d`
        margin-left: ${f?0:r[3.5]};
        border-left: ${f?"":`solid 1px ${n.gray[700]}`};
      `,code:d`
      font-size: ${u.xs};
      line-height: ${o.xs};
    `,matchesContainer:d`
      flex: 1 1 auto;
      overflow-y: auto;
    `,cachedMatchesContainer:d`
      flex: 1 1 auto;
      overflow-y: auto;
      max-height: 50%;
    `,maskedBadgeContainer:d`
      flex: 1;
      justify-content: flex-end;
      display: flex;
    `,matchDetails:d`
      display: flex;
      flex-direction: column;
      padding: ${G.size[2]};
      font-size: ${G.font.size.xs};
      color: ${G.colors.gray[300]};
      line-height: ${G.font.lineHeight.sm};
    `,matchStatus:(f,h)=>{const v=h&&f==="success"?h==="beforeLoad"?"purple":"blue":{pending:"yellow",success:"green",error:"red",notFound:"purple",redirected:"gray"}[f];return d`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        border-radius: ${G.border.radius.sm};
        font-weight: ${G.font.weight.normal};
        background-color: ${G.colors[v][900]}${G.alpha[90]};
        color: ${G.colors[v][300]};
        border: 1px solid ${G.colors[v][600]};
        margin-bottom: ${G.size[2]};
        transition: all 0.25s ease-out;
      `},matchDetailsInfo:d`
      display: flex;
      justify-content: flex-end;
      flex: 1;
    `,matchDetailsInfoLabel:d`
      display: flex;
    `,mainCloseBtn:d`
      background: ${n.darkGray[700]};
      padding: ${r[1]} ${r[2]} ${r[1]} ${r[1.5]};
      border-radius: ${l.radius.md};
      position: fixed;
      z-index: 99999;
      display: inline-flex;
      width: fit-content;
      cursor: pointer;
      appearance: none;
      border: 0;
      gap: 8px;
      align-items: center;
      border: 1px solid ${n.gray[500]};
      font-size: ${t.size.xs};
      cursor: pointer;
      transition: all 0.25s ease-out;

      &:hover {
        background: ${n.darkGray[500]};
      }
    `,mainCloseBtnPosition:f=>d`
        ${f==="top-left"?`top: ${r[2]}; left: ${r[2]};`:""}
        ${f==="top-right"?`top: ${r[2]}; right: ${r[2]};`:""}
        ${f==="bottom-left"?`bottom: ${r[2]}; left: ${r[2]};`:""}
        ${f==="bottom-right"?`bottom: ${r[2]}; right: ${r[2]};`:""}
      `,mainCloseBtnAnimation:f=>f?d`
          opacity: 1;
          pointer-events: auto;
          visibility: visible;
        `:d`
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
      `,routerLogoCloseButton:d`
      font-weight: ${t.weight.semibold};
      font-size: ${t.size.xs};
      background: linear-gradient(to right, #98f30c, #00f4a3);
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,mainCloseBtnDivider:d`
      width: 1px;
      background: ${G.colors.gray[600]};
      height: 100%;
      border-radius: 999999px;
      color: transparent;
    `,mainCloseBtnIconContainer:d`
      position: relative;
      width: ${r[5]};
      height: ${r[5]};
      background: pink;
      border-radius: 999999px;
      overflow: hidden;
    `,mainCloseBtnIconOuter:d`
      width: ${r[5]};
      height: ${r[5]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      filter: blur(3px) saturate(1.8) contrast(2);
    `,mainCloseBtnIconInner:d`
      width: ${r[4]};
      height: ${r[4]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `,panelCloseBtn:d`
      position: absolute;
      cursor: pointer;
      z-index: 100001;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      background-color: ${n.darkGray[700]};
      &:hover {
        background-color: ${n.darkGray[500]};
      }

      top: 0;
      right: ${r[2]};
      transform: translate(0, -100%);
      border-right: ${n.darkGray[300]} 1px solid;
      border-left: ${n.darkGray[300]} 1px solid;
      border-top: ${n.darkGray[300]} 1px solid;
      border-bottom: none;
      border-radius: ${l.radius.sm} ${l.radius.sm} 0px 0px;
      padding: ${r[1]} ${r[1.5]} ${r[.5]} ${r[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        top: 100%;
        left: -${r[2.5]};
        height: ${r[1.5]};
        width: calc(100% + ${r[5]});
      }
    `,panelCloseBtnIcon:d`
      color: ${n.gray[400]};
      width: ${r[2]};
      height: ${r[2]};
    `}};let Li=null;function di(){const e=W.useContext(Gs);return Li||(Li=rk(e),Li)}var Ie=function(){return Ie=Object.assign||function(n){for(var t,r=1,i=arguments.length;r<i;r++){t=arguments[r];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},Ie.apply(this,arguments)};function ri(e,n,t){if(t||arguments.length===2)for(var r=0,i=n.length,s;r<i;r++)(s||!(r in n))&&(s||(s=Array.prototype.slice.call(n,0,r)),s[r]=n[r]);return e.concat(s||Array.prototype.slice.call(n))}var Y="-ms-",Or="-moz-",H="-webkit-",jh="comm",Js="rule",qo="decl",ik="@import",xh="@keyframes",sk="@layer",wh=Math.abs,Ho=String.fromCharCode,Da=Object.assign;function lk(e,n){return ge(e,0)^45?(((n<<2^ge(e,0))<<2^ge(e,1))<<2^ge(e,2))<<2^ge(e,3):0}function Sh(e){return e.trim()}function Sn(e,n){return(e=n.exec(e))?e[0]:e}function M(e,n,t){return e.replace(n,t)}function Gi(e,n,t){return e.indexOf(n,t)}function ge(e,n){return e.charCodeAt(n)|0}function ir(e,n,t){return e.slice(n,t)}function kn(e){return e.length}function zh(e){return e.length}function Er(e,n){return n.push(e),e}function ak(e,n){return e.map(n).join("")}function xd(e,n){return e.filter(function(t){return!Sn(t,n)})}var Qs=1,sr=1,Ch=0,tn=0,ce=0,fr="";function Zs(e,n,t,r,i,s,l,a){return{value:e,root:n,parent:t,type:r,props:i,children:s,line:Qs,column:sr,length:l,return:"",siblings:a}}function Mn(e,n){return Da(Zs("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},n)}function Ct(e){for(;e.root;)e=Mn(e.root,{children:[e]});Er(e,e.siblings)}function ok(){return ce}function uk(){return ce=tn>0?ge(fr,--tn):0,sr--,ce===10&&(sr=1,Qs--),ce}function dn(){return ce=tn<Ch?ge(fr,tn++):0,sr++,ce===10&&(sr=1,Qs++),ce}function mt(){return ge(fr,tn)}function Ji(){return tn}function Ys(e,n){return ir(fr,e,n)}function Ia(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function dk(e){return Qs=sr=1,Ch=kn(fr=e),tn=0,[]}function ck(e){return fr="",e}function Tl(e){return Sh(Ys(tn-1,Oa(e===91?e+2:e===40?e+1:e)))}function fk(e){for(;(ce=mt())&&ce<33;)dn();return Ia(e)>2||Ia(ce)>3?"":" "}function hk(e,n){for(;--n&&dn()&&!(ce<48||ce>102||ce>57&&ce<65||ce>70&&ce<97););return Ys(e,Ji()+(n<6&&mt()==32&&dn()==32))}function Oa(e){for(;dn();)switch(ce){case e:return tn;case 34:case 39:e!==34&&e!==39&&Oa(ce);break;case 40:e===41&&Oa(e);break;case 92:dn();break}return tn}function pk(e,n){for(;dn()&&e+ce!==57;)if(e+ce===84&&mt()===47)break;return"/*"+Ys(n,tn-1)+"*"+Ho(e===47?e:dn())}function mk(e){for(;!Ia(mt());)dn();return Ys(e,tn)}function gk(e){return ck(Qi("",null,null,null,[""],e=dk(e),0,[0],e))}function Qi(e,n,t,r,i,s,l,a,o){for(var u=0,d=0,f=l,h=0,g=0,v=0,y=1,x=1,p=1,m=0,k="",j=i,w=s,C=r,z=k;x;)switch(v=m,m=dn()){case 40:if(v!=108&&ge(z,f-1)==58){Gi(z+=M(Tl(m),"&","&\f"),"&\f",wh(u?a[u-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:z+=Tl(m);break;case 9:case 10:case 13:case 32:z+=fk(v);break;case 92:z+=hk(Ji()-1,7);continue;case 47:switch(mt()){case 42:case 47:Er(kk(pk(dn(),Ji()),n,t,o),o);break;default:z+="/"}break;case 123*y:a[u++]=kn(z)*p;case 125*y:case 59:case 0:switch(m){case 0:case 125:x=0;case 59+d:p==-1&&(z=M(z,/\f/g,"")),g>0&&kn(z)-f&&Er(g>32?Sd(z+";",r,t,f-1,o):Sd(M(z," ","")+";",r,t,f-2,o),o);break;case 59:z+=";";default:if(Er(C=wd(z,n,t,u,d,i,a,k,j=[],w=[],f,s),s),m===123)if(d===0)Qi(z,n,C,C,j,s,f,a,w);else switch(h===99&&ge(z,3)===110?100:h){case 100:case 108:case 109:case 115:Qi(e,C,C,r&&Er(wd(e,C,C,0,0,i,a,k,i,j=[],f,w),w),i,w,f,a,r?j:w);break;default:Qi(z,C,C,C,[""],w,0,a,w)}}u=d=g=0,y=p=1,k=z="",f=l;break;case 58:f=1+kn(z),g=v;default:if(y<1){if(m==123)--y;else if(m==125&&y++==0&&uk()==125)continue}switch(z+=Ho(m),m*y){case 38:p=d>0?1:(z+="\f",-1);break;case 44:a[u++]=(kn(z)-1)*p,p=1;break;case 64:mt()===45&&(z+=Tl(dn())),h=mt(),d=f=kn(k=z+=mk(Ji())),m++;break;case 45:v===45&&kn(z)==2&&(y=0)}}return s}function wd(e,n,t,r,i,s,l,a,o,u,d,f){for(var h=i-1,g=i===0?s:[""],v=zh(g),y=0,x=0,p=0;y<r;++y)for(var m=0,k=ir(e,h+1,h=wh(x=l[y])),j=e;m<v;++m)(j=Sh(x>0?g[m]+" "+k:M(k,/&\f/g,g[m])))&&(o[p++]=j);return Zs(e,n,t,i===0?Js:a,o,u,d,f)}function kk(e,n,t,r){return Zs(e,n,t,jh,Ho(ok()),ir(e,2,-2),0,r)}function Sd(e,n,t,r,i){return Zs(e,n,t,qo,ir(e,0,r),ir(e,r+1,-1),r,i)}function Eh(e,n,t){switch(lk(e,n)){case 5103:return H+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return H+e+e;case 4789:return Or+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return H+e+Or+e+Y+e+e;case 5936:switch(ge(e,n+11)){case 114:return H+e+Y+M(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return H+e+Y+M(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return H+e+Y+M(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return H+e+Y+e+e;case 6165:return H+e+Y+"flex-"+e+e;case 5187:return H+e+M(e,/(\w+).+(:[^]+)/,H+"box-$1$2"+Y+"flex-$1$2")+e;case 5443:return H+e+Y+"flex-item-"+M(e,/flex-|-self/g,"")+(Sn(e,/flex-|baseline/)?"":Y+"grid-row-"+M(e,/flex-|-self/g,""))+e;case 4675:return H+e+Y+"flex-line-pack"+M(e,/align-content|flex-|-self/g,"")+e;case 5548:return H+e+Y+M(e,"shrink","negative")+e;case 5292:return H+e+Y+M(e,"basis","preferred-size")+e;case 6060:return H+"box-"+M(e,"-grow","")+H+e+Y+M(e,"grow","positive")+e;case 4554:return H+M(e,/([^-])(transform)/g,"$1"+H+"$2")+e;case 6187:return M(M(M(e,/(zoom-|grab)/,H+"$1"),/(image-set)/,H+"$1"),e,"")+e;case 5495:case 3959:return M(e,/(image-set\([^]*)/,H+"$1$`$1");case 4968:return M(M(e,/(.+:)(flex-)?(.*)/,H+"box-pack:$3"+Y+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+H+e+e;case 4200:if(!Sn(e,/flex-|baseline/))return Y+"grid-column-align"+ir(e,n)+e;break;case 2592:case 3360:return Y+M(e,"template-","")+e;case 4384:case 3616:return t&&t.some(function(r,i){return n=i,Sn(r.props,/grid-\w+-end/)})?~Gi(e+(t=t[n].value),"span",0)?e:Y+M(e,"-start","")+e+Y+"grid-row-span:"+(~Gi(t,"span",0)?Sn(t,/\d+/):+Sn(t,/\d+/)-+Sn(e,/\d+/))+";":Y+M(e,"-start","")+e;case 4896:case 4128:return t&&t.some(function(r){return Sn(r.props,/grid-\w+-start/)})?e:Y+M(M(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return M(e,/(.+)-inline(.+)/,H+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(kn(e)-1-n>6)switch(ge(e,n+1)){case 109:if(ge(e,n+4)!==45)break;case 102:return M(e,/(.+:)(.+)-([^]+)/,"$1"+H+"$2-$3$1"+Or+(ge(e,n+3)==108?"$3":"$2-$3"))+e;case 115:return~Gi(e,"stretch",0)?Eh(M(e,"stretch","fill-available"),n,t)+e:e}break;case 5152:case 5920:return M(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,l,a,o,u){return Y+i+":"+s+u+(l?Y+i+"-span:"+(a?o:+o-+s)+u:"")+e});case 4949:if(ge(e,n+6)===121)return M(e,":",":"+H)+e;break;case 6444:switch(ge(e,ge(e,14)===45?18:11)){case 120:return M(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+H+(ge(e,14)===45?"inline-":"")+"box$3$1"+H+"$2$3$1"+Y+"$2box$3")+e;case 100:return M(e,":",":"+Y)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return M(e,"scroll-","scroll-snap-")+e}return e}function Es(e,n){for(var t="",r=0;r<e.length;r++)t+=n(e[r],r,e,n)||"";return t}function vk(e,n,t,r){switch(e.type){case sk:if(e.children.length)break;case ik:case qo:return e.return=e.return||e.value;case jh:return"";case xh:return e.return=e.value+"{"+Es(e.children,r)+"}";case Js:if(!kn(e.value=e.props.join(",")))return""}return kn(t=Es(e.children,r))?e.return=e.value+"{"+t+"}":""}function yk(e){var n=zh(e);return function(t,r,i,s){for(var l="",a=0;a<n;a++)l+=e[a](t,r,i,s)||"";return l}}function jk(e){return function(n){n.root||(n=n.return)&&e(n)}}function xk(e,n,t,r){if(e.length>-1&&!e.return)switch(e.type){case qo:e.return=Eh(e.value,e.length,t);return;case xh:return Es([Mn(e,{value:M(e.value,"@","@"+H)})],r);case Js:if(e.length)return ak(t=e.props,function(i){switch(Sn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ct(Mn(e,{props:[M(i,/:(read-\w+)/,":"+Or+"$1")]})),Ct(Mn(e,{props:[i]})),Da(e,{props:xd(t,r)});break;case"::placeholder":Ct(Mn(e,{props:[M(i,/:(plac\w+)/,":"+H+"input-$1")]})),Ct(Mn(e,{props:[M(i,/:(plac\w+)/,":"+Or+"$1")]})),Ct(Mn(e,{props:[M(i,/:(plac\w+)/,Y+"input-$1")]})),Ct(Mn(e,{props:[i]})),Da(e,{props:xd(t,r)});break}return""})}}var wk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},qe={},lr=typeof process<"u"&&qe!==void 0&&(qe.REACT_APP_SC_ATTR||qe.SC_ATTR)||"data-styled",bh="active",_h="data-styled-version",Xs="6.1.11",Wo=`/*!sc*/
`,Ko=typeof window<"u"&&"HTMLElement"in window,Sk=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&qe!==void 0&&qe.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&qe.REACT_APP_SC_DISABLE_SPEEDY!==""?qe.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&qe.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&qe!==void 0&&qe.SC_DISABLE_SPEEDY!==void 0&&qe.SC_DISABLE_SPEEDY!==""&&qe.SC_DISABLE_SPEEDY!=="false"&&qe.SC_DISABLE_SPEEDY),el=Object.freeze([]),ar=Object.freeze({});function zk(e,n,t){return t===void 0&&(t=ar),e.theme!==t.theme&&e.theme||n||t.theme}var $h=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ck=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ek=/(^-|-$)/g;function zd(e){return e.replace(Ck,"-").replace(Ek,"")}var bk=/(a)(d)/gi,Fi=52,Cd=function(e){return String.fromCharCode(e+(e>25?39:97))};function Aa(e){var n,t="";for(n=Math.abs(e);n>Fi;n=n/Fi|0)t=Cd(n%Fi)+t;return(Cd(n%Fi)+t).replace(bk,"$1-$2")}var Ml,Ph=5381,At=function(e,n){for(var t=n.length;t;)e=33*e^n.charCodeAt(--t);return e},Rh=function(e){return At(Ph,e)};function Lh(e){return Aa(Rh(e)>>>0)}function _k(e){return e.displayName||e.name||"Component"}function Dl(e){return typeof e=="string"&&!0}var Fh=typeof Symbol=="function"&&Symbol.for,Nh=Fh?Symbol.for("react.memo"):60115,$k=Fh?Symbol.for("react.forward_ref"):60112,Pk={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Rk={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Th={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Lk=((Ml={})[$k]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ml[Nh]=Th,Ml);function Ed(e){return("type"in(n=e)&&n.type.$$typeof)===Nh?Th:"$$typeof"in e?Lk[e.$$typeof]:Pk;var n}var Fk=Object.defineProperty,Nk=Object.getOwnPropertyNames,bd=Object.getOwnPropertySymbols,Tk=Object.getOwnPropertyDescriptor,Mk=Object.getPrototypeOf,_d=Object.prototype;function Mh(e,n,t){if(typeof n!="string"){if(_d){var r=Mk(n);r&&r!==_d&&Mh(e,r,t)}var i=Nk(n);bd&&(i=i.concat(bd(n)));for(var s=Ed(e),l=Ed(n),a=0;a<i.length;++a){var o=i[a];if(!(o in Rk||t&&t[o]||l&&o in l||s&&o in s)){var u=Tk(n,o);try{Fk(e,o,u)}catch{}}}}return e}function or(e){return typeof e=="function"}function Vo(e){return typeof e=="object"&&"styledComponentId"in e}function ft(e,n){return e&&n?"".concat(e," ").concat(n):e||n||""}function Ba(e,n){if(e.length===0)return"";for(var t=e[0],r=1;r<e.length;r++)t+=e[r];return t}function ii(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ua(e,n,t){if(t===void 0&&(t=!1),!t&&!ii(e)&&!Array.isArray(e))return n;if(Array.isArray(n))for(var r=0;r<n.length;r++)e[r]=Ua(e[r],n[r]);else if(ii(n))for(var r in n)e[r]=Ua(e[r],n[r]);return e}function Go(e,n){Object.defineProperty(e,"toString",{value:n})}function ci(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(n.length>0?" Args: ".concat(n.join(", ")):""))}var Dk=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}return e.prototype.indexOfGroup=function(n){for(var t=0,r=0;r<n;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(n,t){if(n>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;n>=s;)if((s<<=1)<0)throw ci(16,"".concat(n));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var l=i;l<s;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(n+1),o=(l=0,t.length);l<o;l++)this.tag.insertRule(a,t[l])&&(this.groupSizes[n]++,a++)},e.prototype.clearGroup=function(n){if(n<this.length){var t=this.groupSizes[n],r=this.indexOfGroup(n),i=r+t;this.groupSizes[n]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(n){var t="";if(n>=this.length||this.groupSizes[n]===0)return t;for(var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r,l=i;l<s;l++)t+="".concat(this.tag.getRule(l)).concat(Wo);return t},e}(),Zi=new Map,bs=new Map,Yi=1,Ni=function(e){if(Zi.has(e))return Zi.get(e);for(;bs.has(Yi);)Yi++;var n=Yi++;return Zi.set(e,n),bs.set(n,e),n},Ik=function(e,n){Yi=n+1,Zi.set(e,n),bs.set(n,e)},Ok="style[".concat(lr,"][").concat(_h,'="').concat(Xs,'"]'),Ak=new RegExp("^".concat(lr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Bk=function(e,n,t){for(var r,i=t.split(","),s=0,l=i.length;s<l;s++)(r=i[s])&&e.registerName(n,r)},Uk=function(e,n){for(var t,r=((t=n.textContent)!==null&&t!==void 0?t:"").split(Wo),i=[],s=0,l=r.length;s<l;s++){var a=r[s].trim();if(a){var o=a.match(Ak);if(o){var u=0|parseInt(o[1],10),d=o[2];u!==0&&(Ik(d,u),Bk(e,d,o[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function qk(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Dh=function(e){var n=document.head,t=e||n,r=document.createElement("style"),i=function(a){var o=Array.from(a.querySelectorAll("style[".concat(lr,"]")));return o[o.length-1]}(t),s=i!==void 0?i.nextSibling:null;r.setAttribute(lr,bh),r.setAttribute(_h,Xs);var l=qk();return l&&r.setAttribute("nonce",l),t.insertBefore(r,s),r},Hk=function(){function e(n){this.element=Dh(n),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var l=r[i];if(l.ownerNode===t)return l}throw ci(17)}(this.element),this.length=0}return e.prototype.insertRule=function(n,t){try{return this.sheet.insertRule(t,n),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.prototype.getRule=function(n){var t=this.sheet.cssRules[n];return t&&t.cssText?t.cssText:""},e}(),Wk=function(){function e(n){this.element=Dh(n),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(n,t){if(n<=this.length&&n>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[n]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.prototype.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Kk=function(){function e(n){this.rules=[],this.length=0}return e.prototype.insertRule=function(n,t){return n<=this.length&&(this.rules.splice(n,0,t),this.length++,!0)},e.prototype.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.prototype.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),$d=Ko,Vk={isServer:!Ko,useCSSOMInjection:!Sk},Ih=function(){function e(n,t,r){n===void 0&&(n=ar),t===void 0&&(t={});var i=this;this.options=Ie(Ie({},Vk),n),this.gs=t,this.names=new Map(r),this.server=!!n.isServer,!this.server&&Ko&&$d&&($d=!1,function(s){for(var l=document.querySelectorAll(Ok),a=0,o=l.length;a<o;a++){var u=l[a];u&&u.getAttribute(lr)!==bh&&(Uk(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Go(this,function(){return function(s){for(var l=s.getTag(),a=l.length,o="",u=function(f){var h=function(p){return bs.get(p)}(f);if(h===void 0)return"continue";var g=s.names.get(h),v=l.getGroup(f);if(g===void 0||v.length===0)return"continue";var y="".concat(lr,".g").concat(f,'[id="').concat(h,'"]'),x="";g!==void 0&&g.forEach(function(p){p.length>0&&(x+="".concat(p,","))}),o+="".concat(v).concat(y,'{content:"').concat(x,'"}').concat(Wo)},d=0;d<a;d++)u(d);return o}(i)})}return e.registerId=function(n){return Ni(n)},e.prototype.reconstructWithOptions=function(n,t){return t===void 0&&(t=!0),new e(Ie(Ie({},this.options),n),this.gs,t&&this.names||void 0)},e.prototype.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(n=function(t){var r=t.useCSSOMInjection,i=t.target;return t.isServer?new Kk(i):r?new Hk(i):new Wk(i)}(this.options),new Dk(n)));var n},e.prototype.hasNameForId=function(n,t){return this.names.has(n)&&this.names.get(n).has(t)},e.prototype.registerName=function(n,t){if(Ni(n),this.names.has(n))this.names.get(n).add(t);else{var r=new Set;r.add(t),this.names.set(n,r)}},e.prototype.insertRules=function(n,t,r){this.registerName(n,t),this.getTag().insertRules(Ni(n),r)},e.prototype.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.prototype.clearRules=function(n){this.getTag().clearGroup(Ni(n)),this.clearNames(n)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Gk=/&/g,Jk=/^\s*\/\/.*$/gm;function Oh(e,n){return e.map(function(t){return t.type==="rule"&&(t.value="".concat(n," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(n," ")),t.props=t.props.map(function(r){return"".concat(n," ").concat(r)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=Oh(t.children,n)),t})}function Qk(e){var n,t,r,i=ar,s=i.options,l=s===void 0?ar:s,a=i.plugins,o=a===void 0?el:a,u=function(h,g,v){return v.startsWith(t)&&v.endsWith(t)&&v.replaceAll(t,"").length>0?".".concat(n):h},d=o.slice();d.push(function(h){h.type===Js&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(Gk,t).replace(r,u))}),l.prefix&&d.push(xk),d.push(vk);var f=function(h,g,v,y){g===void 0&&(g=""),v===void 0&&(v=""),y===void 0&&(y="&"),n=y,t=g,r=new RegExp("\\".concat(t,"\\b"),"g");var x=h.replace(Jk,""),p=gk(v||g?"".concat(v," ").concat(g," { ").concat(x," }"):x);l.namespace&&(p=Oh(p,l.namespace));var m=[];return Es(p,yk(d.concat(jk(function(k){return m.push(k)})))),m};return f.hash=o.length?o.reduce(function(h,g){return g.name||ci(15),At(h,g.name)},Ph).toString():"",f}var Zk=new Ih,qa=Qk(),Ah=W.createContext({shouldForwardProp:void 0,styleSheet:Zk,stylis:qa});Ah.Consumer;W.createContext(void 0);function Pd(){return F.useContext(Ah)}var Bh=function(){function e(n,t){var r=this;this.inject=function(i,s){s===void 0&&(s=qa);var l=r.name+s.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,s(r.rules,l,"@keyframes"))},this.name=n,this.id="sc-keyframes-".concat(n),this.rules=t,Go(this,function(){throw ci(12,String(r.name))})}return e.prototype.getName=function(n){return n===void 0&&(n=qa),this.name+n.hash},e}(),Yk=function(e){return e>="A"&&e<="Z"};function Rd(e){for(var n="",t=0;t<e.length;t++){var r=e[t];if(t===1&&r==="-"&&e[0]==="-")return e;Yk(r)?n+="-"+r.toLowerCase():n+=r}return n.startsWith("ms-")?"-"+n:n}var Uh=function(e){return e==null||e===!1||e===""},qh=function(e){var n,t,r=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!Uh(s)&&(Array.isArray(s)&&s.isCss||or(s)?r.push("".concat(Rd(i),":"),s,";"):ii(s)?r.push.apply(r,ri(ri(["".concat(i," {")],qh(s),!1),["}"],!1)):r.push("".concat(Rd(i),": ").concat((n=i,(t=s)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||n in wk||n.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return r};function gt(e,n,t,r){if(Uh(e))return[];if(Vo(e))return[".".concat(e.styledComponentId)];if(or(e)){if(!or(s=e)||s.prototype&&s.prototype.isReactComponent||!n)return[e];var i=e(n);return gt(i,n,t,r)}var s;return e instanceof Bh?t?(e.inject(t,r),[e.getName(r)]):[e]:ii(e)?qh(e):Array.isArray(e)?Array.prototype.concat.apply(el,e.map(function(l){return gt(l,n,t,r)})):[e.toString()]}function Xk(e){for(var n=0;n<e.length;n+=1){var t=e[n];if(or(t)&&!Vo(t))return!1}return!0}var ev=Rh(Xs),nv=function(){function e(n,t,r){this.rules=n,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Xk(n),this.componentId=t,this.baseHash=At(ev,t),this.baseStyle=r,Ih.registerId(t)}return e.prototype.generateAndInjectStyles=function(n,t,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(n,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))i=ft(i,this.staticRulesId);else{var s=Ba(gt(this.rules,n,t,r)),l=Aa(At(this.baseHash,s)>>>0);if(!t.hasNameForId(this.componentId,l)){var a=r(s,".".concat(l),void 0,this.componentId);t.insertRules(this.componentId,l,a)}i=ft(i,l),this.staticRulesId=l}else{for(var o=At(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")u+=f;else if(f){var h=Ba(gt(f,n,t,r));o=At(o,h+d),u+=h}}if(u){var g=Aa(o>>>0);t.hasNameForId(this.componentId,g)||t.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),i=ft(i,g)}}return i},e}(),Hh=W.createContext(void 0);Hh.Consumer;var Il={};function tv(e,n,t){var r=Vo(e),i=e,s=!Dl(e),l=n.attrs,a=l===void 0?el:l,o=n.componentId,u=o===void 0?function(j,w){var C=typeof j!="string"?"sc":zd(j);Il[C]=(Il[C]||0)+1;var z="".concat(C,"-").concat(Lh(Xs+C+Il[C]));return w?"".concat(w,"-").concat(z):z}(n.displayName,n.parentComponentId):o,d=n.displayName,f=d===void 0?function(j){return Dl(j)?"styled.".concat(j):"Styled(".concat(_k(j),")")}(e):d,h=n.displayName&&n.componentId?"".concat(zd(n.displayName),"-").concat(n.componentId):n.componentId||u,g=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,v=n.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(n.shouldForwardProp){var x=n.shouldForwardProp;v=function(j,w){return y(j,w)&&x(j,w)}}else v=y}var p=new nv(t,h,r?i.componentStyle:void 0);function m(j,w){return function(C,z,S){var L=C.attrs,$=C.componentStyle,q=C.defaultProps,T=C.foldedComponentIds,ne=C.styledComponentId,le=C.target,A=W.useContext(Hh),N=Pd(),V=C.shouldForwardProp||N.shouldForwardProp,E=zk(z,A,q)||ar,_=function(Ue,B,ue){for(var Se,de=Ie(Ie({},B),{className:void 0,theme:ue}),fn=0;fn<Ue.length;fn+=1){var te=or(Se=Ue[fn])?Se(de):Se;for(var Q in te)de[Q]=Q==="className"?ft(de[Q],te[Q]):Q==="style"?Ie(Ie({},de[Q]),te[Q]):te[Q]}return B.className&&(de.className=ft(de.className,B.className)),de}(L,z,E),R=_.as||le,D={};for(var O in _)_[O]===void 0||O[0]==="$"||O==="as"||O==="theme"&&_.theme===E||(O==="forwardedAs"?D.as=_.forwardedAs:V&&!V(O,R)||(D[O]=_[O]));var Pe=function(Ue,B){var ue=Pd(),Se=Ue.generateAndInjectStyles(B,ue.styleSheet,ue.stylis);return Se}($,_),ve=ft(T,ne);return Pe&&(ve+=" "+Pe),_.className&&(ve+=" "+_.className),D[Dl(R)&&!$h.has(R)?"class":"className"]=ve,D.ref=S,F.createElement(R,D)}(k,j,w)}m.displayName=f;var k=W.forwardRef(m);return k.attrs=g,k.componentStyle=p,k.displayName=f,k.shouldForwardProp=v,k.foldedComponentIds=r?ft(i.foldedComponentIds,i.styledComponentId):"",k.styledComponentId=h,k.target=r?i.target:e,Object.defineProperty(k,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(j){this._foldedDefaultProps=r?function(w){for(var C=[],z=1;z<arguments.length;z++)C[z-1]=arguments[z];for(var S=0,L=C;S<L.length;S++)Ua(w,L[S],!0);return w}({},i.defaultProps,j):j}}),Go(k,function(){return".".concat(k.styledComponentId)}),s&&Mh(k,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),k}function Ld(e,n){for(var t=[e[0]],r=0,i=n.length;r<i;r+=1)t.push(n[r],e[r+1]);return t}var Fd=function(e){return Object.assign(e,{isCss:!0})};function Wh(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];if(or(e)||ii(e))return Fd(gt(Ld(el,ri([e],n,!0))));var r=e;return n.length===0&&r.length===1&&typeof r[0]=="string"?gt(r):Fd(gt(Ld(r,n)))}function Ha(e,n,t){if(t===void 0&&(t=ar),!n)throw ci(1,n);var r=function(i){for(var s=[],l=1;l<arguments.length;l++)s[l-1]=arguments[l];return e(n,t,Wh.apply(void 0,ri([i],s,!1)))};return r.attrs=function(i){return Ha(e,n,Ie(Ie({},t),{attrs:Array.prototype.concat(t.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Ha(e,n,Ie(Ie({},t),i))},r}var Kh=function(e){return Ha(tv,e)},Nn=Kh;$h.forEach(function(e){Nn[e]=Kh(e)});function rv(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];var r=Ba(Wh.apply(void 0,ri([e],n,!1))),i=Lh(r);return new Bh(i,r)}const iv=Nn.div`
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
`,Jo=E0({component:()=>c.jsxs(c.Fragment,{children:[c.jsxs(iv,{children:[c.jsx(md,{to:"/",className:"[&.active]:font-bold",children:"Home"}),c.jsx(md,{to:"/lesson/$lessonId",params:{lessonId:"21"},className:"[&.active]:font-bold",children:"Test Lesson"})]}),c.jsx("hr",{}),c.jsx(lh,{}),c.jsx(nk,{})]})}),sv=Nn.div`
  padding: 1.5rem;
  margin: 1rem;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: 0.2rem;
  background-color: #bdbaba
`,lv=[{id:21,title:"Test Lesson",description:"Test Lesson",lesson:"fd fd fd"},{id:1,title:"Lesson 01",description:`Setzen Sie sich aufrecht und entspannt in den Sessel,  ertasten
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
Konfession und ledig.`}],av=e=>{const n=lv.find(r=>r.id===e),t=[];return n&&n.lesson.split("").forEach(r=>{t.push({value:r,color:"transparent"})}),t},ov=rv`
    0% {
      background-color: yellow;
    }
    100% {
      background-color: transparent;
    }
`,nl=Nn.span`
  font-family: "Courier New";
`,uv=Nn(nl)`
  background-color: lightgreen;
`,dv=Nn(nl)`
  background-color: red;
`,cv=Nn(nl)`
  background-color: yellow;
  animation-name: ${ov};
  animation-duration: 8s;
  animation-iteration-count: infinite;
`,fv=({data:e,isCurrent:n})=>{let t=c.jsx(c.Fragment,{children:e.value});e.value===`
`&&(t=c.jsx("span",{children:c.jsx("br",{})}));const r={ok:uv,error:dv,current:cv,transparent:nl},i=n?"current":e.color,s=r[i];return c.jsx(s,{children:t})},hv=({lesson:e,completeLesson:n})=>{const[t,r]=F.useState(e),[i,s]=F.useState(0),[l,a]=F.useState(new Date),o=i===t.length;F.useEffect(()=>{const d=f=>{if(f.key==="Space"&&f.target===document.body&&f.preventDefault(),i===0&&a(new Date),o){n({mistakes:pv(t),time:mv(l)});return}const h=f.key==="Enter"?`
`:f.key,g=[...t],v=t[i];g[i]={color:v.value===h?"ok":"error",value:v.value},r(g),s(i+1)};return document.addEventListener("keydown",d),()=>{document.removeEventListener("keydown",d)}},[o,t,i,n,a,l]);const u=t.map((d,f)=>c.jsx(fv,{data:d,isCurrent:f===i},f));return c.jsx("section",{children:u})},pv=e=>e.filter(n=>n.color==="error").length,mv=e=>(new Date().getTime()-e.getTime())/1e3,Vh=Nn.button`
  background: red;
  color: white;
  padding: 0.5rem 0.75rem;
  font-weight: bold;
  cursor: pointer;
`,gv=Nn(Vh)`
  background: blue;
`,kv=({onClick:e,children:n,color:t="default"})=>{const i={default:Vh,primary:gv}[t];return c.jsx(i,{onClick:e,children:n})},Ol={Reset:"Reset",Mistakes:"Mistakes",Time:"Time"},vv=({lessonStats:e,resetAction:n})=>{const{mistakes:t,time:r}=e;return c.jsxs(c.Fragment,{children:[c.jsxs("ul",{children:[c.jsxs("li",{children:[Ol.Mistakes,": ",t]}),c.jsxs("li",{children:[Ol.Time,": ",r]})]}),c.jsx(kv,{onClick:n,children:Ol.Reset})]})},yv=({id:e})=>{const[n,t]=F.useState(!1),[r,i]=F.useState({mistakes:0,time:0}),s=parseInt(e,10),l=av(s);console.log({lesson:l,id:e}),F.useEffect(()=>{window.scrollTo(0,0)},[]);const a=()=>t(!1),o=u=>{i(u),t(!0)};return c.jsx(sv,{children:n?c.jsx(vv,{resetAction:a,lessonStats:r}):c.jsx(hv,{lesson:l,completeLesson:o})})},Gh=hh("/lesson/$lessonId")({component:()=>c.jsx(jv,{})});function jv(){const{lessonId:e}=Gh.useParams();return c.jsx(yv,{id:e})}const xv=hh("/")(),wv=xv.update({path:"/",getParentRoute:()=>Jo}).lazy(()=>M0(()=>import("./index.lazy-B_ErFWxn.js"),[]).then(e=>e.Route)),Sv=Gh.update({path:"/lesson/$lessonId",getParentRoute:()=>Jo}),zv=Jo.addChildren({IndexLazyRoute:wv,LessonLessonIdRoute:Sv}),Cv=v0({routeTree:zv}),Nd=document.getElementById("root");Nd.innerHTML||Al.createRoot(Nd).render(c.jsx(F.StrictMode,{children:c.jsx(h0,{router:Cv})}));export{kv as B,sv as C,md as L,bv as c,c as j,lv as l};
