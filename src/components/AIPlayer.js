import Utils from '../components/Utils';

class AIPlayer {
  level = 1;

  constructor(difficulty) {
    let levelSkills = {
      easy: 1,
      insane: 2,
    };

    this.level = levelSkills[difficulty] ? levelSkills[difficulty] : 1;
  }

  static bestMove(board) {
    let bestScore = -Infinity;
    let move;

    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        let score = this.minimax(board, 0, true);

        if (score > bestScore) {
          bestScore = score;
          move = i;
        }
      }  
    }

    return move;
  }

  minimax(board, depth, isMaximizing) {
    let scores = {
      X: 1,
      O: -1,
      tie: 0
    };

    const isWinner = Utils.calculateWinner(board);

    if (isWinner) {
      return scores[isWinner.player];
    }

    if (isMaximizing) {

    }

    return 1;
  }

  static playDumb(board) {
    let possibleMoves = [];

    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        possibleMoves.push(i);
      }  
    }

    return Utils.randomItemFromArray(possibleMoves);
  }

  static makeMove(board) {
    if (this.level === 2) {
      return this.bestMove(board);
    }

    return this.playDumb(board);
  }
}

export default AIPlayer;