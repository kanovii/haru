(this.webpackJsonpharu=this.webpackJsonpharu||[]).push([[0],{45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(26),s=n.n(r),i=n(9),o=n(20);n(33),n(47);o.a.initializeApp({apiKey:"AIzaSyDlYm0tcdkvm5Tum9P9JPjlIOj-ft9BFPk",authDomain:"haru-796f0.firebaseapp.com",projectId:"haru-796f0",storageBucket:"haru-796f0.appspot.com",messagingSenderId:"528960554106",appId:"1:528960554106:web:9e0a2598abaadf240fe7c3"});var u=o.a.auth(),j=o.a,l=o.a.firestore(),b=n(14),d=n(5),h=n(15),O=n.n(h),f=n(19),x=n(2),p=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),o=s[0],l=s[1],b=Object(a.useState)(!0),d=Object(i.a)(b,2),h=d[0],p=d[1],m=Object(a.useState)(""),v=Object(i.a)(m,2),g=v[0],w=v[1],k=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?c(a):l(a)},S=function(){var e=Object(f.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!h){e.next=8;break}return e.next=5,u.signInWithEmailAndPassword(n,o);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,u.createUserWithEmailAndPassword(n,o);case 10:a=e.sent;case 11:console.log(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),w(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(f.a)(O.a.mark((function e(t){var n,a,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new j.auth.GoogleAuthProvider:"facebook"===n&&(a=new j.auth.FacebookAuthProvider),e.next=4,u.signInWithPopup(a);case 4:c=e.sent,console.log(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{children:[Object(x.jsxs)("form",{onSubmit:S,children:[Object(x.jsx)("input",{onChange:k,name:"email",type:"text",placeholder:"email",required:!0,value:n}),Object(x.jsx)("input",{onChange:k,name:"password",type:"password",placeholder:"password",required:!0,value:o}),Object(x.jsx)("input",{type:"submit",value:h?"Sign In":"Create New"}),g]}),Object(x.jsx)("button",{onClick:function(){p((function(e){return!e}))},children:h?"Create New":"Sign In"}),Object(x.jsx)("button",{onClick:I,name:"google",children:"Login With Google"}),Object(x.jsx)("button",{onClick:I,name:"facebook",children:"Login With Facebook"})]})},m=n(28),v=function(e){var t=e.haruobj,n=e.isOwner,c=Object(a.useState)(!0),r=Object(i.a)(c,2),s=r[0],o=r[1],u=function(){var e=Object(f.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc9c4\uc9dc \uc9c0\uc6b8\uac70\uc57c?\u3160\u3145\u3160")){e.next=4;break}return e.next=4,l.doc("harus/".concat(t.id)).delete();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"haru_Text_container",children:[Object(x.jsxs)("h4",{className:s?"items":"items_big",onClick:function(e){o(!s)},children:[t.text,t.haru]}),n&&Object(x.jsxs)("div",{setItemsClass:"delete_edit",children:[Object(x.jsx)("button",{className:"deldel",onClick:u,children:"x"}),Object(x.jsx)("button",{className:"editedit",children:"edit"})]})]})},g=function(e){var t=e.userObj,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)([]),u=Object(i.a)(o,2),j=u[0],b=u[1];Object(a.useEffect)((function(){l.collection("harus").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(m.a)({id:e.id},e.data())}));b(t)}))}),[]);return Object(x.jsxs)("div",{className:"haru_home_container",children:[Object(x.jsxs)("form",{className:"haru_form",onSubmit:function(e){e.preventDefault(),""!==r?(l.collection("harus").add({text:r,createdAt:Date.now(),createrId:t.uid}),s("")):s("")},children:[Object(x.jsx)("input",{className:"haru_text_bar",onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"\ud558\uace0 \uc2f6\uc740 \ub9d0",value:r}),Object(x.jsx)("input",{className:"haru_it",type:"submit",value:"HARU IT"})]}),Object(x.jsx)("div",{children:j.map((function(e){return Object(x.jsx)(v,{haruobj:e,isOwner:e.createrId===t.uid},e.id)}))})]})},w=function(){var e=Object(d.f)();return Object(x.jsx)("button",{onClick:function(){u.signOut(),e.push("/")},children:"Log Out"})},k=function(){return Object(x.jsxs)("ul",{className:"navi_container",children:[Object(x.jsx)("li",{children:Object(x.jsx)(b.b,{className:"navi",to:"/",children:"Home"})}),Object(x.jsx)("li",{children:Object(x.jsx)(b.b,{className:"navi",to:"/Profile",children:"Profile"})})]})},S=function(e){var t=e.isLoggedIn,n=e.userObj;return Object(x.jsxs)(b.a,{children:[t&&Object(x.jsx)(k,{}),Object(x.jsx)(d.c,{children:t?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(d.a,{exact:!0,path:"/",children:Object(x.jsx)(g,{userObj:n})}),Object(x.jsx)(d.a,{exact:!0,path:"/Profile",children:Object(x.jsx)(w,{})})]}):Object(x.jsx)(d.a,{exact:!0,path:"/",children:Object(x.jsx)(p,{})})})]})};n(45);var I=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),s=Object(i.a)(r,2),o=s[0],j=s[1],l=Object(a.useState)(null),b=Object(i.a)(l,2),d=b[0],h=b[1];return Object(a.useEffect)((function(){u.onAuthStateChanged((function(e){e?(c(!0),h(e)):c(!1),j(!0)}))})),Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"containers",children:[o?Object(x.jsx)(S,{isLoggedIn:n,userObj:d}):"\ub85c\uadf8\uc778 \ud655\uc778\uc911",Object(x.jsxs)("footer",{children:["\xa9 haru ",(new Date).getFullYear()]})]})})};console.log(u),s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(I,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.feb80271.chunk.js.map