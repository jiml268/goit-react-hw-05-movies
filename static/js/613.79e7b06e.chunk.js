"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[613],{445:function(t,n,e){e.d(n,{Z:function(){return a}});var r="HeadingPage_title__ma9pD",c=e(184);var a=function(t){var n=t.text;return(0,c.jsx)("h1",{className:r,children:n})}},613:function(t,n,e){e.r(n),e.d(n,{default:function(){return p}});var r=e(439),c={searchForm:"SearchBox_searchForm__SdqTH",searchInput:"SearchBox_searchInput__RgkWt"},a=e(791),u=e(184),o=function(t){var n=t.onChange,e=(0,a.useState)(""),o=(0,r.Z)(e,2),s=o[0],i=o[1];return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""===s.trim()&&alert("Enter the film title"),n(s),i("")},className:c.searchForm,children:[(0,u.jsx)("input",{type:"text",name:"searchQuery",value:s,autoComplete:"off",autoFocus:!0,placeholder:"Search movies ...",onChange:function(t){i(t.target.value.toLowerCase())},className:c.searchInput}),(0,u.jsx)("button",{type:"submit",className:c.searchButton,children:"Search"})]})})},s=e(445),i=e(87),f=e(228),p=function(){var t,n=(0,i.lr)(),e=(0,r.Z)(n,2),c=e[0],p=e[1],h=(0,a.useState)([]),l=(0,r.Z)(h,2),v=l[0],m=l[1],x=null!==(t=c.get("query"))&&void 0!==t?t:"";(0,a.useEffect)((function(){x&&(0,f.V0)(x).then(m)}),[x,c]);return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("ul",{children:[(0,u.jsx)(s.Z,{text:"Movie Search"}),(0,u.jsx)(o,{value:x,onChange:function(t){p(""!==t?{query:t}:{})}}),v.map((function(t){return(0,u.jsx)("li",{children:(0,u.jsx)(i.rU,{to:"/movies/".concat(t.id),children:t.title||t.name})},t.id)}))]})})}},228:function(t,n,e){e.d(n,{Df:function(){return s},TP:function(){return h},V0:function(){return f},jW:function(){return x},z0:function(){return v}});var r=e(861),c=e(757),a=e.n(c),u="https://api.themoviedb.org/3/",o="284a0361af0f19810108b41baa563813";function s(){return i.apply(this,arguments)}function i(){return(i=(0,r.Z)(a().mark((function t(){var n,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(u,"trending/all/day?api_key=").concat(o));case 2:return n=t.sent,t.next=5,n.json();case 5:return e=t.sent,t.abrupt("return",e.results);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(u,"search/movie?api_key=").concat(o,"&query=").concat(n));case 2:return e=t.sent,t.next=5,e.json();case 5:return r=t.sent,t.abrupt("return",r.results);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(u,"/movie/").concat(n,"?api_key=").concat(o));case 2:return e=t.sent,t.next=5,e.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(u,"/movie/").concat(n,"/credits?api_key=").concat(o));case 2:return e=t.sent,t.next=5,e.json();case 5:return r=t.sent,t.abrupt("return",r.cast);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(u,"/movie/").concat(n,"/reviews?api_key=").concat(o));case 2:return e=t.sent,t.next=5,e.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},861:function(t,n,e){function r(t,n,e,r,c,a,u){try{var o=t[a](u),s=o.value}catch(i){return void e(i)}o.done?n(s):Promise.resolve(s).then(r,c)}function c(t){return function(){var n=this,e=arguments;return new Promise((function(c,a){var u=t.apply(n,e);function o(t){r(u,c,a,o,s,"next",t)}function s(t){r(u,c,a,o,s,"throw",t)}o(void 0)}))}}e.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=613.79e7b06e.chunk.js.map