"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[809],{809:function(e,a,t){t.r(a),t.d(a,{default:function(){return m}});var s=t(861),n=t(439),r=t(757),c=t.n(r),i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWZhZGQ2ZTM1NzZhYzczYTI5YTBiZGQzY2QxODg0YyIsInN1YiI6IjY0YjI2NWJmMjNkMjc4MDEyNjE5ZTA0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3G83-ZE9yN2ZrJDadqJ_dUGn7iM-UGUP6UdVEl0aij0"}},o=function(){var e=(0,s.Z)(c().mark((function e(a){var t,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(a,"/credits"),i);case 2:return t=e.sent,e.next=5,t.json();case 5:return s=e.sent,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),l=o,p=t(791),_=t(689),h={cast_wrap:"MovieCast_cast_wrap__pCL8y",title:"MovieCast_title__A+sTR",cast_list:"MovieCast_cast_list__zqR34",cast_item:"MovieCast_cast_item__oZp3o",cast_poster:"MovieCast_cast_poster__sJzFD",actor_info:"MovieCast_actor_info__gDBLr",name_span:"MovieCast_name_span__EHA3t"},u=t(184),m=function(){var e=(0,p.useState)(null),a=(0,n.Z)(e,2),t=a[0],r=a[1],i=(0,p.useState)(!1),o=(0,n.Z)(i,2),m=o[0],d=o[1],f=(0,p.useState)(null),v=(0,n.Z)(f,2),x=v[0],j=v[1],N=(0,_.UO)().postId;return(0,p.useEffect)((function(){if(N){var e=function(){var e=(0,s.Z)(c().mark((function e(){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.prev=1,e.next=4,l(N);case 4:if(0!==(a=e.sent).cast.length){e.next=10;break}throw alert("There is no cast information!"),new Error("There is no cast information!");case 10:r(a.cast);case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),j(e.t0),console.log(e.t0);case 17:return e.prev=17,d(!1),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[1,13,17,20]])})));return function(){return e.apply(this,arguments)}}();e()}}),[N]),(0,u.jsxs)("div",{className:h.cast_wrap,children:[(0,u.jsx)("h2",{className:h.title,children:"Movie Cast:"}),m&&(0,u.jsx)("p",{children:"Loading content..."}),x?(0,u.jsx)("p",{children:x.message}):!m&&(null===t||void 0===t?void 0:t.length)>0&&(0,u.jsx)("ul",{className:h.cast_list,children:t.map((function(e){var a=e.credit_id,t=e.name,s=e.character,n=e.profile_path;return(0,u.jsxs)("li",{className:h.cast_item,children:[(0,u.jsx)("img",{className:h.cast_poster,src:n?"https://www.themoviedb.org/t/p/original/".concat(n):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:t,width:"150px"}),(0,u.jsxs)("div",{className:h.actor_info,children:[(0,u.jsxs)("p",{className:h.actor_name,children:[(0,u.jsx)("span",{className:h.name_span,children:"Name:"}),(0,u.jsx)("span",{className:h.name_span,children:t})]}),(0,u.jsxs)("p",{className:h.actor_name,children:[(0,u.jsx)("span",{className:h.name_span,children:"Character:"}),(0,u.jsx)("span",{className:h.name_span,children:s})]})]})]},a)}))})]})}}}]);
//# sourceMappingURL=809.3c44fb5d.chunk.js.map