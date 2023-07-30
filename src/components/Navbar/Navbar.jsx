import './navbar.css'
import { useState } from 'react'
import { ChangeLanguage } from '@components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const Links = (
    <ul>
      <li><a href="#info">info</a></li>
      <li><a href="#pages">Pagesskdishdihasidhasi</a></li>
      <li><a href="ships">Ships</a></li>
      <li><a href="game">Game</a></li>
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