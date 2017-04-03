!function(n,t,e){"use strict";function a(n,t,e){if(!n)throw ngMinErr("areq","Argument '{0}' is {1}",t||"?",e||"required");return n}function r(n,t){return n||t?n?t?(E(n)&&(n=n.join(" ")),E(t)&&(t=t.join(" ")),n+" "+t):n:t:""}function i(n){var t={};return n&&(n.to||n.from)&&(t.to=n.to,t.from=n.from),t}function o(n,t,e){var a="";return n=E(n)?n:n&&N(n)&&n.length?n.split(/\s+/):[],q(n,function(n,r){n&&n.length>0&&(a+=r>0?" ":"",a+=e?t+n:n+t)}),a}function s(n,t){var e=n.indexOf(t);t>=0&&n.splice(e,1)}function u(n){if(n instanceof R)switch(n.length){case 0:return[];case 1:if(n[0].nodeType===K)return n;break;default:return R(l(n))}if(n.nodeType===K)return R(n)}function l(n){if(!n[0])return n;for(var t=0;t<n.length;t++){var e=n[t];if(e.nodeType==K)return e}}function c(n,t,e){q(t,function(t){n.addClass(t,e)})}function f(n,t,e){q(t,function(t){n.removeClass(t,e)})}function m(n){return function(t,e){e.addClass&&(c(n,t,e.addClass),e.addClass=null),e.removeClass&&(f(n,t,e.removeClass),e.removeClass=null)}}function v(n){if(n=n||{},!n.$$prepared){var t=n.domOperation||M;n.domOperation=function(){n.$$domOperationFired=!0,t(),t=M},n.$$prepared=!0}return n}function d(n,t){h(n,t),p(n,t)}function h(n,t){t.from&&(n.css(t.from),t.from=null)}function p(n,t){t.to&&(n.css(t.to),t.to=null)}function g(n,t,e){var a=(t.addClass||"")+" "+(e.addClass||""),r=(t.removeClass||"")+" "+(e.removeClass||""),i=$(n.attr("class"),a,r);return _(t,e),i.addClass?t.addClass=i.addClass:t.addClass=null,i.removeClass?t.removeClass=i.removeClass:t.removeClass=null,t}function $(n,t,e){function a(n){N(n)&&(n=n.split(" "));var t={};return q(n,function(n){n.length&&(t[n]=!0)}),t}var r={};n=a(n),t=a(t),q(t,function(n,t){r[t]=1}),e=a(e),q(e,function(n,t){r[t]=1===r[t]?null:-1});var i={addClass:"",removeClass:""};return q(r,function(t,e){var a,r;1===t?(a="addClass",r=!n[e]):t===-1&&(a="removeClass",r=n[e]),r&&(i[a].length&&(i[a]+=" "),i[a]+=e)}),i}function C(n){return n instanceof t.element?n[0]:n}function y(n,t,e){var a=Object.create(null),r=n.getComputedStyle(t)||{};return q(e,function(n,t){var e=r[n];if(e){var i=e.charAt(0);("-"===i||"+"===i||i>=0)&&(e=D(e)),0===e&&(e=null),a[t]=e}}),a}function D(n){var t=0,e=n.split(/\s*,\s*/);return q(e,function(n){"s"==n.charAt(n.length-1)&&(n=n.substring(0,n.length-1)),n=parseFloat(n)||0,t=t?Math.max(n,t):n}),t}function A(n){return 0===n||null!=n}function b(n,t){var e=F,a=n+"s";return t?e+=V:a+=" linear all",[e,a]}function k(n){return[on,n+"s"]}function w(n,t){return[t?rn:sn,n+"s"]}function T(n,t){var e=t?"-"+t+"s":"";return x(n,[sn,e]),[sn,e]}function S(n,t){var e=t?"paused":"",a=I+Z;return x(n,[a,e]),[a,e]}function x(n,t){var e=t[0],a=t[1];n.style[e]=a}function j(){var n=Object.create(null);return{flush:function(){n=Object.create(null)},count:function(t){var e=n[t];return e?e.total:0},get:function(t){var e=n[t];return e&&e.value},put:function(t,e){n[t]?n[t].total++:n[t]={total:1,value:e}}}}var F,O,I,P,M=t.noop,_=t.extend,R=t.element,q=t.forEach,E=t.isArray,N=t.isString,L=t.isObject,H=t.isUndefined,B=t.isDefined,J=t.isFunction,U=t.isElement,K=1,Q="ng-animate",W="$$ngAnimateChildren",z=["$$rAF",function(n){function t(n){i.push([].concat(n)),e()}function e(){if(i.length){for(var t=[],o=0;o<i.length;o++){var s=i[o];a(s),s.length&&t.push(s)}i=t,r||n(function(){r||e()})}}function a(n){n.shift()()}var r,i=[];return t.waitUntilQuiet=function(t){r&&r(),r=n(function(){r=null,t(),e()})},t}],G=[function(){return function(n,e,a){var r=a.ngAnimateChildren;t.isString(r)&&0===r.length?e.data(W,!0):a.$observe("ngAnimateChildren",function(n){n="on"===n||"true"===n,e.data(W,n)})}}];void 0===n.ontransitionend&&void 0!==n.onwebkittransitionend?("-webkit-",F="WebkitTransition",O="webkitTransitionEnd transitionend"):(F="transition",O="transitionend"),void 0===n.onanimationend&&void 0!==n.onwebkitanimationend?("-webkit-",I="WebkitAnimation",P="webkitAnimationEnd animationend"):(I="animation",P="animationend");var V="Duration",X="Property",Y="TimingFunction",Z="PlayState",nn=3,tn=1.5,en=1e3,an=9999,rn=I+"Delay",on=I+V,sn=F+"Delay",un=F+V,ln={transitionDuration:un,transitionDelay:sn,transitionProperty:F+X,animationDuration:on,animationDelay:rn,animationIterationCount:I+"IterationCount"},cn={transitionDuration:un,transitionDelay:sn,animationDuration:on,animationDelay:rn},fn=["$animateProvider",function(n){var t=j(),e=j();this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout","$document","$sniffer","$$rAFScheduler",function(n,a,r,u,l,c,f){function g(n,t){var e="$$ngAnimateParentKey",a=n.parentNode;return(a[e]||(a[e]=++N))+"-"+n.getAttribute("class")+"-"+t}function $(e,a,r,i){var o=t.get(r);return o||(o=y(n,e,i),"infinite"===o.animationIterationCount&&(o.animationIterationCount=1)),t.put(r,o),o}function D(r,i,s,u){var l;if(t.count(s)>0&&!(l=e.get(s))){var c=o(i,"-stagger");a.addClass(r,c),l=y(n,r,u),l.animationDuration=Math.max(l.animationDuration,0),l.transitionDuration=Math.max(l.transitionDuration,0),a.removeClass(r,c),e.put(s,l)}return l||{}}function j(n){H.push(n),f.waitUntilQuiet(function(){t.flush(),e.flush();for(var n=L.offsetWidth+1,a=0;a<H.length;a++)H[a](n);H.length=0})}function M(n,t,e){var a=$(n,t,e,ln),r=a.animationDelay,i=a.transitionDelay;return a.maxDelay=r&&i?Math.max(r,i):r||i,a.maxDuration=Math.max(a.animationDuration*a.animationIterationCount,a.transitionDuration),a}function _(n,e){function l(){m()}function f(){m(!0)}function m(t){L||B&&H||(L=!0,H=!1,a.removeClass(n,ln),a.removeClass(n,mn),S(N,!1),T(N,!1),q(G,function(n){N.style[n[0]]=""}),R(n,e),d(n,e),e.onDone&&e.onDone(),J&&J.complete(!t))}function $(n){wn.blockTransition&&T(N,n),wn.blockKeyframeAnimation&&S(N,!!n)}function y(){return J=new r({end:l,cancel:f}),m(),{$$willAnimate:!1,start:function(){return J},end:l}}function _(){function t(){if(!L){if($(!1),q(G,function(n){var t=n[0],e=n[1];N.style[t]=e}),R(n,e),a.addClass(n,mn),wn.recalculateTimingStyles){if(fn=N.className+" "+ln,dn=g(N,fn),bn=M(N,fn,dn),kn=bn.maxDelay,K=Math.max(kn,0),0===(W=bn.maxDuration))return void m();wn.hasTransitions=bn.transitionDuration>0,wn.hasAnimations=bn.animationDuration>0}if(wn.applyTransitionDelay||wn.applyAnimationDelay){kn="boolean"!=typeof e.delay&&A(e.delay)?parseFloat(e.delay):kn,K=Math.max(kn,0);var t;wn.applyTransitionDelay&&(bn.transitionDelay=kn,t=w(kn),G.push(t),N.style[t[0]]=t[1]),wn.applyAnimationDelay&&(bn.animationDelay=kn,t=w(kn,!0),G.push(t),N.style[t[0]]=t[1])}if(Q=K*en,z=W*en,e.easing){var s,c=e.easing;wn.hasTransitions&&(s=F+Y,G.push([s,c]),N.style[s]=c),wn.hasAnimations&&(s=I+Y,G.push([s,c]),N.style[s]=c)}bn.transitionDuration&&l.push(O),bn.animationDuration&&l.push(P),o=Date.now(),n.on(l.join(" "),i),u(r,Q+tn*z),p(n,e)}}function r(){m()}function i(n){n.stopPropagation();var t=n.originalEvent||n,e=t.$manualTimeStamp||t.timeStamp||Date.now(),a=parseFloat(t.elapsedTime.toFixed(nn));Math.max(e-o,0)>=Q&&a>=W&&(B=!0,m())}if(!L){var o,l=[],c=function(n){if(B)H&&n&&(H=!1,m());else if(H=!n,bn.animationDuration){var t=S(N,H);H?G.push(t):s(G,t)}},f=Dn>0&&(bn.transitionDuration&&0===hn.transitionDuration||bn.animationDuration&&0===hn.animationDuration)&&Math.max(hn.animationDelay,hn.transitionDelay);f?u(t,Math.floor(f*Dn*en),!1):t(),U.resume=function(){c(!0)},U.pause=function(){c(!1)}}}var N=C(n);e=v(e);var L,H,B,J,U,K,Q,W,z,G=[],V=n.attr("class"),Z=i(e);if(0===e.duration||!c.animations&&!c.transitions)return y();var rn=e.event&&E(e.event)?e.event.join(" "):e.event,on=rn&&e.structural,sn="",un="";on?sn=o(rn,"ng-",!0):rn&&(sn=rn),e.addClass&&(un+=o(e.addClass,"-add")),e.removeClass&&(un.length&&(un+=" "),un+=o(e.removeClass,"-remove")),e.applyClassesEarly&&un.length&&(R(n,e),un="");var ln=[sn,un].join(" ").trim(),fn=V+" "+ln,mn=o(ln,"-active"),vn=Z.to&&Object.keys(Z.to).length>0;if(!vn&&!ln)return y();var dn,hn;if(e.stagger>0){var pn=parseFloat(e.stagger);hn={transitionDelay:pn,animationDelay:pn,transitionDuration:0,animationDuration:0}}else dn=g(N,fn),hn=D(N,ln,dn,cn);a.addClass(n,ln);var gn;if(e.transitionStyle){var $n=[F,e.transitionStyle];x(N,$n),G.push($n)}if(e.duration>=0){gn=N.style[F].length>0;var Cn=b(e.duration,gn);x(N,Cn),G.push(Cn)}if(e.keyframeStyle){var yn=[I,e.keyframeStyle];x(N,yn),G.push(yn)}var Dn=hn?e.staggerIndex>=0?e.staggerIndex:t.count(dn):0,An=0===Dn;An&&T(N,an);var bn=M(N,fn,dn),kn=bn.maxDelay;K=Math.max(kn,0),W=bn.maxDuration;var wn={};return wn.hasTransitions=bn.transitionDuration>0,wn.hasAnimations=bn.animationDuration>0,wn.hasTransitionAll=wn.hasTransitions&&"all"==bn.transitionProperty,wn.applyTransitionDuration=vn&&(wn.hasTransitions&&!wn.hasTransitionAll||wn.hasAnimations&&!wn.hasTransitions),wn.applyAnimationDuration=e.duration&&wn.hasAnimations,wn.applyTransitionDelay=A(e.delay)&&(wn.applyTransitionDuration||wn.hasTransitions),wn.applyAnimationDelay=A(e.delay)&&wn.hasAnimations,wn.recalculateTimingStyles=un.length>0,(wn.applyTransitionDuration||wn.applyAnimationDuration)&&(W=e.duration?parseFloat(e.duration):W,wn.applyTransitionDuration&&(wn.hasTransitions=!0,bn.transitionDuration=W,gn=N.style[F+X].length>0,G.push(b(W,gn))),wn.applyAnimationDuration&&(wn.hasAnimations=!0,bn.animationDuration=W,G.push(k(W)))),0!==W||wn.recalculateTimingStyles?(null==e.duration&&bn.transitionDuration>0&&(wn.recalculateTimingStyles=wn.recalculateTimingStyles||An),Q=K*en,z=W*en,e.skipBlocking||(wn.blockTransition=bn.transitionDuration>0,wn.blockKeyframeAnimation=bn.animationDuration>0&&hn.animationDelay>0&&0===hn.animationDuration),h(n,e),wn.blockTransition||T(N,!1),$(W),{$$willAnimate:!0,end:l,start:function(){if(!L)return U={end:l,cancel:f,resume:null,pause:null},J=new r(U),j(_),J}}):y()}var R=m(a),N=0,L=C(l).body,H=[];return _}]}],mn=["$$animationProvider",function(n){n.drivers.push("$$animateCssDriver");var t="ng-animate-shim",e="ng-anchor-out";this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$document","$sniffer",function(n,a,r,i,o,s){function u(n){return n.replace(/\bng-\S+\b/g,"")}function l(n,t){return N(n)&&(n=n.split(" ")),N(t)&&(t=t.split(" ")),n.filter(function(n){return t.indexOf(n)===-1}).join(" ")}function c(a,i,o){function s(n){var t={},e=C(n).getBoundingClientRect();return q(["width","height","top","left"],function(n){var a=e[n];switch(n){case"top":a+=v.scrollTop;break;case"left":a+=v.scrollLeft}t[n]=Math.floor(a)+"px"}),t}function c(n){return n.attr("class")||""}function f(){var t=u(c(o)),a=l(t,p),r=l(p,t),i=n(d,{to:s(o),addClass:"ng-anchor-in "+a,removeClass:e+" "+r,delay:!0});return i.$$willAnimate?i:null}function m(){d.remove(),i.removeClass(t),o.removeClass(t)}var d=R(C(i).cloneNode(!0)),p=u(c(d));i.addClass(t),o.addClass(t),d.addClass("ng-anchor"),h.append(d);var g,$=function(){var t=n(d,{addClass:e,delay:!0,from:s(i)});return t.$$willAnimate?t:null}();if(!$&&!(g=f()))return m();var y=$||g;return{start:function(){function n(){e&&e.end()}var t,e=y.start();return e.done(function(){if(e=null,!g&&(g=f()))return e=g.start(),e.done(function(){e=null,m(),t.complete()}),e;m(),t.complete()}),t=new r({end:n,cancel:n})}}}function f(n,t,e,a){var i=m(n),o=m(t),s=[];if(q(a,function(n){var t=n.out,a=n.in,r=c(e,t,a);r&&s.push(r)}),i||o||0!==s.length)return{start:function(){function n(){q(t,function(n){n.end()})}var t=[];i&&t.push(i.start()),o&&t.push(o.start()),q(s,function(n){t.push(n.start())});var e=new r({end:n,cancel:n});return r.all(t,function(n){e.complete(n)}),e}}}function m(t){var e=t.element,a=t.options||{};t.structural?(a.structural=a.applyClassesEarly=!0,a.event=t.event,"leave"===a.event&&(a.onDone=a.domOperation)):a.event=null;var r=n(e,a);return r.$$willAnimate?r:null}if(!s.animations&&!s.transitions)return M;var v=C(o).body,d=C(i),h=R(v.parentNode===d?v:d);return function(n){return n.from&&n.to?f(n.from,n.to,n.classes,n.anchors):m(n)}}]}],vn=["$animateProvider",function(n){this.$get=["$injector","$$AnimateRunner","$$rAFMutex","$$jqLite",function(t,e,a,r){function i(e){e=E(e)?e:e.split(" ");for(var a=[],r={},i=0;i<e.length;i++){var o=e[i],s=n.$$registeredAnimations[o];s&&!r[o]&&(a.push(t.get(s)),r[o]=!0)}return a}var o=m(r);return function(n,t,a,r){function s(){r.domOperation(),o(n,r)}function u(n,t,a,r,i){var o;switch(a){case"animate":o=[t,r.from,r.to,i];break;case"setClass":o=[t,h,p,i];break;case"addClass":o=[t,h,i];break;case"removeClass":o=[t,p,i];break;default:o=[t,i]}o.push(r);var s=n.apply(n,o);if(s)if(J(s.start)&&(s=s.start()),s instanceof e)s.done(i);else if(J(s))return s;return M}function l(n,t,a,r,i){var o=[];return q(r,function(r){var s=r[i];s&&o.push(function(){var r,i,o=!1,l=function(n){o||(o=!0,(i||M)(n),r.complete(!n))};return r=new e({end:function(){l()},cancel:function(){l(!0)}}),i=u(s,n,t,a,function(n){l(n===!1)}),r})}),o}function c(n,t,a,r,i){var o=l(n,t,a,r,i);if(0===o.length){var s,u;"beforeSetClass"===i?(s=l(n,"removeClass",a,r,"beforeRemoveClass"),u=l(n,"addClass",a,r,"beforeAddClass")):"setClass"===i&&(s=l(n,"removeClass",a,r,"removeClass"),u=l(n,"addClass",a,r,"addClass")),s&&(o=o.concat(s)),u&&(o=o.concat(u))}if(0!==o.length)return function(n){var t=[];return o.length&&q(o,function(n){t.push(n())}),t.length?e.all(t,n):n(),function(n){q(t,function(t){n?t.cancel():t.end()})}}}3===arguments.length&&L(a)&&(r=a,a=null),r=v(r),a||(a=n.attr("class")||"",r.addClass&&(a+=" "+r.addClass),r.removeClass&&(a+=" "+r.removeClass));var f,m,h=r.addClass,p=r.removeClass,g=i(a);if(g.length){var $,C;"leave"==t?(C="leave",$="afterLeave"):(C="before"+t.charAt(0).toUpperCase()+t.substr(1),$=t),"enter"!==t&&"move"!==t&&(f=c(n,t,r,g,C)),m=c(n,t,r,g,$)}if(f||m)return{start:function(){function t(t){u=!0,s(),d(n,r),l.complete(t)}function a(n){u||((i||M)(n),t(n))}var i,o=[];f&&o.push(function(n){i=f(n)}),o.length?o.push(function(n){s(),n(!0)}):s(),m&&o.push(function(n){i=m(n)});var u=!1,l=new e({end:function(){a()},cancel:function(){a(!0)}});return e.chain(o,t),l}}}}]}],dn=["$$animationProvider",function(n){n.drivers.push("$$animateJsDriver"),this.$get=["$$animateJs","$$AnimateRunner",function(n,t){function e(t){var e=t.element,a=t.event,r=t.options,i=t.classes;return n(e,a,i,r)}return function(n){if(n.from&&n.to){var a=e(n.from),r=e(n.to);if(!a&&!r)return;return{start:function(){function n(){return function(){q(i,function(n){n.end()})}}function e(n){o.complete(n)}var i=[];a&&i.push(a.start()),r&&i.push(r.start()),t.all(i,e);var o=new t({end:n(),cancel:n()});return o}}}return e(n)}}]}],hn="data-ng-animate",pn="$ngAnimatePin",gn=["$animateProvider",function(n){function t(n,t,e,a){return o[n].some(function(n){return n(t,e,a)})}function e(n,t){n=n||{};var e=(n.addClass||"").length>0,a=(n.removeClass||"").length>0;return t?e&&a:e||a}var r=1,i=2,o=this.rules={skip:[],cancel:[],join:[]};o.join.push(function(n,t,a){return!t.structural&&e(t.options)}),o.skip.push(function(n,t,a){return!t.structural&&!e(t.options)}),o.skip.push(function(n,t,e){return"leave"==e.event&&t.structural}),o.skip.push(function(n,t,e){return e.structural&&!t.structural}),o.cancel.push(function(n,t,e){return e.structural&&t.structural}),o.cancel.push(function(n,t,e){return e.state===i&&t.structural}),o.cancel.push(function(n,t,e){var a=t.options,r=e.options;return a.addClass&&a.addClass===r.removeClass||a.removeClass&&a.removeClass===r.addClass}),this.$get=["$$rAF","$rootScope","$rootElement","$document","$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite",function(o,s,c,f,h,p,$,y,D){function A(n,t){return g(n,t,{})}function b(n,t){var e=C(n),a=[],r=Q[t];return r&&q(r,function(n){n.node.contains(e)&&a.push(n.callback)}),a}function k(n,t,e,a){o(function(){q(b(t,n),function(n){n(t,e,a)})})}function w(n,a,o){function l(t,e,a,r){k(e,n,a,r),t.progress(e,a,r)}function c(t){V(n,o),d(n,o),o.domOperation(),h.complete(!t)}var f,m;n=u(n),n&&(f=C(n),m=n.parent()),o=v(o);var h=new $;if(!f)return c(),h;E(o.addClass)&&(o.addClass=o.addClass.join(" ")),E(o.removeClass)&&(o.removeClass=o.removeClass.join(" ")),o.from&&!L(o.from)&&(o.from=null),o.to&&!L(o.to)&&(o.to=null);var y=[f.className,o.addClass,o.removeClass].join(" ");if(!G(y))return c(),h;var D=["enter","move","leave"].indexOf(a)>=0,b=!M||P.get(f),w=!b&&I.get(f)||{},x=!!w.state;if(b||x&&w.state==r||(b=!F(n,m,a)),b)return c(),h;D&&T(n);var _={structural:D,element:n,event:a,close:c,options:o,runner:h};if(x){if(t("skip",n,_,w))return w.state===i?(c(),h):(g(n,w.options,o),w.runner);if(t("cancel",n,_,w))w.state===i?w.runner.end():w.structural?w.close():g(n,_.options,w.options);else{if(t("join",n,_,w)){if(w.state!==i)return a=_.event=w.event,o=g(n,w.options,_.options),h;A(n,o)}}}else A(n,o);var R=_.structural;if(R||(R="animate"===_.event&&Object.keys(_.options.to||{}).length>0||e(_.options)),!R)return c(),S(n),h;D&&j(m);var q=(w.counter||0)+1;return _.counter=q,O(n,r,_),s.$$postDigest(function(){var t=I.get(f),r=!t;t=t||{};var s=n.parent()||[],u=s.length>0&&("animate"===t.event||t.structural||e(t.options));if(r||t.counter!==q||!u)return r&&(V(n,o),d(n,o)),(r||D&&t.event!==a)&&(o.domOperation(),h.end()),void(u||S(n));a=!t.structural&&e(t.options,!0)?"setClass":t.event,t.structural&&j(s),O(n,i);var m=p(n,a,t.options);m.done(function(t){c(!t);var e=I.get(f);e&&e.counter===q&&S(C(n)),l(h,a,"close",{})}),h.setHost(m),l(h,a,"start",{})}),h}function T(n){var t=C(n),e=t.querySelectorAll("["+hn+"]");q(e,function(n){var t=parseInt(n.getAttribute(hn)),e=I.get(n);switch(t){case i:e.runner.end();case r:e&&I.remove(n)}})}function S(n){var t=C(n);t.removeAttribute(hn),I.remove(t)}function x(n,t){return C(n)===C(t)}function j(n){for(var t=C(n);;){if(!t||t.nodeType!==K)break;var a=I.get(t);a&&function(n,t){!t.structural&&e(t.options)&&(t.state===i&&t.runner.end(),S(n))}(t,a),t=t.parentNode}}function F(n,t,e){var a,r=!1,i=!1,o=!1,s=n.data(pn);for(s&&(t=s);t&&t.length;){i||(i=x(t,c));var u=t[0];if(u.nodeType!==K)break;var l=I.get(u)||{};if(o||(o=l.structural||P.get(u)),H(a)||a===!0){var f=t.data(W);B(f)&&(a=f)}if(o&&a===!1)break;i||(i=x(t,c))||(s=t.data(pn))&&(t=s),r||(r=x(t,J)),t=t.parent()}return(!o||a)&&i&&r}function O(n,t,e){e=e||{},e.state=t;var a=C(n);a.setAttribute(hn,t);var r=I.get(a),i=r?_(r,e):e;I.put(a,i)}var I=new h,P=new h,M=null,N=s.$watch(function(){return 0===y.totalPendingRequests},function(n){n&&(N(),s.$$postDigest(function(){s.$$postDigest(function(){null===M&&(M=!0)})}))}),J=R(f[0].body),Q={},z=n.classNameFilter(),G=z?function(n){return z.test(n)}:function(){return!0},V=m(D);return{on:function(n,t,e){var a=l(t);Q[n]=Q[n]||[],Q[n].push({node:a,callback:e})},off:function(n,t,e){var a=Q[n];a&&(Q[n]=1===arguments.length?null:function(n,t,e){var a=l(t);return n.filter(function(n){return!(n.node===a&&(!e||n.callback===e))})}(a,t,e))},pin:function(n,t){a(U(n),"element","not an element"),a(U(t),"parentElement","not an element"),n.data(pn,t)},push:function(n,t,e,a){return e=e||{},e.domOperation=a,w(n,t,e)},enabled:function(n,t){var e=arguments.length;if(0===e)t=!!M;else{if(U(n)){var a=C(n),r=P.get(a);1===e?t=!r:(t=!!t,t?r&&P.remove(a):P.put(a,!0))}else t=M=!!n}return t}}}]}],$n=["$$rAF",function(n){return function(){var t=!1;return n(function(){t=!0}),function(e){t?e():n(e)}}}],Cn=["$q","$$rAFMutex",function(n,t){function e(n){this.setHost(n),this._doneCallbacks=[],this._runInAnimationFrame=t(),this._state=0}return e.chain=function(n,t){function e(){if(a===n.length)return void t(!0);n[a](function(n){if(n===!1)return void t(!1);a++,e()})}var a=0;e()},e.all=function(n,t){function e(e){r=r&&e,++a===n.length&&t(r)}var a=0,r=!0;q(n,function(n){n.done(e)})},e.prototype={setHost:function(n){this.host=n||{}},done:function(n){2===this._state?n():this._doneCallbacks.push(n)},progress:M,getPromise:function(){if(!this.promise){var t=this;this.promise=n(function(n,e){t.done(function(t){t===!1?e():n()})})}return this.promise},then:function(n,t){return this.getPromise().then(n,t)},catch:function(n){return this.getPromise().catch(n)},finally:function(n){return this.getPromise().finally(n)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end(),this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel(),this._resolve(!1)},complete:function(n){var t=this;0===t._state&&(t._state=1,t._runInAnimationFrame(function(){t._resolve(n)}))},_resolve:function(n){2!==this._state&&(q(this._doneCallbacks,function(t){t(n)}),this._doneCallbacks.length=0,this._state=2)}},e}],yn=["$animateProvider",function(n){function t(n,t){n.data(s,t)}function e(n){n.removeData(s)}function a(n){return n.data(s)}var i="ng-animate-ref",o=this.drivers=[],s="$$animationRunner";this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$rAFScheduler",function(n,s,u,l,c){var f=[],h=m(n),p=0,g=0,$=[];return function(m,y,D){function A(n){var t="["+i+"]",e=n.hasAttribute(i)?[n]:n.querySelectorAll(t),a=[];return q(e,function(n){var t=n.getAttribute(i);t&&t.length&&a.push(n)}),a}function b(n){var t=[],e={};q(n,function(n,a){var r=n.element,o=C(r),s=n.event,u=["enter","move"].indexOf(s)>=0,l=n.structural?A(o):[];if(l.length){var c=u?"to":"from";q(l,function(n){var t=n.getAttribute(i);e[t]=e[t]||{},e[t][c]={animationID:a,element:R(n)}})}else t.push(n)});var a={},r={};return q(e,function(e,i){var o=e.from,s=e.to;if(!o||!s){var u=o?o.animationID:s.animationID,l=u.toString();return void(a[l]||(a[l]=!0,t.push(n[u])))}var c=n[o.animationID],f=n[s.animationID],m=o.animationID.toString();if(!r[m]){var v=r[m]={structural:!0,beforeStart:function(){c.beforeStart(),f.beforeStart()},close:function(){c.close(),f.close()},classes:k(c.classes,f.classes),from:c,to:f,anchors:[]};v.classes.length?t.push(v):(t.push(c),t.push(f))}r[m].anchors.push({out:o.element,in:s.element})}),t}function k(n,t){n=n.split(" "),t=t.split(" ");for(var e=[],a=0;a<n.length;a++){var r=n[a];if("ng-"!==r.substring(0,3))for(var i=0;i<t.length;i++)if(r===t[i]){e.push(r);break}}return e.join(" ")}function w(n){for(var t=o.length-1;t>=0;t--){var e=o[t];if(u.has(e)){var a=u.get(e),r=a(n);if(r)return r}}}function T(){m.addClass(Q),P&&n.addClass(m,P)}function S(n,t){function e(n){a(n).setHost(t)}n.from&&n.to?(e(n.from.element),e(n.to.element)):e(n.element)}function x(){var n=a(m);!n||"leave"===y&&D.$$domOperationFired||n.end()}function j(t){m.off("$destroy",x),e(m),h(m,D),d(m,D),D.domOperation(),P&&n.removeClass(m,P),m.removeClass(Q),O.complete(!t)}D=v(D);var F=["enter","move","leave"].indexOf(y)>=0,O=new l({end:function(){j()},cancel:function(){j(!0)}});if(!o.length)return j(),O;t(m,O);var I=r(m.attr("class"),r(D.addClass,D.removeClass)),P=D.tempClasses;P&&(I+=" "+P,D.tempClasses=null);var M;return F||(M=p,p+=1),f.push({element:m,classes:I,event:y,classBasedIndex:M,structural:F,options:D,beforeStart:T,close:j}),m.on("$destroy",x),f.length>1?O:(s.$$postDigest(function(){g=p,p=0,$.length=0;var n=[];q(f,function(t){a(t.element)&&n.push(t)}),f.length=0,q(b(n),function(n){function t(){n.beforeStart();var t,e=n.close;if(a(n.anchors?n.from.element||n.to.element:n.element)){var r=w(n);r&&(t=r.start)}if(t){var i=t();i.done(function(n){e(!n)}),S(n,i)}else e()}n.structural?t():($.push({node:C(n.element),fn:t}),n.classBasedIndex===g-1&&($=$.sort(function(n,t){return t.node.contains(n.node)}).map(function(n){return n.fn}),c($)))})}),O)}}]}];t.module("ngAnimate",[]).directive("ngAnimateChildren",G).factory("$$rAFMutex",$n).factory("$$rAFScheduler",z).factory("$$AnimateRunner",Cn).provider("$$animateQueue",gn).provider("$$animation",yn).provider("$animateCss",fn).provider("$$animateCssDriver",mn).provider("$$animateJs",vn).provider("$$animateJsDriver",dn)}(window,window.angular);
!function(){"use strict";function t(t,e,s,n,o,r,a){function i(){return w.length}function l(t){if(1!==arguments.length||t)if(t)m(t.toastId);else for(var e=0;e<w.length;e++)m(w[e].toastId)}function c(t,e,s){return f(v().iconClasses.error,t,e,s)}function u(t,e,s){return f(v().iconClasses.info,t,e,s)}function p(t,e,s){return f(v().iconClasses.success,t,e,s)}function g(t,e,s){return f(v().iconClasses.warning,t,e,s)}function d(t,e){t&&t.isOpened&&w.indexOf(t)>=0&&t.scope.refreshTimer(e)}function m(e,s){function n(){return!w.length}var o=function(t){for(var e=0;e<w.length;e++)if(w[e].toastId===t)return w[e]}(e);o&&!o.deleting&&(o.deleting=!0,o.isOpened=!1,t.leave(o.el).then(function(){o.scope.options.onHidden&&o.scope.options.onHidden(!!s,o),o.scope.$destroy();var t=w.indexOf(o);delete x[o.scope.message],w.splice(t,1);var e=r.maxOpened;e&&w.length>=e&&w[e-1].open.resolve(),n()&&(O.remove(),O=null,$=a.defer())}))}function f(t,e,s,n){return angular.isObject(s)&&(n=s,s=null),C({iconClass:t,message:e,optionsOverride:n,title:s})}function v(){return angular.extend({},r)}function h(e){if(O)return $.promise;O=angular.element("<div></div>"),O.attr("id",e.containerId),O.addClass(e.positionClass),O.css({"pointer-events":"auto"});var s=angular.element(document.querySelector(e.target));if(!s||!s.length)throw"Target for toasts doesn't exist";return t.enter(O,s).then(function(){$.resolve()}),$.promise}function C(s){function r(t,e,s){function n(e){if(s[e])return function(){s[e](t)}}s.allowHtml?(t.scope.allowHtml=!0,t.scope.title=o.trustAsHtml(e.title),t.scope.message=o.trustAsHtml(e.message)):(t.scope.title=e.title,t.scope.message=e.message),t.scope.toastType=t.iconClass,t.scope.toastId=t.toastId,t.scope.extraData=s.extraData,t.scope.options={extendedTimeOut:s.extendedTimeOut,messageClass:s.messageClass,onHidden:s.onHidden,onShown:n("onShown"),onTap:n("onTap"),progressBar:s.progressBar,tapToDismiss:s.tapToDismiss,timeOut:s.timeOut,titleClass:s.titleClass,toastClass:s.toastClass},s.closeButton&&(t.scope.options.closeHtml=s.closeHtml)}function i(t){var s=angular.element("<div toast></div>");return e.get("$compile")(s)(t)}var l=v();if(!function(){var t=l.preventDuplicates&&s.message===B,e=l.preventOpenDuplicates&&x[s.message];return!(!t&&!e)||(B=s.message,x[s.message]=!0,!1)}()){var c=function(){var t={toastId:T++,isOpened:!1,scope:n.$new(),open:a.defer()};return t.iconClass=s.iconClass,s.optionsOverride&&(angular.extend(l,function(t){for(var e=["containerId","iconClasses","maxOpened","newestOnTop","positionClass","preventDuplicates","preventOpenDuplicates","templates"],s=0,n=e.length;s<n;s++)delete t[e[s]];return t}(s.optionsOverride)),t.iconClass=s.optionsOverride.iconClass||t.iconClass),r(t,s,l),t.el=i(t.scope),t}();if(w.push(c),function(){return l.autoDismiss&&l.maxOpened&&w.length>l.maxOpened}())for(var u=w.slice(0,w.length-l.maxOpened),p=0,g=u.length;p<g;p++)m(u[p].toastId);return function(){return l.maxOpened&&w.length<=l.maxOpened||!l.maxOpened}()&&c.open.resolve(),c.open.promise.then(function(){h(l).then(function(){if(c.isOpened=!0,l.newestOnTop)t.enter(c.el,O).then(function(){c.scope.init()});else{var e=O[0].lastChild?angular.element(O[0].lastChild):null;t.enter(c.el,O,e).then(function(){c.scope.init()})}})}),c}}var O,T=0,w=[],B="",x={},$=a.defer();return{active:i,clear:l,error:c,info:u,remove:m,success:p,warning:g,refreshTimer:d}}angular.module("toastr",[]).factory("toastr",t),t.$inject=["$animate","$injector","$document","$rootScope","$sce","toastrConfig","$q"]}(),function(){"use strict";angular.module("toastr").constant("toastrConfig",{allowHtml:!1,autoDismiss:!1,closeButton:!1,closeHtml:"<button>&times;</button>",containerId:"toast-container",extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},maxOpened:0,messageClass:"toast-message",newestOnTop:!0,onHidden:null,onShown:null,onTap:null,positionClass:"toast-top-right",preventDuplicates:!1,preventOpenDuplicates:!1,progressBar:!1,tapToDismiss:!0,target:"body",templates:{toast:"directives/toast/toast.html",progressbar:"directives/progressbar/progressbar.html"},timeOut:5e3,titleClass:"toast-title",toastClass:"toast"})}(),function(){"use strict";function t(t){function e(t,e,s,n){function o(){var t=(i-(new Date).getTime())/a*100;e.css("width",t+"%")}var r,a,i;n.progressBar=t,t.start=function(t){r&&clearInterval(r),a=parseFloat(t),i=(new Date).getTime()+a,r=setInterval(o,10)},t.stop=function(){r&&clearInterval(r)},t.$on("$destroy",function(){clearInterval(r)})}return{require:"^toast",templateUrl:function(){return t.templates.progressbar},link:e}}angular.module("toastr").directive("progressBar",t),t.$inject=["toastrConfig"]}(),function(){"use strict";function t(){this.progressBar=null,this.startProgressBar=function(t){this.progressBar&&this.progressBar.start(t)},this.stopProgressBar=function(){this.progressBar&&this.progressBar.stop()}}angular.module("toastr").controller("ToastController",t)}(),function(){"use strict";function t(t,e,s,n){function o(s,o,r,a){function i(t){return a.startProgressBar(t),e(function(){a.stopProgressBar(),n.remove(s.toastId)},t,1)}function l(){s.progressBar=!1,a.stopProgressBar()}var c;if(s.toastClass=s.options.toastClass,s.titleClass=s.options.titleClass,s.messageClass=s.options.messageClass,s.progressBar=s.options.progressBar,function(){return s.options.closeHtml}()){var u=angular.element(s.options.closeHtml),p=t.get("$compile");u.addClass("toast-close-button"),u.attr("ng-click","close(true, $event)"),p(u)(s),o.children().prepend(u)}s.init=function(){s.options.timeOut&&(c=i(s.options.timeOut)),s.options.onShown&&s.options.onShown()},o.on("mouseenter",function(){l(),c&&e.cancel(c)}),s.tapToast=function(){angular.isFunction(s.options.onTap)&&s.options.onTap(),s.options.tapToDismiss&&s.close(!0)},s.close=function(t,e){e&&angular.isFunction(e.stopPropagation)&&e.stopPropagation(),n.remove(s.toastId,t)},s.refreshTimer=function(t){c&&(e.cancel(c),c=i(t||s.options.timeOut))},o.on("mouseleave",function(){0===s.options.timeOut&&0===s.options.extendedTimeOut||(s.progressBar=s.options.progressBar,c=i(s.options.extendedTimeOut))})}return{templateUrl:function(){return s.templates.toast},controller:"ToastController",link:o}}angular.module("toastr").directive("toast",t),t.$inject=["$injector","$interval","toastrConfig","toastr"]}(),angular.module("toastr").run(["$templateCache",function(t){t.put("directives/progressbar/progressbar.html",'<div class="toast-progress"></div>\n'),t.put("directives/toast/toast.html",'<div class="{{toastClass}} {{toastType}}" ng-click="tapToast()">\n  <div ng-switch on="allowHtml">\n    <div ng-switch-default ng-if="title" class="{{titleClass}}" aria-label="{{title}}">{{title}}</div>\n    <div ng-switch-default class="{{messageClass}}" aria-label="{{message}}">{{message}}</div>\n    <div ng-switch-when="true" ng-if="title" class="{{titleClass}}" ng-bind-html="title"></div>\n    <div ng-switch-when="true" class="{{messageClass}}" ng-bind-html="message"></div>\n  </div>\n  <progress-bar ng-if="progressBar"></progress-bar>\n</div>\n')}]);
angular.module("loancalculator",["ionic","templates","toastr","ngAnimate"]);
angular.module("loancalculator").controller("MainCtrl",["$scope",function(l){}]);
angular.module("loancalculator").provider("appserver",function(){var n={HOST:""};return n.$get=["$q","$http","$log","session","$ionicLoading",function(t,e,o,r,u){function a(a,i){var l=i.url,c=i.data||{},d=i.args||{},p={"Content-Type":"application/json"};r.isAuthenticated()&&(p.Authorization="Token "+r.token);var s=n.HOST+l;return t(function(n,t){u.show({template:"Loading...",duration:3e3});var r={method:a,url:s,data:c,params:d,timeout:3e3,headers:p};o.log(a+" "+r.url),e(r).then(function(t){u.hide(),o.log(t),n(t)},function(n){u.hide(),o.log(n),t(n)})})}return{token:null,get:function(n){return a("GET",n)},post:function(n){return a("POST",n)},put:function(n){return a("PUT",n)},delete:function(n){return a("DELETE",n)}}}],n});
angular.module("loancalculator").factory("form",function(){var a={form:{property:5e4,propertyType:"residential",properties:1,leasehold:0,mortage:0,payment:"serviced",outstanding:0,loantovalue:0,refurbishment:"none",chargeType:"1st",securityType:"residential",credit:"good",capital:1e3,months:3},loan:{total:{payable:0,monthly:0},rates:{nominal:0,overall:0},costs:{financial:0,fees:0,total:0},fees:{arrangement:0,exit:0,legal:0,valuation:0}},submit:function(o){a.form.capital=parseFloat(a.form.capital),a.form.months=parseFloat(a.form.months),a.form.property=parseFloat(a.form.property),a.loan.rates.nominal=.75,a.loan.costs.financial=a.form.capital*(0+a.loan.rates.nominal*a.form.months/12),a.loan.fees.arrangement=.02*(a.form.capital+a.loan.costs.financial),a.loan.costs.fees=a.loan.fees.arrangement+a.loan.fees.exit+a.loan.fees.legal+a.loan.fees.valuation,a.loan.costs.total=a.loan.costs.financial+a.loan.costs.fees,a.loan.total.payable=a.form.capital+a.loan.costs.total,a.loan.total.monthly=a.loan.total.payable/a.form.months,a.loan.rates.overall=a.loan.total.payable/a.form.capital-1,a.loan.rates.overall=a.loan.rates.overall.toFixed(2)}};return a});
angular.module("loancalculator").factory("login",["$q","appserver","session",function(n,o,t){return{login:function(a,r){return n(function(n,u){o.post({url:"login/",data:{username:a,password:r}}).then(function(o){t.token=o.data.token,n(o)},function(n){u(n)})})}}}]);
angular.module("loancalculator").factory("session",["$q",function(n){var t={token:"",isAuthenticated:function(){return t.token&&""!=t.token}};return t}]);
angular.module("loancalculator").config(["appserverProvider",function(a){a.HOST="https://ec2-52-67-183-188.sa-east-1.compute.amazonaws.com:7004/"}]);
angular.module("loancalculator").config(["$stateProvider","$urlRouterProvider",function(t,e){t.state("step1",{url:"/step1/",authRequired:!1,templateUrl:"step1/template",controller:"Step1Ctrl",controllerAs:"vm"}).state("loan",{url:"/loan/",authRequired:!1,templateUrl:"loan/template",controller:"LoanCtrl",controllerAs:"vm"}).state("step2",{url:"/step2/",authRequired:!1,templateUrl:"step2/template",controller:"Step2Ctrl",controllerAs:"vm"}).state("step3",{url:"/step3/",authRequired:!1,templateUrl:"step3/template",controller:"Step3Ctrl",controllerAs:"vm"}).state("login",{url:"/login/",authRequired:!1,templateUrl:"login/template",controller:"LoginCtrl",controllerAs:"vm"}),e.otherwise("/step1/")}]);
angular.module("loancalculator").controller("LoanCtrl",["$scope","form","$state",function(o,n,t){return{form:n.form,loan:n.loan,submit:function(){t.transitionTo("step2")}}}]);
angular.module("loancalculator").controller("LoginCtrl",["$scope","login","$state","toastr",function(o,n,t,a){var e={username:"",password:"",doLogin:function(){n.login(e.username,e.password).then(function(o){a.success("Successfully logged in!"),t.transitionTo("home")},function(o){a.error("Authentication failed!")})},onLoad:function(){}};return e.onLoad(),e}]);
angular.module("loancalculator").controller("Step1Ctrl",["$scope","form","$state",function(o,t,r){var a={form:t.form,a:function(o,t,r){alert(0xb21eb2a25ed94000),alert(123)},submit:function(){t.submit(a.form),r.transitionTo("loan")}};return a}]);
angular.module("loancalculator").controller("Step2Ctrl",["$scope","form","$state",function(o,t,r){var n={form:t.form,submit:function(){t.submit(n.form),r.transitionTo("step3")}};return n}]);
angular.module("loancalculator").controller("Step3Ctrl",["$scope","form","$state",function(o,t,r){var n={form:t.form,submit:function(){t.submit(n.form),r.transitionTo("step3")}};return n}]);
angular.module("loancalculator").run(["$ionicPlatform","$state","session","$rootScope",function(o,a,n,t){o.ready(function(){window.cordova&&window.cordova.plugins&&window.cordova.plugins.Keyboard&&(cordova.plugins.Keyboard.hideKeyboardAccessoryBar(!0),cordova.plugins.Keyboard.disableScroll(!0)),window.StatusBar&&StatusBar.styleDefault()}),t.$on("$stateChangeStart",function(o,t,r,e,i){t.authRequired&&!n.isAuthenticated()&&(a.transitionTo("login"),o.preventDefault())})}]);