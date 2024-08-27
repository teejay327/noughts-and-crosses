import { useState } from 'react';
import Player from './components/Player.jsx';
import GameBoard2 from './components/GameBoard2.jsx';
import Log from './components/Log.jsx';

function App() {
  const [ gameTurns,  setGameTurns ] = useState([]);
  const [ activePlayer, setActivePlayer ] = useState('X');

  function handleSelectSquare(rowIndex,colIndex) {
    setActivePlayer((currActivePlayer) => currActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns(prevTurns => {
      let currPlayer = 'X';
      if (prevTurns.length > 0 && prevTurns[0] === 'X') currPlayer = 'O';

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex}, player: activePlayer  },
         ...prevTurns
      ];

      return updatedTurns;
    });
  };

  return <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName="Player 1" symbol="X" isActive={ activePlayer === 'X'}/>
        <Player initialName="Player 2" symbol="O" isActive={ activePlayer === 'O'}/>
      </ol>
      <GameBoard2 onSelectSquare={ handleSelectSquare } turns={ gameTurns } />
    </div>
    <Log turns={ gameTurns } />
  </main>
}

export default App
