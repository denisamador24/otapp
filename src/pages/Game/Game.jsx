import './game.css';

import { useState } from 'react';

import InitGame from './InitGame/InitGame.jsx';
import Playing from './Playing/Playing.jsx';
import FinisedGame from './FinishedGame/FinishedGame.jsx';

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