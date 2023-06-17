import { useTranslation } from 'react-i18next';

import './InitGame.css';
import Button from '@mui/material/Button';
import Header from '../components/Header.jsx';

const InitGame = ({setGame}) => {
  const { t } = useTranslation();
  return(
    <div className='container'>
      <Header/>
        <div className='instructions'>
          <h3>{t('game_rules')}</h3>
          <p>1) {t('rule1')}</p>
          <p>2) {t('rule2')}</p>
          <p>3) {t('rule3')}</p>
        </div>
        <div className='button-container'>
          <Button size='large' variant='contained' 
           onClick={() => setGame('playing')}
        >{t('continue')}</Button>
        </div>
      </div>
  )
}

export default InitGame;