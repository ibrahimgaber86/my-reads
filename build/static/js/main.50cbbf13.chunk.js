(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(35)},31:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(18),l=a.n(r),c=a(20),s=a(6),i=a(7),h=a(9),u=a(8),m=a(10),d=a(5);var f=function(e){var t=e.book,a=e.onShelfChange;return o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{value:t.shelf||"none",onChange:function(e){return a(t,e.target.value)}},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))};var b=function(e){var t=e.book,a=e.onShelfChange,n=t.title,r=t.authors,l=void 0===r?[]:r,c=t.imageLinks;return o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(c&&c.thumbnail,")")}}),o.a.createElement(f,{book:t,onShelfChange:a})),o.a.createElement("div",{className:"book-title"},n),l.map(function(e){return o.a.createElement("div",{key:e,className:"book-authors"},e)}))};var E=function(){return o.a.createElement("div",{className:"lds-ellipsis"},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null))},k=a(14),v="https://reactnd-books-api.udacity.com",g=localStorage.token;g||(g=localStorage.token=Math.random().toString(36).substr(-8));var p={Accept:"application/json",Authorization:g},N=function(e,t){return fetch("".concat(v,"/books/").concat(e.id),{method:"PUT",headers:Object(k.a)({},p,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},S=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(h.a)(this,Object(u.a)(t).call(this))).state={searchText:"",books:[],loading:!1},e.myref=o.a.createRef(),e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.myref.current.focus()}},{key:"componentDidUpdate",value:function(e,t){var a,n=this,o=this.state.searchText;o!==t.searchText&&(o&&o.trim?(this.setState({loading:!0}),(a=this.state.searchText,fetch("".concat(v,"/search"),{method:"POST",headers:Object(k.a)({},p,{"Content-Type":"application/json"}),body:JSON.stringify({query:a})}).then(function(e){return e.json()}).then(function(e){return e.books})).then(function(e){e.error?n.setState({books:[],loading:!1}):n.setState({books:e,loading:!1})})):this.setState({books:[]}))}},{key:"render",value:function(){var e=this,t=this.props,a=t.books,n=t.onShelfChange;return o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(d.b,{to:"/",className:"close-search"}),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("input",{type:"text",ref:this.myref,placeholder:"Search by title or author",value:this.state.searchText,onChange:function(t){return e.setState({searchText:t.target.value})}}))),o.a.createElement("div",{className:"search-books-results"},o.a.createElement("ol",{className:"books-grid"},this.state.loading&&o.a.createElement(E,null)||this.state.books.map(function(e){return a.forEach(function(t){e.id===t.id&&(e=t)}),e}).map(function(e){return o.a.createElement(b,{key:e.id,book:e,onShelfChange:n})}))))}}]),t}(n.Component);var y=function(e){var t=e.title,a=e.books,n=e.filter,r=e.loading,l=e.onShelfChange;return o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},t),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},r&&o.a.createElement(E,null)||a.filter(function(e){return e.shelf===n}).map(function(e){return o.a.createElement(b,{key:e.id,book:e,onShelfChange:l})}))))},C={CURRENTLY_READING:"currentlyReading",WANT_TO_READ:"wantToRead",READ:"read",NONE:"none"};var R=function(e){var t=e.books,a=e.loading,n=e.onShelfChange;return o.a.createElement("div",{className:"list-books"},o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"MyReads")),o.a.createElement("div",{className:"list-books-content"},o.a.createElement("div",null,o.a.createElement(y,{title:"Currently Reading",filter:C.CURRENTLY_READING,books:t,loading:a,onShelfChange:n}),o.a.createElement(y,{title:"Want To Read",filter:C.WANT_TO_READ,books:t,loading:a,onShelfChange:n}),o.a.createElement(y,{title:"Read",filter:C.READ,books:t,loading:a,onShelfChange:n}))))},j=a(0),O=(a(31),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],loading:!0},a.changeShelf=function(e,t){N(e,t).catch(function(e){console.log(e)});var n=a.state.books.filter(function(t){return t.id!==e.id});"none"===t?a.setState({books:n}):(e.shelf=t,console.log(e),a.setState({books:Object(c.a)(n).concat([e])}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.loading=!0,fetch("".concat(v,"/books"),{headers:p}).then(function(e){return e.json()}).then(function(e){return e.books}).then(function(t){return e.setState({books:t,loading:!1})})}},{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement(d.a,null,o.a.createElement(j.c,null,o.a.createElement(j.a,{path:"/search"},o.a.createElement(S,{onShelfChange:this.changeShelf,books:this.state.books})),o.a.createElement(j.a,{path:"/"},o.a.createElement(R,Object.assign({},this.state,{onShelfChange:this.changeShelf})))),o.a.createElement("div",{className:"open-search"},o.a.createElement(d.b,{to:"/search"}))))}}]),t}(o.a.Component));a(33);l.a.render(o.a.createElement(O,null),document.getElementById("root"))}},[[21,2,1]]]);
//# sourceMappingURL=main.50cbbf13.chunk.js.map