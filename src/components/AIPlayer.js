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

  bestMove(board) {
    return;
  }

  playDumb(board) {
    let possibleMoves = [];

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i, j] === null) {
          possibleMoves.push({
            i, j
          });
        }

        return Utils.randomItemFromArray(possibleMoves);
      }
      
    }
    return;
  }

  makeMove(board) {
    if (this.level === 2) {
      return this.bestMove(board);
    }
    return this.playDumb(board);
  }
}

export default AIPlayer;