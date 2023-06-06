"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[453],{445:function(e,t,n){n.d(t,{Z:function(){return c}});var r="HeadingPage_title__ma9pD",a=n(184);var c=function(e){var t=e.text;return(0,a.jsx)("h1",{className:r,children:t})}},453:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(439),a={searchForm:"SearchBox_searchForm__SdqTH",searchInput:"SearchBox_searchInput__RgkWt"},c=n(791),s=n(184),u=function(e){var t=e.onChange,n=(0,c.useState)(""),u=(0,r.Z)(n,2),o=u[0],i=u[1];return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===o.trim()&&alert("Enter the film title"),t(o),i("")},className:a.searchForm,children:[(0,s.jsx)("input",{type:"text",name:"searchQuery",value:o,autoComplete:"off",autoFocus:!0,placeholder:"Search movies ...",onChange:function(e){i(e.target.value.toLowerCase())},className:a.searchInput}),(0,s.jsx)("button",{type:"submit",className:a.searchButton,children:"Search"})]})})},o=n(445),i=n(87),f=n(228),h=n(689),p="MoviesPage_moviesPageList__1E9vB",l="MoviesPage_moviesPageItem__yiIta",v="MoviesPage_moviesPageeImage__4g0Lq",m="MoviesPage_moviesPageDetails__l1gq1",d=function(){var e,t=(0,i.lr)(),n=(0,r.Z)(t,2),a=n[0],d=n[1],x=(0,c.useState)([]),_=(0,r.Z)(x,2),g=_[0],y=_[1],j=(0,h.TH)(),w=null!==(e=a.get("query"))&&void 0!==e?e:"";(0,c.useEffect)((function(){w&&(0,f.V0)(w).then(y)}),[w,a]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Z,{text:"Movie Search"}),(0,s.jsx)(u,{value:w,onChange:function(e){d(""!==e?{query:e}:{})}}),(0,s.jsx)("ul",{className:p,children:g.map((function(e){return(0,s.jsx)("li",{className:l,children:(0,s.jsxs)(i.rU,{to:"/movies/".concat(e.id),state:{from:j.pathname+j.search},children:[(0,s.jsx)("div",{children:(0,s.jsx)("img",{className:v,src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:e.title})}),(0,s.jsxs)("div",{className:m,children:[(0,s.jsxs)("h3",{children:[" ",e.title,"  "]}),(0,s.jsxs)("h4",{children:[" Release Date: ",e.release_date]})]})]})},e.id)}))})]})}},228:function(e,t,n){n.d(t,{Df:function(){return o},TP:function(){return p},V0:function(){return f},jW:function(){return d},z0:function(){return v}});var r=n(861),a=n(757),c=n.n(a),s="https://api.themoviedb.org/3/",u="284a0361af0f19810108b41baa563813";function o(){return i.apply(this,arguments)}function i(){return(i=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"trending/movie/day?api_key=").concat(u));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"search/movie?api_key=").concat(u,"&query=").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/movie/").concat(t,"?api_key=").concat(u));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(u));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r.cast);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(u));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},861:function(e,t,n){function r(e,t,n,r,a,c,s){try{var u=e[c](s),o=u.value}catch(i){return void n(i)}u.done?t(o):Promise.resolve(o).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,c){var s=e.apply(t,n);function u(e){r(s,a,c,u,o,"next",e)}function o(e){r(s,a,c,u,o,"throw",e)}u(void 0)}))}}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=453.3cb8ed15.chunk.js.map