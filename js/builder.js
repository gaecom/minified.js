if(/^u/.test(typeof define)){var def={};this.define=function(g,n){def[g]=n()};this.require=function(g){return def[g]}}
define("minifiedUtil",function(){function g(c){return c.substr(0,3)}function n(c){return null!=c?""+c:""}function m(c){return"string"==typeof c}function k(c){return"function"==typeof c}function j(c){return!!c&&"object"==typeof c}function q(c){return"number"==typeof c}function u(c){return j(c)&&!!c.getDay}function e(c){return!0===c||!1===c}function w(c){var a=typeof c;return"object"==a?!(!c||!c.getDay):"string"==a||"number"==a||e(c)}function s(c){return!!c&&null!=c.length&&!m(c)&&!(c&&c.nodeType)&&
!k(c)}function t(c){return c}function B(c){return c+1}function v(c,a,b){return n(c).replace(a,null!=b?b:"")}function T(c){return v(c,/[\\\[\]\/{}()*+?.$|^-]/g,"\\$&")}function P(c){return v(c,/^\s+|\s+$/g)}function C(c,a){for(var b in c)c.hasOwnProperty(b)&&a(b,c[b]);return c}function y(c,a){if(c)for(var b=0;b<c.length;b++)a(c[b],b);return c}function Q(c,a){var b=[];y(c,function(c,d){a(c,d)&&b.push(c)});return b}function z(c,a,b){var d=[];c(a,function(c,a){s(c=b(c,a))?y(c,function(c){d.push(c)}):
null!=c&&d.push(c)});return d}function D(c,a){return z(y,c,a)}function E(c){var a=[];C(c,function(c){a.push(c)});return a}function x(c,a){var b=[];y(c,function(c,d){b.push(a(c,d))});return b}function A(c,a,b){var d=a;y(c,function(c,a){d=b(d,c,a)});return d}function F(c,a){if(s(c)){var b=N(a);return f(N(c).sub(0,b.length),b)}return null!=a&&c.substr(0,a.length)==a}function G(c,a){if(s(c)){var b=N(a);return N(c).sub(-b.length).equals(b)||!b.length}return null!=a&&c.substr(c.length-a.length)==a}function W(c){var a=
c.length;return x(c,function(){return c[--a]})}function H(c,a,b){if(!s(c))return[];var d=c.length,f=0>a?d+a:a,h=null==b?d:0<=b?b:d+b;return Q(c,function(c,a){return a>=f&&a<h})}function U(c,a){var b={};y(c,function(c){b[c]=a});return b}function a(c,a,b){C(c,function(c,d){if(null==a[c]||!b)a[c]=d});return a}function b(c,a){for(var b=k(a)?a:function(c,b){if(a===c)return b},d,f=0;f<c.length;f++)if(null!=(d=b(c[f],f)))return d}function d(c,a){if(s(c))for(var b=0;b<c.length;b++)if(c[b]==a)return!0;return!1}
function f(c,a){var d=k(c)?c():c,h=k(a)?a():a;if(d==h)return!0;if(null==d||null==h)return!1;if(w(d)||w(h))return u(d)&&u(h)&&d.getTime()==h.getTime();if(s(d))return s(h)?d.length!=h.length?!1:!b(d,function(c,a){if(!f(c,h[a]))return!0}):!1;if(s(h))return!1;var e=E(d),g=e.length,n=0;C(h,function(){n++});return g!=n?!1:!b(e,function(c){if(!f(d[c],h[c]))return!0})}function h(c,a,b){return c.apply(b&&a,x(b||a,t))}function O(c,a,b){return x(c,function(c){return k(c)?h(c,a,b):V})}function I(c,a,b,d){return function(){return h(c,
a,D([b,arguments,d],t))}}function K(c,a,b,d){setTimeout(function(){h(a,b,d)},c)}function X(c,a){return ba(a,0,0,0,c)}function ba(c,a,b,d,f,h,e){function s(c){var a=c.length;return a>e?s(c.substr(0,a-e))+(h||",")+c.substr(a-e):c}var k=0>c,n=/(\d+)(\.(.*))?/.exec((k?-c:c).toFixed(a));c=n[1];for(d=(d||".")+n[3];c.length<(f||1);)c="0"+c;e&&(c=s(c));return(k?"-":"")+c+(a?b?v(d,/[.,]?0+$/):d:"")}function ca(c,a,b){return null==a||!c?0:60*parseInt(c[a])+parseInt(c[a+1])+b.getTimezoneOffset()}function Y(c,
a){c=v(c,/^\?/);if(u(a)){var d,f,h=c,e=a,k={y:["FullYear",t],M:["Month",B],n:["Month",ha],N:["Month",da],d:["Date",t],m:["Minutes",t],H:["Hours",t],h:["Hours",function(c){return c%12||12}],K:["Hours",B],k:["Hours",function(c){return c%12+1}],s:["Seconds",t],S:["Milliseconds",t],a:["Hours",function(c,a){return(a||ia)[12>c?0:1]}],w:["Day",pa],W:["Day",ja],z:["TimezoneOffset",function(c){if(d)return d;var a=0<c?c:-c;return(0>c?"+":"-")+X(2,Math.floor(a/60))+X(2,a%60)}]};if(f=/^\[(([+-]\d\d)(\d\d))\]\s*(.*)/.exec(c))d=
f[1],e=Z(a,"minutes",ca(f,2,a)),h=f[4];return v(h,/(\w)(\1*)(?:\[([^\]]+)\])?/g,function(c,a,b,d){if(a=k[a])c=e["get"+(s(a)?a[0]:a)].call(e),d=d&&d.split(","),c=s(a[1])?(d||a[1])[c]:a[1](c,d),null!=c&&!m(c)&&(c=X(b.length+1,c));return c})}return b(c.split(/\s*\|\s*/),function(c){var b,d;if(b=/^([<>]?)(=?)([^:]*?)\s*:\s*(.*)$/.exec(c)){c=a;var f=parseFloat(b[3]);if(isNaN(f)||!q(c))c=null==c?"null":n(c),f=b[3];if(b[1]){if(!b[2]&&c==f||"<"==b[1]&&c>f||">"==b[1]&&c<f)return null}else if(c!=f)return null;
c=b[4]}if(q(a)&&(b=/(?:(0[0.,]*)|(#[#.,]*))(_*)(9*)/.exec(c))){d=n(b[1])+n(b[2]);var f=n(b[1]).length?v(d,/[.,]/g).length:1,h=v(v(d,/^.*[0#]/),/[^,.]/g),e=n(b[3]).length+n(b[4]).length,s,k;if(d=/([.,])[^.,]+[.,]/.exec(b[0]))s=d[1],k=d[0].length-2;s=ba(a,e,n(b[3]).length,h,f,s,k);k=c;c=b.index;b=n(b[0]).length;return k.substr(0,c)+s+k.substr(c+b)}return c})}function aa(c,a){if(1==arguments.length)return aa(null,c);if(/^\?/.test(c)){if(""==P(a))return null;c=c.substr(1)}var b,d=(b=/[0#]([.,])[_9]/.exec(c))?
b[1]:(b=/^[.,]$/.exec(c))?b[0]:".";b=parseFloat(v(v(v(a,","==d?/\./g:/,/g),d,"."),/^[^\d-]*(-?\d)/,"$1"));return isNaN(b)?V:b}function ka(c){return new Date(c.getTime())}function ea(c,a,b){c["set"+a].call(c,c["get"+a].call(c)+b);return c}function Z(c,a,b){return 3>arguments.length?Z(new Date,c,a):ea(ka(c),a.charAt(0).toUpperCase()+a.substr(1),b)}function la(c,a,b){var d=a.getTime(),f=b.getTime(),h=f-d;if(0>h)return-la(c,b,a);if(a={milliseconds:1,seconds:1E3,minutes:6E4,hours:36E5}[c])return h/a;a=
c.charAt(0).toUpperCase()+c.substr(1);c=Math.floor(h/{fullYear:31536E6,month:2628E6,date:864E5}[c]-2);d=ea(new Date(d),a,c);for(h=c;h<1.2*c+4;h++)if(ea(d,a,1).getTime()>f)return h}function fa(c,a,b){var d=/^(([^.]|\.\.)+)\.([^.].*)/.exec(a);if(d){a=v(d[1],/\.\./g,".");var f=c[a];return fa(k(f)?f():f,d[3],b)}a=v(a,/\.\./g,".");f=c[a];return b===V?k(f)?f():f:k(f)?f(b):c[a]=b}function ma(c){return v(c,/['"\t\n\r]/g,function(c){return qa[c]})}function na(c,a){if(ga[c])return ga[c];var b,d=new Function("obj",
"out","esc","print","_","with(obj||{}){"+x(c.split(/<%|%>/),function(c,a){return a%2?(b=/^=(.*)::(.*)/.exec(c))?'print(esc(_.formatValue("'+ma(b[2])+'",'+b[1]+")));\n":(b=/^=(.*)/.exec(c))?"print(esc("+b[1]+"));\n":c+";\n":'print("'+ma(c)+'");\n'}).join("")+"}");return ga[c]=function(c){var b=[];d(c,b,a||t,function(){h(b.push,b,arguments)},N);return b.join("")}}function oa(c){return v(c,/[<>'"&]/g,function(c){return"&#"+c.charCodeAt(0)+";"})}function R(c,a){for(var b=0,d=0;d<c.length;d++){var f=c[d];
if(a&&s(f))for(var h=0;h<f.length;h++)this[b++]=f[h];else this[b++]=f}this.length=b;this._=!0}function N(){return new R(arguments,!0)}function S(c){return function(a,b){return new R(c(this,a,b))}}function L(c){return function(a,b){return c(this,a,b)}}function M(c){return function(a,b,d){return new R(c(a,b,d))}}var V,da="January,February,March,April,May,June,July,August,September,October,November,December".split(/,/),ha=x(da,g),ja="Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(/,/),
pa=x(ja,g),ia=["am","pm"],qa={'"':'\\"',"'":"\\'","\n":"\\n","\t":"\\t","\r":"\\r"},ga={};a({each:L(y),filter:S(Q),collect:S(D),map:S(x),reduce:L(A),toObject:L(U),equals:L(f),sub:S(H),reverse:S(W),find:L(b),startsWith:L(F),endsWith:L(G),contains:L(d),call:S(O),array:function(){return x(this,t)},func:function(){var c=this;return function(){return new R(O(c,arguments))}},join:function(c){return x(this,t).join(c)},sort:function(c){return new R(x(this,t).sort(c))},uniq:function(){var c={};return this.filter(function(a){if(c[a])return!1;
c[a]=1;return!0})},intersection:function(c){var a=U(c,1);return this.filter(function(c){var b=a[c];a[c]=0;return b})},tap:function(c){c(this);return this},toString:function(){return"["+this.map(function(c){return m(c)?"'"+v(c,/'/g,"\\'")+"'":c}).join(", ")+"]"}},R.prototype);a({bind:I,partial:function(c,a,b){return I(c,null,a,b)},once:function(c){var a=0;return function(){if(!a++)return h(c,this,arguments)}},nonOp:t,each:y,eachObj:C,toObject:U,filter:M(Q),filterObj:function(c,a){var b={};C(c,function(c,
d){a(c,d)&&(b[c]=d)});return b},collect:M(D),collectObj:M(function(c,a){return z(C,c,a)}),map:M(x),mapObj:function(c,a){var b={};C(c,function(c,d){b[c]=a(c,d)});return b},reduce:A,find:b,contains:d,sub:M(H),reverse:M(W),startsWith:F,endsWith:G,equals:f,toString:n,isList:s,isFunction:k,isObject:j,isNumber:q,isBool:e,isDate:u,isValue:w,isString:m,toString:n,prop:fa,escapeRegExp:T,trim:P,defer:function(c,a,b){K(0,c,a,b)},delay:K,dateClone:ka,dateAdd:Z,dateDiff:la,dateMidnight:function(a){a=a||new Date;
return new Date(a.getFullYear(),a.getMonth(),a.getDate())},formatNumber:ba,pad:X,formatValue:Y,parseDate:function(a,d){var f={y:0,M:[1,1],n:[1,ha],N:[1,da],d:2,m:4,H:3,h:3,K:[3,1],k:[3,1],s:5,S:6,a:[3,ia]},h={},e=1,k,n,g;if(/^\?/.test(a)){if(""==P(d))return null;a=a.substr(1)}if(g=/^\[([+-]\d\d)(\d\d)\]\s*(.*)/.exec(a))k=g,a=g[3];if(!(g=RegExp(a.replace(/(.)(\1*)(?:\[([^\]]*)\])?/g,function(a,c,b,d){return/[dmhkyhs]/i.test(c)?(h[e++]=c,a=b.length+1,"(\\d"+(2>a?"+":"{1,"+a+"}")+")"):"z"==c?(n=e,e+=
2,"([+-]\\d\\d)(\\d\\d)"):/[Nna]/.test(c)?(h[e++]=[c,d&&d.split(",")],"([a-zA-Z\u0080\ufffd\u1fff]+)"):/w/i.test(c)?"[a-zA-Z\u0080\ufffd\u1fff]+":/\s/.test(c)?"\\s+":T(a)})).exec(d)))return V;for(var j=[0,0,0,0,0,0,0],O=1;O<e;O++){var w=g[O],m=h[O];if(s(m)){var K=m[0],q=f[K],I=q[0],m=b(m[1]||q[1],function(a,c){return F(w.toLowerCase(),a.toLowerCase())?c:null});if(null==m)return V;j[I]="a"==K?j[I]+12*m:m}else m&&(K=parseInt(w),q=f[m],s(q)?j[q[0]]+=K-q[1]:j[q]+=K)}f=new Date(j[0],j[1],j[2],j[3],j[4],
j[5],j[6]);return Z(f,"minutes",-ca(k,1,f)-ca(g,n,f))},parseNumber:aa,keys:M(E),values:M(function(a){var b=[];C(a,function(a,c){b.push(c)});return b}),copyObj:a,coal:function(){return b(arguments,t)},format:function(a,b){return v(a,/{([^,}]*)(,([^}]*))?}/g,function(a,c,d,f){a=""==c?b:fa(b,c);return d?Y(f,a):n(a)})},escapeHtml:oa,template:na,htmlTemlplate:function(a){return na(a,oa)}},N);return{_:N}});var l=!0,p=null,r=!1;if(/^u/.test(typeof define)){var J={};this.define=function(g,n){J[g]=n()};this.require=function(g){return J[g]}}
define("minified",function(){function g(a){return a!=p?""+a:""}function n(a){return"string"==typeof a}function m(a){return"function"==typeof a&&!a.item}function k(a){return a&&a.length!=p&&!n(a)&&!(a&&a.nodeType)&&!m(a)}function j(a,b){for(var d in a)a.hasOwnProperty(d)&&b(d,a[d]);return a}function q(a,b){for(var d=0;a&&d<a.length;d++)b(a[d],d);return a}function u(a,b){var d=[];q(a,function(a,h){b(a,h)&&d.push(a)});return d}function e(a,b){var d=[];q(a,function(a,h){k(a=b(a,h))?q(a,function(a){d.push(a)}):
a!=p&&d.push(a)});return d}function w(a,b){var d=[];j(a,function(a,h){k(a=b(a,h))?q(a,function(a){d.push(a)}):a!=p&&d.push(a)});return d}function s(a,b,d){return g(a).replace(b,d||"")}function t(a){return parseFloat(s(a,/^[^\d-]+/))}function B(a){var b={$position:"absolute",$visibility:"hidden",$display:"block",$height:p},d=a.get(b);a.set(b);b=a.get("$height",l);a.set(d);return b}function v(a){a()}function T(){q(F,v);F=p}function P(a){F?F.push(a):x.setTimeout(a,0)}function C(a,b,d,f){return function(){var h=
z(A.createElement(a));k(b)||"object"!=typeof b?h.add(b):h.set(b).add(d);f&&f(h);return h}}function y(){function a(a,h){b==p&&(b=a,d=h,x.setTimeout(function(){q(f,v)},0))}var b,d=[],f=[],h=a.then=function(a,h){function e(){try{var f=b?a:h;if(m(f)){var s=f.apply(p,d);s&&m(s.then)?s.then(function(a){k(l,[a])},function(a){k(r,[a])}):k(l,[s])}else k(b,d)}catch(j){k(r,[j])}}var k=y();b!=p?x.setTimeout(e,0):f.push(e);return k};a.always=function(a){return h(a,a)};a.error=function(a){return h(0,a)};return a}
function Q(a){return U[a]||"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}function z(a,b,d){return m(a)?P(a):new E(D(a,b,d))}function D(a,b,d){function f(a){a=function Y(a){return k(a)?e(a,Y):a}(a);return h?u(a,function(a){for(;a=a.parentNode;){if(a===h)return l;if(d)return r}}):a}var h,j,g,m,w;if(b&&1!=(b=D(b)).length)return e(b,function(b){return D(a,b,d)});h=b&&b[0];if(!n(a))return f(k(a)?a:[a]);if(1<(b=a.split(/\s*,\s*/)).length)return e(b,function(a){return D(a,h,d)});if(b=/(\S+)\s+(.+)$/.exec(a))return D(b[2],
D(b[1],h),d);if(a!=(b=s(a,/^#/)))return f([A.getElementById(b)]);h=h||A;j=(b=/([^.]*)\.?([^.]*)/.exec(a))[1];m=b[2];b=(g=h.getElementsByClassName&&m)?h.getElementsByClassName(m):h.getElementsByTagName(j||"*");if(j=g?j:m)w=RegExp("\\b"+j+"\\b","i"),b=u(b,function(a){return w.test(a[g?"nodeName":"className"])});return h?f(b):b}function E(a){for(var b=this.length=a.length,d=0;d<b;d++)this[d]=a[d]}var x=this,A=document,F=[],G=[],W=e(["msR","webkitR","mozR","r"],function(a){return x[a+"equestAnimationFrame"]})[0]||
function(a){x.setTimeout(a,33)},H=!!A.all&&!F.map,U={"\t":"\\t","\r":"\\r","\n":"\\n",'"':'\\"',"\\":"\\\\"};j({each:function(a){return q(this,a)},filter:function(a){return new E(u(this,a))},collect:function(a){return new E(e(this,a))},sub:function(a,b){var d=0>a?this.length+a:a,f=0<=b?b:this.length+(b||0);return new E(u(this,function(a,b){return b>=d&&b<f}))},find:function(a){for(var b,d=m(a)?a:function(b,d){if(a===b)return d},f=0;f<this.length;f++)if((b=d(this[f],f))!=p)return b},hasClass:function(){var a=
RegExp("\\b"+name+"\\b");return this.find(function(b){return a.test(b.className)?b:p})},remove:function(){q(this,function(a){a.parentNode.removeChild(a)})},get:function(a,b){var d=this,f=d[0];if(f){if(n(a)){var h=s(a,/^[$@]/),e;e="$"==a?f.className:"$$"==a?H?f.style.cssText:f.getAttribute("style"):/\$\$/.test(a)&&("hidden"==f.style.visibility||"none"==f.style.display)?0:"$$fade"==a?isNaN(e=H?t(f.style.filter)/100:t(f.style.opacity))?1:e:"$$slide"==a?d.get("$height"):/^\$/.test(a)?x.getComputedStyle?
x.getComputedStyle(f,p).getPropertyValue(s(h,/[A-Z]/g,function(a){return"-"+a.toLowerCase()})):(f.currentStyle||f.style)[h]:/^@/.test(a)?f.getAttribute(h):f[h];return b?t(e):e}var g={};(k(a)?q:j)(a,function(a){g[a]=d.get(a,b)});return g}},set:function(a,b){var d=this,f;void 0!==b?"$$fade"==a||"$$slide"==a?d.set({$visibility:0<(f=t(b))?"visible":"hidden",$display:"block"}).set("$$fade"==a?H?{$filter:"alpha(opacity = "+100*f+")",$zoom:1}:{$opacity:f}:{$height:/px$/.test(b)?b:function(a,b,d){return f*
(f&&B(z(d)))+"px"},$overflow:"hidden"}):q(d,function(d,f){var e=s(a,/^[@$]/),k=d.className||"",j=/^\$/.test(a)?d.style:d,g=m(b)?b(z(d).get(a),f,d):b;"$"==a?g!=p&&(q(g.split(/\s+/),function(a){var b=s(a,/^[+-]/),d=k;k=s(k,RegExp("\\b"+b+"\\b"));if(/^\+/.test(a)||b==a&&d==k)k+=" "+b}),d.className=s(k,/^\s+|\s+(?=\s|$)/g)):"$$"==a?H?j.cssText=g:g!=p?d.setAttribute("style",g):d.removeAttribute("style"):/^@/.test(a)?g!=p?j.setAttribute(e,g):j.removeAttribute(e):j[e]=g}):n(a)||m(a)?d.set("$",a):j(a,function(a,
b){d.set(a,b)});return d},add:function(a,b){return q(this,function(d,f){var h;(function I(a){k(a)?q(a,I):m(a)?I(a(d,f)):a!=p&&(a=a&&a.nodeType?a:A.createTextNode(a),h?h.parentNode.insertBefore(a,h.nextSibling):b?b(a,d,d.parentNode):d.appendChild(a),h=a)})(a&&a.nodeType&&f?p:a)})},fill:function(a){return q(this,function(a){z(a.childNodes).remove()}).add(a)},addBefore:function(a){return this.add(a,function(a,d,f){f.insertBefore(a,d)})},addAfter:function(a){return this.add(a,function(a,d,f){f.insertBefore(a,
d.nextSibling)})},addFront:function(a){return this.add(a,function(a,d){d.insertBefore(a,d.firstChild)})},replace:function(a){return this.add(a,function(a,d,f){f.replaceChild(a,d)})},clone:function(a){return new E(e(this,function(b){var d=b&&b.nodeType;if(1==d){var f={$:b.className||p,$$:H?b.style.cssText:b.getAttribute("style")};q(b.attributes,function(a){var d=a.name;"id"!=d&&"style"!=d&&"class"!=d&&b.getAttribute(d)&&(f["@"+d]=a.value)});return C(b.tagName,f,z(b.childNodes).clone(),a)}return 5>
d?b.data:p}))},animate:function(a,b,d,f){var h=this,e=[],k=/-?[\d.]+/,n,w=y(),u=m(d)?d:function(a,b,f){return a+f*(b-a)*(d+(1-d)*f*(3-2*f))};f=f||{};f.time=0;f.stop=function(){n();w(r)};b=b||500;d=d||0;q(h,function(b){var d={a:z(b),c:{}};j(d.b=d.a.get(a),function(b,f){var h=a[b];"$$slide"==b&&(h=h*B(d.a)+"px");d.c[b]=/^[+-]=/.test(h)?s(h.substr(2),k,t(f)+t(s(h,/\+?=/))):h});e.push(d)});n=z.loop(function(a){function d(a,b){return/^#/.test(a)?parseInt(6<a.length?a.substr(1+2*b,2):(a=a.charAt(1+b))+
a,16):parseInt(s(a,/[^\d,]+/g).split(",")[b])}f.time=a;a>=b||0>a?(q(e,function(a){a.a.set(a.c)}),n(),f.time=p,w(l,[h])):q(e,function(f){j(f.b,function(h,e){var j="rgb(",n=f.c[h],m=a/b;if(/^#|rgb\(/.test(n))for(var w=0;3>w;w++)j+=Math.round(u(d(e,w),d(n,w),m))+(2>w?",":")");else j=s(n,k,g(u(t(e),t(n),m)));f.a.set(h,j)})})});return w},toggle:function(a,b,d,f){var h=this,e={},k=r,j=/\b(?=\w)/g;return!b?h.toggle(s(a,j,"-"),s(a,j,"+")):h.set(a)&&function(j){j!==k&&(k=j===l||j===r?j:!k,d?h.animate(k?b:
a,e.stop?e.stop()||e.time:d,f,e):h.set(k?b:a))}},on:function(a,b,d,f){return q(this,function(h,e){q(a.split(/\s/),function(a){function k(h){h=h||x.event;if((!b.apply(f?d:h.target,f||d||[h,e])||f)&&a==j)h.stopPropagation&&(h.preventDefault(),h.stopPropagation()),h.returnValue=r,h.cancelBubble=l}var j=s(a,/\|/);(b.M=b.M||[]).push({e:h,h:k,n:j});h.addEventListener?h.addEventListener(j,k,l):h.attachEvent("on"+j,k)})})}},function(a,b){E.prototype[a]=b});j({request:function(a,b,d,f,h,s){var m,q=d,t=0,u=
y();try{return m=x.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Msxml2.XMLHTTP.3.0"),d!=p&&(f=f||{},!n(d)&&!(d&&d.nodeType)&&(q=w(d,function aa(a,b){return k(b)?e(b,function(b){return aa(a,b)}):encodeURIComponent(a)+(b!=p?"="+encodeURIComponent(b):"")}).join("&")),/post/i.test(a)?!(d&&d.nodeType)&&!n(d)&&!f["Content-Type"]&&(f["Content-Type"]="application/x-www-form-urlencoded"):(b+="?"+q,q=p)),m.open(a,b,l,h,s),j(f,function(a,b){m.setRequestHeader(a,b)}),m.onreadystatechange=function(){4==
m.readyState&&!t++&&(200==m.status?u(l,[m.responseText,m.responseXML]):u(r,[m.status,m.statusText,m.responseText]))},m.send(q),u}catch(v){t||u(r,[0,p,g(v)])}},toJSON:function b(d){return d==p?""+d:n(d=d.valueOf())?'"'+s(d,/[\\\"\x00-\x1f\x22\x5c]/g,Q)+'"':k(d)?"["+e(d,b).join()+"]":"object"==typeof d?"{"+w(d,function(d,h){return b(d)+":"+b(h)}).join()+"}":g(d)},parseJSON:x.JSON?x.JSON.parse:function(b){b=s(b,/[\x00\xad\u0600-\uffff]/g,Q);if(/^[[\],:{}\s]*$/.test(s(s(b,/\\["\\\/bfnrtu]/g),/"[^"\\\n\r]*"|true|false|null|[\d.eE+-]+/g)))return eval("("+
b+")")},ready:P,setCookie:function(b,d,f,h,e,k){A.cookie=b+"="+(k?d:escape(d))+(f?"; expires="+("object"==typeof f?f:new Date((new Date).getTime()+864E5*f)).toUTCString():"")+"; path="+(h?escapeURI(h):"/")+(e?"; domain="+escape(e):"")},getCookie:function(b,d){var f,h=(f=RegExp("(^|;)\\s*"+b+"=([^;]*)").exec(A.cookie))&&f[2];return d?h:h&&unescape(h)},loop:function(b){var d={d:b,f:(new Date).getTime(),b:function(){for(var b=0;b<G.length;b++)G[b]===d&&G.splice(b--,1)}};2>G.push(d)&&function h(){q(G,
function(b){b.d(Math.max(0,(new Date).getTime()-b.f),b.b)}).length&&W(h)}();return d.b},wait:function(b){var d=y();x.setTimeout(function(){d(l,[b])},b||0);return d},off:function(b){q(b.M,function(b){b.e.removeEventListener?b.e.removeEventListener(b.n,b.h,l):b.e.detachEvent("on"+b.n,b.h)});b.M=p}},function(b,d){z[b]=d});x.onload=T;A.addEventListener&&A.addEventListener("DOMContentLoaded",T,r);return{$:z,$$:function(b){return D(b)[0]},EE:C}});var _=require("minifiedUtil")._;
function parseSourceSections(g){function n(){return{id:"anon"+m++,src:[],desc:"",requires:{},requiredBy:{},syntax:[],example:[],params:[]}}g=g.split("\n");var m=100,k=[],j=n(),q=!1;_.each(g,function(m){if(q&&/^.*\*\/\s*$/.test(m))q=!1;else if(q){var e=m.replace(/^\s*(\*\s?)?/,"").replace(/\s*$/,""),g=e.match(/^\s*@([a-z]+)/);g?(g=g[1],e=_.trim(e.replace(/^\s*@[a-z]+\s*/,"")),"syntax"==g||"example"==g?j[g].push(e):"requires"==g?e.length&&_.each(e.split(/\s+/),function(e){j.requires[e]=1}):"param"==
g?j.params.push({name:e.replace(/\s.*$/,""),desc:e.replace(/^\S+\s+/,"")}):"return"==g?j.params.push({name:"@return",desc:e}):"function"==g?j.params[j.params.length-1].funcs.push(e):j[g]=""!=e?e:1):j.params.length?j.params[j.params.length-1].desc+="\n"+_.trim(e):j.example.length?j.example[j.example.length-1]+="\n"+e:j.desc+=e+"\n"}else/^\s*\/\*\$/.test(m)&&!/\*\/\s*$/.test(m)&&(q=!0,k.push(j),j=n());j.src.push(m)});k.push(j);return k}
function createSectionMap(g){var n={};_.each(g,function(g){n[g.id]=g});return n}function completeRequirements(g,n){var m=0;_.each(g,function(k){_.eachObj(k.requires,function(j){var g=n[j];if(!g)throw Error('Unknown id in requirement: "'+j+'"');_.eachObj(g.requires,function(j){k.requires[j]||(m++,k.requires[j]=1)})})});0<m?completeRequirements(g,n):_.each(g,function(k){_.eachObj(k.requires,function(j){n[j].requiredBy[k.id]=1})})}
function calculateDependencies(g,n){var m={};_.eachObj(n,function(k){n[k]&&(m[k]=1,_.eachObj(g[k].requires,function(k){m[k]=1}))});return m}function createDefaultConfigurationMap(g,n){var m={};_.each(g,function(k){if(k.configurable&&("default"==k.configurable||n))m[k.id]=1});return m}
function compile(g,n,m){var k="",j=calculateDependencies(n,m),q=[],u=!0;_.filter(g,function(e){return j[e.id]||!(e.configurable||e.dependency)}).each(function(e){_.each(e.src,function(e){if(/^\s*$/.test(e))u||(k+="\n"),u=!0;else{var g=e.match(/^(\s*)\/\/\s*@(cond|condblock)\s+(\!?)(\w*)\s*(.*)$/);if(g&&"cond"==g[2]&&!!j[g[4]]!=("!"==g[3]))k+=g[1]+g[5]+"\n";else if(g&&"condblock"==g[2])q.unshift(!!j[g[4]]!=("!"==g[3]));else if(q.length&&/^\s*\/\/\s*@condend(\s|$)/.test(e))q.shift();else if(0==q.length||
q[0])k+=e+"\n";u=!1}})});return k}function prepareSections(g){g=parseSourceSections(g);var n=createSectionMap(g);completeRequirements(g,n);var m=createDefaultConfigurationMap(g);return{sections:g,sectionMap:n,enabledSections:m}}var CONFIG_START="minified.js config start --",CONFIG_COMMENT="// - ",CONFIG_ALL="All sections.",CONFIG_ALL_EXCEPT="All sections except ",CONFIG_ONLY="Only sections ";
function serializeEnabledSections(g,n){var m=_.filter(g,function(e){return e.configurable}),k=_.filter(_.keys(n),function(e){return n[e]}),j,q=[];k.length==m.length?(j=CONFIG_COMMENT+CONFIG_ALL,q=[]):k.length/3>m.length/2?(j=CONFIG_COMMENT+CONFIG_ALL_EXCEPT,q=_.filter(m,function(e){return!n[e.id]}).collect(function(e){return e.id})):(j=CONFIG_COMMENT+CONFIG_ONLY,q=k);var u="// "+CONFIG_START+" use this comment to re-create configuration in the Builder\n"+j,e=50;_(q).sort().each(function(g){e<g.length?
(e=70,u+="\n// - "+g+", "):(u+=g+", ",e-=g.length+2)});return u=u.replace(/,\s*$/,".\n")}function fixConfig(g,n){_.eachObj(n,function(m){g[m]?_.copyObj(g[m].requires,n):delete n[m]});return n}
function deserializeEnabledSections(g,n,m){function k(e){return RegExp("^"+e.replace(/ /g,"\\s+"))}var j=k(CONFIG_START+".*"),q=k(CONFIG_ALL.replace(/\./,"\\.")),u=k(CONFIG_ALL_EXCEPT+"\\s*"),e=k(CONFIG_ONLY+"\\s*"),w=k(CONFIG_COMMENT);m=m.split("\n");for(var s=0;s<m.length;s++){var t=m[s];if(/^\s*\/\/s*/.test(t)&&(t=t.replace(/^\s*\/\/\s*/,""),j.test(t)&&s+1<m.length)){for(var t="",B=s+1;B<m.length;B++)if(w.test(m[B])){if(t+=m[B].replace(w,""),/\s*\.\s*$/.test(m[B]))break}else break;if(q.test(t))return createDefaultConfigurationMap(g,
!0);t=t.replace(/\s*\.\s*$/,"");if(u.test(t)){var v=createDefaultConfigurationMap(g,!0);_.each(t.replace(u,"").split(/\s*,\s*/),function(e){delete v[e]});return fixConfig(n,v)}if(e.test(t))return v={},_.each(t.replace(e,"").split(/\s*,\s*/),function(e){n[e]&&(v[e]=1)}),fixConfig(n,v)}}return null};var MINI=require("minified"),$=MINI.$,$$=MINI.$$,EE=MINI.EE,_=require("minifiedUtil")._,MAX_SIZE=4095,SRC="/minified-web-src.js",GROUPS="INTERNAL SELECTORS ELEMENT REQUEST JSON EVENTS COOKIE ANIMATION OPTIONS".split(" ");
function closureCompile(g,n,m){$.request("post","http://closure-compiler.appspot.com/compile",{js_code:g,output_format:"json",output_info:["compiled_code","statistics"],output_file_name:"minified-custom.js",compilation_level:n?"ADVANCED_OPTIMIZATIONS":"SIMPLE_OPTIMIZATIONS"}).then(function(g){m&&m($.parseJSON(g))},function(g,j,n){window.console&&console.log("error",g,j,n);m&&m(null)}).error(function(g){window.console&&console.log(g)})}
function setUpConfigurationUI(g){function n(){$(".modCheck").each(function(e){var g=0;$(".secCheck",e.parentNode.parentNode).each(function(e){e.checked&&g++});e.checked=0<g})}function m(e){var j=g.sectionMap[e.id.substr(4)];e.checked?_.eachObj(j.requires,function(e){$("#sec-"+e).set("checked",!0)}):_.eachObj(j.requiredBy,function(e){$("#sec-"+e).set("checked",!1)})}$("#compile").on("click",function(){var e={};$(".secCheck").each(function(g){g.checked&&(e[g.id.substr(4)]=1)});var j=compile(g.sections,
g.sectionMap,e),k=serializeEnabledSections(g.sections,e);if($$("#compressionAdvanced").checked)$$("#compile").disabled=!0,closureCompile(j,!0,function(e){$$("#compile").disabled=!1;$("#resultDiv").animate({$$slide:1});e?($("#gzipRow, #downloadRow").set({$display:"table-row"}),$$("#resultSrc").value=k+"\n"+e.compiledCode,$("#resultPlain").fill((e.statistics.compressedSize/1024).toFixed(2)+"kb ("+e.statistics.compressedSize+" bytes)"),$("#resultGzippedSize").fill((e.statistics.compressedGzipSize/1024).toFixed(2)+
"kb ("+e.statistics.compressedGzipSize+" bytes)"),$$("#resultLink").setAttribute("href","http://closure-compiler.appspot.com"+e.outputFilePath),$("#resultGzippedComment").set({$$fade:e.statistics.compressedGzipSize>MAX_SIZE?1:0})):alert("Google Closure Service not availble. Try again later.")});else try{$("#resultDiv").animate({$$slide:1}),$$("#resultSrc").value=k+j,$("#resultPlain").fill((j.length/1024).toFixed(2)+"kb"),$("#gzipRow, #downloadRow").set({$display:"none"})}catch(m){console.log(m)}return!1});
var k=$("#configSrcDiv").toggle({$$slide:0},{$$slide:1});$("#fromScratch").on("|click",k,[!1]);$("#loadConfig").on("|click",k,[!0]);$("#recreate").on("click",function(){try{var e=$$("#configSrc").value,j=deserializeEnabledSections(g.sections,g.sectionMap,e);j?(_.eachObj(g.sectionMap,function(e){var g=$$("#sec-"+e);g&&(g.checked=!!j[e])}),n()):alert("Can not find configuration in source.")}catch(k){console.log(k)}});$("#sectionCheckboxes").fill();for(var j=1;j<GROUPS.length;j++){var q;$("#sectionCheckboxes").add(q=
EE("div",{"@id":"divMod-"+j},EE("div",{className:"groupDescriptor"},[k=EE("input",{"@id":"mod-"+j,className:"modCheck","@type":"checkbox",checked:"checked"})(),EE("label",{"@for":"mod-"+j},GROUPS[j])]))());$(k).on("change",function(){var e=this.checked;$(".secCheck",this.parentNode.parentNode).each(function(g){g.checked=e;m(g)});n();return!0});var u;_.filter(g.sections,function(e){return e.group==GROUPS[j]&&e.configurable}).sort(function(e,g){var j=e.name||e.id,k=g.name||g.id;return j==k?0:j>k?1:
-1}).each(function(e){function j(e,k){var m=_.filter(_.keys(k),function(e){return!!k[e].name});if(!m.length)return null;var n=0,q=e;_.each(m,function(e){n++<Math.min(m.length,8)&&(1<n&&(q=n==Math.min(m.length,8)?q+" and ":q+", "),q=8==n&&8<m.length?q+"more":q+(g.sectionMap[e].name||g.sectionMap[e].id))});return q+="."}var k=j("Required by ",e.requiredBy),t=j("Requires ",e.requires);q.add(EE("div",{className:"sectionDescriptor"},[u=EE("input",{className:"secCheck","@type":"checkbox","@id":"sec-"+e.id,
checked:"default"==e.configurable?"checked":null})(),EE("label",{"@for":"sec-"+e.id},e.name||e.id),EE("div",{className:"requirements"},[k?[k,EE("br")]:null,t])]));$(u).on("change",function(){m(this);n();return!0})})}}$(function(){$.request("get",SRC,null).then(function(g){setUpConfigurationUI(prepareSections(g))}).error(function(g){window.console&&console.log(g)})});