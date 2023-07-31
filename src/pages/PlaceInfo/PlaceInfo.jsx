// styles
import './place_info.css';

import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ImageSlider } from '@components';

import InfoIcon from '@mui/icons-material/Info'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone'
import EmailIcon from '@mui/icons-material/Email'

import getPlacesData from '@utils/getPlacesData.js'

const InfoLugar = () => {
  const { index } = useParams();
  const { t } = useTranslation();
  const [knowOpen, setKnowOpen] = useState(false);
  
  const place = getPlacesData(index)

  return (
    <section key={place.name} className='lugar-page'>
      <ImageSlider images={place.images} />
      
      <div className='info-lugar'>
        <h2>{place.name}</h2>
        <p className='address'
          dangerouslySetInnerHTML={{ __html: place.address}}
        ></p>
        
        <p className='description'
          dangerouslySetInnerHTML={{ __html: place.description}}
        ></p>
        
        {place.phone !== '' && <p className='phone p-center'><ContactPhoneIcon/><a href={`tel:${place.phone}`}>{place.phone}</a></p>}
        
        {place.email !== '' && <p className='phone p-center'>
            <EmailIcon/>
            <a href={`mailto:${place.email}`}>{place.email}
            </a>
          </p>}
        
        {place.services.length > 0 &&<div className='services'> 
            <p className='list-title'>{t('services')}</p>
            <ul>
              {place.services.map( (service, index) => <li key={index}>
                <p dangerouslySetInnerHTML={{ __html: service }}></p>
              </li>)}
            </ul>
          </div>
          }
          
          {place.activities.length > 0 &&<div className='activities'> 
            <p className='list-title'>{t('activities')}</p>
            <ul>
              {place.activities.map( (activity, index) => <li key={index}>
                <p dangerouslySetInnerHTML={{ __html: activity }}></p>
              </li>)}
            </ul>
          </div>
          }
          
        { (place.know !== '' && place.know !== undefined) && <div className='know'>
            <p className='p-center'
              onClick={() => setKnowOpen(!knowOpen)}
            >{t('did_you_know')}:  <InfoIcon/></p>
            <div className={knowOpen ? 'know-bubble visibility' : 'know-bubble invisibility'}> <p dangerouslySetInnerHTML={{ __html: place.know }} ></p>
            <div></div>
          </div>
          
        </div>
        }
      </div>
    </section>
  );
}

export default InfoLugar;