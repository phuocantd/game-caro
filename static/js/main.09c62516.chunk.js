(this["webpackJsonpgame-caro"]=this["webpackJsonpgame-caro"]||[]).push([[0],{133:function(e,a,l){},134:function(e,a,l){"use strict";l.r(a);var t=l(0),n=l.n(t),r=l(27),u=l.n(r),i=(l(82),l(73)),s=l(17),c=l(21),v=l(64),o=l(65),h=l(74),k=l(66),f=l(75),p=l(136);l(87);function y(e){var a=e.row,l=e.col,t=e.handleClick,r=e.value,u=e.curClick,i=e.isWin;return n.a.createElement("td",{onClick:function(){t(a,l)},className:"tbl-cell ".concat(u?"square-click":""," ").concat(i?"square-win":"")},r)}function m(e){var a=e.size,l=e.square,t=e.handleClick;return n.a.createElement("table",{className:"tbl-board"},n.a.createElement("tbody",null,n.a.createElement("tr",{key:String(-1)},Array(a+1).fill(null).map((function(e,a){return n.a.createElement(y,{key:String(a+1),value:a>0?String.fromCharCode(a+64):"",handleClick:function(){}})}))),l.map((function(e,r){return n.a.createElement("tr",{key:String(r)},n.a.createElement(y,{key:-1,value:r+1,handleClick:function(){}}),e.map((function(e,u){return n.a.createElement(y,{row:r,col:u,value:l[r][u].value,handleClick:t,key:String(r*a+u),curClick:l[r][u].isDark,isWin:l[r][u].isWin})})))}))))}function b(e){var a=e.name,l=e.handleClick;return n.a.createElement("button",{type:"button",className:"btn-click",onClick:function(){l()}},a)}function d(e){var a=e.resetGame,l=e.undoGame;return n.a.createElement(n.a.Fragment,null,n.a.createElement(b,{name:"Reset",handleClick:function(){a()}}),n.a.createElement(b,{name:"Undo",handleClick:function(){l()}}))}var x=p.a.Header,E=p.a.Footer,C=p.a.Sider,W=p.a.Content,w=function(e){function a(e){var l;Object(v.a)(this,a);var t=(l=Object(h.a)(this,Object(k.a)(a).call(this,e))).props.size;return l.state={square:new Array(t).fill(null).map((function(){return new Array(t).fill(null).map((function(){return{value:null,isDark:!1,isWin:!1}}))})),xIsNext:!0,status:"Next player: X",isWinner:!1,preRowDark:{x:0,y:0},historys:[]},l}return Object(f.a)(a,e),Object(o.a)(a,[{key:"checkRow",value:function(e,a){for(var l=this.props.size,t=this.state.square,n=0,r=1,u=a+1;u<l&&t[e][u].value===t[e][a].value;){if(r+=1,null!==t[e][u].value&&t[e][u].value!==t[e][a].value){n+=1;break}u+=1}for(u=a-1;u>=0&&t[e][u].value===t[e][a].value;){if(r+=1,null!==t[e][u].value&&t[e][u].value!==t[e][a].value){n+=1;break}u-=1}return n<2&&5===r?{player:t[e][a].value,type:0}:null}},{key:"checkCol",value:function(e,a){for(var l=this.props.size,t=this.state.square,n=0,r=1,u=e+1;u<l&&t[u][a].value===t[e][a].value;){if(r+=1,u+1<l&&null!==t[u][a].value&&t[u][a].value!==t[e][a].value){n+=1;break}u+=1}for(u=e-1;u>=0&&t[u][a].value===t[e][a].value;){if(r+=1,u>=1&&null!==t[u][a].value&&t[u][a].value!==t[e][a].value){n+=1;break}u-=1}return n<2&&5===r?{player:t[e][a].value,type:1}:null}},{key:"checkSlash",value:function(e,a){var l=this.props.size,t=this.state.square,n=0,r=1,u=e-1,i=a+1;for(u>=0&&i<l&&null!==t[u][i].value&&t[u][i].value!==t[e][a].value&&(n+=1);u>=0&&i<l&&t[u][i].value===t[e][a].value;)if(r+=1,i+=1,(u-=1)>=0&&i<l&&null!==t[u][i].value&&t[u][i].value!==t[e][a].value){n+=1;break}for(i=a-1,(u=e+1)<l&&i>=0&&null!==t[u][i].value&&t[u][i].value!==t[e][a].value&&(n+=1);u<l&&i>=0&&t[u][i].value===t[e][a].value;)if(r+=1,i-=1,(u+=1)<l&&i>=0&&t[u][i].value!==t[e][a].value&&null!==t[u][i].value){n+=1;break}return n<2&&5===r?{player:t[e][a].value,type:2}:null}},{key:"checkBackSlash",value:function(e,a){var l=this.props.size,t=this.state.square,n=0,r=1,u=e-1,i=a-1;for(u>=0&&i>=0&&null!==t[u][i].value&&t[u][i].value!==t[e][a].value&&(n+=1);u>=0&&i>=0&&t[u][i].value===t[e][a].value;)if(r+=1,i-=1,(u-=1)>=0&&i>=0&&null!==t[u][i].value&&t[u][i].value!==t[e][a].value){n+=1;break}for(i=a+1,(u=e+1)<l&&i<l&&null!==t[u][i].value&&t[u][i].value!==t[e][a].value&&(n+=1);u<l&&i<l&&t[u][i].value===t[e][a].value;)if(r+=1,i+=1,(u+=1)<l&&i<l&&null!==t[u][i].value&&t[u][i].value!==t[e][a].value){n+=1;break}return n<2&&5===r?{player:t[e][a].value,type:3}:null}},{key:"checkWinner",value:function(e,a){var l=this.checkRow(e,a);return null!==l?l:null!==(l=this.checkCol(e,a))?l:null!==(l=this.checkSlash(e,a))?l:null!==(l=this.checkBackSlash(e,a))?l:null}},{key:"handleClick",value:function(e,a){var l=this.props.size,t=this.state,n=t.square,r=t.xIsNext,u=t.isWinner,i=t.preRowDark,s=t.historys,v=0,o=0,h=0,k=n.slice(),f=s.slice();if(!k[e][a].value&&!u){f.push({x:e,y:a,player:r?"X":"O"}),k[i.x][i.y].isDark=!1,k[e][a].isDark=!0,k[e][a].value=r?"X":"O";var p=this.checkWinner(e,a);if(p){switch(k[e][a].isDark=!1,k[e][a].isWin=!0,p.type){case 0:for(v=a+1;v<l&&k[e][v].value===k[e][a].value;)k[e][v].isWin=!0,v+=1;for(v=a-1;v>=0&&k[e][v].value===k[e][a].value;)k[e][v].isWin=!0,v-=1;break;case 1:for(v=e+1;v<l&&k[v][a].value===k[e][a].value;)k[v][a].isWin=!0,v+=1;for(v=e-1;v>=0&&k[v][a].value===k[e][a].value;)k[v][a].isWin=!0,v-=1;break;case 2:for(o=e-1,h=a+1;o>=0&&h<l&&k[o][h].value===k[e][a].value;)k[o][h].isWin=!0,o-=1,h+=1;for(o=e+1,h=a-1;o<l&&h>=0&&k[o][h].value===k[e][a].value;)k[o][h].isWin=!0,o+=1,h-=1;break;case 3:for(o=e-1,h=a-1;o>=0&&h>=0&&k[o][h].value===k[e][a].value;)k[o][h].isWin=!0,o-=1,h-=1;for(o=e+1,h=a+1;o<l&&h<l&&k[o][h].value===k[e][a].value;)k[o][h].isWin=!0,o+=1,h+=1}this.setState({status:"Winner: ".concat(p.player),isWinner:!0})}else this.setState({status:"Next player: ".concat(r?"O":"X"),preRowDark:{x:e,y:a}});this.setState({square:Object(c.a)(k),xIsNext:!r,historys:Object(c.a)(f)})}}},{key:"undoGame",value:function(){var e=this.state,a=e.historys,l=e.square,t=e.xIsNext,n=a.slice(),r=l.slice();if(0!==a.length){var u=n.pop(),i=0===n.length?{x:0,y:0}:{x:n[n.length-1].x,y:n[n.length-1].y};r[u.x][u.y].value=null,r[u.x][u.y].isDark=!1,n.length>0&&(r[i.x][i.y].isDark=!0),this.setState({historys:Object(c.a)(n),square:Object(c.a)(r),status:"Next player: ".concat(t?"O":"X"),preRowDark:i,xIsNext:!t})}}},{key:"resetGame",value:function(){var e=this.props.size;this.setState({square:new Array(e).fill(null).map((function(){return new Array(e).fill(null).map((function(){return{value:null,isDark:!1,isWin:!1}}))})),xIsNext:!0,status:"Next player: X",isWinner:!1,preRowDark:{x:0,y:0},historys:[]})}},{key:"render",value:function(){var e=this.props.size,a=this.state,l=a.status,t=a.square;return n.a.createElement("div",null,n.a.createElement(p.a,null,n.a.createElement(x,{style:{background:"red"}},n.a.createElement("div",{className:"status"},l)),n.a.createElement(p.a,null,n.a.createElement(W,null,n.a.createElement(m,{size:e,square:t,handleClick:this.handleClick.bind(this)})),n.a.createElement(C,{width:400},n.a.createElement("center",null,n.a.createElement(d,{resetGame:this.resetGame.bind(this),undoGame:this.undoGame.bind(this)})))),n.a.createElement(E,null,"Coppyright by phuocantd")))}}]),a}(n.a.Component),g=(l(133),Object(s.b)({})),q=Object(s.c)(g);var O=function(){return n.a.createElement(i.a,{store:q},n.a.createElement(w,{size:20}))};u.a.render(n.a.createElement(O,null),document.getElementById("root"))},77:function(e,a,l){e.exports=l(134)},82:function(e,a,l){}},[[77,1,2]]]);
//# sourceMappingURL=main.09c62516.chunk.js.map