import Square from "./Square";
export default function Board({ square, handleClick }) {
  return (
    <div>
      <div className="board-row">
        <Square
          className="square"
          value={square[0]}
          handleClick={() => handleClick(0)}
        ></Square>
        <Square
          className="square"
          value={square[1]}
          handleClick={() => handleClick(1)}
        ></Square>
        <Square
          className="square"
          value={square[2]}
          handleClick={() => handleClick(2)}
        ></Square>
      </div>
      <div className="board-row">
        <Square
          className="square"
          value={square[3]}
          handleClick={() => handleClick(3)}
        ></Square>
        <Square
          className="square"
          value={square[4]}
          handleClick={() => handleClick(4)}
        ></Square>
        <Square
          className="square"
          value={square[5]}
          handleClick={() => handleClick(5)}
        ></Square>
      </div>
      <div className="board-row">
        <Square
          className="square"
          value={square[6]}
          handleClick={() => handleClick(6)}
        ></Square>
        <Square
          className="square"
          value={square[7]}
          handleClick={() => handleClick(7)}
        ></Square>
        <Square
          className="square"
          value={square[8]}
          handleClick={() => handleClick(8)}
        ></Square>
      </div>
    </div>
  );
}
