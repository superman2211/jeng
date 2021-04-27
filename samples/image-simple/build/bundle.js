(()=>{"use strict";var t,e,n="container";!function(t){t.numChildren=function(t){var e=t.children;return e?Array.isArray(e)?e.length:e.type?1:Object.keys(e).length:0}}(t||(t={})),function(t){function e(t,e){var n=t.children,r=e.renderer;if(n){var o=r.getContext();if(r.depth++,Array.isArray(n))for(var i=0;i<n.length;i++){var a=n[i];r.renderComponent(a,o)}else if(n.type){var u=n;r.renderComponent(u,o)}else for(var l=n,c=Object.keys(l),f=0;f<c.length;f++){var s=l[c[f]];r.renderComponent(s,o)}r.depth--}}function r(t,e){var n=t.children,r=e.updater;if(n){if(r.depth++,Array.isArray(n))for(var o=0;o<n.length;o++){var i=n[o];r.updateComponent(i)}else if(n.type){var a=n;r.updateComponent(a)}else for(var u=n,l=Object.keys(u),c=0;c<l.length;c++){var f=u[l[c]];r.updateComponent(f)}r.depth--}}function o(t,e){var n=t.children,r=e.pointers;if(n){var o=r.getContext();if(r.depth++,Array.isArray(n))for(var i=n.length-1;i>=0;i--){var a=n[i];if(r.dispatchComponent(a,o))return!0}else if(n.type){var u=n;if(r.dispatchComponent(u,o))return!0}else for(var l=n,c=Object.keys(l),f=c.length-1;f>=0;f--){var s=l[c[f]];if(r.dispatchComponent(s,o))return!0}r.depth--}return!1}function i(t,e){var n=t.children,r=e.loading;if(n){var o=r.getContext();if(r.depth++,Array.isArray(n))if(n.length){o.progress=0,o.loaded=!0;for(var i=0;i<n.length;i++){var a=n[i];r.updateComponent(a);var u=r.getContext();o.progress+=u.progress,u.loaded||(o.loaded=!1)}o.progress/=n.length}else o.progress=1;else if(n.type){var l=n;r.updateComponent(l);var c=r.getContext();o.progress=c.progress,o.loaded=c.loaded}else{var f=n,s=Object.keys(f);if(s.length){o.progress=0,o.loaded=!0;for(var p=0;p<s.length;p++){var h=f[s[p]];r.updateComponent(h);var d=r.getContext();o.progress+=d.progress,d.loaded||(o.loaded=!1)}o.progress/=s.length}else o.progress=1,o.loaded=!0}r.depth--}}t.render=e,t.update=r,t.hitTest=o,t.loaded=i,t.init=function(t){t.components.update.set(n,r),t.components.render.set(n,e),t.components.hitTest.set(n,o),t.components.loaded.set(n,i)}}(e||(e={}));var r,o,i,a,u,l,c,f,s,p="loader";!function(t){t.getLoadingProgress=function(t){var e;return null!==(e=t.loadingProgress)&&void 0!==e?e:0},t.isLoaded=function(t){var e;return null!==(e=t.loaded)&&void 0!==e&&e},t.needLoadingCheck=function(t){var e;return null===(e=t.loadingCheck)||void 0===e||e}}(r||(r={})),function(t){function n(t,n){if(r.needLoadingCheck(t)){e.loaded(t,n);var o=n.loading.getContext();t.loadingProgress=o.progress,o.loaded&&!t.loaded&&(t.loaded=!0,t.onLoaded&&t.onLoaded())}}t.loaded=n,t.init=function(t){t.components.update.set(p,e.update),t.components.render.set(p,e.render),t.components.hitTest.set(p,e.hitTest),t.components.loaded.set(p,n)}}(o||(o={})),function(t){t.empty=function(){return{alphaMultiplier:1,redMultiplier:1,greenMultiplier:1,blueMultiplier:1,alphaOffset:0,redOffset:0,greenOffset:0,blueOffset:0}},t.isEmpty=function(t){return 1===t.redMultiplier&&1===t.greenMultiplier&&1===t.blueMultiplier&&1===t.alphaMultiplier&&0===t.redOffset&&0===t.greenOffset&&0===t.blueOffset&&0===t.alphaOffset},t.isEmptyWithAlpha=function(t){return 1===t.redMultiplier&&1===t.greenMultiplier&&1===t.blueMultiplier&&0===t.redOffset&&0===t.greenOffset&&0===t.blueOffset&&0===t.alphaOffset},t.setEmpty=function(t){t.redMultiplier=1,t.greenMultiplier=1,t.blueMultiplier=1,t.alphaMultiplier=1,t.redOffset=0,t.greenOffset=0,t.blueOffset=0,t.alphaOffset=0},t.copy=function(t,e){e.alphaMultiplier=t.alphaMultiplier,e.redMultiplier=t.redMultiplier,e.greenMultiplier=t.greenMultiplier,e.blueMultiplier=t.blueMultiplier,e.alphaOffset=t.alphaOffset,e.redOffset=t.redOffset,e.greenOffset=t.greenOffset,e.blueOffset=t.blueOffset},t.concat=function(t,e,n){var r=t.alphaMultiplier*e.alphaMultiplier,o=t.redMultiplier*e.redMultiplier,i=t.greenMultiplier*e.greenMultiplier,a=t.blueMultiplier*e.blueMultiplier,u=t.alphaMultiplier*e.alphaOffset+t.alphaOffset,l=t.redMultiplier*e.redOffset+t.redOffset,c=t.greenMultiplier*e.greenOffset+t.greenOffset,f=t.blueMultiplier*e.blueOffset+t.blueOffset;n.alphaMultiplier=r,n.redMultiplier=o,n.greenMultiplier=i,n.blueMultiplier=a,n.alphaOffset=u,n.redOffset=l,n.greenOffset=c,n.blueOffset=f}}(i||(i={})),function(t){t.empty=function(){return{minX:Number.MAX_VALUE,minY:Number.MAX_VALUE,maxX:Number.MIN_VALUE,maxY:Number.MIN_VALUE}},t.setEmpty=function(t){t.minX=Number.MAX_VALUE,t.minY=Number.MAX_VALUE,t.maxX=Number.MIN_VALUE,t.maxY=Number.MIN_VALUE},t.isEmpty=function(t){return t.minX===Number.MAX_VALUE&&t.minY===Number.MAX_VALUE&&t.maxX===Number.MIN_VALUE&&t.maxY===Number.MIN_VALUE},t.toRectangle=function(t,e){var n=t.minX,r=t.minY,o=t.maxX,i=t.maxY;e.x=n,e.y=r,e.width=o-n,e.height=i-r},t.testX=function(t,e){t.minX>e?t.minX=e:t.maxX<e&&(t.maxX=e)},t.testY=function(t,e){t.minY>e?t.minY=e:t.maxY<e&&(t.maxY=e)},t.test=function(t,e,n){t.minX>e?t.minX=e:t.maxX<e&&(t.maxX=e),t.minY>n?t.minY=n:t.maxY<n&&(t.maxY=n)},t.testPoint=function(t,e){var n=e.x,r=e.y;t.minX>n?t.minX=n:t.maxX<n&&(t.maxX=n),t.minY>r?t.minY=r:t.maxY<r&&(t.maxY=r)}}(a||(a={})),function(t){function e(t){return t.a*t.d-t.b*t.c}t.empty=function(){return{a:1,b:0,c:0,d:1,tx:0,ty:0}},t.isEmpty=function(t){return 1===t.a&&0===t.b&&0===t.c&&1===t.d&&0===t.tx&&0===t.ty},t.setEmpty=function(t){t.a=1,t.b=0,t.c=0,t.d=1,t.tx=0,t.ty=0},t.copy=function(t,e){e.a=t.a,e.b=t.b,e.c=t.c,e.d=t.d,e.tx=t.tx,e.ty=t.ty},t.concat=function(t,e,n){var r=e.a*t.a+e.b*t.c,o=e.a*t.b+e.b*t.d,i=e.c*t.a+e.d*t.c,a=e.c*t.b+e.d*t.d,u=e.tx*t.a+e.ty*t.c+t.tx,l=e.tx*t.b+e.ty*t.d+t.ty;n.a=r,n.b=o,n.c=i,n.d=a,n.tx=u,n.ty=l},t.getDeterminant=e,t.invert=function(t,n){var r=e(t);0===r?(n.a=0,n.b=0,n.c=0,n.d=0,n.tx=-t.tx,n.ty=-t.ty):(r=1/r,n.a=t.a*r,n.b=-t.b*r,n.c=-t.c*r,n.d=t.d*r,n.tx=-n.a*t.tx-n.c*t.ty,n.ty=-n.b*t.tx-n.d*t.ty)},t.transformPoint=function(t,e,n){var r=e.x,o=e.y;n.x=r*t.a+o*t.c+t.tx,n.y=r*t.b+o*t.d+t.ty},t.transformPointLocal=function(t,e,n){var r=e.x,o=e.y;n.x=r*t.a+o*t.c,n.y=r*t.b+o*t.d},t.transformInversePoint=function(t,n,r){var o=e(t);if(0===o)r.x=-t.tx,r.y=-t.ty;else{o=1/o;var i=n.x,a=n.y;r.x=o*(t.c*(t.ty-a)+t.d*(i-t.tx)),r.y=o*(t.a*(a-t.ty)+t.b*(t.tx-i))}},t.transformBounds=function(t,e,n){var r=t.a,o=t.b,i=t.c,a=t.d,u=t.tx,l=t.ty,c=e.x,f=e.y,s=c+e.width,p=f+e.height,h=c*r+f*i+u,d=c*o+f*a+l,y=s*r+f*i+u,v=s*o+f*a+l,m=s*r+p*i+u,g=s*o+p*a+l,b=c*r+p*i+u,x=c*o+p*a+l,w=h;w>y&&(w=y),w>m&&(w=m),w>b&&(w=b);var O=d;O>v&&(O=v),O>g&&(O=g),O>x&&(O=x);var M=h;M<y&&(M=y),M<m&&(M=m),M<b&&(M=b);var P=d;P<v&&(P=v),P<g&&(P=g),P<x&&(P=x),n.x=w,n.y=O,n.width=M-w,n.height=P-O}}(u||(u={})),function(t){function e(t){var e=t.x,n=t.y;return Math.sqrt(e*e+n*n)}t.empty=function(){return{x:0,y:0}},t.length=e,t.angle=function(t){return Math.atan2(t.y,t.x)},t.isEmpty=function(t){return 0===t.x&&0===t.y},t.equals=function(t,e){return t.x===e.x&&t.y===e.y},t.setEmpty=function(t){t.x=0,t.y=0},t.copy=function(t,e){e.x=t.x,e.y=t.y},t.normalize=function(t,n){var r=e(t);r>0&&(r=n/r,t.x*=r,t.y*=r)},t.distance=function(t,e){var n=t.x-e.x,r=t.y-e.y;return Math.sqrt(n*n+r*r)},t.interpolate=function(t,e,n,r){r.x=t.x+n*(e.x-t.x),r.y=t.y+n*(e.y-t.y)},t.polar=function(t,e,n){t.x=e*Math.cos(n),t.y=e*Math.sin(n)}}(l||(l={})),function(t){t.empty=function(){return{x:0,y:0,width:0,height:0}},t.setEmpty=function(t){t.x=0,t.y=0,t.width=0,t.height=0},t.intersection=function(t,e,n){var r=t.x,o=t.y,i=t.width,a=t.height,u=e.x,l=e.y,c=e.x+e.width,f=e.y+e.height;r<u&&(i-=u-r,r=u),r+i>c&&(i=c-r),o<l&&(a-=l-o,o=l),o+a>f&&(a=f-o),i<0&&(i=0),a<0&&(a=0),n.x=r,n.y=o,n.width=i,n.height=a},t.isEmpty=function(t){return 0===t.width||0===t.height},t.contains=function(t,e){return t.x<e.x&&t.x+t.width>e.x&&t.y<e.y&&t.y+t.height>e.y},t.round=function(t){t.x=Math.round(t.x),t.y=Math.round(t.y),t.width=Math.round(t.width),t.height=Math.round(t.height)}}(c||(c={})),function(t){t.isVisible=function(t){var e;return null===(e=t.visible)||void 0===e||e}}(f||(f={})),function(t){t.getMatrix=function(t,e){var n,r,o,i,a,u,l,c,f,s,p,h,d=t.matrix;if(d)return e.a=null!==(l=d.a)&&void 0!==l?l:1,e.b=null!==(c=d.b)&&void 0!==c?c:0,e.c=null!==(f=d.c)&&void 0!==f?f:0,e.d=null!==(s=d.d)&&void 0!==s?s:1,e.tx=null!==(p=d.tx)&&void 0!==p?p:0,void(e.ty=null!==(h=d.ty)&&void 0!==h?h:0);var y=t.rotation,v=null!==(n=null!==(r=t.scaleX)&&void 0!==r?r:t.scale)&&void 0!==n?n:1,m=null!==(o=null!==(i=t.scaleY)&&void 0!==i?i:t.scale)&&void 0!==o?o:1;if(e.tx=null!==(a=t.x)&&void 0!==a?a:0,e.ty=null!==(u=t.y)&&void 0!==u?u:0,y){var g=Math.cos(y),b=Math.sin(y);return e.a=g*v,e.b=b*v,e.c=-b*m,void(e.d=g*m)}e.a=v,e.b=0,e.c=0,e.d=m},t.getColorTransform=function(t,e){var n,r,o,i,a,u,l,c,f,s=t.colorTransform;if(s)return e.alphaMultiplier=null!==(r=s.alphaMultiplier)&&void 0!==r?r:1,e.redMultiplier=null!==(o=s.redMultiplier)&&void 0!==o?o:1,e.greenMultiplier=null!==(i=s.greenMultiplier)&&void 0!==i?i:1,e.blueMultiplier=null!==(a=s.blueMultiplier)&&void 0!==a?a:1,e.alphaOffset=null!==(u=s.alphaOffset)&&void 0!==u?u:0,e.redOffset=null!==(l=s.redOffset)&&void 0!==l?l:0,e.greenOffset=null!==(c=s.greenOffset)&&void 0!==c?c:0,void(e.blueOffset=null!==(f=s.blueOffset)&&void 0!==f?f:0);var p=null!==(n=t.alpha)&&void 0!==n?n:1,h=t.tint;if(h){var d=h.color,y=void 0===d?0:d,v=h.value,m=void 0===v?1:v,g=1-m,b=y>>16&255,x=y>>8&255,w=255&y;return e.alphaMultiplier=p,e.redMultiplier=g,e.greenMultiplier=g,e.blueMultiplier=g,e.alphaOffset=0,e.redOffset=b*m,e.greenOffset=x*m,void(e.blueOffset=w*m)}var O=t.brightness;if(void 0!==O){O>1?O=1:O<-1&&(O=-1);var M=1-Math.abs(O),P=0;return O>0&&(P=255*O),e.alphaMultiplier=p,e.redMultiplier=M,e.greenMultiplier=M,e.blueMultiplier=M,e.alphaOffset=0,e.redOffset=P,e.greenOffset=P,void(e.blueOffset=P)}e.alphaMultiplier=p,e.redMultiplier=1,e.greenMultiplier=1,e.blueMultiplier=1,e.alphaOffset=0,e.redOffset=0,e.greenOffset=0,e.blueOffset=0}}(s||(s={}));var h=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.engine=e};function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function g(t,e){return!e||"object"!==d(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var x,w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(l,t);var e,n,r,o,a=(r=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=b(r);if(o){var n=b(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return g(this,t)});function l(){var t;return y(this,l),(t=a.apply(this,arguments)).depth=0,t.elapsedTime=0,t.enabled=!0,t.contexts=[],t}return e=l,(n=[{key:"getContext",value:function(){var t=this.contexts[this.depth];return t||(t={matrix:u.empty(),colorTransform:i.empty()},this.contexts[this.depth]=t),t}},{key:"renderComponent",value:function(t,e){if(!(this.depth>this.engine.depth)&&f.isVisible(t)){var n=this.getContext();s.getMatrix(t,n.matrix),s.getColorTransform(t,n.colorTransform),u.concat(e.matrix,n.matrix,n.matrix),i.concat(e.colorTransform,n.colorTransform,n.colorTransform);var r=this.engine.components.render.get(t.type);r&&r(t,this.engine)}}},{key:"render",value:function(){if(this.enabled){var t=this.engine.root;if(t){var e=performance.now();this.engine.platform.begin(),this.depth=0;var n=this.getContext();this.depth++,u.copy(this.engine.screen.getMatrix(),n.matrix),i.setEmpty(n.colorTransform),this.renderComponent(t,n),this.engine.platform.end(),this.elapsedTime=performance.now()-e}}}}])&&v(e.prototype,n),l}(h);function O(t){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function M(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function C(t,e){return(C=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function E(t,e){return!e||"object"!==O(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function _(t){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}!function(t){t.isEnabled=function(t){var e;return null===(e=t.enabled)||void 0===e||e},t.update=function(t,e){t.onUpdate&&t.onUpdate(e)}}(x||(x={}));var T=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&C(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=_(r);if(o){var n=_(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return E(this,t)});function a(){var t;return M(this,a),(t=i.apply(this,arguments)).depth=0,t.time=0,t.elapsedTime=0,t.enabled=!0,t}return e=a,(n=[{key:"update",value:function(t){if(this.enabled){var e=this.engine.root;if(e){this.depth=0,this.time=t;var n=performance.now();this.updateComponent(e),this.elapsedTime=performance.now()-n}}}},{key:"updateComponent",value:function(t){if(!(this.depth>this.engine.depth)&&x.isEnabled(t)){this.updateProperties(t),x.update(t,this.time);var e=this.engine.components.update.get(t.type);e&&e(t,this.engine)}}},{key:"updateProperties",value:function(t){var e=this;this.engine.components.properties.forEach((function(n,r){t[r]&&n(t,e.engine)}))}}])&&P(e.prototype,n),a}(h);function R(t){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function j(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function k(t,e){return(k=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function A(t,e){return!e||"object"!==R(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function X(t){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&k(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=X(r);if(o){var n=X(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return A(this,t)});function a(){var t;return j(this,a),(t=i.apply(this,arguments)).depth=0,t.elapsedTime=0,t.enabled=!0,t.contexts=[],t}return e=a,(n=[{key:"getContext",value:function(){var t=this.contexts[this.depth];return t||(t={progress:0,loaded:!1},this.contexts[this.depth]=t),t}},{key:"updateComponent",value:function(t){var e=this.getContext();if(e.progress=1,e.loaded=!0,!(this.depth>this.engine.depth)){var n=this.engine.components.loaded.get(t.type);n&&n(t,this.engine)}}},{key:"update",value:function(){if(this.enabled){var t=this.engine.root;if(t){var e=performance.now();this.depth=0,this.updateComponent(t),this.elapsedTime=performance.now()-e}}}}])&&S(e.prototype,n),a}(h);function Y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var I,U=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.width=400,this.height=400,this.pixelRatio=0,this.fullscreen=!1,this.matrix=u.empty()}var e,n;return e=t,(n=[{key:"getMatrix",value:function(){var t=this.getPixelRatio();return this.matrix.a=t,this.matrix.d=t,this.matrix}},{key:"getWidth",value:function(){return this.fullscreen?window.innerWidth:this.width}},{key:"getHeight",value:function(){return this.fullscreen?window.innerHeight:this.height}},{key:"getPixelRatio",value:function(){var t;return this.pixelRatio>0?this.pixelRatio:null!==(t=window.devicePixelRatio)&&void 0!==t?t:1}}])&&Y(e.prototype,n),t}(),B={pointerDown:"onPointerDown",pointerUp:"onPointerUp",pointerMove:"onPointerMove",pointerOver:"onPointerOver",pointerOut:"onPointerOut"};function N(t){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function V(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function D(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function F(t,e){return(F=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function G(t,e){return!e||"object"!==N(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function q(t){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}!function(t){t.isPointerOver=function(t){return!!t.pointerOver},t.isPointerEnabled=function(t){var e;return null===(e=t.pointerEnabled)||void 0===e||e},t.dispatchEvent=function(t,e,n,r,o){var i=B[e];if(i&&t[i]){var a={type:e,x:n,y:r,id:o};t[i](a)}}}(I||(I={}));var W=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&F(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=q(r);if(o){var n=q(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return G(this,t)});function a(){var t;return V(this,a),(t=i.apply(this,arguments)).depth=0,t.enabled=!0,t.global=l.empty(),t.local=l.empty(),t.pointerId=0,t.pointerType="pointerDown",t.contexts=[],t}return e=a,(n=[{key:"getContext",value:function(){var t=this.contexts[this.depth];return t||(t={matrix:u.empty()},this.contexts[this.depth]=t),t}},{key:"dispatch",value:function(t,e,n,r){if(this.enabled){var o=this.engine.root;if(o){this.local.x=e,this.local.y=n,this.global.x=e,this.global.y=n,this.pointerId=r,this.pointerType=t,this.depth=0;var i=this.getContext();u.setEmpty(i.matrix),this.depth++,this.dispatchComponent(o,i)}}}},{key:"dispatchComponent",value:function(t,e){if(this.depth>this.engine.depth)return!1;if(!f.isVisible(t))return!1;if(!I.isPointerEnabled(t))return!1;var n=this.engine.components.hitTest.get(t.type);if(n){var r=this.getContext();s.getMatrix(t,r.matrix),u.concat(e.matrix,r.matrix,r.matrix),u.transformInversePoint(r.matrix,this.global,this.local);var o=this.local,i=o.x,a=o.y,l=n(t,this.engine);return l&&I.dispatchEvent(t,this.pointerType,i,a,this.pointerId),"pointerMove"===this.pointerType&&(l&&!t.pointerOver?I.dispatchEvent(t,"pointerOver",i,a,this.pointerId):!l&&t.pointerOver&&I.dispatchEvent(t,"pointerOut",i,a,this.pointerId),t.pointerOver=l),l}return!1}}])&&D(e.prototype,n),a}(h);function H(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var z=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.frameRate=0,this.paused=!0,this.time=0,this.update=function(t){n.paused||(n.engine.updater.update(t),n.engine.loading.update(),n.engine.renderer.render())},this.updateFrame=function(){var t=performance.now(),e=(t-n.time)/1e3;n.time=t,n.update(e),n.updateNextFrame()},this.engine=e}var e,n;return e=t,(n=[{key:"isPaused",get:function(){return this.paused}},{key:"play",value:function(){this.paused&&(this.time=performance.now(),this.paused=!1,this.updateNextFrame())}},{key:"pause",value:function(){this.paused=!1}},{key:"updateNextFrame",value:function(){requestAnimationFrame(this.updateFrame)}}])&&H(e.prototype,n),t}();function $(t){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function J(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function K(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Q(t,e){return(Q=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Z(t,e){return!e||"object"!==$(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function tt(t){return(tt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var et=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Q(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=tt(r);if(o){var n=tt(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return Z(this,t)});function a(){var t;return J(this,a),(t=i.apply(this,arguments)).view=document.createElement("div"),t}return e=a,(n=[{key:"begin",value:function(){}},{key:"end",value:function(){}}])&&K(e.prototype,n),a}(h);function nt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var rt,ot=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.errors=new Map,this.warnings=new Map,this.enabled=!0}var e,n;return e=t,(n=[{key:"log",value:function(){var t;this.enabled&&(t=console).log.apply(t,arguments)}},{key:"error",value:function(){if(this.enabled){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r,o=String(e),i=this.errors.get(o);i||(i=0,(r=console).error.apply(r,e)),i++,this.errors.set(o,i)}}},{key:"warning",value:function(){if(this.enabled){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r,o=String(e),i=this.warnings.get(o);i||(i=0,(r=console).warn.apply(r,e)),i++,this.warnings.set(o,i)}}}])&&nt(e.prototype,n),t}();function it(t){return(it="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function at(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function ut(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function lt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function ct(t,e){return(ct=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function ft(t,e){return!e||"object"!==it(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function st(t){return(st=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}!function(t){t.getProgress=function(t){return t?t.loaded?1:t.bytesTotal>0?t.bytesLoaded/t.bytesTotal:0:0}}(rt||(rt={}));var pt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ct(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=st(r);if(o){var n=st(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return ft(this,t)});function a(){var t;return ut(this,a),(t=i.apply(this,arguments)).resources=new Map,t.resolvers=new Set,t}return e=a,(n=[{key:"get",value:function(t){if(!t)return null;var e=this.resources.get(t);return e||(e=this.resolve(t),this.resources.set(t,e)),e}},{key:"resolve",value:function(t){var e,n=function(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return at(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?at(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}(this.resolvers);try{for(n.s();!(e=n.n()).done;){var r=(0,e.value)(t,this.engine);if(r)return r}}catch(t){n.e(t)}finally{n.f()}return this.engine.debug.warning("Resource not resolved: ".concat(t)),null}}])&&lt(e.prototype,n),a}(h),ht=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.properties=new Map,this.render=new Map,this.update=new Map,this.hitTest=new Map,this.loaded=new Map};function dt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var yt,vt,mt,gt,bt=function t(){var n,r,i,a,u,l,c,f,s,p,h=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};dt(this,t),this.depth=32,h.Components=null!==(n=h.Components)&&void 0!==n?n:ht,h.Screen=null!==(r=h.Screen)&&void 0!==r?r:U,h.Platform=null!==(i=h.Platform)&&void 0!==i?i:et,h.Updater=null!==(a=h.Updater)&&void 0!==a?a:T,h.Loading=null!==(u=h.Loading)&&void 0!==u?u:L,h.Renderer=null!==(l=h.Renderer)&&void 0!==l?l:w,h.Pointers=null!==(c=h.Pointers)&&void 0!==c?c:W,h.Ticker=null!==(f=h.Ticker)&&void 0!==f?f:z,h.Debug=null!==(s=h.Debug)&&void 0!==s?s:ot,h.Resources=null!==(p=h.Resources)&&void 0!==p?p:pt,this.components=new h.Components,this.screen=new h.Screen,this.platform=new h.Platform(this),this.updater=new h.Updater(this),this.loading=new h.Loading(this),this.renderer=new h.Renderer(this),this.pointers=new h.Pointers(this),this.ticker=new h.Ticker(this),this.debug=new h.Debug,this.resources=new h.Resources(this),e.init(this),o.init(this)};function xt(t,e,n){var r=t.platform.view,o=r.getBoundingClientRect(),i=e.clientX-o.left-r.clientLeft,a=e.clientY-o.top-r.clientTop;t.pointers.dispatch(n,i,a,0),e.preventDefault()}!function(t){t.init=function(t){var e=t.platform.view;e.addEventListener("mousedown",(function(e){xt(t,e,"pointerDown")})),e.addEventListener("mouseup",(function(e){xt(t,e,"pointerUp")})),e.addEventListener("mousemove",(function(e){xt(t,e,"pointerMove")}))}}(yt||(yt={})),function(t){t.getX=function(t,e){var n=t.pivotX;return n?-n*e:0},t.getY=function(t,e){var n=t.pivotY;return n?-n*e:0},t.hasValues=function(t){var e=t.pivotX,n=t.pivotY;return!!e||!!n}}(vt||(vt={})),function(t){function e(t,e){switch(t.split(".").pop()){case"png":case"jpg":case"webp":var n={asset:t,loaded:!1,bytesLoaded:0,bytesTotal:0},r=document.createElement("img");return r.src=t,r.onload=function(){console.log("image loaded: ".concat(t)),n.image=r,n.loaded=!0},r.onerror=function(t){e.debug.warning("image load error",t)},n}return null}t.resolve=e,t.init=function(t){t.resources.resolvers.add(e)}}(mt||(mt={})),function(t){function e(t,e){switch(t.split(".").pop()){case"txt":case"json":var n={asset:t,loaded:!1,bytesLoaded:0,bytesTotal:0},r=new XMLHttpRequest;return r.open("GET",t,!0),r.onprogress=function(t){n.bytesLoaded=t.loaded,n.bytesTotal=t.total},r.onload=function(){console.log("string loaded: ".concat(t)),n.data=r.responseText,n.loaded=!0,n.bytesLoaded=n.bytesTotal},r.onerror=function(t){e.debug.warning("string load error",t)},r.send(),n}return null}t.resolve=e,t.init=function(t){t.resources.resolvers.add(e)}}(gt||(gt={}));var wt,Ot="image";!function(t){t.calculateBounds=function(t,e,n){var r=t.src;if(r){var o=n.resources.get(r);if(null!=o&&o.image){var i=o.image,a=i.width,u=i.height,l=vt.getX(t,a),f=vt.getY(t,u);e.x=l,e.y=f,e.width=a,e.height=u}else c.setEmpty(e)}else c.setEmpty(e)}}(wt||(wt={}));var Mt,Pt,Ct=c.empty();!function(t){function e(t,e){var n=e.pointers.local;return wt.calculateBounds(t,Ct,e),c.contains(Ct,n)}function n(t,e){var n=e.loading.getContext(),r=t.src;if(!r)return n.progress=1,void(n.loaded=!0);var o=e.resources.get(r);n.progress=rt.getProgress(o),n.loaded=!(null==o||!o.loaded||null==o||!o.image)}t.hitTest=e,t.loaded=n,t.init=function(t){t.components.hitTest.set(Ot,e),t.components.loaded.set(Ot,n),mt.init(t)}}(Mt||(Mt={})),function(t){function e(t,e){var n=t.src;if(n){var r=e.resources.get(n);if(null!=r&&r.image){var o=e.renderer.getContext(),i=o.colorTransform;if(!(i.alphaMultiplier<=0)){var a=e.platform.getContext(),u=o.matrix;a.setTransform(u.a,u.b,u.c,u.d,u.tx,u.ty);var l=r.image,c=l.width,f=l.height,s=vt.getX(t,c),p=vt.getY(t,f);a.globalAlpha=i.alphaMultiplier,a.drawImage(r.image,s,p)}}}}t.render=e,t.init=function(t){Mt.init(t),t.components.render.set(Ot,e)}}(Pt||(Pt={}));var Et,_t,Tt=c.empty(),Rt=c.empty();function jt(t){return(jt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function St(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function kt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function At(t,e){return(At=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Xt(t,e){return!e||"object"!==jt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Lt(t){return(Lt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}!function(t){function e(t,e){var n=t.src;if(n){var r=e.resources.get(n);if(null!=r&&r.image){var o=e.renderer.getContext(),a=o.colorTransform;if(!(a.alphaMultiplier<=0)){var l=o.matrix,f=e.platform,s=f.getContext(),p=r.image,h=p.width,d=p.height,y=vt.getX(t,h),v=vt.getY(t,d);if(i.isEmptyWithAlpha(a))s.setTransform(l.a,l.b,l.c,l.d,l.tx,l.ty),s.globalAlpha=a.alphaMultiplier,s.drawImage(r.image,y,v);else{var m=f.createCustomContext();if(Tt.x=y,Tt.y=v,Tt.width=h,Tt.height=d,u.transformBounds(l,Tt,Tt),c.isEmpty(Tt))return;if(Rt.width=m.canvas.width,Rt.height=m.canvas.height,c.intersection(Tt,Rt,Tt),c.isEmpty(Tt))return;c.round(Tt),m.setTransform(),m.clearRect(Tt.x,Tt.y,Tt.width,Tt.height),m.setTransform(l.a,l.b,l.c,l.d,l.tx,l.ty),m.drawImage(r.image,y,v);for(var g=m.getImageData(Tt.x,Tt.y,Tt.width,Tt.height),b=a.redMultiplier,x=a.greenMultiplier,w=a.blueMultiplier,O=a.alphaMultiplier,M=a.redOffset,P=a.greenOffset,C=a.blueOffset,E=a.alphaOffset,_=g.data,T=_.length,R=0;R<T;)_[R]=_[R++]*b+M,_[R]=_[R++]*x+P,_[R]=_[R++]*w+C,_[R]=_[R++]*O+E;m.putImageData(g,Tt.x,Tt.y),s.setTransform(),s.globalAlpha=1,s.drawImage(m.canvas,Tt.x,Tt.y,Tt.width,Tt.height,Tt.x,Tt.y,Tt.width,Tt.height),f.destroyCustomContext(m)}}}}}t.render=e,t.init=function(t){Mt.init(t),t.components.render.set(Ot,e)}}(Et||(Et={})),function(t){function e(t,e,n){var r=t>>16&255,o=t>>8&255,a=255&t,u=255*e;return i.isEmpty(n)||(r=r*n.redMultiplier+n.redOffset&255,o=o*n.greenMultiplier+n.greenOffset&255,a=a*n.blueMultiplier+n.blueOffset&255,u=u*n.alphaMultiplier+n.alphaOffset&255),u<255?"rgba(".concat(r,", ").concat(o,", ").concat(a,", ").concat(u/255,")"):"rgb(".concat(r,", ").concat(o,", ").concat(a,")")}function n(t,n,r,o,i){for(var a=0;a<n.length;a++){var u=n[a],l=r[a],c=o[a];c<0&&(c=0),c>1&&(c=1);var f=e(u,l,i);t.addColorStop(c,f)}}t.colorPattern=e,t.addGradientColors=n,t.radialGradientPattern=function(t,e,r,o,i,a,u,l,c,f,s){var p=s.createRadialGradient(t,e,r,o,i,a);return n(p,u,l,c,f),p},t.linearGradientPattern=function(t,e,r,o,i,a,u,l,c){var f=c.createLinearGradient(t,e,r,o);return n(f,i,a,u,l),f},t.bitmapPattern=function(t,e,n,r){var o=r.createPattern(t,e?"repeat":"none");if(o){var i,a,u,l,c,f,s=new DOMMatrix;return s.a=null!==(i=n.a)&&void 0!==i?i:1,s.b=null!==(a=n.b)&&void 0!==a?a:0,s.c=null!==(u=n.c)&&void 0!==u?u:0,s.d=null!==(l=n.d)&&void 0!==l?l:1,s.e=null!==(c=n.tx)&&void 0!==c?c:0,s.f=null!==(f=n.ty)&&void 0!==f?f:0,o.setTransform(s),o}return""}}(_t||(_t={}));var Yt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&At(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Lt(r);if(o){var n=Lt(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return Xt(this,t)});function a(){var t;return St(this,a),(t=i.apply(this,arguments)).view=document.createElement("canvas"),t.contexts=[t.view.getContext("2d")],t.customContexts=[],t}return e=a,(n=[{key:"getContext",value:function(){return this.contexts[this.contexts.length-1]}},{key:"saveContext",value:function(t){this.contexts.push(t)}},{key:"restoreContext",value:function(){this.contexts.length>1?this.contexts.pop():this.engine.debug.warning("Trying to restore main context")}},{key:"createCustomContext",value:function(){var t;t=this.customContexts.length?this.customContexts.pop():document.createElement("canvas").getContext("2d");var e=this.view,n=e.width,r=e.height;return t.canvas.width!==n&&(t.canvas.width=n),t.canvas.height!==r&&(t.canvas.height=r),t}},{key:"destroyCustomContext",value:function(t){this.customContexts.push(t)}},{key:"begin",value:function(){this.clear(),this.updateSize()}},{key:"clear",value:function(){var t=this.view,e=this.getContext();e.setTransform(),e.clearRect(0,0,t.width,t.height)}},{key:"updateSize",value:function(){var t=this.engine.screen.getWidth(),e=this.engine.screen.getHeight(),n=this.engine.screen.getPixelRatio(),r=Math.floor(t*n),o=Math.floor(e*n),i=this.view;i.width===r&&i.height===o||(i.width=r,i.height=o,i.style.width="".concat(t,"px"),i.style.height="".concat(e,"px"))}}])&&kt(e.prototype,n),a}(et);function It(t){return(It="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Ut(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Bt(t,e){return(Bt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Nt(t,e){return!e||"object"!==It(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Vt(t){return(Vt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}const Dt=new(function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Bt(t,e)}(o,t);var e,n,r=(e=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=Vt(e);if(n){var o=Vt(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return Nt(this,t)});function o(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ut(this,o),e.Platform=null!==(t=e.Platform)&&void 0!==t?t:Yt,r.call(this,e)}return o}(bt));Pt.init(Dt),Dt.screen.fullscreen=!0,Dt.ticker.play(),document.body.appendChild(Dt.platform.view),Dt.root={type:"container",children:{type:"image",src:"assets/championItems_sword_rare.png",pivotX:.5,pivotY:.5,x:100,y:100,rotation:0,onUpdate(t){this.rotation+=2*t}}}})();