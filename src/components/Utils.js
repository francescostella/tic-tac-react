class Utils {
  static calculateWinner(squares) {
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
        return {
          player: squares[a],
          line: [a, b, c]
        };
      }
    }
  
    return null;
  }
  
  static calculateTie(squares) {
    if (!squares) {
      return false;
    }
  
    return squares.every((item)=> item);
  }
  
  static calculatePosition(index) {
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
  
  static randomItemFromArray(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  static getCurrentAIPlayerMark(currentHumanPlayerMark) {
    return currentHumanPlayerMark === 'X' ? 'O' : 'X';
  }
}

export default Utils;