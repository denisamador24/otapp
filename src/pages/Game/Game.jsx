import './game.css';

import InitGame from '../frames/InitGame.jsx';
import { useState } from 'react';
import Playing from '../frames/Playing.jsx';
import FinisedGame from '../frames/FinishedGame.jsx';
const Game = () => {
  const [game, setGame] = useState('init');
  
  return (
    <>
      {game === 'init' && <InitGame setGame={setGame}/>}
      
      {game === 'playing' && <Playing setGame={setGame}/>}
      
      {game === 'finished' && <FinisedGame setGame={setGame}/>}
    </>
  );
}

export default Game;