(this.webpackJsonpfullstackopen2021=this.webpackJsonpfullstackopen2021||[]).push([[0],{23:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),u=n(17),r=n.n(u),s=(n(23),n(18)),o=n(8),i=n(3),j=n(0),b=function(e){var t=e.searchTerm,n=e.searchPeople;return Object(j.jsxs)(j.Fragment,{children:["S: ",Object(j.jsx)("input",{value:t,onChange:n})]})},d=function(e){var t=e.handleSubmit,n=e.name,c=e.number,a=e.handleNameChange,u=e.handleNumberChange;return Object(j.jsxs)("form",{onSubmit:t,children:["N: ",Object(j.jsx)("input",{value:n,onChange:a}),Object(j.jsx)("br",{}),"Nu: ",Object(j.jsx)("input",{value:c,onChange:u}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{type:"submit",children:"add"})]})},f=n(5),l=n.n(f),h="/api/people",m=function(e){var t=e.people,n=e.setPeople,c=e.setMessage,a=function(e){window.confirm("Are you user?")&&function(e){return l.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))}(e).then((function(){n(t.filter((function(t){return t.id!==e})))})).catch((function(e){c({message:"person does note exist in the phonebook",messageType:"error"}),setTimeout((function(){return c({})}),4e3)}))};return Object(j.jsx)("ul",{children:t.map((function(e){return Object(j.jsxs)("li",{children:[e.name," ",e.number,Object(j.jsx)("button",{onClick:function(){return a(e.id)},children:"delete"})]},e.name)}))})},p=function(e){var t=e.message;return t.message?Object(j.jsx)("div",{className:"message ".concat(t.messageType),children:t.message}):null};n(43);var O=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],u=Object(c.useState)(""),r=Object(i.a)(u,2),f=r[0],O=r[1],g=Object(c.useState)(""),x=Object(i.a)(g,2),v=x[0],w=x[1],C=Object(c.useState)(""),S=Object(i.a)(C,2),N=S[0],T=S[1],k=Object(c.useState)([]),y=Object(i.a)(k,2),P=y[0],L=y[1],A=Object(c.useState)({}),E=Object(i.a)(A,2),M=E[0],J=E[1],B=function(e){return e.split(/\s+/).join(" ").trim()};return Object(c.useEffect)((function(){L(n.filter((function(e){return B(e.name).toLowerCase().includes(B(N).toLowerCase())})))}),[N,n]),Object(c.useEffect)((function(){l.a.get(h).then((function(e){return e.data})).then((function(e){a(e)}))}),[]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(p,{message:M}),Object(j.jsx)("h4",{children:"Pb"}),Object(j.jsx)(b,{searchTerm:N,searchPeople:function(e){T(e.target.value)}}),Object(j.jsx)("h4",{children:"Add new"}),Object(j.jsx)(d,{handleSubmit:function(e){e.preventDefault();var t=n.find((function(e){return B(e.name).toLowerCase()===B(f).toLowerCase()}));if(t){if(!window.confirm("".concat(f," is already added to phonebook want to change the number?")))return;(function(e){var t=e.id;return l.a.put("".concat(h,"/").concat(t),e).then((function(e){return e.data}))})(t=Object(o.a)(Object(o.a)({},t),{},{number:v})).then((function(e){a(n.map((function(t){return t.id!==e.id?t:e})))})),J({message:"phonebook updated.",messageType:"success"}),setTimeout((function(){J({})}),4e3),O(""),w("")}else{(function(e){return l.a.post(h,e).then((function(e){return e.data}))})({name:B(f),number:v}).then((function(e){a([].concat(Object(s.a)(n),[e])),J({message:"new person added.",messageType:"success"}),setTimeout((function(){J({})}),4e3),O(""),w("")}))}},name:f,number:v,handleNameChange:function(e){O(e.target.value)},handleNumberChange:function(e){w(e.target.value)}}),Object(j.jsx)("h4",{children:"Nu"}),Object(j.jsx)(m,{people:P,setPeople:a,setMessage:J})]})};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.f7e2f333.chunk.js.map