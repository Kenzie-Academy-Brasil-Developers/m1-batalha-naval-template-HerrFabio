// Tabuleiro inicial de exemplo
const seaBoard = [
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
];

/*
  Desenvolva seu código logo abaixo
*/

function allocateShips(shipPositions, initialBoard) {
  for (let i = 0; i < shipPositions.length; i++) {
    const [row, col] = shipPositions[i];
    initialBoard[row][col] = "S";
  }
  return initialBoard;
}

function checkGuesses(guesses, mountedBoard) {
  for (let i = 0; i < guesses.length; i++) {
    const guess = guesses[i];
    const row = guess[0];
    const col = guess[1];

    if (mountedBoard[row][col] === "S") {
      mountedBoard[row][col] = "X";
    }
  }
  return mountedBoard;

}


function checkWinCondition(guessedBoard) {
  for (let row = 0; row < guessedBoard.length; row++) {
    for (let col = 0; col < guessedBoard[0].length; col++) {
      if (guessedBoard[row][col] === "S") {
        return false;
      }
    }
  }
  return true;
}

