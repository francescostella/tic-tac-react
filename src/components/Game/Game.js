import React from 'react';
import Board from '../Board/Board';
import Utils from '../Utils';
import './Game.style.scss'

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
          coordinatesMove: [0, 0],
        },
      ],
      stepNumber: 0,
      xIsNext: true,
      sortAscending: true,
    }

  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.history.length + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (Utils.calculateWinner(squares) || squares[i]) {
      return;
    }

    const player = this.state.xIsNext ? 'X' : 'O';

    squares[i] = player;

    this.setState({
      history: history.concat([{
        squares: squares,
        coordinatesMove: Utils.calculatePosition(i),
        player: player,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
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

      if (!this.state.sortAscending) {
        return moveB.key - moveA.key;
      }
    });

    const isDraw = moves.length === 10 && !winner;

    return (
      <div>
        <div className="game">
          <div className="game__content">
            <div className="game__header">
              <div className="game__players">
                <button 
                  className={`game__player ${this.state.xIsNext ? "game__player--active" : ""} ${winner || isDraw ? "hidden" : ""}`}
                >X</button>
                <button 
                  className={`game__player ${!this.state.xIsNext ? "game__player--active" : ""} ${winner || isDraw ? "hidden" : ""}`}
                >O</button>
              </div>

              <div 
                className={`game__message ${(isDraw ? 'is-draw' : '')} ${(winner ? 'is-winner' : '')}`}
                onClick={() => window.location.reload()}
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
                  Order by {this.state.sortAscending ? '▲' : '▼'}
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