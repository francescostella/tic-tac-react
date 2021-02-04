import React from 'react';

// Components
import Board from '../Board/Board';
import GameSettings from '../GameSettings/GameSettings';

// Classes
import AIPlayer from '../AIPlayer';
import Utils from '../Utils';
import Config from '../Config';


// Assets
import './Game.style.scss'
import HumanPlayerAvatar from '../../assets/icons/icon-human.svg';
import BotPlayerAvatar from '../../assets/icons/icon-bot.svg'

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
          coordinatesMove: [0, 0],
          isHuman: true,
        },
      ],
      stepNumber: 0,
      xIsNext: true,
      sortAscending: true,
      showMoves: false,
      showGameSettings: true,
      settings: {
        gameType: Config.GAME_TYPE.HUMAN_VS_BOT,
        botLevel: Config.BOT_LEVEL.EASY
      },
    }
    
    // Clone initial state, so it can be used on reset game
    this.baseState = Object.assign({}, this.state);

    this.currentHumanPlayerMark = this.state.xIsNext ? 'X' : 'O';
    this.AIPlayer = new AIPlayer('insane', Utils.getCurrentAIPlayerMark(this.currentHumanPlayerMark));
    
    // Flag used to keep track of when the AI is playing
    // in order to prevent any UI interaction causing overlapses
    this.isPlayingAI = false;
  }

  handleResetGame() {
    this.setState(this.baseState)
    this.currentHumanPlayerMark = this.baseState.xIsNext ? 'X' : 'O';
  }

  handleClick(i) {
    if (this.isNotAllowedMove() || this.isPlayingAI) {
      return;
    }

    this.registerMove(i, true);
  }

  registerMove(move, currentIsHuman) {
    const history = this.state.history.slice(0, this.state.history.length + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (squares[move]) {
      return;
    }

    const player = this.state.xIsNext ? 'X' : 'O';

    squares[move] = player;

    this.setState({
      history: history.concat([{
        squares: squares,
        coordinatesMove: Utils.calculatePosition(move),
        player: player,
        isHuman: currentIsHuman
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    }, () => {
      if (currentIsHuman) {
        this.passTurnToAI();
      }
    });
  }

  passTurnToAI() {
    if (this.isNotAllowedMove()) {
      return;
    }

    this.isPlayingAI = true;

    setTimeout(() => {
      const history = this.state.history.slice(0, this.state.history.length + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
  
      const moveAI = this.AIPlayer.makeMove(squares, Utils.getCurrentAIPlayerMark(this.currentHumanPlayerMark));
      this.registerMove(moveAI, false);
      this.isPlayingAI = false;
    }, Config.DELAY_AIPLAYER_MOVE);
  }

  isNotAllowedMove() {
    const history = this.state.history;
    const current = history[history.length - 1];

    if (Utils.calculateWinner(current.squares)) {
      // Prevent Players move IF there is already a winner
      return true;
    }

    if (Utils.calculateDraw(current.squares)) {
      // Prevent Players move IF it's a draw
      return true;
    }

    if ((this.state.history.length - 1) !== this.state.stepNumber) {
      // Prevent Players to make a new move if 
      // a the players are visualizing a previous
      // move using the 'Moves' tool
      return true;
    }
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  handlePickPlayer() {
    if (this.state.stepNumber !== 0 || this.state.history.length > 1) {
      // Do nothing if the game is already started
      return;
    }

    this.setState({
      xIsNext: !this.state.xIsNext
    });

    this.currentHumanPlayerMark = !this.state.xIsNext ? 'X' : 'O';
    this.AIPlayer = new AIPlayer('insane', Utils.getCurrentAIPlayerMark(this.currentHumanPlayerMark));
  }

  toggleSorting() {
    this.setState({
      sortAscending: !this.state.sortAscending
    });
  }

  toggleMoveList() {
    this.setState({
      showMoves: !this.state.showMoves
    });
  }

  toggleGameSettings() {
    this.setState({
      showGameSettings: !this.state.showGameSettings
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = Utils.calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const row = history[move].coordinatesMove[0];
      const col = history[move].coordinatesMove[1];

      const desc = move ?
        history[move].player + ' in row ' + row + ' and col ' + col :
        'Go to game start';
        return (
          <li className="game__move" key={move} data-move-number={move}>
            <button 
              onClick={() => this.jumpTo(move)}
              className={this.state.stepNumber === move ? 'active' : ''}
            >{desc}</button>
          </li>
        );
    }).sort((moveA, moveB) => {
      if (this.state.sortAscending) {
        return moveA.key - moveB.key;
      }

      return moveB.key - moveA.key;
    });

    const isDraw = moves.length === 10 && !winner;

    return (
      <div>
        <div className="game">
          <div className="game__content">
            <div className="game__header">
              <div className="game__players">
                <button 
                  className={`game__player game__player--left ${this.state.xIsNext ? "game__player--active" : ""} ${winner || isDraw ? "hidden" : ""}`}
                  onClick={() => this.handlePickPlayer()}
                >X 
                  <span className={`game__player-label game__player-label--human ${this.currentHumanPlayerMark === 'X' ? 'active' : ''}`}>
                    You
                  </span>
                  <img className={`game__player-icon game__player-icon--human ${this.currentHumanPlayerMark === 'X' ? 'active' : ''}`} src={HumanPlayerAvatar} alt="Human avatar"/>
                  <span className={`game__player-label game__player-label--bot ${this.currentHumanPlayerMark !== 'X' ? 'active' : ''}`}>
                    Bot
                  </span>
                  <img className={`game__player-icon game__player-icon--bot ${this.currentHumanPlayerMark !== 'X' ? 'active' : ''}`} src={BotPlayerAvatar} alt="Bot avatar"/>
                </button>
                <button 
                  className={`game__player game__player--right ${!this.state.xIsNext ? " game__player--active" : ""} ${winner || isDraw ? "hidden" : ""}`}
                  onClick={() => this.handlePickPlayer()}
                >O
                  <span className={`game__player-label game__player-label--human ${this.currentHumanPlayerMark === 'O' ? 'active' : ''}`}>
                    You
                  </span>
                  <img className={`game__player-icon game__player-icon--human ${this.currentHumanPlayerMark === 'O' ? 'active' : ''}`} src={HumanPlayerAvatar} alt="Human avatar"/>
                  <span className={`game__player-label game__player-label--bot ${this.currentHumanPlayerMark !== 'O' ? 'active' : ''}`}>
                    Bot
                  </span>
                  <img className={`game__player-icon game__player-icon--bot ${this.currentHumanPlayerMark !== 'O' ? 'active' : ''}`} src={BotPlayerAvatar} alt="Bot avatar"/>
                </button>
              </div>

              <div 
                className={`game__message ${(isDraw ? 'is-draw' : '')} ${(winner ? 'is-winner' : '')}`}
                onClick={() => this.handleResetGame()}
              >
                <h3 className="game__message-title">
                  {winner ? 'The WINNER is ' + winner.player + '!!! ' : 'DRAW'}
                </h3> 
              </div>
            </div>
            <div className="game__board">
              <div className={`game__settings ${this.state.showGameSettings ? 'game__settings--show' : 'game__settings--hide'}`}>
                <GameSettings settings={this.state.settings} />
              </div>
              
              <Board
                winnerLine={winner?.line}
                squares={current.squares}
                onClick={(i) => this.handleClick(i)}
              />
            </div>
            <div className="game__info">
              <div className="game__controls">
                <button 
                  className="game__button game__button--game-settings"
                  onClick={() => this.toggleGameSettings()}
                  disabled={moves.length > 1}
                >
                  Game Settings
                </button>
                <button 
                  className="game__button game__button--show-moves"
                  onClick={() => this.toggleMoveList()}
                >
                  <span>{`${(this.state.showMoves ? "Hide" : "Show")}`}</span>
                  {' '}Moves
                </button>
              </div>
              <div className={`game__moves-box ${this.state.showMoves ? "game__moves-box--opened" : "game__moves-box--closed"}`}>
                <button 
                  className="game__button game__button--sorting"
                  onClick={() => this.toggleSorting()}
                  disabled={moves.length < 2}
                >
                  Order by <span className="game__button-icon">{this.state.sortAscending ? '▲' : '▼'}</span>
                </button>
                <ol className="game__moves">{moves}</ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;