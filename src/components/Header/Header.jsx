import logo from '/logo.png'
import { Navbar } from '@components'
import { useTranslation } from 'react-i18next'


export const Header = () => {
  const { t } = useTranslation()

  return (
    <header>
      <section className='header_top'>
        <div className='header__logo'>
          <img src={logo} alt="Logo" />
          <h1>OTAPP</h1>
        </div>
        <div className='header__navbar'>
          <Navbar />
        </div>
      </section>
      <section className='header_bottom'>
        <h2>{ t('welcome-ometepe') }</h2>
        <div className='header__pages'>

        </div>
      </section>
    </header>
  )
}

export default Header