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
} from '@mui/icons-material';

import { Header, SlidingPanel } from '@components';
import PlacesPreview from './sections/PlaceList/PlacesPreview';

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
      <Header />
      <div id='places' className='home-page__margin-section'>
        <PlacesPreview />
      </div>
      {/* <SlidingPanel
        isOpen={openedPanel}
        onClose={closePanel}
      >
        <img src={resolveImg('lago')} alt='Isla de Ometepe' />
        <p dangerouslySetInnerHTML={{ __html: infoText }}></p>
      </SlidingPanel> */}
    </div>
  )
}

export default Home;