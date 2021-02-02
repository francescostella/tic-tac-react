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
    return;
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