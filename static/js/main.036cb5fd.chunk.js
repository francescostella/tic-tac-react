(this["webpackJsonptic-tac-react"]=this["webpackJsonptic-tac-react"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),r=n(7),i=n.n(r),c=n(2),a=n(3),o=n(5),u=n(4),l=n(1),h=n.n(l),d=(n(14),function(e){var t=e.winnerLine&&e.winnerLine.includes(e.cellKey)?"is-winner-square":"",n="square ".concat(t);return Object(s.jsx)("button",{className:n,onClick:e.onClick,children:e.value})}),j=(n(15),function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"renderSquare",value:function(e){var t=this;return Object(s.jsx)(d,{cellKey:e,value:this.props.squares[e],winnerLine:this.props.winnerLine,onClick:function(){return t.props.onClick(e)}},e)}},{key:"createBoard",value:function(e,t){for(var n=[],r=0,i=0;i<e;i++){for(var c=[],a=0;a<t;a++)c.push(this.renderSquare(r++));n.push(Object(s.jsx)("div",{className:"board-row",children:c},i))}return n}},{key:"render",value:function(){return Object(s.jsx)("div",{children:this.createBoard(3,3)})}}]),n}(h.a.Component)),b=n(8),v={calculateWinner:function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var s=Object(b.a)(t[n],3),r=s[0],i=s[1],c=s[2];if(e[r]&&e[r]===e[i]&&e[r]===e[c])return{player:e[r],line:[r,i,c]}}return null},calculatePosition:function(e){switch(e){case 0:return[1,1];case 1:return[1,2];case 2:return[1,3];case 3:return[2,1];case 4:return[2,2];case 5:return[2,3];case 6:return[3,1];case 7:return[3,2];case 8:return[3,3];default:return[1,1]}}},f=v,p=(n(16),function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).state={history:[{squares:Array(9).fill(null),positionMove:[0,0]}],stepNumber:0,xIsNext:!0,sortAscending:!0},s}return Object(a.a)(n,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.history.length+1),n=t[t.length-1].squares.slice();f.calculateWinner(n)||n[e]||(n[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:n,positionMove:f.calculatePosition(e)}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"handleSort",value:function(){this.state.sortAscending,this.state.sortAscending,this.setState({sortAscending:!this.state.sortAscending})}},{key:"render",value:function(){var e,t=this,n=this.state.history,r=n[this.state.stepNumber],i=f.calculateWinner(r.squares),c=n.map((function(e,r){var i=n[r].positionMove[0],c=n[r].positionMove[1],a=r?"move #"+r+" made in row "+i+" and col "+c:"Go to game start";return Object(s.jsx)("li",{children:Object(s.jsx)("button",{onClick:function(){return t.jumpTo(r)},className:t.state.stepNumber===r?"active":"",children:a})},r)})).sort((function(e,n){return t.state.sortAscending?e.key-n.key:t.state.sortAscending?void 0:n.key-e.key}));i&&(e="The WINNER is "+i.player+"! "),i||(e="Next player: "+(this.state.xIsNext?"X":"O"));var a=10===c.length&&!i,o="game__message "+(a?"is-draw":"")+(i?"is-winner":"");return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"game",children:[Object(s.jsxs)("div",{className:"game__board",children:[Object(s.jsx)(j,{winnerLine:null===i||void 0===i?void 0:i.line,squares:r.squares,onClick:function(e){return t.handleClick(e)}}),Object(s.jsx)("p",{className:i||a?"hidden":"",children:e})]}),Object(s.jsxs)("div",{className:"game__info",children:[Object(s.jsx)("div",{children:Object(s.jsxs)("button",{onClick:function(){return t.handleSort()},children:["Sort ",this.state.sortAscending?"ASC":"DESC"]})}),Object(s.jsx)("ol",{children:c})]})]}),Object(s.jsxs)("div",{className:o,children:[Object(s.jsx)("h3",{children:i?e:"DRAW"}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{onClick:function(){return window.location.reload()},children:i?"New Game":"Restart"})})]})]})}}]),n}(h.a.Component));n(17);i.a.render(Object(s.jsx)(p,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.036cb5fd.chunk.js.map