(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(30)},17:function(e,t,n){},20:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},21:function(e,t,n){},24:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(4),i=n.n(r),s=(n(17),n(1)),c=n.n(s),l=n(5),u=n(6),m=n(7),v=n(10),p=n(8),d=n(11),f=(n(20),n(21),n(9)),_=n.n(f);n(24);function g(e){var t=e.poster,n=e.alt;return o.a.createElement("img",{src:t,alt:n,title:n,className:"Movie__Poster"})}function h(e){var t=e.genre;return o.a.createElement("span",{className:"Movie__Genre"},t)}var w=function(e){var t=e.title,n=e.poster,a=e.genres,r=e.synopsis;return o.a.createElement("div",{className:"Movie"},o.a.createElement("div",{className:"Movie__Column"},o.a.createElement(g,{poster:n,alt:t})),o.a.createElement("div",{className:"Movie__Column"},o.a.createElement("h1",null,t),o.a.createElement("div",{className:"Movie__Genres"},a.map(function(e,t){return o.a.createElement(h,{genre:e,key:t})})),o.a.createElement("div",{className:"Movie__Synopsis"},o.a.createElement(_.a,{text:r,maxLine:"3",ellipsis:"...",trimRight:!0,basedOn:"letters"}))))},E=(n(25),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(v.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={},n._getMovies=Object(l.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._callApi();case 2:t=e.sent,n.setState({movies:t});case 4:case"end":return e.stop()}},e)})),n._callApi=function(){return fetch("/api/v2/list_movies.jsonp?sort_by=download_count").then(function(e){return e.json()}).then(function(e){return e.data.movies}).catch(function(e){return console.log(e)})},n._renderMovies=function(){return n.state.movies.map(function(e){return console.log(e),o.a.createElement(w,{title:e.title_english,poster:e.medium_cover_image,key:e.id,genres:e.genres,synopsis:e.synopsis})})},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this._getMovies()}},{key:"render",value:function(){var e=this.state.movies;return o.a.createElement("div",{className:e?"App":"App--loading"},e?this._renderMovies():"Loading")}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.d873d069.chunk.js.map