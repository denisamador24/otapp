import './places_preview.css'
import { useTranslation } from 'react-i18next'
import { PlaceItem } from '@components'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

import PlaceIcon from '@mui/icons-material/Place'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'

import getPlacesData from '@utils/getPlacesData.js'

const PlacesPreview = () => {
  const { t } = useTranslation()
  const COUNT_PLACES = 8
  const places = getPlacesData().slice(0, COUNT_PLACES)

  return (
    <section className='place-preview'>
      <div className='place-preview__title'>
        <h3>{t('places')}</h3>
      </div>
      <div className='place-preview__see-more'>
        <Link to='/lugares'>
          <Button
            variant='outlined'
            endIcon={<PlaceIcon/>}
          >
            {t('see_more')}
          </Button>
        </Link>
      </div>
      <div className='place-preview__list'>
        <ul>
          {places.map((place, index) => {
            return (
              <li className='place-preview__item'>
                <PlaceItem
                  name={place.name}
                  description={place.description}
                  image={place.images[0]}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default PlacesPreview