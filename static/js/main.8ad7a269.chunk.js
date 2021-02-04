(this["webpackJsonptic-tac-react"]=this["webpackJsonptic-tac-react"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(9),r=a.n(n),i=a(7),c=a(1),l=a(2),o=a(5),u=a(4),h=a(3),m=a.n(h),g=(a(16),function(e){var t=e.winnerLine&&e.winnerLine.includes(e.cellKey)?"is-winner-square":"",a="square ".concat(t);return Object(s.jsx)("button",{className:a,onClick:e.onClick,children:e.value})}),b=(a(17),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"renderSquare",value:function(e){var t=this;return Object(s.jsx)(g,{cellKey:e,value:this.props.squares[e],winnerLine:this.props.winnerLine,onClick:function(){return t.props.onClick(e)}},e)}},{key:"createBoard",value:function(e,t){for(var a=[],n=0,r=0;r<e;r++){for(var i=[],c=0;c<t;c++)i.push(this.renderSquare(n++));a.push(Object(s.jsx)("div",{className:"board-row",children:i},r))}return a}},{key:"render",value:function(){return Object(s.jsx)("div",{children:this.createBoard(3,3)})}}]),a}(m.a.Component)),v=(a(18),function e(){Object(c.a)(this,e)});v.DELAY_AIPLAYER_MOVE=1e3,v.GAME_TYPE={HUMAN_VS_BOT:1,HUMAN_VS_HUMAN:2},v.BOT_LEVEL={EASY:1,INSANE:2};var _=v,d=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"setGameType",value:function(e){e&&this.props.handleSetGameType(e)}},{key:"setBotLevel",value:function(e){e&&this.props.handleSetBotLevel(e)}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"game-settings",children:[Object(s.jsx)("h4",{className:"game-settings__subtitle",children:"Game type"}),Object(s.jsxs)("ul",{className:"game-settings__options",children:[Object(s.jsx)("li",{className:"game-settings__option",children:Object(s.jsx)("button",{disabled:this.props.settings.gameType===_.GAME_TYPE.HUMAN_VS_BOT,onClick:function(){return e.setGameType(_.GAME_TYPE.HUMAN_VS_BOT)},children:"Human VS Bot"})}),Object(s.jsx)("li",{className:"game-settings__option",children:Object(s.jsx)("button",{disabled:this.props.settings.gameType===_.GAME_TYPE.HUMAN_VS_HUMAN,onClick:function(){return e.setGameType(_.GAME_TYPE.HUMAN_VS_HUMAN)},children:"Human VS Human"})})]}),Object(s.jsx)("h4",{className:"game-settings__subtitle",children:"Bot level"}),Object(s.jsxs)("ul",{className:"game-settings__options",children:[Object(s.jsx)("li",{className:"game-settings__option",children:Object(s.jsx)("button",{disabled:this.props.settings.botLevel===_.BOT_LEVEL.EASY,onClick:function(){return e.setBotLevel(_.BOT_LEVEL.EASY)},children:"Easy"})}),Object(s.jsx)("li",{className:"game-settings__option",children:Object(s.jsx)("button",{disabled:this.props.settings.botLevel===_.BOT_LEVEL.INSANE,onClick:function(){return e.setBotLevel(_.BOT_LEVEL.INSANE)},children:"Insane"})})]})]})}}]),a}(m.a.Component),y=a(6),j=a(10),p=function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,null,[{key:"calculateWinner",value:function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var s=Object(j.a)(t[a],3),n=s[0],r=s[1],i=s[2];if(e[n]&&e[n]===e[r]&&e[n]===e[i])return{player:e[n],line:[n,r,i]}}return null}},{key:"calculateDraw",value:function(e){return!!e&&e.every((function(e){return e}))}},{key:"calculatePosition",value:function(e){switch(e){case 0:return[1,1];case 1:return[1,2];case 2:return[1,3];case 3:return[2,1];case 4:return[2,2];case 5:return[2,3];case 6:return[3,1];case 7:return[3,2];case 8:return[3,3];default:return[1,1]}}},{key:"randomItemFromArray",value:function(e){return e[Math.floor(Math.random()*e.length)]}},{key:"getCurrentAIPlayerMark",value:function(e){return"X"===e?"O":"X"}}]),e}(),O=function(){function e(t,a){var s;Object(c.a)(this,e);var n={easy:1,insane:2};this.level=n[t]?n[t]:1,this.currentAIPlayerMark=a,this.currentHumanPlayerMark="X"===a?"O":"X",this.scores=(s={},Object(y.a)(s,this.currentAIPlayerMark,10),Object(y.a)(s,this.currentHumanPlayerMark,-10),Object(y.a)(s,"draw",0),s)}return Object(l.a)(e,[{key:"getLevel",value:function(){return this.level}},{key:"bestMove",value:function(e){for(var t,a=-1/0,s=0;s<e.length;s++)if(null===e[s]){e[s]=this.currentAIPlayerMark;var n=this.minimax(e,!1);e[s]=null,n>a&&(a=n,t=s)}return t}},{key:"minimax",value:function(e,t){var a=p.calculateWinner(e);if(p.calculateDraw(e)&&!a)return this.scores.draw;if(a)return this.scores[a.player];if(t){for(var s=-1/0,n=0;n<e.length;n++)if(null===e[n]){e[n]=this.currentAIPlayerMark;var r=this.minimax(e,!1);e[n]=null,s=Math.max(r,s)}return s}if(!t){for(var i=1/0,c=0;c<e.length;c++)if(null===e[c]){e[c]=this.currentHumanPlayerMark;var l=this.minimax(e,!0);e[c]=null,i=Math.min(l,i)}return i}}},{key:"playDumb",value:function(e){for(var t=[],a=0;a<e.length;a++)null===e[a]&&t.push(a);return p.randomItemFromArray(t)}},{key:"makeMove",value:function(e,t){return 2===this.level?this.bestMove(e,t):this.playDumb(e)}}]),e}(),f=(a(19),a.p+"static/media/icon-human.ebca92cc.svg"),k=a.p+"static/media/icon-bot.a80b2169.svg",x=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).state={history:[{squares:Array(9).fill(null),coordinatesMove:[0,0],isHuman:!0}],stepNumber:0,xIsNext:!0,sortAscending:!0,showMoves:!1,showGameSettings:!1,settings:{gameType:_.GAME_TYPE.HUMAN_VS_BOT,botLevel:_.BOT_LEVEL.EASY}},s.baseState=Object.assign({},s.state),s.currentHumanPlayerMark=s.state.xIsNext?"X":"O",s.AIPlayer=new O("insane",p.getCurrentAIPlayerMark(s.currentHumanPlayerMark)),s.isPlayingAI=!1,s}return Object(l.a)(a,[{key:"handleResetGame",value:function(){this.setState(this.baseState),this.currentHumanPlayerMark=this.baseState.xIsNext?"X":"O"}},{key:"handleClick",value:function(e){this.isNotAllowedMove()||this.isPlayingAI||this.registerMove(e,!0)}},{key:"registerMove",value:function(e,t){var a=this,s=this.state.history.slice(0,this.state.history.length+1),n=s[s.length-1].squares.slice();if(!n[e]){var r=this.state.xIsNext?"X":"O";n[e]=r,this.setState({history:s.concat([{squares:n,coordinatesMove:p.calculatePosition(e),player:r,isHuman:t}]),stepNumber:s.length,xIsNext:!this.state.xIsNext},(function(){t&&a.passTurnToAI()}))}}},{key:"passTurnToAI",value:function(){var e=this;this.isNotAllowedMove()||(this.isPlayingAI=!0,setTimeout((function(){var t=e.state.history.slice(0,e.state.history.length+1),a=t[t.length-1].squares.slice(),s=e.AIPlayer.makeMove(a,p.getCurrentAIPlayerMark(e.currentHumanPlayerMark));e.registerMove(s,!1),e.isPlayingAI=!1}),_.DELAY_AIPLAYER_MOVE))}},{key:"isNotAllowedMove",value:function(){var e=this.state.history,t=e[e.length-1];return!!p.calculateWinner(t.squares)||(!!p.calculateDraw(t.squares)||(this.state.history.length-1!==this.state.stepNumber||void 0))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"handleSetGameType",value:function(e){e&&this.setState({settings:Object(i.a)(Object(i.a)({},this.state.settings),{},{gameType:e})})}},{key:"handleSetBotLevel",value:function(e){e&&this.setState({settings:Object(i.a)(Object(i.a)({},this.state.settings),{},{botLevel:e})})}},{key:"handlePickPlayer",value:function(){0!==this.state.stepNumber||this.state.history.length>1||(this.setState({xIsNext:!this.state.xIsNext}),this.currentHumanPlayerMark=this.state.xIsNext?"O":"X",this.AIPlayer=new O("insane",p.getCurrentAIPlayerMark(this.currentHumanPlayerMark)))}},{key:"toggleSorting",value:function(){this.setState({sortAscending:!this.state.sortAscending})}},{key:"toggleMoveList",value:function(){this.setState({showMoves:!this.state.showMoves})}},{key:"toggleGameSettings",value:function(){this.setState({showGameSettings:!this.state.showGameSettings})}},{key:"render",value:function(){var e=this,t=this.state.history,a=t[this.state.stepNumber],n=p.calculateWinner(a.squares),r=t.map((function(a,n){var r=t[n].coordinatesMove[0],i=t[n].coordinatesMove[1],c=n?t[n].player+" in row "+r+" and col "+i:"Go to game start";return Object(s.jsx)("li",{className:"game__move","data-move-number":n,children:Object(s.jsx)("button",{onClick:function(){return e.jumpTo(n)},className:e.state.stepNumber===n?"active":"",children:c})},n)})).sort((function(t,a){return e.state.sortAscending?t.key-a.key:a.key-t.key})),i=10===r.length&&!n;return Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"game",children:Object(s.jsxs)("div",{className:"game__content",children:[Object(s.jsxs)("div",{className:"game__header",children:[Object(s.jsxs)("div",{className:"game__players",children:[Object(s.jsxs)("button",{className:"game__player game__player--left ".concat(this.state.xIsNext?"game__player--active":""," ").concat(n||i?"hidden":""),onClick:function(){return e.handlePickPlayer()},children:["X",Object(s.jsx)("span",{className:"game__player-label game__player-label--human ".concat("X"===this.currentHumanPlayerMark?"active":""),children:"You"}),Object(s.jsx)("img",{className:"game__player-icon game__player-icon--human ".concat("X"===this.currentHumanPlayerMark?"active":""),src:f,alt:"Human avatar"}),Object(s.jsx)("span",{className:"game__player-label game__player-label--bot ".concat("X"!==this.currentHumanPlayerMark?"active":""),children:"Bot"}),Object(s.jsx)("img",{className:"game__player-icon game__player-icon--bot ".concat("X"!==this.currentHumanPlayerMark?"active":""),src:k,alt:"Bot avatar"})]}),Object(s.jsxs)("button",{className:"game__player game__player--right ".concat(this.state.xIsNext?"":" game__player--active"," ").concat(n||i?"hidden":""),onClick:function(){return e.handlePickPlayer()},children:["O",Object(s.jsx)("span",{className:"game__player-label game__player-label--human ".concat("O"===this.currentHumanPlayerMark?"active":""),children:"You"}),Object(s.jsx)("img",{className:"game__player-icon game__player-icon--human ".concat("O"===this.currentHumanPlayerMark?"active":""),src:f,alt:"Human avatar"}),Object(s.jsx)("span",{className:"game__player-label game__player-label--bot ".concat("O"!==this.currentHumanPlayerMark?"active":""),children:"Bot"}),Object(s.jsx)("img",{className:"game__player-icon game__player-icon--bot ".concat("O"!==this.currentHumanPlayerMark?"active":""),src:k,alt:"Bot avatar"})]})]}),Object(s.jsx)("div",{className:"game__message ".concat(i?"is-draw":""," ").concat(n?"is-winner":""),onClick:function(){return e.handleResetGame()},children:Object(s.jsx)("h3",{className:"game__message-title",children:n?"The WINNER is "+n.player+"!!! ":"DRAW"})})]}),Object(s.jsxs)("div",{className:"game__board",children:[Object(s.jsx)("div",{className:"game__settings ".concat(this.state.showGameSettings?"game__settings--show":"game__settings--hide"),children:Object(s.jsx)(d,{settings:this.state.settings,handleSetGameType:this.handleSetGameType.bind(this),handleSetBotLevel:this.handleSetBotLevel.bind(this)})}),Object(s.jsx)(b,{winnerLine:null===n||void 0===n?void 0:n.line,squares:a.squares,onClick:function(t){return e.handleClick(t)}})]}),Object(s.jsxs)("div",{className:"game__info",children:[Object(s.jsxs)("div",{className:"game__controls",children:[Object(s.jsx)("button",{className:"game__button game__button--game-settings",onClick:function(){return e.toggleGameSettings()},disabled:r.length>1,children:"Game Settings"}),Object(s.jsxs)("button",{className:"game__button game__button--show-moves",onClick:function(){return e.toggleMoveList()},children:[Object(s.jsx)("span",{children:"".concat(this.state.showMoves?"Hide":"Show")})," ","Moves"]})]}),Object(s.jsxs)("div",{className:"game__moves-box ".concat(this.state.showMoves?"game__moves-box--opened":"game__moves-box--closed"),children:[Object(s.jsxs)("button",{className:"game__button game__button--sorting",onClick:function(){return e.toggleSorting()},disabled:r.length<2,children:["Order by ",Object(s.jsx)("span",{className:"game__button-icon",children:this.state.sortAscending?"\u25b2":"\u25bc"})]}),Object(s.jsx)("ol",{className:"game__moves",children:r})]})]})]})})})}}]),a}(m.a.Component);a(20);r.a.render(Object(s.jsx)(x,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.8ad7a269.chunk.js.map