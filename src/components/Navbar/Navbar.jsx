import './navbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ChangeLanguage } from '@components'

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const { t } = useTranslation()
  const [toggleMenu, setToggleMenu] = useState(false)

  const Links = (
    <ul>
      <li>
        <Link to='/info'>Info</Link>
      </li>
      <li>
        <Link to='https://maps.google.com'>{t('map')}</Link>
      </li>
      <li>
        <Link to="/lugares">{t('places')}</Link>
      </li>
      <li>
        <Link to="/barcos">{t('ship')}</Link>
      </li>
      <li>
        <Link to="/juego">{t('play')}</Link>
      </li>
    </ul>
  )

  return (
    <nav>
      <div className='navbar__links'>
        {Links}
      </div>
      <div className='navbar__translation'>
        <ChangeLanguage />
      </div>
      <div className='navbar__menu'>
        {toggleMenu
          ? <CloseIcon onClick={() => setToggleMenu(false)} />
          : <MenuIcon onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="navbar__menu-container scale-up-center">
            <div className="navbar__menu-container_links">
              {Links}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar