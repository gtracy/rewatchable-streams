import{R as An,r as kn}from"./index-B3YZSa2Y.js";import{H as fE,C as EE}from"./hls-CVipC02f.js";import{C as Wn,M as _E}from"./mixin-BVQkmF-_.js";var bE=Object.create,zm=Object.defineProperty,gE=Object.getOwnPropertyDescriptor,yE=Object.getOwnPropertyNames,TE=Object.getPrototypeOf,AE=Object.prototype.hasOwnProperty,Qm=function(t,e){return function(){return t&&(e=t(t=0)),e}},lt=function(t,e){return function(){return e||t((e={exports:{}}).exports,e),e.exports}},kE=function(t,e,i,a){if(e&&typeof e=="object"||typeof e=="function")for(var r=yE(e),n=0,s=r.length,o;n<s;n++)o=r[n],!AE.call(t,o)&&o!==i&&zm(t,o,{get:(function(l){return e[l]}).bind(null,o),enumerable:!(a=gE(e,o))||a.enumerable});return t},SE=function(t,e,i){return i=t!=null?bE(TE(t)):{},kE(!t||!t.__esModule?zm(i,"default",{value:t,enumerable:!0}):i,t)};function fa(t,e){return e!=null&&typeof Symbol<"u"&&e[Symbol.hasInstance]?!!e[Symbol.hasInstance](t):fa(t,e)}var Ea=Qm(function(){Ea()});function fu(t){"@swc/helpers - typeof";return t&&typeof Symbol<"u"&&t.constructor===Symbol?"symbol":typeof t}var Eu=Qm(function(){}),Zm=lt(function(t,e){var i=Array.prototype.slice;e.exports=a;function a(r,n){for(("length"in r)||(r=[r]),r=i.call(r);r.length;){var s=r.shift(),o=n(s);if(o)return o;s.childNodes&&s.childNodes.length&&(r=i.call(s.childNodes).concat(r))}}}),wE=lt(function(t,e){Ea(),e.exports=i;function i(a,r){if(!fa(this,i))return new i(a,r);this.data=a,this.nodeValue=a,this.length=a.length,this.ownerDocument=r||null}i.prototype.nodeType=8,i.prototype.nodeName="#comment",i.prototype.toString=function(){return"[object Comment]"}}),IE=lt(function(t,e){Ea(),e.exports=i;function i(a,r){if(!fa(this,i))return new i(a);this.data=a||"",this.length=this.data.length,this.ownerDocument=r||null}i.prototype.type="DOMTextNode",i.prototype.nodeType=3,i.prototype.nodeName="#text",i.prototype.toString=function(){return this.data},i.prototype.replaceData=function(a,r,n){var s=this.data,o=s.substring(0,a),l=s.substring(a+r,s.length);this.data=o+n+l,this.length=this.data.length}}),Xm=lt(function(t,e){e.exports=i;function i(a){var r=this,n=a.type;a.target||(a.target=r),r.listeners||(r.listeners={});var s=r.listeners[n];if(s)return s.forEach(function(o){a.currentTarget=r,typeof o=="function"?o(a):o.handleEvent(a)});r.parentNode&&r.parentNode.dispatchEvent(a)}}),Jm=lt(function(t,e){e.exports=i;function i(a,r){var n=this;n.listeners||(n.listeners={}),n.listeners[a]||(n.listeners[a]=[]),n.listeners[a].indexOf(r)===-1&&n.listeners[a].push(r)}}),ep=lt(function(t,e){e.exports=i;function i(a,r){var n=this;if(n.listeners&&n.listeners[a]){var s=n.listeners[a],o=s.indexOf(r);o!==-1&&s.splice(o,1)}}}),RE=lt(function(t,e){Eu(),e.exports=a;var i=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"];function a(c){switch(c.nodeType){case 3:return m(c.data);case 8:return"<!--"+c.data+"-->";default:return r(c)}}function r(c){var u=[],v=c.tagName;return c.namespaceURI==="http://www.w3.org/1999/xhtml"&&(v=v.toLowerCase()),u.push("<"+v+d(c)+o(c)),i.indexOf(v)>-1?u.push(" />"):(u.push(">"),c.childNodes.length?u.push.apply(u,c.childNodes.map(a)):c.textContent||c.innerText?u.push(m(c.textContent||c.innerText)):c.innerHTML&&u.push(c.innerHTML),u.push("</"+v+">")),u.join("")}function n(c,u){var v=fu(c[u]);return u==="style"&&Object.keys(c.style).length>0?!0:c.hasOwnProperty(u)&&(v==="string"||v==="boolean"||v==="number")&&u!=="nodeName"&&u!=="className"&&u!=="tagName"&&u!=="textContent"&&u!=="innerText"&&u!=="namespaceURI"&&u!=="innerHTML"}function s(c){if(typeof c=="string")return c;var u="";return Object.keys(c).forEach(function(v){var g=c[v];v=v.replace(/[A-Z]/g,function(_){return"-"+_.toLowerCase()}),u+=v+":"+g+";"}),u}function o(c){var u=c.dataset,v=[];for(var g in u)v.push({name:"data-"+g,value:u[g]});return v.length?l(v):""}function l(c){var u=[];return c.forEach(function(v){var g=v.name,_=v.value;g==="style"&&(_=s(_)),u.push(g+'="'+p(_)+'"')}),u.length?" "+u.join(" "):""}function d(c){var u=[];for(var v in c)n(c,v)&&u.push({name:v,value:c[v]});for(var g in c._attributes)for(var _ in c._attributes[g]){var y=c._attributes[g][_],f=(y.prefix?y.prefix+":":"")+_;u.push({name:f,value:y.value})}return c.className&&u.push({name:"class",value:c.className}),u.length?l(u):""}function m(c){var u="";return typeof c=="string"?u=c:c&&(u=c.toString()),u.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function p(c){return m(c).replace(/"/g,"&quot;")}}),tp=lt(function(t,e){Ea();var i=Zm(),a=Xm(),r=Jm(),n=ep(),s=RE(),o="http://www.w3.org/1999/xhtml";e.exports=l;function l(d,m,p){if(!fa(this,l))return new l(d);var c=p===void 0?o:p||null;this.tagName=c===o?String(d).toUpperCase():d,this.nodeName=this.tagName,this.className="",this.dataset={},this.childNodes=[],this.parentNode=null,this.style={},this.ownerDocument=m||null,this.namespaceURI=c,this._attributes={},this.tagName==="INPUT"&&(this.type="text")}l.prototype.type="DOMElement",l.prototype.nodeType=1,l.prototype.appendChild=function(d){return d.parentNode&&d.parentNode.removeChild(d),this.childNodes.push(d),d.parentNode=this,d},l.prototype.replaceChild=function(d,m){d.parentNode&&d.parentNode.removeChild(d);var p=this.childNodes.indexOf(m);return m.parentNode=null,this.childNodes[p]=d,d.parentNode=this,m},l.prototype.removeChild=function(d){var m=this.childNodes.indexOf(d);return this.childNodes.splice(m,1),d.parentNode=null,d},l.prototype.insertBefore=function(d,m){d.parentNode&&d.parentNode.removeChild(d);var p=m==null?-1:this.childNodes.indexOf(m);return p>-1?this.childNodes.splice(p,0,d):this.childNodes.push(d),d.parentNode=this,d},l.prototype.setAttributeNS=function(d,m,p){var c=null,u=m,v=m.indexOf(":");if(v>-1&&(c=m.substr(0,v),u=m.substr(v+1)),this.tagName==="INPUT"&&m==="type")this.type=p;else{var g=this._attributes[d]||(this._attributes[d]={});g[u]={value:p,prefix:c}}},l.prototype.getAttributeNS=function(d,m){var p=this._attributes[d],c=p&&p[m]&&p[m].value;return this.tagName==="INPUT"&&m==="type"?this.type:typeof c!="string"?null:c},l.prototype.removeAttributeNS=function(d,m){var p=this._attributes[d];p&&delete p[m]},l.prototype.hasAttributeNS=function(d,m){var p=this._attributes[d];return!!p&&m in p},l.prototype.setAttribute=function(d,m){return this.setAttributeNS(null,d,m)},l.prototype.getAttribute=function(d){return this.getAttributeNS(null,d)},l.prototype.removeAttribute=function(d){return this.removeAttributeNS(null,d)},l.prototype.hasAttribute=function(d){return this.hasAttributeNS(null,d)},l.prototype.removeEventListener=n,l.prototype.addEventListener=r,l.prototype.dispatchEvent=a,l.prototype.focus=function(){},l.prototype.toString=function(){return s(this)},l.prototype.getElementsByClassName=function(d){var m=d.split(" "),p=[];return i(this,function(c){if(c.nodeType===1){var u=c.className||"",v=u.split(" ");m.every(function(g){return v.indexOf(g)!==-1})&&p.push(c)}}),p},l.prototype.getElementsByTagName=function(d){d=d.toLowerCase();var m=[];return i(this.childNodes,function(p){p.nodeType===1&&(d==="*"||p.tagName.toLowerCase()===d)&&m.push(p)}),m},l.prototype.contains=function(d){return i(this,function(m){return d===m})||!1}}),CE=lt(function(t,e){Ea();var i=tp();e.exports=a;function a(r){if(!fa(this,a))return new a;this.childNodes=[],this.parentNode=null,this.ownerDocument=r||null}a.prototype.type="DocumentFragment",a.prototype.nodeType=11,a.prototype.nodeName="#document-fragment",a.prototype.appendChild=i.prototype.appendChild,a.prototype.replaceChild=i.prototype.replaceChild,a.prototype.removeChild=i.prototype.removeChild,a.prototype.toString=function(){return this.childNodes.map(function(r){return String(r)}).join("")}}),LE=lt(function(t,e){e.exports=i;function i(a){}i.prototype.initEvent=function(a,r,n){this.type=a,this.bubbles=r,this.cancelable=n},i.prototype.preventDefault=function(){}}),ME=lt(function(t,e){Ea();var i=Zm(),a=wE(),r=IE(),n=tp(),s=CE(),o=LE(),l=Xm(),d=Jm(),m=ep();e.exports=p;function p(){if(!fa(this,p))return new p;this.head=this.createElement("head"),this.body=this.createElement("body"),this.documentElement=this.createElement("html"),this.documentElement.appendChild(this.head),this.documentElement.appendChild(this.body),this.childNodes=[this.documentElement],this.nodeType=9}var c=p.prototype;c.createTextNode=function(u){return new r(u,this)},c.createElementNS=function(u,v){var g=u===null?null:String(u);return new n(v,this,g)},c.createElement=function(u){return new n(u,this)},c.createDocumentFragment=function(){return new s(this)},c.createEvent=function(u){return new o(u)},c.createComment=function(u){return new a(u,this)},c.getElementById=function(u){u=String(u);var v=i(this.childNodes,function(g){if(String(g.id)===u)return g});return v||null},c.getElementsByClassName=n.prototype.getElementsByClassName,c.getElementsByTagName=n.prototype.getElementsByTagName,c.contains=n.prototype.contains,c.removeEventListener=m,c.addEventListener=d,c.dispatchEvent=l}),DE=lt(function(t,e){var i=ME();e.exports=new i}),xE=lt(function(t,e){var i=typeof global<"u"?global:typeof window<"u"?window:{},a=DE(),r;typeof document<"u"?r=document:(r=i["__GLOBAL_DOCUMENT_CACHE@4"],r||(r=i["__GLOBAL_DOCUMENT_CACHE@4"]=a)),e.exports=r});function OE(t){if(Array.isArray(t))return t}function NE(t,e){var i=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(i!=null){var a=[],r=!0,n=!1,s,o;try{for(i=i.call(t);!(r=(s=i.next()).done)&&(a.push(s.value),!(e&&a.length===e));r=!0);}catch(l){n=!0,o=l}finally{try{!r&&i.return!=null&&i.return()}finally{if(n)throw o}}return a}}function PE(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jl(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,a=new Array(e);i<e;i++)a[i]=t[i];return a}function ip(t,e){if(t){if(typeof t=="string")return jl(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);if(i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set")return Array.from(i);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return jl(t,e)}}function Qe(t,e){return OE(t)||NE(t,e)||ip(t,e)||PE()}var UE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:{},V=UE,$E={now:function(){var t=V.performance,e=t&&t.timing,i=e&&e.navigationStart,a=typeof i=="number"&&typeof t.now=="function"?i+t.now():Date.now();return Math.round(a)}},Ne=$E,Sn=function(){var t,e,i;if(typeof((t=V.crypto)===null||t===void 0?void 0:t.getRandomValues)=="function"){i=new Uint8Array(32),V.crypto.getRandomValues(i);for(var a=0;a<32;a++)i[a]=i[a]%16}else{i=[];for(var r=0;r<32;r++)i[r]=Math.random()*16|0}var n=0;e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(l){var d=l==="x"?i[n]:i[n]&3|8;return n++,d.toString(16)});var s=Ne.now(),o=s?.toString(16).substring(3);return o?e.substring(0,28)+o:e},ap=function(){return("000000"+(Math.random()*Math.pow(36,6)<<0).toString(36)).slice(-6)},yt=function(t){if(t&&typeof t.nodeName<"u")return t.muxId||(t.muxId=ap()),t.muxId;var e;try{e=document.querySelector(t)}catch{}return e&&!e.muxId&&(e.muxId=t),e?.muxId||t},go=function(t){var e;t&&typeof t.nodeName<"u"?(e=t,t=yt(e)):e=document.querySelector(t);var i=e&&e.nodeName?e.nodeName.toLowerCase():"";return[e,t,i]};function HE(t){if(Array.isArray(t))return jl(t)}function BE(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function WE(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Tt(t){return HE(t)||BE(t)||ip(t)||WE()}var na={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4},FE=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:3,i,a,r,n,s,o=[console,t],l=(i=console.trace).bind.apply(i,Tt(o)),d=(a=console.info).bind.apply(a,Tt(o)),m=(r=console.debug).bind.apply(r,Tt(o)),p=(n=console.warn).bind.apply(n,Tt(o)),c=(s=console.error).bind.apply(s,Tt(o)),u=e;return{trace:function(){for(var v=arguments.length,g=new Array(v),_=0;_<v;_++)g[_]=arguments[_];if(!(u>na.TRACE))return l.apply(void 0,Tt(g))},debug:function(){for(var v=arguments.length,g=new Array(v),_=0;_<v;_++)g[_]=arguments[_];if(!(u>na.DEBUG))return m.apply(void 0,Tt(g))},info:function(){for(var v=arguments.length,g=new Array(v),_=0;_<v;_++)g[_]=arguments[_];if(!(u>na.INFO))return d.apply(void 0,Tt(g))},warn:function(){for(var v=arguments.length,g=new Array(v),_=0;_<v;_++)g[_]=arguments[_];if(!(u>na.WARN))return p.apply(void 0,Tt(g))},error:function(){for(var v=arguments.length,g=new Array(v),_=0;_<v;_++)g[_]=arguments[_];if(!(u>na.ERROR))return c.apply(void 0,Tt(g))},get level(){return u},set level(v){v!==this.level&&(u=v??e)}}},Y=FE("[mux]");function zl(){var t=V.doNotTrack||V.navigator&&V.navigator.doNotTrack;return t==="1"}function $(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}Ea();function de(t,e){if(!fa(t,e))throw new TypeError("Cannot call a class as a function")}function ch(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function Xe(t,e,i){return e&&ch(t.prototype,e),i&&ch(t,i),t}function A(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function hr(t){return hr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},hr(t)}function KE(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&(t=hr(t),t!==null););return t}function os(t,e,i){return typeof Reflect<"u"&&Reflect.get?os=Reflect.get:os=function(a,r,n){var s=KE(a,r);if(s){var o=Object.getOwnPropertyDescriptor(s,r);return o.get?o.get.call(n||a):o.value}},os(t,e,i||t)}function Ql(t,e){return Ql=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},Ql(t,e)}function _u(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Ql(t,e)}function VE(t,e){if(t==null)return{};var i={},a=Object.keys(t),r,n;for(n=0;n<a.length;n++)r=a[n],!(e.indexOf(r)>=0)&&(i[r]=t[r]);return i}function qE(t,e){if(t==null)return{};var i=VE(t,e),a,r;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}function YE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}Eu();function GE(t,e){return e&&(fu(e)==="object"||typeof e=="function")?e:$(t)}function bu(t){var e=YE();return function(){var i=hr(t),a;if(e){var r=hr(this).constructor;a=Reflect.construct(i,arguments,r)}else a=i.apply(this,arguments);return GE(this,a)}}var Ct=function(t){return wn(t)[0]},wn=function(t){if(typeof t!="string"||t==="")return["localhost"];var e=/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,i=t.match(e)||[],a=i[4],r;return a&&(r=(a.match(/[^\.]+\.[^\.]+$/)||[])[0]),[a,r]},jE={exists:function(){var t=V.performance,e=t&&t.timing;return e!==void 0},domContentLoadedEventEnd:function(){var t=V.performance,e=t&&t.timing;return e&&e.domContentLoadedEventEnd},navigationStart:function(){var t=V.performance,e=t&&t.timing;return e&&e.navigationStart}},yo=jE;function Le(t,e,i){i=i===void 0?1:i,t[e]=t[e]||0,t[e]+=i}function je(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{},a=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable}))),a.forEach(function(r){A(t,r,i[r])})}return t}function zE(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);i.push.apply(i,a)}return i}function gu(t,e){return e=e??{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):zE(Object(e)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))}),t}var QE=["x-cdn","content-type"],rp=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],ZE=QE.concat(rp);function yu(t){t=t||"";var e={},i=t.trim().split(/[\r\n]+/);return i.forEach(function(a){if(a){var r=a.split(": "),n=r.shift();n&&(ZE.indexOf(n.toLowerCase())>=0||n.toLowerCase().indexOf("x-litix-")===0)&&(e[n]=r.join(": "))}}),e}function To(t){if(t){var e=rp.find(function(i){return t[i]!==void 0});return e?t[e]:void 0}}var XE=function(t){var e={};for(var i in t){var a=t[i],r=a["DATA-ID"].search("io.litix.data.");if(r!==-1){var n=a["DATA-ID"].replace("io.litix.data.","");e[n]=a.VALUE}}return e},np=XE,JE=function(t){return!!t&&typeof t=="object"&&"length"in t&&typeof t.length=="number"},e_=function(t){return!!t&&typeof t=="object"&&"addEventListener"in t&&typeof t.addEventListener=="function"&&"removeEventListener"in t&&typeof t.removeEventListener=="function"},hh=["addtrack","removetrack","change"],t_=1,Tu=function(t,e){try{if(t&&e in t){var i=t[e];if(JE(i)&&e_(i))return i}}catch(a){Y.warn("Unable to access `"+e+"` on the media element.",a)}},Au=function(t,e,i){if(!(t.readyState<t_))return Array.prototype.find.call(e,i)||null},sp=function(t,e,i,a){var r=Tu(t,e);if(r){var n,s=function(){try{var l=Au(t,r,i);l!==void 0&&l!==n&&(n=l,a(n))}catch(d){Y.warn("Exception while checking `"+e+"` for changes.",d)}},o=function(){try{t.removeEventListener("loadedmetadata",s),t.removeEventListener("emptied",s),hh.forEach(function(l){return r.removeEventListener(l,s)})}catch(l){Y.warn("Unable to stop monitoring `"+e+"`.",l)}};try{hh.forEach(function(l){return r.addEventListener(l,s)}),t.addEventListener("loadedmetadata",s),t.addEventListener("emptied",s)}catch(l){Y.warn("Unable to monitor `"+e+"`.",l),o();return}return{refresh:s,destroy:o}}},ku=function(t){switch(t){case 1:return"mono";case 2:return"stereo";case 6:return"5.1";case 8:return"7.1"}return String(t)},op=function(t){var e,i;if(!t)return{player_audio_track_enabled:!1};var a={player_audio_track_enabled:!0};return t.label&&(a.player_audio_track_name=t.label),t.language&&(a.player_audio_track_language=t.language),!((e=t.configuration)===null||e===void 0)&&e.codec&&(a.player_audio_track_codec=t.configuration.codec),!((i=t.configuration)===null||i===void 0)&&i.numberOfChannels&&(a.player_audio_track_channels=ku(t.configuration.numberOfChannels)),a},lp=function(t){return t.enabled},i_=function(t){var e=Tu(t,"audioTracks");if(e){var i=Au(t,e,lp);return i===void 0?void 0:op(i)}if("mozHasAudio"in t&&typeof t.mozHasAudio=="boolean")return{player_audio_track_enabled:t.mozHasAudio}},a_=function(t){var e=t.mediaElement,i=t.onChange;return sp(e,"audioTracks",lp,function(a){return i(op(a))})},dp=function(t){switch(t){case"captions":return"cc";case"subtitles":case"forced":return"subtitles"}},up=function(t){return t.mode==="showing"&&dp(t.kind)!==void 0},r_=function(t,e){return Array.prototype.some.call(e.querySelectorAll("track"),function(i){return i.track===t})},n_=function(t,e){if(r_(t,e))return"webvtt"},cp=function(t,e){if(!t)return{player_text_track_enabled:!1};var i={player_text_track_enabled:!0},a=dp(t.kind);a&&(i.player_text_track_type=a);var r=n_(t,e);return r&&(i.player_text_track_format=r),t.label&&(i.player_text_track_name=t.label),t.language&&(i.player_text_track_language=t.language),i},s_=function(t){var e=Tu(t,"textTracks");if(e){var i=Au(t,e,up);if(i!==void 0)return cp(i,t)}},o_=function(t){var e=t.mediaElement,i=t.onChange;return sp(e,"textTracks",up,function(a){return i(cp(a,e))})},hp=function(t,e){var i=Object.keys(t),a=Object.keys(e);return i.length===a.length&&i.every(function(r){return Object.prototype.hasOwnProperty.call(e,r)&&t[r]===e[r]})},l_=function(t){if(t){if(t=String(t),t.endsWith("/JOC"))return"atmos";var e=parseInt(t,10);return String(e)===t?ku(e):t}},d_=function(t){if(t.length)return t[0].player_audio_track_enabled?t.reduce(function(e,i){return je({},i,e)}):{player_audio_track_enabled:!1}},u_=function(t){var e,i={player_audio_track_enabled:!0};t.name&&(i.player_audio_track_name=t.name),t.lang&&(i.player_audio_track_language=t.lang),t.audioCodec&&(i.player_audio_track_codec=t.audioCodec);var a=t.channels||((e=t.attrs)===null||e===void 0?void 0:e.CHANNELS),r=a&&l_(a);return r&&(i.player_audio_track_channels=r),i},c_=["mp4a","ac-3","ec-3","ac-4","opus","flac","alac"],h_=function(t){return t.split(",").map(function(e){return e.trim()}).find(function(e){return c_.indexOf(e.slice(0,4).toLowerCase())!==-1})},m_=function(t){var e,i={player_audio_track_enabled:!0};if(t.codec){var a=t.id==="audio"?t.codec:h_(t.codec);a&&(i.player_audio_track_codec=a)}if(!((e=t.metadata)===null||e===void 0)&&e.channelCount){var r;i.player_audio_track_channels=ku((r=t.metadata)===null||r===void 0?void 0:r.channelCount)}return i},p_=function(t){var e=t.find(function(a){return a.audio});if(e)return e.audio;var i=t.find(function(a){return a.audiovideo});return i?.audiovideo},v_=function(t,e){var i=["player_audio_track_name","player_audio_track_language"],a=!1,r=!0,n=!1,s=void 0;try{for(var o=i[Symbol.iterator](),l;!(r=(l=o.next()).done);r=!0){var d=l.value,m=t[d],p=e[d];if(m&&p){if(m!==p)return!1;a=!0}}}catch(c){n=!0,s=c}finally{try{!r&&o.return!=null&&o.return()}finally{if(n)throw s}}return a},f_=(function(){function t(e){var i=e.hls,a=e.Hls,r=e.onAudioTrackChange,n=this;de(this,t),A(this,"hls",void 0),A(this,"audioSwitchIsPlayheadBased",!1),A(this,"listeners",[]),A(this,"onAudioTrackChange",void 0),A(this,"previousEvent",void 0),A(this,"transition",void 0),this.onAudioTrackChange=r;var s=Qe(String(a?.version).split("."),2),o=s[0],l=s[1];if(o!=="1"){Y.warn("Unsupported hls.js version "+a?.version+" for audiotrackchange detection. Audio track changes are only reported from the media element.");return}var d=parseInt(l);isFinite(d)&&d>=7&&(this.audioSwitchIsPlayheadBased=!0);var m=a.Events||{},p,c=(p={},A(p,m.LEVEL_SWITCHING,this.onLevelSwitching),A(p,m.LEVEL_SWITCHED,this.onLevelSwitched),A(p,m.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching),A(p,m.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched),A(p,m.BUFFER_CODECS,this.onBufferCodecs),A(p,m.MANIFEST_LOADING,this.onManifestLoading),A(p,m.MEDIA_ATTACHED,this.onMediaAttached),A(p,m.MEDIA_DETACHING,this.onMediaDetaching),A(p,m.ERROR,this.onError),p);this.hls=i,this.addMediaElementMonitorOverride(),Object.keys(c).forEach(function(u){var v=c[u],g=function(_,y){try{v.call(n,_,y)}catch(f){Y.warn("Exception in hls.js "+_+" handler for audiotrackchange.",f)}};n.listeners.push([u,g]),i.on(u,g)})}return Xe(t,[{key:"addMediaElementMonitorOverride",value:function(){var e=this,i,a;!((a=this.hls)===null||a===void 0||(i=a.media)===null||i===void 0)&&i.mux&&(this.hls.media.mux.audioTrackChangeHandler=function(r){return e.onMediaElementMonitorEvent(r)})}},{key:"removeMediaElementMonitorOverride",value:function(){var e,i,a;(a=this.hls)===null||a===void 0||(i=a.media)===null||i===void 0||(e=i.mux)===null||e===void 0||delete e.audioTrackChangeHandler}},{key:"destroy",value:function(){var e=this.hls;e&&(this.removeMediaElementMonitorOverride(),this.hls=void 0,this.transition=void 0,this.listeners.forEach(function(i){var a=Qe(i,2),r=a[0],n=a[1];return e.off(r,n)}),this.listeners=[])}},{key:"onMediaElementMonitorEvent",value:function(e){this.transition&&(this.transition.mediaElementMonitorEvent=e)}},{key:"onManifestLoading",value:function(){this.transition=void 0}},{key:"onMediaAttached",value:function(){this.addMediaElementMonitorOverride()}},{key:"onMediaDetaching",value:function(){this.removeMediaElementMonitorOverride(),this.transition=void 0,this.previousEvent=void 0}},{key:"onError",value:function(e,i){i!=null&&i.fatal&&(this.transition=void 0)}},{key:"onLevelSwitching",value:function(e,i){this.transition=this.transition||{},this.transition.levelSwitching=je({},i),this.transition.levelSwitched&&(this.transition.levelSwitched=void 0,this.transition.bufferCodecs=void 0)}},{key:"onLevelSwitched",value:function(e,i){this.transition&&(this.transition.levelSwitched=je({},i),this.checkTransitionFinished())}},{key:"onBufferCodecs",value:function(e,i){this.transition&&(this.transition.bufferCodecs=this.transition.bufferCodecs||[],this.transition.bufferCodecs.push(je({},i)))}},{key:"onAudioTrackSwitching",value:function(e,i){var a,r,n;this.transition=this.transition||{},this.transition.audioTrackSwitching=je({},i);var s=typeof i?.id=="number"?i.id:(a=this.hls)===null||a===void 0?void 0:a.audioTrack;this.transition.audioTrackObj=(n=this.hls)===null||n===void 0||(r=n.audioTracks)===null||r===void 0?void 0:r[s],this.transition.audioTrackSwitched&&(this.transition.audioTrackSwitched=void 0,this.transition.bufferCodecs=void 0)}},{key:"onAudioTrackSwitched",value:function(e,i){this.transition&&(this.transition.audioTrackSwitched=je({},i),this.checkTransitionFinished())}},{key:"checkTransitionFinished",value:function(){var e,i,a,r=this.transition;if(r&&!(r.audioTrackSwitching&&!r.audioTrackSwitched)&&!(r.levelSwitching&&!r.levelSwitched)){this.transition=void 0;var n=r.audioTrackObj||((i=this.hls)===null||i===void 0||(e=i.audioTracks)===null||e===void 0?void 0:e[this.hls.audioTrack]),s=((a=r.bufferCodecs)===null||a===void 0?void 0:a.length)&&p_(r.bufferCodecs);if(!(n&&!r.audioTrackSwitched&&!s&&!r.mediaElementMonitorEvent)){var o=[],l=n&&u_(n);l&&o.push(l),s&&o.push(m_(s));var d=r.mediaElementMonitorEvent;if(!d){var m,p=(m=this.hls)===null||m===void 0?void 0:m.media;p&&(this.audioSwitchIsPlayheadBased||r.levelSwitched)&&(d=i_(p))}d&&(!l||v_(d,l))&&o.push(d);var c=d_(o);if(c){var u=this.previousEvent,v=!u||!!r.audioTrackSwitched||!hp(u,c);v&&(this.previousEvent=c,this.onAudioTrackChange(je({},c)))}}}}}]),t})(),E_=["public.accessibility.transcribes-spoken-dialog","public.accessibility.describes-music-and-sound"],__=function(t){if(t){var e=t.split(",").map(function(i){return i.trim()});if(E_.every(function(i){return e.indexOf(i)!==-1}))return"cc"}return"subtitles"},b_=function(t){if(t)return t==="wvtt"?"webvtt":t.indexOf("stpp")===0?"ttml":t},g_=function(t){var e,i={player_text_track_enabled:!0},a=__(t.characteristics||((e=t.attrs)===null||e===void 0?void 0:e.CHARACTERISTICS));a&&(i.player_text_track_type=a);var r=b_(t.textCodec);return r&&(i.player_text_track_format=r),t.name&&(i.player_text_track_name=t.name),t.lang&&(i.player_text_track_language=t.lang),i},y_=(function(){function t(e){var i=e.hls,a=e.Hls,r=e.onTextTrackChange,n=this;de(this,t),A(this,"hls",void 0),A(this,"listeners",[]),A(this,"onTextTrackChange",void 0),A(this,"levelSwitched",!1),A(this,"previousEvent",void 0),this.onTextTrackChange=r;var s=Qe(String(a?.version).split("."),1),o=s[0];if(o!=="1"){Y.warn("Unsupported hls.js version "+a?.version+" for texttrackchange detection. Text track changes are only reported from the media element.");return}var l=a.Events||{},d=[[l.LEVEL_SWITCHED,this.onLevelSwitched],[l.SUBTITLE_TRACKS_UPDATED,this.refresh],[l.SUBTITLE_TRACKS_CLEARED,this.refresh],[l.SUBTITLE_TRACK_SWITCH,this.refresh],[l.MEDIA_ATTACHED,this.onMediaAttached],[l.MEDIA_DETACHING,this.onMediaDetaching]];this.hls=i,this.addMediaElementMonitorOverride(),d.forEach(function(m){var p=Qe(m,2),c=p[0],u=p[1];if(c){var v=function(g){try{u.call(n)}catch(_){Y.warn("Exception in hls.js "+g+" handler for texttrackchange.",_)}};n.listeners.push([c,v]),i.on(c,v)}}),this.refresh()}return Xe(t,[{key:"addMediaElementMonitorOverride",value:function(){var e=this,i,a;!((a=this.hls)===null||a===void 0||(i=a.media)===null||i===void 0)&&i.mux&&(this.hls.media.mux.textTrackChangeHandler=function(r){return e.onMediaElementMonitorEvent(r)})}},{key:"removeMediaElementMonitorOverride",value:function(){var e,i,a;(a=this.hls)===null||a===void 0||(i=a.media)===null||i===void 0||(e=i.mux)===null||e===void 0||delete e.textTrackChangeHandler}},{key:"destroy",value:function(){var e=this.hls;e&&(this.removeMediaElementMonitorOverride(),this.hls=void 0,this.listeners.forEach(function(i){var a=Qe(i,2),r=a[0],n=a[1];return e.off(r,n)}),this.listeners=[])}},{key:"getSelectedSubtitleTrack",value:function(){var e,i=this.hls;if(!(!i||typeof i.subtitleTrack!="number"||i.subtitleTrack<0))return(e=i.subtitleTracks)===null||e===void 0?void 0:e[i.subtitleTrack]}},{key:"onMediaElementMonitorEvent",value:function(e){try{if(this.getSelectedSubtitleTrack())return;this.emit(e)}catch(i){Y.warn("Exception handling a media element text track change for hls.js.",i)}}},{key:"onLevelSwitched",value:function(){this.levelSwitched=!0,this.refresh()}},{key:"onMediaAttached",value:function(){this.addMediaElementMonitorOverride(),this.getSelectedSubtitleTrack()&&this.refresh()}},{key:"onMediaDetaching",value:function(){this.removeMediaElementMonitorOverride(),this.previousEvent=void 0}},{key:"isLevelSwitched",value:function(){var e,i=(e=this.hls)===null||e===void 0?void 0:e.currentLevel;return this.levelSwitched||typeof i=="number"&&i>=0}},{key:"refresh",value:function(){try{var e=this.hls;if(!e||!this.isLevelSwitched())return;var i=this.getSelectedSubtitleTrack();if(i){this.emit(g_(i));return}var a=e.media&&s_(e.media);a&&this.emit(a)}catch(r){Y.warn("Exception while refreshing the hls.js text track state.",r)}}},{key:"emit",value:function(e){this.previousEvent&&hp(this.previousEvent,e)||(this.previousEvent=e,this.onTextTrackChange(je({},e)))}}]),t})(),Fn=function(t){if(!t)return{};var e=yo.navigationStart(),i=t.loading,a=i?i.start:t.trequest,r=i?i.first:t.tfirst,n=i?i.end:t.tload;return{bytesLoaded:t.total,requestStart:Math.round(e+a),responseStart:Math.round(e+r),responseEnd:Math.round(e+n)}},wr=function(t){if(!(!t||typeof t.getAllResponseHeaders!="function"))return yu(t.getAllResponseHeaders())},T_=function(t,e,i){var a=arguments.length>4?arguments[4]:void 0,r=t.log,n=t.utils.secondsToMs,s=function(f){var T=parseInt(a.version),I;return T===1&&f.programDateTime!==null&&(I=f.programDateTime),T===0&&f.pdt!==null&&(I=f.pdt),I};if(!yo.exists()){r.warn("performance timing not supported. Not tracking HLS.js.");return}var o=function(f,T){return t.emit(e,f,T)},l=function(f,T){var I=T.levels,k=T.audioTracks,C=T.url,S=T.stats,P=T.networkDetails,q=T.sessionData,B={},W={};I.forEach(function(Se,we){B[we]={width:Se.width,height:Se.height,bitrate:Se.bitrate,attrs:Se.attrs}}),k.forEach(function(Se,we){W[we]={name:Se.name,language:Se.lang,bitrate:Se.bitrate}});var se=Fn(S),oe=se.bytesLoaded,He=se.requestStart,Je=se.responseStart,et=se.responseEnd;o("requestcompleted",gu(je({},np(q)),{request_event_type:f,request_bytes_loaded:oe,request_start:He,request_response_start:Je,request_response_end:et,request_type:"manifest",request_hostname:Ct(C),request_response_headers:wr(P),request_rendition_lists:{media:B,audio:W,video:{}}}))};i.on(a.Events.MANIFEST_LOADED,l);var d=function(f,T){var I=T.details,k=T.level,C=T.networkDetails,S=T.stats,P=Fn(S),q=P.bytesLoaded,B=P.requestStart,W=P.responseStart,se=P.responseEnd,oe=I.fragments[I.fragments.length-1],He=s(oe)+n(oe.duration);o("requestcompleted",{request_event_type:f,request_bytes_loaded:q,request_start:B,request_response_start:W,request_response_end:se,request_current_level:k,request_type:"manifest",request_hostname:Ct(I.url),request_response_headers:wr(C),video_holdback:I.holdBack&&n(I.holdBack),video_part_holdback:I.partHoldBack&&n(I.partHoldBack),video_part_target_duration:I.partTarget&&n(I.partTarget),video_target_duration:I.targetduration&&n(I.targetduration),video_source_is_live:I.live,player_manifest_newest_program_time:isNaN(He)?void 0:He})};i.on(a.Events.LEVEL_LOADED,d);var m=function(f,T){var I=T.details,k=T.networkDetails,C=T.stats,S=Fn(C),P=S.bytesLoaded,q=S.requestStart,B=S.responseStart,W=S.responseEnd;o("requestcompleted",{request_event_type:f,request_bytes_loaded:P,request_start:q,request_response_start:B,request_response_end:W,request_type:"manifest",request_hostname:Ct(I.url),request_response_headers:wr(k)})};i.on(a.Events.AUDIO_TRACK_LOADED,m);var p=function(f,T){var I=T.stats,k=T.networkDetails,C=T.frag;I=I||C.stats;var S=Fn(I),P=S.bytesLoaded,q=S.requestStart,B=S.responseStart,W=S.responseEnd,se=k?wr(k):void 0,oe={request_event_type:f,request_bytes_loaded:P,request_start:q,request_response_start:B,request_response_end:W,request_hostname:k?Ct(k.responseURL):void 0,request_id:se?To(se):void 0,request_response_headers:se,request_media_duration:C.duration,request_url:k?.responseURL};C.type==="main"?(oe.request_type="media",oe.request_current_level=C.level,oe.request_video_width=(i.levels[C.level]||{}).width,oe.request_video_height=(i.levels[C.level]||{}).height,oe.request_labeled_bitrate=(i.levels[C.level]||{}).bitrate):oe.request_type=C.type,o("requestcompleted",oe)};i.on(a.Events.FRAG_LOADED,p);var c=function(f,T){var I=T.frag,k=I.start,C=s(I),S={currentFragmentPDT:C,currentFragmentStart:n(k)};o("fragmentchange",S)};i.on(a.Events.FRAG_CHANGED,c);var u=function(f,T){var I=T.type,k=T.details,C=T.response,S=T.fatal,P=T.frag,q=T.networkDetails,B=P?.url||T.url||"",W=q?wr(q):void 0;if((k===a.ErrorDetails.MANIFEST_LOAD_ERROR||k===a.ErrorDetails.MANIFEST_LOAD_TIMEOUT||k===a.ErrorDetails.FRAG_LOAD_ERROR||k===a.ErrorDetails.FRAG_LOAD_TIMEOUT||k===a.ErrorDetails.LEVEL_LOAD_ERROR||k===a.ErrorDetails.LEVEL_LOAD_TIMEOUT||k===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||k===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||k===a.ErrorDetails.SUBTITLE_LOAD_ERROR||k===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT||k===a.ErrorDetails.KEY_LOAD_ERROR||k===a.ErrorDetails.KEY_LOAD_TIMEOUT)&&o("requestfailed",{request_error:k,request_url:B,request_hostname:Ct(B),request_id:W?To(W):void 0,request_type:k===a.ErrorDetails.FRAG_LOAD_ERROR||k===a.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":k===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||k===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":k===a.ErrorDetails.SUBTITLE_LOAD_ERROR||k===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":k===a.ErrorDetails.KEY_LOAD_ERROR||k===a.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:C?.code,request_error_text:C?.text}),S){var se,oe="".concat(B?"url: ".concat(B,`
`):"")+"".concat(C&&(C.code||C.text)?"response: ".concat(C.code,", ").concat(C.text,`
`):"")+"".concat(T.reason?"failure reason: ".concat(T.reason,`
`):"")+"".concat(T.level?"level: ".concat(T.level,`
`):"")+"".concat(T.parent?"parent stream controller: ".concat(T.parent,`
`):"")+"".concat(T.buffer?"buffer length: ".concat(T.buffer,`
`):"")+"".concat(T.error?"error: ".concat(T.error,`
`):"")+"".concat(T.event?"event: ".concat(T.event,`
`):"")+"".concat(T.err?"error message: ".concat((se=T.err)===null||se===void 0?void 0:se.message,`
`):"");o("error",{player_error_code:I,player_error_message:k,player_error_context:oe})}};i.on(a.Events.ERROR,u);var v=function(f,T){var I=T.frag,k=I&&I._url||"";o("requestcanceled",{request_event_type:f,request_url:k,request_type:"media",request_hostname:Ct(k)})};i.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,v);var g=function(f,T){var I=T.level,k=i.levels[I];if(k&&k.attrs&&k.attrs.BANDWIDTH){var C=k.attrs.BANDWIDTH,S,P=parseFloat(k.attrs["FRAME-RATE"]);isNaN(P)||(S=P),C?o("renditionchange",{video_source_fps:S,video_source_bitrate:C,video_source_width:k.width,video_source_height:k.height,video_source_rendition_name:k.name,video_source_codec:k?.videoCodec}):r.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};i.on(a.Events.LEVEL_SWITCHED,g);var _=new f_({hls:i,Hls:a,onAudioTrackChange:function(f){o("audiotrackchange",f)}}),y=new y_({hls:i,Hls:a,onTextTrackChange:function(f){o("texttrackchange",f)}});i._stopMuxMonitor=function(){i.off(a.Events.MANIFEST_LOADED,l),i.off(a.Events.LEVEL_LOADED,d),i.off(a.Events.AUDIO_TRACK_LOADED,m),i.off(a.Events.FRAG_LOADED,p),i.off(a.Events.FRAG_CHANGED,c),i.off(a.Events.ERROR,u),i.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,v),i.off(a.Events.LEVEL_SWITCHED,g),i.off(a.Events.DESTROYING,i._stopMuxMonitor),_.destroy(),y.destroy(),delete i._stopMuxMonitor},i.on(a.Events.DESTROYING,i._stopMuxMonitor)},A_=function(t){t&&typeof t._stopMuxMonitor=="function"&&t._stopMuxMonitor()},mh=function(t,e){if(!t||!t.requestEndDate)return{};var i=Ct(t.url),a=t.url,r=t.bytesLoaded,n=new Date(t.requestStartDate).getTime(),s=new Date(t.firstByteDate).getTime(),o=new Date(t.requestEndDate).getTime(),l=isNaN(t.duration)?0:t.duration,d=typeof e.getMetricsFor=="function"?e.getMetricsFor(t.mediaType).HttpList:e.getDashMetrics().getHttpRequests(t.mediaType),m;d.length>0&&(m=yu(d[d.length-1]._responseHeaders||""));var p=m?To(m):void 0;return{requestStart:n,requestResponseStart:s,requestResponseEnd:o,requestBytesLoaded:r,requestResponseHeaders:m,requestMediaDuration:l,requestHostname:i,requestUrl:a,requestId:p}},k_=function(t,e){if(typeof e.getCurrentRepresentationForType=="function"){var i=e.getCurrentRepresentationForType(t);return i?{currentLevel:i.absoluteIndex,renditionWidth:i.width||null,renditionHeight:i.height||null,renditionBitrate:i.bandwidth}:{}}var a=e.getQualityFor(t),r=e.getCurrentTrackFor(t).bitrateList;return r?{currentLevel:a,renditionWidth:r[a].width||null,renditionHeight:r[a].height||null,renditionBitrate:r[a].bandwidth}:{}},S_=function(t){var e;return(e=t.match(/.*codecs\*?="(.*)"/))===null||e===void 0?void 0:e[1]},w_=function(t){try{var e,i,a=(i=t.getVersion)===null||i===void 0||(e=i.call(t))===null||e===void 0?void 0:e.split(".").map(function(r){return parseInt(r)})[0];return a}catch{return!1}},I_=function(t,e,i){var a=t.log;if(!i||!i.on){a.warn("Invalid dash.js player reference. Monitoring blocked.");return}var r=w_(i),n=function(f,T){return t.emit(e,f,T)},s=function(f){var T=f.type,I=f.data,k=(I||{}).url;n("requestcompleted",{request_event_type:T,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:Ct(k),request_url:k})};i.on("manifestLoaded",s);var o={},l=function(f){if(typeof f.getRequests!="function")return null;var T=f.getRequests({state:"executed"});return T.length===0?null:T[T.length-1]},d=function(f){var T=f.type,I=f.fragmentModel,k=f.chunk,C=l(I);m({type:T,request:C,chunk:k})},m=function(f){var T=f.type,I=f.chunk,k=f.request,C=(I||{}).mediaInfo,S=C||{},P=S.type,q=S.bitrateList;q=q||[];var B={};q.forEach(function(tt,Me){B[Me]={},B[Me].width=tt.width,B[Me].height=tt.height,B[Me].bitrate=tt.bandwidth,B[Me].attrs={}}),P==="video"?o.video=B:P==="audio"?o.audio=B:o.media=B;var W=mh(k,i),se=W.requestStart,oe=W.requestResponseStart,He=W.requestResponseEnd,Je=W.requestResponseHeaders,et=W.requestMediaDuration,Se=W.requestHostname,we=W.requestUrl,Et=W.requestId;n("requestcompleted",{request_event_type:T,request_start:se,request_response_start:oe,request_response_end:He,request_bytes_loaded:-1,request_type:P+"_init",request_response_headers:Je,request_hostname:Se,request_id:Et,request_url:we,request_media_duration:et,request_rendition_lists:o})};r>=4?i.on("initFragmentLoaded",m):i.on("initFragmentLoaded",d);var p=function(f){var T=f.type,I=f.fragmentModel,k=f.chunk,C=l(I);c({type:T,request:C,chunk:k})},c=function(f){var T=f.type,I=f.chunk,k=f.request,C=I||{},S=C.mediaInfo,P=C.start,q=S||{},B=q.type,W=mh(k,i),se=W.requestStart,oe=W.requestResponseStart,He=W.requestResponseEnd,Je=W.requestBytesLoaded,et=W.requestResponseHeaders,Se=W.requestMediaDuration,we=W.requestHostname,Et=W.requestUrl,tt=W.requestId,Me=k_(B,i),ii=Me.currentLevel,Be=Me.renditionWidth,Ke=Me.renditionHeight,ai=Me.renditionBitrate;n("requestcompleted",{request_event_type:T,request_start:se,request_response_start:oe,request_response_end:He,request_bytes_loaded:Je,request_type:B,request_response_headers:et,request_hostname:we,request_id:tt,request_url:Et,request_media_start_time:P,request_media_duration:Se,request_current_level:ii,request_labeled_bitrate:ai,request_video_width:Be,request_video_height:Ke})};r>=4?i.on("mediaFragmentLoaded",c):i.on("mediaFragmentLoaded",p);var u={video:void 0,audio:void 0,totalBitrate:void 0},v=function(){if(u.video&&typeof u.video.bitrate=="number"){if(!(u.video.width&&u.video.height)){a.warn("have bitrate info for video but missing width/height");return}var f=u.video.bitrate;if(u.audio&&typeof u.audio.bitrate=="number"&&(f+=u.audio.bitrate),f!==u.totalBitrate)return u.totalBitrate=f,{video_source_bitrate:f,video_source_height:u.video.height,video_source_width:u.video.width,video_source_codec:S_(u.video.codec)}}},g=function(f,T,I){var k=f.mediaType;if(k==="audio"||k==="video"){var C;if(typeof i.getRepresentationsByType=="function")if(f.newRepresentation)C={bitrate:f.newRepresentation.bandwidth,width:f.newRepresentation.width,height:f.newRepresentation.height,qualityIndex:f.newRepresentation.absoluteIndex};else{var S=i.getRepresentationsByType(k);if(S&&typeof f.newQuality=="number"){var P=S.find(function(B){return B.absoluteIndex===f.newQuality||B.index===f.newQuality});P&&(C={bitrate:P.bandwidth,width:P.width,height:P.height,qualityIndex:f.newQuality})}}else{if(typeof f.newQuality!="number"){a.warn("missing evt.newQuality in qualityChangeRendered event",f);return}C=i.getBitrateInfoListFor(k).find(function(B){var W=B.qualityIndex;return W===f.newQuality})}if(!(C&&typeof C.bitrate=="number")){a.warn("missing bitrate info for ".concat(k));return}u[k]=gu(je({},C),{codec:i.getCurrentTrackFor(k).codec});var q=v();q&&n("renditionchange",q)}};i.on("qualityChangeRendered",g);var _=function(f){var T=f.request,I=f.mediaType;T=T||{},n("requestcanceled",{request_event_type:T.type+"_"+T.action,request_url:T.url,request_type:I,request_hostname:Ct(T.url)})};i.on("fragmentLoadingAbandoned",_);var y=function(f){var T=f.error,I,k,C=(T==null||(I=T.data)===null||I===void 0?void 0:I.request)||{},S=(T==null||(k=T.data)===null||k===void 0?void 0:k.response)||{};T?.code===27&&n("requestfailed",{request_error:C.type+"_"+C.action,request_url:C.url,request_hostname:Ct(C.url),request_type:C.mediaType,request_error_code:S.status,request_error_text:S.statusText});var P="".concat(C!=null&&C.url?"url: ".concat(C.url,`
`):"")+"".concat(S!=null&&S.status||S!=null&&S.statusText?"response: ".concat(S?.status,", ").concat(S?.statusText,`
`):"");n("error",{player_error_code:T?.code,player_error_message:T?.message,player_error_context:P})};i.on("error",y),i._stopMuxMonitor=function(){i.off("manifestLoaded",s),i.off("initFragmentLoaded",m),i.off("mediaFragmentLoaded",c),i.off("qualityChangeRendered",g),i.off("error",y),i.off("fragmentLoadingAbandoned",_),delete i._stopMuxMonitor}},R_=function(t){t&&typeof t._stopMuxMonitor=="function"&&t._stopMuxMonitor()},ph=0,C_=(function(){function t(){de(this,t),A(this,"_listeners",void 0)}return Xe(t,[{key:"on",value:function(e,i,a){return i._eventEmitterGuid=i._eventEmitterGuid||++ph,this._listeners=this._listeners||{},this._listeners[e]=this._listeners[e]||[],a&&(i=i.bind(a)),this._listeners[e].push(i),i}},{key:"off",value:function(e,i){var a=this._listeners&&this._listeners[e];a&&a.forEach(function(r,n){r._eventEmitterGuid===i._eventEmitterGuid&&a.splice(n,1)})}},{key:"one",value:function(e,i,a){var r=this;i._eventEmitterGuid=i._eventEmitterGuid||++ph;var n=function(){r.off(e,n),i.apply(a||this,arguments)};n._eventEmitterGuid=i._eventEmitterGuid,this.on(e,n)}},{key:"emit",value:function(e,i){var a=this;if(this._listeners){i=i||{};var r=this._listeners["before"+e]||[],n=this._listeners["before*"]||[],s=this._listeners[e]||[],o=this._listeners["after"+e]||[],l=function(d,m){d=d.slice(),d.forEach(function(p){p.call(a,{type:e},m)})};l(r,i),l(n,i),l(s,i),l(o,i)}}}]),t})(),L_=C_,M_=(function(){function t(e){var i=this;de(this,t),A(this,"_playbackHeartbeatInterval",void 0),A(this,"_playheadShouldBeProgressing",void 0),A(this,"pm",void 0),this.pm=e,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,e.on("playing",function(){i._playheadShouldBeProgressing=!0}),e.on("play",this._startPlaybackHeartbeatInterval.bind(this)),e.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),e.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),e.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),e.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),e.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),e.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),e.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),e.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("seeked",function(){e.data.player_is_paused?i._stopPlaybackHeartbeatInterval():i._startPlaybackHeartbeatInterval()}),e.on("timeupdate",function(){i._playbackHeartbeatInterval!==null&&e.emit("playbackheartbeat")}),e.on("devicesleep",function(a,r){i._playbackHeartbeatInterval!==null&&(V.clearInterval(i._playbackHeartbeatInterval),e.emit("playbackheartbeatend",{viewer_time:r.viewer_time}),i._playbackHeartbeatInterval=null)})}return Xe(t,[{key:"_startPlaybackHeartbeatInterval",value:function(){var e=this;this._playbackHeartbeatInterval===null&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=V.setInterval(function(){e.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,this._playbackHeartbeatInterval!==null&&(V.clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),t})(),D_=M_,x_=function t(e){var i=this;de(this,t),A(this,"viewErrored",void 0),e.on("viewinit",function(){i.viewErrored=!1}),e.on("error",function(a,r){try{var n=e.errorTranslator({player_error_code:r.player_error_code,player_error_message:r.player_error_message,player_error_context:r.player_error_context,player_error_severity:r.player_error_severity,player_error_business_exception:r.player_error_business_exception});n&&(e.data.player_error_code=n.player_error_code||r.player_error_code,e.data.player_error_message=n.player_error_message||r.player_error_message,e.data.player_error_context=n.player_error_context||r.player_error_context,e.data.player_error_severity=n.player_error_severity||r.player_error_severity,e.data.player_error_business_exception=n.player_error_business_exception||r.player_error_business_exception,i.viewErrored=!0)}catch(s){e.mux.log.warn("Exception in error translator callback.",s),i.viewErrored=!0}}),e.on("aftererror",function(){var a,r,n,s,o;(a=e.data)===null||a===void 0||delete a.player_error_code,(r=e.data)===null||r===void 0||delete r.player_error_message,(n=e.data)===null||n===void 0||delete n.player_error_context,(s=e.data)===null||s===void 0||delete s.player_error_severity,(o=e.data)===null||o===void 0||delete o.player_error_business_exception})},O_=x_,N_=(function(){function t(e){de(this,t),A(this,"_watchTimeTrackerLastCheckedTime",void 0),A(this,"pm",void 0),this.pm=e,this._watchTimeTrackerLastCheckedTime=null,e.on("playbackheartbeat",this._updateWatchTime.bind(this)),e.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return Xe(t,[{key:"_updateWatchTime",value:function(e,i){var a=i.viewer_time;this._watchTimeTrackerLastCheckedTime===null&&(this._watchTimeTrackerLastCheckedTime=a),Le(this.pm.data,"view_watch_time",a-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=a}},{key:"_clearWatchTimeState",value:function(e,i){this._updateWatchTime(e,i),this._watchTimeTrackerLastCheckedTime=null}}]),t})(),P_=N_,U_=(function(){function t(e){var i=this;de(this,t),A(this,"_playbackTimeTrackerLastPlayheadPosition",void 0),A(this,"_lastTime",void 0),A(this,"_isAdPlaying",void 0),A(this,"_callbackUpdatePlaybackTime",void 0),A(this,"pm",void 0),this.pm=e,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=Ne.now(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null,e.on("viewinit",function(){i.pm.data.view_playing_time_ms_cumulative=0});var a=this._startPlaybackTimeTracking.bind(this);e.on("playing",a),e.on("adplaying",a);var r=function(){i.pm.data.player_is_paused||a()};e.on("seeked",r),e.on("rebufferend",r);var n=this._stopPlaybackTimeTracking.bind(this);e.on("playbackheartbeatend",n),e.on("seeking",n),e.on("rebufferstart",n),e.on("adplaying",function(){i._isAdPlaying=!0}),e.on("adended",function(){i._isAdPlaying=!1}),e.on("adpause",function(){i._isAdPlaying=!1}),e.on("adbreakstart",function(){i._isAdPlaying=!1}),e.on("adbreakend",function(){i._isAdPlaying=!1}),e.on("adplay",function(){i._isAdPlaying=!1}),e.on("viewinit",function(){i._playbackTimeTrackerLastPlayheadPosition=-1,i._lastTime=Ne.now(),i._isAdPlaying=!1,i._callbackUpdatePlaybackTime=null})}return Xe(t,[{key:"_startPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime===null&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this._lastTime=Ne.now(),this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var e=this.pm.data.player_playhead_time||0,i=Ne.now(),a=i-this._lastTime,r=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&e>this._playbackTimeTrackerLastPlayheadPosition?r=e-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(r=a),r>0&&r<=1e3&&Le(this.pm.data,"view_content_playback_time",r),this._callbackUpdatePlaybackTime!==null&&a>0&&a<=1e3&&(this._isAdPlaying&&Le(this.pm.data,"ad_playing_time_ms_cumulative",a),Le(this.pm.data,"view_playing_time_ms_cumulative",a)),this._playbackTimeTrackerLastPlayheadPosition=e,this._lastTime=i}}]),t})(),$_=U_,H_=(function(){function t(e){de(this,t),A(this,"pm",void 0),this.pm=e;var i=this._updatePlayheadTime.bind(this);e.on("playbackheartbeat",i),e.on("playbackheartbeatend",i),e.on("timeupdate",i),e.on("destroy",function(){e.off("timeupdate",i)})}return Xe(t,[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=typeof this.pm.data.view_max_playhead_position>"u"?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(e,i){var a=this,r=function(){a.pm.currentFragmentPDT&&a.pm.currentFragmentStart&&(a.pm.data.player_program_time=a.pm.currentFragmentPDT+a.pm.data.player_playhead_time-a.pm.currentFragmentStart)};if(i&&i.player_playhead_time)this.pm.data.player_playhead_time=i.player_playhead_time,r(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var n=this.pm.getPlayheadTime();typeof n<"u"&&(this.pm.data.player_playhead_time=n,r(),this._updateMaxPlayheadPosition())}}}]),t})(),B_=H_,vh=300*1e3,W_=function t(e){if(de(this,t),!e.disableRebufferTracking){var i,a=function(n,s){r(s),i=void 0},r=function(n){if(i){var s=n.viewer_time-i;Le(e.data,"view_rebuffer_duration",s),i=n.viewer_time,e.data.view_rebuffer_duration>vh&&(e.emit("viewend"),e.send("viewend"),e.mux.log.warn("Ending view after rebuffering for longer than ".concat(vh,"ms, future events will be ignored unless a programchange or videochange occurs.")))}e.data.view_watch_time>=0&&e.data.view_rebuffer_count>0&&(e.data.view_rebuffer_frequency=e.data.view_rebuffer_count/e.data.view_watch_time,e.data.view_rebuffer_percentage=e.data.view_rebuffer_duration/e.data.view_watch_time)};e.on("playbackheartbeat",function(n,s){return r(s)}),e.on("rebufferstart",function(n,s){i||(Le(e.data,"view_rebuffer_count",1),i=s.viewer_time,e.one("rebufferend",a))}),e.on("viewinit",function(){i=void 0,e.off("rebufferend",a)})}},F_=W_,K_=(function(){function t(e){var i=this;de(this,t),A(this,"_lastCheckedTime",void 0),A(this,"_lastPlayheadTime",void 0),A(this,"_lastPlayheadTimeUpdatedTime",void 0),A(this,"_rebuffering",void 0),A(this,"pm",void 0),this.pm=e,!(e.disableRebufferTracking||e.disablePlayheadRebufferTracking)&&(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,e.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),e.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),e.on("seeking",function(){i._cleanupRebufferTracker(null,{viewer_time:Ne.now()})}))}return Xe(t,[{key:"_checkIfRebuffering",value:function(e,i){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing){this._cleanupRebufferTracker(e,i);return}if(this._lastCheckedTime===null){this._prepareRebufferTrackerState(i.viewer_time);return}if(this._lastPlayheadTime!==this.pm.data.player_playhead_time){this._cleanupRebufferTracker(e,i,!0);return}var a=i.viewer_time-this._lastPlayheadTimeUpdatedTime;typeof this.pm.sustainedRebufferThreshold=="number"&&a>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=i.viewer_time}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(e){this._lastCheckedTime=e,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=e}},{key:"_cleanupRebufferTracker",value:function(e,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:i.viewer_time});else{if(this._lastCheckedTime===null)return;var r=this.pm.data.player_playhead_time-this._lastPlayheadTime,n=i.viewer_time-this._lastPlayheadTimeUpdatedTime;typeof this.pm.minimumRebufferDuration=="number"&&r>0&&n-r>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+n-r}))}a?this._prepareRebufferTrackerState(i.viewer_time):this._clearRebufferTrackerState()}}]),t})(),V_=K_,q_=(function(){function t(e){var i=this;de(this,t),A(this,"pm",void 0),this.pm=e,e.on("viewinit",function(){var a=e.data,r=a.view_id;if(!a.view_program_changed){var n=function(s,o){var l=o.viewer_time;(s.type==="playing"&&typeof e.data.view_time_to_first_frame>"u"||s.type==="adplaying"&&(typeof e.data.view_time_to_first_frame>"u"||i._inPrerollPosition()))&&i.calculateTimeToFirstFrame(l||Ne.now(),r)};e.one("playing",n),e.one("adplaying",n),e.one("viewend",function(){e.off("playing",n),e.off("adplaying",n)})}})}return Xe(t,[{key:"_inPrerollPosition",value:function(){return typeof this.pm.data.view_content_playback_time>"u"||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(e,i){i===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:e}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.pm.pageLoadInitTime&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.pm.pageLoadInitTime))}}]),t})(),Y_=q_,G_=function t(e){var i=this;de(this,t),A(this,"_lastPlayerHeight",void 0),A(this,"_lastPlayerWidth",void 0),A(this,"_lastPlayheadPosition",void 0),A(this,"_lastSourceHeight",void 0),A(this,"_lastSourceWidth",void 0),e.on("viewinit",function(){i._lastPlayheadPosition=-1});var a=["pause","rebufferstart","seeking","error","adbreakstart","hb","renditionchange","orientationchange","viewend","playbackmodechange"],r=["playing","hb","renditionchange","orientationchange","playbackmodechange"];a.forEach(function(n){e.on(n,function(){if(i._lastPlayheadPosition>=0&&e.data.player_playhead_time>=0&&i._lastPlayerWidth>=0&&i._lastSourceWidth>0&&i._lastPlayerHeight>=0&&i._lastSourceHeight>0){var s=e.data.player_playhead_time-i._lastPlayheadPosition;if(s<0){i._lastPlayheadPosition=-1;return}var o=Math.min(i._lastPlayerWidth/i._lastSourceWidth,i._lastPlayerHeight/i._lastSourceHeight),l=Math.max(0,o-1),d=Math.max(0,1-o);e.data.view_max_upscale_percentage=Math.max(e.data.view_max_upscale_percentage||0,l),e.data.view_max_downscale_percentage=Math.max(e.data.view_max_downscale_percentage||0,d),Le(e.data,"view_total_content_playback_time",s),Le(e.data,"view_total_upscaling",l*s),Le(e.data,"view_total_downscaling",d*s)}i._lastPlayheadPosition=-1})}),r.forEach(function(n){e.on(n,function(){i._lastPlayheadPosition=e.data.player_playhead_time,i._lastPlayerWidth=e.data.player_width,i._lastPlayerHeight=e.data.player_height,i._lastSourceWidth=e.data.video_source_width,i._lastSourceHeight=e.data.video_source_height})})},j_=G_,z_=2e3,Q_=function t(e){var i=this;de(this,t),A(this,"isSeeking",void 0),this.isSeeking=!1;var a=-1,r=function(){var n=Ne.now(),s=(e.data.viewer_time||n)-(a||n);Le(e.data,"view_seek_duration",s),e.data.view_max_seek_time=Math.max(e.data.view_max_seek_time||0,s),i.isSeeking=!1,a=-1};e.on("seeking",function(n,s){if(Object.assign(e.data,s),i.isSeeking&&s.viewer_time-a<=z_){a=s.viewer_time;return}i.isSeeking&&r(),i.isSeeking=!0,a=s.viewer_time,Le(e.data,"view_seek_count",1),e.send("seeking")}),e.on("seeked",function(){r()}),e.on("viewend",function(){i.isSeeking&&(r(),e.send("seeked")),i.isSeeking=!1,a=-1})},Z_=Q_,fh=function(t,e){t.push(e),t.sort(function(i,a){return i.viewer_time-a.viewer_time})},X_=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],J_=(function(){function t(e){var i=this;de(this,t),A(this,"_adHasPlayed",void 0),A(this,"_adRequests",void 0),A(this,"_adResponses",void 0),A(this,"_currentAdRequestNumber",void 0),A(this,"_currentAdResponseNumber",void 0),A(this,"_prerollPlayTime",void 0),A(this,"_wouldBeNewAdPlay",void 0),A(this,"isAdBreak",void 0),A(this,"pm",void 0),this.pm=e,e.on("viewinit",function(){i.isAdBreak=!1,i._currentAdRequestNumber=0,i._currentAdResponseNumber=0,i._adRequests=[],i._adResponses=[],i._adHasPlayed=!1,i._wouldBeNewAdPlay=!0,i._prerollPlayTime=void 0}),X_.forEach(function(r){return e.on(r,i._updateAdData.bind(i))});var a=function(){i.isAdBreak=!1};e.on("adbreakstart",function(){i.isAdBreak=!0}),e.on("play",a),e.on("playing",a),e.on("viewend",a),e.on("adrequest",function(r,n){n=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdRequestNumber++},n),fh(i._adRequests,n),Le(e.data,"view_ad_request_count"),i.inPrerollPosition()&&(e.data.view_preroll_requested=!0,i._adHasPlayed||Le(e.data,"view_preroll_request_count"))}),e.on("adresponse",function(r,n){n=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdResponseNumber++},n),fh(i._adResponses,n);var s=i.findAdRequest(n.ad_request_id);s&&Le(e.data,"view_ad_request_time",Math.max(0,n.viewer_time-s.viewer_time))}),e.on("adplay",function(r,n){i._adHasPlayed=!0,i._wouldBeNewAdPlay&&(i._wouldBeNewAdPlay=!1,Le(e.data,"view_ad_played_count")),i.inPrerollPosition()&&!e.data.view_preroll_played&&(e.data.view_preroll_played=!0,i._adRequests.length>0&&(e.data.view_preroll_request_time=Math.max(0,n.viewer_time-i._adRequests[0].viewer_time)),e.data.view_start&&(e.data.view_startup_preroll_request_time=Math.max(0,n.viewer_time-e.data.view_start)),i._prerollPlayTime=n.viewer_time)}),e.on("adplaying",function(r,n){i.inPrerollPosition()&&typeof e.data.view_preroll_load_time>"u"&&typeof i._prerollPlayTime<"u"&&(e.data.view_preroll_load_time=n.viewer_time-i._prerollPlayTime,e.data.view_startup_preroll_load_time=n.viewer_time-i._prerollPlayTime)}),e.on("adclicked",function(r,n){i._wouldBeNewAdPlay||Le(e.data,"view_ad_clicked_count")}),e.on("adskipped",function(r,n){i._wouldBeNewAdPlay||Le(e.data,"view_ad_skipped_count")}),e.on("adended",function(){i._wouldBeNewAdPlay=!0}),e.on("aderror",function(){i._wouldBeNewAdPlay=!0})}return Xe(t,[{key:"inPrerollPosition",value:function(){return typeof this.pm.data.view_content_playback_time>"u"||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(e){for(var i=0;i<this._adRequests.length;i++)if(this._adRequests[i].ad_request_id===e)return this._adRequests[i]}},{key:"_updateAdData",value:function(e,i){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&i.ad_tag_url){var a=Qe(wn(i.ad_tag_url),2),r=a[0],n=a[1];this.pm.data.view_preroll_ad_tag_domain=n,this.pm.data.view_preroll_ad_tag_hostname=r}if(!this.pm.data.view_preroll_ad_asset_hostname&&i.ad_asset_url){var s=Qe(wn(i.ad_asset_url),2),o=s[0],l=s[1];this.pm.data.view_preroll_ad_asset_domain=l,this.pm.data.view_preroll_ad_asset_hostname=o}this.pm.data.ad_type="preroll"}this.pm.data.ad_asset_url=i?.ad_asset_url,this.pm.data.ad_tag_url=i?.ad_tag_url,this.pm.data.ad_creative_id=i?.ad_creative_id,this.pm.data.ad_id=i?.ad_id,this.pm.data.ad_universal_id=i?.ad_universal_id,i!=null&&i.ad_type&&(this.pm.data.ad_type=i?.ad_type)}}]),t})(),eb=J_,tb=function t(e){var i=this;de(this,t),A(this,"lastWallClockTime",void 0);var a=function(){i.lastWallClockTime=Ne.now(),e.on("before*",r)},r=function(n){var s=Ne.now(),o=i.lastWallClockTime;i.lastWallClockTime=s,s-o>3e4&&(e.emit("devicesleep",{viewer_time:o}),Object.assign(e.data,{viewer_time:o}),e.send("devicesleep"),e.emit("devicewake",{viewer_time:s}),Object.assign(e.data,{viewer_time:s}),e.send("devicewake"))};e.one("playbackheartbeat",a),e.on("playbackheartbeatend",function(){e.off("before*",r),e.one("playbackheartbeat",a)})},ib=tb,mp=(function(t){return t()})(function(){var t=function(){for(var i=0,a={};i<arguments.length;i++){var r=arguments[i];for(var n in r)a[n]=r[n]}return a};function e(i){function a(r,n,s){var o;if(typeof document<"u"){if(arguments.length>1){if(s=t({path:"/"},a.defaults,s),typeof s.expires=="number"){var l=new Date;l.setMilliseconds(l.getMilliseconds()+s.expires*864e5),s.expires=l}try{o=JSON.stringify(n),/^[\{\[]/.test(o)&&(n=o)}catch{}return i.write?n=i.write(n,r):n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),r=encodeURIComponent(String(r)),r=r.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),r=r.replace(/[\(\)]/g,escape),document.cookie=[r,"=",n,s.expires?"; expires="+s.expires.toUTCString():"",s.path?"; path="+s.path:"",s.domain?"; domain="+s.domain:"",s.secure?"; secure":""].join("")}r||(o={});for(var d=document.cookie?document.cookie.split("; "):[],m=/(%[0-9A-Z]{2})+/g,p=0;p<d.length;p++){var c=d[p].split("="),u=c.slice(1).join("=");u.charAt(0)==='"'&&(u=u.slice(1,-1));try{var v=c[0].replace(m,decodeURIComponent);if(u=i.read?i.read(u,v):i(u,v)||u.replace(m,decodeURIComponent),this.json)try{u=JSON.parse(u)}catch{}if(r===v){o=u;break}r||(o[v]=u)}catch{}}return o}}return a.set=a,a.get=function(r){return a.call(a,r)},a.getJSON=function(){return a.apply({json:!0},[].slice.call(arguments))},a.defaults={},a.remove=function(r,n){a(r,"",t(n,{expires:-1}))},a.withConverter=e,a}return e(function(){})}),pp="muxData",ab=function(t){return Object.entries(t).map(function(e){var i=Qe(e,2),a=i[0],r=i[1];return"".concat(a,"=").concat(r)}).join("&")},rb=function(t){return t.split("&").reduce(function(e,i){var a=Qe(i.split("="),2),r=a[0],n=a[1],s=+n,o=n&&s==n?s:n;return e[r]=o,e},{})},vp=function(){var t;try{t=rb(mp.get(pp)||"")}catch{t={}}return t},fp=function(t){try{mp.set(pp,ab(t),{expires:365})}catch{}},nb=function(){var t=vp();return t.mux_viewer_id=t.mux_viewer_id||Sn(),t.msn=t.msn||Math.random(),fp(t),{mux_viewer_id:t.mux_viewer_id,mux_sample_number:t.msn}},sb=function(){var t=vp(),e=Ne.now();return t.session_start&&(t.sst=t.session_start,delete t.session_start),t.session_id&&(t.sid=t.session_id,delete t.session_id),t.session_expires&&(t.sex=t.session_expires,delete t.session_expires),(!t.sex||t.sex<e)&&(t.sid=Sn(),t.sst=e),t.sex=e+1500*1e3,fp(t),{session_id:t.sid,session_start:t.sst,session_expires:t.sex}};function ob(t,e){var i=e.beaconCollectionDomain,a=e.beaconDomain;if(i){var r=/localhost(?::\d+)?$/.test(i)?"http://":"https://";return r+i}t=t||"inferred";var n=a||"litix.io";return t.match(/^[a-z0-9]+$/)?"https://"+t+"."+n:"https://img.litix.io/a.gif"}var lb={a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"},db=Ep(lb),ub={ad:"ad",af:"affiliate",ag:"aggregate",ap:"api",al:"application",ao:"audio",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",bn:"brand",br:"break",bw:"browser",by:"bytes",bz:"business",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ci:"client",cj:"channels",ck:"clicked",cl:"canceled",cm:"cmcd",cn:"config",co:"count",ce:"counter",cp:"complete",cq:"creator",cr:"creative",cs:"captions",ct:"content",cu:"current",cv:"cumulative",cx:"connection",cz:"context",da:"data",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",dy:"dynamic",eb:"enabled",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",ep:"experiments",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ez:"exception",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",lw:"low",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mp:"mode",ms:"ms",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",or:"origin",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pp:"pip",pr:"preload",ps:"position",pt:"part",pv:"previous",py:"property",px:"pop",pz:"plan",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rg:"range",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sh:"shift",si:"sid",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",ss:"status",st:"start",su:"startup",sv:"server",sw:"software",sy:"severity",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tr:"track",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"},Eh=Ep(ub);function Ep(t){var e={};for(var i in t)t.hasOwnProperty(i)&&(e[t[i]]=i);return e}function Zl(t){var e={},i={};return Object.keys(t).forEach(function(a){var r=!1;if(t.hasOwnProperty(a)&&t[a]!==void 0){var n=a.split("_"),s=n[0],o=db[s];o||(Y.info("Data key word `"+n[0]+"` not expected in "+a),o=s+"_"),n.splice(1).forEach(function(l){l==="url"&&(r=!0),Eh[l]?o+=Eh[l]:Number.isInteger(Number(l))?o+=l:(Y.info("Data key word `"+l+"` not expected in "+a),o+="_"+l+"_")}),r?i[o]=t[a]:e[o]=t[a]}}),Object.assign(e,i)}var cb=SE(xE()),hb=typeof document<"u"?document:cb.default,wa=hb,mb={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},pb=56*1024,vb=["hb","requestcompleted","requestfailed","requestcanceled"],fb="https://img.litix.io",bi=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this._beaconUrl=t||fb,this._eventQueue=[],this._postInFlight=!1,this._resendAfterPost=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},mb,e)};bi.prototype.queueEvent=function(t,e){var i=Object.assign({},e);return this._eventQueue.length<=this._options.maxQueueLength||t==="eventrateexceeded"?(this._eventQueue.push(i),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength):!1};bi.prototype.flushEvents=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(t&&this._eventQueue.length===1){this._eventQueue.pop();return}this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending()};bi.prototype.destroy=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;this.destroyed=!0,t?this._clearBeaconQueue():this.flushEvents(),V.clearTimeout(this._sendTimeout)};bi.prototype._clearBeaconQueue=function(){var t=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,e=this._eventQueue.slice(t);t>0&&Object.assign(e[e.length-1],Zl({mux_view_message:"event queue truncated"}));var i=this._createPayload(e);_p(this._beaconUrl,i,!0,function(){})};bi.prototype._sendBeaconQueue=function(){var t=this;if(this._postInFlight){this._resendAfterPost=!0;return}var e=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var i=this._createPayload(e),a=Ne.now();_p(this._beaconUrl,i,!1,function(r,n){n?(t._eventQueue=e.concat(t._eventQueue),t._failureCount+=1,Y.info("Error sending beacon: "+n)):t._failureCount=0,t._roundTripTime=Ne.now()-a,t._postInFlight=!1,t._resendAfterPost&&(t._resendAfterPost=!1,t._eventQueue.length>0&&t._sendBeaconQueue())})};bi.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var t=Math.pow(2,this._failureCount-1);return t=t*Math.random(),(1+t)*this._options.baseTimeBetweenBeacons};bi.prototype._startBeaconSending=function(){var t=this;V.clearTimeout(this._sendTimeout),!this.destroyed&&(this._sendTimeout=V.setTimeout(function(){t._eventQueue.length&&t._sendBeaconQueue(),t._startBeaconSending()},this._getNextBeaconTime()))};bi.prototype._createPayload=function(t){var e=this,i={transmission_timestamp:Math.round(Ne.now())};this._roundTripTime&&(i.rtt_ms=Math.round(this._roundTripTime));var a,r,n,s=function(){a=JSON.stringify({metadata:i,events:r||t}),n=a.length/1024},o=function(){return n<=e._options.maxPayloadKBSize};return s(),o()||(Y.info("Payload size is too big ("+n+" kb). Removing unnecessary events."),r=t.filter(function(l){return vb.indexOf(l.e)===-1}),s()),o()||(Y.info("Payload size still too big ("+n+" kb). Cropping fields.."),r.forEach(function(l){for(var d in l){var m=l[d],p=50*1024;typeof m=="string"&&m.length>p&&(l[d]=m.substring(0,p))}}),s()),a};var Eb=typeof wa.exitPictureInPicture=="function"?function(t){return t.length<=pb}:function(t){return!1},_p=function(t,e,i,a){if(i&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(t,e)){a();return}if(V.fetch){V.fetch(t,{method:"POST",body:e,headers:{"Content-Type":"text/plain"},keepalive:Eb(e)}).then(function(n){return a(null,n.ok?null:"Error")}).catch(function(n){return a(null,n)});return}if(V.XMLHttpRequest){var r=new V.XMLHttpRequest;r.onreadystatechange=function(){if(r.readyState===4)return a(null,r.status!==200?"error":void 0)},r.open("POST",t),r.setRequestHeader("Content-Type","text/plain"),r.send(e);return}a()},_b=bi,bb=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id","player_error_code","player_error_message","player_error_context","player_error_severity","player_error_business_exception","view_playing_time_ms_cumulative","ad_playing_time_ms_cumulative"],gb=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],yb=["ad_id","ad_creative_id","ad_universal_id"],Tb=["viewstart","error","ended","viewend"],Ab=600*1e3,kb=(function(){function t(e,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};de(this,t);var r,n,s,o,l,d,m,p,c,u,v,g;A(this,"mux",void 0),A(this,"envKey",void 0),A(this,"options",void 0),A(this,"eventQueue",void 0),A(this,"sampleRate",void 0),A(this,"disableCookies",void 0),A(this,"respectDoNotTrack",void 0),A(this,"previousBeaconData",void 0),A(this,"lastEventTime",void 0),A(this,"rateLimited",void 0),A(this,"pageLevelData",void 0),A(this,"viewerData",void 0),this.mux=e,this.envKey=i,this.options=a,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.eventQueue=new _b(ob(this.envKey,this.options));var _;this.sampleRate=(_=this.options.sampleRate)!==null&&_!==void 0?_:1;var y;this.disableCookies=(y=this.options.disableCookies)!==null&&y!==void 0?y:!1;var f;this.respectDoNotTrack=(f=this.options.respectDoNotTrack)!==null&&f!==void 0?f:!1,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:(r=this.options.platform)===null||r===void 0?void 0:r.name,viewer_application_version:(n=this.options.platform)===null||n===void 0?void 0:n.version,viewer_application_engine:(s=this.options.platform)===null||s===void 0?void 0:s.layout,viewer_device_name:(o=this.options.platform)===null||o===void 0?void 0:o.product,viewer_device_category:"",viewer_device_manufacturer:(l=this.options.platform)===null||l===void 0?void 0:l.manufacturer,viewer_os_family:(m=this.options.platform)===null||m===void 0||(d=m.os)===null||d===void 0?void 0:d.family,viewer_os_architecture:(c=this.options.platform)===null||c===void 0||(p=c.os)===null||p===void 0?void 0:p.architecture,viewer_os_version:(v=this.options.platform)===null||v===void 0||(u=v.os)===null||u===void 0?void 0:u.version,page_url:V==null||(g=V.location)===null||g===void 0?void 0:g.href},this.viewerData=this.disableCookies?{}:nb()}return Xe(t,[{key:"send",value:function(e,i){if(!(!e||!(i!=null&&i.view_id))){if(this.respectDoNotTrack&&zl())return Y.info("Not sending `"+e+"` because Do Not Track is enabled");if(!i||typeof i!="object")return Y.error("A data object was expected in send() but was not provided");var a=this.disableCookies?{}:sb(),r=gu(je({},this.pageLevelData,i,a,this.viewerData),{event:e,env_key:this.envKey});r.user_id&&(r.viewer_user_id=r.user_id,delete r.user_id);var n,s=((n=r.mux_sample_number)!==null&&n!==void 0?n:0)>=this.sampleRate,o=this._deduplicateBeaconData(e,r),l=Zl(o);if(this.lastEventTime=this.mux.utils.now(),s)return Y.info("Not sending event due to sample rate restriction",e,r,l);if(this.envKey||Y.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",e,r,l),!this.rateLimited)if(Y.info("Sending event",e,r,l),this.rateLimited=!this.eventQueue.queueEvent(e,l),this.mux.WINDOW_UNLOADING&&e==="viewend")this.eventQueue.destroy(!0);else{if(this.mux.WINDOW_HIDDEN&&e==="hb")this.eventQueue.flushEvents(!0);else if(Tb.indexOf(e)>=0){if(e==="error"&&i.player_error_severity==="warning")return;this.eventQueue.flushEvents()}if(this.rateLimited)return r.event="eventrateexceeded",l=Zl(r),this.eventQueue.queueEvent(r.event,l),Y.error("Beaconing disabled due to rate limit.")}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(e,i){var a=this,r={},n=i.view_id;if(n==="-1"||e==="viewstart"||e==="viewend"||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=Ab)r=je({},i),n&&(this.previousBeaconData=r),n&&e==="viewend"&&(this.previousBeaconData=null);else{var s=e.indexOf("request")===0;Object.entries(i).forEach(function(o){var l=Qe(o,2),d=l[0],m=l[1];a.previousBeaconData&&(m!==a.previousBeaconData[d]||bb.indexOf(d)>-1||a.objectHasChanged(s,d,m,a.previousBeaconData[d])||a.eventRequiresKey(e,d))&&(r[d]=m,a.previousBeaconData[d]=m)})}return r}},{key:"objectHasChanged",value:function(e,i,a,r){return!e||i.indexOf("request_")!==0?!1:i==="request_response_headers"||typeof a!="object"||typeof r!="object"?!0:Object.keys(a||{}).length!==Object.keys(r||{}).length}},{key:"eventRequiresKey",value:function(e,i){switch(e){case"audiotrackchange":if(i.startsWith("player_audio_track_"))return!0;break;case"playbackmodechange":if(i.startsWith("player_playback_mode"))return!0;break;case"renditionchange":if(i.startsWith("video_source_"))return!0;break;case"texttrackchange":if(i.startsWith("player_text_track_"))return!0;break}return!!(yb.includes(i)&&gb.includes(e))}}]),t})(),Sb=function t(e){de(this,t);var i=0,a=0,r=0,n=0,s=0,o=0,l=0,d=function(c,u){var v=u.request_start,g=u.request_response_start,_=u.request_response_end,y=u.request_bytes_loaded;n++;var f,T;if(g?(f=g-(v??0),T=(_??0)-g):T=(_??0)-(v??0),T>0&&y&&y>0){var I=y/T*8e3;s++,a+=y,r+=T,e.data.view_min_request_throughput=Math.min(e.data.view_min_request_throughput||1/0,I),e.data.view_average_request_throughput=a/r*8e3,e.data.view_request_count=n,f>0&&(i+=f,e.data.view_max_request_latency=Math.max(e.data.view_max_request_latency||0,f),e.data.view_average_request_latency=i/s)}},m=function(c,u){n++,o++,e.data.view_request_count=n,e.data.view_request_failed_count=o},p=function(c,u){n++,l++,e.data.view_request_count=n,e.data.view_request_canceled_count=l};e.on("requestcompleted",d),e.on("requestfailed",m),e.on("requestcanceled",p)},wb=Sb,Ib=3600*1e3,Rb=function t(e){var i=this;de(this,t),A(this,"_lastEventTime",void 0),e.on("before*",function(a,r){var n=r.viewer_time,s=Ne.now(),o=i._lastEventTime;if(i._lastEventTime=s,o&&s-o>Ib){var l=Object.keys(e.data).reduce(function(m,p){return p.indexOf("video_")===0?Object.assign(m,A({},p,e.data[p])):m},{});e.mux.log.info("Received event after at least an hour inactivity, creating a new view");var d=e.playbackHeartbeat._playheadShouldBeProgressing;e._resetView(Object.assign({viewer_time:n},l)),e.playbackHeartbeat._playheadShouldBeProgressing=d,e.playbackHeartbeat._playheadShouldBeProgressing&&a.type!=="play"&&a.type!=="adbreakstart"&&(e.emit("play",{viewer_time:n}),a.type!=="playing"&&e.emit("playing",{viewer_time:n}))}})},Cb=Rb,Lb=function t(e){de(this,t);var i=function(o){var l=Mb(o),d=Db(o);if(l!=null&&!_h(l,n)&&s<=d){n=l,s=d;var m={video_cdn:l};e.emit("cdnchange",m)}},a=null,r=null,n=null,s=0;e.on("viewinit",function(){a=null,r=null,n=null,s=0}),e.on("beforecdnchange",function(o,l){var d=l?.video_cdn;d&&(typeof l.video_previous_cdn>"u"||l.video_previous_cdn===null)&&(_h(d,r)?l.video_previous_cdn=a??void 0:(l.video_previous_cdn=r??void 0,a=r,r=d))}),e.on("requestcompleted",function(o,l){i(l)})};function _h(t,e){return t?.toLowerCase()===e?.toLowerCase()}function Mb(t){var e;return t!=null&&t.request_type&&(t.request_type==="media"||t.request_type==="video")&&!((e=t.request_response_headers)===null||e===void 0)&&e["x-cdn"]?t.request_response_headers["x-cdn"]:t!=null&&t.video_cdn?t.video_cdn:null}function Db(t){return t!=null&&t.request_start?t.request_start:t!=null&&t.viewer_time?t.viewer_time:Date.now()}var xb=Lb,Ob=function(t){try{return JSON.parse(t),!0}catch{return!1}},Nb=function t(e){var i=this;de(this,t),A(this,"_emittingAutomaticEvent",!1),A(this,"_hasInitialized",!1),A(this,"_currentMode","standard"),e.on("viewstart",function(){i._hasInitialized||(i._hasInitialized=!0,i._currentMode=e.data.player_playback_mode||"standard",i._emittingAutomaticEvent=!0,e.emit("playbackmodechange",{player_playback_mode:i._currentMode,player_playback_mode_data:"{}"}),i._emittingAutomaticEvent=!1)}),e.on("viewend",function(){i._hasInitialized=!1}),e.on("playbackmodechange",function(a,r){i._emittingAutomaticEvent||(r.player_playback_mode_data?Ob(r.player_playback_mode_data)||(e.mux.log.warn("Invalid JSON string for player_playback_mode_data"),r.player_playback_mode_data="{}"):r.player_playback_mode_data="{}",e.data.player_playback_mode_data=r.player_playback_mode_data,e.data.player_playback_mode=r.player_playback_mode,i._currentMode=r.player_playback_mode)})},Pb=Nb,Ub=(function(){function t(e){de(this,t),A(this,"pm",void 0),A(this,"_currentRangeStart",void 0),A(this,"_lastPlayheadTime",void 0),this.pm=e,this._currentRangeStart=null,this._lastPlayheadTime=null,e.on("playbackheartbeat",this._updatePlaybackRange.bind(this)),e.on("playbackheartbeatend",this._endPlaybackRange.bind(this))}return Xe(t,[{key:"_updateLastRangeEnd",value:function(){var e=this.pm.data.video_playback_ranges;if(e&&e.length>0){var i=this.pm.data.player_playhead_time||0;e[e.length-1][1]=i}}},{key:"_updatePlaybackRange",value:function(){var e,i=this.pm.data.player_playhead_time||0;if(!(!this.pm.disableAdPlaybackRangeFiltering&&!((e=this.pm.adTracker)===null||e===void 0)&&e.isAdBreak&&this._lastPlayheadTime!==null&&i<this._lastPlayheadTime)){if(this._lastPlayheadTime!==null&&this._currentRangeStart!==null){var a=Math.abs(i-this._lastPlayheadTime);if(a>1e3){var r=this.pm.data.video_playback_ranges;r&&r.length>0&&(r[r.length-1][1]=this._lastPlayheadTime),this._currentRangeStart=null}}if(this._currentRangeStart===null){var n=this.pm.data.video_playback_ranges||[];n.length>0&&n[n.length-1][1]===i?this._currentRangeStart=n[n.length-1][0]:(this._currentRangeStart=i,n.push([i,i])),this.pm.data.video_playback_ranges=n}else this._updateLastRangeEnd();this._lastPlayheadTime=i}}},{key:"_endPlaybackRange",value:function(){this._currentRangeStart!==null&&(this._updateLastRangeEnd(),this._currentRangeStart=null,this._lastPlayheadTime=null)}}]),t})(),$b=Ub;Eu();var bp=function t(e,i,a){var r=this;de(this,t),A(this,"_lastPayload",null),A(this,"_seenThisView",!1),A(this,"_emittingAutomaticEvent",!1);var n=function(l){var d={};return Object.keys(l).forEach(function(m){m.startsWith(a)&&(d[m]=l[m])}),d},s=function(){Object.keys(e.data).forEach(function(l){l.startsWith(a)&&delete e.data[l]})};e.on("viewinit",function(){r._seenThisView=!1,s()}),e.on("viewstart",function(){r._lastPayload&&!r._seenThisView&&(r._emittingAutomaticEvent=!0,e.emit(i,je({},r._lastPayload)),r._emittingAutomaticEvent=!1)});var o=a+"enabled";e.on("before"+i,function(l,d){var m=d[o];if(typeof m!="boolean"){var p=Object.keys(d).some(function(c){return c!==o&&c.startsWith(a)&&d[c]!==void 0});d[o]=p,e.mux.log.warn("Expected a boolean for ".concat(o," on ").concat(i,", got ").concat(typeof m>"u"?"undefined":fu(m)," ")+"(".concat(String(m),"); inferred as ").concat(p," from the payload."))}r._emittingAutomaticEvent||(r._seenThisView=!0,r._lastPayload=n(d)),s()})},Hb=(function(t){_u(i,t);var e=bu(i);function i(a){return de(this,i),e.call(this,a,"texttrackchange","player_text_track_")}return i})(bp),Bb=(function(t){_u(i,t);var e=bu(i);function i(a){return de(this,i),e.call(this,a,"audiotrackchange","player_audio_track_")}return i})(bp),qt=Object.freeze({CELLULAR:"cellular",WIFI:"wifi",WIRED:"wired",OTHER:"other",NO_CONNECTION:"no_connection",UNKNOWN:"unknown"}),Wb=function(t){if(!t)return qt.UNKNOWN;switch(t){case"cellular":case"wimax":return qt.CELLULAR;case"wifi":return qt.WIFI;case"ethernet":return qt.WIRED;case"none":return qt.NO_CONNECTION;case"bluetooth":case"other":return qt.OTHER;case"unknown":return qt.UNKNOWN;default:return qt.OTHER}},Fb=function(t){return typeof t=="object"&&"connection"in t&&typeof t.connection=="object"},Kb=(function(){function t(e){var i=this;de(this,t),A(this,"pm",void 0),A(this,"lastType",void 0),A(this,"lastLowDataMode",void 0),this.pm=e,this.pm.one("viewinit",function(){var a,r=i.emit.bind(i);r(),V.addEventListener("online",r),V.addEventListener("offline",r),(a=t.connection)===null||a===void 0||a.addEventListener("change",r),i.pm.on("destroy",function(){var n;(n=t.connection)===null||n===void 0||n.removeEventListener("change",r),V.removeEventListener("online",r),V.removeEventListener("offline",r)})})}return Xe(t,[{key:"type",get:function(){var e,i;return((e=V.navigator)===null||e===void 0?void 0:e.onLine)===!1?qt.NO_CONNECTION:!((i=t.connection)===null||i===void 0)&&i.type?Wb(t.connection.type):qt.UNKNOWN}},{key:"lowDataMode",get:function(){var e;return(e=t.connection)===null||e===void 0?void 0:e.saveData}},{key:"emit",value:function(){var e=this.type,i=this.lowDataMode;e===this.lastType&&i===this.lastLowDataMode||(this.lastType=e,this.lastLowDataMode=i,this.pm.emit("networkchange",je({viewer_connection_type:e},i!==void 0&&{viewer_connection_low_data_mode:i})))}}],[{key:"connection",get:function(){return Fb(V.navigator)?V.navigator.connection:null}}]),t})(),Vb=Kb,qb=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange","networkchange","cdnchange","playbackmodechange","texttrackchange","audiotrackchange"],Yb=new Set(["requestcompleted","requestfailed","requestcanceled"]),Gb=(function(t){_u(i,t);var e=bu(i);function i(a,r,n){de(this,i);var s;s=e.call(this),A($(s),"pageLoadEndTime",void 0),A($(s),"pageLoadInitTime",void 0),A($(s),"_destroyed",void 0),A($(s),"_heartBeatTimeout",void 0),A($(s),"adTracker",void 0),A($(s),"dashjs",void 0),A($(s),"data",void 0),A($(s),"disablePlayheadRebufferTracking",void 0),A($(s),"disableRebufferTracking",void 0),A($(s),"disableAdPlaybackRangeFiltering",void 0),A($(s),"errorTracker",void 0),A($(s),"errorTranslator",void 0),A($(s),"emitTranslator",void 0),A($(s),"getAdData",void 0),A($(s),"getPlayheadTime",void 0),A($(s),"getStateData",void 0),A($(s),"stateDataTranslator",void 0),A($(s),"hlsjs",void 0),A($(s),"id",void 0),A($(s),"longResumeTracker",void 0),A($(s),"minimumRebufferDuration",void 0),A($(s),"mux",void 0),A($(s),"playbackEventDispatcher",void 0),A($(s),"playbackHeartbeat",void 0),A($(s),"playbackHeartbeatTime",void 0),A($(s),"playheadTime",void 0),A($(s),"seekingTracker",void 0),A($(s),"sustainedRebufferThreshold",void 0),A($(s),"watchTimeTracker",void 0),A($(s),"currentFragmentPDT",void 0),A($(s),"currentFragmentStart",void 0),s.pageLoadInitTime=yo.navigationStart(),s.pageLoadEndTime=yo.domContentLoadedEventEnd();var o={debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,disableAdPlaybackRangeFiltering:!1,errorTranslator:function(c){return c},emitTranslator:function(){for(var c=arguments.length,u=new Array(c),v=0;v<c;v++)u[v]=arguments[v];return u},stateDataTranslator:function(c){return c}};s.mux=a,s.id=r,n!=null&&n.beaconDomain&&s.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),n=Object.assign(o,n),n.data=n.data||{},n.data.property_key&&(n.data.env_key=n.data.property_key,delete n.data.property_key),Y.level=n.debug?na.DEBUG:na.WARN,s.getPlayheadTime=n.getPlayheadTime,s.getStateData=n.getStateData||function(){return{}},s.getAdData=n.getAdData||function(){},s.minimumRebufferDuration=n.minimumRebufferDuration,s.sustainedRebufferThreshold=n.sustainedRebufferThreshold,s.playbackHeartbeatTime=n.playbackHeartbeatTime,s.disableRebufferTracking=n.disableRebufferTracking,s.disableRebufferTracking&&s.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),s.disablePlayheadRebufferTracking=n.disablePlayheadRebufferTracking,s.disableAdPlaybackRangeFiltering=n.disableAdPlaybackRangeFiltering,s.errorTranslator=n.errorTranslator,s.emitTranslator=n.emitTranslator,s.stateDataTranslator=n.stateDataTranslator,s.playbackEventDispatcher=new kb(a,n.data.env_key,n),s.data={player_instance_id:Sn(),mux_sample_rate:n.sampleRate,beacon_domain:n.beaconCollectionDomain||n.beaconDomain},s.data.view_sequence_number=1,s.data.player_sequence_number=1;var l=(function(){typeof this.data.view_start>"u"&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"),this.emit("renditionchange"))}).bind($(s));if(s.on("viewinit",function(c,u){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,u),this._initializeViewData(),this.one("play",l),this.one("adbreakstart",l)}),s.on("videochange",function(c,u){this._resetView(u)}),s.on("programchange",function(c,u){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),this._resetView(Object.assign(u,{view_program_changed:!0})),l(),this.emit("play"),this.emit("playing")}),s.on("fragmentchange",function(c,u){this.currentFragmentPDT=u.currentFragmentPDT,this.currentFragmentStart=u.currentFragmentStart}),s.on("destroy",s.destroy),typeof window<"u"&&typeof window.addEventListener=="function"&&typeof window.removeEventListener=="function"){var d=function(){var c=typeof s.data.view_start<"u";s.mux.WINDOW_HIDDEN=document.visibilityState==="hidden",c&&s.mux.WINDOW_HIDDEN&&(s.data.player_is_paused||s.emit("hb"))};window.addEventListener("visibilitychange",d,!1);var m=function(c){c.persisted||s.destroy()};window.addEventListener("pagehide",m,!1),s.on("destroy",function(){window.removeEventListener("visibilitychange",d),window.removeEventListener("pagehide",m)})}s.on("playerready",function(c,u){Object.assign(this.data,u)}),qb.forEach(function(c){s.on(c,function(u,v){c.indexOf("ad")!==0&&this._updateStateData(),Object.assign(this.data,v),this._sanitizeData()}),s.on("after"+c,function(){(c!=="error"||this.errorTracker.viewErrored)&&this.send(c)})}),s.on("viewend",function(c,u){Object.assign(s.data,u)});var p=function(c){var u=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=u-this.data.player_init_time),this.pageLoadInitTime=this.data.page_load_init_time||this.pageLoadInitTime,this.pageLoadEndTime=this.data.page_load_end_time||this.pageLoadEndTime,!this.mux.PLAYER_TRACKED&&this.pageLoadInitTime&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.pageLoadEndTime)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.pageLoadEndTime||1/0)-this.pageLoadInitTime)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time};return s.one("playerready",p),s.longResumeTracker=new Cb($(s)),s.errorTracker=new O_($(s)),new ib($(s)),s.seekingTracker=new Z_($(s)),s.playheadTime=new B_($(s)),s.playbackHeartbeat=new D_($(s)),new j_($(s)),s.watchTimeTracker=new P_($(s)),new $_($(s)),new $b($(s)),s.adTracker=new eb($(s)),new V_($(s)),new F_($(s)),new Y_($(s)),new wb($(s)),new xb($(s)),new Pb($(s)),new Hb($(s)),new Bb($(s)),new Vb($(s)),n.hlsjs&&s.addHLSJS(n),n.dashjs&&s.addDashJS(n),s.emit("viewinit",n.data),s}return Xe(i,[{key:"emit",value:function(a,r){var n,s=Object.assign({viewer_time:this.mux.utils.now()},r),o=[a,s];if(this.emitTranslator)try{o=this.emitTranslator(a,s)}catch(l){this.mux.log.warn("Exception in emit translator callback.",l)}o!=null&&o.length&&(n=os(hr(i.prototype),"emit",this)).call.apply(n,[this].concat(Tt(o)))}},{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,typeof this.data.view_start<"u"&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(a){if(this.data.view_id){var r=Object.assign({},this.data),n=["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"];if(r.video_source_is_live===void 0&&(r.player_source_duration===1/0||r.video_source_duration===1/0?r.video_source_is_live=!0:(r.player_source_duration>0||r.video_source_duration>0)&&(r.video_source_is_live=!1)),r.video_source_is_live||n.forEach(function(d){r[d]=void 0}),r.video_source_url=r.video_source_url||r.player_source_url,r.video_source_url){var s=Qe(wn(r.video_source_url),2),o=s[0],l=s[1];r.video_source_domain=l,r.video_source_hostname=o}delete r.ad_request_id,r.video_playback_ranges&&(r.video_playback_range=JSON.stringify(r.video_playback_ranges.filter(function(d){return d[0]!==d[1]}).map(function(d){return"".concat(d[0],":").concat(d[1])})),delete r.video_playback_ranges),this.playbackEventDispatcher.send(a,r),this.data.view_sequence_number++,this.data.player_sequence_number++,Yb.has(a)||this._restartHeartBeat(),a==="viewend"&&delete this.data.view_id}}},{key:"_resetView",value:function(a){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",a)}},{key:"_updateStateData",value:function(){var a,r=this.getStateData();if(typeof this.stateDataTranslator=="function")try{r=this.stateDataTranslator(r)}catch(s){this.mux.log.warn("Exception in stateDataTranslator translator callback.",s)}if(!((a=this.data)===null||a===void 0)&&a.video_cdn&&r!=null&&r.video_cdn){r.video_cdn;var n=qE(r,["video_cdn"]);r=n}Object.assign(this.data,r),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var a=this,r=["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate","player_audio_track_bitrate"];r.forEach(function(s){var o=parseInt(a.data[s],10);a.data[s]=isNaN(o)?void 0:o});var n=["player_source_url","video_source_url"];n.forEach(function(s){if(a.data[s]){var o=a.data[s].toLowerCase();(o.indexOf("data:")===0||o.indexOf("blob:")===0)&&(a.data[s]="MSE style URL")}})}},{key:"_resetVideoData",value:function(){var a=this;Object.keys(this.data).forEach(function(r){r.indexOf("video_")===0&&delete a.data[r]})}},{key:"_resetViewData",value:function(){var a=this;Object.keys(this.data).forEach(function(r){r.indexOf("view_")===0&&delete a.data[r]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(){delete this.data.player_error_code,delete this.data.player_error_message,delete this.data.player_error_context,delete this.data.player_error_severity,delete this.data.player_error_business_exception}},{key:"_initializeViewData",value:function(){var a=this,r=this.data.view_id=Sn(),n=function(){r===a.data.view_id&&Le(a.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",n):n()}},{key:"_restartHeartBeat",value:function(){var a=this;window.clearTimeout(this._heartBeatTimeout),this._heartBeatTimeout=window.setTimeout(function(){a.data.player_is_paused||a.emit("hb")},1e4)}},{key:"addHLSJS",value:function(a){if(!a.hlsjs){this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.");return}if(this.hlsjs){this.mux.log.warn("An instance of HLS.js is already being monitored for this player.");return}this.hlsjs=a.hlsjs,T_(this.mux,this.id,a.hlsjs,{},a.Hls||window.Hls)}},{key:"removeHLSJS",value:function(){this.hlsjs&&(A_(this.hlsjs),this.hlsjs=void 0)}},{key:"addDashJS",value:function(a){if(!a.dashjs){this.mux.log.warn("You must pass a valid dashjs instance in order to track it.");return}if(this.dashjs){this.mux.log.warn("An instance of Dash.js is already being monitored for this player.");return}this.dashjs=a.dashjs,I_(this.mux,this.id,a.dashjs)}},{key:"removeDashJS",value:function(){this.dashjs&&(R_(this.dashjs),this.dashjs=void 0)}}]),i})(L_),jb=Gb;function Il(){return wa&&!!(wa.fullscreenElement||wa.webkitFullscreenElement||wa.mozFullScreenElement||wa.msFullscreenElement)}var zb=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],Qb={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"};function Zb(t,e,i){var a=Qe(go(e),3),r=a[0],n=a[1],s=a[2],o=t.log,l=t.utils.getComputedStyle,d=t.utils.secondsToMs,m={automaticErrorTracking:!0};if(r){if(s!=="video"&&s!=="audio")return o.error("The element of `"+n+"` was not a media element.")}else return o.error("No element was found with the `"+n+"` query selector.");r.mux&&(r.mux.destroy(),delete r.mux,o.warn("Already monitoring this video element, replacing existing event listeners"));var p={getPlayheadTime:function(){return d(r.currentTime)},getStateData:function(){var y,f,T,I=((y=(f=this).getPlayheadTime)===null||y===void 0?void 0:y.call(f))||d(r.currentTime),k=this.hlsjs&&this.hlsjs.url,C=this.dashjs&&typeof this.dashjs.getSource=="function"&&this.dashjs.getSource(),S={player_is_paused:r.paused,player_width:parseInt(l(r,"width")),player_height:parseInt(l(r,"height")),player_autoplay_on:r.autoplay,player_preload_on:r.preload,player_language_code:r.lang,player_is_fullscreen:Il(),video_poster_url:r.poster,video_source_url:k||C||r.currentSrc,video_source_duration:d(r.duration),video_source_height:r.videoHeight,video_source_width:r.videoWidth,view_dropped_frame_count:r==null||(T=r.getVideoPlaybackQuality)===null||T===void 0?void 0:T.call(r).droppedVideoFrames};if(r.getStartDate&&I>0){var P=r.getStartDate();if(P&&typeof P.getTime=="function"&&P.getTime()){var q=P.getTime();if(S.player_program_time=q+I,r.seekable.length>0){var B=q+r.seekable.end(r.seekable.length-1);S.player_live_edge_program_time=B}}}return S}};i=Object.assign(m,i,p),i.data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:t.VERSION},i.data),r.mux=r.mux||{},r.mux.deleted=!1,r.mux.emit=function(y,f){t.emit(n,y,f)},r.mux.updateData=function(y){r.mux.emit("hb",y)};var c,u,v=function(){c&&(c.destroy(),c=void 0),u&&(u.destroy(),u=void 0)},g=function(){v(),c=a_({mediaElement:r,onChange:function(y){var f;!((f=r.mux)===null||f===void 0)&&f.audioTrackChangeHandler?r.mux.audioTrackChangeHandler(y):t.emit(n,"audiotrackchange",y)}}),c?.refresh(),u=o_({mediaElement:r,onChange:function(y){var f;!((f=r.mux)===null||f===void 0)&&f.textTrackChangeHandler?r.mux.textTrackChangeHandler(y):t.emit(n,"texttrackchange",y)}}),u?.refresh()},_=function(){o.error("The monitor for this video element has already been destroyed.")};r.mux.destroy=function(){v(),Object.keys(r.mux.listeners).forEach(function(y){r.removeEventListener(y,r.mux.listeners[y],!1)}),delete r.mux.listeners,r.mux.fullscreenChangeListener&&(document.removeEventListener("fullscreenchange",r.mux.fullscreenChangeListener,!1),delete r.mux.fullscreenChangeListener),r.mux.destroy=_,r.mux.swapElement=_,r.mux.emit=_,r.mux.addHLSJS=_,r.mux.addDashJS=_,r.mux.removeHLSJS=_,r.mux.removeDashJS=_,r.mux.updateData=_,r.mux.setEmitTranslator=_,r.mux.setStateDataTranslator=_,r.mux.setGetPlayheadTime=_,r.mux.deleted=!0,t.emit(n,"destroy")},r.mux.swapElement=function(y){var f=Qe(go(y),3),T=f[0],I=f[1],k=f[2];if(T){if(k!=="video"&&k!=="audio")return t.log.error("The element of `"+I+"` was not a media element.")}else return t.log.error("No element was found with the `"+I+"` query selector.");T.muxId=r.muxId,delete r.muxId,T.mux=T.mux||{},T.mux.listeners=Object.assign({},r.mux.listeners),delete r.mux.listeners,Object.keys(T.mux.listeners).forEach(function(C){r.removeEventListener(C,T.mux.listeners[C],!1),T.addEventListener(C,T.mux.listeners[C],!1)}),T.mux.fullscreenChangeListener=r.mux.fullscreenChangeListener,delete r.mux.fullscreenChangeListener,T.mux.swapElement=r.mux.swapElement,T.mux.destroy=r.mux.destroy,delete r.mux,r=T,g()},r.mux.addHLSJS=function(y){t.addHLSJS(n,y)},r.mux.addDashJS=function(y){t.addDashJS(n,y)},r.mux.removeHLSJS=function(){t.removeHLSJS(n)},r.mux.removeDashJS=function(){t.removeDashJS(n)},r.mux.setEmitTranslator=function(y){t.setEmitTranslator(n,y)},r.mux.setStateDataTranslator=function(y){t.setStateDataTranslator(n,y)},r.mux.setGetPlayheadTime=function(y){y||(y=i.getPlayheadTime),t.setGetPlayheadTime(n,y)},t.init(n,i),t.emit(n,"playerready"),g(),r.paused||(t.emit(n,"play"),r.readyState>2&&t.emit(n,"playing")),r.mux.listeners={},zb.forEach(function(y){y==="error"&&!i.automaticErrorTracking||(r.mux.listeners[y]=function(){var f={};if(y==="error"){if(!r.error||r.error.code===1)return;f.player_error_code=r.error.code,f.player_error_message=Qb[r.error.code]||r.error.message}t.emit(n,y,f)},r.addEventListener(y,r.mux.listeners[y],!1))}),r.mux.listeners.enterpictureinpicture=function(){t.emit(n,"playbackmodechange",{player_playback_mode:"pip",player_playback_mode_data:"{}"})},r.mux.listeners.leavepictureinpicture=function(){var y=Il()?"fullscreen":"standard";t.emit(n,"playbackmodechange",{player_playback_mode:y,player_playback_mode_data:"{}"})},r.addEventListener("enterpictureinpicture",r.mux.listeners.enterpictureinpicture,!1),r.addEventListener("leavepictureinpicture",r.mux.listeners.leavepictureinpicture,!1),r.mux.fullscreenChangeListener=function(){var y=Il(),f=document.fullscreenElement;if(y&&(f===r||f!=null&&f.contains(r)))t.emit(n,"playbackmodechange",{player_playback_mode:"fullscreen",player_playback_mode_data:"{}"});else if(!y){var T=document.pictureInPictureElement===r,I=T?"pip":"standard";t.emit(n,"playbackmodechange",{player_playback_mode:I,player_playback_mode_data:"{}"})}},document.addEventListener("fullscreenchange",r.mux.fullscreenChangeListener,!1)}function Xb(t,e,i,a){var r=a;if(t&&typeof t[e]=="function")try{r=t[e].apply(t,i)}catch(n){Y.info("safeCall error",n)}return r}var Ia;V&&V.WeakMap&&(Ia=new WeakMap);function Jb(t,e){if(!t||!e||!V||typeof V.getComputedStyle!="function")return"";var i;return Ia&&Ia.has(t)&&(i=Ia.get(t)),i||(i=V.getComputedStyle(t,null),Ia&&Ia.set(t,i)),i.getPropertyValue(e)}function eg(t){return Math.floor(t*1e3)}var Gi={TARGET_DURATION:"#EXT-X-TARGETDURATION",PART_INF:"#EXT-X-PART-INF",SERVER_CONTROL:"#EXT-X-SERVER-CONTROL",INF:"#EXTINF",PROGRAM_DATE_TIME:"#EXT-X-PROGRAM-DATE-TIME",VERSION:"#EXT-X-VERSION",SESSION_DATA:"#EXT-X-SESSION-DATA"},al=function(t){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(t),this.manifest};al.prototype.process=function(t){var e;for(this.buffer+=t,e=this.buffer.indexOf(`
`);e>-1;e=this.buffer.indexOf(`
`))this.processLine(this.buffer.substring(0,e)),this.buffer=this.buffer.substring(e+1)};al.prototype.processLine=function(t){var e=t.indexOf(":"),i=rg(t,e),a=i[0],r=i.length===2?Su(i[1]):void 0;if(a[0]!=="#")this.currentUri.uri=a,this.manifest.segments.push(this.currentUri),this.manifest.targetDuration&&!("duration"in this.currentUri)&&(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(a){case Gi.TARGET_DURATION:{if(!isFinite(r)||r<0)return;this.manifest.targetDuration=r,this.setHoldBack();break}case Gi.PART_INF:{Rl(this.manifest,i),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break}case Gi.SERVER_CONTROL:{Rl(this.manifest,i),this.setHoldBack();break}case Gi.INF:{r===0?this.currentUri.duration=.01:r>0&&(this.currentUri.duration=r);break}case Gi.PROGRAM_DATE_TIME:{var n=r,s=new Date(n);this.manifest.dateTimeString||(this.manifest.dateTimeString=n,this.manifest.dateTimeObject=s),this.currentUri.dateTimeString=n,this.currentUri.dateTimeObject=s;break}case Gi.VERSION:{Rl(this.manifest,i);break}case Gi.SESSION_DATA:{var o=ng(i[1]),l=np(o);Object.assign(this.manifest.sessionData,l)}}};al.prototype.setHoldBack=function(){var t=this.manifest,e=t.serverControl,i=t.targetDuration,a=t.partTargetDuration;if(e){var r="holdBack",n="partHoldBack",s=i&&i*3,o=a&&a*2;i&&!e.hasOwnProperty(r)&&(e[r]=s),s&&e[r]<s&&(e[r]=s),a&&!e.hasOwnProperty(n)&&(e[n]=a*3),a&&e[n]<o&&(e[n]=o)}};var Rl=function(t,e){var i=gp(e[0].replace("#EXT-X-","")),a;ag(e[1])?(a={},a=Object.assign(ig(e[1]),a)):a=Su(e[1]),t[i]=a},gp=function(t){return t.toLowerCase().replace(/-(\w)/g,function(e){return e[1].toUpperCase()})},Su=function(t){if(t.toLowerCase()==="yes"||t.toLowerCase()==="no")return t.toLowerCase()==="yes";var e=t.indexOf(":")!==-1?t:parseFloat(t);return isNaN(e)?t:e},tg=function(t){var e={},i=t.split("=");if(i.length>1){var a=gp(i[0]);e[a]=Su(i[1])}return e},ig=function(t){for(var e=t.split(","),i={},a=0;e.length>a;a++){var r=e[a],n=tg(r);i=Object.assign(n,i)}return i},ag=function(t){return t.indexOf("=")>-1},rg=function(t,e){return e===-1?[t]:[t.substring(0,e),t.substring(e+1)]},ng=function(t){var e={};if(t){var i=t.search(","),a=t.slice(0,i),r=t.slice(i+1),n=[a,r];return n.forEach(function(s,o){for(var l=s.replace(/['"]+/g,"").split("="),d=0;d<l.length;d++)l[d]==="DATA-ID"&&(e["DATA-ID"]=l[1-d]),l[d]==="VALUE"&&(e.VALUE=l[1-d])}),{data:e}}},sg=al,og={safeCall:Xb,safeIncrement:Le,getComputedStyle:Jb,secondsToMs:eg,assign:Object.assign,headersStringToObject:yu,cdnHeadersToRequestId:To,extractHostnameAndDomain:wn,extractHostname:Ct,manifestParser:sg,generateShortID:ap,generateUUID:Sn,now:Ne.now,findMediaElement:go},lg=og,dg={PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",PLAYBACK_MODE_CHANGE:"playbackmodechange",TEXT_TRACK_CHANGE:"texttrackchange",AUDIO_TRACK_CHANGE:"audiotrackchange",NETWORK_CHANGE:"networkchange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled",HEARTBEAT:"hb",DESTROY:"destroy"},ug=dg,cg="mux-embed",hg="5.19.0",mg="2.1",ye={},Wi=function(t){var e=arguments;typeof t=="string"?Wi.hasOwnProperty(t)?V.setTimeout(function(){e=Array.prototype.splice.call(e,1),Wi[t].apply(null,e)},0):Y.warn("`"+t+"` is an unknown task"):typeof t=="function"?V.setTimeout(function(){t(Wi)},0):Y.warn("`"+t+"` is invalid.")},pg={loaded:Ne.now(),NAME:cg,VERSION:hg,API_VERSION:mg,PLAYER_TRACKED:!1,monitor:function(t,e){return Zb(Wi,t,e)},destroyMonitor:function(t){var e=Qe(go(t),1),i=e[0];i&&i.mux&&typeof i.mux.destroy=="function"?i.mux.destroy():Y.error("A video element monitor for `"+t+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(t,e){var i=yt(t);ye[i]?ye[i].addHLSJS(e):Y.error("A monitor for `"+i+"` has not been initialized.")},addDashJS:function(t,e){var i=yt(t);ye[i]?ye[i].addDashJS(e):Y.error("A monitor for `"+i+"` has not been initialized.")},removeHLSJS:function(t){var e=yt(t);ye[e]?ye[e].removeHLSJS():Y.error("A monitor for `"+e+"` has not been initialized.")},removeDashJS:function(t){var e=yt(t);ye[e]?ye[e].removeDashJS():Y.error("A monitor for `"+e+"` has not been initialized.")},init:function(t,e){zl()&&e&&e.respectDoNotTrack&&Y.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var i=yt(t);ye[i]=new jb(Wi,i,e)},emit:function(t,e,i){var a=yt(t);ye[a]?(ye[a].emit(e,i),e==="destroy"&&delete ye[a]):Y.error("A monitor for `"+a+"` has not been initialized.")},updateData:function(t,e){var i=yt(t);ye[i]?ye[i].emit("hb",e):Y.error("A monitor for `"+i+"` has not been initialized.")},setEmitTranslator:function(t,e){var i=yt(t);ye[i]?ye[i].emitTranslator=e:Y.error("A monitor for `"+i+"` has not been initialized.")},setStateDataTranslator:function(t,e){var i=yt(t);ye[i]?ye[i].stateDataTranslator=e:Y.error("A monitor for `"+i+"` has not been initialized.")},setGetPlayheadTime:function(t,e){var i=yt(t);ye[i]?ye[i].getPlayheadTime=e:Y.error("A monitor for `"+i+"` has not been initialized.")},checkDoNotTrack:zl,log:Y,utils:lg,events:ug,WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(Wi,pg);typeof V<"u"&&typeof V.addEventListener=="function"&&V.addEventListener("pagehide",function(t){t.persisted||(Wi.WINDOW_UNLOADING=!0)},!1);var wu=Wi;var F=fE,X={VIDEO:"video",THUMBNAIL:"thumbnail",STORYBOARD:"storyboard",DRM:"drm"},N={NOT_AN_ERROR:0,NETWORK_OFFLINE:2000002,NETWORK_RECONNECTING:2000003,NETWORK_UNKNOWN_ERROR:2e6,NETWORK_NO_STATUS:2000001,NETWORK_INVALID_URL:24e5,NETWORK_NOT_FOUND:2404e3,NETWORK_NOT_READY:2412e3,NETWORK_GENERIC_SERVER_FAIL:25e5,NETWORK_TOKEN_MISSING:2403201,NETWORK_TOKEN_MALFORMED:2412202,NETWORK_TOKEN_EXPIRED:2403210,NETWORK_TOKEN_AUD_MISSING:2403221,NETWORK_TOKEN_AUD_MISMATCH:2403222,NETWORK_TOKEN_SUB_MISMATCH:2403232,ENCRYPTED_ERROR:5e6,ENCRYPTED_UNSUPPORTED_KEY_SYSTEM:5000001,ENCRYPTED_GENERATE_REQUEST_FAILED:5000002,ENCRYPTED_UPDATE_LICENSE_FAILED:5000003,ENCRYPTED_UPDATE_SERVER_CERT_FAILED:5000004,ENCRYPTED_CDM_ERROR:5000005,ENCRYPTED_OUTPUT_RESTRICTED:5000006,ENCRYPTED_MISSING_TOKEN:5000002},rl=t=>t===X.VIDEO?"playback":t,Ai=class Pr extends Error{constructor(e,i=Pr.MEDIA_ERR_CUSTOM,a,r){var n;super(e),this.name="MediaError",this.code=i,this.context=r,this.fatal=a??(i>=Pr.MEDIA_ERR_NETWORK&&i<=Pr.MEDIA_ERR_ENCRYPTED),this.message||(this.message=(n=Pr.defaultMessages[this.code])!=null?n:"")}};Ai.MEDIA_ERR_ABORTED=1,Ai.MEDIA_ERR_NETWORK=2,Ai.MEDIA_ERR_DECODE=3,Ai.MEDIA_ERR_SRC_NOT_SUPPORTED=4,Ai.MEDIA_ERR_ENCRYPTED=5,Ai.MEDIA_ERR_CUSTOM=100,Ai.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var L=Ai,vg=t=>t==null,Iu=(t,e)=>vg(e)?!1:t in e,Xl={ANY:"any",MUTED:"muted"},J={ON_DEMAND:"on-demand",LIVE:"live",UNKNOWN:"unknown"},Zt={MSE:"mse",NATIVE:"native"},Ur={HEADER:"header",QUERY:"query",NONE:"none"},Ao=Object.values(Ur),fi={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},bh={HLS:fi.M3U8};[...Object.values(fi)];var NS={upTo720p:"720p",upTo1080p:"1080p",upTo1440p:"1440p",upTo2160p:"2160p"},PS={noLessThan480p:"480p",noLessThan540p:"540p",noLessThan720p:"720p",noLessThan1080p:"1080p",noLessThan1440p:"1440p",noLessThan2160p:"2160p"},US={DESCENDING:"desc"},fg="en",Jl={code:fg},Eg=t=>{let e=t;for(;e;){if(e.hasAttribute("lang"))return e.getAttribute("lang")||void 0;let i=e.getRootNode();e=i instanceof ShadowRoot?i.host:void 0}},_g=t=>{var e,i,a;let r=(a=(e=globalThis.navigator)==null?void 0:e.languages)!=null?a:[(i=globalThis.navigator)==null?void 0:i.language];return[Eg(t),...r].filter(n=>!!n)},fe=(t,e,i,a,r=t)=>{r.addEventListener(e,i,a),t.addEventListener("teardown",()=>{r.removeEventListener(e,i)},{once:!0})};function bg(t,e,i){e&&i>e&&(i=e);for(let a=0;a<t.length;a++)if(t.start(a)<=i&&t.end(a)>=i)return!0;return!1}var Ru=t=>{let e=t.indexOf("?");if(e<0)return[t];let i=t.slice(0,e),a=t.slice(e);return[i,a]},nl=t=>{let{type:e}=t;if(e){let i=e.toUpperCase();return Iu(i,bh)?bh[i]:e}return gg(t)},yp=t=>t==="VOD"?J.ON_DEMAND:J.LIVE,Tp=t=>t==="EVENT"?Number.POSITIVE_INFINITY:t==="VOD"?Number.NaN:0,gg=t=>{let{src:e}=t;if(!e)return"";let i="";try{i=sl(e).pathname}catch{console.error("Invalid url when trying to infer mime type",e)}let a=i.lastIndexOf(".");if(a<0)return Ag(t)?fi.M3U8:"";let r=i.slice(a+1).toUpperCase();return Iu(r,fi)?fi[r]:""},ed=t=>{try{return new URL(t),!1}catch{return!0}},yg=t=>t.split(`
`).find((e,i,a)=>i>0&&a[i-1].startsWith("#EXT-X-STREAM-INF")),sl=(t,e)=>{var i;if(!ed(t))return new URL(t);let a=(i=window?.location)==null?void 0:i.href,r=e??a;return e&&ed(e.toString())&&(r=new URL(e,a)),new URL(t,r)},Tg="mux.com",Ag=({src:t,customDomain:e=Tg})=>{let i;try{i=new URL(`${t}`)}catch{return!1}let a=i.protocol==="https:",r=i.hostname===`stream.${e}`.toLowerCase(),n=i.pathname.split("/"),s=n.length===2,o=!(n!=null&&n[1].includes("."));return a&&r&&s&&o},ir=t=>{let e=(t??"").split(".")[1];if(e)try{let i=e.replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(atob(i).split("").map(function(r){return"%"+("00"+r.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(a)}catch{return}},kg=({exp:t},e=Date.now())=>!t||t*1e3<e,Sg=({sub:t},e)=>t!==e,wg=({aud:t},e)=>!t,Ig=({aud:t},e)=>t!==e,Ap="en";function O(t,e=!0){var i,a;let r=e&&(a=(i=Jl)==null?void 0:i[t])!=null?a:t,n=e?Jl.code:Ap;return new Rg(r,n)}var Rg=class{constructor(e,i=(a=>(a=Jl)!=null?a:Ap)()){this.message=e,this.locale=i}format(e){return this.message.replace(/\{(\w+)\}/g,(i,a)=>{var r;return(r=e[a])!=null?r:""})}toString(){return this.message}},Cg=Object.values(Xl),gh=t=>typeof t=="boolean"||typeof t=="string"&&Cg.includes(t),Lg=(t,e,i)=>{let{autoplay:a}=t,r=!1,n=!1,s=gh(a)?a:!!a,o=()=>{r||fe(e,"playing",()=>{r=!0},{once:!0})};if(o(),fe(e,"loadstart",()=>{r=!1,o(),Cl(e,s)},{once:!0}),fe(e,"loadstart",()=>{i||(t.streamType&&t.streamType!==J.UNKNOWN?n=t.streamType===J.LIVE:n=!Number.isFinite(e.duration)),Cl(e,s)},{once:!0}),i&&i.once(F.Events.LEVEL_LOADED,(l,d)=>{var m;t.streamType&&t.streamType!==J.UNKNOWN?n=t.streamType===J.LIVE:n=(m=d.details.live)!=null?m:!1}),!s){let l=()=>{!n||Number.isFinite(t.startTime)||(i!=null&&i.liveSyncPosition?e.currentTime=i.liveSyncPosition:Number.isFinite(e.seekable.end(0))&&(e.currentTime=e.seekable.end(0)))};i&&fe(e,"play",()=>{e.preload==="metadata"?i.once(F.Events.LEVEL_UPDATED,l):l()},{once:!0})}return l=>{r||(s=gh(l)?l:!!l,Cl(e,s))}},Cl=(t,e)=>{if(!e)return;let i=t.muted,a=()=>t.muted=i;switch(e){case Xl.ANY:t.play().catch(()=>{t.muted=!0,t.play().catch(a)});break;case Xl.MUTED:t.muted=!0,t.play().catch(a);break;default:t.play().catch(()=>{});break}},Mg=({preload:t,src:e},i,a)=>{let r=p=>{p!=null&&["","none","metadata","auto"].includes(p)?i.setAttribute("preload",p):i.removeAttribute("preload")};if(!a)return r(t),r;let n=!1,s=!1,o=a.config.maxBufferLength,l=a.config.maxBufferSize,d=p=>{r(p);let c=p??i.preload;s||c==="none"||(c==="metadata"?(a.config.maxBufferLength=1,a.config.maxBufferSize=1):(a.config.maxBufferLength=o,a.config.maxBufferSize=l),m())},m=()=>{!n&&e&&(n=!0,a.loadSource(e))};return fe(i,"play",()=>{s=!0,a.config.maxBufferLength=o,a.config.maxBufferSize=l,m()},{once:!0}),d(t),d},Dg=(t,e,i)=>{let{minPreloadSegments:a}=t;if(a==null||a<=0||!i)return;let r=0,n=!1,s=e.playbackRate||1,o=()=>{e.playbackRate!==0&&(s=e.playbackRate,e.playbackRate=0)};e.playbackRate=0,fe(e,"ratechange",o);let l=(d,{frag:m})=>{n||m.type!=="main"||(r++,r>=a&&(n=!0,e.removeEventListener("ratechange",o),e.playbackRate=s))};i.on(F.Events.FRAG_BUFFERED,l),e.addEventListener("teardown",()=>{n||(n=!0,i.off(F.Events.FRAG_BUFFERED,l),e.playbackRate=s)},{once:!0})},xg=(t,e,i)=>{let{initialEstimateSegments:a}=t;if(a==null||a<=0||!i)return;let r=0;i.on(F.Events.FRAG_BUFFERED,(n,{frag:s})=>{s.type==="main"&&(r++,r<a&&i.abrController.resetEstimator(i.config.abrEwmaDefaultEstimate))})};function Og(t,e){var i;if(!("videoTracks"in t))return;let a=new WeakMap;e.on(F.Events.MANIFEST_PARSED,function(d,m){l();let p=t.addVideoTrack("main");p.selected=!0;for(let[c,u]of m.levels.entries()){let v=p.addRendition(u.url[0],u.width,u.height,u.videoCodec,u.bitrate);a.set(u,`${c}`),v.id=`${c}`}}),e.on(F.Events.AUDIO_TRACKS_UPDATED,function(d,m){o();for(let p of m.audioTracks){let c=p.default?"main":"alternative",u=t.addAudioTrack(c,p.name,p.lang);u.id=`${p.id}`,p.default&&(u.enabled=!0)}});let r=()=>{var d;let m=+((d=[...t.audioTracks].find(c=>c.enabled))==null?void 0:d.id),p=e.audioTracks.map(c=>c.id);m!=e.audioTrack&&p.includes(m)&&(e.audioTrack=m)};t.audioTracks.addEventListener("change",r),e.on(F.Events.LEVELS_UPDATED,function(d,m){var p;let c=t.videoTracks[(p=t.videoTracks.selectedIndex)!=null?p:0];if(!c)return;let u=m.levels.map(v=>a.get(v));for(let v of t.videoRenditions)v.id&&!u.includes(v.id)&&c.removeRendition(v)});let n=d=>{let m=d.target.selectedIndex;m!=e.nextLevel&&(e.nextLevel=m)};(i=t.videoRenditions)==null||i.addEventListener("change",n);let s=()=>{for(let d of t.videoTracks)t.removeVideoTrack(d)},o=()=>{for(let d of t.audioTracks)t.removeAudioTrack(d)},l=()=>{s(),o()};e.once(F.Events.DESTROYING,()=>{var d,m;l(),(d=t.audioTracks)==null||d.removeEventListener("change",r),(m=t.videoRenditions)==null||m.removeEventListener("change",n)})}var yh=t=>t.split("-")[0],ls=({language:t})=>typeof t=="string"?t.toLowerCase():void 0;function Ng(t,e){var i,a;let r=e.toLowerCase(),n=yh(r);return(a=(i=t.find(s=>ls(s)===r))!=null?i:t.find(s=>ls(s)===n))!=null?a:t.find(s=>{let o=ls(s);return o!==void 0&&yh(o)===n})}function Pg(t,e){var i;let a=(Array.isArray(t)?t:[]).filter(r=>typeof r?.title=="string"&&r.title!=="");if(!a.length)return"";for(let r of e){let n=Ng(a,r);if(n)return n.title}return((i=a.find(r=>ls(r)==="und"))!=null?i:a[0]).title}function Ug(t,e=[]){return Array.isArray(t)?t.filter(i=>typeof i?.["start-time"]=="number").map((i,a,r)=>{var n;let s=i["start-time"],o=(n=r[a+1])==null?void 0:n["start-time"],l=typeof i.duration=="number"?s+i.duration:typeof o=="number"?o:void 0;return{startTime:s,...l!=null?{endTime:l}:{},value:Pg(i.titles,e)}}).filter(i=>i.value!==""):[]}var kp=Number.MAX_SAFE_INTEGER,Ll=t=>"time"in t?t.time:t.startTime;function $g(t,e){e.on(F.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(r,{tracks:n})=>{n.forEach(s=>{var o,l;let d=(o=s.subtitleTrack)!=null?o:s.closedCaptions,m=e.subtitleTracks.findIndex(({lang:c,name:u,type:v})=>c==d?.lang&&u===s.label&&v.toLowerCase()===s.kind),p=((l=s._id)!=null?l:s.default)?"default":`${s.kind}${m}`;Cu(t,s.kind,s.label,d?.lang,p,s.default)})});let i=()=>{if(!e.subtitleTracks.length)return;let r=Array.from(t.textTracks).find(o=>o.id&&o.mode==="showing"&&["subtitles","captions"].includes(o.kind));if(!r)return;let n=e.subtitleTracks[e.subtitleTrack],s=n?n.default?"default":`${e.subtitleTracks[e.subtitleTrack].type.toLowerCase()}${e.subtitleTrack}`:void 0;if(e.subtitleTrack<0||r?.id!==s){let o=e.subtitleTracks.findIndex(({lang:l,name:d,type:m,default:p})=>r.id==="default"&&p||l==r.language&&d===r.label&&m.toLowerCase()===r.kind);e.subtitleTrack=o}r?.id===s&&r.cues&&Array.from(r.cues).forEach(o=>{r.addCue(o)})};t.textTracks.addEventListener("change",i),e.on(F.Events.CUES_PARSED,(r,{track:n,cues:s})=>{let o=t.textTracks.getTrackById(n);if(!o)return;let l=o.mode==="disabled";l&&(o.mode="hidden"),s.forEach(d=>{var m;(m=o.cues)!=null&&m.getCueById(d.id)||o.addCue(d)}),l&&(o.mode="disabled")}),e.once(F.Events.DESTROYING,()=>{t.textTracks.removeEventListener("change",i),t.querySelectorAll("track[data-removeondestroy]").forEach(r=>{r.remove()})});let a=()=>{Array.from(t.textTracks).forEach(r=>{var n;if(!["subtitles","caption"].includes(r.kind)&&(r.label==="thumbnails"||r.kind==="chapters")){if(!((n=r.cues)!=null&&n.length)){let s="track";r.kind&&(s+=`[kind="${r.kind}"]`),r.label&&(s+=`[label="${r.label}"]`);let o=t.querySelector(s),l=o?.getAttribute("src");o&&l&&(o.removeAttribute("src"),setTimeout(()=>{o.setAttribute("src",l)},0))}r.mode!=="hidden"&&(r.mode="hidden")}})};e.once(F.Events.MANIFEST_LOADED,a),e.once(F.Events.MEDIA_ATTACHED,a)}function Cu(t,e,i,a,r,n){let s=document.createElement("track");return s.kind=e,s.label=i,a&&(s.srclang=a),r&&(s.id=r),n&&(s.default=!0),s.track.mode=["subtitles","captions"].includes(e)?"disabled":"hidden",s.setAttribute("data-removeondestroy",""),t.append(s),s.track}function Hg(t,e){let i=Array.prototype.find.call(t.querySelectorAll("track"),a=>a.track===e);i?.remove()}function Hn(t,e,i){var a;return(a=Array.from(t.querySelectorAll("track")).find(r=>r.track.label===e&&r.track.kind===i))==null?void 0:a.track}var Ml=new WeakMap;async function Lu(t,e,i){let a=Hn(t,e,i);if(a){let s=Ml.get(a);return s&&await s,a}let r=Cu(t,i,e);r.mode="hidden";let n=new Promise(s=>setTimeout(s,0));return Ml.set(r,n),await n,Ml.delete(r),r}async function Bg(t,e,i,a){let r=await Lu(t,i,a);return Mu(t,r,e,a),r}function Mu(t,e,i,a){e.mode!=="hidden"&&(e.mode="hidden"),[...i].sort((r,n)=>Ll(n)-Ll(r)).forEach(r=>{var n,s;let o=r.value,l=Ll(r);if("endTime"in r&&r.endTime!=null&&Number.isFinite(r.endTime))e?.addCue(new VTTCue(l,r.endTime,a==="chapters"?o:JSON.stringify(o??null)));else{let d=Array.prototype.findIndex.call(e?.cues,u=>u.startTime>=l),m=(n=e?.cues)==null?void 0:n[d],p=m?m.startTime:Number.isFinite(t.duration)&&t.duration>0?t.duration:kp,c=(s=e?.cues)==null?void 0:s[d-1];c&&(c.endTime=l),e?.addCue(new VTTCue(l,p,a==="chapters"?o:JSON.stringify(o??null)))}}),t.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}var Du="cuepoints",Sp=Object.freeze({label:Du});async function wp(t,e,i=Sp){return Bg(t,e,i.label,"metadata")}var td=t=>({time:t.startTime,value:JSON.parse(t.text)});function Wg(t,e={label:Du}){let i=Hn(t,e.label,"metadata");return i!=null&&i.cues?Array.from(i.cues,a=>td(a)):[]}function Ip(t,e={label:Du}){var i,a;let r=Hn(t,e.label,"metadata");if(!((i=r?.activeCues)!=null&&i.length))return;if(r.activeCues.length===1)return td(r.activeCues[0]);let{currentTime:n}=t,s=Array.prototype.find.call((a=r.activeCues)!=null?a:[],({startTime:o,endTime:l})=>o<=n&&l>n);return td(s||r.activeCues[0])}async function Fg(t,e=Sp){return new Promise(i=>{fe(t,"loadstart",async()=>{let a=await wp(t,[],e);fe(t,"cuechange",()=>{let r=Ip(t);if(r){let n=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:r});t.dispatchEvent(n)}},{},a),i(a)})})}var xu="chapters",Ou=Object.freeze({label:xu}),id=(t,e)=>{let{duration:i}=e,a=Number.isFinite(i)&&i>0?Math.min(t.endTime,i):t.endTime>=kp?1/0:t.endTime;return{startTime:t.startTime,endTime:a,value:t.text}},ad=new WeakSet;function Rp(t){var e;Array.from((e=t.cues)!=null?e:[]).filter(i=>ad.has(i)).forEach(i=>t.removeCue(i))}async function Cp(t,e,i=Ou){let a=await Lu(t,i.label,"chapters");return e.length&&Rp(a),Mu(t,a,e,"chapters"),a}async function Kg(t,e,i,a=Ou){var r,n;let s=await Lu(t,a.label,"chapters");return i!=null&&i.aborted||Array.from((r=s.cues)!=null?r:[]).some(o=>!ad.has(o))||(Rp(s),Mu(t,s,e,"chapters"),Array.from((n=s.cues)!=null?n:[]).forEach(o=>ad.add(o))),s}function Vg(t,e={label:xu}){var i;let a=Hn(t,e.label,"chapters");return(i=a?.cues)!=null&&i.length?Array.from(a.cues,r=>id(r,t)):[]}function Lp(t,e={label:xu}){var i,a;let r=Hn(t,e.label,"chapters");if(!((i=r?.activeCues)!=null&&i.length))return;if(r.activeCues.length===1)return id(r.activeCues[0],t);let{currentTime:n}=t,s=Array.prototype.find.call((a=r.activeCues)!=null?a:[],({startTime:o,endTime:l})=>o<=n&&l>n);return id(s||r.activeCues[0],t)}async function qg(t,e=Ou){return new Promise(i=>{fe(t,"loadstart",async()=>{let a=await Cp(t,[],e);fe(t,"cuechange",()=>{let r=Lp(t);if(r){let n=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:r});t.dispatchEvent(n)}},{},a),i(a)})})}function Yg(t,e){if(e){let i=e.playingDate;if(i!=null)return new Date(i.getTime()-t.currentTime*1e3)}return typeof t.getStartDate=="function"?t.getStartDate():new Date(NaN)}function Gg(t,e){if(e&&e.playingDate)return e.playingDate;if(typeof t.getStartDate=="function"){let i=t.getStartDate();return new Date(i.getTime()+t.currentTime*1e3)}return new Date(NaN)}var un={VIDEO:"v",THUMBNAIL:"t",STORYBOARD:"s",DRM:"d"},jg=t=>{if(t===X.VIDEO)return un.VIDEO;if(t===X.DRM)return un.DRM},zg=(t,e)=>{var i,a;let r=rl(t),n=`${r}Token`;return(i=e.tokens)!=null&&i[r]?(a=e.tokens)==null?void 0:a[r]:Iu(n,e)?e[n]:void 0},ko=(t,e,i,a,r=!1,n=!(s=>(s=globalThis.navigator)==null?void 0:s.onLine)())=>{var s;if(n){let _=O("Your device appears to be offline",r),y,f=L.MEDIA_ERR_NETWORK,T=new L(_,f,!1,y);return T.errorCategory=e,T.muxCode=N.NETWORK_OFFLINE,T.data=t,T}let o="status"in t?t.status:t.code,l=Date.now(),d=L.MEDIA_ERR_NETWORK;if(o===200)return;let m=rl(e),p=zg(e,i),c=jg(e),[u]=Ru((s=i.playbackId)!=null?s:"");if(!o||!u)return;let v=ir(p);if(p&&!v){let _=O("The {tokenNamePrefix}-token provided is invalid or malformed.",r).format({tokenNamePrefix:m}),y=O("Compact JWT string: {token}",r).format({token:p}),f=new L(_,d,!0,y);return f.errorCategory=e,f.muxCode=N.NETWORK_TOKEN_MALFORMED,f.data=t,f}if(o>=500){let _=new L("",d,a??!0);return _.errorCategory=e,_.muxCode=N.NETWORK_UNKNOWN_ERROR,_}if(o===403)if(v){if(kg(v,l)){let _={timeStyle:"medium",dateStyle:"medium"},y=O("The video’s secured {tokenNamePrefix}-token has expired.",r).format({tokenNamePrefix:m}),f=new Intl.DateTimeFormat("en",_).format(l),T=v.exp?O("Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat("en",_).format(v.exp*1e3),currentDate:f}):O("The {tokenNamePrefix}-token has no exp value. Current time: {currentDate}.",r).format({tokenNamePrefix:m,currentDate:f}),I=new L(y,d,!0,T);return I.errorCategory=e,I.muxCode=N.NETWORK_TOKEN_EXPIRED,I.data=t,I}if(Sg(v,u)){let _=O("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",r).format({tokenNamePrefix:m}),y=O("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}",r).format({tokenNamePrefix:m,playbackId:u,tokenPlaybackId:v.sub}),f=new L(_,d,!0,y);return f.errorCategory=e,f.muxCode=N.NETWORK_TOKEN_SUB_MISMATCH,f.data=t,f}if(wg(v)){let _=O("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:m}),y=O("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.",r).format({tokenNamePrefix:m,expectedAud:c}),f=new L(_,d,!0,y);return f.errorCategory=e,f.muxCode=N.NETWORK_TOKEN_AUD_MISSING,f.data=t,f}if(Ig(v,c)){let _=O("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:m}),y=O("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",r).format({tokenNamePrefix:m,expectedAud:c,aud:v.aud}),f=new L(_,d,!0,y);return f.errorCategory=e,f.muxCode=N.NETWORK_TOKEN_AUD_MISMATCH,f.data=t,f}}else{let _=O("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.",r).format({tokenNamePrefix:m,category:e}),y=O("Specified playback ID: {playbackId}",r).format({playbackId:u}),f=new L(_,d,a??!0,y);return f.errorCategory=e,f.muxCode=N.NETWORK_TOKEN_MISSING,f.data=t,f}if(o===412){let _=O("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),y=O("Specified playback ID: {playbackId}",r).format({playbackId:u}),f=new L(_,d,a??!0,y);return f.errorCategory=e,f.muxCode=N.NETWORK_NOT_READY,f.streamType=i.streamType===J.LIVE?"live":i.streamType===J.ON_DEMAND?"on-demand":"unknown",f.data=t,f}if(o===404){let _=O("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),y=O("Specified playback ID: {playbackId}",r).format({playbackId:u}),f=new L(_,d,a??!0,y);return f.errorCategory=e,f.muxCode=N.NETWORK_NOT_FOUND,f.data=t,f}if(o===400){let _=O("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."),y=O("Specified playback ID: {playbackId}",r).format({playbackId:u}),f=new L(_,d,a??!0,y);return f.errorCategory=e,f.muxCode=N.NETWORK_INVALID_URL,f.data=t,f}let g=new L("",d,a??!0);return g.errorCategory=e,g.muxCode=N.NETWORK_UNKNOWN_ERROR,g.data=t,g},rd=F.DefaultConfig.capLevelController;rd||console.error("MinCapLevelController - hls.js DefaultConfig.capLevelController is unavailable");var Qg={"720p":921600,"1080p":2073600,"1440p":4194304,"2160p":8294400};function Zg(t){let e=t.toLowerCase().trim();return Qg[e]}var nd=class $r extends rd{constructor(e){super(e)}static setMaxAutoResolution(e,i){i?$r.maxAutoResolution.set(e,i):$r.maxAutoResolution.delete(e)}getMaxAutoResolution(){var e;let i=this.hls;return(e=$r.maxAutoResolution.get(i))!=null?e:void 0}get levels(){var e;return(e=this.hls.levels)!=null?e:[]}getValidLevels(e){return this.levels.filter((i,a)=>this.isLevelAllowed(i)&&a<=e)}getMaxLevelCapped(e){let i=this.getValidLevels(e),a=this.getMaxAutoResolution();if(!a)return super.getMaxLevel(e);let r=Zg(a);if(!r)return super.getMaxLevel(e);let n=i.filter(l=>l.width*l.height<=r),s=n.findIndex(l=>l.width*l.height===r);if(s!==-1){let l=n[s];return i.findIndex(d=>d===l)}if(n.length===0)return 0;let o=n[n.length-1];return i.findIndex(l=>l===o)}getMaxLevel(e){if(this.getMaxAutoResolution()!==void 0)return this.getMaxLevelCapped(e);let i=super.getMaxLevel(e),a=this.getValidLevels(e);if(!a[i])return i;let r=Math.min(a[i].width,a[i].height),n=$r.minMaxResolution;return r>=n?i:rd.getMaxLevelByMediaSize(a,n*(16/9),n)}};nd.minMaxResolution=720,nd.maxAutoResolution=new WeakMap;var Xg=nd,sd=Xg,Jg="com.apple.fps.1_0",e0="application/vnd.apple.mpegurl",t0=({mediaEl:t,getAppCertificate:e,getLicenseKey:i,saveAndDispatchError:a,drmTypeCb:r})=>{if(!window.WebKitMediaKeys||!("onwebkitneedkey"in t)){console.error("No WebKitMediaKeys. FairPlay may not be supported");let c=O("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),u=new L(c,L.MEDIA_ERR_ENCRYPTED,!0);return u.errorCategory=X.DRM,u.muxCode=N.ENCRYPTED_CDM_ERROR,a(t,u),()=>{}}let n=t,s=e(),o=null,l=c=>{(async()=>{try{n.webkitKeys||d();let u=await s;if(c.initData===null||u==null)return;let v=i0(c.initData,u);m(v)}catch(u){console.error("Could not start encrypted playback due to exception",u),a(n,u)}})()},d=()=>{try{let c=new WebKitMediaKeys(Jg);n.webkitSetMediaKeys(c),r()}catch{let c="Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.",u=new L(c,L.MEDIA_ERR_ENCRYPTED,!0);throw u.errorCategory=X.DRM,u.muxCode=N.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,u}},m=c=>{let u=n.webkitKeys.createSession(e0,c),v=async y=>{try{let f=y.message,T=await i(f);u.update(T)}catch(f){console.error("Error on FairPlay session message",f),a(t,f)}},g=y=>{let f=y.target.error;if(!f)return;console.error(`Internal Webkit Key Session Error - sysCode: ${f.systemCode} code: ${f.code}`);let T=O("The DRM Content Decryption Module system had an internal failure. Try reloading the page, updating your browser, or playing in another browser."),I=new L(T,L.MEDIA_ERR_ENCRYPTED,!0);I.errorCategory=X.DRM,I.muxCode=N.ENCRYPTED_CDM_ERROR,a(t,I)},_=()=>{u.removeEventListener("webkitkeymessage",v),u.removeEventListener("webkitkeyerror",g),t.removeEventListener("teardown",_),"webkitCurrentPlaybackTargetIsWireless"in t&&t.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",_),o=null;try{u.close()}catch{}};"webkitCurrentPlaybackTargetIsWireless"in t&&t.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",_,{once:!0}),u.addEventListener("webkitkeymessage",v),u.addEventListener("webkitkeyerror",g),t.addEventListener("teardown",_),o=_},p=()=>{t.removeEventListener("webkitneedkey",l),t.removeEventListener("teardown",p),o?.();try{n.webkitSetMediaKeys(null)}catch{}};return t.addEventListener("webkitneedkey",l),t.addEventListener("teardown",p,{once:!0}),p},i0=(t,e)=>{let i=r0(a0(t)),a=new Uint8Array(t),r=new Uint8Array(i),n=new Uint8Array(e),s=a.byteLength+4+n.byteLength+4+r.byteLength,o=new Uint8Array(s),l=0,d=p=>{o.set(p,l),l+=p.byteLength},m=p=>{let c=new DataView(o.buffer),u=p.byteLength;c.setUint32(l,u,!0),l+=4,d(p)};return d(a),m(r),m(n),o},a0=t=>new TextDecoder("utf-16le").decode(t).replace("skd://","").slice(1);function r0(t){let e=new ArrayBuffer(t.length*2),i=new DataView(e);for(let a=0;a<t.length;a++)i.setUint16(a*2,t.charCodeAt(a),!0);return e}var n0=({mediaEl:t,getAppCertificate:e,getLicenseKey:i,saveAndDispatchError:a,drmTypeCb:r,fallbackToWebkitFairplay:n})=>{let s=null,o=async p=>{try{let c=p.initDataType;if(c!=="skd"){console.error(`Received unexpected initialization data type "${c}"`);return}t.mediaKeys||await l(c);let u=p.initData;if(u==null){console.error(`Could not start encrypted playback due to missing initData in ${p.type} event`);return}await d(c,u)}catch(c){a(t,c);return}},l=async p=>{let c=await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[p],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}]).then(v=>(r(),v)).catch(()=>{let v=O("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),g=new L(v,L.MEDIA_ERR_ENCRYPTED,!0);g.errorCategory=X.DRM,g.muxCode=N.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,a(t,g)});if(!c)return;let u=await c.createMediaKeys();try{let v=await e();await u.setServerCertificate(v).catch(()=>{let g=O("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),_=new L(g,L.MEDIA_ERR_ENCRYPTED,!0);return _.errorCategory=X.DRM,_.muxCode=N.ENCRYPTED_UPDATE_SERVER_CERT_FAILED,Promise.reject(_)})}catch(v){a(t,v);return}await t.setMediaKeys(u)},d=async(p,c)=>{let u=t.mediaKeys.createSession(),v=async y=>{let f=y.message,T=await i(f);try{await u.update(T)}catch{let I=O("Failed to update DRM license. This may be an issue with the player or your protected content."),k=new L(I,L.MEDIA_ERR_ENCRYPTED,!0);k.errorCategory=X.DRM,k.muxCode=N.ENCRYPTED_UPDATE_LICENSE_FAILED,a(t,k)}},g=()=>{let y=f=>{let T;if(f==="internal-error"){let I=O("The DRM Content Decryption Module system had an internal failure. Try reloading the page, updating your browser, or playing in another browser.");T=new L(I,L.MEDIA_ERR_ENCRYPTED,!0),T.errorCategory=X.DRM,T.muxCode=N.ENCRYPTED_CDM_ERROR}else if(f==="output-restricted"||f==="output-downscaled"){let I=O("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.");T=new L(I,L.MEDIA_ERR_ENCRYPTED,!1),T.errorCategory=X.DRM,T.muxCode=N.ENCRYPTED_OUTPUT_RESTRICTED}T&&a(t,T)};u.keyStatuses.forEach(f=>y(f))};u.addEventListener("keystatuseschange",g),u.addEventListener("message",v);let _=async()=>{u.removeEventListener("keystatuseschange",g),u.removeEventListener("message",v),"webkitCurrentPlaybackTargetIsWireless"in t&&t.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",_),t.removeEventListener("teardown",_),await u.close().catch(y=>{console.warn("There was an error when closing EME session",y)}),s=null};"webkitCurrentPlaybackTargetIsWireless"in t&&t.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",_,{once:!0}),t.addEventListener("teardown",_,{once:!0}),s=_,await u.generateRequest(p,c).catch(async y=>{if(y.name==="NotSupportedError"&&"webkitCurrentPlaybackTargetIsWireless"in t&&t.webkitCurrentPlaybackTargetIsWireless)console.warn("Failed to generate a DRM license request. Attempting to fallback to Webkit DRM"),n?.();else{let f=O("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),T=new L(f,L.MEDIA_ERR_ENCRYPTED,!0);return T.errorCategory=X.DRM,T.muxCode=N.ENCRYPTED_GENERATE_REQUEST_FAILED,console.error("Failed to generate license request",y),Promise.reject(T)}})},m=async()=>{t.removeEventListener("encrypted",o),t.removeEventListener("teardown",m),s&&await s(),await t.setMediaKeys(null).catch(()=>{})};return t.addEventListener("encrypted",o),t.addEventListener("teardown",m,{once:!0}),m},s0=({hls:t,mediaEl:e,src:i,muxMediaState:a,saveAndDispatchError:r,maxRetries:n})=>{var s;let o,l=0,d=!1,m=!1,p=!1,c=()=>{o!=null&&(clearTimeout(o),o=void 0)},u=S=>S?.muxCode===N.NETWORK_RECONNECTING,v=()=>!e.paused&&e.readyState<HTMLMediaElement.HAVE_FUTURE_DATA,g=()=>{let S=a.get(e);if(u(S?.error))return;let P=new L(O("Attempting to reconnect..."),L.MEDIA_ERR_NETWORK,!1);P.errorCategory=X.VIDEO,P.muxCode=N.NETWORK_RECONNECTING,S&&(S.error=P),e.dispatchEvent(new CustomEvent("error",{detail:P}))},_=()=>{if(!p&&i){t.loadSource(i);return}t.startLoad(e.currentTime)},y=()=>{d=!1,m=!0,c();let S=new L(O("Network error, try reloading."),L.MEDIA_ERR_NETWORK,!0);S.errorCategory=X.VIDEO,S.reload=!0,r(e,S)},f=()=>{if(o!=null||d)return;if(l>=n){y();return}d=!0;let S=Math.min(1e3*2**l,3e4);o=setTimeout(()=>{o=void 0,l+=1,_()},S)},T=()=>{let S=a.get(e);!(S!=null&&S.networkError)||m||v()&&(g(),f())},I=()=>{let S=a.get(e);S&&(S.networkError=!0),d=!1,T()},k=()=>{let S=a.get(e);S!=null&&S.networkError&&(l=0,m=!1,c(),d=!0,_())};(s=globalThis.addEventListener)==null||s.call(globalThis,"online",k);let C=()=>{let S=a.get(e);S&&(!S.networkError&&!u(S.error)||(S.networkError=!1,d=!1,l=0,m=!1,c(),S.error&&(S.error=null,e.dispatchEvent(new Event("emptied")))))};return t.on(F.Events.FRAG_BUFFERED,C),fe(e,"playing",()=>{let S=a.get(e);S!=null&&S.networkError&&(d=!1,l=0,m=!1,c(),S.error&&(S.error=null))}),fe(e,"waiting",T),e.addEventListener("teardown",()=>{var S;(S=globalThis.removeEventListener)==null||S.call(globalThis,"online",k),c()},{once:!0}),{handleHlsError:(S,P)=>{var q,B;if(S.type!==F.ErrorTypes.NETWORK_ERROR)return!1;let W=(B=(q=S.response)==null?void 0:q.code)!=null?B:0;return(P.muxCode===N.NETWORK_OFFLINE||W===0||W>=500)&&S.fatal?(I(),!0):!1},onManifestLoaded:()=>{p=!0,d=!1,c()}}},ds={FAIRPLAY:"fairplay",PLAYREADY:"playready",WIDEVINE:"widevine"},o0=t=>{if(t.includes("fps"))return ds.FAIRPLAY;if(t.includes("playready"))return ds.PLAYREADY;if(t.includes("widevine"))return ds.WIDEVINE},l0=(t,e,i)=>{let a=yg(t);if(!a)return Promise.reject(new Error("No media playlist URL found in multivariant playlist"));if(ed(a)&&!e)return Promise.reject(new Error("masterPlaylistUrl is required to resolve relative media playlist URL"));let r;try{r=sl(a,e)}catch(n){return Promise.reject(n)}return fetch(r,{signal:i}).then(n=>n.status!==200?Promise.reject(n):n.text())},d0=t=>{let e=t.split(`
`).filter(a=>a.startsWith("#EXT-X-SESSION-DATA"));if(!e.length)return{};let i={};for(let a of e){let r=c0(a),n=r["DATA-ID"];n&&(i[n]={...r})}return{sessionData:i}},u0=/([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g;function c0(t){let e=[...t.matchAll(u0)];return Object.fromEntries(e.map(([,i,a])=>[i,a]))}var h0=t=>{var e,i,a;let r=t.split(`
`),n=(i=((e=r.find(d=>d.startsWith("#EXT-X-PLAYLIST-TYPE")))!=null?e:"").split(":")[1])==null?void 0:i.trim(),s=yp(n),o=Tp(n),l;if(s===J.LIVE){let d=r.find(m=>m.startsWith("#EXT-X-PART-INF"));if(d)l=+d.split(":")[1].split("=")[1]*2;else{let m=r.find(c=>c.startsWith("#EXT-X-TARGETDURATION")),p=(a=m?.split(":"))==null?void 0:a[1];l=+(p??6)*3}}return{streamType:s,targetLiveWindow:o,liveEdgeStartOffset:l}},m0=async(t,e,i)=>{if(e===fi.MP4)return{streamType:J.ON_DEMAND,targetLiveWindow:Number.NaN,liveEdgeStartOffset:void 0,sessionData:void 0,playlistUrl:void 0};if(e===fi.M3U8){let a=await fetch(t,{signal:i});if(!a.ok)return Promise.reject(a);let r=await a.text(),n=a.url||t,s=await l0(r,n,i);return{...d0(r),...h0(s),playlistUrl:n}}return console.error(`Media type ${e} is an unrecognized or unsupported type for src ${t}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0,sessionData:void 0,playlistUrl:void 0}},p0=async(t,e,i=nl({src:t}),a=ol(e))=>{var r,n,s;let{streamType:o,targetLiveWindow:l,liveEdgeStartOffset:d,sessionData:m,playlistUrl:p}=await m0(t,i,a);if(a.aborted)return;let c=Mp(m?.["com.apple.hls.chapters"],p??t);c&&Op(c,e,a),((r=ee.get(e))!=null?r:{}).liveEdgeStartOffset=d,((n=ee.get(e))!=null?n:{}).targetLiveWindow=l,e.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),((s=ee.get(e))!=null?s:{}).streamType=o,e.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},Mp=(t,e)=>{var i;let a=t?.URI||((i=t?.VALUE)!=null&&i.toLocaleLowerCase().startsWith("http")?t.VALUE:void 0);if(a)try{return sl(a,e).toString()}catch{return}},ol=t=>{let e=new AbortController;return t.addEventListener("teardown",()=>e.abort(),{once:!0}),e.signal},Dp=async(t,e)=>{try{let i=await fetch(t,{signal:e});if(!i.ok)throw new Error(`Failed to fetch ${t}: ${i.status} ${i.statusText}`);let a=await i.json();return e.aborted?void 0:a}catch(i){e.aborted||console.error(i);return}},xp=(t,e)=>{var i,a;if(!Array.isArray((i=t?.[0])==null?void 0:i.metadata))return;let r={};for(let s of t[0].metadata)s!=null&&s.key&&s!=null&&s.value&&(r[s.key]=s.value);((a=ee.get(e))!=null?a:{}).metadata=r;let n=new CustomEvent("muxmetadata");e.dispatchEvent(n)},v0=async(t,e,i=ol(e))=>{let a=await Dp(t,i);a!==void 0&&xp(a,e)},Op=async(t,e,i=ol(e))=>{let a=await Dp(t,i);a!==void 0&&(xp(a,e),await Kg(e,Ug(a,_g(e)),i))},f0=t=>{var e;let i=t.type,a=yp(i),r=Tp(i),n,s=!!((e=t.partList)!=null&&e.length);return a===J.LIVE&&(n=s?t.partTarget*2:t.targetduration*3),{streamType:a,targetLiveWindow:r,liveEdgeStartOffset:n,lowLatency:s}},E0=(t,e,i)=>{var a,r,n,s,o,l,d,m;let{streamType:p,targetLiveWindow:c,liveEdgeStartOffset:u,lowLatency:v}=f0(t);if(p===J.LIVE){v?(i.config.backBufferLength=(a=i.userConfig.backBufferLength)!=null?a:4,i.config.maxFragLookUpTolerance=(r=i.userConfig.maxFragLookUpTolerance)!=null?r:.001,i.config.abrBandWidthUpFactor=(n=i.userConfig.abrBandWidthUpFactor)!=null?n:i.config.abrBandWidthFactor):i.config.backBufferLength=(s=i.userConfig.backBufferLength)!=null?s:8;let g=Object.freeze({get length(){return e.seekable.length},start(_){return e.seekable.start(_)},end(_){var y;return _>this.length||_<0||Number.isFinite(e.duration)?e.seekable.end(_):(y=i.liveSyncPosition)!=null?y:e.seekable.end(_)}});((o=ee.get(e))!=null?o:{}).seekable=g}((l=ee.get(e))!=null?l:{}).liveEdgeStartOffset=u,((d=ee.get(e))!=null?d:{}).targetLiveWindow=c,e.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),((m=ee.get(e))!=null?m:{}).streamType=p,e.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},Th,Ah,Np=(Ah=(Th=globalThis?.navigator)==null?void 0:Th.userAgent)!=null?Ah:"",kh,Sh,wh,_0=(wh=(Sh=(kh=globalThis?.navigator)==null?void 0:kh.userAgentData)==null?void 0:Sh.platform)!=null?wh:"",b0=Np.toLowerCase().includes("android")||["x11","android"].some(t=>_0.toLowerCase().includes(t)),g0=t=>/^((?!chrome|android).)*safari/i.test(Np)&&!!t.canPlayType("application/vnd.apple.mpegurl"),ee=new WeakMap,Ei="mux.com",Ih,Rh,Pp=(Rh=(Ih=F).isSupported)==null?void 0:Rh.call(Ih),y0=t=>b0||!g0(t),Nu=()=>{if(typeof window<"u")return wu.utils.now()},T0=wu.utils.generateUUID,od=({playbackId:t,customDomain:e=Ei,maxResolution:i,minResolution:a,renditionOrder:r,programStartTime:n,programEndTime:s,assetStartTime:o,assetEndTime:l,playbackToken:d,tokens:{playback:m=d}={},extraSourceParams:p={}}={})=>{if(!t)return;let[c,u=""]=Ru(t),v=new URL(`https://stream.${e}/${c}.m3u8${u}`);return m||v.searchParams.has("token")?(v.searchParams.forEach((g,_)=>{_!="token"&&v.searchParams.delete(_)}),m&&v.searchParams.set("token",m)):(i&&v.searchParams.set("max_resolution",i),a&&(v.searchParams.set("min_resolution",a),i&&+i.slice(0,-1)<+a.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",a,"maxResolution",i)),r&&v.searchParams.set("rendition_order",r),n&&v.searchParams.set("program_start_time",`${n}`),s&&v.searchParams.set("program_end_time",`${s}`),o&&v.searchParams.set("asset_start_time",`${o}`),l&&v.searchParams.set("asset_end_time",`${l}`),Object.entries(p).forEach(([g,_])=>{_!=null&&v.searchParams.set(g,_)})),v.toString()},ll=t=>{if(!t)return;let[e]=t.split("?");return e||void 0},Pu=t=>{if(!t||!t.startsWith("https://stream."))return;let[e]=new URL(t).pathname.slice(1).split(/\.m3u8|\//);return e||void 0},A0=t=>{var e,i,a;return(e=t?.metadata)!=null&&e.video_id?t.metadata.video_id:qp(t)&&(a=(i=ll(t.playbackId))!=null?i:Pu(t.src))!=null?a:t.src},Up=t=>{var e;return(e=ee.get(t))==null?void 0:e.error},k0=t=>{var e;return(e=ee.get(t))==null?void 0:e.metadata},ld=t=>{var e,i;return(i=(e=ee.get(t))==null?void 0:e.streamType)!=null?i:J.UNKNOWN},S0=t=>{var e,i;return(i=(e=ee.get(t))==null?void 0:e.targetLiveWindow)!=null?i:Number.NaN},Uu=t=>{var e,i;return(i=(e=ee.get(t))==null?void 0:e.seekable)!=null?i:t.seekable},w0=t=>{var e;let i=(e=ee.get(t))==null?void 0:e.liveEdgeStartOffset;if(typeof i!="number")return Number.NaN;let a=Uu(t);return a.length?a.end(a.length-1)-i:Number.NaN},I0=t=>{var e;return(e=ee.get(t))==null?void 0:e.coreReference},$u=.034,R0=(t,e,i=$u)=>Math.abs(t-e)<=i,$p=(t,e,i=$u)=>t>e||R0(t,e,i),C0=(t,e=$u)=>t.paused&&$p(t.currentTime,t.duration,e),Hp=(t,e)=>{var i,a,r;if(!e||!t.buffered.length)return;if(t.readyState>2)return!1;let n=e.currentLevel>=0?(a=(i=e.levels)==null?void 0:i[e.currentLevel])==null?void 0:a.details:(r=e.levels.find(p=>!!p.details))==null?void 0:r.details;if(!n||n.live)return;let{fragments:s}=n;if(!(s!=null&&s.length))return;if(t.currentTime<t.duration-(n.targetduration+.5))return!1;let o=s[s.length-1];if(t.currentTime<=o.start)return!1;let l=o.start+o.duration/2,d=t.buffered.start(t.buffered.length-1),m=t.buffered.end(t.buffered.length-1);return l>d&&l<m},Bp=(t,e)=>t.ended||t.loop?t.ended:e&&Hp(t,e)?!0:C0(t),Wp=(t,e,i)=>{Fp(e,i,t);let{metadata:a={}}=t,{view_session_id:r=T0()}=a,n=A0(t);a.view_session_id=r,a.video_id=n,t.metadata=a;let s=c=>{var u;(u=e.mux)==null||u.emit("hb",{view_drm_type:c})};t.drmTypeCb=s,t.fallbackToWebkitFairplay=async()=>{var c;let u=!e.paused,v=e.currentTime;t.useWebkitFairplay=!0;let g=t.muxDataKeepSession;t.muxDataKeepSession=!0;let _=(c=ee.get(e))==null?void 0:c.coreReference;Wp(t,e,_),t.muxDataKeepSession=g,t.useWebkitFairplay=!1,u&&await e.play().then(()=>{e.currentTime=v}).catch(()=>{}),e.currentTime=v},ee.set(e,{retryCount:0});let o=x0(t,e),l=Mg(t,e,o);t!=null&&t.muxDataKeepSession&&e!=null&&e.mux&&!e.mux.deleted?o&&e.mux.addHLSJS({hlsjs:o,Hls:o?F:void 0}):Yp(t,e,o),B0(t,e,o),Fg(e),qg(e);let d=Lg(t,e,o);Dg(t,e,o),xg(t,e,o);let m={engine:o,setAutoplay:d,setPreload:l},p=ee.get(e);return p&&(p.coreReference=m),m},L0=()=>{let t=new Date(0).toUTCString(),e=new Set(["muxData"]);document.cookie.split(";").forEach(i=>{let a=i.split("=")[0].trim();a.startsWith("muxData")&&e.add(a)}),e.forEach(i=>{document.cookie=`${i}=;expires=${t};path=/`})},Dl=new WeakMap,M0=(t,e,i)=>{e&&(e.mux&&(e.mux.deleted||e.mux.destroy(),delete e.mux),!Dl.has(e)&&Dl.set(e,Promise.resolve().then(()=>{var a,r;Dl.delete(e);let n=ee.get(e);if(!n||e.mux&&!e.mux.deleted)return;let s=(r=(a=n.coreReference)!=null?a:i)==null?void 0:r.engine;Yp(t,e,s)})))},D0=(t,e,i)=>{if(!e)return;let a=!!t.disableCookies,r=ee.get(e);!r||r.muxDataDisableCookies===a||(M0(t,e,i),a&&Promise.resolve().then(()=>{t.disableCookies&&L0()}))},Fp=(t,e,i)=>{let a=e?.engine;t!=null&&t.mux&&!t.mux.deleted&&(i!=null&&i.muxDataKeepSession?a&&t.mux.removeHLSJS():(t.mux.destroy(),delete t.mux)),a&&(a.detachMedia(),a.destroy()),t&&(t.hasAttribute("src")&&(t.removeAttribute("src"),t.load()),t.removeEventListener("error",jp),t.removeEventListener("error",dd),t.removeEventListener("durationchange",Gp),ee.delete(t),t.dispatchEvent(new Event("teardown")))};function Kp(t,e){var i;let a=nl(t);if(a!==fi.M3U8)return!0;let r=!a||((i=e.canPlayType(a))!=null?i:!0),{preferPlayback:n}=t,s=n===Zt.MSE,o=n===Zt.NATIVE,l=Pp&&(s||y0(e));return r&&(o||!l)}var x0=(t,e)=>{let{debug:i,streamType:a,startTime:r=-1,metadata:n,preferCmcd:s,_hlsConfig:o={},maxAutoResolution:l,initialBandwidthEstimateKbps:d}=t,m=nl(t)===fi.M3U8,p=Kp(t,e);if(m&&!p&&Pp){let c={backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelOnFPSDrop:!0,...d!=null?{abrEwmaDefaultEstimate:d*1e3}:{}},u=O0(a),v=N0(t),g=[Ur.QUERY,Ur.HEADER].includes(s)?{useHeaders:s===Ur.HEADER,sessionId:n?.view_session_id,contentId:n?.video_id}:void 0,_=H0(t),y=new F({debug:i,startPosition:r,cmcd:g,xhrSetup:(f,T)=>{var I,k;if(s&&s!==Ur.QUERY)return;let C=sl(T);if(!C.searchParams.has("CMCD"))return;let S=((k=(I=C.searchParams.get("CMCD"))==null?void 0:I.split(","))!=null?k:[]).filter(P=>P.startsWith("sid")||P.startsWith("cid")).join(",");C.searchParams.set("CMCD",S),f.open("GET",C)},...c,..._,...u,...v,...o});return _.capLevelController===sd&&l!==void 0&&sd.setMaxAutoResolution(y,l),y.on(F.Events.MANIFEST_LOADED,async function(f,T){var I;let k=Mp((I=T.sessionData)==null?void 0:I["com.apple.hls.chapters"],T.url);k&&Op(k,e)}),y}},O0=t=>t===J.LIVE?{backBufferLength:8}:{},N0=t=>{let{tokens:{drm:e}={},playbackId:i,drmTypeCb:a}=t,r=ll(i);return!e||!r?{}:{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:us(t,"fairplay"),serverCertificateUrl:Vp(t,"fairplay")},"com.widevine.alpha":{licenseUrl:us(t,"widevine")},"com.microsoft.playready":{licenseUrl:us(t,"playready")}},requestMediaKeySystemAccessFunc:(n,s)=>(n==="com.widevine.alpha"&&(s=[...s.map(o=>{var l;let d=(l=o.videoCapabilities)==null?void 0:l.map(m=>({...m,robustness:"HW_SECURE_ALL"}));return{...o,videoCapabilities:d}}),...s]),navigator.requestMediaKeySystemAccess(n,s).then(o=>{let l=o0(n);return a?.(l),o}))}},P0=async t=>{let e=await fetch(t);return e.status!==200?Promise.reject(e):await e.arrayBuffer()},U0=async(t,e)=>{let i=await fetch(e,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:t});if(i.status!==200)return Promise.reject(i);let a=await i.arrayBuffer();return new Uint8Array(a)},$0=(t,e)=>{let i={mediaEl:e,getAppCertificate:()=>P0(Vp(t,"fairplay")).catch(a=>{if(a instanceof Response){let r=ko(a,X.DRM,t);return console.error("mediaError",r?.message,r?.context),r?Promise.reject(r):Promise.reject(new Error("Unexpected error in app cert request"))}return Promise.reject(a)}),getLicenseKey:a=>U0(a,us(t,"fairplay")).catch(r=>{if(r instanceof Response){let n=ko(r,X.DRM,t);return console.error("mediaError",n?.message,n?.context),n?Promise.reject(n):Promise.reject(new Error("Unexpected error in license key request"))}return Promise.reject(r)}),saveAndDispatchError:hi,drmTypeCb:()=>{var a;(a=t.drmTypeCb)==null||a.call(t,ds.FAIRPLAY)}};if(t.useWebkitFairplay)t0(i);else{let a={fallbackToWebkitFairplay:async()=>{var n;await r(),(n=t.fallbackToWebkitFairplay)==null||n.call(t)},...i},r=n0(a)}},us=({playbackId:t,tokens:{drm:e}={},customDomain:i=Ei},a)=>{let r=ll(t);return`https://license.${i.toLocaleLowerCase().endsWith(Ei)?i:Ei}/license/${a}/${r}?token=${e}`},Vp=({playbackId:t,tokens:{drm:e}={},customDomain:i=Ei},a)=>{let r=ll(t);return`https://license.${i.toLocaleLowerCase().endsWith(Ei)?i:Ei}/appcert/${a}/${r}?token=${e}`},qp=({playbackId:t,src:e,customDomain:i})=>{if(t)return!0;if(typeof e!="string")return!1;let a=window?.location.href,r=new URL(e,a).hostname.toLocaleLowerCase();return r.includes(Ei)||!!i&&r.includes(i.toLocaleLowerCase())},H0=(t,e)=>{let i={};return i.capLevelToPlayerSize=t.capRenditionToPlayerSize,i.capLevelToPlayerSize==null?(i.capLevelController=sd,i.capLevelToPlayerSize=!0):i.capLevelController=EE,i},Yp=(t,e,i)=>{var a;let{envKey:r,disableTracking:n,muxDataSDK:s=wu,muxDataSDKOptions:o={}}=t,l=qp(t),d=ee.get(e);if(d&&(d.muxDataDisableCookies=!!t.disableCookies),!n&&(r||l)){let{playerInitTime:m,playerSoftwareName:p,playerSoftwareVersion:c,beaconCollectionDomain:u,debug:v,disableCookies:g}=t,_={...t.metadata,video_title:((a=t?.metadata)==null?void 0:a.video_title)||void 0},y=f=>typeof f.player_error_code=="string"?!1:typeof t.errorTranslator=="function"?t.errorTranslator(f):f;s.monitor(e,{debug:v,beaconCollectionDomain:u,hlsjs:i,Hls:i?F:void 0,automaticErrorTracking:!1,errorTranslator:y,disableCookies:g,...o,data:{...r?{env_key:r}:{},player_software_name:p,player_software:p,player_software_version:c,player_init_time:m,..._}})}},B0=(t,e,i)=>{var a,r,n;let s=Kp(t,e),{src:o,customDomain:l=Ei}=t,d=()=>{e.ended||t.disablePseudoEnded||!Bp(e,i)||(Hp(e,i)?e.currentTime=e.buffered.end(e.buffered.length-1):e.dispatchEvent(new Event("ended")))},m,p,c=()=>{let u=Uu(e),v,g;u.length>0&&(v=u.start(0),g=u.end(0)),(p!==g||m!==v)&&e.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),m=v,p=g};if(fe(e,"durationchange",c),e&&s){let u=nl(t);if(typeof o=="string"){if(o.endsWith(".mp4")&&o.includes(l)){let _=Pu(o),y=new URL(`https://stream.${l}/${_}/metadata.json`);v0(y.toString(),e)}let v=()=>{if(ld(e)!==J.LIVE||Number.isFinite(e.duration))return;let _=setInterval(c,1e3);e.addEventListener("teardown",()=>{clearInterval(_)},{once:!0}),fe(e,"durationchange",()=>{Number.isFinite(e.duration)&&clearInterval(_)})},g=async()=>{let _=ol(e);return p0(o,e,u,_).then(()=>{_.aborted||v()}).catch(y=>{if(y instanceof Response){let f=ko(y,X.VIDEO,t);if(f){hi(e,f);return}}})};if(e.preload==="none"){let _=()=>{g(),e.removeEventListener("loadedmetadata",y)},y=()=>{g(),e.removeEventListener("play",_)};fe(e,"play",_,{once:!0}),fe(e,"loadedmetadata",y,{once:!0})}else g();(a=t.tokens)!=null&&a.drm?$0(t,e):fe(e,"encrypted",()=>{let _=O("Attempting to play DRM-protected content without providing a DRM token."),y=new L(_,L.MEDIA_ERR_ENCRYPTED,!0);y.errorCategory=X.DRM,y.muxCode=N.ENCRYPTED_MISSING_TOKEN,hi(e,y)},{once:!0}),e.setAttribute("src",o),t.startTime&&(((r=ee.get(e))!=null?r:{}).startTime=t.startTime,e.addEventListener("durationchange",Gp,{once:!0}))}else e.removeAttribute("src");e.addEventListener("error",jp),e.addEventListener("error",dd),e.addEventListener("emptied",()=>{e.querySelectorAll("track[data-removeondestroy]").forEach(v=>{v.remove()})},{once:!0}),fe(e,"pause",d),fe(e,"seeked",d),fe(e,"play",()=>{e.ended||$p(e.currentTime,e.duration)&&(e.currentTime=e.seekable.length?e.seekable.start(0):0)})}else if(i&&o){i.once(F.Events.LEVEL_LOADED,(g,_)=>{E0(_.details,e,i),c(),ld(e)===J.LIVE&&!Number.isFinite(e.duration)&&(i.on(F.Events.LEVEL_UPDATED,c),fe(e,"durationchange",()=>{Number.isFinite(e.duration)&&i.off(F.Events.LEVELS_UPDATED,c)}))});let u=(n=t.maxReconnectRetries)!=null?n:0,v=u>0?s0({hls:i,mediaEl:e,src:o,muxMediaState:ee,saveAndDispatchError:hi,maxRetries:u}):void 0;i.on(F.Events.ERROR,(g,_)=>{var y,f;let T=W0(_,t);if(T.muxCode===N.NETWORK_NOT_READY){let I=(y=ee.get(e))!=null?y:{},k=(f=I.retryCount)!=null?f:0;if(k<6){let C=k===0?5e3:6e4,S=new L(`Retrying in ${C/1e3} seconds...`,T.code,T.fatal);Object.assign(S,T),hi(e,S);let P=setTimeout(()=>{I.retryCount=k+1,_.details==="manifestLoadError"&&_.url&&i.loadSource(_.url)},C);e.addEventListener("teardown",()=>clearTimeout(P),{once:!0});return}else{I.retryCount=0;let C=new L("Network error, try reloading.",T.code,T.fatal);Object.assign(C,T),C.reload=!0,hi(e,C);return}}v!=null&&v.handleHlsError(_,T)||hi(e,T)}),i.on(F.Events.MANIFEST_LOADED,()=>{v?.onManifestLoaded();let g=ee.get(e);g!=null&&g.networkError||g&&g.error&&(g.error=null,g.retryCount=0,e.dispatchEvent(new Event("emptied")),e.dispatchEvent(new Event("loadstart")))}),e.addEventListener("error",dd),fe(e,"waiting",d),Og(t,i),$g(e,i),i.attachMedia(e)}else console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")};function Gp(t){var e;let i=t.target,a=(e=ee.get(i))==null?void 0:e.startTime;if(a&&bg(i.seekable,i.duration,a)){let r=i.preload==="auto";r&&(i.preload="none"),i.currentTime=a,r&&(i.preload="auto")}}async function jp(t){if(!t.isTrusted)return;t.stopImmediatePropagation();let e=t.target;if(!(e!=null&&e.error))return;let{message:i,code:a}=e.error,r=new L(i,a);if(e.src&&a===L.MEDIA_ERR_SRC_NOT_SUPPORTED&&e.readyState===HTMLMediaElement.HAVE_NOTHING){setTimeout(()=>{var n;let s=(n=Up(e))!=null?n:e.error;s?.code===L.MEDIA_ERR_SRC_NOT_SUPPORTED&&hi(e,r)},500);return}if(e.src&&(a!==L.MEDIA_ERR_DECODE||a!==void 0))try{let{status:n}=await fetch(e.src);r.data={response:{code:n}}}catch{}hi(e,r)}function hi(t,e){var i;e.fatal&&(((i=ee.get(t))!=null?i:{}).error=e,t.dispatchEvent(new CustomEvent("error",{detail:e})))}function dd(t){var e,i;if(!(t instanceof CustomEvent)||!(t.detail instanceof L))return;let a=t.target,r=t.detail;!r||!r.fatal||(((e=ee.get(a))!=null?e:{}).error=r,(i=a.mux)==null||i.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}var W0=(t,e)=>{var i,a,r;t.fatal?console.error("getErrorFromHlsErrorData()",t):e.debug&&console.warn("getErrorFromHlsErrorData() (non-fatal)",t);let n={[F.ErrorTypes.NETWORK_ERROR]:L.MEDIA_ERR_NETWORK,[F.ErrorTypes.MEDIA_ERROR]:L.MEDIA_ERR_DECODE,[F.ErrorTypes.KEY_SYSTEM_ERROR]:L.MEDIA_ERR_ENCRYPTED},s=m=>[F.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,F.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(m.details)?L.MEDIA_ERR_NETWORK:n[m.type],o=m=>{if(m.type===F.ErrorTypes.KEY_SYSTEM_ERROR)return X.DRM;if(m.type===F.ErrorTypes.NETWORK_ERROR)return X.VIDEO},l,d=s(t);if(d===L.MEDIA_ERR_NETWORK&&t.response){let m=(i=o(t))!=null?i:X.VIDEO;l=(a=ko(t.response,m,e,t.fatal))!=null?a:new L("",d,t.fatal)}else if(d===L.MEDIA_ERR_ENCRYPTED)if(t.details===F.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE){let m=O("Attempting to play DRM-protected content without providing a DRM token.");l=new L(m,L.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=X.DRM,l.muxCode=N.ENCRYPTED_MISSING_TOKEN}else if(t.details===F.ErrorDetails.KEY_SYSTEM_NO_ACCESS){let m=O("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.");l=new L(m,L.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=X.DRM,l.muxCode=N.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM}else if(t.details===F.ErrorDetails.KEY_SYSTEM_NO_SESSION){let m=O("Failed to generate a DRM license request. This may be an issue with the player or your protected content.");l=new L(m,L.MEDIA_ERR_ENCRYPTED,!0),l.errorCategory=X.DRM,l.muxCode=N.ENCRYPTED_GENERATE_REQUEST_FAILED}else if(t.details===F.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED){let m=O("Failed to update DRM license. This may be an issue with the player or your protected content.");l=new L(m,L.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=X.DRM,l.muxCode=N.ENCRYPTED_UPDATE_LICENSE_FAILED}else if(t.details===F.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED){let m=O("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate.");l=new L(m,L.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=X.DRM,l.muxCode=N.ENCRYPTED_UPDATE_SERVER_CERT_FAILED}else if(t.details===F.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR){let m=O("The DRM Content Decryption Module system had an internal failure. Try reloading the page, updating your browser, or playing in another browser.");l=new L(m,L.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=X.DRM,l.muxCode=N.ENCRYPTED_CDM_ERROR}else if(t.details===F.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED){let m=O("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.");l=new L(m,L.MEDIA_ERR_ENCRYPTED,!1),l.errorCategory=X.DRM,l.muxCode=N.ENCRYPTED_OUTPUT_RESTRICTED}else l=new L(t.error.message,L.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=X.DRM,l.muxCode=N.ENCRYPTED_ERROR;else l=new L("",d,t.fatal);return l.context||(l.context=`${t.url?`url: ${t.url}
`:""}${t.response&&(t.response.code||t.response.text)?`response: ${t.response.code}, ${t.response.text}
`:""}${t.reason?`failure reason: ${t.reason}
`:""}${t.level?`level: ${t.level}
`:""}${t.parent?`parent stream controller: ${t.parent}
`:""}${t.buffer?`buffer length: ${t.buffer}
`:""}${t.error?`error: ${t.error}
`:""}${t.event?`event: ${t.event}
`:""}${t.err?`error message: ${(r=t.err)==null?void 0:r.message}
`:""}`),l.data=t,l},zp=t=>{throw TypeError(t)},Hu=(t,e,i)=>e.has(t)||zp("Cannot "+i),Ee=(t,e,i)=>(Hu(t,e,"read from private field"),i?i.call(t):e.get(t)),ut=(t,e,i)=>e.has(t)?zp("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),wt=(t,e,i,a)=>(Hu(t,e,"write to private field"),e.set(t,i),i),Kn=(t,e,i)=>(Hu(t,e,"access private method"),i),F0=()=>{try{return"0.31.6"}catch{}return"UNKNOWN"},K0=F0(),V0=()=>K0,q0=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`;function Y0(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var E={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended",MAX_RECONNECT_RETRIES:"max-reconnect-retries",DRM_TOKEN:"drm-token",PLAYBACK_TOKEN:"playback-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",MAX_AUTO_RESOLUTION:"max-auto-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",ASSET_START_TIME:"asset-start-time",ASSET_END_TIME:"asset-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PLAYER_INIT_TIME:"player-init-time",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type",LOGO:"logo",CAP_RENDITION_TO_PLAYER_SIZE:"cap-rendition-to-player-size",INITIAL_BANDWIDTH_ESTIMATE_KBPS:"initial-bandwidth-estimate-kbps",INITIAL_ESTIMATE_SEGMENTS:"initial-estimate-segments",MIN_PRELOAD_SEGMENTS:"min-preload-segments"},G0=Object.values(E),Ch=V0(),Lh="mux-video",Hr,cs,Br,hs,ms,ps,vs,fs,Wr,Es,nt,ki,_s,Fr,j0=class extends Wn{constructor(){super(),ut(this,nt),ut(this,Hr),ut(this,cs),ut(this,Br,{}),ut(this,hs,{}),ut(this,ms),ut(this,ps),ut(this,vs),ut(this,fs),ut(this,Wr,""),ut(this,Es,e=>{var i;let a=k0(this.nativeEl),r=(i=this.metadata)!=null?i:{};this.metadata={...a,...r},a?.["com.mux.video.branding"]==="mux-free-plan"&&(wt(this,Wr,"default"),this.updateLogo())}),ut(this,_s),wt(this,cs,Nu())}static get NAME(){return Lh}static get VERSION(){return Ch}static get observedAttributes(){var e;return[...G0,...(e=Wn.observedAttributes)!=null?e:[]]}static getLogoHTML(e){return!e||e==="false"?"":e==="default"?q0:`<img part="logo" src="${Y0(e)}" />`}static getTemplateHTML(e={}){var i;return`
      ${Wn.getTemplateHTML(e)}
      <style>
        :host {
          position: relative;
        }
        slot[name="logo"] {
          display: flex;
          justify-content: end;
          position: absolute;
          top: 1rem;
          right: 1rem;
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          z-index: 1;
        }
        slot[name="logo"]:has([part="logo"]) {
          opacity: 1;
        }
        slot[name="logo"] [part="logo"] {
          width: 5rem;
          pointer-events: none;
          user-select: none;
        }
      </style>
      <slot name="logo">
        ${this.getLogoHTML((i=e[E.LOGO])!=null?i:"")}
      </slot>
    `}get preferCmcd(){var e;return(e=this.getAttribute(E.PREFER_CMCD))!=null?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?Ao.includes(e)?this.setAttribute(E.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${Ao.join()}`):this.removeAttribute(E.PREFER_CMCD))}get playerInitTime(){return this.hasAttribute(E.PLAYER_INIT_TIME)?+this.getAttribute(E.PLAYER_INIT_TIME):Ee(this,cs)}set playerInitTime(e){e!=this.playerInitTime&&(e==null?this.removeAttribute(E.PLAYER_INIT_TIME):this.setAttribute(E.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return(e=Ee(this,vs))!=null?e:Lh}set playerSoftwareName(e){wt(this,vs,e)}get playerSoftwareVersion(){var e;return(e=Ee(this,ps))!=null?e:Ch}set playerSoftwareVersion(e){wt(this,ps,e)}get _hls(){var e;return(e=Ee(this,nt,ki))==null?void 0:e.engine}get mux(){var e;return(e=this.nativeEl)==null?void 0:e.mux}get error(){var e;return(e=Up(this.nativeEl))!=null?e:null}get errorTranslator(){return Ee(this,fs)}set errorTranslator(e){wt(this,fs,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(e==null?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return(e=this.getAttribute(E.TYPE))!=null?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(E.TYPE,e):this.removeAttribute(E.TYPE))}get preload(){let e=this.getAttribute("preload");return e===""?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return this.getAttribute(E.DEBUG)!=null}set debug(e){e!==this.debug&&(e?this.setAttribute(E.DEBUG,""):this.removeAttribute(E.DEBUG))}get disableTracking(){return this.hasAttribute(E.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(E.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(E.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(E.DISABLE_COOKIES,""):this.removeAttribute(E.DISABLE_COOKIES))}get disablePseudoEnded(){return this.hasAttribute(E.DISABLE_PSEUDO_ENDED)}set disablePseudoEnded(e){e!==this.disablePseudoEnded&&(e?this.setAttribute(E.DISABLE_PSEUDO_ENDED,""):this.removeAttribute(E.DISABLE_PSEUDO_ENDED))}get maxReconnectRetries(){let e=this.getAttribute(E.MAX_RECONNECT_RETRIES);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set maxReconnectRetries(e){e!==this.maxReconnectRetries&&(e==null?this.removeAttribute(E.MAX_RECONNECT_RETRIES):this.setAttribute(E.MAX_RECONNECT_RETRIES,`${e}`))}get startTime(){let e=this.getAttribute(E.START_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set startTime(e){e!==this.startTime&&(e==null?this.removeAttribute(E.START_TIME):this.setAttribute(E.START_TIME,`${e}`))}get initialBandwidthEstimateKbps(){let e=this.getAttribute(E.INITIAL_BANDWIDTH_ESTIMATE_KBPS);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set initialBandwidthEstimateKbps(e){e!==this.initialBandwidthEstimateKbps&&(e==null?this.removeAttribute(E.INITIAL_BANDWIDTH_ESTIMATE_KBPS):this.setAttribute(E.INITIAL_BANDWIDTH_ESTIMATE_KBPS,`${e}`))}get initialEstimateSegments(){let e=this.getAttribute(E.INITIAL_ESTIMATE_SEGMENTS);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set initialEstimateSegments(e){e!==this.initialEstimateSegments&&(e==null?this.removeAttribute(E.INITIAL_ESTIMATE_SEGMENTS):this.setAttribute(E.INITIAL_ESTIMATE_SEGMENTS,`${e}`))}get minPreloadSegments(){let e=this.getAttribute(E.MIN_PRELOAD_SEGMENTS);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set minPreloadSegments(e){e!==this.minPreloadSegments&&(e==null?this.removeAttribute(E.MIN_PRELOAD_SEGMENTS):this.setAttribute(E.MIN_PRELOAD_SEGMENTS,`${e}`))}get playbackId(){var e;return this.hasAttribute(E.PLAYBACK_ID)?this.getAttribute(E.PLAYBACK_ID):(e=Pu(this.src))!=null?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(E.PLAYBACK_ID,e):this.removeAttribute(E.PLAYBACK_ID))}get maxResolution(){var e;return(e=this.getAttribute(E.MAX_RESOLUTION))!=null?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(E.MAX_RESOLUTION,e):this.removeAttribute(E.MAX_RESOLUTION))}get minResolution(){var e;return(e=this.getAttribute(E.MIN_RESOLUTION))!=null?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(E.MIN_RESOLUTION,e):this.removeAttribute(E.MIN_RESOLUTION))}get maxAutoResolution(){var e;return(e=this.getAttribute(E.MAX_AUTO_RESOLUTION))!=null?e:void 0}set maxAutoResolution(e){e==null?this.removeAttribute(E.MAX_AUTO_RESOLUTION):this.setAttribute(E.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return(e=this.getAttribute(E.RENDITION_ORDER))!=null?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(E.RENDITION_ORDER,e):this.removeAttribute(E.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(E.PROGRAM_START_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set programStartTime(e){e==null?this.removeAttribute(E.PROGRAM_START_TIME):this.setAttribute(E.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(E.PROGRAM_END_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set programEndTime(e){e==null?this.removeAttribute(E.PROGRAM_END_TIME):this.setAttribute(E.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){let e=this.getAttribute(E.ASSET_START_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set assetStartTime(e){e==null?this.removeAttribute(E.ASSET_START_TIME):this.setAttribute(E.ASSET_START_TIME,`${e}`)}get assetEndTime(){let e=this.getAttribute(E.ASSET_END_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set assetEndTime(e){e==null?this.removeAttribute(E.ASSET_END_TIME):this.setAttribute(E.ASSET_END_TIME,`${e}`)}get customDomain(){var e;return(e=this.getAttribute(E.CUSTOM_DOMAIN))!=null?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(E.CUSTOM_DOMAIN,e):this.removeAttribute(E.CUSTOM_DOMAIN))}get capRenditionToPlayerSize(){var e;return((e=this._hlsConfig)==null?void 0:e.capLevelToPlayerSize)!=null?this._hlsConfig.capLevelToPlayerSize:Ee(this,_s)}set capRenditionToPlayerSize(e){wt(this,_s,e)}get drmToken(){var e;return(e=this.getAttribute(E.DRM_TOKEN))!=null?e:void 0}set drmToken(e){e!==this.drmToken&&(e?this.setAttribute(E.DRM_TOKEN,e):this.removeAttribute(E.DRM_TOKEN))}get playbackToken(){var e,i,a,r;if(this.hasAttribute(E.PLAYBACK_TOKEN))return(e=this.getAttribute(E.PLAYBACK_TOKEN))!=null?e:void 0;if(this.hasAttribute(E.PLAYBACK_ID)){let[,n]=Ru((i=this.playbackId)!=null?i:"");return(a=new URLSearchParams(n).get("token"))!=null?a:void 0}if(this.src)return(r=new URLSearchParams(this.src).get("token"))!=null?r:void 0}set playbackToken(e){e!==this.playbackToken&&(e?this.setAttribute(E.PLAYBACK_TOKEN,e):this.removeAttribute(E.PLAYBACK_TOKEN))}get tokens(){let e=this.getAttribute(E.PLAYBACK_TOKEN),i=this.getAttribute(E.DRM_TOKEN);return{...Ee(this,hs),...e!=null?{playback:e}:{},...i!=null?{drm:i}:{}}}set tokens(e){wt(this,hs,e??{})}get ended(){return Bp(this.nativeEl,this._hls)}get envKey(){var e;return(e=this.getAttribute(E.ENV_KEY))!=null?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(E.ENV_KEY,e):this.removeAttribute(E.ENV_KEY))}get beaconCollectionDomain(){var e;return(e=this.getAttribute(E.BEACON_COLLECTION_DOMAIN))!=null?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(E.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(E.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return(e=this.getAttribute(E.STREAM_TYPE))!=null?e:ld(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(E.STREAM_TYPE,e):this.removeAttribute(E.STREAM_TYPE))}get targetLiveWindow(){return this.hasAttribute(E.TARGET_LIVE_WINDOW)?+this.getAttribute(E.TARGET_LIVE_WINDOW):S0(this.nativeEl)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(e==null?this.removeAttribute(E.TARGET_LIVE_WINDOW):this.setAttribute(E.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,i;if(this.hasAttribute(E.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:a}=this,r=(e=this.nativeEl.seekable.end(0))!=null?e:0,n=(i=this.nativeEl.seekable.start(0))!=null?i:0;return Math.max(n,r-a)}return w0(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(E.LIVE_EDGE_OFFSET))return+this.getAttribute(E.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.liveEdgeOffset&&(e==null?this.removeAttribute(E.LIVE_EDGE_OFFSET):this.setAttribute(E.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return Uu(this.nativeEl)}async addCuePoints(e){return this.nativeEl.currentSrc||console.warn("addCuePoints() was called before the media element has loaded. Wait for the loadstart event before calling addCuePoints()."),wp(this.nativeEl,e)}get activeCuePoint(){return Ip(this.nativeEl)}get cuePoints(){return Wg(this.nativeEl)}async addChapters(e){return this.nativeEl.currentSrc||console.warn("addChapters() was called before the media element has loaded. Wait for the loadstart event before calling addChapters()."),Cp(this.nativeEl,e)}get activeChapter(){return Lp(this.nativeEl)}get chapters(){return Vg(this.nativeEl)}getStartDate(){return Yg(this.nativeEl,this._hls)}get currentPdt(){return Gg(this.nativeEl,this._hls)}get preferPlayback(){let e=this.getAttribute(E.PREFER_PLAYBACK);if(e===Zt.MSE||e===Zt.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===Zt.MSE||e===Zt.NATIVE?this.setAttribute(E.PREFER_PLAYBACK,e):this.removeAttribute(E.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![E.METADATA_URL].includes(e)).reduce((e,i)=>{let a=this.getAttribute(i);return a!=null&&(e[i.replace(/^metadata-/,"").replace(/-/g,"_")]=a),e},{}),...Ee(this,Br)}}set metadata(e){wt(this,Br,e??{}),this.mux&&this.mux.emit("hb",Ee(this,Br))}get _hlsConfig(){return Ee(this,ms)}set _hlsConfig(e){wt(this,ms,e)}get logo(){var e;return(e=this.getAttribute(E.LOGO))!=null?e:Ee(this,Wr)}set logo(e){e?this.setAttribute(E.LOGO,e):this.removeAttribute(E.LOGO)}load(){Wp(this,this.nativeEl,Ee(this,nt,ki))}unload(){Fp(this.nativeEl,Ee(this,nt,ki),this)}attributeChangedCallback(e,i,a){var r,n;switch(Wn.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,i,a),e){case E.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=a??void 0;break;case E.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=a??void 0;break;case"src":{let s=!!i,o=!!a;!s&&o?Kn(this,nt,Fr).call(this):s&&!o?this.unload():s&&o&&(this.unload(),Kn(this,nt,Fr).call(this));break}case"autoplay":if(a===i)break;(r=Ee(this,nt,ki))==null||r.setAutoplay(this.autoplay);break;case"preload":if(a===i)break;(n=Ee(this,nt,ki))==null||n.setPreload(a);break;case E.PLAYBACK_ID:case E.CUSTOM_DOMAIN:case E.MAX_RESOLUTION:case E.MIN_RESOLUTION:case E.RENDITION_ORDER:case E.PROGRAM_START_TIME:case E.PROGRAM_END_TIME:case E.ASSET_START_TIME:case E.ASSET_END_TIME:case E.PLAYBACK_TOKEN:this.hasAttribute(E.PLAYBACK_ID)&&(this.src=od(this));break;case E.DEBUG:{let s=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=s);break}case E.METADATA_URL:a&&fetch(a).then(s=>s.json()).then(s=>this.metadata=s).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${a}!`));break;case E.STREAM_TYPE:(a==null||a!==i)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case E.TARGET_LIVE_WINDOW:(a==null||a!==i)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}));break;case E.LOGO:(a==null||a!==i)&&this.updateLogo();break;case E.DISABLE_TRACKING:{if(a==null||a!==i){let s=this.currentTime,o=this.paused;this.unload(),Kn(this,nt,Fr).call(this).then(()=>{this.currentTime=s,o||this.play()})}break}case E.DISABLE_COOKIES:{(a==null||a!==i)&&D0(this,this.nativeEl,Ee(this,nt,ki));break}case E.CAP_RENDITION_TO_PLAYER_SIZE:(a==null||a!==i)&&(this.capRenditionToPlayerSize=a!=null?!0:void 0)}}updateLogo(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector('slot[name="logo"]');if(!e)return;let i=this.constructor.getLogoHTML(Ee(this,Wr)||this.logo);e.innerHTML=i}connectedCallback(){var e,i;(e=super.connectedCallback)==null||e.call(this),(i=this.nativeEl)==null||i.addEventListener("muxmetadata",Ee(this,Es)),this.nativeEl&&this.src&&!Ee(this,nt,ki)&&Kn(this,nt,Fr).call(this)}disconnectedCallback(){var e,i;(e=this.nativeEl)==null||e.removeEventListener("muxmetadata",Ee(this,Es)),this.unload(),(i=super.disconnectedCallback)==null||i.call(this)}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{composed:!0,detail:e.detail}))}};Hr=new WeakMap,cs=new WeakMap,Br=new WeakMap,hs=new WeakMap,ms=new WeakMap,ps=new WeakMap,vs=new WeakMap,fs=new WeakMap,Wr=new WeakMap,Es=new WeakMap,nt=new WeakSet,ki=function(){return I0(this.nativeEl)},_s=new WeakMap,Fr=async function(){Ee(this,Hr)||(await wt(this,Hr,Promise.resolve()),wt(this,Hr,null),this.load())};const Fi=new WeakMap;class xl extends Error{}class z0 extends Error{}const Q0=["application/x-mpegURL","application/vnd.apple.mpegurl","audio/mpegurl"],Z0=globalThis.WeakRef?class extends Set{add(t){super.add(new WeakRef(t))}forEach(t){super.forEach(e=>{const i=e.deref();i&&t(i)})}}:Set;function X0(t){globalThis.chrome?.cast?.isAvailable?globalThis.cast?.framework?t():customElements.whenDefined("google-cast-button").then(t):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(t)}}function J0(){return globalThis.chrome}function ey(){const t="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";if(globalThis.chrome?.cast||document.querySelector(`script[src="${t}"]`))return;const e=document.createElement("script");e.src=t,document.head.append(e)}function Hi(){return globalThis.cast?.framework?.CastContext.getInstance()}function Bu(){return Hi()?.getCurrentSession()}function Wu(){return Bu()?.getSessionObj().media[0]}function ty(t){return new Promise((e,i)=>{Wu().editTracksInfo(t,e,i)})}function iy(t){return new Promise((e,i)=>{Wu().getStatus(t,e,i)})}function Mh(t){return Hi().setOptions({...Qp(),...t})}function Qp(){return{receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0}}function Dh(t){if(!t)return;const e=/\.([a-zA-Z0-9]+)(?:\?.*)?$/,i=t.match(e);return i?i[1]:null}function ay(t){for(const e of t.split(`
`)){const i=e.trim();if(i.startsWith("#EXT-X-MEDIA")&&/TYPE=AUDIO/i.test(i)){const a=i.match(/URI="([^"]+)"/i);if(a)return a[1]}}}function ry(t){const e=t.split(`
`),i=[];for(let a=0;a<e.length;a++)if(e[a].trim().startsWith("#EXT-X-STREAM-INF")){const n=e[a+1]?e[a+1].trim():"";n&&!n.startsWith("#")&&i.push(n)}return i}function xh(t){return t.split(`
`).find(a=>!a.trim().startsWith("#")&&a.trim()!=="")?.trim()}async function ny(t){if(!t)return!1;if(/\.m3u8?(\?.*)?$/i.test(t))return!0;if(t.startsWith("blob:"))return!1;try{const i=(await fetch(t,{method:"HEAD"})).headers.get("Content-Type");return Q0.some(a=>i===a)}catch(e){return console.error("Error while trying to get the Content-Type of the manifest",e),!1}}async function sy(t){if(!t||t.startsWith("blob:"))return{videoFormat:void 0,audioFormat:void 0};try{const e=await(await fetch(t)).text();let i=e;const a=ry(e);if(a.length>0){const l=new URL(a[0],t).toString();i=await(await fetch(l)).text()}const r=xh(i),n=Dh(r),s=ay(e);let o=n;if(s)try{const l=new URL(s,t).toString(),d=await(await fetch(l)).text(),m=xh(d);o=Dh(m)??n}catch(l){console.error("Error while trying to parse the audio rendition playlist",l)}return{videoFormat:n,audioFormat:o}}catch(e){return console.error("Error while trying to parse the manifest playlist",e),{videoFormat:void 0,audioFormat:void 0}}}const bs=new Z0,ri=new WeakSet;let Re;X0(()=>{if(!globalThis.chrome?.cast?.isAvailable){console.debug("chrome.cast.isAvailable",globalThis.chrome?.cast?.isAvailable);return}Re||(Re=cast.framework,Hi().addEventListener(Re.CastContextEventType.CAST_STATE_CHANGED,t=>{bs.forEach(e=>Fi.get(e).onCastStateChanged?.(t))}),Hi().addEventListener(Re.CastContextEventType.SESSION_STATE_CHANGED,t=>{bs.forEach(e=>Fi.get(e).onSessionStateChanged?.(t))}),bs.forEach(t=>Fi.get(t).init?.()))});let Oh=0;class oy extends EventTarget{#t;#r;#i;#a;#e="disconnected";#n=!1;#o=new Set;#h=new WeakMap;#l=()=>this.#c();constructor(e){super(),this.#t=e,bs.add(this),Fi.set(this,{init:()=>this.#u(),onCastStateChanged:()=>this.#d(),onSessionStateChanged:()=>this.#v(),getCastPlayer:()=>this.#s}),this.#u()}destroy(){this.#t?.textTracks?.removeEventListener("change",this.#l),this.#a&&this.#i?.controller&&Object.entries(this.#a).forEach(([e,i])=>{this.#i.controller.removeEventListener(e,i)}),this.#t&&ri.delete(this.#t),this.#r=!1}get#s(){if(ri.has(this.#t))return this.#i}get state(){return this.#e}async watchAvailability(e){if(this.#t.disableRemotePlayback)throw new xl("disableRemotePlayback attribute is present.");return this.#h.set(e,++Oh),this.#o.add(e),queueMicrotask(()=>e(this.#p())),Oh}async cancelWatchAvailability(e){if(this.#t.disableRemotePlayback)throw new xl("disableRemotePlayback attribute is present.");e?this.#o.delete(e):this.#o.clear()}async prompt(){if(this.#t.disableRemotePlayback)throw new xl("disableRemotePlayback attribute is present.");if(!globalThis.chrome?.cast?.isAvailable)throw new z0("The RemotePlayback API is disabled on this platform.");const e=ri.has(this.#t);ri.add(this.#t),Mh(this.#t.castOptions),Object.entries(this.#a).forEach(([i,a])=>{this.#i.controller.addEventListener(i,a)});try{await Hi().requestSession()}catch(i){if(e||ri.delete(this.#t),i==="cancel")return;throw new Error(i)}Fi.get(this.#t)?.loadOnPrompt?.()}#m(){ri.has(this.#t)&&(Object.entries(this.#a).forEach(([e,i])=>{this.#i.controller.removeEventListener(e,i)}),ri.delete(this.#t),this.#t.muted=this.#i.isMuted,this.#t.currentTime=this.#i.savedPlayerState.currentTime,this.#i.savedPlayerState.isPaused===!1&&this.#t.play())}#p(){const e=Hi()?.getCastState();return e&&e!=="NO_DEVICES_AVAILABLE"}#d(){const e=Hi().getCastState();if(ri.has(this.#t)&&e==="CONNECTING"&&(this.#e="connecting",this.dispatchEvent(new Event("connecting"))),!this.#n&&e?.includes("CONNECT")){this.#n=!0;for(let i of this.#o)i(!0)}else if(this.#n&&(!e||e==="NO_DEVICES_AVAILABLE")){this.#n=!1;for(let i of this.#o)i(!1)}}async#v(){const{SESSION_RESUMED:e}=Re.SessionState;if(Hi().getSessionState()===e&&this.#t.castSrc===Wu()?.media.contentId){ri.add(this.#t),Object.entries(this.#a).forEach(([i,a])=>{this.#i.controller.addEventListener(i,a)});try{await iy(new chrome.cast.media.GetStatusRequest)}catch(i){console.error(i)}this.#a[Re.RemotePlayerEventType.IS_PAUSED_CHANGED](),this.#a[Re.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}}#u(){!Re||this.#r||(this.#r=!0,Mh(this.#t.castOptions),this.#t.textTracks.addEventListener("change",this.#l),this.#d(),this.#i=new Re.RemotePlayer,new Re.RemotePlayerController(this.#i),this.#a={[Re.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:e})=>{e===!0?(this.#e="connected",this.dispatchEvent(new Event("connect"))):(this.#m(),this.#e="disconnected",this.dispatchEvent(new Event("disconnect")))},[Re.RemotePlayerEventType.DURATION_CHANGED]:()=>{this.#t.dispatchEvent(new Event("durationchange"))},[Re.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{this.#t.dispatchEvent(new Event("volumechange"))},[Re.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{this.#t.dispatchEvent(new Event("volumechange"))},[Re.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{this.#s?.isMediaLoaded&&this.#t.dispatchEvent(new Event("timeupdate"))},[Re.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{this.#t.dispatchEvent(new Event("resize"))},[Re.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{this.#t.dispatchEvent(new Event(this.paused?"pause":"play"))},[Re.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{this.#s?.playerState!==chrome.cast.media.PlayerState.PAUSED&&this.#t.dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[this.#s?.playerState]))},[Re.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{this.#s?.isMediaLoaded&&(await Promise.resolve(),this.#f())}})}#f(){this.#c()}async#c(){if(!this.#s)return;const i=(this.#i.mediaInfo?.tracks??[]).filter(({type:p})=>p===chrome.cast.media.TrackType.TEXT),a=[...this.#t.textTracks].filter(({kind:p})=>p==="subtitles"||p==="captions"),r=i.map(({language:p,name:c,trackId:u})=>{const{mode:v}=a.find(g=>g.language===p&&g.label===c)??{};return v?{mode:v,trackId:u}:!1}).filter(Boolean),s=r.filter(({mode:p})=>p!=="showing").map(({trackId:p})=>p),o=r.find(({mode:p})=>p==="showing"),l=Bu()?.getSessionObj().media[0]?.activeTrackIds??[];let d=l;if(l.length&&(d=d.filter(p=>!s.includes(p))),o?.trackId&&(d=[...d,o.trackId]),d=[...new Set(d)],!((p,c)=>p.length===c.length&&p.every(u=>c.includes(u)))(l,d))try{const p=new chrome.cast.media.EditTracksInfoRequest(d);await ty(p)}catch(p){console.error(p)}}}const ly=t=>class extends t{static observedAttributes=[...t.observedAttributes??[],"cast-src","cast-content-type","cast-stream-type","cast-receiver"];#t={paused:!1};#r=Qp();#i;#a;get remote(){return this.#a?this.#a:J0()?this.isConnected?(this.disableRemotePlayback||ey(),Fi.set(this,{loadOnPrompt:()=>this.#n()}),this.#a=new oy(this)):void 0:super.remote}get#e(){return Fi.get(this.#a)?.getCastPlayer?.()}disconnectedCallback(){this.#a?.destroy(),this.#a=null,Fi.delete(this),super.disconnectedCallback?.()}attributeChangedCallback(i,a,r){if(super.attributeChangedCallback(i,a,r),i==="cast-receiver"&&r){this.#r.receiverApplicationId=r;return}if(this.#e)switch(i){case"cast-stream-type":case"cast-src":this.load();break}}async#n(){this.#t.paused=super.paused,super.pause(),this.muted=super.muted;try{await this.load()}catch(i){console.error(i)}}async load(){if(!this.#e)return super.load();const i=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType);i.customData=this.castCustomData;const a=[...this.querySelectorAll("track")].filter(({kind:l,src:d})=>d&&(l==="subtitles"||l==="captions")),r=[];let n=0;if(a.length&&(i.tracks=a.map(l=>{const d=++n;r.length===0&&l.track.mode==="showing"&&r.push(d);const m=new chrome.cast.media.Track(d,chrome.cast.media.TrackType.TEXT);return m.trackContentId=l.src,m.trackContentType="text/vtt",m.subtype=l.kind==="captions"?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,m.name=l.label,m.language=l.srclang,m})),this.castStreamType==="live"?i.streamType=chrome.cast.media.StreamType.LIVE:i.streamType=chrome.cast.media.StreamType.BUFFERED,i.metadata=new chrome.cast.media.GenericMediaMetadata,i.metadata.title=this.title,i.metadata.images=[{url:this.poster}],await ny(this.castSrc)){i.contentType||(i.contentType="application/x-mpegURL");const{videoFormat:l,audioFormat:d}=await sy(this.castSrc);l?.includes("m4s")||l?.includes("mp4")||l?.includes("m4a")?(i.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.FMP4,i.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.FMP4):d?.includes("aac")?(i.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.AAC,i.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.MPEG2_TS):(l?.includes("ts")||d?.includes("ts"))&&(i.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.TS,i.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.MPEG2_TS)}const o=new chrome.cast.media.LoadRequest(i);o.currentTime=super.currentTime??0,o.autoplay=!this.#t.paused,o.activeTrackIds=r,await Bu()?.loadMedia(o),this.dispatchEvent(new Event("volumechange"))}play(){if(this.#e){this.#e.isPaused&&this.#e.controller?.playOrPause();return}return super.play()}pause(){if(this.#e){this.#e.isPaused||this.#e.controller?.playOrPause();return}super.pause()}get castOptions(){return this.#r}get castReceiver(){return this.getAttribute("cast-receiver")??void 0}set castReceiver(i){this.castReceiver!=i&&this.setAttribute("cast-receiver",`${i}`)}get castSrc(){const i=this.currentSrc,a=i?.startsWith("blob:")?void 0:i;return this.getAttribute("cast-src")??this.querySelector("source")?.src??a??this.getAttribute("src")??void 0}set castSrc(i){this.castSrc!=i&&this.setAttribute("cast-src",`${i}`)}get castContentType(){return this.getAttribute("cast-content-type")??void 0}set castContentType(i){this.setAttribute("cast-content-type",`${i}`)}get castStreamType(){return this.getAttribute("cast-stream-type")??this.streamType??void 0}set castStreamType(i){this.setAttribute("cast-stream-type",`${i}`)}get castCustomData(){return this.#i}set castCustomData(i){const a=typeof i;if(!["object","undefined"].includes(a)){console.error(`castCustomData must be nullish or an object but value was of type ${a}`);return}this.#i=i}get readyState(){if(this.#e)switch(this.#e.playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return this.#e?this.#e.isPaused:super.paused}get muted(){return this.#e?this.#e?.isMuted:super.muted}set muted(i){if(this.#e){(i&&!this.#e.isMuted||!i&&this.#e.isMuted)&&this.#e.controller?.muteOrUnmute();return}super.muted=i}get volume(){return this.#e?this.#e?.volumeLevel??1:super.volume}set volume(i){if(this.#e){this.#e.volumeLevel=+i,this.#e.controller?.setVolumeLevel();return}super.volume=i}get duration(){return this.#e&&this.#e?.isMediaLoaded?this.#e?.duration??NaN:super.duration}get currentTime(){return this.#e&&this.#e?.isMediaLoaded?this.#e?.currentTime??0:super.currentTime}set currentTime(i){if(this.#e){this.#e.currentTime=i,this.#e.controller?.seek();return}super.currentTime=i}};var Zp=t=>{throw TypeError(t)},Xp=(t,e,i)=>e.has(t)||Zp("Cannot "+i),dy=(t,e,i)=>(Xp(t,e,"read from private field"),i?i.call(t):e.get(t)),uy=(t,e,i)=>e.has(t)?Zp("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),cy=(t,e,i,a)=>(Xp(t,e,"write to private field"),e.set(t,i),i),Jp=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if(typeof DocumentFragment>"u"){class t extends Jp{}globalThis.DocumentFragment=t}var hy=class extends Jp{},my={get(t){},define(t,e,i){},getName(t){return null},upgrade(t){},whenDefined(t){return Promise.resolve(hy)}},py={customElements:my},vy=typeof window>"u"||typeof globalThis.customElements>"u",Ol=vy?py:globalThis,gs,Nh=class extends ly(_E(j0)){constructor(){super(...arguments),uy(this,gs)}get autoplay(){let t=this.getAttribute("autoplay");return t===null?!1:t===""?!0:t}set autoplay(t){let e=this.autoplay;t!==e&&(t?this.setAttribute("autoplay",typeof t=="string"?t:""):this.removeAttribute("autoplay"))}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){var t;return(t=dy(this,gs))!=null?t:this.muxCastCustomData}set castCustomData(t){cy(this,gs,t)}};gs=new WeakMap;Ol.customElements.get("mux-video")||(Ol.customElements.define("mux-video",Nh),Ol.MuxVideoElement=Nh);const D={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_LOOP_REQUEST:"medialooprequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},Z={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},ev={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_LOOP:"mediaLoop",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},tv=Object.entries(ev),h=tv.reduce((t,[e,i])=>(t[e]=i.toLowerCase(),t),{}),fy={USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"},ti=tv.reduce((t,[e,i])=>(t[e]=i.toLowerCase(),t),{...fy});Object.entries(ti).reduce((t,[e,i])=>{const a=h[e];return a&&(t[i]=a),t},{userinactivechange:"userinactive"});const Ey=Object.entries(h).reduce((t,[e,i])=>{const a=ti[e];return a&&(t[i]=a),t},{userinactive:"userinactivechange"}),Jt={SUBTITLES:"subtitles",CAPTIONS:"captions",CHAPTERS:"chapters",METADATA:"metadata"},ar={DISABLED:"disabled",SHOWING:"showing"},Nl={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},at={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},Gt={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},_y={FULLSCREEN:"fullscreen"};function by(t){return t?.map(yy).join(" ")}function gy(t){return t?.split(/\s+/).map(Ty)}function yy(t){if(t){const{id:e,width:i,height:a}=t;return[e,i,a].filter(r=>r!=null).join(":")}}function Ty(t){if(t){const[e,i,a]=t.split(":");return{id:e,width:+i,height:+a}}}function Ay(t){return t?.map(Sy).join(" ")}function ky(t){return t?.split(/\s+/).map(wy)}function Sy(t){if(t){const{id:e,kind:i,language:a,label:r}=t;return[e,i,a,r].filter(n=>n!=null).join(":")}}function wy(t){if(t){const[e,i,a,r]=t.split(":");return{id:e,kind:i,language:a,label:r}}}function Iy(t){return t.replace(/[-_]([a-z])/g,(e,i)=>i.toUpperCase())}function Fu(t){return typeof t=="number"&&!Number.isNaN(t)&&Number.isFinite(t)}function iv(t){return typeof t!="string"?!1:!isNaN(t)&&!isNaN(parseFloat(t))}const av=t=>new Promise(e=>setTimeout(e,t)),Ry={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function Pl(t){return String(t).replace(/[&<>"']/g,e=>Ry[e])}const Cy={"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute",Loop:"Loop","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it.",hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",second:"second",seconds:"seconds","{time} remaining":"{time} remaining","{currentTime} of {totalTime}":"{currentTime} of {totalTime}","video not loaded, unknown time.":"video not loaded, unknown time."};var Ph;const cn={en:Cy};let rr=((Ph=globalThis.navigator)==null?void 0:Ph.language)||"en";const Ly=t=>{rr=t},My=t=>{var e,i,a;const[r]=rr.split("-");return((e=cn[rr])==null?void 0:e[t])||((i=cn[r])==null?void 0:i[t])||((a=cn.en)==null?void 0:a[t])||t},Dy=()=>{const[t]=rr.split("-");return cn[rr]?rr:cn[t]?t:"en"},M=(t,e={})=>My(t).replace(/\{(\w+)\}/g,(i,a)=>a in e?String(e[a]):`{${a}}`),Uh=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],$h=(t,e)=>{const i=M(t===1?Uh[e].singular:Uh[e].plural);return`${t} ${i}`},hn=t=>{if(!Fu(t))return"";const e=Math.abs(t),i=e!==t,a=new Date(0,0,0,0,0,e,0),n=[a.getHours(),a.getMinutes(),a.getSeconds()].map((s,o)=>s&&$h(s,o)).filter(s=>s).join(", ");return i?M("{time} remaining",{time:n}):e===0?$h(0,2):n};function Ki(t,e){let i=!1;t<0&&(i=!0,t=0-t),t=t<0?0:t;let a=Math.floor(t%60),r=Math.floor(t/60%60),n=Math.floor(t/3600);const s=Math.floor(e/60%60),o=Math.floor(e/3600);return(isNaN(t)||t===1/0)&&(n=r=a="0"),n=n>0||o>0?n+":":"",r=((n||s>=10)&&r<10?"0"+r:r)+":",a=a<10?"0"+a:a,(i?"-":"")+n+r+a}let rv=class{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}};class nv extends rv{}let Hh=class extends nv{constructor(){super(...arguments),this.role=null}};class xy{observe(){}unobserve(){}disconnect(){}}const sv={createElement:function(){return new In.HTMLElement},createElementNS:function(){return new In.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent(t){return!1}},In={ResizeObserver:xy,document:sv,Node:nv,Element:Hh,HTMLElement:class extends Hh{constructor(){super(...arguments),this.innerHTML=""}get content(){return new In.DocumentFragment}},DocumentFragment:class extends rv{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem(t){return null},setItem(t,e){},removeItem(t){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia(t){return{matches:!1,media:t}},DOMParser:class{parseFromString(e,i){return{body:{textContent:e}}}}},ov="global"in globalThis&&globalThis?.global===globalThis||typeof window>"u"||typeof window.customElements>"u",lv=Object.keys(In).every(t=>t in globalThis),b=ov&&!lv?In:globalThis,ke=ov&&!lv?sv:globalThis.document,Bh=new WeakMap,Ku=t=>{let e=Bh.get(t);return e||Bh.set(t,e=new Set),e},dv=new b.ResizeObserver(t=>{for(const e of t)for(const i of Ku(e.target))i(e)});function mr(t,e){Ku(t).add(e),dv.observe(t)}function pr(t,e){const i=Ku(t);i.delete(e),i.size||dv.unobserve(t)}function dt(t){const e={};for(const i of t)e[i.name]=i.value;return e}function Ze(t){var e;return(e=ud(t))!=null?e:br(t,"media-controller")}function ud(t){var e;const{MEDIA_CONTROLLER:i}=Z,a=t.getAttribute(i);if(a)return(e=dl(t))==null?void 0:e.getElementById(a)}const uv=(t,e,i=".value")=>{const a=t.querySelector(i);a&&(a.textContent=e)},Oy=(t,e)=>{const i=`slot[name="${e}"]`,a=t.shadowRoot.querySelector(i);return a?a.children:[]},cv=(t,e)=>Oy(t,e)[0],gi=(t,e)=>!t||!e?!1:t?.contains(e)?!0:gi(t,e.getRootNode().host),br=(t,e)=>{if(!t)return null;const i=t.closest(e);return i||br(t.getRootNode().host,e)};function Vu(t=document){var e;const i=t?.activeElement;return i?(e=Vu(i.shadowRoot))!=null?e:i:null}function dl(t){var e;const i=(e=t?.getRootNode)==null?void 0:e.call(t);return i instanceof ShadowRoot||i instanceof Document?i:null}function hv(t,{depth:e=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(t.checkVisibility)return t.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=t;for(;r&&e>0;){const n=getComputedStyle(r);if(i&&n.opacity==="0"||a&&n.visibility==="hidden"||n.display==="none")return!1;r=r.parentElement,e--}return!0}function Ny(t,e,i,a){const r=a.x-i.x,n=a.y-i.y,s=r*r+n*n;if(s===0)return 0;const o=((t-i.x)*r+(e-i.y)*n)/s;return Math.max(0,Math.min(1,o))}function Ce(t,e){const i=Py(t,a=>a===e);return i||qu(t,e)}function Py(t,e){var i,a;let r;for(r of(i=t.querySelectorAll("style:not([media])"))!=null?i:[]){let n;try{n=(a=r.sheet)==null?void 0:a.cssRules}catch{continue}for(const s of n??[])if(e(s.selectorText))return s}}function qu(t,e){var i,a;const r=(i=t.querySelectorAll("style:not([media])"))!=null?i:[],n=r?.[r.length-1];if(!n?.sheet)return console.warn("Media Chrome: No style sheet found on style tag of",t),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}};const s=n?.sheet.insertRule(`${e}{}`,n.sheet.cssRules.length);return(a=n.sheet.cssRules)==null?void 0:a[s]}function re(t,e,i=Number.NaN){const a=t.getAttribute(e);return a!=null?+a:i}function ve(t,e,i){const a=+i;if(i==null||Number.isNaN(a)){t.hasAttribute(e)&&t.removeAttribute(e);return}re(t,e,void 0)!==a&&t.setAttribute(e,`${a}`)}function j(t,e){return t.hasAttribute(e)}function z(t,e,i){if(i==null){t.hasAttribute(e)&&t.removeAttribute(e);return}j(t,e)!=i&&t.toggleAttribute(e,i)}function le(t,e,i=null){var a;return(a=t.getAttribute(e))!=null?a:i}function ne(t,e,i){if(i==null){t.hasAttribute(e)&&t.removeAttribute(e);return}const a=`${i}`;le(t,e,void 0)!==a&&t.setAttribute(e,a)}var mv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},bt=(t,e,i)=>(mv(t,e,"read from private field"),i?i.call(t):e.get(t)),Uy=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Vn=(t,e,i,a)=>(mv(t,e,"write to private field"),e.set(t,i),i),$e;function $y(t){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `}class ul extends b.HTMLElement{constructor(){if(super(),Uy(this,$e,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=dt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[Z.MEDIA_CONTROLLER,h.MEDIA_PAUSED]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===Z.MEDIA_CONTROLLER&&(i&&((n=(r=bt(this,$e))==null?void 0:r.unassociateElement)==null||n.call(r,this),Vn(this,$e,null)),a&&this.isConnected&&(Vn(this,$e,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=bt(this,$e))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,i;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),Vn(this,$e,Hy(this)),this.getAttribute(Z.MEDIA_CONTROLLER)&&((i=(e=bt(this,$e))==null?void 0:e.associateElement)==null||i.call(e,this)),bt(this,$e)&&(bt(this,$e).addEventListener("pointerdown",this),bt(this,$e).addEventListener("click",this),bt(this,$e).hasAttribute("tabindex")||(bt(this,$e).tabIndex=0))}disconnectedCallback(){var e,i,a,r;this.getAttribute(Z.MEDIA_CONTROLLER)&&((i=(e=bt(this,$e))==null?void 0:e.unassociateElement)==null||i.call(e,this)),(a=bt(this,$e))==null||a.removeEventListener("pointerdown",this),(r=bt(this,$e))==null||r.removeEventListener("click",this),Vn(this,$e,null)}handleEvent(e){var i;const a=(i=e.composedPath())==null?void 0:i[0];if(["video","media-controller"].includes(a?.localName)){if(e.type==="pointerdown")this._pointerType=e.pointerType;else if(e.type==="click"){const{clientX:n,clientY:s}=e,{left:o,top:l,width:d,height:m}=this.getBoundingClientRect(),p=n-o,c=s-l;if(p<0||c<0||p>d||c>m||d===0&&m===0)return;const u=this._pointerType||"mouse";if(this._pointerType=void 0,u===Nl.TOUCH){this.handleTap(e);return}else if(u===Nl.MOUSE||u===Nl.PEN){this.handleMouseClick(e);return}}}}get mediaPaused(){return j(this,h.MEDIA_PAUSED)}set mediaPaused(e){z(this,h.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){const i=this.mediaPaused?D.MEDIA_PLAY_REQUEST:D.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new b.CustomEvent(i,{composed:!0,bubbles:!0}))}}$e=new WeakMap;ul.shadowRootOptions={mode:"open"};ul.getTemplateHTML=$y;function Hy(t){var e;const i=t.getAttribute(Z.MEDIA_CONTROLLER);return i?(e=t.getRootNode())==null?void 0:e.getElementById(i):br(t,"media-controller")}b.customElements.get("media-gesture-receiver")||b.customElements.define("media-gesture-receiver",ul);var Wh=ul,Yu=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},_e=(t,e,i)=>(Yu(t,e,"read from private field"),i?i.call(t):e.get(t)),Ve=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},At=(t,e,i,a)=>(Yu(t,e,"write to private field"),e.set(t,i),i),Mt=(t,e,i)=>(Yu(t,e,"access private method"),i),Kr,So,Ra,vr,Za,cd,Ca,ys,hd,pv,md,vv,Rn,cl,hl,Gu,fr,Cn,Si,Ts;const U={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive",AUTOHIDE_OVER_CONTROLS:"autohideovercontrols"};function By(t){return`
    <style>
      
      :host([${h.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
        overflow: hidden;
      }

      :host(:not([${U.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${U.AUDIO}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${U.AUDIO}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${U.AUDIO}])[${U.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${U.AUDIO}])[${U.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${U.AUDIO}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${U.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${U.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${U.AUDIO}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${U.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${U.USER_INACTIVE}]:not([${h.MEDIA_PAUSED}]):not([${h.MEDIA_IS_AIRPLAYING}]):not([${h.MEDIA_IS_CASTING}]):not([${U.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${U.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${U.USER_INACTIVE}]:not([${U.NO_AUTOHIDE}]):not([${h.MEDIA_PAUSED}]):not([${h.MEDIA_IS_CASTING}]):not([${U.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${U.USER_INACTIVE}][${U.AUTOHIDE_OVER_CONTROLS}]:not([${U.NO_AUTOHIDE}]):not([${h.MEDIA_PAUSED}]):not([${h.MEDIA_IS_CASTING}]):not([${U.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      
      :host(:not([${U.AUDIO}])[${h.MEDIA_HAS_PLAYED}]) slot[name=poster],
      :host(:not([${U.AUDIO}])[${h.MEDIA_STREAM_TYPE}="${Gt.ON_DEMAND}"][${h.MEDIA_CURRENT_TIME}]:not([${h.MEDIA_CURRENT_TIME}="0"])) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${Wh.shadowRootOptions.mode}">
          ${Wh.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `}const Wy=Object.values(h),Fy="sm:384 md:576 lg:768 xl:960";function Ky(t){fv(t.target,t.contentRect.width)}function fv(t,e){var i;if(!t.isConnected)return;const a=(i=t.getAttribute(U.BREAKPOINTS))!=null?i:Fy,r=Vy(a),n=qy(r,e);let s=!1;if(Object.keys(r).forEach(o=>{if(n.includes(o)){t.hasAttribute(`breakpoint${o}`)||(t.setAttribute(`breakpoint${o}`,""),s=!0);return}t.hasAttribute(`breakpoint${o}`)&&(t.removeAttribute(`breakpoint${o}`),s=!0)}),s){const o=new CustomEvent(ti.BREAKPOINTS_CHANGE,{detail:n});t.dispatchEvent(o)}t.breakpointsComputed||(t.breakpointsComputed=!0,t.dispatchEvent(new CustomEvent(ti.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}function Vy(t){const e=t.split(/\s+/);return Object.fromEntries(e.map(i=>i.split(":")))}function qy(t,e){return Object.keys(t).filter(i=>e>=parseInt(t[i]))}class ml extends b.HTMLElement{constructor(){if(super(),Ve(this,hd),Ve(this,md),Ve(this,Rn),Ve(this,hl),Ve(this,fr),Ve(this,Kr,void 0),Ve(this,So,0),Ve(this,Ra,null),Ve(this,vr,null),Ve(this,Za,void 0),this.breakpointsComputed=!1,Ve(this,cd,e=>{const i=this.media;for(const a of e){if(a.type!=="childList")continue;const r=a.removedNodes;for(const n of r){if(n.slot!="media"||a.target!=this)continue;let s=a.previousSibling&&a.previousSibling.previousElementSibling;if(!s||!i)this.mediaUnsetCallback(n);else{let o=s.slot!=="media";for(;(s=s.previousSibling)!==null;)s.slot=="media"&&(o=!1);o&&this.mediaUnsetCallback(n)}}if(i)for(const n of a.addedNodes)n===i&&this.handleMediaUpdated(i)}}),Ve(this,Ca,!1),Ve(this,ys,e=>{_e(this,Ca)||(setTimeout(()=>{Ky(e),At(this,Ca,!1)},0),At(this,Ca,!0))}),Ve(this,Si,void 0),Ve(this,Ts,()=>{if(!_e(this,Si).assignedElements({flatten:!0}).length){_e(this,Ra)&&this.mediaUnsetCallback(_e(this,Ra));return}this.handleMediaUpdated(this.media)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=dt(this.attributes),i=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}At(this,Kr,new MutationObserver(_e(this,cd)))}static get observedAttributes(){return[U.AUTOHIDE,U.GESTURES_DISABLED].concat(Wy).filter(e=>![h.MEDIA_RENDITION_LIST,h.MEDIA_AUDIO_TRACK_LIST,h.MEDIA_CHAPTERS_CUES,h.MEDIA_WIDTH,h.MEDIA_HEIGHT,h.MEDIA_ERROR,h.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,i,a){e.toLowerCase()==U.AUTOHIDE&&(this.autohide=a)}get media(){let e=this.querySelector(":scope > [slot=media]");return e?.nodeName=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(At(this,Ra,e),e.localName.includes("-")&&await b.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;_e(this,Kr).observe(this,{childList:!0,subtree:!0}),mr(this,_e(this,ys));const i=this.getAttribute(U.AUDIO)!=null,a=M(i?"audio player":"video player");this.setAttribute("role","region"),this.setAttribute("aria-label",a),this.handleMediaUpdated(this.media),this.setAttribute(U.USER_INACTIVE,""),fv(this,this.getBoundingClientRect().width);const r=this.querySelector(":scope > slot[slot=media]");r&&(At(this,Si,r),_e(this,Si).addEventListener("slotchange",_e(this,Ts))),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),(e=b.window)==null||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;pr(this,_e(this,ys)),clearTimeout(_e(this,vr)),_e(this,Kr).disconnect(),this.media&&this.mediaUnsetCallback(this.media),(e=b.window)==null||e.removeEventListener("mouseup",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointermove",this),this.removeEventListener("pointerup",this),this.removeEventListener("mouseleave",this),this.removeEventListener("keyup",this),_e(this,Si)&&(_e(this,Si).removeEventListener("slotchange",_e(this,Ts)),At(this,Si,null)),At(this,Ca,!1)}mediaSetCallback(e){}mediaUnsetCallback(e){At(this,Ra,null)}handleEvent(e){switch(e.type){case"pointerdown":At(this,So,e.timeStamp);break;case"pointermove":Mt(this,hd,pv).call(this,e);break;case"pointerup":Mt(this,md,vv).call(this,e);break;case"mouseleave":Mt(this,Rn,cl).call(this);break;case"mouseup":this.removeAttribute(U.KEYBOARD_CONTROL);break;case"keyup":Mt(this,fr,Cn).call(this),this.setAttribute(U.KEYBOARD_CONTROL,"");break}}set autohide(e){const i=Number(e);At(this,Za,isNaN(i)?0:i)}get autohide(){return(_e(this,Za)===void 0?2:_e(this,Za)).toString()}get breakpoints(){return le(this,U.BREAKPOINTS)}set breakpoints(e){ne(this,U.BREAKPOINTS,e)}get audio(){return j(this,U.AUDIO)}set audio(e){z(this,U.AUDIO,e)}get gesturesDisabled(){return j(this,U.GESTURES_DISABLED)}set gesturesDisabled(e){z(this,U.GESTURES_DISABLED,e)}get keyboardControl(){return j(this,U.KEYBOARD_CONTROL)}set keyboardControl(e){z(this,U.KEYBOARD_CONTROL,e)}get noAutohide(){return j(this,U.NO_AUTOHIDE)}set noAutohide(e){z(this,U.NO_AUTOHIDE,e)}get autohideOverControls(){return j(this,U.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(e){z(this,U.AUTOHIDE_OVER_CONTROLS,e)}get userInteractive(){return j(this,U.USER_INACTIVE)}set userInteractive(e){z(this,U.USER_INACTIVE,e)}}Kr=new WeakMap;So=new WeakMap;Ra=new WeakMap;vr=new WeakMap;Za=new WeakMap;cd=new WeakMap;Ca=new WeakMap;ys=new WeakMap;hd=new WeakSet;pv=function(t){if(t.pointerType!=="mouse"&&t.timeStamp-_e(this,So)<250)return;Mt(this,hl,Gu).call(this),clearTimeout(_e(this,vr));const e=this.hasAttribute(U.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(t.target)||e)&&Mt(this,fr,Cn).call(this)};md=new WeakSet;vv=function(t){if(t.pointerType==="touch"){const e=!this.hasAttribute(U.USER_INACTIVE);[this,this.media].includes(t.target)&&e?Mt(this,Rn,cl).call(this):Mt(this,fr,Cn).call(this)}else t.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(e?.localName))&&Mt(this,fr,Cn).call(this)};Rn=new WeakSet;cl=function(){if(_e(this,Za)<0||this.hasAttribute(U.USER_INACTIVE))return;this.setAttribute(U.USER_INACTIVE,"");const t=new b.CustomEvent(ti.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(t)};hl=new WeakSet;Gu=function(){if(!this.hasAttribute(U.USER_INACTIVE))return;this.removeAttribute(U.USER_INACTIVE);const t=new b.CustomEvent(ti.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(t)};fr=new WeakSet;Cn=function(){Mt(this,hl,Gu).call(this),clearTimeout(_e(this,vr));const t=parseInt(this.autohide);t<0||At(this,vr,setTimeout(()=>{Mt(this,Rn,cl).call(this)},t*1e3))};Si=new WeakMap;Ts=new WeakMap;ml.shadowRootOptions={mode:"open"};ml.getTemplateHTML=By;b.customElements.get("media-container")||b.customElements.define("media-container",ml);var ju=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ca=(t,e,i)=>(ju(t,e,"read from private field"),e.get(t)),ni=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},zu=(t,e,i,a)=>(ju(t,e,"write to private field"),e.set(t,i),i),ji=(t,e,i)=>(ju(t,e,"access private method"),i),wo,Ln,va,As,pd,vd,Ev,fd,_v,Ed,bv,_d,gv,bd,yv;function Yy(t){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(t)}
  `}function Gy(t){return`
    <slot id="content"></slot>
  `}const Ir={OPEN:"open",ANCHOR:"anchor"};class gr extends b.HTMLElement{constructor(){super(),ni(this,As),ni(this,vd),ni(this,fd),ni(this,Ed),ni(this,_d),ni(this,bd),ni(this,wo,!1),ni(this,Ln,null),ni(this,va,null)}static get observedAttributes(){return[Ir.OPEN,Ir.ANCHOR]}get open(){return j(this,Ir.OPEN)}set open(e){z(this,Ir.OPEN,e)}handleEvent(e){switch(e.type){case"invoke":ji(this,Ed,bv).call(this,e);break;case"focusout":ji(this,_d,gv).call(this,e);break;case"keydown":ji(this,bd,yv).call(this,e);break}}connectedCallback(){ji(this,As,pd).call(this),this.role||(this.role="dialog"),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}disconnectedCallback(){this.removeEventListener("invoke",this),this.removeEventListener("focusout",this),this.removeEventListener("keydown",this)}attributeChangedCallback(e,i,a){ji(this,As,pd).call(this),e===Ir.OPEN&&a!==i&&(this.open?ji(this,vd,Ev).call(this):ji(this,fd,_v).call(this))}focus(){zu(this,Ln,Vu());const e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),i=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||i)return;const a=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');a?.focus()}get keysUsed(){return["Escape","Tab"]}}wo=new WeakMap;Ln=new WeakMap;va=new WeakMap;As=new WeakSet;pd=function(){if(!ca(this,wo)&&(zu(this,wo,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);const t=dt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t),queueMicrotask(()=>{const{style:e}=Ce(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}};vd=new WeakSet;Ev=function(){var t;(t=ca(this,va))==null||t.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})};fd=new WeakSet;_v=function(){var t;(t=ca(this,va))==null||t.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))};Ed=new WeakSet;bv=function(t){zu(this,va,t.relatedTarget),gi(this,t.relatedTarget)||(this.open=!this.open)};_d=new WeakSet;gv=function(t){var e;gi(this,t.relatedTarget)||((e=ca(this,Ln))==null||e.focus(),ca(this,va)&&ca(this,va)!==t.relatedTarget&&this.open&&(this.open=!1))};bd=new WeakSet;yv=function(t){var e,i,a,r,n;const{key:s,ctrlKey:o,altKey:l,metaKey:d}=t;o||l||d||this.keysUsed.includes(s)&&(t.preventDefault(),t.stopPropagation(),s==="Tab"?(t.shiftKey?(i=(e=this.previousElementSibling)==null?void 0:e.focus)==null||i.call(e):(r=(a=this.nextElementSibling)==null?void 0:a.focus)==null||r.call(a),this.blur()):s==="Escape"&&((n=ca(this,Ln))==null||n.focus(),this.open=!1))};gr.shadowRootOptions={mode:"open"};gr.getTemplateHTML=Yy;gr.getSlotTemplateHTML=Gy;b.customElements.get("media-chrome-dialog")||b.customElements.define("media-chrome-dialog",gr);var jy=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},yi=(t,e,i)=>(jy(t,e,"read from private field"),i?i.call(t):e.get(t)),Fh=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},La,Ma;const Vr={HOTKEYS:"hotkeys"},zy=[{keys:[{key:" ",label:"Space"},{key:"k"}],description:"Toggle Playback"},{keys:[{key:"m"}],description:"Toggle mute"},{keys:[{key:"f"}],description:"Toggle fullscreen"},{keys:[{key:"c"}],description:"Toggle captions or subtitles, if available"},{keys:[{key:"p"}],description:"Toggle Picture in Picture"},{keys:[{key:"ArrowLeft",label:"←"},{key:"j"}],description:"Seek back 10s"},{keys:[{key:"ArrowRight",label:"→"},{key:"l"}],description:"Seek forward 10s"},{keys:[{key:"ArrowUp",label:"↑"}],description:"Turn volume up"},{keys:[{key:"ArrowDown",label:"↓"}],description:"Turn volume down"},{keys:[{key:"<",label:"< (SHIFT+,)"}],description:"Decrease playback rate"},{keys:[{key:">",label:"> (SHIFT+.)"}],description:"Increase playback rate"},{keys:[{key:"shift+/",label:"SHIFT+/"}],description:"Show keyboard shortcuts"}];function Qu(t){return t===" "?"nospace":`no${t.toLowerCase()}`}function Qy(t){const e=new Set(t?.split(/\s+/));return zy.map(({keys:i,description:a})=>({keys:i.filter(({key:r})=>!e.has(Qu(r))),description:a})).filter(({keys:i})=>i.length)}function Zy(t){return`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background: rgb(20 20 30 / .8);
        backdrop-filter: blur(10px);
      }

      #content {
        display: block;
        width: clamp(400px, 40vw, 700px);
        max-width: 90vw;
        text-align: left;
      }

      h2 {
        margin: 0 0 1.5rem 0;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
      }

      .shortcuts-table {
        width: 100%;
        border-collapse: collapse;
      }

      .shortcuts-table tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .shortcuts-table tr:last-child {
        border-bottom: none;
      }

      .shortcuts-table td {
        padding: 0.75rem 0.5rem;
      }

      .shortcuts-table td:first-child {
        text-align: right;
        padding-right: 1rem;
        width: 40%;
        min-width: 120px;
      }

      .shortcuts-table td:last-child {
        padding-left: 1rem;
      }

      .key {
        display: inline-block;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        font-weight: 500;
        min-width: 1.5rem;
        text-align: center;
        margin: 0 0.2rem;
      }

      .description {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
      }

      .key-combo {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.3rem;
      }

      .key-separator {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
      }
    </style>
    <slot id="content">
      ${Tv(t[Vr.HOTKEYS])}
    </slot>
  `}function Tv(t){return`
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${Qy(t).map(({keys:i,description:a})=>`
        <tr>
          <td>
            <div class="key-combo">${i.map(({key:n,label:s=n},o)=>o>0?`<span class="key-separator">or</span><span class="key">${s}</span>`:`<span class="key">${s}</span>`).join("")}</div>
          </td>
          <td class="description">${a}</td>
        </tr>
      `).join("")}</table>
  `}class Av extends gr{constructor(){super(...arguments),Fh(this,La,e=>{var i;if(!this.open)return;const a=(i=this.shadowRoot)==null?void 0:i.querySelector("#content");if(!a)return;const r=e.composedPath(),n=r[0]===this||r.includes(this),s=r.includes(a);n&&!s&&(this.open=!1)}),Fh(this,Ma,e=>{if(!this.open)return;const i=e.shiftKey&&(e.key==="/"||e.key==="?");(e.key==="Escape"||i)&&!e.ctrlKey&&!e.altKey&&!e.metaKey&&(this.open=!1,e.preventDefault(),e.stopPropagation())})}static get observedAttributes(){return[...super.observedAttributes,Vr.HOTKEYS]}get hotkeys(){var e;return(e=le(this,Vr.HOTKEYS))!=null?e:void 0}set hotkeys(e){ne(this,Vr.HOTKEYS,e)}connectedCallback(){super.connectedCallback(),this.open&&(this.addEventListener("click",yi(this,La)),document.addEventListener("keydown",yi(this,Ma)))}disconnectedCallback(){this.removeEventListener("click",yi(this,La)),document.removeEventListener("keydown",yi(this,Ma))}attributeChangedCallback(e,i,a){var r;if(super.attributeChangedCallback(e,i,a),e==="open")this.open?(this.addEventListener("click",yi(this,La)),document.addEventListener("keydown",yi(this,Ma))):(this.removeEventListener("click",yi(this,La)),document.removeEventListener("keydown",yi(this,Ma)));else if(e===Vr.HOTKEYS&&a!==i){const n=(r=this.shadowRoot)==null?void 0:r.querySelector("#content");n&&(n.innerHTML=Tv(a))}}}La=new WeakMap;Ma=new WeakMap;Av.getSlotTemplateHTML=Zy;b.customElements.get("media-keyboard-shortcuts-dialog")||b.customElements.define("media-keyboard-shortcuts-dialog",Av);var kv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Oe=(t,e,i)=>(kv(t,e,"read from private field"),i?i.call(t):e.get(t)),Rr=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},qn=(t,e,i,a)=>(kv(t,e,"write to private field"),e.set(t,i),i),Da,xa,Io,oa,oi,wi;class Zu{constructor(e,i,{defaultValue:a}={defaultValue:void 0}){Rr(this,oi),Rr(this,Da,void 0),Rr(this,xa,void 0),Rr(this,Io,void 0),Rr(this,oa,new Set),qn(this,Da,e),qn(this,xa,i),qn(this,Io,new Set(a))}[Symbol.iterator](){return Oe(this,oi,wi).values()}get length(){return Oe(this,oi,wi).size}get value(){var e;return(e=[...Oe(this,oi,wi)].join(" "))!=null?e:""}set value(e){var i;e!==this.value&&(qn(this,oa,new Set),this.add(...(i=e?.split(" "))!=null?i:[]))}toString(){return this.value}item(e){return[...Oe(this,oi,wi)][e]}values(){return Oe(this,oi,wi).values()}forEach(e,i){Oe(this,oi,wi).forEach(e,i)}add(...e){var i,a;e.forEach(r=>Oe(this,oa).add(r)),!(this.value===""&&!((i=Oe(this,Da))!=null&&i.hasAttribute(`${Oe(this,xa)}`)))&&((a=Oe(this,Da))==null||a.setAttribute(`${Oe(this,xa)}`,`${this.value}`))}remove(...e){var i;e.forEach(a=>Oe(this,oa).delete(a)),(i=Oe(this,Da))==null||i.setAttribute(`${Oe(this,xa)}`,`${this.value}`)}contains(e){return Oe(this,oi,wi).has(e)}toggle(e,i){return typeof i<"u"?i?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,i){return this.remove(e),this.add(i),e===i}}Da=new WeakMap;xa=new WeakMap;Io=new WeakMap;oa=new WeakMap;oi=new WeakSet;wi=function(){return Oe(this,oa).size?Oe(this,oa):Oe(this,Io)};const Xy=(t="")=>t.split(/\s+/),Sv=(t="")=>{const[e,i,a]=t.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:e==="cc"?Jt.CAPTIONS:Jt.SUBTITLES,language:i,label:r}},pl=(t="",e={})=>Xy(t).map(i=>{const a=Sv(i);return{...e,...a}}),wv=t=>t?Array.isArray(t)?t.map(e=>typeof e=="string"?Sv(e):e):typeof t=="string"?pl(t):[t]:[],gd=({kind:t,label:e,language:i}={kind:"subtitles"})=>e?`${t==="captions"?"cc":"sb"}:${i}:${encodeURIComponent(e)}`:i,Mn=(t=[])=>Array.prototype.map.call(t,gd).join(" "),Jy=(t,e)=>i=>i[t]===e,Iv=t=>{const e=Object.entries(t).map(([i,a])=>Jy(i,a));return i=>e.every(a=>a(i))},mn=(t,e=[],i=[])=>{const a=wv(i).map(Iv),r=n=>a.some(s=>s(n));Array.from(e).filter(r).forEach(n=>{n.mode=t})},vl=(t,e=()=>!0)=>{if(!t?.textTracks)return[];const i=typeof e=="function"?e:Iv(e);return Array.from(t.textTracks).filter(i)},Rv=t=>{var e;return!!((e=t.mediaSubtitlesShowing)!=null&&e.length)||t.hasAttribute(h.MEDIA_SUBTITLES_SHOWING)},e1=t=>{var e;const{media:i,fullscreenElement:a}=t;try{const r=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(r){const n=(e=a[r])==null?void 0:e.call(a);if(n instanceof Promise)return n.catch(()=>{})}else i?.webkitEnterFullscreen?i.webkitEnterFullscreen():i?.requestFullscreen&&i.requestFullscreen()}catch(r){console.error(r)}},Kh="exitFullscreen"in ke?"exitFullscreen":"webkitExitFullscreen"in ke?"webkitExitFullscreen":"webkitCancelFullScreen"in ke?"webkitCancelFullScreen":void 0,t1=t=>{var e;const{documentElement:i}=t;if(Kh){const a=(e=i?.[Kh])==null?void 0:e.call(i);if(a instanceof Promise)return a.catch(()=>{})}},qr="fullscreenElement"in ke?"fullscreenElement":"webkitFullscreenElement"in ke?"webkitFullscreenElement":void 0,i1=t=>{const{documentElement:e,media:i}=t,a=e?.[qr];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===_y.FULLSCREEN?i:a},a1=t=>{var e;const{media:i,documentElement:a,fullscreenElement:r=i}=t;if(!i||!a)return!1;const n=i1(t);if(!n)return!1;if(n===r||n===i)return!0;if(n.localName.includes("-")){let s=n.shadowRoot;if(!(qr in s))return gi(n,r);for(;s?.[qr];){if(s[qr]===r)return!0;s=(e=s[qr])==null?void 0:e.shadowRoot}}return!1},r1="fullscreenEnabled"in ke?"fullscreenEnabled":"webkitFullscreenEnabled"in ke?"webkitFullscreenEnabled":void 0,n1=t=>{const{documentElement:e,media:i}=t;return!!e?.[r1]||i&&"webkitSupportsFullscreen"in i};let Yn;const Xu=()=>{var t,e;return Yn||(Yn=(e=(t=ke)==null?void 0:t.createElement)==null?void 0:e.call(t,"video"),Yn)},s1=async(t=Xu())=>{if(!t)return!1;const e=t.volume;t.volume=e/2+.1;const i=new AbortController,a=await Promise.race([o1(t,i.signal),l1(t,e)]);return i.abort(),a},o1=(t,e)=>new Promise(i=>{t.addEventListener("volumechange",()=>i(!0),{signal:e})}),l1=async(t,e)=>{for(let i=0;i<10;i++){if(t.volume===e)return!1;await av(10)}return t.volume!==e},d1=/.*Version\/.*Safari\/.*/.test(b.navigator.userAgent),Cv=(t=Xu())=>b.matchMedia("(display-mode: standalone)").matches&&d1?!1:typeof t?.requestPictureInPicture=="function",Lv=(t=Xu())=>n1({documentElement:ke,media:t}),u1=Lv(),c1=Cv(),h1=!!b.WebKitPlaybackTargetAvailabilityEvent,m1=!!b.chrome,Ro=t=>vl(t.media,e=>[Jt.SUBTITLES,Jt.CAPTIONS].includes(e.kind)).sort((e,i)=>e.kind>=i.kind?1:-1),Mv=t=>vl(t.media,e=>e.mode===ar.SHOWING&&[Jt.SUBTITLES,Jt.CAPTIONS].includes(e.kind)),Dv=(t,e)=>{const i=Ro(t),a=Mv(t),r=!!a.length;if(i.length){if(e===!1||r&&e!==!0)mn(ar.DISABLED,i,a);else if(e===!0||!r&&e!==!1){let n=i[0];const{options:s}=t;if(!s?.noSubtitlesLangPref){const m=b.localStorage.getItem("media-chrome-pref-subtitles-lang"),p=m?[m,...b.navigator.languages]:b.navigator.languages,c=i.filter(u=>p.some(v=>u.language.toLowerCase().startsWith(v.split("-")[0]))).sort((u,v)=>{const g=p.findIndex(y=>u.language.toLowerCase().startsWith(y.split("-")[0])),_=p.findIndex(y=>v.language.toLowerCase().startsWith(y.split("-")[0]));return g-_});c[0]&&(n=c[0])}const{language:o,label:l,kind:d}=n;mn(ar.DISABLED,i,a),mn(ar.SHOWING,i,[{language:o,label:l,kind:d}])}}},Ju=(t,e)=>t===e?!0:t==null||e==null||typeof t!=typeof e?!1:typeof t=="number"&&Number.isNaN(t)&&Number.isNaN(e)?!0:typeof t!="object"?!1:Array.isArray(t)?p1(t,e):Object.entries(t).every(([i,a])=>i in e&&Ju(a,e[i])),p1=(t,e)=>{const i=Array.isArray(t),a=Array.isArray(e);return i!==a?!1:i||a?t.length!==e.length?!1:t.every((r,n)=>Ju(r,e[n])):!0},v1=Object.values(Gt);let Co;const f1=s1().then(t=>(Co=t,Co)),E1=async(...t)=>{await Promise.all(t.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof b.HTMLElement))return;const i=e.localName;if(!i.includes("-"))return;const a=b.customElements.get(i);a&&e instanceof a||(await b.customElements.whenDefined(i),b.customElements.upgrade(e))}))},_1=new b.DOMParser,b1=t=>t&&(_1.parseFromString(t,"text/html").body.textContent||t),Yr={mediaError:{get(t,e){const{media:i}=t;if(e?.type!=="playing")return i?.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(t,e){var i;const{media:a}=t;if(e?.type!=="playing")return(i=a?.error)==null?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(t,e){var i,a;const{media:r}=t;if(e?.type!=="playing")return(a=(i=r?.error)==null?void 0:i.message)!=null?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(t){var e;const{media:i}=t;return(e=i?.videoWidth)!=null?e:0},mediaEvents:["resize"]},mediaHeight:{get(t){var e;const{media:i}=t;return(e=i?.videoHeight)!=null?e:0},mediaEvents:["resize"]},mediaPaused:{get(t){var e;const{media:i}=t;return(e=i?.paused)!=null?e:!0},set(t,e){var i;const{media:a}=e;a&&(t?a.pause():(i=a.play())==null||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(t,e){const{media:i}=t;return i?e?e.type==="playing":!i.paused:!1},mediaEvents:["playing","emptied"]},mediaEnded:{get(t){var e;const{media:i}=t;return(e=i?.ended)!=null?e:!1},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(t){var e;const{media:i}=t;return(e=i?.playbackRate)!=null?e:1},set(t,e){const{media:i}=e;i&&Number.isFinite(+t)&&(i.playbackRate=+t)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(t){var e;const{media:i}=t;return(e=i?.muted)!=null?e:!1},set(t,e){const{media:i,options:{noMutedPref:a}={}}=e;if(i){i.muted=t;try{const r=b.localStorage.getItem("media-chrome-pref-muted")!==null,n=i.hasAttribute("muted");if(a){r&&b.localStorage.removeItem("media-chrome-pref-muted");return}if(n&&!r)return;b.localStorage.setItem("media-chrome-pref-muted",t?"true":"false")}catch(r){console.debug("Error setting muted pref",r)}}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(t,e)=>{const{options:{noMutedPref:i}}=e,{media:a}=e;if(!(!a||a.muted||i))try{const r=b.localStorage.getItem("media-chrome-pref-muted")==="true";Yr.mediaMuted.set(r,e),t(r)}catch(r){console.debug("Error getting muted pref",r)}}]},mediaLoop:{get(t){const{media:e}=t;return e?.loop},set(t,e){const{media:i}=e;i&&(i.loop=t)},mediaEvents:["medialooprequest"]},mediaVolume:{get(t){var e;const{media:i}=t;return(e=i?.volume)!=null?e:1},set(t,e){const{media:i,options:{noVolumePref:a}={}}=e;if(i){try{t==null?b.localStorage.removeItem("media-chrome-pref-volume"):!i.hasAttribute("muted")&&!a&&b.localStorage.setItem("media-chrome-pref-volume",t.toString())}catch(r){console.debug("Error setting volume pref",r)}Number.isFinite(+t)&&(i.volume=+t)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(t,e)=>{const{options:{noVolumePref:i}}=e;if(!i)try{const{media:a}=e;if(!a)return;const r=b.localStorage.getItem("media-chrome-pref-volume");if(r==null)return;Yr.mediaVolume.set(+r,e),t(+r)}catch(a){console.debug("Error getting volume pref",a)}}]},mediaVolumeLevel:{get(t){const{media:e}=t;return typeof e?.volume>"u"?"high":e.muted||e.volume===0?"off":e.volume<.5?"low":e.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(t){var e;const{media:i}=t;return(e=i?.currentTime)!=null?e:0},set(t,e){const{media:i}=e;!i||!Fu(t)||(i.currentTime=t)},mediaEvents:["timeupdate","loadedmetadata","seeking"]},mediaDuration:{get(t){const{media:e,options:{defaultDuration:i}={}}=t;return i&&(!e||!e.duration||Number.isNaN(e.duration)||!Number.isFinite(e.duration))?i:Number.isFinite(e?.duration)?e.duration:Number.NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(t){const{media:e}=t;return e?.readyState<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(t){var e;const{media:i}=t;if(!((e=i?.seekable)!=null&&e.length))return;const a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(!(!a&&!r))return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(t){var e;const{media:i}=t,a=(e=i?.buffered)!=null?e:[];return Array.from(a).map((r,n)=>[Number(a.start(n).toFixed(3)),Number(a.end(n).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(t){const{media:e,options:{defaultStreamType:i}={}}=t,a=[Gt.LIVE,Gt.ON_DEMAND].includes(i)?i:void 0;if(!e)return a;const{streamType:r}=e;if(v1.includes(r))return r===Gt.UNKNOWN?a:r;const n=e.duration;return n===1/0?Gt.LIVE:Number.isFinite(n)?Gt.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(t){const{media:e}=t;if(!e)return Number.NaN;const{targetLiveWindow:i}=e,a=Yr.mediaStreamType.get(t);return(i==null||Number.isNaN(i))&&a===Gt.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(t){const{media:e,options:{liveEdgeOffset:i=10}={}}=t;if(!e)return!1;if(typeof e.liveEdgeStart=="number")return Number.isNaN(e.liveEdgeStart)?!1:e.currentTime>=e.liveEdgeStart;if(!(Yr.mediaStreamType.get(t)===Gt.LIVE))return!1;const r=e.seekable;if(!r)return!0;if(!r.length)return!1;const n=r.end(r.length-1)-i;return e.currentTime>=n},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get(t){return Ro(t).map(({kind:e,label:i,language:a})=>({kind:e,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get(t){return Mv(t).map(({kind:e,label:i,language:a})=>({kind:e,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(t,e)=>{var i,a;const{media:r,options:n}=e;if(!r)return;const s=o=>{var l;!n.defaultSubtitles||o&&![Jt.CAPTIONS,Jt.SUBTITLES].includes((l=o?.track)==null?void 0:l.kind)||Dv(e,!0)};return r.addEventListener("loadstart",s),(i=r.textTracks)==null||i.addEventListener("addtrack",s),(a=r.textTracks)==null||a.addEventListener("removetrack",s),()=>{var o,l;r.removeEventListener("loadstart",s),(o=r.textTracks)==null||o.removeEventListener("addtrack",s),(l=r.textTracks)==null||l.removeEventListener("removetrack",s)}}]},mediaChaptersCues:{get(t){var e;const{media:i}=t;if(!i)return[];const[a]=vl(i,{kind:Jt.CHAPTERS});return Array.from((e=a?.cues)!=null?e:[]).map(({text:r,startTime:n,endTime:s})=>({text:b1(r),startTime:n,endTime:s}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;if(!a)return;const r=a.querySelector('track[kind="chapters"][default][src]'),n=(i=a.shadowRoot)==null?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return r?.addEventListener("load",t),n?.addEventListener("load",t),()=>{r?.removeEventListener("load",t),n?.removeEventListener("load",t)}}]},mediaIsPip:{get(t){var e,i;const{media:a,documentElement:r}=t;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return(e=a.localName)!=null&&e.includes("-")?gi(a,r.pictureInPictureElement):!1;if(r.pictureInPictureElement.localName.includes("-")){let n=r.pictureInPictureElement.shadowRoot;for(;n?.pictureInPictureElement;){if(n.pictureInPictureElement===a)return!0;n=(i=n.pictureInPictureElement)==null?void 0:i.shadowRoot}}return!1},set(t,e){const{media:i}=e;if(i)if(t){if(!ke.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!i.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}const a=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(r=>{if(r.code===11){if(!i.src){console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");return}if(i.readyState===0&&i.preload==="none"){const n=()=>{i.removeEventListener("loadedmetadata",s),i.preload="none"},s=()=>{i.requestPictureInPicture().catch(a),n()};i.addEventListener("loadedmetadata",s),i.preload="metadata",setTimeout(()=>{i.readyState===0&&a(),n()},1e3)}else throw r}else throw r})}else ke.pictureInPictureElement&&ke.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(t){var e;const{media:i}=t;return[...(e=i?.videoRenditions)!=null?e:[]].map(a=>({...a}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(t){var e,i,a;const{media:r}=t;return(a=(i=r?.videoRenditions)==null?void 0:i[(e=r.videoRenditions)==null?void 0:e.selectedIndex])==null?void 0:a.id},set(t,e){const{media:i}=e;if(!i?.videoRenditions){console.warn("MediaController: Rendition selection not supported by this media.");return}const a=t,r=Array.prototype.findIndex.call(i.videoRenditions,n=>n.id==a);i.videoRenditions.selectedIndex!=r&&(i.videoRenditions.selectedIndex=r)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(t){var e;const{media:i}=t;return[...(e=i?.audioTracks)!=null?e:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(t){var e,i;const{media:a}=t;return(i=[...(e=a?.audioTracks)!=null?e:[]].find(r=>r.enabled))==null?void 0:i.id},set(t,e){const{media:i}=e;if(!i?.audioTracks){console.warn("MediaChrome: Audio track selection not supported by this media.");return}const a=t;for(const r of i.audioTracks)r.enabled=a==r.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get(t){return a1(t)},set(t,e,i){var a,r;t?(e1(e),i.detail&&!((a=e.media)!=null&&a.inert)&&((r=e.media)==null||r.focus())):t1(e)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(t){var e;const{media:i}=t;return!i?.remote||((e=i.remote)==null?void 0:e.state)==="disconnected"?!1:i.remote.state==="connected"},set(t,e){var i,a;const{media:r}=e;if(r&&!(t&&((i=r.remote)==null?void 0:i.state)!=="disconnected")&&!(!t&&((a=r.remote)==null?void 0:a.state)!=="connected")){if(typeof r.remote.prompt!="function"){console.warn("MediaChrome: Casting is not supported in this environment");return}r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get(){return!1},set(t,e){const{media:i}=e;if(i){if(!(i.webkitShowPlaybackTargetPicker&&b.WebKitPlaybackTargetAvailabilityEvent)){console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");return}i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(t){const{media:e}=t;if(!u1||!Lv(e))return at.UNSUPPORTED}},mediaPipUnavailable:{get(t){const{media:e}=t;if(!c1||!Cv(e))return at.UNSUPPORTED;if(e?.disablePictureInPicture)return at.UNAVAILABLE}},mediaVolumeUnavailable:{get(t){const{media:e}=t;if(Co===!1||e?.volume==null)return at.UNSUPPORTED},stateOwnersUpdateHandlers:[t=>{Co==null&&f1.then(e=>t(e?void 0:at.UNSUPPORTED))}]},mediaCastUnavailable:{get(t,{availability:e="not-available"}={}){var i;const{media:a}=t;if(!m1||!((i=a?.remote)!=null&&i.state))return at.UNSUPPORTED;if(!(e==null||e==="available"))return at.UNAVAILABLE},stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a?.remote)==null||i.watchAvailability(n=>{t({availability:n?"available":"not-available"})}).catch(n=>{n.name==="NotSupportedError"?t({availability:null}):t({availability:"not-available"})}),()=>{var n;(n=a?.remote)==null||n.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaAirplayUnavailable:{get(t,e){if(!h1)return at.UNSUPPORTED;if(e?.availability==="not-available")return at.UNAVAILABLE},mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a?.remote)==null||i.watchAvailability(n=>{t({availability:n?"available":"not-available"})}).catch(n=>{n.name==="NotSupportedError"?t({availability:null}):t({availability:"not-available"})}),()=>{var n;(n=a?.remote)==null||n.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaRenditionUnavailable:{get(t){var e;const{media:i}=t;if(!i?.videoRenditions)return at.UNSUPPORTED;if(!((e=i.videoRenditions)!=null&&e.length))return at.UNAVAILABLE},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(t){var e,i;const{media:a}=t;if(!a?.audioTracks)return at.UNSUPPORTED;if(((i=(e=a.audioTracks)==null?void 0:e.length)!=null?i:0)<=1)return at.UNAVAILABLE},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(t){const{options:{mediaLang:e}={}}=t;return e??"en"}}},g1={[D.MEDIA_PREVIEW_REQUEST](t,e,{detail:i}){var a,r,n;const{media:s}=e,o=i??void 0;let l,d;if(s&&o!=null){const[u]=vl(s,{kind:Jt.METADATA,label:"thumbnails"}),v=Array.prototype.find.call((a=u?.cues)!=null?a:[],(g,_,y)=>_===0?g.endTime>o:_===y.length-1?g.startTime<=o:g.startTime<=o&&g.endTime>o);if(v){const g=/'^(?:[a-z]+:)?\/\//i.test(v.text)||(r=s?.querySelector('track[label="thumbnails"]'))==null?void 0:r.src,_=new URL(v.text,g);d=new URLSearchParams(_.hash).get("#xywh").split(",").map(f=>+f),l=_.href}}const m=t.mediaDuration.get(e);let c=(n=t.mediaChaptersCues.get(e).find((u,v,g)=>v===g.length-1&&m===u.endTime?u.startTime<=o&&u.endTime>=o:u.startTime<=o&&u.endTime>o))==null?void 0:n.text;return i!=null&&c==null&&(c=""),{mediaPreviewTime:o,mediaPreviewImage:l,mediaPreviewCoords:d,mediaPreviewChapter:c}},[D.MEDIA_PAUSE_REQUEST](t,e){t["mediaPaused"].set(!0,e)},[D.MEDIA_PLAY_REQUEST](t,e){var i,a,r,n;const s="mediaPaused",l=t.mediaStreamType.get(e)===Gt.LIVE,d=!((i=e.options)!=null&&i.noAutoSeekToLive),m=t.mediaTargetLiveWindow.get(e)>0;if(l&&d&&!m){const p=(a=t.mediaSeekable.get(e))==null?void 0:a[1];if(p){const c=(n=(r=e.options)==null?void 0:r.seekToLiveOffset)!=null?n:0,u=p-c;t.mediaCurrentTime.set(u,e)}}t[s].set(!1,e)},[D.MEDIA_PLAYBACK_RATE_REQUEST](t,e,{detail:i}){const a="mediaPlaybackRate",r=i;t[a].set(r,e)},[D.MEDIA_MUTE_REQUEST](t,e){t["mediaMuted"].set(!0,e)},[D.MEDIA_UNMUTE_REQUEST](t,e){const i="mediaMuted";t.mediaVolume.get(e)||t.mediaVolume.set(.25,e),t[i].set(!1,e)},[D.MEDIA_LOOP_REQUEST](t,e,{detail:i}){const a="mediaLoop",r=!!i;return t[a].set(r,e),{mediaLoop:r}},[D.MEDIA_VOLUME_REQUEST](t,e,{detail:i}){const a="mediaVolume",r=i;r&&t.mediaMuted.get(e)&&t.mediaMuted.set(!1,e),t[a].set(r,e)},[D.MEDIA_SEEK_REQUEST](t,e,{detail:i}){const a="mediaCurrentTime",r=i;t[a].set(r,e)},[D.MEDIA_SEEK_TO_LIVE_REQUEST](t,e){var i,a,r;const n="mediaCurrentTime",s=(i=t.mediaSeekable.get(e))==null?void 0:i[1];if(Number.isNaN(Number(s)))return;const o=(r=(a=e.options)==null?void 0:a.seekToLiveOffset)!=null?r:0,l=s-o;t[n].set(l,e)},[D.MEDIA_SHOW_SUBTITLES_REQUEST](t,e,{detail:i}){var a;const{options:r}=e,n=Ro(e),s=wv(i),o=(a=s[0])==null?void 0:a.language;o&&!r.noSubtitlesLangPref&&b.localStorage.setItem("media-chrome-pref-subtitles-lang",o),mn(ar.SHOWING,n,s)},[D.MEDIA_DISABLE_SUBTITLES_REQUEST](t,e,{detail:i}){const a=Ro(e),r=i??[];mn(ar.DISABLED,a,r)},[D.MEDIA_TOGGLE_SUBTITLES_REQUEST](t,e,{detail:i}){Dv(e,i)},[D.MEDIA_RENDITION_REQUEST](t,e,{detail:i}){const a="mediaRenditionSelected",r=i;t[a].set(r,e)},[D.MEDIA_AUDIO_TRACK_REQUEST](t,e,{detail:i}){const a="mediaAudioTrackEnabled",r=i;t[a].set(r,e)},[D.MEDIA_ENTER_PIP_REQUEST](t,e){const i="mediaIsPip";t.mediaIsFullscreen.get(e)&&t.mediaIsFullscreen.set(!1,e),t[i].set(!0,e)},[D.MEDIA_EXIT_PIP_REQUEST](t,e){t["mediaIsPip"].set(!1,e)},[D.MEDIA_ENTER_FULLSCREEN_REQUEST](t,e,i){const a="mediaIsFullscreen";t.mediaIsPip.get(e)&&t.mediaIsPip.set(!1,e),t[a].set(!0,e,i)},[D.MEDIA_EXIT_FULLSCREEN_REQUEST](t,e){t["mediaIsFullscreen"].set(!1,e)},[D.MEDIA_ENTER_CAST_REQUEST](t,e){const i="mediaIsCasting";t.mediaIsFullscreen.get(e)&&t.mediaIsFullscreen.set(!1,e),t[i].set(!0,e)},[D.MEDIA_EXIT_CAST_REQUEST](t,e){t["mediaIsCasting"].set(!1,e)},[D.MEDIA_AIRPLAY_REQUEST](t,e){t["mediaIsAirplaying"].set(!0,e)}},y1=({media:t,fullscreenElement:e,documentElement:i,stateMediator:a=Yr,requestMap:r=g1,options:n={},monitorStateOwnersOnlyWithSubscriptions:s=!0})=>{const o=[],l={options:{...n}};let d=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0});const m=g=>{g!=null&&(Ju(g,d)||(d=Object.freeze({...d,...g}),o.forEach(_=>_(d))))},p=()=>{const g=Object.entries(a).reduce((_,[y,{get:f}])=>(_[y]=f(l),_),{});m(g)},c={};let u;const v=async(g,_)=>{var y,f,T,I,k,C,S,P,q,B,W,se,oe,He,Je,et;const Se=!!u;if(u={...l,...u??{},...g},Se)return;await E1(...Object.values(g));const we=o.length>0&&_===0&&s,Et=l.media!==u.media,tt=((y=l.media)==null?void 0:y.textTracks)!==((f=u.media)==null?void 0:f.textTracks),Me=((T=l.media)==null?void 0:T.videoRenditions)!==((I=u.media)==null?void 0:I.videoRenditions),ii=((k=l.media)==null?void 0:k.audioTracks)!==((C=u.media)==null?void 0:C.audioTracks),Be=((S=l.media)==null?void 0:S.remote)!==((P=u.media)==null?void 0:P.remote),Ke=l.documentElement!==u.documentElement,ai=!!l.media&&(Et||we),kr=!!((q=l.media)!=null&&q.textTracks)&&(tt||we),eh=!!((B=l.media)!=null&&B.videoRenditions)&&(Me||we),th=!!((W=l.media)!=null&&W.audioTracks)&&(ii||we),ih=!!((se=l.media)!=null&&se.remote)&&(Be||we),ah=!!l.documentElement&&(Ke||we),wl=ai||kr||eh||th||ih||ah,_a=o.length===0&&_===1&&s,rh=!!u.media&&(Et||_a),nh=!!((oe=u.media)!=null&&oe.textTracks)&&(tt||_a),sh=!!((He=u.media)!=null&&He.videoRenditions)&&(Me||_a),oh=!!((Je=u.media)!=null&&Je.audioTracks)&&(ii||_a),lh=!!((et=u.media)!=null&&et.remote)&&(Be||_a),dh=!!u.documentElement&&(Ke||_a),uh=rh||nh||sh||oh||lh||dh;if(!(wl||uh)){Object.entries(u).forEach(([te,Sr])=>{l[te]=Sr}),p(),u=void 0;return}Object.entries(a).forEach(([te,{get:Sr,mediaEvents:dE=[],textTracksEvents:uE=[],videoRenditionsEvents:cE=[],audioTracksEvents:hE=[],remoteEvents:mE=[],rootEvents:pE=[],stateOwnersUpdateHandlers:vE=[]}])=>{c[te]||(c[te]={});const it=he=>{const ge=Sr(l,he);m({[te]:ge})};let De;De=c[te].mediaEvents,dE.forEach(he=>{De&&ai&&(l.media.removeEventListener(he,De),c[te].mediaEvents=void 0),rh&&(u.media.addEventListener(he,it),c[te].mediaEvents=it)}),De=c[te].textTracksEvents,uE.forEach(he=>{var ge,_t;De&&kr&&((ge=l.media.textTracks)==null||ge.removeEventListener(he,De),c[te].textTracksEvents=void 0),nh&&((_t=u.media.textTracks)==null||_t.addEventListener(he,it),c[te].textTracksEvents=it)}),De=c[te].videoRenditionsEvents,cE.forEach(he=>{var ge,_t;De&&eh&&((ge=l.media.videoRenditions)==null||ge.removeEventListener(he,De),c[te].videoRenditionsEvents=void 0),sh&&((_t=u.media.videoRenditions)==null||_t.addEventListener(he,it),c[te].videoRenditionsEvents=it)}),De=c[te].audioTracksEvents,hE.forEach(he=>{var ge,_t;De&&th&&((ge=l.media.audioTracks)==null||ge.removeEventListener(he,De),c[te].audioTracksEvents=void 0),oh&&((_t=u.media.audioTracks)==null||_t.addEventListener(he,it),c[te].audioTracksEvents=it)}),De=c[te].remoteEvents,mE.forEach(he=>{var ge,_t;De&&ih&&((ge=l.media.remote)==null||ge.removeEventListener(he,De),c[te].remoteEvents=void 0),lh&&((_t=u.media.remote)==null||_t.addEventListener(he,it),c[te].remoteEvents=it)}),De=c[te].rootEvents,pE.forEach(he=>{De&&ah&&(l.documentElement.removeEventListener(he,De),c[te].rootEvents=void 0),dh&&(u.documentElement.addEventListener(he,it),c[te].rootEvents=it)});const Bn=c[te].stateOwnersUpdateHandlers;if(Bn&&wl&&(Array.isArray(Bn)?Bn:[Bn]).forEach(ge=>{typeof ge=="function"&&ge()}),uh){const he=vE.map(ge=>ge(it,u)).filter(ge=>typeof ge=="function");c[te].stateOwnersUpdateHandlers=he.length===1?he[0]:he}else wl&&(c[te].stateOwnersUpdateHandlers=void 0)}),Object.entries(u).forEach(([te,Sr])=>{l[te]=Sr}),p(),u=void 0};return v({media:t,fullscreenElement:e,documentElement:i,options:n}),{dispatch(g){const{type:_,detail:y}=g;if(r[_]&&d.mediaErrorCode==null){m(r[_](a,l,g));return}_==="mediaelementchangerequest"?v({media:y}):_==="fullscreenelementchangerequest"?v({fullscreenElement:y}):_==="documentelementchangerequest"?v({documentElement:y}):_==="optionschangerequest"&&(Object.entries(y??{}).forEach(([f,T])=>{l.options[f]=T}),p())},getState(){return d},subscribe(g){return v({},o.length+1),o.push(g),g(d),()=>{const _=o.indexOf(g);_>=0&&(v({},o.length-1),o.splice(_,1))}}}};var ec=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},x=(t,e,i)=>(ec(t,e,"read from private field"),i?i.call(t):e.get(t)),rt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},kt=(t,e,i,a)=>(ec(t,e,"write to private field"),e.set(t,i),i),Ii=(t,e,i)=>(ec(t,e,"access private method"),i),mi,Gr,G,ot,jr,Ut,ks,zr,Ss,yd,ha,ws,Td,pn,Lo,Ad,xv;const Ov=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter"," ","f","m","k","c","l","j",">","<","p"],Vh=10,qh=.025,Yh=.25,T1=.25,A1=2,R={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_DOWN_VOLUME_STEP:"keyboarddownvolumestep",KEYBOARD_UP_VOLUME_STEP:"keyboardupvolumestep",KEYS_USED:"keysused",LANG:"lang",LOOP:"loop",LIVE_EDGE_OFFSET:"liveedgeoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_DEFAULT_STORE:"nodefaultstore",NO_HOTKEYS:"nohotkeys",NO_MUTED_PREF:"nomutedpref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_VOLUME_PREF:"novolumepref",SEEK_TO_LIVE_OFFSET:"seektoliveoffset"};class Nv extends ml{constructor(){super(),rt(this,Ss),rt(this,ws),rt(this,pn),rt(this,Ad),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,rt(this,mi,new Zu(this,R.HOTKEYS)),rt(this,Gr,void 0),rt(this,G,void 0),rt(this,ot,null),rt(this,jr,void 0),rt(this,Ut,void 0),rt(this,ks,i=>{var a;(a=x(this,G))==null||a.dispatch(i)}),rt(this,zr,void 0),rt(this,ha,i=>{const{key:a,shiftKey:r}=i;if(!(r&&(a==="/"||a==="?")||Ov.includes(a))){this.removeEventListener("keyup",x(this,ha));return}this.keyboardShortcutHandler(i)}),this.associateElement(this);let e={};kt(this,jr,i=>{Object.entries(i).forEach(([a,r])=>{if(a in e&&e[a]===r)return;this.propagateMediaState(a,r);const n=a.toLowerCase(),s=new b.CustomEvent(Ey[n],{composed:!0,detail:r});this.dispatchEvent(s)}),e=i})}static get observedAttributes(){return super.observedAttributes.concat(R.NO_HOTKEYS,R.HOTKEYS,R.DEFAULT_STREAM_TYPE,R.DEFAULT_SUBTITLES,R.DEFAULT_DURATION,R.NO_MUTED_PREF,R.NO_VOLUME_PREF,R.LANG,R.LOOP,R.LIVE_EDGE_OFFSET,R.SEEK_TO_LIVE_OFFSET,R.NO_AUTO_SEEK_TO_LIVE)}get mediaStore(){return x(this,G)}set mediaStore(e){var i,a;if(x(this,G)&&((i=x(this,Ut))==null||i.call(this),kt(this,Ut,void 0)),kt(this,G,e),!x(this,G)&&!this.hasAttribute(R.NO_DEFAULT_STORE)){Ii(this,Ss,yd).call(this);return}kt(this,Ut,(a=x(this,G))==null?void 0:a.subscribe(x(this,jr)))}get fullscreenElement(){var e;return(e=x(this,Gr))!=null?e:this}set fullscreenElement(e){var i;this.hasAttribute(R.FULLSCREEN_ELEMENT)&&this.removeAttribute(R.FULLSCREEN_ELEMENT),kt(this,Gr,e),(i=x(this,G))==null||i.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return j(this,R.DEFAULT_SUBTITLES)}set defaultSubtitles(e){z(this,R.DEFAULT_SUBTITLES,e)}get defaultStreamType(){return le(this,R.DEFAULT_STREAM_TYPE)}set defaultStreamType(e){ne(this,R.DEFAULT_STREAM_TYPE,e)}get defaultDuration(){return re(this,R.DEFAULT_DURATION)}set defaultDuration(e){ve(this,R.DEFAULT_DURATION,e)}get noHotkeys(){return j(this,R.NO_HOTKEYS)}set noHotkeys(e){z(this,R.NO_HOTKEYS,e)}get keysUsed(){return le(this,R.KEYS_USED)}set keysUsed(e){ne(this,R.KEYS_USED,e)}get liveEdgeOffset(){return re(this,R.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){ve(this,R.LIVE_EDGE_OFFSET,e)}get noAutoSeekToLive(){return j(this,R.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(e){z(this,R.NO_AUTO_SEEK_TO_LIVE,e)}get noVolumePref(){return j(this,R.NO_VOLUME_PREF)}set noVolumePref(e){z(this,R.NO_VOLUME_PREF,e)}get noMutedPref(){return j(this,R.NO_MUTED_PREF)}set noMutedPref(e){z(this,R.NO_MUTED_PREF,e)}get noSubtitlesLangPref(){return j(this,R.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(e){z(this,R.NO_SUBTITLES_LANG_PREF,e)}get noDefaultStore(){return j(this,R.NO_DEFAULT_STORE)}set noDefaultStore(e){z(this,R.NO_DEFAULT_STORE,e)}get resolvedLang(){return Dy()}attributeChangedCallback(e,i,a){var r,n,s,o,l,d,m,p,c,u,v,g;if(super.attributeChangedCallback(e,i,a),e===R.NO_HOTKEYS)a!==i&&a===""?(this.hasAttribute(R.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):a!==i&&a===null&&this.enableHotkeys(),Ii(this,pn,Lo).call(this);else if(e===R.HOTKEYS)x(this,mi).value=a,Ii(this,pn,Lo).call(this);else if(e===R.DEFAULT_SUBTITLES&&a!==i)(r=x(this,G))==null||r.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(R.DEFAULT_SUBTITLES)}});else if(e===R.DEFAULT_STREAM_TYPE)(s=x(this,G))==null||s.dispatch({type:"optionschangerequest",detail:{defaultStreamType:(n=this.getAttribute(R.DEFAULT_STREAM_TYPE))!=null?n:void 0}});else if(e===R.LIVE_EDGE_OFFSET&&a!==i)(o=x(this,G))==null||o.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(R.LIVE_EDGE_OFFSET)?+this.getAttribute(R.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(R.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(R.SEEK_TO_LIVE_OFFSET):this.hasAttribute(R.LIVE_EDGE_OFFSET)?+this.getAttribute(R.LIVE_EDGE_OFFSET):void 0}});else if(e===R.SEEK_TO_LIVE_OFFSET&&a!==i)(l=x(this,G))==null||l.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(R.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(R.SEEK_TO_LIVE_OFFSET):this.hasAttribute(R.LIVE_EDGE_OFFSET)?+this.getAttribute(R.LIVE_EDGE_OFFSET):void 0}});else if(e===R.NO_AUTO_SEEK_TO_LIVE)(d=x(this,G))==null||d.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(R.NO_AUTO_SEEK_TO_LIVE)}});else if(e===R.FULLSCREEN_ELEMENT){const _=a?(m=this.getRootNode())==null?void 0:m.getElementById(a):void 0;kt(this,Gr,_),(p=x(this,G))==null||p.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===R.LANG&&a!==i?(Ly(a),(c=x(this,G))==null||c.dispatch({type:"optionschangerequest",detail:{mediaLang:a}})):e===R.LOOP&&a!==i?(u=x(this,G))==null||u.dispatch({type:D.MEDIA_LOOP_REQUEST,detail:a!=null}):e===R.NO_VOLUME_PREF&&a!==i?(v=x(this,G))==null||v.dispatch({type:"optionschangerequest",detail:{noVolumePref:this.hasAttribute(R.NO_VOLUME_PREF)}}):e===R.NO_MUTED_PREF&&a!==i&&((g=x(this,G))==null||g.dispatch({type:"optionschangerequest",detail:{noMutedPref:this.hasAttribute(R.NO_MUTED_PREF)}}))}connectedCallback(){var e,i,a;this.associateElement(this),!x(this,G)&&!this.hasAttribute(R.NO_DEFAULT_STORE)&&Ii(this,Ss,yd).call(this),(e=x(this,G))==null||e.dispatch({type:"documentelementchangerequest",detail:ke}),(i=x(this,G))==null||i.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement}),super.connectedCallback(),x(this,G)&&!x(this,Ut)&&kt(this,Ut,(a=x(this,G))==null?void 0:a.subscribe(x(this,jr))),x(this,zr)!==void 0&&x(this,G)&&this.media&&setTimeout(()=>{var r,n,s;(n=(r=this.media)==null?void 0:r.textTracks)!=null&&n.length&&((s=x(this,G))==null||s.dispatch({type:D.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:x(this,zr)}))},0),this.hasAttribute(R.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var e,i,a,r,n,s;if((e=super.disconnectedCallback)==null||e.call(this),this.disableHotkeys(),x(this,G)){const o=x(this,G).getState();kt(this,zr,!!((i=o.mediaSubtitlesShowing)!=null&&i.length)),(a=x(this,G))==null||a.dispatch({type:"fullscreenelementchangerequest",detail:void 0}),(r=x(this,G))==null||r.dispatch({type:"documentelementchangerequest",detail:void 0}),(n=x(this,G))==null||n.dispatch({type:D.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})}x(this,Ut)&&((s=x(this,Ut))==null||s.call(this),kt(this,Ut,void 0)),this.unassociateElement(this),x(this,ot)&&(x(this,ot).remove(),kt(this,ot,null))}mediaSetCallback(e){var i;super.mediaSetCallback(e),(i=x(this,G))==null||i.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var i;super.mediaUnsetCallback(e),(i=x(this,G))==null||i.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,i){zh(this.mediaStateReceivers,e,i)}associateElement(e){if(!e)return;const{associatedElementSubscriptions:i}=this;if(i.has(e))return;const a=this.registerMediaStateReceiver.bind(this),r=this.unregisterMediaStateReceiver.bind(this),n=C1(e,a,r);Object.values(D).forEach(s=>{e.addEventListener(s,x(this,ks))}),i.set(e,n)}unassociateElement(e){if(!e)return;const{associatedElementSubscriptions:i}=this;if(!i.has(e))return;i.get(e)(),i.delete(e),Object.values(D).forEach(r=>{e.removeEventListener(r,x(this,ks))})}registerMediaStateReceiver(e){if(!e)return;const i=this.mediaStateReceivers;i.indexOf(e)>-1||(i.push(e),x(this,G)&&Object.entries(x(this,G).getState()).forEach(([r,n])=>{zh([e],r,n)}))}unregisterMediaStateReceiver(e){const i=this.mediaStateReceivers,a=i.indexOf(e);a<0||i.splice(a,1)}enableHotkeys(){this.addEventListener("keydown",Ii(this,ws,Td))}disableHotkeys(){this.removeEventListener("keydown",Ii(this,ws,Td)),this.removeEventListener("keyup",x(this,ha))}get hotkeys(){return x(this,mi)}set hotkeys(e){ne(this,R.HOTKEYS,e)}keyboardShortcutHandler(e){var i,a,r,n,s,o,l,d,m;const p=e.target;if(((r=(a=(i=p.getAttribute(R.KEYS_USED))==null?void 0:i.split(" "))!=null?a:p?.keysUsed)!=null?r:[]).map(y=>y==="Space"?" ":y).filter(Boolean).includes(e.key))return;let u,v,g;if(!(x(this,mi).contains(Qu(e.key))||e.shiftKey&&(e.key==="/"||e.key==="?")&&x(this,mi).contains("noshift+/")))switch(e.key){case" ":case"k":u=x(this,G).getState().mediaPaused?D.MEDIA_PLAY_REQUEST:D.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new b.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"m":u=this.mediaStore.getState().mediaVolumeLevel==="off"?D.MEDIA_UNMUTE_REQUEST:D.MEDIA_MUTE_REQUEST,this.dispatchEvent(new b.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"f":u=this.mediaStore.getState().mediaIsFullscreen?D.MEDIA_EXIT_FULLSCREEN_REQUEST:D.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new b.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new b.CustomEvent(D.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":case"j":{const y=this.hasAttribute(R.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(R.KEYBOARD_BACKWARD_SEEK_OFFSET):Vh;v=Math.max(((n=this.mediaStore.getState().mediaCurrentTime)!=null?n:0)-y,0),g=new b.CustomEvent(D.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(g);break}case"ArrowRight":case"l":{const y=this.hasAttribute(R.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(R.KEYBOARD_FORWARD_SEEK_OFFSET):Vh;v=Math.max(((s=this.mediaStore.getState().mediaCurrentTime)!=null?s:0)+y,0),g=new b.CustomEvent(D.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(g);break}case"ArrowUp":{const y=this.hasAttribute(R.KEYBOARD_UP_VOLUME_STEP)?+this.getAttribute(R.KEYBOARD_UP_VOLUME_STEP):qh;v=Math.min(((o=this.mediaStore.getState().mediaVolume)!=null?o:1)+y,1),g=new b.CustomEvent(D.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(g);break}case"ArrowDown":{const y=this.hasAttribute(R.KEYBOARD_DOWN_VOLUME_STEP)?+this.getAttribute(R.KEYBOARD_DOWN_VOLUME_STEP):qh;v=Math.max(((l=this.mediaStore.getState().mediaVolume)!=null?l:1)-y,0),g=new b.CustomEvent(D.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(g);break}case"<":{const y=(d=this.mediaStore.getState().mediaPlaybackRate)!=null?d:1;v=Math.max(y-Yh,T1).toFixed(2),g=new b.CustomEvent(D.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(g);break}case">":{const y=(m=this.mediaStore.getState().mediaPlaybackRate)!=null?m:1;v=Math.min(y+Yh,A1).toFixed(2),g=new b.CustomEvent(D.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(g);break}case"/":case"?":{e.shiftKey&&Ii(this,Ad,xv).call(this);break}case"p":{u=this.mediaStore.getState().mediaIsPip?D.MEDIA_EXIT_PIP_REQUEST:D.MEDIA_ENTER_PIP_REQUEST,g=new b.CustomEvent(u,{composed:!0,bubbles:!0}),this.dispatchEvent(g);break}}}}mi=new WeakMap;Gr=new WeakMap;G=new WeakMap;ot=new WeakMap;jr=new WeakMap;Ut=new WeakMap;ks=new WeakMap;zr=new WeakMap;Ss=new WeakSet;yd=function(){var t;this.mediaStore=y1({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(R.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(R.DEFAULT_DURATION)?+this.getAttribute(R.DEFAULT_DURATION):void 0,defaultStreamType:(t=this.getAttribute(R.DEFAULT_STREAM_TYPE))!=null?t:void 0,liveEdgeOffset:this.hasAttribute(R.LIVE_EDGE_OFFSET)?+this.getAttribute(R.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(R.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(R.SEEK_TO_LIVE_OFFSET):this.hasAttribute(R.LIVE_EDGE_OFFSET)?+this.getAttribute(R.LIVE_EDGE_OFFSET):void 0,noAutoSeekToLive:this.hasAttribute(R.NO_AUTO_SEEK_TO_LIVE),noVolumePref:this.hasAttribute(R.NO_VOLUME_PREF),noMutedPref:this.hasAttribute(R.NO_MUTED_PREF),noSubtitlesLangPref:this.hasAttribute(R.NO_SUBTITLES_LANG_PREF)}})};ha=new WeakMap;ws=new WeakSet;Td=function(t){var e;const{metaKey:i,altKey:a,key:r,shiftKey:n}=t,s=n&&(r==="/"||r==="?");if(s&&((e=x(this,ot))!=null&&e.open)){this.removeEventListener("keyup",x(this,ha));return}if(i||a||!s&&!Ov.includes(r)){this.removeEventListener("keyup",x(this,ha));return}const o=t.target,l=o instanceof HTMLElement&&(o.tagName.toLowerCase()==="media-volume-range"||o.tagName.toLowerCase()==="media-time-range");[" ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(r)&&!x(this,mi).contains(Qu(r))&&!l&&t.preventDefault(),this.addEventListener("keyup",x(this,ha),{once:!0})};pn=new WeakSet;Lo=function(){x(this,ot)&&(x(this,ot).hotkeys=x(this,mi).value||void 0,(this.noHotkeys||x(this,mi).contains("noshift+/"))&&(x(this,ot).open=!1))};Ad=new WeakSet;xv=function(){x(this,ot)||(kt(this,ot,ke.createElement("media-keyboard-shortcuts-dialog")),Ii(this,pn,Lo).call(this),this.appendChild(x(this,ot))),x(this,ot).open=!0};const k1=Object.values(h),S1=Object.values(ev),Pv=t=>{var e,i,a,r;let{observedAttributes:n}=t.constructor;!n&&((e=t.nodeName)!=null&&e.includes("-"))&&(b.customElements.upgrade(t),{observedAttributes:n}=t.constructor);const s=(r=(a=(i=t?.getAttribute)==null?void 0:i.call(t,Z.MEDIA_CHROME_ATTRIBUTES))==null?void 0:a.split)==null?void 0:r.call(a,/\s+/);return Array.isArray(n||s)?(n||s).filter(o=>k1.includes(o)):[]},w1=t=>{var e,i;return(e=t.nodeName)!=null&&e.includes("-")&&b.customElements.get((i=t.nodeName)==null?void 0:i.toLowerCase())&&!(t instanceof b.customElements.get(t.nodeName.toLowerCase()))&&b.customElements.upgrade(t),S1.some(a=>a in t)},kd=t=>w1(t)||!!Pv(t).length,Gh=t=>{var e;return(e=t?.join)==null?void 0:e.call(t,":")},jh={[h.MEDIA_SUBTITLES_LIST]:Mn,[h.MEDIA_SUBTITLES_SHOWING]:Mn,[h.MEDIA_SEEKABLE]:Gh,[h.MEDIA_BUFFERED]:t=>t?.map(Gh).join(" "),[h.MEDIA_PREVIEW_COORDS]:t=>t?.join(" "),[h.MEDIA_RENDITION_LIST]:by,[h.MEDIA_AUDIO_TRACK_LIST]:Ay},I1=async(t,e,i)=>{var a,r;if(t.isConnected||await av(0),typeof i=="boolean"||i==null)return z(t,e,i);if(typeof i=="number")return ve(t,e,i);if(typeof i=="string")return ne(t,e,i);if(Array.isArray(i)&&!i.length)return t.removeAttribute(e);const n=(r=(a=jh[e])==null?void 0:a.call(jh,i))!=null?r:i;return t.setAttribute(e,n)},R1=t=>{var e;return!!((e=t.closest)!=null&&e.call(t,'*[slot="media"]'))},Ji=(t,e)=>{if(R1(t))return;const i=(r,n)=>{var s,o;kd(r)&&n(r);const{children:l=[]}=r??{},d=(o=(s=r?.shadowRoot)==null?void 0:s.children)!=null?o:[];[...l,...d].forEach(p=>Ji(p,n))},a=t?.nodeName.toLowerCase();if(a.includes("-")&&!kd(t)){b.customElements.whenDefined(a).then(()=>{i(t,e)});return}i(t,e)},zh=(t,e,i)=>{t.forEach(a=>{if(e in a){a[e]=i;return}const r=Pv(a),n=e.toLowerCase();r.includes(n)&&I1(a,n,i)})},C1=(t,e,i)=>{Ji(t,e);const a=m=>{var p;const c=(p=m?.composedPath()[0])!=null?p:m.target;e(c)},r=m=>{var p;const c=(p=m?.composedPath()[0])!=null?p:m.target;i(c)};t.addEventListener(D.REGISTER_MEDIA_STATE_RECEIVER,a),t.addEventListener(D.UNREGISTER_MEDIA_STATE_RECEIVER,r);const n=m=>{m.forEach(p=>{const{addedNodes:c=[],removedNodes:u=[],type:v,target:g,attributeName:_}=p;v==="childList"?(Array.prototype.forEach.call(c,y=>Ji(y,e)),Array.prototype.forEach.call(u,y=>Ji(y,i))):v==="attributes"&&_===Z.MEDIA_CHROME_ATTRIBUTES&&(kd(g)?e(g):i(g))})};let s=[];const o=m=>{const p=m.target;p.name!=="media"&&(s.forEach(c=>Ji(c,i)),s=[...p.assignedElements({flatten:!0})],s.forEach(c=>Ji(c,e)))};t.addEventListener("slotchange",o);const l=new MutationObserver(n);return l.observe(t,{childList:!0,attributes:!0,subtree:!0}),()=>{Ji(t,i),t.removeEventListener("slotchange",o),l.disconnect(),t.removeEventListener(D.REGISTER_MEDIA_STATE_RECEIVER,a),t.removeEventListener(D.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};b.customElements.get("media-controller")||b.customElements.define("media-controller",Nv);var L1=Nv;const ba={PLACEMENT:"placement",BOUNDS:"bounds"};function M1(t){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `}class fl extends b.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!hv(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;const i=this.placement;if(i==="left"||i==="right"){this.style.removeProperty("--media-tooltip-offset-x");return}const a=getComputedStyle(this),r=(e=br(this,"#"+this.bounds))!=null?e:Ze(this);if(!r)return;const{x:n,width:s}=r.getBoundingClientRect(),{x:o,width:l}=this.getBoundingClientRect(),d=o+l,m=n+s,p=a.getPropertyValue("--media-tooltip-offset-x"),c=p?parseFloat(p.replace("px","")):0,u=a.getPropertyValue("--media-tooltip-container-margin"),v=u?parseFloat(u.replace("px","")):0,g=o-n+c-v,_=d-m+c+v;if(g<0){this.style.setProperty("--media-tooltip-offset-x",`${g}px`);return}if(_>0){this.style.setProperty("--media-tooltip-offset-x",`${_}px`);return}this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=dt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[ba.PLACEMENT,ba.BOUNDS]}get placement(){return le(this,ba.PLACEMENT)}set placement(e){ne(this,ba.PLACEMENT,e)}get bounds(){return le(this,ba.BOUNDS)}set bounds(e){ne(this,ba.BOUNDS,e)}}fl.shadowRootOptions={mode:"open"};fl.getTemplateHTML=M1;b.customElements.get("media-tooltip")||b.customElements.define("media-tooltip",fl);var Qh=fl,tc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Te=(t,e,i)=>(tc(t,e,"read from private field"),i?i.call(t):e.get(t)),zi=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Gn=(t,e,i,a)=>(tc(t,e,"write to private field"),e.set(t,i),i),Zh=(t,e,i)=>(tc(t,e,"access private method"),i),$t,Xa,Sd,Uv,$i,Oa,Is,wd,$v;const Ti={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"};function D1(t,e={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      slot[name="icon"] {
        display: inline-flex;
        align-items: center;
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(t,e)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${Qh.shadowRootOptions.mode}">
          ${Qh.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(t)}
        </slot>
      </media-tooltip>
    </slot>
  `}function x1(t,e){return`
    <slot></slot>
  `}function O1(){return""}class Pe extends b.HTMLElement{constructor(){if(super(),zi(this,Sd),zi(this,wd),zi(this,$t,void 0),this.preventClick=!1,this.tooltipEl=null,zi(this,Xa,e=>{this.preventClick||this.handleClick(e),setTimeout(Te(this,$i),0)}),zi(this,$i,()=>{var e,i;(i=(e=this.tooltipEl)==null?void 0:e.updateXOffset)==null||i.call(e)}),zi(this,Oa,e=>{const{key:i}=e;if(!this.keysUsed.includes(i)){this.removeEventListener("keyup",Te(this,Oa));return}this.preventClick||this.handleClick(e)}),zi(this,Is,e=>{const{metaKey:i,altKey:a,key:r}=e;if(i||a||!this.keysUsed.includes(r)){this.removeEventListener("keyup",Te(this,Oa));return}this.addEventListener("keyup",Te(this,Oa),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=dt(this.attributes),i=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",Ti.TOOLTIP_PLACEMENT,Z.MEDIA_CONTROLLER,h.MEDIA_LANG]}enable(){this.addEventListener("click",Te(this,Xa)),this.addEventListener("keydown",Te(this,Is)),this.tabIndex=0}disable(){this.removeEventListener("click",Te(this,Xa)),this.removeEventListener("keydown",Te(this,Is)),this.removeEventListener("keyup",Te(this,Oa)),this.tabIndex=-1}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===Z.MEDIA_CONTROLLER?(i&&((n=(r=Te(this,$t))==null?void 0:r.unassociateElement)==null||n.call(r,this),Gn(this,$t,null)),a&&this.isConnected&&(Gn(this,$t,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=Te(this,$t))==null?void 0:o.associateElement)==null||l.call(o,this))):e==="disabled"&&a!==i?a==null?this.enable():this.disable():e===Ti.TOOLTIP_PLACEMENT&&this.tooltipEl&&a!==i?this.tooltipEl.placement=a:e===h.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),Zh(this,Sd,Uv).call(this)&&Te(this,$i).call(this)}connectedCallback(){var e,i,a;const{style:r}=Ce(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");const n=this.getAttribute(Z.MEDIA_CONTROLLER);n&&(Gn(this,$t,(e=this.getRootNode())==null?void 0:e.getElementById(n)),(a=(i=Te(this,$t))==null?void 0:i.associateElement)==null||a.call(i,this)),b.customElements.whenDefined("media-tooltip").then(()=>Zh(this,wd,$v).call(this))}disconnectedCallback(){var e,i;this.disable(),(i=(e=Te(this,$t))==null?void 0:e.unassociateElement)==null||i.call(e,this),Gn(this,$t,null),this.removeEventListener("mouseenter",Te(this,$i)),this.removeEventListener("focus",Te(this,$i)),this.removeEventListener("click",Te(this,Xa))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return le(this,Ti.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){ne(this,Ti.TOOLTIP_PLACEMENT,e)}get mediaController(){return le(this,Z.MEDIA_CONTROLLER)}set mediaController(e){ne(this,Z.MEDIA_CONTROLLER,e)}get disabled(){return j(this,Ti.DISABLED)}set disabled(e){z(this,Ti.DISABLED,e)}get noTooltip(){return j(this,Ti.NO_TOOLTIP)}set noTooltip(e){z(this,Ti.NO_TOOLTIP,e)}handleClick(e){}}$t=new WeakMap;Xa=new WeakMap;Sd=new WeakSet;Uv=function(){try{return this.matches(":hover, :focus-visible")}catch{return this.matches(":hover, :focus")}};$i=new WeakMap;Oa=new WeakMap;Is=new WeakMap;wd=new WeakSet;$v=function(){this.addEventListener("mouseenter",Te(this,$i)),this.addEventListener("focus",Te(this,$i)),this.addEventListener("click",Te(this,Xa));const t=this.tooltipPlacement;t&&this.tooltipEl&&(this.tooltipEl.placement=t)};Pe.shadowRootOptions={mode:"open"};Pe.getTemplateHTML=D1;Pe.getSlotTemplateHTML=x1;Pe.getTooltipContentHTML=O1;b.customElements.get("media-chrome-button")||b.customElements.define("media-chrome-button",Pe);const Xh=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`;function N1(t){return`
    <style>
      :host([${h.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${h.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${h.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${h.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Xh}</slot>
      <slot name="exit">${Xh}</slot>
    </slot>
  `}function P1(){return`
    <slot name="tooltip-enter">${M("start airplay")}</slot>
    <slot name="tooltip-exit">${M("stop airplay")}</slot>
  `}const Jh=t=>{const e=t.mediaIsAirplaying?M("stop airplay"):M("start airplay");t.setAttribute("aria-label",e)};class ic extends Pe{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_IS_AIRPLAYING,h.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Jh(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_IS_AIRPLAYING&&Jh(this)}get mediaIsAirplaying(){return j(this,h.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){z(this,h.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return le(this,h.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){ne(this,h.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){const e=new b.CustomEvent(D.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}ic.getSlotTemplateHTML=N1;ic.getTooltipContentHTML=P1;b.customElements.get("media-airplay-button")||b.customElements.define("media-airplay-button",ic);const U1=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,$1=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function H1(t){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${U1}</slot>
      <slot name="off">${$1}</slot>
    </slot>
  `}function B1(){return`
    <slot name="tooltip-enable">${M("Enable captions")}</slot>
    <slot name="tooltip-disable">${M("Disable captions")}</slot>
  `}const em=t=>{t.setAttribute("aria-checked",Rv(t).toString())};class ac extends Pe{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_SUBTITLES_LIST,h.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","button"),this.setAttribute("aria-label",M("closed captions")),em(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_SUBTITLES_SHOWING&&em(this)}get mediaSubtitlesList(){return tm(this,h.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){im(this,h.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return tm(this,h.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){im(this,h.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new b.CustomEvent(D.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}ac.getSlotTemplateHTML=H1;ac.getTooltipContentHTML=B1;const tm=(t,e)=>{const i=t.getAttribute(e);return i?pl(i):[]},im=(t,e,i)=>{if(!i?.length){t.removeAttribute(e);return}const a=Mn(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};b.customElements.get("media-captions-button")||b.customElements.define("media-captions-button",ac);const W1='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg>',F1='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>';function K1(t){return`
    <style>
      :host([${h.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${h.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${h.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${h.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${W1}</slot>
      <slot name="exit">${F1}</slot>
    </slot>
  `}function V1(){return`
    <slot name="tooltip-enter">${M("Start casting")}</slot>
    <slot name="tooltip-exit">${M("Stop casting")}</slot>
  `}const am=t=>{const e=t.mediaIsCasting?M("stop casting"):M("start casting");t.setAttribute("aria-label",e)};class rc extends Pe{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_IS_CASTING,h.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),am(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_IS_CASTING&&am(this)}get mediaIsCasting(){return j(this,h.MEDIA_IS_CASTING)}set mediaIsCasting(e){z(this,h.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return le(this,h.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){ne(this,h.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){const e=this.mediaIsCasting?D.MEDIA_EXIT_CAST_REQUEST:D.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new b.CustomEvent(e,{composed:!0,bubbles:!0}))}}rc.getSlotTemplateHTML=K1;rc.getTooltipContentHTML=V1;b.customElements.get("media-cast-button")||b.customElements.define("media-cast-button",rc);var nc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},me=(t,e,i)=>(nc(t,e,"read from private field"),i?i.call(t):e.get(t)),Ue=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ri=(t,e,i,a)=>(nc(t,e,"write to private field"),e.set(t,i),i),It=(t,e,i)=>(nc(t,e,"access private method"),i),Ht,El,Rs,Cs,Rt,Mo,Ls,Ms,Ds,sc,Hv,xs,Id,Os,Rd,Do,oc,Cd,Bv,Ld,Wv,Md,Fv,Dd,Kv;function q1(t){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, 0);
        height: var(--media-time-range-hover-height, max(100% , 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, 0);
          height: var(--media-time-range-hover-height, max(100%, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }

      /* Visible label for accessibility - positioned off-screen but technically visible (Firefox requires visible labels) */
      #range-label {
        position: absolute;
        left: -10000px;
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        pointer-events: none;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments" aria-hidden="true"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
        <input id="range" type="range" min="0" max="1" step="any" value="0">
        <label for="range" id="range-label"></label>

      ${this.getContainerTemplateHTML(t)}
    </div>
    <div id="rightgap"></div>
  `}function Y1(t){return""}class yr extends b.HTMLElement{constructor(){if(super(),Ue(this,sc),Ue(this,xs),Ue(this,Os),Ue(this,Do),Ue(this,Cd),Ue(this,Ld),Ue(this,Md),Ue(this,Dd),Ue(this,Ht,void 0),Ue(this,El,void 0),Ue(this,Rs,void 0),Ue(this,Cs,void 0),Ue(this,Rt,{}),Ue(this,Mo,[]),Ue(this,Ls,()=>{if(this.range.matches(":focus-visible")){const{style:e}=Ce(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),Ue(this,Ms,()=>{const{style:e}=Ce(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),Ue(this,Ds,()=>{const e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=dt(this.attributes),i=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}this.container=this.shadowRoot.querySelector("#container"),Ri(this,Rs,this.shadowRoot.querySelector("#startpoint")),Ri(this,Cs,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",Z.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===Z.MEDIA_CONTROLLER?(i&&((n=(r=me(this,Ht))==null?void 0:r.unassociateElement)==null||n.call(r,this),Ri(this,Ht,null)),a&&this.isConnected&&(Ri(this,Ht,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=me(this,Ht))==null?void 0:o.associateElement)==null||l.call(o,this))):(e==="disabled"||e==="aria-disabled"&&i!==a)&&(a==null?(this.range.removeAttribute(e),It(this,xs,Id).call(this)):(this.range.setAttribute(e,a),It(this,Os,Rd).call(this)))}connectedCallback(){var e,i,a;const{style:r}=Ce(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),me(this,Rt).pointer=Ce(this.shadowRoot,"#pointer"),me(this,Rt).progress=Ce(this.shadowRoot,"#progress"),me(this,Rt).thumb=Ce(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),me(this,Rt).activeSegment=Ce(this.shadowRoot,"#segments-clipping rect:nth-child(0)");const n=this.getAttribute(Z.MEDIA_CONTROLLER);n&&(Ri(this,Ht,(e=this.getRootNode())==null?void 0:e.getElementById(n)),(a=(i=me(this,Ht))==null?void 0:i.associateElement)==null||a.call(i,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",me(this,Ls)),this.shadowRoot.addEventListener("focusout",me(this,Ms)),It(this,xs,Id).call(this),mr(this.container,me(this,Ds))}disconnectedCallback(){var e,i;It(this,Os,Rd).call(this),(i=(e=me(this,Ht))==null?void 0:e.unassociateElement)==null||i.call(e,this),Ri(this,Ht,null),this.shadowRoot.removeEventListener("focusin",me(this,Ls)),this.shadowRoot.removeEventListener("focusout",me(this,Ms)),pr(this.container,me(this,Ds))}updatePointerBar(e){var i;(i=me(this,Rt).pointer)==null||i.style.setProperty("width",`${this.getPointerRatio(e)*100}%`)}updateBar(){var e,i;const a=this.range.valueAsNumber*100;(e=me(this,Rt).progress)==null||e.style.setProperty("width",`${a}%`),(i=me(this,Rt).thumb)==null||i.style.setProperty("left",`${a}%`)}updateSegments(e){const i=this.shadowRoot.querySelector("#segments-clipping");if(i.textContent="",this.container.classList.toggle("segments",!!e?.length),!e?.length)return;const a=[...new Set([+this.range.min,...e.flatMap(n=>[n.start,n.end]),+this.range.max])];Ri(this,Mo,[...a]);const r=a.pop();for(const[n,s]of a.entries()){const[o,l]=[n===0,n===a.length-1],d=o?"calc(var(--segments-gap) / -1)":`${s*100}%`,p=`calc(${((l?r:a[n+1])-s)*100}%${o||l?"":" - var(--segments-gap)"})`,c=ke.createElementNS("http://www.w3.org/2000/svg","rect"),u=qu(this.shadowRoot,`#segments-clipping rect:nth-child(${n+1})`);u.style.setProperty("x",d),u.style.setProperty("width",p),i.append(c)}}getPointerRatio(e){return Ny(e.clientX,e.clientY,me(this,Rs).getBoundingClientRect(),me(this,Cs).getBoundingClientRect())}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":It(this,Dd,Kv).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":It(this,Cd,Bv).call(this,e);break;case"pointerdown":It(this,Do,oc).call(this,e);break;case"pointerup":It(this,Ld,Wv).call(this);break;case"pointerleave":It(this,Md,Fv).call(this);break}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}Ht=new WeakMap;El=new WeakMap;Rs=new WeakMap;Cs=new WeakMap;Rt=new WeakMap;Mo=new WeakMap;Ls=new WeakMap;Ms=new WeakMap;Ds=new WeakMap;sc=new WeakSet;Hv=function(t){const e=me(this,Rt).activeSegment;if(!e)return;const i=this.getPointerRatio(t),r=`#segments-clipping rect:nth-child(${me(this,Mo).findIndex((n,s,o)=>{const l=o[s+1];return l!=null&&i>=n&&i<=l})+1})`;(e.selectorText!=r||!e.style.transform)&&(e.selectorText=r,e.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))};xs=new WeakSet;Id=function(){this.hasAttribute("disabled")||!this.isConnected||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))};Os=new WeakSet;Rd=function(){var t,e;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),this.removeEventListener("pointerleave",this),(t=b.window)==null||t.removeEventListener("pointerup",this),(e=b.window)==null||e.removeEventListener("pointermove",this)};Do=new WeakSet;oc=function(t){var e;Ri(this,El,t.composedPath().includes(this.range)),(e=b.window)==null||e.addEventListener("pointerup",this,{once:!0})};Cd=new WeakSet;Bv=function(t){var e;t.pointerType!=="mouse"&&It(this,Do,oc).call(this,t),this.addEventListener("pointerleave",this,{once:!0}),(e=b.window)==null||e.addEventListener("pointermove",this)};Ld=new WeakSet;Wv=function(){var t;(t=b.window)==null||t.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")};Md=new WeakSet;Fv=function(){var t,e;this.removeEventListener("pointerleave",this),(t=b.window)==null||t.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),(e=me(this,Rt).activeSegment)==null||e.style.removeProperty("transform")};Dd=new WeakSet;Kv=function(t){t.pointerType==="pen"&&t.buttons===0||(this.toggleAttribute("dragging",t.buttons===1||t.pointerType!=="mouse"),this.updatePointerBar(t),It(this,sc,Hv).call(this,t),this.dragging&&(t.pointerType!=="mouse"||!me(this,El))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(t),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))))};yr.shadowRootOptions={mode:"open"};yr.getTemplateHTML=q1;yr.getContainerTemplateHTML=Y1;b.customElements.get("media-chrome-range")||b.customElements.define("media-chrome-range",yr);var Vv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},jn=(t,e,i)=>(Vv(t,e,"read from private field"),i?i.call(t):e.get(t)),G1=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},zn=(t,e,i,a)=>(Vv(t,e,"write to private field"),e.set(t,i),i),Bt;function j1(t){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `}class lc extends b.HTMLElement{constructor(){if(super(),G1(this,Bt,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=dt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[Z.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===Z.MEDIA_CONTROLLER&&(i&&((n=(r=jn(this,Bt))==null?void 0:r.unassociateElement)==null||n.call(r,this),zn(this,Bt,null)),a&&this.isConnected&&(zn(this,Bt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=jn(this,Bt))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,i,a;const r=this.getAttribute(Z.MEDIA_CONTROLLER);r&&(zn(this,Bt,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=jn(this,Bt))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=jn(this,Bt))==null?void 0:e.unassociateElement)==null||i.call(e,this),zn(this,Bt,null)}}Bt=new WeakMap;lc.shadowRootOptions={mode:"open"};lc.getTemplateHTML=j1;b.customElements.get("media-control-bar")||b.customElements.define("media-control-bar",lc);var qv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Qn=(t,e,i)=>(qv(t,e,"read from private field"),i?i.call(t):e.get(t)),z1=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Zn=(t,e,i,a)=>(qv(t,e,"write to private field"),e.set(t,i),i),Wt;function Q1(t,e={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(t,e)}
  `}function Z1(t,e){return`
    <slot></slot>
  `}class qi extends b.HTMLElement{constructor(){if(super(),z1(this,Wt,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=dt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[Z.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===Z.MEDIA_CONTROLLER&&(i&&((n=(r=Qn(this,Wt))==null?void 0:r.unassociateElement)==null||n.call(r,this),Zn(this,Wt,null)),a&&this.isConnected&&(Zn(this,Wt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=Qn(this,Wt))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,i,a;const{style:r}=Ce(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);const n=this.getAttribute(Z.MEDIA_CONTROLLER);n&&(Zn(this,Wt,(e=this.getRootNode())==null?void 0:e.getElementById(n)),(a=(i=Qn(this,Wt))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=Qn(this,Wt))==null?void 0:e.unassociateElement)==null||i.call(e,this),Zn(this,Wt,null)}}Wt=new WeakMap;qi.shadowRootOptions={mode:"open"};qi.getTemplateHTML=Q1;qi.getSlotTemplateHTML=Z1;b.customElements.get("media-text-display")||b.customElements.define("media-text-display",qi);var Yv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},rm=(t,e,i)=>(Yv(t,e,"read from private field"),i?i.call(t):e.get(t)),X1=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},J1=(t,e,i,a)=>(Yv(t,e,"write to private field"),e.set(t,i),i),Qr;function eT(t,e){return`
    <slot>${Ki(e.mediaDuration)}</slot>
  `}class Gv extends qi{constructor(){var e;super(),X1(this,Qr,void 0),J1(this,Qr,this.shadowRoot.querySelector("slot")),rm(this,Qr).textContent=Ki((e=this.mediaDuration)!=null?e:0)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_DURATION]}attributeChangedCallback(e,i,a){e===h.MEDIA_DURATION&&(rm(this,Qr).textContent=Ki(+a)),super.attributeChangedCallback(e,i,a)}get mediaDuration(){return re(this,h.MEDIA_DURATION)}set mediaDuration(e){ve(this,h.MEDIA_DURATION,e)}}Qr=new WeakMap;Gv.getSlotTemplateHTML=eT;b.customElements.get("media-duration-display")||b.customElements.define("media-duration-display",Gv);const tT={2:M("Network Error"),3:M("Decode Error"),4:M("Source Not Supported"),5:M("Encryption Error")},iT={2:M("A network error caused the media download to fail."),3:M("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:M("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:M("The media is encrypted and there are no keys to decrypt it.")},dc=t=>{var e,i;return t.code===1?null:{title:(e=tT[t.code])!=null?e:`Error ${t.code}`,message:(i=iT[t.code])!=null?i:t.message}};var jv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},aT=(t,e,i)=>(jv(t,e,"read from private field"),i?i.call(t):e.get(t)),rT=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},nT=(t,e,i,a)=>(jv(t,e,"write to private field"),e.set(t,i),i),Ns;function sT(t){const e=+t.mediaerrorcode;return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${e}" id="content">
      ${zv({code:e,message:t.mediaerrormessage})}
    </slot>
  `}function oT(t){return t.code&&dc(t)!==null}function zv(t){var e;const{title:i,message:a}=(e=dc(t))!=null?e:{},r=Pl(t.code);let n="";return i&&(n+=`<slot name="error-${r}-title"><h3>${Pl(i)}</h3></slot>`),a&&(n+=`<slot name="error-${r}-message"><p>${Pl(a)}</p></slot>`),n}const nm=[h.MEDIA_ERROR_CODE,h.MEDIA_ERROR_MESSAGE];class _l extends gr{constructor(){super(...arguments),rT(this,Ns,null)}static get observedAttributes(){return[...super.observedAttributes,...nm]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,i,a){var r;if(super.attributeChangedCallback(e,i,a),!nm.includes(e))return;const n=(r=this.mediaError)!=null?r:{code:this.mediaErrorCode,message:this.mediaErrorMessage};if(this.open=oT(n),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(n),!this.hasAttribute("aria-label"))){const{title:s}=dc(n);s&&this.setAttribute("aria-label",s)}}get mediaError(){return aT(this,Ns)}set mediaError(e){nT(this,Ns,e)}get mediaErrorCode(){return re(this,"mediaerrorcode")}set mediaErrorCode(e){ve(this,"mediaerrorcode",e)}get mediaErrorMessage(){return le(this,"mediaerrormessage")}set mediaErrorMessage(e){ne(this,"mediaerrormessage",e)}}Ns=new WeakMap;_l.getSlotTemplateHTML=sT;_l.formatErrorMessage=zv;b.customElements.get("media-error-dialog")||b.customElements.define("media-error-dialog",_l);var Qv=_l,Zv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},lT=(t,e,i)=>(Zv(t,e,"read from private field"),e.get(t)),dT=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},uT=(t,e,i,a)=>(Zv(t,e,"write to private field"),e.set(t,i),i),Ps;const cT=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,hT=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`;function mT(t){return`
    <style>
      :host([${h.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${h.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${h.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${h.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${cT}</slot>
      <slot name="exit">${hT}</slot>
    </slot>
  `}function pT(){return`
    <slot name="tooltip-enter">${M("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${M("Exit fullscreen mode")}</slot>
  `}const sm=t=>{const e=t.mediaIsFullscreen?M("exit fullscreen mode"):M("enter fullscreen mode");t.setAttribute("aria-label",e)};class uc extends Pe{constructor(){super(...arguments),dT(this,Ps,null)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_IS_FULLSCREEN,h.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),sm(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_IS_FULLSCREEN&&sm(this)}get mediaFullscreenUnavailable(){return le(this,h.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){ne(this,h.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return j(this,h.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){z(this,h.MEDIA_IS_FULLSCREEN,e)}handleClick(e){uT(this,Ps,e);const i=lT(this,Ps)instanceof PointerEvent,a=this.mediaIsFullscreen?new b.CustomEvent(D.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0}):new b.CustomEvent(D.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0,detail:i});this.dispatchEvent(a)}}Ps=new WeakMap;uc.getSlotTemplateHTML=mT;uc.getTooltipContentHTML=pT;b.customElements.get("media-fullscreen-button")||b.customElements.define("media-fullscreen-button",uc);const{MEDIA_TIME_IS_LIVE:Us,MEDIA_PAUSED:vn}=h,{MEDIA_SEEK_TO_LIVE_REQUEST:vT,MEDIA_PLAY_REQUEST:fT}=D,ET='<svg viewBox="0 0 6 12" aria-hidden="true"><circle cx="3" cy="6" r="2"></circle></svg>';function _T(t){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${Us}]:not([${vn}])) slot[name=indicator] > *,
      :host([${Us}]:not([${vn}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${Us}]:not([${vn}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator">${ET}</slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${M("live")}</slot>
  `}const om=t=>{var e;const i=t.mediaPaused||!t.mediaTimeIsLive,a=M(i?"seek to live":"playing live");t.setAttribute("aria-label",a);const r=(e=t.shadowRoot)==null?void 0:e.querySelector('slot[name="text"]');r&&(r.textContent=M("live")),i?t.removeAttribute("aria-disabled"):t.setAttribute("aria-disabled","true")};class Xv extends Pe{static get observedAttributes(){return[...super.observedAttributes,Us,vn]}connectedCallback(){super.connectedCallback(),om(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),om(this)}get mediaPaused(){return j(this,h.MEDIA_PAUSED)}set mediaPaused(e){z(this,h.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return j(this,h.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){z(this,h.MEDIA_TIME_IS_LIVE,e)}handleClick(){!this.mediaPaused&&this.mediaTimeIsLive||(this.dispatchEvent(new b.CustomEvent(vT,{composed:!0,bubbles:!0})),this.hasAttribute(vn)&&this.dispatchEvent(new b.CustomEvent(fT,{composed:!0,bubbles:!0})))}}Xv.getSlotTemplateHTML=_T;b.customElements.get("media-live-button")||b.customElements.define("media-live-button",Xv);var Jv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Cr=(t,e,i)=>(Jv(t,e,"read from private field"),i?i.call(t):e.get(t)),lm=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Lr=(t,e,i,a)=>(Jv(t,e,"write to private field"),e.set(t,i),i),Ft,$s;const Xn={LOADING_DELAY:"loadingdelay",NO_AUTOHIDE:"noautohide"},ef=500,bT=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;function gT(t){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, ${ef}ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${h.MEDIA_LOADING}]:not([${h.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${h.MEDIA_LOADING}]:not([${h.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${h.MEDIA_LOADING}]:not([${h.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${bT}</slot>
    <div id="status" role="status" aria-live="polite">${M("media loading")}</div>
  `}class cc extends b.HTMLElement{constructor(){if(super(),lm(this,Ft,void 0),lm(this,$s,ef),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=dt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[Z.MEDIA_CONTROLLER,h.MEDIA_PAUSED,h.MEDIA_LOADING,Xn.LOADING_DELAY]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===Xn.LOADING_DELAY&&i!==a?this.loadingDelay=Number(a):e===Z.MEDIA_CONTROLLER&&(i&&((n=(r=Cr(this,Ft))==null?void 0:r.unassociateElement)==null||n.call(r,this),Lr(this,Ft,null)),a&&this.isConnected&&(Lr(this,Ft,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=Cr(this,Ft))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,i,a;const r=this.getAttribute(Z.MEDIA_CONTROLLER);r&&(Lr(this,Ft,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=Cr(this,Ft))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=Cr(this,Ft))==null?void 0:e.unassociateElement)==null||i.call(e,this),Lr(this,Ft,null)}get loadingDelay(){return Cr(this,$s)}set loadingDelay(e){Lr(this,$s,e);const{style:i}=Ce(this.shadowRoot,":host");i.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return j(this,h.MEDIA_PAUSED)}set mediaPaused(e){z(this,h.MEDIA_PAUSED,e)}get mediaLoading(){return j(this,h.MEDIA_LOADING)}set mediaLoading(e){z(this,h.MEDIA_LOADING,e)}get mediaController(){return le(this,Z.MEDIA_CONTROLLER)}set mediaController(e){ne(this,Z.MEDIA_CONTROLLER,e)}get noAutohide(){return j(this,Xn.NO_AUTOHIDE)}set noAutohide(e){z(this,Xn.NO_AUTOHIDE,e)}}Ft=new WeakMap;$s=new WeakMap;cc.shadowRootOptions={mode:"open"};cc.getTemplateHTML=gT;b.customElements.get("media-loading-indicator")||b.customElements.define("media-loading-indicator",cc);const yT=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,dm=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,TT=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`;function AT(t){return`
    <style>
      :host(:not([${h.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${h.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${h.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${h.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${h.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${h.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${h.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${yT}</slot>
      <slot name="low">${dm}</slot>
      <slot name="medium">${dm}</slot>
      <slot name="high">${TT}</slot>
    </slot>
  `}function kT(){return`
    <slot name="tooltip-mute">${M("Mute")}</slot>
    <slot name="tooltip-unmute">${M("Unmute")}</slot>
  `}const um=t=>{const e=t.mediaVolumeLevel==="off",i=M(e?"unmute":"mute");t.setAttribute("aria-label",i)};class hc extends Pe{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),um(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_VOLUME_LEVEL&&um(this)}get mediaVolumeLevel(){return le(this,h.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){ne(this,h.MEDIA_VOLUME_LEVEL,e)}handleClick(){const e=this.mediaVolumeLevel==="off"?D.MEDIA_UNMUTE_REQUEST:D.MEDIA_MUTE_REQUEST;this.dispatchEvent(new b.CustomEvent(e,{composed:!0,bubbles:!0}))}}hc.getSlotTemplateHTML=AT;hc.getTooltipContentHTML=kT;b.customElements.get("media-mute-button")||b.customElements.define("media-mute-button",hc);const cm=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`;function ST(t){return`
    <style>
      :host([${h.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${h.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${h.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${h.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${cm}</slot>
      <slot name="exit">${cm}</slot>
    </slot>
  `}function wT(){return`
    <slot name="tooltip-enter">${M("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${M("Exit picture in picture mode")}</slot>
  `}const hm=t=>{const e=t.mediaIsPip?M("exit picture in picture mode"):M("enter picture in picture mode");t.setAttribute("aria-label",e)};class mc extends Pe{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_IS_PIP,h.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),hm(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_IS_PIP&&hm(this)}get mediaPipUnavailable(){return le(this,h.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){ne(this,h.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return j(this,h.MEDIA_IS_PIP)}set mediaIsPip(e){z(this,h.MEDIA_IS_PIP,e)}handleClick(){const e=this.mediaIsPip?D.MEDIA_EXIT_PIP_REQUEST:D.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new b.CustomEvent(e,{composed:!0,bubbles:!0}))}}mc.getSlotTemplateHTML=ST;mc.getTooltipContentHTML=wT;b.customElements.get("media-pip-button")||b.customElements.define("media-pip-button",mc);var IT=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ga=(t,e,i)=>(IT(t,e,"read from private field"),i?i.call(t):e.get(t)),RT=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ci;const Ul={RATES:"rates"},tf=[1,1.2,1.5,1.7,2],Ja=1;function Vi(t){return Math.round(t*100)/100}function CT(t){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${t.mediaplaybackrate?Vi(+t.mediaplaybackrate):Ja}x</slot>
  `}function LT(){return M("Playback rate")}class pc extends Pe{constructor(){var e;super(),RT(this,Ci,new Zu(this,Ul.RATES,{defaultValue:tf})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${Vi((e=this.mediaPlaybackRate)!=null?e:Ja)}x`}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PLAYBACK_RATE,Ul.RATES]}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),e===Ul.RATES&&(ga(this,Ci).value=a),e===h.MEDIA_PLAYBACK_RATE){const r=a?+a:Number.NaN,n=Vi(Number.isNaN(r)?Ja:r);this.container.innerHTML=`${n}x`,this.setAttribute("aria-label",M("Playback rate {playbackRate}",{playbackRate:n}))}}get rates(){return ga(this,Ci)}set rates(e){e?Array.isArray(e)?ga(this,Ci).value=e.join(" "):typeof e=="string"&&(ga(this,Ci).value=e):ga(this,Ci).value=""}get mediaPlaybackRate(){return re(this,h.MEDIA_PLAYBACK_RATE,Ja)}set mediaPlaybackRate(e){ve(this,h.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,i;const a=Array.from(ga(this,Ci).values(),s=>+s).sort((s,o)=>s-o),r=(i=(e=a.find(s=>s>this.mediaPlaybackRate))!=null?e:a[0])!=null?i:Ja,n=new b.CustomEvent(D.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:r});this.dispatchEvent(n)}}Ci=new WeakMap;pc.getSlotTemplateHTML=CT;pc.getTooltipContentHTML=LT;b.customElements.get("media-playback-rate-button")||b.customElements.define("media-playback-rate-button",pc);const MT=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,DT=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`;function xT(t){return`
    <style>
      :host([${h.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${h.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${h.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${h.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${MT}</slot>
      <slot name="pause">${DT}</slot>
    </slot>
  `}function OT(){return`
    <slot name="tooltip-play">${M("Play")}</slot>
    <slot name="tooltip-pause">${M("Pause")}</slot>
  `}const mm=t=>{const e=t.mediaPaused?M("play"):M("pause");t.setAttribute("aria-label",e)};class vc extends Pe{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PAUSED,h.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),mm(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),(e===h.MEDIA_PAUSED||e===h.MEDIA_LANG)&&mm(this)}get mediaPaused(){return j(this,h.MEDIA_PAUSED)}set mediaPaused(e){z(this,h.MEDIA_PAUSED,e)}handleClick(){const e=this.mediaPaused?D.MEDIA_PLAY_REQUEST:D.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new b.CustomEvent(e,{composed:!0,bubbles:!0}))}}vc.getSlotTemplateHTML=xT;vc.getTooltipContentHTML=OT;b.customElements.get("media-play-button")||b.customElements.define("media-play-button",vc);const xt={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"};function NT(t){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `}const PT=t=>{t.style.removeProperty("background-image")},UT=(t,e)=>{t.style["background-image"]=`url('${e}')`};class fc extends b.HTMLElement{static get observedAttributes(){return[xt.PLACEHOLDER_SRC,xt.SRC]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=dt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,i,a){e===xt.SRC&&(a==null?this.image.removeAttribute(xt.SRC):this.image.setAttribute(xt.SRC,a)),e===xt.PLACEHOLDER_SRC&&(a==null?PT(this.image):UT(this.image,a))}get placeholderSrc(){return le(this,xt.PLACEHOLDER_SRC)}set placeholderSrc(e){ne(this,xt.SRC,e)}get src(){return le(this,xt.SRC)}set src(e){ne(this,xt.SRC,e)}}fc.shadowRootOptions={mode:"open"};fc.getTemplateHTML=NT;b.customElements.get("media-poster-image")||b.customElements.define("media-poster-image",fc);var af=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},$T=(t,e,i)=>(af(t,e,"read from private field"),i?i.call(t):e.get(t)),HT=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},BT=(t,e,i,a)=>(af(t,e,"write to private field"),e.set(t,i),i),Hs;class WT extends qi{constructor(){super(),HT(this,Hs,void 0),BT(this,Hs,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PREVIEW_CHAPTER,h.MEDIA_LANG]}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),(e===h.MEDIA_PREVIEW_CHAPTER||e===h.MEDIA_LANG)&&a!==i&&a!=null)if($T(this,Hs).textContent=a,a!==""){const r=M("chapter: {chapterName}",{chapterName:a});this.setAttribute("aria-valuetext",r)}else this.removeAttribute("aria-valuetext")}get mediaPreviewChapter(){return le(this,h.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){ne(this,h.MEDIA_PREVIEW_CHAPTER,e)}}Hs=new WeakMap;b.customElements.get("media-preview-chapter-display")||b.customElements.define("media-preview-chapter-display",WT);var rf=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Jn=(t,e,i)=>(rf(t,e,"read from private field"),i?i.call(t):e.get(t)),FT=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},es=(t,e,i,a)=>(rf(t,e,"write to private field"),e.set(t,i),i),Kt;function KT(t){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `}class bl extends b.HTMLElement{constructor(){if(super(),FT(this,Kt,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=dt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[Z.MEDIA_CONTROLLER,h.MEDIA_PREVIEW_IMAGE,h.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,i,a;const r=this.getAttribute(Z.MEDIA_CONTROLLER);r&&(es(this,Kt,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=Jn(this,Kt))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=Jn(this,Kt))==null?void 0:e.unassociateElement)==null||i.call(e,this),es(this,Kt,null)}attributeChangedCallback(e,i,a){var r,n,s,o,l;[h.MEDIA_PREVIEW_IMAGE,h.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===Z.MEDIA_CONTROLLER&&(i&&((n=(r=Jn(this,Kt))==null?void 0:r.unassociateElement)==null||n.call(r,this),es(this,Kt,null)),a&&this.isConnected&&(es(this,Kt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=Jn(this,Kt))==null?void 0:o.associateElement)==null||l.call(o,this)))}get mediaPreviewImage(){return le(this,h.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){ne(this,h.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){const e=this.getAttribute(h.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(i=>+i)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(h.MEDIA_PREVIEW_COORDS);return}this.setAttribute(h.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){const e=this.mediaPreviewCoords,i=this.mediaPreviewImage;if(!(e&&i))return;const[a,r,n,s]=e,o=i.split("#")[0],l=getComputedStyle(this),{maxWidth:d,maxHeight:m,minWidth:p,minHeight:c}=l,u=l.getPropertyValue("--media-preview-thumbnail-object-fit").trim()||"contain";let v,g;if(u==="fill"){const C=parseInt(d)/n,S=parseInt(m)/s,P=parseInt(p)/n,q=parseInt(c)/s;v=C<1?C:Math.max(C,P),g=S<1?S:Math.max(S,q)}else{const C=Math.min(parseInt(d)/n,parseInt(m)/s),S=Math.max(parseInt(p)/n,parseInt(c)/s),q=C<1?C:S>1?S:1;v=q,g=q}const{style:_}=Ce(this.shadowRoot,":host"),y=Ce(this.shadowRoot,"img").style,f=this.shadowRoot.querySelector("img"),I=Math.min(v,g)<1?"min":"max";_.setProperty(`${I}-width`,"initial","important"),_.setProperty(`${I}-height`,"initial","important"),_.width=`${n*v}px`,_.height=`${s*g}px`;const k=()=>{y.width=`${this.imgWidth*v}px`,y.height=`${this.imgHeight*g}px`,y.display="block"};f.src!==o&&(f.onload=()=>{this.imgWidth=f.naturalWidth,this.imgHeight=f.naturalHeight,k(),f.onload=null},f.src=o,k()),k(),y.transform=`translate(-${a*v}px, -${r*g}px)`}}Kt=new WeakMap;bl.shadowRootOptions={mode:"open"};bl.getTemplateHTML=KT;b.customElements.get("media-preview-thumbnail")||b.customElements.define("media-preview-thumbnail",bl);var pm=bl,nf=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},vm=(t,e,i)=>(nf(t,e,"read from private field"),i?i.call(t):e.get(t)),VT=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},qT=(t,e,i,a)=>(nf(t,e,"write to private field"),e.set(t,i),i),Zr;class YT extends qi{constructor(){super(),VT(this,Zr,void 0),qT(this,Zr,this.shadowRoot.querySelector("slot")),vm(this,Zr).textContent=Ki(0)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_PREVIEW_TIME&&a!=null&&(vm(this,Zr).textContent=Ki(parseFloat(a)))}get mediaPreviewTime(){return re(this,h.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){ve(this,h.MEDIA_PREVIEW_TIME,e)}}Zr=new WeakMap;b.customElements.get("media-preview-time-display")||b.customElements.define("media-preview-time-display",YT);const ya={SEEK_OFFSET:"seekoffset"},$l=30,GT=t=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${t}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`;function jT(t,e){return`
    <slot name="icon">${GT(e.seekOffset)}</slot>
  `}const zT=(t,e)=>{t.setAttribute("aria-label",M("seek back {seekOffset} seconds",{seekOffset:e}))};function QT(){return M("Seek backward")}const ZT=0;class Ec extends Pe{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_CURRENT_TIME,ya.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=re(this,ya.SEEK_OFFSET,$l)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),zT(this,this.seekOffset),e===ya.SEEK_OFFSET&&(this.seekOffset=re(this,ya.SEEK_OFFSET,$l))}get seekOffset(){return re(this,ya.SEEK_OFFSET,$l)}set seekOffset(e){ve(this,ya.SEEK_OFFSET,e),this.setAttribute("aria-label",M("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),uv(cv(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return re(this,h.MEDIA_CURRENT_TIME,ZT)}set mediaCurrentTime(e){ve(this,h.MEDIA_CURRENT_TIME,e)}handleClick(){const e=Math.max(this.mediaCurrentTime-this.seekOffset,0),i=new b.CustomEvent(D.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}}Ec.getSlotTemplateHTML=jT;Ec.getTooltipContentHTML=QT;b.customElements.get("media-seek-backward-button")||b.customElements.define("media-seek-backward-button",Ec);const Ta={SEEK_OFFSET:"seekoffset"},Hl=30,XT=t=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${t}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`;function JT(t,e){return`
    <slot name="icon">${XT(e.seekOffset)}</slot>
  `}const eA=(t,e)=>{t.setAttribute("aria-label",M("seek forward {seekOffset} seconds",{seekOffset:e}))};function tA(){return M("Seek forward")}const iA=0;class _c extends Pe{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_CURRENT_TIME,Ta.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=re(this,Ta.SEEK_OFFSET,Hl)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),eA(this,this.seekOffset),e===Ta.SEEK_OFFSET&&(this.seekOffset=re(this,Ta.SEEK_OFFSET,Hl))}get seekOffset(){return re(this,Ta.SEEK_OFFSET,Hl)}set seekOffset(e){ve(this,Ta.SEEK_OFFSET,e),this.setAttribute("aria-label",M("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),uv(cv(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return re(this,h.MEDIA_CURRENT_TIME,iA)}set mediaCurrentTime(e){ve(this,h.MEDIA_CURRENT_TIME,e)}handleClick(){const e=this.mediaCurrentTime+this.seekOffset,i=new b.CustomEvent(D.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}}_c.getSlotTemplateHTML=JT;_c.getTooltipContentHTML=tA;b.customElements.get("media-seek-forward-button")||b.customElements.define("media-seek-forward-button",_c);var bc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Lt=(t,e,i)=>(bc(t,e,"read from private field"),i?i.call(t):e.get(t)),Qi=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},gc=(t,e,i,a)=>(bc(t,e,"write to private field"),e.set(t,i),i),Ni=(t,e,i)=>(bc(t,e,"access private method"),i),Na,ei,gl,yc,sf,xo,Tc,Xr,Bs,Ws,xd;const Li={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},fm=[...Object.values(Li),h.MEDIA_CURRENT_TIME,h.MEDIA_DURATION,h.MEDIA_SEEKABLE],of=["Enter"," "],aA="&nbsp;/&nbsp;",Od=(t,{timesSep:e=aA}={})=>{var i,a;const r=(i=t.mediaCurrentTime)!=null?i:0,[,n]=(a=t.mediaSeekable)!=null?a:[];let s=0;Number.isFinite(t.mediaDuration)?s=t.mediaDuration:Number.isFinite(n)&&(s=n);const o=t.remaining?Ki(0-(s-r)):Ki(r);return t.showDuration?`${o}${e}${Ki(s)}`:o},rA=t=>{var e;const i=t.mediaCurrentTime,[,a]=(e=t.mediaSeekable)!=null?e:[];let r=null;if(Number.isFinite(t.mediaDuration)?r=t.mediaDuration:Number.isFinite(a)&&(r=a),i==null||r===null){t.setAttribute("aria-description",M("video not loaded, unknown time."));return}const n=t.remaining?hn(0-(r-i)):hn(i);if(!t.showDuration){t.setAttribute("aria-description",n);return}const s=hn(r),o=M("{currentTime} of {totalTime}",{currentTime:n,totalTime:s});t.setAttribute("aria-description",o)};function nA(t,e){return`
    <slot>${Od(e)}</slot>
  `}const sA=t=>{t.setAttribute("aria-label",M("playback time"))};class lf extends qi{constructor(){super(),Qi(this,yc),Qi(this,xo),Qi(this,Xr),Qi(this,Ws),Qi(this,Na,void 0),Qi(this,ei,null),Qi(this,gl,e=>{const{metaKey:i,altKey:a,key:r}=e;if(i||a||!of.includes(r)){this.removeEventListener("keyup",Lt(this,ei));return}this.addEventListener("keyup",Lt(this,ei))}),gc(this,Na,this.shadowRoot.querySelector("slot")),Lt(this,Na).innerHTML=`${Od(this)}`}static get observedAttributes(){return[...super.observedAttributes,...fm,"disabled"]}connectedCallback(){const{style:e}=Ce(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.setAttribute("aria-label",M("playback time")),Ni(this,Xr,Bs).call(this),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),Ni(this,xo,Tc).call(this),super.disconnectedCallback()}attributeChangedCallback(e,i,a){sA(this),fm.includes(e)?this.update():e==="disabled"&&a!==i?a==null?Ni(this,Xr,Bs).call(this):Ni(this,Ws,xd).call(this):e===Li.NO_TOGGLE&&a!==i&&(this.noToggle?Ni(this,Ws,xd).call(this):Ni(this,Xr,Bs).call(this)),super.attributeChangedCallback(e,i,a)}enable(){this.noToggle||(this.tabIndex=0)}disable(){this.tabIndex=-1}get remaining(){return j(this,Li.REMAINING)}set remaining(e){z(this,Li.REMAINING,e)}get showDuration(){return j(this,Li.SHOW_DURATION)}set showDuration(e){z(this,Li.SHOW_DURATION,e)}get noToggle(){return j(this,Li.NO_TOGGLE)}set noToggle(e){z(this,Li.NO_TOGGLE,e)}get mediaDuration(){return re(this,h.MEDIA_DURATION)}set mediaDuration(e){ve(this,h.MEDIA_DURATION,e)}get mediaCurrentTime(){return re(this,h.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){ve(this,h.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){const e=this.getAttribute(h.MEDIA_SEEKABLE);if(e)return e.split(":").map(i=>+i)}set mediaSeekable(e){if(e==null){this.removeAttribute(h.MEDIA_SEEKABLE);return}this.setAttribute(h.MEDIA_SEEKABLE,e.join(":"))}update(){const e=Od(this);rA(this),e!==Lt(this,Na).innerHTML&&(Lt(this,Na).innerHTML=e)}}Na=new WeakMap;ei=new WeakMap;gl=new WeakMap;yc=new WeakSet;sf=function(){Lt(this,ei)||(gc(this,ei,t=>{const{key:e}=t;if(!of.includes(e)){this.removeEventListener("keyup",Lt(this,ei));return}this.toggleTimeDisplay()}),this.addEventListener("keydown",Lt(this,gl)),this.addEventListener("click",this.toggleTimeDisplay))};xo=new WeakSet;Tc=function(){Lt(this,ei)&&(this.removeEventListener("keyup",Lt(this,ei)),this.removeEventListener("keydown",Lt(this,gl)),this.removeEventListener("click",this.toggleTimeDisplay),gc(this,ei,null))};Xr=new WeakSet;Bs=function(){!this.noToggle&&!this.hasAttribute("disabled")&&(this.setAttribute("role","button"),this.enable(),Ni(this,yc,sf).call(this))};Ws=new WeakSet;xd=function(){this.removeAttribute("role"),this.disable(),Ni(this,xo,Tc).call(this)};lf.getSlotTemplateHTML=nA;b.customElements.get("media-time-display")||b.customElements.define("media-time-display",lf);var df=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},xe=(t,e,i)=>(df(t,e,"read from private field"),e.get(t)),Ot=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},st=(t,e,i,a)=>(df(t,e,"write to private field"),e.set(t,i),i),oA=(t,e,i,a)=>({set _(r){st(t,e,r)},get _(){return xe(t,e)}}),Pa,Fs,Ua,Jr,Ks,Vs,qs,$a,ea,Ys;class lA{constructor(e,i,a){Ot(this,Pa,void 0),Ot(this,Fs,void 0),Ot(this,Ua,void 0),Ot(this,Jr,void 0),Ot(this,Ks,void 0),Ot(this,Vs,void 0),Ot(this,qs,void 0),Ot(this,$a,void 0),Ot(this,ea,0),Ot(this,Ys,(r=performance.now())=>{st(this,ea,requestAnimationFrame(xe(this,Ys))),st(this,Jr,performance.now()-xe(this,Ua));const n=1e3/this.fps;if(xe(this,Jr)>n){st(this,Ua,r-xe(this,Jr)%n);const s=1e3/((r-xe(this,Fs))/++oA(this,Ks)._),o=(r-xe(this,Vs))/1e3/this.duration;let l=xe(this,qs)+o*this.playbackRate;l-xe(this,Pa).valueAsNumber>0?st(this,$a,this.playbackRate/this.duration/s):(st(this,$a,.995*xe(this,$a)),l=xe(this,Pa).valueAsNumber+xe(this,$a)),this.callback(l)}}),st(this,Pa,e),this.callback=i,this.fps=a}start(){xe(this,ea)===0&&(st(this,Ua,performance.now()),st(this,Fs,xe(this,Ua)),st(this,Ks,0),xe(this,Ys).call(this))}stop(){xe(this,ea)!==0&&(cancelAnimationFrame(xe(this,ea)),st(this,ea,0))}update({start:e,duration:i,playbackRate:a}){const r=e-xe(this,Pa).valueAsNumber,n=Math.abs(i-this.duration);(r>0||r<-.5/i||n>=.5)&&this.callback(e),st(this,qs,e),st(this,Vs,performance.now()),this.duration=i,this.playbackRate=a}}Pa=new WeakMap;Fs=new WeakMap;Ua=new WeakMap;Jr=new WeakMap;Ks=new WeakMap;Vs=new WeakMap;qs=new WeakMap;$a=new WeakMap;ea=new WeakMap;Ys=new WeakMap;var Ac=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ce=(t,e,i)=>(Ac(t,e,"read from private field"),i?i.call(t):e.get(t)),Ie=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ht=(t,e,i,a)=>(Ac(t,e,"write to private field"),e.set(t,i),i),vt=(t,e,i)=>(Ac(t,e,"access private method"),i),Ha,Pi,Oo,fn,No,Gs,Dn,xn,Ba,Wa,en,Nd,uf,Pd,Po,kc,Uo,Sc,$o,wc,Ud,cf,On,Ho,$d,hf;const dA=t=>{const e=t.range,i=hn(+mf(t)),a=hn(+t.mediaSeekableEnd),r=i&&a?M("{currentTime} of {totalTime}",{currentTime:i,totalTime:a}):M("video not loaded, unknown time.");e.setAttribute("aria-valuetext",r)};function uA(t){return`
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${h.MEDIA_PREVIEW_IMAGE}], [${h.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${h.MEDIA_PREVIEW_IMAGE}], [${h.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${h.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${h.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${h.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${h.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${h.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${h.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${h.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${h.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${h.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${h.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${h.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${h.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${pm.shadowRootOptions.mode}">
            ${pm.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `}const ts=(t,e=t.mediaCurrentTime)=>{const i=Number.isFinite(t.mediaSeekableStart)?t.mediaSeekableStart:0,a=Number.isFinite(t.mediaDuration)?t.mediaDuration:t.mediaSeekableEnd;if(Number.isNaN(a))return 0;const r=(e-i)/(a-i);return Math.max(0,Math.min(r,1))},mf=(t,e=t.range.valueAsNumber)=>{const i=Number.isFinite(t.mediaSeekableStart)?t.mediaSeekableStart:0,a=Number.isFinite(t.mediaDuration)?t.mediaDuration:t.mediaSeekableEnd;return Number.isNaN(a)?0:e*(a-i)+i};class Ic extends yr{constructor(){super(),Ie(this,Nd),Ie(this,Po),Ie(this,Uo),Ie(this,$o),Ie(this,Ud),Ie(this,On),Ie(this,$d),Ie(this,Ha,null),Ie(this,Pi,void 0),Ie(this,Oo,void 0),Ie(this,fn,void 0),Ie(this,No,void 0),Ie(this,Gs,void 0),Ie(this,Dn,void 0),Ie(this,xn,void 0),Ie(this,Ba,void 0),Ie(this,Wa,void 0),Ie(this,en,()=>{vt(this,Nd,uf).call(this)?ce(this,Pi).start():ce(this,Pi).stop()}),Ie(this,Pd,a=>{this.dragging||(Fu(a)&&(this.range.valueAsNumber=a),ce(this,Wa)||this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),ht(this,Oo,this.shadowRoot.querySelectorAll('[part~="box"]')),ht(this,No,this.shadowRoot.querySelector('[part~="preview-box"]')),ht(this,Gs,this.shadowRoot.querySelector('[part~="current-box"]'));const i=getComputedStyle(this);ht(this,Dn,parseInt(i.getPropertyValue("--media-box-padding-left"))),ht(this,xn,parseInt(i.getPropertyValue("--media-box-padding-right"))),ht(this,Pi,new lA(this.range,ce(this,Pd),60))}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PAUSED,h.MEDIA_DURATION,h.MEDIA_SEEKABLE,h.MEDIA_CURRENT_TIME,h.MEDIA_PREVIEW_IMAGE,h.MEDIA_PREVIEW_TIME,h.MEDIA_PREVIEW_CHAPTER,h.MEDIA_BUFFERED,h.MEDIA_PLAYBACK_RATE,h.MEDIA_LOADING,h.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",M("seek")),ce(this,en).call(this),ht(this,Ha,this.getRootNode()),(e=ce(this,Ha))==null||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),ce(this,Pi).stop(),(e=ce(this,Ha))==null||e.removeEventListener("transitionstart",this),ht(this,Ha,null)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),i!=a&&(e===h.MEDIA_CURRENT_TIME||e===h.MEDIA_PAUSED||e===h.MEDIA_ENDED||e===h.MEDIA_LOADING||e===h.MEDIA_DURATION||e===h.MEDIA_SEEKABLE?(ce(this,Pi).update({start:ts(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),ce(this,en).call(this),dA(this)):e===h.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===h.MEDIA_DURATION||e===h.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=ce(this,Ba),this.updateBar()))}get mediaChaptersCues(){return ce(this,Ba)}set mediaChaptersCues(e){var i;ht(this,Ba,e),this.updateSegments((i=ce(this,Ba))==null?void 0:i.map(a=>({start:ts(this,a.startTime),end:ts(this,a.endTime)})))}get mediaPaused(){return j(this,h.MEDIA_PAUSED)}set mediaPaused(e){z(this,h.MEDIA_PAUSED,e)}get mediaLoading(){return j(this,h.MEDIA_LOADING)}set mediaLoading(e){z(this,h.MEDIA_LOADING,e)}get mediaDuration(){return re(this,h.MEDIA_DURATION)}set mediaDuration(e){ve(this,h.MEDIA_DURATION,e)}get mediaCurrentTime(){return re(this,h.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){ve(this,h.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return re(this,h.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){ve(this,h.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){const e=this.getAttribute(h.MEDIA_BUFFERED);return e?e.split(" ").map(i=>i.split(":").map(a=>+a)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(h.MEDIA_BUFFERED);return}const i=e.map(a=>a.join(":")).join(" ");this.setAttribute(h.MEDIA_BUFFERED,i)}get mediaSeekable(){const e=this.getAttribute(h.MEDIA_SEEKABLE);if(e)return e.split(":").map(i=>+i)}set mediaSeekable(e){if(e==null){this.removeAttribute(h.MEDIA_SEEKABLE);return}this.setAttribute(h.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;const[,i=this.mediaDuration]=(e=this.mediaSeekable)!=null?e:[];return i}get mediaSeekableStart(){var e;const[i=0]=(e=this.mediaSeekable)!=null?e:[];return i}get mediaPreviewImage(){return le(this,h.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){ne(this,h.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return re(this,h.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){ve(this,h.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return j(this,h.MEDIA_ENDED)}set mediaEnded(e){z(this,h.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;const i=this.mediaBuffered;if(!i.length)return;let a;if(this.mediaEnded)a=1;else{const n=this.mediaCurrentTime,[,s=this.mediaSeekableStart]=(e=i.find(([o,l])=>o<=n&&n<=l))!=null?e:[];a=ts(this,s)}const{style:r}=Ce(this.shadowRoot,"#buffered");r.setProperty("width",`${a*100}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;const i=Ce(this.shadowRoot,"#current-rail"),a=Ce(this.shadowRoot,'[part~="current-box"]'),r=vt(this,Po,kc).call(this,ce(this,Gs)),n=vt(this,Uo,Sc).call(this,r,this.range.valueAsNumber),s=vt(this,$o,wc).call(this,r,this.range.valueAsNumber);i.style.transform=`translateX(${n})`,i.style.setProperty("--_range-width",`${r.range.width}`),a.style.setProperty("--_box-shift",`${s}`),a.style.setProperty("--_box-width",`${r.box.width}px`),a.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":vt(this,$d,hf).call(this);break;case"pointermove":vt(this,Ud,cf).call(this,e);break;case"pointerup":ce(this,Wa)&&ht(this,Wa,!1);break;case"pointerdown":ht(this,Wa,!0);break;case"pointerleave":vt(this,On,Ho).call(this,null);break;case"transitionstart":gi(e.target,this)&&setTimeout(()=>ce(this,en).call(this),0);break}}}Ha=new WeakMap;Pi=new WeakMap;Oo=new WeakMap;fn=new WeakMap;No=new WeakMap;Gs=new WeakMap;Dn=new WeakMap;xn=new WeakMap;Ba=new WeakMap;Wa=new WeakMap;en=new WeakMap;Nd=new WeakSet;uf=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&hv(this)};Pd=new WeakMap;Po=new WeakSet;kc=function(t){var e;const a=((e=this.getAttribute("bounds")?br(this,`#${this.getAttribute("bounds")}`):this.parentElement)!=null?e:this).getBoundingClientRect(),r=this.range.getBoundingClientRect(),n=t.offsetWidth,s=-(r.left-a.left-n/2),o=a.right-r.left-n/2;return{box:{width:n,min:s,max:o},bounds:a,range:r}};Uo=new WeakSet;Sc=function(t,e){let i=`${e*100}%`;const{width:a,min:r,max:n}=t.box;if(!a)return i;if(Number.isNaN(r)||(i=`max(${`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`}, ${i})`),!Number.isNaN(n)){const o=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${o})`}return i};$o=new WeakSet;wc=function(t,e){const{width:i,min:a,max:r}=t.box,n=e*t.range.width;if(n<a+ce(this,Dn)){const s=t.range.left-t.bounds.left-ce(this,Dn);return`${n-i/2+s}px`}if(n>r-ce(this,xn)){const s=t.bounds.right-t.range.right-ce(this,xn);return`${n+i/2-s-t.range.width}px`}return 0};Ud=new WeakSet;cf=function(t){const e=[...ce(this,Oo)].some(m=>t.composedPath().includes(m));if(!this.dragging&&(e||!t.composedPath().includes(this))){vt(this,On,Ho).call(this,null);return}const i=this.mediaSeekableEnd;if(!i)return;const a=Ce(this.shadowRoot,"#preview-rail"),r=Ce(this.shadowRoot,'[part~="preview-box"]'),n=vt(this,Po,kc).call(this,ce(this,No));let s=(t.clientX-n.range.left)/n.range.width;s=Math.max(0,Math.min(1,s));const o=vt(this,Uo,Sc).call(this,n,s),l=vt(this,$o,wc).call(this,n,s);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${n.box.width}px`);const d=Math.round(ce(this,fn))-Math.round(s*i);Math.abs(d)<1&&s>.01&&s<.99||(ht(this,fn,s*i),vt(this,On,Ho).call(this,ce(this,fn)))};On=new WeakSet;Ho=function(t){this.dispatchEvent(new b.CustomEvent(D.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:t}))};$d=new WeakSet;hf=function(){ce(this,Pi).stop();const t=mf(this);this.dispatchEvent(new b.CustomEvent(D.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:t}))};Ic.shadowRootOptions={mode:"open"};Ic.getContainerTemplateHTML=uA;b.customElements.get("media-time-range")||b.customElements.define("media-time-range",Ic);var cA=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Em=(t,e,i)=>(cA(t,e,"read from private field"),i?i.call(t):e.get(t)),hA=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},js;const mA=1,pA=t=>t.mediaMuted?0:t.mediaVolume,vA=t=>`${Math.round(t*100)}%`;class fA extends yr{constructor(){super(...arguments),hA(this,js,()=>{const e=this.range.value,i=new b.CustomEvent(D.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)})}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_VOLUME,h.MEDIA_MUTED,h.MEDIA_VOLUME_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",M("volume")),this.range.addEventListener("input",Em(this,js))}disconnectedCallback(){this.range.removeEventListener("input",Em(this,js)),super.disconnectedCallback()}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),(e===h.MEDIA_VOLUME||e===h.MEDIA_MUTED)&&(this.range.valueAsNumber=pA(this),this.range.setAttribute("aria-valuetext",vA(this.range.valueAsNumber)),this.updateBar())}get mediaVolume(){return re(this,h.MEDIA_VOLUME,mA)}set mediaVolume(e){ve(this,h.MEDIA_VOLUME,e)}get mediaMuted(){return j(this,h.MEDIA_MUTED)}set mediaMuted(e){z(this,h.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return le(this,h.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){ne(this,h.MEDIA_VOLUME_UNAVAILABLE,e)}}js=new WeakMap;b.customElements.get("media-volume-range")||b.customElements.define("media-volume-range",fA);function EA(t){return`
      <style>
        :host {
          min-width: 4ch;
          padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1rem;
          font-weight: var(--media-button-font-weight, normal);
        }

        #checked-indicator {
          display: none;
        }

        :host([${h.MEDIA_LOOP}]) #checked-indicator {
          display: block;
        }
      </style>
      
      <span id="icon">
     </span>

      <div id="checked-indicator">
        <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
          <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
        </svg>
      </div>
    `}function _A(){return M("Loop")}class Rc extends Pe{constructor(){super(...arguments),this.container=null}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_LOOP]}connectedCallback(){var e;super.connectedCallback(),this.container=((e=this.shadowRoot)==null?void 0:e.querySelector("#icon"))||null,this.container&&(this.container.textContent=M("Loop"))}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_LOOP&&this.container&&this.setAttribute("aria-checked",this.mediaLoop?"true":"false")}get mediaLoop(){return j(this,h.MEDIA_LOOP)}set mediaLoop(e){z(this,h.MEDIA_LOOP,e)}handleClick(){const e=!this.mediaLoop,i=new b.CustomEvent(D.MEDIA_LOOP_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}}Rc.getSlotTemplateHTML=EA;Rc.getTooltipContentHTML=_A;b.customElements.get("media-loop-button")||b.customElements.define("media-loop-button",Rc);var pf=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},K=(t,e,i)=>(pf(t,e,"read from private field"),i?i.call(t):e.get(t)),zt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},vi=(t,e,i,a)=>(pf(t,e,"write to private field"),e.set(t,i),i),Fa,zs,ta,tn,Mi,Di,xi,ia,Ka,Qs,St;const _m=1,bm=0,bA=1,gA={processCallback(t,e,i){if(i){for(const[a,r]of e)if(a in i){const n=i[a];typeof n=="boolean"&&r instanceof Dt&&typeof r.element[r.attributeName]=="boolean"?r.booleanValue=n:typeof n=="function"&&r instanceof Dt?r.element[r.attributeName]=n:r.value=n}}}};class yl extends b.DocumentFragment{constructor(e,i,a=gA){var r;super(),zt(this,Fa,void 0),zt(this,zs,void 0),this.append(e.content.cloneNode(!0)),vi(this,Fa,vf(this)),vi(this,zs,a),(r=a.createCallback)==null||r.call(a,this,K(this,Fa),i),a.processCallback(this,K(this,Fa),i)}update(e){K(this,zs).processCallback(this,K(this,Fa),e)}}Fa=new WeakMap;zs=new WeakMap;const vf=(t,e=[])=>{let i,a;for(const r of t.attributes||[])if(r.value.includes("{{")){const n=new TA;for([i,a]of ym(r.value))if(!i)n.append(a);else{const s=new Dt(t,r.name,r.namespaceURI);n.append(s),e.push([a,s])}r.value=n.toString()}for(const r of t.childNodes)if(r.nodeType===_m&&!(r instanceof HTMLTemplateElement))vf(r,e);else{const n=r.data;if(r.nodeType===_m||n.includes("{{")){const s=[];if(n)for([i,a]of ym(n))if(!i)s.push(new Text(a));else{const o=new Tr(t);s.push(o),e.push([a,o])}else if(r instanceof HTMLTemplateElement){const o=new _f(t,r);s.push(o),e.push([o.expression,o])}r.replaceWith(...s.flatMap(o=>o.replacementNodes||[o]))}}return e},gm={},ym=t=>{let e="",i=0,a=gm[t],r=0,n;if(a)return a;for(a=[];n=t[r];r++)n==="{"&&t[r+1]==="{"&&t[r-1]!=="\\"&&t[r+2]&&++i==1?(e&&a.push([bm,e]),e="",r++):n==="}"&&t[r+1]==="}"&&t[r-1]!=="\\"&&!--i?(a.push([bA,e.trim()]),e="",r++):e+=n||"";return e&&a.push([bm,(i>0?"{{":"")+e]),gm[t]=a},yA=11;class ff{get value(){return""}set value(e){}toString(){return this.value}}const Ef=new WeakMap;class TA{constructor(){zt(this,ta,[])}[Symbol.iterator](){return K(this,ta).values()}get length(){return K(this,ta).length}item(e){return K(this,ta)[e]}append(...e){for(const i of e)i instanceof Dt&&Ef.set(i,this),K(this,ta).push(i)}toString(){return K(this,ta).join("")}}ta=new WeakMap;class Dt extends ff{constructor(e,i,a){super(),zt(this,ia),zt(this,tn,""),zt(this,Mi,void 0),zt(this,Di,void 0),zt(this,xi,void 0),vi(this,Mi,e),vi(this,Di,i),vi(this,xi,a)}get attributeName(){return K(this,Di)}get attributeNamespace(){return K(this,xi)}get element(){return K(this,Mi)}get value(){return K(this,tn)}set value(e){K(this,tn)!==e&&(vi(this,tn,e),!K(this,ia,Ka)||K(this,ia,Ka).length===1?e==null?K(this,Mi).removeAttributeNS(K(this,xi),K(this,Di)):K(this,Mi).setAttributeNS(K(this,xi),K(this,Di),e):K(this,Mi).setAttributeNS(K(this,xi),K(this,Di),K(this,ia,Ka).toString()))}get booleanValue(){return K(this,Mi).hasAttributeNS(K(this,xi),K(this,Di))}set booleanValue(e){if(!K(this,ia,Ka)||K(this,ia,Ka).length===1)this.value=e?"":null;else throw new DOMException("Value is not fully templatized")}}tn=new WeakMap;Mi=new WeakMap;Di=new WeakMap;xi=new WeakMap;ia=new WeakSet;Ka=function(){return Ef.get(this)};class Tr extends ff{constructor(e,i){super(),zt(this,Qs,void 0),zt(this,St,void 0),vi(this,Qs,e),vi(this,St,i?[...i]:[new Text])}get replacementNodes(){return K(this,St)}get parentNode(){return K(this,Qs)}get nextSibling(){return K(this,St)[K(this,St).length-1].nextSibling}get previousSibling(){return K(this,St)[0].previousSibling}get value(){return K(this,St).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){const i=e.flat().flatMap(a=>a==null?[new Text]:a.forEach?[...a]:a.nodeType===yA?[...a.childNodes]:a.nodeType?[a]:[new Text(a)]);i.length||i.push(new Text),vi(this,St,AA(K(this,St)[0].parentNode,K(this,St),i,this.nextSibling))}}Qs=new WeakMap;St=new WeakMap;class _f extends Tr{constructor(e,i){const a=i.getAttribute("directive")||i.getAttribute("type");let r=i.getAttribute("expression")||i.getAttribute(a)||"";r.startsWith("{{")&&(r=r.trim().slice(2,-2).trim()),super(e),this.expression=r,this.template=i,this.directive=a}}function AA(t,e,i,a=null){let r=0,n,s,o,l=i.length,d=e.length;for(;r<l&&r<d&&e[r]==i[r];)r++;for(;r<l&&r<d&&i[l-1]==e[d-1];)a=i[--d,--l];if(r==d)for(;r<l;)t.insertBefore(i[r++],a);if(r==l)for(;r<d;)t.removeChild(e[r++]);else{for(n=e[r];r<l;)o=i[r++],s=n?n.nextSibling:a,n==o?n=s:r<l&&i[r]==s?(t.replaceChild(o,n),n=s):t.insertBefore(o,n);for(;n!=a;)s=n.nextSibling,t.removeChild(n),n=s}return i}const Tm={string:t=>String(t)};class bf{constructor(e){this.template=e,this.state=void 0}}const la=new WeakMap,da=new WeakMap,Hd={partial:(t,e)=>{e[t.expression]=new bf(t.template)},if:(t,e)=>{var i;if(gf(t.expression,e))if(la.get(t)!==t.template){la.set(t,t.template);const a=new yl(t.template,e,Cc);t.replace(a),da.set(t,a)}else(i=da.get(t))==null||i.update(e);else t.replace(""),la.delete(t),da.delete(t)}},kA=Object.keys(Hd),Cc={processCallback(t,e,i){var a,r;if(i)for(const[n,s]of e){if(s instanceof _f){if(!s.directive){const l=kA.find(d=>s.template.hasAttribute(d));l&&(s.directive=l,s.expression=s.template.getAttribute(l))}(a=Hd[s.directive])==null||a.call(Hd,s,i);continue}let o=gf(n,i);if(o instanceof bf){la.get(s)!==o.template?(la.set(s,o.template),o=new yl(o.template,o.state,Cc),s.value=o,da.set(s,o)):(r=da.get(s))==null||r.update(o.state);continue}o?(s instanceof Dt&&s.attributeName.startsWith("aria-")&&(o=String(o)),s instanceof Dt?typeof o=="boolean"?s.booleanValue=o:typeof o=="function"?s.element[s.attributeName]=o:s.value=o:(s.value=o,la.delete(s),da.delete(s))):s instanceof Dt?s.value=void 0:(s.value=void 0,la.delete(s),da.delete(s))}}},Am={"!":t=>!t,"!!":t=>!!t,"==":(t,e)=>t==e,"!=":(t,e)=>t!=e,">":(t,e)=>t>e,">=":(t,e)=>t>=e,"<":(t,e)=>t<e,"<=":(t,e)=>t<=e,"??":(t,e)=>t??e,"|":(t,e)=>{var i;return(i=Tm[e])==null?void 0:i.call(Tm,t)}};function SA(t){return wA(t,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>e!=="ws")}function gf(t,e={}){var i,a,r,n,s,o,l;const d=SA(t);if(d.length===0||d.some(({type:m})=>!m))return Mr(t);if(((i=d[0])==null?void 0:i.token)===">"){const m=e[(a=d[1])==null?void 0:a.token];if(!m)return Mr(t);const p={...e};m.state=p;const c=d.slice(2);for(let u=0;u<c.length;u+=3){const v=(r=c[u])==null?void 0:r.token,g=(n=c[u+1])==null?void 0:n.token,_=(s=c[u+2])==null?void 0:s.token;v&&g==="="&&(p[v]=Dr(_,e))}return m}if(d.length===1)return is(d[0])?Dr(d[0].token,e):Mr(t);if(d.length===2){const m=(o=d[0])==null?void 0:o.token,p=Am[m];if(!p||!is(d[1]))return Mr(t);const c=Dr(d[1].token,e);return p(c)}if(d.length===3){const m=(l=d[1])==null?void 0:l.token,p=Am[m];if(!p||!is(d[0])||!is(d[2]))return Mr(t);const c=Dr(d[0].token,e);if(m==="|")return p(c,d[2].token);const u=Dr(d[2].token,e);return p(c,u)}}function Mr(t){return console.warn(`Warning: invalid expression \`${t}\``),!1}function is({type:t}){return["number","boolean","string","param"].includes(t)}function Dr(t,e){const i=t[0],a=t.slice(-1);return t==="true"||t==="false"?t==="true":i===a&&["'",'"'].includes(i)?t.slice(1,-1):iv(t)?parseFloat(t):e[t]}function wA(t,e){let i,a,r;const n=[];for(;t;){r=null,i=t.length;for(const s in e)a=e[s].exec(t),a&&a.index<i&&(r={token:a[0],type:s,matches:a.slice(1)},i=a.index);i&&n.push({token:t.substr(0,i),type:void 0}),r&&n.push(r),t=t.substr(i+(r?r.token.length:0))}return n}var Lc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Oi=(t,e,i)=>(Lc(t,e,"read from private field"),i?i.call(t):e.get(t)),Zi=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},pi=(t,e,i,a)=>(Lc(t,e,"write to private field"),e.set(t,i),i),Bl=(t,e,i)=>(Lc(t,e,"access private method"),i),nr,Zs,sr,Va,Bd,yf,Xs,Wd,an;const Wl={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},Tf=ke.createElement("template");Tf.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class Tl extends b.HTMLElement{constructor(){super(),Zi(this,Bd),Zi(this,Xs),Zi(this,nr,void 0),Zi(this,Zs,void 0),Zi(this,sr,void 0),Zi(this,Va,void 0),Zi(this,an,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer()),pi(this,Va,new MutationObserver(e=>{var i;this.mediaController&&!((i=this.mediaController)!=null&&i.breakpointsComputed)||e.some(a=>{const r=a.target;return r===this?!0:r.localName!=="media-controller"?!1:!!(Wl[a.attributeName]||a.attributeName.startsWith("breakpoint"))})&&this.render()})),pi(this,an,this.render.bind(this)),Bl(this,Bd,yf).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return(e=Oi(this,nr))!=null?e:this.constructor.template}set template(e){if(e===null){this.removeAttribute("template");return}typeof e=="string"?this.setAttribute("template",e):e instanceof HTMLTemplateElement&&(pi(this,nr,e),pi(this,sr,null),this.createRenderer())}get props(){var e,i,a;const r=[...Array.from((i=(e=this.mediaController)==null?void 0:e.attributes)!=null?i:[]).filter(({name:s})=>Wl[s]||s.startsWith("breakpoint")),...Array.from(this.attributes)],n={};for(const s of r){const o=(a=Wl[s.name])!=null?a:Iy(s.name);let{value:l}=s;l!=null?(iv(l)&&(l=parseFloat(l)),n[o]=l===""?!0:l):n[o]=!1}return n}attributeChangedCallback(e,i,a){e==="template"&&i!=a&&Bl(this,Xs,Wd).call(this)}connectedCallback(){this.addEventListener(ti.BREAKPOINTS_COMPUTED,Oi(this,an)),Oi(this,Va).observe(this,{attributes:!0}),Oi(this,Va).observe(this.renderRoot,{attributes:!0,subtree:!0}),Bl(this,Xs,Wd).call(this)}disconnectedCallback(){this.removeEventListener(ti.BREAKPOINTS_COMPUTED,Oi(this,an)),Oi(this,Va).disconnect()}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==Oi(this,Zs)&&(pi(this,Zs,this.template),this.renderer=new yl(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(Tf.content.cloneNode(!0),this.renderer))}render(){var e;(e=this.renderer)==null||e.update(this.props)}}nr=new WeakMap;Zs=new WeakMap;sr=new WeakMap;Va=new WeakMap;Bd=new WeakSet;yf=function(t){if(Object.prototype.hasOwnProperty.call(this,t)){const e=this[t];delete this[t],this[t]=e}};Xs=new WeakSet;Wd=function(){var t;const e=this.getAttribute("template");if(!e||e===Oi(this,sr))return;const i=this.getRootNode(),a=(t=i?.getElementById)==null?void 0:t.call(i,e);if(a){pi(this,sr,e),pi(this,nr,a),this.createRenderer();return}IA(e)&&(pi(this,sr,e),RA(e).then(r=>{const n=ke.createElement("template");n.innerHTML=r,pi(this,nr,n),this.createRenderer()}).catch(console.error))};an=new WeakMap;Tl.observedAttributes=["template"];Tl.processor=Cc;function IA(t){if(!/^(\/|\.\/|https?:\/\/)/.test(t))return!1;const e=/^https?:\/\//.test(t)?void 0:location.origin;try{new URL(t,e)}catch{return!1}return!0}async function RA(t){const e=await fetch(t);if(e.status!==200)throw new Error(`Failed to load resource: the server responded with a status of ${e.status}`);return e.text()}b.customElements.get("media-theme")||b.customElements.define("media-theme",Tl);function CA({anchor:t,floating:e,placement:i}){const a=LA({anchor:t,floating:e}),{x:r,y:n}=DA(a,i);return{x:r,y:n}}function LA({anchor:t,floating:e}){return{anchor:MA(t,e.offsetParent),floating:{x:0,y:0,width:e.offsetWidth,height:e.offsetHeight}}}function MA(t,e){var i;const a=t.getBoundingClientRect(),r=(i=e?.getBoundingClientRect())!=null?i:{x:0,y:0};return{x:a.x-r.x,y:a.y-r.y,width:a.width,height:a.height}}function DA({anchor:t,floating:e},i){const a=xA(i)==="x"?"y":"x",r=a==="y"?"height":"width",n=Af(i),s=t.x+t.width/2-e.width/2,o=t.y+t.height/2-e.height/2,l=t[r]/2-e[r]/2;let d;switch(n){case"top":d={x:s,y:t.y-e.height};break;case"bottom":d={x:s,y:t.y+t.height};break;case"right":d={x:t.x+t.width,y:o};break;case"left":d={x:t.x-e.width,y:o};break;default:d={x:t.x,y:t.y}}switch(i.split("-")[1]){case"start":d[a]-=l;break;case"end":d[a]+=l;break}return d}function Af(t){return t.split("-")[0]}function xA(t){return["top","bottom"].includes(Af(t))?"y":"x"}class Mc extends Event{constructor({action:e="auto",relatedTarget:i,...a}){super("invoke",a),this.action=e,this.relatedTarget=i}}class OA extends Event{constructor({newState:e,oldState:i,...a}){super("toggle",a),this.newState=e,this.oldState=i}}var Dc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Q=(t,e,i)=>(Dc(t,e,"read from private field"),i?i.call(t):e.get(t)),ie=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},mt=(t,e,i,a)=>(Dc(t,e,"write to private field"),e.set(t,i),i),ae=(t,e,i)=>(Dc(t,e,"access private method"),i),Vt,Bi,_i,Js,rn,ma,Nn,Fd,kf,Bo,xc,Wo,eo,Kd,Vd,Sf,qd,wf,Yd,If,or,lr,dr,Pn,Fo,Oc,Gd,Rf,Nc,Cf,jd,Lf,Pc,Mf,zd,Df,Qd,xf,En,Ko,Zd,Of,_n,Vo,to,Xd;function Er({type:t,text:e,value:i,checked:a}){const r=ke.createElement("media-chrome-menu-item");r.type=t,r.part.add("menu-item"),r.part.add(t),r.value=i,r.checked=a;const n=ke.createElement("span");return n.textContent=e,r.append(n),r}function pa(t,e){let i=t.querySelector(`:scope > [slot="${e}"]`);if(i?.nodeName=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i=i.cloneNode(!0),i;const a=t.shadowRoot.querySelector(`[name="${e}"] > svg`);return a?a.cloneNode(!0):""}function NA(t){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex) !important;
        
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container" part="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `}const Xi={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"};class ft extends b.HTMLElement{constructor(){if(super(),ie(this,Fd),ie(this,Bo),ie(this,eo),ie(this,Vd),ie(this,qd),ie(this,Yd),ie(this,dr),ie(this,Fo),ie(this,Gd),ie(this,Nc),ie(this,jd),ie(this,Pc),ie(this,zd),ie(this,Qd),ie(this,En),ie(this,Zd),ie(this,_n),ie(this,to),ie(this,Vt,null),ie(this,Bi,null),ie(this,_i,null),ie(this,Js,new Set),ie(this,rn,void 0),ie(this,ma,!1),ie(this,Nn,null),ie(this,Wo,()=>{const e=Q(this,Js),i=new Set(this.items);for(const a of e)i.has(a)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:a}));for(const a of i)e.has(a)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:a}));mt(this,Js,i)}),ie(this,or,()=>{ae(this,dr,Pn).call(this),ae(this,Fo,Oc).call(this,!1)}),ie(this,lr,()=>{ae(this,dr,Pn).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=dt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),mt(this,rn,new MutationObserver(Q(this,Wo)))}static get observedAttributes(){return[Xi.DISABLED,Xi.HIDDEN,Xi.STYLE,Xi.ANCHOR,Z.MEDIA_CONTROLLER]}static formatMenuItemText(e,i){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":ae(this,Fd,kf).call(this,e);break;case"invoke":ae(this,Vd,Sf).call(this,e);break;case"click":ae(this,Gd,Rf).call(this,e);break;case"toggle":ae(this,jd,Lf).call(this,e);break;case"focusout":ae(this,zd,Df).call(this,e);break;case"keydown":ae(this,Qd,xf).call(this,e);break}}connectedCallback(){var e,i;Q(this,rn).observe(this.defaultSlot,{childList:!0}),mt(this,Nn,qu(this.shadowRoot,":host")),ae(this,eo,Kd).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),mt(this,Vt,ud(this)),(i=(e=Q(this,Vt))==null?void 0:e.associateElement)==null||i.call(e,this),this.hidden||(mr(Un(this),Q(this,or)),mr(this,Q(this,lr))),ae(this,Bo,xc).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){var e,i;Q(this,rn).disconnect(),pr(Un(this),Q(this,or)),pr(this,Q(this,lr)),this.disable(),(i=(e=Q(this,Vt))==null?void 0:e.unassociateElement)==null||i.call(e,this),mt(this,Vt,null),mt(this,Bi,null),mt(this,_i,null),this.shadowRoot.removeEventListener("slotchange",this)}attributeChangedCallback(e,i,a){var r,n,s,o;e===Xi.HIDDEN&&a!==i?(Q(this,ma)||mt(this,ma,!0),this.hidden?ae(this,Yd,If).call(this):ae(this,qd,wf).call(this),this.dispatchEvent(new OA({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===Z.MEDIA_CONTROLLER?(i&&((n=(r=Q(this,Vt))==null?void 0:r.unassociateElement)==null||n.call(r,this),mt(this,Vt,null)),a&&this.isConnected&&(mt(this,Vt,ud(this)),(o=(s=Q(this,Vt))==null?void 0:s.associateElement)==null||o.call(s,this))):e===Xi.DISABLED&&a!==i?a==null?this.enable():this.disable():e===Xi.STYLE&&a!==i&&ae(this,eo,Kd).call(this)}formatMenuItemText(e,i){return this.constructor.formatMenuItemText(e,i)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?(e=dl(this))==null?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(PA)}get radioGroupItems(){return this.items.filter(e=>e.role==="menuitemradio")}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,i;return(i=(e=this.checkedItems[0])==null?void 0:e.value)!=null?i:""}set value(e){const i=this.items.find(a=>a.value===e);i&&ae(this,to,Xd).call(this,i)}focus(){if(mt(this,Bi,Vu()),this.items.length){ae(this,_n,Vo).call(this,this.items[0]),this.items[0].focus();return}const e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');e?.focus()}handleSelect(e){var i;const a=ae(this,En,Ko).call(this,e);a&&(ae(this,to,Xd).call(this,a,a.type==="checkbox"),Q(this,_i)&&!this.hidden&&((i=Q(this,Bi))==null||i.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var i,a;const{key:r}=e,n=this.items,s=(a=(i=ae(this,En,Ko).call(this,e))!=null?i:ae(this,Zd,Of).call(this))!=null?a:n[0],o=n.indexOf(s);let l=Math.max(0,o);r==="ArrowDown"?l++:r==="ArrowUp"?l--:e.key==="Home"?l=0:e.key==="End"&&(l=n.length-1),l<0&&(l=n.length-1),l>n.length-1&&(l=0),ae(this,_n,Vo).call(this,n[l]),n[l].focus()}}Vt=new WeakMap;Bi=new WeakMap;_i=new WeakMap;Js=new WeakMap;rn=new WeakMap;ma=new WeakMap;Nn=new WeakMap;Fd=new WeakSet;kf=function(t){const e=t.target;for(const i of e.assignedNodes({flatten:!0}))i.nodeType===3&&i.textContent.trim()===""&&i.remove();["header","title"].includes(e.name)&&ae(this,Bo,xc).call(this),e.name||Q(this,Wo).call(this)};Bo=new WeakSet;xc=function(){const t=this.shadowRoot.querySelector('slot[name="header"]'),e=this.shadowRoot.querySelector('slot[name="title"]');t.hidden=e.assignedNodes().length===0&&t.assignedNodes().length===0};Wo=new WeakMap;eo=new WeakSet;Kd=function(){var t;const e=this.shadowRoot.querySelector("#layout-row"),i=(t=getComputedStyle(this).getPropertyValue("--media-menu-layout"))==null?void 0:t.trim();e.setAttribute("media",i==="row"?"":"width:0")};Vd=new WeakSet;Sf=function(t){mt(this,_i,t.relatedTarget),gi(this,t.relatedTarget)||(this.hidden=!this.hidden)};qd=new WeakSet;wf=function(){var t;(t=Q(this,_i))==null||t.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),mr(Un(this),Q(this,or)),mr(this,Q(this,lr))};Yd=new WeakSet;If=function(){var t;(t=Q(this,_i))==null||t.setAttribute("aria-expanded","false"),pr(Un(this),Q(this,or)),pr(this,Q(this,lr))};or=new WeakMap;lr=new WeakMap;dr=new WeakSet;Pn=function(t){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;const{x:e,y:i}=CA({anchor:this.anchorElement,floating:this,placement:"top-start"});t??(t=this.offsetWidth);const r=Un(this).getBoundingClientRect(),n=r.width-e-t,s=r.height-i-this.offsetHeight,{style:o}=Q(this,Nn);o.setProperty("position","absolute"),o.setProperty("right",`${Math.max(0,n)}px`),o.setProperty("--_menu-bottom",`${s}px`);const l=getComputedStyle(this),m=o.getPropertyValue("--_menu-bottom")===l.bottom?s:parseFloat(l.bottom),p=r.height-m-parseFloat(l.marginBottom);this.style.setProperty("--_menu-max-height",`${p}px`)};Fo=new WeakSet;Oc=function(t){const e=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=e?.querySelector('[role="menu"]'),{style:a}=Q(this,Nn);if(t||a.setProperty("--media-menu-transition-in","none"),i){const r=i.offsetHeight,n=Math.max(i.offsetWidth,e.offsetWidth);this.style.setProperty("min-width",`${n}px`),this.style.setProperty("min-height",`${r}px`),ae(this,dr,Pn).call(this,n)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),ae(this,dr,Pn).call(this);a.removeProperty("--media-menu-transition-in")};Gd=new WeakSet;Rf=function(t){var e;if(t.stopPropagation(),t.composedPath().includes(Q(this,Nc,Cf))){(e=Q(this,Bi))==null||e.focus(),this.hidden=!0;return}const i=ae(this,En,Ko).call(this,t);!i||i.hasAttribute("disabled")||(ae(this,_n,Vo).call(this,i),this.handleSelect(t))};Nc=new WeakSet;Cf=function(){var t;return(t=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))==null?void 0:t.find(i=>i.matches('button[part~="back"]'))};jd=new WeakSet;Lf=function(t){if(t.target===this)return;ae(this,Pc,Mf).call(this);const e=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(const i of e)i.invokeTargetElement!=t.target&&t.newState=="open"&&i.getAttribute("aria-expanded")=="true"&&!i.invokeTargetElement.hidden&&i.invokeTargetElement.dispatchEvent(new Mc({relatedTarget:i}));for(const i of e)i.setAttribute("aria-expanded",`${!i.submenuElement.hidden}`);ae(this,Fo,Oc).call(this,!0)};Pc=new WeakSet;Mf=function(){const e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)};zd=new WeakSet;Df=function(t){var e;gi(this,t.relatedTarget)||(Q(this,ma)&&((e=Q(this,Bi))==null||e.focus()),Q(this,_i)&&Q(this,_i)!==t.relatedTarget&&!this.hidden&&(this.hidden=!0))};Qd=new WeakSet;xf=function(t){var e,i,a,r,n;const{key:s,ctrlKey:o,altKey:l,metaKey:d}=t;if(!(o||l||d)&&this.keysUsed.includes(s))if(t.preventDefault(),t.stopPropagation(),s==="Tab"){if(Q(this,ma)){this.hidden=!0;return}t.shiftKey?(i=(e=this.previousElementSibling)==null?void 0:e.focus)==null||i.call(e):(r=(a=this.nextElementSibling)==null?void 0:a.focus)==null||r.call(a),this.blur()}else s==="Escape"?((n=Q(this,Bi))==null||n.focus(),Q(this,ma)&&(this.hidden=!0)):s==="Enter"||s===" "?this.handleSelect(t):this.handleMove(t)};En=new WeakSet;Ko=function(t){return t.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))};Zd=new WeakSet;Of=function(){return this.items.find(t=>t.tabIndex===0)};_n=new WeakSet;Vo=function(t){for(const e of this.items)e.tabIndex=e===t?0:-1};to=new WeakSet;Xd=function(t,e){const i=[...this.checkedItems];t.type==="radio"&&this.radioGroupItems.forEach(a=>a.checked=!1),e?t.checked=!t.checked:t.checked=!0,this.checkedItems.some((a,r)=>a!=i[r])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))};ft.shadowRootOptions={mode:"open"};ft.getTemplateHTML=NA;function PA(t){return["menuitem","menuitemradio","menuitemcheckbox"].includes(t?.role)}function Un(t){var e;return(e=t.getAttribute("bounds")?br(t,`#${t.getAttribute("bounds")}`):Ze(t)||t.parentElement)!=null?e:t}b.customElements.get("media-chrome-menu")||b.customElements.define("media-chrome-menu",ft);var Uc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},qe=(t,e,i)=>(Uc(t,e,"read from private field"),i?i.call(t):e.get(t)),si=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Fl=(t,e,i,a)=>(Uc(t,e,"write to private field"),e.set(t,i),i),er=(t,e,i)=>(Uc(t,e,"access private method"),i),io,bn,Jd,Nf,qo,$c,Hc,Pf,Xt,qa,eu,ao,tu;function UA(t){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(t)}
    </slot>
    <slot name="submenu"></slot>
  `}function $A(t){return""}const ct={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"};class Yi extends b.HTMLElement{constructor(){if(super(),si(this,Jd),si(this,qo),si(this,Hc),si(this,ao),si(this,io,!1),si(this,bn,void 0),si(this,Xt,()=>{var e,i;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);const a=this.shadowRoot.querySelector('slot[name="description"]'),r=(e=this.submenuElement.checkedItems)==null?void 0:e[0],n=(i=r?.dataset.description)!=null?i:r?.text,s=ke.createElement("span");s.textContent=n??"",a.replaceChildren(s)}),si(this,qa,e=>{const{key:i}=e;if(!this.keysUsed.includes(i)){this.removeEventListener("keyup",qe(this,qa));return}this.handleClick(e)}),si(this,eu,e=>{const{metaKey:i,altKey:a,key:r}=e;if(i||a||!this.keysUsed.includes(r)){this.removeEventListener("keyup",qe(this,qa));return}this.addEventListener("keyup",qe(this,qa),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=dt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[ct.TYPE,ct.DISABLED,ct.CHECKED,ct.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),xr(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":er(this,Jd,Nf).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":qe(this,eu).call(this,e);break;case"keyup":qe(this,qa).call(this,e);break}}attributeChangedCallback(e,i,a){e===ct.CHECKED&&xr(this)&&!qe(this,io)?this.setAttribute("aria-checked",a!=null?"true":"false"):e===ct.TYPE&&a!==i?this.role="menuitem"+a:e===ct.DISABLED&&a!==i&&(a==null?this.enable():this.disable())}connectedCallback(){this.hasAttribute(ct.DISABLED)||this.enable(),this.role="menuitem"+this.type,Fl(this,bn,iu(this,this.parentNode)),er(this,ao,tu).call(this),this.submenuElement&&er(this,qo,$c).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){this.disable(),er(this,ao,tu).call(this),Fl(this,bn,null),this.shadowRoot.removeEventListener("slotchange",this)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?(e=dl(this))==null?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return(e=this.getAttribute(ct.TYPE))!=null?e:""}set type(e){this.setAttribute(ct.TYPE,`${e}`)}get value(){var e;return(e=this.getAttribute(ct.VALUE))!=null?e:this.text}set value(e){this.setAttribute(ct.VALUE,e)}get text(){var e;return((e=this.textContent)!=null?e:"").trim()}get checked(){if(xr(this))return this.getAttribute("aria-checked")==="true"}set checked(e){xr(this)&&(Fl(this,io,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){xr(this)||this.invokeTargetElement&&gi(this,e.target)&&this.invokeTargetElement.dispatchEvent(new Mc({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}io=new WeakMap;bn=new WeakMap;Jd=new WeakSet;Nf=function(t){const e=t.target;if(!e?.name)for(const a of e.assignedNodes({flatten:!0}))a instanceof Text&&a.textContent.trim()===""&&a.remove();e.name==="submenu"&&(this.submenuElement?er(this,qo,$c).call(this):er(this,Hc,Pf).call(this))};qo=new WeakSet;$c=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",qe(this,Xt)),this.submenuElement.addEventListener("addmenuitem",qe(this,Xt)),this.submenuElement.addEventListener("removemenuitem",qe(this,Xt)),qe(this,Xt).call(this)};Hc=new WeakSet;Pf=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",qe(this,Xt)),this.submenuElement.removeEventListener("addmenuitem",qe(this,Xt)),this.submenuElement.removeEventListener("removemenuitem",qe(this,Xt)),qe(this,Xt).call(this)};Xt=new WeakMap;qa=new WeakMap;eu=new WeakMap;ao=new WeakSet;tu=function(){var t;const e=(t=qe(this,bn))==null?void 0:t.radioGroupItems;if(!e)return;let i=e.filter(a=>a.getAttribute("aria-checked")==="true").pop();i||(i=e[0]);for(const a of e)a.setAttribute("aria-checked","false");i?.setAttribute("aria-checked","true")};Yi.shadowRootOptions={mode:"open"};Yi.getTemplateHTML=UA;Yi.getSuffixSlotInnerHTML=$A;function xr(t){return t.type==="radio"||t.type==="checkbox"}function iu(t,e){if(!t)return null;const{host:i}=t.getRootNode();return!e&&i?iu(t,i):e?.items?e:iu(e,e?.parentNode)}b.customElements.get("media-chrome-menu-item")||b.customElements.define("media-chrome-menu-item",Yi);function HA(t){return`
    ${ft.getTemplateHTML(t)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `}class Uf extends ft{get anchorElement(){return this.anchor!=="auto"?super.anchorElement:Ze(this).querySelector("media-settings-menu-button")}}Uf.getTemplateHTML=HA;b.customElements.get("media-settings-menu")||b.customElements.define("media-settings-menu",Uf);function BA(t){return`
    ${Yi.getTemplateHTML.call(this,t)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `}function WA(t){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `}class Al extends Yi{}Al.shadowRootOptions={mode:"open"};Al.getTemplateHTML=BA;Al.getSuffixSlotInnerHTML=WA;b.customElements.get("media-settings-menu-item")||b.customElements.define("media-settings-menu-item",Al);class Ar extends Pe{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?(e=dl(this))==null?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;(e=this.invokeTargetElement)==null||e.dispatchEvent(new Mc({relatedTarget:this}))}}b.customElements.get("media-chrome-menu-button")||b.customElements.define("media-chrome-menu-button",Ar);function FA(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `}function KA(){return M("Settings")}class Bc extends Ar{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",M("settings"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:Ze(this).querySelector("media-settings-menu")}}Bc.getSlotTemplateHTML=FA;Bc.getTooltipContentHTML=KA;b.customElements.get("media-settings-menu-button")||b.customElements.define("media-settings-menu-button",Bc);var Wc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},$f=(t,e,i)=>(Wc(t,e,"read from private field"),i?i.call(t):e.get(t)),as=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},au=(t,e,i,a)=>(Wc(t,e,"write to private field"),e.set(t,i),i),rs=(t,e,i)=>(Wc(t,e,"access private method"),i),nn,Yo,ro,ru,no,nu;class VA extends ft{constructor(){super(...arguments),as(this,ro),as(this,no),as(this,nn,[]),as(this,Yo,void 0)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_AUDIO_TRACK_LIST,h.MEDIA_AUDIO_TRACK_ENABLED,h.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_AUDIO_TRACK_ENABLED&&i!==a?this.value=a:e===h.MEDIA_AUDIO_TRACK_LIST&&i!==a&&(au(this,nn,ky(a??"")),rs(this,ro,ru).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",rs(this,no,nu))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",rs(this,no,nu))}get anchorElement(){var e;return this.anchor!=="auto"?super.anchorElement:(e=Ze(this))==null?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return $f(this,nn)}set mediaAudioTrackList(e){au(this,nn,e),rs(this,ro,ru).call(this)}get mediaAudioTrackEnabled(){var e;return(e=le(this,h.MEDIA_AUDIO_TRACK_ENABLED))!=null?e:""}set mediaAudioTrackEnabled(e){ne(this,h.MEDIA_AUDIO_TRACK_ENABLED,e)}}nn=new WeakMap;Yo=new WeakMap;ro=new WeakSet;ru=function(){if($f(this,Yo)===JSON.stringify(this.mediaAudioTrackList))return;au(this,Yo,JSON.stringify(this.mediaAudioTrackList));const t=this.mediaAudioTrackList;this.defaultSlot.textContent="",t.sort((e,i)=>e.id.localeCompare(i.id,void 0,{numeric:!0}));for(const e of t){const i=this.formatMenuItemText(e.label,e),a=Er({type:"radio",text:i,value:`${e.id}`,checked:e.enabled});a.prepend(pa(this,"checked-indicator")),this.defaultSlot.append(a)}};no=new WeakSet;nu=function(){if(this.value==null)return;const t=new b.CustomEvent(D.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(t)};b.customElements.get("media-audio-track-menu")||b.customElements.define("media-audio-track-menu",VA);const qA=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`;function YA(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${qA}</slot>
  `}function GA(){return M("Audio")}const km=t=>{const e=M("Audio");t.setAttribute("aria-label",e)};class Fc extends Ar{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_AUDIO_TRACK_ENABLED,h.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),km(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_LANG&&km(this)}get invokeTargetElement(){var e;return this.invokeTarget!=null?super.invokeTargetElement:(e=Ze(this))==null?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return(e=le(this,h.MEDIA_AUDIO_TRACK_ENABLED))!=null?e:""}set mediaAudioTrackEnabled(e){ne(this,h.MEDIA_AUDIO_TRACK_ENABLED,e)}}Fc.getSlotTemplateHTML=YA;Fc.getTooltipContentHTML=GA;b.customElements.get("media-audio-track-menu-button")||b.customElements.define("media-audio-track-menu-button",Fc);var Kc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},jA=(t,e,i)=>(Kc(t,e,"read from private field"),e.get(t)),Kl=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},zA=(t,e,i,a)=>(Kc(t,e,"write to private field"),e.set(t,i),i),ns=(t,e,i)=>(Kc(t,e,"access private method"),i),Go,so,su,oo,ou;const QA=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;function ZA(t){return`
    ${ft.getTemplateHTML(t)}
    <slot name="captions-indicator" hidden>${QA}</slot>
  `}class Hf extends ft{constructor(){super(...arguments),Kl(this,so),Kl(this,oo),Kl(this,Go,void 0)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_SUBTITLES_LIST,h.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_SUBTITLES_LIST&&i!==a?ns(this,so,su).call(this):e===h.MEDIA_SUBTITLES_SHOWING&&i!==a&&(this.value=a||"",ns(this,so,su).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",ns(this,oo,ou))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",ns(this,oo,ou))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:Ze(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return Sm(this,h.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){wm(this,h.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return Sm(this,h.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){wm(this,h.MEDIA_SUBTITLES_SHOWING,e)}}Go=new WeakMap;so=new WeakSet;su=function(){var t;const e=jA(this,Go)!==JSON.stringify(this.mediaSubtitlesList),i=this.value!==this.getAttribute(h.MEDIA_SUBTITLES_SHOWING);if(!e&&!i)return;zA(this,Go,JSON.stringify(this.mediaSubtitlesList)),this.defaultSlot.textContent="";const a=!this.value,r=Er({type:"radio",text:this.formatMenuItemText(M("Off")),value:"off",checked:a});r.prepend(pa(this,"checked-indicator")),this.defaultSlot.append(r);const n=this.mediaSubtitlesList;for(const s of n){const o=Er({type:"radio",text:this.formatMenuItemText(s.label,s),value:gd(s),checked:this.value==gd(s)});o.prepend(pa(this,"checked-indicator")),((t=s.kind)!=null?t:"subs")==="captions"&&o.append(pa(this,"captions-indicator")),this.defaultSlot.append(o)}};oo=new WeakSet;ou=function(){const t=this.mediaSubtitlesShowing,e=this.getAttribute(h.MEDIA_SUBTITLES_SHOWING),i=this.value!==e;if(t?.length&&i&&this.dispatchEvent(new b.CustomEvent(D.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:t})),!this.value||!i)return;const a=new b.CustomEvent(D.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)};Hf.getTemplateHTML=ZA;const Sm=(t,e)=>{const i=t.getAttribute(e);return i?pl(i):[]},wm=(t,e,i)=>{if(!i?.length){t.removeAttribute(e);return}const a=Mn(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};b.customElements.get("media-captions-menu")||b.customElements.define("media-captions-menu",Hf);const XA=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,JA=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function ek(){return`
    <style>
      :host([data-captions-enabled="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([data-captions-enabled="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${XA}</slot>
      <slot name="off">${JA}</slot>
    </slot>
  `}function tk(){return M("Captions")}const Im=t=>{t.setAttribute("data-captions-enabled",Rv(t).toString())},Rm=t=>{t.setAttribute("aria-label",M("closed captions"))};class Vc extends Ar{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_SUBTITLES_LIST,h.MEDIA_SUBTITLES_SHOWING,h.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),Rm(this),Im(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_SUBTITLES_SHOWING?Im(this):e===h.MEDIA_LANG&&Rm(this)}get invokeTargetElement(){var e;return this.invokeTarget!=null?super.invokeTargetElement:(e=Ze(this))==null?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return Cm(this,h.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){Lm(this,h.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return Cm(this,h.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){Lm(this,h.MEDIA_SUBTITLES_SHOWING,e)}}Vc.getSlotTemplateHTML=ek;Vc.getTooltipContentHTML=tk;const Cm=(t,e)=>{const i=t.getAttribute(e);return i?pl(i):[]},Lm=(t,e,i)=>{if(!i?.length){t.removeAttribute(e);return}const a=Mn(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};b.customElements.get("media-captions-menu-button")||b.customElements.define("media-captions-menu-button",Vc);var Bf=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ya=(t,e,i)=>(Bf(t,e,"read from private field"),i?i.call(t):e.get(t)),Vl=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Aa=(t,e,i)=>(Bf(t,e,"access private method"),i),Ui,Ga,sn,lo,lu;const ql={RATES:"rates"};class ik extends ft{constructor(){super(),Vl(this,Ga),Vl(this,lo),Vl(this,Ui,new Zu(this,ql.RATES,{defaultValue:tf})),Aa(this,Ga,sn).call(this)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PLAYBACK_RATE,ql.RATES]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_PLAYBACK_RATE&&i!=a?(this.value=a,Aa(this,Ga,sn).call(this)):e===ql.RATES&&i!=a&&(Ya(this,Ui).value=a,Aa(this,Ga,sn).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Aa(this,lo,lu))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Aa(this,lo,lu))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:Ze(this).querySelector("media-playback-rate-menu-button")}get rates(){return Ya(this,Ui)}set rates(e){e?Array.isArray(e)?Ya(this,Ui).value=e.join(" "):typeof e=="string"&&(Ya(this,Ui).value=e):Ya(this,Ui).value="",Aa(this,Ga,sn).call(this)}get mediaPlaybackRate(){return re(this,h.MEDIA_PLAYBACK_RATE,Ja)}set mediaPlaybackRate(e){ve(this,h.MEDIA_PLAYBACK_RATE,e)}}Ui=new WeakMap;Ga=new WeakSet;sn=function(){this.defaultSlot.textContent="";const t=Vi(this.mediaPlaybackRate),e=new Set(Array.from(Ya(this,Ui)).map(a=>Vi(Number(a))));t>0&&!e.has(t)&&e.add(t);const i=Array.from(e).sort((a,r)=>a-r);for(const a of i){const r=Er({type:"radio",text:this.formatMenuItemText(`${a}x`,a),value:a.toString(),checked:t===a});r.prepend(pa(this,"checked-indicator")),this.defaultSlot.append(r)}};lo=new WeakSet;lu=function(){if(!this.value)return;const t=new b.CustomEvent(D.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(t)};b.customElements.get("media-playback-rate-menu")||b.customElements.define("media-playback-rate-menu",ik);const uo=1;function ak(t){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }

      :host([aria-expanded="true"]) slot {
        display: block;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${t.mediaplaybackrate?Vi(+t.mediaplaybackrate):uo}x</slot>
  `}function rk(){return M("Playback rate")}class qc extends Ar{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PLAYBACK_RATE]}constructor(){var e;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${Vi((e=this.mediaPlaybackRate)!=null?e:uo)}x`}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),e===h.MEDIA_PLAYBACK_RATE){const r=a?+a:Number.NaN,n=Vi(Number.isNaN(r)?uo:r);this.container.innerHTML=`${n}x`,this.setAttribute("aria-label",M("Playback rate {playbackRate}",{playbackRate:n}))}}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:Ze(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return re(this,h.MEDIA_PLAYBACK_RATE,uo)}set mediaPlaybackRate(e){ve(this,h.MEDIA_PLAYBACK_RATE,e)}}qc.getSlotTemplateHTML=ak;qc.getTooltipContentHTML=rk;b.customElements.get("media-playback-rate-menu-button")||b.customElements.define("media-playback-rate-menu-button",qc);var Yc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},li=(t,e,i)=>(Yc(t,e,"read from private field"),i?i.call(t):e.get(t)),ss=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Mm=(t,e,i,a)=>(Yc(t,e,"write to private field"),e.set(t,i),i),ka=(t,e,i)=>(Yc(t,e,"access private method"),i),on,Yt,ja,ln,co,du;class nk extends ft{constructor(){super(...arguments),ss(this,ja),ss(this,co),ss(this,on,[]),ss(this,Yt,{})}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_RENDITION_LIST,h.MEDIA_RENDITION_SELECTED,h.MEDIA_RENDITION_UNAVAILABLE,h.MEDIA_HEIGHT,h.MEDIA_WIDTH]}static formatMenuItemText(e,i){return super.formatMenuItemText(e,i)}static formatRendition(e,{showBitrate:i=!1}={}){const a=`${Math.min(e.width,e.height)}p`;if(i&&e.bitrate){const r=e.bitrate/1e6,n=`${r.toFixed(r<1?1:0)} Mbps`;return`${a} (${n})`}return this.formatMenuItemText(a,e)}static compareRendition(e,i){var a,r;return i.height===e.height?((a=i.bitrate)!=null?a:0)-((r=e.bitrate)!=null?r:0):i.height-e.height}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),i!==a)switch(e){case h.MEDIA_RENDITION_SELECTED:this.value=a??"auto",ka(this,ja,ln).call(this);break;case h.MEDIA_RENDITION_LIST:Mm(this,on,gy(a)),ka(this,ja,ln).call(this);break;case h.MEDIA_HEIGHT:case h.MEDIA_WIDTH:ka(this,ja,ln).call(this);break}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",ka(this,co,du))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",ka(this,co,du))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:Ze(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return li(this,on)}set mediaRenditionList(e){Mm(this,on,e),ka(this,ja,ln).call(this)}get mediaRenditionSelected(){return le(this,h.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){ne(this,h.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return re(this,h.MEDIA_HEIGHT)}set mediaHeight(e){ve(this,h.MEDIA_HEIGHT,e)}get mediaWidth(){return re(this,h.MEDIA_WIDTH)}set mediaWidth(e){ve(this,h.MEDIA_WIDTH,e)}compareRendition(e,i){return this.constructor.compareRendition(e,i)}formatMenuItemText(e,i){return this.constructor.formatMenuItemText(e,i)}formatRendition(e,i){return this.constructor.formatRendition(e,i)}showRenditionBitrate(e){return this.mediaRenditionList.some(i=>i!==e&&i.height===e.height&&i.bitrate!==e.bitrate)}}on=new WeakMap;Yt=new WeakMap;ja=new WeakSet;ln=function(){const t=!this.mediaRenditionSelected;if(li(this,Yt).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&li(this,Yt).mediaHeight===this.mediaHeight&&li(this,Yt).mediaWidth===this.mediaWidth&&li(this,Yt).isAuto===t)return;li(this,Yt).mediaRenditionList=JSON.stringify(this.mediaRenditionList),li(this,Yt).mediaHeight=this.mediaHeight,li(this,Yt).mediaWidth=this.mediaWidth,li(this,Yt).isAuto=t;const e=this.mediaRenditionList.sort(this.compareRendition.bind(this)),i=e.find(s=>s.id===this.mediaRenditionSelected);for(const s of e)s.selected=s===i;this.defaultSlot.textContent="";for(const s of e){const o=this.formatRendition(s,{showBitrate:this.showRenditionBitrate(s)}),l=Er({type:"radio",text:o,value:`${s.id}`,checked:s.selected&&!t});l.prepend(pa(this,"checked-indicator")),this.defaultSlot.append(l)}const a=i&&this.showRenditionBitrate(i);let r;t&&(i?r=this.formatMenuItemText(`${M("Auto")} • ${this.formatRendition(i,{showBitrate:a})}`,i):this.mediaHeight>0&&this.mediaWidth>0&&(r=this.formatMenuItemText(`${M("Auto")} (${Math.min(this.mediaWidth,this.mediaHeight)}p)`))),r||(r=this.formatMenuItemText(M("Auto")));const n=Er({type:"radio",text:r,value:"auto",checked:t});n.dataset.description=r,n.prepend(pa(this,"checked-indicator")),this.defaultSlot.append(n)};co=new WeakSet;du=function(){if(this.value==null)return;const t=new b.CustomEvent(D.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(t)};b.customElements.get("media-rendition-menu")||b.customElements.define("media-rendition-menu",nk);const sk=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;function ok(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${sk}</slot>
  `}function lk(){return M("Quality")}class Gc extends Ar{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_RENDITION_SELECTED,h.MEDIA_RENDITION_UNAVAILABLE,h.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",M("quality"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:Ze(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return le(this,h.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){ne(this,h.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return re(this,h.MEDIA_HEIGHT)}set mediaHeight(e){ve(this,h.MEDIA_HEIGHT,e)}}Gc.getSlotTemplateHTML=ok;Gc.getTooltipContentHTML=lk;b.customElements.get("media-rendition-menu-button")||b.customElements.define("media-rendition-menu-button",Gc);var jc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},jt=(t,e,i)=>(jc(t,e,"read from private field"),i?i.call(t):e.get(t)),Nt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Wf=(t,e,i,a)=>(jc(t,e,"write to private field"),e.set(t,i),i),pt=(t,e,i)=>(jc(t,e,"access private method"),i),_r,$n,kl,sa,tr,zc,Ff,ho,uu,mo,cu,Kf,jo,zo,po;function dk(t){return`
      ${ft.getTemplateHTML(t)}
      <style>
        :host {
          --_menu-bg: rgb(20 20 30 / .8);
          background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
          min-width: var(--media-settings-menu-min-width, 170px);
          border-radius: 2px;
          overflow: hidden;
        }
      </style>
    `}class Vf extends ft{constructor(){super(),Nt(this,$n),Nt(this,sa),Nt(this,zc),Nt(this,ho),Nt(this,cu),Nt(this,_r,!1),Nt(this,mo,e=>{const i=e.target,a=i?.nodeName==="VIDEO",r=pt(this,ho,uu).call(this,i);(a||r)&&(jt(this,_r)?pt(this,sa,tr).call(this):pt(this,cu,Kf).call(this,e))}),Nt(this,jo,e=>{const i=e.target,a=this.contains(i),r=e.button===2,n=i?.nodeName==="VIDEO",s=pt(this,ho,uu).call(this,i);a||r&&(n||s)||pt(this,sa,tr).call(this)}),Nt(this,zo,e=>{e.key==="Escape"&&pt(this,sa,tr).call(this)}),Nt(this,po,e=>{var i,a;const r=e.target;if((i=r.matches)!=null&&i.call(r,'button[invoke="copy"]')){const n=(a=r.closest("media-context-menu-item"))==null?void 0:a.querySelector('input[slot="copy"]');n&&navigator.clipboard.writeText(n.value)}pt(this,sa,tr).call(this)}),this.setAttribute("noautohide",""),pt(this,$n,kl).call(this)}connectedCallback(){super.connectedCallback(),Ze(this).addEventListener("contextmenu",jt(this,mo)),this.addEventListener("click",jt(this,po))}disconnectedCallback(){super.disconnectedCallback(),Ze(this).removeEventListener("contextmenu",jt(this,mo)),this.removeEventListener("click",jt(this,po)),document.removeEventListener("mousedown",jt(this,jo)),document.removeEventListener("keydown",jt(this,zo))}}_r=new WeakMap;$n=new WeakSet;kl=function(){this.hidden=!jt(this,_r)};sa=new WeakSet;tr=function(){Wf(this,_r,!1),pt(this,$n,kl).call(this)};zc=new WeakSet;Ff=function(){document.querySelectorAll("media-context-menu").forEach(e=>{var i;e!==this&&pt(i=e,sa,tr).call(i)})};ho=new WeakSet;uu=function(t){return t?t.hasAttribute("slot")&&t.getAttribute("slot")==="media"?!0:t.nodeName.includes("-")&&t.tagName.includes("-")?t.hasAttribute("src")||t.hasAttribute("poster")||t.hasAttribute("preload")||t.hasAttribute("playsinline"):!1:!1};mo=new WeakMap;cu=new WeakSet;Kf=function(t){t.preventDefault(),pt(this,zc,Ff).call(this),Wf(this,_r,!0),this.style.position="fixed",this.style.left=`${t.clientX}px`,this.style.top=`${t.clientY}px`,pt(this,$n,kl).call(this),document.addEventListener("mousedown",jt(this,jo),{once:!0}),document.addEventListener("keydown",jt(this,zo),{once:!0})};jo=new WeakMap;zo=new WeakMap;po=new WeakMap;Vf.getTemplateHTML=dk;b.customElements.get("media-context-menu")||b.customElements.define("media-context-menu",Vf);function uk(t){return`
    ${Yi.getTemplateHTML.call(this,t)}
    <style>
        ::slotted(*) {
            color: var(--media-text-color, white);
            text-decoration: none;
            border: none;
            background: none;
            cursor: pointer;
            padding: 0;
            min-height: var(--media-control-height, 24px);
        }
    </style>
  `}class Qc extends Yi{}Qc.shadowRootOptions={mode:"open"};Qc.getTemplateHTML=uk;b.customElements.get("media-context-menu-item")||b.customElements.define("media-context-menu-item",Qc);var qf=t=>{throw TypeError(t)},Zc=(t,e,i)=>e.has(t)||qf("Cannot "+i),H=(t,e,i)=>(Zc(t,e,"read from private field"),i?i.call(t):e.get(t)),Ae=(t,e,i)=>e.has(t)?qf("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),ze=(t,e,i,a)=>(Zc(t,e,"write to private field"),e.set(t,i),i),be=(t,e,i)=>(Zc(t,e,"access private method"),i),Sl=class{addEventListener(){}removeEventListener(){}dispatchEvent(t){return!0}};if(typeof DocumentFragment>"u"){class t extends Sl{}globalThis.DocumentFragment=t}var Xc=class extends Sl{},ck=class extends Sl{},hk={get(t){},define(t,e,i){},getName(t){return null},upgrade(t){},whenDefined(t){return Promise.resolve(Xc)}},vo,mk=class{constructor(t,e={}){Ae(this,vo),ze(this,vo,e?.detail)}get detail(){return H(this,vo)}initCustomEvent(){}};vo=new WeakMap;function pk(t,e){return new Xc}var Yf={document:{createElement:pk},DocumentFragment,customElements:hk,CustomEvent:mk,EventTarget:Sl,HTMLElement:Xc,HTMLVideoElement:ck},Gf=typeof window>"u"||typeof globalThis.customElements>"u",Qt=Gf?Yf:globalThis,Qo=Gf?Yf.document:globalThis.document;function Sa(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function vk(t){let e="";return Object.entries(t).forEach(([i,a])=>{a!=null&&(e+=`${hu(i)}: ${a}; `)}),e?e.trim():void 0}function hu(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function jf(t){return t.replace(/[-_]([a-z])/g,(e,i)=>i.toUpperCase())}function Fe(t){if(t==null)return;let e=+t;return Number.isNaN(e)?void 0:e}function zf(t){let e=fk(t).toString();return e?"?"+e:""}function fk(t){let e={};for(let i in t)t[i]!=null&&(e[i]=t[i]);return new URLSearchParams(e)}var Qf=(t,e)=>!t||!e?!1:t.contains(e)?!0:Qf(t,e.getRootNode().host),Zf="mux.com",Ek=()=>{try{return"3.14.1"}catch{}return"UNKNOWN"},_k=Ek(),Xf=()=>_k,bk=(t,{token:e,customDomain:i=Zf,thumbnailTime:a,programTime:r}={})=>{var n;let s=e==null?a:void 0,{aud:o}=(n=ir(e))!=null?n:{};if(!(e&&o!=="t"))return`https://image.${i}/${t}/thumbnail.webp${zf({token:e,time:s,program_time:r})}`},gk=(t,{token:e,customDomain:i=Zf,programStartTime:a,programEndTime:r}={})=>{var n;let{aud:s}=(n=ir(e))!=null?n:{};if(!(e&&s!=="s"))return`https://image.${i}/${t}/storyboard.vtt${zf({token:e,format:"webp",program_start_time:a,program_end_time:r})}`},Jc=t=>{if(t){if([J.LIVE,J.ON_DEMAND].includes(t))return t;if(t!=null&&t.includes("live"))return J.LIVE}},yk={crossorigin:"crossOrigin",playsinline:"playsInline"};function Tk(t){var e;return(e=yk[t])!=null?e:jf(t)}var za,Qa,Ye,Ak=class{constructor(e,i){Ae(this,za),Ae(this,Qa),Ae(this,Ye,[]),ze(this,za,e),ze(this,Qa,i)}[Symbol.iterator](){return H(this,Ye).values()}get length(){return H(this,Ye).length}get value(){var e;return(e=H(this,Ye).join(" "))!=null?e:""}set value(e){var i;e!==this.value&&(ze(this,Ye,[]),this.add(...(i=e?.split(" "))!=null?i:[]))}toString(){return this.value}item(e){return H(this,Ye)[e]}values(){return H(this,Ye).values()}keys(){return H(this,Ye).keys()}forEach(e){H(this,Ye).forEach(e)}add(...e){var i,a;e.forEach(r=>{this.contains(r)||H(this,Ye).push(r)}),!(this.value===""&&!((i=H(this,za))!=null&&i.hasAttribute(`${H(this,Qa)}`)))&&((a=H(this,za))==null||a.setAttribute(`${H(this,Qa)}`,`${this.value}`))}remove(...e){var i;e.forEach(a=>{H(this,Ye).splice(H(this,Ye).indexOf(a),1)}),(i=H(this,za))==null||i.setAttribute(`${H(this,Qa)}`,`${this.value}`)}contains(e){return H(this,Ye).includes(e)}toggle(e,i){return typeof i<"u"?i?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,i){this.remove(e),this.add(i)}};za=new WeakMap,Qa=new WeakMap,Ye=new WeakMap;var Jf=`[mux-player ${Xf()}]`;function di(...t){console.warn(Jf,...t)}function Ge(...t){console.error(Jf,...t)}function Dm(t){var e;let i=(e=t.message)!=null?e:"";t.context&&(i+=` ${t.context}`),t.file&&(i+=` ${O("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${t.file}`),di(i)}var We={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},aa={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},xm=Object.freeze({length:0,start(t){let e=t>>>0;if(e>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${e}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(t){let e=t>>>0;if(e>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${e}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),kk=Object.values(We).filter(t=>We.PLAYSINLINE!==t),Sk=Object.values(aa),wk=[...kk,...Sk],Ik=class extends Qt.HTMLElement{static get observedAttributes(){return wk}constructor(){super()}attributeChangedCallback(e,i,a){var r,n;switch(e){case aa.MUTED:{this.media&&(this.media.muted=a!=null,this.media.defaultMuted=a!=null);return}case aa.VOLUME:{let s=(r=Fe(a))!=null?r:1;this.media&&(this.media.volume=s);return}case aa.PLAYBACKRATE:{let s=(n=Fe(a))!=null?n:1;this.media&&(this.media.playbackRate=s,this.media.defaultPlaybackRate=s);return}}}play(){var e,i;return(i=(e=this.media)==null?void 0:e.play())!=null?i:Promise.reject()}pause(){var e;(e=this.media)==null||e.pause()}load(){var e;(e=this.media)==null||e.load()}get media(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var e,i;return(i=(e=this.media)==null?void 0:e.paused)!=null?i:!0}get duration(){var e,i;return(i=(e=this.media)==null?void 0:e.duration)!=null?i:NaN}get ended(){var e,i;return(i=(e=this.media)==null?void 0:e.ended)!=null?i:!1}get buffered(){var e,i;return(i=(e=this.media)==null?void 0:e.buffered)!=null?i:xm}get seekable(){var e,i;return(i=(e=this.media)==null?void 0:e.seekable)!=null?i:xm}get readyState(){var e,i;return(i=(e=this.media)==null?void 0:e.readyState)!=null?i:0}get videoWidth(){var e,i;return(i=(e=this.media)==null?void 0:e.videoWidth)!=null?i:0}get videoHeight(){var e,i;return(i=(e=this.media)==null?void 0:e.videoHeight)!=null?i:0}get currentSrc(){var e,i;return(i=(e=this.media)==null?void 0:e.currentSrc)!=null?i:""}get currentTime(){var e,i;return(i=(e=this.media)==null?void 0:e.currentTime)!=null?i:0}set currentTime(e){this.media&&(this.media.currentTime=Number(e))}get volume(){var e,i;return(i=(e=this.media)==null?void 0:e.volume)!=null?i:1}set volume(e){this.media&&(this.media.volume=Number(e))}get playbackRate(){var e,i;return(i=(e=this.media)==null?void 0:e.playbackRate)!=null?i:1}set playbackRate(e){this.media&&(this.media.playbackRate=Number(e))}get defaultPlaybackRate(){var e;return(e=Fe(this.getAttribute(aa.PLAYBACKRATE)))!=null?e:1}set defaultPlaybackRate(e){e!=null?this.setAttribute(aa.PLAYBACKRATE,`${e}`):this.removeAttribute(aa.PLAYBACKRATE)}get crossOrigin(){return Or(this,We.CROSSORIGIN)}set crossOrigin(e){this.setAttribute(We.CROSSORIGIN,`${e}`)}get autoplay(){return Or(this,We.AUTOPLAY)!=null}set autoplay(e){e?this.setAttribute(We.AUTOPLAY,typeof e=="string"?e:""):this.removeAttribute(We.AUTOPLAY)}get loop(){return Or(this,We.LOOP)!=null}set loop(e){e?this.setAttribute(We.LOOP,""):this.removeAttribute(We.LOOP)}get muted(){var e,i;return(i=(e=this.media)==null?void 0:e.muted)!=null?i:!1}set muted(e){this.media&&(this.media.muted=!!e)}get defaultMuted(){return Or(this,We.MUTED)!=null}set defaultMuted(e){e?this.setAttribute(We.MUTED,""):this.removeAttribute(We.MUTED)}get playsInline(){return Or(this,We.PLAYSINLINE)!=null}set playsInline(e){Ge("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(e){["","none","metadata","auto"].includes(e)?this.setAttribute(We.PRELOAD,e):this.removeAttribute(We.PRELOAD)}};function Or(t,e){return t.media?t.media.getAttribute(e):t.getAttribute(e)}var Om=Ik,Rk=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));
  --media-rendition-menu-button-display: var(--rendition-menu-button);
  --media-audio-track-menu-button-display: var(--audio-track-menu-button);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  line-height: 0;
  width: 100%;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--top-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --captions-menu-button,
    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--center-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--bottom-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`,Nr=new WeakMap,Ck=class eE{constructor(e,i){this.element=e,this.type=i,this.element.addEventListener(this.type,this);let a=Nr.get(this.element);a&&a.set(this.type,this)}set(e){if(typeof e=="function")this.handleEvent=e.bind(this.element);else if(typeof e=="object"&&typeof e.handleEvent=="function")this.handleEvent=e.handleEvent.bind(e);else{this.element.removeEventListener(this.type,this);let i=Nr.get(this.element);i&&i.delete(this.type)}}static for(e){Nr.has(e.element)||Nr.set(e.element,new Map);let i=e.attributeName.slice(2),a=Nr.get(e.element);return a&&a.has(i)?a.get(i):new eE(e.element,i)}};function Lk(t,e){return t instanceof Dt&&t.attributeName.startsWith("on")?(Ck.for(t).set(e),t.element.removeAttributeNS(t.attributeNamespace,t.attributeName),!0):!1}function Mk(t,e){return e instanceof tE&&t instanceof Tr?(e.renderInto(t),!0):!1}function Dk(t,e){return e instanceof DocumentFragment&&t instanceof Tr?(e.childNodes.length&&t.replace(...e.childNodes),!0):!1}function xk(t,e){if(t instanceof Dt){let i=t.attributeNamespace,a=t.element.getAttributeNS(i,t.attributeName);return String(e)!==a&&(t.value=String(e)),!0}return t.value=String(e),!0}function Ok(t,e){if(t instanceof Dt&&e instanceof Element){let i=t.element;return i[t.attributeName]!==e&&(t.element.removeAttributeNS(t.attributeNamespace,t.attributeName),i[t.attributeName]=e),!0}return!1}function Nk(t,e){if(typeof e=="boolean"&&t instanceof Dt){let i=t.attributeNamespace,a=t.element.hasAttributeNS(i,t.attributeName);return e!==a&&(t.booleanValue=e),!0}return!1}function Pk(t,e){return e===!1&&t instanceof Tr?(t.replace(""),!0):!1}function Uk(t,e){Ok(t,e)||Nk(t,e)||Lk(t,e)||Pk(t,e)||Mk(t,e)||Dk(t,e)||xk(t,e)}var Yl=new Map,Nm=new WeakMap,Pm=new WeakMap,tE=class{constructor(t,e,i){this.strings=t,this.values=e,this.processor=i,this.stringsKey=this.strings.join("")}get template(){if(Yl.has(this.stringsKey))return Yl.get(this.stringsKey);{let t=Qo.createElement("template"),e=this.strings.length-1;return t.innerHTML=this.strings.reduce((i,a,r)=>i+a+(r<e?`{{ ${r} }}`:""),""),Yl.set(this.stringsKey,t),t}}renderInto(t){var e;let i=this.template;if(Nm.get(t)!==i){Nm.set(t,i);let r=new yl(i,this.values,this.processor);Pm.set(t,r),t instanceof Tr?t.replace(...r.children):t.appendChild(r);return}let a=Pm.get(t);(e=a?.update)==null||e.call(a,this.values)}},$k={processCallback(t,e,i){var a;if(i){for(let[r,n]of e)if(r in i){let s=(a=i[r])!=null?a:"";Uk(n,s)}}}};function fo(t,...e){return new tE(t,e,$k)}function Hk(t,e){t.renderInto(e)}var Bk=t=>{let{tokens:e}=t;return e.drm?":host(:not([cast-receiver])) { --_cast-button-drm-display: none; }":""},Wk=t=>fo`
  <style>
    ${Bk(t)}
    ${Rk}
  </style>
  ${qk(t)}
`,Fk=t=>{let e=t.hotKeys?`${t.hotKeys}`:"";return Jc(t.streamType)==="live"&&(e+=" noarrowleft noarrowright"),e},Kk={TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",THUMB:"thumb",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",MENU:"menu",MENU_ITEM:"menu-item",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"},Vk=Object.values(Kk).join(", "),qk=t=>{var e,i,a,r,n,s,o,l,d,m,p,c,u,v,g,_,y,f,T,I,k,C,S,P,q,B,W,se,oe,He,Je,et,Se,we,Et,tt,Me,ii,Be,Ke,ai,kr;return fo`
  <media-theme
    template="${t.themeTemplate||!1}"
    defaultstreamtype="${(e=t.defaultStreamType)!=null?e:!1}"
    hotkeys="${Fk(t)||!1}"
    nohotkeys="${t.noHotKeys||!t.hasSrc||!1}"
    noautoseektolive="${!!((i=t.streamType)!=null&&i.includes(J.LIVE))&&t.targetLiveWindow!==0}"
    novolumepref="${t.novolumepref||!1}"
    nomutedpref="${t.nomutedpref||!1}"
    disabled="${!t.hasSrc||t.isDialogOpen}"
    audio="${(a=t.audio)!=null?a:!1}"
    style="${(r=vk({"--media-primary-color":t.primaryColor,"--media-secondary-color":t.secondaryColor,"--media-accent-color":t.accentColor}))!=null?r:!1}"
    defaultsubtitles="${!t.defaultHiddenCaptions}"
    forwardseekoffset="${(n=t.forwardSeekOffset)!=null?n:!1}"
    backwardseekoffset="${(s=t.backwardSeekOffset)!=null?s:!1}"
    playbackrates="${(o=t.playbackRates)!=null?o:!1}"
    defaultshowremainingtime="${(l=t.defaultShowRemainingTime)!=null?l:!1}"
    defaultduration="${(d=t.defaultDuration)!=null?d:!1}"
    hideduration="${(m=t.hideDuration)!=null?m:!1}"
    title="${(p=t.title)!=null?p:!1}"
    videotitle="${(c=t.videoTitle)!=null?c:!1}"
    proudlydisplaymuxbadge="${(u=t.proudlyDisplayMuxBadge)!=null?u:!1}"
    exportparts="${Vk}"
  >
    <mux-video
      slot="media"
      inert="${(v=t.noHotKeys)!=null?v:!1}"
      target-live-window="${(g=t.targetLiveWindow)!=null?g:!1}"
      stream-type="${(_=Jc(t.streamType))!=null?_:!1}"
      crossorigin="${(y=t.crossOrigin)!=null?y:""}"
      playsinline
      autoplay="${(f=t.autoplay)!=null?f:!1}"
      muted="${(T=t.muted)!=null?T:!1}"
      loop="${(I=t.loop)!=null?I:!1}"
      preload="${(k=t.preload)!=null?k:!1}"
      debug="${(C=t.debug)!=null?C:!1}"
      prefer-cmcd="${(S=t.preferCmcd)!=null?S:!1}"
      disable-tracking="${(P=t.disableTracking)!=null?P:!1}"
      disable-cookies="${(q=t.disableCookies)!=null?q:!1}"
      prefer-playback="${(B=t.preferPlayback)!=null?B:!1}"
      start-time="${t.startTime!=null?t.startTime:!1}"
      initial-bandwidth-estimate-kbps="${t.initialBandwidthEstimateKbps!=null?t.initialBandwidthEstimateKbps:!1}"
      initial-estimate-segments="${t.initialEstimateSegments!=null?t.initialEstimateSegments:!1}"
      min-preload-segments="${t.minPreloadSegments!=null?t.minPreloadSegments:!1}"
      beacon-collection-domain="${(W=t.beaconCollectionDomain)!=null?W:!1}"
      player-init-time="${(se=t.playerInitTime)!=null?se:!1}"
      player-software-name="${(oe=t.playerSoftwareName)!=null?oe:!1}"
      player-software-version="${(He=t.playerSoftwareVersion)!=null?He:!1}"
      env-key="${(Je=t.envKey)!=null?Je:!1}"
      custom-domain="${(et=t.customDomain)!=null?et:!1}"
      src="${t.src?t.src:t.playbackId?od(t):!1}"
      cast-src="${t.src?t.src:t.playbackId?od(t):!1}"
      cast-receiver="${(Se=t.castReceiver)!=null?Se:!1}"
      drm-token="${(Et=(we=t.tokens)==null?void 0:we.drm)!=null?Et:!1}"
      playback-token="${(Me=(tt=t.tokens)==null?void 0:tt.playback)!=null?Me:!1}"
      exportparts="video"
      disable-pseudo-ended="${(ii=t.disablePseudoEnded)!=null?ii:!1}"
      max-reconnect-retries="${(Be=t.maxReconnectRetries)!=null?Be:!1}"
      max-auto-resolution="${(Ke=t.maxAutoResolution)!=null?Ke:!1}"
      cap-rendition-to-player-size="${(ai=t.capRenditionToPlayerSize)!=null?ai:!1}"
    >
      ${t.storyboard?fo`<track label="thumbnails" default kind="metadata" src="${t.storyboard}" />`:fo``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${t.poster?t.poster:!1}"
        placeholdersrc="${(kr=t.placeholder)!=null?kr:!1}"
      ></media-poster-image>
    </slot>
  </media-theme>
`},iE=t=>t.charAt(0).toUpperCase()+t.slice(1),Yk=(t,e=!1)=>{var i,a;if(t.muxCode){let r=iE((i=t.errorCategory)!=null?i:"video"),n=rl((a=t.errorCategory)!=null?a:X.VIDEO);if(t.muxCode===N.NETWORK_OFFLINE)return O("Your device appears to be offline",e);if(t.muxCode===N.NETWORK_RECONNECTING)return O("Reconnecting...",e);if(t.muxCode===N.NETWORK_TOKEN_EXPIRED)return O("{category} URL has expired",e).format({category:r});if([N.NETWORK_TOKEN_SUB_MISMATCH,N.NETWORK_TOKEN_AUD_MISMATCH,N.NETWORK_TOKEN_AUD_MISSING,N.NETWORK_TOKEN_MALFORMED].includes(t.muxCode))return O("{category} URL is formatted incorrectly",e).format({category:r});if(t.muxCode===N.NETWORK_TOKEN_MISSING)return O("Invalid {categoryName} URL",e).format({categoryName:n});if(t.muxCode===N.NETWORK_NOT_FOUND)return O("{category} does not exist",e).format({category:r});if(t.muxCode===N.NETWORK_NOT_READY){let s=t.streamType==="live"?"Live stream":"Video";return O("{mediaType} is not currently available",e).format({mediaType:s})}}if(t.code){if(t.code===L.MEDIA_ERR_NETWORK)return O("Network Error",e);if(t.code===L.MEDIA_ERR_DECODE)return O("Media Error",e);if(t.code===L.MEDIA_ERR_SRC_NOT_SUPPORTED)return O("Source Not Supported",e)}return O("Error",e)},Gk=(t,e=!1)=>{var i,a;if(t.reload)return"";if(t.muxCode){let r=iE((i=t.errorCategory)!=null?i:"video"),n=rl((a=t.errorCategory)!=null?a:X.VIDEO);return t.muxCode===N.NETWORK_OFFLINE?O("Check your internet connection and try reloading this video.",e):t.muxCode===N.NETWORK_RECONNECTING?O("Your connection was interrupted. Attempting to resume playback...",e):t.muxCode===N.NETWORK_TOKEN_EXPIRED?O("The video’s secured {tokenNamePrefix}-token has expired.",e).format({tokenNamePrefix:n}):t.muxCode===N.NETWORK_TOKEN_SUB_MISMATCH?O("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",e).format({tokenNamePrefix:n}):t.muxCode===N.NETWORK_TOKEN_MALFORMED?O("{category} URL is formatted incorrectly",e).format({category:r}):[N.NETWORK_TOKEN_AUD_MISMATCH,N.NETWORK_TOKEN_AUD_MISSING].includes(t.muxCode)?O("The {tokenNamePrefix}-token is formatted with incorrect information.",e).format({tokenNamePrefix:n}):[N.NETWORK_TOKEN_MISSING,N.NETWORK_INVALID_URL].includes(t.muxCode)?O("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",e).format({tokenNamePrefix:n}):t.muxCode===N.NETWORK_NOT_FOUND?"":t.message}return t.code&&(t.code===L.MEDIA_ERR_NETWORK||t.code===L.MEDIA_ERR_DECODE||(t.code,L.MEDIA_ERR_SRC_NOT_SUPPORTED)),t.message},jk=(t,e=!1)=>{let i=Yk(t,e).toString(),a=Gk(t,e).toString();return{title:i,message:a,reload:!!t.reload}},zk=t=>{if(t.muxCode){if(t.muxCode===N.NETWORK_TOKEN_EXPIRED)return"403-expired-token.md";if(t.muxCode===N.NETWORK_TOKEN_MALFORMED)return"403-malformatted-token.md";if([N.NETWORK_TOKEN_AUD_MISMATCH,N.NETWORK_TOKEN_AUD_MISSING].includes(t.muxCode))return"403-incorrect-aud-value.md";if(t.muxCode===N.NETWORK_TOKEN_SUB_MISMATCH)return"403-playback-id-mismatch.md";if(t.muxCode===N.NETWORK_TOKEN_MISSING)return"missing-signed-tokens.md";if(t.muxCode===N.NETWORK_NOT_FOUND)return"404-not-found.md";if(t.muxCode===N.NETWORK_NOT_READY)return"412-not-playable.md"}if(t.code){if(t.code===L.MEDIA_ERR_NETWORK)return"";if(t.code===L.MEDIA_ERR_DECODE)return"media-decode-error.md";if(t.code===L.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""},aE=(t,e)=>{let i=zk(t);return{message:t.message,context:t.context,file:i}},Qk=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    media-rendition-menu {
      min-width: 140px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps:
        hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%, hsl(0 0% 0% / 0.104) 22.5%,
        hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%, hsl(0 0% 0% / 0.45) 47.1%,
        hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%, hsl(0 0% 0% / 0.825) 71%,
        hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%, hsl(0 0% 0%) 100%;
    }

    :host([title]) media-control-bar[slot='top-chrome']::before,
    :host([videotitle]) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-error-dialog:not([mediaerrorcode]) {
      opacity: 0;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }

    [part='mux-badge'] {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 2;
      opacity: 0.6;
      transition:
        opacity 0.2s ease-in-out,
        bottom 0.2s ease-in-out;
    }

    [part='mux-badge']:hover {
      opacity: 1;
    }

    [part='mux-badge'] a {
      font-size: 14px;
      font-family: var(--_font-family);
      color: var(--_primary-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    [part='mux-badge'] .mux-badge-text {
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
    }

    [part='mux-badge'] .mux-badge-logo {
      width: 40px;
      height: auto;
      display: inline-block;
    }

    [part='mux-badge'] .mux-badge-logo svg {
      width: 100%;
      height: 100%;
      fill: white;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'],
    media-controller:not([userinactive]) [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      transition: bottom 0.1s ease-in-out;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      transition: bottom 0.2s ease-in-out 0.62s;
    }

    media-controller:not([userinactive]) [part='mux-badge'] .mux-badge-text,
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] .mux-badge-text {
      opacity: 1;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] .mux-badge-text {
      opacity: 0;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive])[mediahasplayed] [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      bottom: calc(28px + var(--media-control-height, 0px) + var(--media-control-padding, 0px) * 2);
    }
  </style>

  <template partial="TitleDisplay">
    <template if="videotitle">
      <template if="videotitle != true">
        <media-text-display part="top title display" class="title-display">{{videotitle}}</media-text-display>
      </template>
    </template>
    <template if="!videotitle">
      <template if="title">
        <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
      </template>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}" exportparts="thumb">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            opacity: 0;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <template partial="MuxBadge">
    <div part="mux-badge">
      <a href="https://www.mux.com/player" target="_blank">
        <span class="mux-badge-text">Powered by</span>
        <div class="mux-badge-logo">
          <svg
            viewBox="0 0 1600 500"
            style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
          >
            <g>
              <path
                d="M994.287,93.486c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m0,-93.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,68.943 -56.09,125.033 -125.032,125.033c-68.942,-0 -125.03,-56.09 -125.03,-125.033l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,137.853 112.149,250.003 249.999,250.003c137.851,-0 250.001,-112.15 250.001,-250.003l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M1537.51,468.511c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m-275.883,-218.509l-143.33,143.329c-24.402,24.402 -24.402,63.966 0,88.368c24.402,24.402 63.967,24.402 88.369,-0l143.33,-143.329l143.328,143.329c24.402,24.4 63.967,24.402 88.369,-0c24.403,-24.402 24.403,-63.966 0.001,-88.368l-143.33,-143.329l0.001,-0.004l143.329,-143.329c24.402,-24.402 24.402,-63.965 0,-88.367c-24.402,-24.402 -63.967,-24.402 -88.369,-0l-143.329,143.328l-143.329,-143.328c-24.402,-24.401 -63.967,-24.402 -88.369,-0c-24.402,24.402 -24.402,63.965 0,88.367l143.329,143.329l0,0.004Z"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M437.511,468.521c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m23.915,-463.762c-23.348,-9.672 -50.226,-4.327 -68.096,13.544l-143.331,143.329l-143.33,-143.329c-17.871,-17.871 -44.747,-23.216 -68.096,-13.544c-23.349,9.671 -38.574,32.455 -38.574,57.729l0,375.026c0,34.51 27.977,62.486 62.487,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-224.173l80.843,80.844c24.404,24.402 63.965,24.402 88.369,-0l80.843,-80.844l0,224.173c0,34.51 27.976,62.486 62.486,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-375.026c0,-25.274 -15.224,-48.058 -38.573,-57.729"
                style="fill-rule: nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="!audio">
      <media-error-dialog slot="dialog" noautohide></media-error-dialog>
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Mux Badge -->
      <template if="proudlydisplaymuxbadge"> {{>MuxBadge}} </template>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,mu=Qo.createElement("template");"innerHTML"in mu&&(mu.innerHTML=Qk);var Um,$m,rE=class extends Tl{};rE.template=($m=(Um=mu.content)==null?void 0:Um.children)==null?void 0:$m[0];Qt.customElements.get("media-theme-gerwig")||Qt.customElements.define("media-theme-gerwig",rE);var Zk="gerwig",ui={SRC:"src",POSTER:"poster"},w={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",FULLSCREEN_ELEMENT:"fullscreen-element",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",VIDEO_TITLE:"video-title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",NO_MUTED_PREF:"no-muted-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips",PROUDLY_DISPLAY_MUX_BADGE:"proudly-display-mux-badge",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended"},pu=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","videotitle","novolumepref","nomutedpref","proudlydisplaymuxbadge"];function Xk(t,e){var i,a,r;return{src:!t.playbackId&&t.src,playbackId:t.playbackId,hasSrc:!!t.playbackId||!!t.src||!!t.currentSrc,poster:t.poster,storyboard:((i=t.media)==null?void 0:i.currentSrc)&&t.storyboard,storyboardSrc:t.getAttribute(w.STORYBOARD_SRC),fullscreenElement:t.getAttribute(w.FULLSCREEN_ELEMENT),placeholder:t.getAttribute("placeholder"),themeTemplate:eS(t),thumbnailTime:!t.tokens.thumbnail&&t.thumbnailTime,autoplay:t.autoplay,crossOrigin:t.crossOrigin,loop:t.loop,noHotKeys:t.hasAttribute(w.NOHOTKEYS),hotKeys:t.getAttribute(w.HOTKEYS),muted:t.muted,paused:t.paused,preload:t.preload,envKey:t.envKey,preferCmcd:t.preferCmcd,debug:t.debug,disableTracking:t.disableTracking,disableCookies:t.disableCookies,tokens:t.tokens,beaconCollectionDomain:t.beaconCollectionDomain,maxResolution:t.maxResolution,minResolution:t.minResolution,maxAutoResolution:t.maxAutoResolution,programStartTime:t.programStartTime,programEndTime:t.programEndTime,assetStartTime:t.assetStartTime,assetEndTime:t.assetEndTime,renditionOrder:t.renditionOrder,metadata:t.metadata,playerInitTime:t.playerInitTime,playerSoftwareName:t.playerSoftwareName,playerSoftwareVersion:t.playerSoftwareVersion,startTime:t.startTime,initialBandwidthEstimateKbps:t.initialBandwidthEstimateKbps,initialEstimateSegments:t.initialEstimateSegments,minPreloadSegments:t.minPreloadSegments,preferPlayback:t.preferPlayback,audio:t.audio,defaultStreamType:t.defaultStreamType,targetLiveWindow:t.getAttribute(E.TARGET_LIVE_WINDOW),streamType:Jc(t.getAttribute(E.STREAM_TYPE)),primaryColor:t.getAttribute(w.PRIMARY_COLOR),secondaryColor:t.getAttribute(w.SECONDARY_COLOR),accentColor:t.getAttribute(w.ACCENT_COLOR),forwardSeekOffset:t.forwardSeekOffset,backwardSeekOffset:t.backwardSeekOffset,defaultHiddenCaptions:t.defaultHiddenCaptions,defaultDuration:t.defaultDuration,defaultShowRemainingTime:t.defaultShowRemainingTime,hideDuration:tS(t),playbackRates:t.getAttribute(w.PLAYBACK_RATES),customDomain:(a=t.getAttribute(E.CUSTOM_DOMAIN))!=null?a:void 0,title:t.getAttribute(w.TITLE),videoTitle:(r=t.getAttribute(w.VIDEO_TITLE))!=null?r:t.getAttribute(w.TITLE),novolumepref:t.hasAttribute(w.NO_VOLUME_PREF),nomutedpref:t.hasAttribute(w.NO_MUTED_PREF),proudlyDisplayMuxBadge:t.hasAttribute(w.PROUDLY_DISPLAY_MUX_BADGE),castReceiver:t.castReceiver,disablePseudoEnded:t.hasAttribute(w.DISABLE_PSEUDO_ENDED),maxReconnectRetries:t.maxReconnectRetries,capRenditionToPlayerSize:t.capRenditionToPlayerSize,...e,extraSourceParams:t.extraSourceParams}}var Jk=Qv.formatErrorMessage;Qv.formatErrorMessage=t=>{var e,i,a;if(t instanceof L){let r=jk(t,!1);return r!=null&&r.reload?`
      ${r!=null&&r.title?`<h3>${Sa(r.title)}</h3>`:""}
      <p>Try again later or <a href="#" data-mux-reload style="color: #4a90e2;">click here to retry</a></p>
    `:`
      ${r!=null&&r.title?`<h3>${Sa(r.title)}</h3>`:""}
      ${r!=null&&r.message||r!=null&&r.linkUrl?`<p>
        ${Sa((e=r?.message)!=null?e:"")}
        ${r!=null&&r.linkUrl?`<a
              href="${Sa(r.linkUrl)}"
              target="_blank"
              rel="external noopener"
              aria-label="${Sa((i=r.linkText)!=null?i:"")} ${O("(opens in a new window)")}"
              >${Sa((a=r.linkText)!=null?a:r.linkUrl)}</a
            >`:""}
      </p>`:""}
    `}return Jk(t)};function eS(t){var e,i;let a=t.theme;if(a){let r=(i=(e=t.getRootNode())==null?void 0:e.getElementById)==null?void 0:i.call(e,a);if(r&&r instanceof HTMLTemplateElement)return r;a.startsWith("media-theme-")||(a=`media-theme-${a}`);let n=Qt.customElements.get(a);if(n!=null&&n.template)return n.template}}function tS(t){var e;let i=(e=t.mediaController)==null?void 0:e.querySelector("media-time-display");return i&&getComputedStyle(i).getPropertyValue("--media-duration-display-display").trim()==="none"}function dn(t){let e=t.videoTitle?{video_title:t.videoTitle}:{};return t.getAttributeNames().filter(i=>i.startsWith("metadata-")).reduce((i,a)=>{let r=t.getAttribute(a);return r!==null&&(i[a.replace(/^metadata-/,"").replace(/-/g,"_")]=r),i},e)}var iS=Object.values(E),aS=Object.values(ui),rS=Object.values(w),Hm=Xf(),Bm="mux-player",Wm={isDialogOpen:!1},nS={redundant_streams:!0},Eo,gn,_o,ra,bo,yn,Zo,Xo,ur,Jo,el,tl,Tn,cr,il,pe,ci,nE,vu,ua,Fm,Km,Vm,qm,sS=class extends Om{constructor(){super(),Ae(this,pe),Ae(this,Eo),Ae(this,gn,!1),Ae(this,_o,{}),Ae(this,ra,!0),Ae(this,bo,new Ak(this,"hotkeys")),Ae(this,yn),Ae(this,Zo,()=>be(this,pe,ua).call(this)),Ae(this,Xo,()=>be(this,pe,ua).call(this)),Ae(this,ur,()=>be(this,pe,ua).call(this)),Ae(this,Jo,t=>{t.composedPath().find(e=>{var i;return(i=e?.hasAttribute)==null?void 0:i.call(e,"data-mux-reload")})&&(t.preventDefault(),window.location.reload())}),Ae(this,el,t=>{var e;((e=t.composedPath()[0])==null?void 0:e.localName)==="media-error-dialog"&&be(this,pe,vu).call(this,{isDialogOpen:!1})}),Ae(this,tl,t=>{var e;((e=t.composedPath()[0])==null?void 0:e.localName)==="media-error-dialog"&&(Qf(this,Qo.activeElement)||t.preventDefault())}),Ae(this,Tn),Ae(this,cr,{...Wm}),Ae(this,il,t=>{var e;let i=(e=this.media)==null?void 0:e.error;if(!(i instanceof L)){let{message:r,code:n}=i??{};i=new L(r,n)}if(!(i!=null&&i.fatal)){di(i),i.data&&di(`${i.name} data:`,i.data);return}let a=aE(i);a.message&&Dm(a),Ge(i),i.data&&Ge(`${i.name} data:`,i.data),be(this,pe,vu).call(this,{isDialogOpen:!0})}),ze(this,Eo,Nu()),this.attachShadow({mode:"open"}),be(this,pe,nE).call(this),this.isConnected&&be(this,pe,ci).call(this)}static get NAME(){return Bm}static get VERSION(){return Hm}static get observedAttributes(){var t;return[...(t=Om.observedAttributes)!=null?t:[],...aS,...iS,...rS]}setAttribute(t,e){super.setAttribute(t,e),t.startsWith("metadata-")&&this.media&&(this.media.metadata=dn(this))}removeAttribute(t){super.removeAttribute(t),t.startsWith("metadata-")&&this.media&&(this.media.metadata=dn(this))}get mediaTheme(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("media-theme")}get mediaController(){var t,e;return(e=(t=this.mediaTheme)==null?void 0:t.shadowRoot)==null?void 0:e.querySelector("media-controller")}connectedCallback(){be(this,pe,ci).call(this);let t=this.media;t&&(t.metadata=dn(this))}disconnectedCallback(){var t,e,i,a,r,n,s,o,l,d;(t=H(this,yn))==null||t.disconnect(),(e=this.media)==null||e.removeEventListener("streamtypechange",H(this,Zo)),(i=this.media)==null||i.removeEventListener("loadstart",H(this,Xo)),this.removeEventListener("error",H(this,il)),this.removeEventListener("click",H(this,Jo)),(a=this.mediaTheme)==null||a.removeEventListener("close",H(this,el)),(r=this.mediaTheme)==null||r.removeEventListener("focusin",H(this,tl)),this.media&&(this.media.errorTranslator=void 0),(s=(n=this.media)==null?void 0:n.textTracks)==null||s.removeEventListener("addtrack",H(this,ur)),(l=(o=this.media)==null?void 0:o.textTracks)==null||l.removeEventListener("removetrack",H(this,ur)),(d=H(this,Tn))==null||d.call(this),ze(this,Tn,void 0),ze(this,gn,!1)}attributeChangedCallback(t,e,i){switch(be(this,pe,ci).call(this),super.attributeChangedCallback(t,e,i),t){case w.HOTKEYS:H(this,bo).value=i;break;case w.THUMBNAIL_TIME:{i!=null&&this.tokens.thumbnail&&di(O("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").toString());break}case w.THUMBNAIL_TOKEN:{if(i){let a=ir(i);if(a){let{aud:r}=a,n=un.THUMBNAIL;r!==n&&di(O("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"thumbnail"}))}}break}case w.STORYBOARD_TOKEN:{if(i){let a=ir(i);if(a){let{aud:r}=a,n=un.STORYBOARD;r!==n&&di(O("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"storyboard"}))}}break}case w.DRM_TOKEN:{if(i){let a=ir(i);if(a){let{aud:r}=a,n=un.DRM;r!==n&&di(O("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"drm"}))}}break}case E.PLAYBACK_ID:{i!=null&&i.includes("?token")&&Ge(O("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:i}));break}case E.STREAM_TYPE:{i&&![J.LIVE,J.ON_DEMAND,J.UNKNOWN].includes(i)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=i.includes("dvr")?Number.POSITIVE_INFINITY:0:Dm({file:"invalid-stream-type.md",message:O("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):i===J.LIVE?this.getAttribute(w.TARGET_LIVE_WINDOW)==null&&(this.targetLiveWindow=0):this.targetLiveWindow=Number.NaN;break}case w.FULLSCREEN_ELEMENT:{if(i!=null||i!==e){let a=Qo.getElementById(i),r=a?.querySelector("mux-player");this.mediaController&&a&&r&&(this.mediaController.fullscreenElement=a)}break}case E.CAP_RENDITION_TO_PLAYER_SIZE:{(i==null||i!==e)&&(this.capRenditionToPlayerSize=i!=null?!0:void 0);break}case E.MAX_RECONNECT_RETRIES:{(i==null||i!==e)&&(this.maxReconnectRetries=Number(i));break}}[E.PLAYBACK_ID,ui.SRC,w.PLAYBACK_TOKEN].includes(t)&&e!==i&&ze(this,cr,{...H(this,cr),...Wm}),be(this,pe,ua).call(this,{[Tk(t)]:i})}async requestFullscreen(t){var e;if(!(!this.mediaController||this.mediaController.hasAttribute(h.MEDIA_IS_FULLSCREEN)))return(e=this.mediaController)==null||e.dispatchEvent(new Qt.CustomEvent(D.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((i,a)=>{var r;(r=this.mediaController)==null||r.addEventListener(ti.MEDIA_IS_FULLSCREEN,()=>i(),{once:!0})})}async exitFullscreen(){var t;if(!(!this.mediaController||!this.mediaController.hasAttribute(h.MEDIA_IS_FULLSCREEN)))return(t=this.mediaController)==null||t.dispatchEvent(new Qt.CustomEvent(D.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,i)=>{var a;(a=this.mediaController)==null||a.addEventListener(ti.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}get preferCmcd(){var t;return(t=this.getAttribute(E.PREFER_CMCD))!=null?t:void 0}set preferCmcd(t){t!==this.preferCmcd&&(t?Ao.includes(t)?this.setAttribute(E.PREFER_CMCD,t):di(`Invalid value for preferCmcd. Must be one of ${Ao.join()}`):this.removeAttribute(E.PREFER_CMCD))}get hasPlayed(){var t,e;return(e=(t=this.mediaController)==null?void 0:t.hasAttribute(h.MEDIA_HAS_PLAYED))!=null?e:!1}get inLiveWindow(){var t;return(t=this.mediaController)==null?void 0:t.hasAttribute(h.MEDIA_TIME_IS_LIVE)}get _hls(){var t;return(t=this.media)==null?void 0:t._hls}get mux(){var t;return(t=this.media)==null?void 0:t.mux}get theme(){var t;return(t=this.getAttribute(w.THEME))!=null?t:Zk}set theme(t){this.setAttribute(w.THEME,`${t}`)}get themeProps(){let t=this.mediaTheme;if(!t)return;let e={};for(let i of t.getAttributeNames()){if(pu.includes(i))continue;let a=t.getAttribute(i);e[jf(i)]=a===""?!0:a}return e}set themeProps(t){var e,i;be(this,pe,ci).call(this);let a={...this.themeProps,...t};for(let r in a){if(pu.includes(r))continue;let n=t?.[r];typeof n=="boolean"||n==null?(e=this.mediaTheme)==null||e.toggleAttribute(hu(r),!!n):(i=this.mediaTheme)==null||i.setAttribute(hu(r),n)}}get playbackId(){var t;return(t=this.getAttribute(E.PLAYBACK_ID))!=null?t:void 0}set playbackId(t){t?this.setAttribute(E.PLAYBACK_ID,t):this.removeAttribute(E.PLAYBACK_ID)}get src(){var t,e;return this.playbackId?(t=Pt(this,ui.SRC))!=null?t:void 0:(e=this.getAttribute(ui.SRC))!=null?e:void 0}set src(t){t?this.setAttribute(ui.SRC,t):this.removeAttribute(ui.SRC)}get poster(){var t;let e=this.getAttribute(ui.POSTER);if(e!=null)return e;let{tokens:i}=this;if(i.playback&&!i.thumbnail){di("Missing expected thumbnail token. No poster image will be shown");return}if(this.playbackId&&!this.audio)return bk(this.playbackId,{customDomain:this.customDomain,thumbnailTime:(t=this.thumbnailTime)!=null?t:this.startTime,programTime:this.programStartTime,token:i.thumbnail})}set poster(t){t||t===""?this.setAttribute(ui.POSTER,t):this.removeAttribute(ui.POSTER)}get storyboardSrc(){var t;return(t=this.getAttribute(w.STORYBOARD_SRC))!=null?t:void 0}set storyboardSrc(t){t?this.setAttribute(w.STORYBOARD_SRC,t):this.removeAttribute(w.STORYBOARD_SRC)}get storyboard(){let{tokens:t}=this;if(this.storyboardSrc&&!t.storyboard)return this.storyboardSrc;if(!(this.audio||!this.playbackId||!this.streamType||[J.LIVE,J.UNKNOWN].includes(this.streamType)||t.playback&&!t.storyboard))return gk(this.playbackId,{customDomain:this.customDomain,token:t.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(w.AUDIO)}set audio(t){if(!t){this.removeAttribute(w.AUDIO);return}this.setAttribute(w.AUDIO,"")}get hotkeys(){return H(this,bo)}get nohotkeys(){return this.hasAttribute(w.NOHOTKEYS)}set nohotkeys(t){if(!t){this.removeAttribute(w.NOHOTKEYS);return}this.setAttribute(w.NOHOTKEYS,"")}get thumbnailTime(){return Fe(this.getAttribute(w.THUMBNAIL_TIME))}set thumbnailTime(t){this.setAttribute(w.THUMBNAIL_TIME,`${t}`)}get videoTitle(){var t,e;return(e=(t=this.getAttribute(w.VIDEO_TITLE))!=null?t:this.getAttribute(w.TITLE))!=null?e:""}set videoTitle(t){t!==this.videoTitle&&(t?this.setAttribute(w.VIDEO_TITLE,t):this.removeAttribute(w.VIDEO_TITLE))}get placeholder(){var t;return(t=Pt(this,w.PLACEHOLDER))!=null?t:""}set placeholder(t){this.setAttribute(w.PLACEHOLDER,`${t}`)}get primaryColor(){var t,e;let i=this.getAttribute(w.PRIMARY_COLOR);if(i!=null||this.mediaTheme&&(i=(e=(t=Qt.getComputedStyle(this.mediaTheme))==null?void 0:t.getPropertyValue("--_primary-color"))==null?void 0:e.trim(),i))return i}set primaryColor(t){this.setAttribute(w.PRIMARY_COLOR,`${t}`)}get secondaryColor(){var t,e;let i=this.getAttribute(w.SECONDARY_COLOR);if(i!=null||this.mediaTheme&&(i=(e=(t=Qt.getComputedStyle(this.mediaTheme))==null?void 0:t.getPropertyValue("--_secondary-color"))==null?void 0:e.trim(),i))return i}set secondaryColor(t){this.setAttribute(w.SECONDARY_COLOR,`${t}`)}get accentColor(){var t,e;let i=this.getAttribute(w.ACCENT_COLOR);if(i!=null||this.mediaTheme&&(i=(e=(t=Qt.getComputedStyle(this.mediaTheme))==null?void 0:t.getPropertyValue("--_accent-color"))==null?void 0:e.trim(),i))return i}set accentColor(t){this.setAttribute(w.ACCENT_COLOR,`${t}`)}get defaultShowRemainingTime(){return this.hasAttribute(w.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(t){t?this.setAttribute(w.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(w.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(w.PLAYBACK_RATES))return this.getAttribute(w.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(t=>Number(t)).filter(t=>!Number.isNaN(t)).sort((t,e)=>t-e)}set playbackRates(t){if(!t){this.removeAttribute(w.PLAYBACK_RATES);return}this.setAttribute(w.PLAYBACK_RATES,t.join(" "))}get forwardSeekOffset(){var t;return(t=Fe(this.getAttribute(w.FORWARD_SEEK_OFFSET)))!=null?t:10}set forwardSeekOffset(t){this.setAttribute(w.FORWARD_SEEK_OFFSET,`${t}`)}get backwardSeekOffset(){var t;return(t=Fe(this.getAttribute(w.BACKWARD_SEEK_OFFSET)))!=null?t:10}set backwardSeekOffset(t){this.setAttribute(w.BACKWARD_SEEK_OFFSET,`${t}`)}get defaultHiddenCaptions(){return this.hasAttribute(w.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(t){t?this.setAttribute(w.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(w.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return Fe(this.getAttribute(w.DEFAULT_DURATION))}set defaultDuration(t){t==null?this.removeAttribute(w.DEFAULT_DURATION):this.setAttribute(w.DEFAULT_DURATION,`${t}`)}get playerInitTime(){return this.hasAttribute(E.PLAYER_INIT_TIME)?Fe(this.getAttribute(E.PLAYER_INIT_TIME)):H(this,Eo)}set playerInitTime(t){t!=this.playerInitTime&&(t==null?this.removeAttribute(E.PLAYER_INIT_TIME):this.setAttribute(E.PLAYER_INIT_TIME,`${+t}`))}get playerSoftwareName(){var t;return(t=this.getAttribute(E.PLAYER_SOFTWARE_NAME))!=null?t:Bm}get playerSoftwareVersion(){var t;return(t=this.getAttribute(E.PLAYER_SOFTWARE_VERSION))!=null?t:Hm}get beaconCollectionDomain(){var t;return(t=this.getAttribute(E.BEACON_COLLECTION_DOMAIN))!=null?t:void 0}set beaconCollectionDomain(t){t!==this.beaconCollectionDomain&&(t?this.setAttribute(E.BEACON_COLLECTION_DOMAIN,t):this.removeAttribute(E.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var t;return(t=this.getAttribute(E.MAX_RESOLUTION))!=null?t:void 0}set maxResolution(t){t!==this.maxResolution&&(t?this.setAttribute(E.MAX_RESOLUTION,t):this.removeAttribute(E.MAX_RESOLUTION))}get minResolution(){var t;return(t=this.getAttribute(E.MIN_RESOLUTION))!=null?t:void 0}set minResolution(t){t!==this.minResolution&&(t?this.setAttribute(E.MIN_RESOLUTION,t):this.removeAttribute(E.MIN_RESOLUTION))}get maxAutoResolution(){var t;return(t=this.getAttribute(E.MAX_AUTO_RESOLUTION))!=null?t:void 0}set maxAutoResolution(t){t==null?this.removeAttribute(E.MAX_AUTO_RESOLUTION):this.setAttribute(E.MAX_AUTO_RESOLUTION,t)}get renditionOrder(){var t;return(t=this.getAttribute(E.RENDITION_ORDER))!=null?t:void 0}set renditionOrder(t){t!==this.renditionOrder&&(t?this.setAttribute(E.RENDITION_ORDER,t):this.removeAttribute(E.RENDITION_ORDER))}get programStartTime(){return Fe(this.getAttribute(E.PROGRAM_START_TIME))}set programStartTime(t){t==null?this.removeAttribute(E.PROGRAM_START_TIME):this.setAttribute(E.PROGRAM_START_TIME,`${t}`)}get programEndTime(){return Fe(this.getAttribute(E.PROGRAM_END_TIME))}set programEndTime(t){t==null?this.removeAttribute(E.PROGRAM_END_TIME):this.setAttribute(E.PROGRAM_END_TIME,`${t}`)}get assetStartTime(){return Fe(this.getAttribute(E.ASSET_START_TIME))}set assetStartTime(t){t==null?this.removeAttribute(E.ASSET_START_TIME):this.setAttribute(E.ASSET_START_TIME,`${t}`)}get assetEndTime(){return Fe(this.getAttribute(E.ASSET_END_TIME))}set assetEndTime(t){t==null?this.removeAttribute(E.ASSET_END_TIME):this.setAttribute(E.ASSET_END_TIME,`${t}`)}get extraSourceParams(){return this.hasAttribute(w.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(w.EXTRA_SOURCE_PARAMS)).entries()].reduce((t,[e,i])=>(t[e]=i,t),{}):nS}set extraSourceParams(t){t==null?this.removeAttribute(w.EXTRA_SOURCE_PARAMS):this.setAttribute(w.EXTRA_SOURCE_PARAMS,new URLSearchParams(t).toString())}get customDomain(){var t;return(t=this.getAttribute(E.CUSTOM_DOMAIN))!=null?t:void 0}set customDomain(t){t!==this.customDomain&&(t?this.setAttribute(E.CUSTOM_DOMAIN,t):this.removeAttribute(E.CUSTOM_DOMAIN))}get envKey(){var t;return(t=Pt(this,E.ENV_KEY))!=null?t:void 0}set envKey(t){this.setAttribute(E.ENV_KEY,`${t}`)}get noVolumePref(){return this.hasAttribute(w.NO_VOLUME_PREF)}set noVolumePref(t){t?this.setAttribute(w.NO_VOLUME_PREF,""):this.removeAttribute(w.NO_VOLUME_PREF)}get noMutedPref(){return this.hasAttribute(w.NO_MUTED_PREF)}set noMutedPref(t){t?this.setAttribute(w.NO_MUTED_PREF,""):this.removeAttribute(w.NO_MUTED_PREF)}get debug(){return Pt(this,E.DEBUG)!=null}set debug(t){t?this.setAttribute(E.DEBUG,""):this.removeAttribute(E.DEBUG)}get disableTracking(){return Pt(this,E.DISABLE_TRACKING)!=null}set disableTracking(t){this.toggleAttribute(E.DISABLE_TRACKING,!!t)}get disableCookies(){return Pt(this,E.DISABLE_COOKIES)!=null}set disableCookies(t){t?this.setAttribute(E.DISABLE_COOKIES,""):this.removeAttribute(E.DISABLE_COOKIES)}get streamType(){var t,e,i;return(i=(e=this.getAttribute(E.STREAM_TYPE))!=null?e:(t=this.media)==null?void 0:t.streamType)!=null?i:J.UNKNOWN}set streamType(t){this.setAttribute(E.STREAM_TYPE,`${t}`)}get defaultStreamType(){var t,e,i;return(i=(e=this.getAttribute(w.DEFAULT_STREAM_TYPE))!=null?e:(t=this.mediaController)==null?void 0:t.getAttribute(w.DEFAULT_STREAM_TYPE))!=null?i:J.ON_DEMAND}set defaultStreamType(t){t?this.setAttribute(w.DEFAULT_STREAM_TYPE,t):this.removeAttribute(w.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var t,e;return this.hasAttribute(w.TARGET_LIVE_WINDOW)?+this.getAttribute(w.TARGET_LIVE_WINDOW):(e=(t=this.media)==null?void 0:t.targetLiveWindow)!=null?e:Number.NaN}set targetLiveWindow(t){t==this.targetLiveWindow||Number.isNaN(t)&&Number.isNaN(this.targetLiveWindow)||(t==null?this.removeAttribute(w.TARGET_LIVE_WINDOW):this.setAttribute(w.TARGET_LIVE_WINDOW,`${+t}`))}get liveEdgeStart(){var t;return(t=this.media)==null?void 0:t.liveEdgeStart}get startTime(){return Fe(Pt(this,E.START_TIME))}set startTime(t){this.setAttribute(E.START_TIME,`${t}`)}get initialBandwidthEstimateKbps(){return Fe(Pt(this,E.INITIAL_BANDWIDTH_ESTIMATE_KBPS))}set initialBandwidthEstimateKbps(t){t==null?this.removeAttribute(E.INITIAL_BANDWIDTH_ESTIMATE_KBPS):this.setAttribute(E.INITIAL_BANDWIDTH_ESTIMATE_KBPS,`${t}`)}get initialEstimateSegments(){return Fe(Pt(this,E.INITIAL_ESTIMATE_SEGMENTS))}set initialEstimateSegments(t){t==null?this.removeAttribute(E.INITIAL_ESTIMATE_SEGMENTS):this.setAttribute(E.INITIAL_ESTIMATE_SEGMENTS,`${t}`)}get minPreloadSegments(){return Fe(Pt(this,E.MIN_PRELOAD_SEGMENTS))}set minPreloadSegments(t){t==null?this.removeAttribute(E.MIN_PRELOAD_SEGMENTS):this.setAttribute(E.MIN_PRELOAD_SEGMENTS,`${t}`)}get preferPlayback(){let t=this.getAttribute(E.PREFER_PLAYBACK);if(t===Zt.MSE||t===Zt.NATIVE)return t}set preferPlayback(t){t!==this.preferPlayback&&(t===Zt.MSE||t===Zt.NATIVE?this.setAttribute(E.PREFER_PLAYBACK,t):this.removeAttribute(E.PREFER_PLAYBACK))}get metadata(){var t;return(t=this.media)==null?void 0:t.metadata}set metadata(t){if(be(this,pe,ci).call(this),!this.media){Ge("underlying media element missing when trying to set metadata. metadata will not be set.");return}this.media.metadata={...dn(this),...t}}get _hlsConfig(){var t;return(t=this.media)==null?void 0:t._hlsConfig}set _hlsConfig(t){if(be(this,pe,ci).call(this),!this.media){Ge("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.");return}this.media._hlsConfig=t}async addCuePoints(t){var e;if(be(this,pe,ci).call(this),!this.media){Ge("underlying media element missing when trying to addCuePoints. cuePoints will not be added.");return}return(e=this.media)==null?void 0:e.addCuePoints(t)}get activeCuePoint(){var t;return(t=this.media)==null?void 0:t.activeCuePoint}get cuePoints(){var t,e;return(e=(t=this.media)==null?void 0:t.cuePoints)!=null?e:[]}addChapters(t){var e;if(be(this,pe,ci).call(this),!this.media){Ge("underlying media element missing when trying to addChapters. chapters will not be added.");return}return(e=this.media)==null?void 0:e.addChapters(t)}get activeChapter(){var t;return(t=this.media)==null?void 0:t.activeChapter}get chapters(){var t,e;return(e=(t=this.media)==null?void 0:t.chapters)!=null?e:[]}getStartDate(){var t;return(t=this.media)==null?void 0:t.getStartDate()}get currentPdt(){var t;return(t=this.media)==null?void 0:t.currentPdt}get tokens(){let t=this.getAttribute(w.PLAYBACK_TOKEN),e=this.getAttribute(w.DRM_TOKEN),i=this.getAttribute(w.THUMBNAIL_TOKEN),a=this.getAttribute(w.STORYBOARD_TOKEN);return{...H(this,_o),...t!=null?{playback:t}:{},...e!=null?{drm:e}:{},...i!=null?{thumbnail:i}:{},...a!=null?{storyboard:a}:{}}}set tokens(t){ze(this,_o,t??{})}get playbackToken(){var t;return(t=this.getAttribute(w.PLAYBACK_TOKEN))!=null?t:void 0}set playbackToken(t){this.setAttribute(w.PLAYBACK_TOKEN,`${t}`)}get drmToken(){var t;return(t=this.getAttribute(w.DRM_TOKEN))!=null?t:void 0}set drmToken(t){this.setAttribute(w.DRM_TOKEN,`${t}`)}get thumbnailToken(){var t;return(t=this.getAttribute(w.THUMBNAIL_TOKEN))!=null?t:void 0}set thumbnailToken(t){this.setAttribute(w.THUMBNAIL_TOKEN,`${t}`)}get storyboardToken(){var t;return(t=this.getAttribute(w.STORYBOARD_TOKEN))!=null?t:void 0}set storyboardToken(t){this.setAttribute(w.STORYBOARD_TOKEN,`${t}`)}addTextTrack(t,e,i,a){var r;let n=(r=this.media)==null?void 0:r.nativeEl;if(n)return Cu(n,t,e,i,a)}removeTextTrack(t){var e;let i=(e=this.media)==null?void 0:e.nativeEl;if(i)return Hg(i,t)}get textTracks(){var t;return(t=this.media)==null?void 0:t.textTracks}get castReceiver(){var t;return(t=this.getAttribute(w.CAST_RECEIVER))!=null?t:void 0}set castReceiver(t){t!==this.castReceiver&&(t?this.setAttribute(w.CAST_RECEIVER,t):this.removeAttribute(w.CAST_RECEIVER))}get castCustomData(){var t;return(t=this.media)==null?void 0:t.castCustomData}set castCustomData(t){if(!this.media){Ge("underlying media element missing when trying to set castCustomData. castCustomData will not be set.");return}this.media.castCustomData=t}get noTooltips(){return this.hasAttribute(w.NO_TOOLTIPS)}set noTooltips(t){if(!t){this.removeAttribute(w.NO_TOOLTIPS);return}this.setAttribute(w.NO_TOOLTIPS,"")}get proudlyDisplayMuxBadge(){return this.hasAttribute(w.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(t){t?this.setAttribute(w.PROUDLY_DISPLAY_MUX_BADGE,""):this.removeAttribute(w.PROUDLY_DISPLAY_MUX_BADGE)}get capRenditionToPlayerSize(){var t;return(t=this.media)==null?void 0:t.capRenditionToPlayerSize}set capRenditionToPlayerSize(t){if(!this.media){Ge("underlying media element missing when trying to set capRenditionToPlayerSize");return}this.media.capRenditionToPlayerSize=t}get maxReconnectRetries(){var t;return(t=this.media)==null?void 0:t.maxReconnectRetries}set maxReconnectRetries(t){if(!this.media){Ge("underlying media element missing when trying to set maxReconnectRetries");return}this.media.maxReconnectRetries=t}};Eo=new WeakMap,gn=new WeakMap,_o=new WeakMap,ra=new WeakMap,bo=new WeakMap,yn=new WeakMap,Zo=new WeakMap,Xo=new WeakMap,ur=new WeakMap,Jo=new WeakMap,el=new WeakMap,tl=new WeakMap,Tn=new WeakMap,cr=new WeakMap,il=new WeakMap,pe=new WeakSet,ci=function(){var t,e,i,a;if(!H(this,gn)){ze(this,gn,!0),be(this,pe,ua).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof Qt.HTMLElement))throw""}catch{Ge("<media-theme> failed to upgrade!")}try{customElements.upgrade(this.media)}catch{Ge("underlying media element failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof L1))throw""}catch{Ge("<media-controller> failed to upgrade!")}be(this,pe,Fm).call(this),be(this,pe,Km).call(this),be(this,pe,Vm).call(this),ze(this,ra,(e=(t=this.mediaController)==null?void 0:t.hasAttribute(U.USER_INACTIVE))!=null?e:!0),be(this,pe,qm).call(this),(i=this.media)==null||i.addEventListener("streamtypechange",H(this,Zo)),(a=this.media)==null||a.addEventListener("loadstart",H(this,Xo)),this.media&&(this.media.metadata=dn(this))}},nE=function(){var t,e;try{(t=window?.CSS)==null||t.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),(e=window?.CSS)==null||e.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},vu=function(t){Object.assign(H(this,cr),t),be(this,pe,ua).call(this)},ua=function(t={}){Hk(Wk(Xk(this,{...H(this,cr),...t})),this.shadowRoot)},Fm=function(){let t=e=>{var i,a;if(!(e!=null&&e.startsWith("theme-")))return;let r=e.replace(/^theme-/,"");if(pu.includes(r))return;let n=this.getAttribute(e);n!=null?(i=this.mediaTheme)==null||i.setAttribute(r,n):(a=this.mediaTheme)==null||a.removeAttribute(r)};ze(this,yn,new MutationObserver(e=>{for(let{attributeName:i}of e)t(i)})),H(this,yn).observe(this,{attributes:!0}),this.getAttributeNames().forEach(t)},Km=function(){var t,e;this.addEventListener("error",H(this,il)),this.addEventListener("click",H(this,Jo)),(t=this.mediaTheme)==null||t.addEventListener("close",H(this,el)),(e=this.mediaTheme)==null||e.addEventListener("focusin",H(this,tl)),this.media&&(this.media.errorTranslator=(i={})=>{var a,r,n;if(!(((a=this.media)==null?void 0:a.error)instanceof L))return i;let s=aE((r=this.media)==null?void 0:r.error);return{player_error_code:(n=this.media)==null?void 0:n.error.code,player_error_message:s.message?String(s.message):i.player_error_message,player_error_context:s.context?String(s.context):i.player_error_context}})},Vm=function(){var t,e,i,a;(e=(t=this.media)==null?void 0:t.textTracks)==null||e.addEventListener("addtrack",H(this,ur)),(a=(i=this.media)==null?void 0:i.textTracks)==null||a.addEventListener("removetrack",H(this,ur))},qm=function(){var t,e;if(!/Firefox/i.test(navigator.userAgent))return;let i,a=new WeakMap,r=()=>this.streamType===J.LIVE&&!this.secondaryColor&&this.offsetWidth>=800,n=(d,m,p=!1)=>{r()||Array.from(d&&d.activeCues||[]).forEach(c=>{if(!(!c.snapToLines||c.line<-5||c.line>=0&&c.line<10))if(!m||this.paused){let u=c.text.split(`
`).length,v=-3;this.streamType===J.LIVE&&(v=-2);let g=v-u;if(c.line===g&&!p)return;a.has(c)||a.set(c,c.line),c.line=g}else setTimeout(()=>{c.line=a.get(c)||"auto"},500)})},s=()=>{var d,m;n(i,(m=(d=this.mediaController)==null?void 0:d.hasAttribute(U.USER_INACTIVE))!=null?m:!1)},o=()=>{var d,m;let p=Array.from(((m=(d=this.mediaController)==null?void 0:d.media)==null?void 0:m.textTracks)||[]).filter(c=>["subtitles","captions"].includes(c.kind)&&c.mode==="showing")[0];p!==i&&i?.removeEventListener("cuechange",s),i=p,i?.addEventListener("cuechange",s),n(i,H(this,ra))};o(),(t=this.textTracks)==null||t.addEventListener("change",o),(e=this.textTracks)==null||e.addEventListener("addtrack",o);let l=()=>{var d,m;let p=(m=(d=this.mediaController)==null?void 0:d.hasAttribute(U.USER_INACTIVE))!=null?m:!0;H(this,ra)!==p&&(ze(this,ra,p),n(i,H(this,ra)))};this.addEventListener("userinactivechange",l),ze(this,Tn,()=>{var d,m;i?.removeEventListener("cuechange",s),(d=this.textTracks)==null||d.removeEventListener("change",o),(m=this.textTracks)==null||m.removeEventListener("addtrack",o),this.removeEventListener("userinactivechange",l)})};function Pt(t,e){return t.media?t.media.getAttribute(e):t.getAttribute(e)}var Ym=sS,sE=class{addEventListener(){}removeEventListener(){}dispatchEvent(t){return!0}};if(typeof DocumentFragment>"u"){class t extends sE{}globalThis.DocumentFragment=t}var oS=class extends sE{},lS={get(t){},define(t,e,i){},getName(t){return null},upgrade(t){},whenDefined(t){return Promise.resolve(oS)}},dS={customElements:lS},uS=typeof window>"u"||typeof globalThis.customElements>"u",Gl=uS?dS:globalThis;Gl.customElements.get("mux-player")||(Gl.customElements.define("mux-player",Ym),Gl.MuxPlayerElement=Ym);var oE=parseInt(An.version)>=19,Gm={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"},cS=t=>t==null,hS=(t,e)=>cS(e)?!1:t in e,mS=t=>t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),pS=(t,e)=>{if(!(!oE&&typeof e=="boolean"&&!e)){if(hS(t,Gm))return Gm[t];if(typeof e<"u")return/[A-Z]/.test(t)?mS(t):t}},vS=(t,e)=>!oE&&typeof t=="boolean"?"":t,fS=(t={})=>{let{ref:e,...i}=t;return Object.entries(i).reduce((a,[r,n])=>{let s=pS(r,n);if(!s)return a;let o=vS(n);return a[s]=o,a},{})};function jm(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function ES(...t){return e=>{let i=!1,a=t.map(r=>{let n=jm(r,e);return!i&&typeof n=="function"&&(i=!0),n});if(i)return()=>{for(let r=0;r<a.length;r++){let n=a[r];typeof n=="function"?n():jm(t[r],null)}}}}function _S(...t){return kn.useCallback(ES(...t),t)}var bS=Object.prototype.hasOwnProperty,gS=(t,e)=>{if(Object.is(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;if(Array.isArray(t))return!Array.isArray(e)||t.length!==e.length?!1:t.some((r,n)=>e[n]===r);let i=Object.keys(t),a=Object.keys(e);if(i.length!==a.length)return!1;for(let r=0;r<i.length;r++)if(!bS.call(e,i[r])||!Object.is(t[i[r]],e[i[r]]))return!1;return!0},lE=(t,e,i)=>!gS(e,t[i]),yS=(t,e,i)=>{t[i]=e},TS=(t,e,i,a=yS,r=lE)=>kn.useEffect(()=>{let n=i?.current;n&&r(n,e,t)&&a(n,e,t)},[i?.current,e]),gt=TS,AS=()=>{try{return"3.14.1"}catch{}return"UNKNOWN"},kS=AS(),SS=()=>kS,ue=(t,e,i)=>kn.useEffect(()=>{let a=e?.current;if(!a||!i)return;let r=t,n=i;return a.addEventListener(r,n),()=>{a.removeEventListener(r,n)}},[e?.current,i,t]),wS=An.forwardRef(({children:t,...e},i)=>An.createElement("mux-player",{suppressHydrationWarning:!0,...fS(e),ref:i},t)),IS=(t,e)=>{var i;let{onAbort:a,onCanPlay:r,onCanPlayThrough:n,onEmptied:s,onLoadStart:o,onLoadedData:l,onLoadedMetadata:d,onProgress:m,onDurationChange:p,onVolumeChange:c,onRateChange:u,onResize:v,onWaiting:g,onPlay:_,onPlaying:y,onTimeUpdate:f,onPause:T,onSeeking:I,onSeeked:k,onStalled:C,onSuspend:S,onEnded:P,onError:q,onCuePointChange:B,onChapterChange:W,metadata:se,tokens:oe,paused:He,playbackId:Je,playbackRates:et,currentTime:Se,themeProps:we,extraSourceParams:Et,castCustomData:tt,_hlsConfig:Me,...ii}=e;return gt("tokens",oe,t),gt("playbackId",Je,t),gt("playbackRates",et,t),gt("metadata",se,t),gt("disableCookies",(i=e.disableCookies)!=null?i:!1,t),gt("extraSourceParams",Et,t),gt("_hlsConfig",Me,t),gt("themeProps",we,t),gt("castCustomData",tt,t),gt("paused",He,t,(Be,Ke)=>{Ke!=null&&(Ke?Be.pause():Be.play())},(Be,Ke,ai)=>Be.hasAttribute("autoplay")&&!Be.hasPlayed?!1:lE(Be,Ke,ai)),gt("currentTime",Se,t,(Be,Ke)=>{Ke!=null&&(Be.currentTime=Ke)}),ue("abort",t,a),ue("canplay",t,r),ue("canplaythrough",t,n),ue("emptied",t,s),ue("loadstart",t,o),ue("loadeddata",t,l),ue("loadedmetadata",t,d),ue("progress",t,m),ue("durationchange",t,p),ue("volumechange",t,c),ue("ratechange",t,u),ue("resize",t,v),ue("waiting",t,g),ue("play",t,_),ue("playing",t,y),ue("timeupdate",t,f),ue("pause",t,T),ue("seeking",t,I),ue("seeked",t,k),ue("stalled",t,C),ue("suspend",t,S),ue("ended",t,P),ue("error",t,q),ue("cuepointchange",t,B),ue("chapterchange",t,W),[ii]},RS=SS(),CS="mux-player-react",LS=An.forwardRef((t,e)=>{var i;let a=kn.useRef(null),r=_S(a,e),[n]=IS(a,t),[s]=kn.useState((i=t.playerInitTime)!=null?i:Nu());return An.createElement(wS,{ref:r,defaultHiddenCaptions:t.defaultHiddenCaptions,playerSoftwareName:CS,playerSoftwareVersion:RS,playerInitTime:s,...n})}),QS=LS;export{NS as MaxResolution,L as MediaError,PS as MinResolution,US as RenditionOrder,QS as default,Nu as generatePlayerInitTime,CS as playerSoftwareName,RS as playerSoftwareVersion};
