import './places.css';

import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Header, PlaceItem, Footer } from '@components';

import getPlacesData from '@utils/getPlacesData.js'

const Places = () => {
  const { t } = useTranslation();
  const navigate = useNavigate() 
  const places = getPlacesData()

  const handleNavigateToInfo = (index) => {
    navigate(`/lugares/info/${index}`)
  }

  return (
    <section className='places-page'>
      <Header title={t('places')} />
      <main className="lugares-list margin-section">
        <ul>
          {places.map((place, index) => {
            const { images, name, description } = place

            return (
              <li 
                key={place + index}
                onClick={() => handleNavigateToInfo(index)}  
              >
                <PlaceItem
                  image={images[0]}
                  name={name}
                  description={description}
                />
              </li>
            )
          })}
        </ul>
      </main>
      <Footer />
    </section>
  );
}

export default Places;