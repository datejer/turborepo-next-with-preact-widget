!function(){var _,e,t,n,o,r,i,l,u,c,f={},a=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,p=Array.isArray;function h(_,e){for(var t in e)_[t]=e[t];return _}function d(_){var e=_.parentNode;e&&e.removeChild(_)}function v(e,t,n){var o,r,i,l={};for(i in t)"key"==i?o=t[i]:"ref"==i?r=t[i]:l[i]=t[i];if(arguments.length>2&&(l.children=arguments.length>3?_.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===l[i]&&(l[i]=e.defaultProps[i]);return y(e,l,o,r,null)}function y(_,n,o,r,i){var l={type:_,props:n,key:o,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==i?++t:i,__i:-1,__u:0};return null==i&&null!=e.vnode&&e.vnode(l),l}function m(_){return _.children}function g(_,e){this.props=_,this.context=e}function b(_,e){if(null==e)return _.__?b(_.__,_.__i+1):null;for(var t;e<_.__k.length;e++)if(null!=(t=_.__k[e])&&null!=t.__e)return t.__e;return"function"==typeof _.type?b(_):null}function k(_){var e,t;if(null!=(_=_.__)&&null!=_.__c){for(_.__e=_.__c.base=null,e=0;e<_.__k.length;e++)if(null!=(t=_.__k[e])&&null!=t.__e){_.__e=_.__c.base=t.__e;break}return k(_)}}function w(_){(!_.__d&&(_.__d=!0)&&n.push(_)&&!E.__r++||o!==e.debounceRendering)&&((o=e.debounceRendering)||r)(E)}function E(){var _,t,o,r,l,u,c,f;for(n.sort(i);_=n.shift();)_.__d&&(t=n.length,r=void 0,u=(l=(o=_).__v).__e,c=[],f=[],o.__P&&((r=h({},l)).__v=l.__v+1,e.vnode&&e.vnode(r),U(o.__P,r,l,o.__n,o.__P.namespaceURI,32&l.__u?[u]:null,c,null==u?b(l):u,!!(32&l.__u),f),r.__v=l.__v,r.__.__k[r.__i]=r,L(c,r,f),r.__e!=u&&k(r)),n.length>t&&n.sort(i));E.__r=0}function H(_,e,t,n,o,r,i,l,u,c,s){var p,h,d,v,y,m=n&&n.__k||a,g=e.length;for(t.__d=u,S(t,e,m),u=t.__d,p=0;p<g;p++)null!=(d=t.__k[p])&&"boolean"!=typeof d&&"function"!=typeof d&&(h=-1===d.__i?f:m[d.__i]||f,d.__i=p,U(_,d,h,o,r,i,l,u,c,s),v=d.__e,d.ref&&h.ref!=d.ref&&(h.ref&&A(h.ref,null,d),s.push(d.ref,d.__c||v,d)),null==y&&null!=v&&(y=v),65536&d.__u||h.__k===d.__k?(u&&"string"==typeof d.type&&!_.contains(u)&&(u=b(h)),u=x(d,u,_)):"function"==typeof d.type&&void 0!==d.__d?u=d.__d:v&&(u=v.nextSibling),d.__d=void 0,d.__u&=-196609);t.__d=u,t.__e=y}function S(_,e,t){var n,o,r,i,l,u=e.length,c=t.length,f=c,a=0;for(_.__k=[],n=0;n<u;n++)i=n+a,null!=(o=_.__k[n]=null==(o=e[n])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?y(null,o,null,null,null):p(o)?y(m,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?y(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=_,o.__b=_.__b+1,l=C(o,t,i,f),o.__i=l,r=null,-1!==l&&(f--,(r=t[l])&&(r.__u|=131072)),null==r||null===r.__v?(-1==l&&a--,"function"!=typeof o.type&&(o.__u|=65536)):l!==i&&(l==i-1?a=l-i:l==i+1?a++:l>i?f>u-i?a+=l-i:a--:l<i&&a++,l!==n+a&&(o.__u|=65536))):(r=t[i])&&null==r.key&&r.__e&&!(131072&r.__u)&&(r.__e==_.__d&&(_.__d=b(r)),D(r,r,!1),t[i]=null,f--);if(f)for(n=0;n<c;n++)null!=(r=t[n])&&!(131072&r.__u)&&(r.__e==_.__d&&(_.__d=b(r)),D(r,r))}function x(_,e,t){var n,o;if("function"==typeof _.type){for(n=_.__k,o=0;n&&o<n.length;o++)n[o]&&(n[o].__=_,e=x(n[o],e,t));return e}_.__e!=e&&(t.insertBefore(_.__e,e||null),e=_.__e);do{e=e&&e.nextSibling}while(null!=e&&8===e.nodeType);return e}function C(_,e,t,n){var o=_.key,r=_.type,i=t-1,l=t+1,u=e[t];if(null===u||u&&o==u.key&&r===u.type&&!(131072&u.__u))return t;if(n>(null==u||131072&u.__u?0:1))for(;i>=0||l<e.length;){if(i>=0){if((u=e[i])&&!(131072&u.__u)&&o==u.key&&r===u.type)return i;i--}if(l<e.length){if((u=e[l])&&!(131072&u.__u)&&o==u.key&&r===u.type)return l;l++}}return-1}function P(_,e,t){"-"===e[0]?_.setProperty(e,null==t?"":t):_[e]=null==t?"":"number"!=typeof t||s.test(e)?t:t+"px"}function N(_,e,t,n,o){var r;_:if("style"===e)if("string"==typeof t)_.style.cssText=t;else{if("string"==typeof n&&(_.style.cssText=n=""),n)for(e in n)t&&e in t||P(_.style,e,"");if(t)for(e in t)n&&t[e]===n[e]||P(_.style,e,t[e])}else if("o"===e[0]&&"n"===e[1])r=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in _||"onFocusOut"===e||"onFocusIn"===e?e.toLowerCase().slice(2):e.slice(2),_.l||(_.l={}),_.l[e+r]=t,t?n?t.u=n.u:(t.u=l,_.addEventListener(e,r?c:u,r)):_.removeEventListener(e,r?c:u,r);else{if("http://www.w3.org/2000/svg"==o)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=e&&"height"!=e&&"href"!=e&&"list"!=e&&"form"!=e&&"tabIndex"!=e&&"download"!=e&&"rowSpan"!=e&&"colSpan"!=e&&"role"!=e&&"popover"!=e&&e in _)try{_[e]=null==t?"":t;break _}catch(_){}"function"==typeof t||(null==t||!1===t&&"-"!==e[4]?_.removeAttribute(e):_.setAttribute(e,"popover"==e&&1==t?"":t))}}function T(_){return function(t){if(this.l){var n=this.l[t.type+_];if(null==t.t)t.t=l++;else if(t.t<n.u)return;return n(e.event?e.event(t):t)}}}function U(_,t,n,o,r,i,l,u,c,f){var a,s,d,v,y,b,k,w,E,S,x,C,P,N,T,U,L=t.type;if(void 0!==t.constructor)return null;128&n.__u&&(c=!!(32&n.__u),i=[u=t.__e=n.__e]),(a=e.__b)&&a(t);_:if("function"==typeof L)try{if(w=t.props,E="prototype"in L&&L.prototype.render,S=(a=L.contextType)&&o[a.__c],x=a?S?S.props.value:a.__:o,n.__c?k=(s=t.__c=n.__c).__=s.__E:(E?t.__c=s=new L(w,x):(t.__c=s=new g(w,x),s.constructor=L,s.render=F),S&&S.sub(s),s.props=w,s.state||(s.state={}),s.context=x,s.__n=o,d=s.__d=!0,s.__h=[],s._sb=[]),E&&null==s.__s&&(s.__s=s.state),E&&null!=L.getDerivedStateFromProps&&(s.__s==s.state&&(s.__s=h({},s.__s)),h(s.__s,L.getDerivedStateFromProps(w,s.__s))),v=s.props,y=s.state,s.__v=t,d)E&&null==L.getDerivedStateFromProps&&null!=s.componentWillMount&&s.componentWillMount(),E&&null!=s.componentDidMount&&s.__h.push(s.componentDidMount);else{if(E&&null==L.getDerivedStateFromProps&&w!==v&&null!=s.componentWillReceiveProps&&s.componentWillReceiveProps(w,x),!s.__e&&(null!=s.shouldComponentUpdate&&!1===s.shouldComponentUpdate(w,s.__s,x)||t.__v===n.__v)){for(t.__v!==n.__v&&(s.props=w,s.state=s.__s,s.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(_){_&&(_.__=t)}),C=0;C<s._sb.length;C++)s.__h.push(s._sb[C]);s._sb=[],s.__h.length&&l.push(s);break _}null!=s.componentWillUpdate&&s.componentWillUpdate(w,s.__s,x),E&&null!=s.componentDidUpdate&&s.__h.push(function(){s.componentDidUpdate(v,y,b)})}if(s.context=x,s.props=w,s.__P=_,s.__e=!1,P=e.__r,N=0,E){for(s.state=s.__s,s.__d=!1,P&&P(t),a=s.render(s.props,s.state,s.context),T=0;T<s._sb.length;T++)s.__h.push(s._sb[T]);s._sb=[]}else do{s.__d=!1,P&&P(t),a=s.render(s.props,s.state,s.context),s.state=s.__s}while(s.__d&&++N<25);s.state=s.__s,null!=s.getChildContext&&(o=h(h({},o),s.getChildContext())),E&&!d&&null!=s.getSnapshotBeforeUpdate&&(b=s.getSnapshotBeforeUpdate(v,y)),H(_,p(U=null!=a&&a.type===m&&null==a.key?a.props.children:a)?U:[U],t,n,o,r,i,l,u,c,f),s.base=t.__e,t.__u&=-161,s.__h.length&&l.push(s),k&&(s.__E=s.__=null)}catch(_){t.__v=null,c||null!=i?(t.__e=u,t.__u|=c?160:32,i[i.indexOf(u)]=null):(t.__e=n.__e,t.__k=n.__k),e.__e(_,t,n)}else null==i&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=M(n.__e,t,n,o,r,i,l,c,f);(a=e.diffed)&&a(t)}function L(_,t,n){t.__d=void 0;for(var o=0;o<n.length;o++)A(n[o],n[++o],n[++o]);e.__c&&e.__c(t,_),_.some(function(t){try{_=t.__h,t.__h=[],_.some(function(_){_.call(t)})}catch(_){e.__e(_,t.__v)}})}function M(e,t,n,o,r,i,l,u,c){var a,s,h,v,y,m,g,k=n.props,w=t.props,E=t.type;if("svg"===E?r="http://www.w3.org/2000/svg":"math"===E?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),null!=i)for(a=0;a<i.length;a++)if((y=i[a])&&"setAttribute"in y==!!E&&(E?y.localName===E:3===y.nodeType)){e=y,i[a]=null;break}if(null==e){if(null===E)return document.createTextNode(w);e=document.createElementNS(r,E,w.is&&w),i=null,u=!1}if(null===E)k===w||u&&e.data===w||(e.data=w);else{if(i=i&&_.call(e.childNodes),k=n.props||f,!u&&null!=i)for(k={},a=0;a<e.attributes.length;a++)k[(y=e.attributes[a]).name]=y.value;for(a in k)if(y=k[a],"children"==a);else if("dangerouslySetInnerHTML"==a)h=y;else if("key"!==a&&!(a in w)){if("value"==a&&"defaultValue"in w||"checked"==a&&"defaultChecked"in w)continue;N(e,a,null,y,r)}for(a in w)y=w[a],"children"==a?v=y:"dangerouslySetInnerHTML"==a?s=y:"value"==a?m=y:"checked"==a?g=y:"key"===a||u&&"function"!=typeof y||k[a]===y||N(e,a,y,k[a],r);if(s)u||h&&(s.__html===h.__html||s.__html===e.innerHTML)||(e.innerHTML=s.__html),t.__k=[];else if(h&&(e.innerHTML=""),H(e,p(v)?v:[v],t,n,o,"foreignObject"===E?"http://www.w3.org/1999/xhtml":r,i,l,i?i[0]:n.__k&&b(n,0),u,c),null!=i)for(a=i.length;a--;)null!=i[a]&&d(i[a]);u||(a="value",void 0!==m&&(m!==e[a]||"progress"===E&&!m||"option"===E&&m!==k[a])&&N(e,a,m,k[a],r),a="checked",void 0!==g&&g!==e[a]&&N(e,a,g,k[a],r))}return e}function A(_,t,n){try{"function"==typeof _?_(t):_.current=t}catch(_){e.__e(_,n)}}function D(_,t,n){var o,r;if(e.unmount&&e.unmount(_),(o=_.ref)&&(o.current&&o.current!==_.__e||A(o,null,t)),null!=(o=_.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(_){e.__e(_,t)}o.base=o.__P=null}if(o=_.__k)for(r=0;r<o.length;r++)o[r]&&D(o[r],t,n||"function"!=typeof _.type);n||null==_.__e||d(_.__e),_.__c=_.__=_.__e=_.__d=void 0}function F(_,e,t){return this.constructor(_,t)}_=a.slice,e={__e:function(_,e,t,n){for(var o,r,i;e=e.__;)if((o=e.__c)&&!o.__)try{if((r=o.constructor)&&null!=r.getDerivedStateFromError&&(o.setState(r.getDerivedStateFromError(_)),i=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(_,n||{}),i=o.__d),i)return o.__E=o}catch(e){_=e}throw _}},t=0,g.prototype.setState=function(_,e){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=h({},this.state),"function"==typeof _&&(_=_(h({},t),this.props)),_&&h(t,_),null!=_&&this.__v&&(e&&this._sb.push(e),w(this))},g.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),w(this))},g.prototype.render=m,n=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,i=function(_,e){return _.__v.__b-e.__v.__b},E.__r=0,l=0,u=T(!1),c=T(!0);var O,W,I,j,R=function(_){var e,t=_.selector,n=_.inline,o=_.clientSpecified,r=[],i=document.currentScript||(e=document.getElementsByTagName("script"))[e.length-1];return!0===n&&r.push(i.parentNode),!0!==o||t||(t=function(_){var e=_.attributes,t=null;return Object.keys(e).forEach(function(_){e.hasOwnProperty(_)&&"data-mount-in"===e[_].name&&(t=e[_].nodeValue)}),t}(i)),t&&[].forEach.call(document.querySelectorAll(t),function(_){r.push(_)}),r},q=0,B=[],$=e,z=$.__b,V=$.__r,J=$.diffed,G=$.__c,K=$.unmount,Q=$.__;function X(_,e){$.__h&&$.__h(W,_,q||e),q=0;var t=W.__H||(W.__H={__:[],__h:[]});return _>=t.__.length&&t.__.push({}),t.__[_]}function Y(_){return q=1,function(_,e,t){var n=X(O++,2);if(n.t=_,!n.__c&&(n.__=[l_(void 0,e),function(_){var e=n.__N?n.__N[0]:n.__[0],t=n.t(e,_);e!==t&&(n.__N=[t,n.__[1]],n.__c.setState({}))}],n.__c=W,!W.u)){var o=function(_,e,t){if(!n.__c.__H)return!0;var o=n.__c.__H.__.filter(function(_){return!!_.__c});if(o.every(function(_){return!_.__N}))return!r||r.call(this,_,e,t);var i=!1;return o.forEach(function(_){if(_.__N){var e=_.__[0];_.__=_.__N,_.__N=void 0,e!==_.__[0]&&(i=!0)}}),!(!i&&n.__c.props===_)&&(!r||r.call(this,_,e,t))};W.u=!0;var r=W.shouldComponentUpdate,i=W.componentWillUpdate;W.componentWillUpdate=function(_,e,t){if(this.__e){var n=r;r=void 0,o(_,e,t),r=n}i&&i.call(this,_,e,t)},W.shouldComponentUpdate=o}return n.__N||n.__}(l_,_)}function Z(_,e){var t=X(O++,7);return function(_,e){return!_||_.length!==e.length||e.some(function(e,t){return e!==_[t]})}(t.__H,e)&&(t.__=_(),t.__H=e,t.__h=_),t.__}function __(){for(var _;_=B.shift();)if(_.__P&&_.__H)try{_.__H.__h.forEach(r_),_.__H.__h.forEach(i_),_.__H.__h=[]}catch(e){_.__H.__h=[],$.__e(e,_.__v)}}$.__b=function(_){W=null,z&&z(_)},$.__=function(_,e){_&&e.__k&&e.__k.__m&&(_.__m=e.__k.__m),Q&&Q(_,e)},$.__r=function(_){V&&V(_),O=0;var e=(W=_.__c).__H;e&&(I===W?(e.__h=[],W.__h=[],e.__.forEach(function(_){_.__N&&(_.__=_.__N),_.i=_.__N=void 0})):(e.__h.forEach(r_),e.__h.forEach(i_),e.__h=[],O=0)),I=W},$.diffed=function(_){J&&J(_);var e=_.__c;e&&e.__H&&(e.__H.__h.length&&(1!==B.push(e)&&j===$.requestAnimationFrame||((j=$.requestAnimationFrame)||o_)(__)),e.__H.__.forEach(function(_){_.i&&(_.__H=_.i),_.i=void 0})),I=W=null},$.__c=function(_,e){e.some(function(_){try{_.__h.forEach(r_),_.__h=_.__h.filter(function(_){return!_.__||i_(_)})}catch(t){e.some(function(_){_.__h&&(_.__h=[])}),e=[],$.__e(t,_.__v)}}),G&&G(_,e)},$.unmount=function(_){K&&K(_);var e,t=_.__c;t&&t.__H&&(t.__H.__.forEach(function(_){try{r_(_)}catch(_){e=_}}),t.__H=void 0,e&&$.__e(e,t.__v))};var e_,t_,n_="function"==typeof requestAnimationFrame;function o_(_){var e,t=function(){clearTimeout(n),n_&&cancelAnimationFrame(e),setTimeout(_)},n=setTimeout(t,100);n_&&(e=requestAnimationFrame(t))}function r_(_){var e=W,t=_.__c;"function"==typeof t&&(_.__c=void 0,t()),W=e}function i_(_){var e=W;_.__c=_.__(),W=e}function l_(_,e){return"function"==typeof e?e(_):e}t_=function(){var _=Y(!1),e=_[0],t=_[1],n=Y(0),o=n[0],r=n[1],i=function(_,e){return q=8,Z(function(){return _},e)}(function(){r(o+1)},[o]);return v("div",{style:{position:"relative"}},"Hello from preact widget!",v("button",{onClick:function(){return t(!e)}},"Toggle modal"),e&&v("div",{style:{position:"absolute",backgroundColor:"white",padding:10,border:"1px solid black",right:"50%",bottom:-100,color:"black",zIndex:10}},v("button",{onClick:i},"Increment"),v("p",null,o)))},e_={render:function(t){void 0===t&&(t={});var n=t.selector;void 0===n&&(n=null);var o=t.inline;void 0===o&&(o=!1);var r=t.clean;void 0===r&&(r=!1);var i=t.clientSpecified;void 0===i&&(i=!1);var l=t.defaultProps;void 0===l&&(l={});var u=R({selector:n,inline:o,clientSpecified:i}),c=function(){if(u.length>0){var t=R({selector:n,inline:o,clientSpecified:i});return function(t,n,o,r,i){n.forEach(function(n){var o=n;if(!o._habitat){o._habitat=!0;var l=function(_,e){void 0===e&&(e={});var t=_.attributes,n=Object.assign({},e);return Object.keys(t).forEach(function(_){if(t.hasOwnProperty(_)){var e=t[_].name;if(!e||"string"!=typeof e)return!1;var o=e.split(/(data-props?-)/).pop()||"";e!==(o=o.replace(/-([a-z])/gi,function(_,e){return e.toUpperCase()}))&&(n[o]=t[_].nodeValue)}}),[].forEach.call(_.getElementsByTagName("script"),function(_){var e={};if(_.hasAttribute("type")){if("text/props"!==_.getAttribute("type")&&"application/json"!==_.getAttribute("type"))return;try{e=JSON.parse(_.innerHTML)}catch(_){throw new Error(_)}Object.assign(n,e)}}),n}(n,i)||i;return r&&(o.innerHTML=""),function(t,n,o){var r,i,l;e.__&&e.__(t,n),r=n.__k,i=[],l=[],U(n,t=n.__k=v(m,null,[t]),r||f,f,n.namespaceURI,r?null:n.firstChild?_.call(n.childNodes):null,i,r?r.__e:n.firstChild,!1,l),L(i,t,l)}(v(t,l),o)}})}(t_,t,0,r,l)}};c(),document.addEventListener("DOMContentLoaded",c),document.addEventListener("load",c)}},e_.render({selector:".my-widget",inline:!1,clean:!0})}();