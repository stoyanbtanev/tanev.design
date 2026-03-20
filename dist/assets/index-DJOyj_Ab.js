(function(){const W=document.createElement("link").relList;if(W&&W.supports&&W.supports("modulepreload"))return;for(const b of document.querySelectorAll('link[rel="modulepreload"]'))fe(b);new MutationObserver(b=>{for(const X of b)if(X.type==="childList")for(const J of X.addedNodes)J.tagName==="LINK"&&J.rel==="modulepreload"&&fe(J)}).observe(document,{childList:!0,subtree:!0});function m(b){const X={};return b.integrity&&(X.integrity=b.integrity),b.referrerPolicy&&(X.referrerPolicy=b.referrerPolicy),b.crossOrigin==="use-credentials"?X.credentials="include":b.crossOrigin==="anonymous"?X.credentials="omit":X.credentials="same-origin",X}function fe(b){if(b.ep)return;b.ep=!0;const X=m(b);fetch(b.href,X)}})();var ko={exports:{}},gr={},Eo={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ku;function Nd(){if(ku)return z;ku=1;var R=Symbol.for("react.element"),W=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),fe=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),X=Symbol.for("react.provider"),J=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),G=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),H=Symbol.iterator;function F(c){return c===null||typeof c!="object"?null:(c=H&&c[H]||c["@@iterator"],typeof c=="function"?c:null)}var Te={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ie=Object.assign,ne={};function Y(c,g,M){this.props=c,this.context=g,this.refs=ne,this.updater=M||Te}Y.prototype.isReactComponent={},Y.prototype.setState=function(c,g){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,g,"setState")},Y.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function gn(){}gn.prototype=Y.prototype;function an(c,g,M){this.props=c,this.context=g,this.refs=ne,this.updater=M||Te}var qe=an.prototype=new gn;qe.constructor=an,Ie(qe,Y.prototype),qe.isPureReactComponent=!0;var we=Array.isArray,Je=Object.prototype.hasOwnProperty,Le={current:null},Ne={key:!0,ref:!0,__self:!0,__source:!0};function He(c,g,M){var O,D={},B=null,K=null;if(g!=null)for(O in g.ref!==void 0&&(K=g.ref),g.key!==void 0&&(B=""+g.key),g)Je.call(g,O)&&!Ne.hasOwnProperty(O)&&(D[O]=g[O]);var $=arguments.length-2;if($===1)D.children=M;else if(1<$){for(var te=Array($),De=0;De<$;De++)te[De]=arguments[De+2];D.children=te}if(c&&c.defaultProps)for(O in $=c.defaultProps,$)D[O]===void 0&&(D[O]=$[O]);return{$$typeof:R,type:c,key:B,ref:K,props:D,_owner:Le.current}}function _n(c,g){return{$$typeof:R,type:c.type,key:g,ref:c.ref,props:c.props,_owner:c._owner}}function vn(c){return typeof c=="object"&&c!==null&&c.$$typeof===R}function Qn(c){var g={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(M){return g[M]})}var un=/\/+/g;function Ue(c,g){return typeof c=="object"&&c!==null&&c.key!=null?Qn(""+c.key):g.toString(36)}function Ze(c,g,M,O,D){var B=typeof c;(B==="undefined"||B==="boolean")&&(c=null);var K=!1;if(c===null)K=!0;else switch(B){case"string":case"number":K=!0;break;case"object":switch(c.$$typeof){case R:case W:K=!0}}if(K)return K=c,D=D(K),c=O===""?"."+Ue(K,0):O,we(D)?(M="",c!=null&&(M=c.replace(un,"$&/")+"/"),Ze(D,g,M,"",function(De){return De})):D!=null&&(vn(D)&&(D=_n(D,M+(!D.key||K&&K.key===D.key?"":(""+D.key).replace(un,"$&/")+"/")+c)),g.push(D)),1;if(K=0,O=O===""?".":O+":",we(c))for(var $=0;$<c.length;$++){B=c[$];var te=O+Ue(B,$);K+=Ze(B,g,M,te,D)}else if(te=F(c),typeof te=="function")for(c=te.call(c),$=0;!(B=c.next()).done;)B=B.value,te=O+Ue(B,$++),K+=Ze(B,g,M,te,D);else if(B==="object")throw g=String(c),Error("Objects are not valid as a React child (found: "+(g==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":g)+"). If you meant to render a collection of children, use an array instead.");return K}function cn(c,g,M){if(c==null)return c;var O=[],D=0;return Ze(c,O,"","",function(B){return g.call(M,B,D++)}),O}function Re(c){if(c._status===-1){var g=c._result;g=g(),g.then(function(M){(c._status===0||c._status===-1)&&(c._status=1,c._result=M)},function(M){(c._status===0||c._status===-1)&&(c._status=2,c._result=M)}),c._status===-1&&(c._status=0,c._result=g)}if(c._status===1)return c._result.default;throw c._result}var se={current:null},w={transition:null},I={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:w,ReactCurrentOwner:Le};function E(){throw Error("act(...) is not supported in production builds of React.")}return z.Children={map:cn,forEach:function(c,g,M){cn(c,function(){g.apply(this,arguments)},M)},count:function(c){var g=0;return cn(c,function(){g++}),g},toArray:function(c){return cn(c,function(g){return g})||[]},only:function(c){if(!vn(c))throw Error("React.Children.only expected to receive a single React element child.");return c}},z.Component=Y,z.Fragment=m,z.Profiler=b,z.PureComponent=an,z.StrictMode=fe,z.Suspense=V,z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,z.act=E,z.cloneElement=function(c,g,M){if(c==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+c+".");var O=Ie({},c.props),D=c.key,B=c.ref,K=c._owner;if(g!=null){if(g.ref!==void 0&&(B=g.ref,K=Le.current),g.key!==void 0&&(D=""+g.key),c.type&&c.type.defaultProps)var $=c.type.defaultProps;for(te in g)Je.call(g,te)&&!Ne.hasOwnProperty(te)&&(O[te]=g[te]===void 0&&$!==void 0?$[te]:g[te])}var te=arguments.length-2;if(te===1)O.children=M;else if(1<te){$=Array(te);for(var De=0;De<te;De++)$[De]=arguments[De+2];O.children=$}return{$$typeof:R,type:c.type,key:D,ref:B,props:O,_owner:K}},z.createContext=function(c){return c={$$typeof:J,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},c.Provider={$$typeof:X,_context:c},c.Consumer=c},z.createElement=He,z.createFactory=function(c){var g=He.bind(null,c);return g.type=c,g},z.createRef=function(){return{current:null}},z.forwardRef=function(c){return{$$typeof:U,render:c}},z.isValidElement=vn,z.lazy=function(c){return{$$typeof:le,_payload:{_status:-1,_result:c},_init:Re}},z.memo=function(c,g){return{$$typeof:G,type:c,compare:g===void 0?null:g}},z.startTransition=function(c){var g=w.transition;w.transition={};try{c()}finally{w.transition=g}},z.unstable_act=E,z.useCallback=function(c,g){return se.current.useCallback(c,g)},z.useContext=function(c){return se.current.useContext(c)},z.useDebugValue=function(){},z.useDeferredValue=function(c){return se.current.useDeferredValue(c)},z.useEffect=function(c,g){return se.current.useEffect(c,g)},z.useId=function(){return se.current.useId()},z.useImperativeHandle=function(c,g,M){return se.current.useImperativeHandle(c,g,M)},z.useInsertionEffect=function(c,g){return se.current.useInsertionEffect(c,g)},z.useLayoutEffect=function(c,g){return se.current.useLayoutEffect(c,g)},z.useMemo=function(c,g){return se.current.useMemo(c,g)},z.useReducer=function(c,g,M){return se.current.useReducer(c,g,M)},z.useRef=function(c){return se.current.useRef(c)},z.useState=function(c){return se.current.useState(c)},z.useSyncExternalStore=function(c,g,M){return se.current.useSyncExternalStore(c,g,M)},z.useTransition=function(){return se.current.useTransition()},z.version="18.3.1",z}var Eu;function Po(){return Eu||(Eu=1,Eo.exports=Nd()),Eo.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cu;function Rd(){if(Cu)return gr;Cu=1;var R=Po(),W=Symbol.for("react.element"),m=Symbol.for("react.fragment"),fe=Object.prototype.hasOwnProperty,b=R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,X={key:!0,ref:!0,__self:!0,__source:!0};function J(U,V,G){var le,H={},F=null,Te=null;G!==void 0&&(F=""+G),V.key!==void 0&&(F=""+V.key),V.ref!==void 0&&(Te=V.ref);for(le in V)fe.call(V,le)&&!X.hasOwnProperty(le)&&(H[le]=V[le]);if(U&&U.defaultProps)for(le in V=U.defaultProps,V)H[le]===void 0&&(H[le]=V[le]);return{$$typeof:W,type:U,key:F,ref:Te,props:H,_owner:b.current}}return gr.Fragment=m,gr.jsx=J,gr.jsxs=J,gr}var Lu;function Md(){return Lu||(Lu=1,ko.exports=Rd()),ko.exports}var zu=Md(),Pl={},Co={exports:{}},Ae={},Lo={exports:{}},_o={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _u;function zd(){return _u||(_u=1,(function(R){function W(w,I){var E=w.length;w.push(I);e:for(;0<E;){var c=E-1>>>1,g=w[c];if(0<b(g,I))w[c]=I,w[E]=g,E=c;else break e}}function m(w){return w.length===0?null:w[0]}function fe(w){if(w.length===0)return null;var I=w[0],E=w.pop();if(E!==I){w[0]=E;e:for(var c=0,g=w.length,M=g>>>1;c<M;){var O=2*(c+1)-1,D=w[O],B=O+1,K=w[B];if(0>b(D,E))B<g&&0>b(K,D)?(w[c]=K,w[B]=E,c=B):(w[c]=D,w[O]=E,c=O);else if(B<g&&0>b(K,E))w[c]=K,w[B]=E,c=B;else break e}}return I}function b(w,I){var E=w.sortIndex-I.sortIndex;return E!==0?E:w.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var X=performance;R.unstable_now=function(){return X.now()}}else{var J=Date,U=J.now();R.unstable_now=function(){return J.now()-U}}var V=[],G=[],le=1,H=null,F=3,Te=!1,Ie=!1,ne=!1,Y=typeof setTimeout=="function"?setTimeout:null,gn=typeof clearTimeout=="function"?clearTimeout:null,an=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function qe(w){for(var I=m(G);I!==null;){if(I.callback===null)fe(G);else if(I.startTime<=w)fe(G),I.sortIndex=I.expirationTime,W(V,I);else break;I=m(G)}}function we(w){if(ne=!1,qe(w),!Ie)if(m(V)!==null)Ie=!0,Re(Je);else{var I=m(G);I!==null&&se(we,I.startTime-w)}}function Je(w,I){Ie=!1,ne&&(ne=!1,gn(He),He=-1),Te=!0;var E=F;try{for(qe(I),H=m(V);H!==null&&(!(H.expirationTime>I)||w&&!Qn());){var c=H.callback;if(typeof c=="function"){H.callback=null,F=H.priorityLevel;var g=c(H.expirationTime<=I);I=R.unstable_now(),typeof g=="function"?H.callback=g:H===m(V)&&fe(V),qe(I)}else fe(V);H=m(V)}if(H!==null)var M=!0;else{var O=m(G);O!==null&&se(we,O.startTime-I),M=!1}return M}finally{H=null,F=E,Te=!1}}var Le=!1,Ne=null,He=-1,_n=5,vn=-1;function Qn(){return!(R.unstable_now()-vn<_n)}function un(){if(Ne!==null){var w=R.unstable_now();vn=w;var I=!0;try{I=Ne(!0,w)}finally{I?Ue():(Le=!1,Ne=null)}}else Le=!1}var Ue;if(typeof an=="function")Ue=function(){an(un)};else if(typeof MessageChannel<"u"){var Ze=new MessageChannel,cn=Ze.port2;Ze.port1.onmessage=un,Ue=function(){cn.postMessage(null)}}else Ue=function(){Y(un,0)};function Re(w){Ne=w,Le||(Le=!0,Ue())}function se(w,I){He=Y(function(){w(R.unstable_now())},I)}R.unstable_IdlePriority=5,R.unstable_ImmediatePriority=1,R.unstable_LowPriority=4,R.unstable_NormalPriority=3,R.unstable_Profiling=null,R.unstable_UserBlockingPriority=2,R.unstable_cancelCallback=function(w){w.callback=null},R.unstable_continueExecution=function(){Ie||Te||(Ie=!0,Re(Je))},R.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_n=0<w?Math.floor(1e3/w):5},R.unstable_getCurrentPriorityLevel=function(){return F},R.unstable_getFirstCallbackNode=function(){return m(V)},R.unstable_next=function(w){switch(F){case 1:case 2:case 3:var I=3;break;default:I=F}var E=F;F=I;try{return w()}finally{F=E}},R.unstable_pauseExecution=function(){},R.unstable_requestPaint=function(){},R.unstable_runWithPriority=function(w,I){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var E=F;F=w;try{return I()}finally{F=E}},R.unstable_scheduleCallback=function(w,I,E){var c=R.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?c+E:c):E=c,w){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=E+g,w={id:le++,callback:I,priorityLevel:w,startTime:E,expirationTime:g,sortIndex:-1},E>c?(w.sortIndex=E,W(G,w),m(V)===null&&w===m(G)&&(ne?(gn(He),He=-1):ne=!0,se(we,E-c))):(w.sortIndex=g,W(V,w),Ie||Te||(Ie=!0,Re(Je))),w},R.unstable_shouldYield=Qn,R.unstable_wrapCallback=function(w){var I=F;return function(){var E=F;F=I;try{return w.apply(this,arguments)}finally{F=E}}}})(_o)),_o}var Pu;function Od(){return Pu||(Pu=1,Lo.exports=zd()),Lo.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tu;function bd(){if(Tu)return Ae;Tu=1;var R=Po(),W=Od();function m(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fe=new Set,b={};function X(e,n){J(e,n),J(e+"Capture",n)}function J(e,n){for(b[e]=n,e=0;e<n.length;e++)fe.add(n[e])}var U=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),V=Object.prototype.hasOwnProperty,G=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,le={},H={};function F(e){return V.call(H,e)?!0:V.call(le,e)?!1:G.test(e)?H[e]=!0:(le[e]=!0,!1)}function Te(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ie(e,n,t,r){if(n===null||typeof n>"u"||Te(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ne(e,n,t,r,l,i,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=o}var Y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Y[e]=new ne(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Y[n]=new ne(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Y[e]=new ne(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Y[e]=new ne(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Y[e]=new ne(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Y[e]=new ne(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Y[e]=new ne(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Y[e]=new ne(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Y[e]=new ne(e,5,!1,e.toLowerCase(),null,!1,!1)});var gn=/[\-:]([a-z])/g;function an(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(gn,an);Y[n]=new ne(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(gn,an);Y[n]=new ne(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(gn,an);Y[n]=new ne(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Y[e]=new ne(e,1,!1,e.toLowerCase(),null,!1,!1)}),Y.xlinkHref=new ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Y[e]=new ne(e,1,!1,e.toLowerCase(),null,!0,!0)});function qe(e,n,t,r){var l=Y.hasOwnProperty(n)?Y[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Ie(n,t,l,r)&&(t=null),r||l===null?F(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var we=R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Je=Symbol.for("react.element"),Le=Symbol.for("react.portal"),Ne=Symbol.for("react.fragment"),He=Symbol.for("react.strict_mode"),_n=Symbol.for("react.profiler"),vn=Symbol.for("react.provider"),Qn=Symbol.for("react.context"),un=Symbol.for("react.forward_ref"),Ue=Symbol.for("react.suspense"),Ze=Symbol.for("react.suspense_list"),cn=Symbol.for("react.memo"),Re=Symbol.for("react.lazy"),se=Symbol.for("react.offscreen"),w=Symbol.iterator;function I(e){return e===null||typeof e!="object"?null:(e=w&&e[w]||e["@@iterator"],typeof e=="function"?e:null)}var E=Object.assign,c;function g(e){if(c===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);c=n&&n[1]||""}return`
`+c+e}var M=!1;function O(e,n){if(!e||M)return"";M=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(p){var r=p}Reflect.construct(e,[],n)}else{try{n.call()}catch(p){r=p}e.call(n.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var l=p.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,s=i.length-1;1<=o&&0<=s&&l[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(l[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||l[o]!==i[s]){var a=`
`+l[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=s);break}}}finally{M=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?g(e):""}function D(e){switch(e.tag){case 5:return g(e.type);case 16:return g("Lazy");case 13:return g("Suspense");case 19:return g("SuspenseList");case 0:case 2:case 15:return e=O(e.type,!1),e;case 11:return e=O(e.type.render,!1),e;case 1:return e=O(e.type,!0),e;default:return""}}function B(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ne:return"Fragment";case Le:return"Portal";case _n:return"Profiler";case He:return"StrictMode";case Ue:return"Suspense";case Ze:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Qn:return(e.displayName||"Context")+".Consumer";case vn:return(e._context.displayName||"Context")+".Provider";case un:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case cn:return n=e.displayName||null,n!==null?n:B(e.type)||"Memo";case Re:n=e._payload,e=e._init;try{return B(e(n))}catch{}}return null}function K(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return B(n);case 8:return n===He?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function $(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function te(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function De(e){var n=te(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function vr(e){e._valueTracker||(e._valueTracker=De(e))}function To(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=te(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function yr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Tl(e,n){var t=n.checked;return E({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Io(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=$(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function No(e,n){n=n.checked,n!=null&&qe(e,"checked",n,!1)}function Il(e,n){No(e,n);var t=$(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Nl(e,n.type,t):n.hasOwnProperty("defaultValue")&&Nl(e,n.type,$(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ro(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Nl(e,n,t){(n!=="number"||yr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Rt=Array.isArray;function ot(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+$(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function Rl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(m(91));return E({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Mo(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(m(92));if(Rt(t)){if(1<t.length)throw Error(m(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:$(t)}}function zo(e,n){var t=$(n.value),r=$(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Oo(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function bo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ml(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?bo(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xr,Fo=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(xr=xr||document.createElement("div"),xr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=xr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Mt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var zt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ou=["Webkit","ms","Moz","O"];Object.keys(zt).forEach(function(e){Ou.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),zt[n]=zt[e]})});function Ao(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||zt.hasOwnProperty(e)&&zt[e]?(""+n).trim():n+"px"}function Uo(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=Ao(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var bu=E({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zl(e,n){if(n){if(bu[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(m(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(m(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(m(61))}if(n.style!=null&&typeof n.style!="object")throw Error(m(62))}}function Ol(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bl=null;function Fl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Al=null,st=null,at=null;function Do(e){if(e=nr(e)){if(typeof Al!="function")throw Error(m(280));var n=e.stateNode;n&&(n=Wr(n),Al(e.stateNode,e.type,n))}}function Bo(e){st?at?at.push(e):at=[e]:st=e}function jo(){if(st){var e=st,n=at;if(at=st=null,Do(e),n)for(e=0;e<n.length;e++)Do(n[e])}}function Wo(e,n){return e(n)}function Vo(){}var Ul=!1;function Ho(e,n,t){if(Ul)return e(n,t);Ul=!0;try{return Wo(e,n,t)}finally{Ul=!1,(st!==null||at!==null)&&(Vo(),jo())}}function Ot(e,n){var t=e.stateNode;if(t===null)return null;var r=Wr(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(m(231,n,typeof t));return t}var Dl=!1;if(U)try{var bt={};Object.defineProperty(bt,"passive",{get:function(){Dl=!0}}),window.addEventListener("test",bt,bt),window.removeEventListener("test",bt,bt)}catch{Dl=!1}function Fu(e,n,t,r,l,i,o,s,a){var p=Array.prototype.slice.call(arguments,3);try{n.apply(t,p)}catch(v){this.onError(v)}}var Ft=!1,wr=null,Sr=!1,Bl=null,Au={onError:function(e){Ft=!0,wr=e}};function Uu(e,n,t,r,l,i,o,s,a){Ft=!1,wr=null,Fu.apply(Au,arguments)}function Du(e,n,t,r,l,i,o,s,a){if(Uu.apply(this,arguments),Ft){if(Ft){var p=wr;Ft=!1,wr=null}else throw Error(m(198));Sr||(Sr=!0,Bl=p)}}function Xn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function $o(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Qo(e){if(Xn(e)!==e)throw Error(m(188))}function Bu(e){var n=e.alternate;if(!n){if(n=Xn(e),n===null)throw Error(m(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return Qo(l),e;if(i===r)return Qo(l),n;i=i.sibling}throw Error(m(188))}if(t.return!==r.return)t=l,r=i;else{for(var o=!1,s=l.child;s;){if(s===t){o=!0,t=l,r=i;break}if(s===r){o=!0,r=l,t=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===t){o=!0,t=i,r=l;break}if(s===r){o=!0,r=i,t=l;break}s=s.sibling}if(!o)throw Error(m(189))}}if(t.alternate!==r)throw Error(m(190))}if(t.tag!==3)throw Error(m(188));return t.stateNode.current===t?e:n}function Xo(e){return e=Bu(e),e!==null?Yo(e):null}function Yo(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Yo(e);if(n!==null)return n;e=e.sibling}return null}var Go=W.unstable_scheduleCallback,Ko=W.unstable_cancelCallback,ju=W.unstable_shouldYield,Wu=W.unstable_requestPaint,ue=W.unstable_now,Vu=W.unstable_getCurrentPriorityLevel,jl=W.unstable_ImmediatePriority,qo=W.unstable_UserBlockingPriority,kr=W.unstable_NormalPriority,Hu=W.unstable_LowPriority,Jo=W.unstable_IdlePriority,Er=null,dn=null;function $u(e){if(dn&&typeof dn.onCommitFiberRoot=="function")try{dn.onCommitFiberRoot(Er,e,void 0,(e.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:Yu,Qu=Math.log,Xu=Math.LN2;function Yu(e){return e>>>=0,e===0?32:31-(Qu(e)/Xu|0)|0}var Cr=64,Lr=4194304;function At(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _r(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=t&268435455;if(o!==0){var s=o&~l;s!==0?r=At(s):(i&=o,i!==0&&(r=At(i)))}else o=t&~l,o!==0?r=At(o):i!==0&&(r=At(i));if(r===0)return 0;if(n!==0&&n!==r&&(n&l)===0&&(l=r&-r,i=n&-n,l>=i||l===16&&(i&4194240)!==0))return n;if((r&4)!==0&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-en(n),l=1<<t,r|=e[t],n&=~l;return r}function Gu(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ku(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-en(i),s=1<<o,a=l[o];a===-1?((s&t)===0||(s&r)!==0)&&(l[o]=Gu(s,n)):a<=n&&(e.expiredLanes|=s),i&=~s}}function Wl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Zo(){var e=Cr;return Cr<<=1,(Cr&4194240)===0&&(Cr=64),e}function Vl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Ut(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-en(n),e[n]=t}function qu(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-en(t),i=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~i}}function Hl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-en(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var Q=0;function es(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ns,$l,ts,rs,ls,Ql=!1,Pr=[],Pn=null,Tn=null,In=null,Dt=new Map,Bt=new Map,Nn=[],Ju="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function is(e,n){switch(e){case"focusin":case"focusout":Pn=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":In=null;break;case"pointerover":case"pointerout":Dt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bt.delete(n.pointerId)}}function jt(e,n,t,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},n!==null&&(n=nr(n),n!==null&&$l(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function Zu(e,n,t,r,l){switch(n){case"focusin":return Pn=jt(Pn,e,n,t,r,l),!0;case"dragenter":return Tn=jt(Tn,e,n,t,r,l),!0;case"mouseover":return In=jt(In,e,n,t,r,l),!0;case"pointerover":var i=l.pointerId;return Dt.set(i,jt(Dt.get(i)||null,e,n,t,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Bt.set(i,jt(Bt.get(i)||null,e,n,t,r,l)),!0}return!1}function os(e){var n=Yn(e.target);if(n!==null){var t=Xn(n);if(t!==null){if(n=t.tag,n===13){if(n=$o(t),n!==null){e.blockedOn=n,ls(e.priority,function(){ts(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Tr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Yl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);bl=r,t.target.dispatchEvent(r),bl=null}else return n=nr(t),n!==null&&$l(n),e.blockedOn=t,!1;n.shift()}return!0}function ss(e,n,t){Tr(e)&&t.delete(n)}function ec(){Ql=!1,Pn!==null&&Tr(Pn)&&(Pn=null),Tn!==null&&Tr(Tn)&&(Tn=null),In!==null&&Tr(In)&&(In=null),Dt.forEach(ss),Bt.forEach(ss)}function Wt(e,n){e.blockedOn===n&&(e.blockedOn=null,Ql||(Ql=!0,W.unstable_scheduleCallback(W.unstable_NormalPriority,ec)))}function Vt(e){function n(l){return Wt(l,e)}if(0<Pr.length){Wt(Pr[0],e);for(var t=1;t<Pr.length;t++){var r=Pr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Pn!==null&&Wt(Pn,e),Tn!==null&&Wt(Tn,e),In!==null&&Wt(In,e),Dt.forEach(n),Bt.forEach(n),t=0;t<Nn.length;t++)r=Nn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Nn.length&&(t=Nn[0],t.blockedOn===null);)os(t),t.blockedOn===null&&Nn.shift()}var ut=we.ReactCurrentBatchConfig,Ir=!0;function nc(e,n,t,r){var l=Q,i=ut.transition;ut.transition=null;try{Q=1,Xl(e,n,t,r)}finally{Q=l,ut.transition=i}}function tc(e,n,t,r){var l=Q,i=ut.transition;ut.transition=null;try{Q=4,Xl(e,n,t,r)}finally{Q=l,ut.transition=i}}function Xl(e,n,t,r){if(Ir){var l=Yl(e,n,t,r);if(l===null)di(e,n,r,Nr,t),is(e,r);else if(Zu(l,e,n,t,r))r.stopPropagation();else if(is(e,r),n&4&&-1<Ju.indexOf(e)){for(;l!==null;){var i=nr(l);if(i!==null&&ns(i),i=Yl(e,n,t,r),i===null&&di(e,n,r,Nr,t),i===l)break;l=i}l!==null&&r.stopPropagation()}else di(e,n,r,null,t)}}var Nr=null;function Yl(e,n,t,r){if(Nr=null,e=Fl(r),e=Yn(e),e!==null)if(n=Xn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=$o(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Nr=e,null}function as(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vu()){case jl:return 1;case qo:return 4;case kr:case Hu:return 16;case Jo:return 536870912;default:return 16}default:return 16}}var Rn=null,Gl=null,Rr=null;function us(){if(Rr)return Rr;var e,n=Gl,t=n.length,r,l="value"in Rn?Rn.value:Rn.textContent,i=l.length;for(e=0;e<t&&n[e]===l[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===l[i-r];r++);return Rr=l.slice(e,1<r?1-r:void 0)}function Mr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function zr(){return!0}function cs(){return!1}function Be(e){function n(t,r,l,i,o){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?zr:cs,this.isPropagationStopped=cs,this}return E(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=zr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=zr)},persist:function(){},isPersistent:zr}),n}var ct={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kl=Be(ct),Ht=E({},ct,{view:0,detail:0}),rc=Be(Ht),ql,Jl,$t,Or=E({},Ht,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ei,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$t&&($t&&e.type==="mousemove"?(ql=e.screenX-$t.screenX,Jl=e.screenY-$t.screenY):Jl=ql=0,$t=e),ql)},movementY:function(e){return"movementY"in e?e.movementY:Jl}}),ds=Be(Or),lc=E({},Or,{dataTransfer:0}),ic=Be(lc),oc=E({},Ht,{relatedTarget:0}),Zl=Be(oc),sc=E({},ct,{animationName:0,elapsedTime:0,pseudoElement:0}),ac=Be(sc),uc=E({},ct,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cc=Be(uc),dc=E({},ct,{data:0}),fs=Be(dc),fc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hc(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=mc[e])?!!n[e]:!1}function ei(){return hc}var gc=E({},Ht,{key:function(e){if(e.key){var n=fc[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Mr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ei,charCode:function(e){return e.type==="keypress"?Mr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vc=Be(gc),yc=E({},Or,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ps=Be(yc),xc=E({},Ht,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ei}),wc=Be(xc),Sc=E({},ct,{propertyName:0,elapsedTime:0,pseudoElement:0}),kc=Be(Sc),Ec=E({},Or,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cc=Be(Ec),Lc=[9,13,27,32],ni=U&&"CompositionEvent"in window,Qt=null;U&&"documentMode"in document&&(Qt=document.documentMode);var _c=U&&"TextEvent"in window&&!Qt,ms=U&&(!ni||Qt&&8<Qt&&11>=Qt),hs=" ",gs=!1;function vs(e,n){switch(e){case"keyup":return Lc.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ys(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dt=!1;function Pc(e,n){switch(e){case"compositionend":return ys(n);case"keypress":return n.which!==32?null:(gs=!0,hs);case"textInput":return e=n.data,e===hs&&gs?null:e;default:return null}}function Tc(e,n){if(dt)return e==="compositionend"||!ni&&vs(e,n)?(e=us(),Rr=Gl=Rn=null,dt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ms&&n.locale!=="ko"?null:n.data;default:return null}}var Ic={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ic[e.type]:n==="textarea"}function ws(e,n,t,r){Bo(r),n=Dr(n,"onChange"),0<n.length&&(t=new Kl("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Xt=null,Yt=null;function Nc(e){Us(e,0)}function br(e){var n=gt(e);if(To(n))return e}function Rc(e,n){if(e==="change")return n}var Ss=!1;if(U){var ti;if(U){var ri="oninput"in document;if(!ri){var ks=document.createElement("div");ks.setAttribute("oninput","return;"),ri=typeof ks.oninput=="function"}ti=ri}else ti=!1;Ss=ti&&(!document.documentMode||9<document.documentMode)}function Es(){Xt&&(Xt.detachEvent("onpropertychange",Cs),Yt=Xt=null)}function Cs(e){if(e.propertyName==="value"&&br(Yt)){var n=[];ws(n,Yt,e,Fl(e)),Ho(Nc,n)}}function Mc(e,n,t){e==="focusin"?(Es(),Xt=n,Yt=t,Xt.attachEvent("onpropertychange",Cs)):e==="focusout"&&Es()}function zc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return br(Yt)}function Oc(e,n){if(e==="click")return br(n)}function bc(e,n){if(e==="input"||e==="change")return br(n)}function Fc(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var nn=typeof Object.is=="function"?Object.is:Fc;function Gt(e,n){if(nn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!V.call(n,l)||!nn(e[l],n[l]))return!1}return!0}function Ls(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _s(e,n){var t=Ls(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ls(t)}}function Ps(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ps(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ts(){for(var e=window,n=yr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=yr(e.document)}return n}function li(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Ac(e){var n=Ts(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Ps(t.ownerDocument.documentElement,t)){if(r!==null&&li(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=_s(t,i);var o=_s(t,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Uc=U&&"documentMode"in document&&11>=document.documentMode,ft=null,ii=null,Kt=null,oi=!1;function Is(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;oi||ft==null||ft!==yr(r)||(r=ft,"selectionStart"in r&&li(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kt&&Gt(Kt,r)||(Kt=r,r=Dr(ii,"onSelect"),0<r.length&&(n=new Kl("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=ft)))}function Fr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var pt={animationend:Fr("Animation","AnimationEnd"),animationiteration:Fr("Animation","AnimationIteration"),animationstart:Fr("Animation","AnimationStart"),transitionend:Fr("Transition","TransitionEnd")},si={},Ns={};U&&(Ns=document.createElement("div").style,"AnimationEvent"in window||(delete pt.animationend.animation,delete pt.animationiteration.animation,delete pt.animationstart.animation),"TransitionEvent"in window||delete pt.transitionend.transition);function Ar(e){if(si[e])return si[e];if(!pt[e])return e;var n=pt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ns)return si[e]=n[t];return e}var Rs=Ar("animationend"),Ms=Ar("animationiteration"),zs=Ar("animationstart"),Os=Ar("transitionend"),bs=new Map,Fs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mn(e,n){bs.set(e,n),X(n,[e])}for(var ai=0;ai<Fs.length;ai++){var ui=Fs[ai],Dc=ui.toLowerCase(),Bc=ui[0].toUpperCase()+ui.slice(1);Mn(Dc,"on"+Bc)}Mn(Rs,"onAnimationEnd"),Mn(Ms,"onAnimationIteration"),Mn(zs,"onAnimationStart"),Mn("dblclick","onDoubleClick"),Mn("focusin","onFocus"),Mn("focusout","onBlur"),Mn(Os,"onTransitionEnd"),J("onMouseEnter",["mouseout","mouseover"]),J("onMouseLeave",["mouseout","mouseover"]),J("onPointerEnter",["pointerout","pointerover"]),J("onPointerLeave",["pointerout","pointerover"]),X("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),X("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),X("onBeforeInput",["compositionend","keypress","textInput","paste"]),X("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),X("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),X("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jc=new Set("cancel close invalid load scroll toggle".split(" ").concat(qt));function As(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Du(r,n,void 0,e),e.currentTarget=null}function Us(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var o=r.length-1;0<=o;o--){var s=r[o],a=s.instance,p=s.currentTarget;if(s=s.listener,a!==i&&l.isPropagationStopped())break e;As(l,s,p),i=a}else for(o=0;o<r.length;o++){if(s=r[o],a=s.instance,p=s.currentTarget,s=s.listener,a!==i&&l.isPropagationStopped())break e;As(l,s,p),i=a}}}if(Sr)throw e=Bl,Sr=!1,Bl=null,e}function Z(e,n){var t=n[vi];t===void 0&&(t=n[vi]=new Set);var r=e+"__bubble";t.has(r)||(Ds(n,e,2,!1),t.add(r))}function ci(e,n,t){var r=0;n&&(r|=4),Ds(t,e,r,n)}var Ur="_reactListening"+Math.random().toString(36).slice(2);function Jt(e){if(!e[Ur]){e[Ur]=!0,fe.forEach(function(t){t!=="selectionchange"&&(jc.has(t)||ci(t,!1,e),ci(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ur]||(n[Ur]=!0,ci("selectionchange",!1,n))}}function Ds(e,n,t,r){switch(as(n)){case 1:var l=nc;break;case 4:l=tc;break;default:l=Xl}t=l.bind(null,n,t,e),l=void 0,!Dl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function di(e,n,t,r,l){var i=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;o=o.return}for(;s!==null;){if(o=Yn(s),o===null)return;if(a=o.tag,a===5||a===6){r=i=o;continue e}s=s.parentNode}}r=r.return}Ho(function(){var p=i,v=Fl(t),y=[];e:{var h=bs.get(e);if(h!==void 0){var S=Kl,C=e;switch(e){case"keypress":if(Mr(t)===0)break e;case"keydown":case"keyup":S=vc;break;case"focusin":C="focus",S=Zl;break;case"focusout":C="blur",S=Zl;break;case"beforeblur":case"afterblur":S=Zl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=ds;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=ic;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=wc;break;case Rs:case Ms:case zs:S=ac;break;case Os:S=kc;break;case"scroll":S=rc;break;case"wheel":S=Cc;break;case"copy":case"cut":case"paste":S=cc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=ps}var L=(n&4)!==0,ce=!L&&e==="scroll",d=L?h!==null?h+"Capture":null:h;L=[];for(var u=p,f;u!==null;){f=u;var x=f.stateNode;if(f.tag===5&&x!==null&&(f=x,d!==null&&(x=Ot(u,d),x!=null&&L.push(Zt(u,x,f)))),ce)break;u=u.return}0<L.length&&(h=new S(h,C,null,t,v),y.push({event:h,listeners:L}))}}if((n&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",h&&t!==bl&&(C=t.relatedTarget||t.fromElement)&&(Yn(C)||C[yn]))break e;if((S||h)&&(h=v.window===v?v:(h=v.ownerDocument)?h.defaultView||h.parentWindow:window,S?(C=t.relatedTarget||t.toElement,S=p,C=C?Yn(C):null,C!==null&&(ce=Xn(C),C!==ce||C.tag!==5&&C.tag!==6)&&(C=null)):(S=null,C=p),S!==C)){if(L=ds,x="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(L=ps,x="onPointerLeave",d="onPointerEnter",u="pointer"),ce=S==null?h:gt(S),f=C==null?h:gt(C),h=new L(x,u+"leave",S,t,v),h.target=ce,h.relatedTarget=f,x=null,Yn(v)===p&&(L=new L(d,u+"enter",C,t,v),L.target=f,L.relatedTarget=ce,x=L),ce=x,S&&C)n:{for(L=S,d=C,u=0,f=L;f;f=mt(f))u++;for(f=0,x=d;x;x=mt(x))f++;for(;0<u-f;)L=mt(L),u--;for(;0<f-u;)d=mt(d),f--;for(;u--;){if(L===d||d!==null&&L===d.alternate)break n;L=mt(L),d=mt(d)}L=null}else L=null;S!==null&&Bs(y,h,S,L,!1),C!==null&&ce!==null&&Bs(y,ce,C,L,!0)}}e:{if(h=p?gt(p):window,S=h.nodeName&&h.nodeName.toLowerCase(),S==="select"||S==="input"&&h.type==="file")var _=Rc;else if(xs(h))if(Ss)_=bc;else{_=zc;var P=Mc}else(S=h.nodeName)&&S.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(_=Oc);if(_&&(_=_(e,p))){ws(y,_,t,v);break e}P&&P(e,h,p),e==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&Nl(h,"number",h.value)}switch(P=p?gt(p):window,e){case"focusin":(xs(P)||P.contentEditable==="true")&&(ft=P,ii=p,Kt=null);break;case"focusout":Kt=ii=ft=null;break;case"mousedown":oi=!0;break;case"contextmenu":case"mouseup":case"dragend":oi=!1,Is(y,t,v);break;case"selectionchange":if(Uc)break;case"keydown":case"keyup":Is(y,t,v)}var T;if(ni)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else dt?vs(e,t)&&(N="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(N="onCompositionStart");N&&(ms&&t.locale!=="ko"&&(dt||N!=="onCompositionStart"?N==="onCompositionEnd"&&dt&&(T=us()):(Rn=v,Gl="value"in Rn?Rn.value:Rn.textContent,dt=!0)),P=Dr(p,N),0<P.length&&(N=new fs(N,e,null,t,v),y.push({event:N,listeners:P}),T?N.data=T:(T=ys(t),T!==null&&(N.data=T)))),(T=_c?Pc(e,t):Tc(e,t))&&(p=Dr(p,"onBeforeInput"),0<p.length&&(v=new fs("onBeforeInput","beforeinput",null,t,v),y.push({event:v,listeners:p}),v.data=T))}Us(y,n)})}function Zt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Dr(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Ot(e,t),i!=null&&r.unshift(Zt(e,i,l)),i=Ot(e,n),i!=null&&r.push(Zt(e,i,l))),e=e.return}return r}function mt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bs(e,n,t,r,l){for(var i=n._reactName,o=[];t!==null&&t!==r;){var s=t,a=s.alternate,p=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&p!==null&&(s=p,l?(a=Ot(t,i),a!=null&&o.unshift(Zt(t,a,s))):l||(a=Ot(t,i),a!=null&&o.push(Zt(t,a,s)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var Wc=/\r\n?/g,Vc=/\u0000|\uFFFD/g;function js(e){return(typeof e=="string"?e:""+e).replace(Wc,`
`).replace(Vc,"")}function Br(e,n,t){if(n=js(n),js(e)!==n&&t)throw Error(m(425))}function jr(){}var fi=null,pi=null;function mi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var hi=typeof setTimeout=="function"?setTimeout:void 0,Hc=typeof clearTimeout=="function"?clearTimeout:void 0,Ws=typeof Promise=="function"?Promise:void 0,$c=typeof queueMicrotask=="function"?queueMicrotask:typeof Ws<"u"?function(e){return Ws.resolve(null).then(e).catch(Qc)}:hi;function Qc(e){setTimeout(function(){throw e})}function gi(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),Vt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);Vt(n)}function zn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Vs(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var ht=Math.random().toString(36).slice(2),fn="__reactFiber$"+ht,er="__reactProps$"+ht,yn="__reactContainer$"+ht,vi="__reactEvents$"+ht,Xc="__reactListeners$"+ht,Yc="__reactHandles$"+ht;function Yn(e){var n=e[fn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[yn]||t[fn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Vs(e);e!==null;){if(t=e[fn])return t;e=Vs(e)}return n}e=t,t=e.parentNode}return null}function nr(e){return e=e[fn]||e[yn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function gt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(m(33))}function Wr(e){return e[er]||null}var yi=[],vt=-1;function On(e){return{current:e}}function ee(e){0>vt||(e.current=yi[vt],yi[vt]=null,vt--)}function q(e,n){vt++,yi[vt]=e.current,e.current=n}var bn={},Se=On(bn),Me=On(!1),Gn=bn;function yt(e,n){var t=e.type.contextTypes;if(!t)return bn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in t)l[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function ze(e){return e=e.childContextTypes,e!=null}function Vr(){ee(Me),ee(Se)}function Hs(e,n,t){if(Se.current!==bn)throw Error(m(168));q(Se,n),q(Me,t)}function $s(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(m(108,K(e)||"Unknown",l));return E({},t,r)}function Hr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bn,Gn=Se.current,q(Se,e),q(Me,Me.current),!0}function Qs(e,n,t){var r=e.stateNode;if(!r)throw Error(m(169));t?(e=$s(e,n,Gn),r.__reactInternalMemoizedMergedChildContext=e,ee(Me),ee(Se),q(Se,e)):ee(Me),q(Me,t)}var xn=null,$r=!1,xi=!1;function Xs(e){xn===null?xn=[e]:xn.push(e)}function Gc(e){$r=!0,Xs(e)}function Fn(){if(!xi&&xn!==null){xi=!0;var e=0,n=Q;try{var t=xn;for(Q=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}xn=null,$r=!1}catch(l){throw xn!==null&&(xn=xn.slice(e+1)),Go(jl,Fn),l}finally{Q=n,xi=!1}}return null}var xt=[],wt=0,Qr=null,Xr=0,$e=[],Qe=0,Kn=null,wn=1,Sn="";function qn(e,n){xt[wt++]=Xr,xt[wt++]=Qr,Qr=e,Xr=n}function Ys(e,n,t){$e[Qe++]=wn,$e[Qe++]=Sn,$e[Qe++]=Kn,Kn=e;var r=wn;e=Sn;var l=32-en(r)-1;r&=~(1<<l),t+=1;var i=32-en(n)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,wn=1<<32-en(n)+l|t<<l|r,Sn=i+e}else wn=1<<i|t<<l|r,Sn=e}function wi(e){e.return!==null&&(qn(e,1),Ys(e,1,0))}function Si(e){for(;e===Qr;)Qr=xt[--wt],xt[wt]=null,Xr=xt[--wt],xt[wt]=null;for(;e===Kn;)Kn=$e[--Qe],$e[Qe]=null,Sn=$e[--Qe],$e[Qe]=null,wn=$e[--Qe],$e[Qe]=null}var je=null,We=null,re=!1,tn=null;function Gs(e,n){var t=Ke(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Ks(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,je=e,We=zn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,je=e,We=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Kn!==null?{id:wn,overflow:Sn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ke(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,je=e,We=null,!0):!1;default:return!1}}function ki(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ei(e){if(re){var n=We;if(n){var t=n;if(!Ks(e,n)){if(ki(e))throw Error(m(418));n=zn(t.nextSibling);var r=je;n&&Ks(e,n)?Gs(r,t):(e.flags=e.flags&-4097|2,re=!1,je=e)}}else{if(ki(e))throw Error(m(418));e.flags=e.flags&-4097|2,re=!1,je=e}}}function qs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;je=e}function Yr(e){if(e!==je)return!1;if(!re)return qs(e),re=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!mi(e.type,e.memoizedProps)),n&&(n=We)){if(ki(e))throw Js(),Error(m(418));for(;n;)Gs(e,n),n=zn(n.nextSibling)}if(qs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){We=zn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}We=null}}else We=je?zn(e.stateNode.nextSibling):null;return!0}function Js(){for(var e=We;e;)e=zn(e.nextSibling)}function St(){We=je=null,re=!1}function Ci(e){tn===null?tn=[e]:tn.push(e)}var Kc=we.ReactCurrentBatchConfig;function tr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(m(309));var r=t.stateNode}if(!r)throw Error(m(147,e));var l=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(o){var s=l.refs;o===null?delete s[i]:s[i]=o},n._stringRef=i,n)}if(typeof e!="string")throw Error(m(284));if(!t._owner)throw Error(m(290,e))}return e}function Gr(e,n){throw e=Object.prototype.toString.call(n),Error(m(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Zs(e){var n=e._init;return n(e._payload)}function ea(e){function n(d,u){if(e){var f=d.deletions;f===null?(d.deletions=[u],d.flags|=16):f.push(u)}}function t(d,u){if(!e)return null;for(;u!==null;)n(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function l(d,u){return d=Hn(d,u),d.index=0,d.sibling=null,d}function i(d,u,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<u?(d.flags|=2,u):f):(d.flags|=2,u)):(d.flags|=1048576,u)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,u,f,x){return u===null||u.tag!==6?(u=go(f,d.mode,x),u.return=d,u):(u=l(u,f),u.return=d,u)}function a(d,u,f,x){var _=f.type;return _===Ne?v(d,u,f.props.children,x,f.key):u!==null&&(u.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Re&&Zs(_)===u.type)?(x=l(u,f.props),x.ref=tr(d,u,f),x.return=d,x):(x=xl(f.type,f.key,f.props,null,d.mode,x),x.ref=tr(d,u,f),x.return=d,x)}function p(d,u,f,x){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=vo(f,d.mode,x),u.return=d,u):(u=l(u,f.children||[]),u.return=d,u)}function v(d,u,f,x,_){return u===null||u.tag!==7?(u=it(f,d.mode,x,_),u.return=d,u):(u=l(u,f),u.return=d,u)}function y(d,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=go(""+u,d.mode,f),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Je:return f=xl(u.type,u.key,u.props,null,d.mode,f),f.ref=tr(d,null,u),f.return=d,f;case Le:return u=vo(u,d.mode,f),u.return=d,u;case Re:var x=u._init;return y(d,x(u._payload),f)}if(Rt(u)||I(u))return u=it(u,d.mode,f,null),u.return=d,u;Gr(d,u)}return null}function h(d,u,f,x){var _=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return _!==null?null:s(d,u,""+f,x);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Je:return f.key===_?a(d,u,f,x):null;case Le:return f.key===_?p(d,u,f,x):null;case Re:return _=f._init,h(d,u,_(f._payload),x)}if(Rt(f)||I(f))return _!==null?null:v(d,u,f,x,null);Gr(d,f)}return null}function S(d,u,f,x,_){if(typeof x=="string"&&x!==""||typeof x=="number")return d=d.get(f)||null,s(u,d,""+x,_);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Je:return d=d.get(x.key===null?f:x.key)||null,a(u,d,x,_);case Le:return d=d.get(x.key===null?f:x.key)||null,p(u,d,x,_);case Re:var P=x._init;return S(d,u,f,P(x._payload),_)}if(Rt(x)||I(x))return d=d.get(f)||null,v(u,d,x,_,null);Gr(u,x)}return null}function C(d,u,f,x){for(var _=null,P=null,T=u,N=u=0,ve=null;T!==null&&N<f.length;N++){T.index>N?(ve=T,T=null):ve=T.sibling;var j=h(d,T,f[N],x);if(j===null){T===null&&(T=ve);break}e&&T&&j.alternate===null&&n(d,T),u=i(j,u,N),P===null?_=j:P.sibling=j,P=j,T=ve}if(N===f.length)return t(d,T),re&&qn(d,N),_;if(T===null){for(;N<f.length;N++)T=y(d,f[N],x),T!==null&&(u=i(T,u,N),P===null?_=T:P.sibling=T,P=T);return re&&qn(d,N),_}for(T=r(d,T);N<f.length;N++)ve=S(T,d,N,f[N],x),ve!==null&&(e&&ve.alternate!==null&&T.delete(ve.key===null?N:ve.key),u=i(ve,u,N),P===null?_=ve:P.sibling=ve,P=ve);return e&&T.forEach(function($n){return n(d,$n)}),re&&qn(d,N),_}function L(d,u,f,x){var _=I(f);if(typeof _!="function")throw Error(m(150));if(f=_.call(f),f==null)throw Error(m(151));for(var P=_=null,T=u,N=u=0,ve=null,j=f.next();T!==null&&!j.done;N++,j=f.next()){T.index>N?(ve=T,T=null):ve=T.sibling;var $n=h(d,T,j.value,x);if($n===null){T===null&&(T=ve);break}e&&T&&$n.alternate===null&&n(d,T),u=i($n,u,N),P===null?_=$n:P.sibling=$n,P=$n,T=ve}if(j.done)return t(d,T),re&&qn(d,N),_;if(T===null){for(;!j.done;N++,j=f.next())j=y(d,j.value,x),j!==null&&(u=i(j,u,N),P===null?_=j:P.sibling=j,P=j);return re&&qn(d,N),_}for(T=r(d,T);!j.done;N++,j=f.next())j=S(T,d,N,j.value,x),j!==null&&(e&&j.alternate!==null&&T.delete(j.key===null?N:j.key),u=i(j,u,N),P===null?_=j:P.sibling=j,P=j);return e&&T.forEach(function(Id){return n(d,Id)}),re&&qn(d,N),_}function ce(d,u,f,x){if(typeof f=="object"&&f!==null&&f.type===Ne&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Je:e:{for(var _=f.key,P=u;P!==null;){if(P.key===_){if(_=f.type,_===Ne){if(P.tag===7){t(d,P.sibling),u=l(P,f.props.children),u.return=d,d=u;break e}}else if(P.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Re&&Zs(_)===P.type){t(d,P.sibling),u=l(P,f.props),u.ref=tr(d,P,f),u.return=d,d=u;break e}t(d,P);break}else n(d,P);P=P.sibling}f.type===Ne?(u=it(f.props.children,d.mode,x,f.key),u.return=d,d=u):(x=xl(f.type,f.key,f.props,null,d.mode,x),x.ref=tr(d,u,f),x.return=d,d=x)}return o(d);case Le:e:{for(P=f.key;u!==null;){if(u.key===P)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){t(d,u.sibling),u=l(u,f.children||[]),u.return=d,d=u;break e}else{t(d,u);break}else n(d,u);u=u.sibling}u=vo(f,d.mode,x),u.return=d,d=u}return o(d);case Re:return P=f._init,ce(d,u,P(f._payload),x)}if(Rt(f))return C(d,u,f,x);if(I(f))return L(d,u,f,x);Gr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(t(d,u.sibling),u=l(u,f),u.return=d,d=u):(t(d,u),u=go(f,d.mode,x),u.return=d,d=u),o(d)):t(d,u)}return ce}var kt=ea(!0),na=ea(!1),Kr=On(null),qr=null,Et=null,Li=null;function _i(){Li=Et=qr=null}function Pi(e){var n=Kr.current;ee(Kr),e._currentValue=n}function Ti(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Ct(e,n){qr=e,Li=Et=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(Oe=!0),e.firstContext=null)}function Xe(e){var n=e._currentValue;if(Li!==e)if(e={context:e,memoizedValue:n,next:null},Et===null){if(qr===null)throw Error(m(308));Et=e,qr.dependencies={lanes:0,firstContext:e}}else Et=Et.next=e;return n}var Jn=null;function Ii(e){Jn===null?Jn=[e]:Jn.push(e)}function ta(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,Ii(n)):(t.next=l.next,l.next=t),n.interleaved=t,kn(e,r)}function kn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var An=!1;function Ni(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ra(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function En(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Un(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(A&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,kn(e,t)}return l=r.interleaved,l===null?(n.next=n,Ii(r)):(n.next=l.next,l.next=n),r.interleaved=n,kn(e,t)}function Jr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Hl(e,t)}}function la(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?l=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?l=i=n:i=i.next=n}else l=i=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Zr(e,n,t,r){var l=e.updateQueue;An=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var a=s,p=a.next;a.next=null,o===null?i=p:o.next=p,o=a;var v=e.alternate;v!==null&&(v=v.updateQueue,s=v.lastBaseUpdate,s!==o&&(s===null?v.firstBaseUpdate=p:s.next=p,v.lastBaseUpdate=a))}if(i!==null){var y=l.baseState;o=0,v=p=a=null,s=i;do{var h=s.lane,S=s.eventTime;if((r&h)===h){v!==null&&(v=v.next={eventTime:S,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var C=e,L=s;switch(h=n,S=t,L.tag){case 1:if(C=L.payload,typeof C=="function"){y=C.call(S,y,h);break e}y=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=L.payload,h=typeof C=="function"?C.call(S,y,h):C,h==null)break e;y=E({},y,h);break e;case 2:An=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[s]:h.push(s))}else S={eventTime:S,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},v===null?(p=v=S,a=y):v=v.next=S,o|=h;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;h=s,s=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(v===null&&(a=y),l.baseState=a,l.firstBaseUpdate=p,l.lastBaseUpdate=v,n=l.shared.interleaved,n!==null){l=n;do o|=l.lane,l=l.next;while(l!==n)}else i===null&&(l.shared.lanes=0);nt|=o,e.lanes=o,e.memoizedState=y}}function ia(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(m(191,l));l.call(r)}}}var rr={},pn=On(rr),lr=On(rr),ir=On(rr);function Zn(e){if(e===rr)throw Error(m(174));return e}function Ri(e,n){switch(q(ir,n),q(lr,e),q(pn,rr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ml(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ml(n,e)}ee(pn),q(pn,n)}function Lt(){ee(pn),ee(lr),ee(ir)}function oa(e){Zn(ir.current);var n=Zn(pn.current),t=Ml(n,e.type);n!==t&&(q(lr,e),q(pn,t))}function Mi(e){lr.current===e&&(ee(pn),ee(lr))}var ie=On(0);function el(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var zi=[];function Oi(){for(var e=0;e<zi.length;e++)zi[e]._workInProgressVersionPrimary=null;zi.length=0}var nl=we.ReactCurrentDispatcher,bi=we.ReactCurrentBatchConfig,et=0,oe=null,pe=null,he=null,tl=!1,or=!1,sr=0,qc=0;function ke(){throw Error(m(321))}function Fi(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!nn(e[t],n[t]))return!1;return!0}function Ai(e,n,t,r,l,i){if(et=i,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,nl.current=e===null||e.memoizedState===null?nd:td,e=t(r,l),or){i=0;do{if(or=!1,sr=0,25<=i)throw Error(m(301));i+=1,he=pe=null,n.updateQueue=null,nl.current=rd,e=t(r,l)}while(or)}if(nl.current=il,n=pe!==null&&pe.next!==null,et=0,he=pe=oe=null,tl=!1,n)throw Error(m(300));return e}function Ui(){var e=sr!==0;return sr=0,e}function mn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?oe.memoizedState=he=e:he=he.next=e,he}function Ye(){if(pe===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var n=he===null?oe.memoizedState:he.next;if(n!==null)he=n,pe=e;else{if(e===null)throw Error(m(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},he===null?oe.memoizedState=he=e:he=he.next=e}return he}function ar(e,n){return typeof n=="function"?n(e):n}function Di(e){var n=Ye(),t=n.queue;if(t===null)throw Error(m(311));t.lastRenderedReducer=e;var r=pe,l=r.baseQueue,i=t.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,t.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=o=null,a=null,p=i;do{var v=p.lane;if((et&v)===v)a!==null&&(a=a.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var y={lane:v,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};a===null?(s=a=y,o=r):a=a.next=y,oe.lanes|=v,nt|=v}p=p.next}while(p!==null&&p!==i);a===null?o=r:a.next=s,nn(r,n.memoizedState)||(Oe=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do i=l.lane,oe.lanes|=i,nt|=i,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Bi(e){var n=Ye(),t=n.queue;if(t===null)throw Error(m(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,i=n.memoizedState;if(l!==null){t.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);nn(i,n.memoizedState)||(Oe=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function sa(){}function aa(e,n){var t=oe,r=Ye(),l=n(),i=!nn(r.memoizedState,l);if(i&&(r.memoizedState=l,Oe=!0),r=r.queue,ji(da.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||he!==null&&he.memoizedState.tag&1){if(t.flags|=2048,ur(9,ca.bind(null,t,r,l,n),void 0,null),ge===null)throw Error(m(349));(et&30)!==0||ua(t,n,l)}return l}function ua(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=oe.updateQueue,n===null?(n={lastEffect:null,stores:null},oe.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function ca(e,n,t,r){n.value=t,n.getSnapshot=r,fa(n)&&pa(e)}function da(e,n,t){return t(function(){fa(n)&&pa(e)})}function fa(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!nn(e,t)}catch{return!0}}function pa(e){var n=kn(e,1);n!==null&&sn(n,e,1,-1)}function ma(e){var n=mn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ar,lastRenderedState:e},n.queue=e,e=e.dispatch=ed.bind(null,oe,e),[n.memoizedState,e]}function ur(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=oe.updateQueue,n===null?(n={lastEffect:null,stores:null},oe.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function ha(){return Ye().memoizedState}function rl(e,n,t,r){var l=mn();oe.flags|=e,l.memoizedState=ur(1|n,t,void 0,r===void 0?null:r)}function ll(e,n,t,r){var l=Ye();r=r===void 0?null:r;var i=void 0;if(pe!==null){var o=pe.memoizedState;if(i=o.destroy,r!==null&&Fi(r,o.deps)){l.memoizedState=ur(n,t,i,r);return}}oe.flags|=e,l.memoizedState=ur(1|n,t,i,r)}function ga(e,n){return rl(8390656,8,e,n)}function ji(e,n){return ll(2048,8,e,n)}function va(e,n){return ll(4,2,e,n)}function ya(e,n){return ll(4,4,e,n)}function xa(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function wa(e,n,t){return t=t!=null?t.concat([e]):null,ll(4,4,xa.bind(null,n,e),t)}function Wi(){}function Sa(e,n){var t=Ye();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Fi(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function ka(e,n){var t=Ye();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Fi(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Ea(e,n,t){return(et&21)===0?(e.baseState&&(e.baseState=!1,Oe=!0),e.memoizedState=t):(nn(t,n)||(t=Zo(),oe.lanes|=t,nt|=t,e.baseState=!0),n)}function Jc(e,n){var t=Q;Q=t!==0&&4>t?t:4,e(!0);var r=bi.transition;bi.transition={};try{e(!1),n()}finally{Q=t,bi.transition=r}}function Ca(){return Ye().memoizedState}function Zc(e,n,t){var r=Wn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},La(e))_a(n,t);else if(t=ta(e,n,t,r),t!==null){var l=Pe();sn(t,e,r,l),Pa(t,n,r)}}function ed(e,n,t){var r=Wn(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(La(e))_a(n,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var o=n.lastRenderedState,s=i(o,t);if(l.hasEagerState=!0,l.eagerState=s,nn(s,o)){var a=n.interleaved;a===null?(l.next=l,Ii(n)):(l.next=a.next,a.next=l),n.interleaved=l;return}}catch{}finally{}t=ta(e,n,l,r),t!==null&&(l=Pe(),sn(t,e,r,l),Pa(t,n,r))}}function La(e){var n=e.alternate;return e===oe||n!==null&&n===oe}function _a(e,n){or=tl=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Pa(e,n,t){if((t&4194240)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Hl(e,t)}}var il={readContext:Xe,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},nd={readContext:Xe,useCallback:function(e,n){return mn().memoizedState=[e,n===void 0?null:n],e},useContext:Xe,useEffect:ga,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,rl(4194308,4,xa.bind(null,n,e),t)},useLayoutEffect:function(e,n){return rl(4194308,4,e,n)},useInsertionEffect:function(e,n){return rl(4,2,e,n)},useMemo:function(e,n){var t=mn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=mn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Zc.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var n=mn();return e={current:e},n.memoizedState=e},useState:ma,useDebugValue:Wi,useDeferredValue:function(e){return mn().memoizedState=e},useTransition:function(){var e=ma(!1),n=e[0];return e=Jc.bind(null,e[1]),mn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=oe,l=mn();if(re){if(t===void 0)throw Error(m(407));t=t()}else{if(t=n(),ge===null)throw Error(m(349));(et&30)!==0||ua(r,n,t)}l.memoizedState=t;var i={value:t,getSnapshot:n};return l.queue=i,ga(da.bind(null,r,i,e),[e]),r.flags|=2048,ur(9,ca.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=mn(),n=ge.identifierPrefix;if(re){var t=Sn,r=wn;t=(r&~(1<<32-en(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=sr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=qc++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},td={readContext:Xe,useCallback:Sa,useContext:Xe,useEffect:ji,useImperativeHandle:wa,useInsertionEffect:va,useLayoutEffect:ya,useMemo:ka,useReducer:Di,useRef:ha,useState:function(){return Di(ar)},useDebugValue:Wi,useDeferredValue:function(e){var n=Ye();return Ea(n,pe.memoizedState,e)},useTransition:function(){var e=Di(ar)[0],n=Ye().memoizedState;return[e,n]},useMutableSource:sa,useSyncExternalStore:aa,useId:Ca,unstable_isNewReconciler:!1},rd={readContext:Xe,useCallback:Sa,useContext:Xe,useEffect:ji,useImperativeHandle:wa,useInsertionEffect:va,useLayoutEffect:ya,useMemo:ka,useReducer:Bi,useRef:ha,useState:function(){return Bi(ar)},useDebugValue:Wi,useDeferredValue:function(e){var n=Ye();return pe===null?n.memoizedState=e:Ea(n,pe.memoizedState,e)},useTransition:function(){var e=Bi(ar)[0],n=Ye().memoizedState;return[e,n]},useMutableSource:sa,useSyncExternalStore:aa,useId:Ca,unstable_isNewReconciler:!1};function rn(e,n){if(e&&e.defaultProps){n=E({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Vi(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:E({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ol={isMounted:function(e){return(e=e._reactInternals)?Xn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Pe(),l=Wn(e),i=En(r,l);i.payload=n,t!=null&&(i.callback=t),n=Un(e,i,l),n!==null&&(sn(n,e,l,r),Jr(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Pe(),l=Wn(e),i=En(r,l);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Un(e,i,l),n!==null&&(sn(n,e,l,r),Jr(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Pe(),r=Wn(e),l=En(t,r);l.tag=2,n!=null&&(l.callback=n),n=Un(e,l,r),n!==null&&(sn(n,e,r,t),Jr(n,e,r))}};function Ta(e,n,t,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):n.prototype&&n.prototype.isPureReactComponent?!Gt(t,r)||!Gt(l,i):!0}function Ia(e,n,t){var r=!1,l=bn,i=n.contextType;return typeof i=="object"&&i!==null?i=Xe(i):(l=ze(n)?Gn:Se.current,r=n.contextTypes,i=(r=r!=null)?yt(e,l):bn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ol,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),n}function Na(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&ol.enqueueReplaceState(n,n.state,null)}function Hi(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},Ni(e);var i=n.contextType;typeof i=="object"&&i!==null?l.context=Xe(i):(i=ze(n)?Gn:Se.current,l.context=yt(e,i)),l.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Vi(e,n,i,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&ol.enqueueReplaceState(l,l.state,null),Zr(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function _t(e,n){try{var t="",r=n;do t+=D(r),r=r.return;while(r);var l=t}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:l,digest:null}}function $i(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Qi(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var ld=typeof WeakMap=="function"?WeakMap:Map;function Ra(e,n,t){t=En(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){pl||(pl=!0,so=r),Qi(e,n)},t}function Ma(e,n,t){t=En(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){Qi(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Qi(e,n),typeof r!="function"&&(Bn===null?Bn=new Set([this]):Bn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function za(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new ld;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=yd.bind(null,e,n,t),n.then(e,e))}function Oa(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function ba(e,n,t,r,l){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=En(-1,1),n.tag=2,Un(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var id=we.ReactCurrentOwner,Oe=!1;function _e(e,n,t,r){n.child=e===null?na(n,null,t,r):kt(n,e.child,t,r)}function Fa(e,n,t,r,l){t=t.render;var i=n.ref;return Ct(n,l),r=Ai(e,n,t,r,i,l),t=Ui(),e!==null&&!Oe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Cn(e,n,l)):(re&&t&&wi(n),n.flags|=1,_e(e,n,r,l),n.child)}function Aa(e,n,t,r,l){if(e===null){var i=t.type;return typeof i=="function"&&!ho(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Ua(e,n,i,r,l)):(e=xl(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,(e.lanes&l)===0){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:Gt,t(o,r)&&e.ref===n.ref)return Cn(e,n,l)}return n.flags|=1,e=Hn(i,r),e.ref=n.ref,e.return=n,n.child=e}function Ua(e,n,t,r,l){if(e!==null){var i=e.memoizedProps;if(Gt(i,r)&&e.ref===n.ref)if(Oe=!1,n.pendingProps=r=i,(e.lanes&l)!==0)(e.flags&131072)!==0&&(Oe=!0);else return n.lanes=e.lanes,Cn(e,n,l)}return Xi(e,n,t,r,l)}function Da(e,n,t){var r=n.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(Tt,Ve),Ve|=t;else{if((t&1073741824)===0)return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,q(Tt,Ve),Ve|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,q(Tt,Ve),Ve|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,q(Tt,Ve),Ve|=r;return _e(e,n,l,t),n.child}function Ba(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Xi(e,n,t,r,l){var i=ze(t)?Gn:Se.current;return i=yt(n,i),Ct(n,l),t=Ai(e,n,t,r,i,l),r=Ui(),e!==null&&!Oe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Cn(e,n,l)):(re&&r&&wi(n),n.flags|=1,_e(e,n,t,l),n.child)}function ja(e,n,t,r,l){if(ze(t)){var i=!0;Hr(n)}else i=!1;if(Ct(n,l),n.stateNode===null)al(e,n),Ia(n,t,r),Hi(n,t,r,l),r=!0;else if(e===null){var o=n.stateNode,s=n.memoizedProps;o.props=s;var a=o.context,p=t.contextType;typeof p=="object"&&p!==null?p=Xe(p):(p=ze(t)?Gn:Se.current,p=yt(n,p));var v=t.getDerivedStateFromProps,y=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function";y||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||a!==p)&&Na(n,o,r,p),An=!1;var h=n.memoizedState;o.state=h,Zr(n,r,o,l),a=n.memoizedState,s!==r||h!==a||Me.current||An?(typeof v=="function"&&(Vi(n,t,v,r),a=n.memoizedState),(s=An||Ta(n,t,s,r,h,a,p))?(y||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),o.props=r,o.state=a,o.context=p,r=s):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,ra(e,n),s=n.memoizedProps,p=n.type===n.elementType?s:rn(n.type,s),o.props=p,y=n.pendingProps,h=o.context,a=t.contextType,typeof a=="object"&&a!==null?a=Xe(a):(a=ze(t)?Gn:Se.current,a=yt(n,a));var S=t.getDerivedStateFromProps;(v=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==y||h!==a)&&Na(n,o,r,a),An=!1,h=n.memoizedState,o.state=h,Zr(n,r,o,l);var C=n.memoizedState;s!==y||h!==C||Me.current||An?(typeof S=="function"&&(Vi(n,t,S,r),C=n.memoizedState),(p=An||Ta(n,t,p,r,h,C,a)||!1)?(v||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,a)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=C),o.props=r,o.state=C,o.context=a,r=p):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),r=!1)}return Yi(e,n,t,r,i,l)}function Yi(e,n,t,r,l,i){Ba(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return l&&Qs(n,t,!1),Cn(e,n,i);r=n.stateNode,id.current=n;var s=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=kt(n,e.child,null,i),n.child=kt(n,null,s,i)):_e(e,n,s,i),n.memoizedState=r.state,l&&Qs(n,t,!0),n.child}function Wa(e){var n=e.stateNode;n.pendingContext?Hs(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Hs(e,n.context,!1),Ri(e,n.containerInfo)}function Va(e,n,t,r,l){return St(),Ci(l),n.flags|=256,_e(e,n,t,r),n.child}var Gi={dehydrated:null,treeContext:null,retryLane:0};function Ki(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ha(e,n,t){var r=n.pendingProps,l=ie.current,i=!1,o=(n.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),q(ie,l&1),e===null)return Ei(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(o=r.children,e=r.fallback,i?(r=n.mode,i=n.child,o={mode:"hidden",children:o},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=o):i=wl(o,r,0,null),e=it(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Ki(t),n.memoizedState=Gi,e):qi(n,o));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return od(e,n,o,r,s,l,t);if(i){i=r.fallback,o=n.mode,l=e.child,s=l.sibling;var a={mode:"hidden",children:r.children};return(o&1)===0&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=Hn(l,a),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=Hn(s,i):(i=it(i,o,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,o=e.child.memoizedState,o=o===null?Ki(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~t,n.memoizedState=Gi,r}return i=e.child,e=i.sibling,r=Hn(i,{mode:"visible",children:r.children}),(n.mode&1)===0&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function qi(e,n){return n=wl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function sl(e,n,t,r){return r!==null&&Ci(r),kt(n,e.child,null,t),e=qi(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function od(e,n,t,r,l,i,o){if(t)return n.flags&256?(n.flags&=-257,r=$i(Error(m(422))),sl(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,l=n.mode,r=wl({mode:"visible",children:r.children},l,0,null),i=it(i,l,o,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,(n.mode&1)!==0&&kt(n,e.child,null,o),n.child.memoizedState=Ki(o),n.memoizedState=Gi,i);if((n.mode&1)===0)return sl(e,n,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(m(419)),r=$i(i,r,void 0),sl(e,n,o,r)}if(s=(o&e.childLanes)!==0,Oe||s){if(r=ge,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|o))!==0?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,kn(e,l),sn(r,e,l,-1))}return mo(),r=$i(Error(m(421))),sl(e,n,o,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=xd.bind(null,e),l._reactRetry=n,null):(e=i.treeContext,We=zn(l.nextSibling),je=n,re=!0,tn=null,e!==null&&($e[Qe++]=wn,$e[Qe++]=Sn,$e[Qe++]=Kn,wn=e.id,Sn=e.overflow,Kn=n),n=qi(n,r.children),n.flags|=4096,n)}function $a(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Ti(e.return,n,t)}function Ji(e,n,t,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=l)}function Qa(e,n,t){var r=n.pendingProps,l=r.revealOrder,i=r.tail;if(_e(e,n,r.children,t),r=ie.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$a(e,t,n);else if(e.tag===19)$a(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(ie,r),(n.mode&1)===0)n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&el(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),Ji(n,!1,l,t,i);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&el(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Ji(n,!0,t,null,i);break;case"together":Ji(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function al(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Cn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),nt|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(m(153));if(n.child!==null){for(e=n.child,t=Hn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Hn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function sd(e,n,t){switch(n.tag){case 3:Wa(n),St();break;case 5:oa(n);break;case 1:ze(n.type)&&Hr(n);break;case 4:Ri(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;q(Kr,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(q(ie,ie.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?Ha(e,n,t):(q(ie,ie.current&1),e=Cn(e,n,t),e!==null?e.sibling:null);q(ie,ie.current&1);break;case 19:if(r=(t&n.childLanes)!==0,(e.flags&128)!==0){if(r)return Qa(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),q(ie,ie.current),r)break;return null;case 22:case 23:return n.lanes=0,Da(e,n,t)}return Cn(e,n,t)}var Xa,Zi,Ya,Ga;Xa=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},Zi=function(){},Ya=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,Zn(pn.current);var i=null;switch(t){case"input":l=Tl(e,l),r=Tl(e,r),i=[];break;case"select":l=E({},l,{value:void 0}),r=E({},r,{value:void 0}),i=[];break;case"textarea":l=Rl(e,l),r=Rl(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=jr)}zl(t,r);var o;t=null;for(p in l)if(!r.hasOwnProperty(p)&&l.hasOwnProperty(p)&&l[p]!=null)if(p==="style"){var s=l[p];for(o in s)s.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(b.hasOwnProperty(p)?i||(i=[]):(i=i||[]).push(p,null));for(p in r){var a=r[p];if(s=l!=null?l[p]:void 0,r.hasOwnProperty(p)&&a!==s&&(a!=null||s!=null))if(p==="style")if(s){for(o in s)!s.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in a)a.hasOwnProperty(o)&&s[o]!==a[o]&&(t||(t={}),t[o]=a[o])}else t||(i||(i=[]),i.push(p,t)),t=a;else p==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(p,a)):p==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(p,""+a):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(b.hasOwnProperty(p)?(a!=null&&p==="onScroll"&&Z("scroll",e),i||s===a||(i=[])):(i=i||[]).push(p,a))}t&&(i=i||[]).push("style",t);var p=i;(n.updateQueue=p)&&(n.flags|=4)}},Ga=function(e,n,t,r){t!==r&&(n.flags|=4)};function cr(e,n){if(!re)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function ad(e,n,t){var r=n.pendingProps;switch(Si(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(n),null;case 1:return ze(n.type)&&Vr(),Ee(n),null;case 3:return r=n.stateNode,Lt(),ee(Me),ee(Se),Oi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Yr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,tn!==null&&(co(tn),tn=null))),Zi(e,n),Ee(n),null;case 5:Mi(n);var l=Zn(ir.current);if(t=n.type,e!==null&&n.stateNode!=null)Ya(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(m(166));return Ee(n),null}if(e=Zn(pn.current),Yr(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[fn]=n,r[er]=i,e=(n.mode&1)!==0,t){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(l=0;l<qt.length;l++)Z(qt[l],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":Io(r,i),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Z("invalid",r);break;case"textarea":Mo(r,i),Z("invalid",r)}zl(t,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Br(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Br(r.textContent,s,e),l=["children",""+s]):b.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&Z("scroll",r)}switch(t){case"input":vr(r),Ro(r,i,!0);break;case"textarea":vr(r),Oo(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=jr)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bo(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[fn]=n,e[er]=r,Xa(e,n,!1,!1),n.stateNode=e;e:{switch(o=Ol(t,r),t){case"dialog":Z("cancel",e),Z("close",e),l=r;break;case"iframe":case"object":case"embed":Z("load",e),l=r;break;case"video":case"audio":for(l=0;l<qt.length;l++)Z(qt[l],e);l=r;break;case"source":Z("error",e),l=r;break;case"img":case"image":case"link":Z("error",e),Z("load",e),l=r;break;case"details":Z("toggle",e),l=r;break;case"input":Io(e,r),l=Tl(e,r),Z("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=E({},r,{value:void 0}),Z("invalid",e);break;case"textarea":Mo(e,r),l=Rl(e,r),Z("invalid",e);break;default:l=r}zl(t,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?Uo(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Fo(e,a)):i==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&Mt(e,a):typeof a=="number"&&Mt(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(b.hasOwnProperty(i)?a!=null&&i==="onScroll"&&Z("scroll",e):a!=null&&qe(e,i,a,o))}switch(t){case"input":vr(e),Ro(e,r,!1);break;case"textarea":vr(e),Oo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+$(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?ot(e,!!r.multiple,i,!1):r.defaultValue!=null&&ot(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=jr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ee(n),null;case 6:if(e&&n.stateNode!=null)Ga(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(m(166));if(t=Zn(ir.current),Zn(pn.current),Yr(n)){if(r=n.stateNode,t=n.memoizedProps,r[fn]=n,(i=r.nodeValue!==t)&&(e=je,e!==null))switch(e.tag){case 3:Br(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Br(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[fn]=n,n.stateNode=r}return Ee(n),null;case 13:if(ee(ie),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&We!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Js(),St(),n.flags|=98560,i=!1;else if(i=Yr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(m(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(m(317));i[fn]=n}else St(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ee(n),i=!1}else tn!==null&&(co(tn),tn=null),i=!0;if(!i)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(ie.current&1)!==0?me===0&&(me=3):mo())),n.updateQueue!==null&&(n.flags|=4),Ee(n),null);case 4:return Lt(),Zi(e,n),e===null&&Jt(n.stateNode.containerInfo),Ee(n),null;case 10:return Pi(n.type._context),Ee(n),null;case 17:return ze(n.type)&&Vr(),Ee(n),null;case 19:if(ee(ie),i=n.memoizedState,i===null)return Ee(n),null;if(r=(n.flags&128)!==0,o=i.rendering,o===null)if(r)cr(i,!1);else{if(me!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(o=el(e),o!==null){for(n.flags|=128,cr(i,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return q(ie,ie.current&1|2),n.child}e=e.sibling}i.tail!==null&&ue()>It&&(n.flags|=128,r=!0,cr(i,!1),n.lanes=4194304)}else{if(!r)if(e=el(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),cr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!re)return Ee(n),null}else 2*ue()-i.renderingStartTime>It&&t!==1073741824&&(n.flags|=128,r=!0,cr(i,!1),n.lanes=4194304);i.isBackwards?(o.sibling=n.child,n.child=o):(t=i.last,t!==null?t.sibling=o:n.child=o,i.last=o)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=ue(),n.sibling=null,t=ie.current,q(ie,r?t&1|2:t&1),n):(Ee(n),null);case 22:case 23:return po(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&(n.mode&1)!==0?(Ve&1073741824)!==0&&(Ee(n),n.subtreeFlags&6&&(n.flags|=8192)):Ee(n),null;case 24:return null;case 25:return null}throw Error(m(156,n.tag))}function ud(e,n){switch(Si(n),n.tag){case 1:return ze(n.type)&&Vr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Lt(),ee(Me),ee(Se),Oi(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return Mi(n),null;case 13:if(ee(ie),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(m(340));St()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ee(ie),null;case 4:return Lt(),null;case 10:return Pi(n.type._context),null;case 22:case 23:return po(),null;case 24:return null;default:return null}}var ul=!1,Ce=!1,cd=typeof WeakSet=="function"?WeakSet:Set,k=null;function Pt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){ae(e,n,r)}else t.current=null}function eo(e,n,t){try{t()}catch(r){ae(e,n,r)}}var Ka=!1;function dd(e,n){if(fi=Ir,e=Ts(),li(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var o=0,s=-1,a=-1,p=0,v=0,y=e,h=null;n:for(;;){for(var S;y!==t||l!==0&&y.nodeType!==3||(s=o+l),y!==i||r!==0&&y.nodeType!==3||(a=o+r),y.nodeType===3&&(o+=y.nodeValue.length),(S=y.firstChild)!==null;)h=y,y=S;for(;;){if(y===e)break n;if(h===t&&++p===l&&(s=o),h===i&&++v===r&&(a=o),(S=y.nextSibling)!==null)break;y=h,h=y.parentNode}y=S}t=s===-1||a===-1?null:{start:s,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(pi={focusedElem:e,selectionRange:t},Ir=!1,k=n;k!==null;)if(n=k,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,k=e;else for(;k!==null;){n=k;try{var C=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var L=C.memoizedProps,ce=C.memoizedState,d=n.stateNode,u=d.getSnapshotBeforeUpdate(n.elementType===n.type?L:rn(n.type,L),ce);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(m(163))}}catch(x){ae(n,n.return,x)}if(e=n.sibling,e!==null){e.return=n.return,k=e;break}k=n.return}return C=Ka,Ka=!1,C}function dr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&eo(n,t,i)}l=l.next}while(l!==r)}}function cl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function no(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function qa(e){var n=e.alternate;n!==null&&(e.alternate=null,qa(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[fn],delete n[er],delete n[vi],delete n[Xc],delete n[Yc])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ja(e){return e.tag===5||e.tag===3||e.tag===4}function Za(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ja(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function to(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=jr));else if(r!==4&&(e=e.child,e!==null))for(to(e,n,t),e=e.sibling;e!==null;)to(e,n,t),e=e.sibling}function ro(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ro(e,n,t),e=e.sibling;e!==null;)ro(e,n,t),e=e.sibling}var ye=null,ln=!1;function Dn(e,n,t){for(t=t.child;t!==null;)eu(e,n,t),t=t.sibling}function eu(e,n,t){if(dn&&typeof dn.onCommitFiberUnmount=="function")try{dn.onCommitFiberUnmount(Er,t)}catch{}switch(t.tag){case 5:Ce||Pt(t,n);case 6:var r=ye,l=ln;ye=null,Dn(e,n,t),ye=r,ln=l,ye!==null&&(ln?(e=ye,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ye.removeChild(t.stateNode));break;case 18:ye!==null&&(ln?(e=ye,t=t.stateNode,e.nodeType===8?gi(e.parentNode,t):e.nodeType===1&&gi(e,t),Vt(e)):gi(ye,t.stateNode));break;case 4:r=ye,l=ln,ye=t.stateNode.containerInfo,ln=!0,Dn(e,n,t),ye=r,ln=l;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&((i&2)!==0||(i&4)!==0)&&eo(t,n,o),l=l.next}while(l!==r)}Dn(e,n,t);break;case 1:if(!Ce&&(Pt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){ae(t,n,s)}Dn(e,n,t);break;case 21:Dn(e,n,t);break;case 22:t.mode&1?(Ce=(r=Ce)||t.memoizedState!==null,Dn(e,n,t),Ce=r):Dn(e,n,t);break;default:Dn(e,n,t)}}function nu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new cd),n.forEach(function(r){var l=wd.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function on(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var i=e,o=n,s=o;e:for(;s!==null;){switch(s.tag){case 5:ye=s.stateNode,ln=!1;break e;case 3:ye=s.stateNode.containerInfo,ln=!0;break e;case 4:ye=s.stateNode.containerInfo,ln=!0;break e}s=s.return}if(ye===null)throw Error(m(160));eu(i,o,l),ye=null,ln=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(p){ae(l,n,p)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)tu(n,e),n=n.sibling}function tu(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(on(n,e),hn(e),r&4){try{dr(3,e,e.return),cl(3,e)}catch(L){ae(e,e.return,L)}try{dr(5,e,e.return)}catch(L){ae(e,e.return,L)}}break;case 1:on(n,e),hn(e),r&512&&t!==null&&Pt(t,t.return);break;case 5:if(on(n,e),hn(e),r&512&&t!==null&&Pt(t,t.return),e.flags&32){var l=e.stateNode;try{Mt(l,"")}catch(L){ae(e,e.return,L)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=t!==null?t.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&No(l,i),Ol(s,o);var p=Ol(s,i);for(o=0;o<a.length;o+=2){var v=a[o],y=a[o+1];v==="style"?Uo(l,y):v==="dangerouslySetInnerHTML"?Fo(l,y):v==="children"?Mt(l,y):qe(l,v,y,p)}switch(s){case"input":Il(l,i);break;case"textarea":zo(l,i);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var S=i.value;S!=null?ot(l,!!i.multiple,S,!1):h!==!!i.multiple&&(i.defaultValue!=null?ot(l,!!i.multiple,i.defaultValue,!0):ot(l,!!i.multiple,i.multiple?[]:"",!1))}l[er]=i}catch(L){ae(e,e.return,L)}}break;case 6:if(on(n,e),hn(e),r&4){if(e.stateNode===null)throw Error(m(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(L){ae(e,e.return,L)}}break;case 3:if(on(n,e),hn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Vt(n.containerInfo)}catch(L){ae(e,e.return,L)}break;case 4:on(n,e),hn(e);break;case 13:on(n,e),hn(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(oo=ue())),r&4&&nu(e);break;case 22:if(v=t!==null&&t.memoizedState!==null,e.mode&1?(Ce=(p=Ce)||v,on(n,e),Ce=p):on(n,e),hn(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!v&&(e.mode&1)!==0)for(k=e,v=e.child;v!==null;){for(y=k=v;k!==null;){switch(h=k,S=h.child,h.tag){case 0:case 11:case 14:case 15:dr(4,h,h.return);break;case 1:Pt(h,h.return);var C=h.stateNode;if(typeof C.componentWillUnmount=="function"){r=h,t=h.return;try{n=r,C.props=n.memoizedProps,C.state=n.memoizedState,C.componentWillUnmount()}catch(L){ae(r,t,L)}}break;case 5:Pt(h,h.return);break;case 22:if(h.memoizedState!==null){iu(y);continue}}S!==null?(S.return=h,k=S):iu(y)}v=v.sibling}e:for(v=null,y=e;;){if(y.tag===5){if(v===null){v=y;try{l=y.stateNode,p?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=y.stateNode,a=y.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Ao("display",o))}catch(L){ae(e,e.return,L)}}}else if(y.tag===6){if(v===null)try{y.stateNode.nodeValue=p?"":y.memoizedProps}catch(L){ae(e,e.return,L)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;v===y&&(v=null),y=y.return}v===y&&(v=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:on(n,e),hn(e),r&4&&nu(e);break;case 21:break;default:on(n,e),hn(e)}}function hn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Ja(t)){var r=t;break e}t=t.return}throw Error(m(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Mt(l,""),r.flags&=-33);var i=Za(e);ro(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Za(e);to(e,s,o);break;default:throw Error(m(161))}}catch(a){ae(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function fd(e,n,t){k=e,ru(e)}function ru(e,n,t){for(var r=(e.mode&1)!==0;k!==null;){var l=k,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||ul;if(!o){var s=l.alternate,a=s!==null&&s.memoizedState!==null||Ce;s=ul;var p=Ce;if(ul=o,(Ce=a)&&!p)for(k=l;k!==null;)o=k,a=o.child,o.tag===22&&o.memoizedState!==null?ou(l):a!==null?(a.return=o,k=a):ou(l);for(;i!==null;)k=i,ru(i),i=i.sibling;k=l,ul=s,Ce=p}lu(e)}else(l.subtreeFlags&8772)!==0&&i!==null?(i.return=l,k=i):lu(e)}}function lu(e){for(;k!==null;){var n=k;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Ce||cl(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Ce)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:rn(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&ia(n,i,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}ia(n,o,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var p=n.alternate;if(p!==null){var v=p.memoizedState;if(v!==null){var y=v.dehydrated;y!==null&&Vt(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(m(163))}Ce||n.flags&512&&no(n)}catch(h){ae(n,n.return,h)}}if(n===e){k=null;break}if(t=n.sibling,t!==null){t.return=n.return,k=t;break}k=n.return}}function iu(e){for(;k!==null;){var n=k;if(n===e){k=null;break}var t=n.sibling;if(t!==null){t.return=n.return,k=t;break}k=n.return}}function ou(e){for(;k!==null;){var n=k;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{cl(4,n)}catch(a){ae(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(a){ae(n,l,a)}}var i=n.return;try{no(n)}catch(a){ae(n,i,a)}break;case 5:var o=n.return;try{no(n)}catch(a){ae(n,o,a)}}}catch(a){ae(n,n.return,a)}if(n===e){k=null;break}var s=n.sibling;if(s!==null){s.return=n.return,k=s;break}k=n.return}}var pd=Math.ceil,dl=we.ReactCurrentDispatcher,lo=we.ReactCurrentOwner,Ge=we.ReactCurrentBatchConfig,A=0,ge=null,de=null,xe=0,Ve=0,Tt=On(0),me=0,fr=null,nt=0,fl=0,io=0,pr=null,be=null,oo=0,It=1/0,Ln=null,pl=!1,so=null,Bn=null,ml=!1,jn=null,hl=0,mr=0,ao=null,gl=-1,vl=0;function Pe(){return(A&6)!==0?ue():gl!==-1?gl:gl=ue()}function Wn(e){return(e.mode&1)===0?1:(A&2)!==0&&xe!==0?xe&-xe:Kc.transition!==null?(vl===0&&(vl=Zo()),vl):(e=Q,e!==0||(e=window.event,e=e===void 0?16:as(e.type)),e)}function sn(e,n,t,r){if(50<mr)throw mr=0,ao=null,Error(m(185));Ut(e,t,r),((A&2)===0||e!==ge)&&(e===ge&&((A&2)===0&&(fl|=t),me===4&&Vn(e,xe)),Fe(e,r),t===1&&A===0&&(n.mode&1)===0&&(It=ue()+500,$r&&Fn()))}function Fe(e,n){var t=e.callbackNode;Ku(e,n);var r=_r(e,e===ge?xe:0);if(r===0)t!==null&&Ko(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Ko(t),n===1)e.tag===0?Gc(au.bind(null,e)):Xs(au.bind(null,e)),$c(function(){(A&6)===0&&Fn()}),t=null;else{switch(es(r)){case 1:t=jl;break;case 4:t=qo;break;case 16:t=kr;break;case 536870912:t=Jo;break;default:t=kr}t=gu(t,su.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function su(e,n){if(gl=-1,vl=0,(A&6)!==0)throw Error(m(327));var t=e.callbackNode;if(Nt()&&e.callbackNode!==t)return null;var r=_r(e,e===ge?xe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||n)n=yl(e,r);else{n=r;var l=A;A|=2;var i=cu();(ge!==e||xe!==n)&&(Ln=null,It=ue()+500,rt(e,n));do try{gd();break}catch(s){uu(e,s)}while(!0);_i(),dl.current=i,A=l,de!==null?n=0:(ge=null,xe=0,n=me)}if(n!==0){if(n===2&&(l=Wl(e),l!==0&&(r=l,n=uo(e,l))),n===1)throw t=fr,rt(e,0),Vn(e,r),Fe(e,ue()),t;if(n===6)Vn(e,r);else{if(l=e.current.alternate,(r&30)===0&&!md(l)&&(n=yl(e,r),n===2&&(i=Wl(e),i!==0&&(r=i,n=uo(e,i))),n===1))throw t=fr,rt(e,0),Vn(e,r),Fe(e,ue()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(m(345));case 2:lt(e,be,Ln);break;case 3:if(Vn(e,r),(r&130023424)===r&&(n=oo+500-ue(),10<n)){if(_r(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Pe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=hi(lt.bind(null,e,be,Ln),n);break}lt(e,be,Ln);break;case 4:if(Vn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var o=31-en(r);i=1<<o,o=n[o],o>l&&(l=o),r&=~i}if(r=l,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pd(r/1960))-r,10<r){e.timeoutHandle=hi(lt.bind(null,e,be,Ln),r);break}lt(e,be,Ln);break;case 5:lt(e,be,Ln);break;default:throw Error(m(329))}}}return Fe(e,ue()),e.callbackNode===t?su.bind(null,e):null}function uo(e,n){var t=pr;return e.current.memoizedState.isDehydrated&&(rt(e,n).flags|=256),e=yl(e,n),e!==2&&(n=be,be=t,n!==null&&co(n)),e}function co(e){be===null?be=e:be.push.apply(be,e)}function md(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],i=l.getSnapshot;l=l.value;try{if(!nn(i(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Vn(e,n){for(n&=~io,n&=~fl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-en(n),r=1<<t;e[t]=-1,n&=~r}}function au(e){if((A&6)!==0)throw Error(m(327));Nt();var n=_r(e,0);if((n&1)===0)return Fe(e,ue()),null;var t=yl(e,n);if(e.tag!==0&&t===2){var r=Wl(e);r!==0&&(n=r,t=uo(e,r))}if(t===1)throw t=fr,rt(e,0),Vn(e,n),Fe(e,ue()),t;if(t===6)throw Error(m(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,lt(e,be,Ln),Fe(e,ue()),null}function fo(e,n){var t=A;A|=1;try{return e(n)}finally{A=t,A===0&&(It=ue()+500,$r&&Fn())}}function tt(e){jn!==null&&jn.tag===0&&(A&6)===0&&Nt();var n=A;A|=1;var t=Ge.transition,r=Q;try{if(Ge.transition=null,Q=1,e)return e()}finally{Q=r,Ge.transition=t,A=n,(A&6)===0&&Fn()}}function po(){Ve=Tt.current,ee(Tt)}function rt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Hc(t)),de!==null)for(t=de.return;t!==null;){var r=t;switch(Si(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vr();break;case 3:Lt(),ee(Me),ee(Se),Oi();break;case 5:Mi(r);break;case 4:Lt();break;case 13:ee(ie);break;case 19:ee(ie);break;case 10:Pi(r.type._context);break;case 22:case 23:po()}t=t.return}if(ge=e,de=e=Hn(e.current,null),xe=Ve=n,me=0,fr=null,io=fl=nt=0,be=pr=null,Jn!==null){for(n=0;n<Jn.length;n++)if(t=Jn[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,i=t.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}t.pending=r}Jn=null}return e}function uu(e,n){do{var t=de;try{if(_i(),nl.current=il,tl){for(var r=oe.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}tl=!1}if(et=0,he=pe=oe=null,or=!1,sr=0,lo.current=null,t===null||t.return===null){me=1,fr=n,de=null;break}e:{var i=e,o=t.return,s=t,a=n;if(n=xe,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var p=a,v=s,y=v.tag;if((v.mode&1)===0&&(y===0||y===11||y===15)){var h=v.alternate;h?(v.updateQueue=h.updateQueue,v.memoizedState=h.memoizedState,v.lanes=h.lanes):(v.updateQueue=null,v.memoizedState=null)}var S=Oa(o);if(S!==null){S.flags&=-257,ba(S,o,s,i,n),S.mode&1&&za(i,p,n),n=S,a=p;var C=n.updateQueue;if(C===null){var L=new Set;L.add(a),n.updateQueue=L}else C.add(a);break e}else{if((n&1)===0){za(i,p,n),mo();break e}a=Error(m(426))}}else if(re&&s.mode&1){var ce=Oa(o);if(ce!==null){(ce.flags&65536)===0&&(ce.flags|=256),ba(ce,o,s,i,n),Ci(_t(a,s));break e}}i=a=_t(a,s),me!==4&&(me=2),pr===null?pr=[i]:pr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var d=Ra(i,a,n);la(i,d);break e;case 1:s=a;var u=i.type,f=i.stateNode;if((i.flags&128)===0&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Bn===null||!Bn.has(f)))){i.flags|=65536,n&=-n,i.lanes|=n;var x=Ma(i,s,n);la(i,x);break e}}i=i.return}while(i!==null)}fu(t)}catch(_){n=_,de===t&&t!==null&&(de=t=t.return);continue}break}while(!0)}function cu(){var e=dl.current;return dl.current=il,e===null?il:e}function mo(){(me===0||me===3||me===2)&&(me=4),ge===null||(nt&268435455)===0&&(fl&268435455)===0||Vn(ge,xe)}function yl(e,n){var t=A;A|=2;var r=cu();(ge!==e||xe!==n)&&(Ln=null,rt(e,n));do try{hd();break}catch(l){uu(e,l)}while(!0);if(_i(),A=t,dl.current=r,de!==null)throw Error(m(261));return ge=null,xe=0,me}function hd(){for(;de!==null;)du(de)}function gd(){for(;de!==null&&!ju();)du(de)}function du(e){var n=hu(e.alternate,e,Ve);e.memoizedProps=e.pendingProps,n===null?fu(e):de=n,lo.current=null}function fu(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=ad(t,n,Ve),t!==null){de=t;return}}else{if(t=ud(t,n),t!==null){t.flags&=32767,de=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,de=null;return}}if(n=n.sibling,n!==null){de=n;return}de=n=e}while(n!==null);me===0&&(me=5)}function lt(e,n,t){var r=Q,l=Ge.transition;try{Ge.transition=null,Q=1,vd(e,n,t,r)}finally{Ge.transition=l,Q=r}return null}function vd(e,n,t,r){do Nt();while(jn!==null);if((A&6)!==0)throw Error(m(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(m(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(qu(e,i),e===ge&&(de=ge=null,xe=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||ml||(ml=!0,gu(kr,function(){return Nt(),null})),i=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||i){i=Ge.transition,Ge.transition=null;var o=Q;Q=1;var s=A;A|=4,lo.current=null,dd(e,t),tu(t,e),Ac(pi),Ir=!!fi,pi=fi=null,e.current=t,fd(t),Wu(),A=s,Q=o,Ge.transition=i}else e.current=t;if(ml&&(ml=!1,jn=e,hl=l),i=e.pendingLanes,i===0&&(Bn=null),$u(t.stateNode),Fe(e,ue()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(pl)throw pl=!1,e=so,so=null,e;return(hl&1)!==0&&e.tag!==0&&Nt(),i=e.pendingLanes,(i&1)!==0?e===ao?mr++:(mr=0,ao=e):mr=0,Fn(),null}function Nt(){if(jn!==null){var e=es(hl),n=Ge.transition,t=Q;try{if(Ge.transition=null,Q=16>e?16:e,jn===null)var r=!1;else{if(e=jn,jn=null,hl=0,(A&6)!==0)throw Error(m(331));var l=A;for(A|=4,k=e.current;k!==null;){var i=k,o=i.child;if((k.flags&16)!==0){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var p=s[a];for(k=p;k!==null;){var v=k;switch(v.tag){case 0:case 11:case 15:dr(8,v,i)}var y=v.child;if(y!==null)y.return=v,k=y;else for(;k!==null;){v=k;var h=v.sibling,S=v.return;if(qa(v),v===p){k=null;break}if(h!==null){h.return=S,k=h;break}k=S}}}var C=i.alternate;if(C!==null){var L=C.child;if(L!==null){C.child=null;do{var ce=L.sibling;L.sibling=null,L=ce}while(L!==null)}}k=i}}if((i.subtreeFlags&2064)!==0&&o!==null)o.return=i,k=o;else e:for(;k!==null;){if(i=k,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:dr(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,k=d;break e}k=i.return}}var u=e.current;for(k=u;k!==null;){o=k;var f=o.child;if((o.subtreeFlags&2064)!==0&&f!==null)f.return=o,k=f;else e:for(o=u;k!==null;){if(s=k,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:cl(9,s)}}catch(_){ae(s,s.return,_)}if(s===o){k=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,k=x;break e}k=s.return}}if(A=l,Fn(),dn&&typeof dn.onPostCommitFiberRoot=="function")try{dn.onPostCommitFiberRoot(Er,e)}catch{}r=!0}return r}finally{Q=t,Ge.transition=n}}return!1}function pu(e,n,t){n=_t(t,n),n=Ra(e,n,1),e=Un(e,n,1),n=Pe(),e!==null&&(Ut(e,1,n),Fe(e,n))}function ae(e,n,t){if(e.tag===3)pu(e,e,t);else for(;n!==null;){if(n.tag===3){pu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Bn===null||!Bn.has(r))){e=_t(t,e),e=Ma(n,e,1),n=Un(n,e,1),e=Pe(),n!==null&&(Ut(n,1,e),Fe(n,e));break}}n=n.return}}function yd(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Pe(),e.pingedLanes|=e.suspendedLanes&t,ge===e&&(xe&t)===t&&(me===4||me===3&&(xe&130023424)===xe&&500>ue()-oo?rt(e,0):io|=t),Fe(e,n)}function mu(e,n){n===0&&((e.mode&1)===0?n=1:(n=Lr,Lr<<=1,(Lr&130023424)===0&&(Lr=4194304)));var t=Pe();e=kn(e,n),e!==null&&(Ut(e,n,t),Fe(e,t))}function xd(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),mu(e,t)}function wd(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(m(314))}r!==null&&r.delete(n),mu(e,t)}var hu;hu=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Me.current)Oe=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return Oe=!1,sd(e,n,t);Oe=(e.flags&131072)!==0}else Oe=!1,re&&(n.flags&1048576)!==0&&Ys(n,Xr,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;al(e,n),e=n.pendingProps;var l=yt(n,Se.current);Ct(n,t),l=Ai(null,n,r,e,l,t);var i=Ui();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ze(r)?(i=!0,Hr(n)):i=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ni(n),l.updater=ol,n.stateNode=l,l._reactInternals=n,Hi(n,r,e,t),n=Yi(null,n,r,!0,i,t)):(n.tag=0,re&&i&&wi(n),_e(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(al(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=kd(r),e=rn(r,e),l){case 0:n=Xi(null,n,r,e,t);break e;case 1:n=ja(null,n,r,e,t);break e;case 11:n=Fa(null,n,r,e,t);break e;case 14:n=Aa(null,n,r,rn(r.type,e),t);break e}throw Error(m(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:rn(r,l),Xi(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:rn(r,l),ja(e,n,r,l,t);case 3:e:{if(Wa(n),e===null)throw Error(m(387));r=n.pendingProps,i=n.memoizedState,l=i.element,ra(e,n),Zr(n,r,null,t);var o=n.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){l=_t(Error(m(423)),n),n=Va(e,n,r,t,l);break e}else if(r!==l){l=_t(Error(m(424)),n),n=Va(e,n,r,t,l);break e}else for(We=zn(n.stateNode.containerInfo.firstChild),je=n,re=!0,tn=null,t=na(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(St(),r===l){n=Cn(e,n,t);break e}_e(e,n,r,t)}n=n.child}return n;case 5:return oa(n),e===null&&Ei(n),r=n.type,l=n.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,mi(r,l)?o=null:i!==null&&mi(r,i)&&(n.flags|=32),Ba(e,n),_e(e,n,o,t),n.child;case 6:return e===null&&Ei(n),null;case 13:return Ha(e,n,t);case 4:return Ri(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=kt(n,null,r,t):_e(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:rn(r,l),Fa(e,n,r,l,t);case 7:return _e(e,n,n.pendingProps,t),n.child;case 8:return _e(e,n,n.pendingProps.children,t),n.child;case 12:return _e(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,i=n.memoizedProps,o=l.value,q(Kr,r._currentValue),r._currentValue=o,i!==null)if(nn(i.value,o)){if(i.children===l.children&&!Me.current){n=Cn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=En(-1,t&-t),a.tag=2;var p=i.updateQueue;if(p!==null){p=p.shared;var v=p.pending;v===null?a.next=a:(a.next=v.next,v.next=a),p.pending=a}}i.lanes|=t,a=i.alternate,a!==null&&(a.lanes|=t),Ti(i.return,t,n),s.lanes|=t;break}a=a.next}}else if(i.tag===10)o=i.type===n.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(m(341));o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),Ti(o,t,n),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===n){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}_e(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,Ct(n,t),l=Xe(l),r=r(l),n.flags|=1,_e(e,n,r,t),n.child;case 14:return r=n.type,l=rn(r,n.pendingProps),l=rn(r.type,l),Aa(e,n,r,l,t);case 15:return Ua(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:rn(r,l),al(e,n),n.tag=1,ze(r)?(e=!0,Hr(n)):e=!1,Ct(n,t),Ia(n,r,l),Hi(n,r,l,t),Yi(null,n,r,!0,e,t);case 19:return Qa(e,n,t);case 22:return Da(e,n,t)}throw Error(m(156,n.tag))};function gu(e,n){return Go(e,n)}function Sd(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ke(e,n,t,r){return new Sd(e,n,t,r)}function ho(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kd(e){if(typeof e=="function")return ho(e)?1:0;if(e!=null){if(e=e.$$typeof,e===un)return 11;if(e===cn)return 14}return 2}function Hn(e,n){var t=e.alternate;return t===null?(t=Ke(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function xl(e,n,t,r,l,i){var o=2;if(r=e,typeof e=="function")ho(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ne:return it(t.children,l,i,n);case He:o=8,l|=8;break;case _n:return e=Ke(12,t,n,l|2),e.elementType=_n,e.lanes=i,e;case Ue:return e=Ke(13,t,n,l),e.elementType=Ue,e.lanes=i,e;case Ze:return e=Ke(19,t,n,l),e.elementType=Ze,e.lanes=i,e;case se:return wl(t,l,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vn:o=10;break e;case Qn:o=9;break e;case un:o=11;break e;case cn:o=14;break e;case Re:o=16,r=null;break e}throw Error(m(130,e==null?e:typeof e,""))}return n=Ke(o,t,n,l),n.elementType=e,n.type=r,n.lanes=i,n}function it(e,n,t,r){return e=Ke(7,e,r,n),e.lanes=t,e}function wl(e,n,t,r){return e=Ke(22,e,r,n),e.elementType=se,e.lanes=t,e.stateNode={isHidden:!1},e}function go(e,n,t){return e=Ke(6,e,null,n),e.lanes=t,e}function vo(e,n,t){return n=Ke(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Ed(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vl(0),this.expirationTimes=Vl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function yo(e,n,t,r,l,i,o,s,a){return e=new Ed(e,n,t,s,a),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Ke(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ni(i),e}function Cd(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Le,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function vu(e){if(!e)return bn;e=e._reactInternals;e:{if(Xn(e)!==e||e.tag!==1)throw Error(m(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ze(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(m(171))}if(e.tag===1){var t=e.type;if(ze(t))return $s(e,t,n)}return n}function yu(e,n,t,r,l,i,o,s,a){return e=yo(t,r,!0,e,l,i,o,s,a),e.context=vu(null),t=e.current,r=Pe(),l=Wn(t),i=En(r,l),i.callback=n??null,Un(t,i,l),e.current.lanes=l,Ut(e,l,r),Fe(e,r),e}function Sl(e,n,t,r){var l=n.current,i=Pe(),o=Wn(l);return t=vu(t),n.context===null?n.context=t:n.pendingContext=t,n=En(i,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Un(l,n,o),e!==null&&(sn(e,l,o,i),Jr(e,l,o)),o}function kl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function xo(e,n){xu(e,n),(e=e.alternate)&&xu(e,n)}function Ld(){return null}var wu=typeof reportError=="function"?reportError:function(e){console.error(e)};function wo(e){this._internalRoot=e}El.prototype.render=wo.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(m(409));Sl(e,n,null,null)},El.prototype.unmount=wo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;tt(function(){Sl(null,e,null,null)}),n[yn]=null}};function El(e){this._internalRoot=e}El.prototype.unstable_scheduleHydration=function(e){if(e){var n=rs();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Nn.length&&n!==0&&n<Nn[t].priority;t++);Nn.splice(t,0,e),t===0&&os(e)}};function So(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Cl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Su(){}function _d(e,n,t,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var p=kl(o);i.call(p)}}var o=yu(n,r,e,0,null,!1,!1,"",Su);return e._reactRootContainer=o,e[yn]=o.current,Jt(e.nodeType===8?e.parentNode:e),tt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var p=kl(a);s.call(p)}}var a=yo(e,0,!1,null,null,!1,!1,"",Su);return e._reactRootContainer=a,e[yn]=a.current,Jt(e.nodeType===8?e.parentNode:e),tt(function(){Sl(n,a,t,r)}),a}function Ll(e,n,t,r,l){var i=t._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var s=l;l=function(){var a=kl(o);s.call(a)}}Sl(n,o,e,l)}else o=_d(t,n,e,l,r);return kl(o)}ns=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=At(n.pendingLanes);t!==0&&(Hl(n,t|1),Fe(n,ue()),(A&6)===0&&(It=ue()+500,Fn()))}break;case 13:tt(function(){var r=kn(e,1);if(r!==null){var l=Pe();sn(r,e,1,l)}}),xo(e,1)}},$l=function(e){if(e.tag===13){var n=kn(e,134217728);if(n!==null){var t=Pe();sn(n,e,134217728,t)}xo(e,134217728)}},ts=function(e){if(e.tag===13){var n=Wn(e),t=kn(e,n);if(t!==null){var r=Pe();sn(t,e,n,r)}xo(e,n)}},rs=function(){return Q},ls=function(e,n){var t=Q;try{return Q=e,n()}finally{Q=t}},Al=function(e,n,t){switch(n){case"input":if(Il(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=Wr(r);if(!l)throw Error(m(90));To(r),Il(r,l)}}}break;case"textarea":zo(e,t);break;case"select":n=t.value,n!=null&&ot(e,!!t.multiple,n,!1)}},Wo=fo,Vo=tt;var Pd={usingClientEntryPoint:!1,Events:[nr,gt,Wr,Bo,jo,fo]},hr={findFiberByHostInstance:Yn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Td={bundleType:hr.bundleType,version:hr.version,rendererPackageName:hr.rendererPackageName,rendererConfig:hr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:we.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Xo(e),e===null?null:e.stateNode},findFiberByHostInstance:hr.findFiberByHostInstance||Ld,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_l.isDisabled&&_l.supportsFiber)try{Er=_l.inject(Td),dn=_l}catch{}}return Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pd,Ae.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!So(n))throw Error(m(200));return Cd(e,n,null,t)},Ae.createRoot=function(e,n){if(!So(e))throw Error(m(299));var t=!1,r="",l=wu;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=yo(e,1,!1,null,null,t,!1,r,l),e[yn]=n.current,Jt(e.nodeType===8?e.parentNode:e),new wo(n)},Ae.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(m(188)):(e=Object.keys(e).join(","),Error(m(268,e)));return e=Xo(n),e=e===null?null:e.stateNode,e},Ae.flushSync=function(e){return tt(e)},Ae.hydrate=function(e,n,t){if(!Cl(n))throw Error(m(200));return Ll(null,e,n,!0,t)},Ae.hydrateRoot=function(e,n,t){if(!So(e))throw Error(m(405));var r=t!=null&&t.hydratedSources||null,l=!1,i="",o=wu;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=yu(n,null,e,1,t??null,l,!1,i,o),e[yn]=n.current,Jt(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new El(n)},Ae.render=function(e,n,t){if(!Cl(n))throw Error(m(200));return Ll(null,e,n,!1,t)},Ae.unmountComponentAtNode=function(e){if(!Cl(e))throw Error(m(40));return e._reactRootContainer?(tt(function(){Ll(null,null,e,!1,function(){e._reactRootContainer=null,e[yn]=null})}),!0):!1},Ae.unstable_batchedUpdates=fo,Ae.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Cl(t))throw Error(m(200));if(e==null||e._reactInternals===void 0)throw Error(m(38));return Ll(e,n,t,!1,r)},Ae.version="18.3.1-next-f1338f8080-20240426",Ae}var Iu;function Fd(){if(Iu)return Co.exports;Iu=1;function R(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(R)}catch(W){console.error(W)}}return R(),Co.exports=bd(),Co.exports}var Nu;function Ad(){if(Nu)return Pl;Nu=1;var R=Fd();return Pl.createRoot=R.createRoot,Pl.hydrateRoot=R.hydrateRoot,Pl}var Ud=Ad();const Dd="modulepreload",Bd=function(R){return"/"+R},Ru={},Mu=function(W,m,fe){let b=Promise.resolve();if(m&&m.length>0){let J=function(G){return Promise.all(G.map(le=>Promise.resolve(le).then(H=>({status:"fulfilled",value:H}),H=>({status:"rejected",reason:H}))))};document.getElementsByTagName("link");const U=document.querySelector("meta[property=csp-nonce]"),V=(U==null?void 0:U.nonce)||(U==null?void 0:U.getAttribute("nonce"));b=J(m.map(G=>{if(G=Bd(G),G in Ru)return;Ru[G]=!0;const le=G.endsWith(".css"),H=le?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${G}"]${H}`))return;const F=document.createElement("link");if(F.rel=le?"stylesheet":Dd,le||(F.as="script"),F.crossOrigin="",F.href=G,V&&F.setAttribute("nonce",V),document.head.appendChild(F),le)return new Promise((Te,Ie)=>{F.addEventListener("load",Te),F.addEventListener("error",()=>Ie(new Error(`Unable to preload CSS for ${G}`)))})}))}function X(J){const U=new Event("vite:preloadError",{cancelable:!0});if(U.payload=J,window.dispatchEvent(U),!U.defaultPrevented)throw J}return b.then(J=>{for(const U of J||[])U.status==="rejected"&&X(U.reason);return W().catch(X)})};var jd=Po();const Wd=`\r
\r
  <!-- ═══ AMBIENT BACKGROUND ═══ -->\r
  <canvas id="particleCanvas" style="position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;"\r
    aria-hidden="true"></canvas>\r
  <div class="orb orb-1" aria-hidden="true"></div>\r
  <div class="orb orb-2" aria-hidden="true"></div>\r
  <div class="orb orb-3" aria-hidden="true"></div>\r
\r
  <!-- ═══ NAVBAR ═══ -->\r
  <nav id="navbar" class="nav-bg fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-all duration-300">\r
    <div class="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">\r
      <a href="#" class="flex items-center gap-2.5 group flex-shrink-0" aria-label="SiteSonar Home">\r
        <div class="relative w-8 h-8">\r
          <div class="absolute inset-0 rounded-full border-2 neon-border opacity-60"></div>\r
          <div class="absolute inset-1.5 rounded-full border neon-border opacity-30"></div>\r
          <div class="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"\r
            style="background:radial-gradient(circle,rgba(0,212,255,.2),transparent 70%)"></div>\r
          <div\r
            class="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full bg-sonar-blue -translate-x-1/2 -translate-y-1/2 neon-glow">\r
          </div>\r
        </div>\r
        <span class="font-display font-800 text-xl tracking-tight neon-text">Site<span\r
            class="dark:text-white text-gray-800">Sonar</span></span>\r
      </a>\r
      <div class="hidden md:flex items-center gap-8">\r
        <a href="#services" class="text-sm font-medium muted hover:neon-text transition-colors duration-200"\r
          data-en="About Me" data-bg="Кой съм аз">About Me</a>\r
        <a href="#pricing" class="text-sm font-medium muted hover:neon-text transition-colors duration-200"\r
          data-en="Pricing" data-bg="Цени">Pricing</a>\r
        <a href="#contact" class="text-sm font-medium muted hover:neon-text transition-colors duration-200"\r
          data-en="Contact" data-bg="Пиши ми">Contact</a>\r
      </div>\r
      <div class="flex items-center gap-3">\r
        <button id="langToggle" onclick="toggleLang()"\r
          class="font-display text-xs font-700 px-3 py-1.5 rounded-full tag-bg transition-all duration-200 hover:scale-105 active:scale-95 tracking-widest">\r
          <span id="langLabel">EN</span>\r
        </button>\r
        <button onclick="toggleTheme()" aria-label="Toggle theme" class="flex items-center gap-2 group">\r
          <span class="text-base transition-all duration-300 dark:text-yellow-300 text-blue-500">\r
            <i id="themeIcon" class="fas fa-moon"></i>\r
          </span>\r
          <div class="toggle-track">\r
            <div class="toggle-thumb"></div>\r
          </div>\r
        </button>\r
        <button id="mobileMenuBtn" onclick="toggleMobileMenu()" class="md:hidden p-2 rounded-lg neon-text"\r
          aria-label="Toggle menu">\r
          <i class="fas fa-bars text-lg"></i>\r
        </button>\r
      </div>\r
    </div>\r
    <div id="mobileMenu" class="hidden md:hidden px-5 pb-4 flex flex-col gap-3 border-t divider">\r
      <a href="#services" class="py-2 text-sm font-medium muted" data-en="About Me" data-bg="Кой съм аз">About Me</a>\r
      <a href="#pricing" class="py-2 text-sm font-medium muted" data-en="Pricing" data-bg="Цени">Pricing</a>\r
      <a href="#contact" class="py-2 text-sm font-medium muted" data-en="Contact" data-bg="Пиши ми">Contact</a>\r
    </div>\r
  </nav>\r
\r
  <!-- ═══ HERO ═══ -->\r
  <section id="hero"\r
    class="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-5 overflow-hidden">\r
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">\r
      <!-- Radar — single positioning anchor -->\r
      <div class="relative" style="width:0;height:0;">\r
        <div class="radar-ring"></div>\r
        <div class="radar-ring"></div>\r
        <div class="radar-ring"></div>\r
        <div class="sonar-sweep"></div>\r
      </div>\r
      <!-- Glow orb -->\r
      <div class="absolute w-96 h-96 rounded-full opacity-[0.07] dark:opacity-[0.12]"\r
        style="background:radial-gradient(circle,#00D4FF,transparent 65%);"></div>\r
    </div>\r
\r
    <div class="relative z-10 max-w-4xl mx-auto text-center">\r
      <!-- Tag -->\r
      <div\r
        class="inline-flex items-center gap-2 tag-bg rounded-full px-4 py-1.5 text-xs font-600 tracking-widest uppercase mb-6 font-display animate-pulse">\r
        <span class="w-1.5 h-1.5 rounded-full bg-current"></span>\r
        <span id="heroTagline">⚡ Fast Websites. Fair Prices.</span>\r
      </div>\r
      <!-- Headline -->\r
      <h1 class="font-display font-800 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.08] tracking-tight mb-6">\r
        <span id="heroLineOne">Launch Your Website</span><br />\r
        <span id="heroLineTwo" class="gradient-text">In Days.</span>\r
      </h1>\r
      <!-- Sub -->\r
      <p class="text-base sm:text-lg lg:text-xl muted max-w-2xl mx-auto leading-relaxed mb-10">\r
        <span id="heroSubcopy">Modern landing pages and business websites with strong UI/UX, clean performance, and\r
          quick turnaround. Ready in 3-10 days, from €200.</span>\r
      </p>\r
      <!-- Audit tool -->\r
      <div id="audit" class="glass rounded-2xl p-5 sm:p-6 max-w-2xl mx-auto neon-glow glow-pulse">\r
        <p class="text-xs uppercase tracking-widest section-label font-display font-700 mb-3">\r
          <span data-en="Free Instant Website Audit" data-bg="Безплатна бърза проверка на сайта ти">Free Instant Website\r
            Audit</span>\r
        </p>\r
        <div class="flex flex-col sm:flex-row gap-3 min-w-0">\r
          <input id="urlInput" type="url" placeholder="https://yourwebsite.com"\r
            data-placeholder-en="https://yourwebsite.com" data-placeholder-bg="https://твоятсайт.com"\r
            class="url-input flex-1 min-w-0 bg-transparent border neon-border rounded-xl px-4 py-3.5 text-sm transition-all" />\r
          <button id="auditButton" onclick="runAudit()"\r
            class="cta-primary rounded-xl px-6 py-3.5 text-sm font-display font-700 tracking-wide transition-all duration-200 hover:scale-[1.03] active:scale-[.98] flex items-center gap-2 justify-center flex-shrink-0">\r
            <i class="fas fa-satellite-dish text-sm"></i>\r
            <span id="auditButtonLabel" data-en="Run Free Audit" data-bg="Провери безплатно">Run Free Audit</span>\r
          </button>\r
        </div>\r
        <p class="text-xs muted mt-2.5 text-left">\r
          <i class="fas fa-lock text-[10px] mr-1"></i>\r
          <span data-en="No account needed. Results in seconds."\r
            data-bg="Без регистрация. Резултатът идва за секунди.">No account needed. Results in seconds.</span>\r
        </p>\r
      </div>\r
      <!-- scroll indicator removed -->\r
    </div>\r
  </section>\r
\r
  <!-- ═══ AUDIT RESULTS ═══ -->\r
  <section id="auditPanel" class="hidden px-5 pb-24">\r
    <div class="max-w-3xl mx-auto">\r
      <!-- Scanning -->\r
      <div id="scanningState" class="glass rounded-2xl overflow-hidden p-8 text-center">\r
        <div\r
          class="relative w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden card-bg flex items-center justify-center">\r
          <div class="scan-line"></div>\r
          <div class="neon-text font-display font-700 text-2xl z-10">SS</div>\r
        </div>\r
        <p class="font-display font-700 text-xl neon-text mb-2" data-en="Scanning your website..."\r
          data-bg="Проверяваме сайта ти...">Scanning your website...</p>\r
        <p class="muted text-sm" data-en="Checking speed, mobile UX, SEO, and security signals."\r
          data-bg="Гледаме скоростта, мобилното усещане, SEO-то и сигурността.">Checking speed, mobile UX, SEO, and\r
          security signals.</p>\r
        <div class="flex justify-center gap-1.5 mt-5">\r
          <span class="w-2 h-2 rounded-full bg-sonar-blue animate-bounce" style="animation-delay:0s"></span>\r
          <span class="w-2 h-2 rounded-full bg-sonar-blue animate-bounce" style="animation-delay:.15s"></span>\r
          <span class="w-2 h-2 rounded-full bg-sonar-blue animate-bounce" style="animation-delay:.3s"></span>\r
        </div>\r
      </div>\r
\r
      <!-- Results -->\r
      <div id="resultsState" class="hidden">\r
        <div class="glass rounded-2xl p-6 sm:p-8">\r
          <div class="flex items-start justify-between gap-4 mb-6">\r
            <div>\r
              <p class="text-xs uppercase tracking-widest section-label font-display font-700 mb-1">\r
                <span data-en="Audit Report" data-bg="Одит на сайта">Audit Report</span>\r
              </p>\r
              <h2 id="resultsHeadline" class="font-display font-800 text-2xl sm:text-3xl dark:text-white text-gray-900">\r
                Your Website Needs Help</h2>\r
              <p id="auditUrl" class="muted text-sm mt-1"></p>\r
              <p id="auditMeta" class="muted text-xs mt-2"></p>\r
            </div>\r
            <div class="flex-shrink-0 text-right">\r
              <div id="overallScore" class="font-display font-800 text-4xl text-red-400">42</div>\r
              <p class="text-xs muted" data-en="Overall Score" data-bg="Общ резултат">Overall Score</p>\r
            </div>\r
          </div>\r
\r
          <!-- Rings -->\r
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">\r
            <div class="card-bg rounded-xl p-4 text-center">\r
              <div class="relative w-20 h-20 mx-auto mb-2">\r
                <svg viewBox="0 0 36 36" class="w-20 h-20 -rotate-90">\r
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(255,255,255,.06)" stroke-width="2.5" />\r
                  <circle id="ring-speed" cx="18" cy="18" r="15.9" fill="none" stroke="#EF4444" stroke-width="2.5"\r
                    stroke-linecap="round" stroke-dasharray="100" stroke-dashoffset="100" class="circle-ring" />\r
                </svg>\r
                <span id="score-speed"\r
                  class="absolute inset-0 flex items-center justify-center font-display font-700 text-base text-red-400">32</span>\r
              </div>\r
              <p class="text-xs font-600 dark:text-white text-gray-800" data-en="Load Speed" data-bg="Зареждане">Load\r
                Speed</p>\r
              <p id="status-speed" class="text-[10px] muted">Poor</p>\r
            </div>\r
            <div class="card-bg rounded-xl p-4 text-center">\r
              <div class="relative w-20 h-20 mx-auto mb-2">\r
                <svg viewBox="0 0 36 36" class="w-20 h-20 -rotate-90">\r
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(255,255,255,.06)" stroke-width="2.5" />\r
                  <circle id="ring-mobile" cx="18" cy="18" r="15.9" fill="none" stroke="#F59E0B" stroke-width="2.5"\r
                    stroke-linecap="round" stroke-dasharray="100" stroke-dashoffset="100" class="circle-ring" />\r
                </svg>\r
                <span id="score-mobile"\r
                  class="absolute inset-0 flex items-center justify-center font-display font-700 text-base text-yellow-400">58</span>\r
              </div>\r
              <p class="text-xs font-600 dark:text-white text-gray-800" data-en="Mobile UX" data-bg="Мобилен UX">Mobile\r
                UX</p>\r
              <p id="status-mobile" class="text-[10px] muted">Needs Work</p>\r
            </div>\r
            <div class="card-bg rounded-xl p-4 text-center">\r
              <div class="relative w-20 h-20 mx-auto mb-2">\r
                <svg viewBox="0 0 36 36" class="w-20 h-20 -rotate-90">\r
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(255,255,255,.06)" stroke-width="2.5" />\r
                  <circle id="ring-seo" cx="18" cy="18" r="15.9" fill="none" stroke="#F59E0B" stroke-width="2.5"\r
                    stroke-linecap="round" stroke-dasharray="100" stroke-dashoffset="100" class="circle-ring" />\r
                </svg>\r
                <span id="score-seo"\r
                  class="absolute inset-0 flex items-center justify-center font-display font-700 text-base text-yellow-400">61</span>\r
              </div>\r
              <p class="text-xs font-600 dark:text-white text-gray-800">SEO</p>\r
              <p id="status-seo" class="text-[10px] muted">Average</p>\r
            </div>\r
            <div class="card-bg rounded-xl p-4 text-center">\r
              <div class="relative w-20 h-20 mx-auto mb-2">\r
                <svg viewBox="0 0 36 36" class="w-20 h-20 -rotate-90">\r
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(255,255,255,.06)" stroke-width="2.5" />\r
                  <circle id="ring-security" cx="18" cy="18" r="15.9" fill="none" stroke="#00C48C" stroke-width="2.5"\r
                    stroke-linecap="round" stroke-dasharray="100" stroke-dashoffset="100" class="circle-ring" />\r
                </svg>\r
                <span id="score-security"\r
                  class="absolute inset-0 flex items-center justify-center font-display font-700 text-base text-green-400">78</span>\r
              </div>\r
              <p class="text-xs font-600 dark:text-white text-gray-800" data-en="Security" data-bg="Сигурност">Security\r
              </p>\r
              <p id="status-security" class="text-[10px] text-green-400">Good</p>\r
            </div>\r
          </div>\r
\r
          <!-- Bars -->\r
          <div class="space-y-3 mb-6">\r
            <div>\r
              <div class="flex justify-between text-xs mb-1.5">\r
                <span id="bar-load-title" class="font-600 dark:text-white text-gray-700">Page Load Time</span>\r
                <span id="bar-load-label" class="text-red-400 font-600">8.4s — Critical</span>\r
              </div>\r
              <div class="progress-track h-2 rounded-full overflow-hidden">\r
                <div id="bar-load" class="bar-inner h-full progress-fill-red rounded-full" style="width:0%"\r
                  data-target="32"></div>\r
              </div>\r
            </div>\r
            <div>\r
              <div class="flex justify-between text-xs mb-1.5">\r
                <span id="bar-vitals-title" class="font-600 dark:text-white text-gray-700">Core Web Vitals</span>\r
                <span id="bar-vitals-label" class="text-yellow-400 font-600">Needs Improvement</span>\r
              </div>\r
              <div class="progress-track h-2 rounded-full overflow-hidden">\r
                <div id="bar-vitals" class="bar-inner h-full progress-fill-yellow rounded-full" style="width:0%"\r
                  data-target="55"></div>\r
              </div>\r
            </div>\r
            <div>\r
              <div class="flex justify-between text-xs mb-1.5">\r
                <span id="bar-mobile-title" class="font-600 dark:text-white text-gray-700">Mobile Responsiveness</span>\r
                <span id="bar-mobile-label" class="text-yellow-400 font-600">Partial</span>\r
              </div>\r
              <div class="progress-track h-2 rounded-full overflow-hidden">\r
                <div id="bar-mobile" class="bar-inner h-full progress-fill-yellow rounded-full" style="width:0%"\r
                  data-target="60"></div>\r
              </div>\r
            </div>\r
            <div>\r
              <div class="flex justify-between text-xs mb-1.5">\r
                <span id="bar-seo-title" class="font-600 dark:text-white text-gray-700">SEO Optimization</span>\r
                <span id="bar-seo-label" class="neon-text font-600">Improving</span>\r
              </div>\r
              <div class="progress-track h-2 rounded-full overflow-hidden">\r
                <div id="bar-seo" class="bar-inner h-full progress-fill-blue rounded-full" style="width:0%"\r
                  data-target="65"></div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Warning -->\r
          <div id="insightBox" class="warn-bg rounded-xl p-4 mb-6 flex gap-3 items-start">\r
            <i class="fas fa-triangle-exclamation mt-0.5 flex-shrink-0"></i>\r
            <div>\r
              <p id="insightTitle" class="font-display font-700 text-sm mb-0.5">Warning: Slow load time is costing you\r
                customers.</p>\r
              <p id="insightBody" class="text-xs opacity-80 leading-relaxed">A 1-second delay in load time can reduce\r
                conversions by 7%. At 8.4s, visitors leave before your page even loads.</p>\r
            </div>\r
          </div>\r
\r
          <!-- CTA -->\r
          <div class="card-bg rounded-xl p-5 flex flex-col sm:flex-row gap-4 items-center justify-between">\r
            <div>\r
              <p id="ctaTitle" class="font-display font-700 dark:text-white text-gray-900 mb-1">I can fix this — fast.\r
              </p>\r
              <p id="ctaBody" class="text-sm muted">I can rebuild your site in days, not months, with transparent\r
                pricing.</p>\r
            </div>\r
            <a href="#pricing"\r
              class="cta-primary rounded-xl px-6 py-3 text-sm font-display font-700 whitespace-nowrap transition-all duration-200 hover:scale-[1.03] active:scale-[.98] flex items-center gap-2">\r
              <span data-en="Get a Quote" data-bg="Виж цените">Get a Quote</span>\r
              <i class="fas fa-arrow-right text-xs"></i>\r
            </a>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- ═══ WHY US ═══ -->\r
  <section id="services" class="py-24 px-5 dark:bg-transparent section-alt">\r
    <div class="max-w-6xl mx-auto">\r
      <div class="text-center mb-16 section-fade">\r
        <p class="text-xs uppercase tracking-widest section-label font-display font-700 mb-3" data-en="Why Work With Me"\r
          data-bg="Защо точно аз">Why Work With Me</p>\r
        <h2 class="font-display font-800 text-3xl sm:text-4xl dark:text-white text-gray-900"\r
          data-en="Direct, Fast, and Built Around Your Business." data-bg="Без посредници. Бързо. Точно за теб.">Direct,\r
          Fast, and Built Around Your Business.</h2>\r
      </div>\r
\r
      <div class="section-fade glass rounded-2xl p-7 sm:p-8 mb-8">\r
        <div class="grid lg:grid-cols-[1.2fr_.8fr] gap-8 items-start">\r
          <div>\r
            <p class="text-xs uppercase tracking-widest section-label font-display font-700 mb-3"\r
              data-en="Meet Stoyan Tanev" data-bg="Здравей, аз съм Стоян">Meet Stoyan Tanev</p>\r
            <h3 class="font-display font-800 text-2xl sm:text-3xl dark:text-white text-gray-900 mb-4"\r
              data-en="Freelance web designer and developer from Plovdiv, Bulgaria"\r
              data-bg="Уеб дизайнер и разработчик на свободна практика от Пловдив">Freelance web designer and developer\r
              from Plovdiv, Bulgaria</h3>\r
            <p class="muted text-sm leading-relaxed mb-4"\r
              data-en="I'm an AI and UI/UX enthusiast with a previous medical background. For 10+ years I worked as an endoscopy technician with Pentax and Fujitsu systems, which taught me precision, speed, and responsibility."\r
              data-bg="Вълнуват ме AI и UI/UX, а преди това повече от 10 години работих с медицинска техника — ендоскопски системи на Pentax и Fujitsu. Оттам идва усетът ми за прецизност и отговорност.">\r
              I'm an AI and UI/UX enthusiast with a previous medical background. For 10+ years I worked as an endoscopy\r
              technician with Pentax and Fujitsu systems, which taught me precision, speed, and responsibility.</p>\r
            <p class="muted text-sm leading-relaxed"\r
              data-en="Today I help Bulgarian and international businesses get a clean, modern website fast and at fair prices, without wasting time searching for a freelancer on huge platforms."\r
              data-bg="Сега правя сайтове — модерни и бързи на нормална цена. Без да се ровиш из платформи и да губиш седмици.">\r
              Today I help Bulgarian and international businesses get a clean, modern website fast and at fair prices,\r
              without wasting time searching for a freelancer on huge platforms.</p>\r
            <div class="flex flex-wrap gap-3 mt-6">\r
              <a href="https://www.linkedin.com/in/stoyan-tanev-a732603b8/" target="_blank" rel="noopener noreferrer"\r
                class="tag-bg rounded-full px-4 py-2 text-xs font-600 flex items-center gap-2 transition-all duration-200 hover:scale-[1.02]">\r
                <i class="fab fa-linkedin-in"></i>\r
                <span>LinkedIn</span>\r
              </a>\r
              <a href="https://github.com/stoyanbtanev" target="_blank" rel="noopener noreferrer"\r
                class="tag-bg rounded-full px-4 py-2 text-xs font-600 flex items-center gap-2 transition-all duration-200 hover:scale-[1.02]">\r
                <i class="fab fa-github"></i>\r
                <span>GitHub</span>\r
              </a>\r
              <a href="mailto:stoyanbtanev@gmail.com"\r
                class="tag-bg rounded-full px-4 py-2 text-xs font-600 flex items-center gap-2 transition-all duration-200 hover:scale-[1.02]">\r
                <i class="fas fa-envelope"></i>\r
                <span>stoyanbtanev@gmail.com</span>\r
              </a>\r
              <a href="tel:+359895469386"\r
                class="tag-bg rounded-full px-4 py-2 text-xs font-600 flex items-center gap-2 transition-all duration-200 hover:scale-[1.02]">\r
                <i class="fas fa-phone"></i>\r
                <span>089 546 9386</span>\r
              </a>\r
            </div>\r
          </div>\r
          <div class="card-bg rounded-2xl p-6">\r
            <p class="text-xs uppercase tracking-widest section-label font-display font-700 mb-4" data-en="What You Get"\r
              data-bg="Ето какво получаваш">What You Get</p>\r
            <div class="space-y-4">\r
              <div class="flex gap-3 items-start">\r
                <i class="fas fa-user-check neon-text mt-0.5"></i>\r
                <p class="text-sm muted"\r
                  data-en="Direct communication with the person actually designing and building your site."\r
                  data-bg="Говориш директно с мен — човекът, който рисува и кодира сайта ти.">Direct communication with\r
                  the person actually designing and building your site.</p>\r
              </div>\r
              <div class="flex gap-3 items-start">\r
                <i class="fas fa-brain neon-text mt-0.5"></i>\r
                <p class="text-sm muted"\r
                  data-en="AI-assisted workflow plus strong UI/UX thinking, so the process stays fast without feeling generic."\r
                  data-bg="Ползвам AI, за да вървя бързо, но дизайнът минава през истинско UI/UX мислене — без шаблони.">\r
                  AI-assisted workflow plus strong UI/UX thinking, so the process stays fast without feeling generic.\r
                </p>\r
              </div>\r
              <div class="flex gap-3 items-start">\r
                <i class="fas fa-heart-pulse neon-text mt-0.5"></i>\r
                <p class="text-sm muted"\r
                  data-en="A disciplined technical mindset shaped by 10+ years in high-precision medical equipment."\r
                  data-bg="10+ години с прецизна медицинска техника ме научиха на дисциплина и внимание към детайла.">A\r
                  disciplined technical mindset shaped by 10+ years in high-precision medical equipment.</p>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">\r
        <div\r
          class="section-fade card-bg rounded-2xl p-7 group hover:neon-glow transition-all duration-300 pricing-card card-shine"\r
          style="transition-delay:.1s">\r
          <div\r
            class="w-14 h-14 rounded-xl tag-bg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">\r
            <i class="fas fa-bolt text-2xl neon-text"></i>\r
          </div>\r
          <h3 class="font-display font-700 text-xl dark:text-white text-gray-900 mb-3" data-en="Lightning Fast Delivery"\r
            data-bg="Готово за дни, не за месеци">Lightning Fast Delivery</h3>\r
          <p class="muted text-sm leading-relaxed"\r
            data-en="From kickoff to launch in 3-10 days. I work in focused sprints so you're live while competitors are still in meetings."\r
            data-bg="Сядам, фокусирам се и сайтът ти е готов за 3–10 дни. Ти си вече онлайн, а конкуренцията тепърва уговаря срещи.">\r
            From kickoff to launch in 3-10 days. I work in focused sprints so you're live while competitors are still in\r
            meetings.</p>\r
          <div class="mt-5 flex items-center gap-2 neon-text text-xs font-600 font-display tracking-wide">\r
            <i class="fas fa-check-circle text-xs"></i>\r
            <span data-en="3-10 day turnaround" data-bg="Готово за 3–10 дни">3-10 day turnaround</span>\r
          </div>\r
        </div>\r
        <div\r
          class="section-fade card-bg rounded-2xl p-7 group hover:neon-glow transition-all duration-300 pricing-card card-shine"\r
          style="transition-delay:.2s">\r
          <div\r
            class="w-14 h-14 rounded-xl tag-bg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">\r
            <i class="fas fa-tag text-2xl neon-text"></i>\r
          </div>\r
          <h3 class="font-display font-700 text-xl dark:text-white text-gray-900 mb-3" data-en="Unbeatable Pricing"\r
            data-bg="Честни цени, без скрити номера">Unbeatable Pricing</h3>\r
          <p class="muted text-sm leading-relaxed"\r
            data-en="No inflated middleman markup. No hidden fees. I keep the process lean, so you get strong quality at a fair price."\r
            data-bg="Няма посредници, няма дребен шрифт. Работя без излишна тежест — ти получаваш качество на нормална цена.">\r
            No inflated middleman markup. No hidden fees. I keep the process lean, so you get strong quality at a fair\r
            price.</p>\r
          <div class="mt-5 flex items-center gap-2 neon-text text-xs font-600 font-display tracking-wide">\r
            <i class="fas fa-check-circle text-xs"></i>\r
            <span data-en="Prices from €200" data-bg="От €200 нагоре">Prices from €200</span>\r
          </div>\r
        </div>\r
        <div\r
          class="section-fade card-bg rounded-2xl p-7 group hover:neon-glow transition-all duration-300 pricing-card card-shine"\r
          style="transition-delay:.3s">\r
          <div\r
            class="w-14 h-14 rounded-xl tag-bg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">\r
            <i class="fas fa-gem text-2xl neon-text"></i>\r
          </div>\r
          <h3 class="font-display font-700 text-xl dark:text-white text-gray-900 mb-3" data-en="Premium Quality"\r
            data-bg="Качество без компромиси">Premium Quality</h3>\r
          <p class="muted text-sm leading-relaxed"\r
            data-en="Pixel-perfect design, clean semantic code, 90+ PageSpeed scores. Sites that look great and rank even better."\r
            data-bg="Всеки пиксел е на мястото си, кодът е чист, а Google ти дава 90+ точки. Красиво и бързо — едновременно.">\r
            Pixel-perfect design, clean semantic code, 90+ PageSpeed scores. Sites that look great and rank even better.\r
          </p>\r
          <div class="mt-5 flex items-center gap-2 neon-text text-xs font-600 font-display tracking-wide">\r
            <i class="fas fa-check-circle text-xs"></i>\r
            <span data-en="90+ PageSpeed score guaranteed" data-bg="Гарантирани 90+ точки от PageSpeed">90+ PageSpeed\r
              score guaranteed</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
    </div>\r
  </section>\r
\r
  <!-- ═══ PRICING ═══ -->\r
  <section id="pricing" class="py-24 px-5">\r
    <div class="max-w-6xl mx-auto">\r
      <div class="text-center mb-14 section-fade">\r
        <p class="text-xs uppercase tracking-widest section-label font-display font-700 mb-3" data-en="Packages"\r
          data-bg="Пакети">Packages</p>\r
        <h2 class="font-display font-800 text-3xl sm:text-4xl dark:text-white text-gray-900"\r
          data-en="Simple, Transparent Pricing" data-bg="Ясни цени, без изненади">Simple, Transparent Pricing</h2>\r
        <p class="muted text-sm mt-3 max-w-lg mx-auto"\r
          data-en="No surprise invoices. No scope creep billing. Pick a package and I get to work."\r
          data-bg="Без фактури със звездички. Избираш пакет — и тръгваме.">No surprise invoices. No scope creep billing.\r
          Pick a package and I get to work.</p>\r
      </div>\r
\r
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">\r
\r
        <!-- Quick Launch -->\r
        <div class="section-fade card-bg rounded-2xl p-6 flex flex-col pricing-card card-shine"\r
          style="transition-delay:.1s">\r
          <div class="mb-5">\r
            <div\r
              class="tag-bg inline-flex rounded-full px-3 py-1 text-[10px] font-display font-700 tracking-widest uppercase mb-3">\r
              Starter</div>\r
            <h3 class="font-display font-800 text-xl dark:text-white text-gray-900 mb-1" data-en="Quick Launch"\r
              data-bg="Бърз старт">Quick Launch</h3>\r
            <p class="muted text-xs leading-relaxed"\r
              data-en="Perfect for events, product launches, or testing ideas fast."\r
              data-bg="За събития, лансиране на продукт или когато просто искаш да тестнеш идея бързо.">Perfect for\r
              events, product launches, or testing ideas fast.</p>\r
          </div>\r
          <div class="mb-5">\r
            <span class="font-display font-800 text-3xl dark:text-white text-gray-900">€200</span>\r
            <span class="muted text-xs ml-1" data-en="one-time" data-bg="еднократно">one-time</span>\r
          </div>\r
          <ul class="space-y-2.5 mb-6 flex-1">\r
            <li class="flex items-center gap-2 text-xs muted"><i\r
                class="fas fa-check neon-text text-[10px] flex-shrink-0"></i>\r
              <span data-en="1 responsive landing page" data-bg="1 адаптивна страница">1 responsive landing page</span>\r
            </li>\r
            <li class="flex items-center gap-2 text-xs muted"><i\r
                class="fas fa-check neon-text text-[10px] flex-shrink-0"></i>\r
              <span data-en="Mobile-first design" data-bg="Изглежда страхотно на телефон">Mobile-first design</span>\r
            </li>\r
            <li class="flex items-center gap-2 text-xs muted"><i\r
                class="fas fa-check neon-text text-[10px] flex-shrink-0"></i>\r
              <span data-en="Basic SEO setup" data-bg="Основно SEO">Basic SEO setup</span>\r
            </li>\r
            <li class="flex items-center gap-2 text-xs muted"><i\r
                class="fas fa-check neon-text text-[10px] flex-shrink-0"></i>\r
              <span data-en="Contact form" data-bg="Контактна форма">Contact form</span>\r
            </li>\r
            <li class="flex items-center gap-2 text-xs muted"><i\r
                class="fas fa-check neon-text text-[10px] flex-shrink-0"></i>\r
              <span data-en="3-day delivery" data-bg="Готово за 3 дни">3-day delivery</span>\r
            </li>\r
          </ul>\r
          <a href="#contact"\r
            class="cta-secondary rounded-xl py-2.5 text-xs font-display font-700 text-center transition-all duration-200 hover:scale-[1.02] active:scale-[.98]"\r
            data-en="Get Started" data-bg="Започни">Get Started</a>\r
        </div>\r
\r
        <!-- Landing Page Pro -->\r
        <div class="section-fade card-bg rounded-2xl p-6 flex flex-col pricing-card card-shine"\r
          style="transition-delay:.15s">\r
          <div class="mb-5">\r
            <div\r
              class="tag-bg inline-flex rounded-full px-3 py-1 text-[10px] font-display font-700 tracking-widest uppercase mb-3">\r
              Popular</div>\r
            <h3 class="font-display font-800 text-xl dark:text-white text-gray-900 mb-1" data-en="Landing Page Pro"\r
              data-bg="Страница, която продава">Landing Page Pro</h3>\r
            <p class="muted text-xs leading-relaxed"\r
              data-en="Enhanced landing with more sections, animations, and conversions."\r
              data-bg="Повече секции, анимации и ясна цел — да превръща посетители в клиенти.">Enhanced landing with\r
              more sections, animations, and conversions.</p>\r
          </div>\r
          <div class="mb-5">\r
            <span class="font-display font-800 text-3xl dark:text-white text-gray-900">€250</span>\r
            <span class="muted text-xs ml-1" data-en="one-time" data-bg="еднократно">one-time</span>\r
          </div>\r
          <ul class="space-y-2.5 mb-6 flex-1">\r
            <li class="flex items-center gap-2 text-xs muted"><i\r
                class="fas fa-check neon-text text-[10px] flex-shrink-0"></i>\r
              <span data-en="1-3 pages included" data-bg="До 3 страници">1-3 pages included</span>\r
            </li>\r
            <li class="flex items-center gap-2 text-xs muted"><i\r
                class="fas fa-check neon-text text-[10px] flex-shrink-0"></i>\r
              <span data-en="Premium animations" data-bg="Плавни анимации">Premium animations</span>\r
            </li>\r
            <li class="flex items-center gap-2 text-xs muted"><i\r
                class="fas fa-check neon-text text-[10px] flex-shrink-0"></i>\r
              <span data-en="A/B testing ready" data-bg="Подготвено за A/B тестове">A/B testing ready</span>\r
            </li>\r
            <li class="flex items-center gap-2 text-xs muted"><i\r
                class="fas fa-check neon-text text-[10px] flex-shrink-0"></i>\r
              <span data-en="Analytics integration" data-bg="Google Analytics вграден">Analytics integration</span>\r
            </li>\r
            <li class="flex items-center gap-2 text-xs muted"><i\r
                class="fas fa-check neon-text text-[10px] flex-shrink-0"></i>\r
              <span data-en="5-day delivery" data-bg="Готово за 5 дни">5-day delivery</span>\r
            </li>\r
          </ul>\r
          <a href="#contact"\r
            class="cta-primary rounded-xl py-2.5 text-xs font-display font-700 text-center transition-all duration-200 hover:scale-[1.02] active:scale-[.98]"\r
            data-en="Get Started" data-bg="Започни">Get Started</a>\r
        </div>\r
\r
        <!-- Website Revamp -->\r
        <div class="section-fade relative flex h-full" style="transition-delay:.2s">\r
          <div class="absolute -top-4 left-1/2 -translate-x-1/2 z-10">\r
            <span\r
              class="badge-popular font-display font-700 text-[10px] tracking-widest uppercase px-4 py-1.5 rounded-full whitespace-nowrap"\r
              data-en="Best Value" data-bg="Най-изгодно">Best Value</span>\r
          </div>\r
          <div class="pricing-highlight rounded-2xl p-6 flex flex-col pricing-card card-shine h-full w-full">\r
            <div class="mb-5">\r
              <div\r
                class="tag-bg inline-flex rounded-full px-3 py-1 text-[10px] font-display font-700 tracking-widest uppercase mb-3">\r
                Growth</div>\r
              <h3 class="font-display font-800 text-xl dark:text-white text-gray-900 mb-1" data-en="Website Revamp"\r
                data-bg="Нов живот за стария сайт">Website Revamp</h3>\r
              <p class="muted text-xs leading-relaxed"\r
                data-en="Transform your existing site into a fast, modern, high-converting machine."\r
                data-bg="Взимаме текущия ти сайт и го превръщаме в нещо бързо, модерно и което реално работи.">Transform\r
                your existing site into a fast, modern, high-converting machine.</p>\r
            </div>\r
            <div class="mb-5">\r
              <span class="font-display font-800 text-3xl dark:text-white text-gray-900">€500</span>\r
              <span class="muted text-xs ml-1" data-en="one-time" data-bg="еднократно">one-time</span>\r
            </div>\r
            <ul class="space-y-2.5 mb-6 flex-1">\r
              <li class="flex items-center gap-2 text-xs muted"><i\r
                  class="fas fa-check neon-text text-[10px] flex-shrink-0"></i>\r
                <span data-en="Up to 5 pages" data-bg="До 5 страници">Up to 5 pages</span>\r
              </li>\r
              <li class="flex items-center gap-2 text-xs muted"><i\r
                  class="fas fa-check neon-text text-[10px] flex-shrink-0"></i>\r
                <span data-en="Full redesign + rebuild" data-bg="Изцяло нов дизайн и код">Full redesign + rebuild</span>\r
              </li>\r
              <li class="flex items-center gap-2 text-xs muted"><i\r
                  class="fas fa-check neon-text text-[10px] flex-shrink-0"></i>\r
                <span data-en="90+ PageSpeed score" data-bg="90+ точки в PageSpeed">90+ PageSpeed score</span>\r
              </li>\r
              <li class="flex items-center gap-2 text-xs muted"><i\r
                  class="fas fa-check neon-text text-[10px] flex-shrink-0"></i>\r
                <span data-en="Advanced SEO + analytics" data-bg="Сериозно SEO + аналитика">Advanced SEO +\r
                  analytics</span>\r
              </li>\r
              <li class="flex items-center gap-2 text-xs muted"><i\r
                  class="fas fa-check neon-text text-[10px] flex-shrink-0"></i>\r
                <span data-en="7-day delivery" data-bg="Готово за 7 дни">7-day delivery</span>\r
              </li>\r
            </ul>\r
            <a href="#contact"\r
              class="cta-primary rounded-xl py-2.5 text-xs font-display font-700 text-center transition-all duration-200 hover:scale-[1.02] active:scale-[.98]"\r
              data-en="Start Revamp" data-bg="Започни редизайна">Start Revamp</a>\r
          </div>\r
        </div>\r
\r
        <!-- New Website Build -->\r
        <div class="section-fade card-bg rounded-2xl p-6 flex flex-col pricing-card card-shine"\r
          style="transition-delay:.25s">\r
          <div class="mb-5">\r
            <div\r
              class="tag-bg inline-flex rounded-full px-3 py-1 text-[10px] font-display font-700 tracking-widest uppercase mb-3">\r
              Pro</div>\r
            <h3 class="font-display font-800 text-xl dark:text-white text-gray-900 mb-1" data-en="New Website Build"\r
              data-bg="Чисто нов сайт от нулата">New Website Build</h3>\r
            <p class="muted text-xs leading-relaxed"\r
              data-en="Start from scratch. Custom-built from the ground up — design, dev, launch."\r
              data-bg="Започваме от бял лист — дизайн по твоя мярка, чист код и бързо пускане.">Start from scratch.\r
              Custom-built from the ground up — design, dev, launch.</p>\r
          </div>\r
          <div class="mb-5">\r
            <span class="font-display font-800 text-3xl dark:text-white text-gray-900">€800</span>\r
            <span class="muted text-xs ml-1" data-en="one-time" data-bg="еднократно">one-time</span>\r
          </div>\r
          <ul class="space-y-2.5 mb-6 flex-1">\r
            <li class="flex items-center gap-2 text-xs muted"><i\r
                class="fas fa-check neon-text text-[10px] flex-shrink-0"></i>\r
              <span data-en="Up to 10 pages" data-bg="До 10 страници">Up to 10 pages</span>\r
            </li>\r
            <li class="flex items-center gap-2 text-xs muted"><i\r
                class="fas fa-check neon-text text-[10px] flex-shrink-0"></i>\r
              <span data-en="Custom design system" data-bg="Уникален дизайн, само за теб">Custom design system</span>\r
            </li>\r
            <li class="flex items-center gap-2 text-xs muted"><i\r
                class="fas fa-check neon-text text-[10px] flex-shrink-0"></i>\r
              <span data-en="E-commerce ready" data-bg="Може и с онлайн магазин">E-commerce ready</span>\r
            </li>\r
            <li class="flex items-center gap-2 text-xs muted"><i\r
                class="fas fa-check neon-text text-[10px] flex-shrink-0"></i>\r
              <span data-en="2 weeks support" data-bg="2 седмици поддръжка от мен">2 weeks support</span>\r
            </li>\r
            <li class="flex items-center gap-2 text-xs muted"><i\r
                class="fas fa-check neon-text text-[10px] flex-shrink-0"></i>\r
              <span data-en="10-day delivery" data-bg="Готово за 10 дни">10-day delivery</span>\r
            </li>\r
          </ul>\r
          <a href="#contact"\r
            class="cta-secondary rounded-xl py-2.5 text-xs font-display font-700 text-center transition-all duration-200 hover:scale-[1.02] active:scale-[.98]"\r
            data-en="Get Started" data-bg="Започни">Get Started</a>\r
        </div>\r
      </div>\r
\r
      <!-- Guarantee -->\r
      <div class="mt-10 text-center section-fade">\r
        <div class="inline-flex items-center gap-3 tag-bg rounded-full px-5 py-2.5">\r
          <i class="fas fa-shield-check neon-text text-sm"></i>\r
          <span class="text-xs font-medium" data-en="100% Satisfaction Guarantee — If you're not happy, I fix it free."\r
            data-bg="Гаранция — ако нещо не ти харесва, оправям го безплатно.">100% Satisfaction Guarantee — If you're\r
            not happy, I fix it free.</span>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- ═══ CONTACT ═══ -->\r
  <section id="contact" class="py-24 px-5 dark:bg-transparent section-alt">\r
    <div class="max-w-3xl mx-auto text-center section-fade">\r
      <p class="text-xs uppercase tracking-widest section-label font-display font-700 mb-3" data-en="Ready to start?"\r
        data-bg="Готов да започнем?">Ready to start?</p>\r
      <h2 class="font-display font-800 text-3xl sm:text-4xl dark:text-white text-gray-900 mb-4"\r
        data-en="Let's Build Something Fast." data-bg="Да ти направя сайт, който работи.">Let's Build Something Fast.\r
      </h2>\r
      <p class="muted text-sm max-w-xl mx-auto mb-10 leading-relaxed"\r
        data-en="Tell me about your project and I'll get back to you within a few hours — not days."\r
        data-bg="Пиши ми какво имаш предвид и ще ти отговоря до часове, не до дни.">Tell me about your project and I'll\r
        get back to you within a few hours — not days.</p>\r
\r
      <div class="glass rounded-2xl p-7 sm:p-8 text-left">\r
        <form id="contactForm" action="https://formsubmit.co/stoyanbtanev@gmail.com"\r
          data-ajax-endpoint="https://formsubmit.co/ajax/stoyanbtanev@gmail.com" method="POST">\r
          <input type="hidden" name="_subject" value="New SiteSonar inquiry" />\r
          <input type="hidden" name="_template" value="table" />\r
          <input type="hidden" id="formNextUrl" name="_next" value="" />\r
          <input type="hidden" id="formOriginUrl" name="_url" value="" />\r
          <input type="text" name="_honey" class="hidden" tabindex="-1" autocomplete="off" />\r
          <div class="grid sm:grid-cols-2 gap-4 mb-4">\r
            <div>\r
              <label class="text-xs muted uppercase tracking-wide font-600 block mb-2" data-en="Your Name"\r
                data-bg="Как се казваш">Your Name</label>\r
              <input type="text" name="name" placeholder="John Carter" data-placeholder-en="John Carter"\r
                data-placeholder-bg="Иван Петров" required\r
                class="url-input w-full bg-transparent border neon-border rounded-xl px-4 py-3 text-sm transition-all" />\r
            </div>\r
            <div>\r
              <label class="text-xs muted uppercase tracking-wide font-600 block mb-2">Email</label>\r
              <input type="email" name="email" placeholder="ivan@company.com" required\r
                class="url-input w-full bg-transparent border neon-border rounded-xl px-4 py-3 text-sm transition-all" />\r
            </div>\r
          </div>\r
          <div class="mb-4">\r
            <label class="text-xs muted uppercase tracking-wide font-600 block mb-2" data-en="Budget Range"\r
              data-bg="Какъв бюджет имаш">Budget Range</label>\r
            <select name="budget"\r
              class="url-input w-full bg-transparent border neon-border rounded-xl px-4 py-3 text-sm transition-all appearance-none cursor-pointer dark:bg-sonar-card">\r
              <option value="" data-en="Select your budget" data-bg="Избери ориентировъчен бюджет">Select your budget\r
              </option>\r
              <option value="200">€200 – €500</option>\r
              <option value="500">€500 – €800</option>\r
              <option value="800+">€800+</option>\r
            </select>\r
          </div>\r
          <div class="mb-4">\r
            <label class="text-xs muted uppercase tracking-wide font-600 block mb-2" data-en="Website URL (optional)"\r
              data-bg="Имаш ли вече сайт? (не е задължително)">Website URL (optional)</label>\r
            <input type="url" name="website" placeholder="https://yoursite.com"\r
              data-placeholder-en="https://yoursite.com" data-placeholder-bg="https://твоясайт.com"\r
              class="url-input w-full bg-transparent border neon-border rounded-xl px-4 py-3 text-sm transition-all" />\r
          </div>\r
          <div class="mb-6">\r
            <label class="text-xs muted uppercase tracking-wide font-600 block mb-2"\r
              data-en="Tell me about your project" data-bg="Разкажи ми с две думи за идеята">Tell me about your\r
              project</label>\r
            <textarea name="message" rows="4" placeholder="I need a fast new website for my business..."\r
              data-placeholder-en="I need a fast new website for my business..."\r
              data-placeholder-bg="Трябва ми нов, бърз сайт за бизнеса ми..." required\r
              class="url-input w-full bg-transparent border neon-border rounded-xl px-4 py-3 text-sm resize-none transition-all"></textarea>\r
          </div>\r
          <button type="submit"\r
            class="cta-primary rounded-xl w-full py-3.5 text-sm font-display font-700 transition-all duration-200 hover:scale-[1.01] active:scale-[.99] flex items-center justify-center gap-2">\r
            <i class="fas fa-paper-plane text-sm"></i>\r
            <span data-en="Send Message" data-bg="Изпрати">Send Message</span>\r
          </button>\r
          <p id="formStatus" class="hidden text-sm mt-4 text-center"></p>\r
        </form>\r
      </div>\r
\r
      <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm muted">\r
        <a href="mailto:stoyanbtanev@gmail.com" class="flex items-center gap-2 hover:neon-text transition-colors">\r
          <i class="fas fa-envelope text-xs neon-text"></i> stoyanbtanev@gmail.com\r
        </a>\r
        <span class="hidden sm:block opacity-30">·</span>\r
        <a href="tel:+359895469386" class="flex items-center gap-2 hover:neon-text transition-colors">\r
          <i class="fas fa-phone text-xs neon-text"></i> 089 546 9386\r
        </a>\r
        <span class="hidden sm:block opacity-30">·</span>\r
        <a href="https://www.linkedin.com/in/stoyan-tanev-a732603b8/" target="_blank" rel="noopener noreferrer"\r
          class="flex items-center gap-2 hover:neon-text transition-colors">\r
          <i class="fab fa-linkedin-in text-xs neon-text"></i> LinkedIn\r
        </a>\r
        <span class="hidden sm:block opacity-30">·</span>\r
        <a href="https://github.com/stoyanbtanev" target="_blank" rel="noopener noreferrer"\r
          class="flex items-center gap-2 hover:neon-text transition-colors">\r
          <i class="fab fa-github text-xs neon-text"></i> GitHub\r
        </a>\r
        <span class="hidden sm:block opacity-30">·</span>\r
        <span class="flex items-center gap-2">\r
          <i class="fas fa-map-marker-alt text-xs neon-text"></i>\r
          <span data-en="Plovdiv, Bulgaria" data-bg="Пловдив, България">Plovdiv, Bulgaria</span>\r
        </span>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- ═══ FOOTER ═══ -->\r
  <footer class="footer-bg py-10 px-5">\r
    <div class="max-w-6xl mx-auto">\r
      <div class="flex flex-col sm:flex-row items-center justify-between gap-6">\r
        <div class="flex items-center gap-2.5">\r
          <div class="relative w-7 h-7">\r
            <div class="absolute inset-0 rounded-full border-2 neon-border opacity-60"></div>\r
            <div\r
              class="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full bg-sonar-blue -translate-x-1/2 -translate-y-1/2">\r
            </div>\r
          </div>\r
          <div>\r
            <span class="font-display font-700 tracking-tight neon-text">Site<span\r
                class="dark:text-white text-gray-700">Sonar</span></span>\r
            <p class="text-[11px] muted" data-en="by Stoyan Tanev" data-bg="от Стоян Танев">by Stoyan Tanev</p>\r
          </div>\r
        </div>\r
        <div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs muted">\r
          <a href="#services" class="hover:neon-text transition-colors" data-en="About Me" data-bg="Кой съм аз">About\r
            Me</a>\r
          <a href="#pricing" class="hover:neon-text transition-colors" data-en="Pricing" data-bg="Цени">Pricing</a>\r
          <a href="#contact" class="hover:neon-text transition-colors" data-en="Contact" data-bg="Пиши ми">Contact</a>\r
          <a href="#" class="hover:neon-text transition-colors" data-en="Privacy Policy" data-bg="Поверителност">Privacy\r
            Policy</a>\r
        </div>\r
        <p class="text-xs muted text-center sm:text-right">\r
          © <span id="year"></span> Stoyan Tanev.\r
          <span data-en="All rights reserved." data-bg="Всички права запазени.">All rights reserved.</span>\r
        </p>\r
      </div>\r
    </div>\r
  </footer>\r
\r
  <!-- ═══ JS ═══ -->\r
  <script>\r
    document.getElementById('year').textContent = new Date().getFullYear();\r
    const SCORE_TEXT_CLASSES = ['text-red-400', 'text-yellow-400', 'text-green-400', 'neon-text'];\r
    const BAR_FILL_CLASSES = ['progress-fill-red', 'progress-fill-yellow', 'progress-fill-blue', 'progress-fill-green'];\r
    let currentLang = 'en';\r
    let lastAuditState = null;\r
    let auditInFlight = false;\r
\r
    const heroVariants = [\r
      {\r
        tag: { en: '⚡ Fast Websites. Fair Prices.', bg: '⚡ Бързи сайтове. Честни цени.' },\r
        lineOne: { en: 'Launch Your Website', bg: 'Пусни сайта си' },\r
        lineTwo: { en: 'In Days, Not Months.', bg: 'за дни, не за месеци.' },\r
        sub: {\r
          en: 'Modern landing pages and business websites with strong UI/UX, clean performance, and quick turnaround. Ready in 3-10 days, from €200.',\r
          bg: 'Модерни сайтове с добре обмислен дизайн, бързо зареждане и кратък срок. Готови за 3–10 дни, от €200.'\r
        }\r
      },\r
      {\r
        tag: { en: '⚡ Built Fast. Built Clean.', bg: '⚡ Бързо. Модерно. На ниво.' },\r
        lineOne: { en: 'Websites That Look Sharp', bg: 'Сайтове, които правят впечатление' },\r
        lineTwo: { en: 'And Load Even Faster.', bg: 'и се зареждат мигновено.' },\r
        sub: {\r
          en: 'Landing pages and business websites designed to feel modern, move fast, and stay affordable from the first idea to launch.',\r
          bg: 'Уеб страници, които изглеждат модерно, работят бързо и не те разоряват — от идеята до пускането.'\r
        }\r
      },\r
      {\r
        tag: { en: '⚡ From Idea to Launch', bg: '⚡ От идея до готов сайт' },\r
        lineOne: { en: 'Your Next Website', bg: 'Следващият ти сайт' },\r
        lineTwo: { en: 'Starts Here.', bg: 'започва оттук.' },\r
        sub: {\r
          en: 'Smart UI/UX, strong visual direction, and quick execution for businesses that want results without months of waiting.',\r
          bg: 'Добре обмислен UX, силна визия и бързо изпълнение — за бизнеси, които не искат да чакат с месеци.'\r
        }\r
      },\r
      {\r
        tag: { en: '⚡ Small Budget. Strong Impact.', bg: '⚡ Нормален бюджет. Силен резултат.' },\r
        lineOne: { en: 'Modern Websites', bg: 'Модерни сайтове' },\r
        lineTwo: { en: 'Without The Waiting Game.', bg: 'без безкрайно чакане.' },\r
        sub: {\r
          en: 'Affordable websites for brands that want to look professional, launch quickly, and stop losing time on slow processes.',\r
          bg: 'Достъпни сайтове за хора и бизнеси, които искат да изглеждат добре онлайн, без да хвърлят месеци в процеса.'\r
        }\r
      }\r
    ];\r
\r
    const currentHeroVariantIndex = (() => {\r
      try {\r
        const storageKey = 'sitesonar-hero-variant';\r
        const storedValue = localStorage.getItem(storageKey);\r
        const previous = storedValue === null ? null : Number(storedValue);\r
        let next = Math.floor(Math.random() * heroVariants.length);\r
        if (heroVariants.length > 1 && previous !== null && Number.isInteger(previous) && previous >= 0) {\r
          while (next === previous) next = Math.floor(Math.random() * heroVariants.length);\r
        }\r
        localStorage.setItem(storageKey, String(next));\r
        return next;\r
      } catch {\r
        return Math.floor(Math.random() * heroVariants.length);\r
      }\r
    })();\r
\r
    const copy = {\r
      en: {\r
        statuses: { excellent: 'Excellent', good: 'Good', average: 'Average', needsWork: 'Needs Work', poor: 'Poor', critical: 'Critical' },\r
        mode: {\r
          live: 'Live PageSpeed data • mobile-first audit',\r
          estimate: 'Smart estimate • public crawl and content signals',\r
          baseline: 'Smart estimate • URL and domain signals only'\r
        },\r
        barTitles: {\r
          live: { load: 'Page Load Time', vitals: 'Core Web Vitals', mobile: 'Mobile Responsiveness', seo: 'SEO Optimization' },\r
          estimate: { load: 'Page Response Time', vitals: 'UX & Structure Signals', mobile: 'Mobile Readiness', seo: 'Search Visibility Signals' }\r
        },\r
        headlines: {\r
          excellent: 'Your website is in strong shape',\r
          good: 'Solid foundation, with room to grow',\r
          average: 'There is clear upside in this site',\r
          poor: 'Your website is holding back conversions'\r
        },\r
        insights: {\r
          speed: {\r
            title: 'Speed is the biggest opportunity right now.',\r
            bodyLive: time => \`The current load pattern is around \${time}, which is enough friction to lose people early. Tightening this up usually pays off fast in both trust and conversion.\`,\r
            bodyEstimate: 'The public crawl suggests the site does not feel as fast as it could. Lighter pages, cleaner assets, and better front-end hygiene would likely have the biggest impact.'\r
          },\r
          mobile: {\r
            title: 'Mobile UX still needs some care.',\r
            bodyLive: 'A big share of traffic usually arrives from phones first. If that experience feels cramped or slow, visitors drop before they ever reach the offer.',\r
            bodyEstimate: 'The structure signals point to room for a cleaner, more mobile-friendly experience, especially around readability, hierarchy, and responsiveness.'\r
          },\r
          seo: {\r
            title: 'SEO has room for meaningful gains.',\r
            bodyLive: 'Better metadata, stronger content structure, and clearer search signals would make this site easier to discover and easier for Google to understand.',\r
            bodyEstimate: 'From the title, description, and content structure alone, there is room to strengthen search visibility and make the page easier to index well.'\r
          },\r
          security: {\r
            title: 'Trust and technical hygiene can be tighter.',\r
            bodyLive: 'Best-practice fixes, cleaner technical setup, and stronger trust signals help both rankings and customer confidence.',\r
            bodyEstimate: 'The public signals suggest there is still room to strengthen technical trust, consistency, and perceived reliability.'\r
          }\r
        },\r
        cta: {\r
          polish: {\r
            title: 'A focused polish pass could push this site much higher.',\r
            body: 'I would tighten speed, clean up the mobile UX, and sharpen the SEO without turning the project into months of overwork.'\r
          },\r
          rebuild: {\r
            title: 'I can turn this into a much stronger site quickly.',\r
            body: 'A focused refresh or full rebuild can lift speed, clarity, and conversion in days, not months.'\r
          }\r
        },\r
        buttonRunning: 'Auditing…',\r
        formSending: 'Sending…',\r
        formSent: 'Sent!',\r
        formSuccess: 'Message sent successfully. I will get back to you soon.',\r
        formError: 'Something went wrong while sending. Please try again or email me directly.'\r
      },\r
      bg: {\r
        statuses: { excellent: 'Отлично', good: 'Добре', average: 'Средно', needsWork: 'Може по-добре', poor: 'Слабо', critical: 'Критично' },\r
        mode: {\r
          live: 'Реални данни от PageSpeed • мобилен одит',\r
          estimate: 'Бърза оценка • по публични сигнали и съдържание',\r
          baseline: 'Бърза оценка • само по URL и домейн'\r
        },\r
        barTitles: {\r
          live: { load: 'Колко бързо зарежда', vitals: 'Core Web Vitals', mobile: 'Как работи на телефон', seo: 'SEO представяне' },\r
          estimate: { load: 'Колко бързо отговаря', vitals: 'UX и структура', mobile: 'Мобилна готовност', seo: 'Видимост в Google' }\r
        },\r
        headlines: {\r
          excellent: 'Сайтът ти е в отлична форма',\r
          good: 'Основата е добра — има място за още няколко подобрения',\r
          average: 'Потенциалът е налице, но има и ясни слаби места',\r
          poor: 'Сайтът ти реално те спира — губиш клиенти'\r
        },\r
        insights: {\r
          speed: {\r
            title: 'Скоростта е основният проблем тук.',\r
            bodyLive: time => \`Зарежда се за около \${time} — това е достатъчно, за да отпаднат хората, преди да видят каквото и да е. Ако оправим само скоростта, разликата ще се усети веднага.\`,\r
            bodyEstimate: 'По сигналите личи, че сайтът не се усеща бърз. Олекотяване на страниците и почистване на ресурсите ще дадат най-бърз ефект.'\r
          },\r
          mobile: {\r
            title: 'Мобилното усещане може да е много по-добро.',\r
            bodyLive: 'Повечето хора влизат от телефон. Ако на мобилен не е удобно — тях ги губиш, преди въобще да стигнат до офертата ти.',\r
            bodyEstimate: 'Изглежда, че мобилната четимост, подредбата и адаптивността имат накъде да растат.'\r
          },\r
          seo: {\r
            title: 'SEO-то може да донесе доста повече трафик.',\r
            bodyLive: 'По-добри мета тагове, по-ясна структура и по-силни сигнали ще помогнат Google да те намери по-лесно.',\r
            bodyEstimate: 'По заглавието, описанието и структурата личи, че видимостта в търсачките може да се вдигне доста.'\r
          },\r
          security: {\r
            title: 'Доверието и техническата хигиена могат да се подобрят.',\r
            bodyLive: 'HTTPS, чисти практики и по-стегнат технически setup помагат и за класирането, и за доверието на хората.',\r
            bodyEstimate: 'Публичните сигнали подсказват, че има какво да се подобри по надеждността и техническата изрядност.'\r
          }\r
        },\r
        cta: {\r
          polish: {\r
            title: 'С няколко прецизни промени този сайт ще заработи много по-силно.',\r
            body: 'Ще оправя скоростта, мобилния UX и SEO-то — без да превръщам проекта в нещо огромно.'\r
          },\r
          rebuild: {\r
            title: 'Мога да го направя много по-добър за кратко време.',\r
            body: 'Фокусиран ремонт или чисто нов сайт — скоростта, яснотата и конверсиите ще се усетят за дни.'\r
          }\r
        },\r
        buttonRunning: 'Работя по одита…',\r
        formSending: 'Изпращам…',\r
        formSent: 'Готово!',\r
        formSuccess: 'Съобщението е изпратено. Ще се чуем скоро.',\r
        formError: 'Нещо се обърка. Опитай пак или ми пиши на имейл директно.'\r
      }\r
    };\r
\r
    /* ── Persist theme & lang across reloads ── */\r
    (function () {\r
      const savedTheme = localStorage.getItem('ss-theme');\r
      const savedLang = localStorage.getItem('ss-lang');\r
      const html = document.documentElement;\r
      if (savedTheme === 'light') {\r
        html.classList.remove('dark');\r
        const icon = document.getElementById('themeIcon');\r
        if (icon) icon.className = 'fas fa-sun';\r
      }\r
      if (savedLang && savedLang !== 'en') {\r
        currentLang = savedLang;\r
      }\r
    })();\r
\r
    /* Theme */\r
    function toggleTheme() {\r
      const html = document.documentElement;\r
      const icon = document.getElementById('themeIcon');\r
      if (html.classList.contains('dark')) {\r
        html.classList.remove('dark');\r
        icon.className = 'fas fa-sun';\r
        localStorage.setItem('ss-theme', 'light');\r
      } else {\r
        html.classList.add('dark');\r
        icon.className = 'fas fa-moon';\r
        localStorage.setItem('ss-theme', 'dark');\r
      }\r
    }\r
\r
    function getCopy() {\r
      return copy[currentLang];\r
    }\r
\r
    function renderHeroVariant() {\r
      const variant = heroVariants[currentHeroVariantIndex];\r
      if (!variant) return;\r
      setText('heroTagline', variant.tag[currentLang]);\r
      setText('heroLineOne', variant.lineOne[currentLang]);\r
      setText('heroLineTwo', variant.lineTwo[currentLang]);\r
      setText('heroSubcopy', variant.sub[currentLang]);\r
    }\r
\r
    function applyLocalizedPlaceholders() {\r
      document.querySelectorAll('[data-placeholder-en]').forEach(el => {\r
        const value = el.getAttribute(\`data-placeholder-\${currentLang}\`);\r
        if (value) el.placeholder = value;\r
      });\r
    }\r
\r
    function applyLanguage() {\r
      document.getElementById('langLabel').textContent = currentLang.toUpperCase();\r
      document.documentElement.lang = currentLang;\r
      document.querySelectorAll('[data-en]').forEach(el => {\r
        const value = el.getAttribute(\`data-\${currentLang}\`);\r
        if (value !== null) el.textContent = value;\r
      });\r
      applyLocalizedPlaceholders();\r
      renderHeroVariant();\r
      if (auditInFlight) {\r
        const auditLabel = document.getElementById('auditButtonLabel');\r
        if (auditLabel) auditLabel.textContent = getCopy().buttonRunning;\r
      }\r
    }\r
\r
    function toggleLang() {\r
      currentLang = currentLang === 'en' ? 'bg' : 'en';\r
      localStorage.setItem('ss-lang', currentLang);\r
      applyLanguage();\r
      if (lastAuditState) renderAudit(lastAuditState);\r
    }\r
\r
    function clamp(value, min, max) {\r
      return Math.min(Math.max(value, min), max);\r
    }\r
\r
    function average(values, fallback = 50) {\r
      return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : fallback;\r
    }\r
\r
    function wait(ms) {\r
      return new Promise(resolve => setTimeout(resolve, ms));\r
    }\r
\r
    function normalizeUrl(raw) {\r
      const candidate = /^https?:\\/\\//i.test(raw) ? raw : \`https://\${raw}\`;\r
      const url = new URL(candidate);\r
      if (!url.hostname) throw new Error('Invalid URL');\r
      return url.toString();\r
    }\r
\r
    function cleanDisplayUrl(url) {\r
      return url.replace(/\\/$/, '');\r
    }\r
\r
    function pulseInput(input) {\r
      input.classList.add('animate-pulse');\r
      setTimeout(() => input.classList.remove('animate-pulse'), 1200);\r
      input.focus();\r
    }\r
\r
    async function fetchJson(url, options = {}, timeoutMs = 12000) {\r
      const controller = new AbortController();\r
      const timeoutId = setTimeout(() => controller.abort(), timeoutMs);\r
      try {\r
        const response = await fetch(url, { ...options, signal: controller.signal });\r
        if (!response.ok) throw new Error(\`Request failed with \${response.status}\`);\r
        return await response.json();\r
      } finally {\r
        clearTimeout(timeoutId);\r
      }\r
    }\r
\r
    function statusKey(score) {\r
      if (score >= 90) return 'excellent';\r
      if (score >= 75) return 'good';\r
      if (score >= 60) return 'average';\r
      if (score >= 45) return 'needsWork';\r
      if (score >= 30) return 'poor';\r
      return 'critical';\r
    }\r
\r
    function labelForScore(score) {\r
      return getCopy().statuses[statusKey(score)];\r
    }\r
\r
    function toneForScore(score) {\r
      if (score >= 85) return { stroke: '#10B981', textClass: 'text-green-400', barClass: 'progress-fill-green' };\r
      if (score >= 70) return { stroke: '#00D4FF', textClass: 'neon-text', barClass: 'progress-fill-blue' };\r
      if (score >= 50) return { stroke: '#F59E0B', textClass: 'text-yellow-400', barClass: 'progress-fill-yellow' };\r
      return { stroke: '#EF4444', textClass: 'text-red-400', barClass: 'progress-fill-red' };\r
    }\r
\r
    function setToneClass(element, className) {\r
      if (!element) return;\r
      element.classList.remove(...SCORE_TEXT_CLASSES);\r
      element.classList.add(className);\r
    }\r
\r
    function setText(id, value) {\r
      const element = document.getElementById(id);\r
      if (element) element.textContent = value;\r
    }\r
\r
    function setFormStatus(message = '', tone = 'muted') {\r
      const status = document.getElementById('formStatus');\r
      if (!status) return;\r
      status.classList.remove('hidden', 'text-red-400', 'text-green-400', 'muted');\r
      if (!message) {\r
        status.textContent = '';\r
        status.classList.add('hidden');\r
        return;\r
      }\r
      status.textContent = message;\r
      status.classList.add(tone === 'error' ? 'text-red-400' : tone === 'success' ? 'text-green-400' : 'muted');\r
    }\r
\r
    function animateRing(id, score, stroke) {\r
      const ring = document.getElementById(id);\r
      if (!ring) return;\r
      ring.style.stroke = stroke;\r
      ring.style.strokeDashoffset = '100';\r
      requestAnimationFrame(() => {\r
        ring.style.strokeDashoffset = String(100 - score);\r
      });\r
    }\r
\r
    function setBar(prefix, score, labelText) {\r
      const fill = document.getElementById(\`bar-\${prefix}\`);\r
      const label = document.getElementById(\`bar-\${prefix}-label\`);\r
      const tone = toneForScore(score);\r
\r
      if (label) {\r
        label.textContent = labelText;\r
        setToneClass(label, tone.textClass);\r
      }\r
\r
      if (fill) {\r
        fill.style.width = '0%';\r
        fill.classList.remove(...BAR_FILL_CLASSES);\r
        fill.classList.add(tone.barClass);\r
        requestAnimationFrame(() => {\r
          fill.style.width = \`\${score}%\`;\r
        });\r
      }\r
    }\r
\r
    function setAuditBusy(isBusy) {\r
      auditInFlight = isBusy;\r
      const button = document.getElementById('auditButton');\r
      const label = document.getElementById('auditButtonLabel');\r
      if (!button || !label) return;\r
      button.disabled = isBusy;\r
      button.classList.toggle('opacity-70', isBusy);\r
      button.classList.toggle('pointer-events-none', isBusy);\r
      label.textContent = isBusy ? getCopy().buttonRunning : label.getAttribute(\`data-\${currentLang}\`);\r
    }\r
\r
    function scoreFromCategory(value) {\r
      if (typeof value !== 'number' || Number.isNaN(value)) return 50;\r
      return clamp(Math.round(value * 100), 0, 100);\r
    }\r
\r
    function booleanAuditScore(audit, fallback = 50) {\r
      if (!audit) return fallback;\r
      if (typeof audit.score === 'number') {\r
        return audit.score <= 1 ? clamp(Math.round(audit.score * 100), 0, 100) : clamp(Math.round(audit.score), 0, 100);\r
      }\r
      return fallback;\r
    }\r
\r
    function metricCategoryToScore(category) {\r
      const value = String(category || '').toUpperCase();\r
      if (value === 'FAST' || value === 'GOOD') return 92;\r
      if (value === 'AVERAGE' || value === 'NEEDS_IMPROVEMENT') return 64;\r
      if (value === 'SLOW' || value === 'POOR') return 30;\r
      return null;\r
    }\r
\r
    function thresholdScore(value, good, okay) {\r
      if (!Number.isFinite(value)) return null;\r
      if (value <= good) return 92;\r
      if (value <= okay) return 64;\r
      return 30;\r
    }\r
\r
    function getLoadSeconds(audits) {\r
      const candidate = audits['interactive']?.numericValue\r
        || audits['largest-contentful-paint']?.numericValue\r
        || audits['speed-index']?.numericValue\r
        || audits['first-contentful-paint']?.numericValue;\r
      if (!Number.isFinite(candidate)) return 3.4;\r
      return Math.max(0.1, candidate / 1000);\r
    }\r
\r
    function mapLoadTimeToScore(seconds) {\r
      if (seconds <= 1.8) return 95;\r
      if (seconds <= 2.5) return 85;\r
      if (seconds <= 4) return 70;\r
      if (seconds <= 6) return 52;\r
      if (seconds <= 8) return 36;\r
      return 22;\r
    }\r
\r
    function formatSeconds(seconds) {\r
      return \`\${seconds.toFixed(1)}s\`;\r
    }\r
\r
    function hashString(input) {\r
      let hash = 0;\r
      for (const char of input) {\r
        hash = ((hash << 5) - hash) + char.charCodeAt(0);\r
        hash |= 0;\r
      }\r
      return Math.abs(hash);\r
    }\r
\r
    function seededOffset(input, range) {\r
      const spread = (range * 2) + 1;\r
      return (hashString(input) % spread) - range;\r
    }\r
\r
    function estimatedSecondsFromScore(score) {\r
      return Number((7.8 - (clamp(score, 0, 100) * 0.062)).toFixed(1));\r
    }\r
\r
    function getWeakestCategory(categories) {\r
      return Object.entries(categories).sort((a, b) => a[1] - b[1])[0][0];\r
    }\r
\r
    function buildHeadline(score) {\r
      const headlines = getCopy().headlines;\r
      if (score >= 88) return headlines.excellent;\r
      if (score >= 72) return headlines.good;\r
      if (score >= 55) return headlines.average;\r
      return headlines.poor;\r
    }\r
\r
    function getInsight(audit) {\r
      const insight = getCopy().insights[audit.weakest];\r
      const body = audit.source === 'live'\r
        ? insight.bodyLive(formatSeconds(audit.metrics.loadSeconds))\r
        : insight.bodyEstimate;\r
      return { title: insight.title, body };\r
    }\r
\r
    function getCtaCopy(audit) {\r
      return audit.overall >= 80 ? getCopy().cta.polish : getCopy().cta.rebuild;\r
    }\r
\r
    /* Mobile menu */\r
    const mmbtn = document.getElementById('mobileMenuBtn');\r
    const mmenu = document.getElementById('mobileMenu');\r
    function toggleMobileMenu() { mmenu.classList.toggle('hidden'); }\r
    function closeMobileMenu() { mmenu.classList.add('hidden'); }\r
    document.addEventListener('click', e => {\r
      if (!mmbtn.contains(e.target) && !mmenu.contains(e.target)) closeMobileMenu();\r
    });\r
    mmenu.querySelectorAll('a').forEach(l => l.addEventListener('click', closeMobileMenu));\r
\r
    /* Scroll reveal */\r
    const obs = new IntersectionObserver(entries => {\r
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });\r
    }, { threshold: 0.12 });\r
    document.querySelectorAll('.section-fade').forEach(el => obs.observe(el));\r
\r
    function buildLiveAudit(url, payload) {\r
      const lighthouse = payload?.lighthouseResult || {};\r
      const categories = lighthouse.categories || {};\r
      const audits = lighthouse.audits || {};\r
      const finalUrl = lighthouse.finalDisplayedUrl || lighthouse.finalUrl || url;\r
\r
      const speed = scoreFromCategory(categories.performance?.score);\r
      const accessibility = scoreFromCategory(categories.accessibility?.score);\r
      const seo = scoreFromCategory(categories.seo?.score);\r
      const bestPractices = scoreFromCategory(categories['best-practices']?.score);\r
      const viewport = booleanAuditScore(audits.viewport, 60);\r
      const tapTargets = booleanAuditScore(audits['tap-targets'], 60);\r
      const mobile = clamp(Math.round((accessibility * 0.55) + (speed * 0.25) + (viewport * 0.1) + (tapTargets * 0.1)), 0, 100);\r
      const security = clamp(Math.round((bestPractices * 0.82) + (finalUrl.startsWith('https://') ? 18 : 0)), 0, 100);\r
\r
      const vitalsFieldScores = [\r
        metricCategoryToScore(payload?.loadingExperience?.metrics?.LARGEST_CONTENTFUL_PAINT_MS?.category),\r
        metricCategoryToScore(payload?.loadingExperience?.metrics?.INTERACTION_TO_NEXT_PAINT?.category),\r
        metricCategoryToScore(payload?.loadingExperience?.metrics?.CUMULATIVE_LAYOUT_SHIFT_SCORE?.category)\r
      ].filter(Number.isFinite);\r
\r
      const vitalsLabScores = [\r
        thresholdScore(audits['largest-contentful-paint']?.numericValue, 2500, 4000),\r
        thresholdScore(audits['interaction-to-next-paint']?.numericValue, 200, 500),\r
        thresholdScore(audits['cumulative-layout-shift']?.numericValue, 0.1, 0.25)\r
      ].filter(Number.isFinite);\r
\r
      const vitalsScore = clamp(Math.round(average(vitalsFieldScores.length ? vitalsFieldScores : vitalsLabScores, 58)), 0, 100);\r
      const loadSeconds = getLoadSeconds(audits);\r
      const loadScore = clamp(Math.round((speed * 0.7) + (mapLoadTimeToScore(loadSeconds) * 0.3)), 0, 100);\r
      const overall = clamp(Math.round((speed * 0.34) + (mobile * 0.26) + (seo * 0.2) + (security * 0.2)), 0, 100);\r
      const scoreSet = { speed, mobile, seo, security };\r
\r
      return {\r
        source: 'live',\r
        displayUrl: cleanDisplayUrl(finalUrl),\r
        overall,\r
        categories: scoreSet,\r
        weakest: getWeakestCategory(scoreSet),\r
        metrics: { loadSeconds, loadScore, vitalsScore, mobileScore: mobile, seoScore: seo }\r
      };\r
    }\r
\r
    function buildEstimatedAudit(url, snapshot, durationMs) {\r
      const parsed = new URL(url);\r
      const host = parsed.hostname.replace(/^www\\./i, '');\r
      const rawContent = snapshot?.content || '';\r
      const textContent = rawContent.replace(/[#>*_\`[\\]()]/g, ' ');\r
      const words = textContent.split(/\\s+/).filter(Boolean);\r
      const wordCount = words.length;\r
      const headingCount = (rawContent.match(/^#{1,6}\\s/gm) || []).length;\r
      const linkCount = (rawContent.match(/\\[[^\\]]+\\]\\([^)]+\\)/g) || []).length;\r
      const titleLength = (snapshot?.title || '').trim().length;\r
      const descriptionLength = (snapshot?.description || '').trim().length;\r
      const hasViewport = /width=device-width/i.test(snapshot?.metadata?.viewport || '');\r
      const hasLang = Boolean(snapshot?.metadata?.lang);\r
      const hasError = /error|not found|blocked/i.test(snapshot?.warning || '');\r
      const isIp = /^\\d{1,3}(\\.\\d{1,3}){3}$/.test(parsed.hostname);\r
      const crawlSeconds = Math.max(0.3, durationMs / 1000);\r
\r
      const speed = clamp(mapLoadTimeToScore(crawlSeconds) + seededOffset(\`\${host}:speed:\${wordCount}\`, 6) - (hasError ? 8 : 0), 24, 92);\r
      const mobile = clamp(\r
        35 + (hasViewport ? 28 : 0) + (headingCount >= 2 ? 12 : 0) + (wordCount >= 150 ? 10 : wordCount >= 60 ? 5 : 0)\r
        + (linkCount >= 2 ? 8 : 0) + seededOffset(\`\${host}:mobile:\${headingCount}\`, 5) - (hasError ? 6 : 0),\r
        24,\r
        94\r
      );\r
      const seo = clamp(\r
        25 + (titleLength >= 20 && titleLength <= 60 ? 22 : titleLength ? 10 : 0)\r
        + (descriptionLength >= 70 && descriptionLength <= 160 ? 22 : descriptionLength ? 10 : 0)\r
        + (hasLang ? 8 : 0) + (headingCount >= 2 ? 8 : 0)\r
        + (wordCount >= 200 ? 10 : wordCount >= 80 ? 5 : 0) + (linkCount >= 2 ? 5 : 0)\r
        + seededOffset(\`\${host}:seo:\${titleLength}\`, 6) - (hasError ? 10 : 0),\r
        20,\r
        95\r
      );\r
      const security = clamp(\r
        (parsed.protocol === 'https:' ? 70 : 36) + (!isIp ? 8 : -12) + (!parsed.username && !parsed.password ? 4 : -8)\r
        + (!snapshot?.warning ? 6 : 0) + seededOffset(\`\${host}:security\`, 4),\r
        20,\r
        92\r
      );\r
\r
      const vitalsScore = clamp(Math.round((speed * 0.55) + (mobile * 0.45) + seededOffset(\`\${host}:vitals\`, 4)), 24, 90);\r
      const overall = clamp(Math.round((speed * 0.3) + (mobile * 0.27) + (seo * 0.23) + (security * 0.2)), 0, 100);\r
      const scoreSet = { speed, mobile, seo, security };\r
\r
      return {\r
        source: 'estimate',\r
        displayUrl: cleanDisplayUrl(snapshot?.url || url),\r
        overall,\r
        categories: scoreSet,\r
        weakest: getWeakestCategory(scoreSet),\r
        metrics: { loadSeconds: crawlSeconds, loadScore: speed, vitalsScore, mobileScore: mobile, seoScore: seo }\r
      };\r
    }\r
\r
    function buildBaselineAudit(url) {\r
      const parsed = new URL(url);\r
      const host = parsed.hostname.replace(/^www\\./i, '');\r
      const hostLength = host.length;\r
      const pathDepth = parsed.pathname.split('/').filter(Boolean).length;\r
      const hasQuery = Boolean(parsed.search);\r
      const hasHyphens = (host.match(/-/g) || []).length;\r
      const isIp = /^\\d{1,3}(\\.\\d{1,3}){3}$/.test(parsed.hostname);\r
\r
      const speed = clamp(55 + (parsed.protocol === 'https:' ? 8 : -6) - (pathDepth * 4) - (hasQuery ? 6 : 0) - (hostLength > 22 ? 6 : 0) + seededOffset(\`\${host}:baseline-speed\`, 10), 24, 84);\r
      const mobile = clamp(58 + (pathDepth === 0 ? 8 : 0) - (pathDepth * 3) - (hasQuery ? 4 : 0) + seededOffset(\`\${host}:baseline-mobile\`, 8), 26, 86);\r
      const seo = clamp(54 + (pathDepth === 0 ? 10 : 0) + (hasHyphens === 0 ? 6 : -6) - (hostLength > 22 ? 8 : 0) - (hasQuery ? 4 : 0) + seededOffset(\`\${host}:baseline-seo\`, 9), 24, 86);\r
      const security = clamp((parsed.protocol === 'https:' ? 78 : 42) - (isIp ? 16 : 0) - (hasQuery ? 5 : 0) + seededOffset(\`\${host}:baseline-security\`, 6), 22, 92);\r
      const overall = clamp(Math.round((speed * 0.3) + (mobile * 0.25) + (seo * 0.23) + (security * 0.22)), 0, 100);\r
      const scoreSet = { speed, mobile, seo, security };\r
\r
      return {\r
        source: 'baseline',\r
        displayUrl: cleanDisplayUrl(url),\r
        overall,\r
        categories: scoreSet,\r
        weakest: getWeakestCategory(scoreSet),\r
        metrics: {\r
          loadSeconds: estimatedSecondsFromScore(speed),\r
          loadScore: speed,\r
          vitalsScore: clamp(Math.round((mobile * 0.55) + (speed * 0.45)), 24, 88),\r
          mobileScore: mobile,\r
          seoScore: seo\r
        }\r
      };\r
    }\r
\r
    async function buildAudit(url) {\r
      try {\r
        const endpoint = new URL('https://www.googleapis.com/pagespeedonline/v5/runPagespeed');\r
        endpoint.searchParams.set('url', url);\r
        endpoint.searchParams.set('strategy', 'mobile');\r
        ['performance', 'accessibility', 'best-practices', 'seo'].forEach(category => endpoint.searchParams.append('category', category));\r
        const livePayload = await fetchJson(endpoint.toString(), {}, 12000);\r
        if (livePayload?.lighthouseResult?.categories) return buildLiveAudit(url, livePayload);\r
      } catch (error) {\r
        console.info('Live PageSpeed audit unavailable, falling back to estimate.', error);\r
      }\r
\r
      try {\r
        const started = performance.now();\r
        const proxyUrl = \`https://r.jina.ai/http://\${encodeURIComponent(url)}\`;\r
        const crawlPayload = await fetchJson(proxyUrl, { headers: { Accept: 'application/json' } }, 12000);\r
        if (crawlPayload?.data) return buildEstimatedAudit(url, crawlPayload.data, performance.now() - started);\r
      } catch (error) {\r
        console.info('Public crawl fallback unavailable, using baseline estimate.', error);\r
      }\r
\r
      return buildBaselineAudit(url);\r
    }\r
\r
    function renderAudit(audit) {\r
      const scoreSet = audit.categories;\r
      const overallTone = toneForScore(audit.overall);\r
      const sourceKey = audit.source === 'live' ? 'live' : audit.source === 'estimate' ? 'estimate' : 'baseline';\r
      const barTitles = getCopy().barTitles[audit.source === 'live' ? 'live' : 'estimate'];\r
      const insight = getInsight(audit);\r
      const cta = getCtaCopy(audit);\r
\r
      setText('resultsHeadline', buildHeadline(audit.overall));\r
      setText('auditUrl', audit.displayUrl);\r
      setText('auditMeta', getCopy().mode[sourceKey]);\r
      setText('overallScore', String(audit.overall));\r
      setToneClass(document.getElementById('overallScore'), overallTone.textClass);\r
\r
      ['speed', 'mobile', 'seo', 'security'].forEach(key => {\r
        const score = scoreSet[key];\r
        const tone = toneForScore(score);\r
        setText(\`score-\${key}\`, String(score));\r
        setText(\`status-\${key}\`, labelForScore(score));\r
        setToneClass(document.getElementById(\`score-\${key}\`), tone.textClass);\r
        setToneClass(document.getElementById(\`status-\${key}\`), tone.textClass);\r
        animateRing(\`ring-\${key}\`, score, tone.stroke);\r
      });\r
\r
      setText('bar-load-title', barTitles.load);\r
      setText('bar-vitals-title', barTitles.vitals);\r
      setText('bar-mobile-title', barTitles.mobile);\r
      setText('bar-seo-title', barTitles.seo);\r
\r
      setBar('load', audit.metrics.loadScore, \`\${formatSeconds(audit.metrics.loadSeconds)} — \${labelForScore(audit.metrics.loadScore)}\`);\r
      setBar('vitals', audit.metrics.vitalsScore, labelForScore(audit.metrics.vitalsScore));\r
      setBar('mobile', audit.metrics.mobileScore, labelForScore(audit.metrics.mobileScore));\r
      setBar('seo', audit.metrics.seoScore, labelForScore(audit.metrics.seoScore));\r
\r
      setText('insightTitle', insight.title);\r
      setText('insightBody', insight.body);\r
      setText('ctaTitle', cta.title);\r
      setText('ctaBody', cta.body);\r
\r
      const insightBox = document.getElementById('insightBox');\r
      if (insightBox) {\r
        insightBox.classList.remove('warn-bg', 'info-bg');\r
        insightBox.classList.add(scoreSet[audit.weakest] < 60 || audit.overall < 70 ? 'warn-bg' : 'info-bg');\r
      }\r
\r
      document.getElementById('scanningState').classList.add('hidden');\r
      document.getElementById('resultsState').classList.remove('hidden');\r
    }\r
\r
    async function runAudit() {\r
      if (auditInFlight) return;\r
\r
      const input = document.getElementById('urlInput');\r
      const raw = input.value.trim();\r
      if (!raw) {\r
        pulseInput(input);\r
        return;\r
      }\r
\r
      let url;\r
      try {\r
        url = normalizeUrl(raw);\r
      } catch {\r
        pulseInput(input);\r
        return;\r
      }\r
\r
      const panel = document.getElementById('auditPanel');\r
      const scan = document.getElementById('scanningState');\r
      const result = document.getElementById('resultsState');\r
\r
      panel.classList.remove('hidden');\r
      scan.classList.remove('hidden');\r
      result.classList.add('hidden');\r
      panel.scrollIntoView({ behavior: 'smooth', block: 'center' });\r
\r
      setAuditBusy(true);\r
      const started = performance.now();\r
\r
      try {\r
        const audit = await buildAudit(url);\r
        lastAuditState = audit;\r
        const elapsed = performance.now() - started;\r
        if (elapsed < 1200) await wait(1200 - elapsed);\r
        renderAudit(audit);\r
        result.scrollIntoView({ behavior: 'smooth', block: 'start' });\r
      } finally {\r
        setAuditBusy(false);\r
      }\r
    }\r
\r
    /* Navbar blur */\r
    window.addEventListener('scroll', () => {\r
      document.getElementById('navbar').style.backdropFilter = window.scrollY > 20 ? 'blur(24px)' : 'blur(18px)';\r
    });\r
\r
    /* Smooth anchors */\r
    document.querySelectorAll('a[href^="#"]').forEach(a => {\r
      a.addEventListener('click', e => {\r
        const t = document.querySelector(a.getAttribute('href'));\r
        if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }\r
      });\r
    });\r
\r
    document.getElementById('urlInput').addEventListener('keydown', e => {\r
      if (e.key === 'Enter') {\r
        e.preventDefault();\r
        runAudit();\r
      }\r
    });\r
\r
    const formNextUrl = document.getElementById('formNextUrl');\r
    const formOriginUrl = document.getElementById('formOriginUrl');\r
    if (formNextUrl) formNextUrl.value = \`\${window.location.href.split('#')[0]}#contact\`;\r
    if (formOriginUrl) formOriginUrl.value = window.location.href.split('#')[0];\r
\r
    /* Form submit feedback */\r
    document.getElementById('contactForm').addEventListener('submit', async function (e) {\r
      e.preventDefault();\r
      const form = this;\r
      const btn = form.querySelector('button[type="submit"]');\r
      const orig = btn.innerHTML;\r
      const endpoint = form.dataset.ajaxEndpoint;\r
\r
      setFormStatus();\r
      btn.innerHTML = \`<i class="fas fa-spinner fa-spin"></i>&nbsp;\${getCopy().formSending}\`;\r
      btn.disabled = true;\r
\r
      try {\r
        const response = await fetch(endpoint, {\r
          method: 'POST',\r
          headers: { Accept: 'application/json' },\r
          body: new FormData(form)\r
        });\r
\r
        const result = await response.json().catch(() => ({}));\r
        if (!response.ok || result.success === false || result.success === 'false') {\r
          throw new Error(result.message || 'Form submission failed');\r
        }\r
\r
        btn.innerHTML = \`<i class="fas fa-check"></i>&nbsp;\${getCopy().formSent}\`;\r
        btn.style.background = '#10B981';\r
        setFormStatus(getCopy().formSuccess, 'success');\r
        form.reset();\r
        if (formNextUrl) formNextUrl.value = \`\${window.location.href.split('#')[0]}#contact\`;\r
        if (formOriginUrl) formOriginUrl.value = window.location.href.split('#')[0];\r
      } catch (error) {\r
        console.error('Contact form submission failed.', error);\r
        btn.style.background = '#EF4444';\r
        setFormStatus(getCopy().formError, 'error');\r
      } finally {\r
        setTimeout(() => {\r
          btn.innerHTML = orig;\r
          btn.disabled = false;\r
          btn.style.background = '';\r
        }, 2500);\r
      }\r
    });\r
\r
    applyLanguage();\r
  <\/script>\r
\r
  <script type="application/ld+json">\r
{\r
  "@context": "https://schema.org",\r
  "@type": "Person",\r
  "name": "Stoyan Tanev",\r
  "jobTitle": "Freelance Web Designer and Developer",\r
  "description": "Freelance web designer and developer from Plovdiv, Bulgaria focused on fast, affordable websites, UI/UX, and AI-assisted workflows.",\r
  "url": "https://sitesonar.dev",\r
  "telephone": "+359895469386",\r
  "email": "stoyanbtanev@gmail.com",\r
  "address": { "@type": "PostalAddress", "addressLocality": "Plovdiv", "addressCountry": "BG" },\r
  "sameAs": ["https://www.linkedin.com/in/stoyan-tanev-a732603b8/"],\r
  "knowsAbout": ["Web Design", "Web Development", "UI/UX", "AI Workflows", "Landing Pages", "Website Redesign"],\r
  "areaServed": ["Bulgaria", "Worldwide"]\r
}\r
<\/script>\r
\r
  <!-- ═══ PARTICLE SYSTEM — Antigravity-style confetti sparks ═══ -->\r
  <script>\r
    (function () {\r
      const canvas = document.getElementById('particleCanvas');\r
      if (!canvas) return;\r
      const ctx = canvas.getContext('2d');\r
      const dpr = Math.min(window.devicePixelRatio || 1, 2);\r
      let w, h;\r
      let particles = [];\r
      let mouseX = -9999, mouseY = -9999;\r
      let mouseActive = false;\r
\r
      /* ── Color palettes ── */\r
      const DARK_COLORS = [\r
        [0, 212, 255],   // cyan\r
        [0, 119, 255],   // blue\r
        [124, 58, 237],  // purple\r
        [0, 196, 140],   // teal\r
        [99, 179, 237],  // sky\r
        [167, 139, 250], // lavender\r
      ];\r
      const LIGHT_COLORS = [\r
        [0, 85, 204],    // blue\r
        [124, 58, 237],  // purple\r
        [220, 38, 38],   // red\r
        [202, 138, 4],   // amber\r
        [5, 150, 105],   // emerald\r
        [37, 99, 235],   // royal blue\r
      ];\r
\r
      /* ── Poisson Disk Sampling for organic distribution ── */\r
      function poissonDiskSampling(width, height, minDist, maxTries) {\r
        const cellSize = minDist / Math.SQRT2;\r
        const cols = Math.ceil(width / cellSize);\r
        const rows = Math.ceil(height / cellSize);\r
        const grid = new Array(cols * rows).fill(-1);\r
        const points = [];\r
        const active = [];\r
\r
        function gridIndex(x, y) {\r
          return Math.floor(x / cellSize) + Math.floor(y / cellSize) * cols;\r
        }\r
\r
        function addPoint(x, y) {\r
          const idx = points.length;\r
          points.push([x, y]);\r
          active.push(idx);\r
          grid[gridIndex(x, y)] = idx;\r
        }\r
\r
        function isValid(x, y) {\r
          if (x < 0 || x >= width || y < 0 || y >= height) return false;\r
          const col = Math.floor(x / cellSize);\r
          const row = Math.floor(y / cellSize);\r
          for (let dy = -2; dy <= 2; dy++) {\r
            for (let dx = -2; dx <= 2; dx++) {\r
              const c = col + dx, r = row + dy;\r
              if (c < 0 || c >= cols || r < 0 || r >= rows) continue;\r
              const idx = grid[c + r * cols];\r
              if (idx === -1) continue;\r
              const [px, py] = points[idx];\r
              const ddx = x - px, ddy = y - py;\r
              if (ddx * ddx + ddy * ddy < minDist * minDist) return false;\r
            }\r
          }\r
          return true;\r
        }\r
\r
        // Seed\r
        addPoint(width / 2, height / 2);\r
\r
        while (active.length > 0) {\r
          const randIdx = Math.floor(Math.random() * active.length);\r
          const [sx, sy] = points[active[randIdx]];\r
          let found = false;\r
          for (let t = 0; t < maxTries; t++) {\r
            const angle = Math.random() * Math.PI * 2;\r
            const radius = minDist + Math.random() * minDist;\r
            const nx = sx + Math.cos(angle) * radius;\r
            const ny = sy + Math.sin(angle) * radius;\r
            if (isValid(nx, ny)) {\r
              addPoint(nx, ny);\r
              found = true;\r
              break;\r
            }\r
          }\r
          if (!found) active.splice(randIdx, 1);\r
        }\r
        return points;\r
      }\r
\r
      /* ── Resize & seed particles ── */\r
      function resize() {\r
        w = window.innerWidth;\r
        h = window.innerHeight;\r
        canvas.width = w * dpr;\r
        canvas.height = h * dpr;\r
        canvas.style.width = w + 'px';\r
        canvas.style.height = h + 'px';\r
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);\r
        seedParticles();\r
      }\r
\r
      function seedParticles() {\r
        particles = [];\r
        // Adjust density: ~55px spacing on desktop, sparser on mobile\r
        const minDist = w < 600 ? 70 : 55;\r
        const points = poissonDiskSampling(w, h, minDist, 30);\r
\r
        points.forEach(([x, y]) => {\r
          const colorIdx = Math.floor(Math.random() * DARK_COLORS.length);\r
          particles.push({\r
            x, y,\r
            homeX: x,\r
            homeY: y,\r
            vx: 0,\r
            vy: 0,\r
            colorIdx,\r
            length: Math.random() * 3.5 + 1.5,     // spark length\r
            baseAngle: (Math.random() * 0.8 + 0.3) * (Math.random() < 0.5 ? 1 : -1), // diagonal tilt\r
            alpha: Math.random() * 0.45 + 0.15,\r
            phase: Math.random() * Math.PI * 2,\r
            wanderRadiusX: Math.random() * 14 + 8,\r
            wanderRadiusY: Math.random() * 10 + 6,\r
            wanderSpeed: Math.random() * 0.015 + 0.008,\r
            wanderOffset: Math.random() * Math.PI * 2,\r
            cursorPull: Math.random() * 0.45 + 0.9,\r
            cursorShift: Math.random() * 0.6 + 0.6,\r
          });\r
        });\r
      }\r
\r
      /* ── Mouse tracking ── */\r
      const MOUSE_RADIUS = 180;\r
      const MOUSE_FORCE = 0.22;\r
      const FRICTION = 0.9;\r
      const RETURN_FORCE = 0.025;\r
      const MAX_SPEED = 2.6;\r
\r
      function setPointer(x, y) {\r
        mouseX = x;\r
        mouseY = y;\r
        mouseActive = true;\r
      }\r
\r
      function clearPointer() {\r
        mouseActive = false;\r
        mouseX = -9999;\r
        mouseY = -9999;\r
      }\r
\r
      window.addEventListener('pointermove', e => {\r
        setPointer(e.clientX, e.clientY);\r
      }, { passive: true });\r
      window.addEventListener('pointerdown', e => {\r
        setPointer(e.clientX, e.clientY);\r
      }, { passive: true });\r
      window.addEventListener('mouseout', e => {\r
        if (!e.relatedTarget) clearPointer();\r
      });\r
      window.addEventListener('blur', clearPointer);\r
\r
      /* ── Main draw loop ── */\r
      function draw() {\r
        ctx.clearRect(0, 0, w, h);\r
        const dark = document.documentElement.classList.contains('dark');\r
        const palette = dark ? DARK_COLORS : LIGHT_COLORS;\r
        const globalAlphaMul = dark ? 1 : 0.7; // slightly softer in light mode\r
        const cursorShiftX = mouseActive ? (mouseX - w * 0.5) * 0.035 : 0;\r
        const cursorShiftY = mouseActive ? (mouseY - h * 0.5) * 0.028 : 0;\r
\r
        for (let i = 0; i < particles.length; i++) {\r
          const p = particles[i];\r
          p.phase += p.wanderSpeed;\r
\r
          const anchorX = p.homeX\r
            + Math.cos(p.phase + p.wanderOffset) * p.wanderRadiusX\r
            + cursorShiftX * p.cursorShift;\r
          const anchorY = p.homeY\r
            + Math.sin((p.phase * 1.25) + p.wanderOffset) * p.wanderRadiusY\r
            + cursorShiftY * p.cursorShift;\r
\r
          // Cursor pull\r
          if (mouseActive) {\r
            const dx = mouseX - p.x;\r
            const dy = mouseY - p.y;\r
            const distSq = dx * dx + dy * dy;\r
            if (distSq < MOUSE_RADIUS * MOUSE_RADIUS && distSq > 0.01) {\r
              const dist = Math.sqrt(distSq);\r
              const force = (1 - dist / MOUSE_RADIUS) * MOUSE_FORCE;\r
              p.vx += (dx / dist) * force * p.cursorPull;\r
              p.vy += (dy / dist) * force * p.cursorPull;\r
            }\r
          }\r
\r
          // Return to a moving anchor so the field never feels static.\r
          p.vx += (anchorX - p.x) * RETURN_FORCE;\r
          p.vy += (anchorY - p.y) * RETURN_FORCE;\r
\r
          // Friction\r
          p.vx *= FRICTION;\r
          p.vy *= FRICTION;\r
\r
          const speed = Math.hypot(p.vx, p.vy);\r
          if (speed > MAX_SPEED) {\r
            const scale = MAX_SPEED / speed;\r
            p.vx *= scale;\r
            p.vy *= scale;\r
          }\r
\r
          // Update position\r
          p.x += p.vx;\r
          p.y += p.vy;\r
\r
          // Pulse alpha\r
          const pulse = Math.sin((p.phase * 2.1) + p.wanderOffset) * 0.2 + 0.8;\r
\r
          // Draw spark as a tiny diagonal line\r
          const [r, g, b] = palette[p.colorIdx % palette.length];\r
          const a = p.alpha * pulse * globalAlphaMul;\r
          const halfLen = p.length;\r
          const drawAngle = p.baseAngle + p.vx * 0.12;\r
          const cosA = Math.cos(drawAngle) * halfLen;\r
          const sinA = Math.sin(drawAngle) * halfLen;\r
\r
          ctx.beginPath();\r
          ctx.moveTo(p.x - cosA, p.y - sinA);\r
          ctx.lineTo(p.x + cosA, p.y + sinA);\r
          ctx.strokeStyle = \`rgba(\${r},\${g},\${b},\${a})\`;\r
          ctx.lineWidth = 1.2;\r
          ctx.lineCap = 'round';\r
          ctx.stroke();\r
        }\r
\r
        requestAnimationFrame(draw);\r
      }\r
\r
      /* ── Init ── */\r
      let resizeTimer;\r
      window.addEventListener('resize', () => {\r
        clearTimeout(resizeTimer);\r
        resizeTimer = setTimeout(resize, 200);\r
      });\r
      resize();\r
      draw();\r
    })();\r
  <\/script>\r
`;function Vd(){return jd.useEffect(()=>{localStorage.getItem("ss-theme")==="light"?document.documentElement.classList.remove("dark"):document.documentElement.classList.add("dark");const W=async()=>{try{await Mu(()=>import("./site-Cv9v65uF.js"),[]),console.log("✓ Site logic loaded")}catch(fe){console.error("Error loading site logic:",fe)}},m=async()=>{try{await Mu(()=>import("./particles-BEBFvgqX.js"),[]),console.log("✓ Particle animation loaded")}catch(fe){console.error("Error loading particles:",fe)}};W(),setTimeout(m,1500)},[]),zu.jsx("div",{dangerouslySetInnerHTML:{__html:Wd}})}Ud.createRoot(document.getElementById("root")).render(zu.jsx(Vd,{}));
