import React from 'react';
import HumanPlayerAvatar from '../../assets/icons/icon-human.svg';
import BotPlayerAvatar from '../../assets/icons/icon-bot.svg'
import Board from '../Board/Board';
import Utils from '../Utils';
import AIPlayer from '../AIPlayer';
import './Game.style.scss'

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
    }
    
    this.isPlayingAI = false;
    this.humanPlayer = this.state.xIsNext ? 'X' : 'O';
    this.baseState = Object.assign({}, this.state);
    this.AIPlayer = new AIPlayer('easy');
  }

  handleResetGame() {
    this.setState(this.baseState)
    this.humanPlayer = this.baseState.xIsNext ? 'X' : 'O';
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
  
      const moveAI = AIPlayer.makeMove(squares);
      this.registerMove(moveAI, false);
      this.isPlayingAI = false;
    }, 1000);

  }

  isNotAllowedMove() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = Utils.calculateWinner(current.squares);

    if (winner) {
      // Prevent Players move IF there is already a winner
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

    this.humanPlayer = !this.state.xIsNext ? 'X' : 'O';
  }

  handleSort() {
    if (this.state.sortAscending) {
      // ASC
    }

    if (!this.state.sortAscending) {
      // DESC
    }

    this.setState({
      sortAscending: !this.state.sortAscending
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
                  <span className={`game__player-label game__player-label--human ${this.humanPlayer === 'X' ? 'active' : ''}`}>
                    You
                  </span>
                  <img className={`game__player-icon game__player-icon--human ${this.humanPlayer === 'X' ? 'active' : ''}`} src={HumanPlayerAvatar} alt="Human avatar"/>
                  <span className={`game__player-label game__player-label--bot ${this.humanPlayer !== 'X' ? 'active' : ''}`}>
                    Bot
                  </span>
                  <img className={`game__player-icon game__player-icon--bot ${this.humanPlayer !== 'X' ? 'active' : ''}`} src={BotPlayerAvatar} alt="Bot avatar"/>
                </button>
                <button 
                  className={`game__player game__player--right ${!this.state.xIsNext ? " game__player--active" : ""} ${winner || isDraw ? "hidden" : ""}`}
                  onClick={() => this.handlePickPlayer()}
                >O
                  <span className={`game__player-label game__player-label--human ${this.humanPlayer === 'O' ? 'active' : ''}`}>
                    You
                  </span>
                  <img className={`game__player-icon game__player-icon--human ${this.humanPlayer === 'O' ? 'active' : ''}`} src={HumanPlayerAvatar} alt="Human avatar"/>
                  <span className={`game__player-label game__player-label--bot ${this.humanPlayer !== 'O' ? 'active' : ''}`}>
                    Bot
                  </span>
                  <img className={`game__player-icon game__player-icon--bot ${this.humanPlayer !== 'O' ? 'active' : ''}`} src={BotPlayerAvatar} alt="Bot avatar"/>
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
              <Board
                winnerLine={winner?.line}
                squares={current.squares}
                onClick={(i) => this.handleClick(i)}
              />
            </div>
            <div className="game__info">
              <div className="game__controls">
                <button 
                  className="game__controls-order"
                  onClick={() => this.handleSort()}
                  disabled={moves.length < 2}
                >
                  Order by <span>{this.state.sortAscending ? '▲' : '▼'}</span>
                </button>
              </div>
              <ol className="game__moves">{moves}</ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;