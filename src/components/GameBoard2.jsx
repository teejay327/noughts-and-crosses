const initialGameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
];

const GameBoard2 = ({ onSelectSquare, turns }) => {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex,colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });

  //   onSelectSquare();
  // };

  let gameBoard = initialGameBoard;
  // if the turns array is empty, this for of loop will not run
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return (
    <ol id="game-board">
      { gameBoard.map((row, rowIndex) => 
        <li key={rowIndex}>
          <ol>
            { row.map((playerSymbol,colIndex) => (
              <li key={ colIndex }>
                <button onClick={() => onSelectSquare(rowIndex,colIndex) }>{ playerSymbol }</button>
              </li>
            ))}
          </ol>
        </li>
      )}
    </ol>
  )
};

export default GameBoard2;