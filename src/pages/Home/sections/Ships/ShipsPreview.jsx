import './ships_preview.css'
import { useTranslation } from 'react-i18next'
import { ShipItem } from '@components'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import BoatIcon from '@mui/icons-material/DirectionsBoat'
import dataShips from '@data/dataShips.js';
import { useState } from 'react'

const ShipsPreview = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const COUNT_PLACES = 4
  const ships = dataShips.slice(0, COUNT_PLACES)

  const navigateInfoPlace = (index) => {
    navigate('/lugares/info/'+info)
  }

  return (
    <section className='ship-preview margin-section'>
      <div className='ship-preview__title'>
        <h3>{t('ship')}</h3>
      </div>
      <div className='ship-preview__see-more'>
        <Link to='/barcos'>
          <Button
            variant='outlined'
            endIcon={<BoatIcon/>}
          >
            {t('see_more')}
          </Button>
        </Link>
      </div>
      <div className='ship-preview__list'>
        <ul>
          {ships.map((ship, index) => {
            return (
              <li 
                key={index} 
                className='ship-preview__item'
                onClick={() => navigateInfoPlace(index)}     
              >
                <ShipItem
                  name={ship.name}
                  schedule={ship.schedule}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default ShipsPreview