webpackJsonp([37],{"/XXN":function(e,r,t){r=e.exports=t("FZ+f")(!0),r.push([e.i,'.sk-folding-cube{margin:20px auto;width:40px;height:40px;position:relative;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.sk-folding-cube .sk-cube{float:left;width:50%;height:50%;position:relative;-webkit-transform:scale(1.1);transform:scale(1.1)}.sk-folding-cube .sk-cube:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:#333;-webkit-animation:sk-foldCubeAngle 2.4s infinite linear both;animation:sk-foldCubeAngle 2.4s infinite linear both;-webkit-transform-origin:100% 100%;transform-origin:100% 100%}.sk-folding-cube .sk-cube2{-webkit-transform:scale(1.1) rotate(90deg);transform:scale(1.1) rotate(90deg)}.sk-folding-cube .sk-cube3{-webkit-transform:scale(1.1) rotate(180deg);transform:scale(1.1) rotate(180deg)}.sk-folding-cube .sk-cube4{-webkit-transform:scale(1.1) rotate(270deg);transform:scale(1.1) rotate(270deg)}.sk-folding-cube .sk-cube2:before{-webkit-animation-delay:.3s;animation-delay:.3s}.sk-folding-cube .sk-cube3:before{-webkit-animation-delay:.6s;animation-delay:.6s}.sk-folding-cube .sk-cube4:before{-webkit-animation-delay:.9s;animation-delay:.9s}@-webkit-keyframes sk-foldCubeAngle{0%,10%{-webkit-transform:perspective(140px) rotateX(-180deg);transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{-webkit-transform:perspective(140px) rotateX(0deg);transform:perspective(140px) rotateX(0deg);opacity:1}90%,to{-webkit-transform:perspective(140px) rotateY(180deg);transform:perspective(140px) rotateY(180deg);opacity:0}}@keyframes sk-foldCubeAngle{0%,10%{-webkit-transform:perspective(140px) rotateX(-180deg);transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{-webkit-transform:perspective(140px) rotateX(0deg);transform:perspective(140px) rotateX(0deg);opacity:1}90%,to{-webkit-transform:perspective(140px) rotateY(180deg);transform:perspective(140px) rotateY(180deg);opacity:0}}',"",{version:3,sources:["D:/Profiles/luleplan/Documents/CS-INDICATORS/src/components/loader/CustomLoader.vue"],names:[],mappings:"AACA,iBACE,iBAAkB,AAElB,WAAY,AAEZ,YAAa,AAEb,kBAAmB,AAEnB,gCAAkC,AAElC,uBAA0B,CAC3B,AACD,0BACE,WAAY,AAEZ,UAAW,AAEX,WAAY,AAEZ,kBAAmB,AAEnB,6BAA8B,AAE9B,oBAAsB,CACvB,AACD,iCACE,WAAY,AAEZ,kBAAmB,AAEnB,MAAO,AAEP,OAAQ,AAER,WAAY,AAEZ,YAAa,AAEb,sBAAuB,AAEvB,6DAA8D,AAE9D,qDAAsD,AAEtD,mCAAoC,AAEpC,0BAA4B,CAC7B,AACD,2BACE,2CAA6C,AAE7C,kCAAqC,CACtC,AACD,2BACE,4CAA8C,AAE9C,mCAAsC,CACvC,AACD,2BACE,4CAA8C,AAE9C,mCAAsC,CACvC,AACD,kCACE,4BAA8B,AAE9B,mBAAsB,CACvB,AACD,kCACE,4BAA8B,AAE9B,mBAAsB,CACvB,AACD,kCACE,4BAA8B,AAE9B,mBAAsB,CACvB,AACD,oCACA,OAEI,sDAAuD,AAEvD,8CAA+C,AAE/C,SAAW,CACd,AACD,QAEI,mDAAoD,AAEpD,2CAA4C,AAE5C,SAAW,CACd,AACD,OAEI,qDAAsD,AAEtD,6CAA8C,AAE9C,SAAW,CACd,CACA,AACD,4BACA,OAEI,sDAAuD,AAEvD,8CAA+C,AAE/C,SAAW,CACd,AACD,QAEI,mDAAoD,AAEpD,2CAA4C,AAE5C,SAAW,CACd,AACD,OAEI,qDAAsD,AAEtD,6CAA8C,AAE9C,SAAW,CACd,CACA",file:"CustomLoader.vue",sourcesContent:['\n.sk-folding-cube {\r\n  margin: 20px auto;\r\n\r\n  width: 40px;\r\n\r\n  height: 40px;\r\n\r\n  position: relative;\r\n\r\n  -webkit-transform: rotateZ(45deg);\r\n\r\n  transform: rotateZ(45deg);\n}\n.sk-folding-cube .sk-cube {\r\n  float: left;\r\n\r\n  width: 50%;\r\n\r\n  height: 50%;\r\n\r\n  position: relative;\r\n\r\n  -webkit-transform: scale(1.1);\r\n\r\n  transform: scale(1.1);\n}\n.sk-folding-cube .sk-cube:before {\r\n  content: "";\r\n\r\n  position: absolute;\r\n\r\n  top: 0;\r\n\r\n  left: 0;\r\n\r\n  width: 100%;\r\n\r\n  height: 100%;\r\n\r\n  background-color: #333;\r\n\r\n  -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;\r\n\r\n  animation: sk-foldCubeAngle 2.4s infinite linear both;\r\n\r\n  -webkit-transform-origin: 100% 100%;\r\n\r\n  transform-origin: 100% 100%;\n}\n.sk-folding-cube .sk-cube2 {\r\n  -webkit-transform: scale(1.1) rotateZ(90deg);\r\n\r\n  transform: scale(1.1) rotateZ(90deg);\n}\n.sk-folding-cube .sk-cube3 {\r\n  -webkit-transform: scale(1.1) rotateZ(180deg);\r\n\r\n  transform: scale(1.1) rotateZ(180deg);\n}\n.sk-folding-cube .sk-cube4 {\r\n  -webkit-transform: scale(1.1) rotateZ(270deg);\r\n\r\n  transform: scale(1.1) rotateZ(270deg);\n}\n.sk-folding-cube .sk-cube2:before {\r\n  -webkit-animation-delay: 0.3s;\r\n\r\n  animation-delay: 0.3s;\n}\n.sk-folding-cube .sk-cube3:before {\r\n  -webkit-animation-delay: 0.6s;\r\n\r\n  animation-delay: 0.6s;\n}\n.sk-folding-cube .sk-cube4:before {\r\n  -webkit-animation-delay: 0.9s;\r\n\r\n  animation-delay: 0.9s;\n}\n@-webkit-keyframes sk-foldCubeAngle {\n0%,\r\n  10% {\r\n    -webkit-transform: perspective(140px) rotateX(-180deg);\r\n\r\n    transform: perspective(140px) rotateX(-180deg);\r\n\r\n    opacity: 0;\n}\n25%,\r\n  75% {\r\n    -webkit-transform: perspective(140px) rotateX(0deg);\r\n\r\n    transform: perspective(140px) rotateX(0deg);\r\n\r\n    opacity: 1;\n}\n90%,\r\n  100% {\r\n    -webkit-transform: perspective(140px) rotateY(180deg);\r\n\r\n    transform: perspective(140px) rotateY(180deg);\r\n\r\n    opacity: 0;\n}\n}\n@keyframes sk-foldCubeAngle {\n0%,\r\n  10% {\r\n    -webkit-transform: perspective(140px) rotateX(-180deg);\r\n\r\n    transform: perspective(140px) rotateX(-180deg);\r\n\r\n    opacity: 0;\n}\n25%,\r\n  75% {\r\n    -webkit-transform: perspective(140px) rotateX(0deg);\r\n\r\n    transform: perspective(140px) rotateX(0deg);\r\n\r\n    opacity: 1;\n}\n90%,\r\n  100% {\r\n    -webkit-transform: perspective(140px) rotateY(180deg);\r\n\r\n    transform: perspective(140px) rotateY(180deg);\r\n\r\n    opacity: 0;\n}\n}\r\n'],sourceRoot:""}])},"47+Y":function(e,r,t){"use strict";function n(e){t("j8yC")}Object.defineProperty(r,"__esModule",{value:!0});var A=t("xV3P"),s=t("AxKA"),o=t("VU/8"),a=n,i=o(A.a,s.a,!1,a,null,null);r.default=i.exports},AxKA:function(e,r,t){"use strict";var n=function(){var e=this,r=e.$createElement;e._self._c;return e._m(0)},A=[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"sk-folding-cube",staticStyle:{"margin-top":"25%"}},[t("div",{staticClass:"sk-cube1 sk-cube"}),e._v(" "),t("div",{staticClass:"sk-cube2 sk-cube"}),e._v(" "),t("div",{staticClass:"sk-cube4 sk-cube"}),e._v(" "),t("div",{staticClass:"sk-cube3 sk-cube"})])}],s={render:n,staticRenderFns:A};r.a=s},j8yC:function(e,r,t){var n=t("/XXN");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);t("rjj0")("1990f832",n,!0)},xV3P:function(e,r,t){"use strict";r.a={}}});
//# sourceMappingURL=37.191d345ae6e81c026c84.js.map