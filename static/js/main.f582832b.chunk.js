(this["webpackJsonptic-tac-react"]=this["webpackJsonptic-tac-react"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(9),r=a.n(s),i=a(7),c=a(1),l=a(2),o=a(5),u=a(4),h=a(3),m=a.n(h),g=(a(16),function(e){var t=e.winnerLine&&e.winnerLine.includes(e.cellKey)?"is-winner-square":"",a="square ".concat(t);return Object(n.jsx)("button",{className:a,onClick:e.onClick,children:e.value})}),b=(a(17),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"renderSquare",value:function(e){var t=this;return Object(n.jsx)(g,{cellKey:e,value:this.props.squares[e],winnerLine:this.props.winnerLine,onClick:function(){return t.props.onClick(e)}},e)}},{key:"createBoard",value:function(e,t){for(var a=[],s=0,r=0;r<e;r++){for(var i=[],c=0;c<t;c++)i.push(this.renderSquare(s++));a.push(Object(n.jsx)("div",{className:"board-row",children:i},r))}return a}},{key:"render",value:function(){return Object(n.jsx)("div",{children:this.createBoard(3,3)})}}]),a}(m.a.Component)),v=(a(18),function e(){Object(c.a)(this,e)});v.DELAY_AIPLAYER_MOVE=1e3,v.GAME_TYPE={HUMAN_VS_BOT:1,HUMAN_VS_HUMAN:2},v.BOT_LEVEL={EASY:1,INSANE:2};var _=v,y=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"setGameType",value:function(e){e&&this.props.handleSetGameType(e)}},{key:"setBotLevel",value:function(e){e&&this.props.handleSetBotLevel(e)}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"game-settings",children:[Object(n.jsx)("h4",{className:"game-settings__subtitle",children:"Game type"}),Object(n.jsxs)("ul",{className:"game-settings__options",children:[Object(n.jsx)("li",{className:"game-settings__option",children:Object(n.jsx)("button",{disabled:this.props.settings.gameType===_.GAME_TYPE.HUMAN_VS_BOT,onClick:function(){return e.setGameType(_.GAME_TYPE.HUMAN_VS_BOT)},children:"Human VS Bot"})}),Object(n.jsx)("li",{className:"game-settings__option",children:Object(n.jsx)("button",{disabled:this.props.settings.gameType===_.GAME_TYPE.HUMAN_VS_HUMAN,onClick:function(){return e.setGameType(_.GAME_TYPE.HUMAN_VS_HUMAN)},children:"Human VS Human"})})]}),Object(n.jsx)("h4",{className:"game-settings__subtitle",children:"Bot level"}),Object(n.jsxs)("ul",{className:"game-settings__options",children:[Object(n.jsx)("li",{className:"game-settings__option",children:Object(n.jsx)("button",{disabled:this.props.settings.botLevel===_.BOT_LEVEL.EASY,onClick:function(){return e.setBotLevel(_.BOT_LEVEL.EASY)},children:"Easy"})}),Object(n.jsx)("li",{className:"game-settings__option",children:Object(n.jsx)("button",{disabled:this.props.settings.botLevel===_.BOT_LEVEL.INSANE,onClick:function(){return e.setBotLevel(_.BOT_LEVEL.INSANE)},children:"Insane"})})]})]})}}]),a}(m.a.Component),d=a(6),j=a(10),O=function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,null,[{key:"calculateWinner",value:function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(j.a)(t[a],3),s=n[0],r=n[1],i=n[2];if(e[s]&&e[s]===e[r]&&e[s]===e[i])return{player:e[s],line:[s,r,i]}}return null}},{key:"calculateDraw",value:function(e){return!!e&&e.every((function(e){return e}))}},{key:"calculatePosition",value:function(e){switch(e){case 0:return[1,1];case 1:return[1,2];case 2:return[1,3];case 3:return[2,1];case 4:return[2,2];case 5:return[2,3];case 6:return[3,1];case 7:return[3,2];case 8:return[3,3];default:return[1,1]}}},{key:"randomItemFromArray",value:function(e){return e[Math.floor(Math.random()*e.length)]}},{key:"getCurrentAIPlayerMark",value:function(e){return"X"===e?"O":"X"}}]),e}(),p=function(){function e(t,a){var n;Object(c.a)(this,e),this.level=t||_.BOT_LEVEL.EASY,this.currentAIPlayerMark=a,this.currentHumanPlayerMark="X"===a?"O":"X",this.scores=(n={},Object(d.a)(n,this.currentAIPlayerMark,10),Object(d.a)(n,this.currentHumanPlayerMark,-10),Object(d.a)(n,"draw",0),n)}return Object(l.a)(e,[{key:"getLevel",value:function(){return this.level}},{key:"bestMove",value:function(e){for(var t,a=-1/0,n=0;n<e.length;n++)if(null===e[n]){e[n]=this.currentAIPlayerMark;var s=this.minimax(e,!1);e[n]=null,s>a&&(a=s,t=n)}return t}},{key:"minimax",value:function(e,t){var a=O.calculateWinner(e);if(O.calculateDraw(e)&&!a)return this.scores.draw;if(a)return this.scores[a.player];if(t){for(var n=-1/0,s=0;s<e.length;s++)if(null===e[s]){e[s]=this.currentAIPlayerMark;var r=this.minimax(e,!1);e[s]=null,n=Math.max(r,n)}return n}if(!t){for(var i=1/0,c=0;c<e.length;c++)if(null===e[c]){e[c]=this.currentHumanPlayerMark;var l=this.minimax(e,!0);e[c]=null,i=Math.min(l,i)}return i}}},{key:"playDumb",value:function(e){for(var t=[],a=0;a<e.length;a++)null===e[a]&&t.push(a);return O.randomItemFromArray(t)}},{key:"makeMove",value:function(e,t){return this.level===_.BOT_LEVEL.INSANE?this.bestMove(e,t):this.playDumb(e)}}]),e}(),f=(a(19),a.p+"static/media/icon-human.ebca92cc.svg"),N=a.p+"static/media/icon-bot.a80b2169.svg",k=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={history:[{squares:Array(9).fill(null),coordinatesMove:[0,0],isHuman:!0}],stepNumber:0,xIsNext:!0,sortAscending:!0,showMoves:!1,showGameSettings:!1,settings:{gameType:_.GAME_TYPE.HUMAN_VS_BOT,botLevel:_.BOT_LEVEL.EASY}},n.baseState=Object.assign({},n.state),n.currentHumanPlayerMark=n.state.xIsNext?"X":"O",n.AIPlayer=n.createAIPlayer(n.state.settings.botLevel),n.isPlayingAI=!1,n}return Object(l.a)(a,[{key:"createAIPlayer",value:function(e){return new p(e,O.getCurrentAIPlayerMark(this.currentHumanPlayerMark))}},{key:"handleResetGame",value:function(){this.setState(this.baseState),this.currentHumanPlayerMark=this.baseState.xIsNext?"X":"O"}},{key:"handleClick",value:function(e){this.isNotAllowedMove()||this.isPlayingAI||this.registerMove(e,!0)}},{key:"registerMove",value:function(e,t){var a=this,n=this.state.history.slice(0,this.state.history.length+1),s=n[n.length-1].squares.slice();if(!s[e]){var r=this.state.xIsNext?"X":"O";s[e]=r,this.setState((function(a){return{history:n.concat([{squares:s,coordinatesMove:O.calculatePosition(e),player:r,isHuman:t}]),stepNumber:n.length,xIsNext:!a.xIsNext}}),(function(){t&&a.AIPlayer&&a.passTurnToAI()}))}}},{key:"passTurnToAI",value:function(){var e=this;this.isNotAllowedMove()||(this.isPlayingAI=!0,setTimeout((function(){var t=e.state.history.slice(0,e.state.history.length+1),a=t[t.length-1].squares.slice(),n=e.AIPlayer.makeMove(a,O.getCurrentAIPlayerMark(e.currentHumanPlayerMark));e.registerMove(n,!1),e.isPlayingAI=!1}),_.DELAY_AIPLAYER_MOVE))}},{key:"isNotAllowedMove",value:function(){var e=this.state.history,t=e[e.length-1];return!!O.calculateWinner(t.squares)||(!!O.calculateDraw(t.squares)||(this.state.history.length-1!==this.state.stepNumber||void 0))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"handleSetGameType",value:function(e){e&&(e===_.GAME_TYPE.HUMAN_VS_BOT&&(this.AIPlayer=this.createAIPlayer(this.state.settings.botLevel)),e===_.GAME_TYPE.HUMAN_VS_HUMAN&&(this.AIPlayer=null),this.setState((function(t){return{settings:Object(i.a)(Object(i.a)({},t.settings),{},{gameType:e})}})))}},{key:"handleSetBotLevel",value:function(e){e&&(this.AIPlayer=this.createAIPlayer(e),this.setState((function(t){return{settings:Object(i.a)(Object(i.a)({},t.settings),{},{botLevel:e})}})))}},{key:"handlePickPlayer",value:function(){0!==this.state.stepNumber||this.state.history.length>1||(this.setState((function(e){return{xIsNext:!e.xIsNext}})),this.currentHumanPlayerMark=this.state.xIsNext?"O":"X",this.AIPlayer=this.createAIPlayer(this.state.settings.botLevel))}},{key:"toggleSorting",value:function(){this.setState((function(e){return{sortAscending:!e.sortAscending}}))}},{key:"toggleMoveList",value:function(){this.setState((function(e){return{showMoves:!e.showMoves}}))}},{key:"toggleGameSettings",value:function(){this.setState((function(e){return{showGameSettings:!e.showGameSettings}}))}},{key:"render",value:function(){var e=this,t=this.state.history,a=t[this.state.stepNumber],s=O.calculateWinner(a.squares),r=t.map((function(a,s){var r=t[s].coordinatesMove[0],i=t[s].coordinatesMove[1],c=s?t[s].player+" in row "+r+" and col "+i:"Go to game start";return Object(n.jsx)("li",{className:"game__move","data-move-number":s,children:Object(n.jsx)("button",{onClick:function(){return e.jumpTo(s)},className:e.state.stepNumber===s?"active":"",children:c})},s)})).sort((function(t,a){return e.state.sortAscending?t.key-a.key:a.key-t.key})),i=10===r.length&&!s;return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"game",children:Object(n.jsxs)("div",{className:"game__content",children:[Object(n.jsxs)("div",{className:"game__header",children:[Object(n.jsxs)("div",{className:"game__players",children:[Object(n.jsxs)("button",{className:"game__player game__player--left ".concat(this.state.xIsNext?"game__player--active":""," ").concat(s||i?"hidden":""),onClick:function(){return e.handlePickPlayer()},children:["X",Object(n.jsx)("span",{className:"game__player-label game__player-label--human ".concat("X"===this.currentHumanPlayerMark?"active":""),children:"You"}),Object(n.jsx)("img",{className:"game__player-icon game__player-icon--human ".concat("X"===this.currentHumanPlayerMark?"active":""),src:f,alt:"Human avatar"}),Object(n.jsx)("span",{className:"game__player-label game__player-label--bot ".concat("X"!==this.currentHumanPlayerMark?"active":""),children:"Bot"}),Object(n.jsx)("img",{className:"game__player-icon game__player-icon--bot ".concat("X"!==this.currentHumanPlayerMark?"active":""),src:N,alt:"Bot avatar"})]}),Object(n.jsxs)("button",{className:"game__player game__player--right ".concat(this.state.xIsNext?"":" game__player--active"," ").concat(s||i?"hidden":""),onClick:function(){return e.handlePickPlayer()},children:["O",Object(n.jsx)("span",{className:"game__player-label game__player-label--human ".concat("O"===this.currentHumanPlayerMark?"active":""),children:"You"}),Object(n.jsx)("img",{className:"game__player-icon game__player-icon--human ".concat("O"===this.currentHumanPlayerMark?"active":""),src:f,alt:"Human avatar"}),Object(n.jsx)("span",{className:"game__player-label game__player-label--bot ".concat("O"!==this.currentHumanPlayerMark?"active":""),children:"Bot"}),Object(n.jsx)("img",{className:"game__player-icon game__player-icon--bot ".concat("O"!==this.currentHumanPlayerMark?"active":""),src:N,alt:"Bot avatar"})]})]}),Object(n.jsx)("div",{className:"game__message ".concat(i?"is-draw":""," ").concat(s?"is-winner":""),onClick:function(){return e.handleResetGame()},children:Object(n.jsx)("h3",{className:"game__message-title",children:s?"The WINNER is "+s.player+"!!! ":"DRAW"})})]}),Object(n.jsxs)("div",{className:"game__board",children:[Object(n.jsx)("div",{className:"game__settings ".concat(this.state.showGameSettings?"game__settings--show":"game__settings--hide"),children:Object(n.jsx)(y,{settings:this.state.settings,handleSetGameType:this.handleSetGameType.bind(this),handleSetBotLevel:this.handleSetBotLevel.bind(this)})}),Object(n.jsx)(b,{winnerLine:null===s||void 0===s?void 0:s.line,squares:a.squares,onClick:function(t){return e.handleClick(t)}})]}),Object(n.jsxs)("div",{className:"game__info",children:[Object(n.jsxs)("div",{className:"game__controls",children:[Object(n.jsx)("button",{className:"game__button game__button--game-settings",onClick:function(){return e.toggleGameSettings()},disabled:r.length>1,children:"Game Settings"}),Object(n.jsxs)("button",{className:"game__button game__button--show-moves",onClick:function(){return e.toggleMoveList()},children:[Object(n.jsx)("span",{children:"".concat(this.state.showMoves?"Hide":"Show")})," ","Moves"]})]}),Object(n.jsxs)("div",{className:"game__moves-box ".concat(this.state.showMoves?"game__moves-box--opened":"game__moves-box--closed"),children:[Object(n.jsxs)("button",{className:"game__button game__button--sorting",onClick:function(){return e.toggleSorting()},disabled:r.length<2,children:["Order by ",Object(n.jsx)("span",{className:"game__button-icon",children:this.state.sortAscending?"\u25b2":"\u25bc"})]}),Object(n.jsx)("ol",{className:"game__moves",children:r})]})]})]})})})}}]),a}(m.a.Component);a(20);r.a.render(Object(n.jsx)(k,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.f582832b.chunk.js.map