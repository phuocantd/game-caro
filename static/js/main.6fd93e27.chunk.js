(this["webpackJsonpgame-caro"]=this["webpackJsonpgame-caro"]||[]).push([[0],{13:function(e,t){e.exports={changeStatus:function(e){return{type:"CHANGE_STATUS",value:e}},changeXIsNext:function(){return{type:"CHANGE_X_IS_NEXT"}},changeIsWinner:function(e){return{type:"CHANGE_IS_WINNER",value:e}},changePreRowDark:function(e,t){return{type:"CHANGE_PRE_ROW_DARK",x:e,y:t}},resetStatus:function(){return{type:"RESET_STATUS"}},resetXIsNext:function(){return{type:"RESET_X_IS_NEXT"}},resetIsWinner:function(){return{type:"RESET_IS_WINNER"}},resetPreRowDark:function(){return{type:"RESET_PRE_ROW_DARK"}},changeIsAuthenticate:function(e){return{type:"CHANGE_IS_AUTHENTICATE",value:e}}}},18:function(e,t){e.exports={resetSquare:function(){return{type:"RESET_SQUARE"}},changeSquareValue:function(e,t,a){return{type:"CHANGE_SQUARE_VALUE",row:e,col:t,value:a}},changeSquareIsDark:function(e,t,a){return{type:"CHANGE_SQUARE_IS_DARK",row:e,col:t,value:a}},changeSquareIsWin:function(e,t,a){return{type:"CHANGE_SQUARE_IS_WIN",row:e,col:t,value:a}}}},184:function(e,t,a){e.exports=a(361)},193:function(e,t,a){},194:function(e,t,a){},246:function(e,t,a){},247:function(e,t,a){},248:function(e,t,a){},249:function(e,t,a){},250:function(e,t,a){},253:function(e,t,a){},263:function(e,t,a){},360:function(e,t,a){},361:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),u=a.n(c),l=a(21),o=(a(193),a(134)),s=a(33),i=a(46),m=(a(69),a(362)),f=a(366),p=(a(194),a(13)),h=m.a.Header,v=m.a.Content,E=m.a.Footer;var b=Object(l.b)((function(e){return{isAuthenticate:e.isAuthenticate}}))((function(e){var t=e.dispatch,a=e.isAuthenticate,n=e.children;return r.a.createElement(s.a,null,r.a.createElement(m.a,null,r.a.createElement(h,{style:{position:"fixed",zIndex:1,width:"100%"}},r.a.createElement(f.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["".concat(function(){switch(window.location.href.split("/").pop()){case"":return 1;case"login":return 2;case"register":return 3;case"game":return 4;default:return 1}}())],style:{lineHeight:"64px"}},r.a.createElement(f.a.Item,{key:"1"},r.a.createElement(s.b,{to:"/"},"Home")),r.a.createElement(f.a.Item,{key:"2"},r.a.createElement(s.b,{to:"/game-caro/login"},"Login")),r.a.createElement(f.a.Item,{key:"3"},r.a.createElement(s.b,{to:"/game-caro/register"},"Register")),r.a.createElement(f.a.Item,{key:"4"},r.a.createElement(s.b,{to:"/game-caro/game"},"Game")),a&&r.a.createElement("span",{style:{paddingLeft:10},onClick:function(){t(Object(p.changeIsAuthenticate)(!1)),localStorage.removeItem("jwtToken")}},"Sign out"))),r.a.createElement(v,{style:{marginTop:64},className:"center"},n),r.a.createElement(E,{style:{textAlign:"center"}},"Copyright by"," ",r.a.createElement("a",{href:"https://www.facebook.com/phuocantd"},"phuocantd"))))})),g=(a(246),a(247),a(52)),d=a(18),y=a(45),O=a(174),j=a(175),S=a(66),I=new Array(20).fill(null).map((function(){return new Array(20).fill(null).map((function(){return{value:null,isDark:!1,isWin:!1}}))})),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RESET_SQUARE":return new Array(20).fill(null).map((function(){return new Array(20).fill(null).map((function(){return{value:null,isDark:!1,isWin:!1}}))}));case"CHANGE_SQUARE_VALUE":return e[t.row][t.col].value=t.value,Object(S.a)(e);case"CHANGE_SQUARE_IS_DARK":return e[t.row][t.col].isDark=t.value,Object(S.a)(e);case"CHANGE_SQUARE_IS_WIN":return e[t.row][t.col].isWin=t.value,Object(S.a)(e);default:return e}},A=a(67),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ITEM":return[].concat(Object(S.a)(e),[{x:t.x,y:t.y,player:t.player}]);case"RESET_HISTORY":return[];case"REMOVE_ITEM":return e.filter((function(e,a){return a!==t.index}));default:return e}},w=a(61);function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(a,!0).forEach((function(t){Object(w.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var R={userId:"",username:""},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_USER_ID":return k({},e,{userId:t.userId});case"CHANGE_USERNAME":return k({},e,{username:t.username});case"CHANGE_PASSWORD":return k({},e,{password:t.password});default:return e}};function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function T(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(a,!0).forEach((function(t){Object(w.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_USER_ID":return T({},e,{userId:t.userId});case"CHANGE_FULLNAME":return T({},e,{fullname:t.fullname});case"CHANGE_DOB":return T({},e,{dob:t.dob});case"CHANGE_GENDER":return T({},e,{gender:t.gender});case"CHANGE_ADDRESS":return T({},e,{address:t.address});default:return e}};function W(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?W(a,!0).forEach((function(t){Object(w.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):W(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var H={fetching:!1,fetched:!1,data:{},error:null},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_DATA_PENDING":return q({},e,{fetching:!0});case"FETCH_DATA_REJECTED":return q({},e,{fetching:!1,error:t.payload});case"FETCH_DATA_FULFILLED":return q({},e,{fetching:!1,fetched:!0,data:t.payload});default:return e}},G=Object(y.c)({square:N,status:A.status,xIsNext:A.xIsNext,isWinner:A.isWinner,preRowDark:A.preRowDark,history:_,user:D,profile:P,dataQuery:U,isAuthenticate:A.isAuthenticate}),M=Object(y.a)(Object(j.a)(),O.a),X=Object(y.e)(G,Object(y.d)(M,window.devToolsExtension?window.devToolsExtension():function(e){return e})),L=function(e,t){var a=function(e,t){var a=X.getState().square,n=0,r=1,c=t+1;if(c<20&&null!==a[e][c].value&&a[e][c].value!==a[e][t].value)n+=1;else for(;c<20&&a[e][c].value===a[e][t].value;)if(r+=1,(c+=1)<20&&null!==a[e][c].value&&a[e][c].value!==a[e][t].value){n+=1;break}if((c=t-1)>=0&&null!==a[e][c].value&&a[e][c].value!==a[e][t].value)n+=1;else for(;c>=0&&a[e][c].value===a[e][t].value;)if(r+=1,(c-=1)>=0&&null!==a[e][c].value&&a[e][c].value!==a[e][t].value){n+=1;break}return n<2&&5===r?{player:a[e][t].value,type:0}:null}(e,t);return null!==a?a:null!==(a=function(e,t){var a=X.getState().square,n=0,r=1,c=e+1;if(c<20&&null!==a[c][t].value&&a[c][t].value!==a[e][t].value)n+=1;else for(;c<20&&a[c][t].value===a[e][t].value;)if(r+=1,(c+=1)<20&&null!==a[c][t].value&&a[c][t].value!==a[e][t].value){n+=1;break}if((c=e-1)>=0&&null!==a[c][t].value&&a[c][t].value!==a[e][t].value)n+=1;else for(;c>=0&&a[c][t].value===a[e][t].value;)if(r+=1,(c-=1)>=0&&null!==a[c][t].value&&a[c][t].value!==a[e][t].value){n+=1;break}return n<2&&5===r?{player:a[e][t].value,type:1}:null}(e,t))?a:null!==(a=function(e,t){var a=X.getState().square,n=0,r=1,c=e-1,u=t+1;if(c>=0&&u<20&&null!==a[c][u].value&&a[c][u].value!==a[e][t].value)n+=1;else for(;c>=0&&u<20&&a[c][u].value===a[e][t].value;)if(r+=1,u+=1,(c-=1)>=0&&u<20&&null!==a[c][u].value&&a[c][u].value!==a[e][t].value){n+=1;break}if(u=t-1,(c=e+1)<20&&u>=0&&null!==a[c][u].value&&a[c][u].value!==a[e][t].value)n+=1;else for(;c<20&&u>=0&&a[c][u].value===a[e][t].value;)if(r+=1,u-=1,(c+=1)<20&&u>=0&&a[c][u].value!==a[e][t].value&&null!==a[c][u].value){n+=1;break}return n<2&&5===r?{player:a[e][t].value,type:2}:null}(e,t))?a:null!==(a=function(e,t){var a=X.getState().square,n=0,r=1,c=e-1,u=t-1;if(c>=0&&u>=0&&null!==a[c][u].value&&a[c][u].value!==a[e][t].value)n+=1;else for(;c>=0&&u>=0&&a[c][u].value===a[e][t].value;)if(r+=1,u-=1,(c-=1)>=0&&u>=0&&null!==a[c][u].value&&a[c][u].value!==a[e][t].value){n+=1;break}if(u=t+1,(c=e+1)<20&&u<20&&null!==a[c][u].value&&a[c][u].value!==a[e][t].value)n+=1;else for(;c<20&&u<20&&a[c][u].value===a[e][t].value;)if(r+=1,u+=1,(c+=1)<20&&u<20&&null!==a[c][u].value&&a[c][u].value!==a[e][t].value){n+=1;break}return n<2&&5===r?{player:a[e][t].value,type:3}:null}(e,t))?a:null},F=X.dispatch,Q=function e(){var t=Math.floor(20*Math.random()),a=Math.floor(20*Math.random());return X.getState().square[t][a].value?e():{x:t,y:a}},V=function(e,t){var a=X.getState(),n=a.square,r=a.isWinner,c=a.xIsNext,u=a.preRowDark;if(!(n[e][t].value||r||c)){F(Object(g.addItem)(e,t,c?"O":"X")),F(Object(d.changeSquareIsDark)(u.x,u.y,!1)),F(Object(d.changeSquareIsDark)(e,t,!0)),F(Object(p.changePreRowDark)(e,t)),F(Object(d.changeSquareValue)(e,t,c?"X":"O")),F(Object(p.changeXIsNext)()),F(Object(p.changeStatus)("Next player: ".concat(c?"Computer":"You")));var l=L(e,t);l&&(F(Object(p.changeIsWinner)(!0)),F(Object(p.changeStatus)("Winner: ".concat(c?"You":"Computer"))),z(l,e,t))}},Y=X.dispatch,z=function(e,t,a){var n=X.getState().square,r=0,c=0,u=0;switch(Y(Object(d.changeSquareIsDark)(t,a,!1)),Y(Object(d.changeSquareIsWin)(t,a,!0)),e.type){case 0:for(r=a+1;r<20&&n[t][r].value===n[t][a].value;)Y(Object(d.changeSquareIsWin)(t,r,!0)),r+=1;for(r=a-1;r>=0&&n[t][r].value===n[t][a].value;)Y(Object(d.changeSquareIsWin)(t,r,!0)),r-=1;break;case 1:for(r=t+1;r<20&&n[r][a].value===n[t][a].value;)Y(Object(d.changeSquareIsWin)(r,a,!0)),r+=1;for(r=t-1;r>=0&&n[r][a].value===n[t][a].value;)Y(Object(d.changeSquareIsWin)(r,a,!0)),r-=1;break;case 2:for(c=t-1,u=a+1;c>=0&&u<20&&n[c][u].value===n[t][a].value;)Y(Object(d.changeSquareIsWin)(c,u,!0)),c-=1,u+=1;for(c=t+1,u=a-1;c<20&&u>=0&&n[c][u].value===n[t][a].value;)Y(Object(d.changeSquareIsWin)(c,u,!0)),c+=1,u-=1;break;case 3:for(c=t-1,u=a-1;c>=0&&u>=0&&n[c][u].value===n[t][a].value;)Y(Object(d.changeSquareIsWin)(c,u,!0)),c-=1,u-=1;for(c=t+1,u=a+1;c<20&&u<20&&n[c][u].value===n[t][a].value;)Y(Object(d.changeSquareIsWin)(c,u,!0)),c+=1,u+=1}},K=function(e,t){var a=X.getState(),n=a.square,r=a.isWinner,c=a.xIsNext,u=a.preRowDark;if(!n[e][t].value&&!r&&c){Y(Object(g.addItem)(e,t,c?"O":"X")),Y(Object(d.changeSquareIsDark)(u.x,u.y,!1)),Y(Object(d.changeSquareIsDark)(e,t,!0)),Y(Object(p.changePreRowDark)(e,t)),Y(Object(d.changeSquareValue)(e,t,c?"X":"O")),Y(Object(p.changeXIsNext)()),Y(Object(p.changeStatus)("Next player: ".concat(c?"Computer":"You")));var l=L(e,t);l&&(Y(Object(p.changeIsWinner)(!0)),Y(Object(p.changeStatus)("Winner: ".concat(c?"You":"Computer"))),z(l,e,t)),setTimeout((function(){var e=Q();V(e.x,e.y)}),1e3)}};var B=Object(l.b)((function(e){return{square:e.square,xIsNext:e.xIsNext,isWinner:e.isWinner,preRowDark:e.preRowDark}}))((function(e){var t=e.row,a=e.col,n=e.square;return r.a.createElement("td",{onClick:function(){K(t,a)},className:"tbl-cell ".concat(n[t][a].isDark?"square-click":""," ").concat(n[t][a].isWin?"square-win":"")},n[t][a].value)}));a(248);var J=Object(l.b)((function(e){return{square:e.square}}))((function(e){var t=e.square;return r.a.createElement("table",{className:"tbl-board"},r.a.createElement("tbody",null,r.a.createElement("tr",{key:String(-1)},Array(21).fill(null).map((function(e,t){return r.a.createElement("td",{className:"tbl-cell",key:String(t+1)},t>0?String.fromCharCode(t+64):"")}))),t.map((function(e,t){return r.a.createElement("tr",{key:String(t)},r.a.createElement("td",{className:"tbl-cell",key:String(-1)},t+1),e.map((function(e,a){return r.a.createElement(B,{key:String(20*t+a),row:t,col:a})})))}))))}));a(249);function Z(e){var t=e.name,a=e.handleClick;return r.a.createElement("button",{type:"button",className:"btn-click",onClick:function(){a()}},t)}a(250);var $=a(64),ee=a.n($),te=a(98),ae=a(99),ne=a(100),re=a(105),ce=a(101),ue=a(106),le=a(364),oe=a(363),se=a(140),ie=a(176),me=a.n(ie),fe=(a(253),X.dispatch),pe=function(){fe(Object(p.resetStatus)()),fe(Object(p.resetXIsNext)()),fe(Object(p.resetIsWinner)()),fe(Object(p.resetPreRowDark)()),fe(Object(g.resetHistory)()),fe(Object(d.resetSquare)())},he=function(){var e=X.getState(),t=e.history,a=e.isWinner,n=t.length;0===n||a||(fe(Object(p.changeXIsNext)()),fe(Object(d.changeSquareValue)(t[n-1].x,t[n-1].y,null)),fe(Object(d.changeSquareIsDark)(t[n-1].x,t[n-1].y,!1)),n-2>=0?(fe(Object(d.changeSquareIsDark)(t[n-2].x,t[n-2].y,!0)),fe(Object(p.changePreRowDark)(t[n-2].x,t[n-2].y)),fe(Object(p.changeStatus)("Next player: ".concat("X"===t[n-2].player?"You":"Computer")))):fe(Object(p.changeStatus)("Next player: You")),fe(Object(g.removeItem)(n-1)))},ve=function(e){function t(e){var a;return Object(ae.a)(this,t),(a=Object(re.a)(this,Object(ce.a)(t).call(this,e))).handleLoadMore=function(){},a.setCurrent=function(){var e=Object(te.a)(ee.a.mark((function e(t){var n,r,c,u,l,o;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.props,r=n.history,c=n.isWinner,u=n.xIsNext,0!==(l=r.length)&&!c){e.next=4;break}return e.abrupt("return");case 4:o=t+1;case 5:if(!(o<l)){e.next=11;break}return e.next=8,he();case 8:o+=1,e.next=5;break;case 11:u&&setTimeout((function(){var e=Q();V(e.x,e.y)}),1e3);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={loading:!1,hasMore:!0},a}return Object(ue.a)(t,e),Object(ne.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.history,n=t.mode,c=this.state,u=c.loading,l=c.hasMore;return r.a.createElement("div",{className:"demo-infinite-container"},r.a.createElement(me.a,{initialLoad:!1,pageStart:0,loadMore:function(){return e.handleLoadMore()},hasMore:!u&&l,useWindow:!1},r.a.createElement(le.a,{dataSource:a,renderItem:function(t,a){return r.a.createElement(le.a.Item,{key:20*t.x+t.y},r.a.createElement(le.a.Item.Meta,{avatar:r.a.createElement(oe.a,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),title:r.a.createElement("div",null,1===n&&"O"===t.player?"Player: you":"",1===n&&"X"===t.player?"Player: computer":""),description:"V\u1ecb tr\xed (".concat(t.x+1,", ").concat(String.fromCharCode(t.y+65),")")}),r.a.createElement("div",null,r.a.createElement(se.a,{type:"primary",onClick:function(){return e.setCurrent(a)}},"jump at")))}})))}}]),t}(r.a.Component),Ee=Object(l.b)((function(e){return{history:e.history,isWinner:e.isWinner,xIsNext:e.xIsNext}}))(ve);var be=Object(l.b)((function(e){return{history:e.history,isWinner:e.isWinner,xIsNext:e.xIsNext}}))((function(e){var t=e.xIsNext;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,{name:"Reset",handleClick:pe}),r.a.createElement(Z,{name:"Undo",handleClick:function(){he(),t&&setTimeout((function(){var e=Q();V(e.x,e.y)}),1e3)}}),r.a.createElement(Ee,{mode:1}))})),ge=m.a.Header,de=m.a.Sider,ye=m.a.Content;var Oe=Object(l.b)((function(e){return{status:e.status}}))((function(e){var t=e.status;return r.a.createElement("div",null,r.a.createElement(m.a,null,r.a.createElement(ge,{style:{backgroundColor:"rgb(6, 0, 95)"}},r.a.createElement("div",{className:"status"},t)),r.a.createElement(m.a,null,r.a.createElement(ye,{className:"light"},r.a.createElement("center",null,r.a.createElement(J,null))),r.a.createElement(de,{width:400,className:"light"},r.a.createElement("center",null,r.a.createElement(be,null))))))}));function je(){return r.a.createElement(Oe,null)}var Se=a(104),Ie=a(365),Ne=a(367),Ae=a(368),_e=a(9),we=a(369),xe=(a(263),function(e){function t(){var e,a;Object(ae.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(re.a)(this,(e=Object(ce.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){var t=a.props,n=t.form,r=t.handleSubmitForm;e.preventDefault(),n.validateFields((function(e,t){e||r(t)}))},a}return Object(ue.a)(t,e),Object(ne.a)(t,[{key:"render",value:function(){var e=this.props,t=e.form.getFieldDecorator,a=e.name,n=e.urlImg,c=e.isDisplay,u=e.status;return r.a.createElement(Ie.a,{className:"card",style:{width:300},cover:r.a.createElement("img",{alt:"example",src:n})},r.a.createElement(Ne.a,{onSubmit:this.handleSubmit,className:"login-form"},r.a.createElement(Ne.a.Item,null,t("username",{rules:[{required:!0,message:"Username can't be blank!"},{message:"Username is invalid!",pattern:new RegExp(/^[a-zA-Z]([._](?![._])|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/)}]})(r.a.createElement(Ae.a,{prefix:r.a.createElement(_e.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),r.a.createElement(Ne.a.Item,null,t("password",{rules:[{required:!0,message:"Password can't be blanks"},{message:"Make sure at least 8 characters",pattern:new RegExp("^.{8,}$")}]})(r.a.createElement(Ae.a,{prefix:r.a.createElement(_e.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),r.a.createElement(Ne.a.Item,null,r.a.createElement(se.a,{type:"primary",htmlType:"submit",className:"login-form-button"},a))),c&&r.a.createElement(we.a,{type:"error",message:u,banner:!0}))}}]),t}(r.a.Component)),ke=Ne.a.create({name:"normal_login"})(xe),Re=a(53),De=a(65);var Ce=Object(l.b)((function(e){return{data:e.dataQuery,isAuthenticate:e.isAuthenticate}}))((function(e){var t=e.dispatch,a=Object(n.useState)(!1),c=Object(Se.a)(a,2),u=c[0],l=c[1],o=Object(i.g)(),s=(Object(i.h)().state||{from:{pathname:"/"}}).from;return r.a.createElement(ke,{name:"Login",urlImg:"https://cdn.discordapp.com/attachments/639498955356373003/639499203122298937/Login-Cadenas.png",handleSubmitForm:function(e){Object(Re.loginAPI)(e.username,e.password).then((function(e){l(!1);var a=e.data.token;localStorage.setItem("jwtToken",a),t(Object(p.changeIsAuthenticate)(!0)),Object(Re.getMeAPI)(a).then((function(e){var a=e.data,n=a._id,r=a.username;t(Object(De.changeUserId)(n)),t(Object(De.changeUserName)(r))})).catch((function(){})),setTimeout((function(){return o.replace(s)}),100)})).catch((function(){l(!0),t(Object(p.changeIsAuthenticate)(!1)),setTimeout((function(){return o.push("/")}),100)}))},isDisplay:u,status:"Login failed"})}));function Te(){var e=Object(n.useState)(!1),t=Object(Se.a)(e,2),a=t[0],c=t[1],u=function(){var e=Object(te.a)(ee.a.mark((function e(t){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(Re.registerAPI)(t.username,t.password).then((function(e){c(!1)})).catch((function(e){c(!0)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(ke,{name:"Register",urlImg:"https://cdn.discordapp.com/attachments/639498955356373003/639499041545388051/register_button_952726524.png",handleSubmitForm:u,isDisplay:a,status:"Username is exist"})}var Pe=Object(l.b)((function(e){return{user:e.user}}))((function(e){var t=e.user;return r.a.createElement("h1",null,"Hello ".concat(t.username))}));a(360);var We=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"page_404"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 "},r.a.createElement("div",{className:"col-sm-10 col-sm-offset-1  text-center"},r.a.createElement("div",{className:"four_zero_four_bg"},r.a.createElement("h1",{className:"text-center "},"404")),r.a.createElement("div",{className:"contant_box_404"},r.a.createElement("h3",{className:"h2"},"Look like you sre lost"),r.a.createElement("p",null,"the page you are looking for not avaible!"),r.a.createElement(s.b,{to:"/",className:"link_404"},"Go to Home"))))))))};function qe(){return r.a.createElement(We,null)}var He=X.dispatch;var Ue=function(){return Object(n.useEffect)((function(){var e=localStorage.getItem("jwtToken");Object(Re.getMeAPI)(e).then((function(e){var t=e.data,a=t._id,n=t.username;He(Object(De.changeUserId)(a)),He(Object(De.changeUserName)(n)),He(Object(p.changeIsAuthenticate)(!0))})).catch((function(){}))})),r.a.createElement(s.a,null,r.a.createElement(b,null,r.a.createElement(i.d,null,r.a.createElement(Ge,{exact:!0,path:"/"},r.a.createElement(Pe,null)),r.a.createElement(Me,{exact:!0,path:"/login"},r.a.createElement(Ce,null)),r.a.createElement(Me,{exact:!0,path:"/register"},r.a.createElement(Te,null)),r.a.createElement(Ge,{exact:!0,path:"/game"},r.a.createElement(je,null)),r.a.createElement(i.b,{component:qe}))))};function Ge(e){var t=e.children,a=Object(o.a)(e,["children"]),n=X.getState().isAuthenticate;return r.a.createElement(i.b,Object.assign({},a,{render:function(e){var a=e.location;return n?t:r.a.createElement(i.a,{to:{pathname:"/login",state:{from:a}}})}}))}function Me(e){var t=e.children,a=Object(o.a)(e,["children"]),n=X.getState().isAuthenticate,c=(Object(i.h)().state||{from:{pathname:"/"}}).from;return r.a.createElement(i.b,Object.assign({},a,{render:function(e){var a=e.location;return n?r.a.createElement(i.a,{to:{pathname:c.pathname,state:{from:a}}}):t}}))}u.a.render(r.a.createElement(l.a,{store:X},r.a.createElement(Ue,null)),document.getElementById("root"))},52:function(e,t){e.exports={addItem:function(e,t,a){return{type:"ADD_ITEM",x:e,y:t,player:a}},resetHistory:function(){return{type:"RESET_HISTORY"}},removeItem:function(e){return{type:"REMOVE_ITEM",index:e}}}},53:function(e,t,a){var n=a(343);e.exports={loginAPI:function(e,t){return n.post("https://rest-api-1612009.herokuapp.com/user/login",{username:e,password:t})},registerAPI:function(e,t){return n.post("https://rest-api-1612009.herokuapp.com/user/register",{username:e,password:t})},getMeAPI:function(e){return n.get("https://rest-api-1612009.herokuapp.com/me",{headers:{Authorization:"Bearer ".concat(e)}})}}},65:function(e,t){e.exports={changeUserId:function(e){return{type:"CHANGE_USER_ID",userId:e}},changeUserName:function(e){return{type:"CHANGE_USERNAME",username:e}},changePassword:function(e){return{type:"CHANGE_PASSWORD",password:e}}}},67:function(e,t){e.exports={status:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Next player: You",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_STATUS":return t.value;case"RESET_STATUS":return"Next player: X";default:return e}},xIsNext:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_X_IS_NEXT":return!e;case"RESET_X_IS_NEXT":return!0;default:return e}},isWinner:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_IS_WINNER":return t.value;case"RESET_IS_WINNER":return!1;default:return e}},preRowDark:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{x:0,y:0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_PRE_ROW_DARK":return{x:t.x,y:t.y};case"RESET_PRE_ROW_DARK":return{x:0,y:0};default:return e}},isAuthenticate:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_IS_AUTHENTICATE":return t.value;default:return e}}}}},[[184,1,2]]]);
//# sourceMappingURL=main.6fd93e27.chunk.js.map