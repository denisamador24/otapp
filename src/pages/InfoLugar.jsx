import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import PlaceIcon from '@mui/icons-material/Place';
import InfoIcon from '@mui/icons-material/Info';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import EmailIcon from '@mui/icons-material/Email';
import './InfoLugar.css';
import lugaresEs from '../utils/lugares_es.js';
import lugaresEn from '../utils/lugares_en.js';
import resolveImg from '../utils/imageResolve.js';
import { slidesImageConfig, slidesListConfig } from '../utils/SlidesConfig.js';

const InfoLugar = () => {
  
  const { index } = useParams();
  const { t, i18n } = useTranslation();
  let lugarData; 
  if (i18n.language == 'es') {
    lugarData = lugaresEs[index];
  } else {
    lugarData = lugaresEn[index];
  }
  console.log(lugarData.know);
  
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [knowOpen, setKnowOpen] = useState(false);
  
  const [currentSlides, setCurrentSlides] = useState(0);
  
  const [sliderImageSettings] = useState({...slidesImageConfig,
    beforeChange: (oldSlide, newSlide) => setCurrentSlides(newSlide),
  });
  
  const [sliderListSetting] = useState(slidesListConfig);
  
  return (
    <>
      <div className={
        carouselOpen 
        ? 'slides-container slides-container--open'
        : 'slides-container slides-container--closed'
      }>
        <Slider {...sliderImageSettings} >
          {
            lugarData.images.map( (image) => {
              return (
              <div className='image-container'
                onClick={() => setShowImage(true)}
              >
                <img src={resolveImg(image)} />
              </div>
              )
            })
          }
       </Slider>
       <div className='full-icon'
         onClick={ () => setCarouselOpen(!carouselOpen)}
       >
         {carouselOpen ? <FullscreenExitIcon sx={{color: 'white'}}/> : <FullscreenIcon sx={{color: 'white'}}/>}
       </div>
       <div className='count-slides'>
         <span>{(currentSlides + 1) + ' / ' + lugarData.images.length} </span>
       </div>
    </div>
    
    <div className='info-lugar'>
      <h2>{lugarData.name}</h2>
      <p className='address'
        dangerouslySetInnerHTML={{ __html: lugarData.address}}
      ></p>
      
      <p className='description'
        dangerouslySetInnerHTML={{ __html: lugarData.description}}
      ></p>
      
      {lugarData.phone !== '' && <p className='phone p-center'><ContactPhoneIcon/><a href={`tel:${lugarData.phone}`}>{lugarData.phone}</a></p>}
      
      {lugarData.email !== '' && <p className='phone p-center'>
          <EmailIcon/>
          <a href={`mailto:${lugarData.email}`}>{lugarData.email}
          </a>
        </p>}
      
      {lugarData.services.length > 0 &&<div className='services'> 
          <p className='list-title'>{t('services')}</p>
          <ul>
            {lugarData.services.map( (service, index) => <li key={index}>
              <p dangerouslySetInnerHTML={{ __html: service }}></p>
            </li>)}
          </ul>
        </div>
        }
        
        {lugarData.activities.length > 0 &&<div className='activities'> 
          <p className='list-title'>{t('activities')}</p>
          <ul>
            {lugarData.activities.map( (activity, index) => <li key={index}>
              <p dangerouslySetInnerHTML={{ __html: activity }}></p>
            </li>)}
          </ul>
        </div>
        }
        
      { (lugarData.know !== '' && lugarData.know !== undefined) && <div className='know'>
          <p className='p-center'
            onClick={() => setKnowOpen(!knowOpen)}
          >{t('did_you_know')}:  <InfoIcon/></p>
          <div className={knowOpen ? 'know-bubble visibility' : 'know-bubble invisibility'}> <p dangerouslySetInnerHTML={{ __html: lugarData.know }} ></p>
          <div></div>
        </div>
        
      </div>
      }
    </div>
  </>
  );
}

export default InfoLugar;