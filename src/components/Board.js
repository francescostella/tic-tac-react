import React from 'react';
import Square from './Square'; 
import './Board.styles.css'

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square 
        key={i}
        cellKey={i}
        value={this.props.squares[i]} 
        winnerLine={this.props.winnerLine}
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

export default Board;