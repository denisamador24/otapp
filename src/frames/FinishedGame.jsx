import './FinishedGame.css';
import Button from '@mui/material/Button';
import Header from '../components/Header.jsx';
import { useTranslation } from 'react-i18next';

const FinishedGame = ({ setGame }) => {
  const { t } = useTranslation();
  
  const maxScore = window.localStorage.getItem('max_score');
  const score = window.localStorage.getItem('score');
  
  const handlePlayAgain = ()=> {
    setGame('playing');
  }
  return (
    <div className='finished-game'>
      <Header/>
      <h2>{t('end_of_the_game')}</h2>
      <p>{t('score_earned')}: {score}</p>
      <p>{t('maximum_score')}: {maxScore}</p>
      <div className='finished-game__buttons'>
        
         <Button
            variant='contained'
            onClick={ () => {
             window.history.back();
            }}
          >{t('go_back')}</Button>
        
         <Button 
          variant='contained'
          onClick={handlePlayAgain}>{t('play_again')}</Button>
      </div>
    </div>
  );
}

export default FinishedGame;