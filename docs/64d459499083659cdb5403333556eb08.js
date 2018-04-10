require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var s=e[n]=new t.Module(n);r[n][0].call(s.exports,i,s,s.exports)}return e[n].exports}function o(r){this.id=r,this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.isParcelRequire=!0,t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({56:[function(require,module,exports) {

},{}],54:[function(require,module,exports) {
"use strict";function e(){var e=document.getElementById("menu");document.getElementById("tab_content");if(!e)throw new Error("menu error");for(var t,n=e.getElementsByTagName("a"),l=0;l<n.length;l++)o(n[l]);function o(e){var n=e.hash.slice(1),l=document.getElementById(n);if(!l)throw new Error(n+"は存在しない");t?l.style.display="none":(t={page:l,menu:e},l.style.display="block",e.className="active"),e.onclick=function(){return t.page.style.display="none",l.style.display="block",t.page=l,t.menu=e,document.getElementById("weight").value="",!1}}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],50:[function(require,module,exports) {
"use strict";require("../node_modules/purecss/build/base-min.css"),require("../node_modules/purecss/build/forms-min.css"),require("../node_modules/purecss/build/buttons-min.css"),require("../css/style.css");var e=require("./tab"),t=i(e);function i(e){return e&&e.__esModule?e:{default:e}}(0,t.default)();var n,r=function(){function e(e,t,i){this.vertical=e,this.horizontal=t,this.height=i}return e.prototype.calc=function(e){return this.vertical*this.horizontal*this.height*e},e}(),h=function(){function e(e,t){this.diameter=e,this.height=t}return e.prototype.calc=function(e){var t=this.diameter/2;return t*t*Math.PI*this.height*e},e}(),c=function(){function e(e,t,i,n,r){this.vertical=e,this.horizontal=t,this.verticalWidth=i,this.horizontalWidth=n,this.length=r}return e.prototype.calc=function(e){return(this.vertical*this.verticalWidth*2+(this.horizontal-2*this.verticalWidth)*this.horizontalWidth)*this.length*e},e}(),a=function(){function e(e,t,i){this.diameter=e,this.height=t,this.thickness=i}return e.prototype.calc=function(e){var t=this.diameter/2,i=t-this.thickness;return(t*t-i*i)*Math.PI*this.height*e},e}(),o=function(){function e(e,t,i,n,r){this.vertical=e,this.horizontal=t,this.length=i,this.t1=n,this.t2=r}return e.prototype.calc=function(e){return((this.vertical-this.t1)*this.t2*2+this.horizontal*this.t1)*this.length*e},e}(),s=function(e){var t=document.getElementById(e);return Number(t.value)};!function(e){e[e.cuboid=0]="cuboid",e[e.cylinder=1]="cylinder",e[e.hbeam=2]="hbeam",e[e.pipe=3]="pipe",e[e.channel=4]="channel"}(n||(n={}));var u=function(){function e(){}return e.prototype.getShapeType=function(){var e=document.getElementById("tab_content");if(!e)throw new Error("No tab_content");for(var t=e.getElementsByTagName("section"),i=0;i<t.length;i++)if("block"===t[i].style.display)switch(t[i].id){case"cuboid":return n.cuboid;case"cylinder":return n.cylinder;case"hbeam":return n.hbeam;case"pipe":return n.pipe;case"channel":return n.channel}throw new Error("No block element")},e.prototype.create=function(){switch(this.getShapeType()){case n.cuboid:var e=s("cuboid_vertical")/1e3,t=s("cuboid_horizontal")/1e3,i=s("cuboid_height")/1e3;return new r(e,t,i);case n.cylinder:var u=s("cylinder_diameter")/1e3,l=s("cylinder_height")/1e3;return new h(u,l);case n.hbeam:var d=s("hbeam_vertical")/1e3,p=s("hbeam_horizontal")/1e3,m=s("hbeam_vertical_width")/1e3,b=s("hbeam_horizontal_width")/1e3,f=s("hbeam_length")/1e3;return new c(d,p,m,b,f);case n.pipe:var v=s("pipe_diameter")/1e3,_=s("pipe_height")/1e3,g=s("pipe_thickness")/1e3;return new a(v,_,g);case n.channel:var y=s("channel_vertical")/1e3,w=s("channel_horizontal")/1e3,z=s("channel_length")/1e3,E=s("channel_t1")/1e3,k=s("channel_t2")/1e3;return new o(y,w,z,E,k);default:throw new Error("shapeType Error")}},e}();function l(){var e=(new u).create(),t=s("blood"),i=1e3*e.calc(t);document.getElementById("weight").value=i.toFixed(2)}
},{"../node_modules/purecss/build/base-min.css":56,"../node_modules/purecss/build/forms-min.css":56,"../node_modules/purecss/build/buttons-min.css":56,"../css/style.css":56,"./tab":54}]},{},[50])