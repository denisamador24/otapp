import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Header from '../components/Header.jsx';
import SlidingPanel from '../components/SlidingPanel.jsx';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ChangeLanguage from '../components/ChangeLanguage.jsx';
import Stack from '@mui/material/Stack';

import { useTranslation } from 'react-i18next';
import resolveImg from '../utils/imageResolve.js'
import info from '../utils/info.js';

// Styles 
import './Home.css';

const Home =  () => {
  const [openedPanel, setOpenPanel] = useState(false);

  const openPanel = () => {
    setOpenPanel(true);
  };

  const closePanel = () => {
    setOpenPanel(false);
  };
  const { t, i18n } = useTranslation();
  
  
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
              >
                {t('places')}
              </Button>
            </Link>
            
            <Link to='/juego'>
              <Button
                size='large' 
                sx={{ width: '250px'}} 
                variant='contained' 
              >
              {t('play')}
              </Button>
            </Link>
          <Link to='https://www.google.com/maps/@11.4738551,-85.5728412,11z'>
             <Button
                size='large' 
                sx={{ width: '250px'}} 
                variant='contained' 
              >
              {t('map')}
              </Button>
          </Link>
        
        </div>
        <SlidingPanel
          isOpen={openedPanel}
          onClose={closePanel}
        >
          <img src={resolveImg('lago')} alt='Isla de Ometepe'/>
          <p dangerouslySetInnerHTML={{ __html: i18n.language == 'es' ? info.es : info.en}}></p>
        </SlidingPanel>
      </div>
    )
}

export default Home;