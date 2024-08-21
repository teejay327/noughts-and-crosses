import {useState} from 'react';

const Player = ({initialName, symbol}) => {
  const [ playerName, setPlayerName ] = useState(initialName);
  const [ isEditing, setIsEditing ] = useState(false);

  function handleEditButton() {
    setIsEditing((editing) => !isEditing);
  }

  function handleChangeName(event) {
    setPlayerName(event.target.value);
  }

  let newPlayerName = <span className="player-name">{ playerName }</span>;
  let btnCaption = 'Edit';

  if (isEditing) {
    newPlayerName = <input type="text" required value={ playerName } onChange={ handleChangeName }/>;
    btnCaption = 'Save';
  }

    return (
    <li>
      <span className="player">
        { newPlayerName }
        <span className="player-symbol">{ symbol }</span>
      </span>
      <button onClick={handleEditButton}>{ btnCaption }</button>
    </li>
  );
}

export default Player;