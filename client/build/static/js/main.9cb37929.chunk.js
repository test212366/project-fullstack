(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{17:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(12),s=n.n(a),l=(n(17),n(18),n(7));function i(){}var o=Object(c.createContext)({token:null,userId:null,login:i,logout:i,isAuthtnticated:!1}),j=n(3),u="userData",b=n(2),d=n(4),O=n.n(d),h=n(6),x=n(0),f=function(e){var t=e.links;return console.log(t),0===t.length?Object(x.jsx)("p",{children:"none links"}):Object(x.jsxs)("table",{children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"number"}),Object(x.jsx)("th",{children:"from"}),Object(x.jsx)("th",{children:"In"})]})}),Object(x.jsx)("tbody",{children:t&&t.map((function(e,t){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:t+1}),Object(x.jsx)("td",{children:e.from}),Object(x.jsx)("td",{children:e.to})]})}))})]})},p=function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(null),s=Object(j.a)(a,2),l=s[0],i=s[1],o=Object(c.useCallback)(function(){var e=Object(h.a)(O.a.mark((function e(t){var n,c,a,s,l,o=arguments;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:"GET",c=o.length>2&&void 0!==o[2]?o[2]:null,a=o.length>3&&void 0!==o[3]?o[3]:{},r(!0),e.prev=4,c&&(c=JSON.stringify(c),a["Content-Type"]="application/json"),e.next=8,fetch(t,{method:n,body:c,headers:a});case 8:return s=e.sent,e.next=11,s.json();case 11:return l=e.sent,s.ok||i(l.message),r(!1),e.abrupt("return",l);case 17:e.prev=17,e.t0=e.catch(4),r(!1),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[]);return{loading:n,request:o,error:l,clearError:Object(c.useCallback)((function(){return i(null)}),[])}},v=function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),n=t[0],r=t[1],a=p(),s=a.loading,l=a.request,i=Object(c.useContext)(o).token,u=Object(c.useCallback)(Object(h.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l("/api/link","GET",null,{Authorization:"Bearer ".concat(i)});case 3:t=e.sent,console.log(t),r(t),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])}))),[]);return Object(c.useEffect)((function(){u()}),[u]),Object(x.jsx)(x.Fragment,{children:!s&&n&&Object(x.jsx)(f,{links:n})})},m=function(){var e=Object(c.useContext)(o),t=Object(b.f)(),n=Object(c.useState)(""),r=Object(j.a)(n,2),a=r[0],s=r[1],l=p().request;Object(c.useEffect)((function(){window.M.updateTextFields()}),[]);var i=function(){var n=Object(h.a)(O.a.mark((function n(c){var r;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("Enter"!==c.key){n.next=11;break}return n.prev=1,n.next=4,l("/api/link/generate","POST",{from:a},{Authorization:"Bearer ".concat(e.token)});case 4:r=n.sent,console.log(r),t("/detail/".concat(r.link._id)),n.next=11;break;case 9:n.prev=9,n.t0=n.catch(1);case 11:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"row",children:Object(x.jsx)("div",{className:"col s8 offset-s2",children:Object(x.jsxs)("div",{className:"input-field ",children:[Object(x.jsx)("input",{placeholder:"confirm link",value:a,onChange:function(e){return s(e.target.value)},onKeyPress:i,type:"text",className:"validate"}),Object(x.jsx)("label",{htmlFor:"first_name",children:"link"})]})})})},k=function(e){var t=e.link;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h2",{children:"link"}),Object(x.jsxs)("p",{children:["Your link: ",Object(x.jsx)("a",{href:t.to,target:"_blank",children:t.to})," "]}),Object(x.jsxs)("p",{children:["Your from: ",Object(x.jsx)("a",{href:t.from,target:"_blank",children:t.from})," "]}),Object(x.jsxs)("p",{children:["Your clicks: ",t.clicks," "]}),Object(x.jsxs)("p",{children:["Your link data: ",new Date(t.date).toLocaleDateString()]})]})},g=function(){var e=Object(c.useContext)(o).token,t=Object(c.useState)(null),n=Object(j.a)(t,2),r=n[0],a=n[1],s=p(),l=s.request,i=s.loading,u=Object(b.g)().id,d=Object(c.useCallback)(Object(h.a)(O.a.mark((function t(){var n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l("/api/link/".concat(u),"GET",null,{Authorization:"Bearer ".concat(e)});case 3:n=t.sent,console.log(n),a(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),[e,u,l]);return Object(c.useEffect)((function(){d()}),[d]),Object(x.jsx)(x.Fragment,{children:!i&&r&&Object(x.jsx)(k,{link:r})})},w=n(9),C=n(8),N=function(){var e=Object(c.useContext)(o),t=Object(b.f)(),n=Object(c.useCallback)((function(e){window.M&&e&&window.M.toast({html:e})}),[]),r=p(),a=r.loading,s=r.error,l=r.request,i=r.clearError,u=Object(c.useState)({email:"",password:""}),d=Object(j.a)(u,2),f=d[0],v=d[1];Object(c.useEffect)((function(){n(s),i()}),[s,n,i]);var m=function(){var e=Object(h.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l("/api/auth/register","POST",Object(C.a)({},f));case 3:t=e.sent,console.log(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){window.M.updateTextFields()}),[]);var k=function(){var n=Object(h.a)(O.a.mark((function n(){var c;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l("/api/auth/login","POST",Object(C.a)({},f));case 3:c=n.sent,console.log(c),"password error"!==c.message&&(e.login(c.token,c.userId),t("/create")),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),g=function(e){v(Object(C.a)(Object(C.a)({},f),{},Object(w.a)({},e.target.name,e.target.value)))};return Object(x.jsx)("div",{className:"row",children:Object(x.jsxs)("div",{className:"col s6 offset-s3",children:[Object(x.jsx)("h1",{children:"confirm link"}),Object(x.jsxs)("div",{className:"card blue darken-1",children:[Object(x.jsxs)("div",{className:"card-content white-text",children:[Object(x.jsx)("span",{className:"card-title",children:"Card Title"}),Object(x.jsxs)("div",{className:"",children:[Object(x.jsxs)("div",{className:"input-field ",children:[Object(x.jsx)("input",{placeholder:"confirm email",value:f.email,onChange:function(e){return g(e)},name:"email",type:"text",className:"validate"}),Object(x.jsx)("label",{htmlFor:"first_name",children:"email"})]}),Object(x.jsxs)("div",{className:"input-field ",children:[Object(x.jsx)("input",{placeholder:"confirm password",value:f.password,onChange:function(e){return g(e)},name:"password",type:"password",className:"validate"}),Object(x.jsx)("label",{htmlFor:"first_name",children:"password"})]})]})]}),Object(x.jsxs)("div",{className:"card-action",children:[Object(x.jsx)("button",{className:"btn yellow darken-4",disabled:a,onClick:function(){return k()},children:"login"}),Object(x.jsx)("button",{className:"btn grey lighten-1",disabled:a,onClick:function(){return m()},children:"regist"})]})]})]})})},S=function(){var e=Object(b.f)(),t=Object(c.useContext)(o);return Object(x.jsx)("nav",{children:Object(x.jsxs)("div",{class:"nav-wrapper",children:[Object(x.jsx)("a",{href:"#",class:"brand-logo",children:"small link"}),Object(x.jsxs)("ul",{id:"nav-mobile",class:"right hide-on-med-and-down",children:[Object(x.jsx)("li",{children:Object(x.jsx)(l.b,{to:"/create",children:"Create"})}),Object(x.jsx)("li",{children:Object(x.jsx)(l.b,{to:"/links",children:"links"})}),Object(x.jsxs)("li",{children:[" ",Object(x.jsx)("a",{href:"/",onClick:function(n){n.preventDefault(),t.logout(),e("/")},children:"exit"})," "]})]})]})})};var y=function(){var e=function(){var e=Object(c.useState)(null),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(null),s=Object(j.a)(a,2),l=s[0],i=s[1],o=Object(c.useCallback)((function(e,t){r(e),i(t),localStorage.setItem(u,JSON.stringify({userId:t,token:e}))}),[]),b=Object(c.useCallback)((function(){r(null),i(null),localStorage.removeItem(u)}),[]);return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem(u));e&&e.token&&o(e.token,e.userId)}),[o]),{login:o,logout:b,token:n,userId:l}}(),t=e.token,n=e.login,r=e.logout,a=e.userId,s=!!t,i=s?Object(x.jsx)(b.c,{children:Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(b.a,{path:"/links",exact:!0,element:Object(x.jsx)(v,{})}),Object(x.jsx)(b.a,{path:"/create",exact:!0,element:Object(x.jsx)(m,{})}),Object(x.jsx)(b.a,{path:"/detail/:id",element:Object(x.jsx)(g,{})})]})}):Object(x.jsx)(b.c,{children:Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(b.a,{path:"/",exact:!0,element:Object(x.jsx)(N,{})})})});return Object(x.jsx)(o.Provider,{value:{token:t,login:n,logout:r,userId:a,isAuthtnticated:s},children:Object(x.jsxs)(l.a,{children:[s?Object(x.jsx)(S,{}):"",Object(x.jsx)("div",{className:"container",children:i})]})})};s.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(y,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.9cb37929.chunk.js.map