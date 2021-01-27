import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    <button 
      className="square" 
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square 
        key={i}
        value={this.props.squares[i]} 
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  createBoard() {
    const template = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8]
    ];

    const board = [];

    for (let i = 0; i < template.length; i++) {
      const templateRow = template[i];
      const row = [];

      for (let j = 0; j < templateRow.length; j++) {
        const cell = templateRow[j];
        row.push(this.renderSquare(cell))
      }

      board.push(<div className="board-row" key={i}>{row}</div>)
    }
    return board;
  }

  render() {
    return (
      <div>
        {this.createBoard()}
      </div>
    );
  }
}

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

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';

    this.setState({
      history: history.concat([{
        squares: squares,
        positionMove: calculatePosition(i),
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });

    // DEV
    setTimeout(() => {
      console.log('History: ', this.state.history);
    }, 10);
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
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const row = history[move].positionMove[0];
      const col = history[move].positionMove[1];
      const desc = move ?
        'Go to move #' + move + ' made in row ' + row + ' and col ' + col :
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
      status = 'The Winner is: ' + winner + '!!!';
    }

    if (!winner) {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
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
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let index = 0; index < lines.length; index++) {
    const [a, b, c] = lines[index];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

function calculatePosition(index) {
  switch (index) {
    case 0:
      return [1, 1];
    case 1:
      return [1, 2];
    case 2:
      return [1, 3];
    case 3:
      return [2, 1];
    case 4:
      return [2, 2];
    case 5:
      return [2, 3];
    case 6:
      return [3, 1];
    case 7:
      return [3, 2];
    case 8:
      return [3, 3];

    default:
      return [1, 1];
  }
}


//===============================

ReactDOM.render(
  <Game/>,
  document.getElementById('root')
);