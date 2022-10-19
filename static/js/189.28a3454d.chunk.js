"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[189],{874:function(n,e,r){r.d(e,{Z:function(){return p}});var t,o,a,i=r(689),c=r(168),s=r(674),u=r(731),f=s.Z.ul(t||(t=(0,c.Z)(["\n  margin-top: 20px;\n  margin-left: 20px;\n  text-align: center;\n  \n"]))),l=s.Z.li(o||(o=(0,c.Z)(["\n  font-size: 20px;\n  font-weight: 500;\n  padding: 2px;\n"]))),d=(0,s.Z)(u.OL)(a||(a=(0,c.Z)(["\n  color: black;\n  &:hover,\n  &:focus {\n    color: #13abde;\n    font-weight: 700;\n  }\n"]))),h=r(184),p=function(n){var e=n.results,r=(0,i.TH)();return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(f,{children:e.map((function(n){var e=n.id,t=n.title;return(0,h.jsx)(l,{children:(0,h.jsx)(d,{to:"/movies/".concat(e),state:{from:r},children:t||"There is no title"})},e)}))})})}},189:function(n,e,r){r.r(e),r.d(e,{default:function(){return P}});var t=r(885),o=r(791),a=r(689),i=r(388),c=r(861),s=r(757),u=r.n(s);function f(){return(f=(0,c.Z)(u().mark((function n(e){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"f637ff1bcaf74a417438f57fb9f0b1d7","https://api.themoviedb.org/3/search/movie",n.next=4,fetch("".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat("f637ff1bcaf74a417438f57fb9f0b1d7","&query=").concat(e,"&language=en-US&page=1&include_adult=fals"));case 4:if(!(r=n.sent).ok){n.next=10;break}return n.next=8,r.json();case 8:return t=n.sent,n.abrupt("return",t.results);case 10:return n.abrupt("return",Promise.reject(new Error("Someting wrong")));case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var l,d,h,p,g=r(874),x=r(413),m=r(731),v=r(174),b=r(168),y=r(674),Z=y.Z.input(l||(l=(0,b.Z)(["\n  width: 200px;\n  height: 40px;\n  padding-left: 10px;\n  padding-right: 10px;\n  border: 3px solid rgb(178, 236, 249);\n  border-radius: 6px;\n  box-shadow: 0px 3px 3px rgb(178, 236, 249);\n  outline: none;\n  margin-right: 15px;\n  &:hover,\n  &:focus {\n    border-color: #13abde;\n  }\n"]))),w=y.Z.button(d||(d=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: inherit;\n  font-size: 20px;\n  font-weight: 500;\n  background-color:rgb(178, 236, 249);\n  width: 120px;\n  height: 45px;\n  border-radius: 6px;\n  border: none;\n  cursor: pointer;\n    &:hover,\n    &:focus{\n        color: white;\n        background: linear-gradient(to right, #1488cc, #9d9da2);\n        transform: scale(1.2);\n  \n  }\n"]))),j=y.Z.div(h||(h=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),k=r(184),q=function(){var n=(0,a.TH)(),e=(0,a.s0)(),r=(0,m.lr)(),o=(0,t.Z)(r,1)[0];return(0,k.jsx)(k.Fragment,{children:(0,k.jsx)("form",{onSubmit:function(r){r.preventDefault();var t=r.target.elements.query.value;t!==o.get("query")?""!==t?e((0,x.Z)((0,x.Z)({},n),{},{search:"query=".concat(t)})):v.Am.error("Please enter a request"):v.Am.error('The results of the query "'.concat(t,'" are already available. \n            Please find the desired movie among the results or enter a new query'))},children:(0,k.jsxs)(j,{children:[(0,k.jsx)(Z,{type:"text",name:"query",defaultValue:o.get("query")}),(0,k.jsx)(w,{type:"submit",children:"Search "})]})})})},_=y.Z.h1(p||(p=(0,b.Z)(["\n  margin-top: 20px;\n  margin-left: 20px;"]))),P=function(){var n,e=(0,o.useState)(null),r=(0,t.Z)(e,2),c=r[0],s=r[1],u=(0,o.useState)(!1),l=(0,t.Z)(u,2),d=l[0],h=l[1],p=(0,a.TH)().search,x=null!==(n=new URLSearchParams(p).get("query"))&&void 0!==n?n:"";return(0,o.useEffect)((function(){""!==x&&(h(!0),function(n){return f.apply(this,arguments)}(x).then(s).catch((function(n){Promise.reject(new Error("".concat(n.message)))})).finally(h(!1)))}),[x]),(0,k.jsxs)(k.Fragment,{children:[d&&(0,k.jsx)(i.Z,{}),(0,k.jsx)(q,{}),c&&(0,k.jsxs)(_,{children:['Results according to query "',x,'"']}),c&&(0,k.jsx)(g.Z,{results:c})]})}},861:function(n,e,r){function t(n,e,r,t,o,a,i){try{var c=n[a](i),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(t,o)}function o(n){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=n.apply(e,r);function c(n){t(i,o,a,c,s,"next",n)}function s(n){t(i,o,a,c,s,"throw",n)}c(void 0)}))}}r.d(e,{Z:function(){return o}})}}]);
//# sourceMappingURL=189.28a3454d.chunk.js.map