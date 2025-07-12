import { useState } from "react";
import { nanoid } from "nanoid";
import "./ticTacToe.css";

const TicTacToe = () => {
  const [grid, setGrid] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(false);
  const [winner, setWinner] = useState(null);
  const [winningPattern, updateWinnerPattern] = useState([null, null, null]);

  const cursorSVG = encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
    <text x="0" y="30" font-size="30" font-family="Arial">${
      isXTurn ? "X" : "O"
    }</text>
  </svg>
`);

  function handleClick(index) {
    if (grid[index] != null || winner) return;
    let newGrid = [...grid];
    let player = isXTurn ? "X" : "O";
    newGrid[index] = player;

    setGrid(newGrid);
    setWinner(calculateWinner(newGrid));
    setIsXTurn(!isXTurn);
  }

  function calculateWinner(squares) {
    const winnerScenarios = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let [a, b, c] of winnerScenarios) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        updateWinnerPattern([a, b, c]);
        return "Winner is " + squares[a];
      }
    }

    if (squares.every((item) => item != null)) {
      return "GAME DRAW";
    }
    return null;
  }

  function resetGame() {
    setGrid(Array(9).fill(null));
    setWinner(null);
    updateWinnerPattern([null, null, null]);
  }

  function isWinningIndex(index) {
    return winningPattern.includes(index);
  }

  return (
    <>
      <div className="tic-tac-toe bg-basic">
        <h1 className="game-title">Tic Tac Toe</h1>
        {winner && (
          <div className="game-info">
            <div className="winner-desc">{winner}</div>
            <button onClick={resetGame}>RESET</button>
          </div>
        )}
        <div
          className={
            "grid " +
            (winner != null ? "winner-declared " : "") +
            (isXTurn ? " x-turn" : "o-turn")
          }
        >
          {grid.map((box, index) => {
            return (
              <div
                className={
                  "box " +
                  (box != null ? "filled " : "") +
                  (isWinningIndex(index) ? "winner-index " : "")
                }
                key={nanoid()}
                onClick={() => handleClick(index)}
              >
                {box}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TicTacToe;
