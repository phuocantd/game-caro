(this["webpackJsonpgame-caro"]=this["webpackJsonpgame-caro"]||[]).push([[0],{1:function(e,t){e.exports={resetSquare:function(){return{type:"RESET_SQUARE"}},changeSquareValue:function(e,t,a){return{type:"CHANGE_SQUARE_VALUE",row:e,col:t,value:a}},changeSquareIsDark:function(e,t,a){return{type:"CHANGE_SQUARE_IS_DARK",row:e,col:t,value:a}},changeSquareIsWin:function(e,t,a){return{type:"CHANGE_SQUARE_IS_WIN",row:e,col:t,value:a}}}},132:function(e,t,a){},133:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),u=a(32),l=a.n(u),c=a(14),i=a(3),o=(a(85),a(135)),s=(a(86),a(25)),v=a(1),E=a(2);var f=Object(i.b)((function(e){return{square:e.square,xIsNext:e.xIsNext,isWinner:e.isWinner,preRowDark:e.preRowDark}}))((function(e){var t=e.row,a=e.col,n=e.square,u=e.xIsNext,l=e.isWinner,c=e.preRowDark,i=e.dispatch,o=function(){var e=function(){for(var e=0,r=1,u=a+1;u<20&&n[t][u].value===n[t][a].value;){if(r+=1,null!==n[t][u].value&&n[t][u].value!==n[t][a].value){e+=1;break}u+=1}for(u=a-1;u>=0&&n[t][u].value===n[t][a].value;){if(r+=1,null!==n[t][u].value&&n[t][u].value!==n[t][a].value){e+=1;break}u-=1}return e<2&&5===r?{player:n[t][a].value,type:0}:null}();return null!==e?e:null!==(e=function(){for(var e=0,r=1,u=t+1;u<20&&n[u][a].value===n[t][a].value;){if(r+=1,u+1<20&&null!==n[u][a].value&&n[u][a].value!==n[t][a].value){e+=1;break}u+=1}for(u=t-1;u>=0&&n[u][a].value===n[t][a].value;){if(r+=1,u>=1&&null!==n[u][a].value&&n[u][a].value!==n[t][a].value){e+=1;break}u-=1}return e<2&&5===r?{player:n[t][a].value,type:1}:null}())?e:null!==(e=function(){var e=0,r=1,u=t-1,l=a+1;for(u>=0&&l<20&&null!==n[u][l].value&&n[u][l].value!==n[t][a].value&&(e+=1);u>=0&&l<20&&n[u][l].value===n[t][a].value;)if(r+=1,l+=1,(u-=1)>=0&&l<20&&null!==n[u][l].value&&n[u][l].value!==n[t][a].value){e+=1;break}for(l=a-1,(u=t+1)<20&&l>=0&&null!==n[u][l].value&&n[u][l].value!==n[t][a].value&&(e+=1);u<20&&l>=0&&n[u][l].value===n[t][a].value;)if(r+=1,l-=1,(u+=1)<20&&l>=0&&n[u][l].value!==n[t][a].value&&null!==n[u][l].value){e+=1;break}return e<2&&5===r?{player:n[t][a].value,type:2}:null}())?e:null!==(e=function(){var e=0,r=1,u=t-1,l=a-1;for(u>=0&&l>=0&&null!==n[u][l].value&&n[u][l].value!==n[t][a].value&&(e+=1);u>=0&&l>=0&&n[u][l].value===n[t][a].value;)if(r+=1,l-=1,(u-=1)>=0&&l>=0&&null!==n[u][l].value&&n[u][l].value!==n[t][a].value){e+=1;break}for(l=a+1,(u=t+1)<20&&l<20&&null!==n[u][l].value&&n[u][l].value!==n[t][a].value&&(e+=1);u<20&&l<20&&n[u][l].value===n[t][a].value;)if(r+=1,l+=1,(u+=1)<20&&l<20&&null!==n[u][l].value&&n[u][l].value!==n[t][a].value){e+=1;break}return e<2&&5===r?{player:n[t][a].value,type:3}:null}())?e:null};return r.a.createElement("td",{onClick:function(){if(!n[t][a].value&&!l){i(Object(s.addItem)(t,a,u?"O":"X")),i(Object(v.changeSquareIsDark)(c.x,c.y,!1)),i(Object(v.changeSquareIsDark)(t,a,!0)),i(Object(E.changePreRowDark)(t,a)),i(Object(v.changeSquareValue)(t,a,u?"X":"O")),i(Object(E.changeXIsNext)(!u)),i(Object(E.changeStatus)("Next player: ".concat(u?"O":"X")));var e=o();e&&(i(Object(E.changeIsWinner)(!0)),i(Object(E.changeStatus)("Winner: ".concat(u?"X":"O"))),function(e){var r=0,u=0,l=0;switch(i(Object(v.changeSquareIsDark)(t,a,!1)),i(Object(v.changeSquareIsWin)(t,a,!0)),e.type){case 0:for(r=a+1;r<20&&n[t][r].value===n[t][a].value;)i(Object(v.changeSquareIsWin)(t,r,!0)),r+=1;for(r=a-1;r>=0&&n[t][r].value===n[t][a].value;)i(Object(v.changeSquareIsWin)(t,r,!0)),r-=1;break;case 1:for(r=t+1;r<20&&n[r][a].value===n[t][a].value;)i(Object(v.changeSquareIsWin)(r,a,!0)),r+=1;for(r=t-1;r>=0&&n[r][a].value===n[t][a].value;)i(Object(v.changeSquareIsWin)(r,a,!0)),r-=1;break;case 2:for(u=t-1,l=a+1;u>=0&&l<20&&n[u][l].value===n[t][a].value;)i(Object(v.changeSquareIsWin)(u,l,!0)),u-=1,l+=1;for(u=t+1,l=a-1;u<20&&l>=0&&n[u][l].value===n[t][a].value;)i(Object(v.changeSquareIsWin)(u,l,!0)),u+=1,l-=1;break;case 3:for(u=t-1,l=a-1;u>=0&&l>=0&&n[u][l].value===n[t][a].value;)i(Object(v.changeSquareIsWin)(u,l,!0)),u-=1,l-=1;for(u=t+1,l=a+1;u<20&&l<20&&n[u][l].value===n[t][a].value;)i(Object(v.changeSquareIsWin)(u,l,!0)),u+=1,l+=1}}(e))}},className:"tbl-cell ".concat(n[t][a].isDark?"square-click":""," ").concat(n[t][a].isWin?"square-win":"")},n[t][a].value)}));var S=Object(i.b)((function(e){return{square:e.square}}))((function(e){var t=e.square;return r.a.createElement("table",{className:"tbl-board"},r.a.createElement("tbody",null,r.a.createElement("tr",{key:String(-1)},Array(21).fill(null).map((function(e,t){return r.a.createElement("td",{className:"tbl-cell",key:String(t+1)},t>0?String.fromCharCode(t+64):"")}))),t.map((function(e,t){return r.a.createElement("tr",{key:String(t)},r.a.createElement("td",{className:"tbl-cell",key:String(-1)},t+1),e.map((function(e,a){return r.a.createElement(f,{key:String(20*t+a),row:t,col:a})})))}))))}));function y(e){var t=e.name,a=e.handleClick;return r.a.createElement("button",{type:"button",className:"btn-click",onClick:function(){a()}},t)}var b=Object(i.b)((function(e){return{history:e.history,isWinner:e.isWinner}}))((function(e){var t=e.dispatch,a=e.history,n=e.isWinner;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{name:"Reset",handleClick:function(){t(Object(E.resetStatus)()),t(Object(E.resetXIsNext)()),t(Object(E.resetIsWinner)()),t(Object(E.resetPreRowDark)()),t(Object(s.resetHistory)()),t(Object(v.resetSquare)())}}),r.a.createElement(y,{name:"Undo",handleClick:function(){var e=a.length;0===e||n||(t(Object(v.changeSquareValue)(a[e-1].x,a[e-1].y,null)),t(Object(v.changeSquareIsDark)(a[e-1].x,a[e-1].y,!1)),e-2>=0?(t(Object(v.changeSquareIsDark)(a[e-2].x,a[e-2].y,!0)),t(Object(E.changePreRowDark)(a[e-2].x,a[e-2].y)),t(Object(E.changeStatus)("Next player: ".concat(a[e-2].player)))):t(Object(E.changeStatus)("Next player: X")),t(Object(s.removeItem)(e-1)))}}))})),h=o.a.Header,p=o.a.Footer,_=o.a.Sider,I=o.a.Content;var g=Object(i.b)((function(e){return{status:e.status}}))((function(e){var t=e.status;return r.a.createElement("div",null,r.a.createElement(o.a,null,r.a.createElement(h,null,r.a.createElement("div",{className:"status"},t)),r.a.createElement(o.a,null,r.a.createElement(I,{className:"light"},r.a.createElement("center",null,r.a.createElement(S,null))),r.a.createElement(_,{width:400,className:"light"},r.a.createElement("center",null,r.a.createElement(b,null)))),r.a.createElement(p,null,"Coppyright by phuocantd")))}));a(132);var m=function(){return r.a.createElement(g,{size:20})},O=a(22),R=new Array(20).fill(null).map((function(){return new Array(20).fill(null).map((function(){return{value:null,isDark:!1,isWin:!1}}))})),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RESET_SQUARE":return new Array(20).fill(null).map((function(){return new Array(20).fill(null).map((function(){return{value:null,isDark:!1,isWin:!1}}))}));case"CHANGE_SQUARE_VALUE":return e[t.row][t.col].value=t.value,Object(O.a)(e);case"CHANGE_SQUARE_IS_DARK":return e[t.row][t.col].isDark=t.value,Object(O.a)(e);case"CHANGE_SQUARE_IS_WIN":return e[t.row][t.col].isWin=t.value,Object(O.a)(e);default:return e}},d=a(26),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ITEM":return[].concat(Object(O.a)(e),[{x:t.x,y:t.y,player:t.player}]);case"RESET_HISTORY":return[];case"REMOVE_ITEM":return e.filter((function(e,a){return a!==t.index}));default:return e}},j=Object(c.b)({square:N,status:d.status,xIsNext:d.xIsNext,isWinner:d.isWinner,preRowDark:d.preRowDark,history:k}),x=Object(c.d)(j,Object(c.c)(window.devToolsExtension?window.devToolsExtension():function(e){return e}));l.a.render(r.a.createElement(i.a,{store:x},r.a.createElement(m,null)),document.getElementById("root"))},2:function(e,t){e.exports={changeStatus:function(e){return{type:"CHANGE_STATUS",value:e}},changeXIsNext:function(e){return{type:"CHANGE_X_IS_NEXT",value:e}},changeIsWinner:function(e){return{type:"CHANGE_IS_WINNER",value:e}},changePreRowDark:function(e,t){return{type:"CHANGE_PRE_ROW_DARK",x:e,y:t}},resetStatus:function(){return{type:"RESET_STATUS"}},resetXIsNext:function(){return{type:"RESET_X_IS_NEXT"}},resetIsWinner:function(){return{type:"RESET_IS_WINNER"}},resetPreRowDark:function(){return{type:"RESET_PRE_ROW_DARK"}}}},25:function(e,t){e.exports={addItem:function(e,t,a){return{type:"ADD_ITEM",x:e,y:t,player:a}},resetHistory:function(){return{type:"RESET_HISTORY"}},removeItem:function(e){return{type:"REMOVE_ITEM",index:e}}}},26:function(e,t){e.exports={status:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Next player: X",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_STATUS":return t.value;case"RESET_STATUS":return"Next player: X";default:return e}},xIsNext:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_X_IS_NEXT":return t.value;case"RESET_X_IS_NEXT":return!0;default:return e}},isWinner:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_IS_WINNER":return t.value;case"RESET_IS_WINNER":return!1;default:return e}},preRowDark:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{x:0,y:0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_PRE_ROW_DARK":return{x:t.x,y:t.y};case"RESET_PRE_ROW_DARK":return{x:0,y:0};default:return e}}}},76:function(e,t,a){e.exports=a(133)},85:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.844e37f4.chunk.js.map