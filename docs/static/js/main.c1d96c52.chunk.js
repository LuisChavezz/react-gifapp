(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(4),i=n.n(c),a=n(5),s=n(24),u=n(67),j=n(3),o=function(e){var t=e.setAnime,n=Object(r.useState)(""),c=Object(a.a)(n,2),i=c[0],o=c[1];return Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(s.a)(e))})),o(""))},children:Object(j.jsx)(u.a,{onChange:function(e){o(e.target.value)},id:"outlined-basic",label:"Texto",variant:"outlined",value:i,autoComplete:"off"})})},p=function(e){var t=e.img;return Object(j.jsxs)("div",{className:"card animate__animated animate__bounce animate__delay-2s",children:[Object(j.jsx)("img",{src:t.url,alt:t.title}),Object(j.jsx)("p",{children:t.title})]})},l=n(15),b=n.n(l),d=n(23),m=function(){var e=Object(d.a)(b.a.mark((function e(t){var n,r,c,i,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=eA53tGpgpoDPXMeKvWNrtmVpmVcGh8pq&q=".concat(t,"&limit=10"),e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,i=c.data,a=i.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=e.anime,n=Object(r.useState)([]),c=Object(a.a)(n,2),i=c[0],s=c[1];return Object(r.useEffect)((function(){m(t).then((function(e){return s(e)}))}),[t]),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:t}),Object(j.jsx)("div",{className:"card-grid",children:i.map((function(e){return Object(j.jsx)(p,{img:e},e.id)}))})]})},h=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),n=t[0],c=t[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"Gif Expert App"}),Object(j.jsx)(o,{setAnime:c}),Object(j.jsx)("hr",{}),Object(j.jsx)("ol",{children:n.map((function(e){return Object(j.jsx)(f,{anime:e},e)}))})]})};n(37),n(38);i.a.render(Object(j.jsx)(h,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.c1d96c52.chunk.js.map