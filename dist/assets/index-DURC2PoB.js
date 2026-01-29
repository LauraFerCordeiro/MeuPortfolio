(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function z2(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Pf={exports:{}},$a={},Nf={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg;function B2(){if(Fg)return gt;Fg=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;function v(B){return B===null||typeof B!="object"?null:(B=m&&B[m]||B["@@iterator"],typeof B=="function"?B:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,S={};function x(B,oe,be){this.props=B,this.context=oe,this.refs=S,this.updater=be||y}x.prototype.isReactComponent={},x.prototype.setState=function(B,oe){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,oe,"setState")},x.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function _(){}_.prototype=x.prototype;function T(B,oe,be){this.props=B,this.context=oe,this.refs=S,this.updater=be||y}var A=T.prototype=new _;A.constructor=T,w(A,x.prototype),A.isPureReactComponent=!0;var b=Array.isArray,P=Object.prototype.hasOwnProperty,D={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function F(B,oe,be){var Fe,Be={},ae=null,fe=null;if(oe!=null)for(Fe in oe.ref!==void 0&&(fe=oe.ref),oe.key!==void 0&&(ae=""+oe.key),oe)P.call(oe,Fe)&&!I.hasOwnProperty(Fe)&&(Be[Fe]=oe[Fe]);var Se=arguments.length-2;if(Se===1)Be.children=be;else if(1<Se){for(var Ve=Array(Se),Ie=0;Ie<Se;Ie++)Ve[Ie]=arguments[Ie+2];Be.children=Ve}if(B&&B.defaultProps)for(Fe in Se=B.defaultProps,Se)Be[Fe]===void 0&&(Be[Fe]=Se[Fe]);return{$$typeof:o,type:B,key:ae,ref:fe,props:Be,_owner:D.current}}function E(B,oe){return{$$typeof:o,type:B.type,key:oe,ref:B.ref,props:B.props,_owner:B._owner}}function L(B){return typeof B=="object"&&B!==null&&B.$$typeof===o}function k(B){var oe={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(be){return oe[be]})}var W=/\/+/g;function V(B,oe){return typeof B=="object"&&B!==null&&B.key!=null?k(""+B.key):oe.toString(36)}function J(B,oe,be,Fe,Be){var ae=typeof B;(ae==="undefined"||ae==="boolean")&&(B=null);var fe=!1;if(B===null)fe=!0;else switch(ae){case"string":case"number":fe=!0;break;case"object":switch(B.$$typeof){case o:case e:fe=!0}}if(fe)return fe=B,Be=Be(fe),B=Fe===""?"."+V(fe,0):Fe,b(Be)?(be="",B!=null&&(be=B.replace(W,"$&/")+"/"),J(Be,oe,be,"",function(Ie){return Ie})):Be!=null&&(L(Be)&&(Be=E(Be,be+(!Be.key||fe&&fe.key===Be.key?"":(""+Be.key).replace(W,"$&/")+"/")+B)),oe.push(Be)),1;if(fe=0,Fe=Fe===""?".":Fe+":",b(B))for(var Se=0;Se<B.length;Se++){ae=B[Se];var Ve=Fe+V(ae,Se);fe+=J(ae,oe,be,Ve,Be)}else if(Ve=v(B),typeof Ve=="function")for(B=Ve.call(B),Se=0;!(ae=B.next()).done;)ae=ae.value,Ve=Fe+V(ae,Se++),fe+=J(ae,oe,be,Ve,Be);else if(ae==="object")throw oe=String(B),Error("Objects are not valid as a React child (found: "+(oe==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":oe)+"). If you meant to render a collection of children, use an array instead.");return fe}function ee(B,oe,be){if(B==null)return B;var Fe=[],Be=0;return J(B,Fe,"","",function(ae){return oe.call(be,ae,Be++)}),Fe}function Q(B){if(B._status===-1){var oe=B._result;oe=oe(),oe.then(function(be){(B._status===0||B._status===-1)&&(B._status=1,B._result=be)},function(be){(B._status===0||B._status===-1)&&(B._status=2,B._result=be)}),B._status===-1&&(B._status=0,B._result=oe)}if(B._status===1)return B._result.default;throw B._result}var Y={current:null},q={transition:null},de={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:q,ReactCurrentOwner:D};function re(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:ee,forEach:function(B,oe,be){ee(B,function(){oe.apply(this,arguments)},be)},count:function(B){var oe=0;return ee(B,function(){oe++}),oe},toArray:function(B){return ee(B,function(oe){return oe})||[]},only:function(B){if(!L(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},gt.Component=x,gt.Fragment=t,gt.Profiler=s,gt.PureComponent=T,gt.StrictMode=i,gt.Suspense=f,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,gt.act=re,gt.cloneElement=function(B,oe,be){if(B==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+B+".");var Fe=w({},B.props),Be=B.key,ae=B.ref,fe=B._owner;if(oe!=null){if(oe.ref!==void 0&&(ae=oe.ref,fe=D.current),oe.key!==void 0&&(Be=""+oe.key),B.type&&B.type.defaultProps)var Se=B.type.defaultProps;for(Ve in oe)P.call(oe,Ve)&&!I.hasOwnProperty(Ve)&&(Fe[Ve]=oe[Ve]===void 0&&Se!==void 0?Se[Ve]:oe[Ve])}var Ve=arguments.length-2;if(Ve===1)Fe.children=be;else if(1<Ve){Se=Array(Ve);for(var Ie=0;Ie<Ve;Ie++)Se[Ie]=arguments[Ie+2];Fe.children=Se}return{$$typeof:o,type:B.type,key:Be,ref:ae,props:Fe,_owner:fe}},gt.createContext=function(B){return B={$$typeof:c,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},B.Provider={$$typeof:a,_context:B},B.Consumer=B},gt.createElement=F,gt.createFactory=function(B){var oe=F.bind(null,B);return oe.type=B,oe},gt.createRef=function(){return{current:null}},gt.forwardRef=function(B){return{$$typeof:u,render:B}},gt.isValidElement=L,gt.lazy=function(B){return{$$typeof:p,_payload:{_status:-1,_result:B},_init:Q}},gt.memo=function(B,oe){return{$$typeof:h,type:B,compare:oe===void 0?null:oe}},gt.startTransition=function(B){var oe=q.transition;q.transition={};try{B()}finally{q.transition=oe}},gt.unstable_act=re,gt.useCallback=function(B,oe){return Y.current.useCallback(B,oe)},gt.useContext=function(B){return Y.current.useContext(B)},gt.useDebugValue=function(){},gt.useDeferredValue=function(B){return Y.current.useDeferredValue(B)},gt.useEffect=function(B,oe){return Y.current.useEffect(B,oe)},gt.useId=function(){return Y.current.useId()},gt.useImperativeHandle=function(B,oe,be){return Y.current.useImperativeHandle(B,oe,be)},gt.useInsertionEffect=function(B,oe){return Y.current.useInsertionEffect(B,oe)},gt.useLayoutEffect=function(B,oe){return Y.current.useLayoutEffect(B,oe)},gt.useMemo=function(B,oe){return Y.current.useMemo(B,oe)},gt.useReducer=function(B,oe,be){return Y.current.useReducer(B,oe,be)},gt.useRef=function(B){return Y.current.useRef(B)},gt.useState=function(B){return Y.current.useState(B)},gt.useSyncExternalStore=function(B,oe,be){return Y.current.useSyncExternalStore(B,oe,be)},gt.useTransition=function(){return Y.current.useTransition()},gt.version="18.3.1",gt}var Og;function Ip(){return Og||(Og=1,Nf.exports=B2()),Nf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg;function V2(){if(kg)return $a;kg=1;var o=Ip(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,f,h){var p,m={},v=null,y=null;h!==void 0&&(v=""+h),f.key!==void 0&&(v=""+f.key),f.ref!==void 0&&(y=f.ref);for(p in f)i.call(f,p)&&!a.hasOwnProperty(p)&&(m[p]=f[p]);if(u&&u.defaultProps)for(p in f=u.defaultProps,f)m[p]===void 0&&(m[p]=f[p]);return{$$typeof:e,type:u,key:v,ref:y,props:m,_owner:s.current}}return $a.Fragment=t,$a.jsx=c,$a.jsxs=c,$a}var zg;function H2(){return zg||(zg=1,Pf.exports=V2()),Pf.exports}var R=H2(),kc={},Lf={exports:{}},ei={},Df={exports:{}},If={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bg;function G2(){return Bg||(Bg=1,(function(o){function e(q,de){var re=q.length;q.push(de);e:for(;0<re;){var B=re-1>>>1,oe=q[B];if(0<s(oe,de))q[B]=de,q[re]=oe,re=B;else break e}}function t(q){return q.length===0?null:q[0]}function i(q){if(q.length===0)return null;var de=q[0],re=q.pop();if(re!==de){q[0]=re;e:for(var B=0,oe=q.length,be=oe>>>1;B<be;){var Fe=2*(B+1)-1,Be=q[Fe],ae=Fe+1,fe=q[ae];if(0>s(Be,re))ae<oe&&0>s(fe,Be)?(q[B]=fe,q[ae]=re,B=ae):(q[B]=Be,q[Fe]=re,B=Fe);else if(ae<oe&&0>s(fe,re))q[B]=fe,q[ae]=re,B=ae;else break e}}return de}function s(q,de){var re=q.sortIndex-de.sortIndex;return re!==0?re:q.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;o.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();o.unstable_now=function(){return c.now()-u}}var f=[],h=[],p=1,m=null,v=3,y=!1,w=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(q){for(var de=t(h);de!==null;){if(de.callback===null)i(h);else if(de.startTime<=q)i(h),de.sortIndex=de.expirationTime,e(f,de);else break;de=t(h)}}function b(q){if(S=!1,A(q),!w)if(t(f)!==null)w=!0,Q(P);else{var de=t(h);de!==null&&Y(b,de.startTime-q)}}function P(q,de){w=!1,S&&(S=!1,_(F),F=-1),y=!0;var re=v;try{for(A(de),m=t(f);m!==null&&(!(m.expirationTime>de)||q&&!k());){var B=m.callback;if(typeof B=="function"){m.callback=null,v=m.priorityLevel;var oe=B(m.expirationTime<=de);de=o.unstable_now(),typeof oe=="function"?m.callback=oe:m===t(f)&&i(f),A(de)}else i(f);m=t(f)}if(m!==null)var be=!0;else{var Fe=t(h);Fe!==null&&Y(b,Fe.startTime-de),be=!1}return be}finally{m=null,v=re,y=!1}}var D=!1,I=null,F=-1,E=5,L=-1;function k(){return!(o.unstable_now()-L<E)}function W(){if(I!==null){var q=o.unstable_now();L=q;var de=!0;try{de=I(!0,q)}finally{de?V():(D=!1,I=null)}}else D=!1}var V;if(typeof T=="function")V=function(){T(W)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,ee=J.port2;J.port1.onmessage=W,V=function(){ee.postMessage(null)}}else V=function(){x(W,0)};function Q(q){I=q,D||(D=!0,V())}function Y(q,de){F=x(function(){q(o.unstable_now())},de)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(q){q.callback=null},o.unstable_continueExecution=function(){w||y||(w=!0,Q(P))},o.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<q?Math.floor(1e3/q):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_getFirstCallbackNode=function(){return t(f)},o.unstable_next=function(q){switch(v){case 1:case 2:case 3:var de=3;break;default:de=v}var re=v;v=de;try{return q()}finally{v=re}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(q,de){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var re=v;v=q;try{return de()}finally{v=re}},o.unstable_scheduleCallback=function(q,de,re){var B=o.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?B+re:B):re=B,q){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=re+oe,q={id:p++,callback:de,priorityLevel:q,startTime:re,expirationTime:oe,sortIndex:-1},re>B?(q.sortIndex=re,e(h,q),t(f)===null&&q===t(h)&&(S?(_(F),F=-1):S=!0,Y(b,re-B))):(q.sortIndex=oe,e(f,q),w||y||(w=!0,Q(P))),q},o.unstable_shouldYield=k,o.unstable_wrapCallback=function(q){var de=v;return function(){var re=v;v=de;try{return q.apply(this,arguments)}finally{v=re}}}})(If)),If}var Vg;function W2(){return Vg||(Vg=1,Df.exports=G2()),Df.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hg;function j2(){if(Hg)return ei;Hg=1;var o=Ip(),e=W2();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function a(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function v(n){return f.call(m,n)?!0:f.call(p,n)?!1:h.test(n)?m[n]=!0:(p[n]=!0,!1)}function y(n,r,l,d){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,r,l,d){if(r===null||typeof r>"u"||y(n,r,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function S(n,r,l,d,g,M,N){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=d,this.attributeNamespace=g,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=M,this.removeEmptyString=N}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new S(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];x[r]=new S(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new S(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new S(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new S(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new S(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new S(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new S(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new S(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function T(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(_,T);x[r]=new S(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(_,T);x[r]=new S(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(_,T);x[r]=new S(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new S(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new S("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new S(n,1,!1,n.toLowerCase(),null,!0,!0)});function A(n,r,l,d){var g=x.hasOwnProperty(r)?x[r]:null;(g!==null?g.type!==0:d||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(w(r,l,g,d)&&(l=null),d||g===null?v(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):g.mustUseProperty?n[g.propertyName]=l===null?g.type===3?!1:"":l:(r=g.attributeName,d=g.attributeNamespace,l===null?n.removeAttribute(r):(g=g.type,l=g===3||g===4&&l===!0?"":""+l,d?n.setAttributeNS(d,r,l):n.setAttribute(r,l))))}var b=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,P=Symbol.for("react.element"),D=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),L=Symbol.for("react.provider"),k=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),q=Symbol.iterator;function de(n){return n===null||typeof n!="object"?null:(n=q&&n[q]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,B;function oe(n){if(B===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);B=r&&r[1]||""}return`
`+B+n}var be=!1;function Fe(n,r){if(!n||be)return"";be=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(le){var d=le}Reflect.construct(n,[],r)}else{try{r.call()}catch(le){d=le}n.call(r.prototype)}else{try{throw Error()}catch(le){d=le}n()}}catch(le){if(le&&d&&typeof le.stack=="string"){for(var g=le.stack.split(`
`),M=d.stack.split(`
`),N=g.length-1,z=M.length-1;1<=N&&0<=z&&g[N]!==M[z];)z--;for(;1<=N&&0<=z;N--,z--)if(g[N]!==M[z]){if(N!==1||z!==1)do if(N--,z--,0>z||g[N]!==M[z]){var H=`
`+g[N].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=N&&0<=z);break}}}finally{be=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?oe(n):""}function Be(n){switch(n.tag){case 5:return oe(n.type);case 16:return oe("Lazy");case 13:return oe("Suspense");case 19:return oe("SuspenseList");case 0:case 2:case 15:return n=Fe(n.type,!1),n;case 11:return n=Fe(n.type.render,!1),n;case 1:return n=Fe(n.type,!0),n;default:return""}}function ae(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case I:return"Fragment";case D:return"Portal";case E:return"Profiler";case F:return"StrictMode";case V:return"Suspense";case J:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case L:return(n._context.displayName||"Context")+".Provider";case W:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ee:return r=n.displayName||null,r!==null?r:ae(n.type)||"Memo";case Q:r=n._payload,n=n._init;try{return ae(n(r))}catch{}}return null}function fe(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(r);case 8:return r===F?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Se(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ve(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ie(n){var r=Ve(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),d=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var g=l.get,M=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return g.call(this)},set:function(N){d=""+N,M.call(this,N)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(N){d=""+N},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function _t(n){n._valueTracker||(n._valueTracker=Ie(n))}function on(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),d="";return n&&(d=Ve(n)?n.checked?"true":"false":n.value),n=d,n!==l?(r.setValue(n),!0):!1}function mt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Mt(n,r){var l=r.checked;return re({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function It(n,r){var l=r.defaultValue==null?"":r.defaultValue,d=r.checked!=null?r.checked:r.defaultChecked;l=Se(r.value!=null?r.value:l),n._wrapperState={initialChecked:d,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function ut(n,r){r=r.checked,r!=null&&A(n,"checked",r,!1)}function Xt(n,r){ut(n,r);var l=Se(r.value),d=r.type;if(l!=null)d==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(d==="submit"||d==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?qt(n,r.type,l):r.hasOwnProperty("defaultValue")&&qt(n,r.type,Se(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function G(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var d=r.type;if(!(d!=="submit"&&d!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function qt(n,r,l){(r!=="number"||mt(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var vt=Array.isArray;function wt(n,r,l,d){if(n=n.options,r){r={};for(var g=0;g<l.length;g++)r["$"+l[g]]=!0;for(l=0;l<n.length;l++)g=r.hasOwnProperty("$"+n[l].value),n[l].selected!==g&&(n[l].selected=g),g&&d&&(n[l].defaultSelected=!0)}else{for(l=""+Se(l),r=null,g=0;g<n.length;g++){if(n[g].value===l){n[g].selected=!0,d&&(n[g].defaultSelected=!0);return}r!==null||n[g].disabled||(r=n[g])}r!==null&&(r.selected=!0)}}function qe(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function O(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(vt(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:Se(l)}}function C(n,r){var l=Se(r.value),d=Se(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),d!=null&&(n.defaultValue=""+d)}function $(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function he(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?he(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ue,Ke=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,d,g){MSApp.execUnsafeLocalFunction(function(){return n(r,l,d,g)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(ue=ue||document.createElement("div"),ue.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=ue.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Ee(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var He={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},it=["Webkit","ms","Moz","O"];Object.keys(He).forEach(function(n){it.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),He[r]=He[n]})});function ye(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||He.hasOwnProperty(n)&&He[n]?(""+r).trim():r+"px"}function Re(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var d=l.indexOf("--")===0,g=ye(l,r[l],d);l==="float"&&(l="cssFloat"),d?n.setProperty(l,g):n[l]=g}}var je=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ye(n,r){if(r){if(je[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Ae(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ct=null;function j(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ne=null,Me=null,Le=null;function ve(n){if(n=Ia(n)){if(typeof Ne!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Jl(r),Ne(n.stateNode,n.type,r))}}function pe(n){Me?Le?Le.push(n):Le=[n]:Me=n}function Ce(){if(Me){var n=Me,r=Le;if(Le=Me=null,ve(n),r)for(n=0;n<r.length;n++)ve(r[n])}}function rt(n,r){return n(r)}function Ft(){}var Et=!1;function li(n,r,l){if(Et)return n(r,l);Et=!0;try{return rt(n,r,l)}finally{Et=!1,(Me!==null||Le!==null)&&(Ft(),Ce())}}function Vn(n,r){var l=n.stateNode;if(l===null)return null;var d=Jl(l);if(d===null)return null;l=d[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(n=n.type,d=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!d;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var ha=!1;if(u)try{var kr={};Object.defineProperty(kr,"passive",{get:function(){ha=!0}}),window.addEventListener("test",kr,kr),window.removeEventListener("test",kr,kr)}catch{ha=!1}function pa(n,r,l,d,g,M,N,z,H){var le=Array.prototype.slice.call(arguments,3);try{r.apply(l,le)}catch(_e){this.onError(_e)}}var Ms=!1,ws=null,Es=!1,zi=null,ma={onError:function(n){Ms=!0,ws=n}};function Ll(n,r,l,d,g,M,N,z,H){Ms=!1,ws=null,pa.apply(ma,arguments)}function Dl(n,r,l,d,g,M,N,z,H){if(Ll.apply(this,arguments),Ms){if(Ms){var le=ws;Ms=!1,ws=null}else throw Error(t(198));Es||(Es=!0,zi=le)}}function wi(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function ga(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Ts(n){if(wi(n)!==n)throw Error(t(188))}function Il(n){var r=n.alternate;if(!r){if(r=wi(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,d=r;;){var g=l.return;if(g===null)break;var M=g.alternate;if(M===null){if(d=g.return,d!==null){l=d;continue}break}if(g.child===M.child){for(M=g.child;M;){if(M===l)return Ts(g),n;if(M===d)return Ts(g),r;M=M.sibling}throw Error(t(188))}if(l.return!==d.return)l=g,d=M;else{for(var N=!1,z=g.child;z;){if(z===l){N=!0,l=g,d=M;break}if(z===d){N=!0,d=g,l=M;break}z=z.sibling}if(!N){for(z=M.child;z;){if(z===l){N=!0,l=M,d=g;break}if(z===d){N=!0,d=M,l=g;break}z=z.sibling}if(!N)throw Error(t(189))}}if(l.alternate!==d)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function _a(n){return n=Il(n),n!==null?Ul(n):null}function Ul(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Ul(n);if(r!==null)return r;n=n.sibling}return null}var Fl=e.unstable_scheduleCallback,Ol=e.unstable_cancelCallback,Qu=e.unstable_shouldYield,Ju=e.unstable_requestPaint,Kt=e.unstable_now,U=e.unstable_getCurrentPriorityLevel,K=e.unstable_ImmediatePriority,ce=e.unstable_UserBlockingPriority,se=e.unstable_NormalPriority,ne=e.unstable_LowPriority,Pe=e.unstable_IdlePriority,Oe=null,Te=null;function We(n){if(Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(Oe,n,void 0,(n.current.flags&128)===128)}catch{}}var ze=Math.clz32?Math.clz32:ft,nt=Math.log,Qe=Math.LN2;function ft(n){return n>>>=0,n===0?32:31-(nt(n)/Qe|0)|0}var Tt=64,zt=4194304;function kt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Rt(n,r){var l=n.pendingLanes;if(l===0)return 0;var d=0,g=n.suspendedLanes,M=n.pingedLanes,N=l&268435455;if(N!==0){var z=N&~g;z!==0?d=kt(z):(M&=N,M!==0&&(d=kt(M)))}else N=l&~g,N!==0?d=kt(N):M!==0&&(d=kt(M));if(d===0)return 0;if(r!==0&&r!==d&&(r&g)===0&&(g=d&-d,M=r&-r,g>=M||g===16&&(M&4194240)!==0))return r;if((d&4)!==0&&(d|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=d;0<r;)l=31-ze(r),g=1<<l,d|=n[l],r&=~g;return d}function Je(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dt(n,r){for(var l=n.suspendedLanes,d=n.pingedLanes,g=n.expirationTimes,M=n.pendingLanes;0<M;){var N=31-ze(M),z=1<<N,H=g[N];H===-1?((z&l)===0||(z&d)!==0)&&(g[N]=Je(z,r)):H<=r&&(n.expiredLanes|=z),M&=~z}}function xt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Nn(){var n=Tt;return Tt<<=1,(Tt&4194240)===0&&(Tt=64),n}function Ki(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function hn(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-ze(r),n[r]=l}function bs(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var d=n.eventTimes;for(n=n.expirationTimes;0<l;){var g=31-ze(l),M=1<<g;r[g]=0,d[g]=-1,n[g]=-1,l&=~M}}function Ut(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var d=31-ze(l),g=1<<d;g&r|n[d]&r&&(n[d]|=r),l&=~g}}var lt=0;function Hn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var yn,Sn,lo,Zi,v0,ed=!1,kl=[],zr=null,Br=null,Vr=null,va=new Map,xa=new Map,Hr=[],ax="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function x0(n,r){switch(n){case"focusin":case"focusout":zr=null;break;case"dragenter":case"dragleave":Br=null;break;case"mouseover":case"mouseout":Vr=null;break;case"pointerover":case"pointerout":va.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":xa.delete(r.pointerId)}}function ya(n,r,l,d,g,M){return n===null||n.nativeEvent!==M?(n={blockedOn:r,domEventName:l,eventSystemFlags:d,nativeEvent:M,targetContainers:[g]},r!==null&&(r=Ia(r),r!==null&&Sn(r)),n):(n.eventSystemFlags|=d,r=n.targetContainers,g!==null&&r.indexOf(g)===-1&&r.push(g),n)}function lx(n,r,l,d,g){switch(r){case"focusin":return zr=ya(zr,n,r,l,d,g),!0;case"dragenter":return Br=ya(Br,n,r,l,d,g),!0;case"mouseover":return Vr=ya(Vr,n,r,l,d,g),!0;case"pointerover":var M=g.pointerId;return va.set(M,ya(va.get(M)||null,n,r,l,d,g)),!0;case"gotpointercapture":return M=g.pointerId,xa.set(M,ya(xa.get(M)||null,n,r,l,d,g)),!0}return!1}function y0(n){var r=As(n.target);if(r!==null){var l=wi(r);if(l!==null){if(r=l.tag,r===13){if(r=ga(l),r!==null){n.blockedOn=r,v0(n.priority,function(){lo(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function zl(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=nd(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var d=new l.constructor(l.type,l);ct=d,l.target.dispatchEvent(d),ct=null}else return r=Ia(l),r!==null&&Sn(r),n.blockedOn=l,!1;r.shift()}return!0}function S0(n,r,l){zl(n)&&l.delete(r)}function cx(){ed=!1,zr!==null&&zl(zr)&&(zr=null),Br!==null&&zl(Br)&&(Br=null),Vr!==null&&zl(Vr)&&(Vr=null),va.forEach(S0),xa.forEach(S0)}function Sa(n,r){n.blockedOn===r&&(n.blockedOn=null,ed||(ed=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,cx)))}function Ma(n){function r(g){return Sa(g,n)}if(0<kl.length){Sa(kl[0],n);for(var l=1;l<kl.length;l++){var d=kl[l];d.blockedOn===n&&(d.blockedOn=null)}}for(zr!==null&&Sa(zr,n),Br!==null&&Sa(Br,n),Vr!==null&&Sa(Vr,n),va.forEach(r),xa.forEach(r),l=0;l<Hr.length;l++)d=Hr[l],d.blockedOn===n&&(d.blockedOn=null);for(;0<Hr.length&&(l=Hr[0],l.blockedOn===null);)y0(l),l.blockedOn===null&&Hr.shift()}var co=b.ReactCurrentBatchConfig,Bl=!0;function ux(n,r,l,d){var g=lt,M=co.transition;co.transition=null;try{lt=1,td(n,r,l,d)}finally{lt=g,co.transition=M}}function dx(n,r,l,d){var g=lt,M=co.transition;co.transition=null;try{lt=4,td(n,r,l,d)}finally{lt=g,co.transition=M}}function td(n,r,l,d){if(Bl){var g=nd(n,r,l,d);if(g===null)xd(n,r,d,Vl,l),x0(n,d);else if(lx(g,n,r,l,d))d.stopPropagation();else if(x0(n,d),r&4&&-1<ax.indexOf(n)){for(;g!==null;){var M=Ia(g);if(M!==null&&yn(M),M=nd(n,r,l,d),M===null&&xd(n,r,d,Vl,l),M===g)break;g=M}g!==null&&d.stopPropagation()}else xd(n,r,d,null,l)}}var Vl=null;function nd(n,r,l,d){if(Vl=null,n=j(d),n=As(n),n!==null)if(r=wi(n),r===null)n=null;else if(l=r.tag,l===13){if(n=ga(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Vl=n,null}function M0(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(U()){case K:return 1;case ce:return 4;case se:case ne:return 16;case Pe:return 536870912;default:return 16}default:return 16}}var Gr=null,id=null,Hl=null;function w0(){if(Hl)return Hl;var n,r=id,l=r.length,d,g="value"in Gr?Gr.value:Gr.textContent,M=g.length;for(n=0;n<l&&r[n]===g[n];n++);var N=l-n;for(d=1;d<=N&&r[l-d]===g[M-d];d++);return Hl=g.slice(n,1<d?1-d:void 0)}function Gl(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Wl(){return!0}function E0(){return!1}function ci(n){function r(l,d,g,M,N){this._reactName=l,this._targetInst=g,this.type=d,this.nativeEvent=M,this.target=N,this.currentTarget=null;for(var z in n)n.hasOwnProperty(z)&&(l=n[z],this[z]=l?l(M):M[z]);return this.isDefaultPrevented=(M.defaultPrevented!=null?M.defaultPrevented:M.returnValue===!1)?Wl:E0,this.isPropagationStopped=E0,this}return re(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Wl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Wl)},persist:function(){},isPersistent:Wl}),r}var uo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rd=ci(uo),wa=re({},uo,{view:0,detail:0}),fx=ci(wa),sd,od,Ea,jl=re({},wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ld,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ea&&(Ea&&n.type==="mousemove"?(sd=n.screenX-Ea.screenX,od=n.screenY-Ea.screenY):od=sd=0,Ea=n),sd)},movementY:function(n){return"movementY"in n?n.movementY:od}}),T0=ci(jl),hx=re({},jl,{dataTransfer:0}),px=ci(hx),mx=re({},wa,{relatedTarget:0}),ad=ci(mx),gx=re({},uo,{animationName:0,elapsedTime:0,pseudoElement:0}),_x=ci(gx),vx=re({},uo,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),xx=ci(vx),yx=re({},uo,{data:0}),b0=ci(yx),Sx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ex(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=wx[n])?!!r[n]:!1}function ld(){return Ex}var Tx=re({},wa,{key:function(n){if(n.key){var r=Sx[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Gl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Mx[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ld,charCode:function(n){return n.type==="keypress"?Gl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Gl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),bx=ci(Tx),Ax=re({},jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),A0=ci(Ax),Cx=re({},wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ld}),Rx=ci(Cx),Px=re({},uo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nx=ci(Px),Lx=re({},jl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Dx=ci(Lx),Ix=[9,13,27,32],cd=u&&"CompositionEvent"in window,Ta=null;u&&"documentMode"in document&&(Ta=document.documentMode);var Ux=u&&"TextEvent"in window&&!Ta,C0=u&&(!cd||Ta&&8<Ta&&11>=Ta),R0=" ",P0=!1;function N0(n,r){switch(n){case"keyup":return Ix.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function L0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var fo=!1;function Fx(n,r){switch(n){case"compositionend":return L0(r);case"keypress":return r.which!==32?null:(P0=!0,R0);case"textInput":return n=r.data,n===R0&&P0?null:n;default:return null}}function Ox(n,r){if(fo)return n==="compositionend"||!cd&&N0(n,r)?(n=w0(),Hl=id=Gr=null,fo=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return C0&&r.locale!=="ko"?null:r.data;default:return null}}var kx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function D0(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!kx[n.type]:r==="textarea"}function I0(n,r,l,d){pe(d),r=Kl(r,"onChange"),0<r.length&&(l=new rd("onChange","change",null,l,d),n.push({event:l,listeners:r}))}var ba=null,Aa=null;function zx(n){Q0(n,0)}function Xl(n){var r=_o(n);if(on(r))return n}function Bx(n,r){if(n==="change")return r}var U0=!1;if(u){var ud;if(u){var dd="oninput"in document;if(!dd){var F0=document.createElement("div");F0.setAttribute("oninput","return;"),dd=typeof F0.oninput=="function"}ud=dd}else ud=!1;U0=ud&&(!document.documentMode||9<document.documentMode)}function O0(){ba&&(ba.detachEvent("onpropertychange",k0),Aa=ba=null)}function k0(n){if(n.propertyName==="value"&&Xl(Aa)){var r=[];I0(r,Aa,n,j(n)),li(zx,r)}}function Vx(n,r,l){n==="focusin"?(O0(),ba=r,Aa=l,ba.attachEvent("onpropertychange",k0)):n==="focusout"&&O0()}function Hx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Xl(Aa)}function Gx(n,r){if(n==="click")return Xl(r)}function Wx(n,r){if(n==="input"||n==="change")return Xl(r)}function jx(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Bi=typeof Object.is=="function"?Object.is:jx;function Ca(n,r){if(Bi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),d=Object.keys(r);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var g=l[d];if(!f.call(r,g)||!Bi(n[g],r[g]))return!1}return!0}function z0(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function B0(n,r){var l=z0(n);n=0;for(var d;l;){if(l.nodeType===3){if(d=n+l.textContent.length,n<=r&&d>=r)return{node:l,offset:r-n};n=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=z0(l)}}function V0(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?V0(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function H0(){for(var n=window,r=mt();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=mt(n.document)}return r}function fd(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Xx(n){var r=H0(),l=n.focusedElem,d=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&V0(l.ownerDocument.documentElement,l)){if(d!==null&&fd(l)){if(r=d.start,n=d.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var g=l.textContent.length,M=Math.min(d.start,g);d=d.end===void 0?M:Math.min(d.end,g),!n.extend&&M>d&&(g=d,d=M,M=g),g=B0(l,M);var N=B0(l,d);g&&N&&(n.rangeCount!==1||n.anchorNode!==g.node||n.anchorOffset!==g.offset||n.focusNode!==N.node||n.focusOffset!==N.offset)&&(r=r.createRange(),r.setStart(g.node,g.offset),n.removeAllRanges(),M>d?(n.addRange(r),n.extend(N.node,N.offset)):(r.setEnd(N.node,N.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var qx=u&&"documentMode"in document&&11>=document.documentMode,ho=null,hd=null,Ra=null,pd=!1;function G0(n,r,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;pd||ho==null||ho!==mt(d)||(d=ho,"selectionStart"in d&&fd(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Ra&&Ca(Ra,d)||(Ra=d,d=Kl(hd,"onSelect"),0<d.length&&(r=new rd("onSelect","select",null,r,l),n.push({event:r,listeners:d}),r.target=ho)))}function ql(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var po={animationend:ql("Animation","AnimationEnd"),animationiteration:ql("Animation","AnimationIteration"),animationstart:ql("Animation","AnimationStart"),transitionend:ql("Transition","TransitionEnd")},md={},W0={};u&&(W0=document.createElement("div").style,"AnimationEvent"in window||(delete po.animationend.animation,delete po.animationiteration.animation,delete po.animationstart.animation),"TransitionEvent"in window||delete po.transitionend.transition);function Yl(n){if(md[n])return md[n];if(!po[n])return n;var r=po[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in W0)return md[n]=r[l];return n}var j0=Yl("animationend"),X0=Yl("animationiteration"),q0=Yl("animationstart"),Y0=Yl("transitionend"),$0=new Map,K0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wr(n,r){$0.set(n,r),a(r,[n])}for(var gd=0;gd<K0.length;gd++){var _d=K0[gd],Yx=_d.toLowerCase(),$x=_d[0].toUpperCase()+_d.slice(1);Wr(Yx,"on"+$x)}Wr(j0,"onAnimationEnd"),Wr(X0,"onAnimationIteration"),Wr(q0,"onAnimationStart"),Wr("dblclick","onDoubleClick"),Wr("focusin","onFocus"),Wr("focusout","onBlur"),Wr(Y0,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pa));function Z0(n,r,l){var d=n.type||"unknown-event";n.currentTarget=l,Dl(d,r,void 0,n),n.currentTarget=null}function Q0(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var d=n[l],g=d.event;d=d.listeners;e:{var M=void 0;if(r)for(var N=d.length-1;0<=N;N--){var z=d[N],H=z.instance,le=z.currentTarget;if(z=z.listener,H!==M&&g.isPropagationStopped())break e;Z0(g,z,le),M=H}else for(N=0;N<d.length;N++){if(z=d[N],H=z.instance,le=z.currentTarget,z=z.listener,H!==M&&g.isPropagationStopped())break e;Z0(g,z,le),M=H}}}if(Es)throw n=zi,Es=!1,zi=null,n}function Wt(n,r){var l=r[Td];l===void 0&&(l=r[Td]=new Set);var d=n+"__bubble";l.has(d)||(J0(r,n,2,!1),l.add(d))}function vd(n,r,l){var d=0;r&&(d|=4),J0(l,n,d,r)}var $l="_reactListening"+Math.random().toString(36).slice(2);function Na(n){if(!n[$l]){n[$l]=!0,i.forEach(function(l){l!=="selectionchange"&&(Kx.has(l)||vd(l,!1,n),vd(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[$l]||(r[$l]=!0,vd("selectionchange",!1,r))}}function J0(n,r,l,d){switch(M0(r)){case 1:var g=ux;break;case 4:g=dx;break;default:g=td}l=g.bind(null,r,l,n),g=void 0,!ha||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(g=!0),d?g!==void 0?n.addEventListener(r,l,{capture:!0,passive:g}):n.addEventListener(r,l,!0):g!==void 0?n.addEventListener(r,l,{passive:g}):n.addEventListener(r,l,!1)}function xd(n,r,l,d,g){var M=d;if((r&1)===0&&(r&2)===0&&d!==null)e:for(;;){if(d===null)return;var N=d.tag;if(N===3||N===4){var z=d.stateNode.containerInfo;if(z===g||z.nodeType===8&&z.parentNode===g)break;if(N===4)for(N=d.return;N!==null;){var H=N.tag;if((H===3||H===4)&&(H=N.stateNode.containerInfo,H===g||H.nodeType===8&&H.parentNode===g))return;N=N.return}for(;z!==null;){if(N=As(z),N===null)return;if(H=N.tag,H===5||H===6){d=M=N;continue e}z=z.parentNode}}d=d.return}li(function(){var le=M,_e=j(l),xe=[];e:{var ge=$0.get(n);if(ge!==void 0){var ke=rd,Xe=n;switch(n){case"keypress":if(Gl(l)===0)break e;case"keydown":case"keyup":ke=bx;break;case"focusin":Xe="focus",ke=ad;break;case"focusout":Xe="blur",ke=ad;break;case"beforeblur":case"afterblur":ke=ad;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ke=T0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ke=px;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ke=Rx;break;case j0:case X0:case q0:ke=_x;break;case Y0:ke=Nx;break;case"scroll":ke=fx;break;case"wheel":ke=Dx;break;case"copy":case"cut":case"paste":ke=xx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ke=A0}var $e=(r&4)!==0,an=!$e&&n==="scroll",te=$e?ge!==null?ge+"Capture":null:ge;$e=[];for(var X=le,ie;X!==null;){ie=X;var we=ie.stateNode;if(ie.tag===5&&we!==null&&(ie=we,te!==null&&(we=Vn(X,te),we!=null&&$e.push(La(X,we,ie)))),an)break;X=X.return}0<$e.length&&(ge=new ke(ge,Xe,null,l,_e),xe.push({event:ge,listeners:$e}))}}if((r&7)===0){e:{if(ge=n==="mouseover"||n==="pointerover",ke=n==="mouseout"||n==="pointerout",ge&&l!==ct&&(Xe=l.relatedTarget||l.fromElement)&&(As(Xe)||Xe[mr]))break e;if((ke||ge)&&(ge=_e.window===_e?_e:(ge=_e.ownerDocument)?ge.defaultView||ge.parentWindow:window,ke?(Xe=l.relatedTarget||l.toElement,ke=le,Xe=Xe?As(Xe):null,Xe!==null&&(an=wi(Xe),Xe!==an||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(ke=null,Xe=le),ke!==Xe)){if($e=T0,we="onMouseLeave",te="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&($e=A0,we="onPointerLeave",te="onPointerEnter",X="pointer"),an=ke==null?ge:_o(ke),ie=Xe==null?ge:_o(Xe),ge=new $e(we,X+"leave",ke,l,_e),ge.target=an,ge.relatedTarget=ie,we=null,As(_e)===le&&($e=new $e(te,X+"enter",Xe,l,_e),$e.target=ie,$e.relatedTarget=an,we=$e),an=we,ke&&Xe)t:{for($e=ke,te=Xe,X=0,ie=$e;ie;ie=mo(ie))X++;for(ie=0,we=te;we;we=mo(we))ie++;for(;0<X-ie;)$e=mo($e),X--;for(;0<ie-X;)te=mo(te),ie--;for(;X--;){if($e===te||te!==null&&$e===te.alternate)break t;$e=mo($e),te=mo(te)}$e=null}else $e=null;ke!==null&&em(xe,ge,ke,$e,!1),Xe!==null&&an!==null&&em(xe,an,Xe,$e,!0)}}e:{if(ge=le?_o(le):window,ke=ge.nodeName&&ge.nodeName.toLowerCase(),ke==="select"||ke==="input"&&ge.type==="file")var Ze=Bx;else if(D0(ge))if(U0)Ze=Wx;else{Ze=Hx;var et=Vx}else(ke=ge.nodeName)&&ke.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Ze=Gx);if(Ze&&(Ze=Ze(n,le))){I0(xe,Ze,l,_e);break e}et&&et(n,ge,le),n==="focusout"&&(et=ge._wrapperState)&&et.controlled&&ge.type==="number"&&qt(ge,"number",ge.value)}switch(et=le?_o(le):window,n){case"focusin":(D0(et)||et.contentEditable==="true")&&(ho=et,hd=le,Ra=null);break;case"focusout":Ra=hd=ho=null;break;case"mousedown":pd=!0;break;case"contextmenu":case"mouseup":case"dragend":pd=!1,G0(xe,l,_e);break;case"selectionchange":if(qx)break;case"keydown":case"keyup":G0(xe,l,_e)}var tt;if(cd)e:{switch(n){case"compositionstart":var st="onCompositionStart";break e;case"compositionend":st="onCompositionEnd";break e;case"compositionupdate":st="onCompositionUpdate";break e}st=void 0}else fo?N0(n,l)&&(st="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(st="onCompositionStart");st&&(C0&&l.locale!=="ko"&&(fo||st!=="onCompositionStart"?st==="onCompositionEnd"&&fo&&(tt=w0()):(Gr=_e,id="value"in Gr?Gr.value:Gr.textContent,fo=!0)),et=Kl(le,st),0<et.length&&(st=new b0(st,n,null,l,_e),xe.push({event:st,listeners:et}),tt?st.data=tt:(tt=L0(l),tt!==null&&(st.data=tt)))),(tt=Ux?Fx(n,l):Ox(n,l))&&(le=Kl(le,"onBeforeInput"),0<le.length&&(_e=new b0("onBeforeInput","beforeinput",null,l,_e),xe.push({event:_e,listeners:le}),_e.data=tt))}Q0(xe,r)})}function La(n,r,l){return{instance:n,listener:r,currentTarget:l}}function Kl(n,r){for(var l=r+"Capture",d=[];n!==null;){var g=n,M=g.stateNode;g.tag===5&&M!==null&&(g=M,M=Vn(n,l),M!=null&&d.unshift(La(n,M,g)),M=Vn(n,r),M!=null&&d.push(La(n,M,g))),n=n.return}return d}function mo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function em(n,r,l,d,g){for(var M=r._reactName,N=[];l!==null&&l!==d;){var z=l,H=z.alternate,le=z.stateNode;if(H!==null&&H===d)break;z.tag===5&&le!==null&&(z=le,g?(H=Vn(l,M),H!=null&&N.unshift(La(l,H,z))):g||(H=Vn(l,M),H!=null&&N.push(La(l,H,z)))),l=l.return}N.length!==0&&n.push({event:r,listeners:N})}var Zx=/\r\n?/g,Qx=/\u0000|\uFFFD/g;function tm(n){return(typeof n=="string"?n:""+n).replace(Zx,`
`).replace(Qx,"")}function Zl(n,r,l){if(r=tm(r),tm(n)!==r&&l)throw Error(t(425))}function Ql(){}var yd=null,Sd=null;function Md(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var wd=typeof setTimeout=="function"?setTimeout:void 0,Jx=typeof clearTimeout=="function"?clearTimeout:void 0,nm=typeof Promise=="function"?Promise:void 0,e2=typeof queueMicrotask=="function"?queueMicrotask:typeof nm<"u"?function(n){return nm.resolve(null).then(n).catch(t2)}:wd;function t2(n){setTimeout(function(){throw n})}function Ed(n,r){var l=r,d=0;do{var g=l.nextSibling;if(n.removeChild(l),g&&g.nodeType===8)if(l=g.data,l==="/$"){if(d===0){n.removeChild(g),Ma(r);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=g}while(l);Ma(r)}function jr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function im(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var go=Math.random().toString(36).slice(2),Qi="__reactFiber$"+go,Da="__reactProps$"+go,mr="__reactContainer$"+go,Td="__reactEvents$"+go,n2="__reactListeners$"+go,i2="__reactHandles$"+go;function As(n){var r=n[Qi];if(r)return r;for(var l=n.parentNode;l;){if(r=l[mr]||l[Qi]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=im(n);n!==null;){if(l=n[Qi])return l;n=im(n)}return r}n=l,l=n.parentNode}return null}function Ia(n){return n=n[Qi]||n[mr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function _o(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Jl(n){return n[Da]||null}var bd=[],vo=-1;function Xr(n){return{current:n}}function jt(n){0>vo||(n.current=bd[vo],bd[vo]=null,vo--)}function Gt(n,r){vo++,bd[vo]=n.current,n.current=r}var qr={},Ln=Xr(qr),$n=Xr(!1),Cs=qr;function xo(n,r){var l=n.type.contextTypes;if(!l)return qr;var d=n.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===r)return d.__reactInternalMemoizedMaskedChildContext;var g={},M;for(M in l)g[M]=r[M];return d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=g),g}function Kn(n){return n=n.childContextTypes,n!=null}function ec(){jt($n),jt(Ln)}function rm(n,r,l){if(Ln.current!==qr)throw Error(t(168));Gt(Ln,r),Gt($n,l)}function sm(n,r,l){var d=n.stateNode;if(r=r.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var g in d)if(!(g in r))throw Error(t(108,fe(n)||"Unknown",g));return re({},l,d)}function tc(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||qr,Cs=Ln.current,Gt(Ln,n),Gt($n,$n.current),!0}function om(n,r,l){var d=n.stateNode;if(!d)throw Error(t(169));l?(n=sm(n,r,Cs),d.__reactInternalMemoizedMergedChildContext=n,jt($n),jt(Ln),Gt(Ln,n)):jt($n),Gt($n,l)}var gr=null,nc=!1,Ad=!1;function am(n){gr===null?gr=[n]:gr.push(n)}function r2(n){nc=!0,am(n)}function Yr(){if(!Ad&&gr!==null){Ad=!0;var n=0,r=lt;try{var l=gr;for(lt=1;n<l.length;n++){var d=l[n];do d=d(!0);while(d!==null)}gr=null,nc=!1}catch(g){throw gr!==null&&(gr=gr.slice(n+1)),Fl(K,Yr),g}finally{lt=r,Ad=!1}}return null}var yo=[],So=0,ic=null,rc=0,Ei=[],Ti=0,Rs=null,_r=1,vr="";function Ps(n,r){yo[So++]=rc,yo[So++]=ic,ic=n,rc=r}function lm(n,r,l){Ei[Ti++]=_r,Ei[Ti++]=vr,Ei[Ti++]=Rs,Rs=n;var d=_r;n=vr;var g=32-ze(d)-1;d&=~(1<<g),l+=1;var M=32-ze(r)+g;if(30<M){var N=g-g%5;M=(d&(1<<N)-1).toString(32),d>>=N,g-=N,_r=1<<32-ze(r)+g|l<<g|d,vr=M+n}else _r=1<<M|l<<g|d,vr=n}function Cd(n){n.return!==null&&(Ps(n,1),lm(n,1,0))}function Rd(n){for(;n===ic;)ic=yo[--So],yo[So]=null,rc=yo[--So],yo[So]=null;for(;n===Rs;)Rs=Ei[--Ti],Ei[Ti]=null,vr=Ei[--Ti],Ei[Ti]=null,_r=Ei[--Ti],Ei[Ti]=null}var ui=null,di=null,Yt=!1,Vi=null;function cm(n,r){var l=Ri(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function um(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,ui=n,di=jr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,ui=n,di=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=Rs!==null?{id:_r,overflow:vr}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=Ri(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,ui=n,di=null,!0):!1;default:return!1}}function Pd(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Nd(n){if(Yt){var r=di;if(r){var l=r;if(!um(n,r)){if(Pd(n))throw Error(t(418));r=jr(l.nextSibling);var d=ui;r&&um(n,r)?cm(d,l):(n.flags=n.flags&-4097|2,Yt=!1,ui=n)}}else{if(Pd(n))throw Error(t(418));n.flags=n.flags&-4097|2,Yt=!1,ui=n}}}function dm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ui=n}function sc(n){if(n!==ui)return!1;if(!Yt)return dm(n),Yt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Md(n.type,n.memoizedProps)),r&&(r=di)){if(Pd(n))throw fm(),Error(t(418));for(;r;)cm(n,r),r=jr(r.nextSibling)}if(dm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){di=jr(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}di=null}}else di=ui?jr(n.stateNode.nextSibling):null;return!0}function fm(){for(var n=di;n;)n=jr(n.nextSibling)}function Mo(){di=ui=null,Yt=!1}function Ld(n){Vi===null?Vi=[n]:Vi.push(n)}var s2=b.ReactCurrentBatchConfig;function Ua(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var d=l.stateNode}if(!d)throw Error(t(147,n));var g=d,M=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===M?r.ref:(r=function(N){var z=g.refs;N===null?delete z[M]:z[M]=N},r._stringRef=M,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function oc(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function hm(n){var r=n._init;return r(n._payload)}function pm(n){function r(te,X){if(n){var ie=te.deletions;ie===null?(te.deletions=[X],te.flags|=16):ie.push(X)}}function l(te,X){if(!n)return null;for(;X!==null;)r(te,X),X=X.sibling;return null}function d(te,X){for(te=new Map;X!==null;)X.key!==null?te.set(X.key,X):te.set(X.index,X),X=X.sibling;return te}function g(te,X){return te=ns(te,X),te.index=0,te.sibling=null,te}function M(te,X,ie){return te.index=ie,n?(ie=te.alternate,ie!==null?(ie=ie.index,ie<X?(te.flags|=2,X):ie):(te.flags|=2,X)):(te.flags|=1048576,X)}function N(te){return n&&te.alternate===null&&(te.flags|=2),te}function z(te,X,ie,we){return X===null||X.tag!==6?(X=Ef(ie,te.mode,we),X.return=te,X):(X=g(X,ie),X.return=te,X)}function H(te,X,ie,we){var Ze=ie.type;return Ze===I?_e(te,X,ie.props.children,we,ie.key):X!==null&&(X.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===Q&&hm(Ze)===X.type)?(we=g(X,ie.props),we.ref=Ua(te,X,ie),we.return=te,we):(we=Pc(ie.type,ie.key,ie.props,null,te.mode,we),we.ref=Ua(te,X,ie),we.return=te,we)}function le(te,X,ie,we){return X===null||X.tag!==4||X.stateNode.containerInfo!==ie.containerInfo||X.stateNode.implementation!==ie.implementation?(X=Tf(ie,te.mode,we),X.return=te,X):(X=g(X,ie.children||[]),X.return=te,X)}function _e(te,X,ie,we,Ze){return X===null||X.tag!==7?(X=ks(ie,te.mode,we,Ze),X.return=te,X):(X=g(X,ie),X.return=te,X)}function xe(te,X,ie){if(typeof X=="string"&&X!==""||typeof X=="number")return X=Ef(""+X,te.mode,ie),X.return=te,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case P:return ie=Pc(X.type,X.key,X.props,null,te.mode,ie),ie.ref=Ua(te,null,X),ie.return=te,ie;case D:return X=Tf(X,te.mode,ie),X.return=te,X;case Q:var we=X._init;return xe(te,we(X._payload),ie)}if(vt(X)||de(X))return X=ks(X,te.mode,ie,null),X.return=te,X;oc(te,X)}return null}function ge(te,X,ie,we){var Ze=X!==null?X.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number")return Ze!==null?null:z(te,X,""+ie,we);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case P:return ie.key===Ze?H(te,X,ie,we):null;case D:return ie.key===Ze?le(te,X,ie,we):null;case Q:return Ze=ie._init,ge(te,X,Ze(ie._payload),we)}if(vt(ie)||de(ie))return Ze!==null?null:_e(te,X,ie,we,null);oc(te,ie)}return null}function ke(te,X,ie,we,Ze){if(typeof we=="string"&&we!==""||typeof we=="number")return te=te.get(ie)||null,z(X,te,""+we,Ze);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case P:return te=te.get(we.key===null?ie:we.key)||null,H(X,te,we,Ze);case D:return te=te.get(we.key===null?ie:we.key)||null,le(X,te,we,Ze);case Q:var et=we._init;return ke(te,X,ie,et(we._payload),Ze)}if(vt(we)||de(we))return te=te.get(ie)||null,_e(X,te,we,Ze,null);oc(X,we)}return null}function Xe(te,X,ie,we){for(var Ze=null,et=null,tt=X,st=X=0,En=null;tt!==null&&st<ie.length;st++){tt.index>st?(En=tt,tt=null):En=tt.sibling;var Pt=ge(te,tt,ie[st],we);if(Pt===null){tt===null&&(tt=En);break}n&&tt&&Pt.alternate===null&&r(te,tt),X=M(Pt,X,st),et===null?Ze=Pt:et.sibling=Pt,et=Pt,tt=En}if(st===ie.length)return l(te,tt),Yt&&Ps(te,st),Ze;if(tt===null){for(;st<ie.length;st++)tt=xe(te,ie[st],we),tt!==null&&(X=M(tt,X,st),et===null?Ze=tt:et.sibling=tt,et=tt);return Yt&&Ps(te,st),Ze}for(tt=d(te,tt);st<ie.length;st++)En=ke(tt,te,st,ie[st],we),En!==null&&(n&&En.alternate!==null&&tt.delete(En.key===null?st:En.key),X=M(En,X,st),et===null?Ze=En:et.sibling=En,et=En);return n&&tt.forEach(function(is){return r(te,is)}),Yt&&Ps(te,st),Ze}function $e(te,X,ie,we){var Ze=de(ie);if(typeof Ze!="function")throw Error(t(150));if(ie=Ze.call(ie),ie==null)throw Error(t(151));for(var et=Ze=null,tt=X,st=X=0,En=null,Pt=ie.next();tt!==null&&!Pt.done;st++,Pt=ie.next()){tt.index>st?(En=tt,tt=null):En=tt.sibling;var is=ge(te,tt,Pt.value,we);if(is===null){tt===null&&(tt=En);break}n&&tt&&is.alternate===null&&r(te,tt),X=M(is,X,st),et===null?Ze=is:et.sibling=is,et=is,tt=En}if(Pt.done)return l(te,tt),Yt&&Ps(te,st),Ze;if(tt===null){for(;!Pt.done;st++,Pt=ie.next())Pt=xe(te,Pt.value,we),Pt!==null&&(X=M(Pt,X,st),et===null?Ze=Pt:et.sibling=Pt,et=Pt);return Yt&&Ps(te,st),Ze}for(tt=d(te,tt);!Pt.done;st++,Pt=ie.next())Pt=ke(tt,te,st,Pt.value,we),Pt!==null&&(n&&Pt.alternate!==null&&tt.delete(Pt.key===null?st:Pt.key),X=M(Pt,X,st),et===null?Ze=Pt:et.sibling=Pt,et=Pt);return n&&tt.forEach(function(k2){return r(te,k2)}),Yt&&Ps(te,st),Ze}function an(te,X,ie,we){if(typeof ie=="object"&&ie!==null&&ie.type===I&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case P:e:{for(var Ze=ie.key,et=X;et!==null;){if(et.key===Ze){if(Ze=ie.type,Ze===I){if(et.tag===7){l(te,et.sibling),X=g(et,ie.props.children),X.return=te,te=X;break e}}else if(et.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===Q&&hm(Ze)===et.type){l(te,et.sibling),X=g(et,ie.props),X.ref=Ua(te,et,ie),X.return=te,te=X;break e}l(te,et);break}else r(te,et);et=et.sibling}ie.type===I?(X=ks(ie.props.children,te.mode,we,ie.key),X.return=te,te=X):(we=Pc(ie.type,ie.key,ie.props,null,te.mode,we),we.ref=Ua(te,X,ie),we.return=te,te=we)}return N(te);case D:e:{for(et=ie.key;X!==null;){if(X.key===et)if(X.tag===4&&X.stateNode.containerInfo===ie.containerInfo&&X.stateNode.implementation===ie.implementation){l(te,X.sibling),X=g(X,ie.children||[]),X.return=te,te=X;break e}else{l(te,X);break}else r(te,X);X=X.sibling}X=Tf(ie,te.mode,we),X.return=te,te=X}return N(te);case Q:return et=ie._init,an(te,X,et(ie._payload),we)}if(vt(ie))return Xe(te,X,ie,we);if(de(ie))return $e(te,X,ie,we);oc(te,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"?(ie=""+ie,X!==null&&X.tag===6?(l(te,X.sibling),X=g(X,ie),X.return=te,te=X):(l(te,X),X=Ef(ie,te.mode,we),X.return=te,te=X),N(te)):l(te,X)}return an}var wo=pm(!0),mm=pm(!1),ac=Xr(null),lc=null,Eo=null,Dd=null;function Id(){Dd=Eo=lc=null}function Ud(n){var r=ac.current;jt(ac),n._currentValue=r}function Fd(n,r,l){for(;n!==null;){var d=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,d!==null&&(d.childLanes|=r)):d!==null&&(d.childLanes&r)!==r&&(d.childLanes|=r),n===l)break;n=n.return}}function To(n,r){lc=n,Dd=Eo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Zn=!0),n.firstContext=null)}function bi(n){var r=n._currentValue;if(Dd!==n)if(n={context:n,memoizedValue:r,next:null},Eo===null){if(lc===null)throw Error(t(308));Eo=n,lc.dependencies={lanes:0,firstContext:n}}else Eo=Eo.next=n;return r}var Ns=null;function Od(n){Ns===null?Ns=[n]:Ns.push(n)}function gm(n,r,l,d){var g=r.interleaved;return g===null?(l.next=l,Od(r)):(l.next=g.next,g.next=l),r.interleaved=l,xr(n,d)}function xr(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var $r=!1;function kd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _m(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function yr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Kr(n,r,l){var d=n.updateQueue;if(d===null)return null;if(d=d.shared,(bt&2)!==0){var g=d.pending;return g===null?r.next=r:(r.next=g.next,g.next=r),d.pending=r,xr(n,l)}return g=d.interleaved,g===null?(r.next=r,Od(d)):(r.next=g.next,g.next=r),d.interleaved=r,xr(n,l)}function cc(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var d=r.lanes;d&=n.pendingLanes,l|=d,r.lanes=l,Ut(n,l)}}function vm(n,r){var l=n.updateQueue,d=n.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var g=null,M=null;if(l=l.firstBaseUpdate,l!==null){do{var N={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};M===null?g=M=N:M=M.next=N,l=l.next}while(l!==null);M===null?g=M=r:M=M.next=r}else g=M=r;l={baseState:d.baseState,firstBaseUpdate:g,lastBaseUpdate:M,shared:d.shared,effects:d.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function uc(n,r,l,d){var g=n.updateQueue;$r=!1;var M=g.firstBaseUpdate,N=g.lastBaseUpdate,z=g.shared.pending;if(z!==null){g.shared.pending=null;var H=z,le=H.next;H.next=null,N===null?M=le:N.next=le,N=H;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,z=_e.lastBaseUpdate,z!==N&&(z===null?_e.firstBaseUpdate=le:z.next=le,_e.lastBaseUpdate=H))}if(M!==null){var xe=g.baseState;N=0,_e=le=H=null,z=M;do{var ge=z.lane,ke=z.eventTime;if((d&ge)===ge){_e!==null&&(_e=_e.next={eventTime:ke,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var Xe=n,$e=z;switch(ge=r,ke=l,$e.tag){case 1:if(Xe=$e.payload,typeof Xe=="function"){xe=Xe.call(ke,xe,ge);break e}xe=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=$e.payload,ge=typeof Xe=="function"?Xe.call(ke,xe,ge):Xe,ge==null)break e;xe=re({},xe,ge);break e;case 2:$r=!0}}z.callback!==null&&z.lane!==0&&(n.flags|=64,ge=g.effects,ge===null?g.effects=[z]:ge.push(z))}else ke={eventTime:ke,lane:ge,tag:z.tag,payload:z.payload,callback:z.callback,next:null},_e===null?(le=_e=ke,H=xe):_e=_e.next=ke,N|=ge;if(z=z.next,z===null){if(z=g.shared.pending,z===null)break;ge=z,z=ge.next,ge.next=null,g.lastBaseUpdate=ge,g.shared.pending=null}}while(!0);if(_e===null&&(H=xe),g.baseState=H,g.firstBaseUpdate=le,g.lastBaseUpdate=_e,r=g.shared.interleaved,r!==null){g=r;do N|=g.lane,g=g.next;while(g!==r)}else M===null&&(g.shared.lanes=0);Is|=N,n.lanes=N,n.memoizedState=xe}}function xm(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var d=n[r],g=d.callback;if(g!==null){if(d.callback=null,d=l,typeof g!="function")throw Error(t(191,g));g.call(d)}}}var Fa={},Ji=Xr(Fa),Oa=Xr(Fa),ka=Xr(Fa);function Ls(n){if(n===Fa)throw Error(t(174));return n}function zd(n,r){switch(Gt(ka,r),Gt(Oa,n),Gt(Ji,Fa),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:me(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=me(r,n)}jt(Ji),Gt(Ji,r)}function bo(){jt(Ji),jt(Oa),jt(ka)}function ym(n){Ls(ka.current);var r=Ls(Ji.current),l=me(r,n.type);r!==l&&(Gt(Oa,n),Gt(Ji,l))}function Bd(n){Oa.current===n&&(jt(Ji),jt(Oa))}var Zt=Xr(0);function dc(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Vd=[];function Hd(){for(var n=0;n<Vd.length;n++)Vd[n]._workInProgressVersionPrimary=null;Vd.length=0}var fc=b.ReactCurrentDispatcher,Gd=b.ReactCurrentBatchConfig,Ds=0,Qt=null,pn=null,Mn=null,hc=!1,za=!1,Ba=0,o2=0;function Dn(){throw Error(t(321))}function Wd(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!Bi(n[l],r[l]))return!1;return!0}function jd(n,r,l,d,g,M){if(Ds=M,Qt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,fc.current=n===null||n.memoizedState===null?u2:d2,n=l(d,g),za){M=0;do{if(za=!1,Ba=0,25<=M)throw Error(t(301));M+=1,Mn=pn=null,r.updateQueue=null,fc.current=f2,n=l(d,g)}while(za)}if(fc.current=gc,r=pn!==null&&pn.next!==null,Ds=0,Mn=pn=Qt=null,hc=!1,r)throw Error(t(300));return n}function Xd(){var n=Ba!==0;return Ba=0,n}function er(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mn===null?Qt.memoizedState=Mn=n:Mn=Mn.next=n,Mn}function Ai(){if(pn===null){var n=Qt.alternate;n=n!==null?n.memoizedState:null}else n=pn.next;var r=Mn===null?Qt.memoizedState:Mn.next;if(r!==null)Mn=r,pn=n;else{if(n===null)throw Error(t(310));pn=n,n={memoizedState:pn.memoizedState,baseState:pn.baseState,baseQueue:pn.baseQueue,queue:pn.queue,next:null},Mn===null?Qt.memoizedState=Mn=n:Mn=Mn.next=n}return Mn}function Va(n,r){return typeof r=="function"?r(n):r}function qd(n){var r=Ai(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var d=pn,g=d.baseQueue,M=l.pending;if(M!==null){if(g!==null){var N=g.next;g.next=M.next,M.next=N}d.baseQueue=g=M,l.pending=null}if(g!==null){M=g.next,d=d.baseState;var z=N=null,H=null,le=M;do{var _e=le.lane;if((Ds&_e)===_e)H!==null&&(H=H.next={lane:0,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),d=le.hasEagerState?le.eagerState:n(d,le.action);else{var xe={lane:_e,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null};H===null?(z=H=xe,N=d):H=H.next=xe,Qt.lanes|=_e,Is|=_e}le=le.next}while(le!==null&&le!==M);H===null?N=d:H.next=z,Bi(d,r.memoizedState)||(Zn=!0),r.memoizedState=d,r.baseState=N,r.baseQueue=H,l.lastRenderedState=d}if(n=l.interleaved,n!==null){g=n;do M=g.lane,Qt.lanes|=M,Is|=M,g=g.next;while(g!==n)}else g===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function Yd(n){var r=Ai(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var d=l.dispatch,g=l.pending,M=r.memoizedState;if(g!==null){l.pending=null;var N=g=g.next;do M=n(M,N.action),N=N.next;while(N!==g);Bi(M,r.memoizedState)||(Zn=!0),r.memoizedState=M,r.baseQueue===null&&(r.baseState=M),l.lastRenderedState=M}return[M,d]}function Sm(){}function Mm(n,r){var l=Qt,d=Ai(),g=r(),M=!Bi(d.memoizedState,g);if(M&&(d.memoizedState=g,Zn=!0),d=d.queue,$d(Tm.bind(null,l,d,n),[n]),d.getSnapshot!==r||M||Mn!==null&&Mn.memoizedState.tag&1){if(l.flags|=2048,Ha(9,Em.bind(null,l,d,g,r),void 0,null),wn===null)throw Error(t(349));(Ds&30)!==0||wm(l,r,g)}return g}function wm(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=Qt.updateQueue,r===null?(r={lastEffect:null,stores:null},Qt.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function Em(n,r,l,d){r.value=l,r.getSnapshot=d,bm(r)&&Am(n)}function Tm(n,r,l){return l(function(){bm(r)&&Am(n)})}function bm(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!Bi(n,l)}catch{return!0}}function Am(n){var r=xr(n,1);r!==null&&ji(r,n,1,-1)}function Cm(n){var r=er();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:n},r.queue=n,n=n.dispatch=c2.bind(null,Qt,n),[r.memoizedState,n]}function Ha(n,r,l,d){return n={tag:n,create:r,destroy:l,deps:d,next:null},r=Qt.updateQueue,r===null?(r={lastEffect:null,stores:null},Qt.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(d=l.next,l.next=n,n.next=d,r.lastEffect=n)),n}function Rm(){return Ai().memoizedState}function pc(n,r,l,d){var g=er();Qt.flags|=n,g.memoizedState=Ha(1|r,l,void 0,d===void 0?null:d)}function mc(n,r,l,d){var g=Ai();d=d===void 0?null:d;var M=void 0;if(pn!==null){var N=pn.memoizedState;if(M=N.destroy,d!==null&&Wd(d,N.deps)){g.memoizedState=Ha(r,l,M,d);return}}Qt.flags|=n,g.memoizedState=Ha(1|r,l,M,d)}function Pm(n,r){return pc(8390656,8,n,r)}function $d(n,r){return mc(2048,8,n,r)}function Nm(n,r){return mc(4,2,n,r)}function Lm(n,r){return mc(4,4,n,r)}function Dm(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Im(n,r,l){return l=l!=null?l.concat([n]):null,mc(4,4,Dm.bind(null,r,n),l)}function Kd(){}function Um(n,r){var l=Ai();r=r===void 0?null:r;var d=l.memoizedState;return d!==null&&r!==null&&Wd(r,d[1])?d[0]:(l.memoizedState=[n,r],n)}function Fm(n,r){var l=Ai();r=r===void 0?null:r;var d=l.memoizedState;return d!==null&&r!==null&&Wd(r,d[1])?d[0]:(n=n(),l.memoizedState=[n,r],n)}function Om(n,r,l){return(Ds&21)===0?(n.baseState&&(n.baseState=!1,Zn=!0),n.memoizedState=l):(Bi(l,r)||(l=Nn(),Qt.lanes|=l,Is|=l,n.baseState=!0),r)}function a2(n,r){var l=lt;lt=l!==0&&4>l?l:4,n(!0);var d=Gd.transition;Gd.transition={};try{n(!1),r()}finally{lt=l,Gd.transition=d}}function km(){return Ai().memoizedState}function l2(n,r,l){var d=es(n);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},zm(n))Bm(r,l);else if(l=gm(n,r,l,d),l!==null){var g=Wn();ji(l,n,d,g),Vm(l,r,d)}}function c2(n,r,l){var d=es(n),g={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(zm(n))Bm(r,g);else{var M=n.alternate;if(n.lanes===0&&(M===null||M.lanes===0)&&(M=r.lastRenderedReducer,M!==null))try{var N=r.lastRenderedState,z=M(N,l);if(g.hasEagerState=!0,g.eagerState=z,Bi(z,N)){var H=r.interleaved;H===null?(g.next=g,Od(r)):(g.next=H.next,H.next=g),r.interleaved=g;return}}catch{}finally{}l=gm(n,r,g,d),l!==null&&(g=Wn(),ji(l,n,d,g),Vm(l,r,d))}}function zm(n){var r=n.alternate;return n===Qt||r!==null&&r===Qt}function Bm(n,r){za=hc=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function Vm(n,r,l){if((l&4194240)!==0){var d=r.lanes;d&=n.pendingLanes,l|=d,r.lanes=l,Ut(n,l)}}var gc={readContext:bi,useCallback:Dn,useContext:Dn,useEffect:Dn,useImperativeHandle:Dn,useInsertionEffect:Dn,useLayoutEffect:Dn,useMemo:Dn,useReducer:Dn,useRef:Dn,useState:Dn,useDebugValue:Dn,useDeferredValue:Dn,useTransition:Dn,useMutableSource:Dn,useSyncExternalStore:Dn,useId:Dn,unstable_isNewReconciler:!1},u2={readContext:bi,useCallback:function(n,r){return er().memoizedState=[n,r===void 0?null:r],n},useContext:bi,useEffect:Pm,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,pc(4194308,4,Dm.bind(null,r,n),l)},useLayoutEffect:function(n,r){return pc(4194308,4,n,r)},useInsertionEffect:function(n,r){return pc(4,2,n,r)},useMemo:function(n,r){var l=er();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var d=er();return r=l!==void 0?l(r):r,d.memoizedState=d.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},d.queue=n,n=n.dispatch=l2.bind(null,Qt,n),[d.memoizedState,n]},useRef:function(n){var r=er();return n={current:n},r.memoizedState=n},useState:Cm,useDebugValue:Kd,useDeferredValue:function(n){return er().memoizedState=n},useTransition:function(){var n=Cm(!1),r=n[0];return n=a2.bind(null,n[1]),er().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var d=Qt,g=er();if(Yt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),wn===null)throw Error(t(349));(Ds&30)!==0||wm(d,r,l)}g.memoizedState=l;var M={value:l,getSnapshot:r};return g.queue=M,Pm(Tm.bind(null,d,M,n),[n]),d.flags|=2048,Ha(9,Em.bind(null,d,M,l,r),void 0,null),l},useId:function(){var n=er(),r=wn.identifierPrefix;if(Yt){var l=vr,d=_r;l=(d&~(1<<32-ze(d)-1)).toString(32)+l,r=":"+r+"R"+l,l=Ba++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=o2++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},d2={readContext:bi,useCallback:Um,useContext:bi,useEffect:$d,useImperativeHandle:Im,useInsertionEffect:Nm,useLayoutEffect:Lm,useMemo:Fm,useReducer:qd,useRef:Rm,useState:function(){return qd(Va)},useDebugValue:Kd,useDeferredValue:function(n){var r=Ai();return Om(r,pn.memoizedState,n)},useTransition:function(){var n=qd(Va)[0],r=Ai().memoizedState;return[n,r]},useMutableSource:Sm,useSyncExternalStore:Mm,useId:km,unstable_isNewReconciler:!1},f2={readContext:bi,useCallback:Um,useContext:bi,useEffect:$d,useImperativeHandle:Im,useInsertionEffect:Nm,useLayoutEffect:Lm,useMemo:Fm,useReducer:Yd,useRef:Rm,useState:function(){return Yd(Va)},useDebugValue:Kd,useDeferredValue:function(n){var r=Ai();return pn===null?r.memoizedState=n:Om(r,pn.memoizedState,n)},useTransition:function(){var n=Yd(Va)[0],r=Ai().memoizedState;return[n,r]},useMutableSource:Sm,useSyncExternalStore:Mm,useId:km,unstable_isNewReconciler:!1};function Hi(n,r){if(n&&n.defaultProps){r=re({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function Zd(n,r,l,d){r=n.memoizedState,l=l(d,r),l=l==null?r:re({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var _c={isMounted:function(n){return(n=n._reactInternals)?wi(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var d=Wn(),g=es(n),M=yr(d,g);M.payload=r,l!=null&&(M.callback=l),r=Kr(n,M,g),r!==null&&(ji(r,n,g,d),cc(r,n,g))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var d=Wn(),g=es(n),M=yr(d,g);M.tag=1,M.payload=r,l!=null&&(M.callback=l),r=Kr(n,M,g),r!==null&&(ji(r,n,g,d),cc(r,n,g))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=Wn(),d=es(n),g=yr(l,d);g.tag=2,r!=null&&(g.callback=r),r=Kr(n,g,d),r!==null&&(ji(r,n,d,l),cc(r,n,d))}};function Hm(n,r,l,d,g,M,N){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(d,M,N):r.prototype&&r.prototype.isPureReactComponent?!Ca(l,d)||!Ca(g,M):!0}function Gm(n,r,l){var d=!1,g=qr,M=r.contextType;return typeof M=="object"&&M!==null?M=bi(M):(g=Kn(r)?Cs:Ln.current,d=r.contextTypes,M=(d=d!=null)?xo(n,g):qr),r=new r(l,M),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=_c,n.stateNode=r,r._reactInternals=n,d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=g,n.__reactInternalMemoizedMaskedChildContext=M),r}function Wm(n,r,l,d){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,d),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,d),r.state!==n&&_c.enqueueReplaceState(r,r.state,null)}function Qd(n,r,l,d){var g=n.stateNode;g.props=l,g.state=n.memoizedState,g.refs={},kd(n);var M=r.contextType;typeof M=="object"&&M!==null?g.context=bi(M):(M=Kn(r)?Cs:Ln.current,g.context=xo(n,M)),g.state=n.memoizedState,M=r.getDerivedStateFromProps,typeof M=="function"&&(Zd(n,r,M,l),g.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(r=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),r!==g.state&&_c.enqueueReplaceState(g,g.state,null),uc(n,l,g,d),g.state=n.memoizedState),typeof g.componentDidMount=="function"&&(n.flags|=4194308)}function Ao(n,r){try{var l="",d=r;do l+=Be(d),d=d.return;while(d);var g=l}catch(M){g=`
Error generating stack: `+M.message+`
`+M.stack}return{value:n,source:r,stack:g,digest:null}}function Jd(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function ef(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var h2=typeof WeakMap=="function"?WeakMap:Map;function jm(n,r,l){l=yr(-1,l),l.tag=3,l.payload={element:null};var d=r.value;return l.callback=function(){Ec||(Ec=!0,gf=d),ef(n,r)},l}function Xm(n,r,l){l=yr(-1,l),l.tag=3;var d=n.type.getDerivedStateFromError;if(typeof d=="function"){var g=r.value;l.payload=function(){return d(g)},l.callback=function(){ef(n,r)}}var M=n.stateNode;return M!==null&&typeof M.componentDidCatch=="function"&&(l.callback=function(){ef(n,r),typeof d!="function"&&(Qr===null?Qr=new Set([this]):Qr.add(this));var N=r.stack;this.componentDidCatch(r.value,{componentStack:N!==null?N:""})}),l}function qm(n,r,l){var d=n.pingCache;if(d===null){d=n.pingCache=new h2;var g=new Set;d.set(r,g)}else g=d.get(r),g===void 0&&(g=new Set,d.set(r,g));g.has(l)||(g.add(l),n=A2.bind(null,n,r,l),r.then(n,n))}function Ym(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function $m(n,r,l,d,g){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=yr(-1,1),r.tag=2,Kr(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=g,n)}var p2=b.ReactCurrentOwner,Zn=!1;function Gn(n,r,l,d){r.child=n===null?mm(r,null,l,d):wo(r,n.child,l,d)}function Km(n,r,l,d,g){l=l.render;var M=r.ref;return To(r,g),d=jd(n,r,l,d,M,g),l=Xd(),n!==null&&!Zn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~g,Sr(n,r,g)):(Yt&&l&&Cd(r),r.flags|=1,Gn(n,r,d,g),r.child)}function Zm(n,r,l,d,g){if(n===null){var M=l.type;return typeof M=="function"&&!wf(M)&&M.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=M,Qm(n,r,M,d,g)):(n=Pc(l.type,null,d,r,r.mode,g),n.ref=r.ref,n.return=r,r.child=n)}if(M=n.child,(n.lanes&g)===0){var N=M.memoizedProps;if(l=l.compare,l=l!==null?l:Ca,l(N,d)&&n.ref===r.ref)return Sr(n,r,g)}return r.flags|=1,n=ns(M,d),n.ref=r.ref,n.return=r,r.child=n}function Qm(n,r,l,d,g){if(n!==null){var M=n.memoizedProps;if(Ca(M,d)&&n.ref===r.ref)if(Zn=!1,r.pendingProps=d=M,(n.lanes&g)!==0)(n.flags&131072)!==0&&(Zn=!0);else return r.lanes=n.lanes,Sr(n,r,g)}return tf(n,r,l,d,g)}function Jm(n,r,l){var d=r.pendingProps,g=d.children,M=n!==null?n.memoizedState:null;if(d.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Gt(Ro,fi),fi|=l;else{if((l&1073741824)===0)return n=M!==null?M.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Gt(Ro,fi),fi|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=M!==null?M.baseLanes:l,Gt(Ro,fi),fi|=d}else M!==null?(d=M.baseLanes|l,r.memoizedState=null):d=l,Gt(Ro,fi),fi|=d;return Gn(n,r,g,l),r.child}function eg(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function tf(n,r,l,d,g){var M=Kn(l)?Cs:Ln.current;return M=xo(r,M),To(r,g),l=jd(n,r,l,d,M,g),d=Xd(),n!==null&&!Zn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~g,Sr(n,r,g)):(Yt&&d&&Cd(r),r.flags|=1,Gn(n,r,l,g),r.child)}function tg(n,r,l,d,g){if(Kn(l)){var M=!0;tc(r)}else M=!1;if(To(r,g),r.stateNode===null)xc(n,r),Gm(r,l,d),Qd(r,l,d,g),d=!0;else if(n===null){var N=r.stateNode,z=r.memoizedProps;N.props=z;var H=N.context,le=l.contextType;typeof le=="object"&&le!==null?le=bi(le):(le=Kn(l)?Cs:Ln.current,le=xo(r,le));var _e=l.getDerivedStateFromProps,xe=typeof _e=="function"||typeof N.getSnapshotBeforeUpdate=="function";xe||typeof N.UNSAFE_componentWillReceiveProps!="function"&&typeof N.componentWillReceiveProps!="function"||(z!==d||H!==le)&&Wm(r,N,d,le),$r=!1;var ge=r.memoizedState;N.state=ge,uc(r,d,N,g),H=r.memoizedState,z!==d||ge!==H||$n.current||$r?(typeof _e=="function"&&(Zd(r,l,_e,d),H=r.memoizedState),(z=$r||Hm(r,l,z,d,ge,H,le))?(xe||typeof N.UNSAFE_componentWillMount!="function"&&typeof N.componentWillMount!="function"||(typeof N.componentWillMount=="function"&&N.componentWillMount(),typeof N.UNSAFE_componentWillMount=="function"&&N.UNSAFE_componentWillMount()),typeof N.componentDidMount=="function"&&(r.flags|=4194308)):(typeof N.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=d,r.memoizedState=H),N.props=d,N.state=H,N.context=le,d=z):(typeof N.componentDidMount=="function"&&(r.flags|=4194308),d=!1)}else{N=r.stateNode,_m(n,r),z=r.memoizedProps,le=r.type===r.elementType?z:Hi(r.type,z),N.props=le,xe=r.pendingProps,ge=N.context,H=l.contextType,typeof H=="object"&&H!==null?H=bi(H):(H=Kn(l)?Cs:Ln.current,H=xo(r,H));var ke=l.getDerivedStateFromProps;(_e=typeof ke=="function"||typeof N.getSnapshotBeforeUpdate=="function")||typeof N.UNSAFE_componentWillReceiveProps!="function"&&typeof N.componentWillReceiveProps!="function"||(z!==xe||ge!==H)&&Wm(r,N,d,H),$r=!1,ge=r.memoizedState,N.state=ge,uc(r,d,N,g);var Xe=r.memoizedState;z!==xe||ge!==Xe||$n.current||$r?(typeof ke=="function"&&(Zd(r,l,ke,d),Xe=r.memoizedState),(le=$r||Hm(r,l,le,d,ge,Xe,H)||!1)?(_e||typeof N.UNSAFE_componentWillUpdate!="function"&&typeof N.componentWillUpdate!="function"||(typeof N.componentWillUpdate=="function"&&N.componentWillUpdate(d,Xe,H),typeof N.UNSAFE_componentWillUpdate=="function"&&N.UNSAFE_componentWillUpdate(d,Xe,H)),typeof N.componentDidUpdate=="function"&&(r.flags|=4),typeof N.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof N.componentDidUpdate!="function"||z===n.memoizedProps&&ge===n.memoizedState||(r.flags|=4),typeof N.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&ge===n.memoizedState||(r.flags|=1024),r.memoizedProps=d,r.memoizedState=Xe),N.props=d,N.state=Xe,N.context=H,d=le):(typeof N.componentDidUpdate!="function"||z===n.memoizedProps&&ge===n.memoizedState||(r.flags|=4),typeof N.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&ge===n.memoizedState||(r.flags|=1024),d=!1)}return nf(n,r,l,d,M,g)}function nf(n,r,l,d,g,M){eg(n,r);var N=(r.flags&128)!==0;if(!d&&!N)return g&&om(r,l,!1),Sr(n,r,M);d=r.stateNode,p2.current=r;var z=N&&typeof l.getDerivedStateFromError!="function"?null:d.render();return r.flags|=1,n!==null&&N?(r.child=wo(r,n.child,null,M),r.child=wo(r,null,z,M)):Gn(n,r,z,M),r.memoizedState=d.state,g&&om(r,l,!0),r.child}function ng(n){var r=n.stateNode;r.pendingContext?rm(n,r.pendingContext,r.pendingContext!==r.context):r.context&&rm(n,r.context,!1),zd(n,r.containerInfo)}function ig(n,r,l,d,g){return Mo(),Ld(g),r.flags|=256,Gn(n,r,l,d),r.child}var rf={dehydrated:null,treeContext:null,retryLane:0};function sf(n){return{baseLanes:n,cachePool:null,transitions:null}}function rg(n,r,l){var d=r.pendingProps,g=Zt.current,M=!1,N=(r.flags&128)!==0,z;if((z=N)||(z=n!==null&&n.memoizedState===null?!1:(g&2)!==0),z?(M=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(g|=1),Gt(Zt,g&1),n===null)return Nd(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(N=d.children,n=d.fallback,M?(d=r.mode,M=r.child,N={mode:"hidden",children:N},(d&1)===0&&M!==null?(M.childLanes=0,M.pendingProps=N):M=Nc(N,d,0,null),n=ks(n,d,l,null),M.return=r,n.return=r,M.sibling=n,r.child=M,r.child.memoizedState=sf(l),r.memoizedState=rf,n):of(r,N));if(g=n.memoizedState,g!==null&&(z=g.dehydrated,z!==null))return m2(n,r,N,d,z,g,l);if(M){M=d.fallback,N=r.mode,g=n.child,z=g.sibling;var H={mode:"hidden",children:d.children};return(N&1)===0&&r.child!==g?(d=r.child,d.childLanes=0,d.pendingProps=H,r.deletions=null):(d=ns(g,H),d.subtreeFlags=g.subtreeFlags&14680064),z!==null?M=ns(z,M):(M=ks(M,N,l,null),M.flags|=2),M.return=r,d.return=r,d.sibling=M,r.child=d,d=M,M=r.child,N=n.child.memoizedState,N=N===null?sf(l):{baseLanes:N.baseLanes|l,cachePool:null,transitions:N.transitions},M.memoizedState=N,M.childLanes=n.childLanes&~l,r.memoizedState=rf,d}return M=n.child,n=M.sibling,d=ns(M,{mode:"visible",children:d.children}),(r.mode&1)===0&&(d.lanes=l),d.return=r,d.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=d,r.memoizedState=null,d}function of(n,r){return r=Nc({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function vc(n,r,l,d){return d!==null&&Ld(d),wo(r,n.child,null,l),n=of(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function m2(n,r,l,d,g,M,N){if(l)return r.flags&256?(r.flags&=-257,d=Jd(Error(t(422))),vc(n,r,N,d)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(M=d.fallback,g=r.mode,d=Nc({mode:"visible",children:d.children},g,0,null),M=ks(M,g,N,null),M.flags|=2,d.return=r,M.return=r,d.sibling=M,r.child=d,(r.mode&1)!==0&&wo(r,n.child,null,N),r.child.memoizedState=sf(N),r.memoizedState=rf,M);if((r.mode&1)===0)return vc(n,r,N,null);if(g.data==="$!"){if(d=g.nextSibling&&g.nextSibling.dataset,d)var z=d.dgst;return d=z,M=Error(t(419)),d=Jd(M,d,void 0),vc(n,r,N,d)}if(z=(N&n.childLanes)!==0,Zn||z){if(d=wn,d!==null){switch(N&-N){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(d.suspendedLanes|N))!==0?0:g,g!==0&&g!==M.retryLane&&(M.retryLane=g,xr(n,g),ji(d,n,g,-1))}return Mf(),d=Jd(Error(t(421))),vc(n,r,N,d)}return g.data==="$?"?(r.flags|=128,r.child=n.child,r=C2.bind(null,n),g._reactRetry=r,null):(n=M.treeContext,di=jr(g.nextSibling),ui=r,Yt=!0,Vi=null,n!==null&&(Ei[Ti++]=_r,Ei[Ti++]=vr,Ei[Ti++]=Rs,_r=n.id,vr=n.overflow,Rs=r),r=of(r,d.children),r.flags|=4096,r)}function sg(n,r,l){n.lanes|=r;var d=n.alternate;d!==null&&(d.lanes|=r),Fd(n.return,r,l)}function af(n,r,l,d,g){var M=n.memoizedState;M===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:g}:(M.isBackwards=r,M.rendering=null,M.renderingStartTime=0,M.last=d,M.tail=l,M.tailMode=g)}function og(n,r,l){var d=r.pendingProps,g=d.revealOrder,M=d.tail;if(Gn(n,r,d.children,l),d=Zt.current,(d&2)!==0)d=d&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&sg(n,l,r);else if(n.tag===19)sg(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}d&=1}if(Gt(Zt,d),(r.mode&1)===0)r.memoizedState=null;else switch(g){case"forwards":for(l=r.child,g=null;l!==null;)n=l.alternate,n!==null&&dc(n)===null&&(g=l),l=l.sibling;l=g,l===null?(g=r.child,r.child=null):(g=l.sibling,l.sibling=null),af(r,!1,g,l,M);break;case"backwards":for(l=null,g=r.child,r.child=null;g!==null;){if(n=g.alternate,n!==null&&dc(n)===null){r.child=g;break}n=g.sibling,g.sibling=l,l=g,g=n}af(r,!0,l,null,M);break;case"together":af(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function xc(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Sr(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),Is|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=ns(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=ns(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function g2(n,r,l){switch(r.tag){case 3:ng(r),Mo();break;case 5:ym(r);break;case 1:Kn(r.type)&&tc(r);break;case 4:zd(r,r.stateNode.containerInfo);break;case 10:var d=r.type._context,g=r.memoizedProps.value;Gt(ac,d._currentValue),d._currentValue=g;break;case 13:if(d=r.memoizedState,d!==null)return d.dehydrated!==null?(Gt(Zt,Zt.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?rg(n,r,l):(Gt(Zt,Zt.current&1),n=Sr(n,r,l),n!==null?n.sibling:null);Gt(Zt,Zt.current&1);break;case 19:if(d=(l&r.childLanes)!==0,(n.flags&128)!==0){if(d)return og(n,r,l);r.flags|=128}if(g=r.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),Gt(Zt,Zt.current),d)break;return null;case 22:case 23:return r.lanes=0,Jm(n,r,l)}return Sr(n,r,l)}var ag,lf,lg,cg;ag=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},lf=function(){},lg=function(n,r,l,d){var g=n.memoizedProps;if(g!==d){n=r.stateNode,Ls(Ji.current);var M=null;switch(l){case"input":g=Mt(n,g),d=Mt(n,d),M=[];break;case"select":g=re({},g,{value:void 0}),d=re({},d,{value:void 0}),M=[];break;case"textarea":g=qe(n,g),d=qe(n,d),M=[];break;default:typeof g.onClick!="function"&&typeof d.onClick=="function"&&(n.onclick=Ql)}Ye(l,d);var N;l=null;for(le in g)if(!d.hasOwnProperty(le)&&g.hasOwnProperty(le)&&g[le]!=null)if(le==="style"){var z=g[le];for(N in z)z.hasOwnProperty(N)&&(l||(l={}),l[N]="")}else le!=="dangerouslySetInnerHTML"&&le!=="children"&&le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&le!=="autoFocus"&&(s.hasOwnProperty(le)?M||(M=[]):(M=M||[]).push(le,null));for(le in d){var H=d[le];if(z=g!=null?g[le]:void 0,d.hasOwnProperty(le)&&H!==z&&(H!=null||z!=null))if(le==="style")if(z){for(N in z)!z.hasOwnProperty(N)||H&&H.hasOwnProperty(N)||(l||(l={}),l[N]="");for(N in H)H.hasOwnProperty(N)&&z[N]!==H[N]&&(l||(l={}),l[N]=H[N])}else l||(M||(M=[]),M.push(le,l)),l=H;else le==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,z=z?z.__html:void 0,H!=null&&z!==H&&(M=M||[]).push(le,H)):le==="children"?typeof H!="string"&&typeof H!="number"||(M=M||[]).push(le,""+H):le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&(s.hasOwnProperty(le)?(H!=null&&le==="onScroll"&&Wt("scroll",n),M||z===H||(M=[])):(M=M||[]).push(le,H))}l&&(M=M||[]).push("style",l);var le=M;(r.updateQueue=le)&&(r.flags|=4)}},cg=function(n,r,l,d){l!==d&&(r.flags|=4)};function Ga(n,r){if(!Yt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:d.sibling=null}}function In(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,d=0;if(r)for(var g=n.child;g!==null;)l|=g.lanes|g.childLanes,d|=g.subtreeFlags&14680064,d|=g.flags&14680064,g.return=n,g=g.sibling;else for(g=n.child;g!==null;)l|=g.lanes|g.childLanes,d|=g.subtreeFlags,d|=g.flags,g.return=n,g=g.sibling;return n.subtreeFlags|=d,n.childLanes=l,r}function _2(n,r,l){var d=r.pendingProps;switch(Rd(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return In(r),null;case 1:return Kn(r.type)&&ec(),In(r),null;case 3:return d=r.stateNode,bo(),jt($n),jt(Ln),Hd(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(n===null||n.child===null)&&(sc(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Vi!==null&&(xf(Vi),Vi=null))),lf(n,r),In(r),null;case 5:Bd(r);var g=Ls(ka.current);if(l=r.type,n!==null&&r.stateNode!=null)lg(n,r,l,d,g),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!d){if(r.stateNode===null)throw Error(t(166));return In(r),null}if(n=Ls(Ji.current),sc(r)){d=r.stateNode,l=r.type;var M=r.memoizedProps;switch(d[Qi]=r,d[Da]=M,n=(r.mode&1)!==0,l){case"dialog":Wt("cancel",d),Wt("close",d);break;case"iframe":case"object":case"embed":Wt("load",d);break;case"video":case"audio":for(g=0;g<Pa.length;g++)Wt(Pa[g],d);break;case"source":Wt("error",d);break;case"img":case"image":case"link":Wt("error",d),Wt("load",d);break;case"details":Wt("toggle",d);break;case"input":It(d,M),Wt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!M.multiple},Wt("invalid",d);break;case"textarea":O(d,M),Wt("invalid",d)}Ye(l,M),g=null;for(var N in M)if(M.hasOwnProperty(N)){var z=M[N];N==="children"?typeof z=="string"?d.textContent!==z&&(M.suppressHydrationWarning!==!0&&Zl(d.textContent,z,n),g=["children",z]):typeof z=="number"&&d.textContent!==""+z&&(M.suppressHydrationWarning!==!0&&Zl(d.textContent,z,n),g=["children",""+z]):s.hasOwnProperty(N)&&z!=null&&N==="onScroll"&&Wt("scroll",d)}switch(l){case"input":_t(d),G(d,M,!0);break;case"textarea":_t(d),$(d);break;case"select":case"option":break;default:typeof M.onClick=="function"&&(d.onclick=Ql)}d=g,r.updateQueue=d,d!==null&&(r.flags|=4)}else{N=g.nodeType===9?g:g.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=he(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=N.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof d.is=="string"?n=N.createElement(l,{is:d.is}):(n=N.createElement(l),l==="select"&&(N=n,d.multiple?N.multiple=!0:d.size&&(N.size=d.size))):n=N.createElementNS(n,l),n[Qi]=r,n[Da]=d,ag(n,r,!1,!1),r.stateNode=n;e:{switch(N=Ae(l,d),l){case"dialog":Wt("cancel",n),Wt("close",n),g=d;break;case"iframe":case"object":case"embed":Wt("load",n),g=d;break;case"video":case"audio":for(g=0;g<Pa.length;g++)Wt(Pa[g],n);g=d;break;case"source":Wt("error",n),g=d;break;case"img":case"image":case"link":Wt("error",n),Wt("load",n),g=d;break;case"details":Wt("toggle",n),g=d;break;case"input":It(n,d),g=Mt(n,d),Wt("invalid",n);break;case"option":g=d;break;case"select":n._wrapperState={wasMultiple:!!d.multiple},g=re({},d,{value:void 0}),Wt("invalid",n);break;case"textarea":O(n,d),g=qe(n,d),Wt("invalid",n);break;default:g=d}Ye(l,g),z=g;for(M in z)if(z.hasOwnProperty(M)){var H=z[M];M==="style"?Re(n,H):M==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&Ke(n,H)):M==="children"?typeof H=="string"?(l!=="textarea"||H!=="")&&Ee(n,H):typeof H=="number"&&Ee(n,""+H):M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&M!=="autoFocus"&&(s.hasOwnProperty(M)?H!=null&&M==="onScroll"&&Wt("scroll",n):H!=null&&A(n,M,H,N))}switch(l){case"input":_t(n),G(n,d,!1);break;case"textarea":_t(n),$(n);break;case"option":d.value!=null&&n.setAttribute("value",""+Se(d.value));break;case"select":n.multiple=!!d.multiple,M=d.value,M!=null?wt(n,!!d.multiple,M,!1):d.defaultValue!=null&&wt(n,!!d.multiple,d.defaultValue,!0);break;default:typeof g.onClick=="function"&&(n.onclick=Ql)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return In(r),null;case 6:if(n&&r.stateNode!=null)cg(n,r,n.memoizedProps,d);else{if(typeof d!="string"&&r.stateNode===null)throw Error(t(166));if(l=Ls(ka.current),Ls(Ji.current),sc(r)){if(d=r.stateNode,l=r.memoizedProps,d[Qi]=r,(M=d.nodeValue!==l)&&(n=ui,n!==null))switch(n.tag){case 3:Zl(d.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Zl(d.nodeValue,l,(n.mode&1)!==0)}M&&(r.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[Qi]=r,r.stateNode=d}return In(r),null;case 13:if(jt(Zt),d=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Yt&&di!==null&&(r.mode&1)!==0&&(r.flags&128)===0)fm(),Mo(),r.flags|=98560,M=!1;else if(M=sc(r),d!==null&&d.dehydrated!==null){if(n===null){if(!M)throw Error(t(318));if(M=r.memoizedState,M=M!==null?M.dehydrated:null,!M)throw Error(t(317));M[Qi]=r}else Mo(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;In(r),M=!1}else Vi!==null&&(xf(Vi),Vi=null),M=!0;if(!M)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(d=d!==null,d!==(n!==null&&n.memoizedState!==null)&&d&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Zt.current&1)!==0?mn===0&&(mn=3):Mf())),r.updateQueue!==null&&(r.flags|=4),In(r),null);case 4:return bo(),lf(n,r),n===null&&Na(r.stateNode.containerInfo),In(r),null;case 10:return Ud(r.type._context),In(r),null;case 17:return Kn(r.type)&&ec(),In(r),null;case 19:if(jt(Zt),M=r.memoizedState,M===null)return In(r),null;if(d=(r.flags&128)!==0,N=M.rendering,N===null)if(d)Ga(M,!1);else{if(mn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(N=dc(n),N!==null){for(r.flags|=128,Ga(M,!1),d=N.updateQueue,d!==null&&(r.updateQueue=d,r.flags|=4),r.subtreeFlags=0,d=l,l=r.child;l!==null;)M=l,n=d,M.flags&=14680066,N=M.alternate,N===null?(M.childLanes=0,M.lanes=n,M.child=null,M.subtreeFlags=0,M.memoizedProps=null,M.memoizedState=null,M.updateQueue=null,M.dependencies=null,M.stateNode=null):(M.childLanes=N.childLanes,M.lanes=N.lanes,M.child=N.child,M.subtreeFlags=0,M.deletions=null,M.memoizedProps=N.memoizedProps,M.memoizedState=N.memoizedState,M.updateQueue=N.updateQueue,M.type=N.type,n=N.dependencies,M.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Gt(Zt,Zt.current&1|2),r.child}n=n.sibling}M.tail!==null&&Kt()>Po&&(r.flags|=128,d=!0,Ga(M,!1),r.lanes=4194304)}else{if(!d)if(n=dc(N),n!==null){if(r.flags|=128,d=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),Ga(M,!0),M.tail===null&&M.tailMode==="hidden"&&!N.alternate&&!Yt)return In(r),null}else 2*Kt()-M.renderingStartTime>Po&&l!==1073741824&&(r.flags|=128,d=!0,Ga(M,!1),r.lanes=4194304);M.isBackwards?(N.sibling=r.child,r.child=N):(l=M.last,l!==null?l.sibling=N:r.child=N,M.last=N)}return M.tail!==null?(r=M.tail,M.rendering=r,M.tail=r.sibling,M.renderingStartTime=Kt(),r.sibling=null,l=Zt.current,Gt(Zt,d?l&1|2:l&1),r):(In(r),null);case 22:case 23:return Sf(),d=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==d&&(r.flags|=8192),d&&(r.mode&1)!==0?(fi&1073741824)!==0&&(In(r),r.subtreeFlags&6&&(r.flags|=8192)):In(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function v2(n,r){switch(Rd(r),r.tag){case 1:return Kn(r.type)&&ec(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return bo(),jt($n),jt(Ln),Hd(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Bd(r),null;case 13:if(jt(Zt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Mo()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return jt(Zt),null;case 4:return bo(),null;case 10:return Ud(r.type._context),null;case 22:case 23:return Sf(),null;case 24:return null;default:return null}}var yc=!1,Un=!1,x2=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function Co(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){nn(n,r,d)}else l.current=null}function cf(n,r,l){try{l()}catch(d){nn(n,r,d)}}var ug=!1;function y2(n,r){if(yd=Bl,n=H0(),fd(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var g=d.anchorOffset,M=d.focusNode;d=d.focusOffset;try{l.nodeType,M.nodeType}catch{l=null;break e}var N=0,z=-1,H=-1,le=0,_e=0,xe=n,ge=null;t:for(;;){for(var ke;xe!==l||g!==0&&xe.nodeType!==3||(z=N+g),xe!==M||d!==0&&xe.nodeType!==3||(H=N+d),xe.nodeType===3&&(N+=xe.nodeValue.length),(ke=xe.firstChild)!==null;)ge=xe,xe=ke;for(;;){if(xe===n)break t;if(ge===l&&++le===g&&(z=N),ge===M&&++_e===d&&(H=N),(ke=xe.nextSibling)!==null)break;xe=ge,ge=xe.parentNode}xe=ke}l=z===-1||H===-1?null:{start:z,end:H}}else l=null}l=l||{start:0,end:0}}else l=null;for(Sd={focusedElem:n,selectionRange:l},Bl=!1,Ge=r;Ge!==null;)if(r=Ge,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Ge=n;else for(;Ge!==null;){r=Ge;try{var Xe=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var $e=Xe.memoizedProps,an=Xe.memoizedState,te=r.stateNode,X=te.getSnapshotBeforeUpdate(r.elementType===r.type?$e:Hi(r.type,$e),an);te.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var ie=r.stateNode.containerInfo;ie.nodeType===1?ie.textContent="":ie.nodeType===9&&ie.documentElement&&ie.removeChild(ie.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){nn(r,r.return,we)}if(n=r.sibling,n!==null){n.return=r.return,Ge=n;break}Ge=r.return}return Xe=ug,ug=!1,Xe}function Wa(n,r,l){var d=r.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var g=d=d.next;do{if((g.tag&n)===n){var M=g.destroy;g.destroy=void 0,M!==void 0&&cf(r,l,M)}g=g.next}while(g!==d)}}function Sc(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var d=l.create;l.destroy=d()}l=l.next}while(l!==r)}}function uf(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function dg(n){var r=n.alternate;r!==null&&(n.alternate=null,dg(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Qi],delete r[Da],delete r[Td],delete r[n2],delete r[i2])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function fg(n){return n.tag===5||n.tag===3||n.tag===4}function hg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||fg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function df(n,r,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=Ql));else if(d!==4&&(n=n.child,n!==null))for(df(n,r,l),n=n.sibling;n!==null;)df(n,r,l),n=n.sibling}function ff(n,r,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(d!==4&&(n=n.child,n!==null))for(ff(n,r,l),n=n.sibling;n!==null;)ff(n,r,l),n=n.sibling}var An=null,Gi=!1;function Zr(n,r,l){for(l=l.child;l!==null;)pg(n,r,l),l=l.sibling}function pg(n,r,l){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(Oe,l)}catch{}switch(l.tag){case 5:Un||Co(l,r);case 6:var d=An,g=Gi;An=null,Zr(n,r,l),An=d,Gi=g,An!==null&&(Gi?(n=An,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):An.removeChild(l.stateNode));break;case 18:An!==null&&(Gi?(n=An,l=l.stateNode,n.nodeType===8?Ed(n.parentNode,l):n.nodeType===1&&Ed(n,l),Ma(n)):Ed(An,l.stateNode));break;case 4:d=An,g=Gi,An=l.stateNode.containerInfo,Gi=!0,Zr(n,r,l),An=d,Gi=g;break;case 0:case 11:case 14:case 15:if(!Un&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){g=d=d.next;do{var M=g,N=M.destroy;M=M.tag,N!==void 0&&((M&2)!==0||(M&4)!==0)&&cf(l,r,N),g=g.next}while(g!==d)}Zr(n,r,l);break;case 1:if(!Un&&(Co(l,r),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(z){nn(l,r,z)}Zr(n,r,l);break;case 21:Zr(n,r,l);break;case 22:l.mode&1?(Un=(d=Un)||l.memoizedState!==null,Zr(n,r,l),Un=d):Zr(n,r,l);break;default:Zr(n,r,l)}}function mg(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new x2),r.forEach(function(d){var g=R2.bind(null,n,d);l.has(d)||(l.add(d),d.then(g,g))})}}function Wi(n,r){var l=r.deletions;if(l!==null)for(var d=0;d<l.length;d++){var g=l[d];try{var M=n,N=r,z=N;e:for(;z!==null;){switch(z.tag){case 5:An=z.stateNode,Gi=!1;break e;case 3:An=z.stateNode.containerInfo,Gi=!0;break e;case 4:An=z.stateNode.containerInfo,Gi=!0;break e}z=z.return}if(An===null)throw Error(t(160));pg(M,N,g),An=null,Gi=!1;var H=g.alternate;H!==null&&(H.return=null),g.return=null}catch(le){nn(g,r,le)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)gg(r,n),r=r.sibling}function gg(n,r){var l=n.alternate,d=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Wi(r,n),tr(n),d&4){try{Wa(3,n,n.return),Sc(3,n)}catch($e){nn(n,n.return,$e)}try{Wa(5,n,n.return)}catch($e){nn(n,n.return,$e)}}break;case 1:Wi(r,n),tr(n),d&512&&l!==null&&Co(l,l.return);break;case 5:if(Wi(r,n),tr(n),d&512&&l!==null&&Co(l,l.return),n.flags&32){var g=n.stateNode;try{Ee(g,"")}catch($e){nn(n,n.return,$e)}}if(d&4&&(g=n.stateNode,g!=null)){var M=n.memoizedProps,N=l!==null?l.memoizedProps:M,z=n.type,H=n.updateQueue;if(n.updateQueue=null,H!==null)try{z==="input"&&M.type==="radio"&&M.name!=null&&ut(g,M),Ae(z,N);var le=Ae(z,M);for(N=0;N<H.length;N+=2){var _e=H[N],xe=H[N+1];_e==="style"?Re(g,xe):_e==="dangerouslySetInnerHTML"?Ke(g,xe):_e==="children"?Ee(g,xe):A(g,_e,xe,le)}switch(z){case"input":Xt(g,M);break;case"textarea":C(g,M);break;case"select":var ge=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!M.multiple;var ke=M.value;ke!=null?wt(g,!!M.multiple,ke,!1):ge!==!!M.multiple&&(M.defaultValue!=null?wt(g,!!M.multiple,M.defaultValue,!0):wt(g,!!M.multiple,M.multiple?[]:"",!1))}g[Da]=M}catch($e){nn(n,n.return,$e)}}break;case 6:if(Wi(r,n),tr(n),d&4){if(n.stateNode===null)throw Error(t(162));g=n.stateNode,M=n.memoizedProps;try{g.nodeValue=M}catch($e){nn(n,n.return,$e)}}break;case 3:if(Wi(r,n),tr(n),d&4&&l!==null&&l.memoizedState.isDehydrated)try{Ma(r.containerInfo)}catch($e){nn(n,n.return,$e)}break;case 4:Wi(r,n),tr(n);break;case 13:Wi(r,n),tr(n),g=n.child,g.flags&8192&&(M=g.memoizedState!==null,g.stateNode.isHidden=M,!M||g.alternate!==null&&g.alternate.memoizedState!==null||(mf=Kt())),d&4&&mg(n);break;case 22:if(_e=l!==null&&l.memoizedState!==null,n.mode&1?(Un=(le=Un)||_e,Wi(r,n),Un=le):Wi(r,n),tr(n),d&8192){if(le=n.memoizedState!==null,(n.stateNode.isHidden=le)&&!_e&&(n.mode&1)!==0)for(Ge=n,_e=n.child;_e!==null;){for(xe=Ge=_e;Ge!==null;){switch(ge=Ge,ke=ge.child,ge.tag){case 0:case 11:case 14:case 15:Wa(4,ge,ge.return);break;case 1:Co(ge,ge.return);var Xe=ge.stateNode;if(typeof Xe.componentWillUnmount=="function"){d=ge,l=ge.return;try{r=d,Xe.props=r.memoizedProps,Xe.state=r.memoizedState,Xe.componentWillUnmount()}catch($e){nn(d,l,$e)}}break;case 5:Co(ge,ge.return);break;case 22:if(ge.memoizedState!==null){xg(xe);continue}}ke!==null?(ke.return=ge,Ge=ke):xg(xe)}_e=_e.sibling}e:for(_e=null,xe=n;;){if(xe.tag===5){if(_e===null){_e=xe;try{g=xe.stateNode,le?(M=g.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none"):(z=xe.stateNode,H=xe.memoizedProps.style,N=H!=null&&H.hasOwnProperty("display")?H.display:null,z.style.display=ye("display",N))}catch($e){nn(n,n.return,$e)}}}else if(xe.tag===6){if(_e===null)try{xe.stateNode.nodeValue=le?"":xe.memoizedProps}catch($e){nn(n,n.return,$e)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===n)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===n)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===n)break e;_e===xe&&(_e=null),xe=xe.return}_e===xe&&(_e=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:Wi(r,n),tr(n),d&4&&mg(n);break;case 21:break;default:Wi(r,n),tr(n)}}function tr(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(fg(l)){var d=l;break e}l=l.return}throw Error(t(160))}switch(d.tag){case 5:var g=d.stateNode;d.flags&32&&(Ee(g,""),d.flags&=-33);var M=hg(n);ff(n,M,g);break;case 3:case 4:var N=d.stateNode.containerInfo,z=hg(n);df(n,z,N);break;default:throw Error(t(161))}}catch(H){nn(n,n.return,H)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function S2(n,r,l){Ge=n,_g(n)}function _g(n,r,l){for(var d=(n.mode&1)!==0;Ge!==null;){var g=Ge,M=g.child;if(g.tag===22&&d){var N=g.memoizedState!==null||yc;if(!N){var z=g.alternate,H=z!==null&&z.memoizedState!==null||Un;z=yc;var le=Un;if(yc=N,(Un=H)&&!le)for(Ge=g;Ge!==null;)N=Ge,H=N.child,N.tag===22&&N.memoizedState!==null?yg(g):H!==null?(H.return=N,Ge=H):yg(g);for(;M!==null;)Ge=M,_g(M),M=M.sibling;Ge=g,yc=z,Un=le}vg(n)}else(g.subtreeFlags&8772)!==0&&M!==null?(M.return=g,Ge=M):vg(n)}}function vg(n){for(;Ge!==null;){var r=Ge;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Un||Sc(5,r);break;case 1:var d=r.stateNode;if(r.flags&4&&!Un)if(l===null)d.componentDidMount();else{var g=r.elementType===r.type?l.memoizedProps:Hi(r.type,l.memoizedProps);d.componentDidUpdate(g,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var M=r.updateQueue;M!==null&&xm(r,M,d);break;case 3:var N=r.updateQueue;if(N!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}xm(r,N,l)}break;case 5:var z=r.stateNode;if(l===null&&r.flags&4){l=z;var H=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&l.focus();break;case"img":H.src&&(l.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var le=r.alternate;if(le!==null){var _e=le.memoizedState;if(_e!==null){var xe=_e.dehydrated;xe!==null&&Ma(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Un||r.flags&512&&uf(r)}catch(ge){nn(r,r.return,ge)}}if(r===n){Ge=null;break}if(l=r.sibling,l!==null){l.return=r.return,Ge=l;break}Ge=r.return}}function xg(n){for(;Ge!==null;){var r=Ge;if(r===n){Ge=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Ge=l;break}Ge=r.return}}function yg(n){for(;Ge!==null;){var r=Ge;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{Sc(4,r)}catch(H){nn(r,l,H)}break;case 1:var d=r.stateNode;if(typeof d.componentDidMount=="function"){var g=r.return;try{d.componentDidMount()}catch(H){nn(r,g,H)}}var M=r.return;try{uf(r)}catch(H){nn(r,M,H)}break;case 5:var N=r.return;try{uf(r)}catch(H){nn(r,N,H)}}}catch(H){nn(r,r.return,H)}if(r===n){Ge=null;break}var z=r.sibling;if(z!==null){z.return=r.return,Ge=z;break}Ge=r.return}}var M2=Math.ceil,Mc=b.ReactCurrentDispatcher,hf=b.ReactCurrentOwner,Ci=b.ReactCurrentBatchConfig,bt=0,wn=null,un=null,Cn=0,fi=0,Ro=Xr(0),mn=0,ja=null,Is=0,wc=0,pf=0,Xa=null,Qn=null,mf=0,Po=1/0,Mr=null,Ec=!1,gf=null,Qr=null,Tc=!1,Jr=null,bc=0,qa=0,_f=null,Ac=-1,Cc=0;function Wn(){return(bt&6)!==0?Kt():Ac!==-1?Ac:Ac=Kt()}function es(n){return(n.mode&1)===0?1:(bt&2)!==0&&Cn!==0?Cn&-Cn:s2.transition!==null?(Cc===0&&(Cc=Nn()),Cc):(n=lt,n!==0||(n=window.event,n=n===void 0?16:M0(n.type)),n)}function ji(n,r,l,d){if(50<qa)throw qa=0,_f=null,Error(t(185));hn(n,l,d),((bt&2)===0||n!==wn)&&(n===wn&&((bt&2)===0&&(wc|=l),mn===4&&ts(n,Cn)),Jn(n,d),l===1&&bt===0&&(r.mode&1)===0&&(Po=Kt()+500,nc&&Yr()))}function Jn(n,r){var l=n.callbackNode;Dt(n,r);var d=Rt(n,n===wn?Cn:0);if(d===0)l!==null&&Ol(l),n.callbackNode=null,n.callbackPriority=0;else if(r=d&-d,n.callbackPriority!==r){if(l!=null&&Ol(l),r===1)n.tag===0?r2(Mg.bind(null,n)):am(Mg.bind(null,n)),e2(function(){(bt&6)===0&&Yr()}),l=null;else{switch(Hn(d)){case 1:l=K;break;case 4:l=ce;break;case 16:l=se;break;case 536870912:l=Pe;break;default:l=se}l=Pg(l,Sg.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function Sg(n,r){if(Ac=-1,Cc=0,(bt&6)!==0)throw Error(t(327));var l=n.callbackNode;if(No()&&n.callbackNode!==l)return null;var d=Rt(n,n===wn?Cn:0);if(d===0)return null;if((d&30)!==0||(d&n.expiredLanes)!==0||r)r=Rc(n,d);else{r=d;var g=bt;bt|=2;var M=Eg();(wn!==n||Cn!==r)&&(Mr=null,Po=Kt()+500,Fs(n,r));do try{T2();break}catch(z){wg(n,z)}while(!0);Id(),Mc.current=M,bt=g,un!==null?r=0:(wn=null,Cn=0,r=mn)}if(r!==0){if(r===2&&(g=xt(n),g!==0&&(d=g,r=vf(n,g))),r===1)throw l=ja,Fs(n,0),ts(n,d),Jn(n,Kt()),l;if(r===6)ts(n,d);else{if(g=n.current.alternate,(d&30)===0&&!w2(g)&&(r=Rc(n,d),r===2&&(M=xt(n),M!==0&&(d=M,r=vf(n,M))),r===1))throw l=ja,Fs(n,0),ts(n,d),Jn(n,Kt()),l;switch(n.finishedWork=g,n.finishedLanes=d,r){case 0:case 1:throw Error(t(345));case 2:Os(n,Qn,Mr);break;case 3:if(ts(n,d),(d&130023424)===d&&(r=mf+500-Kt(),10<r)){if(Rt(n,0)!==0)break;if(g=n.suspendedLanes,(g&d)!==d){Wn(),n.pingedLanes|=n.suspendedLanes&g;break}n.timeoutHandle=wd(Os.bind(null,n,Qn,Mr),r);break}Os(n,Qn,Mr);break;case 4:if(ts(n,d),(d&4194240)===d)break;for(r=n.eventTimes,g=-1;0<d;){var N=31-ze(d);M=1<<N,N=r[N],N>g&&(g=N),d&=~M}if(d=g,d=Kt()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*M2(d/1960))-d,10<d){n.timeoutHandle=wd(Os.bind(null,n,Qn,Mr),d);break}Os(n,Qn,Mr);break;case 5:Os(n,Qn,Mr);break;default:throw Error(t(329))}}}return Jn(n,Kt()),n.callbackNode===l?Sg.bind(null,n):null}function vf(n,r){var l=Xa;return n.current.memoizedState.isDehydrated&&(Fs(n,r).flags|=256),n=Rc(n,r),n!==2&&(r=Qn,Qn=l,r!==null&&xf(r)),n}function xf(n){Qn===null?Qn=n:Qn.push.apply(Qn,n)}function w2(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var g=l[d],M=g.getSnapshot;g=g.value;try{if(!Bi(M(),g))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ts(n,r){for(r&=~pf,r&=~wc,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-ze(r),d=1<<l;n[l]=-1,r&=~d}}function Mg(n){if((bt&6)!==0)throw Error(t(327));No();var r=Rt(n,0);if((r&1)===0)return Jn(n,Kt()),null;var l=Rc(n,r);if(n.tag!==0&&l===2){var d=xt(n);d!==0&&(r=d,l=vf(n,d))}if(l===1)throw l=ja,Fs(n,0),ts(n,r),Jn(n,Kt()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Os(n,Qn,Mr),Jn(n,Kt()),null}function yf(n,r){var l=bt;bt|=1;try{return n(r)}finally{bt=l,bt===0&&(Po=Kt()+500,nc&&Yr())}}function Us(n){Jr!==null&&Jr.tag===0&&(bt&6)===0&&No();var r=bt;bt|=1;var l=Ci.transition,d=lt;try{if(Ci.transition=null,lt=1,n)return n()}finally{lt=d,Ci.transition=l,bt=r,(bt&6)===0&&Yr()}}function Sf(){fi=Ro.current,jt(Ro)}function Fs(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,Jx(l)),un!==null)for(l=un.return;l!==null;){var d=l;switch(Rd(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&ec();break;case 3:bo(),jt($n),jt(Ln),Hd();break;case 5:Bd(d);break;case 4:bo();break;case 13:jt(Zt);break;case 19:jt(Zt);break;case 10:Ud(d.type._context);break;case 22:case 23:Sf()}l=l.return}if(wn=n,un=n=ns(n.current,null),Cn=fi=r,mn=0,ja=null,pf=wc=Is=0,Qn=Xa=null,Ns!==null){for(r=0;r<Ns.length;r++)if(l=Ns[r],d=l.interleaved,d!==null){l.interleaved=null;var g=d.next,M=l.pending;if(M!==null){var N=M.next;M.next=g,d.next=N}l.pending=d}Ns=null}return n}function wg(n,r){do{var l=un;try{if(Id(),fc.current=gc,hc){for(var d=Qt.memoizedState;d!==null;){var g=d.queue;g!==null&&(g.pending=null),d=d.next}hc=!1}if(Ds=0,Mn=pn=Qt=null,za=!1,Ba=0,hf.current=null,l===null||l.return===null){mn=1,ja=r,un=null;break}e:{var M=n,N=l.return,z=l,H=r;if(r=Cn,z.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var le=H,_e=z,xe=_e.tag;if((_e.mode&1)===0&&(xe===0||xe===11||xe===15)){var ge=_e.alternate;ge?(_e.updateQueue=ge.updateQueue,_e.memoizedState=ge.memoizedState,_e.lanes=ge.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var ke=Ym(N);if(ke!==null){ke.flags&=-257,$m(ke,N,z,M,r),ke.mode&1&&qm(M,le,r),r=ke,H=le;var Xe=r.updateQueue;if(Xe===null){var $e=new Set;$e.add(H),r.updateQueue=$e}else Xe.add(H);break e}else{if((r&1)===0){qm(M,le,r),Mf();break e}H=Error(t(426))}}else if(Yt&&z.mode&1){var an=Ym(N);if(an!==null){(an.flags&65536)===0&&(an.flags|=256),$m(an,N,z,M,r),Ld(Ao(H,z));break e}}M=H=Ao(H,z),mn!==4&&(mn=2),Xa===null?Xa=[M]:Xa.push(M),M=N;do{switch(M.tag){case 3:M.flags|=65536,r&=-r,M.lanes|=r;var te=jm(M,H,r);vm(M,te);break e;case 1:z=H;var X=M.type,ie=M.stateNode;if((M.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||ie!==null&&typeof ie.componentDidCatch=="function"&&(Qr===null||!Qr.has(ie)))){M.flags|=65536,r&=-r,M.lanes|=r;var we=Xm(M,z,r);vm(M,we);break e}}M=M.return}while(M!==null)}bg(l)}catch(Ze){r=Ze,un===l&&l!==null&&(un=l=l.return);continue}break}while(!0)}function Eg(){var n=Mc.current;return Mc.current=gc,n===null?gc:n}function Mf(){(mn===0||mn===3||mn===2)&&(mn=4),wn===null||(Is&268435455)===0&&(wc&268435455)===0||ts(wn,Cn)}function Rc(n,r){var l=bt;bt|=2;var d=Eg();(wn!==n||Cn!==r)&&(Mr=null,Fs(n,r));do try{E2();break}catch(g){wg(n,g)}while(!0);if(Id(),bt=l,Mc.current=d,un!==null)throw Error(t(261));return wn=null,Cn=0,mn}function E2(){for(;un!==null;)Tg(un)}function T2(){for(;un!==null&&!Qu();)Tg(un)}function Tg(n){var r=Rg(n.alternate,n,fi);n.memoizedProps=n.pendingProps,r===null?bg(n):un=r,hf.current=null}function bg(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=_2(l,r,fi),l!==null){un=l;return}}else{if(l=v2(l,r),l!==null){l.flags&=32767,un=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{mn=6,un=null;return}}if(r=r.sibling,r!==null){un=r;return}un=r=n}while(r!==null);mn===0&&(mn=5)}function Os(n,r,l){var d=lt,g=Ci.transition;try{Ci.transition=null,lt=1,b2(n,r,l,d)}finally{Ci.transition=g,lt=d}return null}function b2(n,r,l,d){do No();while(Jr!==null);if((bt&6)!==0)throw Error(t(327));l=n.finishedWork;var g=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var M=l.lanes|l.childLanes;if(bs(n,M),n===wn&&(un=wn=null,Cn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Tc||(Tc=!0,Pg(se,function(){return No(),null})),M=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||M){M=Ci.transition,Ci.transition=null;var N=lt;lt=1;var z=bt;bt|=4,hf.current=null,y2(n,l),gg(l,n),Xx(Sd),Bl=!!yd,Sd=yd=null,n.current=l,S2(l),Ju(),bt=z,lt=N,Ci.transition=M}else n.current=l;if(Tc&&(Tc=!1,Jr=n,bc=g),M=n.pendingLanes,M===0&&(Qr=null),We(l.stateNode),Jn(n,Kt()),r!==null)for(d=n.onRecoverableError,l=0;l<r.length;l++)g=r[l],d(g.value,{componentStack:g.stack,digest:g.digest});if(Ec)throw Ec=!1,n=gf,gf=null,n;return(bc&1)!==0&&n.tag!==0&&No(),M=n.pendingLanes,(M&1)!==0?n===_f?qa++:(qa=0,_f=n):qa=0,Yr(),null}function No(){if(Jr!==null){var n=Hn(bc),r=Ci.transition,l=lt;try{if(Ci.transition=null,lt=16>n?16:n,Jr===null)var d=!1;else{if(n=Jr,Jr=null,bc=0,(bt&6)!==0)throw Error(t(331));var g=bt;for(bt|=4,Ge=n.current;Ge!==null;){var M=Ge,N=M.child;if((Ge.flags&16)!==0){var z=M.deletions;if(z!==null){for(var H=0;H<z.length;H++){var le=z[H];for(Ge=le;Ge!==null;){var _e=Ge;switch(_e.tag){case 0:case 11:case 15:Wa(8,_e,M)}var xe=_e.child;if(xe!==null)xe.return=_e,Ge=xe;else for(;Ge!==null;){_e=Ge;var ge=_e.sibling,ke=_e.return;if(dg(_e),_e===le){Ge=null;break}if(ge!==null){ge.return=ke,Ge=ge;break}Ge=ke}}}var Xe=M.alternate;if(Xe!==null){var $e=Xe.child;if($e!==null){Xe.child=null;do{var an=$e.sibling;$e.sibling=null,$e=an}while($e!==null)}}Ge=M}}if((M.subtreeFlags&2064)!==0&&N!==null)N.return=M,Ge=N;else e:for(;Ge!==null;){if(M=Ge,(M.flags&2048)!==0)switch(M.tag){case 0:case 11:case 15:Wa(9,M,M.return)}var te=M.sibling;if(te!==null){te.return=M.return,Ge=te;break e}Ge=M.return}}var X=n.current;for(Ge=X;Ge!==null;){N=Ge;var ie=N.child;if((N.subtreeFlags&2064)!==0&&ie!==null)ie.return=N,Ge=ie;else e:for(N=X;Ge!==null;){if(z=Ge,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:Sc(9,z)}}catch(Ze){nn(z,z.return,Ze)}if(z===N){Ge=null;break e}var we=z.sibling;if(we!==null){we.return=z.return,Ge=we;break e}Ge=z.return}}if(bt=g,Yr(),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(Oe,n)}catch{}d=!0}return d}finally{lt=l,Ci.transition=r}}return!1}function Ag(n,r,l){r=Ao(l,r),r=jm(n,r,1),n=Kr(n,r,1),r=Wn(),n!==null&&(hn(n,1,r),Jn(n,r))}function nn(n,r,l){if(n.tag===3)Ag(n,n,l);else for(;r!==null;){if(r.tag===3){Ag(r,n,l);break}else if(r.tag===1){var d=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Qr===null||!Qr.has(d))){n=Ao(l,n),n=Xm(r,n,1),r=Kr(r,n,1),n=Wn(),r!==null&&(hn(r,1,n),Jn(r,n));break}}r=r.return}}function A2(n,r,l){var d=n.pingCache;d!==null&&d.delete(r),r=Wn(),n.pingedLanes|=n.suspendedLanes&l,wn===n&&(Cn&l)===l&&(mn===4||mn===3&&(Cn&130023424)===Cn&&500>Kt()-mf?Fs(n,0):pf|=l),Jn(n,r)}function Cg(n,r){r===0&&((n.mode&1)===0?r=1:(r=zt,zt<<=1,(zt&130023424)===0&&(zt=4194304)));var l=Wn();n=xr(n,r),n!==null&&(hn(n,r,l),Jn(n,l))}function C2(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),Cg(n,l)}function R2(n,r){var l=0;switch(n.tag){case 13:var d=n.stateNode,g=n.memoizedState;g!==null&&(l=g.retryLane);break;case 19:d=n.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(r),Cg(n,l)}var Rg;Rg=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||$n.current)Zn=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return Zn=!1,g2(n,r,l);Zn=(n.flags&131072)!==0}else Zn=!1,Yt&&(r.flags&1048576)!==0&&lm(r,rc,r.index);switch(r.lanes=0,r.tag){case 2:var d=r.type;xc(n,r),n=r.pendingProps;var g=xo(r,Ln.current);To(r,l),g=jd(null,r,d,n,g,l);var M=Xd();return r.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Kn(d)?(M=!0,tc(r)):M=!1,r.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,kd(r),g.updater=_c,r.stateNode=g,g._reactInternals=r,Qd(r,d,n,l),r=nf(null,r,d,!0,M,l)):(r.tag=0,Yt&&M&&Cd(r),Gn(null,r,g,l),r=r.child),r;case 16:d=r.elementType;e:{switch(xc(n,r),n=r.pendingProps,g=d._init,d=g(d._payload),r.type=d,g=r.tag=N2(d),n=Hi(d,n),g){case 0:r=tf(null,r,d,n,l);break e;case 1:r=tg(null,r,d,n,l);break e;case 11:r=Km(null,r,d,n,l);break e;case 14:r=Zm(null,r,d,Hi(d.type,n),l);break e}throw Error(t(306,d,""))}return r;case 0:return d=r.type,g=r.pendingProps,g=r.elementType===d?g:Hi(d,g),tf(n,r,d,g,l);case 1:return d=r.type,g=r.pendingProps,g=r.elementType===d?g:Hi(d,g),tg(n,r,d,g,l);case 3:e:{if(ng(r),n===null)throw Error(t(387));d=r.pendingProps,M=r.memoizedState,g=M.element,_m(n,r),uc(r,d,null,l);var N=r.memoizedState;if(d=N.element,M.isDehydrated)if(M={element:d,isDehydrated:!1,cache:N.cache,pendingSuspenseBoundaries:N.pendingSuspenseBoundaries,transitions:N.transitions},r.updateQueue.baseState=M,r.memoizedState=M,r.flags&256){g=Ao(Error(t(423)),r),r=ig(n,r,d,l,g);break e}else if(d!==g){g=Ao(Error(t(424)),r),r=ig(n,r,d,l,g);break e}else for(di=jr(r.stateNode.containerInfo.firstChild),ui=r,Yt=!0,Vi=null,l=mm(r,null,d,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Mo(),d===g){r=Sr(n,r,l);break e}Gn(n,r,d,l)}r=r.child}return r;case 5:return ym(r),n===null&&Nd(r),d=r.type,g=r.pendingProps,M=n!==null?n.memoizedProps:null,N=g.children,Md(d,g)?N=null:M!==null&&Md(d,M)&&(r.flags|=32),eg(n,r),Gn(n,r,N,l),r.child;case 6:return n===null&&Nd(r),null;case 13:return rg(n,r,l);case 4:return zd(r,r.stateNode.containerInfo),d=r.pendingProps,n===null?r.child=wo(r,null,d,l):Gn(n,r,d,l),r.child;case 11:return d=r.type,g=r.pendingProps,g=r.elementType===d?g:Hi(d,g),Km(n,r,d,g,l);case 7:return Gn(n,r,r.pendingProps,l),r.child;case 8:return Gn(n,r,r.pendingProps.children,l),r.child;case 12:return Gn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(d=r.type._context,g=r.pendingProps,M=r.memoizedProps,N=g.value,Gt(ac,d._currentValue),d._currentValue=N,M!==null)if(Bi(M.value,N)){if(M.children===g.children&&!$n.current){r=Sr(n,r,l);break e}}else for(M=r.child,M!==null&&(M.return=r);M!==null;){var z=M.dependencies;if(z!==null){N=M.child;for(var H=z.firstContext;H!==null;){if(H.context===d){if(M.tag===1){H=yr(-1,l&-l),H.tag=2;var le=M.updateQueue;if(le!==null){le=le.shared;var _e=le.pending;_e===null?H.next=H:(H.next=_e.next,_e.next=H),le.pending=H}}M.lanes|=l,H=M.alternate,H!==null&&(H.lanes|=l),Fd(M.return,l,r),z.lanes|=l;break}H=H.next}}else if(M.tag===10)N=M.type===r.type?null:M.child;else if(M.tag===18){if(N=M.return,N===null)throw Error(t(341));N.lanes|=l,z=N.alternate,z!==null&&(z.lanes|=l),Fd(N,l,r),N=M.sibling}else N=M.child;if(N!==null)N.return=M;else for(N=M;N!==null;){if(N===r){N=null;break}if(M=N.sibling,M!==null){M.return=N.return,N=M;break}N=N.return}M=N}Gn(n,r,g.children,l),r=r.child}return r;case 9:return g=r.type,d=r.pendingProps.children,To(r,l),g=bi(g),d=d(g),r.flags|=1,Gn(n,r,d,l),r.child;case 14:return d=r.type,g=Hi(d,r.pendingProps),g=Hi(d.type,g),Zm(n,r,d,g,l);case 15:return Qm(n,r,r.type,r.pendingProps,l);case 17:return d=r.type,g=r.pendingProps,g=r.elementType===d?g:Hi(d,g),xc(n,r),r.tag=1,Kn(d)?(n=!0,tc(r)):n=!1,To(r,l),Gm(r,d,g),Qd(r,d,g,l),nf(null,r,d,!0,n,l);case 19:return og(n,r,l);case 22:return Jm(n,r,l)}throw Error(t(156,r.tag))};function Pg(n,r){return Fl(n,r)}function P2(n,r,l,d){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ri(n,r,l,d){return new P2(n,r,l,d)}function wf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function N2(n){if(typeof n=="function")return wf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===W)return 11;if(n===ee)return 14}return 2}function ns(n,r){var l=n.alternate;return l===null?(l=Ri(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Pc(n,r,l,d,g,M){var N=2;if(d=n,typeof n=="function")wf(n)&&(N=1);else if(typeof n=="string")N=5;else e:switch(n){case I:return ks(l.children,g,M,r);case F:N=8,g|=8;break;case E:return n=Ri(12,l,r,g|2),n.elementType=E,n.lanes=M,n;case V:return n=Ri(13,l,r,g),n.elementType=V,n.lanes=M,n;case J:return n=Ri(19,l,r,g),n.elementType=J,n.lanes=M,n;case Y:return Nc(l,g,M,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case L:N=10;break e;case k:N=9;break e;case W:N=11;break e;case ee:N=14;break e;case Q:N=16,d=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=Ri(N,l,r,g),r.elementType=n,r.type=d,r.lanes=M,r}function ks(n,r,l,d){return n=Ri(7,n,d,r),n.lanes=l,n}function Nc(n,r,l,d){return n=Ri(22,n,d,r),n.elementType=Y,n.lanes=l,n.stateNode={isHidden:!1},n}function Ef(n,r,l){return n=Ri(6,n,null,r),n.lanes=l,n}function Tf(n,r,l){return r=Ri(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function L2(n,r,l,d,g){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ki(0),this.expirationTimes=Ki(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ki(0),this.identifierPrefix=d,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function bf(n,r,l,d,g,M,N,z,H){return n=new L2(n,r,l,z,H),r===1?(r=1,M===!0&&(r|=8)):r=0,M=Ri(3,null,null,r),n.current=M,M.stateNode=n,M.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},kd(M),n}function D2(n,r,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:d==null?null:""+d,children:n,containerInfo:r,implementation:l}}function Ng(n){if(!n)return qr;n=n._reactInternals;e:{if(wi(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Kn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(Kn(l))return sm(n,l,r)}return r}function Lg(n,r,l,d,g,M,N,z,H){return n=bf(l,d,!0,n,g,M,N,z,H),n.context=Ng(null),l=n.current,d=Wn(),g=es(l),M=yr(d,g),M.callback=r??null,Kr(l,M,g),n.current.lanes=g,hn(n,g,d),Jn(n,d),n}function Lc(n,r,l,d){var g=r.current,M=Wn(),N=es(g);return l=Ng(l),r.context===null?r.context=l:r.pendingContext=l,r=yr(M,N),r.payload={element:n},d=d===void 0?null:d,d!==null&&(r.callback=d),n=Kr(g,r,N),n!==null&&(ji(n,g,N,M),cc(n,g,N)),N}function Dc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Dg(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function Af(n,r){Dg(n,r),(n=n.alternate)&&Dg(n,r)}function I2(){return null}var Ig=typeof reportError=="function"?reportError:function(n){console.error(n)};function Cf(n){this._internalRoot=n}Ic.prototype.render=Cf.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Lc(n,r,null,null)},Ic.prototype.unmount=Cf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Us(function(){Lc(null,n,null,null)}),r[mr]=null}};function Ic(n){this._internalRoot=n}Ic.prototype.unstable_scheduleHydration=function(n){if(n){var r=Zi();n={blockedOn:null,target:n,priority:r};for(var l=0;l<Hr.length&&r!==0&&r<Hr[l].priority;l++);Hr.splice(l,0,n),l===0&&y0(n)}};function Rf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Uc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Ug(){}function U2(n,r,l,d,g){if(g){if(typeof d=="function"){var M=d;d=function(){var le=Dc(N);M.call(le)}}var N=Lg(r,d,n,0,null,!1,!1,"",Ug);return n._reactRootContainer=N,n[mr]=N.current,Na(n.nodeType===8?n.parentNode:n),Us(),N}for(;g=n.lastChild;)n.removeChild(g);if(typeof d=="function"){var z=d;d=function(){var le=Dc(H);z.call(le)}}var H=bf(n,0,!1,null,null,!1,!1,"",Ug);return n._reactRootContainer=H,n[mr]=H.current,Na(n.nodeType===8?n.parentNode:n),Us(function(){Lc(r,H,l,d)}),H}function Fc(n,r,l,d,g){var M=l._reactRootContainer;if(M){var N=M;if(typeof g=="function"){var z=g;g=function(){var H=Dc(N);z.call(H)}}Lc(r,N,n,g)}else N=U2(l,r,n,g,d);return Dc(N)}yn=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=kt(r.pendingLanes);l!==0&&(Ut(r,l|1),Jn(r,Kt()),(bt&6)===0&&(Po=Kt()+500,Yr()))}break;case 13:Us(function(){var d=xr(n,1);if(d!==null){var g=Wn();ji(d,n,1,g)}}),Af(n,1)}},Sn=function(n){if(n.tag===13){var r=xr(n,134217728);if(r!==null){var l=Wn();ji(r,n,134217728,l)}Af(n,134217728)}},lo=function(n){if(n.tag===13){var r=es(n),l=xr(n,r);if(l!==null){var d=Wn();ji(l,n,r,d)}Af(n,r)}},Zi=function(){return lt},v0=function(n,r){var l=lt;try{return lt=n,r()}finally{lt=l}},Ne=function(n,r,l){switch(r){case"input":if(Xt(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var d=l[r];if(d!==n&&d.form===n.form){var g=Jl(d);if(!g)throw Error(t(90));on(d),Xt(d,g)}}}break;case"textarea":C(n,l);break;case"select":r=l.value,r!=null&&wt(n,!!l.multiple,r,!1)}},rt=yf,Ft=Us;var F2={usingClientEntryPoint:!1,Events:[Ia,_o,Jl,pe,Ce,yf]},Ya={findFiberByHostInstance:As,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},O2={bundleType:Ya.bundleType,version:Ya.version,rendererPackageName:Ya.rendererPackageName,rendererConfig:Ya.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=_a(n),n===null?null:n.stateNode},findFiberByHostInstance:Ya.findFiberByHostInstance||I2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oc.isDisabled&&Oc.supportsFiber)try{Oe=Oc.inject(O2),Te=Oc}catch{}}return ei.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F2,ei.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rf(r))throw Error(t(200));return D2(n,r,null,l)},ei.createRoot=function(n,r){if(!Rf(n))throw Error(t(299));var l=!1,d="",g=Ig;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onRecoverableError!==void 0&&(g=r.onRecoverableError)),r=bf(n,1,!1,null,null,l,!1,d,g),n[mr]=r.current,Na(n.nodeType===8?n.parentNode:n),new Cf(r)},ei.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=_a(r),n=n===null?null:n.stateNode,n},ei.flushSync=function(n){return Us(n)},ei.hydrate=function(n,r,l){if(!Uc(r))throw Error(t(200));return Fc(null,n,r,!0,l)},ei.hydrateRoot=function(n,r,l){if(!Rf(n))throw Error(t(405));var d=l!=null&&l.hydratedSources||null,g=!1,M="",N=Ig;if(l!=null&&(l.unstable_strictMode===!0&&(g=!0),l.identifierPrefix!==void 0&&(M=l.identifierPrefix),l.onRecoverableError!==void 0&&(N=l.onRecoverableError)),r=Lg(r,null,n,1,l??null,g,!1,M,N),n[mr]=r.current,Na(n),d)for(n=0;n<d.length;n++)l=d[n],g=l._getVersion,g=g(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,g]:r.mutableSourceEagerHydrationData.push(l,g);return new Ic(r)},ei.render=function(n,r,l){if(!Uc(r))throw Error(t(200));return Fc(null,n,r,!1,l)},ei.unmountComponentAtNode=function(n){if(!Uc(n))throw Error(t(40));return n._reactRootContainer?(Us(function(){Fc(null,null,n,!1,function(){n._reactRootContainer=null,n[mr]=null})}),!0):!1},ei.unstable_batchedUpdates=yf,ei.unstable_renderSubtreeIntoContainer=function(n,r,l,d){if(!Uc(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Fc(n,r,l,!1,d)},ei.version="18.3.1-next-f1338f8080-20240426",ei}var Gg;function X2(){if(Gg)return Lf.exports;Gg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Lf.exports=j2(),Lf.exports}var Wg;function q2(){if(Wg)return kc;Wg=1;var o=X2();return kc.createRoot=o.createRoot,kc.hydrateRoot=o.hydrateRoot,kc}var Y2=q2(),Ue=Ip();const eo=z2(Ue);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Up="182",$2=0,jg=1,K2=2,pu=1,Z2=2,sl=3,_s=0,ni=1,sr=2,Nr=0,$o=1,Eu=2,Xg=3,qg=4,Q2=5,$s=100,J2=101,ey=102,ty=103,ny=104,iy=200,ry=201,sy=202,oy=203,Mh=204,wh=205,ay=206,ly=207,cy=208,uy=209,dy=210,fy=211,hy=212,py=213,my=214,Eh=0,Th=1,bh=2,ea=3,Ah=4,Ch=5,Rh=6,Ph=7,g_=0,gy=1,_y=2,ur=0,__=1,v_=2,x_=3,y_=4,S_=5,M_=6,w_=7,E_=300,so=301,ta=302,Nh=303,Lh=304,Gu=306,Dh=1e3,Pr=1001,Ih=1002,Rn=1003,vy=1004,zc=1005,zn=1006,Uf=1007,Zs=1008,Di=1009,T_=1010,b_=1011,fl=1012,Fp=1013,fr=1014,ar=1015,Dr=1016,Op=1017,kp=1018,hl=1020,A_=35902,C_=35899,R_=1021,P_=1022,$i=1023,Ir=1026,Qs=1027,N_=1028,zp=1029,na=1030,Bp=1031,Vp=1033,mu=33776,gu=33777,_u=33778,vu=33779,Uh=35840,Fh=35841,Oh=35842,kh=35843,zh=36196,Bh=37492,Vh=37496,Hh=37488,Gh=37489,Wh=37490,jh=37491,Xh=37808,qh=37809,Yh=37810,$h=37811,Kh=37812,Zh=37813,Qh=37814,Jh=37815,ep=37816,tp=37817,np=37818,ip=37819,rp=37820,sp=37821,op=36492,ap=36494,lp=36495,cp=36283,up=36284,dp=36285,fp=36286,xy=3200,L_=0,yy=1,us="",Li="srgb",ia="srgb-linear",Tu="linear",Ot="srgb",Lo=7680,Yg=519,Sy=512,My=513,wy=514,Hp=515,Ey=516,Ty=517,Gp=518,by=519,$g=35044,Kg="300 es",lr=2e3,bu=2001;function D_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Au(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Ay(){const o=Au("canvas");return o.style.display="block",o}const Zg={};function Qg(...o){const e="THREE."+o.shift();console.log(e,...o)}function at(...o){const e="THREE."+o.shift();console.warn(e,...o)}function Nt(...o){const e="THREE."+o.shift();console.error(e,...o)}function pl(...o){const e=o.join(" ");e in Zg||(Zg[e]=!0,at(...o))}function Cy(o,e,t){return new Promise(function(i,s){function a(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}class da{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let a=0,c=s.length;a<c;a++)s[a].call(this,e);e.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xu=Math.PI/180,hp=180/Math.PI;function Tl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Fn[o&255]+Fn[o>>8&255]+Fn[o>>16&255]+Fn[o>>24&255]+"-"+Fn[e&255]+Fn[e>>8&255]+"-"+Fn[e>>16&15|64]+Fn[e>>24&255]+"-"+Fn[t&63|128]+Fn[t>>8&255]+"-"+Fn[t>>16&255]+Fn[t>>24&255]+Fn[i&255]+Fn[i>>8&255]+Fn[i>>16&255]+Fn[i>>24&255]).toLowerCase()}function yt(o,e,t){return Math.max(e,Math.min(t,o))}function Ry(o,e){return(o%e+e)%e}function Ff(o,e,t){return(1-t)*o+t*e}function Ka(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ti(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ct{constructor(e=0,t=0){Ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*i-c*s+e.x,this.y=a*s+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bl{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,c,u){let f=i[s+0],h=i[s+1],p=i[s+2],m=i[s+3],v=a[c+0],y=a[c+1],w=a[c+2],S=a[c+3];if(u<=0){e[t+0]=f,e[t+1]=h,e[t+2]=p,e[t+3]=m;return}if(u>=1){e[t+0]=v,e[t+1]=y,e[t+2]=w,e[t+3]=S;return}if(m!==S||f!==v||h!==y||p!==w){let x=f*v+h*y+p*w+m*S;x<0&&(v=-v,y=-y,w=-w,S=-S,x=-x);let _=1-u;if(x<.9995){const T=Math.acos(x),A=Math.sin(T);_=Math.sin(_*T)/A,u=Math.sin(u*T)/A,f=f*_+v*u,h=h*_+y*u,p=p*_+w*u,m=m*_+S*u}else{f=f*_+v*u,h=h*_+y*u,p=p*_+w*u,m=m*_+S*u;const T=1/Math.sqrt(f*f+h*h+p*p+m*m);f*=T,h*=T,p*=T,m*=T}}e[t]=f,e[t+1]=h,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,i,s,a,c){const u=i[s],f=i[s+1],h=i[s+2],p=i[s+3],m=a[c],v=a[c+1],y=a[c+2],w=a[c+3];return e[t]=u*w+p*m+f*y-h*v,e[t+1]=f*w+p*v+h*m-u*y,e[t+2]=h*w+p*y+u*v-f*m,e[t+3]=p*w-u*m-f*v-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,a=e._z,c=e._order,u=Math.cos,f=Math.sin,h=u(i/2),p=u(s/2),m=u(a/2),v=f(i/2),y=f(s/2),w=f(a/2);switch(c){case"XYZ":this._x=v*p*m+h*y*w,this._y=h*y*m-v*p*w,this._z=h*p*w+v*y*m,this._w=h*p*m-v*y*w;break;case"YXZ":this._x=v*p*m+h*y*w,this._y=h*y*m-v*p*w,this._z=h*p*w-v*y*m,this._w=h*p*m+v*y*w;break;case"ZXY":this._x=v*p*m-h*y*w,this._y=h*y*m+v*p*w,this._z=h*p*w+v*y*m,this._w=h*p*m-v*y*w;break;case"ZYX":this._x=v*p*m-h*y*w,this._y=h*y*m+v*p*w,this._z=h*p*w-v*y*m,this._w=h*p*m+v*y*w;break;case"YZX":this._x=v*p*m+h*y*w,this._y=h*y*m+v*p*w,this._z=h*p*w-v*y*m,this._w=h*p*m-v*y*w;break;case"XZY":this._x=v*p*m-h*y*w,this._y=h*y*m-v*p*w,this._z=h*p*w+v*y*m,this._w=h*p*m+v*y*w;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],a=t[8],c=t[1],u=t[5],f=t[9],h=t[2],p=t[6],m=t[10],v=i+u+m;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(p-f)*y,this._y=(a-h)*y,this._z=(c-s)*y}else if(i>u&&i>m){const y=2*Math.sqrt(1+i-u-m);this._w=(p-f)/y,this._x=.25*y,this._y=(s+c)/y,this._z=(a+h)/y}else if(u>m){const y=2*Math.sqrt(1+u-i-m);this._w=(a-h)/y,this._x=(s+c)/y,this._y=.25*y,this._z=(f+p)/y}else{const y=2*Math.sqrt(1+m-i-u);this._w=(c-s)/y,this._x=(a+h)/y,this._y=(f+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,a=e._z,c=e._w,u=t._x,f=t._y,h=t._z,p=t._w;return this._x=i*p+c*u+s*h-a*f,this._y=s*p+c*f+a*u-i*h,this._z=a*p+c*h+i*f-s*u,this._w=c*p-i*u-s*f-a*h,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,s=e._y,a=e._z,c=e._w,u=this.dot(e);u<0&&(i=-i,s=-s,a=-a,c=-c,u=-u);let f=1-t;if(u<.9995){const h=Math.acos(u),p=Math.sin(h);f=Math.sin(f*h)/p,t=Math.sin(t*h)/p,this._x=this._x*f+i*t,this._y=this._y*f+s*t,this._z=this._z*f+a*t,this._w=this._w*f+c*t,this._onChangeCallback()}else this._x=this._x*f+i*t,this._y=this._y*f+s*t,this._z=this._z*f+a*t,this._w=this._w*f+c*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,t=0,i=0){Z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=e.elements,c=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*c,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*c,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,a=e.x,c=e.y,u=e.z,f=e.w,h=2*(c*s-u*i),p=2*(u*t-a*s),m=2*(a*i-c*t);return this.x=t+f*h+c*m-u*p,this.y=i+f*p+u*h-a*m,this.z=s+f*m+a*p-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,a=e.z,c=t.x,u=t.y,f=t.z;return this.x=s*f-a*u,this.y=a*c-i*f,this.z=i*u-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Of.copy(this).projectOnVector(e),this.sub(Of)}reflect(e){return this.sub(Of.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Of=new Z,Jg=new bl;class dt{constructor(e,t,i,s,a,c,u,f,h){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,u,f,h)}set(e,t,i,s,a,c,u,f,h){const p=this.elements;return p[0]=e,p[1]=s,p[2]=u,p[3]=t,p[4]=a,p[5]=f,p[6]=i,p[7]=c,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],u=i[3],f=i[6],h=i[1],p=i[4],m=i[7],v=i[2],y=i[5],w=i[8],S=s[0],x=s[3],_=s[6],T=s[1],A=s[4],b=s[7],P=s[2],D=s[5],I=s[8];return a[0]=c*S+u*T+f*P,a[3]=c*x+u*A+f*D,a[6]=c*_+u*b+f*I,a[1]=h*S+p*T+m*P,a[4]=h*x+p*A+m*D,a[7]=h*_+p*b+m*I,a[2]=v*S+y*T+w*P,a[5]=v*x+y*A+w*D,a[8]=v*_+y*b+w*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7],p=e[8];return t*c*p-t*u*h-i*a*p+i*u*f+s*a*h-s*c*f}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7],p=e[8],m=p*c-u*h,v=u*f-p*a,y=h*a-c*f,w=t*m+i*v+s*y;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/w;return e[0]=m*S,e[1]=(s*h-p*i)*S,e[2]=(u*i-s*c)*S,e[3]=v*S,e[4]=(p*t-s*f)*S,e[5]=(s*a-u*t)*S,e[6]=y*S,e[7]=(i*f-h*t)*S,e[8]=(c*t-i*a)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,c,u){const f=Math.cos(a),h=Math.sin(a);return this.set(i*f,i*h,-i*(f*c+h*u)+c+e,-s*h,s*f,-s*(-h*c+f*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(kf.makeScale(e,t)),this}rotate(e){return this.premultiply(kf.makeRotation(-e)),this}translate(e,t){return this.premultiply(kf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kf=new dt,e1=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),t1=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Py(){const o={enabled:!0,workingColorSpace:ia,spaces:{},convert:function(s,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Ot&&(s.r=Lr(s.r),s.g=Lr(s.g),s.b=Lr(s.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ot&&(s.r=Ko(s.r),s.g=Ko(s.g),s.b=Ko(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===us?Tu:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,c){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return pl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return pl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(s,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return o.define({[ia]:{primaries:e,whitePoint:i,transfer:Tu,toXYZ:e1,fromXYZ:t1,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Li},outputColorSpaceConfig:{drawingBufferColorSpace:Li}},[Li]:{primaries:e,whitePoint:i,transfer:Ot,toXYZ:e1,fromXYZ:t1,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Li}}}),o}const At=Py();function Lr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ko(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Do;class Ny{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Do===void 0&&(Do=Au("canvas")),Do.width=e.width,Do.height=e.height;const s=Do.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Do}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Au("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let c=0;c<a.length;c++)a[c]=Lr(a[c]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Lr(t[i]/255)*255):t[i]=Lr(t[i]);return{data:t,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ly=0;class Wp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ly++}),this.uuid=Tl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let c=0,u=s.length;c<u;c++)s[c].isDataTexture?a.push(zf(s[c].image)):a.push(zf(s[c]))}else a=zf(s);i.url=a}return t||(e.images[this.uuid]=i),i}}function zf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Ny.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let Dy=0;const Bf=new Z;class qn extends da{constructor(e=qn.DEFAULT_IMAGE,t=qn.DEFAULT_MAPPING,i=Pr,s=Pr,a=zn,c=Zs,u=$i,f=Di,h=qn.DEFAULT_ANISOTROPY,p=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dy++}),this.uuid=Tl(),this.name="",this.source=new Wp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=f,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Bf).x}get height(){return this.source.getSize(Bf).y}get depth(){return this.source.getSize(Bf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){at(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){at(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==E_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dh:e.x=e.x-Math.floor(e.x);break;case Pr:e.x=e.x<0?0:1;break;case Ih:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dh:e.y=e.y-Math.floor(e.y);break;case Pr:e.y=e.y<0?0:1;break;case Ih:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=E_;qn.DEFAULT_ANISOTROPY=1;class cn{constructor(e=0,t=0,i=0,s=1){cn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*s+c[12]*a,this.y=c[1]*t+c[5]*i+c[9]*s+c[13]*a,this.z=c[2]*t+c[6]*i+c[10]*s+c[14]*a,this.w=c[3]*t+c[7]*i+c[11]*s+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a;const f=e.elements,h=f[0],p=f[4],m=f[8],v=f[1],y=f[5],w=f[9],S=f[2],x=f[6],_=f[10];if(Math.abs(p-v)<.01&&Math.abs(m-S)<.01&&Math.abs(w-x)<.01){if(Math.abs(p+v)<.1&&Math.abs(m+S)<.1&&Math.abs(w+x)<.1&&Math.abs(h+y+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(h+1)/2,b=(y+1)/2,P=(_+1)/2,D=(p+v)/4,I=(m+S)/4,F=(w+x)/4;return A>b&&A>P?A<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(A),s=D/i,a=I/i):b>P?b<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(b),i=D/s,a=F/s):P<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(P),i=I/a,s=F/a),this.set(i,s,a,t),this}let T=Math.sqrt((x-w)*(x-w)+(m-S)*(m-S)+(v-p)*(v-p));return Math.abs(T)<.001&&(T=1),this.x=(x-w)/T,this.y=(m-S)/T,this.z=(v-p)/T,this.w=Math.acos((h+y+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this.w=yt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this.w=yt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Iy extends da{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new cn(0,0,e,t),this.scissorTest=!1,this.viewport=new cn(0,0,e,t);const s={width:e,height:t,depth:i.depth},a=new qn(s);this.textures=[];const c=i.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Wp(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dr extends Iy{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class I_ extends qn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uy extends qn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Al{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Xi):Xi.fromBufferAttribute(a,c),Xi.applyMatrix4(e.matrixWorld),this.expandByPoint(Xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Bc.copy(i.boundingBox)),Bc.applyMatrix4(e.matrixWorld),this.union(Bc)}const s=e.children;for(let a=0,c=s.length;a<c;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xi),Xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Za),Vc.subVectors(this.max,Za),Io.subVectors(e.a,Za),Uo.subVectors(e.b,Za),Fo.subVectors(e.c,Za),rs.subVectors(Uo,Io),ss.subVectors(Fo,Uo),zs.subVectors(Io,Fo);let t=[0,-rs.z,rs.y,0,-ss.z,ss.y,0,-zs.z,zs.y,rs.z,0,-rs.x,ss.z,0,-ss.x,zs.z,0,-zs.x,-rs.y,rs.x,0,-ss.y,ss.x,0,-zs.y,zs.x,0];return!Vf(t,Io,Uo,Fo,Vc)||(t=[1,0,0,0,1,0,0,0,1],!Vf(t,Io,Uo,Fo,Vc))?!1:(Hc.crossVectors(rs,ss),t=[Hc.x,Hc.y,Hc.z],Vf(t,Io,Uo,Fo,Vc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wr=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Xi=new Z,Bc=new Al,Io=new Z,Uo=new Z,Fo=new Z,rs=new Z,ss=new Z,zs=new Z,Za=new Z,Vc=new Z,Hc=new Z,Bs=new Z;function Vf(o,e,t,i,s){for(let a=0,c=o.length-3;a<=c;a+=3){Bs.fromArray(o,a);const u=s.x*Math.abs(Bs.x)+s.y*Math.abs(Bs.y)+s.z*Math.abs(Bs.z),f=e.dot(Bs),h=t.dot(Bs),p=i.dot(Bs);if(Math.max(-Math.max(f,h,p),Math.min(f,h,p))>u)return!1}return!0}const Fy=new Al,Qa=new Z,Hf=new Z;class Cl{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Fy.setFromPoints(e).getCenter(i);let s=0;for(let a=0,c=e.length;a<c;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qa.subVectors(e,this.center);const t=Qa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Qa,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qa.copy(e.center).add(Hf)),this.expandByPoint(Qa.copy(e.center).sub(Hf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Er=new Z,Gf=new Z,Gc=new Z,os=new Z,Wf=new Z,Wc=new Z,jf=new Z;class jp{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Er)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Er.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Er.copy(this.origin).addScaledVector(this.direction,t),Er.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Gf.copy(e).add(t).multiplyScalar(.5),Gc.copy(t).sub(e).normalize(),os.copy(this.origin).sub(Gf);const a=e.distanceTo(t)*.5,c=-this.direction.dot(Gc),u=os.dot(this.direction),f=-os.dot(Gc),h=os.lengthSq(),p=Math.abs(1-c*c);let m,v,y,w;if(p>0)if(m=c*f-u,v=c*u-f,w=a*p,m>=0)if(v>=-w)if(v<=w){const S=1/p;m*=S,v*=S,y=m*(m+c*v+2*u)+v*(c*m+v+2*f)+h}else v=a,m=Math.max(0,-(c*v+u)),y=-m*m+v*(v+2*f)+h;else v=-a,m=Math.max(0,-(c*v+u)),y=-m*m+v*(v+2*f)+h;else v<=-w?(m=Math.max(0,-(-c*a+u)),v=m>0?-a:Math.min(Math.max(-a,-f),a),y=-m*m+v*(v+2*f)+h):v<=w?(m=0,v=Math.min(Math.max(-a,-f),a),y=v*(v+2*f)+h):(m=Math.max(0,-(c*a+u)),v=m>0?a:Math.min(Math.max(-a,-f),a),y=-m*m+v*(v+2*f)+h);else v=c>0?-a:a,m=Math.max(0,-(c*v+u)),y=-m*m+v*(v+2*f)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Gf).addScaledVector(Gc,v),y}intersectSphere(e,t){Er.subVectors(e.center,this.origin);const i=Er.dot(this.direction),s=Er.dot(Er)-i*i,a=e.radius*e.radius;if(s>a)return null;const c=Math.sqrt(a-s),u=i-c,f=i+c;return f<0?null:u<0?this.at(f,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,c,u,f;const h=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,v=this.origin;return h>=0?(i=(e.min.x-v.x)*h,s=(e.max.x-v.x)*h):(i=(e.max.x-v.x)*h,s=(e.min.x-v.x)*h),p>=0?(a=(e.min.y-v.y)*p,c=(e.max.y-v.y)*p):(a=(e.max.y-v.y)*p,c=(e.min.y-v.y)*p),i>c||a>s||((a>i||isNaN(i))&&(i=a),(c<s||isNaN(s))&&(s=c),m>=0?(u=(e.min.z-v.z)*m,f=(e.max.z-v.z)*m):(u=(e.max.z-v.z)*m,f=(e.min.z-v.z)*m),i>f||u>s)||((u>i||i!==i)&&(i=u),(f<s||s!==s)&&(s=f),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Er)!==null}intersectTriangle(e,t,i,s,a){Wf.subVectors(t,e),Wc.subVectors(i,e),jf.crossVectors(Wf,Wc);let c=this.direction.dot(jf),u;if(c>0){if(s)return null;u=1}else if(c<0)u=-1,c=-c;else return null;os.subVectors(this.origin,e);const f=u*this.direction.dot(Wc.crossVectors(os,Wc));if(f<0)return null;const h=u*this.direction.dot(Wf.cross(os));if(h<0||f+h>c)return null;const p=-u*os.dot(jf);return p<0?null:this.at(p/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(e,t,i,s,a,c,u,f,h,p,m,v,y,w,S,x){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,u,f,h,p,m,v,y,w,S,x)}set(e,t,i,s,a,c,u,f,h,p,m,v,y,w,S,x){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=s,_[1]=a,_[5]=c,_[9]=u,_[13]=f,_[2]=h,_[6]=p,_[10]=m,_[14]=v,_[3]=y,_[7]=w,_[11]=S,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Oo.setFromMatrixColumn(e,0).length(),a=1/Oo.setFromMatrixColumn(e,1).length(),c=1/Oo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,a=e.z,c=Math.cos(i),u=Math.sin(i),f=Math.cos(s),h=Math.sin(s),p=Math.cos(a),m=Math.sin(a);if(e.order==="XYZ"){const v=c*p,y=c*m,w=u*p,S=u*m;t[0]=f*p,t[4]=-f*m,t[8]=h,t[1]=y+w*h,t[5]=v-S*h,t[9]=-u*f,t[2]=S-v*h,t[6]=w+y*h,t[10]=c*f}else if(e.order==="YXZ"){const v=f*p,y=f*m,w=h*p,S=h*m;t[0]=v+S*u,t[4]=w*u-y,t[8]=c*h,t[1]=c*m,t[5]=c*p,t[9]=-u,t[2]=y*u-w,t[6]=S+v*u,t[10]=c*f}else if(e.order==="ZXY"){const v=f*p,y=f*m,w=h*p,S=h*m;t[0]=v-S*u,t[4]=-c*m,t[8]=w+y*u,t[1]=y+w*u,t[5]=c*p,t[9]=S-v*u,t[2]=-c*h,t[6]=u,t[10]=c*f}else if(e.order==="ZYX"){const v=c*p,y=c*m,w=u*p,S=u*m;t[0]=f*p,t[4]=w*h-y,t[8]=v*h+S,t[1]=f*m,t[5]=S*h+v,t[9]=y*h-w,t[2]=-h,t[6]=u*f,t[10]=c*f}else if(e.order==="YZX"){const v=c*f,y=c*h,w=u*f,S=u*h;t[0]=f*p,t[4]=S-v*m,t[8]=w*m+y,t[1]=m,t[5]=c*p,t[9]=-u*p,t[2]=-h*p,t[6]=y*m+w,t[10]=v-S*m}else if(e.order==="XZY"){const v=c*f,y=c*h,w=u*f,S=u*h;t[0]=f*p,t[4]=-m,t[8]=h*p,t[1]=v*m+S,t[5]=c*p,t[9]=y*m-w,t[2]=w*m-y,t[6]=u*p,t[10]=S*m+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Oy,e,ky)}lookAt(e,t,i){const s=this.elements;return hi.subVectors(e,t),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),as.crossVectors(i,hi),as.lengthSq()===0&&(Math.abs(i.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),as.crossVectors(i,hi)),as.normalize(),jc.crossVectors(hi,as),s[0]=as.x,s[4]=jc.x,s[8]=hi.x,s[1]=as.y,s[5]=jc.y,s[9]=hi.y,s[2]=as.z,s[6]=jc.z,s[10]=hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],u=i[4],f=i[8],h=i[12],p=i[1],m=i[5],v=i[9],y=i[13],w=i[2],S=i[6],x=i[10],_=i[14],T=i[3],A=i[7],b=i[11],P=i[15],D=s[0],I=s[4],F=s[8],E=s[12],L=s[1],k=s[5],W=s[9],V=s[13],J=s[2],ee=s[6],Q=s[10],Y=s[14],q=s[3],de=s[7],re=s[11],B=s[15];return a[0]=c*D+u*L+f*J+h*q,a[4]=c*I+u*k+f*ee+h*de,a[8]=c*F+u*W+f*Q+h*re,a[12]=c*E+u*V+f*Y+h*B,a[1]=p*D+m*L+v*J+y*q,a[5]=p*I+m*k+v*ee+y*de,a[9]=p*F+m*W+v*Q+y*re,a[13]=p*E+m*V+v*Y+y*B,a[2]=w*D+S*L+x*J+_*q,a[6]=w*I+S*k+x*ee+_*de,a[10]=w*F+S*W+x*Q+_*re,a[14]=w*E+S*V+x*Y+_*B,a[3]=T*D+A*L+b*J+P*q,a[7]=T*I+A*k+b*ee+P*de,a[11]=T*F+A*W+b*Q+P*re,a[15]=T*E+A*V+b*Y+P*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],c=e[1],u=e[5],f=e[9],h=e[13],p=e[2],m=e[6],v=e[10],y=e[14],w=e[3],S=e[7],x=e[11],_=e[15],T=f*y-h*v,A=u*y-h*m,b=u*v-f*m,P=c*y-h*p,D=c*v-f*p,I=c*m-u*p;return t*(S*T-x*A+_*b)-i*(w*T-x*P+_*D)+s*(w*A-S*P+_*I)-a*(w*b-S*D+x*I)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7],p=e[8],m=e[9],v=e[10],y=e[11],w=e[12],S=e[13],x=e[14],_=e[15],T=m*x*h-S*v*h+S*f*y-u*x*y-m*f*_+u*v*_,A=w*v*h-p*x*h-w*f*y+c*x*y+p*f*_-c*v*_,b=p*S*h-w*m*h+w*u*y-c*S*y-p*u*_+c*m*_,P=w*m*f-p*S*f-w*u*v+c*S*v+p*u*x-c*m*x,D=t*T+i*A+s*b+a*P;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/D;return e[0]=T*I,e[1]=(S*v*a-m*x*a-S*s*y+i*x*y+m*s*_-i*v*_)*I,e[2]=(u*x*a-S*f*a+S*s*h-i*x*h-u*s*_+i*f*_)*I,e[3]=(m*f*a-u*v*a-m*s*h+i*v*h+u*s*y-i*f*y)*I,e[4]=A*I,e[5]=(p*x*a-w*v*a+w*s*y-t*x*y-p*s*_+t*v*_)*I,e[6]=(w*f*a-c*x*a-w*s*h+t*x*h+c*s*_-t*f*_)*I,e[7]=(c*v*a-p*f*a+p*s*h-t*v*h-c*s*y+t*f*y)*I,e[8]=b*I,e[9]=(w*m*a-p*S*a-w*i*y+t*S*y+p*i*_-t*m*_)*I,e[10]=(c*S*a-w*u*a+w*i*h-t*S*h-c*i*_+t*u*_)*I,e[11]=(p*u*a-c*m*a-p*i*h+t*m*h+c*i*y-t*u*y)*I,e[12]=P*I,e[13]=(p*S*s-w*m*s+w*i*v-t*S*v-p*i*x+t*m*x)*I,e[14]=(w*u*s-c*S*s-w*i*f+t*S*f+c*i*x-t*u*x)*I,e[15]=(c*m*s-p*u*s+p*i*f-t*m*f-c*i*v+t*u*v)*I,this}scale(e){const t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),a=1-i,c=e.x,u=e.y,f=e.z,h=a*c,p=a*u;return this.set(h*c+i,h*u-s*f,h*f+s*u,0,h*u+s*f,p*u+i,p*f-s*c,0,h*f-s*u,p*f+s*c,a*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,c){return this.set(1,i,a,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,a=t._x,c=t._y,u=t._z,f=t._w,h=a+a,p=c+c,m=u+u,v=a*h,y=a*p,w=a*m,S=c*p,x=c*m,_=u*m,T=f*h,A=f*p,b=f*m,P=i.x,D=i.y,I=i.z;return s[0]=(1-(S+_))*P,s[1]=(y+b)*P,s[2]=(w-A)*P,s[3]=0,s[4]=(y-b)*D,s[5]=(1-(v+_))*D,s[6]=(x+T)*D,s[7]=0,s[8]=(w+A)*I,s[9]=(x-T)*I,s[10]=(1-(v+S))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let a=Oo.set(s[0],s[1],s[2]).length();const c=Oo.set(s[4],s[5],s[6]).length(),u=Oo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),qi.copy(this);const h=1/a,p=1/c,m=1/u;return qi.elements[0]*=h,qi.elements[1]*=h,qi.elements[2]*=h,qi.elements[4]*=p,qi.elements[5]*=p,qi.elements[6]*=p,qi.elements[8]*=m,qi.elements[9]*=m,qi.elements[10]*=m,t.setFromRotationMatrix(qi),i.x=a,i.y=c,i.z=u,this}makePerspective(e,t,i,s,a,c,u=lr,f=!1){const h=this.elements,p=2*a/(t-e),m=2*a/(i-s),v=(t+e)/(t-e),y=(i+s)/(i-s);let w,S;if(f)w=a/(c-a),S=c*a/(c-a);else if(u===lr)w=-(c+a)/(c-a),S=-2*c*a/(c-a);else if(u===bu)w=-c/(c-a),S=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=m,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=w,h[14]=S,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,s,a,c,u=lr,f=!1){const h=this.elements,p=2/(t-e),m=2/(i-s),v=-(t+e)/(t-e),y=-(i+s)/(i-s);let w,S;if(f)w=1/(c-a),S=c/(c-a);else if(u===lr)w=-2/(c-a),S=-(c+a)/(c-a);else if(u===bu)w=-1/(c-a),S=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=m,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=w,h[14]=S,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Oo=new Z,qi=new sn,Oy=new Z(0,0,0),ky=new Z(1,1,1),as=new Z,jc=new Z,hi=new Z,n1=new sn,i1=new bl;class Ur{constructor(e=0,t=0,i=0,s=Ur.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,a=s[0],c=s[4],u=s[8],f=s[1],h=s[5],p=s[9],m=s[2],v=s[6],y=s[10];switch(t){case"XYZ":this._y=Math.asin(yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,y),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(yt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-m,y),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-yt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(u,y));break;case"XZY":this._z=Math.asin(-yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-p,y),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return n1.makeRotationFromQuaternion(e),this.setFromRotationMatrix(n1,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return i1.setFromEuler(this),this.setFromQuaternion(i1,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ur.DEFAULT_ORDER="XYZ";class U_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zy=0;const r1=new Z,ko=new bl,Tr=new sn,Xc=new Z,Ja=new Z,By=new Z,Vy=new bl,s1=new Z(1,0,0),o1=new Z(0,1,0),a1=new Z(0,0,1),l1={type:"added"},Hy={type:"removed"},zo={type:"childadded",child:null},Xf={type:"childremoved",child:null};class Yn extends da{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=Tl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yn.DEFAULT_UP.clone();const e=new Z,t=new Ur,i=new bl,s=new Z(1,1,1);function a(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new sn},normalMatrix:{value:new dt}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=Yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new U_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ko.setFromAxisAngle(e,t),this.quaternion.multiply(ko),this}rotateOnWorldAxis(e,t){return ko.setFromAxisAngle(e,t),this.quaternion.premultiply(ko),this}rotateX(e){return this.rotateOnAxis(s1,e)}rotateY(e){return this.rotateOnAxis(o1,e)}rotateZ(e){return this.rotateOnAxis(a1,e)}translateOnAxis(e,t){return r1.copy(e).applyQuaternion(this.quaternion),this.position.add(r1.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(s1,e)}translateY(e){return this.translateOnAxis(o1,e)}translateZ(e){return this.translateOnAxis(a1,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Xc.copy(e):Xc.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ja.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tr.lookAt(Ja,Xc,this.up):Tr.lookAt(Xc,Ja,this.up),this.quaternion.setFromRotationMatrix(Tr),s&&(Tr.extractRotation(s.matrixWorld),ko.setFromRotationMatrix(Tr),this.quaternion.premultiply(ko.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(l1),zo.child=e,this.dispatchEvent(zo),zo.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hy),Xf.child=e,this.dispatchEvent(Xf),Xf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(l1),zo.child=e,this.dispatchEvent(zo),zo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ja,e,By),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ja,Vy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(u=>({...u})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let h=0,p=f.length;h<p;h++){const m=f[h];a(e.shapes,m)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,h=this.material.length;f<h;f++)u.push(a(e.materials,this.material[f]));s.material=u}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];s.animations.push(a(e.animations,f))}}if(t){const u=c(e.geometries),f=c(e.materials),h=c(e.textures),p=c(e.images),m=c(e.shapes),v=c(e.skeletons),y=c(e.animations),w=c(e.nodes);u.length>0&&(i.geometries=u),f.length>0&&(i.materials=f),h.length>0&&(i.textures=h),p.length>0&&(i.images=p),m.length>0&&(i.shapes=m),v.length>0&&(i.skeletons=v),y.length>0&&(i.animations=y),w.length>0&&(i.nodes=w)}return i.object=s,i;function c(u){const f=[];for(const h in u){const p=u[h];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Yn.DEFAULT_UP=new Z(0,1,0);Yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yi=new Z,br=new Z,qf=new Z,Ar=new Z,Bo=new Z,Vo=new Z,c1=new Z,Yf=new Z,$f=new Z,Kf=new Z,Zf=new cn,Qf=new cn,Jf=new cn;class Ii{constructor(e=new Z,t=new Z,i=new Z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Yi.subVectors(e,t),s.cross(Yi);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){Yi.subVectors(s,t),br.subVectors(i,t),qf.subVectors(e,t);const c=Yi.dot(Yi),u=Yi.dot(br),f=Yi.dot(qf),h=br.dot(br),p=br.dot(qf),m=c*h-u*u;if(m===0)return a.set(0,0,0),null;const v=1/m,y=(h*f-u*p)*v,w=(c*p-u*f)*v;return a.set(1-y-w,w,y)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ar)===null?!1:Ar.x>=0&&Ar.y>=0&&Ar.x+Ar.y<=1}static getInterpolation(e,t,i,s,a,c,u,f){return this.getBarycoord(e,t,i,s,Ar)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,Ar.x),f.addScaledVector(c,Ar.y),f.addScaledVector(u,Ar.z),f)}static getInterpolatedAttribute(e,t,i,s,a,c){return Zf.setScalar(0),Qf.setScalar(0),Jf.setScalar(0),Zf.fromBufferAttribute(e,t),Qf.fromBufferAttribute(e,i),Jf.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(Zf,a.x),c.addScaledVector(Qf,a.y),c.addScaledVector(Jf,a.z),c}static isFrontFacing(e,t,i,s){return Yi.subVectors(i,t),br.subVectors(e,t),Yi.cross(br).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yi.subVectors(this.c,this.b),br.subVectors(this.a,this.b),Yi.cross(br).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ii.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,a){return Ii.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return Ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,a=this.c;let c,u;Bo.subVectors(s,i),Vo.subVectors(a,i),Yf.subVectors(e,i);const f=Bo.dot(Yf),h=Vo.dot(Yf);if(f<=0&&h<=0)return t.copy(i);$f.subVectors(e,s);const p=Bo.dot($f),m=Vo.dot($f);if(p>=0&&m<=p)return t.copy(s);const v=f*m-p*h;if(v<=0&&f>=0&&p<=0)return c=f/(f-p),t.copy(i).addScaledVector(Bo,c);Kf.subVectors(e,a);const y=Bo.dot(Kf),w=Vo.dot(Kf);if(w>=0&&y<=w)return t.copy(a);const S=y*h-f*w;if(S<=0&&h>=0&&w<=0)return u=h/(h-w),t.copy(i).addScaledVector(Vo,u);const x=p*w-y*m;if(x<=0&&m-p>=0&&y-w>=0)return c1.subVectors(a,s),u=(m-p)/(m-p+(y-w)),t.copy(s).addScaledVector(c1,u);const _=1/(x+S+v);return c=S*_,u=v*_,t.copy(i).addScaledVector(Bo,c).addScaledVector(Vo,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const F_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ls={h:0,s:0,l:0},qc={h:0,s:0,l:0};function eh(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class Lt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=At.workingColorSpace){return this.r=e,this.g=t,this.b=i,At.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=At.workingColorSpace){if(e=Ry(e,1),t=yt(t,0,1),i=yt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,c=2*i-a;this.r=eh(c,a,e+1/3),this.g=eh(c,a,e),this.b=eh(c,a,e-1/3)}return At.colorSpaceToWorking(this,s),this}setStyle(e,t=Li){function i(a){a!==void 0&&parseFloat(a)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=s[1],u=s[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:at("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Li){const i=F_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}copyLinearToSRGB(e){return this.r=Ko(e.r),this.g=Ko(e.g),this.b=Ko(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Li){return At.workingToColorSpace(On.copy(this),e),Math.round(yt(On.r*255,0,255))*65536+Math.round(yt(On.g*255,0,255))*256+Math.round(yt(On.b*255,0,255))}getHexString(e=Li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.workingToColorSpace(On.copy(this),t);const i=On.r,s=On.g,a=On.b,c=Math.max(i,s,a),u=Math.min(i,s,a);let f,h;const p=(u+c)/2;if(u===c)f=0,h=0;else{const m=c-u;switch(h=p<=.5?m/(c+u):m/(2-c-u),c){case i:f=(s-a)/m+(s<a?6:0);break;case s:f=(a-i)/m+2;break;case a:f=(i-s)/m+4;break}f/=6}return e.h=f,e.s=h,e.l=p,e}getRGB(e,t=At.workingColorSpace){return At.workingToColorSpace(On.copy(this),t),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=Li){At.workingToColorSpace(On.copy(this),e);const t=On.r,i=On.g,s=On.b;return e!==Li?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ls),this.setHSL(ls.h+e,ls.s+t,ls.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ls),e.getHSL(qc);const i=Ff(ls.h,qc.h,t),s=Ff(ls.s,qc.s,t),a=Ff(ls.l,qc.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new Lt;Lt.NAMES=F_;let Gy=0;class oo extends da{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=Tl(),this.name="",this.type="Material",this.blending=$o,this.side=_s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mh,this.blendDst=wh,this.blendEquation=$s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lo,this.stencilZFail=Lo,this.stencilZPass=Lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){at(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){at(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$o&&(i.blending=this.blending),this.side!==_s&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Mh&&(i.blendSrc=this.blendSrc),this.blendDst!==wh&&(i.blendDst=this.blendDst),this.blendEquation!==$s&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ea&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Lo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Lo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Lo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const c=[];for(const u in a){const f=a[u];delete f.metadata,c.push(f)}return c}if(t){const a=s(e.textures),c=s(e.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ml extends oo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ur,this.combine=g_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new Z,Yc=new Ct;let Wy=0;class Oi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=$g,this.updateRanges=[],this.gpuType=ar,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Yc.fromBufferAttribute(this,t),Yc.applyMatrix3(e),this.setXY(t,Yc.x,Yc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix3(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ka(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ti(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ka(t,this.array)),t}setX(e,t){return this.normalized&&(t=ti(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ka(t,this.array)),t}setY(e,t){return this.normalized&&(t=ti(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ka(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ti(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ka(t,this.array)),t}setW(e,t){return this.normalized&&(t=ti(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ti(t,this.array),i=ti(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ti(t,this.array),i=ti(i,this.array),s=ti(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=ti(t,this.array),i=ti(i,this.array),s=ti(s,this.array),a=ti(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$g&&(e.usage=this.usage),e}}class O_ extends Oi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class k_ extends Oi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ht extends Oi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let jy=0;const Pi=new sn,th=new Yn,Ho=new Z,pi=new Al,el=new Al,Tn=new Z;class vn extends da{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=Tl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(D_(e)?k_:O_)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new dt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pi.makeRotationFromQuaternion(e),this.applyMatrix4(Pi),this}rotateX(e){return Pi.makeRotationX(e),this.applyMatrix4(Pi),this}rotateY(e){return Pi.makeRotationY(e),this.applyMatrix4(Pi),this}rotateZ(e){return Pi.makeRotationZ(e),this.applyMatrix4(Pi),this}translate(e,t,i){return Pi.makeTranslation(e,t,i),this.applyMatrix4(Pi),this}scale(e,t,i){return Pi.makeScale(e,t,i),this.applyMatrix4(Pi),this}lookAt(e){return th.lookAt(e),th.updateMatrix(),this.applyMatrix4(th.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ho).negate(),this.translate(Ho.x,Ho.y,Ho.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,a=e.length;s<a;s++){const c=e[s];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Ht(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Al);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const a=t[i];pi.setFromBufferAttribute(a),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const i=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];el.setFromBufferAttribute(u),this.morphTargetsRelative?(Tn.addVectors(pi.min,el.min),pi.expandByPoint(Tn),Tn.addVectors(pi.max,el.max),pi.expandByPoint(Tn)):(pi.expandByPoint(el.min),pi.expandByPoint(el.max))}pi.getCenter(i);let s=0;for(let a=0,c=e.count;a<c;a++)Tn.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(Tn));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],f=this.morphTargetsRelative;for(let h=0,p=u.count;h<p;h++)Tn.fromBufferAttribute(u,h),f&&(Ho.fromBufferAttribute(e,h),Tn.add(Ho)),s=Math.max(s,i.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oi(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],f=[];for(let F=0;F<i.count;F++)u[F]=new Z,f[F]=new Z;const h=new Z,p=new Z,m=new Z,v=new Ct,y=new Ct,w=new Ct,S=new Z,x=new Z;function _(F,E,L){h.fromBufferAttribute(i,F),p.fromBufferAttribute(i,E),m.fromBufferAttribute(i,L),v.fromBufferAttribute(a,F),y.fromBufferAttribute(a,E),w.fromBufferAttribute(a,L),p.sub(h),m.sub(h),y.sub(v),w.sub(v);const k=1/(y.x*w.y-w.x*y.y);isFinite(k)&&(S.copy(p).multiplyScalar(w.y).addScaledVector(m,-y.y).multiplyScalar(k),x.copy(m).multiplyScalar(y.x).addScaledVector(p,-w.x).multiplyScalar(k),u[F].add(S),u[E].add(S),u[L].add(S),f[F].add(x),f[E].add(x),f[L].add(x))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let F=0,E=T.length;F<E;++F){const L=T[F],k=L.start,W=L.count;for(let V=k,J=k+W;V<J;V+=3)_(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const A=new Z,b=new Z,P=new Z,D=new Z;function I(F){P.fromBufferAttribute(s,F),D.copy(P);const E=u[F];A.copy(E),A.sub(P.multiplyScalar(P.dot(E))).normalize(),b.crossVectors(D,E);const k=b.dot(f[F])<0?-1:1;c.setXYZW(F,A.x,A.y,A.z,k)}for(let F=0,E=T.length;F<E;++F){const L=T[F],k=L.start,W=L.count;for(let V=k,J=k+W;V<J;V+=3)I(e.getX(V+0)),I(e.getX(V+1)),I(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Oi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let v=0,y=i.count;v<y;v++)i.setXYZ(v,0,0,0);const s=new Z,a=new Z,c=new Z,u=new Z,f=new Z,h=new Z,p=new Z,m=new Z;if(e)for(let v=0,y=e.count;v<y;v+=3){const w=e.getX(v+0),S=e.getX(v+1),x=e.getX(v+2);s.fromBufferAttribute(t,w),a.fromBufferAttribute(t,S),c.fromBufferAttribute(t,x),p.subVectors(c,a),m.subVectors(s,a),p.cross(m),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,S),h.fromBufferAttribute(i,x),u.add(p),f.add(p),h.add(p),i.setXYZ(w,u.x,u.y,u.z),i.setXYZ(S,f.x,f.y,f.z),i.setXYZ(x,h.x,h.y,h.z)}else for(let v=0,y=t.count;v<y;v+=3)s.fromBufferAttribute(t,v+0),a.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),p.subVectors(c,a),m.subVectors(s,a),p.cross(m),i.setXYZ(v+0,p.x,p.y,p.z),i.setXYZ(v+1,p.x,p.y,p.z),i.setXYZ(v+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tn.fromBufferAttribute(e,t),Tn.normalize(),e.setXYZ(t,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function e(u,f){const h=u.array,p=u.itemSize,m=u.normalized,v=new h.constructor(f.length*p);let y=0,w=0;for(let S=0,x=f.length;S<x;S++){u.isInterleavedBufferAttribute?y=f[S]*u.data.stride+u.offset:y=f[S]*p;for(let _=0;_<p;_++)v[w++]=h[y++]}return new Oi(v,p,m)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vn,i=this.index.array,s=this.attributes;for(const u in s){const f=s[u],h=e(f,i);t.setAttribute(u,h)}const a=this.morphAttributes;for(const u in a){const f=[],h=a[u];for(let p=0,m=h.length;p<m;p++){const v=h[p],y=e(v,i);f.push(y)}t.morphAttributes[u]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,f=c.length;u<f;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const h=i[f];e.data.attributes[f]=h.toJSON(e.data)}const s={};let a=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],p=[];for(let m=0,v=h.length;m<v;m++){const y=h[m];p.push(y.toJSON(e.data))}p.length>0&&(s[f]=p,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const h in s){const p=s[h];this.setAttribute(h,p.clone(t))}const a=e.morphAttributes;for(const h in a){const p=[],m=a[h];for(let v=0,y=m.length;v<y;v++)p.push(m[v].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,p=c.length;h<p;h++){const m=c[h];this.addGroup(m.start,m.count,m.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const u1=new sn,Vs=new jp,$c=new Cl,d1=new Z,Kc=new Z,Zc=new Z,Qc=new Z,nh=new Z,Jc=new Z,f1=new Z,eu=new Z;class ki extends Yn{constructor(e=new vn,t=new ml){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(a&&u){Jc.set(0,0,0);for(let f=0,h=a.length;f<h;f++){const p=u[f],m=a[f];p!==0&&(nh.fromBufferAttribute(m,e),c?Jc.addScaledVector(nh,p):Jc.addScaledVector(nh.sub(t),p))}t.add(Jc)}return t}raycast(e,t){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$c.copy(i.boundingSphere),$c.applyMatrix4(a),Vs.copy(e.ray).recast(e.near),!($c.containsPoint(Vs.origin)===!1&&(Vs.intersectSphere($c,d1)===null||Vs.origin.distanceToSquared(d1)>(e.far-e.near)**2))&&(u1.copy(a).invert(),Vs.copy(e.ray).applyMatrix4(u1),!(i.boundingBox!==null&&Vs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Vs)))}_computeIntersections(e,t,i){let s;const a=this.geometry,c=this.material,u=a.index,f=a.attributes.position,h=a.attributes.uv,p=a.attributes.uv1,m=a.attributes.normal,v=a.groups,y=a.drawRange;if(u!==null)if(Array.isArray(c))for(let w=0,S=v.length;w<S;w++){const x=v[w],_=c[x.materialIndex],T=Math.max(x.start,y.start),A=Math.min(u.count,Math.min(x.start+x.count,y.start+y.count));for(let b=T,P=A;b<P;b+=3){const D=u.getX(b),I=u.getX(b+1),F=u.getX(b+2);s=tu(this,_,e,i,h,p,m,D,I,F),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const w=Math.max(0,y.start),S=Math.min(u.count,y.start+y.count);for(let x=w,_=S;x<_;x+=3){const T=u.getX(x),A=u.getX(x+1),b=u.getX(x+2);s=tu(this,c,e,i,h,p,m,T,A,b),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(f!==void 0)if(Array.isArray(c))for(let w=0,S=v.length;w<S;w++){const x=v[w],_=c[x.materialIndex],T=Math.max(x.start,y.start),A=Math.min(f.count,Math.min(x.start+x.count,y.start+y.count));for(let b=T,P=A;b<P;b+=3){const D=b,I=b+1,F=b+2;s=tu(this,_,e,i,h,p,m,D,I,F),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const w=Math.max(0,y.start),S=Math.min(f.count,y.start+y.count);for(let x=w,_=S;x<_;x+=3){const T=x,A=x+1,b=x+2;s=tu(this,c,e,i,h,p,m,T,A,b),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}}function Xy(o,e,t,i,s,a,c,u){let f;if(e.side===ni?f=i.intersectTriangle(c,a,s,!0,u):f=i.intersectTriangle(s,a,c,e.side===_s,u),f===null)return null;eu.copy(u),eu.applyMatrix4(o.matrixWorld);const h=t.ray.origin.distanceTo(eu);return h<t.near||h>t.far?null:{distance:h,point:eu.clone(),object:o}}function tu(o,e,t,i,s,a,c,u,f,h){o.getVertexPosition(u,Kc),o.getVertexPosition(f,Zc),o.getVertexPosition(h,Qc);const p=Xy(o,e,t,i,Kc,Zc,Qc,f1);if(p){const m=new Z;Ii.getBarycoord(f1,Kc,Zc,Qc,m),s&&(p.uv=Ii.getInterpolatedAttribute(s,u,f,h,m,new Ct)),a&&(p.uv1=Ii.getInterpolatedAttribute(a,u,f,h,m,new Ct)),c&&(p.normal=Ii.getInterpolatedAttribute(c,u,f,h,m,new Z),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const v={a:u,b:f,c:h,normal:new Z,materialIndex:0};Ii.getNormal(Kc,Zc,Qc,v.normal),p.face=v,p.barycoord=m}return p}class Rl extends vn{constructor(e=1,t=1,i=1,s=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:c};const u=this;s=Math.floor(s),a=Math.floor(a),c=Math.floor(c);const f=[],h=[],p=[],m=[];let v=0,y=0;w("z","y","x",-1,-1,i,t,e,c,a,0),w("z","y","x",1,-1,i,t,-e,c,a,1),w("x","z","y",1,1,e,i,t,s,c,2),w("x","z","y",1,-1,e,i,-t,s,c,3),w("x","y","z",1,-1,e,t,i,s,a,4),w("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(f),this.setAttribute("position",new Ht(h,3)),this.setAttribute("normal",new Ht(p,3)),this.setAttribute("uv",new Ht(m,2));function w(S,x,_,T,A,b,P,D,I,F,E){const L=b/I,k=P/F,W=b/2,V=P/2,J=D/2,ee=I+1,Q=F+1;let Y=0,q=0;const de=new Z;for(let re=0;re<Q;re++){const B=re*k-V;for(let oe=0;oe<ee;oe++){const be=oe*L-W;de[S]=be*T,de[x]=B*A,de[_]=J,h.push(de.x,de.y,de.z),de[S]=0,de[x]=0,de[_]=D>0?1:-1,p.push(de.x,de.y,de.z),m.push(oe/I),m.push(1-re/F),Y+=1}}for(let re=0;re<F;re++)for(let B=0;B<I;B++){const oe=v+B+ee*re,be=v+B+ee*(re+1),Fe=v+(B+1)+ee*(re+1),Be=v+(B+1)+ee*re;f.push(oe,be,Be),f.push(be,Fe,Be),q+=6}u.addGroup(y,q,E),y+=q,v+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ra(o){const e={};for(const t in o){e[t]={};for(const i in o[t]){const s=o[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function jn(o){const e={};for(let t=0;t<o.length;t++){const i=ra(o[t]);for(const s in i)e[s]=i[s]}return e}function qy(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function z_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const Yy={clone:ra,merge:jn};var $y=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ky=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hr extends oo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$y,this.fragmentShader=Ky,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ra(e.uniforms),this.uniformsGroups=qy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class B_ extends Yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=lr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const cs=new Z,h1=new Ct,p1=new Ct;class gi extends B_{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hp*2*Math.atan(Math.tan(xu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(cs.x,cs.y).multiplyScalar(-e/cs.z),cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cs.x,cs.y).multiplyScalar(-e/cs.z)}getViewSize(e,t){return this.getViewBounds(e,h1,p1),t.subVectors(p1,h1)}setViewOffset(e,t,i,s,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xu*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,h=c.fullHeight;a+=c.offsetX*s/f,t-=c.offsetY*i/h,s*=c.width/f,i*=c.height/h}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Go=-90,Wo=1;class Zy extends Yn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new gi(Go,Wo,e,t);s.layers=this.layers,this.add(s);const a=new gi(Go,Wo,e,t);a.layers=this.layers,this.add(a);const c=new gi(Go,Wo,e,t);c.layers=this.layers,this.add(c);const u=new gi(Go,Wo,e,t);u.layers=this.layers,this.add(u);const f=new gi(Go,Wo,e,t);f.layers=this.layers,this.add(f);const h=new gi(Go,Wo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,a,c,u,f]=t;for(const h of t)this.remove(h);if(e===lr)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===bu)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,f,h,p]=this.children,m=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,a),e.setRenderTarget(i,1,s),e.render(t,c),e.setRenderTarget(i,2,s),e.render(t,u),e.setRenderTarget(i,3,s),e.render(t,f),e.setRenderTarget(i,4,s),e.render(t,h),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,s),e.render(t,p),e.setRenderTarget(m,v,y),e.xr.enabled=w,i.texture.needsPMREMUpdate=!0}}class V_ extends qn{constructor(e=[],t=so,i,s,a,c,u,f,h,p){super(e,t,i,s,a,c,u,f,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class H_ extends dr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new V_(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Rl(5,5,5),a=new hr({name:"CubemapFromEquirect",uniforms:ra(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ni,blending:Nr});a.uniforms.tEquirect.value=t;const c=new ki(s,a),u=t.minFilter;return t.minFilter===Zs&&(t.minFilter=zn),new Zy(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,s);e.setRenderTarget(a)}}class nu extends Yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qy={type:"move"};class ih{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,c=null;const u=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const S of e.hand.values()){const x=t.getJointPose(S,i),_=this._getHandJoint(h,S);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const p=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],v=p.position.distanceTo(m.position),y=.02,w=.005;h.inputState.pinching&&v>y+w?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=y-w&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(Qy)))}return u!==null&&(u.visible=s!==null),f!==null&&(f.visible=a!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new nu;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class G_ extends Yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ur,this.environmentIntensity=1,this.environmentRotation=new Ur,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Jy extends qn{constructor(e=null,t=1,i=1,s,a,c,u,f,h=Rn,p=Rn,m,v){super(null,c,u,f,h,p,s,a,m,v),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rh=new Z,e3=new Z,t3=new dt;class qs{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=rh.subVectors(i,t).cross(e3.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(rh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||t3.getNormalMatrix(e),s=this.coplanarPoint(rh).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hs=new Cl,n3=new Ct(.5,.5),iu=new Z;class W_{constructor(e=new qs,t=new qs,i=new qs,s=new qs,a=new qs,c=new qs){this.planes=[e,t,i,s,a,c]}set(e,t,i,s,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(s),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=lr,i=!1){const s=this.planes,a=e.elements,c=a[0],u=a[1],f=a[2],h=a[3],p=a[4],m=a[5],v=a[6],y=a[7],w=a[8],S=a[9],x=a[10],_=a[11],T=a[12],A=a[13],b=a[14],P=a[15];if(s[0].setComponents(h-c,y-p,_-w,P-T).normalize(),s[1].setComponents(h+c,y+p,_+w,P+T).normalize(),s[2].setComponents(h+u,y+m,_+S,P+A).normalize(),s[3].setComponents(h-u,y-m,_-S,P-A).normalize(),i)s[4].setComponents(f,v,x,b).normalize(),s[5].setComponents(h-f,y-v,_-x,P-b).normalize();else if(s[4].setComponents(h-f,y-v,_-x,P-b).normalize(),t===lr)s[5].setComponents(h+f,y+v,_+x,P+b).normalize();else if(t===bu)s[5].setComponents(f,v,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hs)}intersectsSprite(e){Hs.center.set(0,0,0);const t=n3.distanceTo(e.center);return Hs.radius=.7071067811865476+t,Hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(iu.x=s.normal.x>0?e.max.x:e.min.x,iu.y=s.normal.y>0?e.max.y:e.min.y,iu.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(iu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class j_ extends oo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Cu=new Z,Ru=new Z,m1=new sn,tl=new jp,ru=new Cl,sh=new Z,g1=new Z;class i3 extends Yn{constructor(e=new vn,t=new j_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,a=t.count;s<a;s++)Cu.fromBufferAttribute(t,s-1),Ru.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Cu.distanceTo(Ru);e.setAttribute("lineDistance",new Ht(i,1))}else at("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ru.copy(i.boundingSphere),ru.applyMatrix4(s),ru.radius+=a,e.ray.intersectsSphere(ru)===!1)return;m1.copy(s).invert(),tl.copy(e.ray).applyMatrix4(m1);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,h=this.isLineSegments?2:1,p=i.index,v=i.attributes.position;if(p!==null){const y=Math.max(0,c.start),w=Math.min(p.count,c.start+c.count);for(let S=y,x=w-1;S<x;S+=h){const _=p.getX(S),T=p.getX(S+1),A=su(this,e,tl,f,_,T,S);A&&t.push(A)}if(this.isLineLoop){const S=p.getX(w-1),x=p.getX(y),_=su(this,e,tl,f,S,x,w-1);_&&t.push(_)}}else{const y=Math.max(0,c.start),w=Math.min(v.count,c.start+c.count);for(let S=y,x=w-1;S<x;S+=h){const _=su(this,e,tl,f,S,S+1,S);_&&t.push(_)}if(this.isLineLoop){const S=su(this,e,tl,f,w-1,y,w-1);S&&t.push(S)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function su(o,e,t,i,s,a,c){const u=o.geometry.attributes.position;if(Cu.fromBufferAttribute(u,s),Ru.fromBufferAttribute(u,a),t.distanceSqToSegment(Cu,Ru,sh,g1)>i)return;sh.applyMatrix4(o.matrixWorld);const h=e.ray.origin.distanceTo(sh);if(!(h<e.near||h>e.far))return{distance:h,point:g1.clone().applyMatrix4(o.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:o}}const _1=new Z,v1=new Z;class r3 extends i3{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,a=t.count;s<a;s+=2)_1.fromBufferAttribute(t,s),v1.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+_1.distanceTo(v1);e.setAttribute("lineDistance",new Ht(i,1))}else at("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Pu extends oo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const x1=new sn,pp=new jp,ou=new Cl,au=new Z;class Nu extends Yn{constructor(e=new vn,t=new Pu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ou.copy(i.boundingSphere),ou.applyMatrix4(s),ou.radius+=a,e.ray.intersectsSphere(ou)===!1)return;x1.copy(s).invert(),pp.copy(e.ray).applyMatrix4(x1);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,h=i.index,m=i.attributes.position;if(h!==null){const v=Math.max(0,c.start),y=Math.min(h.count,c.start+c.count);for(let w=v,S=y;w<S;w++){const x=h.getX(w);au.fromBufferAttribute(m,x),y1(au,x,f,s,e,t,this)}}else{const v=Math.max(0,c.start),y=Math.min(m.count,c.start+c.count);for(let w=v,S=y;w<S;w++)au.fromBufferAttribute(m,w),y1(au,w,f,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function y1(o,e,t,i,s,a,c){const u=pp.distanceSqToPoint(o);if(u<t){const f=new Z;pp.closestPointToPoint(o,f),f.applyMatrix4(i);const h=s.ray.origin.distanceTo(f);if(h<s.near||h>s.far)return;a.push({distance:h,distanceToRay:Math.sqrt(u),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class gl extends qn{constructor(e,t,i=fr,s,a,c,u=Rn,f=Rn,h,p=Ir,m=1){if(p!==Ir&&p!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:m};super(v,s,a,c,u,f,p,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class s3 extends gl{constructor(e,t=fr,i=so,s,a,c=Rn,u=Rn,f,h=Ir){const p={width:e,height:e,depth:1},m=[p,p,p,p,p,p];super(e,e,t,i,s,a,c,u,f,h),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class X_ extends qn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xp extends vn{constructor(e=1,t=1,i=1,s=32,a=1,c=!1,u=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:a,openEnded:c,thetaStart:u,thetaLength:f};const h=this;s=Math.floor(s),a=Math.floor(a);const p=[],m=[],v=[],y=[];let w=0;const S=[],x=i/2;let _=0;T(),c===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(p),this.setAttribute("position",new Ht(m,3)),this.setAttribute("normal",new Ht(v,3)),this.setAttribute("uv",new Ht(y,2));function T(){const b=new Z,P=new Z;let D=0;const I=(t-e)/i;for(let F=0;F<=a;F++){const E=[],L=F/a,k=L*(t-e)+e;for(let W=0;W<=s;W++){const V=W/s,J=V*f+u,ee=Math.sin(J),Q=Math.cos(J);P.x=k*ee,P.y=-L*i+x,P.z=k*Q,m.push(P.x,P.y,P.z),b.set(ee,I,Q).normalize(),v.push(b.x,b.y,b.z),y.push(V,1-L),E.push(w++)}S.push(E)}for(let F=0;F<s;F++)for(let E=0;E<a;E++){const L=S[E][F],k=S[E+1][F],W=S[E+1][F+1],V=S[E][F+1];(e>0||E!==0)&&(p.push(L,k,V),D+=3),(t>0||E!==a-1)&&(p.push(k,W,V),D+=3)}h.addGroup(_,D,0),_+=D}function A(b){const P=w,D=new Ct,I=new Z;let F=0;const E=b===!0?e:t,L=b===!0?1:-1;for(let W=1;W<=s;W++)m.push(0,x*L,0),v.push(0,L,0),y.push(.5,.5),w++;const k=w;for(let W=0;W<=s;W++){const J=W/s*f+u,ee=Math.cos(J),Q=Math.sin(J);I.x=E*Q,I.y=x*L,I.z=E*ee,m.push(I.x,I.y,I.z),v.push(0,L,0),D.x=ee*.5+.5,D.y=Q*.5*L+.5,y.push(D.x,D.y),w++}for(let W=0;W<s;W++){const V=P+W,J=k+W;b===!0?p.push(J,J+1,V):p.push(J+1,J,V),F+=3}h.addGroup(_,F,b===!0?1:2),_+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xp(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qp extends Xp{constructor(e=1,t=1,i=32,s=1,a=!1,c=0,u=Math.PI*2){super(0,e,t,i,s,a,c,u),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:c,thetaLength:u}}static fromJSON(e){return new qp(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pl extends vn{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const a=[],c=[];u(s),h(i),p(),this.setAttribute("position",new Ht(a,3)),this.setAttribute("normal",new Ht(a.slice(),3)),this.setAttribute("uv",new Ht(c,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function u(T){const A=new Z,b=new Z,P=new Z;for(let D=0;D<t.length;D+=3)y(t[D+0],A),y(t[D+1],b),y(t[D+2],P),f(A,b,P,T)}function f(T,A,b,P){const D=P+1,I=[];for(let F=0;F<=D;F++){I[F]=[];const E=T.clone().lerp(b,F/D),L=A.clone().lerp(b,F/D),k=D-F;for(let W=0;W<=k;W++)W===0&&F===D?I[F][W]=E:I[F][W]=E.clone().lerp(L,W/k)}for(let F=0;F<D;F++)for(let E=0;E<2*(D-F)-1;E++){const L=Math.floor(E/2);E%2===0?(v(I[F][L+1]),v(I[F+1][L]),v(I[F][L])):(v(I[F][L+1]),v(I[F+1][L+1]),v(I[F+1][L]))}}function h(T){const A=new Z;for(let b=0;b<a.length;b+=3)A.x=a[b+0],A.y=a[b+1],A.z=a[b+2],A.normalize().multiplyScalar(T),a[b+0]=A.x,a[b+1]=A.y,a[b+2]=A.z}function p(){const T=new Z;for(let A=0;A<a.length;A+=3){T.x=a[A+0],T.y=a[A+1],T.z=a[A+2];const b=x(T)/2/Math.PI+.5,P=_(T)/Math.PI+.5;c.push(b,1-P)}w(),m()}function m(){for(let T=0;T<c.length;T+=6){const A=c[T+0],b=c[T+2],P=c[T+4],D=Math.max(A,b,P),I=Math.min(A,b,P);D>.9&&I<.1&&(A<.2&&(c[T+0]+=1),b<.2&&(c[T+2]+=1),P<.2&&(c[T+4]+=1))}}function v(T){a.push(T.x,T.y,T.z)}function y(T,A){const b=T*3;A.x=e[b+0],A.y=e[b+1],A.z=e[b+2]}function w(){const T=new Z,A=new Z,b=new Z,P=new Z,D=new Ct,I=new Ct,F=new Ct;for(let E=0,L=0;E<a.length;E+=9,L+=6){T.set(a[E+0],a[E+1],a[E+2]),A.set(a[E+3],a[E+4],a[E+5]),b.set(a[E+6],a[E+7],a[E+8]),D.set(c[L+0],c[L+1]),I.set(c[L+2],c[L+3]),F.set(c[L+4],c[L+5]),P.copy(T).add(A).add(b).divideScalar(3);const k=x(P);S(D,L+0,T,k),S(I,L+2,A,k),S(F,L+4,b,k)}}function S(T,A,b,P){P<0&&T.x===1&&(c[A]=T.x-1),b.x===0&&b.z===0&&(c[A]=P/2/Math.PI+.5)}function x(T){return Math.atan2(T.z,-T.x)}function _(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pl(e.vertices,e.indices,e.radius,e.detail)}}class Yp extends Pl{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=1/i,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],c=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,c,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Yp(e.radius,e.detail)}}const lu=new Z,cu=new Z,oh=new Z,uu=new Ii;class o3 extends vn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),a=Math.cos(xu*t),c=e.getIndex(),u=e.getAttribute("position"),f=c?c.count:u.count,h=[0,0,0],p=["a","b","c"],m=new Array(3),v={},y=[];for(let w=0;w<f;w+=3){c?(h[0]=c.getX(w),h[1]=c.getX(w+1),h[2]=c.getX(w+2)):(h[0]=w,h[1]=w+1,h[2]=w+2);const{a:S,b:x,c:_}=uu;if(S.fromBufferAttribute(u,h[0]),x.fromBufferAttribute(u,h[1]),_.fromBufferAttribute(u,h[2]),uu.getNormal(oh),m[0]=`${Math.round(S.x*s)},${Math.round(S.y*s)},${Math.round(S.z*s)}`,m[1]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,m[2]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,!(m[0]===m[1]||m[1]===m[2]||m[2]===m[0]))for(let T=0;T<3;T++){const A=(T+1)%3,b=m[T],P=m[A],D=uu[p[T]],I=uu[p[A]],F=`${b}_${P}`,E=`${P}_${b}`;E in v&&v[E]?(oh.dot(v[E].normal)<=a&&(y.push(D.x,D.y,D.z),y.push(I.x,I.y,I.z)),v[E]=null):F in v||(v[F]={index0:h[T],index1:h[A],normal:oh.clone()})}}for(const w in v)if(v[w]){const{index0:S,index1:x}=v[w];lu.fromBufferAttribute(u,S),cu.fromBufferAttribute(u,x),y.push(lu.x,lu.y,lu.z),y.push(cu.x,cu.y,cu.z)}this.setAttribute("position",new Ht(y,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class $p extends Pl{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new $p(e.radius,e.detail)}}class Wu extends vn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const a=e/2,c=t/2,u=Math.floor(i),f=Math.floor(s),h=u+1,p=f+1,m=e/u,v=t/f,y=[],w=[],S=[],x=[];for(let _=0;_<p;_++){const T=_*v-c;for(let A=0;A<h;A++){const b=A*m-a;w.push(b,-T,0),S.push(0,0,1),x.push(A/u),x.push(1-_/f)}}for(let _=0;_<f;_++)for(let T=0;T<u;T++){const A=T+h*_,b=T+h*(_+1),P=T+1+h*(_+1),D=T+1+h*_;y.push(A,b,D),y.push(b,P,D)}this.setIndex(y),this.setAttribute("position",new Ht(w,3)),this.setAttribute("normal",new Ht(S,3)),this.setAttribute("uv",new Ht(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wu(e.width,e.height,e.widthSegments,e.heightSegments)}}class ju extends vn{constructor(e=1,t=32,i=16,s=0,a=Math.PI*2,c=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:a,thetaStart:c,thetaLength:u},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const f=Math.min(c+u,Math.PI);let h=0;const p=[],m=new Z,v=new Z,y=[],w=[],S=[],x=[];for(let _=0;_<=i;_++){const T=[],A=_/i;let b=0;_===0&&c===0?b=.5/t:_===i&&f===Math.PI&&(b=-.5/t);for(let P=0;P<=t;P++){const D=P/t;m.x=-e*Math.cos(s+D*a)*Math.sin(c+A*u),m.y=e*Math.cos(c+A*u),m.z=e*Math.sin(s+D*a)*Math.sin(c+A*u),w.push(m.x,m.y,m.z),v.copy(m).normalize(),S.push(v.x,v.y,v.z),x.push(D+b,1-A),T.push(h++)}p.push(T)}for(let _=0;_<i;_++)for(let T=0;T<t;T++){const A=p[_][T+1],b=p[_][T],P=p[_+1][T],D=p[_+1][T+1];(_!==0||c>0)&&y.push(A,b,D),(_!==i-1||f<Math.PI)&&y.push(b,P,D)}this.setIndex(y),this.setAttribute("position",new Ht(w,3)),this.setAttribute("normal",new Ht(S,3)),this.setAttribute("uv",new Ht(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ju(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Kp extends Pl{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Kp(e.radius,e.detail)}}class Xu extends vn{constructor(e=1,t=.4,i=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:a},i=Math.floor(i),s=Math.floor(s);const c=[],u=[],f=[],h=[],p=new Z,m=new Z,v=new Z;for(let y=0;y<=i;y++)for(let w=0;w<=s;w++){const S=w/s*a,x=y/i*Math.PI*2;m.x=(e+t*Math.cos(x))*Math.cos(S),m.y=(e+t*Math.cos(x))*Math.sin(S),m.z=t*Math.sin(x),u.push(m.x,m.y,m.z),p.x=e*Math.cos(S),p.y=e*Math.sin(S),v.subVectors(m,p).normalize(),f.push(v.x,v.y,v.z),h.push(w/s),h.push(y/i)}for(let y=1;y<=i;y++)for(let w=1;w<=s;w++){const S=(s+1)*y+w-1,x=(s+1)*(y-1)+w-1,_=(s+1)*(y-1)+w,T=(s+1)*y+w;c.push(S,x,T),c.push(x,_,T)}this.setIndex(c),this.setAttribute("position",new Ht(u,3)),this.setAttribute("normal",new Ht(f,3)),this.setAttribute("uv",new Ht(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Zp extends vn{constructor(e=1,t=.4,i=64,s=8,a=2,c=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:s,p:a,q:c},i=Math.floor(i),s=Math.floor(s);const u=[],f=[],h=[],p=[],m=new Z,v=new Z,y=new Z,w=new Z,S=new Z,x=new Z,_=new Z;for(let A=0;A<=i;++A){const b=A/i*a*Math.PI*2;T(b,a,c,e,y),T(b+.01,a,c,e,w),x.subVectors(w,y),_.addVectors(w,y),S.crossVectors(x,_),_.crossVectors(S,x),S.normalize(),_.normalize();for(let P=0;P<=s;++P){const D=P/s*Math.PI*2,I=-t*Math.cos(D),F=t*Math.sin(D);m.x=y.x+(I*_.x+F*S.x),m.y=y.y+(I*_.y+F*S.y),m.z=y.z+(I*_.z+F*S.z),f.push(m.x,m.y,m.z),v.subVectors(m,y).normalize(),h.push(v.x,v.y,v.z),p.push(A/i),p.push(P/s)}}for(let A=1;A<=i;A++)for(let b=1;b<=s;b++){const P=(s+1)*(A-1)+(b-1),D=(s+1)*A+(b-1),I=(s+1)*A+b,F=(s+1)*(A-1)+b;u.push(P,D,F),u.push(D,I,F)}this.setIndex(u),this.setAttribute("position",new Ht(f,3)),this.setAttribute("normal",new Ht(h,3)),this.setAttribute("uv",new Ht(p,2));function T(A,b,P,D,I){const F=Math.cos(A),E=Math.sin(A),L=P/b*A,k=Math.cos(L);I.x=D*(2+k)*.5*F,I.y=D*(2+k)*E*.5,I.z=D*Math.sin(L)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zp(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class a3 extends hr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class S1 extends oo{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=L_,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class l3 extends oo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class c3 extends oo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class q_ extends B_{constructor(e=-1,t=1,i=1,s=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-e,c=i+e,u=s+t,f=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,c=a+h*this.view.width,u-=p*this.view.offsetY,f=u-p*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class u3 extends gi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Y_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function M1(o,e,t,i){const s=d3(i);switch(t){case R_:return o*e;case N_:return o*e/s.components*s.byteLength;case zp:return o*e/s.components*s.byteLength;case na:return o*e*2/s.components*s.byteLength;case Bp:return o*e*2/s.components*s.byteLength;case P_:return o*e*3/s.components*s.byteLength;case $i:return o*e*4/s.components*s.byteLength;case Vp:return o*e*4/s.components*s.byteLength;case mu:case gu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case _u:case vu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Fh:case kh:return Math.max(o,16)*Math.max(e,8)/4;case Uh:case Oh:return Math.max(o,8)*Math.max(e,8)/2;case zh:case Bh:case Hh:case Gh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Vh:case Wh:case jh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Xh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case qh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Yh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case $h:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Zh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Qh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Jh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case ep:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case tp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case np:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case ip:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case rp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case sp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case op:case ap:case lp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case cp:case up:return Math.ceil(o/4)*Math.ceil(e/4)*8;case dp:case fp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function d3(o){switch(o){case Di:case T_:return{byteLength:1,components:1};case fl:case b_:case Dr:return{byteLength:2,components:1};case Op:case kp:return{byteLength:2,components:4};case fr:case Fp:case ar:return{byteLength:4,components:1};case A_:case C_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Up}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Up);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $_(){let o=null,e=!1,t=null,i=null;function s(a,c){t(a,c),i=o.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=o.requestAnimationFrame(s),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){o=a}}}function f3(o){const e=new WeakMap;function t(u,f){const h=u.array,p=u.usage,m=h.byteLength,v=o.createBuffer();o.bindBuffer(f,v),o.bufferData(f,h,p),u.onUploadCallback();let y;if(h instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=o.HALF_FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=o.SHORT;else if(h instanceof Uint32Array)y=o.UNSIGNED_INT;else if(h instanceof Int32Array)y=o.INT;else if(h instanceof Int8Array)y=o.BYTE;else if(h instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:m}}function i(u,f,h){const p=f.array,m=f.updateRanges;if(o.bindBuffer(h,u),m.length===0)o.bufferSubData(h,0,p);else{m.sort((y,w)=>y.start-w.start);let v=0;for(let y=1;y<m.length;y++){const w=m[v],S=m[y];S.start<=w.start+w.count+1?w.count=Math.max(w.count,S.start+S.count-w.start):(++v,m[v]=S)}m.length=v+1;for(let y=0,w=m.length;y<w;y++){const S=m[y];o.bufferSubData(h,S.start*p.BYTES_PER_ELEMENT,p,S.start,S.count)}f.clearUpdateRanges()}f.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=e.get(u);f&&(o.deleteBuffer(f.buffer),e.delete(u))}function c(u,f){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const h=e.get(u);if(h===void 0)e.set(u,t(u,f));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,u,f),h.version=u.version}}return{get:s,remove:a,update:c}}var h3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,p3=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,m3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,g3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,v3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,x3=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,y3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,S3=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,M3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,w3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,E3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,T3=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,b3=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,A3=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,C3=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,R3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,P3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,N3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,L3=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,D3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,I3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,U3=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,F3=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,O3=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,k3=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,z3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,B3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,V3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,H3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,G3="gl_FragColor = linearToOutputTexel( gl_FragColor );",W3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,j3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,X3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,q3=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Y3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,K3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Q3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,J3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,sS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,oS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,dS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_S=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,SS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,MS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ES=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,RS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,NS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,LS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,US=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,FS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,VS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,HS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,$S=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,KS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ZS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,QS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,JS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,eM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,oM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,aM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_M=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,SM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,MM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,TM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,AM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,NM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,DM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,IM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,OM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,VM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,WM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:h3,alphahash_pars_fragment:p3,alphamap_fragment:m3,alphamap_pars_fragment:g3,alphatest_fragment:_3,alphatest_pars_fragment:v3,aomap_fragment:x3,aomap_pars_fragment:y3,batching_pars_vertex:S3,batching_vertex:M3,begin_vertex:w3,beginnormal_vertex:E3,bsdfs:T3,iridescence_fragment:b3,bumpmap_pars_fragment:A3,clipping_planes_fragment:C3,clipping_planes_pars_fragment:R3,clipping_planes_pars_vertex:P3,clipping_planes_vertex:N3,color_fragment:L3,color_pars_fragment:D3,color_pars_vertex:I3,color_vertex:U3,common:F3,cube_uv_reflection_fragment:O3,defaultnormal_vertex:k3,displacementmap_pars_vertex:z3,displacementmap_vertex:B3,emissivemap_fragment:V3,emissivemap_pars_fragment:H3,colorspace_fragment:G3,colorspace_pars_fragment:W3,envmap_fragment:j3,envmap_common_pars_fragment:X3,envmap_pars_fragment:q3,envmap_pars_vertex:Y3,envmap_physical_pars_fragment:sS,envmap_vertex:$3,fog_vertex:K3,fog_pars_vertex:Z3,fog_fragment:Q3,fog_pars_fragment:J3,gradientmap_pars_fragment:eS,lightmap_pars_fragment:tS,lights_lambert_fragment:nS,lights_lambert_pars_fragment:iS,lights_pars_begin:rS,lights_toon_fragment:oS,lights_toon_pars_fragment:aS,lights_phong_fragment:lS,lights_phong_pars_fragment:cS,lights_physical_fragment:uS,lights_physical_pars_fragment:dS,lights_fragment_begin:fS,lights_fragment_maps:hS,lights_fragment_end:pS,logdepthbuf_fragment:mS,logdepthbuf_pars_fragment:gS,logdepthbuf_pars_vertex:_S,logdepthbuf_vertex:vS,map_fragment:xS,map_pars_fragment:yS,map_particle_fragment:SS,map_particle_pars_fragment:MS,metalnessmap_fragment:wS,metalnessmap_pars_fragment:ES,morphinstance_vertex:TS,morphcolor_vertex:bS,morphnormal_vertex:AS,morphtarget_pars_vertex:CS,morphtarget_vertex:RS,normal_fragment_begin:PS,normal_fragment_maps:NS,normal_pars_fragment:LS,normal_pars_vertex:DS,normal_vertex:IS,normalmap_pars_fragment:US,clearcoat_normal_fragment_begin:FS,clearcoat_normal_fragment_maps:OS,clearcoat_pars_fragment:kS,iridescence_pars_fragment:zS,opaque_fragment:BS,packing:VS,premultiplied_alpha_fragment:HS,project_vertex:GS,dithering_fragment:WS,dithering_pars_fragment:jS,roughnessmap_fragment:XS,roughnessmap_pars_fragment:qS,shadowmap_pars_fragment:YS,shadowmap_pars_vertex:$S,shadowmap_vertex:KS,shadowmask_pars_fragment:ZS,skinbase_vertex:QS,skinning_pars_vertex:JS,skinning_vertex:eM,skinnormal_vertex:tM,specularmap_fragment:nM,specularmap_pars_fragment:iM,tonemapping_fragment:rM,tonemapping_pars_fragment:sM,transmission_fragment:oM,transmission_pars_fragment:aM,uv_pars_fragment:lM,uv_pars_vertex:cM,uv_vertex:uM,worldpos_vertex:dM,background_vert:fM,background_frag:hM,backgroundCube_vert:pM,backgroundCube_frag:mM,cube_vert:gM,cube_frag:_M,depth_vert:vM,depth_frag:xM,distance_vert:yM,distance_frag:SM,equirect_vert:MM,equirect_frag:wM,linedashed_vert:EM,linedashed_frag:TM,meshbasic_vert:bM,meshbasic_frag:AM,meshlambert_vert:CM,meshlambert_frag:RM,meshmatcap_vert:PM,meshmatcap_frag:NM,meshnormal_vert:LM,meshnormal_frag:DM,meshphong_vert:IM,meshphong_frag:UM,meshphysical_vert:FM,meshphysical_frag:OM,meshtoon_vert:kM,meshtoon_frag:zM,points_vert:BM,points_frag:VM,shadow_vert:HM,shadow_frag:GM,sprite_vert:WM,sprite_frag:jM},De={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},rr={basic:{uniforms:jn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:jn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:jn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:jn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:jn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:jn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:jn([De.points,De.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:jn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:jn([De.common,De.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:jn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:jn([De.sprite,De.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:jn([De.common,De.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:jn([De.lights,De.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};rr.physical={uniforms:jn([rr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const du={r:0,b:0,g:0},Gs=new Ur,XM=new sn;function qM(o,e,t,i,s,a,c){const u=new Lt(0);let f=a===!0?0:1,h,p,m=null,v=0,y=null;function w(A){let b=A.isScene===!0?A.background:null;return b&&b.isTexture&&(b=(A.backgroundBlurriness>0?t:e).get(b)),b}function S(A){let b=!1;const P=w(A);P===null?_(u,f):P&&P.isColor&&(_(P,1),b=!0);const D=o.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,c):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function x(A,b){const P=w(b);P&&(P.isCubeTexture||P.mapping===Gu)?(p===void 0&&(p=new ki(new Rl(1,1,1),new hr({name:"BackgroundCubeMaterial",uniforms:ra(rr.backgroundCube.uniforms),vertexShader:rr.backgroundCube.vertexShader,fragmentShader:rr.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(D,I,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),Gs.copy(b.backgroundRotation),Gs.x*=-1,Gs.y*=-1,Gs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Gs.y*=-1,Gs.z*=-1),p.material.uniforms.envMap.value=P,p.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(XM.makeRotationFromEuler(Gs)),p.material.toneMapped=At.getTransfer(P.colorSpace)!==Ot,(m!==P||v!==P.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,m=P,v=P.version,y=o.toneMapping),p.layers.enableAll(),A.unshift(p,p.geometry,p.material,0,0,null)):P&&P.isTexture&&(h===void 0&&(h=new ki(new Wu(2,2),new hr({name:"BackgroundMaterial",uniforms:ra(rr.background.uniforms),vertexShader:rr.background.vertexShader,fragmentShader:rr.background.fragmentShader,side:_s,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=P,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.toneMapped=At.getTransfer(P.colorSpace)!==Ot,P.matrixAutoUpdate===!0&&P.updateMatrix(),h.material.uniforms.uvTransform.value.copy(P.matrix),(m!==P||v!==P.version||y!==o.toneMapping)&&(h.material.needsUpdate=!0,m=P,v=P.version,y=o.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null))}function _(A,b){A.getRGB(du,z_(o)),i.buffers.color.setClear(du.r,du.g,du.b,b,c)}function T(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(A,b=1){u.set(A),f=b,_(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(A){f=A,_(u,f)},render:S,addToRenderList:x,dispose:T}}function YM(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},s=v(null);let a=s,c=!1;function u(L,k,W,V,J){let ee=!1;const Q=m(V,W,k);a!==Q&&(a=Q,h(a.object)),ee=y(L,V,W,J),ee&&w(L,V,W,J),J!==null&&e.update(J,o.ELEMENT_ARRAY_BUFFER),(ee||c)&&(c=!1,b(L,k,W,V),J!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function f(){return o.createVertexArray()}function h(L){return o.bindVertexArray(L)}function p(L){return o.deleteVertexArray(L)}function m(L,k,W){const V=W.wireframe===!0;let J=i[L.id];J===void 0&&(J={},i[L.id]=J);let ee=J[k.id];ee===void 0&&(ee={},J[k.id]=ee);let Q=ee[V];return Q===void 0&&(Q=v(f()),ee[V]=Q),Q}function v(L){const k=[],W=[],V=[];for(let J=0;J<t;J++)k[J]=0,W[J]=0,V[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:W,attributeDivisors:V,object:L,attributes:{},index:null}}function y(L,k,W,V){const J=a.attributes,ee=k.attributes;let Q=0;const Y=W.getAttributes();for(const q in Y)if(Y[q].location>=0){const re=J[q];let B=ee[q];if(B===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(B=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(B=L.instanceColor)),re===void 0||re.attribute!==B||B&&re.data!==B.data)return!0;Q++}return a.attributesNum!==Q||a.index!==V}function w(L,k,W,V){const J={},ee=k.attributes;let Q=0;const Y=W.getAttributes();for(const q in Y)if(Y[q].location>=0){let re=ee[q];re===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(re=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(re=L.instanceColor));const B={};B.attribute=re,re&&re.data&&(B.data=re.data),J[q]=B,Q++}a.attributes=J,a.attributesNum=Q,a.index=V}function S(){const L=a.newAttributes;for(let k=0,W=L.length;k<W;k++)L[k]=0}function x(L){_(L,0)}function _(L,k){const W=a.newAttributes,V=a.enabledAttributes,J=a.attributeDivisors;W[L]=1,V[L]===0&&(o.enableVertexAttribArray(L),V[L]=1),J[L]!==k&&(o.vertexAttribDivisor(L,k),J[L]=k)}function T(){const L=a.newAttributes,k=a.enabledAttributes;for(let W=0,V=k.length;W<V;W++)k[W]!==L[W]&&(o.disableVertexAttribArray(W),k[W]=0)}function A(L,k,W,V,J,ee,Q){Q===!0?o.vertexAttribIPointer(L,k,W,J,ee):o.vertexAttribPointer(L,k,W,V,J,ee)}function b(L,k,W,V){S();const J=V.attributes,ee=W.getAttributes(),Q=k.defaultAttributeValues;for(const Y in ee){const q=ee[Y];if(q.location>=0){let de=J[Y];if(de===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(de=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(de=L.instanceColor)),de!==void 0){const re=de.normalized,B=de.itemSize,oe=e.get(de);if(oe===void 0)continue;const be=oe.buffer,Fe=oe.type,Be=oe.bytesPerElement,ae=Fe===o.INT||Fe===o.UNSIGNED_INT||de.gpuType===Fp;if(de.isInterleavedBufferAttribute){const fe=de.data,Se=fe.stride,Ve=de.offset;if(fe.isInstancedInterleavedBuffer){for(let Ie=0;Ie<q.locationSize;Ie++)_(q.location+Ie,fe.meshPerAttribute);L.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ie=0;Ie<q.locationSize;Ie++)x(q.location+Ie);o.bindBuffer(o.ARRAY_BUFFER,be);for(let Ie=0;Ie<q.locationSize;Ie++)A(q.location+Ie,B/q.locationSize,Fe,re,Se*Be,(Ve+B/q.locationSize*Ie)*Be,ae)}else{if(de.isInstancedBufferAttribute){for(let fe=0;fe<q.locationSize;fe++)_(q.location+fe,de.meshPerAttribute);L.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let fe=0;fe<q.locationSize;fe++)x(q.location+fe);o.bindBuffer(o.ARRAY_BUFFER,be);for(let fe=0;fe<q.locationSize;fe++)A(q.location+fe,B/q.locationSize,Fe,re,B*Be,B/q.locationSize*fe*Be,ae)}}else if(Q!==void 0){const re=Q[Y];if(re!==void 0)switch(re.length){case 2:o.vertexAttrib2fv(q.location,re);break;case 3:o.vertexAttrib3fv(q.location,re);break;case 4:o.vertexAttrib4fv(q.location,re);break;default:o.vertexAttrib1fv(q.location,re)}}}}T()}function P(){F();for(const L in i){const k=i[L];for(const W in k){const V=k[W];for(const J in V)p(V[J].object),delete V[J];delete k[W]}delete i[L]}}function D(L){if(i[L.id]===void 0)return;const k=i[L.id];for(const W in k){const V=k[W];for(const J in V)p(V[J].object),delete V[J];delete k[W]}delete i[L.id]}function I(L){for(const k in i){const W=i[k];if(W[L.id]===void 0)continue;const V=W[L.id];for(const J in V)p(V[J].object),delete V[J];delete W[L.id]}}function F(){E(),c=!0,a!==s&&(a=s,h(a.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:F,resetDefaultState:E,dispose:P,releaseStatesOfGeometry:D,releaseStatesOfProgram:I,initAttributes:S,enableAttribute:x,disableUnusedAttributes:T}}function $M(o,e,t){let i;function s(h){i=h}function a(h,p){o.drawArrays(i,h,p),t.update(p,i,1)}function c(h,p,m){m!==0&&(o.drawArraysInstanced(i,h,p,m),t.update(p,i,m))}function u(h,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,p,0,m);let y=0;for(let w=0;w<m;w++)y+=p[w];t.update(y,i,1)}function f(h,p,m,v){if(m===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let w=0;w<h.length;w++)c(h[w],p[w],v[w]);else{y.multiDrawArraysInstancedWEBGL(i,h,0,p,0,v,0,m);let w=0;for(let S=0;S<m;S++)w+=p[S]*v[S];t.update(w,i,1)}}this.setMode=s,this.render=a,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function KM(o,e,t,i){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(I){return!(I!==$i&&i.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(I){const F=I===Dr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Di&&i.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ar&&!F)}function f(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=f(h);p!==h&&(at("WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const m=t.logarithmicDepthBuffer===!0,v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=o.getParameter(o.MAX_TEXTURE_SIZE),x=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),T=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),A=o.getParameter(o.MAX_VARYING_VECTORS),b=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),P=o.getParameter(o.MAX_SAMPLES),D=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:m,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:w,maxTextureSize:S,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:T,maxVaryings:A,maxFragmentUniforms:b,maxSamples:P,samples:D}}function ZM(o){const e=this;let t=null,i=0,s=!1,a=!1;const c=new qs,u=new dt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(m,v){const y=m.length!==0||v||i!==0||s;return s=v,i=m.length,y},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(m,v){t=p(m,v,0)},this.setState=function(m,v,y){const w=m.clippingPlanes,S=m.clipIntersection,x=m.clipShadows,_=o.get(m);if(!s||w===null||w.length===0||a&&!x)a?p(null):h();else{const T=a?0:i,A=T*4;let b=_.clippingState||null;f.value=b,b=p(w,v,A,y);for(let P=0;P!==A;++P)b[P]=t[P];_.clippingState=b,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=T}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(m,v,y,w){const S=m!==null?m.length:0;let x=null;if(S!==0){if(x=f.value,w!==!0||x===null){const _=y+S*4,T=v.matrixWorldInverse;u.getNormalMatrix(T),(x===null||x.length<_)&&(x=new Float32Array(_));for(let A=0,b=y;A!==S;++A,b+=4)c.copy(m[A]).applyMatrix4(T,u),c.normal.toArray(x,b),x[b+3]=c.constant}f.value=x,f.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,x}}function QM(o){let e=new WeakMap;function t(c,u){return u===Nh?c.mapping=so:u===Lh&&(c.mapping=ta),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===Nh||u===Lh)if(e.has(c)){const f=e.get(c).texture;return t(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const h=new H_(f.height);return h.fromEquirectangularTexture(o,c),e.set(c,h),c.addEventListener("dispose",s),t(h.texture,c.mapping)}else return null}}return c}function s(c){const u=c.target;u.removeEventListener("dispose",s);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const ds=4,w1=[.125,.215,.35,.446,.526,.582],Ks=20,JM=256,nl=new q_,E1=new Lt;let ah=null,lh=0,ch=0,uh=!1;const ew=new Z;class T1{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,a={}){const{size:c=256,position:u=ew}=a;ah=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel(),uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,i,s,f,u),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=C1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=A1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ah,lh,ch),this._renderer.xr.enabled=uh,e.scissorTest=!1,jo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===so||e.mapping===ta?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ah=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel(),uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Dr,format:$i,colorSpace:ia,depthBuffer:!1},s=b1(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=b1(e,t,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=tw(a)),this._blurMaterial=iw(a,e,t),this._ggxMaterial=nw(a,e,t)}return s}_compileMaterial(e){const t=new ki(new vn,e);this._renderer.compile(t,nl)}_sceneToCubeUV(e,t,i,s,a){const f=new gi(90,1,t,i),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,v=m.autoClear,y=m.toneMapping;m.getClearColor(E1),m.toneMapping=ur,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(s),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ki(new Rl,new ml({name:"PMREM.Background",side:ni,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,x=S.material;let _=!1;const T=e.background;T?T.isColor&&(x.color.copy(T),e.background=null,_=!0):(x.color.copy(E1),_=!0);for(let A=0;A<6;A++){const b=A%3;b===0?(f.up.set(0,h[A],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x+p[A],a.y,a.z)):b===1?(f.up.set(0,0,h[A]),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y+p[A],a.z)):(f.up.set(0,h[A],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y,a.z+p[A]));const P=this._cubeSize;jo(s,b*P,A>2?P:0,P,P),m.setRenderTarget(s),_&&m.render(S,f),m.render(e,f)}m.toneMapping=y,m.autoClear=v,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===so||e.mapping===ta;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=C1()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=A1());const a=s?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=a;const u=a.uniforms;u.envMap.value=e;const f=this._cubeSize;jo(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(c,nl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,a=this._pingPongRenderTarget,c=this._ggxMaterial,u=this._lodMeshes[i];u.material=c;const f=c.uniforms,h=i/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),m=Math.sqrt(h*h-p*p),v=0+h*1.25,y=m*v,{_lodMax:w}=this,S=this._sizeLods[i],x=3*S*(i>w-ds?i-w+ds:0),_=4*(this._cubeSize-S);f.envMap.value=e.texture,f.roughness.value=y,f.mipInt.value=w-t,jo(a,x,_,3*S,2*S),s.setRenderTarget(a),s.render(u,nl),f.envMap.value=a.texture,f.roughness.value=0,f.mipInt.value=w-i,jo(e,x,_,3*S,2*S),s.setRenderTarget(e),s.render(u,nl)}_blur(e,t,i,s,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,s,"latitudinal",a),this._halfBlur(c,e,i,i,s,"longitudinal",a)}_halfBlur(e,t,i,s,a,c,u){const f=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Nt("blur direction must be either latitudinal or longitudinal!");const p=3,m=this._lodMeshes[s];m.material=h;const v=h.uniforms,y=this._sizeLods[i]-1,w=isFinite(a)?Math.PI/(2*y):2*Math.PI/(2*Ks-1),S=a/w,x=isFinite(a)?1+Math.floor(p*S):Ks;x>Ks&&at(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ks}`);const _=[];let T=0;for(let I=0;I<Ks;++I){const F=I/S,E=Math.exp(-F*F/2);_.push(E),I===0?T+=E:I<x&&(T+=2*E)}for(let I=0;I<_.length;I++)_[I]=_[I]/T;v.envMap.value=e.texture,v.samples.value=x,v.weights.value=_,v.latitudinal.value=c==="latitudinal",u&&(v.poleAxis.value=u);const{_lodMax:A}=this;v.dTheta.value=w,v.mipInt.value=A-i;const b=this._sizeLods[s],P=3*b*(s>A-ds?s-A+ds:0),D=4*(this._cubeSize-b);jo(t,P,D,3*b,2*b),f.setRenderTarget(t),f.render(m,nl)}}function tw(o){const e=[],t=[],i=[];let s=o;const a=o-ds+1+w1.length;for(let c=0;c<a;c++){const u=Math.pow(2,s);e.push(u);let f=1/u;c>o-ds?f=w1[c-o+ds-1]:c===0&&(f=0),t.push(f);const h=1/(u-2),p=-h,m=1+h,v=[p,p,m,p,m,m,p,p,m,m,p,m],y=6,w=6,S=3,x=2,_=1,T=new Float32Array(S*w*y),A=new Float32Array(x*w*y),b=new Float32Array(_*w*y);for(let D=0;D<y;D++){const I=D%3*2/3-1,F=D>2?0:-1,E=[I,F,0,I+2/3,F,0,I+2/3,F+1,0,I,F,0,I+2/3,F+1,0,I,F+1,0];T.set(E,S*w*D),A.set(v,x*w*D);const L=[D,D,D,D,D,D];b.set(L,_*w*D)}const P=new vn;P.setAttribute("position",new Oi(T,S)),P.setAttribute("uv",new Oi(A,x)),P.setAttribute("faceIndex",new Oi(b,_)),i.push(new ki(P,null)),s>ds&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function b1(o,e,t){const i=new dr(o,e,t);return i.texture.mapping=Gu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jo(o,e,t,i,s){o.viewport.set(e,t,i,s),o.scissor.set(e,t,i,s)}function nw(o,e,t){return new hr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:JM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function iw(o,e,t){const i=new Float32Array(Ks),s=new Z(0,1,0);return new hr({name:"SphericalGaussianBlur",defines:{n:Ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function A1(){return new hr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function C1(){return new hr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function qu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rw(o){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const f=u.mapping,h=f===Nh||f===Lh,p=f===so||f===ta;if(h||p){let m=e.get(u);const v=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==v)return t===null&&(t=new T1(o)),m=h?t.fromEquirectangular(u,m):t.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const y=u.image;return h&&y&&y.height>0||p&&y&&s(y)?(t===null&&(t=new T1(o)),m=h?t.fromEquirectangular(u):t.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",a),m.texture):null}}}return u}function s(u){let f=0;const h=6;for(let p=0;p<h;p++)u[p]!==void 0&&f++;return f===h}function a(u){const f=u.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function sw(o){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=o.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&pl("WebGLRenderer: "+i+" extension not supported."),s}}}function ow(o,e,t,i){const s={},a=new WeakMap;function c(m){const v=m.target;v.index!==null&&e.remove(v.index);for(const w in v.attributes)e.remove(v.attributes[w]);v.removeEventListener("dispose",c),delete s[v.id];const y=a.get(v);y&&(e.remove(y),a.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function u(m,v){return s[v.id]===!0||(v.addEventListener("dispose",c),s[v.id]=!0,t.memory.geometries++),v}function f(m){const v=m.attributes;for(const y in v)e.update(v[y],o.ARRAY_BUFFER)}function h(m){const v=[],y=m.index,w=m.attributes.position;let S=0;if(y!==null){const T=y.array;S=y.version;for(let A=0,b=T.length;A<b;A+=3){const P=T[A+0],D=T[A+1],I=T[A+2];v.push(P,D,D,I,I,P)}}else if(w!==void 0){const T=w.array;S=w.version;for(let A=0,b=T.length/3-1;A<b;A+=3){const P=A+0,D=A+1,I=A+2;v.push(P,D,D,I,I,P)}}else return;const x=new(D_(v)?k_:O_)(v,1);x.version=S;const _=a.get(m);_&&e.remove(_),a.set(m,x)}function p(m){const v=a.get(m);if(v){const y=m.index;y!==null&&v.version<y.version&&h(m)}else h(m);return a.get(m)}return{get:u,update:f,getWireframeAttribute:p}}function aw(o,e,t){let i;function s(v){i=v}let a,c;function u(v){a=v.type,c=v.bytesPerElement}function f(v,y){o.drawElements(i,y,a,v*c),t.update(y,i,1)}function h(v,y,w){w!==0&&(o.drawElementsInstanced(i,y,a,v*c,w),t.update(y,i,w))}function p(v,y,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,y,0,a,v,0,w);let x=0;for(let _=0;_<w;_++)x+=y[_];t.update(x,i,1)}function m(v,y,w,S){if(w===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<v.length;_++)h(v[_]/c,y[_],S[_]);else{x.multiDrawElementsInstancedWEBGL(i,y,0,a,v,0,S,0,w);let _=0;for(let T=0;T<w;T++)_+=y[T]*S[T];t.update(_,i,1)}}this.setMode=s,this.setIndex=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function lw(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,u){switch(t.calls++,c){case o.TRIANGLES:t.triangles+=u*(a/3);break;case o.LINES:t.lines+=u*(a/2);break;case o.LINE_STRIP:t.lines+=u*(a-1);break;case o.LINE_LOOP:t.lines+=u*a;break;case o.POINTS:t.points+=u*a;break;default:Nt("WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function cw(o,e,t){const i=new WeakMap,s=new cn;function a(c,u,f){const h=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=p!==void 0?p.length:0;let v=i.get(u);if(v===void 0||v.count!==m){let L=function(){F.dispose(),i.delete(u),u.removeEventListener("dispose",L)};var y=L;v!==void 0&&v.texture.dispose();const w=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,_=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let b=0;w===!0&&(b=1),S===!0&&(b=2),x===!0&&(b=3);let P=u.attributes.position.count*b,D=1;P>e.maxTextureSize&&(D=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const I=new Float32Array(P*D*4*m),F=new I_(I,P,D,m);F.type=ar,F.needsUpdate=!0;const E=b*4;for(let k=0;k<m;k++){const W=_[k],V=T[k],J=A[k],ee=P*D*4*k;for(let Q=0;Q<W.count;Q++){const Y=Q*E;w===!0&&(s.fromBufferAttribute(W,Q),I[ee+Y+0]=s.x,I[ee+Y+1]=s.y,I[ee+Y+2]=s.z,I[ee+Y+3]=0),S===!0&&(s.fromBufferAttribute(V,Q),I[ee+Y+4]=s.x,I[ee+Y+5]=s.y,I[ee+Y+6]=s.z,I[ee+Y+7]=0),x===!0&&(s.fromBufferAttribute(J,Q),I[ee+Y+8]=s.x,I[ee+Y+9]=s.y,I[ee+Y+10]=s.z,I[ee+Y+11]=J.itemSize===4?s.w:1)}}v={count:m,texture:F,size:new Ct(P,D)},i.set(u,v),u.addEventListener("dispose",L)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(o,"morphTexture",c.morphTexture,t);else{let w=0;for(let x=0;x<h.length;x++)w+=h[x];const S=u.morphTargetsRelative?1:1-w;f.getUniforms().setValue(o,"morphTargetBaseInfluence",S),f.getUniforms().setValue(o,"morphTargetInfluences",h)}f.getUniforms().setValue(o,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:a}}function uw(o,e,t,i){let s=new WeakMap;function a(f){const h=i.render.frame,p=f.geometry,m=e.get(f,p);if(s.get(m)!==h&&(e.update(m),s.set(m,h)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),s.get(f)!==h&&(t.update(f.instanceMatrix,o.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,o.ARRAY_BUFFER),s.set(f,h))),f.isSkinnedMesh){const v=f.skeleton;s.get(v)!==h&&(v.update(),s.set(v,h))}return m}function c(){s=new WeakMap}function u(f){const h=f.target;h.removeEventListener("dispose",u),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:c}}const dw={[__]:"LINEAR_TONE_MAPPING",[v_]:"REINHARD_TONE_MAPPING",[x_]:"CINEON_TONE_MAPPING",[y_]:"ACES_FILMIC_TONE_MAPPING",[M_]:"AGX_TONE_MAPPING",[w_]:"NEUTRAL_TONE_MAPPING",[S_]:"CUSTOM_TONE_MAPPING"};function fw(o,e,t,i,s){const a=new dr(e,t,{type:o,depthBuffer:i,stencilBuffer:s}),c=new dr(e,t,{type:Dr,depthBuffer:!1,stencilBuffer:!1}),u=new vn;u.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Ht([0,2,0,0,2,0],2));const f=new a3({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new ki(u,f),p=new q_(-1,1,1,-1,0,1);let m=null,v=null,y=!1,w,S=null,x=[],_=!1;this.setSize=function(T,A){a.setSize(T,A),c.setSize(T,A);for(let b=0;b<x.length;b++){const P=x[b];P.setSize&&P.setSize(T,A)}},this.setEffects=function(T){x=T,_=x.length>0&&x[0].isRenderPass===!0;const A=a.width,b=a.height;for(let P=0;P<x.length;P++){const D=x[P];D.setSize&&D.setSize(A,b)}},this.begin=function(T,A){if(y||T.toneMapping===ur&&x.length===0)return!1;if(S=A,A!==null){const b=A.width,P=A.height;(a.width!==b||a.height!==P)&&this.setSize(b,P)}return _===!1&&T.setRenderTarget(a),w=T.toneMapping,T.toneMapping=ur,!0},this.hasRenderPass=function(){return _},this.end=function(T,A){T.toneMapping=w,y=!0;let b=a,P=c;for(let D=0;D<x.length;D++){const I=x[D];if(I.enabled!==!1&&(I.render(T,P,b,A),I.needsSwap!==!1)){const F=b;b=P,P=F}}if(m!==T.outputColorSpace||v!==T.toneMapping){m=T.outputColorSpace,v=T.toneMapping,f.defines={},At.getTransfer(m)===Ot&&(f.defines.SRGB_TRANSFER="");const D=dw[v];D&&(f.defines[D]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=b.texture,T.setRenderTarget(S),T.render(h,p),S=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),c.dispose(),u.dispose(),f.dispose()}}const K_=new qn,mp=new gl(1,1),Z_=new I_,Q_=new Uy,J_=new V_,R1=[],P1=[],N1=new Float32Array(16),L1=new Float32Array(9),D1=new Float32Array(4);function fa(o,e,t){const i=o[0];if(i<=0||i>0)return o;const s=e*t;let a=R1[s];if(a===void 0&&(a=new Float32Array(s),R1[s]=a),e!==0){i.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,o[c].toArray(a,u)}return a}function gn(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function _n(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function Yu(o,e){let t=P1[e];t===void 0&&(t=new Int32Array(e),P1[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function hw(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function pw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;o.uniform2fv(this.addr,e),_n(t,e)}}function mw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gn(t,e))return;o.uniform3fv(this.addr,e),_n(t,e)}}function gw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;o.uniform4fv(this.addr,e),_n(t,e)}}function _w(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(gn(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),_n(t,e)}else{if(gn(t,i))return;D1.set(i),o.uniformMatrix2fv(this.addr,!1,D1),_n(t,i)}}function vw(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(gn(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),_n(t,e)}else{if(gn(t,i))return;L1.set(i),o.uniformMatrix3fv(this.addr,!1,L1),_n(t,i)}}function xw(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(gn(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),_n(t,e)}else{if(gn(t,i))return;N1.set(i),o.uniformMatrix4fv(this.addr,!1,N1),_n(t,i)}}function yw(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function Sw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;o.uniform2iv(this.addr,e),_n(t,e)}}function Mw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;o.uniform3iv(this.addr,e),_n(t,e)}}function ww(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;o.uniform4iv(this.addr,e),_n(t,e)}}function Ew(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function Tw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;o.uniform2uiv(this.addr,e),_n(t,e)}}function bw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;o.uniform3uiv(this.addr,e),_n(t,e)}}function Aw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;o.uniform4uiv(this.addr,e),_n(t,e)}}function Cw(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s);let a;this.type===o.SAMPLER_2D_SHADOW?(mp.compareFunction=t.isReversedDepthBuffer()?Gp:Hp,a=mp):a=K_,t.setTexture2D(e||a,s)}function Rw(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Q_,s)}function Pw(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||J_,s)}function Nw(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Z_,s)}function Lw(o){switch(o){case 5126:return hw;case 35664:return pw;case 35665:return mw;case 35666:return gw;case 35674:return _w;case 35675:return vw;case 35676:return xw;case 5124:case 35670:return yw;case 35667:case 35671:return Sw;case 35668:case 35672:return Mw;case 35669:case 35673:return ww;case 5125:return Ew;case 36294:return Tw;case 36295:return bw;case 36296:return Aw;case 35678:case 36198:case 36298:case 36306:case 35682:return Cw;case 35679:case 36299:case 36307:return Rw;case 35680:case 36300:case 36308:case 36293:return Pw;case 36289:case 36303:case 36311:case 36292:return Nw}}function Dw(o,e){o.uniform1fv(this.addr,e)}function Iw(o,e){const t=fa(e,this.size,2);o.uniform2fv(this.addr,t)}function Uw(o,e){const t=fa(e,this.size,3);o.uniform3fv(this.addr,t)}function Fw(o,e){const t=fa(e,this.size,4);o.uniform4fv(this.addr,t)}function Ow(o,e){const t=fa(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function kw(o,e){const t=fa(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function zw(o,e){const t=fa(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function Bw(o,e){o.uniform1iv(this.addr,e)}function Vw(o,e){o.uniform2iv(this.addr,e)}function Hw(o,e){o.uniform3iv(this.addr,e)}function Gw(o,e){o.uniform4iv(this.addr,e)}function Ww(o,e){o.uniform1uiv(this.addr,e)}function jw(o,e){o.uniform2uiv(this.addr,e)}function Xw(o,e){o.uniform3uiv(this.addr,e)}function qw(o,e){o.uniform4uiv(this.addr,e)}function Yw(o,e,t){const i=this.cache,s=e.length,a=Yu(t,s);gn(i,a)||(o.uniform1iv(this.addr,a),_n(i,a));let c;this.type===o.SAMPLER_2D_SHADOW?c=mp:c=K_;for(let u=0;u!==s;++u)t.setTexture2D(e[u]||c,a[u])}function $w(o,e,t){const i=this.cache,s=e.length,a=Yu(t,s);gn(i,a)||(o.uniform1iv(this.addr,a),_n(i,a));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||Q_,a[c])}function Kw(o,e,t){const i=this.cache,s=e.length,a=Yu(t,s);gn(i,a)||(o.uniform1iv(this.addr,a),_n(i,a));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||J_,a[c])}function Zw(o,e,t){const i=this.cache,s=e.length,a=Yu(t,s);gn(i,a)||(o.uniform1iv(this.addr,a),_n(i,a));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||Z_,a[c])}function Qw(o){switch(o){case 5126:return Dw;case 35664:return Iw;case 35665:return Uw;case 35666:return Fw;case 35674:return Ow;case 35675:return kw;case 35676:return zw;case 5124:case 35670:return Bw;case 35667:case 35671:return Vw;case 35668:case 35672:return Hw;case 35669:case 35673:return Gw;case 5125:return Ww;case 36294:return jw;case 36295:return Xw;case 36296:return qw;case 35678:case 36198:case 36298:case 36306:case 35682:return Yw;case 35679:case 36299:case 36307:return $w;case 35680:case 36300:case 36308:case 36293:return Kw;case 36289:case 36303:case 36311:case 36292:return Zw}}class Jw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Lw(t.type)}}class eE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qw(t.type)}}class tE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let a=0,c=s.length;a!==c;++a){const u=s[a];u.setValue(e,t[u.id],i)}}}const dh=/(\w+)(\])?(\[|\.)?/g;function I1(o,e){o.seq.push(e),o.map[e.id]=e}function nE(o,e,t){const i=o.name,s=i.length;for(dh.lastIndex=0;;){const a=dh.exec(i),c=dh.lastIndex;let u=a[1];const f=a[2]==="]",h=a[3];if(f&&(u=u|0),h===void 0||h==="["&&c+2===s){I1(t,h===void 0?new Jw(u,o,e):new eE(u,o,e));break}else{let m=t.map[u];m===void 0&&(m=new tE(u),I1(t,m)),t=m}}}class yu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const u=e.getActiveUniform(t,c),f=e.getUniformLocation(t,u.name);nE(u,f,this)}const s=[],a=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(c):a.push(c);s.length>0&&(this.seq=s.concat(a))}setValue(e,t,i,s){const a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,c=t.length;a!==c;++a){const u=t[a],f=i[u.id];f.needsUpdate!==!1&&u.setValue(e,f.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,a=e.length;s!==a;++s){const c=e[s];c.id in t&&i.push(c)}return i}}function U1(o,e,t){const i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}const iE=37297;let rE=0;function sE(o,e){const t=o.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=s;c<a;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const F1=new dt;function oE(o){At._getMatrix(F1,At.workingColorSpace,o);const e=`mat3( ${F1.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(o)){case Tu:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function O1(o,e,t){const i=o.getShaderParameter(e,o.COMPILE_STATUS),a=(o.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const u=parseInt(c[1]);return t.toUpperCase()+`

`+a+`

`+sE(o.getShaderSource(e),u)}else return a}function aE(o,e){const t=oE(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const lE={[__]:"Linear",[v_]:"Reinhard",[x_]:"Cineon",[y_]:"ACESFilmic",[M_]:"AgX",[w_]:"Neutral",[S_]:"Custom"};function cE(o,e){const t=lE[e];return t===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fu=new Z;function uE(){At.getLuminanceCoefficients(fu);const o=fu.x.toFixed(4),e=fu.y.toFixed(4),t=fu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dE(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ol).join(`
`)}function fE(o){const e=[];for(const t in o){const i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function hE(o,e){const t={},i=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=o.getActiveAttrib(e,s),c=a.name;let u=1;a.type===o.FLOAT_MAT2&&(u=2),a.type===o.FLOAT_MAT3&&(u=3),a.type===o.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:o.getAttribLocation(e,c),locationSize:u}}return t}function ol(o){return o!==""}function k1(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function z1(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pE=/^[ \t]*#include +<([\w\d./]+)>/gm;function gp(o){return o.replace(pE,gE)}const mE=new Map;function gE(o,e){let t=ht[e];if(t===void 0){const i=mE.get(e);if(i!==void 0)t=ht[i],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return gp(t)}const _E=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function B1(o){return o.replace(_E,vE)}function vE(o,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function V1(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const xE={[pu]:"SHADOWMAP_TYPE_PCF",[sl]:"SHADOWMAP_TYPE_VSM"};function yE(o){return xE[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const SE={[so]:"ENVMAP_TYPE_CUBE",[ta]:"ENVMAP_TYPE_CUBE",[Gu]:"ENVMAP_TYPE_CUBE_UV"};function ME(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":SE[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const wE={[ta]:"ENVMAP_MODE_REFRACTION"};function EE(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":wE[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const TE={[g_]:"ENVMAP_BLENDING_MULTIPLY",[gy]:"ENVMAP_BLENDING_MIX",[_y]:"ENVMAP_BLENDING_ADD"};function bE(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":TE[o.combine]||"ENVMAP_BLENDING_NONE"}function AE(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function CE(o,e,t,i){const s=o.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const f=yE(t),h=ME(t),p=EE(t),m=bE(t),v=AE(t),y=dE(t),w=fE(a),S=s.createProgram();let x,_,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(ol).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(ol).join(`
`),_.length>0&&(_+=`
`)):(x=[V1(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ol).join(`
`),_=[V1(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ur?"#define TONE_MAPPING":"",t.toneMapping!==ur?ht.tonemapping_pars_fragment:"",t.toneMapping!==ur?cE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,aE("linearToOutputTexel",t.outputColorSpace),uE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ol).join(`
`)),c=gp(c),c=k1(c,t),c=z1(c,t),u=gp(u),u=k1(u,t),u=z1(u,t),c=B1(c),u=B1(u),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",t.glslVersion===Kg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const A=T+x+c,b=T+_+u,P=U1(s,s.VERTEX_SHADER,A),D=U1(s,s.FRAGMENT_SHADER,b);s.attachShader(S,P),s.attachShader(S,D),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function I(k){if(o.debug.checkShaderErrors){const W=s.getProgramInfoLog(S)||"",V=s.getShaderInfoLog(P)||"",J=s.getShaderInfoLog(D)||"",ee=W.trim(),Q=V.trim(),Y=J.trim();let q=!0,de=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,S,P,D);else{const re=O1(s,P,"vertex"),B=O1(s,D,"fragment");Nt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ee+`
`+re+`
`+B)}else ee!==""?at("WebGLProgram: Program Info Log:",ee):(Q===""||Y==="")&&(de=!1);de&&(k.diagnostics={runnable:q,programLog:ee,vertexShader:{log:Q,prefix:x},fragmentShader:{log:Y,prefix:_}})}s.deleteShader(P),s.deleteShader(D),F=new yu(s,S),E=hE(s,S)}let F;this.getUniforms=function(){return F===void 0&&I(this),F};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(S,iE)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rE++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=P,this.fragmentShader=D,this}let RE=0;class PE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new NE(e),t.set(e,i)),i}}class NE{constructor(e){this.id=RE++,this.code=e,this.usedTimes=0}}function LE(o,e,t,i,s,a,c){const u=new U_,f=new PE,h=new Set,p=[],m=new Map,v=s.logarithmicDepthBuffer;let y=s.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(E){return h.add(E),E===0?"uv":`uv${E}`}function x(E,L,k,W,V){const J=W.fog,ee=V.geometry,Q=E.isMeshStandardMaterial?W.environment:null,Y=(E.isMeshStandardMaterial?t:e).get(E.envMap||Q),q=Y&&Y.mapping===Gu?Y.image.height:null,de=w[E.type];E.precision!==null&&(y=s.getMaxPrecision(E.precision),y!==E.precision&&at("WebGLProgram.getParameters:",E.precision,"not supported, using",y,"instead."));const re=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,B=re!==void 0?re.length:0;let oe=0;ee.morphAttributes.position!==void 0&&(oe=1),ee.morphAttributes.normal!==void 0&&(oe=2),ee.morphAttributes.color!==void 0&&(oe=3);let be,Fe,Be,ae;if(de){const Et=rr[de];be=Et.vertexShader,Fe=Et.fragmentShader}else be=E.vertexShader,Fe=E.fragmentShader,f.update(E),Be=f.getVertexShaderID(E),ae=f.getFragmentShaderID(E);const fe=o.getRenderTarget(),Se=o.state.buffers.depth.getReversed(),Ve=V.isInstancedMesh===!0,Ie=V.isBatchedMesh===!0,_t=!!E.map,on=!!E.matcap,mt=!!Y,Mt=!!E.aoMap,It=!!E.lightMap,ut=!!E.bumpMap,Xt=!!E.normalMap,G=!!E.displacementMap,qt=!!E.emissiveMap,vt=!!E.metalnessMap,wt=!!E.roughnessMap,qe=E.anisotropy>0,O=E.clearcoat>0,C=E.dispersion>0,$=E.iridescence>0,he=E.sheen>0,me=E.transmission>0,ue=qe&&!!E.anisotropyMap,Ke=O&&!!E.clearcoatMap,Ee=O&&!!E.clearcoatNormalMap,He=O&&!!E.clearcoatRoughnessMap,it=$&&!!E.iridescenceMap,ye=$&&!!E.iridescenceThicknessMap,Re=he&&!!E.sheenColorMap,je=he&&!!E.sheenRoughnessMap,Ye=!!E.specularMap,Ae=!!E.specularColorMap,ct=!!E.specularIntensityMap,j=me&&!!E.transmissionMap,Ne=me&&!!E.thicknessMap,Me=!!E.gradientMap,Le=!!E.alphaMap,ve=E.alphaTest>0,pe=!!E.alphaHash,Ce=!!E.extensions;let rt=ur;E.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(rt=o.toneMapping);const Ft={shaderID:de,shaderType:E.type,shaderName:E.name,vertexShader:be,fragmentShader:Fe,defines:E.defines,customVertexShaderID:Be,customFragmentShaderID:ae,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:y,batching:Ie,batchingColor:Ie&&V._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&V.instanceColor!==null,instancingMorph:Ve&&V.morphTexture!==null,outputColorSpace:fe===null?o.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:ia,alphaToCoverage:!!E.alphaToCoverage,map:_t,matcap:on,envMap:mt,envMapMode:mt&&Y.mapping,envMapCubeUVHeight:q,aoMap:Mt,lightMap:It,bumpMap:ut,normalMap:Xt,displacementMap:G,emissiveMap:qt,normalMapObjectSpace:Xt&&E.normalMapType===yy,normalMapTangentSpace:Xt&&E.normalMapType===L_,metalnessMap:vt,roughnessMap:wt,anisotropy:qe,anisotropyMap:ue,clearcoat:O,clearcoatMap:Ke,clearcoatNormalMap:Ee,clearcoatRoughnessMap:He,dispersion:C,iridescence:$,iridescenceMap:it,iridescenceThicknessMap:ye,sheen:he,sheenColorMap:Re,sheenRoughnessMap:je,specularMap:Ye,specularColorMap:Ae,specularIntensityMap:ct,transmission:me,transmissionMap:j,thicknessMap:Ne,gradientMap:Me,opaque:E.transparent===!1&&E.blending===$o&&E.alphaToCoverage===!1,alphaMap:Le,alphaTest:ve,alphaHash:pe,combine:E.combine,mapUv:_t&&S(E.map.channel),aoMapUv:Mt&&S(E.aoMap.channel),lightMapUv:It&&S(E.lightMap.channel),bumpMapUv:ut&&S(E.bumpMap.channel),normalMapUv:Xt&&S(E.normalMap.channel),displacementMapUv:G&&S(E.displacementMap.channel),emissiveMapUv:qt&&S(E.emissiveMap.channel),metalnessMapUv:vt&&S(E.metalnessMap.channel),roughnessMapUv:wt&&S(E.roughnessMap.channel),anisotropyMapUv:ue&&S(E.anisotropyMap.channel),clearcoatMapUv:Ke&&S(E.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&S(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&S(E.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&S(E.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&S(E.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&S(E.sheenColorMap.channel),sheenRoughnessMapUv:je&&S(E.sheenRoughnessMap.channel),specularMapUv:Ye&&S(E.specularMap.channel),specularColorMapUv:Ae&&S(E.specularColorMap.channel),specularIntensityMapUv:ct&&S(E.specularIntensityMap.channel),transmissionMapUv:j&&S(E.transmissionMap.channel),thicknessMapUv:Ne&&S(E.thicknessMap.channel),alphaMapUv:Le&&S(E.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Xt||qe),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!ee.attributes.uv&&(_t||Le),fog:!!J,useFog:E.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Se,skinning:V.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:oe,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:rt,decodeVideoTexture:_t&&E.map.isVideoTexture===!0&&At.getTransfer(E.map.colorSpace)===Ot,decodeVideoTextureEmissive:qt&&E.emissiveMap.isVideoTexture===!0&&At.getTransfer(E.emissiveMap.colorSpace)===Ot,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===sr,flipSided:E.side===ni,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ce&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&E.extensions.multiDraw===!0||Ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ft.vertexUv1s=h.has(1),Ft.vertexUv2s=h.has(2),Ft.vertexUv3s=h.has(3),h.clear(),Ft}function _(E){const L=[];if(E.shaderID?L.push(E.shaderID):(L.push(E.customVertexShaderID),L.push(E.customFragmentShaderID)),E.defines!==void 0)for(const k in E.defines)L.push(k),L.push(E.defines[k]);return E.isRawShaderMaterial===!1&&(T(L,E),A(L,E),L.push(o.outputColorSpace)),L.push(E.customProgramCacheKey),L.join()}function T(E,L){E.push(L.precision),E.push(L.outputColorSpace),E.push(L.envMapMode),E.push(L.envMapCubeUVHeight),E.push(L.mapUv),E.push(L.alphaMapUv),E.push(L.lightMapUv),E.push(L.aoMapUv),E.push(L.bumpMapUv),E.push(L.normalMapUv),E.push(L.displacementMapUv),E.push(L.emissiveMapUv),E.push(L.metalnessMapUv),E.push(L.roughnessMapUv),E.push(L.anisotropyMapUv),E.push(L.clearcoatMapUv),E.push(L.clearcoatNormalMapUv),E.push(L.clearcoatRoughnessMapUv),E.push(L.iridescenceMapUv),E.push(L.iridescenceThicknessMapUv),E.push(L.sheenColorMapUv),E.push(L.sheenRoughnessMapUv),E.push(L.specularMapUv),E.push(L.specularColorMapUv),E.push(L.specularIntensityMapUv),E.push(L.transmissionMapUv),E.push(L.thicknessMapUv),E.push(L.combine),E.push(L.fogExp2),E.push(L.sizeAttenuation),E.push(L.morphTargetsCount),E.push(L.morphAttributeCount),E.push(L.numDirLights),E.push(L.numPointLights),E.push(L.numSpotLights),E.push(L.numSpotLightMaps),E.push(L.numHemiLights),E.push(L.numRectAreaLights),E.push(L.numDirLightShadows),E.push(L.numPointLightShadows),E.push(L.numSpotLightShadows),E.push(L.numSpotLightShadowsWithMaps),E.push(L.numLightProbes),E.push(L.shadowMapType),E.push(L.toneMapping),E.push(L.numClippingPlanes),E.push(L.numClipIntersection),E.push(L.depthPacking)}function A(E,L){u.disableAll(),L.instancing&&u.enable(0),L.instancingColor&&u.enable(1),L.instancingMorph&&u.enable(2),L.matcap&&u.enable(3),L.envMap&&u.enable(4),L.normalMapObjectSpace&&u.enable(5),L.normalMapTangentSpace&&u.enable(6),L.clearcoat&&u.enable(7),L.iridescence&&u.enable(8),L.alphaTest&&u.enable(9),L.vertexColors&&u.enable(10),L.vertexAlphas&&u.enable(11),L.vertexUv1s&&u.enable(12),L.vertexUv2s&&u.enable(13),L.vertexUv3s&&u.enable(14),L.vertexTangents&&u.enable(15),L.anisotropy&&u.enable(16),L.alphaHash&&u.enable(17),L.batching&&u.enable(18),L.dispersion&&u.enable(19),L.batchingColor&&u.enable(20),L.gradientMap&&u.enable(21),E.push(u.mask),u.disableAll(),L.fog&&u.enable(0),L.useFog&&u.enable(1),L.flatShading&&u.enable(2),L.logarithmicDepthBuffer&&u.enable(3),L.reversedDepthBuffer&&u.enable(4),L.skinning&&u.enable(5),L.morphTargets&&u.enable(6),L.morphNormals&&u.enable(7),L.morphColors&&u.enable(8),L.premultipliedAlpha&&u.enable(9),L.shadowMapEnabled&&u.enable(10),L.doubleSided&&u.enable(11),L.flipSided&&u.enable(12),L.useDepthPacking&&u.enable(13),L.dithering&&u.enable(14),L.transmission&&u.enable(15),L.sheen&&u.enable(16),L.opaque&&u.enable(17),L.pointsUvs&&u.enable(18),L.decodeVideoTexture&&u.enable(19),L.decodeVideoTextureEmissive&&u.enable(20),L.alphaToCoverage&&u.enable(21),E.push(u.mask)}function b(E){const L=w[E.type];let k;if(L){const W=rr[L];k=Yy.clone(W.uniforms)}else k=E.uniforms;return k}function P(E,L){let k=m.get(L);return k!==void 0?++k.usedTimes:(k=new CE(o,L,E,a),p.push(k),m.set(L,k)),k}function D(E){if(--E.usedTimes===0){const L=p.indexOf(E);p[L]=p[p.length-1],p.pop(),m.delete(E.cacheKey),E.destroy()}}function I(E){f.remove(E)}function F(){f.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:b,acquireProgram:P,releaseProgram:D,releaseShaderCache:I,programs:p,dispose:F}}function DE(){let o=new WeakMap;function e(c){return o.has(c)}function t(c){let u=o.get(c);return u===void 0&&(u={},o.set(c,u)),u}function i(c){o.delete(c)}function s(c,u,f){o.get(c)[u]=f}function a(){o=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:a}}function IE(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function H1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function G1(){const o=[];let e=0;const t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function c(m,v,y,w,S,x){let _=o[e];return _===void 0?(_={id:m.id,object:m,geometry:v,material:y,groupOrder:w,renderOrder:m.renderOrder,z:S,group:x},o[e]=_):(_.id=m.id,_.object=m,_.geometry=v,_.material=y,_.groupOrder=w,_.renderOrder=m.renderOrder,_.z=S,_.group=x),e++,_}function u(m,v,y,w,S,x){const _=c(m,v,y,w,S,x);y.transmission>0?i.push(_):y.transparent===!0?s.push(_):t.push(_)}function f(m,v,y,w,S,x){const _=c(m,v,y,w,S,x);y.transmission>0?i.unshift(_):y.transparent===!0?s.unshift(_):t.unshift(_)}function h(m,v){t.length>1&&t.sort(m||IE),i.length>1&&i.sort(v||H1),s.length>1&&s.sort(v||H1)}function p(){for(let m=e,v=o.length;m<v;m++){const y=o[m];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:u,unshift:f,finish:p,sort:h}}function UE(){let o=new WeakMap;function e(i,s){const a=o.get(i);let c;return a===void 0?(c=new G1,o.set(i,[c])):s>=a.length?(c=new G1,a.push(c)):c=a[s],c}function t(){o=new WeakMap}return{get:e,dispose:t}}function FE(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new Lt};break;case"SpotLight":t={position:new Z,direction:new Z,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":t={color:new Lt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return o[e.id]=t,t}}}function OE(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let kE=0;function zE(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function BE(o){const e=new FE,t=OE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new Z);const s=new Z,a=new sn,c=new sn;function u(h){let p=0,m=0,v=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let y=0,w=0,S=0,x=0,_=0,T=0,A=0,b=0,P=0,D=0,I=0;h.sort(zE);for(let E=0,L=h.length;E<L;E++){const k=h[E],W=k.color,V=k.intensity,J=k.distance;let ee=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===na?ee=k.shadow.map.texture:ee=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)p+=W.r*V,m+=W.g*V,v+=W.b*V;else if(k.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(k.sh.coefficients[Q],V);I++}else if(k.isDirectionalLight){const Q=e.get(k);if(Q.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const Y=k.shadow,q=t.get(k);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize=Y.mapSize,i.directionalShadow[y]=q,i.directionalShadowMap[y]=ee,i.directionalShadowMatrix[y]=k.shadow.matrix,T++}i.directional[y]=Q,y++}else if(k.isSpotLight){const Q=e.get(k);Q.position.setFromMatrixPosition(k.matrixWorld),Q.color.copy(W).multiplyScalar(V),Q.distance=J,Q.coneCos=Math.cos(k.angle),Q.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),Q.decay=k.decay,i.spot[S]=Q;const Y=k.shadow;if(k.map&&(i.spotLightMap[P]=k.map,P++,Y.updateMatrices(k),k.castShadow&&D++),i.spotLightMatrix[S]=Y.matrix,k.castShadow){const q=t.get(k);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize=Y.mapSize,i.spotShadow[S]=q,i.spotShadowMap[S]=ee,b++}S++}else if(k.isRectAreaLight){const Q=e.get(k);Q.color.copy(W).multiplyScalar(V),Q.halfWidth.set(k.width*.5,0,0),Q.halfHeight.set(0,k.height*.5,0),i.rectArea[x]=Q,x++}else if(k.isPointLight){const Q=e.get(k);if(Q.color.copy(k.color).multiplyScalar(k.intensity),Q.distance=k.distance,Q.decay=k.decay,k.castShadow){const Y=k.shadow,q=t.get(k);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize=Y.mapSize,q.shadowCameraNear=Y.camera.near,q.shadowCameraFar=Y.camera.far,i.pointShadow[w]=q,i.pointShadowMap[w]=ee,i.pointShadowMatrix[w]=k.shadow.matrix,A++}i.point[w]=Q,w++}else if(k.isHemisphereLight){const Q=e.get(k);Q.skyColor.copy(k.color).multiplyScalar(V),Q.groundColor.copy(k.groundColor).multiplyScalar(V),i.hemi[_]=Q,_++}}x>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=m,i.ambient[2]=v;const F=i.hash;(F.directionalLength!==y||F.pointLength!==w||F.spotLength!==S||F.rectAreaLength!==x||F.hemiLength!==_||F.numDirectionalShadows!==T||F.numPointShadows!==A||F.numSpotShadows!==b||F.numSpotMaps!==P||F.numLightProbes!==I)&&(i.directional.length=y,i.spot.length=S,i.rectArea.length=x,i.point.length=w,i.hemi.length=_,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=b+P-D,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=I,F.directionalLength=y,F.pointLength=w,F.spotLength=S,F.rectAreaLength=x,F.hemiLength=_,F.numDirectionalShadows=T,F.numPointShadows=A,F.numSpotShadows=b,F.numSpotMaps=P,F.numLightProbes=I,i.version=kE++)}function f(h,p){let m=0,v=0,y=0,w=0,S=0;const x=p.matrixWorldInverse;for(let _=0,T=h.length;_<T;_++){const A=h[_];if(A.isDirectionalLight){const b=i.directional[m];b.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(x),m++}else if(A.isSpotLight){const b=i.spot[y];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(x),b.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(x),y++}else if(A.isRectAreaLight){const b=i.rectArea[w];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(x),c.identity(),a.copy(A.matrixWorld),a.premultiply(x),c.extractRotation(a),b.halfWidth.set(A.width*.5,0,0),b.halfHeight.set(0,A.height*.5,0),b.halfWidth.applyMatrix4(c),b.halfHeight.applyMatrix4(c),w++}else if(A.isPointLight){const b=i.point[v];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(x),v++}else if(A.isHemisphereLight){const b=i.hemi[S];b.direction.setFromMatrixPosition(A.matrixWorld),b.direction.transformDirection(x),S++}}}return{setup:u,setupView:f,state:i}}function W1(o){const e=new BE(o),t=[],i=[];function s(p){h.camera=p,t.length=0,i.length=0}function a(p){t.push(p)}function c(p){i.push(p)}function u(){e.setup(t)}function f(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:u,setupLightsView:f,pushLight:a,pushShadow:c}}function VE(o){let e=new WeakMap;function t(s,a=0){const c=e.get(s);let u;return c===void 0?(u=new W1(o),e.set(s,[u])):a>=c.length?(u=new W1(o),c.push(u)):u=c[a],u}function i(){e=new WeakMap}return{get:t,dispose:i}}const HE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,WE=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],jE=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],j1=new sn,il=new Z,fh=new Z;function XE(o,e,t){let i=new W_;const s=new Ct,a=new Ct,c=new cn,u=new l3,f=new c3,h={},p=t.maxTextureSize,m={[_s]:ni,[ni]:_s,[sr]:sr},v=new hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:HE,fragmentShader:GE}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const w=new vn;w.setAttribute("position",new Oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new ki(w,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pu;let _=this.type;this.render=function(D,I,F){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||D.length===0)return;D.type===Z2&&(at("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),D.type=pu);const E=o.getRenderTarget(),L=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),W=o.state;W.setBlending(Nr),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const V=_!==this.type;V&&I.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(ee=>ee.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,ee=D.length;J<ee;J++){const Q=D[J],Y=Q.shadow;if(Y===void 0){at("WebGLShadowMap:",Q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const q=Y.getFrameExtents();if(s.multiply(q),a.copy(Y.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(a.x=Math.floor(p/q.x),s.x=a.x*q.x,Y.mapSize.x=a.x),s.y>p&&(a.y=Math.floor(p/q.y),s.y=a.y*q.y,Y.mapSize.y=a.y)),Y.map===null||V===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===sl){if(Q.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new dr(s.x,s.y,{format:na,type:Dr,minFilter:zn,magFilter:zn,generateMipmaps:!1}),Y.map.texture.name=Q.name+".shadowMap",Y.map.depthTexture=new gl(s.x,s.y,ar),Y.map.depthTexture.name=Q.name+".shadowMapDepth",Y.map.depthTexture.format=Ir,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Rn,Y.map.depthTexture.magFilter=Rn}else{Q.isPointLight?(Y.map=new H_(s.x),Y.map.depthTexture=new s3(s.x,fr)):(Y.map=new dr(s.x,s.y),Y.map.depthTexture=new gl(s.x,s.y,fr)),Y.map.depthTexture.name=Q.name+".shadowMap",Y.map.depthTexture.format=Ir;const re=o.state.buffers.depth.getReversed();this.type===pu?(Y.map.depthTexture.compareFunction=re?Gp:Hp,Y.map.depthTexture.minFilter=zn,Y.map.depthTexture.magFilter=zn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Rn,Y.map.depthTexture.magFilter=Rn)}Y.camera.updateProjectionMatrix()}const de=Y.map.isWebGLCubeRenderTarget?6:1;for(let re=0;re<de;re++){if(Y.map.isWebGLCubeRenderTarget)o.setRenderTarget(Y.map,re),o.clear();else{re===0&&(o.setRenderTarget(Y.map),o.clear());const B=Y.getViewport(re);c.set(a.x*B.x,a.y*B.y,a.x*B.z,a.y*B.w),W.viewport(c)}if(Q.isPointLight){const B=Y.camera,oe=Y.matrix,be=Q.distance||B.far;be!==B.far&&(B.far=be,B.updateProjectionMatrix()),il.setFromMatrixPosition(Q.matrixWorld),B.position.copy(il),fh.copy(B.position),fh.add(WE[re]),B.up.copy(jE[re]),B.lookAt(fh),B.updateMatrixWorld(),oe.makeTranslation(-il.x,-il.y,-il.z),j1.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(j1,B.coordinateSystem,B.reversedDepth)}else Y.updateMatrices(Q);i=Y.getFrustum(),b(I,F,Y.camera,Q,this.type)}Y.isPointLightShadow!==!0&&this.type===sl&&T(Y,F),Y.needsUpdate=!1}_=this.type,x.needsUpdate=!1,o.setRenderTarget(E,L,k)};function T(D,I){const F=e.update(S);v.defines.VSM_SAMPLES!==D.blurSamples&&(v.defines.VSM_SAMPLES=D.blurSamples,y.defines.VSM_SAMPLES=D.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new dr(s.x,s.y,{format:na,type:Dr})),v.uniforms.shadow_pass.value=D.map.depthTexture,v.uniforms.resolution.value=D.mapSize,v.uniforms.radius.value=D.radius,o.setRenderTarget(D.mapPass),o.clear(),o.renderBufferDirect(I,null,F,v,S,null),y.uniforms.shadow_pass.value=D.mapPass.texture,y.uniforms.resolution.value=D.mapSize,y.uniforms.radius.value=D.radius,o.setRenderTarget(D.map),o.clear(),o.renderBufferDirect(I,null,F,y,S,null)}function A(D,I,F,E){let L=null;const k=F.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(k!==void 0)L=k;else if(L=F.isPointLight===!0?f:u,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const W=L.uuid,V=I.uuid;let J=h[W];J===void 0&&(J={},h[W]=J);let ee=J[V];ee===void 0&&(ee=L.clone(),J[V]=ee,I.addEventListener("dispose",P)),L=ee}if(L.visible=I.visible,L.wireframe=I.wireframe,E===sl?L.side=I.shadowSide!==null?I.shadowSide:I.side:L.side=I.shadowSide!==null?I.shadowSide:m[I.side],L.alphaMap=I.alphaMap,L.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,L.map=I.map,L.clipShadows=I.clipShadows,L.clippingPlanes=I.clippingPlanes,L.clipIntersection=I.clipIntersection,L.displacementMap=I.displacementMap,L.displacementScale=I.displacementScale,L.displacementBias=I.displacementBias,L.wireframeLinewidth=I.wireframeLinewidth,L.linewidth=I.linewidth,F.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const W=o.properties.get(L);W.light=F}return L}function b(D,I,F,E,L){if(D.visible===!1)return;if(D.layers.test(I.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&L===sl)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,D.matrixWorld);const V=e.update(D),J=D.material;if(Array.isArray(J)){const ee=V.groups;for(let Q=0,Y=ee.length;Q<Y;Q++){const q=ee[Q],de=J[q.materialIndex];if(de&&de.visible){const re=A(D,de,E,L);D.onBeforeShadow(o,D,I,F,V,re,q),o.renderBufferDirect(F,null,V,re,D,q),D.onAfterShadow(o,D,I,F,V,re,q)}}}else if(J.visible){const ee=A(D,J,E,L);D.onBeforeShadow(o,D,I,F,V,ee,null),o.renderBufferDirect(F,null,V,ee,D,null),D.onAfterShadow(o,D,I,F,V,ee,null)}}const W=D.children;for(let V=0,J=W.length;V<J;V++)b(W[V],I,F,E,L)}function P(D){D.target.removeEventListener("dispose",P);for(const F in h){const E=h[F],L=D.target.uuid;L in E&&(E[L].dispose(),delete E[L])}}}const qE={[Eh]:Th,[bh]:Rh,[Ah]:Ph,[ea]:Ch,[Th]:Eh,[Rh]:bh,[Ph]:Ah,[Ch]:ea};function YE(o,e){function t(){let j=!1;const Ne=new cn;let Me=null;const Le=new cn(0,0,0,0);return{setMask:function(ve){Me!==ve&&!j&&(o.colorMask(ve,ve,ve,ve),Me=ve)},setLocked:function(ve){j=ve},setClear:function(ve,pe,Ce,rt,Ft){Ft===!0&&(ve*=rt,pe*=rt,Ce*=rt),Ne.set(ve,pe,Ce,rt),Le.equals(Ne)===!1&&(o.clearColor(ve,pe,Ce,rt),Le.copy(Ne))},reset:function(){j=!1,Me=null,Le.set(-1,0,0,0)}}}function i(){let j=!1,Ne=!1,Me=null,Le=null,ve=null;return{setReversed:function(pe){if(Ne!==pe){const Ce=e.get("EXT_clip_control");pe?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),Ne=pe;const rt=ve;ve=null,this.setClear(rt)}},getReversed:function(){return Ne},setTest:function(pe){pe?fe(o.DEPTH_TEST):Se(o.DEPTH_TEST)},setMask:function(pe){Me!==pe&&!j&&(o.depthMask(pe),Me=pe)},setFunc:function(pe){if(Ne&&(pe=qE[pe]),Le!==pe){switch(pe){case Eh:o.depthFunc(o.NEVER);break;case Th:o.depthFunc(o.ALWAYS);break;case bh:o.depthFunc(o.LESS);break;case ea:o.depthFunc(o.LEQUAL);break;case Ah:o.depthFunc(o.EQUAL);break;case Ch:o.depthFunc(o.GEQUAL);break;case Rh:o.depthFunc(o.GREATER);break;case Ph:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Le=pe}},setLocked:function(pe){j=pe},setClear:function(pe){ve!==pe&&(Ne&&(pe=1-pe),o.clearDepth(pe),ve=pe)},reset:function(){j=!1,Me=null,Le=null,ve=null,Ne=!1}}}function s(){let j=!1,Ne=null,Me=null,Le=null,ve=null,pe=null,Ce=null,rt=null,Ft=null;return{setTest:function(Et){j||(Et?fe(o.STENCIL_TEST):Se(o.STENCIL_TEST))},setMask:function(Et){Ne!==Et&&!j&&(o.stencilMask(Et),Ne=Et)},setFunc:function(Et,li,Vn){(Me!==Et||Le!==li||ve!==Vn)&&(o.stencilFunc(Et,li,Vn),Me=Et,Le=li,ve=Vn)},setOp:function(Et,li,Vn){(pe!==Et||Ce!==li||rt!==Vn)&&(o.stencilOp(Et,li,Vn),pe=Et,Ce=li,rt=Vn)},setLocked:function(Et){j=Et},setClear:function(Et){Ft!==Et&&(o.clearStencil(Et),Ft=Et)},reset:function(){j=!1,Ne=null,Me=null,Le=null,ve=null,pe=null,Ce=null,rt=null,Ft=null}}}const a=new t,c=new i,u=new s,f=new WeakMap,h=new WeakMap;let p={},m={},v=new WeakMap,y=[],w=null,S=!1,x=null,_=null,T=null,A=null,b=null,P=null,D=null,I=new Lt(0,0,0),F=0,E=!1,L=null,k=null,W=null,V=null,J=null;const ee=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,Y=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(q)[1]),Q=Y>=1):q.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Q=Y>=2);let de=null,re={};const B=o.getParameter(o.SCISSOR_BOX),oe=o.getParameter(o.VIEWPORT),be=new cn().fromArray(B),Fe=new cn().fromArray(oe);function Be(j,Ne,Me,Le){const ve=new Uint8Array(4),pe=o.createTexture();o.bindTexture(j,pe),o.texParameteri(j,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(j,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ce=0;Ce<Me;Ce++)j===o.TEXTURE_3D||j===o.TEXTURE_2D_ARRAY?o.texImage3D(Ne,0,o.RGBA,1,1,Le,0,o.RGBA,o.UNSIGNED_BYTE,ve):o.texImage2D(Ne+Ce,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,ve);return pe}const ae={};ae[o.TEXTURE_2D]=Be(o.TEXTURE_2D,o.TEXTURE_2D,1),ae[o.TEXTURE_CUBE_MAP]=Be(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[o.TEXTURE_2D_ARRAY]=Be(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ae[o.TEXTURE_3D]=Be(o.TEXTURE_3D,o.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),fe(o.DEPTH_TEST),c.setFunc(ea),ut(!1),Xt(jg),fe(o.CULL_FACE),Mt(Nr);function fe(j){p[j]!==!0&&(o.enable(j),p[j]=!0)}function Se(j){p[j]!==!1&&(o.disable(j),p[j]=!1)}function Ve(j,Ne){return m[j]!==Ne?(o.bindFramebuffer(j,Ne),m[j]=Ne,j===o.DRAW_FRAMEBUFFER&&(m[o.FRAMEBUFFER]=Ne),j===o.FRAMEBUFFER&&(m[o.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Ie(j,Ne){let Me=y,Le=!1;if(j){Me=v.get(Ne),Me===void 0&&(Me=[],v.set(Ne,Me));const ve=j.textures;if(Me.length!==ve.length||Me[0]!==o.COLOR_ATTACHMENT0){for(let pe=0,Ce=ve.length;pe<Ce;pe++)Me[pe]=o.COLOR_ATTACHMENT0+pe;Me.length=ve.length,Le=!0}}else Me[0]!==o.BACK&&(Me[0]=o.BACK,Le=!0);Le&&o.drawBuffers(Me)}function _t(j){return w!==j?(o.useProgram(j),w=j,!0):!1}const on={[$s]:o.FUNC_ADD,[J2]:o.FUNC_SUBTRACT,[ey]:o.FUNC_REVERSE_SUBTRACT};on[ty]=o.MIN,on[ny]=o.MAX;const mt={[iy]:o.ZERO,[ry]:o.ONE,[sy]:o.SRC_COLOR,[Mh]:o.SRC_ALPHA,[dy]:o.SRC_ALPHA_SATURATE,[cy]:o.DST_COLOR,[ay]:o.DST_ALPHA,[oy]:o.ONE_MINUS_SRC_COLOR,[wh]:o.ONE_MINUS_SRC_ALPHA,[uy]:o.ONE_MINUS_DST_COLOR,[ly]:o.ONE_MINUS_DST_ALPHA,[fy]:o.CONSTANT_COLOR,[hy]:o.ONE_MINUS_CONSTANT_COLOR,[py]:o.CONSTANT_ALPHA,[my]:o.ONE_MINUS_CONSTANT_ALPHA};function Mt(j,Ne,Me,Le,ve,pe,Ce,rt,Ft,Et){if(j===Nr){S===!0&&(Se(o.BLEND),S=!1);return}if(S===!1&&(fe(o.BLEND),S=!0),j!==Q2){if(j!==x||Et!==E){if((_!==$s||b!==$s)&&(o.blendEquation(o.FUNC_ADD),_=$s,b=$s),Et)switch(j){case $o:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Eu:o.blendFunc(o.ONE,o.ONE);break;case Xg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case qg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Nt("WebGLState: Invalid blending: ",j);break}else switch(j){case $o:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Eu:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Xg:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qg:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",j);break}T=null,A=null,P=null,D=null,I.set(0,0,0),F=0,x=j,E=Et}return}ve=ve||Ne,pe=pe||Me,Ce=Ce||Le,(Ne!==_||ve!==b)&&(o.blendEquationSeparate(on[Ne],on[ve]),_=Ne,b=ve),(Me!==T||Le!==A||pe!==P||Ce!==D)&&(o.blendFuncSeparate(mt[Me],mt[Le],mt[pe],mt[Ce]),T=Me,A=Le,P=pe,D=Ce),(rt.equals(I)===!1||Ft!==F)&&(o.blendColor(rt.r,rt.g,rt.b,Ft),I.copy(rt),F=Ft),x=j,E=!1}function It(j,Ne){j.side===sr?Se(o.CULL_FACE):fe(o.CULL_FACE);let Me=j.side===ni;Ne&&(Me=!Me),ut(Me),j.blending===$o&&j.transparent===!1?Mt(Nr):Mt(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),c.setFunc(j.depthFunc),c.setTest(j.depthTest),c.setMask(j.depthWrite),a.setMask(j.colorWrite);const Le=j.stencilWrite;u.setTest(Le),Le&&(u.setMask(j.stencilWriteMask),u.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),u.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),qt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?fe(o.SAMPLE_ALPHA_TO_COVERAGE):Se(o.SAMPLE_ALPHA_TO_COVERAGE)}function ut(j){L!==j&&(j?o.frontFace(o.CW):o.frontFace(o.CCW),L=j)}function Xt(j){j!==$2?(fe(o.CULL_FACE),j!==k&&(j===jg?o.cullFace(o.BACK):j===K2?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Se(o.CULL_FACE),k=j}function G(j){j!==W&&(Q&&o.lineWidth(j),W=j)}function qt(j,Ne,Me){j?(fe(o.POLYGON_OFFSET_FILL),(V!==Ne||J!==Me)&&(o.polygonOffset(Ne,Me),V=Ne,J=Me)):Se(o.POLYGON_OFFSET_FILL)}function vt(j){j?fe(o.SCISSOR_TEST):Se(o.SCISSOR_TEST)}function wt(j){j===void 0&&(j=o.TEXTURE0+ee-1),de!==j&&(o.activeTexture(j),de=j)}function qe(j,Ne,Me){Me===void 0&&(de===null?Me=o.TEXTURE0+ee-1:Me=de);let Le=re[Me];Le===void 0&&(Le={type:void 0,texture:void 0},re[Me]=Le),(Le.type!==j||Le.texture!==Ne)&&(de!==Me&&(o.activeTexture(Me),de=Me),o.bindTexture(j,Ne||ae[j]),Le.type=j,Le.texture=Ne)}function O(){const j=re[de];j!==void 0&&j.type!==void 0&&(o.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function C(){try{o.compressedTexImage2D(...arguments)}catch(j){Nt("WebGLState:",j)}}function $(){try{o.compressedTexImage3D(...arguments)}catch(j){Nt("WebGLState:",j)}}function he(){try{o.texSubImage2D(...arguments)}catch(j){Nt("WebGLState:",j)}}function me(){try{o.texSubImage3D(...arguments)}catch(j){Nt("WebGLState:",j)}}function ue(){try{o.compressedTexSubImage2D(...arguments)}catch(j){Nt("WebGLState:",j)}}function Ke(){try{o.compressedTexSubImage3D(...arguments)}catch(j){Nt("WebGLState:",j)}}function Ee(){try{o.texStorage2D(...arguments)}catch(j){Nt("WebGLState:",j)}}function He(){try{o.texStorage3D(...arguments)}catch(j){Nt("WebGLState:",j)}}function it(){try{o.texImage2D(...arguments)}catch(j){Nt("WebGLState:",j)}}function ye(){try{o.texImage3D(...arguments)}catch(j){Nt("WebGLState:",j)}}function Re(j){be.equals(j)===!1&&(o.scissor(j.x,j.y,j.z,j.w),be.copy(j))}function je(j){Fe.equals(j)===!1&&(o.viewport(j.x,j.y,j.z,j.w),Fe.copy(j))}function Ye(j,Ne){let Me=h.get(Ne);Me===void 0&&(Me=new WeakMap,h.set(Ne,Me));let Le=Me.get(j);Le===void 0&&(Le=o.getUniformBlockIndex(Ne,j.name),Me.set(j,Le))}function Ae(j,Ne){const Le=h.get(Ne).get(j);f.get(Ne)!==Le&&(o.uniformBlockBinding(Ne,Le,j.__bindingPointIndex),f.set(Ne,Le))}function ct(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),p={},de=null,re={},m={},v=new WeakMap,y=[],w=null,S=!1,x=null,_=null,T=null,A=null,b=null,P=null,D=null,I=new Lt(0,0,0),F=0,E=!1,L=null,k=null,W=null,V=null,J=null,be.set(0,0,o.canvas.width,o.canvas.height),Fe.set(0,0,o.canvas.width,o.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:fe,disable:Se,bindFramebuffer:Ve,drawBuffers:Ie,useProgram:_t,setBlending:Mt,setMaterial:It,setFlipSided:ut,setCullFace:Xt,setLineWidth:G,setPolygonOffset:qt,setScissorTest:vt,activeTexture:wt,bindTexture:qe,unbindTexture:O,compressedTexImage2D:C,compressedTexImage3D:$,texImage2D:it,texImage3D:ye,updateUBOMapping:Ye,uniformBlockBinding:Ae,texStorage2D:Ee,texStorage3D:He,texSubImage2D:he,texSubImage3D:me,compressedTexSubImage2D:ue,compressedTexSubImage3D:Ke,scissor:Re,viewport:je,reset:ct}}function $E(o,e,t,i,s,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ct,p=new WeakMap;let m;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(O,C){return y?new OffscreenCanvas(O,C):Au("canvas")}function S(O,C,$){let he=1;const me=qe(O);if((me.width>$||me.height>$)&&(he=$/Math.max(me.width,me.height)),he<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ue=Math.floor(he*me.width),Ke=Math.floor(he*me.height);m===void 0&&(m=w(ue,Ke));const Ee=C?w(ue,Ke):m;return Ee.width=ue,Ee.height=Ke,Ee.getContext("2d").drawImage(O,0,0,ue,Ke),at("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+ue+"x"+Ke+")."),Ee}else return"data"in O&&at("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),O;return O}function x(O){return O.generateMipmaps}function _(O){o.generateMipmap(O)}function T(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function A(O,C,$,he,me=!1){if(O!==null){if(o[O]!==void 0)return o[O];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ue=C;if(C===o.RED&&($===o.FLOAT&&(ue=o.R32F),$===o.HALF_FLOAT&&(ue=o.R16F),$===o.UNSIGNED_BYTE&&(ue=o.R8)),C===o.RED_INTEGER&&($===o.UNSIGNED_BYTE&&(ue=o.R8UI),$===o.UNSIGNED_SHORT&&(ue=o.R16UI),$===o.UNSIGNED_INT&&(ue=o.R32UI),$===o.BYTE&&(ue=o.R8I),$===o.SHORT&&(ue=o.R16I),$===o.INT&&(ue=o.R32I)),C===o.RG&&($===o.FLOAT&&(ue=o.RG32F),$===o.HALF_FLOAT&&(ue=o.RG16F),$===o.UNSIGNED_BYTE&&(ue=o.RG8)),C===o.RG_INTEGER&&($===o.UNSIGNED_BYTE&&(ue=o.RG8UI),$===o.UNSIGNED_SHORT&&(ue=o.RG16UI),$===o.UNSIGNED_INT&&(ue=o.RG32UI),$===o.BYTE&&(ue=o.RG8I),$===o.SHORT&&(ue=o.RG16I),$===o.INT&&(ue=o.RG32I)),C===o.RGB_INTEGER&&($===o.UNSIGNED_BYTE&&(ue=o.RGB8UI),$===o.UNSIGNED_SHORT&&(ue=o.RGB16UI),$===o.UNSIGNED_INT&&(ue=o.RGB32UI),$===o.BYTE&&(ue=o.RGB8I),$===o.SHORT&&(ue=o.RGB16I),$===o.INT&&(ue=o.RGB32I)),C===o.RGBA_INTEGER&&($===o.UNSIGNED_BYTE&&(ue=o.RGBA8UI),$===o.UNSIGNED_SHORT&&(ue=o.RGBA16UI),$===o.UNSIGNED_INT&&(ue=o.RGBA32UI),$===o.BYTE&&(ue=o.RGBA8I),$===o.SHORT&&(ue=o.RGBA16I),$===o.INT&&(ue=o.RGBA32I)),C===o.RGB&&($===o.UNSIGNED_INT_5_9_9_9_REV&&(ue=o.RGB9_E5),$===o.UNSIGNED_INT_10F_11F_11F_REV&&(ue=o.R11F_G11F_B10F)),C===o.RGBA){const Ke=me?Tu:At.getTransfer(he);$===o.FLOAT&&(ue=o.RGBA32F),$===o.HALF_FLOAT&&(ue=o.RGBA16F),$===o.UNSIGNED_BYTE&&(ue=Ke===Ot?o.SRGB8_ALPHA8:o.RGBA8),$===o.UNSIGNED_SHORT_4_4_4_4&&(ue=o.RGBA4),$===o.UNSIGNED_SHORT_5_5_5_1&&(ue=o.RGB5_A1)}return(ue===o.R16F||ue===o.R32F||ue===o.RG16F||ue===o.RG32F||ue===o.RGBA16F||ue===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function b(O,C){let $;return O?C===null||C===fr||C===hl?$=o.DEPTH24_STENCIL8:C===ar?$=o.DEPTH32F_STENCIL8:C===fl&&($=o.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===fr||C===hl?$=o.DEPTH_COMPONENT24:C===ar?$=o.DEPTH_COMPONENT32F:C===fl&&($=o.DEPTH_COMPONENT16),$}function P(O,C){return x(O)===!0||O.isFramebufferTexture&&O.minFilter!==Rn&&O.minFilter!==zn?Math.log2(Math.max(C.width,C.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?C.mipmaps.length:1}function D(O){const C=O.target;C.removeEventListener("dispose",D),F(C),C.isVideoTexture&&p.delete(C)}function I(O){const C=O.target;C.removeEventListener("dispose",I),L(C)}function F(O){const C=i.get(O);if(C.__webglInit===void 0)return;const $=O.source,he=v.get($);if(he){const me=he[C.__cacheKey];me.usedTimes--,me.usedTimes===0&&E(O),Object.keys(he).length===0&&v.delete($)}i.remove(O)}function E(O){const C=i.get(O);o.deleteTexture(C.__webglTexture);const $=O.source,he=v.get($);delete he[C.__cacheKey],c.memory.textures--}function L(O){const C=i.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),i.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(C.__webglFramebuffer[he]))for(let me=0;me<C.__webglFramebuffer[he].length;me++)o.deleteFramebuffer(C.__webglFramebuffer[he][me]);else o.deleteFramebuffer(C.__webglFramebuffer[he]);C.__webglDepthbuffer&&o.deleteRenderbuffer(C.__webglDepthbuffer[he])}else{if(Array.isArray(C.__webglFramebuffer))for(let he=0;he<C.__webglFramebuffer.length;he++)o.deleteFramebuffer(C.__webglFramebuffer[he]);else o.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&o.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&o.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let he=0;he<C.__webglColorRenderbuffer.length;he++)C.__webglColorRenderbuffer[he]&&o.deleteRenderbuffer(C.__webglColorRenderbuffer[he]);C.__webglDepthRenderbuffer&&o.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const $=O.textures;for(let he=0,me=$.length;he<me;he++){const ue=i.get($[he]);ue.__webglTexture&&(o.deleteTexture(ue.__webglTexture),c.memory.textures--),i.remove($[he])}i.remove(O)}let k=0;function W(){k=0}function V(){const O=k;return O>=s.maxTextures&&at("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+s.maxTextures),k+=1,O}function J(O){const C=[];return C.push(O.wrapS),C.push(O.wrapT),C.push(O.wrapR||0),C.push(O.magFilter),C.push(O.minFilter),C.push(O.anisotropy),C.push(O.internalFormat),C.push(O.format),C.push(O.type),C.push(O.generateMipmaps),C.push(O.premultiplyAlpha),C.push(O.flipY),C.push(O.unpackAlignment),C.push(O.colorSpace),C.join()}function ee(O,C){const $=i.get(O);if(O.isVideoTexture&&vt(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&$.__version!==O.version){const he=O.image;if(he===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{ae($,O,C);return}}else O.isExternalTexture&&($.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(o.TEXTURE_2D,$.__webglTexture,o.TEXTURE0+C)}function Q(O,C){const $=i.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&$.__version!==O.version){ae($,O,C);return}else O.isExternalTexture&&($.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(o.TEXTURE_2D_ARRAY,$.__webglTexture,o.TEXTURE0+C)}function Y(O,C){const $=i.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&$.__version!==O.version){ae($,O,C);return}t.bindTexture(o.TEXTURE_3D,$.__webglTexture,o.TEXTURE0+C)}function q(O,C){const $=i.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&$.__version!==O.version){fe($,O,C);return}t.bindTexture(o.TEXTURE_CUBE_MAP,$.__webglTexture,o.TEXTURE0+C)}const de={[Dh]:o.REPEAT,[Pr]:o.CLAMP_TO_EDGE,[Ih]:o.MIRRORED_REPEAT},re={[Rn]:o.NEAREST,[vy]:o.NEAREST_MIPMAP_NEAREST,[zc]:o.NEAREST_MIPMAP_LINEAR,[zn]:o.LINEAR,[Uf]:o.LINEAR_MIPMAP_NEAREST,[Zs]:o.LINEAR_MIPMAP_LINEAR},B={[Sy]:o.NEVER,[by]:o.ALWAYS,[My]:o.LESS,[Hp]:o.LEQUAL,[wy]:o.EQUAL,[Gp]:o.GEQUAL,[Ey]:o.GREATER,[Ty]:o.NOTEQUAL};function oe(O,C){if(C.type===ar&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===zn||C.magFilter===Uf||C.magFilter===zc||C.magFilter===Zs||C.minFilter===zn||C.minFilter===Uf||C.minFilter===zc||C.minFilter===Zs)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,de[C.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,de[C.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,de[C.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,re[C.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,re[C.minFilter]),C.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,B[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Rn||C.minFilter!==zc&&C.minFilter!==Zs||C.type===ar&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||i.get(C).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");o.texParameterf(O,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,s.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy}}}function be(O,C){let $=!1;O.__webglInit===void 0&&(O.__webglInit=!0,C.addEventListener("dispose",D));const he=C.source;let me=v.get(he);me===void 0&&(me={},v.set(he,me));const ue=J(C);if(ue!==O.__cacheKey){me[ue]===void 0&&(me[ue]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,$=!0),me[ue].usedTimes++;const Ke=me[O.__cacheKey];Ke!==void 0&&(me[O.__cacheKey].usedTimes--,Ke.usedTimes===0&&E(C)),O.__cacheKey=ue,O.__webglTexture=me[ue].texture}return $}function Fe(O,C,$){return Math.floor(Math.floor(O/$)/C)}function Be(O,C,$,he){const ue=O.updateRanges;if(ue.length===0)t.texSubImage2D(o.TEXTURE_2D,0,0,0,C.width,C.height,$,he,C.data);else{ue.sort((ye,Re)=>ye.start-Re.start);let Ke=0;for(let ye=1;ye<ue.length;ye++){const Re=ue[Ke],je=ue[ye],Ye=Re.start+Re.count,Ae=Fe(je.start,C.width,4),ct=Fe(Re.start,C.width,4);je.start<=Ye+1&&Ae===ct&&Fe(je.start+je.count-1,C.width,4)===Ae?Re.count=Math.max(Re.count,je.start+je.count-Re.start):(++Ke,ue[Ke]=je)}ue.length=Ke+1;const Ee=o.getParameter(o.UNPACK_ROW_LENGTH),He=o.getParameter(o.UNPACK_SKIP_PIXELS),it=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,C.width);for(let ye=0,Re=ue.length;ye<Re;ye++){const je=ue[ye],Ye=Math.floor(je.start/4),Ae=Math.ceil(je.count/4),ct=Ye%C.width,j=Math.floor(Ye/C.width),Ne=Ae,Me=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ct),o.pixelStorei(o.UNPACK_SKIP_ROWS,j),t.texSubImage2D(o.TEXTURE_2D,0,ct,j,Ne,Me,$,he,C.data)}O.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ee),o.pixelStorei(o.UNPACK_SKIP_PIXELS,He),o.pixelStorei(o.UNPACK_SKIP_ROWS,it)}}function ae(O,C,$){let he=o.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(he=o.TEXTURE_2D_ARRAY),C.isData3DTexture&&(he=o.TEXTURE_3D);const me=be(O,C),ue=C.source;t.bindTexture(he,O.__webglTexture,o.TEXTURE0+$);const Ke=i.get(ue);if(ue.version!==Ke.__version||me===!0){t.activeTexture(o.TEXTURE0+$);const Ee=At.getPrimaries(At.workingColorSpace),He=C.colorSpace===us?null:At.getPrimaries(C.colorSpace),it=C.colorSpace===us||Ee===He?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,C.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,C.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let ye=S(C.image,!1,s.maxTextureSize);ye=wt(C,ye);const Re=a.convert(C.format,C.colorSpace),je=a.convert(C.type);let Ye=A(C.internalFormat,Re,je,C.colorSpace,C.isVideoTexture);oe(he,C);let Ae;const ct=C.mipmaps,j=C.isVideoTexture!==!0,Ne=Ke.__version===void 0||me===!0,Me=ue.dataReady,Le=P(C,ye);if(C.isDepthTexture)Ye=b(C.format===Qs,C.type),Ne&&(j?t.texStorage2D(o.TEXTURE_2D,1,Ye,ye.width,ye.height):t.texImage2D(o.TEXTURE_2D,0,Ye,ye.width,ye.height,0,Re,je,null));else if(C.isDataTexture)if(ct.length>0){j&&Ne&&t.texStorage2D(o.TEXTURE_2D,Le,Ye,ct[0].width,ct[0].height);for(let ve=0,pe=ct.length;ve<pe;ve++)Ae=ct[ve],j?Me&&t.texSubImage2D(o.TEXTURE_2D,ve,0,0,Ae.width,Ae.height,Re,je,Ae.data):t.texImage2D(o.TEXTURE_2D,ve,Ye,Ae.width,Ae.height,0,Re,je,Ae.data);C.generateMipmaps=!1}else j?(Ne&&t.texStorage2D(o.TEXTURE_2D,Le,Ye,ye.width,ye.height),Me&&Be(C,ye,Re,je)):t.texImage2D(o.TEXTURE_2D,0,Ye,ye.width,ye.height,0,Re,je,ye.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){j&&Ne&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Le,Ye,ct[0].width,ct[0].height,ye.depth);for(let ve=0,pe=ct.length;ve<pe;ve++)if(Ae=ct[ve],C.format!==$i)if(Re!==null)if(j){if(Me)if(C.layerUpdates.size>0){const Ce=M1(Ae.width,Ae.height,C.format,C.type);for(const rt of C.layerUpdates){const Ft=Ae.data.subarray(rt*Ce/Ae.data.BYTES_PER_ELEMENT,(rt+1)*Ce/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ve,0,0,rt,Ae.width,Ae.height,1,Re,Ft)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ve,0,0,0,Ae.width,Ae.height,ye.depth,Re,Ae.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ve,Ye,Ae.width,Ae.height,ye.depth,0,Ae.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?Me&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,ve,0,0,0,Ae.width,Ae.height,ye.depth,Re,je,Ae.data):t.texImage3D(o.TEXTURE_2D_ARRAY,ve,Ye,Ae.width,Ae.height,ye.depth,0,Re,je,Ae.data)}else{j&&Ne&&t.texStorage2D(o.TEXTURE_2D,Le,Ye,ct[0].width,ct[0].height);for(let ve=0,pe=ct.length;ve<pe;ve++)Ae=ct[ve],C.format!==$i?Re!==null?j?Me&&t.compressedTexSubImage2D(o.TEXTURE_2D,ve,0,0,Ae.width,Ae.height,Re,Ae.data):t.compressedTexImage2D(o.TEXTURE_2D,ve,Ye,Ae.width,Ae.height,0,Ae.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?Me&&t.texSubImage2D(o.TEXTURE_2D,ve,0,0,Ae.width,Ae.height,Re,je,Ae.data):t.texImage2D(o.TEXTURE_2D,ve,Ye,Ae.width,Ae.height,0,Re,je,Ae.data)}else if(C.isDataArrayTexture)if(j){if(Ne&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Le,Ye,ye.width,ye.height,ye.depth),Me)if(C.layerUpdates.size>0){const ve=M1(ye.width,ye.height,C.format,C.type);for(const pe of C.layerUpdates){const Ce=ye.data.subarray(pe*ve/ye.data.BYTES_PER_ELEMENT,(pe+1)*ve/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,pe,ye.width,ye.height,1,Re,je,Ce)}C.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Re,je,ye.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,Ye,ye.width,ye.height,ye.depth,0,Re,je,ye.data);else if(C.isData3DTexture)j?(Ne&&t.texStorage3D(o.TEXTURE_3D,Le,Ye,ye.width,ye.height,ye.depth),Me&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Re,je,ye.data)):t.texImage3D(o.TEXTURE_3D,0,Ye,ye.width,ye.height,ye.depth,0,Re,je,ye.data);else if(C.isFramebufferTexture){if(Ne)if(j)t.texStorage2D(o.TEXTURE_2D,Le,Ye,ye.width,ye.height);else{let ve=ye.width,pe=ye.height;for(let Ce=0;Ce<Le;Ce++)t.texImage2D(o.TEXTURE_2D,Ce,Ye,ve,pe,0,Re,je,null),ve>>=1,pe>>=1}}else if(ct.length>0){if(j&&Ne){const ve=qe(ct[0]);t.texStorage2D(o.TEXTURE_2D,Le,Ye,ve.width,ve.height)}for(let ve=0,pe=ct.length;ve<pe;ve++)Ae=ct[ve],j?Me&&t.texSubImage2D(o.TEXTURE_2D,ve,0,0,Re,je,Ae):t.texImage2D(o.TEXTURE_2D,ve,Ye,Re,je,Ae);C.generateMipmaps=!1}else if(j){if(Ne){const ve=qe(ye);t.texStorage2D(o.TEXTURE_2D,Le,Ye,ve.width,ve.height)}Me&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Re,je,ye)}else t.texImage2D(o.TEXTURE_2D,0,Ye,Re,je,ye);x(C)&&_(he),Ke.__version=ue.version,C.onUpdate&&C.onUpdate(C)}O.__version=C.version}function fe(O,C,$){if(C.image.length!==6)return;const he=be(O,C),me=C.source;t.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+$);const ue=i.get(me);if(me.version!==ue.__version||he===!0){t.activeTexture(o.TEXTURE0+$);const Ke=At.getPrimaries(At.workingColorSpace),Ee=C.colorSpace===us?null:At.getPrimaries(C.colorSpace),He=C.colorSpace===us||Ke===Ee?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,C.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,C.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const it=C.isCompressedTexture||C.image[0].isCompressedTexture,ye=C.image[0]&&C.image[0].isDataTexture,Re=[];for(let pe=0;pe<6;pe++)!it&&!ye?Re[pe]=S(C.image[pe],!0,s.maxCubemapSize):Re[pe]=ye?C.image[pe].image:C.image[pe],Re[pe]=wt(C,Re[pe]);const je=Re[0],Ye=a.convert(C.format,C.colorSpace),Ae=a.convert(C.type),ct=A(C.internalFormat,Ye,Ae,C.colorSpace),j=C.isVideoTexture!==!0,Ne=ue.__version===void 0||he===!0,Me=me.dataReady;let Le=P(C,je);oe(o.TEXTURE_CUBE_MAP,C);let ve;if(it){j&&Ne&&t.texStorage2D(o.TEXTURE_CUBE_MAP,Le,ct,je.width,je.height);for(let pe=0;pe<6;pe++){ve=Re[pe].mipmaps;for(let Ce=0;Ce<ve.length;Ce++){const rt=ve[Ce];C.format!==$i?Ye!==null?j?Me&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,0,0,rt.width,rt.height,Ye,rt.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,ct,rt.width,rt.height,0,rt.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?Me&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,0,0,rt.width,rt.height,Ye,Ae,rt.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,ct,rt.width,rt.height,0,Ye,Ae,rt.data)}}}else{if(ve=C.mipmaps,j&&Ne){ve.length>0&&Le++;const pe=qe(Re[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,Le,ct,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(ye){j?Me&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Re[pe].width,Re[pe].height,Ye,Ae,Re[pe].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ct,Re[pe].width,Re[pe].height,0,Ye,Ae,Re[pe].data);for(let Ce=0;Ce<ve.length;Ce++){const Ft=ve[Ce].image[pe].image;j?Me&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,0,0,Ft.width,Ft.height,Ye,Ae,Ft.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,ct,Ft.width,Ft.height,0,Ye,Ae,Ft.data)}}else{j?Me&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ye,Ae,Re[pe]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ct,Ye,Ae,Re[pe]);for(let Ce=0;Ce<ve.length;Ce++){const rt=ve[Ce];j?Me&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,0,0,Ye,Ae,rt.image[pe]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,ct,Ye,Ae,rt.image[pe])}}}x(C)&&_(o.TEXTURE_CUBE_MAP),ue.__version=me.version,C.onUpdate&&C.onUpdate(C)}O.__version=C.version}function Se(O,C,$,he,me,ue){const Ke=a.convert($.format,$.colorSpace),Ee=a.convert($.type),He=A($.internalFormat,Ke,Ee,$.colorSpace),it=i.get(C),ye=i.get($);if(ye.__renderTarget=C,!it.__hasExternalTextures){const Re=Math.max(1,C.width>>ue),je=Math.max(1,C.height>>ue);me===o.TEXTURE_3D||me===o.TEXTURE_2D_ARRAY?t.texImage3D(me,ue,He,Re,je,C.depth,0,Ke,Ee,null):t.texImage2D(me,ue,He,Re,je,0,Ke,Ee,null)}t.bindFramebuffer(o.FRAMEBUFFER,O),qt(C)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,he,me,ye.__webglTexture,0,G(C)):(me===o.TEXTURE_2D||me>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,he,me,ye.__webglTexture,ue),t.bindFramebuffer(o.FRAMEBUFFER,null)}function Ve(O,C,$){if(o.bindRenderbuffer(o.RENDERBUFFER,O),C.depthBuffer){const he=C.depthTexture,me=he&&he.isDepthTexture?he.type:null,ue=b(C.stencilBuffer,me),Ke=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;qt(C)?u.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(C),ue,C.width,C.height):$?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(C),ue,C.width,C.height):o.renderbufferStorage(o.RENDERBUFFER,ue,C.width,C.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ke,o.RENDERBUFFER,O)}else{const he=C.textures;for(let me=0;me<he.length;me++){const ue=he[me],Ke=a.convert(ue.format,ue.colorSpace),Ee=a.convert(ue.type),He=A(ue.internalFormat,Ke,Ee,ue.colorSpace);qt(C)?u.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(C),He,C.width,C.height):$?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(C),He,C.width,C.height):o.renderbufferStorage(o.RENDERBUFFER,He,C.width,C.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ie(O,C,$){const he=C.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(o.FRAMEBUFFER,O),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=i.get(C.depthTexture);if(me.__renderTarget=C,(!me.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),he){if(me.__webglInit===void 0&&(me.__webglInit=!0,C.depthTexture.addEventListener("dispose",D)),me.__webglTexture===void 0){me.__webglTexture=o.createTexture(),t.bindTexture(o.TEXTURE_CUBE_MAP,me.__webglTexture),oe(o.TEXTURE_CUBE_MAP,C.depthTexture);const it=a.convert(C.depthTexture.format),ye=a.convert(C.depthTexture.type);let Re;C.depthTexture.format===Ir?Re=o.DEPTH_COMPONENT24:C.depthTexture.format===Qs&&(Re=o.DEPTH24_STENCIL8);for(let je=0;je<6;je++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+je,0,Re,C.width,C.height,0,it,ye,null)}}else ee(C.depthTexture,0);const ue=me.__webglTexture,Ke=G(C),Ee=he?o.TEXTURE_CUBE_MAP_POSITIVE_X+$:o.TEXTURE_2D,He=C.depthTexture.format===Qs?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(C.depthTexture.format===Ir)qt(C)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,He,Ee,ue,0,Ke):o.framebufferTexture2D(o.FRAMEBUFFER,He,Ee,ue,0);else if(C.depthTexture.format===Qs)qt(C)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,He,Ee,ue,0,Ke):o.framebufferTexture2D(o.FRAMEBUFFER,He,Ee,ue,0);else throw new Error("Unknown depthTexture format")}function _t(O){const C=i.get(O),$=O.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==O.depthTexture){const he=O.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),he){const me=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,he.removeEventListener("dispose",me)};he.addEventListener("dispose",me),C.__depthDisposeCallback=me}C.__boundDepthTexture=he}if(O.depthTexture&&!C.__autoAllocateDepthBuffer)if($)for(let he=0;he<6;he++)Ie(C.__webglFramebuffer[he],O,he);else{const he=O.texture.mipmaps;he&&he.length>0?Ie(C.__webglFramebuffer[0],O,0):Ie(C.__webglFramebuffer,O,0)}else if($){C.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(o.FRAMEBUFFER,C.__webglFramebuffer[he]),C.__webglDepthbuffer[he]===void 0)C.__webglDepthbuffer[he]=o.createRenderbuffer(),Ve(C.__webglDepthbuffer[he],O,!1);else{const me=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ue=C.__webglDepthbuffer[he];o.bindRenderbuffer(o.RENDERBUFFER,ue),o.framebufferRenderbuffer(o.FRAMEBUFFER,me,o.RENDERBUFFER,ue)}}else{const he=O.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(o.FRAMEBUFFER,C.__webglFramebuffer[0]):t.bindFramebuffer(o.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=o.createRenderbuffer(),Ve(C.__webglDepthbuffer,O,!1);else{const me=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ue=C.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ue),o.framebufferRenderbuffer(o.FRAMEBUFFER,me,o.RENDERBUFFER,ue)}}t.bindFramebuffer(o.FRAMEBUFFER,null)}function on(O,C,$){const he=i.get(O);C!==void 0&&Se(he.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),$!==void 0&&_t(O)}function mt(O){const C=O.texture,$=i.get(O),he=i.get(C);O.addEventListener("dispose",I);const me=O.textures,ue=O.isWebGLCubeRenderTarget===!0,Ke=me.length>1;if(Ke||(he.__webglTexture===void 0&&(he.__webglTexture=o.createTexture()),he.__version=C.version,c.memory.textures++),ue){$.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(C.mipmaps&&C.mipmaps.length>0){$.__webglFramebuffer[Ee]=[];for(let He=0;He<C.mipmaps.length;He++)$.__webglFramebuffer[Ee][He]=o.createFramebuffer()}else $.__webglFramebuffer[Ee]=o.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ee=0;Ee<C.mipmaps.length;Ee++)$.__webglFramebuffer[Ee]=o.createFramebuffer()}else $.__webglFramebuffer=o.createFramebuffer();if(Ke)for(let Ee=0,He=me.length;Ee<He;Ee++){const it=i.get(me[Ee]);it.__webglTexture===void 0&&(it.__webglTexture=o.createTexture(),c.memory.textures++)}if(O.samples>0&&qt(O)===!1){$.__webglMultisampledFramebuffer=o.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ee=0;Ee<me.length;Ee++){const He=me[Ee];$.__webglColorRenderbuffer[Ee]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,$.__webglColorRenderbuffer[Ee]);const it=a.convert(He.format,He.colorSpace),ye=a.convert(He.type),Re=A(He.internalFormat,it,ye,He.colorSpace,O.isXRRenderTarget===!0),je=G(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,je,Re,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ee,o.RENDERBUFFER,$.__webglColorRenderbuffer[Ee])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&($.__webglDepthRenderbuffer=o.createRenderbuffer(),Ve($.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ue){t.bindTexture(o.TEXTURE_CUBE_MAP,he.__webglTexture),oe(o.TEXTURE_CUBE_MAP,C);for(let Ee=0;Ee<6;Ee++)if(C.mipmaps&&C.mipmaps.length>0)for(let He=0;He<C.mipmaps.length;He++)Se($.__webglFramebuffer[Ee][He],O,C,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,He);else Se($.__webglFramebuffer[Ee],O,C,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);x(C)&&_(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ke){for(let Ee=0,He=me.length;Ee<He;Ee++){const it=me[Ee],ye=i.get(it);let Re=o.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Re=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(Re,ye.__webglTexture),oe(Re,it),Se($.__webglFramebuffer,O,it,o.COLOR_ATTACHMENT0+Ee,Re,0),x(it)&&_(Re)}t.unbindTexture()}else{let Ee=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ee=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(Ee,he.__webglTexture),oe(Ee,C),C.mipmaps&&C.mipmaps.length>0)for(let He=0;He<C.mipmaps.length;He++)Se($.__webglFramebuffer[He],O,C,o.COLOR_ATTACHMENT0,Ee,He);else Se($.__webglFramebuffer,O,C,o.COLOR_ATTACHMENT0,Ee,0);x(C)&&_(Ee),t.unbindTexture()}O.depthBuffer&&_t(O)}function Mt(O){const C=O.textures;for(let $=0,he=C.length;$<he;$++){const me=C[$];if(x(me)){const ue=T(O),Ke=i.get(me).__webglTexture;t.bindTexture(ue,Ke),_(ue),t.unbindTexture()}}}const It=[],ut=[];function Xt(O){if(O.samples>0){if(qt(O)===!1){const C=O.textures,$=O.width,he=O.height;let me=o.COLOR_BUFFER_BIT;const ue=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ke=i.get(O),Ee=C.length>1;if(Ee)for(let it=0;it<C.length;it++)t.bindFramebuffer(o.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+it,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,Ke.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+it,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);const He=O.texture.mipmaps;He&&He.length>0?t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let it=0;it<C.length;it++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(me|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(me|=o.STENCIL_BUFFER_BIT)),Ee){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ke.__webglColorRenderbuffer[it]);const ye=i.get(C[it]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ye,0)}o.blitFramebuffer(0,0,$,he,0,0,$,he,me,o.NEAREST),f===!0&&(It.length=0,ut.length=0,It.push(o.COLOR_ATTACHMENT0+it),O.depthBuffer&&O.resolveDepthBuffer===!1&&(It.push(ue),ut.push(ue),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ut)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,It))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ee)for(let it=0;it<C.length;it++){t.bindFramebuffer(o.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+it,o.RENDERBUFFER,Ke.__webglColorRenderbuffer[it]);const ye=i.get(C[it]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,Ke.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+it,o.TEXTURE_2D,ye,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&f){const C=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[C])}}}function G(O){return Math.min(s.maxSamples,O.samples)}function qt(O){const C=i.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function vt(O){const C=c.render.frame;p.get(O)!==C&&(p.set(O,C),O.update())}function wt(O,C){const $=O.colorSpace,he=O.format,me=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||$!==ia&&$!==us&&(At.getTransfer($)===Ot?(he!==$i||me!==Di)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",$)),C}function qe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(h.width=O.naturalWidth||O.width,h.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(h.width=O.displayWidth,h.height=O.displayHeight):(h.width=O.width,h.height=O.height),h}this.allocateTextureUnit=V,this.resetTextureUnits=W,this.setTexture2D=ee,this.setTexture2DArray=Q,this.setTexture3D=Y,this.setTextureCube=q,this.rebindTextures=on,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=qt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function KE(o,e){function t(i,s=us){let a;const c=At.getTransfer(s);if(i===Di)return o.UNSIGNED_BYTE;if(i===Op)return o.UNSIGNED_SHORT_4_4_4_4;if(i===kp)return o.UNSIGNED_SHORT_5_5_5_1;if(i===A_)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===C_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(i===T_)return o.BYTE;if(i===b_)return o.SHORT;if(i===fl)return o.UNSIGNED_SHORT;if(i===Fp)return o.INT;if(i===fr)return o.UNSIGNED_INT;if(i===ar)return o.FLOAT;if(i===Dr)return o.HALF_FLOAT;if(i===R_)return o.ALPHA;if(i===P_)return o.RGB;if(i===$i)return o.RGBA;if(i===Ir)return o.DEPTH_COMPONENT;if(i===Qs)return o.DEPTH_STENCIL;if(i===N_)return o.RED;if(i===zp)return o.RED_INTEGER;if(i===na)return o.RG;if(i===Bp)return o.RG_INTEGER;if(i===Vp)return o.RGBA_INTEGER;if(i===mu||i===gu||i===_u||i===vu)if(c===Ot)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===mu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===gu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_u)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===mu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===gu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_u)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Uh||i===Fh||i===Oh||i===kh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Uh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Oh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===kh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zh||i===Bh||i===Vh||i===Hh||i===Gh||i===Wh||i===jh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===zh||i===Bh)return c===Ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Vh)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Hh)return a.COMPRESSED_R11_EAC;if(i===Gh)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Wh)return a.COMPRESSED_RG11_EAC;if(i===jh)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Xh||i===qh||i===Yh||i===$h||i===Kh||i===Zh||i===Qh||i===Jh||i===ep||i===tp||i===np||i===ip||i===rp||i===sp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Xh)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qh)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yh)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$h)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Kh)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zh)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qh)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Jh)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ep)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===tp)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===np)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ip)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===rp)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sp)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===op||i===ap||i===lp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===op)return c===Ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ap)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cp||i===up||i===dp||i===fp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===cp)return a.COMPRESSED_RED_RGTC1_EXT;if(i===up)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===dp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hl?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:t}}const ZE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class JE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new X_(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new hr({vertexShader:ZE,fragmentShader:QE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ki(new Wu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eT extends da{constructor(e,t){super();const i=this;let s=null,a=1,c=null,u="local-floor",f=1,h=null,p=null,m=null,v=null,y=null,w=null;const S=typeof XRWebGLBinding<"u",x=new JE,_={},T=t.getContextAttributes();let A=null,b=null;const P=[],D=[],I=new Ct;let F=null;const E=new gi;E.viewport=new cn;const L=new gi;L.viewport=new cn;const k=[E,L],W=new u3;let V=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let fe=P[ae];return fe===void 0&&(fe=new ih,P[ae]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ae){let fe=P[ae];return fe===void 0&&(fe=new ih,P[ae]=fe),fe.getGripSpace()},this.getHand=function(ae){let fe=P[ae];return fe===void 0&&(fe=new ih,P[ae]=fe),fe.getHandSpace()};function ee(ae){const fe=D.indexOf(ae.inputSource);if(fe===-1)return;const Se=P[fe];Se!==void 0&&(Se.update(ae.inputSource,ae.frame,h||c),Se.dispatchEvent({type:ae.type,data:ae.inputSource}))}function Q(){s.removeEventListener("select",ee),s.removeEventListener("selectstart",ee),s.removeEventListener("selectend",ee),s.removeEventListener("squeeze",ee),s.removeEventListener("squeezestart",ee),s.removeEventListener("squeezeend",ee),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",Y);for(let ae=0;ae<P.length;ae++){const fe=D[ae];fe!==null&&(D[ae]=null,P[ae].disconnect(fe))}V=null,J=null,x.reset();for(const ae in _)delete _[ae];e.setRenderTarget(A),y=null,v=null,m=null,s=null,b=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(F),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){a=ae,i.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){u=ae,i.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(ae){h=ae},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return m===null&&S&&(m=new XRWebGLBinding(s,t)),m},this.getFrame=function(){return w},this.getSession=function(){return s},this.setSession=async function(ae){if(s=ae,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",ee),s.addEventListener("selectstart",ee),s.addEventListener("selectend",ee),s.addEventListener("squeeze",ee),s.addEventListener("squeezestart",ee),s.addEventListener("squeezeend",ee),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",Y),T.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(I),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Ve=null,Ie=null;T.depth&&(Ie=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=T.stencil?Qs:Ir,Ve=T.stencil?hl:fr);const _t={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:a};m=this.getBinding(),v=m.createProjectionLayer(_t),s.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),b=new dr(v.textureWidth,v.textureHeight,{format:$i,type:Di,depthTexture:new gl(v.textureWidth,v.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Se={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:a};y=new XRWebGLLayer(s,t,Se),s.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),b=new dr(y.framebufferWidth,y.framebufferHeight,{format:$i,type:Di,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(f),h=null,c=await s.requestReferenceSpace(u),Be.setContext(s),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(ae){for(let fe=0;fe<ae.removed.length;fe++){const Se=ae.removed[fe],Ve=D.indexOf(Se);Ve>=0&&(D[Ve]=null,P[Ve].disconnect(Se))}for(let fe=0;fe<ae.added.length;fe++){const Se=ae.added[fe];let Ve=D.indexOf(Se);if(Ve===-1){for(let _t=0;_t<P.length;_t++)if(_t>=D.length){D.push(Se),Ve=_t;break}else if(D[_t]===null){D[_t]=Se,Ve=_t;break}if(Ve===-1)break}const Ie=P[Ve];Ie&&Ie.connect(Se)}}const q=new Z,de=new Z;function re(ae,fe,Se){q.setFromMatrixPosition(fe.matrixWorld),de.setFromMatrixPosition(Se.matrixWorld);const Ve=q.distanceTo(de),Ie=fe.projectionMatrix.elements,_t=Se.projectionMatrix.elements,on=Ie[14]/(Ie[10]-1),mt=Ie[14]/(Ie[10]+1),Mt=(Ie[9]+1)/Ie[5],It=(Ie[9]-1)/Ie[5],ut=(Ie[8]-1)/Ie[0],Xt=(_t[8]+1)/_t[0],G=on*ut,qt=on*Xt,vt=Ve/(-ut+Xt),wt=vt*-ut;if(fe.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(wt),ae.translateZ(vt),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),Ie[10]===-1)ae.projectionMatrix.copy(fe.projectionMatrix),ae.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const qe=on+vt,O=mt+vt,C=G-wt,$=qt+(Ve-wt),he=Mt*mt/O*qe,me=It*mt/O*qe;ae.projectionMatrix.makePerspective(C,$,he,me,qe,O),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function B(ae,fe){fe===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(fe.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(s===null)return;let fe=ae.near,Se=ae.far;x.texture!==null&&(x.depthNear>0&&(fe=x.depthNear),x.depthFar>0&&(Se=x.depthFar)),W.near=L.near=E.near=fe,W.far=L.far=E.far=Se,(V!==W.near||J!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),V=W.near,J=W.far),W.layers.mask=ae.layers.mask|6,E.layers.mask=W.layers.mask&3,L.layers.mask=W.layers.mask&5;const Ve=ae.parent,Ie=W.cameras;B(W,Ve);for(let _t=0;_t<Ie.length;_t++)B(Ie[_t],Ve);Ie.length===2?re(W,E,L):W.projectionMatrix.copy(E.projectionMatrix),oe(ae,W,Ve)};function oe(ae,fe,Se){Se===null?ae.matrix.copy(fe.matrixWorld):(ae.matrix.copy(Se.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(fe.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(fe.projectionMatrix),ae.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=hp*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(v===null&&y===null))return f},this.setFoveation=function(ae){f=ae,v!==null&&(v.fixedFoveation=ae),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ae)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(W)},this.getCameraTexture=function(ae){return _[ae]};let be=null;function Fe(ae,fe){if(p=fe.getViewerPose(h||c),w=fe,p!==null){const Se=p.views;y!==null&&(e.setRenderTargetFramebuffer(b,y.framebuffer),e.setRenderTarget(b));let Ve=!1;Se.length!==W.cameras.length&&(W.cameras.length=0,Ve=!0);for(let mt=0;mt<Se.length;mt++){const Mt=Se[mt];let It=null;if(y!==null)It=y.getViewport(Mt);else{const Xt=m.getViewSubImage(v,Mt);It=Xt.viewport,mt===0&&(e.setRenderTargetTextures(b,Xt.colorTexture,Xt.depthStencilTexture),e.setRenderTarget(b))}let ut=k[mt];ut===void 0&&(ut=new gi,ut.layers.enable(mt),ut.viewport=new cn,k[mt]=ut),ut.matrix.fromArray(Mt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(Mt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(It.x,It.y,It.width,It.height),mt===0&&(W.matrix.copy(ut.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Ve===!0&&W.cameras.push(ut)}const Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){m=i.getBinding();const mt=m.getDepthInformation(Se[0]);mt&&mt.isValid&&mt.texture&&x.init(mt,s.renderState)}if(Ie&&Ie.includes("camera-access")&&S){e.state.unbindTexture(),m=i.getBinding();for(let mt=0;mt<Se.length;mt++){const Mt=Se[mt].camera;if(Mt){let It=_[Mt];It||(It=new X_,_[Mt]=It);const ut=m.getCameraImage(Mt);It.sourceTexture=ut}}}}for(let Se=0;Se<P.length;Se++){const Ve=D[Se],Ie=P[Se];Ve!==null&&Ie!==void 0&&Ie.update(Ve,fe,h||c)}be&&be(ae,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),w=null}const Be=new $_;Be.setAnimationLoop(Fe),this.setAnimationLoop=function(ae){be=ae},this.dispose=function(){}}}const Ws=new Ur,tT=new sn;function nT(o,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function i(x,_){_.color.getRGB(x.fogColor.value,z_(o)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function s(x,_,T,A,b){_.isMeshBasicMaterial||_.isMeshLambertMaterial?a(x,_):_.isMeshToonMaterial?(a(x,_),m(x,_)):_.isMeshPhongMaterial?(a(x,_),p(x,_)):_.isMeshStandardMaterial?(a(x,_),v(x,_),_.isMeshPhysicalMaterial&&y(x,_,b)):_.isMeshMatcapMaterial?(a(x,_),w(x,_)):_.isMeshDepthMaterial?a(x,_):_.isMeshDistanceMaterial?(a(x,_),S(x,_)):_.isMeshNormalMaterial?a(x,_):_.isLineBasicMaterial?(c(x,_),_.isLineDashedMaterial&&u(x,_)):_.isPointsMaterial?f(x,_,T,A):_.isSpriteMaterial?h(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function a(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===ni&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===ni&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const T=e.get(_),A=T.envMap,b=T.envMapRotation;A&&(x.envMap.value=A,Ws.copy(b),Ws.x*=-1,Ws.y*=-1,Ws.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ws.y*=-1,Ws.z*=-1),x.envMapRotation.value.setFromMatrix4(tT.makeRotationFromEuler(Ws)),x.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}function c(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}function u(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function f(x,_,T,A){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*T,x.scale.value=A*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function h(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function p(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function m(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function v(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function y(x,_,T){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===ni&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=T.texture,x.transmissionSamplerSize.value.set(T.width,T.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}function w(x,_){_.matcap&&(x.matcap.value=_.matcap)}function S(x,_){const T=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(T.matrixWorld),x.nearDistance.value=T.shadow.camera.near,x.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function iT(o,e,t,i){let s={},a={},c=[];const u=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function f(T,A){const b=A.program;i.uniformBlockBinding(T,b)}function h(T,A){let b=s[T.id];b===void 0&&(w(T),b=p(T),s[T.id]=b,T.addEventListener("dispose",x));const P=A.program;i.updateUBOMapping(T,P);const D=e.render.frame;a[T.id]!==D&&(v(T),a[T.id]=D)}function p(T){const A=m();T.__bindingPointIndex=A;const b=o.createBuffer(),P=T.__size,D=T.usage;return o.bindBuffer(o.UNIFORM_BUFFER,b),o.bufferData(o.UNIFORM_BUFFER,P,D),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,A,b),b}function m(){for(let T=0;T<u;T++)if(c.indexOf(T)===-1)return c.push(T),T;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(T){const A=s[T.id],b=T.uniforms,P=T.__cache;o.bindBuffer(o.UNIFORM_BUFFER,A);for(let D=0,I=b.length;D<I;D++){const F=Array.isArray(b[D])?b[D]:[b[D]];for(let E=0,L=F.length;E<L;E++){const k=F[E];if(y(k,D,E,P)===!0){const W=k.__offset,V=Array.isArray(k.value)?k.value:[k.value];let J=0;for(let ee=0;ee<V.length;ee++){const Q=V[ee],Y=S(Q);typeof Q=="number"||typeof Q=="boolean"?(k.__data[0]=Q,o.bufferSubData(o.UNIFORM_BUFFER,W+J,k.__data)):Q.isMatrix3?(k.__data[0]=Q.elements[0],k.__data[1]=Q.elements[1],k.__data[2]=Q.elements[2],k.__data[3]=0,k.__data[4]=Q.elements[3],k.__data[5]=Q.elements[4],k.__data[6]=Q.elements[5],k.__data[7]=0,k.__data[8]=Q.elements[6],k.__data[9]=Q.elements[7],k.__data[10]=Q.elements[8],k.__data[11]=0):(Q.toArray(k.__data,J),J+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,W,k.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(T,A,b,P){const D=T.value,I=A+"_"+b;if(P[I]===void 0)return typeof D=="number"||typeof D=="boolean"?P[I]=D:P[I]=D.clone(),!0;{const F=P[I];if(typeof D=="number"||typeof D=="boolean"){if(F!==D)return P[I]=D,!0}else if(F.equals(D)===!1)return F.copy(D),!0}return!1}function w(T){const A=T.uniforms;let b=0;const P=16;for(let I=0,F=A.length;I<F;I++){const E=Array.isArray(A[I])?A[I]:[A[I]];for(let L=0,k=E.length;L<k;L++){const W=E[L],V=Array.isArray(W.value)?W.value:[W.value];for(let J=0,ee=V.length;J<ee;J++){const Q=V[J],Y=S(Q),q=b%P,de=q%Y.boundary,re=q+de;b+=de,re!==0&&P-re<Y.storage&&(b+=P-re),W.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=b,b+=Y.storage}}}const D=b%P;return D>0&&(b+=P-D),T.__size=b,T.__cache={},this}function S(T){const A={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(A.boundary=4,A.storage=4):T.isVector2?(A.boundary=8,A.storage=8):T.isVector3||T.isColor?(A.boundary=16,A.storage=12):T.isVector4?(A.boundary=16,A.storage=16):T.isMatrix3?(A.boundary=48,A.storage=48):T.isMatrix4?(A.boundary=64,A.storage=64):T.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):at("WebGLRenderer: Unsupported uniform value type.",T),A}function x(T){const A=T.target;A.removeEventListener("dispose",x);const b=c.indexOf(A.__bindingPointIndex);c.splice(b,1),o.deleteBuffer(s[A.id]),delete s[A.id],delete a[A.id]}function _(){for(const T in s)o.deleteBuffer(s[T]);c=[],s={},a={}}return{bind:f,update:h,dispose:_}}const rT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let nr=null;function sT(){return nr===null&&(nr=new Jy(rT,16,16,na,Dr),nr.name="DFG_LUT",nr.minFilter=zn,nr.magFilter=zn,nr.wrapS=Pr,nr.wrapT=Pr,nr.generateMipmaps=!1,nr.needsUpdate=!0),nr}class ev{constructor(e={}){const{canvas:t=Ay(),context:i=null,depth:s=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:v=!1,outputBufferType:y=Di}=e;this.isWebGLRenderer=!0;let w;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=i.getContextAttributes().alpha}else w=c;const S=y,x=new Set([Vp,Bp,zp]),_=new Set([Di,fr,fl,hl,Op,kp]),T=new Uint32Array(4),A=new Int32Array(4);let b=null,P=null;const D=[],I=[];let F=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ur,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let L=!1;this._outputColorSpace=Li;let k=0,W=0,V=null,J=-1,ee=null;const Q=new cn,Y=new cn;let q=null;const de=new Lt(0);let re=0,B=t.width,oe=t.height,be=1,Fe=null,Be=null;const ae=new cn(0,0,B,oe),fe=new cn(0,0,B,oe);let Se=!1;const Ve=new W_;let Ie=!1,_t=!1;const on=new sn,mt=new Z,Mt=new cn,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function Xt(){return V===null?be:1}let G=i;function qt(U,K){return t.getContext(U,K)}try{const U={alpha:!0,depth:s,stencil:a,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Up}`),t.addEventListener("webglcontextlost",rt,!1),t.addEventListener("webglcontextrestored",Ft,!1),t.addEventListener("webglcontextcreationerror",Et,!1),G===null){const K="webgl2";if(G=qt(K,U),G===null)throw qt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw Nt("WebGLRenderer: "+U.message),U}let vt,wt,qe,O,C,$,he,me,ue,Ke,Ee,He,it,ye,Re,je,Ye,Ae,ct,j,Ne,Me,Le,ve;function pe(){vt=new sw(G),vt.init(),Me=new KE(G,vt),wt=new KM(G,vt,e,Me),qe=new YE(G,vt),wt.reversedDepthBuffer&&v&&qe.buffers.depth.setReversed(!0),O=new lw(G),C=new DE,$=new $E(G,vt,qe,C,wt,Me,O),he=new QM(E),me=new rw(E),ue=new f3(G),Le=new YM(G,ue),Ke=new ow(G,ue,O,Le),Ee=new uw(G,Ke,ue,O),ct=new cw(G,wt,$),je=new ZM(C),He=new LE(E,he,me,vt,wt,Le,je),it=new nT(E,C),ye=new UE,Re=new VE(vt),Ae=new qM(E,he,me,qe,Ee,w,f),Ye=new XE(E,Ee,wt),ve=new iT(G,O,wt,qe),j=new $M(G,vt,O),Ne=new aw(G,vt,O),O.programs=He.programs,E.capabilities=wt,E.extensions=vt,E.properties=C,E.renderLists=ye,E.shadowMap=Ye,E.state=qe,E.info=O}pe(),S!==Di&&(F=new fw(S,t.width,t.height,s,a));const Ce=new eT(E,G);this.xr=Ce,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const U=vt.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=vt.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(U){U!==void 0&&(be=U,this.setSize(B,oe,!1))},this.getSize=function(U){return U.set(B,oe)},this.setSize=function(U,K,ce=!0){if(Ce.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}B=U,oe=K,t.width=Math.floor(U*be),t.height=Math.floor(K*be),ce===!0&&(t.style.width=U+"px",t.style.height=K+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,U,K)},this.getDrawingBufferSize=function(U){return U.set(B*be,oe*be).floor()},this.setDrawingBufferSize=function(U,K,ce){B=U,oe=K,be=ce,t.width=Math.floor(U*ce),t.height=Math.floor(K*ce),this.setViewport(0,0,U,K)},this.setEffects=function(U){if(S===Di){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(U){for(let K=0;K<U.length;K++)if(U[K].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(U||[])},this.getCurrentViewport=function(U){return U.copy(Q)},this.getViewport=function(U){return U.copy(ae)},this.setViewport=function(U,K,ce,se){U.isVector4?ae.set(U.x,U.y,U.z,U.w):ae.set(U,K,ce,se),qe.viewport(Q.copy(ae).multiplyScalar(be).round())},this.getScissor=function(U){return U.copy(fe)},this.setScissor=function(U,K,ce,se){U.isVector4?fe.set(U.x,U.y,U.z,U.w):fe.set(U,K,ce,se),qe.scissor(Y.copy(fe).multiplyScalar(be).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(U){qe.setScissorTest(Se=U)},this.setOpaqueSort=function(U){Fe=U},this.setTransparentSort=function(U){Be=U},this.getClearColor=function(U){return U.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(U=!0,K=!0,ce=!0){let se=0;if(U){let ne=!1;if(V!==null){const Pe=V.texture.format;ne=x.has(Pe)}if(ne){const Pe=V.texture.type,Oe=_.has(Pe),Te=Ae.getClearColor(),We=Ae.getClearAlpha(),ze=Te.r,nt=Te.g,Qe=Te.b;Oe?(T[0]=ze,T[1]=nt,T[2]=Qe,T[3]=We,G.clearBufferuiv(G.COLOR,0,T)):(A[0]=ze,A[1]=nt,A[2]=Qe,A[3]=We,G.clearBufferiv(G.COLOR,0,A))}else se|=G.COLOR_BUFFER_BIT}K&&(se|=G.DEPTH_BUFFER_BIT),ce&&(se|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",rt,!1),t.removeEventListener("webglcontextrestored",Ft,!1),t.removeEventListener("webglcontextcreationerror",Et,!1),Ae.dispose(),ye.dispose(),Re.dispose(),C.dispose(),he.dispose(),me.dispose(),Ee.dispose(),Le.dispose(),ve.dispose(),He.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",ws),Ce.removeEventListener("sessionend",Es),zi.stop()};function rt(U){U.preventDefault(),Qg("WebGLRenderer: Context Lost."),L=!0}function Ft(){Qg("WebGLRenderer: Context Restored."),L=!1;const U=O.autoReset,K=Ye.enabled,ce=Ye.autoUpdate,se=Ye.needsUpdate,ne=Ye.type;pe(),O.autoReset=U,Ye.enabled=K,Ye.autoUpdate=ce,Ye.needsUpdate=se,Ye.type=ne}function Et(U){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function li(U){const K=U.target;K.removeEventListener("dispose",li),Vn(K)}function Vn(U){ha(U),C.remove(U)}function ha(U){const K=C.get(U).programs;K!==void 0&&(K.forEach(function(ce){He.releaseProgram(ce)}),U.isShaderMaterial&&He.releaseShaderCache(U))}this.renderBufferDirect=function(U,K,ce,se,ne,Pe){K===null&&(K=It);const Oe=ne.isMesh&&ne.matrixWorld.determinant()<0,Te=Ul(U,K,ce,se,ne);qe.setMaterial(se,Oe);let We=ce.index,ze=1;if(se.wireframe===!0){if(We=Ke.getWireframeAttribute(ce),We===void 0)return;ze=2}const nt=ce.drawRange,Qe=ce.attributes.position;let ft=nt.start*ze,Tt=(nt.start+nt.count)*ze;Pe!==null&&(ft=Math.max(ft,Pe.start*ze),Tt=Math.min(Tt,(Pe.start+Pe.count)*ze)),We!==null?(ft=Math.max(ft,0),Tt=Math.min(Tt,We.count)):Qe!=null&&(ft=Math.max(ft,0),Tt=Math.min(Tt,Qe.count));const zt=Tt-ft;if(zt<0||zt===1/0)return;Le.setup(ne,se,Te,ce,We);let kt,Rt=j;if(We!==null&&(kt=ue.get(We),Rt=Ne,Rt.setIndex(kt)),ne.isMesh)se.wireframe===!0?(qe.setLineWidth(se.wireframeLinewidth*Xt()),Rt.setMode(G.LINES)):Rt.setMode(G.TRIANGLES);else if(ne.isLine){let Je=se.linewidth;Je===void 0&&(Je=1),qe.setLineWidth(Je*Xt()),ne.isLineSegments?Rt.setMode(G.LINES):ne.isLineLoop?Rt.setMode(G.LINE_LOOP):Rt.setMode(G.LINE_STRIP)}else ne.isPoints?Rt.setMode(G.POINTS):ne.isSprite&&Rt.setMode(G.TRIANGLES);if(ne.isBatchedMesh)if(ne._multiDrawInstances!==null)pl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Rt.renderMultiDrawInstances(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount,ne._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))Rt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const Je=ne._multiDrawStarts,Dt=ne._multiDrawCounts,xt=ne._multiDrawCount,Nn=We?ue.get(We).bytesPerElement:1,Ki=C.get(se).currentProgram.getUniforms();for(let hn=0;hn<xt;hn++)Ki.setValue(G,"_gl_DrawID",hn),Rt.render(Je[hn]/Nn,Dt[hn])}else if(ne.isInstancedMesh)Rt.renderInstances(ft,zt,ne.count);else if(ce.isInstancedBufferGeometry){const Je=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Dt=Math.min(ce.instanceCount,Je);Rt.renderInstances(ft,zt,Dt)}else Rt.render(ft,zt)};function kr(U,K,ce){U.transparent===!0&&U.side===sr&&U.forceSinglePass===!1?(U.side=ni,U.needsUpdate=!0,Ts(U,K,ce),U.side=_s,U.needsUpdate=!0,Ts(U,K,ce),U.side=sr):Ts(U,K,ce)}this.compile=function(U,K,ce=null){ce===null&&(ce=U),P=Re.get(ce),P.init(K),I.push(P),ce.traverseVisible(function(ne){ne.isLight&&ne.layers.test(K.layers)&&(P.pushLight(ne),ne.castShadow&&P.pushShadow(ne))}),U!==ce&&U.traverseVisible(function(ne){ne.isLight&&ne.layers.test(K.layers)&&(P.pushLight(ne),ne.castShadow&&P.pushShadow(ne))}),P.setupLights();const se=new Set;return U.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Pe=ne.material;if(Pe)if(Array.isArray(Pe))for(let Oe=0;Oe<Pe.length;Oe++){const Te=Pe[Oe];kr(Te,ce,ne),se.add(Te)}else kr(Pe,ce,ne),se.add(Pe)}),P=I.pop(),se},this.compileAsync=function(U,K,ce=null){const se=this.compile(U,K,ce);return new Promise(ne=>{function Pe(){if(se.forEach(function(Oe){C.get(Oe).currentProgram.isReady()&&se.delete(Oe)}),se.size===0){ne(U);return}setTimeout(Pe,10)}vt.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let pa=null;function Ms(U){pa&&pa(U)}function ws(){zi.stop()}function Es(){zi.start()}const zi=new $_;zi.setAnimationLoop(Ms),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(U){pa=U,Ce.setAnimationLoop(U),U===null?zi.stop():zi.start()},Ce.addEventListener("sessionstart",ws),Ce.addEventListener("sessionend",Es),this.render=function(U,K){if(K!==void 0&&K.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;const ce=Ce.enabled===!0&&Ce.isPresenting===!0,se=F!==null&&(V===null||ce)&&F.begin(E,V);if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(K),K=Ce.getCamera()),U.isScene===!0&&U.onBeforeRender(E,U,K,V),P=Re.get(U,I.length),P.init(K),I.push(P),on.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Ve.setFromProjectionMatrix(on,lr,K.reversedDepth),_t=this.localClippingEnabled,Ie=je.init(this.clippingPlanes,_t),b=ye.get(U,D.length),b.init(),D.push(b),Ce.enabled===!0&&Ce.isPresenting===!0){const Oe=E.xr.getDepthSensingMesh();Oe!==null&&ma(Oe,K,-1/0,E.sortObjects)}ma(U,K,0,E.sortObjects),b.finish(),E.sortObjects===!0&&b.sort(Fe,Be),ut=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,ut&&Ae.addToRenderList(b,U),this.info.render.frame++,Ie===!0&&je.beginShadows();const ne=P.state.shadowsArray;if(Ye.render(ne,U,K),Ie===!0&&je.endShadows(),this.info.autoReset===!0&&this.info.reset(),(se&&F.hasRenderPass())===!1){const Oe=b.opaque,Te=b.transmissive;if(P.setupLights(),K.isArrayCamera){const We=K.cameras;if(Te.length>0)for(let ze=0,nt=We.length;ze<nt;ze++){const Qe=We[ze];Dl(Oe,Te,U,Qe)}ut&&Ae.render(U);for(let ze=0,nt=We.length;ze<nt;ze++){const Qe=We[ze];Ll(b,U,Qe,Qe.viewport)}}else Te.length>0&&Dl(Oe,Te,U,K),ut&&Ae.render(U),Ll(b,U,K)}V!==null&&W===0&&($.updateMultisampleRenderTarget(V),$.updateRenderTargetMipmap(V)),se&&F.end(E),U.isScene===!0&&U.onAfterRender(E,U,K),Le.resetDefaultState(),J=-1,ee=null,I.pop(),I.length>0?(P=I[I.length-1],Ie===!0&&je.setGlobalState(E.clippingPlanes,P.state.camera)):P=null,D.pop(),D.length>0?b=D[D.length-1]:b=null};function ma(U,K,ce,se){if(U.visible===!1)return;if(U.layers.test(K.layers)){if(U.isGroup)ce=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(K);else if(U.isLight)P.pushLight(U),U.castShadow&&P.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||Ve.intersectsSprite(U)){se&&Mt.setFromMatrixPosition(U.matrixWorld).applyMatrix4(on);const Oe=Ee.update(U),Te=U.material;Te.visible&&b.push(U,Oe,Te,ce,Mt.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||Ve.intersectsObject(U))){const Oe=Ee.update(U),Te=U.material;if(se&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),Mt.copy(U.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Mt.copy(Oe.boundingSphere.center)),Mt.applyMatrix4(U.matrixWorld).applyMatrix4(on)),Array.isArray(Te)){const We=Oe.groups;for(let ze=0,nt=We.length;ze<nt;ze++){const Qe=We[ze],ft=Te[Qe.materialIndex];ft&&ft.visible&&b.push(U,Oe,ft,ce,Mt.z,Qe)}}else Te.visible&&b.push(U,Oe,Te,ce,Mt.z,null)}}const Pe=U.children;for(let Oe=0,Te=Pe.length;Oe<Te;Oe++)ma(Pe[Oe],K,ce,se)}function Ll(U,K,ce,se){const{opaque:ne,transmissive:Pe,transparent:Oe}=U;P.setupLightsView(ce),Ie===!0&&je.setGlobalState(E.clippingPlanes,ce),se&&qe.viewport(Q.copy(se)),ne.length>0&&wi(ne,K,ce),Pe.length>0&&wi(Pe,K,ce),Oe.length>0&&wi(Oe,K,ce),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function Dl(U,K,ce,se){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[se.id]===void 0){const ft=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[se.id]=new dr(1,1,{generateMipmaps:!0,type:ft?Dr:Di,minFilter:Zs,samples:wt.samples,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace})}const Pe=P.state.transmissionRenderTarget[se.id],Oe=se.viewport||Q;Pe.setSize(Oe.z*E.transmissionResolutionScale,Oe.w*E.transmissionResolutionScale);const Te=E.getRenderTarget(),We=E.getActiveCubeFace(),ze=E.getActiveMipmapLevel();E.setRenderTarget(Pe),E.getClearColor(de),re=E.getClearAlpha(),re<1&&E.setClearColor(16777215,.5),E.clear(),ut&&Ae.render(ce);const nt=E.toneMapping;E.toneMapping=ur;const Qe=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),P.setupLightsView(se),Ie===!0&&je.setGlobalState(E.clippingPlanes,se),wi(U,ce,se),$.updateMultisampleRenderTarget(Pe),$.updateRenderTargetMipmap(Pe),vt.has("WEBGL_multisampled_render_to_texture")===!1){let ft=!1;for(let Tt=0,zt=K.length;Tt<zt;Tt++){const kt=K[Tt],{object:Rt,geometry:Je,material:Dt,group:xt}=kt;if(Dt.side===sr&&Rt.layers.test(se.layers)){const Nn=Dt.side;Dt.side=ni,Dt.needsUpdate=!0,ga(Rt,ce,se,Je,Dt,xt),Dt.side=Nn,Dt.needsUpdate=!0,ft=!0}}ft===!0&&($.updateMultisampleRenderTarget(Pe),$.updateRenderTargetMipmap(Pe))}E.setRenderTarget(Te,We,ze),E.setClearColor(de,re),Qe!==void 0&&(se.viewport=Qe),E.toneMapping=nt}function wi(U,K,ce){const se=K.isScene===!0?K.overrideMaterial:null;for(let ne=0,Pe=U.length;ne<Pe;ne++){const Oe=U[ne],{object:Te,geometry:We,group:ze}=Oe;let nt=Oe.material;nt.allowOverride===!0&&se!==null&&(nt=se),Te.layers.test(ce.layers)&&ga(Te,K,ce,We,nt,ze)}}function ga(U,K,ce,se,ne,Pe){U.onBeforeRender(E,K,ce,se,ne,Pe),U.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),ne.onBeforeRender(E,K,ce,se,U,Pe),ne.transparent===!0&&ne.side===sr&&ne.forceSinglePass===!1?(ne.side=ni,ne.needsUpdate=!0,E.renderBufferDirect(ce,K,se,ne,U,Pe),ne.side=_s,ne.needsUpdate=!0,E.renderBufferDirect(ce,K,se,ne,U,Pe),ne.side=sr):E.renderBufferDirect(ce,K,se,ne,U,Pe),U.onAfterRender(E,K,ce,se,ne,Pe)}function Ts(U,K,ce){K.isScene!==!0&&(K=It);const se=C.get(U),ne=P.state.lights,Pe=P.state.shadowsArray,Oe=ne.state.version,Te=He.getParameters(U,ne.state,Pe,K,ce),We=He.getProgramCacheKey(Te);let ze=se.programs;se.environment=U.isMeshStandardMaterial?K.environment:null,se.fog=K.fog,se.envMap=(U.isMeshStandardMaterial?me:he).get(U.envMap||se.environment),se.envMapRotation=se.environment!==null&&U.envMap===null?K.environmentRotation:U.envMapRotation,ze===void 0&&(U.addEventListener("dispose",li),ze=new Map,se.programs=ze);let nt=ze.get(We);if(nt!==void 0){if(se.currentProgram===nt&&se.lightsStateVersion===Oe)return _a(U,Te),nt}else Te.uniforms=He.getUniforms(U),U.onBeforeCompile(Te,E),nt=He.acquireProgram(Te,We),ze.set(We,nt),se.uniforms=Te.uniforms;const Qe=se.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Qe.clippingPlanes=je.uniform),_a(U,Te),se.needsLights=Ol(U),se.lightsStateVersion=Oe,se.needsLights&&(Qe.ambientLightColor.value=ne.state.ambient,Qe.lightProbe.value=ne.state.probe,Qe.directionalLights.value=ne.state.directional,Qe.directionalLightShadows.value=ne.state.directionalShadow,Qe.spotLights.value=ne.state.spot,Qe.spotLightShadows.value=ne.state.spotShadow,Qe.rectAreaLights.value=ne.state.rectArea,Qe.ltc_1.value=ne.state.rectAreaLTC1,Qe.ltc_2.value=ne.state.rectAreaLTC2,Qe.pointLights.value=ne.state.point,Qe.pointLightShadows.value=ne.state.pointShadow,Qe.hemisphereLights.value=ne.state.hemi,Qe.directionalShadowMap.value=ne.state.directionalShadowMap,Qe.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Qe.spotShadowMap.value=ne.state.spotShadowMap,Qe.spotLightMatrix.value=ne.state.spotLightMatrix,Qe.spotLightMap.value=ne.state.spotLightMap,Qe.pointShadowMap.value=ne.state.pointShadowMap,Qe.pointShadowMatrix.value=ne.state.pointShadowMatrix),se.currentProgram=nt,se.uniformsList=null,nt}function Il(U){if(U.uniformsList===null){const K=U.currentProgram.getUniforms();U.uniformsList=yu.seqWithValue(K.seq,U.uniforms)}return U.uniformsList}function _a(U,K){const ce=C.get(U);ce.outputColorSpace=K.outputColorSpace,ce.batching=K.batching,ce.batchingColor=K.batchingColor,ce.instancing=K.instancing,ce.instancingColor=K.instancingColor,ce.instancingMorph=K.instancingMorph,ce.skinning=K.skinning,ce.morphTargets=K.morphTargets,ce.morphNormals=K.morphNormals,ce.morphColors=K.morphColors,ce.morphTargetsCount=K.morphTargetsCount,ce.numClippingPlanes=K.numClippingPlanes,ce.numIntersection=K.numClipIntersection,ce.vertexAlphas=K.vertexAlphas,ce.vertexTangents=K.vertexTangents,ce.toneMapping=K.toneMapping}function Ul(U,K,ce,se,ne){K.isScene!==!0&&(K=It),$.resetTextureUnits();const Pe=K.fog,Oe=se.isMeshStandardMaterial?K.environment:null,Te=V===null?E.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:ia,We=(se.isMeshStandardMaterial?me:he).get(se.envMap||Oe),ze=se.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,nt=!!ce.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Qe=!!ce.morphAttributes.position,ft=!!ce.morphAttributes.normal,Tt=!!ce.morphAttributes.color;let zt=ur;se.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(zt=E.toneMapping);const kt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Rt=kt!==void 0?kt.length:0,Je=C.get(se),Dt=P.state.lights;if(Ie===!0&&(_t===!0||U!==ee)){const yn=U===ee&&se.id===J;je.setState(se,U,yn)}let xt=!1;se.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Dt.state.version||Je.outputColorSpace!==Te||ne.isBatchedMesh&&Je.batching===!1||!ne.isBatchedMesh&&Je.batching===!0||ne.isBatchedMesh&&Je.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&Je.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&Je.instancing===!1||!ne.isInstancedMesh&&Je.instancing===!0||ne.isSkinnedMesh&&Je.skinning===!1||!ne.isSkinnedMesh&&Je.skinning===!0||ne.isInstancedMesh&&Je.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Je.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Je.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Je.instancingMorph===!1&&ne.morphTexture!==null||Je.envMap!==We||se.fog===!0&&Je.fog!==Pe||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==je.numPlanes||Je.numIntersection!==je.numIntersection)||Je.vertexAlphas!==ze||Je.vertexTangents!==nt||Je.morphTargets!==Qe||Je.morphNormals!==ft||Je.morphColors!==Tt||Je.toneMapping!==zt||Je.morphTargetsCount!==Rt)&&(xt=!0):(xt=!0,Je.__version=se.version);let Nn=Je.currentProgram;xt===!0&&(Nn=Ts(se,K,ne));let Ki=!1,hn=!1,bs=!1;const Ut=Nn.getUniforms(),lt=Je.uniforms;if(qe.useProgram(Nn.program)&&(Ki=!0,hn=!0,bs=!0),se.id!==J&&(J=se.id,hn=!0),Ki||ee!==U){qe.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),Ut.setValue(G,"projectionMatrix",U.projectionMatrix),Ut.setValue(G,"viewMatrix",U.matrixWorldInverse);const Sn=Ut.map.cameraPosition;Sn!==void 0&&Sn.setValue(G,mt.setFromMatrixPosition(U.matrixWorld)),wt.logarithmicDepthBuffer&&Ut.setValue(G,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Ut.setValue(G,"isOrthographic",U.isOrthographicCamera===!0),ee!==U&&(ee=U,hn=!0,bs=!0)}if(Je.needsLights&&(Dt.state.directionalShadowMap.length>0&&Ut.setValue(G,"directionalShadowMap",Dt.state.directionalShadowMap,$),Dt.state.spotShadowMap.length>0&&Ut.setValue(G,"spotShadowMap",Dt.state.spotShadowMap,$),Dt.state.pointShadowMap.length>0&&Ut.setValue(G,"pointShadowMap",Dt.state.pointShadowMap,$)),ne.isSkinnedMesh){Ut.setOptional(G,ne,"bindMatrix"),Ut.setOptional(G,ne,"bindMatrixInverse");const yn=ne.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Ut.setValue(G,"boneTexture",yn.boneTexture,$))}ne.isBatchedMesh&&(Ut.setOptional(G,ne,"batchingTexture"),Ut.setValue(G,"batchingTexture",ne._matricesTexture,$),Ut.setOptional(G,ne,"batchingIdTexture"),Ut.setValue(G,"batchingIdTexture",ne._indirectTexture,$),Ut.setOptional(G,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Ut.setValue(G,"batchingColorTexture",ne._colorsTexture,$));const Hn=ce.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&ct.update(ne,ce,Nn),(hn||Je.receiveShadow!==ne.receiveShadow)&&(Je.receiveShadow=ne.receiveShadow,Ut.setValue(G,"receiveShadow",ne.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(lt.envMap.value=We,lt.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&K.environment!==null&&(lt.envMapIntensity.value=K.environmentIntensity),lt.dfgLUT!==void 0&&(lt.dfgLUT.value=sT()),hn&&(Ut.setValue(G,"toneMappingExposure",E.toneMappingExposure),Je.needsLights&&Fl(lt,bs),Pe&&se.fog===!0&&it.refreshFogUniforms(lt,Pe),it.refreshMaterialUniforms(lt,se,be,oe,P.state.transmissionRenderTarget[U.id]),yu.upload(G,Il(Je),lt,$)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(yu.upload(G,Il(Je),lt,$),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Ut.setValue(G,"center",ne.center),Ut.setValue(G,"modelViewMatrix",ne.modelViewMatrix),Ut.setValue(G,"normalMatrix",ne.normalMatrix),Ut.setValue(G,"modelMatrix",ne.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const yn=se.uniformsGroups;for(let Sn=0,lo=yn.length;Sn<lo;Sn++){const Zi=yn[Sn];ve.update(Zi,Nn),ve.bind(Zi,Nn)}}return Nn}function Fl(U,K){U.ambientLightColor.needsUpdate=K,U.lightProbe.needsUpdate=K,U.directionalLights.needsUpdate=K,U.directionalLightShadows.needsUpdate=K,U.pointLights.needsUpdate=K,U.pointLightShadows.needsUpdate=K,U.spotLights.needsUpdate=K,U.spotLightShadows.needsUpdate=K,U.rectAreaLights.needsUpdate=K,U.hemisphereLights.needsUpdate=K}function Ol(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(U,K,ce){const se=C.get(U);se.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),C.get(U.texture).__webglTexture=K,C.get(U.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:ce,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,K){const ce=C.get(U);ce.__webglFramebuffer=K,ce.__useDefaultFramebuffer=K===void 0};const Qu=G.createFramebuffer();this.setRenderTarget=function(U,K=0,ce=0){V=U,k=K,W=ce;let se=null,ne=!1,Pe=!1;if(U){const Te=C.get(U);if(Te.__useDefaultFramebuffer!==void 0){qe.bindFramebuffer(G.FRAMEBUFFER,Te.__webglFramebuffer),Q.copy(U.viewport),Y.copy(U.scissor),q=U.scissorTest,qe.viewport(Q),qe.scissor(Y),qe.setScissorTest(q),J=-1;return}else if(Te.__webglFramebuffer===void 0)$.setupRenderTarget(U);else if(Te.__hasExternalTextures)$.rebindTextures(U,C.get(U.texture).__webglTexture,C.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){const nt=U.depthTexture;if(Te.__boundDepthTexture!==nt){if(nt!==null&&C.has(nt)&&(U.width!==nt.image.width||U.height!==nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(U)}}const We=U.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Pe=!0);const ze=C.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(ze[K])?se=ze[K][ce]:se=ze[K],ne=!0):U.samples>0&&$.useMultisampledRTT(U)===!1?se=C.get(U).__webglMultisampledFramebuffer:Array.isArray(ze)?se=ze[ce]:se=ze,Q.copy(U.viewport),Y.copy(U.scissor),q=U.scissorTest}else Q.copy(ae).multiplyScalar(be).floor(),Y.copy(fe).multiplyScalar(be).floor(),q=Se;if(ce!==0&&(se=Qu),qe.bindFramebuffer(G.FRAMEBUFFER,se)&&qe.drawBuffers(U,se),qe.viewport(Q),qe.scissor(Y),qe.setScissorTest(q),ne){const Te=C.get(U.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+K,Te.__webglTexture,ce)}else if(Pe){const Te=K;for(let We=0;We<U.textures.length;We++){const ze=C.get(U.textures[We]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+We,ze.__webglTexture,ce,Te)}}else if(U!==null&&ce!==0){const Te=C.get(U.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Te.__webglTexture,ce)}J=-1},this.readRenderTargetPixels=function(U,K,ce,se,ne,Pe,Oe,Te=0){if(!(U&&U.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=C.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Oe!==void 0&&(We=We[Oe]),We){qe.bindFramebuffer(G.FRAMEBUFFER,We);try{const ze=U.textures[Te],nt=ze.format,Qe=ze.type;if(!wt.textureFormatReadable(nt)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!wt.textureTypeReadable(Qe)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=U.width-se&&ce>=0&&ce<=U.height-ne&&(U.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Te),G.readPixels(K,ce,se,ne,Me.convert(nt),Me.convert(Qe),Pe))}finally{const ze=V!==null?C.get(V).__webglFramebuffer:null;qe.bindFramebuffer(G.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(U,K,ce,se,ne,Pe,Oe,Te=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=C.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Oe!==void 0&&(We=We[Oe]),We)if(K>=0&&K<=U.width-se&&ce>=0&&ce<=U.height-ne){qe.bindFramebuffer(G.FRAMEBUFFER,We);const ze=U.textures[Te],nt=ze.format,Qe=ze.type;if(!wt.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!wt.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ft=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ft),G.bufferData(G.PIXEL_PACK_BUFFER,Pe.byteLength,G.STREAM_READ),U.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Te),G.readPixels(K,ce,se,ne,Me.convert(nt),Me.convert(Qe),0);const Tt=V!==null?C.get(V).__webglFramebuffer:null;qe.bindFramebuffer(G.FRAMEBUFFER,Tt);const zt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Cy(G,zt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ft),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Pe),G.deleteBuffer(ft),G.deleteSync(zt),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,K=null,ce=0){const se=Math.pow(2,-ce),ne=Math.floor(U.image.width*se),Pe=Math.floor(U.image.height*se),Oe=K!==null?K.x:0,Te=K!==null?K.y:0;$.setTexture2D(U,0),G.copyTexSubImage2D(G.TEXTURE_2D,ce,0,0,Oe,Te,ne,Pe),qe.unbindTexture()};const Ju=G.createFramebuffer(),Kt=G.createFramebuffer();this.copyTextureToTexture=function(U,K,ce=null,se=null,ne=0,Pe=null){Pe===null&&(ne!==0?(pl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Pe=ne,ne=0):Pe=0);let Oe,Te,We,ze,nt,Qe,ft,Tt,zt;const kt=U.isCompressedTexture?U.mipmaps[Pe]:U.image;if(ce!==null)Oe=ce.max.x-ce.min.x,Te=ce.max.y-ce.min.y,We=ce.isBox3?ce.max.z-ce.min.z:1,ze=ce.min.x,nt=ce.min.y,Qe=ce.isBox3?ce.min.z:0;else{const Hn=Math.pow(2,-ne);Oe=Math.floor(kt.width*Hn),Te=Math.floor(kt.height*Hn),U.isDataArrayTexture?We=kt.depth:U.isData3DTexture?We=Math.floor(kt.depth*Hn):We=1,ze=0,nt=0,Qe=0}se!==null?(ft=se.x,Tt=se.y,zt=se.z):(ft=0,Tt=0,zt=0);const Rt=Me.convert(K.format),Je=Me.convert(K.type);let Dt;K.isData3DTexture?($.setTexture3D(K,0),Dt=G.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?($.setTexture2DArray(K,0),Dt=G.TEXTURE_2D_ARRAY):($.setTexture2D(K,0),Dt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,K.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,K.unpackAlignment);const xt=G.getParameter(G.UNPACK_ROW_LENGTH),Nn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Ki=G.getParameter(G.UNPACK_SKIP_PIXELS),hn=G.getParameter(G.UNPACK_SKIP_ROWS),bs=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,kt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,kt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ze),G.pixelStorei(G.UNPACK_SKIP_ROWS,nt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Qe);const Ut=U.isDataArrayTexture||U.isData3DTexture,lt=K.isDataArrayTexture||K.isData3DTexture;if(U.isDepthTexture){const Hn=C.get(U),yn=C.get(K),Sn=C.get(Hn.__renderTarget),lo=C.get(yn.__renderTarget);qe.bindFramebuffer(G.READ_FRAMEBUFFER,Sn.__webglFramebuffer),qe.bindFramebuffer(G.DRAW_FRAMEBUFFER,lo.__webglFramebuffer);for(let Zi=0;Zi<We;Zi++)Ut&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,C.get(U).__webglTexture,ne,Qe+Zi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,C.get(K).__webglTexture,Pe,zt+Zi)),G.blitFramebuffer(ze,nt,Oe,Te,ft,Tt,Oe,Te,G.DEPTH_BUFFER_BIT,G.NEAREST);qe.bindFramebuffer(G.READ_FRAMEBUFFER,null),qe.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(ne!==0||U.isRenderTargetTexture||C.has(U)){const Hn=C.get(U),yn=C.get(K);qe.bindFramebuffer(G.READ_FRAMEBUFFER,Ju),qe.bindFramebuffer(G.DRAW_FRAMEBUFFER,Kt);for(let Sn=0;Sn<We;Sn++)Ut?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Hn.__webglTexture,ne,Qe+Sn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Hn.__webglTexture,ne),lt?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,yn.__webglTexture,Pe,zt+Sn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,yn.__webglTexture,Pe),ne!==0?G.blitFramebuffer(ze,nt,Oe,Te,ft,Tt,Oe,Te,G.COLOR_BUFFER_BIT,G.NEAREST):lt?G.copyTexSubImage3D(Dt,Pe,ft,Tt,zt+Sn,ze,nt,Oe,Te):G.copyTexSubImage2D(Dt,Pe,ft,Tt,ze,nt,Oe,Te);qe.bindFramebuffer(G.READ_FRAMEBUFFER,null),qe.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else lt?U.isDataTexture||U.isData3DTexture?G.texSubImage3D(Dt,Pe,ft,Tt,zt,Oe,Te,We,Rt,Je,kt.data):K.isCompressedArrayTexture?G.compressedTexSubImage3D(Dt,Pe,ft,Tt,zt,Oe,Te,We,Rt,kt.data):G.texSubImage3D(Dt,Pe,ft,Tt,zt,Oe,Te,We,Rt,Je,kt):U.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Pe,ft,Tt,Oe,Te,Rt,Je,kt.data):U.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Pe,ft,Tt,kt.width,kt.height,Rt,kt.data):G.texSubImage2D(G.TEXTURE_2D,Pe,ft,Tt,Oe,Te,Rt,Je,kt);G.pixelStorei(G.UNPACK_ROW_LENGTH,xt),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Nn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ki),G.pixelStorei(G.UNPACK_SKIP_ROWS,hn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,bs),Pe===0&&K.generateMipmaps&&G.generateMipmap(Dt),qe.unbindTexture()},this.initRenderTarget=function(U){C.get(U).__webglFramebuffer===void 0&&$.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?$.setTextureCube(U,0):U.isData3DTexture?$.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?$.setTexture2DArray(U,0):$.setTexture2D(U,0),qe.unbindTexture()},this.resetState=function(){k=0,W=0,V=null,qe.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return lr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}}function Cr(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function tv(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var yi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},sa={duration:.5,overwrite:!1,delay:0},Qp,Pn,$t,Ui=1e8,Vt=1/Ui,_p=Math.PI*2,oT=_p/4,aT=0,nv=Math.sqrt,lT=Math.cos,cT=Math.sin,bn=function(e){return typeof e=="string"},rn=function(e){return typeof e=="function"},Fr=function(e){return typeof e=="number"},Jp=function(e){return typeof e>"u"},pr=function(e){return typeof e=="object"},ii=function(e){return e!==!1},e0=function(){return typeof window<"u"},hu=function(e){return rn(e)||bn(e)},iv=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Bn=Array.isArray,uT=/random\([^)]+\)/g,dT=/,\s*/g,X1=/(?:-?\.?\d|\.)+/gi,rv=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,qo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,hh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,sv=/[+-]=-?[.\d]+/,fT=/[^,'"\[\]\s]+/gi,hT=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,en,ir,vp,t0,Si={},Lu={},ov,av=function(e){return(Lu=oa(e,Si))&&ai},n0=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},_l=function(e,t){return!t&&console.warn(e)},lv=function(e,t){return e&&(Si[e]=t)&&Lu&&(Lu[e]=t)||Si},vl=function(){return 0},pT={suppressEvents:!0,isStart:!0,kill:!1},Su={suppressEvents:!0,kill:!1},mT={suppressEvents:!0},i0={},ms=[],xp={},cv,mi={},ph={},q1=30,Mu=[],r0="",s0=function(e){var t=e[0],i,s;if(pr(t)||rn(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(s=Mu.length;s--&&!Mu[s].targetTest(t););i=Mu[s]}for(s=e.length;s--;)e[s]&&(e[s]._gsap||(e[s]._gsap=new Dv(e[s],i)))||e.splice(s,1);return e},to=function(e){return e._gsap||s0(Fi(e))[0]._gsap},uv=function(e,t,i){return(i=e[t])&&rn(i)?e[t]():Jp(i)&&e.getAttribute&&e.getAttribute(t)||i},ri=function(e,t){return(e=e.split(",")).forEach(t)||e},ln=function(e){return Math.round(e*1e5)/1e5||0},Jt=function(e){return Math.round(e*1e7)/1e7||0},Zo=function(e,t){var i=t.charAt(0),s=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+s:i==="-"?e-s:i==="*"?e*s:e/s},gT=function(e,t){for(var i=t.length,s=0;e.indexOf(t[s])<0&&++s<i;);return s<i},Du=function(){var e=ms.length,t=ms.slice(0),i,s;for(xp={},ms.length=0,i=0;i<e;i++)s=t[i],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},o0=function(e){return!!(e._initted||e._startAt||e.add)},dv=function(e,t,i,s){ms.length&&!Pn&&Du(),e.render(t,i,!!(Pn&&t<0&&o0(e))),ms.length&&!Pn&&Du()},fv=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(fT).length<2?t:bn(e)?e.trim():e},hv=function(e){return e},Mi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},_T=function(e){return function(t,i){for(var s in i)s in t||s==="duration"&&e||s==="ease"||(t[s]=i[s])}},oa=function(e,t){for(var i in t)e[i]=t[i];return e},Y1=function o(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=pr(t[i])?o(e[i]||(e[i]={}),t[i]):t[i]);return e},Iu=function(e,t){var i={},s;for(s in e)s in t||(i[s]=e[s]);return i},cl=function(e){var t=e.parent||en,i=e.keyframes?_T(Bn(e.keyframes)):Mi;if(ii(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},vT=function(e,t){for(var i=e.length,s=i===t.length;s&&i--&&e[i]===t[i];);return i<0},pv=function(e,t,i,s,a){var c=e[s],u;if(a)for(u=t[a];c&&c[a]>u;)c=c._prev;return c?(t._next=c._next,c._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[s]=t,t._prev=c,t.parent=t._dp=e,t},$u=function(e,t,i,s){i===void 0&&(i="_first"),s===void 0&&(s="_last");var a=t._prev,c=t._next;a?a._next=c:e[i]===t&&(e[i]=c),c?c._prev=a:e[s]===t&&(e[s]=a),t._next=t._prev=t.parent=null},vs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},no=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},xT=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},yp=function(e,t,i,s){return e._startAt&&(Pn?e._startAt.revert(Su):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,s))},yT=function o(e){return!e||e._ts&&o(e.parent)},$1=function(e){return e._repeat?aa(e._tTime,e=e.duration()+e._rDelay)*e:0},aa=function(e,t){var i=Math.floor(e=Jt(e/t));return e&&i===e?i-1:i},Uu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ku=function(e){return e._end=Jt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Vt)||0))},Zu=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Jt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ku(e),i._dirty||no(i,e)),e},mv=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Uu(e.rawTime(),t),(!t._dur||Nl(0,t.totalDuration(),i)-t._tTime>Vt)&&t.render(i,!0)),no(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Vt}},or=function(e,t,i,s){return t.parent&&vs(t),t._start=Jt((Fr(i)?i:i||e!==en?Ni(e,i,t):e._time)+t._delay),t._end=Jt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),pv(e,t,"_first","_last",e._sort?"_start":0),Sp(t)||(e._recent=t),s||mv(e,t),e._ts<0&&Zu(e,e._tTime),e},gv=function(e,t){return(Si.ScrollTrigger||n0("scrollTrigger",t))&&Si.ScrollTrigger.create(t,e)},_v=function(e,t,i,s,a){if(l0(e,t,a),!e._initted)return 1;if(!i&&e._pt&&!Pn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&cv!==_i.frame)return ms.push(e),e._lazy=[a,s],1},ST=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},Sp=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},MT=function(e,t,i,s){var a=e.ratio,c=t<0||!t&&(!e._start&&ST(e)&&!(!e._initted&&Sp(e))||(e._ts<0||e._dp._ts<0)&&!Sp(e))?0:1,u=e._rDelay,f=0,h,p,m;if(u&&e._repeat&&(f=Nl(0,e._tDur,t),p=aa(f,u),e._yoyo&&p&1&&(c=1-c),p!==aa(e._tTime,u)&&(a=1-c,e.vars.repeatRefresh&&e._initted&&e.invalidate())),c!==a||Pn||s||e._zTime===Vt||!t&&e._zTime){if(!e._initted&&_v(e,t,s,i,f))return;for(m=e._zTime,e._zTime=t||(i?Vt:0),i||(i=t&&!m),e.ratio=c,e._from&&(c=1-c),e._time=0,e._tTime=f,h=e._pt;h;)h.r(c,h.d),h=h._next;t<0&&yp(e,t,i,!0),e._onUpdate&&!i&&vi(e,"onUpdate"),f&&e._repeat&&!i&&e.parent&&vi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===c&&(c&&vs(e,1),!i&&!Pn&&(vi(e,c?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},wT=function(e,t,i){var s;if(i>t)for(s=e._first;s&&s._start<=i;){if(s.data==="isPause"&&s._start>t)return s;s=s._next}else for(s=e._last;s&&s._start>=i;){if(s.data==="isPause"&&s._start<t)return s;s=s._prev}},la=function(e,t,i,s){var a=e._repeat,c=Jt(t)||0,u=e._tTime/e._tDur;return u&&!s&&(e._time*=c/e._dur),e._dur=c,e._tDur=a?a<0?1e10:Jt(c*(a+1)+e._rDelay*a):c,u>0&&!s&&Zu(e,e._tTime=e._tDur*u),e.parent&&Ku(e),i||no(e.parent,e),e},K1=function(e){return e instanceof Xn?no(e):la(e,e._dur)},ET={_start:0,endTime:vl,totalDuration:vl},Ni=function o(e,t,i){var s=e.labels,a=e._recent||ET,c=e.duration()>=Ui?a.endTime(!1):e._dur,u,f,h;return bn(t)&&(isNaN(t)||t in s)?(f=t.charAt(0),h=t.substr(-1)==="%",u=t.indexOf("="),f==="<"||f===">"?(u>=0&&(t=t.replace(/=/,"")),(f==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(h?(u<0?a:i).totalDuration()/100:1)):u<0?(t in s||(s[t]=c),s[t]):(f=parseFloat(t.charAt(u-1)+t.substr(u+1)),h&&i&&(f=f/100*(Bn(i)?i[0]:i).totalDuration()),u>1?o(e,t.substr(0,u-1),i)+f:c+f)):t==null?c:+t},ul=function(e,t,i){var s=Fr(t[1]),a=(s?2:1)+(e<2?0:1),c=t[a],u,f;if(s&&(c.duration=t[1]),c.parent=i,e){for(u=c,f=i;f&&!("immediateRender"in u);)u=f.vars.defaults||{},f=ii(f.vars.inherit)&&f.parent;c.immediateRender=ii(u.immediateRender),e<2?c.runBackwards=1:c.startAt=t[a-1]}return new fn(t[0],c,t[a+1])},Ss=function(e,t){return e||e===0?t(e):t},Nl=function(e,t,i){return i<e?e:i>t?t:i},kn=function(e,t){return!bn(e)||!(t=hT.exec(e))?"":t[1]},TT=function(e,t,i){return Ss(i,function(s){return Nl(e,t,s)})},Mp=[].slice,vv=function(e,t){return e&&pr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&pr(e[0]))&&!e.nodeType&&e!==ir},bT=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(s){var a;return bn(s)&&!t||vv(s,1)?(a=i).push.apply(a,Fi(s)):i.push(s)})||i},Fi=function(e,t,i){return $t&&!t&&$t.selector?$t.selector(e):bn(e)&&!i&&(vp||!ca())?Mp.call((t||t0).querySelectorAll(e),0):Bn(e)?bT(e,i):vv(e)?Mp.call(e,0):e?[e]:[]},wp=function(e){return e=Fi(e)[0]||_l("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Fi(t,i.querySelectorAll?i:i===e?_l("Invalid scope")||t0.createElement("div"):e)}},xv=function(e){return e.sort(function(){return .5-Math.random()})},yv=function(e){if(rn(e))return e;var t=pr(e)?e:{each:e},i=io(t.ease),s=t.from||0,a=parseFloat(t.base)||0,c={},u=s>0&&s<1,f=isNaN(s)||u,h=t.axis,p=s,m=s;return bn(s)?p=m={center:.5,edges:.5,end:1}[s]||0:!u&&f&&(p=s[0],m=s[1]),function(v,y,w){var S=(w||t).length,x=c[S],_,T,A,b,P,D,I,F,E;if(!x){if(E=t.grid==="auto"?0:(t.grid||[1,Ui])[1],!E){for(I=-Ui;I<(I=w[E++].getBoundingClientRect().left)&&E<S;);E<S&&E--}for(x=c[S]=[],_=f?Math.min(E,S)*p-.5:s%E,T=E===Ui?0:f?S*m/E-.5:s/E|0,I=0,F=Ui,D=0;D<S;D++)A=D%E-_,b=T-(D/E|0),x[D]=P=h?Math.abs(h==="y"?b:A):nv(A*A+b*b),P>I&&(I=P),P<F&&(F=P);s==="random"&&xv(x),x.max=I-F,x.min=F,x.v=S=(parseFloat(t.amount)||parseFloat(t.each)*(E>S?S-1:h?h==="y"?S/E:E:Math.max(E,S/E))||0)*(s==="edges"?-1:1),x.b=S<0?a-S:a,x.u=kn(t.amount||t.each)||0,i=i&&S<0?Pv(i):i}return S=(x[v]-x.min)/x.max||0,Jt(x.b+(i?i(S):S)*x.v)+x.u}},Ep=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var s=Jt(Math.round(parseFloat(i)/e)*e*t);return(s-s%1)/t+(Fr(i)?0:kn(i))}},Sv=function(e,t){var i=Bn(e),s,a;return!i&&pr(e)&&(s=i=e.radius||Ui,e.values?(e=Fi(e.values),(a=!Fr(e[0]))&&(s*=s)):e=Ep(e.increment)),Ss(t,i?rn(e)?function(c){return a=e(c),Math.abs(a-c)<=s?a:c}:function(c){for(var u=parseFloat(a?c.x:c),f=parseFloat(a?c.y:0),h=Ui,p=0,m=e.length,v,y;m--;)a?(v=e[m].x-u,y=e[m].y-f,v=v*v+y*y):v=Math.abs(e[m]-u),v<h&&(h=v,p=m);return p=!s||h<=s?e[p]:c,a||p===c||Fr(c)?p:p+kn(c)}:Ep(e))},Mv=function(e,t,i,s){return Ss(Bn(e)?!t:i===!0?!!(i=0):!s,function(){return Bn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(s=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*s)/s})},AT=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(s){return t.reduce(function(a,c){return c(a)},s)}},CT=function(e,t){return function(i){return e(parseFloat(i))+(t||kn(i))}},RT=function(e,t,i){return Ev(e,t,0,1,i)},wv=function(e,t,i){return Ss(i,function(s){return e[~~t(s)]})},PT=function o(e,t,i){var s=t-e;return Bn(e)?wv(e,o(0,e.length),t):Ss(i,function(a){return(s+(a-e)%s)%s+e})},NT=function o(e,t,i){var s=t-e,a=s*2;return Bn(e)?wv(e,o(0,e.length-1),t):Ss(i,function(c){return c=(a+(c-e)%a)%a||0,e+(c>s?a-c:c)})},xl=function(e){return e.replace(uT,function(t){var i=t.indexOf("[")+1,s=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(dT);return Mv(i?s:+s[0],i?0:+s[1],+s[2]||1e-5)})},Ev=function(e,t,i,s,a){var c=t-e,u=s-i;return Ss(a,function(f){return i+((f-e)/c*u||0)})},LT=function o(e,t,i,s){var a=isNaN(e+t)?0:function(y){return(1-y)*e+y*t};if(!a){var c=bn(e),u={},f,h,p,m,v;if(i===!0&&(s=1)&&(i=null),c)e={p:e},t={p:t};else if(Bn(e)&&!Bn(t)){for(p=[],m=e.length,v=m-2,h=1;h<m;h++)p.push(o(e[h-1],e[h]));m--,a=function(w){w*=m;var S=Math.min(v,~~w);return p[S](w-S)},i=t}else s||(e=oa(Bn(e)?[]:{},e));if(!p){for(f in t)a0.call(u,e,f,"get",t[f]);a=function(w){return d0(w,u)||(c?e.p:e)}}}return Ss(i,a)},Z1=function(e,t,i){var s=e.labels,a=Ui,c,u,f;for(c in s)u=s[c]-t,u<0==!!i&&u&&a>(u=Math.abs(u))&&(f=c,a=u);return f},vi=function(e,t,i){var s=e.vars,a=s[t],c=$t,u=e._ctx,f,h,p;if(a)return f=s[t+"Params"],h=s.callbackScope||e,i&&ms.length&&Du(),u&&($t=u),p=f?a.apply(h,f):a.call(h),$t=c,p},al=function(e){return vs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Pn),e.progress()<1&&vi(e,"onInterrupt"),e},Yo,Tv=[],bv=function(e){if(e)if(e=!e.name&&e.default||e,e0()||e.headless){var t=e.name,i=rn(e),s=t&&!i&&e.init?function(){this._props=[]}:e,a={init:vl,render:d0,add:a0,kill:YT,modifier:qT,rawVars:0},c={targetTest:0,get:0,getSetter:u0,aliases:{},register:0};if(ca(),e!==s){if(mi[t])return;Mi(s,Mi(Iu(e,a),c)),oa(s.prototype,oa(a,Iu(e,c))),mi[s.prop=t]=s,e.targetTest&&(Mu.push(s),i0[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}lv(t,s),e.register&&e.register(ai,s,si)}else Tv.push(e)},Bt=255,ll={aqua:[0,Bt,Bt],lime:[0,Bt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Bt],navy:[0,0,128],white:[Bt,Bt,Bt],olive:[128,128,0],yellow:[Bt,Bt,0],orange:[Bt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Bt,0,0],pink:[Bt,192,203],cyan:[0,Bt,Bt],transparent:[Bt,Bt,Bt,0]},mh=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Bt+.5|0},Av=function(e,t,i){var s=e?Fr(e)?[e>>16,e>>8&Bt,e&Bt]:0:ll.black,a,c,u,f,h,p,m,v,y,w;if(!s){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ll[e])s=ll[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),c=e.charAt(2),u=e.charAt(3),e="#"+a+a+c+c+u+u+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return s=parseInt(e.substr(1,6),16),[s>>16,s>>8&Bt,s&Bt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),s=[e>>16,e>>8&Bt,e&Bt]}else if(e.substr(0,3)==="hsl"){if(s=w=e.match(X1),!t)f=+s[0]%360/360,h=+s[1]/100,p=+s[2]/100,c=p<=.5?p*(h+1):p+h-p*h,a=p*2-c,s.length>3&&(s[3]*=1),s[0]=mh(f+1/3,a,c),s[1]=mh(f,a,c),s[2]=mh(f-1/3,a,c);else if(~e.indexOf("="))return s=e.match(rv),i&&s.length<4&&(s[3]=1),s}else s=e.match(X1)||ll.transparent;s=s.map(Number)}return t&&!w&&(a=s[0]/Bt,c=s[1]/Bt,u=s[2]/Bt,m=Math.max(a,c,u),v=Math.min(a,c,u),p=(m+v)/2,m===v?f=h=0:(y=m-v,h=p>.5?y/(2-m-v):y/(m+v),f=m===a?(c-u)/y+(c<u?6:0):m===c?(u-a)/y+2:(a-c)/y+4,f*=60),s[0]=~~(f+.5),s[1]=~~(h*100+.5),s[2]=~~(p*100+.5)),i&&s.length<4&&(s[3]=1),s},Cv=function(e){var t=[],i=[],s=-1;return e.split(gs).forEach(function(a){var c=a.match(qo)||[];t.push.apply(t,c),i.push(s+=c.length+1)}),t.c=i,t},Q1=function(e,t,i){var s="",a=(e+s).match(gs),c=t?"hsla(":"rgba(",u=0,f,h,p,m;if(!a)return e;if(a=a.map(function(v){return(v=Av(v,t,1))&&c+(t?v[0]+","+v[1]+"%,"+v[2]+"%,"+v[3]:v.join(","))+")"}),i&&(p=Cv(e),f=i.c,f.join(s)!==p.c.join(s)))for(h=e.replace(gs,"1").split(qo),m=h.length-1;u<m;u++)s+=h[u]+(~f.indexOf(u)?a.shift()||c+"0,0,0,0)":(p.length?p:a.length?a:i).shift());if(!h)for(h=e.split(gs),m=h.length-1;u<m;u++)s+=h[u]+a[u];return s+h[m]},gs=(function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ll)o+="|"+e+"\\b";return new RegExp(o+")","gi")})(),DT=/hsl[a]?\(/,Rv=function(e){var t=e.join(" "),i;if(gs.lastIndex=0,gs.test(t))return i=DT.test(t),e[1]=Q1(e[1],i),e[0]=Q1(e[0],i,Cv(e[1])),!0},yl,_i=(function(){var o=Date.now,e=500,t=33,i=o(),s=i,a=1e3/240,c=a,u=[],f,h,p,m,v,y,w=function S(x){var _=o()-s,T=x===!0,A,b,P,D;if((_>e||_<0)&&(i+=_-t),s+=_,P=s-i,A=P-c,(A>0||T)&&(D=++m.frame,v=P-m.time*1e3,m.time=P=P/1e3,c+=A+(A>=a?4:a-A),b=1),T||(f=h(S)),b)for(y=0;y<u.length;y++)u[y](P,v,D,x)};return m={time:0,frame:0,tick:function(){w(!0)},deltaRatio:function(x){return v/(1e3/(x||60))},wake:function(){ov&&(!vp&&e0()&&(ir=vp=window,t0=ir.document||{},Si.gsap=ai,(ir.gsapVersions||(ir.gsapVersions=[])).push(ai.version),av(Lu||ir.GreenSockGlobals||!ir.gsap&&ir||{}),Tv.forEach(bv)),p=typeof requestAnimationFrame<"u"&&requestAnimationFrame,f&&m.sleep(),h=p||function(x){return setTimeout(x,c-m.time*1e3+1|0)},yl=1,w(2))},sleep:function(){(p?cancelAnimationFrame:clearTimeout)(f),yl=0,h=vl},lagSmoothing:function(x,_){e=x||1/0,t=Math.min(_||33,e)},fps:function(x){a=1e3/(x||240),c=m.time*1e3+a},add:function(x,_,T){var A=_?function(b,P,D,I){x(b,P,D,I),m.remove(A)}:x;return m.remove(x),u[T?"unshift":"push"](A),ca(),A},remove:function(x,_){~(_=u.indexOf(x))&&u.splice(_,1)&&y>=_&&y--},_listeners:u},m})(),ca=function(){return!yl&&_i.wake()},St={},IT=/^[\d.\-M][\d.\-,\s]/,UT=/["']/g,FT=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),s=i[0],a=1,c=i.length,u,f,h;a<c;a++)f=i[a],u=a!==c-1?f.lastIndexOf(","):f.length,h=f.substr(0,u),t[s]=isNaN(h)?h.replace(UT,"").trim():+h,s=f.substr(u+1).trim();return t},OT=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),s=e.indexOf("(",t);return e.substring(t,~s&&s<i?e.indexOf(")",i+1):i)},kT=function(e){var t=(e+"").split("("),i=St[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[FT(t[1])]:OT(e).split(",").map(fv)):St._CE&&IT.test(e)?St._CE("",e):i},Pv=function(e){return function(t){return 1-e(1-t)}},Nv=function o(e,t){for(var i=e._first,s;i;)i instanceof Xn?o(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?o(i.timeline,t):(s=i._ease,i._ease=i._yEase,i._yEase=s,i._yoyo=t)),i=i._next},io=function(e,t){return e&&(rn(e)?e:St[e]||kT(e))||t},ao=function(e,t,i,s){i===void 0&&(i=function(f){return 1-t(1-f)}),s===void 0&&(s=function(f){return f<.5?t(f*2)/2:1-t((1-f)*2)/2});var a={easeIn:t,easeOut:i,easeInOut:s},c;return ri(e,function(u){St[u]=Si[u]=a,St[c=u.toLowerCase()]=i;for(var f in a)St[c+(f==="easeIn"?".in":f==="easeOut"?".out":".inOut")]=St[u+"."+f]=a[f]}),a},Lv=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},gh=function o(e,t,i){var s=t>=1?t:1,a=(i||(e?.3:.45))/(t<1?t:1),c=a/_p*(Math.asin(1/s)||0),u=function(p){return p===1?1:s*Math.pow(2,-10*p)*cT((p-c)*a)+1},f=e==="out"?u:e==="in"?function(h){return 1-u(1-h)}:Lv(u);return a=_p/a,f.config=function(h,p){return o(e,h,p)},f},_h=function o(e,t){t===void 0&&(t=1.70158);var i=function(c){return c?--c*c*((t+1)*c+t)+1:0},s=e==="out"?i:e==="in"?function(a){return 1-i(1-a)}:Lv(i);return s.config=function(a){return o(e,a)},s};ri("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;ao(o+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});St.Linear.easeNone=St.none=St.Linear.easeIn;ao("Elastic",gh("in"),gh("out"),gh());(function(o,e){var t=1/e,i=2*t,s=2.5*t,a=function(u){return u<t?o*u*u:u<i?o*Math.pow(u-1.5/e,2)+.75:u<s?o*(u-=2.25/e)*u+.9375:o*Math.pow(u-2.625/e,2)+.984375};ao("Bounce",function(c){return 1-a(1-c)},a)})(7.5625,2.75);ao("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});ao("Circ",function(o){return-(nv(1-o*o)-1)});ao("Sine",function(o){return o===1?1:-lT(o*oT)+1});ao("Back",_h("in"),_h("out"),_h());St.SteppedEase=St.steps=Si.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,s=e+(t?0:1),a=t?1:0,c=1-Vt;return function(u){return((s*Nl(0,c,u)|0)+a)*i}}};sa.ease=St["quad.out"];ri("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return r0+=o+","+o+"Params,"});var Dv=function(e,t){this.id=aT++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:uv,this.set=t?t.getSetter:u0},Sl=(function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,la(this,+t.duration,1,1),this.data=t.data,$t&&(this._ctx=$t,$t.data.push(this)),yl||_i.wake()}var e=o.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,la(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,s){if(ca(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(Zu(this,i),!a._dp||a.parent||mv(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&or(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===Vt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),dv(this,i,s)),this},e.time=function(i,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+$1(this))%(this._dur+this._rDelay)||(i?this._dur:0),s):this._time},e.totalProgress=function(i,s){return arguments.length?this.totalTime(this.totalDuration()*i,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+$1(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,s){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*a,s):this._repeat?aa(this._tTime,a)+1:1},e.timeScale=function(i,s){if(!arguments.length)return this._rts===-Vt?0:this._rts;if(this._rts===i)return this;var a=this.parent&&this._ts?Uu(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Vt?0:this._rts,this.totalTime(Nl(-Math.abs(this._delay),this.totalDuration(),a),s!==!1),Ku(this),xT(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ca(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Vt&&(this._tTime-=Vt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Jt(i);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&or(s,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ii(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var s=this.parent||this._dp;return s?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Uu(s.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=mT);var s=Pn;return Pn=i,o0(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Pn=s,this},e.globalTime=function(i){for(var s=this,a=arguments.length?i:s.rawTime();s;)a=s._start+a/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(i):a},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,K1(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var s=this._time;return this._rDelay=i,K1(this),s?this.time(s):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,s){return this.totalTime(Ni(this,i),ii(s))},e.restart=function(i,s){return this.play().totalTime(i?-this._delay:0,ii(s)),this._dur||(this._zTime=-Vt),this},e.play=function(i,s){return i!=null&&this.seek(i,s),this.reversed(!1).paused(!1)},e.reverse=function(i,s){return i!=null&&this.seek(i||this.totalDuration(),s),this.reversed(!0).paused(!1)},e.pause=function(i,s){return i!=null&&this.seek(i,s),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Vt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Vt,this},e.isActive=function(){var i=this.parent||this._dp,s=this._start,a;return!!(!i||this._ts&&this._initted&&i.isActive()&&(a=i.rawTime(!0))>=s&&a<this.endTime(!0)-Vt)},e.eventCallback=function(i,s,a){var c=this.vars;return arguments.length>1?(s?(c[i]=s,a&&(c[i+"Params"]=a),i==="onUpdate"&&(this._onUpdate=s)):delete c[i],this):c[i]},e.then=function(i){var s=this,a=s._prom;return new Promise(function(c){var u=rn(i)?i:hv,f=function(){var p=s.then;s.then=null,a&&a(),rn(u)&&(u=u(s))&&(u.then||u===s)&&(s.then=p),c(u),s.then=p};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?f():s._prom=f})},e.kill=function(){al(this)},o})();Mi(Sl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Vt,_prom:0,_ps:!1,_rts:1});var Xn=(function(o){tv(e,o);function e(i,s){var a;return i===void 0&&(i={}),a=o.call(this,i)||this,a.labels={},a.smoothChildTiming=!!i.smoothChildTiming,a.autoRemoveChildren=!!i.autoRemoveChildren,a._sort=ii(i.sortChildren),en&&or(i.parent||en,Cr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),i.scrollTrigger&&gv(Cr(a),i.scrollTrigger),a}var t=e.prototype;return t.to=function(s,a,c){return ul(0,arguments,this),this},t.from=function(s,a,c){return ul(1,arguments,this),this},t.fromTo=function(s,a,c,u){return ul(2,arguments,this),this},t.set=function(s,a,c){return a.duration=0,a.parent=this,cl(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new fn(s,a,Ni(this,c),1),this},t.call=function(s,a,c){return or(this,fn.delayedCall(0,s,a),c)},t.staggerTo=function(s,a,c,u,f,h,p){return c.duration=a,c.stagger=c.stagger||u,c.onComplete=h,c.onCompleteParams=p,c.parent=this,new fn(s,c,Ni(this,f)),this},t.staggerFrom=function(s,a,c,u,f,h,p){return c.runBackwards=1,cl(c).immediateRender=ii(c.immediateRender),this.staggerTo(s,a,c,u,f,h,p)},t.staggerFromTo=function(s,a,c,u,f,h,p,m){return u.startAt=c,cl(u).immediateRender=ii(u.immediateRender),this.staggerTo(s,a,u,f,h,p,m)},t.render=function(s,a,c){var u=this._time,f=this._dirty?this.totalDuration():this._tDur,h=this._dur,p=s<=0?0:Jt(s),m=this._zTime<0!=s<0&&(this._initted||!h),v,y,w,S,x,_,T,A,b,P,D,I;if(this!==en&&p>f&&s>=0&&(p=f),p!==this._tTime||c||m){if(u!==this._time&&h&&(p+=this._time-u,s+=this._time-u),v=p,b=this._start,A=this._ts,_=!A,m&&(h||(u=this._zTime),(s||!a)&&(this._zTime=s)),this._repeat){if(D=this._yoyo,x=h+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(x*100+s,a,c);if(v=Jt(p%x),p===f?(S=this._repeat,v=h):(P=Jt(p/x),S=~~P,S&&S===P&&(v=h,S--),v>h&&(v=h)),P=aa(this._tTime,x),!u&&this._tTime&&P!==S&&this._tTime-P*x-this._dur<=0&&(P=S),D&&S&1&&(v=h-v,I=1),S!==P&&!this._lock){var F=D&&P&1,E=F===(D&&S&1);if(S<P&&(F=!F),u=F?0:p%h?h:p,this._lock=1,this.render(u||(I?0:Jt(S*x)),a,!h)._lock=0,this._tTime=p,!a&&this.parent&&vi(this,"onRepeat"),this.vars.repeatRefresh&&!I&&(this.invalidate()._lock=1,P=S),u&&u!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,f=this._tDur,E&&(this._lock=2,u=F?h:-1e-4,this.render(u,!0),this.vars.repeatRefresh&&!I&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;Nv(this,I)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(T=wT(this,Jt(u),Jt(v)),T&&(p-=v-(v=T._start))),this._tTime=p,this._time=v,this._act=!A,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,u=0),!u&&p&&h&&!a&&!P&&(vi(this,"onStart"),this._tTime!==p))return this;if(v>=u&&s>=0)for(y=this._first;y;){if(w=y._next,(y._act||v>=y._start)&&y._ts&&T!==y){if(y.parent!==this)return this.render(s,a,c);if(y.render(y._ts>0?(v-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(v-y._start)*y._ts,a,c),v!==this._time||!this._ts&&!_){T=0,w&&(p+=this._zTime=-Vt);break}}y=w}else{y=this._last;for(var L=s<0?s:v;y;){if(w=y._prev,(y._act||L<=y._end)&&y._ts&&T!==y){if(y.parent!==this)return this.render(s,a,c);if(y.render(y._ts>0?(L-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(L-y._start)*y._ts,a,c||Pn&&o0(y)),v!==this._time||!this._ts&&!_){T=0,w&&(p+=this._zTime=L?-Vt:Vt);break}}y=w}}if(T&&!a&&(this.pause(),T.render(v>=u?0:-Vt)._zTime=v>=u?1:-1,this._ts))return this._start=b,Ku(this),this.render(s,a,c);this._onUpdate&&!a&&vi(this,"onUpdate",!0),(p===f&&this._tTime>=this.totalDuration()||!p&&u)&&(b===this._start||Math.abs(A)!==Math.abs(this._ts))&&(this._lock||((s||!h)&&(p===f&&this._ts>0||!p&&this._ts<0)&&vs(this,1),!a&&!(s<0&&!u)&&(p||u||!f)&&(vi(this,p===f&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(p<f&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(s,a){var c=this;if(Fr(a)||(a=Ni(this,a,s)),!(s instanceof Sl)){if(Bn(s))return s.forEach(function(u){return c.add(u,a)}),this;if(bn(s))return this.addLabel(s,a);if(rn(s))s=fn.delayedCall(0,s);else return this}return this!==s?or(this,s,a):this},t.getChildren=function(s,a,c,u){s===void 0&&(s=!0),a===void 0&&(a=!0),c===void 0&&(c=!0),u===void 0&&(u=-Ui);for(var f=[],h=this._first;h;)h._start>=u&&(h instanceof fn?a&&f.push(h):(c&&f.push(h),s&&f.push.apply(f,h.getChildren(!0,a,c)))),h=h._next;return f},t.getById=function(s){for(var a=this.getChildren(1,1,1),c=a.length;c--;)if(a[c].vars.id===s)return a[c]},t.remove=function(s){return bn(s)?this.removeLabel(s):rn(s)?this.killTweensOf(s):(s.parent===this&&$u(this,s),s===this._recent&&(this._recent=this._last),no(this))},t.totalTime=function(s,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Jt(_i.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),o.prototype.totalTime.call(this,s,a),this._forcing=0,this):this._tTime},t.addLabel=function(s,a){return this.labels[s]=Ni(this,a),this},t.removeLabel=function(s){return delete this.labels[s],this},t.addPause=function(s,a,c){var u=fn.delayedCall(0,a||vl,c);return u.data="isPause",this._hasPause=1,or(this,u,Ni(this,s))},t.removePause=function(s){var a=this._first;for(s=Ni(this,s);a;)a._start===s&&a.data==="isPause"&&vs(a),a=a._next},t.killTweensOf=function(s,a,c){for(var u=this.getTweensOf(s,c),f=u.length;f--;)fs!==u[f]&&u[f].kill(s,a);return this},t.getTweensOf=function(s,a){for(var c=[],u=Fi(s),f=this._first,h=Fr(a),p;f;)f instanceof fn?gT(f._targets,u)&&(h?(!fs||f._initted&&f._ts)&&f.globalTime(0)<=a&&f.globalTime(f.totalDuration())>a:!a||f.isActive())&&c.push(f):(p=f.getTweensOf(u,a)).length&&c.push.apply(c,p),f=f._next;return c},t.tweenTo=function(s,a){a=a||{};var c=this,u=Ni(c,s),f=a,h=f.startAt,p=f.onStart,m=f.onStartParams,v=f.immediateRender,y,w=fn.to(c,Mi({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:u,overwrite:"auto",duration:a.duration||Math.abs((u-(h&&"time"in h?h.time:c._time))/c.timeScale())||Vt,onStart:function(){if(c.pause(),!y){var x=a.duration||Math.abs((u-(h&&"time"in h?h.time:c._time))/c.timeScale());w._dur!==x&&la(w,x,0,1).render(w._time,!0,!0),y=1}p&&p.apply(w,m||[])}},a));return v?w.render(0):w},t.tweenFromTo=function(s,a,c){return this.tweenTo(a,Mi({startAt:{time:Ni(this,s)}},c))},t.recent=function(){return this._recent},t.nextLabel=function(s){return s===void 0&&(s=this._time),Z1(this,Ni(this,s))},t.previousLabel=function(s){return s===void 0&&(s=this._time),Z1(this,Ni(this,s),1)},t.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+Vt)},t.shiftChildren=function(s,a,c){c===void 0&&(c=0);var u=this._first,f=this.labels,h;for(s=Jt(s);u;)u._start>=c&&(u._start+=s,u._end+=s),u=u._next;if(a)for(h in f)f[h]>=c&&(f[h]+=s);return no(this)},t.invalidate=function(s){var a=this._first;for(this._lock=0;a;)a.invalidate(s),a=a._next;return o.prototype.invalidate.call(this,s)},t.clear=function(s){s===void 0&&(s=!0);for(var a=this._first,c;a;)c=a._next,this.remove(a),a=c;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),no(this)},t.totalDuration=function(s){var a=0,c=this,u=c._last,f=Ui,h,p,m;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-s:s));if(c._dirty){for(m=c.parent;u;)h=u._prev,u._dirty&&u.totalDuration(),p=u._start,p>f&&c._sort&&u._ts&&!c._lock?(c._lock=1,or(c,u,p-u._delay,1)._lock=0):f=p,p<0&&u._ts&&(a-=p,(!m&&!c._dp||m&&m.smoothChildTiming)&&(c._start+=Jt(p/c._ts),c._time-=p,c._tTime-=p),c.shiftChildren(-p,!1,-1/0),f=0),u._end>a&&u._ts&&(a=u._end),u=h;la(c,c===en&&c._time>a?c._time:a,1,1),c._dirty=0}return c._tDur},e.updateRoot=function(s){if(en._ts&&(dv(en,Uu(s,en)),cv=_i.frame),_i.frame>=q1){q1+=yi.autoSleep||120;var a=en._first;if((!a||!a._ts)&&yi.autoSleep&&_i._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||_i.sleep()}}},e})(Sl);Mi(Xn.prototype,{_lock:0,_hasPause:0,_forcing:0});var zT=function(e,t,i,s,a,c,u){var f=new si(this._pt,e,t,0,1,zv,null,a),h=0,p=0,m,v,y,w,S,x,_,T;for(f.b=i,f.e=s,i+="",s+="",(_=~s.indexOf("random("))&&(s=xl(s)),c&&(T=[i,s],c(T,e,t),i=T[0],s=T[1]),v=i.match(hh)||[];m=hh.exec(s);)w=m[0],S=s.substring(h,m.index),y?y=(y+1)%5:S.substr(-5)==="rgba("&&(y=1),w!==v[p++]&&(x=parseFloat(v[p-1])||0,f._pt={_next:f._pt,p:S||p===1?S:",",s:x,c:w.charAt(1)==="="?Zo(x,w)-x:parseFloat(w)-x,m:y&&y<4?Math.round:0},h=hh.lastIndex);return f.c=h<s.length?s.substring(h,s.length):"",f.fp=u,(sv.test(s)||_)&&(f.e=0),this._pt=f,f},a0=function(e,t,i,s,a,c,u,f,h,p){rn(s)&&(s=s(a||0,e,c));var m=e[t],v=i!=="get"?i:rn(m)?h?e[t.indexOf("set")||!rn(e["get"+t.substr(3)])?t:"get"+t.substr(3)](h):e[t]():m,y=rn(m)?h?WT:Ov:c0,w;if(bn(s)&&(~s.indexOf("random(")&&(s=xl(s)),s.charAt(1)==="="&&(w=Zo(v,s)+(kn(v)||0),(w||w===0)&&(s=w))),!p||v!==s||Tp)return!isNaN(v*s)&&s!==""?(w=new si(this._pt,e,t,+v||0,s-(v||0),typeof m=="boolean"?XT:kv,0,y),h&&(w.fp=h),u&&w.modifier(u,this,e),this._pt=w):(!m&&!(t in e)&&n0(t,s),zT.call(this,e,t,v,s,y,f||yi.stringFilter,h))},BT=function(e,t,i,s,a){if(rn(e)&&(e=dl(e,a,t,i,s)),!pr(e)||e.style&&e.nodeType||Bn(e)||iv(e))return bn(e)?dl(e,a,t,i,s):e;var c={},u;for(u in e)c[u]=dl(e[u],a,t,i,s);return c},Iv=function(e,t,i,s,a,c){var u,f,h,p;if(mi[e]&&(u=new mi[e]).init(a,u.rawVars?t[e]:BT(t[e],s,a,c,i),i,s,c)!==!1&&(i._pt=f=new si(i._pt,a,e,0,1,u.render,u,0,u.priority),i!==Yo))for(h=i._ptLookup[i._targets.indexOf(a)],p=u._props.length;p--;)h[u._props[p]]=f;return u},fs,Tp,l0=function o(e,t,i){var s=e.vars,a=s.ease,c=s.startAt,u=s.immediateRender,f=s.lazy,h=s.onUpdate,p=s.runBackwards,m=s.yoyoEase,v=s.keyframes,y=s.autoRevert,w=e._dur,S=e._startAt,x=e._targets,_=e.parent,T=_&&_.data==="nested"?_.vars.targets:x,A=e._overwrite==="auto"&&!Qp,b=e.timeline,P,D,I,F,E,L,k,W,V,J,ee,Q,Y;if(b&&(!v||!a)&&(a="none"),e._ease=io(a,sa.ease),e._yEase=m?Pv(io(m===!0?a:m,sa.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!b&&!!s.runBackwards,!b||v&&!s.stagger){if(W=x[0]?to(x[0]).harness:0,Q=W&&s[W.prop],P=Iu(s,i0),S&&(S._zTime<0&&S.progress(1),t<0&&p&&u&&!y?S.render(-1,!0):S.revert(p&&w?Su:pT),S._lazy=0),c){if(vs(e._startAt=fn.set(x,Mi({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!S&&ii(f),startAt:null,delay:0,onUpdate:h&&function(){return vi(e,"onUpdate")},stagger:0},c))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Pn||!u&&!y)&&e._startAt.revert(Su),u&&w&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(p&&w&&!S){if(t&&(u=!1),I=Mi({overwrite:!1,data:"isFromStart",lazy:u&&!S&&ii(f),immediateRender:u,stagger:0,parent:_},P),Q&&(I[W.prop]=Q),vs(e._startAt=fn.set(x,I)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Pn?e._startAt.revert(Su):e._startAt.render(-1,!0)),e._zTime=t,!u)o(e._startAt,Vt,Vt);else if(!t)return}for(e._pt=e._ptCache=0,f=w&&ii(f)||f&&!w,D=0;D<x.length;D++){if(E=x[D],k=E._gsap||s0(x)[D]._gsap,e._ptLookup[D]=J={},xp[k.id]&&ms.length&&Du(),ee=T===x?D:T.indexOf(E),W&&(V=new W).init(E,Q||P,e,ee,T)!==!1&&(e._pt=F=new si(e._pt,E,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(q){J[q]=F}),V.priority&&(L=1)),!W||Q)for(I in P)mi[I]&&(V=Iv(I,P,e,ee,E,T))?V.priority&&(L=1):J[I]=F=a0.call(e,E,I,"get",P[I],ee,T,0,s.stringFilter);e._op&&e._op[D]&&e.kill(E,e._op[D]),A&&e._pt&&(fs=e,en.killTweensOf(E,J,e.globalTime(t)),Y=!e.parent,fs=0),e._pt&&f&&(xp[k.id]=1)}L&&Bv(e),e._onInit&&e._onInit(e)}e._onUpdate=h,e._initted=(!e._op||e._pt)&&!Y,v&&t<=0&&b.render(Ui,!0,!0)},VT=function(e,t,i,s,a,c,u,f){var h=(e._pt&&e._ptCache||(e._ptCache={}))[t],p,m,v,y;if(!h)for(h=e._ptCache[t]=[],v=e._ptLookup,y=e._targets.length;y--;){if(p=v[y][t],p&&p.d&&p.d._pt)for(p=p.d._pt;p&&p.p!==t&&p.fp!==t;)p=p._next;if(!p)return Tp=1,e.vars[t]="+=0",l0(e,u),Tp=0,f?_l(t+" not eligible for reset"):1;h.push(p)}for(y=h.length;y--;)m=h[y],p=m._pt||m,p.s=(s||s===0)&&!a?s:p.s+(s||0)+c*p.c,p.c=i-p.s,m.e&&(m.e=ln(i)+kn(m.e)),m.b&&(m.b=p.s+kn(m.b))},HT=function(e,t){var i=e[0]?to(e[0]).harness:0,s=i&&i.aliases,a,c,u,f;if(!s)return t;a=oa({},t);for(c in s)if(c in a)for(f=s[c].split(","),u=f.length;u--;)a[f[u]]=a[c];return a},GT=function(e,t,i,s){var a=t.ease||s||"power1.inOut",c,u;if(Bn(t))u=i[e]||(i[e]=[]),t.forEach(function(f,h){return u.push({t:h/(t.length-1)*100,v:f,e:a})});else for(c in t)u=i[c]||(i[c]=[]),c==="ease"||u.push({t:parseFloat(e),v:t[c],e:a})},dl=function(e,t,i,s,a){return rn(e)?e.call(t,i,s,a):bn(e)&&~e.indexOf("random(")?xl(e):e},Uv=r0+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Fv={};ri(Uv+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return Fv[o]=1});var fn=(function(o){tv(e,o);function e(i,s,a,c){var u;typeof s=="number"&&(a.duration=s,s=a,a=null),u=o.call(this,c?s:cl(s))||this;var f=u.vars,h=f.duration,p=f.delay,m=f.immediateRender,v=f.stagger,y=f.overwrite,w=f.keyframes,S=f.defaults,x=f.scrollTrigger,_=f.yoyoEase,T=s.parent||en,A=(Bn(i)||iv(i)?Fr(i[0]):"length"in s)?[i]:Fi(i),b,P,D,I,F,E,L,k;if(u._targets=A.length?s0(A):_l("GSAP target "+i+" not found. https://gsap.com",!yi.nullTargetWarn)||[],u._ptLookup=[],u._overwrite=y,w||v||hu(h)||hu(p)){if(s=u.vars,b=u.timeline=new Xn({data:"nested",defaults:S||{},targets:T&&T.data==="nested"?T.vars.targets:A}),b.kill(),b.parent=b._dp=Cr(u),b._start=0,v||hu(h)||hu(p)){if(I=A.length,L=v&&yv(v),pr(v))for(F in v)~Uv.indexOf(F)&&(k||(k={}),k[F]=v[F]);for(P=0;P<I;P++)D=Iu(s,Fv),D.stagger=0,_&&(D.yoyoEase=_),k&&oa(D,k),E=A[P],D.duration=+dl(h,Cr(u),P,E,A),D.delay=(+dl(p,Cr(u),P,E,A)||0)-u._delay,!v&&I===1&&D.delay&&(u._delay=p=D.delay,u._start+=p,D.delay=0),b.to(E,D,L?L(P,E,A):0),b._ease=St.none;b.duration()?h=p=0:u.timeline=0}else if(w){cl(Mi(b.vars.defaults,{ease:"none"})),b._ease=io(w.ease||s.ease||"none");var W=0,V,J,ee;if(Bn(w))w.forEach(function(Q){return b.to(A,Q,">")}),b.duration();else{D={};for(F in w)F==="ease"||F==="easeEach"||GT(F,w[F],D,w.easeEach);for(F in D)for(V=D[F].sort(function(Q,Y){return Q.t-Y.t}),W=0,P=0;P<V.length;P++)J=V[P],ee={ease:J.e,duration:(J.t-(P?V[P-1].t:0))/100*h},ee[F]=J.v,b.to(A,ee,W),W+=ee.duration;b.duration()<h&&b.to({},{duration:h-b.duration()})}}h||u.duration(h=b.duration())}else u.timeline=0;return y===!0&&!Qp&&(fs=Cr(u),en.killTweensOf(A),fs=0),or(T,Cr(u),a),s.reversed&&u.reverse(),s.paused&&u.paused(!0),(m||!h&&!w&&u._start===Jt(T._time)&&ii(m)&&yT(Cr(u))&&T.data!=="nested")&&(u._tTime=-Vt,u.render(Math.max(0,-p)||0)),x&&gv(Cr(u),x),u}var t=e.prototype;return t.render=function(s,a,c){var u=this._time,f=this._tDur,h=this._dur,p=s<0,m=s>f-Vt&&!p?f:s<Vt?0:s,v,y,w,S,x,_,T,A,b;if(!h)MT(this,s,a,c);else if(m!==this._tTime||!s||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==p||this._lazy){if(v=m,A=this.timeline,this._repeat){if(S=h+this._rDelay,this._repeat<-1&&p)return this.totalTime(S*100+s,a,c);if(v=Jt(m%S),m===f?(w=this._repeat,v=h):(x=Jt(m/S),w=~~x,w&&w===x?(v=h,w--):v>h&&(v=h)),_=this._yoyo&&w&1,_&&(b=this._yEase,v=h-v),x=aa(this._tTime,S),v===u&&!c&&this._initted&&w===x)return this._tTime=m,this;w!==x&&(A&&this._yEase&&Nv(A,_),this.vars.repeatRefresh&&!_&&!this._lock&&v!==S&&this._initted&&(this._lock=c=1,this.render(Jt(S*w),!0).invalidate()._lock=0))}if(!this._initted){if(_v(this,p?s:v,c,a,m))return this._tTime=0,this;if(u!==this._time&&!(c&&this.vars.repeatRefresh&&w!==x))return this;if(h!==this._dur)return this.render(s,a,c)}if(this._tTime=m,this._time=v,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=T=(b||this._ease)(v/h),this._from&&(this.ratio=T=1-T),!u&&m&&!a&&!x&&(vi(this,"onStart"),this._tTime!==m))return this;for(y=this._pt;y;)y.r(T,y.d),y=y._next;A&&A.render(s<0?s:A._dur*A._ease(v/this._dur),a,c)||this._startAt&&(this._zTime=s),this._onUpdate&&!a&&(p&&yp(this,s,a,c),vi(this,"onUpdate")),this._repeat&&w!==x&&this.vars.onRepeat&&!a&&this.parent&&vi(this,"onRepeat"),(m===this._tDur||!m)&&this._tTime===m&&(p&&!this._onUpdate&&yp(this,s,!0,!0),(s||!h)&&(m===this._tDur&&this._ts>0||!m&&this._ts<0)&&vs(this,1),!a&&!(p&&!u)&&(m||u||_)&&(vi(this,m===f?"onComplete":"onReverseComplete",!0),this._prom&&!(m<f&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),o.prototype.invalidate.call(this,s)},t.resetTo=function(s,a,c,u,f){yl||_i.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),p;return this._initted||l0(this,h),p=this._ease(h/this._dur),VT(this,s,a,c,u,p,h,f)?this.resetTo(s,a,c,u,1):(Zu(this,0),this.parent||pv(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(s,a){if(a===void 0&&(a="all"),!s&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?al(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Pn),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(s,a,fs&&fs.vars.overwrite!==!0)._first||al(this),this.parent&&c!==this.timeline.totalDuration()&&la(this,this._dur*this.timeline._tDur/c,0,1),this}var u=this._targets,f=s?Fi(s):u,h=this._ptLookup,p=this._pt,m,v,y,w,S,x,_;if((!a||a==="all")&&vT(u,f))return a==="all"&&(this._pt=0),al(this);for(m=this._op=this._op||[],a!=="all"&&(bn(a)&&(S={},ri(a,function(T){return S[T]=1}),a=S),a=HT(u,a)),_=u.length;_--;)if(~f.indexOf(u[_])){v=h[_],a==="all"?(m[_]=a,w=v,y={}):(y=m[_]=m[_]||{},w=a);for(S in w)x=v&&v[S],x&&((!("kill"in x.d)||x.d.kill(S)===!0)&&$u(this,x,"_pt"),delete v[S]),y!=="all"&&(y[S]=1)}return this._initted&&!this._pt&&p&&al(this),this},e.to=function(s,a){return new e(s,a,arguments[2])},e.from=function(s,a){return ul(1,arguments)},e.delayedCall=function(s,a,c,u){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:a,onReverseComplete:a,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:u})},e.fromTo=function(s,a,c){return ul(2,arguments)},e.set=function(s,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(s,a)},e.killTweensOf=function(s,a,c){return en.killTweensOf(s,a,c)},e})(Sl);Mi(fn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ri("staggerTo,staggerFrom,staggerFromTo",function(o){fn[o]=function(){var e=new Xn,t=Mp.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var c0=function(e,t,i){return e[t]=i},Ov=function(e,t,i){return e[t](i)},WT=function(e,t,i,s){return e[t](s.fp,i)},jT=function(e,t,i){return e.setAttribute(t,i)},u0=function(e,t){return rn(e[t])?Ov:Jp(e[t])&&e.setAttribute?jT:c0},kv=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},XT=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},zv=function(e,t){var i=t._pt,s="";if(!e&&t.b)s=t.b;else if(e===1&&t.e)s=t.e;else{for(;i;)s=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+s,i=i._next;s+=t.c}t.set(t.t,t.p,s,t)},d0=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},qT=function(e,t,i,s){for(var a=this._pt,c;a;)c=a._next,a.p===s&&a.modifier(e,t,i),a=c},YT=function(e){for(var t=this._pt,i,s;t;)s=t._next,t.p===e&&!t.op||t.op===e?$u(this,t,"_pt"):t.dep||(i=1),t=s;return!i},$T=function(e,t,i,s){s.mSet(e,t,s.m.call(s.tween,i,s.mt),s)},Bv=function(e){for(var t=e._pt,i,s,a,c;t;){for(i=t._next,s=a;s&&s.pr>t.pr;)s=s._next;(t._prev=s?s._prev:c)?t._prev._next=t:a=t,(t._next=s)?s._prev=t:c=t,t=i}e._pt=a},si=(function(){function o(t,i,s,a,c,u,f,h,p){this.t=i,this.s=a,this.c=c,this.p=s,this.r=u||kv,this.d=f||this,this.set=h||c0,this.pr=p||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(i,s,a){this.mSet=this.mSet||this.set,this.set=$T,this.m=i,this.mt=a,this.tween=s},o})();ri(r0+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return i0[o]=1});Si.TweenMax=Si.TweenLite=fn;Si.TimelineLite=Si.TimelineMax=Xn;en=new Xn({sortChildren:!1,defaults:sa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});yi.stringFilter=Rv;var ro=[],wu={},KT=[],J1=0,ZT=0,vh=function(e){return(wu[e]||KT).map(function(t){return t()})},bp=function(){var e=Date.now(),t=[];e-J1>2&&(vh("matchMediaInit"),ro.forEach(function(i){var s=i.queries,a=i.conditions,c,u,f,h;for(u in s)c=ir.matchMedia(s[u]).matches,c&&(f=1),c!==a[u]&&(a[u]=c,h=1);h&&(i.revert(),f&&t.push(i))}),vh("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(s){return i.add(null,s)})}),J1=e,vh("matchMedia"))},Vv=(function(){function o(t,i){this.selector=i&&wp(i),this.data=[],this._r=[],this.isReverted=!1,this.id=ZT++,t&&this.add(t)}var e=o.prototype;return e.add=function(i,s,a){rn(i)&&(a=s,s=i,i=rn);var c=this,u=function(){var h=$t,p=c.selector,m;return h&&h!==c&&h.data.push(c),a&&(c.selector=wp(a)),$t=c,m=s.apply(c,arguments),rn(m)&&c._r.push(m),$t=h,c.selector=p,c.isReverted=!1,m};return c.last=u,i===rn?u(c,function(f){return c.add(null,f)}):i?c[i]=u:u},e.ignore=function(i){var s=$t;$t=null,i(this),$t=s},e.getTweens=function(){var i=[];return this.data.forEach(function(s){return s instanceof o?i.push.apply(i,s.getTweens()):s instanceof fn&&!(s.parent&&s.parent.data==="nested")&&i.push(s)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,s){var a=this;if(i?(function(){for(var u=a.getTweens(),f=a.data.length,h;f--;)h=a.data[f],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(p){return u.splice(u.indexOf(p),1)}));for(u.map(function(p){return{g:p._dur||p._delay||p._sat&&!p._sat.vars.immediateRender?p.globalTime(0):-1/0,t:p}}).sort(function(p,m){return m.g-p.g||-1/0}).forEach(function(p){return p.t.revert(i)}),f=a.data.length;f--;)h=a.data[f],h instanceof Xn?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof fn)&&h.revert&&h.revert(i);a._r.forEach(function(p){return p(i,a)}),a.isReverted=!0})():this.data.forEach(function(u){return u.kill&&u.kill()}),this.clear(),s)for(var c=ro.length;c--;)ro[c].id===this.id&&ro.splice(c,1)},e.revert=function(i){this.kill(i||{})},o})(),QT=(function(){function o(t){this.contexts=[],this.scope=t,$t&&$t.data.push(this)}var e=o.prototype;return e.add=function(i,s,a){pr(i)||(i={matches:i});var c=new Vv(0,a||this.scope),u=c.conditions={},f,h,p;$t&&!c.selector&&(c.selector=$t.selector),this.contexts.push(c),s=c.add("onMatch",s),c.queries=i;for(h in i)h==="all"?p=1:(f=ir.matchMedia(i[h]),f&&(ro.indexOf(c)<0&&ro.push(c),(u[h]=f.matches)&&(p=1),f.addListener?f.addListener(bp):f.addEventListener("change",bp)));return p&&s(c,function(m){return c.add(null,m)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(s){return s.kill(i,!0)})},o})(),Fu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(s){return bv(s)})},timeline:function(e){return new Xn(e)},getTweensOf:function(e,t){return en.getTweensOf(e,t)},getProperty:function(e,t,i,s){bn(e)&&(e=Fi(e)[0]);var a=to(e||{}).get,c=i?hv:fv;return i==="native"&&(i=""),e&&(t?c((mi[t]&&mi[t].get||a)(e,t,i,s)):function(u,f,h){return c((mi[u]&&mi[u].get||a)(e,u,f,h))})},quickSetter:function(e,t,i){if(e=Fi(e),e.length>1){var s=e.map(function(p){return ai.quickSetter(p,t,i)}),a=s.length;return function(p){for(var m=a;m--;)s[m](p)}}e=e[0]||{};var c=mi[t],u=to(e),f=u.harness&&(u.harness.aliases||{})[t]||t,h=c?function(p){var m=new c;Yo._pt=0,m.init(e,i?p+i:p,Yo,0,[e]),m.render(1,m),Yo._pt&&d0(1,Yo)}:u.set(e,f);return c?h:function(p){return h(e,f,i?p+i:p,u,1)}},quickTo:function(e,t,i){var s,a=ai.to(e,Mi((s={},s[t]="+=0.1",s.paused=!0,s.stagger=0,s),i||{})),c=function(f,h,p){return a.resetTo(t,f,h,p)};return c.tween=a,c},isTweening:function(e){return en.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=io(e.ease,sa.ease)),Y1(sa,e||{})},config:function(e){return Y1(yi,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,s=e.plugins,a=e.defaults,c=e.extendTimeline;(s||"").split(",").forEach(function(u){return u&&!mi[u]&&!Si[u]&&_l(t+" effect requires "+u+" plugin.")}),ph[t]=function(u,f,h){return i(Fi(u),Mi(f||{},a),h)},c&&(Xn.prototype[t]=function(u,f,h){return this.add(ph[t](u,pr(f)?f:(h=f)&&{},this),h)})},registerEase:function(e,t){St[e]=io(t)},parseEase:function(e,t){return arguments.length?io(e,t):St},getById:function(e){return en.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Xn(e),s,a;for(i.smoothChildTiming=ii(e.smoothChildTiming),en.remove(i),i._dp=0,i._time=i._tTime=en._time,s=en._first;s;)a=s._next,(t||!(!s._dur&&s instanceof fn&&s.vars.onComplete===s._targets[0]))&&or(i,s,s._start-s._delay),s=a;return or(en,i,0),i},context:function(e,t){return e?new Vv(e,t):$t},matchMedia:function(e){return new QT(e)},matchMediaRefresh:function(){return ro.forEach(function(e){var t=e.conditions,i,s;for(s in t)t[s]&&(t[s]=!1,i=1);i&&e.revert()})||bp()},addEventListener:function(e,t){var i=wu[e]||(wu[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=wu[e],s=i&&i.indexOf(t);s>=0&&i.splice(s,1)},utils:{wrap:PT,wrapYoyo:NT,distribute:yv,random:Mv,snap:Sv,normalize:RT,getUnit:kn,clamp:TT,splitColor:Av,toArray:Fi,selector:wp,mapRange:Ev,pipe:AT,unitize:CT,interpolate:LT,shuffle:xv},install:av,effects:ph,ticker:_i,updateRoot:Xn.updateRoot,plugins:mi,globalTimeline:en,core:{PropTween:si,globals:lv,Tween:fn,Timeline:Xn,Animation:Sl,getCache:to,_removeLinkedListItem:$u,reverting:function(){return Pn},context:function(e){return e&&$t&&($t.data.push(e),e._ctx=$t),$t},suppressOverwrites:function(e){return Qp=e}}};ri("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return Fu[o]=fn[o]});_i.add(Xn.updateRoot);Yo=Fu.to({},{duration:0});var JT=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},eb=function(e,t){var i=e._targets,s,a,c;for(s in t)for(a=i.length;a--;)c=e._ptLookup[a][s],c&&(c=c.d)&&(c._pt&&(c=JT(c,s)),c&&c.modifier&&c.modifier(t[s],e,i[a],s))},xh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(s,a,c){c._onInit=function(u){var f,h;if(bn(a)&&(f={},ri(a,function(p){return f[p]=1}),a=f),t){f={};for(h in a)f[h]=t(a[h]);a=f}eb(u,a)}}}},ai=Fu.registerPlugin({name:"attr",init:function(e,t,i,s,a){var c,u,f;this.tween=i;for(c in t)f=e.getAttribute(c)||"",u=this.add(e,"setAttribute",(f||0)+"",t[c],s,a,0,0,c),u.op=c,u.b=f,this._props.push(c)},render:function(e,t){for(var i=t._pt;i;)Pn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},xh("roundProps",Ep),xh("modifiers"),xh("snap",Sv))||Fu;fn.version=Xn.version=ai.version="3.14.2";ov=1;e0()&&ca();St.Power0;St.Power1;St.Power2;St.Power3;St.Power4;St.Linear;St.Quad;St.Cubic;St.Quart;St.Quint;St.Strong;St.Elastic;St.Back;St.SteppedEase;St.Bounce;St.Sine;St.Expo;St.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var e_,hs,Qo,f0,Js,t_,h0,tb=function(){return typeof window<"u"},Or={},Ys=180/Math.PI,Jo=Math.PI/180,Xo=Math.atan2,n_=1e8,p0=/([A-Z])/g,nb=/(left|right|width|margin|padding|x)/i,ib=/[\s,\(]\S/,cr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ap=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},rb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},sb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ob=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ab=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Hv=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Gv=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},lb=function(e,t,i){return e.style[t]=i},cb=function(e,t,i){return e.style.setProperty(t,i)},ub=function(e,t,i){return e._gsap[t]=i},db=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},fb=function(e,t,i,s,a){var c=e._gsap;c.scaleX=c.scaleY=i,c.renderTransform(a,c)},hb=function(e,t,i,s,a){var c=e._gsap;c[t]=i,c.renderTransform(a,c)},tn="transform",oi=tn+"Origin",pb=function o(e,t){var i=this,s=this.target,a=s.style,c=s._gsap;if(e in Or&&a){if(this.tfm=this.tfm||{},e!=="transform")e=cr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(u){return i.tfm[u]=Rr(s,u)}):this.tfm[e]=c.x?c[e]:Rr(s,e),e===oi&&(this.tfm.zOrigin=c.zOrigin);else return cr.transform.split(",").forEach(function(u){return o.call(i,u,t)});if(this.props.indexOf(tn)>=0)return;c.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(oi,t,"")),e=tn}(a||t)&&this.props.push(e,t,a[e])},Wv=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},mb=function(){var e=this.props,t=this.target,i=t.style,s=t._gsap,a,c;for(a=0;a<e.length;a+=3)e[a+1]?e[a+1]===2?t[e[a]](e[a+2]):t[e[a]]=e[a+2]:e[a+2]?i[e[a]]=e[a+2]:i.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(p0,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)s[c]=this.tfm[c];s.svg&&(s.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),a=h0(),(!a||!a.isStart)&&!i[tn]&&(Wv(i),s.zOrigin&&i[oi]&&(i[oi]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},jv=function(e,t){var i={target:e,props:[],revert:mb,save:pb};return e._gsap||ai.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(s){return i.save(s)}),i},Xv,Cp=function(e,t){var i=hs.createElementNS?hs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):hs.createElement(e);return i&&i.style?i:hs.createElement(e)},xi=function o(e,t,i){var s=getComputedStyle(e);return s[t]||s.getPropertyValue(t.replace(p0,"-$1").toLowerCase())||s.getPropertyValue(t)||!i&&o(e,ua(t)||t,1)||""},i_="O,Moz,ms,Ms,Webkit".split(","),ua=function(e,t,i){var s=t||Js,a=s.style,c=5;if(e in a&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);c--&&!(i_[c]+e in a););return c<0?null:(c===3?"ms":c>=0?i_[c]:"")+e},Rp=function(){tb()&&window.document&&(e_=window,hs=e_.document,Qo=hs.documentElement,Js=Cp("div")||{style:{}},Cp("div"),tn=ua(tn),oi=tn+"Origin",Js.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Xv=!!ua("perspective"),h0=ai.core.reverting,f0=1)},r_=function(e){var t=e.ownerSVGElement,i=Cp("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=e.cloneNode(!0),a;s.style.display="block",i.appendChild(s),Qo.appendChild(i);try{a=s.getBBox()}catch{}return i.removeChild(s),Qo.removeChild(i),a},s_=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},qv=function(e){var t,i;try{t=e.getBBox()}catch{t=r_(e),i=1}return t&&(t.width||t.height)||i||(t=r_(e)),t&&!t.width&&!t.x&&!t.y?{x:+s_(e,["x","cx","x1"])||0,y:+s_(e,["y","cy","y1"])||0,width:0,height:0}:t},Yv=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&qv(e))},xs=function(e,t){if(t){var i=e.style,s;t in Or&&t!==oi&&(t=tn),i.removeProperty?(s=t.substr(0,2),(s==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(s==="--"?t:t.replace(p0,"-$1").toLowerCase())):i.removeAttribute(t)}},ps=function(e,t,i,s,a,c){var u=new si(e._pt,t,i,0,1,c?Gv:Hv);return e._pt=u,u.b=s,u.e=a,e._props.push(i),u},o_={deg:1,rad:1,turn:1},gb={grid:1,flex:1},ys=function o(e,t,i,s){var a=parseFloat(i)||0,c=(i+"").trim().substr((a+"").length)||"px",u=Js.style,f=nb.test(t),h=e.tagName.toLowerCase()==="svg",p=(h?"client":"offset")+(f?"Width":"Height"),m=100,v=s==="px",y=s==="%",w,S,x,_;if(s===c||!a||o_[s]||o_[c])return a;if(c!=="px"&&!v&&(a=o(e,t,i,"px")),_=e.getCTM&&Yv(e),(y||c==="%")&&(Or[t]||~t.indexOf("adius")))return w=_?e.getBBox()[f?"width":"height"]:e[p],ln(y?a/w*m:a/100*w);if(u[f?"width":"height"]=m+(v?c:s),S=s!=="rem"&&~t.indexOf("adius")||s==="em"&&e.appendChild&&!h?e:e.parentNode,_&&(S=(e.ownerSVGElement||{}).parentNode),(!S||S===hs||!S.appendChild)&&(S=hs.body),x=S._gsap,x&&y&&x.width&&f&&x.time===_i.time&&!x.uncache)return ln(a/x.width*m);if(y&&(t==="height"||t==="width")){var T=e.style[t];e.style[t]=m+s,w=e[p],T?e.style[t]=T:xs(e,t)}else(y||c==="%")&&!gb[xi(S,"display")]&&(u.position=xi(e,"position")),S===e&&(u.position="static"),S.appendChild(Js),w=Js[p],S.removeChild(Js),u.position="absolute";return f&&y&&(x=to(S),x.time=_i.time,x.width=S[p]),ln(v?w*a/m:w&&a?m/w*a:0)},Rr=function(e,t,i,s){var a;return f0||Rp(),t in cr&&t!=="transform"&&(t=cr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Or[t]&&t!=="transform"?(a=wl(e,s),a=t!=="transformOrigin"?a[t]:a.svg?a.origin:ku(xi(e,oi))+" "+a.zOrigin+"px"):(a=e.style[t],(!a||a==="auto"||s||~(a+"").indexOf("calc("))&&(a=Ou[t]&&Ou[t](e,t,i)||xi(e,t)||uv(e,t)||(t==="opacity"?1:0))),i&&!~(a+"").trim().indexOf(" ")?ys(e,t,a,i)+i:a},_b=function(e,t,i,s){if(!i||i==="none"){var a=ua(t,e,1),c=a&&xi(e,a,1);c&&c!==i?(t=a,i=c):t==="borderColor"&&(i=xi(e,"borderTopColor"))}var u=new si(this._pt,e.style,t,0,1,zv),f=0,h=0,p,m,v,y,w,S,x,_,T,A,b,P;if(u.b=i,u.e=s,i+="",s+="",s.substring(0,6)==="var(--"&&(s=xi(e,s.substring(4,s.indexOf(")")))),s==="auto"&&(S=e.style[t],e.style[t]=s,s=xi(e,t)||s,S?e.style[t]=S:xs(e,t)),p=[i,s],Rv(p),i=p[0],s=p[1],v=i.match(qo)||[],P=s.match(qo)||[],P.length){for(;m=qo.exec(s);)x=m[0],T=s.substring(f,m.index),w?w=(w+1)%5:(T.substr(-5)==="rgba("||T.substr(-5)==="hsla(")&&(w=1),x!==(S=v[h++]||"")&&(y=parseFloat(S)||0,b=S.substr((y+"").length),x.charAt(1)==="="&&(x=Zo(y,x)+b),_=parseFloat(x),A=x.substr((_+"").length),f=qo.lastIndex-A.length,A||(A=A||yi.units[t]||b,f===s.length&&(s+=A,u.e+=A)),b!==A&&(y=ys(e,t,S,A)||0),u._pt={_next:u._pt,p:T||h===1?T:",",s:y,c:_-y,m:w&&w<4||t==="zIndex"?Math.round:0});u.c=f<s.length?s.substring(f,s.length):""}else u.r=t==="display"&&s==="none"?Gv:Hv;return sv.test(s)&&(u.e=0),this._pt=u,u},a_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},vb=function(e){var t=e.split(" "),i=t[0],s=t[1]||"50%";return(i==="top"||i==="bottom"||s==="left"||s==="right")&&(e=i,i=s,s=e),t[0]=a_[i]||i,t[1]=a_[s]||s,t.join(" ")},xb=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,s=i.style,a=t.u,c=i._gsap,u,f,h;if(a==="all"||a===!0)s.cssText="",f=1;else for(a=a.split(","),h=a.length;--h>-1;)u=a[h],Or[u]&&(f=1,u=u==="transformOrigin"?oi:tn),xs(i,u);f&&(xs(i,tn),c&&(c.svg&&i.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",wl(i,1),c.uncache=1,Wv(s)))}},Ou={clearProps:function(e,t,i,s,a){if(a.data!=="isFromStart"){var c=e._pt=new si(e._pt,t,i,0,0,xb);return c.u=s,c.pr=-10,c.tween=a,e._props.push(i),1}}},Ml=[1,0,0,1,0,0],$v={},Kv=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},l_=function(e){var t=xi(e,tn);return Kv(t)?Ml:t.substr(7).match(rv).map(ln)},m0=function(e,t){var i=e._gsap||to(e),s=e.style,a=l_(e),c,u,f,h;return i.svg&&e.getAttribute("transform")?(f=e.transform.baseVal.consolidate().matrix,a=[f.a,f.b,f.c,f.d,f.e,f.f],a.join(",")==="1,0,0,1,0,0"?Ml:a):(a===Ml&&!e.offsetParent&&e!==Qo&&!i.svg&&(f=s.display,s.display="block",c=e.parentNode,(!c||!e.offsetParent&&!e.getBoundingClientRect().width)&&(h=1,u=e.nextElementSibling,Qo.appendChild(e)),a=l_(e),f?s.display=f:xs(e,"display"),h&&(u?c.insertBefore(e,u):c?c.appendChild(e):Qo.removeChild(e))),t&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},Pp=function(e,t,i,s,a,c){var u=e._gsap,f=a||m0(e,!0),h=u.xOrigin||0,p=u.yOrigin||0,m=u.xOffset||0,v=u.yOffset||0,y=f[0],w=f[1],S=f[2],x=f[3],_=f[4],T=f[5],A=t.split(" "),b=parseFloat(A[0])||0,P=parseFloat(A[1])||0,D,I,F,E;i?f!==Ml&&(I=y*x-w*S)&&(F=b*(x/I)+P*(-S/I)+(S*T-x*_)/I,E=b*(-w/I)+P*(y/I)-(y*T-w*_)/I,b=F,P=E):(D=qv(e),b=D.x+(~A[0].indexOf("%")?b/100*D.width:b),P=D.y+(~(A[1]||A[0]).indexOf("%")?P/100*D.height:P)),s||s!==!1&&u.smooth?(_=b-h,T=P-p,u.xOffset=m+(_*y+T*S)-_,u.yOffset=v+(_*w+T*x)-T):u.xOffset=u.yOffset=0,u.xOrigin=b,u.yOrigin=P,u.smooth=!!s,u.origin=t,u.originIsAbsolute=!!i,e.style[oi]="0px 0px",c&&(ps(c,u,"xOrigin",h,b),ps(c,u,"yOrigin",p,P),ps(c,u,"xOffset",m,u.xOffset),ps(c,u,"yOffset",v,u.yOffset)),e.setAttribute("data-svg-origin",b+" "+P)},wl=function(e,t){var i=e._gsap||new Dv(e);if("x"in i&&!t&&!i.uncache)return i;var s=e.style,a=i.scaleX<0,c="px",u="deg",f=getComputedStyle(e),h=xi(e,oi)||"0",p,m,v,y,w,S,x,_,T,A,b,P,D,I,F,E,L,k,W,V,J,ee,Q,Y,q,de,re,B,oe,be,Fe,Be;return p=m=v=S=x=_=T=A=b=0,y=w=1,i.svg=!!(e.getCTM&&Yv(e)),f.translate&&((f.translate!=="none"||f.scale!=="none"||f.rotate!=="none")&&(s[tn]=(f.translate!=="none"?"translate3d("+(f.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(f.rotate!=="none"?"rotate("+f.rotate+") ":"")+(f.scale!=="none"?"scale("+f.scale.split(" ").join(",")+") ":"")+(f[tn]!=="none"?f[tn]:"")),s.scale=s.rotate=s.translate="none"),I=m0(e,i.svg),i.svg&&(i.uncache?(q=e.getBBox(),h=i.xOrigin-q.x+"px "+(i.yOrigin-q.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),Pp(e,Y||h,!!Y||i.originIsAbsolute,i.smooth!==!1,I)),P=i.xOrigin||0,D=i.yOrigin||0,I!==Ml&&(k=I[0],W=I[1],V=I[2],J=I[3],p=ee=I[4],m=Q=I[5],I.length===6?(y=Math.sqrt(k*k+W*W),w=Math.sqrt(J*J+V*V),S=k||W?Xo(W,k)*Ys:0,T=V||J?Xo(V,J)*Ys+S:0,T&&(w*=Math.abs(Math.cos(T*Jo))),i.svg&&(p-=P-(P*k+D*V),m-=D-(P*W+D*J))):(Be=I[6],be=I[7],re=I[8],B=I[9],oe=I[10],Fe=I[11],p=I[12],m=I[13],v=I[14],F=Xo(Be,oe),x=F*Ys,F&&(E=Math.cos(-F),L=Math.sin(-F),Y=ee*E+re*L,q=Q*E+B*L,de=Be*E+oe*L,re=ee*-L+re*E,B=Q*-L+B*E,oe=Be*-L+oe*E,Fe=be*-L+Fe*E,ee=Y,Q=q,Be=de),F=Xo(-V,oe),_=F*Ys,F&&(E=Math.cos(-F),L=Math.sin(-F),Y=k*E-re*L,q=W*E-B*L,de=V*E-oe*L,Fe=J*L+Fe*E,k=Y,W=q,V=de),F=Xo(W,k),S=F*Ys,F&&(E=Math.cos(F),L=Math.sin(F),Y=k*E+W*L,q=ee*E+Q*L,W=W*E-k*L,Q=Q*E-ee*L,k=Y,ee=q),x&&Math.abs(x)+Math.abs(S)>359.9&&(x=S=0,_=180-_),y=ln(Math.sqrt(k*k+W*W+V*V)),w=ln(Math.sqrt(Q*Q+Be*Be)),F=Xo(ee,Q),T=Math.abs(F)>2e-4?F*Ys:0,b=Fe?1/(Fe<0?-Fe:Fe):0),i.svg&&(Y=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Kv(xi(e,tn)),Y&&e.setAttribute("transform",Y))),Math.abs(T)>90&&Math.abs(T)<270&&(a?(y*=-1,T+=S<=0?180:-180,S+=S<=0?180:-180):(w*=-1,T+=T<=0?180:-180)),t=t||i.uncache,i.x=p-((i.xPercent=p&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-p)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+c,i.y=m-((i.yPercent=m&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-m)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+c,i.z=v+c,i.scaleX=ln(y),i.scaleY=ln(w),i.rotation=ln(S)+u,i.rotationX=ln(x)+u,i.rotationY=ln(_)+u,i.skewX=T+u,i.skewY=A+u,i.transformPerspective=b+c,(i.zOrigin=parseFloat(h.split(" ")[2])||!t&&i.zOrigin||0)&&(s[oi]=ku(h)),i.xOffset=i.yOffset=0,i.force3D=yi.force3D,i.renderTransform=i.svg?Sb:Xv?Zv:yb,i.uncache=0,i},ku=function(e){return(e=e.split(" "))[0]+" "+e[1]},yh=function(e,t,i){var s=kn(t);return ln(parseFloat(t)+parseFloat(ys(e,"x",i+"px",s)))+s},yb=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Zv(e,t)},js="0deg",rl="0px",Xs=") ",Zv=function(e,t){var i=t||this,s=i.xPercent,a=i.yPercent,c=i.x,u=i.y,f=i.z,h=i.rotation,p=i.rotationY,m=i.rotationX,v=i.skewX,y=i.skewY,w=i.scaleX,S=i.scaleY,x=i.transformPerspective,_=i.force3D,T=i.target,A=i.zOrigin,b="",P=_==="auto"&&e&&e!==1||_===!0;if(A&&(m!==js||p!==js)){var D=parseFloat(p)*Jo,I=Math.sin(D),F=Math.cos(D),E;D=parseFloat(m)*Jo,E=Math.cos(D),c=yh(T,c,I*E*-A),u=yh(T,u,-Math.sin(D)*-A),f=yh(T,f,F*E*-A+A)}x!==rl&&(b+="perspective("+x+Xs),(s||a)&&(b+="translate("+s+"%, "+a+"%) "),(P||c!==rl||u!==rl||f!==rl)&&(b+=f!==rl||P?"translate3d("+c+", "+u+", "+f+") ":"translate("+c+", "+u+Xs),h!==js&&(b+="rotate("+h+Xs),p!==js&&(b+="rotateY("+p+Xs),m!==js&&(b+="rotateX("+m+Xs),(v!==js||y!==js)&&(b+="skew("+v+", "+y+Xs),(w!==1||S!==1)&&(b+="scale("+w+", "+S+Xs),T.style[tn]=b||"translate(0, 0)"},Sb=function(e,t){var i=t||this,s=i.xPercent,a=i.yPercent,c=i.x,u=i.y,f=i.rotation,h=i.skewX,p=i.skewY,m=i.scaleX,v=i.scaleY,y=i.target,w=i.xOrigin,S=i.yOrigin,x=i.xOffset,_=i.yOffset,T=i.forceCSS,A=parseFloat(c),b=parseFloat(u),P,D,I,F,E;f=parseFloat(f),h=parseFloat(h),p=parseFloat(p),p&&(p=parseFloat(p),h+=p,f+=p),f||h?(f*=Jo,h*=Jo,P=Math.cos(f)*m,D=Math.sin(f)*m,I=Math.sin(f-h)*-v,F=Math.cos(f-h)*v,h&&(p*=Jo,E=Math.tan(h-p),E=Math.sqrt(1+E*E),I*=E,F*=E,p&&(E=Math.tan(p),E=Math.sqrt(1+E*E),P*=E,D*=E)),P=ln(P),D=ln(D),I=ln(I),F=ln(F)):(P=m,F=v,D=I=0),(A&&!~(c+"").indexOf("px")||b&&!~(u+"").indexOf("px"))&&(A=ys(y,"x",c,"px"),b=ys(y,"y",u,"px")),(w||S||x||_)&&(A=ln(A+w-(w*P+S*I)+x),b=ln(b+S-(w*D+S*F)+_)),(s||a)&&(E=y.getBBox(),A=ln(A+s/100*E.width),b=ln(b+a/100*E.height)),E="matrix("+P+","+D+","+I+","+F+","+A+","+b+")",y.setAttribute("transform",E),T&&(y.style[tn]=E)},Mb=function(e,t,i,s,a){var c=360,u=bn(a),f=parseFloat(a)*(u&&~a.indexOf("rad")?Ys:1),h=f-s,p=s+h+"deg",m,v;return u&&(m=a.split("_")[1],m==="short"&&(h%=c,h!==h%(c/2)&&(h+=h<0?c:-c)),m==="cw"&&h<0?h=(h+c*n_)%c-~~(h/c)*c:m==="ccw"&&h>0&&(h=(h-c*n_)%c-~~(h/c)*c)),e._pt=v=new si(e._pt,t,i,s,h,rb),v.e=p,v.u="deg",e._props.push(i),v},c_=function(e,t){for(var i in t)e[i]=t[i];return e},wb=function(e,t,i){var s=c_({},i._gsap),a="perspective,force3D,transformOrigin,svgOrigin",c=i.style,u,f,h,p,m,v,y,w;s.svg?(h=i.getAttribute("transform"),i.setAttribute("transform",""),c[tn]=t,u=wl(i,1),xs(i,tn),i.setAttribute("transform",h)):(h=getComputedStyle(i)[tn],c[tn]=t,u=wl(i,1),c[tn]=h);for(f in Or)h=s[f],p=u[f],h!==p&&a.indexOf(f)<0&&(y=kn(h),w=kn(p),m=y!==w?ys(i,f,h,w):parseFloat(h),v=parseFloat(p),e._pt=new si(e._pt,u,f,m,v-m,Ap),e._pt.u=w||0,e._props.push(f));c_(u,s)};ri("padding,margin,Width,Radius",function(o,e){var t="Top",i="Right",s="Bottom",a="Left",c=(e<3?[t,i,s,a]:[t+a,t+i,s+i,s+a]).map(function(u){return e<2?o+u:"border"+u+o});Ou[e>1?"border"+o:o]=function(u,f,h,p,m){var v,y;if(arguments.length<4)return v=c.map(function(w){return Rr(u,w,h)}),y=v.join(" "),y.split(v[0]).length===5?v[0]:y;v=(p+"").split(" "),y={},c.forEach(function(w,S){return y[w]=v[S]=v[S]||v[(S-1)/2|0]}),u.init(f,y,m)}});var Qv={name:"css",register:Rp,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,s,a){var c=this._props,u=e.style,f=i.vars.startAt,h,p,m,v,y,w,S,x,_,T,A,b,P,D,I,F,E;f0||Rp(),this.styles=this.styles||jv(e),F=this.styles.props,this.tween=i;for(S in t)if(S!=="autoRound"&&(p=t[S],!(mi[S]&&Iv(S,t,i,s,e,a)))){if(y=typeof p,w=Ou[S],y==="function"&&(p=p.call(i,s,e,a),y=typeof p),y==="string"&&~p.indexOf("random(")&&(p=xl(p)),w)w(this,e,S,p,i)&&(I=1);else if(S.substr(0,2)==="--")h=(getComputedStyle(e).getPropertyValue(S)+"").trim(),p+="",gs.lastIndex=0,gs.test(h)||(x=kn(h),_=kn(p),_?x!==_&&(h=ys(e,S,h,_)+_):x&&(p+=x)),this.add(u,"setProperty",h,p,s,a,0,0,S),c.push(S),F.push(S,0,u[S]);else if(y!=="undefined"){if(f&&S in f?(h=typeof f[S]=="function"?f[S].call(i,s,e,a):f[S],bn(h)&&~h.indexOf("random(")&&(h=xl(h)),kn(h+"")||h==="auto"||(h+=yi.units[S]||kn(Rr(e,S))||""),(h+"").charAt(1)==="="&&(h=Rr(e,S))):h=Rr(e,S),v=parseFloat(h),T=y==="string"&&p.charAt(1)==="="&&p.substr(0,2),T&&(p=p.substr(2)),m=parseFloat(p),S in cr&&(S==="autoAlpha"&&(v===1&&Rr(e,"visibility")==="hidden"&&m&&(v=0),F.push("visibility",0,u.visibility),ps(this,u,"visibility",v?"inherit":"hidden",m?"inherit":"hidden",!m)),S!=="scale"&&S!=="transform"&&(S=cr[S],~S.indexOf(",")&&(S=S.split(",")[0]))),A=S in Or,A){if(this.styles.save(S),E=p,y==="string"&&p.substring(0,6)==="var(--"){if(p=xi(e,p.substring(4,p.indexOf(")"))),p.substring(0,5)==="calc("){var L=e.style.perspective;e.style.perspective=p,p=xi(e,"perspective"),L?e.style.perspective=L:xs(e,"perspective")}m=parseFloat(p)}if(b||(P=e._gsap,P.renderTransform&&!t.parseTransform||wl(e,t.parseTransform),D=t.smoothOrigin!==!1&&P.smooth,b=this._pt=new si(this._pt,u,tn,0,1,P.renderTransform,P,0,-1),b.dep=1),S==="scale")this._pt=new si(this._pt,P,"scaleY",P.scaleY,(T?Zo(P.scaleY,T+m):m)-P.scaleY||0,Ap),this._pt.u=0,c.push("scaleY",S),S+="X";else if(S==="transformOrigin"){F.push(oi,0,u[oi]),p=vb(p),P.svg?Pp(e,p,0,D,0,this):(_=parseFloat(p.split(" ")[2])||0,_!==P.zOrigin&&ps(this,P,"zOrigin",P.zOrigin,_),ps(this,u,S,ku(h),ku(p)));continue}else if(S==="svgOrigin"){Pp(e,p,1,D,0,this);continue}else if(S in $v){Mb(this,P,S,v,T?Zo(v,T+p):p);continue}else if(S==="smoothOrigin"){ps(this,P,"smooth",P.smooth,p);continue}else if(S==="force3D"){P[S]=p;continue}else if(S==="transform"){wb(this,p,e);continue}}else S in u||(S=ua(S)||S);if(A||(m||m===0)&&(v||v===0)&&!ib.test(p)&&S in u)x=(h+"").substr((v+"").length),m||(m=0),_=kn(p)||(S in yi.units?yi.units[S]:x),x!==_&&(v=ys(e,S,h,_)),this._pt=new si(this._pt,A?P:u,S,v,(T?Zo(v,T+m):m)-v,!A&&(_==="px"||S==="zIndex")&&t.autoRound!==!1?ab:Ap),this._pt.u=_||0,A&&E!==p?(this._pt.b=h,this._pt.e=E,this._pt.r=ob):x!==_&&_!=="%"&&(this._pt.b=h,this._pt.r=sb);else if(S in u)_b.call(this,e,S,h,T?T+p:p);else if(S in e)this.add(e,S,h||e[S],T?T+p:p,s,a);else if(S!=="parseTransform"){n0(S,p);continue}A||(S in u?F.push(S,0,u[S]):typeof e[S]=="function"?F.push(S,2,e[S]()):F.push(S,1,h||e[S])),c.push(S)}}I&&Bv(this)},render:function(e,t){if(t.tween._time||!h0())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Rr,aliases:cr,getSetter:function(e,t,i){var s=cr[t];return s&&s.indexOf(",")<0&&(t=s),t in Or&&t!==oi&&(e._gsap.x||Rr(e,"x"))?i&&t_===i?t==="scale"?db:ub:(t_=i||{})&&(t==="scale"?fb:hb):e.style&&!Jp(e.style[t])?lb:~t.indexOf("-")?cb:u0(e,t)},core:{_removeProperty:xs,_getMatrix:m0}};ai.utils.checkPrefix=ua;ai.core.getStyleSaver=jv;(function(o,e,t,i){var s=ri(o+","+e+","+t,function(a){Or[a]=1});ri(e,function(a){yi.units[a]="deg",$v[a]=1}),cr[s[13]]=o+","+e,ri(i,function(a){var c=a.split(":");cr[c[1]]=s[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ri("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){yi.units[o]="px"});ai.registerPlugin(Qv);var ot=ai.registerPlugin(Qv)||ai;ot.core.Tween;function Eb({onEnter:o}){const e=Ue.useRef(null),t=Ue.useRef(null),i=Ue.useRef(null),s=Ue.useRef({x:0,y:0}),a=Ue.useRef(null);Ue.useEffect(()=>{var W;if(!e.current)return;const u=new G_;i.current=u;const f=new gi(75,window.innerWidth/window.innerHeight,.1,1e3),h=new ev({canvas:e.current,alpha:!0,antialias:!0});h.setSize(window.innerWidth,window.innerHeight),h.setPixelRatio(Math.min(window.devicePixelRatio,2));const p=new vn,m=8e3,v=new Float32Array(m*3),y=new Float32Array(m*3);for(let V=0;V<m*3;V++){const J=(Math.random()-.5)*15;v[V]=J,y[V]=J}p.setAttribute("position",new Oi(v,3));const w=new Pu({size:.01,color:"#8b5cf6",transparent:!0,opacity:.8,blending:Eu}),S=new Nu(p,w);u.add(S);const x=new ju(1,32,32),_=new ml({color:"#ec4899",wireframe:!0,transparent:!0,opacity:.3}),T=new ki(x,_);u.add(T);const A=new Xu(1.5,.1,16,100),b=new ml({color:"#8b5cf6",wireframe:!0,transparent:!0,opacity:.5}),P=new ki(A,b);u.add(P),f.position.z=5;const D=V=>{s.current.x=V.clientX/window.innerWidth*2-1,s.current.y=-(V.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",D);const I=new Y_,F=()=>{requestAnimationFrame(F);const V=I.getElapsedTime();S.rotation.y=V*.05;const J=S.geometry.attributes.position.array;for(let ee=0;ee<m;ee++){const Q=ee*3,Y=Math.sin(V+y[Q])*.1;J[Q+1]=y[Q+1]+Y;const q=J[Q]/5-s.current.x*2,de=J[Q+1]/5-s.current.y*2,re=Math.sqrt(q*q+de*de);if(re<1){const B=(1-re)*.3;J[Q]+=q*B,J[Q+1]+=de*B}}S.geometry.attributes.position.needsUpdate=!0,T.rotation.x=V*.3,T.rotation.y=V*.5,T.scale.setScalar(1+Math.sin(V*2)*.1),P.rotation.x=V*.2,P.rotation.y=V*.3,f.position.x+=(s.current.x*.5-f.position.x)*.05,f.position.y+=(s.current.y*.5-f.position.y)*.05,f.lookAt(u.position),h.render(u,f)};F();const E=document.querySelector(".intro-title");if(E){const V=(W=E.textContent)==null?void 0:W.split("");E.innerHTML="",V==null||V.forEach(J=>{const ee=document.createElement("span");ee.textContent=J===" "?" ":J,ee.style.display="inline-block",E.appendChild(ee)}),ot.from(E.children,{opacity:0,y:100,rotationX:-90,stagger:.05,duration:1,ease:"back.out(1.7)"})}ot.from(".intro-subtitle",{opacity:0,scale:0,duration:1,delay:1,ease:"elastic.out(1, 0.5)"}),t.current&&(ot.from(t.current,{opacity:0,y:50,duration:1,delay:1.5,ease:"power3.out"}),ot.to(t.current,{y:-10,duration:2,repeat:-1,yoyo:!0,ease:"sine.inOut",delay:2}));const L=()=>{f.aspect=window.innerWidth/window.innerHeight,f.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",L);const k=V=>{V.deltaY>0&&(a.current&&clearTimeout(a.current),a.current=window.setTimeout(()=>{c()},100))};return window.addEventListener("wheel",k,{passive:!0}),()=>{window.removeEventListener("mousemove",D),window.removeEventListener("resize",L),window.removeEventListener("wheel",k),a.current&&clearTimeout(a.current),h.dispose(),p.dispose(),w.dispose(),x.dispose(),_.dispose(),A.dispose(),b.dispose()}},[]);const c=()=>{if(i.current){const u=i.current.children.find(f=>f instanceof Nu);if(u){const f=u.geometry.attributes.position.array;for(let h=0;h<f.length;h+=3)ot.to(f,{[h]:f[h]*3,[h+1]:f[h+1]*3,[h+2]:f[h+2]*3,duration:1,ease:"power2.in"})}}ot.to(".intro-content",{opacity:0,scale:1.5,duration:1,ease:"power2.in"}),ot.to(e.current,{opacity:0,duration:1,ease:"power2.in",onComplete:o})};return R.jsxs("div",{className:"relative w-full h-screen bg-black overflow-hidden",children:[R.jsx("canvas",{ref:e,className:"absolute inset-0"}),R.jsxs("div",{className:"intro-content absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4",children:[R.jsx("h1",{className:"intro-title text-5xl md:text-8xl font-bold mb-6 tracking-wider text-center",children:"LAURA CORDEIRO"}),R.jsx("p",{className:"intro-subtitle text-xl md:text-3xl mb-16 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent font-bold",children:"Frontend Developer"}),R.jsxs("button",{ref:t,onClick:c,className:"group relative px-10 py-5 text-lg font-bold border-2 border-white rounded-full overflow-hidden transition-all duration-300 hover:border-purple-500 hover:scale-110 cursor-pointer",children:[R.jsx("span",{className:"relative z-10 group-hover:text-black transition-colors duration-300",children:"Entrar no Portfólio →"}),R.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"})]}),R.jsx("p",{className:"absolute bottom-10 text-sm text-gray-500 animate-pulse",children:"Mova o mouse para interagir • Role para baixo para entrar"})]})]})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),bb=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase()),u_=o=>{const e=bb(o);return e.charAt(0).toUpperCase()+e.slice(1)},Jv=(...o)=>o.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ab={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb=Ue.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:s="",children:a,iconNode:c,...u},f)=>Ue.createElement("svg",{ref:f,...Ab,width:e,height:e,stroke:o,strokeWidth:i?Number(t)*24/Number(e):t,className:Jv("lucide",s),...u},[...c.map(([h,p])=>Ue.createElement(h,p)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=(o,e)=>{const t=Ue.forwardRef(({className:i,...s},a)=>Ue.createElement(Cb,{ref:a,iconNode:e,className:Jv(`lucide-${Tb(u_(o))}`,`lucide-${o}`,i),...s}));return t.displayName=u_(o),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Pb=pt("arrow-left",Rb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],ex=pt("award",Nb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],zu=pt("book-open",Lb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Db=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]],Ib=pt("brain",Db);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],Fb=pt("building-2",Ub);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],tx=pt("calendar",Ob);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],zb=pt("check",kb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Vb=pt("chevron-down",Bb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Gb=pt("chevron-up",Hb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],Sh=pt("code-xml",Wb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]],Np=pt("code",jb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],qb=pt("copy",Xb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],$b=pt("cpu",Yb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],Zb=pt("download",Kb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Lp=pt("external-link",Qb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]],e4=pt("file-code",Jb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t4=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],n4=pt("file-text",t4);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i4=[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]],r4=pt("flag",i4);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s4=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],o4=pt("flask-conical",s4);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a4=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],nx=pt("github",a4);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l4=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],c4=pt("graduation-cap",l4);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u4=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],ix=pt("heart",u4);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d4=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],f4=pt("lightbulb",d4);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h4=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],p4=pt("linkedin",h4);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m4=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],g4=pt("mail",m4);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _4=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],g0=pt("map-pin",_4);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v4=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],x4=pt("message-circle",v4);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y4=[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]],rx=pt("palette",y4);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S4=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],M4=pt("phone",S4);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w4=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],E4=pt("refresh-cw",w4);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T4=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],_0=pt("rocket",T4);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b4=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],A4=pt("send",b4);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C4=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Bu=pt("sparkles",C4);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R4=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Dp=pt("star",R4);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P4=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],N4=pt("target",P4);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L4=[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]],El=pt("trophy",L4);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D4=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],I4=pt("users",D4);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U4=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],F4=pt("x",U4);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O4=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],k4=pt("zap",O4),z4="/assets/Laurinha-CItSwgnx.jpg",B4=[{icon:M4,label:"Telefone",value:"+55 16 99120-3005",displayValue:"+55 16 99120-3005",href:"https://wa.me/5516991203005",color:"from-emerald-500 to-teal-600",description:"WhatsApp disponível"},{icon:g4,label:"Email",value:"laurafercordeiro@gmail.com",displayValue:"laurafercordeiro@gmail.com",href:"mailto:laurafercordeiro@gmail.com",color:"from-purple-500 to-pink-600",description:"Respondo em até 24h"},{icon:p4,label:"LinkedIn",value:"linkedin.com/in/laura-cordeiro-9983a8324",displayValue:"Laura Cordeiro",href:"https://www.linkedin.com/in/laura-cordeiro-9983a8324",color:"from-blue-500 to-blue-700",description:"Vamos nos conectar"},{icon:g0,label:"Localização",value:"São Carlos, SP - Brasil",displayValue:"São Carlos, Brasil",href:null,color:"from-orange-500 to-red-600",description:"Trabalho remoto ou híbrido"},{icon:nx,label:"GitHub",value:"github.com/LauraFerCordeiro",displayValue:"@LauraFerCordeiro",href:"https://github.com/LauraFerCordeiro",color:"from-indigo-500 to-blue-600",description:"Confira meu código"}];function d_({onNavigate:o}){const e=Ue.useRef(null),t=Ue.useRef(null),i=Ue.useRef(null),s=Ue.useRef(null),a=Ue.useRef(null),c=Ue.useRef(null),[u,f]=Ue.useState({x:0,y:0}),[h,p]=Ue.useState(null),[m,v]=Ue.useState(!1);Ue.useEffect(()=>{const x=()=>{v(window.innerWidth<768)};return x(),window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)},[]),Ue.useEffect(()=>{if(!m){if(e.current){const x=e.current.querySelectorAll(".letter");ot.fromTo(x,{opacity:0,y:100,rotationX:-90,scale:0},{opacity:1,y:0,rotationX:0,scale:1,stagger:.05,duration:1,ease:"elastic.out(1, 0.5)",delay:.2})}if(t.current&&ot.fromTo(t.current,{opacity:0,scale:.5,rotationY:180},{opacity:1,scale:1,rotationY:0,duration:1.5,ease:"elastic.out(1, 0.5)",delay:.5}),i.current){const x=i.current.querySelectorAll(".text-paragraph");ot.fromTo(x,{opacity:0,x:-50,rotationX:-30},{opacity:1,x:0,rotationX:0,stagger:.2,duration:1,ease:"power3.out",delay:.8})}if(s.current){const x=setInterval(()=>{ot.to(s.current,{x:Math.random()*4-2,duration:.05,yoyo:!0,repeat:3})},3e3);return()=>clearInterval(x)}a.current&&a.current.querySelectorAll(".floating-orb").forEach((_,T)=>{ot.to(_,{y:Math.random()*30-15,x:Math.random()*30-15,duration:3+T*.5,repeat:-1,yoyo:!0,ease:"sine.inOut",delay:T*.3})})}},[m]);const y=x=>{const{clientX:_,clientY:T}=x,{innerWidth:A,innerHeight:b}=window,P=(_/A-.5)*20,D=(T/b-.5)*20;f({x:P,y:D}),t.current&&ot.to(t.current,{x:-P*.5,y:-D*.5,duration:.5,ease:"power2.out"}),i.current&&ot.to(i.current,{x:P*.3,y:D*.3,duration:.5,ease:"power2.out"})},w=(x,_)=>{navigator.clipboard.writeText(x),p(_),setTimeout(()=>p(null),2e3)};return R.jsxs("section",{className:"w-full min-h-screen md:h-screen flex items-center justify-center px-4 md:px-6 py-8 md:py-0 relative overflow-hidden",onMouseMove:y,children:[R.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none opacity-20",children:R.jsx("div",{className:"absolute inset-0",style:{backgroundImage:`
            linear-gradient(0deg, transparent 24%, rgba(139, 92, 246, .3) 25%, rgba(139, 92, 246, .3) 26%, transparent 27%, transparent 74%, rgba(139, 92, 246, .3) 75%, rgba(139, 92, 246, .3) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(139, 92, 246, .3) 25%, rgba(139, 92, 246, .3) 26%, transparent 27%, transparent 74%, rgba(139, 92, 246, .3) 75%, rgba(139, 92, 246, .3) 76%, transparent 77%, transparent)
          `,backgroundSize:"50px 50px",animation:"grid-move 20s linear infinite"}})}),R.jsxs("div",{ref:a,className:"absolute inset-0 pointer-events-none",children:[R.jsx("div",{className:"floating-orb absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"}),R.jsx("div",{className:"floating-orb absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"}),R.jsx("div",{className:"floating-orb absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"})]}),R.jsxs("div",{className:"max-w-7xl w-full relative z-10",children:[R.jsx("div",{ref:e,className:"mb-4 md:mb-8 perspective-1000",children:R.jsx("div",{className:"flex flex-wrap justify-center gap-1 md:gap-2 lg:gap-3",children:"LAURA CORDEIRO".split("").map((x,_)=>R.jsx("span",{className:"letter inline-block text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black relative",style:{background:"linear-gradient(45deg, #8b5cf6, #ec4899, #8b5cf6)",backgroundSize:"200% 200%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:`gradient-shift ${3+_*.1}s ease infinite`,textShadow:`
                    0 0 10px rgba(139, 92, 246, 0.5),
                    0 0 20px rgba(236, 72, 153, 0.3),
                    0 0 30px rgba(139, 92, 246, 0.2)
                  `},children:x===" "?" ":x},_))})}),R.jsxs("h2",{ref:s,className:"text-lg md:text-2xl lg:text-3xl font-bold text-center mb-12 relative",style:{color:"#fff",textShadow:`
              2px 2px 0px rgba(139, 92, 246, 0.7),
              -2px -2px 0px rgba(236, 72, 153, 0.7)
            `},children:[R.jsx(Sh,{className:"inline-block w-5 h-5 md:w-7 md:h-7 mr-2 text-purple-400"}),"Frontend Developer & Creative Coder"]}),R.jsxs("div",{className:"grid md:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto",children:[R.jsxs("div",{className:"space-y-6",children:[R.jsx("div",{ref:t,className:"relative group max-w-xs ml-auto mr-8",children:R.jsxs("div",{className:"relative",children:[R.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-3xl blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-spin-slow"}),R.jsxs("div",{className:"relative rounded-3xl overflow-hidden border-4 border-white/10 group-hover:border-white/30 transition-all duration-500",children:[R.jsx("img",{src:z4,alt:"Laura Cordeiro",className:"w-full h-auto relative z-10 transform group-hover:scale-105 transition-transform duration-700"}),R.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-pink-900/30 opacity-60 group-hover:opacity-40 transition-opacity duration-500"}),R.jsx("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500",children:R.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent h-1/4 animate-scan-line"})})]}),R.jsx("div",{className:"absolute -top-3 -right-3 w-11 h-11 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-xl rotate-12 hover:rotate-0 hover:scale-110 transition-all duration-300 cursor-pointer z-20",children:R.jsx(Sh,{className:"w-5 h-5 text-white"})}),R.jsx("div",{className:"absolute -bottom-3 -left-3 w-11 h-11 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-xl -rotate-12 hover:rotate-0 hover:scale-110 transition-all duration-300 cursor-pointer z-20",children:R.jsx(_0,{className:"w-5 h-5 text-white"})})]})}),R.jsx("div",{ref:c,className:"space-y-2 max-w-xs ml-auto mr-8",children:B4.map((x,_)=>{const T=x.icon,A=h===_;return R.jsx("div",{className:"contact-card group relative",children:R.jsxs("div",{className:"flex items-center gap-2 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-lg px-3 py-2 transition-all duration-300",children:[R.jsx("div",{className:`w-8 h-8 rounded-lg bg-gradient-to-br ${x.color} flex items-center justify-center flex-shrink-0`,children:R.jsx(T,{className:"w-4 h-4 text-white"})}),R.jsxs("div",{className:"flex-1 min-w-0",children:[R.jsx("div",{className:"text-[10px] text-gray-400 uppercase tracking-wide font-semibold",children:x.label}),R.jsx("a",{href:x.href||"#",onClick:b=>{x.href||b.preventDefault()},className:"text-xs text-white font-medium hover:text-purple-400 transition-colors truncate block",children:x.displayValue})]}),R.jsxs("div",{className:"flex items-center gap-1 flex-shrink-0",children:[x.href&&R.jsx("a",{href:x.href,target:"_blank",rel:"noopener noreferrer",className:"w-7 h-7 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110",title:x.label==="GitHub"?"Acessar":"Contatar",children:R.jsx(A4,{className:"w-3 h-3 text-white/90"})}),R.jsx("button",{onClick:b=>{b.stopPropagation(),w(x.value,_)},className:"w-7 h-7 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110",title:"Copiar",children:A?R.jsx(zb,{className:"w-3 h-3 text-green-400"}):R.jsx(qb,{className:"w-3 h-3 text-white/90"})})]})]})},x.label)})})]}),R.jsxs("div",{ref:i,className:"space-y-5",children:[R.jsxs("div",{className:"text-paragraph",children:[R.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[R.jsx(Bu,{className:"w-6 h-6 text-purple-400"}),R.jsx("h3",{className:"text-xl md:text-2xl font-bold text-white",children:"Sobre Mim"})]}),R.jsxs("p",{className:"text-gray-300 text-sm md:text-base leading-relaxed",children:["Olá! Sou ",R.jsx("span",{className:"text-purple-400 font-bold",children:"Laura Cordeiro"}),", uma desenvolvedora frontend apaixonada por criar experiências digitais que ",R.jsx("span",{className:"text-pink-400 font-bold",children:"surpreendem"})," e",R.jsx("span",{className:"text-purple-400 font-bold",children:" encantam"}),". Minha missão é transformar ideias em interfaces interativas e funcionais que não apenas atendem às necessidades, mas superam expectativas."]})]}),R.jsxs("div",{className:"text-paragraph",children:[R.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[R.jsx(Sh,{className:"w-6 h-6 text-pink-400"}),R.jsx("h3",{className:"text-xl md:text-2xl font-bold text-white",children:"Minha Jornada"})]}),R.jsxs("p",{className:"text-gray-300 text-sm md:text-base leading-relaxed",children:["Com experiência em ",R.jsx("span",{className:"text-purple-400 font-bold",children:"React, TypeScript, GSAP e Three.js"}),", especializo-me em construir aplicações web modernas com animações avançadas e design inovador. Acredito que código bem escrito é uma forma de arte, e cada projeto é uma oportunidade de",R.jsx("span",{className:"text-pink-400 font-bold",children:" criar algo único"})," e memorável."]})]}),R.jsxs("div",{className:"text-paragraph",children:[R.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[R.jsx(ix,{className:"w-6 h-6 text-pink-400"}),R.jsx("h3",{className:"text-xl md:text-2xl font-bold text-white",children:"O Que Me Move"})]}),R.jsxs("p",{className:"text-gray-300 text-sm md:text-base leading-relaxed",children:["Adoro desafios que me permitem explorar os ",R.jsx("span",{className:"text-purple-400 font-bold",children:"limites do que é possível"})," na web. Seja criando animações imersivas, desenvolvendo interfaces responsivas ou otimizando performance, estou sempre em busca de ",R.jsx("span",{className:"text-pink-400 font-bold",children:"inovação e excelência"}),". Quando não estou codando, estou aprendendo novas tecnologias e me inspirando em design e arte digital."]})]}),R.jsxs("div",{className:"flex flex-wrap gap-3 pt-4",children:[R.jsxs("div",{className:"bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl px-4 py-2 backdrop-blur-sm",children:[R.jsx("div",{className:"text-purple-400 font-bold text-base",children:"3+"}),R.jsxs("div",{className:"text-gray-400 text-xs leading-tight",children:["Anos de Experiência",R.jsx("br",{}),"em Projetos Acadêmicos"]})]}),R.jsxs("div",{className:"bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-xl px-4 py-2 backdrop-blur-sm",children:[R.jsx("div",{className:"text-pink-400 font-bold text-base",children:"1+"}),R.jsxs("div",{className:"text-gray-400 text-xs leading-tight",children:["Anos de Experiência",R.jsx("br",{}),"Profissional"]})]}),R.jsxs("div",{className:"bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl px-4 py-2 backdrop-blur-sm",children:[R.jsx("div",{className:"text-blue-400 font-bold text-base",children:"10+"}),R.jsx("div",{className:"text-gray-400 text-xs",children:"Tecnologias"})]})]})]})]})]}),R.jsx("style",{children:`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes grid-move {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }

        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes scan-line {
          0% { top: 0%; }
          100% { top: 100%; }
        }

        @keyframes border-spin {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-scan-line {
          animation: scan-line 3s ease-in-out infinite;
        }

        .animate-border-spin {
          animation: border-spin 3s linear infinite;
        }
      `})]})}var sx={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},f_=eo.createContext&&eo.createContext(sx),V4=["attr","size","title"];function H4(o,e){if(o==null)return{};var t=G4(o,e),i,s;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(o);for(s=0;s<a.length;s++)i=a[s],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(o,i)&&(t[i]=o[i])}return t}function G4(o,e){if(o==null)return{};var t={};for(var i in o)if(Object.prototype.hasOwnProperty.call(o,i)){if(e.indexOf(i)>=0)continue;t[i]=o[i]}return t}function Vu(){return Vu=Object.assign?Object.assign.bind():function(o){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(o[i]=t[i])}return o},Vu.apply(this,arguments)}function h_(o,e){var t=Object.keys(o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(o);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(o,s).enumerable})),t.push.apply(t,i)}return t}function Hu(o){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?h_(Object(t),!0).forEach(function(i){W4(o,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(t)):h_(Object(t)).forEach(function(i){Object.defineProperty(o,i,Object.getOwnPropertyDescriptor(t,i))})}return o}function W4(o,e,t){return e=j4(e),e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}function j4(o){var e=X4(o,"string");return typeof e=="symbol"?e:e+""}function X4(o,e){if(typeof o!="object"||!o)return o;var t=o[Symbol.toPrimitive];if(t!==void 0){var i=t.call(o,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(o)}function ox(o){return o&&o.map((e,t)=>eo.createElement(e.tag,Hu({key:t},e.attr),ox(e.child)))}function xn(o){return e=>eo.createElement(q4,Vu({attr:Hu({},o.attr)},e),ox(o.child))}function q4(o){var e=t=>{var{attr:i,size:s,title:a}=o,c=H4(o,V4),u=s||t.size||"1em",f;return t.className&&(f=t.className),o.className&&(f=(f?f+" ":"")+o.className),eo.createElement("svg",Vu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,c,{className:f,style:Hu(Hu({color:o.color||t.color},t.style),o.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),a&&eo.createElement("title",null,a),o.children)};return f_!==void 0?eo.createElement(f_.Consumer,null,t=>e(t)):e(sx)}function Y4(o){return xn({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4.237.001c-.312-.013-.665.072-.828.457-.158.374-.283 1.188-.34 2.276l1.223.591c-.02-.737.007-1.43.076-2.066-.026.299-.056.96.006 2.039.019.342.049.725.088 1.15.002.024.002.047.007.069a45.485 45.485 0 0 0 .309 2.412c.057.368.126.752.195 1.16l-.01.01c.014.01.015.018.014.023l.03.16c.03.162.06.328.093.494l.108.553.056.289a61.72 61.72 0 0 0 .457 2.068c.09.382.186.78.287 1.186.098.386.199.783.309 1.193.096.362.199.735.303 1.117.003.018.012.036.015.055a145.826 145.826 0 0 0 .34 1.185l.049.174c.078.261.158.533.242.805a4.2 4.2 0 0 1-.293-.135l-.19-.654c-.02-.077-.042-.148-.062-.225l-.002-.004-.004-.002c-.087-.3-.17-.607-.257-.916-.023-.087-.044-.173-.069-.263l-.314-1.178c-.1-.381-.194-.765-.29-1.154-.094-.39-.185-.78-.277-1.172-.093-.401-.181-.8-.265-1.203-.085-.396-.161-.798-.24-1.193a50.315 50.315 0 0 1-.211-1.17c-.004-.013-.006-.03-.01-.041l.004-.002c-.057-.386-.116-.77-.174-1.15a60.905 60.905 0 0 1-.154-1.204 27.447 27.447 0 0 1-.172-2.41l-1.22-.59c-.004.074-.01.15-.013.23-.012.294-.02.605-.023.93a45.3 45.3 0 0 0 .006 1.157c.009.37.025.755.045 1.148.02.336.042.675.07 1.022l.002.039.006.004c.003.023.007.05.006.076.033.368.064.739.107 1.115a34.493 34.493 0 0 0 .303 2.125c.01.064.024.131.035.195a23.418 23.418 0 0 0 .547 2.32c.07.237.14.464.21.68.063.182.13.365.194.545.155.422.327.832.512 1.232l.006.004a.318.318 0 0 0 .02.05c.225.485.475.95.755 1.395.01.013.02.033.03.047-.455-.183-1.259-.098-1.253-.097.83.288 1.557.64 2.016 1.175-.183.2-.523.352-.953.477.594.064.924-.039 1.045-.092-.31.26-.483.732-.635 1.24.35-.57.696-.949 1.033-1.094.078.258.162.524.244.788A147.532 147.532 0 0 0 5.157 24a.56.56 0 0 0 .43-.312c.13-.282.83-1.775 1.908-3.875.413 1.303.88 2.679 1.386 4.109a.494.494 0 0 0 .076-.465 103.735 103.735 0 0 1-1.308-3.945c.154-.299.316-.612.484-.932.125.04.255.094.389.155.203.186.352.491.482.84a1.515 1.515 0 0 0-.334-1.098c1.335.258 2.547.09 3.287-.81a3.97 3.97 0 0 0 .192-.258c-.325.304-.682.404-1.313.273.996-.281 1.523-.617 2.035-1.22.12-.145.244-.303.371-.48-.943.722-1.927.822-2.9.493l-.045-.018c.914.02 2.203-.474 3.092-1.189.41-.33.796-.73 1.17-1.21.28-.359.55-.76.82-1.216.234-.393.468-.824.7-1.293a2.83 2.83 0 0 1-.74.137l-.144.008c-.048.002-.093 0-.146.002.885-.198 1.5-.74 1.994-1.447-.24.117-.628.262-1.07.297-.058.006-.12.006-.182.006-.013-.002-.028 0-.047-.002.306-.078.574-.178.81-.309a3.363 3.363 0 0 0 .358-.236c.044-.037.088-.07.13-.106.099-.086.193-.18.28-.287.028-.034.056-.063.08-.098.036-.05.073-.098.104-.146a8.388 8.388 0 0 0 .51-.828c.015-.031.032-.057.046-.088.04-.084.08-.16.11-.227.042-.099.074-.179.092-.238a.515.515 0 0 1-.108.051c-.273.112-.727.187-1.086.201-.004 0-.008 0-.013.004h-.067c.72-.214 1.067-.45 1.422-.818a13.883 13.883 0 0 0 1.154-1.428c.264-.37.505-.738.692-1.072a6.5 6.5 0 0 0 .298-.592c.066-.157.122-.305.172-.45-.466.01-.986.011-1.48 0 .495.01 1.015.007 1.484-.005.5-1.485.063-2.262.063-2.262s-.526-1.212-1.4-.851c-.426.175-1.172.73-2.083 1.56l.514 1.45a17.561 17.561 0 0 1 1.703-1.602c-.257.22-.807.726-1.615 1.644-.256.29-.537.624-.844.997-.017.02-.035.038-.047.06a51.435 51.435 0 0 0-1.666 2.187c-.248.34-.498.704-.765 1.088h-.016c.002.02-.004.028-.01.032l-.101.152c-.104.155-.213.31-.318.47l-.352.534c-.061.09-.124.181-.186.277-.184.282-.367.573-.558.873a97.351 97.351 0 0 0-1.428 2.338 96.866 96.866 0 0 0-1.341 2.343c-.012.017-.02.04-.034.057a197.256 197.256 0 0 0-.668 1.223l-.097.181c-.17.318-.346.642-.52.979 0 .004-.005.008-.006.013-.026.048-.05.093-.072.141-.117.222-.218.424-.45.87a1.352 1.352 0 0 0-.233-.182l.345-.65c.047-.089.096-.177.143-.27l.04-.077.546-1.001.13-.233v-.006l-.001-.006c.169-.31.345-.62.52-.94.051-.087.102-.173.153-.265.224-.395.454-.794.684-1.197a91.685 91.685 0 0 1 2.135-3.504c.247-.386.503-.77.754-1.152.092-.138.182-.272.279-.41a72.9 72.9 0 0 1 .48-.701c.007-.012.019-.024.026-.037h.006c.26-.356.517-.713.773-1.065.278-.373.554-.735.83-1.09a31.075 31.075 0 0 1 1.777-2.075l-.515-1.446c-.06.057-.126.116-.192.178a32.37 32.37 0 0 0-.758.729c-.295.294-.597.606-.912.935a46.032 46.032 0 0 0-1.632 1.838l-.03.033.002.008c-.017.02-.033.044-.054.064-.266.323-.538.649-.801.985a39.105 39.105 0 0 0-1.445 1.95c-.043.06-.085.126-.127.186a26.458 26.458 0 0 0-1.403 2.303c-.13.247-.256.485-.37.715-.096.195-.187.395-.278.591-.21.463-.398.93-.566 1.399l.002.006a.36.36 0 0 0-.026.058c-.108.303-.203.608-.29.914-.14.174-.302.325-.483.46a3.505 3.505 0 0 0-.131-.153 5.148 5.148 0 0 0 .824-2.211 6.4 6.4 0 0 0-.016-1.488c-.046-.4-.126-.82-.238-1.274-.097-.393-.217-.81-.363-1.248-.091.185-.22.367-.379.545l-.086.094c-.029.032-.06.06-.092.094.434-.674.486-1.397.358-2.148a2.722 2.722 0 0 1-.49.85c-.033.038-.072.077-.11.116-.01.007-.019.018-.033.028.144-.24.25-.467.318-.698a1.29 1.29 0 0 0 .04-.146 2.85 2.85 0 0 0 .038-.225l.018-.146a2.11 2.11 0 0 0-.002-.354c-.003-.04-.004-.076-.01-.113-.01-.055-.016-.105-.027-.154a7.416 7.416 0 0 0-.193-.84c-.01-.028-.015-.056-.026-.084-.027-.079-.048-.149-.072-.209a2.1 2.1 0 0 0-.09-.209.455.455 0 0 1-.035.1c-.102.24-.34.57-.557.8-.003.003-.007.005-.007.01l-.04.043c.318-.58.39-.946.385-1.398a12.274 12.274 0 0 0-.16-1.615 10.68 10.68 0 0 0-.232-1.104 5.853 5.853 0 0 0-.18-.558 6.337 6.337 0 0 0-.172-.391 26.18 26.18 0 0 0 .002-.004C5.576.341 4.82.124 4.82.124s-.27-.11-.582-.123zm3.38 15.783l.032.082v.002c-.06.033-.116.067-.178.097-.012.004-.024.012-.039.018a2.41 2.41 0 0 0 .186-.2zm-.603 1.626c.13.136.25.242.354.32l.07.227a1.866 1.866 0 0 0-.246.053l-.03-.098c-.024-.084-.048-.17-.076-.257l-.021-.073zm.26.875a2.34 2.34 0 0 1 .271.01l.07.229a.778.778 0 0 1 .247-.004l-.326.627a127.643 127.643 0 0 1-.262-.862z"},child:[]}]})(o)}function $4(o){return xn({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z"},child:[]}]})(o)}function K4(o){return xn({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"},child:[]}]})(o)}function Z4(o){return xn({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"},child:[]}]})(o)}function Q4(o){return xn({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"},child:[]}]})(o)}function J4(o){return xn({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"},child:[]}]})(o)}function eA(o){return xn({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"},child:[]}]})(o)}function tA(o){return xn({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.043c-.06-.003-.12 0-.18 0h-.016c.151-.467-.182-.825-1.065-1.224-.915-.4-1.646-.336-1.77.465-.008.043-.013.066-.018.135-.068.023-.139.053-.209.064-.43.268-.662.669-.793 1.187-.13.533-.17 1.156-.205 1.869v.003c-.02.334-.17.838-.319 1.35-1.5 1.072-3.58 1.538-5.348.334a2.645 2.645 0 00-.402-.533 1.45 1.45 0 00-.275-.333c.182 0 .338-.03.465-.067a.615.615 0 00.314-.334c.108-.267 0-.697-.345-1.163-.345-.467-.931-.995-1.788-1.521-.63-.4-.986-.87-1.15-1.396-.165-.534-.143-1.085-.015-1.645.245-1.07.873-2.11 1.274-2.763.107-.065.037.135-.408.974-.396.751-1.14 2.497-.122 3.854a8.123 8.123 0 01.647-2.876c.564-1.278 1.743-3.504 1.836-5.268.048.036.217.135.289.202.218.133.38.333.59.465.21.201.477.335.876.335.039.003.075.006.11.006.412 0 .73-.134.997-.268.29-.134.52-.334.74-.4h.005c.467-.135.835-.402 1.044-.7zm2.185 8.958c.037.6.343 1.245.882 1.377.588.134 1.434-.333 1.791-.765l.211-.01c.315-.007.577.01.847.268l.003.003c.208.199.305.53.391.876.085.4.154.78.409 1.066.486.527.645.906.636 1.14l.003-.007v.018l-.003-.012c-.015.262-.185.396-.498.595-.63.401-1.746.712-2.457 1.57-.618.737-1.37 1.14-2.036 1.191-.664.053-1.237-.2-1.574-.898l-.005-.003c-.21-.4-.12-1.025.056-1.69.176-.668.428-1.344.463-1.897.037-.714.076-1.335.195-1.814.12-.465.308-.797.641-.984l.045-.022zm-10.814.049h.01c.053 0 .105.005.157.014.376.055.706.333 1.023.752l.91 1.664.003.003c.243.533.754 1.064 1.189 1.637.434.598.77 1.131.729 1.57v.006c-.057.744-.48 1.148-1.125 1.294-.645.135-1.52.002-2.395-.464-.968-.536-2.118-.469-2.857-.602-.369-.066-.61-.2-.723-.4-.11-.2-.113-.602.123-1.23v-.004l.002-.003c.117-.334.03-.752-.027-1.118-.055-.401-.083-.71.043-.94.16-.334.396-.4.69-.533.294-.135.64-.202.915-.47h.002v-.002c.256-.268.445-.601.668-.838.19-.201.38-.336.663-.336zm7.159-9.074c-.435.201-.945.535-1.488.535-.542 0-.97-.267-1.28-.466-.154-.134-.28-.268-.373-.335-.164-.134-.144-.333-.074-.333.109.016.129.134.199.2.096.066.215.2.36.333.292.2.68.467 1.167.467.485 0 1.053-.267 1.398-.466.195-.135.445-.334.648-.467.156-.136.149-.267.279-.267.128.016.034.134-.147.332a8.097 8.097 0 01-.69.468zm-1.082-1.583V5.64c-.006-.02.013-.042.029-.05.074-.043.18-.027.26.004.063 0 .16.067.15.135-.006.049-.085.066-.135.066-.055 0-.092-.043-.141-.068-.052-.018-.146-.008-.163-.065zm-.551 0c-.02.058-.113.049-.166.066-.047.025-.086.068-.14.068-.05 0-.13-.02-.136-.068-.01-.066.088-.133.15-.133.08-.031.184-.047.259-.005.019.009.036.03.03.05v.02h.003z"},child:[]}]})(o)}function nA(o){return xn({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z"},child:[]}]})(o)}function iA(o){return xn({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zM18.855 6.05a.143.143 0 0 0-.053.157.416.416 0 0 1-.053.45.14.14 0 0 0 .023.197.141.141 0 0 0 .084.03.14.14 0 0 0 .106-.05.691.691 0 0 0 .087-.751.138.138 0 0 0-.194-.033z"},child:[]}]})(o)}function rA(o){return xn({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"},child:[]}]})(o)}function sA(o){return xn({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"},child:[]}]})(o)}function oA(o){return xn({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21.8537 1.4158a10.4504 10.4504 0 0 1-1.284 2.2471A11.9666 11.9666 0 1 0 3.8518 20.7757l.4445.3951a11.9543 11.9543 0 0 0 19.6316-8.2971c.3457-3.0126-.568-6.8649-2.0743-11.458zM5.5805 20.8745a1.0174 1.0174 0 1 1-.1482-1.4323 1.0396 1.0396 0 0 1 .1482 1.4323zm16.1991-3.5806c-2.9385 3.9263-9.2601 2.5928-13.2852 2.7904 0 0-.7161.0494-1.4323.1481 0 0 .2717-.1234.6174-.2469 2.8398-.9877 4.1732-1.1853 5.9018-2.0743 3.2349-1.6545 6.4698-5.2844 7.1118-9.0379-1.2347 3.6053-4.9881 6.7167-8.3959 7.9761-2.3459.8643-6.5685 1.7039-6.5685 1.7039l-.1729-.0988c-2.8645-1.4076-2.9632-7.6304 2.2718-9.6306 2.2966-.889 4.4696-.395 6.9637-.9877 2.6422-.6174 5.7043-2.5929 6.939-5.1857 1.3828 4.1732 3.062 10.643.0493 14.6434z"},child:[]}]})(o)}function aA(o){return xn({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"},child:[]}]})(o)}function lA(o){return xn({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"},child:[]}]})(o)}function cA(o){return xn({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"},child:[]}]})(o)}function uA(o){return xn({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"},child:[]}]})(o)}function dA(o){return xn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 22l-5 -19l19 5.5z"},child:[]},{tag:"path",attr:{d:"M12.573 17.58l-6.152 -1.576l8.796 -9.466l1.914 6.64"},child:[]},{tag:"path",attr:{d:"M12.573 17.58l-1.573 -6.58l6.13 2.179"},child:[]},{tag:"path",attr:{d:"M9.527 4.893l1.473 6.107l-6.31 -1.564z"},child:[]}]})(o)}function fA(o){return xn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 3v18l4 -2.5v-13z"},child:[]},{tag:"path",attr:{d:"M9.165 13.903l-4.165 3.597l-2 -1l4.333 -4.5m1.735 -1.802l6.932 -7.198v5l-4.795 4.141"},child:[]},{tag:"path",attr:{d:"M16 16.5l-11 -10l-2 1l13 13.5"},child:[]}]})(o)}const p_=[{name:"JavaScript",category:"Linguagens",color:"#F7DF1E",Icon:eA},{name:"TypeScript",category:"Linguagens",color:"#3178C6",Icon:lA},{name:"HTML5",category:"Linguagens",color:"#E34F26",Icon:J4},{name:"CSS3",category:"Linguagens",color:"#1572B6",Icon:K4},{name:"Python",category:"Linguagens",color:"#3776AB",Icon:rA},{name:"Java",category:"Linguagens",color:"#007396",Icon:cA},{name:"PHP",category:"Linguagens",color:"#777BB4",Icon:nA},{name:"React",category:"Frameworks",color:"#61DAFB",Icon:sA},{name:"Spring Boot",category:"Frameworks",color:"#6DB33F",Icon:oA},{name:"Bootstrap",category:"Frameworks",color:"#7952B3",Icon:$4},{name:"GSAP",category:"Bibliotecas",color:"#88CE02",Icon:()=>R.jsx("div",{className:"text-3xl font-black",children:"GS"})},{name:"Three.js",category:"Bibliotecas",color:"#049EF4",Icon:dA},{name:"Tailwind CSS",category:"Bibliotecas",color:"#06B6D4",Icon:aA},{name:"Git",category:"Ferramentas",color:"#F05032",Icon:Q4},{name:"VS Code",category:"Ferramentas",color:"#007ACC",Icon:fA},{name:"Figma",category:"Ferramentas",color:"#F24E1E",Icon:Z4},{name:"Postman",category:"Ferramentas",color:"#FF6C37",Icon:iA},{name:"Maven",category:"Ferramentas",color:"#C71A36",Icon:Y4},{name:"Linux",category:"Sistemas Operacionais",color:"#FCC624",Icon:tA},{name:"Windows",category:"Sistemas Operacionais",color:"#0078D4",Icon:uA}],hA=["Todas","Linguagens","Frameworks","Bibliotecas","Ferramentas","Sistemas Operacionais"];function pA(){const o=Ue.useRef(null),[e,t]=Ue.useState("Todas"),[i,s]=Ue.useState(!1);Ue.useEffect(()=>{const u=()=>{s(window.innerWidth<768)};return u(),window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)},[]),Ue.useEffect(()=>{if(i||!o.current)return;const u=o.current.querySelectorAll(".tech-card");ot.fromTo(u,{opacity:0,scale:0,rotationY:-180},{opacity:1,scale:1,rotationY:0,stagger:.03,duration:.6,ease:"back.out(1.7)"})},[e]);const a=u=>{var h;if(u===e)return;const f=(h=o.current)==null?void 0:h.querySelectorAll(".tech-card");f&&!i?ot.to(f,{opacity:0,scale:0,duration:.2,stagger:.01,onComplete:()=>t(u)}):t(u)},c=e==="Todas"?p_:p_.filter(u=>u.category===e);return R.jsxs("section",{className:"w-full min-h-screen md:h-screen flex items-start md:items-center justify-center px-4 md:px-6 py-8 md:pt-12 relative overflow-hidden",children:[R.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none opacity-10",children:R.jsx("div",{className:"absolute inset-0",style:{backgroundImage:`
            linear-gradient(0deg, transparent 24%, rgba(99, 102, 241, .5) 25%, rgba(99, 102, 241, .5) 26%, transparent 27%, transparent 74%, rgba(99, 102, 241, .5) 75%, rgba(99, 102, 241, .5) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(99, 102, 241, .5) 25%, rgba(99, 102, 241, .5) 26%, transparent 27%, transparent 74%, rgba(99, 102, 241, .5) 75%, rgba(99, 102, 241, .5) 76%, transparent 77%, transparent)
          `,backgroundSize:"60px 60px",transform:"perspective(500px) rotateX(60deg)",animation:"grid-slide 20s linear infinite"}})}),R.jsxs("div",{className:"max-w-7xl w-full relative z-10",children:[R.jsxs("div",{className:"text-center mb-4 md:mb-6",children:[R.jsx("h2",{className:"text-3xl md:text-4xl lg:text-5xl font-black mb-2 md:mb-3 relative inline-block",children:R.jsx("span",{className:"relative z-10 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",children:"Tech Stack"})}),R.jsx("p",{className:"text-gray-400 text-xs md:text-sm lg:text-base mb-3 md:mb-4",children:"Ferramentas e tecnologias que domino"}),R.jsx("div",{className:"flex flex-wrap justify-center gap-1.5 md:gap-2 mb-4 md:mb-6",children:hA.map(u=>R.jsx("button",{onClick:()=>a(u),className:`px-2.5 md:px-3 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${e===u?"bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-purple-500/50":"bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"}`,children:u},u))})]}),R.jsx("div",{ref:o,className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3 max-h-[calc(100vh-220px)] md:max-h-[calc(100vh-260px)] overflow-y-auto px-2 md:px-4 pb-4 md:pb-8 scrollbar-hide content-start",children:c.map((u,f)=>{const h=u.Icon;return R.jsx("div",{className:"tech-card group cursor-pointer",onMouseMove:p=>{const m=p.currentTarget.getBoundingClientRect(),v=p.clientX-m.left-m.width/2,y=p.clientY-m.top-m.height/2;ot.to(p.currentTarget,{rotationY:v*.1,rotationX:-y*.1,duration:.3,transformPerspective:1e3})},onMouseLeave:p=>{ot.to(p.currentTarget,{rotationY:0,rotationX:0,duration:.5,ease:"elastic.out(1, 0.3)"})},children:R.jsxs("div",{className:"relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 flex flex-col items-center justify-center border border-white/10 transition-all duration-300 group-hover:border-white/30",style:{boxShadow:`0 0 30px ${u.color}20`},children:[R.jsx("div",{className:"mb-3 transform group-hover:scale-125 transition-transform duration-500 flex items-center justify-center",style:{filter:`drop-shadow(0 0 10px ${u.color}80)`},children:R.jsx(h,{className:"w-12 h-12",style:{color:u.color}})}),R.jsx("h3",{className:"text-white font-bold text-sm text-center mb-1",children:u.name}),R.jsx("span",{className:"text-xs px-2 py-1 rounded-full font-semibold",style:{backgroundColor:`${u.color}20`,color:u.color},children:u.category}),R.jsx("div",{className:"absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl",style:{backgroundColor:u.color}}),R.jsx("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl overflow-hidden",children:R.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"})})]})},`${u.name}-${f}`)})})]}),R.jsx("style",{children:`
        @keyframes grid-slide {
          0% { background-position: 0 0; }
          100% { background-position: 60px 60px; }
        }

        /* Hide scrollbar but keep functionality */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `})]})}const mA=[{icon:x4,title:"Comunicação",description:"Habilidade de expressar ideias claramente e ouvir ativamente",color:"from-blue-500 to-cyan-600"},{icon:f4,title:"Criatividade",description:"Capacidade de pensar fora da caixa e propor soluções inovadoras",color:"from-yellow-500 to-orange-600"},{icon:I4,title:"Trabalho em Equipe",description:"Colaboração efetiva em ambientes multidisciplinares",color:"from-green-500 to-emerald-600"},{icon:k4,title:"Proatividade",description:"Iniciativa para antecipar necessidades e agir sem aguardar instruções",color:"from-purple-500 to-violet-600"},{icon:ix,title:"Comprometimento",description:"Dedicação total aos projetos e responsabilidades assumidas",color:"from-pink-500 to-rose-600"},{icon:E4,title:"Adaptabilidade",description:"Flexibilidade para se ajustar a novas tecnologias e contextos",color:"from-indigo-500 to-blue-600"},{icon:zu,title:"Aprendizado Rápido",description:"Capacidade de absorver novos conhecimentos com agilidade",color:"from-teal-500 to-cyan-600"},{icon:Ib,title:"Resolução de Problemas",description:"Análise crítica e tomada de decisões assertivas",color:"from-red-500 to-orange-600"},{icon:N4,title:"Liderança",description:"Capacidade de inspirar e guiar equipes em direção aos objetivos",color:"from-amber-500 to-yellow-600"}];function gA(){const o=Ue.useRef(null),[e,t]=Ue.useState(!1);return Ue.useEffect(()=>{const i=()=>{t(window.innerWidth<768)};return i(),window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]),Ue.useEffect(()=>{if(e||!o.current)return;const i=o.current.querySelectorAll(".skill-card");ot.fromTo(i,{opacity:0,y:60,scale:.9},{opacity:1,y:0,scale:1,duration:.8,stagger:.1,ease:"power3.out"})},[e]),R.jsxs("section",{className:"w-full min-h-screen md:h-screen flex items-start md:items-center justify-center px-4 md:px-6 py-8 md:py-0 relative overflow-hidden",children:[R.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[R.jsx("div",{className:"absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"}),R.jsx("div",{className:"absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"})]}),R.jsxs("div",{className:"max-w-7xl w-full relative z-10 py-4 md:py-12",children:[R.jsxs("div",{className:"text-center mb-6 md:mb-12",children:[R.jsx("h2",{className:"text-3xl md:text-4xl lg:text-6xl font-black mb-2 md:mb-4",children:R.jsx("span",{className:"bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent",children:"Soft Skills"})}),R.jsx("p",{className:"text-gray-400 text-xs md:text-base lg:text-lg",children:"Habilidades interpessoais que fazem a diferença"})]}),R.jsx("div",{ref:o,className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 max-h-[calc(100vh-180px)] md:max-h-[calc(100vh-280px)] overflow-y-auto px-2 md:px-4 pb-4 scrollbar-hide",children:mA.map((i,s)=>{const a=i.icon;return R.jsxs("div",{className:"skill-card group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 overflow-hidden cursor-pointer",children:[R.jsx("div",{className:`absolute inset-0 bg-gradient-to-br ${i.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}),R.jsxs("div",{className:"relative z-10",children:[R.jsx("div",{className:`w-14 h-14 rounded-xl bg-gradient-to-br ${i.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`,children:R.jsx(a,{className:"w-7 h-7 text-white"})}),R.jsx("h3",{className:"text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300",children:i.title}),R.jsx("p",{className:"text-gray-400 text-sm leading-relaxed",children:i.description})]}),R.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),R.jsx("div",{className:"absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"}),R.jsx("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl overflow-hidden",children:R.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"})})]},i.title)})})]}),R.jsx("style",{children:`
        /* Hide scrollbar but keep functionality */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `})]})}function _A(){const o=Ue.useRef(null),e=Ue.useRef(null),[t,i]=Ue.useState(!1);return Ue.useEffect(()=>{const s=()=>{i(window.innerWidth<768)};return s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),Ue.useEffect(()=>{if(!(t||!o.current)){if(o.current){const s=o.current.querySelector(".education-card"),a=o.current.querySelectorAll(".detail-item");ot.fromTo(s,{opacity:0,y:80,scale:.9},{opacity:1,y:0,scale:1,duration:1,ease:"power3.out"}),ot.fromTo(a,{opacity:0,x:-30},{opacity:1,x:0,duration:.8,stagger:.1,delay:.3,ease:"power2.out"})}if(e.current){const a=e.current.querySelectorAll(".timeline-item");ot.fromTo(a,{opacity:0,y:50},{opacity:1,y:0,duration:.8,stagger:.1,delay:.5,ease:"power2.out"})}}},[t]),R.jsxs("section",{className:"w-full min-h-screen md:h-screen flex items-start md:items-center justify-center px-4 md:px-6 py-8 md:py-0 relative overflow-hidden",children:[R.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[R.jsx("div",{className:"absolute top-1/4 left-1/3 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"}),R.jsx("div",{className:"absolute bottom-1/3 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-700"})]}),R.jsxs("div",{className:"max-w-6xl w-full relative z-10 py-4 md:py-12",children:[R.jsxs("div",{className:"text-center mb-6 md:mb-10",children:[R.jsx("h2",{className:"text-3xl md:text-4xl lg:text-5xl font-black mb-2 md:mb-3",children:R.jsx("span",{className:"bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent",children:"Formação Acadêmica"})}),R.jsx("p",{className:"text-gray-400 text-xs md:text-base",children:"Minha jornada educacional"})]}),R.jsx("div",{ref:e,className:"relative max-h-[calc(100vh-180px)] md:max-h-[calc(100vh-240px)] overflow-y-auto px-2 md:px-4 pb-4 scrollbar-hide",children:R.jsxs("div",{className:"education-card group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 md:p-12 hover:border-purple-500/50 transition-all duration-500 overflow-hidden shadow-2xl",children:[R.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),R.jsx("div",{className:"absolute top-10 right-10 opacity-5 group-hover:opacity-10 transition-opacity duration-500",children:R.jsx(Np,{className:"w-32 h-32 text-purple-400"})}),R.jsx("div",{className:"absolute bottom-10 left-10 opacity-5 group-hover:opacity-10 transition-opacity duration-500",children:R.jsx(zu,{className:"w-24 h-24 text-indigo-400"})}),R.jsxs("div",{className:"relative z-10",children:[R.jsxs("div",{className:"flex items-start gap-6 mb-8",children:[R.jsxs("div",{className:"relative",children:[R.jsx("div",{className:"w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500",children:R.jsx(c4,{className:"w-10 h-10 text-white"})}),R.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-indigo-500 to-pink-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"})]}),R.jsxs("div",{className:"flex-1",children:[R.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[R.jsx(ex,{className:"w-5 h-5 text-yellow-400"}),R.jsx("span",{className:"text-yellow-400 font-semibold text-sm md:text-base uppercase tracking-wide",children:"Curso Técnico"})]}),R.jsx("h3",{className:"text-2xl md:text-4xl font-black text-white mb-2 leading-tight",children:"Técnico em Informática para Internet"}),R.jsx("p",{className:"text-purple-300 text-lg md:text-xl font-semibold",children:"Instituto Federal de São Paulo (IFSP)"})]})]}),R.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",children:[R.jsxs("div",{className:"detail-item flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300",children:[R.jsx("div",{className:"w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0",children:R.jsx(tx,{className:"w-6 h-6 text-white"})}),R.jsxs("div",{children:[R.jsx("p",{className:"text-gray-400 text-xs md:text-sm uppercase tracking-wide",children:"Período"}),R.jsx("p",{className:"text-white font-bold text-base md:text-lg",children:"2022 - 2024"})]})]}),R.jsxs("div",{className:"detail-item flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300",children:[R.jsx("div",{className:"w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0",children:R.jsx(g0,{className:"w-6 h-6 text-white"})}),R.jsxs("div",{children:[R.jsx("p",{className:"text-gray-400 text-xs md:text-sm uppercase tracking-wide",children:"Campus"}),R.jsx("p",{className:"text-white font-bold text-base md:text-lg",children:"São Carlos - SP"})]})]})]}),R.jsx("div",{className:"detail-item bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20",children:R.jsxs("div",{className:"flex items-start gap-3",children:[R.jsx(zu,{className:"w-5 h-5 text-purple-400 mt-1 flex-shrink-0"}),R.jsxs("div",{children:[R.jsx("h4",{className:"text-purple-300 font-semibold mb-2 text-sm md:text-base",children:"Sobre o Curso"}),R.jsx("p",{className:"text-gray-300 text-sm md:text-base leading-relaxed",children:"Formação técnica focada no desenvolvimento de aplicações web, abrangendo tecnologias frontend e backend, programação para internet, design de interfaces, banco de dados e práticas modernas de desenvolvimento de software."})]})]})}),R.jsxs("div",{className:"flex flex-wrap gap-3 mt-6",children:[R.jsx("span",{className:"px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-xs md:text-sm font-semibold",children:"Desenvolvimento Web"}),R.jsx("span",{className:"px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-xs md:text-sm font-semibold",children:"Frontend & Backend"}),R.jsx("span",{className:"px-4 py-2 bg-pink-500/20 border border-pink-500/30 rounded-full text-pink-300 text-xs md:text-sm font-semibold",children:"Concluído"})]})]}),R.jsx("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl overflow-hidden",children:R.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"})})]})})]})]})}const vA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAACaCAYAAACNKudlAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAALiMAAC4jAXilP3YAAAt5SURBVHhe7d1/TJN3Hgfw79OnLQhSfmTIrjg1DMkNhcNFwKoXT5BJWI6b48xtA3XuFqODEyXuzhwXOeK2Ozwjkukcu3mGHZqInopRBirTqhGYAoOAzCL2CJVBUX7YAl3b5/neH46dfltQ5Ps8Q7+fV0JiPp+HfkvfT9vnefx+W4QAAAAAAAAAAAAAAAAAAAAAeFpxI/+YNm1aSFFR0fz29vbFR48ezSguLv6TKIq/OHz4cAxCaNrDvwaeKuvWrVvf3Nx88s6dO9/ZbLY7Doej7969e7i/vx+LomgeHh6+a7FY2q9evXqpuLh4Kfn74Mn9+AyTwsqVK/n4+PhFERERXy5cuNCL7I/FYDAYTp06tT4rK+sCx3GY7LuTnZ0dt2rVqkIfH59QpVJJtifMarXar169+ud9+/YV6PV6J9l/6623lmZkZBTOmDFjtkqlItsT1tPTg27evLmjvr4+Ozc312V82V27dk1VU1Oz32azOfAjiKJIljDGGA8NDeHLly8fW7du3Qzy9kk7d+4MM5vN5E1QZ7VacVFR0e/I8ZOTk31u3bplJ7enSRRF0eFw4LKysi3k+LJLTU39pdls/trheGS+j+RwOPCNGzfMERER08lxHnT8+PHtdrvd/d5CWUVFRQc5vslkihdFcZDcVgp1dXWD5PhjUZCFicrJyZmRmZlZGhgYGE3jJVOpVKKwsLDAkydP3kpKSppJ9kfYbLYAURQlffsZYbPZXHa44OBggaxJaFxvfbRDnpKRkbEtOjran2xM1KxZs1R5eXlnNm/eHED2wNiohqzX6//i5+f3e7JOy5w5c8JSUlL+QNbB2KiFvGHDhqULFizYROMlejQcx6GwsLC/knUwNmohr1mzJp3n+XG9VzyJwMBAVFtbe4isg9FRCXnHjh0varVaHc/zZEsSoaGhb+p0up+TdeAelZBTUlICfH19tWRdKhqNBmVlZb1B1oF7VEI2GAzLNRoNWZbU7NmzF5I14B6VkMPCwuaSNamFhoZ6SH1Z9llBJeRZs2bJeSEAIYTQwMDAC0uXLg0h68AVlZA5Tv4nlKenpyIhIUGeI72nHJWQfwp2u51rbm6Wf+96ClEJuauriyxJTqlU9h08ePAOWQeuqIRcXV0t+3uyxWL5DiF0l6wDV1RCttvtZUNDQ2RZUk1NTTfJGnCPSsgzZ86sdjgcLv/HKhVBEFBxcXEhWQfuUQlZp9N1m0ymRowfa5bOhBmNxsqSkpImsg7coxIyQmhYr9d/brPZRLJBmyAIaPfu3fvIOhgdrZBRenr6ievXrx8k6zSJoojq6ur279279z9kD4yOWsgIITR//vzVXV1dN8g6LX19fa21tbUfkHUwNqohI4TQhx9+mGEymb4n6xNltVrvVVRU/HHDhg3/JXusGe8VRuoh79mz59zZs2dfNxgMZOuJtbe32xobG3+dmpp6guyNsNvtarImFT8/vzayZrVaZbnEijHG338/vucQ9ZARQuidd975sqGhQdnU1DThpFtbWw2VlZVzFi1adJHsPchisRzned5O1qXQ1tbmckywZcuWbwVBkPyiEHdfPlkfy/ie9+OAMeY4jsMlJSWfLV++PFmlUgVNmTKF3MwtQRCQ0+nsamxsPBQTE7MNIfRY84zPnj2bp9Pp1qvVaocUp3OiKPK1tbV1ixcvjh/5+x7s5+Xl5W3evDkNY+zxYJ0WURT5u3fv1k+fPj3O3fijkSzkB+3atStEp9O9qdFokry8vGKDgoJ4MvChoSFkNBpRQEDAma6urgulpaX/zs3NNT200RhG/ujU1NQFGzdudDocDnKTCaurq1Ns3LixHiHkcuMj469YseJnmzZteoHneeqnk+3t7YrU1NRvEELjesWSJeQR77//vk9SUpJ3ZGSkKj8//3WVSvUSxlhQq9WdW7du/WdpaamHxWLpXb169RBC6LH2UgAAAOAZQfU9OTc3Nz4hIaHQy8vrxfGesD8KxhgNDg52+Pr6Js6dO/c62UcIoRUrVsS99957hf7+/qG01wdjjFFfX5/94sWL2Tk5OTvJPhPy8/N1AwMD5CpL6iwWizMnJyeKHD89PT3MaDSSm1PX09ODW1tb55DjT2bULobodLo3vL29yTJ1U6dO5VeuXJlC1uPi4lYFBwdLfkT+3HPPoZaWljNkfTKjFjLG2FOKCxDuhIeHu3yUgt1ul219MsZYttUiNFALGUxeEDIDIGQGQMgMgJAZACEzAEJmAITMAAiZARAyAyBkBkDIDICQGQAhMwBCZgCEzAAImQEQMgMgZAZAyAygFjIv14dd35+0R5aQIAiyrU/29fV1WZ88mVELuaOj41uO4yRfn4vuf5qBy8x5b2/v40ql0jV9CdhsNpf1yZMZzSmsvleuXCmPjo4O43lekrm5giDwer2+dtmyZct+uO8PjWM0GvOef/759R4eHi5LS2kQBIHv6OioCwkJcbs+ebKiGTJCCKHz588vWLJkicu8aBrOnDmjSExMHHN98IEDBxasWbNGkvEbGhoU8+bNczs+AAAAAMCj0Dzw4q5cueLp5eW1MzIycphs0tDQ0KAuKyv7PDs7u5HsofsHX8rKysqCuLg4ScY3Go3qqqqqf6WlpX1D9tAP4x84cGD322+/bSN7NJjNZnVjY+MXr7zyyjWyJ4vMzEydwWAgl/NS19bW5nz33Xdd1ifv2bNnam9vbzO5PW39/f3OI0eORJLjI4T8mpqamsjtaevu7saHDh1KJAeXxaVLlwoEQSDvkySqq6u3k+MXFxd/YLdL+h3VP6qpqTlOjl9TUxMvCMIwua0U9Hr9uF6pqF3xUiqVnqJI/aOr3IqJiXE5D+Z53l+u8bu6ul4jazExMQLHcbLcAR8fH0+yNhZqIYPJC0JmAITMAAiZARAyAyBkBkDIDICQGQAhMwBCZgCEzAAImQEQMgMgZAZAyAyAkBkAITMAQmYAhMwACJkBNEOWbX2y0+kyjw8hhGRZn4wxxqOML5vxfucWtZBFUZRtffKnn37qsj45PDz8mFqtlmRS+4M4juNCQ0N3kfWCggLe6XTKsqMPDAx8TdbGMr5dYmwao9F4OSgo6CWEkJJs0tLf339Oq9UmuFkf7PfVV1/pY2NjwxFCyvHu7Y8DY4xaW1ttUVFRU9yMj4xG49+1Wm2Gw+HwViioPX8eYjabrdu3b1+0f/9+t6tI3KH9SGjKy8tf8/X11dKegyyKIurr6+t59dVXixBCo9225vDhw7/RarXBKpVqtG2eiCiKqKenZ/jjjz8uP3fuXCvZHwn9/Pnzv8IYL/Ty8qL+mj44ODh87Nixir179074G+YBAAAAID+qB14YY9VHH320OyUlZVgQqJ9Ncc3NzXcqKyu/KCwsvE020f3TGA9/f//fRkRERKvVatoHPtzt27fvtrS0fJGZmWkim0w4ceKET2dnZwu5zJK26upqvHbt2kBy/MTERE1VVZXk65MNBoOYk5Pjbn3ys+/ChQt/czqd5GMiiaqqqixy/PLy8rVOme6AXq93WZ88mVE7Y/fw8AiQ6/uTY2Njfchab29vtFxXnPr7+13WJ09m1EL+qZFXn8D/PTMhg9FByAyAkBkAITMAQmYAhMwACJkBEDIDIGQGQMgMgJAZACEzAEJmAITMAAiZARAyAyBkBkDIDICQGUAtZKlW8Y2DLJP4MMZYri80oYVaMh0dHSq5ZmuePn3aZX2yQqG4oVAoqM/oJ3Ecx0VFRf2DrDMhLS3Ne2BgoGFwcBA7HA7Jfurr64fRD0tFibugMZlM31gsFpffofVjs9lwZ2fnUHJy8jxi7EmNfKAmpKSkZGpwcPCmkJAQuxQvaVardbigoODLTz755CbZQwihJUuWTN26deuml19+2S7FRz50d3crT506dXrbtm0NZA8AAAAAAAAAAAAAAAAAAAAAtvwPgqFsKEjVEosAAAAASUVORK5CYII=",xA="/assets/uspBranca-BDlK-I33.png",m_=[{id:1,position:"Tutora Bolsista SISSA",company:"Instituto Federal de São Paulo (IFSP) Campus São Carlos",location:"São Carlos - SP",period:"Abril de 2023 - Julho de 2024",status:"completed",color:"from-purple-500 to-pink-600",glowColor:"purple",icon:vA,achievements:[{text:"Planejamento de aulas de monitoria de programação e matemática",icon:zu},{text:"Acompanhamento e desenvolvimento de atividades de algoritmos",icon:Np},{text:"Aplicação de provas de recuperação em matemática",icon:ex}]},{id:2,position:"Bolsista Técnica FullStack",company:"Instituto de Física de São Carlos (IFSC) - USP",location:"São Carlos - SP",period:"Setembro de 2024 - Atual",status:"current",color:"from-emerald-500 to-teal-600",glowColor:"emerald",icon:xA,achievements:[{text:"Desenvolvimento de websites utilizando JavaScript e PHP",icon:e4},{text:"Desenvolvimento de APIs utilizando React",icon:Np},{text:"Web design com uso de Figma",icon:rx},{text:"Programação em embarcados como ESP32 e RaspBerry Pi em Python",icon:$b},{text:"Desenvolvimento de um equipamento médico capaz de visualizar os vasos sanguíneos e identificar vasos obstruídos de pessoas Diabéticas, impedindo uma possível amputação. Software feito com Python.",icon:o4,highlight:!0},{text:"Artigo Internacional Apresentado e Publicado",icon:El,highlight:!0}]}];function yA(){const o=Ue.useRef(null),e=Ue.useRef(null),t=Ue.useRef(null),[i,s]=Ue.useState(null),[a,c]=Ue.useState(null),[u,f]=Ue.useState(!1),[h,p]=Ue.useState(!1),m=Ue.useRef(0),v=Ue.useRef(null);Ue.useEffect(()=>{const _=()=>{p(window.innerWidth<768)};return _(),window.addEventListener("resize",_),()=>window.removeEventListener("resize",_)},[]),Ue.useEffect(()=>{if(!(h||!o.current)&&e.current&&i===null){const _=e.current.querySelector(".timeline-line"),T=e.current.querySelectorAll(".timeline-node-wrapper"),A=e.current.querySelector(".finish-line");_&&ot.fromTo(_,{scaleX:0},{scaleX:1,duration:2.5,ease:"power2.inOut",transformOrigin:"left"}),A&&ot.fromTo(A,{opacity:0,x:-50},{opacity:1,x:0,duration:1,delay:2.3,ease:"back.out(1.7)"}),ot.fromTo(T,{scale:0,opacity:0,rotation:-360},{scale:1,opacity:1,rotation:0,duration:.8,stagger:.5,delay:1.2,ease:"back.out(2)"}),t.current&&ot.fromTo(t.current,{x:m.current,opacity:0,rotation:-20},{x:m.current,opacity:1,rotation:0,duration:1,delay:2.5,ease:"back.out(1.7)"})}},[]),Ue.useEffect(()=>{if(i&&o.current){const _=o.current.querySelector(".detail-card"),T=o.current.querySelector(".timeline-view");T&&ot.to(T,{opacity:0,duration:.4,ease:"power2.in"}),_&&ot.fromTo(_,{opacity:0,scale:.8},{opacity:1,scale:1,duration:.5,delay:.4,ease:"back.out(1.7)"})}else if(i===null&&o.current){const _=o.current.querySelector(".timeline-view");_&&ot.to(_,{opacity:1,duration:.5,ease:"power2.out"})}},[i]),Ue.useEffect(()=>{if(h){document.body.style.overflow="";return}const _=b=>{if(i)return b.preventDefault(),b.stopPropagation(),b.stopImmediatePropagation(),!1},T=b=>{if(i&&(b.key==="ArrowUp"||b.key==="ArrowDown"||b.key===" "||b.key==="PageUp"||b.key==="PageDown"))return b.preventDefault(),b.stopPropagation(),!1},A=b=>{if(i)return b.preventDefault(),b.stopPropagation(),!1};return i?(document.addEventListener("wheel",_,{passive:!1,capture:!0}),window.addEventListener("wheel",_,{passive:!1,capture:!0}),document.body.addEventListener("wheel",_,{passive:!1,capture:!0}),document.addEventListener("keydown",T,{passive:!1,capture:!0}),document.addEventListener("touchmove",A,{passive:!1,capture:!0}),document.body.style.overflow="hidden"):document.body.style.overflow="",()=>{document.removeEventListener("wheel",_,{capture:!0}),window.removeEventListener("wheel",_,{capture:!0}),document.body.removeEventListener("wheel",_,{capture:!0}),document.removeEventListener("keydown",T,{capture:!0}),document.removeEventListener("touchmove",A,{capture:!0}),document.body.style.overflow=""}},[i,h]);const y=(_,T)=>{var b;if(u)return;f(!0);const A=document.querySelector(`[data-node-id="${_}"]`);if(A&&t.current){const P=A.getBoundingClientRect(),D=(b=o.current)==null?void 0:b.getBoundingClientRect();if(D){const I=window.getComputedStyle(t.current).transform;let F=m.current;I&&I!=="none"&&(F=new DOMMatrix(I).m41);const E=P.left-D.left-40,L=Math.abs(E-F);m.current=E,ot.to(t.current,{x:E,duration:Math.max(.8,L/400),ease:"power2.inOut",onUpdate:function(){const k=this.progress(),W=Math.sin(k*20)*3;if(t.current){const V=F+(E-F)*k;t.current.style.transform=`translateX(${V}px) translateY(${W}px)`}},onComplete:()=>{t.current&&ot.to(t.current,{y:-20,duration:.3,yoyo:!0,repeat:1,ease:"power2.out",onComplete:()=>{s(_),f(!1)}})}})}}},w=()=>{var T;if(u)return;f(!0);const _=document.querySelector(".finish-line");if(_&&t.current){const A=_.getBoundingClientRect(),b=(T=o.current)==null?void 0:T.getBoundingClientRect();if(b){const P=window.getComputedStyle(t.current).transform;let D=m.current;P&&P!=="none"&&(D=new DOMMatrix(P).m41);const I=A.left-b.left-40,F=Math.abs(I-D);m.current=I,ot.to(t.current,{x:I,duration:Math.max(.8,F/400),ease:"power2.inOut",onUpdate:function(){const E=this.progress(),L=Math.sin(E*20)*3;if(t.current){const k=D+(I-D)*E;t.current.style.transform=`translateX(${k}px) translateY(${L}px)`}},onComplete:()=>{t.current&&ot.to(t.current,{rotation:360,scale:1.2,y:-15,duration:.5,ease:"back.out(1.5)",onComplete:()=>{ot.to(t.current,{x:"+=200",opacity:0,duration:.6,ease:"power2.in",onComplete:()=>{setTimeout(()=>{f(!1);const E=new WheelEvent("wheel",{deltaY:100,bubbles:!0,cancelable:!0,view:window});document.dispatchEvent(E)},200)}})}})}})}}},S=()=>{var T;const _=(T=o.current)==null?void 0:T.querySelector(".detail-card");_&&ot.to(_,{opacity:0,scale:.8,duration:.3,ease:"power2.in",onComplete:()=>{s(null)}})},x=m_.find(_=>_.id===i);return R.jsxs("section",{className:"w-full min-h-screen md:h-screen flex items-start md:items-center justify-center px-4 md:px-6 py-8 md:py-0 relative overflow-hidden",children:[i&&!h&&R.jsx("div",{ref:v,className:"fixed inset-0 z-50 pointer-events-none",style:{touchAction:"none"}}),R.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[R.jsx("div",{className:"absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"}),R.jsx("div",{className:"absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"}),R.jsx("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"})]}),R.jsxs("div",{className:"max-w-6xl w-full relative z-10",ref:o,children:[R.jsxs("div",{className:`text-center transition-all duration-500 ${i?"mb-2 md:mb-6":"mb-12"}`,children:[R.jsx("h2",{className:"text-4xl md:text-6xl font-black mb-4",children:R.jsx("span",{className:"bg-gradient-to-r from-emerald-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",children:"Experiência Profissional"})}),R.jsx("p",{className:"text-gray-400 text-base md:text-lg flex items-center justify-center gap-2",children:!i&&R.jsxs(R.Fragment,{children:[R.jsx(Bu,{className:"w-5 h-5 text-yellow-400 animate-pulse"}),"Clique nos pontos para explorar minha jornada",R.jsx(Bu,{className:"w-5 h-5 text-yellow-400 animate-pulse"})]})})]}),R.jsxs("div",{ref:e,className:`timeline-view relative flex items-center justify-center py-20 ${i?"hidden":""}`,children:[R.jsxs("div",{className:"absolute left-0 right-0 flex items-center",children:[R.jsx("div",{className:"timeline-line flex-1 h-1 md:h-2 bg-gradient-to-r from-emerald-500 via-purple-500 to-pink-500 rounded-l-full origin-left",children:R.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-emerald-400 via-purple-400 to-pink-400 rounded-l-full blur-xl opacity-50 animate-pulse"})}),R.jsxs("div",{className:"finish-line flex flex-col items-center ml-4 opacity-0 cursor-pointer group z-20",onClick:w,style:{pointerEvents:u?"none":"auto"},children:[R.jsxs("div",{className:"relative",children:[R.jsxs("div",{className:"w-12 h-16 md:w-20 md:h-28 relative transition-transform duration-300 group-hover:scale-110",children:[R.jsx("div",{className:"absolute left-0 top-0 w-1.5 md:w-2 h-full bg-gradient-to-b from-gray-600 to-gray-800 rounded-full"}),R.jsx("div",{className:"absolute left-1.5 md:left-2 top-2 md:top-4 w-10 h-9 md:w-16 md:h-14 grid grid-cols-4 grid-rows-3 overflow-hidden rounded-r-lg shadow-2xl animate-wave",children:[...Array(12)].map((_,T)=>R.jsx("div",{className:`${T%2===0&&Math.floor(T/4)%2===0||T%2===1&&Math.floor(T/4)%2===1?"bg-white":"bg-gray-900"}`},T))}),R.jsx("div",{className:"absolute left-1.5 md:left-2 top-2 md:top-4 w-10 h-9 md:w-16 md:h-14 bg-yellow-400 blur-xl opacity-50 animate-pulse group-hover:opacity-80 transition-opacity"})]}),R.jsx("div",{className:"absolute -top-1 -right-1 md:-top-2 md:-right-2 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce",children:R.jsx(r4,{className:"w-3 h-3 md:w-5 md:h-5 text-white"})})]}),R.jsx("p",{className:"text-yellow-400 font-bold text-[10px] md:text-xs mt-2 animate-pulse group-hover:text-yellow-300 transition-colors",children:"Chegada!"})]})]}),R.jsx("div",{ref:t,className:"character absolute left-0 bottom-2 z-30 opacity-0 pointer-events-none",style:{width:"80px",height:"80px"},children:R.jsx("div",{className:"relative w-full h-full",children:R.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:R.jsxs("svg",{width:"80",height:"80",viewBox:"0 0 80 80",className:"drop-shadow-2xl",children:[R.jsx("ellipse",{cx:"40",cy:"72",rx:"20",ry:"4",fill:"rgba(0,0,0,0.3)"}),R.jsx("rect",{x:"25",y:"35",width:"30",height:"30",rx:"4",fill:"#8b5cf6"}),R.jsx("rect",{x:"27",y:"37",width:"26",height:"26",rx:"3",fill:"#a78bfa"}),R.jsx("rect",{x:"28",y:"15",width:"24",height:"24",rx:"6",fill:"#ec4899"}),R.jsx("rect",{x:"30",y:"17",width:"20",height:"20",rx:"5",fill:"#f472b6"}),R.jsx("circle",{cx:"35",cy:"25",r:"3",fill:"#1f2937"}),R.jsx("circle",{cx:"45",cy:"25",r:"3",fill:"#1f2937"}),R.jsx("circle",{cx:"36",cy:"24",r:"1.5",fill:"white"}),R.jsx("circle",{cx:"46",cy:"24",r:"1.5",fill:"white"}),R.jsx("path",{d:"M 35 30 Q 40 33 45 30",stroke:"#1f2937",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),R.jsx("line",{x1:"40",y1:"15",x2:"40",y2:"8",stroke:"#ec4899",strokeWidth:"2"}),R.jsx("circle",{cx:"40",cy:"6",r:"3",fill:"#fbbf24"}),R.jsx("circle",{cx:"40",cy:"6",r:"3",fill:"#fbbf24",opacity:"0.5",className:"animate-ping"}),R.jsx("rect",{x:"18",y:"40",width:"6",height:"18",rx:"3",fill:"#8b5cf6"}),R.jsx("rect",{x:"56",y:"40",width:"6",height:"18",rx:"3",fill:"#8b5cf6"}),R.jsx("rect",{x:"28",y:"63",width:"8",height:"10",rx:"2",fill:"#6366f1"}),R.jsx("rect",{x:"44",y:"63",width:"8",height:"10",rx:"2",fill:"#6366f1"}),R.jsx("text",{x:"40",y:"52",fontSize:"12",fill:"white",textAnchor:"middle",fontWeight:"bold",children:"</>"})]})})})}),R.jsx("div",{className:"relative w-full flex justify-around items-center px-4 md:px-8 pr-16 md:pr-32",children:m_.map((_,T)=>R.jsxs("div",{className:"timeline-node-wrapper flex flex-col items-center","data-node-id":_.id,children:[R.jsxs("div",{className:`relative cursor-pointer transition-all duration-300 ${a===_.id?"scale-125":"scale-100"} ${u?"pointer-events-none":""}`,onClick:()=>y(_.id),onMouseEnter:()=>c(_.id),onMouseLeave:()=>c(null),children:[R.jsx("div",{className:`w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br ${_.color} p-1 shadow-2xl`,children:R.jsxs("div",{className:"w-full h-full rounded-full bg-gray-900 flex items-center justify-center relative overflow-hidden group",children:[R.jsx("div",{className:`absolute inset-0 bg-gradient-to-br ${_.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}),R.jsx("img",{src:_.icon,alt:_.position,className:"w-12 h-12 md:w-16 md:h-16 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"}),_.status==="current"&&R.jsx("div",{className:"absolute top-1 right-1 md:top-2 md:right-2 w-2 h-2 md:w-3 md:h-3 bg-emerald-400 rounded-full animate-pulse z-20",children:R.jsx("div",{className:"absolute inset-0 bg-emerald-400 rounded-full animate-ping"})})]})}),R.jsx("div",{className:`absolute inset-0 bg-gradient-to-br ${_.color} rounded-full blur-2xl opacity-60 ${a===_.id?"animate-pulse":""}`})]}),R.jsxs("div",{className:`mt-4 md:mt-8 text-center transition-all duration-300 ${a===_.id?"transform scale-110":""}`,children:[R.jsx("p",{className:"text-white font-bold text-xs md:text-sm mb-1 max-w-[140px] md:max-w-[180px]",children:_.position}),R.jsx("p",{className:"text-gray-400 text-[10px] md:text-xs",children:_.period.split(" - ")[0]}),_.status==="current"&&R.jsxs("span",{className:"inline-flex items-center gap-1 mt-2 px-2 py-0.5 md:px-3 md:py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-[10px] md:text-xs font-semibold",children:[R.jsx("div",{className:"w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-400 rounded-full animate-pulse"}),"Atual"]})]})]},_.id))})]}),x&&R.jsxs("div",{className:"detail-card relative opacity-0 z-[60]",children:[R.jsxs("button",{onClick:S,className:"group flex items-center gap-3 mb-6 px-6 py-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 border-2 border-purple-500/50 hover:border-purple-400 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 hover:scale-105",children:[R.jsx(Pb,{className:"w-6 h-6 text-purple-300 group-hover:-translate-x-2 transition-transform duration-300"}),R.jsx("span",{className:"text-white font-bold text-lg",children:"Voltar à Linha do Tempo"})]}),R.jsxs("div",{className:"relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border-2 border-white/20 rounded-3xl p-6 overflow-hidden shadow-2xl",children:[R.jsx("div",{className:`absolute inset-0 bg-gradient-to-br ${x.color} ${x.id===2?"opacity-5":"opacity-10"}`}),R.jsx("div",{className:"absolute -top-20 -right-20 w-60 h-60 bg-white/5 rounded-full blur-3xl"}),R.jsxs("div",{className:"relative z-10",children:[R.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[R.jsxs("div",{className:"relative",children:[R.jsx("div",{className:`w-16 h-16 rounded-2xl bg-gradient-to-br ${x.color} flex items-center justify-center shadow-lg p-1`,children:R.jsx("img",{src:x.icon,alt:x.position,className:"w-full h-full object-contain"})}),R.jsx("div",{className:`absolute inset-0 bg-gradient-to-br ${x.color} rounded-2xl blur-xl ${x.id===2?"opacity-30":"opacity-60"} animate-pulse`})]}),R.jsxs("div",{className:"flex-1",children:[x.status==="current"?R.jsxs("span",{className:"inline-flex items-center gap-2 mb-2 px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-xs font-semibold",children:[R.jsx("div",{className:"w-2 h-2 bg-emerald-400 rounded-full animate-pulse"}),"Atual"]}):R.jsxs("span",{className:"inline-flex items-center gap-2 mb-2 px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-xs font-semibold",children:[R.jsx(Dp,{className:"w-4 h-4"}),"Concluído"]}),R.jsx("h3",{className:"text-xl md:text-2xl font-black text-white mb-1 leading-tight",children:x.position}),R.jsx("p",{className:`text-base font-semibold mb-2 bg-gradient-to-r ${x.color} bg-clip-text text-transparent`,children:x.company}),R.jsxs("div",{className:"flex flex-wrap items-center gap-3 text-gray-400 text-xs",children:[R.jsxs("div",{className:"flex items-center gap-1",children:[R.jsx(tx,{className:"w-3 h-3"}),R.jsx("span",{children:x.period})]}),R.jsxs("div",{className:"flex items-center gap-1",children:[R.jsx(g0,{className:"w-3 h-3"}),R.jsx("span",{children:x.location})]})]})]})]}),R.jsxs("div",{children:[R.jsxs("h4",{className:"text-white font-bold text-sm mb-3 flex items-center gap-2",children:[R.jsx(El,{className:"w-4 h-4 text-yellow-400"}),"Principais Atividades e Conquistas"]}),R.jsx("div",{className:"space-y-2",children:x.achievements.map((_,T)=>{const A=_.icon;return R.jsxs("div",{className:`group/item flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${_.highlight?"bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/40":"bg-white/5 hover:bg-white/10 border border-white/10"}`,children:[R.jsx("div",{className:`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${_.highlight?"bg-gradient-to-br from-yellow-500 to-orange-600":"bg-gradient-to-br from-purple-500 to-pink-600"} group-hover/item:scale-110 transition-transform duration-300`,children:R.jsx(A,{className:"w-4 h-4 text-white"})}),R.jsx("p",{className:`text-sm md:text-base text-left leading-relaxed flex-1 ${_.highlight?"text-yellow-50 font-semibold":"text-gray-300"}`,children:_.text})]},T)})})]})]}),R.jsx("div",{className:"absolute inset-0 opacity-30 pointer-events-none rounded-3xl overflow-hidden",children:R.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full animate-shine"})})]})]})]}),R.jsx("style",{children:`
        @keyframes shine {
          from {
            transform: translateX(-100%) skewX(-12deg);
          }
          to {
            transform: translateX(200%) skewX(-12deg);
          }
        }

        .animate-shine {
          animation: shine 3s infinite;
        }

        @keyframes wave {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-5deg);
          }
          75% {
            transform: rotate(5deg);
          }
        }

        .animate-wave {
          transform-origin: left center;
          animation: wave 1s ease-in-out infinite;
        }
      `})]})}const SA="/assets/cobemLaura-DvK_adPe.jpg",MA="/assets/cobemCertificated-C_oFVFVQ.jpg",wA=[{id:1,title:"INFRARED VEIN DETECTION SYSTEM FOR DIABETIC FOOT MONITORING",year:"2025",type:"Artigo Internacional",description:"Artigo apresentado e pré-publicado no 28º Congresso Internacional de Engenharia Mecânica (COBEM 25)",icon:El,color:"from-yellow-500 to-orange-600",images:[{src:SA,alt:"Apresentação no COBEM 2025"},{src:MA,alt:"Certificado de apresentação"}],highlight:!0},{id:2,title:"TUTORIA DA REDE ASA: A REDE DE APOIO AOS DISCENTES",year:"2023",type:"Resumo Expandido",description:"Resumo Expandido publicado nos Anais do II Encontro de Ensino, Cultura e Sociedade (ENECS)",icon:n4,color:"from-purple-500 to-pink-600",pdf:"/resumo-rede-asa.pdf",hasDownload:!0},{id:3,title:"2º LUGAR - NASA SPACE APPS CHALLENGE",year:"2020",type:"Premiação Regional",description:"Segundo lugar na competição regional da NASA Space Apps Challenge",icon:_0,color:"from-blue-500 to-indigo-600",externalLink:"https://g1.globo.com/sp/sao-carlos-regiao/noticia/2020/10/19/alunas-do-8o-ano-da-rede-estadual-de-sao-carlos-ganham-2o-lugar-em-competicao-da-nasa.ghtml",hasExternalLink:!0,highlight:!0}];function EA(){const o=Ue.useRef(null),e=Ue.useRef(null),[t,i]=Ue.useState(null),[s,a]=Ue.useState(null);Ue.useEffect(()=>{if(o.current){const f=o.current.querySelectorAll(".award-card");ot.fromTo(f,{opacity:0,y:30,scale:.98},{opacity:1,y:0,scale:1,duration:.6,stagger:.1,ease:"power3.out",delay:.2})}},[]);const c=f=>{i(f)},u=()=>{i(null)};return R.jsxs("section",{className:"w-full min-h-screen md:h-screen flex items-start md:items-center justify-center px-4 py-8 relative overflow-hidden",children:[R.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[R.jsx("div",{className:"absolute top-1/3 left-1/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"}),R.jsx("div",{className:"absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"})]}),R.jsxs("div",{className:"max-w-4xl w-full relative z-10 h-full flex flex-col justify-center",children:[R.jsxs("div",{className:"text-center mb-6 md:mb-8",children:[R.jsxs("div",{className:"flex items-center justify-center gap-3 md:gap-4 mb-2",children:[R.jsx(El,{className:"w-6 h-6 md:w-8 md:h-8 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)] hidden md:block"}),R.jsx("h2",{className:"text-2xl md:text-4xl lg:text-5xl font-black tracking-tight",children:R.jsx("span",{className:"bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text text-transparent filter drop-shadow-sm",children:"Premiações & Artigos"})}),R.jsx(El,{className:"w-6 h-6 md:w-8 md:h-8 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)] hidden md:block"})]}),R.jsxs("div",{className:"flex items-center justify-center gap-2 text-gray-400 font-medium text-xs md:text-sm",children:[R.jsx(Dp,{className:"w-3 h-3 text-orange-400 fill-orange-400 animate-pulse"}),R.jsx("p",{children:"Conquistas acadêmicas e reconhecimentos"}),R.jsx(Dp,{className:"w-3 h-3 text-orange-400 fill-orange-400 animate-pulse"})]})]}),R.jsx("div",{ref:e,className:"grid grid-cols-1 gap-3 md:gap-4 w-full max-w-3xl mx-auto max-h-[calc(100vh-180px)] overflow-y-auto px-2 pb-4 scrollbar-hide",children:wA.map(f=>{const h=f.icon;return R.jsxs("div",{className:`award-card group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 md:p-5 overflow-hidden shadow-xl transition-all duration-300 ${s===f.id?"border-white/30 transform -translate-y-0.5":"border-white/10"} ${f.highlight?"ring-1 ring-white/10":""}`,onMouseEnter:()=>a(f.id),onMouseLeave:()=>a(null),children:[R.jsx("div",{className:`absolute inset-0 bg-gradient-to-r ${f.color} opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500`}),R.jsx("div",{className:`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${f.color}`}),R.jsxs("div",{className:"relative z-10 flex flex-col md:flex-row gap-4 items-start md:items-center",children:[R.jsx("div",{className:"flex-shrink-0",children:R.jsx("div",{className:`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center shadow-md group-hover:scale-105 transition-all duration-500`,children:R.jsx(h,{className:"w-6 h-6 text-white"})})}),R.jsxs("div",{className:"flex-1 min-w-0",children:[R.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-1.5",children:[R.jsx("span",{className:`px-2 py-0.5 rounded-full text-[10px] md:text-xs font-bold bg-gradient-to-r ${f.color} text-white shadow-sm`,children:f.year}),R.jsxs("span",{className:"flex items-center gap-1 text-[10px] md:text-xs font-medium text-gray-300 bg-white/5 px-2 py-0.5 rounded-full border border-white/10",children:[R.jsx(Bu,{className:"w-2.5 h-2.5 text-yellow-400"}),f.type]})]}),R.jsx("h3",{className:"text-base md:text-lg font-black text-white mb-1.5 leading-snug group-hover:text-gray-200 transition-colors",children:f.title}),R.jsx("p",{className:"text-gray-400 text-xs md:text-sm leading-relaxed mb-3 line-clamp-2 md:line-clamp-none",children:f.description}),R.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[f.images&&f.images.length>0&&R.jsx("div",{className:"flex gap-1.5 mr-1",children:f.images.map((p,m)=>R.jsx("button",{onClick:()=>c(p),className:"relative w-8 h-8 md:w-10 md:h-10 rounded-md overflow-hidden border border-white/20 hover:border-yellow-400 transition-colors duration-300",children:R.jsx("img",{src:p.src,alt:p.alt,className:"w-full h-full object-cover"})},m))}),f.hasDownload&&R.jsxs("a",{href:f.pdf,download:!0,className:"flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white text-xs font-medium transition-all hover:scale-105",children:[R.jsx(Zb,{className:"w-3.5 h-3.5"}),"Baixar PDF"]}),f.hasExternalLink&&R.jsxs("a",{href:f.externalLink,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1.5 px-3 py-1.5 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 rounded-lg text-blue-200 text-xs font-medium transition-all hover:scale-105",children:[R.jsx(Lp,{className:"w-3.5 h-3.5"}),"Ver Notícia"]})]})]})]})]},f.id)})})]}),t&&R.jsxs("div",{className:"fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200",onClick:u,children:[R.jsx("button",{onClick:u,className:"absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all hover:rotate-90",children:R.jsx(F4,{className:"w-4 h-4"})}),R.jsx("div",{className:"relative max-w-4xl w-full",onClick:f=>f.stopPropagation(),children:R.jsx("img",{src:t.src,alt:t.alt,className:"w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"})})]}),R.jsx("style",{children:`
        .overflow-y-auto::-webkit-scrollbar {
          width: 4px;
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background: transparent;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
        }
      `})]})}const TA="/assets/FaiskaImg-Fl97bG1D.png",bA="/assets/AmbatechImg-DsS-rl6_.png",AA="/assets/CepofImg-SBSOTFVh.png",CA=[{id:1,title:"Portfólio Faíska",client:"Raíssa Alves (Faíska / Rai Kocho)",category:"Portfólio Artístico",description:"Portfólio personalizado feito sob encomenda para artista digital, apresentando seu trabalho criativo de forma imersiva e interativa.",image:TA,link:"https://faiskapressao.com/",tech:["Figma","React","Tailwind CSS","Web Design"],color:"from-pink-500 to-purple-600",icon:rx},{id:2,title:"AmbaTech",client:"CEO & Founder",category:"Landing Page Corporativo",description:"Site da minha empresa especializada em desenvolvimento de landing pages modernas e de alta conversão para negócios digitais.",image:bA,link:"https://ambatech.vercel.app/",tech:["Figma","React","Tailwind CSS","Vercel","UI/UX"],color:"from-blue-500 to-cyan-600",icon:_0,highlight:!0},{id:3,title:"CEPOF - IFSC USP",client:"Grupo CEPOF - Instituto de Física",category:"Site Institucional",description:"Site institucional desenvolvido para o grupo de pesquisa CEPOF do Instituto de Física de São Carlos da Universidade de São Paulo.",image:AA,link:"https://www.ifsc.usp.br/cepofsite/",tech:["HTML","CSS","JavaScript","PHP"],color:"from-orange-500 to-red-600",icon:Fb}];function RA(){const o=Ue.useRef(null),[e,t]=Ue.useState(null),[i,s]=Ue.useState(!1);Ue.useEffect(()=>{const u=()=>{s(window.innerWidth<768)};return u(),window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)},[]),Ue.useEffect(()=>{if(i||!o.current)return;const u=o.current.querySelectorAll(".portfolio-card");ot.fromTo(u,{opacity:0,y:80,scale:.9,rotationY:-20},{opacity:1,y:0,scale:1,rotationY:0,duration:1,stagger:.2,ease:"power3.out",delay:.3})},[i]);const a=(u,f)=>{const h=u.currentTarget,p=h.getBoundingClientRect(),m=u.clientX-p.left,v=u.clientY-p.top,y=p.width/2,w=p.height/2,S=(v-w)/w*-5,x=(m-y)/y*5;ot.to(h,{rotationX:S,rotationY:x,transformPerspective:1e3,duration:.4,ease:"power2.out"})},c=u=>{ot.to(u.currentTarget,{rotationX:0,rotationY:0,duration:.6,ease:"power2.out"})};return R.jsxs("section",{className:"w-full min-h-screen md:h-screen flex items-start md:items-center justify-center px-4 md:px-6 py-8 md:py-0 relative overflow-hidden",children:[R.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[R.jsx("div",{className:"absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"}),R.jsx("div",{className:"absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-700"})]}),R.jsxs("div",{className:"max-w-7xl w-full relative z-10 py-4 md:py-12",children:[R.jsxs("div",{className:"text-center mb-6 md:mb-10",children:[R.jsx("h2",{className:"text-3xl md:text-4xl lg:text-5xl font-black mb-2 md:mb-4",children:R.jsx("span",{className:"bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent",children:"Portfólio"})}),R.jsx("p",{className:"text-gray-400 text-xs md:text-base",children:"Meus projetos e criações"})]}),R.jsx("div",{ref:o,className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-h-[calc(100vh-180px)] md:max-h-[calc(100vh-240px)] overflow-y-auto px-2 md:px-4 pb-4 scrollbar-hide",children:CA.map(u=>{const f=u.icon;return R.jsxs("div",{className:`portfolio-card group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border-2 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 cursor-pointer ${e===u.id?"border-white/40 scale-105":"border-white/20"} ${u.highlight?"ring-2 ring-purple-400/40":""}`,style:{transformStyle:"preserve-3d"},onMouseMove:h=>a(h,u.id),onMouseLeave:c,onMouseEnter:()=>t(u.id),children:[R.jsx("div",{className:`absolute inset-0 bg-gradient-to-br ${u.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}),u.highlight&&R.jsxs(R.Fragment,{children:[R.jsx("div",{className:"absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-ping"}),R.jsx("div",{className:"absolute top-8 right-10 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping delay-300"})]}),R.jsxs("div",{className:"relative h-48 overflow-hidden",children:[R.jsx("img",{src:u.image,alt:u.title,className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"}),R.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"}),R.jsxs("div",{className:"absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/20 rounded-full",children:[R.jsx(f,{className:"w-4 h-4 text-white"}),R.jsx("span",{className:"text-xs font-bold text-white",children:u.category})]}),R.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -translate-x-full group-hover:translate-x-full",style:{transition:"transform 1s ease-in-out"}})]}),R.jsxs("div",{className:"relative z-10 p-5",children:[R.jsx("h3",{className:"text-xl font-black text-white mb-1 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300",children:u.title}),R.jsx("p",{className:"text-sm font-semibold text-purple-300 mb-3",children:u.client}),R.jsx("p",{className:"text-gray-300 text-xs leading-relaxed mb-4 line-clamp-3",children:u.description}),R.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:u.tech.map(h=>R.jsx("span",{className:`text-xs font-medium text-white bg-gradient-to-r ${u.color} px-2.5 py-1 rounded-full shadow-lg`,children:h},h))}),R.jsxs("a",{href:u.link,target:"_blank",rel:"noopener noreferrer",className:`group/btn w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r ${u.color} text-white text-sm font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg`,onClick:h=>h.stopPropagation(),children:[R.jsx(Lp,{className:"w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300"}),"Visitar Site"]})]}),R.jsx("div",{className:"absolute inset-0 opacity-30 pointer-events-none rounded-3xl overflow-hidden",children:R.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent transform translate-x-[-50%] translate-y-[-50%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"})})]},u.id)})}),R.jsx("div",{className:"flex justify-center",children:R.jsxs("a",{href:"https://github.com/LauraFerCordeiro",target:"_blank",rel:"noopener noreferrer",className:"group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border-2 border-white/20 hover:border-white/40 rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl",children:[R.jsx(nx,{className:"w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300"}),R.jsxs("div",{className:"text-left",children:[R.jsx("p",{className:"text-white font-bold text-base",children:"Confira outros projetos"}),R.jsx("p",{className:"text-gray-400 text-sm",children:"github.com/LauraFerCordeiro"})]}),R.jsx(Lp,{className:"w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"})]})})]}),R.jsx("style",{children:`
        .portfolio-card {
          transform-style: preserve-3d;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `})]})}function PA(){const o=Ue.useRef(null),[e,t]=Ue.useState(0),[i,s]=Ue.useState(!1),[a,c]=Ue.useState(!1),u=Ue.useRef({x:0,y:0}),f=Ue.useRef(null),h=Ue.useRef(null),p=Ue.useRef([]),m=[{component:d_,name:"Sobre",color:"#8b5cf6"},{component:pA,name:"Tecnologias",color:"#6366f1"},{component:gA,name:"Soft Skills",color:"#a855f7"},{component:_A,name:"Formação",color:"#f97316"},{component:yA,name:"Experiência",color:"#14b8a6"},{component:EA,name:"Premiações",color:"#eab308"},{component:RA,name:"Portfólio",color:"#06b6d4"}];Ue.useEffect(()=>{const w=()=>{c(window.innerWidth<768)};return w(),window.addEventListener("resize",w),()=>window.removeEventListener("resize",w)},[]),Ue.useEffect(()=>{if(!o.current)return;const w=new G_;f.current=w;const S=new gi(75,window.innerWidth/window.innerHeight,.1,1e3);h.current=S;const x=new ev({canvas:o.current,alpha:!0,antialias:!0});x.setSize(window.innerWidth,window.innerHeight),x.setPixelRatio(Math.min(window.devicePixelRatio,2));const _=[new $p(1.5,1),new Zp(.8,.3,100,16),new Yp(1,0),new Kp(1.5,0),new ju(1.2,32,32),new qp(1,2,8),new Xu(1,.4,16,100)];_.forEach((k,W)=>{const V=new o3(k),J=new j_({color:new Lt(m[W].color),transparent:!0,opacity:.3}),ee=new r3(V,J);ee.position.z=-W*15,w.add(ee),p.current.push(ee);const Q=new ml({color:new Lt(m[W].color),transparent:!0,opacity:.05,side:sr}),Y=new ki(k,Q);Y.position.z=-W*15,w.add(Y)});const T=new vn,A=2e3,b=new Float32Array(A*3);for(let k=0;k<A*3;k++)b[k]=(Math.random()-.5)*30;T.setAttribute("position",new Oi(b,3));const P=new Pu({size:.02,color:m[0].color,transparent:!0,opacity:.6,blending:Eu}),D=new Nu(T,P);w.add(D),S.position.z=8;const I=k=>{u.current.x=k.clientX/window.innerWidth*2-1,u.current.y=-(k.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",I);const F=new Y_,E=()=>{requestAnimationFrame(E);const k=F.getElapsedTime();D.rotation.y=k*.03,D.rotation.x=k*.02,p.current.forEach((W,V)=>{W.rotation.x=k*.2*(V%2===0?1:-1),W.rotation.y=k*.3*(V%2===0?1:-1);const J=1+Math.sin(k*2+V)*.1;W.scale.setScalar(J)}),S.position.x+=(u.current.x*.3-S.position.x)*.05,S.position.y+=(u.current.y*.3-S.position.y)*.05,S.lookAt(0,0,S.position.z-8),x.render(w,S)};E();const L=()=>{S.aspect=window.innerWidth/window.innerHeight,S.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",L),()=>{window.removeEventListener("mousemove",I),window.removeEventListener("resize",L),x.dispose(),_.forEach(k=>k.dispose()),T.dispose(),P.dispose()}},[]);const v=(w,S)=>{if(i)return;const x=S!==void 0?S:w==="next"?Math.min(e+1,m.length-1):Math.max(e-1,0);if(x!==e){if(s(!0),p.current.length>0&&p.current.forEach(_=>{_.material instanceof S1&&ot.to(_.material,{opacity:0,duration:.4,ease:"power2.inOut"})}),h.current&&ot.to(h.current.position,{z:8-x*15,duration:1.5,ease:"power2.inOut"}),f.current){const _=f.current.children.find(T=>T instanceof Nu);_&&_.material instanceof Pu&&ot.to(_.material.color,{r:parseInt(m[x].color.slice(1,3),16)/255,g:parseInt(m[x].color.slice(3,5),16)/255,b:parseInt(m[x].color.slice(5,7),16)/255,duration:1})}ot.to(".section-container",{opacity:0,duration:.6,ease:"power2.inOut",onComplete:()=>{t(x),ot.fromTo(".section-container",{opacity:0},{opacity:1,duration:.6,ease:"power2.inOut",onComplete:()=>{p.current.length>0&&p.current.forEach(_=>{_.material instanceof S1&&ot.to(_.material,{opacity:.15,duration:.6,ease:"power2.inOut"})}),s(!1)}})}})}};Ue.useEffect(()=>{if(a)return;let w=null;const S=x=>{x.preventDefault(),w&&clearTimeout(w),w=window.setTimeout(()=>{x.deltaY>0?v("next"):x.deltaY<0&&v("prev")},50)};return window.addEventListener("wheel",S,{passive:!1}),()=>{window.removeEventListener("wheel",S),w&&clearTimeout(w)}},[e,i,a]);const y=m[e].component;return a?R.jsxs("div",{className:"relative w-full min-h-screen bg-black overflow-y-auto",children:[R.jsx("canvas",{ref:o,className:"fixed inset-0 pointer-events-none z-0"}),R.jsx("div",{className:"relative z-10",children:m.map((w,S)=>{const x=w.component;return R.jsx("div",{className:"min-h-screen w-full",children:R.jsx(x,{})},w.name)})})]}):R.jsxs("div",{className:"relative w-full h-screen overflow-hidden bg-black",children:[R.jsx("canvas",{ref:o,className:"fixed inset-0 pointer-events-none z-0"}),R.jsx("div",{className:"section-container fixed inset-0 z-10 flex items-center justify-center",children:e===0?R.jsx(d_,{onNavigate:w=>v("next",w)}):R.jsx(y,{})}),R.jsx("div",{className:"fixed right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3",children:m.map((w,S)=>R.jsxs("button",{onClick:()=>{!i&&S!==e&&v("next",S)},className:"group relative",children:[R.jsx("div",{className:`w-3 h-3 rounded-full border-2 transition-all duration-300 ${e===S?"border-white bg-white scale-125":"border-white/50 hover:border-white hover:scale-110"}`,style:{backgroundColor:e===S?w.color:"transparent",borderColor:e===S?w.color:void 0}}),R.jsx("span",{className:"absolute right-6 top-1/2 -translate-y-1/2 text-sm text-white/70 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap",children:w.name})]},w.name))}),e>0&&R.jsx("button",{onClick:()=>v("prev"),disabled:i,className:"fixed top-1/2 left-8 -translate-y-1/2 z-20 w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:border-white hover:scale-110 transition-all disabled:opacity-50",children:R.jsx(Gb,{className:"w-6 h-6"})}),e<m.length-1&&R.jsx("button",{onClick:()=>v("next"),disabled:i,className:"fixed bottom-8 left-1/2 -translate-x-1/2 z-20 w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:border-white hover:scale-110 transition-all disabled:opacity-50 animate-bounce",children:R.jsx(Vb,{className:"w-6 h-6"})}),R.jsxs("div",{className:"fixed top-8 left-8 z-20 text-white",children:[R.jsxs("div",{className:"text-sm text-white/50 mb-1",children:[String(e+1).padStart(2,"0")," / ",String(m.length).padStart(2,"0")]}),R.jsx("h3",{className:"text-2xl font-bold",style:{color:m[e].color},children:m[e].name})]})]})}function NA(){const[o,e]=Ue.useState(!1);return R.jsx("div",{className:"w-full min-h-screen bg-black",children:o?R.jsx(PA,{}):R.jsx(Eb,{onEnter:()=>e(!0)})})}Y2.createRoot(document.getElementById("root")).render(R.jsx(NA,{}));
