(this["webpackJsonpnfc-reader"]=this["webpackJsonpnfc-reader"]||[]).push([[0],{11:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),c=t(3),o=t.n(c),s=(t(8),t.p+"static/media/logo.6ce24c58.svg"),i=(t(9),t(0));var d=function(){if(alert("NDEFReader"in window),"NDEFReader"in window){var e=new NDEFReader;e.scan().then((function(){alert("Scan started successfully."),e.onreadingerror=function(){alert("Cannot read data from the NFC tag. Try another one?")},e.onreading=function(e){alert("NDEF message read.")}})).catch((function(e){alert("Error! Scan failed to start: ".concat(e,"."))}))}else console.log("no NDEF found");return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("header",{className:"App-header",children:[Object(i.jsx)("img",{src:s,className:"App-logo",alt:"logo"}),Object(i.jsxs)("p",{children:["Edit ",Object(i.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(i.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},l=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,12)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),r(e),a(e),c(e),o(e)}))};o.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(d,{})}),document.getElementById("root")),l()},8:function(e,n,t){},9:function(e,n,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.f2ec9c4d.chunk.js.map