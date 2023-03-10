import Board from "./Board";
import { useState } from "react";
export default function Game() {
  const [history, setHistory] = useState([Array(9).fill()]);
  const [isX, setIsX] = useState(true);
  const square = history[history.length - 1];

  const handleClick = (i) => {
    if (!square[i] && !calculateWinner(square)) {
      if (isX) {
        const newSquare = [...square];
        newSquare[i] = "X";
        const newhistory = [...history, newSquare];
        setHistory(newhistory);
        setIsX(!isX);
      } else {
        const newSquare = [...square];
        newSquare[i] = "O";
        const newhistory = [...history, newSquare];
        setHistory(newhistory);
        setIsX(!isX);
      }
    }
  };
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
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
  return (
    <div>
      <div>
        <h1>
          {calculateWinner(square)
            ? `winner is ${calculateWinner(square)}`
            : `next is ${isX ? "X" : "O"}`}
        </h1>
        <Board square={square} handleClick={handleClick}></Board>
      </div>
      <div className="game-info">
        <ol>
          {history.map((item, index) => (
            <li key={index}>
              <button
                className="status"
                onClick={() => {
                  let newhistory = [...history];
                  newhistory = newhistory.slice(0, index + 1);
                  console.log(newhistory.length % 2);
                  setIsX(newhistory.length % 2);
                  setHistory(newhistory);
                }}
              >{`back to ${index}`}</button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
