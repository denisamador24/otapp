import './home.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Button from '@mui/material/Button';

import {
  AutoStories as AutoStoriesIcon,
  Map as MapIcon,
  Place as PlaceIcon,
  DirectionsBoat as DirectionsBoatIcon,
  SportsEsports as SportsEsportsIcon
}  from '@mui/icons-material';

import { Header, SlidingPanel, ChangeLanguage } from '@components';

import resolveImg from '@utils/imageResolve.js'
import info from '@data/info.js';


const Home = () => {
  const [openedPanel, setOpenPanel] = useState(false);
  const { t, i18n } = useTranslation();
  let infoText;
  
  if (i18n.language == 'es') {
    infoText = info.es;
  } else if (i18n.language == 'en') {
    infoText = info.en;
  } else {
    infoText = info.fr;
  }

  const openPanel = () => {
    setOpenPanel(true);
  };

  const closePanel = () => {
    setOpenPanel(false);
  };
  
  
  return (
    <div className="home-page">
      <Header/>
        <ChangeLanguage/>
        <div className='read-botton'>
          <Button
            variant='outlined'
            onClick={openPanel}
            endIcon={<AutoStoriesIcon/>}
          >Info</Button>
        </div>
        <div className='buttons'>
            <Link to='/lugares'>
              <Button
                size='large'
                sx={{ width: '250px'}} 
                variant='contained'
                startIcon={<PlaceIcon/>}
              >
                {t('places')}
              </Button>
            </Link>
            
            <Link to='/juego'>
              <Button
                size='large' 
                sx={{ width: '250px'}} 
                variant='contained' 
                startIcon={<SportsEsportsIcon/>}
              >
              {t('play')}
              </Button>
            </Link>
          <Link to='https://www.google.com/maps/@11.4738551,-85.5728412,11z'>
             <Button
                size='large' 
                sx={{ width: '250px'}} 
                variant='contained' 
                startIcon={<MapIcon/>}
              >
              {t('map')}
              </Button>
          </Link>
          <Link to='/barcos'>
            <Button
              size='large'
              sx={{width: '250px'}}
              variant='contained'
              startIcon={<DirectionsBoatIcon/>}
            >{t('ship')}</Button>
          </Link>
        </div>
        <SlidingPanel
          isOpen={openedPanel}
          onClose={closePanel}
        >
          <img src={resolveImg('lago')} alt='Isla de Ometepe'/>
          <p dangerouslySetInnerHTML={{ __html: infoText}}></p>
        </SlidingPanel>
      </div>
    )
}

export default Home;