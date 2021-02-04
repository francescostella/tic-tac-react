import Utils from '../components/Utils';
import Config from '../components/Config';
class AIPlayer {
  constructor(difficulty, markAIPlayer) {
    this.level = difficulty ? difficulty : Config.BOT_LEVEL.EASY;

    this.currentAIPlayerMark = markAIPlayer;
    this.currentHumanPlayerMark = markAIPlayer === 'X' ? 'O' : 'X';
    this.scores = {
      [this.currentAIPlayerMark]: 10,
      [this.currentHumanPlayerMark]: -10,
      draw: 0
    };
  }

  getLevel() {
    return this.level;
  }

  bestMove(board) {
    let bestScore = -Infinity;
    let move;

    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        board[i] = this.currentAIPlayerMark;
        let score = this.minimax(board, false);
        board[i] = null;

        if (score > bestScore) {
          bestScore = score;
          move = i;
        }
      }  
    }

    return move;
  }

  minimax(board, isMaximizing) {
    const isWinner = Utils.calculateWinner(board);
    const isDraw = Utils.calculateDraw(board);

    if (isDraw && !isWinner) {
      return this.scores['draw'];
    }

    if (isWinner) {
      return this.scores[isWinner.player];
    }

    if (isMaximizing) {
      let bestScore = -Infinity;

      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
          board[i] = this.currentAIPlayerMark;
          let score = this.minimax(board, false);
          board[i] = null;
          bestScore = Math.max(score, bestScore);
        }
      }

      return bestScore;
    }

    if (!isMaximizing) {
      let bestScore = Infinity;
      
      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
          board[i] = this.currentHumanPlayerMark;
          let score = this.minimax(board, true);
          board[i] = null;
          bestScore = Math.min(score, bestScore);
        }
      }
      
      return bestScore;
    }

  }

  playDumb(board) {
    let possibleMoves = [];

    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        possibleMoves.push(i);
      }  
    }

    return Utils.randomItemFromArray(possibleMoves);
  }

  makeMove(board, currentAIPlayerMark) {
    if (this.level === Config.BOT_LEVEL.INSANE) {
      return this.bestMove(board, currentAIPlayerMark);
    }

    return this.playDumb(board);
  }
}

export default AIPlayer;