(this["webpackJsonpgame-caro"]=this["webpackJsonpgame-caro"]||[]).push([[0],{18:function(e,t,a){e.exports=a(30)},23:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),n=a(6),i=a.n(n),l=(a(23),a(15)),c=a(4),u=a(5),o=a(12),h=a(13),k=a(17),f=a(14),y=a(1),p=a(16);function b(e){var t=e.onClick,a=e.value,r=e.isWin,n=e.curClick;return s.a.createElement("button",{type:"button",className:"square ".concat(n?"square-click":""," + ").concat(r?"square-win":""),onClick:t},a)}var m=function(e){function t(e){var a;Object(o.a)(this,t),(a=Object(k.a)(this,Object(f.a)(t).call(this,e))).reverseArray=function(){var e=a.state,t=e.historys,r=e.isForward,s=t.slice();t.reverse(),a.setState({historys:Object(u.a)(s),isForward:!r}),r?a.clickList(0):a.clickList(s.length-1)};var r=a.props.size;return a.state={square:Array(r).fill(null).map((function(){return Array(r).fill(null)})),classNames:new Array(r).fill(null).map((function(){return new Array(r).fill(null).map((function(){return{isDark:!1,isWin:!1,isList:!1}}))})),xIsNext:!0,status:"Next player: X",isWinner:!1,preRowDark:{x:0,y:0},historys:[],isForward:!0,stepCurrent:0},a.checkRow=a.checkRow.bind(Object(y.a)(a)),a.checkCol=a.checkCol.bind(Object(y.a)(a)),a.checkSlash=a.checkSlash.bind(Object(y.a)(a)),a.checkBackSlash=a.checkBackSlash.bind(Object(y.a)(a)),a.checkWinner=a.checkWinner.bind(Object(y.a)(a)),a.handleClick=a.handleClick.bind(Object(y.a)(a)),a.reverseArray=a.reverseArray.bind(Object(y.a)(a)),a.resetGame=a.resetGame.bind(Object(y.a)(a)),a.clickList=a.clickList.bind(Object(y.a)(a)),a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"checkRow",value:function(e,t){var a=this.props.size,r=0,s=1,n=this.state.square.slice(),i=t+1;for(n[e][i]!==n[e][t]&&null!==n[e][i]&&(r+=1);n[e][i]===n[e][t]&&i<a;)if(s+=1,i+=1,n[e][i]!==n[e][t]&&null!==n[e][i]){r+=1;break}for(i=t-1,n[e][i]!==n[e][t]&&null!==n[e][i]&&(r+=1);n[e][i]===n[e][t]&&i>=0;)if(s+=1,i-=1,n[e][i]!==n[e][t]&&null!==n[e][i]){r+=1;break}return r<2&&5===s?{player:n[e][t],type:0}:null}},{key:"checkCol",value:function(e,t){var a=this.props.size,r=0,s=1,n=this.state.square.slice(),i=e+1;for(i<a&&n[i][t]!==n[e][t]&&null!==n[i][t]&&(r+=1);i<a&&n[i][t]===n[e][t];)if(s+=1,(i+=1)<a&&n[i][t]!==n[e][t]&&null!==n[i][t]){r+=1;break}for((i=e-1)>=0&&n[i][t]!==n[e][t]&&null!==n[i][t]&&(r+=1);i>=0&&n[i][t]===n[e][t];)if(s+=1,(i-=1)>=0&&n[i][t]!==n[e][t]&&null!==n[i][t]){r+=1;break}return r<2&&5===s?{player:n[e][t],type:1}:null}},{key:"checkSlash",value:function(e,t){var a=this.props.size,r=0,s=1,n=this.state.square.slice(),i=e-1,l=t+1;for(i>=0&&l<a&&n[i][l]!==n[e][t]&&null!==n[i][l]&&(r+=1);i>=0&&l<a&&n[i][l]===n[e][t];)if(s+=1,l+=1,(i-=1)>=0&&l<a&&n[i][l]!==n[e][t]&&null!==n[i][l]){r+=1;break}for(l=t-1,(i=e+1)<a&&l>=0&&n[i][l]!==n[e][t]&&null!==n[i][l]&&(r+=1);i<a&&l>=0&&n[i][l]===n[e][t];)if(s+=1,l-=1,(i+=1)<a&&l>=0&&n[i][l]!==n[e][t]&&null!==n[i][l]){r+=1;break}return r<2&&5===s?{player:n[e][t],type:2}:null}},{key:"checkBackSlash",value:function(e,t){var a=this.props.size,r=0,s=1,n=this.state.square.slice(),i=e-1,l=t-1;for(i>=0&&l>=0&&n[i][l]!==n[e][t]&&null!==n[i][l]&&(r+=1);i>=0&&l>=0&&n[i][l]===n[e][t];)if(s+=1,l-=1,(i-=1)>=0&&l>=0&&n[i][l]!==n[e][t]&&null!==n[i][l]){r+=1;break}for(l=t+1,(i=e+1)<a&&l<a&&n[i][l]!==n[e][t]&&null!==n[i][l]&&(r+=1);i<a&&l<a&&n[i][l]===n[e][t];)if(s+=1,l+=1,(i+=1)<a&&l<a&&n[i][l]!==n[e][t]&&null!==n[i][l]){r+=1;break}return r<2&&5===s?{player:n[e][t],type:3}:null}},{key:"checkWinner",value:function(e,t){var a=this.checkRow(e,t);return null!==a?a:null!==(a=this.checkCol(e,t))?a:null!==(a=this.checkSlash(e,t))?a:null!==(a=this.checkBackSlash(e,t))?a:null}},{key:"handleClick",value:function(e,t){var a=this.props.size,r=this.state,s=r.square,n=r.classNames,i=r.historys,l=r.isWinner,c=r.isForward,o=r.xIsNext,h=r.stepCurrent,k=r.preRowDark,f=0,y=0,p=0,b=s.slice(),m=n.slice(),v=i.slice(),d=null;if(!b[e][t]&&!l){if(c)for(;h+1<v.length;)b[(d=v.pop()).x][d.y]=!1;else for(var C=0;C<h;C+=1)b[(d=v.shift()).x][d.y]=!1;c?(v.push({x:e,y:t,player:o?"X":"O"}),this.clickList(h+1)):(v.unshift({x:e,y:t,player:o?"X":"O"}),this.clickList(0)),this.setState({historys:Object(u.a)(v)}),m[k.x][k.y].isDark=!1,m[e][t].isDark=!0,b[e][t]=o?"X":"O",this.setState({square:Object(u.a)(b),xIsNext:!o});var N=this.checkWinner(e,t);if(N)switch(m[e][t].isDark=!1,this.setState({status:"Winner: ".concat(N.player),isWinner:!0}),m[e][t].isWin=!0,N.type){case 0:for(f=t+1;b[e][f]===b[e][t]&&f<a;)m[e][f].isWin=!0,f+=1;for(f=t-1;b[e][f]===b[e][t]&&f>=0;)m[e][f].isWin=!0,f-=1;break;case 1:for(f=e+1;f<a&&b[f][t]===b[e][t];)m[f][t].isWin=!0,f+=1;for(f=e-1;f>=0&&b[f][t]===b[e][t];)m[f][t].isWin=!0,f-=1;break;case 2:for(y=e-1,p=t+1;y>=0&&p<a&&b[y][p]===b[e][t];)m[y][p].isWin=!0,y-=1,p+=1;for(y=e+1,p=t-1;y<a&&p>=0&&b[y][p]===b[e][t];)m[y][p].isWin=!0,y+=1,p-=1;break;case 3:for(y=e-1,p=t-1;y>=0&&p>=0&&b[y][p]===b[e][t];)m[y][p].isWin=!0,y-=1,p-=1;for(y=e+1,p=t+1;y<a&&p<a&&b[y][p]===b[e][t];)m[y][p].isWin=!0,y+=1,p+=1}else this.setState({status:"Next player: ".concat(o?"O":"X"),classNames:Object(u.a)(m),preRowDark:{x:e,y:t}})}}},{key:"clickList",value:function(e){var t=this.state,a=t.stepCurrent,r=t.historys,s=t.classNames,n=this.props.size,i=s.slice();if(0!==r.length){var l=Math.floor(a/n),c=a%n;a>=0&&(i[l][c].isList=!1),c=e%n,i[l=Math.floor(e/n)][c].isList=!0,this.setState({stepCurrent:e,classNames:Object(u.a)(i)})}}},{key:"resetGame",value:function(){var e=this.props.size;this.setState({square:Array(e).fill(null).map((function(){return Array(e).fill(null)})),classNames:new Array(e).fill(null).map((function(){return new Array(e).fill(null).map((function(){return{isDark:!1,isWin:!1,isList:!1}}))})),xIsNext:!0,status:"Next player: X",isWinner:!1,preRowDark:{x:0,y:0},historys:[],stepCurrent:0})}},{key:"render",value:function(){var e=this,t=this.props.size,a=this.state,r=a.status,n=a.historys,i=a.classNames,l=a.square;return s.a.createElement("div",{className:"game"},s.a.createElement("div",{className:"game-board"},s.a.createElement("button",{className:"btn-reset",type:"button",onClick:function(){return e.resetGame()}},"Reset"),s.a.createElement("div",{className:"status"},r),Array(t+1).fill(null).map((function(e,t){return s.a.createElement("button",{type:"button",className:"square",key:String(t+1)},t>0?String.fromCharCode(t+64):"")})),l.map((function(a,r){return s.a.createElement("div",{className:"board-row",key:String(r)},s.a.createElement("button",{type:"button",className:"square",key:-1},r+1),a.map((function(a,n){return s.a.createElement(b,{value:a,onClick:function(){return e.handleClick(r,n)},key:String(r*t+n),curClick:i[r][n].isDark,isWin:i[r][n].isWin})})))}))),s.a.createElement("div",{className:"game-info"},s.a.createElement("button",{type:"button",className:"btn-history",onClick:this.reverseArray},"History"),n.map((function(a,r){return s.a.createElement("ol",{key:a.x*t+a.y},s.a.createElement("button",{type:"button",className:"btn-list ".concat(i[Math.floor(r/t)][r%t].isList?"btn-list-clicked":""),onClick:function(){return e.clickList(r)}},s.a.createElement("span",null,"Player ".concat(a.player,": [").concat(a.x+1,", ").concat(String.fromCharCode(a.y+65),"]"))))}))))}}]),t}(s.a.Component),v=(a(29),Object(c.b)({})),d=Object(c.c)(v);var C=function(){return s.a.createElement(l.a,{store:d},s.a.createElement(m,{size:20}))};i.a.render(s.a.createElement(C,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.9fa27e3b.chunk.js.map