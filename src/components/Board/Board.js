import React from 'react';
import Square from '../Square/Square'; 
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

  createBoard(rows, columns) {
    const board = [];
    let cellsCounter = 0;

    for (let i = 0; i < rows; i++) {
      const row = [];

      for (let j = 0; j < columns; j++) {
        row.push(this.renderSquare(cellsCounter++));
      }

      board.push(<div className="board-row" key={i}>{row}</div>)
    }
    
    return board;
  }

  render() {
    return (
      <div>
        {this.createBoard(4, 4)}
      </div>
    );
  }
}

export default Board;