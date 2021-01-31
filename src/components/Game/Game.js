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
          positionMove: [0, 0],
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

    squares[i] = this.state.xIsNext ? 'X' : 'O';

    this.setState({
      history: history.concat([{
        squares: squares,
        positionMove: Utils.calculatePosition(i),
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
      const row = history[move].positionMove[0];
      const col = history[move].positionMove[1];
      const desc = move ?
        'move #' + move + ' made in row ' + row + ' and col ' + col :
        'Go to game start';
        return (
          <li key={move}>
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

    let status;

    if (winner) {
      status = 'The WINNER is ' + winner.player + '! ';
    }

    if (!winner) {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    const isDraw = moves.length === 10 && !winner;
    const classNamesMessage = 'game__message ' + (isDraw ? 'is-draw' : '') + (winner ? 'is-winner' : '');

    return (
      <div>
        <div className="game">
          <div className="game__board">
            <Board
              winnerLine={winner?.line}
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
            />
            <p className={winner || isDraw ? 'hidden' : ''}>
              {status}
            </p>
          </div>
          <div className="game__info">
            <div>
              <button 
                onClick={() => this.handleSort()}
              >
                Sort {this.state.sortAscending ? 'ASC' : 'DESC'}
              </button>
            </div>
            <ol>{moves}</ol>
          </div>
        </div>
        
        <div className={classNamesMessage}>
          <h3>{winner ? status : 'DRAW'}</h3> 
          <div>
            <button onClick={() => window.location.reload()}>
            {winner ? 'New Game' : 'Restart'}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;