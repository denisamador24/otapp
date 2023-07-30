import './header.css'
import logo from '/logo.png'
import { Navbar } from '@components'
import { useTranslation } from 'react-i18next'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

// icons 
import PlaceIcon from '@mui/icons-material/Place'
import MapIcon from '@mui/icons-material/Map'
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'

export const Header = () => {
  const { t } = useTranslation()

  return (
    <header>
      <div className='background-gradient'></div>
      <div className='header_container'>
        <section className='header-top'>
          <div className='header__logo'>
            <img src={logo} alt="Logo" />
            <h1>OTAPP</h1>
          </div>
          <div className='header__navbar'>
            <Navbar />
          </div>
        </section>
        <section className='header-bottom'>
          <h2>{t('welcome-ometepe')}</h2>
          <div className='header__pages'>
            <Link to='/lugares'>
              <Button
                size='large'
                sx={{ width: '250px' }}
                variant='contained'
                startIcon={<PlaceIcon />}
              >
                {t('places')}
              </Button>
            </Link>

            <Link to='/juego'>
              <Button
                size='large'
                sx={{ width: '250px' }}
                variant='contained'
                startIcon={<SportsEsportsIcon />}
              >
                {t('play')}
              </Button>
            </Link>
            <Link to='https://www.google.com/maps/@11.4738551,-85.5728412,11z'>
              <Button
                size='large'
                sx={{ width: '250px' }}
                variant='contained'
                startIcon={<MapIcon />}
              >
                {t('map')}
              </Button>
            </Link>
            <Link to='/barcos'>
              <Button
                size='large'
                sx={{ width: '250px' }}
                variant='contained'
                startIcon={<DirectionsBoatIcon />}
              >{t('ship')}</Button>
            </Link>
          </div>
        </section>
      </div>

    </header >
  )
}

export default Header