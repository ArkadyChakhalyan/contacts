(this.webpackJsonpcontacts=this.webpackJsonpcontacts||[]).push([[0],{130:function(e,t,n){},131:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(32),r=n.n(c),s=n(106),i=n(14),o=n(8),l=n(190),u=n(188),j=n(25),b=n(185),d=n(76),O=n(170),m=n(181),x=n(182),f=function(e){return{type:"ON_DELETE_CONTACT",id:e}},h=n(98),p=n.n(h),g=n(22),v=n(4),N=n(167),C=n(1),S=Object(v.a)("div")((function(e){var t=e.theme;return{position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(N.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(N.a)(t.palette.common.white,.25)}}})),w=Object(v.a)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),y=Object(v.a)(g.c)((function(e){var t=e.theme;return{color:"inherit","& .MuiInputBase-input":{padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width")}}})),T=function(e){var t=e.setSearchFilter;return Object(C.jsxs)(S,{children:[Object(C.jsx)(w,{children:Object(C.jsx)(p.a,{})}),Object(C.jsx)(y,{onChange:function(e){t(e.target.value)},placeholder:"Search\u2026",inputProps:{"aria-label":"search"}})]})},k=function(e){var t=e.setSearchFilter,n=Object(j.b)(),a=Object(i.g)();return Object(C.jsxs)(b.a,{position:"sticky",sx:{flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[Object(C.jsx)(d.a,{variant:"subtitle1",sx:{ml:3},children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),Object(C.jsx)(T,{setSearchFilter:t}),Object(C.jsxs)(O.a,{sx:{display:"flex",alignItems:"center"},children:[Object(C.jsx)(m.a,{color:"inherit",onClick:function(){n({type:"ON_LOGOUT"}),a("/")},children:"\u0432\u044b\u0439\u0442\u0438"}),Object(C.jsx)(x.a,{sx:{m:2,ml:1}})]})]})},E=n(103),I=n.n(E),z=n(187),D=n(179),L=n(189),_=n(174),F=n(102),P=n.n(F),A=n(105),W=n(184),q=n(173),B=n(101),G=n.n(B),J=n(100),M=n.n(J),R=function(e){var t=e.open,n=e.onClose,a=e.anchor,c=e.contact,r=e.onPopupOpen,s=e.pressEdited,i=c.id,o=Object(j.b)();return Object(C.jsxs)(A.a,{anchorEl:a,open:t,onClose:n,onClick:n,children:[Object(C.jsxs)(W.a,{onClick:function(){r(),s(),n()},children:[Object(C.jsx)(q.a,{children:Object(C.jsx)(M.a,{fontSize:"small"})}),"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"]}),Object(C.jsxs)(W.a,{onClick:function(){o(f(i)),n()},children:[Object(C.jsx)(q.a,{children:Object(C.jsx)(G.a,{fontSize:"small"})}),"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"]})]})},U=n(15),$=n(178),V=n(183),H=n(171),K=n(176),Q=function(e){var t=e.contact,n=e.edit,c=e.state,r=e.onEdit,s=e.onSubmit,i=t.firstName,l=t.lastName,u=t.number,j=Object(a.useState)(i),b=Object(o.a)(j,2),x=b[0],f=b[1],h=Object(a.useState)(l),p=Object(o.a)(h,2),g=p[0],v=p[1],N=Object(a.useState)(u),S=Object(o.a)(N,2),w=S[0],y=S[1],T=Object(a.useState)(!1),k=Object(o.a)(T,2),E=k[0],I=k[1];Object(a.useEffect)((function(){""!==x&&""!==w&&w.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/)?I(!1):I(!0)}),[x,w]);return n?Object(C.jsxs)(O.a,{component:"form",onSubmit:s,sx:{display:"flex",flexDirection:"column",gap:2.2,width:"90%",mt:2},children:[Object(C.jsx)(K.a,{required:!0,label:"\u0418\u043c\u044f",variant:"standard",value:x,onChange:function(e){f(e.target.value),r(Object(U.a)(Object(U.a)({},c),{},{firstName:e.target.value}))},size:"small",autoFocus:!0}),Object(C.jsx)(K.a,{label:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",variant:"standard",size:"small",value:g,onChange:function(e){v(e.target.value),r(Object(U.a)(Object(U.a)({},c),{},{lastName:e.target.value}))}}),Object(C.jsx)(K.a,{required:!0,label:"\u041d\u043e\u043c\u0435\u0440",variant:"standard",size:"small",value:w,onChange:function(e){y(e.target.value),r(Object(U.a)(Object(U.a)({},c),{},{number:e.target.value}))}}),Object(C.jsx)(m.a,{sx:{mt:3},fullWidth:!0,size:"large",type:"submit",disabled:E,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]}):Object(C.jsxs)(z.a,{sx:{display:"flex",flexDirection:"column",alignSelf:"flex-start",gap:1.5,mt:2},children:[Object(C.jsxs)(D.a,{children:[Object(C.jsx)(d.a,{color:"#9e9e9e",children:"\u0418\u043c\u044f:"}),Object(C.jsx)(d.a,{sx:{ml:1},children:i})]}),l?Object(C.jsxs)(D.a,{children:[Object(C.jsx)(d.a,{color:"#9e9e9e",children:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f:"}),Object(C.jsx)(d.a,{sx:{ml:1},children:l})]}):null,Object(C.jsxs)(D.a,{children:[Object(C.jsx)(d.a,{color:"#9e9e9e",children:"\u041d\u043e\u043c\u0435\u0440:"}),Object(C.jsx)(d.a,{sx:{ml:1},children:u})]})]})},X=n(72),Y=n.n(X),Z={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",boxShadow:16,p:4,pt:6,display:"flex",flexDirection:"column",alignItems:"center"},ee=function(e){var t=e.open,n=e.onPopupClose,c=e.contact,r=e.editedPressed,s=Object(j.b)(),i=c.firstName,l=c.lastName,b=c.shortName,h=c.image,p=c.id,g=l?"".concat(i," ").concat(l):i,v=Object(a.useState)(r),N=Object(o.a)(v,2),S=N[0],w=N[1],y=Object(a.useState)(Object(U.a)({},c)),T=Object(o.a)(y,2),k=T[0],E=T[1],I=function(){n(),w(!1)};return Object(C.jsx)($.a,{disableEnforceFocus:!0,"aria-labelledby":"contact",open:t,onClose:I,closeAfterTransition:!0,BackdropComponent:V.a,BackdropProps:{timeout:500},children:Object(C.jsx)(H.a,{in:t,children:Object(C.jsxs)(O.a,{sx:Z,children:[Object(C.jsx)(u.a,{"aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442",size:"large",color:"primary",sx:{position:"absolute",right:"8px",top:"8px"},onClick:I,children:Object(C.jsx)(Y.a,{})}),Object(C.jsx)(x.a,{src:h,size:"large",sx:{width:64,height:64,mb:2},children:h?"":b}),Object(C.jsx)(d.a,{variant:"h6",component:"h2",children:g}),Object(C.jsx)(Q,{contact:c,edit:S,onEdit:E,state:k,onSubmit:function(){w(!1),s(function(e,t){return{type:"ON_EDIT_CONTACT",contact:e,id:t}}(k,p))}}),S?null:Object(C.jsx)(m.a,{sx:{mt:2},fullWidth:!0,size:"large",onClick:function(){w(!0)},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"}),Object(C.jsx)(m.a,{size:"large",onClick:function(){I(),s(f(p))},fullWidth:!0,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})})})},te=function(e){var t=e.contact,n=t.firstName,c=t.lastName,r=t.number,s=t.shortName,i=t.image,l=t.id,j=c?"".concat(n," ").concat(c):n,b=Object(a.useState)(null),d=Object(o.a)(b,2),O=d[0],m=d[1],f=!!O,h=Object(a.useState)(!1),p=Object(o.a)(h,2),g=p[0],v=p[1],N=Object(a.useState)(!1),S=Object(o.a)(N,2),w=S[0],y=S[1],T=function(){v(!0)};return Object(C.jsxs)(a.Fragment,{children:[Object(C.jsx)(ee,{open:g,onPopupClose:function(){v(!1),y(!1)},contact:t,editedPressed:w}),Object(C.jsxs)(D.a,{button:!0,onClick:T,children:[Object(C.jsx)(L.a,{children:Object(C.jsx)(x.a,{src:i,children:i?"":s})}),Object(C.jsx)(_.a,{primary:j,secondary:r}),Object(C.jsx)(u.a,{edge:"end","aria-label":"\u041c\u0435\u043d\u044e",onClick:function(e){e.stopPropagation(),m(e.currentTarget)},children:Object(C.jsx)(P.a,{})}),Object(C.jsx)(R,{open:f,onClose:function(e){e&&e.stopPropagation(),m(null)},anchor:O,contact:t,onPopupOpen:T,pressEdited:function(){return y(!0)}})]},l)]})},ne=function(e){var t=e.searchFilter,n=e.contacts;return 0===n.length?Object(C.jsx)(d.a,{variant:"subtitle1",align:"center",sx:{mt:2},children:"\u0414\u043e\u0431\u0430\u0432\u044c \u0441\u0432\u043e\u0439 \u043f\u0435\u0440\u0432\u044b\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442!"}):0===n.filter((function(e){var n=e.firstName,a=e.number,c=e.lastName?e.lastName:"",r=t.toLowerCase();return n.toLowerCase().includes(r)||a.toLowerCase().includes(r)||c.toLowerCase().includes(r)})).length&&n.length>0?Object(C.jsx)(d.a,{variant:"subtitle1",align:"center",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"}):Object(C.jsx)(z.a,{children:n.filter((function(e){var n=e.firstName,a=e.number,c=e.lastName?e.lastName:"",r=t.toLowerCase();return n.toLowerCase().includes(r)||a.toLowerCase().includes(r)||c.toLowerCase().includes(r)})).sort((function(e,t){return ae(e.firstName,t.firstName)})).map((function(e){return Object(C.jsx)(te,{contact:e},e.id)}))})},ae=function(e,t){return e>t?1:e===t?0:e<t?-1:void 0},ce={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",boxShadow:16,p:4,pt:6,display:"flex",flexDirection:"column",alignItems:"center"},re=function(e){var t=e.open,n=e.onClose,c=Object(j.b)(),r=Object(a.useState)(""),s=Object(o.a)(r,2),i=s[0],l=s[1],b=Object(a.useState)(""),f=Object(o.a)(b,2),h=f[0],p=f[1],g=Object(a.useState)(!1),v=Object(o.a)(g,2),N=v[0],S=v[1];Object(a.useEffect)((function(){""!==i&&""!==h&&h.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/)?S(!1):S(!0)}),[i,h]);return Object(C.jsx)($.a,{disableEnforceFocus:!0,"aria-labelledby":"contact",open:t,onClose:n,closeAfterTransition:!0,BackdropComponent:V.a,BackdropProps:{timeout:500},children:Object(C.jsx)(H.a,{in:t,children:Object(C.jsxs)(O.a,{sx:ce,children:[Object(C.jsx)(u.a,{"aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442",size:"large",color:"primary",sx:{position:"absolute",right:"8px",top:"8px"},onClick:n,children:Object(C.jsx)(Y.a,{})}),Object(C.jsx)(x.a,{size:"large",sx:{width:64,height:64,mb:2}}),Object(C.jsx)(d.a,{variant:"h6",component:"h2",children:"\u041d\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442"}),Object(C.jsxs)(O.a,{component:"form",onSubmit:function(e){e.preventDefault();var t=new FormData(e.currentTarget),a={firstName:t.get("firstName"),lastName:t.get("lastName"),number:t.get("number")};c({type:"ON_ADD_CONTACT",contact:a}),n()},sx:{display:"flex",flexDirection:"column",gap:2.2,width:"90%",mt:3},children:[Object(C.jsx)(K.a,{required:!0,label:"\u0418\u043c\u044f",id:"firstName",name:"firstName",variant:"standard",size:"small",onChange:function(e){return l(e.target.value)},autoFocus:!0}),Object(C.jsx)(K.a,{id:"lastName",name:"lastName",label:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",variant:"standard",size:"small"}),Object(C.jsx)(K.a,{required:!0,id:"number",name:"number",label:"\u041d\u043e\u043c\u0435\u0440",variant:"standard",size:"small",onChange:function(e){return p(e.target.value)}}),Object(C.jsx)(m.a,{sx:{mt:3},fullWidth:!0,size:"large",type:"submit",disabled:N,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]}),Object(C.jsx)(m.a,{size:"large",onClick:n,fullWidth:!0,children:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"})]})})})},se=function(){var e=Object(j.c)((function(e){return e.user})),t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(!1),b=Object(o.a)(s,2),d=b[0],O=b[1];return e?Object(C.jsxs)(a.Fragment,{children:[Object(C.jsx)(re,{open:d,onClose:function(){O(!1)}}),Object(C.jsx)(k,{setSearchFilter:r}),Object(C.jsxs)(l.a,{maxWidth:"sm",sx:{pt:3},children:[Object(C.jsx)(ne,{searchFilter:c,contacts:e.contacts}),Object(C.jsx)(u.a,{"aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442",size:"large",color:"primary",sx:{position:"fixed",right:"32px",bottom:"32px"},onClick:function(){O(!0)},children:Object(C.jsx)(I.a,{sx:{fontSize:32}})})]})]}):Object(C.jsx)(i.a,{to:"/",replace:!0})},ie=n(175),oe=n(70),le=n(71),ue=[{login:"user",password:"password",contacts:[{id:0,firstName:"\u0410\u043b\u0435\u043d\u0430",lastName:"\u041f\u0435\u0442\u0440\u043e\u0432\u0430",shortName:"\u0410",number:"+79211234567",picture:null},{id:1,firstName:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",lastName:"\u0418\u0432\u0430\u043d\u043e\u0432",shortName:"\u0414",number:"+79991234567",picture:null},{id:2,firstName:"\u041c\u0430\u043c\u0430",lastName:"",shortName:"\u041c",number:"+79091234567",picture:null}]}],je=new(function(){function e(){Object(oe.a)(this,e)}return Object(le.a)(e,[{key:"onLogin",value:function(e,t){return new Promise((function(n,a){var c=ue.find((function(n){return n.login.toLowerCase()===e.toLowerCase()&&n.password===t}));setTimeout((function(){c?n(c):a(new Error("\u0422\u0430\u043a\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"))}),100)}))}}]),e}()),be=function(){var e=Object(j.b)(),t=Object(i.g)(),n=Object(a.useState)(!0),c=Object(o.a)(n,2),r=c[0],s=c[1],l=Object(a.useState)(!1),u=Object(o.a)(l,2),b=u[0],d=u[1],O=Object(a.useState)(!1),x=Object(o.a)(O,2),f=x[0],h=x[1],p=Object(a.useState)(""),g=Object(o.a)(p,2),v=g[0],N=g[1],S=Object(a.useState)(""),w=Object(o.a)(S,2),y=w[0],T=w[1];return Object(a.useEffect)((function(){s(""===v||""===y),""!==y&&(d(!1),h(!1))}),[v,y]),Object(C.jsxs)(ie.a,{component:"form",onSubmit:function(n){n.preventDefault();var a=new FormData(n.currentTarget);je.onLogin(a.get("login"),a.get("password")).then((function(n){e({type:"ON_LOGIN",user:n}),t("/contacts")})).catch((function(){d(!0),h(!0),T("")}))},noValidate:!0,sx:{mt:1},children:[Object(C.jsx)(K.a,{margin:"normal",required:!0,fullWidth:!0,id:"login",label:"\u041b\u043e\u0433\u0438\u043d",name:"login",autoComplete:"login",autoFocus:!0,error:b,onChange:function(e){N(e.target.value)}}),Object(C.jsx)(K.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",id:"password",autoComplete:"current-password",error:f,onChange:function(e){T(e.target.value)},value:y}),Object(C.jsx)(m.a,{type:"submit",fullWidth:!0,disabled:r,variant:"contained",sx:{mt:3,mb:2},children:"\u0432\u043e\u0439\u0442\u0438"})]})},de=function(){return Object(C.jsx)(l.a,{maxWidth:"xs",children:Object(C.jsxs)(ie.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(C.jsx)(x.a,{sx:{m:2}}),Object(C.jsx)(d.a,{component:"h1",variant:"h5",children:"\u0412\u0445\u043e\u0434 \u0432 \u043b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"}),Object(C.jsx)(be,{})]})})},Oe=function(){return Object(C.jsxs)(i.d,{children:[Object(C.jsx)(i.b,{path:"/",element:Object(C.jsx)(de,{})}),Object(C.jsx)(i.b,{path:"/contacts",element:Object(C.jsx)(se,{})})]})},me=n(104),xe=n(17),fe={user:null,uniqueId:3},he=function(e,t){return Object(U.a)(Object(U.a)({},t),{},{user:e})},pe=function(e){return Object(U.a)(Object(U.a)({},e),{},{user:null})},ge=function(e,t){var n=t.user,a=t.uniqueId,c=n.contacts,r=e.firstName,s=e.lastName,i=e.number,o={id:a,firstName:r,lastName:s,shortName:r[0],number:i},l=[].concat(Object(xe.a)(c),[o]);return Object(U.a)(Object(U.a)({},t),{},{uniqueId:a++,user:Object(U.a)(Object(U.a)({},n),{},{contacts:l})})},ve=function(e,t,n){var a=n.user,c=a.contacts,r=c.findIndex((function(e){return t===e.id})),s=[].concat(Object(xe.a)(c.slice(0,r)),[e],Object(xe.a)(c.slice(r+1)));return Object(U.a)(Object(U.a)({},n),{},{user:Object(U.a)(Object(U.a)({},a),{},{contacts:s})})},Ne=function(e,t){var n=t.user,a=n.contacts,c=a.findIndex((function(t){return e===t.id})),r=[].concat(Object(xe.a)(a.slice(0,c)),Object(xe.a)(a.slice(c+1)));return Object(U.a)(Object(U.a)({},t),{},{user:Object(U.a)(Object(U.a)({},n),{},{contacts:r})})},Ce=localStorage.getItem("contactsSPA")?JSON.parse(localStorage.getItem("contactsSPA")):void 0,Se=Object(me.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ON_LOGIN":return he(t.user,e);case"ON_LOGOUT":return pe(e);case"ON_ADD_CONTACT":return ge(t.contact,e);case"ON_EDIT_CONTACT":return ve(t.contact,t.id,e);case"ON_DELETE_CONTACT":return Ne(t.id,e);default:return e}}),Ce);Se.subscribe((function(){localStorage.setItem("contactsSPA",JSON.stringify(Se.getState()))}));n(130);r.a.render(Object(C.jsx)(a.StrictMode,{children:Object(C.jsx)(j.a,{store:Se,children:Object(C.jsx)(s.a,{children:Object(C.jsx)(Oe,{})})})}),document.getElementById("root"))}},[[131,1,2]]]);
//# sourceMappingURL=main.a9a6acab.chunk.js.map