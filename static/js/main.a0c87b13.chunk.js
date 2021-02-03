(this["webpackJsonptic-tac-react"]=this["webpackJsonptic-tac-react"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(8),s=a.n(n),i=a(2),c=a(3),l=a(5),o=a(4),u=a(1),h=a.n(u),m=a.p+"static/media/icon-human.ebca92cc.svg",y=a.p+"static/media/icon-bot.a80b2169.svg",v=(a(15),function(e){var t=e.winnerLine&&e.winnerLine.includes(e.cellKey)?"is-winner-square":"",a="square ".concat(t);return Object(r.jsx)("button",{className:a,onClick:e.onClick,children:e.value})}),d=(a(16),function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"renderSquare",value:function(e){var t=this;return Object(r.jsx)(v,{cellKey:e,value:this.props.squares[e],winnerLine:this.props.winnerLine,onClick:function(){return t.props.onClick(e)}},e)}},{key:"createBoard",value:function(e,t){for(var a=[],n=0,s=0;s<e;s++){for(var i=[],c=0;c<t;c++)i.push(this.renderSquare(n++));a.push(Object(r.jsx)("div",{className:"board-row",children:i},s))}return a}},{key:"render",value:function(){return Object(r.jsx)("div",{children:this.createBoard(3,3)})}}]),a}(h.a.Component)),b=a(9),g={calculateWinner:function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var r=Object(b.a)(t[a],3),n=r[0],s=r[1],i=r[2];if(e[n]&&e[n]===e[s]&&e[n]===e[i])return{player:e[n],line:[n,s,i]}}return null},calculateTie:function(e){return!!e&&e.every((function(e){return e}))},calculatePosition:function(e){switch(e){case 0:return[1,1];case 1:return[1,2];case 2:return[1,3];case 3:return[2,1];case 4:return[2,2];case 5:return[2,3];case 6:return[3,1];case 7:return[3,2];case 8:return[3,3];default:return[1,1]}},randomItemFromArray:function(e){return e[Math.floor(Math.random()*e.length)]}},j=g,f=a(6),k=function(){function e(t,a){var r;Object(i.a)(this,e);var n={easy:1,insane:2};this.level=n[t]?n[t]:1,this.currentAIPlayerMark=a,console.log("\ud83d\ude80 ~ file: AIPlayer.js ~ line 13 ~ AIPlayer ~ constructor ~ this.currentAIPlayerMark",this.currentAIPlayerMark),this.currentHumanPlayerMark="X"===a?"O":"X",this.scores=(r={},Object(f.a)(r,this.currentAIPlayerMark,10),Object(f.a)(r,this.currentHumanPlayerMark,-10),Object(f.a)(r,"tie",0),r),console.log("\ud83d\ude80 ~ file: AIPlayer.js ~ line 16 ~ AIPlayer ~ constructor ~ this.scores",this.scores)}return Object(c.a)(e,[{key:"getLevel",value:function(){return this.level}},{key:"bestMove",value:function(e){for(var t,a=-1/0,r=0;r<e.length;r++)if(null===e[r]){e[r]=this.currentAIPlayerMark;var n=this.minimax(e,this.currentAIPlayerMark,!1);e[r]=null,n>a&&(a=n,t=r)}return t}},{key:"minimax",value:function(e,t){var a=j.calculateWinner(e);if(j.calculateTie(e)&&!a)return this.scores.tie;if(a)return this.scores[a.player];if(t){for(var r=-1/0,n=0;n<e.length;n++)if(null===e[n]){e[n]=this.currentAIPlayerMark;var s=this.minimax(e,!1);e[n]=null,r=Math.max(s,r)}return r}if(!t){for(var i=1/0,c=0;c<e.length;c++)if(null===e[c]){e[c]=this.currentHumanPlayerMark;var l=this.minimax(e,!0);e[c]=null,i=Math.min(l,i)}return i}}},{key:"playDumb",value:function(e){for(var t=[],a=0;a<e.length;a++)null===e[a]&&t.push(a);return j.randomItemFromArray(t)}},{key:"makeMove",value:function(e,t){return 2===this.level?(console.log("BOT went INSANE!!!"),this.bestMove(e,t)):(console.log("BOT is relaxing..."),this.playDumb(e))}}]),e}(),p=(a(17),function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).state={history:[{squares:Array(9).fill(null),coordinatesMove:[0,0],isHuman:!0}],stepNumber:0,xIsNext:!0,sortAscending:!0},r.currentHumanPlayerMark=r.state.xIsNext?"X":"O",r.baseState=Object.assign({},r.state),r.AIPlayer=new k("insane",r.getCurrentAIPlayerMark()),r.isPlayingAI=!1,r}return Object(c.a)(a,[{key:"getCurrentAIPlayerMark",value:function(){return"X"===this.currentHumanPlayerMark?"O":"X"}},{key:"handleResetGame",value:function(){this.setState(this.baseState),this.currentHumanPlayerMark=this.baseState.xIsNext?"X":"O"}},{key:"handleClick",value:function(e){this.isNotAllowedMove()||this.isPlayingAI||this.registerMove(e,!0)}},{key:"registerMove",value:function(e,t){var a=this,r=this.state.history.slice(0,this.state.history.length+1),n=r[r.length-1].squares.slice();if(!n[e]){var s=this.state.xIsNext?"X":"O";n[e]=s,this.setState({history:r.concat([{squares:n,coordinatesMove:j.calculatePosition(e),player:s,isHuman:t}]),stepNumber:r.length,xIsNext:!this.state.xIsNext},(function(){t&&a.passTurnToAI()}))}}},{key:"passTurnToAI",value:function(){var e=this;this.isNotAllowedMove()||(this.isPlayingAI=!0,setTimeout((function(){var t=e.state.history.slice(0,e.state.history.length+1),a=t[t.length-1].squares.slice(),r=e.AIPlayer.makeMove(a,e.getCurrentAIPlayerMark());e.registerMove(r,!1),e.isPlayingAI=!1}),1e3))}},{key:"isNotAllowedMove",value:function(){var e=this.state.history,t=e[e.length-1];return!!j.calculateWinner(t.squares)||(this.state.history.length-1!==this.state.stepNumber||void 0)}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"handlePickPlayer",value:function(){0!==this.state.stepNumber||this.state.history.length>1||(this.setState({xIsNext:!this.state.xIsNext}),this.currentHumanPlayerMark=this.state.xIsNext?"O":"X",this.AIPlayer=new k("insane",this.getCurrentAIPlayerMark()))}},{key:"handleSort",value:function(){this.state.sortAscending,this.state.sortAscending,this.setState({sortAscending:!this.state.sortAscending})}},{key:"render",value:function(){var e=this,t=this.state.history,a=t[this.state.stepNumber],n=j.calculateWinner(a.squares),s=t.map((function(a,n){var s=t[n].coordinatesMove[0],i=t[n].coordinatesMove[1],c=n?t[n].player+" in row "+s+" and col "+i:"Go to game start";return Object(r.jsx)("li",{className:"game__move","data-move-number":n,children:Object(r.jsx)("button",{onClick:function(){return e.jumpTo(n)},className:e.state.stepNumber===n?"active":"",children:c})},n)})).sort((function(t,a){return e.state.sortAscending?t.key-a.key:a.key-t.key})),i=10===s.length&&!n;return Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"game",children:Object(r.jsxs)("div",{className:"game__content",children:[Object(r.jsxs)("div",{className:"game__header",children:[Object(r.jsxs)("div",{className:"game__players",children:[Object(r.jsxs)("button",{className:"game__player game__player--left ".concat(this.state.xIsNext?"game__player--active":""," ").concat(n||i?"hidden":""),onClick:function(){return e.handlePickPlayer()},children:["X",Object(r.jsx)("span",{className:"game__player-label game__player-label--human ".concat("X"===this.currentHumanPlayerMark?"active":""),children:"You"}),Object(r.jsx)("img",{className:"game__player-icon game__player-icon--human ".concat("X"===this.currentHumanPlayerMark?"active":""),src:m,alt:"Human avatar"}),Object(r.jsx)("span",{className:"game__player-label game__player-label--bot ".concat("X"!==this.currentHumanPlayerMark?"active":""),children:"Bot"}),Object(r.jsx)("img",{className:"game__player-icon game__player-icon--bot ".concat("X"!==this.currentHumanPlayerMark?"active":""),src:y,alt:"Bot avatar"})]}),Object(r.jsxs)("button",{className:"game__player game__player--right ".concat(this.state.xIsNext?"":" game__player--active"," ").concat(n||i?"hidden":""),onClick:function(){return e.handlePickPlayer()},children:["O",Object(r.jsx)("span",{className:"game__player-label game__player-label--human ".concat("O"===this.currentHumanPlayerMark?"active":""),children:"You"}),Object(r.jsx)("img",{className:"game__player-icon game__player-icon--human ".concat("O"===this.currentHumanPlayerMark?"active":""),src:m,alt:"Human avatar"}),Object(r.jsx)("span",{className:"game__player-label game__player-label--bot ".concat("O"!==this.currentHumanPlayerMark?"active":""),children:"Bot"}),Object(r.jsx)("img",{className:"game__player-icon game__player-icon--bot ".concat("O"!==this.currentHumanPlayerMark?"active":""),src:y,alt:"Bot avatar"})]})]}),Object(r.jsx)("div",{className:"game__message ".concat(i?"is-draw":""," ").concat(n?"is-winner":""),onClick:function(){return e.handleResetGame()},children:Object(r.jsx)("h3",{className:"game__message-title",children:n?"The WINNER is "+n.player+"!!! ":"DRAW"})})]}),Object(r.jsx)("div",{className:"game__board",children:Object(r.jsx)(d,{winnerLine:null===n||void 0===n?void 0:n.line,squares:a.squares,onClick:function(t){return e.handleClick(t)}})}),Object(r.jsxs)("div",{className:"game__info",children:[Object(r.jsx)("div",{className:"game__controls",children:Object(r.jsxs)("button",{className:"game__controls-order",onClick:function(){return e.handleSort()},disabled:s.length<2,children:["Order by ",Object(r.jsx)("span",{children:this.state.sortAscending?"\u25b2":"\u25bc"})]})}),Object(r.jsx)("ol",{className:"game__moves",children:s})]})]})})})}}]),a}(h.a.Component));a(18);s.a.render(Object(r.jsx)(p,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.a0c87b13.chunk.js.map