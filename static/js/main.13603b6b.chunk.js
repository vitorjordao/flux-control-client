(this["webpackJsonpflux-controll-front"]=this["webpackJsonpflux-controll-front"]||[]).push([[0],{296:function(e,t,a){e.exports=a(577)},305:function(e,t,a){},307:function(e,t,a){},406:function(e,t,a){},407:function(e,t,a){},450:function(e,t,a){},451:function(e,t,a){},452:function(e,t,a){},481:function(e,t){},484:function(e,t,a){},485:function(e,t,a){},577:function(e,t,a){"use strict";a.r(t);var r={};a.r(r),a.d(r,"setCompanies",(function(){return L})),a.d(r,"selectVehicle",(function(){return V})),a.d(r,"selectCompany",(function(){return D}));var n=a(0),c=a.n(n),o=a(30),i=a.n(o),u=a(50);a(305),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(51),l=a(178),m=(a(306),a(10)),p=(a(307),a(587)),f=a(588),d=a(118),v=a(6),h=a.n(v),b=a(8),E=a(47),g=a(48),y="https://flux-control-node-api.herokuapp.com",x=new(function(){function e(){Object(E.a)(this,e);var t=JSON.parse(localStorage.getItem("session"));this.bearer=(null===t||void 0===t?void 0:t.token)||""}return Object(g.a)(e,[{key:"login",value:function(){var e=Object(b.a)(h.a.mark((function e(){var t,a,r,n,c,o,i,u,s,l=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:{},a=l.length>1?l[1]:void 0,r=t.login,n=t.password,c={email:r,password:n},o="".concat(y,"/api/users/login"),i=JSON.stringify(c),e.next=8,fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:i});case 8:if(200!==(u=e.sent).status){e.next=15;break}return e.next=12,u.json();case 12:s=e.sent,this.bearer=s.token,localStorage.setItem("session",JSON.stringify(s));case 15:a(this.isAuthenticated());case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"logout",value:function(){localStorage.setItem("session",null)}},{key:"isAuthenticated",value:function(){return!!this.bearer}}]),e}());var O=function(e){var t=e.history,a=Object(n.useState)("login"),r=Object(m.a)(a,2),o=r[0],i=r[1],u=Object(n.useState)("password"),s=Object(m.a)(u,2),l=s[0],v=s[1],h=Object(n.useState)([]),b=Object(m.a)(h,2),E=b[0],g=b[1];return c.a.createElement("main",{id:"login"},c.a.createElement("div",{className:"login"},c.a.createElement("div",{className:"extra"},c.a.createElement("h2",null,"Transpar\xeancia"),c.a.createElement("p",null,"Aqui voc\xea pode ver a situa\xe7\xe3o de todas as empresas de \xf4nibus que utilizam do terminal rodovi\xe1rio de ",c.a.createElement("b",null,"S\xe3o Jos\xe9 do Rio Preto"),"."),c.a.createElement("a",{href:"#mais-sobre"},"Vamos l\xe1")),c.a.createElement("section",{className:"login-box"},c.a.createElement("div",{className:"login-title"},c.a.createElement("h1",null,"Login")),c.a.createElement("div",{className:"login-field"},c.a.createElement("label",{htmlFor:"email"},"Email"),c.a.createElement(p.a,{id:"email",type:"text",placeholder:"email@example.com",onChange:function(e){return i(e)}})),c.a.createElement("div",{className:"login-field"},c.a.createElement("label",{htmlFor:"password"},"Senha"),c.a.createElement(p.a,{id:"password",type:"password",onChange:function(e){return v(e)}})),c.a.createElement("div",{className:"messages v-box"},E.map((function(e){return c.a.createElement(f.a,{type:"error",description:e})}))),c.a.createElement(d.a,{className:"login-submit",appearance:"primary",onClick:function(e){var a=e.target;a.disabled=!0,g([]),x.login({login:o,password:l},(function(e){if(a.disabled=!1,e)t.push("/flux-control-client");else{var r=[];r.push("Usu\xe1rio e/ou senha incorreto(s)"),g(r)}}))}},"Entrar"))))},w=(a(406),a(407),a(583)),j=a(273),k=a(294),N=a(119),C=a(586);var S=function(e){var t=e.current,a=e.switchTo;return c.a.createElement("div",{id:"menu"},c.a.createElement(w.a,{activeKey:t},c.a.createElement(w.a.Header,null,c.a.createElement("div",null,c.a.createElement("div",{id:"user-actions",className:"h-box"},c.a.createElement("a",{href:"#configs"},c.a.createElement(j.a,{placement:"auto",trigger:"hover",speaker:c.a.createElement(k.a,null,"Configura\xe7\xf5es")},c.a.createElement(N.a,{icon:"gear-circle"}))),c.a.createElement("a",{href:"#sair"},c.a.createElement(j.a,{placement:"auto",trigger:"hover",speaker:c.a.createElement(k.a,null,"Sair")},c.a.createElement(N.a,{icon:"sign-out",onClick:function(){return x.logout()}})))),c.a.createElement("div",{id:"user-info",className:"h-box"},c.a.createElement("div",{className:"img",style:{backgroundImage:"url('https:api.adorable.io/avatars/100/abott@adorable.png')"}}),c.a.createElement("div",{className:"name v-box"},c.a.createElement("b",{id:"user-role"},"Gerente"),c.a.createElement("span",{className:"user-name"},"Ottoniel Matheus"))))),c.a.createElement(w.a.Body,null,c.a.createElement(C.a,null,c.a.createElement(C.a.Item,{eventKey:"register",icon:c.a.createElement(N.a,{icon:"car"}),onClick:function(){return a("register")}},"Registrar"),c.a.createElement(C.a.Item,{eventKey:"timeline",icon:c.a.createElement(N.a,{icon:"realtime"}),onClick:Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a("timeline"));case 1:case"end":return e.stop()}}),e)})))},"Linha do tempo")))))},T=a(27),_=(a(450),a(590)),G=a(591),P=a(584),I=a(589),A=function(){var e=Object(b.a)(h.a.mark((function e(){var t,a,r,n,c,o=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:{api:"",body:{},method:"POST"},a="".concat(y,"/").concat(t.api),r=JSON.stringify(t.body),n={method:t.method,headers:{"Content-Type":"application/json",Authorization:"bearer "+x.bearer}},r&&(n.body=t.body),e.next=7,fetch(a,n);case 7:return c=e.sent,e.next=10,c.json();case 10:return e.abrupt("return",e.sent);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=new(function(){function e(){Object(E.a)(this,e),this.uri="api/companies/"}return Object(g.a)(e,[{key:"get",value:function(){var e=Object(b.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A({method:"GET",api:this.uri+"get/"+t});case 3:return a=e.sent,e.abrupt("return",null===a||void 0===a?void 0:a.company);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"load",value:function(){var e=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A({method:"GET",api:this.uri});case 3:return t=e.sent,e.abrupt("return",t.items||[]);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",[]);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"getFleet",value:function(){var e=Object(b.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A({method:"GET",api:this.uri+"fleet/"+t});case 3:return a=e.sent,e.abrupt("return",a.fleet||[]);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",[]);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"update",value:function(){var e=Object(b.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A({method:"PATCH",api:this.uri+"change",body:t});case 3:return a=e.sent,e.abrupt("return","company_updated"===a.message);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"remove",value:function(){var e=Object(b.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A({method:"DELETE",api:this.uri+"remove/"+t});case 3:return a=e.sent,e.abrupt("return","company_deleted"===a.message);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}]),e}());function L(e){return{type:"SET_COMPANIES",source:e}}function V(e){return{type:"SELECT_VEHICLE",selectedVehicle:e}}function D(e){return{type:"SELECT_COMPANY",selectedCompany:e}}a(451),a(452);var H=a(275),M=a.n(H).a.connect(y,{autoConnect:!1}),J=(a(484),a(42)),B=a.n(J),R=new(function(){function e(){Object(E.a)(this,e),this.uri="api/vehicles/"}return Object(g.a)(e,[{key:"arrival",value:function(){var e=Object(b.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A({method:"POST",api:this.uri+"arrival/"+t});case 3:return a=e.sent,e.abrupt("return",a.moment);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"departure",value:function(){var e=Object(b.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A({method:"PUT",api:this.uri+"departure/"+t});case 3:return a=e.sent,e.abrupt("return",a.moment);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(b.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A({method:"GET",api:this.uri+"search?query="+t});case 3:return a=e.sent,e.abrupt("return",a.items||[]);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"garage",value:function(){var e=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A({method:"GET",api:this.uri+"garage"});case 3:return t=e.sent,e.abrupt("return",t.items||[]);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"get",value:function(){var e=Object(b.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A({method:"GET",api:this.uri+"get/"+t});case 3:return a=e.sent,e.abrupt("return",null===a||void 0===a?void 0:a.vehicle);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"load",value:function(){var e=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A({method:"GET",api:this.uri});case 3:return t=e.sent,e.abrupt("return",t.items||[]);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"update",value:function(){var e=Object(b.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A({method:"PATCH",api:this.uri+"change",body:t});case 3:return a=e.sent,e.abrupt("return","vehicle_updated"===a.message);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"remove",value:function(){var e=Object(b.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A({method:"DELETE",api:this.uri+"remove/"+t});case 3:return a=e.sent,e.abrupt("return","vehicle_deleted"===a.message);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}]),e}());var q=function(e){var t=e.start,a=e.max,r=e.onEnd,o=Object(n.useState)(l(t)),i=Object(m.a)(o,2),u=i[0],s=i[1];function l(e){return B.a.duration(B()(new Date).diff(B()(e)))}return Object(n.useEffect)((function(){var e;return u>a?(clearTimeout(e),r()):e=setTimeout((function(){s(l(t))}),1e3),function(){clearTimeout(e)}}),[u]),c.a.createElement("div",{className:"timer"},B()(u.asMilliseconds()).format("mm:ss"))};var K=Object(u.b)((function(e){return{companies:e.companies}}),(function(e){return Object(T.a)(r,e)}))((function(e){var t,a,r=e.companyName,o=e.vehicle,i=e.companies,u=e.selectVehicle,s=Object(n.useState)(!1),l=Object(m.a)(s,2),p=l[0],f=l[1],v=function(){var e=Object(b.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,R.arrival(t.id);case 3:(a=e.sent)&&(t.last_record={moment:a,onGarage:!0},M.emit("vehicle-arrival",t)),f(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(b.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,R.departure(t.id);case 3:(a=e.sent)&&(t.last_record={moment:a,onGarage:!1},M.emit("vehicle-departure",t)),f(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"vehicle-card h-box\n          ".concat((null===(t=i.selectedVehicle)||void 0===t?void 0:t.id)===o.id?"selected":"","\n          ").concat(p?"pulse":""),onClick:function(e){var t;return u((null===(t=i.selectedVehicle)||void 0===t?void 0:t.id)===o.id?null:o)}},o.last_record.onGarage?c.a.createElement(q,{start:o.last_record.moment,max:B.a.duration(15,"minutes"),onEnd:function(){E(o)}}):null,c.a.createElement("div",{className:"vehicle-info v-box"},c.a.createElement("b",{className:"license-plate"},o.license_plate),c.a.createElement("span",{className:"company-and-number"},r," ",c.a.createElement("b",{className:"number"},"#",o.number))),p?c.a.createElement("div",{className:"loader"},c.a.createElement(I.a,null)):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"last-record h-box"},o.last_record?c.a.createElement(N.a,{className:"icon ".concat(o.last_record.onGarage?"arrival":"departure"),icon:"".concat(o.last_record.onGarage?"caret-right":"caret-left")}):c.a.createElement("small",{className:"no-record"},"sem registro"),o.last_record?c.a.createElement("span",{className:"moment"},c.a.createElement("small",{className:"date"},B()(o.last_record.moment).format("DD/MM")),c.a.createElement("br",null),B()(o.last_record.moment).format("HH:mm")):null),c.a.createElement(d.a,{className:"action",appearance:"primary",onClick:function(){var e=Object(b.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===(a=o.last_record)||void 0===a?void 0:a.onGarage)){e.next=5;break}return e.next=3,E(o);case 3:e.next=7;break;case 5:return e.next=7,v(o);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},(null===(a=o.last_record)||void 0===a?void 0:a.onGarage)?"Sa\xedda":"Entrada"))))}));var U=function(e){var t=e.company,a=Object(n.useState)(!1),r=Object(m.a)(a,2),o=r[0],i=r[1],u=Object(n.useState)(t.fleet.slice(0,3)),s=Object(m.a)(u,2),l=s[0],p=s[1],f=function(e){p(e?t.fleet:t.fleet.slice(0,3)),i(e)};return Object(n.useEffect)((function(){return M.open(),M.on("vehicle-action",(function(e){t.fleet=t.fleet.map((function(t){return t.id===e.id?e:t})),f(o)})),function(){M.close()}}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"vehicle-card-list h-box"},l.map((function(e){return c.a.createElement(K,{key:e.id,companyName:t.name,vehicle:e})}))),t.fleet.length>3?c.a.createElement("a",{className:"show-more",href:"#".concat(t.name.toLowerCase(),"-exibir-").concat(o?"mais":"menos"),onClick:function(e){f(!o)}},"exibir ".concat(o?"menos":"mais")):null)};var z=function(e){var t=e.companies;return c.a.createElement(c.a.Fragment,null,t.map((function(e){return c.a.createElement("div",{key:e.id},e.fleet.length?c.a.createElement("div",{className:"company v-box"},c.a.createElement("div",{className:"company-info h-box"},c.a.createElement("div",{className:"company-thumbnail",style:{borderColor:e.color,backgroundImage:"url('".concat(e.thumbnail||"/images/no-image.jpg","')")}}),c.a.createElement("h4",{className:"company-name"},e.name)),c.a.createElement(U,{company:e})):null)})))};var W=Object(u.b)((function(e){return{companies:e.companies}}),(function(e){return Object(T.a)(r,e)}))((function(e){var t=e.companies,a=e.setCompanies,r=Object(n.useState)(!1),o=Object(m.a)(r,2),i=o[0],u=o[1],s=Object(n.useState)(0),l=Object(m.a)(s,2),f=l[0],v=l[1];function E(){return(E=Object(b.a)(h.a.mark((function e(){var t,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,F.load();case 3:t=e.sent,r=t.map((function(e){return F.getFleet(e.id)})),Promise.all(r).then((function(e){for(var r in t)t[r].fleet=e[r];var n=0,c=!0,o=!1,i=void 0;try{for(var s,l=t[Symbol.iterator]();!(c=(s=l.next()).done);c=!0){n+=s.value.fleet.length}}catch(m){o=!0,i=m}finally{try{c||null==l.return||l.return()}finally{if(o)throw i}}v(n),a(t),u(!1)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){E.apply(this,arguments)}()}),[]),c.a.createElement("section",{id:"register",className:"h-box"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"vehicle-search h-box"},c.a.createElement("div",{className:"pagination"},c.a.createElement("span",{className:"results"},c.a.createElement("b",null,"Encontrados:"),c.a.createElement("span",null,f))),c.a.createElement("div",{className:"search-box h-box"},c.a.createElement(j.a,{trigger:"click",placement:"auto",speaker:c.a.createElement(_.a,{className:"toggle-on-garage"},c.a.createElement(G.a,{onChange:function(e){return console.log(e)}}),c.a.createElement("span",null,"Apenas na garagem"))},c.a.createElement(d.a,{className:"filter",appearance:"default"},c.a.createElement(N.a,{icon:"filter"})," \xa0 Filtrar")),c.a.createElement(P.a,{inside:!0},c.a.createElement(p.a,{placeholder:"Procurar"}),c.a.createElement(P.a.Button,null,c.a.createElement(N.a,{icon:"search"}))))),c.a.createElement("hr",null),i?c.a.createElement("center",null,c.a.createElement(I.a,null)):c.a.createElement(z,{companies:t.source})))})),Y=(a(485),a(585)),$=a(276),Q=new(function(){function e(){Object(E.a)(this,e),this.uri="api/flow-records/"}return Object(g.a)(e,[{key:"get",value:function(){var e=Object(b.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A({method:"GET",api:this.uri+"get/"+t});case 3:return a=e.sent,e.abrupt("return",null===a||void 0===a?void 0:a.flowRecord);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getHistoric",value:function(){var e=Object(b.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A({method:"GET",api:this.uri+"historic/"+t});case 3:return a=e.sent,e.abrupt("return",a.items||[]);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",[]);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"load",value:function(){var e=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A({method:"GET",api:this.uri});case 3:return t=e.sent,e.abrupt("return",t.items||[]);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",[]);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"remove",value:function(){var e=Object(b.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A({method:"DELETE",api:this.uri+"remove/"+t});case 3:return a=e.sent,e.abrupt("return","company_deleted"===a.message);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}]),e}());var X=Object(u.b)((function(e){return{companies:e.companies}}),(function(e){return Object(T.a)(r,e)}))((function(e){var t=e.companies,a=e.selectCompany,r=Object(n.useState)(!1),o=Object(m.a)(r,2),i=(o[0],o[1]),u=Object(n.useState)(null),s=Object(m.a)(u,2),l=s[0],f=s[1],v=Object(n.useState)(t.source[0]),h=Object(m.a)(v,2),b=h[0],E=h[1];return Object(n.useEffect)((function(){E(t.selectedCompany||t.source[0]),function(){if(i(!0),b){var e=b.fleet.map((function(e){return Q.getHistoric(e.id)})),t=[[{type:"string",id:"Vehicle"},{type:"date",id:"Start"},{type:"date",id:"End"}]];Promise.all(e).then((function(e){e.forEach((function(e,a){e=e.reverse().slice(0,6);var r=!0,n=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done);r=!0){var u,s=o.value;t.push([b.fleet[a].license_plate,new Date(s.arrival.moment),(null===(u=s.departure)||void 0===u?void 0:u.moment)?new Date(s.departure.moment):new Date])}}catch(l){n=!0,c=l}finally{try{r||null==i.return||i.return()}finally{if(n)throw c}}})),f(t),i(!1)}))}}()}),[t.selectedCompany]),c.a.createElement("section",{id:"timeline",className:"h-box"},c.a.createElement("div",{className:"companies"},t.source.map((function(e){return e.fleet.length?c.a.createElement("div",{key:e.id,className:"".concat(b.id===e.id?"selected":""," company v-box"),onClick:function(){return a(e)}},c.a.createElement("div",{className:"company-info h-box"},c.a.createElement("div",{className:"company-thumbnail",style:{borderColor:e.color,backgroundImage:"url('".concat(e.thumbnail||"images/no-image.jpg","')")}}),c.a.createElement("h4",{className:"company-name"},e.name),c.a.createElement("span",{className:"company-fleet h-box"},c.a.createElement(N.a,{icon:"car"}),c.a.createElement("b",null,e.fleet.length)))):null}))),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"vehicle-search h-box"},c.a.createElement(Y.a,null),c.a.createElement("div",{className:"search-box h-box"},c.a.createElement(j.a,{trigger:"click",placement:"auto",speaker:c.a.createElement(_.a,{className:"toggle-on-garage"},"FILTROS")},c.a.createElement(d.a,{className:"filter",appearance:"default"},c.a.createElement(N.a,{icon:"filter"})," \xa0 Filtrar")),c.a.createElement(P.a,{inside:!0},c.a.createElement(p.a,{placeholder:"Procurar"}),c.a.createElement(P.a.Button,null,c.a.createElement(N.a,{icon:"search"}))))),c.a.createElement("hr",null),c.a.createElement("div",{className:"container-body"},c.a.createElement($.a,{width:"100%",height:300,chartType:"Timeline",loader:c.a.createElement("center",null,c.a.createElement(I.a,null)),data:l,options:{showRowNumber:!1}}))))}));var Z=function(){var e=Object(n.useState)("register"),t=Object(m.a)(e,2),a=t[0],r=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{id:"geral",className:"h-box"},c.a.createElement(S,{current:a,switchTo:function(e){r(e)}}),c.a.createElement("main",{id:"screen"},"register"===a&&c.a.createElement(W,null),"timeline"===a&&c.a.createElement(X,null))))},ee=a(292);var te=function(e){var t=e.component,a=Object(ee.a)(e,["component"]);return c.a.createElement(s.b,Object.assign({},a,{render:function(e){return x.isAuthenticated()?c.a.createElement(t,e):c.a.createElement(s.a,{to:{pathname:"/flux-control-client/login",state:{from:e.location}}})}}))},ae=a(121),re={selectedVehicle:null,source:[]};var ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_COMPANIES":return Object(ae.a)({},e,{source:t.source});case"SELECT_VEHICLE":return Object(ae.a)({},e,{selectedVehicle:t.selectedVehicle});case"SELECT_COMPANY":return Object(ae.a)({},e,{selectedCompany:t.selectedCompany});default:return e}},ce=Object(T.b)({companies:ne}),oe=Object(T.c)(ce);i.a.render(c.a.createElement(l.a,null,c.a.createElement((function(){return c.a.createElement(u.a,{store:oe},c.a.createElement("div",{className:"App"},c.a.createElement(s.d,null,c.a.createElement(s.b,{exact:!0,path:"/flux-control-client/login",component:O}),c.a.createElement(te,{exact:!0,path:"/flux-control-client/",component:Z}),c.a.createElement(s.b,{path:"*",component:function(){return"404 NOT FOUND"}}))))}),null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[296,1,2]]]);
//# sourceMappingURL=main.13603b6b.chunk.js.map