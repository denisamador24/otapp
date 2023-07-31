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
          <Link to='/'>
            <div className='header__logo'>
              <img src={logo} alt="Logo" />
              <h1>OTAPP</h1>
            </div>
          </Link>
          <div className='header__navbar'>
            <Navbar />
          </div>
        </section>
        <section className='header-bottom'>
          <h2>{t('welcome_to_ometepe')}</h2>
        </section>
      </div>

    </header >
  )
}

export default Header