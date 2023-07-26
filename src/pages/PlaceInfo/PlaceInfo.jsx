// styles
import './place_info.css';

import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ImageSlider } from '@components';

import {
  Info as InfoIcon, 
  ContactPhone as ContactPhoneIcon, 
  Email as EmailIcon
} from '@mui/icons-material';

import lugaresEs from '@data/lugares_es.js';
import lugaresEn from '@data/lugares_en.js';
import lugaresFr from '@data/lugares_fr.js';

const InfoLugar = () => {
  const { index } = useParams();
  const { t, i18n } = useTranslation();
  const [knowOpen, setKnowOpen] = useState(false);
  
  let lugarData; 
  if (i18n.language == 'es') {
    lugarData = lugaresEs[index];
  } else if (i18n.language == 'en') {
    lugarData = lugaresEn[index];
  } else {
    lugarData = lugaresFr[index];
  }

  return (
    <section key={lugarData.name} className='lugar-page'>
      <ImageSlider images={lugarData.images} />
      
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
    </section>
  );
}

export default InfoLugar;