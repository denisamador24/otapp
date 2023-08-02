import './header.css'
import logo from '/logo.png'
import { Navbar } from '@components'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export const Header = ({ title }) => {
  const { t } = useTranslation()

  const titlePage = title ?  title : t('welcome_to_ometepe')

  return (
    <header>
      <div className='background-gradient'></div>
      <div className='header_container'>
        <section className='header-top'>
          <Link to='/'>
            <div className='header__logo'>
              <img width='48' src={logo} alt="Logo" />
              <h1>OTAPP</h1>
            </div>
          </Link>
          <div className='header__navbar'>
            <Navbar />
          </div>
        </section>
        <section className='header-bottom'>
          <h2>{titlePage}</h2>
        </section>
      </div>
    </header >
  )
}

export default Header