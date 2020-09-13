(this["webpackJsonpemployees-test"]=this["webpackJsonpemployees-test"]||[]).push([[0],{33:function(e,t,a){e.exports=a(62)},39:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(27),c=a.n(r),o=a(6),s=a.n(o),u=a(8),i=a(28),p=a(29),m=a(32),d=a(31),E=a(11),f=a(1),v=(a(39),a(13)),b=a(9),g=a.n(b),h=function(e){var t=Object(n.useState)(""),a=Object(v.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(""),i=Object(v.a)(o,2),p=i[0],m=i[1],d=Object(n.useState)(""),b=Object(v.a)(d,2),h=b[0],y=b[1],k=Object(n.useState)(""),j=Object(v.a)(k,2),O=j[0],N=j[1],w=Object(f.g)(),x=Object(f.f)(),F=w.pathname[w.pathname.length-1],D=!!isNaN(F),S=D?"Add a New Employee":"Update Details for Employee #".concat(F);Object(n.useEffect)((function(){D||T(F)}),[]);var T=function(){var e=Object(u.a)(s.a.mark((function e(t){var a,n,l,r,o,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.prev=1,e.next=4,g.a.get("/api/employees/".concat(t));case 4:a=e.sent,Object.keys(a.data).map((function(e){return a.data[e]?a.data[e]:a.data[e]=""})),n=a.data,l=n.firstName,r=n.lastName,o=n.email,u=n.jobTitle,c(l),m(r),y(o),N(u),console.log(a.data),e.next=16;break;case 14:e.prev=14,e.t0=e.catch(1);case 16:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}(),C=function(e){var t=e.target,a=t.id,n=t.value;switch(a){case"first":c(n);break;case"last":m(n);break;case"email":y(n);break;case"title":N(n)}console.log(a)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(E.b,{className:"link",to:"/"},"Back"),l.a.createElement("h1",null,S),l.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a={firstName:r,lastName:p,email:h,jobTitle:O};D?e.addNewEmployee(a):e.updateEmployee(a,F),x.push("/")}},l.a.createElement("label",{htmlFor:"first"},"First Name"),l.a.createElement("input",{id:"first",value:r,onChange:C}),l.a.createElement("label",{htmlFor:"last"},"Last Name"),l.a.createElement("input",{id:"last",value:p,onChange:C}),l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{id:"email",value:h,onChange:C}),l.a.createElement("label",{htmlFor:"title"},"Title"),l.a.createElement("input",{id:"title",value:O,onChange:C}),l.a.createElement("button",null,D?"ADD":"UPDATE")))},y=function(e){var t=Object(f.f)(),a=e.employees.map((function(a){return l.a.createElement("ul",{key:a.id},l.a.createElement("li",null,l.a.createElement("span",null,"First Name: "),a.firstName),l.a.createElement("li",null,l.a.createElement("span",null,"Last Name: "),a.lastName),l.a.createElement("li",null,l.a.createElement("span",null,"Email: "),a.email),l.a.createElement("li",null,l.a.createElement("span",null,"Job Title: "),a.jobTitle),l.a.createElement("li",{className:"l-button x-button",onClick:function(){return e=a.id,t.push("/employees/".concat(e));var e}},"UPDATE"),l.a.createElement("li",{className:"r-button x-button",onClick:function(){return e.deleteEmployee(a.id)}},"DELETE"))}));return l.a.createElement("div",null,l.a.createElement(E.b,{className:"link",to:"/employees"},"ADD EMPLOYEE"),l.a.createElement("br",null),l.a.createElement("h1",null,"List of Employees"),a)},k=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).loadingFunc=function(){var t=!1;e.state.loading?clearInterval(e.state.interval):t=setInterval((function(){e.state.dots.length<3?e.setState((function(e){return{dots:e.dots+"."}})):e.setState({dots:""})}),100),e.setState({loading:!e.state.loading,interval:t})},e.getEmployees=Object(u.a)(s.a.mark((function t(){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loadingFunc(),t.prev=1,t.next=4,g.a.get("https://damp-shore-59223.herokuapp.com/api/employees");case 4:a=t.sent,e.setState({employees:a.data}),console.log(a.data),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log("error occured");case 12:return t.prev=12,e.loadingFunc(),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])}))),e.deleteEmployee=function(){var t=Object(u.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("delete"),e.loadingFunc(),t.prev=2,t.next=5,g.a.delete("/api/employees/".concat(a));case 5:n=t.sent,e.getEmployees(),console.log(n),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(2),console.log("error occured"),console.log(t.t0);case 14:return t.prev=14,e.loadingFunc(),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[2,10,14,17]])})));return function(e){return t.apply(this,arguments)}}(),e.updateEmployee=function(){var t=Object(u.a)(s.a.mark((function t(a,n){var l;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("update"),e.loadingFunc(),t.prev=2,t.next=5,g.a.put("/api/employees/".concat(n),a);case 5:l=t.sent,console.log(l),e.getEmployees(),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),console.log("failed update");case 13:return t.prev=13,e.loadingFunc(),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[2,10,13,16]])})));return function(e,a){return t.apply(this,arguments)}}(),e.addNewEmployee=function(){var t=Object(u.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("create"),e.loadingFunc(),t.prev=2,t.next=5,g.a.post("/api/employees/",a);case 5:n=t.sent,console.log(n),e.getEmployees(),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),console.log("failed create");case 13:return t.prev=13,e.loadingFunc(),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[2,10,13,16]])})));return function(e){return t.apply(this,arguments)}}(),e.state={employees:[],loading:!1,interval:!1,dots:""},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){console.log("v1.05"),this.getEmployees()}},{key:"render",value:function(){var e=this,t=this.state,a=t.loading,n=t.dots,r=a?{display:"block"}:{display:"none"};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"loading dissappear",style:r},"loading",n),l.a.createElement(E.a,null,l.a.createElement(f.c,null,l.a.createElement(f.a,{path:"/employees",render:function(){return l.a.createElement(h,{updateEmployee:e.updateEmployee,addNewEmployee:e.addNewEmployee})}}),l.a.createElement(f.a,{path:"/",render:function(){return l.a.createElement(y,{employees:e.state.employees,deleteEmployee:e.deleteEmployee})}}))))}}]),a}(n.Component);c.a.render(l.a.createElement(k,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.c3031b43.chunk.js.map